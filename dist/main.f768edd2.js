parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
!function(){var e=document.querySelector(".toggle--btn"),t=document.querySelector(".main__nav__list"),r=Array.from(document.querySelectorAll(".tab__item--btn"));console.log(r);var o=window.matchMedia("(max-width: 679px)");console.log(o);var n=Array.from(document.querySelectorAll(".planet--btn")),a=n[0],l=n[n.length-1];console.log(a),console.log(l),n.forEach(function(e){e.addEventListener("click",function(){console.log("gsap"),gsap.from(".planet__title",{duration:3,opacity:0,scale:.3,y:600})})}),r.forEach(function(e){e.addEventListener("click",function(){gsap.from(".planet__img__wrapper",{duration:3,opacity:0,scale:.3,y:150})})}),o.matches&&(document.addEventListener("keydown",function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===a&&(l.focus(),e.preventDefault()):document.activeElement===l&&(a.focus(),e.preventDefault()))}),a.focus()),console.log(e),e.addEventListener("click",function(){gsap.from(".toggle--btn",{duration:1.5,opacity:0,scale:.3,easy:"back"}),gsap.from(".planet",{duration:1,opacity:0,scale:.3,y:150,stagger:.25}),console.log("button clicked"),t.classList.toggle("modal__hide"),document.body.classList.toggle("modal__scroll")});var c=document.querySelector(".tabbed"),i=c.querySelector("ul"),u=i.querySelectorAll("a"),d=c.querySelectorAll('[id^="section"]'),s=function(e,t){t.focus(),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),e.removeAttribute("aria-selected"),e.setAttribute("tabindex","-1");var r=Array.prototype.indexOf.call(u,t),o=Array.prototype.indexOf.call(u,e);d[o].hidden=!0,d[r].hidden=!1};i.setAttribute("role","tablist"),Array.prototype.forEach.call(u,function(e,t){e.setAttribute("role","tab"),e.setAttribute("id","tab"+(t+1)),e.setAttribute("tabindex","-1"),e.parentNode.setAttribute("role","presentation"),e.addEventListener("click",function(e){e.preventDefault();var t=i.querySelector("[aria-selected]");e.currentTarget!==t&&s(t,e.currentTarget)}),e.addEventListener("keydown",function(e){var r=Array.prototype.indexOf.call(u,e.currentTarget),o=37===e.which?r-1:39===e.which?r+1:40===e.which?"down":null;null!==o&&(e.preventDefault(),"down"===o?d[t].focus():u[o]&&s(e.currentTarget,u[o]))})}),Array.prototype.forEach.call(d,function(e,t){e.setAttribute("role","tabpanel"),e.setAttribute("tabindex","-1");e.getAttribute("id");e.setAttribute("aria-labelledby",u[t].id),e.hidden=!0}),u[0].removeAttribute("tabindex"),u[0].setAttribute("aria-selected","true"),d[0].hidden=!1}();
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.f768edd2.js.map