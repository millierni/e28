(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a4040a0"],{"82c8":function(e,t,r){e.exports=r.p+"img/miner.e788849b.png"},"9ed2":function(e,t,r){"use strict";r("fbb2")},e325:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c=r("82c8"),i=r.n(c),a=Object(n["G"])("data-v-8cced7d0");Object(n["t"])("data-v-8cced7d0");var l=Object(n["g"])("img",{id:"logo",alt:"Miner logo",src:i.a,width:"140"},null,-1),d=Object(n["g"])("h1",{id:"title"},"Add Miner",-1),o={id:"inputs"},s={class:"row center"},b={class:"col-lg-9"},u={class:"block",for:"brand"},j=Object(n["g"])("h4",{class:"block-title"},"Brand:",-1),O={key:0},h={key:0},g={class:"col-lg-9"},p={class:"block",for:"model"},m=Object(n["g"])("h4",{class:"block-title"},"Model:",-1),v={key:0},f={key:0},k={class:"col-lg-9"},y={class:"block",for:"hashingAlgorithm"},w=Object(n["g"])("h4",{class:"block-title"},"Hashing Algorithm:",-1),q={key:0},A={key:0},M={class:"col-lg-9"},B={class:"block",for:"hashrate"},C=Object(n["g"])("h4",{class:"block-title"},"Hashrate:",-1),z={key:0},F={key:0},U={class:"col-lg-9"},V={class:"block",for:"power"},W=Object(n["g"])("h4",{class:"block-title"},"Power:",-1),x={key:0},H={key:0},J={key:0,class:"alert-success"},P={key:1,class:"alert-warning"};Object(n["r"])();var _=a((function(e,t,r,c,i,a){return Object(n["q"])(),Object(n["d"])("div",null,[l,d,Object(n["g"])("div",o,[Object(n["g"])("div",s,[Object(n["g"])("div",b,[Object(n["g"])("label",u,[j,Object(n["F"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.miner.brand=e}),id:"brand",onBlur:t[2]||(t[2]=function(){return a.validate&&a.validate.apply(a,arguments)})},null,544),[[n["C"],i.miner.brand]])]),i.errors?(Object(n["q"])(),Object(n["d"])("div",O,[i.errors.brand?(Object(n["q"])(),Object(n["d"])("p",h,Object(n["z"])(i.errors.brand[0]),1)):Object(n["e"])("",!0)])):Object(n["e"])("",!0)]),Object(n["g"])("div",g,[Object(n["g"])("label",p,[m,Object(n["F"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.miner.model=e}),id:"model",onBlur:t[4]||(t[4]=function(){return a.validate&&a.validate.apply(a,arguments)})},null,544),[[n["C"],i.miner.model]])]),i.errors?(Object(n["q"])(),Object(n["d"])("div",v,[i.errors.model?(Object(n["q"])(),Object(n["d"])("p",f,Object(n["z"])(i.errors.model[0]),1)):Object(n["e"])("",!0)])):Object(n["e"])("",!0)]),Object(n["g"])("div",k,[Object(n["g"])("label",y,[w,Object(n["F"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return i.miner.hashingAlgorithm=e}),id:"hashingAlgorithm",onBlur:t[6]||(t[6]=function(){return a.validate&&a.validate.apply(a,arguments)})},null,544),[[n["C"],i.miner.hashingAlgorithm]])]),i.errors?(Object(n["q"])(),Object(n["d"])("div",q,[i.errors.hashingAlgorithm?(Object(n["q"])(),Object(n["d"])("p",A,Object(n["z"])(i.errors.hashingAlgorithm[0]),1)):Object(n["e"])("",!0)])):Object(n["e"])("",!0)]),Object(n["g"])("div",M,[Object(n["g"])("label",B,[C,Object(n["F"])(Object(n["g"])("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=function(e){return i.miner.hashrate=e}),id:"hashrate",onBlur:t[8]||(t[8]=function(){return a.validate&&a.validate.apply(a,arguments)})},null,544),[[n["C"],i.miner.hashrate]])]),i.errors?(Object(n["q"])(),Object(n["d"])("div",z,[i.errors.hashrate?(Object(n["q"])(),Object(n["d"])("p",F,Object(n["z"])(i.errors.hashrate[0]),1)):Object(n["e"])("",!0)])):Object(n["e"])("",!0)]),Object(n["g"])("div",U,[Object(n["g"])("label",V,[W,Object(n["F"])(Object(n["g"])("input",{type:"number","onUpdate:modelValue":t[9]||(t[9]=function(e){return i.miner.power=e}),id:"power",onBlur:t[10]||(t[10]=function(){return a.validate&&a.validate.apply(a,arguments)})},null,544),[[n["C"],i.miner.power]])]),i.errors?(Object(n["q"])(),Object(n["d"])("div",x,[i.errors.power?(Object(n["q"])(),Object(n["d"])("p",H,Object(n["z"])(i.errors.power[0]),1)):Object(n["e"])("",!0)])):Object(n["e"])("",!0)])])]),i.isAdded?(Object(n["q"])(),Object(n["d"])("div",J," The miner was added successfully. ")):Object(n["e"])("",!0),i.isWarning?(Object(n["q"])(),Object(n["d"])("div",P," Please fill all the required fields. ")):Object(n["e"])("",!0),Object(n["g"])("button",{onClick:t[11]||(t[11]=function(){return a.addMiner&&a.addMiner.apply(a,arguments)})},"Add Miner")])})),G=r("0091"),I=r("1c4a"),T=r.n(I),$={data:function(){return{miner:{brand:"",model:"",hashingAlgorithm:"",hashrate:0,power:0},errors:null,isAdded:!1,isWarning:!1}},methods:{validate:function(){var e=new T.a(this.miner,{brand:"required|between:3,100",model:"required|between:1,100",hashingAlgorithm:"required|between:1,100",hashrate:"required|numeric|min:2",power:"required|numeric|min:1"});return e.fails()?(this.errors=e.errors.all(),this.isWarning=!0):this.errors=null,e.passes()},addMiner:function(){var e=this;this.validate()&&G["a"].post("/miner",this.miner).then((function(t){t.data.errors?(e.errors=t.data.errors,e.isAdded=!1,e.isWarning=!0):(e.$emit("update-miners"),e.isAdded=!0,e.isWarning=!1)}))}}};r("9ed2");$.render=_,$.__scopeId="data-v-8cced7d0";t["default"]=$},fbb2:function(e,t,r){}}]);
//# sourceMappingURL=chunk-4a4040a0.ff5c6efc.js.map