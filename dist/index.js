"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var c=f(function(b,o){
var g=require('@stdlib/ndarray-base-numel-dimension/dist'),m=require('@stdlib/ndarray-base-strides/dist'),l=require('@stdlib/ndarray-base-stride/dist'),s=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),p=require('@stdlib/blas-base-ssymv/dist').ndarray;function x(r){var e,i,d,u,t,v,a;return t=r[0],v=r[1],a=r[2],d=q(r[3]),e=q(r[4]),i=q(r[5]),u=m(t,!1),p(d,g(t,0),e,n(t),u[0],u[1],s(t),n(v),l(v,0),s(v),i,n(a),l(a,0),s(a)),a}o.exports=x
});var D=c();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
