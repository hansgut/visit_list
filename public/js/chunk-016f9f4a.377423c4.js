(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-016f9f4a"],{"313b":function(e,t,a){"use strict";var s=a("6b92"),r=a.n(s);r.a},"6b92":function(e,t,a){},"73cf":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),e.registerUser(t)}}},[a("h2",{staticClass:"form-signin-heading"},[e._v("Register")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Name",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],staticClass:"form-control",attrs:{id:"surname",type:"text",name:"surname",placeholder:"Surname",required:"",autofocus:""},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",type:"text",name:"email",placeholder:"Email Address",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],staticClass:"form-control",attrs:{id:"confirm_password",type:"password",name:"confirm_password",placeholder:"Confirm password",required:""},domProps:{value:e.confirm_password},on:{input:function(t){t.target.composing||(e.confirm_password=t.target.value)}}}),a("input",{staticClass:"btn btn-lg btn-primary btn-block btn-success",attrs:{type:"submit",value:"Register"}}),a("router-link",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{to:"/login"}},[e._v("Login")])],1)},r=[],n=(a("b0c0"),a("5530")),o=a("2f62"),i={data:function(){return{name:"",surname:"",email:"",password:"",confirm_password:""}},methods:Object(n["a"])({},Object(o["b"])(["register"]),{registerUser:function(){var e=this,t={name:this.name,surname:this.surname,email:this.email,password:this.password,confirm_password:this.confirm_password};this.register(t).then((function(t){t.data.success&&e.$router.push("/login")}))}})},m=i,u=(a("313b"),a("2877")),c=Object(u["a"])(m,s,r,!1,null,"abd327f4",null);t["default"]=c.exports},b0c0:function(e,t,a){var s=a("83ab"),r=a("9bf2").f,n=Function.prototype,o=n.toString,i=/^\s*function ([^ (]*)/,m="name";s&&!(m in n)&&r(n,m,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-016f9f4a.377423c4.js.map