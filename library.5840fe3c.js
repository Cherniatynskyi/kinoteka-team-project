!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in a)return a[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return a[t]=r,e.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(t,e){n[t]=e},e.parcelRequired7c6=r);var c=r("7pbsT"),o=r("2TvXO"),l=r("gEIo3");function d(t){return s.apply(this,arguments)}function s(){return(s=(0,c.default)(t(o).mark((function e(a){var n;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null,t.prev=1,t.next=4,(0,l.getMovies)("/movie/".concat(a),null,1);case 4:return n=t.sent,console.log(n.data),t.abrupt("return",n.data);case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),e,null,[[1,9]])}//!!!!!!! функція не підключена до index.html
)))).apply(this,arguments)}r("9KRxl");var i=document.querySelector("[data-modalCard-open]"),u=document.querySelector("[data-modalCard-close]"),_=document.querySelector("[data-modalCard]"),f=document.querySelector("[backdrop]"),v=document.querySelector(".card__cont-marking"),p=document.querySelector(".card__table"),g=document.querySelectorAll("[data-add-to]");i.addEventListener("click",(function(t){if(console.log(t.target),t.target.classList.contains("grid-movie-card")){d(t.target.attributes.id.value).then((function(t){return function(t){m=t;var e='<img class="card__img" src="http://image.tmdb.org/t/p/w500'.concat(t.poster_path,'" alt="').concat(t.title,'" />');v.insertAdjacentHTML("afterbegin",e);var a=h(t.vote_average),n=h(t.popularity),r=t.genres.map((function(t){return t.name})),c='<h1 class="card__table-heder">'.concat(t.title,'</h1>\n      <table class="card__table">\n        <tr class="card__table-vote">\n          <td class="card__table-name ">Vote / Votes</td>\n          <td class="card__table-value "><span class="average">').concat(a,'</span> / <span class="vote">').concat(t.vote_count,'</span></td>\n        </tr>\n        <tr class="card__table-popularity">\n          <td class="card__table-name">Popularity</td>\n          <td class="card__table-value">').concat(n,'</td>\n        </tr>\n        <tr class="card__table-title">\n          <td class="card__table-name">Original Title</td>\n          <td class="card__table-value">').concat(t.title,'</td>\n        </tr>\n        <tr class="card__table-genre">\n          <td class="card__table-name last-child">Genre</td>\n          <td class="card__table-value last-child">').concat(r,'</td>\n        </tr>\n      </table>\n      <div class="card__about">\n        <h2 class="card__about-heder">About</h2>\n        <p class="card__about-text">').concat(t.overview,"</p>\n      </div>");p.insertAdjacentHTML("afterbegin",c),g.forEach((function(t){return t.addEventListener("click",y)}))}(t)})),_.classList.remove("no-activ"),document.getElementsByTagName("HTML")[0].classList.add("no-scroll")}return})),u.addEventListener("click",b),_.addEventListener("click",(function(t){if(!t.target.classList.contains("card__cont"))return;b()})),window.addEventListener("keydown",(function(t){"Escape"===t.key&&(b(),f.classList.add("is-hidden"))}));var m=null;function b(){_.classList.add("no-activ"),document.getElementsByTagName("HTML")[0].classList.remove("no-scroll"),v.innerHTML="",p.innerHTML=""}function y(t){!function(t,e){var a=localStorage.getItem(t);if(!a)return void localStorage.setItem(t,JSON.stringify([e]));var n=JSON.parse(a);n.find((function(t){return t.id===e.id}))||n.push(e),localStorage.setItem(t,JSON.stringify(n))}(t.currentTarget.dataset.addTo,m)}function h(t){return t.toFixed(1)}}();
//# sourceMappingURL=library.5840fe3c.js.map
