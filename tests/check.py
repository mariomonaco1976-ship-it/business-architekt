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
 assert 'Menschlich. Wirksam. Mehr Wert.' in text,p
 assert 'Menschlich. Mehr Wert. Wirksam.' not in text,p
 assert 'https://cal.eu/business-architekt/tea-time' in doc.links,p
 for link in doc.links:
  assert not link.startswith('['),link
  u=urlsplit(link)
  if u.scheme:
   assert u.scheme in ('https','mailto'),link
   continue
  target=public/unquote(u.path.lstrip('/')) if u.path.startswith('/') else p.parent/unquote(u.path) if u.path else p
  if target.is_dir():target/='index.html'
  assert target.is_file(),(p,link)
  if u.fragment:assert u.fragment in Page(target.read_text(encoding='utf-8')).ids,(p,link)
for name in ('impressum','datenschutz','agb'):
 source=(ROOT/'reference'/f'{name}.html').read_text(encoding='utf-8')
 actual=(public/name/'index.html').read_text(encoding='utf-8')
 body=lambda s:re.search(r'<main[^>]*>(.*?)</main>',s,re.S).group(1)
 assert body(source)==body(actual),f'Legal content changed: {name}'
print('PASS: 4 pages, all internal links/anchors/assets, booking targets, claim, legal bodies byte-identical to references')
