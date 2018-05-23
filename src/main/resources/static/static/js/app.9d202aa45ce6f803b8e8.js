webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={name:"App",data:function(){return{showMsgListUsers:!1,msg:"MoraJunto app"}},methods:{listUsers:function(){fetch("/api/users").then(function(t){return t.json()}).then(function(t){return console.log(t)}),this.showMsgListUsers=!0}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("hr"),t._v(" "),s("router-view"),t._v(" "),s("hr"),t._v(" "),s("button",{staticClass:"waves-effect waves-light btn",on:{click:t.listUsers}},[t._v("list users")]),t._v(" "),t.showMsgListUsers?s("p",[t._v("open browser dev console")]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/#/"}},[e("button",{staticClass:"waves-effect waves-light btn"},[this._v("Inicio")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/#/signup"}},[e("button",{staticClass:"waves-effect waves-light btn"},[this._v("Cadastrar")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/#/login"}},[e("button",{staticClass:"waves-effect waves-light btn"},[this._v("Login")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/#/about"}},[e("button",{staticClass:"waves-effect waves-light btn"},[this._v("Sobre")])])}]},r=s("VU/8")(n,i,!1,null,null,null).exports,o=s("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v("Essential Links")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])]),t._v(" "),s("h3",[t._v("Ecosystem")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("\n        vue-router\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("\n        vuex\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("\n        vue-loader\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("\n        awesome-vue\n      ")])])])])}]},c=s("VU/8")({name:"Links"},l,!1,null,null,null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  MoraJunto app, um sistema desenvolvido para o projeto de Engenharia de Software\n  "),e("br"),this._v(" "),e("a",{attrs:{href:"https://github.com/gabrielfern/morajunto-web-frontend",target:"_blank"}},[this._v("Código fonte")])])}]},v=s("VU/8")({},u,!1,null,null,null).exports,p=s("mvHQ"),h=s.n(p),_={data:function(){return{name:"",email:"",password:"",failOnSignUp:!1,successOnSignUp:!1}},methods:{createUser:function(){var t=this;fetch("/api/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:h()({username:this.name,email:this.email,password:this.password})}).then(function(e){e.status<300?t.showSignUpResult(!0):t.showSignUpResult(!1)})},showSignUpResult:function(t){this.failOnSignUp=this.successOnSignUp=!1,t?this.successOnSignUp=!0:this.failOnSignUp=!1}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("label",[t._v("Nome")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("label",[t._v("Email")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("label",[t._v("Senha")])])]),t._v(" "),t._m(0),t._v(" "),s("a",{attrs:{href:"#"},on:{click:t.createUser}},[s("button",{staticClass:"waves-effect waves-light btn"},[t._v("Confirmar")])]),t._v(" "),t.failOnSignUp?s("h4",[t._v("Falha ao cadastrar")]):t._e(),t._v(" "),t.successOnSignUp?s("h4",[t._v("Cadastrado com sucesso")]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/#/"}},[e("button",{staticClass:"btn waves-effect waves-light red lighten-2"},[this._v("Cancelar")])])}]},f=s("VU/8")(_,m,!1,null,null,null).exports,d={data:function(){return{email:"",password:"",failLogin:!1,successLogin:!1}},headers:{Accept:"application/json","Content-Type":"application/json"},methods:{loginUser:function(){var t=this;fetch("/api/users",{method:"GET"}).then(function(t){return t.json()}).then(function(e){return t.verifyLogin(e.data)})},verifyLogin:function(t){var e;for(e=0;e<t.length;e++)t[e].email===this.email&&t[e].password===this.password?(this.successLogin=!0,this.failLogin=!1):(this.failLogin=!0,this.successLogin=!1)}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),s("label",[t._v("Email")])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("label",[t._v("Senha")])])]),t._v(" "),s("a",{attrs:{href:"#"},on:{click:t.loginUser}},[s("button",{staticClass:"waves-effect waves-light btn"},[t._v("Login")])]),t._v(" "),t.failLogin?s("h4",[t._v(" Login ou senha inválidos")]):t._e(),t._v(" "),t.successLogin?s("h4",[t._v("Login com sucesso")]):t._e()])},staticRenderFns:[]},w=s("VU/8")(d,g,!1,null,null,null).exports;a.a.use(o.a);var b=new o.a({routes:[{path:"/",name:"Links",component:c},{path:"/about",name:"About",component:v},{path:"/signup",name:"SignUp",component:f},{path:"/login",name:"login",component:w}]});s("U54J"),s("gkYU");new a.a({el:"#app",router:b,components:{App:r},template:"<App/>"})},gkYU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9d202aa45ce6f803b8e8.js.map