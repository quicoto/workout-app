(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["exercises"],{b280:function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e._self._c;return r("div",[r("Loader",{directives:[{name:"show",rawName:"v-show",value:!e.exercises,expression:"!exercises"}]}),e.exercises?r("b-container",[r("h2",{staticClass:"view-header"},[e._v("Exercises")]),r("b-row",e._l(e.exercises,(function(e){return r("b-col",{key:e.id,attrs:{cols:"12",md:"6"}},[r("ExerciseCard",{attrs:{exercise:e}})],1)})),1)],1):e._e()],1)},i=[],a=(s("4e82"),s("b0c0"),s("555f")),c=(s("99af"),s("a4d3"),s("e01a"),function(){var e=this,r=e._self._c;return e.exercise?r("b-card",{staticClass:"mb-3",attrs:{header:e.exercise.name,"header-tag":"h2","img-src":e.exercise.image?"".concat(e.publicPath,"img/exercises/").concat(e.exercise.id,".jpg"):"","img-alt":e.exercise.name,"img-top":"",tag:"article","bg-variant":"dark"}},[r("b-card-text",[r("span",{domProps:{innerHTML:e._s(e.description)}})]),e.exercise.video?r("b-button",{attrs:{target:"_blank",rel:"noopener",href:e.exercise.video,variant:"primary"}},[e._v(" Watch video ")]):e._e()],1):e._e()}),n=[],o=(s("ac1f"),s("5319"),{name:"ExerciseCard",props:{exercise:Object},computed:{description:function(){return this.exercise.description.replace(/\n/g,"<br />")}},data:function(){return{publicPath:"/workout-app/"}}}),d=o,u=s("2877"),l=Object(u["a"])(d,c,n,!1,null,null,null),x=l.exports,p={components:{Loader:a["a"],ExerciseCard:x},data:function(){return{exercises:[]}},mounted:function(){var e=this.$storage.get("data");null!==e&&void 0!==e&&e.exercises&&(this.exercises=e.exercises.sort((function(e,r){return e.name>r.name?1:-1})))}},b=p,m=Object(u["a"])(b,t,i,!1,null,null,null);r["default"]=m.exports}}]);