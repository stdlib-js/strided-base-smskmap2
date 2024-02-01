// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e,t,a,i,o,d,f,s){var u,l,m,p,v;if(r<=0)return d;for(u=e<0?(1-r)*e:0,l=a<0?(1-r)*a:0,m=f<0?(1-r)*f:0,p=o<0?(1-r)*o:0,v=0;v<r;v++)0===i[p]&&(d[m]=s(n[u],t[l])),u+=e,l+=a,m+=f,p+=o;return d}function e(r,n,e,t,a,i,o,d,f,s,u,l,m,p){var v,y,c,j,b;if(r<=0)return u;for(v=t,y=o,c=m,j=s,b=0;b<r;b++)0===d[j]&&(u[c]=p(n[v],a[y])),v+=e,y+=i,c+=l,j+=f;return u}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
