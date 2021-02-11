(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({admin:"admin",exercises:"exercises",start:"start",workouts:"workouts"}[e]||e)+"."+{admin:"c5327c8d",exercises:"3e99d70f",start:"98e793b3",workouts:"25b3f206"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={admin:1,start:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({admin:"admin",exercises:"exercises",start:"start",workouts:"workouts"}[e]||e)+"."+{admin:"6a396e59",exercises:"31d6cfe0",start:"ff6635fa",workouts:"31d6cfe0"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/workout-app/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2f8d":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.workout?n("b-card",{staticClass:"mb-3",attrs:{"header-tag":"header",tag:"article","bg-variant":"dark"},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"d-flex justify-content-between"},[n("h3",{staticClass:"mr-2"},[e._v(e._s(e.workout.name))]),n("b-button",{staticClass:"align-self-center",attrs:{to:"/start/"+e.workout.id,variant:"primary"}},[e._v(" Start ")])],1),n("p",[n("small",{staticClass:"d-block"},[e._v("Created by "+e._s(e.workout.createdBy))])]),n("ul",{staticClass:"list-inline levelTimes mb-0"},e._l(e.levels,(function(t){return n("li",[e._v(" "+e._s(t.name)+": "+e._s(e.workoutTotalTime(t.id))+"' ")])})),0)]},proxy:!0}],null,!1,3246056772)},[n("b-card-text",[e.exercises.length>0?n("ul",{staticClass:"list-unstyled mt-3"},e._l(e.workout.rounds,(function(t,o){return n("li",{staticClass:"mb-4"},[n("h5",{staticClass:"mr-4"},[e._v("Round "+e._s(+o+1)+" (x"+e._s(t.repeats)+")")]),t.exercises.length>0?n("ul",e._l(t.exercises,(function(t){return n("li",[e._v(" "+e._s(e.exerciseName(t))+" ")])})),0):e._e()])})),0):e._e()])],1):e._e()},r=[],a=(n("7db0"),n("c740"),n("4160"),n("b0c0"),n("159b"),{name:"WorkoutCard",props:{types:Array,workout:Object},data:function(){return{exercises:[],levels:[],data:this.$storage.get("data")}},mounted:function(){var e;null!==(e=this.data)&&void 0!==e&&e.exercises&&(this.exercises=this.data.exercises,this.levels=this.data["workout-levels"])},methods:{exerciseName:function(e){var t=this.exercises.findIndex((function(t){return t.id===e}));return this.exercises[t].name},workoutTotalTime:function(e){var t=0,n=this.levels.find((function(t){return t.id===e}));return n&&this.workout.rounds.forEach((function(e){var o=e.exercises.length+1,r=o*n.activeTime,a=(o-1)*n.restTime;t+=(r+a)*e.repeats})),Math.floor(t/1e3/60)}}}),i=a,s=(n("97a4"),n("2877")),c=Object(s["a"])(i,o,r,!1,null,"72e7a40e",null);t["a"]=c.exports},"555f":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader"})},r=[],a=(n("9314"),n("2877")),i={},s=Object(a["a"])(i,o,r,!1,null,"523aac0c",null);t["a"]=s.exports},"56c7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("99d1"),r=n("ecee"),a=n("b702"),i=n("c074"),s=n("ad3d"),c=n("2b0e"),u=n("51c2"),l=n("5fda"),d=n("1bbb"),f=n("a15b"),m=n("b28b"),p=n("d0b9"),b=n("8f77"),v=n("11a5"),h=n("042b"),g=n("4711"),k=n("50a6"),w=n("1947"),_=n("11de"),x=n("8226"),y=n("4797"),C=n("9c7d"),W=n("c3e6"),j=n("3b99"),E=n("5843"),T=n("205f"),O=n("d6e4"),N=n("2812"),S=n("4918"),A=n("3010"),$=n("5b4c"),P=n("e98b"),q=n("6190"),L=n("f902"),M=n("29a1"),B=n("8361"),R=n("49f5"),F=n("2616"),H="2.4.4",D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark",sticky:""}},[n("b-container",[n("b-navbar-brand",{attrs:{to:"/"},on:{click:function(t){return e.hideNavigation()}}},[n("siteName",{attrs:{variant:"short",image:!0}})],1),n("b-navbar-toggle",{attrs:{target:"mobile-navigation"}}),n("b-collapse",{ref:"mobileNavigation",attrs:{id:"mobile-navigation","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{staticClass:"d-none d-lg-block",attrs:{to:"/"}},[e._v("Home")]),n("b-nav-item",{attrs:{to:"/workouts"}},[e._v("Workouts")]),n("b-nav-item",{attrs:{to:"/exercises"}},[e._v("Exercises")]),n("b-nav-item",{staticClass:"d-none d-md-block",attrs:{to:"/admin"}},[e._v("Admin")])],1)],1)],1)],1),n("section",{staticClass:"pt-4"},[n("router-view",{key:e.$route.fullPath})],1),n("footer",{staticClass:"container-fluid p-5 mt-5"},[n("b-row",[n("b-col",{staticClass:"text-center"},[n("a",{attrs:{href:"https://github.com/quicoto/workout-app",title:"Workout App on Github"}},[n("small",[e._v("v"+e._s(e.version))])])])],1)],1)],1)},I=[],J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",["short"===e.variant?o("span",[e._v("Workout")]):e._e(),"short"!==e.variant?o("span",[e._v("Workout like Thor")]):e._e(),e.image?o("img",{staticClass:"d-inline-block align-top logo",attrs:{alt:"Workout like Thor logo",src:n("9b19")}}):e._e()])},G=[],K={name:"siteName",props:{variant:{type:String,default:"short"},image:{type:Boolean,default:!0}},data:function(){return{}}},U=K,z=n("2877"),Q=Object(z["a"])(U,J,G,!1,null,null,null),V=Q.exports,X={components:{siteName:V},data:function(){return{query:"",version:H}},methods:{hideNavigation:function(){this.$refs.mobileNavigation.show=!1},onSubmit:function(){"search"===this.$router.history.current.path||this.$router.push({name:"search",query:{query:this.query}})}}},Y=X,Z=(n("5c0b"),Object(z["a"])(Y,D,I,!1,null,null,null)),ee=Z.exports,te=n("9483");Object(te["a"])("".concat("/workout-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ne=n("8c4f"),oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("b-container",[n("h1",{staticClass:"text-center"},[e._v("Workout like Thor")]),n("RecommendedWorkout")],1)],1)},re=[],ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Loader",{directives:[{name:"show",rawName:"v-show",value:!e.recommendedWorkout.id,expression:"!recommendedWorkout.id"}]}),e.recommendedWorkout.id?n("div",[n("h2",{staticClass:"mt-4 mb-4 text-center text-md-left"},[e._v("Today's workout")]),n("WorkoutCard",{attrs:{workout:e.recommendedWorkout}}),n("b-row",[n("b-col",{staticClass:"mt-2",attrs:{cols:"12",md:"6","offset-md":"3",lg:"4","offset-lg":"4"}},[n("b-button",{attrs:{name:"newWorkout",block:"",variant:"primary"},on:{click:function(t){return e.newWorkout()}}},[e._v(" Show me another workout ")])],1)],1)],1):e._e()],1)},ie=[],se=n("555f"),ce=n("2f8d");function ue(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[n],e[n]=o}return e}var le={name:"RecommendedWorkout",components:{Loader:se["a"],WorkoutCard:ce["a"]},data:function(){return{recommendedWorkout:{},data:this.$storage.get("data")}},mounted:function(){this.newWorkout()},methods:{newWorkout:function(){var e,t=[];if(null!==(e=this.data)&&void 0!==e&&e.workouts){var n=ue(this.data.workouts);this.recommendedWorkout=n[0]}else this.recommendedWorkout=t}}},de=le,fe=Object(z["a"])(de,ae,ie,!1,null,null,null),me=fe.exports,pe={components:{RecommendedWorkout:me}},be=pe,ve=Object(z["a"])(be,oe,re,!1,null,null,null),he=ve.exports;c["default"].use(ne["a"]);var ge=new ne["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"home",component:he,meta:{title:"Home"}},{path:"/admin",name:"admin",component:function(){return n.e("admin").then(n.bind(null,"3530"))},meta:{title:"Admin"}},{path:"/exercises",name:"exercises",component:function(){return n.e("exercises").then(n.bind(null,"b280"))},meta:{title:"Exercises"}},{path:"/workouts",name:"workouts",component:function(){return n.e("workouts").then(n.bind(null,"b0c6"))},meta:{title:"Workouts"}},{path:"/start/:workout_id",name:"start",component:function(){return n.e("start").then(n.bind(null,"d701"))},meta:{title:"Start"}}]});ge.afterEach((function(e){document.title="".concat(e.meta.title," - Workout like Thor"),window.scrollTo(0,0)}));var ke=ge;r["c"].add(a["b"]),r["c"].add(i["e"]),r["c"].add(i["f"]),r["c"].add(a["d"]),r["c"].add(a["f"]),r["c"].add(a["a"]),r["c"].add(i["a"]),r["c"].add(i["d"]),r["c"].add(i["c"]),r["c"].add(i["b"]),r["c"].add(i["b"]),r["c"].add(a["c"]),r["c"].add(a["e"]),c["default"].component("font-awesome-icon",s["a"]),c["default"].config.productionTip=!0,c["default"].use(u["a"]),c["default"].component("b-alert",l["a"]),c["default"].component("b-container",d["a"]),c["default"].component("b-row",f["a"]),c["default"].component("b-col",m["a"]),c["default"].component("b-navbar",p["a"]),c["default"].component("b-navbar-brand",b["a"]),c["default"].component("b-navbar-toggle",v["a"]),c["default"].component("b-navbar-nav",h["a"]),c["default"].component("b-nav-item",g["a"]),c["default"].component("b-nav-form",k["a"]),c["default"].component("b-button",w["a"]),c["default"].component("b-form",_["a"]),c["default"].component("b-form-group",x["a"]),c["default"].component("b-form-input",y["a"]),c["default"].component("b-form-textarea",C["a"]),c["default"].component("b-form-checkbox",W["a"]),c["default"].component("b-form-checkbox-group",j["a"]),c["default"].component("b-collapse",E["a"]),c["default"].component("b-card",T["a"]),c["default"].component("b-card-text",O["a"]),c["default"].component("b-card-img",N["a"]),c["default"].component("b-img",S["a"]),c["default"].component("b-form-invalid-feedback",A["a"]),c["default"].component("b-form-valid-feedback",$["a"]),c["default"].component("b-badge",P["a"]),c["default"].component("b-tab",q["a"]),c["default"].component("b-tabs",L["a"]),c["default"].component("b-table",M["a"]),c["default"].component("b-form-select",B["a"]),c["default"].component("b-progress",R["a"]),c["default"].directive("b-tooltip",F["a"]),c["default"].use(o["a"],{prefix:"workout_",driver:"local",ttl:0});var we="";fetch("data.json?ver=".concat(H)).then((function(e){return e.json()})).then((function(e){we||(we=new c["default"]({router:ke,render:function(e){return e(ee)},created:function(){this.$storage.set("data",e)}}).$mount("#app"))}))},"5a17":function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},9314:function(e,t,n){"use strict";n("5a17")},"97a4":function(e,t,n){"use strict";n("56c7")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.f3257d6b.svg"},"9c0c":function(e,t,n){}});