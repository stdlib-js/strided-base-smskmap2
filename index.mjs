// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s,d,i,o,a,f,m,l,u,p){var j,v,b,c,h;if(r<=0)return m;for(j=n,v=i,b=u,c=f,h=0;h<r;h++)0===o[c]&&(m[b]=p(e[j],s[v])),j+=t,v+=d,b+=l,c+=a;return m}function n(r,n,s,d,i,o,a,f,m,l){return t(r,n,s,e(r,s),d,i,e(r,i),o,a,e(r,a),f,m,e(r,m),l)}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
