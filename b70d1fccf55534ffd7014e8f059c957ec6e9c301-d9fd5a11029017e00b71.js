(self.webpackChunkreporteregulatorio=self.webpackChunkreporteregulatorio||[]).push([[5033],{2993:function(t){var e="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,c){if(t===c)return!0;if(t&&c&&"object"==typeof t&&"object"==typeof c){if(t.constructor!==c.constructor)return!1;var a,u,s,l;if(Array.isArray(t)){if((a=t.length)!=c.length)return!1;for(u=a;0!=u--;)if(!i(t[u],c[u]))return!1;return!0}if(r&&t instanceof Map&&c instanceof Map){if(t.size!==c.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!c.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!i(u.value[1],c.get(u.value[0])))return!1;return!0}if(n&&t instanceof Set&&c instanceof Set){if(t.size!==c.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!c.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(c)){if((a=t.length)!=c.length)return!1;for(u=a;0!=u--;)if(t[u]!==c[u])return!1;return!0}if(t.constructor===RegExp)return t.source===c.source&&t.flags===c.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof c.valueOf)return t.valueOf()===c.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof c.toString)return t.toString()===c.toString();if((a=(s=Object.keys(t)).length)!==Object.keys(c).length)return!1;for(u=a;0!=u--;)if(!Object.prototype.hasOwnProperty.call(c,s[u]))return!1;if(e&&t instanceof Element)return!1;for(u=a;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!i(t[s[u]],c[s[u]]))return!1;return!0}return t!=t&&c!=c}t.exports=function(t,e){try{return i(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(t,e,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):r&&(u=r(u))}var f=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var c=o.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),l()},c.componentDidUpdate=function(){l()},c.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},c.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return c(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),c(f,"canUseDOM",a),f}}},9662:function(t,e,r){"use strict";var n=r(614),o=r(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},9483:function(t,e,r){"use strict";var n=r(4411),o=r(6330),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a constructor")}},9670:function(t,e,r){"use strict";var n=r(111),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,r){"use strict";var n=r(5656),o=r(1400),i=r(6244),c=function(t){return function(e,r,c){var a,u=n(e),s=i(u),l=o(c,s);if(t&&r!=r){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},4326:function(t,e,r){"use strict";var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,r){"use strict";var n=r(1694),o=r(614),i=r(4326),c=r(5112)("toStringTag"),a=Object,u="Arguments"==i(function(){return arguments}());t.exports=n?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(r){}}(e=a(t),c))?r:u?i(e):"Object"==(n=i(e))&&o(e.callee)?"Arguments":n}},9920:function(t,e,r){"use strict";var n=r(2597),o=r(3887),i=r(1236),c=r(3070);t.exports=function(t,e,r){for(var a=o(e),u=c.f,s=i.f,l=0;l<a.length;l++){var f=a[l];n(t,f)||r&&n(r,f)||u(t,f,s(e,f))}}},8880:function(t,e,r){"use strict";var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,r){"use strict";var n=r(614),o=r(3070),i=r(6339),c=r(3072);t.exports=function(t,e,r,a){a||(a={});var u=a.enumerable,s=void 0!==a.name?a.name:e;if(n(r)&&i(r,s,a),a.global)u?t[e]=r:c(e,r);else{try{a.unsafe?t[e]&&(u=!0):delete t[e]}catch(l){}u?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,r){"use strict";var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},9781:function(t,e,r){"use strict";var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){"use strict";var e="object"==typeof document&&document.all,r=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:r}},317:function(t,e,r){"use strict";var n=r(7854),o=r(111),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8113:function(t){"use strict";t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,r){"use strict";var n,o,i=r(7854),c=r(8113),a=i.process,u=i.Deno,s=a&&a.versions||u&&u.version,l=s&&s.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:function(t){"use strict";t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){"use strict";var n=r(7854),o=r(1236).f,i=r(8880),c=r(8052),a=r(3072),u=r(9920),s=r(4705);t.exports=function(t,e){var r,l,f,p,m,d=t.target,v=t.global,y=t.stat;if(r=v?n:y?n[d]||a(d,{}):(n[d]||{}).prototype)for(l in e){if(p=e[l],f=t.dontCallGetSet?(m=o(r,l))&&m.value:r[l],!s(v?l:d+(y?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),c(r,l,p,t)}}},7293:function(t){"use strict";t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,r){"use strict";var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,r){"use strict";var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,r){"use strict";var n=r(9781),o=r(2597),i=Function.prototype,c=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),u=a&&"something"===function(){}.name,s=a&&(!n||n&&c(i,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:s}},1702:function(t,e,r){"use strict";var n=r(4374),o=Function.prototype,i=o.call,c=n&&o.bind.bind(i,i);t.exports=n?c:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,r){"use strict";var n=r(7854),o=r(614);t.exports=function(t,e){return arguments.length<2?(r=n[t],o(r)?r:void 0):n[t]&&n[t][e];var r}},8173:function(t,e,r){"use strict";var n=r(9662),o=r(8554);t.exports=function(t,e){var r=t[e];return o(r)?void 0:n(r)}},7854:function(t,e,r){"use strict";var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,r){"use strict";var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){"use strict";t.exports={}},4664:function(t,e,r){"use strict";var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){"use strict";var n=r(1702),o=r(7293),i=r(4326),c=Object,a=n("".split);t.exports=o((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):c(t)}:c},2788:function(t,e,r){"use strict";var n=r(1702),o=r(614),i=r(5465),c=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},9909:function(t,e,r){"use strict";var n,o,i,c=r(4811),a=r(7854),u=r(111),s=r(8880),l=r(2597),f=r(5465),p=r(6200),m=r(3501),d="Object already initialized",v=a.TypeError,y=a.WeakMap;if(c||f.state){var h=f.state||(f.state=new y);h.get=h.get,h.has=h.has,h.set=h.set,n=function(t,e){if(h.has(t))throw v(d);return e.facade=t,h.set(t,e),e},o=function(t){return h.get(t)||{}},i=function(t){return h.has(t)}}else{var b=p("state");m[b]=!0,n=function(t,e){if(l(t,b))throw v(d);return e.facade=t,s(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},i=function(t){return l(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return r}}}},614:function(t,e,r){"use strict";var n=r(4154),o=n.all;t.exports=n.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4411:function(t,e,r){"use strict";var n=r(1702),o=r(7293),i=r(614),c=r(648),a=r(5005),u=r(2788),s=function(){},l=[],f=a("Reflect","construct"),p=/^\s*(?:class|function)\b/,m=n(p.exec),d=!p.exec(s),v=function(t){if(!i(t))return!1;try{return f(s,l,t),!0}catch(e){return!1}},y=function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!m(p,u(t))}catch(e){return!0}};y.sham=!0,t.exports=!f||o((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?y:v},4705:function(t,e,r){"use strict";var n=r(7293),o=r(614),i=/#|\.prototype\./,c=function(t,e){var r=u[a(t)];return r==l||r!=s&&(o(e)?n(e):!!e)},a=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=c.data={},s=c.NATIVE="N",l=c.POLYFILL="P";t.exports=c},8554:function(t){"use strict";t.exports=function(t){return null==t}},111:function(t,e,r){"use strict";var n=r(614),o=r(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===i}:function(t){return"object"==typeof t?null!==t:n(t)}},1913:function(t){"use strict";t.exports=!1},2190:function(t,e,r){"use strict";var n=r(5005),o=r(614),i=r(7976),c=r(3307),a=Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return o(e)&&i(e.prototype,a(t))}},6244:function(t,e,r){"use strict";var n=r(7466);t.exports=function(t){return n(t.length)}},6339:function(t,e,r){"use strict";var n=r(1702),o=r(7293),i=r(614),c=r(2597),a=r(9781),u=r(6530).CONFIGURABLE,s=r(2788),l=r(9909),f=l.enforce,p=l.get,m=String,d=Object.defineProperty,v=n("".slice),y=n("".replace),h=n([].join),b=a&&!o((function(){return 8!==d((function(){}),"length",{value:8}).length})),g=String(String).split("String"),E=t.exports=function(t,e,r){"Symbol("===v(m(e),0,7)&&(e="["+y(m(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!c(t,"name")||u&&t.name!==e)&&(a?d(t,"name",{value:e,configurable:!0}):t.name=e),b&&r&&c(r,"arity")&&t.length!==r.arity&&d(t,"length",{value:r.arity});try{r&&c(r,"constructor")&&r.constructor?a&&d(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var n=f(t);return c(n,"source")||(n.source=h(g,"string"==typeof e?e:"")),t};Function.prototype.toString=E((function(){return i(this)&&p(this).source||s(this)}),"toString")},4758:function(t){"use strict";var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},8523:function(t,e,r){"use strict";var n=r(9662),o=TypeError,i=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw o("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new i(t)}},3070:function(t,e,r){"use strict";var n=r(9781),o=r(4664),i=r(3353),c=r(9670),a=r(4948),u=TypeError,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",m="writable";e.f=n?i?function(t,e,r){if(c(t),e=a(e),c(r),"function"==typeof t&&"prototype"===e&&"value"in r&&m in r&&!r[m]){var n=l(t,e);n&&n[m]&&(t[e]=r.value,r={configurable:p in r?r[p]:n[p],enumerable:f in r?r[f]:n[f],writable:!1})}return s(t,e,r)}:s:function(t,e,r){if(c(t),e=a(e),c(r),o)try{return s(t,e,r)}catch(n){}if("get"in r||"set"in r)throw u("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){"use strict";var n=r(9781),o=r(6916),i=r(5296),c=r(9114),a=r(5656),u=r(4948),s=r(2597),l=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=a(t),e=u(e),l)try{return f(t,e)}catch(r){}if(s(t,e))return c(!o(i.f,t,e),t[e])}},8006:function(t,e,r){"use strict";var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:function(t,e){"use strict";e.f=Object.getOwnPropertySymbols},7976:function(t,e,r){"use strict";var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:function(t,e,r){"use strict";var n=r(1702),o=r(2597),i=r(5656),c=r(1318).indexOf,a=r(3501),u=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,l=[];for(r in n)!o(a,r)&&o(n,r)&&u(l,r);for(;e.length>s;)o(n,r=e[s++])&&(~c(l,r)||u(l,r));return l}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},2140:function(t,e,r){"use strict";var n=r(6916),o=r(614),i=r(111),c=TypeError;t.exports=function(t,e){var r,a;if("string"===e&&o(r=t.toString)&&!i(a=n(r,t)))return a;if(o(r=t.valueOf)&&!i(a=n(r,t)))return a;if("string"!==e&&o(r=t.toString)&&!i(a=n(r,t)))return a;throw c("Can't convert object to primitive value")}},3887:function(t,e,r){"use strict";var n=r(5005),o=r(1702),i=r(8006),c=r(5181),a=r(9670),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=c.f;return r?u(e,r(t)):e}},2492:function(t,e,r){"use strict";var n=r(7854);t.exports=n.Promise},9478:function(t,e,r){"use strict";var n=r(9670),o=r(111),i=r(8523);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},4488:function(t,e,r){"use strict";var n=r(8554),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,r){"use strict";var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,r){"use strict";var n=r(7854),o=r(3072),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},2309:function(t,e,r){"use strict";var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:function(t,e,r){"use strict";var n=r(9670),o=r(9483),i=r(8554),c=r(5112)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||i(r=n(a)[c])?e:o(r)}},6293:function(t,e,r){"use strict";var n=r(7392),o=r(7293),i=r(7854).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},1400:function(t,e,r){"use strict";var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:function(t,e,r){"use strict";var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:function(t,e,r){"use strict";var n=r(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},7466:function(t,e,r){"use strict";var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,e,r){"use strict";var n=r(4488),o=Object;t.exports=function(t){return o(n(t))}},7593:function(t,e,r){"use strict";var n=r(6916),o=r(111),i=r(2190),c=r(8173),a=r(2140),u=r(5112),s=TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var r,u=c(t,l);if(u){if(void 0===e&&(e="default"),r=n(u,t,e),!o(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,r){"use strict";var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:function(t,e,r){"use strict";var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},6330:function(t){"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(r){return"Object"}}},9711:function(t,e,r){"use strict";var n=r(1702),o=0,i=Math.random(),c=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},3307:function(t,e,r){"use strict";var n=r(6293);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,r){"use strict";var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,r){"use strict";var n=r(7854),o=r(614),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,e,r){"use strict";var n=r(7854),o=r(2309),i=r(2597),c=r(9711),a=r(6293),u=r(3307),s=n.Symbol,l=o("wks"),f=u?s.for||s:s&&s.withoutSetter||c;t.exports=function(t){return i(l,t)||(l[t]=a&&i(s,t)?s[t]:f("Symbol."+t)),l[t]}},7727:function(t,e,r){"use strict";var n=r(2109),o=r(1913),i=r(2492),c=r(7293),a=r(5005),u=r(614),s=r(6707),l=r(9478),f=r(8052),p=i&&i.prototype;if(n({target:"Promise",proto:!0,real:!0,forced:!!i&&c((function(){p.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=s(this,a("Promise")),r=u(t);return this.then(r?function(r){return l(e,t()).then((function(){return r}))}:t,r?function(r){return l(e,t()).then((function(){throw r}))}:t)}}),!o&&u(i)){var m=a("Promise").prototype.finally;p.finally!==m&&f(p,"finally",m,{unsafe:!0})}},3403:function(t,e,r){"use strict";var n=r(4836);e.M=void 0;var o=n(r(434)),i=n(r(7071)),c=n(r(7294)),a=n(r(5697)),u=["children"],s=c.default.forwardRef((function(t,e){var r=t.children,n=(0,i.default)(t,u);return c.default.createElement("a",(0,o.default)({ref:e},n,{onClick:function(t){"function"==typeof n.onClick&&n.onClick(t);var e=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(e=!1),n.target&&"_self"!==n.target.toLowerCase()&&(e=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:n.href,transport_type:e?"beacon":"",event_callback:function(){e&&(document.location=n.href)}}):e&&(document.location=n.href),!1}}),r)}));e.M=s,s.propTypes={href:a.default.string,target:a.default.string,onClick:a.default.func}},2875:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(7294),o=r(5444),i=r(3403),c=r(9295),a=r.p+"static/footer-map-c5a27c2bcc131d32b5791b14dd52d87f.png";var u=()=>{const t=(new Date).getFullYear();return n.createElement("footer",{className:"footer-area bg-color"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-4 col-sm-6"},n.createElement("div",{className:"single-footer-widget"},n.createElement("a",{href:"/",className:"logo"},n.createElement("img",{src:c.Z,alt:"logo"})),n.createElement("p",null,"Una solución de ",n.createElement("a",{href:"https://domainmx.mx"},n.createElement("b",null,"do{main}"))),n.createElement("ul",{className:"social-link"},n.createElement("li",null,n.createElement(i.M,{to:"https://twitter.com/domainmexico",className:"d-block",target:"_blank",rel:"noreferrer"},n.createElement("i",{className:"bx bxl-twitter"}))),n.createElement("li",null,n.createElement(i.M,{to:"https://www.linkedin.com/company/do-main",className:"d-block",target:"_blank",rel:"noreferrer"},n.createElement("i",{className:"bx bxl-linkedin"})))))),n.createElement("div",{className:"col-lg-2 col-sm-6"},n.createElement("div",{className:"single-footer-widget pl-5"},n.createElement("h3",null,'"El Intra"'),n.createElement("ul",{className:"footer-links-list"},n.createElement("li",null,n.createElement(o.rU,{to:"/"},"Home")),n.createElement("li",null,n.createElement(o.rU,{to:"/about-us"},"Acerca de")),n.createElement("li",null,n.createElement(o.rU,{to:"/contact",className:"default-btn"},n.createElement("i",{className:"flaticon-right"})," Contáctanos ",n.createElement("span",null)))))),n.createElement("div",{className:"col-lg-2 col-sm-6"},n.createElement("div",{className:"single-footer-widget"},n.createElement("h3",null,"Recursos"),n.createElement("ul",{className:"footer-links-list"},n.createElement("li",null,n.createElement(o.rU,{to:"/testimonials"},"Testimonios")),n.createElement("li",null,n.createElement(o.rU,{to:"/services"},"Ventajas"))))),n.createElement("div",{className:"col-lg-4 col-sm-6"},n.createElement("div",{className:"single-footer-widget"},n.createElement("h3",null,"Nosotros"),n.createElement("ul",{className:"footer-contact-info"},n.createElement("li",null,n.createElement("i",{className:"bx bx-map"}),"Prolongación Vasco de Quiroga #3735",n.createElement("br",null),"CDMX"),n.createElement("li",null,n.createElement("i",{className:"bx bx-phone-call"}),n.createElement("a",{href:"tel:+44587154756"},"(55) 55 5252 3629")),n.createElement("li",null,n.createElement("i",{className:"bx bx-envelope"}),n.createElement("a",{href:"mailto:contacto@domainmx.mx"},"contacto@domainmx.mx")))))),n.createElement("div",{className:"footer-bottom-area"},n.createElement("div",{className:"row align-items-center"},n.createElement("div",{className:"col-lg-6 col-md-6"},n.createElement("p",null,"Copyright @",t," ",n.createElement("strong",null,"do{main} MX")," Derechos reservados ")),n.createElement("div",{className:"col-lg-6 col-md-6"},n.createElement("ul",null,n.createElement("li",null,n.createElement(o.rU,{to:"/privacy-policy"},"Política de privacidad")),n.createElement("li",null,n.createElement(o.rU,{to:"/terms-of-service"},"Términos y condiciones"))))))),n.createElement("div",{className:"footer-map"},n.createElement("img",{src:a,alt:"footer-logo"})))}},7154:function(t,e,r){"use strict";r.d(e,{Z:function(){return ht}});var n=r(7294),o=r(8525);var i,c,a,u,s=t=>{let{scrollStepInPx:e,delayInMs:r}=t;const[o,i]=n.useState(!1),c=n.useRef(null);n.useEffect((()=>{document.addEventListener("scroll",(()=>{window.scrollY>170?i(!0):i(!1)}))}),[]);const a=()=>{0===window.pageYOffset&&clearInterval(c.current),window.scroll(0,window.pageYOffset-e)},u=()=>{c.current=setInterval(a,r)};return n.createElement(n.Fragment,null,n.createElement("div",{className:"go-top "+(o?"active":""),onClick:u,role:"button",tabIndex:"0","aria-hidden":"true"},n.createElement("i",{className:"flaticon-up"})))},l=r(5697),f=r.n(l),p=r(4839),m=r.n(p),d=r(2993),v=r.n(d),y=r(6494),h=r.n(y),b="bodyAttributes",g="htmlAttributes",E="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(t){return w[t]})),"charset"),x="cssText",S="href",O="http-equiv",C="innerHTML",A="itemprop",j="name",P="property",k="rel",N="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",_="encodeSpecialCharacters",F="onChangeClientState",D="titleTemplate",U=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),z=[w.NOSCRIPT,w.SCRIPT,w.STYLE],H="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},K=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},V=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(t){var e=Q(t,w.TITLE),r=Q(t,D);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=Q(t,M);return e||n||void 0},G=function(t){return Q(t,F)||function(){}},Z=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return q({},t,e)}),{})},X=function(t,e){return e.filter((function(t){return void 0!==t[w.BASE]})).map((function(t){return t[w.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e}),[])},$=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&nt("Helmet: "+t+' should be of type "Array". Instead found type "'+B(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,i=Object.keys(t),c=0;c<i.length;c++){var a=i[c],u=a.toLowerCase();-1===e.indexOf(u)||r===k&&"canonical"===t[r].toLowerCase()||u===k&&"stylesheet"===t[u].toLowerCase()||(r=u),-1===e.indexOf(a)||a!==C&&a!==x&&a!==A||(r=a)}if(!r||!t[r])return!1;var s=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),c=0;c<i.length;c++){var a=i[c],u=h()({},n[a],o[a]);n[a]=u}return t}),[]).reverse()},Q=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},J=(i=Date.now(),function(t){var e=Date.now();e-i>16?(i=e,t(e)):setTimeout((function(){J(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,rt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:r.g.cancelAnimationFrame||tt,nt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,c=t.metaTags,a=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(w.BODY,n),ut(w.HTML,o),at(f,p);var m={baseTag:st(w.BASE,r),linkTags:st(w.LINK,i),metaTags:st(w.META,c),noscriptTags:st(w.NOSCRIPT,a),scriptTags:st(w.SCRIPT,s),styleTags:st(w.STYLE,l)},d={},v={};Object.keys(m).forEach((function(t){var e=m[t],r=e.newTags,n=e.oldTags;r.length&&(d[t]=r),n.length&&(v[t]=m[t].oldTags)})),e&&e(),u(t,d,v)},ct=function(t){return Array.isArray(t)?t.join(""):t},at=function(t,e){void 0!==t&&document.title!==t&&(document.title=ct(t)),ut(w.TITLE,e)},ut=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(H),o=n?n.split(","):[],i=[].concat(o),c=Object.keys(e),a=0;a<c.length;a++){var u=c[a],s=e[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(H):r.getAttribute(H)!==c.join(",")&&r.setAttribute(H,c.join(","))}},st=function(t,e){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(t+"["+H+"]"),o=Array.prototype.slice.call(n),i=[],c=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===C)r.innerHTML=e.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var a=void 0===e[n]?"":e[n];r.setAttribute(n,a)}r.setAttribute(H,"true"),o.some((function(t,e){return c=e,r.isEqualNode(t)}))?o.splice(c,1):i.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[L[r]||r]=t[r],e}),e)},pt=function(t,e,r){switch(t){case w.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(o={key:t})[H]=!0,i=ft(r,o),[n.createElement(w.TITLE,i,t)];var t,r,o,i},toString:function(){return function(t,e,r,n){var o=lt(r),i=ct(e);return o?"<"+t+" "+H+'="true" '+o+">"+V(i,n)+"</"+t+">":"<"+t+" "+H+'="true">'+V(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case b:case g:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var o,i=((o={key:r})[H]=!0,o);return Object.keys(e).forEach((function(t){var r=L[t]||t;if(r===C||r===x){var n=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=e[t]})),n.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===C||t===x)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+V(n[e],r)+'"';return t?t+" "+o:o}),""),i=n.innerHTML||n.cssText||"",c=-1===z.indexOf(t);return e+"<"+t+" "+H+'="true" '+o+(c?"/>":">"+i+"</"+t+">")}),"")}(t,e,r)}}}},mt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,c=t.metaTags,a=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(w.BASE,e,n),bodyAttributes:pt(b,r,n),htmlAttributes:pt(g,o,n),link:pt(w.LINK,i,n),meta:pt(w.META,c,n),noscript:pt(w.NOSCRIPT,a,n),script:pt(w.SCRIPT,u,n),style:pt(w.STYLE,s,n),title:pt(w.TITLE,{title:f,titleAttributes:p},n)}},dt=m()((function(t){return{baseTag:X([S,I],t),bodyAttributes:Z(b,t),defer:Q(t,R),encode:Q(t,_),htmlAttributes:Z(g,t),linkTags:$(w.LINK,[k,S],t),metaTags:$(w.META,[j,T,O,P,A],t),noscriptTags:$(w.NOSCRIPT,[C],t),onChangeClientState:G(t),scriptTags:$(w.SCRIPT,[N,C],t),styleTags:$(w.STYLE,[x],t),title:W(t),titleAttributes:Z(E,t)}}),(function(t){ot&&rt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),mt)((function(){return null})),vt=(c=dt,u=a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!v()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:e};case w.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return q({},n,((e={})[r.type]=[].concat(n[r.type]||[],[q({},o,this.mapNestedChildrenToProps(r,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,i=t.newChildProps,c=t.nestedChildren;switch(n.type){case w.TITLE:return q({},o,((e={})[n.type]=c,e.titleAttributes=q({},i),e));case w.BODY:return q({},o,{bodyAttributes:q({},i)});case w.HTML:return q({},o,{htmlAttributes:q({},i)})}return q({},o,((r={})[n.type]=q({},i),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=q({},e);return Object.keys(t).forEach((function(e){var n;r=q({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,o={};return n.Children.forEach(t,(function(t){if(t&&t.props){var n=t.props,i=n.children,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[U[r]||r]=t[r],e}),e)}(K(n,["children"]));switch(r.warnOnInvalidChildren(t,i),t.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:o=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:o,newChildProps:c,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(o,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=K(t,["children"]),o=q({},r);return e&&(o=this.mapChildrenToProps(e,o)),n.createElement(c,o)},Y(e,null,[{key:"canUseDOM",set:function(t){c.canUseDOM=t}}]),e}(n.Component),a.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=c.peek,a.rewind=function(){var t=c.rewind();return t||(t=mt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},u);vt.renderStatic=vt.rewind;var yt=()=>n.createElement("div",null,n.createElement(vt,null,n.createElement("title",null,"Reporte Regulatorio - Para todas las necesidades de cumplimiento y automatización de los RRs con la CNSF"),n.createElement("meta",{name:"description",content:"Suite IntraVR360 - Cumplimiento regulatorio CNSF + automatización y validación"}),n.createElement("meta",{name:"og:title",property:"og:title",content:"Suite IntraVR360 - Cumplimiento regulatorio CNSF + automatización y validación"}),n.createElement("meta",{name:"twitter:card",content:"Suite IntraVR360 - Cumplimiento regulatorio CNSF + automatización y validación"}),n.createElement("link",{rel:"canonical",href:"https://reporteregulatorio.mx/"}),n.createElement("meta",{property:"og:image",content:"https://reporteregulatorio.mx/static/logo-dd4d191036840e7cdde30cac4367d8a0.png"})));var ht=t=>{let{children:e}=t;return n.createElement(o.Wh,null,n.createElement(yt,null),e,n.createElement(s,{scrollStepInPx:"100",delayInMs:"10.50"}))}},8889:function(t,e,r){"use strict";r.d(e,{d:function(){return n}});const n=(0,r(8525).cn)({key:"collapsedState",default:!0})},9295:function(t,e,r){"use strict";e.Z=r.p+"static/logo-dd4d191036840e7cdde30cac4367d8a0.png"}}]);
//# sourceMappingURL=b70d1fccf55534ffd7014e8f059c957ec6e9c301-d9fd5a11029017e00b71.js.map