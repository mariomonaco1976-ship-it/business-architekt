import fs from 'node:fs';
import path from 'node:path';
const source=path.resolve('public'),output=path.resolve('dist');
// Never delete files. Refuse stale output instead of accidentally deploying it.
function files(dir){return fs.existsSync(dir)?fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]):[]}
for(const file of files(output)){if(!fs.existsSync(path.join(source,path.relative(output,file))))throw Error('Unexpected output file: '+file)}
fs.cpSync(source,output,{recursive:true});
console.log('Static deployment artifact ready: dist/ (preview noindex retained)');
