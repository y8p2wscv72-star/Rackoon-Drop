(()=>{var N0=Object.create;var rf=Object.defineProperty;var _0=Object.getOwnPropertyDescriptor;var D0=Object.getOwnPropertyNames;var L0=Object.getPrototypeOf,H0=Object.prototype.hasOwnProperty;var Pt=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var U0=(t,e,a,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of D0(e))!H0.call(t,n)&&n!==a&&rf(t,n,{get:()=>e[n],enumerable:!(i=_0(e,n))||i.enumerable});return t};var wn=(t,e,a)=>(a=t!=null?N0(L0(t)):{},U0(e||!t||!t.__esModule?rf(a,"default",{value:t,enumerable:!0}):a,t));var yf=Pt(z=>{"use strict";var fo=Symbol.for("react.transitional.element"),j0=Symbol.for("react.portal"),G0=Symbol.for("react.fragment"),K0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),Y0=Symbol.for("react.consumer"),V0=Symbol.for("react.context"),Z0=Symbol.for("react.forward_ref"),X0=Symbol.for("react.suspense"),Q0=Symbol.for("react.memo"),pf=Symbol.for("react.lazy"),J0=Symbol.for("react.activity"),ff=Symbol.iterator;function F0(t){return t===null||typeof t!="object"?null:(t=ff&&t[ff]||t["@@iterator"],typeof t=="function"?t:null)}var hf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gf=Object.assign,bf={};function Ma(t,e,a){this.props=t,this.context=e,this.refs=bf,this.updater=a||hf}Ma.prototype.isReactComponent={};Ma.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ma.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mf(){}mf.prototype=Ma.prototype;function co(t,e,a){this.props=t,this.context=e,this.refs=bf,this.updater=a||hf}var uo=co.prototype=new mf;uo.constructor=co;gf(uo,Ma.prototype);uo.isPureReactComponent=!0;var cf=Array.isArray;function ro(){}var V={H:null,A:null,T:null,S:null},xf=Object.prototype.hasOwnProperty;function po(t,e,a){var i=a.ref;return{$$typeof:fo,type:t,key:e,ref:i!==void 0?i:null,props:a}}function W0(t,e){return po(t.type,e,t.props)}function ho(t){return typeof t=="object"&&t!==null&&t.$$typeof===fo}function I0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var df=/\/+/g;function so(t,e){return typeof t=="object"&&t!==null&&t.key!=null?I0(""+t.key):e.toString(36)}function P0(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(ro,ro):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ca(t,e,a,i,n){var l=typeof t;(l==="undefined"||l==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(l){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fo:case j0:o=!0;break;case pf:return o=t._init,Ca(o(t._payload),e,a,i,n)}}if(o)return n=n(t),o=i===""?"."+so(t,0):i,cf(n)?(a="",o!=null&&(a=o.replace(df,"$&/")+"/"),Ca(n,e,a,"",function(d){return d})):n!=null&&(ho(n)&&(n=W0(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(df,"$&/")+"/")+o)),e.push(n)),1;o=0;var s=i===""?".":i+":";if(cf(t))for(var r=0;r<t.length;r++)i=t[r],l=s+so(i,r),o+=Ca(i,e,a,l,n);else if(r=F0(t),typeof r=="function")for(t=r.call(t),r=0;!(i=t.next()).done;)i=i.value,l=s+so(i,r++),o+=Ca(i,e,a,l,n);else if(l==="object"){if(typeof t.then=="function")return Ca(P0(t),e,a,i,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function kn(t,e,a){if(t==null)return t;var i=[],n=0;return Ca(t,i,"","",function(l){return e.call(a,l,n++)}),i}function $0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var uf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},t1={map:kn,forEach:function(t,e,a){kn(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return kn(t,function(){e++}),e},toArray:function(t){return kn(t,function(e){return e})||[]},only:function(t){if(!ho(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Activity=J0;z.Children=t1;z.Component=Ma;z.Fragment=G0;z.Profiler=q0;z.PureComponent=co;z.StrictMode=K0;z.Suspense=X0;z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V;z.__COMPILER_RUNTIME={__proto__:null,c:function(t){return V.H.useMemoCache(t)}};z.cache=function(t){return function(){return t.apply(null,arguments)}};z.cacheSignal=function(){return null};z.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=gf({},t.props),n=t.key;if(e!=null)for(l in e.key!==void 0&&(n=""+e.key),e)!xf.call(e,l)||l==="key"||l==="__self"||l==="__source"||l==="ref"&&e.ref===void 0||(i[l]=e[l]);var l=arguments.length-2;if(l===1)i.children=a;else if(1<l){for(var o=Array(l),s=0;s<l;s++)o[s]=arguments[s+2];i.children=o}return po(t.type,n,i)};z.createContext=function(t){return t={$$typeof:V0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Y0,_context:t},t};z.createElement=function(t,e,a){var i,n={},l=null;if(e!=null)for(i in e.key!==void 0&&(l=""+e.key),e)xf.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(n[i]=e[i]);var o=arguments.length-2;if(o===1)n.children=a;else if(1<o){for(var s=Array(o),r=0;r<o;r++)s[r]=arguments[r+2];n.children=s}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return po(t,l,n)};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Z0,render:t}};z.isValidElement=ho;z.lazy=function(t){return{$$typeof:pf,_payload:{_status:-1,_result:t},_init:$0}};z.memo=function(t,e){return{$$typeof:Q0,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=V.T,a={};V.T=a;try{var i=t(),n=V.S;n!==null&&n(a,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ro,uf)}catch(l){uf(l)}finally{e!==null&&a.types!==null&&(e.types=a.types),V.T=e}};z.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()};z.use=function(t){return V.H.use(t)};z.useActionState=function(t,e,a){return V.H.useActionState(t,e,a)};z.useCallback=function(t,e){return V.H.useCallback(t,e)};z.useContext=function(t){return V.H.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t,e){return V.H.useDeferredValue(t,e)};z.useEffect=function(t,e){return V.H.useEffect(t,e)};z.useEffectEvent=function(t){return V.H.useEffectEvent(t)};z.useId=function(){return V.H.useId()};z.useImperativeHandle=function(t,e,a){return V.H.useImperativeHandle(t,e,a)};z.useInsertionEffect=function(t,e){return V.H.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return V.H.useLayoutEffect(t,e)};z.useMemo=function(t,e){return V.H.useMemo(t,e)};z.useOptimistic=function(t,e){return V.H.useOptimistic(t,e)};z.useReducer=function(t,e,a){return V.H.useReducer(t,e,a)};z.useRef=function(t){return V.H.useRef(t)};z.useState=function(t){return V.H.useState(t)};z.useSyncExternalStore=function(t,e,a){return V.H.useSyncExternalStore(t,e,a)};z.useTransition=function(){return V.H.useTransition()};z.version="19.2.8"});var Sn=Pt((bb,vf)=>{"use strict";vf.exports=yf()});var Bf=Pt(J=>{"use strict";function xo(t,e){var a=t.length;t.push(e);t:for(;0<a;){var i=a-1>>>1,n=t[i];if(0<Tn(n,e))t[i]=e,t[a]=n,a=i;else break t}}function $t(t){return t.length===0?null:t[0]}function Cn(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;t:for(var i=0,n=t.length,l=n>>>1;i<l;){var o=2*(i+1)-1,s=t[o],r=o+1,d=t[r];if(0>Tn(s,a))r<n&&0>Tn(d,s)?(t[i]=d,t[r]=a,i=r):(t[i]=s,t[o]=a,i=o);else if(r<n&&0>Tn(d,a))t[i]=d,t[r]=a,i=r;else break t}}return e}function Tn(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}J.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(wf=performance,J.unstable_now=function(){return wf.now()}):(go=Date,kf=go.now(),J.unstable_now=function(){return go.now()-kf});var wf,go,kf,se=[],Re=[],e1=1,Lt=null,ht=3,yo=!1,yi=!1,vi=!1,vo=!1,zf=typeof setTimeout=="function"?setTimeout:null,Cf=typeof clearTimeout=="function"?clearTimeout:null,Sf=typeof setImmediate!="undefined"?setImmediate:null;function zn(t){for(var e=$t(Re);e!==null;){if(e.callback===null)Cn(Re);else if(e.startTime<=t)Cn(Re),e.sortIndex=e.expirationTime,xo(se,e);else break;e=$t(Re)}}function wo(t){if(vi=!1,zn(t),!yi)if($t(se)!==null)yi=!0,Ra||(Ra=!0,Aa());else{var e=$t(Re);e!==null&&ko(wo,e.startTime-t)}}var Ra=!1,wi=-1,Mf=5,Af=-1;function Rf(){return vo?!0:!(J.unstable_now()-Af<Mf)}function bo(){if(vo=!1,Ra){var t=J.unstable_now();Af=t;var e=!0;try{t:{yi=!1,vi&&(vi=!1,Cf(wi),wi=-1),yo=!0;var a=ht;try{e:{for(zn(t),Lt=$t(se);Lt!==null&&!(Lt.expirationTime>t&&Rf());){var i=Lt.callback;if(typeof i=="function"){Lt.callback=null,ht=Lt.priorityLevel;var n=i(Lt.expirationTime<=t);if(t=J.unstable_now(),typeof n=="function"){Lt.callback=n,zn(t),e=!0;break e}Lt===$t(se)&&Cn(se),zn(t)}else Cn(se);Lt=$t(se)}if(Lt!==null)e=!0;else{var l=$t(Re);l!==null&&ko(wo,l.startTime-t),e=!1}}break t}finally{Lt=null,ht=a,yo=!1}e=void 0}}finally{e?Aa():Ra=!1}}}var Aa;typeof Sf=="function"?Aa=function(){Sf(bo)}:typeof MessageChannel!="undefined"?(mo=new MessageChannel,Tf=mo.port2,mo.port1.onmessage=bo,Aa=function(){Tf.postMessage(null)}):Aa=function(){zf(bo,0)};var mo,Tf;function ko(t,e){wi=zf(function(){t(J.unstable_now())},e)}J.unstable_IdlePriority=5;J.unstable_ImmediatePriority=1;J.unstable_LowPriority=4;J.unstable_NormalPriority=3;J.unstable_Profiling=null;J.unstable_UserBlockingPriority=2;J.unstable_cancelCallback=function(t){t.callback=null};J.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Mf=0<t?Math.floor(1e3/t):5};J.unstable_getCurrentPriorityLevel=function(){return ht};J.unstable_next=function(t){switch(ht){case 1:case 2:case 3:var e=3;break;default:e=ht}var a=ht;ht=e;try{return t()}finally{ht=a}};J.unstable_requestPaint=function(){vo=!0};J.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ht;ht=t;try{return e()}finally{ht=a}};J.unstable_scheduleCallback=function(t,e,a){var i=J.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?i+a:i):a=i,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:e1++,callback:e,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>i?(t.sortIndex=a,xo(Re,t),$t(se)===null&&t===$t(Re)&&(vi?(Cf(wi),wi=-1):vi=!0,ko(wo,a-i))):(t.sortIndex=n,xo(se,t),yi||yo||(yi=!0,Ra||(Ra=!0,Aa()))),t};J.unstable_shouldYield=Rf;J.unstable_wrapCallback=function(t){var e=ht;return function(){var a=ht;ht=e;try{return t.apply(this,arguments)}finally{ht=a}}}});var Ef=Pt((xb,Of)=>{"use strict";Of.exports=Bf()});var _f=Pt(bt=>{"use strict";var a1=Sn();function Nf(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Be(){}var gt={d:{f:Be,r:function(){throw Error(Nf(522))},D:Be,C:Be,L:Be,m:Be,X:Be,S:Be,M:Be},p:0,findDOMNode:null},i1=Symbol.for("react.portal");function n1(t,e,a){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i1,key:i==null?null:""+i,children:t,containerInfo:e,implementation:a}}var ki=a1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Mn(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gt;bt.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Nf(299));return n1(t,e,null,a)};bt.flushSync=function(t){var e=ki.T,a=gt.p;try{if(ki.T=null,gt.p=2,t)return t()}finally{ki.T=e,gt.p=a,gt.d.f()}};bt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,gt.d.C(t,e))};bt.prefetchDNS=function(t){typeof t=="string"&&gt.d.D(t)};bt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,i=Mn(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,l=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?gt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:n,fetchPriority:l}):a==="script"&&gt.d.X(t,{crossOrigin:i,integrity:n,fetchPriority:l,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};bt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Mn(e.as,e.crossOrigin);gt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&gt.d.M(t)};bt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,i=Mn(a,e.crossOrigin);gt.d.L(t,a,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};bt.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Mn(e.as,e.crossOrigin);gt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else gt.d.m(t)};bt.requestFormReset=function(t){gt.d.r(t)};bt.unstable_batchedUpdates=function(t,e){return t(e)};bt.useFormState=function(t,e,a){return ki.H.useFormState(t,e,a)};bt.useFormStatus=function(){return ki.H.useHostTransitionStatus()};bt.version="19.2.8"});var Hf=Pt((vb,Lf)=>{"use strict";function Df(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Df)}catch(t){console.error(t)}}Df(),Lf.exports=_f()});var Fp=Pt(Pl=>{"use strict";var lt=Ef(),fd=Sn(),l1=Hf();function v(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fn(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function dd(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ud(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uf(t){if(fn(t)!==t)throw Error(v(188))}function o1(t){var e=t.alternate;if(!e){if(e=fn(t),e===null)throw Error(v(188));return e!==t?null:t}for(var a=t,i=e;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return Uf(n),t;if(l===i)return Uf(n),e;l=l.sibling}throw Error(v(188))}if(a.return!==i.return)a=n,i=l;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,i=l;break}if(s===i){o=!0,i=n,a=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===a){o=!0,a=l,i=n;break}if(s===i){o=!0,i=l,a=n;break}s=s.sibling}if(!o)throw Error(v(189))}}if(a.alternate!==i)throw Error(v(190))}if(a.tag!==3)throw Error(v(188));return a.stateNode.current===a?t:e}function pd(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=pd(t),e!==null)return e;t=t.sibling}return null}var Q=Object.assign,s1=Symbol.for("react.element"),An=Symbol.for("react.transitional.element"),Bi=Symbol.for("react.portal"),Da=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),gd=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Is=Symbol.for("react.forward_ref"),is=Symbol.for("react.suspense"),ns=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),ls=Symbol.for("react.activity"),r1=Symbol.for("react.memo_cache_sentinel"),jf=Symbol.iterator;function Si(t){return t===null||typeof t!="object"?null:(t=jf&&t[jf]||t["@@iterator"],typeof t=="function"?t:null)}var f1=Symbol.for("react.client.reference");function os(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===f1?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Da:return"Fragment";case as:return"Profiler";case hd:return"StrictMode";case is:return"Suspense";case ns:return"SuspenseList";case ls:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Bi:return"Portal";case ge:return t.displayName||"Context";case gd:return(t._context.displayName||"Context")+".Consumer";case Is:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ps:return e=t.displayName||null,e!==null?e:os(t.type)||"Memo";case Oe:e=t._payload,t=t._init;try{return os(t(e))}catch{}}return null}var Oi=Array.isArray,T=fd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=l1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fa={pending:!1,data:null,method:null,action:null},ss=[],La=-1;function ne(t){return{current:t}}function rt(t){0>La||(t.current=ss[La],ss[La]=null,La--)}function Y(t,e){La++,ss[La]=t.current,t.current=e}var ie=ne(null),Ji=ne(null),qe=ne(null),sl=ne(null);function rl(t,e){switch(Y(qe,e),Y(Ji,t),Y(ie,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Xc(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Xc(e),t=Dp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}rt(ie),Y(ie,t)}function ti(){rt(ie),rt(Ji),rt(qe)}function rs(t){t.memoizedState!==null&&Y(sl,t);var e=ie.current,a=Dp(e,t.type);e!==a&&(Y(Ji,t),Y(ie,a))}function fl(t){Ji.current===t&&(rt(ie),rt(Ji)),sl.current===t&&(rt(sl),on._currentValue=fa)}var So,Gf;function la(t){if(So===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);So=e&&e[1]||"",Gf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+So+t+Gf}var To=!1;function zo(t,e){if(!t||To)return"";To=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(b){var p=b}Reflect.construct(t,[],u)}else{try{u.call()}catch(b){p=b}t.call(u.prototype)}}else{try{throw Error()}catch(b){p=b}(u=t())&&typeof u.catch=="function"&&u.catch(function(){})}}catch(b){if(b&&p&&typeof b.stack=="string")return[b.stack,p.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),o=l[0],s=l[1];if(o&&s){var r=o.split(`
`),d=s.split(`
`);for(n=i=0;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(i===r.length||n===d.length)for(i=r.length-1,n=d.length-1;1<=i&&0<=n&&r[i]!==d[n];)n--;for(;1<=i&&0<=n;i--,n--)if(r[i]!==d[n]){if(i!==1||n!==1)do if(i--,n--,0>n||r[i]!==d[n]){var g=`
`+r[i].replace(" at new "," at ");return t.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",t.displayName)),g}while(1<=i&&0<=n);break}}}finally{To=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?la(a):""}function c1(t,e){switch(t.tag){case 26:case 27:case 5:return la(t.type);case 16:return la("Lazy");case 13:return t.child!==e&&e!==null?la("Suspense Fallback"):la("Suspense");case 19:return la("SuspenseList");case 0:case 15:return zo(t.type,!1);case 11:return zo(t.type.render,!1);case 1:return zo(t.type,!0);case 31:return la("Activity");default:return""}}function Kf(t){try{var e="",a=null;do e+=c1(t,a),a=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var fs=Object.prototype.hasOwnProperty,$s=lt.unstable_scheduleCallback,Co=lt.unstable_cancelCallback,d1=lt.unstable_shouldYield,u1=lt.unstable_requestPaint,Rt=lt.unstable_now,p1=lt.unstable_getCurrentPriorityLevel,bd=lt.unstable_ImmediatePriority,md=lt.unstable_UserBlockingPriority,cl=lt.unstable_NormalPriority,h1=lt.unstable_LowPriority,xd=lt.unstable_IdlePriority,g1=lt.log,b1=lt.unstable_setDisableYieldValue,cn=null,Bt=null;function He(t){if(typeof g1=="function"&&b1(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(cn,t)}catch{}}var Ot=Math.clz32?Math.clz32:y1,m1=Math.log,x1=Math.LN2;function y1(t){return t>>>=0,t===0?32:31-(m1(t)/x1|0)|0}var Rn=256,Bn=262144,On=4194304;function oa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ll(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var n=0,l=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var s=i&134217727;return s!==0?(i=s&~l,i!==0?n=oa(i):(o&=s,o!==0?n=oa(o):a||(a=s&~t,a!==0&&(n=oa(a))))):(s=i&~l,s!==0?n=oa(s):o!==0?n=oa(o):a||(a=i&~t,a!==0&&(n=oa(a)))),n===0?0:e!==0&&e!==n&&(e&l)===0&&(l=n&-n,a=e&-e,l>=a||l===32&&(a&4194048)!==0)?e:n}function dn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function v1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yd(){var t=On;return On<<=1,(On&62914560)===0&&(On=4194304),t}function Mo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function un(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function w1(t,e,a,i,n,l){var o=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var s=t.entanglements,r=t.expirationTimes,d=t.hiddenUpdates;for(a=o&~a;0<a;){var g=31-Ot(a),u=1<<g;s[g]=0,r[g]=-1;var p=d[g];if(p!==null)for(d[g]=null,g=0;g<p.length;g++){var b=p[g];b!==null&&(b.lane&=-536870913)}a&=~u}i!==0&&vd(t,i,0),l!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=l&~(o&~e))}function vd(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Ot(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&261930}function wd(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-Ot(a),n=1<<i;n&e|t[i]&e&&(t[i]|=e),a&=~n}}function kd(t,e){var a=e&-e;return a=(a&42)!==0?1:tr(a),(a&(t.suspendedLanes|e))!==0?0:a}function tr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function er(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Sd(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:Xp(t.type))}function qf(t,e){var a=L.p;try{return L.p=t,e()}finally{L.p=a}}var ea=Math.random().toString(36).slice(2),ct="__reactFiber$"+ea,St="__reactProps$"+ea,di="__reactContainer$"+ea,cs="__reactEvents$"+ea,k1="__reactListeners$"+ea,S1="__reactHandles$"+ea,Yf="__reactResources$"+ea,pn="__reactMarker$"+ea;function ar(t){delete t[ct],delete t[St],delete t[cs],delete t[k1],delete t[S1]}function Ha(t){var e=t[ct];if(e)return e;for(var a=t.parentNode;a;){if(e=a[di]||a[ct]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Ic(t);t!==null;){if(a=t[ct])return a;t=Ic(t)}return e}t=a,a=t.parentNode}return null}function ui(t){if(t=t[ct]||t[di]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ei(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(v(33))}function Qa(t){var e=t[Yf];return e||(e=t[Yf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function st(t){t[pn]=!0}var Td=new Set,zd={};function ya(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(zd[t]=e,t=0;t<e.length;t++)Td.add(e[t])}var T1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vf={},Zf={};function z1(t){return fs.call(Zf,t)?!0:fs.call(Vf,t)?!1:T1.test(t)?Zf[t]=!0:(Vf[t]=!0,!1)}function Xn(t,e,a){if(z1(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function En(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function re(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}function Ut(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function C1(t,e,a){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i!="undefined"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ds(t){if(!t._valueTracker){var e=Cd(t)?"checked":"value";t._valueTracker=C1(t,e,""+t[e])}}function Md(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=Cd(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}var M1=/[\n"\\]/g;function Kt(t){return t.replace(M1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function us(t,e,a,i,n,l,o,s){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ut(e)):t.value!==""+Ut(e)&&(t.value=""+Ut(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?ps(t,o,Ut(e)):a!=null?ps(t,o,Ut(a)):i!=null&&t.removeAttribute("value"),n==null&&l!=null&&(t.defaultChecked=!!l),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Ut(s):t.removeAttribute("name")}function Ad(t,e,a,i,n,l,o,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){ds(t);return}a=a!=null?""+Ut(a):"",e=e!=null?""+Ut(e):a,s||e===t.value||(t.value=e),t.defaultValue=e}i=i!=null?i:n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=s?t.checked:!!i,t.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),ds(t)}function ps(t,e,a){e==="number"&&dl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ja(t,e,a,i){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&i&&(t[a].defaultSelected=!0)}else{for(a=""+Ut(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Rd(t,e,a){if(e!=null&&(e=""+Ut(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ut(a):""}function Bd(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(v(92));if(Oi(i)){if(1<i.length)throw Error(v(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=Ut(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i),ds(t)}function ai(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var A1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xf(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||A1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Od(t,e,a){if(e!=null&&typeof e!="object")throw Error(v(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var n in e)i=e[n],e.hasOwnProperty(n)&&a[n]!==i&&Xf(t,n,i)}else for(var l in e)e.hasOwnProperty(l)&&Xf(t,l,e[l])}function ir(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(t){return B1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function be(){}var hs=null;function nr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ua=null,Fa=null;function Qf(t){var e=ui(t);if(e&&(t=e.stateNode)){var a=t[St]||null;t:switch(t=e.stateNode,e.type){case"input":if(us(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Kt(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var n=i[St]||null;if(!n)throw Error(v(90));us(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&Md(i)}break t;case"textarea":Rd(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Ja(t,!!a.multiple,e,!1)}}}var Ao=!1;function Ed(t,e,a){if(Ao)return t(e,a);Ao=!0;try{var i=t(e);return i}finally{if(Ao=!1,(Ua!==null||Fa!==null)&&(Jl(),Ua&&(e=Ua,t=Fa,Fa=Ua=null,Qf(e),t)))for(e=0;e<t.length;e++)Qf(t[e])}}function Fi(t,e){var a=t.stateNode;if(a===null)return null;var i=a[St]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(v(231,e,typeof a));return a}var we=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),gs=!1;if(we)try{Ba={},Object.defineProperty(Ba,"passive",{get:function(){gs=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{gs=!1}var Ba,Ue=null,lr=null,Jn=null;function Nd(){if(Jn)return Jn;var t,e=lr,a=e.length,i,n="value"in Ue?Ue.value:Ue.textContent,l=n.length;for(t=0;t<a&&e[t]===n[t];t++);var o=a-t;for(i=1;i<=o&&e[a-i]===n[l-i];i++);return Jn=n.slice(t,1<i?1-i:void 0)}function Fn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nn(){return!0}function Jf(){return!1}function Tt(t){function e(a,i,n,l,o){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(a=t[s],this[s]=a?a(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Nn:Jf,this.isPropagationStopped=Jf,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),e}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Tt(va),hn=Q({},va,{view:0,detail:0}),O1=Tt(hn),Ro,Bo,Ti,Ul=Q({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Ro=t.screenX-Ti.screenX,Bo=t.screenY-Ti.screenY):Bo=Ro=0,Ti=t),Ro)},movementY:function(t){return"movementY"in t?t.movementY:Bo}}),Ff=Tt(Ul),E1=Q({},Ul,{dataTransfer:0}),N1=Tt(E1),_1=Q({},hn,{relatedTarget:0}),Oo=Tt(_1),D1=Q({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),L1=Tt(D1),H1=Q({},va,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U1=Tt(H1),j1=Q({},va,{data:0}),Wf=Tt(j1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=q1[t])?!!e[t]:!1}function or(){return Y1}var V1=Q({},hn,{key:function(t){if(t.key){var e=G1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(t){return t.type==="keypress"?Fn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z1=Tt(V1),X1=Q({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Tt(X1),Q1=Q({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or}),J1=Tt(Q1),F1=Q({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),W1=Tt(F1),I1=Q({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),P1=Tt(I1),$1=Q({},va,{newState:0,oldState:0}),th=Tt($1),eh=[9,13,27,32],sr=we&&"CompositionEvent"in window,Di=null;we&&"documentMode"in document&&(Di=document.documentMode);var ah=we&&"TextEvent"in window&&!Di,_d=we&&(!sr||Di&&8<Di&&11>=Di),Pf=" ",$f=!1;function Dd(t,e){switch(t){case"keyup":return eh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ja=!1;function ih(t,e){switch(t){case"compositionend":return Ld(e);case"keypress":return e.which!==32?null:($f=!0,Pf);case"textInput":return t=e.data,t===Pf&&$f?null:t;default:return null}}function nh(t,e){if(ja)return t==="compositionend"||!sr&&Dd(t,e)?(t=Nd(),Jn=lr=Ue=null,ja=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _d&&e.locale!=="ko"?null:e.data;default:return null}}var lh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lh[t.type]:e==="textarea"}function Hd(t,e,a,i){Ua?Fa?Fa.push(i):Fa=[i]:Ua=i,e=Rl(e,"onChange"),0<e.length&&(a=new Hl("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Li=null,Wi=null;function oh(t){Ep(t,0)}function jl(t){var e=Ei(t);if(Md(e))return t}function ec(t,e){if(t==="change")return e}var Ud=!1;we&&(we?(Dn="oninput"in document,Dn||(Eo=document.createElement("div"),Eo.setAttribute("oninput","return;"),Dn=typeof Eo.oninput=="function"),_n=Dn):_n=!1,Ud=_n&&(!document.documentMode||9<document.documentMode));var _n,Dn,Eo;function ac(){Li&&(Li.detachEvent("onpropertychange",jd),Wi=Li=null)}function jd(t){if(t.propertyName==="value"&&jl(Wi)){var e=[];Hd(e,Wi,t,nr(t)),Ed(oh,e)}}function sh(t,e,a){t==="focusin"?(ac(),Li=e,Wi=a,Li.attachEvent("onpropertychange",jd)):t==="focusout"&&ac()}function rh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Wi)}function fh(t,e){if(t==="click")return jl(e)}function ch(t,e){if(t==="input"||t==="change")return jl(e)}function dh(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:dh;function Ii(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!fs.call(e,n)||!Nt(t[n],e[n]))return!1}return!0}function ic(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nc(t,e){var a=ic(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ic(a)}}function Gd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=dl(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=dl(t.document)}return e}function rr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var uh=we&&"documentMode"in document&&11>=document.documentMode,Ga=null,bs=null,Hi=null,ms=!1;function lc(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ms||Ga==null||Ga!==dl(i)||(i=Ga,"selectionStart"in i&&rr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Hi&&Ii(Hi,i)||(Hi=i,i=Rl(bs,"onSelect"),0<i.length&&(e=new Hl("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=Ga)))}function na(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ka={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionrun:na("Transition","TransitionRun"),transitionstart:na("Transition","TransitionStart"),transitioncancel:na("Transition","TransitionCancel"),transitionend:na("Transition","TransitionEnd")},No={},qd={};we&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Ka.animationend.animation,delete Ka.animationiteration.animation,delete Ka.animationstart.animation),"TransitionEvent"in window||delete Ka.transitionend.transition);function wa(t){if(No[t])return No[t];if(!Ka[t])return t;var e=Ka[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in qd)return No[t]=e[a];return t}var Yd=wa("animationend"),Vd=wa("animationiteration"),Zd=wa("animationstart"),ph=wa("transitionrun"),hh=wa("transitionstart"),gh=wa("transitioncancel"),Xd=wa("transitionend"),Qd=new Map,xs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xs.push("scrollEnd");function Wt(t,e){Qd.set(t,e),ya(e,[t])}var ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ht=[],qa=0,fr=0;function Gl(){for(var t=qa,e=fr=qa=0;e<t;){var a=Ht[e];Ht[e++]=null;var i=Ht[e];Ht[e++]=null;var n=Ht[e];Ht[e++]=null;var l=Ht[e];if(Ht[e++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}l!==0&&Jd(a,n,l)}}function Kl(t,e,a,i){Ht[qa++]=t,Ht[qa++]=e,Ht[qa++]=a,Ht[qa++]=i,fr|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function cr(t,e,a,i){return Kl(t,e,a,i),pl(t)}function ka(t,e){return Kl(t,null,null,e),pl(t)}function Jd(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var n=!1,l=t.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(n=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,n&&e!==null&&(n=31-Ot(a),t=l.hiddenUpdates,i=t[n],i===null?t[n]=[e]:i.push(e),e.lane=a|536870912),l):null}function pl(t){if(50<Xi)throw Xi=0,js=null,Error(v(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ya={};function bh(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,a,i){return new bh(t,e,a,i)}function dr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xe(t,e){var a=t.alternate;return a===null?(a=Mt(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Fd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Wn(t,e,a,i,n,l){var o=0;if(i=t,typeof t=="function")dr(t)&&(o=1);else if(typeof t=="string")o=yg(t,a,ie.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ls:return t=Mt(31,a,e,n),t.elementType=ls,t.lanes=l,t;case Da:return ca(a.children,n,l,e);case hd:o=8,n|=24;break;case as:return t=Mt(12,a,e,n|2),t.elementType=as,t.lanes=l,t;case is:return t=Mt(13,a,e,n),t.elementType=is,t.lanes=l,t;case ns:return t=Mt(19,a,e,n),t.elementType=ns,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ge:o=10;break t;case gd:o=9;break t;case Is:o=11;break t;case Ps:o=14;break t;case Oe:o=16,i=null;break t}o=29,a=Error(v(130,t===null?"null":typeof t,"")),i=null}return e=Mt(o,a,e,n),e.elementType=t,e.type=i,e.lanes=l,e}function ca(t,e,a,i){return t=Mt(7,t,i,e),t.lanes=a,t}function _o(t,e,a){return t=Mt(6,t,null,e),t.lanes=a,t}function Wd(t){var e=Mt(18,null,null,0);return e.stateNode=t,e}function Do(t,e,a){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var oc=new WeakMap;function qt(t,e){if(typeof t=="object"&&t!==null){var a=oc.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Kf(e)},oc.set(t,e),e)}return{value:t,source:e,stack:Kf(e)}}var Va=[],Za=0,hl=null,Pi=0,jt=[],Gt=0,Ie=null,te=1,ee="";function pe(t,e){Va[Za++]=Pi,Va[Za++]=hl,hl=t,Pi=e}function Id(t,e,a){jt[Gt++]=te,jt[Gt++]=ee,jt[Gt++]=Ie,Ie=t;var i=te;t=ee;var n=32-Ot(i)-1;i&=~(1<<n),a+=1;var l=32-Ot(e)+n;if(30<l){var o=n-n%5;l=(i&(1<<o)-1).toString(32),i>>=o,n-=o,te=1<<32-Ot(e)+n|a<<n|i,ee=l+t}else te=1<<l|a<<n|i,ee=t}function ur(t){t.return!==null&&(pe(t,1),Id(t,1,0))}function pr(t){for(;t===hl;)hl=Va[--Za],Va[Za]=null,Pi=Va[--Za],Va[Za]=null;for(;t===Ie;)Ie=jt[--Gt],jt[Gt]=null,ee=jt[--Gt],jt[Gt]=null,te=jt[--Gt],jt[Gt]=null}function Pd(t,e){jt[Gt++]=te,jt[Gt++]=ee,jt[Gt++]=Ie,te=e.id,ee=e.overflow,Ie=t}var dt=null,X=null,E=!1,Ye=null,Yt=!1,ys=Error(v(519));function Pe(t){var e=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $i(qt(e,t)),ys}function sc(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[ct]=t,e[St]=i,a){case"dialog":A("cancel",e),A("close",e);break;case"iframe":case"object":case"embed":A("load",e);break;case"video":case"audio":for(a=0;a<nn.length;a++)A(nn[a],e);break;case"source":A("error",e);break;case"img":case"image":case"link":A("error",e),A("load",e);break;case"details":A("toggle",e);break;case"input":A("invalid",e),Ad(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":A("invalid",e);break;case"textarea":A("invalid",e),Bd(e,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||_p(e.textContent,a)?(i.popover!=null&&(A("beforetoggle",e),A("toggle",e)),i.onScroll!=null&&A("scroll",e),i.onScrollEnd!=null&&A("scrollend",e),i.onClick!=null&&(e.onclick=be),e=!0):e=!1,e||Pe(t,!0)}function rc(t){for(dt=t.return;dt;)switch(dt.tag){case 5:case 31:case 13:Yt=!1;return;case 27:case 3:Yt=!0;return;default:dt=dt.return}}function Oa(t){if(t!==dt)return!1;if(!E)return rc(t),E=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Vs(t.type,t.memoizedProps)),a=!a),a&&X&&Pe(t),rc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));X=Wc(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));X=Wc(t)}else e===27?(e=X,aa(t.type)?(t=Js,Js=null,X=t):X=e):X=dt?Zt(t.stateNode.nextSibling):null;return!0}function ha(){X=dt=null,E=!1}function Lo(){var t=Ye;return t!==null&&(wt===null?wt=t:wt.push.apply(wt,t),Ye=null),t}function $i(t){Ye===null?Ye=[t]:Ye.push(t)}var vs=ne(null),Sa=null,me=null;function Ne(t,e,a){Y(vs,e._currentValue),e._currentValue=a}function ye(t){t._currentValue=vs.current,rt(vs)}function ws(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function ks(t,e,a,i){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){var o=n.child;l=l.firstContext;t:for(;l!==null;){var s=l;l=n;for(var r=0;r<e.length;r++)if(s.context===e[r]){l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),ws(l.return,a,t),i||(o=null);break t}l=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(v(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),ws(o,a,t),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===t){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function pi(t,e,a,i){t=null;for(var n=e,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(v(387));if(o=o.memoizedProps,o!==null){var s=n.type;Nt(n.pendingProps.value,o.value)||(t!==null?t.push(s):t=[s])}}else if(n===sl.current){if(o=n.alternate,o===null)throw Error(v(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(on):t=[on])}n=n.return}t!==null&&ks(e,t,a,i),e.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!Nt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ga(t){Sa=t,me=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ut(t){return $d(Sa,t)}function Ln(t,e){return Sa===null&&ga(t),$d(t,e)}function $d(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},me===null){if(t===null)throw Error(v(308));me=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else me=me.next=e;return a}var mh=typeof AbortController!="undefined"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},xh=lt.unstable_scheduleCallback,yh=lt.unstable_NormalPriority,at={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hr(){return{controller:new mh,data:new Map,refCount:0}}function gn(t){t.refCount--,t.refCount===0&&xh(yh,function(){t.controller.abort()})}var Ui=null,Ss=0,ii=0,Wa=null;function vh(t,e){if(Ui===null){var a=Ui=[];Ss=0,ii=jr(),Wa={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Ss++,e.then(fc,fc),e}function fc(){if(--Ss===0&&Ui!==null){Wa!==null&&(Wa.status="fulfilled");var t=Ui;Ui=null,ii=0,Wa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function wh(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var cc=T.S;T.S=function(t,e){pp=Rt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&vh(t,e),cc!==null&&cc(t,e)};var da=ne(null);function gr(){var t=da.current;return t!==null?t:K.pooledCache}function In(t,e){e===null?Y(da,da.current):Y(da,e.pool)}function tu(){var t=gr();return t===null?null:{parent:at._currentValue,pool:t}}var hi=Error(v(460)),br=Error(v(474)),ql=Error(v(542)),bl={then:function(){}};function dc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function eu(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(be,be),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,pc(t),t;default:if(typeof e.status=="string")e.then(be,be);else{if(t=K,t!==null&&100<t.shellSuspendCounter)throw Error(v(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=i}},function(i){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,pc(t),t}throw ua=e,hi}}function sa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ua=a,hi):a}}var ua=null;function uc(){if(ua===null)throw Error(v(459));var t=ua;return ua=null,t}function pc(t){if(t===hi||t===ql)throw Error(v(483))}var Ia=null,tn=0;function Hn(t){var e=tn;return tn+=1,Ia===null&&(Ia=[]),eu(Ia,t,e)}function zi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Un(t,e){throw e.$$typeof===s1?Error(v(525)):(t=Object.prototype.toString.call(e),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function au(t){function e(c,f){if(t){var h=c.deletions;h===null?(c.deletions=[f],c.flags|=16):h.push(f)}}function a(c,f){if(!t)return null;for(;f!==null;)e(c,f),f=f.sibling;return null}function i(c){for(var f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function n(c,f){return c=xe(c,f),c.index=0,c.sibling=null,c}function l(c,f,h){return c.index=h,t?(h=c.alternate,h!==null?(h=h.index,h<f?(c.flags|=67108866,f):h):(c.flags|=67108866,f)):(c.flags|=1048576,f)}function o(c){return t&&c.alternate===null&&(c.flags|=67108866),c}function s(c,f,h,m){return f===null||f.tag!==6?(f=_o(h,c.mode,m),f.return=c,f):(f=n(f,h),f.return=c,f)}function r(c,f,h,m){var k=h.type;return k===Da?g(c,f,h.props.children,m,h.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Oe&&sa(k)===f.type)?(f=n(f,h.props),zi(f,h),f.return=c,f):(f=Wn(h.type,h.key,h.props,null,c.mode,m),zi(f,h),f.return=c,f)}function d(c,f,h,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Do(h,c.mode,m),f.return=c,f):(f=n(f,h.children||[]),f.return=c,f)}function g(c,f,h,m,k){return f===null||f.tag!==7?(f=ca(h,c.mode,m,k),f.return=c,f):(f=n(f,h),f.return=c,f)}function u(c,f,h){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=_o(""+f,c.mode,h),f.return=c,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case An:return h=Wn(f.type,f.key,f.props,null,c.mode,h),zi(h,f),h.return=c,h;case Bi:return f=Do(f,c.mode,h),f.return=c,f;case Oe:return f=sa(f),u(c,f,h)}if(Oi(f)||Si(f))return f=ca(f,c.mode,h,null),f.return=c,f;if(typeof f.then=="function")return u(c,Hn(f),h);if(f.$$typeof===ge)return u(c,Ln(c,f),h);Un(c,f)}return null}function p(c,f,h,m){var k=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return k!==null?null:s(c,f,""+h,m);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case An:return h.key===k?r(c,f,h,m):null;case Bi:return h.key===k?d(c,f,h,m):null;case Oe:return h=sa(h),p(c,f,h,m)}if(Oi(h)||Si(h))return k!==null?null:g(c,f,h,m,null);if(typeof h.then=="function")return p(c,f,Hn(h),m);if(h.$$typeof===ge)return p(c,f,Ln(c,h),m);Un(c,h)}return null}function b(c,f,h,m,k){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return c=c.get(h)||null,s(f,c,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case An:return c=c.get(m.key===null?h:m.key)||null,r(f,c,m,k);case Bi:return c=c.get(m.key===null?h:m.key)||null,d(f,c,m,k);case Oe:return m=sa(m),b(c,f,h,m,k)}if(Oi(m)||Si(m))return c=c.get(h)||null,g(f,c,m,k,null);if(typeof m.then=="function")return b(c,f,h,Hn(m),k);if(m.$$typeof===ge)return b(c,f,h,Ln(f,m),k);Un(f,m)}return null}function y(c,f,h,m){for(var k=null,N=null,w=f,M=f=0,B=null;w!==null&&M<h.length;M++){w.index>M?(B=w,w=null):B=w.sibling;var _=p(c,w,h[M],m);if(_===null){w===null&&(w=B);break}t&&w&&_.alternate===null&&e(c,w),f=l(_,f,M),N===null?k=_:N.sibling=_,N=_,w=B}if(M===h.length)return a(c,w),E&&pe(c,M),k;if(w===null){for(;M<h.length;M++)w=u(c,h[M],m),w!==null&&(f=l(w,f,M),N===null?k=w:N.sibling=w,N=w);return E&&pe(c,M),k}for(w=i(w);M<h.length;M++)B=b(w,c,M,h[M],m),B!==null&&(t&&B.alternate!==null&&w.delete(B.key===null?M:B.key),f=l(B,f,M),N===null?k=B:N.sibling=B,N=B);return t&&w.forEach(function(Ae){return e(c,Ae)}),E&&pe(c,M),k}function x(c,f,h,m){if(h==null)throw Error(v(151));for(var k=null,N=null,w=f,M=f=0,B=null,_=h.next();w!==null&&!_.done;M++,_=h.next()){w.index>M?(B=w,w=null):B=w.sibling;var Ae=p(c,w,_.value,m);if(Ae===null){w===null&&(w=B);break}t&&w&&Ae.alternate===null&&e(c,w),f=l(Ae,f,M),N===null?k=Ae:N.sibling=Ae,N=Ae,w=B}if(_.done)return a(c,w),E&&pe(c,M),k;if(w===null){for(;!_.done;M++,_=h.next())_=u(c,_.value,m),_!==null&&(f=l(_,f,M),N===null?k=_:N.sibling=_,N=_);return E&&pe(c,M),k}for(w=i(w);!_.done;M++,_=h.next())_=b(w,c,M,_.value,m),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?M:_.key),f=l(_,f,M),N===null?k=_:N.sibling=_,N=_);return t&&w.forEach(function(E0){return e(c,E0)}),E&&pe(c,M),k}function S(c,f,h,m){if(typeof h=="object"&&h!==null&&h.type===Da&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case An:t:{for(var k=h.key;f!==null;){if(f.key===k){if(k=h.type,k===Da){if(f.tag===7){a(c,f.sibling),m=n(f,h.props.children),m.return=c,c=m;break t}}else if(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Oe&&sa(k)===f.type){a(c,f.sibling),m=n(f,h.props),zi(m,h),m.return=c,c=m;break t}a(c,f);break}else e(c,f);f=f.sibling}h.type===Da?(m=ca(h.props.children,c.mode,m,h.key),m.return=c,c=m):(m=Wn(h.type,h.key,h.props,null,c.mode,m),zi(m,h),m.return=c,c=m)}return o(c);case Bi:t:{for(k=h.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){a(c,f.sibling),m=n(f,h.children||[]),m.return=c,c=m;break t}else{a(c,f);break}else e(c,f);f=f.sibling}m=Do(h,c.mode,m),m.return=c,c=m}return o(c);case Oe:return h=sa(h),S(c,f,h,m)}if(Oi(h))return y(c,f,h,m);if(Si(h)){if(k=Si(h),typeof k!="function")throw Error(v(150));return h=k.call(h),x(c,f,h,m)}if(typeof h.then=="function")return S(c,f,Hn(h),m);if(h.$$typeof===ge)return S(c,f,Ln(c,h),m);Un(c,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,f!==null&&f.tag===6?(a(c,f.sibling),m=n(f,h),m.return=c,c=m):(a(c,f),m=_o(h,c.mode,m),m.return=c,c=m),o(c)):a(c,f)}return function(c,f,h,m){try{tn=0;var k=S(c,f,h,m);return Ia=null,k}catch(w){if(w===hi||w===ql)throw w;var N=Mt(29,w,null,c.mode);return N.lanes=m,N.return=c,N}}}var ba=au(!0),iu=au(!1),Ee=!1;function mr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ts(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ve(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ze(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(D&2)!==0){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,e=pl(t),Jd(t,null,a),e}return Kl(t,i,e,a),pl(t)}function ji(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,wd(t,a)}}function Ho(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?n=l=e:l=l.next=e}else n=l=e;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var zs=!1;function Gi(){if(zs){var t=Wa;if(t!==null)throw t}}function Ki(t,e,a,i){zs=!1;var n=t.updateQueue;Ee=!1;var l=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,d=r.next;r.next=null,o===null?l=d:o.next=d,o=r;var g=t.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=r))}if(l!==null){var u=n.baseState;o=0,g=d=r=null,s=l;do{var p=s.lane&-536870913,b=p!==s.lane;if(b?(O&p)===p:(i&p)===p){p!==0&&p===ii&&(zs=!0),g!==null&&(g=g.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var y=t,x=s;p=e;var S=a;switch(x.tag){case 1:if(y=x.payload,typeof y=="function"){u=y.call(S,u,p);break t}u=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,p=typeof y=="function"?y.call(S,u,p):y,p==null)break t;u=Q({},u,p);break t;case 2:Ee=!0}}p=s.callback,p!==null&&(t.flags|=64,b&&(t.flags|=8192),b=n.callbacks,b===null?n.callbacks=[p]:b.push(p))}else b={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=b,r=u):g=g.next=b,o|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;b=s,s=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);g===null&&(r=u),n.baseState=r,n.firstBaseUpdate=d,n.lastBaseUpdate=g,l===null&&(n.shared.lanes=0),ta|=o,t.lanes=o,t.memoizedState=u}}function nu(t,e){if(typeof t!="function")throw Error(v(191,t));t.call(e)}function lu(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)nu(a[t],e)}var ni=ne(null),ml=ne(0);function hc(t,e){t=ze,Y(ml,t),Y(ni,e),ze=t|e.baseLanes}function Cs(){Y(ml,ze),Y(ni,ni.current)}function xr(){ze=ml.current,rt(ni),rt(ml)}var _t=ne(null),Vt=null;function _e(t){var e=t.alternate;Y(P,P.current&1),Y(_t,t),Vt===null&&(e===null||ni.current!==null||e.memoizedState!==null)&&(Vt=t)}function Ms(t){Y(P,P.current),Y(_t,t),Vt===null&&(Vt=t)}function ou(t){t.tag===22?(Y(P,P.current),Y(_t,t),Vt===null&&(Vt=t)):De(t)}function De(){Y(P,P.current),Y(_t,_t.current)}function Ct(t){rt(_t),Vt===t&&(Vt=null),rt(P)}var P=ne(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xs(a)||Qs(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ke=0,C=null,G=null,tt=null,yl=!1,Pa=!1,ma=!1,vl=0,en=0,$a=null,kh=0;function W(){throw Error(v(321))}function yr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Nt(t[a],e[a]))return!1;return!0}function vr(t,e,a,i,n,l){return ke=l,C=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,T.H=t===null||t.memoizedState===null?Hu:Or,ma=!1,l=a(i,n),ma=!1,Pa&&(l=ru(e,a,i,n)),su(t),l}function su(t){T.H=an;var e=G!==null&&G.next!==null;if(ke=0,tt=G=C=null,yl=!1,en=0,$a=null,e)throw Error(v(300));t===null||it||(t=t.dependencies,t!==null&&gl(t)&&(it=!0))}function ru(t,e,a,i){C=t;var n=0;do{if(Pa&&($a=null),en=0,Pa=!1,25<=n)throw Error(v(301));if(n+=1,tt=G=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}T.H=Uu,l=e(a,i)}while(Pa);return l}function Sh(){var t=T.H,e=t.useState()[0];return e=typeof e.then=="function"?bn(e):e,t=t.useState()[0],(G!==null?G.memoizedState:null)!==t&&(C.flags|=1024),e}function wr(){var t=vl!==0;return vl=0,t}function kr(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Sr(t){if(yl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}yl=!1}ke=0,tt=G=C=null,Pa=!1,en=vl=0,$a=null}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?C.memoizedState=tt=t:tt=tt.next=t,tt}function $(){if(G===null){var t=C.alternate;t=t!==null?t.memoizedState:null}else t=G.next;var e=tt===null?C.memoizedState:tt.next;if(e!==null)tt=e,G=t;else{if(t===null)throw C.alternate===null?Error(v(467)):Error(v(310));G=t,t={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},tt===null?C.memoizedState=tt=t:tt=tt.next=t}return tt}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bn(t){var e=en;return en+=1,$a===null&&($a=[]),t=eu($a,t,e),e=C,(tt===null?e.memoizedState:tt.next)===null&&(e=e.alternate,T.H=e===null||e.memoizedState===null?Hu:Or),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bn(t);if(t.$$typeof===ge)return ut(t)}throw Error(v(438,String(t)))}function Tr(t){var e=null,a=C.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=C.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Yl(),C.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=r1;return e.index++,a}function Se(t,e){return typeof e=="function"?e(t):e}function Pn(t){var e=$();return zr(e,G,t)}function zr(t,e,a){var i=t.queue;if(i===null)throw Error(v(311));i.lastRenderedReducer=a;var n=t.baseQueue,l=i.pending;if(l!==null){if(n!==null){var o=n.next;n.next=l.next,l.next=o}e.baseQueue=n=l,i.pending=null}if(l=t.baseState,n===null)t.memoizedState=l;else{e=n.next;var s=o=null,r=null,d=e,g=!1;do{var u=d.lane&-536870913;if(u!==d.lane?(O&u)===u:(ke&u)===u){var p=d.revertLane;if(p===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),u===ii&&(g=!0);else if((ke&p)===p){d=d.next,p===ii&&(g=!0);continue}else u={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=u,o=l):r=r.next=u,C.lanes|=p,ta|=p;u=d.action,ma&&a(l,u),l=d.hasEagerState?d.eagerState:a(l,u)}else p={lane:u,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},r===null?(s=r=p,o=l):r=r.next=p,C.lanes|=u,ta|=u;d=d.next}while(d!==null&&d!==e);if(r===null?o=l:r.next=s,!Nt(l,t.memoizedState)&&(it=!0,g&&(a=Wa,a!==null)))throw a;t.memoizedState=l,t.baseState=o,t.baseQueue=r,i.lastRenderedState=l}return n===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Uo(t){var e=$(),a=e.queue;if(a===null)throw Error(v(311));a.lastRenderedReducer=t;var i=a.dispatch,n=a.pending,l=e.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do l=t(l,o.action),o=o.next;while(o!==n);Nt(l,e.memoizedState)||(it=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),a.lastRenderedState=l}return[l,i]}function fu(t,e,a){var i=C,n=$(),l=E;if(l){if(a===void 0)throw Error(v(407));a=a()}else a=e();var o=!Nt((G||n).memoizedState,a);if(o&&(n.memoizedState=a,it=!0),n=n.queue,Cr(uu.bind(null,i,n,t),[t]),n.getSnapshot!==e||o||tt!==null&&tt.memoizedState.tag&1){if(i.flags|=2048,li(9,{destroy:void 0},du.bind(null,i,n,a,e),null),K===null)throw Error(v(349));l||(ke&127)!==0||cu(i,e,a)}return a}function cu(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=C.updateQueue,e===null?(e=Yl(),C.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function du(t,e,a,i){e.value=a,e.getSnapshot=i,pu(e)&&hu(t)}function uu(t,e,a){return a(function(){pu(e)&&hu(t)})}function pu(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Nt(t,a)}catch{return!0}}function hu(t){var e=ka(t,2);e!==null&&kt(e,t,2)}function As(t){var e=mt();if(typeof t=="function"){var a=t;if(t=a(),ma){He(!0);try{a()}finally{He(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:t},e}function gu(t,e,a,i){return t.baseState=a,zr(t,G,typeof i=="function"?i:Se)}function Th(t,e,a,i,n){if(Xl(t))throw Error(v(485));if(t=e.action,t!==null){var l={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};T.T!==null?a(!0):l.isTransition=!1,i(l),a=e.pending,a===null?(l.next=e.pending=l,bu(e,l)):(l.next=a.next,e.pending=a.next=l)}}function bu(t,e){var a=e.action,i=e.payload,n=t.state;if(e.isTransition){var l=T.T,o={};T.T=o;try{var s=a(n,i),r=T.S;r!==null&&r(o,s),gc(t,e,s)}catch(d){Rs(t,e,d)}finally{l!==null&&o.types!==null&&(l.types=o.types),T.T=l}}else try{l=a(n,i),gc(t,e,l)}catch(d){Rs(t,e,d)}}function gc(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){bc(t,e,i)},function(i){return Rs(t,e,i)}):bc(t,e,a)}function bc(t,e,a){e.status="fulfilled",e.value=a,mu(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,bu(t,a)))}function Rs(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,mu(e),e=e.next;while(e!==i)}t.action=null}function mu(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function xu(t,e){return e}function mc(t,e){if(E){var a=K.formState;if(a!==null){t:{var i=C;if(E){if(X){e:{for(var n=X,l=Yt;n.nodeType!==8;){if(!l){n=null;break e}if(n=Zt(n.nextSibling),n===null){n=null;break e}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){X=Zt(n.nextSibling),i=n.data==="F!";break t}}Pe(i)}i=!1}i&&(e=a[0])}}return a=mt(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:e},a.queue=i,a=_u.bind(null,C,i),i.dispatch=a,i=As(!1),l=Br.bind(null,C,!1,i.queue),i=mt(),n={state:e,dispatch:null,action:t,pending:null},i.queue=n,a=Th.bind(null,C,n,l,a),n.dispatch=a,i.memoizedState=t,[e,a,!1]}function xc(t){var e=$();return yu(e,G,t)}function yu(t,e,a){if(e=zr(t,e,xu)[0],t=Pn(Se)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=bn(e)}catch(o){throw o===hi?ql:o}else i=e;e=$();var n=e.queue,l=n.dispatch;return a!==e.memoizedState&&(C.flags|=2048,li(9,{destroy:void 0},zh.bind(null,n,a),null)),[i,l,t]}function zh(t,e){t.action=e}function yc(t){var e=$(),a=G;if(a!==null)return yu(e,a,t);$(),e=e.memoizedState,a=$();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function li(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=C.updateQueue,e===null&&(e=Yl(),C.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function vu(){return $().memoizedState}function $n(t,e,a,i){var n=mt();C.flags|=t,n.memoizedState=li(1|e,{destroy:void 0},a,i===void 0?null:i)}function Zl(t,e,a,i){var n=$();i=i===void 0?null:i;var l=n.memoizedState.inst;G!==null&&i!==null&&yr(i,G.memoizedState.deps)?n.memoizedState=li(e,l,a,i):(C.flags|=t,n.memoizedState=li(1|e,l,a,i))}function vc(t,e){$n(8390656,8,t,e)}function Cr(t,e){Zl(2048,8,t,e)}function Ch(t){C.flags|=4;var e=C.updateQueue;if(e===null)e=Yl(),C.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function wu(t){var e=$().memoizedState;return Ch({ref:e,nextImpl:t}),function(){if((D&2)!==0)throw Error(v(440));return e.impl.apply(void 0,arguments)}}function ku(t,e){return Zl(4,2,t,e)}function Su(t,e){return Zl(4,4,t,e)}function Tu(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zu(t,e,a){a=a!=null?a.concat([t]):null,Zl(4,4,Tu.bind(null,e,t),a)}function Mr(){}function Cu(t,e){var a=$();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&yr(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function Mu(t,e){var a=$();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&yr(e,i[1]))return i[0];if(i=t(),ma){He(!0);try{t()}finally{He(!1)}}return a.memoizedState=[i,e],i}function Ar(t,e,a){return a===void 0||(ke&1073741824)!==0&&(O&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=gp(),C.lanes|=t,ta|=t,a)}function Au(t,e,a,i){return Nt(a,e)?a:ni.current!==null?(t=Ar(t,a,i),Nt(t,e)||(it=!0),t):(ke&42)===0||(ke&1073741824)!==0&&(O&261930)===0?(it=!0,t.memoizedState=a):(t=gp(),C.lanes|=t,ta|=t,e)}function Ru(t,e,a,i,n){var l=L.p;L.p=l!==0&&8>l?l:8;var o=T.T,s={};T.T=s,Br(t,!1,e,a);try{var r=n(),d=T.S;if(d!==null&&d(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var g=wh(r,i);qi(t,e,g,Et(t))}else qi(t,e,i,Et(t))}catch(u){qi(t,e,{then:function(){},status:"rejected",reason:u},Et())}finally{L.p=l,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Mh(){}function Bs(t,e,a,i){if(t.tag!==5)throw Error(v(476));var n=Bu(t).queue;Ru(t,n,e,fa,a===null?Mh:function(){return Ou(t),a(i)})}function Bu(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:fa,baseState:fa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:fa},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ou(t){var e=Bu(t);e.next===null&&(e=t.alternate.memoizedState),qi(t,e.next.queue,{},Et())}function Rr(){return ut(on)}function Eu(){return $().memoizedState}function Nu(){return $().memoizedState}function Ah(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Et();t=Ve(a);var i=Ze(e,t,a);i!==null&&(kt(i,e,a),ji(i,e,a)),e={cache:hr()},t.payload=e;return}e=e.return}}function Rh(t,e,a){var i=Et();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)?Du(e,a):(a=cr(t,e,a,i),a!==null&&(kt(a,t,i),Lu(a,e,i)))}function _u(t,e,a){var i=Et();qi(t,e,a,i)}function qi(t,e,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))Du(e,n);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var o=e.lastRenderedState,s=l(o,a);if(n.hasEagerState=!0,n.eagerState=s,Nt(s,o))return Kl(t,e,n,0),K===null&&Gl(),!1}catch{}if(a=cr(t,e,n,i),a!==null)return kt(a,t,i),Lu(a,e,i),!0}return!1}function Br(t,e,a,i){if(i={lane:2,revertLane:jr(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(e)throw Error(v(479))}else e=cr(t,a,i,2),e!==null&&kt(e,t,2)}function Xl(t){var e=t.alternate;return t===C||e!==null&&e===C}function Du(t,e){Pa=yl=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Lu(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,wd(t,a)}}var an={readContext:ut,use:Vl,useCallback:W,useContext:W,useEffect:W,useImperativeHandle:W,useLayoutEffect:W,useInsertionEffect:W,useMemo:W,useReducer:W,useRef:W,useState:W,useDebugValue:W,useDeferredValue:W,useTransition:W,useSyncExternalStore:W,useId:W,useHostTransitionStatus:W,useFormState:W,useActionState:W,useOptimistic:W,useMemoCache:W,useCacheRefresh:W};an.useEffectEvent=W;var Hu={readContext:ut,use:Vl,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:vc,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,$n(4194308,4,Tu.bind(null,e,t),a)},useLayoutEffect:function(t,e){return $n(4194308,4,t,e)},useInsertionEffect:function(t,e){$n(4,2,t,e)},useMemo:function(t,e){var a=mt();e=e===void 0?null:e;var i=t();if(ma){He(!0);try{t()}finally{He(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=mt();if(a!==void 0){var n=a(e);if(ma){He(!0);try{a(e)}finally{He(!1)}}}else n=e;return i.memoizedState=i.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},i.queue=t,t=t.dispatch=Rh.bind(null,C,t),[i.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:function(t){t=As(t);var e=t.queue,a=_u.bind(null,C,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Mr,useDeferredValue:function(t,e){var a=mt();return Ar(a,t,e)},useTransition:function(){var t=As(!1);return t=Ru.bind(null,C,t.queue,!0,!1),mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=C,n=mt();if(E){if(a===void 0)throw Error(v(407));a=a()}else{if(a=e(),K===null)throw Error(v(349));(O&127)!==0||cu(i,e,a)}n.memoizedState=a;var l={value:a,getSnapshot:e};return n.queue=l,vc(uu.bind(null,i,l,t),[t]),i.flags|=2048,li(9,{destroy:void 0},du.bind(null,i,l,a,e),null),a},useId:function(){var t=mt(),e=K.identifierPrefix;if(E){var a=ee,i=te;a=(i&~(1<<32-Ot(i)-1)).toString(32)+a,e="_"+e+"R_"+a,a=vl++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=kh++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Rr,useFormState:mc,useActionState:mc,useOptimistic:function(t){var e=mt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Br.bind(null,C,!0,a),a.dispatch=e,[t,e]},useMemoCache:Tr,useCacheRefresh:function(){return mt().memoizedState=Ah.bind(null,C)},useEffectEvent:function(t){var e=mt(),a={impl:t};return e.memoizedState=a,function(){if((D&2)!==0)throw Error(v(440));return a.impl.apply(void 0,arguments)}}},Or={readContext:ut,use:Vl,useCallback:Cu,useContext:ut,useEffect:Cr,useImperativeHandle:zu,useInsertionEffect:ku,useLayoutEffect:Su,useMemo:Mu,useReducer:Pn,useRef:vu,useState:function(){return Pn(Se)},useDebugValue:Mr,useDeferredValue:function(t,e){var a=$();return Au(a,G.memoizedState,t,e)},useTransition:function(){var t=Pn(Se)[0],e=$().memoizedState;return[typeof t=="boolean"?t:bn(t),e]},useSyncExternalStore:fu,useId:Eu,useHostTransitionStatus:Rr,useFormState:xc,useActionState:xc,useOptimistic:function(t,e){var a=$();return gu(a,G,t,e)},useMemoCache:Tr,useCacheRefresh:Nu};Or.useEffectEvent=wu;var Uu={readContext:ut,use:Vl,useCallback:Cu,useContext:ut,useEffect:Cr,useImperativeHandle:zu,useInsertionEffect:ku,useLayoutEffect:Su,useMemo:Mu,useReducer:Uo,useRef:vu,useState:function(){return Uo(Se)},useDebugValue:Mr,useDeferredValue:function(t,e){var a=$();return G===null?Ar(a,t,e):Au(a,G.memoizedState,t,e)},useTransition:function(){var t=Uo(Se)[0],e=$().memoizedState;return[typeof t=="boolean"?t:bn(t),e]},useSyncExternalStore:fu,useId:Eu,useHostTransitionStatus:Rr,useFormState:yc,useActionState:yc,useOptimistic:function(t,e){var a=$();return G!==null?gu(a,G,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Tr,useCacheRefresh:Nu};Uu.useEffectEvent=wu;function jo(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:Q({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Os={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=Et(),n=Ve(i);n.payload=e,a!=null&&(n.callback=a),e=Ze(t,n,i),e!==null&&(kt(e,t,i),ji(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=Et(),n=Ve(i);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Ze(t,n,i),e!==null&&(kt(e,t,i),ji(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Et(),i=Ve(a);i.tag=2,e!=null&&(i.callback=e),e=Ze(t,i,a),e!==null&&(kt(e,t,a),ji(e,t,a))}};function wc(t,e,a,i,n,l,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,o):e.prototype&&e.prototype.isPureReactComponent?!Ii(a,i)||!Ii(n,l):!0}function kc(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&Os.enqueueReplaceState(e,e.state,null)}function xa(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=Q({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function ju(t){ul(t)}function Gu(t){console.error(t)}function Ku(t){ul(t)}function wl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Sc(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Es(t,e,a){return a=Ve(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,e)},a}function qu(t){return t=Ve(t),t.tag=3,t}function Yu(t,e,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;t.payload=function(){return n(l)},t.callback=function(){Sc(e,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Sc(e,a,i),typeof n!="function"&&(Xe===null?Xe=new Set([this]):Xe.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function Bh(t,e,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&pi(e,a,n,!0),a=_t.current,a!==null){switch(a.tag){case 31:case 13:return Vt===null?Cl():a.alternate===null&&I===0&&(I=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===bl?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Wo(t,i,n)),!1;case 22:return a.flags|=65536,i===bl?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Wo(t,i,n)),!1}throw Error(v(435,a.tag))}return Wo(t,i,n),Cl(),!1}if(E)return e=_t.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,i!==ys&&(t=Error(v(422),{cause:i}),$i(qt(t,a)))):(i!==ys&&(e=Error(v(423),{cause:i}),$i(qt(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,i=qt(i,a),n=Es(t.stateNode,i,n),Ho(t,n),I!==4&&(I=2)),!1;var l=Error(v(520),{cause:i});if(l=qt(l,a),Zi===null?Zi=[l]:Zi.push(l),I!==4&&(I=2),e===null)return!0;i=qt(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Es(a.stateNode,i,t),Ho(a,t),!1;case 1:if(e=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Xe===null||!Xe.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=qu(n),Yu(n,t,a,i),Ho(a,n),!1}a=a.return}while(a!==null);return!1}var Er=Error(v(461)),it=!1;function ft(t,e,a,i){e.child=t===null?iu(e,null,a,i):ba(e,t.child,a,i)}function Tc(t,e,a,i,n){a=a.render;var l=e.ref;if("ref"in i){var o={};for(var s in i)s!=="ref"&&(o[s]=i[s])}else o=i;return ga(e),i=vr(t,e,a,o,l,n),s=wr(),t!==null&&!it?(kr(t,e,n),Te(t,e,n)):(E&&s&&ur(e),e.flags|=1,ft(t,e,i,n),e.child)}function zc(t,e,a,i,n){if(t===null){var l=a.type;return typeof l=="function"&&!dr(l)&&l.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=l,Vu(t,e,l,i,n)):(t=Wn(a.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!Nr(t,n)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:Ii,a(o,i)&&t.ref===e.ref)return Te(t,e,n)}return e.flags|=1,t=xe(l,i),t.ref=e.ref,t.return=e,e.child=t}function Vu(t,e,a,i,n){if(t!==null){var l=t.memoizedProps;if(Ii(l,i)&&t.ref===e.ref)if(it=!1,e.pendingProps=i=l,Nr(t,n))(t.flags&131072)!==0&&(it=!0);else return e.lanes=t.lanes,Te(t,e,n)}return Ns(t,e,a,i,n)}function Zu(t,e,a,i){var n=i.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,t!==null){for(i=e.child=t.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,e.child=null;return Cc(t,e,l,a,i)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&In(e,l!==null?l.cachePool:null),l!==null?hc(e,l):Cs(),ou(e);else return i=e.lanes=536870912,Cc(t,e,l!==null?l.baseLanes|a:a,a,i)}else l!==null?(In(e,l.cachePool),hc(e,l),De(e),e.memoizedState=null):(t!==null&&In(e,null),Cs(),De(e));return ft(t,e,n,a),e.child}function Ni(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Cc(t,e,a,i,n){var l=gr();return l=l===null?null:{parent:at._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&In(e,null),Cs(),ou(e),t!==null&&pi(t,e,i,!0),e.childLanes=n,null}function tl(t,e){return e=kl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Mc(t,e,a){return ba(e,t.child,null,a),t=tl(e,e.pendingProps),t.flags|=2,Ct(e),e.memoizedState=null,t}function Oh(t,e,a){var i=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(E){if(i.mode==="hidden")return t=tl(e,i),e.lanes=536870912,Ni(null,t);if(Ms(e),(t=X)?(t=Hp(t,Yt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:te,overflow:ee}:null,retryLane:536870912,hydrationErrors:null},a=Wd(t),a.return=e,e.child=a,dt=e,X=null)):t=null,t===null)throw Pe(e);return e.lanes=536870912,null}return tl(e,i)}var l=t.memoizedState;if(l!==null){var o=l.dehydrated;if(Ms(e),n)if(e.flags&256)e.flags&=-257,e=Mc(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(v(558));else if(it||pi(t,e,a,!1),n=(a&t.childLanes)!==0,it||n){if(i=K,i!==null&&(o=kd(i,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,ka(t,o),kt(i,t,o),Er;Cl(),e=Mc(t,e,a)}else t=l.treeContext,X=Zt(o.nextSibling),dt=e,E=!0,Ye=null,Yt=!1,t!==null&&Pd(e,t),e=tl(e,i),e.flags|=4096;return e}return t=xe(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function el(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(v(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Ns(t,e,a,i,n){return ga(e),a=vr(t,e,a,i,void 0,n),i=wr(),t!==null&&!it?(kr(t,e,n),Te(t,e,n)):(E&&i&&ur(e),e.flags|=1,ft(t,e,a,n),e.child)}function Ac(t,e,a,i,n,l){return ga(e),e.updateQueue=null,a=ru(e,i,a,n),su(t),i=wr(),t!==null&&!it?(kr(t,e,l),Te(t,e,l)):(E&&i&&ur(e),e.flags|=1,ft(t,e,a,l),e.child)}function Rc(t,e,a,i,n){if(ga(e),e.stateNode===null){var l=Ya,o=a.contextType;typeof o=="object"&&o!==null&&(l=ut(o)),l=new a(i,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Os,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=i,l.state=e.memoizedState,l.refs={},mr(e),o=a.contextType,l.context=typeof o=="object"&&o!==null?ut(o):Ya,l.state=e.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(jo(e,a,o,i),l.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&Os.enqueueReplaceState(l,l.state,null),Ki(e,i,l,n),Gi(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){l=e.stateNode;var s=e.memoizedProps,r=xa(a,s);l.props=r;var d=l.context,g=a.contextType;o=Ya,typeof g=="object"&&g!==null&&(o=ut(g));var u=a.getDerivedStateFromProps;g=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||d!==o)&&kc(e,l,i,o),Ee=!1;var p=e.memoizedState;l.state=p,Ki(e,i,l,n),Gi(),d=e.memoizedState,s||p!==d||Ee?(typeof u=="function"&&(jo(e,a,u,i),d=e.memoizedState),(r=Ee||wc(e,a,r,i,p,d,o))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=d),l.props=i,l.state=d,l.context=o,i=r):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Ts(t,e),o=e.memoizedProps,g=xa(a,o),l.props=g,u=e.pendingProps,p=l.context,d=a.contextType,r=Ya,typeof d=="object"&&d!==null&&(r=ut(d)),s=a.getDerivedStateFromProps,(d=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==u||p!==r)&&kc(e,l,i,r),Ee=!1,p=e.memoizedState,l.state=p,Ki(e,i,l,n),Gi();var b=e.memoizedState;o!==u||p!==b||Ee||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof s=="function"&&(jo(e,a,s,i),b=e.memoizedState),(g=Ee||wc(e,a,g,i,p,b,r)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,b,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,b,r)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=b),l.props=i,l.state=b,l.context=r,i=g):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return l=i,el(t,e),i=(e.flags&128)!==0,l||i?(l=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&i?(e.child=ba(e,t.child,null,n),e.child=ba(e,null,a,n)):ft(t,e,a,n),e.memoizedState=l.state,t=e.child):t=Te(t,e,n),t}function Bc(t,e,a,i){return ha(),e.flags|=256,ft(t,e,a,i),e.child}var Go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ko(t){return{baseLanes:t,cachePool:tu()}}function qo(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=At),t}function Xu(t,e,a){var i=e.pendingProps,n=!1,l=(e.flags&128)!==0,o;if((o=l)||(o=t!==null&&t.memoizedState===null?!1:(P.current&2)!==0),o&&(n=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(E){if(n?_e(e):De(e),(t=X)?(t=Hp(t,Yt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:te,overflow:ee}:null,retryLane:536870912,hydrationErrors:null},a=Wd(t),a.return=e,e.child=a,dt=e,X=null)):t=null,t===null)throw Pe(e);return Qs(t)?e.lanes=32:e.lanes=536870912,null}var s=i.children;return i=i.fallback,n?(De(e),n=e.mode,s=kl({mode:"hidden",children:s},n),i=ca(i,n,a,null),s.return=e,i.return=e,s.sibling=i,e.child=s,i=e.child,i.memoizedState=Ko(a),i.childLanes=qo(t,o,a),e.memoizedState=Go,Ni(null,i)):(_e(e),_s(e,s))}var r=t.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(l)e.flags&256?(_e(e),e.flags&=-257,e=Yo(t,e,a)):e.memoizedState!==null?(De(e),e.child=t.child,e.flags|=128,e=null):(De(e),s=i.fallback,n=e.mode,i=kl({mode:"visible",children:i.children},n),s=ca(s,n,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,ba(e,t.child,null,a),i=e.child,i.memoizedState=Ko(a),i.childLanes=qo(t,o,a),e.memoizedState=Go,e=Ni(null,i));else if(_e(e),Qs(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var d=o.dgst;o=d,i=Error(v(419)),i.stack="",i.digest=o,$i({value:i,source:null,stack:null}),e=Yo(t,e,a)}else if(it||pi(t,e,a,!1),o=(a&t.childLanes)!==0,it||o){if(o=K,o!==null&&(i=kd(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,ka(t,i),kt(o,t,i),Er;Xs(s)||Cl(),e=Yo(t,e,a)}else Xs(s)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,X=Zt(s.nextSibling),dt=e,E=!0,Ye=null,Yt=!1,t!==null&&Pd(e,t),e=_s(e,i.children),e.flags|=4096);return e}return n?(De(e),s=i.fallback,n=e.mode,r=t.child,d=r.sibling,i=xe(r,{mode:"hidden",children:i.children}),i.subtreeFlags=r.subtreeFlags&65011712,d!==null?s=xe(d,s):(s=ca(s,n,a,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,Ni(null,i),i=e.child,s=t.child.memoizedState,s===null?s=Ko(a):(n=s.cachePool,n!==null?(r=at._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=tu(),s={baseLanes:s.baseLanes|a,cachePool:n}),i.memoizedState=s,i.childLanes=qo(t,o,a),e.memoizedState=Go,Ni(t.child,i)):(_e(e),a=t.child,t=a.sibling,a=xe(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=a,e.memoizedState=null,a)}function _s(t,e){return e=kl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function kl(t,e){return t=Mt(22,t,null,e),t.lanes=0,t}function Yo(t,e,a){return ba(e,t.child,null,a),t=_s(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Oc(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ws(t.return,e,a)}function Vo(t,e,a,i,n,l){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:l}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=n,o.treeForkCount=l)}function Qu(t,e,a){var i=e.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var o=P.current,s=(o&2)!==0;if(s?(o=o&1|2,e.flags|=128):o&=1,Y(P,o),ft(t,e,i,a),i=E?Pi:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Oc(t,a,e);else if(t.tag===19)Oc(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Vo(e,!1,n,a,l,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&xl(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Vo(e,!0,a,null,l,i);break;case"together":Vo(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Te(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ta|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(pi(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(v(153));if(e.child!==null){for(t=e.child,a=xe(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=xe(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Nr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function Eh(t,e,a){switch(e.tag){case 3:rl(e,e.stateNode.containerInfo),Ne(e,at,t.memoizedState.cache),ha();break;case 27:case 5:rs(e);break;case 4:rl(e,e.stateNode.containerInfo);break;case 10:Ne(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ms(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(_e(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Xu(t,e,a):(_e(e),t=Te(t,e,a),t!==null?t.sibling:null);_e(e);break;case 19:var n=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(pi(t,e,a,!1),i=(a&e.childLanes)!==0),n){if(i)return Qu(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y(P,P.current),i)break;return null;case 22:return e.lanes=0,Zu(t,e,a,e.pendingProps);case 24:Ne(e,at,t.memoizedState.cache)}return Te(t,e,a)}function Ju(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)it=!0;else{if(!Nr(t,a)&&(e.flags&128)===0)return it=!1,Eh(t,e,a);it=(t.flags&131072)!==0}else it=!1,E&&(e.flags&1048576)!==0&&Id(e,Pi,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=sa(e.elementType),e.type=t,typeof t=="function")dr(t)?(i=xa(t,i),e.tag=1,e=Rc(null,e,t,i,a)):(e.tag=0,e=Ns(null,e,t,i,a));else{if(t!=null){var n=t.$$typeof;if(n===Is){e.tag=11,e=Tc(null,e,t,i,a);break t}else if(n===Ps){e.tag=14,e=zc(null,e,t,i,a);break t}}throw e=os(t)||t,Error(v(306,e,""))}}return e;case 0:return Ns(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,n=xa(i,e.pendingProps),Rc(t,e,i,n,a);case 3:t:{if(rl(e,e.stateNode.containerInfo),t===null)throw Error(v(387));i=e.pendingProps;var l=e.memoizedState;n=l.element,Ts(t,e),Ki(e,i,null,a);var o=e.memoizedState;if(i=o.cache,Ne(e,at,i),i!==l.cache&&ks(e,[at],a,!0),Gi(),i=o.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Bc(t,e,i,a);break t}else if(i!==n){n=qt(Error(v(424)),e),$i(n),e=Bc(t,e,i,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,X=Zt(t.firstChild),dt=e,E=!0,Ye=null,Yt=!0,a=iu(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ha(),i===n){e=Te(t,e,a);break t}ft(t,e,i,a)}e=e.child}return e;case 26:return el(t,e),t===null?(a=$c(e.type,null,e.pendingProps,null))?e.memoizedState=a:E||(a=e.type,t=e.pendingProps,i=Bl(qe.current).createElement(a),i[ct]=e,i[St]=t,pt(i,a,t),st(i),e.stateNode=i):e.memoizedState=$c(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return rs(e),t===null&&E&&(i=e.stateNode=Up(e.type,e.pendingProps,qe.current),dt=e,Yt=!0,n=X,aa(e.type)?(Js=n,X=Zt(i.firstChild)):X=n),ft(t,e,e.pendingProps.children,a),el(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&E&&((n=i=X)&&(i=og(i,e.type,e.pendingProps,Yt),i!==null?(e.stateNode=i,dt=e,X=Zt(i.firstChild),Yt=!1,n=!0):n=!1),n||Pe(e)),rs(e),n=e.type,l=e.pendingProps,o=t!==null?t.memoizedProps:null,i=l.children,Vs(n,l)?i=null:o!==null&&Vs(n,o)&&(e.flags|=32),e.memoizedState!==null&&(n=vr(t,e,Sh,null,null,a),on._currentValue=n),el(t,e),ft(t,e,i,a),e.child;case 6:return t===null&&E&&((t=a=X)&&(a=sg(a,e.pendingProps,Yt),a!==null?(e.stateNode=a,dt=e,X=null,t=!0):t=!1),t||Pe(e)),null;case 13:return Xu(t,e,a);case 4:return rl(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ba(e,null,i,a):ft(t,e,i,a),e.child;case 11:return Tc(t,e,e.type,e.pendingProps,a);case 7:return ft(t,e,e.pendingProps,a),e.child;case 8:return ft(t,e,e.pendingProps.children,a),e.child;case 12:return ft(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,Ne(e,e.type,i.value),ft(t,e,i.children,a),e.child;case 9:return n=e.type._context,i=e.pendingProps.children,ga(e),n=ut(n),i=i(n),e.flags|=1,ft(t,e,i,a),e.child;case 14:return zc(t,e,e.type,e.pendingProps,a);case 15:return Vu(t,e,e.type,e.pendingProps,a);case 19:return Qu(t,e,a);case 31:return Oh(t,e,a);case 22:return Zu(t,e,a,e.pendingProps);case 24:return ga(e),i=ut(at),t===null?(n=gr(),n===null&&(n=K,l=hr(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),e.memoizedState={parent:i,cache:n},mr(e),Ne(e,at,n)):((t.lanes&a)!==0&&(Ts(t,e),Ki(e,null,null,a),Gi()),n=t.memoizedState,l=e.memoizedState,n.parent!==i?(n={parent:i,cache:i},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Ne(e,at,i)):(i=l.cache,Ne(e,at,i),i!==n.cache&&ks(e,[at],a,!0))),ft(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(v(156,e.tag))}function fe(t){t.flags|=4}function Zo(t,e,a,i,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(xp())t.flags|=8192;else throw ua=bl,br}else t.flags&=-16777217}function Ec(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Kp(e))if(xp())t.flags|=8192;else throw ua=bl,br}function jn(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yd():536870912,t.lanes|=e,oi|=e)}function Ci(t,e){if(!E)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Z(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function Nh(t,e,a){var i=e.pendingProps;switch(pr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Z(e),null;case 1:return Z(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ye(at),ti(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?fe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Lo())),Z(e),null;case 26:var n=e.type,l=e.memoizedState;return t===null?(fe(e),l!==null?(Z(e),Ec(e,l)):(Z(e),Zo(e,n,null,i,a))):l?l!==t.memoizedState?(fe(e),Z(e),Ec(e,l)):(Z(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&fe(e),Z(e),Zo(e,n,t,i,a)),null;case 27:if(fl(e),a=qe.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&fe(e);else{if(!i){if(e.stateNode===null)throw Error(v(166));return Z(e),null}t=ie.current,Oa(e)?sc(e,t):(t=Up(n,i,a),e.stateNode=t,fe(e))}return Z(e),null;case 5:if(fl(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&fe(e);else{if(!i){if(e.stateNode===null)throw Error(v(166));return Z(e),null}if(l=ie.current,Oa(e))sc(e,l);else{var o=Bl(qe.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}l[ct]=e,l[St]=i;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=l;t:switch(pt(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&fe(e)}}return Z(e),Zo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&fe(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(v(166));if(t=qe.current,Oa(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,n=dt,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}t[ct]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||_p(t.nodeValue,a)),t||Pe(e,!0)}else t=Bl(t).createTextNode(i),t[ct]=e,e.stateNode=t}return Z(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(i=Oa(e),a!==null){if(t===null){if(!i)throw Error(v(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(557));t[ct]=e}else ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Z(e),t=!1}else a=Lo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Ct(e),e):(Ct(e),null);if((e.flags&128)!==0)throw Error(v(558))}return Z(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!n)throw Error(v(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(v(317));n[ct]=e}else ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Z(e),n=!1}else n=Lo(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(Ct(e),e):(Ct(e),null)}return Ct(e),(e.flags&128)!==0?(e.lanes=a,e):(a=i!==null,t=t!==null&&t.memoizedState!==null,a&&(i=e.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),jn(e,e.updateQueue),Z(e),null);case 4:return ti(),t===null&&Gr(e.stateNode.containerInfo),Z(e),null;case 10:return ye(e.type),Z(e),null;case 19:if(rt(P),i=e.memoizedState,i===null)return Z(e),null;if(n=(e.flags&128)!==0,l=i.rendering,l===null)if(n)Ci(i,!1);else{if(I!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=xl(t),l!==null){for(e.flags|=128,Ci(i,!1),t=l.updateQueue,e.updateQueue=t,jn(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Fd(a,t),a=a.sibling;return Y(P,P.current&1|2),E&&pe(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Rt()>Tl&&(e.flags|=128,n=!0,Ci(i,!1),e.lanes=4194304)}else{if(!n)if(t=xl(l),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,jn(e,t),Ci(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!E)return Z(e),null}else 2*Rt()-i.renderingStartTime>Tl&&a!==536870912&&(e.flags|=128,n=!0,Ci(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Rt(),t.sibling=null,a=P.current,Y(P,n?a&1|2:a&1),E&&pe(e,i.treeForkCount),t):(Z(e),null);case 22:case 23:return Ct(e),xr(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(Z(e),e.subtreeFlags&6&&(e.flags|=8192)):Z(e),a=e.updateQueue,a!==null&&jn(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&rt(da),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ye(at),Z(e),null;case 25:return null;case 30:return null}throw Error(v(156,e.tag))}function _h(t,e){switch(pr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ye(at),ti(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return fl(e),null;case 31:if(e.memoizedState!==null){if(Ct(e),e.alternate===null)throw Error(v(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ct(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(v(340));ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(P),null;case 4:return ti(),null;case 10:return ye(e.type),null;case 22:case 23:return Ct(e),xr(),t!==null&&rt(da),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ye(at),null;case 25:return null;default:return null}}function Fu(t,e){switch(pr(e),e.tag){case 3:ye(at),ti();break;case 26:case 27:case 5:fl(e);break;case 4:ti();break;case 31:e.memoizedState!==null&&Ct(e);break;case 13:Ct(e);break;case 19:rt(P);break;case 10:ye(e.type);break;case 22:case 23:Ct(e),xr(),t!==null&&rt(da);break;case 24:ye(at)}}function mn(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){i=void 0;var l=a.create,o=a.inst;i=l(),o.destroy=i}a=a.next}while(a!==n)}}catch(s){U(e,e.return,s)}}function $e(t,e,a){try{var i=e.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&t)===t){var o=i.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=e;var r=a,d=s;try{d()}catch(g){U(n,r,g)}}}i=i.next}while(i!==l)}}catch(g){U(e,e.return,g)}}function Wu(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{lu(e,a)}catch(i){U(t,t.return,i)}}}function Iu(t,e,a){a.props=xa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){U(t,e,i)}}function Yi(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(n){U(t,e,n)}}function ae(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){U(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){U(t,e,n)}else a.current=null}function Pu(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){U(t,t.return,n)}}function Xo(t,e,a){try{var i=t.stateNode;tg(i,t.type,a,e),i[St]=e}catch(n){U(t,t.return,n)}}function $u(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&aa(t.type)||t.tag===4}function Qo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$u(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ds(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=be));else if(i!==4&&(i===27&&aa(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Ds(t,e,a),t=t.sibling;t!==null;)Ds(t,e,a),t=t.sibling}function Sl(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,e,a),t=t.sibling;t!==null;)Sl(t,e,a),t=t.sibling}function tp(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);pt(e,i,a),e[ct]=t,e[St]=a}catch(l){U(t,t.return,l)}}var he=!1,et=!1,Jo=!1,Nc=typeof WeakSet=="function"?WeakSet:Set,ot=null;function Dh(t,e){if(t=t.containerInfo,qs=_l,t=Kd(t),rr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break t}var o=0,s=-1,r=-1,d=0,g=0,u=t,p=null;e:for(;;){for(var b;u!==a||n!==0&&u.nodeType!==3||(s=o+n),u!==l||i!==0&&u.nodeType!==3||(r=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(b=u.firstChild)!==null;)p=u,u=b;for(;;){if(u===t)break e;if(p===a&&++d===n&&(s=o),p===l&&++g===i&&(r=o),(b=u.nextSibling)!==null)break;u=p,p=u.parentNode}u=b}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ys={focusedElem:t,selectionRange:a},_l=!1,ot=e;ot!==null;)if(e=ot,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ot=t;else for(;ot!==null;){switch(e=ot,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,a=e,n=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var y=xa(a.type,n);t=i.getSnapshotBeforeUpdate(y,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(x){U(a,a.return,x)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Zs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(v(163))}if(t=e.sibling,t!==null){t.return=e.return,ot=t;break}ot=e.return}}function ep(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:de(t,a),i&4&&mn(5,a);break;case 1:if(de(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(o){U(a,a.return,o)}else{var n=xa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){U(a,a.return,o)}}i&64&&Wu(a),i&512&&Yi(a,a.return);break;case 3:if(de(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{lu(t,e)}catch(o){U(a,a.return,o)}}break;case 27:e===null&&i&4&&tp(a);case 26:case 5:de(t,a),e===null&&i&4&&Pu(a),i&512&&Yi(a,a.return);break;case 12:de(t,a);break;case 31:de(t,a),i&4&&np(t,a);break;case 13:de(t,a),i&4&&lp(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vh.bind(null,a),rg(t,a))));break;case 22:if(i=a.memoizedState!==null||he,!i){e=e!==null&&e.memoizedState!==null||et,n=he;var l=et;he=i,(et=e)&&!l?ue(t,a,(a.subtreeFlags&8772)!==0):de(t,a),he=n,et=l}break;case 30:break;default:de(t,a)}}function ap(t){var e=t.alternate;e!==null&&(t.alternate=null,ap(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ar(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var F=null,vt=!1;function ce(t,e,a){for(a=a.child;a!==null;)ip(t,e,a),a=a.sibling}function ip(t,e,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(cn,a)}catch{}switch(a.tag){case 26:et||ae(a,e),ce(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:et||ae(a,e);var i=F,n=vt;aa(a.type)&&(F=a.stateNode,vt=!1),ce(t,e,a),Qi(a.stateNode),F=i,vt=n;break;case 5:et||ae(a,e);case 6:if(i=F,n=vt,F=null,ce(t,e,a),F=i,vt=n,F!==null)if(vt)try{(F.nodeType===9?F.body:F.nodeName==="HTML"?F.ownerDocument.body:F).removeChild(a.stateNode)}catch(l){U(a,e,l)}else try{F.removeChild(a.stateNode)}catch(l){U(a,e,l)}break;case 18:F!==null&&(vt?(t=F,Jc(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ci(t)):Jc(F,a.stateNode));break;case 4:i=F,n=vt,F=a.stateNode.containerInfo,vt=!0,ce(t,e,a),F=i,vt=n;break;case 0:case 11:case 14:case 15:$e(2,a,e),et||$e(4,a,e),ce(t,e,a);break;case 1:et||(ae(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Iu(a,e,i)),ce(t,e,a);break;case 21:ce(t,e,a);break;case 22:et=(i=et)||a.memoizedState!==null,ce(t,e,a),et=i;break;default:ce(t,e,a)}}function np(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ci(t)}catch(a){U(e,e.return,a)}}}function lp(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ci(t)}catch(a){U(e,e.return,a)}}function Lh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Nc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Nc),e;default:throw Error(v(435,t.tag))}}function Gn(t,e){var a=Lh(t);e.forEach(function(i){if(!a.has(i)){a.add(i);var n=Zh.bind(null,t,i);i.then(n,n)}})}function xt(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],l=t,o=e,s=o;t:for(;s!==null;){switch(s.tag){case 27:if(aa(s.type)){F=s.stateNode,vt=!1;break t}break;case 5:F=s.stateNode,vt=!1;break t;case 3:case 4:F=s.stateNode.containerInfo,vt=!0;break t}s=s.return}if(F===null)throw Error(v(160));ip(l,o,n),F=null,vt=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)op(e,t),e=e.sibling}var Ft=null;function op(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xt(e,t),yt(t),i&4&&($e(3,t,t.return),mn(3,t),$e(5,t,t.return));break;case 1:xt(e,t),yt(t),i&512&&(et||a===null||ae(a,a.return)),i&64&&he&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Ft;if(xt(e,t),yt(t),i&512&&(et||a===null||ae(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[pn]||l[ct]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),pt(l,i,a),l[ct]=t,st(l),i=l;break t;case"link":var o=ed("link","href",n).get(i+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(l=o[s],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break e}}l=n.createElement(i),pt(l,i,a),n.head.appendChild(l);break;case"meta":if(o=ed("meta","content",n).get(i+(a.content||""))){for(s=0;s<o.length;s++)if(l=o[s],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break e}}l=n.createElement(i),pt(l,i,a),n.head.appendChild(l);break;default:throw Error(v(468,i))}l[ct]=t,st(l),i=l}t.stateNode=i}else ad(n,t.type,t.stateNode);else t.stateNode=td(n,i,t.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?ad(n,t.type,t.stateNode):td(n,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Xo(t,t.memoizedProps,a.memoizedProps)}break;case 27:xt(e,t),yt(t),i&512&&(et||a===null||ae(a,a.return)),a!==null&&i&4&&Xo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(xt(e,t),yt(t),i&512&&(et||a===null||ae(a,a.return)),t.flags&32){n=t.stateNode;try{ai(n,"")}catch(y){U(t,t.return,y)}}i&4&&t.stateNode!=null&&(n=t.memoizedProps,Xo(t,n,a!==null?a.memoizedProps:n)),i&1024&&(Jo=!0);break;case 6:if(xt(e,t),yt(t),i&4){if(t.stateNode===null)throw Error(v(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(y){U(t,t.return,y)}}break;case 3:if(nl=null,n=Ft,Ft=Ol(e.containerInfo),xt(e,t),Ft=n,yt(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ci(e.containerInfo)}catch(y){U(t,t.return,y)}Jo&&(Jo=!1,sp(t));break;case 4:i=Ft,Ft=Ol(t.stateNode.containerInfo),xt(e,t),yt(t),Ft=i;break;case 12:xt(e,t),yt(t);break;case 31:xt(e,t),yt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Gn(t,i)));break;case 13:xt(e,t),yt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=Rt()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Gn(t,i)));break;case 22:n=t.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,d=he,g=et;if(he=d||n,et=g||r,xt(e,t),et=g,he=d,yt(t),i&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||r||he||et||ra(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(l=r.stateNode,n)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=r.stateNode;var u=r.memoizedProps.style,p=u!=null&&u.hasOwnProperty("display")?u.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){U(r,r.return,y)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(y){U(r,r.return,y)}}}else if(e.tag===18){if(a===null){r=e;try{var b=r.stateNode;n?Fc(b,!0):Fc(r.stateNode,!1)}catch(y){U(r,r.return,y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Gn(t,a))));break;case 19:xt(e,t),yt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Gn(t,i)));break;case 30:break;case 21:break;default:xt(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if($u(i)){a=i;break}i=i.return}if(a==null)throw Error(v(160));switch(a.tag){case 27:var n=a.stateNode,l=Qo(t);Sl(t,l,n);break;case 5:var o=a.stateNode;a.flags&32&&(ai(o,""),a.flags&=-33);var s=Qo(t);Sl(t,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,d=Qo(t);Ds(t,d,r);break;default:throw Error(v(161))}}catch(g){U(t,t.return,g)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;sp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function de(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ep(t,e.alternate,e),e=e.sibling}function ra(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:$e(4,e,e.return),ra(e);break;case 1:ae(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Iu(e,e.return,a),ra(e);break;case 27:Qi(e.stateNode);case 26:case 5:ae(e,e.return),ra(e);break;case 22:e.memoizedState===null&&ra(e);break;case 30:ra(e);break;default:ra(e)}t=t.sibling}}function ue(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,n=t,l=e,o=l.flags;switch(l.tag){case 0:case 11:case 15:ue(n,l,a),mn(4,l);break;case 1:if(ue(n,l,a),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){U(i,i.return,d)}if(i=l,n=i.updateQueue,n!==null){var s=i.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)nu(r[n],s)}catch(d){U(i,i.return,d)}}a&&o&64&&Wu(l),Yi(l,l.return);break;case 27:tp(l);case 26:case 5:ue(n,l,a),a&&i===null&&o&4&&Pu(l),Yi(l,l.return);break;case 12:ue(n,l,a);break;case 31:ue(n,l,a),a&&o&4&&np(n,l);break;case 13:ue(n,l,a),a&&o&4&&lp(n,l);break;case 22:l.memoizedState===null&&ue(n,l,a),Yi(l,l.return);break;case 30:break;default:ue(n,l,a)}e=e.sibling}}function _r(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&gn(a))}function Dr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&gn(t))}function Jt(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rp(t,e,a,i),e=e.sibling}function rp(t,e,a,i){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Jt(t,e,a,i),n&2048&&mn(9,e);break;case 1:Jt(t,e,a,i);break;case 3:Jt(t,e,a,i),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&gn(t)));break;case 12:if(n&2048){Jt(t,e,a,i),t=e.stateNode;try{var l=e.memoizedProps,o=l.id,s=l.onPostCommit;typeof s=="function"&&s(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){U(e,e.return,r)}}else Jt(t,e,a,i);break;case 31:Jt(t,e,a,i);break;case 13:Jt(t,e,a,i);break;case 23:break;case 22:l=e.stateNode,o=e.alternate,e.memoizedState!==null?l._visibility&2?Jt(t,e,a,i):Vi(t,e):l._visibility&2?Jt(t,e,a,i):(l._visibility|=2,Na(t,e,a,i,(e.subtreeFlags&10256)!==0||!1)),n&2048&&_r(o,e);break;case 24:Jt(t,e,a,i),n&2048&&Dr(e.alternate,e);break;default:Jt(t,e,a,i)}}function Na(t,e,a,i,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,o=e,s=a,r=i,d=o.flags;switch(o.tag){case 0:case 11:case 15:Na(l,o,s,r,n),mn(8,o);break;case 23:break;case 22:var g=o.stateNode;o.memoizedState!==null?g._visibility&2?Na(l,o,s,r,n):Vi(l,o):(g._visibility|=2,Na(l,o,s,r,n)),n&&d&2048&&_r(o.alternate,o);break;case 24:Na(l,o,s,r,n),n&&d&2048&&Dr(o.alternate,o);break;default:Na(l,o,s,r,n)}e=e.sibling}}function Vi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,n=i.flags;switch(i.tag){case 22:Vi(a,i),n&2048&&_r(i.alternate,i);break;case 24:Vi(a,i),n&2048&&Dr(i.alternate,i);break;default:Vi(a,i)}e=e.sibling}}var _i=8192;function Ea(t,e,a){if(t.subtreeFlags&_i)for(t=t.child;t!==null;)fp(t,e,a),t=t.sibling}function fp(t,e,a){switch(t.tag){case 26:Ea(t,e,a),t.flags&_i&&t.memoizedState!==null&&vg(a,Ft,t.memoizedState,t.memoizedProps);break;case 5:Ea(t,e,a);break;case 3:case 4:var i=Ft;Ft=Ol(t.stateNode.containerInfo),Ea(t,e,a),Ft=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=_i,_i=16777216,Ea(t,e,a),_i=i):Ea(t,e,a));break;default:Ea(t,e,a)}}function cp(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Mi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];ot=i,up(i,t)}cp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dp(t),t=t.sibling}function dp(t){switch(t.tag){case 0:case 11:case 15:Mi(t),t.flags&2048&&$e(9,t,t.return);break;case 3:Mi(t);break;case 12:Mi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,al(t)):Mi(t);break;default:Mi(t)}}function al(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];ot=i,up(i,t)}cp(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:$e(8,e,e.return),al(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,al(e));break;default:al(e)}t=t.sibling}}function up(t,e){for(;ot!==null;){var a=ot;switch(a.tag){case 0:case 11:case 15:$e(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:gn(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ot=i;else t:for(a=t;ot!==null;){i=ot;var n=i.sibling,l=i.return;if(ap(i),i===a){ot=null;break t}if(n!==null){n.return=l,ot=n;break t}ot=l}}}var Hh={getCacheForType:function(t){var e=ut(at),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return ut(at).controller.signal}},Uh=typeof WeakMap=="function"?WeakMap:Map,D=0,K=null,R=null,O=0,H=0,zt=null,je=!1,gi=!1,Lr=!1,ze=0,I=0,ta=0,pa=0,Hr=0,At=0,oi=0,Zi=null,wt=null,Ls=!1,Ql=0,pp=0,Tl=1/0,zl=null,Xe=null,nt=0,Qe=null,si=null,ve=0,Hs=0,Us=null,hp=null,Xi=0,js=null;function Et(){return(D&2)!==0&&O!==0?O&-O:T.T!==null?jr():Sd()}function gp(){if(At===0)if((O&536870912)===0||E){var t=Bn;Bn<<=1,(Bn&3932160)===0&&(Bn=262144),At=t}else At=536870912;return t=_t.current,t!==null&&(t.flags|=32),At}function kt(t,e,a){(t===K&&(H===2||H===9)||t.cancelPendingCommit!==null)&&(ri(t,0),Ge(t,O,At,!1)),un(t,a),((D&2)===0||t!==K)&&(t===K&&((D&2)===0&&(pa|=a),I===4&&Ge(t,O,At,!1)),le(t))}function bp(t,e,a){if((D&6)!==0)throw Error(v(327));var i=!a&&(e&127)===0&&(e&t.expiredLanes)===0||dn(t,e),n=i?Kh(t,e):Fo(t,e,!0),l=i;do{if(n===0){gi&&!i&&Ge(t,e,0,!1);break}else{if(a=t.current.alternate,l&&!jh(a)){n=Fo(t,e,!1),l=!1;continue}if(n===2){if(l=e,t.errorRecoveryDisabledLanes&l)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var s=t;n=Zi;var r=s.current.memoizedState.isDehydrated;if(r&&(ri(s,o).flags|=256),o=Fo(s,o,!1),o!==2){if(Lr&&!r){s.errorRecoveryDisabledLanes|=l,pa|=l,n=4;break t}l=wt,wt=n,l!==null&&(wt===null?wt=l:wt.push.apply(wt,l))}n=o}if(l=!1,n!==2)continue}}if(n===1){ri(t,0),Ge(t,e,0,!0);break}t:{switch(i=t,l=n,l){case 0:case 1:throw Error(v(345));case 4:if((e&4194048)!==e)break;case 6:Ge(i,e,At,!je);break t;case 2:wt=null;break;case 3:case 5:break;default:throw Error(v(329))}if((e&62914560)===e&&(n=Ql+300-Rt(),10<n)){if(Ge(i,e,At,!je),Ll(i,0,!0)!==0)break t;ve=e,i.timeoutHandle=Lp(_c.bind(null,i,a,wt,zl,Ls,e,At,pa,oi,je,l,"Throttled",-0,0),n);break t}_c(i,a,wt,zl,Ls,e,At,pa,oi,je,l,null,-0,0)}}break}while(!0);le(t)}function _c(t,e,a,i,n,l,o,s,r,d,g,u,p,b){if(t.timeoutHandle=-1,u=e.subtreeFlags,u&8192||(u&16785408)===16785408){u={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:be},fp(e,l,u);var y=(l&62914560)===l?Ql-Rt():(l&4194048)===l?pp-Rt():0;if(y=wg(u,y),y!==null){ve=l,t.cancelPendingCommit=y(Lc.bind(null,t,e,l,a,i,n,o,s,r,g,u,null,p,b)),Ge(t,l,o,!d);return}}Lc(t,e,l,a,i,n,o,s,r)}function jh(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],l=n.getSnapshot;n=n.value;try{if(!Nt(l(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ge(t,e,a,i){e&=~Hr,e&=~pa,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var n=e;0<n;){var l=31-Ot(n),o=1<<l;i[l]=-1,n&=~o}a!==0&&vd(t,a,e)}function Jl(){return(D&6)===0?(xn(0,!1),!1):!0}function Ur(){if(R!==null){if(H===0)var t=R.return;else t=R,me=Sa=null,Sr(t),Ia=null,tn=0,t=R;for(;t!==null;)Fu(t.alternate,t),t=t.return;R=null}}function ri(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ig(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ve=0,Ur(),K=t,R=a=xe(t.current,null),O=e,H=0,zt=null,je=!1,gi=dn(t,e),Lr=!1,oi=At=Hr=pa=ta=I=0,wt=Zi=null,Ls=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var n=31-Ot(i),l=1<<n;e|=t[n],i&=~l}return ze=e,Gl(),a}function mp(t,e){C=null,T.H=an,e===hi||e===ql?(e=uc(),H=3):e===br?(e=uc(),H=4):H=e===Er?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,zt=e,R===null&&(I=1,wl(t,qt(e,t.current)))}function xp(){var t=_t.current;return t===null?!0:(O&4194048)===O?Vt===null:(O&62914560)===O||(O&536870912)!==0?t===Vt:!1}function yp(){var t=T.H;return T.H=an,t===null?an:t}function vp(){var t=T.A;return T.A=Hh,t}function Cl(){I=4,je||(O&4194048)!==O&&_t.current!==null||(gi=!0),(ta&134217727)===0&&(pa&134217727)===0||K===null||Ge(K,O,At,!1)}function Fo(t,e,a){var i=D;D|=2;var n=yp(),l=vp();(K!==t||O!==e)&&(zl=null,ri(t,e)),e=!1;var o=I;t:do try{if(H!==0&&R!==null){var s=R,r=zt;switch(H){case 8:Ur(),o=6;break t;case 3:case 2:case 9:case 6:_t.current===null&&(e=!0);var d=H;if(H=0,zt=null,Xa(t,s,r,d),a&&gi){o=0;break t}break;default:d=H,H=0,zt=null,Xa(t,s,r,d)}}Gh(),o=I;break}catch(g){mp(t,g)}while(!0);return e&&t.shellSuspendCounter++,me=Sa=null,D=i,T.H=n,T.A=l,R===null&&(K=null,O=0,Gl()),o}function Gh(){for(;R!==null;)wp(R)}function Kh(t,e){var a=D;D|=2;var i=yp(),n=vp();K!==t||O!==e?(zl=null,Tl=Rt()+500,ri(t,e)):gi=dn(t,e);t:do try{if(H!==0&&R!==null){e=R;var l=zt;e:switch(H){case 1:H=0,zt=null,Xa(t,e,l,1);break;case 2:case 9:if(dc(l)){H=0,zt=null,Dc(e);break}e=function(){H!==2&&H!==9||K!==t||(H=7),le(t)},l.then(e,e);break t;case 3:H=7;break t;case 4:H=5;break t;case 7:dc(l)?(H=0,zt=null,Dc(e)):(H=0,zt=null,Xa(t,e,l,7));break;case 5:var o=null;switch(R.tag){case 26:o=R.memoizedState;case 5:case 27:var s=R;if(o?Kp(o):s.stateNode.complete){H=0,zt=null;var r=s.sibling;if(r!==null)R=r;else{var d=s.return;d!==null?(R=d,Fl(d)):R=null}break e}}H=0,zt=null,Xa(t,e,l,5);break;case 6:H=0,zt=null,Xa(t,e,l,6);break;case 8:Ur(),I=6;break t;default:throw Error(v(462))}}qh();break}catch(g){mp(t,g)}while(!0);return me=Sa=null,T.H=i,T.A=n,D=a,R!==null?0:(K=null,O=0,Gl(),I)}function qh(){for(;R!==null&&!d1();)wp(R)}function wp(t){var e=Ju(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?Fl(t):R=e}function Dc(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Ac(a,e,e.pendingProps,e.type,void 0,O);break;case 11:e=Ac(a,e,e.pendingProps,e.type.render,e.ref,O);break;case 5:Sr(e);default:Fu(a,e),e=R=Fd(e,ze),e=Ju(a,e,ze)}t.memoizedProps=t.pendingProps,e===null?Fl(t):R=e}function Xa(t,e,a,i){me=Sa=null,Sr(e),Ia=null,tn=0;var n=e.return;try{if(Bh(t,n,e,a,O)){I=1,wl(t,qt(a,t.current)),R=null;return}}catch(l){if(n!==null)throw R=n,l;I=1,wl(t,qt(a,t.current)),R=null;return}e.flags&32768?(E||i===1?t=!0:gi||(O&536870912)!==0?t=!1:(je=t=!0,(i===2||i===9||i===3||i===6)&&(i=_t.current,i!==null&&i.tag===13&&(i.flags|=16384))),kp(e,t)):Fl(e)}function Fl(t){var e=t;do{if((e.flags&32768)!==0){kp(e,je);return}t=e.return;var a=Nh(e.alternate,e,ze);if(a!==null){R=a;return}if(e=e.sibling,e!==null){R=e;return}R=e=t}while(e!==null);I===0&&(I=5)}function kp(t,e){do{var a=_h(t.alternate,t);if(a!==null){a.flags&=32767,R=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){R=t;return}R=t=a}while(t!==null);I=6,R=null}function Lc(t,e,a,i,n,l,o,s,r){t.cancelPendingCommit=null;do Wl();while(nt!==0);if((D&6)!==0)throw Error(v(327));if(e!==null){if(e===t.current)throw Error(v(177));if(l=e.lanes|e.childLanes,l|=fr,w1(t,a,l,o,s,r),t===K&&(R=K=null,O=0),si=e,Qe=t,ve=a,Hs=l,Us=n,hp=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xh(cl,function(){return Mp(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=T.T,T.T=null,n=L.p,L.p=2,o=D,D|=4;try{Dh(t,e,a)}finally{D=o,L.p=n,T.T=i}}nt=1,Sp(),Tp(),zp()}}function Sp(){if(nt===1){nt=0;var t=Qe,e=si,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var i=L.p;L.p=2;var n=D;D|=4;try{op(e,t);var l=Ys,o=Kd(t.containerInfo),s=l.focusedElem,r=l.selectionRange;if(o!==s&&s&&s.ownerDocument&&Gd(s.ownerDocument.documentElement,s)){if(r!==null&&rr(s)){var d=r.start,g=r.end;if(g===void 0&&(g=d),"selectionStart"in s)s.selectionStart=d,s.selectionEnd=Math.min(g,s.value.length);else{var u=s.ownerDocument||document,p=u&&u.defaultView||window;if(p.getSelection){var b=p.getSelection(),y=s.textContent.length,x=Math.min(r.start,y),S=r.end===void 0?x:Math.min(r.end,y);!b.extend&&x>S&&(o=S,S=x,x=o);var c=nc(s,x),f=nc(s,S);if(c&&f&&(b.rangeCount!==1||b.anchorNode!==c.node||b.anchorOffset!==c.offset||b.focusNode!==f.node||b.focusOffset!==f.offset)){var h=u.createRange();h.setStart(c.node,c.offset),b.removeAllRanges(),x>S?(b.addRange(h),b.extend(f.node,f.offset)):(h.setEnd(f.node,f.offset),b.addRange(h))}}}}for(u=[],b=s;b=b.parentNode;)b.nodeType===1&&u.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<u.length;s++){var m=u[s];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}_l=!!qs,Ys=qs=null}finally{D=n,L.p=i,T.T=a}}t.current=e,nt=2}}function Tp(){if(nt===2){nt=0;var t=Qe,e=si,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var i=L.p;L.p=2;var n=D;D|=4;try{ep(t,e.alternate,e)}finally{D=n,L.p=i,T.T=a}}nt=3}}function zp(){if(nt===4||nt===3){nt=0,u1();var t=Qe,e=si,a=ve,i=hp;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?nt=5:(nt=0,si=Qe=null,Cp(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Xe=null),er(a),e=e.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(cn,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=T.T,n=L.p,L.p=2,T.T=null;try{for(var l=t.onRecoverableError,o=0;o<i.length;o++){var s=i[o];l(s.value,{componentStack:s.stack})}}finally{T.T=e,L.p=n}}(ve&3)!==0&&Wl(),le(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===js?Xi++:(Xi=0,js=t):Xi=0,xn(0,!1)}}function Cp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,gn(e)))}function Wl(){return Sp(),Tp(),zp(),Mp()}function Mp(){if(nt!==5)return!1;var t=Qe,e=Hs;Hs=0;var a=er(ve),i=T.T,n=L.p;try{L.p=32>a?32:a,T.T=null,a=Us,Us=null;var l=Qe,o=ve;if(nt=0,si=Qe=null,ve=0,(D&6)!==0)throw Error(v(331));var s=D;if(D|=4,dp(l.current),rp(l,l.current,o,a),D=s,xn(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(cn,l)}catch{}return!0}finally{L.p=n,T.T=i,Cp(t,e)}}function Hc(t,e,a){e=qt(a,e),e=Es(t.stateNode,e,2),t=Ze(t,e,2),t!==null&&(un(t,2),le(t))}function U(t,e,a){if(t.tag===3)Hc(t,t,a);else for(;e!==null;){if(e.tag===3){Hc(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xe===null||!Xe.has(i))){t=qt(a,t),a=qu(2),i=Ze(e,a,2),i!==null&&(Yu(a,i,e,t),un(i,2),le(i));break}}e=e.return}}function Wo(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new Uh;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(a)||(Lr=!0,n.add(a),t=Yh.bind(null,t,e,a),e.then(t,t))}function Yh(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,K===t&&(O&a)===a&&(I===4||I===3&&(O&62914560)===O&&300>Rt()-Ql?(D&2)===0&&ri(t,0):Hr|=a,oi===O&&(oi=0)),le(t)}function Ap(t,e){e===0&&(e=yd()),t=ka(t,e),t!==null&&(un(t,e),le(t))}function Vh(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Ap(t,a)}function Zh(t,e){var a=0;switch(t.tag){case 31:case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(v(314))}i!==null&&i.delete(e),Ap(t,a)}function Xh(t,e){return $s(t,e)}var Ml=null,_a=null,Gs=!1,Al=!1,Io=!1,Ke=0;function le(t){t!==_a&&t.next===null&&(_a===null?Ml=_a=t:_a=_a.next=t),Al=!0,Gs||(Gs=!0,Jh())}function xn(t,e){if(!Io&&Al){Io=!0;do for(var a=!1,i=Ml;i!==null;){if(!e)if(t!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var o=i.suspendedLanes,s=i.pingedLanes;l=(1<<31-Ot(42|t)+1)-1,l&=n&~(o&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Uc(i,l))}else l=O,l=Ll(i,i===K?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||dn(i,l)||(a=!0,Uc(i,l));i=i.next}while(a);Io=!1}}function Qh(){Rp()}function Rp(){Al=Gs=!1;var t=0;Ke!==0&&ag()&&(t=Ke);for(var e=Rt(),a=null,i=Ml;i!==null;){var n=i.next,l=Bp(i,e);l===0?(i.next=null,a===null?Ml=n:a.next=n,n===null&&(_a=a)):(a=i,(t!==0||(l&3)!==0)&&(Al=!0)),i=n}nt!==0&&nt!==5||xn(t,!1),Ke!==0&&(Ke=0)}function Bp(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var o=31-Ot(l),s=1<<o,r=n[o];r===-1?((s&a)===0||(s&i)!==0)&&(n[o]=v1(s,e)):r<=e&&(t.expiredLanes|=s),l&=~s}if(e=K,a=O,a=Ll(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(H===2||H===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Co(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||dn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&Co(i),er(a)){case 2:case 8:a=md;break;case 32:a=cl;break;case 268435456:a=xd;break;default:a=cl}return i=Op.bind(null,t),a=$s(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&Co(i),t.callbackPriority=2,t.callbackNode=null,2}function Op(t,e){if(nt!==0&&nt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var i=O;return i=Ll(t,t===K?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(bp(t,i,e),Bp(t,Rt()),t.callbackNode!=null&&t.callbackNode===a?Op.bind(null,t):null)}function Uc(t,e){if(Wl())return null;bp(t,e,!0)}function Jh(){ng(function(){(D&6)!==0?$s(bd,Qh):Rp()})}function jr(){if(Ke===0){var t=ii;t===0&&(t=Rn,Rn<<=1,(Rn&261888)===0&&(Rn=256)),Ke=t}return Ke}function jc(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Qn(""+t)}function Gc(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Fh(t,e,a,i,n){if(e==="submit"&&a&&a.stateNode===n){var l=jc((n[St]||null).action),o=i.submitter;o&&(e=(e=o[St]||null)?jc(e.formAction):o.getAttribute("formAction"),e!==null&&(l=e,o=null));var s=new Hl("action","action",null,i,n);t.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ke!==0){var r=o?Gc(n,o):new FormData(n);Bs(a,{pending:!0,data:r,method:n.method,action:l},null,r)}}else typeof l=="function"&&(s.preventDefault(),r=o?Gc(n,o):new FormData(n),Bs(a,{pending:!0,data:r,method:n.method,action:l},l,r))},currentTarget:n}]})}}for(Kn=0;Kn<xs.length;Kn++)qn=xs[Kn],Kc=qn.toLowerCase(),qc=qn[0].toUpperCase()+qn.slice(1),Wt(Kc,"on"+qc);var qn,Kc,qc,Kn;Wt(Yd,"onAnimationEnd");Wt(Vd,"onAnimationIteration");Wt(Zd,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(ph,"onTransitionRun");Wt(hh,"onTransitionStart");Wt(gh,"onTransitionCancel");Wt(Xd,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ya("onBeforeInput",["compositionend","keypress","textInput","paste"]);ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nn));function Ep(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],n=i.event;i=i.listeners;t:{var l=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],r=s.instance,d=s.currentTarget;if(s=s.listener,r!==l&&n.isPropagationStopped())break t;l=s,n.currentTarget=d;try{l(n)}catch(g){ul(g)}n.currentTarget=null,l=r}else for(o=0;o<i.length;o++){if(s=i[o],r=s.instance,d=s.currentTarget,s=s.listener,r!==l&&n.isPropagationStopped())break t;l=s,n.currentTarget=d;try{l(n)}catch(g){ul(g)}n.currentTarget=null,l=r}}}}function A(t,e){var a=e[cs];a===void 0&&(a=e[cs]=new Set);var i=t+"__bubble";a.has(i)||(Np(e,t,2,!1),a.add(i))}function Po(t,e,a){var i=0;e&&(i|=4),Np(a,t,i,e)}var Yn="_reactListening"+Math.random().toString(36).slice(2);function Gr(t){if(!t[Yn]){t[Yn]=!0,Td.forEach(function(a){a!=="selectionchange"&&(Wh.has(a)||Po(a,!1,t),Po(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yn]||(e[Yn]=!0,Po("selectionchange",!1,e))}}function Np(t,e,a,i){switch(Xp(e)){case 2:var n=Tg;break;case 8:n=zg;break;default:n=Vr}a=n.bind(null,e,a,t),n=void 0,!gs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function $o(t,e,a,i,n){var l=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=i.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=Ha(s),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){i=l=o;continue t}s=s.parentNode}}i=i.return}Ed(function(){var d=l,g=nr(a),u=[];t:{var p=Qd.get(t);if(p!==void 0){var b=Hl,y=t;switch(t){case"keypress":if(Fn(a)===0)break t;case"keydown":case"keyup":b=Z1;break;case"focusin":y="focus",b=Oo;break;case"focusout":y="blur",b=Oo;break;case"beforeblur":case"afterblur":b=Oo;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ff;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=N1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=J1;break;case Yd:case Vd:case Zd:b=L1;break;case Xd:b=W1;break;case"scroll":case"scrollend":b=O1;break;case"wheel":b=P1;break;case"copy":case"cut":case"paste":b=U1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=If;break;case"toggle":case"beforetoggle":b=th}var x=(e&4)!==0,S=!x&&(t==="scroll"||t==="scrollend"),c=x?p!==null?p+"Capture":null:p;x=[];for(var f=d,h;f!==null;){var m=f;if(h=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||h===null||c===null||(m=Fi(f,c),m!=null&&x.push(ln(f,m,h))),S)break;f=f.return}0<x.length&&(p=new b(p,y,null,a,g),u.push({event:p,listeners:x}))}}if((e&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",p&&a!==hs&&(y=a.relatedTarget||a.fromElement)&&(Ha(y)||y[di]))break t;if((b||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,b?(y=a.relatedTarget||a.toElement,b=d,y=y?Ha(y):null,y!==null&&(S=fn(y),x=y.tag,y!==S||x!==5&&x!==27&&x!==6)&&(y=null)):(b=null,y=d),b!==y)){if(x=Ff,m="onMouseLeave",c="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(x=If,m="onPointerLeave",c="onPointerEnter",f="pointer"),S=b==null?p:Ei(b),h=y==null?p:Ei(y),p=new x(m,f+"leave",b,a,g),p.target=S,p.relatedTarget=h,m=null,Ha(g)===d&&(x=new x(c,f+"enter",y,a,g),x.target=h,x.relatedTarget=S,m=x),S=m,b&&y)e:{for(x=Ih,c=b,f=y,h=0,m=c;m;m=x(m))h++;m=0;for(var k=f;k;k=x(k))m++;for(;0<h-m;)c=x(c),h--;for(;0<m-h;)f=x(f),m--;for(;h--;){if(c===f||f!==null&&c===f.alternate){x=c;break e}c=x(c),f=x(f)}x=null}else x=null;b!==null&&Yc(u,p,b,x,!1),y!==null&&S!==null&&Yc(u,S,y,x,!0)}}t:{if(p=d?Ei(d):window,b=p.nodeName&&p.nodeName.toLowerCase(),b==="select"||b==="input"&&p.type==="file")var N=ec;else if(tc(p))if(Ud)N=ch;else{N=rh;var w=sh}else b=p.nodeName,!b||b.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?d&&ir(d.elementType)&&(N=ec):N=fh;if(N&&(N=N(t,d))){Hd(u,N,a,g);break t}w&&w(t,p,d),t==="focusout"&&d&&p.type==="number"&&d.memoizedProps.value!=null&&ps(p,"number",p.value)}switch(w=d?Ei(d):window,t){case"focusin":(tc(w)||w.contentEditable==="true")&&(Ga=w,bs=d,Hi=null);break;case"focusout":Hi=bs=Ga=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,lc(u,a,g);break;case"selectionchange":if(uh)break;case"keydown":case"keyup":lc(u,a,g)}var M;if(sr)t:{switch(t){case"compositionstart":var B="onCompositionStart";break t;case"compositionend":B="onCompositionEnd";break t;case"compositionupdate":B="onCompositionUpdate";break t}B=void 0}else ja?Dd(t,a)&&(B="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(B="onCompositionStart");B&&(_d&&a.locale!=="ko"&&(ja||B!=="onCompositionStart"?B==="onCompositionEnd"&&ja&&(M=Nd()):(Ue=g,lr="value"in Ue?Ue.value:Ue.textContent,ja=!0)),w=Rl(d,B),0<w.length&&(B=new Wf(B,t,null,a,g),u.push({event:B,listeners:w}),M?B.data=M:(M=Ld(a),M!==null&&(B.data=M)))),(M=ah?ih(t,a):nh(t,a))&&(B=Rl(d,"onBeforeInput"),0<B.length&&(w=new Wf("onBeforeInput","beforeinput",null,a,g),u.push({event:w,listeners:B}),w.data=M)),Fh(u,t,d,a,g)}Ep(u,e)})}function ln(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Rl(t,e){for(var a=e+"Capture",i=[];t!==null;){var n=t,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=Fi(t,a),n!=null&&i.unshift(ln(t,n,l)),n=Fi(t,e),n!=null&&i.push(ln(t,n,l))),t.tag===3)return i;t=t.return}return[]}function Ih(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yc(t,e,a,i,n){for(var l=e._reactName,o=[];a!==null&&a!==i;){var s=a,r=s.alternate,d=s.stateNode;if(s=s.tag,r!==null&&r===i)break;s!==5&&s!==26&&s!==27||d===null||(r=d,n?(d=Fi(a,l),d!=null&&o.unshift(ln(a,d,r))):n||(d=Fi(a,l),d!=null&&o.push(ln(a,d,r)))),a=a.return}o.length!==0&&t.push({event:e,listeners:o})}var Ph=/\r\n?/g,$h=/\u0000|\uFFFD/g;function Vc(t){return(typeof t=="string"?t:""+t).replace(Ph,`
`).replace($h,"")}function _p(t,e){return e=Vc(e),Vc(t)===e}function j(t,e,a,i,n,l){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ai(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ai(t,""+i);break;case"className":En(t,"class",i);break;case"tabIndex":En(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":En(t,a,i);break;case"style":Od(t,i,l);break;case"data":if(e!=="object"){En(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Qn(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(e!=="input"&&j(t,e,"name",n.name,n,null),j(t,e,"formEncType",n.formEncType,n,null),j(t,e,"formMethod",n.formMethod,n,null),j(t,e,"formTarget",n.formTarget,n,null)):(j(t,e,"encType",n.encType,n,null),j(t,e,"method",n.method,n,null),j(t,e,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Qn(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=be);break;case"onScroll":i!=null&&A("scroll",t);break;case"onScrollEnd":i!=null&&A("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(v(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(v(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=Qn(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":A("beforetoggle",t),A("toggle",t),Xn(t,"popover",i);break;case"xlinkActuate":re(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":re(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":re(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":re(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":re(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":re(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":re(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":re(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":re(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Xn(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=R1.get(a)||a,Xn(t,a,i))}}function Ks(t,e,a,i,n,l){switch(a){case"style":Od(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(v(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(v(60));t.innerHTML=a}}break;case"children":typeof i=="string"?ai(t,i):(typeof i=="number"||typeof i=="bigint")&&ai(t,""+i);break;case"onScroll":i!=null&&A("scroll",t);break;case"onScrollEnd":i!=null&&A("scrollend",t);break;case"onClick":i!=null&&(t.onclick=be);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zd.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),l=t[St]||null,l=l!=null?l[a]:null,typeof l=="function"&&t.removeEventListener(e,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,n);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):Xn(t,a,i)}}}function pt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":A("error",t),A("load",t);var i=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,e));default:j(t,e,l,o,a,null)}}n&&j(t,e,"srcSet",a.srcSet,a,null),i&&j(t,e,"src",a.src,a,null);return;case"input":A("invalid",t);var s=l=o=n=null,r=null,d=null;for(i in a)if(a.hasOwnProperty(i)){var g=a[i];if(g!=null)switch(i){case"name":n=g;break;case"type":o=g;break;case"checked":r=g;break;case"defaultChecked":d=g;break;case"value":l=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(v(137,e));break;default:j(t,e,i,g,a,null)}}Ad(t,l,s,r,d,o,n,!1);return;case"select":A("invalid",t),i=o=l=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":l=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:j(t,e,n,s,a,null)}e=l,a=o,t.multiple=!!i,e!=null?Ja(t,!!i,e,!1):a!=null&&Ja(t,!!i,a,!0);return;case"textarea":A("invalid",t),l=n=i=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":i=s;break;case"defaultValue":n=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(v(91));break;default:j(t,e,o,s,a,null)}Bd(t,i,n,l);return;case"option":for(r in a)a.hasOwnProperty(r)&&(i=a[r],i!=null)&&(r==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":j(t,e,r,i,a,null));return;case"dialog":A("beforetoggle",t),A("toggle",t),A("cancel",t),A("close",t);break;case"iframe":case"object":A("load",t);break;case"video":case"audio":for(i=0;i<nn.length;i++)A(nn[i],t);break;case"image":A("error",t),A("load",t);break;case"details":A("toggle",t);break;case"embed":case"source":case"link":A("error",t),A("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(i=a[d],i!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,e));default:j(t,e,d,i,a,null)}return;default:if(ir(e)){for(g in a)a.hasOwnProperty(g)&&(i=a[g],i!==void 0&&Ks(t,e,g,i,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(i=a[s],i!=null&&j(t,e,s,i,a,null))}function tg(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,o=null,s=null,r=null,d=null,g=null;for(b in a){var u=a[b];if(a.hasOwnProperty(b)&&u!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":r=u;default:i.hasOwnProperty(b)||j(t,e,b,null,i,u)}}for(var p in i){var b=i[p];if(u=a[p],i.hasOwnProperty(p)&&(b!=null||u!=null))switch(p){case"type":l=b;break;case"name":n=b;break;case"checked":d=b;break;case"defaultChecked":g=b;break;case"value":o=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(v(137,e));break;default:b!==u&&j(t,e,p,b,i,u)}}us(t,o,s,r,d,g,l,n);return;case"select":b=o=s=p=null;for(l in a)if(r=a[l],a.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":b=r;default:i.hasOwnProperty(l)||j(t,e,l,null,i,r)}for(n in i)if(l=i[n],r=a[n],i.hasOwnProperty(n)&&(l!=null||r!=null))switch(n){case"value":p=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:l!==r&&j(t,e,n,l,i,r)}e=s,a=o,i=b,p!=null?Ja(t,!!a,p,!1):!!i!=!!a&&(e!=null?Ja(t,!!a,e,!0):Ja(t,!!a,a?[]:"",!1));return;case"textarea":b=p=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:j(t,e,s,null,i,n)}for(o in i)if(n=i[o],l=a[o],i.hasOwnProperty(o)&&(n!=null||l!=null))switch(o){case"value":p=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(v(91));break;default:n!==l&&j(t,e,o,n,i,l)}Rd(t,p,b);return;case"option":for(var y in a)p=a[y],a.hasOwnProperty(y)&&p!=null&&!i.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:j(t,e,y,null,i,p));for(r in i)p=i[r],b=a[r],i.hasOwnProperty(r)&&p!==b&&(p!=null||b!=null)&&(r==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":j(t,e,r,p,i,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in a)p=a[x],a.hasOwnProperty(x)&&p!=null&&!i.hasOwnProperty(x)&&j(t,e,x,null,i,p);for(d in i)if(p=i[d],b=a[d],i.hasOwnProperty(d)&&p!==b&&(p!=null||b!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(v(137,e));break;default:j(t,e,d,p,i,b)}return;default:if(ir(e)){for(var S in a)p=a[S],a.hasOwnProperty(S)&&p!==void 0&&!i.hasOwnProperty(S)&&Ks(t,e,S,void 0,i,p);for(g in i)p=i[g],b=a[g],!i.hasOwnProperty(g)||p===b||p===void 0&&b===void 0||Ks(t,e,g,p,i,b);return}}for(var c in a)p=a[c],a.hasOwnProperty(c)&&p!=null&&!i.hasOwnProperty(c)&&j(t,e,c,null,i,p);for(u in i)p=i[u],b=a[u],!i.hasOwnProperty(u)||p===b||p==null&&b==null||j(t,e,u,p,i,b)}function Zc(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eg(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],l=n.transferSize,o=n.initiatorType,s=n.duration;if(l&&s&&Zc(o)){for(o=0,s=n.responseEnd,i+=1;i<a.length;i++){var r=a[i],d=r.startTime;if(d>s)break;var g=r.transferSize,u=r.initiatorType;g&&Zc(u)&&(r=r.responseEnd,o+=g*(r<s?1:(s-d)/(r-d)))}if(--i,e+=8*(l+o)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qs=null,Ys=null;function Bl(t){return t.nodeType===9?t:t.ownerDocument}function Xc(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Vs(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ts=null;function ag(){var t=window.event;return t&&t.type==="popstate"?t===ts?!1:(ts=t,!0):(ts=null,!1)}var Lp=typeof setTimeout=="function"?setTimeout:void 0,ig=typeof clearTimeout=="function"?clearTimeout:void 0,Qc=typeof Promise=="function"?Promise:void 0,ng=typeof queueMicrotask=="function"?queueMicrotask:typeof Qc!="undefined"?function(t){return Qc.resolve(null).then(t).catch(lg)}:Lp;function lg(t){setTimeout(function(){throw t})}function aa(t){return t==="head"}function Jc(t,e){var a=e,i=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){t.removeChild(n),ci(e);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Qi(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Qi(a);for(var l=a.firstChild;l;){var o=l.nextSibling,s=l.nodeName;l[pn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&Qi(t.ownerDocument.body);a=n}while(a);ci(e)}function Fc(t,e){var a=t;t=0;do{var i=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=i}while(a)}function Zs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zs(a),ar(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function og(t,e,a,i){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[pn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=Zt(t.nextSibling),t===null)break}return null}function sg(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Zt(t.nextSibling),t===null))return null;return t}function Hp(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Zt(t.nextSibling),t===null))return null;return t}function Xs(t){return t.data==="$?"||t.data==="$~"}function Qs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function rg(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Js=null;function Wc(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Zt(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Ic(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Up(t,e,a){switch(e=Bl(a),t){case"html":if(t=e.documentElement,!t)throw Error(v(452));return t;case"head":if(t=e.head,!t)throw Error(v(453));return t;case"body":if(t=e.body,!t)throw Error(v(454));return t;default:throw Error(v(451))}}function Qi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ar(t)}var Xt=new Map,Pc=new Set;function Ol(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ce=L.d;L.d={f:fg,r:cg,D:dg,C:ug,L:pg,m:hg,X:bg,S:gg,M:mg};function fg(){var t=Ce.f(),e=Jl();return t||e}function cg(t){var e=ui(t);e!==null&&e.tag===5&&e.type==="form"?Ou(e):Ce.r(t)}var bi=typeof document=="undefined"?null:document;function jp(t,e,a){var i=bi;if(i&&typeof e=="string"&&e){var n=Kt(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Pc.has(n)||(Pc.add(n),t={rel:t,crossOrigin:a,href:e},i.querySelector(n)===null&&(e=i.createElement("link"),pt(e,"link",t),st(e),i.head.appendChild(e)))}}function dg(t){Ce.D(t),jp("dns-prefetch",t,null)}function ug(t,e){Ce.C(t,e),jp("preconnect",t,e)}function pg(t,e,a){Ce.L(t,e,a);var i=bi;if(i&&t&&e){var n='link[rel="preload"][as="'+Kt(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Kt(a.imageSizes)+'"]')):n+='[href="'+Kt(t)+'"]';var l=n;switch(e){case"style":l=fi(t);break;case"script":l=mi(t)}Xt.has(l)||(t=Q({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Xt.set(l,t),i.querySelector(n)!==null||e==="style"&&i.querySelector(yn(l))||e==="script"&&i.querySelector(vn(l))||(e=i.createElement("link"),pt(e,"link",t),st(e),i.head.appendChild(e)))}}function hg(t,e){Ce.m(t,e);var a=bi;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Kt(i)+'"][href="'+Kt(t)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=mi(t)}if(!Xt.has(l)&&(t=Q({rel:"modulepreload",href:t},e),Xt.set(l,t),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vn(l)))return}i=a.createElement("link"),pt(i,"link",t),st(i),a.head.appendChild(i)}}}function gg(t,e,a){Ce.S(t,e,a);var i=bi;if(i&&t){var n=Qa(i).hoistableStyles,l=fi(t);e=e||"default";var o=n.get(l);if(!o){var s={loading:0,preload:null};if(o=i.querySelector(yn(l)))s.loading=5;else{t=Q({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Xt.get(l))&&Kr(t,a);var r=o=i.createElement("link");st(r),pt(r,"link",t),r._p=new Promise(function(d,g){r.onload=d,r.onerror=g}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,il(o,e,i)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(l,o)}}}function bg(t,e){Ce.X(t,e);var a=bi;if(a&&t){var i=Qa(a).hoistableScripts,n=mi(t),l=i.get(n);l||(l=a.querySelector(vn(n)),l||(t=Q({src:t,async:!0},e),(e=Xt.get(n))&&qr(t,e),l=a.createElement("script"),st(l),pt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function mg(t,e){Ce.M(t,e);var a=bi;if(a&&t){var i=Qa(a).hoistableScripts,n=mi(t),l=i.get(n);l||(l=a.querySelector(vn(n)),l||(t=Q({src:t,async:!0,type:"module"},e),(e=Xt.get(n))&&qr(t,e),l=a.createElement("script"),st(l),pt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function $c(t,e,a,i){var n=(n=qe.current)?Ol(n):null;if(!n)throw Error(v(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=fi(a.href),a=Qa(n).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fi(a.href);var l=Qa(n).hoistableStyles,o=l.get(t);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,o),(l=n.querySelector(yn(t)))&&!l._p&&(o.instance=l,o.state.loading=5),Xt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(t,a),l||xg(n,t,a,o.state))),e&&i===null)throw Error(v(528,""));return o}if(e&&i!==null)throw Error(v(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=mi(a),a=Qa(n).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,t))}}function fi(t){return'href="'+Kt(t)+'"'}function yn(t){return'link[rel="stylesheet"]['+t+"]"}function Gp(t){return Q({},t,{"data-precedence":t.precedence,precedence:null})}function xg(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),pt(e,"link",a),st(e),t.head.appendChild(e))}function mi(t){return'[src="'+Kt(t)+'"]'}function vn(t){return"script[async]"+t}function td(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Kt(a.href)+'"]');if(i)return e.instance=i,st(i),i;var n=Q({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),st(i),pt(i,"style",n),il(i,a.precedence,t),e.instance=i;case"stylesheet":n=fi(a.href);var l=t.querySelector(yn(n));if(l)return e.state.loading|=4,e.instance=l,st(l),l;i=Gp(a),(n=Xt.get(n))&&Kr(i,n),l=(t.ownerDocument||t).createElement("link"),st(l);var o=l;return o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(l,"link",i),e.state.loading|=4,il(l,a.precedence,t),e.instance=l;case"script":return l=mi(a.src),(n=t.querySelector(vn(l)))?(e.instance=n,st(n),n):(i=a,(n=Xt.get(l))&&(i=Q({},a),qr(i,n)),t=t.ownerDocument||t,n=t.createElement("script"),st(n),pt(n,"link",i),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(v(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,il(i,a.precedence,t));return e.instance}function il(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,o=0;o<i.length;o++){var s=i[o];if(s.dataset.precedence===e)l=s;else if(l!==n)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Kr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function qr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var nl=null;function ed(t,e,a){if(nl===null){var i=new Map,n=nl=new Map;n.set(a,i)}else n=nl,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var l=a[n];if(!(l[pn]||l[ct]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(e)||"";o=t+o;var s=i.get(o);s?s.push(l):i.set(o,[l])}}return i}function ad(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function yg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Kp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function vg(t,e,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=fi(i.href),l=e.querySelector(yn(n));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=El.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=l,st(l);return}l=e.ownerDocument||e,i=Gp(i),(n=Xt.get(n))&&Kr(i,n),l=l.createElement("link"),st(l);var o=l;o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(l,"link",i),a.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=El.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var es=0;function wg(t,e){return t.stylesheets&&t.count===0&&ll(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var i=setTimeout(function(){if(t.stylesheets&&ll(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&es===0&&(es=62500*eg());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ll(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>es?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function El(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ll(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Nl=null;function ll(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Nl=new Map,e.forEach(kg,t),Nl=null,El.call(t))}function kg(t,e){if(!(e.state.loading&4)){var a=Nl.get(t);if(a)var i=a.get(null);else{a=new Map,Nl.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var o=n[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}n=e.instance,o=n.getAttribute("data-precedence"),l=a.get(o)||i,l===i&&a.set(null,n),a.set(o,n),this.count++,i=El.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var on={$$typeof:ge,Provider:null,Consumer:null,_currentValue:fa,_currentValue2:fa,_threadCount:0};function Sg(t,e,a,i,n,l,o,s,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.hiddenUpdates=Mo(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function qp(t,e,a,i,n,l,o,s,r,d,g,u){return t=new Sg(t,e,a,o,r,d,g,u,s),e=1,l===!0&&(e|=24),l=Mt(3,null,null,e),t.current=l,l.stateNode=t,e=hr(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:e},mr(l),t}function Yp(t){return t?(t=Ya,t):Ya}function Vp(t,e,a,i,n,l){n=Yp(n),i.context===null?i.context=n:i.pendingContext=n,i=Ve(e),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=Ze(t,i,e),a!==null&&(kt(a,t,e),ji(a,t,e))}function id(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Yr(t,e){id(t,e),(t=t.alternate)&&id(t,e)}function Zp(t){if(t.tag===13||t.tag===31){var e=ka(t,67108864);e!==null&&kt(e,t,67108864),Yr(t,67108864)}}function nd(t){if(t.tag===13||t.tag===31){var e=Et();e=tr(e);var a=ka(t,e);a!==null&&kt(a,t,e),Yr(t,e)}}var _l=!0;function Tg(t,e,a,i){var n=T.T;T.T=null;var l=L.p;try{L.p=2,Vr(t,e,a,i)}finally{L.p=l,T.T=n}}function zg(t,e,a,i){var n=T.T;T.T=null;var l=L.p;try{L.p=8,Vr(t,e,a,i)}finally{L.p=l,T.T=n}}function Vr(t,e,a,i){if(_l){var n=Fs(i);if(n===null)$o(t,e,i,Dl,a),ld(t,i);else if(Mg(n,t,e,a,i))i.stopPropagation();else if(ld(t,i),e&4&&-1<Cg.indexOf(t)){for(;n!==null;){var l=ui(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=oa(l.pendingLanes);if(o!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var r=1<<31-Ot(o);s.entanglements[1]|=r,o&=~r}le(l),(D&6)===0&&(Tl=Rt()+500,xn(0,!1))}}break;case 31:case 13:s=ka(l,2),s!==null&&kt(s,l,2),Jl(),Yr(l,2)}if(l=Fs(i),l===null&&$o(t,e,i,Dl,a),l===n)break;n=l}n!==null&&i.stopPropagation()}else $o(t,e,i,null,a)}}function Fs(t){return t=nr(t),Zr(t)}var Dl=null;function Zr(t){if(Dl=null,t=Ha(t),t!==null){var e=fn(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=dd(e),t!==null)return t;t=null}else if(a===31){if(t=ud(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Dl=t,null}function Xp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p1()){case bd:return 2;case md:return 8;case cl:case h1:return 32;case xd:return 268435456;default:return 32}default:return 32}}var Ws=!1,Je=null,Fe=null,We=null,sn=new Map,rn=new Map,Le=[],Cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ld(t,e){switch(t){case"focusin":case"focusout":Je=null;break;case"dragenter":case"dragleave":Fe=null;break;case"mouseover":case"mouseout":We=null;break;case"pointerover":case"pointerout":sn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rn.delete(e.pointerId)}}function Ai(t,e,a,i,n,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},e!==null&&(e=ui(e),e!==null&&Zp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Mg(t,e,a,i,n){switch(e){case"focusin":return Je=Ai(Je,t,e,a,i,n),!0;case"dragenter":return Fe=Ai(Fe,t,e,a,i,n),!0;case"mouseover":return We=Ai(We,t,e,a,i,n),!0;case"pointerover":var l=n.pointerId;return sn.set(l,Ai(sn.get(l)||null,t,e,a,i,n)),!0;case"gotpointercapture":return l=n.pointerId,rn.set(l,Ai(rn.get(l)||null,t,e,a,i,n)),!0}return!1}function Qp(t){var e=Ha(t.target);if(e!==null){var a=fn(e);if(a!==null){if(e=a.tag,e===13){if(e=dd(a),e!==null){t.blockedOn=e,qf(t.priority,function(){nd(a)});return}}else if(e===31){if(e=ud(a),e!==null){t.blockedOn=e,qf(t.priority,function(){nd(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Fs(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);hs=i,a.target.dispatchEvent(i),hs=null}else return e=ui(a),e!==null&&Zp(e),t.blockedOn=a,!1;e.shift()}return!0}function od(t,e,a){ol(t)&&a.delete(e)}function Ag(){Ws=!1,Je!==null&&ol(Je)&&(Je=null),Fe!==null&&ol(Fe)&&(Fe=null),We!==null&&ol(We)&&(We=null),sn.forEach(od),rn.forEach(od)}function Vn(t,e){t.blockedOn===e&&(t.blockedOn=null,Ws||(Ws=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Ag)))}var Zn=null;function sd(t){Zn!==t&&(Zn=t,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,function(){Zn===t&&(Zn=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],n=t[e+2];if(typeof i!="function"){if(Zr(i||a)===null)continue;break}var l=ui(a);l!==null&&(t.splice(e,3),e-=3,Bs(l,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function ci(t){function e(r){return Vn(r,t)}Je!==null&&Vn(Je,t),Fe!==null&&Vn(Fe,t),We!==null&&Vn(We,t),sn.forEach(e),rn.forEach(e);for(var a=0;a<Le.length;a++){var i=Le[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Le.length&&(a=Le[0],a.blockedOn===null);)Qp(a),a.blockedOn===null&&Le.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],l=a[i+1],o=n[St]||null;if(typeof l=="function")o||sd(a);else if(o){var s=null;if(l&&l.hasAttribute("formAction")){if(n=l,o=l[St]||null)s=o.formAction;else if(Zr(n)!==null)continue}else s=o.action;typeof s=="function"?a[i+1]=s:(a.splice(i,3),i-=3),sd(a)}}}function Jp(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Xr(t){this._internalRoot=t}Il.prototype.render=Xr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(v(409));var a=e.current,i=Et();Vp(a,i,t,e,null,null)};Il.prototype.unmount=Xr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vp(t.current,2,null,t,null,null),Jl(),e[di]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sd();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Le.length&&e!==0&&e<Le[a].priority;a++);Le.splice(a,0,t),a===0&&Qp(t)}};var rd=fd.version;if(rd!=="19.2.8")throw Error(v(527,rd,"19.2.8"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=o1(e),t=t!==null?pd(t):null,t=t===null?null:t.stateNode,t};var Rg={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ri.isDisabled&&Ri.supportsFiber))try{cn=Ri.inject(Rg),Bt=Ri}catch{}var Ri;Pl.createRoot=function(t,e){if(!cd(t))throw Error(v(299));var a=!1,i="",n=ju,l=Gu,o=Ku;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=qp(t,1,!1,null,null,a,i,null,n,l,o,Jp),t[di]=e.current,Gr(t),new Xr(e)};Pl.hydrateRoot=function(t,e,a){if(!cd(t))throw Error(v(299));var i=!1,n="",l=ju,o=Gu,s=Ku,r=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),e=qp(t,1,!0,e,a!=null?a:null,i,n,r,l,o,s,Jp),e.context=Yp(null),a=e.current,i=Et(),i=tr(i),n=Ve(i),n.callback=null,Ze(a,n,i),a=i,e.current.lanes=a,un(e,a),le(e),t[di]=e.current,Gr(t),new Il(e)};Pl.version="19.2.8"});var Pp=Pt((kb,Ip)=>{"use strict";function Wp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wp)}catch(t){console.error(t)}}Wp(),Ip.exports=Fp()});var Ir=Pt((Nb,h0)=>{var Jr=[["Plush Pepe",2448,6300],["Algorithm Cup",0,1450],["Intelligence Cup",0,1224],["Heart Locket",1305,1189],["Resistance Dog",0,633.1],["Durov's Cap",3029,404],["Scared Cat",13986,274],["Precious Peach",2112,244.2],["Heroic Helmet",1258,172.9],["Durov's Glasses",148,156.1],["Mighty Arm",1769,127.9],["Loot Bag",6429,120.6],["Astral Shard",2889,118],["Nail Bracelet",1832,114.4],["Westside Sign",5186,108.5],["Perfume Bottle",2106,76.5],["Mini Oscar",2108,70.3],["Artisan Brick",2852,68],["Ion Gem",2615,66.1],["Gem Signet",2104,60.4],["Magic Potion",3277,58.2],["Low Rider",6519,57.9],["Swiss Watch",10480,56],["Sharp Tongue",3793,46.4],["Kissed Frog",7508,43.5],["Bonded Ring",2847,42.5],["Vintage Cigar",8528,37.7],["Voodoo Doll",10752,37],["Neko Helmet",4002,36.5],["Genie Lamp",2623,36],["Toy Bear",29142,35],["Signet Ring",7099,32.1],["Diamond Ring",8179,31.7],["Electric Skull",4191,28.5],["Rare Bird",3348,27.4],["Bling Binky",1959,26.3],["Eternal Rose",5403,25.6],["Khabib's Papakha",3143,23.5],["Cupid Charm",5569,21],["Lucky Locket",0,18.9],["Sky Stilettos",5542,18.3],["Mad Pumpkin",6426,17],["Trapped Heart",9566,16.4],["UFC Strike",5984,15.5],["Snoop Cigar",17056,14.9],["Ionic Dryer",2455,14.5],["Love Potion",6420,14.1],["Crystal Ball",8004,13.1],["Flying Broom",6536,12.7],["Valentine Box",3559,12.4],["Skull Flower",6856,12.3],["Record Player",5214,11.9],["Sakura Flower",13339,10.8],["Love Candle",3012,10.7],["Jingle Bells",7965,10],["Top Hat",8191,9.82],["Hanging Star",6488,9.44],["Berry Box",8623,8.96],["Sleigh Bell",3996,8.5],["Fine Pen",0,8.23],["Bunny Muffin",6223,8.2],["Evil Eye",17803,8.03],["Snow Mittens",4684,7.91],["Joyful Bundle",3568,7.8],["Jelly Bunny",13367,7.63],["Jolly Chimp",13658,6.98],["Light Sword",16012,6.42],["Surge Board",1756,6.24],["Input Key",13025,6.17],["Witch Hat",30548,6.12],["Moon Pendant",12531,6.01],["Eternal Candle",11919,6],["Desk Calendar",32423,5.99],["Lush Bouquet",5797,5.99],["Snow Globe",5979,5.92],["Santa Hat",11705,5.9],["Spy Agaric",28563,5.72],["Faith Amulet",10892,5.49],["Spring Basket",11605,5.49],["Snoop Dogg",52945,5.43],["Restless Jar",8729,5.26],["Pretty Posy",4797,5.25],["Bow Tie",8092,5.1],["Swag Bag",19313,5.09],["Homemade Cake",32643,5.04],["Mousse Cake",6669,5],["Liberty Figure",12499,4.98],["Stellar Rocket",15504,4.9],["Cookie Heart",12779,4.88],["Money Pot",8661,4.82],["Jack-in-the-Box",15807,4.74],["Clover Pin",17449,4.69],["Hex Pot",14095,4.65],["B-Day Candle",23201,4.64],["Party Sparkler",20446,4.64],["Winter Wreath",8926,4.5],["Ginger Cookie",16858,4.47],["Timeless Book",6986,4.45],["Victory Medal",13289,4.41],["Mirage Lamp",0,4.31],["Star Notepad",8443,4.31],["Spiced Wine",11682,4.21],["Fresh Socks",10667,4.2],["Mood Pack",12462,4.15],["Holiday Drink",5923,4.14],["Happy Brownie",9989,4.08],["Hypno Lollipop",8343,4.01],["Jester Hat",11969,3.92],["Easter Egg",25973,3.88],["Pet Snake",10382,3.88],["Tama Gadget",10412,3.86],["Candy Cane",14703,3.83],["Ice Cream",32806,3.8],["Whip Cupcake",13270,3.75],["Big Year",11544,3.74],["Vice Cream",37569,3.73],["Pool Float",12397,3.71],["Snake Box",8755,3.71],["Instant Ramen",21613,3.7],["Lunar Snake",16883,3.7],["Xmas Stocking",13526,3.7],["Chill Flame",35999,3.68],["Lol Pop",65396,3.67]],Gg="/_blob/a64ccb23ba5a5ab0f1f789ab412cf3af",Kg={"B-Day Candle":"/_blob/ac9e83f513d62d0c7fc3250c8a2d1f89","Lol Pop":"/_blob/1f689ff254757e970266197964c5d390","Desk Calendar":"/_blob/9b7049b84c84b25ce8e457f56c837c42","Hypno Lollipop":"/_blob/b4c8d4f914ed6e253c933045ab9e3461","Jingle Bells":"/_blob/808ef5efdbeb6b276f70430b220f760b","Homemade Cake":"/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d","Snow Globe":"/_blob/6e3628fac94b5266f3b64cea9c5fe7ee","Berry Box":"/_blob/c2c0de4f1d0a4ed1dd2df84eff4c7f73","Bunny Muffin":"/_blob/45ac385132ce7b83da133306d9a330f8","Record Player":"/_blob/8f4c023d08704d2319e54c9872a8c46d","Top Hat":"/_blob/fe01a5a2d2ff76e0192e008ed6267558","Diamond Ring":"/_blob/ef580f1649ad89b5e268954da6ea30b2","Love Potion":"/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65","Eternal Rose":"/_blob/734e25b54462cda990767f69381d8355","Toy Bear":"/_blob/c02bc9477e447f6f71962df1fc7a399a","Signet Ring":"/_blob/4826a2db621709393534f8feae3d3f4a","Swiss Watch":"/_blob/5efc0b426406d53e3b649c727079f26d","Ion Gem":"/_blob/e562d84d61312007f5108ab64cbfe6f9","Precious Peach":"/_blob/923c4583ef32f1e6549c08d5a1839d4c","Durov's Cap":"/_blob/500977bc4572974cf066e4c08b276369"},f0=.011,Fr=[["Heart",15,"\u{1F49D}"],["Teddy Bear",15,"\u{1F9F8}"],["Gift Box",25,"\u{1F381}"],["Rose",25,"\u{1F339}"],["Cake",50,"\u{1F382}"],["Bouquet",50,"\u{1F490}"],["Trophy",100,"\u{1F3C6}"],["Ring",100,"\u{1F48D}"],["Diamond",100,"\u{1F48E}"]],Ta={};Fr.forEach(function(t){Ta[t[0]]={name:t[0],stars:t[1],emoji:t[2],price:Math.round(t[1]*f0*100)/100}});var c0={cake:"Homemade Cake",globe:"Snow Globe",record:"Record Player",rose:"Eternal Rose",bear:"Toy Bear",lpotion:"Love Potion",bells:"Jingle Bells",signet:"Signet Ring"};function qg(t){for(var e=2166136261,a=0;a<t.length;a++)e^=t.charCodeAt(a),e=Math.imul(e,16777619);return e^=e>>>13,e=Math.imul(e,1540483477),e^=e>>>15,(e>>>0)/4294967296}function d0(t){return Math.floor(((t||Date.now())+3*3600*1e3)/864e5)}function Yg(t){return Math.max(1.5,Math.round(2*Math.pow(65396/t,1.1)*100)/100)}function u0(t,e,a){return Math.round(e*(1+(qg(t+":"+a)*2-1)*.03)*100)/100}var $l={};Jr.forEach(function(t){$l[t[0]]=t[2]||Yg(t[1])});function p0(t){return t=String(t||""),$l[t]||Ta[t]?t:c0[t]||null}function Vg(t,e){var a=p0(t);return a?Ta[a]?Ta[a].price:u0(a,$l[a],d0(e)):null}function Zg(t){return!!Ta[t]}function Xg(t){return t<5?"#9aa3b5":t<15?"#5fd4ff":t<60?"#c77dff":t<500?"#ff5d73":"#ffc83d"}var Qr={day:-1,list:[]};function Wr(t){var e=d0(t);return Qr.day!==e&&(Qr={day:e,list:Jr.map(function(a){return{name:a[0],price:u0(a[0],$l[a[0]],e)}}).concat(Fr.map(function(a){return{name:a[0],price:Ta[a[0]].price}})).sort(function(a,i){return a.price-i.price||(a.name<i.name?-1:1)})}),Qr.list}function Qg(t,e){for(var a=Wr(e),i=null,n=0;n<a.length&&a[n].price<=t+1e-9;n++)i=a[n];return i}function Jg(t,e){for(var a=Wr(e),i=0;i<a.length;i++)if(a[i].price>t+1e-9)return a[i];return null}h0.exports={RAW:Jr,IMG:Kg,GIFT_IMG:Gg,ALIAS:c0,STAR:Ta,STARS:Fr,STAR_TON:f0,isStar:Zg,canon:p0,priceOf:Vg,rarityColor:Xg,ladder:Wr,bestFor:Qg,nextAbove:Jg}});var m0=Pt((_b,b0)=>{var $r=Ir(),Fg=.9;function to(t){return t>15?.7:.65}var Wg=24*3600*1e3,eo={"TON_0.1":.1,"TON_0.25":.25,"TON_0.5":.5,TON_1:1,TON_3:3},g0=[{id:"s05",cat:"cheap",art:"assets/case-s05.jpg",ratio:"1 / 1",name:"\u041C\u0435\u043B\u043E\u0447\u044C",price:.5,color:"#ff7ab8",dark:"#c4447f",bg:"#2e1022",glow:"rgba(255,122,184,0.9)",edge:"#5a1c3e",opened:0,isNew:!0,pool:["Heart","Teddy Bear","Rose","Gift Box","Cake","Bouquet","Ring","Lol Pop"]},{id:"s1",cat:"cheap",art:"assets/case-s1.jpg",ratio:"1 / 1",name:"\u041F\u043B\u044E\u0448\u0435\u0432\u044B\u0439",price:1,color:"#c98a5a",dark:"#94582e",bg:"#2a1a10",glow:"rgba(201,138,90,0.9)",edge:"#4f3220",opened:0,isNew:!0,pool:["Teddy Bear","Heart","Rose","Cake","Ring","Trophy","Lol Pop","Chill Flame","Ice Cream","B-Day Candle"]},{id:"s2",cat:"cheap",art:"assets/case-s2.jpg",ratio:"1 / 1",name:"\u0421\u043B\u0430\u0434\u043A\u0438\u0439",price:2,color:"#ff9f43",dark:"#c46a12",bg:"#2e1d0c",glow:"rgba(255,159,67,0.9)",edge:"#5a3714",opened:0,isNew:!0,pool:["Cake","Bouquet","Ring","Trophy","Diamond","Lol Pop","Instant Ramen","Candy Cane","Homemade Cake","Snow Globe","Desk Calendar","Jester Hat"]},{id:"s35",cat:"cheap",art:"assets/case-s35.jpg",ratio:"1 / 1",name:"\u041A\u043E\u043B\u0435\u0447\u043A\u043E",price:3.5,color:"#7fd6ff",dark:"#3f9ccc",bg:"#0e2230",glow:"rgba(127,214,255,0.9)",edge:"#1d4560",opened:0,isNew:!0,pool:["Ring","Lol Pop","Candy Cane","Hypno Lollipop","B-Day Candle","Homemade Cake","Snow Globe","Spy Agaric","Light Sword","Jelly Bunny","Bunny Muffin","Berry Box","Top Hat"]},{id:"c1",cat:"mid",art:"assets/case-c1.jpg",name:"\u041A\u0430\u0440\u043C\u0430\u043D\u043D\u0438\u043A",price:5,color:"#2bbf5a",dark:"#1a8a3e",bg:"#10291a",glow:"rgba(43,191,90,0.9)",edge:"#1f4a2c",opened:2591},{id:"c2",cat:"mid",art:"assets/case-c2.jpg",name:"\u041A\u043E\u043D\u0444\u0435\u0442\u043D\u044B\u0439",price:10,color:"#f2c218",dark:"#b88f00",bg:"#2a240c",glow:"rgba(242,194,24,0.9)",edge:"#4a4010",opened:1036,isNew:!0},{id:"c3",cat:"mid",art:"assets/case-c3.jpg",name:"\u041F\u0438\u0440\u0430\u0442\u0441\u043A\u0438\u0439",price:15,color:"#2f86ff",dark:"#1a5ccc",bg:"#0f1d33",glow:"rgba(47,134,255,0.9)",edge:"#1c3560",opened:1554},{id:"c4",cat:"mid",art:"assets/case-c4.jpg",name:"\u041D\u0430\u043B\u0451\u0442\u0447\u0438\u043A",price:25,color:"#ff4d4d",dark:"#c02a2a",bg:"#2e1212",glow:"rgba(255,77,77,0.9)",edge:"#5a2020",opened:2591,isNew:!0},{id:"c5",cat:"exp",art:"assets/case-c5.jpg",name:"\u041C\u0435\u0434\u0432\u0435\u0436\u0430\u0442\u043D\u0438\u043A",price:50,color:"#ff8a1f",dark:"#c45f00",bg:"#2e1c0c",glow:"rgba(255,138,31,0.9)",edge:"#5a3612",opened:5181},{id:"c6",cat:"exp",art:"assets/case-c6.jpg",name:"\u041D\u043E\u0447\u043D\u043E\u0439 \u0440\u0435\u0439\u0434",price:100,color:"#9b5cff",dark:"#6a32d0",bg:"#1d1233",glow:"rgba(155,92,255,0.9)",edge:"#3a2460",opened:311},{id:"c7",cat:"exp",art:"assets/case-c7.jpg",name:"\u0421\u0435\u0439\u0444",price:250,color:"#14c8c8",dark:"#0a8c8c",bg:"#0c2a2a",glow:"rgba(20,200,200,0.9)",edge:"#164a4a",opened:518},{id:"c8",cat:"exp",art:"assets/case-c8.jpg",name:"\u041A\u0440\u0451\u0441\u0442\u043D\u044B\u0439 \u0435\u043D\u043E\u0442",price:500,color:"#ffc83d",dark:"#c79400",bg:"#2e250c",glow:"rgba(255,200,61,0.95)",edge:"#5a4a14",opened:10362},{id:"free",cat:"free",name:"\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439",price:0,free:!0,color:"#5fd4ff",dark:"#2fa0d0",bg:"#0c2430",glow:"rgba(95,212,255,0.9)",edge:"#18465a",opened:8812,pool:["TON_0.1","TON_1"],probs:[.99,.01]},{id:"promo",cat:"free",name:"\u041F\u0440\u043E\u043C\u043E-\u043A\u0435\u0439\u0441",price:0,free:!0,promo:!0,color:"#c77dff",dark:"#8a45d6",bg:"#1d1233",glow:"rgba(199,125,255,0.9)",edge:"#3a2460",opened:0,isNew:!0,pool:["TON_0.1","TON_0.25","TON_0.5","TON_1","TON_3"],probs:[.75,.23,.015,.004,.001]}];function Ig(t){return $r.RAW.map(function(e){return{name:e[0],price:$r.priceOf(e[0],t)}}).sort(function(e,a){return e.price-a.price})}function Pg(t,e){for(var a=e.filter(function(s){return s.price>=.25*t&&s.price<=40*t}),i=12,n=[],l=0;l<i&&l<a.length;l++){var o=Math.round(l*(a.length-1)/Math.max(1,i-1));n.indexOf(a[o].name)===-1&&n.push(a[o].name)}return n}function xi(t,e){return eo[t]!=null?eo[t]:$r.priceOf(t,e)}var Pr={day:-1,map:null};function $g(t){var e=Math.floor(((t||Date.now())+108e5)/864e5);if(Pr.day===e)return Pr.map;var a=Ig(t),i={};return g0.forEach(function(n){var l={id:n.id,price:n.price,free:!!n.free,promo:!!n.promo};if(n.free)l.pool=n.pool.slice(),l.probs=n.probs.slice();else{l.pool=(n.pool||Pg(n.price,a)).filter(function(c){return xi(c,t)!=null});var o=Math.min.apply(null,l.pool.map(function(c){return xi(c,t)}));o>n.price*to(n.price)*.85&&(l.pool=["TON_0.5","TON_1"].filter(function(c){return eo[c]<n.price*to(n.price)}).concat(l.pool));for(var s=l.pool.map(function(c){return xi(c,t)}),r=n.price*to(n.price),d=function(c){var f=0,h=0;return s.forEach(function(m){var k=Math.pow(m,-c);f+=k,h+=k*m}),h/f},g=-5,u=12,p=0;p<80;p++){var b=(g+u)/2;d(b)>r?g=b:u=b}var y=(g+u)/2,x=0,S=s.map(function(c){var f=Math.pow(c,-y);return x+=f,f});l.probs=S.map(function(c){return c/x})}l.top=l.pool.reduce(function(c,f){return!c||xi(f,t)>xi(c,t)?f:c},null),i[l.id]=l}),Pr={day:e,map:i},i}function tb(t,e){for(var a=0,i=0;i<t.pool.length;i++)if(a+=t.probs[i],e<a)return t.pool[i];return t.pool[t.pool.length-1]}b0.exports={CASES:g0,RTP:Fg,rtpFor:to,FREE_COOLDOWN:Wg,TON_PRIZES:eo,build:$g,roll:tb,prizePrice:xi}});var Dt=wn(Sn()),T0=wn(Pp());var $p=`<!doctype html>
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
<sc-if value="{{noDrops}}" hint-placeholder-val="{{ false }}">
<div style="flex-grow: 1; height: 70px; box-sizing: border-box; border-radius: 14px; border: 1px dashed #2c3244; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #8a90a0">\u0417\u0434\u0435\u0441\u044C \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0432\u044B\u0438\u0433\u0440\u044B\u0448\u0438 \u0438\u0433\u0440\u043E\u043A\u043E\u0432</div>
</sc-if>
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

<sc-if value="{{hasSupport}}" hint-placeholder-val="{{ true }}">
<button type="button" onClick="{{openSupport}}" style="display: flex; align-items: center; gap: 12px; background: #151821; border: 1px solid #222838; border-radius: 18px; padding: 12px 14px; color: #ffffff; cursor: pointer; font-family: Rubik, system-ui, sans-serif; text-align: left">
<span style="width: 38px; height: 38px; border-radius: 12px; background: #1f2a44; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0" aria-hidden="true">\u{1F4AC}</span>
<span style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1; min-width: 0"><span style="font-size: 15px; font-weight: 700">\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430</span><span style="font-size: 12px; color: #8a90a0">\u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F, \u0432\u044B\u0432\u043E\u0434\u044B \u2014 @{{supportName}}</span></span>
<svg width="8" height="14" viewBox="0 0 8 14" aria-hidden="true"><path d="M1 1 L7 7 L1 13" fill="none" stroke="#6c7282" stroke-width="2" stroke-linecap="round"></path></svg>
</button>
</sc-if>

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
<button type="button" onClick="{{curToggle}}" aria-expanded="{{curOpenAttr}}" aria-label="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0430\u043B\u044E\u0442\u0443" style="height: 60px; border-radius: 16px; border: 1px solid {{curBtnBorder}}; background: #0d0f14; color: #ffffff; cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 0 12px; font-family: Rubik, system-ui, sans-serif; text-align: left">
<span style="width: 32px; height: 32px; border-radius: 50%; background: {{curColor}}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900; flex-shrink: 0">{{curSym}}</span>
<span style="display: flex; flex-direction: column; gap: 1px; flex-grow: 1; min-width: 0"><span style="font-size: 15px; font-weight: 900">{{curCode}}</span><span style="font-size: 11px; color: #8a90a0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{curName}}</span></span>
<svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true" style="transform: rotate({{curArrow}}deg); transition: transform 0.2s"><path d="M1 1 L6 6 L11 1" fill="none" stroke="#8a90a0" stroke-width="2" stroke-linecap="round"></path></svg>
</button>
</div>
<div style="display: flex; flex-direction: column; gap: 6px">
<span style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u041E\u041F\u041B\u0410\u0422\u0410</span>
<button type="button" onClick="{{provToggle}}" aria-label="\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B" style="height: 60px; box-sizing: border-box; border-radius: 16px; border: 1px solid {{provBorder}}; background: #0d0f14; color: #ffffff; display: flex; align-items: center; gap: 10px; padding: 0 12px; cursor: pointer; font-family: Rubik, system-ui, sans-serif; text-align: left">
<span style="width: 32px; height: 32px; border-radius: 10px; background: {{provColor}}; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="{{provIcon}}" fill="#ffffff"></path></svg></span>
<span style="display: flex; flex-direction: column; gap: 1px; min-width: 0; flex-grow: 1"><span style="font-size: 15px; font-weight: 900">{{provName}}</span><span style="font-size: 11px; color: #8a90a0">{{provHint}}</span></span>
</button>
</div>
</div>
<sc-if value="{{curOpen}}" hint-placeholder-val="{{ false }}">
<div role="listbox" aria-label="\u0412\u0430\u043B\u044E\u0442\u0430" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; background: #0d0f14; border: 1px solid #ffc83d; border-radius: 18px; padding: 8px; animation: rkFadeIn 0.15s ease-out">
<sc-for list="{{curList}}" as="cl" hint-placeholder-count="8">
<button type="button" role="option" aria-selected="{{cl.sel}}" onClick="{{cl.pick}}" style="height: 52px; border-radius: 12px; border: 1px solid {{cl.border}}; background: {{cl.bg}}; color: #ffffff; cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 0 10px; font-family: Rubik, system-ui, sans-serif; text-align: left">
<span style="width: 30px; height: 30px; border-radius: 50%; background: {{cl.color}}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 900; flex-shrink: 0">{{cl.sym}}</span>
<span style="display: flex; flex-direction: column; gap: 1px; min-width: 0"><span style="font-size: 14px; font-weight: 900">{{cl.code}}</span><span style="font-size: 11px; color: #8a90a0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{cl.name}}</span></span>
</button>
</sc-for>
</div>
</sc-if>
<label style="height: 72px; border-radius: 20px; background: #0d0f14; border: 1px solid #262b3a; display: flex; align-items: center; gap: 12px; padding: 0 18px; cursor: text">
<span style="width: 34px; height: 34px; border-radius: 50%; background: {{curColor}}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 17px; font-weight: 900; flex-shrink: 0">{{curSym}}</span>
<input type="text" inputmode="decimal" enterkeyhint="done" autocomplete="off" aria-label="\u0421\u0443\u043C\u043C\u0430" placeholder="5" value="{{depCryptoAmount}}" onInput="{{depOnCryptoAmount}}" style="flex-grow: 1; min-width: 0; height: 100%; border: 0; outline: none; background: transparent; font-family: Rubik, system-ui, sans-serif; font-size: 30px; font-weight: 900; color: #ffffff">
<span style="font-size: 14px; font-weight: 700; color: #8a90a0; background: #1f2330; border-radius: 10px; padding: 6px 10px">{{curCode}}</span>
</label>
<div style="text-align: center; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: #6c7282">\u0417\u0410\u0427\u0418\u0421\u041B\u0418\u041C \u0412 TON \u041F\u041E \u041A\u0423\u0420\u0421\u0423 \u041D\u0410 \u041C\u041E\u041C\u0415\u041D\u0422 \u041E\u041F\u041B\u0410\u0422\u042B</div>
<sc-if value="{{cbWaiting}}" hint-placeholder-val="{{ false }}">
<div role="status" style="display: flex; align-items: center; gap: 8px; justify-content: center; font-size: 13px; color: #2bd46b"><span style="width: 8px; height: 8px; border-radius: 50%; background: #2bd46b; animation: rkBlink 1.2s infinite"></span>\u0416\u0434\u0451\u043C \u043E\u043F\u043B\u0430\u0442\u0443 \u0432 CryptoBot\u2026</div>
</sc-if>
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
<sc-if value="{{wdNeedDep}}" hint-placeholder-val="{{ false }}">
<div role="status" style="display: flex; align-items: center; gap: 10px; border-radius: 16px; background: rgba(255,200,61,0.1); border: 1px solid rgba(255,200,61,0.45); padding: 12px">
<span style="font-size: 22px" aria-hidden="true">\u{1F4A1}</span>
<span style="flex-grow: 1; font-size: 13px; font-weight: 600; line-height: 1.4; color: #ffe29a">\u0414\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430 \u043D\u0443\u0436\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u043E \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0431\u0430\u043B\u0430\u043D\u0441\u0430 (\u043E\u0442 {{wdMinDep}} TON)</span>
<button type="button" onClick="{{toDeposit}}" style="height: 36px; border-radius: 10px; border: 0; background: #ffc83d; color: #1a1300; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 900; padding: 0 12px; cursor: pointer; flex-shrink: 0">\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C</button>
</div>
</sc-if>
<sc-if value="{{wdIsNft}}" hint-placeholder-val="{{ true }}">
<div style="display: flex; justify-content: space-between; align-items: baseline">
<span style="font-size: 15px; font-weight: 700">\u0412\u044B\u0431\u0435\u0440\u0438 NFT</span>
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
<sc-if value="{{wdEmpty}}" hint-placeholder-val="{{ false }}">
<div style="border-radius: 18px; border: 1px dashed #2c3244; padding: 22px 12px; text-align: center; font-size: 13px; color: #8a90a0">\u041D\u0435\u0442 NFT \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430 \u2014 \u0432\u044B\u0431\u0435\u0439 \u0438\u0445 \u0432 \u043A\u0435\u0439\u0441\u0430\u0445. \u041E\u0431\u044B\u0447\u043D\u044B\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0437\u0430 \u2B50 \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u0435\u043B\u044C\u0437\u044F.</div>
</sc-if>
<div style="display: flex; align-items: center; gap: 10px; border-radius: 16px; background: #0d0f14; border: 1px solid #262b3a; padding: 12px 14px">
<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 4 L3 11 L9 13 L11 19 L14 15 L19 19Z" fill="none" stroke="#5fb8ff" stroke-width="2" stroke-linejoin="round"></path></svg>
<span style="display: flex; flex-direction: column; gap: 2px; min-width: 0"><span style="font-size: 12px; color: #8a90a0">\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C</span><span style="font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{wdTo}}</span></span>
</div>
<div style="text-align: center; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; color: #6c7282">\u041A\u041E\u041C\u0418\u0421\u0421\u0418\u042F 0.1 TON \xB7 \u0417\u0410\u042F\u0412\u041A\u0423 \u041F\u0420\u041E\u0412\u0415\u0420\u0418\u0422 \u0410\u0414\u041C\u0418\u041D</div>
</sc-if>

<sc-if value="{{hasMyWd}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; flex-direction: column; gap: 6px">
<span style="font-size: 13px; font-weight: 700; color: #a3a8b5">\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438</span>
<div style="display: flex; flex-direction: column; gap: 6px; max-height: 170px; overflow-y: auto; -webkit-overflow-scrolling: touch">
<sc-for list="{{myWd}}" as="mw" hint-placeholder-count="2">
<div style="display: flex; align-items: center; gap: 10px; background: #0d0f14; border: 1px solid #262b3a; border-radius: 12px; padding: 8px 10px">
<span style="flex-grow: 1; min-width: 0; font-size: 13px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{mw.title}}</span>
<span style="font-size: 11px; color: #8a90a0">{{mw.time}}</span>
<span style="font-size: 11px; font-weight: 700; padding: 3px 7px; border-radius: 7px; background: {{mw.bg}}; color: {{mw.color}}">{{mw.status}}</span>
</div>
</sc-for>
</div>
</div>
</sc-if>
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
// \u041E\u043A\u043D\u043E \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 (\u0434\u0435\u043C\u043E: \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434, \u0434\u0435\u043D\u044C\u0433\u0438 \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F)
// \u0412\u0430\u043B\u044E\u0442\u044B \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0447\u0435\u0440\u0435\u0437 @CryptoBot (\u0441\u0435\u0442\u044C \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u2014 \u0435\u0451 \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 CryptoBot)
var CURS = [
  { code: 'USDT', name: 'Tether', sym: '\u20AE', color: '#26a17b' },
  { code: 'TON', name: 'Toncoin', sym: '\u25C6', color: '#2a7fff' },
  { code: 'BTC', name: 'Bitcoin', sym: '\u20BF', color: '#f7931a' },
  { code: 'ETH', name: 'Ethereum', sym: '\u039E', color: '#6f7cf0' },
  { code: 'USDC', name: 'USD Coin', sym: '$', color: '#2775ca' },
  { code: 'TRX', name: 'TRON', sym: 'T', color: '#e5383b' },
  { code: 'LTC', name: 'Litecoin', sym: '\u0141', color: '#345d9d' },
  { code: 'BNB', name: 'BNB', sym: 'B', color: '#d9a400' }
];
var WD_ADDR_RE = /^(?:[EUk0][Qf][A-Za-z0-9_-]{46}|-?[0-9]:[0-9a-fA-F]{64})$/;
// NFT \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430: \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 NFT \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F (\u043E\u0431\u044B\u0447\u043D\u044B\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0437\u0430 \u2B50 \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u043D\u0435\u043B\u044C\u0437\u044F)
function wdNfts() { var R = window.RK; if (!R || !R.inventory) return []; return R.inventory.list().filter(function (it) { var g = R.gift(it.key); return g && !g.star; }); }
function wdTime(t) { var d = new Date(t + 3 * 3600 * 1000); return ('0' + d.getUTCDate()).slice(-2) + '.' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + ' ' + ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2); }
function openTgLink(url) {
  var tg = window.Telegram && window.Telegram.WebApp;
  try { if (tg && tg.openTelegramLink && /^https:\\/\\/t\\.me\\//.test(url)) { tg.openTelegramLink(url); return; } } catch (e) {}
  try { if (tg && tg.openTelegramLink && /^https:\\/\\/t\\.me\\//.test(url)) { tg.openTelegramLink(url); return; } } catch (e) {}
  try { if (tg && tg.openLink) { tg.openLink(url); return; } } catch (e) {}
  window.open(url, '_blank');
}
// \u0422\u0415\u0421\u0422\u041E\u0412\u042B\u0419 \u0420\u0415\u0416\u0418\u041C (\u0441\u0443\u043C\u043C\u0430 \u0441\u0440\u0430\u0437\u0443 \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441 \u0431\u0435\u0437 \u043E\u043F\u043B\u0430\u0442\u044B) \u2014 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D: \u0442\u0435\u043F\u0435\u0440\u044C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 Tonkeeper.
var TEST_TOPUP = false;
// \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 TON: \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u043C Tonkeeper \u0441 \u0430\u0434\u0440\u0435\u0441\u043E\u043C, \u0441\u0443\u043C\u043C\u043E\u0439 \u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u043C \u0438\u0433\u0440\u043E\u043A\u0430.
// \u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u0432 \u0431\u043B\u043E\u043A\u0447\u0435\u0439\u043D\u0435 \u043F\u043E \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044E \u0438 \u0441\u0430\u043C \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442 \u0431\u0430\u043B\u0430\u043D\u0441.
function tonkeeperUrl(wallet, ton, comment) {
  var nano = Math.round(ton * 1e9);
  return 'https://app.tonkeeper.com/transfer/' + wallet + '?amount=' + nano + '&text=' + encodeURIComponent(comment);
}
function supportName() { var n = window.RK && window.RK.net; return (n && n.support) || ''; }
function openLink(url) {
  var tg = window.Telegram && window.Telegram.WebApp;
  try { if (tg && tg.openLink) { tg.openLink(url); return; } } catch (e) {}
  window.open(url, '_blank');
}
var NFT_FALLBACK = '/_blob/a64ccb23ba5a5ab0f1f789ab412cf3af';
var DEP_TABS = [{ id: 'ton', label: 'TON' }, { id: 'crypto', label: 'Crypto' }, { id: 'gift', label: 'NFT' }];
function cleanNum(v) {
  v = String(v || '').replace(',', '.').replace(/[^0-9.]/g, '');
  var parts = v.split('.'); if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
  return v.slice(0, 10);
}
class Component extends DCLogic {
  constructor(props) {
    super(props);
    var list = [];
    this.state = { online: 0, dep: false, depTab: 'ton', depAmount: '', depCur: 0, depNet: 0, depCryptoAmount: '', depToast: 0, depMode: 'dep', wdSel: {}, toast: null, wdKind: 'nft', wdAmount: '', wdAddress: (function () { try { return (window.RK && window.RK.store.get('rk_wd_addr')) || ''; } catch (e) { return ''; } })() };
  }
  componentDidMount() {
    var self = this, net = window.RK && window.RK.net;
    // \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435/\u0432\u044B\u0432\u043E\u0434 \u043F\u043E \u043F\u0440\u043E\u0441\u044C\u0431\u0435 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u044D\u043A\u0440\u0430\u043D\u0430 (\xAB\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C\xBB, \xAB\u0412\u044B\u0432\u0435\u0441\u0442\u0438\xBB)
    this.onOpenDep = function () { var md = window.__rkOpenDep; if (!md) return; window.__rkOpenDep = null; self.setState({ dep: true, depMode: md === 'wd' ? 'wd' : 'dep' }); };
    window.addEventListener('rk:opendep', this.onOpenDep);
    setTimeout(this.onOpenDep, 0);
    if (net) this.offCredit = net.on('credit', function (m) {
      if (m.game !== 'deposit' && m.game !== 'admin' && m.game !== 'refund') return;
      self.setState({ waitingDeposit: 0, cbWaiting: 0 });
      if (m.amount > 0) self.showToast({ icon: '\u2705', text: (m.game === 'deposit' ? '\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435: +' : '\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E: +') + m.amount + ' TON', ok: true });
      else if (m.gift) self.showToast({ icon: '\u{1F381}', text: (m.game === 'deposit' ? '\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 NFT: ' : '\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043E: ') + m.gift, ok: true });
      else if (m.amount < 0) self.showToast({ icon: '\u2796', text: '\u0421\u043F\u0438\u0441\u0430\u043D\u043E ' + m.amount + ' TON' });
    });
    if (net) {
      this.offCb1 = net.on('cb.invoice', function (m) { self.setState({ cbCreating: false, cbWaiting: Date.now(), waitingDeposit: Date.now() }); openTgLink(m.url); self.showToast({ icon: '\u23F3', text: '\u0421\u0447\u0451\u0442 \u043D\u0430 ' + m.amount + ' ' + m.asset + ' \u043E\u0442\u043A\u0440\u044B\u0442 \u0432 ' + (m.provider || 'CryptoBot') + '. \u041F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u0430\u043B\u0430\u043D\u0441 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F \u0441\u0430\u043C' }); });
      this.offCb2 = net.on('cb.err', function (m) { self.setState({ cbCreating: false }); self.showToast({ icon: '\u26A0\uFE0F', text: m.msg }); });
    }
    // \u0432\u0435\u0440\u043D\u0443\u043B\u0441\u044F \u0438\u0437 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 \u2014 \u043F\u0440\u043E\u0441\u0438\u043C \u0441\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u044B \u043F\u043E\u0440\u0430\u043D\u044C\u0448\u0435
    this.onVis = function () { var n = window.RK && window.RK.net; if (!document.hidden && self.state.waitingDeposit && n) n.send({ t: 'deposit.check' }); };
    document.addEventListener('visibilitychange', this.onVis);
    this.iv = setInterval(function () {
      var s = self.state;
      self.setState({ tick: (s.tick || 0) + 1 }); // \u043B\u0435\u043D\u0442\u0430 \u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430
    }, 2200);
  }
  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.tt); if (this.offCredit) this.offCredit(); if (this.offCb1) this.offCb1(); if (this.offCb2) this.offCb2(); document.removeEventListener('visibilitychange', this.onVis); window.removeEventListener('rk:opendep', this.onOpenDep); }
  showToast(t) {
    var self = this;
    clearTimeout(this.tt);
    this.setState({ depToast: 0 }, function () { self.setState({ depToast: Date.now(), toast: t }); });
    try { var tg = window.Telegram && window.Telegram.WebApp; if (tg && tg.HapticFeedback) tg.HapticFeedback.notificationOccurred(t.ok ? 'success' : 'warning'); } catch (e) {}
    this.tt = setTimeout(function () { self.setState({ depToast: 0 }); }, 2600);
  }
  wdSubmit() {
    var s = this.state, R = window.RK, net = R && R.net;
    if (!net || !net.connected) return this.showToast({ icon: '\u26A0\uFE0F', text: '\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437' });
    if (!net.me || String(net.me.uid).indexOf('tg') !== 0) return this.showToast({ icon: '\u26A0\uFE0F', text: '\u0412\u044B\u0432\u043E\u0434 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u0432\u0445\u043E\u0434\u0435 \u0447\u0435\u0440\u0435\u0437 Telegram' });
    var bal = R.wallet.get(), id = 'w' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8), w;
    if (s.wdKind === 'ton') {
      var amt = Math.round(parseFloat(s.wdAmount) * 100) / 100, addr = String(s.wdAddress || '').trim();
      if (!(amt >= 1)) return this.showToast({ icon: '\u26A0\uFE0F', text: '\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0432\u044B\u0432\u043E\u0434\u0430 \u2014 1 TON' });
      if (amt > bal) return this.showToast({ icon: '\u26A0\uFE0F', text: '\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E TON \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0435' });
      if (!WD_ADDR_RE.test(addr)) return this.showToast({ icon: '\u26A0\uFE0F', text: '\u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0430\u0434\u0440\u0435\u0441 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 \u2014 \u043E\u043D \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 UQ \u0438\u043B\u0438 EQ \u0438 \u0434\u043B\u0438\u043D\u043E\u0439 48 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432' });
      try { R.store.set('rk_wd_addr', addr); } catch (e) {}
      w = { id: id, kind: 'ton', amount: amt, address: addr, gifts: [], fee: 0, at: Date.now() };

    } else {
      var items = wdNfts().filter(function (it) { return s.wdSel[it.uid]; });
      if (!items.length) return this.showToast({ icon: '\u26A0\uFE0F', text: '\u0412\u044B\u0431\u0435\u0440\u0438 NFT \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430' });
      if (items.length > 10) return this.showToast({ icon: '\u26A0\uFE0F', text: '\u0417\u0430 \u0440\u0430\u0437 \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0434\u043E 10 NFT' });
      if (bal < 0.1) return this.showToast({ icon: '\u26A0\uFE0F', text: '\u041D\u0443\u0436\u043D\u043E 0.1 TON \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0435 \u0434\u043B\u044F \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438' });
      // \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u0430\u043C \u0437\u0430\u0431\u0435\u0440\u0451\u0442 \u044D\u0442\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F \u0438 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044E \u0441 \u0431\u0430\u043B\u0430\u043D\u0441\u0430
      w = { id: id, kind: 'nft', items: items.map(function (it) { return it.uid; }) };
    }
    net.withdraw(w);
    this.setState({ wdAmount: '', wdSel: {} });
    this.showToast({ icon: '\u{1F4E8}', text: '\u0417\u0430\u044F\u0432\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430. \u0410\u0434\u043C\u0438\u043D \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442 \u0435\u0451, \u043E\u0431\u044B\u0447\u043D\u043E \u0434\u043E 24 \u0447\u0430\u0441\u043E\u0432', ok: true });
  }
  depSubmit() {
    var s = this.state;
    if (s.depMode === 'wd') { this.wdSubmit(); return; }
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
    if (s.depTab === 'crypto') {
      var n2 = window.RK && window.RK.net, a2 = parseFloat(s.depCryptoAmount);
      if (!(a2 > 0)) { this.showToast({ icon: '\u26A0\uFE0F', text: '\u0412\u0432\u0435\u0434\u0438 \u0441\u0443\u043C\u043C\u0443' }); return; }
      if (!n2 || !n2.connected) { this.showToast({ icon: '\u26A0\uFE0F', text: '\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437' }); return; }
      var useXr = s.depProv === 'xr' ? !!n2.xrocket : (!n2.cryptobot && !!n2.xrocket);
      if (!useXr && !n2.cryptobot) { this.showToast({ icon: '\u{1F6A7}', text: '\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 CryptoBot \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E' }); return; }
      if (this.state.cbCreating) return;
      this.setState({ cbCreating: true });
      if (useXr) { var xa = (n2.xrocket.assets || ['TON']), code = CURS[s.depCur].code; n2.send({ t: 'xr.create', asset: xa.indexOf(code) !== -1 ? code : 'TON', amount: a2 }); }
      else n2.send({ t: 'cb.create', asset: CURS[s.depCur].code, amount: a2 });
      return;
    }
    var ga = window.RK && window.RK.net && window.RK.net.gifts;
    if (s.depTab === 'gift' && ga && ga.username) { openTgLink('https://t.me/' + ga.username + (ga.hi !== false ? '?text=hi' : '')); return; } // \u0447\u0430\u0442 \u0441 \u0431\u0430\u043D\u043A\u043E\u043C, \xABhi\xBB \u0443\u0436\u0435 \u0432\u043F\u0438\u0441\u0430\u043D
    this.showToast({ icon: '\u{1F6A7}', text: '\u041F\u0440\u0438\u0451\u043C NFT-\u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D' });
  }
  renderVals() {
    var self = this, s = this.state;
    var cur = CURS[s.depCur] || CURS[0];
    var inv = s.dep ? wdNfts() : [];
    var myWd = s.dep && window.RK && window.RK.net && window.RK.net.withdrawals ? window.RK.net.withdrawals() : [];
    var wdCount = 0; inv.forEach(function (it) { if (s.wdSel[it.uid]) wdCount++; });
    var tgUser = window.RK && window.RK.user;
    var giftAcc = window.RK && window.RK.net && window.RK.net.gifts && window.RK.net.gifts.username ? window.RK.net.gifts : null;
    var testOn = TEST_TOPUP && s.depMode === 'dep' && s.depTab === 'ton';
    var depInfo = window.RK && window.RK.net && window.RK.net.deposit;
    var liveTon = !TEST_TOPUP && s.depMode === 'dep' && s.depTab === 'ton';
    var NN = window.RK && window.RK.net, hasCb = !!(NN && NN.cryptobot), hasXr = !!(NN && NN.xrocket), hasBoth = hasCb && hasXr;
    var isXr = s.depProv === 'xr' ? hasXr : (!hasCb && hasXr);
    var xrAssets = (NN && NN.xrocket && NN.xrocket.assets) || ['TON'];
    if (isXr && xrAssets.indexOf(cur.code) === -1) cur = CURS[1]; // xRocket \u2014 \u0442\u043E\u043B\u044C\u043A\u043E TON \u0438 USDT
    var liveCb = s.depMode === 'dep' && s.depTab === 'crypto' && (isXr ? hasXr : hasCb);
    return {
      topUp: function () { self.setState({ dep: true }); },
      isAdmin: !!(window.RK && window.RK.net && window.RK.net.me && (window.RK.net.me.admin || window.RK.net.me.adminStale)),
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
      curToggle: function () { self.setState({ curOpen: !self.state.curOpen }); },
      curOpen: !!s.curOpen, curOpenAttr: s.curOpen ? 'true' : 'false', curArrow: s.curOpen ? 180 : 0, curBtnBorder: s.curOpen ? '#ffc83d' : '#262b3a',
      provToggle: function () { var n = window.RK && window.RK.net; var next = self.state.depProv === 'xr' ? 'cb' : 'xr'; if (next === 'xr' && !(n && n.xrocket)) return self.showToast({ icon: '\u{1F6A7}', text: '\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 xRocket \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E' }); if (next === 'cb' && !(n && n.cryptobot)) return self.showToast({ icon: '\u{1F6A7}', text: '\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 CryptoBot \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E' }); var st = { depProv: next, curOpen: false }; if (next === 'xr' && (n.xrocket.assets || ['TON']).indexOf(CURS[self.state.depCur].code) === -1) st.depCur = 1; self.setState(st); },
      provName: isXr ? 'xRocket' : 'CryptoBot', provHint: hasBoth ? '\u043D\u0430\u0436\u043C\u0438, \u0447\u0442\u043E\u0431\u044B \u0441\u043C\u0435\u043D\u0438\u0442\u044C' : '\u0432 Telegram', provColor: isXr ? '#7b5cff' : '#1a8cff', provBorder: hasBoth ? '#3a3f55' : '#262b3a',
      provIcon: isXr ? 'M12 2 C16 6 17 10 15 15 L9 15 C7 10 8 6 12 2Z M9 16 L15 16 L13 21 L11 21Z' : 'M21 4 L3 11 L9 13 L11 19 L14 15 L19 19Z',
      curList: CURS.map(function (c, i) {
        var sel = i === s.depCur;
        return { code: c.code, name: c.name, sym: c.sym, color: c.color, sel: sel ? 'true' : 'false', border: sel ? '#ffc83d' : '#262b3a', bg: sel ? '#2a2410' : '#151821',
          pick: function () { self.setState({ depCur: i, curOpen: false }); } };
      }).filter(function (c) { return !isXr || xrAssets.indexOf(c.code) !== -1; }),
      depCryptoAmount: s.depCryptoAmount, depOnCryptoAmount: function (e) { self.setState({ depCryptoAmount: cleanNum(e && e.target && e.target.value) }); },
      depGiftImgs: DROPS.slice(0, 4).map(function (d) { return { img: d.img, color: colorOf(d.price) }; }),
      depGiftSteps: giftAcc ? (giftAcc.hi ? [
        { n: 1, text: '\u041D\u0430\u043F\u0438\u0448\u0438 \xABhi\xBB \u0432 \u043B\u0438\u0447\u043A\u0443 @' + giftAcc.username },
        { n: 2, text: '\u041F\u043E\u0434\u0430\u0440\u0438 \u0435\u043C\u0443 NFT: \u043F\u0440\u043E\u0444\u0438\u043B\u044C \u2192 \xAB\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C\xBB \u2192 \u0442\u0432\u043E\u0439 NFT' },
        { n: 3, text: '\u0427\u0435\u0440\u0435\u0437 ~20 \u0441\u0435\u043A\u0443\u043D\u0434 NFT \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435' }
      ] : [
        { n: 1, text: '\u041E\u0442\u043A\u0440\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C @' + giftAcc.username + ' \u0432 Telegram' },
        { n: 2, text: '\u041D\u0430\u0436\u043C\u0438 \xAB\u041F\u043E\u0434\u0430\u0440\u0438\u0442\u044C\xBB \u0438 \u0432\u044B\u0431\u0435\u0440\u0438 NFT \u0438\u0437 \u0441\u0432\u043E\u0438\u0445 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432' },
        { n: 3, text: '\u0427\u0435\u0440\u0435\u0437 ~20 \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 NFT \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435' }
      ]) : [
        { n: 1, text: '\u041F\u0440\u0438\u0451\u043C NFT-\u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u0441\u043A\u043E\u0440\u043E \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442' },
        { n: 2, text: '\u0422\u044B \u0441\u043C\u043E\u0436\u0435\u0448\u044C \u043F\u043E\u0434\u0430\u0440\u0438\u0442\u044C NFT \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443 \u0438\u0433\u0440\u044B' },
        { n: 3, text: '\u041F\u043E\u0434\u0430\u0440\u043E\u043A \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0432 \u0442\u0432\u043E\u0451\u043C \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435' }
      ],
      depTitle: s.depMode === 'wd' ? '\u0412\u042B\u0412\u041E\u0414' : '\u0414\u0415\u041F\u041E\u0417\u0418\u0422',
      isDepMode: s.depMode === 'dep', isWdMode: s.depMode === 'wd',
      wdNeedDep: s.depMode === 'wd' && !!(window.RK && window.RK.acct && window.RK.acct.loaded) && (window.RK.acct.deposited || 0) + 1e-9 < Math.max(0.01, (window.RK.net && window.RK.net.wdMinDeposit) || 0.1),
      wdMinDep: (window.RK && window.RK.net && window.RK.net.wdMinDeposit) || 0.1,
      toDeposit: function () { self.setState({ depMode: 'dep', depTab: 'ton' }); },
      hasSupport: !!supportName(), supportName: supportName(),
      openSupport: function () { if (supportName()) openTgLink('https://t.me/' + supportName()); },
      modeDep: function () { self.setState({ depMode: 'dep' }); }, modeWd: function () { self.setState({ depMode: 'wd' }); },
      modeDepSel: s.depMode === 'dep' ? 'true' : 'false', modeWdSel: s.depMode === 'wd' ? 'true' : 'false',
      modeDepBg: s.depMode === 'dep' ? '#ffc83d' : 'transparent', modeDepColor: s.depMode === 'dep' ? '#1a1300' : '#a3a8b5',
      modeWdBg: s.depMode === 'wd' ? '#ffc83d' : 'transparent', modeWdColor: s.depMode === 'wd' ? '#1a1300' : '#a3a8b5',
      badgeText: s.depMode === 'wd' ? '\u0412\u044B\u0432\u043E\u0434 NFT \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0435 \xB7 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440' : testOn ? '\u0422\u0415\u0421\u0422 \xB7 \u0441\u0443\u043C\u043C\u0430 \u0441\u0440\u0430\u0437\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441' : (liveTon ? '\u041E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 Tonkeeper \xB7 \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438' : liveCb ? '\u041E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 @' + (isXr ? 'xRocket' : 'CryptoBot') + ' \xB7 \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438' : (s.depMode === 'dep' && s.depTab === 'gift' && giftAcc) ? 'NFT \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438' : '\u0414\u0415\u041C\u041E \xB7 ' + (s.depMode === 'wd' ? '\u0432\u044B\u0432\u043E\u0434' : '\u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435') + ' \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E'),
      badgeColor: s.depMode === 'wd' || testOn || liveTon || liveCb ? '#2bd46b' : '#ffc83d', badgeBg: s.depMode === 'wd' || testOn || liveTon || liveCb ? 'rgba(43,212,107,0.12)' : 'rgba(255,200,61,0.12)', badgeBorder: s.depMode === 'wd' || testOn || liveTon || liveCb ? 'rgba(43,212,107,0.4)' : 'rgba(255,200,61,0.35)',
      depComment: depInfo ? depInfo.comment : '', hasDepComment: !!depInfo,
      waiting: !!s.waitingDeposit && s.depTab === 'ton',
      cbWaiting: !!s.cbWaiting && s.depTab === 'crypto',
      wdItems: inv.map(function (it) {
        var sel = !!s.wdSel[it.uid];
        return { name: it.key, img: window.rkThumb ? window.rkThumb(it.key, NFT_FALLBACK) : NFT_FALLBACK, sel: sel, pressed: sel ? 'true' : 'false',
          border: sel ? '#ffc83d' : '#262b3a', bg: sel ? '#2a2410' : '#0d0f14',
          toggle: function () { var m = Object.assign({}, self.state.wdSel); if (m[it.uid]) delete m[it.uid]; else m[it.uid] = 1; self.setState({ wdSel: m }); } };
      }),
      wdHasItems: inv.length > 0, wdEmpty: inv.length === 0,
      wdInfo: wdCount ? '\u0432\u044B\u0431\u0440\u0430\u043D\u043E ' + wdCount + ' \u0438\u0437 ' + inv.length : inv.length + ' \u0448\u0442. \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435',
      wdTo: tgUser && tgUser.username ? '@' + tgUser.username : ((tgUser && tgUser.first_name) || '\u0442\u0432\u043E\u0439 Telegram-\u0430\u043A\u043A\u0430\u0443\u043D\u0442'),
      depBtnText: s.depMode === 'wd' ? (s.wdKind === 'ton' ? (parseFloat(s.wdAmount) > 0 ? '\u0412\u044B\u0432\u0435\u0441\u0442\u0438 ' + s.wdAmount + ' TON' : '\u0412\u044B\u0432\u0435\u0441\u0442\u0438 TON') : (wdCount ? '\u0412\u044B\u0432\u0435\u0441\u0442\u0438 ' + wdCount + ' NFT' : '\u0412\u044B\u0431\u0435\u0440\u0438 NFT')) : (s.depTab === 'gift' ? (giftAcc ? '\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C NFT' : '\u0421\u043A\u043E\u0440\u043E') : '\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C'),
      depBtnDisabled: s.depMode === 'wd' && s.wdKind === 'nft' && !wdCount,
      depBtnBg: s.depMode === 'wd' && s.wdKind === 'nft' && !wdCount ? '#3a3420' : '#ffc83d',
      wdIsTon: s.wdKind === 'ton', wdIsNft: s.wdKind === 'nft',
      wdPickTon: function () { self.setState({ wdKind: 'ton' }); }, wdPickNft: function () { self.setState({ wdKind: 'nft' }); },
      wdTonSel: s.wdKind === 'ton' ? 'true' : 'false', wdNftSel: s.wdKind === 'nft' ? 'true' : 'false',
      wdTonBorder: s.wdKind === 'ton' ? '#ffc83d' : '#262b3a', wdTonBg: s.wdKind === 'ton' ? '#2a2410' : '#1b1e27',
      wdNftBorder: s.wdKind === 'nft' ? '#ffc83d' : '#262b3a', wdNftBg: s.wdKind === 'nft' ? '#2a2410' : '#1b1e27',
      wdAmount: s.wdAmount, onWdAmount: function (e) { self.setState({ wdAmount: cleanNum(e && e.target && e.target.value) }); },
      wdAll: function () { var b = window.RK ? Math.floor(window.RK.wallet.get() * 100) / 100 : 0; self.setState({ wdAmount: b > 0 ? String(b) : '' }); },
      wdAddress: s.wdAddress, onWdAddress: function (e) { self.setState({ wdAddress: String((e && e.target && e.target.value) || '').trim().slice(0, 70) }); },
      wdAddrBorder: s.wdAddress && !WD_ADDR_RE.test(s.wdAddress) ? '#ff5d73' : '#262b3a',
      hasMyWd: myWd.length > 0,
      myWd: myWd.slice(0, 10).map(function (w) {
        var st = { pending: ['\u041E\u0436\u0438\u0434\u0430\u0435\u0442', '#ffc83d', 'rgba(255,200,61,0.14)'], paid: ['\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E', '#2bd46b', 'rgba(43,212,107,0.14)'], rejected: ['\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043E', '#ff5d73', 'rgba(255,93,115,0.14)'] }[w.status] || ['\u2026', '#a3a8b5', '#1f2330'];
        return { title: w.kind === 'ton' ? w.amount + ' TON \u2192 ' + String(w.address || '').slice(0, 4) + '\u2026' + String(w.address || '').slice(-4) : (w.gifts || []).join(', '), time: wdTime(w.at), status: st[0], color: st[1], bg: st[2] };
      }),
      toastIcon: s.toast ? s.toast.icon : '', toastText: s.toast ? s.toast.text : '', toastBorder: s.toast && s.toast.ok ? '#2bd46b' : '#ffc83d',
      depSubmit: function () { self.depSubmit(); },
      depToast: !!s.depToast,
      online: (window.RK && window.RK.net && window.RK.net.online) || 0,
      balanceText: (window.RK ? window.RK.wallet.get() : 0).toFixed(2) + ' TON',
      tgName: (window.RK && window.RK.user && window.RK.user.first_name) || '\u0413\u043E\u0441\u0442\u044C',
      avatarUrl: (window.RK && window.RK.user && window.RK.user.photo_url) || '/_blob/661884b648dd965ea69af44ea8c7ee95',
      // \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0432\u044B\u0438\u0433\u0440\u044B\u0448\u0438 \u2014 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 (\u043A\u0435\u0439\u0441\u044B, \u0430\u043F\u0433\u0440\u0435\u0439\u0434\u044B, \u043A\u0440\u0430\u0448, PvP, \u043C\u0438\u043D\u044B), \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440
      drops: ((window.RK && window.RK.net && window.RK.net.feed) || []).slice(0, 8).map(function (f) {
        var g = f.key ? (f.key.indexOf('TON_') === 0 ? { img: 'assets/ton.svg' } : window.RK.gift(f.key)) : null;
        return { name: f.name, img: g ? g.img : 'assets/ton.svg', color: colorOf(f.amount), priceText: (Math.round(f.amount * 100) / 100) + ' TON' };
      }),
      noDrops: !((window.RK && window.RK.net && window.RK.net.feed) || []).length
    };
  }
}
<\/script>
</body>
</html>
`;var t0=`<!doctype html>
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
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; max-height: 270px; overflow-y: auto; -webkit-overflow-scrolling: touch">
<sc-for list="{{gifts}}" as="g" hint-placeholder-count="4">
<button type="button" onClick="{{g.pick}}" style="min-width: 0; background: #0b0d12; border: 1px solid #222838; border-radius: 12px; padding: 8px 4px; display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff">
<img src="{{g.img}}" alt="" style="width: 40px; height: 40px">
<span style="max-width: 100%; font-size: 10px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{g.name}}</span>
<span style="font-size: 11px; font-weight: 700; color: #ffc83d">{{g.priceText}}</span>
</button>
</sc-for>
</div>
</div>
</sc-if>

<sc-if value="{{showLadder}}" hint-placeholder-val="{{ false }}">
<div style="background: #151821; border: 1px solid #2c3244; border-radius: 18px; padding: 12px; display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; align-items: center; gap: 8px">
<div style="flex: 1; min-width: 0; display: flex; align-items: center; gap: 8px; background: #0b0d12; border: 1px solid {{ladCurBorder}}; border-radius: 14px; padding: 8px">
<img src="{{ladCurImg}}" alt="" style="width: 40px; height: 40px; flex-shrink: 0">
<span style="display: flex; flex-direction: column; gap: 1px; min-width: 0"><span style="font-size: 10px; font-weight: 700; color: #2bd46b; letter-spacing: 1px">\u0421\u0415\u0419\u0427\u0410\u0421</span><span style="font-size: 12px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{ladCurName}}</span><span style="font-size: 11px; font-weight: 700; color: #ffc83d">{{ladCurPrice}}</span></span>
</div>
<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" style="flex-shrink: 0"><path d="M4 9 H14 M10 5 L14 9 L10 13" fill="none" stroke="#8a90a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
<div style="flex: 1; min-width: 0; display: flex; align-items: center; gap: 8px; background: #0b0d12; border: 1px dashed #2c3244; border-radius: 14px; padding: 8px; opacity: 0.85">
<sc-if value="{{ladHasNext}}" hint-placeholder-val="{{ true }}"><img src="{{ladNextImg}}" alt="" style="width: 40px; height: 40px; flex-shrink: 0"></sc-if>
<span style="display: flex; flex-direction: column; gap: 1px; min-width: 0"><span style="font-size: 10px; font-weight: 700; color: #8a90a0; letter-spacing: 1px">{{ladNextLabel}}</span><span style="font-size: 12px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{ladNextName}}</span><span style="font-size: 11px; font-weight: 700; color: #ffc83d">{{ladNextPrice}}</span></span>
</div>
</div>
<div style="height: 6px; border-radius: 3px; background: #0b0d12; overflow: hidden"><div style="height: 6px; border-radius: 3px; background: linear-gradient(to right, #2bd46b, #ffc83d); width: {{ladPct}}%"></div></div>
<div style="font-size: 11px; color: #8a90a0; text-align: center">\u0417\u0430\u0431\u0435\u0440\u0451\u0448\u044C \u0441\u0435\u0439\u0447\u0430\u0441: {{ladCurName}} + {{ladRem}} TON \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441</div>
</div>
</sc-if>

<sc-if value="{{showGiftWin}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; align-items: center; gap: 12px; background: rgba(43,212,107,0.1); border: 1px solid rgba(43,212,107,0.45); border-radius: 18px; padding: 12px">
<img src="{{winGiftImg}}" alt="" style="width: 48px; height: 48px; flex-shrink: 0">
<span style="display: flex; flex-direction: column; gap: 2px; min-width: 0"><span style="font-size: 12px; color: #2bd46b; font-weight: 700">\u0417\u0430\u0431\u0440\u0430\u043B \u043D\u0430 x{{winAt}}</span><span style="font-size: 15px; font-weight: 900; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{winGiftName}}</span><span style="font-size: 12px; color: #ffc83d; font-weight: 700">+ {{winTon}} TON \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441 \xB7 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435</span></span>
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
// \u041F\u043E\u0434\u0430\u0440\u043A\u0438 \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F \u0438\u0433\u0440\u043E\u043A\u0430 (window.RK.inventory), \u0446\u0435\u043D\u044B \u2014 \u0438\u0437 \u043E\u0431\u0449\u0435\u0433\u043E \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 (window.RK.gift)
function G(name) { return (window.RK && window.RK.gift && window.RK.gift(name)) || null; }
function INV() { return window.RK && window.RK.inventory; }
function invList() { var I = INV(); return I ? I.list().filter(function (it) { return !!G(it.key); }) : []; }
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
// \u0421\u0442\u0430\u0432\u043A\u0430 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u043C \u043D\u0430 \u043C\u043D\u043E\u0436\u0438\u0442\u0435\u043B\u0435 m: \u043A\u0430\u043A\u043E\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0441\u0435\u0439\u0447\u0430\u0441 \xAB\u0432 \u0440\u0443\u043A\u0430\u0445\xBB, \u043E\u0441\u0442\u0430\u0442\u043E\u043A TON \u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u043A
function ladderOf(b, m) {
  var val = Math.floor(b.amount * m * 100) / 100;
  var best = window.RK && window.RK.giftBestFor ? window.RK.giftBestFor(val) : null;
  var cur = best && best.price > b.amount + 1e-9 ? best : (G(b.gift) ? Object.assign({}, G(b.gift), { price: b.amount }) : null);
  if (!cur) return null;
  var next = window.RK && window.RK.giftNextAbove ? window.RK.giftNextAbove(cur.price) : null;
  return { cur: cur, rem: Math.max(0, Math.floor((val - cur.price) * 100) / 100), next: next, val: val,
    pct: next ? Math.max(0, Math.min(100, (val - cur.price) / (next.price - cur.price) * 100)) : 100, nextMult: next ? next.price / b.amount : 0 };
}
function flyMs(c) { return Math.log(Math.max(1, c)) / GROWTH * 1000; }

// \u0420\u0430\u0443\u043D\u0434\u044B \u0432\u0435\u0434\u0451\u0442 \u0441\u0435\u0440\u0432\u0435\u0440: \u0432\u0441\u0435 \u0438\u0433\u0440\u043E\u043A\u0438 \u0432\u0438\u0434\u044F\u0442 \u043E\u0434\u043D\u0443 \u0438 \u0442\u0443 \u0436\u0435 \u0440\u0430\u043A\u0435\u0442\u0443 \u0438 \u0441\u0442\u0430\u0432\u043A\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      rs: null, phase: 'wait', m: 1, now: Date.now(), conn: false, err: '',
      balance: 50, bet: 1, queued: null, giftPick: false, sending: false,
      invTick: 0
    };
    this.offs = [];
  }
  componentDidMount() {
    var self = this, net = NET();
    if (net) {
      this.offs.push(net.on('crash', function (m) { self.onRound(m); }));
      this.offs.push(net.on('crash.ok', function (m) { rkTrack({ game: 'crash', bet: m.amount, round: true }); self.setState({ sending: false, err: '' }); }));
      this.offs.push(net.on('crash.err', function (m) {
        // \u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430 \u2014 \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u043F\u0438\u0441\u0430\u043B
        self.setState({ sending: false, err: m.msg || '\u041E\u0448\u0438\u0431\u043A\u0430' });
        if (/\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 TON/.test(m.msg || '') && window.RK.toast) window.RK.toast(m.msg, false);
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
      // gift = uid \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430 \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F: \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0435\u0433\u043E \u0438 \u0441\u0442\u0430\u0432\u0438\u043C
      var I = INV(), item = I ? I.list().filter(function (it) { return it.uid === gift; })[0] : null;
      if (!item || !G(item.key)) { this.setState({ giftPick: false, err: '\u042D\u0442\u043E\u0433\u043E \u043F\u043E\u0434\u0430\u0440\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435' }); return; }
      this.setState({ sending: true, giftPick: false });
      net.send({ t: 'crash.bet', item: item.uid }); // \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u0430\u043C \u0437\u0430\u0431\u0435\u0440\u0451\u0442 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F
    } else {
      if (!(amount >= 0.1) || amount > s.balance) return;
      this.setState({ sending: true });
      net.send({ t: 'crash.bet', amount: amount }); // \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u0430\u043C \u0441\u043F\u0438\u0448\u0435\u0442 \u0441\u0442\u0430\u0432\u043A\u0443
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
  placeGift(uid, name) {
    var s = this.state;
    if (s.phase === 'wait' && !this.myBet() && !s.sending) this.sendBet(0, uid);
    else this.setState({ giftPick: false, queued: { gift: uid, name: name } }); // \u0441\u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0432 \u043D\u0430\u0447\u0430\u043B\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0440\u0430\u0443\u043D\u0434\u0430
  }
  cashout() {
    var s = this.state, me = this.myBet(), net = NET();
    if (s.phase !== 'fly' || !me || me.at || !net) return;
    net.send({ t: 'crash.cashout' }); // \u0432\u044B\u0438\u0433\u0440\u044B\u0448 \u043F\u0440\u0438\u0434\u0451\u0442 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438 \u0441\u0430\u043C \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441
  }
  setBet(v) { this.setState({ betStr: null, bet: r2(Math.max(0.1, Math.min(v, Math.max(0.1, this.state.balance)))) }); }

  renderVals() {
    var self = this, s = this.state, r = s.rs, net = NET();
    var inv = invList();
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
      // \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0432 \u0441\u0442\u0430\u0432\u043A\u0435: \u0432 \u043F\u043E\u043B\u0451\u0442\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C, \u0434\u043E \u043A\u0430\u043A\u043E\u0433\u043E \u043E\u043D \u0443\u0436\u0435 \u0434\u043E\u0440\u043E\u0441; \u043F\u043E\u0441\u043B\u0435 \u0432\u044B\u0432\u043E\u0434\u0430 \u2014 \u0447\u0442\u043E \u0437\u0430\u0431\u0440\u0430\u043B
      var gShow = null;
      if (b.gift) { if (cashed && b.payGift) gShow = G(b.payGift); else if (s.phase === 'fly') { var lb = ladderOf(b, m); gShow = lb ? lb.cur : G(b.gift); } else gShow = G(b.gift); }
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
        hasGift: !!(b.gift && gShow), giftImg: gShow ? gShow.img : '', giftName: gShow ? gShow.name : ''
      };
    });
    var total = 0; bets.forEach(function (b) { total += b.amount; });

    var canBetNow = s.conn && s.phase === 'wait' && !me && !s.sending;
    var showCashout = s.phase === 'fly' && me && !me.at;
    var lad = showCashout && me.gift ? ladderOf(me, m) : null;
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
      cashoutText: showCashout ? (lad ? lad.cur.name + (lad.rem > 0 ? ' + ' + fmt(lad.rem) + ' TON' : '') : fmt(me.amount * m) + ' TON') : '',
      showLadder: !!(showCashout && lad),
      ladCurImg: lad ? lad.cur.img : '', ladCurName: lad ? lad.cur.name : '', ladCurPrice: lad ? fmt(lad.cur.price) + ' TON' : '',
      ladCurBorder: lad && lad.cur.name !== (G(me.gift) || {}).name ? '#2bd46b' : '#2c3244',
      ladHasNext: !!(lad && lad.next), ladNextImg: lad && lad.next ? lad.next.img : '',
      ladNextLabel: lad && lad.next ? '\u0414\u0410\u041B\u042C\u0428\u0415 \u041D\u0410 x' + lad.nextMult.toFixed(2) : '\u041C\u0410\u041A\u0421\u0418\u041C\u0423\u041C', ladNextName: lad && lad.next ? lad.next.name : '\u0434\u043E\u0440\u043E\u0436\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u043D\u0435\u0442',
      ladNextPrice: lad && lad.next ? fmt(lad.next.price) + ' TON' : '', ladPct: lad ? lad.pct.toFixed(1) : '0', ladRem: lad ? fmt(lad.rem) : '0',
      showGiftWin: !!(me && me.at && me.payGift),
      winGiftImg: me && me.payGift && G(me.payGift) ? G(me.payGift).img : '', winGiftName: me && me.payGift ? me.payGift : '',
      winAt: me && me.at ? me.at.toFixed(2) : '', winTon: me && me.payGift ? fmt(me.payTon || 0) : '',
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
      giftBtnColor: inv.length ? '#ffffff' : '#5a6070',
      openGift: function () { if (invList().length) self.setState({ giftPick: !self.state.giftPick }); else self.setState({ err: '\u0412 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435 \u043D\u0435\u0442 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u2014 \u0432\u044B\u0431\u0435\u0439 \u0438\u0445 \u0432 \u043A\u0435\u0439\u0441\u0430\u0445' }); },
      closeGift: function () { self.setState({ giftPick: false }); },
      placeTon: function () { self.placeTon(); },
      showGiftPick: s.giftPick && !showCashout,
      gifts: inv.map(function (it) { var g = G(it.key); return { name: g.name, img: g.img, priceText: g.price + ' TON', pick: function () { self.placeGift(it.uid, g.name); } }; }),
      hasQueued: !!s.queued,
      queuedText: s.queued ? (s.queued.gift ? s.queued.name : fmt(s.queued.amount) + ' TON') : '',
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
`;var e0=`<!doctype html>
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
// \u041E\u0431\u044B\u0447\u043D\u044B\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 Telegram \u0437\u0430 \u0437\u0432\u0451\u0437\u0434\u044B (\u043C\u0438\u0448\u043A\u0438, \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u0438, \u0442\u043E\u0440\u0442\u044B, \u043A\u043E\u043B\u044C\u0446\u0430\u2026): \u0435\u0441\u0442\u044C \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435, \u043D\u043E \u043D\u0435 NFT
if (window.RK && window.RK.starGifts) window.RK.starGifts().forEach(function (g) { CAT[g.name] = g; });
function chg(c) { return (c.price / c.prev - 1) * 100; }
function chgText(c) { var v = chg(c); return (v >= 0 ? '\u25B2 ' : '\u25BC ') + Math.abs(v).toFixed(1) + '%'; }
function chgColor(c) { return chg(c) >= 0 ? '#2bd46b' : '#ff5d73'; }
function supplyText(c) { return c.supply ? c.supply.toLocaleString('ru-RU') + ' \u0448\u0442.' : '\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F'; }

var QUICK = [1.5, 2, 3, 5, 10, 20];
var RTP = 0.60, MAX_CHANCE = 0.75, MAX_PICK = 6, SHOW = 15;
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
    if (!s.spinning) { // \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440; \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u0441\u0442\u0430\u0432\u043A\u0443 \u043A\u0430\u043A \u0431\u044B\u043B\u0430
      s.inv = loadInv();
      s.own = s.own.filter(function (u) { return s.inv.some(function (it) { return it.uid === u; }); });
    }
    var picked = s.inv.filter(function (u) { return s.own.indexOf(u.uid) !== -1; });
    if (!picked.length) return null;
    var total = 0, top = null;
    picked.forEach(function (u) { var c = CAT[u.key]; total += c.price; if (!top || c.price > top.price) top = c; });
    var name = picked.length === 1 ? CAT[picked[0].key].name : giftsWord(picked.length);
    return { price: Math.round(total * 100) / 100, name: name, color: top.color, img: top.img, count: picked.length };
  }

  // \u0410\u043F\u0433\u0440\u0435\u0439\u0434 \u043A\u0440\u0443\u0442\u0438\u0442 \u0441\u0435\u0440\u0432\u0435\u0440: \u043E\u043D \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u0442 \u0441\u0442\u0430\u0432\u043A\u0443, \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0448\u0430\u043D\u0441 \u0438 \u0440\u0430\u0437\u044B\u0433\u0440\u044B\u0432\u0430\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442.
  // \u0418\u0433\u0440\u0430 \u043A\u0440\u0443\u0442\u0438\u0442 \u043A\u043E\u043B\u0435\u0441\u043E \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u0441\u0442\u0440\u0435\u043B\u043A\u0430 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0430\u0441\u044C \u0442\u0430\u043C, \u0433\u0434\u0435 \u0432\u044B\u043F\u0430\u043B\u043E \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435.
  spin() {
    var s = this.state, self = this;
    var st0 = this.stake();
    var tgt = s.target ? CAT[s.target] : null;
    if (!st0 || !tgt || s.spinning || tgt.price <= st0.price) return;
    this.setState({ spinning: true, result: null, overlay: false });
    window.RK.net.req('upg.spin', { uids: s.own.slice(), target: s.target, side: s.side }).then(function (res) {
      if (!res.ok) { self.setState({ spinning: false }); if (window.RK.toast) window.RK.toast(res.err, false); return; }
      var d = res.data, win = d.win, chance = d.chance;
      var st = self.state;
      var base = st.angle - (st.angle % 360) + 360 * (st.fast ? 3 : 6);
      var dur = st.fast ? 900 : 3600;
      self.setState({ angle: base + d.r * 360, lastChance: chance, lastSide: st.side });
      self.timer = setTimeout(function () {
        var mult = 'x' + (d.tPrice / d.stake).toFixed(2);
        self.setState({
          own: [], target: null, spinning: false,
          result: win ? 'win' : 'lose', overlay: true, history: d.history || self.state.history,
          res: { win: win, tgtName: tgt.name, tgtPrice: tgt.price, tgtImg: tgt.img, stakeName: st0.name, stakePrice: st0.price, stakeImg: st0.img, mult: mult }
        });
      }, dur + 150);
    });
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
`;var a0=`<!doctype html>
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

<div role="tablist" style="display: flex; gap: 14px; align-items: baseline; overflow-x: auto; -webkit-overflow-scrolling: touch">
<sc-for list="{{tabs}}" as="tb" hint-placeholder-count="4">
<button type="button" role="tab" onClick="{{tb.pick}}" aria-selected="{{tb.sel}}" style="flex-shrink: 0; border: 0; border-bottom: 3px solid {{tb.line}}; background: transparent; padding: 6px 0; font-family: Rubik, system-ui, sans-serif; font-size: 16px; font-weight: 700; cursor: pointer; color: {{tb.color}}">{{tb.label}}</button>
</sc-for>
</div>
<div style="font-size: 12px; color: #8a90a0; margin-top: -6px">{{tabHint}}</div>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px">
<sc-for list="{{grid}}" as="c" hint-placeholder-count="6">
<sc-if value="{{c.hasArt}}" hint-placeholder-val="{{ true }}">
<button type="button" onClick="{{c.open}}" aria-label="{{c.name}}, {{c.priceText}}" style="position: relative; min-width: 0; border: 0; border-radius: 20px; overflow: hidden; padding: 0; cursor: pointer; background: {{c.bg}}; box-shadow: 0 6px 20px {{c.shadow}}">
<img src="{{c.art}}" alt="" style="width: 100%; display: block; aspect-ratio: {{c.ratio}}; object-fit: cover">
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
<img src="{{dArt}}" alt="{{dName}}" style="width: 150px; height: {{dArtH}}px; border-radius: 16px; object-fit: cover; flex-shrink: 0">
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

<sc-if value="{{isPromo}}" hint-placeholder-val="{{ false }}">
<label style="height: 56px; border-radius: 16px; background: #0d0f14; border: 2px solid {{promoBorder}}; display: flex; align-items: center; gap: 10px; padding: 0 14px; cursor: text">
<span style="font-size: 20px" aria-hidden="true">\u{1F39F}\uFE0F</span>
<input type="text" autocomplete="off" autocapitalize="characters" spellcheck="false" enterkeyhint="go" aria-label="\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434" placeholder="\u0412\u0432\u0435\u0434\u0438 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434" value="{{promoCode}}" onInput="{{onPromo}}" onKeyDown="{{onPromoKey}}" style="flex-grow: 1; min-width: 0; height: 100%; border: 0; outline: none; background: transparent; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 900; letter-spacing: 1px; color: #ffffff; text-transform: uppercase">
</label>
</sc-if>
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
// \u041E\u0431\u044B\u0447\u043D\u044B\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 Telegram \u0437\u0430 \u0437\u0432\u0451\u0437\u0434\u044B (\u043C\u0438\u0448\u043A\u0438, \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u0438, \u0442\u043E\u0440\u0442\u044B, \u043A\u043E\u043B\u044C\u0446\u0430\u2026): \u0435\u0441\u0442\u044C \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435, \u043D\u043E \u043D\u0435 NFT
if (window.RK && window.RK.starGifts) window.RK.starGifts().forEach(function (g) { CAT[g.name] = g; });
function chg(c) { return (c.price / c.prev - 1) * 100; }
function chgText(c) { var v = chg(c); return (v >= 0 ? '\u25B2 ' : '\u25BC ') + Math.abs(v).toFixed(1) + '%'; }
function chgColor(c) { return chg(c) >= 0 ? '#2bd46b' : '#ff5d73'; }
function supplyText(c) { if (c.star) return c.stars + ' \u2B50 \xB7 \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u043A'; return c.supply ? c.supply.toLocaleString('ru-RU') + ' \u0448\u0442.' : '\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F'; }

// \u041A\u0435\u0439\u0441\u044B, \u0441\u043E\u0441\u0442\u0430\u0432\u044B \u0438 \u0448\u0430\u043D\u0441\u044B \u2014 \u043E\u0431\u0449\u0438\u0439 \u0444\u0430\u0439\u043B src/cases.js (\u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: \u043E\u043D \u0438 \u043A\u0440\u0443\u0442\u0438\u0442 \u043A\u0435\u0439\u0441\u044B)
var CM = window.RK.cases;
var FREE_COOLDOWN = CM.FREE_COOLDOWN;
var CASE_TABS = [
  { id: 'cheap', label: '\u0414\u0435\u0448\u0451\u0432\u044B\u0435', hint: '\u041E\u0442 0.5 TON \xB7 \u043C\u0438\u0448\u043A\u0438, \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u0438, \u0442\u043E\u0440\u0442\u044B, \u043A\u043E\u043B\u044C\u0446\u0430 \u0438 NFT' },
  { id: 'mid', label: '\u0421\u0440\u0435\u0434\u043D\u0438\u0435', hint: 'NFT-\u043F\u043E\u0434\u0430\u0440\u043A\u0438 \xB7 \u0432 \xAB\u041A\u0430\u0440\u043C\u0430\u043D\u043D\u0438\u043A\u0435\xBB \u0435\u0449\u0451 \u0438 TON' },
  { id: 'exp', label: '\u0414\u043E\u0440\u043E\u0433\u0438\u0435', hint: '\u0420\u0435\u0434\u043A\u0438\u0435 \u0438 \u0434\u043E\u0440\u043E\u0433\u0438\u0435 NFT' },
  { id: 'free', label: '\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435', hint: '\u0414\u043B\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 \u043A\u0430\u043D\u0430\u043B\u0430 \xB7 \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u0438 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0443' }
];
var BUILT = CM.build();
var CASES = CM.CASES.map(function (c0) { var b = BUILT[c0.id]; return Object.assign({}, c0, { pool: b.pool, probs: b.probs, top: b.top }); });
// \u041F\u0440\u0438\u0437\u044B-TON (\u0437\u0430\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0441\u0440\u0430\u0437\u0443 \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441, \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u043D\u0435 \u043F\u043E\u043F\u0430\u0434\u0430\u044E\u0442)
var TON_IMG = 'assets/ton.svg';
CAT['TON_0.1'] = { name: '0.1 TON', supply: 0, base: 0.1, price: 0.1, prev: 0.1, img: TON_IMG, color: '#5fd4ff', ton: true };
CAT['TON_1'] = { name: '1 TON', supply: 0, base: 1, price: 1, prev: 1, img: TON_IMG, color: '#ffc83d', ton: true };
CAT['TON_0.25'] = { name: '0.25 TON', supply: 0, base: 0.25, price: 0.25, prev: 0.25, img: TON_IMG, color: '#5fd4ff', ton: true };
CAT['TON_0.5'] = { name: '0.5 TON', supply: 0, base: 0.5, price: 0.5, prev: 0.5, img: TON_IMG, color: '#c77dff', ton: true };
CAT['TON_3'] = { name: '3 TON', supply: 0, base: 3, price: 3, prev: 3, img: TON_IMG, color: '#ff5d73', ton: true };
CASES.forEach(function (c) { c.pool = c.pool.filter(function (k) { return CAT[k]; }); });

var TILE = 92, GAP = 6, STEP = TILE + GAP, N = 44, WIN_IDX = 38, CENTER = 179;
function caseById(id) { return CASES.filter(function (c) { return c.id === id; })[0]; }
function fmt(p) { return (Math.round(p * 100) / 100) + ' TON'; }
function roll(c) { var r = Math.random(), acc = 0; for (var i = 0; i < c.pool.length; i++) { acc += c.probs[i]; if (r < acc) return c.pool[i]; } return c.pool[c.pool.length - 1]; }
function previewStrip(c) { var s = []; for (var i = 0; i < N; i++) s.push(c.free ? roll(c) : c.pool[i % c.pool.length]); return s; }
function fmtChance(p) { var v = p * 100; return v >= 10 ? v.toFixed(1) + '%' : (v >= 1 ? v.toFixed(2) + '%' : v.toFixed(3) + '%'); }
function NET() { return window.RK && window.RK.net; }
function promoDone() { return !!(window.RK && window.RK.acct && window.RK.acct.promoDone); }
function freeAt() { return (window.RK && window.RK.acct && window.RK.acct.freeAt) || 0; }
function hms(ms) { var s = Math.ceil(ms / 1000), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), x = s % 60; return h + ':' + ('0' + m).slice(-2) + ':' + ('0' + x).slice(-2); }
// LIVE-\u043B\u0435\u043D\u0442\u0430: \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u0432\u044B\u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0438\u0433\u0440\u043E\u043A\u043E\u0432 (\u0441\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0435\u0442 \u0438\u0445 \u0432\u0441\u0435\u043C)
function liveFeed() { var n = NET(); return ((n && n.feed) || []).filter(function (f) { return f.key && CAT[f.key]; }).slice(0, 7).map(function (f) { return f.key; }); }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      caseId: null, tab: 'cheap', balance: 0, fast: false, spinning: false,
      strip: [], offset: 0, anim: false, won: null, overlay: false, now: Date.now(), shownBal: null, promoCode: ''
    };
  }
  componentDidMount() {
    var self = this;
    this.iv = setInterval(function () { self.setState({ now: Date.now() }); }, 1000);
  }
  componentWillUnmount() { clearTimeout(this.t1); clearTimeout(this.t2); clearInterval(this.iv); }

  openCase(id) {
    var c = caseById(id);
    if (!c || c.locked || this.state.spinning) return;
    this.setState({ caseId: id, strip: previewStrip(c), offset: 2 * STEP + TILE / 2 - CENTER, anim: false, overlay: false });
    if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo(0, 0);
  }
  freeLeft() { return Math.max(0, freeAt() + FREE_COOLDOWN - this.state.now); }

  // \u041A\u0435\u0439\u0441 \u043A\u0440\u0443\u0442\u0438\u0442 \u0441\u0435\u0440\u0432\u0435\u0440: \u043E\u043D \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0446\u0435\u043D\u0443, \u0440\u0430\u0437\u044B\u0433\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u0438\u0437 \u0438 \u043A\u043B\u0430\u0434\u0451\u0442 \u0435\u0433\u043E \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C.
  // \u0418\u0433\u0440\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0432\u044B\u0438\u0433\u0440\u044B\u0448\u0435.
  open() {
    var s = this.state, c = caseById(s.caseId), self = this, net = NET();
    if (!c || s.spinning) return;
    if (c.promo) { if (promoDone() || s.promoCode.trim().length < 3) return; }
    else if (c.free) { if (this.freeLeft() > 0) return; }
    else if (s.balance < c.price) return;
    this.setState({ spinning: true, overlay: false, won: null, shownBal: Math.round((s.balance - (c.free ? 0 : c.price)) * 100) / 100 });
    net.req('case.open', c.promo ? { id: c.id, code: s.promoCode.trim() } : { id: c.id }).then(function (r) {
      if (r.ok && c.promo) self.setState({ promoCode: '' });
      if (!r.ok) { self.setState({ spinning: false, shownBal: null }); if (window.RK.toast) window.RK.toast(r.err, false); return; }
      var won = r.data.won, strip = [];
      for (var i = 0; i < N; i++) strip.push(i === WIN_IDX ? won : roll(c));
      var finalOffset = WIN_IDX * STEP + TILE / 2 - CENTER + (Math.random() - 0.5) * (TILE - 20);
      var dur = self.state.fast ? 1100 : 4800;
      self.setState({ strip: strip, offset: 2 * STEP + TILE / 2 - CENTER, anim: false });
      self.t1 = setTimeout(function () {
        self.setState({ offset: finalOffset, anim: true });
        self.t2 = setTimeout(function () {
          self.setState({ spinning: false, shownBal: null, won: { key: won, caseId: c.id, item: r.data.item }, overlay: true });
        }, dur + 120);
      }, 40);
    });
  }

  renderVals() {
    var self = this, s = this.state;
    var c = s.caseId ? caseById(s.caseId) : null;
    var dur = s.fast ? 1.1 : 4.8;
    var freeLeft = this.freeLeft();
    var canOpen = c && !s.spinning && (c.promo ? !promoDone() && s.promoCode.trim().length >= 3 : c.free ? freeLeft === 0 : s.balance >= c.price);
    var invNow = window.RK.inventory.list().filter(function (it) { return CAT[it.key]; });
    var won = s.won ? CAT[s.won.key] : null;
    var wonCase = s.won ? caseById(s.won.caseId) : null;
    var mult = won && wonCase && wonCase.price ? won.price / wonCase.price : 0;
    var list = CASES.filter(function (x) { return x.cat === s.tab; });

    return {
      balanceText: fmt(s.spinning && s.shownBal != null ? s.shownBal : s.balance),
      toggleFast: function () { if (!self.state.spinning) self.setState({ fast: !self.state.fast }); },
      fastPressed: s.fast ? 'true' : 'false', fastBorder: s.fast ? '#ffc83d' : '#1a1d27', fastColor: s.fast ? '#ffc83d' : '#a3a8b5',
      inGrid: !c, inDetail: !!c,
      toGrid: function () { if (!self.state.spinning) self.setState({ caseId: null, overlay: false }); },
      liveDrops: liveFeed().map(function (k) { var it = CAT[k]; return { name: it.name, img: it.img, color: it.color }; }),
      tabs: CASE_TABS.map(function (t) { var sel = s.tab === t.id; return { label: t.label, sel: sel ? 'true' : 'false', color: sel ? '#ffffff' : '#6c7282', line: sel ? '#ffc83d' : 'transparent', pick: function () { self.setState({ tab: t.id }); } }; }),
      tabHint: (CASE_TABS.filter(function (t) { return t.id === s.tab; })[0] || {}).hint || '',
      grid: list.map(function (x) {
        var fl = x.free && !x.promo && !x.locked && freeLeft > 0;
        var pd = !!x.promo && promoDone();
        return {
          name: x.name, priceText: x.promo ? '\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434' : x.free ? '\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E' : fmt(x.price), opened: x.opened.toLocaleString('ru-RU') + ' \u043E\u0442\u043A\u0440.',
          color: x.color, dark: x.dark, bg: x.bg, glow: x.glow, edge: x.edge, isNew: !!x.isNew,
          hasArt: !!x.art, noArt: !x.art, art: x.art || '', ratio: x.ratio || '384 / 418', shadow: x.glow.replace('0.9', '0.35').replace('0.95', '0.35'),
          prizeImg: CAT[x.top].img, locked: !!x.locked || fl || pd, lockText: x.locked ? x.lockText : pd ? '\u0423\u0436\u0435 \u043E\u0442\u043A\u0440\u044B\u0442' : '\u0427\u0435\u0440\u0435\u0437 ' + hms(freeLeft),
          open: function () { if (!x.locked) self.openCase(x.id); }
        };
      }),
      dHasArt: !!(c && c.art), dNoArt: !(c && c.art), dArt: c && c.art ? c.art : '', dArtH: c && c.ratio === '1 / 1' ? 150 : 163,
      dName: c ? c.name : '', dPriceText: c ? (c.promo ? (promoDone() ? '\u0422\u044B \u0443\u0436\u0435 \u043E\u0442\u043A\u0440\u044B\u043B \u043F\u0440\u043E\u043C\u043E-\u043A\u0435\u0439\u0441 \u2014 \u043E\u043D \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D 1 \u0440\u0430\u0437' : '\u041F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0443 \xB7 1 \u0440\u0430\u0437 \u043D\u0430 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 \xB7 \u043D\u0443\u0436\u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430') : c.free ? '\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0440\u0430\u0437 \u0432 \u0441\u0443\u0442\u043A\u0438 \xB7 \u043D\u0443\u0436\u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B' : fmt(c.price)) : '',
      isPromo: !!(c && c.promo) && !promoDone(), promoCode: s.promoCode, promoBorder: s.promoCode ? '#c77dff' : '#262b3a',
      onPromo: function (e) { self.setState({ promoCode: String((e && e.target && e.target.value) || '').toUpperCase().replace(/[^A-Z0-9_]/g, '').slice(0, 24) }); },
      onPromoKey: function (e) { if (e && e.key === 'Enter') { if (e.target && e.target.blur) e.target.blur(); self.open(); } },
      dOpened: c ? '\u041E\u0442\u043A\u0440\u044B\u0442\u043E ' + c.opened.toLocaleString('ru-RU') + ' \u0440\u0430\u0437' : '',
      dBg: c ? c.bg : '#151821', dEdge: c ? c.edge : '#222838', dGlow: c ? c.glow : 'transparent',
      dColor: c ? c.color : '#3a3f4d', dDark: c ? c.dark : '#2a2e3a', dPrizeImg: c ? CAT[c.top].img : GIFT_IMG,
      strip: s.strip.map(function (k) { var it = CAT[k]; return { name: it.name, img: it.img, priceText: fmt(it.price), color: it.color }; }),
      stripStyle: 'transform: translateX(' + (-s.offset) + 'px); transition: ' + (s.anim ? 'transform ' + dur + 's cubic-bezier(0.08, 0.7, 0.12, 1)' : 'none'),
      open: function () { self.open(); },
      openDisabled: !canOpen,
      btnBg: canOpen ? '#ffc83d' : '#1d2230', btnColor: canOpen ? '#1a1300' : '#6c7282',
      btnShadow: canOpen ? '0 6px 24px rgba(255,200,61,0.35)' : 'none',
      btnText: !c ? '' : (s.spinning ? '\u041E\u0422\u041A\u0420\u042B\u0412\u0410\u0415\u041C...' : (c.promo ? (promoDone() ? '\u0423\u0416\u0415 \u041E\u0422\u041A\u0420\u042B\u0422' : '\u041E\u0422\u041A\u0420\u042B\u0422\u042C \u041F\u041E \u041F\u0420\u041E\u041C\u041E\u041A\u041E\u0414\u0423') : c.free ? (freeLeft > 0 ? '\u0427\u0415\u0420\u0415\u0417 ' + hms(freeLeft) : '\u041E\u0422\u041A\u0420\u042B\u0422\u042C \u0411\u0415\u0421\u041F\u041B\u0410\u0422\u041D\u041E') : (s.balance >= c.price ? '\u041E\u0422\u041A\u0420\u042B\u0422\u042C \xB7 ' + fmt(c.price) : '\u041D\u0415 \u0425\u0412\u0410\u0422\u0410\u0415\u0422 TON'))),
      contents: c ? c.pool.map(function (k, i) { var it = CAT[k]; return { name: it.name, img: it.img, priceText: fmt(it.price), color: it.color, chanceText: fmtChance(c.probs[i]) }; }).reverse() : [],
      loot: invNow.slice(0, 3).map(function (l) { var it = CAT[l.key]; return { name: it.name, img: it.img, priceText: fmt(it.price) }; }),
      invInfo: invNow.length ? invNow.length + ' \u0448\u0442. \xB7 \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0438\u043B\u0438 \u0432\u044B\u0432\u0435\u0441\u0442\u0438' : '\u0417\u0430\u0431\u0438\u0440\u0430\u0439 \u0434\u0440\u043E\u043F\u044B, \u043E\u043D\u0438 \u043F\u043E\u043F\u0430\u0434\u0443\u0442 \u0441\u044E\u0434\u0430',
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
      // \u043F\u0440\u043E\u0434\u0430\u0442\u044C \u0432\u044B\u0438\u0433\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u2014 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0435\u0440
      sellWon: function () {
        var st = self.state; if (!st.won || !st.won.item) return;
        var uid = st.won.item.uid; self.setState({ overlay: false, won: null });
        NET().req('inv.sell', { uids: [uid] }).then(function (r) { if (r.ok) window.RK.toast('\u041F\u0440\u043E\u0434\u0430\u043D\u043E \u0437\u0430 ' + fmt(r.data.sum), true); else window.RK.toast(r.err, false); });
      },
      keepWon: function () { self.setState({ overlay: false, won: null }); } // \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0443\u0436\u0435 \u043B\u0435\u0436\u0438\u0442 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435
    };
  }
}
<\/script>
</body>
</html>
`;var i0=`<!doctype html>
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
var RTP = 0.70;
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
      balance: 0, bet: 1, mines: 3, phase: 'idle',
      mineMap: [], revealed: [], hit: -1, overlay: false, res: null
    };
  }

  // \u041C\u0438\u043D\u044B \u0440\u0430\u0441\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 \u2014 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0440\u0430\u0443\u043D\u0434\u0430 \u0438\u0433\u0440\u0430 \u043D\u0435 \u0437\u043D\u0430\u0435\u0442, \u0433\u0434\u0435 \u043E\u043D\u0438. \u041A\u0430\u0436\u0434\u0430\u044F \u043A\u043B\u0435\u0442\u043A\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435.
  componentDidMount() {
    var self = this;
    window.RK.net.req('mines.state').then(function (r) { // \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D\u043D\u0430\u044F \u0438\u0433\u0440\u0430 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0437\u0430\u043A\u0440\u044B\u043B \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435) \u2014 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u043C
      if (r.ok && r.data.game) self.applyGame(r.data.game, 'playing');
    });
  }
  applyGame(g, phase, extra) {
    var map = g.map || []; var mineMap = []; for (var i = 0; i < SIZE; i++) mineMap.push(!!map[i]);
    this.setState(Object.assign({ phase: phase, bet: g.bet, mines: g.mines, revealed: g.revealed.slice(), mineMap: mineMap, hit: g.hit }, extra || {}));
  }
  start() {
    var s = this.state, self = this;
    if (s.phase === 'playing' || this.busy || s.bet > s.balance || !(s.bet >= 0.1)) return;
    this.busy = true;
    window.RK.net.req('mines.start', { bet: s.bet, mines: s.mines }).then(function (r) {
      self.busy = false;
      if (!r.ok) { window.RK.toast(r.err, false); return; }
      self.applyGame(r.data.game, 'playing', { overlay: false, res: null });
    });
  }

  safeCount() {
    return this.state.revealed.filter(function (v) { return v; }).length;
  }

  reveal(i) {
    var s = this.state, self = this;
    if (s.phase !== 'playing' || s.revealed[i] || this.busy) return;
    this.busy = true;
    window.RK.net.req('mines.reveal', { i: i }).then(function (r) {
      self.busy = false;
      if (!r.ok) { window.RK.toast(r.err, false); return; }
      var d = r.data, g = d.game;
      if (d.boom) self.applyGame(g, 'lost', { hit: i, overlay: true, res: { win: false, amount: g.bet, mult: g.mult } });
      else if (d.auto) self.applyGame(g, 'won', { overlay: true, res: { win: true, amount: d.win, mult: d.mult } });
      else self.applyGame(g, 'playing');
    });
  }

  cashout() {
    var s = this.state, self = this;
    if (s.phase !== 'playing' || this.safeCount() === 0 || this.busy) return;
    this.busy = true;
    window.RK.net.req('mines.cashout').then(function (r) {
      self.busy = false;
      if (!r.ok) { window.RK.toast(r.err, false); return; }
      self.applyGame(r.data.game, 'won', { overlay: true, res: { win: true, amount: r.data.win, mult: r.data.mult } });
    });
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
`;var n0=`<!doctype html>
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
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; padding-top: 12px; border-top: 1px solid #222838; max-height: 270px; overflow-y: auto; -webkit-overflow-scrolling: touch">
<sc-for list="{{gifts}}" as="g" hint-placeholder-count="4">
<button type="button" onClick="{{g.pick}}" aria-pressed="{{g.pressed}}" style="min-width: 0; background: #0b0d12; border: 2px solid {{g.border}}; border-radius: 12px; padding: 8px 4px; display: flex; flex-direction: column; align-items: center; gap: 2px; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff">
<img src="{{g.img}}" alt="" style="width: 40px; height: 40px">
<span style="max-width: 100%; font-size: 10px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{g.name}}</span>
<span style="font-size: 11px; font-weight: 700; color: #ffc83d">{{g.priceText}}</span>
</button>
</sc-for>
</div>
<sc-if value="{{noGifts}}" hint-placeholder-val="{{ false }}">
<div style="font-size: 13px; color: #8a90a0; text-align: center">\u041F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435 \u043D\u0435\u0442 \u2014 \u0432\u044B\u0431\u0435\u0439 \u0438\u0445 \u0432 \u043A\u0435\u0439\u0441\u0430\u0445</div>
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
// \u041F\u043E\u0434\u0430\u0440\u043A\u0438 \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F \u0438\u0433\u0440\u043E\u043A\u0430 (window.RK.inventory), \u0446\u0435\u043D\u044B \u2014 \u0438\u0437 \u043E\u0431\u0449\u0435\u0433\u043E \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430 (window.RK.gift)
function G(name) { return (window.RK && window.RK.gift && window.RK.gift(name)) || null; }
function INV() { return window.RK && window.RK.inventory; }
function invList() { var I = INV(); return I ? I.list().filter(function (it) { return !!G(it.key); }) : []; }
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
function giftPrice(k) { var g = G(k); return g ? g.price : 0; }
function fmt(x) { return (Math.floor(x * 100) / 100).toFixed(2) + ' TON'; }
// \u0441\u0442\u0430\u0432\u043A\u0430 = TON + \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 (\u0435\u0451 \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 \u043F\u043E \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0443 \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u0441\u0442\u0430\u0432\u043A\u0438)
function stakeOf(p) { return r2(p.ton + (p.giftValue || 0)); }

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
  return players.concat([{ id: 'house', name: 'RACKOON', house: true, me: false, giftValue: 0, ton: Math.round(pot * HOUSE / (1 - HOUSE) * 100) / 100, gifts: [], color: '#1d2230' }]);
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
  return (r ? r.players : []).map(function (p) { return { id: p.uid, name: p.name, photo: p.photo, me: isMe(p.uid), ton: p.ton, gifts: p.gifts, giftValue: p.giftValue || 0, color: p.color }; });
}

// \u0420\u0430\u0443\u043D\u0434\u044B \u0432\u0435\u0434\u0451\u0442 \u0441\u0435\u0440\u0432\u0435\u0440: \u043D\u0430 \u0430\u0440\u0435\u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0436\u0438\u0432\u044B\u0435 \u0438\u0433\u0440\u043E\u043A\u0438
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      rs: null, phase: 'wait', now: Date.now(), conn: false, err: '', sending: false,
      players: [], spunN: null, doneN: null,
      balance: 50, bet: 0.5, mode: 'ton', invTick: 0, pickGift: null,
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
        rkTrack({ game: 'pvp', bet: r2((m.ton || 0) + (m.giftPrice || giftPrice(m.gift))), round: self.betN !== m.n });
        self.betN = m.n;
        self.setState({ sending: false, err: '' });
      }));
      this.offs.push(net.on('pvp.err', function (m) {
        self.setState({ sending: false, err: m.msg || '\u041E\u0448\u0438\u0431\u043A\u0430' }); // \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u043F\u0438\u0441\u0430\u043B
        if (/\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 TON/.test(m.msg || '') && window.RK.toast) window.RK.toast(m.msg, false);
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

  join(ton, itemUid) {
    var s = this.state, net = NET();
    if (!net || !net.connected || (s.phase !== 'wait' && s.phase !== 'count') || s.sending) return false;
    net.send({ t: 'pvp.join', ton: ton, item: itemUid }); // \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u0430\u043C \u0441\u043F\u0438\u0448\u0435\u0442 \u0441\u0442\u0430\u0432\u043A\u0443 / \u0437\u0430\u0431\u0435\u0440\u0451\u0442 \u043F\u043E\u0434\u0430\u0440\u043E\u043A
    return true;
  }
  mainAction() {
    var s = this.state;
    if (s.mode === 'ton') {
      if (s.bet > s.balance || !(s.bet >= 0.1)) return;
      if (this.join(s.bet, null)) this.setState({ sending: true });
    } else {
      if (!s.pickGift) return;
      // pickGift = uid \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430 \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F: \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0438 \u0441\u0442\u0430\u0432\u0438\u043C
      var I = INV(), item = I ? I.list().filter(function (it) { return it.uid === s.pickGift; })[0] : null;
      if (!item || !G(item.key)) { this.setState({ pickGift: null, err: '\u042D\u0442\u043E\u0433\u043E \u043F\u043E\u0434\u0430\u0440\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435' }); return; }
      if (this.join(0, item.uid)) this.setState({ pickGift: null, sending: true });
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
    var inv = invList();
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
        giftImgs: p.gifts.filter(function (k) { return G(k); }).map(function (k) { return { img: G(k).img, name: G(k).name }; })
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
      gifts: inv.map(function (it) { var g = G(it.key); var sel = s.pickGift === it.uid; return { name: g.name, img: g.img, priceText: g.price + ' TON', pressed: sel ? 'true' : 'false', border: sel ? '#ffc83d' : '#222838', pick: function () { self.setState({ pickGift: sel ? null : it.uid }); } }; }),
      noGifts: inv.length === 0,
      toggleHistory: function () { self.setState({ view: self.state.view === 'history' ? 'players' : 'history' }); try { if (window.scrollTo) window.scrollTo(0, 0); } catch (e) {} },
      historyPressed: s.view === 'history' ? 'true' : 'false', historyBorder: s.view === 'history' ? '#ffc83d' : '#1a1d27',
      showPlayers: true, showHistory: s.view === 'history', historyCount: hist.length,
      gameId: r ? r.gameId : '\u2014', players: players,
      history: hist.map(function (h) { var mine = isMe(h.uid); return { id: h.id, name: mine ? '\u0422\u044B' : h.name, chance: h.chance, win: h.win, time: timeOf(h.time), avBg: h.av, initial: h.name.charAt(0).toUpperCase(), hasTon: h.ton > 0, tonText: h.ton.toFixed(2), giftImgs: (h.gifts || []).filter(function (k) { return G(k); }).map(function (k) { return G(k).img; }) }; }),
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
`;var l0=`<!doctype html>
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
// \u041E\u0431\u044B\u0447\u043D\u044B\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 Telegram \u0437\u0430 \u0437\u0432\u0451\u0437\u0434\u044B (\u043C\u0438\u0448\u043A\u0438, \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u0438, \u0442\u043E\u0440\u0442\u044B, \u043A\u043E\u043B\u044C\u0446\u0430\u2026): \u0435\u0441\u0442\u044C \u0432 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435, \u043D\u043E \u043D\u0435 NFT
if (window.RK && window.RK.starGifts) window.RK.starGifts().forEach(function (g) { CAT[g.name] = g; });
function chg(c) { return (c.price / c.prev - 1) * 100; }
function chgText(c) { var v = chg(c); return (v >= 0 ? '\u25B2 ' : '\u25BC ') + Math.abs(v).toFixed(1) + '%'; }
function chgColor(c) { return chg(c) >= 0 ? '#2bd46b' : '#ff5d73'; }
function supplyText(c) { if (c.star) return c.stars + ' \u2B50 \xB7 \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u043A'; return c.supply ? c.supply.toLocaleString('ru-RU') + ' \u0448\u0442.' : '\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F'; }

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
  // \u041F\u0440\u043E\u0434\u0430\u0436\u0430 \u2014 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0435\u0440: \u043E\u043D \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442, \u0447\u0442\u043E \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0442\u0432\u043E\u0438, \u0438 \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442 \u0438\u0445 \u0446\u0435\u043D\u0443
  sell() {
    var s = this.state, picked = this.selected(), self = this;
    if (!picked.length || this.selling) return;
    this.selling = true;
    window.RK.net.req('inv.sell', { uids: picked.map(function (it) { return it.uid; }) }).then(function (r) {
      self.selling = false;
      var msg = r.ok ? '\u041F\u0440\u043E\u0434\u0430\u043D\u043E ' + giftsWord(r.data.count) + ' \u0437\u0430 ' + fmt(r.data.sum) : r.err;
      self.setState({ sel: [], confirm: false, toast: msg });
      clearTimeout(self.tt); self.tt = setTimeout(function () { self.setState({ toast: null }); }, 2600);
    });
  }
  renderVals() {
    var self = this, s = this.state;
    s.items = loadItems(); // \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440
    s.sel = s.sel.filter(function (u) { return s.items.some(function (it) { return it.uid === u; }); });
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
      withdraw: function () { if (window.RK && window.RK.openDeposit) window.RK.openDeposit('wd'); },
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
`;var o0=`<!doctype html>
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
<div style="font-size: 13px; color: #e6d7a8">{{bonusAmount}} \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0434\u043B\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 \u043A\u0430\u043D\u0430\u043B\u0430</div>
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
  { title: '\u0414\u0440\u0443\u0433 \u043F\u043E\u043F\u043E\u043B\u043D\u0438\u043B \u0438 \u0441\u044B\u0433\u0440\u0430\u043B \u043D\u0430 1 TON', reward: '0.1 TON' },
  { title: '\u0414\u0440\u0443\u0433 \u0441\u044B\u0433\u0440\u0430\u043B \u043D\u0430 10 TON', reward: '1 TON' },
  { title: '\u0414\u0440\u0443\u0433 \u0441\u044B\u0433\u0440\u0430\u043B \u043D\u0430 100 TON', reward: '5 TON' }
];
function R() { return typeof window !== 'undefined' && window.RK ? window.RK : null; }
function today() { var d = new Date(Date.now() + 3 * 3600 * 1000); return d.toISOString().slice(0, 10); }
function fmt(x) { return (Math.round(x * 100) / 100).toFixed(2) + ' TON'; }
function hm(ms) { var m = Math.ceil(ms / 60000), h = Math.floor(m / 60); return h + ' \u0447 ' + (m % 60) + ' \u043C\u0438\u043D'; }
// \u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u0437\u0430\u0434\u0430\u043D\u0438\u0439, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u043D\u0430\u0433\u0440\u0430\u0434\u044B \u0438 \u0440\u0435\u0444\u0435\u0440\u0430\u043B\u044B \u0445\u0440\u0430\u043D\u0438\u0442 \u0441\u0435\u0440\u0432\u0435\u0440
var EMPTY = { cases: 0, crash: 0, pvp: 0, upgrade: 0, mines: 0, wagered: 0, won: 0 };

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { balance: 0, srv: null, toast: null, now: Date.now() };
  }
  load() { var self = this; R().net.req('tasks.state').then(function (r) { if (r.ok) self.setState({ srv: r.data }); }); }
  componentDidMount() {
    var self = this; this.load();
    this.offSt = R().net.on('status', function (n) { if (n.connected) self.load(); });
    this.iv = setInterval(function () { self.setState({ now: Date.now() }); self.load(); }, 30000);
  }
  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.tt); if (this.offSt) this.offSt(); }
  toast(t) { var self = this; this.setState({ toast: t }); clearTimeout(this.tt); this.tt = setTimeout(function () { self.setState({ toast: null }); }, 2600); }
  claim(id, amount, label) {
    var self = this;
    R().net.req('task.claim', { id: id }).then(function (r) {
      if (!r.ok) { self.toast(r.err); return; }
      self.toast('+' + fmt(r.data.reward) + ' \xB7 ' + label);
      self.load();
    });
  }
  refLink() {
    var r = R(), uid = r && r.user && r.user.id ? r.user.id : 'guest';
    var bot = r && r.botName ? r.botName : 'RackoonDropBot';
    return 'https://t.me/' + bot + '?start=ref_' + uid;
  }
  renderVals() {
    var self = this, s = this.state, st = (s.srv && s.srv.day) || EMPTY;
    var claimedList = (s.srv && s.srv.claimed) || [];
    var ref = (s.srv && s.srv.ref) || { friends: 0, earned: 0, steps: [] };
    var gotBonus = claimedList.indexOf('bonus') !== -1;
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
        var claimed = claimedList.indexOf(t.id) !== -1, complete = have >= t.goal;
        return {
          title: t.title, reward: fmt(t.reward), icon: t.icon, iconBg: t.iconBg, href: t.href,
          pct: Math.round(have / t.goal * 100), barColor: complete ? '#2bd46b' : '#ffc83d',
          progressText: (t.key === 'wagered' ? have.toFixed(2) + ' / ' + t.goal + ' TON' : have + ' / ' + t.goal),
          border: complete && !claimed ? '#2bd46b' : '#222838',
          canClaim: complete && !claimed, goPlay: !complete, done: claimed,
          claim: function () { self.claim(t.id, t.reward, t.title.toLowerCase()); }
        };
      }),
      refs: REFS.map(function (r, i) { var st2 = ref.steps[i]; return { title: r.title, reward: r.reward, count: (st2 ? st2.count : 0) + ' \u0434\u0440\u0443\u0437\u0435\u0439' }; }),
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
`;var s0=`<!doctype html>
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
// \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433: \u0441\u0435\u0440\u0432\u0435\u0440 \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0441\u0443\u043C\u043C\u0443 \u0441\u0442\u0430\u0432\u043E\u043A (\u043E\u0431\u043E\u0440\u043E\u0442) \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u0430
var COLORS = ['#13a58a', '#c41a78', '#2a6fe0', '#d9730a', '#7c3fe0', '#c92a2d', '#078a8a', '#9a7a00', '#3a8a2a', '#b0368f', '#5a6fd6', '#d1495b'];
var TABS = [{ id: 'day', label: '\u0414\u0435\u043D\u044C' }, { id: 'week', label: '\u041D\u0435\u0434\u0435\u043B\u044F' }, { id: 'all', label: '\u0412\u0441\u0451 \u0432\u0440\u0435\u043C\u044F' }];
var HINTS = { day: '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u0441\u0443\u043C\u043C\u0435 \u0441\u0442\u0430\u0432\u043E\u043A \u0437\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F', week: '\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043F\u043E \u0441\u0443\u043C\u043C\u0435 \u0441\u0442\u0430\u0432\u043E\u043A \u0437\u0430 7 \u0434\u043D\u0435\u0439', all: '\u041B\u0443\u0447\u0448\u0438\u0435 \u0438\u0433\u0440\u043E\u043A\u0438 RACKOON \u0437\u0430 \u0432\u0441\u0451 \u0432\u0440\u0435\u043C\u044F' };
function fmt(x) { return x >= 10000 ? (x / 1000).toFixed(1) + 'K' : x >= 1000 ? (Math.round(x / 10) / 100).toFixed(2) + 'K' : (Math.round(x * 100) / 100).toFixed(2); }
function colorOf(name) { var h = 0; for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0; return COLORS[Math.abs(h) % COLORS.length]; }
var EMPTY_P = { name: '\u2014', value: 0, me: false, color: '#2a2e3a' };

class Component extends DCLogic {
  constructor(props) { super(props); this.state = { tab: 'day', data: {}, loading: true }; }
  load(tab) {
    var self = this, t = tab || this.state.tab;
    window.RK.net.req('leaders', { tab: t }).then(function (r) { if (r.ok) { var d = Object.assign({}, self.state.data); d[t] = r.data; self.setState({ data: d, loading: false }); } });
  }
  componentDidMount() {
    var self = this; this.load();
    this.offSt = window.RK.net.on('status', function (n) { if (n.connected) self.load(); });
    this.iv = setInterval(function () { self.load(); }, 15000);
  }
  componentWillUnmount() { clearInterval(this.iv); if (this.offSt) this.offSt(); }
  renderVals() {
    var self = this, s = this.state;
    var tab = TABS.filter(function (t) { return t.id === s.tab; })[0];
    var d = s.data[s.tab] || { top: [], me: { place: 0, value: 0 }, total: 0 };
    var myName = (window.RK && window.RK.user && (window.RK.user.username || window.RK.user.first_name)) || '\u0422\u044B';
    var list = d.top.map(function (p) { return { name: p.name, value: p.value, me: p.me, color: p.me ? '#ffc83d' : colorOf(p.name) }; });
    var meIdx = list.findIndex(function (x) { return x.me; });
    var me = meIdx >= 0 ? list[meIdx] : { name: myName, value: d.me.value || 0, me: true };
    if (meIdx < 0) meIdx = d.me.place > 0 ? d.me.place - 1 : list.length;
    var top = list.slice(0, 3);
    while (top.length < 3) top.push(EMPTY_P);
    var order = [top[1], top[0], top[2]];
    var meta = [{ place: 2, h: 70, size: 64, ring: '#c9d1e0', base: '#c9d1e0' }, { place: 1, h: 96, size: 82, ring: '#ffc83d', base: '#ffc83d' }, { place: 3, h: 54, size: 60, ring: '#d98a4a', base: '#d98a4a' }];
    var ahead = meIdx > 0 && list[meIdx - 1] ? list[meIdx - 1] : null;
    return {
      meAvatar: (window.RK && window.RK.user && window.RK.user.photo_url) || '/_blob/661884b648dd965ea69af44ea8c7ee95',
      tabs: TABS.map(function (t) { var sel = t.id === s.tab; return { label: t.label, sel: sel ? 'true' : 'false', bg: sel ? '#ffc83d' : 'transparent', color: sel ? '#1a1300' : '#a3a8b5', pick: function () { self.setState({ tab: t.id }); self.load(t.id); } }; }),
      prizeTitle: tab.id === 'all' ? '\u0417\u0430\u043B \u0441\u043B\u0430\u0432\u044B' : '\u0420\u0435\u0439\u0442\u0438\u043D\u0433',
      prizeText: HINTS[tab.id],
      metricLabel: '\u041E\u0431\u043E\u0440\u043E\u0442, TON',
      podium: order.map(function (p, i) {
        var m = meta[i];
        return { name: p.name, value: fmt(p.value) + ' TON', initial: p.name.charAt(0).toUpperCase(), avBg: p.color, isMe: p.me, notMe: !p.me, place: m.place, h: m.h, size: m.size, fs: Math.round(m.size * 0.4), ring: m.ring, base: m.base };
      }),
      playersLine: '\u25CF ' + (d.total || 0) + ' \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0432 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0435',
      rows: list.slice(3, 50).map(function (p, i) {
        return { place: i + 4, name: p.name, game: p.me ? '\u0442\u044B' : '', value: fmt(p.value), initial: p.name.charAt(0).toUpperCase(), avBg: p.color, isMe: p.me, notMe: !p.me, border: p.me ? '#ffc83d' : '#222838' };
      }),
      mePlace: d.me.place > 0 ? d.me.place : '\u2014',
      meName: me.name + ' (\u0442\u044B)',
      meValue: fmt(me.value),
      meHint: !(me.value > 0) ? '\u0421\u0434\u0435\u043B\u0430\u0439 \u0441\u0442\u0430\u0432\u043A\u0443 \u0432 \u043B\u044E\u0431\u043E\u0439 \u0438\u0433\u0440\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043F\u0430\u0441\u0442\u044C \u0432 \u0440\u0435\u0439\u0442\u0438\u043D\u0433' : (ahead ? '\u0414\u043E ' + (meIdx) + ' \u043C\u0435\u0441\u0442\u0430: ' + fmt(ahead.value - me.value + 0.01) + ' TON' : '\u0422\u044B \u043D\u0430 \u043F\u0435\u0440\u0432\u043E\u043C \u043C\u0435\u0441\u0442\u0435!')
    };
  }
}
<\/script>
</body>
</html>
`;var r0=`<!doctype html>
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

<sc-if value="{{needPin}}" hint-placeholder-val="{{ false }}">
<div style="background: #151821; border: 1px solid #222838; border-radius: 20px; padding: 22px 16px; display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center">
<div style="font-size: 40px" aria-hidden="true">\u{1F510}</div>
<div style="font-size: 18px; font-weight: 700">\u0412\u0432\u0435\u0434\u0438 PIN \u0430\u0434\u043C\u0438\u043D\u043A\u0438</div>
<label style="width: 100%; max-width: 240px; height: 56px; border-radius: 14px; background: #0d0f14; border: 1px solid {{pinBorder}}; display: flex; align-items: center; padding: 0 14px; cursor: text">
<input type="password" inputmode="numeric" autocomplete="off" enterkeyhint="go" aria-label="PIN \u0430\u0434\u043C\u0438\u043D\u043A\u0438" placeholder="\u2022\u2022\u2022\u2022" value="{{pin}}" onInput="{{onPin}}" onKeyDown="{{onPinKey}}" style="flex-grow: 1; min-width: 0; height: 100%; border: 0; outline: none; background: transparent; text-align: center; font-family: Rubik, system-ui, sans-serif; font-size: 24px; font-weight: 900; letter-spacing: 8px; color: #ffffff">
</label>
<button type="button" onClick="{{sendPin}}" style="width: 100%; max-width: 240px; height: 52px; border-radius: 14px; border: 0; background: #ffc83d; color: #1a1300; font-family: Rubik, system-ui, sans-serif; font-size: 16px; font-weight: 900; cursor: pointer">\u0412\u043E\u0439\u0442\u0438</button>
<sc-if value="{{hasPinMsg}}" hint-placeholder-val="{{ false }}"><div role="status" style="font-size: 13px; font-weight: 600; color: #ff8a9a">{{pinMsg}}</div></sc-if>
</div>
</sc-if>

<sc-if value="{{hasAccess}}" hint-placeholder-val="{{ true }}">
<div style="display: flex; align-items: center; gap: 10px; background: #151821; border: 1px solid #222838; border-radius: 16px; padding: 12px 14px">
<span style="width: 10px; height: 10px; border-radius: 50%; background: #2bd46b; flex-shrink: 0"></span>
<span style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1; min-width: 0"><span style="font-size: 14px; color: #c9cdd6">\u0420\u0435\u0430\u043B\u044C\u043D\u043E \u0432 \u0438\u0433\u0440\u0435 \u0441\u0435\u0439\u0447\u0430\u0441</span><sc-if value="{{demoOn}}" hint-placeholder-val="{{ false }}"><span style="font-size: 11px; color: {{demoColor}}">{{demoText}}</span></sc-if></span>
<span style="font-size: 20px; font-weight: 900; color: #ffffff">{{realOnline}}</span>
</div>
<div style="display: flex; justify-content: space-between; align-items: center">
<span style="display: flex; align-items: center; gap: 8px; font-size: 17px; font-weight: 700">\u0417\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0432\u044B\u0432\u043E\u0434<sc-if value="{{hasPending}}" hint-placeholder-val="{{ false }}"><span style="min-width: 22px; height: 22px; border-radius: 11px; background: #ff5d73; color: #ffffff; font-size: 12px; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; padding: 0 6px; box-sizing: border-box">{{pendingCount}}</span></sc-if></span>
<button type="button" onClick="{{refresh}}" style="height: 32px; border-radius: 10px; border: 1px solid #262b3a; background: #1b1e27; color: #a3a8b5; font-family: Rubik, system-ui, sans-serif; font-size: 12px; font-weight: 700; padding: 0 10px; cursor: pointer">\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C</button>
</div>
<div style="font-size: 12px; font-weight: 600; color: {{bizColor}}; line-height: 1.4">{{bizText}}</div>
<div style="display: flex; flex-direction: column; gap: 8px">
<sc-if value="{{noWds}}" hint-placeholder-val="{{ false }}">
<div style="border-radius: 14px; border: 1px dashed #2c3244; padding: 16px; text-align: center; font-size: 13px; color: #8a90a0">\u0417\u0430\u044F\u0432\u043E\u043A \u043F\u043E\u043A\u0430 \u043D\u0435\u0442</div>
</sc-if>
<sc-for list="{{wds}}" as="w" hint-placeholder-count="1">
<div style="background: #151821; border: 1px solid {{w.border}}; border-radius: 16px; padding: 12px; display: flex; flex-direction: column; gap: 8px">
<div style="display: flex; align-items: center; gap: 8px">
<span style="flex-grow: 1; min-width: 0; font-size: 15px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{w.who}}</span>
<span style="font-size: 11px; color: #8a90a0">{{w.time}}</span>
<span style="font-size: 11px; font-weight: 700; padding: 3px 7px; border-radius: 7px; background: {{w.stBg}}; color: {{w.stColor}}">{{w.status}}</span>
</div>
<sc-if value="{{w.isTon}}" hint-placeholder-val="{{ true }}">
<div style="font-size: 22px; font-weight: 900; color: #ffc83d">{{w.amount}} TON</div>
<button type="button" onClick="{{w.copy}}" style="text-align: left; border-radius: 10px; border: 1px solid #262b3a; background: #0d0f14; color: #c9cdd6; font-family: ui-monospace, Menlo, monospace; font-size: 11px; padding: 8px 10px; word-break: break-all; cursor: pointer">{{w.address}} <span style="color: #5fb8ff; font-family: Rubik, system-ui, sans-serif; font-weight: 700">\xB7 {{w.copyText}}</span></button>
</sc-if>
<sc-if value="{{w.isNft}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; flex-wrap: wrap; gap: 6px">
<sc-for list="{{w.gifts}}" as="g" hint-placeholder-count="2">
<span style="display: flex; align-items: center; gap: 4px; background: #0d0f14; border: 1px solid #262b3a; border-radius: 10px; padding: 4px 8px 4px 4px; font-size: 12px; font-weight: 700"><img src="{{g.img}}" alt="" style="width: 26px; height: 26px">{{g.name}}</span>
</sc-for>
</div>
<div style="font-size: 12px; color: #a3a8b5">\u041F\u0435\u0440\u0435\u0434\u0430\u0439 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0432 Telegram \u0438\u0433\u0440\u043E\u043A\u0443 <b style="color: #ffffff">{{w.who}}</b>, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0436\u043C\u0438 \xAB\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E\xBB</div>
</sc-if>
<div style="font-size: 12px; color: #8a90a0; line-height: 1.45">\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: <b style="color: #ffc83d">{{w.value}}</b> \xB7 \u041F\u043E\u043F\u043E\u043B\u043D\u0438\u043B: <b style="color: #ffffff">{{w.dep}}</b> \xB7 \u041F\u043E\u0441\u0442\u0430\u0432\u0438\u043B: <b style="color: #ffffff">{{w.wag}}</b> \xB7 \u0412\u044B\u0438\u0433\u0440\u0430\u043B: <b style="color: #ffffff">{{w.won}}</b> \xB7 \u0423\u0436\u0435 \u0432\u044B\u0432\u0435\u0434\u0435\u043D\u043E: <b style="color: #ffffff">{{w.out}}</b> \xB7 \u0411\u0430\u043B\u0430\u043D\u0441: <b style="color: #ffffff">{{w.bal}}</b></div>
<sc-if value="{{w.warn}}" hint-placeholder-val="{{ false }}">
<div style="font-size: 12px; font-weight: 700; color: #ff8a5c; background: rgba(255,138,92,0.1); border-radius: 10px; padding: 8px 10px">\u26A0\uFE0F {{w.warnText}}</div>
</sc-if>
<sc-if value="{{w.isPending}}" hint-placeholder-val="{{ true }}">
<sc-if value="{{w.canAuto}}" hint-placeholder-val="{{ false }}"><button type="button" onClick="{{w.autoSend}}" style="height: 44px; width: 100%; border-radius: 12px; border: 0; background: #ffc83d; color: #1a1300; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 900; cursor: pointer">{{w.autoText}}</button></sc-if>
<div style="display: grid; grid-template-columns: {{w.cols}}; gap: 6px">
<sc-if value="{{w.isTon}}" hint-placeholder-val="{{ true }}"><button type="button" onClick="{{w.pay}}" style="height: 44px; border-radius: 12px; border: 0; background: #2a7fff; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 900; cursor: pointer">\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 Tonkeeper</button></sc-if>
<button type="button" onClick="{{w.paid}}" style="height: 44px; border-radius: 12px; border: 0; background: #2bd46b; color: #06210f; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 900; cursor: pointer">\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E</button>
<button type="button" onClick="{{w.reject}}" style="height: 44px; border-radius: 12px; border: 0; background: {{w.rejBg}}; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 900; cursor: pointer">{{w.rejText}}</button>
</div>
</sc-if>
</div>
</sc-for>
</div>

<div style="background: #151821; border: 1px solid #222838; border-radius: 20px; padding: 14px; display: flex; flex-direction: column; gap: 12px; margin-top: 6px">
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
<sc-if value="{{uCanBan}}" hint-placeholder-val="{{ false }}">
<sc-if value="{{uBanned}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; align-items: center; gap: 10px; background: rgba(255,93,115,0.1); border: 1px solid rgba(255,93,115,0.45); border-radius: 14px; padding: 10px 12px">
<span style="flex-grow: 1; min-width: 0; font-size: 13px; font-weight: 600; color: #ff8a9a">\u26D4 {{uBanText}}</span>
<button type="button" onClick="{{unban}}" disabled="{{btnDisabled}}" style="height: 40px; border-radius: 12px; border: 0; background: #2bd46b; color: #06210f; font-size: 13px; padding: 0 12px; flex-shrink: 0; font-family: Rubik, system-ui, sans-serif; font-weight: 900; cursor: pointer">\u0420\u0430\u0437\u0431\u0430\u043D\u0438\u0442\u044C</button>
</div>
</sc-if>
<sc-if value="{{uNotBanned}}" hint-placeholder-val="{{ true }}">
<div style="display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 8px">
<label style="height: 44px; border-radius: 12px; background: #0d0f14; border: 1px solid #262b3a; display: flex; align-items: center; padding: 0 12px; cursor: text">
<input type="text" enterkeyhint="done" autocomplete="off" aria-label="\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u0431\u0430\u043D\u0430" placeholder="\u041F\u0440\u0438\u0447\u0438\u043D\u0430 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)" value="{{banReason}}" onInput="{{onBanReason}}" style="flex-grow: 1; min-width: 0; height: 100%; border: 0; outline: none; background: transparent; font-family: Rubik, system-ui, sans-serif; font-size: 14px; color: #ffffff">
</label>
<button type="button" onClick="{{ban}}" disabled="{{btnDisabled}}" style="height: 44px; border-radius: 12px; border: 0; background: {{banBg}}; color: #ffffff; font-size: 13px; padding: 0 14px; font-family: Rubik, system-ui, sans-serif; font-weight: 900; cursor: pointer">{{banText}}</button>
</div>
</sc-if>
</sc-if>
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

<div style="background: #151821; border: 1px solid #222838; border-radius: 20px; padding: 14px; display: flex; flex-direction: column; gap: 10px; margin-top: 6px">
<div style="display: flex; justify-content: space-between; align-items: center">
<span style="font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u0420\u0410\u0421\u0421\u042B\u041B\u041A\u0410 \u0412\u0421\u0415\u041C \u0418\u0413\u0420\u041E\u041A\u0410\u041C</span>
<span style="font-size: 12px; color: #8a90a0">{{bcCount}}</span>
</div>
<textarea aria-label="\u0422\u0435\u043A\u0441\u0442 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438" placeholder="\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u{1F525} \u041D\u043E\u0432\u044B\u0439 \u043A\u0435\u0439\u0441 \u0443\u0436\u0435 \u0432 \u0438\u0433\u0440\u0435! \u0417\u0430\u0445\u043E\u0434\u0438 \u0438 \u0437\u0430\u0431\u0438\u0440\u0430\u0439 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043A\u0435\u0439\u0441 \u0434\u043D\u044F" value="{{bcText}}" onInput="{{onBcText}}" rows="4" maxlength="3500" style="width: 100%; box-sizing: border-box; min-height: 96px; resize: vertical; border-radius: 14px; background: #0d0f14; border: 1px solid #262b3a; padding: 12px; outline: none; font-family: Rubik, system-ui, sans-serif; font-size: 14px; line-height: 1.4; color: #ffffff"></textarea>
<button type="button" onClick="{{toggleBcBtn}}" aria-pressed="{{bcBtnPressed}}" style="display: flex; align-items: center; gap: 10px; height: 40px; border: 0; background: transparent; padding: 0; color: #c9cdd6; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 500; cursor: pointer; text-align: left">
<span style="width: 22px; height: 22px; border-radius: 7px; border: 2px solid {{bcBtnBorder}}; background: {{bcBtnBg}}; color: #1a1300; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 900; flex-shrink: 0">{{bcBtnMark}}</span>\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u{1F3AE} \u0418\u0433\u0440\u0430\u0442\u044C\xBB
</button>
<sc-if value="{{bcIdle}}" hint-placeholder-val="{{ true }}">
<button type="button" onClick="{{bcSend}}" disabled="{{bcDisabled}}" style="height: 52px; border-radius: 14px; border: 0; background: {{bcSendBg}}; color: {{bcSendColor}}; font-size: 15px; font-family: Rubik, system-ui, sans-serif; font-weight: 900; cursor: pointer">{{bcSendText}}</button>
</sc-if>
<sc-if value="{{bcRunning}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; flex-direction: column; gap: 8px">
<div style="height: 8px; border-radius: 4px; background: #0d0f14; overflow: hidden"><div style="height: 100%; width: {{bcPct}}; background: #ffc83d; transition: width 0.4s"></div></div>
<div style="display: flex; justify-content: space-between; align-items: center; gap: 8px">
<span role="status" style="font-size: 13px; color: #c9cdd6">{{bcProgress}}</span>
<button type="button" onClick="{{bcStop}}" style="height: 36px; border-radius: 10px; border: 1px solid #ff5d73; background: transparent; color: #ff5d73; font-size: 12px; padding: 0 12px; font-family: Rubik, system-ui, sans-serif; font-weight: 900; cursor: pointer">\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C</button>
</div>
</div>
</sc-if>
<sc-for list="{{bcHist}}" as="bh" hint-placeholder-count="2">
<div style="display: flex; flex-direction: column; gap: 2px; background: #0d0f14; border-radius: 12px; padding: 8px 10px">
<span style="font-size: 13px; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{bh.text}}</span>
<span style="font-size: 11px; color: #8a90a0">{{bh.info}}</span>
</div>
</sc-for>
</div>

<div style="background: #151821; border: 1px solid #222838; border-radius: 20px; padding: 14px; display: flex; flex-direction: column; gap: 10px; margin-top: 6px">
<div style="display: flex; justify-content: space-between; align-items: center">
<span style="font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u041F\u0420\u041E\u041C\u041E\u041A\u041E\u0414\u042B \xB7 \u041F\u0420\u041E\u041C\u041E-\u041A\u0415\u0419\u0421</span>
<span style="font-size: 12px; color: #8a90a0">{{promoCount}}</span>
</div>
<div style="display: grid; grid-template-columns: minmax(0, 1fr) 76px 64px; gap: 6px">
<label style="height: 44px; border-radius: 12px; background: #0d0f14; border: 1px solid #262b3a; display: flex; align-items: center; padding: 0 10px; cursor: text">
<input type="text" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434" placeholder="\u041D\u041E\u0412\u042B\u0419\u041A\u041E\u0414" value="{{promoNew}}" onInput="{{onPromoNew}}" style="flex-grow: 1; min-width: 0; height: 100%; border: 0; outline: none; background: transparent; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff">
</label>
<label style="height: 44px; border-radius: 12px; background: #0d0f14; border: 1px solid #262b3a; display: flex; align-items: center; padding: 0 8px; cursor: text">
<input type="text" inputmode="numeric" autocomplete="off" aria-label="\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u0439" placeholder="100" value="{{promoMax}}" onInput="{{onPromoMax}}" style="width: 100%; height: 100%; border: 0; outline: none; background: transparent; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; color: #ffffff; text-align: center">
</label>
<button type="button" onClick="{{promoAdd}}" style="height: 44px; border-radius: 12px; border: 0; background: #c77dff; color: #1d0b33; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 900; cursor: pointer">+ \u041A\u043E\u0434</button>
</div>
<span style="font-size: 11px; color: #6c7282">\u041A\u0430\u0436\u0434\u044B\u0439 \u043A\u043E\u0434 \u2014 \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u043D\u0430 \u0438\u0433\u0440\u043E\u043A\u0430. \u0412\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u043B\u0435 \u2014 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0441\u0435\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u043C\u043E\u0436\u0435\u0442 \u0435\u0433\u043E \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C (0 \u2014 \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439).</span>
<sc-for list="{{promos}}" as="pc" hint-placeholder-count="3">
<div style="display: flex; align-items: center; gap: 8px; background: #0d0f14; border-radius: 12px; padding: 8px 10px; opacity: {{pc.opacity}}">
<span style="flex-grow: 1; min-width: 0; font-size: 14px; font-weight: 700; letter-spacing: 0.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{pc.code}}</span>
<span style="font-size: 12px; color: #a3a8b5; flex-shrink: 0">{{pc.uses}}</span>
<button type="button" onClick="{{pc.toggle}}" style="height: 30px; border-radius: 8px; border: 1px solid #2c3244; background: transparent; color: {{pc.btnColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 12px; font-weight: 700; padding: 0 8px; cursor: pointer; flex-shrink: 0">{{pc.btnText}}</button>
</div>
</sc-for>
</div>

<div style="background: #151821; border: 1px solid #222838; border-radius: 20px; padding: 14px; display: flex; align-items: center; gap: 10px; margin-top: 6px">
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1; min-width: 0">
<span style="font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u0420\u0415\u0419\u0422\u0418\u041D\u0413 \u041B\u0418\u0414\u0415\u0420\u041E\u0412</span>
<span style="font-size: 12px; color: #8a90a0">\u041E\u0431\u043D\u0443\u043B\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u043B\u0438\u0434\u0435\u0440\u043E\u0432. \u0411\u0430\u043B\u0430\u043D\u0441\u044B \u043D\u0435 \u043C\u0435\u043D\u044F\u044E\u0442\u0441\u044F</span>
</div>
<button type="button" onClick="{{lbReset}}" style="height: 44px; border-radius: 12px; border: 0; background: {{lbBg}}; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 900; padding: 0 14px; cursor: pointer; flex-shrink: 0">{{lbText}}</button>
</div>

<div style="background: #151821; border: 1px solid #3a1d26; border-radius: 20px; padding: 14px; display: flex; align-items: center; gap: 10px">
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1; min-width: 0">
<span style="font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #ff8a9a">\u0411\u0410\u041B\u0410\u041D\u0421\u042B \u0418\u0413\u0420\u041E\u041A\u041E\u0412</span>
<span style="font-size: 12px; color: #8a90a0">\u041E\u0431\u043D\u0443\u043B\u0438\u0442\u044C TON \u0443 \u0432\u0441\u0435\u0445. \u041F\u043E\u0434\u0430\u0440\u043A\u0438 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F</span>
</div>
<button type="button" onClick="{{balReset}}" style="height: 44px; border-radius: 12px; border: 0; background: {{balBg}}; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 900; padding: 0 12px; cursor: pointer; flex-shrink: 0">{{balText}}</button>
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
<span style="font-size: 17px; font-weight: 700">\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</span>
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
function openPay(url) {
  var tg = window.Telegram && window.Telegram.WebApp;
  try { if (tg && tg.openLink) { tg.openLink(url); return; } } catch (e) {}
  window.open(url, '_blank');
}
function copyText(t) {
  try { if (navigator.clipboard) { navigator.clipboard.writeText(t); return true; } } catch (e) {}
  return false;
}
function hm(t) { var d = new Date(t + 3 * 3600 * 1000); return ('0' + d.getUTCDate()).slice(-2) + '.' + ('0' + (d.getUTCMonth() + 1)).slice(-2) + ' ' + ('0' + d.getUTCHours()).slice(-2) + ':' + ('0' + d.getUTCMinutes()).slice(-2); }

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { promos: [], promoNew: '', promoMax: '100', pin: '', pinMsg: '', username: '', amount: '', user: null, msg: null, log: [], busy: false, tick: 0, wds: [], confirmRej: null, copied: null, banReason: '', confirmBan: false, bcText: '', bcBtn: true, bcConfirm: false, bc: null, bcHist: [] };
    this.offs = [];
  }
  componentDidMount() {
    var self = this, net = NET();
    if (net) {
      this.offs.push(net.on('admin.user', function (m) { self.setState({ user: m.user, busy: false, msg: null, confirmBan: false, banReason: '' }); }));
      this.offs.push(net.on('admin.done', function (m) {
        var a = m.amount;
        if (m.action === 'balreset') { self.setState({ log: m.log, busy: false, confirmBal: 0, user: null, msg: { ok: true, text: '\u{1F9F9} \u0411\u0430\u043B\u0430\u043D\u0441\u044B \u043E\u0431\u043D\u0443\u043B\u0435\u043D\u044B: ' + (m.count || 0) + ' \u0438\u0433\u0440\u043E\u043A\u043E\u0432, \u0432\u0441\u0435\u0433\u043E ' + Math.abs(m.amount || 0) + ' TON' } }); return; }
        if (m.action === 'lbreset') { self.setState({ log: m.log, busy: false, confirmLb: false, msg: { ok: true, text: '\u{1F3C6} \u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0441\u0431\u0440\u043E\u0448\u0435\u043D \u2014 \u0442\u0430\u0431\u043B\u0438\u0446\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0437\u0430\u043D\u043E\u0432\u043E' } }); return; }
        if (m.action) { self.setState({ user: m.user, log: m.log, busy: false, banReason: '', confirmBan: false, msg: { ok: true, text: (m.action === 'ban' ? '\u26D4 \u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D' : '\u2705 \u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D') + ' @' + m.user.username } }); return; }
        self.setState({ user: m.user, log: m.log, busy: false, amount: '',
          msg: { ok: true, text: (a > 0 ? '\u0412\u044B\u0434\u0430\u043D\u043E +' + a : '\u0421\u043F\u0438\u0441\u0430\u043D\u043E ' + a) + ' TON \u0438\u0433\u0440\u043E\u043A\u0443 @' + m.user.username + (m.user.online ? '' : ' (\u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F \u043F\u0440\u0438 \u0432\u0445\u043E\u0434\u0435)') } });
        // \u0447\u0435\u0440\u0435\u0437 \u043F\u0430\u0440\u0443 \u0441\u0435\u043A\u0443\u043D\u0434 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443: \u0438\u0433\u0440\u0430 \u0438\u0433\u0440\u043E\u043A\u0430 \u0443\u0441\u043F\u0435\u0435\u0442 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0438 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441
        clearTimeout(self.rt);
        self.rt = setTimeout(function () { var n = NET(); if (n && n.connected) n.send({ t: 'admin.find', username: m.user.username }); }, 3000);
      }));
      this.offs.push(net.on('admin.err', function (m) { self.setState({ busy: false, msg: { ok: false, text: m.msg } }); }));
      this.offs.push(net.on('admin.log', function (m) { self.setState({ realOnline: m.realOnline, demoOn: !!m.demoOnline, demoAll: !!m.demoAll, log: m.log, deps: m.deposits || [], wds: m.withdrawals || [], biz: m.business || null, bizLoaded: true }); }));
      // \u043D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 \u0438\u043B\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u043E \u043D\u0435\u0439 \u2014 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u0441\u043F\u0438\u0441\u043E\u043A \u0441\u0440\u0430\u0437\u0443
      this.offs.push(net.on('admin.wd', function (m) {
        var list = (self.state.wds || []).filter(function (w) { return w.id !== m.w.id; });
        list.unshift(m.w);
        list.sort(function (a, b) { return (a.status === 'pending' ? 0 : 1) - (b.status === 'pending' ? 0 : 1) || b.at - a.at; });
        self.setState({ wds: list, busy: false });
      }));
      this.offs.push(net.on('admin.bc', function (m) { var st = { bc: m.bc }; if (m.history) st.bcHist = m.history; self.setState(st); }));
      var load = function () { if (net.connected && net.pinOk) { net.send({ t: 'admin.log' }); net.send({ t: 'admin.bcStatus' }); net.send({ t: 'admin.promos' }); } };
      this.offs.push(net.on('admin.promos', function (m) { self.setState({ promos: m.list || [], busy: false }); }));
      this.offs.push(net.on('admin.online', function (m) { self.setState({ realOnline: m.n }); }));
      this.offs.push(net.on('admin.pinOk', function () { self.setState({ pin: '', pinMsg: '' }); load(); }));
      this.offs.push(net.on('admin.pinBad', function (m) { self.setState({ pin: '', pinMsg: '\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 PIN. \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u043F\u044B\u0442\u043E\u043A: ' + m.left }); }));
      this.offs.push(net.on('status', function () { self.forceUpdate(); load(); }));
      load();
    }
    this.iv = setInterval(function () { self.setState({ tick: self.state.tick + 1 }); }, 1000);
  }
  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.rt); this.offs.forEach(function (f) { f(); }); }
  sendPin() {
    var net = NET(), pin = this.state.pin;
    if (!pin) return this.setState({ pinMsg: '\u0412\u0432\u0435\u0434\u0438 PIN' });
    if (!net || !net.connected) return this.setState({ pinMsg: '\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C' });
    net.adminPin = pin; net.send({ t: 'admin.pin', pin: pin });
  }
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
    var conn = !!(net && net.connected), isAdminUser = !!(net && net.me && net.me.admin), admin = isAdminUser && !!net.pinOk;
    var stale = !!(net && net.me && net.me.adminStale);
    var u = s.user, ready = conn && admin && !s.busy;
    var pend = (s.wds || []).filter(function (w) { return w.status === 'pending'; }).length;
    return {
      connText: conn ? 'online' : '\u043D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438', connBg: conn ? 'rgba(43,212,107,0.14)' : 'rgba(255,93,115,0.14)', connColor: conn ? '#2bd46b' : '#ff5d73',
      noAccess: !admin && !(conn && isAdminUser), hasAccess: admin,
      noAccessText: !conn ? '\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443...' : stale ? '\u0414\u043B\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0430\u0434\u043C\u0438\u043D\u043A\u0430 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0441\u0432\u0435\u0436\u0435\u043C \u0437\u0430\u043F\u0443\u0441\u043A\u0435 \u0438\u0433\u0440\u044B. \u0417\u0430\u043A\u0440\u043E\u0439 \u043C\u0438\u043D\u0438-\u0430\u043F\u043F \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438 \u043E\u0442\u043A\u0440\u043E\u0439 \u0437\u0430\u043D\u043E\u0432\u043E.' : '\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430. \u0410\u0434\u043C\u0438\u043D\u043A\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443.',
      needPin: conn && isAdminUser && !net.pinOk,
      pin: s.pin, pinBorder: s.pinMsg ? '#ff5d73' : '#262b3a', hasPinMsg: !!s.pinMsg, pinMsg: s.pinMsg,
      onPin: function (e) { self.setState({ pin: String((e && e.target && e.target.value) || '').replace(/\\s/g, '').slice(0, 32), pinMsg: '' }); },
      onPinKey: function (e) { if (e && e.key === 'Enter') { if (e.target && e.target.blur) e.target.blur(); self.sendPin(); } },
      sendPin: function () { self.sendPin(); },
      username: s.username,
      onUsername: function (e) { self.setState({ username: cleanUser(e && e.target && e.target.value), user: null, confirmBan: false }); },
      onUserKey: function (e) { if (e && e.key === 'Enter') { if (e.target && e.target.blur) e.target.blur(); self.find(); } },
      find: function () { self.find(); },
      hasUser: !!u,
      uInitial: u ? (u.name || u.username || '?').charAt(0).toUpperCase() : '',
      uUsername: u ? u.username : '',
      uStatus: u ? (u.online ? '\u25CF \u0432 \u0438\u0433\u0440\u0435 \u0441\u0435\u0439\u0447\u0430\u0441' : '\u0431\u044B\u043B(\u0430) ' + ago(u.seen)) : '',
      uStatusColor: u && u.online ? '#2bd46b' : '#8a90a0',
      uBalance: u ? (u.balance == null ? '\u2014 TON' : u.balance.toFixed(2) + ' TON') : '',
      uPending: u ? '\u043F\u043E\u043F\u043E\u043B\u043D\u0438\u043B ' + (u.deposited || 0) + ' \xB7 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B ' + (Math.round((u.wagered || 0) * 100) / 100) + ' \xB7 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 ' + (u.items || 0) : '',
      uCanBan: !!u && !u.admin, uBanned: !!(u && u.banned), uNotBanned: !!u && !u.banned,
      uBanText: u && u.banned ? '\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D ' + hm(u.banned.at) + (u.banned.by ? ' (' + u.banned.by + ')' : '') + (u.banned.reason ? ' \xB7 ' + u.banned.reason : '') : '',
      banReason: s.banReason, onBanReason: function (e) { self.setState({ banReason: String((e && e.target && e.target.value) || '').slice(0, 120) }); },
      banText: s.confirmBan ? '\u0422\u043E\u0447\u043D\u043E?' : '\u0417\u0430\u0431\u0430\u043D\u0438\u0442\u044C', banBg: s.confirmBan ? '#c0283f' : '#ff5d73',
      ban: function () {
        if (!self.state.confirmBan) return self.setState({ confirmBan: true });
        var n = NET(); if (!u || !n || !n.connected) return;
        self.setState({ busy: true, msg: null, confirmBan: false }); n.send({ t: 'admin.ban', username: u.username, reason: self.state.banReason });
      },
      unban: function () { var n = NET(); if (!u || !n || !n.connected) return; self.setState({ busy: true, msg: null }); n.send({ t: 'admin.unban', username: u.username }); },
      bcText: s.bcText, onBcText: function (e) { self.setState({ bcText: String((e && e.target && e.target.value) || '').slice(0, 3500), bcConfirm: false }); },
      bcCount: s.bcText ? s.bcText.length + ' / 3500' : '',
      toggleBcBtn: function () { self.setState({ bcBtn: !self.state.bcBtn }); },
      bcBtnPressed: s.bcBtn ? 'true' : 'false', bcBtnMark: s.bcBtn ? '\u2713' : '', bcBtnBg: s.bcBtn ? '#ffc83d' : 'transparent', bcBtnBorder: s.bcBtn ? '#ffc83d' : '#4a5064',
      bcIdle: !(s.bc && !s.bc.done), bcRunning: !!(s.bc && !s.bc.done),
      bcDisabled: !(conn && admin && s.bcText.trim().length >= 2),
      bcSendBg: conn && admin && s.bcText.trim().length >= 2 ? (s.bcConfirm ? '#c0283f' : '#ffc83d') : '#2a2617', bcSendColor: s.bcConfirm ? '#ffffff' : (conn && admin && s.bcText.trim().length >= 2 ? '#1a1300' : '#6b6447'),
      bcSendText: s.bcConfirm ? '\u0422\u043E\u0447\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0435\u043C \u0438\u0433\u0440\u043E\u043A\u0430\u043C?' : '\u{1F4E3} \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u0441\u0435\u043C',
      bcSend: function () {
        if (!self.state.bcConfirm) return self.setState({ bcConfirm: true });
        var n = NET(); if (!n || !n.connected) return;
        n.send({ t: 'admin.bcSend', text: self.state.bcText, button: self.state.bcBtn });
        self.setState({ bcConfirm: false, bcText: '' });
      },
      bcStop: function () { var n = NET(); if (n && n.connected) n.send({ t: 'admin.bcStop' }); },
      bcPct: s.bc && s.bc.total ? Math.round((s.bc.sent + s.bc.failed + s.bc.blocked) / s.bc.total * 100) + '%' : '0%',
      bcProgress: s.bc ? '\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E ' + s.bc.sent + ' \u0438\u0437 ' + s.bc.total + (s.bc.blocked ? ' \xB7 \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u043B\u0438 \u0431\u043E\u0442\u0430: ' + s.bc.blocked : '') : '',
      bcHist: (s.bcHist || []).map(function (h) { return { text: h.text, info: hm(h.at) + ' \xB7 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E ' + h.sent + ' \u0438\u0437 ' + h.total + (h.blocked ? ' \xB7 \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u043B\u0438 \u0431\u043E\u0442\u0430 ' + h.blocked : '') + (h.failed ? ' \xB7 \u043E\u0448\u0438\u0431\u043E\u043A ' + h.failed : '') + (h.stopped ? ' \xB7 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430' : '') }; }),
      amount: s.amount,
      onAmount: function (e) { self.setState({ amount: cleanNum(e && e.target && e.target.value) }); },
      chips: [1, 5, 10, 100].map(function (v) { return { label: v + ' TON', pick: function () { self.setState({ amount: String(v) }); } }; }),
      give: function () { self.adjust(1); }, take: function () { self.adjust(-1); },
      btnDisabled: !ready,
      giveBg: ready ? '#2bd46b' : '#1d2a22', giveColor: ready ? '#06210f' : '#4f6b58',
      takeBg: ready ? '#ff5d73' : '#2a1d22', takeColor: ready ? '#2a0610' : '#6b4f56',
      hasMsg: !!s.msg, msg: s.msg ? s.msg.text : '',
      msgBg: s.msg && s.msg.ok ? 'rgba(43,212,107,0.12)' : 'rgba(255,93,115,0.12)', msgBorder: s.msg && s.msg.ok ? 'rgba(43,212,107,0.45)' : 'rgba(255,93,115,0.45)',
      log: (s.log || []).map(function (l) { return { to: l.to, time: hm(l.at), amount: l.action === 'balreset' ? '\u{1F9F9} ' + l.amount + ' TON' : l.action === 'lbreset' ? '\u{1F504} \u0441\u0431\u0440\u043E\u0441' : l.action === 'ban' ? '\u26D4 \u0431\u0430\u043D' : l.action === 'unban' ? '\u2705 \u0440\u0430\u0437\u0431\u0430\u043D' : (l.amount > 0 ? '+' : '') + l.amount + ' TON', color: l.action === 'unban' || (!l.action && l.amount > 0) ? '#2bd46b' : '#ff5d73' }; }),
      refresh: function () { var n = NET(); if (n && n.connected) { n.send({ t: 'admin.log' }); n.send({ t: 'admin.promos' }); } },
      deps: (s.deps || []).map(function (d) {
        var u = d.username ? '@' + d.username : (d.uid && d.uid.indexOf('tg') === 0 ? 'id ' + d.uid.slice(2) : (d.comment ? '\xAB' + d.comment + '\xBB' : '\u0431\u0435\u0437 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u044F'));
        var ok = String(d.status || '').indexOf('\u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E') === 0;
        var kind = d.gift ? '\u{1F381} NFT ' + d.gift : d.from === 'CryptoBot' ? '\u{1F4B3} Crypto \xB7 ' + d.comment : '\u{1F48E} TON';
        return { who: u + ' \xB7 ' + kind, time: hm(d.at), ton: d.ton, status: d.status, statusColor: ok ? '#2bd46b' : '#ff8a5c', border: ok ? '#222838' : 'rgba(255,138,92,0.45)' };
      }),
      noDeps: !(s.deps && s.deps.length),
      hasPending: pend > 0, pendingCount: pend,
      realOnline: s.realOnline == null ? '\u2014' : s.realOnline, demoOn: !!s.demoOn,
      demoText: s.demoAll ? '\u26A0\uFE0F \u0412\u0421\u0415 \u0432\u0438\u0434\u044F\u0442 \u043E\u043D\u043B\u0430\u0439\u043D +100\u2013200 (\u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u0441\u044F \u0441\u0430\u043C \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438)' : '\u{1F9EA} \u0442\u0435\u0431\u0435 \u0438 \u0442\u0435\u0441\u0442\u0435\u0440\u0430\u043C \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F +100\u2013200', demoColor: s.demoAll ? '#ff8a5c' : '#ffc83d',
      balText: s.confirmBal === 2 ? '\u0422\u041E\u0427\u041D\u041E \u0412\u0421\u0415\u041C?' : s.confirmBal === 1 ? '\u0423\u0432\u0435\u0440\u0435\u043D?' : '\u041E\u0431\u043D\u0443\u043B\u0438\u0442\u044C', balBg: s.confirmBal ? '#c0283f' : '#ff5d73',
      balReset: function () {
        var c = self.state.confirmBal || 0;
        if (c < 2) return self.setState({ confirmBal: c + 1 });
        var n = NET(); if (n && n.connected) { self.setState({ busy: true, confirmBal: 0 }); n.send({ t: 'admin.balanceReset' }); }
      },
      lbText: s.confirmLb ? '\u0422\u043E\u0447\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C?' : '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C', lbBg: s.confirmLb ? '#c0283f' : '#ff5d73',
      lbReset: function () {
        if (!self.state.confirmLb) return self.setState({ confirmLb: true });
        var n = NET(); if (n && n.connected) { self.setState({ busy: true, confirmLb: false }); n.send({ t: 'admin.leadersReset' }); }
      },
      promoNew: s.promoNew, promoMax: s.promoMax,
      onPromoNew: function (e) { self.setState({ promoNew: String((e && e.target && e.target.value) || '').toUpperCase().replace(/[^A-Z0-9_]/g, '').slice(0, 24) }); },
      onPromoMax: function (e) { self.setState({ promoMax: String((e && e.target && e.target.value) || '').replace(/\\D/g, '').slice(0, 6) }); },
      promoAdd: function () {
        var n = NET(); if (!n || !n.connected) return;
        if (self.state.promoNew.length < 4) return self.setState({ msg: { ok: false, text: '\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434: \u043E\u0442 4 \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u0438\u0445 \u0431\u0443\u043A\u0432 \u0438\u043B\u0438 \u0446\u0438\u0444\u0440' } });
        n.send({ t: 'admin.promoAdd', code: self.state.promoNew, max: parseInt(self.state.promoMax || '0', 10) }); self.setState({ promoNew: '' });
      },
      promoCount: (s.promos || []).length ? (s.promos || []).filter(function (p) { return p.active; }).length + ' \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445' : '',
      promos: (s.promos || []).map(function (p) {
        return { code: p.code, uses: (p.uses || 0) + ' / ' + (p.max ? p.max : '\u221E'), opacity: p.active ? 1 : 0.45,
          btnText: p.active ? '\u0412\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C' : '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C', btnColor: p.active ? '#ff8a9a' : '#2bd46b',
          toggle: function () { var n = NET(); if (n && n.connected) n.send({ t: 'admin.promoToggle', code: p.code }); } };
      }),
      bizText: !s.bizLoaded ? '' : s.biz ? '\u{1F916} \u0411\u0438\u0437\u043D\u0435\u0441-\u0430\u043A\u043A\u0430\u0443\u043D\u0442 @' + s.biz.username + ': \u043F\u0440\u0438\u0451\u043C NFT ' + (s.biz.canView ? '\u0432\u043A\u043B\u044E\u0447\u0451\u043D' : '\u043D\u0435\u0442 \u043F\u0440\u0430\u0432\u0430 \xAB\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432\xBB') + ' \xB7 \u0430\u0432\u0442\u043E\u0432\u044B\u0432\u043E\u0434 ' + (s.biz.canTransfer ? '\u0432\u043A\u043B\u044E\u0447\u0451\u043D' : '\u043D\u0435\u0442 \u043F\u0440\u0430\u0432\u0430 \xAB\u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432\xBB') : '\u{1F916} \u0411\u0438\u0437\u043D\u0435\u0441-\u0430\u043A\u043A\u0430\u0443\u043D\u0442 \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D: \u043F\u0440\u0438\u0451\u043C NFT \u0438 \u0430\u0432\u0442\u043E\u0432\u044B\u0432\u043E\u0434 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u044B',
      bizColor: s.biz && s.biz.canView && s.biz.canTransfer ? '#2bd46b' : '#a3a8b5',
      noWds: !(s.wds && s.wds.length),
      wds: (s.wds || []).map(function (w) {
        var st = { pending: ['\u041E\u0436\u0438\u0434\u0430\u0435\u0442', '#ffc83d', 'rgba(255,200,61,0.14)'], paid: ['\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E', '#2bd46b', 'rgba(43,212,107,0.14)'], rejected: ['\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043E', '#ff5d73', 'rgba(255,93,115,0.14)'] }[w.status] || ['?', '#a3a8b5', '#1f2330'];
        var stt = w.stats || {}, dep = stt.deposited || 0, out = stt.withdrawn || 0;
        var flags = w.flags || [];
        var confirming = s.confirmRej === w.id;
        return {
          who: w.username ? '@' + w.username : (w.name || w.uid), time: hm(w.at), status: st[0], stColor: st[1], stBg: st[2],
          border: w.status === 'pending' ? '#4a3d14' : '#222838',
          isTon: w.kind === 'ton', isNft: w.kind === 'nft', isPending: w.status === 'pending',
          amount: w.amount, address: w.address, copyText: s.copied === w.id ? '\u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E' : '\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C',
          copy: function () { if (copyText(w.address)) self.setState({ copied: w.id }); },
          gifts: (w.gifts || []).map(function (g) { var gi = window.RK && window.RK.gift ? window.RK.gift(g) : null; return { name: g, img: gi ? gi.img : '' }; }),
          dep: dep + ' TON', out: out + ' TON', bal: stt.balance == null ? '\u2014' : stt.balance + ' TON',
          value: (w.value || w.amount || 0) + ' TON', wag: (stt.wagered || 0) + ' TON', won: (stt.won || 0) + ' TON',
          warn: w.status === 'pending' && flags.length > 0, warnText: '\u041E\u0431\u0440\u0430\u0442\u0438 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435: ' + flags.join(' \xB7 '),
          cols: w.kind === 'ton' ? '1.4fr 1fr 1fr' : '1fr 1fr',
          pay: function () { openPay('https://app.tonkeeper.com/transfer/' + w.address + '?amount=' + Math.round(w.amount * 1e9) + '&text=' + encodeURIComponent('RACKOON \u0432\u044B\u0432\u043E\u0434 ' + w.id)); },
          paid: function () { var n = NET(); if (n && n.connected && !self.state.busy) { self.setState({ busy: true, confirmRej: null }); n.send({ t: 'admin.wdPaid', id: w.id }); } },
          reject: function () {
            if (self.state.confirmRej !== w.id) return self.setState({ confirmRej: w.id });
            var n = NET(); if (n && n.connected) { self.setState({ busy: true, confirmRej: null }); n.send({ t: 'admin.wdReject', id: w.id }); }
          },
          canAuto: w.kind === 'nft' && !!(s.biz && s.biz.canTransfer),
          autoText: w.auto ? '\u0411\u043E\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u2026' : (w.sent ? '\u{1F916} \u0414\u043E\u0441\u043B\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 (' + w.sent + '/' + (w.gifts || []).length + ' \u0443\u0436\u0435)' : '\u{1F916} \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438'),
          autoSend: function () { var n = NET(); if (n && n.connected && !self.state.busy && !w.auto) { self.setState({ busy: true, confirmRej: null, msg: { ok: true, text: '\u0411\u043E\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0451\u0442 NFT \u0438\u0433\u0440\u043E\u043A\u0443\u2026' } }); n.send({ t: 'admin.wdAuto', id: w.id }); } },
          rejText: confirming ? '\u0422\u043E\u0447\u043D\u043E?' : '\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C', rejBg: confirming ? '#c0283f' : '#ff5d73'
        };
      }),
      noLog: !(s.log && s.log.length), logCount: s.log && s.log.length ? s.log.length + ' \u0448\u0442.' : ''
    };
  }
}
<\/script>
</body>
</html>
`;var Qt=wn(Ir()),z0=wn(m0()),q=window.Telegram&&window.Telegram.WebApp,io=["rk_guest","rk_wd_addr"],x0=3900,ia=(()=>{try{return q&&q.CloudStorage&&(!q.isVersionAtLeast||q.isVersionAtLeast("6.9"))?q.CloudStorage:null}catch{return null}})(),no={_m:{},_t:{},get(t){let e=null;try{e=localStorage.getItem(t)}catch{}return e!=null?e:t in this._m?this._m[t]:null},set(t,e){e=String(e),this._m[t]=e;try{localStorage.setItem(t,e)}catch{}ia&&io.indexOf(t)!==-1&&(clearTimeout(this._t[t]),this._t[t]=setTimeout(()=>{let a=[];for(let i=0;i<e.length;i+=x0)a.push(e.slice(i,i+x0));a.length||a.push("");try{ia.setItem(t+"__n",String(a.length)),a.forEach((i,n)=>ia.setItem(t+"__"+n,i))}catch{}},400))},remove(t){delete this._m[t];try{localStorage.removeItem(t)}catch{}if(ia)try{ia.setItem(t+"__n","0")}catch{}},getJSON(t,e){try{let a=JSON.parse(this.get(t)||"null");return a==null?e:a}catch{return e}},setJSON(t,e){this.set(t,JSON.stringify(e))}};function eb(){return new Promise(t=>{if(!ia)return t();let e=setTimeout(t,2500);try{ia.getItems(io.map(a=>a+"__n"),(a,i)=>{if(a||!i)return clearTimeout(e),t();let n=[];if(io.forEach(l=>{let o=parseInt(i[l+"__n"]||"0",10)||0;for(let s=0;s<o;s++)n.push(l+"__"+s)}),!n.length)return clearTimeout(e),t();ia.getItems(n,(l,o)=>{!l&&o&&io.forEach(s=>{let r=parseInt(i[s+"__n"]||"0",10)||0;if(!r)return;let d="";for(let g=0;g<r;g++)d+=o[s+"__"+g]||"";no._m[s]=d;try{localStorage.setItem(s,d)}catch{}}),clearTimeout(e),t()})})}catch{clearTimeout(e),t()}})}var It={bal:0,inv:[],freeAt:0,loaded:!1},C0={get(){return It.bal},set(){}},ab={list(){return It.inv.slice()},add(){},remove(){},reset(){return It.inv.slice()}},ib={day:()=>({}),range:()=>({}),total:()=>({})};function nb(){}var Me=null,y0=null;function tf(t,e){Me||(Me=document.createElement("div"),Me.setAttribute("role","status"),Me.style.cssText="position:fixed;left:50%;top:20px;transform:translateX(-50%);z-index:90;max-width:340px;box-sizing:border-box;padding:12px 16px;border-radius:16px;background:#1f2330;color:#fff;font:500 14px Rubik,system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.5);transition:opacity .25s;pointer-events:none",document.body.appendChild(Me)),Me.textContent=t,Me.style.border="1px solid "+(e===!1?"#ff5d73":e?"#2bd46b":"#ffc83d"),Me.style.opacity="1",clearTimeout(y0),y0=setTimeout(()=>{Me.style.opacity="0"},2800)}function lb(t){if(document.getElementById("rk-banned"))return;let e=document.createElement("div");e.id="rk-banned",e.setAttribute("role","alertdialog"),e.setAttribute("aria-label","\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D"),e.style.cssText="position:fixed;inset:0;z-index:100;background:#0b0d12;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:24px;box-sizing:border-box;text-align:center;font-family:Rubik,system-ui,sans-serif;color:#fff";let a=document.createElement("div");a.textContent="\u26D4",a.style.cssText="font-size:56px";let i=document.createElement("div");i.textContent="\u0410\u043A\u043A\u0430\u0443\u043D\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D",i.style.cssText="font-size:22px;font-weight:900";let n=document.createElement("div");n.textContent=t?"\u041F\u0440\u0438\u0447\u0438\u043D\u0430: "+t:"\u0415\u0441\u043B\u0438 \u044D\u0442\u043E \u043E\u0448\u0438\u0431\u043A\u0430 \u2014 \u043D\u0430\u043F\u0438\u0448\u0438 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438.",n.style.cssText="font-size:14px;color:#a3a8b5;max-width:300px;line-height:1.45",e.appendChild(a),e.appendChild(i),e.appendChild(n),document.body.appendChild(e)}function ob(t){if(document.getElementById("rk-sub"))return;let e="https://t.me/"+t,a=document.createElement("div");a.id="rk-sub",a.setAttribute("role","dialog"),a.setAttribute("aria-label","\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B"),a.style.cssText="position:fixed;inset:0;z-index:95;background:rgba(5,6,10,.72);display:flex;align-items:flex-end;justify-content:center;font-family:Rubik,system-ui,sans-serif";let i=document.createElement("div");i.style.cssText="width:100%;max-width:390px;box-sizing:border-box;background:#151821;border-top:1px solid #262b3a;border-radius:24px 24px 0 0;padding:22px 18px 26px;display:flex;flex-direction:column;align-items:center;gap:12px;color:#fff;text-align:center";let n=document.createElement("div");n.textContent="\u{1F4E3}",n.style.cssText="font-size:44px";let l=document.createElement("div");l.textContent="\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0441\u044C \u043D\u0430 \u043A\u0430\u043D\u0430\u043B",l.style.cssText="font-size:20px;font-weight:900";let o=document.createElement("div");o.textContent="\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441 \u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043A\u0435\u0439\u0441 \u2014 \u0434\u043B\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 @"+t+". \u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0441\u044C \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0441\u044F \u0437\u0430 \u043D\u0430\u0433\u0440\u0430\u0434\u043E\u0439.",o.style.cssText="font-size:14px;color:#a3a8b5;line-height:1.45;max-width:320px";let s=document.createElement("button");s.type="button",s.textContent="\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",s.style.cssText="width:100%;height:54px;border:0;border-radius:16px;background:#ffc83d;color:#1a1300;font:900 16px Rubik,system-ui,sans-serif;cursor:pointer;margin-top:4px";let r=document.createElement("button");r.type="button",r.textContent="\u041F\u043E\u0437\u0436\u0435",r.style.cssText="width:100%;height:46px;border:0;border-radius:14px;background:transparent;color:#8a90a0;font:700 14px Rubik,system-ui,sans-serif;cursor:pointer";let d=()=>{a.parentNode&&a.parentNode.removeChild(a)};s.onclick=()=>{let g=window.Telegram&&window.Telegram.WebApp;try{g&&g.openTelegramLink?g.openTelegramLink(e):window.open(e,"_blank")}catch{window.open(e,"_blank")}d()},r.onclick=d,a.onclick=g=>{g.target===a&&d()},i.appendChild(n),i.appendChild(l),i.appendChild(o),i.appendChild(s),i.appendChild(r),a.appendChild(i),document.body.appendChild(a)}var za=null;function v0(t){It.bal=Math.round((t.bal||0)*100)/100,It.inv=Array.isArray(t.inv)?t.inv:[],t.freeAt!=null&&(It.freeAt=t.freeAt),t.promoDone!=null&&(It.promoDone=!!t.promoDone),t.deposited!=null&&(It.deposited=t.deposited),It.loaded=!0;let e=za&&za.logic;e&&e.state&&"balance"in e.state&&(e.state.balance=It.bal),za&&za.forceUpdate()}function sb(){}var M0=(()=>{let t={},e=new Set,a={},i=null,n=0,l=null,o=0,s={connected:!1,me:null,online:0,offset:0,feed:[],wd:[]};function r(y,x){(t[y]||[]).slice().forEach(S=>{try{S(x)}catch(c){console.error(c)}})}function d(){let y=(window.RK_SERVER||"").trim();return y||(y=(location.protocol==="https:"?"wss://":"ws://")+location.host),y.replace(/^http/,"ws").replace(/\/+$/,"")+"/ws"}function g(){let y=no.get("rk_guest");return y||(y=Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4),no.set("rk_guest",y)),y}function u(y){return i&&i.readyState===1?(i.send(JSON.stringify(y)),!0):!1}s.req=(y,x)=>new Promise(S=>{let c="q"+ ++o;if(!u({t:"req",rid:c,op:y,args:x||{}}))return S({ok:!1,err:"\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C"});let f=setTimeout(()=>{delete a[c],S({ok:!1,err:"\u0421\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437"})},15e3);a[c]=h=>{clearTimeout(f),h.needSub&&(ob(h.needSub),h.err="\u041D\u0443\u0436\u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u043A\u0430\u043D\u0430\u043B"),S(h)}}),s.withdrawals=()=>s.wd.slice(),s.withdraw=y=>u({t:"wd.create",id:y.id,kind:y.kind,amount:y.amount,address:y.address,items:y.items});function p(){try{i=new WebSocket(d())}catch{return b()}i.onopen=()=>{n=0,u({t:"hello",initData:q&&q.initData||"",guestId:g()}),e.forEach(x=>u({t:"sub",room:x})),clearInterval(l);let y=()=>u({t:"ping",c:Date.now()});y(),l=setInterval(y,1e4)},i.onmessage=y=>{let x;try{x=JSON.parse(y.data)}catch{return}if(x.t==="pong"){let S=Date.now();s.offset=x.now-(x.c+S)/2;return}if(x.t==="res"){let S=a[x.rid];S&&(delete a[x.rid],S(x));return}x.t==="welcome"&&(window.rkLoaderDone&&window.rkLoaderDone(),s.me=x.me,s.online=x.online,s.deposit=x.deposit||null,s.cryptobot=x.cryptobot||null,s.xrocket=x.xrocket||null,s.support=x.support||"",s.wdMinDeposit=x.wdMinDeposit||0,s.gifts=x.gifts||null,s.connected=!0,s.feed=x.feed||[],x.acct&&v0(x.acct),x.me&&x.me.tg&&u({t:"wd.list"}),s.pinOk=!!(x.me&&x.me.admin&&!x.me.needPin),x.me&&x.me.admin&&x.me.needPin&&s.adminPin&&u({t:"admin.pin",pin:s.adminPin}),r("status",s)),x.t==="acct"&&v0(x),x.t==="online"&&(s.online=x.n),x.t==="feed"&&(s.feed=[x.item].concat(s.feed).slice(0,20)),x.t==="notify"&&tf(x.text,!0),x.t==="wd.list"&&(s.wd=x.items||[]),(x.t==="wd.ok"||x.t==="wd.update")&&(s.wd=[x.w].concat(s.wd.filter(S=>S.id!==x.w.id)).sort((S,c)=>c.at-S.at)),x.t==="wd.err"&&tf(x.msg,!1),x.t==="auth.expired"&&(s.expired=!0),x.t==="admin.pinOk"&&(s.pinOk=!0),x.t==="admin.pinBad"&&(s.adminPin=""),x.t==="banned"&&(s.expired=!0,s.banned=!0,lb(x.reason)),r(x.t,x)},i.onclose=()=>{let y=s.connected;s.connected=!1,clearInterval(l),Object.keys(a).forEach(x=>{a[x]({ok:!1,err:"\u0421\u0432\u044F\u0437\u044C \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u043F\u0440\u0435\u0440\u0432\u0430\u043B\u0430\u0441\u044C"}),delete a[x]}),y&&r("status",s),s.expired||b()},i.onerror=()=>{}}function b(){n=Math.min(n+1,6),setTimeout(p,500*n)}return s.on=(y,x)=>((t[y]=t[y]||[]).push(x),()=>{t[y]=(t[y]||[]).filter(S=>S!==x)}),s.send=u,s.sub=y=>{e.add(y),u({t:"sub",room:y})},s.unsub=y=>{e.delete(y),u({t:"unsub",room:y})},s.now=()=>Date.now()+s.offset,s.isMe=y=>!!(s.me&&s.me.uid===y),s.start=p,s})();function A0(t){return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><text x='32' y='50' font-size='46' text-anchor='middle'>"+t+"</text></svg>")}function rb(){return Qt.default.STARS.map(t=>{let e=Qt.default.STAR[t[0]];return{name:e.name,star:!0,stars:e.stars,supply:0,base:e.price,price:e.price,prev:e.price,img:A0(e.emoji),color:"#8fa3c7"}})}function sf(t){let e=Qt.default.canon(t);if(!e)return null;let a=Qt.default.priceOf(e);if(Qt.default.isStar(e)){let n=Qt.default.STAR[e];return{name:e,price:a,color:"#8fa3c7",star:!0,stars:n.stars,img:A0(n.emoji)}}let i=Qt.default.IMG[e]||Qt.default.GIFT_IMG;return{name:e,price:a,color:Qt.default.rarityColor(a),img:window.rkThumb?window.rkThumb(e,i):R0(i)}}function fb(t){let e=Qt.default.bestFor(t);return e?sf(e.name):null}function cb(t){let e=Qt.default.nextAbove(t);return e?sf(e.name):null}window.RK={wallet:C0,inventory:ab,store:no,stats:ib,track:nb,net:M0,addBalance:sb,acct:It,toast:tf,cases:z0.default,gift:sf,giftBestFor:fb,giftNextAbove:cb,starGifts:rb,botName:"RackoonDropBot",user:q&&q.initDataUnsafe&&q.initDataUnsafe.user||null};if(q){q.ready(),q.expand();try{q.setHeaderColor("#0b0d12"),q.setBackgroundColor("#0b0d12")}catch{}try{q.disableVerticalSwipes&&q.disableVerticalSwipes()}catch{}}document.addEventListener("click",t=>{if(q&&q.HapticFeedback&&t.target.closest&&t.target.closest("button, a"))try{q.HapticFeedback.impactOccurred("light")}catch{}},!0);var lo={"16b8be03ec4054a9ad560c5be1c9ab9e":"banner-crash.jpg","88b023f22e2d3006641849bb168e073d":"banner-cases.jpg","63c10368990e8788e655de65d5a9b515":"banner-upgrade.jpg",b81dc491ff982e1892b4eeeb94570e3c:"banner-mines.jpg","661884b648dd965ea69af44ea8c7ee95":"avatar.jpg",a8d1e2a1f1626c9b8edd4755d9c32150:"rocket.png","29f965541d768edadf1aad890a105f4f":"space.jpg",ac9e83f513d62d0c7fc3250c8a2d1f89:"candle.svg","1f689ff254757e970266197964c5d390":"lolpop.svg","9b7049b84c84b25ce8e457f56c837c42":"calendar.svg",b4c8d4f914ed6e253c933045ab9e3461:"hypno.svg","808ef5efdbeb6b276f70430b220f760b":"bells.svg","6ef5ecbeb712d1b1d752a33d1e9c279d":"cake.svg","6e3628fac94b5266f3b64cea9c5fe7ee":"globe.svg",c2c0de4f1d0a4ed1dd2df84eff4c7f73:"berry.svg","45ac385132ce7b83da133306d9a330f8":"muffin.svg","8f4c023d08704d2319e54c9872a8c46d":"record.svg",fe01a5a2d2ff76e0192e008ed6267558:"tophat.svg",ef580f1649ad89b5e268954da6ea30b2:"dring.svg","5bb7da32fc8a6f8dbe91cf7cedc20c65":"lpotion.svg","734e25b54462cda990767f69381d8355":"rose.svg",c02bc9477e447f6f71962df1fc7a399a:"bear.svg","4826a2db621709393534f8feae3d3f4a":"signet.svg","5efc0b426406d53e3b649c727079f26d":"watch.svg",e562d84d61312007f5108ab64cbfe6f9:"iongem.svg","923c4583ef32f1e6549c08d5a1839d4c":"peach.svg","500977bc4572974cf066e4c08b276369":"cap.svg",a64ccb23ba5a5ab0f1f789ab412cf3af:"pepe.svg",bb8c4faf5d5477b7abe934698601360a:"none.svg","34af5661e80ecf394b0a48aeeb28ab6c":"r-fire.svg","7629870dfcd56d08701d6a71de1e83df":"r-laugh.svg",f5a9ceb49eb8c4c03e26914bcd1e2576:"r-angry.svg","89d4ee9117e73bee099492a4ce5c5498":"r-heart.svg",c22eeb9eb2c04b336c2c7f989a2a93a7:"r-party.svg",fcf5bf14ee8b1ae499c387610e4d1977:"case-c1.jpg","06ce572b9077b276c1d8a7b06b5e8713":"case-c2.jpg","9e1537bfc41c71475ce556a1aaf4884f":"case-c3.jpg",c0847d0dc5fbcb1a68d80763032f0675:"case-c4.jpg",db1a02051117bc41aa898a143cdc3d48:"case-c5.jpg","72f77fc4af6bf75c8e7d10aa33580007":"case-c6.jpg",b289144243be3c7e4e7176e3a0070caa:"case-c7.jpg","313d5daa64736bbfb70ecfcd97ed3141":"case-c8.jpg"};function R0(t){return t.replace(/\/_blob\/([0-9a-f]{32})/g,(e,a)=>lo[a]?"assets/"+lo[a]:e)}function db(t){return t.replace(/position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba\(5, 6, 10, ([0-9.]+)\); display: flex; justify-content: center; align-items: flex-start; padding-top: \d+px/g,"position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, $1); display: flex; justify-content: center; align-items: center; padding: 16px")}var ef={};window.rkThumb=function(t,e){let a=t.toLowerCase().replace(/[^a-z0-9]/g,""),i="https://fragment.com/file/gifts/"+a+"/thumb.webp",n="https://nft.fragment.com/gift/"+a+"-1.webp";return ef[i]=n,ef[n]=e.replace(/\/_blob\/([0-9a-f]{32})/,(l,o)=>lo[o]?"assets/"+lo[o]:l),i};window.addEventListener("error",t=>{let e=t.target;if(e&&e.tagName==="IMG"){if(window.RK&&window.RK.user&&e.getAttribute("src")===window.RK.user.photo_url){e.setAttribute("src","assets/avatar.jpg");return}if(e.hasAttribute("data-av")){e.removeAttribute("data-av"),e.setAttribute("src","assets/avatar.jpg");return}let a=ef[e.getAttribute("src")];a&&e.setAttribute("src",a)}},!0);function oe(t,e){let a=db(R0(e)),i=new DOMParser().parseFromString(a,"text/html"),n=i.querySelector("x-dc"),l=n.querySelector("helmet"),o=[];l&&(l.querySelectorAll("link, style").forEach(g=>o.push(g.outerHTML)),l.remove());let s=Array.from(n.children)[0],r=i.querySelector("script[data-dc-script]").textContent,d=new Function("DCLogic",r+`
;return Component;`)(af);return{name:t,head:o,root:s,Logic:d}}var af=class{constructor(e){this.props=e||{},this.state={},this._host=null}setState(e,a){typeof e=="function"&&(e=e(this.state,this.props)),Object.assign(this.state,e),this._host?this._host.forceUpdate(a):a&&a()}forceUpdate(e){this._host&&this._host.forceUpdate(e)}},nf=t=>t.replace(/-([a-z])/g,(e,a)=>a.toUpperCase());function w0(t,e){if(t=t.trim(),t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(/^-?\d+(\.\d+)?$/.test(t))return parseFloat(t);let a=t.split("."),i;for(let n=e.length-1;n>=0;n--)if(e[n]&&a[0]in e[n]){i=e[n][a[0]];break}for(let n=1;n<a.length&&i!=null;n++)i=i[a[n]];return i}var ub=/\{\{([^}]+)\}\}/g;function ao(t,e){let a=t.match(/^\s*\{\{([^}]+)\}\}\s*$/);return a?w0(a[1],e):t.replace(ub,(i,n)=>{let l=w0(n,e);return l==null?"":String(l)})}function pb(t){let e={};return t.split(";").forEach(a=>{let i=a.indexOf(":");if(i<0)return;let n=a.slice(0,i).trim(),l=a.slice(i+1).trim();if(n){if(n.startsWith("--")){e[n]=l;return}n.startsWith("-webkit-")&&(n="Webkit"+nf(n.slice(8)).replace(/^./,o=>o.toUpperCase()).slice(0)),e[n.startsWith("Webkit")?n:nf(n)]=l}}),e}function B0(t,e,a,i){if(t.nodeType===3){let g=t.nodeValue;return!g.trim()&&g.indexOf(`
`)!==-1?null:g.indexOf("{{")===-1?g:ao(g,e)}if(t.nodeType!==1)return null;let n=t.tagName.toLowerCase(),l=g=>Array.from(t.childNodes).map((u,p)=>B0(u,g,a,p)).filter(u=>u!=null&&u!==!1);if(n==="sc-if")return ao(t.getAttribute("value")||"",e)?Dt.default.createElement(Dt.default.Fragment,{key:i},...l(e)):null;if(n==="sc-for"){let g=ao(t.getAttribute("list")||"",e)||[],u=t.getAttribute("as")||"item";return Dt.default.createElement(Dt.default.Fragment,{key:i},...g.map((p,b)=>Dt.default.createElement(Dt.default.Fragment,{key:b},...l(e.concat([{[u]:p,$index:b}])))))}let o=t.namespaceURI==="http://www.w3.org/2000/svg",s={key:i};for(let g of Array.from(t.attributes)){let u=g.name,p=g.value,b=p.indexOf("{{")===-1?p:ao(p,e);if(!u.startsWith("hint-")){if(u==="class")u="className";else if(u==="for")u="htmlFor";else if(u==="style"){s.style=pb(String(b));continue}else if(u.startsWith("on")){let y="on"+u.charAt(2).toUpperCase()+u.slice(3);y==="Onclick"&&(y="onClick"),u.toLowerCase()==="onclick"&&(y="onClick"),u.toLowerCase()==="oninput"&&(y="onChange"),u.toLowerCase()==="onkeydown"&&(y="onKeyDown"),typeof b=="function"&&(s[y]=b);continue}else o&&u.indexOf("-")!==-1&&!u.startsWith("aria-")&&!u.startsWith("data-")?u=nf(u):u==="tabindex"?u="tabIndex":u==="referrerpolicy"?u="referrerPolicy":u==="inputmode"?u="inputMode":u==="enterkeyhint"?u="enterKeyHint":u==="autocomplete"?u="autoComplete":u==="readonly"?u="readOnly":u==="disabled"&&(b=b===!0||b===""||b==="disabled"||b==="true");s[u]=b}}if(n==="a"){let u=String(s.href||t.getAttribute("href")||"").match(/([A-Za-z]+)\.dc\.html$/);s.href="#",s.onClick=p=>{p.preventDefault(),u&&a(u[1])}}n==="input"&&"value"in s&&!s.onChange&&(s.readOnly=!0);let r=l(e);return{img:1,input:1,br:1,hr:1,meta:1,link:1}[n]?Dt.default.createElement(n,s):Dt.default.createElement(n,s,...r)}var lf=class extends Dt.default.Component{constructor(e){super(e),this.logic=new e.screen.Logic({}),this.logic.state&&"balance"in this.logic.state&&(this.logic.state.balance=C0.get()),this.logic._host=this}componentDidMount(){za=this,this.logic.componentDidMount&&this.logic.componentDidMount()}componentWillUnmount(){za===this&&(za=null),this.logic.componentWillUnmount&&this.logic.componentWillUnmount(),this.logic._host=null}render(){let e=this.logic.renderVals?this.logic.renderVals():{};return B0(this.props.screen.root,[e],this.props.nav,"root")}},oo={Main:oe("Main",$p),Crash:oe("Crash",t0),Upgrade:oe("Upgrade",e0),Cases:oe("Cases",a0),Mines:oe("Mines",i0),Pvp:oe("Pvp",n0),Inventory:oe("Inventory",l0),Tasks:oe("Tasks",o0),Leaders:oe("Leaders",s0),Admin:oe("Admin",r0)},k0=new Set;Object.values(oo).forEach(t=>t.head.forEach(e=>{if(k0.has(e))return;k0.add(e);let a=document.createElement("div");a.innerHTML=e;let i=a.firstElementChild;i.tagName==="STYLE"&&/body\{/.test(i.textContent)&&(i.textContent=i.textContent.replace(/body\{[^}]*\}/,"")),document.head.appendChild(i)}));function S0(){let t=(location.hash||"").replace("#/","");return oo[t]?t:"Main"}var of=class extends Dt.default.Component{constructor(e){super(e),this.state={route:S0()},this.nav=this.nav.bind(this),this.back=()=>this.nav("Main")}componentDidMount(){window.addEventListener("hashchange",()=>this.setState({route:S0()})),q&&q.BackButton&&q.BackButton.onClick(this.back),this.syncBack()}componentDidUpdate(){this.syncBack()}syncBack(){!q||!q.BackButton||(this.state.route==="Main"?q.BackButton.hide():q.BackButton.show())}nav(e){oo[e]&&(location.hash=e==="Main"?"":"#/"+e,this.setState({route:e}),window.scrollTo(0,0))}render(){let e=this.state.route;return Dt.default.createElement(lf,{key:e,screen:oo[e],nav:this.nav})}};function O0(){let t=document.getElementById("app"),e=Math.min(window.innerWidth,480);t.style.zoom=String(e/390)}window.addEventListener("resize",O0);O0();eb().then(()=>{M0.start(),(0,T0.createRoot)(document.getElementById("app")).render(Dt.default.createElement(of))});})();
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
