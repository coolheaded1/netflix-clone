(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){e.exports=n(35)},16:function(e,t,n){},17:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),i=(n(16),n(17),n(2)),s=n.n(i),l=n(4),h=n(3),m=n(7),u=n(10),p=n.n(u);var f=function(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,o=Object(a.useState)([]),i=Object(h.a)(o,2),u=i[0],f=i[1],d=Object(a.useState)(""),v=Object(h.a)(d,2),g=v[0],b=v[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n).then((function(e){return e.json()})).then((function(e){f(e.results)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),c.a.createElement("div",{className:"row"},c.a.createElement("h5",{style:{marginLeft:20}},t),c.a.createElement("div",{className:"row__poster"},u.map((function(e){return c.a.createElement("img",{key:e.id,onClick:function(){return function(e){g?b(""):p()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);b(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name,className:"posters ".concat(r&&"posters_large")})}))),g&&c.a.createElement(m.a,{videoId:g,opts:{height:300,width:"100%",playerVars:{autoplay:1}}}))},d="64ad98e0633e8186c833007a318a72ed",v={fetchTrending:"https://api.themoviedb.org/3/trending/all/week?api_key=".concat(d,"&language=en-US"),fetchNetflixOriginal:"https://api.themoviedb.org/3/discover/tv?api_key=".concat(d,"&with_networks=213"),fetchTopRated:"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(d,"&language=en-US"),fetchActionMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(d,"&with_genres=28"),fetchComedyMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(d,"&with_genres=35"),fetchHorrorMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(d,"&with_genres=27"),fetchRomanceMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(d,"&with_genres=10749"),fetchDocumentaries:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(d,"&with_genres=99")};function g(e){var t,n,r=e.fetchUrl,o=Object(a.useState)([]),i=Object(h.a)(o,2),m=i[0],u=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r).then((function(e){return e.json()})).then((function(e){u(e.results[Math.floor(Math.random()*e.results.length-1)])}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===m||void 0===m?void 0:m.backdrop_path,'")'),backgroundPosition:"center",backgroundSize:"cover"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",{className:"banner__title"},(null===m||void 0===m?void 0:m.title)||(null===m||void 0===m?void 0:m.name)||(null===m||void 0===m?void 0:m.original_name)),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement("button",{className:"banner__button"},"Play"),c.a.createElement("button",{className:"banner__button"},"My List")),c.a.createElement("h1",{className:"banner__description"},(t=null===m||void 0===m?void 0:m.overview,n=150,(null===t||void 0===t?void 0:t.length)>n?t.substr(0,n-1)+"...":t))),c.a.createElement("div",{className:"opacity"}))}var b=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(g,{fetchUrl:v.fetchNetflixOriginal}),c.a.createElement(f,{title:"NETFLIX ORIGINAL",fetchUrl:v.fetchNetflixOriginal,isLargeRow:!0}),c.a.createElement(f,{title:"TRENDING",fetchUrl:v.fetchTrending}),c.a.createElement(f,{title:"TOP RATED",fetchUrl:v.fetchTopRated}),c.a.createElement(f,{title:"ACTION MOVIES",fetchUrl:v.fetchActionMovies}),c.a.createElement(f,{title:"COMEDY MOVIES",fetchUrl:v.fetchComedyMovies}),c.a.createElement(f,{title:"HORROR MOVIES",fetchUrl:v.fetchHorrorMovies}),c.a.createElement(f,{title:"ROMANCE MOVIES",fetchUrl:v.fetchRomanceMovies}),c.a.createElement(f,{title:"DOCUMENTARIES",fetchUrl:v.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.57092d03.chunk.js.map