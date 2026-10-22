(()=>{var s0=Object.create;var Qr=Object.defineProperty;var r0=Object.getOwnPropertyDescriptor;var f0=Object.getOwnPropertyNames;var c0=Object.getPrototypeOf,u0=Object.prototype.hasOwnProperty;var Ae=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var d0=(t,e,a,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of f0(e))!u0.call(t,n)&&n!==a&&Qr(t,n,{get:()=>e[n],enumerable:!(i=r0(e,n))||i.enumerable});return t};var Jr=(t,e,a)=>(a=t!=null?s0(c0(t)):{},d0(e||!t||!t.__esModule?Qr(a,"default",{value:t,enumerable:!0}):a,t));var of=Ae(T=>{"use strict";var ao=Symbol.for("react.transitional.element"),p0=Symbol.for("react.portal"),h0=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),m0=Symbol.for("react.consumer"),x0=Symbol.for("react.context"),y0=Symbol.for("react.forward_ref"),v0=Symbol.for("react.suspense"),w0=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),k0=Symbol.for("react.activity"),Fr=Symbol.iterator;function S0(t){return t===null||typeof t!="object"?null:(t=Fr&&t[Fr]||t["@@iterator"],typeof t=="function"?t:null)}var tf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,af={};function za(t,e,a){this.props=t,this.context=e,this.refs=af,this.updater=a||tf}za.prototype.isReactComponent={};za.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};za.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nf(){}nf.prototype=za.prototype;function io(t,e,a){this.props=t,this.context=e,this.refs=af,this.updater=a||tf}var no=io.prototype=new nf;no.constructor=io;ef(no,za.prototype);no.isPureReactComponent=!0;var Wr=Array.isArray;function eo(){}var Z={H:null,A:null,T:null,S:null},lf=Object.prototype.hasOwnProperty;function lo(t,e,a){var i=a.ref;return{$$typeof:ao,type:t,key:e,ref:i!==void 0?i:null,props:a}}function T0(t,e){return lo(t.type,e,t.props)}function oo(t){return typeof t=="object"&&t!==null&&t.$$typeof===ao}function z0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Ir=/\/+/g;function to(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z0(""+t.key):e.toString(36)}function M0(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(eo,eo):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ta(t,e,a,i,n){var l=typeof t;(l==="undefined"||l==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(l){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ao:case p0:o=!0;break;case Pr:return o=t._init,Ta(o(t._payload),e,a,i,n)}}if(o)return n=n(t),o=i===""?"."+to(t,0):i,Wr(n)?(a="",o!=null&&(a=o.replace(Ir,"$&/")+"/"),Ta(n,e,a,"",function(u){return u})):n!=null&&(oo(n)&&(n=T0(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(Ir,"$&/")+"/")+o)),e.push(n)),1;o=0;var s=i===""?".":i+":";if(Wr(t))for(var r=0;r<t.length;r++)i=t[r],l=s+to(i,r),o+=Ta(i,e,a,l,n);else if(r=S0(t),typeof r=="function")for(t=r.call(t),r=0;!(i=t.next()).done;)i=i.value,l=s+to(i,r++),o+=Ta(i,e,a,l,n);else if(l==="object"){if(typeof t.then=="function")return Ta(M0(t),e,a,i,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function yn(t,e,a){if(t==null)return t;var i=[],n=0;return Ta(t,i,"","",function(l){return e.call(a,l,n++)}),i}function C0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $r=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},A0={map:yn,forEach:function(t,e,a){yn(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return yn(t,function(){e++}),e},toArray:function(t){return yn(t,function(e){return e})||[]},only:function(t){if(!oo(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};T.Activity=k0;T.Children=A0;T.Component=za;T.Fragment=h0;T.Profiler=b0;T.PureComponent=io;T.StrictMode=g0;T.Suspense=v0;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z;T.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Z.H.useMemoCache(t)}};T.cache=function(t){return function(){return t.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=ef({},t.props),n=t.key;if(e!=null)for(l in e.key!==void 0&&(n=""+e.key),e)!lf.call(e,l)||l==="key"||l==="__self"||l==="__source"||l==="ref"&&e.ref===void 0||(i[l]=e[l]);var l=arguments.length-2;if(l===1)i.children=a;else if(1<l){for(var o=Array(l),s=0;s<l;s++)o[s]=arguments[s+2];i.children=o}return lo(t.type,n,i)};T.createContext=function(t){return t={$$typeof:x0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:m0,_context:t},t};T.createElement=function(t,e,a){var i,n={},l=null;if(e!=null)for(i in e.key!==void 0&&(l=""+e.key),e)lf.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(n[i]=e[i]);var o=arguments.length-2;if(o===1)n.children=a;else if(1<o){for(var s=Array(o),r=0;r<o;r++)s[r]=arguments[r+2];n.children=s}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return lo(t,l,n)};T.createRef=function(){return{current:null}};T.forwardRef=function(t){return{$$typeof:y0,render:t}};T.isValidElement=oo;T.lazy=function(t){return{$$typeof:Pr,_payload:{_status:-1,_result:t},_init:C0}};T.memo=function(t,e){return{$$typeof:w0,type:t,compare:e===void 0?null:e}};T.startTransition=function(t){var e=Z.T,a={};Z.T=a;try{var i=t(),n=Z.S;n!==null&&n(a,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(eo,$r)}catch(l){$r(l)}finally{e!==null&&a.types!==null&&(e.types=a.types),Z.T=e}};T.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()};T.use=function(t){return Z.H.use(t)};T.useActionState=function(t,e,a){return Z.H.useActionState(t,e,a)};T.useCallback=function(t,e){return Z.H.useCallback(t,e)};T.useContext=function(t){return Z.H.useContext(t)};T.useDebugValue=function(){};T.useDeferredValue=function(t,e){return Z.H.useDeferredValue(t,e)};T.useEffect=function(t,e){return Z.H.useEffect(t,e)};T.useEffectEvent=function(t){return Z.H.useEffectEvent(t)};T.useId=function(){return Z.H.useId()};T.useImperativeHandle=function(t,e,a){return Z.H.useImperativeHandle(t,e,a)};T.useInsertionEffect=function(t,e){return Z.H.useInsertionEffect(t,e)};T.useLayoutEffect=function(t,e){return Z.H.useLayoutEffect(t,e)};T.useMemo=function(t,e){return Z.H.useMemo(t,e)};T.useOptimistic=function(t,e){return Z.H.useOptimistic(t,e)};T.useReducer=function(t,e,a){return Z.H.useReducer(t,e,a)};T.useRef=function(t){return Z.H.useRef(t)};T.useState=function(t){return Z.H.useState(t)};T.useSyncExternalStore=function(t,e,a){return Z.H.useSyncExternalStore(t,e,a)};T.useTransition=function(){return Z.H.useTransition()};T.version="19.2.8"});var vn=Ae((zg,sf)=>{"use strict";sf.exports=of()});var mf=Ae(J=>{"use strict";function co(t,e){var a=t.length;t.push(e);t:for(;0<a;){var i=a-1>>>1,n=t[i];if(0<wn(n,e))t[i]=e,t[a]=n,a=i;else break t}}function $t(t){return t.length===0?null:t[0]}function Sn(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;t:for(var i=0,n=t.length,l=n>>>1;i<l;){var o=2*(i+1)-1,s=t[o],r=o+1,u=t[r];if(0>wn(s,a))r<n&&0>wn(u,s)?(t[i]=u,t[r]=a,i=r):(t[i]=s,t[o]=a,i=o);else if(r<n&&0>wn(u,a))t[i]=u,t[r]=a,i=r;else break t}}return e}function wn(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}J.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(rf=performance,J.unstable_now=function(){return rf.now()}):(so=Date,ff=so.now(),J.unstable_now=function(){return so.now()-ff});var rf,so,ff,oe=[],Ee=[],E0=1,Ht=null,ht=3,uo=!1,mi=!1,xi=!1,po=!1,df=typeof setTimeout=="function"?setTimeout:null,pf=typeof clearTimeout=="function"?clearTimeout:null,cf=typeof setImmediate!="undefined"?setImmediate:null;function kn(t){for(var e=$t(Ee);e!==null;){if(e.callback===null)Sn(Ee);else if(e.startTime<=t)Sn(Ee),e.sortIndex=e.expirationTime,co(oe,e);else break;e=$t(Ee)}}function ho(t){if(xi=!1,kn(t),!mi)if($t(oe)!==null)mi=!0,Ca||(Ca=!0,Ma());else{var e=$t(Ee);e!==null&&go(ho,e.startTime-t)}}var Ca=!1,yi=-1,hf=5,gf=-1;function bf(){return po?!0:!(J.unstable_now()-gf<hf)}function ro(){if(po=!1,Ca){var t=J.unstable_now();gf=t;var e=!0;try{t:{mi=!1,xi&&(xi=!1,pf(yi),yi=-1),uo=!0;var a=ht;try{e:{for(kn(t),Ht=$t(oe);Ht!==null&&!(Ht.expirationTime>t&&bf());){var i=Ht.callback;if(typeof i=="function"){Ht.callback=null,ht=Ht.priorityLevel;var n=i(Ht.expirationTime<=t);if(t=J.unstable_now(),typeof n=="function"){Ht.callback=n,kn(t),e=!0;break e}Ht===$t(oe)&&Sn(oe),kn(t)}else Sn(oe);Ht=$t(oe)}if(Ht!==null)e=!0;else{var l=$t(Ee);l!==null&&go(ho,l.startTime-t),e=!1}}break t}finally{Ht=null,ht=a,uo=!1}e=void 0}}finally{e?Ma():Ca=!1}}}var Ma;typeof cf=="function"?Ma=function(){cf(ro)}:typeof MessageChannel!="undefined"?(fo=new MessageChannel,uf=fo.port2,fo.port1.onmessage=ro,Ma=function(){uf.postMessage(null)}):Ma=function(){df(ro,0)};var fo,uf;function go(t,e){yi=df(function(){t(J.unstable_now())},e)}J.unstable_IdlePriority=5;J.unstable_ImmediatePriority=1;J.unstable_LowPriority=4;J.unstable_NormalPriority=3;J.unstable_Profiling=null;J.unstable_UserBlockingPriority=2;J.unstable_cancelCallback=function(t){t.callback=null};J.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):hf=0<t?Math.floor(1e3/t):5};J.unstable_getCurrentPriorityLevel=function(){return ht};J.unstable_next=function(t){switch(ht){case 1:case 2:case 3:var e=3;break;default:e=ht}var a=ht;ht=e;try{return t()}finally{ht=a}};J.unstable_requestPaint=function(){po=!0};J.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ht;ht=t;try{return e()}finally{ht=a}};J.unstable_scheduleCallback=function(t,e,a){var i=J.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?i+a:i):a=i,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:E0++,callback:e,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>i?(t.sortIndex=a,co(Ee,t),$t(oe)===null&&t===$t(Ee)&&(xi?(pf(yi),yi=-1):xi=!0,go(ho,a-i))):(t.sortIndex=n,co(oe,t),mi||uo||(mi=!0,Ca||(Ca=!0,Ma()))),t};J.unstable_shouldYield=bf;J.unstable_wrapCallback=function(t){var e=ht;return function(){var a=ht;ht=e;try{return t.apply(this,arguments)}finally{ht=a}}}});var yf=Ae((Cg,xf)=>{"use strict";xf.exports=mf()});var wf=Ae(bt=>{"use strict";var _0=vn();function vf(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _e(){}var gt={d:{f:_e,r:function(){throw Error(vf(522))},D:_e,C:_e,L:_e,m:_e,X:_e,S:_e,M:_e},p:0,findDOMNode:null},O0=Symbol.for("react.portal");function R0(t,e,a){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O0,key:i==null?null:""+i,children:t,containerInfo:e,implementation:a}}var vi=_0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tn(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gt;bt.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(vf(299));return R0(t,e,null,a)};bt.flushSync=function(t){var e=vi.T,a=gt.p;try{if(vi.T=null,gt.p=2,t)return t()}finally{vi.T=e,gt.p=a,gt.d.f()}};bt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,gt.d.C(t,e))};bt.prefetchDNS=function(t){typeof t=="string"&&gt.d.D(t)};bt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,i=Tn(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,l=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?gt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:n,fetchPriority:l}):a==="script"&&gt.d.X(t,{crossOrigin:i,integrity:n,fetchPriority:l,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};bt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Tn(e.as,e.crossOrigin);gt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&gt.d.M(t)};bt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,i=Tn(a,e.crossOrigin);gt.d.L(t,a,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};bt.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Tn(e.as,e.crossOrigin);gt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else gt.d.m(t)};bt.requestFormReset=function(t){gt.d.r(t)};bt.unstable_batchedUpdates=function(t,e){return t(e)};bt.useFormState=function(t,e,a){return vi.H.useFormState(t,e,a)};bt.useFormStatus=function(){return vi.H.useHostTransitionStatus()};bt.version="19.2.8"});var Tf=Ae((Eg,Sf)=>{"use strict";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(t){console.error(t)}}kf(),Sf.exports=wf()});var Lp=Ae(Fl=>{"use strict";var lt=yf(),Wc=vn(),B0=Tf();function x(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sn(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function $c(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pc(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zf(t){if(sn(t)!==t)throw Error(x(188))}function N0(t){var e=t.alternate;if(!e){if(e=sn(t),e===null)throw Error(x(188));return e!==t?null:t}for(var a=t,i=e;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return zf(n),t;if(l===i)return zf(n),e;l=l.sibling}throw Error(x(188))}if(a.return!==i.return)a=n,i=l;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,i=l;break}if(s===i){o=!0,i=n,a=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===a){o=!0,a=l,i=n;break}if(s===i){o=!0,i=l,a=n;break}s=s.sibling}if(!o)throw Error(x(189))}}if(a.alternate!==i)throw Error(x(190))}if(a.tag!==3)throw Error(x(188));return a.stateNode.current===a?t:e}function tu(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=tu(t),e!==null)return e;t=t.sibling}return null}var Q=Object.assign,D0=Symbol.for("react.element"),zn=Symbol.for("react.transitional.element"),Ai=Symbol.for("react.portal"),Ba=Symbol.for("react.fragment"),eu=Symbol.for("react.strict_mode"),Fo=Symbol.for("react.profiler"),au=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Zs=Symbol.for("react.forward_ref"),Wo=Symbol.for("react.suspense"),Io=Symbol.for("react.suspense_list"),Vs=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),$o=Symbol.for("react.activity"),L0=Symbol.for("react.memo_cache_sentinel"),Mf=Symbol.iterator;function wi(t){return t===null||typeof t!="object"?null:(t=Mf&&t[Mf]||t["@@iterator"],typeof t=="function"?t:null)}var U0=Symbol.for("react.client.reference");function Po(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===U0?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ba:return"Fragment";case Fo:return"Profiler";case eu:return"StrictMode";case Wo:return"Suspense";case Io:return"SuspenseList";case $o:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ai:return"Portal";case he:return t.displayName||"Context";case au:return(t._context.displayName||"Context")+".Consumer";case Zs:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vs:return e=t.displayName||null,e!==null?e:Po(t.type)||"Memo";case Oe:e=t._payload,t=t._init;try{return Po(t(e))}catch{}}return null}var Ei=Array.isArray,S=Wc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=B0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fa={pending:!1,data:null,method:null,action:null},ts=[],Na=-1;function ie(t){return{current:t}}function rt(t){0>Na||(t.current=ts[Na],ts[Na]=null,Na--)}function K(t,e){Na++,ts[Na]=t.current,t.current=e}var ae=ie(null),Xi=ie(null),Ye=ie(null),nl=ie(null);function ll(t,e){switch(K(Ye,e),K(Xi,t),K(ae,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Bc(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Bc(e),t=kp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}rt(ae),K(ae,t)}function $a(){rt(ae),rt(Xi),rt(Ye)}function es(t){t.memoizedState!==null&&K(nl,t);var e=ae.current,a=kp(e,t.type);e!==a&&(K(Xi,t),K(ae,a))}function ol(t){Xi.current===t&&(rt(ae),rt(Xi)),nl.current===t&&(rt(nl),nn._currentValue=fa)}var bo,Cf;function la(t){if(bo===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);bo=e&&e[1]||"",Cf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bo+t+Cf}var mo=!1;function xo(t,e){if(!t||mo)return"";mo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(c){var p=c}Reflect.construct(t,[],h)}else{try{h.call()}catch(c){p=c}t.call(h.prototype)}}else{try{throw Error()}catch(c){p=c}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(c){if(c&&p&&typeof c.stack=="string")return[c.stack,p.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),o=l[0],s=l[1];if(o&&s){var r=o.split(`
`),u=s.split(`
`);for(n=i=0;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(i===r.length||n===u.length)for(i=r.length-1,n=u.length-1;1<=i&&0<=n&&r[i]!==u[n];)n--;for(;1<=i&&0<=n;i--,n--)if(r[i]!==u[n]){if(i!==1||n!==1)do if(i--,n--,0>n||r[i]!==u[n]){var b=`
`+r[i].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=i&&0<=n);break}}}finally{mo=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?la(a):""}function H0(t,e){switch(t.tag){case 26:case 27:case 5:return la(t.type);case 16:return la("Lazy");case 13:return t.child!==e&&e!==null?la("Suspense Fallback"):la("Suspense");case 19:return la("SuspenseList");case 0:case 15:return xo(t.type,!1);case 11:return xo(t.type.render,!1);case 1:return xo(t.type,!0);case 31:return la("Activity");default:return""}}function Af(t){try{var e="",a=null;do e+=H0(t,a),a=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var as=Object.prototype.hasOwnProperty,Xs=lt.unstable_scheduleCallback,yo=lt.unstable_cancelCallback,j0=lt.unstable_shouldYield,G0=lt.unstable_requestPaint,_t=lt.unstable_now,q0=lt.unstable_getCurrentPriorityLevel,iu=lt.unstable_ImmediatePriority,nu=lt.unstable_UserBlockingPriority,sl=lt.unstable_NormalPriority,Y0=lt.unstable_LowPriority,lu=lt.unstable_IdlePriority,K0=lt.log,Z0=lt.unstable_setDisableYieldValue,rn=null,Ot=null;function Ue(t){if(typeof K0=="function"&&Z0(t),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(rn,t)}catch{}}var Rt=Math.clz32?Math.clz32:Q0,V0=Math.log,X0=Math.LN2;function Q0(t){return t>>>=0,t===0?32:31-(V0(t)/X0|0)|0}var Mn=256,Cn=262144,An=4194304;function oa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Bl(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var n=0,l=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var s=i&134217727;return s!==0?(i=s&~l,i!==0?n=oa(i):(o&=s,o!==0?n=oa(o):a||(a=s&~t,a!==0&&(n=oa(a))))):(s=i&~l,s!==0?n=oa(s):o!==0?n=oa(o):a||(a=i&~t,a!==0&&(n=oa(a)))),n===0?0:e!==0&&e!==n&&(e&l)===0&&(l=n&-n,a=e&-e,l>=a||l===32&&(a&4194048)!==0)?e:n}function fn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function J0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ou(){var t=An;return An<<=1,(An&62914560)===0&&(An=4194304),t}function vo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function cn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function F0(t,e,a,i,n,l){var o=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var s=t.entanglements,r=t.expirationTimes,u=t.hiddenUpdates;for(a=o&~a;0<a;){var b=31-Rt(a),h=1<<b;s[b]=0,r[b]=-1;var p=u[b];if(p!==null)for(u[b]=null,b=0;b<p.length;b++){var c=p[b];c!==null&&(c.lane&=-536870913)}a&=~h}i!==0&&su(t,i,0),l!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=l&~(o&~e))}function su(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Rt(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&261930}function ru(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-Rt(a),n=1<<i;n&e|t[i]&e&&(t[i]|=e),a&=~n}}function fu(t,e){var a=e&-e;return a=(a&42)!==0?1:Qs(a),(a&(t.suspendedLanes|e))!==0?0:a}function Qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Js(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function cu(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:Bp(t.type))}function Ef(t,e){var a=L.p;try{return L.p=t,e()}finally{L.p=a}}var ea=Math.random().toString(36).slice(2),ct="__reactFiber$"+ea,Tt="__reactProps$"+ea,fi="__reactContainer$"+ea,is="__reactEvents$"+ea,W0="__reactListeners$"+ea,I0="__reactHandles$"+ea,_f="__reactResources$"+ea,un="__reactMarker$"+ea;function Fs(t){delete t[ct],delete t[Tt],delete t[is],delete t[W0],delete t[I0]}function Da(t){var e=t[ct];if(e)return e;for(var a=t.parentNode;a;){if(e=a[fi]||a[ct]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Hc(t);t!==null;){if(a=t[ct])return a;t=Hc(t)}return e}t=a,a=t.parentNode}return null}function ci(t){if(t=t[ct]||t[fi]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function _i(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(x(33))}function Va(t){var e=t[_f];return e||(e=t[_f]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function st(t){t[un]=!0}var uu=new Set,du={};function ya(t,e){Pa(t,e),Pa(t+"Capture",e)}function Pa(t,e){for(du[t]=e,t=0;t<e.length;t++)uu.add(e[t])}var $0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Of={},Rf={};function P0(t){return as.call(Rf,t)?!0:as.call(Of,t)?!1:$0.test(t)?Rf[t]=!0:(Of[t]=!0,!1)}function Kn(t,e,a){if(P0(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function En(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function se(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}function Gt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pu(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function th(t,e,a){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i!="undefined"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ns(t){if(!t._valueTracker){var e=pu(t)?"checked":"value";t._valueTracker=th(t,e,""+t[e])}}function hu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=pu(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}var eh=/[\n"\\]/g;function Kt(t){return t.replace(eh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ls(t,e,a,i,n,l,o,s){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Gt(e)):t.value!==""+Gt(e)&&(t.value=""+Gt(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?os(t,o,Gt(e)):a!=null?os(t,o,Gt(a)):i!=null&&t.removeAttribute("value"),n==null&&l!=null&&(t.defaultChecked=!!l),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Gt(s):t.removeAttribute("name")}function gu(t,e,a,i,n,l,o,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ns(t);return}a=a!=null?""+Gt(a):"",e=e!=null?""+Gt(e):a,s||e===t.value||(t.value=e),t.defaultValue=e}i=i!=null?i:n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=s?t.checked:!!i,t.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),ns(t)}function os(t,e,a){e==="number"&&rl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Xa(t,e,a,i){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&i&&(t[a].defaultSelected=!0)}else{for(a=""+Gt(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function bu(t,e,a){if(e!=null&&(e=""+Gt(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Gt(a):""}function mu(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(x(92));if(Ei(i)){if(1<i.length)throw Error(x(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=Gt(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i),ns(t)}function ti(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var ah=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bf(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||ah.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function xu(t,e,a){if(e!=null&&typeof e!="object")throw Error(x(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var n in e)i=e[n],e.hasOwnProperty(n)&&a[n]!==i&&Bf(t,n,i)}else for(var l in e)e.hasOwnProperty(l)&&Bf(t,l,e[l])}function Ws(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(t){return nh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ge(){}var ss=null;function Is(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var La=null,Qa=null;function Nf(t){var e=ci(t);if(e&&(t=e.stateNode)){var a=t[Tt]||null;t:switch(t=e.stateNode,e.type){case"input":if(ls(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Kt(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var n=i[Tt]||null;if(!n)throw Error(x(90));ls(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&hu(i)}break t;case"textarea":bu(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Xa(t,!!a.multiple,e,!1)}}}var wo=!1;function yu(t,e,a){if(wo)return t(e,a);wo=!0;try{var i=t(e);return i}finally{if(wo=!1,(La!==null||Qa!==null)&&(Vl(),La&&(e=La,t=Qa,Qa=La=null,Nf(e),t)))for(e=0;e<t.length;e++)Nf(t[e])}}function Qi(t,e){var a=t.stateNode;if(a===null)return null;var i=a[Tt]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(x(231,e,typeof a));return a}var ve=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),rs=!1;if(ve)try{Aa={},Object.defineProperty(Aa,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{rs=!1}var Aa,He=null,$s=null,Vn=null;function vu(){if(Vn)return Vn;var t,e=$s,a=e.length,i,n="value"in He?He.value:He.textContent,l=n.length;for(t=0;t<a&&e[t]===n[t];t++);var o=a-t;for(i=1;i<=o&&e[a-i]===n[l-i];i++);return Vn=n.slice(t,1<i?1-i:void 0)}function Xn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _n(){return!0}function Df(){return!1}function zt(t){function e(a,i,n,l,o){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(a=t[s],this[s]=a?a(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_n:Df,this.isPropagationStopped=Df,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=zt(va),dn=Q({},va,{view:0,detail:0}),lh=zt(dn),ko,So,ki,Dl=Q({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(ko=t.screenX-ki.screenX,So=t.screenY-ki.screenY):So=ko=0,ki=t),ko)},movementY:function(t){return"movementY"in t?t.movementY:So}}),Lf=zt(Dl),oh=Q({},Dl,{dataTransfer:0}),sh=zt(oh),rh=Q({},dn,{relatedTarget:0}),To=zt(rh),fh=Q({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=zt(fh),uh=Q({},va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dh=zt(uh),ph=Q({},va,{data:0}),Uf=zt(ph),hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bh[t])?!!e[t]:!1}function Ps(){return mh}var xh=Q({},dn,{key:function(t){if(t.key){var e=hh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(t){return t.type==="keypress"?Xn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yh=zt(xh),vh=Q({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=zt(vh),wh=Q({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),kh=zt(wh),Sh=Q({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),Th=zt(Sh),zh=Q({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mh=zt(zh),Ch=Q({},va,{newState:0,oldState:0}),Ah=zt(Ch),Eh=[9,13,27,32],tr=ve&&"CompositionEvent"in window,Bi=null;ve&&"documentMode"in document&&(Bi=document.documentMode);var _h=ve&&"TextEvent"in window&&!Bi,wu=ve&&(!tr||Bi&&8<Bi&&11>=Bi),jf=" ",Gf=!1;function ku(t,e){switch(t){case"keyup":return Eh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Su(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ua=!1;function Oh(t,e){switch(t){case"compositionend":return Su(e);case"keypress":return e.which!==32?null:(Gf=!0,jf);case"textInput":return t=e.data,t===jf&&Gf?null:t;default:return null}}function Rh(t,e){if(Ua)return t==="compositionend"||!tr&&ku(t,e)?(t=vu(),Vn=$s=He=null,Ua=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wu&&e.locale!=="ko"?null:e.data;default:return null}}var Bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bh[t.type]:e==="textarea"}function Tu(t,e,a,i){La?Qa?Qa.push(i):Qa=[i]:La=i,e=Ml(e,"onChange"),0<e.length&&(a=new Nl("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Ni=null,Ji=null;function Nh(t){yp(t,0)}function Ll(t){var e=_i(t);if(hu(e))return t}function Yf(t,e){if(t==="change")return e}var zu=!1;ve&&(ve?(Rn="oninput"in document,Rn||(zo=document.createElement("div"),zo.setAttribute("oninput","return;"),Rn=typeof zo.oninput=="function"),On=Rn):On=!1,zu=On&&(!document.documentMode||9<document.documentMode));var On,Rn,zo;function Kf(){Ni&&(Ni.detachEvent("onpropertychange",Mu),Ji=Ni=null)}function Mu(t){if(t.propertyName==="value"&&Ll(Ji)){var e=[];Tu(e,Ji,t,Is(t)),yu(Nh,e)}}function Dh(t,e,a){t==="focusin"?(Kf(),Ni=e,Ji=a,Ni.attachEvent("onpropertychange",Mu)):t==="focusout"&&Kf()}function Lh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(Ji)}function Uh(t,e){if(t==="click")return Ll(e)}function Hh(t,e){if(t==="input"||t==="change")return Ll(e)}function jh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:jh;function Fi(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!as.call(e,n)||!Nt(t[n],e[n]))return!1}return!0}function Zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vf(t,e){var a=Zf(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zf(a)}}function Cu(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cu(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Au(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=rl(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=rl(t.document)}return e}function er(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Gh=ve&&"documentMode"in document&&11>=document.documentMode,Ha=null,fs=null,Di=null,cs=!1;function Xf(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cs||Ha==null||Ha!==rl(i)||(i=Ha,"selectionStart"in i&&er(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Di&&Fi(Di,i)||(Di=i,i=Ml(fs,"onSelect"),0<i.length&&(e=new Nl("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=Ha)))}function na(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var ja={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},Mo={},Eu={};ve&&(Eu=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function wa(t){if(Mo[t])return Mo[t];if(!ja[t])return t;var e=ja[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Eu)return Mo[t]=e[a];return t}var _u=wa("animationend"),Ou=wa("animationiteration"),Ru=wa("animationstart"),qh=wa("transitionrun"),Yh=wa("transitionstart"),Kh=wa("transitioncancel"),Bu=wa("transitionend"),Nu=new Map,us="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");us.push("scrollEnd");function It(t,e){Nu.set(t,e),ya(e,[t])}var fl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},jt=[],Ga=0,ar=0;function Ul(){for(var t=Ga,e=ar=Ga=0;e<t;){var a=jt[e];jt[e++]=null;var i=jt[e];jt[e++]=null;var n=jt[e];jt[e++]=null;var l=jt[e];if(jt[e++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}l!==0&&Du(a,n,l)}}function Hl(t,e,a,i){jt[Ga++]=t,jt[Ga++]=e,jt[Ga++]=a,jt[Ga++]=i,ar|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function ir(t,e,a,i){return Hl(t,e,a,i),cl(t)}function ka(t,e){return Hl(t,null,null,e),cl(t)}function Du(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var n=!1,l=t.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(n=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,n&&e!==null&&(n=31-Rt(a),t=l.hiddenUpdates,i=t[n],i===null?t[n]=[e]:i.push(e),e.lane=a|536870912),l):null}function cl(t){if(50<Zi)throw Zi=0,Rs=null,Error(x(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var qa={};function Zh(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,a,i){return new Zh(t,e,a,i)}function nr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function me(t,e){var a=t.alternate;return a===null?(a=At(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Lu(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Qn(t,e,a,i,n,l){var o=0;if(i=t,typeof t=="function")nr(t)&&(o=1);else if(typeof t=="string")o=Q1(t,a,ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case $o:return t=At(31,a,e,n),t.elementType=$o,t.lanes=l,t;case Ba:return ca(a.children,n,l,e);case eu:o=8,n|=24;break;case Fo:return t=At(12,a,e,n|2),t.elementType=Fo,t.lanes=l,t;case Wo:return t=At(13,a,e,n),t.elementType=Wo,t.lanes=l,t;case Io:return t=At(19,a,e,n),t.elementType=Io,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case he:o=10;break t;case au:o=9;break t;case Zs:o=11;break t;case Vs:o=14;break t;case Oe:o=16,i=null;break t}o=29,a=Error(x(130,t===null?"null":typeof t,"")),i=null}return e=At(o,a,e,n),e.elementType=t,e.type=i,e.lanes=l,e}function ca(t,e,a,i){return t=At(7,t,i,e),t.lanes=a,t}function Co(t,e,a){return t=At(6,t,null,e),t.lanes=a,t}function Uu(t){var e=At(18,null,null,0);return e.stateNode=t,e}function Ao(t,e,a){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Qf=new WeakMap;function Zt(t,e){if(typeof t=="object"&&t!==null){var a=Qf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Af(e)},Qf.set(t,e),e)}return{value:t,source:e,stack:Af(e)}}var Ya=[],Ka=0,ul=null,Wi=0,qt=[],Yt=0,Ie=null,Pt=1,te="";function de(t,e){Ya[Ka++]=Wi,Ya[Ka++]=ul,ul=t,Wi=e}function Hu(t,e,a){qt[Yt++]=Pt,qt[Yt++]=te,qt[Yt++]=Ie,Ie=t;var i=Pt;t=te;var n=32-Rt(i)-1;i&=~(1<<n),a+=1;var l=32-Rt(e)+n;if(30<l){var o=n-n%5;l=(i&(1<<o)-1).toString(32),i>>=o,n-=o,Pt=1<<32-Rt(e)+n|a<<n|i,te=l+t}else Pt=1<<l|a<<n|i,te=t}function lr(t){t.return!==null&&(de(t,1),Hu(t,1,0))}function or(t){for(;t===ul;)ul=Ya[--Ka],Ya[Ka]=null,Wi=Ya[--Ka],Ya[Ka]=null;for(;t===Ie;)Ie=qt[--Yt],qt[Yt]=null,te=qt[--Yt],qt[Yt]=null,Pt=qt[--Yt],qt[Yt]=null}function ju(t,e){qt[Yt++]=Pt,qt[Yt++]=te,qt[Yt++]=Ie,Pt=e.id,te=e.overflow,Ie=t}var ut=null,X=null,O=!1,Ke=null,Vt=!1,ds=Error(x(519));function $e(t){var e=Error(x(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ii(Zt(e,t)),ds}function Jf(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[ct]=t,e[Tt]=i,a){case"dialog":C("cancel",e),C("close",e);break;case"iframe":case"object":case"embed":C("load",e);break;case"video":case"audio":for(a=0;a<en.length;a++)C(en[a],e);break;case"source":C("error",e);break;case"img":case"image":case"link":C("error",e),C("load",e);break;case"details":C("toggle",e);break;case"input":C("invalid",e),gu(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":C("invalid",e);break;case"textarea":C("invalid",e),mu(e,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||wp(e.textContent,a)?(i.popover!=null&&(C("beforetoggle",e),C("toggle",e)),i.onScroll!=null&&C("scroll",e),i.onScrollEnd!=null&&C("scrollend",e),i.onClick!=null&&(e.onclick=ge),e=!0):e=!1,e||$e(t,!0)}function Ff(t){for(ut=t.return;ut;)switch(ut.tag){case 5:case 31:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:ut=ut.return}}function Ea(t){if(t!==ut)return!1;if(!O)return Ff(t),O=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Us(t.type,t.memoizedProps)),a=!a),a&&X&&$e(t),Ff(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));X=Uc(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));X=Uc(t)}else e===27?(e=X,aa(t.type)?(t=qs,qs=null,X=t):X=e):X=ut?Qt(t.stateNode.nextSibling):null;return!0}function ha(){X=ut=null,O=!1}function Eo(){var t=Ke;return t!==null&&(kt===null?kt=t:kt.push.apply(kt,t),Ke=null),t}function Ii(t){Ke===null?Ke=[t]:Ke.push(t)}var ps=ie(null),Sa=null,be=null;function Be(t,e,a){K(ps,e._currentValue),e._currentValue=a}function xe(t){t._currentValue=ps.current,rt(ps)}function hs(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function gs(t,e,a,i){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){var o=n.child;l=l.firstContext;t:for(;l!==null;){var s=l;l=n;for(var r=0;r<e.length;r++)if(s.context===e[r]){l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),hs(l.return,a,t),i||(o=null);break t}l=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(x(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),hs(o,a,t),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===t){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function ui(t,e,a,i){t=null;for(var n=e,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(x(387));if(o=o.memoizedProps,o!==null){var s=n.type;Nt(n.pendingProps.value,o.value)||(t!==null?t.push(s):t=[s])}}else if(n===nl.current){if(o=n.alternate,o===null)throw Error(x(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(nn):t=[nn])}n=n.return}t!==null&&gs(e,t,a,i),e.flags|=262144}function dl(t){for(t=t.firstContext;t!==null;){if(!Nt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ga(t){Sa=t,be=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dt(t){return Gu(Sa,t)}function Bn(t,e){return Sa===null&&ga(t),Gu(t,e)}function Gu(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},be===null){if(t===null)throw Error(x(308));be=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else be=be.next=e;return a}var Vh=typeof AbortController!="undefined"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Xh=lt.unstable_scheduleCallback,Qh=lt.unstable_NormalPriority,at={$$typeof:he,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new Vh,data:new Map,refCount:0}}function pn(t){t.refCount--,t.refCount===0&&Xh(Qh,function(){t.controller.abort()})}var Li=null,bs=0,ei=0,Ja=null;function Jh(t,e){if(Li===null){var a=Li=[];bs=0,ei=Rr(),Ja={status:"pending",value:void 0,then:function(i){a.push(i)}}}return bs++,e.then(Wf,Wf),e}function Wf(){if(--bs===0&&Li!==null){Ja!==null&&(Ja.status="fulfilled");var t=Li;Li=null,ei=0,Ja=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Fh(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var If=S.S;S.S=function(t,e){tp=_t(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Jh(t,e),If!==null&&If(t,e)};var ua=ie(null);function rr(){var t=ua.current;return t!==null?t:q.pooledCache}function Jn(t,e){e===null?K(ua,ua.current):K(ua,e.pool)}function qu(){var t=rr();return t===null?null:{parent:at._currentValue,pool:t}}var di=Error(x(460)),fr=Error(x(474)),jl=Error(x(542)),pl={then:function(){}};function $f(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yu(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(ge,ge),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,tc(t),t;default:if(typeof e.status=="string")e.then(ge,ge);else{if(t=q,t!==null&&100<t.shellSuspendCounter)throw Error(x(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=i}},function(i){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,tc(t),t}throw da=e,di}}function sa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(da=a,di):a}}var da=null;function Pf(){if(da===null)throw Error(x(459));var t=da;return da=null,t}function tc(t){if(t===di||t===jl)throw Error(x(483))}var Fa=null,$i=0;function Nn(t){var e=$i;return $i+=1,Fa===null&&(Fa=[]),Yu(Fa,t,e)}function Si(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Dn(t,e){throw e.$$typeof===D0?Error(x(525)):(t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ku(t){function e(d,f){if(t){var g=d.deletions;g===null?(d.deletions=[f],d.flags|=16):g.push(f)}}function a(d,f){if(!t)return null;for(;f!==null;)e(d,f),f=f.sibling;return null}function i(d){for(var f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function n(d,f){return d=me(d,f),d.index=0,d.sibling=null,d}function l(d,f,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<f?(d.flags|=67108866,f):g):(d.flags|=67108866,f)):(d.flags|=1048576,f)}function o(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function s(d,f,g,m){return f===null||f.tag!==6?(f=Co(g,d.mode,m),f.return=d,f):(f=n(f,g),f.return=d,f)}function r(d,f,g,m){var k=g.type;return k===Ba?b(d,f,g.props.children,m,g.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Oe&&sa(k)===f.type)?(f=n(f,g.props),Si(f,g),f.return=d,f):(f=Qn(g.type,g.key,g.props,null,d.mode,m),Si(f,g),f.return=d,f)}function u(d,f,g,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ao(g,d.mode,m),f.return=d,f):(f=n(f,g.children||[]),f.return=d,f)}function b(d,f,g,m,k){return f===null||f.tag!==7?(f=ca(g,d.mode,m,k),f.return=d,f):(f=n(f,g),f.return=d,f)}function h(d,f,g){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Co(""+f,d.mode,g),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zn:return g=Qn(f.type,f.key,f.props,null,d.mode,g),Si(g,f),g.return=d,g;case Ai:return f=Ao(f,d.mode,g),f.return=d,f;case Oe:return f=sa(f),h(d,f,g)}if(Ei(f)||wi(f))return f=ca(f,d.mode,g,null),f.return=d,f;if(typeof f.then=="function")return h(d,Nn(f),g);if(f.$$typeof===he)return h(d,Bn(d,f),g);Dn(d,f)}return null}function p(d,f,g,m){var k=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return k!==null?null:s(d,f,""+g,m);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zn:return g.key===k?r(d,f,g,m):null;case Ai:return g.key===k?u(d,f,g,m):null;case Oe:return g=sa(g),p(d,f,g,m)}if(Ei(g)||wi(g))return k!==null?null:b(d,f,g,m,null);if(typeof g.then=="function")return p(d,f,Nn(g),m);if(g.$$typeof===he)return p(d,f,Bn(d,g),m);Dn(d,g)}return null}function c(d,f,g,m,k){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return d=d.get(g)||null,s(f,d,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zn:return d=d.get(m.key===null?g:m.key)||null,r(f,d,m,k);case Ai:return d=d.get(m.key===null?g:m.key)||null,u(f,d,m,k);case Oe:return m=sa(m),c(d,f,g,m,k)}if(Ei(m)||wi(m))return d=d.get(g)||null,b(f,d,m,k,null);if(typeof m.then=="function")return c(d,f,g,Nn(m),k);if(m.$$typeof===he)return c(d,f,g,Bn(f,m),k);Dn(f,m)}return null}function y(d,f,g,m){for(var k=null,B=null,w=f,M=f=0,E=null;w!==null&&M<g.length;M++){w.index>M?(E=w,w=null):E=w.sibling;var N=p(d,w,g[M],m);if(N===null){w===null&&(w=E);break}t&&w&&N.alternate===null&&e(d,w),f=l(N,f,M),B===null?k=N:B.sibling=N,B=N,w=E}if(M===g.length)return a(d,w),O&&de(d,M),k;if(w===null){for(;M<g.length;M++)w=h(d,g[M],m),w!==null&&(f=l(w,f,M),B===null?k=w:B.sibling=w,B=w);return O&&de(d,M),k}for(w=i(w);M<g.length;M++)E=c(w,d,M,g[M],m),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?M:E.key),f=l(E,f,M),B===null?k=E:B.sibling=E,B=E);return t&&w.forEach(function(Ce){return e(d,Ce)}),O&&de(d,M),k}function v(d,f,g,m){if(g==null)throw Error(x(151));for(var k=null,B=null,w=f,M=f=0,E=null,N=g.next();w!==null&&!N.done;M++,N=g.next()){w.index>M?(E=w,w=null):E=w.sibling;var Ce=p(d,w,N.value,m);if(Ce===null){w===null&&(w=E);break}t&&w&&Ce.alternate===null&&e(d,w),f=l(Ce,f,M),B===null?k=Ce:B.sibling=Ce,B=Ce,w=E}if(N.done)return a(d,w),O&&de(d,M),k;if(w===null){for(;!N.done;M++,N=g.next())N=h(d,N.value,m),N!==null&&(f=l(N,f,M),B===null?k=N:B.sibling=N,B=N);return O&&de(d,M),k}for(w=i(w);!N.done;M++,N=g.next())N=c(w,d,M,N.value,m),N!==null&&(t&&N.alternate!==null&&w.delete(N.key===null?M:N.key),f=l(N,f,M),B===null?k=N:B.sibling=N,B=N);return t&&w.forEach(function(o0){return e(d,o0)}),O&&de(d,M),k}function R(d,f,g,m){if(typeof g=="object"&&g!==null&&g.type===Ba&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zn:t:{for(var k=g.key;f!==null;){if(f.key===k){if(k=g.type,k===Ba){if(f.tag===7){a(d,f.sibling),m=n(f,g.props.children),m.return=d,d=m;break t}}else if(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Oe&&sa(k)===f.type){a(d,f.sibling),m=n(f,g.props),Si(m,g),m.return=d,d=m;break t}a(d,f);break}else e(d,f);f=f.sibling}g.type===Ba?(m=ca(g.props.children,d.mode,m,g.key),m.return=d,d=m):(m=Qn(g.type,g.key,g.props,null,d.mode,m),Si(m,g),m.return=d,d=m)}return o(d);case Ai:t:{for(k=g.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){a(d,f.sibling),m=n(f,g.children||[]),m.return=d,d=m;break t}else{a(d,f);break}else e(d,f);f=f.sibling}m=Ao(g,d.mode,m),m.return=d,d=m}return o(d);case Oe:return g=sa(g),R(d,f,g,m)}if(Ei(g))return y(d,f,g,m);if(wi(g)){if(k=wi(g),typeof k!="function")throw Error(x(150));return g=k.call(g),v(d,f,g,m)}if(typeof g.then=="function")return R(d,f,Nn(g),m);if(g.$$typeof===he)return R(d,f,Bn(d,g),m);Dn(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,f!==null&&f.tag===6?(a(d,f.sibling),m=n(f,g),m.return=d,d=m):(a(d,f),m=Co(g,d.mode,m),m.return=d,d=m),o(d)):a(d,f)}return function(d,f,g,m){try{$i=0;var k=R(d,f,g,m);return Fa=null,k}catch(w){if(w===di||w===jl)throw w;var B=At(29,w,null,d.mode);return B.lanes=m,B.return=d,B}}}var ba=Ku(!0),Zu=Ku(!1),Re=!1;function cr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ms(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ze(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ve(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(D&2)!==0){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,e=cl(t),Du(t,null,a),e}return Hl(t,i,e,a),cl(t)}function Ui(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,ru(t,a)}}function _o(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?n=l=e:l=l.next=e}else n=l=e;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var xs=!1;function Hi(){if(xs){var t=Ja;if(t!==null)throw t}}function ji(t,e,a,i){xs=!1;var n=t.updateQueue;Re=!1;var l=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,u=r.next;r.next=null,o===null?l=u:o.next=u,o=r;var b=t.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==o&&(s===null?b.firstBaseUpdate=u:s.next=u,b.lastBaseUpdate=r))}if(l!==null){var h=n.baseState;o=0,b=u=r=null,s=l;do{var p=s.lane&-536870913,c=p!==s.lane;if(c?(_&p)===p:(i&p)===p){p!==0&&p===ei&&(xs=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var y=t,v=s;p=e;var R=a;switch(v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(R,h,p);break t}h=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,p=typeof y=="function"?y.call(R,h,p):y,p==null)break t;h=Q({},h,p);break t;case 2:Re=!0}}p=s.callback,p!==null&&(t.flags|=64,c&&(t.flags|=8192),c=n.callbacks,c===null?n.callbacks=[p]:c.push(p))}else c={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(u=b=c,r=h):b=b.next=c,o|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;c=s,s=c.next,c.next=null,n.lastBaseUpdate=c,n.shared.pending=null}}while(!0);b===null&&(r=h),n.baseState=r,n.firstBaseUpdate=u,n.lastBaseUpdate=b,l===null&&(n.shared.lanes=0),ta|=o,t.lanes=o,t.memoizedState=h}}function Vu(t,e){if(typeof t!="function")throw Error(x(191,t));t.call(e)}function Xu(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Vu(a[t],e)}var ai=ie(null),hl=ie(0);function ec(t,e){t=Te,K(hl,t),K(ai,e),Te=t|e.baseLanes}function ys(){K(hl,Te),K(ai,ai.current)}function ur(){Te=hl.current,rt(ai),rt(hl)}var Dt=ie(null),Xt=null;function Ne(t){var e=t.alternate;K($,$.current&1),K(Dt,t),Xt===null&&(e===null||ai.current!==null||e.memoizedState!==null)&&(Xt=t)}function vs(t){K($,$.current),K(Dt,t),Xt===null&&(Xt=t)}function Qu(t){t.tag===22?(K($,$.current),K(Dt,t),Xt===null&&(Xt=t)):De(t)}function De(){K($,$.current),K(Dt,Dt.current)}function Ct(t){rt(Dt),Xt===t&&(Xt=null),rt($)}var $=ie(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||js(a)||Gs(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var we=0,z=null,G=null,tt=null,bl=!1,Wa=!1,ma=!1,ml=0,Pi=0,Ia=null,Wh=0;function W(){throw Error(x(321))}function dr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Nt(t[a],e[a]))return!1;return!0}function pr(t,e,a,i,n,l){return we=l,z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,S.H=t===null||t.memoizedState===null?Td:Tr,ma=!1,l=a(i,n),ma=!1,Wa&&(l=Fu(e,a,i,n)),Ju(t),l}function Ju(t){S.H=tn;var e=G!==null&&G.next!==null;if(we=0,tt=G=z=null,bl=!1,Pi=0,Ia=null,e)throw Error(x(300));t===null||it||(t=t.dependencies,t!==null&&dl(t)&&(it=!0))}function Fu(t,e,a,i){z=t;var n=0;do{if(Wa&&(Ia=null),Pi=0,Wa=!1,25<=n)throw Error(x(301));if(n+=1,tt=G=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}S.H=zd,l=e(a,i)}while(Wa);return l}function Ih(){var t=S.H,e=t.useState()[0];return e=typeof e.then=="function"?hn(e):e,t=t.useState()[0],(G!==null?G.memoizedState:null)!==t&&(z.flags|=1024),e}function hr(){var t=ml!==0;return ml=0,t}function gr(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function br(t){if(bl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}bl=!1}we=0,tt=G=z=null,Wa=!1,Pi=ml=0,Ia=null}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?z.memoizedState=tt=t:tt=tt.next=t,tt}function P(){if(G===null){var t=z.alternate;t=t!==null?t.memoizedState:null}else t=G.next;var e=tt===null?z.memoizedState:tt.next;if(e!==null)tt=e,G=t;else{if(t===null)throw z.alternate===null?Error(x(467)):Error(x(310));G=t,t={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},tt===null?z.memoizedState=tt=t:tt=tt.next=t}return tt}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hn(t){var e=Pi;return Pi+=1,Ia===null&&(Ia=[]),t=Yu(Ia,t,e),e=z,(tt===null?e.memoizedState:tt.next)===null&&(e=e.alternate,S.H=e===null||e.memoizedState===null?Td:Tr),t}function ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hn(t);if(t.$$typeof===he)return dt(t)}throw Error(x(438,String(t)))}function mr(t){var e=null,a=z.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=z.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Gl(),z.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=L0;return e.index++,a}function ke(t,e){return typeof e=="function"?e(t):e}function Fn(t){var e=P();return xr(e,G,t)}function xr(t,e,a){var i=t.queue;if(i===null)throw Error(x(311));i.lastRenderedReducer=a;var n=t.baseQueue,l=i.pending;if(l!==null){if(n!==null){var o=n.next;n.next=l.next,l.next=o}e.baseQueue=n=l,i.pending=null}if(l=t.baseState,n===null)t.memoizedState=l;else{e=n.next;var s=o=null,r=null,u=e,b=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(_&h)===h:(we&h)===h){var p=u.revertLane;if(p===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===ei&&(b=!0);else if((we&p)===p){u=u.next,p===ei&&(b=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},r===null?(s=r=h,o=l):r=r.next=h,z.lanes|=p,ta|=p;h=u.action,ma&&a(l,h),l=u.hasEagerState?u.eagerState:a(l,h)}else p={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},r===null?(s=r=p,o=l):r=r.next=p,z.lanes|=h,ta|=h;u=u.next}while(u!==null&&u!==e);if(r===null?o=l:r.next=s,!Nt(l,t.memoizedState)&&(it=!0,b&&(a=Ja,a!==null)))throw a;t.memoizedState=l,t.baseState=o,t.baseQueue=r,i.lastRenderedState=l}return n===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Oo(t){var e=P(),a=e.queue;if(a===null)throw Error(x(311));a.lastRenderedReducer=t;var i=a.dispatch,n=a.pending,l=e.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do l=t(l,o.action),o=o.next;while(o!==n);Nt(l,e.memoizedState)||(it=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),a.lastRenderedState=l}return[l,i]}function Wu(t,e,a){var i=z,n=P(),l=O;if(l){if(a===void 0)throw Error(x(407));a=a()}else a=e();var o=!Nt((G||n).memoizedState,a);if(o&&(n.memoizedState=a,it=!0),n=n.queue,yr(Pu.bind(null,i,n,t),[t]),n.getSnapshot!==e||o||tt!==null&&tt.memoizedState.tag&1){if(i.flags|=2048,ii(9,{destroy:void 0},$u.bind(null,i,n,a,e),null),q===null)throw Error(x(349));l||(we&127)!==0||Iu(i,e,a)}return a}function Iu(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=z.updateQueue,e===null?(e=Gl(),z.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function $u(t,e,a,i){e.value=a,e.getSnapshot=i,td(e)&&ed(t)}function Pu(t,e,a){return a(function(){td(e)&&ed(t)})}function td(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Nt(t,a)}catch{return!0}}function ed(t){var e=ka(t,2);e!==null&&St(e,t,2)}function ws(t){var e=mt();if(typeof t=="function"){var a=t;if(t=a(),ma){Ue(!0);try{a()}finally{Ue(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:t},e}function ad(t,e,a,i){return t.baseState=a,xr(t,G,typeof i=="function"?i:ke)}function $h(t,e,a,i,n){if(Kl(t))throw Error(x(485));if(t=e.action,t!==null){var l={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};S.T!==null?a(!0):l.isTransition=!1,i(l),a=e.pending,a===null?(l.next=e.pending=l,id(e,l)):(l.next=a.next,e.pending=a.next=l)}}function id(t,e){var a=e.action,i=e.payload,n=t.state;if(e.isTransition){var l=S.T,o={};S.T=o;try{var s=a(n,i),r=S.S;r!==null&&r(o,s),ac(t,e,s)}catch(u){ks(t,e,u)}finally{l!==null&&o.types!==null&&(l.types=o.types),S.T=l}}else try{l=a(n,i),ac(t,e,l)}catch(u){ks(t,e,u)}}function ac(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){ic(t,e,i)},function(i){return ks(t,e,i)}):ic(t,e,a)}function ic(t,e,a){e.status="fulfilled",e.value=a,nd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,id(t,a)))}function ks(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,nd(e),e=e.next;while(e!==i)}t.action=null}function nd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ld(t,e){return e}function nc(t,e){if(O){var a=q.formState;if(a!==null){t:{var i=z;if(O){if(X){e:{for(var n=X,l=Vt;n.nodeType!==8;){if(!l){n=null;break e}if(n=Qt(n.nextSibling),n===null){n=null;break e}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){X=Qt(n.nextSibling),i=n.data==="F!";break t}}$e(i)}i=!1}i&&(e=a[0])}}return a=mt(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ld,lastRenderedState:e},a.queue=i,a=wd.bind(null,z,i),i.dispatch=a,i=ws(!1),l=Sr.bind(null,z,!1,i.queue),i=mt(),n={state:e,dispatch:null,action:t,pending:null},i.queue=n,a=$h.bind(null,z,n,l,a),n.dispatch=a,i.memoizedState=t,[e,a,!1]}function lc(t){var e=P();return od(e,G,t)}function od(t,e,a){if(e=xr(t,e,ld)[0],t=Fn(ke)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=hn(e)}catch(o){throw o===di?jl:o}else i=e;e=P();var n=e.queue,l=n.dispatch;return a!==e.memoizedState&&(z.flags|=2048,ii(9,{destroy:void 0},Ph.bind(null,n,a),null)),[i,l,t]}function Ph(t,e){t.action=e}function oc(t){var e=P(),a=G;if(a!==null)return od(e,a,t);P(),e=e.memoizedState,a=P();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function ii(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=z.updateQueue,e===null&&(e=Gl(),z.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function sd(){return P().memoizedState}function Wn(t,e,a,i){var n=mt();z.flags|=t,n.memoizedState=ii(1|e,{destroy:void 0},a,i===void 0?null:i)}function Yl(t,e,a,i){var n=P();i=i===void 0?null:i;var l=n.memoizedState.inst;G!==null&&i!==null&&dr(i,G.memoizedState.deps)?n.memoizedState=ii(e,l,a,i):(z.flags|=t,n.memoizedState=ii(1|e,l,a,i))}function sc(t,e){Wn(8390656,8,t,e)}function yr(t,e){Yl(2048,8,t,e)}function t1(t){z.flags|=4;var e=z.updateQueue;if(e===null)e=Gl(),z.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function rd(t){var e=P().memoizedState;return t1({ref:e,nextImpl:t}),function(){if((D&2)!==0)throw Error(x(440));return e.impl.apply(void 0,arguments)}}function fd(t,e){return Yl(4,2,t,e)}function cd(t,e){return Yl(4,4,t,e)}function ud(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dd(t,e,a){a=a!=null?a.concat([t]):null,Yl(4,4,ud.bind(null,e,t),a)}function vr(){}function pd(t,e){var a=P();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&dr(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function hd(t,e){var a=P();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&dr(e,i[1]))return i[0];if(i=t(),ma){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[i,e],i}function wr(t,e,a){return a===void 0||(we&1073741824)!==0&&(_&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=ap(),z.lanes|=t,ta|=t,a)}function gd(t,e,a,i){return Nt(a,e)?a:ai.current!==null?(t=wr(t,a,i),Nt(t,e)||(it=!0),t):(we&42)===0||(we&1073741824)!==0&&(_&261930)===0?(it=!0,t.memoizedState=a):(t=ap(),z.lanes|=t,ta|=t,e)}function bd(t,e,a,i,n){var l=L.p;L.p=l!==0&&8>l?l:8;var o=S.T,s={};S.T=s,Sr(t,!1,e,a);try{var r=n(),u=S.S;if(u!==null&&u(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=Fh(r,i);Gi(t,e,b,Bt(t))}else Gi(t,e,i,Bt(t))}catch(h){Gi(t,e,{then:function(){},status:"rejected",reason:h},Bt())}finally{L.p=l,o!==null&&s.types!==null&&(o.types=s.types),S.T=o}}function e1(){}function Ss(t,e,a,i){if(t.tag!==5)throw Error(x(476));var n=md(t).queue;bd(t,n,e,fa,a===null?e1:function(){return xd(t),a(i)})}function md(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:fa,baseState:fa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:fa},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ke,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function xd(t){var e=md(t);e.next===null&&(e=t.alternate.memoizedState),Gi(t,e.next.queue,{},Bt())}function kr(){return dt(nn)}function yd(){return P().memoizedState}function vd(){return P().memoizedState}function a1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Bt();t=Ze(a);var i=Ve(e,t,a);i!==null&&(St(i,e,a),Ui(i,e,a)),e={cache:sr()},t.payload=e;return}e=e.return}}function i1(t,e,a){var i=Bt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Kl(t)?kd(e,a):(a=ir(t,e,a,i),a!==null&&(St(a,t,i),Sd(a,e,i)))}function wd(t,e,a){var i=Bt();Gi(t,e,a,i)}function Gi(t,e,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Kl(t))kd(e,n);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var o=e.lastRenderedState,s=l(o,a);if(n.hasEagerState=!0,n.eagerState=s,Nt(s,o))return Hl(t,e,n,0),q===null&&Ul(),!1}catch{}if(a=ir(t,e,n,i),a!==null)return St(a,t,i),Sd(a,e,i),!0}return!1}function Sr(t,e,a,i){if(i={lane:2,revertLane:Rr(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Kl(t)){if(e)throw Error(x(479))}else e=ir(t,a,i,2),e!==null&&St(e,t,2)}function Kl(t){var e=t.alternate;return t===z||e!==null&&e===z}function kd(t,e){Wa=bl=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Sd(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,ru(t,a)}}var tn={readContext:dt,use:ql,useCallback:W,useContext:W,useEffect:W,useImperativeHandle:W,useLayoutEffect:W,useInsertionEffect:W,useMemo:W,useReducer:W,useRef:W,useState:W,useDebugValue:W,useDeferredValue:W,useTransition:W,useSyncExternalStore:W,useId:W,useHostTransitionStatus:W,useFormState:W,useActionState:W,useOptimistic:W,useMemoCache:W,useCacheRefresh:W};tn.useEffectEvent=W;var Td={readContext:dt,use:ql,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:sc,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Wn(4194308,4,ud.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Wn(4194308,4,t,e)},useInsertionEffect:function(t,e){Wn(4,2,t,e)},useMemo:function(t,e){var a=mt();e=e===void 0?null:e;var i=t();if(ma){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=mt();if(a!==void 0){var n=a(e);if(ma){Ue(!0);try{a(e)}finally{Ue(!1)}}}else n=e;return i.memoizedState=i.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},i.queue=t,t=t.dispatch=i1.bind(null,z,t),[i.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:function(t){t=ws(t);var e=t.queue,a=wd.bind(null,z,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:vr,useDeferredValue:function(t,e){var a=mt();return wr(a,t,e)},useTransition:function(){var t=ws(!1);return t=bd.bind(null,z,t.queue,!0,!1),mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=z,n=mt();if(O){if(a===void 0)throw Error(x(407));a=a()}else{if(a=e(),q===null)throw Error(x(349));(_&127)!==0||Iu(i,e,a)}n.memoizedState=a;var l={value:a,getSnapshot:e};return n.queue=l,sc(Pu.bind(null,i,l,t),[t]),i.flags|=2048,ii(9,{destroy:void 0},$u.bind(null,i,l,a,e),null),a},useId:function(){var t=mt(),e=q.identifierPrefix;if(O){var a=te,i=Pt;a=(i&~(1<<32-Rt(i)-1)).toString(32)+a,e="_"+e+"R_"+a,a=ml++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Wh++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:kr,useFormState:nc,useActionState:nc,useOptimistic:function(t){var e=mt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Sr.bind(null,z,!0,a),a.dispatch=e,[t,e]},useMemoCache:mr,useCacheRefresh:function(){return mt().memoizedState=a1.bind(null,z)},useEffectEvent:function(t){var e=mt(),a={impl:t};return e.memoizedState=a,function(){if((D&2)!==0)throw Error(x(440));return a.impl.apply(void 0,arguments)}}},Tr={readContext:dt,use:ql,useCallback:pd,useContext:dt,useEffect:yr,useImperativeHandle:dd,useInsertionEffect:fd,useLayoutEffect:cd,useMemo:hd,useReducer:Fn,useRef:sd,useState:function(){return Fn(ke)},useDebugValue:vr,useDeferredValue:function(t,e){var a=P();return gd(a,G.memoizedState,t,e)},useTransition:function(){var t=Fn(ke)[0],e=P().memoizedState;return[typeof t=="boolean"?t:hn(t),e]},useSyncExternalStore:Wu,useId:yd,useHostTransitionStatus:kr,useFormState:lc,useActionState:lc,useOptimistic:function(t,e){var a=P();return ad(a,G,t,e)},useMemoCache:mr,useCacheRefresh:vd};Tr.useEffectEvent=rd;var zd={readContext:dt,use:ql,useCallback:pd,useContext:dt,useEffect:yr,useImperativeHandle:dd,useInsertionEffect:fd,useLayoutEffect:cd,useMemo:hd,useReducer:Oo,useRef:sd,useState:function(){return Oo(ke)},useDebugValue:vr,useDeferredValue:function(t,e){var a=P();return G===null?wr(a,t,e):gd(a,G.memoizedState,t,e)},useTransition:function(){var t=Oo(ke)[0],e=P().memoizedState;return[typeof t=="boolean"?t:hn(t),e]},useSyncExternalStore:Wu,useId:yd,useHostTransitionStatus:kr,useFormState:oc,useActionState:oc,useOptimistic:function(t,e){var a=P();return G!==null?ad(a,G,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:mr,useCacheRefresh:vd};zd.useEffectEvent=rd;function Ro(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:Q({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ts={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=Bt(),n=Ze(i);n.payload=e,a!=null&&(n.callback=a),e=Ve(t,n,i),e!==null&&(St(e,t,i),Ui(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=Bt(),n=Ze(i);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Ve(t,n,i),e!==null&&(St(e,t,i),Ui(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Bt(),i=Ze(a);i.tag=2,e!=null&&(i.callback=e),e=Ve(t,i,a),e!==null&&(St(e,t,a),Ui(e,t,a))}};function rc(t,e,a,i,n,l,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,o):e.prototype&&e.prototype.isPureReactComponent?!Fi(a,i)||!Fi(n,l):!0}function fc(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&Ts.enqueueReplaceState(e,e.state,null)}function xa(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=Q({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Md(t){fl(t)}function Cd(t){console.error(t)}function Ad(t){fl(t)}function xl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function cc(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function zs(t,e,a){return a=Ze(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(t,e)},a}function Ed(t){return t=Ze(t),t.tag=3,t}function _d(t,e,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;t.payload=function(){return n(l)},t.callback=function(){cc(e,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){cc(e,a,i),typeof n!="function"&&(Xe===null?Xe=new Set([this]):Xe.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function n1(t,e,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&ui(e,a,n,!0),a=Dt.current,a!==null){switch(a.tag){case 31:case 13:return Xt===null?Sl():a.alternate===null&&I===0&&(I=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===pl?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Ko(t,i,n)),!1;case 22:return a.flags|=65536,i===pl?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Ko(t,i,n)),!1}throw Error(x(435,a.tag))}return Ko(t,i,n),Sl(),!1}if(O)return e=Dt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,i!==ds&&(t=Error(x(422),{cause:i}),Ii(Zt(t,a)))):(i!==ds&&(e=Error(x(423),{cause:i}),Ii(Zt(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,i=Zt(i,a),n=zs(t.stateNode,i,n),_o(t,n),I!==4&&(I=2)),!1;var l=Error(x(520),{cause:i});if(l=Zt(l,a),Ki===null?Ki=[l]:Ki.push(l),I!==4&&(I=2),e===null)return!0;i=Zt(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=zs(a.stateNode,i,t),_o(a,t),!1;case 1:if(e=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Xe===null||!Xe.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ed(n),_d(n,t,a,i),_o(a,n),!1}a=a.return}while(a!==null);return!1}var zr=Error(x(461)),it=!1;function ft(t,e,a,i){e.child=t===null?Zu(e,null,a,i):ba(e,t.child,a,i)}function uc(t,e,a,i,n){a=a.render;var l=e.ref;if("ref"in i){var o={};for(var s in i)s!=="ref"&&(o[s]=i[s])}else o=i;return ga(e),i=pr(t,e,a,o,l,n),s=hr(),t!==null&&!it?(gr(t,e,n),Se(t,e,n)):(O&&s&&lr(e),e.flags|=1,ft(t,e,i,n),e.child)}function dc(t,e,a,i,n){if(t===null){var l=a.type;return typeof l=="function"&&!nr(l)&&l.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=l,Od(t,e,l,i,n)):(t=Qn(a.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!Mr(t,n)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:Fi,a(o,i)&&t.ref===e.ref)return Se(t,e,n)}return e.flags|=1,t=me(l,i),t.ref=e.ref,t.return=e,e.child=t}function Od(t,e,a,i,n){if(t!==null){var l=t.memoizedProps;if(Fi(l,i)&&t.ref===e.ref)if(it=!1,e.pendingProps=i=l,Mr(t,n))(t.flags&131072)!==0&&(it=!0);else return e.lanes=t.lanes,Se(t,e,n)}return Ms(t,e,a,i,n)}function Rd(t,e,a,i){var n=i.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,t!==null){for(i=e.child=t.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,e.child=null;return pc(t,e,l,a,i)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jn(e,l!==null?l.cachePool:null),l!==null?ec(e,l):ys(),Qu(e);else return i=e.lanes=536870912,pc(t,e,l!==null?l.baseLanes|a:a,a,i)}else l!==null?(Jn(e,l.cachePool),ec(e,l),De(e),e.memoizedState=null):(t!==null&&Jn(e,null),ys(),De(e));return ft(t,e,n,a),e.child}function Oi(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function pc(t,e,a,i,n){var l=rr();return l=l===null?null:{parent:at._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&Jn(e,null),ys(),Qu(e),t!==null&&ui(t,e,i,!0),e.childLanes=n,null}function In(t,e){return e=yl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function hc(t,e,a){return ba(e,t.child,null,a),t=In(e,e.pendingProps),t.flags|=2,Ct(e),e.memoizedState=null,t}function l1(t,e,a){var i=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(O){if(i.mode==="hidden")return t=In(e,i),e.lanes=536870912,Oi(null,t);if(vs(e),(t=X)?(t=Tp(t,Vt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Pt,overflow:te}:null,retryLane:536870912,hydrationErrors:null},a=Uu(t),a.return=e,e.child=a,ut=e,X=null)):t=null,t===null)throw $e(e);return e.lanes=536870912,null}return In(e,i)}var l=t.memoizedState;if(l!==null){var o=l.dehydrated;if(vs(e),n)if(e.flags&256)e.flags&=-257,e=hc(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(x(558));else if(it||ui(t,e,a,!1),n=(a&t.childLanes)!==0,it||n){if(i=q,i!==null&&(o=fu(i,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,ka(t,o),St(i,t,o),zr;Sl(),e=hc(t,e,a)}else t=l.treeContext,X=Qt(o.nextSibling),ut=e,O=!0,Ke=null,Vt=!1,t!==null&&ju(e,t),e=In(e,i),e.flags|=4096;return e}return t=me(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function $n(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(x(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Ms(t,e,a,i,n){return ga(e),a=pr(t,e,a,i,void 0,n),i=hr(),t!==null&&!it?(gr(t,e,n),Se(t,e,n)):(O&&i&&lr(e),e.flags|=1,ft(t,e,a,n),e.child)}function gc(t,e,a,i,n,l){return ga(e),e.updateQueue=null,a=Fu(e,i,a,n),Ju(t),i=hr(),t!==null&&!it?(gr(t,e,l),Se(t,e,l)):(O&&i&&lr(e),e.flags|=1,ft(t,e,a,l),e.child)}function bc(t,e,a,i,n){if(ga(e),e.stateNode===null){var l=qa,o=a.contextType;typeof o=="object"&&o!==null&&(l=dt(o)),l=new a(i,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ts,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=i,l.state=e.memoizedState,l.refs={},cr(e),o=a.contextType,l.context=typeof o=="object"&&o!==null?dt(o):qa,l.state=e.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Ro(e,a,o,i),l.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&Ts.enqueueReplaceState(l,l.state,null),ji(e,i,l,n),Hi(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){l=e.stateNode;var s=e.memoizedProps,r=xa(a,s);l.props=r;var u=l.context,b=a.contextType;o=qa,typeof b=="object"&&b!==null&&(o=dt(b));var h=a.getDerivedStateFromProps;b=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||u!==o)&&fc(e,l,i,o),Re=!1;var p=e.memoizedState;l.state=p,ji(e,i,l,n),Hi(),u=e.memoizedState,s||p!==u||Re?(typeof h=="function"&&(Ro(e,a,h,i),u=e.memoizedState),(r=Re||rc(e,a,r,i,p,u,o))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),l.props=i,l.state=u,l.context=o,i=r):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,ms(t,e),o=e.memoizedProps,b=xa(a,o),l.props=b,h=e.pendingProps,p=l.context,u=a.contextType,r=qa,typeof u=="object"&&u!==null&&(r=dt(u)),s=a.getDerivedStateFromProps,(u=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||p!==r)&&fc(e,l,i,r),Re=!1,p=e.memoizedState,l.state=p,ji(e,i,l,n),Hi();var c=e.memoizedState;o!==h||p!==c||Re||t!==null&&t.dependencies!==null&&dl(t.dependencies)?(typeof s=="function"&&(Ro(e,a,s,i),c=e.memoizedState),(b=Re||rc(e,a,b,i,p,c,r)||t!==null&&t.dependencies!==null&&dl(t.dependencies))?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,c,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,c,r)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=c),l.props=i,l.state=c,l.context=r,i=b):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return l=i,$n(t,e),i=(e.flags&128)!==0,l||i?(l=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&i?(e.child=ba(e,t.child,null,n),e.child=ba(e,null,a,n)):ft(t,e,a,n),e.memoizedState=l.state,t=e.child):t=Se(t,e,n),t}function mc(t,e,a,i){return ha(),e.flags|=256,ft(t,e,a,i),e.child}var Bo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function No(t){return{baseLanes:t,cachePool:qu()}}function Do(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Et),t}function Bd(t,e,a){var i=e.pendingProps,n=!1,l=(e.flags&128)!==0,o;if((o=l)||(o=t!==null&&t.memoizedState===null?!1:($.current&2)!==0),o&&(n=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(O){if(n?Ne(e):De(e),(t=X)?(t=Tp(t,Vt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Pt,overflow:te}:null,retryLane:536870912,hydrationErrors:null},a=Uu(t),a.return=e,e.child=a,ut=e,X=null)):t=null,t===null)throw $e(e);return Gs(t)?e.lanes=32:e.lanes=536870912,null}var s=i.children;return i=i.fallback,n?(De(e),n=e.mode,s=yl({mode:"hidden",children:s},n),i=ca(i,n,a,null),s.return=e,i.return=e,s.sibling=i,e.child=s,i=e.child,i.memoizedState=No(a),i.childLanes=Do(t,o,a),e.memoizedState=Bo,Oi(null,i)):(Ne(e),Cs(e,s))}var r=t.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(l)e.flags&256?(Ne(e),e.flags&=-257,e=Lo(t,e,a)):e.memoizedState!==null?(De(e),e.child=t.child,e.flags|=128,e=null):(De(e),s=i.fallback,n=e.mode,i=yl({mode:"visible",children:i.children},n),s=ca(s,n,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,ba(e,t.child,null,a),i=e.child,i.memoizedState=No(a),i.childLanes=Do(t,o,a),e.memoizedState=Bo,e=Oi(null,i));else if(Ne(e),Gs(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var u=o.dgst;o=u,i=Error(x(419)),i.stack="",i.digest=o,Ii({value:i,source:null,stack:null}),e=Lo(t,e,a)}else if(it||ui(t,e,a,!1),o=(a&t.childLanes)!==0,it||o){if(o=q,o!==null&&(i=fu(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,ka(t,i),St(o,t,i),zr;js(s)||Sl(),e=Lo(t,e,a)}else js(s)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,X=Qt(s.nextSibling),ut=e,O=!0,Ke=null,Vt=!1,t!==null&&ju(e,t),e=Cs(e,i.children),e.flags|=4096);return e}return n?(De(e),s=i.fallback,n=e.mode,r=t.child,u=r.sibling,i=me(r,{mode:"hidden",children:i.children}),i.subtreeFlags=r.subtreeFlags&65011712,u!==null?s=me(u,s):(s=ca(s,n,a,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,Oi(null,i),i=e.child,s=t.child.memoizedState,s===null?s=No(a):(n=s.cachePool,n!==null?(r=at._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=qu(),s={baseLanes:s.baseLanes|a,cachePool:n}),i.memoizedState=s,i.childLanes=Do(t,o,a),e.memoizedState=Bo,Oi(t.child,i)):(Ne(e),a=t.child,t=a.sibling,a=me(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=a,e.memoizedState=null,a)}function Cs(t,e){return e=yl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function yl(t,e){return t=At(22,t,null,e),t.lanes=0,t}function Lo(t,e,a){return ba(e,t.child,null,a),t=Cs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xc(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hs(t.return,e,a)}function Uo(t,e,a,i,n,l){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:l}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=n,o.treeForkCount=l)}function Nd(t,e,a){var i=e.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var o=$.current,s=(o&2)!==0;if(s?(o=o&1|2,e.flags|=128):o&=1,K($,o),ft(t,e,i,a),i=O?Wi:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xc(t,a,e);else if(t.tag===19)xc(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&gl(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Uo(e,!1,n,a,l,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&gl(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Uo(e,!0,a,null,l,i);break;case"together":Uo(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Se(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ta|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ui(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,a=me(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=me(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Mr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&dl(t)))}function o1(t,e,a){switch(e.tag){case 3:ll(e,e.stateNode.containerInfo),Be(e,at,t.memoizedState.cache),ha();break;case 27:case 5:es(e);break;case 4:ll(e,e.stateNode.containerInfo);break;case 10:Be(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,vs(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ne(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Bd(t,e,a):(Ne(e),t=Se(t,e,a),t!==null?t.sibling:null);Ne(e);break;case 19:var n=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(ui(t,e,a,!1),i=(a&e.childLanes)!==0),n){if(i)return Nd(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),K($,$.current),i)break;return null;case 22:return e.lanes=0,Rd(t,e,a,e.pendingProps);case 24:Be(e,at,t.memoizedState.cache)}return Se(t,e,a)}function Dd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)it=!0;else{if(!Mr(t,a)&&(e.flags&128)===0)return it=!1,o1(t,e,a);it=(t.flags&131072)!==0}else it=!1,O&&(e.flags&1048576)!==0&&Hu(e,Wi,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=sa(e.elementType),e.type=t,typeof t=="function")nr(t)?(i=xa(t,i),e.tag=1,e=bc(null,e,t,i,a)):(e.tag=0,e=Ms(null,e,t,i,a));else{if(t!=null){var n=t.$$typeof;if(n===Zs){e.tag=11,e=uc(null,e,t,i,a);break t}else if(n===Vs){e.tag=14,e=dc(null,e,t,i,a);break t}}throw e=Po(t)||t,Error(x(306,e,""))}}return e;case 0:return Ms(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,n=xa(i,e.pendingProps),bc(t,e,i,n,a);case 3:t:{if(ll(e,e.stateNode.containerInfo),t===null)throw Error(x(387));i=e.pendingProps;var l=e.memoizedState;n=l.element,ms(t,e),ji(e,i,null,a);var o=e.memoizedState;if(i=o.cache,Be(e,at,i),i!==l.cache&&gs(e,[at],a,!0),Hi(),i=o.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=mc(t,e,i,a);break t}else if(i!==n){n=Zt(Error(x(424)),e),Ii(n),e=mc(t,e,i,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,X=Qt(t.firstChild),ut=e,O=!0,Ke=null,Vt=!0,a=Zu(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ha(),i===n){e=Se(t,e,a);break t}ft(t,e,i,a)}e=e.child}return e;case 26:return $n(t,e),t===null?(a=Gc(e.type,null,e.pendingProps,null))?e.memoizedState=a:O||(a=e.type,t=e.pendingProps,i=Cl(Ye.current).createElement(a),i[ct]=e,i[Tt]=t,pt(i,a,t),st(i),e.stateNode=i):e.memoizedState=Gc(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return es(e),t===null&&O&&(i=e.stateNode=zp(e.type,e.pendingProps,Ye.current),ut=e,Vt=!0,n=X,aa(e.type)?(qs=n,X=Qt(i.firstChild)):X=n),ft(t,e,e.pendingProps.children,a),$n(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&O&&((n=i=X)&&(i=N1(i,e.type,e.pendingProps,Vt),i!==null?(e.stateNode=i,ut=e,X=Qt(i.firstChild),Vt=!1,n=!0):n=!1),n||$e(e)),es(e),n=e.type,l=e.pendingProps,o=t!==null?t.memoizedProps:null,i=l.children,Us(n,l)?i=null:o!==null&&Us(n,o)&&(e.flags|=32),e.memoizedState!==null&&(n=pr(t,e,Ih,null,null,a),nn._currentValue=n),$n(t,e),ft(t,e,i,a),e.child;case 6:return t===null&&O&&((t=a=X)&&(a=D1(a,e.pendingProps,Vt),a!==null?(e.stateNode=a,ut=e,X=null,t=!0):t=!1),t||$e(e)),null;case 13:return Bd(t,e,a);case 4:return ll(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ba(e,null,i,a):ft(t,e,i,a),e.child;case 11:return uc(t,e,e.type,e.pendingProps,a);case 7:return ft(t,e,e.pendingProps,a),e.child;case 8:return ft(t,e,e.pendingProps.children,a),e.child;case 12:return ft(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,Be(e,e.type,i.value),ft(t,e,i.children,a),e.child;case 9:return n=e.type._context,i=e.pendingProps.children,ga(e),n=dt(n),i=i(n),e.flags|=1,ft(t,e,i,a),e.child;case 14:return dc(t,e,e.type,e.pendingProps,a);case 15:return Od(t,e,e.type,e.pendingProps,a);case 19:return Nd(t,e,a);case 31:return l1(t,e,a);case 22:return Rd(t,e,a,e.pendingProps);case 24:return ga(e),i=dt(at),t===null?(n=rr(),n===null&&(n=q,l=sr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),e.memoizedState={parent:i,cache:n},cr(e),Be(e,at,n)):((t.lanes&a)!==0&&(ms(t,e),ji(e,null,null,a),Hi()),n=t.memoizedState,l=e.memoizedState,n.parent!==i?(n={parent:i,cache:i},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Be(e,at,i)):(i=l.cache,Be(e,at,i),i!==n.cache&&gs(e,[at],a,!0))),ft(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(x(156,e.tag))}function re(t){t.flags|=4}function Ho(t,e,a,i,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(lp())t.flags|=8192;else throw da=pl,fr}else t.flags&=-16777217}function yc(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ap(e))if(lp())t.flags|=8192;else throw da=pl,fr}function Ln(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?ou():536870912,t.lanes|=e,ni|=e)}function Ti(t,e){if(!O)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function V(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function s1(t,e,a){var i=e.pendingProps;switch(or(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(e),null;case 1:return V(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),xe(at),$a(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?re(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Eo())),V(e),null;case 26:var n=e.type,l=e.memoizedState;return t===null?(re(e),l!==null?(V(e),yc(e,l)):(V(e),Ho(e,n,null,i,a))):l?l!==t.memoizedState?(re(e),V(e),yc(e,l)):(V(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&re(e),V(e),Ho(e,n,t,i,a)),null;case 27:if(ol(e),a=Ye.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&re(e);else{if(!i){if(e.stateNode===null)throw Error(x(166));return V(e),null}t=ae.current,Ea(e)?Jf(e,t):(t=zp(n,i,a),e.stateNode=t,re(e))}return V(e),null;case 5:if(ol(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&re(e);else{if(!i){if(e.stateNode===null)throw Error(x(166));return V(e),null}if(l=ae.current,Ea(e))Jf(e,l);else{var o=Cl(Ye.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}l[ct]=e,l[Tt]=i;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=l;t:switch(pt(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&re(e)}}return V(e),Ho(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&re(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(x(166));if(t=Ye.current,Ea(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,n=ut,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}t[ct]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||wp(t.nodeValue,a)),t||$e(e,!0)}else t=Cl(t).createTextNode(i),t[ct]=e,e.stateNode=t}return V(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(i=Ea(e),a!==null){if(t===null){if(!i)throw Error(x(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(557));t[ct]=e}else ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;V(e),t=!1}else a=Eo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Ct(e),e):(Ct(e),null);if((e.flags&128)!==0)throw Error(x(558))}return V(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!n)throw Error(x(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(x(317));n[ct]=e}else ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;V(e),n=!1}else n=Eo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ct(e),e):(Ct(e),null)}return Ct(e),(e.flags&128)!==0?(e.lanes=a,e):(a=i!==null,t=t!==null&&t.memoizedState!==null,a&&(i=e.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Ln(e,e.updateQueue),V(e),null);case 4:return $a(),t===null&&Br(e.stateNode.containerInfo),V(e),null;case 10:return xe(e.type),V(e),null;case 19:if(rt($),i=e.memoizedState,i===null)return V(e),null;if(n=(e.flags&128)!==0,l=i.rendering,l===null)if(n)Ti(i,!1);else{if(I!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=gl(t),l!==null){for(e.flags|=128,Ti(i,!1),t=l.updateQueue,e.updateQueue=t,Ln(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Lu(a,t),a=a.sibling;return K($,$.current&1|2),O&&de(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&_t()>wl&&(e.flags|=128,n=!0,Ti(i,!1),e.lanes=4194304)}else{if(!n)if(t=gl(l),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Ln(e,t),Ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!O)return V(e),null}else 2*_t()-i.renderingStartTime>wl&&a!==536870912&&(e.flags|=128,n=!0,Ti(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=_t(),t.sibling=null,a=$.current,K($,n?a&1|2:a&1),O&&de(e,i.treeForkCount),t):(V(e),null);case 22:case 23:return Ct(e),ur(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(V(e),e.subtreeFlags&6&&(e.flags|=8192)):V(e),a=e.updateQueue,a!==null&&Ln(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&rt(ua),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),xe(at),V(e),null;case 25:return null;case 30:return null}throw Error(x(156,e.tag))}function r1(t,e){switch(or(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xe(at),$a(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ol(e),null;case 31:if(e.memoizedState!==null){if(Ct(e),e.alternate===null)throw Error(x(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ct(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt($),null;case 4:return $a(),null;case 10:return xe(e.type),null;case 22:case 23:return Ct(e),ur(),t!==null&&rt(ua),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return xe(at),null;case 25:return null;default:return null}}function Ld(t,e){switch(or(e),e.tag){case 3:xe(at),$a();break;case 26:case 27:case 5:ol(e);break;case 4:$a();break;case 31:e.memoizedState!==null&&Ct(e);break;case 13:Ct(e);break;case 19:rt($);break;case 10:xe(e.type);break;case 22:case 23:Ct(e),ur(),t!==null&&rt(ua);break;case 24:xe(at)}}function gn(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){i=void 0;var l=a.create,o=a.inst;i=l(),o.destroy=i}a=a.next}while(a!==n)}}catch(s){H(e,e.return,s)}}function Pe(t,e,a){try{var i=e.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&t)===t){var o=i.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=e;var r=a,u=s;try{u()}catch(b){H(n,r,b)}}}i=i.next}while(i!==l)}}catch(b){H(e,e.return,b)}}function Ud(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Xu(e,a)}catch(i){H(t,t.return,i)}}}function Hd(t,e,a){a.props=xa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){H(t,e,i)}}function qi(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(n){H(t,e,n)}}function ee(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){H(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){H(t,e,n)}else a.current=null}function jd(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){H(t,t.return,n)}}function jo(t,e,a){try{var i=t.stateNode;A1(i,t.type,a,e),i[Tt]=e}catch(n){H(t,t.return,n)}}function Gd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&aa(t.type)||t.tag===4}function Go(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function As(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=ge));else if(i!==4&&(i===27&&aa(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(As(t,e,a),t=t.sibling;t!==null;)As(t,e,a),t=t.sibling}function vl(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(vl(t,e,a),t=t.sibling;t!==null;)vl(t,e,a),t=t.sibling}function qd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);pt(e,i,a),e[ct]=t,e[Tt]=a}catch(l){H(t,t.return,l)}}var pe=!1,et=!1,qo=!1,vc=typeof WeakSet=="function"?WeakSet:Set,ot=null;function f1(t,e){if(t=t.containerInfo,Ds=Ol,t=Au(t),er(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break t}var o=0,s=-1,r=-1,u=0,b=0,h=t,p=null;e:for(;;){for(var c;h!==a||n!==0&&h.nodeType!==3||(s=o+n),h!==l||i!==0&&h.nodeType!==3||(r=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(c=h.firstChild)!==null;)p=h,h=c;for(;;){if(h===t)break e;if(p===a&&++u===n&&(s=o),p===l&&++b===i&&(r=o),(c=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=c}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ls={focusedElem:t,selectionRange:a},Ol=!1,ot=e;ot!==null;)if(e=ot,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ot=t;else for(;ot!==null;){switch(e=ot,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,a=e,n=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var y=xa(a.type,n);t=i.getSnapshotBeforeUpdate(y,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(v){H(a,a.return,v)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Hs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(x(163))}if(t=e.sibling,t!==null){t.return=e.return,ot=t;break}ot=e.return}}function Yd(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ce(t,a),i&4&&gn(5,a);break;case 1:if(ce(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(o){H(a,a.return,o)}else{var n=xa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){H(a,a.return,o)}}i&64&&Ud(a),i&512&&qi(a,a.return);break;case 3:if(ce(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Xu(t,e)}catch(o){H(a,a.return,o)}}break;case 27:e===null&&i&4&&qd(a);case 26:case 5:ce(t,a),e===null&&i&4&&jd(a),i&512&&qi(a,a.return);break;case 12:ce(t,a);break;case 31:ce(t,a),i&4&&Vd(t,a);break;case 13:ce(t,a),i&4&&Xd(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=x1.bind(null,a),L1(t,a))));break;case 22:if(i=a.memoizedState!==null||pe,!i){e=e!==null&&e.memoizedState!==null||et,n=pe;var l=et;pe=i,(et=e)&&!l?ue(t,a,(a.subtreeFlags&8772)!==0):ce(t,a),pe=n,et=l}break;case 30:break;default:ce(t,a)}}function Kd(t){var e=t.alternate;e!==null&&(t.alternate=null,Kd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Fs(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var F=null,wt=!1;function fe(t,e,a){for(a=a.child;a!==null;)Zd(t,e,a),a=a.sibling}function Zd(t,e,a){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(rn,a)}catch{}switch(a.tag){case 26:et||ee(a,e),fe(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:et||ee(a,e);var i=F,n=wt;aa(a.type)&&(F=a.stateNode,wt=!1),fe(t,e,a),Vi(a.stateNode),F=i,wt=n;break;case 5:et||ee(a,e);case 6:if(i=F,n=wt,F=null,fe(t,e,a),F=i,wt=n,F!==null)if(wt)try{(F.nodeType===9?F.body:F.nodeName==="HTML"?F.ownerDocument.body:F).removeChild(a.stateNode)}catch(l){H(a,e,l)}else try{F.removeChild(a.stateNode)}catch(l){H(a,e,l)}break;case 18:F!==null&&(wt?(t=F,Dc(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ri(t)):Dc(F,a.stateNode));break;case 4:i=F,n=wt,F=a.stateNode.containerInfo,wt=!0,fe(t,e,a),F=i,wt=n;break;case 0:case 11:case 14:case 15:Pe(2,a,e),et||Pe(4,a,e),fe(t,e,a);break;case 1:et||(ee(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Hd(a,e,i)),fe(t,e,a);break;case 21:fe(t,e,a);break;case 22:et=(i=et)||a.memoizedState!==null,fe(t,e,a),et=i;break;default:fe(t,e,a)}}function Vd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ri(t)}catch(a){H(e,e.return,a)}}}function Xd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ri(t)}catch(a){H(e,e.return,a)}}function c1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new vc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new vc),e;default:throw Error(x(435,t.tag))}}function Un(t,e){var a=c1(t);e.forEach(function(i){if(!a.has(i)){a.add(i);var n=y1.bind(null,t,i);i.then(n,n)}})}function yt(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],l=t,o=e,s=o;t:for(;s!==null;){switch(s.tag){case 27:if(aa(s.type)){F=s.stateNode,wt=!1;break t}break;case 5:F=s.stateNode,wt=!1;break t;case 3:case 4:F=s.stateNode.containerInfo,wt=!0;break t}s=s.return}if(F===null)throw Error(x(160));Zd(l,o,n),F=null,wt=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Qd(e,t),e=e.sibling}var Wt=null;function Qd(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yt(e,t),vt(t),i&4&&(Pe(3,t,t.return),gn(3,t),Pe(5,t,t.return));break;case 1:yt(e,t),vt(t),i&512&&(et||a===null||ee(a,a.return)),i&64&&pe&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Wt;if(yt(e,t),vt(t),i&512&&(et||a===null||ee(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[un]||l[ct]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),pt(l,i,a),l[ct]=t,st(l),i=l;break t;case"link":var o=Yc("link","href",n).get(i+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(l=o[s],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break e}}l=n.createElement(i),pt(l,i,a),n.head.appendChild(l);break;case"meta":if(o=Yc("meta","content",n).get(i+(a.content||""))){for(s=0;s<o.length;s++)if(l=o[s],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break e}}l=n.createElement(i),pt(l,i,a),n.head.appendChild(l);break;default:throw Error(x(468,i))}l[ct]=t,st(l),i=l}t.stateNode=i}else Kc(n,t.type,t.stateNode);else t.stateNode=qc(n,i,t.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?Kc(n,t.type,t.stateNode):qc(n,i,t.memoizedProps)):i===null&&t.stateNode!==null&&jo(t,t.memoizedProps,a.memoizedProps)}break;case 27:yt(e,t),vt(t),i&512&&(et||a===null||ee(a,a.return)),a!==null&&i&4&&jo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(yt(e,t),vt(t),i&512&&(et||a===null||ee(a,a.return)),t.flags&32){n=t.stateNode;try{ti(n,"")}catch(y){H(t,t.return,y)}}i&4&&t.stateNode!=null&&(n=t.memoizedProps,jo(t,n,a!==null?a.memoizedProps:n)),i&1024&&(qo=!0);break;case 6:if(yt(e,t),vt(t),i&4){if(t.stateNode===null)throw Error(x(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(y){H(t,t.return,y)}}break;case 3:if(el=null,n=Wt,Wt=Al(e.containerInfo),yt(e,t),Wt=n,vt(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ri(e.containerInfo)}catch(y){H(t,t.return,y)}qo&&(qo=!1,Jd(t));break;case 4:i=Wt,Wt=Al(t.stateNode.containerInfo),yt(e,t),vt(t),Wt=i;break;case 12:yt(e,t),vt(t);break;case 31:yt(e,t),vt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Un(t,i)));break;case 13:yt(e,t),vt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=_t()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Un(t,i)));break;case 22:n=t.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,u=pe,b=et;if(pe=u||n,et=b||r,yt(e,t),et=b,pe=u,vt(t),i&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||r||pe||et||ra(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(l=r.stateNode,n)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=r.stateNode;var h=r.memoizedProps.style,p=h!=null&&h.hasOwnProperty("display")?h.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){H(r,r.return,y)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(y){H(r,r.return,y)}}}else if(e.tag===18){if(a===null){r=e;try{var c=r.stateNode;n?Lc(c,!0):Lc(r.stateNode,!1)}catch(y){H(r,r.return,y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Un(t,a))));break;case 19:yt(e,t),vt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Un(t,i)));break;case 30:break;case 21:break;default:yt(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(Gd(i)){a=i;break}i=i.return}if(a==null)throw Error(x(160));switch(a.tag){case 27:var n=a.stateNode,l=Go(t);vl(t,l,n);break;case 5:var o=a.stateNode;a.flags&32&&(ti(o,""),a.flags&=-33);var s=Go(t);vl(t,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,u=Go(t);As(t,u,r);break;default:throw Error(x(161))}}catch(b){H(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Jd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ce(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Yd(t,e.alternate,e),e=e.sibling}function ra(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pe(4,e,e.return),ra(e);break;case 1:ee(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Hd(e,e.return,a),ra(e);break;case 27:Vi(e.stateNode);case 26:case 5:ee(e,e.return),ra(e);break;case 22:e.memoizedState===null&&ra(e);break;case 30:ra(e);break;default:ra(e)}t=t.sibling}}function ue(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,n=t,l=e,o=l.flags;switch(l.tag){case 0:case 11:case 15:ue(n,l,a),gn(4,l);break;case 1:if(ue(n,l,a),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){H(i,i.return,u)}if(i=l,n=i.updateQueue,n!==null){var s=i.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Vu(r[n],s)}catch(u){H(i,i.return,u)}}a&&o&64&&Ud(l),qi(l,l.return);break;case 27:qd(l);case 26:case 5:ue(n,l,a),a&&i===null&&o&4&&jd(l),qi(l,l.return);break;case 12:ue(n,l,a);break;case 31:ue(n,l,a),a&&o&4&&Vd(n,l);break;case 13:ue(n,l,a),a&&o&4&&Xd(n,l);break;case 22:l.memoizedState===null&&ue(n,l,a),qi(l,l.return);break;case 30:break;default:ue(n,l,a)}e=e.sibling}}function Cr(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&pn(a))}function Ar(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pn(t))}function Ft(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fd(t,e,a,i),e=e.sibling}function Fd(t,e,a,i){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ft(t,e,a,i),n&2048&&gn(9,e);break;case 1:Ft(t,e,a,i);break;case 3:Ft(t,e,a,i),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pn(t)));break;case 12:if(n&2048){Ft(t,e,a,i),t=e.stateNode;try{var l=e.memoizedProps,o=l.id,s=l.onPostCommit;typeof s=="function"&&s(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){H(e,e.return,r)}}else Ft(t,e,a,i);break;case 31:Ft(t,e,a,i);break;case 13:Ft(t,e,a,i);break;case 23:break;case 22:l=e.stateNode,o=e.alternate,e.memoizedState!==null?l._visibility&2?Ft(t,e,a,i):Yi(t,e):l._visibility&2?Ft(t,e,a,i):(l._visibility|=2,Oa(t,e,a,i,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Cr(o,e);break;case 24:Ft(t,e,a,i),n&2048&&Ar(e.alternate,e);break;default:Ft(t,e,a,i)}}function Oa(t,e,a,i,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,o=e,s=a,r=i,u=o.flags;switch(o.tag){case 0:case 11:case 15:Oa(l,o,s,r,n),gn(8,o);break;case 23:break;case 22:var b=o.stateNode;o.memoizedState!==null?b._visibility&2?Oa(l,o,s,r,n):Yi(l,o):(b._visibility|=2,Oa(l,o,s,r,n)),n&&u&2048&&Cr(o.alternate,o);break;case 24:Oa(l,o,s,r,n),n&&u&2048&&Ar(o.alternate,o);break;default:Oa(l,o,s,r,n)}e=e.sibling}}function Yi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,n=i.flags;switch(i.tag){case 22:Yi(a,i),n&2048&&Cr(i.alternate,i);break;case 24:Yi(a,i),n&2048&&Ar(i.alternate,i);break;default:Yi(a,i)}e=e.sibling}}var Ri=8192;function _a(t,e,a){if(t.subtreeFlags&Ri)for(t=t.child;t!==null;)Wd(t,e,a),t=t.sibling}function Wd(t,e,a){switch(t.tag){case 26:_a(t,e,a),t.flags&Ri&&t.memoizedState!==null&&J1(a,Wt,t.memoizedState,t.memoizedProps);break;case 5:_a(t,e,a);break;case 3:case 4:var i=Wt;Wt=Al(t.stateNode.containerInfo),_a(t,e,a),Wt=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Ri,Ri=16777216,_a(t,e,a),Ri=i):_a(t,e,a));break;default:_a(t,e,a)}}function Id(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function zi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];ot=i,Pd(i,t)}Id(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$d(t),t=t.sibling}function $d(t){switch(t.tag){case 0:case 11:case 15:zi(t),t.flags&2048&&Pe(9,t,t.return);break;case 3:zi(t);break;case 12:zi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Pn(t)):zi(t);break;default:zi(t)}}function Pn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];ot=i,Pd(i,t)}Id(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pe(8,e,e.return),Pn(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Pn(e));break;default:Pn(e)}t=t.sibling}}function Pd(t,e){for(;ot!==null;){var a=ot;switch(a.tag){case 0:case 11:case 15:Pe(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pn(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ot=i;else t:for(a=t;ot!==null;){i=ot;var n=i.sibling,l=i.return;if(Kd(i),i===a){ot=null;break t}if(n!==null){n.return=l,ot=n;break t}ot=l}}}var u1={getCacheForType:function(t){var e=dt(at),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return dt(at).controller.signal}},d1=typeof WeakMap=="function"?WeakMap:Map,D=0,q=null,A=null,_=0,U=0,Mt=null,je=!1,pi=!1,Er=!1,Te=0,I=0,ta=0,pa=0,_r=0,Et=0,ni=0,Ki=null,kt=null,Es=!1,Zl=0,tp=0,wl=1/0,kl=null,Xe=null,nt=0,Qe=null,li=null,ye=0,_s=0,Os=null,ep=null,Zi=0,Rs=null;function Bt(){return(D&2)!==0&&_!==0?_&-_:S.T!==null?Rr():cu()}function ap(){if(Et===0)if((_&536870912)===0||O){var t=Cn;Cn<<=1,(Cn&3932160)===0&&(Cn=262144),Et=t}else Et=536870912;return t=Dt.current,t!==null&&(t.flags|=32),Et}function St(t,e,a){(t===q&&(U===2||U===9)||t.cancelPendingCommit!==null)&&(oi(t,0),Ge(t,_,Et,!1)),cn(t,a),((D&2)===0||t!==q)&&(t===q&&((D&2)===0&&(pa|=a),I===4&&Ge(t,_,Et,!1)),ne(t))}function ip(t,e,a){if((D&6)!==0)throw Error(x(327));var i=!a&&(e&127)===0&&(e&t.expiredLanes)===0||fn(t,e),n=i?g1(t,e):Yo(t,e,!0),l=i;do{if(n===0){pi&&!i&&Ge(t,e,0,!1);break}else{if(a=t.current.alternate,l&&!p1(a)){n=Yo(t,e,!1),l=!1;continue}if(n===2){if(l=e,t.errorRecoveryDisabledLanes&l)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var s=t;n=Ki;var r=s.current.memoizedState.isDehydrated;if(r&&(oi(s,o).flags|=256),o=Yo(s,o,!1),o!==2){if(Er&&!r){s.errorRecoveryDisabledLanes|=l,pa|=l,n=4;break t}l=kt,kt=n,l!==null&&(kt===null?kt=l:kt.push.apply(kt,l))}n=o}if(l=!1,n!==2)continue}}if(n===1){oi(t,0),Ge(t,e,0,!0);break}t:{switch(i=t,l=n,l){case 0:case 1:throw Error(x(345));case 4:if((e&4194048)!==e)break;case 6:Ge(i,e,Et,!je);break t;case 2:kt=null;break;case 3:case 5:break;default:throw Error(x(329))}if((e&62914560)===e&&(n=Zl+300-_t(),10<n)){if(Ge(i,e,Et,!je),Bl(i,0,!0)!==0)break t;ye=e,i.timeoutHandle=Sp(wc.bind(null,i,a,kt,kl,Es,e,Et,pa,ni,je,l,"Throttled",-0,0),n);break t}wc(i,a,kt,kl,Es,e,Et,pa,ni,je,l,null,-0,0)}}break}while(!0);ne(t)}function wc(t,e,a,i,n,l,o,s,r,u,b,h,p,c){if(t.timeoutHandle=-1,h=e.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ge},Wd(e,l,h);var y=(l&62914560)===l?Zl-_t():(l&4194048)===l?tp-_t():0;if(y=F1(h,y),y!==null){ye=l,t.cancelPendingCommit=y(Sc.bind(null,t,e,l,a,i,n,o,s,r,b,h,null,p,c)),Ge(t,l,o,!u);return}}Sc(t,e,l,a,i,n,o,s,r)}function p1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],l=n.getSnapshot;n=n.value;try{if(!Nt(l(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ge(t,e,a,i){e&=~_r,e&=~pa,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var n=e;0<n;){var l=31-Rt(n),o=1<<l;i[l]=-1,n&=~o}a!==0&&su(t,a,e)}function Vl(){return(D&6)===0?(bn(0,!1),!1):!0}function Or(){if(A!==null){if(U===0)var t=A.return;else t=A,be=Sa=null,br(t),Fa=null,$i=0,t=A;for(;t!==null;)Ld(t.alternate,t),t=t.return;A=null}}function oi(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,O1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ye=0,Or(),q=t,A=a=me(t.current,null),_=e,U=0,Mt=null,je=!1,pi=fn(t,e),Er=!1,ni=Et=_r=pa=ta=I=0,kt=Ki=null,Es=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var n=31-Rt(i),l=1<<n;e|=t[n],i&=~l}return Te=e,Ul(),a}function np(t,e){z=null,S.H=tn,e===di||e===jl?(e=Pf(),U=3):e===fr?(e=Pf(),U=4):U=e===zr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Mt=e,A===null&&(I=1,xl(t,Zt(e,t.current)))}function lp(){var t=Dt.current;return t===null?!0:(_&4194048)===_?Xt===null:(_&62914560)===_||(_&536870912)!==0?t===Xt:!1}function op(){var t=S.H;return S.H=tn,t===null?tn:t}function sp(){var t=S.A;return S.A=u1,t}function Sl(){I=4,je||(_&4194048)!==_&&Dt.current!==null||(pi=!0),(ta&134217727)===0&&(pa&134217727)===0||q===null||Ge(q,_,Et,!1)}function Yo(t,e,a){var i=D;D|=2;var n=op(),l=sp();(q!==t||_!==e)&&(kl=null,oi(t,e)),e=!1;var o=I;t:do try{if(U!==0&&A!==null){var s=A,r=Mt;switch(U){case 8:Or(),o=6;break t;case 3:case 2:case 9:case 6:Dt.current===null&&(e=!0);var u=U;if(U=0,Mt=null,Za(t,s,r,u),a&&pi){o=0;break t}break;default:u=U,U=0,Mt=null,Za(t,s,r,u)}}h1(),o=I;break}catch(b){np(t,b)}while(!0);return e&&t.shellSuspendCounter++,be=Sa=null,D=i,S.H=n,S.A=l,A===null&&(q=null,_=0,Ul()),o}function h1(){for(;A!==null;)rp(A)}function g1(t,e){var a=D;D|=2;var i=op(),n=sp();q!==t||_!==e?(kl=null,wl=_t()+500,oi(t,e)):pi=fn(t,e);t:do try{if(U!==0&&A!==null){e=A;var l=Mt;e:switch(U){case 1:U=0,Mt=null,Za(t,e,l,1);break;case 2:case 9:if($f(l)){U=0,Mt=null,kc(e);break}e=function(){U!==2&&U!==9||q!==t||(U=7),ne(t)},l.then(e,e);break t;case 3:U=7;break t;case 4:U=5;break t;case 7:$f(l)?(U=0,Mt=null,kc(e)):(U=0,Mt=null,Za(t,e,l,7));break;case 5:var o=null;switch(A.tag){case 26:o=A.memoizedState;case 5:case 27:var s=A;if(o?Ap(o):s.stateNode.complete){U=0,Mt=null;var r=s.sibling;if(r!==null)A=r;else{var u=s.return;u!==null?(A=u,Xl(u)):A=null}break e}}U=0,Mt=null,Za(t,e,l,5);break;case 6:U=0,Mt=null,Za(t,e,l,6);break;case 8:Or(),I=6;break t;default:throw Error(x(462))}}b1();break}catch(b){np(t,b)}while(!0);return be=Sa=null,S.H=i,S.A=n,D=a,A!==null?0:(q=null,_=0,Ul(),I)}function b1(){for(;A!==null&&!j0();)rp(A)}function rp(t){var e=Dd(t.alternate,t,Te);t.memoizedProps=t.pendingProps,e===null?Xl(t):A=e}function kc(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=gc(a,e,e.pendingProps,e.type,void 0,_);break;case 11:e=gc(a,e,e.pendingProps,e.type.render,e.ref,_);break;case 5:br(e);default:Ld(a,e),e=A=Lu(e,Te),e=Dd(a,e,Te)}t.memoizedProps=t.pendingProps,e===null?Xl(t):A=e}function Za(t,e,a,i){be=Sa=null,br(e),Fa=null,$i=0;var n=e.return;try{if(n1(t,n,e,a,_)){I=1,xl(t,Zt(a,t.current)),A=null;return}}catch(l){if(n!==null)throw A=n,l;I=1,xl(t,Zt(a,t.current)),A=null;return}e.flags&32768?(O||i===1?t=!0:pi||(_&536870912)!==0?t=!1:(je=t=!0,(i===2||i===9||i===3||i===6)&&(i=Dt.current,i!==null&&i.tag===13&&(i.flags|=16384))),fp(e,t)):Xl(e)}function Xl(t){var e=t;do{if((e.flags&32768)!==0){fp(e,je);return}t=e.return;var a=s1(e.alternate,e,Te);if(a!==null){A=a;return}if(e=e.sibling,e!==null){A=e;return}A=e=t}while(e!==null);I===0&&(I=5)}function fp(t,e){do{var a=r1(t.alternate,t);if(a!==null){a.flags&=32767,A=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){A=t;return}A=t=a}while(t!==null);I=6,A=null}function Sc(t,e,a,i,n,l,o,s,r){t.cancelPendingCommit=null;do Ql();while(nt!==0);if((D&6)!==0)throw Error(x(327));if(e!==null){if(e===t.current)throw Error(x(177));if(l=e.lanes|e.childLanes,l|=ar,F0(t,a,l,o,s,r),t===q&&(A=q=null,_=0),li=e,Qe=t,ye=a,_s=l,Os=n,ep=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,v1(sl,function(){return hp(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=S.T,S.T=null,n=L.p,L.p=2,o=D,D|=4;try{f1(t,e,a)}finally{D=o,L.p=n,S.T=i}}nt=1,cp(),up(),dp()}}function cp(){if(nt===1){nt=0;var t=Qe,e=li,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var i=L.p;L.p=2;var n=D;D|=4;try{Qd(e,t);var l=Ls,o=Au(t.containerInfo),s=l.focusedElem,r=l.selectionRange;if(o!==s&&s&&s.ownerDocument&&Cu(s.ownerDocument.documentElement,s)){if(r!==null&&er(s)){var u=r.start,b=r.end;if(b===void 0&&(b=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(b,s.value.length);else{var h=s.ownerDocument||document,p=h&&h.defaultView||window;if(p.getSelection){var c=p.getSelection(),y=s.textContent.length,v=Math.min(r.start,y),R=r.end===void 0?v:Math.min(r.end,y);!c.extend&&v>R&&(o=R,R=v,v=o);var d=Vf(s,v),f=Vf(s,R);if(d&&f&&(c.rangeCount!==1||c.anchorNode!==d.node||c.anchorOffset!==d.offset||c.focusNode!==f.node||c.focusOffset!==f.offset)){var g=h.createRange();g.setStart(d.node,d.offset),c.removeAllRanges(),v>R?(c.addRange(g),c.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),c.addRange(g))}}}}for(h=[],c=s;c=c.parentNode;)c.nodeType===1&&h.push({element:c,left:c.scrollLeft,top:c.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<h.length;s++){var m=h[s];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}Ol=!!Ds,Ls=Ds=null}finally{D=n,L.p=i,S.T=a}}t.current=e,nt=2}}function up(){if(nt===2){nt=0;var t=Qe,e=li,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var i=L.p;L.p=2;var n=D;D|=4;try{Yd(t,e.alternate,e)}finally{D=n,L.p=i,S.T=a}}nt=3}}function dp(){if(nt===4||nt===3){nt=0,G0();var t=Qe,e=li,a=ye,i=ep;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?nt=5:(nt=0,li=Qe=null,pp(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Xe=null),Js(a),e=e.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(rn,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=S.T,n=L.p,L.p=2,S.T=null;try{for(var l=t.onRecoverableError,o=0;o<i.length;o++){var s=i[o];l(s.value,{componentStack:s.stack})}}finally{S.T=e,L.p=n}}(ye&3)!==0&&Ql(),ne(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Rs?Zi++:(Zi=0,Rs=t):Zi=0,bn(0,!1)}}function pp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,pn(e)))}function Ql(){return cp(),up(),dp(),hp()}function hp(){if(nt!==5)return!1;var t=Qe,e=_s;_s=0;var a=Js(ye),i=S.T,n=L.p;try{L.p=32>a?32:a,S.T=null,a=Os,Os=null;var l=Qe,o=ye;if(nt=0,li=Qe=null,ye=0,(D&6)!==0)throw Error(x(331));var s=D;if(D|=4,$d(l.current),Fd(l,l.current,o,a),D=s,bn(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(rn,l)}catch{}return!0}finally{L.p=n,S.T=i,pp(t,e)}}function Tc(t,e,a){e=Zt(a,e),e=zs(t.stateNode,e,2),t=Ve(t,e,2),t!==null&&(cn(t,2),ne(t))}function H(t,e,a){if(t.tag===3)Tc(t,t,a);else for(;e!==null;){if(e.tag===3){Tc(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xe===null||!Xe.has(i))){t=Zt(a,t),a=Ed(2),i=Ve(e,a,2),i!==null&&(_d(a,i,e,t),cn(i,2),ne(i));break}}e=e.return}}function Ko(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new d1;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(a)||(Er=!0,n.add(a),t=m1.bind(null,t,e,a),e.then(t,t))}function m1(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,q===t&&(_&a)===a&&(I===4||I===3&&(_&62914560)===_&&300>_t()-Zl?(D&2)===0&&oi(t,0):_r|=a,ni===_&&(ni=0)),ne(t)}function gp(t,e){e===0&&(e=ou()),t=ka(t,e),t!==null&&(cn(t,e),ne(t))}function x1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),gp(t,a)}function y1(t,e){var a=0;switch(t.tag){case 31:case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(x(314))}i!==null&&i.delete(e),gp(t,a)}function v1(t,e){return Xs(t,e)}var Tl=null,Ra=null,Bs=!1,zl=!1,Zo=!1,qe=0;function ne(t){t!==Ra&&t.next===null&&(Ra===null?Tl=Ra=t:Ra=Ra.next=t),zl=!0,Bs||(Bs=!0,k1())}function bn(t,e){if(!Zo&&zl){Zo=!0;do for(var a=!1,i=Tl;i!==null;){if(!e)if(t!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var o=i.suspendedLanes,s=i.pingedLanes;l=(1<<31-Rt(42|t)+1)-1,l&=n&~(o&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,zc(i,l))}else l=_,l=Bl(i,i===q?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||fn(i,l)||(a=!0,zc(i,l));i=i.next}while(a);Zo=!1}}function w1(){bp()}function bp(){zl=Bs=!1;var t=0;qe!==0&&_1()&&(t=qe);for(var e=_t(),a=null,i=Tl;i!==null;){var n=i.next,l=mp(i,e);l===0?(i.next=null,a===null?Tl=n:a.next=n,n===null&&(Ra=a)):(a=i,(t!==0||(l&3)!==0)&&(zl=!0)),i=n}nt!==0&&nt!==5||bn(t,!1),qe!==0&&(qe=0)}function mp(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var o=31-Rt(l),s=1<<o,r=n[o];r===-1?((s&a)===0||(s&i)!==0)&&(n[o]=J0(s,e)):r<=e&&(t.expiredLanes|=s),l&=~s}if(e=q,a=_,a=Bl(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(U===2||U===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&yo(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||fn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&yo(i),Js(a)){case 2:case 8:a=nu;break;case 32:a=sl;break;case 268435456:a=lu;break;default:a=sl}return i=xp.bind(null,t),a=Xs(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&yo(i),t.callbackPriority=2,t.callbackNode=null,2}function xp(t,e){if(nt!==0&&nt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ql()&&t.callbackNode!==a)return null;var i=_;return i=Bl(t,t===q?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(ip(t,i,e),mp(t,_t()),t.callbackNode!=null&&t.callbackNode===a?xp.bind(null,t):null)}function zc(t,e){if(Ql())return null;ip(t,e,!0)}function k1(){R1(function(){(D&6)!==0?Xs(iu,w1):bp()})}function Rr(){if(qe===0){var t=ei;t===0&&(t=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),qe=t}return qe}function Mc(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zn(""+t)}function Cc(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function S1(t,e,a,i,n){if(e==="submit"&&a&&a.stateNode===n){var l=Mc((n[Tt]||null).action),o=i.submitter;o&&(e=(e=o[Tt]||null)?Mc(e.formAction):o.getAttribute("formAction"),e!==null&&(l=e,o=null));var s=new Nl("action","action",null,i,n);t.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qe!==0){var r=o?Cc(n,o):new FormData(n);Ss(a,{pending:!0,data:r,method:n.method,action:l},null,r)}}else typeof l=="function"&&(s.preventDefault(),r=o?Cc(n,o):new FormData(n),Ss(a,{pending:!0,data:r,method:n.method,action:l},l,r))},currentTarget:n}]})}}for(Hn=0;Hn<us.length;Hn++)jn=us[Hn],Ac=jn.toLowerCase(),Ec=jn[0].toUpperCase()+jn.slice(1),It(Ac,"on"+Ec);var jn,Ac,Ec,Hn;It(_u,"onAnimationEnd");It(Ou,"onAnimationIteration");It(Ru,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(qh,"onTransitionRun");It(Yh,"onTransitionStart");It(Kh,"onTransitionCancel");It(Bu,"onTransitionEnd");Pa("onMouseEnter",["mouseout","mouseover"]);Pa("onMouseLeave",["mouseout","mouseover"]);Pa("onPointerEnter",["pointerout","pointerover"]);Pa("onPointerLeave",["pointerout","pointerover"]);ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ya("onBeforeInput",["compositionend","keypress","textInput","paste"]);ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var en="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(en));function yp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],n=i.event;i=i.listeners;t:{var l=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],r=s.instance,u=s.currentTarget;if(s=s.listener,r!==l&&n.isPropagationStopped())break t;l=s,n.currentTarget=u;try{l(n)}catch(b){fl(b)}n.currentTarget=null,l=r}else for(o=0;o<i.length;o++){if(s=i[o],r=s.instance,u=s.currentTarget,s=s.listener,r!==l&&n.isPropagationStopped())break t;l=s,n.currentTarget=u;try{l(n)}catch(b){fl(b)}n.currentTarget=null,l=r}}}}function C(t,e){var a=e[is];a===void 0&&(a=e[is]=new Set);var i=t+"__bubble";a.has(i)||(vp(e,t,2,!1),a.add(i))}function Vo(t,e,a){var i=0;e&&(i|=4),vp(a,t,i,e)}var Gn="_reactListening"+Math.random().toString(36).slice(2);function Br(t){if(!t[Gn]){t[Gn]=!0,uu.forEach(function(a){a!=="selectionchange"&&(T1.has(a)||Vo(a,!1,t),Vo(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gn]||(e[Gn]=!0,Vo("selectionchange",!1,e))}}function vp(t,e,a,i){switch(Bp(e)){case 2:var n=$1;break;case 8:n=P1;break;default:n=Ur}a=n.bind(null,e,a,t),n=void 0,!rs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Xo(t,e,a,i,n){var l=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=i.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=Da(s),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){i=l=o;continue t}s=s.parentNode}}i=i.return}yu(function(){var u=l,b=Is(a),h=[];t:{var p=Nu.get(t);if(p!==void 0){var c=Nl,y=t;switch(t){case"keypress":if(Xn(a)===0)break t;case"keydown":case"keyup":c=yh;break;case"focusin":y="focus",c=To;break;case"focusout":y="blur",c=To;break;case"beforeblur":case"afterblur":c=To;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=kh;break;case _u:case Ou:case Ru:c=ch;break;case Bu:c=Th;break;case"scroll":case"scrollend":c=lh;break;case"wheel":c=Mh;break;case"copy":case"cut":case"paste":c=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Hf;break;case"toggle":case"beforetoggle":c=Ah}var v=(e&4)!==0,R=!v&&(t==="scroll"||t==="scrollend"),d=v?p!==null?p+"Capture":null:p;v=[];for(var f=u,g;f!==null;){var m=f;if(g=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||g===null||d===null||(m=Qi(f,d),m!=null&&v.push(an(f,m,g))),R)break;f=f.return}0<v.length&&(p=new c(p,y,null,a,b),h.push({event:p,listeners:v}))}}if((e&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",c=t==="mouseout"||t==="pointerout",p&&a!==ss&&(y=a.relatedTarget||a.fromElement)&&(Da(y)||y[fi]))break t;if((c||p)&&(p=b.window===b?b:(p=b.ownerDocument)?p.defaultView||p.parentWindow:window,c?(y=a.relatedTarget||a.toElement,c=u,y=y?Da(y):null,y!==null&&(R=sn(y),v=y.tag,y!==R||v!==5&&v!==27&&v!==6)&&(y=null)):(c=null,y=u),c!==y)){if(v=Lf,m="onMouseLeave",d="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Hf,m="onPointerLeave",d="onPointerEnter",f="pointer"),R=c==null?p:_i(c),g=y==null?p:_i(y),p=new v(m,f+"leave",c,a,b),p.target=R,p.relatedTarget=g,m=null,Da(b)===u&&(v=new v(d,f+"enter",y,a,b),v.target=g,v.relatedTarget=R,m=v),R=m,c&&y)e:{for(v=z1,d=c,f=y,g=0,m=d;m;m=v(m))g++;m=0;for(var k=f;k;k=v(k))m++;for(;0<g-m;)d=v(d),g--;for(;0<m-g;)f=v(f),m--;for(;g--;){if(d===f||f!==null&&d===f.alternate){v=d;break e}d=v(d),f=v(f)}v=null}else v=null;c!==null&&_c(h,p,c,v,!1),y!==null&&R!==null&&_c(h,R,y,v,!0)}}t:{if(p=u?_i(u):window,c=p.nodeName&&p.nodeName.toLowerCase(),c==="select"||c==="input"&&p.type==="file")var B=Yf;else if(qf(p))if(zu)B=Hh;else{B=Lh;var w=Dh}else c=p.nodeName,!c||c.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?u&&Ws(u.elementType)&&(B=Yf):B=Uh;if(B&&(B=B(t,u))){Tu(h,B,a,b);break t}w&&w(t,p,u),t==="focusout"&&u&&p.type==="number"&&u.memoizedProps.value!=null&&os(p,"number",p.value)}switch(w=u?_i(u):window,t){case"focusin":(qf(w)||w.contentEditable==="true")&&(Ha=w,fs=u,Di=null);break;case"focusout":Di=fs=Ha=null;break;case"mousedown":cs=!0;break;case"contextmenu":case"mouseup":case"dragend":cs=!1,Xf(h,a,b);break;case"selectionchange":if(Gh)break;case"keydown":case"keyup":Xf(h,a,b)}var M;if(tr)t:{switch(t){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Ua?ku(t,a)&&(E="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(E="onCompositionStart");E&&(wu&&a.locale!=="ko"&&(Ua||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ua&&(M=vu()):(He=b,$s="value"in He?He.value:He.textContent,Ua=!0)),w=Ml(u,E),0<w.length&&(E=new Uf(E,t,null,a,b),h.push({event:E,listeners:w}),M?E.data=M:(M=Su(a),M!==null&&(E.data=M)))),(M=_h?Oh(t,a):Rh(t,a))&&(E=Ml(u,"onBeforeInput"),0<E.length&&(w=new Uf("onBeforeInput","beforeinput",null,a,b),h.push({event:w,listeners:E}),w.data=M)),S1(h,t,u,a,b)}yp(h,e)})}function an(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Ml(t,e){for(var a=e+"Capture",i=[];t!==null;){var n=t,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=Qi(t,a),n!=null&&i.unshift(an(t,n,l)),n=Qi(t,e),n!=null&&i.push(an(t,n,l))),t.tag===3)return i;t=t.return}return[]}function z1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function _c(t,e,a,i,n){for(var l=e._reactName,o=[];a!==null&&a!==i;){var s=a,r=s.alternate,u=s.stateNode;if(s=s.tag,r!==null&&r===i)break;s!==5&&s!==26&&s!==27||u===null||(r=u,n?(u=Qi(a,l),u!=null&&o.unshift(an(a,u,r))):n||(u=Qi(a,l),u!=null&&o.push(an(a,u,r)))),a=a.return}o.length!==0&&t.push({event:e,listeners:o})}var M1=/\r\n?/g,C1=/\u0000|\uFFFD/g;function Oc(t){return(typeof t=="string"?t:""+t).replace(M1,`
`).replace(C1,"")}function wp(t,e){return e=Oc(e),Oc(t)===e}function j(t,e,a,i,n,l){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ti(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ti(t,""+i);break;case"className":En(t,"class",i);break;case"tabIndex":En(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":En(t,a,i);break;case"style":xu(t,i,l);break;case"data":if(e!=="object"){En(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Zn(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(e!=="input"&&j(t,e,"name",n.name,n,null),j(t,e,"formEncType",n.formEncType,n,null),j(t,e,"formMethod",n.formMethod,n,null),j(t,e,"formTarget",n.formTarget,n,null)):(j(t,e,"encType",n.encType,n,null),j(t,e,"method",n.method,n,null),j(t,e,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Zn(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=ge);break;case"onScroll":i!=null&&C("scroll",t);break;case"onScrollEnd":i!=null&&C("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(x(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(x(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=Zn(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":C("beforetoggle",t),C("toggle",t),Kn(t,"popover",i);break;case"xlinkActuate":se(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":se(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":se(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":se(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":se(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":se(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":se(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":se(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":se(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Kn(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ih.get(a)||a,Kn(t,a,i))}}function Ns(t,e,a,i,n,l){switch(a){case"style":xu(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(x(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(x(60));t.innerHTML=a}}break;case"children":typeof i=="string"?ti(t,i):(typeof i=="number"||typeof i=="bigint")&&ti(t,""+i);break;case"onScroll":i!=null&&C("scroll",t);break;case"onScrollEnd":i!=null&&C("scrollend",t);break;case"onClick":i!=null&&(t.onclick=ge);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!du.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),l=t[Tt]||null,l=l!=null?l[a]:null,typeof l=="function"&&t.removeEventListener(e,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,n);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):Kn(t,a,i)}}}function pt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":C("error",t),C("load",t);var i=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(x(137,e));default:j(t,e,l,o,a,null)}}n&&j(t,e,"srcSet",a.srcSet,a,null),i&&j(t,e,"src",a.src,a,null);return;case"input":C("invalid",t);var s=l=o=n=null,r=null,u=null;for(i in a)if(a.hasOwnProperty(i)){var b=a[i];if(b!=null)switch(i){case"name":n=b;break;case"type":o=b;break;case"checked":r=b;break;case"defaultChecked":u=b;break;case"value":l=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(x(137,e));break;default:j(t,e,i,b,a,null)}}gu(t,l,s,r,u,o,n,!1);return;case"select":C("invalid",t),i=o=l=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":l=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:j(t,e,n,s,a,null)}e=l,a=o,t.multiple=!!i,e!=null?Xa(t,!!i,e,!1):a!=null&&Xa(t,!!i,a,!0);return;case"textarea":C("invalid",t),l=n=i=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":i=s;break;case"defaultValue":n=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(x(91));break;default:j(t,e,o,s,a,null)}mu(t,i,n,l);return;case"option":for(r in a)a.hasOwnProperty(r)&&(i=a[r],i!=null)&&(r==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":j(t,e,r,i,a,null));return;case"dialog":C("beforetoggle",t),C("toggle",t),C("cancel",t),C("close",t);break;case"iframe":case"object":C("load",t);break;case"video":case"audio":for(i=0;i<en.length;i++)C(en[i],t);break;case"image":C("error",t),C("load",t);break;case"details":C("toggle",t);break;case"embed":case"source":case"link":C("error",t),C("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(i=a[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(x(137,e));default:j(t,e,u,i,a,null)}return;default:if(Ws(e)){for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!==void 0&&Ns(t,e,b,i,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(i=a[s],i!=null&&j(t,e,s,i,a,null))}function A1(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,o=null,s=null,r=null,u=null,b=null;for(c in a){var h=a[c];if(a.hasOwnProperty(c)&&h!=null)switch(c){case"checked":break;case"value":break;case"defaultValue":r=h;default:i.hasOwnProperty(c)||j(t,e,c,null,i,h)}}for(var p in i){var c=i[p];if(h=a[p],i.hasOwnProperty(p)&&(c!=null||h!=null))switch(p){case"type":l=c;break;case"name":n=c;break;case"checked":u=c;break;case"defaultChecked":b=c;break;case"value":o=c;break;case"defaultValue":s=c;break;case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(x(137,e));break;default:c!==h&&j(t,e,p,c,i,h)}}ls(t,o,s,r,u,b,l,n);return;case"select":c=o=s=p=null;for(l in a)if(r=a[l],a.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":c=r;default:i.hasOwnProperty(l)||j(t,e,l,null,i,r)}for(n in i)if(l=i[n],r=a[n],i.hasOwnProperty(n)&&(l!=null||r!=null))switch(n){case"value":p=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:l!==r&&j(t,e,n,l,i,r)}e=s,a=o,i=c,p!=null?Xa(t,!!a,p,!1):!!i!=!!a&&(e!=null?Xa(t,!!a,e,!0):Xa(t,!!a,a?[]:"",!1));return;case"textarea":c=p=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:j(t,e,s,null,i,n)}for(o in i)if(n=i[o],l=a[o],i.hasOwnProperty(o)&&(n!=null||l!=null))switch(o){case"value":p=n;break;case"defaultValue":c=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(x(91));break;default:n!==l&&j(t,e,o,n,i,l)}bu(t,p,c);return;case"option":for(var y in a)p=a[y],a.hasOwnProperty(y)&&p!=null&&!i.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:j(t,e,y,null,i,p));for(r in i)p=i[r],c=a[r],i.hasOwnProperty(r)&&p!==c&&(p!=null||c!=null)&&(r==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":j(t,e,r,p,i,c));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in a)p=a[v],a.hasOwnProperty(v)&&p!=null&&!i.hasOwnProperty(v)&&j(t,e,v,null,i,p);for(u in i)if(p=i[u],c=a[u],i.hasOwnProperty(u)&&p!==c&&(p!=null||c!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(x(137,e));break;default:j(t,e,u,p,i,c)}return;default:if(Ws(e)){for(var R in a)p=a[R],a.hasOwnProperty(R)&&p!==void 0&&!i.hasOwnProperty(R)&&Ns(t,e,R,void 0,i,p);for(b in i)p=i[b],c=a[b],!i.hasOwnProperty(b)||p===c||p===void 0&&c===void 0||Ns(t,e,b,p,i,c);return}}for(var d in a)p=a[d],a.hasOwnProperty(d)&&p!=null&&!i.hasOwnProperty(d)&&j(t,e,d,null,i,p);for(h in i)p=i[h],c=a[h],!i.hasOwnProperty(h)||p===c||p==null&&c==null||j(t,e,h,p,i,c)}function Rc(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function E1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],l=n.transferSize,o=n.initiatorType,s=n.duration;if(l&&s&&Rc(o)){for(o=0,s=n.responseEnd,i+=1;i<a.length;i++){var r=a[i],u=r.startTime;if(u>s)break;var b=r.transferSize,h=r.initiatorType;b&&Rc(h)&&(r=r.responseEnd,o+=b*(r<s?1:(s-u)/(r-u)))}if(--i,e+=8*(l+o)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ds=null,Ls=null;function Cl(t){return t.nodeType===9?t:t.ownerDocument}function Bc(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Us(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qo=null;function _1(){var t=window.event;return t&&t.type==="popstate"?t===Qo?!1:(Qo=t,!0):(Qo=null,!1)}var Sp=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc!="undefined"?function(t){return Nc.resolve(null).then(t).catch(B1)}:Sp;function B1(t){setTimeout(function(){throw t})}function aa(t){return t==="head"}function Dc(t,e){var a=e,i=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){t.removeChild(n),ri(e);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Vi(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Vi(a);for(var l=a.firstChild;l;){var o=l.nextSibling,s=l.nodeName;l[un]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&Vi(t.ownerDocument.body);a=n}while(a);ri(e)}function Lc(t,e){var a=t;t=0;do{var i=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=i}while(a)}function Hs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hs(a),Fs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function N1(t,e,a,i){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[un])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=Qt(t.nextSibling),t===null)break}return null}function D1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Qt(t.nextSibling),t===null))return null;return t}function Tp(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Qt(t.nextSibling),t===null))return null;return t}function js(t){return t.data==="$?"||t.data==="$~"}function Gs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function L1(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var qs=null;function Uc(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Qt(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Hc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function zp(t,e,a){switch(e=Cl(a),t){case"html":if(t=e.documentElement,!t)throw Error(x(452));return t;case"head":if(t=e.head,!t)throw Error(x(453));return t;case"body":if(t=e.body,!t)throw Error(x(454));return t;default:throw Error(x(451))}}function Vi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Fs(t)}var Jt=new Map,jc=new Set;function Al(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ze=L.d;L.d={f:U1,r:H1,D:j1,C:G1,L:q1,m:Y1,X:Z1,S:K1,M:V1};function U1(){var t=ze.f(),e=Vl();return t||e}function H1(t){var e=ci(t);e!==null&&e.tag===5&&e.type==="form"?xd(e):ze.r(t)}var hi=typeof document=="undefined"?null:document;function Mp(t,e,a){var i=hi;if(i&&typeof e=="string"&&e){var n=Kt(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),jc.has(n)||(jc.add(n),t={rel:t,crossOrigin:a,href:e},i.querySelector(n)===null&&(e=i.createElement("link"),pt(e,"link",t),st(e),i.head.appendChild(e)))}}function j1(t){ze.D(t),Mp("dns-prefetch",t,null)}function G1(t,e){ze.C(t,e),Mp("preconnect",t,e)}function q1(t,e,a){ze.L(t,e,a);var i=hi;if(i&&t&&e){var n='link[rel="preload"][as="'+Kt(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Kt(a.imageSizes)+'"]')):n+='[href="'+Kt(t)+'"]';var l=n;switch(e){case"style":l=si(t);break;case"script":l=gi(t)}Jt.has(l)||(t=Q({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Jt.set(l,t),i.querySelector(n)!==null||e==="style"&&i.querySelector(mn(l))||e==="script"&&i.querySelector(xn(l))||(e=i.createElement("link"),pt(e,"link",t),st(e),i.head.appendChild(e)))}}function Y1(t,e){ze.m(t,e);var a=hi;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Kt(i)+'"][href="'+Kt(t)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=gi(t)}if(!Jt.has(l)&&(t=Q({rel:"modulepreload",href:t},e),Jt.set(l,t),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xn(l)))return}i=a.createElement("link"),pt(i,"link",t),st(i),a.head.appendChild(i)}}}function K1(t,e,a){ze.S(t,e,a);var i=hi;if(i&&t){var n=Va(i).hoistableStyles,l=si(t);e=e||"default";var o=n.get(l);if(!o){var s={loading:0,preload:null};if(o=i.querySelector(mn(l)))s.loading=5;else{t=Q({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Jt.get(l))&&Nr(t,a);var r=o=i.createElement("link");st(r),pt(r,"link",t),r._p=new Promise(function(u,b){r.onload=u,r.onerror=b}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,tl(o,e,i)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(l,o)}}}function Z1(t,e){ze.X(t,e);var a=hi;if(a&&t){var i=Va(a).hoistableScripts,n=gi(t),l=i.get(n);l||(l=a.querySelector(xn(n)),l||(t=Q({src:t,async:!0},e),(e=Jt.get(n))&&Dr(t,e),l=a.createElement("script"),st(l),pt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function V1(t,e){ze.M(t,e);var a=hi;if(a&&t){var i=Va(a).hoistableScripts,n=gi(t),l=i.get(n);l||(l=a.querySelector(xn(n)),l||(t=Q({src:t,async:!0,type:"module"},e),(e=Jt.get(n))&&Dr(t,e),l=a.createElement("script"),st(l),pt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function Gc(t,e,a,i){var n=(n=Ye.current)?Al(n):null;if(!n)throw Error(x(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=si(a.href),a=Va(n).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=si(a.href);var l=Va(n).hoistableStyles,o=l.get(t);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,o),(l=n.querySelector(mn(t)))&&!l._p&&(o.instance=l,o.state.loading=5),Jt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Jt.set(t,a),l||X1(n,t,a,o.state))),e&&i===null)throw Error(x(528,""));return o}if(e&&i!==null)throw Error(x(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=gi(a),a=Va(n).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(x(444,t))}}function si(t){return'href="'+Kt(t)+'"'}function mn(t){return'link[rel="stylesheet"]['+t+"]"}function Cp(t){return Q({},t,{"data-precedence":t.precedence,precedence:null})}function X1(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),pt(e,"link",a),st(e),t.head.appendChild(e))}function gi(t){return'[src="'+Kt(t)+'"]'}function xn(t){return"script[async]"+t}function qc(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Kt(a.href)+'"]');if(i)return e.instance=i,st(i),i;var n=Q({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),st(i),pt(i,"style",n),tl(i,a.precedence,t),e.instance=i;case"stylesheet":n=si(a.href);var l=t.querySelector(mn(n));if(l)return e.state.loading|=4,e.instance=l,st(l),l;i=Cp(a),(n=Jt.get(n))&&Nr(i,n),l=(t.ownerDocument||t).createElement("link"),st(l);var o=l;return o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(l,"link",i),e.state.loading|=4,tl(l,a.precedence,t),e.instance=l;case"script":return l=gi(a.src),(n=t.querySelector(xn(l)))?(e.instance=n,st(n),n):(i=a,(n=Jt.get(l))&&(i=Q({},a),Dr(i,n)),t=t.ownerDocument||t,n=t.createElement("script"),st(n),pt(n,"link",i),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(x(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,tl(i,a.precedence,t));return e.instance}function tl(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,o=0;o<i.length;o++){var s=i[o];if(s.dataset.precedence===e)l=s;else if(l!==n)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Nr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Dr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var el=null;function Yc(t,e,a){if(el===null){var i=new Map,n=el=new Map;n.set(a,i)}else n=el,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var l=a[n];if(!(l[un]||l[ct]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(e)||"";o=t+o;var s=i.get(o);s?s.push(l):i.set(o,[l])}}return i}function Kc(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Q1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Ap(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function J1(t,e,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=si(i.href),l=e.querySelector(mn(n));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=El.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=l,st(l);return}l=e.ownerDocument||e,i=Cp(i),(n=Jt.get(n))&&Nr(i,n),l=l.createElement("link"),st(l);var o=l;o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(l,"link",i),a.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=El.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Jo=0;function F1(t,e){return t.stylesheets&&t.count===0&&al(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var i=setTimeout(function(){if(t.stylesheets&&al(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&Jo===0&&(Jo=62500*E1());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&al(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>Jo?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function El(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)al(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _l=null;function al(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_l=new Map,e.forEach(W1,t),_l=null,El.call(t))}function W1(t,e){if(!(e.state.loading&4)){var a=_l.get(t);if(a)var i=a.get(null);else{a=new Map,_l.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var o=n[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}n=e.instance,o=n.getAttribute("data-precedence"),l=a.get(o)||i,l===i&&a.set(null,n),a.set(o,n),this.count++,i=El.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var nn={$$typeof:he,Provider:null,Consumer:null,_currentValue:fa,_currentValue2:fa,_threadCount:0};function I1(t,e,a,i,n,l,o,s,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vo(0),this.hiddenUpdates=vo(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Ep(t,e,a,i,n,l,o,s,r,u,b,h){return t=new I1(t,e,a,o,r,u,b,h,s),e=1,l===!0&&(e|=24),l=At(3,null,null,e),t.current=l,l.stateNode=t,e=sr(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:e},cr(l),t}function _p(t){return t?(t=qa,t):qa}function Op(t,e,a,i,n,l){n=_p(n),i.context===null?i.context=n:i.pendingContext=n,i=Ze(e),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=Ve(t,i,e),a!==null&&(St(a,t,e),Ui(a,t,e))}function Zc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Lr(t,e){Zc(t,e),(t=t.alternate)&&Zc(t,e)}function Rp(t){if(t.tag===13||t.tag===31){var e=ka(t,67108864);e!==null&&St(e,t,67108864),Lr(t,67108864)}}function Vc(t){if(t.tag===13||t.tag===31){var e=Bt();e=Qs(e);var a=ka(t,e);a!==null&&St(a,t,e),Lr(t,e)}}var Ol=!0;function $1(t,e,a,i){var n=S.T;S.T=null;var l=L.p;try{L.p=2,Ur(t,e,a,i)}finally{L.p=l,S.T=n}}function P1(t,e,a,i){var n=S.T;S.T=null;var l=L.p;try{L.p=8,Ur(t,e,a,i)}finally{L.p=l,S.T=n}}function Ur(t,e,a,i){if(Ol){var n=Ys(i);if(n===null)Xo(t,e,i,Rl,a),Xc(t,i);else if(eg(n,t,e,a,i))i.stopPropagation();else if(Xc(t,i),e&4&&-1<tg.indexOf(t)){for(;n!==null;){var l=ci(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=oa(l.pendingLanes);if(o!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var r=1<<31-Rt(o);s.entanglements[1]|=r,o&=~r}ne(l),(D&6)===0&&(wl=_t()+500,bn(0,!1))}}break;case 31:case 13:s=ka(l,2),s!==null&&St(s,l,2),Vl(),Lr(l,2)}if(l=Ys(i),l===null&&Xo(t,e,i,Rl,a),l===n)break;n=l}n!==null&&i.stopPropagation()}else Xo(t,e,i,null,a)}}function Ys(t){return t=Is(t),Hr(t)}var Rl=null;function Hr(t){if(Rl=null,t=Da(t),t!==null){var e=sn(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=$c(e),t!==null)return t;t=null}else if(a===31){if(t=Pc(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Rl=t,null}function Bp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q0()){case iu:return 2;case nu:return 8;case sl:case Y0:return 32;case lu:return 268435456;default:return 32}default:return 32}}var Ks=!1,Je=null,Fe=null,We=null,ln=new Map,on=new Map,Le=[],tg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xc(t,e){switch(t){case"focusin":case"focusout":Je=null;break;case"dragenter":case"dragleave":Fe=null;break;case"mouseover":case"mouseout":We=null;break;case"pointerover":case"pointerout":ln.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":on.delete(e.pointerId)}}function Mi(t,e,a,i,n,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},e!==null&&(e=ci(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function eg(t,e,a,i,n){switch(e){case"focusin":return Je=Mi(Je,t,e,a,i,n),!0;case"dragenter":return Fe=Mi(Fe,t,e,a,i,n),!0;case"mouseover":return We=Mi(We,t,e,a,i,n),!0;case"pointerover":var l=n.pointerId;return ln.set(l,Mi(ln.get(l)||null,t,e,a,i,n)),!0;case"gotpointercapture":return l=n.pointerId,on.set(l,Mi(on.get(l)||null,t,e,a,i,n)),!0}return!1}function Np(t){var e=Da(t.target);if(e!==null){var a=sn(e);if(a!==null){if(e=a.tag,e===13){if(e=$c(a),e!==null){t.blockedOn=e,Ef(t.priority,function(){Vc(a)});return}}else if(e===31){if(e=Pc(a),e!==null){t.blockedOn=e,Ef(t.priority,function(){Vc(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Ys(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);ss=i,a.target.dispatchEvent(i),ss=null}else return e=ci(a),e!==null&&Rp(e),t.blockedOn=a,!1;e.shift()}return!0}function Qc(t,e,a){il(t)&&a.delete(e)}function ag(){Ks=!1,Je!==null&&il(Je)&&(Je=null),Fe!==null&&il(Fe)&&(Fe=null),We!==null&&il(We)&&(We=null),ln.forEach(Qc),on.forEach(Qc)}function qn(t,e){t.blockedOn===e&&(t.blockedOn=null,Ks||(Ks=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,ag)))}var Yn=null;function Jc(t){Yn!==t&&(Yn=t,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,function(){Yn===t&&(Yn=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],n=t[e+2];if(typeof i!="function"){if(Hr(i||a)===null)continue;break}var l=ci(a);l!==null&&(t.splice(e,3),e-=3,Ss(l,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function ri(t){function e(r){return qn(r,t)}Je!==null&&qn(Je,t),Fe!==null&&qn(Fe,t),We!==null&&qn(We,t),ln.forEach(e),on.forEach(e);for(var a=0;a<Le.length;a++){var i=Le[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Le.length&&(a=Le[0],a.blockedOn===null);)Np(a),a.blockedOn===null&&Le.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],l=a[i+1],o=n[Tt]||null;if(typeof l=="function")o||Jc(a);else if(o){var s=null;if(l&&l.hasAttribute("formAction")){if(n=l,o=l[Tt]||null)s=o.formAction;else if(Hr(n)!==null)continue}else s=o.action;typeof s=="function"?a[i+1]=s:(a.splice(i,3),i-=3),Jc(a)}}}function Dp(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function jr(t){this._internalRoot=t}Jl.prototype.render=jr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));var a=e.current,i=Bt();Op(a,i,t,e,null,null)};Jl.prototype.unmount=jr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Op(t.current,2,null,t,null,null),Vl(),e[fi]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=cu();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Le.length&&e!==0&&e<Le[a].priority;a++);Le.splice(a,0,t),a===0&&Np(t)}};var Fc=Wc.version;if(Fc!=="19.2.8")throw Error(x(527,Fc,"19.2.8"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=N0(e),t=t!==null?tu(t):null,t=t===null?null:t.stateNode,t};var ig={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ci.isDisabled&&Ci.supportsFiber))try{rn=Ci.inject(ig),Ot=Ci}catch{}var Ci;Fl.createRoot=function(t,e){if(!Ic(t))throw Error(x(299));var a=!1,i="",n=Md,l=Cd,o=Ad;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=Ep(t,1,!1,null,null,a,i,null,n,l,o,Dp),t[fi]=e.current,Br(t),new jr(e)};Fl.hydrateRoot=function(t,e,a){if(!Ic(t))throw Error(x(299));var i=!1,n="",l=Md,o=Cd,s=Ad,r=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),e=Ep(t,1,!0,e,a!=null?a:null,i,n,r,l,o,s,Dp),e.context=_p(null),a=e.current,i=Bt(),i=Qs(i),n=Ze(i),n.callback=null,Ve(a,n,i),a=i,e.current.lanes=a,cn(e,a),ne(e),t[fi]=e.current,Br(t),new Jl(e)};Fl.version="19.2.8"});var jp=Ae((Og,Hp)=>{"use strict";function Up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Up)}catch(t){console.error(t)}}Up(),Hp.exports=Lp()});var Lt=Jr(vn()),t0=Jr(jp());var Gp=`<!doctype html>
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
<sc-if value="{{hasDepComment}}" hint-placeholder-val="{{ false }}">
<div style="border-radius: 14px; background: #0d0f14; border: 1px solid #262b3a; padding: 10px 12px; font-size: 12px; line-height: 1.45; color: #a3a8b5">\u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F Tonkeeper \u0441 \u0441\u0443\u043C\u043C\u043E\u0439 \u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u043C <span style="color: #ffc83d; font-weight: 700">{{depComment}}</span>. \u041D\u0435 \u0443\u0434\u0430\u043B\u044F\u0439 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u2014 \u043F\u043E \u043D\u0435\u043C\u0443 \u043C\u044B \u043D\u0430\u0439\u0434\u0451\u043C \u0442\u0432\u043E\u0439 \u043F\u0435\u0440\u0435\u0432\u043E\u0434.</div>
</sc-if>
<sc-if value="{{waiting}}" hint-placeholder-val="{{ false }}">
<div role="status" style="display: flex; align-items: center; gap: 8px; justify-content: center; font-size: 13px; color: #2bd46b"><span style="width: 8px; height: 8px; border-radius: 50%; background: #2bd46b; animation: rkBlink 1.2s infinite"></span>\u0416\u0434\u0451\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0438\u0437 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430\u2026</div>
</sc-if>
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

</div>
</sc-if>
<sc-if value="{{depToast}}" hint-placeholder-val="{{ false }}">
<div style="position: fixed; left: 0; right: 0; top: 24px; z-index: 70; display: flex; justify-content: center; pointer-events: none">
<div role="status" style="width: 320px; box-sizing: border-box; background: #1f2330; border: 1px solid {{toastBorder}}; border-radius: 16px; padding: 12px 14px; display: flex; align-items: center; gap: 10px; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 500; color: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: rkToast 2.6s ease-out forwards">
<span style="font-size: 18px">{{toastIcon}}</span><span>{{toastText}}</span>
</div>
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
// \u0422\u0415\u0421\u0422\u041E\u0412\u042B\u0419 \u0420\u0415\u0416\u0418\u041C (\u0441\u0443\u043C\u043C\u0430 \u0441\u0440\u0430\u0437\u0443 \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441 \u0431\u0435\u0437 \u043E\u043F\u043B\u0430\u0442\u044B) \u2014 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D: \u0442\u0435\u043F\u0435\u0440\u044C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 Tonkeeper.
var TEST_TOPUP = false;
// \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 TON: \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u043C Tonkeeper \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u043C, \u0441\u0443\u043C\u043C\u043E\u0439 \u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u043C \u0438\u0433\u0440\u043E\u043A\u0430.
// \u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0432 \u0431\u043B\u043E\u043A\u0447\u0435\u0439\u043D\u0435 \u043F\u043E \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044E \u0438 \u0441\u0430\u043C \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442 \u0431\u0430\u043B\u0430\u043D\u0441.
function tonkeeperUrl(wallet, ton, comment) {
  var nano = Math.round(ton * 1e9);
  return 'https://app.tonkeeper.com/transfer/' + wallet + '?amount=' + nano + '&text=' + encodeURIComponent(comment);
}
function openLink(url) {
  var tg = window.Telegram && window.Telegram.WebApp;
  try { if (tg && tg.openLink) { tg.openLink(url); return; } } catch (e) {}
  window.open(url, '_blank');
}
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
    var self = this, net = window.RK && window.RK.net;
    if (net) this.offCredit = net.on('credit', function (m) {
      if (m.dup || (m.game !== 'deposit' && m.game !== 'admin')) return;
      self.setState({ waitingDeposit: 0 });
      self.showToast(m.amount > 0 ? { icon: '\u2705', text: (m.game === 'deposit' ? '\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435: +' : '\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E: +') + m.amount + ' TON', ok: true } : { icon: '\u2796', text: '\u0421\u043F\u0438\u0441\u0430\u043D\u043E ' + m.amount + ' TON' });
    });
    // \u0432\u0435\u0440\u043D\u0443\u043B\u0441\u044F \u0438\u0437 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 \u2014 \u043F\u0440\u043E\u0441\u0438\u043C \u0441\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u044B \u043F\u043E\u0440\u0430\u043D\u044C\u0448\u0435
    this.onVis = function () { var n = window.RK && window.RK.net; if (!document.hidden && self.state.waitingDeposit && n) n.send({ t: 'deposit.check' }); };
    document.addEventListener('visibilitychange', this.onVis);
    this.iv = setInterval(function () {
      var s = self.state;
      self.setState({ drops: [pickDrop()].concat(s.drops).slice(0, 8), online: Math.max(800, s.online + Math.round((Math.random() - 0.5) * 8)) });
    }, 2200);
  }
  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.tt); if (this.offCredit) this.offCredit(); document.removeEventListener('visibilitychange', this.onVis); }
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
    if (s.depTab === 'ton') {
      var net = window.RK && window.RK.net, dep = net && net.deposit;
      var amt = Math.round(parseFloat(s.depAmount) * 100) / 100;
      if (!(amt >= 0.1)) { this.showToast({ icon: '\u26A0\uFE0F', text: '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u2014 0.1 TON' }); return; }
      if (!net || !net.connected) { this.showToast({ icon: '\u26A0\uFE0F', text: '\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437' }); return; }
      if (!dep) { this.showToast({ icon: '\u26A0\uFE0F', text: '\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0432\u0445\u043E\u0434\u0435 \u0447\u0435\u0440\u0435\u0437 Telegram' }); return; }
      openLink(tonkeeperUrl(dep.wallet, amt, dep.comment));
      this.setState({ waitingDeposit: Date.now() });
      this.showToast({ icon: '\u23F3', text: '\u0416\u0434\u0451\u043C \u043F\u0435\u0440\u0435\u0432\u043E\u0434. \u0411\u0430\u043B\u0430\u043D\u0441 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F \u0441\u0430\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443 \u043F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B' });
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
    var depInfo = window.RK && window.RK.net && window.RK.net.deposit;
    var liveTon = !TEST_TOPUP && s.depMode === 'dep' && s.depTab === 'ton';
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
      badgeText: testOn ? '\u0422\u0415\u0421\u0422 \xB7 \u0441\u0443\u043C\u043C\u0430 \u0441\u0440\u0430\u0437\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441' : (liveTon ? '\u041E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 Tonkeeper \xB7 \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438' : '\u0414\u0415\u041C\u041E \xB7 ' + (s.depMode === 'wd' ? '\u0432\u044B\u0432\u043E\u0434' : '\u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435') + ' \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E'),
      badgeColor: testOn || liveTon ? '#2bd46b' : '#ffc83d', badgeBg: testOn || liveTon ? 'rgba(43,212,107,0.12)' : 'rgba(255,200,61,0.12)', badgeBorder: testOn || liveTon ? 'rgba(43,212,107,0.4)' : 'rgba(255,200,61,0.35)',
      depComment: depInfo ? depInfo.comment : '', hasDepComment: !!depInfo,
      waiting: !!s.waitingDeposit && s.depTab === 'ton',
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
`;var qp=`<!doctype html>
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
`;var Yp=`<!doctype html>
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
`;var Kp=`<!doctype html>
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
`;var Zp=`<!doctype html>
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
`;var Vp=`<!doctype html>
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
`;var Xp=`<!doctype html>
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
`;var Qp=`<!doctype html>
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
`;var Jp=`<!doctype html>
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
`;var Fp=`<!doctype html>
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
<div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 6px">
<span style="font-size: 17px; font-weight: 700">\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F TON</span>
<button type="button" onClick="{{refresh}}" style="height: 32px; border-radius: 10px; border: 1px solid #262b3a; background: #1b1e27; color: #a3a8b5; font-family: Rubik, system-ui, sans-serif; font-size: 12px; font-weight: 700; padding: 0 10px; cursor: pointer">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</button>
</div>
<div style="display: flex; flex-direction: column; gap: 6px">
<sc-if value="{{noDeps}}" hint-placeholder-val="{{ false }}">
<div style="border-radius: 14px; border: 1px dashed #2c3244; padding: 16px; text-align: center; font-size: 13px; color: #8a90a0">\u041F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0431\u044B\u043B\u043E</div>
</sc-if>
<sc-for list="{{deps}}" as="dp" hint-placeholder-count="2">
<div style="display: flex; flex-direction: column; gap: 4px; background: #151821; border: 1px solid {{dp.border}}; border-radius: 14px; padding: 10px 12px">
<div style="display: flex; align-items: center; gap: 10px">
<span style="flex-grow: 1; min-width: 0; font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{dp.who}}</span>
<span style="font-size: 11px; color: #8a90a0">{{dp.time}}</span>
<span style="font-size: 14px; font-weight: 900; color: #ffc83d">+{{dp.ton}} TON</span>
</div>
<span style="font-size: 11px; color: {{dp.statusColor}}">{{dp.status}}</span>
</div>
</sc-for>
</div>
<div style="font-size: 11px; color: #6c7282; text-align: center; line-height: 1.5">\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0431\u0435\u0437 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F rk:\u2026 \u043D\u0435 \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u043C \u2014 \u0432\u044B\u0434\u0430\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0432\u044B\u0448\u0435.<br>\u0415\u0441\u043B\u0438 \u0438\u0433\u0440\u043E\u043A \u043D\u0435 \u0432 \u0441\u0435\u0442\u0438, \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F \u043F\u0440\u0438 \u0435\u0433\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0432\u0445\u043E\u0434\u0435 \u0432 \u0438\u0433\u0440\u0443.<br>\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0435 \u0443\u0432\u043E\u0434\u0438\u0442 \u0431\u0430\u043B\u0430\u043D\u0441 \u043D\u0438\u0436\u0435 \u043D\u0443\u043B\u044F.</div>
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
      this.offs.push(net.on('admin.log', function (m) { self.setState({ log: m.log, deps: m.deposits || [] }); }));
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
      refresh: function () { var n = NET(); if (n && n.connected) n.send({ t: 'admin.log' }); },
      deps: (s.deps || []).map(function (d) {
        var u = d.username ? '@' + d.username : (d.uid && d.uid.indexOf('tg') === 0 ? 'id ' + d.uid.slice(2) : (d.comment ? '\xAB' + d.comment + '\xBB' : '\u0431\u0435\u0437 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F'));
        var ok = d.status === '\u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E';
        return { who: u, time: hm(d.at), ton: d.ton, status: d.status, statusColor: ok ? '#2bd46b' : '#ff8a5c', border: ok ? '#222838' : 'rgba(255,138,92,0.45)' };
      }),
      noDeps: !(s.deps && s.deps.length),
      noLog: !(s.log && s.log.length), logCount: s.log && s.log.length ? s.log.length + ' \u0448\u0442.' : ''
    };
  }
}
<\/script>
</body>
</html>
`;var Y=window.Telegram&&window.Telegram.WebApp,hg=0,Il=["rk_balance","rk_inv","rk_free_at","rk_pvp_hist","rk_crash_hist","rk_upg_hist","rk_stats","rk_tasks","rk_pvp_pending","rk_reset","rk_credits_done"],Wp=3900,ia=(()=>{try{return Y&&Y.CloudStorage&&(!Y.isVersionAtLeast||Y.isVersionAtLeast("6.9"))?Y.CloudStorage:null}catch{return null}})(),xt={_m:{},_t:{},get(t){let e=null;try{e=localStorage.getItem(t)}catch{}return e!=null?e:t in this._m?this._m[t]:null},set(t,e){e=String(e),this._m[t]=e;try{localStorage.setItem(t,e)}catch{}ia&&Il.indexOf(t)!==-1&&(clearTimeout(this._t[t]),this._t[t]=setTimeout(()=>{let a=[];for(let i=0;i<e.length;i+=Wp)a.push(e.slice(i,i+Wp));a.length||a.push("");try{ia.setItem(t+"__n",String(a.length)),a.forEach((i,n)=>ia.setItem(t+"__"+n,i))}catch{}},400))},remove(t){delete this._m[t];try{localStorage.removeItem(t)}catch{}if(ia)try{ia.setItem(t+"__n","0")}catch{}},getJSON(t,e){try{let a=JSON.parse(this.get(t)||"null");return a==null?e:a}catch{return e}},setJSON(t,e){this.set(t,JSON.stringify(e))}};function gg(){return new Promise(t=>{if(!ia)return t();let e=setTimeout(t,2500);try{ia.getItems(Il.map(a=>a+"__n"),(a,i)=>{if(a||!i)return clearTimeout(e),t();let n=[];if(Il.forEach(l=>{let o=parseInt(i[l+"__n"]||"0",10)||0;for(let s=0;s<o;s++)n.push(l+"__"+s)}),!n.length)return clearTimeout(e),t();ia.getItems(n,(l,o)=>{!l&&o&&Il.forEach(s=>{let r=parseInt(i[s+"__n"]||"0",10)||0;if(!r)return;let u="";for(let b=0;b<r;b++)u+=o[s+"__"+b]||"";xt._m[s]=u;try{localStorage.setItem(s,u)}catch{}}),clearTimeout(e),t()})})}catch{clearTimeout(e),t()}})}var Me={get(){let t=parseFloat(xt.get("rk_balance"));return isNaN(t)?hg:t},set(t){xt.set("rk_balance",String(Math.round(t*100)/100)),clearTimeout(this._rt),this._rt=setTimeout(()=>{try{window.RK&&window.RK.net&&window.RK.net.send({t:"bal",v:Me.get()})}catch{}},2e3)}},bg=["B-Day Candle","Lol Pop","Desk Calendar","Homemade Cake","Homemade Cake","Jingle Bells","Hypno Lollipop","Snow Globe","Berry Box"],mg={_load(){let t=xt.getJSON("rk_inv",null);return Array.isArray(t)?t:null},_save(t){xt.setJSON("rk_inv",t),this._mem=t},list(){let t=this._load()||this._mem;if(!t){let e=Date.now();t=bg.map((a,i)=>({uid:"s"+i+"_"+e,key:a,at:e-(i+1)*36e5})),this._save(t)}return t.slice()},add(t){let e=this.list(),a={uid:"g"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),key:t,at:Date.now()};return e.unshift(a),this._save(e),a},remove(t){let e=new Set([].concat(t));this._save(this.list().filter(a=>!e.has(a.uid)))},reset(){return xt.remove("rk_inv"),this._mem=null,this.list()}},qr=t=>new Date((t||Date.now())+3*3600*1e3).toISOString().slice(0,10),bi=()=>({cases:0,crash:0,pvp:0,upgrade:0,mines:0,wagered:0,won:0}),e0={_get(){let t=xt.getJSON("rk_stats",null);return t&&t.days?t:{total:bi(),days:{}}},day(){return Object.assign(bi(),this._get().days[qr()]||{})},range(t){let e=this._get(),a=bi();for(let i=0;i<t;i++){let n=e.days[qr(Date.now()-i*864e5)];n&&Object.keys(a).forEach(l=>{a[l]+=n[l]||0})}return a},total(){return Object.assign(bi(),this._get().total)}};function a0(t){let e=e0._get(),a=qr(),i=Object.assign(bi(),e.days[a]||{}),n=Object.assign(bi(),e.total||{});[i,n].forEach(l=>{t.round&&t.game in l&&(l[t.game]+=1),l.wagered=Math.round((l.wagered+(t.bet||0))*100)/100,l.won=Math.round((l.won+(t.win||0))*100)/100}),e.days[a]=i,e.total=n,Object.keys(e.days).sort().slice(0,-8).forEach(l=>{delete e.days[l]}),xt.setJSON("rk_stats",e)}var Ut=null;function Gr(t){let e=Ut&&Ut.logic;e&&e.state&&"balance"in e.state?e.setState({balance:Math.round((e.state.balance+t)*100)/100}):(Me.set(Me.get()+t),Ut&&Ut.forceUpdate())}function xg(t){let e=Ut&&Ut.logic;e&&e.state&&"balance"in e.state?e.setState({balance:t}):(Me.set(t),Ut&&Ut.forceUpdate())}var i0=(()=>{let t={},e=new Set,a=null,i=0,n=null,l={connected:!1,me:null,online:0,offset:0};function o(c,y){(t[c]||[]).slice().forEach(v=>{try{v(y)}catch(R){console.error(R)}})}function s(){let c=(window.RK_SERVER||"").trim();return c||(c=(location.protocol==="https:"?"wss://":"ws://")+location.host),c.replace(/^http/,"ws").replace(/\/+$/,"")+"/ws"}function r(){let c=xt.get("rk_guest");return c||(c=Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4),xt.set("rk_guest",c)),c}function u(c){return a&&a.readyState===1?(a.send(JSON.stringify(c)),!0):!1}function b(c){let y=xt.getJSON("rk_credits_done",[]);if(c.dup=y.indexOf(c.id)!==-1,!c.dup){if(c.game==="deposit")Gr(c.amount);else if(c.game==="admin"){let v=Ut&&Ut.logic,R=v&&v.state&&"balance"in v.state?v.state.balance:Me.get();Gr(Math.max(c.amount,-R))}else Gr(c.amount),a0({game:c.game,win:c.amount});xt.setJSON("rk_credits_done",[c.id].concat(y).slice(0,100))}u({t:"ack",id:c.id})}function h(){try{a=new WebSocket(s())}catch{return p()}a.onopen=()=>{i=0,u({t:"hello",initData:Y&&Y.initData||"",guestId:r()}),e.forEach(y=>u({t:"sub",room:y})),clearInterval(n);let c=()=>u({t:"ping",c:Date.now()});c(),n=setInterval(c,1e4)},a.onmessage=c=>{let y;try{y=JSON.parse(c.data)}catch{return}if(y.t==="pong"){let v=Date.now();l.offset=y.now-(y.c+v)/2;return}y.t==="welcome"&&(y.balanceReset&&xt.get("rk_reset")!==y.balanceReset&&(xg(0),xt.set("rk_reset",y.balanceReset)),l.me=y.me,l.online=y.online,l.deposit=y.deposit||null,l.connected=!0,o("status",l),u({t:"bal",v:Me.get()})),y.t==="online"&&(l.online=y.n),y.t==="credit"&&b(y),o(y.t,y)},a.onclose=()=>{let c=l.connected;l.connected=!1,clearInterval(n),c&&o("status",l),p()},a.onerror=()=>{}}function p(){i=Math.min(i+1,6),setTimeout(h,500*i)}return l.on=(c,y)=>((t[c]=t[c]||[]).push(y),()=>{t[c]=(t[c]||[]).filter(v=>v!==y)}),l.send=u,l.sub=c=>{e.add(c),u({t:"sub",room:c})},l.unsub=c=>{e.delete(c),u({t:"unsub",room:c})},l.now=()=>Date.now()+l.offset,l.isMe=c=>!!(l.me&&l.me.uid===c),l.start=h,l})();window.RK={wallet:Me,inventory:mg,store:xt,stats:e0,track:a0,net:i0,botName:"RackoonDropBot",user:Y&&Y.initDataUnsafe&&Y.initDataUnsafe.user||null};if(Y){Y.ready(),Y.expand();try{Y.setHeaderColor("#0b0d12"),Y.setBackgroundColor("#0b0d12")}catch{}try{Y.disableVerticalSwipes&&Y.disableVerticalSwipes()}catch{}}document.addEventListener("click",t=>{if(Y&&Y.HapticFeedback&&t.target.closest&&t.target.closest("button, a"))try{Y.HapticFeedback.impactOccurred("light")}catch{}},!0);var $l={"16b8be03ec4054a9ad560c5be1c9ab9e":"banner-crash.jpg","88b023f22e2d3006641849bb168e073d":"banner-cases.jpg","63c10368990e8788e655de65d5a9b515":"banner-upgrade.jpg",b81dc491ff982e1892b4eeeb94570e3c:"banner-mines.jpg","661884b648dd965ea69af44ea8c7ee95":"avatar.jpg",a8d1e2a1f1626c9b8edd4755d9c32150:"rocket.png","29f965541d768edadf1aad890a105f4f":"space.jpg",ac9e83f513d62d0c7fc3250c8a2d1f89:"candle.svg","1f689ff254757e970266197964c5d390":"lolpop.svg","9b7049b84c84b25ce8e457f56c837c42":"calendar.svg",b4c8d4f914ed6e253c933045ab9e3461:"hypno.svg","808ef5efdbeb6b276f70430b220f760b":"bells.svg","6ef5ecbeb712d1b1d752a33d1e9c279d":"cake.svg","6e3628fac94b5266f3b64cea9c5fe7ee":"globe.svg",c2c0de4f1d0a4ed1dd2df84eff4c7f73:"berry.svg","45ac385132ce7b83da133306d9a330f8":"muffin.svg","8f4c023d08704d2319e54c9872a8c46d":"record.svg",fe01a5a2d2ff76e0192e008ed6267558:"tophat.svg",ef580f1649ad89b5e268954da6ea30b2:"dring.svg","5bb7da32fc8a6f8dbe91cf7cedc20c65":"lpotion.svg","734e25b54462cda990767f69381d8355":"rose.svg",c02bc9477e447f6f71962df1fc7a399a:"bear.svg","4826a2db621709393534f8feae3d3f4a":"signet.svg","5efc0b426406d53e3b649c727079f26d":"watch.svg",e562d84d61312007f5108ab64cbfe6f9:"iongem.svg","923c4583ef32f1e6549c08d5a1839d4c":"peach.svg","500977bc4572974cf066e4c08b276369":"cap.svg",a64ccb23ba5a5ab0f1f789ab412cf3af:"pepe.svg",bb8c4faf5d5477b7abe934698601360a:"none.svg","34af5661e80ecf394b0a48aeeb28ab6c":"r-fire.svg","7629870dfcd56d08701d6a71de1e83df":"r-laugh.svg",f5a9ceb49eb8c4c03e26914bcd1e2576:"r-angry.svg","89d4ee9117e73bee099492a4ce5c5498":"r-heart.svg",c22eeb9eb2c04b336c2c7f989a2a93a7:"r-party.svg",fcf5bf14ee8b1ae499c387610e4d1977:"case-c1.jpg","06ce572b9077b276c1d8a7b06b5e8713":"case-c2.jpg","9e1537bfc41c71475ce556a1aaf4884f":"case-c3.jpg",c0847d0dc5fbcb1a68d80763032f0675:"case-c4.jpg",db1a02051117bc41aa898a143cdc3d48:"case-c5.jpg","72f77fc4af6bf75c8e7d10aa33580007":"case-c6.jpg",b289144243be3c7e4e7176e3a0070caa:"case-c7.jpg","313d5daa64736bbfb70ecfcd97ed3141":"case-c8.jpg"};function yg(t){return t.replace(/\/_blob\/([0-9a-f]{32})/g,(e,a)=>$l[a]?"assets/"+$l[a]:e)}function vg(t){return t.replace(/position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba\(5, 6, 10, ([0-9.]+)\); display: flex; justify-content: center; align-items: flex-start; padding-top: \d+px/g,"position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, $1); display: flex; justify-content: center; align-items: center; padding: 16px")}var Yr={};window.rkThumb=function(t,e){let a=t.toLowerCase().replace(/[^a-z0-9]/g,""),i="https://fragment.com/file/gifts/"+a+"/thumb.webp",n="https://nft.fragment.com/gift/"+a+"-1.webp";return Yr[i]=n,Yr[n]=e.replace(/\/_blob\/([0-9a-f]{32})/,(l,o)=>$l[o]?"assets/"+$l[o]:l),i};window.addEventListener("error",t=>{let e=t.target;if(e&&e.tagName==="IMG"){if(window.RK&&window.RK.user&&e.getAttribute("src")===window.RK.user.photo_url){e.setAttribute("src","assets/avatar.jpg");return}if(e.hasAttribute("data-av")){e.removeAttribute("data-av"),e.setAttribute("src","assets/avatar.jpg");return}let a=Yr[e.getAttribute("src")];a&&e.setAttribute("src",a)}},!0);function le(t,e){let a=vg(yg(e)),i=new DOMParser().parseFromString(a,"text/html"),n=i.querySelector("x-dc"),l=n.querySelector("helmet"),o=[];l&&(l.querySelectorAll("link, style").forEach(b=>o.push(b.outerHTML)),l.remove());let s=Array.from(n.children)[0],r=i.querySelector("script[data-dc-script]").textContent,u=new Function("DCLogic",r+`
;return Component;`)(Kr);return{name:t,head:o,root:s,Logic:u}}var Kr=class{constructor(e){this.props=e||{},this.state={},this._host=null}setState(e,a){typeof e=="function"&&(e=e(this.state,this.props)),Object.assign(this.state,e),e&&"balance"in e&&Me.set(e.balance),this._host?this._host.forceUpdate(a):a&&a()}forceUpdate(e){this._host&&this._host.forceUpdate(e)}},Zr=t=>t.replace(/-([a-z])/g,(e,a)=>a.toUpperCase());function Ip(t,e){if(t=t.trim(),t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(/^-?\d+(\.\d+)?$/.test(t))return parseFloat(t);let a=t.split("."),i;for(let n=e.length-1;n>=0;n--)if(e[n]&&a[0]in e[n]){i=e[n][a[0]];break}for(let n=1;n<a.length&&i!=null;n++)i=i[a[n]];return i}var wg=/\{\{([^}]+)\}\}/g;function Wl(t,e){let a=t.match(/^\s*\{\{([^}]+)\}\}\s*$/);return a?Ip(a[1],e):t.replace(wg,(i,n)=>{let l=Ip(n,e);return l==null?"":String(l)})}function kg(t){let e={};return t.split(";").forEach(a=>{let i=a.indexOf(":");if(i<0)return;let n=a.slice(0,i).trim(),l=a.slice(i+1).trim();if(n){if(n.startsWith("--")){e[n]=l;return}n.startsWith("-webkit-")&&(n="Webkit"+Zr(n.slice(8)).replace(/^./,o=>o.toUpperCase()).slice(0)),e[n.startsWith("Webkit")?n:Zr(n)]=l}}),e}function n0(t,e,a,i){if(t.nodeType===3){let b=t.nodeValue;return!b.trim()&&b.indexOf(`
`)!==-1?null:b.indexOf("{{")===-1?b:Wl(b,e)}if(t.nodeType!==1)return null;let n=t.tagName.toLowerCase(),l=b=>Array.from(t.childNodes).map((h,p)=>n0(h,b,a,p)).filter(h=>h!=null&&h!==!1);if(n==="sc-if")return Wl(t.getAttribute("value")||"",e)?Lt.default.createElement(Lt.default.Fragment,{key:i},...l(e)):null;if(n==="sc-for"){let b=Wl(t.getAttribute("list")||"",e)||[],h=t.getAttribute("as")||"item";return Lt.default.createElement(Lt.default.Fragment,{key:i},...b.map((p,c)=>Lt.default.createElement(Lt.default.Fragment,{key:c},...l(e.concat([{[h]:p,$index:c}])))))}let o=t.namespaceURI==="http://www.w3.org/2000/svg",s={key:i};for(let b of Array.from(t.attributes)){let h=b.name,p=b.value,c=p.indexOf("{{")===-1?p:Wl(p,e);if(!h.startsWith("hint-")){if(h==="class")h="className";else if(h==="for")h="htmlFor";else if(h==="style"){s.style=kg(String(c));continue}else if(h.startsWith("on")){let y="on"+h.charAt(2).toUpperCase()+h.slice(3);y==="Onclick"&&(y="onClick"),h.toLowerCase()==="onclick"&&(y="onClick"),h.toLowerCase()==="oninput"&&(y="onChange"),h.toLowerCase()==="onkeydown"&&(y="onKeyDown"),typeof c=="function"&&(s[y]=c);continue}else o&&h.indexOf("-")!==-1&&!h.startsWith("aria-")&&!h.startsWith("data-")?h=Zr(h):h==="tabindex"?h="tabIndex":h==="referrerpolicy"?h="referrerPolicy":h==="inputmode"?h="inputMode":h==="enterkeyhint"?h="enterKeyHint":h==="autocomplete"?h="autoComplete":h==="readonly"?h="readOnly":h==="disabled"&&(c=c===!0||c===""||c==="disabled"||c==="true");s[h]=c}}if(n==="a"){let h=String(s.href||t.getAttribute("href")||"").match(/([A-Za-z]+)\.dc\.html$/);s.href="#",s.onClick=p=>{p.preventDefault(),h&&a(h[1])}}n==="input"&&"value"in s&&!s.onChange&&(s.readOnly=!0);let r=l(e);return{img:1,input:1,br:1,hr:1,meta:1,link:1}[n]?Lt.default.createElement(n,s):Lt.default.createElement(n,s,...r)}var Vr=class extends Lt.default.Component{constructor(e){super(e),this.logic=new e.screen.Logic({}),this.logic.state&&"balance"in this.logic.state&&(this.logic.state.balance=Me.get()),this.logic._host=this}componentDidMount(){Ut=this,this.logic.componentDidMount&&this.logic.componentDidMount()}componentWillUnmount(){Ut===this&&(Ut=null),this.logic.componentWillUnmount&&this.logic.componentWillUnmount(),this.logic._host=null}render(){let e=this.logic.renderVals?this.logic.renderVals():{};return n0(this.props.screen.root,[e],this.props.nav,"root")}},Pl={Main:le("Main",Gp),Crash:le("Crash",qp),Upgrade:le("Upgrade",Yp),Cases:le("Cases",Kp),Mines:le("Mines",Zp),Pvp:le("Pvp",Vp),Inventory:le("Inventory",Xp),Tasks:le("Tasks",Qp),Leaders:le("Leaders",Jp),Admin:le("Admin",Fp)},$p=new Set;Object.values(Pl).forEach(t=>t.head.forEach(e=>{if($p.has(e))return;$p.add(e);let a=document.createElement("div");a.innerHTML=e;let i=a.firstElementChild;i.tagName==="STYLE"&&/body\{/.test(i.textContent)&&(i.textContent=i.textContent.replace(/body\{[^}]*\}/,"")),document.head.appendChild(i)}));function Pp(){let t=(location.hash||"").replace("#/","");return Pl[t]?t:"Main"}var Xr=class extends Lt.default.Component{constructor(e){super(e),this.state={route:Pp()},this.nav=this.nav.bind(this),this.back=()=>this.nav("Main")}componentDidMount(){window.addEventListener("hashchange",()=>this.setState({route:Pp()})),Y&&Y.BackButton&&Y.BackButton.onClick(this.back),this.syncBack()}componentDidUpdate(){this.syncBack()}syncBack(){!Y||!Y.BackButton||(this.state.route==="Main"?Y.BackButton.hide():Y.BackButton.show())}nav(e){Pl[e]&&(location.hash=e==="Main"?"":"#/"+e,this.setState({route:e}),window.scrollTo(0,0))}render(){let e=this.state.route;return Lt.default.createElement(Vr,{key:e,screen:Pl[e],nav:this.nav})}};function l0(){let t=document.getElementById("app"),e=Math.min(window.innerWidth,480);t.style.zoom=String(e/390)}window.addEventListener("resize",l0);l0();gg().then(()=>{i0.start(),(0,t0.createRoot)(document.getElementById("app")).render(Lt.default.createElement(Xr))});})();
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
