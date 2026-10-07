"""Read-only checks for the approved positioning pass. Run after npm run build."""
from pathlib import Path
from html.parser import HTMLParser
import json
import re
import subprocess
import unittest
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]

class Document(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.sections, self.links, self.ids, self.buttons = [], [], [], []
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'section': self.sections.append(a.get('id'))
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'button': self.buttons.append(a)
        for key in ('href', 'src'):
            if key in a: self.links.append(a[key])

class PassOne(unittest.TestCase):
    def test_onepage_contract(self):
        text = (ROOT / 'index.html').read_text(encoding='utf-8')
        page = Document(text)
        self.assertEqual(page.sections, ['start', 'zeit', 'systemblick', 'entscheidung', 'haltung', 'mario', 'tea-time'])
        self.assertEqual(len(page.ids), len(set(page.ids)))
        self.assertIn('Wirtschaftlich stärker durch KI.', text)
        self.assertIn('Tee ist übrigens keine Voraussetzung. Ich habe nur meistens einen dabei.', text)
        self.assertNotIn('data-node=', text)
        self.assertNotIn('cost-chain', text)
        self.assertNotIn('<form', text)
        self.assertNotIn('<iframe', text)
        self.assertIn('https://cal.eu/business-architekt/tea-time', page.links)
        self.assertIn('Tea Time buchen · 79 €', text)
        self.assertIn('mailto:hi@mariowittmer.de', page.links)

    def test_inactive_contact_archived_byte_exact(self):
        self.assertFalse((ROOT / 'functions/api/contact.js').exists())
        original = subprocess.check_output(['git', '-C', str(ROOT), 'show', 'pre-positioning-2026-10-06:functions/api/contact.js'])
        archive = (ROOT / 'docs/archive/contact-function/contact.js').read_bytes()
        self.assertEqual(archive.replace(b'\r\n', b'\n'), original.replace(b'\r\n', b'\n'))
        js = (ROOT / 'assets/site.js').read_text(encoding='utf-8')
        self.assertNotIn('/api/contact', js)
        self.assertNotIn('data-system-network', js)
        self.assertNotIn('cost-chain', js)

    def test_legal_contact_addresses_remain_separate(self):
        impressum = (ROOT / 'impressum/index.html').read_text(encoding='utf-8')
        datenschutz = (ROOT / 'datenschutz/index.html').read_text(encoding='utf-8')
        self.assertIn('E-Mail: kontakt [at] mariowittmer.de', impressum)
        self.assertIn('E-Mail: kontakt@mariowittmer.de', datenschutz)
        self.assertIn('mailto:kontakt@mariowittmer.de', impressum)
        self.assertIn('mailto:kontakt@mariowittmer.de', datenschutz)

    def test_stylesheet_cache_keys_and_revalidation(self):
        for name in ('index.html', 'agb/index.html', 'datenschutz/index.html', 'impressum/index.html'):
            text = (ROOT / name).read_text(encoding='utf-8')
            css = re.search(r'<link rel="stylesheet" href="/assets/site\.css\?v=([^"]+)"', text)
            js = re.search(r'<script src="/assets/site\.js\?v=([^"]+)"', text)
            self.assertIsNotNone(css, name)
            self.assertIsNotNone(js, name)
            self.assertEqual(css.group(1), js.group(1), name)
        headers = (ROOT / '_headers').read_text(encoding='utf-8')
        for asset in ('site.css', 'site.js'):
            self.assertRegex(headers, rf'/assets/{re.escape(asset)}\s+Cache-Control: public, max-age=0, must-revalidate')

    def test_public_output_and_links(self):
        dist = ROOT / 'dist'
        pages = sorted(p.relative_to(dist).as_posix() for p in dist.rglob('*.html'))
        self.assertEqual(pages, ['agb/index.html', 'datenschutz/index.html', 'impressum/index.html', 'index.html'])
        for name in ('functions', 'docs', 'tests', 'kontakt', 'human-system-fit', 'pflichtvorteil'):
            self.assertFalse((dist / name).exists(), name)
        for path in pages:
            text = (dist / path).read_text(encoding='utf-8')
            for link in Document(text).links:
                parts = urlsplit(link)
                if parts.scheme or parts.netloc: continue
                target = dist / unquote(parts.path.lstrip('/')) if parts.path.startswith('/') else (dist / path).parent / unquote(parts.path) if parts.path else dist / path
                if target.is_dir(): target /= 'index.html'
                self.assertTrue(target.exists(), f'{path}: {link}')
                if parts.fragment:
                    self.assertIn(unquote(parts.fragment), Document(target.read_text(encoding='utf-8')).ids, f'{path}: {link}')
            for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', text, re.S):
                json.loads(block)

    def test_redirect_targets(self):
        expected = {'/human-system-fit/':'/', '/pflichtvorteil/':'/', '/realisation/':'/', '/faq/':'/', '/kontakt/':'/#tea-time', '/vorgehen/':'/#systemblick', '/ueber-mario/':'/#mario', '/warum-ich/':'/#mario', '/ueber-mich/':'/#mario'}
        rows = [l.split() for l in (ROOT / '_redirects').read_text().splitlines() if l.strip() and not l.startswith('#')]
        actual = {a:b for a,b,c in rows}
        self.assertEqual(actual, expected)
        home = Document((ROOT / 'index.html').read_text(encoding='utf-8'))
        for old, target, status in rows:
            self.assertEqual(status, '301')
            self.assertNotIn(target, actual)
            if '#' in target: self.assertIn(target.split('#',1)[1], home.ids)
            self.assertFalse((ROOT / 'dist' / old.strip('/')).exists())

if __name__ == '__main__':
    unittest.main(verbosity=2)
