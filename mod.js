// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var c,f,_,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(r,e)||l.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=c):r[e]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r};var c=e;function f(r){return r!=r}var _=Number.NEGATIVE_INFINITY;function p(r){return 0===r&&1/r===_}function b(r,e,t){var n,o,a,u;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(o=t<0?(1-r)*t:0,u=0;u<r&&(a=e[o])!=a;u++)o+=t;if(u===r)return NaN;for(n=a,u+=1;u<r;u++)f(a=e[o+=t])||(a<n||a===n&&p(a))&&(n=a);return n}c(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(r,e,t,n){var o,a,u,i;if(r<=0)return NaN;if(1===r||0===t)return e[n];for(a=n,i=0;i<r&&(u=e[a])!=u;i++)a+=t;if(i===r)return NaN;for(o=u,i+=1;i<r;i++)f(u=e[a+=t])||(u<o||u===o&&p(u))&&(o=u);return o}});const{ndarray:y}=b;export{b as default,y as ndarray};
//# sourceMappingURL=mod.js.map
