(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62be648e"],{"672a":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var s={methods:{apiUrl:function(){var t="";return t}}}},a79b:function(t,e,n){"use strict";var s=n("c277"),a=n.n(s);a.a},c277:function(t,e,n){},eead:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("ul",{staticClass:"list-group"},t._l(t.subjects,(function(e){return n("li",{key:e._id,staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._v(" "+t._s(e.name)+" "),n("span",{staticClass:"badge"},[n("div",{staticClass:"dropdown"},[n("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Options ")]),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.deleteSubject(e._id)}}},[t._v("Delete")])])])])])})),0),n("router-link",{staticClass:"add btn btn-success",attrs:{to:"/subjects/new"}},[t._v(" Add ")])],1)},a=[],i=n("bc3a"),u=n.n(i),c=n("672a"),o={mixins:[c["a"]],data:function(){return{subjects:[]}},mounted:function(){this.getSubjects()},methods:{getSubjects:function(){var t=this;u.a.get(this.apiUrl()+"/api/subjects").then((function(e){t.subjects=e.data.subjects}))},deleteSubject:function(t){var e=this;u.a.delete(this.apiUrl()+"/api/subjects/"+t).then((function(t){console.log("Subject was deleted.",t),e.getSubjects()}))}}},r=o,d=(n("a79b"),n("2877")),l=Object(d["a"])(r,s,a,!1,null,"41b79e99",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-62be648e.1139d00f.js.map