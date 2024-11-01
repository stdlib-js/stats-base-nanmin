"use strict";var f=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var s=f(function(j,o){
var b=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-assert-is-negative-zero/dist');function k(i,a,u){var t,n,e,r;if(i<=0)return NaN;if(i===1||u===0)return a[0];for(u<0?n=(1-i)*u:n=0,r=0;r<i&&(e=a[n],e!==e);r++)n+=u;if(r===i)return NaN;for(t=e,r+=1,r;r<i;r++)n+=u,e=a[n],!b(e)&&(e<t||e===t&&g(e))&&(t=e);return t}o.exports=k
});var q=f(function(w,c){
var l=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-assert-is-negative-zero/dist');function Z(i,a,u,t){var n,e,r,v;if(i<=0)return NaN;if(i===1||u===0)return a[t];for(e=t,v=0;v<i&&(r=a[e],r!==r);v++)e+=u;if(v===i)return NaN;for(n=r,v+=1,v;v<i;v++)e+=u,r=a[e],!l(r)&&(r<n||r===n&&x(r))&&(n=r);return n}c.exports=Z
});var y=f(function(z,p){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=s(),O=q();N(m,"ndarray",O);p.exports=m
});var R=y();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
