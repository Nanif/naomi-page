(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b6262c1"],{"1a01":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-page-title"},[i("div",{staticClass:"page-title-wrapper"},[i("div",{staticClass:"page-title-heading"},[i("div",{staticClass:"page-title-icon"},[i("i",{staticClass:"icon-gradient bg-happy-itmeo",class:t.icon})]),i("div",[t._v(" "+t._s(t.heading)+" "),i("div",{staticClass:"page-title-subheading"},[t._v(" "+t._s(t.subheading)+" ")])])])])])},a=[],s=i("ecee"),c=i("c074");s["c"].add(c["o"],c["m"]);var r={props:{icon:String,heading:String,subheading:String}},o=r,l=i("2877"),u=Object(l["a"])(o,n,a,!1,null,null,null);e["a"]=u.exports},"1f40":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),i("div",{staticClass:"content"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"main-card mb-3 card"},[t._m(0),i("div",{staticClass:"card-body"},[i("div",[i("div",{staticClass:"mb-2 ml-sm-2 mb-sm-0 position-relative form-group"},[i("b-form-radio-group",{attrs:{id:"reduceRadio",buttons:"","button-variant":"outline-primary",size:"lg",options:t.reduceOptions,name:"reduceRadio"},model:{value:t.selectedReduceOption,callback:function(e){t.selectedReduceOption=e},expression:"selectedReduceOption"}}),i("div",{staticClass:"mt-2"},[t._v("מומלץ להפעיל כיווץ תמונות רק אם קובץ הקטלוג שוקל מעל 16MB")])],1),i("action-button",{attrs:{title:"שמירה"},on:{execute:t.saveMinimalPublish}})],1)])])])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-header-tab card-header"},[i("div",{staticClass:"card-header-title font-size-lg text-capitalize font-weight-normal"},[i("i",{staticClass:"header-icon lnr-charts icon-gradient bg-happy-green"}),t._v(" כיווץ תמונות ")])])}],s=(i("8e6e"),i("ac6a"),i("456d"),i("96cf"),i("1da1")),c=i("ade3"),r=i("1a01"),o=i("2f62"),l=i("c690");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){Object(c["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p={components:{ActionButton:l["a"],PageTitle:r["a"]},data:function(){return{heading:"הגדרות כלליות",subheading:"זה המקום להגדיר הגדרות עבור הקטלוג החכם.",icon:"icon-cog",selectedReduceOption:!1,reduceOptions:[{text:"מושבת",value:!1},{text:"מופעל",value:!0}]}},computed:d({},Object(o["c"])("settings",["settings"])),mounted:function(){var t=this;this.getCatalogSettings().then((function(){t.selectedReduceOption=!!t.settings.minimalPublish}))},methods:d(d({},Object(o["b"])("settings",["getCatalogSettings","setMinimalPublish"])),{},{saveMinimalPublish:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.onExecuted,t.next=3,this.setMinimalPublish({minimalPublish:this.selectedReduceOption});case 3:i();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()})},g=p,b=(i("311b"),i("2877")),h=Object(b["a"])(g,n,a,!1,null,null,null);e["default"]=h.exports},"311b":function(t,e,i){"use strict";i("ff82")},ff82:function(t,e,i){}}]);