const fs=require('node:fs'),assert=require('node:assert/strict'),path=require('node:path');
for(const [dir,production] of [['dist',false],['dist-production',true]]){
 const root=path.join(__dirname,'..',dir);let count=0;function walk(p){for(const e of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,e.name);if(e.isDirectory())walk(f);else if(f.endsWith('.html')){const text=fs.readFileSync(f,'utf8');assert.equal(text.includes('noindex'),!production);assert(text.includes('https://mariowittmer.de'));count++}}}walk(root);assert.equal(count,4);
 const headers=fs.readFileSync(path.join(root,'_headers'),'utf8'),robots=fs.readFileSync(path.join(root,'robots.txt'),'utf8');assert.equal(headers.includes('noindex'),!production);assert.equal(robots.includes('Disallow: /'),!production);if(production)assert(robots.includes('Sitemap: https://mariowittmer.de/sitemap.xml'));assert(!fs.existsSync(path.join(root,'reference')));assert(!fs.existsSync(path.join(root,'tests')));
}
console.log('PASS: preview excluded, production indexable; four pages per artifact; internal files not published');
