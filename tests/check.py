from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import re
ROOT=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__();self.links=[];self.ids=[];self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  for k in ('src','href'):
   if k in a:self.links.append(a[k])
  if 'srcset' in a:self.links.extend(s.strip().split()[0] for s in a['srcset'].split(','))
public=ROOT/'public'
pages=list(public.rglob('*.html'))
assert len(pages)==4
for p in pages:
 text=p.read_text(encoding='utf-8');doc=Page(text)
 assert len(doc.ids)==len(set(doc.ids)),p
 assert 'menschlich. wirksam. mehr wert.' in text,p
 assert 'Menschlich. Mehr Wert. Wirksam.' not in text,p
 assert 'https://cal.eu/business-architekt/tea-time' in doc.links,p
 for link in doc.links:
  assert not link.startswith('['),link
  u=urlsplit(link)
  if u.scheme:
   assert u.scheme in ('https','mailto','tel'),link
   continue
  target=public/unquote(u.path.lstrip('/')) if u.path.startswith('/') else p.parent/unquote(u.path) if u.path else p
  if target.is_dir():target/='index.html'
  assert target.is_file(),(p,link)
  if u.fragment:assert u.fragment in Page(target.read_text(encoding='utf-8')).ids,(p,link)
for name in ('agb',):
 source=(ROOT/'reference'/f'{name}.html').read_text(encoding='utf-8')
 actual=(public/name/'index.html').read_text(encoding='utf-8')
 body=lambda s:re.search(r'<main[^>]*>(.*?)</main>',s,re.S).group(1)
 assert body(source)==body(actual),f'Legal content changed: {name}'
print('PASS: 4 pages, all internal links/anchors/assets, booking targets, claim, AGB body byte-identical to reference')

# Required finalization invariants.
home=(public/'index.html').read_text(encoding='utf-8')
assert re.findall(r'<section[^>]* id="([^"]+)"',home)==['start','problem','case','rechner','zukunft','ueber','vorgehen','tea-time']
assert home.index('780 Stunden pro Jahr')<home.index('Ein Beispiel: Acht Mitarbeiter')<home.index('Wie hoch sind die Reibungskosten')
assert home.count('+11.000')==2 and home.count('+700')==2
assert re.findall(r'data-count="(\d+)"',home)==['25','11000','700']
assert '+7.000' not in home and 'data-count="600"' not in home
assert 'rechnerisches Einsparpotenzial' in home
impressum=(public/'impressum/index.html').read_text(encoding='utf-8')
assert 'tel:+498920004954' in impressum and '089 2000 4954' in impressum
privacy=(public/'datenschutz/index.html').read_text(encoding='utf-8')
for phrase in ('NocoDB','zwölf Monate','manuell','keine automatisierte'):
 assert phrase in privacy or (phrase=='keine automatisierte' and 'eine automatisierte Löschung findet nicht statt' in privacy)
assert 'innerhalb von drei Tagen' not in privacy
# All previous URL paths redirect to existing current anchors, without chains.
rows=[l.split() for l in (public/'_redirects').read_text().splitlines()]
assert len(rows)==18
for old,target,status in rows:
 assert status=='301' and target.startswith('/')
 if '#' in target:assert target.split('#')[1] in Page(home).ids
for p in pages:
 text=p.read_text(encoding='utf-8')
 assert len(re.findall(r'<link rel="canonical"',text))==1
 assert '<meta name="description"' in text and '<meta property="og:image"' in text
 assert 'fonts.googleapis.com' not in text
css=(public/'assets/site.css').read_text(encoding='utf-8')
assert '.btn.pri{color:#fff}' in css and '--accent:#1A5D68' in css
assert '@media(prefers-reduced-motion:reduce)' in css
assert 'width="1122" height="1402"' in home and 'portrait-480.jpg 480w' in home
print('PASS: section order, new animated counts, legal corrections, 18 legacy redirects, SEO and static responsive/a11y invariants')

assert all(anchor in Page(home).ids for anchor in ['start','systemblick','mario'])
