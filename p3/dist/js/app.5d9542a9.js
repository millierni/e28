(function(e){function n(n){for(var r,u,o=n[0],i=n[1],s=n[2],d=0,l=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&l.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(l.length)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var o=t[u];0!==c[o]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={app:0},c={app:0},a=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-03a8e697":"1647eb36","chunk-2d0aa9e3":"53036514","chunk-3eb6692d":"93e4b381","chunk-9850a142":"4e99c839","chunk-e32ac8d6":"1c6c6b7c","chunk-6de0bb52":"27fdb105","chunk-97285eea":"2fad9fd2","chunk-b15e1950":"9864a630"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-03a8e697":1,"chunk-3eb6692d":1,"chunk-9850a142":1,"chunk-97285eea":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-03a8e697":"e82cb4f3","chunk-2d0aa9e3":"31d6cfe0","chunk-3eb6692d":"6c605cb5","chunk-9850a142":"17930667","chunk-e32ac8d6":"31d6cfe0","chunk-6de0bb52":"31d6cfe0","chunk-97285eea":"0b920d35","chunk-b15e1950":"31d6cfe0"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var s=a[o],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],d=s.getAttribute("data-href");if(d===r||d===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete u[e],h.parentNode.removeChild(h),t(a)},h.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){u[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;s=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,t[1](l)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var h=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0091":function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return u}));var u=t("bc3a").create({baseURL:null!==(r="http://e28api.nikolasmillier.com")&&void 0!==r?r:"http://e28api.nikolasmillier.loc",responseType:"json",withCredentials:!0})},"16f8":function(e,n,t){},"4bed":function(e,n,t){"use strict";t("f4b7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),u=(t("d3b7"),t("5502")),c=t("0091"),a=!1,o=a?[Object(u["a"])({})]:[],i=Object(u["b"])({plugins:o,state:{minersCount:0,user:null},mutations:{setMinersCount:function(e,n){e.minersCount=n},setUser:function(e,n){e.user=n}},actions:{authUser:function(e){return new Promise((function(n){c["a"].post("auth").then((function(t){t.data.authenticated?e.commit("setUser",t.data.user):e.commit("setUser",!1),n()}))}))}}}),s={class:"page"};function d(e,n,t,u,c,a){var o=Object(r["x"])("router-link"),i=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["g"])("nav",null,[Object(r["g"])("ul",null,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(c.links,(function(e){return Object(r["q"])(),Object(r["d"])(o,{key:e,to:c.paths[e]},{default:Object(r["E"])((function(){return[Object(r["g"])("span",s,Object(r["z"])(e),1)]})),_:2},1032,["to"])})),128))])]),Object(r["g"])(i,{miners:c.miners,onUpdateMiners:a.loadMiners},null,8,["miners","onUpdateMiners"])])}var l={name:"App",data:function(){return{miners:[],links:["Home","Miners","Add","FAQ","Account"],paths:{Home:"/",Miners:"/miners",Add:"/add",FAQ:"FAQ",Account:"Account"}}},mounted:function(){this.loadMiners(),this.$store.dispatch("authUser")},methods:{loadMiners:function(){var e=this;c["a"].get("miner").then((function(n){e.miners=n.data.miner}))}}};t("4bed"),t("6c3c");l.render=d;var h=l,f=t("1da1"),p=(t("96cf"),t("3ca3"),t("ddb0"),t("6c02")),b=[{path:"/",component:function(){return t.e("chunk-03a8e697").then(t.bind(null,"391e"))},props:!0},{path:"/miners",component:function(){return t.e("chunk-3eb6692d").then(t.bind(null,"beac"))},props:!0},{path:"/add",component:function(){return Promise.all([t.e("chunk-e32ac8d6"),t.e("chunk-97285eea")]).then(t.bind(null,"e325"))},props:!0,meta:{requiresAuth:!0}},{path:"/FAQ",component:function(){return t.e("chunk-9850a142").then(t.bind(null,"7166"))},props:!0},{path:"/account",component:function(){return Promise.all([t.e("chunk-e32ac8d6"),t.e("chunk-6de0bb52")]).then(t.bind(null,"8fdc"))},props:!0},{path:"/register",component:function(){return Promise.all([t.e("chunk-e32ac8d6"),t.e("chunk-b15e1950")]).then(t.bind(null,"637f"))},props:!0},{path:"/denied",component:function(){return t.e("chunk-2d0aa9e3").then(t.bind(null,"127c"))}}],m=Object(p["a"])({mode:"hash",history:Object(p["b"])(),routes:b});m.beforeEach(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(n){var t,r,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.matched.some((function(e){return e.meta.requiresAuth})),r=function(e){return!(t&&!e)||"/denied"},null!==i.state.user){e.next=10;break}return e.next=5,i.dispatch("authUser");case 5:if(u=e.sent,null===u){e.next=8;break}return e.abrupt("return",r(i.state.user));case 8:e.next=11;break;case 10:return e.abrupt("return",r(i.state.user));case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),Object(r["c"])(h).use(m).use(i).mount("#app")},"6c3c":function(e,n,t){"use strict";t("16f8")},f4b7:function(e,n,t){}});
//# sourceMappingURL=app.5d9542a9.js.map