(function(e){function t(t){for(var o,i,s=t[0],l=t[1],c=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/VueTest/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2af6":function(e,t,n){"use strict";var o=n("f0bf"),r=n.n(o);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navhead"),n("home")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},s=[],l={},c=l,u=n("2877"),f=Object(u["a"])(c,i,s,!1,null,null,null),d=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 text-center"},[n("br"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inp,expression:"inp"}],attrs:{type:"text",placeholder:"Enter Your Task"},domProps:{value:e.inp},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addToList(t)},input:function(t){t.target.composing||(e.inp=t.target.value)}}}),n("br"),n("br"),n("b-button",{attrs:{pill:"",variant:"secondary"},on:{click:e.addToList}},[e._v("Add to List "),n("span",{staticClass:"fas fa-plus"})])],1),n("div",{staticClass:"col-12 col-md-6"},[n("ul",{},e._l(e.list,(function(t,o){return n("li",{key:o},[n("b-button",{attrs:{pill:""},on:{click:function(t){return e.deleteval(o)}}},[n("span",{staticClass:"far fa-hand-scissors"})]),e._v(" "+e._s(t)+" ")],1)})),0)])])])])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"text-center"},[n("span",{staticClass:"fas fa-list-ul"}),e._v(" Todo or !Todo")])}],h=(n("a434"),{components:{},data:function(){return{inp:"",list:[]}},methods:{addToList:function(){this.list.push(this.inp),this.inp=""},deleteval:function(e){this.list.splice(e,1)}}}),b=h,m=(n("2af6"),Object(u["a"])(b,p,v,!1,null,"383a7986",null)),g=m.exports,y={components:{navhead:d,home:g}},w=y,_=Object(u["a"])(w,r,a,!1,null,null,null),k=_.exports,O=n("9483");Object(O["a"])("".concat("/VueTest/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var j=n("8c4f");o["default"].use(j["a"]);var x=[{path:"/",name:"Home",component:g}],T=new j["a"]({mode:"history",base:"/VueTest/",routes:x}),C=T,P=n("2f62");o["default"].use(P["a"]);var E=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),S=n("5f5b");n("f9e3"),n("2dd8"),n("15f5"),n("7051");o["default"].config.productionTip=!1,o["default"].use(S["a"]),new o["default"]({router:C,store:E,render:function(e){return e(k)}}).$mount("#app")},f0bf:function(e,t,n){}});
//# sourceMappingURL=app.4cfd61c1.js.map