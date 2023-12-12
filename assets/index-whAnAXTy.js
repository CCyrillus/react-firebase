function J_(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Wk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Z_={exports:{}},Ws={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var gv=Object.getOwnPropertySymbols,Hk=Object.prototype.hasOwnProperty,Bk=Object.prototype.propertyIsEnumerable;function Kk(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Yk(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var eE=Yk()?Object.assign:function(e,t){for(var n,r=Kk(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var a in n)Hk.call(n,a)&&(r[a]=n[a]);if(gv){i=gv(n);for(var l=0;l<i.length;l++)Bk.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},tE={exports:{}},ye={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh=eE,la=60103,nE=60106;ye.Fragment=60107;ye.StrictMode=60108;ye.Profiler=60114;var rE=60109,iE=60110,oE=60112;ye.Suspense=60113;var aE=60115,sE=60116;if(typeof Symbol=="function"&&Symbol.for){var Tn=Symbol.for;la=Tn("react.element"),nE=Tn("react.portal"),ye.Fragment=Tn("react.fragment"),ye.StrictMode=Tn("react.strict_mode"),ye.Profiler=Tn("react.profiler"),rE=Tn("react.provider"),iE=Tn("react.context"),oE=Tn("react.forward_ref"),ye.Suspense=Tn("react.suspense"),aE=Tn("react.memo"),sE=Tn("react.lazy")}var vv=typeof Symbol=="function"&&Symbol.iterator;function Gk(e){return e===null||typeof e!="object"?null:(e=vv&&e[vv]||e["@@iterator"],typeof e=="function"?e:null)}function Hs(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uE={};function ua(e,t,n){this.props=e,this.context=t,this.refs=uE,this.updater=n||lE}ua.prototype.isReactComponent={};ua.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(Hs(85));this.updater.enqueueSetState(this,e,t,"setState")};ua.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cE(){}cE.prototype=ua.prototype;function Qh(e,t,n){this.props=e,this.context=t,this.refs=uE,this.updater=n||lE}var Jh=Qh.prototype=new cE;Jh.constructor=Qh;Xh(Jh,ua.prototype);Jh.isPureReactComponent=!0;var Zh={current:null},fE=Object.prototype.hasOwnProperty,dE={key:!0,ref:!0,__self:!0,__source:!0};function hE(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)fE.call(t,r)&&!dE.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:la,type:e,key:o,ref:a,props:i,_owner:Zh.current}}function qk(e,t){return{$$typeof:la,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ep(e){return typeof e=="object"&&e!==null&&e.$$typeof===la}function Xk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yv=/\/+/g;function Gf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xk(""+e.key):t.toString(36)}function cu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case la:case nE:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Gf(a,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(yv,"$&/")+"/"),cu(i,t,n,"",function(d){return d})):i!=null&&(ep(i)&&(i=qk(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(yv,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Gf(o,l);a+=cu(o,t,n,u,i)}else if(u=Gk(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Gf(o,l++),a+=cu(o,t,n,u,i);else if(o==="object")throw t=""+e,Error(Hs(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function Wl(e,t,n){if(e==null)return e;var r=[],i=0;return cu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Qk(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var pE={current:null};function vr(){var e=pE.current;if(e===null)throw Error(Hs(321));return e}var Jk={ReactCurrentDispatcher:pE,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Zh,IsSomeRendererActing:{current:!1},assign:Xh};ye.Children={map:Wl,forEach:function(e,t,n){Wl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wl(e,function(){t++}),t},toArray:function(e){return Wl(e,function(t){return t})||[]},only:function(e){if(!ep(e))throw Error(Hs(143));return e}};ye.Component=ua;ye.PureComponent=Qh;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jk;ye.cloneElement=function(e,t,n){if(e==null)throw Error(Hs(267,e));var r=Xh({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Zh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)fE.call(t,u)&&!dE.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:la,type:e.type,key:i,ref:o,props:r,_owner:a}};ye.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:iE,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:rE,_context:e},e.Consumer=e};ye.createElement=hE;ye.createFactory=function(e){var t=hE.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:oE,render:e}};ye.isValidElement=ep;ye.lazy=function(e){return{$$typeof:sE,_payload:{_status:-1,_result:e},_init:Qk}};ye.memo=function(e,t){return{$$typeof:aE,type:e,compare:t===void 0?null:t}};ye.useCallback=function(e,t){return vr().useCallback(e,t)};ye.useContext=function(e,t){return vr().useContext(e,t)};ye.useDebugValue=function(){};ye.useEffect=function(e,t){return vr().useEffect(e,t)};ye.useImperativeHandle=function(e,t,n){return vr().useImperativeHandle(e,t,n)};ye.useLayoutEffect=function(e,t){return vr().useLayoutEffect(e,t)};ye.useMemo=function(e,t){return vr().useMemo(e,t)};ye.useReducer=function(e,t,n){return vr().useReducer(e,t,n)};ye.useRef=function(e){return vr().useRef(e)};ye.useState=function(e){return vr().useState(e)};ye.version="17.0.2";tE.exports=ye;var $=tE.exports;const St=qh($),Zk=J_({__proto__:null,default:St},[$]);/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eC=$,mE=60103;Ws.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var _v=Symbol.for;mE=_v("react.element"),Ws.Fragment=_v("react.fragment")}var tC=eC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nC=Object.prototype.hasOwnProperty,rC={key:!0,ref:!0,__self:!0,__source:!0};function gE(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)nC.call(t,r)&&!rC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:mE,type:e,key:o,ref:a,props:i,_owner:tC.current}}Ws.jsx=gE;Ws.jsxs=gE;Z_.exports=Ws;var D=Z_.exports,vE={exports:{}},vn={},yE={exports:{}},_E={};/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i,o;if(typeof window>"u"||typeof MessageChannel!="function"){var a=null,l=null,u=function(){if(a!==null)try{var V=e.unstable_now();a(!0,V),a=null}catch(X){throw setTimeout(u,0),X}},d=Date.now();e.unstable_now=function(){return Date.now()-d},t=function(V){a!==null?setTimeout(t,0,V):(a=V,setTimeout(u,0))},n=function(V,X){l=setTimeout(V,X)},r=function(){clearTimeout(l)},i=function(){return!1},o=e.unstable_forceFrameRate=function(){}}else{var p=window.performance,m=window.Date,w=window.setTimeout,S=window.clearTimeout;if(typeof console<"u"){var O=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof O!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof p=="object"&&typeof p.now=="function")e.unstable_now=function(){return p.now()};else{var A=m.now();e.unstable_now=function(){return m.now()-A}}var g=!1,v=null,E=-1,I=5,_=0;i=function(){return e.unstable_now()>=_},o=function(){},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):I=0<V?Math.floor(1e3/V):5};var x=new MessageChannel,M=x.port2;x.port1.onmessage=function(){if(v!==null){var V=e.unstable_now();_=V+I;try{v(!0,V)?M.postMessage(null):(g=!1,v=null)}catch(X){throw M.postMessage(null),X}}else g=!1},t=function(V){v=V,g||(g=!0,M.postMessage(null))},n=function(V,X){E=w(function(){V(e.unstable_now())},X)},r=function(){S(E),E=-1}}function L(V,X){var ue=V.length;V.push(X);e:for(;;){var Ae=ue-1>>>1,P=V[Ae];if(P!==void 0&&0<ve(P,X))V[Ae]=X,V[ue]=P,ue=Ae;else break e}}function B(V){return V=V[0],V===void 0?null:V}function W(V){var X=V[0];if(X!==void 0){var ue=V.pop();if(ue!==X){V[0]=ue;e:for(var Ae=0,P=V.length;Ae<P;){var xe=2*(Ae+1)-1,yt=V[xe],sn=xe+1,it=V[sn];if(yt!==void 0&&0>ve(yt,ue))it!==void 0&&0>ve(it,yt)?(V[Ae]=it,V[sn]=ue,Ae=sn):(V[Ae]=yt,V[xe]=ue,Ae=xe);else if(it!==void 0&&0>ve(it,ue))V[Ae]=it,V[sn]=ue,Ae=sn;else break e}}return X}return null}function ve(V,X){var ue=V.sortIndex-X.sortIndex;return ue!==0?ue:V.id-X.id}var ge=[],je=[],vt=1,Ce=null,oe=3,rn=!1,kt=!1,Ct=!1;function ut(V){for(var X=B(je);X!==null;){if(X.callback===null)W(je);else if(X.startTime<=V)W(je),X.sortIndex=X.expirationTime,L(ge,X);else break;X=B(je)}}function on(V){if(Ct=!1,ut(V),!kt)if(B(ge)!==null)kt=!0,t(yn);else{var X=B(je);X!==null&&n(on,X.startTime-V)}}function yn(V,X){kt=!1,Ct&&(Ct=!1,r()),rn=!0;var ue=oe;try{for(ut(X),Ce=B(ge);Ce!==null&&(!(Ce.expirationTime>X)||V&&!i());){var Ae=Ce.callback;if(Ae!==null){Ce.callback=null,oe=Ce.priorityLevel;var P=Ae(Ce.expirationTime<=X);X=e.unstable_now(),typeof P=="function"?Ce.callback=P:Ce===B(ge)&&W(ge),ut(X)}else W(ge);Ce=B(ge)}if(Ce!==null)var xe=!0;else{var yt=B(je);yt!==null&&n(on,yt.startTime-X),xe=!1}return xe}finally{Ce=null,oe=ue,rn=!1}}function At(V){switch(V){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var an=o;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){kt||rn||(kt=!0,t(yn))},e.unstable_getCurrentPriorityLevel=function(){return oe},e.unstable_getFirstCallbackNode=function(){return B(ge)},e.unstable_next=function(V){switch(oe){case 1:case 2:case 3:var X=3;break;default:X=oe}var ue=oe;oe=X;try{return V()}finally{oe=ue}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=an,e.unstable_runWithPriority=function(V,X){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ue=oe;oe=V;try{return X()}finally{oe=ue}},e.unstable_scheduleCallback=function(V,X,ue){var Ae=e.unstable_now();if(typeof ue=="object"&&ue!==null){var P=ue.delay;P=typeof P=="number"&&0<P?Ae+P:Ae,ue=typeof ue.timeout=="number"?ue.timeout:At(V)}else ue=At(V),P=Ae;return ue=P+ue,V={id:vt++,callback:X,priorityLevel:V,startTime:P,expirationTime:ue,sortIndex:-1},P>Ae?(V.sortIndex=P,L(je,V),B(ge)===null&&V===B(je)&&(Ct?r():Ct=!0,n(on,P-Ae))):(V.sortIndex=ue,L(ge,V),kt||rn||(kt=!0,t(yn))),V},e.unstable_shouldYield=function(){var V=e.unstable_now();ut(V);var X=B(ge);return X!==Ce&&Ce!==null&&X!==null&&X.callback!==null&&X.startTime<=V&&X.expirationTime<Ce.expirationTime||i()},e.unstable_wrapCallback=function(V){var X=oe;return function(){var ue=oe;oe=X;try{return V.apply(this,arguments)}finally{oe=ue}}}})(_E);yE.exports=_E;var iC=yE.exports;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=$,xt=eE,pt=iC;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!yc)throw Error(U(227));function oC(e,t,n,r,i,o,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var ns=!1,Nu=null,xu=!1,Od=null,aC={onError:function(e){ns=!0,Nu=e}};function sC(e,t,n,r,i,o,a,l,u){ns=!1,Nu=null,oC.apply(aC,arguments)}function lC(e,t,n,r,i,o,a,l,u){if(sC.apply(this,arguments),ns){if(ns){var d=Nu;ns=!1,Nu=null}else throw Error(U(198));xu||(xu=!0,Od=d)}}var tp=null,EE=null,wE=null;function Ev(e,t,n){var r=e.type||"unknown-event";e.currentTarget=wE(n),lC(r,t,void 0,e),e.currentTarget=null}var Ru=null,Oo={};function bE(){if(Ru)for(var e in Oo){var t=Oo[e],n=Ru.indexOf(e);if(!(-1<n))throw Error(U(96,e));if(!Lu[n]){if(!t.extractEvents)throw Error(U(97,e));Lu[n]=t,n=t.eventTypes;for(var r in n){var i=void 0,o=n[r],a=t,l=r;if(Pd.hasOwnProperty(l))throw Error(U(99,l));Pd[l]=o;var u=o.phasedRegistrationNames;if(u){for(i in u)u.hasOwnProperty(i)&&wv(u[i],a,l);i=!0}else o.registrationName?(wv(o.registrationName,a,l),i=!0):i=!1;if(!i)throw Error(U(98,r,e))}}}}function wv(e,t,n){if(Zo[e])throw Error(U(100,e));Zo[e]=t,np[e]=t.eventTypes[n].dependencies}var Lu=[],Pd={},Zo={},np={};function TE(e){var t=!1,n;for(n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!Oo.hasOwnProperty(n)||Oo[n]!==r){if(Oo[n])throw Error(U(102,n));Oo[n]=r,t=!0}}t&&bE()}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nd=null,Vo=null,zo=null;function bv(e){if(e=EE(e)){if(typeof Nd!="function")throw Error(U(280));var t=e.stateNode;t&&(t=tp(t),Nd(e.stateNode,e.type,t))}}function SE(e){Vo?zo?zo.push(e):zo=[e]:Vo=e}function IE(){if(Vo){var e=Vo,t=zo;if(zo=Vo=null,bv(e),t)for(e=0;e<t.length;e++)bv(t[e])}}function rp(e,t){return e(t)}function kE(e,t,n,r,i){return e(t,n,r,i)}function ip(){}var CE=rp,Oi=!1,qf=!1;function op(){(Vo!==null||zo!==null)&&(ip(),IE())}function AE(e,t,n){if(qf)return e(t,n);qf=!0;try{return CE(e,t,n)}finally{qf=!1,op()}}var uC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tv=Object.prototype.hasOwnProperty,Sv={},Iv={};function cC(e){return Tv.call(Iv,e)?!0:Tv.call(Sv,e)?!1:uC.test(e)?Iv[e]=!0:(Sv[e]=!0,!1)}function fC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dC(e,t,n,r){if(t===null||typeof t>"u"||fC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Rt(e,t,n,r,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){mt[e]=new Rt(e,0,!1,e,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];mt[t]=new Rt(t,1,!1,e[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){mt[e]=new Rt(e,2,!1,e.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){mt[e]=new Rt(e,2,!1,e,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){mt[e]=new Rt(e,3,!1,e.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(e){mt[e]=new Rt(e,3,!0,e,null,!1)});["capture","download"].forEach(function(e){mt[e]=new Rt(e,4,!1,e,null,!1)});["cols","rows","size","span"].forEach(function(e){mt[e]=new Rt(e,6,!1,e,null,!1)});["rowSpan","start"].forEach(function(e){mt[e]=new Rt(e,5,!1,e.toLowerCase(),null,!1)});var ap=/[\-:]([a-z])/g;function sp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ap,sp);mt[t]=new Rt(t,1,!1,e,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ap,sp);mt[t]=new Rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ap,sp);mt[t]=new Rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(e){mt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!1)});mt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(e){mt[e]=new Rt(e,1,!1,e.toLowerCase(),null,!0)});var Cn=yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Cn.hasOwnProperty("ReactCurrentDispatcher")||(Cn.ReactCurrentDispatcher={current:null});Cn.hasOwnProperty("ReactCurrentBatchConfig")||(Cn.ReactCurrentBatchConfig={suspense:null});function lp(e,t,n,r){var i=mt.hasOwnProperty(t)?mt[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(dC(t,n,i,r)&&(n=null),r||i===null?cC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var hC=/^(.*)[\\\/]/,jt=typeof Symbol=="function"&&Symbol.for,Hl=jt?Symbol.for("react.element"):60103,Po=jt?Symbol.for("react.portal"):60106,Ai=jt?Symbol.for("react.fragment"):60107,OE=jt?Symbol.for("react.strict_mode"):60108,fu=jt?Symbol.for("react.profiler"):60114,PE=jt?Symbol.for("react.provider"):60109,NE=jt?Symbol.for("react.context"):60110,pC=jt?Symbol.for("react.concurrent_mode"):60111,up=jt?Symbol.for("react.forward_ref"):60112,du=jt?Symbol.for("react.suspense"):60113,xd=jt?Symbol.for("react.suspense_list"):60120,cp=jt?Symbol.for("react.memo"):60115,xE=jt?Symbol.for("react.lazy"):60116,RE=jt?Symbol.for("react.block"):60121,kv=typeof Symbol=="function"&&Symbol.iterator;function Da(e){return e===null||typeof e!="object"?null:(e=kv&&e[kv]||e["@@iterator"],typeof e=="function"?e:null)}function mC(e){if(e._status===-1){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}}function ur(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ai:return"Fragment";case Po:return"Portal";case fu:return"Profiler";case OE:return"StrictMode";case du:return"Suspense";case xd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case NE:return"Context.Consumer";case PE:return"Context.Provider";case up:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case cp:return ur(e.type);case RE:return ur(e.render);case xE:if(e=e._status===1?e._result:null)return ur(e)}return null}function fp(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,o=ur(e.type);n=null,r&&(n=ur(r.type)),r=o,o="",i?o=" (at "+i.fileName.replace(hC,"")+":"+i.lineNumber+")":n&&(o=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+o}t+=n,e=e.return}while(e);return t}function qr(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function LE(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gC(e){var t=LE(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bl(e){e._valueTracker||(e._valueTracker=gC(e))}function DE(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=LE(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rd(e,t){var n=t.checked;return xt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Cv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ME(e,t){t=t.checked,t!=null&&lp(e,"checked",t,!1)}function Ld(e,t){ME(e,t);var n=qr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dd(e,t.type,qr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Av(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dd(e,t,n){(t!=="number"||e.ownerDocument.activeElement!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function vC(e){var t="";return yc.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function Md(e,t){return e=xt({children:void 0},t),(t=vC(t.children))&&(e.children=t),e}function Wo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $d(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return xt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ov(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qr(n)}}function $E(e,t){var n=qr(t.value),r=qr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var FE={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function UE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?UE(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kl,jE=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==FE.svg||"innerHTML"in e)e.innerHTML=t;else{for(Kl=Kl||document.createElement("div"),Kl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function Yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var No={animationend:Yl("Animation","AnimationEnd"),animationiteration:Yl("Animation","AnimationIteration"),animationstart:Yl("Animation","AnimationStart"),transitionend:Yl("Transition","TransitionEnd")},Xf={},VE={};oi&&(VE=document.createElement("div").style,"AnimationEvent"in window||(delete No.animationend.animation,delete No.animationiteration.animation,delete No.animationstart.animation),"TransitionEvent"in window||delete No.transitionend.transition);function _c(e){if(Xf[e])return Xf[e];if(!No[e])return e;var t=No[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in VE)return Xf[e]=t[n];return e}var zE=_c("animationend"),WE=_c("animationiteration"),HE=_c("animationstart"),BE=_c("transitionend"),Xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nv=new(typeof WeakMap=="function"?WeakMap:Map);function dp(e){var t=Nv.get(e);return t===void 0&&(t=new Map,Nv.set(e,t)),t}function ao(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.effectTag&1026&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function KE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xv(e){if(ao(e)!==e)throw Error(U(188))}function yC(e){var t=e.alternate;if(!t){if(t=ao(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return xv(i),e;if(o===r)return xv(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function YE(e){if(e=yC(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function ea(e,t){if(t==null)throw Error(U(30));return e==null?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function hp(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var Ma=null;function _C(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)Ev(e,t[r],n[r]);else t&&Ev(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function Ec(e){if(e!==null&&(Ma=ea(Ma,e)),e=Ma,Ma=null,e){if(hp(e,_C),Ma)throw Error(U(95));if(xu)throw e=Od,xu=!1,Od=null,e}}function pp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function GE(e){if(!oi)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}var Du=[];function qE(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>Du.length&&Du.push(e)}function XE(e,t,n,r){if(Du.length){var i=Du.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function QE(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;t=n.tag,t!==5&&t!==6||e.ancestors.push(n),n=Ks(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=pp(e.nativeEvent);r=e.topLevelType;var o=e.nativeEvent,a=e.eventSystemFlags;n===0&&(a|=64);for(var l=null,u=0;u<Lu.length;u++){var d=Lu[u];d&&(d=d.extractEvents(r,t,o,i,a))&&(l=ea(l,d))}Ec(l)}}function Ud(e,t,n){if(!n.has(e)){switch(e){case"scroll":Qa(t,"scroll",!0);break;case"focus":case"blur":Qa(t,"focus",!0),Qa(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":GE(e)&&Qa(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:Xa.indexOf(e)===-1&&Ue(e,t)}n.set(e,null)}}var JE,mp,ZE,jd=!1,jn=[],jr=null,Vr=null,zr=null,ys=new Map,_s=new Map,$a=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),EC="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function wC(e,t){var n=dp(t);Vd.forEach(function(r){Ud(r,t,n)}),EC.forEach(function(r){Ud(r,t,n)})}function zd(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:n|32,nativeEvent:i,container:r}}function Rv(e,t){switch(e){case"focus":case"blur":jr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_s.delete(t.pointerId)}}function Fa(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=zd(t,n,r,i,o),t!==null&&(t=Ys(t),t!==null&&mp(t)),e):(e.eventSystemFlags|=r,e)}function bC(e,t,n,r,i){switch(t){case"focus":return jr=Fa(jr,e,t,n,r,i),!0;case"dragenter":return Vr=Fa(Vr,e,t,n,r,i),!0;case"mouseover":return zr=Fa(zr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ys.set(o,Fa(ys.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_s.set(o,Fa(_s.get(o)||null,e,t,n,r,i)),!0}return!1}function TC(e){var t=Ks(e.target);if(t!==null){var n=ao(t);if(n!==null){if(t=n.tag,t===13){if(t=KE(n),t!==null){e.blockedOn=t,pt.unstable_runWithPriority(e.priority,function(){ZE(n)});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hu(e){if(e.blockedOn!==null)return!1;var t=yp(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(t!==null){var n=Ys(t);return n!==null&&mp(n),e.blockedOn=t,!1}return!0}function Lv(e,t,n){hu(e)&&n.delete(t)}function SC(){for(jd=!1;0<jn.length;){var e=jn[0];if(e.blockedOn!==null){e=Ys(e.blockedOn),e!==null&&JE(e);break}var t=yp(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);t!==null?e.blockedOn=t:jn.shift()}jr!==null&&hu(jr)&&(jr=null),Vr!==null&&hu(Vr)&&(Vr=null),zr!==null&&hu(zr)&&(zr=null),ys.forEach(Lv),_s.forEach(Lv)}function Ua(e,t){e.blockedOn===t&&(e.blockedOn=null,jd||(jd=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,SC)))}function ew(e){function t(i){return Ua(i,e)}if(0<jn.length){Ua(jn[0],e);for(var n=1;n<jn.length;n++){var r=jn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jr!==null&&Ua(jr,e),Vr!==null&&Ua(Vr,e),zr!==null&&Ua(zr,e),ys.forEach(t),_s.forEach(t),n=0;n<$a.length;n++)r=$a[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<$a.length&&(n=$a[0],n.blockedOn===null);)TC(n),n.blockedOn===null&&$a.shift()}var tw={},nw=new Map,gp=new Map,IC=["abort","abort",zE,"animationEnd",WE,"animationIteration",HE,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",BE,"transitionEnd","waiting","waiting"];function vp(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],o="on"+(i[0].toUpperCase()+i.slice(1));o={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[r],eventPriority:t},gp.set(r,t),nw.set(r,o),tw[i]=o}}vp("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);vp("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);vp(IC,2);for(var Dv="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Qf=0;Qf<Dv.length;Qf++)gp.set(Dv[Qf],0);var kC=pt.unstable_UserBlockingPriority,CC=pt.unstable_runWithPriority,pu=!0;function Ue(e,t){Qa(t,e,!1)}function Qa(e,t,n){var r=gp.get(t);switch(r===void 0?2:r){case 0:r=AC.bind(null,t,1,e);break;case 1:r=OC.bind(null,t,1,e);break;default:r=wc.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function AC(e,t,n,r){Oi||ip();var i=wc,o=Oi;Oi=!0;try{kE(i,e,t,n,r)}finally{(Oi=o)||op()}}function OC(e,t,n,r){CC(kC,wc.bind(null,e,t,n,r))}function wc(e,t,n,r){if(pu)if(0<jn.length&&-1<Vd.indexOf(e))e=zd(null,e,t,n,r),jn.push(e);else{var i=yp(e,t,n,r);if(i===null)Rv(e,r);else if(-1<Vd.indexOf(e))e=zd(i,e,t,n,r),jn.push(e);else if(!bC(i,e,t,n,r)){Rv(e,r),e=XE(e,r,null,t);try{AE(QE,e)}finally{qE(e)}}}}function yp(e,t,n,r){if(n=pp(r),n=Ks(n),n!==null){var i=ao(n);if(i===null)n=null;else{var o=i.tag;if(o===13){if(n=KE(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.hydrate)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=XE(e,r,n,t);try{AE(QE,e)}finally{qE(e)}return null}var rs={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},PC=["Webkit","ms","Moz","O"];Object.keys(rs).forEach(function(e){PC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rs[t]=rs[e]})});function rw(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rs.hasOwnProperty(e)&&rs[e]?(""+t).trim():t+"px"}function iw(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rw(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var NC=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wd(e,t){if(t){if(NC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e,""));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62,""))}}function Hd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mv=FE.html;function tr(e,t){e=e.nodeType===9||e.nodeType===11?e:e.ownerDocument;var n=dp(e);t=np[t];for(var r=0;r<t.length;r++)Ud(t[r],e,n)}function Mu(){}function Bd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $v(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fv(e,t){var n=$v(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$v(n)}}function ow(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ow(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uv(){for(var e=window,t=Bd();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bd(e.document)}return t}function Kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var aw="$",sw="/$",_p="$?",Ep="$!",Jf=null,Zf=null;function lw(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Yd(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,xC=typeof clearTimeout=="function"?clearTimeout:void 0;function Ho(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function jv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===aw||n===Ep||n===_p){if(t===0)return e;t--}else n===sw&&t++}e=e.previousSibling}return null}var wp=Math.random().toString(36).slice(2),Rr="__reactInternalInstance$"+wp,$u="__reactEventHandlers$"+wp,Bs="__reactContainere$"+wp;function Ks(e){var t=e[Rr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bs]||n[Rr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jv(e);e!==null;){if(n=e[Rr])return n;e=jv(e)}return t}e=n,n=e.parentNode}return null}function Ys(e){return e=e[Rr]||e[Bs],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function bp(e){return e[$u]||null}function nr(e){do e=e.return;while(e&&e.tag!==5);return e||null}function uw(e,t){var n=e.stateNode;if(!n)return null;var r=tp(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}function Vv(e,t,n){(t=uw(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=ea(n._dispatchListeners,t),n._dispatchInstances=ea(n._dispatchInstances,e))}function RC(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=nr(t);for(t=n.length;0<t--;)Vv(n[t],"captured",e);for(t=0;t<n.length;t++)Vv(n[t],"bubbled",e)}}function Gd(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=uw(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=ea(n._dispatchListeners,t),n._dispatchInstances=ea(n._dispatchInstances,e))}function LC(e){e&&e.dispatchConfig.registrationName&&Gd(e._targetInst,null,e)}function ta(e){hp(e,RC)}var Lr=null,Tp=null,mu=null;function cw(){if(mu)return mu;var e,t=Tp,n=t.length,r,i="value"in Lr?Lr.value:Lr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return mu=i.slice(e,1<r?1-r:void 0)}function gu(){return!0}function Fu(){return!1}function en(e,t,n,r){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface;for(var i in e)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):i==="target"?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?gu:Fu,this.isPropagationStopped=Fu,this}xt(en.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=gu)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=gu)},persist:function(){this.isPersistent=gu},isPersistent:Fu,destructor:function(){var e=this.constructor.Interface,t;for(t in e)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Fu,this._dispatchInstances=this._dispatchListeners=null}});en.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};en.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var i=new t;return xt(i,n.prototype),n.prototype=i,n.prototype.constructor=n,n.Interface=xt({},r.Interface,e),n.extend=r.extend,fw(n),n};fw(en);function DC(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}function MC(e){if(!(e instanceof this))throw Error(U(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function fw(e){e.eventPool=[],e.getPooled=DC,e.release=MC}var $C=en.extend({data:null}),FC=en.extend({data:null}),UC=[9,13,27,32],Sp=oi&&"CompositionEvent"in window,is=null;oi&&"documentMode"in document&&(is=document.documentMode);var jC=oi&&"TextEvent"in window&&!is,dw=oi&&(!Sp||is&&8<is&&11>=is),zv=" ",er={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Wv=!1;function hw(e,t){switch(e){case"keyup":return UC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function pw(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xo=!1;function VC(e,t){switch(e){case"compositionend":return pw(t);case"keypress":return t.which!==32?null:(Wv=!0,zv);case"textInput":return e=t.data,e===zv&&Wv?null:e;default:return null}}function zC(e,t){if(xo)return e==="compositionend"||!Sp&&hw(e,t)?(e=cw(),mu=Tp=Lr=null,xo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dw&&t.locale!=="ko"?null:t.data;default:return null}}var WC={eventTypes:er,extractEvents:function(e,t,n,r){var i;if(Sp)e:{switch(e){case"compositionstart":var o=er.compositionStart;break e;case"compositionend":o=er.compositionEnd;break e;case"compositionupdate":o=er.compositionUpdate;break e}o=void 0}else xo?hw(e,n)&&(o=er.compositionEnd):e==="keydown"&&n.keyCode===229&&(o=er.compositionStart);return o?(dw&&n.locale!=="ko"&&(xo||o!==er.compositionStart?o===er.compositionEnd&&xo&&(i=cw()):(Lr=r,Tp="value"in Lr?Lr.value:Lr.textContent,xo=!0)),o=$C.getPooled(o,t,n,r),i?o.data=i:(i=pw(n),i!==null&&(o.data=i)),ta(o),i=o):i=null,(e=jC?VC(e,n):zC(e,n))?(t=FC.getPooled(er.beforeInput,t,n,r),t.data=e,ta(t)):t=null,i===null?t:t===null?i:[i,t]}},HC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mw(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!HC[e.type]:t==="textarea"}var gw={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function vw(e,t,n){return e=en.getPooled(gw.change,e,t,n),e.type="change",SE(n),ta(e),e}var os=null,Es=null;function BC(e){Ec(e)}function bc(e){var t=Yi(e);if(DE(t))return e}function KC(e,t){if(e==="change")return t}var qd=!1;oi&&(qd=GE("input")&&(!document.documentMode||9<document.documentMode));function Hv(){os&&(os.detachEvent("onpropertychange",yw),Es=os=null)}function yw(e){if(e.propertyName==="value"&&bc(Es))if(e=vw(Es,e,pp(e)),Oi)Ec(e);else{Oi=!0;try{rp(BC,e)}finally{Oi=!1,op()}}}function YC(e,t,n){e==="focus"?(Hv(),os=t,Es=n,os.attachEvent("onpropertychange",yw)):e==="blur"&&Hv()}function GC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bc(Es)}function qC(e,t){if(e==="click")return bc(t)}function XC(e,t){if(e==="input"||e==="change")return bc(t)}var QC={eventTypes:gw,_isInputEventSupported:qd,extractEvents:function(e,t,n,r){var i=t?Yi(t):window,o=i.nodeName&&i.nodeName.toLowerCase();if(o==="select"||o==="input"&&i.type==="file")var a=KC;else if(mw(i))if(qd)a=XC;else{a=GC;var l=YC}else(o=i.nodeName)&&o.toLowerCase()==="input"&&(i.type==="checkbox"||i.type==="radio")&&(a=qC);if(a&&(a=a(e,t)))return vw(a,n,r);l&&l(e,i,t),e==="blur"&&(e=i._wrapperState)&&e.controlled&&i.type==="number"&&Dd(i,"number",i.value)}},Gs=en.extend({view:null,detail:null}),JC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=JC[e])?!!t[e]:!1}function Ip(){return ZC}var Bv=0,Kv=0,Yv=!1,Gv=!1,qs=Gs.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Ip,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=Bv;return Bv=e.screenX,Yv?e.type==="mousemove"?e.screenX-t:0:(Yv=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Kv;return Kv=e.screenY,Gv?e.type==="mousemove"?e.screenY-t:0:(Gv=!0,0)}}),_w=qs.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),ja={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},eA={eventTypes:ja,extractEvents:function(e,t,n,r,i){var o=e==="mouseover"||e==="pointerover",a=e==="mouseout"||e==="pointerout";if(o&&!(i&32)&&(n.relatedTarget||n.fromElement)||!a&&!o)return null;if(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,a){if(a=t,t=(t=n.relatedTarget||n.toElement)?Ks(t):null,t!==null){var l=ao(t);(t!==l||t.tag!==5&&t.tag!==6)&&(t=null)}}else a=null;if(a===t)return null;if(e==="mouseout"||e==="mouseover")var u=qs,d=ja.mouseLeave,p=ja.mouseEnter,m="mouse";else(e==="pointerout"||e==="pointerover")&&(u=_w,d=ja.pointerLeave,p=ja.pointerEnter,m="pointer");if(e=a==null?o:Yi(a),o=t==null?o:Yi(t),d=u.getPooled(d,a,n,r),d.type=m+"leave",d.target=e,d.relatedTarget=o,n=u.getPooled(p,t,n,r),n.type=m+"enter",n.target=o,n.relatedTarget=e,r=a,m=t,r&&m)e:{for(u=r,p=m,a=0,e=u;e;e=nr(e))a++;for(e=0,t=p;t;t=nr(t))e++;for(;0<a-e;)u=nr(u),a--;for(;0<e-a;)p=nr(p),e--;for(;a--;){if(u===p||u===p.alternate)break e;u=nr(u),p=nr(p)}u=null}else u=null;for(p=u,u=[];r&&r!==p&&(a=r.alternate,!(a!==null&&a===p));)u.push(r),r=nr(r);for(r=[];m&&m!==p&&(a=m.alternate,!(a!==null&&a===p));)r.push(m),m=nr(m);for(m=0;m<u.length;m++)Gd(u[m],"bubbled",d);for(m=r.length;0<m--;)Gd(r[m],"captured",n);return i&64?[d,n]:[d]}};function tA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gi=typeof Object.is=="function"?Object.is:tA,nA=Object.prototype.hasOwnProperty;function ws(e,t){if(Gi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!nA.call(t,n[r])||!Gi(e[n[r]],t[n[r]]))return!1;return!0}var rA=oi&&"documentMode"in document&&11>=document.documentMode,Ew={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Ro=null,Xd=null,as=null,Qd=!1;function qv(e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;return Qd||Ro==null||Ro!==Bd(n)?null:(n=Ro,"selectionStart"in n&&Kd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),as&&ws(as,n)?null:(as=n,e=en.getPooled(Ew.select,Xd,e,t),e.type="select",e.target=Ro,ta(e),e))}var iA={eventTypes:Ew,extractEvents:function(e,t,n,r,i,o){if(i=o||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(o=!i)){e:{i=dp(i),o=np.onSelect;for(var a=0;a<o.length;a++)if(!i.has(o[a])){i=!1;break e}i=!0}o=!i}if(o)return null;switch(i=t?Yi(t):window,e){case"focus":(mw(i)||i.contentEditable==="true")&&(Ro=i,Xd=t,as=null);break;case"blur":as=Xd=Ro=null;break;case"mousedown":Qd=!0;break;case"contextmenu":case"mouseup":case"dragend":return Qd=!1,qv(n,r);case"selectionchange":if(rA)break;case"keydown":case"keyup":return qv(n,r)}return null}},oA=en.extend({animationName:null,elapsedTime:null,pseudoElement:null}),aA=en.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sA=Gs.extend({relatedTarget:null});function vu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}var lA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cA=Gs.extend({key:function(e){if(e.key){var t=lA[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uA[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Ip,charCode:function(e){return e.type==="keypress"?vu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fA=qs.extend({dataTransfer:null}),dA=Gs.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Ip}),hA=en.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),pA=qs.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),mA={eventTypes:tw,extractEvents:function(e,t,n,r){var i=nw.get(e);if(!i)return null;switch(e){case"keypress":if(vu(n)===0)return null;case"keydown":case"keyup":e=cA;break;case"blur":case"focus":e=sA;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=fA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=dA;break;case zE:case WE:case HE:e=oA;break;case BE:e=hA;break;case"scroll":e=Gs;break;case"wheel":e=pA;break;case"copy":case"cut":case"paste":e=aA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=_w;break;default:e=en}return t=e.getPooled(i,t,n,r),ta(t),t}};if(Ru)throw Error(U(101));Ru=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));bE();var gA=Ys;tp=bp;EE=gA;wE=Yi;TE({SimpleEventPlugin:mA,EnterLeaveEventPlugin:eA,ChangeEventPlugin:QC,SelectEventPlugin:iA,BeforeInputEventPlugin:WC});var Jd=[],Lo=-1;function $e(e){0>Lo||(e.current=Jd[Lo],Jd[Lo]=null,Lo--)}function Je(e,t){Lo++,Jd[Lo]=e.current,e.current=t}var Xr={},It={current:Xr},Mt={current:!1},qi=Xr;function na(e,t){var n=e.type.contextTypes;if(!n)return Xr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $t(e){return e=e.childContextTypes,e!=null}function Uu(){$e(Mt),$e(It)}function Xv(e,t,n){if(It.current!==Xr)throw Error(U(168));Je(It,t),Je(Mt,n)}function ww(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,ur(t)||"Unknown",i));return xt({},n,{},r)}function yu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xr,qi=It.current,Je(It,e),Je(Mt,Mt.current),!0}function Qv(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=ww(e,t,qi),r.__reactInternalMemoizedMergedChildContext=e,$e(Mt),$e(It),Je(It,e)):$e(Mt),Je(Mt,n)}var vA=pt.unstable_runWithPriority,kp=pt.unstable_scheduleCallback,bw=pt.unstable_cancelCallback,Jv=pt.unstable_requestPaint,Zd=pt.unstable_now,yA=pt.unstable_getCurrentPriorityLevel,Tc=pt.unstable_ImmediatePriority,Tw=pt.unstable_UserBlockingPriority,Sw=pt.unstable_NormalPriority,Iw=pt.unstable_LowPriority,kw=pt.unstable_IdlePriority,Cw={},_A=pt.unstable_shouldYield,EA=Jv!==void 0?Jv:function(){},rr=null,_u=null,td=!1,Zv=Zd(),hn=1e4>Zv?Zd:function(){return Zd()-Zv};function Sc(){switch(yA()){case Tc:return 99;case Tw:return 98;case Sw:return 97;case Iw:return 96;case kw:return 95;default:throw Error(U(332))}}function Aw(e){switch(e){case 99:return Tc;case 98:return Tw;case 97:return Sw;case 96:return Iw;case 95:return kw;default:throw Error(U(332))}}function Qr(e,t){return e=Aw(e),vA(e,t)}function Ow(e,t,n){return e=Aw(e),kp(e,t,n)}function ey(e){return rr===null?(rr=[e],_u=kp(Tc,Pw)):rr.push(e),Cw}function Xn(){if(_u!==null){var e=_u;_u=null,bw(e)}Pw()}function Pw(){if(!td&&rr!==null){td=!0;var e=0;try{var t=rr;Qr(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),rr=null}catch(n){throw rr!==null&&(rr=rr.slice(e+1)),kp(Tc,Xn),n}finally{td=!1}}}function Eu(e,t,n){return n/=10,1073741821-(((1073741821-e+t/10)/n|0)+1)*n}function Sn(e,t){if(e&&e.defaultProps){t=xt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}var ju={current:null},Vu=null,Do=null,zu=null;function Cp(){zu=Do=Vu=null}function Ap(e){var t=ju.current;$e(ju),e.type._context._currentValue=t}function Nw(e,t){for(;e!==null;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t);else if(n!==null&&n.childExpirationTime<t)n.childExpirationTime=t;else break;e=e.return}}function Bo(e,t){Vu=e,zu=Do=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.expirationTime>=t&&(Vn=!0),e.firstContext=null)}function mn(e,t){if(zu!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(zu=e,t=1073741823),t={context:e,observedBits:t,next:null},Do===null){if(Vu===null)throw Error(U(308));Do=t,Vu.dependencies={expirationTime:0,firstContext:t,responders:null}}else Do=Do.next=t;return e._currentValue}var xr=!1;function Op(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function Pp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function Wr(e,t){return e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null},e.next=e}function Hr(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function ty(e,t){var n=e.alternate;n!==null&&Pp(n,e),e=e.updateQueue,n=e.baseQueue,n===null?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function bs(e,t,n,r){var i=e.updateQueue;xr=!1;var o=i.baseQueue,a=i.shared.pending;if(a!==null){if(o!==null){var l=o.next;o.next=a.next,a.next=l}o=a,i.shared.pending=null,l=e.alternate,l!==null&&(l=l.updateQueue,l!==null&&(l.baseQueue=a))}if(o!==null){l=o.next;var u=i.baseState,d=0,p=null,m=null,w=null;if(l!==null){var S=l;do{if(a=S.expirationTime,a<r){var O={expirationTime:S.expirationTime,suspenseConfig:S.suspenseConfig,tag:S.tag,payload:S.payload,callback:S.callback,next:null};w===null?(m=w=O,p=u):w=w.next=O,a>d&&(d=a)}else{w!==null&&(w=w.next={expirationTime:1073741823,suspenseConfig:S.suspenseConfig,tag:S.tag,payload:S.payload,callback:S.callback,next:null}),sb(a,S.suspenseConfig);e:{var A=e,g=S;switch(a=t,O=n,g.tag){case 1:if(A=g.payload,typeof A=="function"){u=A.call(O,u,a);break e}u=A;break e;case 3:A.effectTag=A.effectTag&-4097|64;case 0:if(A=g.payload,a=typeof A=="function"?A.call(O,u,a):A,a==null)break e;u=xt({},u,a);break e;case 2:xr=!0}}S.callback!==null&&(e.effectTag|=32,a=i.effects,a===null?i.effects=[S]:a.push(S))}if(S=S.next,S===null||S===l){if(a=i.shared.pending,a===null)break;S=o.next=a.next,a.next=l,i.baseQueue=o=a,i.shared.pending=null}}while(!0)}w===null?p=u:w.next=m,i.baseState=p,i.baseQueue=w,Oc(d),e.expirationTime=d,e.memoizedState=u}}function ny(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=i,i=n,typeof r!="function")throw Error(U(191,r));r.call(i)}}}var ss=Cn.ReactCurrentBatchConfig,xw=new yc.Component().refs;function Wu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xt({},t,n),e.memoizedState=n,e.expirationTime===0&&(e.updateQueue.baseState=n)}var Ic={isMounted:function(e){return(e=e._reactInternalFiber)?ao(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=Yn(),i=ss.suspense;r=Vi(r,e,i),i=Wr(r,i),i.payload=t,n!=null&&(i.callback=n),Hr(e,i),Kr(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=Yn(),i=ss.suspense;r=Vi(r,e,i),i=Wr(r,i),i.tag=1,i.payload=t,n!=null&&(i.callback=n),Hr(e,i),Kr(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=Yn(),r=ss.suspense;n=Vi(n,e,r),r=Wr(n,r),r.tag=2,t!=null&&(r.callback=t),Hr(e,r),Kr(e,n)}};function ry(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ws(n,r)||!ws(i,o):!0}function Rw(e,t,n){var r=!1,i=Xr,o=t.contextType;return typeof o=="object"&&o!==null?o=mn(o):(i=$t(t)?qi:It.current,r=t.contextTypes,o=(r=r!=null)?na(e,i):Xr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ic,e.stateNode=t,t._reactInternalFiber=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function iy(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ic.enqueueReplaceState(t,t.state,null)}function eh(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=xw,Op(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=mn(o):(o=$t(t)?qi:It.current,i.context=na(e,o)),bs(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Wu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ic.enqueueReplaceState(i,i.state,null),bs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.effectTag|=4)}var Gl=Array.isArray;function Va(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=r.refs;a===xw&&(a=r.refs={}),o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function ql(e,t){if(e.type!=="textarea")throw Error(U(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Lw(e){function t(g,v){if(e){var E=g.lastEffect;E!==null?(E.nextEffect=v,g.lastEffect=v):g.firstEffect=g.lastEffect=v,v.nextEffect=null,v.effectTag=8}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(g,v){return g=Xi(g,v),g.index=0,g.sibling=null,g}function o(g,v,E){return g.index=E,e?(E=g.alternate,E!==null?(E=E.index,E<v?(g.effectTag=2,v):E):(g.effectTag=2,v)):v}function a(g){return e&&g.alternate===null&&(g.effectTag=2),g}function l(g,v,E,I){return v===null||v.tag!==6?(v=sd(E,g.mode,I),v.return=g,v):(v=i(v,E),v.return=g,v)}function u(g,v,E,I){return v!==null&&v.elementType===E.type?(I=i(v,E.props),I.ref=Va(g,v,E),I.return=g,I):(I=Su(E.type,E.key,E.props,null,g.mode,I),I.ref=Va(g,v,E),I.return=g,I)}function d(g,v,E,I){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=ld(E,g.mode,I),v.return=g,v):(v=i(v,E.children||[]),v.return=g,v)}function p(g,v,E,I,_){return v===null||v.tag!==7?(v=$r(E,g.mode,I,_),v.return=g,v):(v=i(v,E),v.return=g,v)}function m(g,v,E){if(typeof v=="string"||typeof v=="number")return v=sd(""+v,g.mode,E),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Hl:return E=Su(v.type,v.key,v.props,null,g.mode,E),E.ref=Va(g,null,v),E.return=g,E;case Po:return v=ld(v,g.mode,E),v.return=g,v}if(Gl(v)||Da(v))return v=$r(v,g.mode,E,null),v.return=g,v;ql(g,v)}return null}function w(g,v,E,I){var _=v!==null?v.key:null;if(typeof E=="string"||typeof E=="number")return _!==null?null:l(g,v,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Hl:return E.key===_?E.type===Ai?p(g,v,E.props.children,I,_):u(g,v,E,I):null;case Po:return E.key===_?d(g,v,E,I):null}if(Gl(E)||Da(E))return _!==null?null:p(g,v,E,I,null);ql(g,E)}return null}function S(g,v,E,I,_){if(typeof I=="string"||typeof I=="number")return g=g.get(E)||null,l(v,g,""+I,_);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Hl:return g=g.get(I.key===null?E:I.key)||null,I.type===Ai?p(v,g,I.props.children,_,I.key):u(v,g,I,_);case Po:return g=g.get(I.key===null?E:I.key)||null,d(v,g,I,_)}if(Gl(I)||Da(I))return g=g.get(E)||null,p(v,g,I,_,null);ql(v,I)}return null}function O(g,v,E,I){for(var _=null,x=null,M=v,L=v=0,B=null;M!==null&&L<E.length;L++){M.index>L?(B=M,M=null):B=M.sibling;var W=w(g,M,E[L],I);if(W===null){M===null&&(M=B);break}e&&M&&W.alternate===null&&t(g,M),v=o(W,v,L),x===null?_=W:x.sibling=W,x=W,M=B}if(L===E.length)return n(g,M),_;if(M===null){for(;L<E.length;L++)M=m(g,E[L],I),M!==null&&(v=o(M,v,L),x===null?_=M:x.sibling=M,x=M);return _}for(M=r(g,M);L<E.length;L++)B=S(M,g,L,E[L],I),B!==null&&(e&&B.alternate!==null&&M.delete(B.key===null?L:B.key),v=o(B,v,L),x===null?_=B:x.sibling=B,x=B);return e&&M.forEach(function(ve){return t(g,ve)}),_}function A(g,v,E,I){var _=Da(E);if(typeof _!="function")throw Error(U(150));if(E=_.call(E),E==null)throw Error(U(151));for(var x=_=null,M=v,L=v=0,B=null,W=E.next();M!==null&&!W.done;L++,W=E.next()){M.index>L?(B=M,M=null):B=M.sibling;var ve=w(g,M,W.value,I);if(ve===null){M===null&&(M=B);break}e&&M&&ve.alternate===null&&t(g,M),v=o(ve,v,L),x===null?_=ve:x.sibling=ve,x=ve,M=B}if(W.done)return n(g,M),_;if(M===null){for(;!W.done;L++,W=E.next())W=m(g,W.value,I),W!==null&&(v=o(W,v,L),x===null?_=W:x.sibling=W,x=W);return _}for(M=r(g,M);!W.done;L++,W=E.next())W=S(M,g,L,W.value,I),W!==null&&(e&&W.alternate!==null&&M.delete(W.key===null?L:W.key),v=o(W,v,L),x===null?_=W:x.sibling=W,x=W);return e&&M.forEach(function(ge){return t(g,ge)}),_}return function(g,v,E,I){var _=typeof E=="object"&&E!==null&&E.type===Ai&&E.key===null;_&&(E=E.props.children);var x=typeof E=="object"&&E!==null;if(x)switch(E.$$typeof){case Hl:e:{for(x=E.key,_=v;_!==null;){if(_.key===x){switch(_.tag){case 7:if(E.type===Ai){n(g,_.sibling),v=i(_,E.props.children),v.return=g,g=v;break e}break;default:if(_.elementType===E.type){n(g,_.sibling),v=i(_,E.props),v.ref=Va(g,_,E),v.return=g,g=v;break e}}n(g,_);break}else t(g,_);_=_.sibling}E.type===Ai?(v=$r(E.props.children,g.mode,I,E.key),v.return=g,g=v):(I=Su(E.type,E.key,E.props,null,g.mode,I),I.ref=Va(g,v,E),I.return=g,g=I)}return a(g);case Po:e:{for(_=E.key;v!==null;){if(v.key===_)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(g,v.sibling),v=i(v,E.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=ld(E,g.mode,I),v.return=g,g=v}return a(g)}if(typeof E=="string"||typeof E=="number")return E=""+E,v!==null&&v.tag===6?(n(g,v.sibling),v=i(v,E),v.return=g,g=v):(n(g,v),v=sd(E,g.mode,I),v.return=g,g=v),a(g);if(Gl(E))return O(g,v,E,I);if(Da(E))return A(g,v,E,I);if(x&&ql(g,E),typeof E>"u"&&!_)switch(g.tag){case 1:case 0:throw g=g.type,Error(U(152,g.displayName||g.name||"Component"))}return n(g,v)}}var ra=Lw(!0),Np=Lw(!1),Xs={},Kn={current:Xs},Ts={current:Xs},Ss={current:Xs};function Pi(e){if(e===Xs)throw Error(U(174));return e}function th(e,t){switch(Je(Ss,t),Je(Ts,e),Je(Kn,Xs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fd(t,e)}$e(Kn),Je(Kn,t)}function ia(){$e(Kn),$e(Ts),$e(Ss)}function oy(e){Pi(Ss.current);var t=Pi(Kn.current),n=Fd(t,e.type);t!==n&&(Je(Ts,e),Je(Kn,n))}function xp(e){Ts.current===e&&($e(Kn),$e(Ts))}var We={current:0};function Hu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===_p||n.data===Ep))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.effectTag&64)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Rp(e,t){return{responder:e,props:t}}var wu=Cn.ReactCurrentDispatcher,pn=Cn.ReactCurrentBatchConfig,Dr=0,nt=null,bt=null,Tt=null,Bu=!1;function Gt(){throw Error(U(321))}function Lp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gi(e[n],t[n]))return!1;return!0}function Dp(e,t,n,r,i,o){if(Dr=o,nt=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,wu.current=e===null||e.memoizedState===null?wA:bA,e=n(r,i),t.expirationTime===Dr){o=0;do{if(t.expirationTime=0,!(25>o))throw Error(U(301));o+=1,Tt=bt=null,t.updateQueue=null,wu.current=TA,e=n(r,i)}while(t.expirationTime===Dr)}if(wu.current=Gu,t=bt!==null&&bt.next!==null,Dr=0,Tt=bt=nt=null,Bu=!1,t)throw Error(U(300));return e}function Ko(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?nt.memoizedState=Tt=e:Tt=Tt.next=e,Tt}function ca(){if(bt===null){var e=nt.alternate;e=e!==null?e.memoizedState:null}else e=bt.next;var t=Tt===null?nt.memoizedState:Tt.next;if(t!==null)Tt=t,bt=e;else{if(e===null)throw Error(U(310));bt=e,e={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Tt===null?nt.memoizedState=Tt=e:Tt=Tt.next=e}return Tt}function Fi(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=ca(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=bt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var l=a=o=null,u=i;do{var d=u.expirationTime;if(d<Dr){var p={expirationTime:u.expirationTime,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,d>nt.expirationTime&&(nt.expirationTime=d,Oc(d))}else l!==null&&(l=l.next={expirationTime:1073741823,suspenseConfig:u.suspenseConfig,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),sb(d,u.suspenseConfig),r=u.eagerReducer===e?u.eagerState:e(r,u.action);u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=a,Gi(r,t.memoizedState)||(Vn=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Ql(e){var t=ca(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Gi(o,t.memoizedState)||(Vn=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function nd(e){var t=Ko();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},e=e.dispatch=jw.bind(null,nt,e),[t.memoizedState,e]}function nh(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=nt.updateQueue,t===null?(t={lastEffect:null},nt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dw(){return ca().memoizedState}function rh(e,t,n,r){var i=Ko();nt.effectTag|=e,i.memoizedState=nh(1|t,n,void 0,r===void 0?null:r)}function Mp(e,t,n,r){var i=ca();r=r===void 0?null:r;var o=void 0;if(bt!==null){var a=bt.memoizedState;if(o=a.destroy,r!==null&&Lp(r,a.deps)){nh(t,n,o,r);return}}nt.effectTag|=e,i.memoizedState=nh(1|t,n,o,r)}function ay(e,t){return rh(516,4,e,t)}function Ku(e,t){return Mp(516,4,e,t)}function Mw(e,t){return Mp(4,2,e,t)}function $w(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fw(e,t,n){return n=n!=null?n.concat([e]):null,Mp(4,2,$w.bind(null,t,e),n)}function $p(){}function sy(e,t){return Ko().memoizedState=[e,t===void 0?null:t],e}function Yu(e,t){var n=ca();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uw(e,t){var n=ca();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Lp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fp(e,t,n){var r=Sc();Qr(98>r?98:r,function(){e(!0)}),Qr(97<r?97:r,function(){var i=pn.suspense;pn.suspense=t===void 0?null:t;try{e(!1),n()}finally{pn.suspense=i}})}function jw(e,t,n){var r=Yn(),i=ss.suspense;r=Vi(r,e,i),i={expirationTime:r,suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var o=t.pending;if(o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i,o=e.alternate,e===nt||o!==null&&o===nt)Bu=!0,i.expirationTime=Dr,nt.expirationTime=Dr;else{if(e.expirationTime===0&&(o===null||o.expirationTime===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.eagerReducer=o,i.eagerState=l,Gi(l,a))return}catch{}finally{}Kr(e,r)}}var Gu={readContext:mn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useResponder:Gt,useDeferredValue:Gt,useTransition:Gt},wA={readContext:mn,useCallback:sy,useContext:mn,useEffect:ay,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,rh(4,2,$w.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rh(4,2,e,t)},useMemo:function(e,t){var n=Ko();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ko();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=jw.bind(null,nt,e),[r.memoizedState,e]},useRef:function(e){var t=Ko();return e={current:e},t.memoizedState=e},useState:nd,useDebugValue:$p,useResponder:Rp,useDeferredValue:function(e,t){var n=nd(e),r=n[0],i=n[1];return ay(function(){var o=pn.suspense;pn.suspense=t===void 0?null:t;try{i(e)}finally{pn.suspense=o}},[e,t]),r},useTransition:function(e){var t=nd(!1),n=t[0];return t=t[1],[sy(Fp.bind(null,t,e),[t,e]),n]}},bA={readContext:mn,useCallback:Yu,useContext:mn,useEffect:Ku,useImperativeHandle:Fw,useLayoutEffect:Mw,useMemo:Uw,useReducer:Xl,useRef:Dw,useState:function(){return Xl(Fi)},useDebugValue:$p,useResponder:Rp,useDeferredValue:function(e,t){var n=Xl(Fi),r=n[0],i=n[1];return Ku(function(){var o=pn.suspense;pn.suspense=t===void 0?null:t;try{i(e)}finally{pn.suspense=o}},[e,t]),r},useTransition:function(e){var t=Xl(Fi),n=t[0];return t=t[1],[Yu(Fp.bind(null,t,e),[t,e]),n]}},TA={readContext:mn,useCallback:Yu,useContext:mn,useEffect:Ku,useImperativeHandle:Fw,useLayoutEffect:Mw,useMemo:Uw,useReducer:Ql,useRef:Dw,useState:function(){return Ql(Fi)},useDebugValue:$p,useResponder:Rp,useDeferredValue:function(e,t){var n=Ql(Fi),r=n[0],i=n[1];return Ku(function(){var o=pn.suspense;pn.suspense=t===void 0?null:t;try{i(e)}finally{pn.suspense=o}},[e,t]),r},useTransition:function(e){var t=Ql(Fi),n=t[0];return t=t[1],[Yu(Fp.bind(null,t,e),[t,e]),n]}},or=null,Mr=null,Ui=!1;function Vw(e,t){var n=zn(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function ly(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function ih(e){if(Ui){var t=Mr;if(t){var n=t;if(!ly(e,t)){if(t=Ho(n.nextSibling),!t||!ly(e,t)){e.effectTag=e.effectTag&-1025|2,Ui=!1,or=e;return}Vw(or,n)}or=e,Mr=Ho(t.firstChild)}else e.effectTag=e.effectTag&-1025|2,Ui=!1,or=e}}function uy(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;or=e}function Jl(e){if(e!==or)return!1;if(!Ui)return uy(e),Ui=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Yd(t,e.memoizedProps))for(t=Mr;t;)Vw(e,t),t=Ho(t.nextSibling);if(uy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===sw){if(t===0){Mr=Ho(e.nextSibling);break e}t--}else n!==aw&&n!==Ep&&n!==_p||t++}e=e.nextSibling}Mr=null}}else Mr=or?Ho(e.stateNode.nextSibling):null;return!0}function rd(){Mr=or=null,Ui=!1}var SA=Cn.ReactCurrentOwner,Vn=!1;function qt(e,t,n,r){t.child=e===null?Np(t,null,n,r):ra(t,e.child,n,r)}function cy(e,t,n,r,i){n=n.render;var o=t.ref;return Bo(t,i),r=Dp(e,t,n,r,o,i),e!==null&&!Vn?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),ar(e,t,i)):(t.effectTag|=1,qt(e,t,r,i),t.child)}function fy(e,t,n,r,i,o){if(e===null){var a=n.type;return typeof a=="function"&&!Wp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,zw(e,t,a,r,i,o)):(e=Su(n.type,null,r,null,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return a=e.child,i<o&&(i=a.memoizedProps,n=n.compare,n=n!==null?n:ws,n(i,r)&&e.ref===t.ref)?ar(e,t,o):(t.effectTag|=1,e=Xi(a,r),e.ref=t.ref,e.return=t,t.child=e)}function zw(e,t,n,r,i,o){return e!==null&&ws(e.memoizedProps,r)&&e.ref===t.ref&&(Vn=!1,i<o)?(t.expirationTime=e.expirationTime,ar(e,t,o)):oh(e,t,n,r,o)}function Ww(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.effectTag|=128)}function oh(e,t,n,r,i){var o=$t(n)?qi:It.current;return o=na(t,o),Bo(t,i),n=Dp(e,t,n,r,o,i),e!==null&&!Vn?(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),ar(e,t,i)):(t.effectTag|=1,qt(e,t,n,i),t.child)}function dy(e,t,n,r,i){if($t(n)){var o=!0;yu(t)}else o=!1;if(Bo(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),Rw(t,n,r),eh(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=mn(d):(d=$t(n)?qi:It.current,d=na(t,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&iy(t,a,r,d),xr=!1;var w=t.memoizedState;a.state=w,bs(t,r,a,i),u=t.memoizedState,l!==r||w!==u||Mt.current||xr?(typeof p=="function"&&(Wu(t,n,p,r),u=t.memoizedState),(l=xr||ry(t,n,l,r,w,u,d))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.effectTag|=4)):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(t.effectTag|=4),r=!1)}else a=t.stateNode,Pp(e,t),l=t.memoizedProps,a.props=t.type===t.elementType?l:Sn(t.type,l),u=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=mn(d):(d=$t(n)?qi:It.current,d=na(t,d)),p=n.getDerivedStateFromProps,(m=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&iy(t,a,r,d),xr=!1,u=t.memoizedState,a.state=u,bs(t,r,a,i),w=t.memoizedState,l!==r||u!==w||Mt.current||xr?(typeof p=="function"&&(Wu(t,n,p,r),w=t.memoizedState),(p=xr||ry(t,n,l,r,u,w,d))?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,d)),typeof a.componentDidUpdate=="function"&&(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.effectTag|=256)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=d,r=p):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&u===e.memoizedState||(t.effectTag|=256),r=!1);return ah(e,t,n,r,o,i)}function ah(e,t,n,r,i,o){Ww(e,t);var a=(t.effectTag&64)!==0;if(!r&&!a)return i&&Qv(t,n,!1),ar(e,t,o);r=t.stateNode,SA.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.effectTag|=1,e!==null&&a?(t.child=ra(t,e.child,null,o),t.child=ra(t,null,l,o)):qt(e,t,l,o),t.memoizedState=r.state,i&&Qv(t,n,!0),t.child}function hy(e){var t=e.stateNode;t.pendingContext?Xv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xv(e,t.context,!1),th(e,t.containerInfo)}var id={dehydrated:null,retryTime:0};function py(e,t,n){var r=t.mode,i=t.pendingProps,o=We.current,a=!1,l;if((l=(t.effectTag&64)!==0)||(l=(o&2)!==0&&(e===null||e.memoizedState!==null)),l?(a=!0,t.effectTag&=-65):e!==null&&e.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(o|=1),Je(We,o&1),e===null){if(i.fallback!==void 0&&ih(t),a){if(a=i.fallback,i=$r(null,r,0,null),i.return=t,!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,i.child=e;e!==null;)e.return=i,e=e.sibling;return n=$r(a,r,n,null),n.return=t,i.sibling=n,t.memoizedState=id,t.child=i,n}return r=i.children,t.memoizedState=null,t.child=Np(t,null,r,n)}if(e.memoizedState!==null){if(e=e.child,r=e.sibling,a){if(i=i.fallback,n=Xi(e,e.pendingProps),n.return=t,!(t.mode&2)&&(a=t.memoizedState!==null?t.child.child:t.child,a!==e.child))for(n.child=a;a!==null;)a.return=n,a=a.sibling;return r=Xi(r,i),r.return=t,n.sibling=r,n.childExpirationTime=0,t.memoizedState=id,t.child=n,r}return n=ra(t,e.child,i.children,n),t.memoizedState=null,t.child=n}if(e=e.child,a){if(a=i.fallback,i=$r(null,r,0,null),i.return=t,i.child=e,e!==null&&(e.return=i),!(t.mode&2))for(e=t.memoizedState!==null?t.child.child:t.child,i.child=e;e!==null;)e.return=i,e=e.sibling;return n=$r(a,r,n,null),n.return=t,i.sibling=n,n.effectTag|=2,i.childExpirationTime=0,t.memoizedState=id,t.child=i,n}return t.memoizedState=null,t.child=ra(t,e,i.children,n)}function my(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t),Nw(e.return,t)}function od(e,t,n,r,i,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailExpiration=0,a.tailMode=i,a.lastEffect=o)}function gy(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(qt(e,t,r.children,n),r=We.current,r&2)r=r&1|2,t.effectTag|=64;else{if(e!==null&&e.effectTag&64)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&my(e,n);else if(e.tag===19)my(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Je(We,r),!(t.mode&2))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Hu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),od(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Hu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}od(t,!0,n,null,o,t.lastEffect);break;case"together":od(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function ar(e,t,n){e!==null&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(r!==0&&Oc(r),t.childExpirationTime<n)return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=Xi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}var Hw,sh,Bw,Kw;Hw=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sh=function(){};Bw=function(e,t,n,r,i){var o=e.memoizedProps;if(o!==r){var a=t.stateNode;switch(Pi(Kn.current),e=null,n){case"input":o=Rd(a,o),r=Rd(a,r),e=[];break;case"option":o=Md(a,o),r=Md(a,r),e=[];break;case"select":o=xt({},o,{value:void 0}),r=xt({},r,{value:void 0}),e=[];break;case"textarea":o=$d(a,o),r=$d(a,r),e=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(a.onclick=Mu)}Wd(n,r);var l,u;n=null;for(l in o)if(!r.hasOwnProperty(l)&&o.hasOwnProperty(l)&&o[l]!=null)if(l==="style")for(u in a=o[l],a)a.hasOwnProperty(u)&&(n||(n={}),n[u]="");else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Zo.hasOwnProperty(l)?e||(e=[]):(e=e||[]).push(l,null));for(l in r){var d=r[l];if(a=o!=null?o[l]:void 0,r.hasOwnProperty(l)&&d!==a&&(d!=null||a!=null))if(l==="style")if(a){for(u in a)!a.hasOwnProperty(u)||d&&d.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in d)d.hasOwnProperty(u)&&a[u]!==d[u]&&(n||(n={}),n[u]=d[u])}else n||(e||(e=[]),e.push(l,n)),n=d;else l==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(e=e||[]).push(l,d)):l==="children"?a===d||typeof d!="string"&&typeof d!="number"||(e=e||[]).push(l,""+d):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(l)?(d!=null&&tr(i,l),e||a===d||(e=[])):(e=e||[]).push(l,d))}n&&(e=e||[]).push("style",n),i=e,(t.updateQueue=i)&&(t.effectTag|=4)}};Kw=function(e,t,n,r){n!==r&&(t.effectTag|=4)};function Zl(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function IA(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return $t(t.type)&&Uu(),null;case 3:return ia(),$e(Mt),$e(It),n=t.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),e!==null&&e.child!==null||!Jl(t)||(t.effectTag|=4),sh(t),null;case 5:xp(t),n=Pi(Ss.current);var i=t.type;if(e!==null&&t.stateNode!=null)Bw(e,t,i,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(t.stateNode===null)throw Error(U(166));return null}if(e=Pi(Kn.current),Jl(t)){r=t.stateNode,i=t.type;var o=t.memoizedProps;switch(r[Rr]=t,r[$u]=o,i){case"iframe":case"object":case"embed":Ue("load",r);break;case"video":case"audio":for(e=0;e<Xa.length;e++)Ue(Xa[e],r);break;case"source":Ue("error",r);break;case"img":case"image":case"link":Ue("error",r),Ue("load",r);break;case"form":Ue("reset",r),Ue("submit",r);break;case"details":Ue("toggle",r);break;case"input":Cv(r,o),Ue("invalid",r),tr(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ue("invalid",r),tr(n,"onChange");break;case"textarea":Ov(r,o),Ue("invalid",r),tr(n,"onChange")}Wd(i,o),e=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(e=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(e=["children",""+l]):Zo.hasOwnProperty(a)&&l!=null&&tr(n,a)}switch(i){case"input":Bl(r),Av(r,o,!0);break;case"textarea":Bl(r),Pv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Mu)}n=e,t.updateQueue=n,n!==null&&(t.effectTag|=4)}else{switch(a=n.nodeType===9?n:n.ownerDocument,e===Mv&&(e=UE(i)),e===Mv?i==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(i,{is:r.is}):(e=a.createElement(i),i==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,i),e[Rr]=t,e[$u]=r,Hw(e,t,!1,!1),t.stateNode=e,a=Hd(i,r),i){case"iframe":case"object":case"embed":Ue("load",e),l=r;break;case"video":case"audio":for(l=0;l<Xa.length;l++)Ue(Xa[l],e);l=r;break;case"source":Ue("error",e),l=r;break;case"img":case"image":case"link":Ue("error",e),Ue("load",e),l=r;break;case"form":Ue("reset",e),Ue("submit",e),l=r;break;case"details":Ue("toggle",e),l=r;break;case"input":Cv(e,r),l=Rd(e,r),Ue("invalid",e),tr(n,"onChange");break;case"option":l=Md(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=xt({},r,{value:void 0}),Ue("invalid",e),tr(n,"onChange");break;case"textarea":Ov(e,r),l=$d(e,r),Ue("invalid",e),tr(n,"onChange");break;default:l=r}Wd(i,l);var u=l;for(o in u)if(u.hasOwnProperty(o)){var d=u[o];o==="style"?iw(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&jE(e,d)):o==="children"?typeof d=="string"?(i!=="textarea"||d!=="")&&vs(e,d):typeof d=="number"&&vs(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Zo.hasOwnProperty(o)?d!=null&&tr(n,o):d!=null&&lp(e,o,d,a))}switch(i){case"input":Bl(e),Av(e,r,!1);break;case"textarea":Bl(e),Pv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qr(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?Wo(e,!!r.multiple,n,!1):r.defaultValue!=null&&Wo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Mu)}lw(i,r)&&(t.effectTag|=4)}t.ref!==null&&(t.effectTag|=128)}return null;case 6:if(e&&t.stateNode!=null)Kw(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));n=Pi(Ss.current),Pi(Kn.current),Jl(t)?(n=t.stateNode,r=t.memoizedProps,n[Rr]=t,n.nodeValue!==r&&(t.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[Rr]=t,t.stateNode=n)}return null;case 13:return $e(We),r=t.memoizedState,t.effectTag&64?(t.expirationTime=n,t):(n=r!==null,r=!1,e===null?t.memoizedProps.fallback!==void 0&&Jl(t):(i=e.memoizedState,r=i!==null,n||i===null||(i=e.child.sibling,i!==null&&(o=t.firstEffect,o!==null?(t.firstEffect=i,i.nextEffect=o):(t.firstEffect=t.lastEffect=i,i.nextEffect=null),i.effectTag=8))),n&&!r&&t.mode&2&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||We.current&1?at===ji&&(at=Qu):((at===ji||at===Qu)&&(at=kc),ks!==0&&Jt!==null&&(Ri(Jt,Ut),db(Jt,ks)))),(n||r)&&(t.effectTag|=4),null);case 4:return ia(),sh(t),null;case 10:return Ap(t),null;case 17:return $t(t.type)&&Uu(),null;case 19:if($e(We),r=t.memoizedState,r===null)return null;if(i=(t.effectTag&64)!==0,o=r.rendering,o===null){if(i)Zl(r,!1);else if(at!==ji||e!==null&&e.effectTag&64)for(o=t.child;o!==null;){if(e=Hu(o),e!==null){for(t.effectTag|=64,Zl(r,!1),i=e.updateQueue,i!==null&&(t.updateQueue=i,t.effectTag|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;r!==null;)i=r,o=n,i.effectTag&=2,i.nextEffect=null,i.firstEffect=null,i.lastEffect=null,e=i.alternate,e===null?(i.childExpirationTime=0,i.expirationTime=o,i.child=null,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null):(i.childExpirationTime=e.childExpirationTime,i.expirationTime=e.expirationTime,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,o=e.dependencies,i.dependencies=o===null?null:{expirationTime:o.expirationTime,firstContext:o.firstContext,responders:o.responders}),r=r.sibling;return Je(We,We.current&1|2),t.child}o=o.sibling}}else{if(!i)if(e=Hu(o),e!==null){if(t.effectTag|=64,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.effectTag|=4),Zl(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*hn()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,i=!0,Zl(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(o.sibling=t.child,t.child=o):(n=r.last,n!==null?n.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=hn()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=hn(),n.sibling=null,t=We.current,Je(We,i?t&1|2:t&1),n):null}throw Error(U(156,t.tag))}function kA(e){switch(e.tag){case 1:$t(e.type)&&Uu();var t=e.effectTag;return t&4096?(e.effectTag=t&-4097|64,e):null;case 3:if(ia(),$e(Mt),$e(It),t=e.effectTag,t&64)throw Error(U(285));return e.effectTag=t&-4097|64,e;case 5:return xp(e),null;case 13:return $e(We),t=e.effectTag,t&4096?(e.effectTag=t&-4097|64,e):null;case 19:return $e(We),null;case 4:return ia(),null;case 10:return Ap(e),null;default:return null}}function Up(e,t){return{value:e,source:t,stack:fp(t)}}var CA=typeof WeakSet=="function"?WeakSet:Set;function lh(e,t){var n=t.source,r=t.stack;r===null&&n!==null&&(r=fp(n)),n!==null&&ur(n.type),t=t.value,e!==null&&e.tag===1&&ur(e.type);try{console.error(t)}catch(i){setTimeout(function(){throw i})}}function AA(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(n){zi(e,n)}}function vy(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){zi(e,n)}else t.current=null}function OA(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.effectTag&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:Sn(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(U(163))}function Yw(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==t)}}function Gw(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function PA(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:Gw(3,n);return;case 1:if(e=n.stateNode,n.effectTag&4)if(t===null)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Sn(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}t=n.updateQueue,t!==null&&ny(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}ny(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.effectTag&4&&lw(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&ew(n))));return;case 19:case 17:case 20:case 21:return}throw Error(U(163))}function yy(e,t,n){switch(typeof gh=="function"&&gh(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var r=e.next;Qr(97<n?97:n,function(){var i=r;do{var o=i.destroy;if(o!==void 0){var a=t;try{o()}catch(l){zi(a,l)}}i=i.next}while(i!==r)})}break;case 1:vy(t),n=t.stateNode,typeof n.componentWillUnmount=="function"&&AA(t,n);break;case 5:vy(t);break;case 4:Xw(e,t,n)}}function qw(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,t!==null&&qw(t)}function _y(e){return e.tag===5||e.tag===3||e.tag===4}function Ey(e){e:{for(var t=e.return;t!==null;){if(_y(t)){var n=t;break e}t=t.return}throw Error(U(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(U(161))}n.effectTag&16&&(vs(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||_y(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?uh(e,n,t):ch(e,n,t)}function uh(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mu));else if(r!==4&&(e=e.child,e!==null))for(uh(e,t,n),e=e.sibling;e!==null;)uh(e,t,n),e=e.sibling}function ch(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ch(e,t,n),e=e.sibling;e!==null;)ch(e,t,n),e=e.sibling}function Xw(e,t,n){for(var r=t,i=!1,o,a;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(U(160));switch(o=i.stateNode,i.tag){case 5:a=!1;break e;case 3:o=o.containerInfo,a=!0;break e;case 4:o=o.containerInfo,a=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var l=e,u=r,d=n,p=u;;)if(yy(l,p,d),p.child!==null&&p.tag!==4)p.child.return=p,p=p.child;else{if(p===u)break e;for(;p.sibling===null;){if(p.return===null||p.return===u)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}a?(l=o,u=r.stateNode,l.nodeType===8?l.parentNode.removeChild(u):l.removeChild(u)):o.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){o=r.stateNode.containerInfo,a=!0,r.child.return=r,r=r.child;continue}}else if(yy(e,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function ad(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:Yw(3,t);return;case 1:return;case 5:var n=t.stateNode;if(n!=null){var r=t.memoizedProps,i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[$u]=r,e==="input"&&r.type==="radio"&&r.name!=null&&ME(n,r),Hd(e,i),t=Hd(e,r),i=0;i<o.length;i+=2){var a=o[i],l=o[i+1];a==="style"?iw(n,l):a==="dangerouslySetInnerHTML"?jE(n,l):a==="children"?vs(n,l):lp(n,a,l,t)}switch(e){case"input":Ld(n,r);break;case"textarea":$E(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,e=r.value,e!=null?Wo(n,!!r.multiple,e,!1):t!==!!r.multiple&&(r.defaultValue!=null?Wo(n,!!r.multiple,r.defaultValue,!0):Wo(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(U(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:t=t.stateNode,t.hydrate&&(t.hydrate=!1,ew(t.containerInfo));return;case 12:return;case 13:if(n=t,t.memoizedState===null?r=!1:(r=!0,n=t.child,zp=hn()),n!==null)e:for(e=n;;){if(e.tag===5)o=e.stateNode,r?(o=o.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(o=e.stateNode,i=e.memoizedProps.style,i=i!=null&&i.hasOwnProperty("display")?i.display:null,o.style.display=rw("display",i));else if(e.tag===6)e.stateNode.nodeValue=r?"":e.memoizedProps;else if(e.tag===13&&e.memoizedState!==null&&e.memoizedState.dehydrated===null){o=e.child.sibling,o.return=e,e=o;continue}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}wy(t);return;case 19:wy(t);return;case 17:return}throw Error(U(163))}function wy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new CA),t.forEach(function(r){var i=jA.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}var NA=typeof WeakMap=="function"?WeakMap:Map;function Qw(e,t,n){n=Wr(n,null),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ec||(ec=!0,fh=r),lh(e,t)},n}function Jw(e,t,n){n=Wr(n,null),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return lh(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Br===null?Br=new Set([this]):Br.add(this),lh(e,t));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}var xA=Math.ceil,qu=Cn.ReactCurrentDispatcher,Zw=Cn.ReactCurrentOwner,st=0,jp=8,An=16,Gn=32,ji=0,Xu=1,eb=2,Qu=3,kc=4,Vp=5,ne=st,Jt=null,ie=null,Ut=0,at=ji,Cc=null,ir=1073741823,Is=1073741823,Ju=null,ks=0,Zu=!1,zp=0,tb=500,Q=null,ec=!1,fh=null,Br=null,tc=!1,ls=null,Ja=90,Ni=null,us=0,dh=null,bu=0;function Yn(){return(ne&(An|Gn))!==st?1073741821-(hn()/10|0):bu!==0?bu:bu=1073741821-(hn()/10|0)}function Vi(e,t,n){if(t=t.mode,!(t&2))return 1073741823;var r=Sc();if(!(t&4))return r===99?1073741823:1073741822;if((ne&An)!==st)return Ut;if(n!==null)e=Eu(e,n.timeoutMs|0||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Eu(e,150,100);break;case 97:case 96:e=Eu(e,5e3,250);break;case 95:e=2;break;default:throw Error(U(326))}return Jt!==null&&e===Ut&&--e,e}function Kr(e,t){if(50<us)throw us=0,dh=null,Error(U(185));if(e=Ac(e,t),e!==null){var n=Sc();t===1073741823?(ne&jp)!==st&&(ne&(An|Gn))===st?hh(e):(Zt(e),ne===st&&Xn()):Zt(e),(ne&4)===st||n!==98&&n!==99||(Ni===null?Ni=new Map([[e,t]]):(n=Ni.get(e),(n===void 0||n>t)&&Ni.set(e,t)))}}function Ac(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;n!==null&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(r===null&&e.tag===3)i=e.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),n!==null&&n.childExpirationTime<t&&(n.childExpirationTime=t),r.return===null&&r.tag===3){i=r.stateNode;break}r=r.return}return i!==null&&(Jt===i&&(Oc(t),at===kc&&Ri(i,Ut)),db(i,t)),i}function Tu(e){var t=e.lastExpiredTime;if(t!==0||(t=e.firstPendingTime,!fb(e,t)))return t;var n=e.lastPingedTime;return e=e.nextKnownPendingLevel,e=n>e?n:e,2>=e&&t!==e?0:e}function Zt(e){if(e.lastExpiredTime!==0)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=ey(hh.bind(null,e));else{var t=Tu(e),n=e.callbackNode;if(t===0)n!==null&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=Yn();if(t===1073741823?r=99:t===1||t===2?r=95:(r=10*(1073741821-t)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==Cw&&bw(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=t===1073741823?ey(hh.bind(null,e)):Ow(r,nb.bind(null,e),{timeout:10*(1073741821-t)-hn()}),e.callbackNode=t}}}function nb(e,t){if(bu=0,t)return t=Yn(),vh(e,t),Zt(e),null;var n=Tu(e);if(n!==0){if(t=e.callbackNode,(ne&(An|Gn))!==st)throw Error(U(327));if(fa(),e===Jt&&n===Ut||xi(e,n),ie!==null){var r=ne;ne|=An;var i=ab();do try{DA();break}catch(l){ob(e,l)}while(!0);if(Cp(),ne=r,qu.current=i,at===Xu)throw t=Cc,xi(e,n),Ri(e,n),Zt(e),t;if(ie===null)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=at,Jt=null,r){case ji:case Xu:throw Error(U(345));case eb:vh(e,2<n?2:n);break;case Qu:if(Ri(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=ph(i)),ir===1073741823&&(i=zp+tb-hn(),10<i)){if(Zu){var o=e.lastPingedTime;if(o===0||o>=n){e.lastPingedTime=n,xi(e,n);break}}if(o=Tu(e),o!==0&&o!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=ed(ki.bind(null,e),i);break}ki(e);break;case kc:if(Ri(e,n),r=e.lastSuspendedTime,n===r&&(e.nextKnownPendingLevel=ph(i)),Zu&&(i=e.lastPingedTime,i===0||i>=n)){e.lastPingedTime=n,xi(e,n);break}if(i=Tu(e),i!==0&&i!==n)break;if(r!==0&&r!==n){e.lastPingedTime=r;break}if(Is!==1073741823?r=10*(1073741821-Is)-hn():ir===1073741823?r=0:(r=10*(1073741821-ir)-5e3,i=hn(),n=10*(1073741821-n)-i,r=i-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xA(r/1960))-r,n<r&&(r=n)),10<r){e.timeoutHandle=ed(ki.bind(null,e),r);break}ki(e);break;case Vp:if(ir!==1073741823&&Ju!==null){o=ir;var a=Ju;if(r=a.busyMinDurationMs|0,0>=r?r=0:(i=a.busyDelayMs|0,o=hn()-(10*(1073741821-o)-(a.timeoutMs|0||5e3)),r=o<=i?0:i+r-o),10<r){Ri(e,n),e.timeoutHandle=ed(ki.bind(null,e),r);break}}ki(e);break;default:throw Error(U(329))}if(Zt(e),e.callbackNode===t)return nb.bind(null,e)}}return null}function hh(e){var t=e.lastExpiredTime;if(t=t!==0?t:1073741823,(ne&(An|Gn))!==st)throw Error(U(327));if(fa(),e===Jt&&t===Ut||xi(e,t),ie!==null){var n=ne;ne|=An;var r=ab();do try{LA();break}catch(i){ob(e,i)}while(!0);if(Cp(),ne=n,qu.current=r,at===Xu)throw n=Cc,xi(e,t),Ri(e,t),Zt(e),n;if(ie!==null)throw Error(U(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Jt=null,ki(e),Zt(e)}return null}function RA(){if(Ni!==null){var e=Ni;Ni=null,e.forEach(function(t,n){vh(n,t),Zt(n)}),Xn()}}function rb(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===st&&Xn()}}function ib(e,t){var n=ne;ne&=-2,ne|=jp;try{return e(t)}finally{ne=n,ne===st&&Xn()}}function xi(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xC(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uu();break;case 3:ia(),$e(Mt),$e(It);break;case 5:xp(r);break;case 4:ia();break;case 13:$e(We);break;case 19:$e(We);break;case 10:Ap(r)}n=n.return}Jt=e,ie=Xi(e.current,null),Ut=t,at=ji,Cc=null,Is=ir=1073741823,Ju=null,ks=0,Zu=!1}function ob(e,t){do{try{if(Cp(),wu.current=Gu,Bu)for(var n=nt.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(Dr=0,Tt=bt=nt=null,Bu=!1,ie===null||ie.return===null)return at=Xu,Cc=t,ie=null;e:{var i=e,o=ie.return,a=ie,l=t;if(t=Ut,a.effectTag|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if(!(a.mode&2)){var d=a.alternate;d?(a.updateQueue=d.updateQueue,a.memoizedState=d.memoizedState,a.expirationTime=d.expirationTime):(a.updateQueue=null,a.memoizedState=null)}var p=(We.current&1)!==0,m=o;do{var w;if(w=m.tag===13){var S=m.memoizedState;if(S!==null)w=S.dehydrated!==null;else{var O=m.memoizedProps;w=O.fallback===void 0?!1:O.unstable_avoidThisFallback!==!0?!0:!p}}if(w){var A=m.updateQueue;if(A===null){var g=new Set;g.add(u),m.updateQueue=g}else A.add(u);if(!(m.mode&2)){if(m.effectTag|=64,a.effectTag&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var v=Wr(1073741823,null);v.tag=2,Hr(a,v)}a.expirationTime=1073741823;break e}l=void 0,a=t;var E=i.pingCache;if(E===null?(E=i.pingCache=new NA,l=new Set,E.set(u,l)):(l=E.get(u),l===void 0&&(l=new Set,E.set(u,l))),!l.has(a)){l.add(a);var I=UA.bind(null,i,u,a);u.then(I,I)}m.effectTag|=4096,m.expirationTime=t;break e}m=m.return}while(m!==null);l=Error((ur(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+fp(a))}at!==Vp&&(at=eb),l=Up(l,a),m=o;do{switch(m.tag){case 3:u=l,m.effectTag|=4096,m.expirationTime=t;var _=Qw(m,u,t);ty(m,_);break e;case 1:u=l;var x=m.type,M=m.stateNode;if(!(m.effectTag&64)&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Br===null||!Br.has(M)))){m.effectTag|=4096,m.expirationTime=t;var L=Jw(m,u,t);ty(m,L);break e}}m=m.return}while(m!==null)}ie=ub(ie)}catch(B){t=B;continue}break}while(!0)}function ab(){var e=qu.current;return qu.current=Gu,e===null?Gu:e}function sb(e,t){e<ir&&2<e&&(ir=e),t!==null&&e<Is&&2<e&&(Is=e,Ju=t)}function Oc(e){e>ks&&(ks=e)}function LA(){for(;ie!==null;)ie=lb(ie)}function DA(){for(;ie!==null&&!_A();)ie=lb(ie)}function lb(e){var t=cb(e.alternate,e,Ut);return e.memoizedProps=e.pendingProps,t===null&&(t=ub(e)),Zw.current=null,t}function ub(e){ie=e;do{var t=ie.alternate;if(e=ie.return,ie.effectTag&2048){if(t=kA(ie),t!==null)return t.effectTag&=2047,t;e!==null&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}else{if(t=IA(t,ie,Ut),Ut===1||ie.childExpirationTime!==1){for(var n=0,r=ie.child;r!==null;){var i=r.expirationTime,o=r.childExpirationTime;i>n&&(n=i),o>n&&(n=o),r=r.sibling}ie.childExpirationTime=n}if(t!==null)return t;e!==null&&!(e.effectTag&2048)&&(e.firstEffect===null&&(e.firstEffect=ie.firstEffect),ie.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=ie.firstEffect),e.lastEffect=ie.lastEffect),1<ie.effectTag&&(e.lastEffect!==null?e.lastEffect.nextEffect=ie:e.firstEffect=ie,e.lastEffect=ie))}if(t=ie.sibling,t!==null)return t;ie=e}while(ie!==null);return at===ji&&(at=Vp),null}function ph(e){var t=e.expirationTime;return e=e.childExpirationTime,t>e?t:e}function ki(e){var t=Sc();return Qr(99,MA.bind(null,e,t)),null}function MA(e,t){do fa();while(ls!==null);if((ne&(An|Gn))!==st)throw Error(U(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(n===null)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=ph(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Jt&&(ie=Jt=null,Ut=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){var o=ne;ne|=Gn,Zw.current=null,Jf=pu;var a=Uv();if(Kd(a)){if("selectionStart"in a)var l={start:a.selectionStart,end:a.selectionEnd};else e:{l=(l=a.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{l.nodeType,p.nodeType}catch{l=null;break e}var m=0,w=-1,S=-1,O=0,A=0,g=a,v=null;t:for(;;){for(var E;g!==l||d!==0&&g.nodeType!==3||(w=m+d),g!==p||u!==0&&g.nodeType!==3||(S=m+u),g.nodeType===3&&(m+=g.nodeValue.length),(E=g.firstChild)!==null;)v=g,g=E;for(;;){if(g===a)break t;if(v===l&&++O===d&&(w=m),v===p&&++A===u&&(S=m),(E=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=E}l=w===-1||S===-1?null:{start:w,end:S}}else l=null}l=l||{start:0,end:0}}else l=null;Zf={activeElementDetached:null,focusedElem:a,selectionRange:l},pu=!1,Q=i;do try{$A()}catch(W){if(Q===null)throw Error(U(330));zi(Q,W),Q=Q.nextEffect}while(Q!==null);Q=i;do try{for(a=e,l=t;Q!==null;){var I=Q.effectTag;if(I&16&&vs(Q.stateNode,""),I&128){var _=Q.alternate;if(_!==null){var x=_.ref;x!==null&&(typeof x=="function"?x(null):x.current=null)}}switch(I&1038){case 2:Ey(Q),Q.effectTag&=-3;break;case 6:Ey(Q),Q.effectTag&=-3,ad(Q.alternate,Q);break;case 1024:Q.effectTag&=-1025;break;case 1028:Q.effectTag&=-1025,ad(Q.alternate,Q);break;case 4:ad(Q.alternate,Q);break;case 8:d=Q,Xw(a,d,l),qw(d)}Q=Q.nextEffect}}catch(W){if(Q===null)throw Error(U(330));zi(Q,W),Q=Q.nextEffect}while(Q!==null);if(x=Zf,_=Uv(),I=x.focusedElem,l=x.selectionRange,_!==I&&I&&I.ownerDocument&&ow(I.ownerDocument.documentElement,I)){for(l!==null&&Kd(I)&&(_=l.start,x=l.end,x===void 0&&(x=_),"selectionStart"in I?(I.selectionStart=_,I.selectionEnd=Math.min(x,I.value.length)):(x=(_=I.ownerDocument||document)&&_.defaultView||window,x.getSelection&&(x=x.getSelection(),d=I.textContent.length,a=Math.min(l.start,d),l=l.end===void 0?a:Math.min(l.end,d),!x.extend&&a>l&&(d=l,l=a,a=d),d=Fv(I,a),p=Fv(I,l),d&&p&&(x.rangeCount!==1||x.anchorNode!==d.node||x.anchorOffset!==d.offset||x.focusNode!==p.node||x.focusOffset!==p.offset)&&(_=_.createRange(),_.setStart(d.node,d.offset),x.removeAllRanges(),a>l?(x.addRange(_),x.extend(p.node,p.offset)):(_.setEnd(p.node,p.offset),x.addRange(_)))))),_=[],x=I;x=x.parentNode;)x.nodeType===1&&_.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof I.focus=="function"&&I.focus(),I=0;I<_.length;I++)x=_[I],x.element.scrollLeft=x.left,x.element.scrollTop=x.top}pu=!!Jf,Zf=Jf=null,e.current=n,Q=i;do try{for(I=e;Q!==null;){var M=Q.effectTag;if(M&36&&PA(I,Q.alternate,Q),M&128){_=void 0;var L=Q.ref;if(L!==null){var B=Q.stateNode;switch(Q.tag){case 5:_=B;break;default:_=B}typeof L=="function"?L(_):L.current=_}}Q=Q.nextEffect}}catch(W){if(Q===null)throw Error(U(330));zi(Q,W),Q=Q.nextEffect}while(Q!==null);Q=null,EA(),ne=o}else e.current=n;if(tc)tc=!1,ls=e,Ja=t;else for(Q=i;Q!==null;)t=Q.nextEffect,Q.nextEffect=null,Q=t;if(t=e.firstPendingTime,t===0&&(Br=null),t===1073741823?e===dh?us++:(us=0,dh=e):us=0,typeof mh=="function"&&mh(n.stateNode,r),Zt(e),ec)throw ec=!1,e=fh,fh=null,e;return(ne&jp)!==st||Xn(),null}function $A(){for(;Q!==null;){var e=Q.effectTag;e&256&&OA(Q.alternate,Q),!(e&512)||tc||(tc=!0,Ow(97,function(){return fa(),null})),Q=Q.nextEffect}}function fa(){if(Ja!==90){var e=97<Ja?97:Ja;return Ja=90,Qr(e,FA)}}function FA(){if(ls===null)return!1;var e=ls;if(ls=null,(ne&(An|Gn))!==st)throw Error(U(331));var t=ne;for(ne|=Gn,e=e.current.firstEffect;e!==null;){try{var n=e;if(n.effectTag&512)switch(n.tag){case 0:case 11:case 15:case 22:Yw(5,n),Gw(5,n)}}catch(r){if(e===null)throw Error(U(330));zi(e,r)}n=e.nextEffect,e.nextEffect=null,e=n}return ne=t,Xn(),!0}function by(e,t,n){t=Up(n,t),t=Qw(e,t,1073741823),Hr(e,t),e=Ac(e,1073741823),e!==null&&Zt(e)}function zi(e,t){if(e.tag===3)by(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){by(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Br===null||!Br.has(r))){e=Up(t,e),e=Jw(n,e,1073741823),Hr(n,e),n=Ac(n,1073741823),n!==null&&Zt(n);break}}n=n.return}}function UA(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),Jt===e&&Ut===n?at===kc||at===Qu&&ir===1073741823&&hn()-zp<tb?xi(e,Ut):Zu=!0:fb(e,n)&&(t=e.lastPingedTime,t!==0&&t<n||(e.lastPingedTime=n,Zt(e)))}function jA(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=Yn(),t=Vi(t,e,null)),e=Ac(e,t),e!==null&&Zt(e)}var cb;cb=function(e,t,n){var r=t.expirationTime;if(e!==null){var i=t.pendingProps;if(e.memoizedProps!==i||Mt.current)Vn=!0;else{if(r<n){switch(Vn=!1,t.tag){case 3:hy(t),rd();break;case 5:if(oy(t),t.mode&4&&n!==1&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:$t(t.type)&&yu(t);break;case 4:th(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,Je(ju,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return r=t.child.childExpirationTime,r!==0&&r>=n?py(e,t,n):(Je(We,We.current&1),t=ar(e,t,n),t!==null?t.sibling:null);Je(We,We.current&1);break;case 19:if(r=t.childExpirationTime>=n,e.effectTag&64){if(r)return gy(e,t,n);t.effectTag|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null),Je(We,We.current),!r)return null}return ar(e,t,n)}Vn=!1}}else Vn=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=na(t,It.current),Bo(t,n),i=Dp(null,t,r,e,i,n),t.effectTag|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,$t(r)){var o=!0;yu(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Op(t);var a=r.getDerivedStateFromProps;typeof a=="function"&&Wu(t,r,a,e),i.updater=Ic,t.stateNode=i,i._reactInternalFiber=t,eh(t,r,e,n),t=ah(null,t,r,!0,o,n)}else t.tag=0,qt(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,mC(i),i._status!==1)throw i._result;switch(i=i._result,t.type=i,o=t.tag=WA(i),e=Sn(i,e),o){case 0:t=oh(null,t,i,e,n);break e;case 1:t=dy(null,t,i,e,n);break e;case 11:t=cy(null,t,i,e,n);break e;case 14:t=fy(null,t,i,Sn(i.type,e),r,n);break e}throw Error(U(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Sn(r,i),oh(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Sn(r,i),dy(e,t,r,i,n);case 3:if(hy(t),r=t.updateQueue,e===null||r===null)throw Error(U(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,Pp(e,t),bs(t,r,null,n),r=t.memoizedState.element,r===i)rd(),t=ar(e,t,n);else{if((i=t.stateNode.hydrate)&&(Mr=Ho(t.stateNode.containerInfo.firstChild),or=t,i=Ui=!0),i)for(n=Np(t,null,r,n),t.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else qt(e,t,r,n),rd();t=t.child}return t;case 5:return oy(t),e===null&&ih(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Yd(r,i)?a=null:o!==null&&Yd(r,o)&&(t.effectTag|=16),Ww(e,t),t.mode&4&&n!==1&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(qt(e,t,a,n),t=t.child),t;case 6:return e===null&&ih(t),null;case 13:return py(e,t,n);case 4:return th(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ra(t,null,r,n):qt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Sn(r,i),cy(e,t,r,i,n);case 7:return qt(e,t,t.pendingProps,n),t.child;case 8:return qt(e,t,t.pendingProps.children,n),t.child;case 12:return qt(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value;var l=t.type._context;if(Je(ju,l._currentValue),l._currentValue=o,a!==null)if(l=a.value,o=Gi(l,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,o):1073741823)|0,o===0){if(a.children===i.children&&!Mt.current){t=ar(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){a=l.child;for(var d=u.firstContext;d!==null;){if(d.context===r&&d.observedBits&o){l.tag===1&&(d=Wr(n,null),d.tag=2,Hr(l,d)),l.expirationTime<n&&(l.expirationTime=n),d=l.alternate,d!==null&&d.expirationTime<n&&(d.expirationTime=n),Nw(l.return,n),u.expirationTime<n&&(u.expirationTime=n);break}d=d.next}}else a=l.tag===10&&l.type===t.type?null:l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}qt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,Bo(t,n),i=mn(i,o.unstable_observedBits),r=r(i),t.effectTag|=1,qt(e,t,r,n),t.child;case 14:return i=t.type,o=Sn(i,t.pendingProps),o=Sn(i.type,o),fy(e,t,i,o,r,n);case 15:return zw(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Sn(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,$t(r)?(e=!0,yu(t)):e=!1,Bo(t,n),Rw(t,r,i),eh(t,r,i,n),ah(null,t,r,!0,e,n);case 19:return gy(e,t,n)}throw Error(U(156,t.tag))};var mh=null,gh=null;function VA(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);mh=function(r){try{t.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)===64)}catch{}},gh=function(r){try{t.onCommitFiberUnmount(n,r)}catch{}}}catch{}return!0}function zA(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function zn(e,t,n,r){return new zA(e,t,n,r)}function Wp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function WA(e){if(typeof e=="function")return Wp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===up)return 11;if(e===cp)return 14}return 2}function Xi(e,t){var n=e.alternate;return n===null?(n=zn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Su(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Wp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ai:return $r(n.children,i,o,t);case pC:a=8,i|=7;break;case OE:a=8,i|=1;break;case fu:return e=zn(12,n,t,i|8),e.elementType=fu,e.type=fu,e.expirationTime=o,e;case du:return e=zn(13,n,t,i),e.type=du,e.elementType=du,e.expirationTime=o,e;case xd:return e=zn(19,n,t,i),e.elementType=xd,e.expirationTime=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case PE:a=10;break e;case NE:a=9;break e;case up:a=11;break e;case cp:a=14;break e;case xE:a=16,r=null;break e;case RE:a=22;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=zn(a,n,t,i),t.elementType=e,t.type=r,t.expirationTime=o,t}function $r(e,t,n,r){return e=zn(7,e,r,t),e.expirationTime=n,e}function sd(e,t,n){return e=zn(6,e,null,t),e.expirationTime=n,e}function ld(e,t,n){return t=zn(4,e.children!==null?e.children:[],e.key,t),t.expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function HA(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function fb(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,n!==0&&n>=t&&e<=t}function Ri(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||n===0)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function db(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;n!==0&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function vh(e,t){var n=e.lastExpiredTime;(n===0||n>t)&&(e.lastExpiredTime=t)}function nc(e,t,n,r){var i=t.current,o=Yn(),a=ss.suspense;o=Vi(o,i,a);e:if(n){n=n._reactInternalFiber;t:{if(ao(n)!==n||n.tag!==1)throw Error(U(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if($t(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(U(171))}if(n.tag===1){var u=n.type;if($t(u)){n=ww(n,u,l);break e}}n=l}else n=Xr;return t.context===null?t.context=n:t.pendingContext=n,t=Wr(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),Hr(i,t),Kr(i,o),o}function ud(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ty(e,t){e=e.memoizedState,e!==null&&e.dehydrated!==null&&e.retryTime<t&&(e.retryTime=t)}function Hp(e,t){Ty(e,t),(e=e.alternate)&&Ty(e,t)}function Bp(e,t,n){n=n!=null&&n.hydrate===!0;var r=new HA(e,t,n),i=zn(3,null,null,t===2?7:t===1?3:0);r.current=i,i.stateNode=r,Op(i),e[Bs]=r.current,n&&t!==0&&wC(e,e.nodeType===9?e:e.ownerDocument),this._internalRoot=r}Bp.prototype.render=function(e){nc(e,this._internalRoot,null,null)};Bp.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;nc(null,e,null,function(){t[Bs]=null})};function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function BA(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Bp(e,0,t?{hydrate:!0}:void 0)}function Pc(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o._internalRoot;if(typeof i=="function"){var l=i;i=function(){var d=ud(a);l.call(d)}}nc(t,a,e,i)}else{if(o=n._reactRootContainer=BA(n,r),a=o._internalRoot,typeof i=="function"){var u=i;i=function(){var d=ud(a);u.call(d)}}ib(function(){nc(t,a,e,i)})}return ud(a)}function KA(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Po,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}JE=function(e){if(e.tag===13){var t=Eu(Yn(),150,100);Kr(e,t),Hp(e,t)}};mp=function(e){e.tag===13&&(Kr(e,3),Hp(e,3))};ZE=function(e){if(e.tag===13){var t=Yn();t=Vi(t,e,null),Kr(e,t),Hp(e,t)}};Nd=function(e,t,n){switch(t){case"input":if(Ld(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bp(r);if(!i)throw Error(U(90));DE(r),Ld(r,i)}}}break;case"textarea":$E(e,n);break;case"select":t=n.value,t!=null&&Wo(e,!!n.multiple,t,!1)}};rp=rb;kE=function(e,t,n,r,i){var o=ne;ne|=4;try{return Qr(98,e.bind(null,t,n,r,i))}finally{ne=o,ne===st&&Xn()}};ip=function(){(ne&(1|An|Gn))===st&&(RA(),fa())};CE=function(e,t){var n=ne;ne|=2;try{return e(t)}finally{ne=n,ne===st&&Xn()}};function hb(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qs(t))throw Error(U(200));return KA(e,t,null,n)}var YA={Events:[Ys,Yi,bp,TE,Pd,ta,function(e){hp(e,LC)},SE,IE,wc,Ec,fa,{current:!1}]};(function(e){var t=e.findFiberByHostInstance;return VA(xt({},e,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=YE(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return t?t(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Ks,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YA;vn.createPortal=hb;vn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternalFiber;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):Error(U(268,Object.keys(e)));return e=YE(t),e=e===null?null:e.stateNode,e};vn.flushSync=function(e,t){if((ne&(An|Gn))!==st)throw Error(U(187));var n=ne;ne|=1;try{return Qr(99,e.bind(null,t))}finally{ne=n,Xn()}};vn.hydrate=function(e,t,n){if(!Qs(t))throw Error(U(200));return Pc(null,e,t,!0,n)};vn.render=function(e,t,n){if(!Qs(t))throw Error(U(200));return Pc(null,e,t,!1,n)};vn.unmountComponentAtNode=function(e){if(!Qs(e))throw Error(U(40));return e._reactRootContainer?(ib(function(){Pc(null,null,e,!1,function(){e._reactRootContainer=null,e[Bs]=null})}),!0):!1};vn.unstable_batchedUpdates=rb;vn.unstable_createPortal=function(e,t){return hb(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};vn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qs(n))throw Error(U(200));if(e==null||e._reactInternalFiber===void 0)throw Error(U(38));return Pc(e,t,n,!1,r)};vn.version="16.14.0";function pb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pb)}catch(e){console.error(e)}}pb(),vE.exports=vn;var Kp=vE.exports;const mb=qh(Kp),GA=J_({__proto__:null,default:mb},[Kp]);/**
 * @remix-run/router v1.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ze(){return ze=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ze.apply(this,arguments)}var Xe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xe||(Xe={}));const Sy="popstate";function qA(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Cs("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ji(i)}return QA(t,n,null,e)}function he(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function XA(){return Math.random().toString(36).substr(2,8)}function Iy(e,t){return{usr:e.state,key:e.key,idx:t}}function Cs(e,t,n,r){return n===void 0&&(n=null),ze({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yr(t):t,{state:n,key:t&&t.key||r||XA()})}function Ji(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function yr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function QA(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Xe.Pop,u=null,d=p();d==null&&(d=0,a.replaceState(ze({},a.state,{idx:d}),""));function p(){return(a.state||{idx:null}).idx}function m(){l=Xe.Pop;let g=p(),v=g==null?null:g-d;d=g,u&&u({action:l,location:A.location,delta:v})}function w(g,v){l=Xe.Push;let E=Cs(A.location,g,v);n&&n(E,g),d=p()+1;let I=Iy(E,d),_=A.createHref(E);try{a.pushState(I,"",_)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(_)}o&&u&&u({action:l,location:A.location,delta:1})}function S(g,v){l=Xe.Replace;let E=Cs(A.location,g,v);n&&n(E,g),d=p();let I=Iy(E,d),_=A.createHref(E);a.replaceState(I,"",_),o&&u&&u({action:l,location:A.location,delta:0})}function O(g){let v=i.location.origin!=="null"?i.location.origin:i.location.href,E=typeof g=="string"?g:Ji(g);return he(v,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,v)}let A={get action(){return l},get location(){return e(i,a)},listen(g){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Sy,m),u=g,()=>{i.removeEventListener(Sy,m),u=null}},createHref(g){return t(i,g)},createURL:O,encodeLocation(g){let v=O(g);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:w,replace:S,go(g){return a.go(g)}};return A}var Qe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qe||(Qe={}));const JA=new Set(["lazy","caseSensitive","path","id","index","children"]);function ZA(e){return e.index===!0}function yh(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let a=[...n,o],l=typeof i.id=="string"?i.id:a.join("-");if(he(i.index!==!0||!i.children,"Cannot specify children on an index route"),he(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),ZA(i)){let u=ze({},i,t(i),{id:l});return r[l]=u,u}else{let u=ze({},i,t(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=yh(i.children,t,a,r)),u}})}function Mo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?yr(t):t,i=da(r.pathname||"/",n);if(i==null)return null;let o=gb(e);tO(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=cO(o[l],hO(i));return a}function eO(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function gb(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(he(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=cr([r,u.relativePath]),p=n.concat(u);o.children&&o.children.length>0&&(he(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),gb(o.children,t,p,d)),!(o.path==null&&!o.index)&&t.push({path:d,score:lO(d,o.index),routesMeta:p})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let u of vb(o.path))i(o,a,u)}),t}function vb(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=vb(r.join("/")),l=[];return l.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...a),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function tO(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:uO(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nO=/^:\w+$/,rO=3,iO=2,oO=1,aO=10,sO=-2,ky=e=>e==="*";function lO(e,t){let n=e.split("/"),r=n.length;return n.some(ky)&&(r+=sO),t&&(r+=iO),n.filter(i=>!ky(i)).reduce((i,o)=>i+(nO.test(o)?rO:o===""?oO:aO),r)}function uO(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function cO(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],u=a===n.length-1,d=i==="/"?t:t.slice(i.length)||"/",p=fO({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d);if(!p)return null;Object.assign(r,p.params);let m=l.route;o.push({params:r,pathname:cr([i,p.pathname]),pathnameBase:vO(cr([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=cr([i,p.pathnameBase]))}return o}function fO(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=dO(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,p,m)=>{let{paramName:w,isOptional:S}=p;if(w==="*"){let A=l[m]||"";a=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const O=l[m];return S&&!O?d[w]=void 0:d[w]=pO(O||"",w),d},{}),pathname:o,pathnameBase:a,pattern:e}}function dO(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function hO(e){try{return decodeURI(e)}catch(t){return Qi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pO(e,t){try{return decodeURIComponent(e)}catch(n){return Qi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function da(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mO(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?yr(e):e;return{pathname:n?n.startsWith("/")?n:gO(n,t):t,search:yO(r),hash:_O(i)}}function gO(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yp(e){return yb(e).map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function Gp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=yr(e):(i=ze({},e),he(!i.pathname||!i.pathname.includes("?"),cd("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),cd("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),cd("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else if(r){let m=t[t.length-1].replace(/^\//,"").split("/");if(a.startsWith("..")){let w=a.split("/");for(;w[0]==="..";)w.shift(),m.pop();i.pathname=w.join("/")}l="/"+m.join("/")}else{let m=t.length-1;if(a.startsWith("..")){let w=a.split("/");for(;w[0]==="..";)w.shift(),m-=1;i.pathname=w.join("/")}l=m>=0?t[m]:"/"}let u=mO(i,l),d=a&&a!=="/"&&a.endsWith("/"),p=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const cr=e=>e.join("/").replace(/\/\/+/g,"/"),vO=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yO=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_O=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class qp{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function _b(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Eb=["post","put","patch","delete"],EO=new Set(Eb),wO=["get",...Eb],bO=new Set(wO),TO=new Set([301,302,303,307,308]),SO=new Set([307,308]),fd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},IO={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},za={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kO=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),bb="remix-router-transitions";function CO(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;he(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let b=e.detectErrorBoundary;i=C=>({hasErrorBoundary:b(C)})}else i=kO;let o={},a=yh(e.routes,i,void 0,o),l,u=e.basename||"/",d=ze({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),p=null,m=new Set,w=null,S=null,O=null,A=e.hydrationData!=null,g=Mo(a,e.history.location,u),v=null;if(g==null){let b=dn(404,{pathname:e.history.location.pathname}),{matches:C,route:R}=Ly(a);g=C,v={[R.id]:b}}let E=!g.some(b=>b.route.lazy)&&(!g.some(b=>b.route.loader)||e.hydrationData!=null),I,_={historyAction:e.history.action,location:e.history.location,matches:g,initialized:E,navigation:fd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||v,fetchers:new Map,blockers:new Map},x=Xe.Pop,M=!1,L,B=!1,W=new Map,ve=null,ge=!1,je=!1,vt=[],Ce=[],oe=new Map,rn=0,kt=-1,Ct=new Map,ut=new Set,on=new Map,yn=new Map,At=new Set,an=new Map,V=new Map,X=!1;function ue(){if(p=e.history.listen(b=>{let{action:C,location:R,delta:H}=b;if(X){X=!1;return}Qi(V.size===0||H!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=br({currentLocation:_.location,nextLocation:R,historyAction:C});if(G&&H!=null){X=!0,e.history.go(H*-1),po(G,{state:"blocked",location:R,proceed(){po(G,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),e.history.go(H)},reset(){let ae=new Map(_.blockers);ae.set(G,za),xe({blockers:ae})}});return}return Vt(C,R)}),n){FO(t,W);let b=()=>UO(t,W);t.addEventListener("pagehide",b),ve=()=>t.removeEventListener("pagehide",b)}return _.initialized||Vt(Xe.Pop,_.location),I}function Ae(){p&&p(),ve&&ve(),m.clear(),L&&L.abort(),_.fetchers.forEach((b,C)=>ho(C)),_.blockers.forEach((b,C)=>wa(C))}function P(b){return m.add(b),()=>m.delete(b)}function xe(b,C){C===void 0&&(C={}),_=ze({},_,b);let R=[],H=[];d.v7_fetcherPersist&&_.fetchers.forEach((G,ae)=>{G.state==="idle"&&(At.has(ae)?H.push(ae):R.push(ae))}),[...m].forEach(G=>G(_,{deletedFetchers:H,unstable_viewTransitionOpts:C.viewTransitionOpts,unstable_flushSync:C.flushSync===!0})),d.v7_fetcherPersist&&(R.forEach(G=>_.fetchers.delete(G)),H.forEach(G=>ho(G)))}function yt(b,C,R){var H,G;let{flushSync:ae}=R===void 0?{}:R,te=_.actionData!=null&&_.navigation.formMethod!=null&&In(_.navigation.formMethod)&&_.navigation.state==="loading"&&((H=b.state)==null?void 0:H._isRedirect)!==!0,ee;C.actionData?Object.keys(C.actionData).length>0?ee=C.actionData:ee=null:te?ee=_.actionData:ee=null;let J=C.loaderData?Ry(_.loaderData,C.loaderData,C.matches||[],C.errors):_.loaderData,me=_.blockers;me.size>0&&(me=new Map(me),me.forEach((be,Re)=>me.set(Re,za)));let Oe=M===!0||_.navigation.formMethod!=null&&In(_.navigation.formMethod)&&((G=b.state)==null?void 0:G._isRedirect)!==!0;l&&(a=l,l=void 0),ge||x===Xe.Pop||(x===Xe.Push?e.history.push(b,b.state):x===Xe.Replace&&e.history.replace(b,b.state));let se;if(x===Xe.Pop){let be=W.get(_.location.pathname);be&&be.has(b.pathname)?se={currentLocation:_.location,nextLocation:b}:W.has(b.pathname)&&(se={currentLocation:b,nextLocation:_.location})}else if(B){let be=W.get(_.location.pathname);be?be.add(b.pathname):(be=new Set([b.pathname]),W.set(_.location.pathname,be)),se={currentLocation:_.location,nextLocation:b}}xe(ze({},C,{actionData:ee,loaderData:J,historyAction:x,location:b,initialized:!0,navigation:fd,revalidation:"idle",restoreScrollPosition:bl(b,C.matches||_.matches),preventScrollReset:Oe,blockers:me}),{viewTransitionOpts:se,flushSync:ae===!0}),x=Xe.Pop,M=!1,B=!1,ge=!1,je=!1,vt=[],Ce=[]}async function sn(b,C){if(typeof b=="number"){e.history.go(b);return}let R=_h(_.location,_.matches,u,d.v7_prependBasename,b,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:H,submission:G,error:ae}=Cy(d.v7_normalizeFormMethod,!1,R,C),te=_.location,ee=Cs(_.location,H,C&&C.state);ee=ze({},ee,e.history.encodeLocation(ee));let J=C&&C.replace!=null?C.replace:void 0,me=Xe.Push;J===!0?me=Xe.Replace:J===!1||G!=null&&In(G.formMethod)&&G.formAction===_.location.pathname+_.location.search&&(me=Xe.Replace);let Oe=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,se=(C&&C.unstable_flushSync)===!0,be=br({currentLocation:te,nextLocation:ee,historyAction:me});if(be){po(be,{state:"blocked",location:ee,proceed(){po(be,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),sn(b,C)},reset(){let Re=new Map(_.blockers);Re.set(be,za),xe({blockers:Re})}});return}return await Vt(me,ee,{submission:G,pendingError:ae,preventScrollReset:Oe,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition,flushSync:se})}function it(){if(fo(),xe({revalidation:"loading"}),_.navigation.state!=="submitting"){if(_.navigation.state==="idle"){Vt(_.historyAction,_.location,{startUninterruptedRevalidation:!0});return}Vt(x||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation})}}async function Vt(b,C,R){L&&L.abort(),L=null,x=b,ge=(R&&R.startUninterruptedRevalidation)===!0,df(_.location,_.matches),M=(R&&R.preventScrollReset)===!0,B=(R&&R.enableViewTransition)===!0;let H=l||a,G=R&&R.overrideNavigation,ae=Mo(H,C,u),te=(R&&R.flushSync)===!0;if(!ae){let Re=dn(404,{pathname:C.pathname}),{matches:ct,route:_t}=Ly(H);ba(),yt(C,{matches:ct,loaderData:{},errors:{[_t.id]:Re}},{flushSync:te});return}if(_.initialized&&!je&&xO(_.location,C)&&!(R&&R.submission&&In(R.submission.formMethod))){yt(C,{matches:ae},{flushSync:te});return}L=new AbortController;let ee=Ha(e.history,C,L.signal,R&&R.submission),J,me;if(R&&R.pendingError)me={[cs(ae).route.id]:R.pendingError};else if(R&&R.submission&&In(R.submission.formMethod)){let Re=await lf(ee,C,R.submission,ae,{replace:R.replace,flushSync:te});if(Re.shortCircuited)return;J=Re.pendingActionData,me=Re.pendingActionError,G=dd(C,R.submission),te=!1,ee=new Request(ee.url,{signal:ee.signal})}let{shortCircuited:Oe,loaderData:se,errors:be}=await zt(ee,C,ae,G,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,te,J,me);Oe||(L=null,yt(C,ze({matches:ae},J?{actionData:J}:{},{loaderData:se,errors:be})))}async function lf(b,C,R,H,G){G===void 0&&(G={}),fo();let ae=MO(C,R);xe({navigation:ae},{flushSync:G.flushSync===!0});let te,ee=wh(H,C);if(!ee.route.action&&!ee.route.lazy)te={type:Qe.error,error:dn(405,{method:b.method,pathname:C.pathname,routeId:ee.route.id})};else if(te=await Wa("action",b,ee,H,o,i,u),b.signal.aborted)return{shortCircuited:!0};if(Yo(te)){let J;return G&&G.replace!=null?J=G.replace:J=te.location===_.location.pathname+_.location.search,await li(_,te,{submission:R,replace:J}),{shortCircuited:!0}}if(fs(te)){let J=cs(H,ee.route.id);return(G&&G.replace)!==!0&&(x=Xe.Push),{pendingActionData:{},pendingActionError:{[J.route.id]:te.error}}}if(Li(te))throw dn(400,{type:"defer-action"});return{pendingActionData:{[ee.route.id]:te.data}}}async function zt(b,C,R,H,G,ae,te,ee,J,me){let Oe=H||dd(C,G),se=G||ae||$y(Oe),be=l||a,[Re,ct]=Ay(e.history,_,R,se,C,je,vt,Ce,At,on,ut,be,u,J,me);if(ba(Te=>!(R&&R.some(Lt=>Lt.route.id===Te))||Re&&Re.some(Lt=>Lt.route.id===Te)),kt=++rn,Re.length===0&&ct.length===0){let Te=_l();return yt(C,ze({matches:R,loaderData:{},errors:me||null},J?{actionData:J}:{},Te?{fetchers:new Map(_.fetchers)}:{}),{flushSync:ee}),{shortCircuited:!0}}if(!ge){ct.forEach(Lt=>{let Fe=_.fetchers.get(Lt.key),un=Ba(void 0,Fe?Fe.data:void 0);_.fetchers.set(Lt.key,un)});let Te=J||_.actionData;xe(ze({navigation:Oe},Te?Object.keys(Te).length===0?{actionData:null}:{actionData:Te}:{},ct.length>0?{fetchers:new Map(_.fetchers)}:{}),{flushSync:ee})}ct.forEach(Te=>{oe.has(Te.key)&&xn(Te.key),Te.controller&&oe.set(Te.key,Te.controller)});let _t=()=>ct.forEach(Te=>xn(Te.key));L&&L.signal.addEventListener("abort",_t);let{results:ln,loaderResults:Rn,fetcherResults:_n}=await uf(_.matches,R,Re,ct,b);if(b.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener("abort",_t),ct.forEach(Te=>oe.delete(Te.key));let Wt=Dy(ln);if(Wt){if(Wt.idx>=Re.length){let Te=ct[Wt.idx-Re.length].key;ut.add(Te)}return await li(_,Wt.result,{replace:te}),{shortCircuited:!0}}let{loaderData:Sr,errors:Ta}=xy(_,R,Re,Rn,me,ct,_n,an);an.forEach((Te,Lt)=>{Te.subscribe(Fe=>{(Fe||Te.done)&&an.delete(Lt)})});let Sa=_l(),Ia=El(kt),Ir=Sa||Ia||ct.length>0;return ze({loaderData:Sr,errors:Ta},Ir?{fetchers:new Map(_.fetchers)}:{})}function Ea(b,C,R,H){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");oe.has(b)&&xn(b);let G=(H&&H.unstable_flushSync)===!0,ae=l||a,te=_h(_.location,_.matches,u,d.v7_prependBasename,R,C,H==null?void 0:H.relative),ee=Mo(ae,te,u);if(!ee){ui(b,C,dn(404,{pathname:te}),{flushSync:G});return}let{path:J,submission:me,error:Oe}=Cy(d.v7_normalizeFormMethod,!0,te,H);if(Oe){ui(b,C,Oe,{flushSync:G});return}let se=wh(ee,J);if(M=(H&&H.preventScrollReset)===!0,me&&In(me.formMethod)){Z(b,C,J,se,ee,G,me);return}on.set(b,{routeId:C,path:J}),co(b,C,J,se,ee,G,me)}async function Z(b,C,R,H,G,ae,te){if(fo(),on.delete(b),!H.route.action&&!H.route.lazy){let Fe=dn(405,{method:te.formMethod,pathname:R,routeId:C});ui(b,C,Fe,{flushSync:ae});return}let ee=_.fetchers.get(b);Nn(b,$O(te,ee),{flushSync:ae});let J=new AbortController,me=Ha(e.history,R,J.signal,te);oe.set(b,J);let Oe=rn,se=await Wa("action",me,H,G,o,i,u);if(me.signal.aborted){oe.get(b)===J&&oe.delete(b);return}if(At.has(b)){Nn(b,Nr(void 0));return}if(Yo(se))if(oe.delete(b),kt>Oe){Nn(b,Nr(void 0));return}else return ut.add(b),Nn(b,Ba(te)),li(_,se,{fetcherSubmission:te});if(fs(se)){ui(b,C,se.error);return}if(Li(se))throw dn(400,{type:"defer-action"});let be=_.navigation.location||_.location,Re=Ha(e.history,be,J.signal),ct=l||a,_t=_.navigation.state!=="idle"?Mo(ct,_.navigation.location,u):_.matches;he(_t,"Didn't find any matches after fetcher action");let ln=++rn;Ct.set(b,ln);let Rn=Ba(te,se.data);_.fetchers.set(b,Rn);let[_n,Wt]=Ay(e.history,_,_t,te,be,je,vt,Ce,At,on,ut,ct,u,{[H.route.id]:se.data},void 0);Wt.filter(Fe=>Fe.key!==b).forEach(Fe=>{let un=Fe.key,Tl=_.fetchers.get(un),pf=Ba(void 0,Tl?Tl.data:void 0);_.fetchers.set(un,pf),oe.has(un)&&xn(un),Fe.controller&&oe.set(un,Fe.controller)}),xe({fetchers:new Map(_.fetchers)});let Sr=()=>Wt.forEach(Fe=>xn(Fe.key));J.signal.addEventListener("abort",Sr);let{results:Ta,loaderResults:Sa,fetcherResults:Ia}=await uf(_.matches,_t,_n,Wt,Re);if(J.signal.aborted)return;J.signal.removeEventListener("abort",Sr),Ct.delete(b),oe.delete(b),Wt.forEach(Fe=>oe.delete(Fe.key));let Ir=Dy(Ta);if(Ir){if(Ir.idx>=_n.length){let Fe=Wt[Ir.idx-_n.length].key;ut.add(Fe)}return li(_,Ir.result)}let{loaderData:Te,errors:Lt}=xy(_,_.matches,_n,Sa,void 0,Wt,Ia,an);if(_.fetchers.has(b)){let Fe=Nr(se.data);_.fetchers.set(b,Fe)}El(ln),_.navigation.state==="loading"&&ln>kt?(he(x,"Expected pending action"),L&&L.abort(),yt(_.navigation.location,{matches:_t,loaderData:Te,errors:Lt,fetchers:new Map(_.fetchers)})):(xe({errors:Lt,loaderData:Ry(_.loaderData,Te,_t,Lt),fetchers:new Map(_.fetchers)}),je=!1)}async function co(b,C,R,H,G,ae,te){let ee=_.fetchers.get(b);Nn(b,Ba(te,ee?ee.data:void 0),{flushSync:ae});let J=new AbortController,me=Ha(e.history,R,J.signal);oe.set(b,J);let Oe=rn,se=await Wa("loader",me,H,G,o,i,u);if(Li(se)&&(se=await Ib(se,me.signal,!0)||se),oe.get(b)===J&&oe.delete(b),!me.signal.aborted){if(At.has(b)){Nn(b,Nr(void 0));return}if(Yo(se))if(kt>Oe){Nn(b,Nr(void 0));return}else{ut.add(b),await li(_,se);return}if(fs(se)){ui(b,C,se.error);return}he(!Li(se),"Unhandled fetcher deferred data"),Nn(b,Nr(se.data))}}async function li(b,C,R){let{submission:H,fetcherSubmission:G,replace:ae}=R===void 0?{}:R;C.revalidate&&(je=!0);let te=Cs(b.location,C.location,{_isRedirect:!0});if(he(te,"Expected a location on the redirect navigation"),n){let be=!1;if(C.reloadDocument)be=!0;else if(wb.test(C.location)){const Re=e.history.createURL(C.location);be=Re.origin!==t.location.origin||da(Re.pathname,u)==null}if(be){ae?t.location.replace(C.location):t.location.assign(C.location);return}}L=null;let ee=ae===!0?Xe.Replace:Xe.Push,{formMethod:J,formAction:me,formEncType:Oe}=b.navigation;!H&&!G&&J&&me&&Oe&&(H=$y(b.navigation));let se=H||G;if(SO.has(C.status)&&se&&In(se.formMethod))await Vt(ee,te,{submission:ze({},se,{formAction:C.location}),preventScrollReset:M});else{let be=dd(te,H);await Vt(ee,te,{overrideNavigation:be,fetcherSubmission:G,preventScrollReset:M})}}async function uf(b,C,R,H,G){let ae=await Promise.all([...R.map(J=>Wa("loader",G,J,C,o,i,u)),...H.map(J=>J.matches&&J.match&&J.controller?Wa("loader",Ha(e.history,J.path,J.controller.signal),J.match,J.matches,o,i,u):{type:Qe.error,error:dn(404,{pathname:J.path})})]),te=ae.slice(0,R.length),ee=ae.slice(R.length);return await Promise.all([My(b,R,te,te.map(()=>G.signal),!1,_.loaderData),My(b,H.map(J=>J.match),ee,H.map(J=>J.controller?J.controller.signal:null),!0)]),{results:ae,loaderResults:te,fetcherResults:ee}}function fo(){je=!0,vt.push(...ba()),on.forEach((b,C)=>{oe.has(C)&&(Ce.push(C),xn(C))})}function Nn(b,C,R){R===void 0&&(R={}),_.fetchers.set(b,C),xe({fetchers:new Map(_.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function ui(b,C,R,H){H===void 0&&(H={});let G=cs(_.matches,C);ho(b),xe({errors:{[G.route.id]:R},fetchers:new Map(_.fetchers)},{flushSync:(H&&H.flushSync)===!0})}function yl(b){return d.v7_fetcherPersist&&(yn.set(b,(yn.get(b)||0)+1),At.has(b)&&At.delete(b)),_.fetchers.get(b)||IO}function ho(b){let C=_.fetchers.get(b);oe.has(b)&&!(C&&C.state==="loading"&&Ct.has(b))&&xn(b),on.delete(b),Ct.delete(b),ut.delete(b),At.delete(b),_.fetchers.delete(b)}function ci(b){if(d.v7_fetcherPersist){let C=(yn.get(b)||0)-1;C<=0?(yn.delete(b),At.add(b)):yn.set(b,C)}else ho(b);xe({fetchers:new Map(_.fetchers)})}function xn(b){let C=oe.get(b);he(C,"Expected fetch controller: "+b),C.abort(),oe.delete(b)}function cf(b){for(let C of b){let R=yl(C),H=Nr(R.data);_.fetchers.set(C,H)}}function _l(){let b=[],C=!1;for(let R of ut){let H=_.fetchers.get(R);he(H,"Expected fetcher: "+R),H.state==="loading"&&(ut.delete(R),b.push(R),C=!0)}return cf(b),C}function El(b){let C=[];for(let[R,H]of Ct)if(H<b){let G=_.fetchers.get(R);he(G,"Expected fetcher: "+R),G.state==="loading"&&(xn(R),Ct.delete(R),C.push(R))}return cf(C),C.length>0}function ff(b,C){let R=_.blockers.get(b)||za;return V.get(b)!==C&&V.set(b,C),R}function wa(b){_.blockers.delete(b),V.delete(b)}function po(b,C){let R=_.blockers.get(b)||za;he(R.state==="unblocked"&&C.state==="blocked"||R.state==="blocked"&&C.state==="blocked"||R.state==="blocked"&&C.state==="proceeding"||R.state==="blocked"&&C.state==="unblocked"||R.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+C.state);let H=new Map(_.blockers);H.set(b,C),xe({blockers:H})}function br(b){let{currentLocation:C,nextLocation:R,historyAction:H}=b;if(V.size===0)return;V.size>1&&Qi(!1,"A router only supports one blocker at a time");let G=Array.from(V.entries()),[ae,te]=G[G.length-1],ee=_.blockers.get(ae);if(!(ee&&ee.state==="proceeding")&&te({currentLocation:C,nextLocation:R,historyAction:H}))return ae}function ba(b){let C=[];return an.forEach((R,H)=>{(!b||b(H))&&(R.cancel(),C.push(H),an.delete(H))}),C}function Tr(b,C,R){if(w=b,O=C,S=R||null,!A&&_.navigation===fd){A=!0;let H=bl(_.location,_.matches);H!=null&&xe({restoreScrollPosition:H})}return()=>{w=null,O=null,S=null}}function wl(b,C){return S&&S(b,C.map(H=>eO(H,_.loaderData)))||b.key}function df(b,C){if(w&&O){let R=wl(b,C);w[R]=O()}}function bl(b,C){if(w){let R=wl(b,C),H=w[R];if(typeof H=="number")return H}return null}function hf(b){o={},l=yh(b,i,void 0,o)}return I={get basename(){return u},get state(){return _},get routes(){return a},get window(){return t},initialize:ue,subscribe:P,enableScrollRestoration:Tr,navigate:sn,fetch:Ea,revalidate:it,createHref:b=>e.history.createHref(b),encodeLocation:b=>e.history.encodeLocation(b),getFetcher:yl,deleteFetcher:ci,dispose:Ae,getBlocker:ff,deleteBlocker:wa,_internalFetchControllers:oe,_internalActiveDeferreds:an,_internalSetRoutes:hf},I}function AO(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function _h(e,t,n,r,i,o,a){let l,u;if(o){l=[];for(let p of t)if(l.push(p),p.route.id===o){u=p;break}}else l=t,u=t[t.length-1];let d=Gp(i||".",Yp(l),da(e.pathname,n)||e.pathname,a==="path");return i==null&&(d.search=e.search,d.hash=e.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Xp(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:cr([n,d.pathname])),Ji(d)}function Cy(e,t,n,r){if(!r||!AO(r))return{path:n};if(r.formMethod&&!DO(r.formMethod))return{path:n,error:dn(405,{method:r.formMethod})};let i=()=>({path:n,error:dn(400,{type:"invalid-body"})}),o=r.formMethod||"get",a=e?o.toUpperCase():o.toLowerCase(),l=Sb(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!In(a))return i();let w=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((S,O)=>{let[A,g]=O;return""+S+A+"="+g+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:w}}}else if(r.formEncType==="application/json"){if(!In(a))return i();try{let w=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:w,text:void 0}}}catch{return i()}}}he(typeof FormData=="function","FormData is not available in this environment");let u,d;if(r.formData)u=Eh(r.formData),d=r.formData;else if(r.body instanceof FormData)u=Eh(r.body),d=r.body;else if(r.body instanceof URLSearchParams)u=r.body,d=Ny(u);else if(r.body==null)u=new URLSearchParams,d=new FormData;else try{u=new URLSearchParams(r.body),d=Ny(u)}catch{return i()}let p={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(In(p.formMethod))return{path:n,submission:p};let m=yr(n);return t&&m.search&&Xp(m.search)&&u.append("index",""),m.search="?"+u,{path:Ji(m),submission:p}}function OO(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Ay(e,t,n,r,i,o,a,l,u,d,p,m,w,S,O){let A=O?Object.values(O)[0]:S?Object.values(S)[0]:void 0,g=e.createURL(t.location),v=e.createURL(i),E=O?Object.keys(O)[0]:void 0,_=OO(n,E).filter((M,L)=>{if(M.route.lazy)return!0;if(M.route.loader==null)return!1;if(PO(t.loaderData,t.matches[L],M)||a.some(ve=>ve===M.route.id))return!0;let B=t.matches[L],W=M;return Oy(M,ze({currentUrl:g,currentParams:B.params,nextUrl:v,nextParams:W.params},r,{actionResult:A,defaultShouldRevalidate:o||g.pathname+g.search===v.pathname+v.search||g.search!==v.search||Tb(B,W)}))}),x=[];return d.forEach((M,L)=>{if(!n.some(je=>je.route.id===M.routeId)||u.has(L))return;let B=Mo(m,M.path,w);if(!B){x.push({key:L,routeId:M.routeId,path:M.path,matches:null,match:null,controller:null});return}let W=t.fetchers.get(L),ve=wh(B,M.path),ge=!1;p.has(L)?ge=!1:l.includes(L)?ge=!0:W&&W.state!=="idle"&&W.data===void 0?ge=o:ge=Oy(ve,ze({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:A,defaultShouldRevalidate:o})),ge&&x.push({key:L,routeId:M.routeId,path:M.path,matches:B,match:ve,controller:new AbortController})}),[_,x]}function PO(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function Tb(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Oy(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Py(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];he(i,"No route found in manifest");let o={};for(let a in r){let u=i[a]!==void 0&&a!=="hasErrorBoundary";Qi(!u,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!u&&!JA.has(a)&&(o[a]=r[a])}Object.assign(i,o),Object.assign(i,ze({},t(i),{lazy:void 0}))}async function Wa(e,t,n,r,i,o,a,l){l===void 0&&(l={});let u,d,p,m=O=>{let A,g=new Promise((v,E)=>A=E);return p=()=>A(),t.signal.addEventListener("abort",p),Promise.race([O({request:t,params:n.params,context:l.requestContext}),g])};try{let O=n.route[e];if(n.route.lazy)if(O){let A,g=await Promise.all([m(O).catch(v=>{A=v}),Py(n.route,o,i)]);if(A)throw A;d=g[0]}else if(await Py(n.route,o,i),O=n.route[e],O)d=await m(O);else if(e==="action"){let A=new URL(t.url),g=A.pathname+A.search;throw dn(405,{method:t.method,pathname:g,routeId:n.route.id})}else return{type:Qe.data,data:void 0};else if(O)d=await m(O);else{let A=new URL(t.url),g=A.pathname+A.search;throw dn(404,{pathname:g})}he(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(O){u=Qe.error,d=O}finally{p&&t.signal.removeEventListener("abort",p)}if(LO(d)){let O=d.status;if(TO.has(O)){let v=d.headers.get("Location");if(he(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!wb.test(v))v=_h(new URL(t.url),r.slice(0,r.indexOf(n)+1),a,!0,v);else if(!l.isStaticRequest){let E=new URL(t.url),I=v.startsWith("//")?new URL(E.protocol+v):new URL(v),_=da(I.pathname,a)!=null;I.origin===E.origin&&_&&(v=I.pathname+I.search+I.hash)}if(l.isStaticRequest)throw d.headers.set("Location",v),d;return{type:Qe.redirect,status:O,location:v,revalidate:d.headers.get("X-Remix-Revalidate")!==null,reloadDocument:d.headers.get("X-Remix-Reload-Document")!==null}}if(l.isRouteRequest)throw{type:u===Qe.error?Qe.error:Qe.data,response:d};let A,g=d.headers.get("Content-Type");return g&&/\bapplication\/json\b/.test(g)?A=await d.json():A=await d.text(),u===Qe.error?{type:u,error:new qp(O,d.statusText,A),headers:d.headers}:{type:Qe.data,data:A,statusCode:d.status,headers:d.headers}}if(u===Qe.error)return{type:u,error:d};if(RO(d)){var w,S;return{type:Qe.deferred,deferredData:d,statusCode:(w=d.init)==null?void 0:w.status,headers:((S=d.init)==null?void 0:S.headers)&&new Headers(d.init.headers)}}return{type:Qe.data,data:d}}function Ha(e,t,n,r){let i=e.createURL(Sb(t)).toString(),o={signal:n};if(r&&In(r.formMethod)){let{formMethod:a,formEncType:l}=r;o.method=a.toUpperCase(),l==="application/json"?(o.headers=new Headers({"Content-Type":l}),o.body=JSON.stringify(r.json)):l==="text/plain"?o.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?o.body=Eh(r.formData):o.body=r.formData}return new Request(i,o)}function Eh(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Ny(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function NO(e,t,n,r,i){let o={},a=null,l,u=!1,d={};return n.forEach((p,m)=>{let w=t[m].route.id;if(he(!Yo(p),"Cannot handle redirect results in processLoaderData"),fs(p)){let S=cs(e,w),O=p.error;r&&(O=Object.values(r)[0],r=void 0),a=a||{},a[S.route.id]==null&&(a[S.route.id]=O),o[w]=void 0,u||(u=!0,l=_b(p.error)?p.error.status:500),p.headers&&(d[w]=p.headers)}else Li(p)?(i.set(w,p.deferredData),o[w]=p.deferredData.data):o[w]=p.data,p.statusCode!=null&&p.statusCode!==200&&!u&&(l=p.statusCode),p.headers&&(d[w]=p.headers)}),r&&(a=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:a,statusCode:l||200,loaderHeaders:d}}function xy(e,t,n,r,i,o,a,l){let{loaderData:u,errors:d}=NO(t,n,r,i,l);for(let p=0;p<o.length;p++){let{key:m,match:w,controller:S}=o[p];he(a!==void 0&&a[p]!==void 0,"Did not find corresponding fetcher result");let O=a[p];if(!(S&&S.signal.aborted))if(fs(O)){let A=cs(e.matches,w==null?void 0:w.route.id);d&&d[A.route.id]||(d=ze({},d,{[A.route.id]:O.error})),e.fetchers.delete(m)}else if(Yo(O))he(!1,"Unhandled fetcher revalidation redirect");else if(Li(O))he(!1,"Unhandled fetcher deferred data");else{let A=Nr(O.data);e.fetchers.set(m,A)}}return{loaderData:u,errors:d}}function Ry(e,t,n,r){let i=ze({},t);for(let o of n){let a=o.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(i[a]=t[a]):e[a]!==void 0&&o.route.loader&&(i[a]=e[a]),r&&r.hasOwnProperty(a))break}return i}function cs(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Ly(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function dn(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,a="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(a="Bad Request",i&&n&&r?l="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):e===403?(a="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",l='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",i&&n&&r?l="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new qp(e||500,a,new Error(l),!0)}function Dy(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Yo(n))return{result:n,idx:t}}}function Sb(e){let t=typeof e=="string"?yr(e):e;return Ji(ze({},t,{hash:""}))}function xO(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Li(e){return e.type===Qe.deferred}function fs(e){return e.type===Qe.error}function Yo(e){return(e&&e.type)===Qe.redirect}function RO(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function LO(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function DO(e){return bO.has(e.toLowerCase())}function In(e){return EO.has(e.toLowerCase())}async function My(e,t,n,r,i,o){for(let a=0;a<n.length;a++){let l=n[a],u=t[a];if(!u)continue;let d=e.find(m=>m.route.id===u.route.id),p=d!=null&&!Tb(d,u)&&(o&&o[u.route.id])!==void 0;if(Li(l)&&(i||p)){let m=r[a];he(m,"Expected an AbortSignal for revalidating fetcher deferred result"),await Ib(l,m,i).then(w=>{w&&(n[a]=w||n[a])})}}}async function Ib(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Qe.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Qe.error,error:i}}return{type:Qe.data,data:e.deferredData.data}}}function Xp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function wh(e,t){let n=typeof t=="string"?yr(t).search:t.search;if(e[e.length-1].route.index&&Xp(n||""))return e[e.length-1];let r=yb(e);return r[r.length-1]}function $y(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:a}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function dd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function MO(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ba(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function $O(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Nr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function FO(e,t){try{let n=e.sessionStorage.getItem(bb);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function UO(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(bb,JSON.stringify(n))}catch(r){Qi(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rc(){return rc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rc.apply(this,arguments)}const Nc=$.createContext(null),kb=$.createContext(null),ha=$.createContext(null),xc=$.createContext(null),ai=$.createContext({outlet:null,matches:[],isDataRoute:!1}),Cb=$.createContext(null);function jO(e,t){let{relative:n}=t===void 0?{}:t;Js()||he(!1);let{basename:r,navigator:i}=$.useContext(ha),{hash:o,pathname:a,search:l}=Ob(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:cr([r,a])),i.createHref({pathname:u,search:l,hash:o})}function Js(){return $.useContext(xc)!=null}function Rc(){return Js()||he(!1),$.useContext(xc).location}function Ab(e){$.useContext(ha).static||$.useLayoutEffect(e)}function Lc(){let{isDataRoute:e}=$.useContext(ai);return e?eP():VO()}function VO(){Js()||he(!1);let e=$.useContext(Nc),{basename:t,navigator:n}=$.useContext(ha),{matches:r}=$.useContext(ai),{pathname:i}=Rc(),o=JSON.stringify(Yp(r)),a=$.useRef(!1);return Ab(()=>{a.current=!0}),$.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){n.go(u);return}let p=Gp(u,JSON.parse(o),i,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:cr([t,p.pathname])),(d.replace?n.replace:n.push)(p,d.state,d)},[t,n,o,i,e])}const zO=$.createContext(null);function WO(e){let t=$.useContext(ai).outlet;return t&&$.createElement(zO.Provider,{value:e},t)}function Ob(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=$.useContext(ai),{pathname:i}=Rc(),o=JSON.stringify(Yp(r));return $.useMemo(()=>Gp(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function HO(e,t,n){Js()||he(!1);let{navigator:r}=$.useContext(ha),{matches:i}=$.useContext(ai),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Rc(),d;if(t){var p;let A=typeof t=="string"?yr(t):t;l==="/"||(p=A.pathname)!=null&&p.startsWith(l)||he(!1),d=A}else d=u;let m=d.pathname||"/",w=l==="/"?m:m.slice(l.length)||"/",S=Mo(e,{pathname:w}),O=qO(S&&S.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:cr([l,r.encodeLocation?r.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?l:cr([l,r.encodeLocation?r.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,n);return t&&O?$.createElement(xc.Provider,{value:{location:rc({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xe.Pop}},O):O}function BO(){let e=ZO(),t=_b(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),n?$.createElement("pre",{style:i},n):null,o)}const KO=$.createElement(BO,null);class YO extends $.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?$.createElement(ai.Provider,{value:this.props.routeContext},$.createElement(Cb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GO(e){let{routeContext:t,match:n,children:r}=e,i=$.useContext(Nc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(ai.Provider,{value:t},r)}function qO(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let l=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));l>=0||he(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,u,d)=>{let p=u.route.id?a==null?void 0:a[u.route.id]:null,m=null;n&&(m=u.route.errorElement||KO);let w=t.concat(o.slice(0,d+1)),S=()=>{let O;return p?O=m:u.route.Component?O=$.createElement(u.route.Component,null):u.route.element?O=u.route.element:O=l,$.createElement(GO,{match:u,routeContext:{outlet:l,matches:w,isDataRoute:n!=null},children:O})};return n&&(u.route.ErrorBoundary||u.route.errorElement||d===0)?$.createElement(YO,{location:n.location,revalidation:n.revalidation,component:m,error:p,children:S(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):S()},null)}var Pb=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pb||{}),ic=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ic||{});function XO(e){let t=$.useContext(Nc);return t||he(!1),t}function QO(e){let t=$.useContext(kb);return t||he(!1),t}function JO(e){let t=$.useContext(ai);return t||he(!1),t}function Nb(e){let t=JO(),n=t.matches[t.matches.length-1];return n.route.id||he(!1),n.route.id}function ZO(){var e;let t=$.useContext(Cb),n=QO(ic.UseRouteError),r=Nb(ic.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function eP(){let{router:e}=XO(Pb.UseNavigateStable),t=Nb(ic.UseNavigateStable),n=$.useRef(!1);return Ab(()=>{n.current=!0}),$.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,rc({fromRouteId:t},o)))},[e,t])}function tP(e){return WO(e.context)}function nP(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xe.Pop,navigator:o,static:a=!1}=e;Js()&&he(!1);let l=t.replace(/^\/*/,"/"),u=$.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=yr(r));let{pathname:d="/",search:p="",hash:m="",state:w=null,key:S="default"}=r,O=$.useMemo(()=>{let A=da(d,l);return A==null?null:{location:{pathname:A,search:p,hash:m,state:w,key:S},navigationType:i}},[l,d,p,m,w,S,i]);return O==null?null:$.createElement(ha.Provider,{value:u},$.createElement(xc.Provider,{children:n,value:O}))}new Promise(()=>{});function rP(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:$.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:$.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function As(){return As=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},As.apply(this,arguments)}function iP(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function oP(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function aP(e,t){return e.button===0&&(!t||t==="_self")&&!oP(e)}const sP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function lP(e,t){return CO({basename:t==null?void 0:t.basename,future:As({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:qA({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||uP(),routes:e,mapRouteProperties:rP,window:t==null?void 0:t.window}).initialize()}function uP(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=As({},t,{errors:cP(t.errors)})),t}function cP(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new qp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let a=new o(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const fP=$.createContext({isTransitioning:!1}),dP=$.createContext(new Map),hP="startTransition",Fy=Zk[hP],pP="flushSync",Uy=GA[pP];function mP(e){Fy?Fy(e):e()}function Ka(e){Uy?Uy(e):e()}let gP=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function vP(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=$.useState(n.state),[a,l]=$.useState(),[u,d]=$.useState({isTransitioning:!1}),[p,m]=$.useState(),[w,S]=$.useState(),[O,A]=$.useState(),g=$.useRef(new Map),{v7_startTransition:v}=r||{},E=$.useCallback(L=>{v?mP(L):L()},[v]),I=$.useCallback((L,B)=>{let{deletedFetchers:W,unstable_flushSync:ve,unstable_viewTransitionOpts:ge}=B;W.forEach(vt=>g.current.delete(vt)),L.fetchers.forEach((vt,Ce)=>{vt.data!==void 0&&g.current.set(Ce,vt.data)});let je=n.window==null||typeof n.window.document.startViewTransition!="function";if(!ge||je){ve?Ka(()=>o(L)):E(()=>o(L));return}if(ve){Ka(()=>{w&&(p&&p.resolve(),w.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:ge.currentLocation,nextLocation:ge.nextLocation})});let vt=n.window.document.startViewTransition(()=>{Ka(()=>o(L))});vt.finished.finally(()=>{Ka(()=>{m(void 0),S(void 0),l(void 0),d({isTransitioning:!1})})}),Ka(()=>S(vt));return}w?(p&&p.resolve(),w.skipTransition(),A({state:L,currentLocation:ge.currentLocation,nextLocation:ge.nextLocation})):(l(L),d({isTransitioning:!0,flushSync:!1,currentLocation:ge.currentLocation,nextLocation:ge.nextLocation}))},[n.window,w,p,g,E]);$.useLayoutEffect(()=>n.subscribe(I),[n,I]),$.useEffect(()=>{u.isTransitioning&&!u.flushSync&&m(new gP)},[u]),$.useEffect(()=>{if(p&&a&&n.window){let L=a,B=p.promise,W=n.window.document.startViewTransition(async()=>{E(()=>o(L)),await B});W.finished.finally(()=>{m(void 0),S(void 0),l(void 0),d({isTransitioning:!1})}),S(W)}},[E,a,p,n.window]),$.useEffect(()=>{p&&a&&i.location.key===a.location.key&&p.resolve()},[p,w,i.location,a]),$.useEffect(()=>{!u.isTransitioning&&O&&(l(O.state),d({isTransitioning:!0,flushSync:!1,currentLocation:O.currentLocation,nextLocation:O.nextLocation}),A(void 0))},[u.isTransitioning,O]);let _=$.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:L=>n.navigate(L),push:(L,B,W)=>n.navigate(L,{state:B,preventScrollReset:W==null?void 0:W.preventScrollReset}),replace:(L,B,W)=>n.navigate(L,{replace:!0,state:B,preventScrollReset:W==null?void 0:W.preventScrollReset})}),[n]),x=n.basename||"/",M=$.useMemo(()=>({router:n,navigator:_,static:!1,basename:x}),[n,_,x]);return $.createElement($.Fragment,null,$.createElement(Nc.Provider,{value:M},$.createElement(kb.Provider,{value:i},$.createElement(dP.Provider,{value:g.current},$.createElement(fP.Provider,{value:u},$.createElement(nP,{basename:x,location:i.location,navigationType:i.historyAction,navigator:_},i.initialized?$.createElement(yP,{routes:n.routes,state:i}):t))))),null)}function yP(e){let{routes:t,state:n}=e;return HO(t,void 0,n)}const _P=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wn=$.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:u,to:d,preventScrollReset:p,unstable_viewTransition:m}=t,w=iP(t,sP),{basename:S}=$.useContext(ha),O,A=!1;if(typeof d=="string"&&EP.test(d)&&(O=d,_P))try{let I=new URL(window.location.href),_=d.startsWith("//")?new URL(I.protocol+d):new URL(d),x=da(_.pathname,S);_.origin===I.origin&&x!=null?d=x+_.search+_.hash:A=!0}catch{}let g=jO(d,{relative:i}),v=wP(d,{replace:a,state:l,target:u,preventScrollReset:p,relative:i,unstable_viewTransition:m});function E(I){r&&r(I),I.defaultPrevented||v(I)}return $.createElement("a",As({},w,{href:O||g,onClick:A||o?r:E,ref:n,target:u}))});var jy;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(jy||(jy={}));var Vy;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vy||(Vy={}));function wP(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,u=Lc(),d=Rc(),p=Ob(e,{relative:a});return $.useCallback(m=>{if(aP(m,n)){m.preventDefault();let w=r!==void 0?r:Ji(d)===Ji(p);u(e,{replace:w,state:i,preventScrollReset:o,relative:a,unstable_viewTransition:l})}},[d,u,p,r,i,n,e,o,a,l])}var xb={exports:{}},bP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",TP=bP,SP=TP;function Rb(){}function Lb(){}Lb.resetWarningCache=Rb;var IP=function(){function e(r,i,o,a,l,u){if(u!==SP){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Lb,resetWarningCache:Rb};return n.PropTypes=n,n};xb.exports=IP();var kP=xb.exports;const de=qh(kP);var Jr=St.createContext(null);function CP(e){e()}var Db=CP,AP=function(t){return Db=t},OP=function(){return Db};function PP(){var e=OP(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e(function(){for(var i=t;i;)i.callback(),i=i.next})},get:function(){for(var i=[],o=t;o;)i.push(o),o=o.next;return i},subscribe:function(i){var o=!0,a=n={callback:i,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!o||t===null||(o=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}var zy={notify:function(){},get:function(){return[]}};function Mb(e,t){var n,r=zy;function i(m){return u(),r.subscribe(m)}function o(){r.notify()}function a(){p.onStateChange&&p.onStateChange()}function l(){return!!n}function u(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=PP())}function d(){n&&(n(),n=void 0,r.clear(),r=zy)}var p={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:a,isSubscribed:l,trySubscribe:u,tryUnsubscribe:d,getListeners:function(){return r}};return p}var bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?$.useLayoutEffect:$.useEffect;function NP(e){var t=e.store,n=e.context,r=e.children,i=$.useMemo(function(){var l=Mb(t);return{store:t,subscription:l}},[t]),o=$.useMemo(function(){return t.getState()},[t]);bh(function(){var l=i.subscription;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),o!==t.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[i,o]);var a=n||Jr;return St.createElement(a.Provider,{value:i},r)}var $b={exports:{}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=typeof Symbol=="function"&&Symbol.for,Qp=lt?Symbol.for("react.element"):60103,Jp=lt?Symbol.for("react.portal"):60106,Dc=lt?Symbol.for("react.fragment"):60107,Mc=lt?Symbol.for("react.strict_mode"):60108,$c=lt?Symbol.for("react.profiler"):60114,Fc=lt?Symbol.for("react.provider"):60109,Uc=lt?Symbol.for("react.context"):60110,Zp=lt?Symbol.for("react.async_mode"):60111,jc=lt?Symbol.for("react.concurrent_mode"):60111,Vc=lt?Symbol.for("react.forward_ref"):60112,zc=lt?Symbol.for("react.suspense"):60113,xP=lt?Symbol.for("react.suspense_list"):60120,Wc=lt?Symbol.for("react.memo"):60115,Hc=lt?Symbol.for("react.lazy"):60116,RP=lt?Symbol.for("react.block"):60121,LP=lt?Symbol.for("react.fundamental"):60117,DP=lt?Symbol.for("react.responder"):60118,MP=lt?Symbol.for("react.scope"):60119;function tn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Qp:switch(e=e.type,e){case Zp:case jc:case Dc:case $c:case Mc:case zc:return e;default:switch(e=e&&e.$$typeof,e){case Uc:case Vc:case Hc:case Wc:case Fc:return e;default:return t}}case Jp:return t}}}function Fb(e){return tn(e)===jc}we.AsyncMode=Zp;we.ConcurrentMode=jc;we.ContextConsumer=Uc;we.ContextProvider=Fc;we.Element=Qp;we.ForwardRef=Vc;we.Fragment=Dc;we.Lazy=Hc;we.Memo=Wc;we.Portal=Jp;we.Profiler=$c;we.StrictMode=Mc;we.Suspense=zc;we.isAsyncMode=function(e){return Fb(e)||tn(e)===Zp};we.isConcurrentMode=Fb;we.isContextConsumer=function(e){return tn(e)===Uc};we.isContextProvider=function(e){return tn(e)===Fc};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qp};we.isForwardRef=function(e){return tn(e)===Vc};we.isFragment=function(e){return tn(e)===Dc};we.isLazy=function(e){return tn(e)===Hc};we.isMemo=function(e){return tn(e)===Wc};we.isPortal=function(e){return tn(e)===Jp};we.isProfiler=function(e){return tn(e)===$c};we.isStrictMode=function(e){return tn(e)===Mc};we.isSuspense=function(e){return tn(e)===zc};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Dc||e===jc||e===$c||e===Mc||e===zc||e===xP||typeof e=="object"&&e!==null&&(e.$$typeof===Hc||e.$$typeof===Wc||e.$$typeof===Fc||e.$$typeof===Uc||e.$$typeof===Vc||e.$$typeof===LP||e.$$typeof===DP||e.$$typeof===MP||e.$$typeof===RP)};we.typeOf=tn;$b.exports=we;var $P=$b.exports,Ub=$P,FP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},UP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jb={};jb[Ub.ForwardRef]=FP;jb[Ub.Memo]=UP;var Ne={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc=60103,Kc=60106,Zs=60107,el=60108,tl=60114,nl=60109,rl=60110,il=60112,ol=60113,em=60120,al=60115,sl=60116,Vb=60121,zb=60122,Wb=60117,Hb=60129,Bb=60131;if(typeof Symbol=="function"&&Symbol.for){var dt=Symbol.for;Bc=dt("react.element"),Kc=dt("react.portal"),Zs=dt("react.fragment"),el=dt("react.strict_mode"),tl=dt("react.profiler"),nl=dt("react.provider"),rl=dt("react.context"),il=dt("react.forward_ref"),ol=dt("react.suspense"),em=dt("react.suspense_list"),al=dt("react.memo"),sl=dt("react.lazy"),Vb=dt("react.block"),zb=dt("react.server.block"),Wb=dt("react.fundamental"),Hb=dt("react.debug_trace_mode"),Bb=dt("react.legacy_hidden")}function Pn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Bc:switch(e=e.type,e){case Zs:case tl:case el:case ol:case em:return e;default:switch(e=e&&e.$$typeof,e){case rl:case il:case sl:case al:case nl:return e;default:return t}}case Kc:return t}}}var jP=nl,VP=Bc,zP=il,WP=Zs,HP=sl,BP=al,KP=Kc,YP=tl,GP=el,qP=ol;Ne.ContextConsumer=rl;Ne.ContextProvider=jP;Ne.Element=VP;Ne.ForwardRef=zP;Ne.Fragment=WP;Ne.Lazy=HP;Ne.Memo=BP;Ne.Portal=KP;Ne.Profiler=YP;Ne.StrictMode=GP;Ne.Suspense=qP;Ne.isAsyncMode=function(){return!1};Ne.isConcurrentMode=function(){return!1};Ne.isContextConsumer=function(e){return Pn(e)===rl};Ne.isContextProvider=function(e){return Pn(e)===nl};Ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bc};Ne.isForwardRef=function(e){return Pn(e)===il};Ne.isFragment=function(e){return Pn(e)===Zs};Ne.isLazy=function(e){return Pn(e)===sl};Ne.isMemo=function(e){return Pn(e)===al};Ne.isPortal=function(e){return Pn(e)===Kc};Ne.isProfiler=function(e){return Pn(e)===tl};Ne.isStrictMode=function(e){return Pn(e)===el};Ne.isSuspense=function(e){return Pn(e)===ol};Ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Zs||e===tl||e===Hb||e===el||e===ol||e===em||e===Bb||typeof e=="object"&&e!==null&&(e.$$typeof===sl||e.$$typeof===al||e.$$typeof===nl||e.$$typeof===rl||e.$$typeof===il||e.$$typeof===Wb||e.$$typeof===Vb||e[0]===zb)};Ne.typeOf=Pn;function Kb(){var e=$.useContext(Jr);return e}function Yb(e){e===void 0&&(e=Jr);var t=e===Jr?Kb:function(){return $.useContext(e)};return function(){var r=t(),i=r.store;return i}}var XP=Yb();function QP(e){e===void 0&&(e=Jr);var t=e===Jr?XP:Yb(e);return function(){var r=t();return r.dispatch}}var ll=QP(),JP=function(t,n){return t===n};function ZP(e,t,n,r){var i=$.useReducer(function(O){return O+1},0),o=i[1],a=$.useMemo(function(){return Mb(n,r)},[n,r]),l=$.useRef(),u=$.useRef(),d=$.useRef(),p=$.useRef(),m=n.getState(),w;try{if(e!==u.current||m!==d.current||l.current){var S=e(m);p.current===void 0||!t(S,p.current)?w=S:w=p.current}else w=p.current}catch(O){throw l.current&&(O.message+=`
The error may be correlated with this previous error:
`+l.current.stack+`

`),O}return bh(function(){u.current=e,d.current=m,p.current=w,l.current=void 0}),bh(function(){function O(){try{var A=n.getState();if(A===d.current)return;var g=u.current(A);if(t(g,p.current))return;p.current=g,d.current=A}catch(v){l.current=v}o()}return a.onStateChange=O,a.trySubscribe(),O(),function(){return a.tryUnsubscribe()}},[n,a]),w}function eN(e){e===void 0&&(e=Jr);var t=e===Jr?Kb:function(){return $.useContext(e)};return function(r,i){i===void 0&&(i=JP);var o=t(),a=o.store,l=o.subscription,u=ZP(r,i,a,l);return $.useDebugValue(u),u}}var tm=eN();AP(Kp.unstable_batchedUpdates);const Gb="SIGN_IN",qb="SIGN_OUT";var Wy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},tN=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],l=e[n++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Qb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,l=a?e[i+1]:0,u=i+2<e.length,d=u?e[i+2]:0,p=o>>2,m=(o&3)<<4|l>>4;let w=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(w=64)),r.push(n[p],n[m],n[w],n[S])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xb(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tN(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const d=i<e.length?n[e.charAt(i)]:64;++i;const m=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||d==null||m==null)throw new nN;const w=o<<2|l>>4;if(r.push(w),d!==64){const S=l<<4&240|d>>2;if(r.push(S),m!==64){const O=d<<6&192|m;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class nN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rN=function(e){const t=Xb(e);return Qb.encodeByteArray(t,!0)},Jb=function(e){return rN(e).replace(/\./g,"")},Zb=function(e){try{return Qb.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function oc(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!iN(n)||(e[n]=oc(e[n],t[n]));return e}function iN(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=()=>oN().__FIREBASE_DEFAULTS__,sN=()=>{if(typeof process>"u"||typeof Wy>"u")return;const e=Wy.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},lN=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Zb(e[1]);return t&&JSON.parse(t)},nm=()=>{try{return aN()||sN()||lN()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},e0=()=>{var e;return(e=nm())===null||e===void 0?void 0:e.config},uN=e=>{var t;return(t=nm())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function t0(){var e;const t=(e=nm())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dN(){return typeof self=="object"&&self.self===self}function n0(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function rm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r0(){const e=et();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ac(){try{return typeof indexedDB=="object"}catch{return!1}}function hN(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN="FirebaseError";class Ft extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=pN,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?mN(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ft(i,l,r)}}function mN(e,t){return e.replace(gN,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const gN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function vN(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Th(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],a=t[i];if(By(o)&&By(a)){if(!Th(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function By(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $o(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Za(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function i0(e,t){const n=new yN(e,t);return n.subscribe.bind(n)}class yN{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_N(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=hd),i.error===void 0&&(i.error=hd),i.complete===void 0&&(i.complete=hd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _N(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function hd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e){return e&&e._delegate?e._delegate:e}class Zr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new cN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bN(t))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Ci){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ci){return this.instances.has(t)}getOptions(t=Ci){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wN(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ci){return this.component?this.component.multipleInstances?t:Ci:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wN(e){return e===Ci?void 0:e}function bN(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new EN(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=[];var ke;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ke||(ke={}));const o0={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},SN=ke.INFO,IN={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},kN=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=IN[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class om{constructor(t){this.name=t,this._logLevel=SN,this._logHandler=kN,this._userLogHandler=null,im.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ke))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?o0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...t),this._logHandler(this,ke.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...t),this._logHandler(this,ke.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...t),this._logHandler(this,ke.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...t),this._logHandler(this,ke.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...t),this._logHandler(this,ke.ERROR,...t)}}function CN(e){im.forEach(t=>{t.setLogLevel(e)})}function AN(e,t){for(const n of im){let r=null;t&&t.level&&(r=o0[t.level]),e===null?n.userLogHandler=null:n.userLogHandler=(i,o,...a)=>{const l=a.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");o>=(r??i.logLevel)&&e({level:ke[o].toLowerCase(),message:l,args:a,type:i.name})}}}const ON=(e,t)=>t.some(n=>e instanceof n);let Ky,Yy;function PN(){return Ky||(Ky=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NN(){return Yy||(Yy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a0=new WeakMap,Sh=new WeakMap,s0=new WeakMap,pd=new WeakMap,am=new WeakMap;function xN(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(Yr(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&a0.set(n,e)}).catch(()=>{}),am.set(t,e),t}function RN(e){if(Sh.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});Sh.set(e,t)}let Ih={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sh.get(e);if(t==="objectStoreNames")return e.objectStoreNames||s0.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function LN(e){Ih=e(Ih)}function DN(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(md(this),t,...n);return s0.set(r,t.sort?t.sort():[t]),Yr(r)}:NN().includes(e)?function(...t){return e.apply(md(this),t),Yr(a0.get(this))}:function(...t){return Yr(e.apply(md(this),t))}}function MN(e){return typeof e=="function"?DN(e):(e instanceof IDBTransaction&&RN(e),ON(e,PN())?new Proxy(e,Ih):e)}function Yr(e){if(e instanceof IDBRequest)return xN(e);if(pd.has(e))return pd.get(e);const t=MN(e);return t!==e&&(pd.set(e,t),am.set(t,e)),t}const md=e=>am.get(e);function $N(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),l=Yr(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Yr(a.result),u.oldVersion,u.newVersion,Yr(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const FN=["get","getKey","getAll","getAllKeys","count"],UN=["put","add","delete","clear"],gd=new Map;function Gy(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(gd.get(t))return gd.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=UN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FN.includes(n)))return;const o=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return gd.set(t,o),o}LN(e=>({...e,get:(t,n,r)=>Gy(t,n)||e.get(t,n,r),has:(t,n)=>!!Gy(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(VN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function VN(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kh="@firebase/app",qy="0.9.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new om("@firebase/app"),zN="@firebase/app-compat",WN="@firebase/analytics-compat",HN="@firebase/analytics",BN="@firebase/app-check-compat",KN="@firebase/app-check",YN="@firebase/auth",GN="@firebase/auth-compat",qN="@firebase/database",XN="@firebase/database-compat",QN="@firebase/functions",JN="@firebase/functions-compat",ZN="@firebase/installations",ex="@firebase/installations-compat",tx="@firebase/messaging",nx="@firebase/messaging-compat",rx="@firebase/performance",ix="@firebase/performance-compat",ox="@firebase/remote-config",ax="@firebase/remote-config-compat",sx="@firebase/storage",lx="@firebase/storage-compat",ux="@firebase/firestore",cx="@firebase/firestore-compat",fx="firebase",dx="10.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]",hx={[kh]:"fire-core",[zN]:"fire-core-compat",[HN]:"fire-analytics",[WN]:"fire-analytics-compat",[KN]:"fire-app-check",[BN]:"fire-app-check-compat",[YN]:"fire-auth",[GN]:"fire-auth-compat",[qN]:"fire-rtdb",[XN]:"fire-rtdb-compat",[QN]:"fire-fn",[JN]:"fire-fn-compat",[ZN]:"fire-iid",[ex]:"fire-iid-compat",[tx]:"fire-fcm",[nx]:"fire-fcm-compat",[rx]:"fire-perf",[ix]:"fire-perf-compat",[ox]:"fire-rc",[ax]:"fire-rc-compat",[sx]:"fire-gcs",[lx]:"fire-gcs-compat",[ux]:"fire-fst",[cx]:"fire-fst-compat","fire-js":"fire-js",[fx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Map,Os=new Map;function sc(e,t){try{e.container.addComponent(t)}catch(n){Zi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function l0(e,t){e.container.addOrOverwriteComponent(t)}function eo(e){const t=e.name;if(Os.has(t))return Zi.debug(`There were multiple attempts to register component ${t}.`),!1;Os.set(t,e);for(const n of ti.values())sc(n,e);return!0}function u0(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function px(e,t,n=ei){u0(e,t).clearInstance(n)}function mx(){Os.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fr=new so("app","Firebase",gx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vx=class{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=dx;function sm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ei,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=e0()),!n)throw fr.create("no-options");const o=ti.get(i);if(o){if(Th(n,o.options)&&Th(r,o.config))return o;throw fr.create("duplicate-app",{appName:i})}const a=new TN(i);for(const u of Os.values())a.addComponent(u);const l=new vx(n,r,a);return ti.set(i,l),l}function yx(e=ei){const t=ti.get(e);if(!t&&e===ei&&e0())return sm();if(!t)throw fr.create("no-app",{appName:e});return t}function _x(){return Array.from(ti.values())}async function c0(e){const t=e.name;ti.has(t)&&(ti.delete(t),await Promise.all(e.container.getProviders().map(n=>n.delete())),e.isDeleted=!0)}function Gr(e,t,n){var r;let i=(r=hx[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zi.warn(l.join(" "));return}eo(new Zr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function f0(e,t){if(e!==null&&typeof e!="function")throw fr.create("invalid-log-argument");AN(e,t)}function d0(e){CN(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="firebase-heartbeat-database",wx=1,Ps="firebase-heartbeat-store";let vd=null;function h0(){return vd||(vd=$N(Ex,wx,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ps)}}}).catch(e=>{throw fr.create("idb-open",{originalErrorMessage:e.message})})),vd}async function bx(e){try{return await(await h0()).transaction(Ps).objectStore(Ps).get(p0(e))}catch(t){if(t instanceof Ft)Zi.warn(t.message);else{const n=fr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Zi.warn(n.message)}}}async function Xy(e,t){try{const r=(await h0()).transaction(Ps,"readwrite");await r.objectStore(Ps).put(t,p0(e)),await r.done}catch(n){if(n instanceof Ft)Zi.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(r.message)}}}function p0(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=1024,Sx=30*24*60*60*1e3;class Ix{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Cx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qy();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Sx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qy(),{heartbeatsToSend:r,unsentEntries:i}=kx(this._heartbeatsCache.heartbeats),o=Jb(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Qy(){return new Date().toISOString().substring(0,10)}function kx(e,t=Tx){const n=[];let r=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Jy(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jy(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Cx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ac()?hN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Jy(e){return Jb(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(e){eo(new Zr("platform-logger",t=>new jN(t),"PRIVATE")),eo(new Zr("heartbeat",t=>new Ix(t),"PRIVATE")),Gr(kh,qy,e),Gr(kh,qy,"esm2017"),Gr("fire-js","")}Ax("");const Ox=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ft,SDK_VERSION:lo,_DEFAULT_ENTRY_NAME:ei,_addComponent:sc,_addOrOverwriteComponent:l0,_apps:ti,_clearComponents:mx,_components:Os,_getProvider:u0,_registerComponent:eo,_removeServiceInstance:px,deleteApp:c0,getApp:yx,getApps:_x,initializeApp:sm,onLog:f0,registerVersion:Gr,setLogLevel:d0},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(t,n){this._delegate=t,this.firebase=n,sc(t,new Zr("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),c0(this._delegate)))}_getService(t,n=ei){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(t,n=ei){this._delegate.container.getProvider(t).clearInstance(n)}_addComponent(t){sc(this._delegate,t)}_addOrOverwriteComponent(t){l0(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Zy=new so("app-compat","Firebase",Nx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(e){const t={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Gr,setLogLevel:d0,onLog:f0,apps:null,SDK_VERSION:lo,INTERNAL:{registerComponent:l,removeApp:r,useAsService:u,modularAPIs:Ox}};n.default=n,Object.defineProperty(n,"apps",{get:a});function r(d){delete t[d]}function i(d){if(d=d||ei,!Hy(t,d))throw Zy.create("no-app",{appName:d});return t[d]}i.App=e;function o(d,p={}){const m=sm(d,p);if(Hy(t,m.name))return t[m.name];const w=new e(m,n);return t[m.name]=w,w}function a(){return Object.keys(t).map(d=>t[d])}function l(d){const p=d.name,m=p.replace("-compat","");if(eo(d)&&d.type==="PUBLIC"){const w=(S=i())=>{if(typeof S[m]!="function")throw Zy.create("invalid-app-argument",{appName:p});return S[m]()};d.serviceProps!==void 0&&oc(w,d.serviceProps),n[m]=w,e.prototype[m]=function(...S){return this._getService.bind(this,p).apply(this,d.multipleInstances?S:[])}}return d.type==="PUBLIC"?n[m]:null}function u(d,p){return p==="serverAuth"?null:p}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(){const e=xx(Px);e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:m0,extendNamespace:t,createSubscribe:i0,ErrorFactory:so,deepExtend:oc});function t(n){oc(e,n)}return e}const Rx=m0();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new om("@firebase/app-compat"),Lx="@firebase/app-compat",Dx="0.2.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(e){Gr(Lx,Dx,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(dN()&&self.firebase!==void 0){e_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&e_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ul=Rx;Mx();var $x="firebase",Fx="10.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ul.registerVersion($x,Fx,"app-compat");function lm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}const Ya={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ao={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function g0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jx=Ux,Vx=g0,v0=new so("auth","Firebase",g0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new om("@firebase/auth");function zx(e,...t){lc.logLevel<=ke.WARN&&lc.warn(`Auth (${lo}): ${e}`,...t)}function Iu(e,...t){lc.logLevel<=ke.ERROR&&lc.error(`Auth (${lo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e,...t){throw um(e,...t)}function ht(e,...t){return um(e,...t)}function y0(e,t,n){const r=Object.assign(Object.assign({},Vx()),{[t]:n});return new so("auth","Firebase",r).create(t,{appName:e.name})}function ma(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&gt(e,"argument-error"),y0(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function um(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return v0.create(e,...t)}function j(e,t,...n){if(!e)throw um(t,...n)}function Hn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Iu(t),new Error(t)}function On(e,t){e||Hn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function cm(){return t_()==="http:"||t_()==="https:"}function t_(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cm()||n0()||"connection"in navigator)?navigator.onLine:!0}function Hx(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,n){this.shortDelay=t,this.longDelay=n,On(n>t,"Short delay should be less than long delay!"),this.isMobile=fN()||rm()}get(){return Wx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(e,t){On(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=new cl(3e4,6e4);function Ke(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ye(e,t,n,r,i={}){return E0(e,i,async()=>{let o={},a={};r&&(t==="GET"?a=r:o={body:JSON.stringify(r)});const l=pa(Object.assign({key:e.config.apiKey},a)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),_0.fetch()(w0(e,e.config.apiHost,n,l),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},o))})}async function E0(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bx),t);try{const i=new Gx(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw es(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw es(e,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw es(e,"email-already-in-use",a);if(u==="USER_DISABLED")throw es(e,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw y0(e,p,d);gt(e,p)}}catch(i){if(i instanceof Ft)throw i;gt(e,"network-request-failed",{message:String(i)})}}async function _r(e,t,n,r,i={}){const o=await Ye(e,t,n,r,i);return"mfaPendingCredential"in o&&gt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function w0(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?fm(e.config,i):`${e.config.apiScheme}://${i}`}function Yx(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gx{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),Kx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function es(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ht(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(e){return e!==void 0&&e.getResponse!==void 0}function r_(e){return e!==void 0&&e.enterprise!==void 0}class qx{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Yx(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(e){return(await Ye(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Qx(e,t){return Ye(e,"GET","/v2/recaptchaConfig",Ke(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(e,t){return Ye(e,"POST","/v1/accounts:delete",t)}async function Zx(e,t){return Ye(e,"POST","/v1/accounts:update",t)}async function eR(e,t){return Ye(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function tR(e,t=!1){const n=Ee(e),r=await n.getIdToken(t),i=Yc(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ds(yd(i.auth_time)),issuedAtTime:ds(yd(i.iat)),expirationTime:ds(yd(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function yd(e){return Number(e)*1e3}function Yc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zb(n);return i?JSON.parse(i):(Iu("Failed to decode base64 JWT payload"),null)}catch(i){return Iu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nR(e){const t=Yc(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ft&&rR(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function rR({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await hr(e,eR(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?sR(o.providerUserInfo):[],l=aR(e.providerData,a),u=e.isAnonymous,d=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new b0(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,m)}async function oR(e){const t=Ee(e);await xs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function aR(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function sR(e){return e.map(t=>{var{providerId:n}=t,r=lm(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(e,t){const n=await E0(e,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=w0(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_0.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uR(e,t){return Ye(e,"POST","/v2/accounts:revokeToken",Ke(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):nR(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return j(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await lR(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Rs;return r&&(j(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(j(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Wi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=lm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new b0(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await hr(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return tR(this,t)}reload(){return oR(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Wi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await hr(this,Jx(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,a,l,u,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,S=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,O=(a=n.photoURL)!==null&&a!==void 0?a:void 0,A=(l=n.tenantId)!==null&&l!==void 0?l:void 0,g=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(d=n.createdAt)!==null&&d!==void 0?d:void 0,E=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:I,emailVerified:_,isAnonymous:x,providerData:M,stsTokenManager:L}=n;j(I&&L,t,"internal-error");const B=Rs.fromJSON(this.name,L);j(typeof I=="string",t,"internal-error"),Or(m,t.name),Or(w,t.name),j(typeof _=="boolean",t,"internal-error"),j(typeof x=="boolean",t,"internal-error"),Or(S,t.name),Or(O,t.name),Or(A,t.name),Or(g,t.name),Or(v,t.name),Or(E,t.name);const W=new Wi({uid:I,auth:t,email:w,emailVerified:_,displayName:m,isAnonymous:x,photoURL:O,phoneNumber:S,tenantId:A,stsTokenManager:B,createdAt:v,lastLoginAt:E});return M&&Array.isArray(M)&&(W.providerData=M.map(ve=>Object.assign({},ve))),g&&(W._redirectEventId=g),W}static async _fromIdTokenResponse(t,n,r=!1){const i=new Rs;i.updateFromServerResponse(n);const o=new Wi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await xs(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;function Qt(e){On(e instanceof Function,"Expected a class definition");let t=i_.get(e);return t?(On(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,i_.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}T0.type="NONE";const oa=T0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e,t,n){return`firebase:${e}:${t}:${n}`}class Go{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Hi(this.userKey,i.apiKey,o),this.fullPersistenceKey=Hi("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Wi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Go(Qt(oa),t,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Qt(oa);const a=Hi(r,t.config.apiKey,t.name);let l=null;for(const d of n)try{const p=await d._get(a);if(p){const m=Wi._fromJSON(t,p);d!==o&&(l=m),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Go(o,t,r):(o=u[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Go(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(k0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(S0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(C0(t))return"Blackberry";if(A0(t))return"Webos";if(dm(t))return"Safari";if((t.includes("chrome/")||I0(t))&&!t.includes("edge/"))return"Chrome";if(fl(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function S0(e=et()){return/firefox\//i.test(e)}function dm(e=et()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function I0(e=et()){return/crios\//i.test(e)}function k0(e=et()){return/iemobile/i.test(e)}function fl(e=et()){return/android/i.test(e)}function C0(e=et()){return/blackberry/i.test(e)}function A0(e=et()){return/webos/i.test(e)}function ga(e=et()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function cR(e=et()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function fR(e=et()){var t;return ga(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function dR(){return r0()&&document.documentMode===10}function O0(e=et()){return ga(e)||fl(e)||A0(e)||C0(e)||/windows phone/i.test(e)||k0(e)}function hR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P0(e,t=[]){let n;switch(e){case"Browser":n=o_(et());break;case"Worker":n=`${o_(et())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${lo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((a,l)=>{try{const u=t(o);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(e,t={}){return Ye(e,"GET","/v2/passwordPolicy",Ke(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=6;class vR{constructor(t){var n,r,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:gR,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a_(this),this.idTokenSubscription=new a_(this),this.beforeStateQueue=new pR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Go.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await xs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Hx()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ee(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await mR(this),n=new vR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new so("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uR(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qt(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Go.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=t.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=P0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&zx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Be(e){return Ee(e)}class a_{constructor(t){this.auth=t,this.observer=null,this.addObserver=i0(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function hm(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=ht("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",_R().appendChild(r)})}function N0(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const ER="https://www.google.com/recaptcha/enterprise.js?render=",wR="recaptcha-enterprise",bR="NO_RECAPTCHA";class TR{constructor(t){this.type=wR,this.auth=Be(t)}async verify(t="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{Qx(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new qx(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(o,a,l){const u=window.grecaptcha;r_(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:t}).then(d=>{a(d)}).catch(()=>{a(bR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(l=>{if(!n&&r_(window.grecaptcha))i(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}hm(ER+l).then(()=>{i(l,o,a)}).catch(u=>{a(u)})}}).catch(l=>{a(l)})})}}async function s_(e,t,n,r=!1){const i=new TR(e);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ls(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await s_(e,t,n,n==="getOobCode");return r(e,o)}else return r(e,t).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await s_(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(o)})}function SR(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function IR(e,t,n){const r=Be(e);j(r._canInitEmulator,r,"emulator-config-failed"),j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=x0(t),{host:a,port:l}=kR(t),u=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||CR()}function x0(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function kR(e){const t=x0(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:l_(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:l_(a)}}}function l_(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function CR(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(t){return Hn("not implemented")}_linkToIdToken(t,n){return Hn("not implemented")}_getReauthenticationResolver(t){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R0(e,t){return Ye(e,"POST","/v1/accounts:resetPassword",Ke(e,t))}async function AR(e,t){return Ye(e,"POST","/v1/accounts:update",t)}async function OR(e,t){return Ye(e,"POST","/v1/accounts:signUp",t)}async function PR(e,t){return Ye(e,"POST","/v1/accounts:update",Ke(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(e,t){return _r(e,"POST","/v1/accounts:signInWithPassword",Ke(e,t))}async function Gc(e,t){return Ye(e,"POST","/v1/accounts:sendOobCode",Ke(e,t))}async function xR(e,t){return Gc(e,t)}async function RR(e,t){return Gc(e,t)}async function LR(e,t){return Gc(e,t)}async function DR(e,t){return Gc(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(e,t){return _r(e,"POST","/v1/accounts:signInWithEmailLink",Ke(e,t))}async function $R(e,t){return _r(e,"POST","/v1/accounts:signInWithEmailLink",Ke(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends va{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Ds(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ds(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ls(t,n,"signInWithPassword",NR);case"emailLink":return MR(t,{email:this._email,oobCode:this._password});default:gt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ls(t,r,"signUpPassword",OR);case"emailLink":return $R(t,{idToken:n,email:this._email,oobCode:this._password});default:gt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(e,t){return _r(e,"POST","/v1/accounts:signInWithIdp",Ke(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR="http://localhost";class qn extends va{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new qn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=lm(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new qn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return dr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,dr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,dr(t,n)}buildRequest(){const t={requestUri:FR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=pa(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(e,t){return Ye(e,"POST","/v1/accounts:sendVerificationCode",Ke(e,t))}async function jR(e,t){return _r(e,"POST","/v1/accounts:signInWithPhoneNumber",Ke(e,t))}async function VR(e,t){const n=await _r(e,"POST","/v1/accounts:signInWithPhoneNumber",Ke(e,t));if(n.temporaryProof)throw es(e,"account-exists-with-different-credential",n);return n}const zR={USER_NOT_FOUND:"user-not-found"};async function WR(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return _r(e,"POST","/v1/accounts:signInWithPhoneNumber",Ke(e,n),zR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends va{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,n){return new Bi({verificationId:t,verificationCode:n})}static _fromTokenResponse(t,n){return new Bi({phoneNumber:t,temporaryProof:n})}_getIdTokenResponse(t){return jR(t,this._makeVerificationRequest())}_linkToIdToken(t,n){return VR(t,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return WR(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){typeof t=="string"&&(t=JSON.parse(t));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=t;return!r&&!n&&!i&&!o?null:new Bi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BR(e){const t=$o(Za(e)).link,n=t?$o(Za(t)).deep_link_id:null,r=$o(Za(e)).deep_link_id;return(r?$o(Za(r)).link:null)||r||n||t||e}class qc{constructor(t){var n,r,i,o,a,l;const u=$o(Za(t)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=HR((i=u.mode)!==null&&i!==void 0?i:null);j(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=BR(t);try{return new qc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(t,n){return Ds._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=qc.parseLink(n);return j(r,"argument-error"),Ds._fromEmailAndCode(t,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Er{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class qo extends ya{static credentialFromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;return j("providerId"in n&&"signInMethod"in n,"argument-error"),qn._fromParams(n)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return j(t.idToken||t.accessToken,"argument-error"),qn._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return qo.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return qo.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:a,providerId:l}=t;if(!r&&!i&&!n&&!o||!l)return null;try{return new qo(l)._credential({idToken:n,accessToken:r,nonce:a,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends ya{constructor(){super("facebook.com")}static credential(t){return qn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mn.credentialFromTaggedObject(t)}static credentialFromError(t){return Mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mn.credential(t.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return qn._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return $n.credentialFromTaggedObject(t)}static credentialFromError(t){return $n.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ya{constructor(){super("github.com")}static credential(t){return qn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Fn.credentialFromTaggedObject(t)}static credentialFromError(t){return Fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Fn.credential(t.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="http://localhost";class aa extends va{constructor(t,n){super(t,t),this.pendingToken=n}_getIdTokenResponse(t){const n=this.buildRequest();return dr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,dr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,dr(t,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new aa(r,o)}static _create(t,n){return new aa(t,n)}buildRequest(){return{requestUri:KR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR="saml.";class uc extends Er{constructor(t){j(t.startsWith(YR),"argument-error"),super(t)}static credentialFromResult(t){return uc.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return uc.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const n=aa.fromJSON(t);return j(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:n,providerId:r}=t;if(!n||!r)return null;try{return aa._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ya{constructor(){super("twitter.com")}static credential(t,n){return qn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Un.credentialFromTaggedObject(t)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(e,t){return _r(e,"POST","/v1/accounts:signUp",Ke(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Wi._fromIdTokenResponse(t,r,i),a=u_(r);return new gn({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=u_(r);return new gn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function u_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(e){var t;const n=Be(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new gn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await L0(n,{returnSecureToken:!0}),i=await gn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends Ft{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new cc(t,n,r,i)}}function D0(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(e,o,t,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(e){return new Set(e.map(({providerId:t})=>t).filter(t=>!!t))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(e,t){const n=Ee(e);await Xc(!0,n,t);const{providerUserInfo:r}=await Zx(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=M0(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function pm(e,t,n=!1){const r=await hr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gn._forOperation(e,"link",r)}async function Xc(e,t,n){await xs(t);const r=M0(t.providerData),i=e===!1?"provider-already-linked":"no-such-provider";j(r.has(n)===e,t.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await hr(e,D0(r,i,t,e),n);j(o.idToken,r,"internal-error");const a=Yc(o.idToken);j(a,r,"internal-error");const{sub:l}=a;return j(e.uid===l,r,"user-mismatch"),gn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&gt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(e,t,n=!1){const r="signIn",i=await D0(e,r,t),o=await gn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function Qc(e,t){return F0(Be(e),t)}async function U0(e,t){const n=Ee(e);return await Xc(!1,n,t.providerId),pm(n,t)}async function j0(e,t){return $0(Ee(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(e,t){return _r(e,"POST","/v1/accounts:signInWithCustomToken",Ke(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(e,t){const n=Be(e),r=await XR(n,{token:t,returnSecureToken:!0}),i=await gn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,n){this.factorId=t,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(t,n){return"phoneInfo"in n?mm._fromServerResponse(t,n):"totpInfo"in n?gm._fromServerResponse(t,n):gt(t,"internal-error")}}class mm extends dl{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,n){return new mm(n)}}class gm extends dl{constructor(t){super("totp",t)}static _fromServerResponse(t,n){return new gm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(e,t,n){var r;j(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(e){const t=Be(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function JR(e,t,n){const r=Be(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&Jc(r,i,n),await Ls(r,i,"getOobCode",RR)}async function ZR(e,t,n){await R0(Ee(e),{oobCode:t,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vm(e),r})}async function eL(e,t){await PR(Ee(e),{oobCode:t})}async function V0(e,t){const n=Ee(e),r=await R0(n,{oobCode:t}),i=r.requestType;switch(j(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":j(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":j(r.mfaInfo,n,"internal-error");default:j(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=dl._fromServerResponse(Be(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function tL(e,t){const{data:n}=await V0(Ee(e),t);return n.email}async function nL(e,t,n){const r=Be(e),a=await Ls(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",L0).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vm(e),u}),l=await gn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function rL(e,t,n){return Qc(Ee(e),si.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vm(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iL(e,t,n){const r=Be(e),i={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};function o(a,l){j(l.handleCodeInApp,r,"argument-error"),l&&Jc(r,a,l)}o(i,n),await Ls(r,i,"getOobCode",LR)}function oL(e,t){const n=qc.parseLink(t);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function aL(e,t,n){const r=Ee(e),i=si.credentialWithLink(t,n||Ns());return j(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Qc(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sL(e,t){return Ye(e,"POST","/v1/accounts:createAuthUri",Ke(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lL(e,t){const n=cm()?Ns():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:i}=await sL(Ee(e),r);return i||[]}async function uL(e,t){const n=Ee(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&Jc(n.auth,i,t);const{email:o}=await xR(n.auth,i);o!==e.email&&await e.reload()}async function cL(e,t,n){const r=Ee(e),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&Jc(r.auth,o,n);const{email:a}=await DR(r.auth,o);a!==e.email&&await e.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fL(e,t){return Ye(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dL(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Ee(e),o={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await hr(r,fL(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function hL(e,t){return z0(Ee(e),t,null)}function pL(e,t){return z0(Ee(e),null,t)}async function z0(e,t,n){const{auth:r}=e,o={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(o.email=t),n&&(o.password=n);const a=await hr(e,AR(r,o));await e._updateTokensIfNecessary(a,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},o=e.isNewUser||e.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(e!=null&&e.idToken)){const a=(n=(t=Yc(e.idToken))===null||t===void 0?void 0:t.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(a){const l=a!=="anonymous"&&a!=="custom"?a:null;return new Xo(o,l)}}if(!r)return null;switch(r){case"facebook.com":return new gL(o,i);case"github.com":return new vL(o,i);case"google.com":return new yL(o,i);case"twitter.com":return new _L(o,i,e.screenName||null);case"custom":case"anonymous":return new Xo(o,null);default:return new Xo(o,r,i)}}class Xo{constructor(t,n,r={}){this.isNewUser=t,this.providerId=n,this.profile=r}}class W0 extends Xo{constructor(t,n,r,i){super(t,n,r),this.username=i}}class gL extends Xo{constructor(t,n){super(t,"facebook.com",n)}}class vL extends W0{constructor(t,n){super(t,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class yL extends Xo{constructor(t,n){super(t,"google.com",n)}}class _L extends W0{constructor(t,n,r){super(t,"twitter.com",n,r)}}function EL(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:mL(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,n,r){this.type=t,this.credential=n,this.user=r}static _fromIdtoken(t,n){return new Di("enroll",t,n)}static _fromMfaPendingCredential(t){return new Di("signin",t)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(t){var n,r;if(t!=null&&t.multiFactorSession){if(!((n=t.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Di._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(!((r=t.multiFactorSession)===null||r===void 0)&&r.idToken)return Di._fromIdtoken(t.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t,n,r){this.session=t,this.hints=n,this.signInResolver=r}static _fromError(t,n){const r=Be(t),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(l=>dl._fromServerResponse(r,l));j(i.mfaPendingCredential,r,"internal-error");const a=Di._fromMfaPendingCredential(i.mfaPendingCredential);return new ym(a,o,async l=>{const u=await l._process(r,a);delete i.mfaInfo,delete i.mfaPendingCredential;const d=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const p=await gn._fromIdTokenResponse(r,n.operationType,d);return await r._updateCurrentUser(p.user),p;case"reauthenticate":return j(n.user,r,"internal-error"),gn._forOperation(n.user,n.operationType,d);default:gt(r,"internal-error")}})}async resolveSignIn(t){const n=t;return this.signInResolver(n)}}function wL(e,t){var n;const r=Ee(e),i=t;return j(t.customData.operationType,r,"argument-error"),j((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),ym._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bL(e,t){return Ye(e,"POST","/v2/accounts/mfaEnrollment:start",Ke(e,t))}function TL(e,t){return Ye(e,"POST","/v2/accounts/mfaEnrollment:finalize",Ke(e,t))}function SL(e,t){return Ye(e,"POST","/v2/accounts/mfaEnrollment:withdraw",Ke(e,t))}class _m{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>dl._fromServerResponse(t.auth,r)))})}static _fromUser(t){return new _m(t)}async getSession(){return Di._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(t,n){const r=t,i=await this.getSession(),o=await hr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(t){const n=typeof t=="string"?t:t.uid,r=await this.user.getIdToken();try{const i=await hr(this.user,SL(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const _d=new WeakMap;function IL(e){const t=Ee(e);return _d.has(t)||_d.set(t,_m._fromUser(t)),_d.get(t)}const fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(){const e=et();return dm(e)||ga(e)}const CL=1e3,AL=10;class B0 extends H0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kL()&&hR(),this.fallbackToPolling=O0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);dR()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,AL):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},CL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}B0.type="LOCAL";const Em=B0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0 extends H0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}K0.type="SESSION";const to=K0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Zc(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,o)),u=await OL(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,u)=>{const d=hl("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const w=m;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(w.data.response);break;default:clearTimeout(p),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function NL(e){Ze().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function xL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RL(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function LL(){return wm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="firebaseLocalStorageDb",DL=1,dc="firebaseLocalStorage",G0="fbase_key";class pl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ef(e,t){return e.transaction([dc],t?"readwrite":"readonly").objectStore(dc)}function ML(){const e=indexedDB.deleteDatabase(Y0);return new pl(e).toPromise()}function Ch(){const e=indexedDB.open(Y0,DL);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(dc,{keyPath:G0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(dc)?t(r):(r.close(),await ML(),t(await Ch()))})})}async function c_(e,t,n){const r=ef(e,!0).put({[G0]:t,value:n});return new pl(r).toPromise()}async function $L(e,t){const n=ef(e,!1).get(t),r=await new pl(n).toPromise();return r===void 0?null:r.value}function f_(e,t){const n=ef(e,!0).delete(t);return new pl(n).toPromise()}const FL=800,UL=3;class q0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ch(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>UL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zc._getInstance(LL()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await xL(),!this.activeServiceWorker)return;this.sender=new PL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||RL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ch();return await c_(t,fc,"1"),await f_(t,fc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>c_(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>$L(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>f_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ef(i,!1).getAll();return new pl(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q0.type="LOCAL";const Ms=q0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(e,t){return Ye(e,"POST","/v2/accounts/mfaSignIn:start",Ke(e,t))}function VL(e,t){return Ye(e,"POST","/v2/accounts/mfaSignIn:finalize",Ke(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=500,WL=6e4,eu=1e12;class HL{constructor(t){this.auth=t,this.counter=eu,this._widgets=new Map}render(t,n){const r=this.counter;return this._widgets.set(r,new BL(t,this.auth.name,n||{})),this.counter++,r}reset(t){var n;const r=t||eu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(t){var n;const r=t||eu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(t){var n;const r=t||eu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class BL{constructor(t,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof t=="string"?document.getElementById(t):t;j(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=KL(50);const{callback:t,"expired-callback":n}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},WL)},zL))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function KL(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=N0("rcb"),YL=new cl(3e4,6e4),GL="https://www.google.com/recaptcha/api.js?";class qL{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=Ze().grecaptcha)===null||t===void 0)&&t.render)}load(t,n=""){return j(XL(n),t,"argument-error"),this.shouldResolveImmediately(n)&&n_(Ze().grecaptcha)?Promise.resolve(Ze().grecaptcha):new Promise((r,i)=>{const o=Ze().setTimeout(()=>{i(ht(t,"network-request-failed"))},YL.get());Ze()[Ed]=()=>{Ze().clearTimeout(o),delete Ze()[Ed];const l=Ze().grecaptcha;if(!l||!n_(l)){i(ht(t,"internal-error"));return}const u=l.render;l.render=(d,p)=>{const m=u(d,p);return this.counter++,m},this.hostLanguage=n,r(l)};const a=`${GL}?${pa({onload:Ed,render:"explicit",hl:n})}`;hm(a).catch(()=>{clearTimeout(o),i(ht(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var n;return!!(!((n=Ze().grecaptcha)===null||n===void 0)&&n.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function XL(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class QL{async load(t){return new HL(t)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="recaptcha",JL={theme:"light",type:"image"};let ZL=class{constructor(t,n,r=Object.assign({},JL)){this.parameters=r,this.type=X0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Be(t),this.isInvisible=this.parameters.size==="invisible",j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;j(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new QL:new qL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(t);return r||new Promise(i=>{const o=a=>{a&&(this.tokenChangeListeners.delete(o),i(a))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){j(!this.parameters.sitekey,this.auth,"argument-error"),j(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof t=="function")t(n);else if(typeof t=="string"){const r=Ze()[t];typeof r=="function"&&r(n)}}}assertNotDestroyed(){j(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const n=document.createElement("div");t.appendChild(n),t=n}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){j(cm()&&!wm(),this.auth,"internal-error"),await eD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await Xx(this.auth);j(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return j(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function eD(){let e=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}e=()=>t(),window.addEventListener("load",e)}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(t,n){this.verificationId=t,this.onConfirmation=n}confirm(t){const n=Bi._fromVerification(this.verificationId,t);return this.onConfirmation(n)}}async function tD(e,t,n){const r=Be(e),i=await tf(r,t,Ee(n));return new bm(i,o=>Qc(r,o))}async function nD(e,t,n){const r=Ee(e);await Xc(!1,r,"phone");const i=await tf(r.auth,t,Ee(n));return new bm(i,o=>U0(r,o))}async function rD(e,t,n){const r=Ee(e),i=await tf(r.auth,t,Ee(n));return new bm(i,o=>j0(r,o))}async function tf(e,t,n){var r;const i=await n.verify();try{j(typeof i=="string",e,"argument-error"),j(n.type===X0,e,"argument-error");let o;if(typeof t=="string"?o={phoneNumber:t}:o=t,"session"in o){const a=o.session;if("phoneNumber"in o)return j(a.type==="enroll",e,"internal-error"),(await bL(e,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{j(a.type==="signin",e,"internal-error");const l=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return j(l,e,"missing-multi-factor-info"),(await jL(e,{mfaPendingCredential:a.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:a}=await UR(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return a}}finally{n._reset()}}async function iD(e,t){await pm(Ee(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=class ku{constructor(t){this.providerId=ku.PROVIDER_ID,this.auth=Be(t)}verifyPhoneNumber(t,n){return tf(this.auth,t,Ee(n))}static credential(t,n){return Bi._fromVerification(t,n)}static credentialFromResult(t){const n=t;return ku.credentialFromTaggedObject(n)}static credentialFromError(t){return ku.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:n,temporaryProof:r}=t;return n&&r?Bi._fromTokenResponse(n,r):null}};no.PROVIDER_ID="phone";no.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e,t){return t?Qt(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm extends va{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return dr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return dr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return dr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function oD(e){return F0(e.auth,new Tm(e),e.bypassAuthState)}function aD(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),$0(n,new Tm(e),e.bypassAuthState)}async function sD(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),pm(n,new Tm(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return oD;case"linkViaPopup":case"linkViaRedirect":return sD;case"reauthViaPopup":case"reauthViaRedirect":return aD;default:gt(this.auth,"internal-error")}}resolve(t){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=new cl(2e3,1e4);async function uD(e,t,n){const r=Be(e);ma(e,t,Er);const i=uo(r,n);return new sr(r,"signInViaPopup",t,i).executeNotNull()}async function cD(e,t,n){const r=Ee(e);ma(r.auth,t,Er);const i=uo(r.auth,n);return new sr(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}async function fD(e,t,n){const r=Ee(e);ma(r.auth,t,Er);const i=uo(r.auth,n);return new sr(r.auth,"linkViaPopup",t,i,r).executeNotNull()}class sr extends Q0{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const t=hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,lD.get())};t()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="pendingRedirect",hs=new Map;class hD extends Q0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=hs.get(this.auth._key());if(!t){try{const r=await pD(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}hs.set(this.auth._key(),t)}return this.bypassAuthState||hs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pD(e,t){const n=Z0(t),r=J0(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Sm(e,t){return J0(e)._set(Z0(t),"true")}function mD(){hs.clear()}function Im(e,t){hs.set(e._key(),t)}function J0(e){return Qt(e._redirectPersistence)}function Z0(e){return Hi(dD,e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(e,t,n){return vD(e,t,n)}async function vD(e,t,n){const r=Be(e);ma(e,t,Er),await r._initializationPromise;const i=uo(r,n);return await Sm(i,r),i._openRedirect(r,t,"signInViaRedirect")}function yD(e,t,n){return _D(e,t,n)}async function _D(e,t,n){const r=Ee(e);ma(r.auth,t,Er),await r.auth._initializationPromise;const i=uo(r.auth,n);await Sm(i,r.auth);const o=await eT(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",o)}function ED(e,t,n){return wD(e,t,n)}async function wD(e,t,n){const r=Ee(e);ma(r.auth,t,Er),await r.auth._initializationPromise;const i=uo(r.auth,n);await Xc(!1,r,t.providerId),await Sm(i,r.auth);const o=await eT(r);return i._openRedirect(r.auth,t,"linkViaRedirect",o)}async function bD(e,t){return await Be(e)._initializationPromise,nf(e,t,!1)}async function nf(e,t,n=!1){const r=Be(e),i=uo(r,t),a=await new hD(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}async function eT(e){const t=hl(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=10*60*1e3;class tT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!SD(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!nT(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ht(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=TD&&this.cachedEventUids.clear(),this.cachedEventUids.has(d_(t))}saveEventToCache(t){this.cachedEventUids.add(d_(t)),this.lastProcessedEventTime=Date.now()}}function d_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function nT({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function SD(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nT(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(e,t={}){return Ye(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kD=/^https?/;async function CD(e){if(e.config.emulator)return;const{authorizedDomains:t}=await rT(e);for(const n of t)try{if(AD(n))return}catch{}gt(e,"unauthorized-domain")}function AD(e){const t=Ns(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!kD.test(n))return!1;if(ID.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=new cl(3e4,6e4);function h_(){const e=Ze().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function PD(e){return new Promise((t,n)=>{var r,i,o;function a(){h_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{h_(),n(ht(e,"network-request-failed"))},timeout:OD.get()})}if(!((i=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Ze().gapi)===null||o===void 0)&&o.load)a();else{const l=N0("iframefcb");return Ze()[l]=()=>{gapi.load?a():n(ht(e,"network-request-failed"))},hm(`https://apis.google.com/js/api.js?onload=${l}`).catch(u=>n(u))}}).catch(t=>{throw Cu=null,t})}let Cu=null;function ND(e){return Cu=Cu||PD(e),Cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=new cl(5e3,15e3),RD="__/auth/iframe",LD="emulator/auth/iframe",DD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $D(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?fm(t,LD):`https://${e.config.authDomain}/${RD}`,r={apiKey:t.apiKey,appName:e.name,v:lo},i=MD.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${pa(r).slice(1)}`}async function FD(e){const t=await ND(e),n=Ze().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:$D(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DD,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=ht(e,"network-request-failed"),l=Ze().setTimeout(()=>{o(a)},xD.get());function u(){Ze().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jD=500,VD=600,zD="_blank",WD="http://localhost";class p_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HD(e,t,n,r=jD,i=VD){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},UD),{width:r.toString(),height:i.toString(),top:o,left:a}),d=et().toLowerCase();n&&(l=I0(d)?zD:n),S0(d)&&(t=t||WD,u.scrollbars="yes");const p=Object.entries(u).reduce((w,[S,O])=>`${w}${S}=${O},`,"");if(fR(d)&&l!=="_self")return BD(t||"",l),new p_(null);const m=window.open(t||"",l,p);j(m,e,"popup-blocked");try{m.focus()}catch{}return new p_(m)}function BD(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD="__/auth/handler",YD="emulator/auth/handler",GD=encodeURIComponent("fac");async function Ah(e,t,n,r,i,o){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:lo,eventId:i};if(t instanceof Er){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",vN(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[p,m]of Object.entries(o||{}))a[p]=m}if(t instanceof ya){const p=t.getScopes().filter(m=>m!=="");p.length>0&&(a.scopes=p.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await e._getAppCheckToken(),d=u?`#${GD}=${encodeURIComponent(u)}`:"";return`${qD(e)}?${pa(l).slice(1)}${d}`}function qD({config:e}){return e.emulator?fm(e,YD):`https://${e.authDomain}/${KD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="webStorageSupport";class XD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=to,this._completeRedirectFn=nf,this._overrideRedirectResult=Im}async _openPopup(t,n,r,i){var o;On((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Ah(t,n,r,Ns(),i);return HD(t,a,hl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await Ah(t,n,r,Ns(),i);return NL(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(On(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await FD(t),r=new tT(t);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(wd,{type:wd},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[wd];a!==void 0&&n(!!a),gt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CD(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return O0()||dm()||ga()}}const QD=XD;class JD{constructor(t){this.factorId=t}_process(t,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(t,n.credential,r);case"signin":return this._finalizeSignIn(t,n.credential);default:return Hn("unexpected MultiFactorSessionType")}}}class km extends JD{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new km(t)}_finalizeEnroll(t,n,r){return TL(t,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,n){return VL(t,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class iT{constructor(){}static assertion(t){return km._fromCredential(t)}}iT.FACTOR_ID="phone";var m_="@firebase/auth",g_="1.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tM(e){eo(new Zr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:P0(e)},d=new yR(r,i,o,u);return SR(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),eo(new Zr("auth-internal",t=>{const n=Be(t.getProvider("auth").getImmediate());return(r=>new ZD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gr(m_,g_,eM(e)),Gr(m_,g_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=5*60;uN("authIdTokenMaxAge");tM("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=2e3;async function iM(e,t,n){var r;const{BuildInfo:i}=ro();On(t.sessionId,"AuthEvent did not contain a session ID");const o=await uM(t.sessionId),a={};return ga()?a.ibi=i.packageName:fl()?a.apn=i.packageName:gt(e,"operation-not-supported-in-this-environment"),i.displayName&&(a.appDisplayName=i.displayName),a.sessionId=o,Ah(e,n,t.type,void 0,(r=t.eventId)!==null&&r!==void 0?r:void 0,a)}async function oM(e){const{BuildInfo:t}=ro(),n={};ga()?n.iosBundleId=t.packageName:fl()?n.androidPackageName=t.packageName:gt(e,"operation-not-supported-in-this-environment"),await rT(e,n)}function aM(e){const{cordova:t}=ro();return new Promise(n=>{t.plugins.browsertab.isAvailable(r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,cR()?"_blank":"_system","location=yes"),n(i)})})}async function sM(e,t,n){const{cordova:r}=ro();let i=()=>{};try{await new Promise((o,a)=>{let l=null;function u(){var m;o();const w=(m=r.plugins.browsertab)===null||m===void 0?void 0:m.close;typeof w=="function"&&w(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function d(){l||(l=window.setTimeout(()=>{a(ht(e,"redirect-cancelled-by-user"))},rM))}function p(){(document==null?void 0:document.visibilityState)==="visible"&&d()}t.addPassiveListener(u),document.addEventListener("resume",d,!1),fl()&&document.addEventListener("visibilitychange",p,!1),i=()=>{t.removePassiveListener(u),document.removeEventListener("resume",d,!1),document.removeEventListener("visibilitychange",p,!1),l&&window.clearTimeout(l)}})}finally{i()}}function lM(e){var t,n,r,i,o,a,l,u,d,p;const m=ro();j(typeof((t=m==null?void 0:m.universalLinks)===null||t===void 0?void 0:t.subscribe)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),j(typeof((n=m==null?void 0:m.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),j(typeof((o=(i=(r=m==null?void 0:m.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((u=(l=(a=m==null?void 0:m.cordova)===null||a===void 0?void 0:a.plugins)===null||l===void 0?void 0:l.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((p=(d=m==null?void 0:m.cordova)===null||d===void 0?void 0:d.InAppBrowser)===null||p===void 0?void 0:p.open)=="function",e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function uM(e){const t=cM(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function cM(e){if(On(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=20;class dM extends tT{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function hM(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:gM(),postBody:null,tenantId:e.tenantId,error:ht(e,"no-auth-event")}}function pM(e,t){return Oh()._set(Ph(e),t)}async function v_(e){const t=await Oh()._get(Ph(e));return t&&await Oh()._remove(Ph(e)),t}function mM(e,t){var n,r;const i=yM(t);if(i.includes("/__/auth/callback")){const o=Au(i),a=o.firebaseError?vM(decodeURIComponent(o.firebaseError)):null,l=(r=(n=a==null?void 0:a.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=l?ht(l):null;return u?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function gM(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<fM;n++){const r=Math.floor(Math.random()*t.length);e.push(t.charAt(r))}return e.join("")}function Oh(){return Qt(Em)}function Ph(e){return Hi("authEvent",e.config.apiKey,e.name)}function vM(e){try{return JSON.parse(e)}catch{return null}}function yM(e){const t=Au(e),n=t.link?decodeURIComponent(t.link):void 0,r=Au(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return Au(i).link||i||r||n||e}function Au(e){if(!(e!=null&&e.includes("?")))return{};const[t,...n]=e.split("?");return $o(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=500;class EM{constructor(){this._redirectPersistence=to,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=nf,this._overrideRedirectResult=Im}async _initialize(t){const n=t._key();let r=this.eventManagers.get(n);return r||(r=new dM(t),this.eventManagers.set(n,r),this.attachCallbackListeners(t,r)),r}_openPopup(t){gt(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,n,r,i){lM(t);const o=await this._initialize(t);await o.initialized(),o.resetRedirect(),mD(),await this._originValidation(t);const a=hM(t,r,i);await pM(t,a);const l=await iM(t,a,n),u=await aM(l);return sM(t,o,u)}_isIframeWebStorageSupported(t,n){throw new Error("Method not implemented.")}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oM(t)),this.originValidationPromises[n]}attachCallbackListeners(t,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=ro(),a=setTimeout(async()=>{await v_(t),n.onEvent(y_())},_M),l=async p=>{clearTimeout(a);const m=await v_(t);let w=null;m&&(p!=null&&p.url)&&(w=mM(m,p.url)),n.onEvent(w||y_())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,l);const u=i,d=`${o.packageName.toLowerCase()}://`;ro().handleOpenURL=async p=>{if(p.toLowerCase().startsWith(d)&&l({url:p}),typeof u=="function")try{u(p)}catch(m){console.error(m)}}}}const wM=EM;function y_(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ht("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(e,t){Be(e)._logFramework(t)}var TM="@firebase/auth-compat",SM="0.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM=1e3;function ps(){var e;return((e=self==null?void 0:self.location)===null||e===void 0?void 0:e.protocol)||null}function kM(){return ps()==="http:"||ps()==="https:"}function oT(e=et()){return!!((ps()==="file:"||ps()==="ionic:"||ps()==="capacitor:")&&e.toLowerCase().match(/iphone|ipad|ipod|android/))}function CM(){return rm()||t0()}function AM(){return r0()&&(document==null?void 0:document.documentMode)===11}function OM(e=et()){return/Edge\/\d+/.test(e)}function PM(e=et()){return AM()||OM(e)}function aT(){try{const e=self.localStorage,t=hl();if(e)return e.setItem(t,"1"),e.removeItem(t),PM()?ac():!0}catch{return Cm()&&ac()}return!1}function Cm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function bd(){return(kM()||n0()||oT())&&!CM()&&aT()&&!Cm()}function sT(){return oT()&&typeof document<"u"}async function NM(){return sT()?new Promise(e=>{const t=setTimeout(()=>{e(!1)},IM);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})}):!1}function xM(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={LOCAL:"local",NONE:"none",SESSION:"session"},Ga=j,lT="persistence";function RM(e,t){if(Ga(Object.values(Xt).includes(t),e,"invalid-persistence-type"),rm()){Ga(t!==Xt.SESSION,e,"unsupported-persistence-type");return}if(t0()){Ga(t===Xt.NONE,e,"unsupported-persistence-type");return}if(Cm()){Ga(t===Xt.NONE||t===Xt.LOCAL&&ac(),e,"unsupported-persistence-type");return}Ga(t===Xt.NONE||aT(),e,"unsupported-persistence-type")}async function Nh(e){await e._initializationPromise;const t=uT(),n=Hi(lT,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function LM(e,t){const n=uT();if(!n)return[];const r=Hi(lT,e,t);switch(n.getItem(r)){case Xt.NONE:return[oa];case Xt.LOCAL:return[Ms,to];case Xt.SESSION:return[to];default:return[]}}function uT(){var e;try{return((e=xM())===null||e===void 0?void 0:e.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=j;class Fr{constructor(){this.browserResolver=Qt(QD),this.cordovaResolver=Qt(wM),this.underlyingResolver=null,this._redirectPersistence=to,this._completeRedirectFn=nf,this._overrideRedirectResult=Im}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,n,r,i)}async _openRedirect(t,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,n,r,i)}_isIframeWebStorageSupported(t,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,n)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return sT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return DM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await NM();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(e){return e.unwrap()}function MM(e){return e.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $M(e){return fT(e)}function FM(e,t){var n;const r=(n=t.customData)===null||n===void 0?void 0:n._tokenResponse;if((t==null?void 0:t.code)==="auth/multi-factor-auth-required"){const i=t;i.resolver=new UM(e,wL(e,t))}else if(r){const i=fT(t),o=t;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function fT(e){const{_tokenResponse:t}=e instanceof Ft?e.customData:e;if(!t)return null;if(!(e instanceof Ft)&&"temporaryProof"in t&&"phoneNumber"in t)return no.credentialFromResult(e);const n=t.providerId;if(!n||n===Ya.PASSWORD)return null;let r;switch(n){case Ya.GOOGLE:r=$n;break;case Ya.FACEBOOK:r=Mn;break;case Ya.GITHUB:r=Fn;break;case Ya.TWITTER:r=Un;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:a,pendingToken:l,nonce:u}=t;return!o&&!a&&!i&&!l?null:l?n.startsWith("saml.")?aa._create(n,l):qn._fromParams({providerId:n,signInMethod:n,pendingToken:l,idToken:i,accessToken:o}):new qo(n).credential({idToken:i,accessToken:o,rawNonce:u})}return e instanceof Ft?r.credentialFromError(e):r.credentialFromResult(e)}function Dt(e,t){return t.catch(n=>{throw n instanceof Ft&&FM(e,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:$M(n),additionalUserInfo:EL(n),user:lr.getOrCreate(i)}})}async function xh(e,t){const n=await t;return{verificationId:n.verificationId,confirm:r=>Dt(e,n.confirm(r))}}class UM{constructor(t,n){this.resolver=n,this.auth=MM(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return Dt(cT(this.auth),this.resolver.resolveSignIn(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this._delegate=t,this.multiFactor=IL(t)}static getOrCreate(t){return lr.USER_MAP.has(t)||lr.USER_MAP.set(t,new lr(t)),lr.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return Dt(this.auth,U0(this._delegate,t))}async linkWithPhoneNumber(t,n){return xh(this.auth,nD(this._delegate,t,n))}async linkWithPopup(t){return Dt(this.auth,fD(this._delegate,t,Fr))}async linkWithRedirect(t){return await Nh(Be(this.auth)),ED(this._delegate,t,Fr)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return Dt(this.auth,j0(this._delegate,t))}reauthenticateWithPhoneNumber(t,n){return xh(this.auth,rD(this._delegate,t,n))}reauthenticateWithPopup(t){return Dt(this.auth,cD(this._delegate,t,Fr))}async reauthenticateWithRedirect(t){return await Nh(Be(this.auth)),yD(this._delegate,t,Fr)}sendEmailVerification(t){return uL(this._delegate,t)}async unlink(t){return await qR(this._delegate,t),this}updateEmail(t){return hL(this._delegate,t)}updatePassword(t){return pL(this._delegate,t)}updatePhoneNumber(t){return iD(this._delegate,t)}updateProfile(t){return dL(this._delegate,t)}verifyBeforeUpdateEmail(t,n){return cL(this._delegate,t,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}lr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=j;class Rh{constructor(t,n){if(this.app=t,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=t.options;qa(r,"invalid-api-key",{appName:t.name}),qa(r,"invalid-api-key",{appName:t.name});const i=typeof window<"u"?Fr:void 0;this._delegate=n.initialize({options:{persistence:jM(r,t.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(jx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?lr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,n){IR(this._delegate,t,n)}applyActionCode(t){return eL(this._delegate,t)}checkActionCode(t){return V0(this._delegate,t)}confirmPasswordReset(t,n){return ZR(this._delegate,t,n)}async createUserWithEmailAndPassword(t,n){return Dt(this._delegate,nL(this._delegate,t,n))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return lL(this._delegate,t)}isSignInWithEmailLink(t){return oL(this._delegate,t)}async getRedirectResult(){qa(bd(),this._delegate,"operation-not-supported-in-this-environment");const t=await bD(this._delegate,Fr);return t?Dt(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){bM(this._delegate,t)}onAuthStateChanged(t,n,r){const{next:i,error:o,complete:a}=__(t,n,r);return this._delegate.onAuthStateChanged(i,o,a)}onIdTokenChanged(t,n,r){const{next:i,error:o,complete:a}=__(t,n,r);return this._delegate.onIdTokenChanged(i,o,a)}sendSignInLinkToEmail(t,n){return iL(this._delegate,t,n)}sendPasswordResetEmail(t,n){return JR(this._delegate,t,n||void 0)}async setPersistence(t){RM(this._delegate,t);let n;switch(t){case Xt.SESSION:n=to;break;case Xt.LOCAL:n=await Qt(Ms)._isAvailable()?Ms:Em;break;case Xt.NONE:n=oa;break;default:return gt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return Dt(this._delegate,GR(this._delegate))}signInWithCredential(t){return Dt(this._delegate,Qc(this._delegate,t))}signInWithCustomToken(t){return Dt(this._delegate,QR(this._delegate,t))}signInWithEmailAndPassword(t,n){return Dt(this._delegate,rL(this._delegate,t,n))}signInWithEmailLink(t,n){return Dt(this._delegate,aL(this._delegate,t,n))}signInWithPhoneNumber(t,n){return xh(this._delegate,tD(this._delegate,t,n))}async signInWithPopup(t){return qa(bd(),this._delegate,"operation-not-supported-in-this-environment"),Dt(this._delegate,uD(this._delegate,t,Fr))}async signInWithRedirect(t){return qa(bd(),this._delegate,"operation-not-supported-in-this-environment"),await Nh(this._delegate),gD(this._delegate,t,Fr)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return tL(this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Rh.Persistence=Xt;function __(e,t,n){let r=e;typeof e!="function"&&({next:r,error:t,complete:n}=e);const i=r;return{next:a=>i(a&&lr.getOrCreate(a)),error:t,complete:n}}function jM(e,t){const n=LM(e,t);if(typeof self<"u"&&!n.includes(Ms)&&n.push(Ms),typeof window<"u")for(const r of[Em,to])n.includes(r)||n.push(r);return n.includes(oa)||n.push(oa),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.providerId="phone",this._delegate=new no(cT(ul.auth()))}static credential(t,n){return no.credential(t,n)}verifyPhoneNumber(t,n){return this._delegate.verifyPhoneNumber(t,n)}unwrap(){return this._delegate}}Am.PHONE_SIGN_IN_METHOD=no.PHONE_SIGN_IN_METHOD;Am.PROVIDER_ID=no.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=j;class zM{constructor(t,n,r=ul.app()){var i;VM((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ZL(r.auth(),t,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM="auth-compat";function HM(e){e.INTERNAL.registerComponent(new Zr(WM,t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("auth");return new Rh(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ao.EMAIL_SIGNIN,PASSWORD_RESET:Ao.PASSWORD_RESET,RECOVER_EMAIL:Ao.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ao.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ao.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ao.VERIFY_EMAIL}},EmailAuthProvider:si,FacebookAuthProvider:Mn,GithubAuthProvider:Fn,GoogleAuthProvider:$n,OAuthProvider:qo,SAMLAuthProvider:uc,PhoneAuthProvider:Am,PhoneMultiFactorGenerator:iT,RecaptchaVerifier:zM,TwitterAuthProvider:Un,Auth:Rh,AuthCredential:va,Error:Ft}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(TM,SM)}HM(ul);const BM={apiKey:"AIzaSyCQqJfYsRbOpMIP0x-kv0lHrZD9S5gyKXM",authDomain:"react-firebase-file-mana-c59fe.firebaseapp.com",projectId:"react-firebase-file-mana-c59fe",storageBucket:"react-firebase-file-mana-c59fe.appspot.com",messagingSenderId:"749990304719",appId:"1:749990304719:web:12d946cd4007176b5f90ba"},Qo=ul.initializeApp(BM),Om=e=>({type:Gb,payload:e}),E_=e=>({type:qb}),KM=(e,t,n)=>r=>{Qo.auth().signInWithEmailAndPassword(e,t).then(i=>{r(Om({uid:i.user.uid,displayName:i.user.displayName,email:i.user.email})),n(!0)}).catch(i=>{alert("Invalid email or password!")})},YM=(e,t,n,r)=>i=>{Qo.auth().createUserWithEmailAndPassword(t,n).then(o=>{Qo.auth().currentUser.updateProfile({displayName:e}).then(async()=>{const a=await Qo.auth().currentUser;i(Om({uid:a.uid,name:a.displayName,email:a.email})),r(!0)}).catch(a=>{console.log(a)})}).catch(o=>{o.code==="auth/email-already-in-use"&&alert("This accont alredy registered!"),o.code==="auth/invalid-email"&&alert("Invalid email!"),o.code==="auth/weak-password"&&alert("Weak password!")})},dT=()=>e=>{Qo.auth().signOut().then(()=>{e(E_())}),e(E_())},GM=()=>e=>{Qo.auth().onAuthStateChanged(t=>{t&&e(Om({uid:t.uid,displayName:t.displayName,email:t.email}))})},qM=()=>{const e=ll();return $.useEffect(()=>{e(GM())},[]),D.jsx(D.Fragment,{children:D.jsx(tP,{})})};var XM={exports:{}};/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(e,t){(function(n,r){e.exports=r()})(Wk,function(){const n=new Map,r={set(f,s,c){n.has(f)||n.set(f,new Map);const h=n.get(f);if(!h.has(s)&&h.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(h.keys())[0]}.`);return}h.set(s,c)},get(f,s){return n.has(f)&&n.get(f).get(s)||null},remove(f,s){if(!n.has(f))return;const c=n.get(f);c.delete(s),c.size===0&&n.delete(f)}},i=1e6,o=1e3,a="transitionend",l=f=>(f&&window.CSS&&window.CSS.escape&&(f=f.replace(/#([^\s"#']+)/g,(s,c)=>`#${CSS.escape(c)}`)),f),u=f=>f==null?`${f}`:Object.prototype.toString.call(f).match(/\s([a-z]+)/i)[1].toLowerCase(),d=f=>{do f+=Math.floor(Math.random()*i);while(document.getElementById(f));return f},p=f=>{if(!f)return 0;let{transitionDuration:s,transitionDelay:c}=window.getComputedStyle(f);const h=Number.parseFloat(s),y=Number.parseFloat(c);return!h&&!y?0:(s=s.split(",")[0],c=c.split(",")[0],(Number.parseFloat(s)+Number.parseFloat(c))*o)},m=f=>{f.dispatchEvent(new Event(a))},w=f=>!f||typeof f!="object"?!1:(typeof f.jquery<"u"&&(f=f[0]),typeof f.nodeType<"u"),S=f=>w(f)?f.jquery?f[0]:f:typeof f=="string"&&f.length>0?document.querySelector(l(f)):null,O=f=>{if(!w(f)||f.getClientRects().length===0)return!1;const s=getComputedStyle(f).getPropertyValue("visibility")==="visible",c=f.closest("details:not([open])");if(!c)return s;if(c!==f){const h=f.closest("summary");if(h&&h.parentNode!==c||h===null)return!1}return s},A=f=>!f||f.nodeType!==Node.ELEMENT_NODE||f.classList.contains("disabled")?!0:typeof f.disabled<"u"?f.disabled:f.hasAttribute("disabled")&&f.getAttribute("disabled")!=="false",g=f=>{if(!document.documentElement.attachShadow)return null;if(typeof f.getRootNode=="function"){const s=f.getRootNode();return s instanceof ShadowRoot?s:null}return f instanceof ShadowRoot?f:f.parentNode?g(f.parentNode):null},v=()=>{},E=f=>{f.offsetHeight},I=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,_=[],x=f=>{document.readyState==="loading"?(_.length||document.addEventListener("DOMContentLoaded",()=>{for(const s of _)s()}),_.push(f)):f()},M=()=>document.documentElement.dir==="rtl",L=f=>{x(()=>{const s=I();if(s){const c=f.NAME,h=s.fn[c];s.fn[c]=f.jQueryInterface,s.fn[c].Constructor=f,s.fn[c].noConflict=()=>(s.fn[c]=h,f.jQueryInterface)}})},B=(f,s=[],c=f)=>typeof f=="function"?f(...s):c,W=(f,s,c=!0)=>{if(!c){B(f);return}const h=5,y=p(s)+h;let T=!1;const k=({target:N})=>{N===s&&(T=!0,s.removeEventListener(a,k),B(f))};s.addEventListener(a,k),setTimeout(()=>{T||m(s)},y)},ve=(f,s,c,h)=>{const y=f.length;let T=f.indexOf(s);return T===-1?!c&&h?f[y-1]:f[0]:(T+=c?1:-1,h&&(T=(T+y)%y),f[Math.max(0,Math.min(T,y-1))])},ge=/[^.]*(?=\..*)\.|.*/,je=/\..*/,vt=/::\d+$/,Ce={};let oe=1;const rn={mouseenter:"mouseover",mouseleave:"mouseout"},kt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ct(f,s){return s&&`${s}::${oe++}`||f.uidEvent||oe++}function ut(f){const s=Ct(f);return f.uidEvent=s,Ce[s]=Ce[s]||{},Ce[s]}function on(f,s){return function c(h){return xe(h,{delegateTarget:f}),c.oneOff&&P.off(f,h.type,s),s.apply(f,[h])}}function yn(f,s,c){return function h(y){const T=f.querySelectorAll(s);for(let{target:k}=y;k&&k!==this;k=k.parentNode)for(const N of T)if(N===k)return xe(y,{delegateTarget:k}),h.oneOff&&P.off(f,y.type,s,c),c.apply(k,[y])}}function At(f,s,c=null){return Object.values(f).find(h=>h.callable===s&&h.delegationSelector===c)}function an(f,s,c){const h=typeof s=="string",y=h?c:s||c;let T=Ae(f);return kt.has(T)||(T=f),[h,y,T]}function V(f,s,c,h,y){if(typeof s!="string"||!f)return;let[T,k,N]=an(s,c,h);s in rn&&(k=(Pe=>function(fe){if(!fe.relatedTarget||fe.relatedTarget!==fe.delegateTarget&&!fe.delegateTarget.contains(fe.relatedTarget))return Pe.call(this,fe)})(k));const F=ut(f),Y=F[N]||(F[N]={}),z=At(Y,k,T?c:null);if(z){z.oneOff=z.oneOff&&y;return}const le=Ct(k,s.replace(ge,"")),ce=T?yn(f,c,k):on(f,k);ce.delegationSelector=T?c:null,ce.callable=k,ce.oneOff=y,ce.uidEvent=le,Y[le]=ce,f.addEventListener(N,ce,T)}function X(f,s,c,h,y){const T=At(s[c],h,y);T&&(f.removeEventListener(c,T,!!y),delete s[c][T.uidEvent])}function ue(f,s,c,h){const y=s[c]||{};for(const[T,k]of Object.entries(y))T.includes(h)&&X(f,s,c,k.callable,k.delegationSelector)}function Ae(f){return f=f.replace(je,""),rn[f]||f}const P={on(f,s,c,h){V(f,s,c,h,!1)},one(f,s,c,h){V(f,s,c,h,!0)},off(f,s,c,h){if(typeof s!="string"||!f)return;const[y,T,k]=an(s,c,h),N=k!==s,F=ut(f),Y=F[k]||{},z=s.startsWith(".");if(typeof T<"u"){if(!Object.keys(Y).length)return;X(f,F,k,T,y?c:null);return}if(z)for(const le of Object.keys(F))ue(f,F,le,s.slice(1));for(const[le,ce]of Object.entries(Y)){const re=le.replace(vt,"");(!N||s.includes(re))&&X(f,F,k,ce.callable,ce.delegationSelector)}},trigger(f,s,c){if(typeof s!="string"||!f)return null;const h=I(),y=Ae(s),T=s!==y;let k=null,N=!0,F=!0,Y=!1;T&&h&&(k=h.Event(s,c),h(f).trigger(k),N=!k.isPropagationStopped(),F=!k.isImmediatePropagationStopped(),Y=k.isDefaultPrevented());const z=xe(new Event(s,{bubbles:N,cancelable:!0}),c);return Y&&z.preventDefault(),F&&f.dispatchEvent(z),z.defaultPrevented&&k&&k.preventDefault(),z}};function xe(f,s={}){for(const[c,h]of Object.entries(s))try{f[c]=h}catch{Object.defineProperty(f,c,{configurable:!0,get(){return h}})}return f}function yt(f){if(f==="true")return!0;if(f==="false")return!1;if(f===Number(f).toString())return Number(f);if(f===""||f==="null")return null;if(typeof f!="string")return f;try{return JSON.parse(decodeURIComponent(f))}catch{return f}}function sn(f){return f.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}const it={setDataAttribute(f,s,c){f.setAttribute(`data-bs-${sn(s)}`,c)},removeDataAttribute(f,s){f.removeAttribute(`data-bs-${sn(s)}`)},getDataAttributes(f){if(!f)return{};const s={},c=Object.keys(f.dataset).filter(h=>h.startsWith("bs")&&!h.startsWith("bsConfig"));for(const h of c){let y=h.replace(/^bs/,"");y=y.charAt(0).toLowerCase()+y.slice(1,y.length),s[y]=yt(f.dataset[h])}return s},getDataAttribute(f,s){return yt(f.getAttribute(`data-bs-${sn(s)}`))}};class Vt{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(s){return s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s}_mergeConfigObj(s,c){const h=w(c)?it.getDataAttribute(c,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...w(c)?it.getDataAttributes(c):{},...typeof s=="object"?s:{}}}_typeCheckConfig(s,c=this.constructor.DefaultType){for(const[h,y]of Object.entries(c)){const T=s[h],k=w(T)?"element":u(T);if(!new RegExp(y).test(k))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${k}" but expected type "${y}".`)}}}const lf="5.3.2";class zt extends Vt{constructor(s,c){super(),s=S(s),s&&(this._element=s,this._config=this._getConfig(c),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const s of Object.getOwnPropertyNames(this))this[s]=null}_queueCallback(s,c,h=!0){W(s,c,h)}_getConfig(s){return s=this._mergeConfigObj(s,this._element),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}static getInstance(s){return r.get(S(s),this.DATA_KEY)}static getOrCreateInstance(s,c={}){return this.getInstance(s)||new this(s,typeof c=="object"?c:null)}static get VERSION(){return lf}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(s){return`${s}${this.EVENT_KEY}`}}const Ea=f=>{let s=f.getAttribute("data-bs-target");if(!s||s==="#"){let c=f.getAttribute("href");if(!c||!c.includes("#")&&!c.startsWith("."))return null;c.includes("#")&&!c.startsWith("#")&&(c=`#${c.split("#")[1]}`),s=c&&c!=="#"?l(c.trim()):null}return s},Z={find(f,s=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(s,f))},findOne(f,s=document.documentElement){return Element.prototype.querySelector.call(s,f)},children(f,s){return[].concat(...f.children).filter(c=>c.matches(s))},parents(f,s){const c=[];let h=f.parentNode.closest(s);for(;h;)c.push(h),h=h.parentNode.closest(s);return c},prev(f,s){let c=f.previousElementSibling;for(;c;){if(c.matches(s))return[c];c=c.previousElementSibling}return[]},next(f,s){let c=f.nextElementSibling;for(;c;){if(c.matches(s))return[c];c=c.nextElementSibling}return[]},focusableChildren(f){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(c=>`${c}:not([tabindex^="-"])`).join(",");return this.find(s,f).filter(c=>!A(c)&&O(c))},getSelectorFromElement(f){const s=Ea(f);return s&&Z.findOne(s)?s:null},getElementFromSelector(f){const s=Ea(f);return s?Z.findOne(s):null},getMultipleElementsFromSelector(f){const s=Ea(f);return s?Z.find(s):[]}},co=(f,s="hide")=>{const c=`click.dismiss${f.EVENT_KEY}`,h=f.NAME;P.on(document,c,`[data-bs-dismiss="${h}"]`,function(y){if(["A","AREA"].includes(this.tagName)&&y.preventDefault(),A(this))return;const T=Z.getElementFromSelector(this)||this.closest(`.${h}`);f.getOrCreateInstance(T)[s]()})},li="alert",fo=".bs.alert",Nn=`close${fo}`,ui=`closed${fo}`,yl="fade",ho="show";class ci extends zt{static get NAME(){return li}close(){if(P.trigger(this._element,Nn).defaultPrevented)return;this._element.classList.remove(ho);const c=this._element.classList.contains(yl);this._queueCallback(()=>this._destroyElement(),this._element,c)}_destroyElement(){this._element.remove(),P.trigger(this._element,ui),this.dispose()}static jQueryInterface(s){return this.each(function(){const c=ci.getOrCreateInstance(this);if(typeof s=="string"){if(c[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);c[s](this)}})}}co(ci,"close"),L(ci);const xn="button",_l=".bs.button",El=".data-api",ff="active",wa='[data-bs-toggle="button"]',po=`click${_l}${El}`;class br extends zt{static get NAME(){return xn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ff))}static jQueryInterface(s){return this.each(function(){const c=br.getOrCreateInstance(this);s==="toggle"&&c[s]()})}}P.on(document,po,wa,f=>{f.preventDefault();const s=f.target.closest(wa);br.getOrCreateInstance(s).toggle()}),L(br);const ba="swipe",Tr=".bs.swipe",wl=`touchstart${Tr}`,df=`touchmove${Tr}`,bl=`touchend${Tr}`,hf=`pointerdown${Tr}`,b=`pointerup${Tr}`,C="touch",R="pen",H="pointer-event",G=40,ae={endCallback:null,leftCallback:null,rightCallback:null},te={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ee extends Vt{constructor(s,c){super(),this._element=s,!(!s||!ee.isSupported())&&(this._config=this._getConfig(c),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ae}static get DefaultType(){return te}static get NAME(){return ba}dispose(){P.off(this._element,Tr)}_start(s){if(!this._supportPointerEvents){this._deltaX=s.touches[0].clientX;return}this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX)}_end(s){this._eventIsPointerPenTouch(s)&&(this._deltaX=s.clientX-this._deltaX),this._handleSwipe(),B(this._config.endCallback)}_move(s){this._deltaX=s.touches&&s.touches.length>1?0:s.touches[0].clientX-this._deltaX}_handleSwipe(){const s=Math.abs(this._deltaX);if(s<=G)return;const c=s/this._deltaX;this._deltaX=0,c&&B(c>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,hf,s=>this._start(s)),P.on(this._element,b,s=>this._end(s)),this._element.classList.add(H)):(P.on(this._element,wl,s=>this._start(s)),P.on(this._element,df,s=>this._move(s)),P.on(this._element,bl,s=>this._end(s)))}_eventIsPointerPenTouch(s){return this._supportPointerEvents&&(s.pointerType===R||s.pointerType===C)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const J="carousel",Oe=".bs.carousel",se=".data-api",be="ArrowLeft",Re="ArrowRight",ct=500,_t="next",ln="prev",Rn="left",_n="right",Wt=`slide${Oe}`,Sr=`slid${Oe}`,Ta=`keydown${Oe}`,Sa=`mouseenter${Oe}`,Ia=`mouseleave${Oe}`,Ir=`dragstart${Oe}`,Te=`load${Oe}${se}`,Lt=`click${Oe}${se}`,Fe="carousel",un="active",Tl="slide",pf="carousel-item-end",KT="carousel-item-start",YT="carousel-item-next",GT="carousel-item-prev",Wm=".active",Hm=".carousel-item",qT=Wm+Hm,XT=".carousel-item img",QT=".carousel-indicators",JT="[data-bs-slide], [data-bs-slide-to]",ZT='[data-bs-ride="carousel"]',eS={[be]:_n,[Re]:Rn},tS={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},nS={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class mo extends zt{constructor(s,c){super(s,c),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Z.findOne(QT,this._element),this._addEventListeners(),this._config.ride===Fe&&this.cycle()}static get Default(){return tS}static get DefaultType(){return nS}static get NAME(){return J}next(){this._slide(_t)}nextWhenVisible(){!document.hidden&&O(this._element)&&this.next()}prev(){this._slide(ln)}pause(){this._isSliding&&m(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){P.one(this._element,Sr,()=>this.cycle());return}this.cycle()}}to(s){const c=this._getItems();if(s>c.length-1||s<0)return;if(this._isSliding){P.one(this._element,Sr,()=>this.to(s));return}const h=this._getItemIndex(this._getActive());if(h===s)return;const y=s>h?_t:ln;this._slide(y,c[s])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(s){return s.defaultInterval=s.interval,s}_addEventListeners(){this._config.keyboard&&P.on(this._element,Ta,s=>this._keydown(s)),this._config.pause==="hover"&&(P.on(this._element,Sa,()=>this.pause()),P.on(this._element,Ia,()=>this._maybeEnableCycle())),this._config.touch&&ee.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const h of Z.find(XT,this._element))P.on(h,Ir,y=>y.preventDefault());const c={leftCallback:()=>this._slide(this._directionToOrder(Rn)),rightCallback:()=>this._slide(this._directionToOrder(_n)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),ct+this._config.interval))}};this._swipeHelper=new ee(this._element,c)}_keydown(s){if(/input|textarea/i.test(s.target.tagName))return;const c=eS[s.key];c&&(s.preventDefault(),this._slide(this._directionToOrder(c)))}_getItemIndex(s){return this._getItems().indexOf(s)}_setActiveIndicatorElement(s){if(!this._indicatorsElement)return;const c=Z.findOne(Wm,this._indicatorsElement);c.classList.remove(un),c.removeAttribute("aria-current");const h=Z.findOne(`[data-bs-slide-to="${s}"]`,this._indicatorsElement);h&&(h.classList.add(un),h.setAttribute("aria-current","true"))}_updateInterval(){const s=this._activeElement||this._getActive();if(!s)return;const c=Number.parseInt(s.getAttribute("data-bs-interval"),10);this._config.interval=c||this._config.defaultInterval}_slide(s,c=null){if(this._isSliding)return;const h=this._getActive(),y=s===_t,T=c||ve(this._getItems(),h,y,this._config.wrap);if(T===h)return;const k=this._getItemIndex(T),N=re=>P.trigger(this._element,re,{relatedTarget:T,direction:this._orderToDirection(s),from:this._getItemIndex(h),to:k});if(N(Wt).defaultPrevented||!h||!T)return;const Y=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(k),this._activeElement=T;const z=y?KT:pf,le=y?YT:GT;T.classList.add(le),E(T),h.classList.add(z),T.classList.add(z);const ce=()=>{T.classList.remove(z,le),T.classList.add(un),h.classList.remove(un,le,z),this._isSliding=!1,N(Sr)};this._queueCallback(ce,h,this._isAnimated()),Y&&this.cycle()}_isAnimated(){return this._element.classList.contains(Tl)}_getActive(){return Z.findOne(qT,this._element)}_getItems(){return Z.find(Hm,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(s){return M()?s===Rn?ln:_t:s===Rn?_t:ln}_orderToDirection(s){return M()?s===ln?Rn:_n:s===ln?_n:Rn}static jQueryInterface(s){return this.each(function(){const c=mo.getOrCreateInstance(this,s);if(typeof s=="number"){c.to(s);return}if(typeof s=="string"){if(c[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);c[s]()}})}}P.on(document,Lt,JT,function(f){const s=Z.getElementFromSelector(this);if(!s||!s.classList.contains(Fe))return;f.preventDefault();const c=mo.getOrCreateInstance(s),h=this.getAttribute("data-bs-slide-to");if(h){c.to(h),c._maybeEnableCycle();return}if(it.getDataAttribute(this,"slide")==="next"){c.next(),c._maybeEnableCycle();return}c.prev(),c._maybeEnableCycle()}),P.on(window,Te,()=>{const f=Z.find(ZT);for(const s of f)mo.getOrCreateInstance(s)}),L(mo);const rS="collapse",ka=".bs.collapse",iS=".data-api",oS=`show${ka}`,aS=`shown${ka}`,sS=`hide${ka}`,lS=`hidden${ka}`,uS=`click${ka}${iS}`,mf="show",go="collapse",Sl="collapsing",cS="collapsed",fS=`:scope .${go} .${go}`,dS="collapse-horizontal",hS="width",pS="height",mS=".collapse.show, .collapse.collapsing",gf='[data-bs-toggle="collapse"]',gS={parent:null,toggle:!0},vS={parent:"(null|element)",toggle:"boolean"};class vo extends zt{constructor(s,c){super(s,c),this._isTransitioning=!1,this._triggerArray=[];const h=Z.find(gf);for(const y of h){const T=Z.getSelectorFromElement(y),k=Z.find(T).filter(N=>N===this._element);T!==null&&k.length&&this._triggerArray.push(y)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return gS}static get DefaultType(){return vS}static get NAME(){return rS}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let s=[];if(this._config.parent&&(s=this._getFirstLevelChildren(mS).filter(N=>N!==this._element).map(N=>vo.getOrCreateInstance(N,{toggle:!1}))),s.length&&s[0]._isTransitioning||P.trigger(this._element,oS).defaultPrevented)return;for(const N of s)N.hide();const h=this._getDimension();this._element.classList.remove(go),this._element.classList.add(Sl),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const y=()=>{this._isTransitioning=!1,this._element.classList.remove(Sl),this._element.classList.add(go,mf),this._element.style[h]="",P.trigger(this._element,aS)},k=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(y,this._element,!0),this._element.style[h]=`${this._element[k]}px`}hide(){if(this._isTransitioning||!this._isShown()||P.trigger(this._element,sS).defaultPrevented)return;const c=this._getDimension();this._element.style[c]=`${this._element.getBoundingClientRect()[c]}px`,E(this._element),this._element.classList.add(Sl),this._element.classList.remove(go,mf);for(const y of this._triggerArray){const T=Z.getElementFromSelector(y);T&&!this._isShown(T)&&this._addAriaAndCollapsedClass([y],!1)}this._isTransitioning=!0;const h=()=>{this._isTransitioning=!1,this._element.classList.remove(Sl),this._element.classList.add(go),P.trigger(this._element,lS)};this._element.style[c]="",this._queueCallback(h,this._element,!0)}_isShown(s=this._element){return s.classList.contains(mf)}_configAfterMerge(s){return s.toggle=!!s.toggle,s.parent=S(s.parent),s}_getDimension(){return this._element.classList.contains(dS)?hS:pS}_initializeChildren(){if(!this._config.parent)return;const s=this._getFirstLevelChildren(gf);for(const c of s){const h=Z.getElementFromSelector(c);h&&this._addAriaAndCollapsedClass([c],this._isShown(h))}}_getFirstLevelChildren(s){const c=Z.find(fS,this._config.parent);return Z.find(s,this._config.parent).filter(h=>!c.includes(h))}_addAriaAndCollapsedClass(s,c){if(s.length)for(const h of s)h.classList.toggle(cS,!c),h.setAttribute("aria-expanded",c)}static jQueryInterface(s){const c={};return typeof s=="string"&&/show|hide/.test(s)&&(c.toggle=!1),this.each(function(){const h=vo.getOrCreateInstance(this,c);if(typeof s=="string"){if(typeof h[s]>"u")throw new TypeError(`No method named "${s}"`);h[s]()}})}}P.on(document,uS,gf,function(f){(f.target.tagName==="A"||f.delegateTarget&&f.delegateTarget.tagName==="A")&&f.preventDefault();for(const s of Z.getMultipleElementsFromSelector(this))vo.getOrCreateInstance(s,{toggle:!1}).toggle()}),L(vo);var Ot="top",Ht="bottom",Bt="right",Pt="left",Il="auto",yo=[Ot,Ht,Bt,Pt],fi="start",_o="end",Bm="clippingParents",vf="viewport",Eo="popper",Km="reference",yf=yo.reduce(function(f,s){return f.concat([s+"-"+fi,s+"-"+_o])},[]),_f=[].concat(yo,[Il]).reduce(function(f,s){return f.concat([s,s+"-"+fi,s+"-"+_o])},[]),Ym="beforeRead",Gm="read",qm="afterRead",Xm="beforeMain",Qm="main",Jm="afterMain",Zm="beforeWrite",eg="write",tg="afterWrite",ng=[Ym,Gm,qm,Xm,Qm,Jm,Zm,eg,tg];function Ln(f){return f?(f.nodeName||"").toLowerCase():null}function Kt(f){if(f==null)return window;if(f.toString()!=="[object Window]"){var s=f.ownerDocument;return s&&s.defaultView||window}return f}function di(f){var s=Kt(f).Element;return f instanceof s||f instanceof Element}function cn(f){var s=Kt(f).HTMLElement;return f instanceof s||f instanceof HTMLElement}function Ef(f){if(typeof ShadowRoot>"u")return!1;var s=Kt(f).ShadowRoot;return f instanceof s||f instanceof ShadowRoot}function yS(f){var s=f.state;Object.keys(s.elements).forEach(function(c){var h=s.styles[c]||{},y=s.attributes[c]||{},T=s.elements[c];!cn(T)||!Ln(T)||(Object.assign(T.style,h),Object.keys(y).forEach(function(k){var N=y[k];N===!1?T.removeAttribute(k):T.setAttribute(k,N===!0?"":N)}))})}function _S(f){var s=f.state,c={popper:{position:s.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(s.elements.popper.style,c.popper),s.styles=c,s.elements.arrow&&Object.assign(s.elements.arrow.style,c.arrow),function(){Object.keys(s.elements).forEach(function(h){var y=s.elements[h],T=s.attributes[h]||{},k=Object.keys(s.styles.hasOwnProperty(h)?s.styles[h]:c[h]),N=k.reduce(function(F,Y){return F[Y]="",F},{});!cn(y)||!Ln(y)||(Object.assign(y.style,N),Object.keys(T).forEach(function(F){y.removeAttribute(F)}))})}}const wf={name:"applyStyles",enabled:!0,phase:"write",fn:yS,effect:_S,requires:["computeStyles"]};function Dn(f){return f.split("-")[0]}var hi=Math.max,kl=Math.min,wo=Math.round;function bf(){var f=navigator.userAgentData;return f!=null&&f.brands&&Array.isArray(f.brands)?f.brands.map(function(s){return s.brand+"/"+s.version}).join(" "):navigator.userAgent}function rg(){return!/^((?!chrome|android).)*safari/i.test(bf())}function bo(f,s,c){s===void 0&&(s=!1),c===void 0&&(c=!1);var h=f.getBoundingClientRect(),y=1,T=1;s&&cn(f)&&(y=f.offsetWidth>0&&wo(h.width)/f.offsetWidth||1,T=f.offsetHeight>0&&wo(h.height)/f.offsetHeight||1);var k=di(f)?Kt(f):window,N=k.visualViewport,F=!rg()&&c,Y=(h.left+(F&&N?N.offsetLeft:0))/y,z=(h.top+(F&&N?N.offsetTop:0))/T,le=h.width/y,ce=h.height/T;return{width:le,height:ce,top:z,right:Y+le,bottom:z+ce,left:Y,x:Y,y:z}}function Tf(f){var s=bo(f),c=f.offsetWidth,h=f.offsetHeight;return Math.abs(s.width-c)<=1&&(c=s.width),Math.abs(s.height-h)<=1&&(h=s.height),{x:f.offsetLeft,y:f.offsetTop,width:c,height:h}}function ig(f,s){var c=s.getRootNode&&s.getRootNode();if(f.contains(s))return!0;if(c&&Ef(c)){var h=s;do{if(h&&f.isSameNode(h))return!0;h=h.parentNode||h.host}while(h)}return!1}function Qn(f){return Kt(f).getComputedStyle(f)}function ES(f){return["table","td","th"].indexOf(Ln(f))>=0}function kr(f){return((di(f)?f.ownerDocument:f.document)||window.document).documentElement}function Cl(f){return Ln(f)==="html"?f:f.assignedSlot||f.parentNode||(Ef(f)?f.host:null)||kr(f)}function og(f){return!cn(f)||Qn(f).position==="fixed"?null:f.offsetParent}function wS(f){var s=/firefox/i.test(bf()),c=/Trident/i.test(bf());if(c&&cn(f)){var h=Qn(f);if(h.position==="fixed")return null}var y=Cl(f);for(Ef(y)&&(y=y.host);cn(y)&&["html","body"].indexOf(Ln(y))<0;){var T=Qn(y);if(T.transform!=="none"||T.perspective!=="none"||T.contain==="paint"||["transform","perspective"].indexOf(T.willChange)!==-1||s&&T.willChange==="filter"||s&&T.filter&&T.filter!=="none")return y;y=y.parentNode}return null}function Ca(f){for(var s=Kt(f),c=og(f);c&&ES(c)&&Qn(c).position==="static";)c=og(c);return c&&(Ln(c)==="html"||Ln(c)==="body"&&Qn(c).position==="static")?s:c||wS(f)||s}function Sf(f){return["top","bottom"].indexOf(f)>=0?"x":"y"}function Aa(f,s,c){return hi(f,kl(s,c))}function bS(f,s,c){var h=Aa(f,s,c);return h>c?c:h}function ag(){return{top:0,right:0,bottom:0,left:0}}function sg(f){return Object.assign({},ag(),f)}function lg(f,s){return s.reduce(function(c,h){return c[h]=f,c},{})}var TS=function(s,c){return s=typeof s=="function"?s(Object.assign({},c.rects,{placement:c.placement})):s,sg(typeof s!="number"?s:lg(s,yo))};function SS(f){var s,c=f.state,h=f.name,y=f.options,T=c.elements.arrow,k=c.modifiersData.popperOffsets,N=Dn(c.placement),F=Sf(N),Y=[Pt,Bt].indexOf(N)>=0,z=Y?"height":"width";if(!(!T||!k)){var le=TS(y.padding,c),ce=Tf(T),re=F==="y"?Ot:Pt,Pe=F==="y"?Ht:Bt,fe=c.rects.reference[z]+c.rects.reference[F]-k[F]-c.rects.popper[z],_e=k[F]-c.rects.reference[F],Le=Ca(T),Ge=Le?F==="y"?Le.clientHeight||0:Le.clientWidth||0:0,qe=fe/2-_e/2,pe=le[re],Se=Ge-ce[z]-le[Pe],Ie=Ge/2-ce[z]/2+qe,Ve=Aa(pe,Ie,Se),ft=F;c.modifiersData[h]=(s={},s[ft]=Ve,s.centerOffset=Ve-Ie,s)}}function IS(f){var s=f.state,c=f.options,h=c.element,y=h===void 0?"[data-popper-arrow]":h;y!=null&&(typeof y=="string"&&(y=s.elements.popper.querySelector(y),!y)||ig(s.elements.popper,y)&&(s.elements.arrow=y))}const ug={name:"arrow",enabled:!0,phase:"main",fn:SS,effect:IS,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function To(f){return f.split("-")[1]}var kS={top:"auto",right:"auto",bottom:"auto",left:"auto"};function CS(f,s){var c=f.x,h=f.y,y=s.devicePixelRatio||1;return{x:wo(c*y)/y||0,y:wo(h*y)/y||0}}function cg(f){var s,c=f.popper,h=f.popperRect,y=f.placement,T=f.variation,k=f.offsets,N=f.position,F=f.gpuAcceleration,Y=f.adaptive,z=f.roundOffsets,le=f.isFixed,ce=k.x,re=ce===void 0?0:ce,Pe=k.y,fe=Pe===void 0?0:Pe,_e=typeof z=="function"?z({x:re,y:fe}):{x:re,y:fe};re=_e.x,fe=_e.y;var Le=k.hasOwnProperty("x"),Ge=k.hasOwnProperty("y"),qe=Pt,pe=Ot,Se=window;if(Y){var Ie=Ca(c),Ve="clientHeight",ft="clientWidth";if(Ie===Kt(c)&&(Ie=kr(c),Qn(Ie).position!=="static"&&N==="absolute"&&(Ve="scrollHeight",ft="scrollWidth")),Ie=Ie,y===Ot||(y===Pt||y===Bt)&&T===_o){pe=Ht;var ot=le&&Ie===Se&&Se.visualViewport?Se.visualViewport.height:Ie[Ve];fe-=ot-h.height,fe*=F?1:-1}if(y===Pt||(y===Ot||y===Ht)&&T===_o){qe=Bt;var tt=le&&Ie===Se&&Se.visualViewport?Se.visualViewport.width:Ie[ft];re-=tt-h.width,re*=F?1:-1}}var Et=Object.assign({position:N},Y&&kS),wn=z===!0?CS({x:re,y:fe},Kt(c)):{x:re,y:fe};if(re=wn.x,fe=wn.y,F){var Nt;return Object.assign({},Et,(Nt={},Nt[pe]=Ge?"0":"",Nt[qe]=Le?"0":"",Nt.transform=(Se.devicePixelRatio||1)<=1?"translate("+re+"px, "+fe+"px)":"translate3d("+re+"px, "+fe+"px, 0)",Nt))}return Object.assign({},Et,(s={},s[pe]=Ge?fe+"px":"",s[qe]=Le?re+"px":"",s.transform="",s))}function AS(f){var s=f.state,c=f.options,h=c.gpuAcceleration,y=h===void 0?!0:h,T=c.adaptive,k=T===void 0?!0:T,N=c.roundOffsets,F=N===void 0?!0:N,Y={placement:Dn(s.placement),variation:To(s.placement),popper:s.elements.popper,popperRect:s.rects.popper,gpuAcceleration:y,isFixed:s.options.strategy==="fixed"};s.modifiersData.popperOffsets!=null&&(s.styles.popper=Object.assign({},s.styles.popper,cg(Object.assign({},Y,{offsets:s.modifiersData.popperOffsets,position:s.options.strategy,adaptive:k,roundOffsets:F})))),s.modifiersData.arrow!=null&&(s.styles.arrow=Object.assign({},s.styles.arrow,cg(Object.assign({},Y,{offsets:s.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:F})))),s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-placement":s.placement})}const If={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:AS,data:{}};var Al={passive:!0};function OS(f){var s=f.state,c=f.instance,h=f.options,y=h.scroll,T=y===void 0?!0:y,k=h.resize,N=k===void 0?!0:k,F=Kt(s.elements.popper),Y=[].concat(s.scrollParents.reference,s.scrollParents.popper);return T&&Y.forEach(function(z){z.addEventListener("scroll",c.update,Al)}),N&&F.addEventListener("resize",c.update,Al),function(){T&&Y.forEach(function(z){z.removeEventListener("scroll",c.update,Al)}),N&&F.removeEventListener("resize",c.update,Al)}}const kf={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:OS,data:{}};var PS={left:"right",right:"left",bottom:"top",top:"bottom"};function Ol(f){return f.replace(/left|right|bottom|top/g,function(s){return PS[s]})}var NS={start:"end",end:"start"};function fg(f){return f.replace(/start|end/g,function(s){return NS[s]})}function Cf(f){var s=Kt(f),c=s.pageXOffset,h=s.pageYOffset;return{scrollLeft:c,scrollTop:h}}function Af(f){return bo(kr(f)).left+Cf(f).scrollLeft}function xS(f,s){var c=Kt(f),h=kr(f),y=c.visualViewport,T=h.clientWidth,k=h.clientHeight,N=0,F=0;if(y){T=y.width,k=y.height;var Y=rg();(Y||!Y&&s==="fixed")&&(N=y.offsetLeft,F=y.offsetTop)}return{width:T,height:k,x:N+Af(f),y:F}}function RS(f){var s,c=kr(f),h=Cf(f),y=(s=f.ownerDocument)==null?void 0:s.body,T=hi(c.scrollWidth,c.clientWidth,y?y.scrollWidth:0,y?y.clientWidth:0),k=hi(c.scrollHeight,c.clientHeight,y?y.scrollHeight:0,y?y.clientHeight:0),N=-h.scrollLeft+Af(f),F=-h.scrollTop;return Qn(y||c).direction==="rtl"&&(N+=hi(c.clientWidth,y?y.clientWidth:0)-T),{width:T,height:k,x:N,y:F}}function Of(f){var s=Qn(f),c=s.overflow,h=s.overflowX,y=s.overflowY;return/auto|scroll|overlay|hidden/.test(c+y+h)}function dg(f){return["html","body","#document"].indexOf(Ln(f))>=0?f.ownerDocument.body:cn(f)&&Of(f)?f:dg(Cl(f))}function Oa(f,s){var c;s===void 0&&(s=[]);var h=dg(f),y=h===((c=f.ownerDocument)==null?void 0:c.body),T=Kt(h),k=y?[T].concat(T.visualViewport||[],Of(h)?h:[]):h,N=s.concat(k);return y?N:N.concat(Oa(Cl(k)))}function Pf(f){return Object.assign({},f,{left:f.x,top:f.y,right:f.x+f.width,bottom:f.y+f.height})}function LS(f,s){var c=bo(f,!1,s==="fixed");return c.top=c.top+f.clientTop,c.left=c.left+f.clientLeft,c.bottom=c.top+f.clientHeight,c.right=c.left+f.clientWidth,c.width=f.clientWidth,c.height=f.clientHeight,c.x=c.left,c.y=c.top,c}function hg(f,s,c){return s===vf?Pf(xS(f,c)):di(s)?LS(s,c):Pf(RS(kr(f)))}function DS(f){var s=Oa(Cl(f)),c=["absolute","fixed"].indexOf(Qn(f).position)>=0,h=c&&cn(f)?Ca(f):f;return di(h)?s.filter(function(y){return di(y)&&ig(y,h)&&Ln(y)!=="body"}):[]}function MS(f,s,c,h){var y=s==="clippingParents"?DS(f):[].concat(s),T=[].concat(y,[c]),k=T[0],N=T.reduce(function(F,Y){var z=hg(f,Y,h);return F.top=hi(z.top,F.top),F.right=kl(z.right,F.right),F.bottom=kl(z.bottom,F.bottom),F.left=hi(z.left,F.left),F},hg(f,k,h));return N.width=N.right-N.left,N.height=N.bottom-N.top,N.x=N.left,N.y=N.top,N}function pg(f){var s=f.reference,c=f.element,h=f.placement,y=h?Dn(h):null,T=h?To(h):null,k=s.x+s.width/2-c.width/2,N=s.y+s.height/2-c.height/2,F;switch(y){case Ot:F={x:k,y:s.y-c.height};break;case Ht:F={x:k,y:s.y+s.height};break;case Bt:F={x:s.x+s.width,y:N};break;case Pt:F={x:s.x-c.width,y:N};break;default:F={x:s.x,y:s.y}}var Y=y?Sf(y):null;if(Y!=null){var z=Y==="y"?"height":"width";switch(T){case fi:F[Y]=F[Y]-(s[z]/2-c[z]/2);break;case _o:F[Y]=F[Y]+(s[z]/2-c[z]/2);break}}return F}function So(f,s){s===void 0&&(s={});var c=s,h=c.placement,y=h===void 0?f.placement:h,T=c.strategy,k=T===void 0?f.strategy:T,N=c.boundary,F=N===void 0?Bm:N,Y=c.rootBoundary,z=Y===void 0?vf:Y,le=c.elementContext,ce=le===void 0?Eo:le,re=c.altBoundary,Pe=re===void 0?!1:re,fe=c.padding,_e=fe===void 0?0:fe,Le=sg(typeof _e!="number"?_e:lg(_e,yo)),Ge=ce===Eo?Km:Eo,qe=f.rects.popper,pe=f.elements[Pe?Ge:ce],Se=MS(di(pe)?pe:pe.contextElement||kr(f.elements.popper),F,z,k),Ie=bo(f.elements.reference),Ve=pg({reference:Ie,element:qe,strategy:"absolute",placement:y}),ft=Pf(Object.assign({},qe,Ve)),ot=ce===Eo?ft:Ie,tt={top:Se.top-ot.top+Le.top,bottom:ot.bottom-Se.bottom+Le.bottom,left:Se.left-ot.left+Le.left,right:ot.right-Se.right+Le.right},Et=f.modifiersData.offset;if(ce===Eo&&Et){var wn=Et[y];Object.keys(tt).forEach(function(Nt){var wi=[Bt,Ht].indexOf(Nt)>=0?1:-1,bi=[Ot,Ht].indexOf(Nt)>=0?"y":"x";tt[Nt]+=wn[bi]*wi})}return tt}function $S(f,s){s===void 0&&(s={});var c=s,h=c.placement,y=c.boundary,T=c.rootBoundary,k=c.padding,N=c.flipVariations,F=c.allowedAutoPlacements,Y=F===void 0?_f:F,z=To(h),le=z?N?yf:yf.filter(function(Pe){return To(Pe)===z}):yo,ce=le.filter(function(Pe){return Y.indexOf(Pe)>=0});ce.length===0&&(ce=le);var re=ce.reduce(function(Pe,fe){return Pe[fe]=So(f,{placement:fe,boundary:y,rootBoundary:T,padding:k})[Dn(fe)],Pe},{});return Object.keys(re).sort(function(Pe,fe){return re[Pe]-re[fe]})}function FS(f){if(Dn(f)===Il)return[];var s=Ol(f);return[fg(f),s,fg(s)]}function US(f){var s=f.state,c=f.options,h=f.name;if(!s.modifiersData[h]._skip){for(var y=c.mainAxis,T=y===void 0?!0:y,k=c.altAxis,N=k===void 0?!0:k,F=c.fallbackPlacements,Y=c.padding,z=c.boundary,le=c.rootBoundary,ce=c.altBoundary,re=c.flipVariations,Pe=re===void 0?!0:re,fe=c.allowedAutoPlacements,_e=s.options.placement,Le=Dn(_e),Ge=Le===_e,qe=F||(Ge||!Pe?[Ol(_e)]:FS(_e)),pe=[_e].concat(qe).reduce(function(Co,Ar){return Co.concat(Dn(Ar)===Il?$S(s,{placement:Ar,boundary:z,rootBoundary:le,padding:Y,flipVariations:Pe,allowedAutoPlacements:fe}):Ar)},[]),Se=s.rects.reference,Ie=s.rects.popper,Ve=new Map,ft=!0,ot=pe[0],tt=0;tt<pe.length;tt++){var Et=pe[tt],wn=Dn(Et),Nt=To(Et)===fi,wi=[Ot,Ht].indexOf(wn)>=0,bi=wi?"width":"height",Yt=So(s,{placement:Et,boundary:z,rootBoundary:le,altBoundary:ce,padding:Y}),bn=wi?Nt?Bt:Pt:Nt?Ht:Ot;Se[bi]>Ie[bi]&&(bn=Ol(bn));var Fl=Ol(bn),Ti=[];if(T&&Ti.push(Yt[wn]<=0),N&&Ti.push(Yt[bn]<=0,Yt[Fl]<=0),Ti.every(function(Co){return Co})){ot=Et,ft=!1;break}Ve.set(Et,Ti)}if(ft)for(var Ul=Pe?3:1,Hf=function(Ar){var La=pe.find(function(Vl){var Si=Ve.get(Vl);if(Si)return Si.slice(0,Ar).every(function(Bf){return Bf})});if(La)return ot=La,"break"},Ra=Ul;Ra>0;Ra--){var jl=Hf(Ra);if(jl==="break")break}s.placement!==ot&&(s.modifiersData[h]._skip=!0,s.placement=ot,s.reset=!0)}}const mg={name:"flip",enabled:!0,phase:"main",fn:US,requiresIfExists:["offset"],data:{_skip:!1}};function gg(f,s,c){return c===void 0&&(c={x:0,y:0}),{top:f.top-s.height-c.y,right:f.right-s.width+c.x,bottom:f.bottom-s.height+c.y,left:f.left-s.width-c.x}}function vg(f){return[Ot,Bt,Ht,Pt].some(function(s){return f[s]>=0})}function jS(f){var s=f.state,c=f.name,h=s.rects.reference,y=s.rects.popper,T=s.modifiersData.preventOverflow,k=So(s,{elementContext:"reference"}),N=So(s,{altBoundary:!0}),F=gg(k,h),Y=gg(N,y,T),z=vg(F),le=vg(Y);s.modifiersData[c]={referenceClippingOffsets:F,popperEscapeOffsets:Y,isReferenceHidden:z,hasPopperEscaped:le},s.attributes.popper=Object.assign({},s.attributes.popper,{"data-popper-reference-hidden":z,"data-popper-escaped":le})}const yg={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:jS};function VS(f,s,c){var h=Dn(f),y=[Pt,Ot].indexOf(h)>=0?-1:1,T=typeof c=="function"?c(Object.assign({},s,{placement:f})):c,k=T[0],N=T[1];return k=k||0,N=(N||0)*y,[Pt,Bt].indexOf(h)>=0?{x:N,y:k}:{x:k,y:N}}function zS(f){var s=f.state,c=f.options,h=f.name,y=c.offset,T=y===void 0?[0,0]:y,k=_f.reduce(function(z,le){return z[le]=VS(le,s.rects,T),z},{}),N=k[s.placement],F=N.x,Y=N.y;s.modifiersData.popperOffsets!=null&&(s.modifiersData.popperOffsets.x+=F,s.modifiersData.popperOffsets.y+=Y),s.modifiersData[h]=k}const _g={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:zS};function WS(f){var s=f.state,c=f.name;s.modifiersData[c]=pg({reference:s.rects.reference,element:s.rects.popper,strategy:"absolute",placement:s.placement})}const Nf={name:"popperOffsets",enabled:!0,phase:"read",fn:WS,data:{}};function HS(f){return f==="x"?"y":"x"}function BS(f){var s=f.state,c=f.options,h=f.name,y=c.mainAxis,T=y===void 0?!0:y,k=c.altAxis,N=k===void 0?!1:k,F=c.boundary,Y=c.rootBoundary,z=c.altBoundary,le=c.padding,ce=c.tether,re=ce===void 0?!0:ce,Pe=c.tetherOffset,fe=Pe===void 0?0:Pe,_e=So(s,{boundary:F,rootBoundary:Y,padding:le,altBoundary:z}),Le=Dn(s.placement),Ge=To(s.placement),qe=!Ge,pe=Sf(Le),Se=HS(pe),Ie=s.modifiersData.popperOffsets,Ve=s.rects.reference,ft=s.rects.popper,ot=typeof fe=="function"?fe(Object.assign({},s.rects,{placement:s.placement})):fe,tt=typeof ot=="number"?{mainAxis:ot,altAxis:ot}:Object.assign({mainAxis:0,altAxis:0},ot),Et=s.modifiersData.offset?s.modifiersData.offset[s.placement]:null,wn={x:0,y:0};if(Ie){if(T){var Nt,wi=pe==="y"?Ot:Pt,bi=pe==="y"?Ht:Bt,Yt=pe==="y"?"height":"width",bn=Ie[pe],Fl=bn+_e[wi],Ti=bn-_e[bi],Ul=re?-ft[Yt]/2:0,Hf=Ge===fi?Ve[Yt]:ft[Yt],Ra=Ge===fi?-ft[Yt]:-Ve[Yt],jl=s.elements.arrow,Co=re&&jl?Tf(jl):{width:0,height:0},Ar=s.modifiersData["arrow#persistent"]?s.modifiersData["arrow#persistent"].padding:ag(),La=Ar[wi],Vl=Ar[bi],Si=Aa(0,Ve[Yt],Co[Yt]),Bf=qe?Ve[Yt]/2-Ul-Si-La-tt.mainAxis:Hf-Si-La-tt.mainAxis,$k=qe?-Ve[Yt]/2+Ul+Si+Vl+tt.mainAxis:Ra+Si+Vl+tt.mainAxis,Kf=s.elements.arrow&&Ca(s.elements.arrow),Fk=Kf?pe==="y"?Kf.clientTop||0:Kf.clientLeft||0:0,sv=(Nt=Et==null?void 0:Et[pe])!=null?Nt:0,Uk=bn+Bf-sv-Fk,jk=bn+$k-sv,lv=Aa(re?kl(Fl,Uk):Fl,bn,re?hi(Ti,jk):Ti);Ie[pe]=lv,wn[pe]=lv-bn}if(N){var uv,Vk=pe==="x"?Ot:Pt,zk=pe==="x"?Ht:Bt,Ii=Ie[Se],zl=Se==="y"?"height":"width",cv=Ii+_e[Vk],fv=Ii-_e[zk],Yf=[Ot,Pt].indexOf(Le)!==-1,dv=(uv=Et==null?void 0:Et[Se])!=null?uv:0,hv=Yf?cv:Ii-Ve[zl]-ft[zl]-dv+tt.altAxis,pv=Yf?Ii+Ve[zl]+ft[zl]-dv-tt.altAxis:fv,mv=re&&Yf?bS(hv,Ii,pv):Aa(re?hv:cv,Ii,re?pv:fv);Ie[Se]=mv,wn[Se]=mv-Ii}s.modifiersData[h]=wn}}const Eg={name:"preventOverflow",enabled:!0,phase:"main",fn:BS,requiresIfExists:["offset"]};function KS(f){return{scrollLeft:f.scrollLeft,scrollTop:f.scrollTop}}function YS(f){return f===Kt(f)||!cn(f)?Cf(f):KS(f)}function GS(f){var s=f.getBoundingClientRect(),c=wo(s.width)/f.offsetWidth||1,h=wo(s.height)/f.offsetHeight||1;return c!==1||h!==1}function qS(f,s,c){c===void 0&&(c=!1);var h=cn(s),y=cn(s)&&GS(s),T=kr(s),k=bo(f,y,c),N={scrollLeft:0,scrollTop:0},F={x:0,y:0};return(h||!h&&!c)&&((Ln(s)!=="body"||Of(T))&&(N=YS(s)),cn(s)?(F=bo(s,!0),F.x+=s.clientLeft,F.y+=s.clientTop):T&&(F.x=Af(T))),{x:k.left+N.scrollLeft-F.x,y:k.top+N.scrollTop-F.y,width:k.width,height:k.height}}function XS(f){var s=new Map,c=new Set,h=[];f.forEach(function(T){s.set(T.name,T)});function y(T){c.add(T.name);var k=[].concat(T.requires||[],T.requiresIfExists||[]);k.forEach(function(N){if(!c.has(N)){var F=s.get(N);F&&y(F)}}),h.push(T)}return f.forEach(function(T){c.has(T.name)||y(T)}),h}function QS(f){var s=XS(f);return ng.reduce(function(c,h){return c.concat(s.filter(function(y){return y.phase===h}))},[])}function JS(f){var s;return function(){return s||(s=new Promise(function(c){Promise.resolve().then(function(){s=void 0,c(f())})})),s}}function ZS(f){var s=f.reduce(function(c,h){var y=c[h.name];return c[h.name]=y?Object.assign({},y,h,{options:Object.assign({},y.options,h.options),data:Object.assign({},y.data,h.data)}):h,c},{});return Object.keys(s).map(function(c){return s[c]})}var wg={placement:"bottom",modifiers:[],strategy:"absolute"};function bg(){for(var f=arguments.length,s=new Array(f),c=0;c<f;c++)s[c]=arguments[c];return!s.some(function(h){return!(h&&typeof h.getBoundingClientRect=="function")})}function Pl(f){f===void 0&&(f={});var s=f,c=s.defaultModifiers,h=c===void 0?[]:c,y=s.defaultOptions,T=y===void 0?wg:y;return function(N,F,Y){Y===void 0&&(Y=T);var z={placement:"bottom",orderedModifiers:[],options:Object.assign({},wg,T),modifiersData:{},elements:{reference:N,popper:F},attributes:{},styles:{}},le=[],ce=!1,re={state:z,setOptions:function(Le){var Ge=typeof Le=="function"?Le(z.options):Le;fe(),z.options=Object.assign({},T,z.options,Ge),z.scrollParents={reference:di(N)?Oa(N):N.contextElement?Oa(N.contextElement):[],popper:Oa(F)};var qe=QS(ZS([].concat(h,z.options.modifiers)));return z.orderedModifiers=qe.filter(function(pe){return pe.enabled}),Pe(),re.update()},forceUpdate:function(){if(!ce){var Le=z.elements,Ge=Le.reference,qe=Le.popper;if(bg(Ge,qe)){z.rects={reference:qS(Ge,Ca(qe),z.options.strategy==="fixed"),popper:Tf(qe)},z.reset=!1,z.placement=z.options.placement,z.orderedModifiers.forEach(function(tt){return z.modifiersData[tt.name]=Object.assign({},tt.data)});for(var pe=0;pe<z.orderedModifiers.length;pe++){if(z.reset===!0){z.reset=!1,pe=-1;continue}var Se=z.orderedModifiers[pe],Ie=Se.fn,Ve=Se.options,ft=Ve===void 0?{}:Ve,ot=Se.name;typeof Ie=="function"&&(z=Ie({state:z,options:ft,name:ot,instance:re})||z)}}}},update:JS(function(){return new Promise(function(_e){re.forceUpdate(),_e(z)})}),destroy:function(){fe(),ce=!0}};if(!bg(N,F))return re;re.setOptions(Y).then(function(_e){!ce&&Y.onFirstUpdate&&Y.onFirstUpdate(_e)});function Pe(){z.orderedModifiers.forEach(function(_e){var Le=_e.name,Ge=_e.options,qe=Ge===void 0?{}:Ge,pe=_e.effect;if(typeof pe=="function"){var Se=pe({state:z,name:Le,instance:re,options:qe}),Ie=function(){};le.push(Se||Ie)}})}function fe(){le.forEach(function(_e){return _e()}),le=[]}return re}}var e1=Pl(),t1=[kf,Nf,If,wf],n1=Pl({defaultModifiers:t1}),r1=[kf,Nf,If,wf,_g,mg,Eg,ug,yg],xf=Pl({defaultModifiers:r1});const Tg=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Jm,afterRead:qm,afterWrite:tg,applyStyles:wf,arrow:ug,auto:Il,basePlacements:yo,beforeMain:Xm,beforeRead:Ym,beforeWrite:Zm,bottom:Ht,clippingParents:Bm,computeStyles:If,createPopper:xf,createPopperBase:e1,createPopperLite:n1,detectOverflow:So,end:_o,eventListeners:kf,flip:mg,hide:yg,left:Pt,main:Qm,modifierPhases:ng,offset:_g,placements:_f,popper:Eo,popperGenerator:Pl,popperOffsets:Nf,preventOverflow:Eg,read:Gm,reference:Km,right:Bt,start:fi,top:Ot,variationPlacements:yf,viewport:vf,write:eg},Symbol.toStringTag,{value:"Module"})),Sg="dropdown",pi=".bs.dropdown",Rf=".data-api",i1="Escape",Ig="Tab",o1="ArrowUp",kg="ArrowDown",a1=2,s1=`hide${pi}`,l1=`hidden${pi}`,u1=`show${pi}`,c1=`shown${pi}`,Cg=`click${pi}${Rf}`,Ag=`keydown${pi}${Rf}`,f1=`keyup${pi}${Rf}`,Io="show",d1="dropup",h1="dropend",p1="dropstart",m1="dropup-center",g1="dropdown-center",mi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',v1=`${mi}.${Io}`,Nl=".dropdown-menu",y1=".navbar",_1=".navbar-nav",E1=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",w1=M()?"top-end":"top-start",b1=M()?"top-start":"top-end",T1=M()?"bottom-end":"bottom-start",S1=M()?"bottom-start":"bottom-end",I1=M()?"left-start":"right-start",k1=M()?"right-start":"left-start",C1="top",A1="bottom",O1={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},P1={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class En extends zt{constructor(s,c){super(s,c),this._popper=null,this._parent=this._element.parentNode,this._menu=Z.next(this._element,Nl)[0]||Z.prev(this._element,Nl)[0]||Z.findOne(Nl,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return O1}static get DefaultType(){return P1}static get NAME(){return Sg}toggle(){return this._isShown()?this.hide():this.show()}show(){if(A(this._element)||this._isShown())return;const s={relatedTarget:this._element};if(!P.trigger(this._element,u1,s).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(_1))for(const h of[].concat(...document.body.children))P.on(h,"mouseover",v);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Io),this._element.classList.add(Io),P.trigger(this._element,c1,s)}}hide(){if(A(this._element)||!this._isShown())return;const s={relatedTarget:this._element};this._completeHide(s)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(s){if(!P.trigger(this._element,s1,s).defaultPrevented){if("ontouchstart"in document.documentElement)for(const h of[].concat(...document.body.children))P.off(h,"mouseover",v);this._popper&&this._popper.destroy(),this._menu.classList.remove(Io),this._element.classList.remove(Io),this._element.setAttribute("aria-expanded","false"),it.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,l1,s)}}_getConfig(s){if(s=super._getConfig(s),typeof s.reference=="object"&&!w(s.reference)&&typeof s.reference.getBoundingClientRect!="function")throw new TypeError(`${Sg.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return s}_createPopper(){if(typeof Tg>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let s=this._element;this._config.reference==="parent"?s=this._parent:w(this._config.reference)?s=S(this._config.reference):typeof this._config.reference=="object"&&(s=this._config.reference);const c=this._getPopperConfig();this._popper=xf(s,this._menu,c)}_isShown(){return this._menu.classList.contains(Io)}_getPlacement(){const s=this._parent;if(s.classList.contains(h1))return I1;if(s.classList.contains(p1))return k1;if(s.classList.contains(m1))return C1;if(s.classList.contains(g1))return A1;const c=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return s.classList.contains(d1)?c?b1:w1:c?S1:T1}_detectNavbar(){return this._element.closest(y1)!==null}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(c=>Number.parseInt(c,10)):typeof s=="function"?c=>s(c,this._element):s}_getPopperConfig(){const s={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(it.setDataAttribute(this._menu,"popper","static"),s.modifiers=[{name:"applyStyles",enabled:!1}]),{...s,...B(this._config.popperConfig,[s])}}_selectMenuItem({key:s,target:c}){const h=Z.find(E1,this._menu).filter(y=>O(y));h.length&&ve(h,c,s===kg,!h.includes(c)).focus()}static jQueryInterface(s){return this.each(function(){const c=En.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof c[s]>"u")throw new TypeError(`No method named "${s}"`);c[s]()}})}static clearMenus(s){if(s.button===a1||s.type==="keyup"&&s.key!==Ig)return;const c=Z.find(v1);for(const h of c){const y=En.getInstance(h);if(!y||y._config.autoClose===!1)continue;const T=s.composedPath(),k=T.includes(y._menu);if(T.includes(y._element)||y._config.autoClose==="inside"&&!k||y._config.autoClose==="outside"&&k||y._menu.contains(s.target)&&(s.type==="keyup"&&s.key===Ig||/input|select|option|textarea|form/i.test(s.target.tagName)))continue;const N={relatedTarget:y._element};s.type==="click"&&(N.clickEvent=s),y._completeHide(N)}}static dataApiKeydownHandler(s){const c=/input|textarea/i.test(s.target.tagName),h=s.key===i1,y=[o1,kg].includes(s.key);if(!y&&!h||c&&!h)return;s.preventDefault();const T=this.matches(mi)?this:Z.prev(this,mi)[0]||Z.next(this,mi)[0]||Z.findOne(mi,s.delegateTarget.parentNode),k=En.getOrCreateInstance(T);if(y){s.stopPropagation(),k.show(),k._selectMenuItem(s);return}k._isShown()&&(s.stopPropagation(),k.hide(),T.focus())}}P.on(document,Ag,mi,En.dataApiKeydownHandler),P.on(document,Ag,Nl,En.dataApiKeydownHandler),P.on(document,Cg,En.clearMenus),P.on(document,f1,En.clearMenus),P.on(document,Cg,mi,function(f){f.preventDefault(),En.getOrCreateInstance(this).toggle()}),L(En);const Og="backdrop",N1="fade",Pg="show",Ng=`mousedown.bs.${Og}`,x1={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},R1={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class xg extends Vt{constructor(s){super(),this._config=this._getConfig(s),this._isAppended=!1,this._element=null}static get Default(){return x1}static get DefaultType(){return R1}static get NAME(){return Og}show(s){if(!this._config.isVisible){B(s);return}this._append();const c=this._getElement();this._config.isAnimated&&E(c),c.classList.add(Pg),this._emulateAnimation(()=>{B(s)})}hide(s){if(!this._config.isVisible){B(s);return}this._getElement().classList.remove(Pg),this._emulateAnimation(()=>{this.dispose(),B(s)})}dispose(){this._isAppended&&(P.off(this._element,Ng),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const s=document.createElement("div");s.className=this._config.className,this._config.isAnimated&&s.classList.add(N1),this._element=s}return this._element}_configAfterMerge(s){return s.rootElement=S(s.rootElement),s}_append(){if(this._isAppended)return;const s=this._getElement();this._config.rootElement.append(s),P.on(s,Ng,()=>{B(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(s){W(s,this._getElement(),this._config.isAnimated)}}const L1="focustrap",xl=".bs.focustrap",D1=`focusin${xl}`,M1=`keydown.tab${xl}`,$1="Tab",F1="forward",Rg="backward",U1={autofocus:!0,trapElement:null},j1={autofocus:"boolean",trapElement:"element"};class Lg extends Vt{constructor(s){super(),this._config=this._getConfig(s),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return U1}static get DefaultType(){return j1}static get NAME(){return L1}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,xl),P.on(document,D1,s=>this._handleFocusin(s)),P.on(document,M1,s=>this._handleKeydown(s)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,xl))}_handleFocusin(s){const{trapElement:c}=this._config;if(s.target===document||s.target===c||c.contains(s.target))return;const h=Z.focusableChildren(c);h.length===0?c.focus():this._lastTabNavDirection===Rg?h[h.length-1].focus():h[0].focus()}_handleKeydown(s){s.key===$1&&(this._lastTabNavDirection=s.shiftKey?Rg:F1)}}const Dg=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Mg=".sticky-top",Rl="padding-right",$g="margin-right";class Lf{constructor(){this._element=document.body}getWidth(){const s=document.documentElement.clientWidth;return Math.abs(window.innerWidth-s)}hide(){const s=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Rl,c=>c+s),this._setElementAttributes(Dg,Rl,c=>c+s),this._setElementAttributes(Mg,$g,c=>c-s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Rl),this._resetElementAttributes(Dg,Rl),this._resetElementAttributes(Mg,$g)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(s,c,h){const y=this.getWidth(),T=k=>{if(k!==this._element&&window.innerWidth>k.clientWidth+y)return;this._saveInitialAttribute(k,c);const N=window.getComputedStyle(k).getPropertyValue(c);k.style.setProperty(c,`${h(Number.parseFloat(N))}px`)};this._applyManipulationCallback(s,T)}_saveInitialAttribute(s,c){const h=s.style.getPropertyValue(c);h&&it.setDataAttribute(s,c,h)}_resetElementAttributes(s,c){const h=y=>{const T=it.getDataAttribute(y,c);if(T===null){y.style.removeProperty(c);return}it.removeDataAttribute(y,c),y.style.setProperty(c,T)};this._applyManipulationCallback(s,h)}_applyManipulationCallback(s,c){if(w(s)){c(s);return}for(const h of Z.find(s,this._element))c(h)}}const V1="modal",fn=".bs.modal",z1=".data-api",W1="Escape",H1=`hide${fn}`,B1=`hidePrevented${fn}`,Fg=`hidden${fn}`,Ug=`show${fn}`,K1=`shown${fn}`,Y1=`resize${fn}`,G1=`click.dismiss${fn}`,q1=`mousedown.dismiss${fn}`,X1=`keydown.dismiss${fn}`,Q1=`click${fn}${z1}`,jg="modal-open",J1="fade",Vg="show",Df="modal-static",Z1=".modal.show",eI=".modal-dialog",tI=".modal-body",nI='[data-bs-toggle="modal"]',rI={backdrop:!0,focus:!0,keyboard:!0},iI={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class gi extends zt{constructor(s,c){super(s,c),this._dialog=Z.findOne(eI,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Lf,this._addEventListeners()}static get Default(){return rI}static get DefaultType(){return iI}static get NAME(){return V1}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){this._isShown||this._isTransitioning||P.trigger(this._element,Ug,{relatedTarget:s}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(jg),this._adjustDialog(),this._backdrop.show(()=>this._showElement(s)))}hide(){!this._isShown||this._isTransitioning||P.trigger(this._element,H1).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Vg),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){P.off(window,fn),P.off(this._dialog,fn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new xg({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Lg({trapElement:this._element})}_showElement(s){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const c=Z.findOne(tI,this._dialog);c&&(c.scrollTop=0),E(this._element),this._element.classList.add(Vg);const h=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,K1,{relatedTarget:s})};this._queueCallback(h,this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,X1,s=>{if(s.key===W1){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),P.on(window,Y1,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),P.on(this._element,q1,s=>{P.one(this._element,G1,c=>{if(!(this._element!==s.target||this._element!==c.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(jg),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,Fg)})}_isAnimated(){return this._element.classList.contains(J1)}_triggerBackdropTransition(){if(P.trigger(this._element,B1).defaultPrevented)return;const c=this._element.scrollHeight>document.documentElement.clientHeight,h=this._element.style.overflowY;h==="hidden"||this._element.classList.contains(Df)||(c||(this._element.style.overflowY="hidden"),this._element.classList.add(Df),this._queueCallback(()=>{this._element.classList.remove(Df),this._queueCallback(()=>{this._element.style.overflowY=h},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const s=this._element.scrollHeight>document.documentElement.clientHeight,c=this._scrollBar.getWidth(),h=c>0;if(h&&!s){const y=M()?"paddingLeft":"paddingRight";this._element.style[y]=`${c}px`}if(!h&&s){const y=M()?"paddingRight":"paddingLeft";this._element.style[y]=`${c}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(s,c){return this.each(function(){const h=gi.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof h[s]>"u")throw new TypeError(`No method named "${s}"`);h[s](c)}})}}P.on(document,Q1,nI,function(f){const s=Z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&f.preventDefault(),P.one(s,Ug,y=>{y.defaultPrevented||P.one(s,Fg,()=>{O(this)&&this.focus()})});const c=Z.findOne(Z1);c&&gi.getInstance(c).hide(),gi.getOrCreateInstance(s).toggle(this)}),co(gi),L(gi);const oI="offcanvas",Jn=".bs.offcanvas",zg=".data-api",aI=`load${Jn}${zg}`,sI="Escape",Wg="show",Hg="showing",Bg="hiding",lI="offcanvas-backdrop",Kg=".offcanvas.show",uI=`show${Jn}`,cI=`shown${Jn}`,fI=`hide${Jn}`,Yg=`hidePrevented${Jn}`,Gg=`hidden${Jn}`,dI=`resize${Jn}`,hI=`click${Jn}${zg}`,pI=`keydown.dismiss${Jn}`,mI='[data-bs-toggle="offcanvas"]',gI={backdrop:!0,keyboard:!0,scroll:!1},vI={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Zn extends zt{constructor(s,c){super(s,c),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return gI}static get DefaultType(){return vI}static get NAME(){return oI}toggle(s){return this._isShown?this.hide():this.show(s)}show(s){if(this._isShown||P.trigger(this._element,uI,{relatedTarget:s}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Lf().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Hg);const h=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Wg),this._element.classList.remove(Hg),P.trigger(this._element,cI,{relatedTarget:s})};this._queueCallback(h,this._element,!0)}hide(){if(!this._isShown||P.trigger(this._element,fI).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Bg),this._backdrop.hide();const c=()=>{this._element.classList.remove(Wg,Bg),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Lf().reset(),P.trigger(this._element,Gg)};this._queueCallback(c,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const s=()=>{if(this._config.backdrop==="static"){P.trigger(this._element,Yg);return}this.hide()},c=!!this._config.backdrop;return new xg({className:lI,isVisible:c,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:c?s:null})}_initializeFocusTrap(){return new Lg({trapElement:this._element})}_addEventListeners(){P.on(this._element,pI,s=>{if(s.key===sI){if(this._config.keyboard){this.hide();return}P.trigger(this._element,Yg)}})}static jQueryInterface(s){return this.each(function(){const c=Zn.getOrCreateInstance(this,s);if(typeof s=="string"){if(c[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);c[s](this)}})}}P.on(document,hI,mI,function(f){const s=Z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&f.preventDefault(),A(this))return;P.one(s,Gg,()=>{O(this)&&this.focus()});const c=Z.findOne(Kg);c&&c!==s&&Zn.getInstance(c).hide(),Zn.getOrCreateInstance(s).toggle(this)}),P.on(window,aI,()=>{for(const f of Z.find(Kg))Zn.getOrCreateInstance(f).show()}),P.on(window,dI,()=>{for(const f of Z.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(f).position!=="fixed"&&Zn.getOrCreateInstance(f).hide()}),co(Zn),L(Zn);const qg={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},yI=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),_I=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,EI=(f,s)=>{const c=f.nodeName.toLowerCase();return s.includes(c)?yI.has(c)?!!_I.test(f.nodeValue):!0:s.filter(h=>h instanceof RegExp).some(h=>h.test(c))};function wI(f,s,c){if(!f.length)return f;if(c&&typeof c=="function")return c(f);const y=new window.DOMParser().parseFromString(f,"text/html"),T=[].concat(...y.body.querySelectorAll("*"));for(const k of T){const N=k.nodeName.toLowerCase();if(!Object.keys(s).includes(N)){k.remove();continue}const F=[].concat(...k.attributes),Y=[].concat(s["*"]||[],s[N]||[]);for(const z of F)EI(z,Y)||k.removeAttribute(z.nodeName)}return y.body.innerHTML}const bI="TemplateFactory",TI={allowList:qg,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},SI={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},II={entry:"(string|element|function|null)",selector:"(string|element)"};class kI extends Vt{constructor(s){super(),this._config=this._getConfig(s)}static get Default(){return TI}static get DefaultType(){return SI}static get NAME(){return bI}getContent(){return Object.values(this._config.content).map(s=>this._resolvePossibleFunction(s)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(s){return this._checkContent(s),this._config.content={...this._config.content,...s},this}toHtml(){const s=document.createElement("div");s.innerHTML=this._maybeSanitize(this._config.template);for(const[y,T]of Object.entries(this._config.content))this._setContent(s,T,y);const c=s.children[0],h=this._resolvePossibleFunction(this._config.extraClass);return h&&c.classList.add(...h.split(" ")),c}_typeCheckConfig(s){super._typeCheckConfig(s),this._checkContent(s.content)}_checkContent(s){for(const[c,h]of Object.entries(s))super._typeCheckConfig({selector:c,entry:h},II)}_setContent(s,c,h){const y=Z.findOne(h,s);if(y){if(c=this._resolvePossibleFunction(c),!c){y.remove();return}if(w(c)){this._putElementInTemplate(S(c),y);return}if(this._config.html){y.innerHTML=this._maybeSanitize(c);return}y.textContent=c}}_maybeSanitize(s){return this._config.sanitize?wI(s,this._config.allowList,this._config.sanitizeFn):s}_resolvePossibleFunction(s){return B(s,[this])}_putElementInTemplate(s,c){if(this._config.html){c.innerHTML="",c.append(s);return}c.textContent=s.textContent}}const CI="tooltip",AI=new Set(["sanitize","allowList","sanitizeFn"]),Mf="fade",OI="modal",Ll="show",PI=".tooltip-inner",Xg=`.${OI}`,Qg="hide.bs.modal",Pa="hover",$f="focus",NI="click",xI="manual",RI="hide",LI="hidden",DI="show",MI="shown",$I="inserted",FI="click",UI="focusin",jI="focusout",VI="mouseenter",zI="mouseleave",WI={AUTO:"auto",TOP:"top",RIGHT:M()?"left":"right",BOTTOM:"bottom",LEFT:M()?"right":"left"},HI={allowList:qg,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},BI={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class vi extends zt{constructor(s,c){if(typeof Tg>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(s,c),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return HI}static get DefaultType(){return BI}static get NAME(){return CI}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(Xg),Qg,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const s=P.trigger(this._element,this.constructor.eventName(DI)),h=(g(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(s.defaultPrevented||!h)return;this._disposePopper();const y=this._getTipElement();this._element.setAttribute("aria-describedby",y.getAttribute("id"));const{container:T}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(T.append(y),P.trigger(this._element,this.constructor.eventName($I))),this._popper=this._createPopper(y),y.classList.add(Ll),"ontouchstart"in document.documentElement)for(const N of[].concat(...document.body.children))P.on(N,"mouseover",v);const k=()=>{P.trigger(this._element,this.constructor.eventName(MI)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(k,this.tip,this._isAnimated())}hide(){if(!this._isShown()||P.trigger(this._element,this.constructor.eventName(RI)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ll),"ontouchstart"in document.documentElement)for(const y of[].concat(...document.body.children))P.off(y,"mouseover",v);this._activeTrigger[NI]=!1,this._activeTrigger[$f]=!1,this._activeTrigger[Pa]=!1,this._isHovered=null;const h=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName(LI)))};this._queueCallback(h,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(s){const c=this._getTemplateFactory(s).toHtml();if(!c)return null;c.classList.remove(Mf,Ll),c.classList.add(`bs-${this.constructor.NAME}-auto`);const h=d(this.constructor.NAME).toString();return c.setAttribute("id",h),this._isAnimated()&&c.classList.add(Mf),c}setContent(s){this._newContent=s,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(s){return this._templateFactory?this._templateFactory.changeContent(s):this._templateFactory=new kI({...this._config,content:s,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[PI]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(s){return this.constructor.getOrCreateInstance(s.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Mf)}_isShown(){return this.tip&&this.tip.classList.contains(Ll)}_createPopper(s){const c=B(this._config.placement,[this,s,this._element]),h=WI[c.toUpperCase()];return xf(this._element,s,this._getPopperConfig(h))}_getOffset(){const{offset:s}=this._config;return typeof s=="string"?s.split(",").map(c=>Number.parseInt(c,10)):typeof s=="function"?c=>s(c,this._element):s}_resolvePossibleFunction(s){return B(s,[this._element])}_getPopperConfig(s){const c={placement:s,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:h=>{this._getTipElement().setAttribute("data-popper-placement",h.state.placement)}}]};return{...c,...B(this._config.popperConfig,[c])}}_setListeners(){const s=this._config.trigger.split(" ");for(const c of s)if(c==="click")P.on(this._element,this.constructor.eventName(FI),this._config.selector,h=>{this._initializeOnDelegatedTarget(h).toggle()});else if(c!==xI){const h=c===Pa?this.constructor.eventName(VI):this.constructor.eventName(UI),y=c===Pa?this.constructor.eventName(zI):this.constructor.eventName(jI);P.on(this._element,h,this._config.selector,T=>{const k=this._initializeOnDelegatedTarget(T);k._activeTrigger[T.type==="focusin"?$f:Pa]=!0,k._enter()}),P.on(this._element,y,this._config.selector,T=>{const k=this._initializeOnDelegatedTarget(T);k._activeTrigger[T.type==="focusout"?$f:Pa]=k._element.contains(T.relatedTarget),k._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(Xg),Qg,this._hideModalHandler)}_fixTitle(){const s=this._element.getAttribute("title");s&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",s),this._element.setAttribute("data-bs-original-title",s),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(s,c){clearTimeout(this._timeout),this._timeout=setTimeout(s,c)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(s){const c=it.getDataAttributes(this._element);for(const h of Object.keys(c))AI.has(h)&&delete c[h];return s={...c,...typeof s=="object"&&s?s:{}},s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s.container=s.container===!1?document.body:S(s.container),typeof s.delay=="number"&&(s.delay={show:s.delay,hide:s.delay}),typeof s.title=="number"&&(s.title=s.title.toString()),typeof s.content=="number"&&(s.content=s.content.toString()),s}_getDelegateConfig(){const s={};for(const[c,h]of Object.entries(this._config))this.constructor.Default[c]!==h&&(s[c]=h);return s.selector=!1,s.trigger="manual",s}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(s){return this.each(function(){const c=vi.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof c[s]>"u")throw new TypeError(`No method named "${s}"`);c[s]()}})}}L(vi);const KI="popover",YI=".popover-header",GI=".popover-body",qI={...vi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},XI={...vi.DefaultType,content:"(null|string|element|function)"};class Dl extends vi{static get Default(){return qI}static get DefaultType(){return XI}static get NAME(){return KI}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[YI]:this._getTitle(),[GI]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(s){return this.each(function(){const c=Dl.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof c[s]>"u")throw new TypeError(`No method named "${s}"`);c[s]()}})}}L(Dl);const QI="scrollspy",Ff=".bs.scrollspy",JI=".data-api",ZI=`activate${Ff}`,Jg=`click${Ff}`,ek=`load${Ff}${JI}`,tk="dropdown-item",ko="active",nk='[data-bs-spy="scroll"]',Uf="[href]",rk=".nav, .list-group",Zg=".nav-link",ik=`${Zg}, .nav-item > ${Zg}, .list-group-item`,ok=".dropdown",ak=".dropdown-toggle",sk={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},lk={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Na extends zt{constructor(s,c){super(s,c),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return sk}static get DefaultType(){return lk}static get NAME(){return QI}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const s of this._observableSections.values())this._observer.observe(s)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(s){return s.target=S(s.target)||document.body,s.rootMargin=s.offset?`${s.offset}px 0px -30%`:s.rootMargin,typeof s.threshold=="string"&&(s.threshold=s.threshold.split(",").map(c=>Number.parseFloat(c))),s}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,Jg),P.on(this._config.target,Jg,Uf,s=>{const c=this._observableSections.get(s.target.hash);if(c){s.preventDefault();const h=this._rootElement||window,y=c.offsetTop-this._element.offsetTop;if(h.scrollTo){h.scrollTo({top:y,behavior:"smooth"});return}h.scrollTop=y}}))}_getNewObserver(){const s={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(c=>this._observerCallback(c),s)}_observerCallback(s){const c=k=>this._targetLinks.get(`#${k.target.id}`),h=k=>{this._previousScrollData.visibleEntryTop=k.target.offsetTop,this._process(c(k))},y=(this._rootElement||document.documentElement).scrollTop,T=y>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=y;for(const k of s){if(!k.isIntersecting){this._activeTarget=null,this._clearActiveClass(c(k));continue}const N=k.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(T&&N){if(h(k),!y)return;continue}!T&&!N&&h(k)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const s=Z.find(Uf,this._config.target);for(const c of s){if(!c.hash||A(c))continue;const h=Z.findOne(decodeURI(c.hash),this._element);O(h)&&(this._targetLinks.set(decodeURI(c.hash),c),this._observableSections.set(c.hash,h))}}_process(s){this._activeTarget!==s&&(this._clearActiveClass(this._config.target),this._activeTarget=s,s.classList.add(ko),this._activateParents(s),P.trigger(this._element,ZI,{relatedTarget:s}))}_activateParents(s){if(s.classList.contains(tk)){Z.findOne(ak,s.closest(ok)).classList.add(ko);return}for(const c of Z.parents(s,rk))for(const h of Z.prev(c,ik))h.classList.add(ko)}_clearActiveClass(s){s.classList.remove(ko);const c=Z.find(`${Uf}.${ko}`,s);for(const h of c)h.classList.remove(ko)}static jQueryInterface(s){return this.each(function(){const c=Na.getOrCreateInstance(this,s);if(typeof s=="string"){if(c[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);c[s]()}})}}P.on(window,ek,()=>{for(const f of Z.find(nk))Na.getOrCreateInstance(f)}),L(Na);const uk="tab",yi=".bs.tab",ck=`hide${yi}`,fk=`hidden${yi}`,dk=`show${yi}`,hk=`shown${yi}`,pk=`click${yi}`,mk=`keydown${yi}`,gk=`load${yi}`,vk="ArrowLeft",ev="ArrowRight",yk="ArrowUp",tv="ArrowDown",jf="Home",nv="End",_i="active",rv="fade",Vf="show",_k="dropdown",iv=".dropdown-toggle",Ek=".dropdown-menu",zf=`:not(${iv})`,wk='.list-group, .nav, [role="tablist"]',bk=".nav-item, .list-group-item",Tk=`.nav-link${zf}, .list-group-item${zf}, [role="tab"]${zf}`,ov='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Wf=`${Tk}, ${ov}`,Sk=`.${_i}[data-bs-toggle="tab"], .${_i}[data-bs-toggle="pill"], .${_i}[data-bs-toggle="list"]`;class Ei extends zt{constructor(s){super(s),this._parent=this._element.closest(wk),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,mk,c=>this._keydown(c)))}static get NAME(){return uk}show(){const s=this._element;if(this._elemIsActive(s))return;const c=this._getActiveElem(),h=c?P.trigger(c,ck,{relatedTarget:s}):null;P.trigger(s,dk,{relatedTarget:c}).defaultPrevented||h&&h.defaultPrevented||(this._deactivate(c,s),this._activate(s,c))}_activate(s,c){if(!s)return;s.classList.add(_i),this._activate(Z.getElementFromSelector(s));const h=()=>{if(s.getAttribute("role")!=="tab"){s.classList.add(Vf);return}s.removeAttribute("tabindex"),s.setAttribute("aria-selected",!0),this._toggleDropDown(s,!0),P.trigger(s,hk,{relatedTarget:c})};this._queueCallback(h,s,s.classList.contains(rv))}_deactivate(s,c){if(!s)return;s.classList.remove(_i),s.blur(),this._deactivate(Z.getElementFromSelector(s));const h=()=>{if(s.getAttribute("role")!=="tab"){s.classList.remove(Vf);return}s.setAttribute("aria-selected",!1),s.setAttribute("tabindex","-1"),this._toggleDropDown(s,!1),P.trigger(s,fk,{relatedTarget:c})};this._queueCallback(h,s,s.classList.contains(rv))}_keydown(s){if(![vk,ev,yk,tv,jf,nv].includes(s.key))return;s.stopPropagation(),s.preventDefault();const c=this._getChildren().filter(y=>!A(y));let h;if([jf,nv].includes(s.key))h=c[s.key===jf?0:c.length-1];else{const y=[ev,tv].includes(s.key);h=ve(c,s.target,y,!0)}h&&(h.focus({preventScroll:!0}),Ei.getOrCreateInstance(h).show())}_getChildren(){return Z.find(Wf,this._parent)}_getActiveElem(){return this._getChildren().find(s=>this._elemIsActive(s))||null}_setInitialAttributes(s,c){this._setAttributeIfNotExists(s,"role","tablist");for(const h of c)this._setInitialAttributesOnChild(h)}_setInitialAttributesOnChild(s){s=this._getInnerElement(s);const c=this._elemIsActive(s),h=this._getOuterElement(s);s.setAttribute("aria-selected",c),h!==s&&this._setAttributeIfNotExists(h,"role","presentation"),c||s.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(s,"role","tab"),this._setInitialAttributesOnTargetPanel(s)}_setInitialAttributesOnTargetPanel(s){const c=Z.getElementFromSelector(s);c&&(this._setAttributeIfNotExists(c,"role","tabpanel"),s.id&&this._setAttributeIfNotExists(c,"aria-labelledby",`${s.id}`))}_toggleDropDown(s,c){const h=this._getOuterElement(s);if(!h.classList.contains(_k))return;const y=(T,k)=>{const N=Z.findOne(T,h);N&&N.classList.toggle(k,c)};y(iv,_i),y(Ek,Vf),h.setAttribute("aria-expanded",c)}_setAttributeIfNotExists(s,c,h){s.hasAttribute(c)||s.setAttribute(c,h)}_elemIsActive(s){return s.classList.contains(_i)}_getInnerElement(s){return s.matches(Wf)?s:Z.findOne(Wf,s)}_getOuterElement(s){return s.closest(bk)||s}static jQueryInterface(s){return this.each(function(){const c=Ei.getOrCreateInstance(this);if(typeof s=="string"){if(c[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);c[s]()}})}}P.on(document,pk,ov,function(f){["A","AREA"].includes(this.tagName)&&f.preventDefault(),!A(this)&&Ei.getOrCreateInstance(this).show()}),P.on(window,gk,()=>{for(const f of Z.find(Sk))Ei.getOrCreateInstance(f)}),L(Ei);const Ik="toast",Cr=".bs.toast",kk=`mouseover${Cr}`,Ck=`mouseout${Cr}`,Ak=`focusin${Cr}`,Ok=`focusout${Cr}`,Pk=`hide${Cr}`,Nk=`hidden${Cr}`,xk=`show${Cr}`,Rk=`shown${Cr}`,Lk="fade",av="hide",Ml="show",$l="showing",Dk={animation:"boolean",autohide:"boolean",delay:"number"},Mk={animation:!0,autohide:!0,delay:5e3};class xa extends zt{constructor(s,c){super(s,c),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Mk}static get DefaultType(){return Dk}static get NAME(){return Ik}show(){if(P.trigger(this._element,xk).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Lk);const c=()=>{this._element.classList.remove($l),P.trigger(this._element,Rk),this._maybeScheduleHide()};this._element.classList.remove(av),E(this._element),this._element.classList.add(Ml,$l),this._queueCallback(c,this._element,this._config.animation)}hide(){if(!this.isShown()||P.trigger(this._element,Pk).defaultPrevented)return;const c=()=>{this._element.classList.add(av),this._element.classList.remove($l,Ml),P.trigger(this._element,Nk)};this._element.classList.add($l),this._queueCallback(c,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ml),super.dispose()}isShown(){return this._element.classList.contains(Ml)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(s,c){switch(s.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=c;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=c;break}}if(c){this._clearTimeout();return}const h=s.relatedTarget;this._element===h||this._element.contains(h)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,kk,s=>this._onInteraction(s,!0)),P.on(this._element,Ck,s=>this._onInteraction(s,!1)),P.on(this._element,Ak,s=>this._onInteraction(s,!0)),P.on(this._element,Ok,s=>this._onInteraction(s,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(s){return this.each(function(){const c=xa.getOrCreateInstance(this,s);if(typeof s=="string"){if(typeof c[s]>"u")throw new TypeError(`No method named "${s}"`);c[s](this)}})}}return co(xa),L(xa),{Alert:ci,Button:br,Carousel:mo,Collapse:vo,Dropdown:En,Modal:gi,Offcanvas:Zn,Popover:Dl,ScrollSpy:Na,Tab:Ei,Toast:xa,Tooltip:vi}})})(XM);function $s(e){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$s(e)}function QM(e,t){if($s(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if($s(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function JM(e){var t=QM(e,"string");return $s(t)==="symbol"?t:String(t)}function ZM(e,t,n){return t=JM(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function b_(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?w_(Object(n),!0).forEach(function(r){ZM(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var T_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Td=function(){return Math.random().toString(36).substring(7).split("").join(".")},hc={INIT:"@@redux/INIT"+Td(),REPLACE:"@@redux/REPLACE"+Td(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Td()}};function e2(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function hT(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(wt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(wt(1));return n(hT)(e,t)}if(typeof e!="function")throw new Error(wt(2));var i=e,o=t,a=[],l=a,u=!1;function d(){l===a&&(l=a.slice())}function p(){if(u)throw new Error(wt(3));return o}function m(A){if(typeof A!="function")throw new Error(wt(4));if(u)throw new Error(wt(5));var g=!0;return d(),l.push(A),function(){if(g){if(u)throw new Error(wt(6));g=!1,d();var E=l.indexOf(A);l.splice(E,1),a=null}}}function w(A){if(!e2(A))throw new Error(wt(7));if(typeof A.type>"u")throw new Error(wt(8));if(u)throw new Error(wt(9));try{u=!0,o=i(o,A)}finally{u=!1}for(var g=a=l,v=0;v<g.length;v++){var E=g[v];E()}return A}function S(A){if(typeof A!="function")throw new Error(wt(10));i=A,w({type:hc.REPLACE})}function O(){var A,g=m;return A={subscribe:function(E){if(typeof E!="object"||E===null)throw new Error(wt(11));function I(){E.next&&E.next(p())}I();var _=g(I);return{unsubscribe:_}}},A[T_]=function(){return this},A}return w({type:hc.INIT}),r={dispatch:w,subscribe:m,getState:p,replaceReducer:S},r[T_]=O,r}function t2(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:hc.INIT});if(typeof r>"u")throw new Error(wt(12));if(typeof n(void 0,{type:hc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(wt(13))})}function n2(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),a;try{t2(n)}catch(l){a=l}return function(u,d){if(u===void 0&&(u={}),a)throw a;for(var p=!1,m={},w=0;w<o.length;w++){var S=o[w],O=n[S],A=u[S],g=O(A,d);if(typeof g>"u")throw d&&d.type,new Error(wt(14));m[S]=g,p=p||g!==A}return p=p||o.length!==Object.keys(u).length,p?m:u}}function Lh(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function r2(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(wt(15))},a={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},l=t.map(function(u){return u(a)});return o=Lh.apply(void 0,l)(i.dispatch),b_(b_({},i),{},{dispatch:o})}}}function pT(e){var t=function(r){var i=r.dispatch,o=r.getState;return function(a){return function(l){return typeof l=="function"?l(i,o,e):a(l)}}};return t}var mT=pT();mT.withExtraArgument=pT;const i2=mT;function o2(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t.length!==0)return typeof t[0]=="object"?Lh:Lh(...t)}const a2=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:o2,s2={isAuthenticated:!1,user:{}},l2=(e=s2,t)=>{switch(t.type){case Gb:return{...e,isAuthenticated:!0,user:t.payload};case qb:return{...e,isAuthenticated:!1,user:{}};default:return e}},u2=hT(n2({auth:l2}),a2(r2(i2))),c2=()=>{const[e,t]=St.useState(""),[n,r]=St.useState(""),[i,o]=St.useState(!1),a=ll(),l=Lc(),u=d=>{if(d.preventDefault(),!e||!n){alert("Please fill form correct");return}a(KM(e,n,o))};return St.useEffect(()=>{i&&l("/react-firebase/dashboard")},[i]),D.jsxs("form",{onSubmit:u,children:[D.jsx("div",{className:"form-group my-2",children:D.jsx("input",{type:"email",name:"email",className:"form-control",placeholder:"Email",value:e,onChange:d=>t(d.target.value)})}),D.jsx("div",{className:"form-group my-2",children:D.jsx("input",{type:"password",name:"password",className:"form-control",placeholder:"password",value:n,onChange:d=>r(d.target.value)})}),D.jsx("button",{type:"submit",className:"btn btn-primary my-2 form-control",children:"Login"})]})};function f2(){return D.jsxs("div",{className:"container-fluid",children:[D.jsx("h1",{className:"display-1 my-5 text-center",children:"Login here"}),D.jsx("div",{className:"row",children:D.jsxs("div",{className:"col-md-5 mx-auto mt-5",children:[D.jsx(c2,{}),D.jsx(Wn,{to:"/react-firebase/register",children:"Don't have an account? Register"})]})})]})}const d2=()=>{const[e,t]=St.useState(""),[n,r]=St.useState(""),[i,o]=St.useState(""),[a,l]=St.useState(""),[u,d]=St.useState(!1),p=ll(),m=Lc(),w=S=>{if(S.preventDefault(),!n||!i||!a||!e){alert("Please fill form correct");return}if(i!==a){alert("I ncorrect password");return}p(YM(e,n,i,d))};return St.useEffect(()=>{u&&m("/dashboard")},[u]),D.jsxs("form",{onSubmit:w,children:[D.jsx("div",{className:"form-group my-2",children:D.jsx("input",{type:"name",name:"name",className:"form-control",placeholder:"Name",value:e,onChange:S=>t(S.target.value)})}),D.jsx("div",{className:"form-group my-2",children:D.jsx("input",{type:"email",name:"email",className:"form-control",placeholder:"Email",value:n,onChange:S=>r(S.target.value)})}),D.jsx("div",{className:"form-group my-2",children:D.jsx("input",{type:"password",name:"password",className:"form-control",placeholder:"password",value:i,onChange:S=>o(S.target.value)})}),D.jsx("div",{className:"form-group my-2",children:D.jsx("input",{type:"password",name:"passwordConfirm",className:"form-control",placeholder:"Re-type password",value:a,onChange:S=>l(S.target.value)})}),D.jsx("button",{type:"submit",className:"btn btn-primary my-2 form-control",children:"Register"})]})};function h2(){return D.jsxs("div",{className:"container-fluid",children:[D.jsx("h1",{className:"display-1 my-5 text-center",children:"Register here"}),D.jsx("div",{className:"row",children:D.jsxs("div",{className:"col-md-5 mx-auto mt-5",children:[D.jsx(d2,{}),D.jsx(Wn,{to:"/react-firebase/login",children:"Already have an account? Login"})]})})]})}const p2=()=>{const{isAuthenticated:e,user:t}=tm(r=>r.auth),n=ll();return D.jsxs("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark p-3 ",children:[D.jsx(Wn,{to:"/react-firebase/",className:"navbar-brand ms-5 text-white",children:"React Firebase - File Manager"}),D.jsx("ul",{className:"navbar-nav ms-auto me-5",children:e?D.jsxs(D.Fragment,{children:[D.jsx("li",{className:"nav-item mx-2",children:D.jsxs("p",{className:"my-0 mt-1 mx-2",children:[D.jsx("span",{className:"text-light mx-1",children:"Welcome,"}),D.jsx("span",{className:"fw-bold text-warning",children:t.displayName})]})}),D.jsx("li",{className:"nav-item mx-2",children:D.jsx(Wn,{to:"/react-firebase/dashboard",className:"btn btn-primary btn-sm",children:"Dashboard"})}),D.jsx("li",{className:"nav-item",children:D.jsx("button",{to:"/react-firebase/logout",className:"btn btn-success btn-sm",onClick:()=>n(dT()),children:"Logout"})})]}):D.jsxs(D.Fragment,{children:[D.jsx("li",{className:"nav-item mx-2",children:D.jsx(Wn,{to:"/react-firebase/login",className:"btn btn-primary btn-sm ",children:"Login"})}),D.jsx("li",{className:"nav-item",children:D.jsx(Wn,{to:"/react-firebase/register",className:"btn btn-success btn-sm",children:"Register"})})]})})]})},m2=()=>D.jsxs(D.Fragment,{children:[D.jsx(p2,{}),D.jsx("h1",{className:"display-1 my-5 text-center ",children:"REACT FILE MANAGE HERE"})]}),g2=()=>{const{isAuthenticated:e,user:t}=tm(r=>r.auth),n=ll();return D.jsxs("nav",{className:"navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3",children:[D.jsx(Wn,{to:"/react-firebase/dashboard",className:"navbar-brand ms-5",children:"File - Manager"}),D.jsx("ul",{className:"navbar-nav ms-auto me-5",children:e?D.jsxs(D.Fragment,{children:[D.jsx("li",{className:"nav-item mx-2",children:D.jsxs("p",{className:"my-0 mt-1 mx-2",children:[D.jsx("span",{className:"text-light mx-1 text-dark",children:"Welcome,"}),D.jsx("span",{className:"fw-bold text-dark",children:t.displayName})]})}),D.jsx("li",{className:"nav-item mx-2",children:D.jsx(Wn,{to:"/react-firebase/",className:"btn btn-primary",children:"Home"})}),D.jsx("li",{className:"nav-item",children:D.jsx("button",{to:"/react-firebase/logout",className:"btn btn-success",onClick:()=>n(dT()),children:"Logout"})})]}):D.jsxs(D.Fragment,{children:[D.jsx("li",{className:"nav-item mx-2",children:D.jsx(Wn,{to:"/react-firebase/login",className:"btn btn-primary btn-sm ",children:"Login"})}),D.jsx("li",{className:"nav-item",children:D.jsx(Wn,{to:"/react-firebase/register",className:"btn btn-success btn-sm",children:"Register"})})]})})]})};function S_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?S_(Object(n),!0).forEach(function(r){rt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pc(e){"@babel/helpers - typeof";return pc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pc(e)}function v2(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I_(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y2(e,t,n){return t&&I_(e.prototype,t),n&&I_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function rt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pm(e,t){return E2(e)||b2(e,t)||gT(e,t)||S2()}function ml(e){return _2(e)||w2(e)||gT(e)||T2()}function _2(e){if(Array.isArray(e))return Dh(e)}function E2(e){if(Array.isArray(e))return e}function w2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function b2(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(u){o=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function gT(e,t){if(e){if(typeof e=="string")return Dh(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dh(e,t)}}function Dh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var k_=function(){},Nm={},vT={},yT=null,_T={mark:k_,measure:k_};try{typeof window<"u"&&(Nm=window),typeof document<"u"&&(vT=document),typeof MutationObserver<"u"&&(yT=MutationObserver),typeof performance<"u"&&(_T=performance)}catch{}var I2=Nm.navigator||{},C_=I2.userAgent,A_=C_===void 0?"":C_,ni=Nm,Me=vT,O_=yT,tu=_T;ni.document;var wr=!!Me.documentElement&&!!Me.head&&typeof Me.addEventListener=="function"&&typeof Me.createElement=="function",ET=~A_.indexOf("MSIE")||~A_.indexOf("Trident/"),nu,ru,iu,ou,au,pr="___FONT_AWESOME___",Mh=16,wT="fa",bT="svg-inline--fa",io="data-fa-i2svg",$h="data-fa-pseudo-element",k2="data-fa-pseudo-element-pending",xm="data-prefix",Rm="data-icon",P_="fontawesome-i2svg",C2="async",A2=["HTML","HEAD","STYLE","SCRIPT"],TT=function(){try{return!0}catch{return!1}}(),De="classic",He="sharp",Lm=[De,He];function gl(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[De]}})}var Fs=gl((nu={},rt(nu,De,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),rt(nu,He,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),nu)),Us=gl((ru={},rt(ru,De,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),rt(ru,He,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ru)),js=gl((iu={},rt(iu,De,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),rt(iu,He,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),iu)),O2=gl((ou={},rt(ou,De,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),rt(ou,He,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ou)),P2=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ST="fa-layers-text",N2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,x2=gl((au={},rt(au,De,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),rt(au,He,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),au)),IT=[1,2,3,4,5,6,7,8,9,10],R2=IT.concat([11,12,13,14,15,16,17,18,19,20]),L2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Vs=new Set;Object.keys(Us[De]).map(Vs.add.bind(Vs));Object.keys(Us[He]).map(Vs.add.bind(Vs));var D2=[].concat(Lm,ml(Vs),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Mi.GROUP,Mi.SWAP_OPACITY,Mi.PRIMARY,Mi.SECONDARY]).concat(IT.map(function(e){return"".concat(e,"x")})).concat(R2.map(function(e){return"w-".concat(e)})),ms=ni.FontAwesomeConfig||{};function M2(e){var t=Me.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $2(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Me&&typeof Me.querySelector=="function"){var F2=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];F2.forEach(function(e){var t=Pm(e,2),n=t[0],r=t[1],i=$2(M2(n));i!=null&&(ms[r]=i)})}var kT={styleDefault:"solid",familyDefault:"classic",cssPrefix:wT,replacementClass:bT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ms.familyPrefix&&(ms.cssPrefix=ms.familyPrefix);var sa=K(K({},kT),ms);sa.autoReplaceSvg||(sa.observeMutations=!1);var q={};Object.keys(kT).forEach(function(e){Object.defineProperty(q,e,{enumerable:!0,set:function(n){sa[e]=n,gs.forEach(function(r){return r(q)})},get:function(){return sa[e]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){sa.cssPrefix=t,gs.forEach(function(n){return n(q)})},get:function(){return sa.cssPrefix}});ni.FontAwesomeConfig=q;var gs=[];function U2(e){return gs.push(e),function(){gs.splice(gs.indexOf(e),1)}}var Pr=Mh,Bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function j2(e){if(!(!e||!wr)){var t=Me.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Me.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Me.head.insertBefore(t,r),e}}var V2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function zs(){for(var e=12,t="";e-- >0;)t+=V2[Math.random()*62|0];return t}function _a(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Dm(e){return e.classList?_a(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function CT(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z2(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(CT(e[n]),'" ')},"").trim()}function rf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Mm(e){return e.size!==Bn.size||e.x!==Bn.x||e.y!==Bn.y||e.rotate!==Bn.rotate||e.flipX||e.flipY}function W2(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(o," ").concat(a," ").concat(l)},d={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:d}}function H2(e){var t=e.transform,n=e.width,r=n===void 0?Mh:n,i=e.height,o=i===void 0?Mh:i,a=e.startCentered,l=a===void 0?!1:a,u="";return l&&ET?u+="translate(".concat(t.x/Pr-r/2,"em, ").concat(t.y/Pr-o/2,"em) "):l?u+="translate(calc(-50% + ".concat(t.x/Pr,"em), calc(-50% + ").concat(t.y/Pr,"em)) "):u+="translate(".concat(t.x/Pr,"em, ").concat(t.y/Pr,"em) "),u+="scale(".concat(t.size/Pr*(t.flipX?-1:1),", ").concat(t.size/Pr*(t.flipY?-1:1),") "),u+="rotate(".concat(t.rotate,"deg) "),u}var B2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function AT(){var e=wT,t=bT,n=q.cssPrefix,r=q.replacementClass,i=B2;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var N_=!1;function Sd(){q.autoAddCss&&!N_&&(j2(AT()),N_=!0)}var K2={mixout:function(){return{dom:{css:AT,insertCss:Sd}}},hooks:function(){return{beforeDOMElementCreation:function(){Sd()},beforeI2svg:function(){Sd()}}}},mr=ni||{};mr[pr]||(mr[pr]={});mr[pr].styles||(mr[pr].styles={});mr[pr].hooks||(mr[pr].hooks={});mr[pr].shims||(mr[pr].shims=[]);var kn=mr[pr],OT=[],Y2=function e(){Me.removeEventListener("DOMContentLoaded",e),mc=1,OT.map(function(t){return t()})},mc=!1;wr&&(mc=(Me.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Me.readyState),mc||Me.addEventListener("DOMContentLoaded",Y2));function G2(e){wr&&(mc?setTimeout(e,0):OT.push(e))}function vl(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?CT(e):"<".concat(t," ").concat(z2(r),">").concat(o.map(vl).join(""),"</").concat(t,">")}function x_(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var q2=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},Id=function(t,n,r,i){var o=Object.keys(t),a=o.length,l=i!==void 0?q2(n,i):n,u,d,p;for(r===void 0?(u=1,p=t[o[0]]):(u=0,p=r);u<a;u++)d=o[u],p=l(p,t[d],d,t);return p};function X2(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Fh(e){var t=X2(e);return t.length===1?t[0].toString(16):null}function Q2(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function R_(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Uh(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=R_(t);typeof kn.hooks.addPack=="function"&&!i?kn.hooks.addPack(e,R_(t)):kn.styles[e]=K(K({},kn.styles[e]||{}),o),e==="fas"&&Uh("fa",t)}var su,lu,uu,Fo=kn.styles,J2=kn.shims,Z2=(su={},rt(su,De,Object.values(js[De])),rt(su,He,Object.values(js[He])),su),$m=null,PT={},NT={},xT={},RT={},LT={},e$=(lu={},rt(lu,De,Object.keys(Fs[De])),rt(lu,He,Object.keys(Fs[He])),lu);function t$(e){return~D2.indexOf(e)}function n$(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!t$(i)?i:null}var DT=function(){var t=function(o){return Id(Fo,function(a,l,u){return a[u]=Id(l,o,{}),a},{})};PT=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var l=o[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){i[u.toString(16)]=a})}return i}),NT=t(function(i,o,a){if(i[a]=a,o[2]){var l=o[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){i[u]=a})}return i}),LT=t(function(i,o,a){var l=o[2];return i[a]=a,l.forEach(function(u){i[u]=a}),i});var n="far"in Fo||q.autoFetchSvg,r=Id(J2,function(i,o){var a=o[0],l=o[1],u=o[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(i.names[a]={prefix:l,iconName:u}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:l,iconName:u}),i},{names:{},unicodes:{}});xT=r.names,RT=r.unicodes,$m=of(q.styleDefault,{family:q.familyDefault})};U2(function(e){$m=of(e.styleDefault,{family:q.familyDefault})});DT();function Fm(e,t){return(PT[e]||{})[t]}function r$(e,t){return(NT[e]||{})[t]}function $i(e,t){return(LT[e]||{})[t]}function MT(e){return xT[e]||{prefix:null,iconName:null}}function i$(e){var t=RT[e],n=Fm("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ri(){return $m}var Um=function(){return{prefix:null,iconName:null,rest:[]}};function of(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?De:n,i=Fs[r][e],o=Us[r][e]||Us[r][i],a=e in kn.styles?e:null;return o||a||null}var L_=(uu={},rt(uu,De,Object.keys(js[De])),rt(uu,He,Object.keys(js[He])),uu);function af(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},rt(t,De,"".concat(q.cssPrefix,"-").concat(De)),rt(t,He,"".concat(q.cssPrefix,"-").concat(He)),t),a=null,l=De;(e.includes(o[De])||e.some(function(d){return L_[De].includes(d)}))&&(l=De),(e.includes(o[He])||e.some(function(d){return L_[He].includes(d)}))&&(l=He);var u=e.reduce(function(d,p){var m=n$(q.cssPrefix,p);if(Fo[p]?(p=Z2[l].includes(p)?O2[l][p]:p,a=p,d.prefix=p):e$[l].indexOf(p)>-1?(a=p,d.prefix=of(p,{family:l})):m?d.iconName=m:p!==q.replacementClass&&p!==o[De]&&p!==o[He]&&d.rest.push(p),!i&&d.prefix&&d.iconName){var w=a==="fa"?MT(d.iconName):{},S=$i(d.prefix,d.iconName);w.prefix&&(a=null),d.iconName=w.iconName||S||d.iconName,d.prefix=w.prefix||d.prefix,d.prefix==="far"&&!Fo.far&&Fo.fas&&!q.autoFetchSvg&&(d.prefix="fas")}return d},Um());return(e.includes("fa-brands")||e.includes("fab"))&&(u.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(u.prefix="fad"),!u.prefix&&l===He&&(Fo.fass||q.autoFetchSvg)&&(u.prefix="fass",u.iconName=$i(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||a==="fa")&&(u.prefix=ri()||"fas"),u}var o$=function(){function e(){v2(this,e),this.definitions={}}return y2(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=K(K({},n.definitions[l]||{}),a[l]),Uh(l,a[l]);var u=js[De][l];u&&Uh(u,a[l]),DT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],l=a.prefix,u=a.iconName,d=a.icon,p=d[2];n[l]||(n[l]={}),p.length>0&&p.forEach(function(m){typeof m=="string"&&(n[l][m]=d)}),n[l][u]=d}),n}}]),e}(),D_=[],Uo={},Jo={},a$=Object.keys(Jo);function s$(e,t){var n=t.mixoutsTo;return D_=e,Uo={},Object.keys(Jo).forEach(function(r){a$.indexOf(r)===-1&&delete Jo[r]}),D_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),pc(i[a])==="object"&&Object.keys(i[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=i[a][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){Uo[a]||(Uo[a]=[]),Uo[a].push(o[a])})}r.provides&&r.provides(Jo)}),n}function jh(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Uo[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function oo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Uo[e]||[];i.forEach(function(o){o.apply(null,n)})}function gr(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Jo[e]?Jo[e].apply(null,t):void 0}function Vh(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ri();if(t)return t=$i(n,t)||t,x_($T.definitions,n,t)||x_(kn.styles,n,t)}var $T=new o$,l$=function(){q.autoReplaceSvg=!1,q.observeMutations=!1,oo("noAuto")},u$={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return wr?(oo("beforeI2svg",t),gr("pseudoElements2svg",t),gr("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,G2(function(){f$({autoReplaceSvgRoot:n}),oo("watch",t)})}},c$={icon:function(t){if(t===null)return null;if(pc(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$i(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=of(t[0]);return{prefix:r,iconName:$i(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(P2))){var i=af(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||ri(),iconName:$i(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=ri();return{prefix:o,iconName:$i(o,t)||t}}}},nn={noAuto:l$,config:q,dom:u$,parse:c$,library:$T,findIconDefinition:Vh,toHtml:vl},f$=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Me:n;(Object.keys(kn.styles).length>0||q.autoFetchSvg)&&wr&&q.autoReplaceSvg&&nn.dom.i2svg({node:r})};function sf(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return vl(r)})}}),Object.defineProperty(e,"node",{get:function(){if(wr){var r=Me.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function d$(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(Mm(a)&&n.found&&!r.found){var l=n.width,u=n.height,d={x:l/u/2,y:.5};i.style=rf(K(K({},o),{},{"transform-origin":"".concat(d.x+a.x/16,"em ").concat(d.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function h$(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(q.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(K({},i),{},{id:a}),children:r}]}]}function jm(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,l=e.symbol,u=e.title,d=e.maskId,p=e.titleId,m=e.extra,w=e.watchable,S=w===void 0?!1:w,O=r.found?r:n,A=O.width,g=O.height,v=i==="fak",E=[q.replacementClass,o?"".concat(q.cssPrefix,"-").concat(o):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),I={children:[],attributes:K(K({},m.attributes),{},{"data-prefix":i,"data-icon":o,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(g)})},_=v&&!~m.classes.indexOf("fa-fw")?{width:"".concat(A/g*16*.0625,"em")}:{};S&&(I.attributes[io]=""),u&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(p||zs())},children:[u]}),delete I.attributes.title);var x=K(K({},I),{},{prefix:i,iconName:o,main:n,mask:r,maskId:d,transform:a,symbol:l,styles:K(K({},_),m.styles)}),M=r.found&&n.found?gr("generateAbstractMask",x)||{children:[],attributes:{}}:gr("generateAbstractIcon",x)||{children:[],attributes:{}},L=M.children,B=M.attributes;return x.children=L,x.attributes=B,l?h$(x):d$(x)}function M_(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,l=e.watchable,u=l===void 0?!1:l,d=K(K(K({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});u&&(d[io]="");var p=K({},a.styles);Mm(i)&&(p.transform=H2({transform:i,startCentered:!0,width:n,height:r}),p["-webkit-transform"]=p.transform);var m=rf(p);m.length>0&&(d.style=m);var w=[];return w.push({tag:"span",attributes:d,children:[t]}),o&&w.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),w}function p$(e){var t=e.content,n=e.title,r=e.extra,i=K(K(K({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=rf(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var kd=kn.styles;function zh(e){var t=e[0],n=e[1],r=e.slice(4),i=Pm(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(Mi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Mi.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(Mi.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var m$={found:!1,width:512,height:512};function g$(e,t){!TT&&!q.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Wh(e,t){var n=t;return t==="fa"&&q.styleDefault!==null&&(t=ri()),new Promise(function(r,i){if(gr("missingIconAbstract"),n==="fa"){var o=MT(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&kd[t]&&kd[t][e]){var a=kd[t][e];return r(zh(a))}g$(e,t),r(K(K({},m$),{},{icon:q.showMissingIcons&&e?gr("missingIconAbstract")||{}:{}}))})}var $_=function(){},Hh=q.measurePerformance&&tu&&tu.mark&&tu.measure?tu:{mark:$_,measure:$_},ts='FA "6.5.1"',v$=function(t){return Hh.mark("".concat(ts," ").concat(t," begins")),function(){return FT(t)}},FT=function(t){Hh.mark("".concat(ts," ").concat(t," ends")),Hh.measure("".concat(ts," ").concat(t),"".concat(ts," ").concat(t," begins"),"".concat(ts," ").concat(t," ends"))},Vm={begin:v$,end:FT},Ou=function(){};function F_(e){var t=e.getAttribute?e.getAttribute(io):null;return typeof t=="string"}function y$(e){var t=e.getAttribute?e.getAttribute(xm):null,n=e.getAttribute?e.getAttribute(Rm):null;return t&&n}function _$(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(q.replacementClass)}function E$(){if(q.autoReplaceSvg===!0)return Pu.replace;var e=Pu[q.autoReplaceSvg];return e||Pu.replace}function w$(e){return Me.createElementNS("http://www.w3.org/2000/svg",e)}function b$(e){return Me.createElement(e)}function UT(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?w$:b$:n;if(typeof e=="string")return Me.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(UT(a,{ceFn:r}))}),i}function T$(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pu={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(UT(i),n)}),n.getAttribute(io)===null&&q.keepOriginalSource){var r=Me.createComment(T$(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Dm(n).indexOf(q.replacementClass))return Pu.replace(t);var i=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,u){return u===q.replacementClass||u.match(i)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(l){return vl(l)}).join(`
`);n.setAttribute(io,""),n.innerHTML=a}};function U_(e){e()}function jT(e,t){var n=typeof t=="function"?t:Ou;if(e.length===0)n();else{var r=U_;q.mutateApproach===C2&&(r=ni.requestAnimationFrame||U_),r(function(){var i=E$(),o=Vm.begin("mutate");e.map(i),o(),n()})}}var zm=!1;function VT(){zm=!0}function Bh(){zm=!1}var gc=null;function j_(e){if(O_&&q.observeMutations){var t=e.treeCallback,n=t===void 0?Ou:t,r=e.nodeCallback,i=r===void 0?Ou:r,o=e.pseudoElementsCallback,a=o===void 0?Ou:o,l=e.observeMutationsRoot,u=l===void 0?Me:l;gc=new O_(function(d){if(!zm){var p=ri();_a(d).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!F_(m.addedNodes[0])&&(q.searchPseudoElements&&a(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&q.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&F_(m.target)&&~L2.indexOf(m.attributeName))if(m.attributeName==="class"&&y$(m.target)){var w=af(Dm(m.target)),S=w.prefix,O=w.iconName;m.target.setAttribute(xm,S||p),O&&m.target.setAttribute(Rm,O)}else _$(m.target)&&i(m.target)})}}),wr&&gc.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function S$(){gc&&gc.disconnect()}function I$(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function k$(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=af(Dm(e));return i.prefix||(i.prefix=ri()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=r$(i.prefix,e.innerText)||Fm(i.prefix,Fh(e.innerText))),!i.iconName&&q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function C$(e){var t=_a(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return q.autoA11y&&(n?t["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(r||zs()):(t["aria-hidden"]="true",t.focusable="false")),t}function A$(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function V_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=k$(e),r=n.iconName,i=n.prefix,o=n.rest,a=C$(e),l=jh("parseNodeAttributes",{},e),u=t.styleParser?I$(e):[];return K({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:u,attributes:a}},l)}var O$=kn.styles;function zT(e){var t=q.autoReplaceSvg==="nest"?V_(e,{styleParser:!1}):V_(e);return~t.extra.classes.indexOf(ST)?gr("generateLayersText",e,t):gr("generateSvgReplacementMutation",e,t)}var ii=new Set;Lm.map(function(e){ii.add("fa-".concat(e))});Object.keys(Fs[De]).map(ii.add.bind(ii));Object.keys(Fs[He]).map(ii.add.bind(ii));ii=ml(ii);function z_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!wr)return Promise.resolve();var n=Me.documentElement.classList,r=function(m){return n.add("".concat(P_,"-").concat(m))},i=function(m){return n.remove("".concat(P_,"-").concat(m))},o=q.autoFetchSvg?ii:Lm.map(function(p){return"fa-".concat(p)}).concat(Object.keys(O$));o.includes("fa")||o.push("fa");var a=[".".concat(ST,":not([").concat(io,"])")].concat(o.map(function(p){return".".concat(p,":not([").concat(io,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=_a(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var u=Vm.begin("onTree"),d=l.reduce(function(p,m){try{var w=zT(m);w&&p.push(w)}catch(S){TT||S.name==="MissingIcon"&&console.error(S)}return p},[]);return new Promise(function(p,m){Promise.all(d).then(function(w){jT(w,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),u(),p()})}).catch(function(w){u(),m(w)})})}function P$(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zT(e).then(function(n){n&&jT([n],t)})}function N$(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Vh(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Vh(i||{})),e(r,K(K({},n),{},{mask:i}))}}var x$=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Bn:r,o=n.symbol,a=o===void 0?!1:o,l=n.mask,u=l===void 0?null:l,d=n.maskId,p=d===void 0?null:d,m=n.title,w=m===void 0?null:m,S=n.titleId,O=S===void 0?null:S,A=n.classes,g=A===void 0?[]:A,v=n.attributes,E=v===void 0?{}:v,I=n.styles,_=I===void 0?{}:I;if(t){var x=t.prefix,M=t.iconName,L=t.icon;return sf(K({type:"icon"},t),function(){return oo("beforeDOMElementCreation",{iconDefinition:t,params:n}),q.autoA11y&&(w?E["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(O||zs()):(E["aria-hidden"]="true",E.focusable="false")),jm({icons:{main:zh(L),mask:u?zh(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:M,transform:K(K({},Bn),i),symbol:a,title:w,maskId:p,titleId:O,extra:{attributes:E,styles:_,classes:g}})})}},R$={mixout:function(){return{icon:N$(x$)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=z_,n.nodeCallback=P$,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Me:r,o=n.callback,a=o===void 0?function(){}:o;return z_(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,l=r.prefix,u=r.transform,d=r.symbol,p=r.mask,m=r.maskId,w=r.extra;return new Promise(function(S,O){Promise.all([Wh(i,l),p.iconName?Wh(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var g=Pm(A,2),v=g[0],E=g[1];S([n,jm({icons:{main:v,mask:E},prefix:l,iconName:i,transform:u,symbol:d,maskId:m,title:o,titleId:a,extra:w,watchable:!0})])}).catch(O)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,l=n.styles,u=rf(l);u.length>0&&(i.style=u);var d;return Mm(a)&&(d=gr("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(d||o.icon),{children:r,attributes:i}}}},L$={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return sf({type:"layer"},function(){oo("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(u){a=a.concat(u.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers")].concat(ml(o)).join(" ")},children:a}]})}}}},D$={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,l=a===void 0?[]:a,u=r.attributes,d=u===void 0?{}:u,p=r.styles,m=p===void 0?{}:p;return sf({type:"counter",content:n},function(){return oo("beforeDOMElementCreation",{content:n,params:r}),p$({content:n.toString(),title:o,extra:{attributes:d,styles:m,classes:["".concat(q.cssPrefix,"-layers-counter")].concat(ml(l))}})})}}}},M$={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Bn:i,a=r.title,l=a===void 0?null:a,u=r.classes,d=u===void 0?[]:u,p=r.attributes,m=p===void 0?{}:p,w=r.styles,S=w===void 0?{}:w;return sf({type:"text",content:n},function(){return oo("beforeDOMElementCreation",{content:n,params:r}),M_({content:n,transform:K(K({},Bn),o),title:l,extra:{attributes:m,styles:S,classes:["".concat(q.cssPrefix,"-layers-text")].concat(ml(d))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,l=null,u=null;if(ET){var d=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();l=p.width/d,u=p.height/d}return q.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,M_({content:n.innerHTML,width:l,height:u,transform:o,title:i,extra:a,watchable:!0})])}}},$$=new RegExp('"',"ug"),W_=[1105920,1112319];function F$(e){var t=e.replace($$,""),n=Q2(t,0),r=n>=W_[0]&&n<=W_[1],i=t.length===2?t[0]===t[1]:!1;return{value:Fh(i?t[0]:t),isSecondary:r||i}}function H_(e,t){var n="".concat(k2).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=_a(e.children),a=o.filter(function(L){return L.getAttribute($h)===t})[0],l=ni.getComputedStyle(e,t),u=l.getPropertyValue("font-family").match(N2),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(a&&!u)return e.removeChild(a),r();if(u&&p!=="none"&&p!==""){var m=l.getPropertyValue("content"),w=~["Sharp"].indexOf(u[2])?He:De,S=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Us[w][u[2].toLowerCase()]:x2[w][d],O=F$(m),A=O.value,g=O.isSecondary,v=u[0].startsWith("FontAwesome"),E=Fm(S,A),I=E;if(v){var _=i$(A);_.iconName&&_.prefix&&(E=_.iconName,S=_.prefix)}if(E&&!g&&(!a||a.getAttribute(xm)!==S||a.getAttribute(Rm)!==I)){e.setAttribute(n,I),a&&e.removeChild(a);var x=A$(),M=x.extra;M.attributes[$h]=t,Wh(E,S).then(function(L){var B=jm(K(K({},x),{},{icons:{main:L,mask:Um()},prefix:S,iconName:I,extra:M,watchable:!0})),W=Me.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(W,e.firstChild):e.appendChild(W),W.outerHTML=B.map(function(ve){return vl(ve)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function U$(e){return Promise.all([H_(e,"::before"),H_(e,"::after")])}function j$(e){return e.parentNode!==document.head&&!~A2.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($h)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function B_(e){if(wr)return new Promise(function(t,n){var r=_a(e.querySelectorAll("*")).filter(j$).map(U$),i=Vm.begin("searchPseudoElements");VT(),Promise.all(r).then(function(){i(),Bh(),t()}).catch(function(){i(),Bh(),n()})})}var V$={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=B_,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Me:r;q.searchPseudoElements&&B_(i)}}},K_=!1,z$={mixout:function(){return{dom:{unwatch:function(){VT(),K_=!0}}}},hooks:function(){return{bootstrap:function(){j_(jh("mutationObserverCallbacks",{}))},noAuto:function(){S$()},watch:function(n){var r=n.observeMutationsRoot;K_?Bh():j_(jh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Y_=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],l=o.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},W$={mixout:function(){return{parse:{transform:function(n){return Y_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Y_(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),p="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(u," ").concat(d," ").concat(p)},w={transform:"translate(".concat(a/2*-1," -256)")},S={outer:l,inner:m,path:w};return{tag:"g",attributes:K({},S.outer),children:[{tag:"g",attributes:K({},S.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:K(K({},r.icon.attributes),S.path)}]}]}}}},Cd={x:0,y:0,width:"100%",height:"100%"};function G_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function H$(e){return e.tag==="g"?e.children:[e]}var B$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?af(i.split(" ").map(function(a){return a.trim()})):Um();return o.prefix||(o.prefix=ri()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,l=n.maskId,u=n.transform,d=o.width,p=o.icon,m=a.width,w=a.icon,S=W2({transform:u,containerWidth:m,iconWidth:d}),O={tag:"rect",attributes:K(K({},Cd),{},{fill:"white"})},A=p.children?{children:p.children.map(G_)}:{},g={tag:"g",attributes:K({},S.inner),children:[G_(K({tag:p.tag,attributes:K(K({},p.attributes),S.path)},A))]},v={tag:"g",attributes:K({},S.outer),children:[g]},E="mask-".concat(l||zs()),I="clip-".concat(l||zs()),_={tag:"mask",attributes:K(K({},Cd),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,v]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:H$(w)},_]};return r.push(x,{tag:"rect",attributes:K({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(E,")")},Cd)}),{children:r,attributes:i}}}},K$={provides:function(t){var n=!1;ni.matchMedia&&(n=ni.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:K(K({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=K(K({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:K(K({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:K(K({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:K(K({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:K(K({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:K(K({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:K(K({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:K(K({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Y$={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},G$=[K2,R$,L$,D$,M$,V$,z$,W$,B$,K$,Y$];s$(G$,{mixoutsTo:nn});nn.noAuto;nn.config;nn.library;nn.dom;var Kh=nn.parse;nn.findIconDefinition;nn.toHtml;var q$=nn.icon;nn.layer;nn.text;nn.counter;function q_(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ur(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q_(Object(n),!0).forEach(function(r){jo(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vc(e){"@babel/helpers - typeof";return vc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vc(e)}function jo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Q$(e,t){if(e==null)return{};var n=X$(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Yh(e){return J$(e)||Z$(e)||eF(e)||tF()}function J$(e){if(Array.isArray(e))return Gh(e)}function Z$(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eF(e,t){if(e){if(typeof e=="string")return Gh(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gh(e,t)}}function Gh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nF(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,l=e.flash,u=e.spin,d=e.spinPulse,p=e.spinReverse,m=e.pulse,w=e.fixedWidth,S=e.inverse,O=e.border,A=e.listItem,g=e.flip,v=e.size,E=e.rotation,I=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":p,"fa-spin-pulse":d,"fa-pulse":m,"fa-fw":w,"fa-inverse":S,"fa-border":O,"fa-li":A,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},jo(t,"fa-".concat(v),typeof v<"u"&&v!==null),jo(t,"fa-rotate-".concat(E),typeof E<"u"&&E!==null&&E!==0),jo(t,"fa-pull-".concat(I),typeof I<"u"&&I!==null),jo(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(x){return _[x]?x:null}).filter(function(x){return x})}function rF(e){return e=e-0,e===e}function WT(e){return rF(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var iF=["style"];function oF(e){return e.charAt(0).toUpperCase()+e.slice(1)}function aF(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=WT(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[oF(i)]=o:t[i]=o,t},{})}function HT(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return HT(e,u)}),i=Object.keys(t.attributes||{}).reduce(function(u,d){var p=t.attributes[d];switch(d){case"class":u.attrs.className=p,delete t.attributes.class;break;case"style":u.attrs.style=aF(p);break;default:d.indexOf("aria-")===0||d.indexOf("data-")===0?u.attrs[d.toLowerCase()]=p:u.attrs[WT(d)]=p}return u},{attrs:{}}),o=n.style,a=o===void 0?{}:o,l=Q$(n,iF);return i.attrs.style=Ur(Ur({},i.attrs.style),a),e.apply(void 0,[t.tag,Ur(Ur({},i.attrs),l)].concat(Yh(r)))}var BT=!1;try{BT=!0}catch{}function sF(){if(!BT&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function X_(e){if(e&&vc(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Kh.icon)return Kh.icon(e);if(e===null)return null;if(e&&vc(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ad(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?jo({},e,t):{}}var Ki=St.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,l=e.titleId,u=e.maskId,d=X_(n),p=Ad("classes",[].concat(Yh(nF(e)),Yh(o.split(" ")))),m=Ad("transform",typeof e.transform=="string"?Kh.transform(e.transform):e.transform),w=Ad("mask",X_(r)),S=q$(d,Ur(Ur(Ur(Ur({},p),m),w),{},{symbol:i,title:a,titleId:l,maskId:u}));if(!S)return sF("Could not find icon",d),null;var O=S.abstract,A={ref:t};return Object.keys(e).forEach(function(g){Ki.defaultProps.hasOwnProperty(g)||(A[g]=e[g])}),lF(O[0],A)});Ki.displayName="FontAwesomeIcon";Ki.propTypes={beat:de.bool,border:de.bool,beatFade:de.bool,bounce:de.bool,className:de.string,fade:de.bool,flash:de.bool,mask:de.oneOfType([de.object,de.array,de.string]),maskId:de.string,fixedWidth:de.bool,inverse:de.bool,flip:de.oneOf([!0,!1,"horizontal","vertical","both"]),icon:de.oneOfType([de.object,de.array,de.string]),listItem:de.bool,pull:de.oneOf(["right","left"]),pulse:de.bool,rotation:de.oneOf([0,90,180,270]),shake:de.bool,size:de.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:de.bool,spinPulse:de.bool,spinReverse:de.bool,symbol:de.oneOfType([de.bool,de.string]),title:de.string,titleId:de.string,transform:de.oneOfType([de.string,de.object]),swapOpacity:de.bool};Ki.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var lF=HT.bind(null,St.createElement),uF={prefix:"fas",iconName:"file-lines",icon:[384,512,[128441,128462,61686,"file-alt","file-text"],"f15c","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},cF=uF,fF={prefix:"fas",iconName:"folder-plus",icon:[512,512,[],"f65e","M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24V312h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V200c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H168c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z"]},dF={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]};const hF=()=>D.jsxs("nav",{className:"navbar navbar-expand-lg mt-2 navbar-light bg-white py-2 px-5",children:[D.jsx("p",{children:"Root"}),D.jsxs("ul",{className:"navbar-nav ms-auto",children:[D.jsx("li",{className:"nav-item mx-2",children:D.jsxs("button",{className:"btn btn-outline-dark",children:[D.jsx(Ki,{icon:dF}),"   Upload File"]})}),D.jsx("li",{className:"nav-item mx-2",children:D.jsxs("button",{className:"btn btn-outline-dark",children:[D.jsx(Ki,{icon:cF}),"   Create File"]})}),D.jsx("li",{className:"nav-item mx-2",children:D.jsxs("button",{className:"btn btn-outline-dark",children:[D.jsx(Ki,{icon:fF}),"   Create File"]})})]})]}),Q_=({title:e,items:t})=>D.jsxs("div",{className:"w-100",children:[D.jsx("h4",{className:"text-center border-bottom py-2",children:e}),D.jsx("div",{className:"row gap-2 py-4 flex-wrap",children:t.map((n,r)=>D.jsx("p",{className:"col-md-2 p-2 text-center border",children:n},r*Math.random()))})]}),pF=()=>{const e=["New Folder","new folder 2"],t=["New File","new file 2"];return D.jsxs("div",{className:"col-md-12 w-100",children:[D.jsx(Q_,{title:"Create Folders",items:e}),D.jsx(Q_,{title:"Create Files",items:t})]})},mF=()=>{const e=tm(n=>n.auth.isAuthenticated),t=Lc();return $.useEffect(()=>{e||t("/react-firebase/")},[]),D.jsxs(D.Fragment,{children:[D.jsx(g2,{}),D.jsx(hF,{}),D.jsx(pF,{})]})},gF=lP([{path:"/react-firebase/",element:D.jsx(qM,{}),children:[{path:"/react-firebase/",element:D.jsx(m2,{})},{path:"/react-firebase/login",element:D.jsx(f2,{})},{path:"/react-firebase/register",element:D.jsx(h2,{})},{path:"/react-firebase/dashboard",element:D.jsx(mF,{})}]}]);mb.render(D.jsx(St.StrictMode,{children:D.jsx(NP,{store:u2,children:D.jsx(vP,{router:gF})})}),document.getElementById("root"));
