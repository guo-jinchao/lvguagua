(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0602a006"],{"1a01":function(e,t,s){"use strict";s("7f8d")},2017:function(e,t,s){"use strict";s("cafe")},"7f8d":function(e,t,s){},"9ed6":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("旅呱呱后台系统")])]),s("el-form-item",[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"用户名",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-form-item",[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e.register?e._e():s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")])],1)],1)},n=[],a=(s("ac1f"),s("5319"),s("61f7"),s("5c96")),i={name:"Login",data:function(){return{loginForm:{username:"",password:""},register:!1,loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){console.log(e),this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},goregister:function(){this.register=!0},handleLogin:function(){var e=this;this.$http({method:"post",url:"/login",data:this.loginForm}).then((function(t){Object(a["Message"])({message:"登陆成功",type:"success",duration:5e3}),sessionStorage.setItem("token",t.token),e.$router.replace("/")}))},handleregister:function(){var e=this;this.$http({method:"post",url:"/api/register",data:this.loginForm}).then((function(t){Object(a["Message"])({message:t.message,type:"success",duration:5e3}),e.register=!1,e.loginForm.username="",e.loginForm.password=""}))},gologin:function(){this.register=!1}}},r=i,c=(s("2017"),s("1a01"),s("2877")),l=Object(c["a"])(r,o,n,!1,null,"ef0a0372",null);t["default"]=l.exports},cafe:function(e,t,s){}}]);