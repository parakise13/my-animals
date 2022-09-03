/*! For license information please see 619.f74e55f2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_animal=self.webpackChunkmy_animal||[]).push([[619],{534:function(t,r,e){e.d(r,{Z:function(){return u}});var n=e(885),o=e(791),i=e(612),a=e(184),u=function(t){var r=(0,o.useState)(!1),e=(0,n.Z)(r,2),u=e[0],c=e[1],l=(0,o.useState)(t.initialValue||""),s=(0,n.Z)(l,2),f=s[0],h=s[1],d=(0,o.useState)(t.initialValid||!1),p=(0,n.Z)(d,2),v=p[0],y=p[1],m=t.id,g=t.onInput;(0,o.useEffect)((function(){t.onInput(m,f,v)}),[m,f,v,g]);var w=function(r){h(r.target.value),y((0,i.Gu)(r.target.value,t.validators))},x=function(){c(!0)};return(0,a.jsxs)("div",{className:"form-control ".concat(!v&&u&&"form-control__invalid"),children:["input"===t.element?(0,a.jsx)("input",{id:t.id,type:t.type,placeholder:t.placeholder,onChange:w,onBlur:x,value:f}):(0,a.jsx)("textarea",{rows:t.rows||5,id:t.id,placeholder:t.placeholder,onChange:w,onBlur:x,value:f}),!v&&u&&(0,a.jsxs)("p",{className:"error-text",children:["* ",t.errorText]})]})}},89:function(t,r,e){e.d(r,{Z:function(){return h}});var n=e(791),o=e(990),i=e(164),a={Backdrop:"Modal_Backdrop__b1iy7",modal:"Modal_modal__302VW","slide-down":"Modal_slide-down__Xn8lH"},u=e(184),c=function(){var t=(0,n.useContext)(o.t);return(0,u.jsx)("div",{className:a.Backdrop,onClick:function(){t.closeModal()}})},l=function(t){return(0,u.jsx)("div",{className:"".concat(a.modal," ").concat(t.className),children:(0,u.jsx)("div",{className:a.content,children:t.children})})},s=document.getElementById("overlays"),f=function(t){return(0,u.jsxs)(n.Fragment,{children:[i.createPortal((0,u.jsx)(c,{}),s),i.createPortal((0,u.jsx)(l,{className:t.className,children:t.children}),s)]})},h=function(t){var r=(0,n.useContext)(o.t);return(0,u.jsxs)(f,{className:"error-container",children:[(0,u.jsx)("div",{children:t.errorText}),(0,u.jsx)("button",{onClick:function(){r.closeModal(),t.onClose()},children:"\ud655\uc778"})]})}},581:function(t,r,e){var n=e(885),o=e(942),i=e(413),a=e(791),u=function(t,r){switch(r.type){case"INPUT_CHANGE":var e=!0;for(var n in t.inputs)t.inputs[n]&&(e=n===r.inputId?e&&r.isValid:e&&t.inputs[n].isValid);return(0,i.Z)((0,i.Z)({},t),{},{inputs:(0,i.Z)((0,i.Z)({},t.inputs),{},(0,o.Z)({},r.inputId,{value:r.value,isValid:r.isValid})),isValid:e});case"SET_DATA":return{inputs:r.inputs,isValid:r.formIsValid};default:return t}};r.Z=function(t,r){var e=(0,a.useReducer)(u,{inputs:t,isValid:r}),o=(0,n.Z)(e,2),i=o[0],c=o[1];return[i,(0,a.useCallback)((function(t,r,e){c({type:"INPUT_CHANGE",value:r,isValid:e,inputId:t})}),[]),(0,a.useCallback)((function(t,r){c({type:"SET_DATA",inputs:t,formIsValid:r})}),[])]}},436:function(t,r,e){var n=e(214),o=e(861),i=e(885),a=e(791);r.Z=function(){var t=(0,a.useState)(!1),r=(0,i.Z)(t,2),e=r[0],u=r[1],c=(0,a.useState)(null),l=(0,i.Z)(c,2),s=l[0],f=l[1],h=(0,a.useRef)([]),d=(0,a.useCallback)(function(){var t=(0,o.Z)((0,n.Z)().mark((function t(r){var e,o,i,a,c,l,s=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:{},i=s.length>3&&void 0!==s[3]?s[3]:null,u(!0),f(null),a=new AbortController,h.current.push(a),t.prev=7,t.next=10,fetch(r,{method:e,headers:o,body:i,signal:a.signal});case 10:return c=t.sent,t.next=13,c.json();case 13:if(l=t.sent,c.ok){t.next=16;break}throw new Error(l.message);case 16:return u(!1),t.abrupt("return",l);case 20:throw t.prev=20,t.t0=t.catch(7),u(!1),f(t.t0.message),t.t0;case 25:case"end":return t.stop()}}),t,null,[[7,20]])})));return function(r){return t.apply(this,arguments)}}(),[]);return(0,a.useEffect)((function(){return function(){h.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:e,error:s,sendRequest:d,clearError:function(){f(null)}}}},612:function(t,r,e){e.d(r,{Ox:function(){return s},CP:function(){return l},hg:function(){return c},Gu:function(){return f}});var n=e(192);var o="REQUIRE",i="MINLENGTH",a="MAXLENGTH",u="EMAIL",c=function(){return{type:o}},l=function(t){return{type:i,val:t}},s=function(){return{type:u}},f=function(t,r){var e,c=!0,l=function(t,r){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=(0,n.Z)(t))||r&&t&&"number"===typeof t.length){e&&(t=e);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return u=t.done,t},e:function(t){c=!0,a=t},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}(r);try{for(l.s();!(e=l.n()).done;){var s=e.value;s.type===o&&(c=c&&t.trim().length>0),s.type===i&&s.val&&(c=c&&t.trim().length>=s.val),s.type===a&&s.val&&(c=c&&t.trim().length<=s.val),"MIN"===s.type&&s.val&&(c=c&&+t>=s.val),"MAX"===s.type&&s.val&&(c=c&&+t<=s.val),s.type===u&&(c=c&&/^\S+@\S+\.\S+$/.test(t))}}catch(f){l.e(f)}finally{l.f()}return c}},861:function(t,r,e){function n(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void e(l)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}e.d(r,{Z:function(){return o}})},214:function(t,r,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(k){l=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=E(a,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=f(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(k){return{type:"throw",arg:k}}}t.wrap=s;var h={};function d(){}function p(){}function v(){}var y={};l(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(N([])));g&&g!==r&&e.call(g,a)&&(y=g);var w=v.prototype=d.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(i,a,u,c){var l=f(t[i],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==n(h)&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):r.resolve(h).then((function(t){s.value=t,u(s)}),(function(t){return o("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}}function E(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=v,l(w,"constructor",v),l(v,"constructor",p),p.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),l(b.prototype,u,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:N(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}e.d(r,{Z:function(){return o}})}}]);
//# sourceMappingURL=619.f74e55f2.chunk.js.map