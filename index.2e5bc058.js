var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return i[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,i){n[e]=i},e.parcelRequired7c6=t);var s=t("diLRM");(0,s.getMovies)("genre/movie/list").then((e=>{localStorage.setItem("genres",JSON.stringify(e.data.genres))}));const a=localStorage.getItem("genres"),o=JSON.parse(a),d=document.querySelector(".movie-grid-list"),l=document.querySelector(".form__error");function r(e){return e.reduce(((e,i)=>e+function(e){const i=e.release_date.slice(0,4),n=m(e);let t=v(e.genre_ids);return t||(t="No info"),e.poster_path?`<li class="grid-movie-card"  id="${e.id}">\n      <div class="movie-item ">\n      <div class="img-wrapper">\n        <img\n          class="movie-img"\n          src="https://image.tmdb.org/t/p/w342${e.poster_path}"\n          alt="${n}"\n          loading="lazy"\n        />\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info data-open">\n            <h3 class="movie-title">${n}</h3>\n            <ul class="thumb">\n              <li class="movie-genre">${t}</li>\n              <li class="movie-date">| ${i}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>`:`<li class="grid-movie-card"  id="${e.id}">\n      <div class="movie-item ">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info data-open">\n            <h3 class="movie-title">${n}</h3>\n            <ul class="thumb">\n              <li class="movie-genre">${t}</li>\n              <li class="movie-date">| ${i}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>`}(i)),"")}function c(e){const i=r(e);d.innerHTML=i}function m(e){return e.hasOwnProperty("title")?e.title:e.name}function v(e){const i=[];for(let n=0;n<e.length;n+=1)o.forEach((t=>{t.id===e[n]&&i.push(t.name)}));return i.length>2?i.slice(0,2).join()+", Other...":i.join()}!async function(){c((await(0,s.getMovies)("trending/movie/day")).data.results),u.addEventListener("click",f),g.addEventListener("click",f)}();const u=document.querySelector("#backButton");u.classList.add("hide");const g=document.querySelector("#nextButton");let h=document.querySelector("#paginationPageNumber"),p=1;function f(e){1===p||p<1?u.classList.add("hide"):u.classList.remove("hide"),"backButton"===e.target.id?(p-=1,h.textContent=p,y(p)):(p+=1,h.textContent=p,y(p)),1===p||p<1?u.classList.add("hide"):u.classList.remove("hide")}async function y(e){try{l.classList.contains("is-hidden")||(document.querySelector(".form__input").value="",l.classList.add("is-hidden")),console.log(e);c((await(0,s.getMovies)("trending/movie/day")).data.results),M(e)}catch(e){console.error(e)}}const L=document.querySelector(".movie-grid-list");let _,w,$;function b(e){const i=e.map((e=>{const i=function(e){if(e.hasOwnProperty("release_date")){return e.release_date.split("-")[0]}return""}(e),n=m(e);let t=v(e.genre_ids);return t||(t="No info"),e.poster_path?`<li class="grid-movie-card" id="${e.id}">\n      <div class="movie-item">\n      <div class="img-wrapper">\n        <img class="movie-img"\n        src="http://image.tmdb.org/t/p/w342${e.poster_path}" \n        alt="${e.title}"\n        loading="lazy" />\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info">\n            <h3 class="movie-title">${n}</h3>\n            <ul class="thumb">\n              <li class="movie-genre">${t}</li>\n              <li class="movie-date">| ${i}</li>\n              <li class="movie-rating">${e.vote_average}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>`:`<li class="grid-movie-card" id="${e.id}>\n      <div class="movie-item">\n      <div class="img-wrapper img-placeholder">\n        </div>\n        <div class="movie-info-wrapper">\n          <div class="movie-info">\n            <h3 class="movie-title">${n}</h3>\n            <ul class="thumb">\n              <li class="movie-genre">${t}</li>\n              <li class="movie-date">| ${i}</li>\n              <li class="movie-rating">${e.vote_average}</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </li>`})).join("");L.innerHTML=i}function E(){l.classList.contains("is-hidden")||l.classList.add("is-hidden")}function S(e){e.data.total_pages<2&&g.classList.add("hide"),e.data.total_pages>=2&&g.classList.remove("hide")}function M(e){e===$&&g.classList.add("hide")}function x(e){console.log(p),1===p||p<1?u.classList.add("hide"):u.classList.remove("hide"),"backButton"===e.target.id?(p-=1,h.textContent=p,k(p)):(p+=1,h.textContent=p,k(p)),1===p||p<1?u.classList.add("hide"):u.classList.remove("hide")}async function k(e){try{console.log(_),console.log(w),l.classList.contains("is-hidden")||(document.querySelector(".form__input").value="");const i=await(0,s.getMoviesOnSearch)("search/movie",w,e);E(),S(i),function(e){0!==e.data.results.length?(b(e.data.results),S(e)):l.classList.remove("is-hidden")}(i),M(e)}catch(e){console.error(e)}}form.addEventListener("submit",(async function(e){e.preventDefault(),_=e.target.firstElementChild.value;try{const e=await(0,s.getMoviesOnSearch)("search/movie",_,1);if($=e.data.total_pages,$>0&&(p=1),1===p&&u.classList.add("hide"),h.textContent=`${p}`,E(),0===e.data.results.length)return void l.classList.remove("is-hidden");w=_,b(e.data.results),S(e),u.removeEventListener("click",f),g.removeEventListener("click",f),u.addEventListener("click",x),g.addEventListener("click",x)}catch(e){console.error(e)}})),u.classList.add("hide");const q=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],O=document.getElementById("tags");var C=[];O.innerHTML="",q.forEach((e=>{const i=document.createElement("div");i.classList.add("tag"),i.id=e.id,i.innerText=e.name,i.addEventListener("click",(()=>{var n;i.classList.toggle("highlight"),0==C.length?C.push(e.id):C.includes(e.id)?C.forEach(((i,n)=>{i==e.id&&C.splice(n,1)})):C.push(e.id),n="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=144c01915625ec70297b77a615cc2ea7&with_genres="+encodeURI(C.join(",")),fetch(n).then((e=>e.json())).then((e=>{c(e.results)}))})),O.append(i)}));
//# sourceMappingURL=index.2e5bc058.js.map
