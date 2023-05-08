import{a as D}from"./_commonjsHelpers.87174ba5.js";function T(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var $={exports:{}},r={},y=Symbol.for("react.element"),V=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),M=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),R=Symbol.iterator;
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function W(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=R&&e[R]||e["@@iterator"])?e:null}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,C={};function p(e,t,r){this.props=e,this.context=t,this.refs=C,this.updater=r||g}function O(){}function v(e,t,r){this.props=e,this.context=t,this.refs=C,this.updater=r||g}p.prototype.isReactComponent={},p.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=p.prototype;var S=v.prototype=new O;S.constructor=v,j(S,p.prototype),S.isPureReactComponent=!0;var k=Array.isArray,x=Object.prototype.hasOwnProperty,E={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,r){var n,o={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)x.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var i=Array(c),l=0;l<c;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:y,type:e,key:u,ref:a,props:o,_owner:E.current}}function G(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function b(e){return"object"==typeof e&&null!==e&&e.$$typeof===y}function J(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}var w=/\/+/g;function m(e,t){return"object"==typeof e&&null!==e&&null!=e.key?J(""+e.key):t.toString(36)}function _(e,t,r,n,o){var u=typeof e;("undefined"===u||"boolean"===u)&&(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case y:case V:a=!0}}if(a)return o=o(a=e),e=""===n?"."+m(a,0):n,k(o)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),_(o,t,r,"",(function(e){return e}))):null!=o&&(b(o)&&(o=G(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=""===n?".":n+":",k(e))for(var c=0;c<e.length;c++){var i=n+m(u=e[c],c);a+=_(u,t,r,i,o)}else if("function"==typeof(i=W(e)))for(e=i.call(e),c=0;!(u=e.next()).done;)a+=_(u=u.value,t,r,i=n+m(u,c++),o);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function d(e,t,r){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function K(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)}),(function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var l={current:null},h={transition:null},Q={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:h,ReactCurrentOwner:E};r.Children={map:d,forEach:function(e,t,r){d(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return d(e,(function(){t++})),t},toArray:function(e){return d(e,(function(e){return e}))||[]},only:function(e){if(!b(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=p,r.Fragment=F,r.Profiler=q,r.PureComponent=v,r.StrictMode=U,r.Suspense=z,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,r.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=j({},e.props),o=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=E.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in t)x.call(t,i)&&!P.hasOwnProperty(i)&&(n[i]=void 0===t[i]&&void 0!==c?c[i]:t[i])}var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){c=Array(i);for(var l=0;l<i;l++)c[l]=arguments[l+2];n.children=c}return{$$typeof:y,type:e.type,key:o,ref:u,props:n,_owner:a}},r.createContext=function(e){return(e={$$typeof:M,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:L,_context:e},e.Consumer=e},r.createElement=I,r.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:N,render:e}},r.isValidElement=b,r.lazy=function(e){return{$$typeof:H,_payload:{_status:-1,_result:e},_init:K}},r.memo=function(e,t){return{$$typeof:B,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=h.transition;h.transition={};try{e()}finally{h.transition=t}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,t){return l.current.useCallback(e,t)},r.useContext=function(e){return l.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return l.current.useDeferredValue(e)},r.useEffect=function(e,t){return l.current.useEffect(e,t)},r.useId=function(){return l.current.useId()},r.useImperativeHandle=function(e,t,r){return l.current.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return l.current.useMemo(e,t)},r.useReducer=function(e,t,r){return l.current.useReducer(e,t,r)},r.useRef=function(e){return l.current.useRef(e)},r.useState=function(e){return l.current.useState(e)},r.useSyncExternalStore=function(e,t,r){return l.current.useSyncExternalStore(e,t,r)},r.useTransition=function(){return l.current.useTransition()},r.version="18.2.0",$.exports=r;var A=$.exports;const Y=D(A),Z=T({__proto__:null,default:Y},[A]);export{Y as R,Z as a,A as r};