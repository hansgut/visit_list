(function(e){function t(t){for(var r,a,u=t[0],i=t[1],c=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d217357":"480eed68","chunk-2d2308ce":"3358a6b9","chunk-421a1dd2":"46bd5f70","chunk-4329d31a":"d2ee75a2","chunk-62be648e":"1139d00f","chunk-62fb0182":"25e8371f","chunk-73cb7c57":"56489fe3","chunk-99fa19f8":"3e0c8758"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-421a1dd2":1,"chunk-4329d31a":1,"chunk-62be648e":1,"chunk-62fb0182":1,"chunk-73cb7c57":1,"chunk-99fa19f8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d217357":"31d6cfe0","chunk-2d2308ce":"31d6cfe0","chunk-421a1dd2":"1753d1af","chunk-4329d31a":"20533c75","chunk-62be648e":"72096db7","chunk-62fb0182":"d8139783","chunk-73cb7c57":"b36d8e20","chunk-99fa19f8":"5474efb4"}[e]+".css",s=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("div",{staticClass:"container"},[e.error?n("Errors",{attrs:{msg:e.error}}):e._e(),n("router-view")],1)],1)},s=[],o=n("5530"),u=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Visits")]),e._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v(" Home "),n("span",{staticClass:"sr-only"},[e._v("(current)")])])],1),n("li",{staticClass:"nav-item"},[e.isAdmin?n("router-link",{staticClass:"nav-link",attrs:{to:"/users"}},[e._v(" Users ")]):e._e()],1),n("li",{staticClass:"nav-item"},[e.isAdmin?n("router-link",{staticClass:"nav-link",attrs:{to:"/subjects"}},[e._v(" Subjects ")]):e._e()],1),n("li",{staticClass:"nav-item"},[e.isAdmin?n("router-link",{staticClass:"nav-link",attrs:{to:"/positions"}},[e._v(" Positions ")]):e._e()],1),e.isLoggedIn?e._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v(" Login ")])],1),e.isLoggedIn?e._e():n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[e._v(" Register ")])],1),e.isLoggedIn?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[e._v(" Profile ")])],1):e._e(),e.isLoggedIn?n("li",{staticClass:"nav-item",on:{click:function(t){return t.preventDefault(),e.logoutUser(t)}}},[n("a",{staticClass:"nav-link",attrs:{to:"/logout"}},[e._v(" Logout ")])]):e._e()])])],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],l={computed:Object(o["a"])({},Object(u["c"])(["isLoggedIn","isAdmin"])),methods:Object(o["a"])({},Object(u["b"])(["logout"]),{logoutUser:function(){this.logout()}})},d=l,f=n("2877"),p=Object(f["a"])(d,i,c,!1,null,"2da0e025",null),m=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.msg))])},g=[],v={props:["msg"]},b=v,k=Object(f["a"])(b,h,g,!1,null,"da7e1fc2",null),_=k.exports,C={components:{Navbar:m,Errors:_},computed:Object(o["a"])({},Object(u["c"])(["error"]))},w=C,y=(n("034f"),Object(f["a"])(w,a,s,!1,null,null,null)),j=y.exports,O=(n("45fc"),n("d3b7"),n("8c4f")),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},x=[],S={name:"Home",components:{}},q=S,E=Object(f["a"])(q,A,x,!1,null,null,null),L=E.exports,P=n("0e44"),I=(n("96cf"),n("1da1")),R=n("bc3a"),N=n.n(R),T=function(){var e="";return e},$={token:localStorage.getItem("token")||"",user:{},admin:!1,status:"",error:null},U={isLoggedIn:function(e){return!!e.token},authState:function(e){return e.status},isAdmin:function(e){return void 0!==e.user&&e.user.admin},user:function(e){return e.user},error:function(e){return e.error}},H={login:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,a,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("auth_request"),n.prev=2,n.next=5,N.a.post(T()+"/api/users/login",t);case 5:return a=n.sent,a.data.success&&(s=a.data.token,o=a.data.user,localStorage.setItem("token",s),N.a.defaults.headers.common["Authorization"]=s,r("auth_success",s,o)),n.abrupt("return",a);case 10:n.prev=10,n.t0=n["catch"](2),r("auth_error",n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()},register:function(e,t){return Object(I["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,r("register_request"),n.prev=2,n.next=5,N.a.post(T()+"/api/users/register",t);case 5:return a=n.sent,void 0!==a.data.success&&r("register_success"),n.abrupt("return",a);case 10:n.prev=10,n.t0=n["catch"](2),r("register_error",n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()},getProfile:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("profile_request"),t.next=4,N.a.get(T()+"/api/users/profile");case 4:return r=t.sent,n("user_profile",r.data.user),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,localStorage.removeItem("token");case 3:return n("logout"),delete N.a.defaults.headers.common["Authorization"],J.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})))()}},M={auth_request:function(e){e.error=null,e.status="loading"},auth_success:function(e,t,n){e.token=t,e.user=n,e.status="success",e.error=null,e.admin=!1},auth_error:function(e,t){e.error=t.response.data.msg},register_request:function(e){e.error=null,e.status="loading"},register_success:function(e){e.status="success",e.error=null},logout:function(e){e.error=null,e.status="",e.token="",e.user="",e.admin=!1},register_error:function(e,t){e.error=t.response.data.msg},profile_request:function(e){e.status="loading"},user_profile:function(e,t){e.user=t}},z={state:$,actions:H,mutations:M,getters:U};r["a"].use(u["a"]);var B=new u["a"].Store({state:{},mutations:{},actions:{},modules:{Auth:z},plugins:[Object(P["a"])()]});r["a"].use(O["a"]);var D=[{path:"/",name:"Home",component:L,meta:{requiresAuth:!0}},{path:"/users",name:"Users",component:function(){return n.e("chunk-2d2308ce").then(n.bind(null,"ed81"))},meta:{requiresAdmin:!0}},{path:"/login",name:"Login",component:function(){return n.e("chunk-4329d31a").then(n.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"Register",component:function(){return n.e("chunk-421a1dd2").then(n.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/subjects",name:"Subjects",component:function(){return n.e("chunk-62be648e").then(n.bind(null,"eead"))},meta:{requiresAdmin:!0}},{path:"/subjects/new",name:"New Subject",component:function(){return n.e("chunk-73cb7c57").then(n.bind(null,"2590"))},meta:{requiresAdmin:!0}},{path:"/positions",name:"Positions",component:function(){return n.e("chunk-99fa19f8").then(n.bind(null,"07e4"))},meta:{requiresAdmin:!0}},{path:"/positions/new",name:"New Position",component:function(){return n.e("chunk-62fb0182").then(n.bind(null,"09d4"))},meta:{requiresAdmin:!0}}],G=new O["a"]({mode:"history",base:"/",routes:D});G.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?B.getters.isLoggedIn?n():n("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))?B.getters.isLoggedIn?n("/profile"):n():e.matched.some((function(e){return e.meta.requiresAdmin}))&&(B.getters.isAdmin?n():n("/"))}));var J=G;r["a"].prototype.$http=N.a;var F=localStorage.getItem("token");F&&(r["a"].prototype.$http.defaults.headers.common["Authorization"]=F),r["a"].config.productionTip=!1,new r["a"]({router:J,store:B,render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.b4200088.js.map