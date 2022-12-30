(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{3530:function(e,t,s){"use strict";s.r(t);s("e9c4");var i=function(){var e=this,t=e._self._c;return t("div",[t("b-container",[t("b-row",[t("b-col",[t("h2",{staticClass:"view-header"},[e._v("Admin")]),t("b-tabs",{attrs:{"content-class":"mt-3"}},[t("b-tab",{attrs:{title:"Exercises",active:""}},[t("Exercises",{on:{"update-output":e.updateOutput}})],1),t("b-tab",{attrs:{title:"Workouts"}},[t("Workouts",{on:{"update-output":e.updateOutput}})],1),t("b-tab",{attrs:{title:"Levels"}},[t("WorkoutLevels",{on:{"update-output":e.updateOutput}})],1),t("b-tab",{attrs:{title:"Goals"}},[t("WorkoutGoals",{on:{"update-output":e.updateOutput}})],1),t("b-tab",{attrs:{title:"Output"}},[t("h3",[e._v("Output")]),t("b-form-textarea",{attrs:{id:"output",name:"output",value:JSON.stringify(e.data),rows:"3","max-rows":"6"}})],1)],1)],1)],1)],1)],1)},n=[],r=(s("b0c0"),s("a4d3"),s("e01a"),s("99af"),function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-capitalize"},[e._v(e._s(e.action))]),t("b-form",{ref:"form",on:{submit:e.onSubmit}},[t("b-row",[t("b-col",[t("b-form-group",{attrs:{id:"input-group-1","label-for":"name"}},[t("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{id:"input-group-3","label-for":"video"}},[t("b-form-input",{attrs:{id:"video",type:"text",placeholder:"Video"},model:{value:e.form.video,callback:function(t){e.$set(e.form,"video",t)},expression:"form.video"}})],1)],1),t("b-col",[t("b-form-group",{staticClass:"mt-2",attrs:{id:"input-group-4","label-for":"image"}},[t("b-form-checkbox",{attrs:{id:"image",name:"image",switch:""},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}},[t("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"File must be committed to public/img/exercises as\n              a JPG with the exercise ID as filename."}},[e._v(" Image ")])])],1)],1)],1),t("b-row",[t("b-col",[t("b-form-group",{attrs:{id:"input-group-2","label-for":"description"}},[t("b-form-textarea",{attrs:{id:"description",name:"description",placeholder:"Description",rows:"3","max-rows":"6"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)],1),t("b-button",{attrs:{type:"submit",variant:"create"!==e.action&&e.form.id?"warning":"primary",disabled:!e.form.name}},[t("span",{directives:[{name:"show",rawName:"v-show",value:"create"===e.action,expression:"action === 'create'"}]},[e._v("Create Exercise")]),"create"!==e.action&&e.form.id?t("span",[e._v("Update Exercise")]):e._e()]),"create"!==e.action&&e.form.id?t("b-button",{staticClass:"ml-2",attrs:{type:"reset",variant:"secondary"},on:{click:function(t){return e.resetForm()}}},[e._v(" Cancel ")]):e._e()],1),t("h3",{staticClass:"mt-4"},[e._v("List")]),t("b-row",[t("b-col",[t("Loader",{directives:[{name:"show",rawName:"v-show",value:0===e.exercises.length,expression:"exercises.length === 0"}]}),e.exercises.length>0?t("b-table",{attrs:{striped:"",hover:"",items:e.exercises,fields:e.fields},scopedSlots:e._u([{key:"cell(description)",fn:function(s){return[t("span",{domProps:{innerHTML:e._s(e.exerciseDescription(s.item.description))}})]}},{key:"cell(video)",fn:function(s){return[s.item.video?t("a",{attrs:{href:s.item.video,target:"_blank",title:"View video"}},[t("font-awesome-icon",{attrs:{size:"lg",icon:["fas","video"]}})],1):e._e()]}},{key:"cell(image)",fn:function(s){return[s.item.image?t("a",{attrs:{href:"".concat(e.publicPath,"img/exercises/").concat(s.item.id,".jpg"),target:"_blank",title:"View image"}},[t("font-awesome-icon",{attrs:{size:"lg",icon:["far","image"]}})],1):e._e()]}},{key:"cell(edit)",fn:function(s){return[t("font-awesome-icon",{staticClass:"cursor--pointer",attrs:{size:"lg",icon:["far","edit"],title:"Edit"},on:{click:function(t){e.action="edit",e.form=s.item}}})]}},{key:"cell(delete)",fn:function(s){return[t("ConfirmDelete",{attrs:{item:s.item},on:{"confirm-delete":e.onConfirmDelete}})]}}],null,!1,151852298)}):e._e()],1)],1)],1)}),a=[],o=(s("4e82"),s("ac1f"),s("5319"),s("14d9"),s("2b0e")),l=s("555f"),c=function(){var e=this,t=e._self._c;return t("div",[t("b-button",{directives:[{name:"show",rawName:"v-show",value:e.showConfirmation,expression:"showConfirmation"}],staticClass:"mr-1",attrs:{variant:"danger",size:"sm"},on:{click:e.emitMessage}},[e._v(" Yes ")]),t("b-button",{directives:[{name:"show",rawName:"v-show",value:e.showConfirmation,expression:"showConfirmation"}],attrs:{variant:"success",size:"sm"},on:{click:function(t){e.showConfirmation=!1}}},[e._v(" No ")]),t("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:!e.showConfirmation,expression:"!showConfirmation"}],staticClass:"cursor--pointer",attrs:{size:"lg",icon:["far","trash-alt"],title:"Delete?"},on:{click:function(t){e.showConfirmation=!e.showConfirmation}}})],1)},u=[],d={name:"ConfirmDelete",props:{item:Object},data:function(){return{showConfirmation:!1}},methods:{emitMessage:function(){this.showConfirmation=!1,this.$emit("confirm-delete",this.item.id)}}},m=d,f=s("2877"),p=Object(f["a"])(m,c,u,!1,null,null,null),b=p.exports,h={name:"Exercises",components:{Loader:l["a"],ConfirmDelete:b},data:function(){return{action:"create",exercises:[],fields:[{key:"id",label:"Id"},{key:"name",label:"Name"},{key:"description",label:"Description",thClass:"description"},{key:"video",label:"Video",tdClass:"text-center"},{key:"image",label:"Image",tdClass:"text-center"},{key:"edit",label:"Edit",tdClass:"text-center"},{key:"delete",label:"Delete",tdClass:"text-center",thClass:"delete text-center"}],form:{image:!1},publicPath:"/workout-app/",data:this.$storage.get("data")}},mounted:function(){var e;null!==(e=this.data)&&void 0!==e&&e.exercises&&(this.exercises=this.data.exercises)},methods:{getNewId:function(){var e=o["default"].util.extend([],this.exercises);return e.sort((function(e,t){return+e.id-+t.id})),e[e.length-1].id+1},exerciseDescription:function(e){return e.replace(/\n/g,"<br />")},resetForm:function(){this.action="create",this.form={},o["default"].set(this.form,"image",!1),this.$refs.form.reset()},onSubmit:function(e){e.preventDefault(),"create"!==this.action||this.form.id||(this.form.id=this.getNewId(),this.exercises.push(this.form)),this.$storage.set("data",this.data),this.$emit("update-output",!0),this.resetForm()},onConfirmDelete:function(){this.$storage.set("data",this.data),this.$emit("update-output",!0),this.resetForm()}}},v=h,x=(s("6bc3"),Object(f["a"])(v,r,a,!1,null,null,null)),w=x.exports,g=function(){var e=this,t=e._self._c;return t("div",[t("Loader",{directives:[{name:"show",rawName:"v-show",value:0===e.levels.length,expression:"levels.length === 0"}]}),e.levels.length>0?t("div",[t("b-row",{staticClass:"mt-3 mb-3",attrs:{"align-v":"center"}},[t("b-col",{attrs:{"align-self":"center"}},[t("h3",[e._v("Levels List")])]),t("b-col",{staticClass:"text-right"},[t("b-button",{attrs:{type:"button",variant:e.canEdit?"warning":"primary"},on:{click:function(t){return e.onUpdateEditClick()}}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.canEdit,expression:"canEdit"}]},[e._v("Update")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.canEdit,expression:"!canEdit"}]},[e._v("Edit")])]),t("b-button",{directives:[{name:"show",rawName:"v-show",value:e.canEdit,expression:"canEdit"}],staticClass:"ml-2",attrs:{type:"button",variant:"danger"},on:{click:function(t){e.canEdit=!1}}},[e._v(" Cancel ")])],1)],1),e.levels.length>0?t("b-table",{attrs:{striped:"",hover:"",items:e.levels,fields:e.fields},scopedSlots:e._u([{key:"cell(name)",fn:function(s){return[t("b-form-input",{attrs:{disabled:!e.canEdit},model:{value:s.item.name,callback:function(t){e.$set(s.item,"name",t)},expression:"data.item.name"}})]}},{key:"cell(activeTime)",fn:function(s){return[t("b-form-input",{attrs:{number:"",disabled:!e.canEdit},model:{value:s.item.activeTime,callback:function(t){e.$set(s.item,"activeTime",t)},expression:"data.item.activeTime"}})]}},{key:"cell(restTime)",fn:function(s){return[t("b-form-input",{attrs:{number:"",disabled:!e.canEdit},model:{value:s.item.restTime,callback:function(t){e.$set(s.item,"restTime",t)},expression:"data.item.restTime"}})]}}],null,!1,900428833)}):e._e()],1):e._e()],1)},k=[],y={name:"WorkoutLevels",components:{Loader:l["a"]},data:function(){return{canEdit:!1,fields:[{key:"name",label:"Name"},{key:"activeTime",label:"Active Time"},{key:"restTime",label:"Rest Time"}],levels:[]}},mounted:function(){var e=this.$storage.get("data");null!==e&&void 0!==e&&e["workout-levels"]&&(this.levels=e["workout-levels"])},methods:{onUpdateEditClick:function(){this.canEdit?(this.$emit("update-output",!0),this.canEdit=!1):this.canEdit=!0}}},C=y,_=Object(f["a"])(C,g,k,!1,null,null,null),E=_.exports,$=(s("b64b"),function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-capitalize"},[e._v(e._s(e.action))]),t("b-form",{ref:"form",on:{submit:e.onSubmit}},[t("b-row",[t("b-col",[t("b-form-group",{attrs:{id:"input-group-1","label-for":"name"}},[t("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("b-col",[t("b-form-group",{attrs:{id:"input-group-1","label-for":"createdBy"}},[t("b-form-input",{attrs:{id:"createdBy",type:"text",required:"",placeholder:"Created by"},model:{value:e.form.createdBy,callback:function(t){e.$set(e.form,"createdBy",t)},expression:"form.createdBy"}})],1)],1)],1),t("b-row",[t("b-col",{attrs:{sm:"6"}},[t("h4",[e._v("Exercises")]),t("ul",{staticClass:"list-unstyled mt-3 ml-4"},e._l(e.form.rounds,(function(s,i){return t("li",{staticClass:"mb-4"},[t("div",{staticClass:"d-flex mb-3"},[t("h5",{staticClass:"mr-4"},[e._v("Round "+e._s(+i+1))]),t("div",{staticClass:"d-flex"},[t("b-form-input",{staticStyle:{"max-width":"50px"},attrs:{prepend:"Reps:",number:"",type:"number",size:"sm",placeholder:"Repeats"},model:{value:e.form.rounds[i].repeats,callback:function(t){e.$set(e.form.rounds[i],"repeats",t)},expression:"form.rounds[roundIndex].repeats"}}),t("span",{staticClass:"mr-2"},[t("b-button",{staticClass:"ml-2",attrs:{title:"Remove Round",size:"sm",type:"button",variant:"danger"},on:{click:function(t){return e.removeRound(i)}}},[t("font-awesome-icon",{attrs:{icon:["fas","minus"]}})],1)],1)],1)]),e.form.rounds[i].exercises.length>0?t("ul",{staticClass:"list-unstyled ml-4"},e._l(e.form.rounds[i].exercises,(function(s,n){return t("li",{staticClass:"mb-3"},[t("b-form",{attrs:{inline:""}},[e.exercises.length>0?t("b-form-select",{attrs:{name:"exerciseList","value-field":"id","text-field":"name",options:e.exercises},model:{value:e.form.rounds[i].exercises[n],callback:function(t){e.$set(e.form.rounds[i].exercises,n,t)},expression:"form.rounds[roundIndex].exercises[exerciseIndex]"}}):e._e(),t("b-button",{staticClass:"ml-2",attrs:{title:"Remove Exercise",size:"sm",type:"button",variant:"danger"},on:{click:function(t){return e.removeExercise(i,n)}}},[t("font-awesome-icon",{attrs:{icon:["fas","minus"]}})],1)],1)],1)})),0):e._e(),t("ul",{staticClass:"list-unstyled ml-4"},[t("li",[t("b-button",{attrs:{title:"Add Exercise",size:"sm",type:"button",variant:"success",disabled:0===Object.keys(e.form.rounds).length},on:{click:function(t){return e.addExercise(i)}}},[t("font-awesome-icon",{attrs:{title:"Add",icon:["fas","plus"]}}),e._v(" Exercise ")],1)],1)])])})),0)])],1),e.exercises.length>0?t("b-row",[t("b-col",[t("b-button",{attrs:{name:"addRound",title:"Add Round",type:"button",variant:"success"},on:{click:function(t){return e.addRound()}}},[t("font-awesome-icon",{attrs:{title:"Add",icon:["fas","plus"]}}),e._v(" Round ")],1)],1)],1):e._e(),t("b-row",{staticClass:"mt-3"},[t("b-col",[t("b-button",{attrs:{type:"submit",variant:"create"!==e.action&&e.form.id?"warning":"primary",disabled:!e.form.name||!e.form.createdBy}},[t("span",{directives:[{name:"show",rawName:"v-show",value:"create"===e.action,expression:"action === 'create'"}]},[e._v("Create Workout")]),"create"!==e.action&&e.form.id?t("span",[e._v("Update Workout")]):e._e()]),"create"!==e.action&&e.form.id?t("b-button",{staticClass:"ml-2",attrs:{type:"reset",variant:"secondary"},on:{click:function(t){return e.resetForm()}}},[e._v(" Cancel ")]):e._e()],1)],1)],1),t("h3",{staticClass:"mt-4"},[e._v("List")]),t("b-row",[t("b-col",[t("Loader",{directives:[{name:"show",rawName:"v-show",value:0===e.workouts.length,expression:"workouts.length === 0"}]}),e.workouts.length>0?t("b-table",{attrs:{striped:"",hover:"",items:e.workouts,fields:e.fields},scopedSlots:e._u([{key:"cell(rounds)",fn:function(t){return[e._v(" "+e._s(t.item.rounds.length)+" ")]}},{key:"cell(exercises)",fn:function(t){return[e._v(" "+e._s(e.numberOfExercises(t.item))+" ")]}},{key:"cell(edit)",fn:function(s){return[t("font-awesome-icon",{staticClass:"cursor--pointer",attrs:{size:"lg",icon:["far","edit"],title:"Edit"},on:{click:function(t){e.action="edit",e.form=s.item}}})]}},{key:"cell(delete)",fn:function(s){return[t("ConfirmDelete",{attrs:{item:s.item},on:{"confirm-delete":e.onConfirmDelete}})]}}],null,!1,4069618225)}):e._e()],1)],1)],1)}),N=[],O=(s("c740"),s("a434"),{name:"Workouts",components:{Loader:l["a"],ConfirmDelete:b},data:function(){return{exercises:[],exercisesDropdown:[],action:"create",workouts:[],fields:[{key:"id",label:"Id"},{key:"name",label:"Name"},{key:"rounds",label:"Rounds",tdClass:"text-center",thClass:"text-center"},{key:"exercises",label:"Exercises",tdClass:"text-center",thClass:"text-center"},{key:"edit",label:"Edit",tdClass:"text-center",thClass:"text-center"},{key:"delete",label:"Delete",tdClass:"text-center",thClass:"delete text-center"}],form:{rounds:[]},selectedExercise:null,data:this.$storage.get("data")}},mounted:function(){var e;null!==(e=this.data)&&void 0!==e&&e.workouts&&(this.workouts=this.data.workouts,this.exercises=this.data.exercises.sort((function(e,t){return e.name>t.name?1:-1})))},methods:{getNewId:function(){var e=o["default"].util.extend([],this.workouts);return e.sort((function(e,t){return+e.id-+t.id})),e[e.length-1].id+1},numberOfExercises:function(e){for(var t=0,s=0,i=Object.keys(e.rounds).length;s<i;s++)t+=e.rounds[s].exercises.length;return t},exerciseName:function(e){var t=this.exercises.findIndex((function(t){return t.id===e}));return this.exercises[t].name},removeExercise:function(e,t){o["default"].delete(this.form.rounds[e].exercises,t)},removeRound:function(e){o["default"].delete(this.form.rounds,e)},addRound:function(){this.form.rounds.push({repeats:1,exercises:[null]})},addExercise:function(e){this.form.rounds[e].exercises.push(this.selectedExercise),this.selectedExercise=null},resetForm:function(){this.action="create",this.form={},o["default"].set(this.form,"rounds",{}),this.$refs.form.reset()},onSubmit:function(e){e.preventDefault(),console.log(this.form),Array.isArray(this.form.rounds)||(this.form.rounds=[this.form.rounds[0]]),"create"!==this.action||this.form.id||(this.form.id=this.getNewId(),this.workouts.push(this.form)),this.$storage.set("data",this.data),this.$emit("update-output",!0),this.resetForm()},onConfirmDelete:function(e){var t=o["default"].util.extend([],this.workouts);t.splice(t.findIndex((function(t){return t.id===e})),1),this.resetForm()}}}),D=O,L=(s("8d24"),Object(f["a"])(D,$,N,!1,null,null,null)),R=L.exports,I=function(){var e=this,t=e._self._c;return t("div",[t("Loader",{directives:[{name:"show",rawName:"v-show",value:0===e.goals.length,expression:"goals.length === 0"}]}),e.goals.length>0?t("div",[t("b-row",{staticClass:"mt-4 mb-3",attrs:{"align-v":"center"}},[t("b-col",{attrs:{"align-self":"center"}},[t("h3",[e._v("Goals List")])]),t("b-col",{staticClass:"text-right"},[t("b-button",{attrs:{type:"button",variant:e.canEdit?"warning":"primary"},on:{click:function(t){return e.onUpdateEditClick()}}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.canEdit,expression:"canEdit"}]},[e._v("Update")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.canEdit,expression:"!canEdit"}]},[e._v("Edit")])]),t("b-button",{directives:[{name:"show",rawName:"v-show",value:e.canEdit,expression:"canEdit"}],staticClass:"ml-2",attrs:{type:"button",variant:"danger"},on:{click:function(t){e.canEdit=!1}}},[e._v(" Cancel ")])],1)],1),e.goals.length>0?t("b-table",{attrs:{striped:"",hover:"",items:e.goals,fields:e.fields},scopedSlots:e._u([{key:"cell(name)",fn:function(s){return[t("b-form-input",{attrs:{disabled:!e.canEdit},model:{value:s.item.name,callback:function(t){e.$set(s.item,"name",t)},expression:"data.item.name"}})]}},{key:"cell(reps)",fn:function(s){return[t("b-form-input",{attrs:{disabled:!e.canEdit},model:{value:s.item.reps,callback:function(t){e.$set(s.item,"reps",t)},expression:"data.item.reps"}})]}},{key:"cell(restBetweenGroups)",fn:function(s){return[t("b-form-input",{attrs:{disabled:!e.canEdit},model:{value:s.item.restBetweenGroups,callback:function(t){e.$set(s.item,"restBetweenGroups",t)},expression:"data.item.restBetweenGroups"}})]}}],null,!1,3472472385)}):e._e()],1):e._e()],1)},z=[],T={name:"WorkoutGoals",components:{Loader:l["a"]},data:function(){return{canEdit:!1,fields:[{key:"name",label:"Name"},{key:"reps",label:"Repetitions"},{key:"restBetweenGroups",label:"Rest Between Groups"}],goals:[]}},mounted:function(){var e=this.$storage.get("data");null!==e&&void 0!==e&&e["workout-goals"]&&(this.goals=e["workout-goals"])},methods:{onUpdateEditClick:function(){this.canEdit?(this.$emit("update-output",!0),this.canEdit=!1):this.canEdit=!0}}},B=T,G=Object(f["a"])(B,I,z,!1,null,null,null),W=G.exports,j={components:{Exercises:w,WorkoutLevels:E,Workouts:R,WorkoutGoals:W},data:function(){return{data:{}}},mounted:function(){this.updateOutput()},methods:{updateOutput:function(){this.data=this.$storage.get("data")}}},S=j,A=Object(f["a"])(S,i,n,!1,null,null,null);t["default"]=A.exports},"508d":function(e,t,s){},"6bc3":function(e,t,s){"use strict";s("508d")},"8d24":function(e,t,s){"use strict";s("c2ed")},a434:function(e,t,s){"use strict";var i=s("23e7"),n=s("7b0b"),r=s("23cb"),a=s("5926"),o=s("07fa"),l=s("3a34"),c=s("3511"),u=s("65f0"),d=s("8418"),m=s("083a"),f=s("1dde"),p=f("splice"),b=Math.max,h=Math.min;i({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var s,i,f,p,v,x,w=n(this),g=o(w),k=r(e,g),y=arguments.length;for(0===y?s=i=0:1===y?(s=0,i=g-k):(s=y-2,i=h(b(a(t),0),g-k)),c(g+s-i),f=u(w,i),p=0;p<i;p++)v=k+p,v in w&&d(f,p,w[v]);if(f.length=i,s<i){for(p=k;p<g-i;p++)v=p+i,x=p+s,v in w?w[x]=w[v]:m(w,x);for(p=g;p>g-i+s;p--)m(w,p-1)}else if(s>i)for(p=g-i;p>k;p--)v=p+i-1,x=p+s-1,v in w?w[x]=w[v]:m(w,x);for(p=0;p<s;p++)w[p+k]=arguments[p+2];return l(w,g-i+s),f}})},b64b:function(e,t,s){var i=s("23e7"),n=s("7b0b"),r=s("df75"),a=s("d039"),o=a((function(){r(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(e){return r(n(e))}})},c2ed:function(e,t,s){}}]);