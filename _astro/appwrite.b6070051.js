import{C as g,D as d,S as v,A as y,I as E}from"./sdk.0b15df0d.js";let s=[],h=(e,t)=>{let c,a=[],n={lc:0,l:t||0,value:e,set(e){n.value=e,n.notify()},get:()=>(n.lc||n.listen((()=>{}))(),n.value),notify(e){c=a;let t=!s.length;for(let t=0;t<c.length;t+=2)s.push(c[t],n.value,e,c[t+1]);if(t){for(let e=0;e<s.length;e+=4){let t=!1;for(let c=e+7;c<s.length;c+=4)if(s[c]<s[e+3]){t=!0;break}t?s.push(s[e],s[e+1],s[e+2],s[e+3]):s[e](s[e+1],s[e+2])}s.length=0}},listen:(e,s)=>(a===c&&(a=a.slice()),n.lc=a.push(e,s||n.l)/2,()=>{a===c&&(a=a.slice());let s=a.indexOf(e);~s&&(a.splice(s,2),n.lc--)}),subscribe(e,s){let t=n.listen(e,s);return e(n.value),t},off(){}};return n};const w=(new g).setEndpoint("https://ap.kbve.com/v1").setProject("6436a6dc9a6b48db802f");new d(w),new v(w);const l=new y(w),c=h(void 0);l.getSession("current").then((function(e){c.set(e)}),(function(e){c.set(void 0)}));const b=h(void 0);c.subscribe((async e=>{e?.userId&&b.set(await m())}));const x=async(e,s)=>{try{const t=await l.createEmailSession(e,s);c.set(t),window.location.href="/account"}catch(e){throw e.message}},I=async()=>{try{const e=c.get();console.log(e),e?.$id&&(await l.deleteSession(e?.$id),c.set(void 0),window.location.href="/")}catch(e){throw e.message}},L=async(e,s,t)=>{try{await l.create(E.unique(),e,s,t);const a=await l.createEmailSession(e,s);c.set(a),window.location.href="/account"}catch(e){throw e.message}},m=async()=>{try{return l.get()}catch(e){throw e.message}};export{x as a,I as l,L as r,b as u};