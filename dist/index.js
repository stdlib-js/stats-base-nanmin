"use strict";var c=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var m=c(function(C,q){
var k=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-negative-zero/dist');function x(e,i,n,s){var u,t,v,a,r,o;if(u=i.data,t=i.accessors[0],e===1||n===0)return t(u,s);for(a=s,o=0;o<e&&(r=t(u,a),r!==r);o++)a+=n;if(o===e)return NaN;for(v=r,o+=1,o;o<e;o++)a+=n,r=t(u,a),!k(r)&&(r<v||r===v&&l(r))&&(v=r);return v}q.exports=x
});var f=c(function(D,y){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-assert-is-negative-zero/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),P=m();function R(e,i,n,s){var u,t,v,a,r;if(e<=0)return NaN;if(v=O(i),v.accessorProtocol)return P(e,v,n,s);if(e===1||n===0)return i[s];for(t=s,r=0;r<e&&(a=i[t],a!==a);r++)t+=n;if(r===e)return NaN;for(u=a,r+=1,r;r<e;r++)t+=n,a=i[t],!Z(a)&&(a<u||a===u&&j(a))&&(u=a);return u}y.exports=R
});var p=c(function(E,b){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=f();function w(e,i,n){return h(e,i,n,d(e,n))}b.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),A=f();z(g,"ndarray",A);module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
