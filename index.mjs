// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,t,a,i,o,d,f,s){var u,l,m,p,y;if(r<=0)return d;for(u=e<0?(1-r)*e:0,l=a<0?(1-r)*a:0,m=f<0?(1-r)*f:0,p=o<0?(1-r)*o:0,y=0;y<r;y++)0===i[p]&&(d[m]=s(n[u],t[l])),u+=e,l+=a,m+=f,p+=o;return d}function e(r,n,e,t,a,i,o,d,f,s,u,l,m,p){var y,c,j,v,b;if(r<=0)return u;for(y=t,c=o,j=m,v=s,b=0;b<r;b++)0===d[v]&&(u[j]=p(n[y],a[c])),y+=e,c+=i,j+=l,v+=f;return u}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
