(()=>{var w0=Object.create;var tf=Object.defineProperty;var k0=Object.getOwnPropertyDescriptor;var S0=Object.getOwnPropertyNames;var T0=Object.getPrototypeOf,z0=Object.prototype.hasOwnProperty;var oe=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var M0=(t,e,a,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of S0(e))!z0.call(t,n)&&n!==a&&tf(t,n,{get:()=>e[n],enumerable:!(i=k0(e,n))||i.enumerable});return t};var io=(t,e,a)=>(a=t!=null?w0(T0(t)):{},M0(e||!t||!t.__esModule?tf(a,"default",{value:t,enumerable:!0}):a,t));var df=oe(T=>{"use strict";var oo=Symbol.for("react.transitional.element"),C0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),E0=Symbol.for("react.strict_mode"),_0=Symbol.for("react.profiler"),O0=Symbol.for("react.consumer"),B0=Symbol.for("react.context"),R0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),of=Symbol.for("react.lazy"),L0=Symbol.for("react.activity"),ef=Symbol.iterator;function H0(t){return t===null||typeof t!="object"?null:(t=ef&&t[ef]||t["@@iterator"],typeof t=="function"?t:null)}var sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rf=Object.assign,ff={};function Ma(t,e,a){this.props=t,this.context=e,this.refs=ff,this.updater=a||sf}Ma.prototype.isReactComponent={};Ma.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ma.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cf(){}cf.prototype=Ma.prototype;function so(t,e,a){this.props=t,this.context=e,this.refs=ff,this.updater=a||sf}var ro=so.prototype=new cf;ro.constructor=so;rf(ro,Ma.prototype);ro.isPureReactComponent=!0;var af=Array.isArray;function lo(){}var V={H:null,A:null,T:null,S:null},uf=Object.prototype.hasOwnProperty;function fo(t,e,a){var i=a.ref;return{$$typeof:oo,type:t,key:e,ref:i!==void 0?i:null,props:a}}function U0(t,e){return fo(t.type,e,t.props)}function co(t){return typeof t=="object"&&t!==null&&t.$$typeof===oo}function j0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var nf=/\/+/g;function no(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j0(""+t.key):e.toString(36)}function G0(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(lo,lo):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function za(t,e,a,i,n){var l=typeof t;(l==="undefined"||l==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(l){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oo:case C0:o=!0;break;case of:return o=t._init,za(o(t._payload),e,a,i,n)}}if(o)return n=n(t),o=i===""?"."+no(t,0):i,af(n)?(a="",o!=null&&(a=o.replace(nf,"$&/")+"/"),za(n,e,a,"",function(u){return u})):n!=null&&(co(n)&&(n=U0(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(nf,"$&/")+"/")+o)),e.push(n)),1;o=0;var s=i===""?".":i+":";if(af(t))for(var r=0;r<t.length;r++)i=t[r],l=s+no(i,r),o+=za(i,e,a,l,n);else if(r=H0(t),typeof r=="function")for(t=r.call(t),r=0;!(i=t.next()).done;)i=i.value,l=s+no(i,r++),o+=za(i,e,a,l,n);else if(l==="object"){if(typeof t.then=="function")return za(G0(t),e,a,i,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function vn(t,e,a){if(t==null)return t;var i=[],n=0;return za(t,i,"","",function(l){return e.call(a,l,n++)}),i}function K0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},q0={map:vn,forEach:function(t,e,a){vn(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return vn(t,function(){e++}),e},toArray:function(t){return vn(t,function(e){return e})||[]},only:function(t){if(!co(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};T.Activity=L0;T.Children=q0;T.Component=Ma;T.Fragment=A0;T.Profiler=_0;T.PureComponent=so;T.StrictMode=E0;T.Suspense=N0;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V;T.__COMPILER_RUNTIME={__proto__:null,c:function(t){return V.H.useMemoCache(t)}};T.cache=function(t){return function(){return t.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=rf({},t.props),n=t.key;if(e!=null)for(l in e.key!==void 0&&(n=""+e.key),e)!uf.call(e,l)||l==="key"||l==="__self"||l==="__source"||l==="ref"&&e.ref===void 0||(i[l]=e[l]);var l=arguments.length-2;if(l===1)i.children=a;else if(1<l){for(var o=Array(l),s=0;s<l;s++)o[s]=arguments[s+2];i.children=o}return fo(t.type,n,i)};T.createContext=function(t){return t={$$typeof:B0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:O0,_context:t},t};T.createElement=function(t,e,a){var i,n={},l=null;if(e!=null)for(i in e.key!==void 0&&(l=""+e.key),e)uf.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(n[i]=e[i]);var o=arguments.length-2;if(o===1)n.children=a;else if(1<o){for(var s=Array(o),r=0;r<o;r++)s[r]=arguments[r+2];n.children=s}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)n[i]===void 0&&(n[i]=o[i]);return fo(t,l,n)};T.createRef=function(){return{current:null}};T.forwardRef=function(t){return{$$typeof:R0,render:t}};T.isValidElement=co;T.lazy=function(t){return{$$typeof:of,_payload:{_status:-1,_result:t},_init:K0}};T.memo=function(t,e){return{$$typeof:D0,type:t,compare:e===void 0?null:e}};T.startTransition=function(t){var e=V.T,a={};V.T=a;try{var i=t(),n=V.S;n!==null&&n(a,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(lo,lf)}catch(l){lf(l)}finally{e!==null&&a.types!==null&&(e.types=a.types),V.T=e}};T.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()};T.use=function(t){return V.H.use(t)};T.useActionState=function(t,e,a){return V.H.useActionState(t,e,a)};T.useCallback=function(t,e){return V.H.useCallback(t,e)};T.useContext=function(t){return V.H.useContext(t)};T.useDebugValue=function(){};T.useDeferredValue=function(t,e){return V.H.useDeferredValue(t,e)};T.useEffect=function(t,e){return V.H.useEffect(t,e)};T.useEffectEvent=function(t){return V.H.useEffectEvent(t)};T.useId=function(){return V.H.useId()};T.useImperativeHandle=function(t,e,a){return V.H.useImperativeHandle(t,e,a)};T.useInsertionEffect=function(t,e){return V.H.useInsertionEffect(t,e)};T.useLayoutEffect=function(t,e){return V.H.useLayoutEffect(t,e)};T.useMemo=function(t,e){return V.H.useMemo(t,e)};T.useOptimistic=function(t,e){return V.H.useOptimistic(t,e)};T.useReducer=function(t,e,a){return V.H.useReducer(t,e,a)};T.useRef=function(t){return V.H.useRef(t)};T.useState=function(t){return V.H.useState(t)};T.useSyncExternalStore=function(t,e,a){return V.H.useSyncExternalStore(t,e,a)};T.useTransition=function(){return V.H.useTransition()};T.version="19.2.8"});var wn=oe((Qg,pf)=>{"use strict";pf.exports=df()});var Sf=oe(J=>{"use strict";function go(t,e){var a=t.length;t.push(e);t:for(;0<a;){var i=a-1>>>1,n=t[i];if(0<kn(n,e))t[i]=e,t[a]=n,a=i;else break t}}function $t(t){return t.length===0?null:t[0]}function Tn(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;t:for(var i=0,n=t.length,l=n>>>1;i<l;){var o=2*(i+1)-1,s=t[o],r=o+1,u=t[r];if(0>kn(s,a))r<n&&0>kn(u,s)?(t[i]=u,t[r]=a,i=r):(t[i]=s,t[o]=a,i=o);else if(r<n&&0>kn(u,a))t[i]=u,t[r]=a,i=r;else break t}}return e}function kn(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}J.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(hf=performance,J.unstable_now=function(){return hf.now()}):(uo=Date,gf=uo.now(),J.unstable_now=function(){return uo.now()-gf});var hf,uo,gf,se=[],Ee=[],Y0=1,Ut=null,ht=3,bo=!1,xi=!1,yi=!1,mo=!1,xf=typeof setTimeout=="function"?setTimeout:null,yf=typeof clearTimeout=="function"?clearTimeout:null,bf=typeof setImmediate!="undefined"?setImmediate:null;function Sn(t){for(var e=$t(Ee);e!==null;){if(e.callback===null)Tn(Ee);else if(e.startTime<=t)Tn(Ee),e.sortIndex=e.expirationTime,go(se,e);else break;e=$t(Ee)}}function xo(t){if(yi=!1,Sn(t),!xi)if($t(se)!==null)xi=!0,Aa||(Aa=!0,Ca());else{var e=$t(Ee);e!==null&&yo(xo,e.startTime-t)}}var Aa=!1,vi=-1,vf=5,wf=-1;function kf(){return mo?!0:!(J.unstable_now()-wf<vf)}function po(){if(mo=!1,Aa){var t=J.unstable_now();wf=t;var e=!0;try{t:{xi=!1,yi&&(yi=!1,yf(vi),vi=-1),bo=!0;var a=ht;try{e:{for(Sn(t),Ut=$t(se);Ut!==null&&!(Ut.expirationTime>t&&kf());){var i=Ut.callback;if(typeof i=="function"){Ut.callback=null,ht=Ut.priorityLevel;var n=i(Ut.expirationTime<=t);if(t=J.unstable_now(),typeof n=="function"){Ut.callback=n,Sn(t),e=!0;break e}Ut===$t(se)&&Tn(se),Sn(t)}else Tn(se);Ut=$t(se)}if(Ut!==null)e=!0;else{var l=$t(Ee);l!==null&&yo(xo,l.startTime-t),e=!1}}break t}finally{Ut=null,ht=a,bo=!1}e=void 0}}finally{e?Ca():Aa=!1}}}var Ca;typeof bf=="function"?Ca=function(){bf(po)}:typeof MessageChannel!="undefined"?(ho=new MessageChannel,mf=ho.port2,ho.port1.onmessage=po,Ca=function(){mf.postMessage(null)}):Ca=function(){xf(po,0)};var ho,mf;function yo(t,e){vi=xf(function(){t(J.unstable_now())},e)}J.unstable_IdlePriority=5;J.unstable_ImmediatePriority=1;J.unstable_LowPriority=4;J.unstable_NormalPriority=3;J.unstable_Profiling=null;J.unstable_UserBlockingPriority=2;J.unstable_cancelCallback=function(t){t.callback=null};J.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vf=0<t?Math.floor(1e3/t):5};J.unstable_getCurrentPriorityLevel=function(){return ht};J.unstable_next=function(t){switch(ht){case 1:case 2:case 3:var e=3;break;default:e=ht}var a=ht;ht=e;try{return t()}finally{ht=a}};J.unstable_requestPaint=function(){mo=!0};J.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ht;ht=t;try{return e()}finally{ht=a}};J.unstable_scheduleCallback=function(t,e,a){var i=J.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?i+a:i):a=i,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:Y0++,callback:e,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>i?(t.sortIndex=a,go(Ee,t),$t(se)===null&&t===$t(Ee)&&(yi?(yf(vi),vi=-1):yi=!0,yo(xo,a-i))):(t.sortIndex=n,go(se,t),xi||bo||(xi=!0,Aa||(Aa=!0,Ca()))),t};J.unstable_shouldYield=kf;J.unstable_wrapCallback=function(t){var e=ht;return function(){var a=ht;ht=e;try{return t.apply(this,arguments)}finally{ht=a}}}});var zf=oe((Fg,Tf)=>{"use strict";Tf.exports=Sf()});var Cf=oe(bt=>{"use strict";var V0=wn();function Mf(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _e(){}var gt={d:{f:_e,r:function(){throw Error(Mf(522))},D:_e,C:_e,L:_e,m:_e,X:_e,S:_e,M:_e},p:0,findDOMNode:null},Z0=Symbol.for("react.portal");function X0(t,e,a){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z0,key:i==null?null:""+i,children:t,containerInfo:e,implementation:a}}var wi=V0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function zn(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gt;bt.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Mf(299));return X0(t,e,null,a)};bt.flushSync=function(t){var e=wi.T,a=gt.p;try{if(wi.T=null,gt.p=2,t)return t()}finally{wi.T=e,gt.p=a,gt.d.f()}};bt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,gt.d.C(t,e))};bt.prefetchDNS=function(t){typeof t=="string"&&gt.d.D(t)};bt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,i=zn(a,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,l=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?gt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:n,fetchPriority:l}):a==="script"&&gt.d.X(t,{crossOrigin:i,integrity:n,fetchPriority:l,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};bt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=zn(e.as,e.crossOrigin);gt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&gt.d.M(t)};bt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,i=zn(a,e.crossOrigin);gt.d.L(t,a,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};bt.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=zn(e.as,e.crossOrigin);gt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else gt.d.m(t)};bt.requestFormReset=function(t){gt.d.r(t)};bt.unstable_batchedUpdates=function(t,e){return t(e)};bt.useFormState=function(t,e,a){return wi.H.useFormState(t,e,a)};bt.useFormStatus=function(){return wi.H.useHostTransitionStatus()};bt.version="19.2.8"});var _f=oe((Ig,Ef)=>{"use strict";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(t){console.error(t)}}Af(),Ef.exports=Cf()});var qp=oe(Wl=>{"use strict";var lt=zf(),au=wn(),Q0=_f();function x(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rn(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function nu(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lu(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Of(t){if(rn(t)!==t)throw Error(x(188))}function J0(t){var e=t.alternate;if(!e){if(e=rn(t),e===null)throw Error(x(188));return e!==t?null:t}for(var a=t,i=e;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return Of(n),t;if(l===i)return Of(n),e;l=l.sibling}throw Error(x(188))}if(a.return!==i.return)a=n,i=l;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,i=l;break}if(s===i){o=!0,i=n,a=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===a){o=!0,a=l,i=n;break}if(s===i){o=!0,i=l,a=n;break}s=s.sibling}if(!o)throw Error(x(189))}}if(a.alternate!==i)throw Error(x(190))}if(a.tag!==3)throw Error(x(188));return a.stateNode.current===a?t:e}function ou(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=ou(t),e!==null)return e;t=t.sibling}return null}var Q=Object.assign,F0=Symbol.for("react.element"),Mn=Symbol.for("react.transitional.element"),Ei=Symbol.for("react.portal"),Na=Symbol.for("react.fragment"),su=Symbol.for("react.strict_mode"),Po=Symbol.for("react.profiler"),ru=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Js=Symbol.for("react.forward_ref"),ts=Symbol.for("react.suspense"),es=Symbol.for("react.suspense_list"),Fs=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),as=Symbol.for("react.activity"),W0=Symbol.for("react.memo_cache_sentinel"),Bf=Symbol.iterator;function ki(t){return t===null||typeof t!="object"?null:(t=Bf&&t[Bf]||t["@@iterator"],typeof t=="function"?t:null)}var I0=Symbol.for("react.client.reference");function is(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I0?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Na:return"Fragment";case Po:return"Profiler";case su:return"StrictMode";case ts:return"Suspense";case es:return"SuspenseList";case as:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ei:return"Portal";case ge:return t.displayName||"Context";case ru:return(t._context.displayName||"Context")+".Consumer";case Js:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fs:return e=t.displayName||null,e!==null?e:is(t.type)||"Memo";case Oe:e=t._payload,t=t._init;try{return is(t(e))}catch{}}return null}var _i=Array.isArray,S=au.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=Q0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ca={pending:!1,data:null,method:null,action:null},ns=[],Da=-1;function ie(t){return{current:t}}function rt(t){0>Da||(t.current=ns[Da],ns[Da]=null,Da--)}function Y(t,e){Da++,ns[Da]=t.current,t.current=e}var ae=ie(null),Qi=ie(null),qe=ie(null),ll=ie(null);function ol(t,e){switch(Y(qe,e),Y(Qi,t),Y(ae,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?jc(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=jc(e),t=Ap(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}rt(ae),Y(ae,t)}function Pa(){rt(ae),rt(Qi),rt(qe)}function ls(t){t.memoizedState!==null&&Y(ll,t);var e=ae.current,a=Ap(e,t.type);e!==a&&(Y(Qi,t),Y(ae,a))}function sl(t){Qi.current===t&&(rt(ae),rt(Qi)),ll.current===t&&(rt(ll),ln._currentValue=ca)}var vo,Rf;function oa(t){if(vo===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);vo=e&&e[1]||"",Rf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vo+t+Rf}var wo=!1;function ko(t,e){if(!t||wo)return"";wo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(f){var p=f}Reflect.construct(t,[],h)}else{try{h.call()}catch(f){p=f}t.call(h.prototype)}}else{try{throw Error()}catch(f){p=f}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(f){if(f&&p&&typeof f.stack=="string")return[f.stack,p.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),o=l[0],s=l[1];if(o&&s){var r=o.split(`
`),u=s.split(`
`);for(n=i=0;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(i===r.length||n===u.length)for(i=r.length-1,n=u.length-1;1<=i&&0<=n&&r[i]!==u[n];)n--;for(;1<=i&&0<=n;i--,n--)if(r[i]!==u[n]){if(i!==1||n!==1)do if(i--,n--,0>n||r[i]!==u[n]){var b=`
`+r[i].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=i&&0<=n);break}}}finally{wo=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?oa(a):""}function $0(t,e){switch(t.tag){case 26:case 27:case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return t.child!==e&&e!==null?oa("Suspense Fallback"):oa("Suspense");case 19:return oa("SuspenseList");case 0:case 15:return ko(t.type,!1);case 11:return ko(t.type.render,!1);case 1:return ko(t.type,!0);case 31:return oa("Activity");default:return""}}function Nf(t){try{var e="",a=null;do e+=$0(t,a),a=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var os=Object.prototype.hasOwnProperty,Ws=lt.unstable_scheduleCallback,So=lt.unstable_cancelCallback,P0=lt.unstable_shouldYield,t1=lt.unstable_requestPaint,Ot=lt.unstable_now,e1=lt.unstable_getCurrentPriorityLevel,fu=lt.unstable_ImmediatePriority,cu=lt.unstable_UserBlockingPriority,rl=lt.unstable_NormalPriority,a1=lt.unstable_LowPriority,uu=lt.unstable_IdlePriority,i1=lt.log,n1=lt.unstable_setDisableYieldValue,fn=null,Bt=null;function He(t){if(typeof i1=="function"&&n1(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(fn,t)}catch{}}var Rt=Math.clz32?Math.clz32:s1,l1=Math.log,o1=Math.LN2;function s1(t){return t>>>=0,t===0?32:31-(l1(t)/o1|0)|0}var Cn=256,An=262144,En=4194304;function sa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Nl(t,e,a){var i=t.pendingLanes;if(i===0)return 0;var n=0,l=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var s=i&134217727;return s!==0?(i=s&~l,i!==0?n=sa(i):(o&=s,o!==0?n=sa(o):a||(a=s&~t,a!==0&&(n=sa(a))))):(s=i&~l,s!==0?n=sa(s):o!==0?n=sa(o):a||(a=i&~t,a!==0&&(n=sa(a)))),n===0?0:e!==0&&e!==n&&(e&l)===0&&(l=n&-n,a=e&-e,l>=a||l===32&&(a&4194048)!==0)?e:n}function cn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function r1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function du(){var t=En;return En<<=1,(En&62914560)===0&&(En=4194304),t}function To(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function un(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function f1(t,e,a,i,n,l){var o=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var s=t.entanglements,r=t.expirationTimes,u=t.hiddenUpdates;for(a=o&~a;0<a;){var b=31-Rt(a),h=1<<b;s[b]=0,r[b]=-1;var p=u[b];if(p!==null)for(u[b]=null,b=0;b<p.length;b++){var f=p[b];f!==null&&(f.lane&=-536870913)}a&=~h}i!==0&&pu(t,i,0),l!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=l&~(o&~e))}function pu(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Rt(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|a&261930}function hu(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var i=31-Rt(a),n=1<<i;n&e|t[i]&e&&(t[i]|=e),a&=~n}}function gu(t,e){var a=e&-e;return a=(a&42)!==0?1:Is(a),(a&(t.suspendedLanes|e))!==0?0:a}function Is(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $s(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bu(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:jp(t.type))}function Df(t,e){var a=L.p;try{return L.p=t,e()}finally{L.p=a}}var ea=Math.random().toString(36).slice(2),ct="__reactFiber$"+ea,zt="__reactProps$"+ea,ci="__reactContainer$"+ea,ss="__reactEvents$"+ea,c1="__reactListeners$"+ea,u1="__reactHandles$"+ea,Lf="__reactResources$"+ea,dn="__reactMarker$"+ea;function Ps(t){delete t[ct],delete t[zt],delete t[ss],delete t[c1],delete t[u1]}function La(t){var e=t[ct];if(e)return e;for(var a=t.parentNode;a;){if(e=a[ci]||a[ct]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Vc(t);t!==null;){if(a=t[ct])return a;t=Vc(t)}return e}t=a,a=t.parentNode}return null}function ui(t){if(t=t[ct]||t[ci]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Oi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(x(33))}function Xa(t){var e=t[Lf];return e||(e=t[Lf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function st(t){t[dn]=!0}var mu=new Set,xu={};function va(t,e){ti(t,e),ti(t+"Capture",e)}function ti(t,e){for(xu[t]=e,t=0;t<e.length;t++)mu.add(e[t])}var d1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hf={},Uf={};function p1(t){return os.call(Uf,t)?!0:os.call(Hf,t)?!1:d1.test(t)?Uf[t]=!0:(Hf[t]=!0,!1)}function Vn(t,e,a){if(p1(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function _n(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function re(t,e,a,i){if(i===null)t.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+i)}}function Gt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yu(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h1(t,e,a){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i!="undefined"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rs(t){if(!t._valueTracker){var e=yu(t)?"checked":"value";t._valueTracker=h1(t,e,""+t[e])}}function vu(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),i="";return t&&(i=yu(t)?t.checked?"true":"false":t.value),t=i,t!==a?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}var g1=/[\n"\\]/g;function Yt(t){return t.replace(g1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fs(t,e,a,i,n,l,o,s){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Gt(e)):t.value!==""+Gt(e)&&(t.value=""+Gt(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?cs(t,o,Gt(e)):a!=null?cs(t,o,Gt(a)):i!=null&&t.removeAttribute("value"),n==null&&l!=null&&(t.defaultChecked=!!l),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Gt(s):t.removeAttribute("name")}function wu(t,e,a,i,n,l,o,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){rs(t);return}a=a!=null?""+Gt(a):"",e=e!=null?""+Gt(e):a,s||e===t.value||(t.value=e),t.defaultValue=e}i=i!=null?i:n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=s?t.checked:!!i,t.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),rs(t)}function cs(t,e,a){e==="number"&&fl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qa(t,e,a,i){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&i&&(t[a].defaultSelected=!0)}else{for(a=""+Gt(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function ku(t,e,a){if(e!=null&&(e=""+Gt(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Gt(a):""}function Su(t,e,a,i){if(e==null){if(i!=null){if(a!=null)throw Error(x(92));if(_i(i)){if(1<i.length)throw Error(x(93));i=i[0]}a=i}a==null&&(a=""),e=a}a=Gt(e),t.defaultValue=a,i=t.textContent,i===a&&i!==""&&i!==null&&(t.value=i),rs(t)}function ei(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var b1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jf(t,e,a){var i=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,a):typeof a!="number"||a===0||b1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Tu(t,e,a){if(e!=null&&typeof e!="object")throw Error(x(62));if(t=t.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var n in e)i=e[n],e.hasOwnProperty(n)&&a[n]!==i&&jf(t,n,i)}else for(var l in e)e.hasOwnProperty(l)&&jf(t,l,e[l])}function tr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var m1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),x1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zn(t){return x1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function be(){}var us=null;function er(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ha=null,Ja=null;function Gf(t){var e=ui(t);if(e&&(t=e.stateNode)){var a=t[zt]||null;t:switch(t=e.stateNode,e.type){case"input":if(fs(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var i=a[e];if(i!==t&&i.form===t.form){var n=i[zt]||null;if(!n)throw Error(x(90));fs(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)i=a[e],i.form===t.form&&vu(i)}break t;case"textarea":ku(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Qa(t,!!a.multiple,e,!1)}}}var zo=!1;function zu(t,e,a){if(zo)return t(e,a);zo=!0;try{var i=t(e);return i}finally{if(zo=!1,(Ha!==null||Ja!==null)&&(Xl(),Ha&&(e=Ha,t=Ja,Ja=Ha=null,Gf(e),t)))for(e=0;e<t.length;e++)Gf(t[e])}}function Ji(t,e){var a=t.stateNode;if(a===null)return null;var i=a[zt]||null;if(i===null)return null;a=i[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(x(231,e,typeof a));return a}var we=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ds=!1;if(we)try{Ea={},Object.defineProperty(Ea,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{ds=!1}var Ea,Ue=null,ar=null,Xn=null;function Mu(){if(Xn)return Xn;var t,e=ar,a=e.length,i,n="value"in Ue?Ue.value:Ue.textContent,l=n.length;for(t=0;t<a&&e[t]===n[t];t++);var o=a-t;for(i=1;i<=o&&e[a-i]===n[l-i];i++);return Xn=n.slice(t,1<i?1-i:void 0)}function Qn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function On(){return!0}function Kf(){return!1}function Mt(t){function e(a,i,n,l,o){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(a=t[s],this[s]=a?a(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?On:Kf,this.isPropagationStopped=Kf,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),e}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Mt(wa),pn=Q({},wa,{view:0,detail:0}),y1=Mt(pn),Mo,Co,Si,Ll=Q({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(Mo=t.screenX-Si.screenX,Co=t.screenY-Si.screenY):Co=Mo=0,Si=t),Mo)},movementY:function(t){return"movementY"in t?t.movementY:Co}}),qf=Mt(Ll),v1=Q({},Ll,{dataTransfer:0}),w1=Mt(v1),k1=Q({},pn,{relatedTarget:0}),Ao=Mt(k1),S1=Q({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),T1=Mt(S1),z1=Q({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M1=Mt(z1),C1=Q({},wa,{data:0}),Yf=Mt(C1),A1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_1[t])?!!e[t]:!1}function ir(){return O1}var B1=Q({},pn,{key:function(t){if(t.key){var e=A1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(t){return t.type==="keypress"?Qn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R1=Mt(B1),N1=Q({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=Mt(N1),D1=Q({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir}),L1=Mt(D1),H1=Q({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),U1=Mt(H1),j1=Q({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G1=Mt(j1),K1=Q({},wa,{newState:0,oldState:0}),q1=Mt(K1),Y1=[9,13,27,32],nr=we&&"CompositionEvent"in window,Ni=null;we&&"documentMode"in document&&(Ni=document.documentMode);var V1=we&&"TextEvent"in window&&!Ni,Cu=we&&(!nr||Ni&&8<Ni&&11>=Ni),Zf=" ",Xf=!1;function Au(t,e){switch(t){case"keyup":return Y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ua=!1;function Z1(t,e){switch(t){case"compositionend":return Eu(e);case"keypress":return e.which!==32?null:(Xf=!0,Zf);case"textInput":return t=e.data,t===Zf&&Xf?null:t;default:return null}}function X1(t,e){if(Ua)return t==="compositionend"||!nr&&Au(t,e)?(t=Mu(),Xn=ar=Ue=null,Ua=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cu&&e.locale!=="ko"?null:e.data;default:return null}}var Q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q1[t.type]:e==="textarea"}function _u(t,e,a,i){Ha?Ja?Ja.push(i):Ja=[i]:Ha=i,e=Cl(e,"onChange"),0<e.length&&(a=new Dl("onChange","change",null,a,i),t.push({event:a,listeners:e}))}var Di=null,Fi=null;function J1(t){zp(t,0)}function Hl(t){var e=Oi(t);if(vu(e))return t}function Jf(t,e){if(t==="change")return e}var Ou=!1;we&&(we?(Rn="oninput"in document,Rn||(Eo=document.createElement("div"),Eo.setAttribute("oninput","return;"),Rn=typeof Eo.oninput=="function"),Bn=Rn):Bn=!1,Ou=Bn&&(!document.documentMode||9<document.documentMode));var Bn,Rn,Eo;function Ff(){Di&&(Di.detachEvent("onpropertychange",Bu),Fi=Di=null)}function Bu(t){if(t.propertyName==="value"&&Hl(Fi)){var e=[];_u(e,Fi,t,er(t)),zu(J1,e)}}function F1(t,e,a){t==="focusin"?(Ff(),Di=e,Fi=a,Di.attachEvent("onpropertychange",Bu)):t==="focusout"&&Ff()}function W1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Fi)}function I1(t,e){if(t==="click")return Hl(e)}function $1(t,e){if(t==="input"||t==="change")return Hl(e)}function P1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dt=typeof Object.is=="function"?Object.is:P1;function Wi(t,e){if(Dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),i=Object.keys(e);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!os.call(e,n)||!Dt(t[n],e[n]))return!1}return!0}function Wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function If(t,e){var a=Wf(t);t=0;for(var i;a;){if(a.nodeType===3){if(i=t+a.textContent.length,t<=e&&i>=e)return{node:a,offset:e-t};t=i}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wf(a)}}function Ru(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ru(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Nu(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=fl(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=fl(t.document)}return e}function lr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var th=we&&"documentMode"in document&&11>=document.documentMode,ja=null,ps=null,Li=null,hs=!1;function $f(t,e,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hs||ja==null||ja!==fl(i)||(i=ja,"selectionStart"in i&&lr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Li&&Wi(Li,i)||(Li=i,i=Cl(ps,"onSelect"),0<i.length&&(e=new Dl("onSelect","select",null,e,a),t.push({event:e,listeners:i}),e.target=ja)))}function la(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ga={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},_o={},Du={};we&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ka(t){if(_o[t])return _o[t];if(!Ga[t])return t;var e=Ga[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Du)return _o[t]=e[a];return t}var Lu=ka("animationend"),Hu=ka("animationiteration"),Uu=ka("animationstart"),eh=ka("transitionrun"),ah=ka("transitionstart"),ih=ka("transitioncancel"),ju=ka("transitionend"),Gu=new Map,gs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gs.push("scrollEnd");function It(t,e){Gu.set(t,e),va(e,[t])}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},jt=[],Ka=0,or=0;function Ul(){for(var t=Ka,e=or=Ka=0;e<t;){var a=jt[e];jt[e++]=null;var i=jt[e];jt[e++]=null;var n=jt[e];jt[e++]=null;var l=jt[e];if(jt[e++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}l!==0&&Ku(a,n,l)}}function jl(t,e,a,i){jt[Ka++]=t,jt[Ka++]=e,jt[Ka++]=a,jt[Ka++]=i,or|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function sr(t,e,a,i){return jl(t,e,a,i),ul(t)}function Sa(t,e){return jl(t,null,null,e),ul(t)}function Ku(t,e,a){t.lanes|=a;var i=t.alternate;i!==null&&(i.lanes|=a);for(var n=!1,l=t.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(n=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,n&&e!==null&&(n=31-Rt(a),t=l.hiddenUpdates,i=t[n],i===null?t[n]=[e]:i.push(e),e.lane=a|536870912),l):null}function ul(t){if(50<Zi)throw Zi=0,Ls=null,Error(x(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var qa={};function nh(t,e,a,i){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,a,i){return new nh(t,e,a,i)}function rr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xe(t,e){var a=t.alternate;return a===null?(a=Et(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function qu(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Jn(t,e,a,i,n,l){var o=0;if(i=t,typeof t=="function")rr(t)&&(o=1);else if(typeof t=="string")o=sg(t,a,ae.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case as:return t=Et(31,a,e,n),t.elementType=as,t.lanes=l,t;case Na:return ua(a.children,n,l,e);case su:o=8,n|=24;break;case Po:return t=Et(12,a,e,n|2),t.elementType=Po,t.lanes=l,t;case ts:return t=Et(13,a,e,n),t.elementType=ts,t.lanes=l,t;case es:return t=Et(19,a,e,n),t.elementType=es,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ge:o=10;break t;case ru:o=9;break t;case Js:o=11;break t;case Fs:o=14;break t;case Oe:o=16,i=null;break t}o=29,a=Error(x(130,t===null?"null":typeof t,"")),i=null}return e=Et(o,a,e,n),e.elementType=t,e.type=i,e.lanes=l,e}function ua(t,e,a,i){return t=Et(7,t,i,e),t.lanes=a,t}function Oo(t,e,a){return t=Et(6,t,null,e),t.lanes=a,t}function Yu(t){var e=Et(18,null,null,0);return e.stateNode=t,e}function Bo(t,e,a){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Pf=new WeakMap;function Vt(t,e){if(typeof t=="object"&&t!==null){var a=Pf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Nf(e)},Pf.set(t,e),e)}return{value:t,source:e,stack:Nf(e)}}var Ya=[],Va=0,dl=null,Ii=0,Kt=[],qt=0,Ie=null,Pt=1,te="";function pe(t,e){Ya[Va++]=Ii,Ya[Va++]=dl,dl=t,Ii=e}function Vu(t,e,a){Kt[qt++]=Pt,Kt[qt++]=te,Kt[qt++]=Ie,Ie=t;var i=Pt;t=te;var n=32-Rt(i)-1;i&=~(1<<n),a+=1;var l=32-Rt(e)+n;if(30<l){var o=n-n%5;l=(i&(1<<o)-1).toString(32),i>>=o,n-=o,Pt=1<<32-Rt(e)+n|a<<n|i,te=l+t}else Pt=1<<l|a<<n|i,te=t}function fr(t){t.return!==null&&(pe(t,1),Vu(t,1,0))}function cr(t){for(;t===dl;)dl=Ya[--Va],Ya[Va]=null,Ii=Ya[--Va],Ya[Va]=null;for(;t===Ie;)Ie=Kt[--qt],Kt[qt]=null,te=Kt[--qt],Kt[qt]=null,Pt=Kt[--qt],Kt[qt]=null}function Zu(t,e){Kt[qt++]=Pt,Kt[qt++]=te,Kt[qt++]=Ie,Pt=e.id,te=e.overflow,Ie=t}var ut=null,X=null,B=!1,Ye=null,Zt=!1,bs=Error(x(519));function $e(t){var e=Error(x(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $i(Vt(e,t)),bs}function tc(t){var e=t.stateNode,a=t.type,i=t.memoizedProps;switch(e[ct]=t,e[zt]=i,a){case"dialog":C("cancel",e),C("close",e);break;case"iframe":case"object":case"embed":C("load",e);break;case"video":case"audio":for(a=0;a<an.length;a++)C(an[a],e);break;case"source":C("error",e);break;case"img":case"image":case"link":C("error",e),C("load",e);break;case"details":C("toggle",e);break;case"input":C("invalid",e),wu(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":C("invalid",e);break;case"textarea":C("invalid",e),Su(e,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||i.suppressHydrationWarning===!0||Cp(e.textContent,a)?(i.popover!=null&&(C("beforetoggle",e),C("toggle",e)),i.onScroll!=null&&C("scroll",e),i.onScrollEnd!=null&&C("scrollend",e),i.onClick!=null&&(e.onclick=be),e=!0):e=!1,e||$e(t,!0)}function ec(t){for(ut=t.return;ut;)switch(ut.tag){case 5:case 31:case 13:Zt=!1;return;case 27:case 3:Zt=!0;return;default:ut=ut.return}}function _a(t){if(t!==ut)return!1;if(!B)return ec(t),B=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ks(t.type,t.memoizedProps)),a=!a),a&&X&&$e(t),ec(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));X=Yc(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));X=Yc(t)}else e===27?(e=X,aa(t.type)?(t=Zs,Zs=null,X=t):X=e):X=ut?Qt(t.stateNode.nextSibling):null;return!0}function ga(){X=ut=null,B=!1}function Ro(){var t=Ye;return t!==null&&(St===null?St=t:St.push.apply(St,t),Ye=null),t}function $i(t){Ye===null?Ye=[t]:Ye.push(t)}var ms=ie(null),Ta=null,me=null;function Re(t,e,a){Y(ms,e._currentValue),e._currentValue=a}function ye(t){t._currentValue=ms.current,rt(ms)}function xs(t,e,a){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===a)break;t=t.return}}function ys(t,e,a,i){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var l=n.dependencies;if(l!==null){var o=n.child;l=l.firstContext;t:for(;l!==null;){var s=l;l=n;for(var r=0;r<e.length;r++)if(s.context===e[r]){l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),xs(l.return,a,t),i||(o=null);break t}l=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(x(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),xs(o,a,t),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===t){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function di(t,e,a,i){t=null;for(var n=e,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(x(387));if(o=o.memoizedProps,o!==null){var s=n.type;Dt(n.pendingProps.value,o.value)||(t!==null?t.push(s):t=[s])}}else if(n===ll.current){if(o=n.alternate,o===null)throw Error(x(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(ln):t=[ln])}n=n.return}t!==null&&ys(e,t,a,i),e.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!Dt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ba(t){Ta=t,me=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dt(t){return Xu(Ta,t)}function Nn(t,e){return Ta===null&&ba(t),Xu(t,e)}function Xu(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},me===null){if(t===null)throw Error(x(308));me=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else me=me.next=e;return a}var lh=typeof AbortController!="undefined"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},oh=lt.unstable_scheduleCallback,sh=lt.unstable_NormalPriority,at={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ur(){return{controller:new lh,data:new Map,refCount:0}}function hn(t){t.refCount--,t.refCount===0&&oh(sh,function(){t.controller.abort()})}var Hi=null,vs=0,ai=0,Fa=null;function rh(t,e){if(Hi===null){var a=Hi=[];vs=0,ai=Lr(),Fa={status:"pending",value:void 0,then:function(i){a.push(i)}}}return vs++,e.then(ac,ac),e}function ac(){if(--vs===0&&Hi!==null){Fa!==null&&(Fa.status="fulfilled");var t=Hi;Hi=null,ai=0,Fa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function fh(t,e){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var ic=S.S;S.S=function(t,e){op=Ot(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&rh(t,e),ic!==null&&ic(t,e)};var da=ie(null);function dr(){var t=da.current;return t!==null?t:K.pooledCache}function Fn(t,e){e===null?Y(da,da.current):Y(da,e.pool)}function Qu(){var t=dr();return t===null?null:{parent:at._currentValue,pool:t}}var pi=Error(x(460)),pr=Error(x(474)),Gl=Error(x(542)),hl={then:function(){}};function nc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ju(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(be,be),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,oc(t),t;default:if(typeof e.status=="string")e.then(be,be);else{if(t=K,t!==null&&100<t.shellSuspendCounter)throw Error(x(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=i}},function(i){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,oc(t),t}throw pa=e,pi}}function ra(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pa=a,pi):a}}var pa=null;function lc(){if(pa===null)throw Error(x(459));var t=pa;return pa=null,t}function oc(t){if(t===pi||t===Gl)throw Error(x(483))}var Wa=null,Pi=0;function Dn(t){var e=Pi;return Pi+=1,Wa===null&&(Wa=[]),Ju(Wa,t,e)}function Ti(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ln(t,e){throw e.$$typeof===F0?Error(x(525)):(t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Fu(t){function e(d,c){if(t){var g=d.deletions;g===null?(d.deletions=[c],d.flags|=16):g.push(c)}}function a(d,c){if(!t)return null;for(;c!==null;)e(d,c),c=c.sibling;return null}function i(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function n(d,c){return d=xe(d,c),d.index=0,d.sibling=null,d}function l(d,c,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<c?(d.flags|=67108866,c):g):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function o(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function s(d,c,g,m){return c===null||c.tag!==6?(c=Oo(g,d.mode,m),c.return=d,c):(c=n(c,g),c.return=d,c)}function r(d,c,g,m){var k=g.type;return k===Na?b(d,c,g.props.children,m,g.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Oe&&ra(k)===c.type)?(c=n(c,g.props),Ti(c,g),c.return=d,c):(c=Jn(g.type,g.key,g.props,null,d.mode,m),Ti(c,g),c.return=d,c)}function u(d,c,g,m){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=Bo(g,d.mode,m),c.return=d,c):(c=n(c,g.children||[]),c.return=d,c)}function b(d,c,g,m,k){return c===null||c.tag!==7?(c=ua(g,d.mode,m,k),c.return=d,c):(c=n(c,g),c.return=d,c)}function h(d,c,g){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Oo(""+c,d.mode,g),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Mn:return g=Jn(c.type,c.key,c.props,null,d.mode,g),Ti(g,c),g.return=d,g;case Ei:return c=Bo(c,d.mode,g),c.return=d,c;case Oe:return c=ra(c),h(d,c,g)}if(_i(c)||ki(c))return c=ua(c,d.mode,g,null),c.return=d,c;if(typeof c.then=="function")return h(d,Dn(c),g);if(c.$$typeof===ge)return h(d,Nn(d,c),g);Ln(d,c)}return null}function p(d,c,g,m){var k=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return k!==null?null:s(d,c,""+g,m);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mn:return g.key===k?r(d,c,g,m):null;case Ei:return g.key===k?u(d,c,g,m):null;case Oe:return g=ra(g),p(d,c,g,m)}if(_i(g)||ki(g))return k!==null?null:b(d,c,g,m,null);if(typeof g.then=="function")return p(d,c,Dn(g),m);if(g.$$typeof===ge)return p(d,c,Nn(d,g),m);Ln(d,g)}return null}function f(d,c,g,m,k){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return d=d.get(g)||null,s(c,d,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Mn:return d=d.get(m.key===null?g:m.key)||null,r(c,d,m,k);case Ei:return d=d.get(m.key===null?g:m.key)||null,u(c,d,m,k);case Oe:return m=ra(m),f(d,c,g,m,k)}if(_i(m)||ki(m))return d=d.get(g)||null,b(c,d,m,k,null);if(typeof m.then=="function")return f(d,c,g,Dn(m),k);if(m.$$typeof===ge)return f(d,c,g,Nn(c,m),k);Ln(c,m)}return null}function y(d,c,g,m){for(var k=null,R=null,w=c,M=c=0,_=null;w!==null&&M<g.length;M++){w.index>M?(_=w,w=null):_=w.sibling;var N=p(d,w,g[M],m);if(N===null){w===null&&(w=_);break}t&&w&&N.alternate===null&&e(d,w),c=l(N,c,M),R===null?k=N:R.sibling=N,R=N,w=_}if(M===g.length)return a(d,w),B&&pe(d,M),k;if(w===null){for(;M<g.length;M++)w=h(d,g[M],m),w!==null&&(c=l(w,c,M),R===null?k=w:R.sibling=w,R=w);return B&&pe(d,M),k}for(w=i(w);M<g.length;M++)_=f(w,d,M,g[M],m),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?M:_.key),c=l(_,c,M),R===null?k=_:R.sibling=_,R=_);return t&&w.forEach(function(Ae){return e(d,Ae)}),B&&pe(d,M),k}function v(d,c,g,m){if(g==null)throw Error(x(151));for(var k=null,R=null,w=c,M=c=0,_=null,N=g.next();w!==null&&!N.done;M++,N=g.next()){w.index>M?(_=w,w=null):_=w.sibling;var Ae=p(d,w,N.value,m);if(Ae===null){w===null&&(w=_);break}t&&w&&Ae.alternate===null&&e(d,w),c=l(Ae,c,M),R===null?k=Ae:R.sibling=Ae,R=Ae,w=_}if(N.done)return a(d,w),B&&pe(d,M),k;if(w===null){for(;!N.done;M++,N=g.next())N=h(d,N.value,m),N!==null&&(c=l(N,c,M),R===null?k=N:R.sibling=N,R=N);return B&&pe(d,M),k}for(w=i(w);!N.done;M++,N=g.next())N=f(w,d,M,N.value,m),N!==null&&(t&&N.alternate!==null&&w.delete(N.key===null?M:N.key),c=l(N,c,M),R===null?k=N:R.sibling=N,R=N);return t&&w.forEach(function(v0){return e(d,v0)}),B&&pe(d,M),k}function E(d,c,g,m){if(typeof g=="object"&&g!==null&&g.type===Na&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mn:t:{for(var k=g.key;c!==null;){if(c.key===k){if(k=g.type,k===Na){if(c.tag===7){a(d,c.sibling),m=n(c,g.props.children),m.return=d,d=m;break t}}else if(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Oe&&ra(k)===c.type){a(d,c.sibling),m=n(c,g.props),Ti(m,g),m.return=d,d=m;break t}a(d,c);break}else e(d,c);c=c.sibling}g.type===Na?(m=ua(g.props.children,d.mode,m,g.key),m.return=d,d=m):(m=Jn(g.type,g.key,g.props,null,d.mode,m),Ti(m,g),m.return=d,d=m)}return o(d);case Ei:t:{for(k=g.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){a(d,c.sibling),m=n(c,g.children||[]),m.return=d,d=m;break t}else{a(d,c);break}else e(d,c);c=c.sibling}m=Bo(g,d.mode,m),m.return=d,d=m}return o(d);case Oe:return g=ra(g),E(d,c,g,m)}if(_i(g))return y(d,c,g,m);if(ki(g)){if(k=ki(g),typeof k!="function")throw Error(x(150));return g=k.call(g),v(d,c,g,m)}if(typeof g.then=="function")return E(d,c,Dn(g),m);if(g.$$typeof===ge)return E(d,c,Nn(d,g),m);Ln(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,c!==null&&c.tag===6?(a(d,c.sibling),m=n(c,g),m.return=d,d=m):(a(d,c),m=Oo(g,d.mode,m),m.return=d,d=m),o(d)):a(d,c)}return function(d,c,g,m){try{Pi=0;var k=E(d,c,g,m);return Wa=null,k}catch(w){if(w===pi||w===Gl)throw w;var R=Et(29,w,null,d.mode);return R.lanes=m,R.return=d,R}}}var ma=Fu(!0),Wu=Fu(!1),Be=!1;function hr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ws(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ve(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ze(t,e,a){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(D&2)!==0){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,e=ul(t),Ku(t,null,a),e}return jl(t,i,e,a),ul(t)}function Ui(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,hu(t,a)}}function No(t,e){var a=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?n=l=e:l=l.next=e}else n=l=e;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var ks=!1;function ji(){if(ks){var t=Fa;if(t!==null)throw t}}function Gi(t,e,a,i){ks=!1;var n=t.updateQueue;Be=!1;var l=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,u=r.next;r.next=null,o===null?l=u:o.next=u,o=r;var b=t.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==o&&(s===null?b.firstBaseUpdate=u:s.next=u,b.lastBaseUpdate=r))}if(l!==null){var h=n.baseState;o=0,b=u=r=null,s=l;do{var p=s.lane&-536870913,f=p!==s.lane;if(f?(O&p)===p:(i&p)===p){p!==0&&p===ai&&(ks=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var y=t,v=s;p=e;var E=a;switch(v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(E,h,p);break t}h=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,p=typeof y=="function"?y.call(E,h,p):y,p==null)break t;h=Q({},h,p);break t;case 2:Be=!0}}p=s.callback,p!==null&&(t.flags|=64,f&&(t.flags|=8192),f=n.callbacks,f===null?n.callbacks=[p]:f.push(p))}else f={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(u=b=f,r=h):b=b.next=f,o|=p;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;f=s,s=f.next,f.next=null,n.lastBaseUpdate=f,n.shared.pending=null}}while(!0);b===null&&(r=h),n.baseState=r,n.firstBaseUpdate=u,n.lastBaseUpdate=b,l===null&&(n.shared.lanes=0),ta|=o,t.lanes=o,t.memoizedState=h}}function Iu(t,e){if(typeof t!="function")throw Error(x(191,t));t.call(e)}function $u(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Iu(a[t],e)}var ii=ie(null),gl=ie(0);function sc(t,e){t=ze,Y(gl,t),Y(ii,e),ze=t|e.baseLanes}function Ss(){Y(gl,ze),Y(ii,ii.current)}function gr(){ze=gl.current,rt(ii),rt(gl)}var Lt=ie(null),Xt=null;function Ne(t){var e=t.alternate;Y($,$.current&1),Y(Lt,t),Xt===null&&(e===null||ii.current!==null||e.memoizedState!==null)&&(Xt=t)}function Ts(t){Y($,$.current),Y(Lt,t),Xt===null&&(Xt=t)}function Pu(t){t.tag===22?(Y($,$.current),Y(Lt,t),Xt===null&&(Xt=t)):De(t)}function De(){Y($,$.current),Y(Lt,Lt.current)}function At(t){rt(Lt),Xt===t&&(Xt=null),rt($)}var $=ie(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ys(a)||Vs(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ke=0,z=null,G=null,tt=null,ml=!1,Ia=!1,xa=!1,xl=0,tn=0,$a=null,ch=0;function W(){throw Error(x(321))}function br(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Dt(t[a],e[a]))return!1;return!0}function mr(t,e,a,i,n,l){return ke=l,z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,S.H=t===null||t.memoizedState===null?_d:Ar,xa=!1,l=a(i,n),xa=!1,Ia&&(l=ed(e,a,i,n)),td(t),l}function td(t){S.H=en;var e=G!==null&&G.next!==null;if(ke=0,tt=G=z=null,ml=!1,tn=0,$a=null,e)throw Error(x(300));t===null||it||(t=t.dependencies,t!==null&&pl(t)&&(it=!0))}function ed(t,e,a,i){z=t;var n=0;do{if(Ia&&($a=null),tn=0,Ia=!1,25<=n)throw Error(x(301));if(n+=1,tt=G=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}S.H=Od,l=e(a,i)}while(Ia);return l}function uh(){var t=S.H,e=t.useState()[0];return e=typeof e.then=="function"?gn(e):e,t=t.useState()[0],(G!==null?G.memoizedState:null)!==t&&(z.flags|=1024),e}function xr(){var t=xl!==0;return xl=0,t}function yr(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function vr(t){if(ml){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ml=!1}ke=0,tt=G=z=null,Ia=!1,tn=xl=0,$a=null}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?z.memoizedState=tt=t:tt=tt.next=t,tt}function P(){if(G===null){var t=z.alternate;t=t!==null?t.memoizedState:null}else t=G.next;var e=tt===null?z.memoizedState:tt.next;if(e!==null)tt=e,G=t;else{if(t===null)throw z.alternate===null?Error(x(467)):Error(x(310));G=t,t={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},tt===null?z.memoizedState=tt=t:tt=tt.next=t}return tt}function Kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function gn(t){var e=tn;return tn+=1,$a===null&&($a=[]),t=Ju($a,t,e),e=z,(tt===null?e.memoizedState:tt.next)===null&&(e=e.alternate,S.H=e===null||e.memoizedState===null?_d:Ar),t}function ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return gn(t);if(t.$$typeof===ge)return dt(t)}throw Error(x(438,String(t)))}function wr(t){var e=null,a=z.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var i=z.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Kl(),z.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),i=0;i<t;i++)a[i]=W0;return e.index++,a}function Se(t,e){return typeof e=="function"?e(t):e}function Wn(t){var e=P();return kr(e,G,t)}function kr(t,e,a){var i=t.queue;if(i===null)throw Error(x(311));i.lastRenderedReducer=a;var n=t.baseQueue,l=i.pending;if(l!==null){if(n!==null){var o=n.next;n.next=l.next,l.next=o}e.baseQueue=n=l,i.pending=null}if(l=t.baseState,n===null)t.memoizedState=l;else{e=n.next;var s=o=null,r=null,u=e,b=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(O&h)===h:(ke&h)===h){var p=u.revertLane;if(p===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===ai&&(b=!0);else if((ke&p)===p){u=u.next,p===ai&&(b=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},r===null?(s=r=h,o=l):r=r.next=h,z.lanes|=p,ta|=p;h=u.action,xa&&a(l,h),l=u.hasEagerState?u.eagerState:a(l,h)}else p={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},r===null?(s=r=p,o=l):r=r.next=p,z.lanes|=h,ta|=h;u=u.next}while(u!==null&&u!==e);if(r===null?o=l:r.next=s,!Dt(l,t.memoizedState)&&(it=!0,b&&(a=Fa,a!==null)))throw a;t.memoizedState=l,t.baseState=o,t.baseQueue=r,i.lastRenderedState=l}return n===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Do(t){var e=P(),a=e.queue;if(a===null)throw Error(x(311));a.lastRenderedReducer=t;var i=a.dispatch,n=a.pending,l=e.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do l=t(l,o.action),o=o.next;while(o!==n);Dt(l,e.memoizedState)||(it=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),a.lastRenderedState=l}return[l,i]}function ad(t,e,a){var i=z,n=P(),l=B;if(l){if(a===void 0)throw Error(x(407));a=a()}else a=e();var o=!Dt((G||n).memoizedState,a);if(o&&(n.memoizedState=a,it=!0),n=n.queue,Sr(ld.bind(null,i,n,t),[t]),n.getSnapshot!==e||o||tt!==null&&tt.memoizedState.tag&1){if(i.flags|=2048,ni(9,{destroy:void 0},nd.bind(null,i,n,a,e),null),K===null)throw Error(x(349));l||(ke&127)!==0||id(i,e,a)}return a}function id(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=z.updateQueue,e===null?(e=Kl(),z.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function nd(t,e,a,i){e.value=a,e.getSnapshot=i,od(e)&&sd(t)}function ld(t,e,a){return a(function(){od(e)&&sd(t)})}function od(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Dt(t,a)}catch{return!0}}function sd(t){var e=Sa(t,2);e!==null&&Tt(e,t,2)}function zs(t){var e=mt();if(typeof t=="function"){var a=t;if(t=a(),xa){He(!0);try{a()}finally{He(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:t},e}function rd(t,e,a,i){return t.baseState=a,kr(t,G,typeof i=="function"?i:Se)}function dh(t,e,a,i,n){if(Vl(t))throw Error(x(485));if(t=e.action,t!==null){var l={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};S.T!==null?a(!0):l.isTransition=!1,i(l),a=e.pending,a===null?(l.next=e.pending=l,fd(e,l)):(l.next=a.next,e.pending=a.next=l)}}function fd(t,e){var a=e.action,i=e.payload,n=t.state;if(e.isTransition){var l=S.T,o={};S.T=o;try{var s=a(n,i),r=S.S;r!==null&&r(o,s),rc(t,e,s)}catch(u){Ms(t,e,u)}finally{l!==null&&o.types!==null&&(l.types=o.types),S.T=l}}else try{l=a(n,i),rc(t,e,l)}catch(u){Ms(t,e,u)}}function rc(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){fc(t,e,i)},function(i){return Ms(t,e,i)}):fc(t,e,a)}function fc(t,e,a){e.status="fulfilled",e.value=a,cd(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,fd(t,a)))}function Ms(t,e,a){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=a,cd(e),e=e.next;while(e!==i)}t.action=null}function cd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ud(t,e){return e}function cc(t,e){if(B){var a=K.formState;if(a!==null){t:{var i=z;if(B){if(X){e:{for(var n=X,l=Zt;n.nodeType!==8;){if(!l){n=null;break e}if(n=Qt(n.nextSibling),n===null){n=null;break e}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){X=Qt(n.nextSibling),i=n.data==="F!";break t}}$e(i)}i=!1}i&&(e=a[0])}}return a=mt(),a.memoizedState=a.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ud,lastRenderedState:e},a.queue=i,a=Cd.bind(null,z,i),i.dispatch=a,i=zs(!1),l=Cr.bind(null,z,!1,i.queue),i=mt(),n={state:e,dispatch:null,action:t,pending:null},i.queue=n,a=dh.bind(null,z,n,l,a),n.dispatch=a,i.memoizedState=t,[e,a,!1]}function uc(t){var e=P();return dd(e,G,t)}function dd(t,e,a){if(e=kr(t,e,ud)[0],t=Wn(Se)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=gn(e)}catch(o){throw o===pi?Gl:o}else i=e;e=P();var n=e.queue,l=n.dispatch;return a!==e.memoizedState&&(z.flags|=2048,ni(9,{destroy:void 0},ph.bind(null,n,a),null)),[i,l,t]}function ph(t,e){t.action=e}function dc(t){var e=P(),a=G;if(a!==null)return dd(e,a,t);P(),e=e.memoizedState,a=P();var i=a.queue.dispatch;return a.memoizedState=t,[e,i,!1]}function ni(t,e,a,i){return t={tag:t,create:a,deps:i,inst:e,next:null},e=z.updateQueue,e===null&&(e=Kl(),z.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(i=a.next,a.next=t,t.next=i,e.lastEffect=t),t}function pd(){return P().memoizedState}function In(t,e,a,i){var n=mt();z.flags|=t,n.memoizedState=ni(1|e,{destroy:void 0},a,i===void 0?null:i)}function Yl(t,e,a,i){var n=P();i=i===void 0?null:i;var l=n.memoizedState.inst;G!==null&&i!==null&&br(i,G.memoizedState.deps)?n.memoizedState=ni(e,l,a,i):(z.flags|=t,n.memoizedState=ni(1|e,l,a,i))}function pc(t,e){In(8390656,8,t,e)}function Sr(t,e){Yl(2048,8,t,e)}function hh(t){z.flags|=4;var e=z.updateQueue;if(e===null)e=Kl(),z.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function hd(t){var e=P().memoizedState;return hh({ref:e,nextImpl:t}),function(){if((D&2)!==0)throw Error(x(440));return e.impl.apply(void 0,arguments)}}function gd(t,e){return Yl(4,2,t,e)}function bd(t,e){return Yl(4,4,t,e)}function md(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xd(t,e,a){a=a!=null?a.concat([t]):null,Yl(4,4,md.bind(null,e,t),a)}function Tr(){}function yd(t,e){var a=P();e=e===void 0?null:e;var i=a.memoizedState;return e!==null&&br(e,i[1])?i[0]:(a.memoizedState=[t,e],t)}function vd(t,e){var a=P();e=e===void 0?null:e;var i=a.memoizedState;if(e!==null&&br(e,i[1]))return i[0];if(i=t(),xa){He(!0);try{t()}finally{He(!1)}}return a.memoizedState=[i,e],i}function zr(t,e,a){return a===void 0||(ke&1073741824)!==0&&(O&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=rp(),z.lanes|=t,ta|=t,a)}function wd(t,e,a,i){return Dt(a,e)?a:ii.current!==null?(t=zr(t,a,i),Dt(t,e)||(it=!0),t):(ke&42)===0||(ke&1073741824)!==0&&(O&261930)===0?(it=!0,t.memoizedState=a):(t=rp(),z.lanes|=t,ta|=t,e)}function kd(t,e,a,i,n){var l=L.p;L.p=l!==0&&8>l?l:8;var o=S.T,s={};S.T=s,Cr(t,!1,e,a);try{var r=n(),u=S.S;if(u!==null&&u(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=fh(r,i);Ki(t,e,b,Nt(t))}else Ki(t,e,i,Nt(t))}catch(h){Ki(t,e,{then:function(){},status:"rejected",reason:h},Nt())}finally{L.p=l,o!==null&&s.types!==null&&(o.types=s.types),S.T=o}}function gh(){}function Cs(t,e,a,i){if(t.tag!==5)throw Error(x(476));var n=Sd(t).queue;kd(t,n,e,ca,a===null?gh:function(){return Td(t),a(i)})}function Sd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ca,baseState:ca,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:ca},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Se,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Td(t){var e=Sd(t);e.next===null&&(e=t.alternate.memoizedState),Ki(t,e.next.queue,{},Nt())}function Mr(){return dt(ln)}function zd(){return P().memoizedState}function Md(){return P().memoizedState}function bh(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Nt();t=Ve(a);var i=Ze(e,t,a);i!==null&&(Tt(i,e,a),Ui(i,e,a)),e={cache:ur()},t.payload=e;return}e=e.return}}function mh(t,e,a){var i=Nt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(t)?Ad(e,a):(a=sr(t,e,a,i),a!==null&&(Tt(a,t,i),Ed(a,e,i)))}function Cd(t,e,a){var i=Nt();Ki(t,e,a,i)}function Ki(t,e,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))Ad(e,n);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var o=e.lastRenderedState,s=l(o,a);if(n.hasEagerState=!0,n.eagerState=s,Dt(s,o))return jl(t,e,n,0),K===null&&Ul(),!1}catch{}if(a=sr(t,e,n,i),a!==null)return Tt(a,t,i),Ed(a,e,i),!0}return!1}function Cr(t,e,a,i){if(i={lane:2,revertLane:Lr(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(e)throw Error(x(479))}else e=sr(t,a,i,2),e!==null&&Tt(e,t,2)}function Vl(t){var e=t.alternate;return t===z||e!==null&&e===z}function Ad(t,e){Ia=ml=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Ed(t,e,a){if((a&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,a|=i,e.lanes=a,hu(t,a)}}var en={readContext:dt,use:ql,useCallback:W,useContext:W,useEffect:W,useImperativeHandle:W,useLayoutEffect:W,useInsertionEffect:W,useMemo:W,useReducer:W,useRef:W,useState:W,useDebugValue:W,useDeferredValue:W,useTransition:W,useSyncExternalStore:W,useId:W,useHostTransitionStatus:W,useFormState:W,useActionState:W,useOptimistic:W,useMemoCache:W,useCacheRefresh:W};en.useEffectEvent=W;var _d={readContext:dt,use:ql,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:pc,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,In(4194308,4,md.bind(null,e,t),a)},useLayoutEffect:function(t,e){return In(4194308,4,t,e)},useInsertionEffect:function(t,e){In(4,2,t,e)},useMemo:function(t,e){var a=mt();e=e===void 0?null:e;var i=t();if(xa){He(!0);try{t()}finally{He(!1)}}return a.memoizedState=[i,e],i},useReducer:function(t,e,a){var i=mt();if(a!==void 0){var n=a(e);if(xa){He(!0);try{a(e)}finally{He(!1)}}}else n=e;return i.memoizedState=i.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},i.queue=t,t=t.dispatch=mh.bind(null,z,t),[i.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:function(t){t=zs(t);var e=t.queue,a=Cd.bind(null,z,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Tr,useDeferredValue:function(t,e){var a=mt();return zr(a,t,e)},useTransition:function(){var t=zs(!1);return t=kd.bind(null,z,t.queue,!0,!1),mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var i=z,n=mt();if(B){if(a===void 0)throw Error(x(407));a=a()}else{if(a=e(),K===null)throw Error(x(349));(O&127)!==0||id(i,e,a)}n.memoizedState=a;var l={value:a,getSnapshot:e};return n.queue=l,pc(ld.bind(null,i,l,t),[t]),i.flags|=2048,ni(9,{destroy:void 0},nd.bind(null,i,l,a,e),null),a},useId:function(){var t=mt(),e=K.identifierPrefix;if(B){var a=te,i=Pt;a=(i&~(1<<32-Rt(i)-1)).toString(32)+a,e="_"+e+"R_"+a,a=xl++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=ch++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Mr,useFormState:cc,useActionState:cc,useOptimistic:function(t){var e=mt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Cr.bind(null,z,!0,a),a.dispatch=e,[t,e]},useMemoCache:wr,useCacheRefresh:function(){return mt().memoizedState=bh.bind(null,z)},useEffectEvent:function(t){var e=mt(),a={impl:t};return e.memoizedState=a,function(){if((D&2)!==0)throw Error(x(440));return a.impl.apply(void 0,arguments)}}},Ar={readContext:dt,use:ql,useCallback:yd,useContext:dt,useEffect:Sr,useImperativeHandle:xd,useInsertionEffect:gd,useLayoutEffect:bd,useMemo:vd,useReducer:Wn,useRef:pd,useState:function(){return Wn(Se)},useDebugValue:Tr,useDeferredValue:function(t,e){var a=P();return wd(a,G.memoizedState,t,e)},useTransition:function(){var t=Wn(Se)[0],e=P().memoizedState;return[typeof t=="boolean"?t:gn(t),e]},useSyncExternalStore:ad,useId:zd,useHostTransitionStatus:Mr,useFormState:uc,useActionState:uc,useOptimistic:function(t,e){var a=P();return rd(a,G,t,e)},useMemoCache:wr,useCacheRefresh:Md};Ar.useEffectEvent=hd;var Od={readContext:dt,use:ql,useCallback:yd,useContext:dt,useEffect:Sr,useImperativeHandle:xd,useInsertionEffect:gd,useLayoutEffect:bd,useMemo:vd,useReducer:Do,useRef:pd,useState:function(){return Do(Se)},useDebugValue:Tr,useDeferredValue:function(t,e){var a=P();return G===null?zr(a,t,e):wd(a,G.memoizedState,t,e)},useTransition:function(){var t=Do(Se)[0],e=P().memoizedState;return[typeof t=="boolean"?t:gn(t),e]},useSyncExternalStore:ad,useId:zd,useHostTransitionStatus:Mr,useFormState:dc,useActionState:dc,useOptimistic:function(t,e){var a=P();return G!==null?rd(a,G,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:wr,useCacheRefresh:Md};Od.useEffectEvent=hd;function Lo(t,e,a,i){e=t.memoizedState,a=a(i,e),a=a==null?e:Q({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var As={enqueueSetState:function(t,e,a){t=t._reactInternals;var i=Nt(),n=Ve(i);n.payload=e,a!=null&&(n.callback=a),e=Ze(t,n,i),e!==null&&(Tt(e,t,i),Ui(e,t,i))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var i=Nt(),n=Ve(i);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=Ze(t,n,i),e!==null&&(Tt(e,t,i),Ui(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Nt(),i=Ve(a);i.tag=2,e!=null&&(i.callback=e),e=Ze(t,i,a),e!==null&&(Tt(e,t,a),Ui(e,t,a))}};function hc(t,e,a,i,n,l,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,l,o):e.prototype&&e.prototype.isPureReactComponent?!Wi(a,i)||!Wi(n,l):!0}function gc(t,e,a,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,i),e.state!==t&&As.enqueueReplaceState(e,e.state,null)}function ya(t,e){var a=e;if("ref"in e){a={};for(var i in e)i!=="ref"&&(a[i]=e[i])}if(t=t.defaultProps){a===e&&(a=Q({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Bd(t){cl(t)}function Rd(t){console.error(t)}function Nd(t){cl(t)}function yl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function bc(t,e,a){try{var i=t.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Es(t,e,a){return a=Ve(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(t,e)},a}function Dd(t){return t=Ve(t),t.tag=3,t}function Ld(t,e,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;t.payload=function(){return n(l)},t.callback=function(){bc(e,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){bc(e,a,i),typeof n!="function"&&(Xe===null?Xe=new Set([this]):Xe.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function xh(t,e,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=a.alternate,e!==null&&di(e,a,n,!0),a=Lt.current,a!==null){switch(a.tag){case 31:case 13:return Xt===null?Tl():a.alternate===null&&I===0&&(I=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===hl?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([i]):e.add(i),Qo(t,i,n)),!1;case 22:return a.flags|=65536,i===hl?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([i]):a.add(i)),Qo(t,i,n)),!1}throw Error(x(435,a.tag))}return Qo(t,i,n),Tl(),!1}if(B)return e=Lt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,i!==bs&&(t=Error(x(422),{cause:i}),$i(Vt(t,a)))):(i!==bs&&(e=Error(x(423),{cause:i}),$i(Vt(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,i=Vt(i,a),n=Es(t.stateNode,i,n),No(t,n),I!==4&&(I=2)),!1;var l=Error(x(520),{cause:i});if(l=Vt(l,a),Vi===null?Vi=[l]:Vi.push(l),I!==4&&(I=2),e===null)return!0;i=Vt(i,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Es(a.stateNode,i,t),No(a,t),!1;case 1:if(e=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Xe===null||!Xe.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Dd(n),Ld(n,t,a,i),No(a,n),!1}a=a.return}while(a!==null);return!1}var Er=Error(x(461)),it=!1;function ft(t,e,a,i){e.child=t===null?Wu(e,null,a,i):ma(e,t.child,a,i)}function mc(t,e,a,i,n){a=a.render;var l=e.ref;if("ref"in i){var o={};for(var s in i)s!=="ref"&&(o[s]=i[s])}else o=i;return ba(e),i=mr(t,e,a,o,l,n),s=xr(),t!==null&&!it?(yr(t,e,n),Te(t,e,n)):(B&&s&&fr(e),e.flags|=1,ft(t,e,i,n),e.child)}function xc(t,e,a,i,n){if(t===null){var l=a.type;return typeof l=="function"&&!rr(l)&&l.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=l,Hd(t,e,l,i,n)):(t=Jn(a.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!_r(t,n)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:Wi,a(o,i)&&t.ref===e.ref)return Te(t,e,n)}return e.flags|=1,t=xe(l,i),t.ref=e.ref,t.return=e,e.child=t}function Hd(t,e,a,i,n){if(t!==null){var l=t.memoizedProps;if(Wi(l,i)&&t.ref===e.ref)if(it=!1,e.pendingProps=i=l,_r(t,n))(t.flags&131072)!==0&&(it=!0);else return e.lanes=t.lanes,Te(t,e,n)}return _s(t,e,a,i,n)}function Ud(t,e,a,i){var n=i.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,t!==null){for(i=e.child=t.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,e.child=null;return yc(t,e,l,a,i)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fn(e,l!==null?l.cachePool:null),l!==null?sc(e,l):Ss(),Pu(e);else return i=e.lanes=536870912,yc(t,e,l!==null?l.baseLanes|a:a,a,i)}else l!==null?(Fn(e,l.cachePool),sc(e,l),De(e),e.memoizedState=null):(t!==null&&Fn(e,null),Ss(),De(e));return ft(t,e,n,a),e.child}function Bi(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function yc(t,e,a,i,n){var l=dr();return l=l===null?null:{parent:at._currentValue,pool:l},e.memoizedState={baseLanes:a,cachePool:l},t!==null&&Fn(e,null),Ss(),Pu(e),t!==null&&di(t,e,i,!0),e.childLanes=n,null}function $n(t,e){return e=vl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function vc(t,e,a){return ma(e,t.child,null,a),t=$n(e,e.pendingProps),t.flags|=2,At(e),e.memoizedState=null,t}function yh(t,e,a){var i=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(B){if(i.mode==="hidden")return t=$n(e,i),e.lanes=536870912,Bi(null,t);if(Ts(e),(t=X)?(t=_p(t,Zt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Pt,overflow:te}:null,retryLane:536870912,hydrationErrors:null},a=Yu(t),a.return=e,e.child=a,ut=e,X=null)):t=null,t===null)throw $e(e);return e.lanes=536870912,null}return $n(e,i)}var l=t.memoizedState;if(l!==null){var o=l.dehydrated;if(Ts(e),n)if(e.flags&256)e.flags&=-257,e=vc(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(x(558));else if(it||di(t,e,a,!1),n=(a&t.childLanes)!==0,it||n){if(i=K,i!==null&&(o=gu(i,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,Sa(t,o),Tt(i,t,o),Er;Tl(),e=vc(t,e,a)}else t=l.treeContext,X=Qt(o.nextSibling),ut=e,B=!0,Ye=null,Zt=!1,t!==null&&Zu(e,t),e=$n(e,i),e.flags|=4096;return e}return t=xe(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Pn(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(x(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function _s(t,e,a,i,n){return ba(e),a=mr(t,e,a,i,void 0,n),i=xr(),t!==null&&!it?(yr(t,e,n),Te(t,e,n)):(B&&i&&fr(e),e.flags|=1,ft(t,e,a,n),e.child)}function wc(t,e,a,i,n,l){return ba(e),e.updateQueue=null,a=ed(e,i,a,n),td(t),i=xr(),t!==null&&!it?(yr(t,e,l),Te(t,e,l)):(B&&i&&fr(e),e.flags|=1,ft(t,e,a,l),e.child)}function kc(t,e,a,i,n){if(ba(e),e.stateNode===null){var l=qa,o=a.contextType;typeof o=="object"&&o!==null&&(l=dt(o)),l=new a(i,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=As,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=i,l.state=e.memoizedState,l.refs={},hr(e),o=a.contextType,l.context=typeof o=="object"&&o!==null?dt(o):qa,l.state=e.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Lo(e,a,o,i),l.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&As.enqueueReplaceState(l,l.state,null),Gi(e,i,l,n),ji(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){l=e.stateNode;var s=e.memoizedProps,r=ya(a,s);l.props=r;var u=l.context,b=a.contextType;o=qa,typeof b=="object"&&b!==null&&(o=dt(b));var h=a.getDerivedStateFromProps;b=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,b||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||u!==o)&&gc(e,l,i,o),Be=!1;var p=e.memoizedState;l.state=p,Gi(e,i,l,n),ji(),u=e.memoizedState,s||p!==u||Be?(typeof h=="function"&&(Lo(e,a,h,i),u=e.memoizedState),(r=Be||hc(e,a,r,i,p,u,o))?(b||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),l.props=i,l.state=u,l.context=o,i=r):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,ws(t,e),o=e.memoizedProps,b=ya(a,o),l.props=b,h=e.pendingProps,p=l.context,u=a.contextType,r=qa,typeof u=="object"&&u!==null&&(r=dt(u)),s=a.getDerivedStateFromProps,(u=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==h||p!==r)&&gc(e,l,i,r),Be=!1,p=e.memoizedState,l.state=p,Gi(e,i,l,n),ji();var f=e.memoizedState;o!==h||p!==f||Be||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof s=="function"&&(Lo(e,a,s,i),f=e.memoizedState),(b=Be||hc(e,a,b,i,p,f,r)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(u||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,f,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,f,r)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=f),l.props=i,l.state=f,l.context=r,i=b):(typeof l.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return l=i,Pn(t,e),i=(e.flags&128)!==0,l||i?(l=e.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&i?(e.child=ma(e,t.child,null,n),e.child=ma(e,null,a,n)):ft(t,e,a,n),e.memoizedState=l.state,t=e.child):t=Te(t,e,n),t}function Sc(t,e,a,i){return ga(),e.flags|=256,ft(t,e,a,i),e.child}var Ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uo(t){return{baseLanes:t,cachePool:Qu()}}function jo(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=_t),t}function jd(t,e,a){var i=e.pendingProps,n=!1,l=(e.flags&128)!==0,o;if((o=l)||(o=t!==null&&t.memoizedState===null?!1:($.current&2)!==0),o&&(n=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(B){if(n?Ne(e):De(e),(t=X)?(t=_p(t,Zt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ie!==null?{id:Pt,overflow:te}:null,retryLane:536870912,hydrationErrors:null},a=Yu(t),a.return=e,e.child=a,ut=e,X=null)):t=null,t===null)throw $e(e);return Vs(t)?e.lanes=32:e.lanes=536870912,null}var s=i.children;return i=i.fallback,n?(De(e),n=e.mode,s=vl({mode:"hidden",children:s},n),i=ua(i,n,a,null),s.return=e,i.return=e,s.sibling=i,e.child=s,i=e.child,i.memoizedState=Uo(a),i.childLanes=jo(t,o,a),e.memoizedState=Ho,Bi(null,i)):(Ne(e),Os(e,s))}var r=t.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(l)e.flags&256?(Ne(e),e.flags&=-257,e=Go(t,e,a)):e.memoizedState!==null?(De(e),e.child=t.child,e.flags|=128,e=null):(De(e),s=i.fallback,n=e.mode,i=vl({mode:"visible",children:i.children},n),s=ua(s,n,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,ma(e,t.child,null,a),i=e.child,i.memoizedState=Uo(a),i.childLanes=jo(t,o,a),e.memoizedState=Ho,e=Bi(null,i));else if(Ne(e),Vs(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var u=o.dgst;o=u,i=Error(x(419)),i.stack="",i.digest=o,$i({value:i,source:null,stack:null}),e=Go(t,e,a)}else if(it||di(t,e,a,!1),o=(a&t.childLanes)!==0,it||o){if(o=K,o!==null&&(i=gu(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Sa(t,i),Tt(o,t,i),Er;Ys(s)||Tl(),e=Go(t,e,a)}else Ys(s)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,X=Qt(s.nextSibling),ut=e,B=!0,Ye=null,Zt=!1,t!==null&&Zu(e,t),e=Os(e,i.children),e.flags|=4096);return e}return n?(De(e),s=i.fallback,n=e.mode,r=t.child,u=r.sibling,i=xe(r,{mode:"hidden",children:i.children}),i.subtreeFlags=r.subtreeFlags&65011712,u!==null?s=xe(u,s):(s=ua(s,n,a,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,Bi(null,i),i=e.child,s=t.child.memoizedState,s===null?s=Uo(a):(n=s.cachePool,n!==null?(r=at._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=Qu(),s={baseLanes:s.baseLanes|a,cachePool:n}),i.memoizedState=s,i.childLanes=jo(t,o,a),e.memoizedState=Ho,Bi(t.child,i)):(Ne(e),a=t.child,t=a.sibling,a=xe(a,{mode:"visible",children:i.children}),a.return=e,a.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=a,e.memoizedState=null,a)}function Os(t,e){return e=vl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function vl(t,e){return t=Et(22,t,null,e),t.lanes=0,t}function Go(t,e,a){return ma(e,t.child,null,a),t=Os(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tc(t,e,a){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xs(t.return,e,a)}function Ko(t,e,a,i,n,l){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:l}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=n,o.treeForkCount=l)}function Gd(t,e,a){var i=e.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var o=$.current,s=(o&2)!==0;if(s?(o=o&1|2,e.flags|=128):o&=1,Y($,o),ft(t,e,i,a),i=B?Ii:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tc(t,a,e);else if(t.tag===19)Tc(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&bl(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),Ko(e,!1,n,a,l,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&bl(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Ko(e,!0,a,null,l,i);break;case"together":Ko(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Te(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ta|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(di(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,a=xe(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=xe(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function _r(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function vh(t,e,a){switch(e.tag){case 3:ol(e,e.stateNode.containerInfo),Re(e,at,t.memoizedState.cache),ga();break;case 27:case 5:ls(e);break;case 4:ol(e,e.stateNode.containerInfo);break;case 10:Re(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ts(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Ne(e),e.flags|=128,null):(a&e.child.childLanes)!==0?jd(t,e,a):(Ne(e),t=Te(t,e,a),t!==null?t.sibling:null);Ne(e);break;case 19:var n=(t.flags&128)!==0;if(i=(a&e.childLanes)!==0,i||(di(t,e,a,!1),i=(a&e.childLanes)!==0),n){if(i)return Gd(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Y($,$.current),i)break;return null;case 22:return e.lanes=0,Ud(t,e,a,e.pendingProps);case 24:Re(e,at,t.memoizedState.cache)}return Te(t,e,a)}function Kd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)it=!0;else{if(!_r(t,a)&&(e.flags&128)===0)return it=!1,vh(t,e,a);it=(t.flags&131072)!==0}else it=!1,B&&(e.flags&1048576)!==0&&Vu(e,Ii,e.index);switch(e.lanes=0,e.tag){case 16:t:{var i=e.pendingProps;if(t=ra(e.elementType),e.type=t,typeof t=="function")rr(t)?(i=ya(t,i),e.tag=1,e=kc(null,e,t,i,a)):(e.tag=0,e=_s(null,e,t,i,a));else{if(t!=null){var n=t.$$typeof;if(n===Js){e.tag=11,e=mc(null,e,t,i,a);break t}else if(n===Fs){e.tag=14,e=xc(null,e,t,i,a);break t}}throw e=is(t)||t,Error(x(306,e,""))}}return e;case 0:return _s(t,e,e.type,e.pendingProps,a);case 1:return i=e.type,n=ya(i,e.pendingProps),kc(t,e,i,n,a);case 3:t:{if(ol(e,e.stateNode.containerInfo),t===null)throw Error(x(387));i=e.pendingProps;var l=e.memoizedState;n=l.element,ws(t,e),Gi(e,i,null,a);var o=e.memoizedState;if(i=o.cache,Re(e,at,i),i!==l.cache&&ys(e,[at],a,!0),ji(),i=o.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Sc(t,e,i,a);break t}else if(i!==n){n=Vt(Error(x(424)),e),$i(n),e=Sc(t,e,i,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,X=Qt(t.firstChild),ut=e,B=!0,Ye=null,Zt=!0,a=Wu(e,null,i,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ga(),i===n){e=Te(t,e,a);break t}ft(t,e,i,a)}e=e.child}return e;case 26:return Pn(t,e),t===null?(a=Xc(e.type,null,e.pendingProps,null))?e.memoizedState=a:B||(a=e.type,t=e.pendingProps,i=Al(qe.current).createElement(a),i[ct]=e,i[zt]=t,pt(i,a,t),st(i),e.stateNode=i):e.memoizedState=Xc(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ls(e),t===null&&B&&(i=e.stateNode=Op(e.type,e.pendingProps,qe.current),ut=e,Zt=!0,n=X,aa(e.type)?(Zs=n,X=Qt(i.firstChild)):X=n),ft(t,e,e.pendingProps.children,a),Pn(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&B&&((n=i=X)&&(i=Jh(i,e.type,e.pendingProps,Zt),i!==null?(e.stateNode=i,ut=e,X=Qt(i.firstChild),Zt=!1,n=!0):n=!1),n||$e(e)),ls(e),n=e.type,l=e.pendingProps,o=t!==null?t.memoizedProps:null,i=l.children,Ks(n,l)?i=null:o!==null&&Ks(n,o)&&(e.flags|=32),e.memoizedState!==null&&(n=mr(t,e,uh,null,null,a),ln._currentValue=n),Pn(t,e),ft(t,e,i,a),e.child;case 6:return t===null&&B&&((t=a=X)&&(a=Fh(a,e.pendingProps,Zt),a!==null?(e.stateNode=a,ut=e,X=null,t=!0):t=!1),t||$e(e)),null;case 13:return jd(t,e,a);case 4:return ol(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ma(e,null,i,a):ft(t,e,i,a),e.child;case 11:return mc(t,e,e.type,e.pendingProps,a);case 7:return ft(t,e,e.pendingProps,a),e.child;case 8:return ft(t,e,e.pendingProps.children,a),e.child;case 12:return ft(t,e,e.pendingProps.children,a),e.child;case 10:return i=e.pendingProps,Re(e,e.type,i.value),ft(t,e,i.children,a),e.child;case 9:return n=e.type._context,i=e.pendingProps.children,ba(e),n=dt(n),i=i(n),e.flags|=1,ft(t,e,i,a),e.child;case 14:return xc(t,e,e.type,e.pendingProps,a);case 15:return Hd(t,e,e.type,e.pendingProps,a);case 19:return Gd(t,e,a);case 31:return yh(t,e,a);case 22:return Ud(t,e,a,e.pendingProps);case 24:return ba(e),i=dt(at),t===null?(n=dr(),n===null&&(n=K,l=ur(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),e.memoizedState={parent:i,cache:n},hr(e),Re(e,at,n)):((t.lanes&a)!==0&&(ws(t,e),Gi(e,null,null,a),ji()),n=t.memoizedState,l=e.memoizedState,n.parent!==i?(n={parent:i,cache:i},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),Re(e,at,i)):(i=l.cache,Re(e,at,i),i!==n.cache&&ys(e,[at],a,!0))),ft(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(x(156,e.tag))}function fe(t){t.flags|=4}function qo(t,e,a,i,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(up())t.flags|=8192;else throw pa=hl,pr}else t.flags&=-16777217}function zc(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Np(e))if(up())t.flags|=8192;else throw pa=hl,pr}function Hn(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?du():536870912,t.lanes|=e,li|=e)}function zi(t,e){if(!B)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Z(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,i=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=a,e}function wh(t,e,a){var i=e.pendingProps;switch(cr(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Z(e),null;case 1:return Z(e),null;case 3:return a=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ye(at),Pa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(_a(e)?fe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ro())),Z(e),null;case 26:var n=e.type,l=e.memoizedState;return t===null?(fe(e),l!==null?(Z(e),zc(e,l)):(Z(e),qo(e,n,null,i,a))):l?l!==t.memoizedState?(fe(e),Z(e),zc(e,l)):(Z(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&fe(e),Z(e),qo(e,n,t,i,a)),null;case 27:if(sl(e),a=qe.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&fe(e);else{if(!i){if(e.stateNode===null)throw Error(x(166));return Z(e),null}t=ae.current,_a(e)?tc(e,t):(t=Op(n,i,a),e.stateNode=t,fe(e))}return Z(e),null;case 5:if(sl(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&fe(e);else{if(!i){if(e.stateNode===null)throw Error(x(166));return Z(e),null}if(l=ae.current,_a(e))tc(e,l);else{var o=Al(qe.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}l[ct]=e,l[zt]=i;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=l;t:switch(pt(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&fe(e)}}return Z(e),qo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&fe(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(x(166));if(t=qe.current,_a(e)){if(t=e.stateNode,a=e.memoizedProps,i=null,n=ut,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}t[ct]=e,t=!!(t.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Cp(t.nodeValue,a)),t||$e(e,!0)}else t=Al(t).createTextNode(i),t[ct]=e,e.stateNode=t}return Z(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(i=_a(e),a!==null){if(t===null){if(!i)throw Error(x(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(557));t[ct]=e}else ga(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Z(e),t=!1}else a=Ro(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(At(e),e):(At(e),null);if((e.flags&128)!==0)throw Error(x(558))}return Z(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=_a(e),i!==null&&i.dehydrated!==null){if(t===null){if(!n)throw Error(x(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(x(317));n[ct]=e}else ga(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Z(e),n=!1}else n=Ro(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(At(e),e):(At(e),null)}return At(e),(e.flags&128)!==0?(e.lanes=a,e):(a=i!==null,t=t!==null&&t.memoizedState!==null,a&&(i=e.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Hn(e,e.updateQueue),Z(e),null);case 4:return Pa(),t===null&&Hr(e.stateNode.containerInfo),Z(e),null;case 10:return ye(e.type),Z(e),null;case 19:if(rt($),i=e.memoizedState,i===null)return Z(e),null;if(n=(e.flags&128)!==0,l=i.rendering,l===null)if(n)zi(i,!1);else{if(I!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=bl(t),l!==null){for(e.flags|=128,zi(i,!1),t=l.updateQueue,e.updateQueue=t,Hn(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)qu(a,t),a=a.sibling;return Y($,$.current&1|2),B&&pe(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Ot()>kl&&(e.flags|=128,n=!0,zi(i,!1),e.lanes=4194304)}else{if(!n)if(t=bl(l),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,Hn(e,t),zi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!B)return Z(e),null}else 2*Ot()-i.renderingStartTime>kl&&a!==536870912&&(e.flags|=128,n=!0,zi(i,!1),e.lanes=4194304);i.isBackwards?(l.sibling=e.child,e.child=l):(t=i.last,t!==null?t.sibling=l:e.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ot(),t.sibling=null,a=$.current,Y($,n?a&1|2:a&1),B&&pe(e,i.treeForkCount),t):(Z(e),null);case 22:case 23:return At(e),gr(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(a&536870912)!==0&&(e.flags&128)===0&&(Z(e),e.subtreeFlags&6&&(e.flags|=8192)):Z(e),a=e.updateQueue,a!==null&&Hn(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048),t!==null&&rt(da),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ye(at),Z(e),null;case 25:return null;case 30:return null}throw Error(x(156,e.tag))}function kh(t,e){switch(cr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ye(at),Pa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return sl(e),null;case 31:if(e.memoizedState!==null){if(At(e),e.alternate===null)throw Error(x(340));ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(At(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));ga()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt($),null;case 4:return Pa(),null;case 10:return ye(e.type),null;case 22:case 23:return At(e),gr(),t!==null&&rt(da),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ye(at),null;case 25:return null;default:return null}}function qd(t,e){switch(cr(e),e.tag){case 3:ye(at),Pa();break;case 26:case 27:case 5:sl(e);break;case 4:Pa();break;case 31:e.memoizedState!==null&&At(e);break;case 13:At(e);break;case 19:rt($);break;case 10:ye(e.type);break;case 22:case 23:At(e),gr(),t!==null&&rt(da);break;case 24:ye(at)}}function bn(t,e){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){i=void 0;var l=a.create,o=a.inst;i=l(),o.destroy=i}a=a.next}while(a!==n)}}catch(s){U(e,e.return,s)}}function Pe(t,e,a){try{var i=e.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&t)===t){var o=i.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=e;var r=a,u=s;try{u()}catch(b){U(n,r,b)}}}i=i.next}while(i!==l)}}catch(b){U(e,e.return,b)}}function Yd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{$u(e,a)}catch(i){U(t,t.return,i)}}}function Vd(t,e,a){a.props=ya(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(i){U(t,e,i)}}function qi(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof a=="function"?t.refCleanup=a(i):a.current=i}}catch(n){U(t,e,n)}}function ee(t,e){var a=t.ref,i=t.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){U(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){U(t,e,n)}else a.current=null}function Zd(t){var e=t.type,a=t.memoizedProps,i=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break t;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){U(t,t.return,n)}}function Yo(t,e,a){try{var i=t.stateNode;qh(i,t.type,a,e),i[zt]=e}catch(n){U(t,t.return,n)}}function Xd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&aa(t.type)||t.tag===4}function Vo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bs(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=be));else if(i!==4&&(i===27&&aa(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Bs(t,e,a),t=t.sibling;t!==null;)Bs(t,e,a),t=t.sibling}function wl(t,e,a){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(i!==4&&(i===27&&aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(wl(t,e,a),t=t.sibling;t!==null;)wl(t,e,a),t=t.sibling}function Qd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var i=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);pt(e,i,a),e[ct]=t,e[zt]=a}catch(l){U(t,t.return,l)}}var he=!1,et=!1,Zo=!1,Mc=typeof WeakSet=="function"?WeakSet:Set,ot=null;function Sh(t,e){if(t=t.containerInfo,js=Bl,t=Nu(t),lr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break t}var o=0,s=-1,r=-1,u=0,b=0,h=t,p=null;e:for(;;){for(var f;h!==a||n!==0&&h.nodeType!==3||(s=o+n),h!==l||i!==0&&h.nodeType!==3||(r=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)p=h,h=f;for(;;){if(h===t)break e;if(p===a&&++u===n&&(s=o),p===l&&++b===i&&(r=o),(f=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=f}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gs={focusedElem:t,selectionRange:a},Bl=!1,ot=e;ot!==null;)if(e=ot,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ot=t;else for(;ot!==null;){switch(e=ot,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,a=e,n=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var y=ya(a.type,n);t=i.getSnapshotBeforeUpdate(y,l),i.__reactInternalSnapshotBeforeUpdate=t}catch(v){U(a,a.return,v)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)qs(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qs(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(x(163))}if(t=e.sibling,t!==null){t.return=e.return,ot=t;break}ot=e.return}}function Jd(t,e,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ue(t,a),i&4&&bn(5,a);break;case 1:if(ue(t,a),i&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(o){U(a,a.return,o)}else{var n=ya(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){U(a,a.return,o)}}i&64&&Yd(a),i&512&&qi(a,a.return);break;case 3:if(ue(t,a),i&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{$u(t,e)}catch(o){U(a,a.return,o)}}break;case 27:e===null&&i&4&&Qd(a);case 26:case 5:ue(t,a),e===null&&i&4&&Zd(a),i&512&&qi(a,a.return);break;case 12:ue(t,a);break;case 31:ue(t,a),i&4&&Id(t,a);break;case 13:ue(t,a),i&4&&$d(t,a),i&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Bh.bind(null,a),Wh(t,a))));break;case 22:if(i=a.memoizedState!==null||he,!i){e=e!==null&&e.memoizedState!==null||et,n=he;var l=et;he=i,(et=e)&&!l?de(t,a,(a.subtreeFlags&8772)!==0):ue(t,a),he=n,et=l}break;case 30:break;default:ue(t,a)}}function Fd(t){var e=t.alternate;e!==null&&(t.alternate=null,Fd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ps(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var F=null,kt=!1;function ce(t,e,a){for(a=a.child;a!==null;)Wd(t,e,a),a=a.sibling}function Wd(t,e,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(fn,a)}catch{}switch(a.tag){case 26:et||ee(a,e),ce(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:et||ee(a,e);var i=F,n=kt;aa(a.type)&&(F=a.stateNode,kt=!1),ce(t,e,a),Xi(a.stateNode),F=i,kt=n;break;case 5:et||ee(a,e);case 6:if(i=F,n=kt,F=null,ce(t,e,a),F=i,kt=n,F!==null)if(kt)try{(F.nodeType===9?F.body:F.nodeName==="HTML"?F.ownerDocument.body:F).removeChild(a.stateNode)}catch(l){U(a,e,l)}else try{F.removeChild(a.stateNode)}catch(l){U(a,e,l)}break;case 18:F!==null&&(kt?(t=F,Kc(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fi(t)):Kc(F,a.stateNode));break;case 4:i=F,n=kt,F=a.stateNode.containerInfo,kt=!0,ce(t,e,a),F=i,kt=n;break;case 0:case 11:case 14:case 15:Pe(2,a,e),et||Pe(4,a,e),ce(t,e,a);break;case 1:et||(ee(a,e),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Vd(a,e,i)),ce(t,e,a);break;case 21:ce(t,e,a);break;case 22:et=(i=et)||a.memoizedState!==null,ce(t,e,a),et=i;break;default:ce(t,e,a)}}function Id(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fi(t)}catch(a){U(e,e.return,a)}}}function $d(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fi(t)}catch(a){U(e,e.return,a)}}function Th(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Mc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Mc),e;default:throw Error(x(435,t.tag))}}function Un(t,e){var a=Th(t);e.forEach(function(i){if(!a.has(i)){a.add(i);var n=Rh.bind(null,t,i);i.then(n,n)}})}function vt(t,e){var a=e.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],l=t,o=e,s=o;t:for(;s!==null;){switch(s.tag){case 27:if(aa(s.type)){F=s.stateNode,kt=!1;break t}break;case 5:F=s.stateNode,kt=!1;break t;case 3:case 4:F=s.stateNode.containerInfo,kt=!0;break t}s=s.return}if(F===null)throw Error(x(160));Wd(l,o,n),F=null,kt=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Pd(e,t),e=e.sibling}var Wt=null;function Pd(t,e){var a=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:vt(e,t),wt(t),i&4&&(Pe(3,t,t.return),bn(3,t),Pe(5,t,t.return));break;case 1:vt(e,t),wt(t),i&512&&(et||a===null||ee(a,a.return)),i&64&&he&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=Wt;if(vt(e,t),wt(t),i&512&&(et||a===null||ee(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=t.memoizedState,a===null)if(i===null)if(t.stateNode===null){t:{i=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[dn]||l[ct]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),pt(l,i,a),l[ct]=t,st(l),i=l;break t;case"link":var o=Jc("link","href",n).get(i+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(l=o[s],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break e}}l=n.createElement(i),pt(l,i,a),n.head.appendChild(l);break;case"meta":if(o=Jc("meta","content",n).get(i+(a.content||""))){for(s=0;s<o.length;s++)if(l=o[s],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break e}}l=n.createElement(i),pt(l,i,a),n.head.appendChild(l);break;default:throw Error(x(468,i))}l[ct]=t,st(l),i=l}t.stateNode=i}else Fc(n,t.type,t.stateNode);else t.stateNode=Qc(n,i,t.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?Fc(n,t.type,t.stateNode):Qc(n,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Yo(t,t.memoizedProps,a.memoizedProps)}break;case 27:vt(e,t),wt(t),i&512&&(et||a===null||ee(a,a.return)),a!==null&&i&4&&Yo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(vt(e,t),wt(t),i&512&&(et||a===null||ee(a,a.return)),t.flags&32){n=t.stateNode;try{ei(n,"")}catch(y){U(t,t.return,y)}}i&4&&t.stateNode!=null&&(n=t.memoizedProps,Yo(t,n,a!==null?a.memoizedProps:n)),i&1024&&(Zo=!0);break;case 6:if(vt(e,t),wt(t),i&4){if(t.stateNode===null)throw Error(x(162));i=t.memoizedProps,a=t.stateNode;try{a.nodeValue=i}catch(y){U(t,t.return,y)}}break;case 3:if(al=null,n=Wt,Wt=El(e.containerInfo),vt(e,t),Wt=n,wt(t),i&4&&a!==null&&a.memoizedState.isDehydrated)try{fi(e.containerInfo)}catch(y){U(t,t.return,y)}Zo&&(Zo=!1,tp(t));break;case 4:i=Wt,Wt=El(t.stateNode.containerInfo),vt(e,t),wt(t),Wt=i;break;case 12:vt(e,t),wt(t);break;case 31:vt(e,t),wt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Un(t,i)));break;case 13:vt(e,t),wt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=Ot()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Un(t,i)));break;case 22:n=t.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,u=he,b=et;if(he=u||n,et=b||r,vt(e,t),et=b,he=u,wt(t),i&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||r||he||et||fa(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(l=r.stateNode,n)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=r.stateNode;var h=r.memoizedProps.style,p=h!=null&&h.hasOwnProperty("display")?h.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){U(r,r.return,y)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(y){U(r,r.return,y)}}}else if(e.tag===18){if(a===null){r=e;try{var f=r.stateNode;n?qc(f,!0):qc(r.stateNode,!1)}catch(y){U(r,r.return,y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Un(t,a))));break;case 19:vt(e,t),wt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,Un(t,i)));break;case 30:break;case 21:break;default:vt(e,t),wt(t)}}function wt(t){var e=t.flags;if(e&2){try{for(var a,i=t.return;i!==null;){if(Xd(i)){a=i;break}i=i.return}if(a==null)throw Error(x(160));switch(a.tag){case 27:var n=a.stateNode,l=Vo(t);wl(t,l,n);break;case 5:var o=a.stateNode;a.flags&32&&(ei(o,""),a.flags&=-33);var s=Vo(t);wl(t,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,u=Vo(t);Bs(t,u,r);break;default:throw Error(x(161))}}catch(b){U(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;tp(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ue(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Jd(t,e.alternate,e),e=e.sibling}function fa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pe(4,e,e.return),fa(e);break;case 1:ee(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Vd(e,e.return,a),fa(e);break;case 27:Xi(e.stateNode);case 26:case 5:ee(e,e.return),fa(e);break;case 22:e.memoizedState===null&&fa(e);break;case 30:fa(e);break;default:fa(e)}t=t.sibling}}function de(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,n=t,l=e,o=l.flags;switch(l.tag){case 0:case 11:case 15:de(n,l,a),bn(4,l);break;case 1:if(de(n,l,a),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){U(i,i.return,u)}if(i=l,n=i.updateQueue,n!==null){var s=i.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Iu(r[n],s)}catch(u){U(i,i.return,u)}}a&&o&64&&Yd(l),qi(l,l.return);break;case 27:Qd(l);case 26:case 5:de(n,l,a),a&&i===null&&o&4&&Zd(l),qi(l,l.return);break;case 12:de(n,l,a);break;case 31:de(n,l,a),a&&o&4&&Id(n,l);break;case 13:de(n,l,a),a&&o&4&&$d(n,l);break;case 22:l.memoizedState===null&&de(n,l,a),qi(l,l.return);break;case 30:break;default:de(n,l,a)}e=e.sibling}}function Or(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&hn(a))}function Br(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&hn(t))}function Ft(t,e,a,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ep(t,e,a,i),e=e.sibling}function ep(t,e,a,i){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ft(t,e,a,i),n&2048&&bn(9,e);break;case 1:Ft(t,e,a,i);break;case 3:Ft(t,e,a,i),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&hn(t)));break;case 12:if(n&2048){Ft(t,e,a,i),t=e.stateNode;try{var l=e.memoizedProps,o=l.id,s=l.onPostCommit;typeof s=="function"&&s(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){U(e,e.return,r)}}else Ft(t,e,a,i);break;case 31:Ft(t,e,a,i);break;case 13:Ft(t,e,a,i);break;case 23:break;case 22:l=e.stateNode,o=e.alternate,e.memoizedState!==null?l._visibility&2?Ft(t,e,a,i):Yi(t,e):l._visibility&2?Ft(t,e,a,i):(l._visibility|=2,Ba(t,e,a,i,(e.subtreeFlags&10256)!==0||!1)),n&2048&&Or(o,e);break;case 24:Ft(t,e,a,i),n&2048&&Br(e.alternate,e);break;default:Ft(t,e,a,i)}}function Ba(t,e,a,i,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,o=e,s=a,r=i,u=o.flags;switch(o.tag){case 0:case 11:case 15:Ba(l,o,s,r,n),bn(8,o);break;case 23:break;case 22:var b=o.stateNode;o.memoizedState!==null?b._visibility&2?Ba(l,o,s,r,n):Yi(l,o):(b._visibility|=2,Ba(l,o,s,r,n)),n&&u&2048&&Or(o.alternate,o);break;case 24:Ba(l,o,s,r,n),n&&u&2048&&Br(o.alternate,o);break;default:Ba(l,o,s,r,n)}e=e.sibling}}function Yi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,i=e,n=i.flags;switch(i.tag){case 22:Yi(a,i),n&2048&&Or(i.alternate,i);break;case 24:Yi(a,i),n&2048&&Br(i.alternate,i);break;default:Yi(a,i)}e=e.sibling}}var Ri=8192;function Oa(t,e,a){if(t.subtreeFlags&Ri)for(t=t.child;t!==null;)ap(t,e,a),t=t.sibling}function ap(t,e,a){switch(t.tag){case 26:Oa(t,e,a),t.flags&Ri&&t.memoizedState!==null&&rg(a,Wt,t.memoizedState,t.memoizedProps);break;case 5:Oa(t,e,a);break;case 3:case 4:var i=Wt;Wt=El(t.stateNode.containerInfo),Oa(t,e,a),Wt=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Ri,Ri=16777216,Oa(t,e,a),Ri=i):Oa(t,e,a));break;default:Oa(t,e,a)}}function ip(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Mi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];ot=i,lp(i,t)}ip(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)np(t),t=t.sibling}function np(t){switch(t.tag){case 0:case 11:case 15:Mi(t),t.flags&2048&&Pe(9,t,t.return);break;case 3:Mi(t);break;case 12:Mi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,tl(t)):Mi(t);break;default:Mi(t)}}function tl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var i=e[a];ot=i,lp(i,t)}ip(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pe(8,e,e.return),tl(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,tl(e));break;default:tl(e)}t=t.sibling}}function lp(t,e){for(;ot!==null;){var a=ot;switch(a.tag){case 0:case 11:case 15:Pe(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:hn(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ot=i;else t:for(a=t;ot!==null;){i=ot;var n=i.sibling,l=i.return;if(Fd(i),i===a){ot=null;break t}if(n!==null){n.return=l,ot=n;break t}ot=l}}}var zh={getCacheForType:function(t){var e=dt(at),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return dt(at).controller.signal}},Mh=typeof WeakMap=="function"?WeakMap:Map,D=0,K=null,A=null,O=0,H=0,Ct=null,je=!1,hi=!1,Rr=!1,ze=0,I=0,ta=0,ha=0,Nr=0,_t=0,li=0,Vi=null,St=null,Rs=!1,Zl=0,op=0,kl=1/0,Sl=null,Xe=null,nt=0,Qe=null,oi=null,ve=0,Ns=0,Ds=null,sp=null,Zi=0,Ls=null;function Nt(){return(D&2)!==0&&O!==0?O&-O:S.T!==null?Lr():bu()}function rp(){if(_t===0)if((O&536870912)===0||B){var t=An;An<<=1,(An&3932160)===0&&(An=262144),_t=t}else _t=536870912;return t=Lt.current,t!==null&&(t.flags|=32),_t}function Tt(t,e,a){(t===K&&(H===2||H===9)||t.cancelPendingCommit!==null)&&(si(t,0),Ge(t,O,_t,!1)),un(t,a),((D&2)===0||t!==K)&&(t===K&&((D&2)===0&&(ha|=a),I===4&&Ge(t,O,_t,!1)),ne(t))}function fp(t,e,a){if((D&6)!==0)throw Error(x(327));var i=!a&&(e&127)===0&&(e&t.expiredLanes)===0||cn(t,e),n=i?Eh(t,e):Xo(t,e,!0),l=i;do{if(n===0){hi&&!i&&Ge(t,e,0,!1);break}else{if(a=t.current.alternate,l&&!Ch(a)){n=Xo(t,e,!1),l=!1;continue}if(n===2){if(l=e,t.errorRecoveryDisabledLanes&l)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var s=t;n=Vi;var r=s.current.memoizedState.isDehydrated;if(r&&(si(s,o).flags|=256),o=Xo(s,o,!1),o!==2){if(Rr&&!r){s.errorRecoveryDisabledLanes|=l,ha|=l,n=4;break t}l=St,St=n,l!==null&&(St===null?St=l:St.push.apply(St,l))}n=o}if(l=!1,n!==2)continue}}if(n===1){si(t,0),Ge(t,e,0,!0);break}t:{switch(i=t,l=n,l){case 0:case 1:throw Error(x(345));case 4:if((e&4194048)!==e)break;case 6:Ge(i,e,_t,!je);break t;case 2:St=null;break;case 3:case 5:break;default:throw Error(x(329))}if((e&62914560)===e&&(n=Zl+300-Ot(),10<n)){if(Ge(i,e,_t,!je),Nl(i,0,!0)!==0)break t;ve=e,i.timeoutHandle=Ep(Cc.bind(null,i,a,St,Sl,Rs,e,_t,ha,li,je,l,"Throttled",-0,0),n);break t}Cc(i,a,St,Sl,Rs,e,_t,ha,li,je,l,null,-0,0)}}break}while(!0);ne(t)}function Cc(t,e,a,i,n,l,o,s,r,u,b,h,p,f){if(t.timeoutHandle=-1,h=e.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:be},ap(e,l,h);var y=(l&62914560)===l?Zl-Ot():(l&4194048)===l?op-Ot():0;if(y=fg(h,y),y!==null){ve=l,t.cancelPendingCommit=y(Ec.bind(null,t,e,l,a,i,n,o,s,r,b,h,null,p,f)),Ge(t,l,o,!u);return}}Ec(t,e,l,a,i,n,o,s,r)}function Ch(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],l=n.getSnapshot;n=n.value;try{if(!Dt(l(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ge(t,e,a,i){e&=~Nr,e&=~ha,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var n=e;0<n;){var l=31-Rt(n),o=1<<l;i[l]=-1,n&=~o}a!==0&&pu(t,a,e)}function Xl(){return(D&6)===0?(mn(0,!1),!1):!0}function Dr(){if(A!==null){if(H===0)var t=A.return;else t=A,me=Ta=null,vr(t),Wa=null,Pi=0,t=A;for(;t!==null;)qd(t.alternate,t),t=t.return;A=null}}function si(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zh(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ve=0,Dr(),K=t,A=a=xe(t.current,null),O=e,H=0,Ct=null,je=!1,hi=cn(t,e),Rr=!1,li=_t=Nr=ha=ta=I=0,St=Vi=null,Rs=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var n=31-Rt(i),l=1<<n;e|=t[n],i&=~l}return ze=e,Ul(),a}function cp(t,e){z=null,S.H=en,e===pi||e===Gl?(e=lc(),H=3):e===pr?(e=lc(),H=4):H=e===Er?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ct=e,A===null&&(I=1,yl(t,Vt(e,t.current)))}function up(){var t=Lt.current;return t===null?!0:(O&4194048)===O?Xt===null:(O&62914560)===O||(O&536870912)!==0?t===Xt:!1}function dp(){var t=S.H;return S.H=en,t===null?en:t}function pp(){var t=S.A;return S.A=zh,t}function Tl(){I=4,je||(O&4194048)!==O&&Lt.current!==null||(hi=!0),(ta&134217727)===0&&(ha&134217727)===0||K===null||Ge(K,O,_t,!1)}function Xo(t,e,a){var i=D;D|=2;var n=dp(),l=pp();(K!==t||O!==e)&&(Sl=null,si(t,e)),e=!1;var o=I;t:do try{if(H!==0&&A!==null){var s=A,r=Ct;switch(H){case 8:Dr(),o=6;break t;case 3:case 2:case 9:case 6:Lt.current===null&&(e=!0);var u=H;if(H=0,Ct=null,Za(t,s,r,u),a&&hi){o=0;break t}break;default:u=H,H=0,Ct=null,Za(t,s,r,u)}}Ah(),o=I;break}catch(b){cp(t,b)}while(!0);return e&&t.shellSuspendCounter++,me=Ta=null,D=i,S.H=n,S.A=l,A===null&&(K=null,O=0,Ul()),o}function Ah(){for(;A!==null;)hp(A)}function Eh(t,e){var a=D;D|=2;var i=dp(),n=pp();K!==t||O!==e?(Sl=null,kl=Ot()+500,si(t,e)):hi=cn(t,e);t:do try{if(H!==0&&A!==null){e=A;var l=Ct;e:switch(H){case 1:H=0,Ct=null,Za(t,e,l,1);break;case 2:case 9:if(nc(l)){H=0,Ct=null,Ac(e);break}e=function(){H!==2&&H!==9||K!==t||(H=7),ne(t)},l.then(e,e);break t;case 3:H=7;break t;case 4:H=5;break t;case 7:nc(l)?(H=0,Ct=null,Ac(e)):(H=0,Ct=null,Za(t,e,l,7));break;case 5:var o=null;switch(A.tag){case 26:o=A.memoizedState;case 5:case 27:var s=A;if(o?Np(o):s.stateNode.complete){H=0,Ct=null;var r=s.sibling;if(r!==null)A=r;else{var u=s.return;u!==null?(A=u,Ql(u)):A=null}break e}}H=0,Ct=null,Za(t,e,l,5);break;case 6:H=0,Ct=null,Za(t,e,l,6);break;case 8:Dr(),I=6;break t;default:throw Error(x(462))}}_h();break}catch(b){cp(t,b)}while(!0);return me=Ta=null,S.H=i,S.A=n,D=a,A!==null?0:(K=null,O=0,Ul(),I)}function _h(){for(;A!==null&&!P0();)hp(A)}function hp(t){var e=Kd(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?Ql(t):A=e}function Ac(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=wc(a,e,e.pendingProps,e.type,void 0,O);break;case 11:e=wc(a,e,e.pendingProps,e.type.render,e.ref,O);break;case 5:vr(e);default:qd(a,e),e=A=qu(e,ze),e=Kd(a,e,ze)}t.memoizedProps=t.pendingProps,e===null?Ql(t):A=e}function Za(t,e,a,i){me=Ta=null,vr(e),Wa=null,Pi=0;var n=e.return;try{if(xh(t,n,e,a,O)){I=1,yl(t,Vt(a,t.current)),A=null;return}}catch(l){if(n!==null)throw A=n,l;I=1,yl(t,Vt(a,t.current)),A=null;return}e.flags&32768?(B||i===1?t=!0:hi||(O&536870912)!==0?t=!1:(je=t=!0,(i===2||i===9||i===3||i===6)&&(i=Lt.current,i!==null&&i.tag===13&&(i.flags|=16384))),gp(e,t)):Ql(e)}function Ql(t){var e=t;do{if((e.flags&32768)!==0){gp(e,je);return}t=e.return;var a=wh(e.alternate,e,ze);if(a!==null){A=a;return}if(e=e.sibling,e!==null){A=e;return}A=e=t}while(e!==null);I===0&&(I=5)}function gp(t,e){do{var a=kh(t.alternate,t);if(a!==null){a.flags&=32767,A=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){A=t;return}A=t=a}while(t!==null);I=6,A=null}function Ec(t,e,a,i,n,l,o,s,r){t.cancelPendingCommit=null;do Jl();while(nt!==0);if((D&6)!==0)throw Error(x(327));if(e!==null){if(e===t.current)throw Error(x(177));if(l=e.lanes|e.childLanes,l|=or,f1(t,a,l,o,s,r),t===K&&(A=K=null,O=0),oi=e,Qe=t,ve=a,Ns=l,Ds=n,sp=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Nh(rl,function(){return vp(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=S.T,S.T=null,n=L.p,L.p=2,o=D,D|=4;try{Sh(t,e,a)}finally{D=o,L.p=n,S.T=i}}nt=1,bp(),mp(),xp()}}function bp(){if(nt===1){nt=0;var t=Qe,e=oi,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var i=L.p;L.p=2;var n=D;D|=4;try{Pd(e,t);var l=Gs,o=Nu(t.containerInfo),s=l.focusedElem,r=l.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ru(s.ownerDocument.documentElement,s)){if(r!==null&&lr(s)){var u=r.start,b=r.end;if(b===void 0&&(b=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(b,s.value.length);else{var h=s.ownerDocument||document,p=h&&h.defaultView||window;if(p.getSelection){var f=p.getSelection(),y=s.textContent.length,v=Math.min(r.start,y),E=r.end===void 0?v:Math.min(r.end,y);!f.extend&&v>E&&(o=E,E=v,v=o);var d=If(s,v),c=If(s,E);if(d&&c&&(f.rangeCount!==1||f.anchorNode!==d.node||f.anchorOffset!==d.offset||f.focusNode!==c.node||f.focusOffset!==c.offset)){var g=h.createRange();g.setStart(d.node,d.offset),f.removeAllRanges(),v>E?(f.addRange(g),f.extend(c.node,c.offset)):(g.setEnd(c.node,c.offset),f.addRange(g))}}}}for(h=[],f=s;f=f.parentNode;)f.nodeType===1&&h.push({element:f,left:f.scrollLeft,top:f.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<h.length;s++){var m=h[s];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}Bl=!!js,Gs=js=null}finally{D=n,L.p=i,S.T=a}}t.current=e,nt=2}}function mp(){if(nt===2){nt=0;var t=Qe,e=oi,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var i=L.p;L.p=2;var n=D;D|=4;try{Jd(t,e.alternate,e)}finally{D=n,L.p=i,S.T=a}}nt=3}}function xp(){if(nt===4||nt===3){nt=0,t1();var t=Qe,e=oi,a=ve,i=sp;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?nt=5:(nt=0,oi=Qe=null,yp(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Xe=null),$s(a),e=e.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(fn,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=S.T,n=L.p,L.p=2,S.T=null;try{for(var l=t.onRecoverableError,o=0;o<i.length;o++){var s=i[o];l(s.value,{componentStack:s.stack})}}finally{S.T=e,L.p=n}}(ve&3)!==0&&Jl(),ne(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Ls?Zi++:(Zi=0,Ls=t):Zi=0,mn(0,!1)}}function yp(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,hn(e)))}function Jl(){return bp(),mp(),xp(),vp()}function vp(){if(nt!==5)return!1;var t=Qe,e=Ns;Ns=0;var a=$s(ve),i=S.T,n=L.p;try{L.p=32>a?32:a,S.T=null,a=Ds,Ds=null;var l=Qe,o=ve;if(nt=0,oi=Qe=null,ve=0,(D&6)!==0)throw Error(x(331));var s=D;if(D|=4,np(l.current),ep(l,l.current,o,a),D=s,mn(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(fn,l)}catch{}return!0}finally{L.p=n,S.T=i,yp(t,e)}}function _c(t,e,a){e=Vt(a,e),e=Es(t.stateNode,e,2),t=Ze(t,e,2),t!==null&&(un(t,2),ne(t))}function U(t,e,a){if(t.tag===3)_c(t,t,a);else for(;e!==null;){if(e.tag===3){_c(e,t,a);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xe===null||!Xe.has(i))){t=Vt(a,t),a=Dd(2),i=Ze(e,a,2),i!==null&&(Ld(a,i,e,t),un(i,2),ne(i));break}}e=e.return}}function Qo(t,e,a){var i=t.pingCache;if(i===null){i=t.pingCache=new Mh;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(a)||(Rr=!0,n.add(a),t=Oh.bind(null,t,e,a),e.then(t,t))}function Oh(t,e,a){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,K===t&&(O&a)===a&&(I===4||I===3&&(O&62914560)===O&&300>Ot()-Zl?(D&2)===0&&si(t,0):Nr|=a,li===O&&(li=0)),ne(t)}function wp(t,e){e===0&&(e=du()),t=Sa(t,e),t!==null&&(un(t,e),ne(t))}function Bh(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),wp(t,a)}function Rh(t,e){var a=0;switch(t.tag){case 31:case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(x(314))}i!==null&&i.delete(e),wp(t,a)}function Nh(t,e){return Ws(t,e)}var zl=null,Ra=null,Hs=!1,Ml=!1,Jo=!1,Ke=0;function ne(t){t!==Ra&&t.next===null&&(Ra===null?zl=Ra=t:Ra=Ra.next=t),Ml=!0,Hs||(Hs=!0,Lh())}function mn(t,e){if(!Jo&&Ml){Jo=!0;do for(var a=!1,i=zl;i!==null;){if(!e)if(t!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var o=i.suspendedLanes,s=i.pingedLanes;l=(1<<31-Rt(42|t)+1)-1,l&=n&~(o&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Oc(i,l))}else l=O,l=Nl(i,i===K?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||cn(i,l)||(a=!0,Oc(i,l));i=i.next}while(a);Jo=!1}}function Dh(){kp()}function kp(){Ml=Hs=!1;var t=0;Ke!==0&&Vh()&&(t=Ke);for(var e=Ot(),a=null,i=zl;i!==null;){var n=i.next,l=Sp(i,e);l===0?(i.next=null,a===null?zl=n:a.next=n,n===null&&(Ra=a)):(a=i,(t!==0||(l&3)!==0)&&(Ml=!0)),i=n}nt!==0&&nt!==5||mn(t,!1),Ke!==0&&(Ke=0)}function Sp(t,e){for(var a=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var o=31-Rt(l),s=1<<o,r=n[o];r===-1?((s&a)===0||(s&i)!==0)&&(n[o]=r1(s,e)):r<=e&&(t.expiredLanes|=s),l&=~s}if(e=K,a=O,a=Nl(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,a===0||t===e&&(H===2||H===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&So(i),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||cn(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(i!==null&&So(i),$s(a)){case 2:case 8:a=cu;break;case 32:a=rl;break;case 268435456:a=uu;break;default:a=rl}return i=Tp.bind(null,t),a=Ws(a,i),t.callbackPriority=e,t.callbackNode=a,e}return i!==null&&i!==null&&So(i),t.callbackPriority=2,t.callbackNode=null,2}function Tp(t,e){if(nt!==0&&nt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Jl()&&t.callbackNode!==a)return null;var i=O;return i=Nl(t,t===K?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(fp(t,i,e),Sp(t,Ot()),t.callbackNode!=null&&t.callbackNode===a?Tp.bind(null,t):null)}function Oc(t,e){if(Jl())return null;fp(t,e,!0)}function Lh(){Xh(function(){(D&6)!==0?Ws(fu,Dh):kp()})}function Lr(){if(Ke===0){var t=ai;t===0&&(t=Cn,Cn<<=1,(Cn&261888)===0&&(Cn=256)),Ke=t}return Ke}function Bc(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Zn(""+t)}function Rc(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Hh(t,e,a,i,n){if(e==="submit"&&a&&a.stateNode===n){var l=Bc((n[zt]||null).action),o=i.submitter;o&&(e=(e=o[zt]||null)?Bc(e.formAction):o.getAttribute("formAction"),e!==null&&(l=e,o=null));var s=new Dl("action","action",null,i,n);t.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ke!==0){var r=o?Rc(n,o):new FormData(n);Cs(a,{pending:!0,data:r,method:n.method,action:l},null,r)}}else typeof l=="function"&&(s.preventDefault(),r=o?Rc(n,o):new FormData(n),Cs(a,{pending:!0,data:r,method:n.method,action:l},l,r))},currentTarget:n}]})}}for(jn=0;jn<gs.length;jn++)Gn=gs[jn],Nc=Gn.toLowerCase(),Dc=Gn[0].toUpperCase()+Gn.slice(1),It(Nc,"on"+Dc);var Gn,Nc,Dc,jn;It(Lu,"onAnimationEnd");It(Hu,"onAnimationIteration");It(Uu,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(eh,"onTransitionRun");It(ah,"onTransitionStart");It(ih,"onTransitionCancel");It(ju,"onTransitionEnd");ti("onMouseEnter",["mouseout","mouseover"]);ti("onMouseLeave",["mouseout","mouseover"]);ti("onPointerEnter",["pointerout","pointerover"]);ti("onPointerLeave",["pointerout","pointerover"]);va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));va("onBeforeInput",["compositionend","keypress","textInput","paste"]);va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var an="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(an));function zp(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var i=t[a],n=i.event;i=i.listeners;t:{var l=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],r=s.instance,u=s.currentTarget;if(s=s.listener,r!==l&&n.isPropagationStopped())break t;l=s,n.currentTarget=u;try{l(n)}catch(b){cl(b)}n.currentTarget=null,l=r}else for(o=0;o<i.length;o++){if(s=i[o],r=s.instance,u=s.currentTarget,s=s.listener,r!==l&&n.isPropagationStopped())break t;l=s,n.currentTarget=u;try{l(n)}catch(b){cl(b)}n.currentTarget=null,l=r}}}}function C(t,e){var a=e[ss];a===void 0&&(a=e[ss]=new Set);var i=t+"__bubble";a.has(i)||(Mp(e,t,2,!1),a.add(i))}function Fo(t,e,a){var i=0;e&&(i|=4),Mp(a,t,i,e)}var Kn="_reactListening"+Math.random().toString(36).slice(2);function Hr(t){if(!t[Kn]){t[Kn]=!0,mu.forEach(function(a){a!=="selectionchange"&&(Uh.has(a)||Fo(a,!1,t),Fo(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Kn]||(e[Kn]=!0,Fo("selectionchange",!1,e))}}function Mp(t,e,a,i){switch(jp(e)){case 2:var n=dg;break;case 8:n=pg;break;default:n=Kr}a=n.bind(null,e,a,t),n=void 0,!ds||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function Wo(t,e,a,i,n){var l=i;if((e&1)===0&&(e&2)===0&&i!==null)t:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=i.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=La(s),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){i=l=o;continue t}s=s.parentNode}}i=i.return}zu(function(){var u=l,b=er(a),h=[];t:{var p=Gu.get(t);if(p!==void 0){var f=Dl,y=t;switch(t){case"keypress":if(Qn(a)===0)break t;case"keydown":case"keyup":f=R1;break;case"focusin":y="focus",f=Ao;break;case"focusout":y="blur",f=Ao;break;case"beforeblur":case"afterblur":f=Ao;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=w1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=L1;break;case Lu:case Hu:case Uu:f=T1;break;case ju:f=U1;break;case"scroll":case"scrollend":f=y1;break;case"wheel":f=G1;break;case"copy":case"cut":case"paste":f=M1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Vf;break;case"toggle":case"beforetoggle":f=q1}var v=(e&4)!==0,E=!v&&(t==="scroll"||t==="scrollend"),d=v?p!==null?p+"Capture":null:p;v=[];for(var c=u,g;c!==null;){var m=c;if(g=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||g===null||d===null||(m=Ji(c,d),m!=null&&v.push(nn(c,m,g))),E)break;c=c.return}0<v.length&&(p=new f(p,y,null,a,b),h.push({event:p,listeners:v}))}}if((e&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",p&&a!==us&&(y=a.relatedTarget||a.fromElement)&&(La(y)||y[ci]))break t;if((f||p)&&(p=b.window===b?b:(p=b.ownerDocument)?p.defaultView||p.parentWindow:window,f?(y=a.relatedTarget||a.toElement,f=u,y=y?La(y):null,y!==null&&(E=rn(y),v=y.tag,y!==E||v!==5&&v!==27&&v!==6)&&(y=null)):(f=null,y=u),f!==y)){if(v=qf,m="onMouseLeave",d="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(v=Vf,m="onPointerLeave",d="onPointerEnter",c="pointer"),E=f==null?p:Oi(f),g=y==null?p:Oi(y),p=new v(m,c+"leave",f,a,b),p.target=E,p.relatedTarget=g,m=null,La(b)===u&&(v=new v(d,c+"enter",y,a,b),v.target=g,v.relatedTarget=E,m=v),E=m,f&&y)e:{for(v=jh,d=f,c=y,g=0,m=d;m;m=v(m))g++;m=0;for(var k=c;k;k=v(k))m++;for(;0<g-m;)d=v(d),g--;for(;0<m-g;)c=v(c),m--;for(;g--;){if(d===c||c!==null&&d===c.alternate){v=d;break e}d=v(d),c=v(c)}v=null}else v=null;f!==null&&Lc(h,p,f,v,!1),y!==null&&E!==null&&Lc(h,E,y,v,!0)}}t:{if(p=u?Oi(u):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var R=Jf;else if(Qf(p))if(Ou)R=$1;else{R=W1;var w=F1}else f=p.nodeName,!f||f.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?u&&tr(u.elementType)&&(R=Jf):R=I1;if(R&&(R=R(t,u))){_u(h,R,a,b);break t}w&&w(t,p,u),t==="focusout"&&u&&p.type==="number"&&u.memoizedProps.value!=null&&cs(p,"number",p.value)}switch(w=u?Oi(u):window,t){case"focusin":(Qf(w)||w.contentEditable==="true")&&(ja=w,ps=u,Li=null);break;case"focusout":Li=ps=ja=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,$f(h,a,b);break;case"selectionchange":if(th)break;case"keydown":case"keyup":$f(h,a,b)}var M;if(nr)t:{switch(t){case"compositionstart":var _="onCompositionStart";break t;case"compositionend":_="onCompositionEnd";break t;case"compositionupdate":_="onCompositionUpdate";break t}_=void 0}else Ua?Au(t,a)&&(_="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(Cu&&a.locale!=="ko"&&(Ua||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ua&&(M=Mu()):(Ue=b,ar="value"in Ue?Ue.value:Ue.textContent,Ua=!0)),w=Cl(u,_),0<w.length&&(_=new Yf(_,t,null,a,b),h.push({event:_,listeners:w}),M?_.data=M:(M=Eu(a),M!==null&&(_.data=M)))),(M=V1?Z1(t,a):X1(t,a))&&(_=Cl(u,"onBeforeInput"),0<_.length&&(w=new Yf("onBeforeInput","beforeinput",null,a,b),h.push({event:w,listeners:_}),w.data=M)),Hh(h,t,u,a,b)}zp(h,e)})}function nn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Cl(t,e){for(var a=e+"Capture",i=[];t!==null;){var n=t,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=Ji(t,a),n!=null&&i.unshift(nn(t,n,l)),n=Ji(t,e),n!=null&&i.push(nn(t,n,l))),t.tag===3)return i;t=t.return}return[]}function jh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Lc(t,e,a,i,n){for(var l=e._reactName,o=[];a!==null&&a!==i;){var s=a,r=s.alternate,u=s.stateNode;if(s=s.tag,r!==null&&r===i)break;s!==5&&s!==26&&s!==27||u===null||(r=u,n?(u=Ji(a,l),u!=null&&o.unshift(nn(a,u,r))):n||(u=Ji(a,l),u!=null&&o.push(nn(a,u,r)))),a=a.return}o.length!==0&&t.push({event:e,listeners:o})}var Gh=/\r\n?/g,Kh=/\u0000|\uFFFD/g;function Hc(t){return(typeof t=="string"?t:""+t).replace(Gh,`
`).replace(Kh,"")}function Cp(t,e){return e=Hc(e),Hc(t)===e}function j(t,e,a,i,n,l){switch(a){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||ei(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&ei(t,""+i);break;case"className":_n(t,"class",i);break;case"tabIndex":_n(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(t,a,i);break;case"style":Tu(t,i,l);break;case"data":if(e!=="object"){_n(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Zn(""+i),t.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(e!=="input"&&j(t,e,"name",n.name,n,null),j(t,e,"formEncType",n.formEncType,n,null),j(t,e,"formMethod",n.formMethod,n,null),j(t,e,"formTarget",n.formTarget,n,null)):(j(t,e,"encType",n.encType,n,null),j(t,e,"method",n.method,n,null),j(t,e,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(a);break}i=Zn(""+i),t.setAttribute(a,i);break;case"onClick":i!=null&&(t.onclick=be);break;case"onScroll":i!=null&&C("scroll",t);break;case"onScrollEnd":i!=null&&C("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(x(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(x(60));t.innerHTML=a}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}a=Zn(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""+i):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":i===!0?t.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(a,i):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(a,i):t.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(a):t.setAttribute(a,i);break;case"popover":C("beforetoggle",t),C("toggle",t),Vn(t,"popover",i);break;case"xlinkActuate":re(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":re(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":re(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":re(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":re(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":re(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":re(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":re(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":re(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vn(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=m1.get(a)||a,Vn(t,a,i))}}function Us(t,e,a,i,n,l){switch(a){case"style":Tu(t,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(x(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(x(60));t.innerHTML=a}}break;case"children":typeof i=="string"?ei(t,i):(typeof i=="number"||typeof i=="bigint")&&ei(t,""+i);break;case"onScroll":i!=null&&C("scroll",t);break;case"onScrollEnd":i!=null&&C("scrollend",t);break;case"onClick":i!=null&&(t.onclick=be);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xu.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),l=t[zt]||null,l=l!=null?l[a]:null,typeof l=="function"&&t.removeEventListener(e,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,i,n);break t}a in t?t[a]=i:i===!0?t.setAttribute(a,""):Vn(t,a,i)}}}function pt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":C("error",t),C("load",t);var i=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(x(137,e));default:j(t,e,l,o,a,null)}}n&&j(t,e,"srcSet",a.srcSet,a,null),i&&j(t,e,"src",a.src,a,null);return;case"input":C("invalid",t);var s=l=o=n=null,r=null,u=null;for(i in a)if(a.hasOwnProperty(i)){var b=a[i];if(b!=null)switch(i){case"name":n=b;break;case"type":o=b;break;case"checked":r=b;break;case"defaultChecked":u=b;break;case"value":l=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(x(137,e));break;default:j(t,e,i,b,a,null)}}wu(t,l,s,r,u,o,n,!1);return;case"select":C("invalid",t),i=o=l=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":l=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:j(t,e,n,s,a,null)}e=l,a=o,t.multiple=!!i,e!=null?Qa(t,!!i,e,!1):a!=null&&Qa(t,!!i,a,!0);return;case"textarea":C("invalid",t),l=n=i=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":i=s;break;case"defaultValue":n=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(x(91));break;default:j(t,e,o,s,a,null)}Su(t,i,n,l);return;case"option":for(r in a)a.hasOwnProperty(r)&&(i=a[r],i!=null)&&(r==="selected"?t.selected=i&&typeof i!="function"&&typeof i!="symbol":j(t,e,r,i,a,null));return;case"dialog":C("beforetoggle",t),C("toggle",t),C("cancel",t),C("close",t);break;case"iframe":case"object":C("load",t);break;case"video":case"audio":for(i=0;i<an.length;i++)C(an[i],t);break;case"image":C("error",t),C("load",t);break;case"details":C("toggle",t);break;case"embed":case"source":case"link":C("error",t),C("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(i=a[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(x(137,e));default:j(t,e,u,i,a,null)}return;default:if(tr(e)){for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!==void 0&&Us(t,e,b,i,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(i=a[s],i!=null&&j(t,e,s,i,a,null))}function qh(t,e,a,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,o=null,s=null,r=null,u=null,b=null;for(f in a){var h=a[f];if(a.hasOwnProperty(f)&&h!=null)switch(f){case"checked":break;case"value":break;case"defaultValue":r=h;default:i.hasOwnProperty(f)||j(t,e,f,null,i,h)}}for(var p in i){var f=i[p];if(h=a[p],i.hasOwnProperty(p)&&(f!=null||h!=null))switch(p){case"type":l=f;break;case"name":n=f;break;case"checked":u=f;break;case"defaultChecked":b=f;break;case"value":o=f;break;case"defaultValue":s=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(x(137,e));break;default:f!==h&&j(t,e,p,f,i,h)}}fs(t,o,s,r,u,b,l,n);return;case"select":f=o=s=p=null;for(l in a)if(r=a[l],a.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":f=r;default:i.hasOwnProperty(l)||j(t,e,l,null,i,r)}for(n in i)if(l=i[n],r=a[n],i.hasOwnProperty(n)&&(l!=null||r!=null))switch(n){case"value":p=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:l!==r&&j(t,e,n,l,i,r)}e=s,a=o,i=f,p!=null?Qa(t,!!a,p,!1):!!i!=!!a&&(e!=null?Qa(t,!!a,e,!0):Qa(t,!!a,a?[]:"",!1));return;case"textarea":f=p=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:j(t,e,s,null,i,n)}for(o in i)if(n=i[o],l=a[o],i.hasOwnProperty(o)&&(n!=null||l!=null))switch(o){case"value":p=n;break;case"defaultValue":f=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(x(91));break;default:n!==l&&j(t,e,o,n,i,l)}ku(t,p,f);return;case"option":for(var y in a)p=a[y],a.hasOwnProperty(y)&&p!=null&&!i.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:j(t,e,y,null,i,p));for(r in i)p=i[r],f=a[r],i.hasOwnProperty(r)&&p!==f&&(p!=null||f!=null)&&(r==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":j(t,e,r,p,i,f));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in a)p=a[v],a.hasOwnProperty(v)&&p!=null&&!i.hasOwnProperty(v)&&j(t,e,v,null,i,p);for(u in i)if(p=i[u],f=a[u],i.hasOwnProperty(u)&&p!==f&&(p!=null||f!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(x(137,e));break;default:j(t,e,u,p,i,f)}return;default:if(tr(e)){for(var E in a)p=a[E],a.hasOwnProperty(E)&&p!==void 0&&!i.hasOwnProperty(E)&&Us(t,e,E,void 0,i,p);for(b in i)p=i[b],f=a[b],!i.hasOwnProperty(b)||p===f||p===void 0&&f===void 0||Us(t,e,b,p,i,f);return}}for(var d in a)p=a[d],a.hasOwnProperty(d)&&p!=null&&!i.hasOwnProperty(d)&&j(t,e,d,null,i,p);for(h in i)p=i[h],f=a[h],!i.hasOwnProperty(h)||p===f||p==null&&f==null||j(t,e,h,p,i,f)}function Uc(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],l=n.transferSize,o=n.initiatorType,s=n.duration;if(l&&s&&Uc(o)){for(o=0,s=n.responseEnd,i+=1;i<a.length;i++){var r=a[i],u=r.startTime;if(u>s)break;var b=r.transferSize,h=r.initiatorType;b&&Uc(h)&&(r=r.responseEnd,o+=b*(r<s?1:(s-u)/(r-u)))}if(--i,e+=8*(l+o)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var js=null,Gs=null;function Al(t){return t.nodeType===9?t:t.ownerDocument}function jc(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ap(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ks(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Io=null;function Vh(){var t=window.event;return t&&t.type==="popstate"?t===Io?!1:(Io=t,!0):(Io=null,!1)}var Ep=typeof setTimeout=="function"?setTimeout:void 0,Zh=typeof clearTimeout=="function"?clearTimeout:void 0,Gc=typeof Promise=="function"?Promise:void 0,Xh=typeof queueMicrotask=="function"?queueMicrotask:typeof Gc!="undefined"?function(t){return Gc.resolve(null).then(t).catch(Qh)}:Ep;function Qh(t){setTimeout(function(){throw t})}function aa(t){return t==="head"}function Kc(t,e){var a=e,i=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){t.removeChild(n),fi(e);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Xi(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Xi(a);for(var l=a.firstChild;l;){var o=l.nextSibling,s=l.nodeName;l[dn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&Xi(t.ownerDocument.body);a=n}while(a);fi(e)}function qc(t,e){var a=t;t=0;do{var i=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=i}while(a)}function qs(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qs(a),Ps(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jh(t,e,a,i){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[dn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=Qt(t.nextSibling),t===null)break}return null}function Fh(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Qt(t.nextSibling),t===null))return null;return t}function _p(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Qt(t.nextSibling),t===null))return null;return t}function Ys(t){return t.data==="$?"||t.data==="$~"}function Vs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Wh(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var i=function(){e(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Zs=null;function Yc(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Qt(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Vc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Op(t,e,a){switch(e=Al(a),t){case"html":if(t=e.documentElement,!t)throw Error(x(452));return t;case"head":if(t=e.head,!t)throw Error(x(453));return t;case"body":if(t=e.body,!t)throw Error(x(454));return t;default:throw Error(x(451))}}function Xi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ps(t)}var Jt=new Map,Zc=new Set;function El(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Me=L.d;L.d={f:Ih,r:$h,D:Ph,C:tg,L:eg,m:ag,X:ng,S:ig,M:lg};function Ih(){var t=Me.f(),e=Xl();return t||e}function $h(t){var e=ui(t);e!==null&&e.tag===5&&e.type==="form"?Td(e):Me.r(t)}var gi=typeof document=="undefined"?null:document;function Bp(t,e,a){var i=gi;if(i&&typeof e=="string"&&e){var n=Yt(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Zc.has(n)||(Zc.add(n),t={rel:t,crossOrigin:a,href:e},i.querySelector(n)===null&&(e=i.createElement("link"),pt(e,"link",t),st(e),i.head.appendChild(e)))}}function Ph(t){Me.D(t),Bp("dns-prefetch",t,null)}function tg(t,e){Me.C(t,e),Bp("preconnect",t,e)}function eg(t,e,a){Me.L(t,e,a);var i=gi;if(i&&t&&e){var n='link[rel="preload"][as="'+Yt(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+Yt(a.imageSizes)+'"]')):n+='[href="'+Yt(t)+'"]';var l=n;switch(e){case"style":l=ri(t);break;case"script":l=bi(t)}Jt.has(l)||(t=Q({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Jt.set(l,t),i.querySelector(n)!==null||e==="style"&&i.querySelector(xn(l))||e==="script"&&i.querySelector(yn(l))||(e=i.createElement("link"),pt(e,"link",t),st(e),i.head.appendChild(e)))}}function ag(t,e){Me.m(t,e);var a=gi;if(a&&t){var i=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+Yt(i)+'"][href="'+Yt(t)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=bi(t)}if(!Jt.has(l)&&(t=Q({rel:"modulepreload",href:t},e),Jt.set(l,t),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yn(l)))return}i=a.createElement("link"),pt(i,"link",t),st(i),a.head.appendChild(i)}}}function ig(t,e,a){Me.S(t,e,a);var i=gi;if(i&&t){var n=Xa(i).hoistableStyles,l=ri(t);e=e||"default";var o=n.get(l);if(!o){var s={loading:0,preload:null};if(o=i.querySelector(xn(l)))s.loading=5;else{t=Q({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Jt.get(l))&&Ur(t,a);var r=o=i.createElement("link");st(r),pt(r,"link",t),r._p=new Promise(function(u,b){r.onload=u,r.onerror=b}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,el(o,e,i)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(l,o)}}}function ng(t,e){Me.X(t,e);var a=gi;if(a&&t){var i=Xa(a).hoistableScripts,n=bi(t),l=i.get(n);l||(l=a.querySelector(yn(n)),l||(t=Q({src:t,async:!0},e),(e=Jt.get(n))&&jr(t,e),l=a.createElement("script"),st(l),pt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function lg(t,e){Me.M(t,e);var a=gi;if(a&&t){var i=Xa(a).hoistableScripts,n=bi(t),l=i.get(n);l||(l=a.querySelector(yn(n)),l||(t=Q({src:t,async:!0,type:"module"},e),(e=Jt.get(n))&&jr(t,e),l=a.createElement("script"),st(l),pt(l,"link",t),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function Xc(t,e,a,i){var n=(n=qe.current)?El(n):null;if(!n)throw Error(x(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=ri(a.href),a=Xa(n).hoistableStyles,i=a.get(e),i||(i={type:"style",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ri(a.href);var l=Xa(n).hoistableStyles,o=l.get(t);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,o),(l=n.querySelector(xn(t)))&&!l._p&&(o.instance=l,o.state.loading=5),Jt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Jt.set(t,a),l||og(n,t,a,o.state))),e&&i===null)throw Error(x(528,""));return o}if(e&&i!==null)throw Error(x(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=bi(a),a=Xa(n).hoistableScripts,i=a.get(e),i||(i={type:"script",instance:null,count:0,state:null},a.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(x(444,t))}}function ri(t){return'href="'+Yt(t)+'"'}function xn(t){return'link[rel="stylesheet"]['+t+"]"}function Rp(t){return Q({},t,{"data-precedence":t.precedence,precedence:null})}function og(t,e,a,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),pt(e,"link",a),st(e),t.head.appendChild(e))}function bi(t){return'[src="'+Yt(t)+'"]'}function yn(t){return"script[async]"+t}function Qc(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(i)return e.instance=i,st(i),i;var n=Q({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),st(i),pt(i,"style",n),el(i,a.precedence,t),e.instance=i;case"stylesheet":n=ri(a.href);var l=t.querySelector(xn(n));if(l)return e.state.loading|=4,e.instance=l,st(l),l;i=Rp(a),(n=Jt.get(n))&&Ur(i,n),l=(t.ownerDocument||t).createElement("link"),st(l);var o=l;return o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(l,"link",i),e.state.loading|=4,el(l,a.precedence,t),e.instance=l;case"script":return l=bi(a.src),(n=t.querySelector(yn(l)))?(e.instance=n,st(n),n):(i=a,(n=Jt.get(l))&&(i=Q({},a),jr(i,n)),t=t.ownerDocument||t,n=t.createElement("script"),st(n),pt(n,"link",i),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(x(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,el(i,a.precedence,t));return e.instance}function el(t,e,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,o=0;o<i.length;o++){var s=i[o];if(s.dataset.precedence===e)l=s;else if(l!==n)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Ur(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function jr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var al=null;function Jc(t,e,a){if(al===null){var i=new Map,n=al=new Map;n.set(a,i)}else n=al,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(t))return i;for(i.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var l=a[n];if(!(l[dn]||l[ct]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(e)||"";o=t+o;var s=i.get(o);s?s.push(l):i.set(o,[l])}}return i}function Fc(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function sg(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Np(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function rg(t,e,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=ri(i.href),l=e.querySelector(xn(n));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=_l.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=l,st(l);return}l=e.ownerDocument||e,i=Rp(i),(n=Jt.get(n))&&Ur(i,n),l=l.createElement("link"),st(l);var o=l;o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(l,"link",i),a.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_l.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var $o=0;function fg(t,e){return t.stylesheets&&t.count===0&&il(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var i=setTimeout(function(){if(t.stylesheets&&il(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&$o===0&&($o=62500*Yh());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&il(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>$o?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function _l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)il(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ol=null;function il(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ol=new Map,e.forEach(cg,t),Ol=null,_l.call(t))}function cg(t,e){if(!(e.state.loading&4)){var a=Ol.get(t);if(a)var i=a.get(null);else{a=new Map,Ol.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var o=n[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}n=e.instance,o=n.getAttribute("data-precedence"),l=a.get(o)||i,l===i&&a.set(null,n),a.set(o,n),this.count++,i=_l.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var ln={$$typeof:ge,Provider:null,Consumer:null,_currentValue:ca,_currentValue2:ca,_threadCount:0};function ug(t,e,a,i,n,l,o,s,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=To(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.hiddenUpdates=To(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function Dp(t,e,a,i,n,l,o,s,r,u,b,h){return t=new ug(t,e,a,o,r,u,b,h,s),e=1,l===!0&&(e|=24),l=Et(3,null,null,e),t.current=l,l.stateNode=t,e=ur(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:e},hr(l),t}function Lp(t){return t?(t=qa,t):qa}function Hp(t,e,a,i,n,l){n=Lp(n),i.context===null?i.context=n:i.pendingContext=n,i=Ve(e),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=Ze(t,i,e),a!==null&&(Tt(a,t,e),Ui(a,t,e))}function Wc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Gr(t,e){Wc(t,e),(t=t.alternate)&&Wc(t,e)}function Up(t){if(t.tag===13||t.tag===31){var e=Sa(t,67108864);e!==null&&Tt(e,t,67108864),Gr(t,67108864)}}function Ic(t){if(t.tag===13||t.tag===31){var e=Nt();e=Is(e);var a=Sa(t,e);a!==null&&Tt(a,t,e),Gr(t,e)}}var Bl=!0;function dg(t,e,a,i){var n=S.T;S.T=null;var l=L.p;try{L.p=2,Kr(t,e,a,i)}finally{L.p=l,S.T=n}}function pg(t,e,a,i){var n=S.T;S.T=null;var l=L.p;try{L.p=8,Kr(t,e,a,i)}finally{L.p=l,S.T=n}}function Kr(t,e,a,i){if(Bl){var n=Xs(i);if(n===null)Wo(t,e,i,Rl,a),$c(t,i);else if(gg(n,t,e,a,i))i.stopPropagation();else if($c(t,i),e&4&&-1<hg.indexOf(t)){for(;n!==null;){var l=ui(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=sa(l.pendingLanes);if(o!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var r=1<<31-Rt(o);s.entanglements[1]|=r,o&=~r}ne(l),(D&6)===0&&(kl=Ot()+500,mn(0,!1))}}break;case 31:case 13:s=Sa(l,2),s!==null&&Tt(s,l,2),Xl(),Gr(l,2)}if(l=Xs(i),l===null&&Wo(t,e,i,Rl,a),l===n)break;n=l}n!==null&&i.stopPropagation()}else Wo(t,e,i,null,a)}}function Xs(t){return t=er(t),qr(t)}var Rl=null;function qr(t){if(Rl=null,t=La(t),t!==null){var e=rn(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=nu(e),t!==null)return t;t=null}else if(a===31){if(t=lu(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Rl=t,null}function jp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(e1()){case fu:return 2;case cu:return 8;case rl:case a1:return 32;case uu:return 268435456;default:return 32}default:return 32}}var Qs=!1,Je=null,Fe=null,We=null,on=new Map,sn=new Map,Le=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $c(t,e){switch(t){case"focusin":case"focusout":Je=null;break;case"dragenter":case"dragleave":Fe=null;break;case"mouseover":case"mouseout":We=null;break;case"pointerover":case"pointerout":on.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sn.delete(e.pointerId)}}function Ci(t,e,a,i,n,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},e!==null&&(e=ui(e),e!==null&&Up(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function gg(t,e,a,i,n){switch(e){case"focusin":return Je=Ci(Je,t,e,a,i,n),!0;case"dragenter":return Fe=Ci(Fe,t,e,a,i,n),!0;case"mouseover":return We=Ci(We,t,e,a,i,n),!0;case"pointerover":var l=n.pointerId;return on.set(l,Ci(on.get(l)||null,t,e,a,i,n)),!0;case"gotpointercapture":return l=n.pointerId,sn.set(l,Ci(sn.get(l)||null,t,e,a,i,n)),!0}return!1}function Gp(t){var e=La(t.target);if(e!==null){var a=rn(e);if(a!==null){if(e=a.tag,e===13){if(e=nu(a),e!==null){t.blockedOn=e,Df(t.priority,function(){Ic(a)});return}}else if(e===31){if(e=lu(a),e!==null){t.blockedOn=e,Df(t.priority,function(){Ic(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Xs(t.nativeEvent);if(a===null){a=t.nativeEvent;var i=new a.constructor(a.type,a);us=i,a.target.dispatchEvent(i),us=null}else return e=ui(a),e!==null&&Up(e),t.blockedOn=a,!1;e.shift()}return!0}function Pc(t,e,a){nl(t)&&a.delete(e)}function bg(){Qs=!1,Je!==null&&nl(Je)&&(Je=null),Fe!==null&&nl(Fe)&&(Fe=null),We!==null&&nl(We)&&(We=null),on.forEach(Pc),sn.forEach(Pc)}function qn(t,e){t.blockedOn===e&&(t.blockedOn=null,Qs||(Qs=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,bg)))}var Yn=null;function tu(t){Yn!==t&&(Yn=t,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,function(){Yn===t&&(Yn=null);for(var e=0;e<t.length;e+=3){var a=t[e],i=t[e+1],n=t[e+2];if(typeof i!="function"){if(qr(i||a)===null)continue;break}var l=ui(a);l!==null&&(t.splice(e,3),e-=3,Cs(l,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function fi(t){function e(r){return qn(r,t)}Je!==null&&qn(Je,t),Fe!==null&&qn(Fe,t),We!==null&&qn(We,t),on.forEach(e),sn.forEach(e);for(var a=0;a<Le.length;a++){var i=Le[a];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Le.length&&(a=Le[0],a.blockedOn===null);)Gp(a),a.blockedOn===null&&Le.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],l=a[i+1],o=n[zt]||null;if(typeof l=="function")o||tu(a);else if(o){var s=null;if(l&&l.hasAttribute("formAction")){if(n=l,o=l[zt]||null)s=o.formAction;else if(qr(n)!==null)continue}else s=o.action;typeof s=="function"?a[i+1]=s:(a.splice(i,3),i-=3),tu(a)}}}function Kp(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function Yr(t){this._internalRoot=t}Fl.prototype.render=Yr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));var a=e.current,i=Nt();Hp(a,i,t,e,null,null)};Fl.prototype.unmount=Yr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hp(t.current,2,null,t,null,null),Xl(),e[ci]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=bu();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Le.length&&e!==0&&e<Le[a].priority;a++);Le.splice(a,0,t),a===0&&Gp(t)}};var eu=au.version;if(eu!=="19.2.8")throw Error(x(527,eu,"19.2.8"));L.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=J0(e),t=t!==null?ou(t):null,t=t===null?null:t.stateNode,t};var mg={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ai.isDisabled&&Ai.supportsFiber))try{fn=Ai.inject(mg),Bt=Ai}catch{}var Ai;Wl.createRoot=function(t,e){if(!iu(t))throw Error(x(299));var a=!1,i="",n=Bd,l=Rd,o=Nd;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=Dp(t,1,!1,null,null,a,i,null,n,l,o,Kp),t[ci]=e.current,Hr(t),new Yr(e)};Wl.hydrateRoot=function(t,e,a){if(!iu(t))throw Error(x(299));var i=!1,n="",l=Bd,o=Rd,s=Nd,r=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),e=Dp(t,1,!0,e,a!=null?a:null,i,n,r,l,o,s,Kp),e.context=Lp(null),a=e.current,i=Nt(),i=Is(i),n=Ve(i),n.callback=null,Ze(a,n,i),a=i,e.current.lanes=a,un(e,a),ne(e),t[ci]=e.current,Hr(t),new Fl(e)};Wl.version="19.2.8"});var Zp=oe((Pg,Vp)=>{"use strict";function Yp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)}catch(t){console.error(t)}}Yp(),Vp.exports=qp()});var s0=oe((cb,o0)=>{var Zr=[["Plush Pepe",2448,6300],["Algorithm Cup",0,1450],["Intelligence Cup",0,1224],["Heart Locket",1305,1189],["Resistance Dog",0,633.1],["Durov's Cap",3029,404],["Scared Cat",13986,274],["Precious Peach",2112,244.2],["Heroic Helmet",1258,172.9],["Durov's Glasses",148,156.1],["Mighty Arm",1769,127.9],["Loot Bag",6429,120.6],["Astral Shard",2889,118],["Nail Bracelet",1832,114.4],["Westside Sign",5186,108.5],["Perfume Bottle",2106,76.5],["Mini Oscar",2108,70.3],["Artisan Brick",2852,68],["Ion Gem",2615,66.1],["Gem Signet",2104,60.4],["Magic Potion",3277,58.2],["Low Rider",6519,57.9],["Swiss Watch",10480,56],["Sharp Tongue",3793,46.4],["Kissed Frog",7508,43.5],["Bonded Ring",2847,42.5],["Vintage Cigar",8528,37.7],["Voodoo Doll",10752,37],["Neko Helmet",4002,36.5],["Genie Lamp",2623,36],["Toy Bear",29142,35],["Signet Ring",7099,32.1],["Diamond Ring",8179,31.7],["Electric Skull",4191,28.5],["Rare Bird",3348,27.4],["Bling Binky",1959,26.3],["Eternal Rose",5403,25.6],["Khabib's Papakha",3143,23.5],["Cupid Charm",5569,21],["Lucky Locket",0,18.9],["Sky Stilettos",5542,18.3],["Mad Pumpkin",6426,17],["Trapped Heart",9566,16.4],["UFC Strike",5984,15.5],["Snoop Cigar",17056,14.9],["Ionic Dryer",2455,14.5],["Love Potion",6420,14.1],["Crystal Ball",8004,13.1],["Flying Broom",6536,12.7],["Valentine Box",3559,12.4],["Skull Flower",6856,12.3],["Record Player",5214,11.9],["Sakura Flower",13339,10.8],["Love Candle",3012,10.7],["Jingle Bells",7965,10],["Top Hat",8191,9.82],["Hanging Star",6488,9.44],["Berry Box",8623,8.96],["Sleigh Bell",3996,8.5],["Fine Pen",0,8.23],["Bunny Muffin",6223,8.2],["Evil Eye",17803,8.03],["Snow Mittens",4684,7.91],["Joyful Bundle",3568,7.8],["Jelly Bunny",13367,7.63],["Jolly Chimp",13658,6.98],["Light Sword",16012,6.42],["Surge Board",1756,6.24],["Input Key",13025,6.17],["Witch Hat",30548,6.12],["Moon Pendant",12531,6.01],["Eternal Candle",11919,6],["Desk Calendar",32423,5.99],["Lush Bouquet",5797,5.99],["Snow Globe",5979,5.92],["Santa Hat",11705,5.9],["Spy Agaric",28563,5.72],["Faith Amulet",10892,5.49],["Spring Basket",11605,5.49],["Snoop Dogg",52945,5.43],["Restless Jar",8729,5.26],["Pretty Posy",4797,5.25],["Bow Tie",8092,5.1],["Swag Bag",19313,5.09],["Homemade Cake",32643,5.04],["Mousse Cake",6669,5],["Liberty Figure",12499,4.98],["Stellar Rocket",15504,4.9],["Cookie Heart",12779,4.88],["Money Pot",8661,4.82],["Jack-in-the-Box",15807,4.74],["Clover Pin",17449,4.69],["Hex Pot",14095,4.65],["B-Day Candle",23201,4.64],["Party Sparkler",20446,4.64],["Winter Wreath",8926,4.5],["Ginger Cookie",16858,4.47],["Timeless Book",6986,4.45],["Victory Medal",13289,4.41],["Mirage Lamp",0,4.31],["Star Notepad",8443,4.31],["Spiced Wine",11682,4.21],["Fresh Socks",10667,4.2],["Mood Pack",12462,4.15],["Holiday Drink",5923,4.14],["Happy Brownie",9989,4.08],["Hypno Lollipop",8343,4.01],["Jester Hat",11969,3.92],["Easter Egg",25973,3.88],["Pet Snake",10382,3.88],["Tama Gadget",10412,3.86],["Candy Cane",14703,3.83],["Ice Cream",32806,3.8],["Whip Cupcake",13270,3.75],["Big Year",11544,3.74],["Vice Cream",37569,3.73],["Pool Float",12397,3.71],["Snake Box",8755,3.71],["Instant Ramen",21613,3.7],["Lunar Snake",16883,3.7],["Xmas Stocking",13526,3.7],["Chill Flame",35999,3.68],["Lol Pop",65396,3.67]],Ag="/_blob/a64ccb23ba5a5ab0f1f789ab412cf3af",Eg={"B-Day Candle":"/_blob/ac9e83f513d62d0c7fc3250c8a2d1f89","Lol Pop":"/_blob/1f689ff254757e970266197964c5d390","Desk Calendar":"/_blob/9b7049b84c84b25ce8e457f56c837c42","Hypno Lollipop":"/_blob/b4c8d4f914ed6e253c933045ab9e3461","Jingle Bells":"/_blob/808ef5efdbeb6b276f70430b220f760b","Homemade Cake":"/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d","Snow Globe":"/_blob/6e3628fac94b5266f3b64cea9c5fe7ee","Berry Box":"/_blob/c2c0de4f1d0a4ed1dd2df84eff4c7f73","Bunny Muffin":"/_blob/45ac385132ce7b83da133306d9a330f8","Record Player":"/_blob/8f4c023d08704d2319e54c9872a8c46d","Top Hat":"/_blob/fe01a5a2d2ff76e0192e008ed6267558","Diamond Ring":"/_blob/ef580f1649ad89b5e268954da6ea30b2","Love Potion":"/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65","Eternal Rose":"/_blob/734e25b54462cda990767f69381d8355","Toy Bear":"/_blob/c02bc9477e447f6f71962df1fc7a399a","Signet Ring":"/_blob/4826a2db621709393534f8feae3d3f4a","Swiss Watch":"/_blob/5efc0b426406d53e3b649c727079f26d","Ion Gem":"/_blob/e562d84d61312007f5108ab64cbfe6f9","Precious Peach":"/_blob/923c4583ef32f1e6549c08d5a1839d4c","Durov's Cap":"/_blob/500977bc4572974cf066e4c08b276369"},a0={cake:"Homemade Cake",globe:"Snow Globe",record:"Record Player",rose:"Eternal Rose",bear:"Toy Bear",lpotion:"Love Potion",bells:"Jingle Bells",signet:"Signet Ring"};function _g(t){for(var e=2166136261,a=0;a<t.length;a++)e^=t.charCodeAt(a),e=Math.imul(e,16777619);return e^=e>>>13,e=Math.imul(e,1540483477),e^=e>>>15,(e>>>0)/4294967296}function i0(t){return Math.floor(((t||Date.now())+3*3600*1e3)/864e5)}function Og(t){return Math.max(1.5,Math.round(2*Math.pow(65396/t,1.1)*100)/100)}function n0(t,e,a){return Math.round(e*(1+(_g(t+":"+a)*2-1)*.03)*100)/100}var Il={};Zr.forEach(function(t){Il[t[0]]=t[2]||Og(t[1])});function l0(t){return t=String(t||""),Il[t]?t:a0[t]||null}function Bg(t,e){var a=l0(t);return a?n0(a,Il[a],i0(e)):null}function Rg(t){return t<5?"#9aa3b5":t<15?"#5fd4ff":t<60?"#c77dff":t<500?"#ff5d73":"#ffc83d"}var Vr={day:-1,list:[]};function Xr(t){var e=i0(t);return Vr.day!==e&&(Vr={day:e,list:Zr.map(function(a){return{name:a[0],price:n0(a[0],Il[a[0]],e)}}).sort(function(a,i){return a.price-i.price||(a.name<i.name?-1:1)})}),Vr.list}function Ng(t,e){for(var a=Xr(e),i=null,n=0;n<a.length&&a[n].price<=t+1e-9;n++)i=a[n];return i}function Dg(t,e){for(var a=Xr(e),i=0;i<a.length;i++)if(a[i].price>t+1e-9)return a[i];return null}o0.exports={RAW:Zr,IMG:Eg,GIFT_IMG:Ag,ALIAS:a0,canon:l0,priceOf:Bg,rarityColor:Rg,ladder:Xr,bestFor:Ng,nextAbove:Dg}});var Ht=io(wn()),d0=io(Zp());var Xp=`<!doctype html>
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
<button type="button" onClick="{{curToggle}}" aria-expanded="{{curOpenAttr}}" aria-label="\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0430\u043B\u044E\u0442\u0443" style="height: 60px; border-radius: 16px; border: 1px solid {{curBtnBorder}}; background: #0d0f14; color: #ffffff; cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 0 12px; font-family: Rubik, system-ui, sans-serif; text-align: left">
<span style="width: 32px; height: 32px; border-radius: 50%; background: {{curColor}}; color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900; flex-shrink: 0">{{curSym}}</span>
<span style="display: flex; flex-direction: column; gap: 1px; flex-grow: 1; min-width: 0"><span style="font-size: 15px; font-weight: 900">{{curCode}}</span><span style="font-size: 11px; color: #8a90a0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{curName}}</span></span>
<svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true" style="transform: rotate({{curArrow}}deg); transition: transform 0.2s"><path d="M1 1 L6 6 L11 1" fill="none" stroke="#8a90a0" stroke-width="2" stroke-linecap="round"></path></svg>
</button>
</div>
<div style="display: flex; flex-direction: column; gap: 6px">
<span style="font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #6c7282">\u041E\u041F\u041B\u0410\u0422\u0410</span>
<div style="height: 60px; box-sizing: border-box; border-radius: 16px; border: 1px solid #262b3a; background: #0d0f14; display: flex; align-items: center; gap: 10px; padding: 0 12px">
<span style="width: 32px; height: 32px; border-radius: 10px; background: #1a8cff; display: flex; align-items: center; justify-content: center; flex-shrink: 0"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 4 L3 11 L9 13 L11 19 L14 15 L19 19Z" fill="#ffffff"></path></svg></span>
<span style="display: flex; flex-direction: column; gap: 1px; min-width: 0"><span style="font-size: 15px; font-weight: 900">CryptoBot</span><span style="font-size: 11px; color: #8a90a0">\u0432 Telegram</span></span>
</div>
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
function openTgLink(url) {
  var tg = window.Telegram && window.Telegram.WebApp;
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
      self.setState({ waitingDeposit: 0, cbWaiting: 0 });
      self.showToast(m.amount > 0 ? { icon: '\u2705', text: (m.game === 'deposit' ? '\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435: +' : '\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E: +') + m.amount + ' TON', ok: true } : { icon: '\u2796', text: '\u0421\u043F\u0438\u0441\u0430\u043D\u043E ' + m.amount + ' TON' });
    });
    if (net) {
      this.offCb1 = net.on('cb.invoice', function (m) { self.setState({ cbCreating: false, cbWaiting: Date.now(), waitingDeposit: Date.now() }); openTgLink(m.url); self.showToast({ icon: '\u23F3', text: '\u0421\u0447\u0451\u0442 \u043D\u0430 ' + m.amount + ' ' + m.asset + ' \u043E\u0442\u043A\u0440\u044B\u0442 \u0432 CryptoBot. \u041F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B \u0431\u0430\u043B\u0430\u043D\u0441 \u0437\u0430\u0447\u0438\u0441\u043B\u0438\u0442\u0441\u044F \u0441\u0430\u043C' }); });
      this.offCb2 = net.on('cb.err', function (m) { self.setState({ cbCreating: false }); self.showToast({ icon: '\u26A0\uFE0F', text: m.msg }); });
    }
    // \u0432\u0435\u0440\u043D\u0443\u043B\u0441\u044F \u0438\u0437 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430 \u2014 \u043F\u0440\u043E\u0441\u0438\u043C \u0441\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u044B \u043F\u043E\u0440\u0430\u043D\u044C\u0448\u0435
    this.onVis = function () { var n = window.RK && window.RK.net; if (!document.hidden && self.state.waitingDeposit && n) n.send({ t: 'deposit.check' }); };
    document.addEventListener('visibilitychange', this.onVis);
    this.iv = setInterval(function () {
      var s = self.state;
      self.setState({ drops: [pickDrop()].concat(s.drops).slice(0, 8), online: Math.max(800, s.online + Math.round((Math.random() - 0.5) * 8)) });
    }, 2200);
  }
  componentWillUnmount() { clearInterval(this.iv); clearTimeout(this.tt); if (this.offCredit) this.offCredit(); if (this.offCb1) this.offCb1(); if (this.offCb2) this.offCb2(); document.removeEventListener('visibilitychange', this.onVis); }
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
    if (s.depTab === 'crypto') {
      var n2 = window.RK && window.RK.net, a2 = parseFloat(s.depCryptoAmount);
      if (!(a2 > 0)) { this.showToast({ icon: '\u26A0\uFE0F', text: '\u0412\u0432\u0435\u0434\u0438 \u0441\u0443\u043C\u043C\u0443' }); return; }
      if (!n2 || !n2.connected) { this.showToast({ icon: '\u26A0\uFE0F', text: '\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437' }); return; }
      if (!n2.cryptobot) { this.showToast({ icon: '\u{1F6A7}', text: '\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 CryptoBot \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E' }); return; }
      if (this.state.cbCreating) return;
      this.setState({ cbCreating: true });
      n2.send({ t: 'cb.create', asset: CURS[s.depCur].code, amount: a2 });
      return;
    }
    this.showToast({ icon: '\u{1F6A7}', text: '\u042D\u0442\u043E \u0434\u0435\u043C\u043E-\u0432\u0435\u0440\u0441\u0438\u044F: \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E' });
  }
  renderVals() {
    var self = this, s = this.state;
    var cur = CURS[s.depCur] || CURS[0];
    var inv = s.dep && window.RK && window.RK.inventory ? window.RK.inventory.list() : [];
    var wdCount = 0; inv.forEach(function (it) { if (s.wdSel[it.uid]) wdCount++; });
    var tgUser = window.RK && window.RK.user;
    var testOn = TEST_TOPUP && s.depMode === 'dep' && s.depTab === 'ton';
    var depInfo = window.RK && window.RK.net && window.RK.net.deposit;
    var liveTon = !TEST_TOPUP && s.depMode === 'dep' && s.depTab === 'ton';
    var liveCb = s.depMode === 'dep' && s.depTab === 'crypto' && !!(window.RK && window.RK.net && window.RK.net.cryptobot);
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
      curToggle: function () { self.setState({ curOpen: !self.state.curOpen }); },
      curOpen: !!s.curOpen, curOpenAttr: s.curOpen ? 'true' : 'false', curArrow: s.curOpen ? 180 : 0, curBtnBorder: s.curOpen ? '#ffc83d' : '#262b3a',
      curList: CURS.map(function (c, i) {
        var sel = i === s.depCur;
        return { code: c.code, name: c.name, sym: c.sym, color: c.color, sel: sel ? 'true' : 'false', border: sel ? '#ffc83d' : '#262b3a', bg: sel ? '#2a2410' : '#151821',
          pick: function () { self.setState({ depCur: i, curOpen: false }); } };
      }),
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
      badgeText: testOn ? '\u0422\u0415\u0421\u0422 \xB7 \u0441\u0443\u043C\u043C\u0430 \u0441\u0440\u0430\u0437\u0443 \u0437\u0430\u0447\u0438\u0441\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441' : (liveTon ? '\u041E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 Tonkeeper \xB7 \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438' : liveCb ? '\u041E\u043F\u043B\u0430\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 @CryptoBot \xB7 \u0437\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438' : '\u0414\u0415\u041C\u041E \xB7 ' + (s.depMode === 'wd' ? '\u0432\u044B\u0432\u043E\u0434' : '\u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435') + ' \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E'),
      badgeColor: testOn || liveTon || liveCb ? '#2bd46b' : '#ffc83d', badgeBg: testOn || liveTon || liveCb ? 'rgba(43,212,107,0.12)' : 'rgba(255,200,61,0.12)', badgeBorder: testOn || liveTon || liveCb ? 'rgba(43,212,107,0.4)' : 'rgba(255,200,61,0.35)',
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
`;var Qp=`<!doctype html>
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
        // \u0441\u0442\u0430\u0432\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0430 \u2014 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u0434\u0435\u043D\u044C\u0433\u0438 / \u043F\u043E\u0434\u0430\u0440\u043E\u043A
        var s = self.state, upd = { sending: false, err: m.msg || '\u041E\u0448\u0438\u0431\u043A\u0430' };
        if (m.gift) { var I = INV(); if (I && G(m.gift)) I.add(G(m.gift).name); upd.invTick = s.invTick + 1; } // \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0432\u0435\u0440\u043D\u0443\u043B\u0441\u044F \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C
        else if (m.amount) upd.balance = r2(s.balance + Number(m.amount));
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
      // gift = uid \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430 \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F: \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0435\u0433\u043E \u0438 \u0441\u0442\u0430\u0432\u0438\u043C
      var I = INV(), item = I ? I.list().filter(function (it) { return it.uid === gift; })[0] : null;
      if (!item || !G(item.key)) { this.setState({ giftPick: false, err: '\u042D\u0442\u043E\u0433\u043E \u043F\u043E\u0434\u0430\u0440\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435' }); return; }
      I.remove(item.uid);
      this.setState({ sending: true, giftPick: false, invTick: s.invTick + 1 });
      net.send({ t: 'crash.bet', gift: item.key });
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
`;var Jp=`<!doctype html>
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
`;var Fp=`<!doctype html>
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
`;var Wp=`<!doctype html>
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
`;var Ip=`<!doctype html>
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
        var s = self.state, upd = { sending: false, err: m.msg || '\u041E\u0448\u0438\u0431\u043A\u0430' };
        if (m.gift) { var I = INV(); if (I && G(m.gift)) I.add(G(m.gift).name); upd.invTick = s.invTick + 1; } // \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0432\u0435\u0440\u043D\u0443\u043B\u0441\u044F \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C
        else if (m.ton) upd.balance = r2(s.balance + Number(m.ton));
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
      // pickGift = uid \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430 \u0438\u0437 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044F: \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0438 \u0441\u0442\u0430\u0432\u0438\u043C
      var I = INV(), item = I ? I.list().filter(function (it) { return it.uid === s.pickGift; })[0] : null;
      if (!item || !G(item.key)) { this.setState({ pickGift: null, err: '\u042D\u0442\u043E\u0433\u043E \u043F\u043E\u0434\u0430\u0440\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u0432 \u0438\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u0435' }); return; }
      if (this.join(0, item.key)) { I.remove(item.uid); this.setState({ pickGift: null, sending: true, invTick: s.invTick + 1 }); }
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
`;var $p=`<!doctype html>
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
`;var Pp=`<!doctype html>
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
`;var t0=`<!doctype html>
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
`;var e0=`<!doctype html>
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
`;var ia=io(s0()),q=window.Telegram&&window.Telegram.WebApp,Lg=0,Pl=["rk_balance","rk_inv","rk_free_at","rk_pvp_hist","rk_crash_hist","rk_upg_hist","rk_stats","rk_tasks","rk_pvp_pending","rk_reset","rk_credits_done"],r0=3900,na=(()=>{try{return q&&q.CloudStorage&&(!q.isVersionAtLeast||q.isVersionAtLeast("6.9"))?q.CloudStorage:null}catch{return null}})(),xt={_m:{},_t:{},get(t){let e=null;try{e=localStorage.getItem(t)}catch{}return e!=null?e:t in this._m?this._m[t]:null},set(t,e){e=String(e),this._m[t]=e;try{localStorage.setItem(t,e)}catch{}na&&Pl.indexOf(t)!==-1&&(clearTimeout(this._t[t]),this._t[t]=setTimeout(()=>{let a=[];for(let i=0;i<e.length;i+=r0)a.push(e.slice(i,i+r0));a.length||a.push("");try{na.setItem(t+"__n",String(a.length)),a.forEach((i,n)=>na.setItem(t+"__"+n,i))}catch{}},400))},remove(t){delete this._m[t];try{localStorage.removeItem(t)}catch{}if(na)try{na.setItem(t+"__n","0")}catch{}},getJSON(t,e){try{let a=JSON.parse(this.get(t)||"null");return a==null?e:a}catch{return e}},setJSON(t,e){this.set(t,JSON.stringify(e))}};function Hg(){return new Promise(t=>{if(!na)return t();let e=setTimeout(t,2500);try{na.getItems(Pl.map(a=>a+"__n"),(a,i)=>{if(a||!i)return clearTimeout(e),t();let n=[];if(Pl.forEach(l=>{let o=parseInt(i[l+"__n"]||"0",10)||0;for(let s=0;s<o;s++)n.push(l+"__"+s)}),!n.length)return clearTimeout(e),t();na.getItems(n,(l,o)=>{!l&&o&&Pl.forEach(s=>{let r=parseInt(i[s+"__n"]||"0",10)||0;if(!r)return;let u="";for(let b=0;b<r;b++)u+=o[s+"__"+b]||"";xt._m[s]=u;try{localStorage.setItem(s,u)}catch{}}),clearTimeout(e),t()})})}catch{clearTimeout(e),t()}})}var Ce={get(){let t=parseFloat(xt.get("rk_balance"));return isNaN(t)?Lg:t},set(t){xt.set("rk_balance",String(Math.round(t*100)/100)),clearTimeout(this._rt),this._rt=setTimeout(()=>{try{window.RK&&window.RK.net&&window.RK.net.send({t:"bal",v:Ce.get()})}catch{}},2e3)}},Ug=["B-Day Candle","Lol Pop","Desk Calendar","Homemade Cake","Homemade Cake","Jingle Bells","Hypno Lollipop","Snow Globe","Berry Box"],p0={_load(){let t=xt.getJSON("rk_inv",null);return Array.isArray(t)?t:null},_save(t){xt.setJSON("rk_inv",t),this._mem=t},list(){let t=this._load()||this._mem;if(!t){let e=Date.now();t=Ug.map((a,i)=>({uid:"s"+i+"_"+e,key:a,at:e-(i+1)*36e5})),this._save(t)}return t.slice()},add(t){let e=this.list(),a={uid:"g"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),key:t,at:Date.now()};return e.unshift(a),this._save(e),a},remove(t){let e=new Set([].concat(t));this._save(this.list().filter(a=>!e.has(a.uid)))},reset(){return xt.remove("rk_inv"),this._mem=null,this.list()}},Jr=t=>new Date((t||Date.now())+3*3600*1e3).toISOString().slice(0,10),mi=()=>({cases:0,crash:0,pvp:0,upgrade:0,mines:0,wagered:0,won:0}),h0={_get(){let t=xt.getJSON("rk_stats",null);return t&&t.days?t:{total:mi(),days:{}}},day(){return Object.assign(mi(),this._get().days[Jr()]||{})},range(t){let e=this._get(),a=mi();for(let i=0;i<t;i++){let n=e.days[Jr(Date.now()-i*864e5)];n&&Object.keys(a).forEach(l=>{a[l]+=n[l]||0})}return a},total(){return Object.assign(mi(),this._get().total)}};function g0(t){let e=h0._get(),a=Jr(),i=Object.assign(mi(),e.days[a]||{}),n=Object.assign(mi(),e.total||{});[i,n].forEach(l=>{t.round&&t.game in l&&(l[t.game]+=1),l.wagered=Math.round((l.wagered+(t.bet||0))*100)/100,l.won=Math.round((l.won+(t.win||0))*100)/100}),e.days[a]=i,e.total=n,Object.keys(e.days).sort().slice(0,-8).forEach(l=>{delete e.days[l]}),xt.setJSON("rk_stats",e)}var yt=null;function Qr(t){let e=yt&&yt.logic;e&&e.state&&"balance"in e.state?e.setState({balance:Math.round((e.state.balance+t)*100)/100}):(Ce.set(Ce.get()+t),yt&&yt.forceUpdate())}function jg(t){let e=yt&&yt.logic;e&&e.state&&"balance"in e.state?e.setState({balance:t}):(Ce.set(t),yt&&yt.forceUpdate())}var b0=(()=>{let t={},e=new Set,a=null,i=0,n=null,l={connected:!1,me:null,online:0,offset:0};function o(f,y){(t[f]||[]).slice().forEach(v=>{try{v(y)}catch(E){console.error(E)}})}function s(){let f=(window.RK_SERVER||"").trim();return f||(f=(location.protocol==="https:"?"wss://":"ws://")+location.host),f.replace(/^http/,"ws").replace(/\/+$/,"")+"/ws"}function r(){let f=xt.get("rk_guest");return f||(f=Math.random().toString(36).slice(2,10)+Date.now().toString(36).slice(-4),xt.set("rk_guest",f)),f}function u(f){return a&&a.readyState===1?(a.send(JSON.stringify(f)),!0):!1}function b(f){let y=xt.getJSON("rk_credits_done",[]);if(f.dup=y.indexOf(f.id)!==-1,!f.dup){if(f.game==="deposit")Qr(f.amount);else if(f.game==="admin"){let v=yt&&yt.logic,E=v&&v.state&&"balance"in v.state?v.state.balance:Ce.get();Qr(Math.max(f.amount,-E))}else{let v=0;if(f.gift){let E=ao(f.gift);E&&(p0.add(E.name),v=E.price)}f.amount?Qr(f.amount):yt&&yt.forceUpdate(),g0({game:f.game,win:Math.round((f.amount+v)*100)/100})}xt.setJSON("rk_credits_done",[f.id].concat(y).slice(0,100))}u({t:"ack",id:f.id})}function h(){try{a=new WebSocket(s())}catch{return p()}a.onopen=()=>{i=0,u({t:"hello",initData:q&&q.initData||"",guestId:r()}),e.forEach(y=>u({t:"sub",room:y})),clearInterval(n);let f=()=>u({t:"ping",c:Date.now()});f(),n=setInterval(f,1e4)},a.onmessage=f=>{let y;try{y=JSON.parse(f.data)}catch{return}if(y.t==="pong"){let v=Date.now();l.offset=y.now-(y.c+v)/2;return}y.t==="welcome"&&(y.balanceReset&&xt.get("rk_reset")!==y.balanceReset&&(jg(0),xt.set("rk_reset",y.balanceReset)),l.me=y.me,l.online=y.online,l.deposit=y.deposit||null,l.cryptobot=y.cryptobot||null,l.connected=!0,o("status",l),u({t:"bal",v:Ce.get()})),y.t==="online"&&(l.online=y.n),y.t==="credit"&&b(y),o(y.t,y)},a.onclose=()=>{let f=l.connected;l.connected=!1,clearInterval(n),f&&o("status",l),p()},a.onerror=()=>{}}function p(){i=Math.min(i+1,6),setTimeout(h,500*i)}return l.on=(f,y)=>((t[f]=t[f]||[]).push(y),()=>{t[f]=(t[f]||[]).filter(v=>v!==y)}),l.send=u,l.sub=f=>{e.add(f),u({t:"sub",room:f})},l.unsub=f=>{e.delete(f),u({t:"unsub",room:f})},l.now=()=>Date.now()+l.offset,l.isMe=f=>!!(l.me&&l.me.uid===f),l.start=h,l})();function ao(t){let e=ia.default.canon(t);if(!e)return null;let a=ia.default.priceOf(e),i=ia.default.IMG[e]||ia.default.GIFT_IMG;return{name:e,price:a,color:ia.default.rarityColor(a),img:window.rkThumb?window.rkThumb(e,i):m0(i)}}function Gg(t){let e=ia.default.bestFor(t);return e?ao(e.name):null}function Kg(t){let e=ia.default.nextAbove(t);return e?ao(e.name):null}window.RK={wallet:Ce,inventory:p0,store:xt,stats:h0,track:g0,net:b0,gift:ao,giftBestFor:Gg,giftNextAbove:Kg,botName:"RackoonDropBot",user:q&&q.initDataUnsafe&&q.initDataUnsafe.user||null};if(q){q.ready(),q.expand();try{q.setHeaderColor("#0b0d12"),q.setBackgroundColor("#0b0d12")}catch{}try{q.disableVerticalSwipes&&q.disableVerticalSwipes()}catch{}}document.addEventListener("click",t=>{if(q&&q.HapticFeedback&&t.target.closest&&t.target.closest("button, a"))try{q.HapticFeedback.impactOccurred("light")}catch{}},!0);var to={"16b8be03ec4054a9ad560c5be1c9ab9e":"banner-crash.jpg","88b023f22e2d3006641849bb168e073d":"banner-cases.jpg","63c10368990e8788e655de65d5a9b515":"banner-upgrade.jpg",b81dc491ff982e1892b4eeeb94570e3c:"banner-mines.jpg","661884b648dd965ea69af44ea8c7ee95":"avatar.jpg",a8d1e2a1f1626c9b8edd4755d9c32150:"rocket.png","29f965541d768edadf1aad890a105f4f":"space.jpg",ac9e83f513d62d0c7fc3250c8a2d1f89:"candle.svg","1f689ff254757e970266197964c5d390":"lolpop.svg","9b7049b84c84b25ce8e457f56c837c42":"calendar.svg",b4c8d4f914ed6e253c933045ab9e3461:"hypno.svg","808ef5efdbeb6b276f70430b220f760b":"bells.svg","6ef5ecbeb712d1b1d752a33d1e9c279d":"cake.svg","6e3628fac94b5266f3b64cea9c5fe7ee":"globe.svg",c2c0de4f1d0a4ed1dd2df84eff4c7f73:"berry.svg","45ac385132ce7b83da133306d9a330f8":"muffin.svg","8f4c023d08704d2319e54c9872a8c46d":"record.svg",fe01a5a2d2ff76e0192e008ed6267558:"tophat.svg",ef580f1649ad89b5e268954da6ea30b2:"dring.svg","5bb7da32fc8a6f8dbe91cf7cedc20c65":"lpotion.svg","734e25b54462cda990767f69381d8355":"rose.svg",c02bc9477e447f6f71962df1fc7a399a:"bear.svg","4826a2db621709393534f8feae3d3f4a":"signet.svg","5efc0b426406d53e3b649c727079f26d":"watch.svg",e562d84d61312007f5108ab64cbfe6f9:"iongem.svg","923c4583ef32f1e6549c08d5a1839d4c":"peach.svg","500977bc4572974cf066e4c08b276369":"cap.svg",a64ccb23ba5a5ab0f1f789ab412cf3af:"pepe.svg",bb8c4faf5d5477b7abe934698601360a:"none.svg","34af5661e80ecf394b0a48aeeb28ab6c":"r-fire.svg","7629870dfcd56d08701d6a71de1e83df":"r-laugh.svg",f5a9ceb49eb8c4c03e26914bcd1e2576:"r-angry.svg","89d4ee9117e73bee099492a4ce5c5498":"r-heart.svg",c22eeb9eb2c04b336c2c7f989a2a93a7:"r-party.svg",fcf5bf14ee8b1ae499c387610e4d1977:"case-c1.jpg","06ce572b9077b276c1d8a7b06b5e8713":"case-c2.jpg","9e1537bfc41c71475ce556a1aaf4884f":"case-c3.jpg",c0847d0dc5fbcb1a68d80763032f0675:"case-c4.jpg",db1a02051117bc41aa898a143cdc3d48:"case-c5.jpg","72f77fc4af6bf75c8e7d10aa33580007":"case-c6.jpg",b289144243be3c7e4e7176e3a0070caa:"case-c7.jpg","313d5daa64736bbfb70ecfcd97ed3141":"case-c8.jpg"};function m0(t){return t.replace(/\/_blob\/([0-9a-f]{32})/g,(e,a)=>to[a]?"assets/"+to[a]:e)}function qg(t){return t.replace(/position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba\(5, 6, 10, ([0-9.]+)\); display: flex; justify-content: center; align-items: flex-start; padding-top: \d+px/g,"position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, $1); display: flex; justify-content: center; align-items: center; padding: 16px")}var Fr={};window.rkThumb=function(t,e){let a=t.toLowerCase().replace(/[^a-z0-9]/g,""),i="https://fragment.com/file/gifts/"+a+"/thumb.webp",n="https://nft.fragment.com/gift/"+a+"-1.webp";return Fr[i]=n,Fr[n]=e.replace(/\/_blob\/([0-9a-f]{32})/,(l,o)=>to[o]?"assets/"+to[o]:l),i};window.addEventListener("error",t=>{let e=t.target;if(e&&e.tagName==="IMG"){if(window.RK&&window.RK.user&&e.getAttribute("src")===window.RK.user.photo_url){e.setAttribute("src","assets/avatar.jpg");return}if(e.hasAttribute("data-av")){e.removeAttribute("data-av"),e.setAttribute("src","assets/avatar.jpg");return}let a=Fr[e.getAttribute("src")];a&&e.setAttribute("src",a)}},!0);function le(t,e){let a=qg(m0(e)),i=new DOMParser().parseFromString(a,"text/html"),n=i.querySelector("x-dc"),l=n.querySelector("helmet"),o=[];l&&(l.querySelectorAll("link, style").forEach(b=>o.push(b.outerHTML)),l.remove());let s=Array.from(n.children)[0],r=i.querySelector("script[data-dc-script]").textContent,u=new Function("DCLogic",r+`
;return Component;`)(Wr);return{name:t,head:o,root:s,Logic:u}}var Wr=class{constructor(e){this.props=e||{},this.state={},this._host=null}setState(e,a){typeof e=="function"&&(e=e(this.state,this.props)),Object.assign(this.state,e),e&&"balance"in e&&Ce.set(e.balance),this._host?this._host.forceUpdate(a):a&&a()}forceUpdate(e){this._host&&this._host.forceUpdate(e)}},Ir=t=>t.replace(/-([a-z])/g,(e,a)=>a.toUpperCase());function f0(t,e){if(t=t.trim(),t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(/^-?\d+(\.\d+)?$/.test(t))return parseFloat(t);let a=t.split("."),i;for(let n=e.length-1;n>=0;n--)if(e[n]&&a[0]in e[n]){i=e[n][a[0]];break}for(let n=1;n<a.length&&i!=null;n++)i=i[a[n]];return i}var Yg=/\{\{([^}]+)\}\}/g;function $l(t,e){let a=t.match(/^\s*\{\{([^}]+)\}\}\s*$/);return a?f0(a[1],e):t.replace(Yg,(i,n)=>{let l=f0(n,e);return l==null?"":String(l)})}function Vg(t){let e={};return t.split(";").forEach(a=>{let i=a.indexOf(":");if(i<0)return;let n=a.slice(0,i).trim(),l=a.slice(i+1).trim();if(n){if(n.startsWith("--")){e[n]=l;return}n.startsWith("-webkit-")&&(n="Webkit"+Ir(n.slice(8)).replace(/^./,o=>o.toUpperCase()).slice(0)),e[n.startsWith("Webkit")?n:Ir(n)]=l}}),e}function x0(t,e,a,i){if(t.nodeType===3){let b=t.nodeValue;return!b.trim()&&b.indexOf(`
`)!==-1?null:b.indexOf("{{")===-1?b:$l(b,e)}if(t.nodeType!==1)return null;let n=t.tagName.toLowerCase(),l=b=>Array.from(t.childNodes).map((h,p)=>x0(h,b,a,p)).filter(h=>h!=null&&h!==!1);if(n==="sc-if")return $l(t.getAttribute("value")||"",e)?Ht.default.createElement(Ht.default.Fragment,{key:i},...l(e)):null;if(n==="sc-for"){let b=$l(t.getAttribute("list")||"",e)||[],h=t.getAttribute("as")||"item";return Ht.default.createElement(Ht.default.Fragment,{key:i},...b.map((p,f)=>Ht.default.createElement(Ht.default.Fragment,{key:f},...l(e.concat([{[h]:p,$index:f}])))))}let o=t.namespaceURI==="http://www.w3.org/2000/svg",s={key:i};for(let b of Array.from(t.attributes)){let h=b.name,p=b.value,f=p.indexOf("{{")===-1?p:$l(p,e);if(!h.startsWith("hint-")){if(h==="class")h="className";else if(h==="for")h="htmlFor";else if(h==="style"){s.style=Vg(String(f));continue}else if(h.startsWith("on")){let y="on"+h.charAt(2).toUpperCase()+h.slice(3);y==="Onclick"&&(y="onClick"),h.toLowerCase()==="onclick"&&(y="onClick"),h.toLowerCase()==="oninput"&&(y="onChange"),h.toLowerCase()==="onkeydown"&&(y="onKeyDown"),typeof f=="function"&&(s[y]=f);continue}else o&&h.indexOf("-")!==-1&&!h.startsWith("aria-")&&!h.startsWith("data-")?h=Ir(h):h==="tabindex"?h="tabIndex":h==="referrerpolicy"?h="referrerPolicy":h==="inputmode"?h="inputMode":h==="enterkeyhint"?h="enterKeyHint":h==="autocomplete"?h="autoComplete":h==="readonly"?h="readOnly":h==="disabled"&&(f=f===!0||f===""||f==="disabled"||f==="true");s[h]=f}}if(n==="a"){let h=String(s.href||t.getAttribute("href")||"").match(/([A-Za-z]+)\.dc\.html$/);s.href="#",s.onClick=p=>{p.preventDefault(),h&&a(h[1])}}n==="input"&&"value"in s&&!s.onChange&&(s.readOnly=!0);let r=l(e);return{img:1,input:1,br:1,hr:1,meta:1,link:1}[n]?Ht.default.createElement(n,s):Ht.default.createElement(n,s,...r)}var $r=class extends Ht.default.Component{constructor(e){super(e),this.logic=new e.screen.Logic({}),this.logic.state&&"balance"in this.logic.state&&(this.logic.state.balance=Ce.get()),this.logic._host=this}componentDidMount(){yt=this,this.logic.componentDidMount&&this.logic.componentDidMount()}componentWillUnmount(){yt===this&&(yt=null),this.logic.componentWillUnmount&&this.logic.componentWillUnmount(),this.logic._host=null}render(){let e=this.logic.renderVals?this.logic.renderVals():{};return x0(this.props.screen.root,[e],this.props.nav,"root")}},eo={Main:le("Main",Xp),Crash:le("Crash",Qp),Upgrade:le("Upgrade",Jp),Cases:le("Cases",Fp),Mines:le("Mines",Wp),Pvp:le("Pvp",Ip),Inventory:le("Inventory",$p),Tasks:le("Tasks",Pp),Leaders:le("Leaders",t0),Admin:le("Admin",e0)},c0=new Set;Object.values(eo).forEach(t=>t.head.forEach(e=>{if(c0.has(e))return;c0.add(e);let a=document.createElement("div");a.innerHTML=e;let i=a.firstElementChild;i.tagName==="STYLE"&&/body\{/.test(i.textContent)&&(i.textContent=i.textContent.replace(/body\{[^}]*\}/,"")),document.head.appendChild(i)}));function u0(){let t=(location.hash||"").replace("#/","");return eo[t]?t:"Main"}var Pr=class extends Ht.default.Component{constructor(e){super(e),this.state={route:u0()},this.nav=this.nav.bind(this),this.back=()=>this.nav("Main")}componentDidMount(){window.addEventListener("hashchange",()=>this.setState({route:u0()})),q&&q.BackButton&&q.BackButton.onClick(this.back),this.syncBack()}componentDidUpdate(){this.syncBack()}syncBack(){!q||!q.BackButton||(this.state.route==="Main"?q.BackButton.hide():q.BackButton.show())}nav(e){eo[e]&&(location.hash=e==="Main"?"":"#/"+e,this.setState({route:e}),window.scrollTo(0,0))}render(){let e=this.state.route;return Ht.default.createElement($r,{key:e,screen:eo[e],nav:this.nav})}};function y0(){let t=document.getElementById("app"),e=Math.min(window.innerWidth,480);t.style.zoom=String(e/390)}window.addEventListener("resize",y0);y0();Hg().then(()=>{b0.start(),(0,d0.createRoot)(document.getElementById("app")).render(Ht.default.createElement(Pr))});})();
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
