!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(2)},function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var n=!0;localStorage.getItem("ladmin-sidebar-hidden")&&(n=!1),this.sidebarToggleStatus=n}var n,a,r;return n=e,(a=[{key:"main",value:function(){this.sidebarToggleButton(),this.menuHasChild();var e=document.querySelectorAll(".ladmin-main-menu ul li.active");this.activeMenu(e),this.sidebarToggleEvent(),this.dropdownHandler()}},{key:"sidebarToggleButton",value:function(){var e=this;document.querySelectorAll(".sidebar-toggle-button").forEach((function(n){n.addEventListener("click",(function(n){n.preventDefault(),e.sidebarToggleStatus=!e.sidebarToggleStatus,e.sidebarToggleEvent()}))}))}},{key:"sidebarToggleEvent",value:function(){var e=document.querySelector(".ladmin-main-menu"),n=document.querySelector(".main-content");this.sidebarToggleStatus?(e.classList.remove("ladmin-sidebar-hidden"),e.classList.remove("hidden"),n.classList.add("ml-0"),n.classList.add("md:ml-64"),n.classList.add("lg:ml-64"),n.classList.add("xl:ml-64"),localStorage.removeItem("ladmin-sidebar-hidden")):(e.classList.add("ladmin-sidebar-hidden"),e.classList.add("hidden"),n.classList.remove("ml-0"),n.classList.remove("md:ml-64"),n.classList.remove("lg:ml-64"),n.classList.remove("xl:ml-64"),localStorage.setItem("ladmin-sidebar-hidden",!0))}},{key:"menuHasChild",value:function(){var e=this;document.querySelectorAll(".ladmin-main-menu ul li").forEach((function(n){if(n.querySelector("ul")){var t=n.querySelector("a");t.querySelector(".caret")?t.append(e.caret("-")):t.append(e.caret("+")),t.addEventListener("click",(function(a){a.preventDefault(),t.removeChild(t.querySelector(".caret")),-1==n.className.split(" ").indexOf("open")?(n.classList.add("open"),t.append(e.caret("-"))):(n.classList.remove("open"),t.append(e.caret("+")))}))}}))}},{key:"activeMenu",value:function(e){var n=this;e.forEach((function(e){n.activeMenuParentOpen(e)}))}},{key:"activeMenuParentOpen",value:function(e){e.parentNode.className.split(" ").indexOf("ladmin-main-menu")>-1||("LI"==e.parentNode.nodeName&&e.parentNode.classList.add("open"),this.activeMenuParentOpen(e.parentNode))}},{key:"caret",value:function(e){var n=document.createElement("span");return n.classList.add("caret"),n.classList.add("mr-3"),n.innerHTML=e,n}},{key:"dropdownHandler",value:function(){document.querySelectorAll(".ladmin-dropdown").forEach((function(e){var n=e.querySelector("a");n.addEventListener("click",(function(e){e.preventDefault();var t=n.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px";var a=function e(){t.style.maxHeight=null,n.parentNode.classList.remove("ladmin-dropdown-open"),document.removeEventListener("click",e)};setTimeout((function(){document.addEventListener("click",a)}),100),n.parentNode.className.split(" ").indexOf("ladmin-dropdown-open")>-1?n.parentNode.classList.remove("ladmin-dropdown-open"):n.parentNode.classList.add("ladmin-dropdown-open")}))}))}}])&&t(n.prototype,a),r&&t(n,r),e}())).main()},function(e,n){}]);