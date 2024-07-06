"use strict";var k=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var d=k(function(F,l){
function w(r,a,e,s,i,v,t,f,u,o,m,g,h,j){var c,p,q,y,x;if(r<=0)return m;for(c=s,p=t,q=h,y=o,x=0;x<r;x++)f[y]===0&&(m[q]=j(a[c],i[p])),c+=e,p+=v,q+=g,y+=u;return m}l.exports=w
});var R=k(function(G,O){
var n=require('@stdlib/strided-base-stride2offset/dist'),A=d();function B(r,a,e,s,i,v,t,f,u,o){return A(r,a,e,n(r,e),s,i,n(r,i),v,t,n(r,t),f,u,n(r,u),o)}O.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=R(),D=d();C(b,"ndarray",D);module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
