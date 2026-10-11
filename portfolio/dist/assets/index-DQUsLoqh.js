(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function qm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var mu={exports:{}},Pa={},gu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function Ix(){if(Rp)return gt;Rp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=y&&E[y]||E["@@iterator"],typeof E=="function"?E:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function _(E,W,xe){this.props=E,this.context=W,this.refs=A,this.updater=xe||M}_.prototype.isReactComponent={},_.prototype.setState=function(E,W){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,W,"setState")},_.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function v(){}v.prototype=_.prototype;function k(E,W,xe){this.props=E,this.context=W,this.refs=A,this.updater=xe||M}var I=k.prototype=new v;I.constructor=k,b(I,_.prototype),I.isPureReactComponent=!0;var N=Array.isArray,Z=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function q(E,W,xe){var X,ee={},de=null,ie=null;if(W!=null)for(X in W.ref!==void 0&&(ie=W.ref),W.key!==void 0&&(de=""+W.key),W)Z.call(W,X)&&!F.hasOwnProperty(X)&&(ee[X]=W[X]);var ge=arguments.length-2;if(ge===1)ee.children=xe;else if(1<ge){for(var be=Array(ge),Le=0;Le<ge;Le++)be[Le]=arguments[Le+2];ee.children=be}if(E&&E.defaultProps)for(X in ge=E.defaultProps,ge)ee[X]===void 0&&(ee[X]=ge[X]);return{$$typeof:s,type:E,key:de,ref:ie,props:ee,_owner:z.current}}function P(E,W){return{$$typeof:s,type:E.type,key:W,ref:E.ref,props:E.props,_owner:E._owner}}function R(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function G(E){var W={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(xe){return W[xe]})}var ue=/\/+/g;function ne(E,W){return typeof E=="object"&&E!==null&&E.key!=null?G(""+E.key):W.toString(36)}function he(E,W,xe,X,ee){var de=typeof E;(de==="undefined"||de==="boolean")&&(E=null);var ie=!1;if(E===null)ie=!0;else switch(de){case"string":case"number":ie=!0;break;case"object":switch(E.$$typeof){case s:case e:ie=!0}}if(ie)return ie=E,ee=ee(ie),E=X===""?"."+ne(ie,0):X,N(ee)?(xe="",E!=null&&(xe=E.replace(ue,"$&/")+"/"),he(ee,W,xe,"",function(Le){return Le})):ee!=null&&(R(ee)&&(ee=P(ee,xe+(!ee.key||ie&&ie.key===ee.key?"":(""+ee.key).replace(ue,"$&/")+"/")+E)),W.push(ee)),1;if(ie=0,X=X===""?".":X+":",N(E))for(var ge=0;ge<E.length;ge++){de=E[ge];var be=X+ne(de,ge);ie+=he(de,W,xe,be,ee)}else if(be=S(E),typeof be=="function")for(E=be.call(E),ge=0;!(de=E.next()).done;)de=de.value,be=X+ne(de,ge++),ie+=he(de,W,xe,be,ee);else if(de==="object")throw W=String(E),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ie}function me(E,W,xe){if(E==null)return E;var X=[],ee=0;return he(E,X,"","",function(de){return W.call(xe,de,ee++)}),X}function ce(E){if(E._status===-1){var W=E._result;W=W(),W.then(function(xe){(E._status===0||E._status===-1)&&(E._status=1,E._result=xe)},function(xe){(E._status===0||E._status===-1)&&(E._status=2,E._result=xe)}),E._status===-1&&(E._status=0,E._result=W)}if(E._status===1)return E._result.default;throw E._result}var fe={current:null},H={transition:null},le={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:H,ReactCurrentOwner:z};function L(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:me,forEach:function(E,W,xe){me(E,function(){W.apply(this,arguments)},xe)},count:function(E){var W=0;return me(E,function(){W++}),W},toArray:function(E){return me(E,function(W){return W})||[]},only:function(E){if(!R(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},gt.Component=_,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=k,gt.StrictMode=r,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,gt.act=L,gt.cloneElement=function(E,W,xe){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var X=b({},E.props),ee=E.key,de=E.ref,ie=E._owner;if(W!=null){if(W.ref!==void 0&&(de=W.ref,ie=z.current),W.key!==void 0&&(ee=""+W.key),E.type&&E.type.defaultProps)var ge=E.type.defaultProps;for(be in W)Z.call(W,be)&&!F.hasOwnProperty(be)&&(X[be]=W[be]===void 0&&ge!==void 0?ge[be]:W[be])}var be=arguments.length-2;if(be===1)X.children=xe;else if(1<be){ge=Array(be);for(var Le=0;Le<be;Le++)ge[Le]=arguments[Le+2];X.children=ge}return{$$typeof:s,type:E.type,key:ee,ref:de,props:X,_owner:ie}},gt.createContext=function(E){return E={$$typeof:u,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:l,_context:E},E.Consumer=E},gt.createElement=q,gt.createFactory=function(E){var W=q.bind(null,E);return W.type=E,W},gt.createRef=function(){return{current:null}},gt.forwardRef=function(E){return{$$typeof:d,render:E}},gt.isValidElement=R,gt.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:ce}},gt.memo=function(E,W){return{$$typeof:g,type:E,compare:W===void 0?null:W}},gt.startTransition=function(E){var W=H.transition;H.transition={};try{E()}finally{H.transition=W}},gt.unstable_act=L,gt.useCallback=function(E,W){return fe.current.useCallback(E,W)},gt.useContext=function(E){return fe.current.useContext(E)},gt.useDebugValue=function(){},gt.useDeferredValue=function(E){return fe.current.useDeferredValue(E)},gt.useEffect=function(E,W){return fe.current.useEffect(E,W)},gt.useId=function(){return fe.current.useId()},gt.useImperativeHandle=function(E,W,xe){return fe.current.useImperativeHandle(E,W,xe)},gt.useInsertionEffect=function(E,W){return fe.current.useInsertionEffect(E,W)},gt.useLayoutEffect=function(E,W){return fe.current.useLayoutEffect(E,W)},gt.useMemo=function(E,W){return fe.current.useMemo(E,W)},gt.useReducer=function(E,W,xe){return fe.current.useReducer(E,W,xe)},gt.useRef=function(E){return fe.current.useRef(E)},gt.useState=function(E){return fe.current.useState(E)},gt.useSyncExternalStore=function(E,W,xe){return fe.current.useSyncExternalStore(E,W,xe)},gt.useTransition=function(){return fe.current.useTransition()},gt.version="18.3.1",gt}var Np;function jd(){return Np||(Np=1,gu.exports=Ix()),gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function Ux(){if(Pp)return Pa;Pp=1;var s=jd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,g){var x,y={},S=null,M=null;g!==void 0&&(S=""+g),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(M=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(y[x]=h[x]);if(d&&d.defaultProps)for(x in h=d.defaultProps,h)y[x]===void 0&&(y[x]=h[x]);return{$$typeof:e,type:d,key:S,ref:M,props:y,_owner:o.current}}return Pa.Fragment=n,Pa.jsx=u,Pa.jsxs=u,Pa}var Lp;function kx(){return Lp||(Lp=1,mu.exports=Ux()),mu.exports}var m=kx(),zt=jd();const Fx=qm(zt);var nl={},xu={exports:{}},Rn={},vu={exports:{}},_u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function Ox(){return Dp||(Dp=1,(function(s){function e(H,le){var L=H.length;H.push(le);e:for(;0<L;){var E=L-1>>>1,W=H[E];if(0<o(W,le))H[E]=le,H[L]=W,L=E;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var le=H[0],L=H.pop();if(L!==le){H[0]=L;e:for(var E=0,W=H.length,xe=W>>>1;E<xe;){var X=2*(E+1)-1,ee=H[X],de=X+1,ie=H[de];if(0>o(ee,L))de<W&&0>o(ie,ee)?(H[E]=ie,H[de]=L,E=de):(H[E]=ee,H[X]=L,E=X);else if(de<W&&0>o(ie,L))H[E]=ie,H[de]=L,E=de;else break e}}return le}function o(H,le){var L=H.sortIndex-le.sortIndex;return L!==0?L:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],g=[],x=1,y=null,S=3,M=!1,b=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(H){for(var le=n(g);le!==null;){if(le.callback===null)r(g);else if(le.startTime<=H)r(g),le.sortIndex=le.expirationTime,e(h,le);else break;le=n(g)}}function N(H){if(A=!1,I(H),!b)if(n(h)!==null)b=!0,ce(Z);else{var le=n(g);le!==null&&fe(N,le.startTime-H)}}function Z(H,le){b=!1,A&&(A=!1,v(q),q=-1),M=!0;var L=S;try{for(I(le),y=n(h);y!==null&&(!(y.expirationTime>le)||H&&!G());){var E=y.callback;if(typeof E=="function"){y.callback=null,S=y.priorityLevel;var W=E(y.expirationTime<=le);le=s.unstable_now(),typeof W=="function"?y.callback=W:y===n(h)&&r(h),I(le)}else r(h);y=n(h)}if(y!==null)var xe=!0;else{var X=n(g);X!==null&&fe(N,X.startTime-le),xe=!1}return xe}finally{y=null,S=L,M=!1}}var z=!1,F=null,q=-1,P=5,R=-1;function G(){return!(s.unstable_now()-R<P)}function ue(){if(F!==null){var H=s.unstable_now();R=H;var le=!0;try{le=F(!0,H)}finally{le?ne():(z=!1,F=null)}}else z=!1}var ne;if(typeof k=="function")ne=function(){k(ue)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,me=he.port2;he.port1.onmessage=ue,ne=function(){me.postMessage(null)}}else ne=function(){_(ue,0)};function ce(H){F=H,z||(z=!0,ne())}function fe(H,le){q=_(function(){H(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,ce(Z))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(H){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var L=S;S=le;try{return H()}finally{S=L}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var L=S;S=H;try{return le()}finally{S=L}},s.unstable_scheduleCallback=function(H,le,L){var E=s.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?E+L:E):L=E,H){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=L+W,H={id:x++,callback:le,priorityLevel:H,startTime:L,expirationTime:W,sortIndex:-1},L>E?(H.sortIndex=L,e(g,H),n(h)===null&&H===n(g)&&(A?(v(q),q=-1):A=!0,fe(N,L-E))):(H.sortIndex=W,e(h,H),b||M||(b=!0,ce(Z))),H},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(H){var le=S;return function(){var L=S;S=le;try{return H.apply(this,arguments)}finally{S=L}}}})(_u)),_u}var Ip;function zx(){return Ip||(Ip=1,vu.exports=Ox()),vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function Bx(){if(Up)return Rn;Up=1;var s=jd(),e=zx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function S(t){return h.call(y,t)?!0:h.call(x,t)?!1:g.test(t)?y[t]=!0:(x[t]=!0,!1)}function M(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,i,a,c){if(i===null||typeof i>"u"||M(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,a,c,f,p,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function k(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,k);_[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,k);_[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,k);_[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function I(t,i,a,c){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,f,c)&&(a=null),c||f===null?S(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Z=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),G=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var L=Object.assign,E;function W(t){if(E===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);E=i&&i[1]||""}return`
`+E+t}var xe=!1;function X(t,i){if(!t||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var c=re}Reflect.construct(t,[],i)}else{try{i.call()}catch(re){c=re}t.call(i.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var f=re.stack.split(`
`),p=c.stack.split(`
`),w=f.length-1,U=p.length-1;1<=w&&0<=U&&f[w]!==p[U];)U--;for(;1<=w&&0<=U;w--,U--)if(f[w]!==p[U]){if(w!==1||U!==1)do if(w--,U--,0>U||f[w]!==p[U]){var B=`
`+f[w].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=w&&0<=U);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?W(t):""}function ee(t){switch(t.tag){case 5:return W(t.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return t=X(t.type,!1),t;case 11:return t=X(t.type.render,!1),t;case 1:return t=X(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case z:return"Portal";case P:return"Profiler";case q:return"StrictMode";case ne:return"Suspense";case he:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ue:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case ce:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}function ie(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(t){var i=be(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,p.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Je(t){t._valueTracker||(t._valueTracker=Le(t))}function $e(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=be(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function O(t,i){var a=i.checked;return L({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Ct(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function it(t,i){i=i.checked,i!=null&&I(t,"checked",i,!1)}function tt(t,i){it(t,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?xt(t,i.type,a):i.hasOwnProperty("defaultValue")&&xt(t,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ve(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function xt(t,i,a){(i!=="number"||lt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Fe=Array.isArray;function D(t,i,a,c){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&c&&(t[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return L({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function te(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Fe(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ge(a)}}function _e(t,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function ye(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function pe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?pe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Re,Ue=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function dt(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Oe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function Ze(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function rt(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Ze(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,f):t[a]=f}}var Be=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ct(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function Y(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ne=null,oe=null,ve=null;function Ie(t){if(t=ga(t)){if(typeof Ne!="function")throw Error(n(280));var i=t.stateNode;i&&(i=xo(i),Ne(t.stateNode,t.type,i))}}function De(t){oe?ve?ve.push(t):ve=[t]:oe=t}function ut(){if(oe){var t=oe,i=ve;if(ve=oe=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function Ut(t,i){return t(i)}function qt(){}var St=!1;function Mn(t,i,a){if(St)return t(i,a);St=!0;try{return Ut(t,i,a)}finally{St=!1,(oe!==null||ve!==null)&&(qt(),ut())}}function xn(t,i){var a=t.stateNode;if(a===null)return null;var c=xo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var is=!1;if(d)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){is=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{is=!1}function wi(t,i,a,c,f,p,w,U,B){var re=Array.prototype.slice.call(arguments,3);try{i.apply(a,re)}catch(Me){this.onError(Me)}}var bi=!1,Tr=null,Ar=!1,$i=null,Ka={onError:function(t){bi=!0,Tr=t}};function rs(t,i,a,c,f,p,w,U,B){bi=!1,Tr=null,wi.apply(Ka,arguments)}function Ja(t,i,a,c,f,p,w,U,B){if(rs.apply(this,arguments),bi){if(bi){var re=Tr;bi=!1,Tr=null}else throw Error(n(198));Ar||(Ar=!0,$i=re)}}function fi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Za(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Qa(t){if(fi(t)!==t)throw Error(n(188))}function Fl(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return Qa(f),t;if(p===c)return Qa(f),i;p=p.sibling}throw Error(n(188))}if(a.return!==c.return)a=f,c=p;else{for(var w=!1,U=f.child;U;){if(U===a){w=!0,a=f,c=p;break}if(U===c){w=!0,c=f,a=p;break}U=U.sibling}if(!w){for(U=p.child;U;){if(U===a){w=!0,a=p,c=f;break}if(U===c){w=!0,c=p,a=f;break}U=U.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function C(t){return t=Fl(t),t!==null?$(t):null}function $(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=$(t);if(i!==null)return i;t=t.sibling}return null}var se=e.unstable_scheduleCallback,ae=e.unstable_cancelCallback,K=e.unstable_shouldYield,Ce=e.unstable_requestPaint,Te=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,je=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,ot=e.unstable_NormalPriority,Ye=e.unstable_LowPriority,_t=e.unstable_IdlePriority,Tt=null,vt=null;function ln(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(Tt,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:wt,Ke=Math.log,Jn=Math.LN2;function wt(t){return t>>>=0,t===0?32:31-(Ke(t)/Jn|0)|0}var cn=64,Zn=4194304;function $t(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hi(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,f=t.suspendedLanes,p=t.pingedLanes,w=a&268435455;if(w!==0){var U=w&~f;U!==0?c=$t(U):(p&=w,p!==0&&(c=$t(p)))}else w=a&~f,w!==0?c=$t(w):p!==0&&(c=$t(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-ft(i),f=1<<a,c|=t[a],i&=~f;return c}function Dt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hn(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var w=31-ft(p),U=1<<w,B=f[w];B===-1?((U&a)===0||(U&c)!==0)&&(f[w]=Dt(U,i)):B<=i&&(t.expiredLanes|=U),p&=~U}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vn(){var t=cn;return cn<<=1,(cn&4194240)===0&&(cn=64),t}function Vn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function En(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ft(i),t[i]=a}function eo(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-ft(a),p=1<<f;i[f]=0,c[f]=-1,t[f]=-1,a&=~p}}function Ol(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-ft(a),f=1<<c;f&i|t[c]&i&&(t[c]|=i),a&=~f}}var Nt=0;function of(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var lf,zl,cf,uf,df,Bl=!1,to=[],Ki=null,Ji=null,Zi=null,ea=new Map,ta=new Map,Qi=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":ea.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(i.pointerId)}}function na(t,i,a,c,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=ga(i),i!==null&&zl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function i0(t,i,a,c,f){switch(i){case"focusin":return Ki=na(Ki,t,i,a,c,f),!0;case"dragenter":return Ji=na(Ji,t,i,a,c,f),!0;case"mouseover":return Zi=na(Zi,t,i,a,c,f),!0;case"pointerover":var p=f.pointerId;return ea.set(p,na(ea.get(p)||null,t,i,a,c,f)),!0;case"gotpointercapture":return p=f.pointerId,ta.set(p,na(ta.get(p)||null,t,i,a,c,f)),!0}return!1}function hf(t){var i=Cr(t.target);if(i!==null){var a=fi(i);if(a!==null){if(i=a.tag,i===13){if(i=Za(a),i!==null){t.blockedOn=i,df(t.priority,function(){cf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Vl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);Rt=c,a.target.dispatchEvent(c),Rt=null}else return i=ga(a),i!==null&&zl(i),t.blockedOn=a,!1;i.shift()}return!0}function pf(t,i,a){no(t)&&a.delete(i)}function r0(){Bl=!1,Ki!==null&&no(Ki)&&(Ki=null),Ji!==null&&no(Ji)&&(Ji=null),Zi!==null&&no(Zi)&&(Zi=null),ea.forEach(pf),ta.forEach(pf)}function ia(t,i){t.blockedOn===i&&(t.blockedOn=null,Bl||(Bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,r0)))}function ra(t){function i(f){return ia(f,t)}if(0<to.length){ia(to[0],t);for(var a=1;a<to.length;a++){var c=to[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Ki!==null&&ia(Ki,t),Ji!==null&&ia(Ji,t),Zi!==null&&ia(Zi,t),ea.forEach(i),ta.forEach(i),a=0;a<Qi.length;a++)c=Qi[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)hf(a),a.blockedOn===null&&Qi.shift()}var ss=N.ReactCurrentBatchConfig,io=!0;function s0(t,i,a,c){var f=Nt,p=ss.transition;ss.transition=null;try{Nt=1,Hl(t,i,a,c)}finally{Nt=f,ss.transition=p}}function a0(t,i,a,c){var f=Nt,p=ss.transition;ss.transition=null;try{Nt=4,Hl(t,i,a,c)}finally{Nt=f,ss.transition=p}}function Hl(t,i,a,c){if(io){var f=Vl(t,i,a,c);if(f===null)sc(t,i,c,ro,a),ff(t,c);else if(i0(f,t,i,a,c))c.stopPropagation();else if(ff(t,c),i&4&&-1<n0.indexOf(t)){for(;f!==null;){var p=ga(f);if(p!==null&&lf(p),p=Vl(t,i,a,c),p===null&&sc(t,i,c,ro,a),p===f)break;f=p}f!==null&&c.stopPropagation()}else sc(t,i,c,null,a)}}var ro=null;function Vl(t,i,a,c){if(ro=null,t=Y(c),t=Cr(t),t!==null)if(i=fi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Za(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ro=t,null}function mf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case je:return 1;case st:return 4;case ot:case Ye:return 16;case _t:return 536870912;default:return 16}default:return 16}}var er=null,Gl=null,so=null;function gf(){if(so)return so;var t,i=Gl,a=i.length,c,f="value"in er?er.value:er.textContent,p=f.length;for(t=0;t<a&&i[t]===f[t];t++);var w=a-t;for(c=1;c<=w&&i[a-c]===f[p-c];c++);return so=f.slice(t,1<c?1-c:void 0)}function ao(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function xf(){return!1}function Dn(t){function i(a,c,f,p,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(p):p[U]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?oo:xf,this.isPropagationStopped=xf,this}return L(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Dn(as),sa=L({},as,{view:0,detail:0}),o0=Dn(sa),Wl,Xl,aa,lo=L({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ql,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Wl=t.screenX-aa.screenX,Xl=t.screenY-aa.screenY):Xl=Wl=0,aa=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),vf=Dn(lo),l0=L({},lo,{dataTransfer:0}),c0=Dn(l0),u0=L({},sa,{relatedTarget:0}),Yl=Dn(u0),d0=L({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),f0=Dn(d0),h0=L({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p0=Dn(h0),m0=L({},as,{data:0}),_f=Dn(m0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=v0[t])?!!i[t]:!1}function ql(){return _0}var y0=L({},sa,{key:function(t){if(t.key){var i=g0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ql,charCode:function(t){return t.type==="keypress"?ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S0=Dn(y0),M0=L({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=Dn(M0),E0=L({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ql}),w0=Dn(E0),b0=L({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),T0=Dn(b0),A0=L({},lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),C0=Dn(A0),R0=[9,13,27,32],$l=d&&"CompositionEvent"in window,oa=null;d&&"documentMode"in document&&(oa=document.documentMode);var N0=d&&"TextEvent"in window&&!oa,Sf=d&&(!$l||oa&&8<oa&&11>=oa),Mf=" ",Ef=!1;function wf(t,i){switch(t){case"keyup":return R0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function P0(t,i){switch(t){case"compositionend":return bf(i);case"keypress":return i.which!==32?null:(Ef=!0,Mf);case"textInput":return t=i.data,t===Mf&&Ef?null:t;default:return null}}function L0(t,i){if(os)return t==="compositionend"||!$l&&wf(t,i)?(t=gf(),so=Gl=er=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sf&&i.locale!=="ko"?null:i.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!D0[t.type]:i==="textarea"}function Af(t,i,a,c){De(c),i=po(i,"onChange"),0<i.length&&(a=new jl("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var la=null,ca=null;function I0(t){Wf(t,0)}function co(t){var i=fs(t);if($e(i))return t}function U0(t,i){if(t==="change")return i}var Cf=!1;if(d){var Kl;if(d){var Jl="oninput"in document;if(!Jl){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),Jl=typeof Rf.oninput=="function"}Kl=Jl}else Kl=!1;Cf=Kl&&(!document.documentMode||9<document.documentMode)}function Nf(){la&&(la.detachEvent("onpropertychange",Pf),ca=la=null)}function Pf(t){if(t.propertyName==="value"&&co(ca)){var i=[];Af(i,ca,t,Y(t)),Mn(I0,i)}}function k0(t,i,a){t==="focusin"?(Nf(),la=i,ca=a,la.attachEvent("onpropertychange",Pf)):t==="focusout"&&Nf()}function F0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return co(ca)}function O0(t,i){if(t==="click")return co(i)}function z0(t,i){if(t==="input"||t==="change")return co(i)}function B0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:B0;function ua(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!Qn(t[f],i[f]))return!1}return!0}function Lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Df(t,i){var a=Lf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lf(a)}}function If(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?If(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Uf(){for(var t=window,i=lt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=lt(t.document)}return i}function Zl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function H0(t){var i=Uf(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&If(a.ownerDocument.documentElement,a)){if(c!==null&&Zl(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!t.extend&&p>c&&(f=c,c=p,p=f),f=Df(a,p);var w=Df(a,c);f&&w&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V0=d&&"documentMode"in document&&11>=document.documentMode,ls=null,Ql=null,da=null,ec=!1;function kf(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ec||ls==null||ls!==lt(c)||(c=ls,"selectionStart"in c&&Zl(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),da&&ua(da,c)||(da=c,c=po(Ql,"onSelect"),0<c.length&&(i=new jl("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ls)))}function uo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var cs={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},tc={},Ff={};d&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function fo(t){if(tc[t])return tc[t];if(!cs[t])return t;var i=cs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ff)return tc[t]=i[a];return t}var Of=fo("animationend"),zf=fo("animationiteration"),Bf=fo("animationstart"),Hf=fo("transitionend"),Vf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,i){Vf.set(t,i),l(i,[t])}for(var nc=0;nc<Gf.length;nc++){var ic=Gf[nc],G0=ic.toLowerCase(),j0=ic[0].toUpperCase()+ic.slice(1);tr(G0,"on"+j0)}tr(Of,"onAnimationEnd"),tr(zf,"onAnimationIteration"),tr(Bf,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Hf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function jf(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,Ja(c,i,void 0,t),t.currentTarget=null}function Wf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var w=c.length-1;0<=w;w--){var U=c[w],B=U.instance,re=U.currentTarget;if(U=U.listener,B!==p&&f.isPropagationStopped())break e;jf(f,U,re),p=B}else for(w=0;w<c.length;w++){if(U=c[w],B=U.instance,re=U.currentTarget,U=U.listener,B!==p&&f.isPropagationStopped())break e;jf(f,U,re),p=B}}}if(Ar)throw t=$i,Ar=!1,$i=null,t}function kt(t,i){var a=i[dc];a===void 0&&(a=i[dc]=new Set);var c=t+"__bubble";a.has(c)||(Xf(i,t,2,!1),a.add(c))}function rc(t,i,a){var c=0;i&&(c|=4),Xf(a,t,c,i)}var ho="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[ho]){t[ho]=!0,r.forEach(function(a){a!=="selectionchange"&&(W0.has(a)||rc(a,!1,t),rc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ho]||(i[ho]=!0,rc("selectionchange",!1,i))}}function Xf(t,i,a,c){switch(mf(i)){case 1:var f=s0;break;case 4:f=a0;break;default:f=Hl}a=f.bind(null,i,a,t),f=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function sc(t,i,a,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var U=c.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;w=w.return}for(;U!==null;){if(w=Cr(U),w===null)return;if(B=w.tag,B===5||B===6){c=p=w;continue e}U=U.parentNode}}c=c.return}Mn(function(){var re=p,Me=Y(a),we=[];e:{var Se=Vf.get(t);if(Se!==void 0){var ke=jl,He=t;switch(t){case"keypress":if(ao(a)===0)break e;case"keydown":case"keyup":ke=S0;break;case"focusin":He="focus",ke=Yl;break;case"focusout":He="blur",ke=Yl;break;case"beforeblur":case"afterblur":ke=Yl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=c0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=w0;break;case Of:case zf:case Bf:ke=f0;break;case Hf:ke=T0;break;case"scroll":ke=o0;break;case"wheel":ke=C0;break;case"copy":case"cut":case"paste":ke=p0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=yf}var We=(i&4)!==0,jt=!We&&t==="scroll",J=We?Se!==null?Se+"Capture":null:Se;We=[];for(var j=re,Q;j!==null;){Q=j;var Ae=Q.stateNode;if(Q.tag===5&&Ae!==null&&(Q=Ae,J!==null&&(Ae=xn(j,J),Ae!=null&&We.push(pa(j,Ae,Q)))),jt)break;j=j.return}0<We.length&&(Se=new ke(Se,He,null,a,Me),we.push({event:Se,listeners:We}))}}if((i&7)===0){e:{if(Se=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",Se&&a!==Rt&&(He=a.relatedTarget||a.fromElement)&&(Cr(He)||He[Ai]))break e;if((ke||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,ke?(He=a.relatedTarget||a.toElement,ke=re,He=He?Cr(He):null,He!==null&&(jt=fi(He),He!==jt||He.tag!==5&&He.tag!==6)&&(He=null)):(ke=null,He=re),ke!==He)){if(We=vf,Ae="onMouseLeave",J="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(We=yf,Ae="onPointerLeave",J="onPointerEnter",j="pointer"),jt=ke==null?Se:fs(ke),Q=He==null?Se:fs(He),Se=new We(Ae,j+"leave",ke,a,Me),Se.target=jt,Se.relatedTarget=Q,Ae=null,Cr(Me)===re&&(We=new We(J,j+"enter",He,a,Me),We.target=Q,We.relatedTarget=jt,Ae=We),jt=Ae,ke&&He)t:{for(We=ke,J=He,j=0,Q=We;Q;Q=us(Q))j++;for(Q=0,Ae=J;Ae;Ae=us(Ae))Q++;for(;0<j-Q;)We=us(We),j--;for(;0<Q-j;)J=us(J),Q--;for(;j--;){if(We===J||J!==null&&We===J.alternate)break t;We=us(We),J=us(J)}We=null}else We=null;ke!==null&&Yf(we,Se,ke,We,!1),He!==null&&jt!==null&&Yf(we,jt,He,We,!0)}}e:{if(Se=re?fs(re):window,ke=Se.nodeName&&Se.nodeName.toLowerCase(),ke==="select"||ke==="input"&&Se.type==="file")var qe=U0;else if(Tf(Se))if(Cf)qe=z0;else{qe=F0;var Qe=k0}else(ke=Se.nodeName)&&ke.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(qe=O0);if(qe&&(qe=qe(t,re))){Af(we,qe,a,Me);break e}Qe&&Qe(t,Se,re),t==="focusout"&&(Qe=Se._wrapperState)&&Qe.controlled&&Se.type==="number"&&xt(Se,"number",Se.value)}switch(Qe=re?fs(re):window,t){case"focusin":(Tf(Qe)||Qe.contentEditable==="true")&&(ls=Qe,Ql=re,da=null);break;case"focusout":da=Ql=ls=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,kf(we,a,Me);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":kf(we,a,Me)}var et;if($l)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else os?wf(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Sf&&a.locale!=="ko"&&(os||at!=="onCompositionStart"?at==="onCompositionEnd"&&os&&(et=gf()):(er=Me,Gl="value"in er?er.value:er.textContent,os=!0)),Qe=po(re,at),0<Qe.length&&(at=new _f(at,t,null,a,Me),we.push({event:at,listeners:Qe}),et?at.data=et:(et=bf(a),et!==null&&(at.data=et)))),(et=N0?P0(t,a):L0(t,a))&&(re=po(re,"onBeforeInput"),0<re.length&&(Me=new _f("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:re}),Me.data=et))}Wf(we,i)})}function pa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function po(t,i){for(var a=i+"Capture",c=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=xn(t,a),p!=null&&c.unshift(pa(t,p,f)),p=xn(t,i),p!=null&&c.push(pa(t,p,f))),t=t.return}return c}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yf(t,i,a,c,f){for(var p=i._reactName,w=[];a!==null&&a!==c;){var U=a,B=U.alternate,re=U.stateNode;if(B!==null&&B===c)break;U.tag===5&&re!==null&&(U=re,f?(B=xn(a,p),B!=null&&w.unshift(pa(a,B,U))):f||(B=xn(a,p),B!=null&&w.push(pa(a,B,U)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var X0=/\r\n?/g,Y0=/\u0000|\uFFFD/g;function qf(t){return(typeof t=="string"?t:""+t).replace(X0,`
`).replace(Y0,"")}function mo(t,i,a){if(i=qf(i),qf(t)!==i&&a)throw Error(n(425))}function go(){}var ac=null,oc=null;function lc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(t){return $f.resolve(null).then(t).catch(K0)}:cc;function K0(t){setTimeout(function(){throw t})}function uc(t,i){var a=i,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){t.removeChild(f),ra(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ra(i)}function nr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Kf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),pi="__reactFiber$"+ds,ma="__reactProps$"+ds,Ai="__reactContainer$"+ds,dc="__reactEvents$"+ds,J0="__reactListeners$"+ds,Z0="__reactHandles$"+ds;function Cr(t){var i=t[pi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ai]||a[pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Kf(t);t!==null;){if(a=t[pi])return a;t=Kf(t)}return i}t=a,a=t.parentNode}return null}function ga(t){return t=t[pi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function xo(t){return t[ma]||null}var fc=[],hs=-1;function ir(t){return{current:t}}function Ft(t){0>hs||(t.current=fc[hs],fc[hs]=null,hs--)}function It(t,i){hs++,fc[hs]=t.current,t.current=i}var rr={},un=ir(rr),wn=ir(!1),Rr=rr;function ps(t,i){var a=t.type.contextTypes;if(!a)return rr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function bn(t){return t=t.childContextTypes,t!=null}function vo(){Ft(wn),Ft(un)}function Jf(t,i,a){if(un.current!==rr)throw Error(n(168));It(un,i),It(wn,a)}function Zf(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,ie(t)||"Unknown",f));return L({},a,c)}function _o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Rr=un.current,It(un,t),It(wn,wn.current),!0}function Qf(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=Zf(t,i,Rr),c.__reactInternalMemoizedMergedChildContext=t,Ft(wn),Ft(un),It(un,t)):Ft(wn),It(wn,a)}var Ci=null,yo=!1,hc=!1;function eh(t){Ci===null?Ci=[t]:Ci.push(t)}function Q0(t){yo=!0,eh(t)}function sr(){if(!hc&&Ci!==null){hc=!0;var t=0,i=Nt;try{var a=Ci;for(Nt=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Ci=null,yo=!1}catch(f){throw Ci!==null&&(Ci=Ci.slice(t+1)),se(je,sr),f}finally{Nt=i,hc=!1}}return null}var ms=[],gs=0,So=null,Mo=0,Gn=[],jn=0,Nr=null,Ri=1,Ni="";function Pr(t,i){ms[gs++]=Mo,ms[gs++]=So,So=t,Mo=i}function th(t,i,a){Gn[jn++]=Ri,Gn[jn++]=Ni,Gn[jn++]=Nr,Nr=t;var c=Ri;t=Ni;var f=32-ft(c)-1;c&=~(1<<f),a+=1;var p=32-ft(i)+f;if(30<p){var w=f-f%5;p=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Ri=1<<32-ft(i)+f|a<<f|c,Ni=p+t}else Ri=1<<p|a<<f|c,Ni=t}function pc(t){t.return!==null&&(Pr(t,1),th(t,1,0))}function mc(t){for(;t===So;)So=ms[--gs],ms[gs]=null,Mo=ms[--gs],ms[gs]=null;for(;t===Nr;)Nr=Gn[--jn],Gn[jn]=null,Ni=Gn[--jn],Gn[jn]=null,Ri=Gn[--jn],Gn[jn]=null}var In=null,Un=null,Ot=!1,ei=null;function nh(t,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ih(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,In=t,Un=nr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,In=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Nr!==null?{id:Ri,overflow:Ni}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,In=t,Un=null,!0):!1;default:return!1}}function gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xc(t){if(Ot){var i=Un;if(i){var a=i;if(!ih(t,i)){if(gc(t))throw Error(n(418));i=nr(a.nextSibling);var c=In;i&&ih(t,i)?nh(c,a):(t.flags=t.flags&-4097|2,Ot=!1,In=t)}}else{if(gc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,In=t}}}function rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function Eo(t){if(t!==In)return!1;if(!Ot)return rh(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!lc(t.type,t.memoizedProps)),i&&(i=Un)){if(gc(t))throw sh(),Error(n(418));for(;i;)nh(t,i),i=nr(i.nextSibling)}if(rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Un=nr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=In?nr(t.stateNode.nextSibling):null;return!0}function sh(){for(var t=Un;t;)t=nr(t.nextSibling)}function xs(){Un=In=null,Ot=!1}function vc(t){ei===null?ei=[t]:ei.push(t)}var ex=N.ReactCurrentBatchConfig;function xa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var f=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(w){var U=f.refs;w===null?delete U[p]:U[p]=w},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ah(t){var i=t._init;return i(t._payload)}function oh(t){function i(J,j){if(t){var Q=J.deletions;Q===null?(J.deletions=[j],J.flags|=16):Q.push(j)}}function a(J,j){if(!t)return null;for(;j!==null;)i(J,j),j=j.sibling;return null}function c(J,j){for(J=new Map;j!==null;)j.key!==null?J.set(j.key,j):J.set(j.index,j),j=j.sibling;return J}function f(J,j){return J=hr(J,j),J.index=0,J.sibling=null,J}function p(J,j,Q){return J.index=Q,t?(Q=J.alternate,Q!==null?(Q=Q.index,Q<j?(J.flags|=2,j):Q):(J.flags|=2,j)):(J.flags|=1048576,j)}function w(J){return t&&J.alternate===null&&(J.flags|=2),J}function U(J,j,Q,Ae){return j===null||j.tag!==6?(j=cu(Q,J.mode,Ae),j.return=J,j):(j=f(j,Q),j.return=J,j)}function B(J,j,Q,Ae){var qe=Q.type;return qe===F?Me(J,j,Q.props.children,Ae,Q.key):j!==null&&(j.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ce&&ah(qe)===j.type)?(Ae=f(j,Q.props),Ae.ref=xa(J,j,Q),Ae.return=J,Ae):(Ae=qo(Q.type,Q.key,Q.props,null,J.mode,Ae),Ae.ref=xa(J,j,Q),Ae.return=J,Ae)}function re(J,j,Q,Ae){return j===null||j.tag!==4||j.stateNode.containerInfo!==Q.containerInfo||j.stateNode.implementation!==Q.implementation?(j=uu(Q,J.mode,Ae),j.return=J,j):(j=f(j,Q.children||[]),j.return=J,j)}function Me(J,j,Q,Ae,qe){return j===null||j.tag!==7?(j=zr(Q,J.mode,Ae,qe),j.return=J,j):(j=f(j,Q),j.return=J,j)}function we(J,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number")return j=cu(""+j,J.mode,Q),j.return=J,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Z:return Q=qo(j.type,j.key,j.props,null,J.mode,Q),Q.ref=xa(J,null,j),Q.return=J,Q;case z:return j=uu(j,J.mode,Q),j.return=J,j;case ce:var Ae=j._init;return we(J,Ae(j._payload),Q)}if(Fe(j)||le(j))return j=zr(j,J.mode,Q,null),j.return=J,j;wo(J,j)}return null}function Se(J,j,Q,Ae){var qe=j!==null?j.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return qe!==null?null:U(J,j,""+Q,Ae);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Z:return Q.key===qe?B(J,j,Q,Ae):null;case z:return Q.key===qe?re(J,j,Q,Ae):null;case ce:return qe=Q._init,Se(J,j,qe(Q._payload),Ae)}if(Fe(Q)||le(Q))return qe!==null?null:Me(J,j,Q,Ae,null);wo(J,Q)}return null}function ke(J,j,Q,Ae,qe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return J=J.get(Q)||null,U(j,J,""+Ae,qe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case Z:return J=J.get(Ae.key===null?Q:Ae.key)||null,B(j,J,Ae,qe);case z:return J=J.get(Ae.key===null?Q:Ae.key)||null,re(j,J,Ae,qe);case ce:var Qe=Ae._init;return ke(J,j,Q,Qe(Ae._payload),qe)}if(Fe(Ae)||le(Ae))return J=J.get(Q)||null,Me(j,J,Ae,qe,null);wo(j,Ae)}return null}function He(J,j,Q,Ae){for(var qe=null,Qe=null,et=j,at=j=0,nn=null;et!==null&&at<Q.length;at++){et.index>at?(nn=et,et=null):nn=et.sibling;var bt=Se(J,et,Q[at],Ae);if(bt===null){et===null&&(et=nn);break}t&&et&&bt.alternate===null&&i(J,et),j=p(bt,j,at),Qe===null?qe=bt:Qe.sibling=bt,Qe=bt,et=nn}if(at===Q.length)return a(J,et),Ot&&Pr(J,at),qe;if(et===null){for(;at<Q.length;at++)et=we(J,Q[at],Ae),et!==null&&(j=p(et,j,at),Qe===null?qe=et:Qe.sibling=et,Qe=et);return Ot&&Pr(J,at),qe}for(et=c(J,et);at<Q.length;at++)nn=ke(et,J,at,Q[at],Ae),nn!==null&&(t&&nn.alternate!==null&&et.delete(nn.key===null?at:nn.key),j=p(nn,j,at),Qe===null?qe=nn:Qe.sibling=nn,Qe=nn);return t&&et.forEach(function(pr){return i(J,pr)}),Ot&&Pr(J,at),qe}function We(J,j,Q,Ae){var qe=le(Q);if(typeof qe!="function")throw Error(n(150));if(Q=qe.call(Q),Q==null)throw Error(n(151));for(var Qe=qe=null,et=j,at=j=0,nn=null,bt=Q.next();et!==null&&!bt.done;at++,bt=Q.next()){et.index>at?(nn=et,et=null):nn=et.sibling;var pr=Se(J,et,bt.value,Ae);if(pr===null){et===null&&(et=nn);break}t&&et&&pr.alternate===null&&i(J,et),j=p(pr,j,at),Qe===null?qe=pr:Qe.sibling=pr,Qe=pr,et=nn}if(bt.done)return a(J,et),Ot&&Pr(J,at),qe;if(et===null){for(;!bt.done;at++,bt=Q.next())bt=we(J,bt.value,Ae),bt!==null&&(j=p(bt,j,at),Qe===null?qe=bt:Qe.sibling=bt,Qe=bt);return Ot&&Pr(J,at),qe}for(et=c(J,et);!bt.done;at++,bt=Q.next())bt=ke(et,J,at,bt.value,Ae),bt!==null&&(t&&bt.alternate!==null&&et.delete(bt.key===null?at:bt.key),j=p(bt,j,at),Qe===null?qe=bt:Qe.sibling=bt,Qe=bt);return t&&et.forEach(function(Dx){return i(J,Dx)}),Ot&&Pr(J,at),qe}function jt(J,j,Q,Ae){if(typeof Q=="object"&&Q!==null&&Q.type===F&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case Z:e:{for(var qe=Q.key,Qe=j;Qe!==null;){if(Qe.key===qe){if(qe=Q.type,qe===F){if(Qe.tag===7){a(J,Qe.sibling),j=f(Qe,Q.props.children),j.return=J,J=j;break e}}else if(Qe.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ce&&ah(qe)===Qe.type){a(J,Qe.sibling),j=f(Qe,Q.props),j.ref=xa(J,Qe,Q),j.return=J,J=j;break e}a(J,Qe);break}else i(J,Qe);Qe=Qe.sibling}Q.type===F?(j=zr(Q.props.children,J.mode,Ae,Q.key),j.return=J,J=j):(Ae=qo(Q.type,Q.key,Q.props,null,J.mode,Ae),Ae.ref=xa(J,j,Q),Ae.return=J,J=Ae)}return w(J);case z:e:{for(Qe=Q.key;j!==null;){if(j.key===Qe)if(j.tag===4&&j.stateNode.containerInfo===Q.containerInfo&&j.stateNode.implementation===Q.implementation){a(J,j.sibling),j=f(j,Q.children||[]),j.return=J,J=j;break e}else{a(J,j);break}else i(J,j);j=j.sibling}j=uu(Q,J.mode,Ae),j.return=J,J=j}return w(J);case ce:return Qe=Q._init,jt(J,j,Qe(Q._payload),Ae)}if(Fe(Q))return He(J,j,Q,Ae);if(le(Q))return We(J,j,Q,Ae);wo(J,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,j!==null&&j.tag===6?(a(J,j.sibling),j=f(j,Q),j.return=J,J=j):(a(J,j),j=cu(Q,J.mode,Ae),j.return=J,J=j),w(J)):a(J,j)}return jt}var vs=oh(!0),lh=oh(!1),bo=ir(null),To=null,_s=null,_c=null;function yc(){_c=_s=To=null}function Sc(t){var i=bo.current;Ft(bo),t._currentValue=i}function Mc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function ys(t,i){To=t,_c=_s=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Tn=!0),t.firstContext=null)}function Wn(t){var i=t._currentValue;if(_c!==t)if(t={context:t,memoizedValue:i,next:null},_s===null){if(To===null)throw Error(n(308));_s=t,To.dependencies={lanes:0,firstContext:t}}else _s=_s.next=t;return i}var Lr=null;function Ec(t){Lr===null?Lr=[t]:Lr.push(t)}function ch(t,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Ec(i)):(a.next=f.next,f.next=a),i.interleaved=a,Pi(t,c)}function Pi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ar=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function or(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Pi(t,a)}return f=c.interleaved,f===null?(i.next=i,Ec(c)):(i.next=f.next,f.next=i),c.interleaved=i,Pi(t,a)}function Ao(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Ol(t,a)}}function dh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=w:p=p.next=w,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Co(t,i,a,c){var f=t.updateQueue;ar=!1;var p=f.firstBaseUpdate,w=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var B=U,re=B.next;B.next=null,w===null?p=re:w.next=re,w=B;var Me=t.alternate;Me!==null&&(Me=Me.updateQueue,U=Me.lastBaseUpdate,U!==w&&(U===null?Me.firstBaseUpdate=re:U.next=re,Me.lastBaseUpdate=B))}if(p!==null){var we=f.baseState;w=0,Me=re=B=null,U=p;do{var Se=U.lane,ke=U.eventTime;if((c&Se)===Se){Me!==null&&(Me=Me.next={eventTime:ke,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=t,We=U;switch(Se=i,ke=a,We.tag){case 1:if(He=We.payload,typeof He=="function"){we=He.call(ke,we,Se);break e}we=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,Se=typeof He=="function"?He.call(ke,we,Se):He,Se==null)break e;we=L({},we,Se);break e;case 2:ar=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Se=f.effects,Se===null?f.effects=[U]:Se.push(U))}else ke={eventTime:ke,lane:Se,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Me===null?(re=Me=ke,B=we):Me=Me.next=ke,w|=Se;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;Se=U,U=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Me===null&&(B=we),f.baseState=B,f.firstBaseUpdate=re,f.lastBaseUpdate=Me,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Ur|=w,t.lanes=w,t.memoizedState=we}}function fh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var va={},mi=ir(va),_a=ir(va),ya=ir(va);function Dr(t){if(t===va)throw Error(n(174));return t}function bc(t,i){switch(It(ya,i),It(_a,t),It(mi,va),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ge(i,t)}Ft(mi),It(mi,i)}function Ss(){Ft(mi),Ft(_a),Ft(ya)}function hh(t){Dr(ya.current);var i=Dr(mi.current),a=Ge(i,t.type);i!==a&&(It(_a,t),It(mi,a))}function Tc(t){_a.current===t&&(Ft(mi),Ft(_a))}var Ht=ir(0);function Ro(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ac=[];function Cc(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var No=N.ReactCurrentDispatcher,Rc=N.ReactCurrentBatchConfig,Ir=0,Vt=null,Kt=null,en=null,Po=!1,Sa=!1,Ma=0,tx=0;function dn(){throw Error(n(321))}function Nc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Qn(t[a],i[a]))return!1;return!0}function Pc(t,i,a,c,f,p){if(Ir=p,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,No.current=t===null||t.memoizedState===null?sx:ax,t=a(c,f),Sa){p=0;do{if(Sa=!1,Ma=0,25<=p)throw Error(n(301));p+=1,en=Kt=null,i.updateQueue=null,No.current=ox,t=a(c,f)}while(Sa)}if(No.current=Io,i=Kt!==null&&Kt.next!==null,Ir=0,en=Kt=Vt=null,Po=!1,i)throw Error(n(300));return t}function Lc(){var t=Ma!==0;return Ma=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Vt.memoizedState=en=t:en=en.next=t,en}function Xn(){if(Kt===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=en===null?Vt.memoizedState:en.next;if(i!==null)en=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},en===null?Vt.memoizedState=en=t:en=en.next=t}return en}function Ea(t,i){return typeof i=="function"?i(t):i}function Dc(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=Kt,f=c.baseQueue,p=a.pending;if(p!==null){if(f!==null){var w=f.next;f.next=p.next,p.next=w}c.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,c=c.baseState;var U=w=null,B=null,re=p;do{var Me=re.lane;if((Ir&Me)===Me)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var we={lane:Me,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(U=B=we,w=c):B=B.next=we,Vt.lanes|=Me,Ur|=Me}re=re.next}while(re!==null&&re!==p);B===null?w=c:B.next=U,Qn(c,i.memoizedState)||(Tn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=B,a.lastRenderedState=c}if(t=a.interleaved,t!==null){f=t;do p=f.lane,Vt.lanes|=p,Ur|=p,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ic(t){var i=Xn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do p=t(p,w.action),w=w.next;while(w!==f);Qn(p,i.memoizedState)||(Tn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,c]}function ph(){}function mh(t,i){var a=Vt,c=Xn(),f=i(),p=!Qn(c.memoizedState,f);if(p&&(c.memoizedState=f,Tn=!0),c=c.queue,Uc(vh.bind(null,a,c,t),[t]),c.getSnapshot!==i||p||en!==null&&en.memoizedState.tag&1){if(a.flags|=2048,wa(9,xh.bind(null,a,c,f,i),void 0,null),tn===null)throw Error(n(349));(Ir&30)!==0||gh(a,i,f)}return f}function gh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function xh(t,i,a,c){i.value=a,i.getSnapshot=c,_h(i)&&yh(t)}function vh(t,i,a){return a(function(){_h(i)&&yh(t)})}function _h(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Qn(t,a)}catch{return!0}}function yh(t){var i=Pi(t,1);i!==null&&ri(i,t,1,-1)}function Sh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},i.queue=t,t=t.dispatch=rx.bind(null,Vt,t),[i.memoizedState,t]}function wa(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Mh(){return Xn().memoizedState}function Lo(t,i,a,c){var f=gi();Vt.flags|=t,f.memoizedState=wa(1|i,a,void 0,c===void 0?null:c)}function Do(t,i,a,c){var f=Xn();c=c===void 0?null:c;var p=void 0;if(Kt!==null){var w=Kt.memoizedState;if(p=w.destroy,c!==null&&Nc(c,w.deps)){f.memoizedState=wa(i,a,p,c);return}}Vt.flags|=t,f.memoizedState=wa(1|i,a,p,c)}function Eh(t,i){return Lo(8390656,8,t,i)}function Uc(t,i){return Do(2048,8,t,i)}function wh(t,i){return Do(4,2,t,i)}function bh(t,i){return Do(4,4,t,i)}function Th(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ah(t,i,a){return a=a!=null?a.concat([t]):null,Do(4,4,Th.bind(null,i,t),a)}function kc(){}function Ch(t,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Nc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Rh(t,i){var a=Xn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Nc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Nh(t,i,a){return(Ir&21)===0?(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=a):(Qn(a,i)||(a=vn(),Vt.lanes|=a,Ur|=a,t.baseState=!0),i)}function nx(t,i){var a=Nt;Nt=a!==0&&4>a?a:4,t(!0);var c=Rc.transition;Rc.transition={};try{t(!1),i()}finally{Nt=a,Rc.transition=c}}function Ph(){return Xn().memoizedState}function ix(t,i,a){var c=dr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Lh(t))Dh(i,a);else if(a=ch(t,i,a,c),a!==null){var f=yn();ri(a,t,c,f),Ih(a,i,c)}}function rx(t,i,a){var c=dr(t),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lh(t))Dh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var w=i.lastRenderedState,U=p(w,a);if(f.hasEagerState=!0,f.eagerState=U,Qn(U,w)){var B=i.interleaved;B===null?(f.next=f,Ec(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=ch(t,i,f,c),a!==null&&(f=yn(),ri(a,t,c,f),Ih(a,i,c))}}function Lh(t){var i=t.alternate;return t===Vt||i!==null&&i===Vt}function Dh(t,i){Sa=Po=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Ih(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Ol(t,a)}}var Io={readContext:Wn,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},sx={readContext:Wn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:Eh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Lo(4194308,4,Th.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Lo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Lo(4,2,t,i)},useMemo:function(t,i){var a=gi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=gi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=ix.bind(null,Vt,t),[c.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:Sh,useDebugValue:kc,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=Sh(!1),i=t[0];return t=nx.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Vt,f=gi();if(Ot){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),tn===null)throw Error(n(349));(Ir&30)!==0||gh(c,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,Eh(vh.bind(null,c,p,t),[t]),c.flags|=2048,wa(9,xh.bind(null,c,p,a,i),void 0,null),a},useId:function(){var t=gi(),i=tn.identifierPrefix;if(Ot){var a=Ni,c=Ri;a=(c&~(1<<32-ft(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=tx++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},ax={readContext:Wn,useCallback:Ch,useContext:Wn,useEffect:Uc,useImperativeHandle:Ah,useInsertionEffect:wh,useLayoutEffect:bh,useMemo:Rh,useReducer:Dc,useRef:Mh,useState:function(){return Dc(Ea)},useDebugValue:kc,useDeferredValue:function(t){var i=Xn();return Nh(i,Kt.memoizedState,t)},useTransition:function(){var t=Dc(Ea)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Ph,unstable_isNewReconciler:!1},ox={readContext:Wn,useCallback:Ch,useContext:Wn,useEffect:Uc,useImperativeHandle:Ah,useInsertionEffect:wh,useLayoutEffect:bh,useMemo:Rh,useReducer:Ic,useRef:Mh,useState:function(){return Ic(Ea)},useDebugValue:kc,useDeferredValue:function(t){var i=Xn();return Kt===null?i.memoizedState=t:Nh(i,Kt.memoizedState,t)},useTransition:function(){var t=Ic(Ea)[0],i=Xn().memoizedState;return[t,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Ph,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=L({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Fc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:L({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uo={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=yn(),f=dr(t),p=Li(c,f);p.payload=i,a!=null&&(p.callback=a),i=or(t,p,f),i!==null&&(ri(i,t,f,c),Ao(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=yn(),f=dr(t),p=Li(c,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=or(t,p,f),i!==null&&(ri(i,t,f,c),Ao(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=yn(),c=dr(t),f=Li(a,c);f.tag=2,i!=null&&(f.callback=i),i=or(t,f,c),i!==null&&(ri(i,t,c,a),Ao(i,t,c))}};function Uh(t,i,a,c,f,p,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,w):i.prototype&&i.prototype.isPureReactComponent?!ua(a,c)||!ua(f,p):!0}function kh(t,i,a){var c=!1,f=rr,p=i.contextType;return typeof p=="object"&&p!==null?p=Wn(p):(f=bn(i)?Rr:un.current,c=i.contextTypes,p=(c=c!=null)?ps(t,f):rr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Uo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Fh(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Uo.enqueueReplaceState(i,i.state,null)}function Oc(t,i,a,c){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},wc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Wn(p):(p=bn(i)?Rr:un.current,f.context=ps(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Fc(t,i,p,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Uo.enqueueReplaceState(f,f.state,null),Co(t,a,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,i){try{var a="",c=i;do a+=ee(c),c=c.return;while(c);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function zc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Bc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var lx=typeof WeakMap=="function"?WeakMap:Map;function Oh(t,i,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Vo||(Vo=!0,tu=c),Bc(t,i)},a}function zh(t,i,a){a=Li(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Bc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Bc(t,i),typeof c!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Bh(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new lx;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),t=Mx.bind(null,t,i,a),i.then(t,t))}function Hh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Vh(t,i,a,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Li(-1,1),i.tag=2,or(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var cx=N.ReactCurrentOwner,Tn=!1;function _n(t,i,a,c){i.child=t===null?lh(i,null,a,c):vs(i,t.child,a,c)}function Gh(t,i,a,c,f){a=a.render;var p=i.ref;return ys(i,f),c=Pc(t,i,a,c,p,f),a=Lc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(Ot&&a&&pc(i),i.flags|=1,_n(t,i,c,f),i.child)}function jh(t,i,a,c,f){if(t===null){var p=a.type;return typeof p=="function"&&!lu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Wh(t,i,p,c,f)):(t=qo(a.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var w=p.memoizedProps;if(a=a.compare,a=a!==null?a:ua,a(w,c)&&t.ref===i.ref)return Di(t,i,f)}return i.flags|=1,t=hr(p,c),t.ref=i.ref,t.return=i,i.child=t}function Wh(t,i,a,c,f){if(t!==null){var p=t.memoizedProps;if(ua(p,c)&&t.ref===i.ref)if(Tn=!1,i.pendingProps=c=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Tn=!0);else return i.lanes=t.lanes,Di(t,i,f)}return Hc(t,i,a,c,f)}function Xh(t,i,a){var c=i.pendingProps,f=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(ws,kn),kn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,It(ws,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,It(ws,kn),kn|=c}else p!==null?(c=p.baseLanes|a,i.memoizedState=null):c=a,It(ws,kn),kn|=c;return _n(t,i,f,a),i.child}function Yh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Hc(t,i,a,c,f){var p=bn(a)?Rr:un.current;return p=ps(i,p),ys(i,f),a=Pc(t,i,a,c,p,f),c=Lc(),t!==null&&!Tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Di(t,i,f)):(Ot&&c&&pc(i),i.flags|=1,_n(t,i,a,f),i.child)}function qh(t,i,a,c,f){if(bn(a)){var p=!0;_o(i)}else p=!1;if(ys(i,f),i.stateNode===null)Fo(t,i),kh(i,a,c),Oc(i,a,c,f),c=!0;else if(t===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var B=w.context,re=a.contextType;typeof re=="object"&&re!==null?re=Wn(re):(re=bn(a)?Rr:un.current,re=ps(i,re));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==c||B!==re)&&Fh(i,w,c,re),ar=!1;var Se=i.memoizedState;w.state=Se,Co(i,c,w,f),B=i.memoizedState,U!==c||Se!==B||wn.current||ar?(typeof Me=="function"&&(Fc(i,a,Me,c),B=i.memoizedState),(U=ar||Uh(i,a,U,c,Se,B,re))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),w.props=c,w.state=B,w.context=re,c=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,uh(t,i),U=i.memoizedProps,re=i.type===i.elementType?U:ti(i.type,U),w.props=re,we=i.pendingProps,Se=w.context,B=a.contextType,typeof B=="object"&&B!==null?B=Wn(B):(B=bn(a)?Rr:un.current,B=ps(i,B));var ke=a.getDerivedStateFromProps;(Me=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==we||Se!==B)&&Fh(i,w,c,B),ar=!1,Se=i.memoizedState,w.state=Se,Co(i,c,w,f);var He=i.memoizedState;U!==we||Se!==He||wn.current||ar?(typeof ke=="function"&&(Fc(i,a,ke,c),He=i.memoizedState),(re=ar||Uh(i,a,re,c,Se,He,B)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,He,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,He,B)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=He),w.props=c,w.state=He,w.context=B,c=re):(typeof w.componentDidUpdate!="function"||U===t.memoizedProps&&Se===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Se===t.memoizedState||(i.flags|=1024),c=!1)}return Vc(t,i,a,c,p,f)}function Vc(t,i,a,c,f,p){Yh(t,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&Qf(i,a,!1),Di(t,i,p);c=i.stateNode,cx.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&w?(i.child=vs(i,t.child,null,p),i.child=vs(i,null,U,p)):_n(t,i,U,p),i.memoizedState=c.state,f&&Qf(i,a,!0),i.child}function $h(t){var i=t.stateNode;i.pendingContext?Jf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Jf(t,i.context,!1),bc(t,i.containerInfo)}function Kh(t,i,a,c,f){return xs(),vc(f),i.flags|=256,_n(t,i,a,c),i.child}var Gc={dehydrated:null,treeContext:null,retryLane:0};function jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jh(t,i,a){var c=i.pendingProps,f=Ht.current,p=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),It(Ht,f&1),t===null)return xc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,t=c.fallback,p?(c=i.mode,p=i.child,w={mode:"hidden",children:w},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=$o(w,c,0,null),t=zr(t,c,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=jc(a),i.memoizedState=Gc,t):Wc(i,w));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return ux(t,i,w,c,U,f,a);if(p){p=c.fallback,w=i.mode,f=t.child,U=f.sibling;var B={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=hr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),U!==null?p=hr(U,p):(p=zr(p,w,a,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,w=t.child.memoizedState,w=w===null?jc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=t.childLanes&~a,i.memoizedState=Gc,c}return p=t.child,t=p.sibling,c=hr(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function Wc(t,i){return i=$o({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ko(t,i,a,c){return c!==null&&vc(c),vs(i,t.child,null,a),t=Wc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ux(t,i,a,c,f,p,w){if(a)return i.flags&256?(i.flags&=-257,c=zc(Error(n(422))),ko(t,i,w,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=$o({mode:"visible",children:c.children},f,0,null),p=zr(p,f,w,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&vs(i,t.child,null,w),i.child.memoizedState=jc(w),i.memoizedState=Gc,p);if((i.mode&1)===0)return ko(t,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var U=c.dgst;return c=U,p=Error(n(419)),c=zc(p,c,void 0),ko(t,i,w,c)}if(U=(w&t.childLanes)!==0,Tn||U){if(c=tn,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Pi(t,f),ri(c,t,f,-1))}return ou(),c=zc(Error(n(421))),ko(t,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Ex.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Un=nr(f.nextSibling),In=i,Ot=!0,ei=null,t!==null&&(Gn[jn++]=Ri,Gn[jn++]=Ni,Gn[jn++]=Nr,Ri=t.id,Ni=t.overflow,Nr=i),i=Wc(i,c.children),i.flags|=4096,i)}function Zh(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Mc(t.return,i,a)}function Xc(t,i,a,c,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=f)}function Qh(t,i,a){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if(_n(t,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zh(t,a,i);else if(t.tag===19)Zh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(It(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Ro(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Xc(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ro(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Xc(i,!0,a,null,p);break;case"together":Xc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Fo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Di(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ur|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=hr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=hr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function dx(t,i,a){switch(i.tag){case 3:$h(i),xs();break;case 5:hh(i);break;case 1:bn(i.type)&&_o(i);break;case 4:bc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;It(bo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Jh(t,i,a):(It(Ht,Ht.current&1),t=Di(t,i,a),t!==null?t.sibling:null);It(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Qh(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,Xh(t,i,a)}return Di(t,i,a)}var ep,Yc,tp,np;ep=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yc=function(){},tp=function(t,i,a,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Dr(mi.current);var p=null;switch(a){case"input":f=O(t,f),c=O(t,c),p=[];break;case"select":f=L({},f,{value:void 0}),c=L({},c,{value:void 0}),p=[];break;case"textarea":f=T(t,f),c=T(t,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=go)}mt(a,c);var w;a=null;for(re in f)if(!c.hasOwnProperty(re)&&f.hasOwnProperty(re)&&f[re]!=null)if(re==="style"){var U=f[re];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(o.hasOwnProperty(re)?p||(p=[]):(p=p||[]).push(re,null));for(re in c){var B=c[re];if(U=f!=null?f[re]:void 0,c.hasOwnProperty(re)&&B!==U&&(B!=null||U!=null))if(re==="style")if(U){for(w in U)!U.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in B)B.hasOwnProperty(w)&&U[w]!==B[w]&&(a||(a={}),a[w]=B[w])}else a||(p||(p=[]),p.push(re,a)),a=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(p=p||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(o.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&kt("scroll",t),p||U===B||(p=[])):(p=p||[]).push(re,B))}a&&(p=p||[]).push("style",a);var re=p;(i.updateQueue=re)&&(i.flags|=4)}},np=function(t,i,a,c){a!==c&&(i.flags|=4)};function ba(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function fn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function fx(t,i,a){var c=i.pendingProps;switch(mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(i),null;case 1:return bn(i.type)&&vo(),fn(i),null;case 3:return c=i.stateNode,Ss(),Ft(wn),Ft(un),Cc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Eo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(ru(ei),ei=null))),Yc(t,i),fn(i),null;case 5:Tc(i);var f=Dr(ya.current);if(a=i.type,t!==null&&i.stateNode!=null)tp(t,i,a,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return fn(i),null}if(t=Dr(mi.current),Eo(i)){c=i.stateNode,a=i.type;var p=i.memoizedProps;switch(c[pi]=i,c[ma]=p,t=(i.mode&1)!==0,a){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(f=0;f<fa.length;f++)kt(fa[f],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":Ct(c,p),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},kt("invalid",c);break;case"textarea":te(c,p),kt("invalid",c)}mt(a,p),f=null;for(var w in p)if(p.hasOwnProperty(w)){var U=p[w];w==="children"?typeof U=="string"?c.textContent!==U&&(p.suppressHydrationWarning!==!0&&mo(c.textContent,U,t),f=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(p.suppressHydrationWarning!==!0&&mo(c.textContent,U,t),f=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&kt("scroll",c)}switch(a){case"input":Je(c),Ve(c,p,!0);break;case"textarea":Je(c),ye(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=go)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=w.createElement(a,{is:c.is}):(t=w.createElement(a),a==="select"&&(w=t,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):t=w.createElementNS(t,a),t[pi]=i,t[ma]=c,ep(t,i,!1,!1),i.stateNode=t;e:{switch(w=ct(a,c),a){case"dialog":kt("cancel",t),kt("close",t),f=c;break;case"iframe":case"object":case"embed":kt("load",t),f=c;break;case"video":case"audio":for(f=0;f<fa.length;f++)kt(fa[f],t);f=c;break;case"source":kt("error",t),f=c;break;case"img":case"image":case"link":kt("error",t),kt("load",t),f=c;break;case"details":kt("toggle",t),f=c;break;case"input":Ct(t,c),f=O(t,c),kt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=L({},c,{value:void 0}),kt("invalid",t);break;case"textarea":te(t,c),f=T(t,c),kt("invalid",t);break;default:f=c}mt(a,f),U=f;for(p in U)if(U.hasOwnProperty(p)){var B=U[p];p==="style"?rt(t,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ue(t,B)):p==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&dt(t,B):typeof B=="number"&&dt(t,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?B!=null&&p==="onScroll"&&kt("scroll",t):B!=null&&I(t,p,B,w))}switch(a){case"input":Je(t),Ve(t,c,!1);break;case"textarea":Je(t),ye(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ge(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?D(t,!!c.multiple,p,!1):c.defaultValue!=null&&D(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=go)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return fn(i),null;case 6:if(t&&i.stateNode!=null)np(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Dr(ya.current),Dr(mi.current),Eo(i)){if(c=i.stateNode,a=i.memoizedProps,c[pi]=i,(p=c.nodeValue!==a)&&(t=In,t!==null))switch(t.tag){case 3:mo(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mo(c.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[pi]=i,i.stateNode=c}return fn(i),null;case 13:if(Ft(Ht),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sh(),xs(),i.flags|=98560,p=!1;else if(p=Eo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;fn(i),p=!1}else ei!==null&&(ru(ei),ei=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ht.current&1)!==0?Jt===0&&(Jt=3):ou())),i.updateQueue!==null&&(i.flags|=4),fn(i),null);case 4:return Ss(),Yc(t,i),t===null&&ha(i.stateNode.containerInfo),fn(i),null;case 10:return Sc(i.type._context),fn(i),null;case 17:return bn(i.type)&&vo(),fn(i),null;case 19:if(Ft(Ht),p=i.memoizedState,p===null)return fn(i),null;if(c=(i.flags&128)!==0,w=p.rendering,w===null)if(c)ba(p,!1);else{if(Jt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Ro(t),w!==null){for(i.flags|=128,ba(p,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)p=a,t=c,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,t=w.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return It(Ht,Ht.current&1|2),i.child}t=t.sibling}p.tail!==null&&Te()>bs&&(i.flags|=128,c=!0,ba(p,!1),i.lanes=4194304)}else{if(!c)if(t=Ro(w),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ba(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!Ot)return fn(i),null}else 2*Te()-p.renderingStartTime>bs&&a!==1073741824&&(i.flags|=128,c=!0,ba(p,!1),i.lanes=4194304);p.isBackwards?(w.sibling=i.child,i.child=w):(a=p.last,a!==null?a.sibling=w:i.child=w,p.last=w)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Te(),i.sibling=null,a=Ht.current,It(Ht,c?a&1|2:a&1),i):(fn(i),null);case 22:case 23:return au(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(kn&1073741824)!==0&&(fn(i),i.subtreeFlags&6&&(i.flags|=8192)):fn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function hx(t,i){switch(mc(i),i.tag){case 1:return bn(i.type)&&vo(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ss(),Ft(wn),Ft(un),Cc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Tc(i),null;case 13:if(Ft(Ht),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(Ht),null;case 4:return Ss(),null;case 10:return Sc(i.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Oo=!1,hn=!1,px=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Es(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Gt(t,i,c)}else a.current=null}function qc(t,i,a){try{a()}catch(c){Gt(t,i,c)}}var ip=!1;function mx(t,i){if(ac=io,t=Uf(),Zl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var w=0,U=-1,B=-1,re=0,Me=0,we=t,Se=null;t:for(;;){for(var ke;we!==a||f!==0&&we.nodeType!==3||(U=w+f),we!==p||c!==0&&we.nodeType!==3||(B=w+c),we.nodeType===3&&(w+=we.nodeValue.length),(ke=we.firstChild)!==null;)Se=we,we=ke;for(;;){if(we===t)break t;if(Se===a&&++re===f&&(U=w),Se===p&&++Me===c&&(B=w),(ke=we.nextSibling)!==null)break;we=Se,Se=we.parentNode}we=ke}a=U===-1||B===-1?null:{start:U,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(oc={focusedElem:t,selectionRange:a},io=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,jt=He.memoizedState,J=i.stateNode,j=J.getSnapshotBeforeUpdate(i.elementType===i.type?We:ti(i.type,We),jt);J.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Gt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=ip,ip=!1,He}function Ta(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&qc(i,a,p)}f=f.next}while(f!==c)}}function zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function $c(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function rp(t){var i=t.alternate;i!==null&&(t.alternate=null,rp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[ma],delete i[dc],delete i[J0],delete i[Z0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sp(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kc(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=go));else if(c!==4&&(t=t.child,t!==null))for(Kc(t,i,a),t=t.sibling;t!==null;)Kc(t,i,a),t=t.sibling}function Jc(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Jc(t,i,a),t=t.sibling;t!==null;)Jc(t,i,a),t=t.sibling}var sn=null,ni=!1;function lr(t,i,a){for(a=a.child;a!==null;)op(t,i,a),a=a.sibling}function op(t,i,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 5:hn||Es(a,i);case 6:var c=sn,f=ni;sn=null,lr(t,i,a),sn=c,ni=f,sn!==null&&(ni?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ni?(t=sn,a=a.stateNode,t.nodeType===8?uc(t.parentNode,a):t.nodeType===1&&uc(t,a),ra(t)):uc(sn,a.stateNode));break;case 4:c=sn,f=ni,sn=a.stateNode.containerInfo,ni=!0,lr(t,i,a),sn=c,ni=f;break;case 0:case 11:case 14:case 15:if(!hn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&qc(a,i,w),f=f.next}while(f!==c)}lr(t,i,a);break;case 1:if(!hn&&(Es(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Gt(a,i,U)}lr(t,i,a);break;case 21:lr(t,i,a);break;case 22:a.mode&1?(hn=(c=hn)||a.memoizedState!==null,lr(t,i,a),hn=c):lr(t,i,a);break;default:lr(t,i,a)}}function lp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new px),i.forEach(function(c){var f=wx.bind(null,t,c);a.has(c)||(a.add(c),c.then(f,f))})}}function ii(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var p=t,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:sn=U.stateNode,ni=!1;break e;case 3:sn=U.stateNode.containerInfo,ni=!0;break e;case 4:sn=U.stateNode.containerInfo,ni=!0;break e}U=U.return}if(sn===null)throw Error(n(160));op(p,w,f),sn=null,ni=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(re){Gt(f,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cp(i,t),i=i.sibling}function cp(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),xi(t),c&4){try{Ta(3,t,t.return),zo(3,t)}catch(We){Gt(t,t.return,We)}try{Ta(5,t,t.return)}catch(We){Gt(t,t.return,We)}}break;case 1:ii(i,t),xi(t),c&512&&a!==null&&Es(a,a.return);break;case 5:if(ii(i,t),xi(t),c&512&&a!==null&&Es(a,a.return),t.flags&32){var f=t.stateNode;try{dt(f,"")}catch(We){Gt(t,t.return,We)}}if(c&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,w=a!==null?a.memoizedProps:p,U=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{U==="input"&&p.type==="radio"&&p.name!=null&&it(f,p),ct(U,w);var re=ct(U,p);for(w=0;w<B.length;w+=2){var Me=B[w],we=B[w+1];Me==="style"?rt(f,we):Me==="dangerouslySetInnerHTML"?Ue(f,we):Me==="children"?dt(f,we):I(f,Me,we,re)}switch(U){case"input":tt(f,p);break;case"textarea":_e(f,p);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var ke=p.value;ke!=null?D(f,!!p.multiple,ke,!1):Se!==!!p.multiple&&(p.defaultValue!=null?D(f,!!p.multiple,p.defaultValue,!0):D(f,!!p.multiple,p.multiple?[]:"",!1))}f[ma]=p}catch(We){Gt(t,t.return,We)}}break;case 6:if(ii(i,t),xi(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(We){Gt(t,t.return,We)}}break;case 3:if(ii(i,t),xi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ra(i.containerInfo)}catch(We){Gt(t,t.return,We)}break;case 4:ii(i,t),xi(t);break;case 13:ii(i,t),xi(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(eu=Te())),c&4&&lp(t);break;case 22:if(Me=a!==null&&a.memoizedState!==null,t.mode&1?(hn=(re=hn)||Me,ii(i,t),hn=re):ii(i,t),xi(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!Me&&(t.mode&1)!==0)for(ze=t,Me=t.child;Me!==null;){for(we=ze=Me;ze!==null;){switch(Se=ze,ke=Se.child,Se.tag){case 0:case 11:case 14:case 15:Ta(4,Se,Se.return);break;case 1:Es(Se,Se.return);var He=Se.stateNode;if(typeof He.componentWillUnmount=="function"){c=Se,a=Se.return;try{i=c,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(We){Gt(c,a,We)}}break;case 5:Es(Se,Se.return);break;case 22:if(Se.memoizedState!==null){fp(we);continue}}ke!==null?(ke.return=Se,ze=ke):fp(we)}Me=Me.sibling}e:for(Me=null,we=t;;){if(we.tag===5){if(Me===null){Me=we;try{f=we.stateNode,re?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(U=we.stateNode,B=we.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=Ze("display",w))}catch(We){Gt(t,t.return,We)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=re?"":we.memoizedProps}catch(We){Gt(t,t.return,We)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:ii(i,t),xi(t),c&4&&lp(t);break;case 21:break;default:ii(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(sp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(dt(f,""),c.flags&=-33);var p=ap(t);Jc(t,p,f);break;case 3:case 4:var w=c.stateNode.containerInfo,U=ap(t);Kc(t,U,w);break;default:throw Error(n(161))}}catch(B){Gt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function gx(t,i,a){ze=t,up(t)}function up(t,i,a){for(var c=(t.mode&1)!==0;ze!==null;){var f=ze,p=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||Oo;if(!w){var U=f.alternate,B=U!==null&&U.memoizedState!==null||hn;U=Oo;var re=hn;if(Oo=w,(hn=B)&&!re)for(ze=f;ze!==null;)w=ze,B=w.child,w.tag===22&&w.memoizedState!==null?hp(f):B!==null?(B.return=w,ze=B):hp(f);for(;p!==null;)ze=p,up(p),p=p.sibling;ze=f,Oo=U,hn=re}dp(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ze=p):dp(t)}}function dp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||zo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!hn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ti(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&fh(i,p,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}fh(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var Me=re.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&ra(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&$c(i)}catch(Se){Gt(i,i.return,Se)}}if(i===t){ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,ze=a;break}ze=i.return}}function fp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ze=a;break}ze=i.return}}function hp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{zo(4,i)}catch(B){Gt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){Gt(i,f,B)}}var p=i.return;try{$c(i)}catch(B){Gt(i,p,B)}break;case 5:var w=i.return;try{$c(i)}catch(B){Gt(i,w,B)}}}catch(B){Gt(i,i.return,B)}if(i===t){ze=null;break}var U=i.sibling;if(U!==null){U.return=i.return,ze=U;break}ze=i.return}}var xx=Math.ceil,Bo=N.ReactCurrentDispatcher,Zc=N.ReactCurrentOwner,Yn=N.ReactCurrentBatchConfig,Mt=0,tn=null,Wt=null,an=0,kn=0,ws=ir(0),Jt=0,Aa=null,Ur=0,Ho=0,Qc=0,Ca=null,An=null,eu=0,bs=1/0,Ii=null,Vo=!1,tu=null,cr=null,Go=!1,ur=null,jo=0,Ra=0,nu=null,Wo=-1,Xo=0;function yn(){return(Mt&6)!==0?Te():Wo!==-1?Wo:Wo=Te()}function dr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&an!==0?an&-an:ex.transition!==null?(Xo===0&&(Xo=vn()),Xo):(t=Nt,t!==0||(t=window.event,t=t===void 0?16:mf(t.type)),t)}function ri(t,i,a,c){if(50<Ra)throw Ra=0,nu=null,Error(n(185));En(t,a,c),((Mt&2)===0||t!==tn)&&(t===tn&&((Mt&2)===0&&(Ho|=a),Jt===4&&fr(t,an)),Cn(t,c),a===1&&Mt===0&&(i.mode&1)===0&&(bs=Te()+500,yo&&sr()))}function Cn(t,i){var a=t.callbackNode;Hn(t,i);var c=hi(t,t===tn?an:0);if(c===0)a!==null&&ae(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&ae(a),i===1)t.tag===0?Q0(mp.bind(null,t)):eh(mp.bind(null,t)),$0(function(){(Mt&6)===0&&sr()}),a=null;else{switch(of(c)){case 1:a=je;break;case 4:a=st;break;case 16:a=ot;break;case 536870912:a=_t;break;default:a=ot}a=Ep(a,pp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function pp(t,i){if(Wo=-1,Xo=0,(Mt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ts()&&t.callbackNode!==a)return null;var c=hi(t,t===tn?an:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Yo(t,c);else{i=c;var f=Mt;Mt|=2;var p=xp();(tn!==t||an!==i)&&(Ii=null,bs=Te()+500,Fr(t,i));do try{yx();break}catch(U){gp(t,U)}while(!0);yc(),Bo.current=p,Mt=f,Wt!==null?i=0:(tn=null,an=0,i=Jt)}if(i!==0){if(i===2&&(f=Ti(t),f!==0&&(c=f,i=iu(t,f))),i===1)throw a=Aa,Fr(t,0),fr(t,c),Cn(t,Te()),a;if(i===6)fr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!vx(f)&&(i=Yo(t,c),i===2&&(p=Ti(t),p!==0&&(c=p,i=iu(t,p))),i===1))throw a=Aa,Fr(t,0),fr(t,c),Cn(t,Te()),a;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Or(t,An,Ii);break;case 3:if(fr(t,c),(c&130023424)===c&&(i=eu+500-Te(),10<i)){if(hi(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){yn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=cc(Or.bind(null,t,An,Ii),i);break}Or(t,An,Ii);break;case 4:if(fr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var w=31-ft(c);p=1<<w,w=i[w],w>f&&(f=w),c&=~p}if(c=f,c=Te()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*xx(c/1960))-c,10<c){t.timeoutHandle=cc(Or.bind(null,t,An,Ii),c);break}Or(t,An,Ii);break;case 5:Or(t,An,Ii);break;default:throw Error(n(329))}}}return Cn(t,Te()),t.callbackNode===a?pp.bind(null,t):null}function iu(t,i){var a=Ca;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Yo(t,i),t!==2&&(i=An,An=a,i!==null&&ru(i)),t}function ru(t){An===null?An=t:An.push.apply(An,t)}function vx(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],p=f.getSnapshot;f=f.value;try{if(!Qn(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(t,i){for(i&=~Qc,i&=~Ho,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-ft(i),c=1<<a;t[a]=-1,i&=~c}}function mp(t){if((Mt&6)!==0)throw Error(n(327));Ts();var i=hi(t,0);if((i&1)===0)return Cn(t,Te()),null;var a=Yo(t,i);if(t.tag!==0&&a===2){var c=Ti(t);c!==0&&(i=c,a=iu(t,c))}if(a===1)throw a=Aa,Fr(t,0),fr(t,i),Cn(t,Te()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,An,Ii),Cn(t,Te()),null}function su(t,i){var a=Mt;Mt|=1;try{return t(i)}finally{Mt=a,Mt===0&&(bs=Te()+500,yo&&sr())}}function kr(t){ur!==null&&ur.tag===0&&(Mt&6)===0&&Ts();var i=Mt;Mt|=1;var a=Yn.transition,c=Nt;try{if(Yn.transition=null,Nt=1,t)return t()}finally{Nt=c,Yn.transition=a,Mt=i,(Mt&6)===0&&sr()}}function au(){kn=ws.current,Ft(ws)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,q0(a)),Wt!==null)for(a=Wt.return;a!==null;){var c=a;switch(mc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&vo();break;case 3:Ss(),Ft(wn),Ft(un),Cc();break;case 5:Tc(c);break;case 4:Ss();break;case 13:Ft(Ht);break;case 19:Ft(Ht);break;case 10:Sc(c.type._context);break;case 22:case 23:au()}a=a.return}if(tn=t,Wt=t=hr(t.current,null),an=kn=i,Jt=0,Aa=null,Qc=Ho=Ur=0,An=Ca=null,Lr!==null){for(i=0;i<Lr.length;i++)if(a=Lr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,p=a.pending;if(p!==null){var w=p.next;p.next=f,c.next=w}a.pending=c}Lr=null}return t}function gp(t,i){do{var a=Wt;try{if(yc(),No.current=Io,Po){for(var c=Vt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Po=!1}if(Ir=0,en=Kt=Vt=null,Sa=!1,Ma=0,Zc.current=null,a===null||a.return===null){Jt=1,Aa=i,Wt=null;break}e:{var p=t,w=a.return,U=a,B=i;if(i=an,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,Me=U,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var ke=Hh(w);if(ke!==null){ke.flags&=-257,Vh(ke,w,U,p,i),ke.mode&1&&Bh(p,re,i),i=ke,B=re;var He=i.updateQueue;if(He===null){var We=new Set;We.add(B),i.updateQueue=We}else He.add(B);break e}else{if((i&1)===0){Bh(p,re,i),ou();break e}B=Error(n(426))}}else if(Ot&&U.mode&1){var jt=Hh(w);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Vh(jt,w,U,p,i),vc(Ms(B,U));break e}}p=B=Ms(B,U),Jt!==4&&(Jt=2),Ca===null?Ca=[p]:Ca.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var J=Oh(p,B,i);dh(p,J);break e;case 1:U=B;var j=p.type,Q=p.stateNode;if((p.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(cr===null||!cr.has(Q)))){p.flags|=65536,i&=-i,p.lanes|=i;var Ae=zh(p,U,i);dh(p,Ae);break e}}p=p.return}while(p!==null)}_p(a)}catch(qe){i=qe,Wt===a&&a!==null&&(Wt=a=a.return);continue}break}while(!0)}function xp(){var t=Bo.current;return Bo.current=Io,t===null?Io:t}function ou(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),tn===null||(Ur&268435455)===0&&(Ho&268435455)===0||fr(tn,an)}function Yo(t,i){var a=Mt;Mt|=2;var c=xp();(tn!==t||an!==i)&&(Ii=null,Fr(t,i));do try{_x();break}catch(f){gp(t,f)}while(!0);if(yc(),Mt=a,Bo.current=c,Wt!==null)throw Error(n(261));return tn=null,an=0,Jt}function _x(){for(;Wt!==null;)vp(Wt)}function yx(){for(;Wt!==null&&!K();)vp(Wt)}function vp(t){var i=Mp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?_p(t):Wt=i,Zc.current=null}function _p(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=fx(a,i,kn),a!==null){Wt=a;return}}else{if(a=hx(a,i),a!==null){a.flags&=32767,Wt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Wt=null;return}}if(i=i.sibling,i!==null){Wt=i;return}Wt=i=t}while(i!==null);Jt===0&&(Jt=5)}function Or(t,i,a){var c=Nt,f=Yn.transition;try{Yn.transition=null,Nt=1,Sx(t,i,a,c)}finally{Yn.transition=f,Nt=c}return null}function Sx(t,i,a,c){do Ts();while(ur!==null);if((Mt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(eo(t,p),t===tn&&(Wt=tn=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Go||(Go=!0,Ep(ot,function(){return Ts(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Yn.transition,Yn.transition=null;var w=Nt;Nt=1;var U=Mt;Mt|=4,Zc.current=null,mx(t,a),cp(a,t),H0(oc),io=!!ac,oc=ac=null,t.current=a,gx(a),Ce(),Mt=U,Nt=w,Yn.transition=p}else t.current=a;if(Go&&(Go=!1,ur=t,jo=f),p=t.pendingLanes,p===0&&(cr=null),ln(a.stateNode),Cn(t,Te()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Vo)throw Vo=!1,t=tu,tu=null,t;return(jo&1)!==0&&t.tag!==0&&Ts(),p=t.pendingLanes,(p&1)!==0?t===nu?Ra++:(Ra=0,nu=t):Ra=0,sr(),null}function Ts(){if(ur!==null){var t=of(jo),i=Yn.transition,a=Nt;try{if(Yn.transition=null,Nt=16>t?16:t,ur===null)var c=!1;else{if(t=ur,ur=null,jo=0,(Mt&6)!==0)throw Error(n(331));var f=Mt;for(Mt|=4,ze=t.current;ze!==null;){var p=ze,w=p.child;if((ze.flags&16)!==0){var U=p.deletions;if(U!==null){for(var B=0;B<U.length;B++){var re=U[B];for(ze=re;ze!==null;){var Me=ze;switch(Me.tag){case 0:case 11:case 15:Ta(8,Me,p)}var we=Me.child;if(we!==null)we.return=Me,ze=we;else for(;ze!==null;){Me=ze;var Se=Me.sibling,ke=Me.return;if(rp(Me),Me===re){ze=null;break}if(Se!==null){Se.return=ke,ze=Se;break}ze=ke}}}var He=p.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var jt=We.sibling;We.sibling=null,We=jt}while(We!==null)}}ze=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,ze=w;else e:for(;ze!==null;){if(p=ze,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ta(9,p,p.return)}var J=p.sibling;if(J!==null){J.return=p.return,ze=J;break e}ze=p.return}}var j=t.current;for(ze=j;ze!==null;){w=ze;var Q=w.child;if((w.subtreeFlags&2064)!==0&&Q!==null)Q.return=w,ze=Q;else e:for(w=j;ze!==null;){if(U=ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:zo(9,U)}}catch(qe){Gt(U,U.return,qe)}if(U===w){ze=null;break e}var Ae=U.sibling;if(Ae!==null){Ae.return=U.return,ze=Ae;break e}ze=U.return}}if(Mt=f,sr(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(Tt,t)}catch{}c=!0}return c}finally{Nt=a,Yn.transition=i}}return!1}function yp(t,i,a){i=Ms(a,i),i=Oh(t,i,1),t=or(t,i,1),i=yn(),t!==null&&(En(t,1,i),Cn(t,i))}function Gt(t,i,a){if(t.tag===3)yp(t,t,a);else for(;i!==null;){if(i.tag===3){yp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(cr===null||!cr.has(c))){t=Ms(a,t),t=zh(i,t,1),i=or(i,t,1),t=yn(),i!==null&&(En(i,1,t),Cn(i,t));break}}i=i.return}}function Mx(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&a,tn===t&&(an&a)===a&&(Jt===4||Jt===3&&(an&130023424)===an&&500>Te()-eu?Fr(t,0):Qc|=a),Cn(t,i)}function Sp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Zn,Zn<<=1,(Zn&130023424)===0&&(Zn=4194304)));var a=yn();t=Pi(t,i),t!==null&&(En(t,i,a),Cn(t,a))}function Ex(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Sp(t,a)}function wx(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Sp(t,a)}var Mp;Mp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||wn.current)Tn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Tn=!1,dx(t,i,a);Tn=(t.flags&131072)!==0}else Tn=!1,Ot&&(i.flags&1048576)!==0&&th(i,Mo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Fo(t,i),t=i.pendingProps;var f=ps(i,un.current);ys(i,a),f=Pc(null,i,c,t,f,a);var p=Lc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(c)?(p=!0,_o(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,wc(i),f.updater=Uo,i.stateNode=f,f._reactInternals=i,Oc(i,c,t,a),i=Vc(null,i,c,!0,p,a)):(i.tag=0,Ot&&p&&pc(i),_n(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Fo(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Tx(c),t=ti(c,t),f){case 0:i=Hc(null,i,c,t,a);break e;case 1:i=qh(null,i,c,t,a);break e;case 11:i=Gh(null,i,c,t,a);break e;case 14:i=jh(null,i,c,ti(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),Hc(t,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),qh(t,i,c,f,a);case 3:e:{if($h(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,f=p.element,uh(t,i),Co(i,c,null,a);var w=i.memoizedState;if(c=w.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Ms(Error(n(423)),i),i=Kh(t,i,c,a,f);break e}else if(c!==f){f=Ms(Error(n(424)),i),i=Kh(t,i,c,a,f);break e}else for(Un=nr(i.stateNode.containerInfo.firstChild),In=i,Ot=!0,ei=null,a=lh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),c===f){i=Di(t,i,a);break e}_n(t,i,c,a)}i=i.child}return i;case 5:return hh(i),t===null&&xc(i),c=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,w=f.children,lc(c,f)?w=null:p!==null&&lc(c,p)&&(i.flags|=32),Yh(t,i),_n(t,i,w,a),i.child;case 6:return t===null&&xc(i),null;case 13:return Jh(t,i,a);case 4:return bc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=vs(i,null,c,a):_n(t,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),Gh(t,i,c,f,a);case 7:return _n(t,i,i.pendingProps,a),i.child;case 8:return _n(t,i,i.pendingProps.children,a),i.child;case 12:return _n(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,w=f.value,It(bo,c._currentValue),c._currentValue=w,p!==null)if(Qn(p.value,w)){if(p.children===f.children&&!wn.current){i=Di(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var U=p.dependencies;if(U!==null){w=p.child;for(var B=U.firstContext;B!==null;){if(B.context===c){if(p.tag===1){B=Li(-1,a&-a),B.tag=2;var re=p.updateQueue;if(re!==null){re=re.shared;var Me=re.pending;Me===null?B.next=B:(B.next=Me.next,Me.next=B),re.pending=B}}p.lanes|=a,B=p.alternate,B!==null&&(B.lanes|=a),Mc(p.return,a,i),U.lanes|=a;break}B=B.next}}else if(p.tag===10)w=p.type===i.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(n(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),Mc(w,a,i),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===i){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}_n(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,ys(i,a),f=Wn(f),c=c(f),i.flags|=1,_n(t,i,c,a),i.child;case 14:return c=i.type,f=ti(c,i.pendingProps),f=ti(c.type,f),jh(t,i,c,f,a);case 15:return Wh(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ti(c,f),Fo(t,i),i.tag=1,bn(c)?(t=!0,_o(i)):t=!1,ys(i,a),kh(i,c,f),Oc(i,c,f,a),Vc(null,i,c,!0,t,a);case 19:return Qh(t,i,a);case 22:return Xh(t,i,a)}throw Error(n(156,i.tag))};function Ep(t,i){return se(t,i)}function bx(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,i,a,c){return new bx(t,i,a,c)}function lu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tx(t){if(typeof t=="function")return lu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ue)return 11;if(t===me)return 14}return 2}function hr(t,i){var a=t.alternate;return a===null?(a=qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function qo(t,i,a,c,f,p){var w=2;if(c=t,typeof t=="function")lu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case F:return zr(a.children,f,p,i);case q:w=8,f|=8;break;case P:return t=qn(12,a,i,f|2),t.elementType=P,t.lanes=p,t;case ne:return t=qn(13,a,i,f),t.elementType=ne,t.lanes=p,t;case he:return t=qn(19,a,i,f),t.elementType=he,t.lanes=p,t;case fe:return $o(a,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:w=10;break e;case G:w=9;break e;case ue:w=11;break e;case me:w=14;break e;case ce:w=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=qn(w,a,i,f),i.elementType=t,i.type=c,i.lanes=p,i}function zr(t,i,a,c){return t=qn(7,t,c,i),t.lanes=a,t}function $o(t,i,a,c){return t=qn(22,t,c,i),t.elementType=fe,t.lanes=a,t.stateNode={isHidden:!1},t}function cu(t,i,a){return t=qn(6,t,null,i),t.lanes=a,t}function uu(t,i,a){return i=qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Ax(t,i,a,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vn(0),this.expirationTimes=Vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function du(t,i,a,c,f,p,w,U,B){return t=new Ax(t,i,a,U,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(p),t}function Cx(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function wp(t){if(!t)return rr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(bn(a))return Zf(t,a,i)}return i}function bp(t,i,a,c,f,p,w,U,B){return t=du(a,c,!0,t,f,p,w,U,B),t.context=wp(null),a=t.current,c=yn(),f=dr(a),p=Li(c,f),p.callback=i??null,or(a,p,f),t.current.lanes=f,En(t,f,c),Cn(t,c),t}function Ko(t,i,a,c){var f=i.current,p=yn(),w=dr(f);return a=wp(a),i.context===null?i.context=a:i.pendingContext=a,i=Li(p,w),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=or(f,i,w),t!==null&&(ri(t,f,w,p),Ao(t,f,w)),w}function Jo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function fu(t,i){Tp(t,i),(t=t.alternate)&&Tp(t,i)}function Rx(){return null}var Ap=typeof reportError=="function"?reportError:function(t){console.error(t)};function hu(t){this._internalRoot=t}Zo.prototype.render=hu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ko(t,i,null,null)},Zo.prototype.unmount=hu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;kr(function(){Ko(null,t,null,null)}),i[Ai]=null}};function Zo(t){this._internalRoot=t}Zo.prototype.unstable_scheduleHydration=function(t){if(t){var i=uf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,t),a===0&&hf(t)}};function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function Nx(t,i,a,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var re=Jo(w);p.call(re)}}var w=bp(i,c,t,0,null,!1,!1,"",Cp);return t._reactRootContainer=w,t[Ai]=w.current,ha(t.nodeType===8?t.parentNode:t),kr(),w}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var U=c;c=function(){var re=Jo(B);U.call(re)}}var B=du(t,0,!1,null,null,!1,!1,"",Cp);return t._reactRootContainer=B,t[Ai]=B.current,ha(t.nodeType===8?t.parentNode:t),kr(function(){Ko(i,B,a,c)}),B}function el(t,i,a,c,f){var p=a._reactRootContainer;if(p){var w=p;if(typeof f=="function"){var U=f;f=function(){var B=Jo(w);U.call(B)}}Ko(i,w,t,f)}else w=Nx(a,i,t,f,c);return Jo(w)}lf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=$t(i.pendingLanes);a!==0&&(Ol(i,a|1),Cn(i,Te()),(Mt&6)===0&&(bs=Te()+500,sr()))}break;case 13:kr(function(){var c=Pi(t,1);if(c!==null){var f=yn();ri(c,t,1,f)}}),fu(t,1)}},zl=function(t){if(t.tag===13){var i=Pi(t,134217728);if(i!==null){var a=yn();ri(i,t,134217728,a)}fu(t,134217728)}},cf=function(t){if(t.tag===13){var i=dr(t),a=Pi(t,i);if(a!==null){var c=yn();ri(a,t,i,c)}fu(t,i)}},uf=function(){return Nt},df=function(t,i){var a=Nt;try{return Nt=t,i()}finally{Nt=a}},Ne=function(t,i,a){switch(i){case"input":if(tt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var f=xo(c);if(!f)throw Error(n(90));$e(c),tt(c,f)}}}break;case"textarea":_e(t,a);break;case"select":i=a.value,i!=null&&D(t,!!a.multiple,i,!1)}},Ut=su,qt=kr;var Px={usingClientEntryPoint:!1,Events:[ga,fs,xo,De,ut,su]},Na={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lx={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||Rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Tt=tl.inject(Lx),vt=tl}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Px,Rn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pu(i))throw Error(n(200));return Cx(t,i,null,a)},Rn.createRoot=function(t,i){if(!pu(t))throw Error(n(299));var a=!1,c="",f=Ap;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=du(t,1,!1,null,null,a,!1,c,f),t[Ai]=i.current,ha(t.nodeType===8?t.parentNode:t),new hu(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=C(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return kr(t)},Rn.hydrate=function(t,i,a){if(!Qo(i))throw Error(n(200));return el(null,t,i,!0,a)},Rn.hydrateRoot=function(t,i,a){if(!pu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,f=!1,p="",w=Ap;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=bp(i,null,t,1,a??null,f,!1,p,w),t[Ai]=i.current,ha(t),c)for(t=0;t<c.length;t++)a=c[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Zo(i)},Rn.render=function(t,i,a){if(!Qo(i))throw Error(n(200));return el(null,t,i,!1,a)},Rn.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(n(40));return t._reactRootContainer?(kr(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1},Rn.unstable_batchedUpdates=su,Rn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!Qo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return el(t,i,a,!1,c)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var kp;function Hx(){if(kp)return xu.exports;kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xu.exports=Bx(),xu.exports}var Fp;function Vx(){if(Fp)return nl;Fp=1;var s=Hx();return nl.createRoot=s.createRoot,nl.hydrateRoot=s.hydrateRoot,nl}var Gx=Vx();const jx=qm(Gx);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Xx(s,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Wx(s),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=s=>{let e="",n=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){n=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=n?r.toUpperCase():r,n=!1}return e};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=s=>{const e=Yx(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yu(s){return s!=null}function $x(s,e={}){var S,M;const n=e.attributeNames??{},r=b=>n[b]??b,o=s.size??s.width??Br.width,l=s.size??s.height??Br.height,u=((S=s.aliases)==null?void 0:S.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],d=[...s.name?[`lucide-${s.name}`]:[],...u],h=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],g=e.includeDefaultClasses===!1?nd(...h):nd("lucide",...d,...h),x=e.absoluteStrokeWidth?Number(e.strokeWidth??Br["stroke-width"])*Number(s.size??s.width??Br.width)/Number(e.size??e.width??Br.width):e.strokeWidth??Br["stroke-width"];return["svg",{...Object.entries(Br).reduce((b,[A,_])=>(b[r(A)]=_,b),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&yu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&yu(e.width)&&{[r("width")]:e.width},..."height"in e&&yu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:x,...g&&{[r("class")]:g},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(b=>{const[A,_,v]=b,k=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",..._}:_;return v?[A,k,v]:[A,k]})]}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Kx(s,e={}){return $x(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Zx=zt.createContext({}),Qx=()=>zt.useContext(Zx),ev=zt.forwardRef(({color:s,size:e,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:d="",children:h,iconNode:g=[],icon:x={node:g,aliases:[],size:24},...y},S)=>{const{size:M=24,strokeWidth:b=2,absoluteStrokeWidth:A=!1,nonScalingStroke:_=!1,color:v="currentColor",className:k=""}=Qx()??{},I=!!h||Jx(y),[N,Z,z=[]]=Kx(x,{color:s??v,width:n??e??M,height:r??e??M,strokeWidth:o??b,absoluteStrokeWidth:l??A,nonScalingStroke:u??_,className:nd(k,d),hasA11yProp:I,attributes:y});return zt.createElement(N,{ref:S,...Z},[...z.map(([F,q])=>zt.createElement(F,q)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Yt(s,e=[],n=[]){const r=typeof s=="string"?Xx(s,e,n):s,o=zt.forwardRef(({className:l,...u},d)=>zt.createElement(ev,{ref:d,icon:r,className:l,...u}));return r.name&&(o.displayName=qx(r.name)),o}/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m={name:"arrow-down",size:24,node:[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]};$m.node;const tv=Yt($m);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};Km.node;const Qr=Yt(Km);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm={name:"arrow-up",size:24,node:[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]};Jm.node;const nv=Yt(Jm);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};Zm.node;const iv=Yt(Zm);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Qm.node;const Op=Yt(Qm);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};eg.node;const tg=Yt(eg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};ng.node;const zp=Yt(ng);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};ig.node;const rv=Yt(ig);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};rg.node;const sv=Yt(rg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};sg.node;const Bp=Yt(sg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};ag.node;const av=Yt(ag);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"panels-top-left",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],aliases:["layout"]};og.node;const ov=Yt(og);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};lg.node;const lv=Yt(lg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};cg.node;const cv=Yt(cg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};ug.node;const uv=Yt(ug);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};dg.node;const dv=Yt(dg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"shopping-bag",size:24,node:[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]]};fg.node;const fv=Yt(fg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};hg.node;const hv=Yt(hg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]};pg.node;const pv=Yt(pg);/**
 * @license lucide-react v1.45.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};mg.node;const gg=Yt(mg),_i={bio:"Information Technology graduate and Java Full-Stack Developer with experience building full-stack applications using Java, Spring Boot, React, MySQL, REST APIs, JWT, Hibernate, and related technologies.",contact:{phone:"9310879213",email:"charusharmadl1356@gmail.com",linkedin:"https://www.linkedin.com/in/charush05",github:"https://github.com/charu05-dev"}},Hp=[{name:"Java",category:"LANGUAGE",role:"Core programming language & OOP",color:"sunburst",rotation:"-3deg",logo:"java"},{name:"JavaScript",category:"LANGUAGE",role:"Dynamic scripting & ES6+",color:"sunburst",rotation:"4deg",logo:"javascript"},{name:"React",category:"FRONTEND",role:"Component-driven frontend UI",color:"electric",rotation:"-2deg",logo:"react"},{name:"Tailwind CSS",category:"FRONTEND",role:"Utility-first modern styling",color:"mint",rotation:"3deg",logo:"tailwind"},{name:"HTML5",category:"FRONTEND",role:"Semantic web structure",color:"ember",rotation:"-4deg",logo:"html5"},{name:"CSS3",category:"FRONTEND",role:"Responsive styling & layout",color:"lavender",rotation:"2deg",logo:"css3"},{name:"JavaScript (ES6)",category:"FRONTEND",role:"Modern asynchronous JavaScript",color:"sunburst",rotation:"-3deg",logo:"javascript"},{name:"Spring Boot",category:"BACKEND",role:"Enterprise microservices & REST APIs",color:"mint",rotation:"-4deg",logo:"spring"},{name:"Spring",category:"BACKEND",role:"Dependency Injection & Core Framework",color:"mint",rotation:"2deg",logo:"spring"},{name:"Hibernate",category:"BACKEND",role:"ORM & relational persistence",color:"lavender",rotation:"-2deg",logo:"hibernate"},{name:"REST APIs",category:"BACKEND",role:"Stateless client-server communication",color:"electric",rotation:"4deg",logo:"rest"},{name:"JWT",category:"BACKEND",role:"Token-based auth & endpoint security",color:"ember",rotation:"-3deg",logo:"jwt"},{name:"JDBC",category:"BACKEND",role:"Low-level database connectivity",color:"concrete",rotation:"3deg",logo:"database"},{name:"JSP / Servlets",category:"BACKEND",role:"Java enterprise web components",color:"mist",rotation:"-2deg",logo:"server"},{name:"MySQL",category:"DATABASE",role:"Relational database & structured CRUD",color:"electric",rotation:"3deg",logo:"mysql"},{name:"Object-Oriented Programming",category:"CORE",role:"Encapsulation, Inheritance, Polymorphism",color:"violet",rotation:"-2deg",logo:"code"},{name:"Data Structures & Algorithms",category:"CORE",role:"Efficient problem solving & complexity analysis",color:"sunburst",rotation:"2deg",logo:"layers"},{name:"MVC Architecture",category:"CORE",role:"Model-View-Controller architectural separation",color:"mint",rotation:"-3deg",logo:"layout"}],Vp=[{id:"fashionselect",number:"01",title:"FASHIONSELECT",subtitle:"FASHION E-COMMERCE PLATFORM",date:"Jan 2026",badge:"FULL STACK",bgAccent:"sunburst",description:"A full-stack fashion e-commerce application built using Spring Boot and React, enabling users to browse products and interact with the application through RESTful APIs.",details:["Developed a full-stack fashion e-commerce application using Spring Boot and React, enabling users to browse products and interact with the application through RESTful APIs.","Implemented JWT-based authentication and authorization to secure user access and protect application endpoints.","Designed and integrated a SQL database with backend services to manage users, products, orders, and application data using structured CRUD operations."],technologies:["Java","Spring Boot","React","SQL","REST API","JWT"],architecture:{frontend:"React SPA with componentized catalog, product filter pills, shopping cart state, and protected checkout routes.",backend:"Spring Boot RESTful micro-architecture with MVC controllers, service business logic, and security filter chains.",security:"JWT stateless authentication tokens signed and validated per request.",database:"MySQL relational schema tracking users, roles, apparel catalogs, inventories, and placed orders."},mockupFeatures:[{label:"CATALOG",value:"Curated Apparel Grid"},{label:"AUTH",value:"JWT Bearer Token Guard"},{label:"DATABASE",value:"Relational Order Management"}]},{id:"foodserve",number:"02",title:"FOODSERVE",subtitle:"ONLINE FOOD DELIVERY APPLICATION",date:"May 2026",badge:"FULL STACK",bgAccent:"mint",description:"A full-stack food service application built using Spring Boot and React, implementing RESTful APIs for seamless communication between frontend and backend.",details:["Built a full-stack food service application using Spring Boot and React, implementing RESTful APIs for seamless communication between frontend and backend.","Implemented JWT authentication and authorization to provide secure user login and controlled access to application resources.","Integrated SQL database operations with backend business logic to manage users, food items, orders, and related application data efficiently."],technologies:["Java","Spring Boot","React","SQL","REST API","JWT"],architecture:{pipeline:"FOOD → ORDER → API → DATABASE",frontend:"React ordering interface with live cart calculations, category tabs, and order confirmation states.",backend:"Spring Boot controllers orchestrating restaurant menus, cart validation, and transactional order dispatch.",security:"JWT authentication with customer and admin access controls.",database:"SQL database executing structured CRUD operations for dishes, active orders, customer profiles, and timestamps."},mockupFeatures:[{label:"FLOW",value:"Menu → Order → Cart → Dispatch"},{label:"SECURITY",value:"Role-Based JWT Authorization"},{label:"DATA",value:"Real-time SQL Order Tracking"}]}],mv=[{company:"TAP Academy",role:"Full Stack Developer Intern",period:"July 2026 – January 2027",color:"lavender",responsibilities:["Developed and deployed full-stack applications using Java, Spring Boot, Hibernate, MySQL, React, and REST APIs, following clean and scalable architecture.","Built backend modules with Spring Boot, implemented secure authentication, and optimized API performance.","Designed responsive React components, improved page load speed, and enhanced overall user experience."],skillsLearned:["Java","Spring Boot","Hibernate","MySQL","React","REST APIs","Clean Architecture"]}],gv=[{title:"3RD PLACE",event:"Technical Project Presentation 2025",description:"Secured 3rd place in Technical Project Presentation 2025 by demonstrating strong technical understanding, project implementation, and presentation skills.",color:"sunburst"}],vi=[{institution:"Siddhant College of Engineering",degree:"B.E. in Information Technology",period:"2022 – 2026",score:"CGPA: 8.9",location:"Maharashtra, India",color:"sky"},{institution:"CRPF Public School",degree:"Senior Secondary Education",period:"2020 – 2022",score:"Percentage: 80%",location:"New Delhi, India",color:"mist"}],xv=()=>{const[s,e]=zt.useState(!1),[n,r]=zt.useState(!1);zt.useEffect(()=>{const l=()=>{e(window.scrollY>20)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const o=[{label:"HOME",href:"#hero"},{label:"ABOUT",href:"#about"},{label:"SKILLS",href:"#skills"},{label:"PROJECTS",href:"#projects"},{label:"EXPERIENCE",href:"#experience"},{label:"CONTACT",href:"#contact"}];return m.jsxs("header",{className:"fixed top-4 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-300",children:[m.jsxs("div",{className:"max-w-6xl mx-auto flex items-center justify-between",children:[m.jsxs("a",{href:"#hero",className:"group flex items-center gap-2.5 bg-paper px-3.5 py-2 rounded-pill border border-carbon shadow-[2px_2px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] hover:-translate-y-0.5 transition-all",children:[m.jsx("span",{className:"w-8 h-8 rounded-full bg-sunburst flex items-center justify-center font-display font-black text-sm border border-carbon",children:"CS"}),m.jsx("span",{className:"font-display font-extrabold tracking-tight text-base sm:text-lg text-carbon",children:"CHARU SHARMA"})]}),m.jsx("nav",{className:"hidden lg:flex items-center gap-1 bg-paper/95 backdrop-blur-md px-3 py-1.5 rounded-pill border border-carbon shadow-[2px_2px_0px_#000000]",children:o.map(l=>m.jsx("a",{href:l.href,className:"px-3.5 py-1.5 rounded-pill font-display font-bold text-xs tracking-wider text-carbon hover:bg-mist transition-all duration-150",children:l.label},l.label))}),m.jsx("div",{className:"hidden sm:flex items-center gap-3",children:m.jsxs("a",{href:"#contact",className:"flex items-center gap-2 bg-carbon text-paper px-5 py-2.5 rounded-pill border border-carbon font-display font-black text-xs tracking-wider uppercase hover:bg-carbon/90 hover:-translate-y-0.5 shadow-[2px_2px_0px_#000000] transition-all",children:[m.jsx("span",{children:"LET'S CONNECT"}),m.jsx(Qr,{className:"w-3.5 h-3.5"})]})}),m.jsx("button",{onClick:()=>r(!n),className:"lg:hidden p-2.5 rounded-pill bg-paper border border-carbon shadow-[2px_2px_0px_#000000]","aria-label":"Toggle Navigation Menu",children:n?m.jsx(gg,{className:"w-5 h-5 text-carbon"}):m.jsx(av,{className:"w-5 h-5 text-carbon"})})]}),n&&m.jsx("div",{className:"lg:hidden mt-3 max-w-sm mx-auto bg-paper border-[1.5px] border-carbon rounded-card p-5 shadow-[5px_5px_0px_#000000] animate-in fade-in slide-in-from-top-4 duration-200",children:m.jsxs("div",{className:"flex flex-col gap-2",children:[o.map(l=>m.jsxs("a",{href:l.href,onClick:()=>r(!1),className:"px-4 py-2.5 rounded-pill font-display font-black text-sm tracking-wider text-carbon hover:bg-sky transition-colors flex items-center justify-between",children:[m.jsx("span",{children:l.label}),m.jsx("span",{className:"w-2 h-2 rounded-full bg-sunburst"})]},l.label)),m.jsx("div",{className:"pt-3 border-t border-carbon/20 mt-2",children:m.jsxs("a",{href:"#contact",onClick:()=>r(!1),className:"flex items-center justify-center gap-2 w-full bg-carbon text-paper py-3 rounded-pill font-display font-black text-sm uppercase",children:[m.jsx("span",{children:"LET'S CONNECT"}),m.jsx(Qr,{className:"w-4 h-4"})]})})]})})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wd="170",vv=0,Gp=1,_v=2,xg=1,yv=2,Bi=3,wr=0,Pn=1,Hi=2,Mr=0,Vs=1,jp=2,Wp=3,Xp=4,Sv=5,$r=100,Mv=101,Ev=102,wv=103,bv=104,Tv=200,Av=201,Cv=202,Rv=203,id=204,rd=205,Nv=206,Pv=207,Lv=208,Dv=209,Iv=210,Uv=211,kv=212,Fv=213,Ov=214,sd=0,ad=1,od=2,Ws=3,ld=4,cd=5,ud=6,dd=7,vg=0,zv=1,Bv=2,Er=0,Hv=1,Vv=2,Gv=3,_g=4,jv=5,Wv=6,Xv=7,yg=300,Xs=301,Ys=302,fd=303,hd=304,Dl=306,pd=1e3,Jr=1001,md=1002,di=1003,Yv=1004,il=1005,Si=1006,Su=1007,Zr=1008,Wi=1009,Sg=1010,Mg=1011,Ga=1012,Xd=1013,es=1014,Vi=1015,ja=1016,Yd=1017,qd=1018,qs=1020,Eg=35902,wg=1021,bg=1022,ci=1023,Tg=1024,Ag=1025,Gs=1026,$s=1027,Cg=1028,$d=1029,Rg=1030,Kd=1031,Jd=1033,bl=33776,Tl=33777,Al=33778,Cl=33779,gd=35840,xd=35841,vd=35842,_d=35843,yd=36196,Sd=37492,Md=37496,Ed=37808,wd=37809,bd=37810,Td=37811,Ad=37812,Cd=37813,Rd=37814,Nd=37815,Pd=37816,Ld=37817,Dd=37818,Id=37819,Ud=37820,kd=37821,Rl=36492,Fd=36494,Od=36495,Ng=36283,zd=36284,Bd=36285,Hd=36286,qv=3200,$v=3201,Pg=0,Kv=1,Sr="",Kn="srgb",Js="srgb-linear",Il="linear",Pt="srgb",As=7680,Yp=519,Jv=512,Zv=513,Qv=514,Lg=515,e_=516,t_=517,n_=518,i_=519,qp=35044,$p="300 es",Gi=2e3,Pl=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mu=Math.PI/180,Vd=180/Math.PI;function Wa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[s&255]+pn[s>>8&255]+pn[s>>16&255]+pn[s>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function on(s,e,n){return Math.max(e,Math.min(n,s))}function r_(s,e){return(s%e+e)%e}function Eu(s,e,n){return(1-n)*s+n*e}function La(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(on(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,n,r,o,l,u,d,h,g){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,g)}set(e,n,r,o,l,u,d,h,g){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[3],h=r[6],g=r[1],x=r[4],y=r[7],S=r[2],M=r[5],b=r[8],A=o[0],_=o[3],v=o[6],k=o[1],I=o[4],N=o[7],Z=o[2],z=o[5],F=o[8];return l[0]=u*A+d*k+h*Z,l[3]=u*_+d*I+h*z,l[6]=u*v+d*N+h*F,l[1]=g*A+x*k+y*Z,l[4]=g*_+x*I+y*z,l[7]=g*v+x*N+y*F,l[2]=S*A+M*k+b*Z,l[5]=S*_+M*I+b*z,l[8]=S*v+M*N+b*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],g=e[7],x=e[8];return n*u*x-n*d*g-r*l*x+r*d*h+o*l*g-o*u*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],g=e[7],x=e[8],y=x*u-d*g,S=d*h-x*l,M=g*l-u*h,b=n*y+r*S+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=y*A,e[1]=(o*g-x*r)*A,e[2]=(d*r-o*u)*A,e[3]=S*A,e[4]=(x*n-o*h)*A,e[5]=(o*l-d*n)*A,e[6]=M*A,e[7]=(r*h-g*n)*A,e[8]=(u*n-r*l)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,d){const h=Math.cos(l),g=Math.sin(l);return this.set(r*h,r*g,-r*(h*u+g*d)+u+e,-o*g,o*h,-o*(-g*u+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(wu.makeScale(e,n)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new ht;function Dg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ll(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function s_(){const s=Ll("canvas");return s.style.display="block",s}const Kp={};function Oa(s){s in Kp||(Kp[s]=!0,console.warn(s))}function a_(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function o_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function l_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Et={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Pt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Pt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sr?Il:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,n){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Jp=[.64,.33,.3,.6,.15,.06],Zp=[.2126,.7152,.0722],Qp=[.3127,.329],em=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Et.define({[Js]:{primaries:Jp,whitePoint:Qp,transfer:Il,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Zp,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:Jp,whitePoint:Qp,transfer:Pt,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Zp,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}});let Cs;class c_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=Ll("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ji(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ji(n[r]/255)*255):n[r]=ji(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u_=0;class Ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(bu(o[u].image)):l.push(bu(o[u]))}else l=bu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function bu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?c_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let d_=0;class Ln extends Zs{constructor(e=Ln.DEFAULT_IMAGE,n=Ln.DEFAULT_MAPPING,r=Jr,o=Jr,l=Si,u=Zr,d=ci,h=Wi,g=Ln.DEFAULT_ANISOTROPY,x=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=Wa(),this.name="",this.source=new Ig(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=h,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=yg;Ln.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,r=0,o=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,g=h[0],x=h[4],y=h[8],S=h[1],M=h[5],b=h[9],A=h[2],_=h[6],v=h[10];if(Math.abs(x-S)<.01&&Math.abs(y-A)<.01&&Math.abs(b-_)<.01){if(Math.abs(x+S)<.1&&Math.abs(y+A)<.1&&Math.abs(b+_)<.1&&Math.abs(g+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const I=(g+1)/2,N=(M+1)/2,Z=(v+1)/2,z=(x+S)/4,F=(y+A)/4,q=(b+_)/4;return I>N&&I>Z?I<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(I),o=z/r,l=F/r):N>Z?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=z/o,l=q/o):Z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(Z),r=F/l,o=q/l),this.set(r,o,l,n),this}let k=Math.sqrt((_-b)*(_-b)+(y-A)*(y-A)+(S-x)*(S-x));return Math.abs(k)<.001&&(k=1),this.x=(_-b)/k,this.y=(y-A)/k,this.z=(S-x)/k,this.w=Math.acos((g+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f_ extends Zs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Ln(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ig(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends f_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Ug extends Ln{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class h_ extends Ln{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,d){let h=r[o+0],g=r[o+1],x=r[o+2],y=r[o+3];const S=l[u+0],M=l[u+1],b=l[u+2],A=l[u+3];if(d===0){e[n+0]=h,e[n+1]=g,e[n+2]=x,e[n+3]=y;return}if(d===1){e[n+0]=S,e[n+1]=M,e[n+2]=b,e[n+3]=A;return}if(y!==A||h!==S||g!==M||x!==b){let _=1-d;const v=h*S+g*M+x*b+y*A,k=v>=0?1:-1,I=1-v*v;if(I>Number.EPSILON){const Z=Math.sqrt(I),z=Math.atan2(Z,v*k);_=Math.sin(_*z)/Z,d=Math.sin(d*z)/Z}const N=d*k;if(h=h*_+S*N,g=g*_+M*N,x=x*_+b*N,y=y*_+A*N,_===1-d){const Z=1/Math.sqrt(h*h+g*g+x*x+y*y);h*=Z,g*=Z,x*=Z,y*=Z}}e[n]=h,e[n+1]=g,e[n+2]=x,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,l,u){const d=r[o],h=r[o+1],g=r[o+2],x=r[o+3],y=l[u],S=l[u+1],M=l[u+2],b=l[u+3];return e[n]=d*b+x*y+h*M-g*S,e[n+1]=h*b+x*S+g*y-d*M,e[n+2]=g*b+x*M+d*S-h*y,e[n+3]=x*b-d*y-h*S-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,g=d(r/2),x=d(o/2),y=d(l/2),S=h(r/2),M=h(o/2),b=h(l/2);switch(u){case"XYZ":this._x=S*x*y+g*M*b,this._y=g*M*y-S*x*b,this._z=g*x*b+S*M*y,this._w=g*x*y-S*M*b;break;case"YXZ":this._x=S*x*y+g*M*b,this._y=g*M*y-S*x*b,this._z=g*x*b-S*M*y,this._w=g*x*y+S*M*b;break;case"ZXY":this._x=S*x*y-g*M*b,this._y=g*M*y+S*x*b,this._z=g*x*b+S*M*y,this._w=g*x*y-S*M*b;break;case"ZYX":this._x=S*x*y-g*M*b,this._y=g*M*y+S*x*b,this._z=g*x*b-S*M*y,this._w=g*x*y+S*M*b;break;case"YZX":this._x=S*x*y+g*M*b,this._y=g*M*y+S*x*b,this._z=g*x*b-S*M*y,this._w=g*x*y-S*M*b;break;case"XZY":this._x=S*x*y-g*M*b,this._y=g*M*y-S*x*b,this._z=g*x*b+S*M*y,this._w=g*x*y+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],d=n[5],h=n[9],g=n[2],x=n[6],y=n[10],S=r+d+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-h)*M,this._y=(l-g)*M,this._z=(u-o)*M}else if(r>d&&r>y){const M=2*Math.sqrt(1+r-d-y);this._w=(x-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+g)/M}else if(d>y){const M=2*Math.sqrt(1+d-r-y);this._w=(l-g)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+x)/M}else{const M=2*Math.sqrt(1+y-r-d);this._w=(u-o)/M,this._x=(l+g)/M,this._y=(h+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,d=n._x,h=n._y,g=n._z,x=n._w;return this._x=r*x+u*d+o*g-l*h,this._y=o*x+u*h+l*d-r*g,this._z=l*x+u*g+r*h-o*d,this._w=u*x-r*d-o*h-l*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const g=Math.sqrt(h),x=Math.atan2(g,d),y=Math.sin((1-n)*x)/g,S=Math.sin(n*x)/g;return this._w=u*y+this._w*S,this._x=r*y+this._x*S,this._y=o*y+this._y*S,this._z=l*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,g=2*(u*o-d*r),x=2*(d*n-l*o),y=2*(l*r-u*n);return this.x=n+h*g+u*y-d*x,this.y=r+h*x+d*g-l*y,this.z=o+h*y+l*x-u*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,d=n.y,h=n.z;return this.x=o*h-l*d,this.y=l*u-r*h,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(on(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tu=new V,nm=new Xa;class Ya{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,si):si.fromBufferAttribute(l,u),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rl.copy(r.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),sl.subVectors(this.max,Da),Rs.subVectors(e.a,Da),Ns.subVectors(e.b,Da),Ps.subVectors(e.c,Da),mr.subVectors(Ns,Rs),gr.subVectors(Ps,Ns),Hr.subVectors(Rs,Ps);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Hr.z,Hr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Hr.z,0,-Hr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Hr.y,Hr.x,0];return!Au(n,Rs,Ns,Ps,sl)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,Rs,Ns,Ps,sl))?!1:(al.crossVectors(mr,gr),n=[al.x,al.y,al.z],Au(n,Rs,Ns,Ps,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new V,new V,new V,new V,new V,new V,new V,new V],si=new V,rl=new Ya,Rs=new V,Ns=new V,Ps=new V,mr=new V,gr=new V,Hr=new V,Da=new V,sl=new V,al=new V,Vr=new V;function Au(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Vr.fromArray(s,l);const d=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),h=e.dot(Vr),g=n.dot(Vr),x=r.dot(Vr);if(Math.max(-Math.max(h,g,x),Math.min(h,g,x))>d)return!1}return!0}const p_=new Ya,Ia=new V,Cu=new V;class Zd{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):p_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);const n=Ia.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ia,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(Cu)),this.expandByPoint(Ia.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new V,Ru=new V,ol=new V,xr=new V,Nu=new V,ll=new V,Pu=new V;class m_{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Ru.copy(e).add(n).multiplyScalar(.5),ol.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(Ru);const l=e.distanceTo(n)*.5,u=-this.direction.dot(ol),d=xr.dot(this.direction),h=-xr.dot(ol),g=xr.lengthSq(),x=Math.abs(1-u*u);let y,S,M,b;if(x>0)if(y=u*h-d,S=u*d-h,b=l*x,y>=0)if(S>=-b)if(S<=b){const A=1/x;y*=A,S*=A,M=y*(y+u*S+2*d)+S*(u*y+S+2*h)+g}else S=l,y=Math.max(0,-(u*S+d)),M=-y*y+S*(S+2*h)+g;else S=-l,y=Math.max(0,-(u*S+d)),M=-y*y+S*(S+2*h)+g;else S<=-b?(y=Math.max(0,-(-u*l+d)),S=y>0?-l:Math.min(Math.max(-l,-h),l),M=-y*y+S*(S+2*h)+g):S<=b?(y=0,S=Math.min(Math.max(-l,-h),l),M=S*(S+2*h)+g):(y=Math.max(0,-(u*l+d)),S=y>0?l:Math.min(Math.max(-l,-h),l),M=-y*y+S*(S+2*h)+g);else S=u>0?-l:l,y=Math.max(0,-(u*S+d)),M=-y*y+S*(S+2*h)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Ru).addScaledVector(ol,S),M}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),o=ki.dot(ki)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,d,h;const g=1/this.direction.x,x=1/this.direction.y,y=1/this.direction.z,S=this.origin;return g>=0?(r=(e.min.x-S.x)*g,o=(e.max.x-S.x)*g):(r=(e.max.x-S.x)*g,o=(e.min.x-S.x)*g),x>=0?(l=(e.min.y-S.y)*x,u=(e.max.y-S.y)*x):(l=(e.max.y-S.y)*x,u=(e.min.y-S.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(d=(e.min.z-S.z)*y,h=(e.max.z-S.z)*y):(d=(e.max.z-S.z)*y,h=(e.min.z-S.z)*y),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,r,o,l){Nu.subVectors(n,e),ll.subVectors(r,e),Pu.crossVectors(Nu,ll);let u=this.direction.dot(Pu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xr.subVectors(this.origin,e);const h=d*this.direction.dot(ll.crossVectors(xr,ll));if(h<0)return null;const g=d*this.direction.dot(Nu.cross(xr));if(g<0||h+g>u)return null;const x=-d*xr.dot(Pu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,n,r,o,l,u,d,h,g,x,y,S,M,b,A,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,h,g,x,y,S,M,b,A,_)}set(e,n,r,o,l,u,d,h,g,x,y,S,M,b,A,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=d,v[13]=h,v[2]=g,v[6]=x,v[10]=y,v[14]=S,v[3]=M,v[7]=b,v[11]=A,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(o),g=Math.sin(o),x=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const S=u*x,M=u*y,b=d*x,A=d*y;n[0]=h*x,n[4]=-h*y,n[8]=g,n[1]=M+b*g,n[5]=S-A*g,n[9]=-d*h,n[2]=A-S*g,n[6]=b+M*g,n[10]=u*h}else if(e.order==="YXZ"){const S=h*x,M=h*y,b=g*x,A=g*y;n[0]=S+A*d,n[4]=b*d-M,n[8]=u*g,n[1]=u*y,n[5]=u*x,n[9]=-d,n[2]=M*d-b,n[6]=A+S*d,n[10]=u*h}else if(e.order==="ZXY"){const S=h*x,M=h*y,b=g*x,A=g*y;n[0]=S-A*d,n[4]=-u*y,n[8]=b+M*d,n[1]=M+b*d,n[5]=u*x,n[9]=A-S*d,n[2]=-u*g,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const S=u*x,M=u*y,b=d*x,A=d*y;n[0]=h*x,n[4]=b*g-M,n[8]=S*g+A,n[1]=h*y,n[5]=A*g+S,n[9]=M*g-b,n[2]=-g,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const S=u*h,M=u*g,b=d*h,A=d*g;n[0]=h*x,n[4]=A-S*y,n[8]=b*y+M,n[1]=y,n[5]=u*x,n[9]=-d*x,n[2]=-g*x,n[6]=M*y+b,n[10]=S-A*y}else if(e.order==="XZY"){const S=u*h,M=u*g,b=d*h,A=d*g;n[0]=h*x,n[4]=-y,n[8]=g*x,n[1]=S*y+A,n[5]=u*x,n[9]=M*y-b,n[2]=b*y-M,n[6]=d*x,n[10]=A*y+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g_,e,x_)}lookAt(e,n,r){const o=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),vr.crossVectors(r,Fn),vr.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),vr.crossVectors(r,Fn)),vr.normalize(),cl.crossVectors(Fn,vr),o[0]=vr.x,o[4]=cl.x,o[8]=Fn.x,o[1]=vr.y,o[5]=cl.y,o[9]=Fn.y,o[2]=vr.z,o[6]=cl.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[4],h=r[8],g=r[12],x=r[1],y=r[5],S=r[9],M=r[13],b=r[2],A=r[6],_=r[10],v=r[14],k=r[3],I=r[7],N=r[11],Z=r[15],z=o[0],F=o[4],q=o[8],P=o[12],R=o[1],G=o[5],ue=o[9],ne=o[13],he=o[2],me=o[6],ce=o[10],fe=o[14],H=o[3],le=o[7],L=o[11],E=o[15];return l[0]=u*z+d*R+h*he+g*H,l[4]=u*F+d*G+h*me+g*le,l[8]=u*q+d*ue+h*ce+g*L,l[12]=u*P+d*ne+h*fe+g*E,l[1]=x*z+y*R+S*he+M*H,l[5]=x*F+y*G+S*me+M*le,l[9]=x*q+y*ue+S*ce+M*L,l[13]=x*P+y*ne+S*fe+M*E,l[2]=b*z+A*R+_*he+v*H,l[6]=b*F+A*G+_*me+v*le,l[10]=b*q+A*ue+_*ce+v*L,l[14]=b*P+A*ne+_*fe+v*E,l[3]=k*z+I*R+N*he+Z*H,l[7]=k*F+I*G+N*me+Z*le,l[11]=k*q+I*ue+N*ce+Z*L,l[15]=k*P+I*ne+N*fe+Z*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],g=e[13],x=e[2],y=e[6],S=e[10],M=e[14],b=e[3],A=e[7],_=e[11],v=e[15];return b*(+l*h*y-o*g*y-l*d*S+r*g*S+o*d*M-r*h*M)+A*(+n*h*M-n*g*S+l*u*S-o*u*M+o*g*x-l*h*x)+_*(+n*g*y-n*d*M-l*u*y+r*u*M+l*d*x-r*g*x)+v*(-o*d*x-n*h*y+n*d*S+o*u*y-r*u*S+r*h*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],g=e[7],x=e[8],y=e[9],S=e[10],M=e[11],b=e[12],A=e[13],_=e[14],v=e[15],k=y*_*g-A*S*g+A*h*M-d*_*M-y*h*v+d*S*v,I=b*S*g-x*_*g-b*h*M+u*_*M+x*h*v-u*S*v,N=x*A*g-b*y*g+b*d*M-u*A*M-x*d*v+u*y*v,Z=b*y*h-x*A*h-b*d*S+u*A*S+x*d*_-u*y*_,z=n*k+r*I+o*N+l*Z;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=k*F,e[1]=(A*S*l-y*_*l-A*o*M+r*_*M+y*o*v-r*S*v)*F,e[2]=(d*_*l-A*h*l+A*o*g-r*_*g-d*o*v+r*h*v)*F,e[3]=(y*h*l-d*S*l-y*o*g+r*S*g+d*o*M-r*h*M)*F,e[4]=I*F,e[5]=(x*_*l-b*S*l+b*o*M-n*_*M-x*o*v+n*S*v)*F,e[6]=(b*h*l-u*_*l-b*o*g+n*_*g+u*o*v-n*h*v)*F,e[7]=(u*S*l-x*h*l+x*o*g-n*S*g-u*o*M+n*h*M)*F,e[8]=N*F,e[9]=(b*y*l-x*A*l-b*r*M+n*A*M+x*r*v-n*y*v)*F,e[10]=(u*A*l-b*d*l+b*r*g-n*A*g-u*r*v+n*d*v)*F,e[11]=(x*d*l-u*y*l-x*r*g+n*y*g+u*r*M-n*d*M)*F,e[12]=Z*F,e[13]=(x*A*o-b*y*o+b*r*S-n*A*S-x*r*_+n*y*_)*F,e[14]=(b*d*o-u*A*o-b*r*h+n*A*h+u*r*_-n*d*_)*F,e[15]=(u*y*o-x*d*o+x*r*h-n*y*h-u*r*S+n*d*S)*F,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,d=e.y,h=e.z,g=l*u,x=l*d;return this.set(g*u+r,g*d-o*h,g*h+o*d,0,g*d+o*h,x*d+r,x*h-o*u,0,g*h-o*d,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,d=n._z,h=n._w,g=l+l,x=u+u,y=d+d,S=l*g,M=l*x,b=l*y,A=u*x,_=u*y,v=d*y,k=h*g,I=h*x,N=h*y,Z=r.x,z=r.y,F=r.z;return o[0]=(1-(A+v))*Z,o[1]=(M+N)*Z,o[2]=(b-I)*Z,o[3]=0,o[4]=(M-N)*z,o[5]=(1-(S+v))*z,o[6]=(_+k)*z,o[7]=0,o[8]=(b+I)*F,o[9]=(_-k)*F,o[10]=(1-(S+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let l=Ls.set(o[0],o[1],o[2]).length();const u=Ls.set(o[4],o[5],o[6]).length(),d=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ai.copy(this);const g=1/l,x=1/u,y=1/d;return ai.elements[0]*=g,ai.elements[1]*=g,ai.elements[2]*=g,ai.elements[4]*=x,ai.elements[5]*=x,ai.elements[6]*=x,ai.elements[8]*=y,ai.elements[9]*=y,ai.elements[10]*=y,n.setFromRotationMatrix(ai),r.x=l,r.y=u,r.z=d,this}makePerspective(e,n,r,o,l,u,d=Gi){const h=this.elements,g=2*l/(n-e),x=2*l/(r-o),y=(n+e)/(n-e),S=(r+o)/(r-o);let M,b;if(d===Gi)M=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(d===Pl)M=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=x,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,l,u,d=Gi){const h=this.elements,g=1/(n-e),x=1/(r-o),y=1/(u-l),S=(n+e)*g,M=(r+o)*x;let b,A;if(d===Gi)b=(u+l)*y,A=-2*y;else if(d===Pl)b=l*y,A=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*g,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*x,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=A,h[14]=-b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ls=new V,ai=new Bt,g_=new V(0,0,0),x_=new V(1,1,1),vr=new V,cl=new V,Fn=new V,im=new Bt,rm=new Xa;class Ei{constructor(e=0,n=0,r=0,o=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],g=o[5],x=o[9],y=o[2],S=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(S,g),this._z=0);break;case"YXZ":this._x=Math.asin(-on(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,g)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(on(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,g)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-on(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,g));break;case"YZX":this._z=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,g),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(S,g),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let v_=0;const sm=new V,Ds=new Xa,Fi=new Bt,ul=new V,Ua=new V,__=new V,y_=new Xa,am=new V(1,0,0),om=new V(0,1,0),lm=new V(0,0,1),cm={type:"added"},S_={type:"removed"},Is={type:"childadded",child:null},Lu={type:"childremoved",child:null};class gn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new V,n=new Ei,r=new Xa,o=new V(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ht}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,n){return Ds.setFromAxisAngle(e,n),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ul.copy(e):ul.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ua,ul,this.up):Fi.lookAt(ul,Ua,this.up),this.quaternion.setFromRotationMatrix(Fi),o&&(Fi.extractRotation(o.matrixWorld),Ds.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cm),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(S_),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,e,__),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ua,y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let g=0,x=h.length;g<x;g++){const y=h[g];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,g=this.material.length;h<g;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),g=u(e.textures),x=u(e.images),y=u(e.shapes),S=u(e.skeletons),M=u(e.animations),b=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),g.length>0&&(r.textures=g),x.length>0&&(r.images=x),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(d){const h=[];for(const g in d){const x=d[g];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}gn.DEFAULT_UP=new V(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new V,Oi=new V,Du=new V,zi=new V,Us=new V,ks=new V,um=new V,Iu=new V,Uu=new V,ku=new V,Fu=new Lt,Ou=new Lt,zu=new Lt;class li{constructor(e=new V,n=new V,r=new V){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),oi.subVectors(e,n),o.cross(oi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){oi.subVectors(o,n),Oi.subVectors(r,n),Du.subVectors(e,n);const u=oi.dot(oi),d=oi.dot(Oi),h=oi.dot(Du),g=Oi.dot(Oi),x=Oi.dot(Du),y=u*g-d*d;if(y===0)return l.set(0,0,0),null;const S=1/y,M=(g*h-d*x)*S,b=(u*x-d*h)*S;return l.set(1-M-b,b,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,r,o,l,u,d,h){return this.getBarycoord(e,n,r,o,zi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,zi.x),h.addScaledVector(u,zi.y),h.addScaledVector(d,zi.z),h)}static getInterpolatedAttribute(e,n,r,o,l,u){return Fu.setScalar(0),Ou.setScalar(0),zu.setScalar(0),Fu.fromBufferAttribute(e,n),Ou.fromBufferAttribute(e,r),zu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Fu,l.x),u.addScaledVector(Ou,l.y),u.addScaledVector(zu,l.z),u}static isFrontFacing(e,n,r,o){return oi.subVectors(r,n),Oi.subVectors(e,n),oi.cross(Oi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),oi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return li.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,d;Us.subVectors(o,r),ks.subVectors(l,r),Iu.subVectors(e,r);const h=Us.dot(Iu),g=ks.dot(Iu);if(h<=0&&g<=0)return n.copy(r);Uu.subVectors(e,o);const x=Us.dot(Uu),y=ks.dot(Uu);if(x>=0&&y<=x)return n.copy(o);const S=h*y-x*g;if(S<=0&&h>=0&&x<=0)return u=h/(h-x),n.copy(r).addScaledVector(Us,u);ku.subVectors(e,l);const M=Us.dot(ku),b=ks.dot(ku);if(b>=0&&M<=b)return n.copy(l);const A=M*g-h*b;if(A<=0&&g>=0&&b<=0)return d=g/(g-b),n.copy(r).addScaledVector(ks,d);const _=x*b-M*y;if(_<=0&&y-x>=0&&M-b>=0)return um.subVectors(l,o),d=(y-x)/(y-x+(M-b)),n.copy(o).addScaledVector(um,d);const v=1/(_+A+S);return u=A*v,d=S*v,n.copy(r).addScaledVector(Us,u).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Bu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=r_(e,1),n=on(n,0,1),r=on(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Bu(u,l,e+1/3),this.g=Bu(u,l,e),this.b=Bu(u,l,e-1/3)}return Et.toWorkingColorSpace(this,o),this}setStyle(e,n=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=Fg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Et.fromWorkingColorSpace(mn.copy(this),e),Math.round(on(mn.r*255,0,255))*65536+Math.round(on(mn.g*255,0,255))*256+Math.round(on(mn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,o=mn.g,l=mn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let h,g;const x=(d+u)/2;if(d===u)h=0,g=0;else{const y=u-d;switch(g=x<=.5?y/(u+d):y/(2-u-d),u){case r:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-r)/y+2;break;case l:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=g,e.l=x,e}getRGB(e,n=Et.workingColorSpace){return Et.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Kn){Et.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,o=mn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(dl);const r=Eu(_r.h,dl.h,n),o=Eu(_r.s,dl.s,n),l=Eu(_r.l,dl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new yt;yt.NAMES=Fg;let M_=0;class qa extends Zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Wa(),this.name="",this.blending=Vs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=rd,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==id&&(r.blendSrc=this.blendSrc),this.blendDst!==rd&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Og extends qa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new V,fl=new nt;class Mi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=qp,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)fl.fromBufferAttribute(this,n),fl.applyMatrix3(e),this.setXY(n,fl.x,fl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix3(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=La(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=La(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=La(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=La(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=La(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),o=Nn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),o=Nn(o,this.array),l=Nn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class zg extends Mi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Bg extends Mi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Bn extends Mi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let E_=0;const $n=new Bt,Hu=new gn,Fs=new V,On=new Ya,ka=new Ya,rn=new V;class Xi extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dg(e)?Bg:zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Bn(r,3))}else{for(let r=0,o=n.count;r<o;r++){const l=e[r];n.setXYZ(r,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];On.setFromBufferAttribute(l),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];ka.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(On.min,ka.min),On.expandByPoint(rn),rn.addVectors(On.max,ka.max),On.expandByPoint(rn)):(On.expandByPoint(ka.min),On.expandByPoint(ka.max))}On.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)rn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(rn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],h=this.morphTargetsRelative;for(let g=0,x=d.count;g<x;g++)rn.fromBufferAttribute(d,g),h&&(Fs.fromBufferAttribute(e,g),rn.add(Fs)),o=Math.max(o,r.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let q=0;q<r.count;q++)d[q]=new V,h[q]=new V;const g=new V,x=new V,y=new V,S=new nt,M=new nt,b=new nt,A=new V,_=new V;function v(q,P,R){g.fromBufferAttribute(r,q),x.fromBufferAttribute(r,P),y.fromBufferAttribute(r,R),S.fromBufferAttribute(l,q),M.fromBufferAttribute(l,P),b.fromBufferAttribute(l,R),x.sub(g),y.sub(g),M.sub(S),b.sub(S);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(A.copy(x).multiplyScalar(b.y).addScaledVector(y,-M.y).multiplyScalar(G),_.copy(y).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(G),d[q].add(A),d[P].add(A),d[R].add(A),h[q].add(_),h[P].add(_),h[R].add(_))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let q=0,P=k.length;q<P;++q){const R=k[q],G=R.start,ue=R.count;for(let ne=G,he=G+ue;ne<he;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const I=new V,N=new V,Z=new V,z=new V;function F(q){Z.fromBufferAttribute(o,q),z.copy(Z);const P=d[q];I.copy(P),I.sub(Z.multiplyScalar(Z.dot(P))).normalize(),N.crossVectors(z,P);const G=N.dot(h[q])<0?-1:1;u.setXYZW(q,I.x,I.y,I.z,G)}for(let q=0,P=k.length;q<P;++q){const R=k[q],G=R.start,ue=R.count;for(let ne=G,he=G+ue;ne<he;ne+=3)F(e.getX(ne+0)),F(e.getX(ne+1)),F(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new V,l=new V,u=new V,d=new V,h=new V,g=new V,x=new V,y=new V;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),A=e.getX(S+1),_=e.getX(S+2);o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,_),x.subVectors(u,l),y.subVectors(o,l),x.cross(y),d.fromBufferAttribute(r,b),h.fromBufferAttribute(r,A),g.fromBufferAttribute(r,_),d.add(x),h.add(x),g.add(x),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(_,g.x,g.y,g.z)}else for(let S=0,M=n.count;S<M;S+=3)o.fromBufferAttribute(n,S+0),l.fromBufferAttribute(n,S+1),u.fromBufferAttribute(n,S+2),x.subVectors(u,l),y.subVectors(o,l),x.cross(y),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,h){const g=d.array,x=d.itemSize,y=d.normalized,S=new g.constructor(h.length*x);let M=0,b=0;for(let A=0,_=h.length;A<_;A++){d.isInterleavedBufferAttribute?M=h[A]*d.data.stride+d.offset:M=h[A]*x;for(let v=0;v<x;v++)S[b++]=g[M++]}return new Mi(S,x,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xi,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],g=e(h,r);n.setAttribute(d,g)}const l=this.morphAttributes;for(const d in l){const h=[],g=l[d];for(let x=0,y=g.length;x<y;x++){const S=g[x],M=e(S,r);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const g=u[d];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const g in h)h[g]!==void 0&&(e[g]=h[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const g=r[h];e.data.attributes[h]=g.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const g=this.morphAttributes[h],x=[];for(let y=0,S=g.length;y<S;y++){const M=g[y];x.push(M.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const g in o){const x=o[g];this.setAttribute(g,x.clone(n))}const l=e.morphAttributes;for(const g in l){const x=[],y=l[g];for(let S=0,M=y.length;S<M;S++)x.push(y[S].clone(n));this.morphAttributes[g]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let g=0,x=u.length;g<x;g++){const y=u[g];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new Bt,Gr=new m_,hl=new Zd,fm=new V,pl=new V,ml=new V,gl=new V,Vu=new V,xl=new V,hm=new V,vl=new V;class ui extends gn{constructor(e=new Xi,n=new Og){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){xl.set(0,0,0);for(let h=0,g=l.length;h<g;h++){const x=d[h],y=l[h];x!==0&&(Vu.fromBufferAttribute(y,e),u?xl.addScaledVector(Vu,x):xl.addScaledVector(Vu.sub(n),x))}n.add(xl)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(hl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(hl,fm)===null||Gr.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(dm.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(dm),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Gr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,g=l.attributes.uv,x=l.attributes.uv1,y=l.attributes.normal,S=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,A=S.length;b<A;b++){const _=S[b],v=u[_.materialIndex],k=Math.max(_.start,M.start),I=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let N=k,Z=I;N<Z;N+=3){const z=d.getX(N),F=d.getX(N+1),q=d.getX(N+2);o=_l(this,v,e,r,g,x,y,z,F,q),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let _=b,v=A;_<v;_+=3){const k=d.getX(_),I=d.getX(_+1),N=d.getX(_+2);o=_l(this,u,e,r,g,x,y,k,I,N),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let b=0,A=S.length;b<A;b++){const _=S[b],v=u[_.materialIndex],k=Math.max(_.start,M.start),I=Math.min(h.count,Math.min(_.start+_.count,M.start+M.count));for(let N=k,Z=I;N<Z;N+=3){const z=N,F=N+1,q=N+2;o=_l(this,v,e,r,g,x,y,z,F,q),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const b=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let _=b,v=A;_<v;_+=3){const k=_,I=_+1,N=_+2;o=_l(this,u,e,r,g,x,y,k,I,N),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}}}function w_(s,e,n,r,o,l,u,d){let h;if(e.side===Pn?h=r.intersectTriangle(u,l,o,!0,d):h=r.intersectTriangle(o,l,u,e.side===wr,d),h===null)return null;vl.copy(d),vl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(vl);return g<n.near||g>n.far?null:{distance:g,point:vl.clone(),object:s}}function _l(s,e,n,r,o,l,u,d,h,g){s.getVertexPosition(d,pl),s.getVertexPosition(h,ml),s.getVertexPosition(g,gl);const x=w_(s,e,n,r,pl,ml,gl,hm);if(x){const y=new V;li.getBarycoord(hm,pl,ml,gl,y),o&&(x.uv=li.getInterpolatedAttribute(o,d,h,g,y,new nt)),l&&(x.uv1=li.getInterpolatedAttribute(l,d,h,g,y,new nt)),u&&(x.normal=li.getInterpolatedAttribute(u,d,h,g,y,new V),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:h,c:g,normal:new V,materialIndex:0};li.getNormal(pl,ml,gl,S.normal),x.face=S,x.barycoord=y}return x}class $a extends Xi{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],g=[],x=[],y=[];let S=0,M=0;b("z","y","x",-1,-1,r,n,e,u,l,0),b("z","y","x",1,-1,r,n,-e,u,l,1),b("x","z","y",1,1,e,r,n,o,u,2),b("x","z","y",1,-1,e,r,-n,o,u,3),b("x","y","z",1,-1,e,n,r,o,l,4),b("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Bn(g,3)),this.setAttribute("normal",new Bn(x,3)),this.setAttribute("uv",new Bn(y,2));function b(A,_,v,k,I,N,Z,z,F,q,P){const R=N/F,G=Z/q,ue=N/2,ne=Z/2,he=z/2,me=F+1,ce=q+1;let fe=0,H=0;const le=new V;for(let L=0;L<ce;L++){const E=L*G-ne;for(let W=0;W<me;W++){const xe=W*R-ue;le[A]=xe*k,le[_]=E*I,le[v]=he,g.push(le.x,le.y,le.z),le[A]=0,le[_]=0,le[v]=z>0?1:-1,x.push(le.x,le.y,le.z),y.push(W/F),y.push(1-L/q),fe+=1}}for(let L=0;L<q;L++)for(let E=0;E<F;E++){const W=S+E+me*L,xe=S+E+me*(L+1),X=S+(E+1)+me*(L+1),ee=S+(E+1)+me*L;h.push(W,xe,ee),h.push(xe,X,ee),H+=6}d.addGroup(M,H,P),M+=H,S+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Sn(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const o in r)e[o]=r[o]}return e}function b_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const T_={clone:Ks,merge:Sn};var A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends qa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A_,this.fragmentShader=C_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=b_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Vg extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new V,pm=new nt,mm=new nt;class zn extends Vg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vd*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,g=u.fullHeight;l+=u.offsetX*o/h,n-=u.offsetY*r/g,o*=u.width/h,r*=u.height/g}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,zs=1;class R_ extends gn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zn(Os,zs,e,n);o.layers=this.layers,this.add(o);const l=new zn(Os,zs,e,n);l.layers=this.layers,this.add(l);const u=new zn(Os,zs,e,n);u.layers=this.layers,this.add(u);const d=new zn(Os,zs,e,n);d.layers=this.layers,this.add(d);const h=new zn(Os,zs,e,n);h.layers=this.layers,this.add(h);const g=new zn(Os,zs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,d,h]=n;for(const g of n)this.remove(g);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,g,x]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,h),e.setRenderTarget(r,4,o),e.render(n,g),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(y,S,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Gg extends Ln{constructor(e,n,r,o,l,u,d,h,g,x){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,r,o,l,u,d,h,g,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class N_ extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Gg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new $a(5,5,5),l=new br({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:Mr});l.uniforms.tEquirect.value=n;const u=new ui(o,l),d=n.minFilter;return n.minFilter===Zr&&(n.minFilter=Si),new R_(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}const Gu=new V,P_=new V,L_=new ht;class Yr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Gu.subVectors(r,n).cross(P_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Gu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||L_.getNormalMatrix(e),o=this.coplanarPoint(Gu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Zd,yl=new V;class Qd{constructor(e=new Yr,n=new Yr,r=new Yr,o=new Yr,l=new Yr,u=new Yr){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Gi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],h=o[3],g=o[4],x=o[5],y=o[6],S=o[7],M=o[8],b=o[9],A=o[10],_=o[11],v=o[12],k=o[13],I=o[14],N=o[15];if(r[0].setComponents(h-l,S-g,_-M,N-v).normalize(),r[1].setComponents(h+l,S+g,_+M,N+v).normalize(),r[2].setComponents(h+u,S+x,_+b,N+k).normalize(),r[3].setComponents(h-u,S-x,_-b,N-k).normalize(),r[4].setComponents(h-d,S-y,_-A,N-I).normalize(),n===Gi)r[5].setComponents(h+d,S+y,_+A,N+I).normalize();else if(n===Pl)r[5].setComponents(d,y,A,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(yl.x=o.normal.x>0?e.max.x:e.min.x,yl.y=o.normal.y>0?e.max.y:e.min.y,yl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jg(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function D_(s){const e=new WeakMap;function n(d,h){const g=d.array,x=d.usage,y=g.byteLength,S=s.createBuffer();s.bindBuffer(h,S),s.bufferData(h,g,x),d.onUploadCallback();let M;if(g instanceof Float32Array)M=s.FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=s.SHORT;else if(g instanceof Uint32Array)M=s.UNSIGNED_INT;else if(g instanceof Int32Array)M=s.INT;else if(g instanceof Int8Array)M=s.BYTE;else if(g instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,h,g){const x=h.array,y=h.updateRanges;if(s.bindBuffer(g,d),y.length===0)s.bufferSubData(g,0,x);else{y.sort((M,b)=>M.start-b.start);let S=0;for(let M=1;M<y.length;M++){const b=y[S],A=y[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++S,y[S]=A)}y.length=S+1;for(let M=0,b=y.length;M<b;M++){const A=y[M];s.bufferSubData(g,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,n(d,h));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,d,h),g.version=d.version}}return{get:o,remove:l,update:u}}class Ul extends Xi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,d=Math.floor(r),h=Math.floor(o),g=d+1,x=h+1,y=e/d,S=n/h,M=[],b=[],A=[],_=[];for(let v=0;v<x;v++){const k=v*S-u;for(let I=0;I<g;I++){const N=I*y-l;b.push(N,-k,0),A.push(0,0,1),_.push(I/d),_.push(1-v/h)}}for(let v=0;v<h;v++)for(let k=0;k<d;k++){const I=k+g*v,N=k+g*(v+1),Z=k+1+g*(v+1),z=k+1+g*v;M.push(I,N,z),M.push(N,Z,z)}this.setIndex(M),this.setAttribute("position",new Bn(b,3)),this.setAttribute("normal",new Bn(A,3)),this.setAttribute("uv",new Bn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.width,e.height,e.widthSegments,e.heightSegments)}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,H_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,G_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,q_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",dy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,py=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,My=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ly=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ky=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,By=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ES=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:I_,alphahash_pars_fragment:U_,alphamap_fragment:k_,alphamap_pars_fragment:F_,alphatest_fragment:O_,alphatest_pars_fragment:z_,aomap_fragment:B_,aomap_pars_fragment:H_,batching_pars_vertex:V_,batching_vertex:G_,begin_vertex:j_,beginnormal_vertex:W_,bsdfs:X_,iridescence_fragment:Y_,bumpmap_pars_fragment:q_,clipping_planes_fragment:$_,clipping_planes_pars_fragment:K_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:Z_,color_fragment:Q_,color_pars_fragment:ey,color_pars_vertex:ty,color_vertex:ny,common:iy,cube_uv_reflection_fragment:ry,defaultnormal_vertex:sy,displacementmap_pars_vertex:ay,displacementmap_vertex:oy,emissivemap_fragment:ly,emissivemap_pars_fragment:cy,colorspace_fragment:uy,colorspace_pars_fragment:dy,envmap_fragment:fy,envmap_common_pars_fragment:hy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:Ty,envmap_vertex:gy,fog_vertex:xy,fog_pars_vertex:vy,fog_fragment:_y,fog_pars_fragment:yy,gradientmap_pars_fragment:Sy,lightmap_pars_fragment:My,lights_lambert_fragment:Ey,lights_lambert_pars_fragment:wy,lights_pars_begin:by,lights_toon_fragment:Ay,lights_toon_pars_fragment:Cy,lights_phong_fragment:Ry,lights_phong_pars_fragment:Ny,lights_physical_fragment:Py,lights_physical_pars_fragment:Ly,lights_fragment_begin:Dy,lights_fragment_maps:Iy,lights_fragment_end:Uy,logdepthbuf_fragment:ky,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:Oy,logdepthbuf_vertex:zy,map_fragment:By,map_pars_fragment:Hy,map_particle_fragment:Vy,map_particle_pars_fragment:Gy,metalnessmap_fragment:jy,metalnessmap_pars_fragment:Wy,morphinstance_vertex:Xy,morphcolor_vertex:Yy,morphnormal_vertex:qy,morphtarget_pars_vertex:$y,morphtarget_vertex:Ky,normal_fragment_begin:Jy,normal_fragment_maps:Zy,normal_pars_fragment:Qy,normal_pars_vertex:eS,normal_vertex:tS,normalmap_pars_fragment:nS,clearcoat_normal_fragment_begin:iS,clearcoat_normal_fragment_maps:rS,clearcoat_pars_fragment:sS,iridescence_pars_fragment:aS,opaque_fragment:oS,packing:lS,premultiplied_alpha_fragment:cS,project_vertex:uS,dithering_fragment:dS,dithering_pars_fragment:fS,roughnessmap_fragment:hS,roughnessmap_pars_fragment:pS,shadowmap_pars_fragment:mS,shadowmap_pars_vertex:gS,shadowmap_vertex:xS,shadowmask_pars_fragment:vS,skinbase_vertex:_S,skinning_pars_vertex:yS,skinning_vertex:SS,skinnormal_vertex:MS,specularmap_fragment:ES,specularmap_pars_fragment:wS,tonemapping_fragment:bS,tonemapping_pars_fragment:TS,transmission_fragment:AS,transmission_pars_fragment:CS,uv_pars_fragment:RS,uv_pars_vertex:NS,uv_vertex:PS,worldpos_vertex:LS,background_vert:DS,background_frag:IS,backgroundCube_vert:US,backgroundCube_frag:kS,cube_vert:FS,cube_frag:OS,depth_vert:zS,depth_frag:BS,distanceRGBA_vert:HS,distanceRGBA_frag:VS,equirect_vert:GS,equirect_frag:jS,linedashed_vert:WS,linedashed_frag:XS,meshbasic_vert:YS,meshbasic_frag:qS,meshlambert_vert:$S,meshlambert_frag:KS,meshmatcap_vert:JS,meshmatcap_frag:ZS,meshnormal_vert:QS,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:rM,meshtoon_vert:sM,meshtoon_frag:aM,points_vert:oM,points_frag:lM,shadow_vert:cM,shadow_frag:uM,sprite_vert:dM,sprite_frag:fM},Pe={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},yi={basic:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Sn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Sn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Sn([Pe.points,Pe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Sn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Sn([Pe.common,Pe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Sn([Pe.sprite,Pe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Sn([Pe.common,Pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Sn([Pe.lights,Pe.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};yi.physical={uniforms:Sn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Sl={r:0,b:0,g:0},Wr=new Ei,hM=new Bt;function pM(s,e,n,r,o,l,u){const d=new yt(0);let h=l===!0?0:1,g,x,y=null,S=0,M=null;function b(k){let I=k.isScene===!0?k.background:null;return I&&I.isTexture&&(I=(k.backgroundBlurriness>0?n:e).get(I)),I}function A(k){let I=!1;const N=b(k);N===null?v(d,h):N&&N.isColor&&(v(N,1),I=!0);const Z=s.xr.getEnvironmentBlendMode();Z==="additive"?r.buffers.color.setClear(0,0,0,1,u):Z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(k,I){const N=b(I);N&&(N.isCubeTexture||N.mapping===Dl)?(x===void 0&&(x=new ui(new $a(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:Ks(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(Z,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Wr.copy(I.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),x.material.uniforms.envMap.value=N,x.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(Wr)),x.material.toneMapped=Et.getTransfer(N.colorSpace)!==Pt,(y!==N||S!==N.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,y=N,S=N.version,M=s.toneMapping),x.layers.enableAll(),k.unshift(x,x.geometry,x.material,0,0,null)):N&&N.isTexture&&(g===void 0&&(g=new ui(new Ul(2,2),new br({name:"BackgroundMaterial",uniforms:Ks(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(g)),g.material.uniforms.t2D.value=N,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.toneMapped=Et.getTransfer(N.colorSpace)!==Pt,N.matrixAutoUpdate===!0&&N.updateMatrix(),g.material.uniforms.uvTransform.value.copy(N.matrix),(y!==N||S!==N.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,y=N,S=N.version,M=s.toneMapping),g.layers.enableAll(),k.unshift(g,g.geometry,g.material,0,0,null))}function v(k,I){k.getRGB(Sl,Hg(s)),r.buffers.color.setClear(Sl.r,Sl.g,Sl.b,I,u)}return{getClearColor:function(){return d},setClearColor:function(k,I=1){d.set(k),h=I,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(k){h=k,v(d,h)},render:A,addToRenderList:_}}function mM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,u=!1;function d(R,G,ue,ne,he){let me=!1;const ce=y(ne,ue,G);l!==ce&&(l=ce,g(l.object)),me=M(R,ne,ue,he),me&&b(R,ne,ue,he),he!==null&&e.update(he,s.ELEMENT_ARRAY_BUFFER),(me||u)&&(u=!1,N(R,G,ue,ne),he!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function h(){return s.createVertexArray()}function g(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function y(R,G,ue){const ne=ue.wireframe===!0;let he=r[R.id];he===void 0&&(he={},r[R.id]=he);let me=he[G.id];me===void 0&&(me={},he[G.id]=me);let ce=me[ne];return ce===void 0&&(ce=S(h()),me[ne]=ce),ce}function S(R){const G=[],ue=[],ne=[];for(let he=0;he<n;he++)G[he]=0,ue[he]=0,ne[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ue,attributeDivisors:ne,object:R,attributes:{},index:null}}function M(R,G,ue,ne){const he=l.attributes,me=G.attributes;let ce=0;const fe=ue.getAttributes();for(const H in fe)if(fe[H].location>=0){const L=he[H];let E=me[H];if(E===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(E=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(E=R.instanceColor)),L===void 0||L.attribute!==E||E&&L.data!==E.data)return!0;ce++}return l.attributesNum!==ce||l.index!==ne}function b(R,G,ue,ne){const he={},me=G.attributes;let ce=0;const fe=ue.getAttributes();for(const H in fe)if(fe[H].location>=0){let L=me[H];L===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(L=R.instanceColor));const E={};E.attribute=L,L&&L.data&&(E.data=L.data),he[H]=E,ce++}l.attributes=he,l.attributesNum=ce,l.index=ne}function A(){const R=l.newAttributes;for(let G=0,ue=R.length;G<ue;G++)R[G]=0}function _(R){v(R,0)}function v(R,G){const ue=l.newAttributes,ne=l.enabledAttributes,he=l.attributeDivisors;ue[R]=1,ne[R]===0&&(s.enableVertexAttribArray(R),ne[R]=1),he[R]!==G&&(s.vertexAttribDivisor(R,G),he[R]=G)}function k(){const R=l.newAttributes,G=l.enabledAttributes;for(let ue=0,ne=G.length;ue<ne;ue++)G[ue]!==R[ue]&&(s.disableVertexAttribArray(ue),G[ue]=0)}function I(R,G,ue,ne,he,me,ce){ce===!0?s.vertexAttribIPointer(R,G,ue,he,me):s.vertexAttribPointer(R,G,ue,ne,he,me)}function N(R,G,ue,ne){A();const he=ne.attributes,me=ue.getAttributes(),ce=G.defaultAttributeValues;for(const fe in me){const H=me[fe];if(H.location>=0){let le=he[fe];if(le===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const L=le.normalized,E=le.itemSize,W=e.get(le);if(W===void 0)continue;const xe=W.buffer,X=W.type,ee=W.bytesPerElement,de=X===s.INT||X===s.UNSIGNED_INT||le.gpuType===Xd;if(le.isInterleavedBufferAttribute){const ie=le.data,ge=ie.stride,be=le.offset;if(ie.isInstancedInterleavedBuffer){for(let Le=0;Le<H.locationSize;Le++)v(H.location+Le,ie.meshPerAttribute);R.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Le=0;Le<H.locationSize;Le++)_(H.location+Le);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let Le=0;Le<H.locationSize;Le++)I(H.location+Le,E/H.locationSize,X,L,ge*ee,(be+E/H.locationSize*Le)*ee,de)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)v(H.location+ie,le.meshPerAttribute);R.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<H.locationSize;ie++)_(H.location+ie);s.bindBuffer(s.ARRAY_BUFFER,xe);for(let ie=0;ie<H.locationSize;ie++)I(H.location+ie,E/H.locationSize,X,L,E*ee,E/H.locationSize*ie*ee,de)}}else if(ce!==void 0){const L=ce[fe];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(H.location,L);break;case 3:s.vertexAttrib3fv(H.location,L);break;case 4:s.vertexAttrib4fv(H.location,L);break;default:s.vertexAttrib1fv(H.location,L)}}}}k()}function Z(){q();for(const R in r){const G=r[R];for(const ue in G){const ne=G[ue];for(const he in ne)x(ne[he].object),delete ne[he];delete G[ue]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const ue in G){const ne=G[ue];for(const he in ne)x(ne[he].object),delete ne[he];delete G[ue]}delete r[R.id]}function F(R){for(const G in r){const ue=r[G];if(ue[R.id]===void 0)continue;const ne=ue[R.id];for(const he in ne)x(ne[he].object),delete ne[he];delete ue[R.id]}}function q(){P(),u=!0,l!==o&&(l=o,g(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:q,resetDefaultState:P,dispose:Z,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:_,disableUnusedAttributes:k}}function gM(s,e,n){let r;function o(g){r=g}function l(g,x){s.drawArrays(r,g,x),n.update(x,r,1)}function u(g,x,y){y!==0&&(s.drawArraysInstanced(r,g,x,y),n.update(x,r,y))}function d(g,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,x,0,y);let M=0;for(let b=0;b<y;b++)M+=x[b];n.update(M,r,1)}function h(g,x,y,S){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)u(g[b],x[b],S[b]);else{M.multiDrawArraysInstancedWEBGL(r,g,0,x,0,S,0,y);let b=0;for(let A=0;A<y;A++)b+=x[A]*S[A];n.update(b,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function xM(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==ci&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const q=F===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Wi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!q)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const x=h(g);x!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",x,"instead."),g=x);const y=n.logarithmicDepthBuffer===!0,S=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),k=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),Z=b>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:y,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:k,maxVaryings:I,maxFragmentUniforms:N,vertexTextures:Z,maxSamples:z}}function vM(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new Yr,d=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||r!==0||o;return o=S,r=y.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,S){n=x(y,S,0)},this.setState=function(y,S,M){const b=y.clippingPlanes,A=y.clipIntersection,_=y.clipShadows,v=s.get(y);if(!o||b===null||b.length===0||l&&!_)l?x(null):g();else{const k=l?0:r,I=k*4;let N=v.clippingState||null;h.value=N,N=x(b,S,I,M);for(let Z=0;Z!==I;++Z)N[Z]=n[Z];v.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=k}};function g(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(y,S,M,b){const A=y!==null?y.length:0;let _=null;if(A!==0){if(_=h.value,b!==!0||_===null){const v=M+A*4,k=S.matrixWorldInverse;d.getNormalMatrix(k),(_===null||_.length<v)&&(_=new Float32Array(v));for(let I=0,N=M;I!==A;++I,N+=4)u.copy(y[I]).applyMatrix4(k,d),u.normal.toArray(_,N),_[N+3]=u.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}function _M(s){let e=new WeakMap;function n(u,d){return d===fd?u.mapping=Xs:d===hd&&(u.mapping=Ys),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===fd||d===hd)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const g=new N_(h.height);return g.fromEquirectangularTexture(s,u),e.set(u,g),u.addEventListener("dispose",o),n(g.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Wg extends Vg{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,u=l+g*this.view.width,d-=x*this.view.offsetY,h=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hs=4,gm=[.125,.215,.35,.446,.526,.582],Kr=20,ju=new Wg,xm=new yt;let Wu=null,Xu=0,Yu=0,qu=!1;const qr=(1+Math.sqrt(5))/2,Bs=1/qr,vm=[new V(-qr,Bs,0),new V(qr,Bs,0),new V(-Bs,0,qr),new V(Bs,0,qr),new V(0,qr,-Bs),new V(0,qr,Bs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class _m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,Xu,Yu),this._renderer.xr.enabled=qu,e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),Yu=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:ja,format:ci,colorSpace:Js,depthBuffer:!1},o=ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yM(l)),this._blurMaterial=SM(l,e,n)}return o}_compileMaterial(e){const n=new ui(this._lodPlanes[0],e);this._renderer.compile(n,ju)}_sceneToCubeUV(e,n,r,o){const d=new zn(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,y=x.autoClear,S=x.toneMapping;x.getClearColor(xm),x.toneMapping=Er,x.autoClear=!1;const M=new Og({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),b=new ui(new $a,M);let A=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,A=!0):(M.color.copy(xm),A=!0);for(let v=0;v<6;v++){const k=v%3;k===0?(d.up.set(0,h[v],0),d.lookAt(g[v],0,0)):k===1?(d.up.set(0,0,h[v]),d.lookAt(0,g[v],0)):(d.up.set(0,h[v],0),d.lookAt(0,0,g[v]));const I=this._cubeSize;Ml(o,k*I,v>2?I:0,I,I),x.setRenderTarget(o),A&&x.render(b,d),x.render(e,d)}b.geometry.dispose(),b.material.dispose(),x.toneMapping=S,x.autoClear=y,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Xs||e.mapping===Ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new ui(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Ml(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,ju)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=vm[(o-l-1)%vm.length];this._blur(e,l-1,l,u,d)}n.autoClear=r}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,d){const h=this._renderer,g=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,y=new ui(this._lodPlanes[o],g),S=g.uniforms,M=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Kr-1),A=l/b,_=isFinite(l)?1+Math.floor(x*A):Kr;_>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Kr}`);const v=[];let k=0;for(let F=0;F<Kr;++F){const q=F/A,P=Math.exp(-q*q/2);v.push(P),F===0?k+=P:F<_&&(k+=2*P)}for(let F=0;F<v.length;F++)v[F]=v[F]/k;S.envMap.value=e.texture,S.samples.value=_,S.weights.value=v,S.latitudinal.value=u==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:I}=this;S.dTheta.value=b,S.mipInt.value=I-r;const N=this._sizeLods[o],Z=3*N*(o>I-Hs?o-I+Hs:0),z=4*(this._cubeSize-N);Ml(n,Z,z,3*N,2*N),h.setRenderTarget(n),h.render(y,ju)}}function yM(s){const e=[],n=[],r=[];let o=s;const l=s-Hs+1+gm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);n.push(d);let h=1/d;u>s-Hs?h=gm[u-s+Hs-1]:u===0&&(h=0),r.push(h);const g=1/(d-2),x=-g,y=1+g,S=[x,x,y,x,y,y,x,x,y,y,x,y],M=6,b=6,A=3,_=2,v=1,k=new Float32Array(A*b*M),I=new Float32Array(_*b*M),N=new Float32Array(v*b*M);for(let z=0;z<M;z++){const F=z%3*2/3-1,q=z>2?0:-1,P=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];k.set(P,A*b*z),I.set(S,_*b*z);const R=[z,z,z,z,z,z];N.set(R,v*b*z)}const Z=new Xi;Z.setAttribute("position",new Mi(k,A)),Z.setAttribute("uv",new Mi(I,_)),Z.setAttribute("faceIndex",new Mi(N,v)),e.push(Z),o>Hs&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function ym(s,e,n){const r=new ts(s,e,n);return r.texture.mapping=Dl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ml(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function SM(s,e,n){const r=new Float32Array(Kr),o=new V(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Sm(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Mm(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function ef(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const h=d.mapping,g=h===fd||h===hd,x=h===Xs||h===Ys;if(g||x){let y=e.get(d);const S=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return n===null&&(n=new _m(s)),y=g?n.fromEquirectangular(d,y):n.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const M=d.image;return g&&M&&M.height>0||x&&M&&o(M)?(n===null&&(n=new _m(s)),y=g?n.fromEquirectangular(d):n.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",l),y.texture):null}}}return d}function o(d){let h=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&h++;return h===g}function l(d){const h=d.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function EM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Oa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function wM(s,e,n,r){const o={},l=new WeakMap;function u(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const A=S.morphAttributes[b];for(let _=0,v=A.length;_<v;_++)e.remove(A[_])}S.removeEventListener("dispose",u),delete o[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function d(y,S){return o[S.id]===!0||(S.addEventListener("dispose",u),o[S.id]=!0,n.memory.geometries++),S}function h(y){const S=y.attributes;for(const b in S)e.update(S[b],s.ARRAY_BUFFER);const M=y.morphAttributes;for(const b in M){const A=M[b];for(let _=0,v=A.length;_<v;_++)e.update(A[_],s.ARRAY_BUFFER)}}function g(y){const S=[],M=y.index,b=y.attributes.position;let A=0;if(M!==null){const k=M.array;A=M.version;for(let I=0,N=k.length;I<N;I+=3){const Z=k[I+0],z=k[I+1],F=k[I+2];S.push(Z,z,z,F,F,Z)}}else if(b!==void 0){const k=b.array;A=b.version;for(let I=0,N=k.length/3-1;I<N;I+=3){const Z=I+0,z=I+1,F=I+2;S.push(Z,z,z,F,F,Z)}}else return;const _=new(Dg(S)?Bg:zg)(S,1);_.version=A;const v=l.get(y);v&&e.remove(v),l.set(y,_)}function x(y){const S=l.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&g(y)}else g(y);return l.get(y)}return{get:d,update:h,getWireframeAttribute:x}}function bM(s,e,n){let r;function o(S){r=S}let l,u;function d(S){l=S.type,u=S.bytesPerElement}function h(S,M){s.drawElements(r,M,l,S*u),n.update(M,r,1)}function g(S,M,b){b!==0&&(s.drawElementsInstanced(r,M,l,S*u,b),n.update(M,r,b))}function x(S,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,S,0,b);let _=0;for(let v=0;v<b;v++)_+=M[v];n.update(_,r,1)}function y(S,M,b,A){if(b===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<S.length;v++)g(S[v]/u,M[v],A[v]);else{_.multiDrawElementsInstancedWEBGL(r,M,0,l,S,0,A,0,b);let v=0;for(let k=0;k<b;k++)v+=M[k]*A[k];n.update(v,r,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=g,this.renderMultiDraw=x,this.renderMultiDrawInstances=y}function TM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function AM(s,e,n){const r=new WeakMap,o=new Lt;function l(u,d,h){const g=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=x!==void 0?x.length:0;let S=r.get(d);if(S===void 0||S.count!==y){let R=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],k=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let N=0;b===!0&&(N=1),A===!0&&(N=2),_===!0&&(N=3);let Z=d.attributes.position.count*N,z=1;Z>e.maxTextureSize&&(z=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const F=new Float32Array(Z*z*4*y),q=new Ug(F,Z,z,y);q.type=Vi,q.needsUpdate=!0;const P=N*4;for(let G=0;G<y;G++){const ue=v[G],ne=k[G],he=I[G],me=Z*z*4*G;for(let ce=0;ce<ue.count;ce++){const fe=ce*P;b===!0&&(o.fromBufferAttribute(ue,ce),F[me+fe+0]=o.x,F[me+fe+1]=o.y,F[me+fe+2]=o.z,F[me+fe+3]=0),A===!0&&(o.fromBufferAttribute(ne,ce),F[me+fe+4]=o.x,F[me+fe+5]=o.y,F[me+fe+6]=o.z,F[me+fe+7]=0),_===!0&&(o.fromBufferAttribute(he,ce),F[me+fe+8]=o.x,F[me+fe+9]=o.y,F[me+fe+10]=o.z,F[me+fe+11]=he.itemSize===4?o.w:1)}}S={count:y,texture:q,size:new nt(Z,z)},r.set(d,S),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let b=0;for(let _=0;_<g.length;_++)b+=g[_];const A=d.morphTargetsRelative?1:1-b;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",g)}h.getUniforms().setValue(s,"morphTargetsTexture",S.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function CM(s,e,n,r){let o=new WeakMap;function l(h){const g=r.render.frame,x=h.geometry,y=e.get(h,x);if(o.get(y)!==g&&(e.update(y),o.set(y,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==g&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,g))),h.isSkinnedMesh){const S=h.skeleton;o.get(S)!==g&&(S.update(),o.set(S,g))}return y}function u(){o=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:l,dispose:u}}class Xg extends Ln{constructor(e,n,r,o,l,u,d,h,g,x=Gs){if(x!==Gs&&x!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Gs&&(r=es),r===void 0&&x===$s&&(r=qs),super(null,o,l,u,d,h,x,r,g),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:di,this.minFilter=h!==void 0?h:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Yg=new Ln,Em=new Xg(1,1),qg=new Ug,$g=new h_,Kg=new Gg,wm=[],bm=[],Tm=new Float32Array(16),Am=new Float32Array(9),Cm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=wm[o];if(l===void 0&&(l=new Float32Array(o),wm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function kl(s,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function RM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function NM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function PM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function DM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Cm.set(r),s.uniformMatrix2fv(this.addr,!1,Cm),Qt(n,r)}}function IM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Am.set(r),s.uniformMatrix3fv(this.addr,!1,Am),Qt(n,r)}}function UM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Tm.set(r),s.uniformMatrix4fv(this.addr,!1,Tm),Qt(n,r)}}function kM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function FM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function OM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function zM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function BM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function jM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Em.compareFunction=Lg,l=Em):l=Yg,n.setTexture2D(e||l,o)}function WM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||$g,o)}function XM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||Kg,o)}function YM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||qg,o)}function qM(s){switch(s){case 5126:return RM;case 35664:return NM;case 35665:return PM;case 35666:return LM;case 35674:return DM;case 35675:return IM;case 35676:return UM;case 5124:case 35670:return kM;case 35667:case 35671:return FM;case 35668:case 35672:return OM;case 35669:case 35673:return zM;case 5125:return BM;case 36294:return HM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return YM}}function $M(s,e){s.uniform1fv(this.addr,e)}function KM(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function JM(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function ZM(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function QM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function e1(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function t1(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function n1(s,e){s.uniform1iv(this.addr,e)}function i1(s,e){s.uniform2iv(this.addr,e)}function r1(s,e){s.uniform3iv(this.addr,e)}function s1(s,e){s.uniform4iv(this.addr,e)}function a1(s,e){s.uniform1uiv(this.addr,e)}function o1(s,e){s.uniform2uiv(this.addr,e)}function l1(s,e){s.uniform3uiv(this.addr,e)}function c1(s,e){s.uniform4uiv(this.addr,e)}function u1(s,e,n){const r=this.cache,o=e.length,l=kl(n,o);Zt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Yg,l[u])}function d1(s,e,n){const r=this.cache,o=e.length,l=kl(n,o);Zt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||$g,l[u])}function f1(s,e,n){const r=this.cache,o=e.length,l=kl(n,o);Zt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Kg,l[u])}function h1(s,e,n){const r=this.cache,o=e.length,l=kl(n,o);Zt(r,l)||(s.uniform1iv(this.addr,l),Qt(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||qg,l[u])}function p1(s){switch(s){case 5126:return $M;case 35664:return KM;case 35665:return JM;case 35666:return ZM;case 35674:return QM;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return a1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return h1}}class m1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=qM(n.type)}}class g1{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=p1(n.type)}}class x1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const $u=/(\w+)(\])?(\[|\.)?/g;function Rm(s,e){s.seq.push(e),s.map[e.id]=e}function v1(s,e,n){const r=s.name,o=r.length;for($u.lastIndex=0;;){const l=$u.exec(r),u=$u.lastIndex;let d=l[1];const h=l[2]==="]",g=l[3];if(h&&(d=d|0),g===void 0||g==="["&&u+2===o){Rm(n,g===void 0?new m1(d,s,e):new g1(d,s,e));break}else{let y=n.map[d];y===void 0&&(y=new x1(d),Rm(n,y)),n=y}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(n,o),u=e.getUniformLocation(n,l.name);v1(l,u,this)}}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Nm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const _1=37297;let y1=0;function S1(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Pm=new ht;function M1(s){Et._getMatrix(Pm,Et.workingColorSpace,s);const e=`mat3( ${Pm.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Il:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Lm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+o+`

`+S1(s.getShaderSource(e),u)}else return o}function E1(s,e){const n=M1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function w1(s,e){let n;switch(e){case Hv:n="Linear";break;case Vv:n="Reinhard";break;case Gv:n="Cineon";break;case _g:n="ACESFilmic";break;case Wv:n="AgX";break;case Xv:n="Neutral";break;case jv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new V;function b1(){Et.getLuminanceCoefficients(El);const s=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function A1(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function C1(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function za(s){return s!==""}function Dm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(s){return s.replace(R1,P1)}const N1=new Map;function P1(s,e){let n=pt[e];if(n===void 0){const r=N1.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gd(n)}const L1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(s){return s.replace(L1,D1)}function D1(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function km(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function U1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Xs:case Ys:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function F1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case zv:e="ENVMAP_BLENDING_MIX";break;case Bv:e="ENVMAP_BLENDING_ADD";break}return e}function O1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function z1(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=I1(n),g=U1(n),x=k1(n),y=F1(n),S=O1(n),M=T1(n),b=A1(l),A=o.createProgram();let _,v,k=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(za).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(za).join(`
`),v.length>0&&(v+=`
`)):(_=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),v=[km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",n.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?pt.tonemapping_pars_fragment:"",n.toneMapping!==Er?w1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,E1("linearToOutputTexel",n.outputColorSpace),b1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(za).join(`
`)),u=Gd(u),u=Dm(u,n),u=Im(u,n),d=Gd(d),d=Dm(d,n),d=Im(d,n),u=Um(u),d=Um(d),n.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=k+_+u,N=k+v+d,Z=Nm(o,o.VERTEX_SHADER,I),z=Nm(o,o.FRAGMENT_SHADER,N);o.attachShader(A,Z),o.attachShader(A,z),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(G){if(s.debug.checkShaderErrors){const ue=o.getProgramInfoLog(A).trim(),ne=o.getShaderInfoLog(Z).trim(),he=o.getShaderInfoLog(z).trim();let me=!0,ce=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,Z,z);else{const fe=Lm(o,Z,"vertex"),H=Lm(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ue+`
`+fe+`
`+H)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(ne===""||he==="")&&(ce=!1);ce&&(G.diagnostics={runnable:me,programLog:ue,vertexShader:{log:ne,prefix:_},fragmentShader:{log:he,prefix:v}})}o.deleteShader(Z),o.deleteShader(z),q=new Nl(o,A),P=C1(o,A)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,_1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=y1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=Z,this.fragmentShader=z,this}let B1=0;class H1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new V1(e),n.set(e,r)),r}}class V1{constructor(e){this.id=B1++,this.code=e,this.usedTimes=0}}function G1(s,e,n,r,o,l,u){const d=new kg,h=new H1,g=new Set,x=[],y=o.logarithmicDepthBuffer,S=o.vertexTextures;let M=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return g.add(P),P===0?"uv":`uv${P}`}function _(P,R,G,ue,ne){const he=ue.fog,me=ne.geometry,ce=P.isMeshStandardMaterial?ue.environment:null,fe=(P.isMeshStandardMaterial?n:e).get(P.envMap||ce),H=fe&&fe.mapping===Dl?fe.image.height:null,le=b[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const L=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,E=L!==void 0?L.length:0;let W=0;me.morphAttributes.position!==void 0&&(W=1),me.morphAttributes.normal!==void 0&&(W=2),me.morphAttributes.color!==void 0&&(W=3);let xe,X,ee,de;if(le){const St=yi[le];xe=St.vertexShader,X=St.fragmentShader}else xe=P.vertexShader,X=P.fragmentShader,h.update(P),ee=h.getVertexShaderID(P),de=h.getFragmentShaderID(P);const ie=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),be=ne.isInstancedMesh===!0,Le=ne.isBatchedMesh===!0,Je=!!P.map,$e=!!P.matcap,lt=!!fe,O=!!P.aoMap,Ct=!!P.lightMap,it=!!P.bumpMap,tt=!!P.normalMap,Ve=!!P.displacementMap,xt=!!P.emissiveMap,Fe=!!P.metalnessMap,D=!!P.roughnessMap,T=P.anisotropy>0,te=P.clearcoat>0,_e=P.dispersion>0,ye=P.iridescence>0,pe=P.sheen>0,Ge=P.transmission>0,Re=T&&!!P.anisotropyMap,Ue=te&&!!P.clearcoatMap,dt=te&&!!P.clearcoatNormalMap,Ee=te&&!!P.clearcoatRoughnessMap,Oe=ye&&!!P.iridescenceMap,Ze=ye&&!!P.iridescenceThicknessMap,rt=pe&&!!P.sheenColorMap,Be=pe&&!!P.sheenRoughnessMap,mt=!!P.specularMap,ct=!!P.specularColorMap,Rt=!!P.specularIntensityMap,Y=Ge&&!!P.transmissionMap,Ne=Ge&&!!P.thicknessMap,oe=!!P.gradientMap,ve=!!P.alphaMap,Ie=P.alphaTest>0,De=!!P.alphaHash,ut=!!P.extensions;let Ut=Er;P.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const qt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:xe,fragmentShader:X,defines:P.defines,customVertexShaderID:ee,customFragmentShaderID:de,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Le,batchingColor:Le&&ne._colorsTexture!==null,instancing:be,instancingColor:be&&ne.instanceColor!==null,instancingMorph:be&&ne.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Js,alphaToCoverage:!!P.alphaToCoverage,map:Je,matcap:$e,envMap:lt,envMapMode:lt&&fe.mapping,envMapCubeUVHeight:H,aoMap:O,lightMap:Ct,bumpMap:it,normalMap:tt,displacementMap:S&&Ve,emissiveMap:xt,normalMapObjectSpace:tt&&P.normalMapType===Kv,normalMapTangentSpace:tt&&P.normalMapType===Pg,metalnessMap:Fe,roughnessMap:D,anisotropy:T,anisotropyMap:Re,clearcoat:te,clearcoatMap:Ue,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ee,dispersion:_e,iridescence:ye,iridescenceMap:Oe,iridescenceThicknessMap:Ze,sheen:pe,sheenColorMap:rt,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:ct,specularIntensityMap:Rt,transmission:Ge,transmissionMap:Y,thicknessMap:Ne,gradientMap:oe,opaque:P.transparent===!1&&P.blending===Vs&&P.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:De,combine:P.combine,mapUv:Je&&A(P.map.channel),aoMapUv:O&&A(P.aoMap.channel),lightMapUv:Ct&&A(P.lightMap.channel),bumpMapUv:it&&A(P.bumpMap.channel),normalMapUv:tt&&A(P.normalMap.channel),displacementMapUv:Ve&&A(P.displacementMap.channel),emissiveMapUv:xt&&A(P.emissiveMap.channel),metalnessMapUv:Fe&&A(P.metalnessMap.channel),roughnessMapUv:D&&A(P.roughnessMap.channel),anisotropyMapUv:Re&&A(P.anisotropyMap.channel),clearcoatMapUv:Ue&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:dt&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(P.sheenRoughnessMap.channel),specularMapUv:mt&&A(P.specularMap.channel),specularColorMapUv:ct&&A(P.specularColorMap.channel),specularIntensityMapUv:Rt&&A(P.specularIntensityMap.channel),transmissionMapUv:Y&&A(P.transmissionMap.channel),thicknessMapUv:Ne&&A(P.thicknessMap.channel),alphaMapUv:ve&&A(P.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(tt||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!me.attributes.uv&&(Je||ve),fog:!!he,useFog:P.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:ge,skinning:ne.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:W,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Je&&P.map.isVideoTexture===!0&&Et.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:xt&&P.emissiveMap.isVideoTexture===!0&&Et.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Hi,flipSided:P.side===Pn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ut&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&P.extensions.multiDraw===!0||Le)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return qt.vertexUv1s=g.has(1),qt.vertexUv2s=g.has(2),qt.vertexUv3s=g.has(3),g.clear(),qt}function v(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const G in P.defines)R.push(G),R.push(P.defines[G]);return P.isRawShaderMaterial===!1&&(k(R,P),I(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function k(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function I(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function N(P){const R=b[P.type];let G;if(R){const ue=yi[R];G=T_.clone(ue.uniforms)}else G=P.uniforms;return G}function Z(P,R){let G;for(let ue=0,ne=x.length;ue<ne;ue++){const he=x[ue];if(he.cacheKey===R){G=he,++G.usedTimes;break}}return G===void 0&&(G=new z1(s,R,P,l),x.push(G)),G}function z(P){if(--P.usedTimes===0){const R=x.indexOf(P);x[R]=x[x.length-1],x.pop(),P.destroy()}}function F(P){h.remove(P)}function q(){h.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:N,acquireProgram:Z,releaseProgram:z,releaseShaderCache:F,programs:x,dispose:q}}function j1(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function W1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Fm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Om(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(y,S,M,b,A,_){let v=s[e];return v===void 0?(v={id:y.id,object:y,geometry:S,material:M,groupOrder:b,renderOrder:y.renderOrder,z:A,group:_},s[e]=v):(v.id=y.id,v.object=y,v.geometry=S,v.material=M,v.groupOrder=b,v.renderOrder=y.renderOrder,v.z=A,v.group=_),e++,v}function d(y,S,M,b,A,_){const v=u(y,S,M,b,A,_);M.transmission>0?r.push(v):M.transparent===!0?o.push(v):n.push(v)}function h(y,S,M,b,A,_){const v=u(y,S,M,b,A,_);M.transmission>0?r.unshift(v):M.transparent===!0?o.unshift(v):n.unshift(v)}function g(y,S){n.length>1&&n.sort(y||W1),r.length>1&&r.sort(S||Fm),o.length>1&&o.sort(S||Fm)}function x(){for(let y=e,S=s.length;y<S;y++){const M=s[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:x,sort:g}}function X1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Om,s.set(r,[u])):o>=l.length?(u=new Om,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function Y1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new yt};break;case"SpotLight":n={position:new V,direction:new V,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=n,n}}}function q1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let $1=0;function K1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function J1(s){const e=new Y1,n=q1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new V);const o=new V,l=new Bt,u=new Bt;function d(g){let x=0,y=0,S=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let M=0,b=0,A=0,_=0,v=0,k=0,I=0,N=0,Z=0,z=0,F=0;g.sort(K1);for(let P=0,R=g.length;P<R;P++){const G=g[P],ue=G.color,ne=G.intensity,he=G.distance,me=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=ue.r*ne,y+=ue.g*ne,S+=ue.b*ne;else if(G.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(G.sh.coefficients[ce],ne);F++}else if(G.isDirectionalLight){const ce=e.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const fe=G.shadow,H=n.get(G);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=me,r.directionalShadowMatrix[M]=G.shadow.matrix,k++}r.directional[M]=ce,M++}else if(G.isSpotLight){const ce=e.get(G);ce.position.setFromMatrixPosition(G.matrixWorld),ce.color.copy(ue).multiplyScalar(ne),ce.distance=he,ce.coneCos=Math.cos(G.angle),ce.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ce.decay=G.decay,r.spot[A]=ce;const fe=G.shadow;if(G.map&&(r.spotLightMap[Z]=G.map,Z++,fe.updateMatrices(G),G.castShadow&&z++),r.spotLightMatrix[A]=fe.matrix,G.castShadow){const H=n.get(G);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,r.spotShadow[A]=H,r.spotShadowMap[A]=me,N++}A++}else if(G.isRectAreaLight){const ce=e.get(G);ce.color.copy(ue).multiplyScalar(ne),ce.halfWidth.set(G.width*.5,0,0),ce.halfHeight.set(0,G.height*.5,0),r.rectArea[_]=ce,_++}else if(G.isPointLight){const ce=e.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity),ce.distance=G.distance,ce.decay=G.decay,G.castShadow){const fe=G.shadow,H=n.get(G);H.shadowIntensity=fe.intensity,H.shadowBias=fe.bias,H.shadowNormalBias=fe.normalBias,H.shadowRadius=fe.radius,H.shadowMapSize=fe.mapSize,H.shadowCameraNear=fe.camera.near,H.shadowCameraFar=fe.camera.far,r.pointShadow[b]=H,r.pointShadowMap[b]=me,r.pointShadowMatrix[b]=G.shadow.matrix,I++}r.point[b]=ce,b++}else if(G.isHemisphereLight){const ce=e.get(G);ce.skyColor.copy(G.color).multiplyScalar(ne),ce.groundColor.copy(G.groundColor).multiplyScalar(ne),r.hemi[v]=ce,v++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=y,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==M||q.pointLength!==b||q.spotLength!==A||q.rectAreaLength!==_||q.hemiLength!==v||q.numDirectionalShadows!==k||q.numPointShadows!==I||q.numSpotShadows!==N||q.numSpotMaps!==Z||q.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=_,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=k,r.directionalShadowMap.length=k,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=k,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=N+Z-z,r.spotLightMap.length=Z,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,q.directionalLength=M,q.pointLength=b,q.spotLength=A,q.rectAreaLength=_,q.hemiLength=v,q.numDirectionalShadows=k,q.numPointShadows=I,q.numSpotShadows=N,q.numSpotMaps=Z,q.numLightProbes=F,r.version=$1++)}function h(g,x){let y=0,S=0,M=0,b=0,A=0;const _=x.matrixWorldInverse;for(let v=0,k=g.length;v<k;v++){const I=g[v];if(I.isDirectionalLight){const N=r.directional[y];N.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(_),y++}else if(I.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(_),M++}else if(I.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(_),u.identity(),l.copy(I.matrixWorld),l.premultiply(_),u.extractRotation(l),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),b++}else if(I.isPointLight){const N=r.point[S];N.position.setFromMatrixPosition(I.matrixWorld),N.position.applyMatrix4(_),S++}else if(I.isHemisphereLight){const N=r.hemi[A];N.direction.setFromMatrixPosition(I.matrixWorld),N.direction.transformDirection(_),A++}}}return{setup:d,setupView:h,state:r}}function zm(s){const e=new J1(s),n=[],r=[];function o(x){g.camera=x,n.length=0,r.length=0}function l(x){n.push(x)}function u(x){r.push(x)}function d(){e.setup(n)}function h(x){e.setupView(n,x)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:g,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function Z1(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new zm(s),e.set(o,[d])):l>=u.length?(d=new zm(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class Q1 extends qa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eE extends qa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iE(s,e,n){let r=new Qd;const o=new nt,l=new nt,u=new Lt,d=new Q1({depthPacking:$v}),h=new eE,g={},x=n.maxTextureSize,y={[wr]:Pn,[Pn]:wr,[Hi]:Hi},S=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:tE,fragmentShader:nE}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Xi;b.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ui(b,S),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xg;let v=this.type;this.render=function(z,F,q){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||z.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),ue=s.state;ue.setBlending(Mr),ue.buffers.color.setClear(1,1,1,1),ue.buffers.depth.setTest(!0),ue.setScissorTest(!1);const ne=v!==Bi&&this.type===Bi,he=v===Bi&&this.type!==Bi;for(let me=0,ce=z.length;me<ce;me++){const fe=z[me],H=fe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const le=H.getFrameExtents();if(o.multiply(le),l.copy(H.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/le.x),o.x=l.x*le.x,H.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/le.y),o.y=l.y*le.y,H.mapSize.y=l.y)),H.map===null||ne===!0||he===!0){const E=this.type!==Bi?{minFilter:di,magFilter:di}:{};H.map!==null&&H.map.dispose(),H.map=new ts(o.x,o.y,E),H.map.texture.name=fe.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const L=H.getViewportCount();for(let E=0;E<L;E++){const W=H.getViewport(E);u.set(l.x*W.x,l.y*W.y,l.x*W.z,l.y*W.w),ue.viewport(u),H.updateMatrices(fe,E),r=H.getFrustum(),N(F,q,H.camera,fe,this.type)}H.isPointLightShadow!==!0&&this.type===Bi&&k(H,q),H.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(P,R,G)};function k(z,F){const q=e.update(A);S.defines.VSM_SAMPLES!==z.blurSamples&&(S.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ts(o.x,o.y)),S.uniforms.shadow_pass.value=z.map.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,q,S,A,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,q,M,A,null)}function I(z,F,q,P){let R=null;const G=q.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)R=G;else if(R=q.isPointLight===!0?h:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ue=R.uuid,ne=F.uuid;let he=g[ue];he===void 0&&(he={},g[ue]=he);let me=he[ne];me===void 0&&(me=R.clone(),he[ne]=me,F.addEventListener("dispose",Z)),R=me}if(R.visible=F.visible,R.wireframe=F.wireframe,P===Bi?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:y[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ue=s.properties.get(R);ue.light=q}return R}function N(z,F,q,P,R){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Bi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,z.matrixWorld);const ne=e.update(z),he=z.material;if(Array.isArray(he)){const me=ne.groups;for(let ce=0,fe=me.length;ce<fe;ce++){const H=me[ce],le=he[H.materialIndex];if(le&&le.visible){const L=I(z,le,P,R);z.onBeforeShadow(s,z,F,q,ne,L,H),s.renderBufferDirect(q,null,ne,L,z,H),z.onAfterShadow(s,z,F,q,ne,L,H)}}}else if(he.visible){const me=I(z,he,P,R);z.onBeforeShadow(s,z,F,q,ne,me,null),s.renderBufferDirect(q,null,ne,me,z,null),z.onAfterShadow(s,z,F,q,ne,me,null)}}const ue=z.children;for(let ne=0,he=ue.length;ne<he;ne++)N(ue[ne],F,q,P,R)}function Z(z){z.target.removeEventListener("dispose",Z);for(const q in g){const P=g[q],R=z.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const rE={[sd]:ad,[od]:ud,[ld]:dd,[Ws]:cd,[ad]:sd,[ud]:od,[dd]:ld,[cd]:Ws};function sE(s,e){function n(){let Y=!1;const Ne=new Lt;let oe=null;const ve=new Lt(0,0,0,0);return{setMask:function(Ie){oe!==Ie&&!Y&&(s.colorMask(Ie,Ie,Ie,Ie),oe=Ie)},setLocked:function(Ie){Y=Ie},setClear:function(Ie,De,ut,Ut,qt){qt===!0&&(Ie*=Ut,De*=Ut,ut*=Ut),Ne.set(Ie,De,ut,Ut),ve.equals(Ne)===!1&&(s.clearColor(Ie,De,ut,Ut),ve.copy(Ne))},reset:function(){Y=!1,oe=null,ve.set(-1,0,0,0)}}}function r(){let Y=!1,Ne=!1,oe=null,ve=null,Ie=null;return{setReversed:function(De){if(Ne!==De){const ut=e.get("EXT_clip_control");Ne?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ie;Ie=null,this.setClear(Ut)}Ne=De},getReversed:function(){return Ne},setTest:function(De){De?ie(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(De){oe!==De&&!Y&&(s.depthMask(De),oe=De)},setFunc:function(De){if(Ne&&(De=rE[De]),ve!==De){switch(De){case sd:s.depthFunc(s.NEVER);break;case ad:s.depthFunc(s.ALWAYS);break;case od:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case ld:s.depthFunc(s.EQUAL);break;case cd:s.depthFunc(s.GEQUAL);break;case ud:s.depthFunc(s.GREATER);break;case dd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=De}},setLocked:function(De){Y=De},setClear:function(De){Ie!==De&&(Ne&&(De=1-De),s.clearDepth(De),Ie=De)},reset:function(){Y=!1,oe=null,ve=null,Ie=null,Ne=!1}}}function o(){let Y=!1,Ne=null,oe=null,ve=null,Ie=null,De=null,ut=null,Ut=null,qt=null;return{setTest:function(St){Y||(St?ie(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(St){Ne!==St&&!Y&&(s.stencilMask(St),Ne=St)},setFunc:function(St,Mn,xn){(oe!==St||ve!==Mn||Ie!==xn)&&(s.stencilFunc(St,Mn,xn),oe=St,ve=Mn,Ie=xn)},setOp:function(St,Mn,xn){(De!==St||ut!==Mn||Ut!==xn)&&(s.stencilOp(St,Mn,xn),De=St,ut=Mn,Ut=xn)},setLocked:function(St){Y=St},setClear:function(St){qt!==St&&(s.clearStencil(St),qt=St)},reset:function(){Y=!1,Ne=null,oe=null,ve=null,Ie=null,De=null,ut=null,Ut=null,qt=null}}}const l=new n,u=new r,d=new o,h=new WeakMap,g=new WeakMap;let x={},y={},S=new WeakMap,M=[],b=null,A=!1,_=null,v=null,k=null,I=null,N=null,Z=null,z=null,F=new yt(0,0,0),q=0,P=!1,R=null,G=null,ue=null,ne=null,he=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,fe=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(H)[1]),ce=fe>=1):H.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ce=fe>=2);let le=null,L={};const E=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),xe=new Lt().fromArray(E),X=new Lt().fromArray(W);function ee(Y,Ne,oe,ve){const Ie=new Uint8Array(4),De=s.createTexture();s.bindTexture(Y,De),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<oe;ut++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ne+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return De}const de={};de[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ie(s.DEPTH_TEST),u.setFunc(Ws),it(!1),tt(Gp),ie(s.CULL_FACE),O(Mr);function ie(Y){x[Y]!==!0&&(s.enable(Y),x[Y]=!0)}function ge(Y){x[Y]!==!1&&(s.disable(Y),x[Y]=!1)}function be(Y,Ne){return y[Y]!==Ne?(s.bindFramebuffer(Y,Ne),y[Y]=Ne,Y===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Ne),Y===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Le(Y,Ne){let oe=M,ve=!1;if(Y){oe=S.get(Ne),oe===void 0&&(oe=[],S.set(Ne,oe));const Ie=Y.textures;if(oe.length!==Ie.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let De=0,ut=Ie.length;De<ut;De++)oe[De]=s.COLOR_ATTACHMENT0+De;oe.length=Ie.length,ve=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,ve=!0);ve&&s.drawBuffers(oe)}function Je(Y){return b!==Y?(s.useProgram(Y),b=Y,!0):!1}const $e={[$r]:s.FUNC_ADD,[Mv]:s.FUNC_SUBTRACT,[Ev]:s.FUNC_REVERSE_SUBTRACT};$e[wv]=s.MIN,$e[bv]=s.MAX;const lt={[Tv]:s.ZERO,[Av]:s.ONE,[Cv]:s.SRC_COLOR,[id]:s.SRC_ALPHA,[Iv]:s.SRC_ALPHA_SATURATE,[Lv]:s.DST_COLOR,[Nv]:s.DST_ALPHA,[Rv]:s.ONE_MINUS_SRC_COLOR,[rd]:s.ONE_MINUS_SRC_ALPHA,[Dv]:s.ONE_MINUS_DST_COLOR,[Pv]:s.ONE_MINUS_DST_ALPHA,[Uv]:s.CONSTANT_COLOR,[kv]:s.ONE_MINUS_CONSTANT_COLOR,[Fv]:s.CONSTANT_ALPHA,[Ov]:s.ONE_MINUS_CONSTANT_ALPHA};function O(Y,Ne,oe,ve,Ie,De,ut,Ut,qt,St){if(Y===Mr){A===!0&&(ge(s.BLEND),A=!1);return}if(A===!1&&(ie(s.BLEND),A=!0),Y!==Sv){if(Y!==_||St!==P){if((v!==$r||N!==$r)&&(s.blendEquation(s.FUNC_ADD),v=$r,N=$r),St)switch(Y){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jp:s.blendFunc(s.ONE,s.ONE);break;case Wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}k=null,I=null,Z=null,z=null,F.set(0,0,0),q=0,_=Y,P=St}return}Ie=Ie||Ne,De=De||oe,ut=ut||ve,(Ne!==v||Ie!==N)&&(s.blendEquationSeparate($e[Ne],$e[Ie]),v=Ne,N=Ie),(oe!==k||ve!==I||De!==Z||ut!==z)&&(s.blendFuncSeparate(lt[oe],lt[ve],lt[De],lt[ut]),k=oe,I=ve,Z=De,z=ut),(Ut.equals(F)===!1||qt!==q)&&(s.blendColor(Ut.r,Ut.g,Ut.b,qt),F.copy(Ut),q=qt),_=Y,P=!1}function Ct(Y,Ne){Y.side===Hi?ge(s.CULL_FACE):ie(s.CULL_FACE);let oe=Y.side===Pn;Ne&&(oe=!oe),it(oe),Y.blending===Vs&&Y.transparent===!1?O(Mr):O(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const ve=Y.stencilWrite;d.setTest(ve),ve&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),xt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(Y){R!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),R=Y)}function tt(Y){Y!==vv?(ie(s.CULL_FACE),Y!==G&&(Y===Gp?s.cullFace(s.BACK):Y===_v?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),G=Y}function Ve(Y){Y!==ue&&(ce&&s.lineWidth(Y),ue=Y)}function xt(Y,Ne,oe){Y?(ie(s.POLYGON_OFFSET_FILL),(ne!==Ne||he!==oe)&&(s.polygonOffset(Ne,oe),ne=Ne,he=oe)):ge(s.POLYGON_OFFSET_FILL)}function Fe(Y){Y?ie(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function D(Y){Y===void 0&&(Y=s.TEXTURE0+me-1),le!==Y&&(s.activeTexture(Y),le=Y)}function T(Y,Ne,oe){oe===void 0&&(le===null?oe=s.TEXTURE0+me-1:oe=le);let ve=L[oe];ve===void 0&&(ve={type:void 0,texture:void 0},L[oe]=ve),(ve.type!==Y||ve.texture!==Ne)&&(le!==oe&&(s.activeTexture(oe),le=oe),s.bindTexture(Y,Ne||de[Y]),ve.type=Y,ve.texture=Ne)}function te(){const Y=L[le];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Oe(){try{s.texImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ze(){try{s.texImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function rt(Y){xe.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),xe.copy(Y))}function Be(Y){X.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),X.copy(Y))}function mt(Y,Ne){let oe=g.get(Ne);oe===void 0&&(oe=new WeakMap,g.set(Ne,oe));let ve=oe.get(Y);ve===void 0&&(ve=s.getUniformBlockIndex(Ne,Y.name),oe.set(Y,ve))}function ct(Y,Ne){const ve=g.get(Ne).get(Y);h.get(Ne)!==ve&&(s.uniformBlockBinding(Ne,ve,Y.__bindingPointIndex),h.set(Ne,ve))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},le=null,L={},y={},S=new WeakMap,M=[],b=null,A=!1,_=null,v=null,k=null,I=null,N=null,Z=null,z=null,F=new yt(0,0,0),q=0,P=!1,R=null,G=null,ue=null,ne=null,he=null,xe.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ie,disable:ge,bindFramebuffer:be,drawBuffers:Le,useProgram:Je,setBlending:O,setMaterial:Ct,setFlipSided:it,setCullFace:tt,setLineWidth:Ve,setPolygonOffset:xt,setScissorTest:Fe,activeTexture:D,bindTexture:T,unbindTexture:te,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:Oe,texImage3D:Ze,updateUBOMapping:mt,uniformBlockBinding:ct,texStorage2D:dt,texStorage3D:Ee,texSubImage2D:pe,texSubImage3D:Ge,compressedTexSubImage2D:Re,compressedTexSubImage3D:Ue,scissor:rt,viewport:Be,reset:Rt}}function Bm(s,e,n,r){const o=aE(r);switch(n){case wg:return s*e;case Tg:return s*e;case Ag:return s*e*2;case Cg:return s*e/o.components*o.byteLength;case $d:return s*e/o.components*o.byteLength;case Rg:return s*e*2/o.components*o.byteLength;case Kd:return s*e*2/o.components*o.byteLength;case bg:return s*e*3/o.components*o.byteLength;case ci:return s*e*4/o.components*o.byteLength;case Jd:return s*e*4/o.components*o.byteLength;case bl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Al:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xd:case _d:return Math.max(s,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(s,8)*Math.max(e,8)/2;case yd:case Sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Fd:case Od:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ng:case zd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Bd:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function aE(s){switch(s){case Wi:case Sg:return{byteLength:1,components:1};case Ga:case Mg:case ja:return{byteLength:2,components:1};case Yd:case qd:return{byteLength:2,components:4};case es:case Xd:case Vi:return{byteLength:4,components:1};case Eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function oE(s,e,n,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new nt,x=new WeakMap;let y;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(D,T){return M?new OffscreenCanvas(D,T):Ll("canvas")}function A(D,T,te){let _e=1;const ye=Fe(D);if((ye.width>te||ye.height>te)&&(_e=te/Math.max(ye.width,ye.height)),_e<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(_e*ye.width),Ge=Math.floor(_e*ye.height);y===void 0&&(y=b(pe,Ge));const Re=T?b(pe,Ge):y;return Re.width=pe,Re.height=Ge,Re.getContext("2d").drawImage(D,0,0,pe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+pe+"x"+Ge+")."),Re}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),D;return D}function _(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function k(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(D,T,te,_e,ye=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=T;if(T===s.RED&&(te===s.FLOAT&&(pe=s.R32F),te===s.HALF_FLOAT&&(pe=s.R16F),te===s.UNSIGNED_BYTE&&(pe=s.R8)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(pe=s.R8UI),te===s.UNSIGNED_SHORT&&(pe=s.R16UI),te===s.UNSIGNED_INT&&(pe=s.R32UI),te===s.BYTE&&(pe=s.R8I),te===s.SHORT&&(pe=s.R16I),te===s.INT&&(pe=s.R32I)),T===s.RG&&(te===s.FLOAT&&(pe=s.RG32F),te===s.HALF_FLOAT&&(pe=s.RG16F),te===s.UNSIGNED_BYTE&&(pe=s.RG8)),T===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(pe=s.RG8UI),te===s.UNSIGNED_SHORT&&(pe=s.RG16UI),te===s.UNSIGNED_INT&&(pe=s.RG32UI),te===s.BYTE&&(pe=s.RG8I),te===s.SHORT&&(pe=s.RG16I),te===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),te===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),te===s.UNSIGNED_INT&&(pe=s.RGB32UI),te===s.BYTE&&(pe=s.RGB8I),te===s.SHORT&&(pe=s.RGB16I),te===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),te===s.UNSIGNED_INT&&(pe=s.RGBA32UI),te===s.BYTE&&(pe=s.RGBA8I),te===s.SHORT&&(pe=s.RGBA16I),te===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),T===s.RGBA){const Ge=ye?Il:Et.getTransfer(_e);te===s.FLOAT&&(pe=s.RGBA32F),te===s.HALF_FLOAT&&(pe=s.RGBA16F),te===s.UNSIGNED_BYTE&&(pe=Ge===Pt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(D,T){let te;return D?T===null||T===es||T===qs?te=s.DEPTH24_STENCIL8:T===Vi?te=s.DEPTH32F_STENCIL8:T===Ga&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===es||T===qs?te=s.DEPTH_COMPONENT24:T===Vi?te=s.DEPTH_COMPONENT32F:T===Ga&&(te=s.DEPTH_COMPONENT16),te}function Z(D,T){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==di&&D.minFilter!==Si?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function z(D){const T=D.target;T.removeEventListener("dispose",z),q(T),T.isVideoTexture&&x.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),R(T)}function q(D){const T=r.get(D);if(T.__webglInit===void 0)return;const te=D.source,_e=S.get(te);if(_e){const ye=_e[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(D),Object.keys(_e).length===0&&S.delete(te)}r.remove(D)}function P(D){const T=r.get(D);s.deleteTexture(T.__webglTexture);const te=D.source,_e=S.get(te);delete _e[T.__cacheKey],u.memory.textures--}function R(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let ye=0;ye<T.__webglFramebuffer[_e].length;ye++)s.deleteFramebuffer(T.__webglFramebuffer[_e][ye]);else s.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)s.deleteFramebuffer(T.__webglFramebuffer[_e]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=D.textures;for(let _e=0,ye=te.length;_e<ye;_e++){const pe=r.get(te[_e]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),u.memory.textures--),r.remove(te[_e])}r.remove(D)}let G=0;function ue(){G=0}function ne(){const D=G;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),G+=1,D}function he(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function me(D,T){const te=r.get(D);if(D.isVideoTexture&&Ve(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const _e=D.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(te,D,T);return}}n.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function ce(D,T){const te=r.get(D);if(D.version>0&&te.__version!==D.version){X(te,D,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function fe(D,T){const te=r.get(D);if(D.version>0&&te.__version!==D.version){X(te,D,T);return}n.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function H(D,T){const te=r.get(D);if(D.version>0&&te.__version!==D.version){ee(te,D,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const le={[pd]:s.REPEAT,[Jr]:s.CLAMP_TO_EDGE,[md]:s.MIRRORED_REPEAT},L={[di]:s.NEAREST,[Yv]:s.NEAREST_MIPMAP_NEAREST,[il]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Su]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},E={[Jv]:s.NEVER,[i_]:s.ALWAYS,[Zv]:s.LESS,[Lg]:s.LEQUAL,[Qv]:s.EQUAL,[n_]:s.GEQUAL,[e_]:s.GREATER,[t_]:s.NOTEQUAL};function W(D,T){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Si||T.magFilter===Su||T.magFilter===il||T.magFilter===Zr||T.minFilter===Si||T.minFilter===Su||T.minFilter===il||T.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,le[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,le[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,le[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,L[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,E[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===di||T.minFilter!==il&&T.minFilter!==Zr||T.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function xe(D,T){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",z));const _e=T.source;let ye=S.get(_e);ye===void 0&&(ye={},S.set(_e,ye));const pe=he(T);if(pe!==D.__cacheKey){ye[pe]===void 0&&(ye[pe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),ye[pe].usedTimes++;const Ge=ye[D.__cacheKey];Ge!==void 0&&(ye[D.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(T)),D.__cacheKey=pe,D.__webglTexture=ye[pe].texture}return te}function X(D,T,te){let _e=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=s.TEXTURE_3D);const ye=xe(D,T),pe=T.source;n.bindTexture(_e,D.__webglTexture,s.TEXTURE0+te);const Ge=r.get(pe);if(pe.version!==Ge.__version||ye===!0){n.activeTexture(s.TEXTURE0+te);const Re=Et.getPrimaries(Et.workingColorSpace),Ue=T.colorSpace===Sr?null:Et.getPrimaries(T.colorSpace),dt=T.colorSpace===Sr||Re===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Ee=A(T.image,!1,o.maxTextureSize);Ee=xt(T,Ee);const Oe=l.convert(T.format,T.colorSpace),Ze=l.convert(T.type);let rt=I(T.internalFormat,Oe,Ze,T.colorSpace,T.isVideoTexture);W(_e,T);let Be;const mt=T.mipmaps,ct=T.isVideoTexture!==!0,Rt=Ge.__version===void 0||ye===!0,Y=pe.dataReady,Ne=Z(T,Ee);if(T.isDepthTexture)rt=N(T.format===$s,T.type),Rt&&(ct?n.texStorage2D(s.TEXTURE_2D,1,rt,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Oe,Ze,null));else if(T.isDataTexture)if(mt.length>0){ct&&Rt&&n.texStorage2D(s.TEXTURE_2D,Ne,rt,mt[0].width,mt[0].height);for(let oe=0,ve=mt.length;oe<ve;oe++)Be=mt[oe],ct?Y&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Be.width,Be.height,Oe,Ze,Be.data):n.texImage2D(s.TEXTURE_2D,oe,rt,Be.width,Be.height,0,Oe,Ze,Be.data);T.generateMipmaps=!1}else ct?(Rt&&n.texStorage2D(s.TEXTURE_2D,Ne,rt,Ee.width,Ee.height),Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Oe,Ze,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Oe,Ze,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ct&&Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,rt,mt[0].width,mt[0].height,Ee.depth);for(let oe=0,ve=mt.length;oe<ve;oe++)if(Be=mt[oe],T.format!==ci)if(Oe!==null)if(ct){if(Y)if(T.layerUpdates.size>0){const Ie=Bm(Be.width,Be.height,T.format,T.type);for(const De of T.layerUpdates){const ut=Be.data.subarray(De*Ie/Be.data.BYTES_PER_ELEMENT,(De+1)*Ie/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,De,Be.width,Be.height,1,Oe,ut)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Ee.depth,Oe,Be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,rt,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Y&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Ee.depth,Oe,Ze,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,oe,rt,Be.width,Be.height,Ee.depth,0,Oe,Ze,Be.data)}else{ct&&Rt&&n.texStorage2D(s.TEXTURE_2D,Ne,rt,mt[0].width,mt[0].height);for(let oe=0,ve=mt.length;oe<ve;oe++)Be=mt[oe],T.format!==ci?Oe!==null?ct?Y&&n.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Be.width,Be.height,Oe,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,oe,rt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Y&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Be.width,Be.height,Oe,Ze,Be.data):n.texImage2D(s.TEXTURE_2D,oe,rt,Be.width,Be.height,0,Oe,Ze,Be.data)}else if(T.isDataArrayTexture)if(ct){if(Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ne,rt,Ee.width,Ee.height,Ee.depth),Y)if(T.layerUpdates.size>0){const oe=Bm(Ee.width,Ee.height,T.format,T.type);for(const ve of T.layerUpdates){const Ie=Ee.data.subarray(ve*oe/Ee.data.BYTES_PER_ELEMENT,(ve+1)*oe/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,Ee.width,Ee.height,1,Oe,Ze,Ie)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Ze,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,Oe,Ze,Ee.data);else if(T.isData3DTexture)ct?(Rt&&n.texStorage3D(s.TEXTURE_3D,Ne,rt,Ee.width,Ee.height,Ee.depth),Y&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Oe,Ze,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,Oe,Ze,Ee.data);else if(T.isFramebufferTexture){if(Rt)if(ct)n.texStorage2D(s.TEXTURE_2D,Ne,rt,Ee.width,Ee.height);else{let oe=Ee.width,ve=Ee.height;for(let Ie=0;Ie<Ne;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,rt,oe,ve,0,Oe,Ze,null),oe>>=1,ve>>=1}}else if(mt.length>0){if(ct&&Rt){const oe=Fe(mt[0]);n.texStorage2D(s.TEXTURE_2D,Ne,rt,oe.width,oe.height)}for(let oe=0,ve=mt.length;oe<ve;oe++)Be=mt[oe],ct?Y&&n.texSubImage2D(s.TEXTURE_2D,oe,0,0,Oe,Ze,Be):n.texImage2D(s.TEXTURE_2D,oe,rt,Oe,Ze,Be);T.generateMipmaps=!1}else if(ct){if(Rt){const oe=Fe(Ee);n.texStorage2D(s.TEXTURE_2D,Ne,rt,oe.width,oe.height)}Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Ze,Ee)}else n.texImage2D(s.TEXTURE_2D,0,rt,Oe,Ze,Ee);_(T)&&v(_e),Ge.__version=pe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ee(D,T,te){if(T.image.length!==6)return;const _e=xe(D,T),ye=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+te);const pe=r.get(ye);if(ye.version!==pe.__version||_e===!0){n.activeTexture(s.TEXTURE0+te);const Ge=Et.getPrimaries(Et.workingColorSpace),Re=T.colorSpace===Sr?null:Et.getPrimaries(T.colorSpace),Ue=T.colorSpace===Sr||Ge===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let ve=0;ve<6;ve++)!dt&&!Ee?Oe[ve]=A(T.image[ve],!0,o.maxCubemapSize):Oe[ve]=Ee?T.image[ve].image:T.image[ve],Oe[ve]=xt(T,Oe[ve]);const Ze=Oe[0],rt=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),mt=I(T.internalFormat,rt,Be,T.colorSpace),ct=T.isVideoTexture!==!0,Rt=pe.__version===void 0||_e===!0,Y=ye.dataReady;let Ne=Z(T,Ze);W(s.TEXTURE_CUBE_MAP,T);let oe;if(dt){ct&&Rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,mt,Ze.width,Ze.height);for(let ve=0;ve<6;ve++){oe=Oe[ve].mipmaps;for(let Ie=0;Ie<oe.length;Ie++){const De=oe[Ie];T.format!==ci?rt!==null?ct?Y&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,De.width,De.height,rt,De.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,mt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,De.width,De.height,rt,Be,De.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,mt,De.width,De.height,0,rt,Be,De.data)}}}else{if(oe=T.mipmaps,ct&&Rt){oe.length>0&&Ne++;const ve=Fe(Oe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,mt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ee){ct?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Oe[ve].width,Oe[ve].height,rt,Be,Oe[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,Oe[ve].width,Oe[ve].height,0,rt,Be,Oe[ve].data);for(let Ie=0;Ie<oe.length;Ie++){const ut=oe[Ie].image[ve].image;ct?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,ut.width,ut.height,rt,Be,ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,mt,ut.width,ut.height,0,rt,Be,ut.data)}}else{ct?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,rt,Be,Oe[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,mt,rt,Be,Oe[ve]);for(let Ie=0;Ie<oe.length;Ie++){const De=oe[Ie];ct?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,rt,Be,De.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,mt,rt,Be,De.image[ve])}}}_(T)&&v(s.TEXTURE_CUBE_MAP),pe.__version=ye.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function de(D,T,te,_e,ye,pe){const Ge=l.convert(te.format,te.colorSpace),Re=l.convert(te.type),Ue=I(te.internalFormat,Ge,Re,te.colorSpace),dt=r.get(T),Ee=r.get(te);if(Ee.__renderTarget=T,!dt.__hasExternalTextures){const Oe=Math.max(1,T.width>>pe),Ze=Math.max(1,T.height>>pe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,pe,Ue,Oe,Ze,T.depth,0,Ge,Re,null):n.texImage2D(ye,pe,Ue,Oe,Ze,0,Ge,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),tt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ye,Ee.__webglTexture,0,it(T)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,ye,Ee.__webglTexture,pe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(D,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const _e=T.depthTexture,ye=_e&&_e.isDepthTexture?_e.type:null,pe=N(T.stencilBuffer,ye),Ge=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=it(T);tt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,pe,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,pe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,D)}else{const _e=T.textures;for(let ye=0;ye<_e.length;ye++){const pe=_e[ye],Ge=l.convert(pe.format,pe.colorSpace),Re=l.convert(pe.type),Ue=I(pe.internalFormat,Ge,Re,pe.colorSpace),dt=it(T);te&&tt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Ue,T.width,T.height):tt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(T.depthTexture);_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me(T.depthTexture,0);const ye=_e.__webglTexture,pe=it(T);if(T.depthTexture.format===Gs)tt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(T.depthTexture.format===$s)tt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function be(D){const T=r.get(D),te=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const _e=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",ye)};_e.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=_e}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");ge(T.__webglFramebuffer,D)}else if(te){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=s.createRenderbuffer(),ie(T.__webglDepthbuffer[_e],D,!1);else{const ye=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,pe)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ie(T.__webglDepthbuffer,D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ye)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(D,T,te){const _e=r.get(D);T!==void 0&&de(_e.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&be(D)}function Je(D){const T=D.texture,te=r.get(D),_e=r.get(T);D.addEventListener("dispose",F);const ye=D.textures,pe=D.isWebGLCubeRenderTarget===!0,Ge=ye.length>1;if(Ge||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=T.version,u.memory.textures++),pe){te.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Re]=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)te.__webglFramebuffer[Re][Ue]=s.createFramebuffer()}else te.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Re=0;Re<T.mipmaps.length;Re++)te.__webglFramebuffer[Re]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Re=0,Ue=ye.length;Re<Ue;Re++){const dt=r.get(ye[Re]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&tt(D)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const Ue=ye[Re];te.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Re]);const dt=l.convert(Ue.format,Ue.colorSpace),Ee=l.convert(Ue.type),Oe=I(Ue.internalFormat,dt,Ee,Ue.colorSpace,D.isXRRenderTarget===!0),Ze=it(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Oe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,te.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(te.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){n.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),W(s.TEXTURE_CUBE_MAP,T);for(let Re=0;Re<6;Re++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)de(te.__webglFramebuffer[Re][Ue],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ue);else de(te.__webglFramebuffer[Re],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);_(T)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Re=0,Ue=ye.length;Re<Ue;Re++){const dt=ye[Re],Ee=r.get(dt);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),W(s.TEXTURE_2D,dt),de(te.__webglFramebuffer,D,dt,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),_(dt)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Re=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,_e.__webglTexture),W(Re,T),T.mipmaps&&T.mipmaps.length>0)for(let Ue=0;Ue<T.mipmaps.length;Ue++)de(te.__webglFramebuffer[Ue],D,T,s.COLOR_ATTACHMENT0,Re,Ue);else de(te.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,Re,0);_(T)&&v(Re),n.unbindTexture()}D.depthBuffer&&be(D)}function $e(D){const T=D.textures;for(let te=0,_e=T.length;te<_e;te++){const ye=T[te];if(_(ye)){const pe=k(D),Ge=r.get(ye).__webglTexture;n.bindTexture(pe,Ge),v(pe),n.unbindTexture()}}}const lt=[],O=[];function Ct(D){if(D.samples>0){if(tt(D)===!1){const T=D.textures,te=D.width,_e=D.height;let ye=s.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(D),Re=T.length>1;if(Re)for(let Ue=0;Ue<T.length;Ue++)n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ue=0;Ue<T.length;Ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const dt=r.get(T[Ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,te,_e,0,0,te,_e,ye,s.NEAREST),h===!0&&(lt.length=0,O.length=0,lt.push(s.COLOR_ATTACHMENT0+Ue),D.depthBuffer&&D.resolveDepthBuffer===!1&&(lt.push(pe),O.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ue=0;Ue<T.length;Ue++){n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const dt=r.get(T[Ue]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,dt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function it(D){return Math.min(o.maxSamples,D.samples)}function tt(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ve(D){const T=u.render.frame;x.get(D)!==T&&(x.set(D,T),D.update())}function xt(D,T){const te=D.colorSpace,_e=D.format,ye=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||te!==Js&&te!==Sr&&(Et.getTransfer(te)===Pt?(_e!==ci||ye!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Fe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(g.width=D.naturalWidth||D.width,g.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(g.width=D.displayWidth,g.height=D.displayHeight):(g.width=D.width,g.height=D.height),g}this.allocateTextureUnit=ne,this.resetTextureUnits=ue,this.setTexture2D=me,this.setTexture2DArray=ce,this.setTexture3D=fe,this.setTextureCube=H,this.rebindTextures=Le,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=tt}function lE(s,e){function n(r,o=Sr){let l;const u=Et.getTransfer(o);if(r===Wi)return s.UNSIGNED_BYTE;if(r===Yd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Sg)return s.BYTE;if(r===Mg)return s.SHORT;if(r===Ga)return s.UNSIGNED_SHORT;if(r===Xd)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===ja)return s.HALF_FLOAT;if(r===wg)return s.ALPHA;if(r===bg)return s.RGB;if(r===ci)return s.RGBA;if(r===Tg)return s.LUMINANCE;if(r===Ag)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===Cg)return s.RED;if(r===$d)return s.RED_INTEGER;if(r===Rg)return s.RG;if(r===Kd)return s.RG_INTEGER;if(r===Jd)return s.RGBA_INTEGER;if(r===bl||r===Tl||r===Al||r===Cl)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Al)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Tl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Al)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gd||r===xd||r===vd||r===_d)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===gd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_d)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yd||r===Sd||r===Md)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===yd||r===Sd)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Md)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ed||r===wd||r===bd||r===Td||r===Ad||r===Cd||r===Rd||r===Nd||r===Pd||r===Ld||r===Dd||r===Id||r===Ud||r===kd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ed)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Td)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ad)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ld)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Dd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Id)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ud)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kd)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rl||r===Fd||r===Od)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Rl)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Od)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ng||r===zd||r===Bd||r===Hd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Rl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class cE extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ba extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uE={type:"move"};class Ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){u=!0;for(const A of e.hand.values()){const _=n.getJointPose(A,r),v=this._getHandJoint(g,A);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=g.joints["index-finger-tip"],y=g.joints["thumb-tip"],S=x.position.distanceTo(y.position),M=.02,b=.005;g.inputState.pinching&&S>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&S<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uE)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),g!==null&&(g.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ba;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const dE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new Ln,l=e.properties.get(o);l.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new br({vertexShader:dE,fragmentShader:fE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ui(new Ul(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pE extends Zs{constructor(e,n){super();const r=this;let o=null,l=1,u=null,d="local-floor",h=1,g=null,x=null,y=null,S=null,M=null,b=null;const A=new hE,_=n.getContextAttributes();let v=null,k=null;const I=[],N=[],Z=new nt;let z=null;const F=new zn;F.viewport=new Lt;const q=new zn;q.viewport=new Lt;const P=[F,q],R=new cE;let G=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=I[X];return ee===void 0&&(ee=new Ku,I[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=I[X];return ee===void 0&&(ee=new Ku,I[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=I[X];return ee===void 0&&(ee=new Ku,I[X]=ee),ee.getHandSpace()};function ne(X){const ee=N.indexOf(X.inputSource);if(ee===-1)return;const de=I[ee];de!==void 0&&(de.update(X.inputSource,X.frame,g||u),de.dispatchEvent({type:X.type,data:X.inputSource}))}function he(){o.removeEventListener("select",ne),o.removeEventListener("selectstart",ne),o.removeEventListener("selectend",ne),o.removeEventListener("squeeze",ne),o.removeEventListener("squeezestart",ne),o.removeEventListener("squeezeend",ne),o.removeEventListener("end",he),o.removeEventListener("inputsourceschange",me);for(let X=0;X<I.length;X++){const ee=N[X];ee!==null&&(N[X]=null,I[X].disconnect(ee))}G=null,ue=null,A.reset(),e.setRenderTarget(v),M=null,S=null,y=null,o=null,k=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(Z.width,Z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||u},this.setReferenceSpace=function(X){g=X},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",ne),o.addEventListener("selectstart",ne),o.addEventListener("selectend",ne),o.addEventListener("squeeze",ne),o.addEventListener("squeezestart",ne),o.addEventListener("squeezeend",ne),o.addEventListener("end",he),o.addEventListener("inputsourceschange",me),_.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(Z),o.renderState.layers===void 0){const ee={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,ee),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),k=new ts(M.framebufferWidth,M.framebufferHeight,{format:ci,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,de=null,ie=null;_.depth&&(ie=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=_.stencil?$s:Gs,de=_.stencil?qs:es);const ge={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:l};y=new XRWebGLBinding(o,n),S=y.createProjectionLayer(ge),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),k=new ts(S.textureWidth,S.textureHeight,{format:ci,type:Wi,depthTexture:new Xg(S.textureWidth,S.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(h),g=null,u=await o.requestReferenceSpace(d),xe.setContext(o),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function me(X){for(let ee=0;ee<X.removed.length;ee++){const de=X.removed[ee],ie=N.indexOf(de);ie>=0&&(N[ie]=null,I[ie].disconnect(de))}for(let ee=0;ee<X.added.length;ee++){const de=X.added[ee];let ie=N.indexOf(de);if(ie===-1){for(let be=0;be<I.length;be++)if(be>=N.length){N.push(de),ie=be;break}else if(N[be]===null){N[be]=de,ie=be;break}if(ie===-1)break}const ge=I[ie];ge&&ge.connect(de)}}const ce=new V,fe=new V;function H(X,ee,de){ce.setFromMatrixPosition(ee.matrixWorld),fe.setFromMatrixPosition(de.matrixWorld);const ie=ce.distanceTo(fe),ge=ee.projectionMatrix.elements,be=de.projectionMatrix.elements,Le=ge[14]/(ge[10]-1),Je=ge[14]/(ge[10]+1),$e=(ge[9]+1)/ge[5],lt=(ge[9]-1)/ge[5],O=(ge[8]-1)/ge[0],Ct=(be[8]+1)/be[0],it=Le*O,tt=Le*Ct,Ve=ie/(-O+Ct),xt=Ve*-O;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(xt),X.translateZ(Ve),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ge[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Fe=Le+Ve,D=Je+Ve,T=it-xt,te=tt+(ie-xt),_e=$e*Je/D*Fe,ye=lt*Je/D*Fe;X.projectionMatrix.makePerspective(T,te,_e,ye,Fe,D),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function le(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let ee=X.near,de=X.far;A.texture!==null&&(A.depthNear>0&&(ee=A.depthNear),A.depthFar>0&&(de=A.depthFar)),R.near=q.near=F.near=ee,R.far=q.far=F.far=de,(G!==R.near||ue!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,ue=R.far),F.layers.mask=X.layers.mask|2,q.layers.mask=X.layers.mask|4,R.layers.mask=F.layers.mask|q.layers.mask;const ie=X.parent,ge=R.cameras;le(R,ie);for(let be=0;be<ge.length;be++)le(ge[be],ie);ge.length===2?H(R,F,q):R.projectionMatrix.copy(F.projectionMatrix),L(X,R,ie)};function L(X,ee,de){de===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vd*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&M===null))return h},this.setFoveation=function(X){h=X,S!==null&&(S.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let E=null;function W(X,ee){if(x=ee.getViewerPose(g||u),b=ee,x!==null){const de=x.views;M!==null&&(e.setRenderTargetFramebuffer(k,M.framebuffer),e.setRenderTarget(k));let ie=!1;de.length!==R.cameras.length&&(R.cameras.length=0,ie=!0);for(let be=0;be<de.length;be++){const Le=de[be];let Je=null;if(M!==null)Je=M.getViewport(Le);else{const lt=y.getViewSubImage(S,Le);Je=lt.viewport,be===0&&(e.setRenderTargetTextures(k,lt.colorTexture,S.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(k))}let $e=P[be];$e===void 0&&($e=new zn,$e.layers.enable(be),$e.viewport=new Lt,P[be]=$e),$e.matrix.fromArray(Le.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Le.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(Je.x,Je.y,Je.width,Je.height),be===0&&(R.matrix.copy($e.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ie===!0&&R.cameras.push($e)}const ge=o.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const be=y.getDepthInformation(de[0]);be&&be.isValid&&be.texture&&A.init(e,be,o.renderState)}}for(let de=0;de<I.length;de++){const ie=N[de],ge=I[de];ie!==null&&ge!==void 0&&ge.update(ie,ee,g||u)}E&&E(X,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),b=null}const xe=new jg;xe.setAnimationLoop(W),this.setAnimationLoop=function(X){E=X},this.dispose=function(){}}}const Xr=new Ei,mE=new Bt;function gE(s,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,Hg(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,k,I,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(_,v):v.isMeshToonMaterial?(l(_,v),y(_,v)):v.isMeshPhongMaterial?(l(_,v),x(_,v)):v.isMeshStandardMaterial?(l(_,v),S(_,v),v.isMeshPhysicalMaterial&&M(_,v,N)):v.isMeshMatcapMaterial?(l(_,v),b(_,v)):v.isMeshDepthMaterial?l(_,v):v.isMeshDistanceMaterial?(l(_,v),A(_,v)):v.isMeshNormalMaterial?l(_,v):v.isLineBasicMaterial?(u(_,v),v.isLineDashedMaterial&&d(_,v)):v.isPointsMaterial?h(_,v,k,I):v.isSpriteMaterial?g(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Pn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Pn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const k=e.get(v),I=k.envMap,N=k.envMapRotation;I&&(_.envMap.value=I,Xr.copy(N),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),_.envMapRotation.value.setFromMatrix4(mE.makeRotationFromEuler(Xr)),_.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function d(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function h(_,v,k,I){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*k,_.scale.value=I*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function g(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function y(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function S(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,k){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Pn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=k.texture,_.transmissionSamplerSize.value.set(k.width,k.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function b(_,v){v.matcap&&(_.matcap.value=v.matcap)}function A(_,v){const k=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(k.matrixWorld),_.nearDistance.value=k.shadow.camera.near,_.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function xE(s,e,n,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(k,I){const N=I.program;r.uniformBlockBinding(k,N)}function g(k,I){let N=o[k.id];N===void 0&&(b(k),N=x(k),o[k.id]=N,k.addEventListener("dispose",_));const Z=I.program;r.updateUBOMapping(k,Z);const z=e.render.frame;l[k.id]!==z&&(S(k),l[k.id]=z)}function x(k){const I=y();k.__bindingPointIndex=I;const N=s.createBuffer(),Z=k.__size,z=k.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,Z,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,N),N}function y(){for(let k=0;k<d;k++)if(u.indexOf(k)===-1)return u.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(k){const I=o[k.id],N=k.uniforms,Z=k.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let z=0,F=N.length;z<F;z++){const q=Array.isArray(N[z])?N[z]:[N[z]];for(let P=0,R=q.length;P<R;P++){const G=q[P];if(M(G,z,P,Z)===!0){const ue=G.__offset,ne=Array.isArray(G.value)?G.value:[G.value];let he=0;for(let me=0;me<ne.length;me++){const ce=ne[me],fe=A(ce);typeof ce=="number"||typeof ce=="boolean"?(G.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ue+he,G.__data)):ce.isMatrix3?(G.__data[0]=ce.elements[0],G.__data[1]=ce.elements[1],G.__data[2]=ce.elements[2],G.__data[3]=0,G.__data[4]=ce.elements[3],G.__data[5]=ce.elements[4],G.__data[6]=ce.elements[5],G.__data[7]=0,G.__data[8]=ce.elements[6],G.__data[9]=ce.elements[7],G.__data[10]=ce.elements[8],G.__data[11]=0):(ce.toArray(G.__data,he),he+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ue,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(k,I,N,Z){const z=k.value,F=I+"_"+N;if(Z[F]===void 0)return typeof z=="number"||typeof z=="boolean"?Z[F]=z:Z[F]=z.clone(),!0;{const q=Z[F];if(typeof z=="number"||typeof z=="boolean"){if(q!==z)return Z[F]=z,!0}else if(q.equals(z)===!1)return q.copy(z),!0}return!1}function b(k){const I=k.uniforms;let N=0;const Z=16;for(let F=0,q=I.length;F<q;F++){const P=Array.isArray(I[F])?I[F]:[I[F]];for(let R=0,G=P.length;R<G;R++){const ue=P[R],ne=Array.isArray(ue.value)?ue.value:[ue.value];for(let he=0,me=ne.length;he<me;he++){const ce=ne[he],fe=A(ce),H=N%Z,le=H%fe.boundary,L=H+le;N+=le,L!==0&&Z-L<fe.storage&&(N+=Z-L),ue.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=N,N+=fe.storage}}}const z=N%Z;return z>0&&(N+=Z-z),k.__size=N,k.__cache={},this}function A(k){const I={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(I.boundary=4,I.storage=4):k.isVector2?(I.boundary=8,I.storage=8):k.isVector3||k.isColor?(I.boundary=16,I.storage=12):k.isVector4?(I.boundary=16,I.storage=16):k.isMatrix3?(I.boundary=48,I.storage=48):k.isMatrix4?(I.boundary=64,I.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),I}function _(k){const I=k.target;I.removeEventListener("dispose",_);const N=u.indexOf(I.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function v(){for(const k in o)s.deleteBuffer(o[k]);u=[],o={},l={}}return{bind:h,update:g,dispose:v}}class vE{constructor(e={}){const{canvas:n=s_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const b=new Uint32Array(4),A=new Int32Array(4);let _=null,v=null;const k=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Er,this.toneMappingExposure=1;const N=this;let Z=!1,z=0,F=0,q=null,P=-1,R=null;const G=new Lt,ue=new Lt;let ne=null;const he=new yt(0);let me=0,ce=n.width,fe=n.height,H=1,le=null,L=null;const E=new Lt(0,0,ce,fe),W=new Lt(0,0,ce,fe);let xe=!1;const X=new Qd;let ee=!1,de=!1;const ie=new Bt,ge=new Bt,be=new V,Le=new Lt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function lt(){return q===null?H:1}let O=r;function Ct(C,$){return n.getContext(C,$)}try{const C={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:x,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wd}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",De,!1),O===null){const $="webgl2";if(O=Ct($,C),O===null)throw Ct($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let it,tt,Ve,xt,Fe,D,T,te,_e,ye,pe,Ge,Re,Ue,dt,Ee,Oe,Ze,rt,Be,mt,ct,Rt,Y;function Ne(){it=new EM(O),it.init(),ct=new lE(O,it),tt=new xM(O,it,e,ct),Ve=new sE(O,it),tt.reverseDepthBuffer&&S&&Ve.buffers.depth.setReversed(!0),xt=new TM(O),Fe=new j1,D=new oE(O,it,Ve,Fe,tt,ct,xt),T=new _M(N),te=new MM(N),_e=new D_(O),Rt=new mM(O,_e),ye=new wM(O,_e,xt,Rt),pe=new CM(O,ye,_e,xt),rt=new AM(O,tt,D),Ee=new vM(Fe),Ge=new G1(N,T,te,it,tt,Rt,Ee),Re=new gE(N,Fe),Ue=new X1,dt=new Z1(it),Ze=new pM(N,T,te,Ve,pe,M,h),Oe=new iE(N,pe,tt),Y=new xE(O,xt,tt,Ve),Be=new gM(O,it,xt),mt=new bM(O,it,xt),xt.programs=Ge.programs,N.capabilities=tt,N.extensions=it,N.properties=Fe,N.renderLists=Ue,N.shadowMap=Oe,N.state=Ve,N.info=xt}Ne();const oe=new pE(N,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=it.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=it.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(ce,fe,!1))},this.getSize=function(C){return C.set(ce,fe)},this.setSize=function(C,$,se=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,fe=$,n.width=Math.floor(C*H),n.height=Math.floor($*H),se===!0&&(n.style.width=C+"px",n.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(ce*H,fe*H).floor()},this.setDrawingBufferSize=function(C,$,se){ce=C,fe=$,H=se,n.width=Math.floor(C*se),n.height=Math.floor($*se),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(E)},this.setViewport=function(C,$,se,ae){C.isVector4?E.set(C.x,C.y,C.z,C.w):E.set(C,$,se,ae),Ve.viewport(G.copy(E).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,$,se,ae){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,$,se,ae),Ve.scissor(ue.copy(W).multiplyScalar(H).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(C){Ve.setScissorTest(xe=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){L=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(C=!0,$=!0,se=!0){let ae=0;if(C){let K=!1;if(q!==null){const Ce=q.texture.format;K=Ce===Jd||Ce===Kd||Ce===$d}if(K){const Ce=q.texture.type,Te=Ce===Wi||Ce===es||Ce===Ga||Ce===qs||Ce===Yd||Ce===qd,Xe=Ze.getClearColor(),je=Ze.getClearAlpha(),st=Xe.r,ot=Xe.g,Ye=Xe.b;Te?(b[0]=st,b[1]=ot,b[2]=Ye,b[3]=je,O.clearBufferuiv(O.COLOR,0,b)):(A[0]=st,A[1]=ot,A[2]=Ye,A[3]=je,O.clearBufferiv(O.COLOR,0,A))}else ae|=O.COLOR_BUFFER_BIT}$&&(ae|=O.DEPTH_BUFFER_BIT),se&&(ae|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Ue.dispose(),dt.dispose(),Fe.dispose(),T.dispose(),te.dispose(),pe.dispose(),Rt.dispose(),Y.dispose(),Ge.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",is),oe.removeEventListener("sessionend",qi),wi.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;const C=xt.autoReset,$=Oe.enabled,se=Oe.autoUpdate,ae=Oe.needsUpdate,K=Oe.type;Ne(),xt.autoReset=C,Oe.enabled=$,Oe.autoUpdate=se,Oe.needsUpdate=ae,Oe.type=K}function De(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ut(C){const $=C.target;$.removeEventListener("dispose",ut),Ut($)}function Ut(C){qt(C),Fe.remove(C)}function qt(C){const $=Fe.get(C).programs;$!==void 0&&($.forEach(function(se){Ge.releaseProgram(se)}),C.isShaderMaterial&&Ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,se,ae,K,Ce){$===null&&($=Je);const Te=K.isMesh&&K.matrixWorld.determinant()<0,Xe=Za(C,$,se,ae,K);Ve.setMaterial(ae,Te);let je=se.index,st=1;if(ae.wireframe===!0){if(je=ye.getWireframeAttribute(se),je===void 0)return;st=2}const ot=se.drawRange,Ye=se.attributes.position;let _t=ot.start*st,Tt=(ot.start+ot.count)*st;Ce!==null&&(_t=Math.max(_t,Ce.start*st),Tt=Math.min(Tt,(Ce.start+Ce.count)*st)),je!==null?(_t=Math.max(_t,0),Tt=Math.min(Tt,je.count)):Ye!=null&&(_t=Math.max(_t,0),Tt=Math.min(Tt,Ye.count));const vt=Tt-_t;if(vt<0||vt===1/0)return;Rt.setup(K,ae,Xe,se,je);let ln,ft=Be;if(je!==null&&(ln=_e.get(je),ft=mt,ft.setIndex(ln)),K.isMesh)ae.wireframe===!0?(Ve.setLineWidth(ae.wireframeLinewidth*lt()),ft.setMode(O.LINES)):ft.setMode(O.TRIANGLES);else if(K.isLine){let Ke=ae.linewidth;Ke===void 0&&(Ke=1),Ve.setLineWidth(Ke*lt()),K.isLineSegments?ft.setMode(O.LINES):K.isLineLoop?ft.setMode(O.LINE_LOOP):ft.setMode(O.LINE_STRIP)}else K.isPoints?ft.setMode(O.POINTS):K.isSprite&&ft.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ft.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ft.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Ke=K._multiDrawStarts,Jn=K._multiDrawCounts,wt=K._multiDrawCount,cn=je?_e.get(je).bytesPerElement:1,Zn=Fe.get(ae).currentProgram.getUniforms();for(let $t=0;$t<wt;$t++)Zn.setValue(O,"_gl_DrawID",$t),ft.render(Ke[$t]/cn,Jn[$t])}else if(K.isInstancedMesh)ft.renderInstances(_t,vt,K.count);else if(se.isInstancedBufferGeometry){const Ke=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Jn=Math.min(se.instanceCount,Ke);ft.renderInstances(_t,vt,Jn)}else ft.render(_t,vt)};function St(C,$,se){C.transparent===!0&&C.side===Hi&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,rs(C,$,se),C.side=wr,C.needsUpdate=!0,rs(C,$,se),C.side=Hi):rs(C,$,se)}this.compile=function(C,$,se=null){se===null&&(se=C),v=dt.get(se),v.init($),I.push(v),se.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),C!==se&&C.traverseVisible(function(K){K.isLight&&K.layers.test($.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ae=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ce=K.material;if(Ce)if(Array.isArray(Ce))for(let Te=0;Te<Ce.length;Te++){const Xe=Ce[Te];St(Xe,se,K),ae.add(Xe)}else St(Ce,se,K),ae.add(Ce)}),I.pop(),v=null,ae},this.compileAsync=function(C,$,se=null){const ae=this.compile(C,$,se);return new Promise(K=>{function Ce(){if(ae.forEach(function(Te){Fe.get(Te).currentProgram.isReady()&&ae.delete(Te)}),ae.size===0){K(C);return}setTimeout(Ce,10)}it.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Mn=null;function xn(C){Mn&&Mn(C)}function is(){wi.stop()}function qi(){wi.start()}const wi=new jg;wi.setAnimationLoop(xn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){Mn=C,oe.setAnimationLoop(C),C===null?wi.stop():wi.start()},oe.addEventListener("sessionstart",is),oe.addEventListener("sessionend",qi),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera($),$=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,$,q),v=dt.get(C,I.length),v.init($),I.push(v),ge.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X.setFromProjectionMatrix(ge),de=this.localClippingEnabled,ee=Ee.init(this.clippingPlanes,de),_=Ue.get(C,k.length),_.init(),k.push(_),oe.enabled===!0&&oe.isPresenting===!0){const Ce=N.xr.getDepthSensingMesh();Ce!==null&&bi(Ce,$,-1/0,N.sortObjects)}bi(C,$,0,N.sortObjects),_.finish(),N.sortObjects===!0&&_.sort(le,L),$e=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,$e&&Ze.addToRenderList(_,C),this.info.render.frame++,ee===!0&&Ee.beginShadows();const se=v.state.shadowsArray;Oe.render(se,C,$),ee===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=_.opaque,K=_.transmissive;if(v.setupLights(),$.isArrayCamera){const Ce=$.cameras;if(K.length>0)for(let Te=0,Xe=Ce.length;Te<Xe;Te++){const je=Ce[Te];Ar(ae,K,C,je)}$e&&Ze.render(C);for(let Te=0,Xe=Ce.length;Te<Xe;Te++){const je=Ce[Te];Tr(_,C,je,je.viewport)}}else K.length>0&&Ar(ae,K,C,$),$e&&Ze.render(C),Tr(_,C,$);q!==null&&(D.updateMultisampleRenderTarget(q),D.updateRenderTargetMipmap(q)),C.isScene===!0&&C.onAfterRender(N,C,$),Rt.resetDefaultState(),P=-1,R=null,I.pop(),I.length>0?(v=I[I.length-1],ee===!0&&Ee.setGlobalState(N.clippingPlanes,v.state.camera)):v=null,k.pop(),k.length>0?_=k[k.length-1]:_=null};function bi(C,$,se,ae){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){ae&&Le.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const Te=pe.update(C),Xe=C.material;Xe.visible&&_.push(C,Te,Xe,se,Le.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const Te=pe.update(C),Xe=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Le.copy(C.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Le.copy(Te.boundingSphere.center)),Le.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(Xe)){const je=Te.groups;for(let st=0,ot=je.length;st<ot;st++){const Ye=je[st],_t=Xe[Ye.materialIndex];_t&&_t.visible&&_.push(C,Te,_t,se,Le.z,Ye)}}else Xe.visible&&_.push(C,Te,Xe,se,Le.z,null)}}const Ce=C.children;for(let Te=0,Xe=Ce.length;Te<Xe;Te++)bi(Ce[Te],$,se,ae)}function Tr(C,$,se,ae){const K=C.opaque,Ce=C.transmissive,Te=C.transparent;v.setupLightsView(se),ee===!0&&Ee.setGlobalState(N.clippingPlanes,se),ae&&Ve.viewport(G.copy(ae)),K.length>0&&$i(K,$,se),Ce.length>0&&$i(Ce,$,se),Te.length>0&&$i(Te,$,se),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Ar(C,$,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ae.id]===void 0&&(v.state.transmissionRenderTarget[ae.id]=new ts(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?ja:Wi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ce=v.state.transmissionRenderTarget[ae.id],Te=ae.viewport||G;Ce.setSize(Te.z,Te.w);const Xe=N.getRenderTarget();N.setRenderTarget(Ce),N.getClearColor(he),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),$e&&Ze.render(se);const je=N.toneMapping;N.toneMapping=Er;const st=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),v.setupLightsView(ae),ee===!0&&Ee.setGlobalState(N.clippingPlanes,ae),$i(C,se,ae),D.updateMultisampleRenderTarget(Ce),D.updateRenderTargetMipmap(Ce),it.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ye=0,_t=$.length;Ye<_t;Ye++){const Tt=$[Ye],vt=Tt.object,ln=Tt.geometry,ft=Tt.material,Ke=Tt.group;if(ft.side===Hi&&vt.layers.test(ae.layers)){const Jn=ft.side;ft.side=Pn,ft.needsUpdate=!0,Ka(vt,se,ae,ln,ft,Ke),ft.side=Jn,ft.needsUpdate=!0,ot=!0}}ot===!0&&(D.updateMultisampleRenderTarget(Ce),D.updateRenderTargetMipmap(Ce))}N.setRenderTarget(Xe),N.setClearColor(he,me),st!==void 0&&(ae.viewport=st),N.toneMapping=je}function $i(C,$,se){const ae=$.isScene===!0?$.overrideMaterial:null;for(let K=0,Ce=C.length;K<Ce;K++){const Te=C[K],Xe=Te.object,je=Te.geometry,st=ae===null?Te.material:ae,ot=Te.group;Xe.layers.test(se.layers)&&Ka(Xe,$,se,je,st,ot)}}function Ka(C,$,se,ae,K,Ce){C.onBeforeRender(N,$,se,ae,K,Ce),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(N,$,se,ae,C,Ce),K.transparent===!0&&K.side===Hi&&K.forceSinglePass===!1?(K.side=Pn,K.needsUpdate=!0,N.renderBufferDirect(se,$,ae,K,C,Ce),K.side=wr,K.needsUpdate=!0,N.renderBufferDirect(se,$,ae,K,C,Ce),K.side=Hi):N.renderBufferDirect(se,$,ae,K,C,Ce),C.onAfterRender(N,$,se,ae,K,Ce)}function rs(C,$,se){$.isScene!==!0&&($=Je);const ae=Fe.get(C),K=v.state.lights,Ce=v.state.shadowsArray,Te=K.state.version,Xe=Ge.getParameters(C,K.state,Ce,$,se),je=Ge.getProgramCacheKey(Xe);let st=ae.programs;ae.environment=C.isMeshStandardMaterial?$.environment:null,ae.fog=$.fog,ae.envMap=(C.isMeshStandardMaterial?te:T).get(C.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,st===void 0&&(C.addEventListener("dispose",ut),st=new Map,ae.programs=st);let ot=st.get(je);if(ot!==void 0){if(ae.currentProgram===ot&&ae.lightsStateVersion===Te)return fi(C,Xe),ot}else Xe.uniforms=Ge.getUniforms(C),C.onBeforeCompile(Xe,N),ot=Ge.acquireProgram(Xe,je),st.set(je,ot),ae.uniforms=Xe.uniforms;const Ye=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=Ee.uniform),fi(C,Xe),ae.needsLights=Fl(C),ae.lightsStateVersion=Te,ae.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.directionalShadowMap.value=K.state.directionalShadowMap,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotShadowMap.value=K.state.spotShadowMap,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMap.value=K.state.pointShadowMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),ae.currentProgram=ot,ae.uniformsList=null,ot}function Ja(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Nl.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function fi(C,$){const se=Fe.get(C);se.outputColorSpace=$.outputColorSpace,se.batching=$.batching,se.batchingColor=$.batchingColor,se.instancing=$.instancing,se.instancingColor=$.instancingColor,se.instancingMorph=$.instancingMorph,se.skinning=$.skinning,se.morphTargets=$.morphTargets,se.morphNormals=$.morphNormals,se.morphColors=$.morphColors,se.morphTargetsCount=$.morphTargetsCount,se.numClippingPlanes=$.numClippingPlanes,se.numIntersection=$.numClipIntersection,se.vertexAlphas=$.vertexAlphas,se.vertexTangents=$.vertexTangents,se.toneMapping=$.toneMapping}function Za(C,$,se,ae,K){$.isScene!==!0&&($=Je),D.resetTextureUnits();const Ce=$.fog,Te=ae.isMeshStandardMaterial?$.environment:null,Xe=q===null?N.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Js,je=(ae.isMeshStandardMaterial?te:T).get(ae.envMap||Te),st=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ye=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,Tt=!!se.morphAttributes.color;let vt=Er;ae.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(vt=N.toneMapping);const ln=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ft=ln!==void 0?ln.length:0,Ke=Fe.get(ae),Jn=v.state.lights;if(ee===!0&&(de===!0||C!==R)){const vn=C===R&&ae.id===P;Ee.setState(ae,C,vn)}let wt=!1;ae.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Jn.state.version||Ke.outputColorSpace!==Xe||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isBatchedMesh&&Ke.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ke.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==je||ae.fog===!0&&Ke.fog!==Ce||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ee.numPlanes||Ke.numIntersection!==Ee.numIntersection)||Ke.vertexAlphas!==st||Ke.vertexTangents!==ot||Ke.morphTargets!==Ye||Ke.morphNormals!==_t||Ke.morphColors!==Tt||Ke.toneMapping!==vt||Ke.morphTargetsCount!==ft)&&(wt=!0):(wt=!0,Ke.__version=ae.version);let cn=Ke.currentProgram;wt===!0&&(cn=rs(ae,$,K));let Zn=!1,$t=!1,hi=!1;const Dt=cn.getUniforms(),Hn=Ke.uniforms;if(Ve.useProgram(cn.program)&&(Zn=!0,$t=!0,hi=!0),ae.id!==P&&(P=ae.id,$t=!0),Zn||R!==C){Ve.buffers.depth.getReversed()?(ie.copy(C.projectionMatrix),o_(ie),l_(ie),Dt.setValue(O,"projectionMatrix",ie)):Dt.setValue(O,"projectionMatrix",C.projectionMatrix),Dt.setValue(O,"viewMatrix",C.matrixWorldInverse);const Vn=Dt.map.cameraPosition;Vn!==void 0&&Vn.setValue(O,be.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,$t=!0,hi=!0)}if(K.isSkinnedMesh){Dt.setOptional(O,K,"bindMatrix"),Dt.setOptional(O,K,"bindMatrixInverse");const vn=K.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Dt.setValue(O,"boneTexture",vn.boneTexture,D))}K.isBatchedMesh&&(Dt.setOptional(O,K,"batchingTexture"),Dt.setValue(O,"batchingTexture",K._matricesTexture,D),Dt.setOptional(O,K,"batchingIdTexture"),Dt.setValue(O,"batchingIdTexture",K._indirectTexture,D),Dt.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&Dt.setValue(O,"batchingColorTexture",K._colorsTexture,D));const Ti=se.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&rt.update(K,se,cn),($t||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Dt.setValue(O,"receiveShadow",K.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Hn.envMap.value=je,Hn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&$.environment!==null&&(Hn.envMapIntensity.value=$.environmentIntensity),$t&&(Dt.setValue(O,"toneMappingExposure",N.toneMappingExposure),Ke.needsLights&&Qa(Hn,hi),Ce&&ae.fog===!0&&Re.refreshFogUniforms(Hn,Ce),Re.refreshMaterialUniforms(Hn,ae,H,fe,v.state.transmissionRenderTarget[C.id]),Nl.upload(O,Ja(Ke),Hn,D)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Nl.upload(O,Ja(Ke),Hn,D),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Dt.setValue(O,"center",K.center),Dt.setValue(O,"modelViewMatrix",K.modelViewMatrix),Dt.setValue(O,"normalMatrix",K.normalMatrix),Dt.setValue(O,"modelMatrix",K.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const vn=ae.uniformsGroups;for(let Vn=0,En=vn.length;Vn<En;Vn++){const eo=vn[Vn];Y.update(eo,cn),Y.bind(eo,cn)}}return cn}function Qa(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Fl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,$,se){Fe.get(C.texture).__webglTexture=$,Fe.get(C.depthTexture).__webglTexture=se;const ae=Fe.get(C);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=se===void 0,ae.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,$){const se=Fe.get(C);se.__webglFramebuffer=$,se.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,se=0){q=C,z=$,F=se;let ae=!0,K=null,Ce=!1,Te=!1;if(C){const je=Fe.get(C);if(je.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(O.FRAMEBUFFER,null),ae=!1;else if(je.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(je.__hasExternalTextures)D.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ye=C.depthTexture;if(je.__boundDepthTexture!==Ye){if(Ye!==null&&Fe.has(Ye)&&(C.width!==Ye.image.width||C.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const st=C.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Te=!0);const ot=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ot[$])?K=ot[$][se]:K=ot[$],Ce=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?K=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(ot)?K=ot[se]:K=ot,G.copy(C.viewport),ue.copy(C.scissor),ne=C.scissorTest}else G.copy(E).multiplyScalar(H).floor(),ue.copy(W).multiplyScalar(H).floor(),ne=xe;if(Ve.bindFramebuffer(O.FRAMEBUFFER,K)&&ae&&Ve.drawBuffers(C,K),Ve.viewport(G),Ve.scissor(ue),Ve.setScissorTest(ne),Ce){const je=Fe.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+$,je.__webglTexture,se)}else if(Te){const je=Fe.get(C.texture),st=$||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,je.__webglTexture,se||0,st)}P=-1},this.readRenderTargetPixels=function(C,$,se,ae,K,Ce,Te){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Xe=Xe[Te]),Xe){Ve.bindFramebuffer(O.FRAMEBUFFER,Xe);try{const je=C.texture,st=je.format,ot=je.type;if(!tt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ae&&se>=0&&se<=C.height-K&&O.readPixels($,se,ae,K,ct.convert(st),ct.convert(ot),Ce)}finally{const je=q!==null?Fe.get(q).__webglFramebuffer:null;Ve.bindFramebuffer(O.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(C,$,se,ae,K,Ce,Te){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Te!==void 0&&(Xe=Xe[Te]),Xe){const je=C.texture,st=je.format,ot=je.type;if(!tt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=C.width-ae&&se>=0&&se<=C.height-K){Ve.bindFramebuffer(O.FRAMEBUFFER,Xe);const Ye=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.bufferData(O.PIXEL_PACK_BUFFER,Ce.byteLength,O.STREAM_READ),O.readPixels($,se,ae,K,ct.convert(st),ct.convert(ot),0);const _t=q!==null?Fe.get(q).__webglFramebuffer:null;Ve.bindFramebuffer(O.FRAMEBUFFER,_t);const Tt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await a_(O,Tt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ce),O.deleteBuffer(Ye),O.deleteSync(Tt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,$=null,se=0){C.isTexture!==!0&&(Oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1]);const ae=Math.pow(2,-se),K=Math.floor(C.image.width*ae),Ce=Math.floor(C.image.height*ae),Te=$!==null?$.x:0,Xe=$!==null?$.y:0;D.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,se,0,0,Te,Xe,K,Ce),Ve.unbindTexture()},this.copyTextureToTexture=function(C,$,se=null,ae=null,K=0){C.isTexture!==!0&&(Oa("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,C=arguments[1],$=arguments[2],K=arguments[3]||0,se=null);let Ce,Te,Xe,je,st,ot,Ye,_t,Tt;const vt=C.isCompressedTexture?C.mipmaps[K]:C.image;se!==null?(Ce=se.max.x-se.min.x,Te=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,je=se.min.x,st=se.min.y,ot=se.isBox3?se.min.z:0):(Ce=vt.width,Te=vt.height,Xe=vt.depth||1,je=0,st=0,ot=0),ae!==null?(Ye=ae.x,_t=ae.y,Tt=ae.z):(Ye=0,_t=0,Tt=0);const ln=ct.convert($.format),ft=ct.convert($.type);let Ke;$.isData3DTexture?(D.setTexture3D($,0),Ke=O.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(D.setTexture2DArray($,0),Ke=O.TEXTURE_2D_ARRAY):(D.setTexture2D($,0),Ke=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment);const Jn=O.getParameter(O.UNPACK_ROW_LENGTH),wt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),cn=O.getParameter(O.UNPACK_SKIP_PIXELS),Zn=O.getParameter(O.UNPACK_SKIP_ROWS),$t=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,vt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,je),O.pixelStorei(O.UNPACK_SKIP_ROWS,st),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ot);const hi=C.isDataArrayTexture||C.isData3DTexture,Dt=$.isDataArrayTexture||$.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Hn=Fe.get(C),Ti=Fe.get($),vn=Fe.get(Hn.__renderTarget),Vn=Fe.get(Ti.__renderTarget);Ve.bindFramebuffer(O.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let En=0;En<Xe;En++)hi&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(C).__webglTexture,K,ot+En),C.isDepthTexture?(Dt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get($).__webglTexture,K,Tt+En),O.blitFramebuffer(je,st,Ce,Te,Ye,_t,Ce,Te,O.DEPTH_BUFFER_BIT,O.NEAREST)):Dt?O.copyTexSubImage3D(Ke,K,Ye,_t,Tt+En,je,st,Ce,Te):O.copyTexSubImage2D(Ke,K,Ye,_t,Tt+En,je,st,Ce,Te);Ve.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Dt?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Ke,K,Ye,_t,Tt,Ce,Te,Xe,ln,ft,vt.data):$.isCompressedArrayTexture?O.compressedTexSubImage3D(Ke,K,Ye,_t,Tt,Ce,Te,Xe,ln,vt.data):O.texSubImage3D(Ke,K,Ye,_t,Tt,Ce,Te,Xe,ln,ft,vt):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,K,Ye,_t,Ce,Te,ln,ft,vt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,K,Ye,_t,vt.width,vt.height,ln,vt.data):O.texSubImage2D(O.TEXTURE_2D,K,Ye,_t,Ce,Te,ln,ft,vt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Jn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$t),K===0&&$.generateMipmaps&&O.generateMipmap(Ke),Ve.unbindTexture()},this.copyTextureToTexture3D=function(C,$,se=null,ae=null,K=0){return C.isTexture!==!0&&(Oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),se=arguments[0]||null,ae=arguments[1]||null,C=arguments[2],$=arguments[3],K=arguments[4]||0),Oa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,$,se,ae,K)},this.initRenderTarget=function(C){Fe.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),Ve.unbindTexture()},this.resetState=function(){z=0,F=0,q=null,Ve.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}class _E extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,o=this.getPoint(0),l=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),n.push(l),o=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const r=this.getLengths();let o=0;const l=r.length;let u;n?u=n:u=e*r[l-1];let d=0,h=l-1,g;for(;d<=h;)if(o=Math.floor(d+(h-d)/2),g=r[o]-u,g<0)d=o+1;else if(g>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const x=r[o],S=r[o+1]-x,M=(u-x)/S;return(o+M)/(l-1)}getTangent(e,n){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),h=n||(u.isVector2?new nt:new V);return h.copy(d).sub(u).normalize(),h}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n){const r=new V,o=[],l=[],u=[],d=new V,h=new Bt;for(let M=0;M<=e;M++){const b=M/e;o[M]=this.getTangentAt(b,new V)}l[0]=new V,u[0]=new V;let g=Number.MAX_VALUE;const x=Math.abs(o[0].x),y=Math.abs(o[0].y),S=Math.abs(o[0].z);x<=g&&(g=x,r.set(1,0,0)),y<=g&&(g=y,r.set(0,1,0)),S<=g&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),d.crossVectors(o[M-1],o[M]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(on(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(h.makeRotationAxis(d,b))}u[M].crossVectors(o[M],l[M])}if(n===!0){let M=Math.acos(on(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(M=-M);for(let b=1;b<=e;b++)l[b].applyMatrix4(h.makeRotationAxis(o[b],M*b)),u[b].crossVectors(o[b],l[b])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jg extends Yi{constructor(e=0,n=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=h}getPoint(e,n=new nt){const r=n,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(d),g=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),y=Math.sin(this.aRotation),S=h-this.aX,M=g-this.aY;h=S*x-M*y+this.aX,g=S*y+M*x+this.aY}return r.set(h,g)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yE extends Jg{constructor(e,n,r,o,l,u){super(e,n,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function tf(){let s=0,e=0,n=0,r=0;function o(l,u,d,h){s=l,e=d,n=-3*l+3*u-2*d-h,r=2*l-2*u+d+h}return{initCatmullRom:function(l,u,d,h,g){o(u,d,g*(d-l),g*(h-u))},initNonuniformCatmullRom:function(l,u,d,h,g,x,y){let S=(u-l)/g-(d-l)/(g+x)+(d-u)/x,M=(d-u)/x-(h-u)/(x+y)+(h-d)/y;S*=x,M*=x,o(u,d,S,M)},calc:function(l){const u=l*l,d=u*l;return s+e*l+n*u+r*d}}}const wl=new V,Ju=new tf,Zu=new tf,Qu=new tf;class Zg extends Yi{constructor(e=[],n=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=o}getPoint(e,n=new V){const r=n,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),h=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:h===0&&d===l-1&&(d=l-2,h=1);let g,x;this.closed||d>0?g=o[(d-1)%l]:(wl.subVectors(o[0],o[1]).add(o[0]),g=wl);const y=o[d%l],S=o[(d+1)%l];if(this.closed||d+2<l?x=o[(d+2)%l]:(wl.subVectors(o[l-1],o[l-2]).add(o[l-1]),x=wl),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let b=Math.pow(g.distanceToSquared(y),M),A=Math.pow(y.distanceToSquared(S),M),_=Math.pow(S.distanceToSquared(x),M);A<1e-4&&(A=1),b<1e-4&&(b=A),_<1e-4&&(_=A),Ju.initNonuniformCatmullRom(g.x,y.x,S.x,x.x,b,A,_),Zu.initNonuniformCatmullRom(g.y,y.y,S.y,x.y,b,A,_),Qu.initNonuniformCatmullRom(g.z,y.z,S.z,x.z,b,A,_)}else this.curveType==="catmullrom"&&(Ju.initCatmullRom(g.x,y.x,S.x,x.x,this.tension),Zu.initCatmullRom(g.y,y.y,S.y,x.y,this.tension),Qu.initCatmullRom(g.z,y.z,S.z,x.z,this.tension));return r.set(Ju.calc(h),Zu.calc(h),Qu.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new V().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Hm(s,e,n,r,o){const l=(r-e)*.5,u=(o-n)*.5,d=s*s,h=s*d;return(2*n-2*r+l+u)*h+(-3*n+3*r-2*l-u)*d+l*s+n}function SE(s,e){const n=1-s;return n*n*e}function ME(s,e){return 2*(1-s)*s*e}function EE(s,e){return s*s*e}function Ha(s,e,n,r){return SE(s,e)+ME(s,n)+EE(s,r)}function wE(s,e){const n=1-s;return n*n*n*e}function bE(s,e){const n=1-s;return 3*n*n*s*e}function TE(s,e){return 3*(1-s)*s*s*e}function AE(s,e){return s*s*s*e}function Va(s,e,n,r,o){return wE(s,e)+bE(s,n)+TE(s,r)+AE(s,o)}class CE extends Yi{constructor(e=new nt,n=new nt,r=new nt,o=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new nt){const r=n,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Va(e,o.x,l.x,u.x,d.x),Va(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class RE extends Yi{constructor(e=new V,n=new V,r=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=r,this.v3=o}getPoint(e,n=new V){const r=n,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Va(e,o.x,l.x,u.x,d.x),Va(e,o.y,l.y,u.y,d.y),Va(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class NE extends Yi{constructor(e=new nt,n=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new nt){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new nt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class PE extends Yi{constructor(e=new V,n=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new V){const r=n;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new V){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class LE extends Yi{constructor(e=new nt,n=new nt,r=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new nt){const r=n,o=this.v0,l=this.v1,u=this.v2;return r.set(Ha(e,o.x,l.x,u.x),Ha(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qg extends Yi{constructor(e=new V,n=new V,r=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=r}getPoint(e,n=new V){const r=n,o=this.v0,l=this.v1,u=this.v2;return r.set(Ha(e,o.x,l.x,u.x),Ha(e,o.y,l.y,u.y),Ha(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DE extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new nt){const r=n,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,h=o[u===0?u:u-1],g=o[u],x=o[u>o.length-2?o.length-1:u+1],y=o[u>o.length-3?o.length-1:u+2];return r.set(Hm(d,h.x,g.x,x.x,y.x),Hm(d,h.y,g.y,x.y,y.y)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const o=e.points[n];this.points.push(new nt().fromArray(o))}return this}}var IE=Object.freeze({__proto__:null,ArcCurve:yE,CatmullRomCurve3:Zg,CubicBezierCurve:CE,CubicBezierCurve3:RE,EllipseCurve:Jg,LineCurve:NE,LineCurve3:PE,QuadraticBezierCurve:LE,QuadraticBezierCurve3:Qg,SplineCurve:DE});class nf extends Xi{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let g=0;const x=[],y=new V,S=new V,M=[],b=[],A=[],_=[];for(let v=0;v<=r;v++){const k=[],I=v/r;let N=0;v===0&&u===0?N=.5/n:v===r&&h===Math.PI&&(N=-.5/n);for(let Z=0;Z<=n;Z++){const z=Z/n;y.x=-e*Math.cos(o+z*l)*Math.sin(u+I*d),y.y=e*Math.cos(u+I*d),y.z=e*Math.sin(o+z*l)*Math.sin(u+I*d),b.push(y.x,y.y,y.z),S.copy(y).normalize(),A.push(S.x,S.y,S.z),_.push(z+N,1-I),k.push(g++)}x.push(k)}for(let v=0;v<r;v++)for(let k=0;k<n;k++){const I=x[v][k+1],N=x[v][k],Z=x[v+1][k],z=x[v+1][k+1];(v!==0||u>0)&&M.push(I,N,z),(v!==r-1||h<Math.PI)&&M.push(N,Z,z)}this.setIndex(M),this.setAttribute("position",new Bn(b,3)),this.setAttribute("normal",new Bn(A,3)),this.setAttribute("uv",new Bn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rf extends Xi{constructor(e=new Qg(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),n=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(n,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new V,h=new V,g=new nt;let x=new V;const y=[],S=[],M=[],b=[];A(),this.setIndex(b),this.setAttribute("position",new Bn(y,3)),this.setAttribute("normal",new Bn(S,3)),this.setAttribute("uv",new Bn(M,2));function A(){for(let I=0;I<n;I++)_(I);_(l===!1?n:0),k(),v()}function _(I){x=e.getPointAt(I/n,x);const N=u.normals[I],Z=u.binormals[I];for(let z=0;z<=o;z++){const F=z/o*Math.PI*2,q=Math.sin(F),P=-Math.cos(F);h.x=P*N.x+q*Z.x,h.y=P*N.y+q*Z.y,h.z=P*N.z+q*Z.z,h.normalize(),S.push(h.x,h.y,h.z),d.x=x.x+r*h.x,d.y=x.y+r*h.y,d.z=x.z+r*h.z,y.push(d.x,d.y,d.z)}}function v(){for(let I=1;I<=n;I++)for(let N=1;N<=o;N++){const Z=(o+1)*(I-1)+(N-1),z=(o+1)*I+(N-1),F=(o+1)*I+N,q=(o+1)*(I-1)+N;b.push(Z,z,q),b.push(z,F,q)}}function k(){for(let I=0;I<=n;I++)for(let N=0;N<=o;N++)g.x=I/n,g.y=N/o,M.push(g.x,g.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new rf(new IE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class UE extends qa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pg,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vm extends UE{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sf extends gn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ed=new Bt,Gm=new V,jm=new V;class e0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qd,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gm),jm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(jm),n.updateMatrixWorld(),ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wm=new Bt,Fa=new V,td=new V;class kE extends e0{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Fa.setFromMatrixPosition(e.matrixWorld),r.position.copy(Fa),td.copy(r.position),td.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(td),r.updateMatrixWorld(),o.makeTranslation(-Fa.x,-Fa.y,-Fa.z),Wm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wm)}}class FE extends sf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new kE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class OE extends e0{constructor(){super(new Wg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xm extends sf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new OE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zE extends sf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class BE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ym(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ym();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ym(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);const t0=({className:s="w-full h-full",interactive:e=!0,variant:n="hero",density:r="full"})=>{const o=zt.useRef(null);return zt.useEffect(()=>{const l=o.current;if(!l)return;let u=l.clientWidth||800,d=l.clientHeight||600;const h=new _E,g=new zn(45,u/d,.1,1e3);g.position.set(0,0,18);const x=new vE({antialias:!0,alpha:!0,powerPreference:"high-performance"});x.setSize(u,d),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.toneMapping=_g,x.toneMappingExposure=1.1,l.appendChild(x.domElement);let y=[];n==="hero"?y=[new V(-12,-4,-3),new V(-8,3,2),new V(-3,5,-2),new V(2,2,4),new V(6,-3,1),new V(9,-4,-2),new V(12,1,3),new V(15,3,-1)]:n==="compact"?y=[new V(-8,-2,-1),new V(-4,2,2),new V(0,-1,-2),new V(4,2,1),new V(8,-1,0)]:y=[new V(-10,-5,-2),new V(-5,4,3),new V(0,0,-4),new V(6,5,2),new V(11,-3,-1)];const S=new Zg(y);S.curveType="centripetal",S.tension=.4;const M=n==="hero"?1.45:1.1,b=new rf(S,120,M,32,!1),A=new Vm({color:5087999,emissive:670848,roughness:.16,metalness:.04,clearcoat:.65,clearcoatRoughness:.12,reflectivity:.8,sheen:.3,sheenColor:14479103}),_=new ui(b,A);h.add(_);const v=new Ba,k=new nf(.55,24,24),I=new Vm({color:5626780,roughness:.2,clearcoat:.8});[[-6,4,1],[7,-3,2],[-2,-4,3],[8,3,-1]].forEach(([H,le,L])=>{const E=new ui(k,I);E.position.set(H,le,L),v.add(E)}),h.add(v);const Z=new zE(16777215,1.4);h.add(Z);const z=new Xm(16777215,2.2);z.position.set(10,15,12),h.add(z);const F=new Xm(5087999,1.2);F.position.set(-12,-10,-5),h.add(F);const q=new FE(16777215,1.8,30);q.position.set(0,4,10),h.add(q);let P=0,R=0,G=0,ue=0;const ne=H=>{if(!e)return;const le=l.getBoundingClientRect(),L=H.clientX-le.left,E=H.clientY-le.top;P=(L/u-.5)*2,R=(E/d-.5)*2,ue=P*.45,G=-R*.35};e&&window.addEventListener("mousemove",ne);let he=new BE,me;const ce=()=>{me=requestAnimationFrame(ce);const H=he.getElapsedTime();_.rotation.y+=(ue-_.rotation.y)*.05,_.rotation.x+=(G-_.rotation.x)*.05,_.rotation.z=Math.sin(H*.6)*.05,_.position.y=Math.sin(H*.8)*.25,v.children.forEach((le,L)=>{le.position.y+=Math.sin(H*1.2+L)*.005}),x.render(h,g)};ce();const fe=()=>{l&&(u=l.clientWidth||800,d=l.clientHeight||600,g.aspect=u/d,g.updateProjectionMatrix(),x.setSize(u,d))};return window.addEventListener("resize",fe),()=>{cancelAnimationFrame(me),e&&window.removeEventListener("mousemove",ne),window.removeEventListener("resize",fe),l&&x.domElement&&l.contains(x.domElement)&&l.removeChild(x.domElement),b.dispose(),A.dispose(),x.dispose()}},[e,n]),m.jsx("div",{ref:o,className:`pointer-events-none ${s}`,"aria-hidden":"true"})},ns=({name:s,className:e="w-6 h-6"})=>{switch(s==null?void 0:s.toLowerCase()){case"java":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M4 14C4 16.5 7 19 12 19C17 19 20 16.5 20 14V11H4V14Z",fill:"#fb4903",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M18 11V8C18 7.4 17.6 7 17 7H14",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round"}),m.jsx("path",{d:"M20 12C21.5 12 22.5 13 22.5 14.5C22.5 16 21 17 19.5 17",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round"}),m.jsx("path",{d:"M8 5C8 5 9 6.5 7.5 8",stroke:"#fb4903",strokeWidth:"1.5",strokeLinecap:"round"}),m.jsx("path",{d:"M12 3C12 3 13.5 5 11.5 7",stroke:"#4da2ff",strokeWidth:"1.5",strokeLinecap:"round"}),m.jsx("path",{d:"M15 5C15 5 16 6.5 15 8",stroke:"#ffd731",strokeWidth:"1.5",strokeLinecap:"round"}),m.jsx("path",{d:"M2 20H22",stroke:"#000000",strokeWidth:"1.5",strokeLinecap:"round"})]});case"spring":case"spring boot":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",fill:"#55db9c",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M6 14.5C8 18 13.5 17.5 16.5 14.5C19.5 11.5 17 7 17 7C17 7 12 8.5 9 11.5C7.5 13 6 14.5 6 14.5Z",fill:"#ffffff",stroke:"#000000",strokeWidth:"1.2"}),m.jsx("path",{d:"M9 14.5C11 12.5 13.5 11 16.5 9.5",stroke:"#000000",strokeWidth:"1.2",strokeLinecap:"round"})]});case"react":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("ellipse",{cx:"12",cy:"12",rx:"4",ry:"10",stroke:"#000000",strokeWidth:"1.5",transform:"rotate(30 12 12)",fill:"#dceeff"}),m.jsx("ellipse",{cx:"12",cy:"12",rx:"4",ry:"10",stroke:"#000000",strokeWidth:"1.5",transform:"rotate(90 12 12)",fill:"#dceeff",fillOpacity:"0.5"}),m.jsx("ellipse",{cx:"12",cy:"12",rx:"4",ry:"10",stroke:"#000000",strokeWidth:"1.5",transform:"rotate(150 12 12)",fill:"#4da2ff"}),m.jsx("circle",{cx:"12",cy:"12",r:"2.2",fill:"#000000"})]});case"mysql":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"4",fill:"#dceeff",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M7 15C8 11 11 9 14 9C16 9 18 10.5 19 12C18 11 16 11 15 11.5C13 12.5 11 15 9 16C8 16.5 7 15 7 15Z",fill:"#fb4903",stroke:"#000000",strokeWidth:"1"}),m.jsx("circle",{cx:"15.5",cy:"10.5",r:"0.75",fill:"#000000"}),m.jsx("path",{d:"M5 8H7M5 11H8M5 14H7",stroke:"#000000",strokeWidth:"1.2",strokeLinecap:"round"})]});case"javascript":case"javascript es6":case"javascript (es6)":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3",fill:"#ffd731",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("text",{x:"13",y:"17",fontFamily:"sans-serif",fontSize:"9",fontWeight:"900",fill:"#000000",children:"JS"})]});case"html5":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z",fill:"#fb4903",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M12 5V19.5L17 18L18 5H12Z",fill:"#ffd731"}),m.jsx("path",{d:"M8 8H16L15.5 11H12V13H15.2L14.7 17L12 17.7V15.5L13.5 15.1L13.7 13.5H8.3L8 8Z",fill:"#ffffff",stroke:"#000000",strokeWidth:"0.8"})]});case"css3":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("path",{d:"M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z",fill:"#4da2ff",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M12 5V19.5L17 18L18 5H12Z",fill:"#dceeff"}),m.jsx("path",{d:"M8 8H16L15.5 11H9.5L9.8 13.5H15.3L14.8 17L12 17.7V15.5L13.5 15.1L13.7 13.5H8.3L8 8Z",fill:"#000000",stroke:"#000000",strokeWidth:"0.5"})]});case"tailwind":case"tailwind css":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("circle",{cx:"12",cy:"12",r:"10",fill:"#55db9c",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M7 13C8.5 10.5 10.5 10.5 12 12C13.5 13.5 15.5 13.5 17 11",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round"}),m.jsx("path",{d:"M7 16C8.5 13.5 10.5 13.5 12 15C13.5 16.5 15.5 16.5 17 14",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round"})]});case"hibernate":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"4",fill:"#e9ccff",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M7 8V16M17 8V16M7 12H17",stroke:"#000000",strokeWidth:"2.5",strokeLinecap:"round"})]});case"rest":case"rest api":case"rest apis":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("rect",{x:"2",y:"5",width:"20",height:"14",rx:"4",fill:"#ffd731",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M6 12H18M15 9L18 12L15 15",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]});case"jwt":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("polygon",{points:"12,2 21,7 21,17 12,22 3,17 3,7",fill:"#fb4903",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("circle",{cx:"12",cy:"12",r:"3.5",fill:"#ffffff",stroke:"#000000",strokeWidth:"1.5"})]});case"linkedin":return m.jsx("svg",{className:e,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"})});case"github":return m.jsx("svg",{className:e,viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:m.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.843 20.19 8.796 21.513C9.296 21.603 9.479 21.298 9.479 21.033C9.479 20.796 9.47 20.168 9.466 19.336C6.684 19.945 6.096 17.989 6.096 17.989C5.641 16.828 4.985 16.518 4.985 16.518C4.077 15.895 5.054 15.908 5.054 15.908C6.059 15.979 6.588 16.945 6.588 16.945C7.481 18.483 8.924 18.04 9.494 17.785C9.585 17.133 9.845 16.687 10.131 16.435C7.91 16.18 5.575 15.317 5.575 11.464C5.575 10.366 5.965 9.467 6.606 8.763C6.503 8.508 6.16 7.487 6.704 6.103C6.704 6.103 7.544 5.832 9.453 7.135C10.252 6.911 11.106 6.8 11.959 6.796C12.812 6.8 13.666 6.911 14.467 7.135C16.374 5.832 17.212 6.103 17.212 6.103C17.758 7.487 17.415 8.508 17.312 8.763C17.955 9.467 18.341 10.366 18.341 11.464C18.341 15.328 16.002 16.176 13.774 16.427C14.136 16.741 14.457 17.362 14.457 18.314C14.457 19.68 14.444 20.781 14.444 21.033C14.444 21.301 14.624 21.611 15.132 21.511C19.082 20.186 21.923 16.444 21.923 12.017C21.923 6.484 17.446 2 12 2Z"})});case"database":case"jdbc":case"sql":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("ellipse",{cx:"12",cy:"6",rx:"8",ry:"3",fill:"#4da2ff",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6",fill:"#4da2ff",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("path",{d:"M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12",fill:"#4da2ff",stroke:"#000000",strokeWidth:"1.5"})]});case"layout":case"mvc architecture":case"mvc":return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3",fill:"#ffffff",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("rect",{x:"6",y:"6",width:"12",height:"4",fill:"#55db9c",stroke:"#000000",strokeWidth:"1"}),m.jsx("rect",{x:"6",y:"13",width:"5",height:"5",fill:"#4da2ff",stroke:"#000000",strokeWidth:"1"}),m.jsx("rect",{x:"13",y:"13",width:"5",height:"5",fill:"#ffd731",stroke:"#000000",strokeWidth:"1"})]});default:return m.jsxs("svg",{className:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[m.jsx("polygon",{points:"12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5",fill:"#e9ccff",stroke:"#000000",strokeWidth:"1.5"}),m.jsx("circle",{cx:"12",cy:"12",r:"3",fill:"#000000"})]})}},At=({name:s,role:e,color:n="sunburst",tilt:r="0deg",size:o="md",logo:l,className:u="",interactive:d=!0,onClick:h,showTooltip:g=!0,badge:x})=>{const[y,S]=zt.useState(!1),M={sunburst:"bg-[#ffd731] text-[#000000]",mint:"bg-[#55db9c] text-[#000000]",lavender:"bg-[#e9ccff] text-[#000000]",electric:"bg-[#4da2ff] text-[#000000]",ember:"bg-[#fb4903] text-[#ffffff]",violet:"bg-[#5c4ade] text-[#ffffff]",sky:"bg-[#dceeff] text-[#000000]",mist:"bg-[#e9e9e9] text-[#000000]",concrete:"bg-[#cccccc] text-[#000000]",paper:"bg-[#ffffff] text-[#000000]",carbon:"bg-[#000000] text-[#ffffff]"},b={sm:"px-3 py-1.5 text-xs font-bold gap-1.5",md:"px-4 py-2 text-sm font-bold gap-2",lg:"px-5 py-2.5 text-base font-extrabold gap-2.5",xl:"px-6 py-3 text-lg font-black gap-3"},A=M[n]||M.sunburst;return m.jsxs("div",{className:`relative inline-block select-none group ${u}`,style:{transform:`rotate(${r})`},onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),onClick:h,children:[m.jsxs("div",{className:`
          flex items-center rounded-pill border-[1.5px] border-carbon 
          shadow-[3px_3px_0px_#000000] 
          transition-all duration-200 ease-out cursor-pointer
          ${A}
          ${b[o]||b.md}
          ${d?"hover:-translate-y-1 hover:translate-x-0.5 hover:shadow-[5px_5px_0px_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000]":""}
        `,children:[l&&m.jsx("span",{className:"flex-shrink-0 transition-transform duration-200 group-hover:scale-110",children:m.jsx(ns,{name:l,className:o==="sm"?"w-4 h-4":o==="lg"?"w-6 h-6":"w-5 h-5"})}),m.jsx("span",{className:"font-display tracking-tight uppercase",children:s}),x&&m.jsx("span",{className:"ml-1 px-1.5 py-0.5 text-[10px] uppercase font-black bg-carbon text-paper rounded-full border border-carbon",children:x})]}),g&&e&&y&&m.jsxs("div",{className:"absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none animate-in fade-in zoom-in-90 duration-150",style:{transform:`translateX(-50%) rotate(calc(-1 * ${r}))`},children:[m.jsxs("div",{className:"bg-carbon text-paper text-xs px-3 py-1.5 rounded-card border-[1.5px] border-paper shadow-[3px_3px_0px_#000000] whitespace-nowrap font-medium flex items-center gap-1.5",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-sunburst inline-block"}),m.jsx("span",{children:e})]}),m.jsx("div",{className:"w-2 h-2 bg-carbon border-r-[1.5px] border-b-[1.5px] border-paper rotate-45 mx-auto -mt-1"})]})]})},HE=()=>{const[s,e]=zt.useState({x:0,y:0});return zt.useEffect(()=>{const n=r=>{const{innerWidth:o,innerHeight:l}=window;e({x:(r.clientX/o-.5)*30,y:(r.clientY/l-.5)*30})};return window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)},[]),m.jsxs("section",{id:"hero",className:"relative min-h-screen pt-28 pb-16 px-4 md:px-8 bg-sky flex flex-col justify-between overflow-hidden border-b-[2px] border-carbon",children:[m.jsx("div",{className:"absolute inset-0 z-0",children:m.jsx(t0,{variant:"hero",interactive:!0,className:"w-full h-full"})}),m.jsxs("div",{className:"absolute inset-0 pointer-events-none z-20 overflow-hidden",children:[m.jsx("div",{className:"absolute pointer-events-auto transition-transform duration-100 ease-out",style:{top:"18%",left:"6%",transform:`translate(${s.x*-.6}px, ${s.y*-.6}px)`},children:m.jsx(At,{name:"Java",role:"Core programming language",logo:"java",color:"sunburst",tilt:"-7deg",size:"lg"})}),m.jsx("div",{className:"absolute pointer-events-auto transition-transform duration-100 ease-out",style:{top:"20%",right:"8%",transform:`translate(${s.x*.7}px, ${s.y*.7}px)`},children:m.jsx(At,{name:"Spring Boot",role:"Backend microservices & APIs",logo:"spring",color:"mint",tilt:"6deg",size:"lg"})}),m.jsx("div",{className:"absolute pointer-events-auto transition-transform duration-100 ease-out",style:{bottom:"24%",left:"8%",transform:`translate(${s.x*.5}px, ${s.y*.5}px)`},children:m.jsx(At,{name:"React",role:"Frontend component architecture",logo:"react",color:"electric",tilt:"-5deg",size:"lg"})}),m.jsx("div",{className:"absolute pointer-events-auto transition-transform duration-100 ease-out",style:{bottom:"22%",right:"12%",transform:`translate(${s.x*-.5}px, ${s.y*-.5}px)`},children:m.jsx(At,{name:"MySQL",role:"Relational database operations",logo:"mysql",color:"lavender",tilt:"8deg",size:"md"})}),m.jsx("div",{className:"absolute pointer-events-auto hidden md:block transition-transform duration-100 ease-out",style:{top:"46%",right:"4%",transform:`translate(${s.x*.9}px, ${s.y*.9}px)`},children:m.jsx(At,{name:"REST API",role:"Stateless client-server architecture",logo:"rest",color:"violet",tilt:"4deg",size:"sm"})}),m.jsx("div",{className:"absolute pointer-events-auto hidden md:block transition-transform duration-100 ease-out",style:{top:"48%",left:"3%",transform:`translate(${s.x*-.8}px, ${s.y*-.8}px)`},children:m.jsx(At,{name:"JWT Auth",role:"Secure authentication & authorization",logo:"jwt",color:"ember",tilt:"-6deg",size:"sm"})}),m.jsx("div",{className:"absolute pointer-events-auto hidden lg:block transition-transform duration-100 ease-out",style:{bottom:"36%",right:"5%",transform:`translate(${s.x*.4}px, ${s.y*.4}px)`},children:m.jsx(At,{name:"GitHub",role:"charu05-dev",logo:"github",color:"carbon",tilt:"-3deg",size:"sm"})})]}),m.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center items-center text-center my-auto",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 bg-paper px-4 py-1.5 rounded-pill border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000] mb-6 transform -rotate-1 hover:rotate-0 transition-transform",children:[m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-mint animate-pulse"}),m.jsx("span",{className:"font-display font-black text-xs md:text-sm tracking-wider uppercase text-carbon",children:"JAVA FULL-STACK DEVELOPER"})]}),m.jsxs("div",{className:"relative select-none my-2 md:my-4",children:[m.jsx("h1",{className:"font-display font-black uppercase text-carbon leading-[0.78] tracking-tighter text-[19vw] sm:text-[17vw] lg:text-[15.5vw]",children:"CHARU"}),m.jsx("h1",{className:"font-display font-black uppercase text-carbon leading-[0.78] tracking-tighter text-[19vw] sm:text-[17vw] lg:text-[15.5vw]",children:"SHARMA"})]}),m.jsx("div",{className:"max-w-2xl mx-auto mt-6 md:mt-8 px-4",children:m.jsxs("p",{className:"font-body text-base sm:text-lg md:text-xl font-bold text-carbon/90 bg-paper/85 backdrop-blur-sm p-4 rounded-card border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000]",children:["Building scalable web applications with ",m.jsx("span",{className:"underline decoration-sunburst decoration-4",children:"Java"}),", ",m.jsx("span",{className:"underline decoration-mint decoration-4",children:"Spring Boot"}),", ",m.jsx("span",{className:"underline decoration-electric decoration-4",children:"React"})," and ",m.jsx("span",{className:"underline decoration-lavender decoration-4",children:"MySQL"}),"."]})}),m.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mt-8",children:[m.jsxs("a",{href:"#projects",className:"px-8 py-4 bg-carbon text-paper rounded-pill border-[1.5px] border-carbon font-display font-black text-sm md:text-base tracking-wider uppercase shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center gap-2",children:[m.jsx("span",{children:"VIEW MY WORK"}),m.jsx(tv,{className:"w-4 h-4"})]}),m.jsxs("a",{href:"#contact",className:"px-8 py-4 bg-paper text-carbon rounded-pill border-[1.5px] border-carbon font-display font-black text-sm md:text-base tracking-wider uppercase shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 active:translate-y-0.5 transition-all flex items-center gap-2",children:[m.jsx("span",{children:"LET'S CONNECT"}),m.jsx(Qr,{className:"w-4 h-4"})]})]})]}),m.jsx("div",{className:"relative z-10 w-full overflow-hidden bg-sunburst border-t-[2px] border-carbon py-2.5 -mx-4 md:-mx-8 mt-10",children:m.jsxs("div",{className:"animate-marquee whitespace-nowrap flex items-center font-display font-black text-xs md:text-sm tracking-widest uppercase text-carbon",children:[m.jsx("span",{className:"mx-4",children:"☕ JAVA FULL-STACK"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"🍃 SPRING BOOT"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"⚛️ REACT"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"🐬 MYSQL"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"⚡ RESTFUL APIS"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"🔐 JWT AUTHENTICATION"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"📦 HIBERNATE ORM"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"🏗️ MVC ARCHITECTURE"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"☕ JAVA FULL-STACK"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"🍃 SPRING BOOT"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"⚛️ REACT"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"🐬 MYSQL"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"⚡ RESTFUL APIS"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"🔐 JWT AUTHENTICATION"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"📦 HIBERNATE ORM"}),m.jsx("span",{className:"mx-4",children:"•"}),m.jsx("span",{className:"mx-4",children:"🏗️ MVC ARCHITECTURE"})]})})]})},VE=()=>{const[s,e]=zt.useState(0),n=[{title:"JAVA",subtitle:"Core Engine",color:"sunburst",logo:"java",desc:"Robust Object-Oriented foundation with clean logic, data structures, and multithreading."},{title:"SPRING BOOT",subtitle:"Backend Services",color:"mint",logo:"spring",desc:"REST APIs, secure JWT authentication filters, Hibernate ORM, and MVC architecture."},{title:"REACT",subtitle:"Frontend Interface",color:"electric",logo:"react",desc:"Responsive component hierarchy, state management, seamless HTTP API integration, and clean UX."},{title:"MYSQL",subtitle:"Relational Persistence",color:"lavender",logo:"mysql",desc:"Structured schemas, relational CRUD operations, transaction integrity, and query optimization."}],r={sunburst:"bg-[#ffd731]",mint:"bg-[#55db9c]",electric:"bg-[#4da2ff]",lavender:"bg-[#e9ccff]"};return m.jsx("section",{id:"about",className:"relative py-24 px-4 md:px-8 bg-paper border-b-[2px] border-carbon overflow-hidden",children:m.jsxs("div",{className:"max-w-6xl mx-auto",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4",children:[m.jsxs("div",{children:[m.jsx("div",{className:"inline-block bg-mint px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3",children:"ABOUT CHARU"}),m.jsxs("h2",{className:"font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight",children:["WHO IS ",m.jsx("br",{className:"hidden sm:inline"}),"CHARU?"]})]}),m.jsx("div",{className:"max-w-md",children:m.jsx("p",{className:"font-body text-carbon/80 font-semibold text-base",children:"A software engineer who thrives at the intersection of robust backend logic, enterprise API design, and interactive web frontends."})})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20",children:[m.jsxs("div",{className:"lg:col-span-7 bg-sky rounded-card border-[2px] border-carbon p-6 sm:p-8 shadow-[6px_6px_0px_#000000] relative",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-ember border border-carbon"}),m.jsx("span",{className:"w-3 h-3 rounded-full bg-sunburst border border-carbon"}),m.jsx("span",{className:"w-3 h-3 rounded-full bg-mint border border-carbon"}),m.jsx("span",{className:"text-xs font-mono font-bold text-carbon/60 ml-2",children:"bio.json"})]}),m.jsx("h3",{className:"font-display font-extrabold text-2xl sm:text-3xl text-carbon mb-4 leading-tight",children:"Information Technology Graduate & Full-Stack Engineer."}),m.jsx("p",{className:"font-body text-base sm:text-lg text-carbon/90 leading-relaxed font-medium mb-6",children:_i.bio}),m.jsxs("div",{className:"bg-paper rounded-card border-[1.5px] border-carbon p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-[3px_3px_0px_#000000]",children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-[10px] uppercase font-black tracking-wider text-carbon/60",children:"INTERNSHIP EXPERIENCE"}),m.jsx("div",{className:"font-display font-extrabold text-lg text-carbon",children:"TAP Academy — Full Stack Developer Intern"}),m.jsx("div",{className:"text-xs font-bold text-carbon/75 font-mono",children:"July 2026 – January 2027"})]}),m.jsx("span",{className:"px-3 py-1 bg-mint text-carbon rounded-pill border border-carbon text-xs font-bold font-display whitespace-nowrap",children:"BACKEND & UI"})]})]}),m.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-6",children:[m.jsxs("div",{className:"bg-sunburst rounded-card border-[2px] border-carbon p-6 shadow-[6px_6px_0px_#000000]",children:[m.jsx("div",{className:"text-xs font-black font-display uppercase tracking-wider text-carbon mb-2",children:"CORE TECHNICAL FOCUS"}),m.jsx("div",{className:"font-display font-black text-3xl sm:text-4xl text-carbon leading-tight",children:"ENTERPRISE JAVA & REACT ECOSYSTEM"}),m.jsx("p",{className:"font-body font-semibold text-sm text-carbon/90 mt-2",children:"Architecting complete end-to-end data pipelines from relational SQL stores to modern React user interfaces."})]}),m.jsxs("div",{className:"flex flex-wrap gap-2.5 p-4 bg-mist rounded-card border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000]",children:[m.jsx(At,{name:"Clean Code",color:"paper",tilt:"-2deg",size:"sm"}),m.jsx(At,{name:"Scalable Architecture",color:"lavender",tilt:"2deg",size:"sm"}),m.jsx(At,{name:"JWT Security",color:"ember",tilt:"-3deg",size:"sm"}),m.jsx(At,{name:"RESTful APIs",color:"electric",tilt:"1deg",size:"sm"}),m.jsx(At,{name:"Relational CRUD",color:"mint",tilt:"-1deg",size:"sm"})]})]})]}),m.jsxs("div",{className:"bg-mist rounded-card-lg border-[2px] border-carbon p-6 sm:p-10 shadow-[6px_6px_0px_#000000]",children:[m.jsxs("div",{className:"text-center max-w-xl mx-auto mb-8",children:[m.jsx("div",{className:"inline-block bg-paper px-3 py-1 rounded-pill border border-carbon text-xs font-display font-black tracking-wider uppercase mb-2",children:"THE FULL-STACK STACK PIPELINE"}),m.jsx("h3",{className:"font-display font-black text-3xl sm:text-4xl text-carbon uppercase tracking-tight",children:"JAVA → SPRING → REACT → MYSQL"}),m.jsx("p",{className:"font-body text-xs sm:text-sm font-bold text-carbon/75 mt-1",children:"Click each layer to inspect how data moves through the architecture."})]}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative",children:n.map((o,l)=>m.jsxs("div",{onClick:()=>e(l),className:`
                  cursor-pointer p-5 rounded-card border-[2px] border-carbon transition-all duration-200
                  ${s===l?`${r[o.color]} shadow-[5px_5px_0px_#000000] -translate-y-1.5`:"bg-paper hover:bg-mist shadow-[2px_2px_0px_#000000] hover:-translate-y-0.5"}
                `,children:[m.jsxs("div",{className:"flex items-center justify-between mb-3",children:[m.jsxs("span",{className:"w-7 h-7 rounded-full bg-carbon text-paper flex items-center justify-center font-display font-black text-xs",children:["0",l+1]}),m.jsx(ns,{name:o.logo,className:"w-6 h-6"})]}),m.jsx("div",{className:"font-display font-black text-xl text-carbon",children:o.title}),m.jsx("div",{className:"text-xs font-bold text-carbon/70 uppercase tracking-wide mb-2",children:o.subtitle}),m.jsx("p",{className:"font-body text-xs font-semibold text-carbon/85 leading-relaxed",children:o.desc})]},o.title))}),m.jsxs("div",{className:"mt-6 bg-paper rounded-card border-[1.5px] border-carbon p-4 sm:p-5 flex items-center justify-between flex-wrap gap-3",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-mint animate-pulse"}),m.jsxs("span",{className:"text-xs sm:text-sm font-bold font-mono text-carbon",children:["Active Layer: ",m.jsx("span",{className:"font-black underline",children:n[s].title})," (",n[s].subtitle,")"]})]}),m.jsx("div",{className:"text-xs font-mono font-semibold text-carbon/70",children:"Pattern: Model-View-Controller + REST API Security"})]})]})]})})},GE=()=>{const[s,e]=zt.useState("ALL"),n=["ALL","LANGUAGE","FRONTEND","BACKEND","DATABASE","CORE"],r=s==="ALL"?Hp:Hp.filter(o=>o.category===s);return m.jsx("section",{id:"skills",className:"relative py-24 px-4 md:px-8 bg-mist border-b-[2px] border-carbon overflow-hidden",children:m.jsxs("div",{className:"max-w-6xl mx-auto",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4",children:[m.jsxs("div",{children:[m.jsx("div",{className:"inline-block bg-sunburst px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3",children:"TECHNOLOGY INVENTORY"}),m.jsxs("h2",{className:"font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight",children:["I SPEAK ",m.jsx("br",{className:"hidden sm:inline"}),"CODE"]})]}),m.jsx("div",{className:"max-w-md",children:m.jsx("p",{className:"font-body text-carbon/80 font-semibold text-base",children:"Verified skills and technologies directly from my technical toolkit. Hover over any sticker to inspect its role."})})]}),m.jsx("div",{className:"flex flex-wrap items-center gap-2 mb-12",children:n.map(o=>m.jsx("button",{onClick:()=>e(o),className:`
                px-4 py-2 rounded-pill font-display font-black text-xs md:text-sm tracking-wider uppercase
                border-[1.5px] border-carbon transition-all duration-150
                ${s===o?"bg-carbon text-paper shadow-[3px_3px_0px_#000000] -translate-y-0.5":"bg-paper text-carbon shadow-[2px_2px_0px_#000000] hover:bg-sky hover:-translate-y-0.5"}
              `,children:o},o))}),m.jsxs("div",{className:"bg-paper rounded-card-lg border-[2px] border-carbon p-6 sm:p-10 shadow-[6px_6px_0px_#000000] min-h-[360px]",children:[m.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-6",children:r.map(o=>m.jsx(At,{name:o.name,role:o.role,logo:o.logo,color:o.color,tilt:o.rotation,size:"lg",interactive:!0,badge:o.category},o.name))}),m.jsxs("div",{className:"mt-8 pt-6 border-t border-carbon/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono font-bold text-carbon/75",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-sunburst border border-carbon"}),m.jsx("span",{children:"Language"}),m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-electric border border-carbon ml-2"}),m.jsx("span",{children:"Frontend"}),m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-mint border border-carbon ml-2"}),m.jsx("span",{children:"Backend"}),m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-lavender border border-carbon ml-2"}),m.jsx("span",{children:"Database"})]}),m.jsx("div",{children:m.jsxs("span",{children:["Total Technologies: ",r.length]})})]})]})]})})},jE=({project:s,onClose:e})=>s?(zt.useEffect(()=>{const n=r=>{r.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[e]),m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-carbon/60 backdrop-blur-sm animate-in fade-in duration-200",children:m.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-paper rounded-card-lg border-[3px] border-carbon p-6 sm:p-10 shadow-[8px_8px_0px_#000000]",onClick:n=>n.stopPropagation(),children:[m.jsx("button",{onClick:e,className:"absolute top-5 right-5 p-2 rounded-full bg-paper border-[1.5px] border-carbon hover:bg-mist shadow-[2px_2px_0px_#000000] active:translate-y-0.5 transition-all","aria-label":"Close Project Modal",children:m.jsx(gg,{className:"w-5 h-5 text-carbon"})}),m.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4",children:[m.jsxs("span",{className:"px-3 py-1 bg-carbon text-paper font-display font-black text-xs uppercase rounded-pill",children:["PROJECT ",s.number]}),m.jsx("span",{className:"px-3 py-1 bg-sunburst text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill",children:s.badge}),m.jsx("span",{className:"px-3 py-1 bg-mist text-carbon border border-carbon font-mono font-bold text-xs rounded-pill",children:s.date})]}),m.jsx("h2",{className:"font-display font-black text-4xl sm:text-5xl text-carbon uppercase tracking-tight leading-none mb-2",children:s.title}),m.jsx("div",{className:"text-sm sm:text-base font-bold text-carbon/75 uppercase tracking-wide mb-6",children:s.subtitle}),m.jsx("div",{className:"flex flex-wrap gap-2 mb-8 p-3 bg-mist rounded-card border border-carbon",children:s.technologies.map(n=>m.jsx(At,{name:n,logo:n.toLowerCase().replace(" ",""),size:"sm",tilt:"0deg",interactive:!1},n))}),m.jsxs("div",{className:"mb-8",children:[m.jsxs("h3",{className:"font-display font-black text-xl uppercase text-carbon mb-3 flex items-center gap-2",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-mint"}),"PROJECT SCOPE & OBJECTIVE"]}),m.jsx("p",{className:"font-body text-base font-medium text-carbon/90 leading-relaxed bg-sky/30 p-4 rounded-card border border-carbon",children:s.description})]}),m.jsxs("div",{className:"mb-8",children:[m.jsxs("h3",{className:"font-display font-black text-xl uppercase text-carbon mb-3 flex items-center gap-2",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-sunburst"}),"KEY ENGINEERING HIGHLIGHTS"]}),m.jsx("div",{className:"space-y-3",children:s.details.map((n,r)=>m.jsxs("div",{className:"flex items-start gap-3 p-3 bg-paper rounded-card border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000]",children:[m.jsx(tg,{className:"w-5 h-5 text-mint flex-shrink-0 mt-0.5"}),m.jsx("p",{className:"font-body text-sm font-semibold text-carbon/90 leading-normal",children:n})]},r))})]}),m.jsxs("div",{className:"mb-8",children:[m.jsxs("h3",{className:"font-display font-black text-xl uppercase text-carbon mb-3 flex items-center gap-2",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-electric"}),"FULL-STACK ARCHITECTURAL BREAKDOWN"]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[m.jsxs("div",{className:"p-4 bg-mist rounded-card border border-carbon",children:[m.jsxs("div",{className:"flex items-center gap-2 font-display font-black text-sm uppercase text-carbon mb-1.5",children:[m.jsx(ov,{className:"w-4 h-4 text-electric"}),"FRONTEND (REACT)"]}),m.jsx("p",{className:"text-xs font-semibold text-carbon/80 leading-relaxed",children:s.architecture.frontend})]}),m.jsxs("div",{className:"p-4 bg-mist rounded-card border border-carbon",children:[m.jsxs("div",{className:"flex items-center gap-2 font-display font-black text-sm uppercase text-carbon mb-1.5",children:[m.jsx(uv,{className:"w-4 h-4 text-mint"}),"BACKEND (SPRING BOOT)"]}),m.jsx("p",{className:"text-xs font-semibold text-carbon/80 leading-relaxed",children:s.architecture.backend})]}),m.jsxs("div",{className:"p-4 bg-mist rounded-card border border-carbon",children:[m.jsxs("div",{className:"flex items-center gap-2 font-display font-black text-sm uppercase text-carbon mb-1.5",children:[m.jsx(dv,{className:"w-4 h-4 text-ember"}),"SECURITY (JWT AUTH)"]}),m.jsx("p",{className:"text-xs font-semibold text-carbon/80 leading-relaxed",children:s.architecture.security})]}),m.jsxs("div",{className:"p-4 bg-mist rounded-card border border-carbon",children:[m.jsxs("div",{className:"flex items-center gap-2 font-display font-black text-sm uppercase text-carbon mb-1.5",children:[m.jsx(rv,{className:"w-4 h-4 text-lavender"}),"DATABASE (SQL / MYSQL)"]}),m.jsx("p",{className:"text-xs font-semibold text-carbon/80 leading-relaxed",children:s.architecture.database})]})]})]}),m.jsxs("div",{className:"pt-6 border-t-[2px] border-carbon flex flex-wrap items-center justify-between gap-4",children:[m.jsxs("a",{href:_i.contact.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-6 py-3 bg-carbon text-paper rounded-pill font-display font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:bg-carbon/90 hover:-translate-y-0.5 transition-all",children:[m.jsx(ns,{name:"github",className:"w-4 h-4"}),m.jsx("span",{children:"EXPLORE CODE ON GITHUB"})]}),m.jsx("button",{onClick:e,className:"px-6 py-3 bg-mist text-carbon rounded-pill border-[1.5px] border-carbon font-display font-bold text-xs uppercase tracking-wider hover:bg-concrete transition-colors",children:"CLOSE WINDOW"})]})]})})):null,WE=()=>{const[s,e]=zt.useState(null);return m.jsxs("section",{id:"projects",className:"relative py-24 px-4 md:px-8 bg-paper border-b-[2px] border-carbon overflow-hidden",children:[m.jsxs("div",{className:"max-w-6xl mx-auto",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4",children:[m.jsxs("div",{children:[m.jsx("div",{className:"inline-block bg-electric text-carbon px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3",children:"FEATURED WORK"}),m.jsxs("h2",{className:"font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight",children:["THINGS ",m.jsx("br",{className:"hidden sm:inline"}),"I BUILT"]})]}),m.jsx("div",{className:"max-w-md",children:m.jsx("p",{className:"font-body text-carbon/80 font-semibold text-base",children:"Full-stack production-grade architectures built with Spring Boot, React, and MySQL with verified JWT authentication."})})]}),m.jsxs("div",{className:"space-y-16",children:[m.jsx("div",{className:"group relative bg-sky rounded-card-lg border-[2.5px] border-carbon p-6 sm:p-10 shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-all duration-300",children:m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[m.jsxs("div",{className:"lg:col-span-6 space-y-5",children:[m.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[m.jsx("span",{className:"px-3 py-1 bg-carbon text-paper font-display font-black text-xs uppercase rounded-pill",children:"PROJECT 01"}),m.jsx("span",{className:"px-3 py-1 bg-sunburst text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill",children:"FULL STACK"}),m.jsx("span",{className:"px-3 py-1 bg-paper text-carbon border border-carbon font-mono font-bold text-xs rounded-pill",children:"Jan 2026"})]}),m.jsx("h3",{className:"font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carbon uppercase tracking-tight leading-none",children:"FASHIONSELECT"}),m.jsx("p",{className:"font-display font-bold text-base sm:text-lg text-carbon/80 uppercase tracking-wide",children:"Fashion E-Commerce Platform"}),m.jsx("p",{className:"font-body text-sm sm:text-base font-semibold text-carbon/90 leading-relaxed",children:"A full-stack fashion e-commerce application built using Spring Boot and React, enabling users to browse products and interact with the application through RESTful APIs."}),m.jsxs("div",{className:"flex flex-wrap gap-2 pt-2",children:[m.jsx(At,{name:"Java",logo:"java",color:"sunburst",tilt:"-2deg",size:"sm"}),m.jsx(At,{name:"Spring Boot",logo:"spring",color:"mint",tilt:"3deg",size:"sm"}),m.jsx(At,{name:"React",logo:"react",color:"electric",tilt:"-3deg",size:"sm"}),m.jsx(At,{name:"SQL",logo:"database",color:"lavender",tilt:"2deg",size:"sm"}),m.jsx(At,{name:"REST API",logo:"rest",color:"paper",tilt:"-1deg",size:"sm"}),m.jsx(At,{name:"JWT",logo:"jwt",color:"ember",tilt:"4deg",size:"sm"})]}),m.jsx("div",{className:"pt-4",children:m.jsxs("button",{onClick:()=>e(Vp[0]),className:"flex items-center gap-2.5 px-6 py-3.5 bg-carbon text-paper rounded-pill font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] hover:-translate-y-1 active:translate-y-0.5 transition-all",children:[m.jsx("span",{children:"VIEW PROJECT DETAILS"}),m.jsx(Qr,{className:"w-4 h-4"})]})})]}),m.jsxs("div",{className:"lg:col-span-6 bg-paper rounded-card border-[2px] border-carbon p-5 shadow-[4px_4px_0px_#000000] space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-carbon",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(fv,{className:"w-5 h-5 text-carbon"}),m.jsx("span",{className:"font-display font-black text-sm uppercase",children:"FashionSelect Catalog"})]}),m.jsx("span",{className:"px-2.5 py-0.5 bg-mint text-carbon border border-carbon rounded-full text-[10px] font-black uppercase",children:"JWT PROTECTED"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[m.jsxs("div",{className:"p-3 bg-mist rounded-card border border-carbon space-y-2",children:[m.jsx("div",{className:"h-20 bg-sunburst/50 rounded-lg border border-carbon flex items-center justify-center font-display font-black text-xs",children:"SPRING JACKET"}),m.jsxs("div",{className:"flex justify-between items-center text-xs font-bold font-mono",children:[m.jsx("span",{children:"#SKU-104"}),m.jsx("span",{className:"bg-carbon text-paper px-1.5 py-0.5 rounded",children:"$89.00"})]})]}),m.jsxs("div",{className:"p-3 bg-mist rounded-card border border-carbon space-y-2",children:[m.jsx("div",{className:"h-20 bg-electric/40 rounded-lg border border-carbon flex items-center justify-center font-display font-black text-xs",children:"COTTON TEE"}),m.jsxs("div",{className:"flex justify-between items-center text-xs font-bold font-mono",children:[m.jsx("span",{children:"#SKU-208"}),m.jsx("span",{className:"bg-carbon text-paper px-1.5 py-0.5 rounded",children:"$34.00"})]})]})]}),m.jsxs("div",{className:"bg-carbon text-paper rounded-card p-3 font-mono text-xs space-y-1",children:[m.jsxs("div",{className:"text-mint flex items-center gap-1.5 font-bold",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-mint"}),"GET /api/v1/products?category=apparel"]}),m.jsx("div",{className:"text-paper/70 text-[11px]",children:"SELECT id, title, price, stock FROM products WHERE active = 1;"})]})]})]})}),m.jsx("div",{className:"group relative bg-mint rounded-card-lg border-[2.5px] border-carbon p-6 sm:p-10 shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-all duration-300",children:m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[m.jsxs("div",{className:"lg:col-span-6 order-2 lg:order-1 bg-paper rounded-card border-[2px] border-carbon p-5 shadow-[4px_4px_0px_#000000] space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-carbon",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(pv,{className:"w-5 h-5 text-carbon"}),m.jsx("span",{className:"font-display font-black text-sm uppercase",children:"FoodServe Dispatch"})]}),m.jsx("span",{className:"px-2.5 py-0.5 bg-sunburst text-carbon border border-carbon rounded-full text-[10px] font-black uppercase",children:"LIVE REST API"})]}),m.jsxs("div",{className:"p-3 bg-sky rounded-card border border-carbon space-y-3",children:[m.jsx("div",{className:"text-[11px] font-black uppercase font-display text-carbon/70",children:"TRANSACTIONAL LIFECYCLE"}),m.jsxs("div",{className:"grid grid-cols-4 gap-1 text-center font-display font-extrabold text-[11px]",children:[m.jsx("div",{className:"p-2 bg-paper rounded border border-carbon",children:"FOOD"}),m.jsx("div",{className:"p-2 bg-sunburst rounded border border-carbon",children:"ORDER"}),m.jsx("div",{className:"p-2 bg-electric rounded border border-carbon",children:"API"}),m.jsx("div",{className:"p-2 bg-lavender rounded border border-carbon",children:"SQL DB"})]})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3 font-mono text-xs",children:[m.jsxs("div",{className:"p-3 bg-mist rounded-card border border-carbon",children:[m.jsx("div",{className:"text-carbon/60 text-[10px] font-bold",children:"STATUS"}),m.jsx("div",{className:"font-black text-carbon",children:"ORDER_DISPATCHED"}),m.jsx("div",{className:"text-[11px] text-carbon/75 mt-1",children:"Bearer JWT Token Valid"})]}),m.jsxs("div",{className:"p-3 bg-mist rounded-card border border-carbon",children:[m.jsx("div",{className:"text-carbon/60 text-[10px] font-bold",children:"PERSISTENCE"}),m.jsx("div",{className:"font-black text-carbon",children:"MYSQL COMMITTED"}),m.jsx("div",{className:"text-[11px] text-carbon/75 mt-1",children:"ACID Transaction OK"})]})]})]}),m.jsxs("div",{className:"lg:col-span-6 order-1 lg:order-2 space-y-5",children:[m.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[m.jsx("span",{className:"px-3 py-1 bg-carbon text-paper font-display font-black text-xs uppercase rounded-pill",children:"PROJECT 02"}),m.jsx("span",{className:"px-3 py-1 bg-sunburst text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill",children:"FULL STACK"}),m.jsx("span",{className:"px-3 py-1 bg-paper text-carbon border border-carbon font-mono font-bold text-xs rounded-pill",children:"May 2026"})]}),m.jsx("h3",{className:"font-display font-black text-4xl sm:text-5xl lg:text-6xl text-carbon uppercase tracking-tight leading-none",children:"FOODSERVE"}),m.jsx("p",{className:"font-display font-bold text-base sm:text-lg text-carbon/80 uppercase tracking-wide",children:"Online Food Delivery Application"}),m.jsx("p",{className:"font-body text-sm sm:text-base font-semibold text-carbon/90 leading-relaxed",children:"A full-stack food service application built using Spring Boot and React, implementing RESTful APIs for seamless communication between frontend and backend."}),m.jsxs("div",{className:"flex flex-wrap gap-2 pt-2",children:[m.jsx(At,{name:"Java",logo:"java",color:"sunburst",tilt:"-3deg",size:"sm"}),m.jsx(At,{name:"Spring Boot",logo:"spring",color:"paper",tilt:"2deg",size:"sm"}),m.jsx(At,{name:"React",logo:"react",color:"electric",tilt:"-2deg",size:"sm"}),m.jsx(At,{name:"SQL",logo:"database",color:"lavender",tilt:"4deg",size:"sm"}),m.jsx(At,{name:"REST API",logo:"rest",color:"sky",tilt:"-1deg",size:"sm"}),m.jsx(At,{name:"JWT",logo:"jwt",color:"ember",tilt:"3deg",size:"sm"})]}),m.jsx("div",{className:"pt-4",children:m.jsxs("button",{onClick:()=>e(Vp[1]),className:"flex items-center gap-2.5 px-6 py-3.5 bg-carbon text-paper rounded-pill font-display font-black text-xs sm:text-sm uppercase tracking-wider shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000] hover:-translate-y-1 active:translate-y-0.5 transition-all",children:[m.jsx("span",{children:"VIEW PROJECT DETAILS"}),m.jsx(Qr,{className:"w-4 h-4"})]})})]})]})})]})]}),s&&m.jsx(jE,{project:s,onClose:()=>e(null)})]})},XE=()=>{const s=mv[0];return m.jsx("section",{id:"experience",className:"relative py-24 px-4 md:px-8 bg-sky border-b-[2px] border-carbon overflow-hidden",children:m.jsxs("div",{className:"max-w-6xl mx-auto",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4",children:[m.jsxs("div",{children:[m.jsx("div",{className:"inline-block bg-lavender text-carbon px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3",children:"CAREER TIMELINE"}),m.jsxs("h2",{className:"font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight",children:["WHERE I'VE BEEN ",m.jsx("br",{className:"hidden sm:inline"}),"BUILDING"]})]}),m.jsx("div",{className:"max-w-md",children:m.jsx("p",{className:"font-body text-carbon/80 font-semibold text-base",children:"Hands-on enterprise full-stack development, delivering robust backend micro-modules and high-speed user interfaces."})})]}),m.jsxs("div",{className:"bg-paper rounded-card-lg border-[3px] border-carbon p-6 sm:p-12 shadow-[8px_8px_0px_#000000] relative",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pb-6 border-b-[2px] border-carbon",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("span",{className:"w-10 h-10 rounded-full bg-mint border-[1.5px] border-carbon flex items-center justify-center font-display font-black text-sm",children:"TAP"}),m.jsxs("div",{children:[m.jsx("h3",{className:"font-display font-black text-2xl sm:text-3xl text-carbon leading-none",children:s.company}),m.jsx("span",{className:"font-display font-bold text-sm text-carbon/70 uppercase",children:"FULL-STACK DEVELOPMENT TRACK"})]})]}),m.jsxs("div",{className:"flex items-center gap-2 bg-sunburst px-4 py-2 rounded-pill border-[1.5px] border-carbon font-mono font-bold text-xs sm:text-sm text-carbon shadow-[2px_2px_0px_#000000]",children:[m.jsx(iv,{className:"w-4 h-4"}),m.jsx("span",{children:s.period})]})]}),m.jsxs("div",{className:"py-6",children:[m.jsx("div",{className:"inline-block px-3 py-1 bg-carbon text-paper rounded-pill font-display font-black text-xs uppercase mb-3",children:"VERIFIED ROLE"}),m.jsx("h4",{className:"font-display font-extrabold text-3xl sm:text-4xl text-carbon uppercase tracking-tight",children:s.role})]}),m.jsx("div",{className:"space-y-4 mb-8",children:s.responsibilities.map((e,n)=>m.jsxs("div",{className:"flex items-start gap-4 p-4 rounded-card bg-mist border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000]",children:[m.jsxs("span",{className:"w-7 h-7 rounded-full bg-sunburst border border-carbon flex items-center justify-center font-display font-black text-xs flex-shrink-0 mt-0.5",children:["0",n+1]}),m.jsx("p",{className:"font-body text-sm sm:text-base font-semibold text-carbon/90 leading-relaxed",children:e})]},n))}),m.jsxs("div",{className:"pt-6 border-t-[2px] border-carbon",children:[m.jsx("div",{className:"text-xs font-display font-black uppercase text-carbon/70 tracking-wider mb-3",children:"TECHNOLOGIES DEPLOYED DURING INTERNSHIP"}),m.jsx("div",{className:"flex flex-wrap gap-2.5",children:s.skillsLearned.map((e,n)=>m.jsx(At,{name:e,logo:e.toLowerCase().replace(" ",""),color:n%3===0?"mint":n%3===1?"sunburst":"lavender",tilt:n%2===0?"-2deg":"2deg",size:"sm"},e))})]})]})]})})};var af={};(function s(e,n,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),E=L.getContext("2d");E.fillRect(0,0,1,1);var W=L.transferToImageBitmap();E.createPattern(W,"no-repeat")}catch{return!1}return!0})();function h(){}function g(L){var E=n.exports.Promise,W=E!==void 0?E:e.Promise;return typeof W=="function"?new W(L):(L(h,h),null)}var x=(function(L,E){return{transform:function(W){if(L)return W;if(E.has(W))return E.get(W);var xe=new OffscreenCanvas(W.width,W.height),X=xe.getContext("2d");return X.drawImage(W,0,0),E.set(W,xe),xe},clear:function(){E.clear()}}})(d,new Map),y=(function(){var L=Math.floor(16.666666666666668),E,W,xe={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(ee){var de=Math.random();return xe[de]=requestAnimationFrame(function ie(ge){X===ge||X+L-1<ge?(X=ge,delete xe[de],ee()):xe[de]=requestAnimationFrame(ie)}),de},W=function(ee){xe[ee]&&cancelAnimationFrame(xe[ee])}):(E=function(ee){return setTimeout(ee,L)},W=function(ee){return clearTimeout(ee)}),{frame:E,cancel:W}})(),S=(function(){var L,E,W={};function xe(X){function ee(de,ie){X.postMessage({options:de||{},callback:ie})}X.init=function(ie){var ge=ie.transferControlToOffscreen();X.postMessage({canvas:ge},[ge])},X.fire=function(ie,ge,be){if(E)return ee(ie,null),E;var Le=Math.random().toString(36).slice(2);return E=g(function(Je){function $e(lt){lt.data.callback===Le&&(delete W[Le],X.removeEventListener("message",$e),E=null,x.clear(),be(),Je())}X.addEventListener("message",$e),ee(ie,Le),W[Le]=$e.bind(null,{data:{callback:Le}})}),E},X.reset=function(){X.postMessage({reset:!0});for(var ie in W)W[ie](),delete W[ie]}}return function(){if(L)return L;if(!r&&l){var X=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([X])))}catch(ee){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ee),null}xe(L)}return L}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(L,E){return E?E(L):L}function A(L){return L!=null}function _(L,E,W){return b(L&&A(L[E])?L[E]:M[E],W)}function v(L){return L<0?0:Math.floor(L)}function k(L,E){return Math.floor(Math.random()*(E-L))+L}function I(L){return parseInt(L,16)}function N(L){return L.map(Z)}function Z(L){var E=String(L).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:I(E.substring(0,2)),g:I(E.substring(2,4)),b:I(E.substring(4,6))}}function z(L){var E=_(L,"origin",Object);return E.x=_(E,"x",Number),E.y=_(E,"y",Number),E}function F(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function q(L){var E=L.getBoundingClientRect();L.width=E.width,L.height=E.height}function P(L){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=L,E}function R(L,E,W,xe,X,ee,de,ie,ge){L.save(),L.translate(E,W),L.rotate(ee),L.scale(xe,X),L.arc(0,0,1,de,ie,ge),L.restore()}function G(L){var E=L.angle*(Math.PI/180),W=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-E+(.5*W-Math.random()*W),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function ue(L,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var W=E.tick++/E.totalTicks,xe=E.x+E.random*E.tiltCos,X=E.y+E.random*E.tiltSin,ee=E.wobbleX+E.random*E.tiltCos,de=E.wobbleY+E.random*E.tiltSin;if(L.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-W)+")",L.beginPath(),u&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))L.fill(fe(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(ee-xe)*.1,Math.abs(de-X)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var ie=Math.PI/10*E.wobble,ge=Math.abs(ee-xe)*.1,be=Math.abs(de-X)*.1,Le=E.shape.bitmap.width*E.scalar,Je=E.shape.bitmap.height*E.scalar,$e=new DOMMatrix([Math.cos(ie)*ge,Math.sin(ie)*ge,-Math.sin(ie)*be,Math.cos(ie)*be,E.x,E.y]);$e.multiplySelf(new DOMMatrix(E.shape.matrix));var lt=L.createPattern(x.transform(E.shape.bitmap),"no-repeat");lt.setTransform($e),L.globalAlpha=1-W,L.fillStyle=lt,L.fillRect(E.x-Le/2,E.y-Je/2,Le,Je),L.globalAlpha=1}else if(E.shape==="circle")L.ellipse?L.ellipse(E.x,E.y,Math.abs(ee-xe)*E.ovalScalar,Math.abs(de-X)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):R(L,E.x,E.y,Math.abs(ee-xe)*E.ovalScalar,Math.abs(de-X)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var O=Math.PI/2*3,Ct=4*E.scalar,it=8*E.scalar,tt=E.x,Ve=E.y,xt=5,Fe=Math.PI/xt;xt--;)tt=E.x+Math.cos(O)*it,Ve=E.y+Math.sin(O)*it,L.lineTo(tt,Ve),O+=Fe,tt=E.x+Math.cos(O)*Ct,Ve=E.y+Math.sin(O)*Ct,L.lineTo(tt,Ve),O+=Fe;else L.moveTo(Math.floor(E.x),Math.floor(E.y)),L.lineTo(Math.floor(E.wobbleX),Math.floor(X)),L.lineTo(Math.floor(ee),Math.floor(de)),L.lineTo(Math.floor(xe),Math.floor(E.wobbleY));return L.closePath(),L.fill(),E.tick<E.totalTicks}function ne(L,E,W,xe,X){var ee=E.slice(),de=L.getContext("2d"),ie,ge,be=g(function(Le){function Je(){ie=ge=null,de.clearRect(0,0,xe.width,xe.height),x.clear(),X(),Le()}function $e(){r&&!(xe.width===o.width&&xe.height===o.height)&&(xe.width=L.width=o.width,xe.height=L.height=o.height),!xe.width&&!xe.height&&(W(L),xe.width=L.width,xe.height=L.height),de.clearRect(0,0,xe.width,xe.height),ee=ee.filter(function(lt){return ue(de,lt)}),ee.length?ie=y.frame($e):Je()}ie=y.frame($e),ge=Je});return{addFettis:function(Le){return ee=ee.concat(Le),be},canvas:L,promise:be,reset:function(){ie&&y.cancel(ie),ge&&ge()}}}function he(L,E){var W=!L,xe=!!_(E||{},"resize"),X=!1,ee=_(E,"disableForReducedMotion",Boolean),de=l&&!!_(E||{},"useWorker"),ie=de?S():null,ge=W?F:q,be=L&&ie?!!L.__confetti_initialized:!1,Le=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Je;function $e(O,Ct,it){for(var tt=_(O,"particleCount",v),Ve=_(O,"angle",Number),xt=_(O,"spread",Number),Fe=_(O,"startVelocity",Number),D=_(O,"decay",Number),T=_(O,"gravity",Number),te=_(O,"drift",Number),_e=_(O,"colors",N),ye=_(O,"ticks",Number),pe=_(O,"shapes"),Ge=_(O,"scalar"),Re=!!_(O,"flat"),Ue=z(O),dt=tt,Ee=[],Oe=L.width*Ue.x,Ze=L.height*Ue.y;dt--;)Ee.push(G({x:Oe,y:Ze,angle:Ve,spread:xt,startVelocity:Fe,color:_e[dt%_e.length],shape:pe[k(0,pe.length)],ticks:ye,decay:D,gravity:T,drift:te,scalar:Ge,flat:Re}));return Je?Je.addFettis(Ee):(Je=ne(L,Ee,ge,Ct,it),Je.promise)}function lt(O){var Ct=ee||_(O,"disableForReducedMotion",Boolean),it=_(O,"zIndex",Number);if(Ct&&Le)return g(function(Fe){Fe()});W&&Je?L=Je.canvas:W&&!L&&(L=P(it),document.body.appendChild(L)),xe&&!be&&ge(L);var tt={width:L.width,height:L.height};ie&&!be&&ie.init(L),be=!0,ie&&(L.__confetti_initialized=!0);function Ve(){if(ie){var Fe={getBoundingClientRect:function(){if(!W)return L.getBoundingClientRect()}};ge(Fe),ie.postMessage({resize:{width:Fe.width,height:Fe.height}});return}tt.width=tt.height=null}function xt(){Je=null,xe&&(X=!1,e.removeEventListener("resize",Ve)),W&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,be=!1)}return xe&&!X&&(X=!0,e.addEventListener("resize",Ve,!1)),ie?ie.fire(O,tt,xt):$e(O,tt,xt)}return lt.reset=function(){ie&&ie.reset(),Je&&Je.reset()},lt}var me;function ce(){return me||(me=he(null,{useWorker:!0,resize:!0})),me}function fe(L,E,W,xe,X,ee,de){var ie=new Path2D(L),ge=new Path2D;ge.addPath(ie,new DOMMatrix(E));var be=new Path2D;return be.addPath(ge,new DOMMatrix([Math.cos(de)*X,Math.sin(de)*X,-Math.sin(de)*ee,Math.cos(de)*ee,W,xe])),be}function H(L){if(!u)throw new Error("path confetti are not supported in this browser");var E,W;typeof L=="string"?E=L:(E=L.path,W=L.matrix);var xe=new Path2D(E),X=document.createElement("canvas"),ee=X.getContext("2d");if(!W){for(var de=1e3,ie=de,ge=de,be=0,Le=0,Je,$e,lt=0;lt<de;lt+=2)for(var O=0;O<de;O+=2)ee.isPointInPath(xe,lt,O,"nonzero")&&(ie=Math.min(ie,lt),ge=Math.min(ge,O),be=Math.max(be,lt),Le=Math.max(Le,O));Je=be-ie,$e=Le-ge;var Ct=10,it=Math.min(Ct/Je,Ct/$e);W=[it,0,0,it,-Math.round(Je/2+ie)*it,-Math.round($e/2+ge)*it]}return{type:"path",path:E,matrix:W}}function le(L){var E,W=1,xe="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?E=L:(E=L.text,W="scalar"in L?L.scalar:W,X="fontFamily"in L?L.fontFamily:X,xe="color"in L?L.color:xe);var ee=10*W,de=""+ee+"px "+X,ie=new OffscreenCanvas(ee,ee),ge=ie.getContext("2d");ge.font=de;var be=ge.measureText(E),Le=Math.ceil(be.actualBoundingBoxRight+be.actualBoundingBoxLeft),Je=Math.ceil(be.actualBoundingBoxAscent+be.actualBoundingBoxDescent),$e=2,lt=be.actualBoundingBoxLeft+$e,O=be.actualBoundingBoxAscent+$e;Le+=$e+$e,Je+=$e+$e,ie=new OffscreenCanvas(Le,Je),ge=ie.getContext("2d"),ge.font=de,ge.fillStyle=xe,ge.fillText(E,lt,O);var Ct=1/W;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[Ct,0,0,Ct,-Le*Ct/2,-Je*Ct/2]}}n.exports=function(){return ce().apply(this,arguments)},n.exports.reset=function(){ce().reset()},n.exports.create=he,n.exports.shapeFromPath=H,n.exports.shapeFromText=le})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),af,!1);const YE=af.exports;af.exports.create;const qE=()=>{const s=gv[0],e=()=>{YE({particleCount:80,spread:70,origin:{y:.6},colors:["#ffd731","#4da2ff","#55db9c","#fb4903","#e9ccff","#000000"]})};return m.jsx("section",{id:"education",className:"relative py-24 px-4 md:px-8 bg-paper border-b-[2px] border-carbon overflow-hidden",children:m.jsxs("div",{className:"max-w-6xl mx-auto",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4",children:[m.jsxs("div",{children:[m.jsx("div",{className:"inline-block bg-sunburst text-carbon px-3.5 py-1 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-3",children:"RECOGNITION & CREDENTIALS"}),m.jsxs("h2",{className:"font-display font-black text-carbon text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.85] tracking-tight",children:["ONE FOR THE ",m.jsx("br",{className:"hidden sm:inline"}),"TROPHY SHELF"]})]}),m.jsx("div",{className:"max-w-md",children:m.jsx("p",{className:"font-body text-carbon/80 font-semibold text-base",children:"Verified accolades in technical presentation and formal academic credentials in Information Technology."})})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch",children:[m.jsxs("div",{className:"lg:col-span-6 bg-sunburst rounded-card-lg border-[3px] border-carbon p-6 sm:p-10 shadow-[8px_8px_0px_#000000] flex flex-col justify-between relative overflow-hidden",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between gap-2 mb-6",children:[m.jsx("span",{className:"px-3.5 py-1 bg-carbon text-paper font-display font-black text-xs uppercase rounded-pill",children:"FEATURED RECOGNITION"}),m.jsx("span",{className:"text-3xl",children:"🏆"})]}),m.jsx("div",{className:"font-display font-black text-5xl sm:text-6xl text-carbon uppercase leading-none tracking-tight mb-3",children:s.title}),m.jsx("div",{className:"font-display font-extrabold text-xl sm:text-2xl text-carbon/90 uppercase tracking-wide mb-6",children:s.event}),m.jsx("p",{className:"font-body text-base font-semibold text-carbon/90 leading-relaxed bg-paper/90 p-4 rounded-card border-[1.5px] border-carbon shadow-[3px_3px_0px_#000000]",children:s.description})]}),m.jsxs("div",{className:"mt-8 pt-6 border-t-[2px] border-carbon flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-mono font-bold uppercase text-carbon/75",children:"VERIFIED TECHNICAL COMPETITION"}),m.jsxs("button",{onClick:e,className:"px-5 py-2.5 bg-carbon text-paper rounded-pill font-display font-black text-xs uppercase tracking-wider hover:bg-carbon/90 shadow-[3px_3px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center gap-1.5",children:[m.jsx(hv,{className:"w-3.5 h-3.5 text-sunburst"}),m.jsx("span",{children:"CELEBRATE 🏆"})]})]})]}),m.jsxs("div",{className:"lg:col-span-6 flex flex-col gap-6",children:[m.jsxs("div",{className:"bg-sky rounded-card-lg border-[2.5px] border-carbon p-6 sm:p-8 shadow-[6px_6px_0px_#000000] flex-1",children:[m.jsxs("div",{className:"flex items-center justify-between gap-2 mb-4",children:[m.jsx("span",{className:"px-3 py-1 bg-paper text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill",children:"BACHELOR OF ENGINEERING"}),m.jsx("span",{className:"px-3 py-1 bg-mint text-carbon border border-carbon font-display font-black text-xs rounded-pill",children:vi[0].score})]}),m.jsx("h3",{className:"font-display font-black text-2xl sm:text-3xl text-carbon uppercase tracking-tight mb-1",children:vi[0].institution}),m.jsx("div",{className:"font-body text-base font-bold text-carbon/80 mb-4",children:vi[0].degree}),m.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-carbon/75 pt-3 border-t border-carbon/20",children:[m.jsxs("span",{className:"flex items-center gap-1",children:["📅 ",vi[0].period]}),m.jsxs("span",{className:"flex items-center gap-1",children:[m.jsx(Bp,{className:"w-3.5 h-3.5"})," ",vi[0].location]})]})]}),m.jsxs("div",{className:"bg-mist rounded-card-lg border-[2.5px] border-carbon p-6 sm:p-8 shadow-[6px_6px_0px_#000000] flex-1",children:[m.jsxs("div",{className:"flex items-center justify-between gap-2 mb-4",children:[m.jsx("span",{className:"px-3 py-1 bg-paper text-carbon border border-carbon font-display font-black text-xs uppercase rounded-pill",children:"HIGHER SECONDARY"}),m.jsx("span",{className:"px-3 py-1 bg-lavender text-carbon border border-carbon font-display font-black text-xs rounded-pill",children:vi[1].score})]}),m.jsx("h3",{className:"font-display font-black text-2xl sm:text-3xl text-carbon uppercase tracking-tight mb-1",children:vi[1].institution}),m.jsx("div",{className:"font-body text-base font-bold text-carbon/80 mb-4",children:vi[1].degree}),m.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-carbon/75 pt-3 border-t border-carbon/20",children:[m.jsxs("span",{className:"flex items-center gap-1",children:["📅 ",vi[1].period]}),m.jsxs("span",{className:"flex items-center gap-1",children:[m.jsx(Bp,{className:"w-3.5 h-3.5"})," ",vi[1].location]})]})]})]})]})]})})},$E=({onTriggerToast:s})=>{const[e,n]=zt.useState(null),[r,o]=zt.useState({name:"",email:"",message:""}),[l,u]=zt.useState(!1),d=(g,x)=>{navigator.clipboard.writeText(g),n(x),s&&s(`Copied ${x} to clipboard!`),setTimeout(()=>n(null),2500)},h=g=>{g.preventDefault(),!(!r.email||!r.message)&&(u(!0),s&&s("Message received! Thanks for connecting."),setTimeout(()=>{u(!1),o({name:"",email:"",message:""})},4e3))};return m.jsxs("section",{id:"contact",className:"relative py-24 px-4 md:px-8 bg-sky border-b-[2px] border-carbon overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 z-0 opacity-80 pointer-events-none",children:m.jsx(t0,{variant:"compact",interactive:!1,className:"w-full h-full"})}),m.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto",children:[m.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[m.jsx("div",{className:"inline-block bg-sunburst px-4 py-1.5 rounded-pill border-[1.5px] border-carbon shadow-[2px_2px_0px_#000000] text-xs font-display font-black tracking-wider uppercase mb-4",children:"START A CONVERSATION"}),m.jsxs("h2",{className:"font-display font-black text-carbon text-6xl sm:text-7xl md:text-8xl uppercase leading-[0.80] tracking-tight",children:["LET'S BUILD ",m.jsx("br",{}),"SOMETHING ",m.jsx("br",{}),m.jsx("span",{className:"underline decoration-electric decoration-8",children:"TOGETHER."})]}),m.jsx("p",{className:"font-body font-bold text-carbon/80 text-base sm:text-lg mt-6",children:"Available for Java Full-Stack engineering roles, backend microservice architecture, and interactive React applications."})]}),m.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-12",children:[m.jsx(At,{name:"Java",logo:"java",color:"sunburst",tilt:"-4deg",size:"md"}),m.jsx(At,{name:"Spring",logo:"spring",color:"mint",tilt:"3deg",size:"md"}),m.jsx(At,{name:"React",logo:"react",color:"electric",tilt:"-2deg",size:"md"}),m.jsx(At,{name:"MySQL",logo:"mysql",color:"lavender",tilt:"4deg",size:"md"})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[m.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[m.jsx("div",{onClick:()=>d(_i.contact.email,"Email"),className:"group cursor-pointer bg-paper rounded-card border-[2px] border-carbon p-5 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("span",{className:"w-10 h-10 rounded-full bg-sunburst border border-carbon flex items-center justify-center",children:m.jsx(sv,{className:"w-5 h-5 text-carbon"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-[11px] font-black uppercase text-carbon/60 font-display",children:"EMAIL ADDRESS"}),m.jsx("div",{className:"font-mono font-bold text-sm sm:text-base text-carbon break-all",children:_i.contact.email})]})]}),m.jsx("button",{className:"p-2 rounded-full bg-mist border border-carbon group-hover:bg-sunburst transition-colors",children:e==="Email"?m.jsx(Op,{className:"w-4 h-4 text-carbon"}):m.jsx(zp,{className:"w-4 h-4 text-carbon"})})]})}),m.jsx("div",{onClick:()=>d(_i.contact.phone,"Phone"),className:"group cursor-pointer bg-paper rounded-card border-[2px] border-carbon p-5 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("span",{className:"w-10 h-10 rounded-full bg-mint border border-carbon flex items-center justify-center",children:m.jsx(lv,{className:"w-5 h-5 text-carbon"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-[11px] font-black uppercase text-carbon/60 font-display",children:"PHONE NUMBER"}),m.jsxs("div",{className:"font-mono font-bold text-base text-carbon",children:["+91 ",_i.contact.phone]})]})]}),m.jsx("button",{className:"p-2 rounded-full bg-mist border border-carbon group-hover:bg-mint transition-colors",children:e==="Phone"?m.jsx(Op,{className:"w-4 h-4 text-carbon"}):m.jsx(zp,{className:"w-4 h-4 text-carbon"})})]})}),m.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[m.jsxs("a",{href:_i.contact.linkedin,target:"_blank",rel:"noopener noreferrer",className:"bg-paper rounded-card border-[2px] border-carbon p-4 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(ns,{name:"linkedin",className:"w-5 h-5 text-electric"}),m.jsx("span",{className:"font-display font-black text-sm uppercase",children:"LinkedIn"})]}),m.jsx(Qr,{className:"w-4 h-4 text-carbon"})]}),m.jsxs("a",{href:_i.contact.github,target:"_blank",rel:"noopener noreferrer",className:"bg-paper rounded-card border-[2px] border-carbon p-4 shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-1 transition-all flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(ns,{name:"github",className:"w-5 h-5 text-carbon"}),m.jsx("span",{className:"font-display font-black text-sm uppercase",children:"GitHub"})]}),m.jsx(Qr,{className:"w-4 h-4 text-carbon"})]})]})]}),m.jsxs("div",{className:"lg:col-span-7 bg-paper rounded-card-lg border-[3px] border-carbon p-6 sm:p-8 shadow-[8px_8px_0px_#000000]",children:[m.jsx("h3",{className:"font-display font-black text-2xl sm:text-3xl text-carbon uppercase mb-4",children:"SEND A DIRECT MESSAGE"}),l?m.jsxs("div",{className:"p-6 bg-mint rounded-card border-[2px] border-carbon text-center space-y-2",children:[m.jsx("div",{className:"text-3xl",children:"✨"}),m.jsx("h4",{className:"font-display font-black text-xl text-carbon uppercase",children:"Message Received!"}),m.jsx("p",{className:"font-body text-sm font-semibold text-carbon/80",children:"Thank you for reaching out, Charu will reply to you as soon as possible."})]}):m.jsxs("form",{onSubmit:h,className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-display font-black uppercase text-carbon mb-1",children:"YOUR NAME"}),m.jsx("input",{type:"text",required:!0,value:r.name,onChange:g=>o({...r,name:g.target.value}),placeholder:"e.g. Alex Morgan",className:"w-full px-4 py-3 bg-mist rounded-card border-[1.5px] border-carbon font-body font-semibold text-sm focus:outline-none focus:bg-paper focus:ring-2 focus:ring-carbon transition-all"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-display font-black uppercase text-carbon mb-1",children:"YOUR EMAIL"}),m.jsx("input",{type:"email",required:!0,value:r.email,onChange:g=>o({...r,email:g.target.value}),placeholder:"e.g. alex@company.com",className:"w-full px-4 py-3 bg-mist rounded-card border-[1.5px] border-carbon font-body font-semibold text-sm focus:outline-none focus:bg-paper focus:ring-2 focus:ring-carbon transition-all"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-display font-black uppercase text-carbon mb-1",children:"PROJECT / MESSAGE"}),m.jsx("textarea",{rows:4,required:!0,value:r.message,onChange:g=>o({...r,message:g.target.value}),placeholder:"Tell me about your project, team, or opportunity...",className:"w-full px-4 py-3 bg-mist rounded-card border-[1.5px] border-carbon font-body font-semibold text-sm focus:outline-none focus:bg-paper focus:ring-2 focus:ring-carbon transition-all resize-none"})]}),m.jsxs("button",{type:"submit",className:"w-full py-4 bg-carbon text-paper rounded-pill border-[1.5px] border-carbon font-display font-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] hover:-translate-y-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2",children:[m.jsx(cv,{className:"w-4 h-4"}),m.jsx("span",{children:"SEND MESSAGE"})]})]})]})]})]})]})},KE=()=>{const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return m.jsx("footer",{className:"bg-carbon text-paper py-16 px-4 md:px-8 border-t-[3px] border-carbon",children:m.jsxs("div",{className:"max-w-6xl mx-auto",children:[m.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-paper/20 gap-8",children:[m.jsxs("div",{children:[m.jsx("h2",{className:"font-display font-black text-4xl sm:text-6xl text-paper uppercase tracking-tight leading-none mb-3",children:"CHARU SHARMA"}),m.jsx("p",{className:"font-display font-bold text-sm sm:text-base text-sunburst uppercase tracking-wider",children:"JAVA FULL-STACK DEVELOPER"})]}),m.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[m.jsx("a",{href:_i.contact.github,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full bg-paper/10 hover:bg-paper/20 text-paper border border-paper/30 transition-colors","aria-label":"GitHub Profile",children:m.jsx(ns,{name:"github",className:"w-5 h-5"})}),m.jsx("a",{href:_i.contact.linkedin,target:"_blank",rel:"noopener noreferrer",className:"p-3 rounded-full bg-paper/10 hover:bg-paper/20 text-paper border border-paper/30 transition-colors","aria-label":"LinkedIn Profile",children:m.jsx(ns,{name:"linkedin",className:"w-5 h-5"})}),m.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-5 py-3 rounded-pill bg-sunburst text-carbon font-display font-black text-xs uppercase tracking-wider hover:bg-sunburst/90 transition-all",children:[m.jsx("span",{children:"BACK TO TOP"}),m.jsx(nv,{className:"w-4 h-4"})]})]})]}),m.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-medium text-paper/60",children:[m.jsx("p",{children:"BUILT WITH JAVA, REACT & A LOT OF CURIOSITY."}),m.jsx("p",{children:"© 2026 CHARU SHARMA • ALL RIGHTS RESERVED"})]})]})})},JE=({message:s,show:e,icon:n})=>e?m.jsx("div",{className:"fixed bottom-6 right-6 z-50 animate-bounce duration-300",children:m.jsxs("div",{className:"bg-sunburst text-carbon border-[2px] border-carbon rounded-card px-5 py-3 shadow-[5px_5px_0px_#000000] flex items-center gap-3 font-bold text-sm",children:[n||m.jsx(tg,{className:"w-5 h-5 text-carbon"}),m.jsx("span",{children:s})]})}):null;function ZE(){const[s,e]=zt.useState(null),n=r=>{e(r),setTimeout(()=>{e(null)},3e3)};return m.jsxs("div",{className:"relative min-h-screen bg-sky text-carbon selection:bg-sunburst selection:text-carbon",children:[m.jsx(xv,{}),m.jsxs("main",{children:[m.jsx(HE,{}),m.jsx(VE,{}),m.jsx(GE,{}),m.jsx(WE,{}),m.jsx(XE,{}),m.jsx(qE,{}),m.jsx($E,{onTriggerToast:n})]}),m.jsx(KE,{}),m.jsx(JE,{message:s,show:!!s})]})}jx.createRoot(document.getElementById("root")).render(m.jsx(Fx.StrictMode,{children:m.jsx(ZE,{})}));
