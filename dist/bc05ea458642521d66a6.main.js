!function(){"use strict";var t,r={2643:function(){function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var r,n,e=document.getElementsByClassName("main__timer"),o=e[0].getAttribute("data-timer").split(":"),a=(n=2,function(t){if(Array.isArray(t))return t}(r=o)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(e=n.next()).done)&&(a.push(e.value),!r||a.length!==r);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,n)||function(r,n){if(r){if("string"==typeof r)return t(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?t(r,n):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];u=60*Number(i)+Number(u);var l=setInterval((function(){u>0?(e[0].textContent=Math.trunc(u/60).toString().padStart(2,"0")+":"+(u%60).toString().padStart(2,"0"),u--):(clearInterval(l),location=location)}),1e3)}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return r[t](a,a.exports,e),a.exports}e.m=r,t=[],e.O=function(r,n,o,a){if(!n){var i=1/0;for(f=0;f<t.length;f++){n=t[f][0],o=t[f][1],a=t[f][2];for(var u=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(u=!1,a<i&&(i=a));if(u){t.splice(f--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[n,o,a]},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},function(){var t={179:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var o,a,i=n[0],u=n[1],l=n[2],c=0;for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(l)var f=l(e);for(r&&r(n);c<i.length;c++)a=i[c],e.o(t,a)&&t[a]&&t[a][0](),t[i[c]]=0;return e.O(f)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}(),e.O(void 0,[202],(function(){return e(1202)}));var o=e.O(void 0,[202],(function(){return e(2643)}));o=e.O(o)}();