!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var a=i[e];delete i[e];var d={id:e,exports:{}};return n[e]=d,a.call(d.exports,d,d.exports),d.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,n){i[e]=n},e.parcelRequired7c6=a);var d=a("87q4y");var t=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],r=document.getElementById("tags"),o=[];r.innerHTML="",t.forEach((function(e){var n=document.createElement("div");n.classList.add("tag"),n.id=e.id,n.innerText=e.name,n.addEventListener("click",(function(){var i;n.classList.toggle("highlight"),0==o.length?o.push(e.id):o.includes(e.id)?o.forEach((function(n,i){n==e.id&&o.splice(i,1)})):o.push(e.id),i="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=144c01915625ec70297b77a615cc2ea7&with_genres="+encodeURI(o.join(",")),lastUrl=i,fetch(i).then((function(e){return e.json()})).then((function(e){(0,d.renderTrendingMovies)(e.results)}))})),r.append(n)}))}();
//# sourceMappingURL=index.c73134d7.js.map
