// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";var e=function(r,e,n,t,a,i,o,f,u,d){var s,l,m,p,v;if(r<=0)return f;for(s=n<0?(1-r)*n:0,l=a<0?(1-r)*a:0,m=u<0?(1-r)*u:0,p=o<0?(1-r)*o:0,v=0;v<r;v++)0===i[p]&&(f[m]=d(e[s],t[l])),s+=n,l+=a,m+=u,p+=o;return f},n=function(r,e,n,t,a,i,o,f,u,d,s,l,m,p){var v,c,j,y,b;if(r<=0)return s;for(v=t,c=o,j=m,y=d,b=0;b<r;b++)0===f[y]&&(s[j]=p(e[v],a[c])),v+=n,c+=i,j+=l,y+=u;return s};r(e,"ndarray",n);var t=e;export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
