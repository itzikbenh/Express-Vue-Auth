(function(t){function e(e){for(var s,a,i=e[0],u=e[1],c=e[2],m=0,p=[];m<i.length;m++)a=i[m],n[a]&&p.push(n[a][0]),n[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"01b7":function(t,e,r){},"034f":function(t,e,r){"use strict";var s=r("c21b"),n=r.n(s);n.a},"11c0":function(t,e,r){"use strict";r.r(e),r.d(e,"state",function(){return u}),r.d(e,"mutations",function(){return c}),r.d(e,"getters",function(){return l}),r.d(e,"actions",function(){return m});r("96cf");var s=r("3040"),n=(r("ac6a"),r("456d"),r("a481"),r("bc3a")),o=r.n(n),a=r("a18c"),i=r("2b0e");o.a.defaults.headers.common["CSRF-Token"]=document.cookie.replace(/(?:(?:^|.*;\s*)X-CSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,"$1");var u={currentUser:{},settingUser:!0,loggingOut:!1},c={setUser:function(t,e){t.currentUser=e},settingUser:function(t,e){t.settingUser=e},loggingOut:function(t,e){t.loggingOut=e}},l={loggedIn:function(t){return Object.keys(t.currentUser).length},settingUser:function(t){return t.settingUser}},m={init:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,s=e.dispatch,r("settingUser",!0),t.next=4,s("setUser");case 4:r("settingUser",!1);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),setUser:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,o.a.get("http://localhost:3000/user");case 4:s=t.sent,n=s.data,r("setUser",n),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),r("setUser",{});case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e){return t.apply(this,arguments)}}(),logOut:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,r("loggingOut",!0),t.next=5,o.a.post("http://localhost:3000/logout");case 5:a["a"].push({name:"login"}),r("setUser",{}),setTimeout(function(){r("loggingOut",!1),i["a"].prototype.$notify.open("You have successfully logged out.")},2e3),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),r("loggingOut",!1);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),logOutAll:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,r("loggingOut",!0),t.next=5,o.a.post("http://localhost:3000/logout/all");case 5:a["a"].push({name:"login"}),r("setUser",{}),setTimeout(function(){r("loggingOut",!1),i["a"].prototype.$notify.open("You have successfully logged out from all devices.")},2e3),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),r("loggingOut",!1);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}()}},"524c":function(t,e,r){"use strict";var s=r("8f77"),n=r.n(s);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.$store.state.auth.loggingOut?r("div",{staticClass:"logging-out absolute h-full w-full pin z-20"},[t._m(0)]):t._e(),r("router-view",{key:t.$route.fullPath})],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadow max-w-sm mx-auto text-center p-6 mt-16 bg-white relative"},[r("h1",{staticClass:"saving"},[t._v("\n                Logging out\n                "),r("span",[t._v(".")]),r("span",[t._v(".")]),r("span",[t._v(".")])])])}],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:String}},c=u,l=(r("524c"),r("2877")),m=Object(l["a"])(c,a,i,!1,null,"b6a59770",null);m.options.__file="HelloWorld.vue";var p=m.exports,f={name:"app",components:{HelloWorld:p}},d=f,h=(r("034f"),r("c882"),Object(l["a"])(d,n,o,!1,null,null,null));h.options.__file="App.vue";var v=h.exports,g=r("a18c"),b=r("86b6"),w=(r("f751"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{"enter-active-class":t.transition.enter,"leave-active-class":t.transition.leave}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"toast border-l-4 text-white p-4 m-2",class:[t.type,t.position],on:{click:t.close}},[r("div",{domProps:{innerHTML:t._s(t.message)}})])])}),_=[],x=(r("c5f6"),{props:{type:{type:String,default:"is-success"},message:String,duration:Number,position:{type:String,default:"is-top-right",validator:function(t){return["is-top-right","is-top","is-top-left","is-bottom-right","is-bottom","is-bottom-left"].indexOf(t)>-1}}},data:function(){return{isActive:!1,parentTop:null,parentBottom:null,newDuration:this.duration||2e3}},computed:{correctParent:function(){switch(this.position){case"is-top-right":case"is-top":case"is-top-left":return this.parentTop;case"is-bottom-right":case"is-bottom":case"is-bottom-left":return this.parentBottom}},transition:function(){switch(this.position){case"is-top-right":case"is-top":case"is-top-left":return{enter:"fadeInDown",leave:"fadeOut"};case"is-bottom-right":case"is-bottom":case"is-bottom-left":return{enter:"fadeInUp",leave:"fadeOut"}}}},methods:{removeElement:function(t){"undefined"!==typeof t.remove?t.remove():t.parentNode.removeChild(t)},close:function(){var t=this;clearTimeout(this.timer),this.isActive=!1,setTimeout(function(){t.$destroy(),t.removeElement(t.$el)},150)},showNotice:function(){var t=this;this.correctParent.insertAdjacentElement("afterbegin",this.$el),this.isActive=!0,this.timer=setTimeout(function(){return t.close()},this.newDuration)},setupContainer:function(){if(this.parentTop=document.querySelector(".notices.is-top"),this.parentBottom=document.querySelector(".notices.is-bottom"),!this.parentTop||!this.parentBottom){this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="notices is-top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="notices is-bottom");var t=document.body;t.appendChild(this.parentTop),t.appendChild(this.parentBottom)}}},beforeMount:function(){this.setupContainer()},mounted:function(){this.showNotice()}}),y=x,C=Object(l["a"])(y,w,_,!1,null,null,null);C.options.__file="Toast.vue";var k=C.exports,O={open:function(t){var e;"string"===typeof t&&(e=t);var r={message:e},n=Object.assign(r,t),o=s["a"].extend(k);return new o({el:document.createElement("div"),propsData:n})}};s["a"].prototype.$notify=O,s["a"].config.productionTip=!1,new s["a"]({router:g["a"],store:b["a"],render:function(t){return t(v)}}).$mount("#app")},"81db":function(t,e,r){},"86b6":function(t,e,r){"use strict";r("ac6a"),r("456d");var s=r("2b0e"),n=r("2f62"),o=r("c93a");s["a"].use(n["a"]);for(var a=new n["a"].Store({modules:o["default"]}),i=Object.keys(o["default"]),u=0;u<i.length;u++){var c=i[u];o["default"][c].actions&&o["default"][c].actions.init&&a.dispatch("".concat(c,"/init"))}e["a"]=a},"89c6":function(t,e,r){var s={"./auth.js":"11c0","./index.js":"c93a"};function n(t){var e=o(t);return r(e)}function o(t){var e=s[t];if(!(e+1)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return e}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="89c6"},"8f77":function(t,e,r){},a18c:function(t,e,r){"use strict";r("96cf");var s=r("3040"),n=(r("cadf"),r("551c"),r("097d"),r("2b0e")),o=r("86b6"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"w-full max-w-xs mt-6 mb-0 mx-auto"},[r("form",{staticClass:"bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("p",{staticClass:"text-center font-bold uppercase mb-6"},[t._v("Create your account")]),r("div",{staticClass:"form-item",class:{"has-error":t.form.errors.has("name")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Full name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t.form.errors.has("name")?r("p",{staticClass:"text-red text-xs italic",domProps:{textContent:t._s(t.form.errors.get("name"))}}):t._e()]),r("div",{staticClass:"form-item",class:{"has-error":t.form.errors.has("email")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t.form.errors.has("email")?r("p",{staticClass:"text-red text-xs italic",domProps:{textContent:t._s(t.form.errors.get("email"))}}):t._e()]),r("div",{staticClass:"form-item",class:{"has-error":t.form.errors.has("password")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t.form.errors.has("password")?r("p",{staticClass:"text-red text-xs italic",domProps:{textContent:t._s(t.form.errors.get("password"))}}):t._e()]),r("div",{staticClass:"form-item",class:{"has-error":t.form.errors.has("password_confirmation")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"input",attrs:{type:"password",placeholder:"Confirm password"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t.form.errors.has("password_confirmation")?r("p",{staticClass:"text-red text-xs italic",domProps:{textContent:t._s(t.form.errors.get("password_confirmation"))}}):t._e()]),r("button",{staticClass:"button button-primary uppercase w-full",class:{"is-loading":t.form.isSubmitting},attrs:{type:"submit",disabled:t.form.isSubmitting}},[t._v("\n                Sign Up\n            ")])])])])},i=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),t._t("default")],2)},c=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"navbar flex items-center w-full bg-blue-dark shadow-md fixed pin-t z-10"},[r("nav",{staticClass:"pl-2 w-full flex items-center shadow-md"},[r("div",{staticClass:"w-1/2 self-center"},[r("router-link",{attrs:{to:"/"}},[r("h2",{staticClass:"text-white uppercase"},[t._v("\n                        Auth\n                    ")])])],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.settingUser,expression:"!settingUser"}],staticClass:"w-1/2 text-sm clearfix flex justify-end mr-4"},[t.loggedIn?[r("router-link",{staticClass:"text-white hover:text-grey-light uppercase px-6",attrs:{to:"/profile"}},[t._v("\n                        Profile\n                    ")]),r("a",{staticClass:"justify-center text-white hover:text-grey-light uppercase",attrs:{href:"/logout"},on:{click:function(e){e.preventDefault(),t.logOut()}}},[r("span",[t._v("Log out")])])]:[r("router-link",{staticClass:"text-white hover:text-grey-light uppercase px-6",attrs:{to:"/login"}},[t._v("\n                        Sign in\n                    ")]),r("router-link",{staticClass:"text-white hover:text-grey-light uppercase",attrs:{to:"/register"}},[t._v("\n                        Sign up\n                    ")])]],2)])])])},m=[],p=r("c93e"),f=r("2f62"),d=Object(p["a"])({},Object(f["d"])("auth",{currentUser:function(t){return t.currentUser},settingUser:function(t){return t.settingUser}}),Object(f["c"])("auth",["loggedIn"])),h=Object(f["b"])("auth",["logOut","logOutAll"]),v={methods:Object(p["a"])({},h),computed:Object(p["a"])({},d)},g=v,b=(r("fc5d"),r("2877")),w=Object(b["a"])(g,l,m,!1,null,"6e9e2187",null);w.options.__file="Navbar.vue";var _=w.exports,x={components:{Navbar:_}},y=x,C=Object(b["a"])(y,u,c,!1,null,null,null);C.options.__file="Main.vue";var k=C.exports,O=(r("ac6a"),r("456d"),r("c665")),j=r("aa9a"),$=(r("a481"),r("bc3a")),P=r.n($);P.a.defaults.headers.common["CSRF-Token"]=document.cookie.replace(/(?:(?:^|.*;\s*)X-CSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/,"$1");var R=function(){function t(){Object(O["a"])(this,t),this.errors={}}return Object(j["a"])(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t]}},{key:"list",value:function(){var t=this,e=[];return Object.keys(this.errors).forEach(function(r){e.push(t.errors[r])}),e}},{key:"record",value:function(t){this.errors=t}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}]),t}(),E=function(){function t(e){var r=this,s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(O["a"])(this,t),this.originalData=e,this.isSubmitting=!1,this.resetForm=s,Object.keys(e).forEach(function(t){return r[t]=e[t]}),this.errors=new R}return Object(j["a"])(t,[{key:"data",value:function(){var t=this,e={};return Object.keys(this.originalData).forEach(function(r){return e[r]=t[r]}),e}},{key:"reset",value:function(){for(var t in this.originalData)Array.isArray(this[t])?this[t]=[]:this[t]="";this.errors.clear()}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,r){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isSubmitting=!0,t.next=4,P.a[e](r,this.data());case 4:return s=t.sent,this.isSubmitting=!1,"post"!==e&&"delete"!==e||!this.resetForm||this.reset(),this.errors.clear(),t.abrupt("return",s.data);case 11:throw t.prev=11,t.t0=t["catch"](0),console.log(t.t0),this.isSubmitting=!1,422!=t.t0.response.status&&423!=t.t0.response.status||this.onFail(t.t0.response.data),t.t0.response;case 17:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e,r){return t.apply(this,arguments)}}()},{key:"onSuccess",value:function(t){this.reset()}},{key:"onFail",value:function(t){this.errors.record(t)}}]),t}(),S={components:{Layout:k},data:function(){return{form:new E({name:"",email:"",password:"",password_confirmation:""})}},methods:{submit:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.form.post("http://localhost:3000/register");case 3:e=t.sent,this.$notify.open("You have been registered successfully."),this.$router.push({name:"profile"}),console.log(e),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}()}},U=S,L=Object(b["a"])(U,a,i,!1,null,null,null);L.options.__file="Register.vue";var N=L.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"w-full max-w-xs mt-6 mb-0 mx-auto"},[r("form",{staticClass:"bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("p",{staticClass:"text-center font-bold uppercase mb-6"},[t._v("Welcome back!")]),r("div",{staticClass:"form-item",class:{"has-error":t.form.errors.has("email")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t.form.errors.has("email")?r("p",{staticClass:"text-red text-xs italic",domProps:{textContent:t._s(t.form.errors.get("email"))}}):t._e()]),r("div",{staticClass:"form-item",class:{"has-error":t.form.errors.has("password")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t.form.errors.has("password")?r("p",{staticClass:"text-red text-xs italic",domProps:{textContent:t._s(t.form.errors.get("password"))}}):t._e()]),r("div",{staticClass:"flex items-center justify-between mb-4"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.remember,expression:"form.remember"}],attrs:{type:"checkbox","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.form.remember)?t._i(t.form.remember,null)>-1:t._q(t.form.remember,1)},on:{change:function(e){var r=t.form.remember,s=e.target,n=s.checked?1:0;if(Array.isArray(r)){var o=null,a=t._i(r,o);s.checked?a<0&&t.$set(t.form,"remember",r.concat([o])):a>-1&&t.$set(t.form,"remember",r.slice(0,a).concat(r.slice(a+1)))}else t.$set(t.form,"remember",n)}}}),r("span",{staticClass:"ml-2 text-xs"},[t._v("Remember me")])]),r("router-link",{staticClass:"inline-block align-baseline font-bold text-xs text-blue hover:text-blue-darker",attrs:{to:{name:"requestResetLink"}}},[t._v("\n                    Forgot your password?\n                ")])],1),r("button",{staticClass:"button button-primary uppercase w-full",class:{"is-loading":t.form.isSubmitting},attrs:{type:"submit",disabled:t.form.isSubmitting}},[t._v("\n                Sign In\n            ")])])])])},A=[],D={components:{Layout:k},data:function(){return{form:new E({email:"",password:"",remember:""})}},methods:{submit:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.form.post("http://localhost:3000/login");case 3:e=t.sent,this.$notify.open("Welcome back!"),this.$store.commit("auth/setUser",e),this.$router.push({name:"profile"}),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}()}},F=D,q=Object(b["a"])(F,T,A,!1,null,null,null);q.options.__file="Login.vue";var I=q.exports,B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",[r("h1",{staticClass:"text-center"},[t._v("Hello "+t._s(t.user.name))])]),r("div",{staticClass:"mt-16 max-w-lg mx-auto"},[r("h3",{staticClass:"text-center"},[t._v("Logged in devices")]),r("button",{staticClass:"button button-red mt-6 uppercase",on:{click:function(e){return e.preventDefault(),t.logOutAll(e)}}},[t._v("Logout all")]),r("div",{staticClass:"mt-2 bg-white shadow-md"},[r("table",{staticClass:"table is-bordered"},[r("tr",[r("th",[t._v("IP")]),r("th",[t._v("User agent")])]),r("tbody",t._l(t.user.login_tokens,function(e,s){return r("tr",{key:s},[r("td",[t._v(t._s(e.ip))]),r("td",[t._v(t._s(e.ua))])])}))])])])])},M=[],H={components:{Layout:k},props:{user:{type:Object,required:!0}},methods:Object(p["a"])({},h)},W=H,z=Object(b["a"])(W,B,M,!1,null,null,null);z.options.__file="Profile.vue";var Y=z.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("h1",{staticClass:"text-center"},[t._v("Home Page")])])},K=[],X={components:{Layout:k}},Z=X,G=Object(b["a"])(Z,J,K,!1,null,null,null);G.options.__file="Home.vue";var Q=G.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"w-full max-w-xs mt-6 mb-0 mx-auto"},[r("form",{staticClass:"bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("p",{staticClass:"text-center font-bold uppercase mb-6"},[t._v("Password Reset Link")]),r("div",{staticClass:"form-item",class:{"has-error":t.form.errors.has("email")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t.form.errors.has("email")?r("p",{staticClass:"text-red text-xs italic",domProps:{textContent:t._s(t.form.errors.get("email"))}}):t._e()]),r("button",{staticClass:"button button-primary uppercase w-full",class:{"is-loading":t.form.isSubmitting},attrs:{type:"submit",disabled:t.form.isSubmitting}},[t._v("\n                Send password reset link\n            ")])])])])},tt=[],et={components:{Layout:k},data:function(){return{form:new E({email:""})}},methods:{submit:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.form.post("http://localhost:3000/password/email");case 3:t.sent,this.$notify.open("Reset link has been sent to your email."),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(){return t.apply(this,arguments)}}()}},rt=et,st=Object(b["a"])(rt,V,tt,!1,null,null,null);st.options.__file="RequestResetLink.vue";var nt=st.exports,ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"w-full max-w-xs mt-6 mb-0 mx-auto"},[r("form",{staticClass:"bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("p",{staticClass:"text-center font-bold uppercase mb-6"},[t._v("Reset Password")]),r("div",{staticClass:"form-item",class:{"has-error":t.form.errors.has("password")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t.form.errors.has("password")?r("p",{staticClass:"text-red text-xs italic",domProps:{textContent:t._s(t.form.errors.get("password"))}}):t._e()]),r("div",{staticClass:"form-item",class:{"has-error":t.form.errors.has("password_confirmation")}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"input",attrs:{type:"password",placeholder:"Confirm password"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t.form.errors.has("password_confirmation")?r("p",{staticClass:"text-red text-xs italic",domProps:{textContent:t._s(t.form.errors.get("password_confirmation"))}}):t._e()]),r("button",{staticClass:"button button-primary uppercase w-full",class:{"is-loading":t.form.isSubmitting},attrs:{type:"submit",disabled:t.form.isSubmitting}},[t._v("\n                Reset Password\n            ")])])])])},at=[],it={components:{Layout:k},data:function(){return{form:new E({password:"",password_confirmation:"",token:this.$route.params.token})}},methods:{submit:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.form.post("http://localhost:3000/password/reset");case 3:t.sent,this.$notify.open("Password has been updated successfully."),this.$router.replace({name:"login"}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}()}},ut=it,ct=Object(b["a"])(ut,ot,at,!1,null,null,null);ct.options.__file="ResetPassword.vue";var lt=ct.exports,mt=[{path:"/",name:"home",component:Q},{path:"/profile",name:"profile",component:Y,meta:{authRequired:!0},props:function(t){return{user:o["a"].state.auth.currentUser}}},{path:"/register",name:"register",component:N,meta:{guestRequired:!0},beforeEnter:function(t,e,r){o["a"].getters["auth/loggedIn"]?r({name:"home"}):r()}},{path:"/login",name:"login",component:I,meta:{guestRequired:!0},beforeEnter:function(t,e,r){o["a"].getters["auth/loggedIn"]?r({name:"home"}):r()}},{path:"/password/reset",name:"requestResetLink",component:nt},{path:"/password/reset/:token",name:"resetPassword",component:lt}],pt=r("8c4f");n["a"].use(pt["a"]);var ft=new pt["a"]({mode:"history",routes:mt});ft.beforeEach(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,r,s){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.matched.some(function(t){return t.meta.authRequired}),a=e.matched.some(function(t){return t.meta.guestRequired}),n||a){t.next=4;break}return t.abrupt("return",s());case 4:return t.next=6,o["a"].dispatch("auth/setUser");case 6:n&&!o["a"].getters["auth/loggedIn"]?s({name:"login"}):s();case 7:case"end":return t.stop()}},t,this)}));return function(e,r,s){return t.apply(this,arguments)}}());e["a"]=ft},c21b:function(t,e,r){},c882:function(t,e,r){"use strict";var s=r("81db"),n=r.n(s);n.a},c93a:function(t,e,r){"use strict";r.r(e);var s=r("c93e"),n=(r("ac6a"),r("a481"),r("28a5"),function(t){return t.charAt(0).toUpperCase()+t.toLowerCase().slice(1)}),o=function(t){var e=t.toLowerCase().replace(/[^A-Za-z0-9]/g," ").split(" ").reduce(function(t,e){return t+n(e.toLowerCase())});return e.charAt(0).toLowerCase()+e.slice(1)},a=r("89c6"),i={modules:{}};a.keys().forEach(function(t){if("./index.js"!==t){var e=t.replace(/^\.\//,"").replace(/\.\w+$/,"").split(/\//).map(o),r=u(i,e),n=r.modules;n[e.pop()]=Object(s["a"])({namespaced:!0},a(t))}function u(t,e){if(1===e.length)return t;var r=e.shift();return t.modules[r]=Object(s["a"])({modules:{}},t.modules[r]),u(t.modules[r],e)}}),e["default"]=i.modules},fc5d:function(t,e,r){"use strict";var s=r("01b7"),n=r.n(s);n.a}});
//# sourceMappingURL=app.5594bd11.js.map