!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequiref9fd;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequiref9fd=a),a("i8Q71"),a("gtycc"),a("gVa74");var i,s=a("bpxeT"),c=a("2TvXO"),o="https://api.themoviedb.org/3",l="/trending/movie/week",u="b90b64a7e05f9e36894001e36eb3b3c7",p="https://image.tmdb.org/t/p/w400",d=document.querySelector(".js-list"),f=1;new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&serviceMovie(f+=1).then((function(e){d.insertAdjacentHTML("beforeend",m(e.results)),e.total_pages<=e.page&&t.unobserve(guard)}))}))}),{root:null,rootMargin:"400px",threshold:0});function v(){return v=e(s)(e(c).mark((function t(){var n,r=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.abrupt("return",fetch("".concat(o).concat(l,"?api_key=").concat(u,"&page=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})));case 2:case"end":return e.stop()}}),t)}))),v.apply(this,arguments)}function g(e){return h.apply(this,arguments)}function h(){return(h=e(s)(e(c).mark((function t(n){var r,a,i,s,o,l,p,d,f,v;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/genre/movie/list?language=en&api_key="+u);case 2:return r=e.sent,e.next=5,r.json();case 5:for(a=e.sent,i=[],s=a.genres,o=!0,l=!1,p=void 0,e.prev=9,d=s[Symbol.iterator]();!(o=(f=d.next()).done);o=!0)v=f.value,n.genre_ids.includes(v.id)&&i.push(v.name);e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),l=!0,p=e.t0;case 17:e.prev=17,e.prev=18,o||null==d.return||d.return();case 20:if(e.prev=20,!l){e.next=23;break}throw p;case 23:return e.finish(20);case 24:return e.finish(17);case 25:return e.abrupt("return",i);case 26:case"end":return e.stop()}}),t,null,[[9,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function m(e){return y.apply(this,arguments)}function y(){return(y=e(s)(e(c).mark((function t(n){var r,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.map((function(e){return g({genre_ids:e.genre_ids})})),e.next=3,Promise.all(r);case 3:return a=e.sent,e.abrupt("return",n.slice(0,3).map((function(e,t){var n=e.original_title,r=e.poster_path,i=e.release_date,s=a[t];return"<li class='cards-list-item'> \n          <img class='cards__list-img' src=\"".concat(p).concat(r,'" alt="').concat(n,"\"> \n          <div class='weekly-trends__overlay'></div> \n          <div class='cards__bloc-stars'> \n            <h2 class='cards__list-title'>").concat(n,"</h2> \n            <div class='cards__list-text'>").concat(s.join(", ")," | ").concat(i.slice(0,4),"</div>  \n              \n          </div> \n        </li>")})).join(""));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(e){return e.slice(0,3).map((function(e){var t=e.original_title,n=e.poster_path,r=e.release_date,a=e.genre;return"<li class='cards-list-item'>\n       <img class='cards__list-img' src=\"https://image.tmdb.org/t/p/w400".concat(n,'" alt="').concat(t,"\">\n       <div class='weekly-trends__overlay'></div>\n       <div class='cards__bloc-stars'>\n     <h2 class='cards__list-title'>").concat(t,"</h2>\n     <div class='cards__list-text'>").concat(a," | ").concat(r.slice(0,4),"</div> \n</div></li>")})).join("")}(function(){return v.apply(this,arguments)})().then((i=e(s)(e(c).mark((function t(n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=d,e.next=3,m(n.results);case 3:e.t1=e.sent,e.t0.insertAdjacentHTML.call(e.t0,"beforeend",e.t1);case 5:case"end":return e.stop()}}),t)}))),function(e){return i.apply(this,arguments)})).catch((function(e){return console.log(e)})),a("5xtVg");s=a("bpxeT"),c=a("2TvXO");var b,x=a("dIxxU"),_=a("1xRtb"),w=document.querySelector(".upcoming-section-title"),k=(document.querySelector(".container-upcoming-the-month"),document.querySelector(".library-button"));function S(){return(S=e(s)(e(c).mark((function t(){var n,r,a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.default.get("https://api.themoviedb.org/3/movie/upcoming?language=en-US",{params:{api_key:_.KEY}});case 2:return n=e.sent,r=n.data,a=Math.floor(Math.random()*r.results.length),i=r.results[a],e.abrupt("return",i);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function T(e){return j.apply(this,arguments)}function j(){return(j=e(s)(e(c).mark((function t(n){var r,a,i,s,o,l,u,p,d;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.default.get("https://api.themoviedb.org/3/genre/movie/list?language=en",{params:{api_key:_.KEY}});case 2:for(r=e.sent,a=[],i=r.data.genres,s=!0,o=!1,l=void 0,e.prev=6,u=i[Symbol.iterator]();!(s=(p=u.next()).done);s=!0)d=p.value,n.genre_ids.includes(d.id)&&a.push(d.name);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),o=!0,l=e.t0;case 14:e.prev=14,e.prev=15,s||null==u.return||u.return();case 17:if(e.prev=17,!o){e.next=20;break}throw l;case 20:return e.finish(17);case 21:return e.finish(14);case 22:return e.abrupt("return",a);case 23:case"end":return e.stop()}}),t,null,[[6,10,14,22],[15,,17,21]])})))).apply(this,arguments)}function O(){return(O=e(s)(e(c).mark((function t(n){var r,a,i,s,o,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(n).then((function(e){return e}));case 2:r=e.sent,a=r.map((function(e,t){return 0===t?e.charAt(0).toUpperCase()+e.slice(1):e.toLowerCase()})).join(", "),i=n.release_date.split("-"),s="".concat(i[2],".").concat(i[1],".").concat(i[0]),o=M(n),l='<div class="upcoming-desktop-container"><img\n  class="upcoming-section-img"\n  src="'.concat(o,'"\n  alt="').concat(n.title,'"\n/>\n<div class="upcoming-desktop-flex">\n  <h3 class="upcoming-movie-title">').concat(n.title,'</h3>\n  <div class="upcoming-flex-container">\n    <div class="upcoming-tablet-flex">\n      <div class="upcoming-data-flex">\n        <p class="info-key">Release date</p>\n        <p class="info-value info-value-date">').concat(s,'</p>\n      </div>\n      <div class="upcoming-data-flex">\n        <p class="info-key">Vote / Votes</p>\n        <p class="info-value">\n          <span class="info-value-vote"> ').concat(n.vote_average,'</span> /\n          <span class="info-value-vote">').concat(n.vote_count,'</span>\n        </p>\n      </div>\n    </div>\n    <div class="upcoming-tablet-flex">\n      <div class="upcoming-data-flex">\n        <p class="info-key">Popularity</p>\n        <p class="info-value">').concat(n.popularity.toFixed(1),'</p>\n      </div>\n      <div class="upcoming-data-flex">\n        <p class="info-key">Genre</p>\n        <p class="info-value">').concat(a,'</p>\n      </div>\n    </div>\n  </div>\n\n  <h4 class="about-title">About</h4>\n  <p class="about-description">').concat(n.overview,'</p>\n  <button class="library-button">Add to my library</button>\n</div></div>\n        '),w.insertAdjacentHTML("afterend",l),(k=document.querySelector(".library-button")).addEventListener("click",A);case 11:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function M(e){var t="https://image.tmdb.org/t/p/";return window.innerWidth>=768?"".concat(t,"w1280/").concat(e.backdrop_path):"".concat(t,"w500/").concat(e.poster_path)}function A(){var e=JSON.parse(localStorage.getItem("librariesKey"))||[],t=b.id;if(function(e){return(JSON.parse(localStorage.getItem("librariesKey"))||[]).some((function(t){return t.id===e}))}(t)){var n=e.findIndex((function(e){return e.id===t}));e.splice(n,1),localStorage.setItem("librariesKey",JSON.stringify(e)),k.textContent="Add to my library"}else e.push(b),localStorage.setItem("librariesKey",JSON.stringify(e)),k.textContent="Remove from my library"}(function(){return S.apply(this,arguments)})().then((function(e){b=e,console.log(e),function(e){O.apply(this,arguments)}(e)})).catch((function(){if(!b)return e='<div class="error-message"><p>Oops...</p><p>We are very sorry!</p><p>There are no upcoming movies at the moment.</p></div> ',void w.insertAdjacentHTML("afterend",e);var e;!function(){var e='<div class="error-message"><p>Oops...</p><p>We are very sorry!</p><p>Something went wrong.</p></div>';w.insertAdjacentHTML("afterend",e)}()})),a("7hKzD")}();
//# sourceMappingURL=index.aa6f84e8.js.map
