(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25fc61c1"],{"1a01":function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-page-title"},[s("div",{staticClass:"page-title-wrapper"},[s("div",{staticClass:"page-title-heading"},[s("div",{staticClass:"page-title-icon"},[s("i",{staticClass:"icon-gradient bg-happy-itmeo",class:t.icon})]),s("div",[t._v(" "+t._s(t.heading)+" "),s("div",{staticClass:"page-title-subheading"},[t._v(" "+t._s(t.subheading)+" ")])])])])])},a=[],r=s("ecee"),i=s("c074");r["c"].add(i["o"],i["m"]);var n={props:{icon:String,heading:String,subheading:String}},l=n,c=s("2877"),m=Object(c["a"])(l,o,a,!1,null,null,null);e["a"]=m.exports},"1bfa":function(t,e,s){},8728:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),s("div",{staticClass:"content"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"main-card mb-3 card"},[s("div",{staticClass:"card-body"},[s("div",{},[s("div",{attrs:{id:"contact-form"}},[s("div",{staticClass:"mb-2 ml-sm-2 mb-sm-0 position-relative form-group"},[s("label",{staticClass:"ml-sm-2",attrs:{for:"storeEmail"}},[t._v("כתובת מייל")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.storeEmail,expression:"storeEmail"}],staticClass:"form-control",attrs:{name:"email",id:"storeEmail",type:"email"},domProps:{value:t.storeEmail},on:{input:function(e){e.target.composing||(t.storeEmail=e.target.value)}}})]),s("div",{staticClass:"mb-2 ml-sm-2 mb-sm-0 position-relative form-group"},[s("label",{staticClass:"ml-sm-2",attrs:{for:"storePhone"}},[t._v("טלפון")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.storePhone,expression:"storePhone"}],staticClass:"form-control",attrs:{name:"storePhone",id:"storePhone",type:"tel"},domProps:{value:t.storePhone},on:{input:function(e){e.target.composing||(t.storePhone=e.target.value)}}})]),s("div",{staticClass:"mb-2 ml-sm-2 mb-sm-0 position-relative form-group"},[s("label",{staticClass:"ml-sm-2",attrs:{for:"storePhone2"}},[t._v("טלפון נוסף")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.storePhone2,expression:"storePhone2"}],staticClass:"form-control",attrs:{name:"storePhone2",id:"storePhone2",type:"tel"},domProps:{value:t.storePhone2},on:{input:function(e){e.target.composing||(t.storePhone2=e.target.value)}}})]),s("div",{staticClass:"mb-2 ml-sm-2 mb-sm-0 position-relative form-group"},[s("label",{staticClass:"ml-sm-2",attrs:{for:"sotreWhatsApp"}},[t._v("וואטסאפ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.storeWhatsApp,expression:"storeWhatsApp"}],staticClass:"form-control",attrs:{name:"sotreWhatsApp",id:"sotreWhatsApp",type:"tel"},domProps:{value:t.storeWhatsApp},on:{input:function(e){e.target.composing||(t.storeWhatsApp=e.target.value)}}})]),s("div",{staticClass:"mb-2 ml-sm-2 mb-sm-0 position-relative form-group"},[s("label",{staticClass:"ml-sm-2",attrs:{for:"storeSite"}},[t._v("אתר")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.storeSite,expression:"storeSite"}],staticClass:"form-control",staticStyle:{"min-width":"270px"},attrs:{name:"storeSite",id:"storeSite",type:"url"},domProps:{value:t.storeSite},on:{input:function(e){e.target.composing||(t.storeSite=e.target.value)}}})]),s("div",{staticClass:"mb-2 ml-sm-2 mb-sm-0 position-relative form-group"},[s("label",{staticClass:"ml-sm-2",attrs:{for:"storeStreet"}},[t._v("רחוב")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.storeStreet,expression:"storeStreet"}],staticClass:"form-control",attrs:{name:"storeStreet",id:"storeStreet",placeholder:"",type:"text"},domProps:{value:t.storeStreet},on:{input:function(e){e.target.composing||(t.storeStreet=e.target.value)}}})]),s("div",{staticClass:"mb-2 ml-sm-2 mb-sm-0 position-relative form-group"},[s("label",{staticClass:"ml-sm-2",attrs:{for:"storeCity"}},[t._v("עיר")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.storeCity,expression:"storeCity"}],staticClass:"form-control",attrs:{name:"storeCity",id:"storeCity",placeholder:"",type:"text"},domProps:{value:t.storeCity},on:{input:function(e){e.target.composing||(t.storeCity=e.target.value)}}})]),s("action-button",{attrs:{title:"שמירה"},on:{execute:t.saveContactDetails}})],1)])])])])])],1)},a=[],r=(s("8e6e"),s("ac6a"),s("456d"),s("96cf"),s("1da1")),i=s("ade3"),n=s("1a01"),l=s("2f62"),c=s("c690");function m(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?m(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={components:{PageTitle:n["a"],ActionButton:c["a"]},data:function(){return{heading:"פרטי קשר",subheading:"זה המקום להגדיר את פרטי הקשר שלכם.",icon:"icon-user",storeEmail:"",storePhone:"",storePhone2:"",storeWhatsApp:"",storeStreet:"",storeCity:"",storeSite:""}},computed:p({},Object(l["c"])("settings",["contactDetails"])),mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getContactDetails();case 2:this.storeEmail=this.contactDetails.email,this.storePhone=this.contactDetails.phone,this.storePhone2=this.contactDetails.phone2,this.storeWhatsApp=this.contactDetails.whatsApp,this.storeStreet=this.contactDetails.address,this.storeCity=this.contactDetails.town,this.storeSite=this.contactDetails.website;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:p(p({},Object(l["b"])("settings",["getContactDetails","updateContactDetails"])),{},{saveContactDetails:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.onExecuted,t.next=3,this.updateContactDetails({storeEmail:this.storeEmail,storePhone:this.storePhone,storePhone2:this.storePhone2,storeWhatsApp:this.storeWhatsApp,storeStreet:this.storeStreet,storeCity:this.storeCity,storeSite:this.storeSite});case 3:s();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()})},d=u,h=(s("93e8"),s("2877")),v=Object(h["a"])(d,o,a,!1,null,null,null);e["default"]=v.exports},"93e8":function(t,e,s){"use strict";s("1bfa")}}]);