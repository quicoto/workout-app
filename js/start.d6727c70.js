(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["start"],{"159b":function(e,t,r){var i=r("da84"),n=r("fdbc"),s=r("17c2"),o=r("9112");for(var a in n){var c=i[a],u=c&&c.prototype;if(u&&u.forEach!==s)try{o(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(e,t,r){"use strict";var i=r("b727").forEach,n=r("a640"),s=r("ae40"),o=n("forEach"),a=s("forEach");e.exports=o&&a?[].forEach:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,r){var i=r("d039"),n=r("b622"),s=r("2d00"),o=n("species");e.exports=function(e){return s>=51||!i((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4160:function(e,t,r){"use strict";var i=r("23e7"),n=r("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"739a":function(e,t,r){"use strict";r("bac7")},8418:function(e,t,r){"use strict";var i=r("c04e"),n=r("9bf2"),s=r("5c6c");e.exports=function(e,t,r){var o=i(t);o in e?n.f(e,o,s(0,r)):e[o]=r}},"99af":function(e,t,r){"use strict";var i=r("23e7"),n=r("d039"),s=r("e8b5"),o=r("861d"),a=r("7b0b"),c=r("50c4"),u=r("8418"),l=r("65f0"),m=r("1dde"),v=r("b622"),d=r("2d00"),h=v("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",w=d>=51||!n((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=m("concat"),k=function(e){if(!o(e))return!1;var t=e[h];return void 0!==t?!!t:s(e)},L=!w||!g;i({target:"Array",proto:!0,forced:L},{concat:function(e){var t,r,i,n,s,o=a(this),m=l(o,0),v=0;for(t=-1,i=arguments.length;t<i;t++)if(s=-1===t?o:arguments[t],k(s)){if(n=c(s.length),v+n>f)throw TypeError(p);for(r=0;r<n;r++,v++)r in s&&u(m,v,s[r])}else{if(v>=f)throw TypeError(p);u(m,v++,s)}return m.length=v,m}})},a640:function(e,t,r){"use strict";var i=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&i((function(){r.call(null,t||function(){throw 1},1)}))}},bac7:function(e,t,r){},d701:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.noWorkoutFound?r("b-container",[r("b-row",[r("b-col",{staticClass:"text-center text-danger"},[r("h2",[e._v("No workout was found")]),r("font-awesome-icon",{staticClass:"mt-4",attrs:{icon:["far","frown"],size:"5x",title:"Sad face"}})],1)],1)],1):e._e(),e.noWorkoutFound?e._e():r("b-container",{staticClass:"timer"},[r("Loader",{directives:[{name:"show",rawName:"v-show",value:!e.workout.id,expression:"!workout.id"}]}),e.workout.id?r("b-row",[e.isUserReady?e._e():r("b-col",[r("h2",{staticClass:"text-center mb-4 text-info"},[r("em",[e._v(e._s(e.workout.name))])]),r("div",{staticClass:"text-center"},[r("div",{staticClass:"d-flex align-items-center justify-content-center"},[r("ul",{staticClass:"text-left pl-0 mr-4"},[r("li",[e._v("Active time: "+e._s(e.workoutLevels[e.user.level-1].activeTime/1e3)+'"')]),r("li",[e._v("Rest time: "+e._s(e.workoutLevels[e.user.level-1].restTime/1e3)+'"')])]),r("img",{staticClass:"icon mb-4",attrs:{src:e.publicPath+"img/icons/levels/"+e.user.level+".svg",alt:"Level: "+e.levelName(e.user.level),title:"Level: "+e.levelName(e.user.level)}})]),r("b-form",[r("b-form-group",{attrs:{label:e.levelName(e.user.level)}},[r("b-form-input",{attrs:{id:"level-range",number:"",type:"range",min:e.workoutLevels[0].id,max:e.workoutLevels[e.workoutLevels.length-1].id},model:{value:e.user.level,callback:function(t){e.$set(e.user,"level",t)},expression:"user.level"}})],1)],1)],1),r("h3",{staticClass:"text-center mb-4"},[e._v("Are you Ready?")]),r("b-button",{attrs:{block:"",size:"lg",variant:"primary"},on:{click:function(t){return e.start()}}},[e._v(" Start! ")])],1),e.isUserReady?r("b-col",{staticClass:"text-center mb-3"},[r("b-row",{directives:[{name:"show",rawName:"v-show",value:e.progress<100,expression:"progress < 100"}],staticClass:"header mb-4"},[r("b-col",[r("b-button",{directives:[{name:"show",rawName:"v-show",value:e.currentItem-1>=0,expression:"currentItem - 1 >= 0"}],attrs:{variant:"primary",size:"lg",block:""},on:{click:function(t){return e.previous()}}},[e._v("Previous")])],1),r("b-col",[r("b-button",{directives:[{name:"show",rawName:"v-show",value:e.currentItem+1<e.timeline.length,expression:"currentItem + 1 < timeline.length"}],attrs:{variant:"primary",size:"lg",block:""},on:{click:function(t){return e.next()}}},[e._v("Next")])],1)],1),"undefined"!==typeof e.timeline[e.currentItem]&&e.timeline[e.currentItem].id?r("div",{staticClass:"h1 pt-4 mb-4 itemName text-warning"},[e._v(e._s(e.timeline[e.currentItem].name))]):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:"undefined"!==typeof e.timeline[e.currentItem]&&!e.timeline[e.currentItem].id&&e.currentItem<e.timeline.length,expression:"typeof timeline[currentItem] !== 'undefined' &&\n            !timeline[currentItem].id && currentItem < timeline.length"}],staticClass:"h1 pt-4 mb-4 itemName text-success"},[e._v("Rest time")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.currentItem===e.timeline.length,expression:"currentItem === timeline.length"}],staticClass:"h2 text-success pt-5"},[r("p",[r("font-awesome-icon",{attrs:{size:"3x",icon:["far","grin-stars"]}})],1),r("p",[e._v(" Congratulations ")]),r("p",[e._v(" You're done! ")])]),e.currentItem<e.timeline.length?r("div",{staticClass:"h1 timeLeft text-light",class:e.timer.remaining&&!0===e.timer.paused?"timeLeft--active":""},[e._v(" "+e._s(e.printTimeLeft())+" ")]):e._e(),"undefined"!==typeof e.timeline[e.currentItem+1]&&e.timeline[e.currentItem+1].name?r("div",{staticClass:"h1 pt-4 text-muted"},[e._v(" Next up:"),r("br"),e._v(e._s(e.timeline[e.currentItem+1].name)+" ")]):e._e(),e.currentItem+1<=e.timeline.length?r("div",{staticClass:"text-muted mt-5"},[e._v(" "+e._s(e.currentItem+1)+" of "+e._s(e.timeline.length)+" ")]):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:e.progress<100,expression:"progress < 100"}],staticClass:"footer"},[r("b-progress",{attrs:{value:e.progress,variant:"success",striped:"",animated:e.progressAnimation}}),r("div",{staticClass:"footerActions d-flex align-items-stretch"},[r("div",{staticClass:"column align-self-center flex-fill"},[r("b-button",{attrs:{variant:"danger",size:"lg",block:""},on:{click:function(t){return e.stop()}}},[e._v("STOP")])],1),r("div",{staticClass:"column align-self-center flex-fill"},[r("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.timer.paused,expression:"!timer.paused"}],attrs:{variant:"warning",size:"lg",block:""},on:{click:function(t){return e.pause()}}},[e._v("PAUSE")]),r("b-button",{directives:[{name:"show",rawName:"v-show",value:e.timer.paused,expression:"timer.paused"}],attrs:{variant:"success",size:"lg",block:""},on:{click:function(t){return e.resume()}}},[e._v("RESUME")])],1)])],1)],1):e._e()],1):e._e()],1)],1)},n=[],s=(r("7db0"),r("4160"),r("b0c0"),r("159b"),r("555f")),o=(r("99af"),{allow:function(){"wakeLock"in navigator?(this._wakeLock.release(),this._wakeLock=null):console.log("Screen Wake Lock API not supported")},prevent:function(){var e=this;if("wakeLock"in navigator){var t=function(){try{e._wakeLock=navigator.wakeLock.request(),e._wakeLock.addEventListener("release",(function(){console.log("Screen Wake Lock released:",e._wakeLock.released)})),console.log("Screen Wake Lock released:",e._wakeLock.released)}catch(t){console.error("".concat(t.name,", ").concat(t.message))}};t()}else console.log("Screen Wake Lock API not supported")},_wakeLock:null}),a={components:{Loader:s["a"]},data:function(){return{currentItem:0,currentLevel:{},currentGoal:{},isUserReady:!1,noWorkoutFound:!1,timer:{totalTime:0,timerId:{},start:{},remaining:null,paused:!0},workout:{},user:{level:2,goal:2},timeline:[],publicPath:"/workout-app/"}},mounted:function(){var e=this.$storage.get("data"),t=parseInt(this.$route.params.workout_id,10);null!==e&&void 0!==e&&e.workouts&&t?(this.workoutLevels=e["workout-levels"],this.workoutGoals=e["workout-goals"],this.exercises=e.exercises,t&&(this.workout=e.workouts.find((function(e){return e.id===t})),this.workout||(this.noWorkoutFound=!0))):this.noWorkoutFound=!0},computed:{progress:function(){var e=0;if(this.currentItem===this.timeline.length)return 100;for(var t=0;t<this.currentItem;t++)this.timeline[t].id?e+=this.currentLevel.activeTime:e+=this.currentLevel.restTime;return Math.floor(100*e/+this.timer.totalTime)},progressAnimation:function(){return this.currentItem!==this.timeline.length}},methods:{goalName:function(e){if(this.workoutGoals){var t=this.workoutGoals.find((function(t){return t.id===parseInt(e,10)}));if(t)return t.name}return""},levelName:function(e){if(this.workoutLevels){var t=this.workoutLevels.find((function(t){return t.id===parseInt(e,10)}));if(t)return t.name}return""},pauseAndClear:function(){this.timer.paused=!0,window.clearTimeout(this.timer.timerId),this.timer.remaining=null},next:function(){this.pauseAndClear(),this.currentItem+1<this.timeline.length&&this.currentItem++,this.resume()},previous:function(){this.pauseAndClear(),this.currentItem--,this.resume()},start:function(){var e=this;o.prevent(),1===this.workout.type&&(this.currentLevel=this.workoutLevels.find((function(t){return t.id===e.user.level})));for(var t=0,r=this.workout.rounds.length;t<r;t++)for(var i=1,n=this.workout.rounds[t].repeats;i<=n;i++)this.workout.rounds[t].exercises.forEach((function(t){e.timeline.push(e.exercises.find((function(e){return e.id===t}))),e.timer.totalTime+=e.currentLevel.activeTime,1===e.workout.type&&(e.timeline.push(e.currentLevel.restTime),e.timer.totalTime+=e.currentLevel.restTime)}));this.timeline.pop(),this.timer.totalTime-=this.currentLevel.restTime,this.isUserReady=!0,this.resume()},resume:function(){var e=this;this.timer.paused=!1,null!==this.timer.remaining&&0!==this.timer.remaining||(this.timeline[this.currentItem].id?this.timer.remaining=this.currentLevel.activeTime:this.timer.remaining=this.timeline[this.currentItem]),this.timer.timerId=window.setTimeout((function(){e.timer.remaining>0?(e.resume(),e.timer.remaining-=1e3):(e.currentItem++,e.currentItem<e.timeline.length?e.resume():e.pauseAndClear())}),1e3)},pause:function(){o.allow(),this.timer.paused=!0,window.clearTimeout(this.timer.timerId)},stop:function(){this.$router.go(this.$router.currentRoute)},printTimeLeft:function(){return this.timer.remaining>=0?"".concat(this.timer.remaining/1e3,'"'):""}}},c=a,u=(r("739a"),r("2877")),l=Object(u["a"])(c,i,n,!1,null,"5a2c760b",null);t["default"]=l.exports},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);