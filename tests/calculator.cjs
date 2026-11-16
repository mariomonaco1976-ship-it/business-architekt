const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const js=fs.readFileSync(path.join(__dirname,'../public/assets/site.js'),'utf8');
for(const [values,expected] of [[[8,30,45,20],['80','3.600','43.200']],[[1,60,100,20],['20','2.000','24.000']],[[0,30,45,20],['0','0','0']],[[8,15,45,20],['40','1.800','21.600']]]){
const elements={},events={};['ma','min','eur','tage'].forEach((id,i)=>elements[id]={value:values[i],addEventListener:(_,fn)=>events[id]=fn});['h','m','j'].forEach(id=>elements[id]={});
vm.runInNewContext(js,{Intl,document:{getElementById:id=>elements[id],querySelectorAll:()=>[]},window:{},matchMedia:()=>({matches:true})});
assert.deepEqual(['h','m','j'].map(id=>elements[id].textContent),expected);elements.ma.value=0;events.ma();assert.equal(elements.j.textContent,'0');
}
console.log('PASS: calculator defaults, alternative values, zero, input recalculation (simulated DOM)');

// Exercise every input independently, plus empty/negative inputs and decimal calculations.
for(const values of [[8,30,45,20],[1,1,1,1],[0,0,0,0],[8,30,0,20],[8,0,45,20],[8,30,45,0],['',30,45,20],[-1,30,45,20],[8,15,47.5,21],[1000,60,100,31]]){
 const elements={},events={};const ids=['ma','min','eur','tage'];ids.forEach((id,i)=>elements[id]={value:values[i],addEventListener:(_,fn)=>events[id]=fn});['h','m','j'].forEach(id=>elements[id]={});
 vm.runInNewContext(js,{Intl,document:{getElementById:id=>elements[id],querySelectorAll:()=>[]},window:{},matchMedia:()=>({matches:true})});
 const verify=()=>{const [a,b,c,d]=ids.map(id=>Math.max(0,Number(elements[id].value)||0));const h=a*b*d/60;assert.equal(elements.h.textContent,new Intl.NumberFormat('de-DE',{maximumFractionDigits:1}).format(h));assert.equal(elements.m.textContent,new Intl.NumberFormat('de-DE',{maximumFractionDigits:0}).format(h*c));assert.equal(elements.j.textContent,new Intl.NumberFormat('de-DE',{maximumFractionDigits:0}).format(h*c*12))};
 verify();ids.forEach(id=>{elements[id].value=2;events[id]();verify()});
}
for(const reduced of [false,true]){
 const nodes=[25,11000,700].map(n=>({dataset:{count:String(n),prefix:'+'},textContent:'+'+new Intl.NumberFormat('de-DE').format(n)}));const e={},q=[],observed=[];let cb;
 ['ma','min','eur','tage'].forEach(id=>e[id]={value:1,addEventListener(){}});['h','m','j'].forEach(id=>e[id]={});
 vm.runInNewContext(js,{Intl,document:{getElementById:id=>e[id],querySelectorAll:()=>nodes},window:{IntersectionObserver:true},matchMedia:()=>({matches:reduced}),performance:{now:()=>0},requestAnimationFrame:fn=>q.push(fn),IntersectionObserver:class{constructor(fn){cb=fn}observe(n){observed.push(n)}unobserve(){}}});
 if(!reduced){assert.equal(observed.length,3);cb(nodes.map(target=>({target,isIntersecting:false})));assert.equal(q.length,0);cb(nodes.map(target=>({target,isIntersecting:true})));q.splice(0).forEach(fn=>fn(600));assert.equal(nodes[1].textContent,'+9.625');q.splice(0).forEach(fn=>fn(1200));}
 else assert.equal(observed.length,0);
 assert.deepEqual(nodes.map(n=>n.textContent),['+25','+11.000','+700']);
}
console.log('PASS: all four input events, zero/empty/negative/decimal/large values; counters 25/11000/700 and reduced motion (simulated DOM)');
