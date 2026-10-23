import{f as h}from"./boot-qrTis-PL.js";/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],S=h("hand",w);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],v=h("redo-2",b);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]],C=h("sticky-note",M);/**
 * @license lucide-react v0.540.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],_=h("undo-2",g);function B(o,a,r){const l=r*(a.opacity??1);if(o.globalAlpha=l,o.lineCap="round",o.lineJoin="round",a.brush==="neon")o.strokeStyle=a.color,o.shadowColor=a.color,o.shadowBlur=22*r,o.lineWidth=a.w;else if(a.brush==="metal"){const n=o.createLinearGradient(0,0,0,600);n.addColorStop(0,"#FFFFFF"),n.addColorStop(.5,a.color),n.addColorStop(1,"#4B5563"),o.strokeStyle=n,o.shadowColor="rgba(255,255,255,.4)",o.shadowBlur=4,o.lineWidth=a.w+2}else a.brush==="watercolor"?(o.strokeStyle=a.color,o.shadowColor=a.color,o.shadowBlur=18,o.lineWidth=a.w*3,o.globalAlpha=l*.22,o.beginPath(),a.pts.forEach(([n,e],t)=>t?o.lineTo(n,e):o.moveTo(n,e)),o.stroke(),o.globalAlpha=l*.5,o.lineWidth=a.w*1.4,o.shadowBlur=6):(o.strokeStyle=a.color,o.shadowColor=a.color,o.shadowBlur=12*r,o.lineWidth=a.w);o.beginPath(),a.pts.forEach(([n,e],t)=>t?o.lineTo(n,e):o.moveTo(n,e)),o.stroke(),o.globalAlpha=1,o.shadowBlur=0}function F(o,a,r,l){const n=(l+o.w/2)**2;for(let e=0;e<o.pts.length;e++){const[t,i]=o.pts[e],[k,m]=o.pts[e+1]??o.pts[e],d=k-t,s=m-i,p=d*d+s*s,u=p?Math.max(0,Math.min(1,((a-t)*d+(r-i)*s)/p)):0,y=t+u*d-a,f=i+u*s-r;if(y*y+f*f<=n)return!0}return!1}function H(o){let a=1/0,r=1/0,l=-1/0,n=-1/0;for(const e of o)for(const[t,i]of e.pts)a=Math.min(a,t),r=Math.min(r,i),l=Math.max(l,t),n=Math.max(n,i);return Number.isFinite(a)?{minX:a,minY:r,maxX:l,maxY:n}:null}export{S as H,v as R,C as S,_ as U,H as b,B as d,F as s};
