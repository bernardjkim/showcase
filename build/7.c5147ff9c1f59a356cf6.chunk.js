(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0ee1b557feb040a54449":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=(n("8a2d1b95e05b6a321e74"),n("0b3cb19af78752326f59")),i=n("d7dd51e1bf6bfc2c9c3d"),l=n("a28fc3c963a1d4d1a2e5"),c=n("ab4cb61bcb2dc161defb"),u=n("e95a63b25fb92ed15721"),s=n("adc20f99e57c573c589c"),f=n("d95b0cf107403b178365"),p=n("6542cd13fd5dd1bcffd4"),d=n("6c68d13fe9e3e77d8fc4"),b=n("a63b0d047588ea783f61"),h=n.n(b),y=n("a72b40110d9c31c9b5c5"),m=n("b989cec74a4c48e91050"),g=n("f363639bc5c3c97af546"),v="app/AuthPage/CLEAR_ERRORS",w="app/AuthPage/CREATE_USER",O="app/AuthPage/CREATE_USER_SUCCESS",C="app/AuthPage/CREATE_USER_ERROR",j="app/App/CREATE_TOKEN",S="app/App/CREATE_TOKEN_SUCCESS",_="app/App/CREATE_TOKEN_ERROR";function x(e,t){return{type:j,email:e,password:t}}var P=regeneratorRuntime.mark(T),E=regeneratorRuntime.mark(R),k=regeneratorRuntime.mark(A);function T(e){var t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=m.a.auth.login,n={method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:h.a.stringify({email:e.email,password:e.password})},r.prev=2,r.next=5,Object(d.b)(g.a,t,n);case 5:return r.next=7,Object(d.c)({type:S});case 7:return r.next=9,Object(d.c)(Object(y.d)());case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(d.c)((o=r.t0,{type:_,error:o}));case 15:case"end":return r.stop()}var o},P,this,[[2,11]])}function R(e){var t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=m.a.user.create,n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:h.a.stringify({username:e.username,email:e.email,password:e.password,passwordConfirm:e.passwordConfirm})},r.prev=2,r.next=5,Object(d.b)(g.a,t,n);case 5:return r.next=7,Object(d.c)({type:O});case 7:return r.next=9,Object(d.c)(x(e.email,e.password));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(2),r.next=15,Object(d.c)((o=r.t0,{type:C,error:o}));case 15:case"end":return r.stop()}var o},E,this,[[2,11]])}function A(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)([Object(d.e)(j,T),Object(d.e)(w,R)]);case 2:case"end":return e.stop()}},k,this)}var N=n("54f683fcda7806277002"),I=n("3ad3c1378076e862aab0"),$=Object(N.fromJS)({loading:!1,error:!1});var U,L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.LOCATION_CHANGE:case v:return e.set("error",!1);case j:return e.set("loading",!0).set("error",!1);case S:return e.set("loading",!1);case _:return e.set("error",Object(N.fromJS)({createToken:t.error})).set("loading",!1);case w:return e.set("loading",!0).set("error",!1);case O:return e.set("loading",!1);case C:return e.set("error",Object(N.fromJS)({createUser:t.error})).set("loading",!1);default:return e}},W=function(e){return e.get("authPage",$)},F=function(){return Object(l.a)(W,function(e){return e.toJS()})},q=a.b.div.withConfig({displayName:"FormContainer",componentId:"sc-15eehld-0"})(["width:90%;display:flex;flex-direction:column;padding-left:60px;padding-right:60px;padding-top:60px;padding-bottom:60px;"]),J=n("c7fd554010f79f6c0ef8"),z=n.n(J),H=Object(a.b)(z.a).withConfig({displayName:"FormInput",componentId:"vs2cgt-0"})(["margin-top:20px;margin-bottom:20px;label{color:#57c1ae;}"]),B=n("921c0b8c557fe6ba5da8"),K=n.n(B),M=Object(a.b)(K.a).withConfig({displayName:"ErrorMessage",componentId:"qtxs1a-0"})(["color:red;width:80%;margin-top:10px;font-weight:300;display:",";"],function(e){return e.hidden?"none":"block"}),G=a.b.div.withConfig({displayName:"Actions",componentId:"sc-13lq9u-0"})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:center;button{margin-right:20px;width:150px;}"]),D=n("2aea235afd5c55b8b19b"),Q=n.n(D);var V,X=Object(a.b)(Q.a).withConfig({displayName:"ButtonPrimary__StyledButton",componentId:"sc-1kgzcp9-0"})(["color:white;"]),Y=function(e){var t=e.label,n=e.handleClick;return function(e,t,n,r){U||(U="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:U,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}(X,{onClick:n,color:"primary",size:"large",variant:"contained"},void 0,t)};var Z,ee=function(e){var t=e.label,n=e.handleClick;return function(e,t,n,r){V||(V="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:V,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}(Q.a,{onClick:n,color:"primary",size:"large",variant:"outlined"},void 0,t)};function te(e){return(te="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ne(e,t,n,r){Z||(Z="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:Z,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ce,ue=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=oe(t).call(this,e),n=!o||"object"!==te(o)&&"function"!==typeof o?ie(r):o,le(ie(ie(n)),"handleOnChange",function(e){return function(t){n.setState(le({},e,t.target.value))}}),n.state={email:"",password:""},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.error,n=this.props,r=n.handleCreateToken,o=n.handleToggle;return ne(q,{},void 0,ne(H,{onChange:this.handleOnChange("email"),fullWidth:!0,margin:"dense",variant:"outlined",label:"Email Address",type:"email",autoFocus:!0}),ne(H,{onChange:this.handleOnChange("password"),fullWidth:!0,margin:"dense",variant:"outlined",label:"Password",type:"password"}),ne(G,{},void 0,ne(Y,{label:"Login",handleClick:function(){return r(e.state.email,e.state.password)}}),ne(ee,{label:"Signup",handleClick:o(!1)})),ne(M,{hidden:!t||!t.get("createToken")},void 0,"Invalid Email or Password"))}}])&&re(n.prototype,r),a&&re(n,a),t}();function se(e){return(se="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fe(e,t,n,r){ce||(ce="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:ce,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function be(e,t){return(be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function he(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me,ge=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=de(t).call(this,e),n=!o||"object"!==se(o)&&"function"!==typeof o?he(r):o,ye(he(he(n)),"handleOnChange",function(e){return function(t){n.setState(ye({},e,t.target.value))}}),n.state={username:"",email:"",password:"",passwordConfirm:""},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&be(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props.error,n=this.props,r=n.handleCreateUser,o=n.handleToggle;return fe(q,{},void 0,fe(H,{onChange:this.handleOnChange("username"),fullWidth:!0,margin:"dense",variant:"outlined",label:"Username",type:"username"}),fe(H,{onChange:this.handleOnChange("email"),fullWidth:!0,margin:"dense",variant:"outlined",label:"Email Address",type:"email",autoFocus:!0}),fe(H,{onChange:this.handleOnChange("password"),fullWidth:!0,margin:"dense",variant:"outlined",label:"Password",type:"password"}),fe(H,{onChange:this.handleOnChange("passwordConfirm"),fullWidth:!0,margin:"dense",variant:"outlined",label:"Confirm Password",type:"password"}),fe(G,{},void 0,fe(Y,{label:"Signup",handleClick:function(){return r(e.state.username,e.state.email,e.state.password,e.state.passwordConfirm)}}),fe(ee,{label:"Login",handleClick:o(!0)})),fe(M,{hidden:!t||!t.get("createUser")},void 0,"Invalid Fields"))}}])&&pe(n.prototype,r),a&&pe(n,a),t}();function ve(e,t,n,r){me||(me="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:me,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var we,Oe=a.b.div.withConfig({displayName:"Header__Container",componentId:"sc-1jj86nq-0"})(["width:90%;display:flex;flex-direction:column;padding-left:60px;padding-right:60px;padding-top:60px;padding-bottom:30px;"]),Ce=Object(a.b)(K.a).withConfig({displayName:"Header__Logo",componentId:"sc-1jj86nq-1"})(["font-size:20px;margin-top:20px;margin-bottom:20px;"]),je=Object(a.b)(K.a).withConfig({displayName:"Header__Message",componentId:"sc-1jj86nq-2"})(["font-size:30px;font-weight:300;margin-top:20px;margin-bottom:20px;"]),Se=Object(a.b)(K.a).withConfig({displayName:"Header__Welcome",componentId:"sc-1jj86nq-3"})(["font-weight:200;"]),_e=ve(Ce,{color:"primary"},void 0,"ShowCase"),xe=function(e){var t=e.message,n=e.welcome;return ve(Oe,{},void 0,_e,ve(je,{},void 0,t),ve(Se,{},void 0,n))};function Pe(e){return(Pe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ee(e,t,n,r){we||(we="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var i in o)void 0===t[i]&&(t[i]=o[i]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var l=new Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:we,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Te(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Re(e){return(Re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"AuthPage",function(){return We});var Ie=a.b.div.withConfig({displayName:"AuthPage__Container",componentId:"sc-1k65ovo-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]),$e=Ee(u.Redirect,{to:"/"}),Ue=Ee(xe,{message:"Showcase your personal projects",welcome:"Welcome Back. Please Login To Continue."}),Le=Ee(xe,{message:"Showcase your personal projects",welcome:"Welcome to Showcase. Please Signup To Continue."}),We=function(e){function t(e){var n,r,o,a,i,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=Re(t).call(this,e),n=!o||"object"!==Pe(o)&&"function"!==typeof o?Ne(r):o,a=Ne(Ne(n)),l=function(e){return function(){n.props.handleClearErrors(),n.setState({showLogin:e})}},(i="handleToggle")in a?Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[i]=l,n.state={showLogin:!0},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(t,o.a.PureComponent),n=t,(r=[{key:"render",value:function(){return this.props.user?$e:Ee(Ie,{},void 0,this.state.showLogin?Ee(o.a.Fragment,{},void 0,Ue,o.a.createElement(ue,ke({},this.props,{handleToggle:this.handleToggle}))):Ee(o.a.Fragment,{},void 0,Le,o.a.createElement(ge,ke({},this.props,{handleToggle:this.handleToggle}))))}}])&&Te(n.prototype,r),a&&Te(n,a),t}(),Fe=Object(l.b)({AuthPage:F(),user:Object(p.b)(),error:Object(l.a)(W,function(e){return e.get("error")})});var qe=Object(i.connect)(Fe,function(e){return{handleCreateToken:function(t,n){e(x(t,n))},handleCreateUser:function(t,n,r,o){e(function(e,t,n,r){return{type:w,username:e,email:t,password:n,passwordConfirm:r}}(t,n,r,o))},handleClearErrors:function(){e({type:v})}}}),Je=Object(f.a)({key:"authPage",reducer:L}),ze=Object(s.a)({key:"authPage",saga:A});t.default=Object(c.compose)(Je,ze,qe)(We)}}]);