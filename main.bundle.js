!function(e){function t(t){for(var r,o,c=t[0],u=t[1],l=t[2],f=0,s=[];f<c.length;f++)o=c[f],i[o]&&s.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(p&&p(t);s.length;)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},i={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1,4:1,5:1}[e]&&t.push(o[e]=new Promise(function(t,n){for(var r=({}[e]||e)+"."+e+".bundle.css",i=c.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=(p=a[u]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){var p;if((l=(p=f[u]).getAttribute("data-href"))===r||l===i)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],s.parentNode.removeChild(s),n(a)},s.href=i,document.getElementsByTagName("head")[0].appendChild(s)}).then(function(){o[e]=0}));var n,r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=c.p+""+({}[n=e]||n)+"."+n+".bundle.js",u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;a.push([159,1]),n()}({113:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return l});var r=n(31),o=n(151),i=n(152),a=n(153),c=(n(154),function(){return{type:r.b,menuList:o}}),u=function(){return{type:r.d,technologyList:i}},l=function(){return{type:r.c,projectList:a}}},151:function(e){e.exports=[{id:"Home",icon:"home",text:"Main",link:"/",exact:!0},{id:"Technology",icon:["fab","stripe-s"],text:"Technology",link:"/technology"},{id:"Project",icon:"desktop",text:"Project",link:"/project"},{id:"Future",icon:"graduation-cap",text:"Future",link:"/future",reversed:!0}]},152:function(e){e.exports=[{icon:"leaf",id:"spring",title:"SpringFramework",content:["a 3 year working experience","Development of OTP Web Application Management Tool","Development of WebToApp Linked RestFul API"]},{icon:["fab","react"],id:"react",title:"React",content:["Learn the SPA library React in 2018","Development of an evaluation using React Life Cycle","State Management Redux and React-router Libraries"]},{icon:["fab","js"],id:"es6",title:"ES6",content:["Development of asynchronous program using async-await and promise"]},{icon:["fab","html5"],id:"html5",title:"HTML5",content:["Developing a chat function using websocket","Experience developing web apps with responsive UI libraries"]}]},153:function(e){e.exports=[{id:"gourp1",groupid:"koreaexpert",icon:"building",title:"KoreaExpert Inc.",projects:[{icon:["fab","java"],id:1,title:"OTP ManagementTool Development",description:"Developing tools for managing their OTP products Web applications",technology:["java","jsp","javascript(es5)"],content:["Development of OTP user and service management api with Java Servlet 2.5 environment","Development of OTP user and service management screen with JSP + JSTL + ES5"]},{icon:["fab","java"],id:2,title:"Remote Authentication Program Development",description:"Development of Remote Authentication Program Using Two-way Communication Between Web and Mobile Devices",technology:["java","jsp","javascript(es5)","websocket"],content:["Developing a two-way communication screen with the server using the SockJS-client","Development of Web app data delivery screen using qrcode.js library"]}]},{icon:["fab","react"],id:"ilgong",title:"ilgong WebFrontend Development",description:"Development of Web version of a scheduling program between acquaintances",technology:["javascript(es6)","react","eslint"],content:["Development of Main Schedule and Friend Management Screen using ES6 based React Library","Implementing scheduling location using Google Map APIs"]}]},154:function(e){e.exports=[{imagesrc:"nodeJs.png",title:"NodeJS",content:[]},{imagesrc:"reactNative.png",title:"ReactNative",content:[]}]},159:function(e,t,n){n(160),e.exports=n(369)},31:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a});var r="GET_MENU_LIST",o="GET_TECHNOLOGY_LIST",i="GET_PROJECT_LIST",a="GET_FUTURE_LIST"},357:function(e,t,n){},358:function(e,t,n){},364:function(e,t,n){},365:function(e,t,n){},368:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(60),a=n.n(i),c=n(66),u=n(50),l=n(59),f=n(61),p=n(2),s=n.n(p);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(357);var h=function(e){var t=e.link,n=e.children;return o.a.createElement("button",{type:"button",className:"BrandButton"},o.a.createElement("a",{href:t},n))};h.propTypes={link:s.a.string,children:s.a.node},h.defaultProps={link:"",children:o.a.createElement("div",null)};var v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,m(t).apply(this,arguments))}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.PureComponent),n=t,(i=[{key:"render",value:function(){return o.a.createElement("div",{className:"profile"},o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"image"}),o.a.createElement("div",{className:"text"},o.a.createElement("p",null,"Jeong TaekYu"),o.a.createElement("p",null,"FrontEnd Developer"))),o.a.createElement("div",{className:"buttons"},o.a.createElement(h,{link:"https://www.facebook.com/wdjty?ref=bookmarks"},o.a.createElement(f.a,{icon:["fab","facebook-f"]})),o.a.createElement(h,{link:"https://github.com/wdjty326"},o.a.createElement(f.a,{icon:["fab","github"]}))))}}])&&b(n.prototype,i),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,j(t).apply(this,arguments))}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r.PureComponent),n=t,(i=[{key:"render",value:function(){return o.a.createElement("div",{className:"title"},o.a.createElement("h1",null,"PortFolio"))}}])&&O(n.prototype,i),t}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(358);var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,_(t).apply(this,arguments))}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r.PureComponent),n=t,(i=[{key:"render",value:function(){return o.a.createElement("header",{id:"MainHeader"},o.a.createElement("div",{className:"content"},o.a.createElement(v,null),o.a.createElement(E,null)))}}])&&S(n.prototype,i),t}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,C(t).apply(this,arguments))}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,r.PureComponent),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,r=e.link,i=e.exact,a=e.active;return o.a.createElement("li",{className:"MenuItem".concat(a?" active":"")},o.a.createElement(c.b,{exact:i,to:r},o.a.createElement(f.a,{icon:t}),o.a.createElement("span",null,n)))}}])&&x(n.prototype,i),t}();D.propTypes={icon:s.a.objectOf(Object),text:s.a.string,link:s.a.string,exact:s.a.bool,active:s.a.bool},D.defaultProps={icon:null,text:"",link:"",exact:!1,active:!1};var N=D;function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(364);var W=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,F(t).apply(this,arguments))}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,r.PureComponent),n=t,(i=[{key:"render",value:function(){var e=this.props,t=e.menuList,n=e.location.pathname;return o.a.createElement("nav",{id:"MainNav"},o.a.createElement("ul",null,t.map(function(e,t){return o.a.createElement(N,A({key:t},e,{active:n===e.link}))})))}}])&&I(n.prototype,i),t}();W.propTypes={menuList:s.a.arrayOf(Object),location:s.a.objectOf({pathname:s.a.string})},W.defaultProps={menuList:[],location:{pathname:""}};var B=Object(l.b)(function(e){return e.common},null)(W),U=n(371),G=n(372),H=n(113);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=function(e){function t(e){var n;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),(n=function(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,Y(t).call(this,e))).state={Component:null},n}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,r.PureComponent),n=t,(i=[{key:"componentDidMount",value:function(){var e=this;(0,this.props.load)().then(function(t){e.setState(function(){return{Component:t.default?t.default:t}})})}},{key:"render",value:function(){var e=this.state.Component;return null===e?o.a.createElement(V,null):o.a.createElement(e,this.props)}}])&&K(n.prototype,i),t}();Q.propTypes={load:s.a.instanceOf(Promise)},Q.defaultProps={load:new Promise(function(){})};var V=function(){return o.a.createElement("div",{id:"loading"},o.a.createElement("h1",null,"Loading..."))};function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Z={Home:function(e){return o.a.createElement(Q,X({load:function(){return n.e(4).then(n.bind(null,380))}},e))},Technology:function(e){return o.a.createElement(Q,X({load:function(){return n.e(2).then(n.bind(null,384))}},e))},Project:function(e){return o.a.createElement(Q,X({load:function(){return n.e(5).then(n.bind(null,383))}},e))},Future:function(e){return o.a.createElement(Q,X({load:function(){return n.e(3).then(n.bind(null,381))}},e))},Etc:function(e){return o.a.createElement(Q,{load:function(){return n.e(6).then(n.bind(null,382))}},function(t){return null===t?o.a.createElement(V,null):o.a.createElement(t,e)})}};function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(365);var oe=function(e){function t(e){var n,r;return function(e,n){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this,(n=!(r=te(t).call(this,e))||"object"!==$(r)&&"function"!=typeof r?ne(this):r).state={menuList:[]},n.updateMenuList=n.updateMenuList.bind(ne(n)),n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){(0,this.props.getMenuList)()}},{key:"componentWillReceiveProps",value:function(e){this.updateMenuList(e)}},{key:"componentDidUpdate",value:function(){var e=this.state.menuList,t=this.props.location;0<e.filter(function(e){return e.link===t.pathname&&e.reversed}).length?document.body.style.backgroundColor="#333333":document.body.style.backgroundColor="#ffffff"}},{key:"updateMenuList",value:function(e){var t=e.menuList;this.setState({menuList:t.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,i;r=e,i=n[o=t],o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})}return e}({},e,{component:Z[e.id]})})})}},{key:"render",value:function(){var e=this.state.menuList,t=this.props.location;return o.a.createElement(U.a,{id:"MainContent",component:"section"},o.a.createElement(G.a,{key:t.pathname,timeout:500,classNames:"frame"},o.a.createElement(u.c,{location:t},e.map(function(e,t){var n=e.exact,r=e.link,i=e.component;return o.a.createElement(u.a,{key:t,exact:n,path:r,component:i})}))))}}])&&ee(n.prototype,r),t}();oe.propTypes={location:s.a.objectOf({pathname:s.a.string}),getMenuList:s.a.func},oe.defaultProps={location:{pathname:""},getMenuList:function(){}};var ie=Object(l.b)(function(e){return e.common},function(e){return{getMenuList:function(){return e(H.a())}}})(oe),ae=n(49),ce=n(157),ue=n(31);function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){fe(e,t,n[t])})}return e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pe={menuId:void 0,menuList:[],technologyList:[],projectList:[],futureList:[]},se=Object(ae.c)({common:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:pe,t=1<arguments.length?arguments[1]:void 0,n=t.type,r=t.menuList,o=t.technologyList,i=t.projectList,a=t.futureList;switch(n){case ue.b:return le({},e,{menuList:r});case ue.d:return le({},e,{technologyList:o});case ue.c:return le({},e,{projectList:i});case ue.a:return le({},e,{futureList:a});default:return e}}}),ye=Object(ae.a)(ce.a),be=Object(ae.d)(se,ye);function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ge=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==me(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,he(t).apply(this,arguments))}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ve(e,t)}(t,r.PureComponent),n=t,(i=[{key:"render",value:function(){return o.a.createElement(c.a,null,o.a.createElement(l.a,{store:be},o.a.createElement(u.a,{render:function(e){var t=e.location;return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,null),o.a.createElement(B,{location:t}),o.a.createElement(ie,{location:t}))}})))}}])&&de(n.prototype,i),t}(),Oe=n(15),je=n(52),we=n(37);Oe.b.add(je.e),Oe.b.add(je.c),Oe.b.add(je.b),Oe.b.add(je.d),Oe.b.add(we.g),Oe.b.add(we.a),Oe.b.add(we.b),Oe.b.add(we.e),Oe.b.add(we.f),Oe.b.add(je.f),Oe.b.add(we.c),Oe.b.add(we.d),Oe.b.add(je.a),n(368);var Ee=document.getElementById("root");a.a.render(o.a.createElement(ge,null),Ee)}});