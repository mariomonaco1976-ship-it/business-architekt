const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const js=fs.readFileSync(path.join(__dirname,'../public/assets/site.js'),'utf8');
for(const [values,expected] of [[[8,30,45,20],['80','3.600','43.200']],[[1,60,100,20],['20','2.000','24.000']],[[0,30,45,20],['0','0','0']],[[8,15,45,20],['40','1.800','21.600']]]){
const elements={},events={};['ma','min','eur','tage'].forEach((id,i)=>elements[id]={value:values[i],addEventListener:(_,fn)=>events[id]=fn});['h','m','j'].forEach(id=>elements[id]={});
vm.runInNewContext(js,{Intl,document:{getElementById:id=>elements[id],querySelectorAll:()=>[]},window:{},matchMedia:()=>({matches:true})});
assert.deepEqual(['h','m','j'].map(id=>elements[id].textContent),expected);elements.ma.value=0;events.ma();assert.equal(elements.j.textContent,'0');
}
console.log('PASS: calculator defaults, alternative values, zero, input recalculation (simulated DOM)');
