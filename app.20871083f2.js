(()=>{var s0=Object.create;var Xr=Object.defineProperty;var r0=Object.getOwnPropertyDescriptor;var f0=Object.getOwnPropertyNames;var c0=Object.getPrototypeOf,u0=Object.prototype.hasOwnProperty;var Ae=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var d0=(t,e,a,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of f0(e))!u0.call(t,l)&&l!==a&&Xr(t,l,{get:()=>e[l],enumerable:!(i=r0(e,l))||i.enumerable});return t};var Qr=(t,e,a)=>(a=t!=null?s0(c0(t)):{},d0(e||!t||!t.__esModule?Xr(a,"default",{value:t,enumerable:!0}):a,t));var nf=Ae(T=>{"use strict";var ao=Symbol.for("react.transitional.element"),p0=Symbol.for("react.portal"),h0=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),m0=Symbol.for("react.consumer"),y0=Symbol.for("react.context"),x0=Symbol.for("react.forward_ref"),v0=Symbol.for("react.suspense"),w0=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),S0=Symbol.for("react.activity"),Jr=Symbol.iterator;function k0(t){return t===null||typeof t!="object"?null:(t=Jr&&t[Jr]||t["@@iterator"],typeof t=="function"?t:null)}var Pr={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tf=Object.assign,ef={};function za(t,e,a){this.props=t,this.context=e,this.refs=ef,this.updater=a||Pr}za.prototype.isReactComponent={};za.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};za.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function af(){}af.prototype=za.prototype;function io(t,e,a){this.props=t,this.context=e,this.refs=ef,this.updater=a||Pr}var lo=io.prototype=new af;lo.constructor=io;tf(lo,za.prototype);lo.isPureReactComponent=!0;var Fr=Array.isArray;function eo(){}var Z={H:null,A:null,T:null,S:null},lf=Object.prototype.hasOwnProperty;function no(t,e,a){var i=a.ref;return{$$typeof:ao,type:t,key:e,ref:i!==void 0?i:null,props:a}}function T0(t,e){return no(t.type,e,t.props)}function oo(t){return typeof t=="object"&&t!==null&&t.$$typeof===ao}function z0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Wr=/\/+/g;function to(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z0(""+t.key):e.toString(36)}function M0(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(eo,eo):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ta(t,e,a,i,l){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ao:case p0:o=!0;break;case $r:return o=t._init,Ta(o(t._payload),e,a,i,l)}}if(o)return l=l(t),o=i===""?"."+to(t,0):i,Fr(l)?(a="",o!=null&&(a=o.replace(Wr,"$&/")+"/"),Ta(l,e,a,"",function(u){return u})):l!=null&&(oo(l)&&(l=T0(l,a+(l.key==null||t&&t.key===l.key?"":(""+l.key).replace(Wr,"$&/")+"/")+o)),e.push(l)),1;o=0;var s=i===""?".":i+":";if(Fr(t))for(var r=0;r<t.length;r++)i=t[r],n=s+to(i,r),o+=Ta(i,e,a,n,l);else if(r=k0(t),typeof r=="function")for(t=r.call(t),r=0;!(i=t.next()).done;)i=i.value,n=s+to(i,r++),o+=Ta(i,e,a,n,l);else if(n==="object"){if(typeof t.then=="function")return Ta(M0(t),e,a,i,l);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function yl(t,e,a){if(t==null)return t;var i=[],l=0;return Ta(t,i,"","",function(n){return e.call(a,n,l++)}),i}function C0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ir=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},A0={map:yl,forEach:function(t,e,a){yl(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return yl(t,function(){e++}),e},toArray:function(t){return yl(t,function(e){return e})||[]},only:function(t){if(!oo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};T.Activity=S0;T.Children=A0;T.Component=za;T.Fragment=h0;T.Profiler=b0;T.PureComponent=io;T.StrictMode=g0;T.Suspense=v0;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z;T.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Z.H.useMemoCache(t)}};T.cache=function(t){return function(){return t.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=tf({},t.props),l=t.key;if(e!=null)for(n in e.key!==void 0&&(l=""+e.key),e)!lf.call(e,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&e.ref===void 0||(i[n]=e[n]);var n=arguments.length-2;if(n===1)i.children=a;else if(1<n){for(var o=Array(n),s=0;s<n;s++)o[s]=arguments[s+2];i.children=o}return no(t.type,l,i)};T.createContext=function(t){return t={$$typeof:y0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:m0,_context:t},t};T.createElement=function(t,e,a){var i,l={},n=null;if(e!=null)for(i in e.key!==void 0&&(n=""+e.key),e)lf.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(l[i]=e[i]);var o=arguments.length-2;if(o===1)l.children=a;else if(1<o){for(var s=Array(o),r=0;r<o;r++)s[r]=arguments[r+2];l.children=s}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)l[i]===void 0&&(l[i]=o[i]);return no(t,n,l)};T.createRef=function(){return{current:null}};T.forwardRef=function(t){return{$$typeof:x0,render:t}};T.isValidElement=oo;T.lazy=function(t){return{$$typeof:$r,_payload:{_status:-1,_result:t},_init:C0}};T.memo=function(t,e){return{$$typeof:w0,type:t,compare:e===void 0?null:e}};T.startTransition=function(t){var e=Z.T,a={};Z.T=a;try{var i=t(),l=Z.S;l!==null&&l(a,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(eo,Ir)}catch(n){Ir(n)}finally{e!==null&&a.types!==null&&(e.types=a.types),Z.T=e}};T.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()};T.use=function(t){return Z.H.use(t)};T.useActionState=function(t,e,a){return Z.H.useActionState(t,e,a)};T.useCallback=function(t,e){return Z.H.useCallback(t,e)};T.useContext=function(t){return Z.H.useContext(t)};T.useDebugValue=function(){};T.useDeferredValue=function(t,e){return Z.H.useDeferredValue(t,e)};T.useEffect=function(t,e){return Z.H.useEffect(t,e)};T.useEffectEvent=function(t){return Z.H.useEffectEvent(t)};T.useId=function(){return Z.H.useId()};T.useImperativeHandle=function(t,e,a){return Z.H.useImperativeHandle(t,e,a)};T.useInsertionEffect=function(t,e){return Z.H.useInsertionEffect(t,e)};T.useLayoutEffect=function(t,e){return Z.H.useLayoutEffect(t,e)};T.useMemo=function(t,e){return Z.H.useMemo(t,e)};T.useOptimistic=function(t,e){return Z.H.useOptimistic(t,e)};T.useReducer=function(t,e,a){return Z.H.useReducer(t,e,a)};T.useRef=function(t){return Z.H.useRef(t)};T.useState=function(t){return Z.H.useState(t)};T.useSyncExternalStore=function(t,e,a){return Z.H.useSyncExternalStore(t,e,a)};T.useTransition=function(){return Z.H.useTransition()};T.version="19.2.8"});var xl=Ae((zg,of)=>{"use strict";of.exports=nf()});var bf=Ae(J=>{"use strict";function co(t,e){var a=t.length;t.push(e);t:for(;0<a;){var i=a-1>>>1,l=t[i];if(0<vl(l,e))t[i]=e,t[a]=l,a=i;else break t}}function $t(t){return t.length===0?null:t[0]}function Sl(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;t:for(var i=0,l=t.length,n=l>>>1;i<n;){var o=2*(i+1)-1,s=t[o],r=o+1,u=t[r];if(0>vl(s,a))r<l&&0>vl(u,s)?(t[i]=u,t[r]=a,i=r):(t[i]=s,t[o]=a,i=o);else if(r<l&&0>vl(u,a))t[i]=u,t[r]=a,i=r;else break t}}return e}function vl(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}J.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(sf=performance,J.unstable_now=function(){return sf.now()}):(so=Date,rf=so.now(),J.unstable_now=function(){return so.now()-rf});var sf,so,rf,oe=[],Ee=[],E0=1,Ut=null,ht=3,uo=!1,mi=!1,yi=!1,po=!1,uf=typeof setTimeout=="function"?setTimeout:null,df=typeof clearTimeout=="function"?clearTimeout:null,ff=typeof setImmediate!="undefined"?setImmediate:null;function wl(t){for(var e=$t(Ee);e!==null;){if(e.callback===null)Sl(Ee);else if(e.startTime<=t)Sl(Ee),e.sortIndex=e.expirationTime,co(oe,e);else break;e=$t(Ee)}}function ho(t){if(yi=!1,wl(t),!mi)if($t(oe)!==null)mi=!0,Ca||(Ca=!0,Ma());else{var e=$t(Ee);e!==null&&go(ho,e.startTime-t)}}var Ca=!1,xi=-1,pf=5,hf=-1;function gf(){return po?!0:!(J.unstable_now()-hf<pf)}function ro(){if(po=!1,Ca){var t=J.unstable_now();hf=t;var e=!0;try{t:{mi=!1,yi&&(yi=!1,df(xi),xi=-1),uo=!0;var a=ht;try{e:{for(wl(t),Ut=$t(oe);Ut!==null&&!(Ut.expirationTime>t&&gf());){var i=Ut.callback;if(typeof i=="function"){Ut.callback=null,ht=Ut.priorityLevel;var l=i(Ut.expirationTime<=t);if(t=J.unstable_now(),typeof l=="function"){Ut.callback=l,wl(t),e=!0;break e}Ut===$t(oe)&&Sl(oe),wl(t)}else Sl(oe);Ut=$t(oe)}if(Ut!==null)e=!0;else{var n=$t(Ee);n!==null&&go(ho,n.startTime-t),e=!1}}break t}finally{Ut=null,ht=a,uo=!1}e=void 0}}finally{e?Ma():Ca=!1}}}var Ma;typeof ff=="function"?Ma=function(){ff(ro)}:typeof MessageChannel!="undefined"?(fo=new MessageChannel,cf=fo.port2,fo.port1.onmessage=ro,Ma=function(){cf.postMessage(null)}):Ma=function(){uf(ro,0)};var fo,cf;function go(t,e){xi=uf(function(){t(J.unstable_now())},e)}J.unstable_IdlePriority=5;J.unstable_ImmediatePriority=1;J.unstable_LowPriority=4;J.unstable_NormalPriority=3;J.unstable_Profiling=null;J.unstable_UserBlockingPriority=2;J.unstable_cancelCallback=function(t){t.callback=null};J.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pf=0<t?Math.floor(1e3/t):5};J.unstable_getCurrentPriorityLevel=function(){return ht};J.unstable_next=function(t){switch(ht){case 1:case 2:case 3:var e=3;break;default:e=ht}var a=ht;ht=e;try{return t()}finally{ht=a}};J.unstable_requestPaint=function(){po=!0};J.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ht;ht=t;try{return e()}finally{ht=a}};J.unstable_scheduleCallback=function(t,e,a){var i=J.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?i+a:i):a=i,t){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return l=a+l,t={id:E0++,callback:e,priorityLevel:t,startTime:a,expirationTime:l,sortIndex:-1},a>i?(t.sortIndex=a,co(Ee,t),$t(oe)===null&&t===$t(Ee)&&(yi?(df(xi),xi=-1):yi=!0,go(ho,a-i))):(t.sortIndex=l,co(oe,t),mi||uo||(mi=!0,Ca||(Ca=!0,Ma()))),t};J.unstable_shouldYield=gf;J.unstable_wrapCallback=function(t){var e=ht;return function(){var a=ht;ht=e;try{return t.apply(this,arguments)}finally{ht=a}}}});var yf=Ae((Cg,mf)=>{"use strict";mf.exports=bf()});var vf=Ae(bt=>{"use strict";var _0=xl();function xf(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _e(){}var gt={d:{f:_e,r:function(){throw Error(xf(522))},D:_e,C:_e,L:_e,m:_e,X:_e,S:_e,M:_e},p:0,findDOMNode:null},O0=Symbol.for("react.portal");function B0(t,e,a){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O0,key:i==null?null:""+i,children:t,containerInfo:e,implementation:a}}var vi=_0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function kl(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gt;bt.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(xf(299));return B0(t,e,null,a)};bt.flushSync=function(t){var e=vi.T,a=gt.p;try{if(vi.T=null,gt.p=2,t)return t()}finally{vi.T=e,gt.p=a,gt.d.f()}};bt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,gt.d.C(t,e))};bt.prefetchDNS=function(t){typeof t=="string"&&gt.d.D(t)};bt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,i=kl(a,e.crossOrigin),l=typeof e.integrity=="string"?e.integrity:void 0,n=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?gt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:l,fetchPriority:n}):a==="script"&&gt.d.X(t,{crossOrigin:i,integrity:l,fetchPriority:n,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};bt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=kl(e.as,e.crossOrigin);gt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&gt.d.M(t)};bt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,i=kl(a,e.crossOrigin);gt.d.L(t,a,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};bt.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=kl(e.as,e.crossOrigin);gt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else gt.d.m(t)};bt.requestFormReset=function(t){gt.d.r(t)};bt.unstable_batchedUpdates=function(t,e){return t(e)};bt.useFormState=function(t,e,a){return vi.H.useFormState(t,e,a)};bt.useFormStatus=function(){return vi.H.useHostTransitionStatus()};bt.version="19.2.8"});var kf=Ae((Eg,Sf)=>{"use strict";function wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wf)}catch(t){console.error(t)}}wf(),Sf.exports=vf()});var Dp=Ae(Fn=>{"use strict";var nt=yf(),Fc=xl(),R0=kf();function y(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ol(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function Ic(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $c(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tf(t){if(ol(t)!==t)throw Error(y(188))}function N0(t){var e=t.alternate;if(!e){if(e=ol(t),e===null)throw Error(y(188));return e!==t?null:t}for(var a=t,i=e;;){var l=a.return;if(l===null)break;var n=l.alternate;if(n===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===n.child){for(n=l.child;n;){if(n===a)return Tf(l),t;if(n===i)return Tf(l),e;n=n.sibling}throw Error(y(188))}if(a.return!==i.return)a=l,i=n;else{for(var o=!1,s=l.child;s;){if(s===a){o=!0,a=l,i=n;break}if(s===i){o=!0,i=l,a=n;break}s=s.sibling}if(!o){for(s=n.child;s;){if(s===a){o=!0,a=n,i=l;break}if(s===i){o=!0,i=n,a=l;break}s=s.sibling}if(!o)throw Error(y(189))}}if(a.alternate!==i)throw Error(y(190))}if(a.tag!==3)throw Error(y(188));return a.stateNode.current===a?t:e}function Pc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Pc(t),e!==null)return e;t=t.sibling}return null}var Q=Object.assign,D0=Symbol.for("react.element"),Tl=Symbol.for("react.transitional.element"),Ai=Symbol.for("react.portal"),Ra=Symbol.for("react.fragment"),tu=Symbol.for("react.strict_mode"),Fo=Symbol.for("react.profiler"),eu=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Zs=Symbol.for("react.forward_ref"),Wo=Symbol.for("react.suspense"),Io=Symbol.for("react.suspense_list"),Vs=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),$o=Symbol.for("react.activity"),L0=Symbol.for("react.memo_cache_sentinel"),zf=Symbol.iterator;function wi(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var H0=Symbol.for("react.client.reference");function Po(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===H0?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ra:return"Fragment";case Fo:return"Profiler";case tu:return"StrictMode";case Wo:return"Suspense";case Io:return"SuspenseList";case $o:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ai:return"Portal";case he:return t.displayName||"Context";case eu:return(t._context.displayName||"Context")+".Consumer";case Zs:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vs:return e=t.displayName||null,e!==null?e:Po(t.type)||"Memo";case Oe:e=t._payload,t=t._init;try{return Po(t(e))}catch{}}return null}var Ei=Array.isArray,k=Fc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=R0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fa={pending:!1,data:null,method:null,action:null},ts=[],Na=-1;function ie(t){return{current:t}}function rt(t){0>Na||(t.current=ts[Na],ts[Na]=null,Na--)}function K(t,e){Na++,ts[Na]=t.current,t.current=e}var ae=ie(null),Xi=ie(null),Ye=ie(null),ln=ie(null);function nn(t,e){switch(K(Ye,e),K(Xi,t),K(ae,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Bc(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Bc(e),t=wp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}rt(ae),K(ae,t)}function $a(){rt(ae),rt(Xi),rt(Ye)}function es(t){t.memoizedState!==null&&K(ln,t);var e=ae.current,a=wp(e,t.type);e!==a&&(K(Xi,t),K(ae,a))}function on(t){Xi.current===t&&(rt(ae),rt(Xi)),ln.current===t&&(rt(ln),il._currentValue=fa)}var bo,Mf;function na(t){if(bo===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);bo=e&&e[1]||"",Mf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bo+t+Mf}var mo=!1;function yo(t,e){if(!t||mo)return"";mo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(c){var p=c}Reflect.construct(t,[],h)}else{try{h.call()}catch(c){p=c}t.call(h.prototype)}}else{try{throw Error()}catch(c){p=c}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(c){if(c&&p&&typeof c.stack=="string")return[c.stack,p.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=i.DetermineComponentFrameRoot(),o=n[0],s=n[1];if(o&&s){var r=o.split(`
`),u=s.split(`
`);for(l=i=0;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;for(;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;if(i===r.length||l===u.length)for(i=r.length-1,l=u.length-1;1<=i&&0<=l&&r[i]!==u[l];)l--;for(;1<=i&&0<=l;i--,l--)if(r[i]!==u[l]){if(i!==1||l!==1)do if(i--,l--,0>l||r[i]!==u[l]){var b=`
`+r[i].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=i&&0<=l);break}}}finally{mo=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?na(a):""}function U0(t,e){switch(t.tag){case 26:case 27:case 5:return na(t.type);case 16:return na("Lazy");case 13:return t.child!==e&&e!==null?na("Suspense Fallback"):na("Suspense");case 19:return na("SuspenseList");case 0:case 15:return yo(t.type,!1);case 11:return yo(t.type.render,!1);case 1:return yo(t.type,!0);case 31:return na("Activity");default:return""}}function Cf(t){try{var e="",a=null;do e+=U0(t,a),a=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var as=Object.prototype.hasOwnProperty,Xs=nt.unstable_scheduleCallback,xo=nt.unstable_cancelCallback,j0=nt.unstable_shouldYield,G0=nt.unstable_requestPaint,_t=nt.unstable_now,q0=nt.unstable_getCurrentPriorityLevel,au=nt.unstable_ImmediatePriority,iu=nt.unstable_UserBlockingPriority,sn=nt.unstable_NormalPriority,Y0=nt.unstable_LowPriority,lu=nt.unstable_IdlePriority,K0=nt.log,Z0=nt.unstable_setDisableYieldValue,sl=null,Ot=null;function He(t){if(typeof K0=="function"&&Z0(t),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(sl,t)}catch{}}var Bt=Math.clz32?Math.clz32:Q0,V0=Math.log,X0=Math.LN2;function Q0(t){return t>>>=0,t===0?32:31-(V0(t)/X0|0)|0}var zl=256,Ml=262144,Cl=4194304;function oa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Rn(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var l=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var s=i&134217727;return s!==0?(i=s&~n,i!==0?l=oa(i):(o&=s,o!==0?l=oa(o):a||(a=s&~t,a!==0&&(l=oa(a))))):(s=i&~n,s!==0?l=oa(s):o!==0?l=oa(o):a||(a=i&~t,a!==0&&(l=oa(a)))),l===0?0:e!==0&&e!==l&&(e&n)===0&&(n=l&-l,a=e&-e,n>=a||n===32&&(a&4194048)!==0)?e:l}function rl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function J0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nu(){var t=Cl;return Cl<<=1,(Cl&62914560)===0&&(Cl=4194304),t}function vo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function fl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function F0(t,e,a,i,l,n){var o=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var s=t.entanglements,r=t.expirationTimes,u=t.hiddenUpdates;for(a=o&~a;0<a;){var b=31-Bt(a),h=1<<b;s[b]=0,r[b]=-1;var p=u[b];if(p!==null)for(u[b]=null,b=0;b<p.length;b++){var c=p[b];c!==null&&(c.lane&=-536870913)}a&=~h}i!==0&&ou(t,i,0),n!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~e))}function ou(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Bt(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&261930}function su(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-Bt(a),l=1<<i;l&e|t[i]&e&&(t[i]|=e),a&=~l}}function ru(t,e){var a=e&-e;return a=(a&42)!==0?1:Qs(a),(a&(t.suspendedLanes|e))!==0?0:a}function Qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Js(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fu(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:Bp(t.type))}function Af(t,e){var a=L.p;try{return L.p=t,e()}finally{L.p=a}}var ea=Math.random().toString(36).slice(2),ct="__reactFiber$"+ea,Tt="__reactProps$"+ea,fi="__reactContainer$"+ea,is="__reactEvents$"+ea,W0="__reactListeners$"+ea,I0="__reactHandles$"+ea,Ef="__reactResources$"+ea,cl="__reactMarker$"+ea;function Fs(t){delete t[ct],delete t[Tt],delete t[is],delete t[W0],delete t[I0]}function Da(t){var e=t[ct];if(e)return e;for(var a=t.parentNode;a;){if(e=a[fi]||a[ct]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Hc(t);t!==null;){if(a=t[ct])return a;t=Hc(t)}return e}t=a,a=t.parentNode}return null}function ci(t){if(t=t[ct]||t[fi]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function _i(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(y(33))}function Va(t){var e=t[Ef];return e||(e=t[Ef]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function st(t){t[cl]=!0}var cu=new Set,uu={};function xa(t,e){Pa(t,e),Pa(t+"Capture",e)}function Pa(t,e){for(uu[t]=e,t=0;t<e.length;t++)cu.add(e[t])}var $0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_f={},Of={};function P0(t){return as.call(Of,t)?!0:as.call(_f,t)?!1:$0.test(t)?Of[t]=!0:(_f[t]=!0,!1)}function Yl(t,e,a){if(P0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Al(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function se(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}function Gt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function du(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function th(t,e,a){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i!="undefined"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,n=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(o){a=""+o,n.call(this,o)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ls(t){if(!t._valueTracker){var e=du(t)?"checked":"value";t._valueTracker=th(t,e,""+t[e])}}function pu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=du(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function rn(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}var eh=/[\n"\\]/g;function Kt(t){return t.replace(eh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ns(t,e,a,i,l,n,o,s){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Gt(e)):t.value!==""+Gt(e)&&(t.value=""+Gt(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?os(t,o,Gt(e)):a!=null?os(t,o,Gt(a)):i!=null&&t.removeAttribute("value"),l==null&&n!=null&&(t.defaultChecked=!!n),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Gt(s):t.removeAttribute("name")}function hu(t,e,a,i,l,n,o,s){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||e!=null)){ls(t);return}a=a!=null?""+Gt(a):"",e=e!=null?""+Gt(e):a,s||e===t.value||(t.value=e),t.defaultValue=e}i=i!=null?i:l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=s?t.checked:!!i,t.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),ls(t)}function os(t,e,a){e==="number"&&rn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Xa(t,e,a,i){if(t=t.options,e){e={};for(var l=0;l<a.length;l++)e["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=e.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&i&&(t[a].defaultSelected=!0)}else{for(a=""+Gt(a),e=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,i&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function gu(t,e,a){if(e!=null&&(e=""+Gt(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Gt(a):""}function bu(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(y(92));if(Ei(i)){if(1<i.length)throw Error(y(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=Gt(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i),ls(t)}function ti(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var ah=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bf(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||ah.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function mu(t,e,a){if(e!=null&&typeof e!="object")throw Error(y(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var l in e)i=e[l],e.hasOwnProperty(l)&&a[l]!==i&&Bf(t,l,i)}else for(var n in e)e.hasOwnProperty(n)&&Bf(t,n,e[n])}function Ws(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(t){return lh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ge(){}var ss=null;function Is(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var La=null,Qa=null;function Rf(t){var e=ci(t);if(e&&(t=e.stateNode)){var a=t[Tt]||null;t:switch(t=e.stateNode,e.type){case"input":if(ns(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Kt(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var l=i[Tt]||null;if(!l)throw Error(y(90));ns(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&pu(i)}break t;case"textarea":gu(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Xa(t,!!a.multiple,e,!1)}}}var wo=!1;function yu(t,e,a){if(wo)return t(e,a);wo=!0;try{var i=t(e);return i}finally{if(wo=!1,(La!==null||Qa!==null)&&(Vn(),La&&(e=La,t=Qa,Qa=La=null,Rf(e),t)))for(e=0;e<t.length;e++)Rf(t[e])}}function Qi(t,e){var a=t.stateNode;if(a===null)return null;var i=a[Tt]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(y(231,e,typeof a));return a}var ve=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),rs=!1;if(ve)try{Aa={},Object.defineProperty(Aa,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{rs=!1}var Aa,Ue=null,$s=null,Zl=null;function xu(){if(Zl)return Zl;var t,e=$s,a=e.length,i,l="value"in Ue?Ue.value:Ue.textContent,n=l.length;for(t=0;t<a&&e[t]===l[t];t++);var o=a-t;for(i=1;i<=o&&e[a-i]===l[n-i];i++);return Zl=l.slice(t,1<i?1-i:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Nf(){return!1}function zt(t){function e(a,i,l,n,o){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(a=t[s],this[s]=a?a(n):n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?El:Nf,this.isPropagationStopped=Nf,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nn=zt(va),ul=Q({},va,{view:0,detail:0}),nh=zt(ul),So,ko,Si,Dn=Q({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(So=t.screenX-Si.screenX,ko=t.screenY-Si.screenY):ko=So=0,Si=t),So)},movementY:function(t){return"movementY"in t?t.movementY:ko}}),Df=zt(Dn),oh=Q({},Dn,{dataTransfer:0}),sh=zt(oh),rh=Q({},ul,{relatedTarget:0}),To=zt(rh),fh=Q({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=zt(fh),uh=Q({},va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dh=zt(uh),ph=Q({},va,{data:0}),Lf=zt(ph),hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bh[t])?!!e[t]:!1}function Ps(){return mh}var yh=Q({},ul,{key:function(t){if(t.key){var e=hh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xh=zt(yh),vh=Q({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=zt(vh),wh=Q({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),Sh=zt(wh),kh=Q({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Th=zt(kh),zh=Q({},Dn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mh=zt(zh),Ch=Q({},va,{newState:0,oldState:0}),Ah=zt(Ch),Eh=[9,13,27,32],tr=ve&&"CompositionEvent"in window,Ri=null;ve&&"documentMode"in document&&(Ri=document.documentMode);var _h=ve&&"TextEvent"in window&&!Ri,vu=ve&&(!tr||Ri&&8<Ri&&11>=Ri),Uf=" ",jf=!1;function wu(t,e){switch(t){case"keyup":return Eh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ha=!1;function Oh(t,e){switch(t){case"compositionend":return Su(e);case"keypress":return e.which!==32?null:(jf=!0,Uf);case"textInput":return t=e.data,t===Uf&&jf?null:t;default:return null}}function Bh(t,e){if(Ha)return t==="compositionend"||!tr&&wu(t,e)?(t=xu(),Zl=$s=Ue=null,Ha=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vu&&e.locale!=="ko"?null:e.data;default:return null}}var Rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rh[t.type]:e==="textarea"}function ku(t,e,a,i){La?Qa?Qa.push(i):Qa=[i]:La=i,e=Mn(e,"onChange"),0<e.length&&(a=new Nn("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Ni=null,Ji=null;function Nh(t){yp(t,0)}function Ln(t){var e=_i(t);if(pu(e))return t}function qf(t,e){if(t==="change")return e}var Tu=!1;ve&&(ve?(Ol="oninput"in document,Ol||(zo=document.createElement("div"),zo.setAttribute("oninput","return;"),Ol=typeof zo.oninput=="function"),_l=Ol):_l=!1,Tu=_l&&(!document.documentMode||9<document.documentMode));var _l,Ol,zo;function Yf(){Ni&&(Ni.detachEvent("onpropertychange",zu),Ji=Ni=null)}function zu(t){if(t.propertyName==="value"&&Ln(Ji)){var e=[];ku(e,Ji,t,Is(t)),yu(Nh,e)}}function Dh(t,e,a){t==="focusin"?(Yf(),Ni=e,Ji=a,Ni.attachEvent("onpropertychange",zu)):t==="focusout"&&Yf()}function Lh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ln(Ji)}function Hh(t,e){if(t==="click")return Ln(e)}function Uh(t,e){if(t==="input"||t==="change")return Ln(e)}function jh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:jh;function Fi(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!as.call(e,l)||!Nt(t[l],e[l]))return!1}return!0}function Kf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zf(t,e){var a=Kf(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kf(a)}}function Mu(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mu(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Cu(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=rn(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=rn(t.document)}return e}function er(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Gh=ve&&"documentMode"in document&&11>=document.documentMode,Ua=null,fs=null,Di=null,cs=!1;function Vf(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cs||Ua==null||Ua!==rn(i)||(i=Ua,"selectionStart"in i&&er(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Di&&Fi(Di,i)||(Di=i,i=Mn(fs,"onSelect"),0<i.length&&(e=new Nn("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=Ua)))}function la(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ja={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},Mo={},Au={};ve&&(Au=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function wa(t){if(Mo[t])return Mo[t];if(!ja[t])return t;var e=ja[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Au)return Mo[t]=e[a];return t}var Eu=wa("animationend"),_u=wa("animationiteration"),Ou=wa("animationstart"),qh=wa("transitionrun"),Yh=wa("transitionstart"),Kh=wa("transitioncancel"),Bu=wa("transitionend"),Ru=new Map,us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");us.push("scrollEnd");function It(t,e){Ru.set(t,e),xa(e,[t])}var fn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},jt=[],Ga=0,ar=0;function Hn(){for(var t=Ga,e=ar=Ga=0;e<t;){var a=jt[e];jt[e++]=null;var i=jt[e];jt[e++]=null;var l=jt[e];jt[e++]=null;var n=jt[e];if(jt[e++]=null,i!==null&&l!==null){var o=i.pending;o===null?l.next=l:(l.next=o.next,o.next=l),i.pending=l}n!==0&&Nu(a,l,n)}}function Un(t,e,a,i){jt[Ga++]=t,jt[Ga++]=e,jt[Ga++]=a,jt[Ga++]=i,ar|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function ir(t,e,a,i){return Un(t,e,a,i),cn(t)}function Sa(t,e){return Un(t,null,null,e),cn(t)}function Nu(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var l=!1,n=t.return;n!==null;)n.childLanes|=a,i=n.alternate,i!==null&&(i.childLanes|=a),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(l=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,l&&e!==null&&(l=31-Bt(a),t=n.hiddenUpdates,i=t[l],i===null?t[l]=[e]:i.push(e),e.lane=a|536870912),n):null}function cn(t){if(50<Zi)throw Zi=0,Bs=null,Error(y(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var qa={};function Zh(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,a,i){return new Zh(t,e,a,i)}function lr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function me(t,e){var a=t.alternate;return a===null?(a=At(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Du(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Xl(t,e,a,i,l,n){var o=0;if(i=t,typeof t=="function")lr(t)&&(o=1);else if(typeof t=="string")o=Q1(t,a,ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case $o:return t=At(31,a,e,l),t.elementType=$o,t.lanes=n,t;case Ra:return ca(a.children,l,n,e);case tu:o=8,l|=24;break;case Fo:return t=At(12,a,e,l|2),t.elementType=Fo,t.lanes=n,t;case Wo:return t=At(13,a,e,l),t.elementType=Wo,t.lanes=n,t;case Io:return t=At(19,a,e,l),t.elementType=Io,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case he:o=10;break t;case eu:o=9;break t;case Zs:o=11;break t;case Vs:o=14;break t;case Oe:o=16,i=null;break t}o=29,a=Error(y(130,t===null?"null":typeof t,"")),i=null}return e=At(o,a,e,l),e.elementType=t,e.type=i,e.lanes=n,e}function ca(t,e,a,i){return t=At(7,t,i,e),t.lanes=a,t}function Co(t,e,a){return t=At(6,t,null,e),t.lanes=a,t}function Lu(t){var e=At(18,null,null,0);return e.stateNode=t,e}function Ao(t,e,a){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Xf=new WeakMap;function Zt(t,e){if(typeof t=="object"&&t!==null){var a=Xf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Cf(e)},Xf.set(t,e),e)}return{value:t,source:e,stack:Cf(e)}}var Ya=[],Ka=0,un=null,Wi=0,qt=[],Yt=0,Ie=null,Pt=1,te="";function de(t,e){Ya[Ka++]=Wi,Ya[Ka++]=un,un=t,Wi=e}function Hu(t,e,a){qt[Yt++]=Pt,qt[Yt++]=te,qt[Yt++]=Ie,Ie=t;var i=Pt;t=te;var l=32-Bt(i)-1;i&=~(1<<l),a+=1;var n=32-Bt(e)+l;if(30<n){var o=l-l%5;n=(i&(1<<o)-1).toString(32),i>>=o,l-=o,Pt=1<<32-Bt(e)+l|a<<l|i,te=n+t}else Pt=1<<n|a<<l|i,te=t}function nr(t){t.return!==null&&(de(t,1),Hu(t,1,0))}function or(t){for(;t===un;)un=Ya[--Ka],Ya[Ka]=null,Wi=Ya[--Ka],Ya[Ka]=null;for(;t===Ie;)Ie=qt[--Yt],qt[Yt]=null,te=qt[--Yt],qt[Yt]=null,Pt=qt[--Yt],qt[Yt]=null}function Uu(t,e){qt[Yt++]=Pt,qt[Yt++]=te,qt[Yt++]=Ie,Pt=e.id,te=e.overflow,Ie=t}var ut=null,X=null,O=!1,Ke=null,Vt=!1,ds=Error(y(519));function $e(t){var e=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ii(Zt(e,t)),ds}function Qf(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[ct]=t,e[Tt]=i,a){case"dialog":C("cancel",e),C("close",e);break;case"iframe":case"object":case"embed":C("load",e);break;case"video":case"audio":for(a=0;a<el.length;a++)C(el[a],e);break;case"source":C("error",e);break;case"img":case"image":case"link":C("error",e),C("load",e);break;case"details":C("toggle",e);break;case"input":C("invalid",e),hu(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":C("invalid",e);break;case"textarea":C("invalid",e),bu(e,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||vp(e.textContent,a)?(i.popover!=null&&(C("beforetoggle",e),C("toggle",e)),i.onScroll!=null&&C("scroll",e),i.onScrollEnd!=null&&C("scrollend",e),i.onClick!=null&&(e.onclick=ge),e=!0):e=!1,e||$e(t,!0)}function Jf(t){for(ut=t.return;ut;)switch(ut.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ut=ut.return}}function Ea(t){if(t!==ut)return!1;if(!O)return Jf(t),O=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hs(t.type,t.memoizedProps)),a=!a),a&&X&&$e(t),Jf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));X=Lc(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));X=Lc(t)}else e===27?(e=X,aa(t.type)?(t=qs,qs=null,X=t):X=e):X=ut?Qt(t.stateNode.nextSibling):null;return!0}function ha(){X=ut=null,O=!1}function Eo(){var t=Ke;return t!==null&&(St===null?St=t:St.push.apply(St,t),Ke=null),t}function Ii(t){Ke===null?Ke=[t]:Ke.push(t)}var ps=ie(null),ka=null,be=null;function Re(t,e,a){K(ps,e._currentValue),e._currentValue=a}function ye(t){t._currentValue=ps.current,rt(ps)}function hs(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function gs(t,e,a,i){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var n=l.dependencies;if(n!==null){var o=l.child;n=n.firstContext;t:for(;n!==null;){var s=n;n=l;for(var r=0;r<e.length;r++)if(s.context===e[r]){n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),hs(n.return,a,t),i||(o=null);break t}n=s.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(y(341));o.lanes|=a,n=o.alternate,n!==null&&(n.lanes|=a),hs(o,a,t),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function ui(t,e,a,i){t=null;for(var l=e,n=!1;l!==null;){if(!n){if((l.flags&524288)!==0)n=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(y(387));if(o=o.memoizedProps,o!==null){var s=l.type;Nt(l.pendingProps.value,o.value)||(t!==null?t.push(s):t=[s])}}else if(l===ln.current){if(o=l.alternate,o===null)throw Error(y(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(il):t=[il])}l=l.return}t!==null&&gs(e,t,a,i),e.flags|=262144}function dn(t){for(t=t.firstContext;t!==null;){if(!Nt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ga(t){ka=t,be=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dt(t){return ju(ka,t)}function Bl(t,e){return ka===null&&ga(t),ju(t,e)}function ju(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},be===null){if(t===null)throw Error(y(308));be=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else be=be.next=e;return a}var Vh=typeof AbortController!="undefined"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Xh=nt.unstable_scheduleCallback,Qh=nt.unstable_NormalPriority,at={$$typeof:he,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new Vh,data:new Map,refCount:0}}function dl(t){t.refCount--,t.refCount===0&&Xh(Qh,function(){t.controller.abort()})}var Li=null,bs=0,ei=0,Ja=null;function Jh(t,e){if(Li===null){var a=Li=[];bs=0,ei=Br(),Ja={status:"pending",value:void 0,then:function(i){a.push(i)}}}return bs++,e.then(Ff,Ff),e}function Ff(){if(--bs===0&&Li!==null){Ja!==null&&(Ja.status="fulfilled");var t=Li;Li=null,ei=0,Ja=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Fh(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var l=0;l<a.length;l++)(0,a[l])(e)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Wf=k.S;k.S=function(t,e){Pd=_t(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Jh(t,e),Wf!==null&&Wf(t,e)};var ua=ie(null);function rr(){var t=ua.current;return t!==null?t:q.pooledCache}function Ql(t,e){e===null?K(ua,ua.current):K(ua,e.pool)}function Gu(){var t=rr();return t===null?null:{parent:at._currentValue,pool:t}}var di=Error(y(460)),fr=Error(y(474)),jn=Error(y(542)),pn={then:function(){}};function If(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qu(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ge,ge),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Pf(t),t;default:if(typeof e.status=="string")e.then(ge,ge);else{if(t=q,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=i}},function(i){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Pf(t),t}throw da=e,di}}function sa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(da=a,di):a}}var da=null;function $f(){if(da===null)throw Error(y(459));var t=da;return da=null,t}function Pf(t){if(t===di||t===jn)throw Error(y(483))}var Fa=null,$i=0;function Rl(t){var e=$i;return $i+=1,Fa===null&&(Fa=[]),qu(Fa,t,e)}function ki(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Nl(t,e){throw e.$$typeof===D0?Error(y(525)):(t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Yu(t){function e(d,f){if(t){var g=d.deletions;g===null?(d.deletions=[f],d.flags|=16):g.push(f)}}function a(d,f){if(!t)return null;for(;f!==null;)e(d,f),f=f.sibling;return null}function i(d){for(var f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(d,f){return d=me(d,f),d.index=0,d.sibling=null,d}function n(d,f,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<f?(d.flags|=67108866,f):g):(d.flags|=67108866,f)):(d.flags|=1048576,f)}function o(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function s(d,f,g,m){return f===null||f.tag!==6?(f=Co(g,d.mode,m),f.return=d,f):(f=l(f,g),f.return=d,f)}function r(d,f,g,m){var S=g.type;return S===Ra?b(d,f,g.props.children,m,g.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Oe&&sa(S)===f.type)?(f=l(f,g.props),ki(f,g),f.return=d,f):(f=Xl(g.type,g.key,g.props,null,d.mode,m),ki(f,g),f.return=d,f)}function u(d,f,g,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ao(g,d.mode,m),f.return=d,f):(f=l(f,g.children||[]),f.return=d,f)}function b(d,f,g,m,S){return f===null||f.tag!==7?(f=ca(g,d.mode,m,S),f.return=d,f):(f=l(f,g),f.return=d,f)}function h(d,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Co(""+f,d.mode,g),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Tl:return g=Xl(f.type,f.key,f.props,null,d.mode,g),ki(g,f),g.return=d,g;case Ai:return f=Ao(f,d.mode,g),f.return=d,f;case Oe:return f=sa(f),h(d,f,g)}if(Ei(f)||wi(f))return f=ca(f,d.mode,g,null),f.return=d,f;if(typeof f.then=="function")return h(d,Rl(f),g);if(f.$$typeof===he)return h(d,Bl(d,f),g);Nl(d,f)}return null}function p(d,f,g,m){var S=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return S!==null?null:s(d,f,""+g,m);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tl:return g.key===S?r(d,f,g,m):null;case Ai:return g.key===S?u(d,f,g,m):null;case Oe:return g=sa(g),p(d,f,g,m)}if(Ei(g)||wi(g))return S!==null?null:b(d,f,g,m,null);if(typeof g.then=="function")return p(d,f,Rl(g),m);if(g.$$typeof===he)return p(d,f,Bl(d,g),m);Nl(d,g)}return null}function c(d,f,g,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return d=d.get(g)||null,s(f,d,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Tl:return d=d.get(m.key===null?g:m.key)||null,r(f,d,m,S);case Ai:return d=d.get(m.key===null?g:m.key)||null,u(f,d,m,S);case Oe:return m=sa(m),c(d,f,g,m,S)}if(Ei(m)||wi(m))return d=d.get(g)||null,b(f,d,m,S,null);if(typeof m.then=="function")return c(d,f,g,Rl(m),S);if(m.$$typeof===he)return c(d,f,g,Bl(f,m),S);Nl(f,m)}return null}function x(d,f,g,m){for(var S=null,R=null,w=f,M=f=0,E=null;w!==null&&M<g.length;M++){w.index>M?(E=w,w=null):E=w.sibling;var N=p(d,w,g[M],m);if(N===null){w===null&&(w=E);break}t&&w&&N.alternate===null&&e(d,w),f=n(N,f,M),R===null?S=N:R.sibling=N,R=N,w=E}if(M===g.length)return a(d,w),O&&de(d,M),S;if(w===null){for(;M<g.length;M++)w=h(d,g[M],m),w!==null&&(f=n(w,f,M),R===null?S=w:R.sibling=w,R=w);return O&&de(d,M),S}for(w=i(w);M<g.length;M++)E=c(w,d,M,g[M],m),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?M:E.key),f=n(E,f,M),R===null?S=E:R.sibling=E,R=E);return t&&w.forEach(function(Ce){return e(d,Ce)}),O&&de(d,M),S}function v(d,f,g,m){if(g==null)throw Error(y(151));for(var S=null,R=null,w=f,M=f=0,E=null,N=g.next();w!==null&&!N.done;M++,N=g.next()){w.index>M?(E=w,w=null):E=w.sibling;var Ce=p(d,w,N.value,m);if(Ce===null){w===null&&(w=E);break}t&&w&&Ce.alternate===null&&e(d,w),f=n(Ce,f,M),R===null?S=Ce:R.sibling=Ce,R=Ce,w=E}if(N.done)return a(d,w),O&&de(d,M),S;if(w===null){for(;!N.done;M++,N=g.next())N=h(d,N.value,m),N!==null&&(f=n(N,f,M),R===null?S=N:R.sibling=N,R=N);return O&&de(d,M),S}for(w=i(w);!N.done;M++,N=g.next())N=c(w,d,M,N.value,m),N!==null&&(t&&N.alternate!==null&&w.delete(N.key===null?M:N.key),f=n(N,f,M),R===null?S=N:R.sibling=N,R=N);return t&&w.forEach(function(o0){return e(d,o0)}),O&&de(d,M),S}function B(d,f,g,m){if(typeof g=="object"&&g!==null&&g.type===Ra&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Tl:t:{for(var S=g.key;f!==null;){if(f.key===S){if(S=g.type,S===Ra){if(f.tag===7){a(d,f.sibling),m=l(f,g.props.children),m.return=d,d=m;break t}}else if(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Oe&&sa(S)===f.type){a(d,f.sibling),m=l(f,g.props),ki(m,g),m.return=d,d=m;break t}a(d,f);break}else e(d,f);f=f.sibling}g.type===Ra?(m=ca(g.props.children,d.mode,m,g.key),m.return=d,d=m):(m=Xl(g.type,g.key,g.props,null,d.mode,m),ki(m,g),m.return=d,d=m)}return o(d);case Ai:t:{for(S=g.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){a(d,f.sibling),m=l(f,g.children||[]),m.return=d,d=m;break t}else{a(d,f);break}else e(d,f);f=f.sibling}m=Ao(g,d.mode,m),m.return=d,d=m}return o(d);case Oe:return g=sa(g),B(d,f,g,m)}if(Ei(g))return x(d,f,g,m);if(wi(g)){if(S=wi(g),typeof S!="function")throw Error(y(150));return g=S.call(g),v(d,f,g,m)}if(typeof g.then=="function")return B(d,f,Rl(g),m);if(g.$$typeof===he)return B(d,f,Bl(d,g),m);Nl(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(a(d,f.sibling),m=l(f,g),m.return=d,d=m):(a(d,f),m=Co(g,d.mode,m),m.return=d,d=m),o(d)):a(d,f)}return function(d,f,g,m){try{$i=0;var S=B(d,f,g,m);return Fa=null,S}catch(w){if(w===di||w===jn)throw w;var R=At(29,w,null,d.mode);return R.lanes=m,R.return=d,R}}}var ba=Yu(!0),Ku=Yu(!1),Be=!1;function cr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ms(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ze(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ve(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(D&2)!==0){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,e=cn(t),Nu(t,null,a),e}return Un(t,i,e,a),cn(t)}function Hi(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,su(t,a)}}function _o(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?l=n=o:n=n.next=o,a=a.next}while(a!==null);n===null?l=n=e:n=n.next=e}else l=n=e;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:n,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var ys=!1;function Ui(){if(ys){var t=Ja;if(t!==null)throw t}}function ji(t,e,a,i){ys=!1;var l=t.updateQueue;Be=!1;var n=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var r=s,u=r.next;r.next=null,o===null?n=u:o.next=u,o=r;var b=t.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==o&&(s===null?b.firstBaseUpdate=u:s.next=u,b.lastBaseUpdate=r))}if(n!==null){var h=l.baseState;o=0,b=u=r=null,s=n;do{var p=s.lane&-536870913,c=p!==s.lane;if(c?(_&p)===p:(i&p)===p){p!==0&&p===ei&&(ys=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var x=t,v=s;p=e;var B=a;switch(v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(B,h,p);break t}h=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(B,h,p):x,p==null)break t;h=Q({},h,p);break t;case 2:Be=!0}}p=s.callback,p!==null&&(t.flags|=64,c&&(t.flags|=8192),c=l.callbacks,c===null?l.callbacks=[p]:c.push(p))}else c={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(u=b=c,r=h):b=b.next=c,o|=p;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;c=s,s=c.next,c.next=null,l.lastBaseUpdate=c,l.shared.pending=null}}while(!0);b===null&&(r=h),l.baseState=r,l.firstBaseUpdate=u,l.lastBaseUpdate=b,n===null&&(l.shared.lanes=0),ta|=o,t.lanes=o,t.memoizedState=h}}function Zu(t,e){if(typeof t!="function")throw Error(y(191,t));t.call(e)}function Vu(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zu(a[t],e)}var ai=ie(null),hn=ie(0);function tc(t,e){t=Te,K(hn,t),K(ai,e),Te=t|e.baseLanes}function xs(){K(hn,Te),K(ai,ai.current)}function ur(){Te=hn.current,rt(ai),rt(hn)}var Dt=ie(null),Xt=null;function Ne(t){var e=t.alternate;K($,$.current&1),K(Dt,t),Xt===null&&(e===null||ai.current!==null||e.memoizedState!==null)&&(Xt=t)}function vs(t){K($,$.current),K(Dt,t),Xt===null&&(Xt=t)}function Xu(t){t.tag===22?(K($,$.current),K(Dt,t),Xt===null&&(Xt=t)):De(t)}function De(){K($,$.current),K(Dt,Dt.current)}function Ct(t){rt(Dt),Xt===t&&(Xt=null),rt($)}var $=ie(0);function gn(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||js(a)||Gs(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var we=0,z=null,G=null,tt=null,bn=!1,Wa=!1,ma=!1,mn=0,Pi=0,Ia=null,Wh=0;function W(){throw Error(y(321))}function dr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Nt(t[a],e[a]))return!1;return!0}function pr(t,e,a,i,l,n){return we=n,z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,k.H=t===null||t.memoizedState===null?kd:Tr,ma=!1,n=a(i,l),ma=!1,Wa&&(n=Ju(e,a,i,l)),Qu(t),n}function Qu(t){k.H=tl;var e=G!==null&&G.next!==null;if(we=0,tt=G=z=null,bn=!1,Pi=0,Ia=null,e)throw Error(y(300));t===null||it||(t=t.dependencies,t!==null&&dn(t)&&(it=!0))}function Ju(t,e,a,i){z=t;var l=0;do{if(Wa&&(Ia=null),Pi=0,Wa=!1,25<=l)throw Error(y(301));if(l+=1,tt=G=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}k.H=Td,n=e(a,i)}while(Wa);return n}function Ih(){var t=k.H,e=t.useState()[0];return e=typeof e.then=="function"?pl(e):e,t=t.useState()[0],(G!==null?G.memoizedState:null)!==t&&(z.flags|=1024),e}function hr(){var t=mn!==0;return mn=0,t}function gr(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function br(t){if(bn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}bn=!1}we=0,tt=G=z=null,Wa=!1,Pi=mn=0,Ia=null}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?z.memoizedState=tt=t:tt=tt.next=t,tt}function P(){if(G===null){var t=z.alternate;t=t!==null?t.memoizedState:null}else t=G.next;var e=tt===null?z.memoizedState:tt.next;if(e!==null)tt=e,G=t;else{if(t===null)throw z.alternate===null?Error(y(467)):Error(y(310));G=t,t={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},tt===null?z.memoizedState=tt=t:tt=tt.next=t}return tt}function Gn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pl(t){var e=Pi;return Pi+=1,Ia===null&&(Ia=[]),t=qu(Ia,t,e),e=z,(tt===null?e.memoizedState:tt.next)===null&&(e=e.alternate,k.H=e===null||e.memoizedState===null?kd:Tr),t}function qn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return pl(t);if(t.$$typeof===he)return dt(t)}throw Error(y(438,String(t)))}function mr(t){var e=null,a=z.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=z.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Gn(),z.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=L0;return e.index++,a}function Se(t,e){return typeof e=="function"?e(t):e}function Jl(t){var e=P();return yr(e,G,t)}function yr(t,e,a){var i=t.queue;if(i===null)throw Error(y(311));i.lastRenderedReducer=a;var l=t.baseQueue,n=i.pending;if(n!==null){if(l!==null){var o=l.next;l.next=n.next,n.next=o}e.baseQueue=l=n,i.pending=null}if(n=t.baseState,l===null)t.memoizedState=n;else{e=l.next;var s=o=null,r=null,u=e,b=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(_&h)===h:(we&h)===h){var p=u.revertLane;if(p===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===ei&&(b=!0);else if((we&p)===p){u=u.next,p===ei&&(b=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},r===null?(s=r=h,o=n):r=r.next=h,z.lanes|=p,ta|=p;h=u.action,ma&&a(n,h),n=u.hasEagerState?u.eagerState:a(n,h)}else p={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},r===null?(s=r=p,o=n):r=r.next=p,z.lanes|=h,ta|=h;u=u.next}while(u!==null&&u!==e);if(r===null?o=n:r.next=s,!Nt(n,t.memoizedState)&&(it=!0,b&&(a=Ja,a!==null)))throw a;t.memoizedState=n,t.baseState=o,t.baseQueue=r,i.lastRenderedState=n}return l===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Oo(t){var e=P(),a=e.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=t;var i=a.dispatch,l=a.pending,n=e.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do n=t(n,o.action),o=o.next;while(o!==l);Nt(n,e.memoizedState)||(it=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),a.lastRenderedState=n}return[n,i]}function Fu(t,e,a){var i=z,l=P(),n=O;if(n){if(a===void 0)throw Error(y(407));a=a()}else a=e();var o=!Nt((G||l).memoizedState,a);if(o&&(l.memoizedState=a,it=!0),l=l.queue,xr($u.bind(null,i,l,t),[t]),l.getSnapshot!==e||o||tt!==null&&tt.memoizedState.tag&1){if(i.flags|=2048,ii(9,{destroy:void 0},Iu.bind(null,i,l,a,e),null),q===null)throw Error(y(349));n||(we&127)!==0||Wu(i,e,a)}return a}function Wu(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=z.updateQueue,e===null?(e=Gn(),z.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Iu(t,e,a,i){e.value=a,e.getSnapshot=i,Pu(e)&&td(t)}function $u(t,e,a){return a(function(){Pu(e)&&td(t)})}function Pu(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Nt(t,a)}catch{return!0}}function td(t){var e=Sa(t,2);e!==null&&kt(e,t,2)}function ws(t){var e=mt();if(typeof t=="function"){var a=t;if(t=a(),ma){He(!0);try{a()}finally{He(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:t},e}function ed(t,e,a,i){return t.baseState=a,yr(t,G,typeof i=="function"?i:Se)}function $h(t,e,a,i,l){if(Kn(t))throw Error(y(485));if(t=e.action,t!==null){var n={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};k.T!==null?a(!0):n.isTransition=!1,i(n),a=e.pending,a===null?(n.next=e.pending=n,ad(e,n)):(n.next=a.next,e.pending=a.next=n)}}function ad(t,e){var a=e.action,i=e.payload,l=t.state;if(e.isTransition){var n=k.T,o={};k.T=o;try{var s=a(l,i),r=k.S;r!==null&&r(o,s),ec(t,e,s)}catch(u){Ss(t,e,u)}finally{n!==null&&o.types!==null&&(n.types=o.types),k.T=n}}else try{n=a(l,i),ec(t,e,n)}catch(u){Ss(t,e,u)}}function ec(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){ac(t,e,i)},function(i){return Ss(t,e,i)}):ac(t,e,a)}function ac(t,e,a){e.status="fulfilled",e.value=a,id(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,ad(t,a)))}function Ss(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,id(e),e=e.next;while(e!==i)}t.action=null}function id(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ld(t,e){return e}function ic(t,e){if(O){var a=q.formState;if(a!==null){t:{var i=z;if(O){if(X){e:{for(var l=X,n=Vt;l.nodeType!==8;){if(!n){l=null;break e}if(l=Qt(l.nextSibling),l===null){l=null;break e}}n=l.data,l=n==="F!"||n==="F"?l:null}if(l){X=Qt(l.nextSibling),i=l.data==="F!";break t}}$e(i)}i=!1}i&&(e=a[0])}}return a=mt(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ld,lastRenderedState:e},a.queue=i,a=vd.bind(null,z,i),i.dispatch=a,i=ws(!1),n=kr.bind(null,z,!1,i.queue),i=mt(),l={state:e,dispatch:null,action:t,pending:null},i.queue=l,a=$h.bind(null,z,l,n,a),l.dispatch=a,i.memoizedState=t,[e,a,!1]}function lc(t){var e=P();return nd(e,G,t)}function nd(t,e,a){if(e=yr(t,e,ld)[0],t=Jl(Se)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=pl(e)}catch(o){throw o===di?jn:o}else i=e;e=P();var l=e.queue,n=l.dispatch;return a!==e.memoizedState&&(z.flags|=2048,ii(9,{destroy:void 0},Ph.bind(null,l,a),null)),[i,n,t]}function Ph(t,e){t.action=e}function nc(t){var e=P(),a=G;if(a!==null)return nd(e,a,t);P(),e=e.memoizedState,a=P();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function ii(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=z.updateQueue,e===null&&(e=Gn(),z.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function od(){return P().memoizedState}function Fl(t,e,a,i){var l=mt();z.flags|=t,l.memoizedState=ii(1|e,{destroy:void 0},a,i===void 0?null:i)}function Yn(t,e,a,i){var l=P();i=i===void 0?null:i;var n=l.memoizedState.inst;G!==null&&i!==null&&dr(i,G.memoizedState.deps)?l.memoizedState=ii(e,n,a,i):(z.flags|=t,l.memoizedState=ii(1|e,n,a,i))}function oc(t,e){Fl(8390656,8,t,e)}function xr(t,e){Yn(2048,8,t,e)}function t1(t){z.flags|=4;var e=z.updateQueue;if(e===null)e=Gn(),z.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function sd(t){var e=P().memoizedState;return t1({ref:e,nextImpl:t}),function(){if((D&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}function rd(t,e){return Yn(4,2,t,e)}function fd(t,e){return Yn(4,4,t,e)}function cd(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ud(t,e,a){a=a!=null?a.concat([t]):null,Yn(4,4,cd.bind(null,e,t),a)}function vr(){}function dd(t,e){var a=P();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&dr(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function pd(t,e){var a=P();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&dr(e,i[1]))return i[0];if(i=t(),ma){He(!0);try{t()}finally{He(!1)}}return a.memoizedState=[i,e],i}function wr(t,e,a){return a===void 0||(we&1073741824)!==0&&(_&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=ep(),z.lanes|=t,ta|=t,a)}function hd(t,e,a,i){return Nt(a,e)?a:ai.current!==null?(t=wr(t,a,i),Nt(t,e)||(it=!0),t):(we&42)===0||(we&1073741824)!==0&&(_&261930)===0?(it=!0,t.memoizedState=a):(t=ep(),z.lanes|=t,ta|=t,e)}function gd(t,e,a,i,l){var n=L.p;L.p=n!==0&&8>n?n:8;var o=k.T,s={};k.T=s,kr(t,!1,e,a);try{var r=l(),u=k.S;if(u!==null&&u(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=Fh(r,i);Gi(t,e,b,Rt(t))}else Gi(t,e,i,Rt(t))}catch(h){Gi(t,e,{then:function(){},status:"rejected",reason:h},Rt())}finally{L.p=n,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function e1(){}function ks(t,e,a,i){if(t.tag!==5)throw Error(y(476));var l=bd(t).queue;gd(t,l,e,fa,a===null?e1:function(){return md(t),a(i)})}function bd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:fa,baseState:fa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:fa},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function md(t){var e=bd(t);e.next===null&&(e=t.alternate.memoizedState),Gi(t,e.next.queue,{},Rt())}function Sr(){return dt(il)}function yd(){return P().memoizedState}function xd(){return P().memoizedState}function a1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Rt();t=Ze(a);var i=Ve(e,t,a);i!==null&&(kt(i,e,a),Hi(i,e,a)),e={cache:sr()},t.payload=e;return}e=e.return}}function i1(t,e,a){var i=Rt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Kn(t)?wd(e,a):(a=ir(t,e,a,i),a!==null&&(kt(a,t,i),Sd(a,e,i)))}function vd(t,e,a){var i=Rt();Gi(t,e,a,i)}function Gi(t,e,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Kn(t))wd(e,l);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var o=e.lastRenderedState,s=n(o,a);if(l.hasEagerState=!0,l.eagerState=s,Nt(s,o))return Un(t,e,l,0),q===null&&Hn(),!1}catch{}if(a=ir(t,e,l,i),a!==null)return kt(a,t,i),Sd(a,e,i),!0}return!1}function kr(t,e,a,i){if(i={lane:2,revertLane:Br(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Kn(t)){if(e)throw Error(y(479))}else e=ir(t,a,i,2),e!==null&&kt(e,t,2)}function Kn(t){var e=t.alternate;return t===z||e!==null&&e===z}function wd(t,e){Wa=bn=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Sd(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,su(t,a)}}var tl={readContext:dt,use:qn,useCallback:W,useContext:W,useEffect:W,useImperativeHandle:W,useLayoutEffect:W,useInsertionEffect:W,useMemo:W,useReducer:W,useRef:W,useState:W,useDebugValue:W,useDeferredValue:W,useTransition:W,useSyncExternalStore:W,useId:W,useHostTransitionStatus:W,useFormState:W,useActionState:W,useOptimistic:W,useMemoCache:W,useCacheRefresh:W};tl.useEffectEvent=W;var kd={readContext:dt,use:qn,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:oc,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Fl(4194308,4,cd.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Fl(4194308,4,t,e)},useInsertionEffect:function(t,e){Fl(4,2,t,e)},useMemo:function(t,e){var a=mt();e=e===void 0?null:e;var i=t();if(ma){He(!0);try{t()}finally{He(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=mt();if(a!==void 0){var l=a(e);if(ma){He(!0);try{a(e)}finally{He(!1)}}}else l=e;return i.memoizedState=i.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},i.queue=t,t=t.dispatch=i1.bind(null,z,t),[i.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:function(t){t=ws(t);var e=t.queue,a=vd.bind(null,z,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:vr,useDeferredValue:function(t,e){var a=mt();return wr(a,t,e)},useTransition:function(){var t=ws(!1);return t=gd.bind(null,z,t.queue,!0,!1),mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=z,l=mt();if(O){if(a===void 0)throw Error(y(407));a=a()}else{if(a=e(),q===null)throw Error(y(349));(_&127)!==0||Wu(i,e,a)}l.memoizedState=a;var n={value:a,getSnapshot:e};return l.queue=n,oc($u.bind(null,i,n,t),[t]),i.flags|=2048,ii(9,{destroy:void 0},Iu.bind(null,i,n,a,e),null),a},useId:function(){var t=mt(),e=q.identifierPrefix;if(O){var a=te,i=Pt;a=(i&~(1<<32-Bt(i)-1)).toString(32)+a,e="_"+e+"R_"+a,a=mn++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Wh++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Sr,useFormState:ic,useActionState:ic,useOptimistic:function(t){var e=mt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=kr.bind(null,z,!0,a),a.dispatch=e,[t,e]},useMemoCache:mr,useCacheRefresh:function(){return mt().memoizedState=a1.bind(null,z)},useEffectEvent:function(t){var e=mt(),a={impl:t};return e.memoizedState=a,function(){if((D&2)!==0)throw Error(y(440));return a.impl.apply(void 0,arguments)}}},Tr={readContext:dt,use:qn,useCallback:dd,useContext:dt,useEffect:xr,useImperativeHandle:ud,useInsertionEffect:rd,useLayoutEffect:fd,useMemo:pd,useReducer:Jl,useRef:od,useState:function(){return Jl(Se)},useDebugValue:vr,useDeferredValue:function(t,e){var a=P();return hd(a,G.memoizedState,t,e)},useTransition:function(){var t=Jl(Se)[0],e=P().memoizedState;return[typeof t=="boolean"?t:pl(t),e]},useSyncExternalStore:Fu,useId:yd,useHostTransitionStatus:Sr,useFormState:lc,useActionState:lc,useOptimistic:function(t,e){var a=P();return ed(a,G,t,e)},useMemoCache:mr,useCacheRefresh:xd};Tr.useEffectEvent=sd;var Td={readContext:dt,use:qn,useCallback:dd,useContext:dt,useEffect:xr,useImperativeHandle:ud,useInsertionEffect:rd,useLayoutEffect:fd,useMemo:pd,useReducer:Oo,useRef:od,useState:function(){return Oo(Se)},useDebugValue:vr,useDeferredValue:function(t,e){var a=P();return G===null?wr(a,t,e):hd(a,G.memoizedState,t,e)},useTransition:function(){var t=Oo(Se)[0],e=P().memoizedState;return[typeof t=="boolean"?t:pl(t),e]},useSyncExternalStore:Fu,useId:yd,useHostTransitionStatus:Sr,useFormState:nc,useActionState:nc,useOptimistic:function(t,e){var a=P();return G!==null?ed(a,G,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:mr,useCacheRefresh:xd};Td.useEffectEvent=sd;function Bo(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:Q({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ts={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=Rt(),l=Ze(i);l.payload=e,a!=null&&(l.callback=a),e=Ve(t,l,i),e!==null&&(kt(e,t,i),Hi(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=Rt(),l=Ze(i);l.tag=1,l.payload=e,a!=null&&(l.callback=a),e=Ve(t,l,i),e!==null&&(kt(e,t,i),Hi(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Rt(),i=Ze(a);i.tag=2,e!=null&&(i.callback=e),e=Ve(t,i,a),e!==null&&(kt(e,t,a),Hi(e,t,a))}};function sc(t,e,a,i,l,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,n,o):e.prototype&&e.prototype.isPureReactComponent?!Fi(a,i)||!Fi(l,n):!0}function rc(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&Ts.enqueueReplaceState(e,e.state,null)}function ya(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=Q({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function zd(t){fn(t)}function Md(t){console.error(t)}function Cd(t){fn(t)}function yn(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function fc(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function zs(t,e,a){return a=Ze(a),a.tag=3,a.payload={element:null},a.callback=function(){yn(t,e)},a}function Ad(t){return t=Ze(t),t.tag=3,t}function Ed(t,e,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var n=i.value;t.payload=function(){return l(n)},t.callback=function(){fc(e,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){fc(e,a,i),typeof l!="function"&&(Xe===null?Xe=new Set([this]):Xe.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function l1(t,e,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&ui(e,a,l,!0),a=Dt.current,a!==null){switch(a.tag){case 31:case 13:return Xt===null?kn():a.alternate===null&&I===0&&(I=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===pn?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Ko(t,i,l)),!1;case 22:return a.flags|=65536,i===pn?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Ko(t,i,l)),!1}throw Error(y(435,a.tag))}return Ko(t,i,l),kn(),!1}if(O)return e=Dt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,i!==ds&&(t=Error(y(422),{cause:i}),Ii(Zt(t,a)))):(i!==ds&&(e=Error(y(423),{cause:i}),Ii(Zt(e,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,i=Zt(i,a),l=zs(t.stateNode,i,l),_o(t,l),I!==4&&(I=2)),!1;var n=Error(y(520),{cause:i});if(n=Zt(n,a),Ki===null?Ki=[n]:Ki.push(n),I!==4&&(I=2),e===null)return!0;i=Zt(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=zs(a.stateNode,i,t),_o(a,t),!1;case 1:if(e=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Xe===null||!Xe.has(n))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Ad(l),Ed(l,t,a,i),_o(a,l),!1}a=a.return}while(a!==null);return!1}var zr=Error(y(461)),it=!1;function ft(t,e,a,i){e.child=t===null?Ku(e,null,a,i):ba(e,t.child,a,i)}function cc(t,e,a,i,l){a=a.render;var n=e.ref;if("ref"in i){var o={};for(var s in i)s!=="ref"&&(o[s]=i[s])}else o=i;return ga(e),i=pr(t,e,a,o,n,l),s=hr(),t!==null&&!it?(gr(t,e,l),ke(t,e,l)):(O&&s&&nr(e),e.flags|=1,ft(t,e,i,l),e.child)}function uc(t,e,a,i,l){if(t===null){var n=a.type;return typeof n=="function"&&!lr(n)&&n.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=n,_d(t,e,n,i,l)):(t=Xl(a.type,null,i,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!Mr(t,l)){var o=n.memoizedProps;if(a=a.compare,a=a!==null?a:Fi,a(o,i)&&t.ref===e.ref)return ke(t,e,l)}return e.flags|=1,t=me(n,i),t.ref=e.ref,t.return=e,e.child=t}function _d(t,e,a,i,l){if(t!==null){var n=t.memoizedProps;if(Fi(n,i)&&t.ref===e.ref)if(it=!1,e.pendingProps=i=n,Mr(t,l))(t.flags&131072)!==0&&(it=!0);else return e.lanes=t.lanes,ke(t,e,l)}return Ms(t,e,a,i,l)}function Od(t,e,a,i){var l=i.children,n=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,t!==null){for(i=e.child=t.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~n}else i=0,e.child=null;return dc(t,e,n,a,i)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ql(e,n!==null?n.cachePool:null),n!==null?tc(e,n):xs(),Xu(e);else return i=e.lanes=536870912,dc(t,e,n!==null?n.baseLanes|a:a,a,i)}else n!==null?(Ql(e,n.cachePool),tc(e,n),De(e),e.memoizedState=null):(t!==null&&Ql(e,null),xs(),De(e));return ft(t,e,l,a),e.child}function Oi(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function dc(t,e,a,i,l){var n=rr();return n=n===null?null:{parent:at._currentValue,pool:n},e.memoizedState={baseLanes:a,cachePool:n},t!==null&&Ql(e,null),xs(),Xu(e),t!==null&&ui(t,e,i,!0),e.childLanes=l,null}function Wl(t,e){return e=xn({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function pc(t,e,a){return ba(e,t.child,null,a),t=Wl(e,e.pendingProps),t.flags|=2,Ct(e),e.memoizedState=null,t}function n1(t,e,a){var i=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(O){if(i.mode==="hidden")return t=Wl(e,i),e.lanes=536870912,Oi(null,t);if(vs(e),(t=X)?(t=kp(t,Vt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Pt,overflow:te}:null,retryLane:536870912,hydrationErrors:null},a=Lu(t),a.return=e,e.child=a,ut=e,X=null)):t=null,t===null)throw $e(e);return e.lanes=536870912,null}return Wl(e,i)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(vs(e),l)if(e.flags&256)e.flags&=-257,e=pc(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(y(558));else if(it||ui(t,e,a,!1),l=(a&t.childLanes)!==0,it||l){if(i=q,i!==null&&(o=ru(i,a),o!==0&&o!==n.retryLane))throw n.retryLane=o,Sa(t,o),kt(i,t,o),zr;kn(),e=pc(t,e,a)}else t=n.treeContext,X=Qt(o.nextSibling),ut=e,O=!0,Ke=null,Vt=!1,t!==null&&Uu(e,t),e=Wl(e,i),e.flags|=4096;return e}return t=me(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Il(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(y(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Ms(t,e,a,i,l){return ga(e),a=pr(t,e,a,i,void 0,l),i=hr(),t!==null&&!it?(gr(t,e,l),ke(t,e,l)):(O&&i&&nr(e),e.flags|=1,ft(t,e,a,l),e.child)}function hc(t,e,a,i,l,n){return ga(e),e.updateQueue=null,a=Ju(e,i,a,l),Qu(t),i=hr(),t!==null&&!it?(gr(t,e,n),ke(t,e,n)):(O&&i&&nr(e),e.flags|=1,ft(t,e,a,n),e.child)}function gc(t,e,a,i,l){if(ga(e),e.stateNode===null){var n=qa,o=a.contextType;typeof o=="object"&&o!==null&&(n=dt(o)),n=new a(i,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ts,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=i,n.state=e.memoizedState,n.refs={},cr(e),o=a.contextType,n.context=typeof o=="object"&&o!==null?dt(o):qa,n.state=e.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Bo(e,a,o,i),n.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&Ts.enqueueReplaceState(n,n.state,null),ji(e,i,n,l),Ui(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){n=e.stateNode;var s=e.memoizedProps,r=ya(a,s);n.props=r;var u=n.context,b=a.contextType;o=qa,typeof b=="object"&&b!==null&&(o=dt(b));var h=a.getDerivedStateFromProps;b=typeof h=="function"||typeof n.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,b||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s||u!==o)&&rc(e,n,i,o),Be=!1;var p=e.memoizedState;n.state=p,ji(e,i,n,l),Ui(),u=e.memoizedState,s||p!==u||Be?(typeof h=="function"&&(Bo(e,a,h,i),u=e.memoizedState),(r=Be||sc(e,a,r,i,p,u,o))?(b||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),n.props=i,n.state=u,n.context=o,i=r):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{n=e.stateNode,ms(t,e),o=e.memoizedProps,b=ya(a,o),n.props=b,h=e.pendingProps,p=n.context,u=a.contextType,r=qa,typeof u=="object"&&u!==null&&(r=dt(u)),s=a.getDerivedStateFromProps,(u=typeof s=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==h||p!==r)&&rc(e,n,i,r),Be=!1,p=e.memoizedState,n.state=p,ji(e,i,n,l),Ui();var c=e.memoizedState;o!==h||p!==c||Be||t!==null&&t.dependencies!==null&&dn(t.dependencies)?(typeof s=="function"&&(Bo(e,a,s,i),c=e.memoizedState),(b=Be||sc(e,a,b,i,p,c,r)||t!==null&&t.dependencies!==null&&dn(t.dependencies))?(u||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(i,c,r),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(i,c,r)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=c),n.props=i,n.state=c,n.context=r,i=b):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return n=i,Il(t,e),i=(e.flags&128)!==0,n||i?(n=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&i?(e.child=ba(e,t.child,null,l),e.child=ba(e,null,a,l)):ft(t,e,a,l),e.memoizedState=n.state,t=e.child):t=ke(t,e,l),t}function bc(t,e,a,i){return ha(),e.flags|=256,ft(t,e,a,i),e.child}var Ro={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function No(t){return{baseLanes:t,cachePool:Gu()}}function Do(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Et),t}function Bd(t,e,a){var i=e.pendingProps,l=!1,n=(e.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:($.current&2)!==0),o&&(l=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(O){if(l?Ne(e):De(e),(t=X)?(t=kp(t,Vt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Pt,overflow:te}:null,retryLane:536870912,hydrationErrors:null},a=Lu(t),a.return=e,e.child=a,ut=e,X=null)):t=null,t===null)throw $e(e);return Gs(t)?e.lanes=32:e.lanes=536870912,null}var s=i.children;return i=i.fallback,l?(De(e),l=e.mode,s=xn({mode:"hidden",children:s},l),i=ca(i,l,a,null),s.return=e,i.return=e,s.sibling=i,e.child=s,i=e.child,i.memoizedState=No(a),i.childLanes=Do(t,o,a),e.memoizedState=Ro,Oi(null,i)):(Ne(e),Cs(e,s))}var r=t.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(n)e.flags&256?(Ne(e),e.flags&=-257,e=Lo(t,e,a)):e.memoizedState!==null?(De(e),e.child=t.child,e.flags|=128,e=null):(De(e),s=i.fallback,l=e.mode,i=xn({mode:"visible",children:i.children},l),s=ca(s,l,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,ba(e,t.child,null,a),i=e.child,i.memoizedState=No(a),i.childLanes=Do(t,o,a),e.memoizedState=Ro,e=Oi(null,i));else if(Ne(e),Gs(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var u=o.dgst;o=u,i=Error(y(419)),i.stack="",i.digest=o,Ii({value:i,source:null,stack:null}),e=Lo(t,e,a)}else if(it||ui(t,e,a,!1),o=(a&t.childLanes)!==0,it||o){if(o=q,o!==null&&(i=ru(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Sa(t,i),kt(o,t,i),zr;js(s)||kn(),e=Lo(t,e,a)}else js(s)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,X=Qt(s.nextSibling),ut=e,O=!0,Ke=null,Vt=!1,t!==null&&Uu(e,t),e=Cs(e,i.children),e.flags|=4096);return e}return l?(De(e),s=i.fallback,l=e.mode,r=t.child,u=r.sibling,i=me(r,{mode:"hidden",children:i.children}),i.subtreeFlags=r.subtreeFlags&65011712,u!==null?s=me(u,s):(s=ca(s,l,a,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,Oi(null,i),i=e.child,s=t.child.memoizedState,s===null?s=No(a):(l=s.cachePool,l!==null?(r=at._currentValue,l=l.parent!==r?{parent:r,pool:r}:l):l=Gu(),s={baseLanes:s.baseLanes|a,cachePool:l}),i.memoizedState=s,i.childLanes=Do(t,o,a),e.memoizedState=Ro,Oi(t.child,i)):(Ne(e),a=t.child,t=a.sibling,a=me(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=a,e.memoizedState=null,a)}function Cs(t,e){return e=xn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function xn(t,e){return t=At(22,t,null,e),t.lanes=0,t}function Lo(t,e,a){return ba(e,t.child,null,a),t=Cs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mc(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hs(t.return,e,a)}function Ho(t,e,a,i,l,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:n}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=l,o.treeForkCount=n)}function Rd(t,e,a){var i=e.pendingProps,l=i.revealOrder,n=i.tail;i=i.children;var o=$.current,s=(o&2)!==0;if(s?(o=o&1|2,e.flags|=128):o&=1,K($,o),ft(t,e,i,a),i=O?Wi:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mc(t,a,e);else if(t.tag===19)mc(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"forwards":for(a=e.child,l=null;a!==null;)t=a.alternate,t!==null&&gn(t)===null&&(l=a),a=a.sibling;a=l,a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null),Ho(e,!1,l,a,n,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&gn(t)===null){e.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Ho(e,!0,a,null,n,i);break;case"together":Ho(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function ke(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ta|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ui(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,a=me(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=me(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Mr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&dn(t)))}function o1(t,e,a){switch(e.tag){case 3:nn(e,e.stateNode.containerInfo),Re(e,at,t.memoizedState.cache),ha();break;case 27:case 5:es(e);break;case 4:nn(e,e.stateNode.containerInfo);break;case 10:Re(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,vs(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ne(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Bd(t,e,a):(Ne(e),t=ke(t,e,a),t!==null?t.sibling:null);Ne(e);break;case 19:var l=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(ui(t,e,a,!1),i=(a&e.childLanes)!==0),l){if(i)return Rd(t,e,a);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K($,$.current),i)break;return null;case 22:return e.lanes=0,Od(t,e,a,e.pendingProps);case 24:Re(e,at,t.memoizedState.cache)}return ke(t,e,a)}function Nd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)it=!0;else{if(!Mr(t,a)&&(e.flags&128)===0)return it=!1,o1(t,e,a);it=(t.flags&131072)!==0}else it=!1,O&&(e.flags&1048576)!==0&&Hu(e,Wi,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=sa(e.elementType),e.type=t,typeof t=="function")lr(t)?(i=ya(t,i),e.tag=1,e=gc(null,e,t,i,a)):(e.tag=0,e=Ms(null,e,t,i,a));else{if(t!=null){var l=t.$$typeof;if(l===Zs){e.tag=11,e=cc(null,e,t,i,a);break t}else if(l===Vs){e.tag=14,e=uc(null,e,t,i,a);break t}}throw e=Po(t)||t,Error(y(306,e,""))}}return e;case 0:return Ms(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,l=ya(i,e.pendingProps),gc(t,e,i,l,a);case 3:t:{if(nn(e,e.stateNode.containerInfo),t===null)throw Error(y(387));i=e.pendingProps;var n=e.memoizedState;l=n.element,ms(t,e),ji(e,i,null,a);var o=e.memoizedState;if(i=o.cache,Re(e,at,i),i!==n.cache&&gs(e,[at],a,!0),Ui(),i=o.element,n.isDehydrated)if(n={element:i,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=bc(t,e,i,a);break t}else if(i!==l){l=Zt(Error(y(424)),e),Ii(l),e=bc(t,e,i,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,X=Qt(t.firstChild),ut=e,O=!0,Ke=null,Vt=!0,a=Ku(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ha(),i===l){e=ke(t,e,a);break t}ft(t,e,i,a)}e=e.child}return e;case 26:return Il(t,e),t===null?(a=jc(e.type,null,e.pendingProps,null))?e.memoizedState=a:O||(a=e.type,t=e.pendingProps,i=Cn(Ye.current).createElement(a),i[ct]=e,i[Tt]=t,pt(i,a,t),st(i),e.stateNode=i):e.memoizedState=jc(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return es(e),t===null&&O&&(i=e.stateNode=Tp(e.type,e.pendingProps,Ye.current),ut=e,Vt=!0,l=X,aa(e.type)?(qs=l,X=Qt(i.firstChild)):X=l),ft(t,e,e.pendingProps.children,a),Il(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&O&&((l=i=X)&&(i=N1(i,e.type,e.pendingProps,Vt),i!==null?(e.stateNode=i,ut=e,X=Qt(i.firstChild),Vt=!1,l=!0):l=!1),l||$e(e)),es(e),l=e.type,n=e.pendingProps,o=t!==null?t.memoizedProps:null,i=n.children,Hs(l,n)?i=null:o!==null&&Hs(l,o)&&(e.flags|=32),e.memoizedState!==null&&(l=pr(t,e,Ih,null,null,a),il._currentValue=l),Il(t,e),ft(t,e,i,a),e.child;case 6:return t===null&&O&&((t=a=X)&&(a=D1(a,e.pendingProps,Vt),a!==null?(e.stateNode=a,ut=e,X=null,t=!0):t=!1),t||$e(e)),null;case 13:return Bd(t,e,a);case 4:return nn(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ba(e,null,i,a):ft(t,e,i,a),e.child;case 11:return cc(t,e,e.type,e.pendingProps,a);case 7:return ft(t,e,e.pendingProps,a),e.child;case 8:return ft(t,e,e.pendingProps.children,a),e.child;case 12:return ft(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,Re(e,e.type,i.value),ft(t,e,i.children,a),e.child;case 9:return l=e.type._context,i=e.pendingProps.children,ga(e),l=dt(l),i=i(l),e.flags|=1,ft(t,e,i,a),e.child;case 14:return uc(t,e,e.type,e.pendingProps,a);case 15:return _d(t,e,e.type,e.pendingProps,a);case 19:return Rd(t,e,a);case 31:return n1(t,e,a);case 22:return Od(t,e,a,e.pendingProps);case 24:return ga(e),i=dt(at),t===null?(l=rr(),l===null&&(l=q,n=sr(),l.pooledCache=n,n.refCount++,n!==null&&(l.pooledCacheLanes|=a),l=n),e.memoizedState={parent:i,cache:l},cr(e),Re(e,at,l)):((t.lanes&a)!==0&&(ms(t,e),ji(e,null,null,a),Ui()),l=t.memoizedState,n=e.memoizedState,l.parent!==i?(l={parent:i,cache:i},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Re(e,at,i)):(i=n.cache,Re(e,at,i),i!==l.cache&&gs(e,[at],a,!0))),ft(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(y(156,e.tag))}function re(t){t.flags|=4}function Uo(t,e,a,i,l){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(lp())t.flags|=8192;else throw da=pn,fr}else t.flags&=-16777217}function yc(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Cp(e))if(lp())t.flags|=8192;else throw da=pn,fr}function Dl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?nu():536870912,t.lanes|=e,li|=e)}function Ti(t,e){if(!O)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function V(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function s1(t,e,a){var i=e.pendingProps;switch(or(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(e),null;case 1:return V(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ye(at),$a(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?re(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Eo())),V(e),null;case 26:var l=e.type,n=e.memoizedState;return t===null?(re(e),n!==null?(V(e),yc(e,n)):(V(e),Uo(e,l,null,i,a))):n?n!==t.memoizedState?(re(e),V(e),yc(e,n)):(V(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&re(e),V(e),Uo(e,l,t,i,a)),null;case 27:if(on(e),a=Ye.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&re(e);else{if(!i){if(e.stateNode===null)throw Error(y(166));return V(e),null}t=ae.current,Ea(e)?Qf(e,t):(t=Tp(l,i,a),e.stateNode=t,re(e))}return V(e),null;case 5:if(on(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&re(e);else{if(!i){if(e.stateNode===null)throw Error(y(166));return V(e),null}if(n=ae.current,Ea(e))Qf(e,n);else{var o=Cn(Ye.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?n.multiple=!0:i.size&&(n.size=i.size);break;default:n=typeof i.is=="string"?o.createElement(l,{is:i.is}):o.createElement(l)}}n[ct]=e,n[Tt]=i;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=n;t:switch(pt(n,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&re(e)}}return V(e),Uo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&re(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(y(166));if(t=Ye.current,Ea(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,l=ut,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}t[ct]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||vp(t.nodeValue,a)),t||$e(e,!0)}else t=Cn(t).createTextNode(i),t[ct]=e,e.stateNode=t}return V(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(i=Ea(e),a!==null){if(t===null){if(!i)throw Error(y(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[ct]=e}else ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;V(e),t=!1}else a=Eo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Ct(e),e):(Ct(e),null);if((e.flags&128)!==0)throw Error(y(558))}return V(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=Ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!l)throw Error(y(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(y(317));l[ct]=e}else ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;V(e),l=!1}else l=Eo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Ct(e),e):(Ct(e),null)}return Ct(e),(e.flags&128)!==0?(e.lanes=a,e):(a=i!==null,t=t!==null&&t.memoizedState!==null,a&&(i=e.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==l&&(i.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Dl(e,e.updateQueue),V(e),null);case 4:return $a(),t===null&&Rr(e.stateNode.containerInfo),V(e),null;case 10:return ye(e.type),V(e),null;case 19:if(rt($),i=e.memoizedState,i===null)return V(e),null;if(l=(e.flags&128)!==0,n=i.rendering,n===null)if(l)Ti(i,!1);else{if(I!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=gn(t),n!==null){for(e.flags|=128,Ti(i,!1),t=n.updateQueue,e.updateQueue=t,Dl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Du(a,t),a=a.sibling;return K($,$.current&1|2),O&&de(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&_t()>wn&&(e.flags|=128,l=!0,Ti(i,!1),e.lanes=4194304)}else{if(!l)if(t=gn(n),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Dl(e,t),Ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!O)return V(e),null}else 2*_t()-i.renderingStartTime>wn&&a!==536870912&&(e.flags|=128,l=!0,Ti(i,!1),e.lanes=4194304);i.isBackwards?(n.sibling=e.child,e.child=n):(t=i.last,t!==null?t.sibling=n:e.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=_t(),t.sibling=null,a=$.current,K($,l?a&1|2:a&1),O&&de(e,i.treeForkCount),t):(V(e),null);case 22:case 23:return Ct(e),ur(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(V(e),e.subtreeFlags&6&&(e.flags|=8192)):V(e),a=e.updateQueue,a!==null&&Dl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&rt(ua),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ye(at),V(e),null;case 25:return null;case 30:return null}throw Error(y(156,e.tag))}function r1(t,e){switch(or(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ye(at),$a(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return on(e),null;case 31:if(e.memoizedState!==null){if(Ct(e),e.alternate===null)throw Error(y(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ct(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt($),null;case 4:return $a(),null;case 10:return ye(e.type),null;case 22:case 23:return Ct(e),ur(),t!==null&&rt(ua),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ye(at),null;case 25:return null;default:return null}}function Dd(t,e){switch(or(e),e.tag){case 3:ye(at),$a();break;case 26:case 27:case 5:on(e);break;case 4:$a();break;case 31:e.memoizedState!==null&&Ct(e);break;case 13:Ct(e);break;case 19:rt($);break;case 10:ye(e.type);break;case 22:case 23:Ct(e),ur(),t!==null&&rt(ua);break;case 24:ye(at)}}function hl(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&t)===t){i=void 0;var n=a.create,o=a.inst;i=n(),o.destroy=i}a=a.next}while(a!==l)}}catch(s){U(e,e.return,s)}}function Pe(t,e,a){try{var i=e.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var n=l.next;i=n;do{if((i.tag&t)===t){var o=i.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,l=e;var r=a,u=s;try{u()}catch(b){U(l,r,b)}}}i=i.next}while(i!==n)}}catch(b){U(e,e.return,b)}}function Ld(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Vu(e,a)}catch(i){U(t,t.return,i)}}}function Hd(t,e,a){a.props=ya(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){U(t,e,i)}}function qi(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(l){U(t,e,l)}}function ee(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){U(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){U(t,e,l)}else a.current=null}function Ud(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){U(t,t.return,l)}}function jo(t,e,a){try{var i=t.stateNode;A1(i,t.type,a,e),i[Tt]=e}catch(l){U(t,t.return,l)}}function jd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&aa(t.type)||t.tag===4}function Go(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||jd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function As(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ge));else if(i!==4&&(i===27&&aa(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(As(t,e,a),t=t.sibling;t!==null;)As(t,e,a),t=t.sibling}function vn(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(vn(t,e,a),t=t.sibling;t!==null;)vn(t,e,a),t=t.sibling}function Gd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);pt(e,i,a),e[ct]=t,e[Tt]=a}catch(n){U(t,t.return,n)}}var pe=!1,et=!1,qo=!1,xc=typeof WeakSet=="function"?WeakSet:Set,ot=null;function f1(t,e){if(t=t.containerInfo,Ds=On,t=Cu(t),er(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,n=i.focusNode;i=i.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break t}var o=0,s=-1,r=-1,u=0,b=0,h=t,p=null;e:for(;;){for(var c;h!==a||l!==0&&h.nodeType!==3||(s=o+l),h!==n||i!==0&&h.nodeType!==3||(r=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(c=h.firstChild)!==null;)p=h,h=c;for(;;){if(h===t)break e;if(p===a&&++u===l&&(s=o),p===n&&++b===i&&(r=o),(c=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=c}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ls={focusedElem:t,selectionRange:a},On=!1,ot=e;ot!==null;)if(e=ot,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ot=t;else for(;ot!==null;){switch(e=ot,n=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)l=t[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,a=e,l=n.memoizedProps,n=n.memoizedState,i=a.stateNode;try{var x=ya(a.type,l);t=i.getSnapshotBeforeUpdate(x,n),i.__reactInternalSnapshotBeforeUpdate=t}catch(v){U(a,a.return,v)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Us(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Us(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(y(163))}if(t=e.sibling,t!==null){t.return=e.return,ot=t;break}ot=e.return}}function qd(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ce(t,a),i&4&&hl(5,a);break;case 1:if(ce(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(o){U(a,a.return,o)}else{var l=ya(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){U(a,a.return,o)}}i&64&&Ld(a),i&512&&qi(a,a.return);break;case 3:if(ce(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Vu(t,e)}catch(o){U(a,a.return,o)}}break;case 27:e===null&&i&4&&Gd(a);case 26:case 5:ce(t,a),e===null&&i&4&&Ud(a),i&512&&qi(a,a.return);break;case 12:ce(t,a);break;case 31:ce(t,a),i&4&&Zd(t,a);break;case 13:ce(t,a),i&4&&Vd(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=y1.bind(null,a),L1(t,a))));break;case 22:if(i=a.memoizedState!==null||pe,!i){e=e!==null&&e.memoizedState!==null||et,l=pe;var n=et;pe=i,(et=e)&&!n?ue(t,a,(a.subtreeFlags&8772)!==0):ce(t,a),pe=l,et=n}break;case 30:break;default:ce(t,a)}}function Yd(t){var e=t.alternate;e!==null&&(t.alternate=null,Yd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Fs(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var F=null,wt=!1;function fe(t,e,a){for(a=a.child;a!==null;)Kd(t,e,a),a=a.sibling}function Kd(t,e,a){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(sl,a)}catch{}switch(a.tag){case 26:et||ee(a,e),fe(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:et||ee(a,e);var i=F,l=wt;aa(a.type)&&(F=a.stateNode,wt=!1),fe(t,e,a),Vi(a.stateNode),F=i,wt=l;break;case 5:et||ee(a,e);case 6:if(i=F,l=wt,F=null,fe(t,e,a),F=i,wt=l,F!==null)if(wt)try{(F.nodeType===9?F.body:F.nodeName==="HTML"?F.ownerDocument.body:F).removeChild(a.stateNode)}catch(n){U(a,e,n)}else try{F.removeChild(a.stateNode)}catch(n){U(a,e,n)}break;case 18:F!==null&&(wt?(t=F,Nc(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ri(t)):Nc(F,a.stateNode));break;case 4:i=F,l=wt,F=a.stateNode.containerInfo,wt=!0,fe(t,e,a),F=i,wt=l;break;case 0:case 11:case 14:case 15:Pe(2,a,e),et||Pe(4,a,e),fe(t,e,a);break;case 1:et||(ee(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Hd(a,e,i)),fe(t,e,a);break;case 21:fe(t,e,a);break;case 22:et=(i=et)||a.memoizedState!==null,fe(t,e,a),et=i;break;default:fe(t,e,a)}}function Zd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ri(t)}catch(a){U(e,e.return,a)}}}function Vd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ri(t)}catch(a){U(e,e.return,a)}}function c1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new xc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new xc),e;default:throw Error(y(435,t.tag))}}function Ll(t,e){var a=c1(t);e.forEach(function(i){if(!a.has(i)){a.add(i);var l=x1.bind(null,t,i);i.then(l,l)}})}function xt(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],n=t,o=e,s=o;t:for(;s!==null;){switch(s.tag){case 27:if(aa(s.type)){F=s.stateNode,wt=!1;break t}break;case 5:F=s.stateNode,wt=!1;break t;case 3:case 4:F=s.stateNode.containerInfo,wt=!0;break t}s=s.return}if(F===null)throw Error(y(160));Kd(n,o,l),F=null,wt=!1,n=l.alternate,n!==null&&(n.return=null),l.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Xd(e,t),e=e.sibling}var Wt=null;function Xd(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xt(e,t),vt(t),i&4&&(Pe(3,t,t.return),hl(3,t),Pe(5,t,t.return));break;case 1:xt(e,t),vt(t),i&512&&(et||a===null||ee(a,a.return)),i&64&&pe&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=Wt;if(xt(e,t),vt(t),i&512&&(et||a===null||ee(a,a.return)),i&4){var n=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,l=l.ownerDocument||l;e:switch(i){case"title":n=l.getElementsByTagName("title")[0],(!n||n[cl]||n[ct]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=l.createElement(i),l.head.insertBefore(n,l.querySelector("head > title"))),pt(n,i,a),n[ct]=t,st(n),i=n;break t;case"link":var o=qc("link","href",l).get(i+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(n=o[s],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break e}}n=l.createElement(i),pt(n,i,a),l.head.appendChild(n);break;case"meta":if(o=qc("meta","content",l).get(i+(a.content||""))){for(s=0;s<o.length;s++)if(n=o[s],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break e}}n=l.createElement(i),pt(n,i,a),l.head.appendChild(n);break;default:throw Error(y(468,i))}n[ct]=t,st(n),i=n}t.stateNode=i}else Yc(l,t.type,t.stateNode);else t.stateNode=Gc(l,i,t.memoizedProps);else n!==i?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,i===null?Yc(l,t.type,t.stateNode):Gc(l,i,t.memoizedProps)):i===null&&t.stateNode!==null&&jo(t,t.memoizedProps,a.memoizedProps)}break;case 27:xt(e,t),vt(t),i&512&&(et||a===null||ee(a,a.return)),a!==null&&i&4&&jo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(xt(e,t),vt(t),i&512&&(et||a===null||ee(a,a.return)),t.flags&32){l=t.stateNode;try{ti(l,"")}catch(x){U(t,t.return,x)}}i&4&&t.stateNode!=null&&(l=t.memoizedProps,jo(t,l,a!==null?a.memoizedProps:l)),i&1024&&(qo=!0);break;case 6:if(xt(e,t),vt(t),i&4){if(t.stateNode===null)throw Error(y(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(x){U(t,t.return,x)}}break;case 3:if(tn=null,l=Wt,Wt=An(e.containerInfo),xt(e,t),Wt=l,vt(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ri(e.containerInfo)}catch(x){U(t,t.return,x)}qo&&(qo=!1,Qd(t));break;case 4:i=Wt,Wt=An(t.stateNode.containerInfo),xt(e,t),vt(t),Wt=i;break;case 12:xt(e,t),vt(t);break;case 31:xt(e,t),vt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Ll(t,i)));break;case 13:xt(e,t),vt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zn=_t()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Ll(t,i)));break;case 22:l=t.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,u=pe,b=et;if(pe=u||l,et=b||r,xt(e,t),et=b,pe=u,vt(t),i&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(a===null||r||pe||et||ra(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(n=r.stateNode,l)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=r.stateNode;var h=r.memoizedProps.style,p=h!=null&&h.hasOwnProperty("display")?h.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(x){U(r,r.return,x)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=l?"":r.memoizedProps}catch(x){U(r,r.return,x)}}}else if(e.tag===18){if(a===null){r=e;try{var c=r.stateNode;l?Dc(c,!0):Dc(r.stateNode,!1)}catch(x){U(r,r.return,x)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Ll(t,a))));break;case 19:xt(e,t),vt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Ll(t,i)));break;case 30:break;case 21:break;default:xt(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(jd(i)){a=i;break}i=i.return}if(a==null)throw Error(y(160));switch(a.tag){case 27:var l=a.stateNode,n=Go(t);vn(t,n,l);break;case 5:var o=a.stateNode;a.flags&32&&(ti(o,""),a.flags&=-33);var s=Go(t);vn(t,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,u=Go(t);As(t,u,r);break;default:throw Error(y(161))}}catch(b){U(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Qd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ce(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)qd(t,e.alternate,e),e=e.sibling}function ra(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pe(4,e,e.return),ra(e);break;case 1:ee(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Hd(e,e.return,a),ra(e);break;case 27:Vi(e.stateNode);case 26:case 5:ee(e,e.return),ra(e);break;case 22:e.memoizedState===null&&ra(e);break;case 30:ra(e);break;default:ra(e)}t=t.sibling}}function ue(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,l=t,n=e,o=n.flags;switch(n.tag){case 0:case 11:case 15:ue(l,n,a),hl(4,n);break;case 1:if(ue(l,n,a),i=n,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(u){U(i,i.return,u)}if(i=n,l=i.updateQueue,l!==null){var s=i.stateNode;try{var r=l.shared.hiddenCallbacks;if(r!==null)for(l.shared.hiddenCallbacks=null,l=0;l<r.length;l++)Zu(r[l],s)}catch(u){U(i,i.return,u)}}a&&o&64&&Ld(n),qi(n,n.return);break;case 27:Gd(n);case 26:case 5:ue(l,n,a),a&&i===null&&o&4&&Ud(n),qi(n,n.return);break;case 12:ue(l,n,a);break;case 31:ue(l,n,a),a&&o&4&&Zd(l,n);break;case 13:ue(l,n,a),a&&o&4&&Vd(l,n);break;case 22:n.memoizedState===null&&ue(l,n,a),qi(n,n.return);break;case 30:break;default:ue(l,n,a)}e=e.sibling}}function Cr(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&dl(a))}function Ar(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&dl(t))}function Ft(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jd(t,e,a,i),e=e.sibling}function Jd(t,e,a,i){var l=e.flags;switch(e.tag){case 0:case 11:case 15:Ft(t,e,a,i),l&2048&&hl(9,e);break;case 1:Ft(t,e,a,i);break;case 3:Ft(t,e,a,i),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&dl(t)));break;case 12:if(l&2048){Ft(t,e,a,i),t=e.stateNode;try{var n=e.memoizedProps,o=n.id,s=n.onPostCommit;typeof s=="function"&&s(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){U(e,e.return,r)}}else Ft(t,e,a,i);break;case 31:Ft(t,e,a,i);break;case 13:Ft(t,e,a,i);break;case 23:break;case 22:n=e.stateNode,o=e.alternate,e.memoizedState!==null?n._visibility&2?Ft(t,e,a,i):Yi(t,e):n._visibility&2?Ft(t,e,a,i):(n._visibility|=2,Oa(t,e,a,i,(e.subtreeFlags&10256)!==0||!1)),l&2048&&Cr(o,e);break;case 24:Ft(t,e,a,i),l&2048&&Ar(e.alternate,e);break;default:Ft(t,e,a,i)}}function Oa(t,e,a,i,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var n=t,o=e,s=a,r=i,u=o.flags;switch(o.tag){case 0:case 11:case 15:Oa(n,o,s,r,l),hl(8,o);break;case 23:break;case 22:var b=o.stateNode;o.memoizedState!==null?b._visibility&2?Oa(n,o,s,r,l):Yi(n,o):(b._visibility|=2,Oa(n,o,s,r,l)),l&&u&2048&&Cr(o.alternate,o);break;case 24:Oa(n,o,s,r,l),l&&u&2048&&Ar(o.alternate,o);break;default:Oa(n,o,s,r,l)}e=e.sibling}}function Yi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,l=i.flags;switch(i.tag){case 22:Yi(a,i),l&2048&&Cr(i.alternate,i);break;case 24:Yi(a,i),l&2048&&Ar(i.alternate,i);break;default:Yi(a,i)}e=e.sibling}}var Bi=8192;function _a(t,e,a){if(t.subtreeFlags&Bi)for(t=t.child;t!==null;)Fd(t,e,a),t=t.sibling}function Fd(t,e,a){switch(t.tag){case 26:_a(t,e,a),t.flags&Bi&&t.memoizedState!==null&&J1(a,Wt,t.memoizedState,t.memoizedProps);break;case 5:_a(t,e,a);break;case 3:case 4:var i=Wt;Wt=An(t.stateNode.containerInfo),_a(t,e,a),Wt=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Bi,Bi=16777216,_a(t,e,a),Bi=i):_a(t,e,a));break;default:_a(t,e,a)}}function Wd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function zi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];ot=i,$d(i,t)}Wd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Id(t),t=t.sibling}function Id(t){switch(t.tag){case 0:case 11:case 15:zi(t),t.flags&2048&&Pe(9,t,t.return);break;case 3:zi(t);break;case 12:zi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,$l(t)):zi(t);break;default:zi(t)}}function $l(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];ot=i,$d(i,t)}Wd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pe(8,e,e.return),$l(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,$l(e));break;default:$l(e)}t=t.sibling}}function $d(t,e){for(;ot!==null;){var a=ot;switch(a.tag){case 0:case 11:case 15:Pe(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:dl(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ot=i;else t:for(a=t;ot!==null;){i=ot;var l=i.sibling,n=i.return;if(Yd(i),i===a){ot=null;break t}if(l!==null){l.return=n,ot=l;break t}ot=n}}}var u1={getCacheForType:function(t){var e=dt(at),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return dt(at).controller.signal}},d1=typeof WeakMap=="function"?WeakMap:Map,D=0,q=null,A=null,_=0,H=0,Mt=null,je=!1,pi=!1,Er=!1,Te=0,I=0,ta=0,pa=0,_r=0,Et=0,li=0,Ki=null,St=null,Es=!1,Zn=0,Pd=0,wn=1/0,Sn=null,Xe=null,lt=0,Qe=null,ni=null,xe=0,_s=0,Os=null,tp=null,Zi=0,Bs=null;function Rt(){return(D&2)!==0&&_!==0?_&-_:k.T!==null?Br():fu()}function ep(){if(Et===0)if((_&536870912)===0||O){var t=Ml;Ml<<=1,(Ml&3932160)===0&&(Ml=262144),Et=t}else Et=536870912;return t=Dt.current,t!==null&&(t.flags|=32),Et}function kt(t,e,a){(t===q&&(H===2||H===9)||t.cancelPendingCommit!==null)&&(oi(t,0),Ge(t,_,Et,!1)),fl(t,a),((D&2)===0||t!==q)&&(t===q&&((D&2)===0&&(pa|=a),I===4&&Ge(t,_,Et,!1)),le(t))}function ap(t,e,a){if((D&6)!==0)throw Error(y(327));var i=!a&&(e&127)===0&&(e&t.expiredLanes)===0||rl(t,e),l=i?g1(t,e):Yo(t,e,!0),n=i;do{if(l===0){pi&&!i&&Ge(t,e,0,!1);break}else{if(a=t.current.alternate,n&&!p1(a)){l=Yo(t,e,!1),n=!1;continue}if(l===2){if(n=e,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var s=t;l=Ki;var r=s.current.memoizedState.isDehydrated;if(r&&(oi(s,o).flags|=256),o=Yo(s,o,!1),o!==2){if(Er&&!r){s.errorRecoveryDisabledLanes|=n,pa|=n,l=4;break t}n=St,St=l,n!==null&&(St===null?St=n:St.push.apply(St,n))}l=o}if(n=!1,l!==2)continue}}if(l===1){oi(t,0),Ge(t,e,0,!0);break}t:{switch(i=t,n=l,n){case 0:case 1:throw Error(y(345));case 4:if((e&4194048)!==e)break;case 6:Ge(i,e,Et,!je);break t;case 2:St=null;break;case 3:case 5:break;default:throw Error(y(329))}if((e&62914560)===e&&(l=Zn+300-_t(),10<l)){if(Ge(i,e,Et,!je),Rn(i,0,!0)!==0)break t;xe=e,i.timeoutHandle=Sp(vc.bind(null,i,a,St,Sn,Es,e,Et,pa,li,je,n,"Throttled",-0,0),l);break t}vc(i,a,St,Sn,Es,e,Et,pa,li,je,n,null,-0,0)}}break}while(!0);le(t)}function vc(t,e,a,i,l,n,o,s,r,u,b,h,p,c){if(t.timeoutHandle=-1,h=e.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ge},Fd(e,n,h);var x=(n&62914560)===n?Zn-_t():(n&4194048)===n?Pd-_t():0;if(x=F1(h,x),x!==null){xe=n,t.cancelPendingCommit=x(Sc.bind(null,t,e,n,a,i,l,o,s,r,b,h,null,p,c)),Ge(t,n,o,!u);return}}Sc(t,e,n,a,i,l,o,s,r)}function p1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],n=l.getSnapshot;l=l.value;try{if(!Nt(n(),l))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ge(t,e,a,i){e&=~_r,e&=~pa,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var l=e;0<l;){var n=31-Bt(l),o=1<<n;i[n]=-1,l&=~o}a!==0&&ou(t,a,e)}function Vn(){return(D&6)===0?(gl(0,!1),!1):!0}function Or(){if(A!==null){if(H===0)var t=A.return;else t=A,be=ka=null,br(t),Fa=null,$i=0,t=A;for(;t!==null;)Dd(t.alternate,t),t=t.return;A=null}}function oi(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,O1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),xe=0,Or(),q=t,A=a=me(t.current,null),_=e,H=0,Mt=null,je=!1,pi=rl(t,e),Er=!1,li=Et=_r=pa=ta=I=0,St=Ki=null,Es=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var l=31-Bt(i),n=1<<l;e|=t[l],i&=~n}return Te=e,Hn(),a}function ip(t,e){z=null,k.H=tl,e===di||e===jn?(e=$f(),H=3):e===fr?(e=$f(),H=4):H=e===zr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Mt=e,A===null&&(I=1,yn(t,Zt(e,t.current)))}function lp(){var t=Dt.current;return t===null?!0:(_&4194048)===_?Xt===null:(_&62914560)===_||(_&536870912)!==0?t===Xt:!1}function np(){var t=k.H;return k.H=tl,t===null?tl:t}function op(){var t=k.A;return k.A=u1,t}function kn(){I=4,je||(_&4194048)!==_&&Dt.current!==null||(pi=!0),(ta&134217727)===0&&(pa&134217727)===0||q===null||Ge(q,_,Et,!1)}function Yo(t,e,a){var i=D;D|=2;var l=np(),n=op();(q!==t||_!==e)&&(Sn=null,oi(t,e)),e=!1;var o=I;t:do try{if(H!==0&&A!==null){var s=A,r=Mt;switch(H){case 8:Or(),o=6;break t;case 3:case 2:case 9:case 6:Dt.current===null&&(e=!0);var u=H;if(H=0,Mt=null,Za(t,s,r,u),a&&pi){o=0;break t}break;default:u=H,H=0,Mt=null,Za(t,s,r,u)}}h1(),o=I;break}catch(b){ip(t,b)}while(!0);return e&&t.shellSuspendCounter++,be=ka=null,D=i,k.H=l,k.A=n,A===null&&(q=null,_=0,Hn()),o}function h1(){for(;A!==null;)sp(A)}function g1(t,e){var a=D;D|=2;var i=np(),l=op();q!==t||_!==e?(Sn=null,wn=_t()+500,oi(t,e)):pi=rl(t,e);t:do try{if(H!==0&&A!==null){e=A;var n=Mt;e:switch(H){case 1:H=0,Mt=null,Za(t,e,n,1);break;case 2:case 9:if(If(n)){H=0,Mt=null,wc(e);break}e=function(){H!==2&&H!==9||q!==t||(H=7),le(t)},n.then(e,e);break t;case 3:H=7;break t;case 4:H=5;break t;case 7:If(n)?(H=0,Mt=null,wc(e)):(H=0,Mt=null,Za(t,e,n,7));break;case 5:var o=null;switch(A.tag){case 26:o=A.memoizedState;case 5:case 27:var s=A;if(o?Cp(o):s.stateNode.complete){H=0,Mt=null;var r=s.sibling;if(r!==null)A=r;else{var u=s.return;u!==null?(A=u,Xn(u)):A=null}break e}}H=0,Mt=null,Za(t,e,n,5);break;case 6:H=0,Mt=null,Za(t,e,n,6);break;case 8:Or(),I=6;break t;default:throw Error(y(462))}}b1();break}catch(b){ip(t,b)}while(!0);return be=ka=null,k.H=i,k.A=l,D=a,A!==null?0:(q=null,_=0,Hn(),I)}function b1(){for(;A!==null&&!j0();)sp(A)}function sp(t){var e=Nd(t.alternate,t,Te);t.memoizedProps=t.pendingProps,e===null?Xn(t):A=e}function wc(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=hc(a,e,e.pendingProps,e.type,void 0,_);break;case 11:e=hc(a,e,e.pendingProps,e.type.render,e.ref,_);break;case 5:br(e);default:Dd(a,e),e=A=Du(e,Te),e=Nd(a,e,Te)}t.memoizedProps=t.pendingProps,e===null?Xn(t):A=e}function Za(t,e,a,i){be=ka=null,br(e),Fa=null,$i=0;var l=e.return;try{if(l1(t,l,e,a,_)){I=1,yn(t,Zt(a,t.current)),A=null;return}}catch(n){if(l!==null)throw A=l,n;I=1,yn(t,Zt(a,t.current)),A=null;return}e.flags&32768?(O||i===1?t=!0:pi||(_&536870912)!==0?t=!1:(je=t=!0,(i===2||i===9||i===3||i===6)&&(i=Dt.current,i!==null&&i.tag===13&&(i.flags|=16384))),rp(e,t)):Xn(e)}function Xn(t){var e=t;do{if((e.flags&32768)!==0){rp(e,je);return}t=e.return;var a=s1(e.alternate,e,Te);if(a!==null){A=a;return}if(e=e.sibling,e!==null){A=e;return}A=e=t}while(e!==null);I===0&&(I=5)}function rp(t,e){do{var a=r1(t.alternate,t);if(a!==null){a.flags&=32767,A=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){A=t;return}A=t=a}while(t!==null);I=6,A=null}function Sc(t,e,a,i,l,n,o,s,r){t.cancelPendingCommit=null;do Qn();while(lt!==0);if((D&6)!==0)throw Error(y(327));if(e!==null){if(e===t.current)throw Error(y(177));if(n=e.lanes|e.childLanes,n|=ar,F0(t,a,n,o,s,r),t===q&&(A=q=null,_=0),ni=e,Qe=t,xe=a,_s=n,Os=l,tp=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,v1(sn,function(){return pp(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=k.T,k.T=null,l=L.p,L.p=2,o=D,D|=4;try{f1(t,e,a)}finally{D=o,L.p=l,k.T=i}}lt=1,fp(),cp(),up()}}function fp(){if(lt===1){lt=0;var t=Qe,e=ni,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=k.T,k.T=null;var i=L.p;L.p=2;var l=D;D|=4;try{Xd(e,t);var n=Ls,o=Cu(t.containerInfo),s=n.focusedElem,r=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mu(s.ownerDocument.documentElement,s)){if(r!==null&&er(s)){var u=r.start,b=r.end;if(b===void 0&&(b=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(b,s.value.length);else{var h=s.ownerDocument||document,p=h&&h.defaultView||window;if(p.getSelection){var c=p.getSelection(),x=s.textContent.length,v=Math.min(r.start,x),B=r.end===void 0?v:Math.min(r.end,x);!c.extend&&v>B&&(o=B,B=v,v=o);var d=Zf(s,v),f=Zf(s,B);if(d&&f&&(c.rangeCount!==1||c.anchorNode!==d.node||c.anchorOffset!==d.offset||c.focusNode!==f.node||c.focusOffset!==f.offset)){var g=h.createRange();g.setStart(d.node,d.offset),c.removeAllRanges(),v>B?(c.addRange(g),c.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),c.addRange(g))}}}}for(h=[],c=s;c=c.parentNode;)c.nodeType===1&&h.push({element:c,left:c.scrollLeft,top:c.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<h.length;s++){var m=h[s];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}On=!!Ds,Ls=Ds=null}finally{D=l,L.p=i,k.T=a}}t.current=e,lt=2}}function cp(){if(lt===2){lt=0;var t=Qe,e=ni,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=k.T,k.T=null;var i=L.p;L.p=2;var l=D;D|=4;try{qd(t,e.alternate,e)}finally{D=l,L.p=i,k.T=a}}lt=3}}function up(){if(lt===4||lt===3){lt=0,G0();var t=Qe,e=ni,a=xe,i=tp;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?lt=5:(lt=0,ni=Qe=null,dp(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Xe=null),Js(a),e=e.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=k.T,l=L.p,L.p=2,k.T=null;try{for(var n=t.onRecoverableError,o=0;o<i.length;o++){var s=i[o];n(s.value,{componentStack:s.stack})}}finally{k.T=e,L.p=l}}(xe&3)!==0&&Qn(),le(t),l=t.pendingLanes,(a&261930)!==0&&(l&42)!==0?t===Bs?Zi++:(Zi=0,Bs=t):Zi=0,gl(0,!1)}}function dp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,dl(e)))}function Qn(){return fp(),cp(),up(),pp()}function pp(){if(lt!==5)return!1;var t=Qe,e=_s;_s=0;var a=Js(xe),i=k.T,l=L.p;try{L.p=32>a?32:a,k.T=null,a=Os,Os=null;var n=Qe,o=xe;if(lt=0,ni=Qe=null,xe=0,(D&6)!==0)throw Error(y(331));var s=D;if(D|=4,Id(n.current),Jd(n,n.current,o,a),D=s,gl(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(sl,n)}catch{}return!0}finally{L.p=l,k.T=i,dp(t,e)}}function kc(t,e,a){e=Zt(a,e),e=zs(t.stateNode,e,2),t=Ve(t,e,2),t!==null&&(fl(t,2),le(t))}function U(t,e,a){if(t.tag===3)kc(t,t,a);else for(;e!==null;){if(e.tag===3){kc(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xe===null||!Xe.has(i))){t=Zt(a,t),a=Ad(2),i=Ve(e,a,2),i!==null&&(Ed(a,i,e,t),fl(i,2),le(i));break}}e=e.return}}function Ko(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new d1;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(a)||(Er=!0,l.add(a),t=m1.bind(null,t,e,a),e.then(t,t))}function m1(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,q===t&&(_&a)===a&&(I===4||I===3&&(_&62914560)===_&&300>_t()-Zn?(D&2)===0&&oi(t,0):_r|=a,li===_&&(li=0)),le(t)}function hp(t,e){e===0&&(e=nu()),t=Sa(t,e),t!==null&&(fl(t,e),le(t))}function y1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),hp(t,a)}function x1(t,e){var a=0;switch(t.tag){case 31:case 13:var i=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(y(314))}i!==null&&i.delete(e),hp(t,a)}function v1(t,e){return Xs(t,e)}var Tn=null,Ba=null,Rs=!1,zn=!1,Zo=!1,qe=0;function le(t){t!==Ba&&t.next===null&&(Ba===null?Tn=Ba=t:Ba=Ba.next=t),zn=!0,Rs||(Rs=!0,S1())}function gl(t,e){if(!Zo&&zn){Zo=!0;do for(var a=!1,i=Tn;i!==null;){if(!e)if(t!==0){var l=i.pendingLanes;if(l===0)var n=0;else{var o=i.suspendedLanes,s=i.pingedLanes;n=(1<<31-Bt(42|t)+1)-1,n&=l&~(o&~s),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,Tc(i,n))}else n=_,n=Rn(i,i===q?n:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(n&3)===0||rl(i,n)||(a=!0,Tc(i,n));i=i.next}while(a);Zo=!1}}function w1(){gp()}function gp(){zn=Rs=!1;var t=0;qe!==0&&_1()&&(t=qe);for(var e=_t(),a=null,i=Tn;i!==null;){var l=i.next,n=bp(i,e);n===0?(i.next=null,a===null?Tn=l:a.next=l,l===null&&(Ba=a)):(a=i,(t!==0||(n&3)!==0)&&(zn=!0)),i=l}lt!==0&&lt!==5||gl(t,!1),qe!==0&&(qe=0)}function bp(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,l=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-Bt(n),s=1<<o,r=l[o];r===-1?((s&a)===0||(s&i)!==0)&&(l[o]=J0(s,e)):r<=e&&(t.expiredLanes|=s),n&=~s}if(e=q,a=_,a=Rn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(H===2||H===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&xo(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||rl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&xo(i),Js(a)){case 2:case 8:a=iu;break;case 32:a=sn;break;case 268435456:a=lu;break;default:a=sn}return i=mp.bind(null,t),a=Xs(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&xo(i),t.callbackPriority=2,t.callbackNode=null,2}function mp(t,e){if(lt!==0&&lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Qn()&&t.callbackNode!==a)return null;var i=_;return i=Rn(t,t===q?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(ap(t,i,e),bp(t,_t()),t.callbackNode!=null&&t.callbackNode===a?mp.bind(null,t):null)}function Tc(t,e){if(Qn())return null;ap(t,e,!0)}function S1(){B1(function(){(D&6)!==0?Xs(au,w1):gp()})}function Br(){if(qe===0){var t=ei;t===0&&(t=zl,zl<<=1,(zl&261888)===0&&(zl=256)),qe=t}return qe}function zc(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Kl(""+t)}function Mc(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function k1(t,e,a,i,l){if(e==="submit"&&a&&a.stateNode===l){var n=zc((l[Tt]||null).action),o=i.submitter;o&&(e=(e=o[Tt]||null)?zc(e.formAction):o.getAttribute("formAction"),e!==null&&(n=e,o=null));var s=new Nn("action","action",null,i,l);t.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qe!==0){var r=o?Mc(l,o):new FormData(l);ks(a,{pending:!0,data:r,method:l.method,action:n},null,r)}}else typeof n=="function"&&(s.preventDefault(),r=o?Mc(l,o):new FormData(l),ks(a,{pending:!0,data:r,method:l.method,action:n},n,r))},currentTarget:l}]})}}for(Hl=0;Hl<us.length;Hl++)Ul=us[Hl],Cc=Ul.toLowerCase(),Ac=Ul[0].toUpperCase()+Ul.slice(1),It(Cc,"on"+Ac);var Ul,Cc,Ac,Hl;It(Eu,"onAnimationEnd");It(_u,"onAnimationIteration");It(Ou,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(qh,"onTransitionRun");It(Yh,"onTransitionStart");It(Kh,"onTransitionCancel");It(Bu,"onTransitionEnd");Pa("onMouseEnter",["mouseout","mouseover"]);Pa("onMouseLeave",["mouseout","mouseover"]);Pa("onPointerEnter",["pointerout","pointerover"]);Pa("onPointerLeave",["pointerout","pointerover"]);xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xa("onBeforeInput",["compositionend","keypress","textInput","paste"]);xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function yp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],l=i.event;i=i.listeners;t:{var n=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],r=s.instance,u=s.currentTarget;if(s=s.listener,r!==n&&l.isPropagationStopped())break t;n=s,l.currentTarget=u;try{n(l)}catch(b){fn(b)}l.currentTarget=null,n=r}else for(o=0;o<i.length;o++){if(s=i[o],r=s.instance,u=s.currentTarget,s=s.listener,r!==n&&l.isPropagationStopped())break t;n=s,l.currentTarget=u;try{n(l)}catch(b){fn(b)}l.currentTarget=null,n=r}}}}function C(t,e){var a=e[is];a===void 0&&(a=e[is]=new Set);var i=t+"__bubble";a.has(i)||(xp(e,t,2,!1),a.add(i))}function Vo(t,e,a){var i=0;e&&(i|=4),xp(a,t,i,e)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Rr(t){if(!t[jl]){t[jl]=!0,cu.forEach(function(a){a!=="selectionchange"&&(T1.has(a)||Vo(a,!1,t),Vo(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jl]||(e[jl]=!0,Vo("selectionchange",!1,e))}}function xp(t,e,a,i){switch(Bp(e)){case 2:var l=$1;break;case 8:l=P1;break;default:l=Hr}a=l.bind(null,e,a,t),l=void 0,!rs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?t.addEventListener(e,a,{capture:!0,passive:l}):t.addEventListener(e,a,!0):l!==void 0?t.addEventListener(e,a,{passive:l}):t.addEventListener(e,a,!1)}function Xo(t,e,a,i,l){var n=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===l)break;if(o===4)for(o=i.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;s!==null;){if(o=Da(s),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){i=n=o;continue t}s=s.parentNode}}i=i.return}yu(function(){var u=n,b=Is(a),h=[];t:{var p=Ru.get(t);if(p!==void 0){var c=Nn,x=t;switch(t){case"keypress":if(Vl(a)===0)break t;case"keydown":case"keyup":c=xh;break;case"focusin":x="focus",c=To;break;case"focusout":x="blur",c=To;break;case"beforeblur":case"afterblur":c=To;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Sh;break;case Eu:case _u:case Ou:c=ch;break;case Bu:c=Th;break;case"scroll":case"scrollend":c=nh;break;case"wheel":c=Mh;break;case"copy":case"cut":case"paste":c=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Hf;break;case"toggle":case"beforetoggle":c=Ah}var v=(e&4)!==0,B=!v&&(t==="scroll"||t==="scrollend"),d=v?p!==null?p+"Capture":null:p;v=[];for(var f=u,g;f!==null;){var m=f;if(g=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||g===null||d===null||(m=Qi(f,d),m!=null&&v.push(al(f,m,g))),B)break;f=f.return}0<v.length&&(p=new c(p,x,null,a,b),h.push({event:p,listeners:v}))}}if((e&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",c=t==="mouseout"||t==="pointerout",p&&a!==ss&&(x=a.relatedTarget||a.fromElement)&&(Da(x)||x[fi]))break t;if((c||p)&&(p=b.window===b?b:(p=b.ownerDocument)?p.defaultView||p.parentWindow:window,c?(x=a.relatedTarget||a.toElement,c=u,x=x?Da(x):null,x!==null&&(B=ol(x),v=x.tag,x!==B||v!==5&&v!==27&&v!==6)&&(x=null)):(c=null,x=u),c!==x)){if(v=Df,m="onMouseLeave",d="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Hf,m="onPointerLeave",d="onPointerEnter",f="pointer"),B=c==null?p:_i(c),g=x==null?p:_i(x),p=new v(m,f+"leave",c,a,b),p.target=B,p.relatedTarget=g,m=null,Da(b)===u&&(v=new v(d,f+"enter",x,a,b),v.target=g,v.relatedTarget=B,m=v),B=m,c&&x)e:{for(v=z1,d=c,f=x,g=0,m=d;m;m=v(m))g++;m=0;for(var S=f;S;S=v(S))m++;for(;0<g-m;)d=v(d),g--;for(;0<m-g;)f=v(f),m--;for(;g--;){if(d===f||f!==null&&d===f.alternate){v=d;break e}d=v(d),f=v(f)}v=null}else v=null;c!==null&&Ec(h,p,c,v,!1),x!==null&&B!==null&&Ec(h,B,x,v,!0)}}t:{if(p=u?_i(u):window,c=p.nodeName&&p.nodeName.toLowerCase(),c==="select"||c==="input"&&p.type==="file")var R=qf;else if(Gf(p))if(Tu)R=Uh;else{R=Lh;var w=Dh}else c=p.nodeName,!c||c.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?u&&Ws(u.elementType)&&(R=qf):R=Hh;if(R&&(R=R(t,u))){ku(h,R,a,b);break t}w&&w(t,p,u),t==="focusout"&&u&&p.type==="number"&&u.memoizedProps.value!=null&&os(p,"number",p.value)}switch(w=u?_i(u):window,t){case"focusin":(Gf(w)||w.contentEditable==="true")&&(Ua=w,fs=u,Di=null);break;case"focusout":Di=fs=Ua=null;break;case"mousedown":cs=!0;break;case"contextmenu":case"mouseup":case"dragend":cs=!1,Vf(h,a,b);break;case"selectionchange":if(Gh)break;case"keydown":case"keyup":Vf(h,a,b)}var M;if(tr)t:{switch(t){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Ha?wu(t,a)&&(E="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(E="onCompositionStart");E&&(vu&&a.locale!=="ko"&&(Ha||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ha&&(M=xu()):(Ue=b,$s="value"in Ue?Ue.value:Ue.textContent,Ha=!0)),w=Mn(u,E),0<w.length&&(E=new Lf(E,t,null,a,b),h.push({event:E,listeners:w}),M?E.data=M:(M=Su(a),M!==null&&(E.data=M)))),(M=_h?Oh(t,a):Bh(t,a))&&(E=Mn(u,"onBeforeInput"),0<E.length&&(w=new Lf("onBeforeInput","beforeinput",null,a,b),h.push({event:w,listeners:E}),w.data=M)),k1(h,t,u,a,b)}yp(h,e)})}function al(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Mn(t,e){for(var a=e+"Capture",i=[];t!==null;){var l=t,n=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||n===null||(l=Qi(t,a),l!=null&&i.unshift(al(t,l,n)),l=Qi(t,e),l!=null&&i.push(al(t,l,n))),t.tag===3)return i;t=t.return}return[]}function z1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ec(t,e,a,i,l){for(var n=e._reactName,o=[];a!==null&&a!==i;){var s=a,r=s.alternate,u=s.stateNode;if(s=s.tag,r!==null&&r===i)break;s!==5&&s!==26&&s!==27||u===null||(r=u,l?(u=Qi(a,n),u!=null&&o.unshift(al(a,u,r))):l||(u=Qi(a,n),u!=null&&o.push(al(a,u,r)))),a=a.return}o.length!==0&&t.push({event:e,listeners:o})}var M1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function _c(t){return(typeof t=="string"?t:""+t).replace(M1,`
`).replace(C1,"")}function vp(t,e){return e=_c(e),_c(t)===e}function j(t,e,a,i,l,n){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ti(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ti(t,""+i);break;case"className":Al(t,"class",i);break;case"tabIndex":Al(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Al(t,a,i);break;case"style":mu(t,i,n);break;case"data":if(e!=="object"){Al(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Kl(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(e!=="input"&&j(t,e,"name",l.name,l,null),j(t,e,"formEncType",l.formEncType,l,null),j(t,e,"formMethod",l.formMethod,l,null),j(t,e,"formTarget",l.formTarget,l,null)):(j(t,e,"encType",l.encType,l,null),j(t,e,"method",l.method,l,null),j(t,e,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Kl(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=ge);break;case"onScroll":i!=null&&C("scroll",t);break;case"onScrollEnd":i!=null&&C("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(y(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(y(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=Kl(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":C("beforetoggle",t),C("toggle",t),Yl(t,"popover",i);break;case"xlinkActuate":se(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":se(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":se(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":se(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":se(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":se(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":se(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":se(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":se(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Yl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ih.get(a)||a,Yl(t,a,i))}}function Ns(t,e,a,i,l,n){switch(a){case"style":mu(t,i,n);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(y(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(y(60));t.innerHTML=a}}break;case"children":typeof i=="string"?ti(t,i):(typeof i=="number"||typeof i=="bigint")&&ti(t,""+i);break;case"onScroll":i!=null&&C("scroll",t);break;case"onScrollEnd":i!=null&&C("scrollend",t);break;case"onClick":i!=null&&(t.onclick=ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!uu.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),e=a.slice(2,l?a.length-7:void 0),n=t[Tt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(e,n,l),typeof i=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,l);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):Yl(t,a,i)}}}function pt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":C("error",t),C("load",t);var i=!1,l=!1,n;for(n in a)if(a.hasOwnProperty(n)){var o=a[n];if(o!=null)switch(n){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:j(t,e,n,o,a,null)}}l&&j(t,e,"srcSet",a.srcSet,a,null),i&&j(t,e,"src",a.src,a,null);return;case"input":C("invalid",t);var s=n=o=l=null,r=null,u=null;for(i in a)if(a.hasOwnProperty(i)){var b=a[i];if(b!=null)switch(i){case"name":l=b;break;case"type":o=b;break;case"checked":r=b;break;case"defaultChecked":u=b;break;case"value":n=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(y(137,e));break;default:j(t,e,i,b,a,null)}}hu(t,n,s,r,u,o,l,!1);return;case"select":C("invalid",t),i=o=n=null;for(l in a)if(a.hasOwnProperty(l)&&(s=a[l],s!=null))switch(l){case"value":n=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:j(t,e,l,s,a,null)}e=n,a=o,t.multiple=!!i,e!=null?Xa(t,!!i,e,!1):a!=null&&Xa(t,!!i,a,!0);return;case"textarea":C("invalid",t),n=l=i=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":i=s;break;case"defaultValue":l=s;break;case"children":n=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(y(91));break;default:j(t,e,o,s,a,null)}bu(t,i,l,n);return;case"option":for(r in a)a.hasOwnProperty(r)&&(i=a[r],i!=null)&&(r==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":j(t,e,r,i,a,null));return;case"dialog":C("beforetoggle",t),C("toggle",t),C("cancel",t),C("close",t);break;case"iframe":case"object":C("load",t);break;case"video":case"audio":for(i=0;i<el.length;i++)C(el[i],t);break;case"image":C("error",t),C("load",t);break;case"details":C("toggle",t);break;case"embed":case"source":case"link":C("error",t),C("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(i=a[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:j(t,e,u,i,a,null)}return;default:if(Ws(e)){for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!==void 0&&Ns(t,e,b,i,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(i=a[s],i!=null&&j(t,e,s,i,a,null))}function A1(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,n=null,o=null,s=null,r=null,u=null,b=null;for(c in a){var h=a[c];if(a.hasOwnProperty(c)&&h!=null)switch(c){case"checked":break;case"value":break;case"defaultValue":r=h;default:i.hasOwnProperty(c)||j(t,e,c,null,i,h)}}for(var p in i){var c=i[p];if(h=a[p],i.hasOwnProperty(p)&&(c!=null||h!=null))switch(p){case"type":n=c;break;case"name":l=c;break;case"checked":u=c;break;case"defaultChecked":b=c;break;case"value":o=c;break;case"defaultValue":s=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(137,e));break;default:c!==h&&j(t,e,p,c,i,h)}}ns(t,o,s,r,u,b,n,l);return;case"select":c=o=s=p=null;for(n in a)if(r=a[n],a.hasOwnProperty(n)&&r!=null)switch(n){case"value":break;case"multiple":c=r;default:i.hasOwnProperty(n)||j(t,e,n,null,i,r)}for(l in i)if(n=i[l],r=a[l],i.hasOwnProperty(l)&&(n!=null||r!=null))switch(l){case"value":p=n;break;case"defaultValue":s=n;break;case"multiple":o=n;default:n!==r&&j(t,e,l,n,i,r)}e=s,a=o,i=c,p!=null?Xa(t,!!a,p,!1):!!i!=!!a&&(e!=null?Xa(t,!!a,e,!0):Xa(t,!!a,a?[]:"",!1));return;case"textarea":c=p=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:j(t,e,s,null,i,l)}for(o in i)if(l=i[o],n=a[o],i.hasOwnProperty(o)&&(l!=null||n!=null))switch(o){case"value":p=l;break;case"defaultValue":c=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(y(91));break;default:l!==n&&j(t,e,o,l,i,n)}gu(t,p,c);return;case"option":for(var x in a)p=a[x],a.hasOwnProperty(x)&&p!=null&&!i.hasOwnProperty(x)&&(x==="selected"?t.selected=!1:j(t,e,x,null,i,p));for(r in i)p=i[r],c=a[r],i.hasOwnProperty(r)&&p!==c&&(p!=null||c!=null)&&(r==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":j(t,e,r,p,i,c));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in a)p=a[v],a.hasOwnProperty(v)&&p!=null&&!i.hasOwnProperty(v)&&j(t,e,v,null,i,p);for(u in i)if(p=i[u],c=a[u],i.hasOwnProperty(u)&&p!==c&&(p!=null||c!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(y(137,e));break;default:j(t,e,u,p,i,c)}return;default:if(Ws(e)){for(var B in a)p=a[B],a.hasOwnProperty(B)&&p!==void 0&&!i.hasOwnProperty(B)&&Ns(t,e,B,void 0,i,p);for(b in i)p=i[b],c=a[b],!i.hasOwnProperty(b)||p===c||p===void 0&&c===void 0||Ns(t,e,b,p,i,c);return}}for(var d in a)p=a[d],a.hasOwnProperty(d)&&p!=null&&!i.hasOwnProperty(d)&&j(t,e,d,null,i,p);for(h in i)p=i[h],c=a[h],!i.hasOwnProperty(h)||p===c||p==null&&c==null||j(t,e,h,p,i,c)}function Oc(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function E1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],n=l.transferSize,o=l.initiatorType,s=l.duration;if(n&&s&&Oc(o)){for(o=0,s=l.responseEnd,i+=1;i<a.length;i++){var r=a[i],u=r.startTime;if(u>s)break;var b=r.transferSize,h=r.initiatorType;b&&Oc(h)&&(r=r.responseEnd,o+=b*(r<s?1:(s-u)/(r-u)))}if(--i,e+=8*(n+o)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ds=null,Ls=null;function Cn(t){return t.nodeType===9?t:t.ownerDocument}function Bc(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Hs(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qo=null;function _1(){var t=window.event;return t&&t.type==="popstate"?t===Qo?!1:(Qo=t,!0):(Qo=null,!1)}var Sp=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,Rc=typeof Promise=="function"?Promise:void 0,B1=typeof queueMicrotask=="function"?queueMicrotask:typeof Rc!="undefined"?function(t){return Rc.resolve(null).then(t).catch(R1)}:Sp;function R1(t){setTimeout(function(){throw t})}function aa(t){return t==="head"}function Nc(t,e){var a=e,i=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){t.removeChild(l),ri(e);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Vi(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Vi(a);for(var n=a.firstChild;n;){var o=n.nextSibling,s=n.nodeName;n[cl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=o}}else a==="body"&&Vi(t.ownerDocument.body);a=l}while(a);ri(e)}function Dc(t,e){var a=t;t=0;do{var i=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=i}while(a)}function Us(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Us(a),Fs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function N1(t,e,a,i){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[cl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Qt(t.nextSibling),t===null)break}return null}function D1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Qt(t.nextSibling),t===null))return null;return t}function kp(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Qt(t.nextSibling),t===null))return null;return t}function js(t){return t.data==="$?"||t.data==="$~"}function Gs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function L1(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var qs=null;function Lc(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Qt(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Hc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Tp(t,e,a){switch(e=Cn(a),t){case"html":if(t=e.documentElement,!t)throw Error(y(452));return t;case"head":if(t=e.head,!t)throw Error(y(453));return t;case"body":if(t=e.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function Vi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Fs(t)}var Jt=new Map,Uc=new Set;function An(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ze=L.d;L.d={f:H1,r:U1,D:j1,C:G1,L:q1,m:Y1,X:Z1,S:K1,M:V1};function H1(){var t=ze.f(),e=Vn();return t||e}function U1(t){var e=ci(t);e!==null&&e.tag===5&&e.type==="form"?md(e):ze.r(t)}var hi=typeof document=="undefined"?null:document;function zp(t,e,a){var i=hi;if(i&&typeof e=="string"&&e){var l=Kt(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Uc.has(l)||(Uc.add(l),t={rel:t,crossOrigin:a,href:e},i.querySelector(l)===null&&(e=i.createElement("link"),pt(e,"link",t),st(e),i.head.appendChild(e)))}}function j1(t){ze.D(t),zp("dns-prefetch",t,null)}function G1(t,e){ze.C(t,e),zp("preconnect",t,e)}function q1(t,e,a){ze.L(t,e,a);var i=hi;if(i&&t&&e){var l='link[rel="preload"][as="'+Kt(e)+'"]';e==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Kt(a.imageSizes)+'"]')):l+='[href="'+Kt(t)+'"]';var n=l;switch(e){case"style":n=si(t);break;case"script":n=gi(t)}Jt.has(n)||(t=Q({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Jt.set(n,t),i.querySelector(l)!==null||e==="style"&&i.querySelector(bl(n))||e==="script"&&i.querySelector(ml(n))||(e=i.createElement("link"),pt(e,"link",t),st(e),i.head.appendChild(e)))}}function Y1(t,e){ze.m(t,e);var a=hi;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Kt(i)+'"][href="'+Kt(t)+'"]',n=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=gi(t)}if(!Jt.has(n)&&(t=Q({rel:"modulepreload",href:t},e),Jt.set(n,t),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ml(n)))return}i=a.createElement("link"),pt(i,"link",t),st(i),a.head.appendChild(i)}}}function K1(t,e,a){ze.S(t,e,a);var i=hi;if(i&&t){var l=Va(i).hoistableStyles,n=si(t);e=e||"default";var o=l.get(n);if(!o){var s={loading:0,preload:null};if(o=i.querySelector(bl(n)))s.loading=5;else{t=Q({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Jt.get(n))&&Nr(t,a);var r=o=i.createElement("link");st(r),pt(r,"link",t),r._p=new Promise(function(u,b){r.onload=u,r.onerror=b}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Pl(o,e,i)}o={type:"stylesheet",instance:o,count:1,state:s},l.set(n,o)}}}function Z1(t,e){ze.X(t,e);var a=hi;if(a&&t){var i=Va(a).hoistableScripts,l=gi(t),n=i.get(l);n||(n=a.querySelector(ml(l)),n||(t=Q({src:t,async:!0},e),(e=Jt.get(l))&&Dr(t,e),n=a.createElement("script"),st(n),pt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},i.set(l,n))}}function V1(t,e){ze.M(t,e);var a=hi;if(a&&t){var i=Va(a).hoistableScripts,l=gi(t),n=i.get(l);n||(n=a.querySelector(ml(l)),n||(t=Q({src:t,async:!0,type:"module"},e),(e=Jt.get(l))&&Dr(t,e),n=a.createElement("script"),st(n),pt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},i.set(l,n))}}function jc(t,e,a,i){var l=(l=Ye.current)?An(l):null;if(!l)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=si(a.href),a=Va(l).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=si(a.href);var n=Va(l).hoistableStyles,o=n.get(t);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=l.querySelector(bl(t)))&&!n._p&&(o.instance=n,o.state.loading=5),Jt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Jt.set(t,a),n||X1(l,t,a,o.state))),e&&i===null)throw Error(y(528,""));return o}if(e&&i!==null)throw Error(y(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=gi(a),a=Va(l).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function si(t){return'href="'+Kt(t)+'"'}function bl(t){return'link[rel="stylesheet"]['+t+"]"}function Mp(t){return Q({},t,{"data-precedence":t.precedence,precedence:null})}function X1(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),pt(e,"link",a),st(e),t.head.appendChild(e))}function gi(t){return'[src="'+Kt(t)+'"]'}function ml(t){return"script[async]"+t}function Gc(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Kt(a.href)+'"]');if(i)return e.instance=i,st(i),i;var l=Q({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),st(i),pt(i,"style",l),Pl(i,a.precedence,t),e.instance=i;case"stylesheet":l=si(a.href);var n=t.querySelector(bl(l));if(n)return e.state.loading|=4,e.instance=n,st(n),n;i=Mp(a),(l=Jt.get(l))&&Nr(i,l),n=(t.ownerDocument||t).createElement("link"),st(n);var o=n;return o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(n,"link",i),e.state.loading|=4,Pl(n,a.precedence,t),e.instance=n;case"script":return n=gi(a.src),(l=t.querySelector(ml(n)))?(e.instance=l,st(l),l):(i=a,(l=Jt.get(n))&&(i=Q({},a),Dr(i,l)),t=t.ownerDocument||t,l=t.createElement("script"),st(l),pt(l,"link",i),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(y(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,Pl(i,a.precedence,t));return e.instance}function Pl(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,n=l,o=0;o<i.length;o++){var s=i[o];if(s.dataset.precedence===e)n=s;else if(n!==l)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Nr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Dr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var tn=null;function qc(t,e,a){if(tn===null){var i=new Map,l=tn=new Map;l.set(a,i)}else l=tn,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var n=a[l];if(!(n[cl]||n[ct]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(e)||"";o=t+o;var s=i.get(o);s?s.push(n):i.set(o,[n])}}return i}function Yc(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Q1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Cp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function J1(t,e,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=si(i.href),n=e.querySelector(bl(l));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=En.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=n,st(n);return}n=e.ownerDocument||e,i=Mp(i),(l=Jt.get(l))&&Nr(i,l),n=n.createElement("link"),st(n);var o=n;o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(n,"link",i),a.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=En.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Jo=0;function F1(t,e){return t.stylesheets&&t.count===0&&en(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var i=setTimeout(function(){if(t.stylesheets&&en(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+e);0<t.imgBytes&&Jo===0&&(Jo=62500*E1());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&en(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Jo?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function En(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)en(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _n=null;function en(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_n=new Map,e.forEach(W1,t),_n=null,En.call(t))}function W1(t,e){if(!(e.state.loading&4)){var a=_n.get(t);if(a)var i=a.get(null);else{a=new Map,_n.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<l.length;n++){var o=l[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}l=e.instance,o=l.getAttribute("data-precedence"),n=a.get(o)||i,n===i&&a.set(null,l),a.set(o,l),this.count++,i=En.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),n?n.parentNode.insertBefore(l,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var il={$$typeof:he,Provider:null,Consumer:null,_currentValue:fa,_currentValue2:fa,_threadCount:0};function I1(t,e,a,i,l,n,o,s,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.hiddenUpdates=vo(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Ap(t,e,a,i,l,n,o,s,r,u,b,h){return t=new I1(t,e,a,o,r,u,b,h,s),e=1,n===!0&&(e|=24),n=At(3,null,null,e),t.current=n,n.stateNode=t,e=sr(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:i,isDehydrated:a,cache:e},cr(n),t}function Ep(t){return t?(t=qa,t):qa}function _p(t,e,a,i,l,n){l=Ep(l),i.context===null?i.context=l:i.pendingContext=l,i=Ze(e),i.payload={element:a},n=n===void 0?null:n,n!==null&&(i.callback=n),a=Ve(t,i,e),a!==null&&(kt(a,t,e),Hi(a,t,e))}function Kc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Lr(t,e){Kc(t,e),(t=t.alternate)&&Kc(t,e)}function Op(t){if(t.tag===13||t.tag===31){var e=Sa(t,67108864);e!==null&&kt(e,t,67108864),Lr(t,67108864)}}function Zc(t){if(t.tag===13||t.tag===31){var e=Rt();e=Qs(e);var a=Sa(t,e);a!==null&&kt(a,t,e),Lr(t,e)}}var On=!0;function $1(t,e,a,i){var l=k.T;k.T=null;var n=L.p;try{L.p=2,Hr(t,e,a,i)}finally{L.p=n,k.T=l}}function P1(t,e,a,i){var l=k.T;k.T=null;var n=L.p;try{L.p=8,Hr(t,e,a,i)}finally{L.p=n,k.T=l}}function Hr(t,e,a,i){if(On){var l=Ys(i);if(l===null)Xo(t,e,i,Bn,a),Vc(t,i);else if(eg(l,t,e,a,i))i.stopPropagation();else if(Vc(t,i),e&4&&-1<tg.indexOf(t)){for(;l!==null;){var n=ci(l);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=oa(n.pendingLanes);if(o!==0){var s=n;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var r=1<<31-Bt(o);s.entanglements[1]|=r,o&=~r}le(n),(D&6)===0&&(wn=_t()+500,gl(0,!1))}}break;case 31:case 13:s=Sa(n,2),s!==null&&kt(s,n,2),Vn(),Lr(n,2)}if(n=Ys(i),n===null&&Xo(t,e,i,Bn,a),n===l)break;l=n}l!==null&&i.stopPropagation()}else Xo(t,e,i,null,a)}}function Ys(t){return t=Is(t),Ur(t)}var Bn=null;function Ur(t){if(Bn=null,t=Da(t),t!==null){var e=ol(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Ic(e),t!==null)return t;t=null}else if(a===31){if(t=$c(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Bn=t,null}function Bp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q0()){case au:return 2;case iu:return 8;case sn:case Y0:return 32;case lu:return 268435456;default:return 32}default:return 32}}var Ks=!1,Je=null,Fe=null,We=null,ll=new Map,nl=new Map,Le=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vc(t,e){switch(t){case"focusin":case"focusout":Je=null;break;case"dragenter":case"dragleave":Fe=null;break;case"mouseover":case"mouseout":We=null;break;case"pointerover":case"pointerout":ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(e.pointerId)}}function Mi(t,e,a,i,l,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:n,targetContainers:[l]},e!==null&&(e=ci(e),e!==null&&Op(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function eg(t,e,a,i,l){switch(e){case"focusin":return Je=Mi(Je,t,e,a,i,l),!0;case"dragenter":return Fe=Mi(Fe,t,e,a,i,l),!0;case"mouseover":return We=Mi(We,t,e,a,i,l),!0;case"pointerover":var n=l.pointerId;return ll.set(n,Mi(ll.get(n)||null,t,e,a,i,l)),!0;case"gotpointercapture":return n=l.pointerId,nl.set(n,Mi(nl.get(n)||null,t,e,a,i,l)),!0}return!1}function Rp(t){var e=Da(t.target);if(e!==null){var a=ol(e);if(a!==null){if(e=a.tag,e===13){if(e=Ic(a),e!==null){t.blockedOn=e,Af(t.priority,function(){Zc(a)});return}}else if(e===31){if(e=$c(a),e!==null){t.blockedOn=e,Af(t.priority,function(){Zc(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function an(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Ys(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);ss=i,a.target.dispatchEvent(i),ss=null}else return e=ci(a),e!==null&&Op(e),t.blockedOn=a,!1;e.shift()}return!0}function Xc(t,e,a){an(t)&&a.delete(e)}function ag(){Ks=!1,Je!==null&&an(Je)&&(Je=null),Fe!==null&&an(Fe)&&(Fe=null),We!==null&&an(We)&&(We=null),ll.forEach(Xc),nl.forEach(Xc)}function Gl(t,e){t.blockedOn===e&&(t.blockedOn=null,Ks||(Ks=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,ag)))}var ql=null;function Qc(t){ql!==t&&(ql=t,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,function(){ql===t&&(ql=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],l=t[e+2];if(typeof i!="function"){if(Ur(i||a)===null)continue;break}var n=ci(a);n!==null&&(t.splice(e,3),e-=3,ks(n,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function ri(t){function e(r){return Gl(r,t)}Je!==null&&Gl(Je,t),Fe!==null&&Gl(Fe,t),We!==null&&Gl(We,t),ll.forEach(e),nl.forEach(e);for(var a=0;a<Le.length;a++){var i=Le[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Le.length&&(a=Le[0],a.blockedOn===null);)Rp(a),a.blockedOn===null&&Le.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],n=a[i+1],o=l[Tt]||null;if(typeof n=="function")o||Qc(a);else if(o){var s=null;if(n&&n.hasAttribute("formAction")){if(l=n,o=n[Tt]||null)s=o.formAction;else if(Ur(l)!==null)continue}else s=o.action;typeof s=="function"?a[i+1]=s:(a.splice(i,3),i-=3),Qc(a)}}}function Np(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function jr(t){this._internalRoot=t}Jn.prototype.render=jr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));var a=e.current,i=Rt();_p(a,i,t,e,null,null)};Jn.prototype.unmount=jr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_p(t.current,2,null,t,null,null),Vn(),e[fi]=null}};function Jn(t){this._internalRoot=t}Jn.prototype.unstable_scheduleHydration=function(t){if(t){var e=fu();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Le.length&&e!==0&&e<Le[a].priority;a++);Le.splice(a,0,t),a===0&&Rp(t)}};var Jc=Fc.version;if(Jc!=="19.2.8")throw Error(y(527,Jc,"19.2.8"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=N0(e),t=t!==null?Pc(t):null,t=t===null?null:t.stateNode,t};var ig={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ci.isDisabled&&Ci.supportsFiber))try{sl=Ci.inject(ig),Ot=Ci}catch{}var Ci;Fn.createRoot=function(t,e){if(!Wc(t))throw Error(y(299));var a=!1,i="",l=zd,n=Md,o=Cd;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=Ap(t,1,!1,null,null,a,i,null,l,n,o,Np),t[fi]=e.current,Rr(t),new jr(e)};Fn.hydrateRoot=function(t,e,a){if(!Wc(t))throw Error(y(299));var i=!1,l="",n=zd,o=Md,s=Cd,r=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),e=Ap(t,1,!0,e,a!=null?a:null,i,l,r,n,o,s,Np),e.context=Ep(null),a=e.current,i=Rt(),i=Qs(i),l=Ze(i),l.callback=null,Ve(a,l,i),a=i,e.current.lanes=a,fl(e,a),le(e),t[fi]=e.current,Rr(t),new Jn(e)};Fn.version="19.2.8"});var Up=Ae((Og,Hp)=>{"use strict";function Lp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lp)}catch(t){console.error(t)}}Lp(),Hp.exports=Dp()});var Lt=Qr(xl()),t0=Qr(Up());var jp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 \u043B\u043E\u0431\u0431\u0438 \u0438\u0433\u0440</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0d0f14}
a{color:#ffc83d}a:hover{color:#ffe08a}
@keyframes rkBlink{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes rkSheetUp{0%{transform:translateY(100%)}100%{transform:translateY(0)}}
@keyframes rkFadeIn{0%{opacity:0}100%{opacity:1}}
@keyframes rkToast{0%{transform:translateY(-12px);opacity:0}12%{transform:translateY(0);opacity:1}85%{transform:translateY(0);opacity:1}100%{transform:translateY(0);opacity:0}}
</style>
</helmet>
<div style="width: 390px; min-height: 1180px; box-sizing: border-box; padding: 20px 16px 20px; display: flex; flex-direction: column; gap: 14px; background: #0d0f14; font-family: Rubik, system-ui, sans-serif; color: #ffffff; position: relative">

<header style="display: flex; align-items: center; gap: 12px; height: 56px">
<img src="{{avatarUrl}}" alt="{{tgName}}" referrerpolicy="no-referrer" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; flex-shrink: 0; border: 2px solid #ffc83d; box-sizing: border-box">
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1; min-width: 0">
<div style="font-size: 26px; font-weight: 900; font-style: italic; letter-spacing: 0.5px; line-height: 1">RACK<span style="color: #ffc83d">OON</span></div>
<div style="font-size: 12px; font-weight: 500; color: #a3a8b5">{{tgName}} \xB7 Level 1</div>
</div>
<div style="display: flex; align-items: center; gap: 8px; background: #1b1e27; border-radius: 999px; padding: 4px 4px 4px 14px">
<span style="font-size: 15px; font-weight: 700; white-space: nowrap">{{balanceText}}</span>
<button type="button" onClick="{{topUp}}" aria-label="\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441" style="width: 40px; height: 40px; border-radius: 50%; border: 0; background: #2a7fff; color: #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer">
<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 2 V16 M2 9 H16" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round"></path></svg>
</button>
</div>
</header>
<sc-if value="{{isAdmin}}" hint-placeholder-val="{{ false }}">
<a href="Admin.dc.html" style="text-decoration: none; display: flex; align-items: center; gap: 10px; background: #1b1530; border: 1px solid #4a2f8a; border-radius: 16px; padding: 10px 14px; color: #ffffff">
<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 L20 5 V11 C20 16 16.5 20 12 22 C7.5 20 4 16 4 11 V5Z" fill="none" stroke="#b18cff" stroke-width="2" stroke-linejoin="round"></path><path d="M8.5 12 L11 14.5 L15.5 9.5" fill="none" stroke="#b18cff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
<span style="flex-grow: 1; font-size: 15px; font-weight: 700">\u0410\u0434\u043C\u0438\u043D\u043A\u0430</span>
<span style="font-size: 12px; color: #b18cff">\u0432\u044B\u0434\u0430\u0442\u044C / \u043E\u0442\u043D\u044F\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441</span>
</a>
</sc-if>

<div style="display: flex; flex-direction: column; gap: 8px">
<div style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; color: #a3a8b5">
<span style="width: 8px; height: 8px; border-radius: 50%; background: #2bd46b; animation: rkBlink 1.6s infinite"></span>
{{online}} \u043E\u043D\u043B\u0430\u0439\u043D \xB7 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0432\u044B\u0438\u0433\u0440\u044B\u0448\u0438
</div>
<div style="display: flex; gap: 8px; overflow: hidden">
<sc-for list="{{drops}}" as="d" hint-placeholder-count="6">
<div style="flex-shrink: 0; width: 58px; height: 70px; box-sizing: border-box; border-radius: 14px; background: #151821; border-bottom: 3px solid {{d.color}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px">
<img src="{{d.img}}" alt="{{d.name}}" style="width: 40px; height: 40px">
<span style="font-size: 11px; font-weight: 700; color: #ffc83d">{{d.priceText}}</span>
</div>
</sc-for>
</div>
</div>

<a href="Crash.dc.html" style="text-decoration: none; box-sizing: border-box; position: relative; height: 150px; border: 0; border-radius: 24px; background: #b80f1a; overflow: hidden; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; text-align: left; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff; flex-shrink: 0">
<img src="/_blob/16b8be03ec4054a9ad560c5be1c9ab9e" alt="" style="position: absolute; right: 0; top: 0; width: 240px; height: 150px; object-fit: cover; object-position: 70% 40%; -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 38%); mask-image: linear-gradient(to right, transparent 0%, #000 38%)">
<span style="position: relative; background: #ffffff; color: #b0101c; font-size: 14px; font-weight: 700; padding: 6px 12px; border-radius: 10px">\u0425\u0438\u0442</span>
<span style="position: relative; font-size: 38px; font-weight: 900; font-style: italic; line-height: 1; text-shadow: 0 3px 8px rgba(0,0,0,0.45)">CRASH</span>
</a>

<a href="Cases.dc.html" style="text-decoration: none; box-sizing: border-box; position: relative; height: 150px; border: 0; border-radius: 24px; background: #0a4cc0; overflow: hidden; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; text-align: left; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff; flex-shrink: 0">
<img src="/_blob/88b023f22e2d3006641849bb168e073d" alt="" style="position: absolute; right: 0; top: 0; width: 240px; height: 150px; object-fit: cover; object-position: 60% 45%; -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 38%); mask-image: linear-gradient(to right, transparent 0%, #000 38%)">
<span style="position: relative; background: #ffffff; color: #1a4fb8; font-size: 14px; font-weight: 700; padding: 6px 12px; border-radius: 10px">\u041A\u043B\u0430\u0441\u0441\u0438\u043A\u0430</span>
<span style="position: relative; font-size: 38px; font-weight: 900; font-style: italic; line-height: 1; text-shadow: 0 3px 8px rgba(0,0,0,0.45)">CASES</span>
</a>

<a href="Upgrade.dc.html" style="text-decoration: none; box-sizing: border-box; position: relative; height: 150px; border: 0; border-radius: 24px; background: #11701a; overflow: hidden; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; text-align: left; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff; flex-shrink: 0">
<img src="/_blob/63c10368990e8788e655de65d5a9b515" alt="" style="position: absolute; right: 0; top: 0; width: 240px; height: 150px; object-fit: cover; object-position: 50% 40%; -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 38%); mask-image: linear-gradient(to right, transparent 0%, #000 38%)">
<span style="position: relative; background: #ffffff; color: #15753a; font-size: 14px; font-weight: 700; padding: 6px 12px; border-radius: 10px">\u0428\u0430\u043D\u0441</span>
<span style="position: relative; font-size: 38px; font-weight: 900; font-style: italic; line-height: 1; text-shadow: 0 3px 8px rgba(0,0,0,0.45)">UPGRADE</span>
</a>

<a href="Mines.dc.html" style="text-decoration: none; box-sizing: border-box; position: relative; height: 150px; border: 0; border-radius: 24px; background: #0b2672; overflow: hidden; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; text-align: left; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff; flex-shrink: 0">
<img src="/_blob/b81dc491ff982e1892b4eeeb94570e3c" alt="" style="position: absolute; right: 0; top: 0; width: 240px; height: 150px; object-fit: cover; object-position: 50% 40%; -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 38%); mask-image: linear-gradient(to right, transparent 0%, #000 38%)">
<span style="position: relative; background: #ffffff; color: #17246b; font-size: 14px; font-weight: 700; padding: 6px 12px; border-radius: 10px">\u0420\u0438\u0441\u043A</span>
<span style="position: relative; font-size: 38px; font-weight: 900; font-style: italic; line-height: 1; text-shadow: 0 3px 8px rgba(0,0,0,0.45)">MINES</span>
</a>

<a href="Pvp.dc.html" style="text-decoration: none; box-sizing: border-box; position: relative; height: 150px; border: 0; border-radius: 24px; background: #d99a00; overflow: hidden; padding: 20px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; text-align: left; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff; flex-shrink: 0">
<div aria-hidden="true" style="position: absolute; right: 14px; top: 22px; display: flex; align-items: center; gap: 6px">
<img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 84px; height: 84px; border-radius: 50%; object-fit: cover; border: 4px solid #ffffff; box-sizing: border-box; transform: rotate(-8deg)">
<span style="font-size: 30px; font-weight: 900; font-style: italic; color: #1a1300">VS</span>
<img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 84px; height: 84px; border-radius: 50%; object-fit: cover; border: 4px solid #1a1300; box-sizing: border-box; transform: scaleX(-1) rotate(-8deg); filter: hue-rotate(160deg) saturate(1.3)">
</div>
<span style="position: relative; background: #ffffff; color: #8a5a00; font-size: 14px; font-weight: 700; padding: 6px 12px; border-radius: 10px">\u0411\u0438\u0442\u0432\u0430</span>
<span style="position: relative; font-size: 38px; font-weight: 900; font-style: italic; line-height: 1; text-shadow: 0 3px 8px rgba(0,0,0,0.35)">PVP</span>
</a>

<nav aria-label="\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E" style="margin-top: auto; position: sticky; bottom: 12px; z-index: 5; box-shadow: 0 10px 30px rgba(0,0,0,0.6); display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 4px; background: #151821; border: 1px solid #222838; border-radius: 24px; padding: 6px">
<a href="Inventory.dc.html" style="text-decoration: none; height: 56px; border-radius: 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #8a90a0; font-size: 11px; font-weight: 700">
<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M11 2 L20 6.5 V15.5 L11 20 L2 15.5 V6.5Z M2 6.5 L11 11 L20 6.5 M11 11 V20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path></svg>
\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C
</a>
<a href="#" aria-current="page" style="text-decoration: none; height: 56px; border-radius: 18px; background: #232838; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #ffc83d; font-size: 11px; font-weight: 700">
<svg width="24" height="22" viewBox="0 0 24 22" aria-hidden="true"><path d="M6 5 H18 C21 5 23 8 23 12 C23 16 21 18 19 18 C17 18 16 15 14 15 H10 C8 15 7 18 5 18 C3 18 1 16 1 12 C1 8 3 5 6 5Z" fill="currentColor"></path><path d="M7 9 V13 M5 11 H9" stroke="#151821" stroke-width="2" stroke-linecap="round"></path><circle cx="16" cy="10" r="1.4" fill="#151821"></circle><circle cx="18" cy="13" r="1.4" fill="#151821"></circle></svg>
\u0418\u0433\u0440\u044B
</a>
<a href="Tasks.dc.html" style="text-decoration: none; height: 56px; border-radius: 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #8a90a0; font-size: 11px; font-weight: 700">
<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><rect x="3" y="3" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M7 8 L9 10 L12 7 M7 14 H15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
\u0417\u0430\u0434\u0430\u043D\u0438\u044F
</a>
<a href="Leaders.dc.html" style="text-decoration: none; height: 56px; border-radius: 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #8a90a0; font-size: 11px; font-weight: 700">
<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M6 3 H16 V8 C16 11 14 13 11 13 C8 13 6 11 6 8Z M6 5 H3 C3 8 4 9 6 9 M16 5 H19 C19 8 18 9 16 9 M11 13 V17 M7 19 H15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
\u041B\u0438\u0434\u0435\u0440\u044B
</a>
</nav>

<sc-if value="{{depOpen}}" hint-placeholder-val="{{ false }}">
<div style="position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 60; background: rgba(5,6,10,0.65); animation: rkFadeIn 0.2s ease-out; display: flex; flex-direction: column; justify-content: flex-end">
<button type="button" onClick="{{depClose}}" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" style="flex-grow: 1; border: 0; background: transparent; cursor: pointer"></button>
<div role="dialog" aria-label="\u0414\u0435\u043F\u043E\u0437\u0438\u0442" style="width: 100%; max-width: 390px; margin: 0 auto; box-sizing: border-box; background: #151821; border-top: 1px solid #262b3a; border-radius: 28px 28px 0 0; padding: 18px 16px 26px; display: flex; flex-direction: column; gap: 14px; animation: rkSheetUp 0.32s cubic-bezier(0.2, 0.9, 0.3, 1); font-family: Rubik, system-ui, sans-serif; color: #ffffff">

<div style="position: relative; display: flex; align-items: center; justify-content: center; height: 44px">
<div style="font-size: 26px; font-weight: 900; font-style: italic; letter-spacing: 0.5px">{{depTitle}}</div>
<button type="button" onClick="{{depClose}}" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" style="position: absolute; right: 0; top: 0; width: 44px; height: 44px; border-radius: 14px; border: 0; background: #1f2330; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0">
<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3 L13 13 M13 3 L3 13" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path></svg>
</button>
</div>
<div role="tablist" aria-label="\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0438\u043B\u0438 \u0432\u044B\u0432\u0435\u0441\u0442\u0438" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; background: #0d0f14; border: 1px solid #262b3a; border-radius: 16px; padding: 4px">
<button type="button" role="tab" aria-selected="{{modeDepSel}}" onClick="{{modeDep}}" style="height: 40px; border-radius: 12px; border: 0; background: {{modeDepBg}}; color: {{modeDepColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer">\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C</button>
<button type="button" role="tab" aria-selected="{{modeWdSel}}" onClick="{{modeWd}}" style="height: 40px; border-radius: 12px; border: 0; background: {{modeWdBg}}; color: {{modeWdColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer">\u0412\u044B\u0432\u0435\u0441\u0442\u0438 NFT</button>
</div>
<div style="align-self: center; font-size: 11px; font-weight: 700; color: {{badgeColor}}; background: {{badgeBg}}; border: 1px solid {{badgeBorder}}; border-radius: 999px; padding: 5px 10px">{{badgeText}}</div>
<sc-if value="{{isDepMode}}" hint-placeholder-val="{{ true }}">

<div role="tablist" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px">
<sc-for list="{{depTabs}}" as="dt" hint-placeholder-count="3">
<button type="button" role="tab" aria-selected="{{dt.sel}}" onClick="{{dt.pick}}" style="height: 74px; border-radius: 18px; border: 1.5px solid {{dt.border}}; background: {{dt.bg}}; color: {{dt.color}}; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; padding: 0">
<sc-if value="{{dt.isTon}}" hint-placeholder-val="{{ true }}"><svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><path d="M4 8 H22 L13 23Z" fill="{{dt.icon}}"></path><path d="M4 8 L13 23 L22 8 M13 8 V23" fill="none" stroke="#151821" stroke-width="1.6" stroke-linejoin="round"></path><path d="M7 3 H19 L22 8 H4Z" fill="{{dt.icon}}" fill-opacity="0.7"></path></svg></sc-if>
<sc-if value="{{dt.isCrypto}}" hint-placeholder-val="{{ false }}"><svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="11" fill="{{dt.icon}}"></circle><text x="13" y="18" text-anchor="middle" font-family="Rubik, system-ui, sans-serif" font-size="14" font-weight="900" fill="#151821">\u20BF</text></svg></sc-if>
<sc-if value="{{dt.isGift}}" hint-placeholder-val="{{ false }}"><svg width="26" height="26" viewBox="0 0 18 18" aria-hidden="true"><rect x="2" y="7" width="14" height="10" rx="2" fill="none" stroke="{{dt.icon}}" stroke-width="1.8"></rect><rect x="1" y="4" width="16" height="4" rx="1.5" fill="{{dt.icon}}"></rect><path d="M9 4 V17" stroke="{{dt.icon}}" stroke-width="1.8"></path></svg></sc-if>
{{dt.label}}
</button>
</sc-for>
</div>

<sc-if value="{{depIsTon}}" hint-placeholder-val="{{ true }}">
<label style="height: 72px; border-radius: 20px; background: #0d0f14; border: 1px solid #262b3a; display: flex; align-items: center; gap: 12px; padding: 0 18px; cursor: text">
<svg width="32" height="32" viewBox="0 0 26 26" aria-hidden="true" style="flex-shrink: 0"><path d="M4 8 H22 L13 23Z" fill="#5fb8ff"></path><path d="M4 8 L13 23 L22 8 M13 8 V23" fill="none" stroke="#0d0f14" stroke-width="1.6" stroke-linejoin="round"></path><path d="M7 3 H19 L22 8 H4Z" fill="#9ad3ff"></path></svg>
<input type="text" inputmode="decimal" enterkeyhint="done" autocomplete="off" aria-label="\u0421\u0443\u043C\u043C\u0430 \u0432 TON" placeholder="0.1" value="{{depAmount}}" onInput="{{depOnAmount}}" style="flex-grow: 1; min-width: 0; height: 100%; border: 0; outline: none; background: transparent; font-family: Rubik, system-ui, sans-serif; font-size: 30px; font-weight: 900; color: #ffffff">
<span style="font-size: 14px; font-weight: 700; color: #8a90a0; background: #1f2330; border-radius: 10px; padding: 6px 10px">TON</span>
</label>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px">
<sc-for list="{{depChips}}" as="ch" hint-placeholder-count="4">
<button type="button" onClick="{{ch.pick}}" style="height: 40px; border-radius: 12px; border: 1px solid #262b3a; background: #1b1e27; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer">{{ch.label}}</button>
</sc-for>
</div>
<div style="text-align: center; font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u041C\u0418\u041D. \u0421\u0423\u041C\u041C\u0410: 0.1 TON</div>
</sc-if>

<sc-if value="{{depIsCrypto}}" hint-placeholder-val="{{ false }}">
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
<div style="display: flex; flex-direction: column; gap: 6px">
<span style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u0412\u0410\u041B\u042E\u0422\u0410</span>
<button type="button" onClick="{{depNextCur}}" style="height: 60px; border-radius: 16px; border: 1px solid #262b3a; background: #0d0f14; color: #ffffff; cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 0 12px; font-family: Rubik, system-ui, sans-serif; text-align: left">
<span style="width: 32px; height: 32px; border-radius: 50%; background: {{curColor}}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900; flex-shrink: 0">{{curSym}}</span>
<span style="display: flex; flex-direction: column; gap: 1px; flex-grow: 1; min-width: 0"><span style="font-size: 15px; font-weight: 900">{{curCode}}</span><span style="font-size: 11px; color: #8a90a0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{curName}}</span></span>
<svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1 L6 6 L11 1" fill="none" stroke="#8a90a0" stroke-width="2" stroke-linecap="round"></path></svg>
</button>
</div>
<div style="display: flex; flex-direction: column; gap: 6px">
<span style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u0421\u0415\u0422\u042C</span>
<button type="button" onClick="{{depNextNet}}" style="height: 60px; border-radius: 16px; border: 1px solid #262b3a; background: #0d0f14; color: #ffffff; cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 0 12px; font-family: Rubik, system-ui, sans-serif; text-align: left">
<span style="width: 32px; height: 32px; border-radius: 10px; background: {{netColor}}; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 900; flex-shrink: 0">{{netShort}}</span>
<span style="display: flex; flex-direction: column; gap: 1px; flex-grow: 1; min-width: 0"><span style="font-size: 15px; font-weight: 900; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{netName}}</span><span style="font-size: 11px; color: #8a90a0">{{netStd}}</span></span>
<svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1 L6 6 L11 1" fill="none" stroke="#8a90a0" stroke-width="2" stroke-linecap="round"></path></svg>
</button>
</div>
</div>
<label style="height: 72px; border-radius: 20px; background: #0d0f14; border: 1px solid #262b3a; display: flex; align-items: center; gap: 12px; padding: 0 18px; cursor: text">
<span style="width: 34px; height: 34px; border-radius: 50%; background: {{curColor}}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 17px; font-weight: 900; flex-shrink: 0">{{curSym}}</span>
<input type="text" inputmode="decimal" enterkeyhint="done" autocomplete="off" aria-label="\u0421\u0443\u043C\u043C\u0430" placeholder="5" value="{{depCryptoAmount}}" onInput="{{depOnCryptoAmount}}" style="flex-grow: 1; min-width: 0; height: 100%; border: 0; outline: none; background: transparent; font-family: Rubik, system-ui, sans-serif; font-size: 30px; font-weight: 900; color: #ffffff">
<span style="font-size: 14px; font-weight: 700; color: #8a90a0; background: #1f2330; border-radius: 10px; padding: 6px 10px">{{curCode}}</span>
</label>
<div style="text-align: center; font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u041B\u0418\u041C\u0418\u0422: 5 \u2013 1500 TON \u0412 \u042D\u041A\u0412\u0418\u0412\u0410\u041B\u0415\u041D\u0422\u0415</div>
</sc-if>

<sc-if value="{{depIsGift}}" hint-placeholder-val="{{ false }}">
<div style="border-radius: 20px; background: #0d0f14; border: 1px solid #262b3a; padding: 16px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; justify-content: center; gap: 10px">
<sc-for list="{{depGiftImgs}}" as="gi" hint-placeholder-count="4">
<div style="width: 58px; height: 58px; border-radius: 16px; background: #1b1e27; border-bottom: 3px solid {{gi.color}}; display: flex; align-items: center; justify-content: center"><img src="{{gi.img}}" alt="" style="width: 44px; height: 44px"></div>
</sc-for>
</div>
<div style="display: flex; flex-direction: column; gap: 10px">
<sc-for list="{{depGiftSteps}}" as="gs" hint-placeholder-count="3">
<div style="display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 500; color: #c9cdd6">
<span style="width: 26px; height: 26px; border-radius: 50%; background: #ffc83d; color: #1a1300; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; flex-shrink: 0">{{gs.n}}</span>{{gs.text}}
</div>
</sc-for>
</div>
</div>
<div style="text-align: center; font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u041F\u041E\u0414\u0410\u0420\u041E\u041A \u0417\u0410\u0427\u0418\u0421\u041B\u042F\u0415\u0422\u0421\u042F \u041F\u041E \u0424\u041B\u041E\u0420-\u0426\u0415\u041D\u0415</div>
</sc-if>
</sc-if>

<sc-if value="{{isWdMode}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; justify-content: space-between; align-items: baseline">
<span style="font-size: 15px; font-weight: 700">\u0412\u044B\u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0438</span>
<span style="font-size: 12px; color: #8a90a0">{{wdInfo}}</span>
</div>
<sc-if value="{{wdHasItems}}" hint-placeholder-val="{{ true }}">
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; max-height: 236px; overflow-y: auto; -webkit-overflow-scrolling: touch">
<sc-for list="{{wdItems}}" as="wi" hint-placeholder-count="8">
<button type="button" onClick="{{wi.toggle}}" aria-pressed="{{wi.pressed}}" aria-label="{{wi.name}}" style="position: relative; min-width: 0; height: 110px; border-radius: 14px; border: 2px solid {{wi.border}}; background: {{wi.bg}}; cursor: pointer; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 4px; font-family: Rubik, system-ui, sans-serif; color: #ffffff">
<img src="{{wi.img}}" alt="" style="width: 48px; height: 48px">
<span style="max-width: 100%; font-size: 10px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{wi.name}}</span>
<sc-if value="{{wi.sel}}" hint-placeholder-val="{{ false }}"><span style="position: absolute; right: 5px; top: 5px; width: 20px; height: 20px; border-radius: 50%; background: #ffc83d; color: #1a1300; font-size: 12px; font-weight: 900; display: flex; align-items: center; justify-content: center">\u2713</span></sc-if>
</button>
</sc-for>
</div>
</sc-if>
<sc-if value="{{wdEmpty}}" hint-placeholder-val="{{ false }}">
<div style="border-radius: 18px; border: 1px dashed #2c3244; padding: 26px 12px; text-align: center; font-size: 13px; color: #8a90a0">\u0412 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u2014 \u0432\u044B\u0431\u0435\u0439 \u0438\u0445 \u0432 \u043A\u0435\u0439\u0441\u0430\u0445</div>
</sc-if>
<div style="display: flex; align-items: center; gap: 10px; border-radius: 16px; background: #0d0f14; border: 1px solid #262b3a; padding: 12px 14px">
<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 4 L3 11 L9 13 L11 19 L14 15 L19 19Z" fill="none" stroke="#5fb8ff" stroke-width="2" stroke-linejoin="round"></path></svg>
<span style="display: flex; flex-direction: column; gap: 2px; min-width: 0"><span style="font-size: 12px; color: #8a90a0">\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C</span><span style="font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{wdTo}}</span></span>
</div>
<div style="text-align: center; font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u041A\u041E\u041C\u0418\u0421\u0421\u0418\u042F \u0417\u0410 \u0412\u042B\u0412\u041E\u0414 0.1 TON</div>
</sc-if>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">
<button type="button" onClick="{{depClose}}" style="height: 56px; border-radius: 18px; border: 0; background: #1f2330; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 700; cursor: pointer">\u041E\u0442\u043C\u0435\u043D\u0430</button>
<button type="button" onClick="{{depSubmit}}" disabled="{{depBtnDisabled}}" style="height: 56px; border-radius: 18px; border: 0; background: {{depBtnBg}}; color: #1a1300; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 900; cursor: pointer; box-shadow: 0 6px 22px rgba(255,200,61,0.3)">{{depBtnText}}</button>
</div>
</div>
<sc-if value="{{depToast}}" hint-placeholder-val="{{ false }}">
<div style="position: fixed; left: 0; right: 0; top: 24px; z-index: 70; display: flex; justify-content: center; pointer-events: none">
<div role="status" style="width: 320px; box-sizing: border-box; background: #1f2330; border: 1px solid {{toastBorder}}; border-radius: 16px; padding: 12px 14px; display: flex; align-items: center; gap: 10px; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 500; color: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: rkToast 2.6s ease-out forwards">
<span style="font-size: 18px">{{toastIcon}}</span><span>{{toastText}}</span>
</div>
</div>
</sc-if>
</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1180}}'>
var DROPS = [
  { name: 'Homemade Cake', price: 5.04, img: '/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d' },
  { name: 'Snow Globe', price: 5.92, img: '/_blob/6e3628fac94b5266f3b64cea9c5fe7ee' },
  { name: 'Eternal Rose', price: 25.6, img: '/_blob/734e25b54462cda990767f69381d8355' },
  { name: 'Signet Ring', price: 32.1, img: '/_blob/4826a2db621709393534f8feae3d3f4a' },
  { name: 'Swiss Watch', price: 56, img: '/_blob/5efc0b426406d53e3b649c727079f26d' },
  { name: 'Toy Bear', price: 35, img: '/_blob/c02bc9477e447f6f71962df1fc7a399a' },
  { name: 'Top Hat', price: 9.82, img: '/_blob/fe01a5a2d2ff76e0192e008ed6267558' },
  { name: 'Desk Calendar', price: 5.99, img: '/_blob/9b7049b84c84b25ce8e457f56c837c42' },
  { name: 'Ion Gem', price: 66.1, img: '/_blob/e562d84d61312007f5108ab64cbfe6f9' },
  { name: 'Love Potion', price: 14.1, img: '/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65' },
  { name: 'Diamond Ring', price: 31.7, img: '/_blob/ef580f1649ad89b5e268954da6ea30b2' },
  { name: 'Precious Peach', price: 244.2, img: '/_blob/923c4583ef32f1e6549c08d5a1839d4c' }
];
if (window.rkThumb) DROPS.forEach(function (d) { d.img = window.rkThumb(d.name, d.img); });
function colorOf(p) {
  if (p < 5) return '#9aa3b5';
  if (p < 15) return '#5fd4ff';
  if (p < 60) return '#c77dff';
  if (p < 500) return '#ff5d73';
  return '#ffc83d';
}
function pickDrop() {
  // \u0434\u0435\u0448\u0451\u0432\u044B\u0435 \u0432\u044B\u043F\u0430\u0434\u0430\u044E\u0442 \u0447\u0430\u0449\u0435
  var w = DROPS.map(function (d) { return 1 / Math.sqrt(d.price); });
  var S = w.reduce(function (a, b) { return a + b; }, 0), x = Math.random() * S;
  for (var i = 0; i < DROPS.length; i++) { x -= w[i]; if (x <= 0) return DROPS[i]; }
  return DROPS[0];
}
// \u041E\u043A\u043D\u043E \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 (\u0434\u0435\u043C\u043E: \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434, \u0434\u0435\u043D\u044C\u0433\u0438 \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F)
var CURS = [
  { code: 'USDT', name: 'Tether', sym: '\u20AE', color: '#26a17b', nets: [{ name: 'TRON', std: 'TRC20', short: 'TRX', color: '#e5383b' }, { name: 'TON', std: 'Jetton', short: 'TON', color: '#2a7fff' }, { name: 'BNB Chain', std: 'BEP20', short: 'BSC', color: '#e0a800' }] },
  { code: 'TON', name: 'Toncoin', sym: '\u25C6', color: '#2a7fff', nets: [{ name: 'TON', std: 'Native', short: 'TON', color: '#2a7fff' }] },
  { code: 'BTC', name: 'Bitcoin', sym: '\u20BF', color: '#f7931a', nets: [{ name: 'Bitcoin', std: 'BTC', short: 'BTC', color: '#f7931a' }] },
  { code: 'ETH', name: 'Ethereum', sym: '\u039E', color: '#6f7cf0', nets: [{ name: 'Ethereum', std: 'ERC20', short: 'ETH', color: '#6f7cf0' }, { name: 'Arbitrum', std: 'L2', short: 'ARB', color: '#2d74da' }] }
];
// \u0422\u0415\u0421\u0422\u041E\u0412\u042B\u0419 \u0420\u0415\u0416\u0418\u041C: \u0441\u0443\u043C\u043C\u0430 \u0441 \u0432\u043A\u043B\u0430\u0434\u043A\u0438 TON \u0441\u0440\u0430\u0437\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441 (\u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0431\u043E\u0442\u0430).
// \u041A\u043E\u0433\u0434\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0448\u044C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0438 \u2014 \u043F\u043E\u0441\u0442\u0430\u0432\u044C false.
var TEST_TOPUP = true;
var NFT_FALLBACK = '/_blob/a64ccb23ba5a5ab0f1f789ab412cf3af';
var DEP_TABS = [{ id: 'ton', label: 'TON' }, { id: 'crypto', label: 'Crypto' }, { id: 'gift', label: '\u041F\u043E\u0434\u0430\u0440\u043A\u0438' }];
function cleanNum(v) {
  v = String(v || '').replace(',', '.').replace(/[^0-9.]/g, '');
  var parts = v.split('.'); if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
  return v.slice(0, 10);
}
class Component extends DCLogic {
  constructor(props) {
    super(props);
    var list = [];
    for (var i = 0; i < 8; i++) list.push(pickDrop());
    this.state = { drops: list, online: 934, dep: false, depTab: 'ton', depAmount: '', depCur: 0, depNet: 0, depCryptoAmount: '', depToast: 0, depMode: 'dep', wdSel: {}, toast: null };
  }
  componentDidMount() {
    var self = this;
    this.iv = setInterval(function () {
      var s = self.state;
      self.setState({ drops: [pickDrop()].concat(s.drops).slice(0, 8), online: Math.max(800, s.online + Math.round((Math.random() - 0.5) * 8)) });
    }, 2200);
  }
  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.tt); }
  showToast(t) {
    var self = this;
    clearTimeout(this.tt);
    this.setState({ depToast: 0 }, function () { self.setState({ depToast: Date.now(), toast: t }); });
    try { var tg = window.Telegram && window.Telegram.WebApp; if (tg && tg.HapticFeedback) tg.HapticFeedback.notificationOccurred(t.ok ? 'success' : 'warning'); } catch (e) {}
    this.tt = setTimeout(function () { self.setState({ depToast: 0 }); }, 2600);
  }
  depSubmit() {
    var s = this.state;
    if (s.depMode === 'wd') {
      var n = Object.keys(s.wdSel).length;
      if (!n) return;
      this.showToast({ icon: '\u{1F6A7}', text: '\u0414\u0435\u043C\u043E: \u0432\u044B\u0432\u043E\u0434 NFT \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D (' + n + ' \u0448\u0442. \u0432\u044B\u0431\u0440\u0430\u043D\u043E)' });
      return;
    }
    if (s.depTab === 'ton' && TEST_TOPUP) {
      var v = Math.round(parseFloat(s.depAmount) * 100) / 100;
      if (!(v >= 0.1)) { this.showToast({ icon: '\u26A0\uFE0F', text: '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u2014 0.1 TON' }); return; }
      if (v > 100000) v = 100000;
      if (window.RK) window.RK.wallet.set(window.RK.wallet.get() + v);
      this.setState({ depAmount: '' });
      this.showToast({ icon: '\u2705', text: '\u0422\u0435\u0441\u0442: \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E ' + v + ' TON \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441', ok: true });
      return;
    }
    this.showToast({ icon: '\u{1F6A7}', text: '\u042D\u0442\u043E \u0434\u0435\u043C\u043E-\u0432\u0435\u0440\u0441\u0438\u044F: \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E' });
  }
  renderVals() {
    var self = this, s = this.state;
    var cur = CURS[s.depCur], net = cur.nets[s.depNet] || cur.nets[0];
    var inv = s.dep && window.RK && window.RK.inventory ? window.RK.inventory.list() : [];
    var wdCount = 0; inv.forEach(function (it) { if (s.wdSel[it.uid]) wdCount++; });
    var tgUser = window.RK && window.RK.user;
    var testOn = TEST_TOPUP && s.depMode === 'dep' && s.depTab === 'ton';
    return {
      topUp: function () { self.setState({ dep: true }); },
      isAdmin: !!(window.RK && window.RK.net && window.RK.net.me && window.RK.net.me.admin),
      depOpen: s.dep, depClose: function () { self.setState({ dep: false, depToast: 0 }); },
      depTabs: DEP_TABS.map(function (t) {
        var sel = s.depTab === t.id;
        return { label: t.label, sel: sel ? 'true' : 'false', isTon: t.id === 'ton', isCrypto: t.id === 'crypto', isGift: t.id === 'gift',
          border: sel ? '#ffc83d' : '#262b3a', bg: sel ? '#2a2410' : '#1b1e27', color: sel ? '#ffffff' : '#a3a8b5', icon: sel ? '#ffc83d' : '#8a90a0',
          pick: function () { self.setState({ depTab: t.id }); } };
      }),
      depIsTon: s.depTab === 'ton', depIsCrypto: s.depTab === 'crypto', depIsGift: s.depTab === 'gift',
      depAmount: s.depAmount, depOnAmount: function (e) { self.setState({ depAmount: cleanNum(e && e.target && e.target.value) }); },
      depChips: [1, 5, 10, 50].map(function (v) { return { label: v + ' TON', pick: function () { self.setState({ depAmount: String(v) }); } }; }),
      curCode: cur.code, curName: cur.name, curSym: cur.sym, curColor: cur.color,
      netName: net.name, netStd: net.std, netShort: net.short, netColor: net.color,
      depNextCur: function () { self.setState({ depCur: (self.state.depCur + 1) % CURS.length, depNet: 0 }); },
      depNextNet: function () { self.setState({ depNet: (self.state.depNet + 1) % cur.nets.length }); },
      depCryptoAmount: s.depCryptoAmount, depOnCryptoAmount: function (e) { self.setState({ depCryptoAmount: cleanNum(e && e.target && e.target.value) }); },
      depGiftImgs: DROPS.slice(0, 4).map(function (d) { return { img: d.img, color: colorOf(d.price) }; }),
      depGiftSteps: [
        { n: 1, text: '\u041E\u0442\u043A\u0440\u043E\u0439 \u0431\u043E\u0442\u0430 @RackoonDropBot \u0432 Telegram' },
        { n: 2, text: '\u041E\u0442\u043F\u0440\u0430\u0432\u044C \u0435\u043C\u0443 \u043B\u044E\u0431\u043E\u0439 NFT-\u043F\u043E\u0434\u0430\u0440\u043E\u043A' },
        { n: 3, text: '\u041F\u043E\u0434\u0430\u0440\u043E\u043A \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0442\u0432\u043E\u0451\u043C \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435' }
      ],
      depTitle: s.depMode === 'wd' ? '\u0412\u042B\u0412\u041E\u0414' : '\u0414\u0415\u041F\u041E\u0417\u0418\u0422',
      isDepMode: s.depMode === 'dep', isWdMode: s.depMode === 'wd',
      modeDep: function () { self.setState({ depMode: 'dep' }); }, modeWd: function () { self.setState({ depMode: 'wd' }); },
      modeDepSel: s.depMode === 'dep' ? 'true' : 'false', modeWdSel: s.depMode === 'wd' ? 'true' : 'false',
      modeDepBg: s.depMode === 'dep' ? '#ffc83d' : 'transparent', modeDepColor: s.depMode === 'dep' ? '#1a1300' : '#a3a8b5',
      modeWdBg: s.depMode === 'wd' ? '#ffc83d' : 'transparent', modeWdColor: s.depMode === 'wd' ? '#1a1300' : '#a3a8b5',
      badgeText: testOn ? '\u0422\u0415\u0421\u0422 \xB7 \u0441\u0443\u043C\u043C\u0430 \u0441\u0440\u0430\u0437\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441' : '\u0414\u0415\u041C\u041E \xB7 ' + (s.depMode === 'wd' ? '\u0432\u044B\u0432\u043E\u0434' : '\u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435') + ' \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E',
      badgeColor: testOn ? '#2bd46b' : '#ffc83d', badgeBg: testOn ? 'rgba(43,212,107,0.12)' : 'rgba(255,200,61,0.12)', badgeBorder: testOn ? 'rgba(43,212,107,0.4)' : 'rgba(255,200,61,0.35)',
      wdItems: inv.map(function (it) {
        var sel = !!s.wdSel[it.uid];
        return { name: it.key, img: window.rkThumb ? window.rkThumb(it.key, NFT_FALLBACK) : NFT_FALLBACK, sel: sel, pressed: sel ? 'true' : 'false',
          border: sel ? '#ffc83d' : '#262b3a', bg: sel ? '#2a2410' : '#0d0f14',
          toggle: function () { var m = Object.assign({}, self.state.wdSel); if (m[it.uid]) delete m[it.uid]; else m[it.uid] = 1; self.setState({ wdSel: m }); } };
      }),
      wdHasItems: inv.length > 0, wdEmpty: inv.length === 0,
      wdInfo: wdCount ? '\u0432\u044B\u0431\u0440\u0430\u043D\u043E ' + wdCount + ' \u0438\u0437 ' + inv.length : inv.length + ' \u0448\u0442. \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435',
      wdTo: tgUser && tgUser.username ? '@' + tgUser.username : ((tgUser && tgUser.first_name) || '\u0442\u0432\u043E\u0439 Telegram-\u0430\u043A\u043A\u0430\u0443\u043D\u0442'),
      depBtnText: s.depMode === 'wd' ? (wdCount ? '\u0412\u044B\u0432\u0435\u0441\u0442\u0438 ' + wdCount + ' NFT' : '\u0412\u044B\u0431\u0435\u0440\u0438 NFT') : (s.depTab === 'gift' ? '\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0431\u043E\u0442\u0430' : '\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C'),
      depBtnDisabled: s.depMode === 'wd' && !wdCount,
      depBtnBg: s.depMode === 'wd' && !wdCount ? '#3a3420' : '#ffc83d',
      toastIcon: s.toast ? s.toast.icon : '', toastText: s.toast ? s.toast.text : '', toastBorder: s.toast && s.toast.ok ? '#2bd46b' : '#ffc83d',
      depSubmit: function () { self.depSubmit(); },
      depToast: !!s.depToast,
      online: (window.RK && window.RK.net && window.RK.net.connected && window.RK.net.online) || this.state.online,
      balanceText: (window.RK ? window.RK.wallet.get() : 0).toFixed(2) + ' TON',
      tgName: (window.RK && window.RK.user && window.RK.user.first_name) || '\u0413\u043E\u0441\u0442\u044C',
      avatarUrl: (window.RK && window.RK.user && window.RK.user.photo_url) || '/_blob/661884b648dd965ea69af44ea8c7ee95',
      drops: this.state.drops.map(function (d) { return { name: d.name, img: d.img, color: colorOf(d.price), priceText: d.price + ' TON' }; })
    };
  }
}
<\/script>
</body>
</html>
`;var Gp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 \u041A\u0440\u0430\u0448</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0b0d12}
a{color:#ffc83d}a:hover{color:#ffe08a}
@keyframes rkBoom{0%{transform:scale(.2);opacity:1}70%{transform:scale(1.2);opacity:1}100%{transform:scale(1.4);opacity:0}}
@keyframes rkFlame{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.35)}}
@keyframes rkPop{0%{transform:scale(.7);opacity:0}100%{transform:scale(1);opacity:1}}
@keyframes rkFlash{0%{transform:scale(.2);opacity:1}60%{transform:scale(1.3);opacity:.9}100%{transform:scale(1.6);opacity:0}}
@keyframes rkRing{0%{transform:scale(.2);opacity:1}100%{transform:scale(2.2);opacity:0}}
@keyframes rkRays{0%{transform:scale(.3) rotate(0deg);opacity:1}100%{transform:scale(1.5) rotate(25deg);opacity:0}}
@keyframes rkBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
@keyframes rkWarp{0%{transform:translateY(-260px)}100%{transform:translateY(760px)}}
@keyframes rkGrid{0%{background-position:0 0}100%{background-position:0 44px}}
@keyframes rkChart{0%{transform:translateX(0)}100%{transform:translateX(-358px)}}
@keyframes rkTwinkle{0%,100%{opacity:.25}50%{opacity:1}}
@keyframes rkMoon{0%,100%{transform:translateY(0) rotate(-8deg)}50%{transform:translateY(-6px) rotate(-4deg)}}
@keyframes rkTrend{0%{transform:translate(90px,-90px) scale(.7);opacity:0}15%{opacity:1}80%{opacity:1}100%{transform:translate(-300px,300px) scale(1.05);opacity:0}}
@keyframes rkFlick{0%,100%{transform:scale(1,1)}25%{transform:scale(.85,1.25)}50%{transform:scale(1.1,.9)}75%{transform:scale(.9,1.35)}}
@keyframes rkShake{0%,100%{transform:translate(0,0)}25%{transform:translate(-1.5px,1px)}50%{transform:translate(1px,-1px)}75%{transform:translate(1.5px,1.5px)}}
@keyframes rkS0{0%{transform:translate(0,0);opacity:1}100%{transform:translate(0px,-80px);opacity:0}}
@keyframes rkS1{0%{transform:translate(0,0);opacity:1}100%{transform:translate(56px,-56px);opacity:0}}
@keyframes rkS2{0%{transform:translate(0,0);opacity:1}100%{transform:translate(80px,0px);opacity:0}}
@keyframes rkS3{0%{transform:translate(0,0);opacity:1}100%{transform:translate(56px,56px);opacity:0}}
@keyframes rkS4{0%{transform:translate(0,0);opacity:1}100%{transform:translate(0px,80px);opacity:0}}
@keyframes rkS5{0%{transform:translate(0,0);opacity:1}100%{transform:translate(-56px,56px);opacity:0}}
@keyframes rkS6{0%{transform:translate(0,0);opacity:1}100%{transform:translate(-80px,0px);opacity:0}}
@keyframes rkS7{0%{transform:translate(0,0);opacity:1}100%{transform:translate(-56px,-56px);opacity:0}}
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1300px; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 14px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff; overflow: hidden">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="font-size: 26px; font-weight: 900; font-style: italic; flex-grow: 1">CRASH</div>
<div style="height: 44px; box-sizing: border-box; border-radius: 14px; background: #1a1d27; padding: 0 12px; display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 700; color: #ffc83d">{{balanceText}}</div>
</header>

<div style="position: relative; height: 400px; border-radius: 26px; overflow: hidden; background: #12062a; border: 1px solid #2a1650">
<div aria-hidden="true" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: radial-gradient(ellipse at 78% 14%, rgba(255,190,60,0.22), rgba(255,190,60,0) 45%), radial-gradient(ellipse at 50% 100%, #5b1fa8 0%, rgba(91,31,168,0) 60%), linear-gradient(to bottom, #0d0420 0%, #1d0a45 55%, #34127a 100%)"></div>
<div aria-hidden="true" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0">
<sc-for list="{{stars}}" as="st" hint-placeholder-count="0">
<span style="position: absolute; left: {{st.x}}px; top: {{st.y}}px; width: {{st.s}}px; height: {{st.s}}px; border-radius: 50%; background: #ffffff; box-shadow: 0 0 6px rgba(255,255,255,0.8); animation: rkTwinkle {{st.d}}ms ease-in-out infinite; animation-delay: -{{st.delay}}ms"></span>
</sc-for>
</div>
<div aria-hidden="true" style="position: absolute; left: 214px; top: 18px; width: 128px; height: 128px; animation: rkMoon 6s ease-in-out infinite">
<div style="position: absolute; left: -30px; top: -30px; width: 188px; height: 188px; border-radius: 50%; background: radial-gradient(circle, rgba(255,200,70,0.35), rgba(255,200,70,0) 65%)"></div>
<div style="position: absolute; left: 0; top: 0; width: 128px; height: 128px; box-sizing: border-box; border-radius: 50%; background: radial-gradient(circle at 35% 30%, #fff1a8 0%, #ffd04a 35%, #d99412 75%, #9c6200 100%); border: 4px solid #b97b00; box-shadow: inset -10px -12px 0 rgba(120,70,0,0.35); opacity: 0.85"></div>
<div style="position: absolute; left: 14px; top: 14px; width: 100px; height: 100px; box-sizing: border-box; border-radius: 50%; border: 3px dashed rgba(140,90,0,0.55)"></div>
<div style="position: absolute; left: 0; top: 0; width: 128px; height: 128px; display: flex; align-items: center; justify-content: center; font-family: Rubik, system-ui, sans-serif; font-size: 66px; font-weight: 900; color: rgba(130,80,0,0.75); text-shadow: 0 2px 0 rgba(255,240,180,0.6)">\u20BF</div>
</div>
<div aria-hidden="true" style="position: absolute; left: 0; top: 0; width: 716px; height: 400px; opacity: 0.32; animation: rkChart 7s linear infinite; animation-play-state: {{bgPlay}}">
<svg width="716" height="400" viewBox="0 0 716 400" style="display: block">
<sc-for list="{{candles}}" as="cd" hint-placeholder-count="0">
<rect x="{{cd.wx}}" y="{{cd.wy}}" width="2" height="{{cd.wh}}" fill="{{cd.c}}"></rect>
<rect x="{{cd.x}}" y="{{cd.y}}" width="12" height="{{cd.h}}" rx="2" fill="{{cd.c}}"></rect>
</sc-for>
</svg>
</div>
<div aria-hidden="true" style="position: absolute; left: -271px; bottom: -10px; width: 900px; height: 260px; transform-origin: 50% 100%; transform: perspective(260px) rotateX(62deg); background-image: linear-gradient(rgba(215,140,255,0.85) 2px, transparent 2px), linear-gradient(90deg, rgba(215,140,255,0.85) 2px, transparent 2px); background-size: 44px 44px; animation: rkGrid 0.45s linear infinite; animation-play-state: {{bgPlay}}; -webkit-mask-image: linear-gradient(to top, #000000 50%, rgba(0,0,0,0) 100%); mask-image: linear-gradient(to top, #000000 50%, rgba(0,0,0,0) 100%)"></div>
<div aria-hidden="true" style="position: absolute; left: 0; right: 0; bottom: 118px; height: 2px; background: linear-gradient(to right, rgba(255,120,220,0), rgba(255,140,230,0.9), rgba(255,120,220,0)); box-shadow: 0 0 18px rgba(255,120,230,0.8)"></div>
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: radial-gradient(circle at 70% 30%, rgba(170,20,45,0.55), rgba(60,5,20,0.75)); opacity: {{tintOpacity}}; transition: opacity 0.35s"></div>

<div aria-hidden="true" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; opacity: {{speedOp}}; transition: opacity 0.6s">
<div style="position: absolute; left: -121px; top: -100px; width: 600px; height: 600px; transform: rotate(45deg)">
<sc-for list="{{warp}}" as="w" hint-placeholder-count="0">
<span style="position: absolute; top: 0; left: {{w.x}}px; width: {{w.wd}}px; height: {{w.h}}px; border-radius: 2px; background: linear-gradient(to bottom, rgba(255,255,255,0), {{w.c}}); animation: rkWarp {{w.d}}ms linear infinite; animation-delay: -{{w.delay}}ms"></span>
</sc-for>
</div>
</div>
<div aria-hidden="true" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; opacity: {{trendOp}}; transition: opacity 0.6s">
<sc-for list="{{trend}}" as="tr" hint-placeholder-count="0">
<div style="position: absolute; left: {{tr.x}}px; top: {{tr.y}}px; width: {{tr.s}}px; height: {{tr.s}}px; animation: rkTrend {{tr.d}}ms linear infinite; animation-delay: -{{tr.delay}}ms">
<svg width="{{tr.s}}" height="{{tr.s}}" viewBox="0 0 40 40" style="display: block; filter: drop-shadow(0 0 6px {{tr.glow}})"><path d="{{tr.path}}" fill="none" stroke="{{tr.c}}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 5 L38 3 L36 16Z" fill="{{tr.c}}"></path></svg>
</div>
</sc-for>
</div>
<svg width="358" height="400" viewBox="0 0 358 400" aria-hidden="true" style="position: absolute; left: 0; top: 0; filter: drop-shadow(0 0 6px {{trailColor}})">
<path d="{{trailD}}" fill="none" stroke="{{trailColor}}" stroke-opacity="0.25" stroke-width="12" stroke-linecap="round"></path>
<path d="{{trailD}}" fill="none" stroke="{{trailColor}}" stroke-width="4" stroke-linecap="round"></path>
</svg>

<div style="position: absolute; left: 12px; top: 40px; height: 250px; display: flex; flex-direction: column; justify-content: space-between">
<sc-for list="{{scale}}" as="sc" hint-placeholder-count="5">
<span style="font-size: 11px; font-weight: 700; color: #8f9bc4; text-shadow: 0 1px 3px #000000">{{sc.label}}</span>
</sc-for>
</div>

<sc-if value="{{showRocket}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; width: 130px; height: 130px; {{rocketBox}}"><div role="img" aria-label="\u0411\u0438\u0442\u043A\u043E\u0438\u043D-\u0440\u0430\u043A\u0435\u0442\u0430" style="width: 130px; height: 130px; {{rocketAnim}}">
<svg width="130" height="130" viewBox="0 0 130 130" style="display: block; overflow: visible">
<g transform="rotate(45 65 65)">
<g style="transform-box: fill-box; transform-origin: 50% 0%; animation: rkFlick 0.16s linear infinite; filter: drop-shadow(0 0 8px rgba(80,255,110,0.9))">
<path d="M54 100 C48 114 56 128 65 138 C74 128 82 114 76 100Z" fill="#3df05c" fill-opacity="0.9"></path>
<path d="M59 100 C56 110 61 119 65 125 C69 119 74 110 71 100Z" fill="#d9ffb8"></path>
</g>
<path d="M47 70 C35 76 27 87 25 101 L47 92Z" fill="#f2a91c" stroke="#7a4a00" stroke-width="2.5" stroke-linejoin="round"></path>
<path d="M83 70 C95 76 103 87 105 101 L83 92Z" fill="#d4870c" stroke="#7a4a00" stroke-width="2.5" stroke-linejoin="round"></path>
<path d="M52 94 L78 94 L74 103 L56 103Z" fill="#a46600" stroke="#6b4100" stroke-width="2.5" stroke-linejoin="round"></path>
<path d="M65 5 C88 22 92 62 84 95 L46 95 C38 62 42 22 65 5Z" fill="#f6c42e" stroke="#7a4a00" stroke-width="2.5" stroke-linejoin="round"></path>
<path d="M65 5 C88 22 92 62 84 95 L71 95 C77 62 77 27 65 5Z" fill="#dc9d16"></path>
<path d="M57 17 C48 33 46 57 49 84 L54 84 C52 59 54 35 62 15Z" fill="#fff1a6" fill-opacity="0.85"></path>
<path d="M65 5 C71 9 77 16 80 24 C70 20 60 20 50 24 C53 16 59 9 65 5Z" fill="#fffbe8" stroke="#7a4a00" stroke-width="2" stroke-linejoin="round"></path>
<path d="M47 31 Q65 37 83 31" fill="none" stroke="#a87000" stroke-width="3" stroke-linecap="round"></path>
<path d="M45 84 Q65 90 85 84" fill="none" stroke="#a87000" stroke-width="3" stroke-linecap="round"></path>
<path d="M53 39 Q65 42 77 39 M51 75 Q65 79 79 75" fill="none" stroke="#c98b00" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="65" cy="57" r="15" fill="#ffd95a" stroke="#8f5c00" stroke-width="3"></circle>
<circle cx="65" cy="57" r="10.5" fill="none" stroke="#c98b00" stroke-width="1.5"></circle>
<g transform="rotate(-45 65 57)">
<text x="65" y="64" text-anchor="middle" font-family="Rubik, system-ui, sans-serif" font-size="19" font-weight="900" fill="#7a4a00">B</text>
<path d="M62.5 44.5 V48.5 M67.5 44.5 V48.5 M62.5 63.5 V67.5 M67.5 63.5 V67.5" stroke="#7a4a00" stroke-width="2.4" stroke-linecap="round"></path>
</g>
</g>
</svg>
</div></div>
</sc-if>

<sc-if value="{{isWait}}" hint-placeholder-val="{{ true }}">
<div style="position: absolute; left: 0; right: 0; top: 96px; display: flex; flex-direction: column; align-items: center; gap: 12px">
<div style="font-size: 62px; font-weight: 900; line-height: 1; color: {{timerColor}}; font-variant-numeric: tabular-nums; text-shadow: 0 0 24px rgba(0,0,0,0.6)">{{timerText}}</div>
<div style="width: 170px; height: 8px; border-radius: 4px; background: rgba(255,255,255,0.12); overflow: hidden">
<div style="height: 8px; border-radius: 4px; background: {{timerColor}}; width: {{timerPct}}%"></div>
</div>
<div style="font-size: 13px; font-weight: 700; letter-spacing: 4px; color: {{timerColor}}">{{timerLabel}}</div>
</div>
</sc-if>

<sc-if value="{{isFly}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; left: 0; right: 0; top: 28px; text-align: center; font-size: 46px; font-weight: 900; line-height: 1; font-variant-numeric: tabular-nums; text-shadow: 0 2px 20px rgba(0,0,0,0.7)">{{multText}}</div>
</sc-if>

<sc-if value="{{isCrash}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; left: 0; right: 0; top: 134px; display: flex; flex-direction: column; align-items: center; gap: 6px; animation: rkPop 0.3s ease-out">
<div style="font-size: 14px; font-weight: 700; letter-spacing: 4px; color: #ff5d73">\u041A\u0420\u0410\u0428</div>
<div style="font-size: 64px; font-weight: 900; line-height: 1; color: #ff4d64; text-shadow: 0 0 24px rgba(255,40,70,0.6)">{{crashText}}</div>
</div>
</sc-if>

<sc-if value="{{isCrash}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; width: 0; height: 0; {{boomPos}}">
<div style="position: absolute; left: -70px; top: -70px; width: 140px; height: 140px; border-radius: 50%; background: radial-gradient(circle, #fffbe0 0%, #ffd166 30%, rgba(255,120,0,0.6) 55%, rgba(255,60,0,0) 72%); animation: rkFlash 0.7s ease-out forwards"></div>
<div style="position: absolute; left: -60px; top: -60px; width: 120px; height: 120px; box-sizing: border-box; border-radius: 50%; border: 4px solid #ffd166; animation: rkRing 0.8s ease-out forwards"></div>
<svg width="160" height="160" viewBox="0 0 160 160" aria-hidden="true" style="position: absolute; left: -80px; top: -80px; animation: rkRays 0.9s ease-out forwards">
<g stroke="#ffe08a" stroke-width="4" stroke-linecap="round">
<path d="M80 26 V6"></path><path d="M80 134 V154"></path><path d="M26 80 H6"></path><path d="M134 80 H154"></path>
<path d="M42 42 L28 28"></path><path d="M118 42 L132 28"></path><path d="M42 118 L28 132"></path><path d="M118 118 L132 132"></path>
</g>
<g stroke="#ff7b00" stroke-width="3" stroke-linecap="round">
<path d="M60 31 L54 14"></path><path d="M100 31 L106 14"></path><path d="M31 60 L14 54"></path><path d="M129 60 L146 54"></path>
<path d="M31 100 L14 106"></path><path d="M129 100 L146 106"></path><path d="M60 129 L54 146"></path><path d="M100 129 L106 146"></path>
</g>
</svg>
<span style="position: absolute; left: -4px; top: -4px; width: 8px; height: 8px; border-radius: 50%; background: #ffd166; animation: rkS0 0.9s ease-out forwards"></span>
<span style="position: absolute; left: -3px; top: -3px; width: 6px; height: 6px; border-radius: 50%; background: #ff7b00; animation: rkS1 0.9s ease-out forwards"></span>
<span style="position: absolute; left: -4px; top: -4px; width: 8px; height: 8px; border-radius: 50%; background: #fff3b0; animation: rkS2 0.9s ease-out forwards"></span>
<span style="position: absolute; left: -3px; top: -3px; width: 6px; height: 6px; border-radius: 50%; background: #ff7b00; animation: rkS3 0.9s ease-out forwards"></span>
<span style="position: absolute; left: -4px; top: -4px; width: 8px; height: 8px; border-radius: 50%; background: #ffd166; animation: rkS4 0.9s ease-out forwards"></span>
<span style="position: absolute; left: -3px; top: -3px; width: 6px; height: 6px; border-radius: 50%; background: #ff5d3b; animation: rkS5 0.9s ease-out forwards"></span>
<span style="position: absolute; left: -4px; top: -4px; width: 8px; height: 8px; border-radius: 50%; background: #fff3b0; animation: rkS6 0.9s ease-out forwards"></span>
<span style="position: absolute; left: -3px; top: -3px; width: 6px; height: 6px; border-radius: 50%; background: #ff7b00; animation: rkS7 0.9s ease-out forwards"></span>
</div>
</sc-if>

<div style="position: absolute; left: 0; right: 0; bottom: 0; padding: 8px 10px; background: rgba(7,9,16,0.72); display: flex; gap: 5px; overflow: hidden">
<sc-for list="{{history}}" as="h" hint-placeholder-count="7">
<span style="flex-shrink: 0; font-size: 11px; font-weight: 700; padding: 5px 7px; border-radius: 8px; background: {{h.bg}}; color: {{h.color}}">{{h.label}}</span>
</sc-for>
</div>
</div>

<sc-if value="{{showGiftPick}}" hint-placeholder-val="{{ false }}">
<div style="background: #151821; border: 1px solid #222838; border-radius: 18px; padding: 12px; display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; justify-content: space-between; align-items: center">
<span style="font-size: 14px; font-weight: 700">\u041F\u043E\u0441\u0442\u0430\u0432\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A</span>
<button type="button" onClick="{{closeGift}}" style="height: 36px; border: 0; background: transparent; color: #a3a8b5; font-family: Rubik, system-ui, sans-serif; font-size: 13px; cursor: pointer">\u041E\u0442\u043C\u0435\u043D\u0430</button>
</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px">
<sc-for list="{{gifts}}" as="g" hint-placeholder-count="4">
<button type="button" onClick="{{g.pick}}" style="background: #0b0d12; border: 1px solid #222838; border-radius: 12px; padding: 8px 4px; display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff">
<img src="{{g.img}}" alt="" style="width: 40px; height: 40px">
<span style="font-size: 10px; font-weight: 500; white-space: nowrap">{{g.name}}</span>
<span style="font-size: 11px; font-weight: 700; color: #ffc83d">{{g.priceText}}</span>
</button>
</sc-for>
</div>
</div>
</sc-if>

<sc-if value="{{showCashout}}" hint-placeholder-val="{{ false }}">
<button type="button" onClick="{{cashout}}" style="height: 64px; border: 0; border-radius: 18px; font-family: Rubik, system-ui, sans-serif; font-size: 20px; font-weight: 900; font-style: italic; cursor: pointer; background: #2bd46b; color: #06210f; box-shadow: 0 6px 24px rgba(43,212,107,0.4)">\u0417\u0410\u0411\u0420\u0410\u0422\u042C {{cashoutText}}</button>
</sc-if>

<sc-if value="{{showBetPanel}}" hint-placeholder-val="{{ true }}">
<div style="display: flex; flex-direction: column; gap: 10px">
<div style="display: grid; grid-template-columns: 44px minmax(0, 1fr) 44px 44px 44px; gap: 6px; align-items: center">
<button type="button" onClick="{{betMinus}}" aria-label="\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 700; cursor: pointer">\u2212</button>
<label style="position: relative; height: 44px; border-radius: 12px; background: #151821; border: 1px solid #222838; box-sizing: border-box; display: flex; align-items: center; cursor: text"><input type="text" inputmode="decimal" enterkeyhint="done" autocomplete="off" aria-label="\u0421\u0443\u043C\u043C\u0430 \u0441\u0442\u0430\u0432\u043A\u0438 \u0432 TON" value="{{betInput}}" onInput="{{onBetInput}}" onFocus="{{onBetFocus}}" onBlur="{{onBetBlur}}" onKeyDown="{{onBetKey}}" style="width: 100%; height: 100%; box-sizing: border-box; border: 0; outline: none; background: transparent; text-align: center; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 900; color: #ffc83d; padding: 0 38px 0 10px"><span style="position: absolute; right: 12px; font-size: 12px; font-weight: 700; color: #8a90a0; pointer-events: none">TON</span></label>
<button type="button" onClick="{{betPlus}}" aria-label="\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 700; cursor: pointer">+</button>
<button type="button" onClick="{{betHalf}}" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer">\xBD</button>
<button type="button" onClick="{{betDouble}}" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer">x2</button>
</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
<button type="button" onClick="{{openGift}}" disabled="{{betDisabled}}" style="height: 56px; border-radius: 16px; border: 2px solid #2c3244; background: #151821; color: {{giftBtnColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px">
<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><rect x="2" y="7" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect><rect x="1" y="4" width="16" height="4" rx="1.5" fill="currentColor"></rect><path d="M9 4 V17" stroke="currentColor" stroke-width="2"></path></svg>
\u041F\u043E\u0434\u0430\u0440\u043A\u043E\u043C
</button>
<button type="button" onClick="{{placeTon}}" disabled="{{betDisabled}}" style="height: 56px; border-radius: 16px; border: 0; background: {{tonBtnBg}}; color: {{tonBtnColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer">{{tonBtnText}}</button>
</div>
<sc-if value="{{hasErr}}" hint-placeholder-val="{{ false }}">
<div style="font-size: 12px; color: #ff5d73; text-align: center">{{errText}}</div>
</sc-if>
<sc-if value="{{hasQueued}}" hint-placeholder-val="{{ false }}">
<div style="font-size: 12px; color: #ffc83d; text-align: center">\u0421\u0442\u0430\u0432\u043A\u0430 {{queuedText}} \u0441\u044B\u0433\u0440\u0430\u0435\u0442 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0440\u0430\u0443\u043D\u0434\u0435</div>
</sc-if>
</div>
</sc-if>

<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px">
<span style="font-size: 17px; font-weight: 700">\u0421\u0442\u0430\u0432\u043A\u0438 \u0440\u0430\u0443\u043D\u0434\u0430</span>
<span style="font-size: 13px; font-weight: 500; color: #a3a8b5">{{playersInfo}}</span>
</div>
<div style="display: flex; flex-direction: column; gap: 8px">
<sc-if value="{{noPlayers}}" hint-placeholder-val="{{ false }}">
<div style="background: #151821; border: 1px dashed #2c3244; border-radius: 16px; padding: 18px 12px; text-align: center; font-size: 13px; color: #8a90a0">{{emptyText}}</div>
</sc-if>
<sc-for list="{{players}}" as="p" hint-placeholder-count="6">
<div style="display: flex; align-items: center; gap: 10px; background: #151821; border: 1px solid {{p.border}}; border-radius: 16px; padding: 10px 12px">
<div style="width: 38px; height: 38px; border-radius: 12px; background: {{p.avBg}}; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900; flex-shrink: 0; overflow: hidden"><sc-if value="{{p.hasPhoto}}" hint-placeholder-val="{{ false }}"><img src="{{p.photo}}" data-av="1" referrerpolicy="no-referrer" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if><sc-if value="{{p.noPhoto}}" hint-placeholder-val="{{ true }}">{{p.initial}}</sc-if></div>
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1; min-width: 0">
<span style="font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{p.name}}</span>
<span style="font-size: 12px; font-weight: 500; color: #8a90a0">{{p.betText}} \xB7 <span style="color: {{p.multColor}}">{{p.multText}}</span></span>
</div>
<div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px">
<span style="font-size: 15px; font-weight: 900; color: {{p.payColor}}">{{p.payText}}</span>
<span style="font-size: 11px; font-weight: 700; color: {{p.payColor}}">TON</span>
</div>
<sc-if value="{{p.hasGift}}" hint-placeholder-val="{{ false }}">
<img src="{{p.giftImg}}" alt="{{p.giftName}}" style="width: 34px; height: 34px; flex-shrink: 0">
</sc-if>
</div>
</sc-for>
</div>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1300}}'>
var GROWTH = 0.16;
var GIFTS = {
  cake: { name: 'Homemade Cake', price: 5.04, img: '/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d' },
  globe: { name: 'Snow Globe', price: 5.92, img: '/_blob/6e3628fac94b5266f3b64cea9c5fe7ee' },
  record: { name: 'Record Player', price: 11.9, img: '/_blob/8f4c023d08704d2319e54c9872a8c46d' },
  rose: { name: 'Eternal Rose', price: 25.6, img: '/_blob/734e25b54462cda990767f69381d8355' },
  bear: { name: 'Toy Bear', price: 35, img: '/_blob/c02bc9477e447f6f71962df1fc7a399a' },
  lpotion: { name: 'Love Potion', price: 14.1, img: '/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65' },
  bells: { name: 'Jingle Bells', price: 10, img: '/_blob/808ef5efdbeb6b276f70430b220f760b' }
};
if (window.rkThumb) Object.keys(GIFTS).forEach(function (k) { GIFTS[k].img = window.rkThumb(GIFTS[k].name, GIFTS[k].img); });
var AV = ['#e5383b', '#2a7fff', '#2bd46b', '#9b5cff', '#ff8a5c', '#00a8a8', '#c77dff', '#e0a800'];

function r2(x) { return Math.round(x * 100) / 100; }
function rkTrack(o) { try { if (window.RK && window.RK.track) window.RK.track(o); } catch (e) {} }
function NET() { return window.RK && window.RK.net; }
function avColor(uid) { var h = 0; for (var i = 0; i < uid.length; i++) h = (h * 31 + uid.charCodeAt(i)) | 0; return AV[Math.abs(h) % AV.length]; }
// \u041F\u043E\u043B\u0451\u0442 \u0440\u0430\u043A\u0435\u0442\u044B: \u0432\u044B\u043B\u0435\u0442\u0430\u0435\u0442 \u0438\u0437 \u043B\u0435\u0432\u043E\u0433\u043E \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u0443\u0433\u043B\u0430 \u043F\u043E \u0434\u0438\u0430\u0433\u043E\u043D\u0430\u043B\u0438, \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0432 \u0446\u0435\u043D\u0442\u0440
// \u0438 \u0440\u0430\u0437\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u043E\u0441\u043E\u043C \u0432\u0432\u0435\u0440\u0445; \u0434\u0430\u043B\u044C\u0448\u0435 \u2014 \u044D\u0444\u0444\u0435\u043A\u0442 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438 (\u043F\u043E\u043B\u043E\u0441\u044B \u0437\u0432\u0451\u0437\u0434)
function rocketPos(el, m) {
  var e = Math.min(1, el / 1800); e = 1 - Math.pow(1 - e, 3);
  var x = 70 + (179 - 70) * e, y = 300 + (215 - 300) * e;
  var turn = Math.min(1, Math.max(0, (m - 1.3) / 1.0));
  return { x: x, y: y, rot: -45 * turn };
}
var WARP = (function () {
  var out = [], cols = ['rgba(255,255,255,0.75)', 'rgba(120,170,255,0.7)', 'rgba(255,120,140,0.6)'];
  for (var i = 0; i < 26; i++) {
    out.push({ x: Math.round(Math.random() * 600), wd: Math.random() < 0.3 ? 2 : 1, h: Math.round(80 + Math.random() * 180), c: cols[i % 3], d: Math.round(450 + Math.random() * 500), delay: Math.round(Math.random() * 900) });
  }
  return out;
})();
// \u0424\u043E\u043D: \u0437\u0432\u0451\u0437\u0434\u044B \u0438 \u0431\u0438\u0440\u0436\u0435\u0432\u043E\u0439 \u0433\u0440\u0430\u0444\u0438\u043A (\u0441\u0432\u0435\u0447\u0438 \u0440\u0430\u0441\u0442\u0443\u0442 \u0432\u0432\u0435\u0440\u0445, \u0434\u0432\u0435 \u043A\u043E\u043F\u0438\u0438 \u0434\u043B\u044F \u0431\u0435\u0441\u0448\u043E\u0432\u043D\u043E\u0439 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438)
var STARS = (function () {
  var out = [];
  for (var i = 0; i < 34; i++) out.push({ x: Math.round(Math.random() * 356), y: Math.round(Math.random() * 250), s: Math.random() < 0.2 ? 3 : (Math.random() < 0.5 ? 2 : 1), d: Math.round(1600 + Math.random() * 2600), delay: Math.round(Math.random() * 3000) });
  return out;
})();
var CANDLES = (function () {
  var one = [], price = 300, n = 18, step = 358 / n;
  for (var i = 0; i < n; i++) {
    // \u0442\u0440\u0435\u043D\u0434 \u0432\u0432\u0435\u0440\u0445 \u043A \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435, \u043F\u043E\u0442\u043E\u043C \u043F\u043B\u0430\u0432\u043D\u043E \u043D\u0430\u0437\u0430\u0434 \u2014 \u0447\u0442\u043E\u0431\u044B \u043A\u043E\u043F\u0438\u0438 \u0441\u0442\u044B\u043A\u043E\u0432\u0430\u043B\u0438\u0441\u044C
    var drift = i < n / 2 ? -9 : 9;
    var open = price, close = price + drift + (Math.random() - 0.5) * 34;
    var up = close < open, top = Math.min(open, close), h = Math.max(4, Math.abs(close - open));
    one.push({ x: Math.round(i * step + 4), y: Math.round(top), h: Math.round(h), wy: Math.round(top - 6 - Math.random() * 10), wh: Math.round(h + 12 + Math.random() * 14), c: up ? '#3df05c' : '#ff4d6d' });
    price = close;
  }
  var out = one.slice();
  one.forEach(function (c) { out.push({ x: c.x + 358, y: c.y, h: c.h, wy: c.wy, wh: c.wh, c: c.c }); });
  return out.map(function (c) { c.wx = c.x + 5; return c; });
})();
// \u0421\u0442\u0440\u0435\u043B\u043A\u0438 \xAB\u0433\u0440\u0430\u0444\u0438\u043A \u0432\u0432\u0435\u0440\u0445\xBB, \u043F\u0440\u043E\u043B\u0435\u0442\u0430\u044E\u0449\u0438\u0435 \u043C\u0438\u043C\u043E \u0440\u0430\u043A\u0435\u0442\u044B
var TREND = (function () {
  var out = [], paths = ['M4 34 L14 22 L21 28 L34 8', 'M4 30 L15 20 L22 25 L35 8', 'M6 34 L34 8'];
  for (var i = 0; i < 9; i++) {
    var green = i % 3 !== 2;
    out.push({ x: Math.round(60 + Math.random() * 300), y: Math.round(-30 + Math.random() * 260), s: Math.round(32 + Math.random() * 26),
      c: green ? '#45e05a' : '#ffffff', glow: green ? 'rgba(69,224,90,0.8)' : 'rgba(255,255,255,0.6)',
      path: paths[i % paths.length], d: Math.round(1300 + Math.random() * 900), delay: Math.round(Math.random() * 2000) });
  }
  return out;
})();
function fmt(x) { return (Math.floor(x * 100) / 100).toFixed(2); }
function flyMs(c) { return Math.log(Math.max(1, c)) / GROWTH * 1000; }

// \u0420\u0430\u0443\u043D\u0434\u044B \u0432\u0435\u0434\u0451\u0442 \u0441\u0435\u0440\u0432\u0435\u0440: \u0432\u0441\u0435 \u0438\u0433\u0440\u043E\u043A\u0438 \u0432\u0438\u0434\u044F\u0442 \u043E\u0434\u043D\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u0440\u0430\u043A\u0435\u0442\u0443 \u0438 \u0441\u0442\u0430\u0432\u043A\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      rs: null, phase: 'wait', m: 1, now: Date.now(), conn: false, err: '',
      balance: 50, bet: 1, queued: null, giftPick: false, sending: false,
      inv: ['cake', 'globe', 'record', 'rose']
    };
    this.offs = [];
  }
  componentDidMount() {
    var self = this, net = NET();
    if (net) {
      this.offs.push(net.on('crash', function (m) { self.onRound(m); }));
      this.offs.push(net.on('crash.ok', function (m) { rkTrack({ game: 'crash', bet: m.amount, round: true }); self.setState({ sending: false, err: '' }); }));
      this.offs.push(net.on('crash.err', function (m) {
        // \u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430 \u2014 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u0434\u0435\u043D\u044C\u0433\u0438 / \u043F\u043E\u0434\u0430\u0440\u043E\u043A
        var s = self.state, upd = { sending: false, err: m.msg || '\u041E\u0448\u0438\u0431\u043A\u0430' };
        if (m.gift) upd.inv = s.inv.concat([m.gift]); else if (m.amount) upd.balance = r2(s.balance + Number(m.amount));
        self.setState(upd);
      }));
      this.offs.push(net.on('status', function () { self.setState({ conn: net.connected }); }));
      net.sub('crash');
      this.state.conn = net.connected;
    }
    this.iv = setInterval(function () { self.tick(); }, 50);
  }
  componentWillUnmount() { clearInterval(this.iv); this.offs.forEach(function (f) { f(); }); var net = NET(); if (net) net.unsub('crash'); }

  onRound(r) {
    var s = this.state, upd = { rs: r };
    // \u043D\u043E\u0432\u044B\u0439 \u0440\u0430\u0443\u043D\u0434 \u2014 \u0441\u0442\u0430\u0432\u043A\u0430 \xAB\u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0443\u043D\u0434\xBB \u0443\u0445\u043E\u0434\u0438\u0442 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440
    if (r.phase === 'wait' && (!s.rs || s.rs.n !== r.n) && s.queued) {
      var q = s.queued; upd.queued = null;
      this.setState(upd);
      this.sendBet(q.amount, q.gift);
      return;
    }
    this.setState(upd);
  }
  myBet() {
    var r = this.state.rs, net = NET();
    if (!r || !net) return null;
    for (var i = 0; i < r.bets.length; i++) if (net.isMe(r.bets[i].uid)) return r.bets[i];
    return null;
  }
  tick() {
    var r = this.state.rs, net = NET(), now = net ? net.now() : Date.now();
    var upd = { now: now, conn: !!(net && net.connected) };
    if (r) {
      upd.phase = r.phase;
      if (r.phase === 'fly') upd.m = Math.exp(GROWTH * Math.max(0, now - r.flyStart) / 1000);
      else if (r.phase === 'crash') upd.m = r.crashAt;
      else upd.m = 1;
    }
    this.setState(upd);
  }
  sendBet(amount, gift) {
    var s = this.state, net = NET();
    if (!net || !net.connected) return;
    if (gift) {
      var inv = s.inv.slice(), i = inv.indexOf(gift); if (i === -1) return; inv.splice(i, 1);
      this.setState({ inv: inv, sending: true, giftPick: false });
      net.send({ t: 'crash.bet', gift: gift });
    } else {
      if (!(amount >= 0.1) || amount > s.balance) return;
      this.setState({ balance: r2(s.balance - amount), sending: true });
      net.send({ t: 'crash.bet', amount: amount });
    }
  }
  placeTon() {
    var s = this.state;
    if (s.phase === 'wait') {
      if (this.myBet() || s.sending || s.bet > s.balance || !(s.bet >= 0.1)) return;
      this.sendBet(s.bet, null);
    } else {
      if (!(s.bet >= 0.1)) return;
      this.setState({ queued: s.queued ? null : { amount: s.bet, gift: null } });
    }
  }
  placeGift(k) {
    var s = this.state;
    if (s.phase === 'wait' && !this.myBet() && !s.sending) this.sendBet(0, k);
    else this.setState({ giftPick: false, queued: { gift: k } });
  }
  cashout() {
    var s = this.state, me = this.myBet(), net = NET();
    if (s.phase !== 'fly' || !me || me.at || !net) return;
    net.send({ t: 'crash.cashout' }); // \u0432\u044B\u0438\u0433\u0440\u044B\u0448 \u043F\u0440\u0438\u0434\u0451\u0442 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0441\u0430\u043C \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441
  }
  setBet(v) { this.setState({ betStr: null, bet: r2(Math.max(0.1, Math.min(v, Math.max(0.1, this.state.balance)))) }); }

  renderVals() {
    var self = this, s = this.state, r = s.rs, net = NET();
    var remain = r && s.phase === 'wait' ? Math.max(0, (r.waitEnd - s.now) / 1000) : 0;
    var waitSec = r ? r.waitMs / 1000 : 5;
    var timerColor = remain > 3 ? '#2bd46b' : (remain > 1.5 ? '#ffc83d' : '#ff5d73');
    var timerText = r ? (remain < 10 ? '0' : '') + remain.toFixed(2) : '--';
    var m = s.phase === 'wait' ? 1 : s.m;
    var flyEl = r && s.phase === 'fly' ? s.now - r.flyStart : 0;
    var rp = { x: 70, y: 300, rot: 0 };
    if (s.phase === 'fly') rp = rocketPos(flyEl, m);
    else if (s.phase === 'crash' && r) rp = rocketPos(flyMs(r.crashAt), r.crashAt);
    var rx = rp.x, ry = rp.y;
    // \u043D\u0430 \u0432\u0437\u043B\u0451\u0442\u0435 \u0440\u0430\u043A\u0435\u0442\u0430 \xAB\u043F\u0440\u0438\u0431\u043B\u0438\u0436\u0430\u0435\u0442\u0441\u044F\xBB \u043A \u043A\u0430\u043C\u0435\u0440\u0435
    var rocketScale = s.phase === 'fly' ? 1 + 0.45 * (1 - Math.pow(1 - Math.min(1, flyEl / 2200), 3)) : 1;

    var top = Math.max(2, m * 1.3), scale = [];
    for (var i = 4; i >= 0; i--) scale.push({ label: (1 + (top - 1) * i / 4).toFixed(1) + 'x' });

    var me = this.myBet();
    var bets = r ? r.bets.slice() : [];
    bets.sort(function (a, b) { var am = net && net.isMe(a.uid) ? 1 : 0, bm = net && net.isMe(b.uid) ? 1 : 0; return bm - am || b.amount - a.amount; });
    var players = bets.map(function (b) {
      var mine = !!(net && net.isMe(b.uid)), cashed = !!b.at, lost = s.phase === 'crash' && !cashed;
      var photo = mine ? ((window.RK && window.RK.user && window.RK.user.photo_url) || b.photo) : b.photo;
      return {
        name: mine ? '\u0422\u044B' : b.name, initial: (b.name || '?').charAt(0).toUpperCase(),
        hasPhoto: !!photo, noPhoto: !photo, photo: photo || '',
        avBg: mine ? '#ffc83d' : avColor(b.uid), border: mine ? '#ffc83d' : (cashed ? 'rgba(43,212,107,0.4)' : '#222838'),
        betText: fmt(b.amount) + ' TON',
        multText: cashed ? 'x' + b.at.toFixed(2) : (s.phase === 'fly' ? '\u0432 \u0438\u0433\u0440\u0435' : (lost ? '\u043A\u0440\u0430\u0448' : 'x1.00')),
        multColor: cashed ? '#2bd46b' : (lost ? '#ff5d73' : '#8a90a0'),
        payText: cashed ? '+' + fmt(b.pay) : (lost ? '0.00' : fmt(b.amount)),
        payColor: cashed ? '#2bd46b' : (lost ? '#ff5d73' : '#ffffff'),
        hasGift: !!b.gift, giftImg: b.gift && GIFTS[b.gift] ? GIFTS[b.gift].img : '', giftName: b.gift && GIFTS[b.gift] ? GIFTS[b.gift].name : ''
      };
    });
    var total = 0; bets.forEach(function (b) { total += b.amount; });

    var canBetNow = s.conn && s.phase === 'wait' && !me && !s.sending;
    var showCashout = s.phase === 'fly' && me && !me.at;
    var hist = r ? r.hist : [];
    var online = net && net.online ? net.online : 0;

    return {
      balanceText: fmt(s.balance) + ' TON',
      tintOpacity: s.phase === 'crash' ? '1' : '0',
      trailColor: s.phase === 'crash' ? '#ff3b55' : '#3d8bff',
      trailD: 'M 0 0',
      warp: WARP, trend: TREND, stars: STARS, candles: CANDLES,
      bgPlay: s.phase === 'fly' ? 'running' : 'paused',
      trendOp: s.phase === 'fly' ? Math.min(1, Math.max(0, (m - 1.02) / 0.15)).toFixed(2) : '0',
      speedOp: s.phase === 'fly' ? Math.min(1, Math.max(0, (m - 1.25) / 1.2)).toFixed(2) : '0',
      scale: scale,
      isWait: s.phase === 'wait', isFly: s.phase === 'fly', isCrash: s.phase === 'crash',
      timerText: timerText, timerColor: timerColor, timerPct: (remain / waitSec) * 100,
      timerLabel: !s.conn ? '\u041F\u041E\u0414\u041A\u041B\u042E\u0427\u0415\u041D\u0418\u0415...' : '\u0418\u0413\u0420\u0410 \u0427\u0415\u0420\u0415\u0417',
      multText: m.toFixed(2) + 'x',
      crashText: (r && r.crashAt ? r.crashAt : m).toFixed(2) + 'x',
      showRocket: s.phase !== 'crash',
      rocketBox: 'left: ' + (rx - 65).toFixed(1) + 'px; top: ' + (ry - 65).toFixed(1) + 'px; transform: scale(' + rocketScale.toFixed(3) + '); opacity: ' + (s.phase === 'wait' ? '0.9' : '1'),
      rocketAnim: 'animation: ' + (s.phase === 'fly' && m > 1.6 ? 'rkShake 0.12s linear infinite' : 'rkBob 0.6s ease-in-out infinite') + '; filter: drop-shadow(0 0 18px rgba(255,200,40,0.55))',
      boomPos: 'left: ' + rx.toFixed(1) + 'px; top: ' + ry.toFixed(1) + 'px',
      history: hist.map(function (h) {
        return { label: h.toFixed(2) + 'x', bg: h >= 10 ? 'rgba(255,200,61,0.18)' : (h >= 2 ? 'rgba(42,127,255,0.2)' : 'rgba(255,255,255,0.08)'), color: h >= 10 ? '#ffc83d' : (h >= 2 ? '#7fb2ff' : '#c9cdd6') };
      }),
      showCashout: !!showCashout,
      cashoutText: showCashout ? fmt(me.amount * m) + ' TON' : '',
      cashout: function () { self.cashout(); },
      showBetPanel: !showCashout,
      betText: fmt(s.bet) + ' TON',
      betInput: s.betStr != null ? s.betStr : s.bet.toFixed(2),
      onBetInput: function (e) {
        var v = String((e && e.target && e.target.value) || '').replace(',', '.').replace(/[^0-9.]/g, '');
        var parts = v.split('.'); if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
        if (parts.length > 1 && parts[1].length > 2) v = parts[0] + '.' + parts[1].slice(0, 2);
        var n = parseFloat(v);
        self.setState({ betStr: v, bet: isNaN(n) ? 0 : Math.round(n * 100) / 100 });
      },
      onBetFocus: function (e) { try { e.target.select(); } catch (x) {} },
      onBetBlur: function () { var b = self.state.bet; if (!(b >= 0.1)) b = 0.1; self.setState({ betStr: null, bet: Math.round(b * 100) / 100 }); },
      onBetKey: function (e) { if (e && e.key === 'Enter' && e.target && e.target.blur) e.target.blur(); },
      betMinus: function () { self.setBet(self.state.bet - 0.5); },
      betPlus: function () { self.setBet(self.state.bet + 0.5); },
      betHalf: function () { self.setBet(self.state.bet / 2); },
      betDouble: function () { self.setBet(self.state.bet * 2); },
      betDisabled: !s.conn || (s.phase === 'wait' && (!!me || s.sending)),
      tonBtnBg: canBetNow || (s.conn && s.phase !== 'wait') ? '#ffc83d' : '#1d2230',
      tonBtnColor: canBetNow || (s.conn && s.phase !== 'wait') ? '#1a1300' : '#6c7282',
      tonBtnText: !s.conn ? '\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438' : (s.phase === 'wait' ? (me ? '\u0421\u0442\u0430\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430' : (s.sending ? '\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C...' : '\u0421\u0442\u0430\u0432\u043A\u0430 TON')) : (s.queued ? '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C' : '\u041D\u0430 \u0441\u043B\u0435\u0434. \u0440\u0430\u0443\u043D\u0434')),
      giftBtnColor: s.inv.length ? '#ffffff' : '#5a6070',
      openGift: function () { if (self.state.inv.length) self.setState({ giftPick: !self.state.giftPick }); },
      closeGift: function () { self.setState({ giftPick: false }); },
      placeTon: function () { self.placeTon(); },
      showGiftPick: s.giftPick && !showCashout,
      gifts: s.inv.map(function (k) { var g = GIFTS[k]; return { name: g.name, img: g.img, priceText: g.price + ' TON', pick: function () { self.placeGift(k); } }; }),
      hasQueued: !!s.queued,
      queuedText: s.queued ? (s.queued.gift ? GIFTS[s.queued.gift].name : fmt(s.queued.amount) + ' TON') : '',
      hasErr: !!s.err, errText: s.err,
      players: players,
      noPlayers: players.length === 0,
      emptyText: s.conn ? '\u0412 \u044D\u0442\u043E\u043C \u0440\u0430\u0443\u043D\u0434\u0435 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u2014 \u0431\u0443\u0434\u044C \u043F\u0435\u0440\u0432\u044B\u043C' : '\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443...',
      playersInfo: (online ? online + ' \u043E\u043D\u043B\u0430\u0439\u043D \xB7 ' : '') + players.length + ' \u0432 \u0440\u0430\u0443\u043D\u0434\u0435 \xB7 ' + fmt(total) + ' TON'
    };
  }
}
<\/script>
</body>
</html>
`;var qp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 \u0410\u043F\u0433\u0440\u0435\u0439\u0434</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0b0d12}
a{color:#ffc83d}a:hover{color:#ffe08a}
@keyframes rkPop{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.06);opacity:1}100%{transform:scale(1)}}
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1640px; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 14px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff; overflow: hidden">

<header style="display: flex; align-items: center; gap: 12px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="font-size: 26px; font-weight: 900; font-style: italic; flex-grow: 1">UPGRADE</div>
<button type="button" onClick="{{toggleFast}}" aria-pressed="{{fastPressed}}" style="height: 44px; border-radius: 14px; border: 2px solid {{fastBorder}}; background: #1a1d27; color: {{fastColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; padding: 0 12px; display: flex; align-items: center; gap: 6px; cursor: pointer">
<svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><path d="M8 0 L0 9 H6 L5 16 L14 6 H8Z" fill="currentColor"></path></svg>
\u0411\u044B\u0441\u0442\u0440\u043E
</button>
</header>

<div style="display: flex; gap: 6px; overflow: hidden; min-height: 28px; align-items: center">
<sc-if value="{{historyEmpty}}" hint-placeholder-val="{{ true }}">
<span style="font-size: 12px; color: #8a90a0">\u0417\u0434\u0435\u0441\u044C \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0442\u0432\u043E\u0438\u0445 \u0430\u043F\u0433\u0440\u0435\u0439\u0434\u043E\u0432</span>
</sc-if>
<sc-for list="{{history}}" as="h" hint-placeholder-count="0">
<span style="flex-shrink: 0; font-size: 12px; font-weight: 700; padding: 6px 10px; border-radius: 9px; background: {{h.bg}}; color: {{h.color}}">{{h.mult}}</span>
</sc-for>
</div>

<div style="position: relative; width: 300px; height: 300px; align-self: center">
<svg width="300" height="300" viewBox="0 0 300 300" aria-hidden="true" style="position: absolute; left: 0; top: 0; {{ringGlow}}">
<circle cx="150" cy="150" r="146" fill="#11141c"></circle>
<path d="{{ticks}}" stroke="#2c3244" stroke-width="2" stroke-linecap="round"></path>
<circle cx="150" cy="150" r="112" fill="none" stroke="#1d2230" stroke-width="22"></circle>
<circle cx="150" cy="150" r="112" fill="none" stroke="{{arcColor}}" stroke-width="22" stroke-dasharray="{{dash}}" transform="rotate({{arcRot}} 150 150)"></circle>
<circle cx="150" cy="150" r="99" fill="none" stroke="#000000" stroke-opacity="0.35" stroke-width="2"></circle>
</svg>
<div style="position: absolute; left: 0; top: 0; width: 300px; height: 300px; {{pointerStyle}}">
<svg width="300" height="300" viewBox="0 0 300 300" aria-hidden="true">
<path d="M150 50 L138 16 L162 16Z" fill="#ffc83d" stroke="#0b0d12" stroke-width="3" stroke-linejoin="round"></path>
<circle cx="150" cy="16" r="4" fill="#fff3b0"></circle>
</svg>
</div>
<div style="position: absolute; left: 62px; top: 62px; width: 176px; height: 176px; border-radius: 50%; background: #0b0d12; box-shadow: inset 0 0 0 2px #1d2230; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px">
<img src="{{tgtImg}}" alt="" style="width: 56px; height: 56px">
<div style="font-size: 40px; font-weight: 900; line-height: 1; color: {{chanceColor}}">{{chanceText}}</div>
<div style="font-size: 12px; font-weight: 500; color: #a3a8b5">{{centerSub}}</div>
</div>
</div>

<div style="display: flex; align-items: center; justify-content: space-between; gap: 10px">
<div style="font-size: 13px; font-weight: 500; color: #a3a8b5">\u0417\u043E\u043D\u0430 \u0448\u0430\u043D\u0441\u0430</div>
<div role="group" aria-label="\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0437\u043E\u043D\u044B \u0448\u0430\u043D\u0441\u0430" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; background: #1a1d27; border-radius: 12px; padding: 4px">
<button type="button" onClick="{{sideRight}}" aria-pressed="{{rightPressed}}" style="height: 36px; border: 0; border-radius: 9px; padding: 0 14px; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; background: {{rightBg}}; color: {{rightColor}}">\u0421\u043F\u0440\u0430\u0432\u0430</button>
<button type="button" onClick="{{sideLeft}}" aria-pressed="{{leftPressed}}" style="height: 36px; border: 0; border-radius: 9px; padding: 0 14px; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; background: {{leftBg}}; color: {{leftColor}}">\u0421\u043B\u0435\u0432\u0430</button>
</div>
</div>

<div style="display: grid; grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr); gap: 6px; align-items: center">
<div style="background: #151821; border: 1px solid #222838; border-radius: 16px; padding: 12px; display: flex; flex-direction: column; gap: 3px; min-width: 0">
<div style="font-size: 11px; font-weight: 500; color: #a3a8b5">\u0421\u0442\u0430\u0432\u043A\u0430 \xB7 {{ownCount}}/6</div>
<div style="font-size: 15px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{ownLabel}}</div>
<div style="font-size: 14px; font-weight: 900; color: #ffc83d">{{ownPrice}}</div>
</div>
<svg width="28" height="20" viewBox="0 0 28 20" aria-hidden="true"><path d="M4 4 L11 10 L4 16 M15 4 L22 10 L15 16" fill="none" stroke="#ffc83d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
<div style="background: #151821; border: 1px solid #222838; border-radius: 16px; padding: 12px; display: flex; flex-direction: column; gap: 3px; min-width: 0">
<div style="font-size: 11px; font-weight: 500; color: #a3a8b5">\u0426\u0435\u043B\u044C \xB7 {{multShort}}</div>
<div style="font-size: 15px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{tgtLabel}}</div>
<div style="font-size: 14px; font-weight: 900; color: #ffc83d">{{tgtPrice}}</div>
</div>
</div>

<div style="display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 6px">
<sc-for list="{{quick}}" as="q" hint-placeholder-count="6">
<button type="button" onClick="{{q.pick}}" disabled="{{q.disabled}}" style="height: 40px; border-radius: 10px; border: 1px solid {{q.border}}; background: #151821; color: {{q.color}}; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer">{{q.label}}</button>
</sc-for>
</div>

<button type="button" onClick="{{spin}}" disabled="{{spinDisabled}}" style="height: 60px; border: 0; border-radius: 18px; font-family: Rubik, system-ui, sans-serif; font-size: 20px; font-weight: 900; font-style: italic; letter-spacing: 0.5px; cursor: pointer; background: {{btnBg}}; color: {{btnColor}}; box-shadow: {{btnShadow}}">{{btnText}}</button>

<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 6px">
<div style="display: flex; flex-direction: column; gap: 2px">
<div style="font-size: 17px; font-weight: 700">\u041C\u043E\u0439 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C</div>
<div style="font-size: 12px; font-weight: 500; color: #a3a8b5">{{invSub}}</div>
</div>
<div style="display: flex; gap: 4px">
<button type="button" onClick="{{clearPick}}" style="height: 44px; border: 0; background: transparent; color: #a3a8b5; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; padding: 0 6px">\u0421\u043D\u044F\u0442\u044C</button>
<button type="button" onClick="{{reset}}" style="height: 44px; border: 0; background: transparent; color: #a3a8b5; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 500; cursor: pointer; padding: 0 6px">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0435\u043C\u043E</button>
</div>
</div>
<sc-if value="{{invEmpty}}" hint-placeholder-val="{{ false }}">
<div style="background: #151821; border-radius: 14px; padding: 16px; font-size: 14px; color: #a3a8b5; text-align: center">\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u043F\u0443\u0441\u0442. \u041F\u043E\u043F\u043E\u043B\u043D\u0438 \u0431\u0430\u043B\u0430\u043D\u0441 \u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438 \xAB\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0435\u043C\u043E\xBB.</div>
</sc-if>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px">
<sc-for list="{{invList}}" as="item" hint-placeholder-count="9">
<button type="button" onClick="{{item.pick}}" aria-pressed="{{item.pressed}}" style="position: relative; min-width: 0; background: #151821; border: 2px solid {{item.border}}; border-radius: 14px; padding: 12px 6px 10px; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff; opacity: {{item.opacity}}; overflow: hidden">
<span style="position: absolute; left: 0; top: 0; right: 0; height: 3px; background: {{item.color}}"></span>
<sc-if value="{{item.selected}}" hint-placeholder-val="{{ false }}">
<span style="position: absolute; top: 7px; right: 7px; width: 20px; height: 20px; border-radius: 50%; background: #ffc83d; color: #1a1300; font-size: 12px; font-weight: 900; display: flex; align-items: center; justify-content: center">{{item.order}}</span>
</sc-if>
<img src="{{item.img}}" alt="" style="width: 52px; height: 52px">
<span style="max-width: 100%; font-size: 12px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{item.name}}</span>
<span style="font-size: 13px; font-weight: 700; color: #ffc83d">{{item.priceText}}</span>
<span style="font-size: 11px; font-weight: 700; color: {{item.chgColor}}">{{item.chgText}}</span>
</button>
</sc-for>
</div>

<div style="display: flex; flex-direction: column; gap: 2px; margin-top: 6px">
<div style="font-size: 17px; font-weight: 700">\u0412\u044B\u0431\u0435\u0440\u0438 \u0446\u0435\u043B\u044C</div>
<div style="font-size: 12px; font-weight: 500; color: #a3a8b5">{{targetSub}}</div>
</div>
<div style="position: relative">
<label for="rk-search" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">\u041F\u043E\u0438\u0441\u043A NFT</label>
<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" style="position: absolute; left: 14px; top: 13px"><circle cx="8" cy="8" r="5.5" fill="none" stroke="#6c7282" stroke-width="2"></circle><path d="M12 12 L16 16" stroke="#6c7282" stroke-width="2" stroke-linecap="round"></path></svg>
<input id="rk-search" type="search" value="{{q}}" onInput="{{onSearch}}" placeholder="\u041D\u0430\u0439\u0442\u0438 NFT \u0438\u0437 123 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0439" style="width: 100%; height: 44px; box-sizing: border-box; border-radius: 14px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 14px; padding: 0 14px 0 40px; outline: none">
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px">
<sc-for list="{{targetList}}" as="item" hint-placeholder-count="15">
<button type="button" onClick="{{item.pick}}" aria-pressed="{{item.pressed}}" disabled="{{item.disabled}}" style="position: relative; min-width: 0; background: #151821; border: 2px solid {{item.border}}; border-radius: 14px; padding: 12px 6px 10px; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff; opacity: {{item.opacity}}; overflow: hidden">
<span style="position: absolute; left: 0; top: 0; right: 0; height: 3px; background: {{item.color}}"></span>
<img src="{{item.img}}" alt="" style="width: 52px; height: 52px">
<span style="max-width: 100%; font-size: 12px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{item.name}}</span>
<span style="font-size: 13px; font-weight: 700; color: #ffc83d">{{item.priceText}}</span>
<span style="font-size: 11px; font-weight: 700; color: {{item.chgColor}}">{{item.chgText}}</span>
<span style="font-size: 11px; font-weight: 700; color: {{item.chanceColor}}">{{item.chanceText}}</span>
</button>
</sc-for>
</div>
<sc-if value="{{noTargets}}" hint-placeholder-val="{{ false }}">
<div style="background: #151821; border-radius: 14px; padding: 16px; font-size: 14px; color: #a3a8b5; text-align: center">\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</div>
</sc-if>

<sc-if value="{{showOverlay}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba(5, 6, 10, 0.78); display: flex; justify-content: center; align-items: flex-start; padding-top: 150px">
<div role="dialog" aria-label="{{resTitle}}" style="width: 320px; box-sizing: border-box; background: #151821; border: 2px solid {{resColor}}; border-radius: 28px; padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; animation: rkPop 0.45s ease-out; box-shadow: 0 0 60px {{resGlow}}">
<img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="\u0415\u043D\u043E\u0442-\u0431\u0430\u043D\u0434\u0438\u0442" style="width: 96px; height: 96px; border-radius: 50%; object-fit: cover; border: 3px solid {{resColor}}; box-sizing: border-box">
<div style="font-size: 40px; font-weight: 900; font-style: italic; line-height: 1; color: {{resColor}}">{{resTitle}}</div>
<div style="font-size: 15px; font-weight: 500; color: #c9cdd6">{{resText}}</div>
<div style="display: flex; align-items: center; gap: 10px; background: #0b0d12; border-radius: 16px; padding: 10px 16px">
<img src="{{resItemImg}}" alt="" style="width: 56px; height: 56px">
<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px">
<span style="font-size: 15px; font-weight: 700">{{resItem}}</span>
<span style="font-size: 14px; font-weight: 900; color: #ffc83d">{{resPrice}}</span>
</div>
</div>
<button type="button" onClick="{{closeResult}}" style="width: 100%; height: 52px; border: 0; border-radius: 16px; margin-top: 6px; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 900; font-style: italic; cursor: pointer; background: {{resColor}}; color: #0b0d12">{{resBtn}}</button>
</div>
</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1640}}'>
// \u0412\u0441\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 NFT-\u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 Telegram. \u0422\u0440\u0435\u0442\u044C\u0435 \u0447\u0438\u0441\u043B\u043E \u2014 \u0444\u043B\u043E\u0440 \u0432 TON (floorprice.is, 21.10.2026),
// \u0432\u0442\u043E\u0440\u043E\u0435 \u2014 \u0442\u0438\u0440\u0430\u0436 (giftclub.app, 0 = \u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445).
// \u0412 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435 \u0446\u0435\u043D\u044B \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0441 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430 (MRKT / Portals / Fragment).
var RAW = [
  ["Plush Pepe", 2448, 6300],
  ["Algorithm Cup", 0, 1450],
  ["Intelligence Cup", 0, 1224],
  ["Heart Locket", 1305, 1189],
  ["Resistance Dog", 0, 633.1],
  ["Durov's Cap", 3029, 404],
  ["Scared Cat", 13986, 274],
  ["Precious Peach", 2112, 244.2],
  ["Heroic Helmet", 1258, 172.9],
  ["Durov's Glasses", 148, 156.1],
  ["Mighty Arm", 1769, 127.9],
  ["Loot Bag", 6429, 120.6],
  ["Astral Shard", 2889, 118],
  ["Nail Bracelet", 1832, 114.4],
  ["Westside Sign", 5186, 108.5],
  ["Perfume Bottle", 2106, 76.5],
  ["Mini Oscar", 2108, 70.3],
  ["Artisan Brick", 2852, 68],
  ["Ion Gem", 2615, 66.1],
  ["Gem Signet", 2104, 60.4],
  ["Magic Potion", 3277, 58.2],
  ["Low Rider", 6519, 57.9],
  ["Swiss Watch", 10480, 56],
  ["Sharp Tongue", 3793, 46.4],
  ["Kissed Frog", 7508, 43.5],
  ["Bonded Ring", 2847, 42.5],
  ["Vintage Cigar", 8528, 37.7],
  ["Voodoo Doll", 10752, 37],
  ["Neko Helmet", 4002, 36.5],
  ["Genie Lamp", 2623, 36],
  ["Toy Bear", 29142, 35],
  ["Signet Ring", 7099, 32.1],
  ["Diamond Ring", 8179, 31.7],
  ["Electric Skull", 4191, 28.5],
  ["Rare Bird", 3348, 27.4],
  ["Bling Binky", 1959, 26.3],
  ["Eternal Rose", 5403, 25.6],
  ["Khabib's Papakha", 3143, 23.5],
  ["Cupid Charm", 5569, 21],
  ["Lucky Locket", 0, 18.9],
  ["Sky Stilettos", 5542, 18.3],
  ["Mad Pumpkin", 6426, 17],
  ["Trapped Heart", 9566, 16.4],
  ["UFC Strike", 5984, 15.5],
  ["Snoop Cigar", 17056, 14.9],
  ["Ionic Dryer", 2455, 14.5],
  ["Love Potion", 6420, 14.1],
  ["Crystal Ball", 8004, 13.1],
  ["Flying Broom", 6536, 12.7],
  ["Valentine Box", 3559, 12.4],
  ["Skull Flower", 6856, 12.3],
  ["Record Player", 5214, 11.9],
  ["Sakura Flower", 13339, 10.8],
  ["Love Candle", 3012, 10.7],
  ["Jingle Bells", 7965, 10],
  ["Top Hat", 8191, 9.82],
  ["Hanging Star", 6488, 9.44],
  ["Berry Box", 8623, 8.96],
  ["Sleigh Bell", 3996, 8.5],
  ["Fine Pen", 0, 8.23],
  ["Bunny Muffin", 6223, 8.2],
  ["Evil Eye", 17803, 8.03],
  ["Snow Mittens", 4684, 7.91],
  ["Joyful Bundle", 3568, 7.8],
  ["Jelly Bunny", 13367, 7.63],
  ["Jolly Chimp", 13658, 6.98],
  ["Light Sword", 16012, 6.42],
  ["Surge Board", 1756, 6.24],
  ["Input Key", 13025, 6.17],
  ["Witch Hat", 30548, 6.12],
  ["Moon Pendant", 12531, 6.01],
  ["Eternal Candle", 11919, 6],
  ["Desk Calendar", 32423, 5.99],
  ["Lush Bouquet", 5797, 5.99],
  ["Snow Globe", 5979, 5.92],
  ["Santa Hat", 11705, 5.9],
  ["Spy Agaric", 28563, 5.72],
  ["Faith Amulet", 10892, 5.49],
  ["Spring Basket", 11605, 5.49],
  ["Snoop Dogg", 52945, 5.43],
  ["Restless Jar", 8729, 5.26],
  ["Pretty Posy", 4797, 5.25],
  ["Bow Tie", 8092, 5.1],
  ["Swag Bag", 19313, 5.09],
  ["Homemade Cake", 32643, 5.04],
  ["Mousse Cake", 6669, 5],
  ["Liberty Figure", 12499, 4.98],
  ["Stellar Rocket", 15504, 4.9],
  ["Cookie Heart", 12779, 4.88],
  ["Money Pot", 8661, 4.82],
  ["Jack-in-the-Box", 15807, 4.74],
  ["Clover Pin", 17449, 4.69],
  ["Hex Pot", 14095, 4.65],
  ["B-Day Candle", 23201, 4.64],
  ["Party Sparkler", 20446, 4.64],
  ["Winter Wreath", 8926, 4.5],
  ["Ginger Cookie", 16858, 4.47],
  ["Timeless Book", 6986, 4.45],
  ["Victory Medal", 13289, 4.41],
  ["Mirage Lamp", 0, 4.31],
  ["Star Notepad", 8443, 4.31],
  ["Spiced Wine", 11682, 4.21],
  ["Fresh Socks", 10667, 4.2],
  ["Mood Pack", 12462, 4.15],
  ["Holiday Drink", 5923, 4.14],
  ["Happy Brownie", 9989, 4.08],
  ["Hypno Lollipop", 8343, 4.01],
  ["Jester Hat", 11969, 3.92],
  ["Easter Egg", 25973, 3.88],
  ["Pet Snake", 10382, 3.88],
  ["Tama Gadget", 10412, 3.86],
  ["Candy Cane", 14703, 3.83],
  ["Ice Cream", 32806, 3.8],
  ["Whip Cupcake", 13270, 3.75],
  ["Big Year", 11544, 3.74],
  ["Vice Cream", 37569, 3.73],
  ["Pool Float", 12397, 3.71],
  ["Snake Box", 8755, 3.71],
  ["Instant Ramen", 21613, 3.7],
  ["Lunar Snake", 16883, 3.7],
  ["Xmas Stocking", 13526, 3.7],
  ["Chill Flame", 35999, 3.68],
  ["Lol Pop", 65396, 3.67]
];
// \u0421\u0432\u043E\u0438 \u0438\u043A\u043E\u043D\u043A\u0438-\u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0438; \u0443 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u0440\u043E\u0431\u043A\u0430-\u043F\u043E\u0434\u0430\u0440\u043E\u043A. \u0412 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435 \u2014 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u0438\u0437 Telegram.
var GIFT_IMG = '/_blob/a64ccb23ba5a5ab0f1f789ab412cf3af';
var IMG = {
  'B-Day Candle': '/_blob/ac9e83f513d62d0c7fc3250c8a2d1f89', 'Lol Pop': '/_blob/1f689ff254757e970266197964c5d390',
  'Desk Calendar': '/_blob/9b7049b84c84b25ce8e457f56c837c42', 'Hypno Lollipop': '/_blob/b4c8d4f914ed6e253c933045ab9e3461',
  'Jingle Bells': '/_blob/808ef5efdbeb6b276f70430b220f760b', 'Homemade Cake': '/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d',
  'Snow Globe': '/_blob/6e3628fac94b5266f3b64cea9c5fe7ee', 'Berry Box': '/_blob/c2c0de4f1d0a4ed1dd2df84eff4c7f73',
  'Bunny Muffin': '/_blob/45ac385132ce7b83da133306d9a330f8', 'Record Player': '/_blob/8f4c023d08704d2319e54c9872a8c46d',
  'Top Hat': '/_blob/fe01a5a2d2ff76e0192e008ed6267558', 'Diamond Ring': '/_blob/ef580f1649ad89b5e268954da6ea30b2',
  'Love Potion': '/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65', 'Eternal Rose': '/_blob/734e25b54462cda990767f69381d8355',
  'Toy Bear': '/_blob/c02bc9477e447f6f71962df1fc7a399a', 'Signet Ring': '/_blob/4826a2db621709393534f8feae3d3f4a',
  'Swiss Watch': '/_blob/5efc0b426406d53e3b649c727079f26d', 'Ion Gem': '/_blob/e562d84d61312007f5108ab64cbfe6f9',
  'Precious Peach': '/_blob/923c4583ef32f1e6549c08d5a1839d4c', "Durov's Cap": '/_blob/500977bc4572974cf066e4c08b276369'
};
function rarityColor(p) {
  if (p < 5) return '#9aa3b5';
  if (p < 15) return '#5fd4ff';
  if (p < 60) return '#c77dff';
  if (p < 500) return '#ff5d73';
  return '#ffc83d';
}
// \u0426\u0435\u043D\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u0441\u0443\u0442\u043A\u0438, \u0432 00:00 \u041C\u0421\u041A (\u0432\u0435\u0441\u044C \u0434\u0435\u043D\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435)
function seeded(str) {
  var h = 2166136261;
  for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995); h ^= h >>> 15;
  return (h >>> 0) / 4294967296;
}
var DAY = Math.floor((Date.now() + 3 * 3600 * 1000) / 86400000);
function estPrice(supply) { return Math.max(1.5, Math.round(2 * Math.pow(65396 / supply, 1.1) * 100) / 100); }
function dayPrice(name, base, d) { return Math.round(base * (1 + (seeded(name + ':' + d) * 2 - 1) * 0.03) * 100) / 100; }
var CAT = {};
var CAT_LIST = RAW.map(function (r) {
  var base = r[2] || estPrice(r[1]);
  var local = IMG[r[0]] || GIFT_IMG;
  var c = { name: r[0], supply: r[1], base: base, img: window.rkThumb ? window.rkThumb(r[0], local) : local, color: rarityColor(base) };
  c.price = dayPrice(r[0], base, DAY);
  c.prev = dayPrice(r[0], base, DAY - 1);
  CAT[r[0]] = c;
  return c;
}).sort(function (a, b) { return a.price - b.price; });
function chg(c) { return (c.price / c.prev - 1) * 100; }
function chgText(c) { var v = chg(c); return (v >= 0 ? '\u25B2 ' : '\u25BC ') + Math.abs(v).toFixed(1) + '%'; }
function chgColor(c) { return chg(c) >= 0 ? '#2bd46b' : '#ff5d73'; }
function supplyText(c) { return c.supply ? c.supply.toLocaleString('ru-RU') + ' \u0448\u0442.' : '\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F'; }

var QUICK = [1.5, 2, 3, 5, 10, 20];
var RTP = 0.80, MAX_CHANCE = 0.75, MAX_PICK = 6, SHOW = 15;
var R = 112, CIRC = 2 * Math.PI * R;
var GREEN = '#2bd46b', RED = '#ff5d73';
var TICKS = (function () {
  var d = '';
  for (var i = 0; i < 72; i++) {
    var a = (i / 72) * Math.PI * 2, r1 = 142, r2 = i % 6 === 0 ? 130 : 136;
    d += 'M' + (150 + Math.sin(a) * r1).toFixed(1) + ' ' + (150 - Math.cos(a) * r1).toFixed(1) +
         ' L' + (150 + Math.sin(a) * r2).toFixed(1) + ' ' + (150 - Math.cos(a) * r2).toFixed(1) + ' ';
  }
  return d;
})();
function rkInv() { return typeof window !== 'undefined' && window.RK && window.RK.inventory ? window.RK.inventory : null; }
function loadInv() { var R = rkInv(); return R ? R.list().filter(function (u) { return CAT[u.key]; }) : startInv(); }
function startInv() {
  var keys = ['B-Day Candle', 'Lol Pop', 'Desk Calendar', 'Homemade Cake', 'Homemade Cake', 'Jingle Bells', 'Hypno Lollipop', 'Snow Globe', 'Berry Box'];
  return keys.map(function (k, i) { return { uid: 'i' + (i + 1), key: k }; });
}
function fmt(p) { return (Math.round(p * 100) / 100) + ' TON'; }
function chanceOf(own, tgt) { return Math.min(RTP * own / tgt, MAX_CHANCE); }
function giftsWord(n) {
  var m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return n + ' \u043F\u043E\u0434\u0430\u0440\u043E\u043A';
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return n + ' \u043F\u043E\u0434\u0430\u0440\u043A\u0430';
  return n + ' \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432';
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      inv: loadInv(), own: [], target: null, angle: 0, spinning: false,
      result: null, overlay: false, lastChance: 0, lastSide: 'right',
      side: 'right', fast: false, history: (function () { var S = typeof window !== 'undefined' && window.RK && window.RK.store; var v = S ? S.getJSON('rk_upg_hist', null) : null; return Array.isArray(v) ? v : []; })(), res: null, nextId: 100, q: ''
    };
    this.timer = null;
  }
  componentWillUnmount() { if (this.timer) clearTimeout(this.timer); }

  stake() {
    var s = this.state;
    var picked = s.inv.filter(function (u) { return s.own.indexOf(u.uid) !== -1; });
    if (!picked.length) return null;
    var total = 0, top = null;
    picked.forEach(function (u) { var c = CAT[u.key]; total += c.price; if (!top || c.price > top.price) top = c; });
    var name = picked.length === 1 ? CAT[picked[0].key].name : giftsWord(picked.length);
    return { price: Math.round(total * 100) / 100, name: name, color: top.color, img: top.img, count: picked.length };
  }

  spin() {
    var s = this.state;
    var st0 = this.stake();
    var tgt = s.target ? CAT[s.target] : null;
    if (!st0 || !tgt || s.spinning || tgt.price <= st0.price) return;
    var chance = chanceOf(st0.price, tgt.price);
    var start = s.side === 'left' ? 1 - chance : 0;
    var r = Math.random();
    var win = r >= start && r < start + chance;
    var base = s.angle - (s.angle % 360) + 360 * (s.fast ? 3 : 6);
    var dur = s.fast ? 900 : 3600;
    var self = this;
    this.setState({ angle: base + r * 360, spinning: true, result: null, overlay: false, lastChance: chance, lastSide: s.side });
    this.timer = setTimeout(function () {
      var st = self.state;
      var inv = st.inv.filter(function (u) { return st.own.indexOf(u.uid) === -1; });
      var nextId = st.nextId;
      var R = rkInv();
      try { if (window.RK && window.RK.track) window.RK.track({ game: 'upgrade', bet: st0.price, win: win ? tgt.price : 0, round: true }); } catch (e) {}
      if (R) { R.remove(st.own); if (win) R.add(st.target); inv = loadInv(); }
      else if (win) { inv = [{ uid: 'i' + nextId, key: st.target }].concat(inv); nextId += 1; }
      var mult = 'x' + (tgt.price / st0.price).toFixed(2);
      var history = [{ mult: mult, win: win }].concat(st.history).slice(0, 10);
      if (window.RK && window.RK.store) window.RK.store.setJSON('rk_upg_hist', history);
      self.setState({
        inv: inv, nextId: nextId, own: [], target: null, spinning: false,
        result: win ? 'win' : 'lose', overlay: true, history: history,
        res: { win: win, tgtName: tgt.name, tgtPrice: tgt.price, tgtImg: tgt.img, stakeName: st0.name, stakePrice: st0.price, stakeImg: st0.img, mult: mult }
      });
    }, dur + 150);
  }

  pickMult(m) {
    var st = this.stake();
    if (!st || this.state.spinning) return;
    var best = null, bestD = Infinity;
    CAT_LIST.forEach(function (c) {
      if (c.price <= st.price) return;
      var d = Math.abs(Math.log(c.price / st.price) - Math.log(m));
      if (d < bestD) { bestD = d; best = c.name; }
    });
    if (best) this.setState({ target: best, result: null });
  }

  targets(stake) {
    var q = this.state.q.trim().toLowerCase();
    if (q) return CAT_LIST.filter(function (c) { return c.name.toLowerCase().indexOf(q) !== -1; }).slice(0, 30);
    var min = stake ? stake.price : 5;
    var list = CAT_LIST.filter(function (c) { return stake ? c.price > min : c.price >= min; }).slice(0, SHOW);
    var t = this.state.target;
    if (t && !list.some(function (c) { return c.name === t; })) list = [CAT[t]].concat(list.slice(0, SHOW - 1));
    return list;
  }

  renderVals() {
    var self = this;
    var s = this.state;
    var stake = this.stake();
    var tgt = s.target ? CAT[s.target] : null;
    var valid = stake && tgt && tgt.price > stake.price;
    var live = valid ? chanceOf(stake.price, tgt.price) : 0;
    var showingResult = s.spinning || s.result;
    var shown = live || (showingResult ? s.lastChance : 0);
    var side = live ? s.side : (showingResult ? s.lastSide : s.side);
    var startFrac = side === 'left' ? 1 - shown : 0;
    var canSpin = live > 0 && !s.spinning;
    var full = s.own.length >= MAX_PICK;
    var arcColor = s.result === 'lose' && !live ? RED : GREEN;
    var glowColor = s.result === 'win' && !live ? 'rgba(43,212,107,0.55)' : (s.result === 'lose' && !live ? 'rgba(255,93,115,0.5)' : 'rgba(43,212,107,0.22)');

    var invSorted = s.inv.slice().sort(function (a, b) { return CAT[b.key].price - CAT[a.key].price; });
    var invList = invSorted.map(function (u) {
      var c = CAT[u.key];
      var idx = s.own.indexOf(u.uid);
      var sel = idx !== -1;
      return {
        name: c.name, color: c.color, img: c.img, priceText: fmt(c.price), selected: sel, order: idx + 1,
        chgText: chgText(c), chgColor: chgColor(c),
        border: sel ? '#ffc83d' : '#222838', pressed: sel ? 'true' : 'false',
        opacity: !sel && full ? '0.4' : '1',
        pick: function () {
          var cur = self.state;
          if (cur.spinning) return;
          var own = cur.own.slice();
          var i = own.indexOf(u.uid);
          if (i !== -1) own.splice(i, 1);
          else if (own.length < MAX_PICK) own.push(u.uid);
          else return;
          self.setState({ own: own, result: null });
        }
      };
    });

    var targetList = this.targets(stake).map(function (c) {
      var avail = !stake || c.price > stake.price;
      var sel = c.name === s.target && avail;
      var ch = stake && avail ? chanceOf(stake.price, c.price) : 0;
      return {
        name: c.name, color: c.color, img: c.img, priceText: fmt(c.price),
        chgText: chgText(c), chgColor: chgColor(c),
        chanceText: stake ? (avail ? (ch * 100).toFixed(1) + '% \xB7 x' + (c.price / stake.price).toFixed(2) : '\u0434\u0435\u0448\u0435\u0432\u043B\u0435 \u0441\u0442\u0430\u0432\u043A\u0438') : supplyText(c),
        chanceColor: stake ? (ch >= 0.4 ? GREEN : (ch >= 0.15 ? '#ffc83d' : '#ff8a5c')) : '#8a90a0',
        border: sel ? '#ffc83d' : '#222838', pressed: sel ? 'true' : 'false',
        opacity: avail ? '1' : '0.3', disabled: !avail,
        pick: function () { if (!self.state.spinning && avail) self.setState({ target: c.name, result: null }); }
      };
    });

    var quick = QUICK.map(function (m) {
      var activeMult = valid ? tgt.price / stake.price : 0;
      var near = valid && Math.abs(Math.log(activeMult) - Math.log(m)) < 0.08;
      return {
        label: 'x' + m, disabled: !stake || s.spinning,
        border: near ? '#ffc83d' : '#222838', color: stake ? (near ? '#ffc83d' : '#ffffff') : '#5a6070',
        pick: function () { self.pickMult(m); }
      };
    });

    var history = s.history.map(function (h) {
      return { mult: h.mult, bg: h.win ? 'rgba(43,212,107,0.16)' : 'rgba(255,93,115,0.16)', color: h.win ? GREEN : RED };
    });

    var res = s.res;
    return {
      ticks: TICKS,
      dash: (shown * CIRC) + ' ' + CIRC,
      arcRot: -90 + startFrac * 360,
      arcColor: arcColor,
      ringGlow: 'filter: drop-shadow(0 0 18px ' + glowColor + '); transition: filter 0.4s',
      pointerStyle: 'transform: rotate(' + s.angle + 'deg); transition: ' + (s.spinning ? 'transform ' + (s.fast ? 0.9 : 3.6) + 's cubic-bezier(0.1, 0.75, 0.12, 1)' : 'none'),
      chanceText: shown ? (shown * 100).toFixed(1) + '%' : '\u2014',
      chanceColor: s.result === 'lose' && !live ? RED : '#ffffff',
      centerSub: s.spinning ? '\u043A\u0440\u0443\u0442\u0438\u043C...' : (valid ? '\u0448\u0430\u043D\u0441 \xB7 x' + (tgt.price / stake.price).toFixed(2) : '\u0432\u044B\u0431\u0435\u0440\u0438 \u0441\u0442\u0430\u0432\u043A\u0443 \u0438 \u0446\u0435\u043B\u044C'),
      tgtImg: tgt ? tgt.img : (res && s.result ? (res.win ? res.tgtImg : res.stakeImg) : '/_blob/bb8c4faf5d5477b7abe934698601360a'),
      multShort: valid ? 'x' + (tgt.price / stake.price).toFixed(2) : '\u2014',
      ownCount: s.own.length,
      ownLabel: stake ? stake.name : '\u0412\u044B\u0431\u0435\u0440\u0438 NFT',
      ownPrice: stake ? fmt(stake.price) : '0 TON',
      tgtLabel: tgt ? tgt.name : '\u0412\u044B\u0431\u0435\u0440\u0438 \u0446\u0435\u043B\u044C',
      tgtPrice: tgt ? fmt(tgt.price) : '0 TON',
      quick: quick,
      sideRight: function () { if (!self.state.spinning) self.setState({ side: 'right' }); },
      sideLeft: function () { if (!self.state.spinning) self.setState({ side: 'left' }); },
      rightPressed: s.side === 'right' ? 'true' : 'false',
      leftPressed: s.side === 'left' ? 'true' : 'false',
      rightBg: s.side === 'right' ? '#ffc83d' : 'transparent',
      rightColor: s.side === 'right' ? '#1a1300' : '#a3a8b5',
      leftBg: s.side === 'left' ? '#ffc83d' : 'transparent',
      leftColor: s.side === 'left' ? '#1a1300' : '#a3a8b5',
      toggleFast: function () { if (!self.state.spinning) self.setState({ fast: !self.state.fast }); },
      fastPressed: s.fast ? 'true' : 'false',
      fastBorder: s.fast ? '#ffc83d' : '#1a1d27',
      fastColor: s.fast ? '#ffc83d' : '#a3a8b5',
      spin: function () { self.spin(); },
      spinDisabled: !canSpin,
      btnBg: canSpin ? '#ffc83d' : '#1d2230',
      btnColor: canSpin ? '#1a1300' : '#6c7282',
      btnShadow: canSpin ? '0 6px 24px rgba(255,200,61,0.35)' : 'none',
      btnText: s.spinning ? '\u041A\u0420\u0423\u0422\u0418\u041C...' : (valid ? '\u0410\u041F\u0413\u0420\u0415\u0419\u0414 \xB7 ' + (live * 100).toFixed(1) + '%' : '\u0410\u041F\u0413\u0420\u0415\u0419\u0414'),
      invSub: stake ? '\u0412\u044B\u0431\u0440\u0430\u043D\u043E ' + giftsWord(stake.count) + ' \u043D\u0430 ' + fmt(stake.price) : '\u0412\u044B\u0431\u0435\u0440\u0438 \u0434\u043E 6 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432',
      clearPick: function () { if (!self.state.spinning) self.setState({ own: [] }); },
      reset: function () { if (!self.state.spinning) self.setState({ inv: rkInv() ? (rkInv().reset(), loadInv()) : startInv(), own: [], target: null, result: null, lastChance: 0, overlay: false }); },
      invEmpty: s.inv.length === 0,
      invList: invList,
      q: s.q,
      onSearch: function (e) { self.setState({ q: e && e.target ? e.target.value : '' }); },
      targetSub: s.q ? '\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430' : (stake ? '\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u043F\u043E \u0446\u0435\u043D\u0435 \u043A \u0442\u0432\u043E\u0435\u0439 \u0441\u0442\u0430\u0432\u043A\u0435. \u0426\u0435\u043D\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u0434\u0435\u043D\u044C' : '\u0412\u0441\u0435 123 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438, \u0438\u0449\u0438 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E. \u0426\u0435\u043D\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u0434\u0435\u043D\u044C'),
      targetList: targetList,
      noTargets: targetList.length === 0,
      history: history,
      historyEmpty: s.history.length === 0,
      showOverlay: s.overlay && !!res,
      resTitle: res ? (res.win ? '\u041A\u0423\u0428!' : '\u041C\u0418\u041C\u041E!') : '',
      resColor: res ? (res.win ? GREEN : RED) : GREEN,
      resGlow: res ? (res.win ? 'rgba(43,212,107,0.35)' : 'rgba(255,93,115,0.3)') : 'transparent',
      resText: res ? (res.win ? '\u0415\u043D\u043E\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u043D\u0443\u043B \u0434\u0435\u043B\u043E, \u0430\u043F\u0433\u0440\u0435\u0439\u0434 ' + res.mult : '\u0421\u0433\u043E\u0440\u0435\u043B\u043E: ' + res.stakeName) : '',
      resItem: res ? (res.win ? res.tgtName : res.stakeName) : '',
      resPrice: res ? fmt(res.win ? res.tgtPrice : res.stakePrice) : '',
      resItemImg: res ? (res.win ? res.tgtImg : res.stakeImg) : '/_blob/bb8c4faf5d5477b7abe934698601360a',
      resBtn: res ? (res.win ? '\u0417\u0430\u0431\u0440\u0430\u0442\u044C' : '\u0415\u0449\u0451 \u0440\u0430\u0437') : '',
      closeResult: function () { self.setState({ overlay: false }); }
    };
  }
}
<\/script>
</body>
</html>
`;var Yp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 \u041A\u0435\u0439\u0441\u044B</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0b0d12}
a{color:#ffc83d}a:hover{color:#ffe08a}
@keyframes rkPop{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.06);opacity:1}100%{transform:scale(1)}}
@keyframes rkBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1400px; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 14px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff; overflow: hidden">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<sc-if value="{{inGrid}}" hint-placeholder-val="{{ true }}">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
</sc-if>
<sc-if value="{{inDetail}}" hint-placeholder-val="{{ false }}">
<button type="button" onClick="{{toGrid}}" aria-label="\u041A\u043E \u0432\u0441\u0435\u043C \u043A\u0435\u0439\u0441\u0430\u043C" style="width: 44px; height: 44px; border-radius: 14px; border: 0; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer; padding: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</button>
</sc-if>
<div style="font-size: 26px; font-weight: 900; font-style: italic; flex-grow: 1">CASES</div>
<div style="height: 44px; box-sizing: border-box; border-radius: 14px; background: #1a1d27; padding: 0 12px; display: flex; align-items: center; font-size: 14px; font-weight: 700; color: #ffc83d">{{balanceText}}</div>
<button type="button" onClick="{{toggleFast}}" aria-pressed="{{fastPressed}}" aria-label="\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435" style="width: 44px; height: 44px; border-radius: 14px; border: 2px solid {{fastBorder}}; background: #1a1d27; color: {{fastColor}}; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0">
<svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><path d="M8 0 L0 9 H6 L5 16 L14 6 H8Z" fill="currentColor"></path></svg>
</button>
</header>

<sc-if value="{{inGrid}}" hint-placeholder-val="{{ true }}">
<div style="display: flex; gap: 6px; overflow: hidden; align-items: center">
<span style="flex-shrink: 0; font-size: 10px; font-weight: 900; color: #2bd46b; writing-mode: vertical-rl; transform: rotate(180deg)">LIVE</span>
<sc-for list="{{liveDrops}}" as="d" hint-placeholder-count="6">
<div style="flex-shrink: 0; width: 48px; height: 48px; border-radius: 12px; background: #151821; border-bottom: 3px solid {{d.color}}; display: flex; align-items: center; justify-content: center"><img src="{{d.img}}" alt="{{d.name}}" style="width: 36px; height: 36px"></div>
</sc-for>
</div>

<div role="tablist" style="display: flex; gap: 18px; align-items: baseline">
<button type="button" role="tab" onClick="{{tabPaid}}" aria-selected="{{paidSel}}" style="border: 0; background: transparent; padding: 6px 0; font-family: Rubik, system-ui, sans-serif; font-size: 20px; font-weight: 700; cursor: pointer; color: {{paidColor}}">\u041F\u043B\u0430\u0442\u043D\u044B\u0435</button>
<button type="button" role="tab" onClick="{{tabFree}}" aria-selected="{{freeSel}}" style="border: 0; background: transparent; padding: 6px 0; font-family: Rubik, system-ui, sans-serif; font-size: 20px; font-weight: 700; cursor: pointer; color: {{freeColor}}">\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435</button>
</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">
<sc-for list="{{grid}}" as="c" hint-placeholder-count="6">
<sc-if value="{{c.hasArt}}" hint-placeholder-val="{{ true }}">
<button type="button" onClick="{{c.open}}" aria-label="{{c.name}}, {{c.priceText}}" style="position: relative; min-width: 0; border: 0; border-radius: 20px; overflow: hidden; padding: 0; cursor: pointer; background: {{c.bg}}; box-shadow: 0 6px 20px {{c.shadow}}">
<img src="{{c.art}}" alt="" style="width: 100%; display: block; aspect-ratio: 384 / 418; object-fit: cover">
</button>
</sc-if>
<sc-if value="{{c.noArt}}" hint-placeholder-val="{{ false }}">
<button type="button" onClick="{{c.open}}" style="position: relative; min-width: 0; height: 176px; border-radius: 22px; border: 1px solid {{c.edge}}; background: {{c.bg}}; overflow: hidden; padding: 0; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff; box-shadow: inset 0 -40px 50px -20px {{c.glow}}">
<div style="position: absolute; left: 10px; top: 10px; display: flex; gap: 6px; align-items: center; z-index: 2">
<span style="font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 9px; background: rgba(0,0,0,0.45); color: #ffc83d">{{c.priceText}}</span>
</div>
<sc-if value="{{c.isNew}}" hint-placeholder-val="{{ false }}">
<span style="position: absolute; left: -30px; bottom: 16px; width: 110px; transform: rotate(45deg); background: #e5383b; font-size: 10px; font-weight: 900; text-align: center; padding: 3px 0; z-index: 2">NEW</span>
</sc-if>
<div style="position: absolute; left: 0; right: 0; top: 34px; height: 130px; animation: rkBob 2.4s ease-in-out infinite">
<img src="{{c.prizeImg}}" alt="" style="position: absolute; left: 50%; top: 2px; width: 62px; height: 62px; transform: translateX(-30%) rotate(12deg); filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5))">
<svg width="150" height="110" viewBox="0 0 150 110" aria-hidden="true" style="position: absolute; left: 50%; top: 22px; transform: translateX(-50%)">
<path d="M20 40 L75 22 L130 40 L75 58Z" fill="{{c.dark}}"></path>
<path d="M20 40 L75 58 L75 106 L20 86Z" fill="{{c.color}}"></path>
<path d="M130 40 L75 58 L75 106 L130 86Z" fill="{{c.dark}}"></path>
<path d="M14 30 L72 14 L62 -2 L6 14Z" fill="{{c.color}}" transform="rotate(-14 40 20)"></path>
<path d="M44 32 L52 30 L104 46 L96 49Z" fill="#ffc83d" fill-opacity="0.9"></path>
<path d="M47 66 L55 69 L55 101 L47 98Z" fill="#ffc83d" fill-opacity="0.9"></path>
<path d="M30 66 L42 70 L36 78 L44 82 L32 84Z" fill="#ffffff" fill-opacity="0.85"></path>
<path d="M75 58 L130 40 L130 46 L75 64Z" fill="#000000" fill-opacity="0.18"></path>
</svg>
</div>
<span style="position: absolute; left: 0; right: 0; bottom: 8px; font-size: 13px; font-weight: 900; font-style: italic; text-shadow: 0 2px 6px rgba(0,0,0,0.7); z-index: 2">{{c.name}}</span>
<sc-if value="{{c.locked}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba(5,6,10,0.6); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; z-index: 3">
<svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" fill="#ffffff"></rect><path d="M8 11 V8 a4 4 0 0 1 8 0 V11" fill="none" stroke="#ffffff" stroke-width="2.2"></path></svg>
<span style="font-size: 12px; font-weight: 700">{{c.lockText}}</span>
</div>
</sc-if>
</button>
</sc-if>
</sc-for>
</div>
</sc-if>

<sc-if value="{{inDetail}}" hint-placeholder-val="{{ false }}">
<sc-if value="{{dHasArt}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; gap: 14px; align-items: stretch; border-radius: 24px; padding: 10px; background: {{dBg}}; border: 1px solid {{dEdge}}; box-shadow: inset 0 -50px 60px -20px {{dGlow}}">
<img src="{{dArt}}" alt="{{dName}}" style="width: 150px; height: 163px; border-radius: 16px; object-fit: cover; flex-shrink: 0">
<div style="display: flex; flex-direction: column; justify-content: center; gap: 6px; min-width: 0">
<div style="font-size: 24px; font-weight: 900; font-style: italic; line-height: 1.05">{{dName}}</div>
<div style="font-size: 18px; font-weight: 900; color: #ffc83d">{{dPriceText}}</div>
<div style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: #c9cdd6">\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u0440\u0438\u0437 <img src="{{dPrizeImg}}" alt="" style="width: 26px; height: 26px"></div>
</div>
</div>
</sc-if>
<sc-if value="{{dNoArt}}" hint-placeholder-val="{{ true }}">
<div style="position: relative; height: 170px; border-radius: 24px; overflow: hidden; background: {{dBg}}; border: 1px solid {{dEdge}}; box-shadow: inset 0 -50px 60px -20px {{dGlow}}">
<div style="position: absolute; right: 6px; top: 8px; width: 170px; height: 160px; animation: rkBob 2.4s ease-in-out infinite">
<img src="{{dPrizeImg}}" alt="" style="position: absolute; left: 70px; top: 0; width: 74px; height: 74px; transform: rotate(12deg); filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5))">
<svg width="170" height="125" viewBox="0 0 150 110" aria-hidden="true" style="position: absolute; left: 0; top: 30px">
<path d="M20 40 L75 22 L130 40 L75 58Z" fill="{{dDark}}"></path>
<path d="M20 40 L75 58 L75 106 L20 86Z" fill="{{dColor}}"></path>
<path d="M130 40 L75 58 L75 106 L130 86Z" fill="{{dDark}}"></path>
<path d="M14 30 L72 14 L62 -2 L6 14Z" fill="{{dColor}}" transform="rotate(-14 40 20)"></path>
<path d="M44 32 L52 30 L104 46 L96 49Z" fill="#ffc83d" fill-opacity="0.9"></path>
<path d="M47 66 L55 69 L55 101 L47 98Z" fill="#ffc83d" fill-opacity="0.9"></path>
<path d="M30 66 L42 70 L36 78 L44 82 L32 84Z" fill="#ffffff" fill-opacity="0.85"></path>
</svg>
</div>
<div style="position: relative; height: 100%; box-sizing: border-box; padding: 18px 20px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start">
<span></span>
<div style="display: flex; flex-direction: column; gap: 2px; max-width: 180px">
<div style="font-size: 26px; font-weight: 900; font-style: italic; line-height: 1.05; text-shadow: 0 3px 8px rgba(0,0,0,0.5)">{{dName}}</div>
<div style="font-size: 16px; font-weight: 900; color: #ffc83d; text-shadow: 0 2px 6px rgba(0,0,0,0.5)">{{dPriceText}}</div>
</div>
</div>
</div>

</sc-if>
<div style="position: relative; height: 128px; border-radius: 18px; background: #11141c; border: 1px solid #1d2230; overflow: hidden">
<div style="position: absolute; left: 0; top: 14px; display: flex; gap: 6px; {{stripStyle}}">
<sc-for list="{{strip}}" as="t" hint-placeholder-count="8">
<div style="flex-shrink: 0; width: 92px; height: 100px; box-sizing: border-box; border-radius: 12px; background: #181c27; border-bottom: 4px solid {{t.color}}; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; padding: 0 4px">
<img src="{{t.img}}" alt="" style="width: 50px; height: 50px">
<span style="max-width: 100%; font-size: 11px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{t.name}}</span>
<span style="font-size: 12px; font-weight: 700; color: #ffc83d">{{t.priceText}}</span>
</div>
</sc-for>
</div>
<div style="position: absolute; left: 0; top: 0; width: 60px; height: 128px; background: linear-gradient(to right, #11141c, rgba(17,20,28,0))"></div>
<div style="position: absolute; right: 0; top: 0; width: 60px; height: 128px; background: linear-gradient(to left, #11141c, rgba(17,20,28,0))"></div>
<div style="position: absolute; left: 177px; top: 0; width: 4px; height: 128px; background: #ffc83d; box-shadow: 0 0 14px rgba(255,200,61,0.8)"></div>
<svg width="20" height="12" viewBox="0 0 20 12" aria-hidden="true" style="position: absolute; left: 169px; top: 0"><path d="M0 0 H20 L10 12Z" fill="#ffc83d"></path></svg>
<svg width="20" height="12" viewBox="0 0 20 12" aria-hidden="true" style="position: absolute; left: 169px; bottom: 0"><path d="M0 12 H20 L10 0Z" fill="#ffc83d"></path></svg>
</div>

<button type="button" onClick="{{open}}" disabled="{{openDisabled}}" style="height: 60px; border: 0; border-radius: 18px; font-family: Rubik, system-ui, sans-serif; font-size: 20px; font-weight: 900; font-style: italic; letter-spacing: 0.5px; cursor: pointer; background: {{btnBg}}; color: {{btnColor}}; box-shadow: {{btnShadow}}">{{btnText}}</button>

<div style="display: flex; flex-direction: column; gap: 2px; margin-top: 6px">
<div style="font-size: 17px; font-weight: 700">\u0427\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438</div>
<div style="font-size: 12px; font-weight: 500; color: #a3a8b5">\u0428\u0430\u043D\u0441 \u0432\u044B\u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0438 \u0444\u043B\u043E\u0440-\u0446\u0435\u043D\u0430</div>
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px">
<sc-for list="{{contents}}" as="item" hint-placeholder-count="12">
<div style="position: relative; min-width: 0; background: #151821; border: 1px solid #222838; border-radius: 14px; padding: 12px 6px 10px; display: flex; flex-direction: column; align-items: center; gap: 3px; overflow: hidden">
<span style="position: absolute; left: 0; top: 0; right: 0; height: 3px; background: {{item.color}}"></span>
<img src="{{item.img}}" alt="" style="width: 48px; height: 48px">
<span style="max-width: 100%; font-size: 12px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{item.name}}</span>
<span style="font-size: 13px; font-weight: 700; color: #ffc83d">{{item.priceText}}</span>
<span style="font-size: 11px; font-weight: 700; color: #a3a8b5">{{item.chanceText}}</span>
</div>
</sc-for>
</div>
</sc-if>

<a href="Inventory.dc.html" style="text-decoration: none; display: flex; align-items: center; gap: 12px; background: #151821; border: 1px solid #222838; border-radius: 16px; padding: 12px 14px; color: #ffffff; margin-top: 4px">
<svg width="26" height="26" viewBox="0 0 22 22" aria-hidden="true"><path d="M11 2 L20 6.5 V15.5 L11 20 L2 15.5 V6.5Z M2 6.5 L11 11 L20 6.5 M11 11 V20" fill="none" stroke="#ffc83d" stroke-width="2" stroke-linejoin="round"></path></svg>
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1">
<span style="font-size: 15px; font-weight: 700">\u041C\u043E\u0439 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C</span>
<span style="font-size: 12px; color: #a3a8b5">{{invInfo}}</span>
</div>
<div style="display: flex; gap: 4px">
<sc-for list="{{loot}}" as="l" hint-placeholder-count="0"><img src="{{l.img}}" alt="" style="width: 30px; height: 30px; border-radius: 8px; background: #0b0d12"></sc-for>
</div>
<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3 L11 8 L6 13" fill="none" stroke="#a3a8b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>

<sc-if value="{{showOverlay}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba(5, 6, 10, 0.8); display: flex; justify-content: center; align-items: flex-start; padding-top: 170px">
<div role="dialog" aria-label="\u0412\u044B\u043F\u0430\u043B NFT" style="width: 320px; box-sizing: border-box; background: #151821; border: 2px solid {{resColor}}; border-radius: 28px; padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; animation: rkPop 0.45s ease-out; box-shadow: 0 0 60px {{resGlow}}">
<div style="font-size: 14px; font-weight: 700; color: #a3a8b5">{{resHead}}</div>
<img src="{{resImg}}" alt="" style="width: 120px; height: 120px">
<div style="font-size: 28px; font-weight: 900; font-style: italic; line-height: 1.05">{{resName}}</div>
<div style="display: flex; gap: 8px; align-items: center">
<span style="font-size: 20px; font-weight: 900; color: #ffc83d">{{resPrice}}</span>
<span style="font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 8px; background: {{resMultBg}}; color: {{resMultColor}}">{{resMult}}</span>
</div>
<sc-if value="{{resIsTon}}" hint-placeholder-val="{{ false }}">
<button type="button" onClick="{{creditWon}}" style="width: 100%; height: 52px; margin-top: 8px; border: 0; border-radius: 16px; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer; background: #2bd46b; color: #06210f">\u0417\u0430\u0431\u0440\u0430\u0442\u044C \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441</button>
</sc-if>
<sc-if value="{{resIsGift}}" hint-placeholder-val="{{ true }}">
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; width: 100%; margin-top: 8px">
<button type="button" onClick="{{sellWon}}" style="height: 52px; border: 0; border-radius: 16px; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer; background: #2bd46b; color: #06210f">\u041F\u0440\u043E\u0434\u0430\u0442\u044C</button>
<button type="button" onClick="{{keepWon}}" style="height: 52px; border: 2px solid #ffc83d; border-radius: 16px; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer; background: transparent; color: #ffc83d">\u0417\u0430\u0431\u0440\u0430\u0442\u044C</button>
</div>
</sc-if>
</div>
</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1400}}'>
// \u0412\u0441\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 NFT-\u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 Telegram. \u0422\u0440\u0435\u0442\u044C\u0435 \u0447\u0438\u0441\u043B\u043E \u2014 \u0444\u043B\u043E\u0440 \u0432 TON (floorprice.is, 21.10.2026),
// \u0432\u0442\u043E\u0440\u043E\u0435 \u2014 \u0442\u0438\u0440\u0430\u0436 (giftclub.app, 0 = \u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445).
// \u0412 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435 \u0446\u0435\u043D\u044B \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0441 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430 (MRKT / Portals / Fragment).
var RAW = [
  ["Plush Pepe", 2448, 6300],
  ["Algorithm Cup", 0, 1450],
  ["Intelligence Cup", 0, 1224],
  ["Heart Locket", 1305, 1189],
  ["Resistance Dog", 0, 633.1],
  ["Durov's Cap", 3029, 404],
  ["Scared Cat", 13986, 274],
  ["Precious Peach", 2112, 244.2],
  ["Heroic Helmet", 1258, 172.9],
  ["Durov's Glasses", 148, 156.1],
  ["Mighty Arm", 1769, 127.9],
  ["Loot Bag", 6429, 120.6],
  ["Astral Shard", 2889, 118],
  ["Nail Bracelet", 1832, 114.4],
  ["Westside Sign", 5186, 108.5],
  ["Perfume Bottle", 2106, 76.5],
  ["Mini Oscar", 2108, 70.3],
  ["Artisan Brick", 2852, 68],
  ["Ion Gem", 2615, 66.1],
  ["Gem Signet", 2104, 60.4],
  ["Magic Potion", 3277, 58.2],
  ["Low Rider", 6519, 57.9],
  ["Swiss Watch", 10480, 56],
  ["Sharp Tongue", 3793, 46.4],
  ["Kissed Frog", 7508, 43.5],
  ["Bonded Ring", 2847, 42.5],
  ["Vintage Cigar", 8528, 37.7],
  ["Voodoo Doll", 10752, 37],
  ["Neko Helmet", 4002, 36.5],
  ["Genie Lamp", 2623, 36],
  ["Toy Bear", 29142, 35],
  ["Signet Ring", 7099, 32.1],
  ["Diamond Ring", 8179, 31.7],
  ["Electric Skull", 4191, 28.5],
  ["Rare Bird", 3348, 27.4],
  ["Bling Binky", 1959, 26.3],
  ["Eternal Rose", 5403, 25.6],
  ["Khabib's Papakha", 3143, 23.5],
  ["Cupid Charm", 5569, 21],
  ["Lucky Locket", 0, 18.9],
  ["Sky Stilettos", 5542, 18.3],
  ["Mad Pumpkin", 6426, 17],
  ["Trapped Heart", 9566, 16.4],
  ["UFC Strike", 5984, 15.5],
  ["Snoop Cigar", 17056, 14.9],
  ["Ionic Dryer", 2455, 14.5],
  ["Love Potion", 6420, 14.1],
  ["Crystal Ball", 8004, 13.1],
  ["Flying Broom", 6536, 12.7],
  ["Valentine Box", 3559, 12.4],
  ["Skull Flower", 6856, 12.3],
  ["Record Player", 5214, 11.9],
  ["Sakura Flower", 13339, 10.8],
  ["Love Candle", 3012, 10.7],
  ["Jingle Bells", 7965, 10],
  ["Top Hat", 8191, 9.82],
  ["Hanging Star", 6488, 9.44],
  ["Berry Box", 8623, 8.96],
  ["Sleigh Bell", 3996, 8.5],
  ["Fine Pen", 0, 8.23],
  ["Bunny Muffin", 6223, 8.2],
  ["Evil Eye", 17803, 8.03],
  ["Snow Mittens", 4684, 7.91],
  ["Joyful Bundle", 3568, 7.8],
  ["Jelly Bunny", 13367, 7.63],
  ["Jolly Chimp", 13658, 6.98],
  ["Light Sword", 16012, 6.42],
  ["Surge Board", 1756, 6.24],
  ["Input Key", 13025, 6.17],
  ["Witch Hat", 30548, 6.12],
  ["Moon Pendant", 12531, 6.01],
  ["Eternal Candle", 11919, 6],
  ["Desk Calendar", 32423, 5.99],
  ["Lush Bouquet", 5797, 5.99],
  ["Snow Globe", 5979, 5.92],
  ["Santa Hat", 11705, 5.9],
  ["Spy Agaric", 28563, 5.72],
  ["Faith Amulet", 10892, 5.49],
  ["Spring Basket", 11605, 5.49],
  ["Snoop Dogg", 52945, 5.43],
  ["Restless Jar", 8729, 5.26],
  ["Pretty Posy", 4797, 5.25],
  ["Bow Tie", 8092, 5.1],
  ["Swag Bag", 19313, 5.09],
  ["Homemade Cake", 32643, 5.04],
  ["Mousse Cake", 6669, 5],
  ["Liberty Figure", 12499, 4.98],
  ["Stellar Rocket", 15504, 4.9],
  ["Cookie Heart", 12779, 4.88],
  ["Money Pot", 8661, 4.82],
  ["Jack-in-the-Box", 15807, 4.74],
  ["Clover Pin", 17449, 4.69],
  ["Hex Pot", 14095, 4.65],
  ["B-Day Candle", 23201, 4.64],
  ["Party Sparkler", 20446, 4.64],
  ["Winter Wreath", 8926, 4.5],
  ["Ginger Cookie", 16858, 4.47],
  ["Timeless Book", 6986, 4.45],
  ["Victory Medal", 13289, 4.41],
  ["Mirage Lamp", 0, 4.31],
  ["Star Notepad", 8443, 4.31],
  ["Spiced Wine", 11682, 4.21],
  ["Fresh Socks", 10667, 4.2],
  ["Mood Pack", 12462, 4.15],
  ["Holiday Drink", 5923, 4.14],
  ["Happy Brownie", 9989, 4.08],
  ["Hypno Lollipop", 8343, 4.01],
  ["Jester Hat", 11969, 3.92],
  ["Easter Egg", 25973, 3.88],
  ["Pet Snake", 10382, 3.88],
  ["Tama Gadget", 10412, 3.86],
  ["Candy Cane", 14703, 3.83],
  ["Ice Cream", 32806, 3.8],
  ["Whip Cupcake", 13270, 3.75],
  ["Big Year", 11544, 3.74],
  ["Vice Cream", 37569, 3.73],
  ["Pool Float", 12397, 3.71],
  ["Snake Box", 8755, 3.71],
  ["Instant Ramen", 21613, 3.7],
  ["Lunar Snake", 16883, 3.7],
  ["Xmas Stocking", 13526, 3.7],
  ["Chill Flame", 35999, 3.68],
  ["Lol Pop", 65396, 3.67]
];
// \u0421\u0432\u043E\u0438 \u0438\u043A\u043E\u043D\u043A\u0438-\u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0438; \u0443 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u0440\u043E\u0431\u043A\u0430-\u043F\u043E\u0434\u0430\u0440\u043E\u043A. \u0412 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435 \u2014 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u0438\u0437 Telegram.
var GIFT_IMG = '/_blob/a64ccb23ba5a5ab0f1f789ab412cf3af';
var IMG = {
  'B-Day Candle': '/_blob/ac9e83f513d62d0c7fc3250c8a2d1f89', 'Lol Pop': '/_blob/1f689ff254757e970266197964c5d390',
  'Desk Calendar': '/_blob/9b7049b84c84b25ce8e457f56c837c42', 'Hypno Lollipop': '/_blob/b4c8d4f914ed6e253c933045ab9e3461',
  'Jingle Bells': '/_blob/808ef5efdbeb6b276f70430b220f760b', 'Homemade Cake': '/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d',
  'Snow Globe': '/_blob/6e3628fac94b5266f3b64cea9c5fe7ee', 'Berry Box': '/_blob/c2c0de4f1d0a4ed1dd2df84eff4c7f73',
  'Bunny Muffin': '/_blob/45ac385132ce7b83da133306d9a330f8', 'Record Player': '/_blob/8f4c023d08704d2319e54c9872a8c46d',
  'Top Hat': '/_blob/fe01a5a2d2ff76e0192e008ed6267558', 'Diamond Ring': '/_blob/ef580f1649ad89b5e268954da6ea30b2',
  'Love Potion': '/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65', 'Eternal Rose': '/_blob/734e25b54462cda990767f69381d8355',
  'Toy Bear': '/_blob/c02bc9477e447f6f71962df1fc7a399a', 'Signet Ring': '/_blob/4826a2db621709393534f8feae3d3f4a',
  'Swiss Watch': '/_blob/5efc0b426406d53e3b649c727079f26d', 'Ion Gem': '/_blob/e562d84d61312007f5108ab64cbfe6f9',
  'Precious Peach': '/_blob/923c4583ef32f1e6549c08d5a1839d4c', "Durov's Cap": '/_blob/500977bc4572974cf066e4c08b276369'
};
function rarityColor(p) {
  if (p < 5) return '#9aa3b5';
  if (p < 15) return '#5fd4ff';
  if (p < 60) return '#c77dff';
  if (p < 500) return '#ff5d73';
  return '#ffc83d';
}
// \u0426\u0435\u043D\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u0441\u0443\u0442\u043A\u0438, \u0432 00:00 \u041C\u0421\u041A (\u0432\u0435\u0441\u044C \u0434\u0435\u043D\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435)
function seeded(str) {
  var h = 2166136261;
  for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995); h ^= h >>> 15;
  return (h >>> 0) / 4294967296;
}
var DAY = Math.floor((Date.now() + 3 * 3600 * 1000) / 86400000);
function estPrice(supply) { return Math.max(1.5, Math.round(2 * Math.pow(65396 / supply, 1.1) * 100) / 100); }
function dayPrice(name, base, d) { return Math.round(base * (1 + (seeded(name + ':' + d) * 2 - 1) * 0.03) * 100) / 100; }
var CAT = {};
var CAT_LIST = RAW.map(function (r) {
  var base = r[2] || estPrice(r[1]);
  var local = IMG[r[0]] || GIFT_IMG;
  var c = { name: r[0], supply: r[1], base: base, img: window.rkThumb ? window.rkThumb(r[0], local) : local, color: rarityColor(base) };
  c.price = dayPrice(r[0], base, DAY);
  c.prev = dayPrice(r[0], base, DAY - 1);
  CAT[r[0]] = c;
  return c;
}).sort(function (a, b) { return a.price - b.price; });
function chg(c) { return (c.price / c.prev - 1) * 100; }
function chgText(c) { var v = chg(c); return (v >= 0 ? '\u25B2 ' : '\u25BC ') + Math.abs(v).toFixed(1) + '%'; }
function chgColor(c) { return chg(c) >= 0 ? '#2bd46b' : '#ff5d73'; }
function supplyText(c) { return c.supply ? c.supply.toLocaleString('ru-RU') + ' \u0448\u0442.' : '\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F'; }

var RTP = 0.90;
var FREE_COOLDOWN = 24 * 3600 * 1000;
var CASES = [
  { id: 'c1', art: '/_blob/fcf5bf14ee8b1ae499c387610e4d1977', name: '\u041A\u0430\u0440\u043C\u0430\u043D\u043D\u0438\u043A', price: 5, color: '#2bbf5a', dark: '#1a8a3e', bg: '#10291a', glow: 'rgba(43,191,90,0.9)', edge: '#1f4a2c', opened: 2591 },
  { id: 'c2', art: '/_blob/06ce572b9077b276c1d8a7b06b5e8713', name: '\u041A\u043E\u043D\u0444\u0435\u0442\u043D\u044B\u0439', price: 10, color: '#f2c218', dark: '#b88f00', bg: '#2a240c', glow: 'rgba(242,194,24,0.9)', edge: '#4a4010', opened: 1036, isNew: true },
  { id: 'c3', art: '/_blob/9e1537bfc41c71475ce556a1aaf4884f', name: '\u041F\u0438\u0440\u0430\u0442\u0441\u043A\u0438\u0439', price: 15, color: '#2f86ff', dark: '#1a5ccc', bg: '#0f1d33', glow: 'rgba(47,134,255,0.9)', edge: '#1c3560', opened: 1554 },
  { id: 'c4', art: '/_blob/c0847d0dc5fbcb1a68d80763032f0675', name: '\u041D\u0430\u043B\u0451\u0442\u0447\u0438\u043A', price: 25, color: '#ff4d4d', dark: '#c02a2a', bg: '#2e1212', glow: 'rgba(255,77,77,0.9)', edge: '#5a2020', opened: 2591, isNew: true },
  { id: 'c5', art: '/_blob/db1a02051117bc41aa898a143cdc3d48', name: '\u041C\u0435\u0434\u0432\u0435\u0436\u0430\u0442\u043D\u0438\u043A', price: 50, color: '#ff8a1f', dark: '#c45f00', bg: '#2e1c0c', glow: 'rgba(255,138,31,0.9)', edge: '#5a3612', opened: 5181 },
  { id: 'c6', art: '/_blob/72f77fc4af6bf75c8e7d10aa33580007', name: '\u041D\u043E\u0447\u043D\u043E\u0439 \u0440\u0435\u0439\u0434', price: 100, color: '#9b5cff', dark: '#6a32d0', bg: '#1d1233', glow: 'rgba(155,92,255,0.9)', edge: '#3a2460', opened: 311 },
  { id: 'c7', art: '/_blob/b289144243be3c7e4e7176e3a0070caa', name: '\u0421\u0435\u0439\u0444', price: 250, color: '#14c8c8', dark: '#0a8c8c', bg: '#0c2a2a', glow: 'rgba(20,200,200,0.9)', edge: '#164a4a', opened: 518 },
  { id: 'c8', art: '/_blob/313d5daa64736bbfb70ecfcd97ed3141', name: '\u041A\u0440\u0451\u0441\u0442\u043D\u044B\u0439 \u0435\u043D\u043E\u0442', price: 500, color: '#ffc83d', dark: '#c79400', bg: '#2e250c', glow: 'rgba(255,200,61,0.95)', edge: '#5a4a14', opened: 10362 },
  // \u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043A\u0435\u0439\u0441: \u0440\u0430\u0437 \u0432 \u0441\u0443\u0442\u043A\u0438, \u0432\u043D\u0443\u0442\u0440\u0438 TON \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441
  { id: 'free', name: '\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439', price: 0, free: true, color: '#5fd4ff', dark: '#2fa0d0', bg: '#0c2430', glow: 'rgba(95,212,255,0.9)', edge: '#18465a', opened: 8812,
    pool: ['TON_0.1', 'TON_1'], probs: [0.99, 0.01] }
];
// \u041F\u0440\u0438\u0437\u044B-TON (\u0437\u0430\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0441\u0440\u0430\u0437\u0443 \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441, \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442)
var TON_IMG = 'assets/ton.svg';
CAT['TON_0.1'] = { name: '0.1 TON', supply: 0, base: 0.1, price: 0.1, prev: 0.1, img: TON_IMG, color: '#5fd4ff', ton: true };
CAT['TON_1'] = { name: '1 TON', supply: 0, base: 1, price: 1, prev: 1, img: TON_IMG, color: '#ffc83d', ton: true };
// \u0421\u043E\u0441\u0442\u0430\u0432 \u043A\u0435\u0439\u0441\u0430: 12 NFT \u043E\u0442 ~\xBC \u0434\u043E ~40 \u0446\u0435\u043D \u043A\u0435\u0439\u0441\u0430. \u0423 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432 \u0437\u0430\u0434\u0430\u043D \u0432\u0440\u0443\u0447\u043D\u0443\u044E (TON).
function buildPool(P) {
  var cand = CAT_LIST.filter(function (c) { return c.price >= 0.25 * P && c.price <= 40 * P; });
  var n = 12, out = [];
  for (var i = 0; i < n && i < cand.length; i++) {
    var idx = Math.round(i * (cand.length - 1) / Math.max(1, n - 1));
    if (out.indexOf(cand[idx].name) === -1) out.push(cand[idx].name);
  }
  return out;
}
CASES.forEach(function (c) {
  if (c.free) { /* pool \u0438 probs \u0437\u0430\u0434\u0430\u043D\u044B \u0432 CASES */ }
  else {
    c.pool = buildPool(c.price);
    var prices = c.pool.map(function (k) { return CAT[k].price; });
    var target = c.price * RTP;
    var ev = function (a) { var S = 0, E = 0; prices.forEach(function (p) { var w = Math.pow(p, -a); S += w; E += w * p; }); return E / S; };
    var lo = -5, hi = 12;
    for (var i = 0; i < 80; i++) { var mid = (lo + hi) / 2; if (ev(mid) > target) lo = mid; else hi = mid; }
    var a = (lo + hi) / 2, Ssum = 0;
    var w = prices.map(function (p) { var x = Math.pow(p, -a); Ssum += x; return x; });
    c.probs = w.map(function (x) { return x / Ssum; });
  }
  c.top = c.pool.reduce(function (best, k) { return !best || CAT[k].price > CAT[best].price ? k : best; }, null);
});

var TILE = 92, GAP = 6, STEP = TILE + GAP, N = 44, WIN_IDX = 38, CENTER = 179;
function caseById(id) { return CASES.filter(function (c) { return c.id === id; })[0]; }
function fmt(p) { return (Math.round(p * 100) / 100) + ' TON'; }
function roll(c) { var r = Math.random(), acc = 0; for (var i = 0; i < c.pool.length; i++) { acc += c.probs[i]; if (r < acc) return c.pool[i]; } return c.pool[c.pool.length - 1]; }
function previewStrip(c) { var s = []; for (var i = 0; i < N; i++) s.push(c.free ? roll(c) : c.pool[i % c.pool.length]); return s; }
function fmtChance(p) { var v = p * 100; return v >= 10 ? v.toFixed(1) + '%' : (v >= 1 ? v.toFixed(2) + '%' : v.toFixed(3) + '%'); }
function rkStore() { return typeof window !== 'undefined' && window.RK && window.RK.store ? window.RK.store : null; }
function getFreeAt() { var S = rkStore(); if (S) return parseInt(S.get('rk_free_at') || '0', 10) || 0; try { return parseInt(localStorage.getItem('rk_free_at') || '0', 10) || 0; } catch (e) { return 0; } }
function setFreeAt(t) { var S = rkStore(); if (S) { S.set('rk_free_at', String(t)); return; } try { localStorage.setItem('rk_free_at', String(t)); } catch (e) {} }
function hms(ms) { var s = Math.ceil(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return h + ':' + ('0' + m).slice(-2) + ':' + ('0' + x).slice(-2); }
function randomDrop() { var i = Math.floor(Math.pow(Math.random(), 2.2) * CAT_LIST.length); return CAT_LIST[i]; }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    var drops = []; for (var i = 0; i < 7; i++) drops.push(randomDrop().name);
    this.state = {
      caseId: null, tab: 'paid', balance: 500, fast: false, spinning: false,
      strip: [], offset: 0, anim: false, won: null, overlay: false, loot: [], nextId: 1,
      freeAt: getFreeAt(), now: Date.now(), drops: drops
    };
  }
  componentDidMount() {
    var self = this;
    this.iv = setInterval(function () {
      var s = self.state, upd = { now: Date.now() };
      if (Math.random() < 0.35) upd.drops = [randomDrop().name].concat(s.drops).slice(0, 7);
      self.setState(upd);
    }, 1500);
  }
  componentWillUnmount() {
    clearTimeout(this.t1); clearTimeout(this.t2); clearInterval(this.iv);
    // \u0423\u0448\u0451\u043B \u0441 \u044D\u043A\u0440\u0430\u043D\u0430 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u2014 TON \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u043C
    if (this.pendingTon) { var W = window.RK && window.RK.wallet; if (W) W.set(Math.round((W.get() + this.pendingTon) * 100) / 100); this.pendingTon = 0; }
  }

  openCase(id) {
    var c = caseById(id);
    if (!c || c.locked || this.state.spinning) return;
    this.setState({ caseId: id, strip: previewStrip(c), offset: 2 * STEP + TILE / 2 - CENTER, anim: false, overlay: false });
    if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo(0, 0);
  }
  freeLeft() { return Math.max(0, this.state.freeAt + FREE_COOLDOWN - this.state.now); }

  open() {
    var s = this.state, c = caseById(s.caseId);
    if (!c || s.spinning) return;
    if (c.free) { if (this.freeLeft() > 0) return; }
    else if (s.balance < c.price) return;
    var won = roll(c), strip = [];
    this.pendingTon = CAT[won].ton ? CAT[won].price : 0;
    for (var i = 0; i < N; i++) strip.push(i === WIN_IDX ? won : roll(c));
    var finalOffset = WIN_IDX * STEP + TILE / 2 - CENTER + (Math.random() - 0.5) * (TILE - 20);
    var dur = s.fast ? 1100 : 4800, self = this;
    var upd = { spinning: true, strip: strip, offset: 2 * STEP + TILE / 2 - CENTER, anim: false, overlay: false, won: null };
    if (c.free) { var t = Date.now(); setFreeAt(t); upd.freeAt = t; } else upd.balance = Math.round((s.balance - c.price) * 100) / 100;
    this.setState(upd);
    this.t1 = setTimeout(function () {
      self.setState({ offset: finalOffset, anim: true });
      self.t2 = setTimeout(function () { try { if (window.RK && window.RK.track) window.RK.track({ game: 'cases', bet: c.free ? 0 : c.price, win: CAT[won].price, round: true }); } catch (e) {} var fin = { spinning: false, won: { key: won, caseId: c.id }, overlay: true, drops: [won].concat(self.state.drops).slice(0, 7) };
        // TON \u0441\u0440\u0430\u0437\u0443 \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441
        if (self.pendingTon) { fin.balance = Math.round((self.state.balance + self.pendingTon) * 100) / 100; self.pendingTon = 0; }
        self.setState(fin); }, dur + 120);
    }, 40);
  }

  renderVals() {
    var self = this, s = this.state;
    var c = s.caseId ? caseById(s.caseId) : null;
    var dur = s.fast ? 1.1 : 4.8;
    var freeLeft = this.freeLeft();
    var canOpen = c && !s.spinning && (c.free ? freeLeft === 0 : s.balance >= c.price);
    var lootTotal = 0; s.loot.forEach(function (l) { lootTotal += CAT[l.key].price; });
    var won = s.won ? CAT[s.won.key] : null;
    var wonCase = s.won ? caseById(s.won.caseId) : null;
    var mult = won && wonCase && wonCase.price ? won.price / wonCase.price : 0;
    var list = CASES.filter(function (x) { return s.tab === 'free' ? x.free : !x.free; });

    return {
      balanceText: fmt(s.balance),
      toggleFast: function () { if (!self.state.spinning) self.setState({ fast: !self.state.fast }); },
      fastPressed: s.fast ? 'true' : 'false', fastBorder: s.fast ? '#ffc83d' : '#1a1d27', fastColor: s.fast ? '#ffc83d' : '#a3a8b5',
      inGrid: !c, inDetail: !!c,
      toGrid: function () { if (!self.state.spinning) self.setState({ caseId: null, overlay: false }); },
      liveDrops: s.drops.map(function (k) { var it = CAT[k]; return { name: it.name, img: it.img, color: it.color }; }),
      tabPaid: function () { self.setState({ tab: 'paid' }); }, tabFree: function () { self.setState({ tab: 'free' }); },
      paidSel: s.tab === 'paid' ? 'true' : 'false', freeSel: s.tab === 'free' ? 'true' : 'false',
      paidColor: s.tab === 'paid' ? '#ffffff' : '#6c7282', freeColor: s.tab === 'free' ? '#ffffff' : '#6c7282',
      grid: list.map(function (x) {
        var fl = x.free && !x.locked && freeLeft > 0;
        return {
          name: x.name, priceText: x.free ? '\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E' : fmt(x.price), opened: x.opened.toLocaleString('ru-RU') + ' \u043E\u0442\u043A\u0440.',
          color: x.color, dark: x.dark, bg: x.bg, glow: x.glow, edge: x.edge, isNew: !!x.isNew,
          hasArt: !!x.art, noArt: !x.art, art: x.art || '', shadow: x.glow.replace('0.9', '0.35').replace('0.95', '0.35'),
          prizeImg: CAT[x.top].img, locked: !!x.locked || fl, lockText: x.locked ? x.lockText : '\u0427\u0435\u0440\u0435\u0437 ' + hms(freeLeft),
          open: function () { if (!x.locked) self.openCase(x.id); }
        };
      }),
      dHasArt: !!(c && c.art), dNoArt: !(c && c.art), dArt: c && c.art ? c.art : '',
      dName: c ? c.name : '', dPriceText: c ? (c.free ? '\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0440\u0430\u0437 \u0432 \u0441\u0443\u0442\u043A\u0438' : fmt(c.price)) : '',
      dOpened: c ? '\u041E\u0442\u043A\u0440\u044B\u0442\u043E ' + c.opened.toLocaleString('ru-RU') + ' \u0440\u0430\u0437' : '',
      dBg: c ? c.bg : '#151821', dEdge: c ? c.edge : '#222838', dGlow: c ? c.glow : 'transparent',
      dColor: c ? c.color : '#3a3f4d', dDark: c ? c.dark : '#2a2e3a', dPrizeImg: c ? CAT[c.top].img : GIFT_IMG,
      strip: s.strip.map(function (k) { var it = CAT[k]; return { name: it.name, img: it.img, priceText: fmt(it.price), color: it.color }; }),
      stripStyle: 'transform: translateX(' + (-s.offset) + 'px); transition: ' + (s.anim ? 'transform ' + dur + 's cubic-bezier(0.08, 0.7, 0.12, 1)' : 'none'),
      open: function () { self.open(); },
      openDisabled: !canOpen,
      btnBg: canOpen ? '#ffc83d' : '#1d2230', btnColor: canOpen ? '#1a1300' : '#6c7282',
      btnShadow: canOpen ? '0 6px 24px rgba(255,200,61,0.35)' : 'none',
      btnText: !c ? '' : (s.spinning ? '\u041E\u0422\u041A\u0420\u042B\u0412\u0410\u0415\u041C...' : (c.free ? (freeLeft > 0 ? '\u0427\u0415\u0420\u0415\u0417 ' + hms(freeLeft) : '\u041E\u0422\u041A\u0420\u042B\u0422\u042C \u0411\u0415\u0421\u041F\u041B\u0410\u0422\u041D\u041E') : (s.balance >= c.price ? '\u041E\u0422\u041A\u0420\u042B\u0422\u042C \xB7 ' + fmt(c.price) : '\u041D\u0415 \u0425\u0412\u0410\u0422\u0410\u0415\u0422 TON'))),
      contents: c ? c.pool.map(function (k, i) { var it = CAT[k]; return { name: it.name, img: it.img, priceText: fmt(it.price), color: it.color, chanceText: fmtChance(c.probs[i]) }; }).reverse() : [],
      loot: s.loot.slice(0, 3).map(function (l) { var it = CAT[l.key]; return { name: it.name, img: it.img, priceText: fmt(it.price) }; }),
      invInfo: (function () { var R = typeof window !== 'undefined' && window.RK && window.RK.inventory; var n = R ? R.list().length : s.loot.length; return n ? n + ' \u0448\u0442. \xB7 \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u0432\u044B\u0432\u0435\u0441\u0442\u0438' : '\u0417\u0430\u0431\u0438\u0440\u0430\u0439 \u0434\u0440\u043E\u043F\u044B, \u043E\u043D\u0438 \u043F\u043E\u043F\u0430\u0434\u0443\u0442 \u0441\u044E\u0434\u0430'; })(),
      hasLoot: s.loot.length > 0, noLoot: s.loot.length === 0, lootTotal: fmt(lootTotal),
      sellAll: function () { var st = self.state, sum = 0; st.loot.forEach(function (l) { sum += CAT[l.key].price; }); self.setState({ loot: [], balance: Math.round((st.balance + sum) * 100) / 100 }); },
      showOverlay: s.overlay && !!won,
      resHead: wonCase ? '\u0418\u0437 \u043A\u0435\u0439\u0441\u0430 \xAB' + wonCase.name + '\xBB \u0432\u044B\u043F\u0430\u043B\u043E' : '',
      resName: won ? won.name : '', resImg: won ? won.img : GIFT_IMG, resPrice: won ? fmt(won.price) : '',
      resColor: won ? won.color : '#9aa3b5',
      resGlow: won ? (mult >= 1 || (wonCase && wonCase.free) ? 'rgba(255,200,61,0.35)' : 'rgba(0,0,0,0.4)') : 'transparent',
      resMult: won ? (wonCase && wonCase.free ? '\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E' : 'x' + mult.toFixed(2)) : '',
      resMultBg: mult >= 1 || (wonCase && wonCase.free) ? 'rgba(43,212,107,0.16)' : 'rgba(255,93,115,0.16)',
      resMultColor: mult >= 1 || (wonCase && wonCase.free) ? '#2bd46b' : '#ff5d73',
      resIsTon: !!(won && won.ton), resIsGift: !(won && won.ton),
      creditWon: function () { self.setState({ overlay: false, won: null }); },
      sellWon: function () { var st = self.state; if (!st.won) return; self.setState({ balance: Math.round((st.balance + CAT[st.won.key].price) * 100) / 100, overlay: false, won: null }); },
      keepWon: function () { var st = self.state; if (!st.won) return; if (CAT[st.won.key].ton) { self.setState({ overlay: false, won: null }); return; } if (typeof window !== 'undefined' && window.RK && window.RK.inventory) window.RK.inventory.add(st.won.key); self.setState({ loot: [{ id: st.nextId, key: st.won.key }].concat(st.loot), nextId: st.nextId + 1, overlay: false, won: null }); }
    };
  }
}
<\/script>
</body>
</html>
`;var Kp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 \u041C\u0438\u043D\u044B</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0b0d12}
a{color:#ffc83d}a:hover{color:#ffe08a}
@keyframes rkPop{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.06);opacity:1}100%{transform:scale(1)}}
@keyframes rkFlip{0%{transform:scale(.6)}70%{transform:scale(1.12)}100%{transform:scale(1)}}
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1180px; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 14px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff; overflow: hidden">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="font-size: 26px; font-weight: 900; font-style: italic; flex-grow: 1">MINES</div>
<div style="height: 44px; box-sizing: border-box; border-radius: 14px; background: #1a1d27; padding: 0 12px; display: flex; align-items: center; font-size: 14px; font-weight: 700; color: #ffc83d">{{balanceText}}</div>
</header>

<div style="position: relative; height: 96px; border-radius: 20px; overflow: hidden; background: #0b2672">
<img src="/_blob/b81dc491ff982e1892b4eeeb94570e3c" alt="" style="position: absolute; right: 0; top: 0; width: 200px; height: 96px; object-fit: cover; object-position: 30% 35%; -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 45%); mask-image: linear-gradient(to right, transparent 0%, #000 45%)">
<div style="position: relative; height: 100%; box-sizing: border-box; padding: 14px 16px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; width: 230px">
<div style="display: flex; flex-direction: column; justify-content: center; gap: 2px">
<span style="font-size: 11px; font-weight: 500; color: #b9c3e6">\u041C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u044C</span>
<span style="font-size: 26px; font-weight: 900; line-height: 1; color: {{multColor}}">{{multText}}</span>
</div>
<div style="display: flex; flex-direction: column; justify-content: center; gap: 2px">
<span style="font-size: 11px; font-weight: 500; color: #b9c3e6">\u0412\u044B\u0438\u0433\u0440\u044B\u0448</span>
<span style="font-size: 18px; font-weight: 900; line-height: 1.1; color: #ffc83d">{{winText}}</span>
</div>
</div>
</div>

<div style="display: flex; gap: 6px; overflow: hidden">
<sc-for list="{{ladder}}" as="s" hint-placeholder-count="6">
<div style="flex-shrink: 0; min-width: 52px; box-sizing: border-box; border-radius: 10px; padding: 6px 8px; background: {{s.bg}}; border: 1px solid {{s.border}}; display: flex; flex-direction: column; align-items: center; gap: 1px">
<span style="font-size: 10px; font-weight: 500; color: #8a90a0">{{s.step}}</span>
<span style="font-size: 13px; font-weight: 700; color: {{s.color}}">{{s.mult}}</span>
</div>
</sc-for>
</div>

<div style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; padding: 10px; border-radius: 22px; background: #11141c; border: 1px solid #1d2230">
<sc-for list="{{cells}}" as="c" hint-placeholder-count="25">
<button type="button" onClick="{{c.click}}" disabled="{{c.disabled}}" aria-label="{{c.label}}" style="height: 58px; border-radius: 14px; border: 0; padding: 0; display: flex; align-items: center; justify-content: center; cursor: pointer; background: {{c.bg}}; box-shadow: {{c.shadow}}; opacity: {{c.opacity}}">
<sc-if value="{{c.gem}}" hint-placeholder-val="{{ false }}">
<svg width="34" height="29" viewBox="0 0 40 34" aria-hidden="true" style="animation: rkFlip 0.28s ease-out"><path d="M8 0 L32 0 L40 11 L20 34 L0 11Z" fill="#5fd4ff"></path><path d="M8 0 L14 11 L20 0Z M20 0 L26 11 L32 0Z" fill="#a8ecff"></path><path d="M0 11 L40 11 L20 34Z" fill="#2fb4ec"></path><path d="M14 11 L20 34 L26 11Z" fill="#7fdcff"></path></svg>
</sc-if>
<sc-if value="{{c.mine}}" hint-placeholder-val="{{ false }}">
<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" style="animation: rkFlip 0.28s ease-out"><circle cx="15" cy="19" r="12" fill="#1d1f26"></circle><circle cx="11" cy="15" r="3.5" fill="#ffffff" fill-opacity="0.35"></circle><rect x="20" y="5" width="7" height="6" rx="2" fill="#4b5160" transform="rotate(35 23 8)"></rect><path d="M26 6 Q29 1 32 3" fill="none" stroke="#ffd96b" stroke-width="2" stroke-linecap="round"></path><circle cx="32" cy="3" r="2.5" fill="#ffb703"></circle></svg>
</sc-if>
<sc-if value="{{c.hidden}}" hint-placeholder-val="{{ true }}">
<span style="width: 12px; height: 12px; border-radius: 50%; background: #2c3a6e"></span>
</sc-if>
</button>
</sc-for>
</div>

<sc-if value="{{playing}}" hint-placeholder-val="{{ false }}">
<div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 8px">
<button type="button" onClick="{{randomPick}}" style="height: 60px; border-radius: 18px; border: 2px solid #2c3a6e; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer">\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u0430\u044F</button>
<button type="button" onClick="{{cashout}}" disabled="{{cashoutDisabled}}" style="height: 60px; border: 0; border-radius: 18px; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 900; font-style: italic; cursor: pointer; background: {{cashBg}}; color: {{cashColor}}; box-shadow: {{cashShadow}}">{{cashText}}</button>
</div>
</sc-if>

<sc-if value="{{notPlaying}}" hint-placeholder-val="{{ true }}">
<div style="display: flex; flex-direction: column; gap: 12px">
<div style="background: #151821; border: 1px solid #222838; border-radius: 18px; padding: 12px; display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; align-items: center; justify-content: space-between">
<span style="font-size: 13px; font-weight: 500; color: #a3a8b5">\u0421\u0442\u0430\u0432\u043A\u0430</span>
<div style="width: 170px"><label style="position: relative; height: 44px; border-radius: 12px; background: #0b0d12; border: 1px solid #222838; box-sizing: border-box; display: flex; align-items: center; cursor: text"><input type="text" inputmode="decimal" enterkeyhint="done" autocomplete="off" aria-label="\u0421\u0443\u043C\u043C\u0430 \u0441\u0442\u0430\u0432\u043A\u0438 \u0432 TON" value="{{betInput}}" onInput="{{onBetInput}}" onFocus="{{onBetFocus}}" onBlur="{{onBetBlur}}" onKeyDown="{{onBetKey}}" style="width: 100%; height: 100%; box-sizing: border-box; border: 0; outline: none; background: transparent; text-align: center; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 900; color: #ffc83d; padding: 0 38px 0 10px"><span style="position: absolute; right: 12px; font-size: 12px; font-weight: 700; color: #8a90a0; pointer-events: none">TON</span></label></div>
</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px">
<button type="button" onClick="{{betMinus}}" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #0b0d12; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 700; cursor: pointer">\u2212</button>
<button type="button" onClick="{{betPlus}}" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #0b0d12; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 700; cursor: pointer">+</button>
<button type="button" onClick="{{betHalf}}" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #0b0d12; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer">\xBD</button>
<button type="button" onClick="{{betDouble}}" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #0b0d12; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer">x2</button>
</div>
</div>
<div style="background: #151821; border: 1px solid #222838; border-radius: 18px; padding: 12px; display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; align-items: center; justify-content: space-between">
<span style="font-size: 13px; font-weight: 500; color: #a3a8b5">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0438\u043D</span>
<div style="display: flex; align-items: center; gap: 8px">
<button type="button" onClick="{{minesMinus}}" aria-label="\u041C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D" style="width: 44px; height: 44px; border-radius: 12px; border: 1px solid #222838; background: #0b0d12; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 700; cursor: pointer">\u2212</button>
<span style="font-size: 20px; font-weight: 900; min-width: 28px; text-align: center">{{mines}}</span>
<button type="button" onClick="{{minesPlus}}" aria-label="\u0411\u043E\u043B\u044C\u0448\u0435 \u043C\u0438\u043D" style="width: 44px; height: 44px; border-radius: 12px; border: 1px solid #222838; background: #0b0d12; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 700; cursor: pointer">+</button>
</div>
</div>
<div style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 6px">
<sc-for list="{{minePresets}}" as="p" hint-placeholder-count="5">
<button type="button" onClick="{{p.pick}}" aria-pressed="{{p.pressed}}" style="height: 40px; border-radius: 10px; border: 1px solid {{p.border}}; background: #0b0d12; color: {{p.color}}; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer">{{p.n}}</button>
</sc-for>
</div>
</div>
<button type="button" onClick="{{start}}" disabled="{{startDisabled}}" style="height: 60px; border: 0; border-radius: 18px; font-family: Rubik, system-ui, sans-serif; font-size: 20px; font-weight: 900; font-style: italic; cursor: pointer; background: {{startBg}}; color: {{startColor}}; box-shadow: {{startShadow}}">{{startText}}</button>
</div>
</sc-if>

<sc-if value="{{showOverlay}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba(5, 6, 10, 0.72); display: flex; justify-content: center; align-items: flex-start; padding-top: 250px">
<div role="dialog" aria-label="{{resTitle}}" style="width: 320px; box-sizing: border-box; background: #151821; border: 2px solid {{resColor}}; border-radius: 28px; padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; animation: rkPop 0.45s ease-out; box-shadow: 0 0 60px {{resGlow}}">
<img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="\u0415\u043D\u043E\u0442-\u0431\u0430\u043D\u0434\u0438\u0442" style="width: 96px; height: 96px; border-radius: 50%; object-fit: cover; border: 3px solid {{resColor}}; box-sizing: border-box">
<div style="font-size: 40px; font-weight: 900; font-style: italic; line-height: 1; color: {{resColor}}">{{resTitle}}</div>
<div style="font-size: 15px; font-weight: 500; color: #c9cdd6">{{resText}}</div>
<div style="font-size: 26px; font-weight: 900; color: #ffc83d">{{resAmount}}</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; width: 100%; margin-top: 6px">
<button type="button" onClick="{{closeView}}" style="height: 52px; border: 2px solid #2c3a6e; border-radius: 16px; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 700; cursor: pointer; background: transparent; color: #ffffff">\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u043B\u0435</button>
<button type="button" onClick="{{again}}" style="height: 52px; border: 0; border-radius: 16px; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer; background: {{resColor}}; color: #0b0d12">\u0415\u0449\u0451 \u0440\u0430\u0437</button>
</div>
</div>
</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1180}}'>
var SIZE = 25;
var RTP = 0.95;
var PRESETS = [1, 3, 5, 10, 20];

function multFor(k, m) {
  if (k <= 0) return 1;
  var p = 1;
  for (var i = 0; i < k; i++) p *= (SIZE - i) / (SIZE - m - i);
  return RTP * p;
}
function fmt(p) { return (Math.floor(p * 100) / 100) + ' TON'; }
function fmtMult(x) { return 'x' + (x >= 100 ? x.toFixed(0) : x.toFixed(2)); }
function rkTrack(o) { try { if (window.RK && window.RK.track) window.RK.track(o); } catch (e) {} }
function round2(x) { return Math.round(x * 100) / 100; }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      balance: 50, bet: 1, mines: 3, phase: 'idle',
      mineMap: [], revealed: [], hit: -1, overlay: false, res: null
    };
  }

  start() {
    var s = this.state;
    if (s.phase === 'playing' || s.bet > s.balance || !(s.bet >= 0.1)) return;
    rkTrack({ game: 'mines', bet: s.bet, round: true });
    var idx = [];
    for (var i = 0; i < SIZE; i++) idx.push(i);
    for (var j = idx.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t = idx[j]; idx[j] = idx[r]; idx[r] = t; }
    var mineMap = [];
    for (var n = 0; n < SIZE; n++) mineMap.push(false);
    for (var q = 0; q < s.mines; q++) mineMap[idx[q]] = true;
    var revealed = [];
    for (var z = 0; z < SIZE; z++) revealed.push(false);
    this.setState({ balance: round2(s.balance - s.bet), phase: 'playing', mineMap: mineMap, revealed: revealed, hit: -1, overlay: false, res: null });
  }

  safeCount() {
    return this.state.revealed.filter(function (v) { return v; }).length;
  }

  reveal(i) {
    var s = this.state;
    if (s.phase !== 'playing' || s.revealed[i]) return;
    if (s.mineMap[i]) {
      this.setState({ phase: 'lost', hit: i, overlay: true, res: { win: false, amount: s.bet, mult: multFor(this.safeCount(), s.mines) } });
      return;
    }
    var revealed = s.revealed.slice();
    revealed[i] = true;
    var k = revealed.filter(function (v) { return v; }).length;
    var self = this;
    this.setState({ revealed: revealed }, function () {
      if (k === SIZE - s.mines) self.cashout();
    });
  }

  cashout() {
    var s = this.state;
    var k = this.safeCount();
    if (s.phase !== 'playing' || k === 0) return;
    var m = multFor(k, s.mines);
    var win = Math.floor(s.bet * m * 100) / 100;
    rkTrack({ game: 'mines', win: win });
    this.setState({ phase: 'won', balance: round2(s.balance + win), overlay: true, res: { win: true, amount: win, mult: m } });
  }

  randomPick() {
    var s = this.state;
    if (s.phase !== 'playing') return;
    var free = [];
    for (var i = 0; i < SIZE; i++) if (!s.revealed[i]) free.push(i);
    if (free.length) this.reveal(free[Math.floor(Math.random() * free.length)]);
  }

  setBet(v) {
    var s = this.state;
    if (s.phase === 'playing') return;
    v = Math.max(0.1, Math.min(round2(v), Math.max(0.1, s.balance)));
    this.setState({ betStr: null, bet: round2(v) });
  }
  setMines(v) {
    if (this.state.phase === 'playing') return;
    this.setState({ mines: Math.max(1, Math.min(24, v)) });
  }

  renderVals() {
    var self = this;
    var s = this.state;
    var playing = s.phase === 'playing';
    var ended = s.phase === 'won' || s.phase === 'lost';
    var k = s.revealed.length ? this.safeCount() : 0;
    var curMult = playing || ended ? multFor(k, s.mines) : multFor(1, s.mines);
    var potential = Math.floor(s.bet * multFor(k, s.mines) * 100) / 100;

    var cells = [];
    for (var i = 0; i < SIZE; i++) {
      (function (i) {
        var rev = s.revealed[i];
        var isMine = s.mineMap[i];
        var showAll = ended;
        var gem = (rev && !isMine) || (showAll && !isMine);
        var mine = showAll && isMine;
        var ghost = showAll && !rev && i !== s.hit;
        var bg = '#1b2340', shadow = 'inset 0 -4px 0 #131a33';
        if (rev) { bg = '#163a63'; shadow = '0 0 16px rgba(95,212,255,0.35)'; }
        if (i === s.hit) { bg = '#5c1620'; shadow = '0 0 18px rgba(255,93,115,0.6)'; }
        if (playing && !rev) { bg = '#24305a'; shadow = 'inset 0 -4px 0 #18214a'; }
        cells.push({
          gem: gem, mine: mine, hidden: !gem && !mine,
          bg: bg, shadow: shadow, opacity: ghost ? '0.45' : '1',
          disabled: !playing || rev,
          label: rev ? '\u041E\u0442\u043A\u0440\u044B\u0442\u043E: \u0430\u043B\u043C\u0430\u0437' : (mine ? '\u041C\u0438\u043D\u0430' : '\u041A\u043B\u0435\u0442\u043A\u0430 ' + (i + 1)),
          click: function () { self.reveal(i); }
        });
      })(i);
    }

    var ladder = [];
    var startStep = Math.max(1, k);
    for (var st = startStep; st < startStep + 7 && st <= SIZE - s.mines; st++) {
      var isCur = playing && st === k;
      var isNext = st === k + 1;
      ladder.push({
        step: st + ' \u0448\u0430\u0433', mult: fmtMult(multFor(st, s.mines)),
        bg: isCur ? 'rgba(43,212,107,0.16)' : '#151821',
        border: isNext && (playing || s.phase === 'idle') ? '#ffc83d' : (isCur ? '#2bd46b' : '#222838'),
        color: isCur ? '#2bd46b' : (isNext ? '#ffc83d' : '#ffffff')
      });
    }

    var canStart = s.bet <= s.balance && s.bet >= 0.1;
    var res = s.res;
    return {
      balanceText: fmt(s.balance),
      multText: fmtMult(playing || ended ? multFor(k, s.mines) : curMult),
      multColor: s.phase === 'lost' ? '#ff5d73' : (k > 0 ? '#2bd46b' : '#ffffff'),
      winText: playing ? fmt(potential) : (res ? (res.win ? '+' + fmt(res.amount) : '\u2212' + fmt(res.amount)) : fmt(s.bet * multFor(1, s.mines))),
      ladder: ladder,
      cells: cells,
      playing: playing,
      notPlaying: !playing,
      randomPick: function () { self.randomPick(); },
      cashout: function () { self.cashout(); },
      cashoutDisabled: k === 0,
      cashBg: k > 0 ? '#2bd46b' : '#1d2230',
      cashColor: k > 0 ? '#06210f' : '#6c7282',
      cashShadow: k > 0 ? '0 6px 24px rgba(43,212,107,0.35)' : 'none',
      cashText: k > 0 ? '\u0417\u0410\u0411\u0420\u0410\u0422\u042C ' + fmt(potential) : '\u041E\u0422\u041A\u0420\u041E\u0419 \u041A\u041B\u0415\u0422\u041A\u0423',
      betText: fmt(s.bet),
      betInput: s.betStr != null ? s.betStr : s.bet.toFixed(2),
      onBetInput: function (e) {
        var v = String((e && e.target && e.target.value) || '').replace(',', '.').replace(/[^0-9.]/g, '');
        var parts = v.split('.'); if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
        if (parts.length > 1 && parts[1].length > 2) v = parts[0] + '.' + parts[1].slice(0, 2);
        var n = parseFloat(v);
        self.setState({ betStr: v, bet: isNaN(n) ? 0 : Math.round(n * 100) / 100 });
      },
      onBetFocus: function (e) { try { e.target.select(); } catch (x) {} },
      onBetBlur: function () { var b = self.state.bet; if (!(b >= 0.1)) b = 0.1; self.setState({ betStr: null, bet: Math.round(b * 100) / 100 }); },
      onBetKey: function (e) { if (e && e.key === 'Enter' && e.target && e.target.blur) e.target.blur(); },
      betMinus: function () { self.setBet(self.state.bet - 0.5); },
      betPlus: function () { self.setBet(self.state.bet + 0.5); },
      betHalf: function () { self.setBet(self.state.bet / 2); },
      betDouble: function () { self.setBet(self.state.bet * 2); },
      mines: s.mines,
      minesMinus: function () { self.setMines(self.state.mines - 1); },
      minesPlus: function () { self.setMines(self.state.mines + 1); },
      minePresets: PRESETS.map(function (n) {
        var sel = n === s.mines;
        return { n: n, pressed: sel ? 'true' : 'false', border: sel ? '#ffc83d' : '#222838', color: sel ? '#ffc83d' : '#ffffff', pick: function () { self.setMines(n); } };
      }),
      start: function () { self.start(); },
      startDisabled: !canStart,
      startBg: canStart ? '#ffc83d' : '#1d2230',
      startColor: canStart ? '#1a1300' : '#6c7282',
      startShadow: canStart ? '0 6px 24px rgba(255,200,61,0.35)' : 'none',
      startText: canStart ? '\u0418\u0413\u0420\u0410\u0422\u042C \xB7 ' + fmt(s.bet) : '\u041D\u0415 \u0425\u0412\u0410\u0422\u0410\u0415\u0422 TON',
      showOverlay: s.overlay && !!res,
      resTitle: res ? (res.win ? '\u041A\u0423\u0428!' : '\u0411\u0423\u041C!') : '',
      resColor: res ? (res.win ? '#2bd46b' : '#ff5d73') : '#2bd46b',
      resGlow: res ? (res.win ? 'rgba(43,212,107,0.35)' : 'rgba(255,93,115,0.3)') : 'transparent',
      resText: res ? (res.win ? '\u0415\u043D\u043E\u0442 \u0432\u044B\u043D\u0435\u0441 \u0434\u043E\u0431\u044B\u0447\u0443 \u0441 ' + fmtMult(res.mult) : '\u0415\u043D\u043E\u0442 \u043D\u0430\u0441\u0442\u0443\u043F\u0438\u043B \u043D\u0430 \u043C\u0438\u043D\u0443') : '',
      resAmount: res ? (res.win ? '+' + fmt(res.amount) : '\u2212' + fmt(res.amount)) : '',
      closeView: function () { self.setState({ overlay: false }); },
      again: function () { self.setState({ overlay: false }, function () { self.start(); }); }
    };
  }
}
<\/script>
</body>
</html>
`;var Zp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 PvP \u0410\u0440\u0435\u043D\u0430</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0b0d12}
a{color:#ffc83d}a:hover{color:#ffe08a}
@keyframes rkSheet{0%{transform:translateY(100%)}100%{transform:translateY(0)}}
@keyframes rkFloat{0%{transform:translateY(0) scale(.6);opacity:0}15%{opacity:1;transform:translateY(-20px) scale(1.1)}100%{transform:translateY(-230px) scale(1);opacity:0}}
@keyframes rkDot{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,.6)}50%{box-shadow:0 0 0 7px rgba(255,255,255,0)}}
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1250px; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 12px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff; overflow: hidden">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1">
<div style="font-size: 24px; font-weight: 900; font-style: italic; line-height: 1">PVP \u0410\u0420\u0415\u041D\u0410</div>
<div style="font-size: 11px; font-weight: 500; color: #2bd46b; white-space: nowrap">\u25CF {{online}} \u043E\u043D\u043B\u0430\u0439\u043D \xB7 <span style="color: #ffc83d">{{balanceText}}</span></div>
</div>
<button type="button" onClick="{{toggleHistory}}" aria-pressed="{{historyPressed}}" style="height: 44px; border-radius: 14px; border: 1px solid {{historyBorder}}; background: #1a1d27; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; padding: 0 12px; display: flex; align-items: center; gap: 6px; cursor: pointer">
<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.8"></circle><path d="M8 4.5 V8 L10.5 9.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>
\u0418\u0441\u0442\u043E\u0440\u0438\u044F
</button>
</header>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
<div style="height: 40px; border-radius: 12px; background: #151821; border: 1px solid #222838; display: flex; align-items: center; justify-content: space-between; padding: 0 12px; font-size: 13px; font-weight: 700">
<span style="color: #ffc83d">{{bestWin}}</span><span style="font-size: 10px; padding: 3px 6px; border-radius: 6px; background: #e0218a">\u041B\u0423\u0427\u0428\u0410\u042F</span>
</div>
<div style="height: 40px; border-radius: 12px; background: #151821; border: 1px solid #222838; display: flex; align-items: center; justify-content: space-between; padding: 0 12px; font-size: 13px; font-weight: 700">
<span style="color: #ffc83d">{{lastWin}}</span><span style="font-size: 10px; padding: 3px 6px; border-radius: 6px; background: #3a4157">\u041F\u041E\u0421\u041B\u0415\u0414\u041D\u042F\u042F</span>
</div>
</div>

<div style="height: 40px; border-radius: 12px; background: #151821; border: 1px solid #3a1530; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: center; font-size: 14px; font-weight: 700">
<span style="text-align: center; border-right: 1px solid #3a1530">{{giftsCount}} \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432</span>
<span style="text-align: center; color: #ffc83d">{{potText}}</span>
</div>

<div style="position: relative; width: 358px; height: 358px; border-radius: 24px; overflow: hidden; background: {{arenaBg}}">
<div style="position: absolute; left: 0; top: 0; width: 358px; height: 358px; {{camStyle}}">
<svg width="358" height="358" viewBox="0 0 358 358" aria-hidden="true" style="position: absolute; left: 0; top: 0">
<sc-for list="{{regions}}" as="r" hint-placeholder-count="2">
<polygon points="{{r.pts}}" fill="{{r.color}}" stroke="#0b0d12" stroke-opacity="0.35" stroke-width="1.5"></polygon>
</sc-for>
</svg>
<sc-for list="{{avatars}}" as="a" hint-placeholder-count="2">
<div style="position: absolute; box-sizing: border-box; border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center; font-weight: 900; color: #ffffff; left: {{a.x}}px; top: {{a.y}}px; width: {{a.s}}px; height: {{a.s}}px; font-size: {{a.fs}}px; background: {{a.bg}}; border: {{a.bw}}px solid rgba(255,255,255,0.9); box-shadow: 0 6px 18px rgba(0,0,0,0.3)">
<sc-if value="{{a.hasPhoto}}" hint-placeholder-val="{{ false }}"><img src="{{a.photo}}" data-av="1" referrerpolicy="no-referrer" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{a.noPhoto}}" hint-placeholder-val="{{ true }}">{{a.initial}}</sc-if>
</div>
</sc-for>
<sc-if value="{{showBall}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; width: 0; height: 0; {{ballStyle}}">
<span style="position: absolute; left: 50%; top: -30px; transform: translateX(-50%); white-space: nowrap; font-size: 11px; font-weight: 700; color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.6)">@{{ballOwner}}</span>
<div style="position: absolute; left: -9px; top: -9px; width: 18px; height: 18px; border-radius: 50%; background: rgba(255,255,255,0.35); border: 2px solid #ffffff; box-sizing: border-box; display: flex; align-items: center; justify-content: center; animation: rkDot 1s infinite">
<span style="width: 6px; height: 6px; border-radius: 50%; background: #ffffff"></span>
</div>
</div>
</sc-if>
</div>

<sc-if value="{{isWaiting}}" hint-placeholder-val="{{ true }}">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; background: #151821">
<svg width="358" height="358" viewBox="0 0 358 358" aria-hidden="true" style="position: absolute; left: 0; top: 0; opacity: 0.12">
<circle cx="60" cy="70" r="22" fill="none" stroke="#ffffff" stroke-width="3"></circle><path d="M160 48 L184 92 H136Z" fill="none" stroke="#ffffff" stroke-width="3"></path><rect x="250" y="50" width="42" height="42" fill="none" stroke="#ffffff" stroke-width="3"></rect>
<path d="M60 160 L84 204 H36Z" fill="none" stroke="#ffffff" stroke-width="3"></path><rect x="140" y="162" width="42" height="42" fill="none" stroke="#ffffff" stroke-width="3"></rect><circle cx="270" cy="183" r="22" fill="none" stroke="#ffffff" stroke-width="3"></circle>
<rect x="40" y="262" width="42" height="42" fill="none" stroke="#ffffff" stroke-width="3"></rect><circle cx="161" cy="283" r="22" fill="none" stroke="#ffffff" stroke-width="3"></circle><path d="M270 260 L294 304 H246Z" fill="none" stroke="#ffffff" stroke-width="3"></path>
</svg>
<span style="position: relative; font-size: 22px; font-weight: 500; color: #c9cdd6">{{waitText}}</span>
</div>
</sc-if>

<sc-for list="{{floaters}}" as="f" hint-placeholder-count="0">
<div style="position: absolute; bottom: 60px; width: 36px; height: 36px; left: {{f.x}}px; animation: rkFloat 1.8s ease-out forwards"><img src="{{f.icon}}" alt="" style="width: 36px; height: 36px"></div>
</sc-for>

<div style="position: absolute; left: 12px; right: 12px; bottom: 12px; height: 36px; border-radius: 10px; background: rgba(255,255,255,0.16); display: flex; align-items: center; justify-content: space-between; padding: 0 14px; font-size: 13px; font-weight: 500; color: #ffffff">
<span>\u0418\u0433\u0440\u043E\u043A\u0438: {{playersCount}}/32</span>
<span>{{statusText}}</span>
</div>
</div>

<div role="group" aria-label="\u0420\u0435\u0430\u043A\u0446\u0438\u0438" style="display: flex; gap: 6px">
<sc-for list="{{reactions}}" as="re" hint-placeholder-count="5">
<button type="button" onClick="{{re.send}}" aria-label="{{re.label}}" style="width: 44px; height: 44px; border-radius: 12px; border: 0; background: transparent; padding: 0; cursor: pointer; display: flex; align-items: center; justify-content: center"><img src="{{re.icon}}" alt="" style="width: 26px; height: 26px; opacity: 0.8"></button>
</sc-for>
</div>

<div style="background: #151821; border: 1px solid #222838; border-radius: 18px; padding: 12px; display: flex; flex-direction: column; gap: 12px">
<div style="display: grid; grid-template-columns: 44px 44px minmax(0, 1fr); gap: 8px">
<button type="button" onClick="{{modeTon}}" aria-pressed="{{tonPressed}}" aria-label="\u0421\u0442\u0430\u0432\u043A\u0430 TON" style="height: 44px; border-radius: 12px; border: 1px solid {{tonModeBorder}}; background: {{tonModeBg}}; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M3 5 H17 L10 18Z" fill="#ffc83d"></path><path d="M3 5 L10 18 L17 5 M10 5 V18" fill="none" stroke="#1a1300" stroke-width="1.4" stroke-linejoin="round"></path></svg>
</button>
<button type="button" onClick="{{modeGift}}" aria-pressed="{{giftPressed}}" aria-label="\u0421\u0442\u0430\u0432\u043A\u0430 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u043C" style="height: 44px; border-radius: 12px; border: 1px solid {{giftModeBorder}}; background: {{giftModeBg}}; color: #ffffff; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0">
<svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true"><rect x="2" y="7" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect><rect x="1" y="4" width="16" height="4" rx="1.5" fill="currentColor"></rect><path d="M9 4 V17" stroke="currentColor" stroke-width="2"></path></svg>
</button>
<button type="button" onClick="{{mainAction}}" disabled="{{mainDisabled}}" style="height: 44px; border-radius: 12px; border: 0; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 700; cursor: pointer; background: {{mainBg}}; color: {{mainColor}}">{{mainText}}</button>
</div>
<sc-if value="{{hasErr}}" hint-placeholder-val="{{ false }}">
<div style="font-size: 12px; color: #ff5d73; text-align: center">{{errText}}</div>
</sc-if>
<sc-if value="{{isTonMode}}" hint-placeholder-val="{{ true }}">
<div style="display: grid; grid-template-columns: 44px minmax(0, 1fr) 44px; gap: 8px; padding-top: 12px; border-top: 1px solid #222838">
<button type="button" onClick="{{betMinus}}" aria-label="\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443" style="height: 44px; border-radius: 12px; border: 0; background: #1d2230; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 20px; cursor: pointer">\u2212</button>
<label style="position: relative; height: 44px; border-radius: 12px; background: #0b0d12; border: 0; box-sizing: border-box; display: flex; align-items: center; cursor: text"><input type="text" inputmode="decimal" enterkeyhint="done" autocomplete="off" aria-label="\u0421\u0443\u043C\u043C\u0430 \u0441\u0442\u0430\u0432\u043A\u0438 \u0432 TON" value="{{betInput}}" onInput="{{onBetInput}}" onFocus="{{onBetFocus}}" onBlur="{{onBetBlur}}" onKeyDown="{{onBetKey}}" style="width: 100%; height: 100%; box-sizing: border-box; border: 0; outline: none; background: transparent; text-align: center; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 900; color: #ffc83d; padding: 0 38px 0 10px"><span style="position: absolute; right: 12px; font-size: 12px; font-weight: 700; color: #8a90a0; pointer-events: none">TON</span></label>
<button type="button" onClick="{{betPlus}}" aria-label="\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443" style="height: 44px; border-radius: 12px; border: 0; background: #1d2230; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 20px; cursor: pointer">+</button>
</div>
</sc-if>
<sc-if value="{{isGiftMode}}" hint-placeholder-val="{{ false }}">
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; padding-top: 12px; border-top: 1px solid #222838">
<sc-for list="{{gifts}}" as="g" hint-placeholder-count="4">
<button type="button" onClick="{{g.pick}}" aria-pressed="{{g.pressed}}" style="min-width: 0; background: #0b0d12; border: 2px solid {{g.border}}; border-radius: 12px; padding: 8px 4px; display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff">
<img src="{{g.img}}" alt="" style="width: 40px; height: 40px">
<span style="max-width: 100%; font-size: 10px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{g.name}}</span>
<span style="font-size: 11px; font-weight: 700; color: #ffc83d">{{g.priceText}}</span>
</button>
</sc-for>
</div>
<sc-if value="{{noGifts}}" hint-placeholder-val="{{ false }}">
<div style="font-size: 13px; color: #8a90a0; text-align: center">\u041F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435 \u043D\u0435\u0442</div>
</sc-if>
</sc-if>
</div>

<sc-if value="{{showPlayers}}" hint-placeholder-val="{{ true }}">
<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px">
<span style="display: flex; flex-direction: column; gap: 2px"><span style="font-size: 20px; font-weight: 500">\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 ({{playersCount}})</span><span style="font-size: 11px; color: #8a90a0">\u0422\u0451\u043C\u043D\u0430\u044F \u0437\u043E\u043D\u0430 RACKOON \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 5% \u043F\u043E\u043B\u044F</span></span>
<span style="font-size: 11px; padding: 4px 8px; border-radius: 8px; background: #151821; color: #a3a8b5">\u0418\u0433\u0440\u0430 #{{gameId}}</span>
</div>
<div style="display: flex; flex-direction: column; gap: 8px">
<sc-for list="{{players}}" as="p" hint-placeholder-count="2">
<div style="background: #151821; border: 1px solid {{p.border}}; border-radius: 14px; padding: 10px 12px; display: flex; flex-direction: column; gap: 8px">
<div style="display: flex; align-items: center; gap: 10px">
<div style="width: 32px; height: 32px; border-radius: 10px; background: {{p.avBg}}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 900; flex-shrink: 0; overflow: hidden">
<sc-if value="{{p.hasPhoto}}" hint-placeholder-val="{{ false }}"><img src="{{p.photo}}" data-av="1" referrerpolicy="no-referrer" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{p.noPhoto}}" hint-placeholder-val="{{ true }}">{{p.initial}}</sc-if>
</div>
<span style="flex-grow: 1; min-width: 0; font-size: 14px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{p.name}}</span>
<span style="font-size: 11px; font-weight: 700; padding: 3px 7px; border-radius: 7px; background: #0b0d12; color: #c9cdd6">{{p.chance}}</span>
<span style="font-size: 13px; font-weight: 700; color: #ffc83d">{{p.stakeText}}</span>
</div>
<div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap">
<sc-if value="{{p.hasTon}}" hint-placeholder-val="{{ false }}"><span style="font-size: 12px; font-weight: 700; padding: 5px 9px; border-radius: 8px; background: #0b0d12; color: #ffc83d">{{p.tonText}}</span></sc-if>
<sc-for list="{{p.giftImgs}}" as="gi" hint-placeholder-count="0"><img src="{{gi.img}}" alt="{{gi.name}}" style="width: 30px; height: 30px; border-radius: 8px; background: #0b0d12"></sc-for>
</div>
</div>
</sc-for>
</div>
</sc-if>

<sc-if value="{{showHistory}}" hint-placeholder-val="{{ false }}">
<div role="dialog" aria-label="\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0433\u0440" style="position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 45; background: #0b0d12; overflow-y: auto; -webkit-overflow-scrolling: touch">
<div style="max-width: 390px; margin: 0 auto; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; align-items: center; gap: 10px; height: 48px">
<button type="button" onClick="{{toggleHistory}}" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E" style="width: 44px; height: 44px; border-radius: 14px; border: 0; background: #1a1d27; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</button>
<div style="font-size: 24px; font-weight: 700; flex-grow: 1">\u0418\u0441\u0442\u043E\u0440\u0438\u044F</div>
<span style="font-size: 12px; color: #8a90a0">{{historyCount}} \u0438\u0433\u0440</span>
</div>
<div style="display: flex; flex-direction: column; gap: 8px">
<sc-for list="{{history}}" as="h" hint-placeholder-count="3">
<div style="background: #151821; border: 1px solid #222838; border-radius: 14px; padding: 10px 12px; display: flex; flex-direction: column; gap: 8px">
<div style="display: flex; justify-content: space-between; font-size: 11px; color: #8a90a0"><span style="padding: 2px 6px; border-radius: 6px; background: #0b0d12">\u0418\u0433\u0440\u0430 #{{h.id}}</span><span>{{h.time}}</span></div>
<div style="display: flex; align-items: center; gap: 10px">
<div style="width: 30px; height: 30px; border-radius: 10px; background: {{h.avBg}}; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; flex-shrink: 0">{{h.initial}}</div>
<span style="flex-grow: 1; min-width: 0; font-size: 14px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{h.name}}</span>
<span style="font-size: 11px; font-weight: 700; padding: 3px 7px; border-radius: 7px; background: #0b0d12; color: #c9cdd6">{{h.chance}}</span>
<span style="font-size: 13px; font-weight: 700; color: #ffc83d">{{h.win}}</span>
</div>
<div style="display: flex; gap: 6px; align-items: center">
<sc-if value="{{h.hasTon}}" hint-placeholder-val="{{ false }}"><span style="font-size: 12px; font-weight: 700; padding: 5px 9px; border-radius: 8px; background: #0b0d12; color: #ffc83d">{{h.tonText}}</span></sc-if>
<sc-for list="{{h.giftImgs}}" as="gi" hint-placeholder-count="0"><img src="{{gi}}" alt="" style="width: 28px; height: 28px; border-radius: 8px; background: #0b0d12"></sc-for>
</div>
</div>
</sc-for>
</div>
</div>
</div>
</sc-if>

<sc-if value="{{showWinner}}" hint-placeholder-val="{{ false }}">
<div style="position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, 0.55); display: flex; flex-direction: column; justify-content: flex-end">
<div role="dialog" aria-label="\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C" style="width: 100%; max-width: 390px; margin: 0 auto; box-sizing: border-box; background: #151821; border-radius: 24px 24px 0 0; padding: 20px 16px 24px; display: flex; flex-direction: column; gap: 14px; animation: rkSheet 0.35s ease-out">
<div style="display: flex; justify-content: space-between; align-items: center">
<span style="font-size: 20px; font-weight: 500">\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C</span>
<span style="font-size: 11px; padding: 4px 8px; border-radius: 8px; background: #0b0d12; color: #a3a8b5">\u0418\u0433\u0440\u0430 #{{winGameId}}</span>
</div>
<div style="display: flex; align-items: center; gap: 10px; background: #0b0d12; border: 1px solid {{winBorder}}; border-radius: 14px; padding: 12px">
<div style="width: 36px; height: 36px; border-radius: 10px; background: {{winAvBg}}; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 900; overflow: hidden; flex-shrink: 0">
<sc-if value="{{winHasPhoto}}" hint-placeholder-val="{{ false }}"><img src="{{winPhoto}}" data-av="1" referrerpolicy="no-referrer" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{winNoPhoto}}" hint-placeholder-val="{{ true }}">{{winInitial}}</sc-if>
</div>
<span style="flex-grow: 1; font-size: 15px; font-weight: 700">{{winName}}</span>
<span style="font-size: 11px; font-weight: 700; padding: 3px 7px; border-radius: 7px; background: #151821; color: #c9cdd6">{{winChance}}</span>
<span style="font-size: 14px; font-weight: 900; color: #ffc83d">{{winAmount}}</span>
</div>
<div style="font-size: 12px; color: #8a90a0; text-align: center">\u0411\u0430\u043D\u043A {{winPot}} \xB7 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F 7% \u0441 \u0432\u044B\u0438\u0433\u0440\u044B\u0448\u0430</div>
<button type="button" onClick="{{closeWinner}}" style="height: 52px; border: 0; border-radius: 14px; font-family: Rubik, system-ui, sans-serif; font-size: 16px; font-weight: 700; cursor: pointer; background: #ffc83d; color: #1a1300">\u041E\u043A</button>
</div>
</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1250}}'>
var FEE = 0.07, S = 358;
var GIFTS = {
  cake: { name: 'Homemade Cake', price: 5.04, img: '/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d' },
  globe: { name: 'Snow Globe', price: 5.92, img: '/_blob/6e3628fac94b5266f3b64cea9c5fe7ee' },
  record: { name: 'Record Player', price: 11.9, img: '/_blob/8f4c023d08704d2319e54c9872a8c46d' },
  rose: { name: 'Eternal Rose', price: 25.6, img: '/_blob/734e25b54462cda990767f69381d8355' },
  bear: { name: 'Toy Bear', price: 35, img: '/_blob/c02bc9477e447f6f71962df1fc7a399a' },
  lpotion: { name: 'Love Potion', price: 14.1, img: '/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65' },
  bells: { name: 'Jingle Bells', price: 10, img: '/_blob/808ef5efdbeb6b276f70430b220f760b' },
  signet: { name: 'Signet Ring', price: 32.1, img: '/_blob/4826a2db621709393534f8feae3d3f4a' }
};
if (window.rkThumb) Object.keys(GIFTS).forEach(function (k) { GIFTS[k].img = window.rkThumb(GIFTS[k].name, GIFTS[k].img); });
// \u0420\u0435\u0430\u043A\u0446\u0438\u0438: \u0441\u0432\u043E\u0438 \u0438\u043A\u043E\u043D\u043A\u0438 (\u043E\u0433\u043E\u043D\u044C, \u0441\u043C\u0435\u0445, \u0437\u043B\u043E\u0441\u0442\u044C, \u0441\u0435\u0440\u0434\u0446\u0435, \u0441\u0430\u043B\u044E\u0442) \u2014 \u0438\u0445 \u0432\u0438\u0434\u044F\u0442 \u0432\u0441\u0435 \u043D\u0430 \u0430\u0440\u0435\u043D\u0435
var REACTIONS = [
  { label: '\u041E\u0433\u043E\u043D\u044C', icon: '/_blob/34af5661e80ecf394b0a48aeeb28ab6c' },
  { label: '\u0421\u043C\u0435\u0448\u043D\u043E', icon: '/_blob/7629870dfcd56d08701d6a71de1e83df' },
  { label: '\u0417\u043B\u043E\u0441\u0442\u044C', icon: '/_blob/f5a9ceb49eb8c4c03e26914bcd1e2576' },
  { label: '\u0421\u0435\u0440\u0434\u0446\u0435', icon: '/_blob/89d4ee9117e73bee099492a4ce5c5498' },
  { label: '\u0421\u0430\u043B\u044E\u0442', icon: '/_blob/c22eeb9eb2c04b336c2c7f989a2a93a7' }
];

function r2(x) { return Math.round(x * 100) / 100; }
function rkTrack(o) { try { if (window.RK && window.RK.track) window.RK.track(o); } catch (e) {} }
function NET() { return window.RK && window.RK.net; }
function isMe(uid) { var n = NET(); return !!(n && n.isMe(uid)); }
function giftPrice(k) { return GIFTS[k] ? GIFTS[k].price : 0; }
function fmt(x) { return (Math.floor(x * 100) / 100).toFixed(2) + ' TON'; }
function stakeOf(p) { var s = p.ton; p.gifts.forEach(function (k) { s += giftPrice(k); }); return r2(s); }

// \u0410\u0440\u0435\u043D\u0430: \u0443\u0447\u0430\u0441\u0442\u043A\u0438 \u043D\u0430\u0440\u0435\u0437\u0430\u044E\u0442\u0441\u044F \u0434\u0438\u0430\u0433\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u043E\u0442 \u043F\u0440\u0430\u0432\u043E\u0433\u043E \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u0443\u0433\u043B\u0430.
// \u0421\u0430\u043C\u0430\u044F \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u2014 \u0442\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0432 \u0443\u0433\u043B\u0443, \u0441\u0430\u043C\u0430\u044F \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u2014 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.
// \u041F\u043B\u043E\u0449\u0430\u0434\u044C \u0443\u0447\u0430\u0441\u0442\u043A\u0430 = \u0434\u043E\u043B\u044F \u0438\u0433\u0440\u043E\u043A\u0430 \u0432 \u0431\u0430\u043D\u043A\u0435. \u0422\u043E\u0447\u043A\u0443 \u043D\u0430 \u043F\u043E\u043B\u0435 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 (\u043E\u0434\u043D\u0430 \u0434\u043B\u044F \u0432\u0441\u0435\u0445).
function depthForArea(a) { var A = S * S; return a <= A / 2 ? Math.sqrt(2 * a) : 2 * S - Math.sqrt(2 * (A - a)); }
function regionPts(d) {
  if (d <= 0) return '';
  if (d <= S) return S + ',0 ' + (S - d) + ',0 ' + S + ',' + d;
  return S + ',0 0,0 0,' + (d - S) + ' ' + (2 * S - d) + ',' + S + ' ' + S + ',' + S;
}
function depthOf(x, y) { return (S - x) + y; }
// \u0417\u043E\u043D\u0430 \u043A\u0430\u0437\u0438\u043D\u043E \u043D\u0430 \u0430\u0440\u0435\u043D\u0435: \u043E\u0442\u043A\u0440\u044B\u0442\u043E \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 HOUSE \u043E\u0442 \u043F\u043E\u043B\u044F. \u0415\u0441\u043B\u0438 \u0442\u043E\u0447\u043A\u0430 \u0443\u043F\u0430\u043B\u0430 \u0432 \u043D\u0435\u0451 \u2014 \u0431\u0430\u043D\u043A \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u0442 RACKOON.
var HOUSE = 0.05;
function withHouse(players) {
  if (!players.length) return players;
  var pot = 0; players.forEach(function (p) { pot += stakeOf(p); });
  if (pot <= 0) return players;
  return players.concat([{ id: 'house', name: 'RACKOON', house: true, me: false, ton: Math.round(pot * HOUSE / (1 - HOUSE) * 100) / 100, gifts: [], color: '#1d2230' }]);
}
// \u041F\u043E\u0440\u044F\u0434\u043E\u043A \u043F\u043E\u043B\u043E\u0441 \u2014 \u043A\u0430\u043A \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 (\u043F\u043E \u0441\u0442\u0430\u0432\u043A\u0435, \u043F\u0440\u0438 \u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u0435 \u2014 \u043F\u043E id \u0438\u0433\u0440\u043E\u043A\u0430)
function bandsFor(players) {
  var list = players.map(function (p) { return { p: p, v: stakeOf(p) }; }).filter(function (b) { return b.v > 0; })
    .sort(function (a, b) { return a.v - b.v || (a.p.id < b.p.id ? -1 : a.p.id > b.p.id ? 1 : 0); });
  var total = 0; list.forEach(function (b) { total += b.v; });
  var acc = 0;
  list.forEach(function (b, i) {
    b.d1 = depthForArea(acc / total * S * S);
    acc += b.v;
    b.d2 = i === list.length - 1 ? 2 * S : depthForArea(acc / total * S * S);
    b.share = b.v / total;
  });
  return list;
}
function timeOf(t) { var d = new Date(t + 3 * 3600 * 1000); var mo = ['\u044F\u043D\u0432.', '\u0444\u0435\u0432\u0440.', '\u043C\u0430\u0440.', '\u0430\u043F\u0440.', '\u043C\u0430\u044F', '\u0438\u044E\u043D.', '\u0438\u044E\u043B.', '\u0430\u0432\u0433.', '\u0441\u0435\u043D\u0442.', '\u043E\u043A\u0442.', '\u043D\u043E\u044F\u0431.', '\u0434\u0435\u043A.'][d.getUTCMonth()]; return d.getUTCDate() + ' ' + mo + ' ' + ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2); }
function playersOf(r) {
  return (r ? r.players : []).map(function (p) { return { id: p.uid, name: p.name, photo: p.photo, me: isMe(p.uid), ton: p.ton, gifts: p.gifts, color: p.color }; });
}

// \u0420\u0430\u0443\u043D\u0434\u044B \u0432\u0435\u0434\u0451\u0442 \u0441\u0435\u0440\u0432\u0435\u0440: \u043D\u0430 \u0430\u0440\u0435\u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0436\u0438\u0432\u044B\u0435 \u0438\u0433\u0440\u043E\u043A\u0438
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      rs: null, phase: 'wait', now: Date.now(), conn: false, err: '', sending: false,
      players: [], spunN: null, doneN: null,
      balance: 50, bet: 0.5, mode: 'ton', inv: ['cake', 'globe', 'record', 'rose'], pickGift: null,
      ball: { x: S / 2, y: S / 2 }, ballDur: 0, frozen: null, cam: false,
      winner: null, showWinner: false, view: 'players', floaters: [], fid: 0
    };
    this.timers = []; this.offs = []; this.betN = null;
  }
  componentDidMount() {
    var self = this, net = NET();
    if (net) {
      this.offs.push(net.on('pvp', function (m) { self.onRound(m); }));
      this.offs.push(net.on('pvp.ok', function (m) {
        rkTrack({ game: 'pvp', bet: r2((m.ton || 0) + giftPrice(m.gift)), round: self.betN !== m.n });
        self.betN = m.n;
        self.setState({ sending: false, err: '' });
      }));
      this.offs.push(net.on('pvp.err', function (m) {
        var s = self.state, upd = { sending: false, err: m.msg || '\u041E\u0448\u0438\u0431\u043A\u0430' };
        if (m.gift) upd.inv = s.inv.concat([m.gift]); else if (m.ton) upd.balance = r2(s.balance + Number(m.ton));
        self.setState(upd);
      }));
      this.offs.push(net.on('pvp.react', function (m) { self.floater(m.i); }));
      this.offs.push(net.on('status', function () { self.setState({ conn: net.connected }); }));
      net.sub('pvp');
      this.state.conn = net.connected;
    }
    this.iv = setInterval(function () { self.tick(); }, 250);
  }
  componentWillUnmount() { clearInterval(this.iv); this.timers.forEach(clearTimeout); this.offs.forEach(function (f) { f(); }); var net = NET(); if (net) net.unsub('pvp'); }
  later(fn, ms) { this.timers.push(setTimeout(fn, ms)); }

  tick() {
    var s = this.state, net = NET(), now = net ? net.now() : Date.now();
    var upd = { now: now, conn: !!(net && net.connected) };
    if (s.floaters.length) upd.floaters = s.floaters.filter(function (f) { return Date.now() - f.t < 1800; });
    this.setState(upd);
  }

  onRound(r) {
    var s = this.state, net = NET(), now = net ? net.now() : Date.now();
    var upd = { rs: r, phase: r.phase, players: playersOf(r) };
    if (!s.rs || s.rs.n !== r.n) {
      // \u041D\u043E\u0432\u044B\u0439 \u0440\u0430\u0443\u043D\u0434
      this.timers.forEach(clearTimeout); this.timers = [];
      upd.frozen = null; upd.cam = false; upd.ball = { x: S / 2, y: S / 2 }; upd.ballDur = 0;
      if (s.showWinner && s.winner && !s.winner.me) { upd.showWinner = false; upd.winner = null; }
    }
    this.setState(upd);
    if ((r.phase === 'spin' || r.phase === 'result') && this.state.spunN !== r.n) {
      this.setState({ spunN: r.n });
      this.spin(r, now - r.spinAt > 1500 || r.phase === 'result');
    }
    if (r.phase === 'result' && this.state.doneN !== r.n && this.state.spunN === r.n && this.quietN === r.n) this.finish(r, true);
  }

  spin(r, late) {
    var self = this, players = playersOf(r);
    var bands = bandsFor(withHouse(players));
    if (late) {
      // \u041E\u0442\u043A\u0440\u044B\u043B \u044D\u043A\u0440\u0430\u043D \u043F\u043E\u0441\u0440\u0435\u0434\u0438 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448\u0430 \u2014 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0438\u0442\u043E\u0433
      this.quietN = r.n;
      this.setState({ frozen: bands, cam: false, ball: { x: r.point.x, y: r.point.y }, ballDur: 0 });
      if (r.phase === 'result') this.finish(r, true);
      return;
    }
    var path = [], t = 80;
    for (var j = 0; j < 10; j++) path.push({ x: 15 + Math.random() * (S - 30), y: 15 + Math.random() * (S - 30), d: 520 - j * 15 });
    path.push({ x: r.point.x, y: r.point.y, d: 1100 });
    this.setState({ frozen: bands, cam: true, ball: { x: S / 2, y: S / 2 }, ballDur: 0 });
    path.forEach(function (pt) {
      self.later(function () { self.setState({ ball: { x: pt.x, y: pt.y }, ballDur: pt.d }); }, t);
      t += pt.d;
    });
    this.later(function () { self.finish(r, false); }, t + 900);
  }

  finish(r, quiet) {
    if (this.state.doneN === r.n) return;
    var w = r.winner; if (!w) return;
    var meIn = (r.players || []).some(function (p) { return isMe(p.uid); });
    var upd = { cam: false, doneN: r.n };
    if (!quiet || meIn) {
      upd.showWinner = true;
      upd.winner = { name: isMe(w.uid) ? '\u0422\u044B' : w.name, photo: isMe(w.uid) ? ((window.RK && window.RK.user && window.RK.user.photo_url) || w.photo) : w.photo, me: isMe(w.uid), house: !!w.house, color: w.color, chance: w.chance, win: w.win, pot: w.pot, gameId: r.gameId };
    }
    // \u0432\u044B\u0438\u0433\u0440\u044B\u0448 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 (\u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u043C \u0438 \u0441\u0430\u043C \u043F\u043E\u043F\u0430\u0434\u0430\u0435\u0442 \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441)
    this.setState(upd);
  }

  join(ton, gift) {
    var s = this.state, net = NET();
    if (!net || !net.connected || (s.phase !== 'wait' && s.phase !== 'count') || s.sending) return false;
    net.send({ t: 'pvp.join', ton: ton, gift: gift });
    return true;
  }
  mainAction() {
    var s = this.state;
    if (s.mode === 'ton') {
      if (s.bet > s.balance || !(s.bet >= 0.1)) return;
      if (this.join(s.bet, null)) this.setState({ balance: r2(s.balance - s.bet), sending: true });
    } else {
      if (!s.pickGift) return;
      var k = s.pickGift;
      if (this.join(0, k)) { var inv = s.inv.slice(); inv.splice(inv.indexOf(k), 1); this.setState({ inv: inv, pickGift: null, sending: true }); }
    }
  }
  floater(i) {
    var s = this.state;
    if (!REACTIONS[i]) return;
    var f = { id: s.fid, t: Date.now(), x: 20 + Math.random() * 300, icon: REACTIONS[i].icon };
    this.setState({ floaters: s.floaters.concat([f]).slice(-8), fid: s.fid + 1 });
  }
  react(i) { var net = NET(); if (net && net.connected) net.send({ t: 'pvp.react', i: i }); else this.floater(i); }

  renderVals() {
    var self = this, s = this.state, r = s.rs, net = NET();
    var bands = s.frozen || bandsFor(withHouse(s.players));
    var total = 0; s.players.forEach(function (p) { total += stakeOf(p); });
    var totalAll = 0; bands.forEach(function (b) { totalAll += b.v; });
    var giftsCount = 0; s.players.forEach(function (p) { giftsCount += p.gifts.length; });
    var joinable = s.conn && (s.phase === 'wait' || s.phase === 'count');
    var remain = r && s.phase === 'count' ? Math.max(0, (r.countEnd - s.now) / 1000) : 0;
    var myPhoto = (window.RK && window.RK.user && window.RK.user.photo_url) || '';
    var photoOf = function (p) { return p.me ? (myPhoto || p.photo || '') : (p.photo || ''); };

    var regions = bands.slice().reverse().map(function (b) { return { pts: regionPts(Math.min(b.d2, 2 * S)), color: b.p.color }; });
    var avatars = bands.map(function (b) {
      var dm, size;
      if (b.d1 === 0 && bands.length > 1) { dm = b.d2 * 2 / 3; size = b.d2 * 0.5; }
      else if (bands.length === 1) { dm = S; size = 150; }
      else { dm = (b.d1 + b.d2) / 2; size = (b.d2 - b.d1) * 0.62; }
      if (b === bands[bands.length - 1] && bands.length > 1) { dm = (b.d1 + 2 * S) / 2; size = Math.min(150, (2 * S - b.d1) * 0.45); }
      size = Math.max(16, Math.min(150, size));
      var cx = S - dm / 2, cy = dm / 2;
      cx = Math.min(S - size / 2 - 4, Math.max(size / 2 + 4, cx)); cy = Math.min(S - size / 2 - 4, Math.max(size / 2 + 4, cy));
      var ph = b.p.house ? '' : photoOf(b.p);
      return { x: (cx - size / 2).toFixed(1), y: (cy - size / 2).toFixed(1), s: size.toFixed(0), fs: (size * 0.42).toFixed(0), bw: size > 60 ? 4 : 2, bg: 'rgba(0,0,0,0.22)', hasPhoto: !!ph, noPhoto: !ph, photo: ph, initial: b.p.name.charAt(0).toUpperCase() };
    });

    var bd = depthOf(s.ball.x, s.ball.y), owner = '';
    bands.forEach(function (b) { if (bd >= b.d1 && bd < b.d2) owner = b.p.me ? '\u0442\u044B' : b.p.name; });
    var scale = 1.9;
    var tx = S / 2 - s.ball.x * scale, ty = S / 2 - s.ball.y * scale;
    tx = Math.min(0, Math.max(S - S * scale, tx)); ty = Math.min(0, Math.max(S - S * scale, ty));
    var dur = s.ballDur;

    var players = s.players.slice().sort(function (a, b) { return stakeOf(b) - stakeOf(a); }).map(function (p) {
      var st = stakeOf(p), ph = photoOf(p);
      return {
        name: p.me ? '\u0422\u044B' : p.name, initial: p.name.charAt(0).toUpperCase(), avBg: p.color, hasPhoto: !!ph, noPhoto: !ph, photo: ph,
        border: p.me ? '#ffc83d' : '#222838', chance: totalAll ? (st / totalAll * 100).toFixed(2) + '%' : '\u2014', stakeText: st.toFixed(2),
        hasTon: p.ton > 0, tonText: p.ton.toFixed(2),
        giftImgs: p.gifts.filter(function (k) { return GIFTS[k]; }).map(function (k) { return { img: GIFTS[k].img, name: GIFTS[k].name }; })
      };
    });

    var hist = r ? r.hist : [];
    var best = 0; hist.forEach(function (h) { best = Math.max(best, parseFloat(h.win)); });
    var w = s.winner;
    var meIn = s.players.some(function (p) { return p.me; });
    var canTon = joinable && !s.sending && s.bet <= s.balance;
    var mainText = !s.conn ? '\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438' : (!joinable ? '\u0418\u0434\u0451\u0442 \u0438\u0433\u0440\u0430' : (s.sending ? '\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C...' : (s.mode === 'ton' ? (s.balance < s.bet ? '\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441' : (meIn ? '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443' : '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443')) : (s.pickGift ? '\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A' : '\u0412\u044B\u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u0430\u0440\u043E\u043A'))));
    var mainOn = joinable && !s.sending && (s.mode === 'ton' ? canTon : !!s.pickGift);
    var waitText = !s.conn ? '\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443...' : (s.players.length === 1 ? '\u0416\u0434\u0451\u043C \u0432\u0442\u043E\u0440\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u0430' : '\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0438\u0433\u0440\u043E\u043A\u043E\u0432');

    return {
      meAvatar: myPhoto || '/_blob/661884b648dd965ea69af44ea8c7ee95',
      online: net && net.online ? net.online : 0, balanceText: fmt(s.balance),
      bestWin: best.toFixed(2) + ' TON', lastWin: hist.length ? hist[0].win + ' TON' : '\u2014',
      giftsCount: giftsCount, potText: fmt(total), playersCount: s.players.length,
      regions: regions, avatars: avatars, arenaBg: bands.length ? bands[bands.length - 1].p.color : '#151821',
      camStyle: s.cam
        ? 'transform-origin: 0 0; transform: translate(' + tx.toFixed(1) + 'px, ' + ty.toFixed(1) + 'px) scale(' + scale + '); transition: transform ' + Math.max(400, dur) + 'ms cubic-bezier(0.45, 0, 0.55, 1)'
        : 'transform-origin: 0 0; transform: translate(0px, 0px) scale(1); transition: transform 0.6s ease',
      showBall: s.phase === 'spin' || s.phase === 'result',
      ballStyle: 'left: ' + s.ball.x.toFixed(1) + 'px; top: ' + s.ball.y.toFixed(1) + 'px; transition: left ' + dur + 'ms cubic-bezier(0.45, 0, 0.55, 1), top ' + dur + 'ms cubic-bezier(0.45, 0, 0.55, 1)',
      ballOwner: owner || '...',
      isWaiting: s.players.length === 0, waitText: waitText,
      statusText: s.phase === 'count' ? '\u041D\u0430\u0447\u0430\u043B\u043E 00:' + ('0' + Math.ceil(remain)).slice(-2) : (s.phase === 'wait' ? waitText : (s.phase === 'spin' ? '\u0420\u043E\u0437\u044B\u0433\u0440\u044B\u0448...' : '\u0418\u0433\u0440\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430')),
      floaters: s.floaters.map(function (f) { return { x: f.x.toFixed(0), icon: f.icon }; }),
      reactions: REACTIONS.map(function (re, i) { return { label: re.label, icon: re.icon, send: function () { self.react(i); } }; }),
      modeTon: function () { self.setState({ mode: 'ton' }); },
      modeGift: function () { self.setState({ mode: 'gift' }); },
      tonPressed: s.mode === 'ton' ? 'true' : 'false', giftPressed: s.mode === 'gift' ? 'true' : 'false',
      tonModeBorder: s.mode === 'ton' ? '#ffc83d' : '#222838', tonModeBg: s.mode === 'ton' ? '#2a2410' : '#0b0d12',
      giftModeBorder: s.mode === 'gift' ? '#ffc83d' : '#222838', giftModeBg: s.mode === 'gift' ? '#2a2410' : '#0b0d12',
      isTonMode: s.mode === 'ton', isGiftMode: s.mode === 'gift',
      mainAction: function () { self.mainAction(); }, mainDisabled: !mainOn,
      mainBg: mainOn ? '#ffc83d' : '#3a3420', mainColor: mainOn ? '#1a1300' : '#8a8060', mainText: mainText,
      hasErr: !!s.err, errText: s.err,
      betText: s.bet.toFixed(2) + ' TON',
      betInput: s.betStr != null ? s.betStr : s.bet.toFixed(2),
      onBetInput: function (e) {
        var v = String((e && e.target && e.target.value) || '').replace(',', '.').replace(/[^0-9.]/g, '');
        var parts = v.split('.'); if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
        if (parts.length > 1 && parts[1].length > 2) v = parts[0] + '.' + parts[1].slice(0, 2);
        var n = parseFloat(v);
        self.setState({ betStr: v, bet: isNaN(n) ? 0 : Math.round(n * 100) / 100 });
      },
      onBetFocus: function (e) { try { e.target.select(); } catch (x) {} },
      onBetBlur: function () { var b = self.state.bet; if (!(b >= 0.1)) b = 0.1; self.setState({ betStr: null, bet: Math.round(b * 100) / 100 }); },
      onBetKey: function (e) { if (e && e.key === 'Enter' && e.target && e.target.blur) e.target.blur(); },
      betMinus: function () { self.setState({ betStr: null, bet: r2(Math.max(0.1, self.state.bet - 0.1)) }); },
      betPlus: function () { self.setState({ betStr: null, bet: r2(Math.min(Math.max(0.1, self.state.balance), self.state.bet + 0.1)) }); },
      gifts: s.inv.map(function (k) { var g = GIFTS[k]; var sel = s.pickGift === k; return { name: g.name, img: g.img, priceText: g.price + ' TON', pressed: sel ? 'true' : 'false', border: sel ? '#ffc83d' : '#222838', pick: function () { self.setState({ pickGift: sel ? null : k }); } }; }),
      noGifts: s.inv.length === 0,
      toggleHistory: function () { self.setState({ view: self.state.view === 'history' ? 'players' : 'history' }); try { if (window.scrollTo) window.scrollTo(0, 0); } catch (e) {} },
      historyPressed: s.view === 'history' ? 'true' : 'false', historyBorder: s.view === 'history' ? '#ffc83d' : '#1a1d27',
      showPlayers: true, showHistory: s.view === 'history', historyCount: hist.length,
      gameId: r ? r.gameId : '\u2014', players: players,
      history: hist.map(function (h) { var mine = isMe(h.uid); return { id: h.id, name: mine ? '\u0422\u044B' : h.name, chance: h.chance, win: h.win, time: timeOf(h.time), avBg: h.av, initial: h.name.charAt(0).toUpperCase(), hasTon: h.ton > 0, tonText: h.ton.toFixed(2), giftImgs: (h.gifts || []).filter(function (k) { return GIFTS[k]; }).map(function (k) { return GIFTS[k].img; }) }; }),
      showWinner: s.showWinner && !!w,
      winGameId: w ? w.gameId : '', winHasPhoto: !!(w && w.photo && !w.house), winNoPhoto: !(w && w.photo && !w.house), winPhoto: w && w.photo ? w.photo : '',
      winInitial: w ? w.name.charAt(0).toUpperCase() : '', winAvBg: w ? w.color : '#222838', winName: w ? w.name : '',
      winBorder: w && w.me ? '#2bd46b' : '#222838', winChance: w ? w.chance : '', winAmount: w ? (w.house ? '\u0431\u0430\u043D\u043A \u043A\u0430\u0437\u0438\u043D\u043E' : w.win.toFixed(2) + ' TON') : '', winPot: w ? fmt(w.pot) : '',
      closeWinner: function () { self.setState({ showWinner: false, winner: null }); }
    };
  }
}
<\/script>
</body>
</html>
`;var Vp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 \u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0b0d12}
a{color:#ffc83d}a:hover{color:#ffe08a}
@keyframes rkSheet{0%{transform:translateY(100%)}100%{transform:translateY(0)}}
@keyframes rkToast{0%{transform:translateY(-20px);opacity:0}15%{transform:translateY(0);opacity:1}85%{opacity:1}100%{opacity:0}}
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1100px; box-sizing: border-box; padding: 20px 16px 120px; display: flex; flex-direction: column; gap: 14px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="font-size: 24px; font-weight: 900; font-style: italic; flex-grow: 1">\u0418\u041D\u0412\u0415\u041D\u0422\u0410\u0420\u042C</div>
<div style="height: 44px; box-sizing: border-box; border-radius: 14px; background: #1a1d27; padding: 0 12px; display: flex; align-items: center; font-size: 14px; font-weight: 700; color: #ffc83d">{{balanceText}}</div>
</header>

<sc-if value="{{showToast}}" hint-placeholder-val="{{ false }}">
<div role="status" style="position: fixed; left: 0; right: 0; margin: 0 auto; top: 16px; z-index: 60; width: 340px; box-sizing: border-box; border-radius: 14px; background: #123d22; border: 1px solid #2bd46b; padding: 12px 14px; font-size: 14px; font-weight: 700; text-align: center; animation: rkToast 2.6s ease forwards">{{toastText}}</div>
</sc-if>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
<div style="background: #151821; border: 1px solid #222838; border-radius: 16px; padding: 12px 14px; display: flex; flex-direction: column; gap: 2px">
<span style="font-size: 12px; color: #a3a8b5">\u041F\u043E\u0434\u0430\u0440\u043A\u043E\u0432</span>
<span style="font-size: 22px; font-weight: 900">{{count}}</span>
</div>
<div style="background: #151821; border: 1px solid #222838; border-radius: 16px; padding: 12px 14px; display: flex; flex-direction: column; gap: 2px">
<span style="font-size: 12px; color: #a3a8b5">\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E \u0444\u043B\u043E\u0440\u0443</span>
<span style="font-size: 22px; font-weight: 900; color: #ffc83d">{{totalText}}</span>
</div>
</div>

<sc-if value="{{hasItems}}" hint-placeholder-val="{{ true }}">
<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px">
<div role="group" aria-label="\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430" style="display: flex; gap: 4px; background: #151821; border-radius: 12px; padding: 4px">
<button type="button" onClick="{{sortNew}}" aria-pressed="{{newPressed}}" style="height: 36px; border: 0; border-radius: 9px; padding: 0 12px; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; background: {{newBg}}; color: {{newColor}}">\u041D\u043E\u0432\u044B\u0435</button>
<button type="button" onClick="{{sortPrice}}" aria-pressed="{{pricePressed}}" style="height: 36px; border: 0; border-radius: 9px; padding: 0 12px; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; background: {{priceBg}}; color: {{priceColor}}">\u0414\u043E\u0440\u043E\u0433\u0438\u0435</button>
</div>
<button type="button" onClick="{{toggleAll}}" style="height: 44px; border: 0; background: transparent; color: #ffc83d; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; padding: 0 4px">{{allText}}</button>
</div>

<div style="font-size: 12px; color: #8a90a0">\u041D\u0430\u0436\u043C\u0438 \u043D\u0430 \u043F\u043E\u0434\u0430\u0440\u043E\u043A, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0435\u0433\u043E \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438</div>

<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px">
<sc-for list="{{items}}" as="it" hint-placeholder-count="9">
<button type="button" onClick="{{it.toggle}}" aria-pressed="{{it.pressed}}" style="position: relative; min-width: 0; background: #151821; border: 2px solid {{it.border}}; border-radius: 14px; padding: 12px 6px 10px; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff; overflow: hidden">
<span style="position: absolute; left: 0; top: 0; right: 0; height: 3px; background: {{it.color}}"></span>
<span style="position: absolute; top: 7px; right: 7px; width: 20px; height: 20px; box-sizing: border-box; border-radius: 6px; border: 2px solid {{it.checkBorder}}; background: {{it.checkBg}}; display: flex; align-items: center; justify-content: center">
<sc-if value="{{it.selected}}" hint-placeholder-val="{{ false }}"><svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6 L5 9 L10 3" fill="none" stroke="#1a1300" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></sc-if>
</span>
<sc-if value="{{it.isNew}}" hint-placeholder-val="{{ false }}"><span style="position: absolute; top: 8px; left: 7px; font-size: 9px; font-weight: 900; padding: 2px 5px; border-radius: 5px; background: #2bd46b; color: #06210f">NEW</span></sc-if>
<img src="{{it.img}}" alt="" style="width: 56px; height: 56px">
<span style="max-width: 100%; font-size: 12px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{it.name}}</span>
<span style="font-size: 13px; font-weight: 700; color: #ffc83d">{{it.priceText}}</span>
</button>
</sc-for>
</div>
</sc-if>

<sc-if value="{{empty}}" hint-placeholder-val="{{ false }}">
<div style="background: #151821; border: 1px solid #222838; border-radius: 20px; padding: 28px 20px; display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center">
<img src="{{meAvatar}}" referrerpolicy="no-referrer" alt="" style="width: 84px; height: 84px; border-radius: 50%; object-fit: cover; border: 3px solid #ffc83d">
<div style="font-size: 18px; font-weight: 700">\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u043F\u0443\u0441\u0442</div>
<div style="font-size: 13px; color: #a3a8b5">\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0439 \u043A\u0435\u0439\u0441\u044B \u0438 \u0432\u044B\u0438\u0433\u0440\u044B\u0432\u0430\u0439 \u0432 \u0438\u0433\u0440\u0430\u0445, \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u043E\u044F\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0437\u0434\u0435\u0441\u044C</div>
<a href="Cases.dc.html" style="text-decoration: none; height: 48px; padding: 0 22px; border-radius: 14px; background: #ffc83d; color: #1a1300; display: flex; align-items: center; font-size: 15px; font-weight: 900">\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0435\u0439\u0441\u044B</a>
</div>
</sc-if>

<sc-if value="{{hasSelection}}" hint-placeholder-val="{{ false }}">
<div style="position: fixed; left: 0; right: 0; bottom: 0; z-index: 40; display: flex; justify-content: center; padding: 12px 16px 20px; background: linear-gradient(to top, #0b0d12 70%, rgba(11,13,18,0))">
<div style="width: 100%; max-width: 358px; display: grid; grid-template-columns: minmax(0, 1fr) 2fr; gap: 8px">
<button type="button" onClick="{{withdraw}}" style="height: 56px; border-radius: 16px; border: 2px solid #2c3244; background: #151821; color: #a3a8b5; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer">\u0412\u044B\u0432\u0435\u0441\u0442\u0438</button>
<button type="button" onClick="{{askSell}}" style="height: 56px; border: 0; border-radius: 16px; background: #2bd46b; color: #06210f; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer; box-shadow: 0 6px 24px rgba(43,212,107,0.35)">\u041F\u0440\u043E\u0434\u0430\u0442\u044C {{selCount}} \xB7 {{selTotal}}</button>
</div>
</div>
</sc-if>

<sc-if value="{{showConfirm}}" hint-placeholder-val="{{ false }}">
<div style="position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, 0.65); display: flex; flex-direction: column; justify-content: flex-end">
<div role="dialog" aria-label="\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436\u0438" style="width: 100%; max-width: 390px; margin: 0 auto; box-sizing: border-box; background: #151821; border-radius: 24px 24px 0 0; padding: 22px 16px 24px; display: flex; flex-direction: column; gap: 14px; animation: rkSheet 0.3s ease-out">
<div style="font-size: 20px; font-weight: 700">\u041F\u0440\u043E\u0434\u0430\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043A\u0438?</div>
<div style="font-size: 14px; color: #c9cdd6">{{confirmText}}</div>
<div style="display: flex; gap: 6px; flex-wrap: wrap">
<sc-for list="{{confirmItems}}" as="ci" hint-placeholder-count="3">
<div style="width: 52px; height: 52px; border-radius: 12px; background: #0b0d12; display: flex; align-items: center; justify-content: center"><img src="{{ci.img}}" alt="{{ci.name}}" style="width: 40px; height: 40px"></div>
</sc-for>
<sc-if value="{{confirmMore}}" hint-placeholder-val="{{ false }}"><div style="width: 52px; height: 52px; border-radius: 12px; background: #0b0d12; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #a3a8b5">+{{confirmMoreN}}</div></sc-if>
</div>
<div style="display: flex; justify-content: space-between; align-items: center; background: #0b0d12; border-radius: 14px; padding: 14px">
<span style="font-size: 14px; color: #a3a8b5">\u041F\u043E\u043B\u0443\u0447\u0438\u0448\u044C \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441</span>
<span style="font-size: 20px; font-weight: 900; color: #2bd46b">+{{selTotal}}</span>
</div>
<div style="font-size: 12px; color: #8a90a0">\u041F\u043E\u0434\u0430\u0440\u043A\u0438 \u043F\u0440\u043E\u0434\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0435\u043C\u0443 \u0444\u043B\u043E\u0440\u0443. \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u043D\u0435\u043B\u044C\u0437\u044F.</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
<button type="button" onClick="{{cancelSell}}" style="height: 52px; border-radius: 14px; border: 2px solid #2c3244; background: transparent; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 700; cursor: pointer">\u041E\u0442\u043C\u0435\u043D\u0430</button>
<button type="button" onClick="{{confirmSell}}" style="height: 52px; border: 0; border-radius: 14px; background: #2bd46b; color: #06210f; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer">\u041F\u0440\u043E\u0434\u0430\u0442\u044C</button>
</div>
</div>
</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1100}}'>
// \u0412\u0441\u0435 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 NFT-\u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 Telegram. \u0422\u0440\u0435\u0442\u044C\u0435 \u0447\u0438\u0441\u043B\u043E \u2014 \u0444\u043B\u043E\u0440 \u0432 TON (floorprice.is, 21.10.2026),
// \u0432\u0442\u043E\u0440\u043E\u0435 \u2014 \u0442\u0438\u0440\u0430\u0436 (giftclub.app, 0 = \u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445).
// \u0412 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435 \u0446\u0435\u043D\u044B \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0441 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430 (MRKT / Portals / Fragment).
var RAW = [
  ["Plush Pepe", 2448, 6300],
  ["Algorithm Cup", 0, 1450],
  ["Intelligence Cup", 0, 1224],
  ["Heart Locket", 1305, 1189],
  ["Resistance Dog", 0, 633.1],
  ["Durov's Cap", 3029, 404],
  ["Scared Cat", 13986, 274],
  ["Precious Peach", 2112, 244.2],
  ["Heroic Helmet", 1258, 172.9],
  ["Durov's Glasses", 148, 156.1],
  ["Mighty Arm", 1769, 127.9],
  ["Loot Bag", 6429, 120.6],
  ["Astral Shard", 2889, 118],
  ["Nail Bracelet", 1832, 114.4],
  ["Westside Sign", 5186, 108.5],
  ["Perfume Bottle", 2106, 76.5],
  ["Mini Oscar", 2108, 70.3],
  ["Artisan Brick", 2852, 68],
  ["Ion Gem", 2615, 66.1],
  ["Gem Signet", 2104, 60.4],
  ["Magic Potion", 3277, 58.2],
  ["Low Rider", 6519, 57.9],
  ["Swiss Watch", 10480, 56],
  ["Sharp Tongue", 3793, 46.4],
  ["Kissed Frog", 7508, 43.5],
  ["Bonded Ring", 2847, 42.5],
  ["Vintage Cigar", 8528, 37.7],
  ["Voodoo Doll", 10752, 37],
  ["Neko Helmet", 4002, 36.5],
  ["Genie Lamp", 2623, 36],
  ["Toy Bear", 29142, 35],
  ["Signet Ring", 7099, 32.1],
  ["Diamond Ring", 8179, 31.7],
  ["Electric Skull", 4191, 28.5],
  ["Rare Bird", 3348, 27.4],
  ["Bling Binky", 1959, 26.3],
  ["Eternal Rose", 5403, 25.6],
  ["Khabib's Papakha", 3143, 23.5],
  ["Cupid Charm", 5569, 21],
  ["Lucky Locket", 0, 18.9],
  ["Sky Stilettos", 5542, 18.3],
  ["Mad Pumpkin", 6426, 17],
  ["Trapped Heart", 9566, 16.4],
  ["UFC Strike", 5984, 15.5],
  ["Snoop Cigar", 17056, 14.9],
  ["Ionic Dryer", 2455, 14.5],
  ["Love Potion", 6420, 14.1],
  ["Crystal Ball", 8004, 13.1],
  ["Flying Broom", 6536, 12.7],
  ["Valentine Box", 3559, 12.4],
  ["Skull Flower", 6856, 12.3],
  ["Record Player", 5214, 11.9],
  ["Sakura Flower", 13339, 10.8],
  ["Love Candle", 3012, 10.7],
  ["Jingle Bells", 7965, 10],
  ["Top Hat", 8191, 9.82],
  ["Hanging Star", 6488, 9.44],
  ["Berry Box", 8623, 8.96],
  ["Sleigh Bell", 3996, 8.5],
  ["Fine Pen", 0, 8.23],
  ["Bunny Muffin", 6223, 8.2],
  ["Evil Eye", 17803, 8.03],
  ["Snow Mittens", 4684, 7.91],
  ["Joyful Bundle", 3568, 7.8],
  ["Jelly Bunny", 13367, 7.63],
  ["Jolly Chimp", 13658, 6.98],
  ["Light Sword", 16012, 6.42],
  ["Surge Board", 1756, 6.24],
  ["Input Key", 13025, 6.17],
  ["Witch Hat", 30548, 6.12],
  ["Moon Pendant", 12531, 6.01],
  ["Eternal Candle", 11919, 6],
  ["Desk Calendar", 32423, 5.99],
  ["Lush Bouquet", 5797, 5.99],
  ["Snow Globe", 5979, 5.92],
  ["Santa Hat", 11705, 5.9],
  ["Spy Agaric", 28563, 5.72],
  ["Faith Amulet", 10892, 5.49],
  ["Spring Basket", 11605, 5.49],
  ["Snoop Dogg", 52945, 5.43],
  ["Restless Jar", 8729, 5.26],
  ["Pretty Posy", 4797, 5.25],
  ["Bow Tie", 8092, 5.1],
  ["Swag Bag", 19313, 5.09],
  ["Homemade Cake", 32643, 5.04],
  ["Mousse Cake", 6669, 5],
  ["Liberty Figure", 12499, 4.98],
  ["Stellar Rocket", 15504, 4.9],
  ["Cookie Heart", 12779, 4.88],
  ["Money Pot", 8661, 4.82],
  ["Jack-in-the-Box", 15807, 4.74],
  ["Clover Pin", 17449, 4.69],
  ["Hex Pot", 14095, 4.65],
  ["B-Day Candle", 23201, 4.64],
  ["Party Sparkler", 20446, 4.64],
  ["Winter Wreath", 8926, 4.5],
  ["Ginger Cookie", 16858, 4.47],
  ["Timeless Book", 6986, 4.45],
  ["Victory Medal", 13289, 4.41],
  ["Mirage Lamp", 0, 4.31],
  ["Star Notepad", 8443, 4.31],
  ["Spiced Wine", 11682, 4.21],
  ["Fresh Socks", 10667, 4.2],
  ["Mood Pack", 12462, 4.15],
  ["Holiday Drink", 5923, 4.14],
  ["Happy Brownie", 9989, 4.08],
  ["Hypno Lollipop", 8343, 4.01],
  ["Jester Hat", 11969, 3.92],
  ["Easter Egg", 25973, 3.88],
  ["Pet Snake", 10382, 3.88],
  ["Tama Gadget", 10412, 3.86],
  ["Candy Cane", 14703, 3.83],
  ["Ice Cream", 32806, 3.8],
  ["Whip Cupcake", 13270, 3.75],
  ["Big Year", 11544, 3.74],
  ["Vice Cream", 37569, 3.73],
  ["Pool Float", 12397, 3.71],
  ["Snake Box", 8755, 3.71],
  ["Instant Ramen", 21613, 3.7],
  ["Lunar Snake", 16883, 3.7],
  ["Xmas Stocking", 13526, 3.7],
  ["Chill Flame", 35999, 3.68],
  ["Lol Pop", 65396, 3.67]
];
// \u0421\u0432\u043E\u0438 \u0438\u043A\u043E\u043D\u043A\u0438-\u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0438; \u0443 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u0440\u043E\u0431\u043A\u0430-\u043F\u043E\u0434\u0430\u0440\u043E\u043A. \u0412 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435 \u2014 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u0438\u0437 Telegram.
var GIFT_IMG = '/_blob/a64ccb23ba5a5ab0f1f789ab412cf3af';
var IMG = {
  'B-Day Candle': '/_blob/ac9e83f513d62d0c7fc3250c8a2d1f89', 'Lol Pop': '/_blob/1f689ff254757e970266197964c5d390',
  'Desk Calendar': '/_blob/9b7049b84c84b25ce8e457f56c837c42', 'Hypno Lollipop': '/_blob/b4c8d4f914ed6e253c933045ab9e3461',
  'Jingle Bells': '/_blob/808ef5efdbeb6b276f70430b220f760b', 'Homemade Cake': '/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d',
  'Snow Globe': '/_blob/6e3628fac94b5266f3b64cea9c5fe7ee', 'Berry Box': '/_blob/c2c0de4f1d0a4ed1dd2df84eff4c7f73',
  'Bunny Muffin': '/_blob/45ac385132ce7b83da133306d9a330f8', 'Record Player': '/_blob/8f4c023d08704d2319e54c9872a8c46d',
  'Top Hat': '/_blob/fe01a5a2d2ff76e0192e008ed6267558', 'Diamond Ring': '/_blob/ef580f1649ad89b5e268954da6ea30b2',
  'Love Potion': '/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65', 'Eternal Rose': '/_blob/734e25b54462cda990767f69381d8355',
  'Toy Bear': '/_blob/c02bc9477e447f6f71962df1fc7a399a', 'Signet Ring': '/_blob/4826a2db621709393534f8feae3d3f4a',
  'Swiss Watch': '/_blob/5efc0b426406d53e3b649c727079f26d', 'Ion Gem': '/_blob/e562d84d61312007f5108ab64cbfe6f9',
  'Precious Peach': '/_blob/923c4583ef32f1e6549c08d5a1839d4c', "Durov's Cap": '/_blob/500977bc4572974cf066e4c08b276369'
};
function rarityColor(p) {
  if (p < 5) return '#9aa3b5';
  if (p < 15) return '#5fd4ff';
  if (p < 60) return '#c77dff';
  if (p < 500) return '#ff5d73';
  return '#ffc83d';
}
// \u0426\u0435\u043D\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u0441\u0443\u0442\u043A\u0438, \u0432 00:00 \u041C\u0421\u041A (\u0432\u0435\u0441\u044C \u0434\u0435\u043D\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435)
function seeded(str) {
  var h = 2166136261;
  for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995); h ^= h >>> 15;
  return (h >>> 0) / 4294967296;
}
var DAY = Math.floor((Date.now() + 3 * 3600 * 1000) / 86400000);
function estPrice(supply) { return Math.max(1.5, Math.round(2 * Math.pow(65396 / supply, 1.1) * 100) / 100); }
function dayPrice(name, base, d) { return Math.round(base * (1 + (seeded(name + ':' + d) * 2 - 1) * 0.03) * 100) / 100; }
var CAT = {};
var CAT_LIST = RAW.map(function (r) {
  var base = r[2] || estPrice(r[1]);
  var local = IMG[r[0]] || GIFT_IMG;
  var c = { name: r[0], supply: r[1], base: base, img: window.rkThumb ? window.rkThumb(r[0], local) : local, color: rarityColor(base) };
  c.price = dayPrice(r[0], base, DAY);
  c.prev = dayPrice(r[0], base, DAY - 1);
  CAT[r[0]] = c;
  return c;
}).sort(function (a, b) { return a.price - b.price; });
function chg(c) { return (c.price / c.prev - 1) * 100; }
function chgText(c) { var v = chg(c); return (v >= 0 ? '\u25B2 ' : '\u25BC ') + Math.abs(v).toFixed(1) + '%'; }
function chgColor(c) { return chg(c) >= 0 ? '#2bd46b' : '#ff5d73'; }
function supplyText(c) { return c.supply ? c.supply.toLocaleString('ru-RU') + ' \u0448\u0442.' : '\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F'; }

var STARTER = ['B-Day Candle', 'Lol Pop', 'Desk Calendar', 'Homemade Cake', 'Homemade Cake', 'Jingle Bells', 'Hypno Lollipop', 'Snow Globe', 'Berry Box'];
function rk() { return typeof window !== 'undefined' && window.RK && window.RK.inventory ? window.RK : null; }
function loadItems() {
  var R = rk();
  if (R) return R.inventory.list();
  return STARTER.map(function (k, i) { return { uid: 'd' + i, key: k, at: Date.now() - i * 1000 }; });
}
function fmt(p) { return (Math.round(p * 100) / 100).toFixed(2) + ' TON'; }
function giftsWord(n) {
  var m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return n + ' \u043F\u043E\u0434\u0430\u0440\u043E\u043A';
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return n + ' \u043F\u043E\u0434\u0430\u0440\u043A\u0430';
  return n + ' \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432';
}
function priceOf(it) { return CAT[it.key] ? CAT[it.key].price : 0; }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { items: loadItems(), sel: [], sort: 'new', confirm: false, toast: null, balance: 50 };
  }
  componentWillUnmount() { clearTimeout(this.tt); }
  selected() { var s = this.state; return s.items.filter(function (it) { return s.sel.indexOf(it.uid) !== -1; }); }
  sell() {
    var s = this.state, picked = this.selected(), sum = 0;
    picked.forEach(function (it) { sum += priceOf(it); });
    sum = Math.round(sum * 100) / 100;
    var R = rk(), items;
    if (R) { R.inventory.remove(s.sel); items = R.inventory.list(); }
    else items = s.items.filter(function (it) { return s.sel.indexOf(it.uid) === -1; });
    var self = this;
    this.setState({ items: items, sel: [], confirm: false, balance: Math.round((s.balance + sum) * 100) / 100, toast: '\u041F\u0440\u043E\u0434\u0430\u043D\u043E ' + giftsWord(picked.length) + ' \u0437\u0430 ' + fmt(sum) });
    clearTimeout(this.tt); this.tt = setTimeout(function () { self.setState({ toast: null }); }, 2600);
  }
  renderVals() {
    var self = this, s = this.state;
    var list = s.items.filter(function (it) { return CAT[it.key]; }).slice();
    if (s.sort === 'price') list.sort(function (a, b) { return priceOf(b) - priceOf(a); });
    else list.sort(function (a, b) { return (b.at || 0) - (a.at || 0); });
    var total = 0; list.forEach(function (it) { total += priceOf(it); });
    var picked = this.selected(), selTotal = 0; picked.forEach(function (it) { selTotal += priceOf(it); });
    var now = Date.now();
    return {
      meAvatar: (window.RK && window.RK.user && window.RK.user.photo_url) || '/_blob/661884b648dd965ea69af44ea8c7ee95',
      balanceText: fmt(s.balance),
      count: list.length, totalText: fmt(total),
      hasItems: list.length > 0, empty: list.length === 0,
      items: list.map(function (it) {
        var c = CAT[it.key], sel = s.sel.indexOf(it.uid) !== -1;
        return {
          name: c.name, img: c.img, color: c.color, priceText: fmt(c.price), selected: sel, pressed: sel ? 'true' : 'false',
          border: sel ? '#2bd46b' : '#222838', checkBorder: sel ? '#2bd46b' : '#3a3f4d', checkBg: sel ? '#2bd46b' : 'transparent',
          isNew: it.at && now - it.at < 10 * 60 * 1000 && it.uid.charAt(0) === 'g',
          toggle: function () {
            var cur = self.state.sel.slice(), i = cur.indexOf(it.uid);
            if (i === -1) cur.push(it.uid); else cur.splice(i, 1);
            self.setState({ sel: cur });
          }
        };
      }),
      sortNew: function () { self.setState({ sort: 'new' }); }, sortPrice: function () { self.setState({ sort: 'price' }); },
      newPressed: s.sort === 'new' ? 'true' : 'false', pricePressed: s.sort === 'price' ? 'true' : 'false',
      newBg: s.sort === 'new' ? '#ffc83d' : 'transparent', newColor: s.sort === 'new' ? '#1a1300' : '#a3a8b5',
      priceBg: s.sort === 'price' ? '#ffc83d' : 'transparent', priceColor: s.sort === 'price' ? '#1a1300' : '#a3a8b5',
      allText: s.sel.length && s.sel.length === list.length ? '\u0421\u043D\u044F\u0442\u044C \u0432\u044B\u0431\u043E\u0440' : '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435',
      toggleAll: function () { var st = self.state; self.setState({ sel: st.sel.length === list.length ? [] : list.map(function (it) { return it.uid; }) }); },
      hasSelection: s.sel.length > 0 && !s.confirm,
      selCount: s.sel.length, selTotal: fmt(selTotal),
      askSell: function () { self.setState({ confirm: true }); },
      withdraw: function () { self.setState({ toast: '\u0412\u044B\u0432\u043E\u0434 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u0432 Telegram \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C' }); clearTimeout(self.tt); self.tt = setTimeout(function () { self.setState({ toast: null }); }, 2600); },
      showConfirm: s.confirm,
      confirmText: '\u0422\u044B \u043F\u0440\u043E\u0434\u0430\u0451\u0448\u044C ' + giftsWord(picked.length) + '.',
      confirmItems: picked.slice(0, 6).map(function (it) { return { img: CAT[it.key].img, name: CAT[it.key].name }; }),
      confirmMore: picked.length > 6, confirmMoreN: picked.length - 6,
      cancelSell: function () { self.setState({ confirm: false }); },
      confirmSell: function () { self.sell(); },
      showToast: !!s.toast, toastText: s.toast || ''
    };
  }
}
<\/script>
</body>
</html>
`;var Xp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 \u0417\u0430\u0434\u0430\u043D\u0438\u044F</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0b0d12}
a{color:#ffc83d}a:hover{color:#ffe08a}
@keyframes rkToast{0%{transform:translateY(-20px);opacity:0}15%{transform:translateY(0);opacity:1}85%{opacity:1}100%{opacity:0}}
@keyframes rkGlow{0%,100%{box-shadow:0 0 0 0 rgba(255,200,61,.0)}50%{box-shadow:0 0 22px 2px rgba(255,200,61,.45)}}
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1250px; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 14px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="font-size: 24px; font-weight: 900; font-style: italic; flex-grow: 1">\u0417\u0410\u0414\u0410\u041D\u0418\u042F</div>
<div style="height: 44px; box-sizing: border-box; border-radius: 14px; background: #1a1d27; padding: 0 12px; display: flex; align-items: center; font-size: 14px; font-weight: 700; color: #ffc83d">{{balanceText}}</div>
</header>

<sc-if value="{{showToast}}" hint-placeholder-val="{{ false }}">
<div role="status" style="position: fixed; left: 0; right: 0; margin: 0 auto; top: 16px; z-index: 60; width: 340px; box-sizing: border-box; border-radius: 14px; background: #123d22; border: 1px solid #2bd46b; padding: 12px 14px; font-size: 14px; font-weight: 700; text-align: center; animation: rkToast 2.6s ease forwards">{{toastText}}</div>
</sc-if>

<div style="position: relative; overflow: hidden; border-radius: 24px; background: #2a2208; border: 1px solid #5a4a14; padding: 18px; display: flex; align-items: center; gap: 14px; animation: {{bonusAnim}}">
<img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 3px solid #ffc83d; box-sizing: border-box; flex-shrink: 0">
<div style="display: flex; flex-direction: column; gap: 4px; flex-grow: 1; min-width: 0">
<div style="font-size: 18px; font-weight: 900">\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441</div>
<div style="font-size: 13px; color: #e6d7a8">\u0417\u0430\u0445\u043E\u0434\u0438 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0438 \u0437\u0430\u0431\u0438\u0440\u0430\u0439 {{bonusAmount}}</div>
</div>
<button type="button" onClick="{{claimBonus}}" disabled="{{bonusDisabled}}" style="height: 44px; border-radius: 12px; border: 0; padding: 0 14px; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 900; cursor: pointer; flex-shrink: 0; background: {{bonusBg}}; color: {{bonusColor}}">{{bonusText}}</button>
</div>

<div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 4px">
<span style="font-size: 20px; font-weight: 700">\u0417\u0430\u0434\u0430\u043D\u0438\u044F \u0434\u043D\u044F</span>
<span style="font-size: 12px; color: #8a90a0">\u043E\u0431\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 {{resetIn}}</span>
</div>
<div style="display: flex; flex-direction: column; gap: 8px">
<sc-for list="{{daily}}" as="t" hint-placeholder-count="5">
<div style="background: #151821; border: 1px solid {{t.border}}; border-radius: 16px; padding: 12px; display: flex; align-items: center; gap: 12px">
<div style="width: 42px; height: 42px; border-radius: 12px; background: {{t.iconBg}}; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<img src="{{t.icon}}" alt="" style="width: 28px; height: 28px; border-radius: 6px; object-fit: cover">
</div>
<div style="display: flex; flex-direction: column; gap: 6px; flex-grow: 1; min-width: 0">
<div style="display: flex; justify-content: space-between; gap: 8px">
<span style="font-size: 14px; font-weight: 700">{{t.title}}</span>
<span style="font-size: 13px; font-weight: 900; color: #ffc83d; white-space: nowrap">+{{t.reward}}</span>
</div>
<div style="height: 6px; border-radius: 3px; background: #0b0d12; overflow: hidden"><div style="height: 6px; border-radius: 3px; background: {{t.barColor}}; width: {{t.pct}}%"></div></div>
<span style="font-size: 11px; color: #8a90a0">{{t.progressText}}</span>
</div>
<sc-if value="{{t.canClaim}}" hint-placeholder-val="{{ false }}">
<button type="button" onClick="{{t.claim}}" style="height: 40px; border-radius: 12px; border: 0; padding: 0 12px; background: #2bd46b; color: #06210f; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 900; cursor: pointer; flex-shrink: 0">\u0417\u0430\u0431\u0440\u0430\u0442\u044C</button>
</sc-if>
<sc-if value="{{t.goPlay}}" hint-placeholder-val="{{ true }}">
<a href="{{t.href}}" style="text-decoration: none; height: 40px; border-radius: 12px; padding: 0 12px; background: #1d2230; color: #ffffff; display: flex; align-items: center; font-size: 13px; font-weight: 700; flex-shrink: 0">\u0418\u0433\u0440\u0430\u0442\u044C</a>
</sc-if>
<sc-if value="{{t.done}}" hint-placeholder-val="{{ false }}">
<span style="height: 40px; display: flex; align-items: center; gap: 4px; font-size: 13px; font-weight: 700; color: #2bd46b; flex-shrink: 0"><svg width="16" height="16" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6 L5 9 L10 3" fill="none" stroke="#2bd46b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>\u0413\u043E\u0442\u043E\u0432\u043E</span>
</sc-if>
</div>
</sc-for>
</div>

<div style="display: flex; flex-direction: column; gap: 2px; margin-top: 8px">
<span style="font-size: 20px; font-weight: 700">\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0439 \u0434\u0440\u0443\u0437\u0435\u0439</span>
<span style="font-size: 12px; color: #8a90a0">\u041D\u0430\u0433\u0440\u0430\u0434\u0430 \u0437\u0430 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0434\u0440\u0443\u0433\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0437\u0430\u0439\u0434\u0451\u0442 \u043F\u043E \u0442\u0432\u043E\u0435\u0439 \u0441\u0441\u044B\u043B\u043A\u0435</span>
</div>
<div style="display: flex; flex-direction: column; gap: 8px">
<sc-for list="{{refs}}" as="r" hint-placeholder-count="3">
<div style="background: #151821; border: 1px solid #3a1530; border-radius: 16px; padding: 12px; display: flex; align-items: center; gap: 12px">
<div style="width: 42px; height: 42px; border-radius: 12px; background: #3a1530; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><circle cx="9" cy="7" r="3.6" fill="none" stroke="#ff5d9e" stroke-width="2"></circle><path d="M2.5 19 C2.5 13.5 15.5 13.5 15.5 19" fill="none" stroke="#ff5d9e" stroke-width="2" stroke-linecap="round"></path><path d="M18 6 V12 M15 9 H21" stroke="#ff5d9e" stroke-width="2" stroke-linecap="round"></path></svg>
</div>
<div style="display: flex; flex-direction: column; gap: 4px; flex-grow: 1; min-width: 0">
<span style="font-size: 14px; font-weight: 700">{{r.title}}</span>
<span style="font-size: 11px; color: #8a90a0">{{r.count}}</span>
</div>
<div style="display: flex; flex-direction: column; align-items: flex-end; gap: 6px; flex-shrink: 0">
<span style="font-size: 12px; font-weight: 900; padding: 3px 8px; border-radius: 8px; background: #123d22; color: #2bd46b">+{{r.reward}}</span>
<button type="button" onClick="{{invite}}" style="height: 32px; border-radius: 10px; border: 0; padding: 0 12px; background: #1d2230; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 12px; font-weight: 700; cursor: pointer">\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C \u2197</button>
</div>
</div>
</sc-for>
</div>

<button type="button" onClick="{{copyLink}}" style="height: 52px; border-radius: 16px; border: 2px dashed #3a3f4d; background: transparent; color: #c9cdd6; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 0 12px; overflow: hidden">
<span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{refLink}}</span>
<span style="color: #ffc83d; flex-shrink: 0">\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span>
</button>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1250}}'>
var BONUS = 0.1;
var AV = '/_blob/661884b648dd965ea69af44ea8c7ee95';
var DAILY = [
  { id: 'cases3', title: '\u041E\u0442\u043A\u0440\u043E\u0439 3 \u043A\u0435\u0439\u0441\u0430', key: 'cases', goal: 3, reward: 0.3, href: 'Cases.dc.html', icon: '/_blob/88b023f22e2d3006641849bb168e073d', iconBg: '#0f1d33' },
  { id: 'crash5', title: '\u0421\u044B\u0433\u0440\u0430\u0439 5 \u0440\u0430\u0443\u043D\u0434\u043E\u0432 \u0432 Crash', key: 'crash', goal: 5, reward: 0.1, href: 'Crash.dc.html', icon: '/_blob/16b8be03ec4054a9ad560c5be1c9ab9e', iconBg: '#2e1212' },
  { id: 'pvp3', title: '\u0421\u044B\u0433\u0440\u0430\u0439 3 \u0438\u0433\u0440\u044B \u043D\u0430 PvP \u0430\u0440\u0435\u043D\u0435', key: 'pvp', goal: 3, reward: 0.1, href: 'Pvp.dc.html', icon: AV, iconBg: '#2e250c' },
  { id: 'upg3', title: '\u0421\u0434\u0435\u043B\u0430\u0439 3 \u0430\u043F\u0433\u0440\u0435\u0439\u0434\u0430', key: 'upgrade', goal: 3, reward: 0.1, href: 'Upgrade.dc.html', icon: '/_blob/63c10368990e8788e655de65d5a9b515', iconBg: '#10291a' },
  { id: 'mines3', title: '\u0421\u044B\u0433\u0440\u0430\u0439 3 \u0440\u0430\u0443\u043D\u0434\u0430 \u0432 \u041C\u0438\u043D\u0430\u0445', key: 'mines', goal: 3, reward: 0.1, href: 'Mines.dc.html', icon: '/_blob/b81dc491ff982e1892b4eeeb94570e3c', iconBg: '#0f1a44' },
  { id: 'wager20', title: '\u041F\u043E\u0441\u0442\u0430\u0432\u044C \u0432 \u0441\u0443\u043C\u043C\u0435 20 TON', key: 'wagered', goal: 20, reward: 1, href: 'Crash.dc.html', icon: '/_blob/a8d1e2a1f1626c9b8edd4755d9c32150', iconBg: '#1d1233' }
];
var REFS = [
  { title: '\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438 \u0434\u0440\u0443\u0433\u0430', reward: '0.1 TON' },
  { title: '\u0414\u0440\u0443\u0433 \u0441\u044B\u0433\u0440\u0430\u043B \u043D\u0430 10 TON', reward: '1 TON' },
  { title: '\u0414\u0440\u0443\u0433 \u0441\u044B\u0433\u0440\u0430\u043B \u043D\u0430 100 TON', reward: '5 TON' }
];
function R() { return typeof window !== 'undefined' && window.RK ? window.RK : null; }
function today() { var d = new Date(Date.now() + 3 * 3600 * 1000); return d.toISOString().slice(0, 10); }
function fmt(x) { return (Math.round(x * 100) / 100).toFixed(2) + ' TON'; }
function hm(ms) { var m = Math.ceil(ms / 60000), h = Math.floor(m / 60); return h + ' \u0447 ' + (m % 60) + ' \u043C\u0438\u043D'; }
function loadClaims() {
  var r = R(), v = r && r.store ? r.store.getJSON('rk_tasks', null) : null;
  if (!v || v.date !== today()) v = { date: today(), claimed: [] };
  return v;
}
function dayStats() { var r = R(); return r && r.stats ? r.stats.day() : { cases: 0, crash: 0, pvp: 0, upgrade: 0, mines: 0, wagered: 0, won: 0 }; }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { balance: 50, claims: loadClaims(), toast: null, now: Date.now() };
  }
  componentDidMount() { var self = this; this.iv = setInterval(function () { self.setState({ now: Date.now(), claims: loadClaims() }); }, 30000); }
  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.tt); }
  toast(t) { var self = this; this.setState({ toast: t }); clearTimeout(this.tt); this.tt = setTimeout(function () { self.setState({ toast: null }); }, 2600); }
  claim(id, amount, label) {
    var c = loadClaims();
    if (c.claimed.indexOf(id) !== -1) return;
    c.claimed.push(id);
    var r = R(); if (r && r.store) r.store.setJSON('rk_tasks', c);
    this.setState({ claims: c, balance: Math.round((this.state.balance + amount) * 100) / 100 });
    this.toast('+' + fmt(amount) + ' \xB7 ' + label);
  }
  refLink() {
    var r = R(), uid = r && r.user && r.user.id ? r.user.id : 'guest';
    var bot = r && r.botName ? r.botName : 'RackoonDropBot';
    return 'https://t.me/' + bot + '?start=ref_' + uid;
  }
  renderVals() {
    var self = this, s = this.state, st = dayStats();
    var gotBonus = s.claims.claimed.indexOf('bonus') !== -1;
    var midnight = new Date(today() + 'T00:00:00+03:00').getTime() + 86400000;
    var link = this.refLink();
    return {
      balanceText: fmt(s.balance),
      showToast: !!s.toast, toastText: s.toast || '',
      bonusAmount: fmt(BONUS),
      bonusDisabled: gotBonus,
      bonusBg: gotBonus ? '#1d2230' : '#ffc83d', bonusColor: gotBonus ? '#8a90a0' : '#1a1300',
      bonusText: gotBonus ? '\u0417\u0430\u0432\u0442\u0440\u0430' : '\u0417\u0430\u0431\u0440\u0430\u0442\u044C',
      bonusAnim: gotBonus ? 'none' : 'rkGlow 2s ease-in-out infinite',
      claimBonus: function () { self.claim('bonus', BONUS, '\u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441'); },
      resetIn: hm(Math.max(0, midnight - s.now)),
      daily: DAILY.map(function (t) {
        var have = Math.min(t.goal, Math.round((st[t.key] || 0) * 100) / 100);
        var claimed = s.claims.claimed.indexOf(t.id) !== -1, complete = have >= t.goal;
        return {
          title: t.title, reward: fmt(t.reward), icon: t.icon, iconBg: t.iconBg, href: t.href,
          pct: Math.round(have / t.goal * 100), barColor: complete ? '#2bd46b' : '#ffc83d',
          progressText: (t.key === 'wagered' ? have.toFixed(2) + ' / ' + t.goal + ' TON' : have + ' / ' + t.goal),
          border: complete && !claimed ? '#2bd46b' : '#222838',
          canClaim: complete && !claimed, goPlay: !complete, done: claimed,
          claim: function () { self.claim(t.id, t.reward, t.title.toLowerCase()); }
        };
      }),
      refs: REFS.map(function (r) { return { title: r.title, reward: r.reward, count: '0 \u0438\u0437 \u221E' }; }),
      refLink: link,
      invite: function () {
        var url = 'https://t.me/share/url?url=' + encodeURIComponent(link) + '&text=' + encodeURIComponent('\u0417\u0430\u043B\u0435\u0442\u0430\u0439 \u0432 RACKOON: \u043A\u0435\u0439\u0441\u044B, \u043A\u0440\u0430\u0448 \u0438 PvP \u043D\u0430 NFT-\u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u{1F99D}');
        var tg = window.Telegram && window.Telegram.WebApp;
        try { if (tg && tg.openTelegramLink) { tg.openTelegramLink(url); return; } } catch (e) {}
        try { window.open(url, '_blank'); } catch (e) {}
      },
      copyLink: function () {
        try { navigator.clipboard.writeText(link).then(function () { self.toast('\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430'); }, function () { self.toast(link); }); }
        catch (e) { self.toast(link); }
      }
    };
  }
}
<\/script>
</body>
</html>
`;var Qp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 \u041B\u0438\u0434\u0435\u0440\u044B</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0b0d12}
a{color:#ffc83d}a:hover{color:#ffe08a}
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1200px; box-sizing: border-box; padding: 20px 16px 110px; display: flex; flex-direction: column; gap: 14px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="font-size: 24px; font-weight: 900; font-style: italic; flex-grow: 1">\u041B\u0418\u0414\u0415\u0420\u042B</div>
</header>

<div role="tablist" style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 4px; background: #151821; border-radius: 14px; padding: 4px">
<sc-for list="{{tabs}}" as="tb" hint-placeholder-count="3">
<button type="button" role="tab" onClick="{{tb.pick}}" aria-selected="{{tb.sel}}" style="height: 40px; border: 0; border-radius: 11px; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer; background: {{tb.bg}}; color: {{tb.color}}">{{tb.label}}</button>
</sc-for>
</div>

<div style="border-radius: 18px; background: #2a2208; border: 1px solid #5a4a14; padding: 12px 14px; display: flex; align-items: center; gap: 10px">
<svg width="28" height="28" viewBox="0 0 22 22" aria-hidden="true"><path d="M6 3 H16 V8 C16 11 14 13 11 13 C8 13 6 11 6 8Z M6 5 H3 C3 8 4 9 6 9 M16 5 H19 C19 8 18 9 16 9 M11 13 V17 M7 19 H15" fill="none" stroke="#ffc83d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1">
<span style="font-size: 14px; font-weight: 700">{{prizeTitle}}</span>
<span style="font-size: 12px; color: #e6d7a8">{{prizeText}}</span>
</div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1.15fr 1fr; gap: 8px; align-items: end; margin-top: 8px">
<sc-for list="{{podium}}" as="p" hint-placeholder-count="3">
<div style="display: flex; flex-direction: column; align-items: center; gap: 6px; min-width: 0">
<div style="position: relative; width: {{p.size}}px; height: {{p.size}}px; border-radius: 50%; border: 3px solid {{p.ring}}; box-sizing: border-box; background: {{p.avBg}}; display: flex; align-items: center; justify-content: center; font-size: {{p.fs}}px; font-weight: 900; overflow: hidden">
<sc-if value="{{p.isMe}}" hint-placeholder-val="{{ false }}"><img src="{{meAvatar}}" referrerpolicy="no-referrer" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{p.notMe}}" hint-placeholder-val="{{ true }}">{{p.initial}}</sc-if>
</div>
<span style="max-width: 100%; font-size: 13px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{p.name}}</span>
<span style="font-size: 12px; font-weight: 900; color: #ffc83d">{{p.value}}</span>
<div style="width: 100%; height: {{p.h}}px; border-radius: 14px 14px 0 0; background: {{p.base}}; display: flex; align-items: flex-start; justify-content: center; padding-top: 8px; box-sizing: border-box; font-size: 26px; font-weight: 900; color: #0b0d12">{{p.place}}</div>
</div>
</sc-for>
</div>

<div style="display: flex; justify-content: space-between; font-size: 12px; color: #8a90a0; padding: 0 4px"><span>{{playersLine}}</span><span>{{metricLabel}}</span></div>
<div style="display: flex; flex-direction: column; gap: 6px">
<sc-for list="{{rows}}" as="r" hint-placeholder-count="7">
<div style="display: flex; align-items: center; gap: 10px; background: #151821; border: 1px solid {{r.border}}; border-radius: 14px; padding: 10px 12px">
<span style="width: 24px; font-size: 13px; font-weight: 700; color: #8a90a0; text-align: center; flex-shrink: 0">{{r.place}}</span>
<div style="width: 34px; height: 34px; border-radius: 10px; background: {{r.avBg}}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 900; flex-shrink: 0; overflow: hidden">
<sc-if value="{{r.isMe}}" hint-placeholder-val="{{ false }}"><img src="{{meAvatar}}" referrerpolicy="no-referrer" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{r.notMe}}" hint-placeholder-val="{{ true }}">{{r.initial}}</sc-if>
</div>
<div style="display: flex; flex-direction: column; gap: 1px; flex-grow: 1; min-width: 0"><span style="font-size: 14px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{r.name}}</span><span style="font-size: 11px; color: #8a90a0">\u043B\u044E\u0431\u0438\u0442 {{r.game}}</span></div>
<span style="font-size: 14px; font-weight: 900; color: #ffc83d">{{r.value}}</span>
</div>
</sc-for>
</div>

<div style="position: fixed; left: 0; right: 0; bottom: 0; z-index: 30; display: flex; justify-content: center; padding: 10px 16px 18px; background: linear-gradient(to top, #0b0d12 70%, rgba(11,13,18,0))">
<div style="width: 100%; max-width: 358px; box-sizing: border-box; display: flex; align-items: center; gap: 10px; background: #2a2208; border: 1px solid #ffc83d; border-radius: 16px; padding: 10px 12px">
<span style="min-width: 24px; font-size: 13px; font-weight: 900; color: #ffc83d; text-align: center">{{mePlace}}</span>
<img src="{{meAvatar}}" referrerpolicy="no-referrer" alt="" style="width: 34px; height: 34px; border-radius: 10px; object-fit: cover">
<div style="display: flex; flex-direction: column; flex-grow: 1; min-width: 0">
<span style="font-size: 14px; font-weight: 700">{{meName}}</span>
<span style="font-size: 11px; color: #e6d7a8">{{meHint}}</span>
</div>
<span style="font-size: 14px; font-weight: 900; color: #ffc83d">{{meValue}}</span>
</div>
</div>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1200}}'>
var NAMES = ['dimon_ton', '\u0410\u0440\u0442\u0451\u043C', 'kirill_x', 'nastya.gifts', 'pepe_hunter', '\u0420\u0443\u0441\u043B\u0430\u043D', 'max_crash', 'lera_lucky', 'tonfather', '\u0412\u043B\u0430\u0434', 'sanya777', 'egor_nft', '\u041A\u0430\u0442\u044F', 'denchik_k', 'gift_trader', '\u0422\u0438\u043C\u0443\u0440', 'ilya.eth', 'alina_moon', '\u0421\u0435\u0440\u0451\u0433\u0430', 'nik_upgrade',
  'mr_mines', '\u0414\u0430\u0448\u0430', 'arsen_kz', 'zhenya_pvp', 'olegtrade', '\u041C\u0438\u0448\u0430', 'vika_star', 'roma_btc', '\u0410\u043B\u0435\u043A\u0441\u0435\u0439', 'stas_d', 'yana_k', 'bogdan_ua', '\u0418\u0433\u043E\u0440\u044C', 'snoop_fan', 'pasha_rich', '\u041A\u0441\u044E\u0448\u0430', 'artur_99', 'lil_raccoon', '\u041D\u0438\u043A\u0438\u0442\u0430', 'sergo_gold',
  'krist1na', '\u0410\u043D\u0442\u043E\u043D', 'vitya_x2', 'kamila', '\u0414\u0438\u043C\u0430 \u041A.', 'gleb_tg', 'marina_vip', '\u0416\u0435\u043D\u044F', 'rostik', 'ton_baron'];
var COLORS = ['#13a58a', '#c41a78', '#2a6fe0', '#d9730a', '#7c3fe0', '#c92a2d', '#078a8a', '#9a7a00', '#3a8a2a', '#b0368f', '#5a6fd6', '#d1495b'];
var TABS = [{ id: 'day', label: '\u0414\u0435\u043D\u044C' }, { id: 'week', label: '\u041D\u0435\u0434\u0435\u043B\u044F' }, { id: 'all', label: '\u0412\u0441\u0451 \u0432\u0440\u0435\u043C\u044F' }];
var PRIZES = { day: '\u0422\u043E\u043F-3 \u0434\u043D\u044F: 10 \xB7 5 \xB7 2 TON', week: '\u0422\u043E\u043F-3 \u043D\u0435\u0434\u0435\u043B\u0438: 50 \xB7 25 \xB7 10 TON', all: '\u041B\u0435\u0433\u0435\u043D\u0434\u044B RACKOON \u0437\u0430 \u0432\u0441\u0451 \u0432\u0440\u0435\u043C\u044F' };
var GAMES = ['Crash', '\u041A\u0435\u0439\u0441\u044B', 'PvP', '\u0410\u043F\u0433\u0440\u0435\u0439\u0434', '\u041C\u0438\u043D\u044B'];
var LAUNCH = Date.UTC(2026, 8, 20); // \u043E\u0442 \u044D\u0442\u043E\u0439 \u0434\u0430\u0442\u044B \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \xAB\u0432\u0441\u0451 \u0432\u0440\u0435\u043C\u044F\xBB
function mskNow() { return Date.now() + 3 * 3600 * 1000; }
function dayKey(t) { return new Date(t).toISOString().slice(0, 10); }
function seeded(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995); h ^= h >>> 15; return (h >>> 0) / 4294967296; }
function fmt(x) { return x >= 10000 ? (x / 1000).toFixed(1) + 'K' : x >= 1000 ? (Math.round(x / 10) / 100).toFixed(2) + 'K' : (Math.round(x * 100) / 100).toFixed(2); }
function R() { return typeof window !== 'undefined' && window.RK ? window.RK : null; }
// \xAB\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\xBB \u0438\u0433\u0440\u043E\u043A\u0430: \u0443 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0441\u0432\u043E\u044F \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u2014 \u043A\u0438\u0442\u044B, \u0441\u0435\u0440\u0435\u0434\u043D\u044F\u043A\u0438 \u0438 \u0440\u0435\u0434\u043A\u0438\u0435 \u0433\u043E\u0441\u0442\u0438
var PROFILE = NAMES.map(function (n, i) {
  var u = seeded('whale:' + n);
  return { name: n, color: COLORS[i % COLORS.length], scale: 6 + Math.pow(u, 3) * 200, active: 0.35 + seeded('act:' + n) * 0.6, game: GAMES[Math.floor(seeded('g:' + n) * GAMES.length)] };
});
// \u041E\u0431\u043E\u0440\u043E\u0442 \u0438\u0433\u0440\u043E\u043A\u0430 \u0437\u0430 \u043E\u0434\u0438\u043D \u0434\u0435\u043D\u044C (\u043F\u043E\u043B\u043D\u044B\u0439)
function dayVolume(pf, key) {
  if (seeded('on:' + key + pf.name) > pf.active) return 0;
  var r = seeded('v:' + key + pf.name);
  return pf.scale * (0.1 + Math.pow(r, 2.2) * 4.5);
}
// \u0421\u0435\u0433\u043E\u0434\u043D\u044F \u043E\u0431\u043E\u0440\u043E\u0442 \u0440\u0430\u0441\u0442\u0451\u0442 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043D\u044F \u2014 \u0442\u0430\u0431\u043B\u0438\u0446\u0430 \u0436\u0438\u0432\u0430\u044F
function todayShare(pf, t) {
  var frac = ((t % 86400000) / 86400000);
  var shift = seeded('t:' + dayKey(t) + pf.name) * 0.5;
  return Math.max(0, Math.min(1, (frac - shift * 0.4) / (1 - shift * 0.4)));
}
function volumeFor(pf, tab, t) {
  var today = dayKey(t), sum = dayVolume(pf, today) * todayShare(pf, t);
  var days = tab.id === 'day' ? 0 : tab.id === 'week' ? 6 : Math.max(0, Math.floor((t - LAUNCH) / 86400000));
  for (var d = 1; d <= days; d++) sum += dayVolume(pf, dayKey(t - d * 86400000));
  return Math.round(sum * 100) / 100;
}
function myValue(tab) {
  var r = R(); if (!r || !r.stats) return 0;
  if (tab.id === 'day') return r.stats.day().wagered || 0;
  if (tab.id === 'week') return r.stats.range(7).wagered || 0;
  return r.stats.total().wagered || 0;
}
// \u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043F\u043E \u043E\u0431\u043E\u0440\u043E\u0442\u0443 (\u0441\u0443\u043C\u043C\u0435 \u0441\u0442\u0430\u0432\u043E\u043A). \u0421\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0438 \u0432 \u0434\u0435\u043C\u043E \u2014 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435, \u043D\u043E \u043F\u0440\u0430\u0432\u0434\u043E\u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0435 \u0438\u0433\u0440\u043E\u043A\u0438.
function board(tab, t) {
  var list = PROFILE.map(function (pf) { return { name: pf.name, value: volumeFor(pf, tab, t), me: false, color: pf.color, game: pf.game }; })
    .filter(function (x) { return x.value >= 0.5; });
  var r = R(), meName = (r && r.user && (r.user.username || r.user.first_name)) || '\u0422\u044B';
  list.push({ name: meName, value: Math.round(myValue(tab) * 100) / 100, me: true, color: '#ffc83d', game: '' });
  return list.sort(function (a, b) { return b.value - a.value; });
}

class Component extends DCLogic {
  constructor(props) { super(props); this.state = { tab: 'day', now: mskNow() }; }
  componentDidMount() { var self = this; this.iv = setInterval(function () { self.setState({ now: mskNow() }); }, 4000); }
  componentWillUnmount() { clearInterval(this.iv); }
  renderVals() {
    var self = this, s = this.state;
    var tab = TABS.filter(function (t) { return t.id === s.tab; })[0];
    var list = board(tab, s.now);
    var meIdx = 0; list.forEach(function (x, i) { if (x.me) meIdx = i; });
    var me = list[meIdx];
    var top = list.slice(0, 3);
    var order = [top[1], top[0], top[2]];
    var meta = [{ place: 2, h: 70, size: 64, ring: '#c9d1e0', base: '#c9d1e0' }, { place: 1, h: 96, size: 82, ring: '#ffc83d', base: '#ffc83d' }, { place: 3, h: 54, size: 60, ring: '#d98a4a', base: '#d98a4a' }];
    var ahead = meIdx > 0 ? list[meIdx - 1] : null;
    return {
      meAvatar: (window.RK && window.RK.user && window.RK.user.photo_url) || '/_blob/661884b648dd965ea69af44ea8c7ee95',
      tabs: TABS.map(function (t) { var sel = t.id === s.tab; return { label: t.label, sel: sel ? 'true' : 'false', bg: sel ? '#ffc83d' : 'transparent', color: sel ? '#1a1300' : '#a3a8b5', pick: function () { self.setState({ tab: t.id }); } }; }),
      prizeTitle: tab.id === 'all' ? '\u0417\u0430\u043B \u0441\u043B\u0430\u0432\u044B' : '\u041F\u0440\u0438\u0437\u044B \u043B\u0438\u0434\u0435\u0440\u0430\u043C',
      prizeText: PRIZES[tab.id],
      metricLabel: '\u041E\u0431\u043E\u0440\u043E\u0442, TON',
      podium: order.map(function (p, i) {
        var m = meta[i];
        return { name: p.name, value: fmt(p.value) + ' TON', initial: p.name.charAt(0).toUpperCase(), avBg: p.color, isMe: p.me, notMe: !p.me, place: m.place, h: m.h, size: m.size, fs: Math.round(m.size * 0.4), ring: m.ring, base: m.base };
      }),
      playersLine: '\u25CF ' + list.length + ' \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0432 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0435',
      rows: list.slice(3, 50).map(function (p, i) {
        return { place: i + 4, name: p.name, game: p.game || '\u0442\u044B', value: fmt(p.value), initial: p.name.charAt(0).toUpperCase(), avBg: p.color, isMe: p.me, notMe: !p.me, border: p.me ? '#ffc83d' : '#222838' };
      }),
      mePlace: meIdx + 1,
      meName: me.name === '\u0422\u044B' ? '\u0422\u044B' : me.name + ' (\u0442\u044B)',
      meValue: fmt(me.value),
      meHint: ahead ? '\u0414\u043E ' + (meIdx) + ' \u043C\u0435\u0441\u0442\u0430: ' + fmt(ahead.value - me.value + 0.01) + ' TON' : '\u0422\u044B \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u043C\u0435\u0441\u0442\u0435!'
    };
  }
}
<\/script>
</body>
</html>
`;var Jp=`<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>RACKOON \u2014 \u0410\u0434\u043C\u0438\u043D\u043A\u0430</title>
<script src="./support.js"><\/script>
</head>
<body>
<x-dc>
<helmet>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,500;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
body{margin:0;background:#0d0f14}
@keyframes rkAdmPop{0%{transform:translateY(-6px);opacity:0}100%{transform:translateY(0);opacity:1}}
</style>
</helmet>
<div style="width: 390px; min-height: 900px; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 14px; background: #0d0f14; font-family: Rubik, system-ui, sans-serif; color: #ffffff">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="font-size: 26px; font-weight: 900; font-style: italic; flex-grow: 1">\u0410\u0414\u041C\u0418\u041D\u041A\u0410</div>
<span style="font-size: 11px; font-weight: 700; padding: 5px 9px; border-radius: 999px; background: {{connBg}}; color: {{connColor}}">{{connText}}</span>
</header>

<sc-if value="{{noAccess}}" hint-placeholder-val="{{ false }}">
<div style="background: #151821; border: 1px solid #3a1d26; border-radius: 18px; padding: 22px 16px; text-align: center; font-size: 14px; color: #ff8a9a">{{noAccessText}}</div>
</sc-if>

<sc-if value="{{hasAccess}}" hint-placeholder-val="{{ true }}">
<div style="background: #151821; border: 1px solid #222838; border-radius: 20px; padding: 14px; display: flex; flex-direction: column; gap: 12px">
<span style="font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u0418\u0413\u0420\u041E\u041A</span>
<div style="display: grid; grid-template-columns: minmax(0, 1fr) 96px; gap: 8px">
<label style="height: 52px; border-radius: 14px; background: #0d0f14; border: 1px solid #262b3a; display: flex; align-items: center; padding: 0 12px; gap: 4px; cursor: text">
<span style="font-size: 18px; font-weight: 700; color: #6c7282">@</span>
<input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" aria-label="\u042E\u0437\u0435\u0440\u043D\u0435\u0439\u043C \u0438\u0433\u0440\u043E\u043A\u0430" placeholder="username" value="{{username}}" onInput="{{onUsername}}" onKeyDown="{{onUserKey}}" style="flex-grow: 1; min-width: 0; height: 100%; border: 0; outline: none; background: transparent; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 700; color: #ffffff">
</label>
<button type="button" onClick="{{find}}" style="height: 52px; border-radius: 14px; border: 0; background: #2a7fff; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 700; cursor: pointer">\u041D\u0430\u0439\u0442\u0438</button>
</div>

<sc-if value="{{hasUser}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; align-items: center; gap: 12px; background: #0d0f14; border: 1px solid #262b3a; border-radius: 16px; padding: 12px; animation: rkAdmPop 0.2s ease-out">
<div style="width: 42px; height: 42px; border-radius: 12px; background: #2a2410; color: #ffc83d; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 900; flex-shrink: 0">{{uInitial}}</div>
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1; min-width: 0">
<span style="font-size: 15px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">@{{uUsername}}</span>
<span style="font-size: 12px; color: {{uStatusColor}}">{{uStatus}}</span>
</div>
<div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px">
<span style="font-size: 17px; font-weight: 900; color: #ffc83d">{{uBalance}}</span>
<span style="font-size: 11px; color: #8a90a0">{{uPending}}</span>
</div>
</div>
</sc-if>

<span style="font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #6c7282; margin-top: 4px">\u0421\u0423\u041C\u041C\u0410</span>
<label style="height: 60px; border-radius: 14px; background: #0d0f14; border: 1px solid #262b3a; display: flex; align-items: center; padding: 0 14px; gap: 8px; cursor: text">
<input type="text" inputmode="decimal" enterkeyhint="done" autocomplete="off" aria-label="\u0421\u0443\u043C\u043C\u0430 \u0432 TON" placeholder="0" value="{{amount}}" onInput="{{onAmount}}" style="flex-grow: 1; min-width: 0; height: 100%; border: 0; outline: none; background: transparent; font-family: Rubik, system-ui, sans-serif; font-size: 26px; font-weight: 900; color: #ffffff">
<span style="font-size: 14px; font-weight: 700; color: #8a90a0; background: #1f2330; border-radius: 10px; padding: 6px 10px">TON</span>
</label>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px">
<sc-for list="{{chips}}" as="ch" hint-placeholder-count="4">
<button type="button" onClick="{{ch.pick}}" style="height: 38px; border-radius: 12px; border: 1px solid #262b3a; background: #1b1e27; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer">{{ch.label}}</button>
</sc-for>
</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin-top: 2px">
<button type="button" onClick="{{give}}" disabled="{{btnDisabled}}" style="height: 56px; border-radius: 16px; border: 0; background: {{giveBg}}; color: {{giveColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 900; cursor: pointer">+ \u0412\u044B\u0434\u0430\u0442\u044C</button>
<button type="button" onClick="{{take}}" disabled="{{btnDisabled}}" style="height: 56px; border-radius: 16px; border: 0; background: {{takeBg}}; color: {{takeColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 900; cursor: pointer">\u2212 \u041E\u0442\u043D\u044F\u0442\u044C</button>
</div>
<sc-if value="{{hasMsg}}" hint-placeholder-val="{{ false }}">
<div role="status" style="border-radius: 14px; padding: 12px; font-size: 13px; font-weight: 500; background: {{msgBg}}; border: 1px solid {{msgBorder}}; color: #ffffff; animation: rkAdmPop 0.2s ease-out">{{msg}}</div>
</sc-if>
</div>

<div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 6px">
<span style="font-size: 17px; font-weight: 700">\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438</span>
<span style="font-size: 12px; color: #8a90a0">{{logCount}}</span>
</div>
<div style="display: flex; flex-direction: column; gap: 6px">
<sc-if value="{{noLog}}" hint-placeholder-val="{{ false }}">
<div style="border-radius: 14px; border: 1px dashed #2c3244; padding: 16px; text-align: center; font-size: 13px; color: #8a90a0">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E</div>
</sc-if>
<sc-for list="{{log}}" as="lg" hint-placeholder-count="3">
<div style="display: flex; align-items: center; gap: 10px; background: #151821; border: 1px solid #222838; border-radius: 14px; padding: 10px 12px">
<span style="flex-grow: 1; min-width: 0; font-size: 14px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">@{{lg.to}}</span>
<span style="font-size: 11px; color: #8a90a0">{{lg.time}}</span>
<span style="font-size: 14px; font-weight: 900; color: {{lg.color}}">{{lg.amount}}</span>
</div>
</sc-for>
</div>
<div style="font-size: 11px; color: #6c7282; text-align: center; line-height: 1.5">\u0415\u0441\u043B\u0438 \u0438\u0433\u0440\u043E\u043A \u043D\u0435 \u0432 \u0441\u0435\u0442\u0438, \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F \u043F\u0440\u0438 \u0435\u0433\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0432\u0445\u043E\u0434\u0435 \u0432 \u0438\u0433\u0440\u0443.<br>\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0435 \u0443\u0432\u043E\u0434\u0438\u0442 \u0431\u0430\u043B\u0430\u043D\u0441 \u043D\u0438\u0436\u0435 \u043D\u0443\u043B\u044F.</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":900}}'>
function NET() { return window.RK && window.RK.net; }
function cleanNum(v) {
  v = String(v || '').replace(',', '.').replace(/[^0-9.]/g, '');
  var parts = v.split('.'); if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
  return v.slice(0, 12);
}
function cleanUser(v) { return String(v || '').replace(/^@+/, '').replace(/[^A-Za-z0-9_]/g, '').slice(0, 32); }
function ago(t) {
  if (!t) return '';
  var s = Math.max(0, Math.round((Date.now() - t) / 1000));
  if (s < 60) return '\u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E';
  if (s < 3600) return Math.floor(s / 60) + ' \u043C\u0438\u043D \u043D\u0430\u0437\u0430\u0434';
  if (s < 86400) return Math.floor(s / 3600) + ' \u0447 \u043D\u0430\u0437\u0430\u0434';
  return Math.floor(s / 86400) + ' \u0434\u043D \u043D\u0430\u0437\u0430\u0434';
}
function hm(t) { var d = new Date(t + 3 * 3600 * 1000); return ('0' + d.getUTCDate()).slice(-2) + '.' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + ' ' + ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2); }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { username: '', amount: '', user: null, msg: null, log: [], busy: false, tick: 0 };
    this.offs = [];
  }
  componentDidMount() {
    var self = this, net = NET();
    if (net) {
      this.offs.push(net.on('admin.user', function (m) { self.setState({ user: m.user, busy: false, msg: null }); }));
      this.offs.push(net.on('admin.done', function (m) {
        var a = m.amount;
        self.setState({ user: m.user, log: m.log, busy: false, amount: '',
          msg: { ok: true, text: (a > 0 ? '\u0412\u044B\u0434\u0430\u043D\u043E +' + a : '\u0421\u043F\u0438\u0441\u0430\u043D\u043E ' + a) + ' TON \u0438\u0433\u0440\u043E\u043A\u0443 @' + m.user.username + (m.user.online ? '' : ' (\u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F \u043F\u0440\u0438 \u0432\u0445\u043E\u0434\u0435)') } });
        // \u0447\u0435\u0440\u0435\u0437 \u043F\u0430\u0440\u0443 \u0441\u0435\u043A\u0443\u043D\u0434 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443: \u0438\u0433\u0440\u0430 \u0438\u0433\u0440\u043E\u043A\u0430 \u0443\u0441\u043F\u0435\u0435\u0442 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0438 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441
        clearTimeout(self.rt);
        self.rt = setTimeout(function () { var n = NET(); if (n && n.connected) n.send({ t: 'admin.find', username: m.user.username }); }, 3000);
      }));
      this.offs.push(net.on('admin.err', function (m) { self.setState({ busy: false, msg: { ok: false, text: m.msg } }); }));
      this.offs.push(net.on('admin.log', function (m) { self.setState({ log: m.log }); }));
      this.offs.push(net.on('status', function () { self.forceUpdate(); if (net.connected) net.send({ t: 'admin.log' }); }));
      if (net.connected) net.send({ t: 'admin.log' });
    }
    this.iv = setInterval(function () { self.setState({ tick: self.state.tick + 1 }); }, 1000);
  }
  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.rt); this.offs.forEach(function (f) { f(); }); }
  find() {
    var net = NET(), u = this.state.username;
    if (!u) return this.setState({ msg: { ok: false, text: '\u0412\u0432\u0435\u0434\u0438 \u044E\u0437\u0435\u0440\u043D\u0435\u0439\u043C \u0438\u0433\u0440\u043E\u043A\u0430' } });
    if (!net || !net.connected) return this.setState({ msg: { ok: false, text: '\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C' } });
    this.setState({ busy: true, msg: null });
    net.send({ t: 'admin.find', username: u });
  }
  adjust(sign) {
    var net = NET(), s = this.state, v = Math.round(parseFloat(s.amount) * 100) / 100;
    if (!s.username) return this.setState({ msg: { ok: false, text: '\u0412\u0432\u0435\u0434\u0438 \u044E\u0437\u0435\u0440\u043D\u0435\u0439\u043C \u0438\u0433\u0440\u043E\u043A\u0430' } });
    if (!(v > 0)) return this.setState({ msg: { ok: false, text: '\u0412\u0432\u0435\u0434\u0438 \u0441\u0443\u043C\u043C\u0443 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0443\u043B\u044F' } });
    if (!net || !net.connected) return this.setState({ msg: { ok: false, text: '\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C' } });
    this.setState({ busy: true, msg: null });
    net.send({ t: 'admin.adjust', username: s.username, amount: sign * v });
  }
  renderVals() {
    var self = this, s = this.state, net = NET();
    var conn = !!(net && net.connected), admin = !!(net && net.me && net.me.admin);
    var u = s.user, ready = conn && admin && !s.busy;
    return {
      connText: conn ? 'online' : '\u043D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438', connBg: conn ? 'rgba(43,212,107,0.14)' : 'rgba(255,93,115,0.14)', connColor: conn ? '#2bd46b' : '#ff5d73',
      noAccess: !admin, hasAccess: admin,
      noAccessText: conn ? '\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430. \u0410\u0434\u043C\u0438\u043D\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443.' : '\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443...',
      username: s.username,
      onUsername: function (e) { self.setState({ username: cleanUser(e && e.target && e.target.value), user: null }); },
      onUserKey: function (e) { if (e && e.key === 'Enter') { if (e.target && e.target.blur) e.target.blur(); self.find(); } },
      find: function () { self.find(); },
      hasUser: !!u,
      uInitial: u ? (u.name || u.username || '?').charAt(0).toUpperCase() : '',
      uUsername: u ? u.username : '',
      uStatus: u ? (u.online ? '\u25CF \u0432 \u0438\u0433\u0440\u0435 \u0441\u0435\u0439\u0447\u0430\u0441' : '\u0431\u044B\u043B(\u0430) ' + ago(u.seen)) : '',
      uStatusColor: u && u.online ? '#2bd46b' : '#8a90a0',
      uBalance: u ? (u.balance == null ? '\u2014 TON' : u.balance.toFixed(2) + ' TON') : '',
      uPending: u ? (u.pending ? '\u043E\u0436\u0438\u0434\u0430\u0435\u0442: ' + (u.pending > 0 ? '+' : '') + u.pending + ' TON' : '\u0431\u0430\u043B\u0430\u043D\u0441 \u0438\u0433\u0440\u043E\u043A\u0430') : '',
      amount: s.amount,
      onAmount: function (e) { self.setState({ amount: cleanNum(e && e.target && e.target.value) }); },
      chips: [1, 5, 10, 100].map(function (v) { return { label: v + ' TON', pick: function () { self.setState({ amount: String(v) }); } }; }),
      give: function () { self.adjust(1); }, take: function () { self.adjust(-1); },
      btnDisabled: !ready,
      giveBg: ready ? '#2bd46b' : '#1d2a22', giveColor: ready ? '#06210f' : '#4f6b58',
      takeBg: ready ? '#ff5d73' : '#2a1d22', takeColor: ready ? '#2a0610' : '#6b4f56',
      hasMsg: !!s.msg, msg: s.msg ? s.msg.text : '',
      msgBg: s.msg && s.msg.ok ? 'rgba(43,212,107,0.12)' : 'rgba(255,93,115,0.12)', msgBorder: s.msg && s.msg.ok ? 'rgba(43,212,107,0.45)' : 'rgba(255,93,115,0.45)',
      log: (s.log || []).map(function (l) { return { to: l.to, time: hm(l.at), amount: (l.amount > 0 ? '+' : '') + l.amount + ' TON', color: l.amount > 0 ? '#2bd46b' : '#ff5d73' }; }),
      noLog: !(s.log && s.log.length), logCount: s.log && s.log.length ? s.log.length + ' \u0448\u0442.' : ''
    };
  }
}
<\/script>
</body>
</html>
`;var Y=window.Telegram&&window.Telegram.WebApp,hg=0,In=["rk_balance","rk_inv","rk_free_at","rk_pvp_hist","rk_crash_hist","rk_upg_hist","rk_stats","rk_tasks","rk_pvp_pending","rk_reset"],Fp=3900,ia=(()=>{try{return Y&&Y.CloudStorage&&(!Y.isVersionAtLeast||Y.isVersionAtLeast("6.9"))?Y.CloudStorage:null}catch{return null}})(),yt={_m:{},_t:{},get(t){let e=null;try{e=localStorage.getItem(t)}catch{}return e!=null?e:t in this._m?this._m[t]:null},set(t,e){e=String(e),this._m[t]=e;try{localStorage.setItem(t,e)}catch{}ia&&In.indexOf(t)!==-1&&(clearTimeout(this._t[t]),this._t[t]=setTimeout(()=>{let a=[];for(let i=0;i<e.length;i+=Fp)a.push(e.slice(i,i+Fp));a.length||a.push("");try{ia.setItem(t+"__n",String(a.length)),a.forEach((i,l)=>ia.setItem(t+"__"+l,i))}catch{}},400))},remove(t){delete this._m[t];try{localStorage.removeItem(t)}catch{}if(ia)try{ia.setItem(t+"__n","0")}catch{}},getJSON(t,e){try{let a=JSON.parse(this.get(t)||"null");return a==null?e:a}catch{return e}},setJSON(t,e){this.set(t,JSON.stringify(e))}};function gg(){return new Promise(t=>{if(!ia)return t();let e=setTimeout(t,2500);try{ia.getItems(In.map(a=>a+"__n"),(a,i)=>{if(a||!i)return clearTimeout(e),t();let l=[];if(In.forEach(n=>{let o=parseInt(i[n+"__n"]||"0",10)||0;for(let s=0;s<o;s++)l.push(n+"__"+s)}),!l.length)return clearTimeout(e),t();ia.getItems(l,(n,o)=>{!n&&o&&In.forEach(s=>{let r=parseInt(i[s+"__n"]||"0",10)||0;if(!r)return;let u="";for(let b=0;b<r;b++)u+=o[s+"__"+b]||"";yt._m[s]=u;try{localStorage.setItem(s,u)}catch{}}),clearTimeout(e),t()})})}catch{clearTimeout(e),t()}})}var Me={get(){let t=parseFloat(yt.get("rk_balance"));return isNaN(t)?hg:t},set(t){yt.set("rk_balance",String(Math.round(t*100)/100)),clearTimeout(this._rt),this._rt=setTimeout(()=>{try{window.RK&&window.RK.net&&window.RK.net.send({t:"bal",v:Me.get()})}catch{}},2e3)}},bg=["B-Day Candle","Lol Pop","Desk Calendar","Homemade Cake","Homemade Cake","Jingle Bells","Hypno Lollipop","Snow Globe","Berry Box"],mg={_load(){let t=yt.getJSON("rk_inv",null);return Array.isArray(t)?t:null},_save(t){yt.setJSON("rk_inv",t),this._mem=t},list(){let t=this._load()||this._mem;if(!t){let e=Date.now();t=bg.map((a,i)=>({uid:"s"+i+"_"+e,key:a,at:e-(i+1)*36e5})),this._save(t)}return t.slice()},add(t){let e=this.list(),a={uid:"g"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),key:t,at:Date.now()};return e.unshift(a),this._save(e),a},remove(t){let e=new Set([].concat(t));this._save(this.list().filter(a=>!e.has(a.uid)))},reset(){return yt.remove("rk_inv"),this._mem=null,this.list()}},Gr=t=>new Date((t||Date.now())+3*3600*1e3).toISOString().slice(0,10),bi=()=>({cases:0,crash:0,pvp:0,upgrade:0,mines:0,wagered:0,won:0}),e0={_get(){let t=yt.getJSON("rk_stats",null);return t&&t.days?t:{total:bi(),days:{}}},day(){return Object.assign(bi(),this._get().days[Gr()]||{})},range(t){let e=this._get(),a=bi();for(let i=0;i<t;i++){let l=e.days[Gr(Date.now()-i*864e5)];l&&Object.keys(a).forEach(n=>{a[n]+=l[n]||0})}return a},total(){return Object.assign(bi(),this._get().total)}};function a0(t){let e=e0._get(),a=Gr(),i=Object.assign(bi(),e.days[a]||{}),l=Object.assign(bi(),e.total||{});[i,l].forEach(n=>{t.round&&t.game in n&&(n[t.game]+=1),n.wagered=Math.round((n.wagered+(t.bet||0))*100)/100,n.won=Math.round((n.won+(t.win||0))*100)/100}),e.days[a]=i,e.total=l,Object.keys(e.days).sort().slice(0,-8).forEach(n=>{delete e.days[n]}),yt.setJSON("rk_stats",e)}var Ht=null;function Wp(t){let e=Ht&&Ht.logic;e&&e.state&&"balance"in e.state?e.setState({balance:Math.round((e.state.balance+t)*100)/100}):(Me.set(Me.get()+t),Ht&&Ht.forceUpdate())}function yg(t){let e=Ht&&Ht.logic;e&&e.state&&"balance"in e.state?e.setState({balance:t}):(Me.set(t),Ht&&Ht.forceUpdate())}var i0=(()=>{let t={},e=new Set,a=null,i=0,l=null,n={connected:!1,me:null,online:0,offset:0};function o(c,x){(t[c]||[]).slice().forEach(v=>{try{v(x)}catch(B){console.error(B)}})}function s(){let c=(window.RK_SERVER||"").trim();return c||(c=(location.protocol==="https:"?"wss://":"ws://")+location.host),c.replace(/^http/,"ws").replace(/\/+$/,"")+"/ws"}function r(){let c=yt.get("rk_guest");return c||(c=Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4),yt.set("rk_guest",c)),c}function u(c){return a&&a.readyState===1?(a.send(JSON.stringify(c)),!0):!1}function b(c){let x=yt.getJSON("rk_credits_done",[]);if(x.indexOf(c.id)===-1){if(c.game==="admin"){let v=Ht&&Ht.logic,B=v&&v.state&&"balance"in v.state?v.state.balance:Me.get();Wp(Math.max(c.amount,-B))}else Wp(c.amount),a0({game:c.game,win:c.amount});yt.setJSON("rk_credits_done",[c.id].concat(x).slice(0,100))}u({t:"ack",id:c.id})}function h(){try{a=new WebSocket(s())}catch{return p()}a.onopen=()=>{i=0,u({t:"hello",initData:Y&&Y.initData||"",guestId:r()}),e.forEach(x=>u({t:"sub",room:x})),clearInterval(l);let c=()=>u({t:"ping",c:Date.now()});c(),l=setInterval(c,1e4)},a.onmessage=c=>{let x;try{x=JSON.parse(c.data)}catch{return}if(x.t==="pong"){let v=Date.now();n.offset=x.now-(x.c+v)/2;return}x.t==="welcome"&&(x.balanceReset&&yt.get("rk_reset")!==x.balanceReset&&(yg(0),yt.set("rk_reset",x.balanceReset)),n.me=x.me,n.online=x.online,n.connected=!0,o("status",n),u({t:"bal",v:Me.get()})),x.t==="online"&&(n.online=x.n),x.t==="credit"&&b(x),o(x.t,x)},a.onclose=()=>{let c=n.connected;n.connected=!1,clearInterval(l),c&&o("status",n),p()},a.onerror=()=>{}}function p(){i=Math.min(i+1,6),setTimeout(h,500*i)}return n.on=(c,x)=>((t[c]=t[c]||[]).push(x),()=>{t[c]=(t[c]||[]).filter(v=>v!==x)}),n.send=u,n.sub=c=>{e.add(c),u({t:"sub",room:c})},n.unsub=c=>{e.delete(c),u({t:"unsub",room:c})},n.now=()=>Date.now()+n.offset,n.isMe=c=>!!(n.me&&n.me.uid===c),n.start=h,n})();window.RK={wallet:Me,inventory:mg,store:yt,stats:e0,track:a0,net:i0,botName:"RackoonDropBot",user:Y&&Y.initDataUnsafe&&Y.initDataUnsafe.user||null};if(Y){Y.ready(),Y.expand();try{Y.setHeaderColor("#0b0d12"),Y.setBackgroundColor("#0b0d12")}catch{}try{Y.disableVerticalSwipes&&Y.disableVerticalSwipes()}catch{}}document.addEventListener("click",t=>{if(Y&&Y.HapticFeedback&&t.target.closest&&t.target.closest("button, a"))try{Y.HapticFeedback.impactOccurred("light")}catch{}},!0);var $n={"16b8be03ec4054a9ad560c5be1c9ab9e":"banner-crash.jpg","88b023f22e2d3006641849bb168e073d":"banner-cases.jpg","63c10368990e8788e655de65d5a9b515":"banner-upgrade.jpg",b81dc491ff982e1892b4eeeb94570e3c:"banner-mines.jpg","661884b648dd965ea69af44ea8c7ee95":"avatar.jpg",a8d1e2a1f1626c9b8edd4755d9c32150:"rocket.png","29f965541d768edadf1aad890a105f4f":"space.jpg",ac9e83f513d62d0c7fc3250c8a2d1f89:"candle.svg","1f689ff254757e970266197964c5d390":"lolpop.svg","9b7049b84c84b25ce8e457f56c837c42":"calendar.svg",b4c8d4f914ed6e253c933045ab9e3461:"hypno.svg","808ef5efdbeb6b276f70430b220f760b":"bells.svg","6ef5ecbeb712d1b1d752a33d1e9c279d":"cake.svg","6e3628fac94b5266f3b64cea9c5fe7ee":"globe.svg",c2c0de4f1d0a4ed1dd2df84eff4c7f73:"berry.svg","45ac385132ce7b83da133306d9a330f8":"muffin.svg","8f4c023d08704d2319e54c9872a8c46d":"record.svg",fe01a5a2d2ff76e0192e008ed6267558:"tophat.svg",ef580f1649ad89b5e268954da6ea30b2:"dring.svg","5bb7da32fc8a6f8dbe91cf7cedc20c65":"lpotion.svg","734e25b54462cda990767f69381d8355":"rose.svg",c02bc9477e447f6f71962df1fc7a399a:"bear.svg","4826a2db621709393534f8feae3d3f4a":"signet.svg","5efc0b426406d53e3b649c727079f26d":"watch.svg",e562d84d61312007f5108ab64cbfe6f9:"iongem.svg","923c4583ef32f1e6549c08d5a1839d4c":"peach.svg","500977bc4572974cf066e4c08b276369":"cap.svg",a64ccb23ba5a5ab0f1f789ab412cf3af:"pepe.svg",bb8c4faf5d5477b7abe934698601360a:"none.svg","34af5661e80ecf394b0a48aeeb28ab6c":"r-fire.svg","7629870dfcd56d08701d6a71de1e83df":"r-laugh.svg",f5a9ceb49eb8c4c03e26914bcd1e2576:"r-angry.svg","89d4ee9117e73bee099492a4ce5c5498":"r-heart.svg",c22eeb9eb2c04b336c2c7f989a2a93a7:"r-party.svg",fcf5bf14ee8b1ae499c387610e4d1977:"case-c1.jpg","06ce572b9077b276c1d8a7b06b5e8713":"case-c2.jpg","9e1537bfc41c71475ce556a1aaf4884f":"case-c3.jpg",c0847d0dc5fbcb1a68d80763032f0675:"case-c4.jpg",db1a02051117bc41aa898a143cdc3d48:"case-c5.jpg","72f77fc4af6bf75c8e7d10aa33580007":"case-c6.jpg",b289144243be3c7e4e7176e3a0070caa:"case-c7.jpg","313d5daa64736bbfb70ecfcd97ed3141":"case-c8.jpg"};function xg(t){return t.replace(/\/_blob\/([0-9a-f]{32})/g,(e,a)=>$n[a]?"assets/"+$n[a]:e)}function vg(t){return t.replace(/position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba\(5, 6, 10, ([0-9.]+)\); display: flex; justify-content: center; align-items: flex-start; padding-top: \d+px/g,"position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, $1); display: flex; justify-content: center; align-items: center; padding: 16px")}var qr={};window.rkThumb=function(t,e){let a=t.toLowerCase().replace(/[^a-z0-9]/g,""),i="https://fragment.com/file/gifts/"+a+"/thumb.webp",l="https://nft.fragment.com/gift/"+a+"-1.webp";return qr[i]=l,qr[l]=e.replace(/\/_blob\/([0-9a-f]{32})/,(n,o)=>$n[o]?"assets/"+$n[o]:n),i};window.addEventListener("error",t=>{let e=t.target;if(e&&e.tagName==="IMG"){if(window.RK&&window.RK.user&&e.getAttribute("src")===window.RK.user.photo_url){e.setAttribute("src","assets/avatar.jpg");return}if(e.hasAttribute("data-av")){e.removeAttribute("data-av"),e.setAttribute("src","assets/avatar.jpg");return}let a=qr[e.getAttribute("src")];a&&e.setAttribute("src",a)}},!0);function ne(t,e){let a=vg(xg(e)),i=new DOMParser().parseFromString(a,"text/html"),l=i.querySelector("x-dc"),n=l.querySelector("helmet"),o=[];n&&(n.querySelectorAll("link, style").forEach(b=>o.push(b.outerHTML)),n.remove());let s=Array.from(l.children)[0],r=i.querySelector("script[data-dc-script]").textContent,u=new Function("DCLogic",r+`
;return Component;`)(Yr);return{name:t,head:o,root:s,Logic:u}}var Yr=class{constructor(e){this.props=e||{},this.state={},this._host=null}setState(e,a){typeof e=="function"&&(e=e(this.state,this.props)),Object.assign(this.state,e),e&&"balance"in e&&Me.set(e.balance),this._host?this._host.forceUpdate(a):a&&a()}forceUpdate(e){this._host&&this._host.forceUpdate(e)}},Kr=t=>t.replace(/-([a-z])/g,(e,a)=>a.toUpperCase());function Ip(t,e){if(t=t.trim(),t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(/^-?\d+(\.\d+)?$/.test(t))return parseFloat(t);let a=t.split("."),i;for(let l=e.length-1;l>=0;l--)if(e[l]&&a[0]in e[l]){i=e[l][a[0]];break}for(let l=1;l<a.length&&i!=null;l++)i=i[a[l]];return i}var wg=/\{\{([^}]+)\}\}/g;function Wn(t,e){let a=t.match(/^\s*\{\{([^}]+)\}\}\s*$/);return a?Ip(a[1],e):t.replace(wg,(i,l)=>{let n=Ip(l,e);return n==null?"":String(n)})}function Sg(t){let e={};return t.split(";").forEach(a=>{let i=a.indexOf(":");if(i<0)return;let l=a.slice(0,i).trim(),n=a.slice(i+1).trim();if(l){if(l.startsWith("--")){e[l]=n;return}l.startsWith("-webkit-")&&(l="Webkit"+Kr(l.slice(8)).replace(/^./,o=>o.toUpperCase()).slice(0)),e[l.startsWith("Webkit")?l:Kr(l)]=n}}),e}function l0(t,e,a,i){if(t.nodeType===3){let b=t.nodeValue;return!b.trim()&&b.indexOf(`
`)!==-1?null:b.indexOf("{{")===-1?b:Wn(b,e)}if(t.nodeType!==1)return null;let l=t.tagName.toLowerCase(),n=b=>Array.from(t.childNodes).map((h,p)=>l0(h,b,a,p)).filter(h=>h!=null&&h!==!1);if(l==="sc-if")return Wn(t.getAttribute("value")||"",e)?Lt.default.createElement(Lt.default.Fragment,{key:i},...n(e)):null;if(l==="sc-for"){let b=Wn(t.getAttribute("list")||"",e)||[],h=t.getAttribute("as")||"item";return Lt.default.createElement(Lt.default.Fragment,{key:i},...b.map((p,c)=>Lt.default.createElement(Lt.default.Fragment,{key:c},...n(e.concat([{[h]:p,$index:c}])))))}let o=t.namespaceURI==="http://www.w3.org/2000/svg",s={key:i};for(let b of Array.from(t.attributes)){let h=b.name,p=b.value,c=p.indexOf("{{")===-1?p:Wn(p,e);if(!h.startsWith("hint-")){if(h==="class")h="className";else if(h==="for")h="htmlFor";else if(h==="style"){s.style=Sg(String(c));continue}else if(h.startsWith("on")){let x="on"+h.charAt(2).toUpperCase()+h.slice(3);x==="Onclick"&&(x="onClick"),h.toLowerCase()==="onclick"&&(x="onClick"),h.toLowerCase()==="oninput"&&(x="onChange"),h.toLowerCase()==="onkeydown"&&(x="onKeyDown"),typeof c=="function"&&(s[x]=c);continue}else o&&h.indexOf("-")!==-1&&!h.startsWith("aria-")&&!h.startsWith("data-")?h=Kr(h):h==="tabindex"?h="tabIndex":h==="referrerpolicy"?h="referrerPolicy":h==="inputmode"?h="inputMode":h==="enterkeyhint"?h="enterKeyHint":h==="autocomplete"?h="autoComplete":h==="readonly"?h="readOnly":h==="disabled"&&(c=c===!0||c===""||c==="disabled"||c==="true");s[h]=c}}if(l==="a"){let h=String(s.href||t.getAttribute("href")||"").match(/([A-Za-z]+)\.dc\.html$/);s.href="#",s.onClick=p=>{p.preventDefault(),h&&a(h[1])}}l==="input"&&"value"in s&&!s.onChange&&(s.readOnly=!0);let r=n(e);return{img:1,input:1,br:1,hr:1,meta:1,link:1}[l]?Lt.default.createElement(l,s):Lt.default.createElement(l,s,...r)}var Zr=class extends Lt.default.Component{constructor(e){super(e),this.logic=new e.screen.Logic({}),this.logic.state&&"balance"in this.logic.state&&(this.logic.state.balance=Me.get()),this.logic._host=this}componentDidMount(){Ht=this,this.logic.componentDidMount&&this.logic.componentDidMount()}componentWillUnmount(){Ht===this&&(Ht=null),this.logic.componentWillUnmount&&this.logic.componentWillUnmount(),this.logic._host=null}render(){let e=this.logic.renderVals?this.logic.renderVals():{};return l0(this.props.screen.root,[e],this.props.nav,"root")}},Pn={Main:ne("Main",jp),Crash:ne("Crash",Gp),Upgrade:ne("Upgrade",qp),Cases:ne("Cases",Yp),Mines:ne("Mines",Kp),Pvp:ne("Pvp",Zp),Inventory:ne("Inventory",Vp),Tasks:ne("Tasks",Xp),Leaders:ne("Leaders",Qp),Admin:ne("Admin",Jp)},$p=new Set;Object.values(Pn).forEach(t=>t.head.forEach(e=>{if($p.has(e))return;$p.add(e);let a=document.createElement("div");a.innerHTML=e;let i=a.firstElementChild;i.tagName==="STYLE"&&/body\{/.test(i.textContent)&&(i.textContent=i.textContent.replace(/body\{[^}]*\}/,"")),document.head.appendChild(i)}));function Pp(){let t=(location.hash||"").replace("#/","");return Pn[t]?t:"Main"}var Vr=class extends Lt.default.Component{constructor(e){super(e),this.state={route:Pp()},this.nav=this.nav.bind(this),this.back=()=>this.nav("Main")}componentDidMount(){window.addEventListener("hashchange",()=>this.setState({route:Pp()})),Y&&Y.BackButton&&Y.BackButton.onClick(this.back),this.syncBack()}componentDidUpdate(){this.syncBack()}syncBack(){!Y||!Y.BackButton||(this.state.route==="Main"?Y.BackButton.hide():Y.BackButton.show())}nav(e){Pn[e]&&(location.hash=e==="Main"?"":"#/"+e,this.setState({route:e}),window.scrollTo(0,0))}render(){let e=this.state.route;return Lt.default.createElement(Zr,{key:e,screen:Pn[e],nav:this.nav})}};function n0(){let t=document.getElementById("app"),e=Math.min(window.innerWidth,480);t.style.zoom=String(e/390)}window.addEventListener("resize",n0);n0();gg().then(()=>{i0.start(),(0,t0.createRoot)(document.getElementById("app")).render(Lt.default.createElement(Vr))});})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
