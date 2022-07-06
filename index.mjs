// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";function n(r,n,s){var i,a,f,o;if(r<=0)return NaN;if(1===r||0===s)return n[0];for(a=s<0?(1-r)*s:0,o=0;o<r&&(f=n[a])!=f;o++)a+=s;if(o===r)return NaN;for(i=f,o+=1;o<r;o++)f=n[a+=s],e(f)||(f<i||f===i&&t(f))&&(i=f);return i}r(n,"ndarray",(function(r,n,s,i){var a,f,o,d;if(r<=0)return NaN;if(1===r||0===s)return n[i];for(f=i,d=0;d<r&&(o=n[f])!=o;d++)f+=s;if(d===r)return NaN;for(a=o,d+=1;d<r;d++)o=n[f+=s],e(o)||(o<a||o===a&&t(o))&&(a=o);return a}));export{n as default};
//# sourceMappingURL=index.mjs.map
