!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=function(){var t=document.querySelector("menu");window.addEventListener("click",(function(e){var n=e.target;(n=n.closest(".menu"))&&(t.style.transform&&"translateX(-100%)"!==t.style.transform?t.style.transform="translateX(-100%)":t.style.transform="translateX(0)"),n||((n=e.target).classList.contains("close-btn")&&!n.matches("menu")?t.style.transform="translateX(-100%)":n.matches("a")&&!n.matches("menu")?t.style.transform="translateX(-100%)":(n=n.closest("menu"))||(t.style.transform="translateX(-100%)"))}))},o=function(){var t=document.querySelector(".popup"),e=document.querySelectorAll(".popup-btn");e.forEach((function(e){e.addEventListener("click",(function(){var e,n;t.style.opacity=0,n=0,e=setInterval((function(){t.style.opacity=n,((n+=.1)>1||screen.width<768)&&(clearInterval(e),t.style.opacity=1)}),20),t.style.display="block"}))})),t.addEventListener("click",(function(e){var n=e.target;n.classList.contains("popup-close")?t.style.display="none":(n=n.closest(".popup-content"))||(t.style.display="none")}))},a=function(){var t=[].slice.call(document.querySelectorAll('a[href*="#"]'));t.forEach((function(t){t.addEventListener("click",(function(e){var n;if(e.preventDefault(),!t.matches(".close-btn, .portfolio-btn")){n=document.querySelector(t.getAttribute("href")).getBoundingClientRect().top+window.pageYOffset;var r=setInterval((function(){var t=n/50;t>window.pageYOffset-n&&window.innerHeight+window.pageYOffset<document.body.offsetHeight?window.scrollBy(0,t):(window.scrollTo(0,n),clearInterval(r))}),8)}}))}))},c=function(){var t=document.querySelector(".service-header"),e=t.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");t.addEventListener("click",(function(t){var r=t.target;(r=r.closest(".service-header-tab"))&&e.forEach((function(t,o){t===r&&function(t){for(var r=0;r<n.length;r++)t===r?(e[r].classList.add("active"),n[r].classList.remove("d-none")):(e[r].classList.remove("active"),n[r].classList.add("d-none"))}(o)}))}))},i=function(){var t,e=document.querySelector(".portfolio-content"),n=document.querySelectorAll(".portfolio-item"),r=document.querySelector(".portfolio-dots"),o=0,a=document.createElement("li");a.classList.add("dot");for(var c=0;c<n.length;c++){var i=a.cloneNode();0===c&&i.classList.add("dot-active"),r.appendChild(i)}a=document.querySelectorAll(".dot");var l=function(t,e,n){t[e].classList.remove(n)},s=function(t,e,n){t[e].classList.add(n)},u=function(){l(n,o,"portfolio-item-active"),l(a,o,"dot-active"),++o>=n.length&&(o=0),s(n,o,"portfolio-item-active"),s(a,o,"dot-active")},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3500;t=setInterval(u,e)};e.addEventListener("click",(function(t){t.preventDefault();var e=t.target;e.matches(".portfolio-btn, .dot")&&(l(n,o,"portfolio-item-active"),l(a,o,"dot-active"),e.matches("#arrow-left")?o--:e.matches("#arrow-right")?o++:e.matches(".dot")&&a.forEach((function(t,n){e===t&&(o=n)})),o>=n.length?o=0:o<0&&(o=n.length-1),s(n,o,"portfolio-item-active"),s(a,o,"dot-active"))})),e.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(t)})),e.addEventListener("mouseout",(function(t){(t.target.matches(".portfolio-btn")||t.target.matches(".dot"))&&d()})),d(1e3)},l=function(){var t=document.querySelector("#command"),e=function(t,e){t.attributes.src.value!==t.dataset.img&&(t.src=t.dataset.img,t.dataset.img=e),t.attributes.src.value===t.dataset.img&&t.setAttribute("src",e)};t.addEventListener("mouseover",(function(t){var n=t.target;if(n.matches("img")){var r=n.attributes.src.value;e(n,r)}})),t.addEventListener("mouseout",(function(t){var n=t.target;if(n.matches("img")){var r=n.attributes.src.value;e(n,r)}}))},s=function(){document.querySelector(".calc-block").addEventListener("input",(function(t){var e=t.target;e.matches("input")&&(e.value=e.value.replace(/\D/g,""))}))},u=function(){var t,e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,o=document.querySelector(".calc-block"),a=o.querySelector(".calc-type"),c=o.querySelector(".calc-square"),i=o.querySelector(".calc-count"),l=o.querySelector(".calc-day"),s=document.getElementById("total"),u=+s.textContent,d=function(){var o=a.value,d=c.value,f=1,v=1;n=0,i.value>1&&(f+=(i.value-1)/10),l.value&&l.value<5?v*=2:l.value&&l.value<10&&(v*=1.5),o&&d?(n=r*o*d*f*v,t=setInterval((function(){u<n&&u!==n?(s.textContent=u,u+=50):(s.textContent=u,clearInterval(t))}),10),e=setInterval((function(){u>=n&&u!==n?(s.textContent=u,u-=50):(s.textContent=u,clearInterval(e))}),10)):n=0};o.addEventListener("input",(function(n){var r=n.target;clearInterval(t),clearInterval(e),r!==c&&r!==a&&r!==i&&r!==l||d()})),u<=n?clearInterval(e):u>=n&&u!==n&&clearInterval(t)};function d(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=function(t){var e,n=document.getElementById(t),r=document.createElement("div"),o=document.createElement("div"),a=0;r.style.cssText="\n    color: #fff;\n    font-size: 2rem;\n  ";n.addEventListener("submit",(function(t){t.preventDefault(),n.appendChild(r),o.style.cssText="\n      margin-top: 10px;\n      margin-left: auto;\n      margin-right: auto;\n      width: 26px;\n      height: 26px;\n      border: 2px dashed #fff;\n      border-radius: 13px;\n    ",n.appendChild(o),e=setInterval((function(){(a+=5)>=360&&(a=0),o.style.transform="rotate(".concat(a,"deg)")}),20);var c=new FormData(n),i={};c.forEach((function(t,e){i[e]=t}));(function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/JSON"},body:JSON.stringify(t)})})(i).then((function(t){if(clearInterval(e),200!==t.status)throw new Error("error network status is`nt 200");r.textContent="Спасибо! Наш менеджер скоро с вами свяжется.",n.removeChild(o),d(n.elements).forEach((function(t){"INPUT"===t.tagName&&(t.value="",t.classList.remove("success"))}))})).catch((function(t){console.error(t),r.textContent="Что-то пошло не так...",n.removeChild(o)}))}))},v=function(){document.querySelectorAll("input").forEach((function(t){t.addEventListener("input",(function(){t.classList.contains("calc-item")||"button"===t.type||(t.classList.contains("form-phone")&&(t.value=t.value.replace(/[^\d|\+]/,"")),"user_name"!==t.name&&"user_message"!==t.name||(t.value=t.value.replace(/[^а-я|А-Я| ]/,"")))}))}))};(function(t,e,n,r){var o=document.querySelector(e),a=document.querySelector(n),c=document.querySelector(r);setInterval((function e(){var n,r,i,l,s=(n=(new Date).getTime(),r=(new Date(t).getTime()-n)/1e3,i=Math.floor(r/60/60),l=Math.floor(r/60%60),{seconds:Math.floor(r%60),minutes:l,hours:i,timeRemaining:r});o.textContent=s.hours,s.hours<10&&(o.textContent="0"+s.hours),a.textContent=s.minutes,s.minutes<10&&(a.textContent="0"+s.minutes),c.textContent=s.seconds,s.seconds<10&&(c.textContent="0"+s.seconds),s.timeRemaining<=0&&(t=(new Date).getTime()+864e5,setInterval(e(),1e3),o.textContent="00",a.textContent="00",c.textContent="00")}),1e3)})("17 november 2019","#timer-hours","#timer-minutes","#timer-seconds"),r(),o(),a(),c(),i(),l(),s(),u(),f("form1"),f("form2"),f("form3"),v()}]);