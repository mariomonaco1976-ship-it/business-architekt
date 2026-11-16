import fs from 'node:fs';
import path from 'node:path';
const explicitProduction=process.argv.includes('--production');
const production=explicitProduction || process.env.CF_PAGES_BRANCH==='main';
const source=path.resolve('public'),output=path.resolve(explicitProduction?'dist-production':'dist');
function files(dir){return fs.existsSync(dir)?fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]):[]}
for(const file of files(output)){if(!fs.existsSync(path.join(source,path.relative(output,file))))throw Error('Unexpected output file: '+file)}
fs.cpSync(source,output,{recursive:true});
if(production){
 for(const file of files(output).filter(f=>f.endsWith('.html'))){fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace(/<meta name="robots" content="noindex, nofollow">/g,''))}
 const headers=path.join(output,'_headers');fs.writeFileSync(headers,fs.readFileSync(headers,'utf8').replace(/^  X-Robots-Tag: noindex, nofollow\r?\n/gm,''));
 fs.writeFileSync(path.join(output,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://mariowittmer.de/sitemap.xml\n');
}
console.log(`Static ${production?'production (indexable)':'preview (noindex)'} artifact ready: ${output}`);
