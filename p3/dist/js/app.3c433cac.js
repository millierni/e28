(function(e){function n(n){for(var r,c,o=n[0],i=n[1],s=n[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&d.push(u[c][0]),u[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var o=t[c];0!==u[o]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},u={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aa9e3":"85a3aa2e","chunk-3c89f8ae":"8c2a12e7","chunk-4930e6a0":"47cd0b4a","chunk-6b46c61b":"3bb6edbb","chunk-e32ac8d6":"1c6c6b7c","chunk-4a4040a0":"ff5c6efc","chunk-6de0bb52":"c097fe39","chunk-b15e1950":"0ce68740"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-3c89f8ae":1,"chunk-4930e6a0":1,"chunk-6b46c61b":1,"chunk-4a4040a0":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0aa9e3":"31d6cfe0","chunk-3c89f8ae":"17930667","chunk-4930e6a0":"496b6d97","chunk-6b46c61b":"6c605cb5","chunk-e32ac8d6":"31d6cfe0","chunk-4a4040a0":"97c0040c","chunk-6de0bb52":"31d6cfe0","chunk-b15e1950":"31d6cfe0"}[e]+".css",u=i.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var s=a[o],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],l=s.getAttribute("data-href");if(l===r||l===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],f.parentNode.removeChild(f),t(a)},f.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}u[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0091":function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return c}));var c=t("bc3a").create({baseURL:null!==(r="e28api.nikolasmillier.com")&&void 0!==r?r:"http://e28api.nikolasmillier.loc",responseType:"json",withCredentials:!0})},"4bed":function(e,n,t){"use strict";t("f4b7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=(t("d3b7"),t("5502")),u=t("0091"),a=!1,o=a?[Object(c["a"])({})]:[],i=Object(c["b"])({plugins:o,state:{minersCount:0,user:null},mutations:{setMinersCount:function(e,n){e.minersCount=n},setUser:function(e,n){e.user=n}},actions:{authUser:function(e){return new Promise((function(n){u["a"].post("auth").then((function(t){t.data.authenticated?e.commit("setUser",t.data.user):e.commit("setUser",!1),n()}))}))}}}),s={class:"page"};function l(e,n,t,c,u,a){var o=Object(r["x"])("router-link"),i=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["g"])("nav",null,[Object(r["g"])("ul",null,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(u.links,(function(e){return Object(r["q"])(),Object(r["d"])(o,{key:e,to:u.paths[e]},{default:Object(r["E"])((function(){return[Object(r["g"])("span",s,Object(r["z"])(e),1)]})),_:2},1032,["to"])})),128))])]),Object(r["g"])(i,{miners:u.miners,onUpdateMiners:a.loadMiners},null,8,["miners","onUpdateMiners"])])}var d={name:"App",data:function(){return{miners:[],links:["Home","Miners","Add","FAQ","Account"],paths:{Home:"/",Miners:"/miners",Add:"/add",FAQ:"FAQ",Account:"Account"}}},mounted:function(){this.loadMiners(),this.$store.dispatch("authUser")},methods:{loadMiners:function(){var e=this;u["a"].get("miner").then((function(n){e.miners=n.data.miner}))}}};t("4bed"),t("f5e4");d.render=l;var f=d,h=t("1da1"),p=(t("96cf"),t("3ca3"),t("ddb0"),t("6c02")),b=[{path:"/",component:function(){return t.e("chunk-4930e6a0").then(t.bind(null,"391e"))},props:!0},{path:"/miners",component:function(){return t.e("chunk-6b46c61b").then(t.bind(null,"beac"))},props:!0},{path:"/add",component:function(){return Promise.all([t.e("chunk-e32ac8d6"),t.e("chunk-4a4040a0")]).then(t.bind(null,"e325"))},props:!0,meta:{requiresAuth:!0}},{path:"/FAQ",component:function(){return t.e("chunk-3c89f8ae").then(t.bind(null,"7166"))},props:!0},{path:"/account",component:function(){return Promise.all([t.e("chunk-e32ac8d6"),t.e("chunk-6de0bb52")]).then(t.bind(null,"8fdc"))},props:!0},{path:"/register",component:function(){return Promise.all([t.e("chunk-e32ac8d6"),t.e("chunk-b15e1950")]).then(t.bind(null,"637f"))},props:!0},{path:"/denied",component:function(){return t.e("chunk-2d0aa9e3").then(t.bind(null,"127c"))}}],m=Object(p["a"])({history:Object(p["b"])(),routes:b});m.beforeEach(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(n){var t,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.matched.some((function(e){return e.meta.requiresAuth})),r=function(e){return!(t&&!e)||"/denied"},null!==i.state.user){e.next=10;break}return e.next=5,i.dispatch("authUser");case 5:if(c=e.sent,null===c){e.next=8;break}return e.abrupt("return",r(i.state.user));case 8:e.next=11;break;case 10:return e.abrupt("return",r(i.state.user));case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),Object(r["c"])(f).use(m).use(i).mount("#app")},"8a13":function(e,n,t){},f4b7:function(e,n,t){},f5e4:function(e,n,t){"use strict";t("8a13")}});
//# sourceMappingURL=app.3c433cac.js.map