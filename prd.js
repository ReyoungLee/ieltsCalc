!function(r){function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=r,t.c=n,t.d=function(r,n,e){t.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:e})},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},t.p="",t(t.s=0)}([function(r,t,n){"use strict";var e=function(){function r(r,t){var n=[],e=!0,o=!1,u=void 0;try{for(var i,l=r[Symbol.iterator]();!(e=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);e=!0);}catch(r){o=!0,u=r}finally{try{!e&&l.return&&l.return()}finally{if(o)throw u}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return r(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n(1);var o=[1,2,2.5,3,3,3.5,3.5,3.5,3.5,4,4,4,4.5,4.5,4.5,5,5,5,5,5.5,5.5,5.5,6,6,6,6,6.5,6.5,6.5,7,7,7,7.5,7.5,8,8,8.5,8.5,9,9],u=document.querySelectorAll("p"),i=e(u,2),l=i[0],c=i[1],a=document.querySelectorAll("button"),f=e(a,2),y=f[0],v=f[1],p=document.querySelectorAll(".amount input"),s=e(p,2),d=s[0],m=s[1],b=document.querySelectorAll(".score input");y.onclick=function(){var r=o[d.value-1]||0,t=o[m.value-1]||0;l.innerHTML="听力分数 "+r+", 阅读分数 "+t},v.onclick=function(){var r=0,t=!0,n=!1,e=void 0;try{for(var o,u=b[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){r+=+o.value.value}}catch(r){n=!0,e=r}finally{try{!t&&u.return&&u.return()}finally{if(n)throw e}}r/=4;var i=parseInt(r),l=r-i;r=l<.25?i:l<.75?i+.5:i+1,c.innerHTML="总分 "+r}},function(r,t){}]);