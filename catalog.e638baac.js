!function(){var e,t,n,o;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));for(var a=window.document,i=a.querySelectorAll("a"),s=i.length,c=a.URL,d=0;d<s;d++){var l=i[d].href;c.startsWith(l)&&i[d].classList.add("active")}var r={switchIcon:document.getElementById("switch-icon"),body:document.querySelector("body"),iconDay:document.querySelector(".icon-day"),iconNight:document.querySelector(".icon-night"),headerLogoText:document.querySelector(".header-logo-text"),homeLink:document.getElementById("home-day"),catalogLink:document.getElementById("catalog-day"),myLiberyLink:document.getElementById("my-libery-day"),menuLink:document.getElementById("menu-link"),weeklyTrend:document.getElementById("weekly-trend")};r.switchIcon.addEventListener("click",(function(){r.body.classList.toggle("bkg-white"),r.switchIcon.classList.toggle("icon-day"),r.switchIcon.classList.toggle("icon-night"),r.weeklyTrend.classList.toggle("weekly-trend-day"),r.catalogLink.classList.toggle("menu-link-day"),r.homeLink.classList.toggle("menu-link-day"),r.myLiberyLink.classList.toggle("menu-link-day"),r.menuLink.classList.toggle("menu-link-day"),r.headerLogoText.classList.toggle("day-logo-text");var e=r.body.classList.contains("bkg-white");m(y,e)})),window.addEventListener("DOMContentLoaded",(function(){L(y)?(r.weeklyTrend.classList.add("weekly-trend-day"),r.catalogLink.classList.add("menu-link-day"),r.homeLink.classList.add("menu-link-day"),r.myLiberyLink.classList.add("menu-link-day"),r.menuLink.classList.add("menu-link-day"),r.body.classList.add("bkg-white"),r.headerLogoText.classList.add("day-logo-text"),r.switchIcon.classList.add("icon-day"),r.switchIcon.classList.remove("icon-night")):(r.weeklyTrend.classList.remove("weekly-trend-day"),r.catalogLink.classList.remove("menu-link-day"),r.homeLink.classList.remove("menu-link-day"),r.myLiberyLink.classList.remove("menu-link-day"),r.menuLink.classList.remove("menu-link-day"),r.switchIcon.classList.remove("icon-day"),r.switchIcon.classList.add("icon-night"),r.headerLogoText.classList.remove("day-logo-text"))}));var y="background";var m=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},L=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}}();
//# sourceMappingURL=catalog.e638baac.js.map
