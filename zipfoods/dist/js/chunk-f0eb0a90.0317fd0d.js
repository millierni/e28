(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0eb0a90"],{"0829":function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),r=Object(n["G"])("data-v-0447ccf4");Object(n["t"])("data-v-0447ccf4");var o={id:"cart-page"},u=Object(n["h"])("h1",null,"Your Cart",-1),i={key:0},a={key:1,"data-test":"cart-contents",class:"clean-list"};Object(n["r"])();var s=r((function(t,e,c,r,s,d){return Object(n["q"])(),Object(n["e"])("div",o,[u,0==s.items.length?(Object(n["q"])(),Object(n["e"])("div",i,"No items")):Object(n["f"])("",!0),d.productsLoaded?(Object(n["q"])(),Object(n["e"])("ul",a,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(s.items,(function(t){return Object(n["q"])(),Object(n["e"])("li",{key:t.id},[Object(n["g"])(Object(n["z"])(t.quantity)+" x "+Object(n["z"])(d.getProductDetails(t.id).name)+" ",1),Object(n["h"])("button",{onClick:function(e){return d.removeFromCart(t.id)},"data-test":"remove-from-cart-button"}," Remove ",8,["onClick"])])})),128))])):Object(n["f"])("",!0)])})),d=(c("4de4"),c("0091")),b={data:function(){return{items:[]}},computed:{productsLoaded:function(){return this.products.length>0},products:function(){return this.$store.state.products}},mounted:function(){this.items=d["b"].getItems()},methods:{getProductDetails:function(t){return this.products.filter((function(e){return e.id==t}),t)[0]},removeFromCart:function(t){d["b"].remove(t),this.$store.commit("setCartCount",d["b"].count())}}};c("08ad");b.render=s,b.__scopeId="data-v-0447ccf4";e["default"]=b},"08ad":function(t,e,c){"use strict";c("78e9")},"78e9":function(t,e,c){},b0c0:function(t,e,c){var n=c("83ab"),r=c("9bf2").f,o=Function.prototype,u=o.toString,i=/^\s*function ([^ (]*)/,a="name";n&&!(a in o)&&r(o,a,{configurable:!0,get:function(){try{return u.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-f0eb0a90.0317fd0d.js.map