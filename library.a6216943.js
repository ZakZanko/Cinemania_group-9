!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequiref9fd;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequiref9fd=a),a("5xtVg"),a("i8Q71"),a("gtycc"),a("7hKzD");var r={listFilms:document.getElementById("list-films"),libraryList:document.querySelector(".library-list"),loadMoreButton:document.getElementById("loadMore"),btnMyLabrary:document.getElementById("btn-my-labrary")};window.addEventListener("DOMContentLoaded",(function(){var e=c("librariesKey");if(console.log(e),e)!function(e){t=e.reduce((function(e,t){return e+(a=(n=t).poster_path,r=n.title,c=n.vote_average,s=n.id,l=n.release_date,'\n  <li class="movies-card" data-id="'.concat(s,'">\n      <img\n      class="movies-card-photo-labrary"\n      src="').concat(o(a),'"\n      alt="').concat(r,'"\n      loading="lazy"\n      width="395px"\n      height="574px"\n    />\n    <div class="movies-card-overlay"></div>\n    <h2 class="movies-card-title">').concat(r,'</h2>\n    <p class="movies-card-genres"> | ').concat(i(l),'</p>\n    <p class="movies-card-rating">').concat(function(e){var t='<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>\n    <defs>\n    <linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">\n    <stop stop-color="#F84119"/>\n    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n    </linearGradient>\n    </defs>\n    </svg>',n='<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">\n    <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>\n    <defs>\n    <linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">\n    <stop stop-color="#F84119"/>\n    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n    </linearGradient>\n    </defs>\n    </svg>',a='<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_6991)" stroke-linejoin="round"/>\n    <path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_6991)"/>\n    <defs>\n    <linearGradient id="paint0_linear_148_6991" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">\n    <stop stop-color="#F84119"/>\n    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n    </linearGradient>\n    <linearGradient id="paint1_linear_148_6991" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">\n    <stop stop-color="#F84119"/>\n    <stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>\n    </linearGradient>\n    </defs>\n    </svg>',r="";switch(Math.round(e)){case 0:r="".concat(t.repeat(5));break;case 1:r="".concat(a).concat(t.repeat(4));break;case 2:r="".concat(n).concat(t.repeat(4));break;case 3:r="".concat(n).concat(a).concat(t.repeat(3));break;case 4:r="".concat(n.repeat(2)).concat(t.repeat(3));break;case 5:r="".concat(n.repeat(2)).concat(a).concat(t.repeat(2));break;case 6:r="".concat(n.repeat(3)).concat(t.repeat(2));break;case 7:r="".concat(n.repeat(3)).concat(a).concat(t);break;case 8:r="".concat(n.repeat(4)).concat(t);break;case 9:r="".concat(n.repeat(4)).concat(a);break;case 10:r="".concat(n.repeat(5));break;default:throw new Error("Invalid rating")}return r}(c),"</p>\n  </li>"));var n,a,r,c,s,l}),""),r.listFilms.insertAdjacentHTML("beforeend",t);var t}(e),r.btnMyLabrary.style.display="none";else{r.listFilms.innerHTML='<li class="oppsText"><p>OOPS...</p> <p>We are very sorry!</p> <p> You don’t have any movies at your library.</p><li>',r.btnMyLabrary.textContent="Search movie"}}));var o=function(e){return"".concat(e?"https://image.tmdb.org/t/p/w500".concat(e):"https://dummyimage.com/400x600/cfcfcf/ffffff&text=OOPS...+NO+POSTER+AVAILABLE")},i=function(e){return"".concat(e?"".concat(e.slice(0,4)):"Unknown")};var c=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}}();
//# sourceMappingURL=library.a6216943.js.map
