// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e};var l=e;function c(e){return e!=e}var _=Number.NEGATIVE_INFINITY;function p(e){return 0===e&&1/e===_}function d(e,r,t){var n,o,i,a;if(e<=0)return NaN;if(1===e||0===t)return r[0];for(o=t<0?(1-e)*t:0,a=0;a<e&&(i=r[o])!=i;a++)o+=t;if(a===e)return NaN;for(n=i,a+=1;a<e;a++)c(i=r[o+=t])||(i<n||i===n&&p(i))&&(n=i);return n}return l(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,i,a,u;if(e<=0)return NaN;if(1===e||0===t)return r[n];for(i=n,u=0;u<e&&(a=r[i])!=a;u++)i+=t;if(u===e)return NaN;for(o=a,u+=1;u<e;u++)c(a=r[i+=t])||(a<o||a===o&&p(a))&&(o=a);return o}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).nanmin=r();
//# sourceMappingURL=index.js.map
