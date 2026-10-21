(()=>{var K0=Object.create;var Lo=Object.defineProperty;var J0=Object.getOwnPropertyDescriptor;var F0=Object.getOwnPropertyNames;var W0=Object.getPrototypeOf,$0=Object.prototype.hasOwnProperty;var ze=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var I0=(t,e,a,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of F0(e))!$0.call(t,i)&&i!==a&&Lo(t,i,{get:()=>e[i],enumerable:!(l=J0(e,i))||l.enumerable});return t};var Yo=(t,e,a)=>(a=t!=null?K0(W0(t)):{},I0(e||!t||!t.__esModule?Lo(a,"default",{value:t,enumerable:!0}):a,t));var Po=ze(z=>{"use strict";var Wn=Symbol.for("react.transitional.element"),P0=Symbol.for("react.portal"),tp=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),lp=Symbol.for("react.consumer"),ip=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),up=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),Ko=Symbol.for("react.lazy"),op=Symbol.for("react.activity"),Xo=Symbol.iterator;function sp(t){return t===null||typeof t!="object"?null:(t=Xo&&t[Xo]||t["@@iterator"],typeof t=="function"?t:null)}var Jo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fo=Object.assign,Wo={};function xa(t,e,a){this.props=t,this.context=e,this.refs=Wo,this.updater=a||Jo}xa.prototype.isReactComponent={};xa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $o(){}$o.prototype=xa.prototype;function $n(t,e,a){this.props=t,this.context=e,this.refs=Wo,this.updater=a||Jo}var In=$n.prototype=new $o;In.constructor=$n;Fo(In,xa.prototype);In.isPureReactComponent=!0;var Zo=Array.isArray;function Fn(){}var X={H:null,A:null,T:null,S:null},Io=Object.prototype.hasOwnProperty;function Pn(t,e,a){var l=a.ref;return{$$typeof:Wn,type:t,key:e,ref:l!==void 0?l:null,props:a}}function cp(t,e){return Pn(t.type,e,t.props)}function tu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wn}function rp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Qo=/\/+/g;function Jn(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rp(""+t.key):e.toString(36)}function dp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Fn,Fn):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function va(t,e,a,l,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(n){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case Wn:case P0:u=!0;break;case Ko:return u=t._init,va(u(t._payload),e,a,l,i)}}if(u)return i=i(t),u=l===""?"."+Jn(t,0):l,Zo(i)?(a="",u!=null&&(a=u.replace(Qo,"$&/")+"/"),va(i,e,a,"",function(r){return r})):i!=null&&(tu(i)&&(i=cp(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Qo,"$&/")+"/")+u)),e.push(i)),1;u=0;var f=l===""?".":l+":";if(Zo(t))for(var o=0;o<t.length;o++)l=t[o],n=f+Jn(l,o),u+=va(l,e,a,n,i);else if(o=sp(t),typeof o=="function")for(t=o.call(t),o=0;!(l=t.next()).done;)l=l.value,n=f+Jn(l,o++),u+=va(l,e,a,n,i);else if(n==="object"){if(typeof t.then=="function")return va(dp(t),e,a,l,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function pi(t,e,a){if(t==null)return t;var l=[],i=0;return va(t,l,"","",function(n){return e.call(a,n,i++)}),l}function pp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hp={map:pi,forEach:function(t,e,a){pi(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return pi(t,function(){e++}),e},toArray:function(t){return pi(t,function(e){return e})||[]},only:function(t){if(!tu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Activity=op;z.Children=hp;z.Component=xa;z.Fragment=tp;z.Profiler=ap;z.PureComponent=$n;z.StrictMode=ep;z.Suspense=up;z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X;z.__COMPILER_RUNTIME={__proto__:null,c:function(t){return X.H.useMemoCache(t)}};z.cache=function(t){return function(){return t.apply(null,arguments)}};z.cacheSignal=function(){return null};z.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var l=Fo({},t.props),i=t.key;if(e!=null)for(n in e.key!==void 0&&(i=""+e.key),e)!Io.call(e,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&e.ref===void 0||(l[n]=e[n]);var n=arguments.length-2;if(n===1)l.children=a;else if(1<n){for(var u=Array(n),f=0;f<n;f++)u[f]=arguments[f+2];l.children=u}return Pn(t.type,i,l)};z.createContext=function(t){return t={$$typeof:ip,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:lp,_context:t},t};z.createElement=function(t,e,a){var l,i={},n=null;if(e!=null)for(l in e.key!==void 0&&(n=""+e.key),e)Io.call(e,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(i[l]=e[l]);var u=arguments.length-2;if(u===1)i.children=a;else if(1<u){for(var f=Array(u),o=0;o<u;o++)f[o]=arguments[o+2];i.children=f}if(t&&t.defaultProps)for(l in u=t.defaultProps,u)i[l]===void 0&&(i[l]=u[l]);return Pn(t,n,i)};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:np,render:t}};z.isValidElement=tu;z.lazy=function(t){return{$$typeof:Ko,_payload:{_status:-1,_result:t},_init:pp}};z.memo=function(t,e){return{$$typeof:fp,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=X.T,a={};X.T=a;try{var l=t(),i=X.S;i!==null&&i(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Fn,Vo)}catch(n){Vo(n)}finally{e!==null&&a.types!==null&&(e.types=a.types),X.T=e}};z.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()};z.use=function(t){return X.H.use(t)};z.useActionState=function(t,e,a){return X.H.useActionState(t,e,a)};z.useCallback=function(t,e){return X.H.useCallback(t,e)};z.useContext=function(t){return X.H.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t,e){return X.H.useDeferredValue(t,e)};z.useEffect=function(t,e){return X.H.useEffect(t,e)};z.useEffectEvent=function(t){return X.H.useEffectEvent(t)};z.useId=function(){return X.H.useId()};z.useImperativeHandle=function(t,e,a){return X.H.useImperativeHandle(t,e,a)};z.useInsertionEffect=function(t,e){return X.H.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return X.H.useLayoutEffect(t,e)};z.useMemo=function(t,e){return X.H.useMemo(t,e)};z.useOptimistic=function(t,e){return X.H.useOptimistic(t,e)};z.useReducer=function(t,e,a){return X.H.useReducer(t,e,a)};z.useRef=function(t){return X.H.useRef(t)};z.useState=function(t){return X.H.useState(t)};z.useSyncExternalStore=function(t,e,a){return X.H.useSyncExternalStore(t,e,a)};z.useTransition=function(){return X.H.useTransition()};z.version="19.2.8"});var hi=ze((ag,ts)=>{"use strict";ts.exports=Po()});var cs=ze(K=>{"use strict";function iu(t,e){var a=t.length;t.push(e);t:for(;0<a;){var l=a-1>>>1,i=t[l];if(0<gi(i,e))t[l]=e,t[a]=i,a=l;else break t}}function Wt(t){return t.length===0?null:t[0]}function mi(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;t:for(var l=0,i=t.length,n=i>>>1;l<n;){var u=2*(l+1)-1,f=t[u],o=u+1,r=t[o];if(0>gi(f,a))o<i&&0>gi(r,f)?(t[l]=r,t[o]=a,l=o):(t[l]=f,t[u]=a,l=u);else if(o<i&&0>gi(r,a))t[l]=r,t[o]=a,l=o;else break t}}return e}function gi(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}K.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(es=performance,K.unstable_now=function(){return es.now()}):(eu=Date,as=eu.now(),K.unstable_now=function(){return eu.now()-as});var es,eu,as,le=[],Me=[],gp=1,Ht=null,ht=3,nu=!1,dl=!1,pl=!1,uu=!1,ns=typeof setTimeout=="function"?setTimeout:null,us=typeof clearTimeout=="function"?clearTimeout:null,ls=typeof setImmediate!="undefined"?setImmediate:null;function bi(t){for(var e=Wt(Me);e!==null;){if(e.callback===null)mi(Me);else if(e.startTime<=t)mi(Me),e.sortIndex=e.expirationTime,iu(le,e);else break;e=Wt(Me)}}function fu(t){if(pl=!1,bi(t),!dl)if(Wt(le)!==null)dl=!0,wa||(wa=!0,Sa());else{var e=Wt(Me);e!==null&&ou(fu,e.startTime-t)}}var wa=!1,hl=-1,fs=5,os=-1;function ss(){return uu?!0:!(K.unstable_now()-os<fs)}function au(){if(uu=!1,wa){var t=K.unstable_now();os=t;var e=!0;try{t:{dl=!1,pl&&(pl=!1,us(hl),hl=-1),nu=!0;var a=ht;try{e:{for(bi(t),Ht=Wt(le);Ht!==null&&!(Ht.expirationTime>t&&ss());){var l=Ht.callback;if(typeof l=="function"){Ht.callback=null,ht=Ht.priorityLevel;var i=l(Ht.expirationTime<=t);if(t=K.unstable_now(),typeof i=="function"){Ht.callback=i,bi(t),e=!0;break e}Ht===Wt(le)&&mi(le),bi(t)}else mi(le);Ht=Wt(le)}if(Ht!==null)e=!0;else{var n=Wt(Me);n!==null&&ou(fu,n.startTime-t),e=!1}}break t}finally{Ht=null,ht=a,nu=!1}e=void 0}}finally{e?Sa():wa=!1}}}var Sa;typeof ls=="function"?Sa=function(){ls(au)}:typeof MessageChannel!="undefined"?(lu=new MessageChannel,is=lu.port2,lu.port1.onmessage=au,Sa=function(){is.postMessage(null)}):Sa=function(){ns(au,0)};var lu,is;function ou(t,e){hl=ns(function(){t(K.unstable_now())},e)}K.unstable_IdlePriority=5;K.unstable_ImmediatePriority=1;K.unstable_LowPriority=4;K.unstable_NormalPriority=3;K.unstable_Profiling=null;K.unstable_UserBlockingPriority=2;K.unstable_cancelCallback=function(t){t.callback=null};K.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fs=0<t?Math.floor(1e3/t):5};K.unstable_getCurrentPriorityLevel=function(){return ht};K.unstable_next=function(t){switch(ht){case 1:case 2:case 3:var e=3;break;default:e=ht}var a=ht;ht=e;try{return t()}finally{ht=a}};K.unstable_requestPaint=function(){uu=!0};K.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ht;ht=t;try{return e()}finally{ht=a}};K.unstable_scheduleCallback=function(t,e,a){var l=K.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?l+a:l):a=l,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:gp++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>l?(t.sortIndex=a,iu(Me,t),Wt(le)===null&&t===Wt(Me)&&(pl?(us(hl),hl=-1):pl=!0,ou(fu,a-l))):(t.sortIndex=i,iu(le,t),dl||nu||(dl=!0,wa||(wa=!0,Sa()))),t};K.unstable_shouldYield=ss;K.unstable_wrapCallback=function(t){var e=ht;return function(){var a=ht;ht=e;try{return t.apply(this,arguments)}finally{ht=a}}}});var ds=ze((ig,rs)=>{"use strict";rs.exports=cs()});var hs=ze(bt=>{"use strict";var bp=hi();function ps(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ke(){}var gt={d:{f:ke,r:function(){throw Error(ps(522))},D:ke,C:ke,L:ke,m:ke,X:ke,S:ke,M:ke},p:0,findDOMNode:null},mp=Symbol.for("react.portal");function yp(t,e,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mp,key:l==null?null:""+l,children:t,containerInfo:e,implementation:a}}var gl=bp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function yi(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gt;bt.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(ps(299));return yp(t,e,null,a)};bt.flushSync=function(t){var e=gl.T,a=gt.p;try{if(gl.T=null,gt.p=2,t)return t()}finally{gl.T=e,gt.p=a,gt.d.f()}};bt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,gt.d.C(t,e))};bt.prefetchDNS=function(t){typeof t=="string"&&gt.d.D(t)};bt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,l=yi(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,n=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?gt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:l,integrity:i,fetchPriority:n}):a==="script"&&gt.d.X(t,{crossOrigin:l,integrity:i,fetchPriority:n,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};bt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=yi(e.as,e.crossOrigin);gt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&gt.d.M(t)};bt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,l=yi(a,e.crossOrigin);gt.d.L(t,a,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};bt.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=yi(e.as,e.crossOrigin);gt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else gt.d.m(t)};bt.requestFormReset=function(t){gt.d.r(t)};bt.unstable_batchedUpdates=function(t,e){return t(e)};bt.useFormState=function(t,e,a){return gl.H.useFormState(t,e,a)};bt.useFormStatus=function(){return gl.H.useHostTransitionStatus()};bt.version="19.2.8"});var ms=ze((ug,bs)=>{"use strict";function gs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gs)}catch(t){console.error(t)}}gs(),bs.exports=hs()});var A0=ze(Zn=>{"use strict";var nt=ds(),Xc=hi(),vp=ms();function y(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ei(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function Qc(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vc(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ys(t){if(ei(t)!==t)throw Error(y(188))}function xp(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(y(188));return e!==t?null:t}for(var a=t,l=e;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return ys(i),t;if(n===l)return ys(i),e;n=n.sibling}throw Error(y(188))}if(a.return!==l.return)a=i,l=n;else{for(var u=!1,f=i.child;f;){if(f===a){u=!0,a=i,l=n;break}if(f===l){u=!0,l=i,a=n;break}f=f.sibling}if(!u){for(f=n.child;f;){if(f===a){u=!0,a=n,l=i;break}if(f===l){u=!0,l=n,a=i;break}f=f.sibling}if(!u)throw Error(y(189))}}if(a.alternate!==l)throw Error(y(190))}if(a.tag!==3)throw Error(y(188));return a.stateNode.current===a?t:e}function Kc(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Kc(t),e!==null)return e;t=t.sibling}return null}var V=Object.assign,Sp=Symbol.for("react.element"),vi=Symbol.for("react.transitional.element"),Tl=Symbol.for("react.portal"),Ca=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),Fc=Symbol.for("react.consumer"),re=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),Zu=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Qu=Symbol.for("react.activity"),wp=Symbol.for("react.memo_cache_sentinel"),vs=Symbol.iterator;function bl(t){return t===null||typeof t!="object"?null:(t=vs&&t[vs]||t["@@iterator"],typeof t=="function"?t:null)}var Tp=Symbol.for("react.client.reference");function Vu(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ca:return"Fragment";case Yu:return"Profiler";case Jc:return"StrictMode";case Xu:return"Suspense";case Zu:return"SuspenseList";case Qu:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Tl:return"Portal";case re:return t.displayName||"Context";case Fc:return(t._context.displayName||"Context")+".Consumer";case Gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case Ee:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}var zl=Array.isArray,T=Xc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=vp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ia={pending:!1,data:null,method:null,action:null},Ku=[],Aa=-1;function ee(t){return{current:t}}function ot(t){0>Aa||(t.current=Ku[Aa],Ku[Aa]=null,Aa--)}function Y(t,e){Aa++,Ku[Aa]=t.current,t.current=e}var te=ee(null),Ll=ee(null),Ge=ee(null),Ii=ee(null);function Pi(t,e){switch(Y(Ge,e),Y(Ll,t),Y(te,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?kc(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=kc(e),t=g0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ot(te),Y(te,t)}function Ka(){ot(te),ot(Ll),ot(Ge)}function Ju(t){t.memoizedState!==null&&Y(Ii,t);var e=te.current,a=g0(e,t.type);e!==a&&(Y(Ll,t),Y(te,a))}function tn(t){Ll.current===t&&(ot(te),ot(Ll)),Ii.current===t&&(ot(Ii),Il._currentValue=ia)}var su,xs;function ta(t){if(su===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||"",xs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+su+t+xs}var cu=!1;function ru(t,e){if(!t||cu)return"";cu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(h){var d=h}Reflect.construct(t,[],g)}else{try{g.call()}catch(h){d=h}t.call(g.prototype)}}else{try{throw Error()}catch(h){d=h}(g=t())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(h){if(h&&d&&typeof h.stack=="string")return[h.stack,d.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),u=n[0],f=n[1];if(u&&f){var o=u.split(`
`),r=f.split(`
`);for(i=l=0;l<o.length&&!o[l].includes("DetermineComponentFrameRoot");)l++;for(;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;if(l===o.length||i===r.length)for(l=o.length-1,i=r.length-1;1<=l&&0<=i&&o[l]!==r[i];)i--;for(;1<=l&&0<=i;l--,i--)if(o[l]!==r[i]){if(l!==1||i!==1)do if(l--,i--,0>i||o[l]!==r[i]){var b=`
`+o[l].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=l&&0<=i);break}}}finally{cu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ta(a):""}function zp(t,e){switch(t.tag){case 26:case 27:case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return t.child!==e&&e!==null?ta("Suspense Fallback"):ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return ru(t.type,!1);case 11:return ru(t.type.render,!1);case 1:return ru(t.type,!0);case 31:return ta("Activity");default:return""}}function Ss(t){try{var e="",a=null;do e+=zp(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Fu=Object.prototype.hasOwnProperty,qf=nt.unstable_scheduleCallback,du=nt.unstable_cancelCallback,Mp=nt.unstable_shouldYield,kp=nt.unstable_requestPaint,At=nt.unstable_now,Ep=nt.unstable_getCurrentPriorityLevel,Wc=nt.unstable_ImmediatePriority,$c=nt.unstable_UserBlockingPriority,en=nt.unstable_NormalPriority,Cp=nt.unstable_LowPriority,Ic=nt.unstable_IdlePriority,Ap=nt.log,Op=nt.unstable_setDisableYieldValue,ai=null,Ot=null;function Be(t){if(typeof Ap=="function"&&Op(t),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(ai,t)}catch{}}var _t=Math.clz32?Math.clz32:Bp,_p=Math.log,Dp=Math.LN2;function Bp(t){return t>>>=0,t===0?32:31-(_p(t)/Dp|0)|0}var xi=256,Si=262144,wi=4194304;function ea(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cn(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var i=0,n=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var f=l&134217727;return f!==0?(l=f&~n,l!==0?i=ea(l):(u&=f,u!==0?i=ea(u):a||(a=f&~t,a!==0&&(i=ea(a))))):(f=l&~n,f!==0?i=ea(f):u!==0?i=ea(u):a||(a=l&~t,a!==0&&(i=ea(a)))),i===0?0:e!==0&&e!==i&&(e&n)===0&&(n=i&-i,a=e&-e,n>=a||n===32&&(a&4194048)!==0)?e:i}function li(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Rp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pc(){var t=wi;return wi<<=1,(wi&62914560)===0&&(wi=4194304),t}function pu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function ii(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Np(t,e,a,l,i,n){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var f=t.entanglements,o=t.expirationTimes,r=t.hiddenUpdates;for(a=u&~a;0<a;){var b=31-_t(a),g=1<<b;f[b]=0,o[b]=-1;var d=r[b];if(d!==null)for(r[b]=null,b=0;b<d.length;b++){var h=d[b];h!==null&&(h.lane&=-536870913)}a&=~g}l!==0&&tr(t,l,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(u&~e))}function tr(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-_t(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function er(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-_t(a),i=1<<l;i&e|t[l]&e&&(t[l]|=e),a&=~i}}function ar(t,e){var a=e&-e;return a=(a&42)!==0?1:Lf(a),(a&(t.suspendedLanes|e))!==0?0:a}function Lf(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Yf(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function lr(){var t=N.p;return t!==0?t:(t=window.event,t===void 0?32:k0(t.type))}function ws(t,e){var a=N.p;try{return N.p=t,e()}finally{N.p=a}}var $e=Math.random().toString(36).slice(2),ct="__reactFiber$"+$e,Tt="__reactProps$"+$e,il="__reactContainer$"+$e,Wu="__reactEvents$"+$e,Hp="__reactListeners$"+$e,Up="__reactHandles$"+$e,Ts="__reactResources$"+$e,ni="__reactMarker$"+$e;function Xf(t){delete t[ct],delete t[Tt],delete t[Wu],delete t[Hp],delete t[Up]}function Oa(t){var e=t[ct];if(e)return e;for(var a=t.parentNode;a;){if(e=a[il]||a[ct]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=_c(t);t!==null;){if(a=t[ct])return a;t=_c(t)}return e}t=a,a=t.parentNode}return null}function nl(t){if(t=t[ct]||t[il]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ml(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(y(33))}function qa(t){var e=t[Ts];return e||(e=t[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ft(t){t[ni]=!0}var ir=new Set,nr={};function ha(t,e){Ja(t,e),Ja(t+"Capture",e)}function Ja(t,e){for(nr[t]=e,t=0;t<e.length;t++)ir.add(e[t])}var Gp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zs={},Ms={};function jp(t){return Fu.call(Ms,t)?!0:Fu.call(zs,t)?!1:Gp.test(t)?Ms[t]=!0:(zs[t]=!0,!1)}function Ui(t,e,a){if(jp(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Ti(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ie(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function Gt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ur(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qp(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l!="undefined"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(u){a=""+u,n.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $u(t){if(!t._valueTracker){var e=ur(t)?"checked":"value";t._valueTracker=qp(t,e,""+t[e])}}function fr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=ur(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function an(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lp=/[\n"\\]/g;function Lt(t){return t.replace(Lp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Iu(t,e,a,l,i,n,u,f){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Gt(e)):t.value!==""+Gt(e)&&(t.value=""+Gt(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Pu(t,u,Gt(e)):a!=null?Pu(t,u,Gt(a)):l!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+Gt(f):t.removeAttribute("name")}function or(t,e,a,l,i,n,u,f){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||e!=null)){$u(t);return}a=a!=null?""+Gt(a):"",e=e!=null?""+Gt(e):a,f||e===t.value||(t.value=e),t.defaultValue=e}l=l!=null?l:i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=f?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),$u(t)}function Pu(t,e,a){e==="number"&&an(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function La(t,e,a,l){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Gt(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,l&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sr(t,e,a){if(e!=null&&(e=""+Gt(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Gt(a):""}function cr(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(y(92));if(zl(l)){if(1<l.length)throw Error(y(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Gt(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),$u(t)}function Fa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Yp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ks(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Yp.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function rr(t,e,a){if(e!=null&&typeof e!="object")throw Error(y(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var i in e)l=e[i],e.hasOwnProperty(i)&&a[i]!==l&&ks(t,i,l)}else for(var n in e)e.hasOwnProperty(n)&&ks(t,n,e[n])}function Zf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gi(t){return Zp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function de(){}var tf=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _a=null,Ya=null;function Es(t){var e=nl(t);if(e&&(t=e.stateNode)){var a=t[Tt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Iu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Lt(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var i=l[Tt]||null;if(!i)throw Error(y(90));Iu(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&fr(l)}break t;case"textarea":sr(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&La(t,!!a.multiple,e,!1)}}}var hu=!1;function dr(t,e,a){if(hu)return t(e,a);hu=!0;try{var l=t(e);return l}finally{if(hu=!1,(_a!==null||Ya!==null)&&(qn(),_a&&(e=_a,t=Ya,Ya=_a=null,Es(e),t)))for(e=0;e<t.length;e++)Es(t[e])}}function Yl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(y(231,e,typeof a));return a}var me=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ef=!1;if(me)try{Ta={},Object.defineProperty(Ta,"passive",{get:function(){ef=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{ef=!1}var Ta,Re=null,Vf=null,ji=null;function pr(){if(ji)return ji;var t,e=Vf,a=e.length,l,i="value"in Re?Re.value:Re.textContent,n=i.length;for(t=0;t<a&&e[t]===i[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===i[n-l];l++);return ji=i.slice(t,1<l?1-l:void 0)}function qi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zi(){return!0}function Cs(){return!1}function zt(t){function e(a,l,i,n,u){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(a=t[f],this[f]=a?a(n):n[f]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?zi:Cs,this.isPropagationStopped=Cs,this}return V(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=zt(ga),ui=V({},ga,{view:0,detail:0}),Qp=zt(ui),gu,bu,ml,On=V({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ml&&(ml&&t.type==="mousemove"?(gu=t.screenX-ml.screenX,bu=t.screenY-ml.screenY):bu=gu=0,ml=t),gu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),As=zt(On),Vp=V({},On,{dataTransfer:0}),Kp=zt(Vp),Jp=V({},ui,{relatedTarget:0}),mu=zt(Jp),Fp=V({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Wp=zt(Fp),$p=V({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ip=zt($p),Pp=V({},ga,{data:0}),Os=zt(Pp),t1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a1[t])?!!e[t]:!1}function Kf(){return l1}var i1=V({},ui,{key:function(t){if(t.key){var e=t1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kf,charCode:function(t){return t.type==="keypress"?qi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),n1=zt(i1),u1=V({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=zt(u1),f1=V({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kf}),o1=zt(f1),s1=V({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),c1=zt(s1),r1=V({},On,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),d1=zt(r1),p1=V({},ga,{newState:0,oldState:0}),h1=zt(p1),g1=[9,13,27,32],Jf=me&&"CompositionEvent"in window,Cl=null;me&&"documentMode"in document&&(Cl=document.documentMode);var b1=me&&"TextEvent"in window&&!Cl,hr=me&&(!Jf||Cl&&8<Cl&&11>=Cl),Ds=" ",Bs=!1;function gr(t,e){switch(t){case"keyup":return g1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function br(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Da=!1;function m1(t,e){switch(t){case"compositionend":return br(e);case"keypress":return e.which!==32?null:(Bs=!0,Ds);case"textInput":return t=e.data,t===Ds&&Bs?null:t;default:return null}}function y1(t,e){if(Da)return t==="compositionend"||!Jf&&gr(t,e)?(t=pr(),ji=Vf=Re=null,Da=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hr&&e.locale!=="ko"?null:e.data;default:return null}}var v1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v1[t.type]:e==="textarea"}function mr(t,e,a,l){_a?Ya?Ya.push(l):Ya=[l]:_a=l,e=Sn(e,"onChange"),0<e.length&&(a=new An("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Al=null,Xl=null;function x1(t){d0(t,0)}function _n(t){var e=Ml(t);if(fr(e))return t}function Ns(t,e){if(t==="change")return e}var yr=!1;me&&(me?(ki="oninput"in document,ki||(yu=document.createElement("div"),yu.setAttribute("oninput","return;"),ki=typeof yu.oninput=="function"),Mi=ki):Mi=!1,yr=Mi&&(!document.documentMode||9<document.documentMode));var Mi,ki,yu;function Hs(){Al&&(Al.detachEvent("onpropertychange",vr),Xl=Al=null)}function vr(t){if(t.propertyName==="value"&&_n(Xl)){var e=[];mr(e,Xl,t,Qf(t)),dr(x1,e)}}function S1(t,e,a){t==="focusin"?(Hs(),Al=e,Xl=a,Al.attachEvent("onpropertychange",vr)):t==="focusout"&&Hs()}function w1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _n(Xl)}function T1(t,e){if(t==="click")return _n(e)}function z1(t,e){if(t==="input"||t==="change")return _n(e)}function M1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:M1;function Zl(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Fu.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function Us(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gs(t,e){var a=Us(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Us(a)}}function xr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=an(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=an(t.document)}return e}function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var k1=me&&"documentMode"in document&&11>=document.documentMode,Ba=null,af=null,Ol=null,lf=!1;function js(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lf||Ba==null||Ba!==an(l)||(l=Ba,"selectionStart"in l&&Ff(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Zl(Ol,l)||(Ol=l,l=Sn(af,"onSelect"),0<l.length&&(e=new An("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Ba)))}function Pe(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ra={animationend:Pe("Animation","AnimationEnd"),animationiteration:Pe("Animation","AnimationIteration"),animationstart:Pe("Animation","AnimationStart"),transitionrun:Pe("Transition","TransitionRun"),transitionstart:Pe("Transition","TransitionStart"),transitioncancel:Pe("Transition","TransitionCancel"),transitionend:Pe("Transition","TransitionEnd")},vu={},wr={};me&&(wr=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function ba(t){if(vu[t])return vu[t];if(!Ra[t])return t;var e=Ra[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in wr)return vu[t]=e[a];return t}var Tr=ba("animationend"),zr=ba("animationiteration"),Mr=ba("animationstart"),E1=ba("transitionrun"),C1=ba("transitionstart"),A1=ba("transitioncancel"),kr=ba("transitionend"),Er=new Map,nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nf.push("scrollEnd");function Ft(t,e){Er.set(t,e),ha(e,[t])}var ln=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ut=[],Na=0,Wf=0;function Dn(){for(var t=Na,e=Wf=Na=0;e<t;){var a=Ut[e];Ut[e++]=null;var l=Ut[e];Ut[e++]=null;var i=Ut[e];Ut[e++]=null;var n=Ut[e];if(Ut[e++]=null,l!==null&&i!==null){var u=l.pending;u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i}n!==0&&Cr(a,i,n)}}function Bn(t,e,a,l){Ut[Na++]=t,Ut[Na++]=e,Ut[Na++]=a,Ut[Na++]=l,Wf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function $f(t,e,a,l){return Bn(t,e,a,l),nn(t)}function ma(t,e){return Bn(t,null,null,e),nn(t)}function Cr(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var i=!1,n=t.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&e!==null&&(i=31-_t(a),t=n.hiddenUpdates,l=t[i],l===null?t[i]=[e]:l.push(e),e.lane=a|536870912),n):null}function nn(t){if(50<jl)throw jl=0,kf=null,Error(y(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ha={};function O1(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,a,l){return new O1(t,e,a,l)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function he(t,e){var a=t.alternate;return a===null?(a=Et(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ar(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Li(t,e,a,l,i,n){var u=0;if(l=t,typeof t=="function")If(t)&&(u=1);else if(typeof t=="string")u=Bh(t,a,te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Qu:return t=Et(31,a,e,i),t.elementType=Qu,t.lanes=n,t;case Ca:return na(a.children,i,n,e);case Jc:u=8,i|=24;break;case Yu:return t=Et(12,a,e,i|2),t.elementType=Yu,t.lanes=n,t;case Xu:return t=Et(13,a,e,i),t.elementType=Xu,t.lanes=n,t;case Zu:return t=Et(19,a,e,i),t.elementType=Zu,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case re:u=10;break t;case Fc:u=9;break t;case Gf:u=11;break t;case jf:u=14;break t;case Ee:u=16,l=null;break t}u=29,a=Error(y(130,t===null?"null":typeof t,"")),l=null}return e=Et(u,a,e,i),e.elementType=t,e.type=l,e.lanes=n,e}function na(t,e,a,l){return t=Et(7,t,l,e),t.lanes=a,t}function xu(t,e,a){return t=Et(6,t,null,e),t.lanes=a,t}function Or(t){var e=Et(18,null,null,0);return e.stateNode=t,e}function Su(t,e,a){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var qs=new WeakMap;function Yt(t,e){if(typeof t=="object"&&t!==null){var a=qs.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Ss(e)},qs.set(t,e),e)}return{value:t,source:e,stack:Ss(e)}}var Ua=[],Ga=0,un=null,Ql=0,jt=[],qt=0,Ke=null,$t=1,It="";function se(t,e){Ua[Ga++]=Ql,Ua[Ga++]=un,un=t,Ql=e}function _r(t,e,a){jt[qt++]=$t,jt[qt++]=It,jt[qt++]=Ke,Ke=t;var l=$t;t=It;var i=32-_t(l)-1;l&=~(1<<i),a+=1;var n=32-_t(e)+i;if(30<n){var u=i-i%5;n=(l&(1<<u)-1).toString(32),l>>=u,i-=u,$t=1<<32-_t(e)+i|a<<i|l,It=n+t}else $t=1<<n|a<<i|l,It=t}function Pf(t){t.return!==null&&(se(t,1),_r(t,1,0))}function to(t){for(;t===un;)un=Ua[--Ga],Ua[Ga]=null,Ql=Ua[--Ga],Ua[Ga]=null;for(;t===Ke;)Ke=jt[--qt],jt[qt]=null,It=jt[--qt],jt[qt]=null,$t=jt[--qt],jt[qt]=null}function Dr(t,e){jt[qt++]=$t,jt[qt++]=It,jt[qt++]=Ke,$t=e.id,It=e.overflow,Ke=t}var rt=null,Q=null,_=!1,je=null,Xt=!1,uf=Error(y(519));function Je(t){var e=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(Yt(e,t)),uf}function Ls(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[ct]=t,e[Tt]=l,a){case"dialog":E("cancel",e),E("close",e);break;case"iframe":case"object":case"embed":E("load",e);break;case"video":case"audio":for(a=0;a<Wl.length;a++)E(Wl[a],e);break;case"source":E("error",e);break;case"img":case"image":case"link":E("error",e),E("load",e);break;case"details":E("toggle",e);break;case"input":E("invalid",e),or(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":E("invalid",e);break;case"textarea":E("invalid",e),cr(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||h0(e.textContent,a)?(l.popover!=null&&(E("beforetoggle",e),E("toggle",e)),l.onScroll!=null&&E("scroll",e),l.onScrollEnd!=null&&E("scrollend",e),l.onClick!=null&&(e.onclick=de),e=!0):e=!1,e||Je(t,!0)}function Ys(t){for(rt=t.return;rt;)switch(rt.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:rt=rt.return}}function za(t){if(t!==rt)return!1;if(!_)return Ys(t),_=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||_f(t.type,t.memoizedProps)),a=!a),a&&Q&&Je(t),Ys(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));Q=Oc(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));Q=Oc(t)}else e===27?(e=Q,Ie(t.type)?(t=Nf,Nf=null,Q=t):Q=e):Q=rt?Qt(t.stateNode.nextSibling):null;return!0}function sa(){Q=rt=null,_=!1}function wu(){var t=je;return t!==null&&(St===null?St=t:St.push.apply(St,t),je=null),t}function Vl(t){je===null?je=[t]:je.push(t)}var ff=ee(null),ya=null,pe=null;function Ae(t,e,a){Y(ff,e._currentValue),e._currentValue=a}function ge(t){t._currentValue=ff.current,ot(ff)}function of(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function sf(t,e,a,l){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;t:for(;n!==null;){var f=n;n=i;for(var o=0;o<e.length;o++)if(f.context===e[o]){n.lanes|=a,f=n.alternate,f!==null&&(f.lanes|=a),of(n.return,a,t),l||(u=null);break t}n=f.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(y(341));u.lanes|=a,n=u.alternate,n!==null&&(n.lanes|=a),of(u,a,t),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function ul(t,e,a,l){t=null;for(var i=e,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(y(387));if(u=u.memoizedProps,u!==null){var f=i.type;Bt(i.pendingProps.value,u.value)||(t!==null?t.push(f):t=[f])}}else if(i===Ii.current){if(u=i.alternate,u===null)throw Error(y(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Il):t=[Il])}i=i.return}t!==null&&sf(e,t,a,l),e.flags|=262144}function fn(t){for(t=t.firstContext;t!==null;){if(!Bt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ca(t){ya=t,pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dt(t){return Br(ya,t)}function Ei(t,e){return ya===null&&ca(t),Br(t,e)}function Br(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},pe===null){if(t===null)throw Error(y(308));pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else pe=pe.next=e;return a}var _1=typeof AbortController!="undefined"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},D1=nt.unstable_scheduleCallback,B1=nt.unstable_NormalPriority,et={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eo(){return{controller:new _1,data:new Map,refCount:0}}function fi(t){t.refCount--,t.refCount===0&&D1(B1,function(){t.controller.abort()})}var _l=null,cf=0,Wa=0,Xa=null;function R1(t,e){if(_l===null){var a=_l=[];cf=0,Wa=Eo(),Xa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return cf++,e.then(Xs,Xs),e}function Xs(){if(--cf===0&&_l!==null){Xa!==null&&(Xa.status="fulfilled");var t=_l;_l=null,Wa=0,Xa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function N1(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Zs=T.S;T.S=function(t,e){Kd=At(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&R1(t,e),Zs!==null&&Zs(t,e)};var ua=ee(null);function ao(){var t=ua.current;return t!==null?t:L.pooledCache}function Yi(t,e){e===null?Y(ua,ua.current):Y(ua,e.pool)}function Rr(){var t=ao();return t===null?null:{parent:et._currentValue,pool:t}}var fl=Error(y(460)),lo=Error(y(474)),Rn=Error(y(542)),on={then:function(){}};function Qs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nr(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(de,de),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ks(t),t;default:if(typeof e.status=="string")e.then(de,de);else{if(t=L,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=l}},function(l){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ks(t),t}throw fa=e,fl}}function aa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fa=a,fl):a}}var fa=null;function Vs(){if(fa===null)throw Error(y(459));var t=fa;return fa=null,t}function Ks(t){if(t===fl||t===Rn)throw Error(y(483))}var Za=null,Kl=0;function Ci(t){var e=Kl;return Kl+=1,Za===null&&(Za=[]),Nr(Za,t,e)}function yl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ai(t,e){throw e.$$typeof===Sp?Error(y(525)):(t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Hr(t){function e(c,s){if(t){var p=c.deletions;p===null?(c.deletions=[s],c.flags|=16):p.push(s)}}function a(c,s){if(!t)return null;for(;s!==null;)e(c,s),s=s.sibling;return null}function l(c){for(var s=new Map;c!==null;)c.key!==null?s.set(c.key,c):s.set(c.index,c),c=c.sibling;return s}function i(c,s){return c=he(c,s),c.index=0,c.sibling=null,c}function n(c,s,p){return c.index=p,t?(p=c.alternate,p!==null?(p=p.index,p<s?(c.flags|=67108866,s):p):(c.flags|=67108866,s)):(c.flags|=1048576,s)}function u(c){return t&&c.alternate===null&&(c.flags|=67108866),c}function f(c,s,p,m){return s===null||s.tag!==6?(s=xu(p,c.mode,m),s.return=c,s):(s=i(s,p),s.return=c,s)}function o(c,s,p,m){var S=p.type;return S===Ca?b(c,s,p.props.children,m,p.key):s!==null&&(s.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ee&&aa(S)===s.type)?(s=i(s,p.props),yl(s,p),s.return=c,s):(s=Li(p.type,p.key,p.props,null,c.mode,m),yl(s,p),s.return=c,s)}function r(c,s,p,m){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=Su(p,c.mode,m),s.return=c,s):(s=i(s,p.children||[]),s.return=c,s)}function b(c,s,p,m,S){return s===null||s.tag!==7?(s=na(p,c.mode,m,S),s.return=c,s):(s=i(s,p),s.return=c,s)}function g(c,s,p){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=xu(""+s,c.mode,p),s.return=c,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case vi:return p=Li(s.type,s.key,s.props,null,c.mode,p),yl(p,s),p.return=c,p;case Tl:return s=Su(s,c.mode,p),s.return=c,s;case Ee:return s=aa(s),g(c,s,p)}if(zl(s)||bl(s))return s=na(s,c.mode,p,null),s.return=c,s;if(typeof s.then=="function")return g(c,Ci(s),p);if(s.$$typeof===re)return g(c,Ei(c,s),p);Ai(c,s)}return null}function d(c,s,p,m){var S=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return S!==null?null:f(c,s,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:return p.key===S?o(c,s,p,m):null;case Tl:return p.key===S?r(c,s,p,m):null;case Ee:return p=aa(p),d(c,s,p,m)}if(zl(p)||bl(p))return S!==null?null:b(c,s,p,m,null);if(typeof p.then=="function")return d(c,s,Ci(p),m);if(p.$$typeof===re)return d(c,s,Ei(c,p),m);Ai(c,p)}return null}function h(c,s,p,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return c=c.get(p)||null,f(s,c,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vi:return c=c.get(m.key===null?p:m.key)||null,o(s,c,m,S);case Tl:return c=c.get(m.key===null?p:m.key)||null,r(s,c,m,S);case Ee:return m=aa(m),h(c,s,p,m,S)}if(zl(m)||bl(m))return c=c.get(p)||null,b(s,c,m,S,null);if(typeof m.then=="function")return h(c,s,p,Ci(m),S);if(m.$$typeof===re)return h(c,s,p,Ei(s,m),S);Ai(s,m)}return null}function v(c,s,p,m){for(var S=null,D=null,x=s,k=s=0,A=null;x!==null&&k<p.length;k++){x.index>k?(A=x,x=null):A=x.sibling;var B=d(c,x,p[k],m);if(B===null){x===null&&(x=A);break}t&&x&&B.alternate===null&&e(c,x),s=n(B,s,k),D===null?S=B:D.sibling=B,D=B,x=A}if(k===p.length)return a(c,x),_&&se(c,k),S;if(x===null){for(;k<p.length;k++)x=g(c,p[k],m),x!==null&&(s=n(x,s,k),D===null?S=x:D.sibling=x,D=x);return _&&se(c,k),S}for(x=l(x);k<p.length;k++)A=h(x,c,k,p[k],m),A!==null&&(t&&A.alternate!==null&&x.delete(A.key===null?k:A.key),s=n(A,s,k),D===null?S=A:D.sibling=A,D=A);return t&&x.forEach(function(Te){return e(c,Te)}),_&&se(c,k),S}function w(c,s,p,m){if(p==null)throw Error(y(151));for(var S=null,D=null,x=s,k=s=0,A=null,B=p.next();x!==null&&!B.done;k++,B=p.next()){x.index>k?(A=x,x=null):A=x.sibling;var Te=d(c,x,B.value,m);if(Te===null){x===null&&(x=A);break}t&&x&&Te.alternate===null&&e(c,x),s=n(Te,s,k),D===null?S=Te:D.sibling=Te,D=Te,x=A}if(B.done)return a(c,x),_&&se(c,k),S;if(x===null){for(;!B.done;k++,B=p.next())B=g(c,B.value,m),B!==null&&(s=n(B,s,k),D===null?S=B:D.sibling=B,D=B);return _&&se(c,k),S}for(x=l(x);!B.done;k++,B=p.next())B=h(x,c,k,B.value,m),B!==null&&(t&&B.alternate!==null&&x.delete(B.key===null?k:B.key),s=n(B,s,k),D===null?S=B:D.sibling=B,D=B);return t&&x.forEach(function(V0){return e(c,V0)}),_&&se(c,k),S}function G(c,s,p,m){if(typeof p=="object"&&p!==null&&p.type===Ca&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:t:{for(var S=p.key;s!==null;){if(s.key===S){if(S=p.type,S===Ca){if(s.tag===7){a(c,s.sibling),m=i(s,p.props.children),m.return=c,c=m;break t}}else if(s.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ee&&aa(S)===s.type){a(c,s.sibling),m=i(s,p.props),yl(m,p),m.return=c,c=m;break t}a(c,s);break}else e(c,s);s=s.sibling}p.type===Ca?(m=na(p.props.children,c.mode,m,p.key),m.return=c,c=m):(m=Li(p.type,p.key,p.props,null,c.mode,m),yl(m,p),m.return=c,c=m)}return u(c);case Tl:t:{for(S=p.key;s!==null;){if(s.key===S)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){a(c,s.sibling),m=i(s,p.children||[]),m.return=c,c=m;break t}else{a(c,s);break}else e(c,s);s=s.sibling}m=Su(p,c.mode,m),m.return=c,c=m}return u(c);case Ee:return p=aa(p),G(c,s,p,m)}if(zl(p))return v(c,s,p,m);if(bl(p)){if(S=bl(p),typeof S!="function")throw Error(y(150));return p=S.call(p),w(c,s,p,m)}if(typeof p.then=="function")return G(c,s,Ci(p),m);if(p.$$typeof===re)return G(c,s,Ei(c,p),m);Ai(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,s!==null&&s.tag===6?(a(c,s.sibling),m=i(s,p),m.return=c,c=m):(a(c,s),m=xu(p,c.mode,m),m.return=c,c=m),u(c)):a(c,s)}return function(c,s,p,m){try{Kl=0;var S=G(c,s,p,m);return Za=null,S}catch(x){if(x===fl||x===Rn)throw x;var D=Et(29,x,null,c.mode);return D.lanes=m,D.return=c,D}}}var ra=Hr(!0),Ur=Hr(!1),Ce=!1;function io(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qe(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Le(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(R&2)!==0){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,e=nn(t),Cr(t,null,a),e}return Bn(t,l,e,a),nn(t)}function Dl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,er(t,a)}}function Tu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,a=a.next}while(a!==null);n===null?i=n=e:n=n.next=e}else i=n=e;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var df=!1;function Bl(){if(df){var t=Xa;if(t!==null)throw t}}function Rl(t,e,a,l){df=!1;var i=t.updateQueue;Ce=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var o=f,r=o.next;o.next=null,u===null?n=r:u.next=r,u=o;var b=t.alternate;b!==null&&(b=b.updateQueue,f=b.lastBaseUpdate,f!==u&&(f===null?b.firstBaseUpdate=r:f.next=r,b.lastBaseUpdate=o))}if(n!==null){var g=i.baseState;u=0,b=r=o=null,f=n;do{var d=f.lane&-536870913,h=d!==f.lane;if(h?(O&d)===d:(l&d)===d){d!==0&&d===Wa&&(df=!0),b!==null&&(b=b.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var v=t,w=f;d=e;var G=a;switch(w.tag){case 1:if(v=w.payload,typeof v=="function"){g=v.call(G,g,d);break t}g=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(G,g,d):v,d==null)break t;g=V({},g,d);break t;case 2:Ce=!0}}d=f.callback,d!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[d]:h.push(d))}else h={lane:d,tag:f.tag,payload:f.payload,callback:f.callback,next:null},b===null?(r=b=h,o=g):b=b.next=h,u|=d;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;h=f,f=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);b===null&&(o=g),i.baseState=o,i.firstBaseUpdate=r,i.lastBaseUpdate=b,n===null&&(i.shared.lanes=0),We|=u,t.lanes=u,t.memoizedState=g}}function Gr(t,e){if(typeof t!="function")throw Error(y(191,t));t.call(e)}function jr(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gr(a[t],e)}var $a=ee(null),sn=ee(0);function Js(t,e){t=Se,Y(sn,t),Y($a,e),Se=t|e.baseLanes}function pf(){Y(sn,Se),Y($a,$a.current)}function no(){Se=sn.current,ot($a),ot(sn)}var Rt=ee(null),Zt=null;function Oe(t){var e=t.alternate;Y($,$.current&1),Y(Rt,t),Zt===null&&(e===null||$a.current!==null||e.memoizedState!==null)&&(Zt=t)}function hf(t){Y($,$.current),Y(Rt,t),Zt===null&&(Zt=t)}function qr(t){t.tag===22?(Y($,$.current),Y(Rt,t),Zt===null&&(Zt=t)):_e(t)}function _e(){Y($,$.current),Y(Rt,Rt.current)}function kt(t){ot(Rt),Zt===t&&(Zt=null),ot($)}var $=ee(0);function cn(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||Rf(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ye=0,M=null,q=null,P=null,rn=!1,Qa=!1,da=!1,dn=0,Jl=0,Va=null,H1=0;function F(){throw Error(y(321))}function uo(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Bt(t[a],e[a]))return!1;return!0}function fo(t,e,a,l,i,n){return ye=n,M=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,T.H=t===null||t.memoizedState===null?md:vo,da=!1,n=a(l,i),da=!1,Qa&&(n=Yr(e,a,l,i)),Lr(t),n}function Lr(t){T.H=Fl;var e=q!==null&&q.next!==null;if(ye=0,P=q=M=null,rn=!1,Jl=0,Va=null,e)throw Error(y(300));t===null||at||(t=t.dependencies,t!==null&&fn(t)&&(at=!0))}function Yr(t,e,a,l){M=t;var i=0;do{if(Qa&&(Va=null),Jl=0,Qa=!1,25<=i)throw Error(y(301));if(i+=1,P=q=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}T.H=yd,n=e(a,l)}while(Qa);return n}function U1(){var t=T.H,e=t.useState()[0];return e=typeof e.then=="function"?oi(e):e,t=t.useState()[0],(q!==null?q.memoizedState:null)!==t&&(M.flags|=1024),e}function oo(){var t=dn!==0;return dn=0,t}function so(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function co(t){if(rn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}rn=!1}ye=0,P=q=M=null,Qa=!1,Jl=dn=0,Va=null}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?M.memoizedState=P=t:P=P.next=t,P}function I(){if(q===null){var t=M.alternate;t=t!==null?t.memoizedState:null}else t=q.next;var e=P===null?M.memoizedState:P.next;if(e!==null)P=e,q=t;else{if(t===null)throw M.alternate===null?Error(y(467)):Error(y(310));q=t,t={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},P===null?M.memoizedState=P=t:P=P.next=t}return P}function Nn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oi(t){var e=Jl;return Jl+=1,Va===null&&(Va=[]),t=Nr(Va,t,e),e=M,(P===null?e.memoizedState:P.next)===null&&(e=e.alternate,T.H=e===null||e.memoizedState===null?md:vo),t}function Hn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oi(t);if(t.$$typeof===re)return dt(t)}throw Error(y(438,String(t)))}function ro(t){var e=null,a=M.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=M.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Nn(),M.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=wp;return e.index++,a}function ve(t,e){return typeof e=="function"?e(t):e}function Xi(t){var e=I();return po(e,q,t)}function po(t,e,a){var l=t.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=a;var i=t.baseQueue,n=l.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}e.baseQueue=i=n,l.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{e=i.next;var f=u=null,o=null,r=e,b=!1;do{var g=r.lane&-536870913;if(g!==r.lane?(O&g)===g:(ye&g)===g){var d=r.revertLane;if(d===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),g===Wa&&(b=!0);else if((ye&d)===d){r=r.next,d===Wa&&(b=!0);continue}else g={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},o===null?(f=o=g,u=n):o=o.next=g,M.lanes|=d,We|=d;g=r.action,da&&a(n,g),n=r.hasEagerState?r.eagerState:a(n,g)}else d={lane:g,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},o===null?(f=o=d,u=n):o=o.next=d,M.lanes|=g,We|=g;r=r.next}while(r!==null&&r!==e);if(o===null?u=n:o.next=f,!Bt(n,t.memoizedState)&&(at=!0,b&&(a=Xa,a!==null)))throw a;t.memoizedState=n,t.baseState=u,t.baseQueue=o,l.lastRenderedState=n}return i===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function zu(t){var e=I(),a=e.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=t;var l=a.dispatch,i=a.pending,n=e.memoizedState;if(i!==null){a.pending=null;var u=i=i.next;do n=t(n,u.action),u=u.next;while(u!==i);Bt(n,e.memoizedState)||(at=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),a.lastRenderedState=n}return[n,l]}function Xr(t,e,a){var l=M,i=I(),n=_;if(n){if(a===void 0)throw Error(y(407));a=a()}else a=e();var u=!Bt((q||i).memoizedState,a);if(u&&(i.memoizedState=a,at=!0),i=i.queue,ho(Vr.bind(null,l,i,t),[t]),i.getSnapshot!==e||u||P!==null&&P.memoizedState.tag&1){if(l.flags|=2048,Ia(9,{destroy:void 0},Qr.bind(null,l,i,a,e),null),L===null)throw Error(y(349));n||(ye&127)!==0||Zr(l,e,a)}return a}function Zr(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=M.updateQueue,e===null?(e=Nn(),M.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Qr(t,e,a,l){e.value=a,e.getSnapshot=l,Kr(e)&&Jr(t)}function Vr(t,e,a){return a(function(){Kr(e)&&Jr(t)})}function Kr(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Bt(t,a)}catch{return!0}}function Jr(t){var e=ma(t,2);e!==null&&wt(e,t,2)}function gf(t){var e=mt();if(typeof t=="function"){var a=t;if(t=a(),da){Be(!0);try{a()}finally{Be(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:t},e}function Fr(t,e,a,l){return t.baseState=a,po(t,q,typeof l=="function"?l:ve)}function G1(t,e,a,l,i){if(Gn(t))throw Error(y(485));if(t=e.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};T.T!==null?a(!0):n.isTransition=!1,l(n),a=e.pending,a===null?(n.next=e.pending=n,Wr(e,n)):(n.next=a.next,e.pending=a.next=n)}}function Wr(t,e){var a=e.action,l=e.payload,i=t.state;if(e.isTransition){var n=T.T,u={};T.T=u;try{var f=a(i,l),o=T.S;o!==null&&o(u,f),Fs(t,e,f)}catch(r){bf(t,e,r)}finally{n!==null&&u.types!==null&&(n.types=u.types),T.T=n}}else try{n=a(i,l),Fs(t,e,n)}catch(r){bf(t,e,r)}}function Fs(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ws(t,e,l)},function(l){return bf(t,e,l)}):Ws(t,e,a)}function Ws(t,e,a){e.status="fulfilled",e.value=a,$r(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Wr(t,a)))}function bf(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,$r(e),e=e.next;while(e!==l)}t.action=null}function $r(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ir(t,e){return e}function $s(t,e){if(_){var a=L.formState;if(a!==null){t:{var l=M;if(_){if(Q){e:{for(var i=Q,n=Xt;i.nodeType!==8;){if(!n){i=null;break e}if(i=Qt(i.nextSibling),i===null){i=null;break e}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){Q=Qt(i.nextSibling),l=i.data==="F!";break t}}Je(l)}l=!1}l&&(e=a[0])}}return a=mt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},a.queue=l,a=hd.bind(null,M,l),l.dispatch=a,l=gf(!1),n=yo.bind(null,M,!1,l.queue),l=mt(),i={state:e,dispatch:null,action:t,pending:null},l.queue=i,a=G1.bind(null,M,i,n,a),i.dispatch=a,l.memoizedState=t,[e,a,!1]}function Is(t){var e=I();return Pr(e,q,t)}function Pr(t,e,a){if(e=po(t,e,Ir)[0],t=Xi(ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=oi(e)}catch(u){throw u===fl?Rn:u}else l=e;e=I();var i=e.queue,n=i.dispatch;return a!==e.memoizedState&&(M.flags|=2048,Ia(9,{destroy:void 0},j1.bind(null,i,a),null)),[l,n,t]}function j1(t,e){t.action=e}function Ps(t){var e=I(),a=q;if(a!==null)return Pr(e,a,t);I(),e=e.memoizedState,a=I();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Ia(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=M.updateQueue,e===null&&(e=Nn(),M.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function td(){return I().memoizedState}function Zi(t,e,a,l){var i=mt();M.flags|=t,i.memoizedState=Ia(1|e,{destroy:void 0},a,l===void 0?null:l)}function Un(t,e,a,l){var i=I();l=l===void 0?null:l;var n=i.memoizedState.inst;q!==null&&l!==null&&uo(l,q.memoizedState.deps)?i.memoizedState=Ia(e,n,a,l):(M.flags|=t,i.memoizedState=Ia(1|e,n,a,l))}function tc(t,e){Zi(8390656,8,t,e)}function ho(t,e){Un(2048,8,t,e)}function q1(t){M.flags|=4;var e=M.updateQueue;if(e===null)e=Nn(),M.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function ed(t){var e=I().memoizedState;return q1({ref:e,nextImpl:t}),function(){if((R&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}function ad(t,e){return Un(4,2,t,e)}function ld(t,e){return Un(4,4,t,e)}function id(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nd(t,e,a){a=a!=null?a.concat([t]):null,Un(4,4,id.bind(null,e,t),a)}function go(){}function ud(t,e){var a=I();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&uo(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function fd(t,e){var a=I();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&uo(e,l[1]))return l[0];if(l=t(),da){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[l,e],l}function bo(t,e,a){return a===void 0||(ye&1073741824)!==0&&(O&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Fd(),M.lanes|=t,We|=t,a)}function od(t,e,a,l){return Bt(a,e)?a:$a.current!==null?(t=bo(t,a,l),Bt(t,e)||(at=!0),t):(ye&42)===0||(ye&1073741824)!==0&&(O&261930)===0?(at=!0,t.memoizedState=a):(t=Fd(),M.lanes|=t,We|=t,e)}function sd(t,e,a,l,i){var n=N.p;N.p=n!==0&&8>n?n:8;var u=T.T,f={};T.T=f,yo(t,!1,e,a);try{var o=i(),r=T.S;if(r!==null&&r(f,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var b=N1(o,l);Nl(t,e,b,Dt(t))}else Nl(t,e,l,Dt(t))}catch(g){Nl(t,e,{then:function(){},status:"rejected",reason:g},Dt())}finally{N.p=n,u!==null&&f.types!==null&&(u.types=f.types),T.T=u}}function L1(){}function mf(t,e,a,l){if(t.tag!==5)throw Error(y(476));var i=cd(t).queue;sd(t,i,e,ia,a===null?L1:function(){return rd(t),a(l)})}function cd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ia,baseState:ia,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:ia},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function rd(t){var e=cd(t);e.next===null&&(e=t.alternate.memoizedState),Nl(t,e.next.queue,{},Dt())}function mo(){return dt(Il)}function dd(){return I().memoizedState}function pd(){return I().memoizedState}function Y1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Dt();t=qe(a);var l=Le(e,t,a);l!==null&&(wt(l,e,a),Dl(l,e,a)),e={cache:eo()},t.payload=e;return}e=e.return}}function X1(t,e,a){var l=Dt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gn(t)?gd(e,a):(a=$f(t,e,a,l),a!==null&&(wt(a,t,l),bd(a,e,l)))}function hd(t,e,a){var l=Dt();Nl(t,e,a,l)}function Nl(t,e,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gn(t))gd(e,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var u=e.lastRenderedState,f=n(u,a);if(i.hasEagerState=!0,i.eagerState=f,Bt(f,u))return Bn(t,e,i,0),L===null&&Dn(),!1}catch{}if(a=$f(t,e,i,l),a!==null)return wt(a,t,l),bd(a,e,l),!0}return!1}function yo(t,e,a,l){if(l={lane:2,revertLane:Eo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gn(t)){if(e)throw Error(y(479))}else e=$f(t,a,l,2),e!==null&&wt(e,t,2)}function Gn(t){var e=t.alternate;return t===M||e!==null&&e===M}function gd(t,e){Qa=rn=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function bd(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,er(t,a)}}var Fl={readContext:dt,use:Hn,useCallback:F,useContext:F,useEffect:F,useImperativeHandle:F,useLayoutEffect:F,useInsertionEffect:F,useMemo:F,useReducer:F,useRef:F,useState:F,useDebugValue:F,useDeferredValue:F,useTransition:F,useSyncExternalStore:F,useId:F,useHostTransitionStatus:F,useFormState:F,useActionState:F,useOptimistic:F,useMemoCache:F,useCacheRefresh:F};Fl.useEffectEvent=F;var md={readContext:dt,use:Hn,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:tc,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Zi(4194308,4,id.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Zi(4194308,4,t,e)},useInsertionEffect:function(t,e){Zi(4,2,t,e)},useMemo:function(t,e){var a=mt();e=e===void 0?null:e;var l=t();if(da){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=mt();if(a!==void 0){var i=a(e);if(da){Be(!0);try{a(e)}finally{Be(!1)}}}else i=e;return l.memoizedState=l.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=X1.bind(null,M,t),[l.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:function(t){t=gf(t);var e=t.queue,a=hd.bind(null,M,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:go,useDeferredValue:function(t,e){var a=mt();return bo(a,t,e)},useTransition:function(){var t=gf(!1);return t=sd.bind(null,M,t.queue,!0,!1),mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=M,i=mt();if(_){if(a===void 0)throw Error(y(407));a=a()}else{if(a=e(),L===null)throw Error(y(349));(O&127)!==0||Zr(l,e,a)}i.memoizedState=a;var n={value:a,getSnapshot:e};return i.queue=n,tc(Vr.bind(null,l,n,t),[t]),l.flags|=2048,Ia(9,{destroy:void 0},Qr.bind(null,l,n,a,e),null),a},useId:function(){var t=mt(),e=L.identifierPrefix;if(_){var a=It,l=$t;a=(l&~(1<<32-_t(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=dn++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=H1++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:mo,useFormState:$s,useActionState:$s,useOptimistic:function(t){var e=mt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=yo.bind(null,M,!0,a),a.dispatch=e,[t,e]},useMemoCache:ro,useCacheRefresh:function(){return mt().memoizedState=Y1.bind(null,M)},useEffectEvent:function(t){var e=mt(),a={impl:t};return e.memoizedState=a,function(){if((R&2)!==0)throw Error(y(440));return a.impl.apply(void 0,arguments)}}},vo={readContext:dt,use:Hn,useCallback:ud,useContext:dt,useEffect:ho,useImperativeHandle:nd,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:fd,useReducer:Xi,useRef:td,useState:function(){return Xi(ve)},useDebugValue:go,useDeferredValue:function(t,e){var a=I();return od(a,q.memoizedState,t,e)},useTransition:function(){var t=Xi(ve)[0],e=I().memoizedState;return[typeof t=="boolean"?t:oi(t),e]},useSyncExternalStore:Xr,useId:dd,useHostTransitionStatus:mo,useFormState:Is,useActionState:Is,useOptimistic:function(t,e){var a=I();return Fr(a,q,t,e)},useMemoCache:ro,useCacheRefresh:pd};vo.useEffectEvent=ed;var yd={readContext:dt,use:Hn,useCallback:ud,useContext:dt,useEffect:ho,useImperativeHandle:nd,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:fd,useReducer:zu,useRef:td,useState:function(){return zu(ve)},useDebugValue:go,useDeferredValue:function(t,e){var a=I();return q===null?bo(a,t,e):od(a,q.memoizedState,t,e)},useTransition:function(){var t=zu(ve)[0],e=I().memoizedState;return[typeof t=="boolean"?t:oi(t),e]},useSyncExternalStore:Xr,useId:dd,useHostTransitionStatus:mo,useFormState:Ps,useActionState:Ps,useOptimistic:function(t,e){var a=I();return q!==null?Fr(a,q,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ro,useCacheRefresh:pd};yd.useEffectEvent=ed;function Mu(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:V({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Dt(),i=qe(l);i.payload=e,a!=null&&(i.callback=a),e=Le(t,i,l),e!==null&&(wt(e,t,l),Dl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Dt(),i=qe(l);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Le(t,i,l),e!==null&&(wt(e,t,l),Dl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Dt(),l=qe(a);l.tag=2,e!=null&&(l.callback=e),e=Le(t,l,a),e!==null&&(wt(e,t,a),Dl(e,t,a))}};function ec(t,e,a,l,i,n,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,n,u):e.prototype&&e.prototype.isPureReactComponent?!Zl(a,l)||!Zl(i,n):!0}function ac(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&yf.enqueueReplaceState(e,e.state,null)}function pa(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=V({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function vd(t){ln(t)}function xd(t){console.error(t)}function Sd(t){ln(t)}function pn(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function lc(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function vf(t,e,a){return a=qe(a),a.tag=3,a.payload={element:null},a.callback=function(){pn(t,e)},a}function wd(t){return t=qe(t),t.tag=3,t}function Td(t,e,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;t.payload=function(){return i(n)},t.callback=function(){lc(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){lc(e,a,l),typeof i!="function"&&(Ye===null?Ye=new Set([this]):Ye.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function Z1(t,e,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&ul(e,a,i,!0),a=Rt.current,a!==null){switch(a.tag){case 31:case 13:return Zt===null?yn():a.alternate===null&&W===0&&(W=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===on?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Hu(t,l,i)),!1;case 22:return a.flags|=65536,l===on?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Hu(t,l,i)),!1}throw Error(y(435,a.tag))}return Hu(t,l,i),yn(),!1}if(_)return e=Rt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,l!==uf&&(t=Error(y(422),{cause:l}),Vl(Yt(t,a)))):(l!==uf&&(e=Error(y(423),{cause:l}),Vl(Yt(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,l=Yt(l,a),i=vf(t.stateNode,l,i),Tu(t,i),W!==4&&(W=2)),!1;var n=Error(y(520),{cause:l});if(n=Yt(n,a),Gl===null?Gl=[n]:Gl.push(n),W!==4&&(W=2),e===null)return!0;l=Yt(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=vf(a.stateNode,l,t),Tu(a,t),!1;case 1:if(e=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Ye===null||!Ye.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=wd(i),Td(i,t,a,l),Tu(a,i),!1}a=a.return}while(a!==null);return!1}var xo=Error(y(461)),at=!1;function st(t,e,a,l){e.child=t===null?Ur(e,null,a,l):ra(e,t.child,a,l)}function ic(t,e,a,l,i){a=a.render;var n=e.ref;if("ref"in l){var u={};for(var f in l)f!=="ref"&&(u[f]=l[f])}else u=l;return ca(e),l=fo(t,e,a,u,n,i),f=oo(),t!==null&&!at?(so(t,e,i),xe(t,e,i)):(_&&f&&Pf(e),e.flags|=1,st(t,e,l,i),e.child)}function nc(t,e,a,l,i){if(t===null){var n=a.type;return typeof n=="function"&&!If(n)&&n.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=n,zd(t,e,n,l,i)):(t=Li(a.type,null,l,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!So(t,i)){var u=n.memoizedProps;if(a=a.compare,a=a!==null?a:Zl,a(u,l)&&t.ref===e.ref)return xe(t,e,i)}return e.flags|=1,t=he(n,l),t.ref=e.ref,t.return=e,e.child=t}function zd(t,e,a,l,i){if(t!==null){var n=t.memoizedProps;if(Zl(n,l)&&t.ref===e.ref)if(at=!1,e.pendingProps=l=n,So(t,i))(t.flags&131072)!==0&&(at=!0);else return e.lanes=t.lanes,xe(t,e,i)}return xf(t,e,a,l,i)}function Md(t,e,a,l){var i=l.children,n=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,t!==null){for(l=e.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,e.child=null;return uc(t,e,n,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yi(e,n!==null?n.cachePool:null),n!==null?Js(e,n):pf(),qr(e);else return l=e.lanes=536870912,uc(t,e,n!==null?n.baseLanes|a:a,a,l)}else n!==null?(Yi(e,n.cachePool),Js(e,n),_e(e),e.memoizedState=null):(t!==null&&Yi(e,null),pf(),_e(e));return st(t,e,i,a),e.child}function kl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function uc(t,e,a,l,i){var n=ao();return n=n===null?null:{parent:et._currentValue,pool:n},e.memoizedState={baseLanes:a,cachePool:n},t!==null&&Yi(e,null),pf(),qr(e),t!==null&&ul(t,e,l,!0),e.childLanes=i,null}function Qi(t,e){return e=hn({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function fc(t,e,a){return ra(e,t.child,null,a),t=Qi(e,e.pendingProps),t.flags|=2,kt(e),e.memoizedState=null,t}function Q1(t,e,a){var l=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(_){if(l.mode==="hidden")return t=Qi(e,l),e.lanes=536870912,kl(null,t);if(hf(e),(t=Q)?(t=m0(t,Xt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ke!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Or(t),a.return=e,e.child=a,rt=e,Q=null)):t=null,t===null)throw Je(e);return e.lanes=536870912,null}return Qi(e,l)}var n=t.memoizedState;if(n!==null){var u=n.dehydrated;if(hf(e),i)if(e.flags&256)e.flags&=-257,e=fc(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(y(558));else if(at||ul(t,e,a,!1),i=(a&t.childLanes)!==0,at||i){if(l=L,l!==null&&(u=ar(l,a),u!==0&&u!==n.retryLane))throw n.retryLane=u,ma(t,u),wt(l,t,u),xo;yn(),e=fc(t,e,a)}else t=n.treeContext,Q=Qt(u.nextSibling),rt=e,_=!0,je=null,Xt=!1,t!==null&&Dr(e,t),e=Qi(e,l),e.flags|=4096;return e}return t=he(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Vi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(y(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function xf(t,e,a,l,i){return ca(e),a=fo(t,e,a,l,void 0,i),l=oo(),t!==null&&!at?(so(t,e,i),xe(t,e,i)):(_&&l&&Pf(e),e.flags|=1,st(t,e,a,i),e.child)}function oc(t,e,a,l,i,n){return ca(e),e.updateQueue=null,a=Yr(e,l,a,i),Lr(t),l=oo(),t!==null&&!at?(so(t,e,n),xe(t,e,n)):(_&&l&&Pf(e),e.flags|=1,st(t,e,a,n),e.child)}function sc(t,e,a,l,i){if(ca(e),e.stateNode===null){var n=Ha,u=a.contextType;typeof u=="object"&&u!==null&&(n=dt(u)),n=new a(l,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yf,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=l,n.state=e.memoizedState,n.refs={},io(e),u=a.contextType,n.context=typeof u=="object"&&u!==null?dt(u):Ha,n.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Mu(e,a,u,l),n.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&yf.enqueueReplaceState(n,n.state,null),Rl(e,l,n,i),Bl(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){n=e.stateNode;var f=e.memoizedProps,o=pa(a,f);n.props=o;var r=n.context,b=a.contextType;u=Ha,typeof b=="object"&&b!==null&&(u=dt(b));var g=a.getDerivedStateFromProps;b=typeof g=="function"||typeof n.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,b||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(f||r!==u)&&ac(e,n,l,u),Ce=!1;var d=e.memoizedState;n.state=d,Rl(e,l,n,i),Bl(),r=e.memoizedState,f||d!==r||Ce?(typeof g=="function"&&(Mu(e,a,g,l),r=e.memoizedState),(o=Ce||ec(e,a,o,l,d,r,u))?(b||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=r),n.props=l,n.state=r,n.context=u,l=o):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{n=e.stateNode,rf(t,e),u=e.memoizedProps,b=pa(a,u),n.props=b,g=e.pendingProps,d=n.context,r=a.contextType,o=Ha,typeof r=="object"&&r!==null&&(o=dt(r)),f=a.getDerivedStateFromProps,(r=typeof f=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==g||d!==o)&&ac(e,n,l,o),Ce=!1,d=e.memoizedState,n.state=d,Rl(e,l,n,i),Bl();var h=e.memoizedState;u!==g||d!==h||Ce||t!==null&&t.dependencies!==null&&fn(t.dependencies)?(typeof f=="function"&&(Mu(e,a,f,l),h=e.memoizedState),(b=Ce||ec(e,a,b,l,d,h,o)||t!==null&&t.dependencies!==null&&fn(t.dependencies))?(r||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,h,o),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,h,o)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=h),n.props=l,n.state=h,n.context=o,l=b):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),l=!1)}return n=l,Vi(t,e),l=(e.flags&128)!==0,n||l?(n=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&l?(e.child=ra(e,t.child,null,i),e.child=ra(e,null,a,i)):st(t,e,a,i),e.memoizedState=n.state,t=e.child):t=xe(t,e,i),t}function cc(t,e,a,l){return sa(),e.flags|=256,st(t,e,a,l),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eu(t){return{baseLanes:t,cachePool:Rr()}}function Cu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ct),t}function kd(t,e,a){var l=e.pendingProps,i=!1,n=(e.flags&128)!==0,u;if((u=n)||(u=t!==null&&t.memoizedState===null?!1:($.current&2)!==0),u&&(i=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(_){if(i?Oe(e):_e(e),(t=Q)?(t=m0(t,Xt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ke!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Or(t),a.return=e,e.child=a,rt=e,Q=null)):t=null,t===null)throw Je(e);return Rf(t)?e.lanes=32:e.lanes=536870912,null}var f=l.children;return l=l.fallback,i?(_e(e),i=e.mode,f=hn({mode:"hidden",children:f},i),l=na(l,i,a,null),f.return=e,l.return=e,f.sibling=l,e.child=f,l=e.child,l.memoizedState=Eu(a),l.childLanes=Cu(t,u,a),e.memoizedState=ku,kl(null,l)):(Oe(e),Sf(e,f))}var o=t.memoizedState;if(o!==null&&(f=o.dehydrated,f!==null)){if(n)e.flags&256?(Oe(e),e.flags&=-257,e=Au(t,e,a)):e.memoizedState!==null?(_e(e),e.child=t.child,e.flags|=128,e=null):(_e(e),f=l.fallback,i=e.mode,l=hn({mode:"visible",children:l.children},i),f=na(f,i,a,null),f.flags|=2,l.return=e,f.return=e,l.sibling=f,e.child=l,ra(e,t.child,null,a),l=e.child,l.memoizedState=Eu(a),l.childLanes=Cu(t,u,a),e.memoizedState=ku,e=kl(null,l));else if(Oe(e),Rf(f)){if(u=f.nextSibling&&f.nextSibling.dataset,u)var r=u.dgst;u=r,l=Error(y(419)),l.stack="",l.digest=u,Vl({value:l,source:null,stack:null}),e=Au(t,e,a)}else if(at||ul(t,e,a,!1),u=(a&t.childLanes)!==0,at||u){if(u=L,u!==null&&(l=ar(u,a),l!==0&&l!==o.retryLane))throw o.retryLane=l,ma(t,l),wt(u,t,l),xo;Bf(f)||yn(),e=Au(t,e,a)}else Bf(f)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,Q=Qt(f.nextSibling),rt=e,_=!0,je=null,Xt=!1,t!==null&&Dr(e,t),e=Sf(e,l.children),e.flags|=4096);return e}return i?(_e(e),f=l.fallback,i=e.mode,o=t.child,r=o.sibling,l=he(o,{mode:"hidden",children:l.children}),l.subtreeFlags=o.subtreeFlags&65011712,r!==null?f=he(r,f):(f=na(f,i,a,null),f.flags|=2),f.return=e,l.return=e,l.sibling=f,e.child=l,kl(null,l),l=e.child,f=t.child.memoizedState,f===null?f=Eu(a):(i=f.cachePool,i!==null?(o=et._currentValue,i=i.parent!==o?{parent:o,pool:o}:i):i=Rr(),f={baseLanes:f.baseLanes|a,cachePool:i}),l.memoizedState=f,l.childLanes=Cu(t,u,a),e.memoizedState=ku,kl(t.child,l)):(Oe(e),a=t.child,t=a.sibling,a=he(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function Sf(t,e){return e=hn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function hn(t,e){return t=Et(22,t,null,e),t.lanes=0,t}function Au(t,e,a){return ra(e,t.child,null,a),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rc(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),of(t.return,e,a)}function Ou(t,e,a,l,i,n){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:n}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=i,u.treeForkCount=n)}function Ed(t,e,a){var l=e.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var u=$.current,f=(u&2)!==0;if(f?(u=u&1|2,e.flags|=128):u&=1,Y($,u),st(t,e,l,a),l=_?Ql:0,!f&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rc(t,a,e);else if(t.tag===19)rc(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&cn(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Ou(e,!1,i,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cn(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Ou(e,!0,a,null,n,l);break;case"together":Ou(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function xe(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),We|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ul(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,a=he(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=he(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function So(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&fn(t)))}function V1(t,e,a){switch(e.tag){case 3:Pi(e,e.stateNode.containerInfo),Ae(e,et,t.memoizedState.cache),sa();break;case 27:case 5:Ju(e);break;case 4:Pi(e,e.stateNode.containerInfo);break;case 10:Ae(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,hf(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Oe(e),e.flags|=128,null):(a&e.child.childLanes)!==0?kd(t,e,a):(Oe(e),t=xe(t,e,a),t!==null?t.sibling:null);Oe(e);break;case 19:var i=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(ul(t,e,a,!1),l=(a&e.childLanes)!==0),i){if(l)return Ed(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y($,$.current),l)break;return null;case 22:return e.lanes=0,Md(t,e,a,e.pendingProps);case 24:Ae(e,et,t.memoizedState.cache)}return xe(t,e,a)}function Cd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)at=!0;else{if(!So(t,a)&&(e.flags&128)===0)return at=!1,V1(t,e,a);at=(t.flags&131072)!==0}else at=!1,_&&(e.flags&1048576)!==0&&_r(e,Ql,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=aa(e.elementType),e.type=t,typeof t=="function")If(t)?(l=pa(t,l),e.tag=1,e=sc(null,e,t,l,a)):(e.tag=0,e=xf(null,e,t,l,a));else{if(t!=null){var i=t.$$typeof;if(i===Gf){e.tag=11,e=ic(null,e,t,l,a);break t}else if(i===jf){e.tag=14,e=nc(null,e,t,l,a);break t}}throw e=Vu(t)||t,Error(y(306,e,""))}}return e;case 0:return xf(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,i=pa(l,e.pendingProps),sc(t,e,l,i,a);case 3:t:{if(Pi(e,e.stateNode.containerInfo),t===null)throw Error(y(387));l=e.pendingProps;var n=e.memoizedState;i=n.element,rf(t,e),Rl(e,l,null,a);var u=e.memoizedState;if(l=u.cache,Ae(e,et,l),l!==n.cache&&sf(e,[et],a,!0),Bl(),l=u.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=cc(t,e,l,a);break t}else if(l!==i){i=Yt(Error(y(424)),e),Vl(i),e=cc(t,e,l,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Q=Qt(t.firstChild),rt=e,_=!0,je=null,Xt=!0,a=Ur(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(sa(),l===i){e=xe(t,e,a);break t}st(t,e,l,a)}e=e.child}return e;case 26:return Vi(t,e),t===null?(a=Bc(e.type,null,e.pendingProps,null))?e.memoizedState=a:_||(a=e.type,t=e.pendingProps,l=wn(Ge.current).createElement(a),l[ct]=e,l[Tt]=t,pt(l,a,t),ft(l),e.stateNode=l):e.memoizedState=Bc(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ju(e),t===null&&_&&(l=e.stateNode=y0(e.type,e.pendingProps,Ge.current),rt=e,Xt=!0,i=Q,Ie(e.type)?(Nf=i,Q=Qt(l.firstChild)):Q=i),st(t,e,e.pendingProps.children,a),Vi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&_&&((i=l=Q)&&(l=xh(l,e.type,e.pendingProps,Xt),l!==null?(e.stateNode=l,rt=e,Q=Qt(l.firstChild),Xt=!1,i=!0):i=!1),i||Je(e)),Ju(e),i=e.type,n=e.pendingProps,u=t!==null?t.memoizedProps:null,l=n.children,_f(i,n)?l=null:u!==null&&_f(i,u)&&(e.flags|=32),e.memoizedState!==null&&(i=fo(t,e,U1,null,null,a),Il._currentValue=i),Vi(t,e),st(t,e,l,a),e.child;case 6:return t===null&&_&&((t=a=Q)&&(a=Sh(a,e.pendingProps,Xt),a!==null?(e.stateNode=a,rt=e,Q=null,t=!0):t=!1),t||Je(e)),null;case 13:return kd(t,e,a);case 4:return Pi(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=ra(e,null,l,a):st(t,e,l,a),e.child;case 11:return ic(t,e,e.type,e.pendingProps,a);case 7:return st(t,e,e.pendingProps,a),e.child;case 8:return st(t,e,e.pendingProps.children,a),e.child;case 12:return st(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,Ae(e,e.type,l.value),st(t,e,l.children,a),e.child;case 9:return i=e.type._context,l=e.pendingProps.children,ca(e),i=dt(i),l=l(i),e.flags|=1,st(t,e,l,a),e.child;case 14:return nc(t,e,e.type,e.pendingProps,a);case 15:return zd(t,e,e.type,e.pendingProps,a);case 19:return Ed(t,e,a);case 31:return Q1(t,e,a);case 22:return Md(t,e,a,e.pendingProps);case 24:return ca(e),l=dt(et),t===null?(i=ao(),i===null&&(i=L,n=eo(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),e.memoizedState={parent:l,cache:i},io(e),Ae(e,et,i)):((t.lanes&a)!==0&&(rf(t,e),Rl(e,null,null,a),Bl()),i=t.memoizedState,n=e.memoizedState,i.parent!==l?(i={parent:l,cache:l},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ae(e,et,l)):(l=n.cache,Ae(e,et,l),l!==i.cache&&sf(e,[et],a,!0))),st(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(y(156,e.tag))}function ne(t){t.flags|=4}function _u(t,e,a,l,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Id())t.flags|=8192;else throw fa=on,lo}else t.flags&=-16777217}function dc(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!S0(e))if(Id())t.flags|=8192;else throw fa=on,lo}function Oi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Pc():536870912,t.lanes|=e,Pa|=e)}function vl(t,e){if(!_)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Z(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function K1(t,e,a){var l=e.pendingProps;switch(to(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Z(e),null;case 1:return Z(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ge(et),Ka(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(za(e)?ne(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,wu())),Z(e),null;case 26:var i=e.type,n=e.memoizedState;return t===null?(ne(e),n!==null?(Z(e),dc(e,n)):(Z(e),_u(e,i,null,l,a))):n?n!==t.memoizedState?(ne(e),Z(e),dc(e,n)):(Z(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&ne(e),Z(e),_u(e,i,t,l,a)),null;case 27:if(tn(e),a=Ge.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ne(e);else{if(!l){if(e.stateNode===null)throw Error(y(166));return Z(e),null}t=te.current,za(e)?Ls(e,t):(t=y0(i,l,a),e.stateNode=t,ne(e))}return Z(e),null;case 5:if(tn(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ne(e);else{if(!l){if(e.stateNode===null)throw Error(y(166));return Z(e),null}if(n=te.current,za(e))Ls(e,n);else{var u=wn(Ge.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?u.createElement(i,{is:l.is}):u.createElement(i)}}n[ct]=e,n[Tt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=n;t:switch(pt(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ne(e)}}return Z(e),_u(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&ne(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(y(166));if(t=Ge.current,za(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,i=rt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}t[ct]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||h0(t.nodeValue,a)),t||Je(e,!0)}else t=wn(t).createTextNode(l),t[ct]=e,e.stateNode=t}return Z(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=za(e),a!==null){if(t===null){if(!l)throw Error(y(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[ct]=e}else sa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Z(e),t=!1}else a=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(kt(e),e):(kt(e),null);if((e.flags&128)!==0)throw Error(y(558))}return Z(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=za(e),l!==null&&l.dehydrated!==null){if(t===null){if(!i)throw Error(y(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[ct]=e}else sa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Z(e),i=!1}else i=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(kt(e),e):(kt(e),null)}return kt(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Oi(e,e.updateQueue),Z(e),null);case 4:return Ka(),t===null&&Co(e.stateNode.containerInfo),Z(e),null;case 10:return ge(e.type),Z(e),null;case 19:if(ot($),l=e.memoizedState,l===null)return Z(e),null;if(i=(e.flags&128)!==0,n=l.rendering,n===null)if(i)vl(l,!1);else{if(W!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=cn(t),n!==null){for(e.flags|=128,vl(l,!1),t=n.updateQueue,e.updateQueue=t,Oi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Ar(a,t),a=a.sibling;return Y($,$.current&1|2),_&&se(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&At()>bn&&(e.flags|=128,i=!0,vl(l,!1),e.lanes=4194304)}else{if(!i)if(t=cn(n),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Oi(e,t),vl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!_)return Z(e),null}else 2*At()-l.renderingStartTime>bn&&a!==536870912&&(e.flags|=128,i=!0,vl(l,!1),e.lanes=4194304);l.isBackwards?(n.sibling=e.child,e.child=n):(t=l.last,t!==null?t.sibling=n:e.child=n,l.last=n)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=At(),t.sibling=null,a=$.current,Y($,i?a&1|2:a&1),_&&se(e,l.treeForkCount),t):(Z(e),null);case 22:case 23:return kt(e),no(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Z(e),e.subtreeFlags&6&&(e.flags|=8192)):Z(e),a=e.updateQueue,a!==null&&Oi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&ot(ua),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ge(et),Z(e),null;case 25:return null;case 30:return null}throw Error(y(156,e.tag))}function J1(t,e){switch(to(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ge(et),Ka(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return tn(e),null;case 31:if(e.memoizedState!==null){if(kt(e),e.alternate===null)throw Error(y(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(kt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));sa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot($),null;case 4:return Ka(),null;case 10:return ge(e.type),null;case 22:case 23:return kt(e),no(),t!==null&&ot(ua),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ge(et),null;case 25:return null;default:return null}}function Ad(t,e){switch(to(e),e.tag){case 3:ge(et),Ka();break;case 26:case 27:case 5:tn(e);break;case 4:Ka();break;case 31:e.memoizedState!==null&&kt(e);break;case 13:kt(e);break;case 19:ot($);break;case 10:ge(e.type);break;case 22:case 23:kt(e),no(),t!==null&&ot(ua);break;case 24:ge(et)}}function si(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){l=void 0;var n=a.create,u=a.inst;l=n(),u.destroy=l}a=a.next}while(a!==i)}}catch(f){U(e,e.return,f)}}function Fe(t,e,a){try{var l=e.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&t)===t){var u=l.inst,f=u.destroy;if(f!==void 0){u.destroy=void 0,i=e;var o=a,r=f;try{r()}catch(b){U(i,o,b)}}}l=l.next}while(l!==n)}}catch(b){U(e,e.return,b)}}function Od(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{jr(e,a)}catch(l){U(t,t.return,l)}}}function _d(t,e,a){a.props=pa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){U(t,e,l)}}function Hl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(i){U(t,e,i)}}function Pt(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){U(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){U(t,e,i)}else a.current=null}function Dd(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){U(t,t.return,i)}}function Du(t,e,a){try{var l=t.stateNode;hh(l,t.type,a,e),l[Tt]=e}catch(i){U(t,t.return,i)}}function Bd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ie(t.type)||t.tag===4}function Bu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Bd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ie(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=de));else if(l!==4&&(l===27&&Ie(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(wf(t,e,a),t=t.sibling;t!==null;)wf(t,e,a),t=t.sibling}function gn(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Ie(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gn(t,e,a),t=t.sibling;t!==null;)gn(t,e,a),t=t.sibling}function Rd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);pt(e,l,a),e[ct]=t,e[Tt]=a}catch(n){U(t,t.return,n)}}var ce=!1,tt=!1,Ru=!1,pc=typeof WeakSet=="function"?WeakSet:Set,ut=null;function F1(t,e){if(t=t.containerInfo,Af=kn,t=Sr(t),Ff(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break t}var u=0,f=-1,o=-1,r=0,b=0,g=t,d=null;e:for(;;){for(var h;g!==a||i!==0&&g.nodeType!==3||(f=u+i),g!==n||l!==0&&g.nodeType!==3||(o=u+l),g.nodeType===3&&(u+=g.nodeValue.length),(h=g.firstChild)!==null;)d=g,g=h;for(;;){if(g===t)break e;if(d===a&&++r===i&&(f=u),d===n&&++b===l&&(o=u),(h=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=h}a=f===-1||o===-1?null:{start:f,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},kn=!1,ut=e;ut!==null;)if(e=ut,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ut=t;else for(;ut!==null;){switch(e=ut,n=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,a=e,i=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var v=pa(a.type,i);t=l.getSnapshotBeforeUpdate(v,n),l.__reactInternalSnapshotBeforeUpdate=t}catch(w){U(a,a.return,w)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Df(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Df(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(y(163))}if(t=e.sibling,t!==null){t.return=e.return,ut=t;break}ut=e.return}}function Nd(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:fe(t,a),l&4&&si(5,a);break;case 1:if(fe(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){U(a,a.return,u)}else{var i=pa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){U(a,a.return,u)}}l&64&&Od(a),l&512&&Hl(a,a.return);break;case 3:if(fe(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{jr(t,e)}catch(u){U(a,a.return,u)}}break;case 27:e===null&&l&4&&Rd(a);case 26:case 5:fe(t,a),e===null&&l&4&&Dd(a),l&512&&Hl(a,a.return);break;case 12:fe(t,a);break;case 31:fe(t,a),l&4&&Gd(t,a);break;case 13:fe(t,a),l&4&&jd(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ih.bind(null,a),wh(t,a))));break;case 22:if(l=a.memoizedState!==null||ce,!l){e=e!==null&&e.memoizedState!==null||tt,i=ce;var n=tt;ce=l,(tt=e)&&!n?oe(t,a,(a.subtreeFlags&8772)!==0):fe(t,a),ce=i,tt=n}break;case 30:break;default:fe(t,a)}}function Hd(t){var e=t.alternate;e!==null&&(t.alternate=null,Hd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Xf(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var J=null,xt=!1;function ue(t,e,a){for(a=a.child;a!==null;)Ud(t,e,a),a=a.sibling}function Ud(t,e,a){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(ai,a)}catch{}switch(a.tag){case 26:tt||Pt(a,e),ue(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tt||Pt(a,e);var l=J,i=xt;Ie(a.type)&&(J=a.stateNode,xt=!1),ue(t,e,a),ql(a.stateNode),J=l,xt=i;break;case 5:tt||Pt(a,e);case 6:if(l=J,i=xt,J=null,ue(t,e,a),J=l,xt=i,J!==null)if(xt)try{(J.nodeType===9?J.body:J.nodeName==="HTML"?J.ownerDocument.body:J).removeChild(a.stateNode)}catch(n){U(a,e,n)}else try{J.removeChild(a.stateNode)}catch(n){U(a,e,n)}break;case 18:J!==null&&(xt?(t=J,Cc(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ll(t)):Cc(J,a.stateNode));break;case 4:l=J,i=xt,J=a.stateNode.containerInfo,xt=!0,ue(t,e,a),J=l,xt=i;break;case 0:case 11:case 14:case 15:Fe(2,a,e),tt||Fe(4,a,e),ue(t,e,a);break;case 1:tt||(Pt(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&_d(a,e,l)),ue(t,e,a);break;case 21:ue(t,e,a);break;case 22:tt=(l=tt)||a.memoizedState!==null,ue(t,e,a),tt=l;break;default:ue(t,e,a)}}function Gd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ll(t)}catch(a){U(e,e.return,a)}}}function jd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ll(t)}catch(a){U(e,e.return,a)}}function W1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new pc),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new pc),e;default:throw Error(y(435,t.tag))}}function _i(t,e){var a=W1(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var i=nh.bind(null,t,l);l.then(i,i)}})}function yt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],n=t,u=e,f=u;t:for(;f!==null;){switch(f.tag){case 27:if(Ie(f.type)){J=f.stateNode,xt=!1;break t}break;case 5:J=f.stateNode,xt=!1;break t;case 3:case 4:J=f.stateNode.containerInfo,xt=!0;break t}f=f.return}if(J===null)throw Error(y(160));Ud(n,u,i),J=null,xt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)qd(e,t),e=e.sibling}var Jt=null;function qd(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yt(e,t),vt(t),l&4&&(Fe(3,t,t.return),si(3,t),Fe(5,t,t.return));break;case 1:yt(e,t),vt(t),l&512&&(tt||a===null||Pt(a,a.return)),l&64&&ce&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Jt;if(yt(e,t),vt(t),l&512&&(tt||a===null||Pt(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[ni]||n[ct]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),pt(n,l,a),n[ct]=t,ft(n),l=n;break t;case"link":var u=Nc("link","href",i).get(l+(a.href||""));if(u){for(var f=0;f<u.length;f++)if(n=u[f],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(f,1);break e}}n=i.createElement(l),pt(n,l,a),i.head.appendChild(n);break;case"meta":if(u=Nc("meta","content",i).get(l+(a.content||""))){for(f=0;f<u.length;f++)if(n=u[f],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(f,1);break e}}n=i.createElement(l),pt(n,l,a),i.head.appendChild(n);break;default:throw Error(y(468,l))}n[ct]=t,ft(n),l=n}t.stateNode=l}else Hc(i,t.type,t.stateNode);else t.stateNode=Rc(i,l,t.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?Hc(i,t.type,t.stateNode):Rc(i,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Du(t,t.memoizedProps,a.memoizedProps)}break;case 27:yt(e,t),vt(t),l&512&&(tt||a===null||Pt(a,a.return)),a!==null&&l&4&&Du(t,t.memoizedProps,a.memoizedProps);break;case 5:if(yt(e,t),vt(t),l&512&&(tt||a===null||Pt(a,a.return)),t.flags&32){i=t.stateNode;try{Fa(i,"")}catch(v){U(t,t.return,v)}}l&4&&t.stateNode!=null&&(i=t.memoizedProps,Du(t,i,a!==null?a.memoizedProps:i)),l&1024&&(Ru=!0);break;case 6:if(yt(e,t),vt(t),l&4){if(t.stateNode===null)throw Error(y(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(v){U(t,t.return,v)}}break;case 3:if(Fi=null,i=Jt,Jt=Tn(e.containerInfo),yt(e,t),Jt=i,vt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ll(e.containerInfo)}catch(v){U(t,t.return,v)}Ru&&(Ru=!1,Ld(t));break;case 4:l=Jt,Jt=Tn(t.stateNode.containerInfo),yt(e,t),vt(t),Jt=l;break;case 12:yt(e,t),vt(t);break;case 31:yt(e,t),vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_i(t,l)));break;case 13:yt(e,t),vt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jn=At()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_i(t,l)));break;case 22:i=t.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,r=ce,b=tt;if(ce=r||i,tt=b||o,yt(e,t),tt=b,ce=r,vt(t),l&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||o||ce||tt||la(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){o=a=e;try{if(n=o.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=o.stateNode;var g=o.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null;f.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(v){U(o,o.return,v)}}}else if(e.tag===6){if(a===null){o=e;try{o.stateNode.nodeValue=i?"":o.memoizedProps}catch(v){U(o,o.return,v)}}}else if(e.tag===18){if(a===null){o=e;try{var h=o.stateNode;i?Ac(h,!0):Ac(o.stateNode,!1)}catch(v){U(o,o.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,_i(t,a))));break;case 19:yt(e,t),vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_i(t,l)));break;case 30:break;case 21:break;default:yt(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Bd(l)){a=l;break}l=l.return}if(a==null)throw Error(y(160));switch(a.tag){case 27:var i=a.stateNode,n=Bu(t);gn(t,n,i);break;case 5:var u=a.stateNode;a.flags&32&&(Fa(u,""),a.flags&=-33);var f=Bu(t);gn(t,f,u);break;case 3:case 4:var o=a.stateNode.containerInfo,r=Bu(t);wf(t,r,o);break;default:throw Error(y(161))}}catch(b){U(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ld(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ld(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function fe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Nd(t,e.alternate,e),e=e.sibling}function la(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Fe(4,e,e.return),la(e);break;case 1:Pt(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&_d(e,e.return,a),la(e);break;case 27:ql(e.stateNode);case 26:case 5:Pt(e,e.return),la(e);break;case 22:e.memoizedState===null&&la(e);break;case 30:la(e);break;default:la(e)}t=t.sibling}}function oe(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,i=t,n=e,u=n.flags;switch(n.tag){case 0:case 11:case 15:oe(i,n,a),si(4,n);break;case 1:if(oe(i,n,a),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(r){U(l,l.return,r)}if(l=n,i=l.updateQueue,i!==null){var f=l.stateNode;try{var o=i.shared.hiddenCallbacks;if(o!==null)for(i.shared.hiddenCallbacks=null,i=0;i<o.length;i++)Gr(o[i],f)}catch(r){U(l,l.return,r)}}a&&u&64&&Od(n),Hl(n,n.return);break;case 27:Rd(n);case 26:case 5:oe(i,n,a),a&&l===null&&u&4&&Dd(n),Hl(n,n.return);break;case 12:oe(i,n,a);break;case 31:oe(i,n,a),a&&u&4&&Gd(i,n);break;case 13:oe(i,n,a),a&&u&4&&jd(i,n);break;case 22:n.memoizedState===null&&oe(i,n,a),Hl(n,n.return);break;case 30:break;default:oe(i,n,a)}e=e.sibling}}function wo(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fi(a))}function To(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&fi(t))}function Kt(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yd(t,e,a,l),e=e.sibling}function Yd(t,e,a,l){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Kt(t,e,a,l),i&2048&&si(9,e);break;case 1:Kt(t,e,a,l);break;case 3:Kt(t,e,a,l),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&fi(t)));break;case 12:if(i&2048){Kt(t,e,a,l),t=e.stateNode;try{var n=e.memoizedProps,u=n.id,f=n.onPostCommit;typeof f=="function"&&f(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){U(e,e.return,o)}}else Kt(t,e,a,l);break;case 31:Kt(t,e,a,l);break;case 13:Kt(t,e,a,l);break;case 23:break;case 22:n=e.stateNode,u=e.alternate,e.memoizedState!==null?n._visibility&2?Kt(t,e,a,l):Ul(t,e):n._visibility&2?Kt(t,e,a,l):(n._visibility|=2,ka(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),i&2048&&wo(u,e);break;case 24:Kt(t,e,a,l),i&2048&&To(e.alternate,e);break;default:Kt(t,e,a,l)}}function ka(t,e,a,l,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var n=t,u=e,f=a,o=l,r=u.flags;switch(u.tag){case 0:case 11:case 15:ka(n,u,f,o,i),si(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?ka(n,u,f,o,i):Ul(n,u):(b._visibility|=2,ka(n,u,f,o,i)),i&&r&2048&&wo(u.alternate,u);break;case 24:ka(n,u,f,o,i),i&&r&2048&&To(u.alternate,u);break;default:ka(n,u,f,o,i)}e=e.sibling}}function Ul(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,i=l.flags;switch(l.tag){case 22:Ul(a,l),i&2048&&wo(l.alternate,l);break;case 24:Ul(a,l),i&2048&&To(l.alternate,l);break;default:Ul(a,l)}e=e.sibling}}var El=8192;function Ma(t,e,a){if(t.subtreeFlags&El)for(t=t.child;t!==null;)Xd(t,e,a),t=t.sibling}function Xd(t,e,a){switch(t.tag){case 26:Ma(t,e,a),t.flags&El&&t.memoizedState!==null&&Rh(a,Jt,t.memoizedState,t.memoizedProps);break;case 5:Ma(t,e,a);break;case 3:case 4:var l=Jt;Jt=Tn(t.stateNode.containerInfo),Ma(t,e,a),Jt=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=El,El=16777216,Ma(t,e,a),El=l):Ma(t,e,a));break;default:Ma(t,e,a)}}function Zd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function xl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];ut=l,Vd(l,t)}Zd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qd(t),t=t.sibling}function Qd(t){switch(t.tag){case 0:case 11:case 15:xl(t),t.flags&2048&&Fe(9,t,t.return);break;case 3:xl(t);break;case 12:xl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ki(t)):xl(t);break;default:xl(t)}}function Ki(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];ut=l,Vd(l,t)}Zd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Fe(8,e,e.return),Ki(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Ki(e));break;default:Ki(e)}t=t.sibling}}function Vd(t,e){for(;ut!==null;){var a=ut;switch(a.tag){case 0:case 11:case 15:Fe(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ut=l;else t:for(a=t;ut!==null;){l=ut;var i=l.sibling,n=l.return;if(Hd(l),l===a){ut=null;break t}if(i!==null){i.return=n,ut=i;break t}ut=n}}}var $1={getCacheForType:function(t){var e=dt(et),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return dt(et).controller.signal}},I1=typeof WeakMap=="function"?WeakMap:Map,R=0,L=null,C=null,O=0,H=0,Mt=null,Ne=!1,ol=!1,zo=!1,Se=0,W=0,We=0,oa=0,Mo=0,Ct=0,Pa=0,Gl=null,St=null,Tf=!1,jn=0,Kd=0,bn=1/0,mn=null,Ye=null,it=0,Xe=null,tl=null,be=0,zf=0,Mf=null,Jd=null,jl=0,kf=null;function Dt(){return(R&2)!==0&&O!==0?O&-O:T.T!==null?Eo():lr()}function Fd(){if(Ct===0)if((O&536870912)===0||_){var t=Si;Si<<=1,(Si&3932160)===0&&(Si=262144),Ct=t}else Ct=536870912;return t=Rt.current,t!==null&&(t.flags|=32),Ct}function wt(t,e,a){(t===L&&(H===2||H===9)||t.cancelPendingCommit!==null)&&(el(t,0),He(t,O,Ct,!1)),ii(t,a),((R&2)===0||t!==L)&&(t===L&&((R&2)===0&&(oa|=a),W===4&&He(t,O,Ct,!1)),ae(t))}function Wd(t,e,a){if((R&6)!==0)throw Error(y(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||li(t,e),i=l?eh(t,e):Nu(t,e,!0),n=l;do{if(i===0){ol&&!l&&He(t,e,0,!1);break}else{if(a=t.current.alternate,n&&!P1(a)){i=Nu(t,e,!1),n=!1;continue}if(i===2){if(n=e,t.errorRecoveryDisabledLanes&n)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var f=t;i=Gl;var o=f.current.memoizedState.isDehydrated;if(o&&(el(f,u).flags|=256),u=Nu(f,u,!1),u!==2){if(zo&&!o){f.errorRecoveryDisabledLanes|=n,oa|=n,i=4;break t}n=St,St=i,n!==null&&(St===null?St=n:St.push.apply(St,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){el(t,0),He(t,e,0,!0);break}t:{switch(l=t,n=i,n){case 0:case 1:throw Error(y(345));case 4:if((e&4194048)!==e)break;case 6:He(l,e,Ct,!Ne);break t;case 2:St=null;break;case 3:case 5:break;default:throw Error(y(329))}if((e&62914560)===e&&(i=jn+300-At(),10<i)){if(He(l,e,Ct,!Ne),Cn(l,0,!0)!==0)break t;be=e,l.timeoutHandle=b0(hc.bind(null,l,a,St,mn,Tf,e,Ct,oa,Pa,Ne,n,"Throttled",-0,0),i);break t}hc(l,a,St,mn,Tf,e,Ct,oa,Pa,Ne,n,null,-0,0)}}break}while(!0);ae(t)}function hc(t,e,a,l,i,n,u,f,o,r,b,g,d,h){if(t.timeoutHandle=-1,g=e.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:de},Xd(e,n,g);var v=(n&62914560)===n?jn-At():(n&4194048)===n?Kd-At():0;if(v=Nh(g,v),v!==null){be=n,t.cancelPendingCommit=v(bc.bind(null,t,e,n,a,l,i,u,f,o,b,g,null,d,h)),He(t,n,u,!r);return}}bc(t,e,n,a,l,i,u,f,o)}function P1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],n=i.getSnapshot;i=i.value;try{if(!Bt(n(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function He(t,e,a,l){e&=~Mo,e&=~oa,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var i=e;0<i;){var n=31-_t(i),u=1<<n;l[n]=-1,i&=~u}a!==0&&tr(t,a,e)}function qn(){return(R&6)===0?(ci(0,!1),!1):!0}function ko(){if(C!==null){if(H===0)var t=C.return;else t=C,pe=ya=null,co(t),Za=null,Kl=0,t=C;for(;t!==null;)Ad(t.alternate,t),t=t.return;C=null}}function el(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,mh(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),be=0,ko(),L=t,C=a=he(t.current,null),O=e,H=0,Mt=null,Ne=!1,ol=li(t,e),zo=!1,Pa=Ct=Mo=oa=We=W=0,St=Gl=null,Tf=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var i=31-_t(l),n=1<<i;e|=t[i],l&=~n}return Se=e,Dn(),a}function $d(t,e){M=null,T.H=Fl,e===fl||e===Rn?(e=Vs(),H=3):e===lo?(e=Vs(),H=4):H=e===xo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Mt=e,C===null&&(W=1,pn(t,Yt(e,t.current)))}function Id(){var t=Rt.current;return t===null?!0:(O&4194048)===O?Zt===null:(O&62914560)===O||(O&536870912)!==0?t===Zt:!1}function Pd(){var t=T.H;return T.H=Fl,t===null?Fl:t}function t0(){var t=T.A;return T.A=$1,t}function yn(){W=4,Ne||(O&4194048)!==O&&Rt.current!==null||(ol=!0),(We&134217727)===0&&(oa&134217727)===0||L===null||He(L,O,Ct,!1)}function Nu(t,e,a){var l=R;R|=2;var i=Pd(),n=t0();(L!==t||O!==e)&&(mn=null,el(t,e)),e=!1;var u=W;t:do try{if(H!==0&&C!==null){var f=C,o=Mt;switch(H){case 8:ko(),u=6;break t;case 3:case 2:case 9:case 6:Rt.current===null&&(e=!0);var r=H;if(H=0,Mt=null,ja(t,f,o,r),a&&ol){u=0;break t}break;default:r=H,H=0,Mt=null,ja(t,f,o,r)}}th(),u=W;break}catch(b){$d(t,b)}while(!0);return e&&t.shellSuspendCounter++,pe=ya=null,R=l,T.H=i,T.A=n,C===null&&(L=null,O=0,Dn()),u}function th(){for(;C!==null;)e0(C)}function eh(t,e){var a=R;R|=2;var l=Pd(),i=t0();L!==t||O!==e?(mn=null,bn=At()+500,el(t,e)):ol=li(t,e);t:do try{if(H!==0&&C!==null){e=C;var n=Mt;e:switch(H){case 1:H=0,Mt=null,ja(t,e,n,1);break;case 2:case 9:if(Qs(n)){H=0,Mt=null,gc(e);break}e=function(){H!==2&&H!==9||L!==t||(H=7),ae(t)},n.then(e,e);break t;case 3:H=7;break t;case 4:H=5;break t;case 7:Qs(n)?(H=0,Mt=null,gc(e)):(H=0,Mt=null,ja(t,e,n,7));break;case 5:var u=null;switch(C.tag){case 26:u=C.memoizedState;case 5:case 27:var f=C;if(u?S0(u):f.stateNode.complete){H=0,Mt=null;var o=f.sibling;if(o!==null)C=o;else{var r=f.return;r!==null?(C=r,Ln(r)):C=null}break e}}H=0,Mt=null,ja(t,e,n,5);break;case 6:H=0,Mt=null,ja(t,e,n,6);break;case 8:ko(),W=6;break t;default:throw Error(y(462))}}ah();break}catch(b){$d(t,b)}while(!0);return pe=ya=null,T.H=l,T.A=i,R=a,C!==null?0:(L=null,O=0,Dn(),W)}function ah(){for(;C!==null&&!Mp();)e0(C)}function e0(t){var e=Cd(t.alternate,t,Se);t.memoizedProps=t.pendingProps,e===null?Ln(t):C=e}function gc(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=oc(a,e,e.pendingProps,e.type,void 0,O);break;case 11:e=oc(a,e,e.pendingProps,e.type.render,e.ref,O);break;case 5:co(e);default:Ad(a,e),e=C=Ar(e,Se),e=Cd(a,e,Se)}t.memoizedProps=t.pendingProps,e===null?Ln(t):C=e}function ja(t,e,a,l){pe=ya=null,co(e),Za=null,Kl=0;var i=e.return;try{if(Z1(t,i,e,a,O)){W=1,pn(t,Yt(a,t.current)),C=null;return}}catch(n){if(i!==null)throw C=i,n;W=1,pn(t,Yt(a,t.current)),C=null;return}e.flags&32768?(_||l===1?t=!0:ol||(O&536870912)!==0?t=!1:(Ne=t=!0,(l===2||l===9||l===3||l===6)&&(l=Rt.current,l!==null&&l.tag===13&&(l.flags|=16384))),a0(e,t)):Ln(e)}function Ln(t){var e=t;do{if((e.flags&32768)!==0){a0(e,Ne);return}t=e.return;var a=K1(e.alternate,e,Se);if(a!==null){C=a;return}if(e=e.sibling,e!==null){C=e;return}C=e=t}while(e!==null);W===0&&(W=5)}function a0(t,e){do{var a=J1(t.alternate,t);if(a!==null){a.flags&=32767,C=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){C=t;return}C=t=a}while(t!==null);W=6,C=null}function bc(t,e,a,l,i,n,u,f,o){t.cancelPendingCommit=null;do Yn();while(it!==0);if((R&6)!==0)throw Error(y(327));if(e!==null){if(e===t.current)throw Error(y(177));if(n=e.lanes|e.childLanes,n|=Wf,Np(t,a,n,u,f,o),t===L&&(C=L=null,O=0),tl=e,Xe=t,be=a,zf=n,Mf=i,Jd=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,uh(en,function(){return f0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=T.T,T.T=null,i=N.p,N.p=2,u=R,R|=4;try{F1(t,e,a)}finally{R=u,N.p=i,T.T=l}}it=1,l0(),i0(),n0()}}function l0(){if(it===1){it=0;var t=Xe,e=tl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var l=N.p;N.p=2;var i=R;R|=4;try{qd(e,t);var n=Of,u=Sr(t.containerInfo),f=n.focusedElem,o=n.selectionRange;if(u!==f&&f&&f.ownerDocument&&xr(f.ownerDocument.documentElement,f)){if(o!==null&&Ff(f)){var r=o.start,b=o.end;if(b===void 0&&(b=r),"selectionStart"in f)f.selectionStart=r,f.selectionEnd=Math.min(b,f.value.length);else{var g=f.ownerDocument||document,d=g&&g.defaultView||window;if(d.getSelection){var h=d.getSelection(),v=f.textContent.length,w=Math.min(o.start,v),G=o.end===void 0?w:Math.min(o.end,v);!h.extend&&w>G&&(u=G,G=w,w=u);var c=Gs(f,w),s=Gs(f,G);if(c&&s&&(h.rangeCount!==1||h.anchorNode!==c.node||h.anchorOffset!==c.offset||h.focusNode!==s.node||h.focusOffset!==s.offset)){var p=g.createRange();p.setStart(c.node,c.offset),h.removeAllRanges(),w>G?(h.addRange(p),h.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),h.addRange(p))}}}}for(g=[],h=f;h=h.parentNode;)h.nodeType===1&&g.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<g.length;f++){var m=g[f];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}kn=!!Af,Of=Af=null}finally{R=i,N.p=l,T.T=a}}t.current=e,it=2}}function i0(){if(it===2){it=0;var t=Xe,e=tl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var l=N.p;N.p=2;var i=R;R|=4;try{Nd(t,e.alternate,e)}finally{R=i,N.p=l,T.T=a}}it=3}}function n0(){if(it===4||it===3){it=0,kp();var t=Xe,e=tl,a=be,l=Jd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?it=5:(it=0,tl=Xe=null,u0(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ye=null),Yf(a),e=e.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=T.T,i=N.p,N.p=2,T.T=null;try{for(var n=t.onRecoverableError,u=0;u<l.length;u++){var f=l[u];n(f.value,{componentStack:f.stack})}}finally{T.T=e,N.p=i}}(be&3)!==0&&Yn(),ae(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===kf?jl++:(jl=0,kf=t):jl=0,ci(0,!1)}}function u0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,fi(e)))}function Yn(){return l0(),i0(),n0(),f0()}function f0(){if(it!==5)return!1;var t=Xe,e=zf;zf=0;var a=Yf(be),l=T.T,i=N.p;try{N.p=32>a?32:a,T.T=null,a=Mf,Mf=null;var n=Xe,u=be;if(it=0,tl=Xe=null,be=0,(R&6)!==0)throw Error(y(331));var f=R;if(R|=4,Qd(n.current),Yd(n,n.current,u,a),R=f,ci(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(ai,n)}catch{}return!0}finally{N.p=i,T.T=l,u0(t,e)}}function mc(t,e,a){e=Yt(a,e),e=vf(t.stateNode,e,2),t=Le(t,e,2),t!==null&&(ii(t,2),ae(t))}function U(t,e,a){if(t.tag===3)mc(t,t,a);else for(;e!==null;){if(e.tag===3){mc(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ye===null||!Ye.has(l))){t=Yt(a,t),a=wd(2),l=Le(e,a,2),l!==null&&(Td(a,l,e,t),ii(l,2),ae(l));break}}e=e.return}}function Hu(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new I1;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(a)||(zo=!0,i.add(a),t=lh.bind(null,t,e,a),e.then(t,t))}function lh(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,L===t&&(O&a)===a&&(W===4||W===3&&(O&62914560)===O&&300>At()-jn?(R&2)===0&&el(t,0):Mo|=a,Pa===O&&(Pa=0)),ae(t)}function o0(t,e){e===0&&(e=Pc()),t=ma(t,e),t!==null&&(ii(t,e),ae(t))}function ih(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),o0(t,a)}function nh(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(y(314))}l!==null&&l.delete(e),o0(t,a)}function uh(t,e){return qf(t,e)}var vn=null,Ea=null,Ef=!1,xn=!1,Uu=!1,Ue=0;function ae(t){t!==Ea&&t.next===null&&(Ea===null?vn=Ea=t:Ea=Ea.next=t),xn=!0,Ef||(Ef=!0,oh())}function ci(t,e){if(!Uu&&xn){Uu=!0;do for(var a=!1,l=vn;l!==null;){if(!e)if(t!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var u=l.suspendedLanes,f=l.pingedLanes;n=(1<<31-_t(42|t)+1)-1,n&=i&~(u&~f),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,yc(l,n))}else n=O,n=Cn(l,l===L?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||li(l,n)||(a=!0,yc(l,n));l=l.next}while(a);Uu=!1}}function fh(){s0()}function s0(){xn=Ef=!1;var t=0;Ue!==0&&bh()&&(t=Ue);for(var e=At(),a=null,l=vn;l!==null;){var i=l.next,n=c0(l,e);n===0?(l.next=null,a===null?vn=i:a.next=i,i===null&&(Ea=a)):(a=l,(t!==0||(n&3)!==0)&&(xn=!0)),l=i}it!==0&&it!==5||ci(t,!1),Ue!==0&&(Ue=0)}function c0(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var u=31-_t(n),f=1<<u,o=i[u];o===-1?((f&a)===0||(f&l)!==0)&&(i[u]=Rp(f,e)):o<=e&&(t.expiredLanes|=f),n&=~f}if(e=L,a=O,a=Cn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(H===2||H===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&du(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||li(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&du(l),Yf(a)){case 2:case 8:a=$c;break;case 32:a=en;break;case 268435456:a=Ic;break;default:a=en}return l=r0.bind(null,t),a=qf(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&du(l),t.callbackPriority=2,t.callbackNode=null,2}function r0(t,e){if(it!==0&&it!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yn()&&t.callbackNode!==a)return null;var l=O;return l=Cn(t,t===L?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Wd(t,l,e),c0(t,At()),t.callbackNode!=null&&t.callbackNode===a?r0.bind(null,t):null)}function yc(t,e){if(Yn())return null;Wd(t,e,!0)}function oh(){yh(function(){(R&6)!==0?qf(Wc,fh):s0()})}function Eo(){if(Ue===0){var t=Wa;t===0&&(t=xi,xi<<=1,(xi&261888)===0&&(xi=256)),Ue=t}return Ue}function vc(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gi(""+t)}function xc(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function sh(t,e,a,l,i){if(e==="submit"&&a&&a.stateNode===i){var n=vc((i[Tt]||null).action),u=l.submitter;u&&(e=(e=u[Tt]||null)?vc(e.formAction):u.getAttribute("formAction"),e!==null&&(n=e,u=null));var f=new An("action","action",null,l,i);t.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ue!==0){var o=u?xc(i,u):new FormData(i);mf(a,{pending:!0,data:o,method:i.method,action:n},null,o)}}else typeof n=="function"&&(f.preventDefault(),o=u?xc(i,u):new FormData(i),mf(a,{pending:!0,data:o,method:i.method,action:n},n,o))},currentTarget:i}]})}}for(Di=0;Di<nf.length;Di++)Bi=nf[Di],Sc=Bi.toLowerCase(),wc=Bi[0].toUpperCase()+Bi.slice(1),Ft(Sc,"on"+wc);var Bi,Sc,wc,Di;Ft(Tr,"onAnimationEnd");Ft(zr,"onAnimationIteration");Ft(Mr,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(E1,"onTransitionRun");Ft(C1,"onTransitionStart");Ft(A1,"onTransitionCancel");Ft(kr,"onTransitionEnd");Ja("onMouseEnter",["mouseout","mouseover"]);Ja("onMouseLeave",["mouseout","mouseover"]);Ja("onPointerEnter",["pointerout","pointerover"]);Ja("onPointerLeave",["pointerout","pointerover"]);ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ha("onBeforeInput",["compositionend","keypress","textInput","paste"]);ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ch=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function d0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],i=l.event;l=l.listeners;t:{var n=void 0;if(e)for(var u=l.length-1;0<=u;u--){var f=l[u],o=f.instance,r=f.currentTarget;if(f=f.listener,o!==n&&i.isPropagationStopped())break t;n=f,i.currentTarget=r;try{n(i)}catch(b){ln(b)}i.currentTarget=null,n=o}else for(u=0;u<l.length;u++){if(f=l[u],o=f.instance,r=f.currentTarget,f=f.listener,o!==n&&i.isPropagationStopped())break t;n=f,i.currentTarget=r;try{n(i)}catch(b){ln(b)}i.currentTarget=null,n=o}}}}function E(t,e){var a=e[Wu];a===void 0&&(a=e[Wu]=new Set);var l=t+"__bubble";a.has(l)||(p0(e,t,2,!1),a.add(l))}function Gu(t,e,a){var l=0;e&&(l|=4),p0(a,t,l,e)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[Ri]){t[Ri]=!0,ir.forEach(function(a){a!=="selectionchange"&&(ch.has(a)||Gu(a,!1,t),Gu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ri]||(e[Ri]=!0,Gu("selectionchange",!1,e))}}function p0(t,e,a,l){switch(k0(e)){case 2:var i=Gh;break;case 8:i=jh;break;default:i=Do}a=i.bind(null,e,a,t),i=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function ju(t,e,a,l,i){var n=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var f=l.stateNode.containerInfo;if(f===i)break;if(u===4)for(u=l.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;f!==null;){if(u=Oa(f),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){l=n=u;continue t}f=f.parentNode}}l=l.return}dr(function(){var r=n,b=Qf(a),g=[];t:{var d=Er.get(t);if(d!==void 0){var h=An,v=t;switch(t){case"keypress":if(qi(a)===0)break t;case"keydown":case"keyup":h=n1;break;case"focusin":v="focus",h=mu;break;case"focusout":v="blur",h=mu;break;case"beforeblur":case"afterblur":h=mu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=As;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=o1;break;case Tr:case zr:case Mr:h=Wp;break;case kr:h=c1;break;case"scroll":case"scrollend":h=Qp;break;case"wheel":h=d1;break;case"copy":case"cut":case"paste":h=Ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=_s;break;case"toggle":case"beforetoggle":h=h1}var w=(e&4)!==0,G=!w&&(t==="scroll"||t==="scrollend"),c=w?d!==null?d+"Capture":null:d;w=[];for(var s=r,p;s!==null;){var m=s;if(p=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||p===null||c===null||(m=Yl(s,c),m!=null&&w.push($l(s,m,p))),G)break;s=s.return}0<w.length&&(d=new h(d,v,null,a,b),g.push({event:d,listeners:w}))}}if((e&7)===0){t:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&a!==tf&&(v=a.relatedTarget||a.fromElement)&&(Oa(v)||v[il]))break t;if((h||d)&&(d=b.window===b?b:(d=b.ownerDocument)?d.defaultView||d.parentWindow:window,h?(v=a.relatedTarget||a.toElement,h=r,v=v?Oa(v):null,v!==null&&(G=ei(v),w=v.tag,v!==G||w!==5&&w!==27&&w!==6)&&(v=null)):(h=null,v=r),h!==v)){if(w=As,m="onMouseLeave",c="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(w=_s,m="onPointerLeave",c="onPointerEnter",s="pointer"),G=h==null?d:Ml(h),p=v==null?d:Ml(v),d=new w(m,s+"leave",h,a,b),d.target=G,d.relatedTarget=p,m=null,Oa(b)===r&&(w=new w(c,s+"enter",v,a,b),w.target=p,w.relatedTarget=G,m=w),G=m,h&&v)e:{for(w=rh,c=h,s=v,p=0,m=c;m;m=w(m))p++;m=0;for(var S=s;S;S=w(S))m++;for(;0<p-m;)c=w(c),p--;for(;0<m-p;)s=w(s),m--;for(;p--;){if(c===s||s!==null&&c===s.alternate){w=c;break e}c=w(c),s=w(s)}w=null}else w=null;h!==null&&Tc(g,d,h,w,!1),v!==null&&G!==null&&Tc(g,G,v,w,!0)}}t:{if(d=r?Ml(r):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var D=Ns;else if(Rs(d))if(yr)D=z1;else{D=w1;var x=S1}else h=d.nodeName,!h||h.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?r&&Zf(r.elementType)&&(D=Ns):D=T1;if(D&&(D=D(t,r))){mr(g,D,a,b);break t}x&&x(t,d,r),t==="focusout"&&r&&d.type==="number"&&r.memoizedProps.value!=null&&Pu(d,"number",d.value)}switch(x=r?Ml(r):window,t){case"focusin":(Rs(x)||x.contentEditable==="true")&&(Ba=x,af=r,Ol=null);break;case"focusout":Ol=af=Ba=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,js(g,a,b);break;case"selectionchange":if(k1)break;case"keydown":case"keyup":js(g,a,b)}var k;if(Jf)t:{switch(t){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else Da?gr(t,a)&&(A="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(A="onCompositionStart");A&&(hr&&a.locale!=="ko"&&(Da||A!=="onCompositionStart"?A==="onCompositionEnd"&&Da&&(k=pr()):(Re=b,Vf="value"in Re?Re.value:Re.textContent,Da=!0)),x=Sn(r,A),0<x.length&&(A=new Os(A,t,null,a,b),g.push({event:A,listeners:x}),k?A.data=k:(k=br(a),k!==null&&(A.data=k)))),(k=b1?m1(t,a):y1(t,a))&&(A=Sn(r,"onBeforeInput"),0<A.length&&(x=new Os("onBeforeInput","beforeinput",null,a,b),g.push({event:x,listeners:A}),x.data=k)),sh(g,t,r,a,b)}d0(g,e)})}function $l(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Sn(t,e){for(var a=e+"Capture",l=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Yl(t,a),i!=null&&l.unshift($l(t,i,n)),i=Yl(t,e),i!=null&&l.push($l(t,i,n))),t.tag===3)return l;t=t.return}return[]}function rh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tc(t,e,a,l,i){for(var n=e._reactName,u=[];a!==null&&a!==l;){var f=a,o=f.alternate,r=f.stateNode;if(f=f.tag,o!==null&&o===l)break;f!==5&&f!==26&&f!==27||r===null||(o=r,i?(r=Yl(a,n),r!=null&&u.unshift($l(a,r,o))):i||(r=Yl(a,n),r!=null&&u.push($l(a,r,o)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var dh=/\r\n?/g,ph=/\u0000|\uFFFD/g;function zc(t){return(typeof t=="string"?t:""+t).replace(dh,`
`).replace(ph,"")}function h0(t,e){return e=zc(e),zc(t)===e}function j(t,e,a,l,i,n){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Fa(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Fa(t,""+l);break;case"className":Ti(t,"class",l);break;case"tabIndex":Ti(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(t,a,l);break;case"style":rr(t,l,n);break;case"data":if(e!=="object"){Ti(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Gi(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(e!=="input"&&j(t,e,"name",i.name,i,null),j(t,e,"formEncType",i.formEncType,i,null),j(t,e,"formMethod",i.formMethod,i,null),j(t,e,"formTarget",i.formTarget,i,null)):(j(t,e,"encType",i.encType,i,null),j(t,e,"method",i.method,i,null),j(t,e,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Gi(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=de);break;case"onScroll":l!=null&&E("scroll",t);break;case"onScrollEnd":l!=null&&E("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Gi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":E("beforetoggle",t),E("toggle",t),Ui(t,"popover",l);break;case"xlinkActuate":ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ie(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ie(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ie(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ie(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ui(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xp.get(a)||a,Ui(t,a,l))}}function Cf(t,e,a,l,i,n){switch(a){case"style":rr(t,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Fa(t,l):(typeof l=="number"||typeof l=="bigint")&&Fa(t,""+l);break;case"onScroll":l!=null&&E("scroll",t);break;case"onScrollEnd":l!=null&&E("scrollend",t);break;case"onClick":l!=null&&(t.onclick=de);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nr.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),n=t[Tt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(e,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,i);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ui(t,a,l)}}}function pt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":E("error",t),E("load",t);var l=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var u=a[n];if(u!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:j(t,e,n,u,a,null)}}i&&j(t,e,"srcSet",a.srcSet,a,null),l&&j(t,e,"src",a.src,a,null);return;case"input":E("invalid",t);var f=n=u=i=null,o=null,r=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":i=b;break;case"type":u=b;break;case"checked":o=b;break;case"defaultChecked":r=b;break;case"value":n=b;break;case"defaultValue":f=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(y(137,e));break;default:j(t,e,l,b,a,null)}}or(t,n,f,o,r,u,i,!1);return;case"select":E("invalid",t),l=u=n=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":n=f;break;case"defaultValue":u=f;break;case"multiple":l=f;default:j(t,e,i,f,a,null)}e=n,a=u,t.multiple=!!l,e!=null?La(t,!!l,e,!1):a!=null&&La(t,!!l,a,!0);return;case"textarea":E("invalid",t),n=i=l=null;for(u in a)if(a.hasOwnProperty(u)&&(f=a[u],f!=null))switch(u){case"value":l=f;break;case"defaultValue":i=f;break;case"children":n=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(y(91));break;default:j(t,e,u,f,a,null)}cr(t,l,i,n);return;case"option":for(o in a)a.hasOwnProperty(o)&&(l=a[o],l!=null)&&(o==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":j(t,e,o,l,a,null));return;case"dialog":E("beforetoggle",t),E("toggle",t),E("cancel",t),E("close",t);break;case"iframe":case"object":E("load",t);break;case"video":case"audio":for(l=0;l<Wl.length;l++)E(Wl[l],t);break;case"image":E("error",t),E("load",t);break;case"details":E("toggle",t);break;case"embed":case"source":case"link":E("error",t),E("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:j(t,e,r,l,a,null)}return;default:if(Zf(e)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Cf(t,e,b,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&j(t,e,f,l,a,null))}function hh(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,f=null,o=null,r=null,b=null;for(h in a){var g=a[h];if(a.hasOwnProperty(h)&&g!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":o=g;default:l.hasOwnProperty(h)||j(t,e,h,null,l,g)}}for(var d in l){var h=l[d];if(g=a[d],l.hasOwnProperty(d)&&(h!=null||g!=null))switch(d){case"type":n=h;break;case"name":i=h;break;case"checked":r=h;break;case"defaultChecked":b=h;break;case"value":u=h;break;case"defaultValue":f=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,e));break;default:h!==g&&j(t,e,d,h,l,g)}}Iu(t,u,f,o,r,b,n,i);return;case"select":h=u=f=d=null;for(n in a)if(o=a[n],a.hasOwnProperty(n)&&o!=null)switch(n){case"value":break;case"multiple":h=o;default:l.hasOwnProperty(n)||j(t,e,n,null,l,o)}for(i in l)if(n=l[i],o=a[i],l.hasOwnProperty(i)&&(n!=null||o!=null))switch(i){case"value":d=n;break;case"defaultValue":f=n;break;case"multiple":u=n;default:n!==o&&j(t,e,i,n,l,o)}e=f,a=u,l=h,d!=null?La(t,!!a,d,!1):!!l!=!!a&&(e!=null?La(t,!!a,e,!0):La(t,!!a,a?[]:"",!1));return;case"textarea":h=d=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:j(t,e,f,null,l,i)}for(u in l)if(i=l[u],n=a[u],l.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":d=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(y(91));break;default:i!==n&&j(t,e,u,i,l,n)}sr(t,d,h);return;case"option":for(var v in a)d=a[v],a.hasOwnProperty(v)&&d!=null&&!l.hasOwnProperty(v)&&(v==="selected"?t.selected=!1:j(t,e,v,null,l,d));for(o in l)d=l[o],h=a[o],l.hasOwnProperty(o)&&d!==h&&(d!=null||h!=null)&&(o==="selected"?t.selected=d&&typeof d!="function"&&typeof d!="symbol":j(t,e,o,d,l,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)d=a[w],a.hasOwnProperty(w)&&d!=null&&!l.hasOwnProperty(w)&&j(t,e,w,null,l,d);for(r in l)if(d=l[r],h=a[r],l.hasOwnProperty(r)&&d!==h&&(d!=null||h!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(y(137,e));break;default:j(t,e,r,d,l,h)}return;default:if(Zf(e)){for(var G in a)d=a[G],a.hasOwnProperty(G)&&d!==void 0&&!l.hasOwnProperty(G)&&Cf(t,e,G,void 0,l,d);for(b in l)d=l[b],h=a[b],!l.hasOwnProperty(b)||d===h||d===void 0&&h===void 0||Cf(t,e,b,d,l,h);return}}for(var c in a)d=a[c],a.hasOwnProperty(c)&&d!=null&&!l.hasOwnProperty(c)&&j(t,e,c,null,l,d);for(g in l)d=l[g],h=a[g],!l.hasOwnProperty(g)||d===h||d==null&&h==null||j(t,e,g,d,l,h)}function Mc(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],n=i.transferSize,u=i.initiatorType,f=i.duration;if(n&&f&&Mc(u)){for(u=0,f=i.responseEnd,l+=1;l<a.length;l++){var o=a[l],r=o.startTime;if(r>f)break;var b=o.transferSize,g=o.initiatorType;b&&Mc(g)&&(o=o.responseEnd,u+=b*(o<f?1:(f-r)/(o-r)))}if(--l,e+=8*(n+u)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Af=null,Of=null;function wn(t){return t.nodeType===9?t:t.ownerDocument}function kc(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function _f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qu=null;function bh(){var t=window.event;return t&&t.type==="popstate"?t===qu?!1:(qu=t,!0):(qu=null,!1)}var b0=typeof setTimeout=="function"?setTimeout:void 0,mh=typeof clearTimeout=="function"?clearTimeout:void 0,Ec=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ec!="undefined"?function(t){return Ec.resolve(null).then(t).catch(vh)}:b0;function vh(t){setTimeout(function(){throw t})}function Ie(t){return t==="head"}function Cc(t,e){var a=e,l=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(i),ll(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")ql(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ql(a);for(var n=a.firstChild;n;){var u=n.nextSibling,f=n.nodeName;n[ni]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=u}}else a==="body"&&ql(t.ownerDocument.body);a=i}while(a);ll(e)}function Ac(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Df(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),Xf(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xh(t,e,a,l){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ni])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Qt(t.nextSibling),t===null)break}return null}function Sh(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Qt(t.nextSibling),t===null))return null;return t}function m0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Qt(t.nextSibling),t===null))return null;return t}function Bf(t){return t.data==="$?"||t.data==="$~"}function Rf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function wh(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Qt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Nf=null;function Oc(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Qt(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function _c(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function y0(t,e,a){switch(e=wn(a),t){case"html":if(t=e.documentElement,!t)throw Error(y(452));return t;case"head":if(t=e.head,!t)throw Error(y(453));return t;case"body":if(t=e.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function ql(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Xf(t)}var Vt=new Map,Dc=new Set;function Tn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var we=N.d;N.d={f:Th,r:zh,D:Mh,C:kh,L:Eh,m:Ch,X:Oh,S:Ah,M:_h};function Th(){var t=we.f(),e=qn();return t||e}function zh(t){var e=nl(t);e!==null&&e.tag===5&&e.type==="form"?rd(e):we.r(t)}var sl=typeof document=="undefined"?null:document;function v0(t,e,a){var l=sl;if(l&&typeof e=="string"&&e){var i=Lt(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Dc.has(i)||(Dc.add(i),t={rel:t,crossOrigin:a,href:e},l.querySelector(i)===null&&(e=l.createElement("link"),pt(e,"link",t),ft(e),l.head.appendChild(e)))}}function Mh(t){we.D(t),v0("dns-prefetch",t,null)}function kh(t,e){we.C(t,e),v0("preconnect",t,e)}function Eh(t,e,a){we.L(t,e,a);var l=sl;if(l&&t&&e){var i='link[rel="preload"][as="'+Lt(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Lt(a.imageSizes)+'"]')):i+='[href="'+Lt(t)+'"]';var n=i;switch(e){case"style":n=al(t);break;case"script":n=cl(t)}Vt.has(n)||(t=V({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Vt.set(n,t),l.querySelector(i)!==null||e==="style"&&l.querySelector(ri(n))||e==="script"&&l.querySelector(di(n))||(e=l.createElement("link"),pt(e,"link",t),ft(e),l.head.appendChild(e)))}}function Ch(t,e){we.m(t,e);var a=sl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Lt(l)+'"][href="'+Lt(t)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=cl(t)}if(!Vt.has(n)&&(t=V({rel:"modulepreload",href:t},e),Vt.set(n,t),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(di(n)))return}l=a.createElement("link"),pt(l,"link",t),ft(l),a.head.appendChild(l)}}}function Ah(t,e,a){we.S(t,e,a);var l=sl;if(l&&t){var i=qa(l).hoistableStyles,n=al(t);e=e||"default";var u=i.get(n);if(!u){var f={loading:0,preload:null};if(u=l.querySelector(ri(n)))f.loading=5;else{t=V({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Vt.get(n))&&Ao(t,a);var o=u=l.createElement("link");ft(o),pt(o,"link",t),o._p=new Promise(function(r,b){o.onload=r,o.onerror=b}),o.addEventListener("load",function(){f.loading|=1}),o.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ji(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:f},i.set(n,u)}}}function Oh(t,e){we.X(t,e);var a=sl;if(a&&t){var l=qa(a).hoistableScripts,i=cl(t),n=l.get(i);n||(n=a.querySelector(di(i)),n||(t=V({src:t,async:!0},e),(e=Vt.get(i))&&Oo(t,e),n=a.createElement("script"),ft(n),pt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function _h(t,e){we.M(t,e);var a=sl;if(a&&t){var l=qa(a).hoistableScripts,i=cl(t),n=l.get(i);n||(n=a.querySelector(di(i)),n||(t=V({src:t,async:!0,type:"module"},e),(e=Vt.get(i))&&Oo(t,e),n=a.createElement("script"),ft(n),pt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Bc(t,e,a,l){var i=(i=Ge.current)?Tn(i):null;if(!i)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=al(a.href),a=qa(i).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=al(a.href);var n=qa(i).hoistableStyles,u=n.get(t);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,u),(n=i.querySelector(ri(t)))&&!n._p&&(u.instance=n,u.state.loading=5),Vt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vt.set(t,a),n||Dh(i,t,a,u.state))),e&&l===null)throw Error(y(528,""));return u}if(e&&l!==null)throw Error(y(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=cl(a),a=qa(i).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function al(t){return'href="'+Lt(t)+'"'}function ri(t){return'link[rel="stylesheet"]['+t+"]"}function x0(t){return V({},t,{"data-precedence":t.precedence,precedence:null})}function Dh(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),pt(e,"link",a),ft(e),t.head.appendChild(e))}function cl(t){return'[src="'+Lt(t)+'"]'}function di(t){return"script[async]"+t}function Rc(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Lt(a.href)+'"]');if(l)return e.instance=l,ft(l),l;var i=V({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ft(l),pt(l,"style",i),Ji(l,a.precedence,t),e.instance=l;case"stylesheet":i=al(a.href);var n=t.querySelector(ri(i));if(n)return e.state.loading|=4,e.instance=n,ft(n),n;l=x0(a),(i=Vt.get(i))&&Ao(l,i),n=(t.ownerDocument||t).createElement("link"),ft(n);var u=n;return u._p=new Promise(function(f,o){u.onload=f,u.onerror=o}),pt(n,"link",l),e.state.loading|=4,Ji(n,a.precedence,t),e.instance=n;case"script":return n=cl(a.src),(i=t.querySelector(di(n)))?(e.instance=i,ft(i),i):(l=a,(i=Vt.get(n))&&(l=V({},a),Oo(l,i)),t=t.ownerDocument||t,i=t.createElement("script"),ft(i),pt(i,"link",l),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(y(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Ji(l,a.precedence,t));return e.instance}function Ji(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,u=0;u<l.length;u++){var f=l[u];if(f.dataset.precedence===e)n=f;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Ao(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Oo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Fi=null;function Nc(t,e,a){if(Fi===null){var l=new Map,i=Fi=new Map;i.set(a,l)}else i=Fi,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var n=a[i];if(!(n[ni]||n[ct]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(e)||"";u=t+u;var f=l.get(u);f?f.push(n):l.set(u,[n])}}return l}function Hc(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Bh(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function S0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Rh(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=al(l.href),n=e.querySelector(ri(i));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=zn.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=n,ft(n);return}n=e.ownerDocument||e,l=x0(l),(i=Vt.get(i))&&Ao(l,i),n=n.createElement("link"),ft(n);var u=n;u._p=new Promise(function(f,o){u.onload=f,u.onerror=o}),pt(n,"link",l),a.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=zn.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Lu=0;function Nh(t,e){return t.stylesheets&&t.count===0&&Wi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Wi(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+e);0<t.imgBytes&&Lu===0&&(Lu=62500*gh());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wi(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Lu?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function zn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mn=null;function Wi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mn=new Map,e.forEach(Hh,t),Mn=null,zn.call(t))}function Hh(t,e){if(!(e.state.loading&4)){var a=Mn.get(t);if(a)var l=a.get(null);else{a=new Map,Mn.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}i=e.instance,u=i.getAttribute("data-precedence"),n=a.get(u)||l,n===l&&a.set(null,i),a.set(u,i),this.count++,l=zn.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Il={$$typeof:re,Provider:null,Consumer:null,_currentValue:ia,_currentValue2:ia,_threadCount:0};function Uh(t,e,a,l,i,n,u,f,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.hiddenUpdates=pu(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function w0(t,e,a,l,i,n,u,f,o,r,b,g){return t=new Uh(t,e,a,u,o,r,b,g,f),e=1,n===!0&&(e|=24),n=Et(3,null,null,e),t.current=n,n.stateNode=t,e=eo(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:e},io(n),t}function T0(t){return t?(t=Ha,t):Ha}function z0(t,e,a,l,i,n){i=T0(i),l.context===null?l.context=i:l.pendingContext=i,l=qe(e),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=Le(t,l,e),a!==null&&(wt(a,t,e),Dl(a,t,e))}function Uc(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function _o(t,e){Uc(t,e),(t=t.alternate)&&Uc(t,e)}function M0(t){if(t.tag===13||t.tag===31){var e=ma(t,67108864);e!==null&&wt(e,t,67108864),_o(t,67108864)}}function Gc(t){if(t.tag===13||t.tag===31){var e=Dt();e=Lf(e);var a=ma(t,e);a!==null&&wt(a,t,e),_o(t,e)}}var kn=!0;function Gh(t,e,a,l){var i=T.T;T.T=null;var n=N.p;try{N.p=2,Do(t,e,a,l)}finally{N.p=n,T.T=i}}function jh(t,e,a,l){var i=T.T;T.T=null;var n=N.p;try{N.p=8,Do(t,e,a,l)}finally{N.p=n,T.T=i}}function Do(t,e,a,l){if(kn){var i=Hf(l);if(i===null)ju(t,e,l,En,a),jc(t,l);else if(Lh(i,t,e,a,l))l.stopPropagation();else if(jc(t,l),e&4&&-1<qh.indexOf(t)){for(;i!==null;){var n=nl(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=ea(n.pendingLanes);if(u!==0){var f=n;for(f.pendingLanes|=2,f.entangledLanes|=2;u;){var o=1<<31-_t(u);f.entanglements[1]|=o,u&=~o}ae(n),(R&6)===0&&(bn=At()+500,ci(0,!1))}}break;case 31:case 13:f=ma(n,2),f!==null&&wt(f,n,2),qn(),_o(n,2)}if(n=Hf(l),n===null&&ju(t,e,l,En,a),n===i)break;i=n}i!==null&&l.stopPropagation()}else ju(t,e,l,null,a)}}function Hf(t){return t=Qf(t),Bo(t)}var En=null;function Bo(t){if(En=null,t=Oa(t),t!==null){var e=ei(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Qc(e),t!==null)return t;t=null}else if(a===31){if(t=Vc(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return En=t,null}function k0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ep()){case Wc:return 2;case $c:return 8;case en:case Cp:return 32;case Ic:return 268435456;default:return 32}default:return 32}}var Uf=!1,Ze=null,Qe=null,Ve=null,Pl=new Map,ti=new Map,De=[],qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jc(t,e){switch(t){case"focusin":case"focusout":Ze=null;break;case"dragenter":case"dragleave":Qe=null;break;case"mouseover":case"mouseout":Ve=null;break;case"pointerover":case"pointerout":Pl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(e.pointerId)}}function Sl(t,e,a,l,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},e!==null&&(e=nl(e),e!==null&&M0(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Lh(t,e,a,l,i){switch(e){case"focusin":return Ze=Sl(Ze,t,e,a,l,i),!0;case"dragenter":return Qe=Sl(Qe,t,e,a,l,i),!0;case"mouseover":return Ve=Sl(Ve,t,e,a,l,i),!0;case"pointerover":var n=i.pointerId;return Pl.set(n,Sl(Pl.get(n)||null,t,e,a,l,i)),!0;case"gotpointercapture":return n=i.pointerId,ti.set(n,Sl(ti.get(n)||null,t,e,a,l,i)),!0}return!1}function E0(t){var e=Oa(t.target);if(e!==null){var a=ei(e);if(a!==null){if(e=a.tag,e===13){if(e=Qc(a),e!==null){t.blockedOn=e,ws(t.priority,function(){Gc(a)});return}}else if(e===31){if(e=Vc(a),e!==null){t.blockedOn=e,ws(t.priority,function(){Gc(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Hf(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);tf=l,a.target.dispatchEvent(l),tf=null}else return e=nl(a),e!==null&&M0(e),t.blockedOn=a,!1;e.shift()}return!0}function qc(t,e,a){$i(t)&&a.delete(e)}function Yh(){Uf=!1,Ze!==null&&$i(Ze)&&(Ze=null),Qe!==null&&$i(Qe)&&(Qe=null),Ve!==null&&$i(Ve)&&(Ve=null),Pl.forEach(qc),ti.forEach(qc)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,Uf||(Uf=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Yh)))}var Hi=null;function Lc(t){Hi!==t&&(Hi=t,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,function(){Hi===t&&(Hi=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],i=t[e+2];if(typeof l!="function"){if(Bo(l||a)===null)continue;break}var n=nl(a);n!==null&&(t.splice(e,3),e-=3,mf(n,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function ll(t){function e(o){return Ni(o,t)}Ze!==null&&Ni(Ze,t),Qe!==null&&Ni(Qe,t),Ve!==null&&Ni(Ve,t),Pl.forEach(e),ti.forEach(e);for(var a=0;a<De.length;a++){var l=De[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<De.length&&(a=De[0],a.blockedOn===null);)E0(a),a.blockedOn===null&&De.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],n=a[l+1],u=i[Tt]||null;if(typeof n=="function")u||Lc(a);else if(u){var f=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[Tt]||null)f=u.formAction;else if(Bo(i)!==null)continue}else f=u.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),Lc(a)}}}function C0(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Ro(t){this._internalRoot=t}Xn.prototype.render=Ro.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));var a=e.current,l=Dt();z0(a,l,t,e,null,null)};Xn.prototype.unmount=Ro.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;z0(t.current,2,null,t,null,null),qn(),e[il]=null}};function Xn(t){this._internalRoot=t}Xn.prototype.unstable_scheduleHydration=function(t){if(t){var e=lr();t={blockedOn:null,target:t,priority:e};for(var a=0;a<De.length&&e!==0&&e<De[a].priority;a++);De.splice(a,0,t),a===0&&E0(t)}};var Yc=Xc.version;if(Yc!=="19.2.8")throw Error(y(527,Yc,"19.2.8"));N.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=xp(e),t=t!==null?Kc(t):null,t=t===null?null:t.stateNode,t};var Xh={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(wl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!wl.isDisabled&&wl.supportsFiber))try{ai=wl.inject(Xh),Ot=wl}catch{}var wl;Zn.createRoot=function(t,e){if(!Zc(t))throw Error(y(299));var a=!1,l="",i=vd,n=xd,u=Sd;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=w0(t,1,!1,null,null,a,l,null,i,n,u,C0),t[il]=e.current,Co(t),new Ro(e)};Zn.hydrateRoot=function(t,e,a){if(!Zc(t))throw Error(y(299));var l=!1,i="",n=vd,u=xd,f=Sd,o=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),e=w0(t,1,!0,e,a!=null?a:null,l,i,o,n,u,f,C0),e.context=T0(null),a=e.current,l=Dt(),l=Lf(l),i=qe(l),i.callback=null,Le(a,i,l),a=l,e.current.lanes=a,ii(e,a),ae(e),t[il]=e.current,Co(t),new Xn(e)};Zn.version="19.2.8"});var D0=ze((og,_0)=>{"use strict";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(t){console.error(t)}}O0(),_0.exports=A0()});var Nt=Yo(hi()),X0=Yo(D0());var B0=`<!doctype html>
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
</style>
</helmet>
<div style="width: 390px; min-height: 1180px; box-sizing: border-box; padding: 20px 16px 20px; display: flex; flex-direction: column; gap: 14px; background: #0d0f14; font-family: Rubik, system-ui, sans-serif; color: #ffffff; position: relative">

<header style="display: flex; align-items: center; gap: 12px; height: 56px">
<img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="\u0415\u043D\u043E\u0442-\u0431\u0430\u043D\u0434\u0438\u0442" style="width: 52px; height: 52px; border-radius: 50%; object-fit: cover; flex-shrink: 0; border: 2px solid #ffc83d; box-sizing: border-box">
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1; min-width: 0">
<div style="font-size: 26px; font-weight: 900; font-style: italic; letter-spacing: 0.5px; line-height: 1">RACK<span style="color: #ffc83d">OON</span></div>
<div style="font-size: 12px; font-weight: 500; color: #a3a8b5">{{tgName}} \xB7 Level 1</div>
</div>
<div style="display: flex; align-items: center; gap: 8px; background: #1b1e27; border-radius: 999px; padding: 4px 4px 4px 14px">
<span style="font-size: 15px; font-weight: 700; white-space: nowrap">{{balanceText}}</span>
<button type="button" aria-label="\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441" style="width: 40px; height: 40px; border-radius: 50%; border: 0; background: #2a7fff; color: #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer">
<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M9 2 V16 M2 9 H16" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round"></path></svg>
</button>
</div>
</header>

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
<a href="#" style="text-decoration: none; height: 56px; border-radius: 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #8a90a0; font-size: 11px; font-weight: 700">
<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M11 2 L20 6.5 V15.5 L11 20 L2 15.5 V6.5Z M2 6.5 L11 11 L20 6.5 M11 11 V20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path></svg>
\u0418\u043D\u0432\u0435\u043D\u0442\u0430\u0440\u044C
</a>
<a href="#" aria-current="page" style="text-decoration: none; height: 56px; border-radius: 18px; background: #232838; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #ffc83d; font-size: 11px; font-weight: 700">
<svg width="24" height="22" viewBox="0 0 24 22" aria-hidden="true"><path d="M6 5 H18 C21 5 23 8 23 12 C23 16 21 18 19 18 C17 18 16 15 14 15 H10 C8 15 7 18 5 18 C3 18 1 16 1 12 C1 8 3 5 6 5Z" fill="currentColor"></path><path d="M7 9 V13 M5 11 H9" stroke="#151821" stroke-width="2" stroke-linecap="round"></path><circle cx="16" cy="10" r="1.4" fill="#151821"></circle><circle cx="18" cy="13" r="1.4" fill="#151821"></circle></svg>
\u0418\u0433\u0440\u044B
</a>
<a href="#" style="text-decoration: none; height: 56px; border-radius: 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #8a90a0; font-size: 11px; font-weight: 700">
<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><rect x="3" y="3" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M7 8 L9 10 L12 7 M7 14 H15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
\u0417\u0430\u0434\u0430\u043D\u0438\u044F
</a>
<a href="#" style="text-decoration: none; height: 56px; border-radius: 18px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; color: #8a90a0; font-size: 11px; font-weight: 700">
<svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M6 3 H16 V8 C16 11 14 13 11 13 C8 13 6 11 6 8Z M6 5 H3 C3 8 4 9 6 9 M16 5 H19 C19 8 18 9 16 9 M11 13 V17 M7 19 H15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
\u041B\u0438\u0434\u0435\u0440\u044B
</a>
</nav>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1180}}'>
var DROPS = [
  { name: 'Homemade Cake', price: 2.6, img: '/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d' },
  { name: 'Snow Globe', price: 3.2, img: '/_blob/6e3628fac94b5266f3b64cea9c5fe7ee' },
  { name: 'Eternal Rose', price: 16, img: '/_blob/734e25b54462cda990767f69381d8355' },
  { name: 'Signet Ring', price: 25, img: '/_blob/4826a2db621709393534f8feae3d3f4a' },
  { name: 'Swiss Watch', price: 28, img: '/_blob/5efc0b426406d53e3b649c727079f26d' },
  { name: 'Toy Bear', price: 17, img: '/_blob/c02bc9477e447f6f71962df1fc7a399a' },
  { name: 'Top Hat', price: 8.5, img: '/_blob/fe01a5a2d2ff76e0192e008ed6267558' },
  { name: 'Desk Calendar', price: 2.1, img: '/_blob/9b7049b84c84b25ce8e457f56c837c42' },
  { name: 'Ion Gem', price: 70, img: '/_blob/e562d84d61312007f5108ab64cbfe6f9' },
  { name: 'Love Potion', price: 13, img: '/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65' },
  { name: 'Diamond Ring', price: 12, img: '/_blob/ef580f1649ad89b5e268954da6ea30b2' },
  { name: 'Precious Peach', price: 300, img: '/_blob/923c4583ef32f1e6549c08d5a1839d4c' }
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
class Component extends DCLogic {
  constructor(props) {
    super(props);
    var list = [];
    for (var i = 0; i < 8; i++) list.push(pickDrop());
    this.state = { drops: list, online: 934 };
  }
  componentDidMount() {
    var self = this;
    this.iv = setInterval(function () {
      var s = self.state;
      self.setState({ drops: [pickDrop()].concat(s.drops).slice(0, 8), online: Math.max(800, s.online + Math.round((Math.random() - 0.5) * 8)) });
    }, 2200);
  }
  componentWillUnmount() { clearInterval(this.iv); }
  renderVals() {
    return {
      online: this.state.online,
      balanceText: (window.RK ? window.RK.wallet.get() : 0).toFixed(2) + ' TON',
      tgName: (window.RK && window.RK.user && window.RK.user.first_name) || '\u0413\u043E\u0441\u0442\u044C',
      drops: this.state.drops.map(function (d) { return { name: d.name, img: d.img, color: colorOf(d.price), priceText: d.price + ' TON' }; })
    };
  }
}
<\/script>
</body>
</html>
`;var R0=`<!doctype html>
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

<div style="position: relative; height: 400px; border-radius: 26px; overflow: hidden; background: #070b1c; border: 1px solid #1d2230">
<img src="/_blob/29f965541d768edadf1aad890a105f4f" alt="" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: radial-gradient(circle at 70% 30%, rgba(170,20,45,0.55), rgba(60,5,20,0.75)); opacity: {{tintOpacity}}; transition: opacity 0.35s"></div>

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
<img src="/_blob/a8d1e2a1f1626c9b8edd4755d9c32150" alt="\u0415\u043D\u043E\u0442 \u043D\u0430 \u0440\u0430\u043A\u0435\u0442\u0435" style="position: absolute; width: 110px; height: 121px; {{rocketStyle}}">
</sc-if>

<sc-if value="{{isWait}}" hint-placeholder-val="{{ true }}">
<div style="position: absolute; left: 0; right: 0; top: 96px; display: flex; flex-direction: column; align-items: center; gap: 12px">
<div style="font-size: 62px; font-weight: 900; line-height: 1; color: {{timerColor}}; font-variant-numeric: tabular-nums; text-shadow: 0 0 24px rgba(0,0,0,0.6)">{{timerText}}</div>
<div style="width: 170px; height: 8px; border-radius: 4px; background: rgba(255,255,255,0.12); overflow: hidden">
<div style="height: 8px; border-radius: 4px; background: {{timerColor}}; width: {{timerPct}}%"></div>
</div>
<div style="font-size: 13px; font-weight: 700; letter-spacing: 4px; color: {{timerColor}}">\u0418\u0413\u0420\u0410 \u0427\u0415\u0420\u0415\u0417</div>
</div>
</sc-if>

<sc-if value="{{isFly}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; left: 0; right: 0; top: 150px; text-align: center; font-size: 64px; font-weight: 900; line-height: 1; font-variant-numeric: tabular-nums; text-shadow: 0 2px 20px rgba(0,0,0,0.7)">{{multText}}</div>
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
<div style="height: 44px; border-radius: 12px; background: #151821; border: 1px solid #222838; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900; color: #ffc83d">{{betText}}</div>
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
<sc-for list="{{players}}" as="p" hint-placeholder-count="6">
<div style="display: flex; align-items: center; gap: 10px; background: #151821; border: 1px solid {{p.border}}; border-radius: 16px; padding: 10px 12px">
<div style="width: 38px; height: 38px; border-radius: 12px; background: {{p.avBg}}; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900; flex-shrink: 0">{{p.initial}}</div>
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
var RTP = 0.96, WAIT = 5000, AFTER = 3000, GROWTH = 0.16;
var GIFTS = {
  cake: { name: 'Homemade Cake', price: 2.6, img: '/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d' },
  globe: { name: 'Snow Globe', price: 3.2, img: '/_blob/6e3628fac94b5266f3b64cea9c5fe7ee' },
  record: { name: 'Record Player', price: 7.5, img: '/_blob/8f4c023d08704d2319e54c9872a8c46d' },
  rose: { name: 'Eternal Rose', price: 16, img: '/_blob/734e25b54462cda990767f69381d8355' },
  bear: { name: 'Toy Bear', price: 17, img: '/_blob/c02bc9477e447f6f71962df1fc7a399a' },
  lpotion: { name: 'Love Potion', price: 13, img: '/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65' },
  bells: { name: 'Jingle Bells', price: 2.5, img: '/_blob/808ef5efdbeb6b276f70430b220f760b' }
};
if (window.rkThumb) Object.keys(GIFTS).forEach(function (k) { GIFTS[k].img = window.rkThumb(GIFTS[k].name, GIFTS[k].img); });
var BOT_GIFTS = ['cake', 'globe', 'record', 'rose', 'bear', 'lpotion', 'bells'];
var NAMES = ['Bandit_77', 'TonWhale', '\u0415\u043D\u043E\u0442\u044B\u0447', 'lucky_ray', 'Gift Hunter', 'night_owl', '\u041C\u0443\u0440\u0437\u0438\u043A', 'Sasha_K', 'raccoon.eth', 'Vova', 'Polina', 'moonboy', '\u0416\u043E\u0440\u0430', 'kisa_mur'];
var AV = ['#e5383b', '#2a7fff', '#2bd46b', '#9b5cff', '#ff8a5c', '#00a8a8', '#c77dff', '#e0a800'];

function r2(x) { return Math.round(x * 100) / 100; }
function fmt(x) { return (Math.floor(x * 100) / 100).toFixed(2); }
function crashPoint() {
  var u = Math.random();
  var c = RTP / (1 - u);
  return c < 1 ? 1 : Math.floor(c * 100) / 100;
}
function makeBots() {
  var n = 5 + Math.floor(Math.random() * 5);
  var names = NAMES.slice().sort(function () { return Math.random() - 0.5; }).slice(0, n);
  return names.map(function (nm, i) {
    var gift = Math.random() < 0.35 ? BOT_GIFTS[Math.floor(Math.random() * BOT_GIFTS.length)] : null;
    var bet = gift ? GIFTS[gift].price : r2(0.1 + Math.pow(Math.random(), 2) * 6);
    return { id: 'b' + i, name: nm, bet: bet, gift: gift, target: r2(1.05 + Math.pow(Math.random(), 2) * 6), cashed: false, at: 0, av: AV[i % AV.length] };
  });
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'wait', t0: Date.now(), now: Date.now(), crashAt: crashPoint(), m: 1,
      balance: 50, bet: 1, me: null, queued: null, giftPick: false,
      inv: ['cake', 'globe', 'record', 'rose'],
      bots: makeBots(),
      history: [2.08, 4.6, 2.39, 1.04, 6.85, 3.3, 1.94, 12.4, 1.21, 1.55]
    };
  }
  componentDidMount() {
    var self = this;
    this.iv = setInterval(function () { self.tick(); }, 50);
  }
  componentWillUnmount() { clearInterval(this.iv); }

  tick() {
    var s = this.state, now = Date.now(), el = now - s.t0;
    if (s.phase === 'wait') {
      if (el >= WAIT) this.setState({ phase: 'fly', t0: now, now: now, m: 1 });
      else this.setState({ now: now });
      return;
    }
    if (s.phase === 'fly') {
      var m = Math.exp(GROWTH * el / 1000);
      if (m >= s.crashAt) {
        var me = s.me;
        if (me && !me.cashed) me = Object.assign({}, me, { lost: true });
        this.setState({ phase: 'crash', t0: now, now: now, m: s.crashAt, me: me, history: [s.crashAt].concat(s.history).slice(0, 12) });
        return;
      }
      var bots = s.bots.map(function (b) { return !b.cashed && m >= b.target ? Object.assign({}, b, { cashed: true, at: b.target }) : b; });
      this.setState({ now: now, m: m, bots: bots });
      return;
    }
    if (s.phase === 'crash' && el >= AFTER) {
      var q = s.queued, bal = s.balance, me2 = null, inv = s.inv;
      if (q) {
        if (q.gift) { me2 = { amount: GIFTS[q.gift].price, gift: q.gift, cashed: false }; }
        else if (q.amount <= bal) { bal = r2(bal - q.amount); me2 = { amount: q.amount, gift: null, cashed: false }; }
      }
      this.setState({ phase: 'wait', t0: now, now: now, m: 1, crashAt: crashPoint(), bots: makeBots(), me: me2, queued: null, balance: bal, inv: inv });
    }
  }

  placeTon() {
    var s = this.state;
    if (s.phase === 'wait') {
      if (s.me || s.bet > s.balance) return;
      this.setState({ balance: r2(s.balance - s.bet), me: { amount: s.bet, gift: null, cashed: false } });
    } else {
      this.setState({ queued: s.queued ? null : { amount: s.bet, gift: null } });
    }
  }
  placeGift(k) {
    var s = this.state;
    var inv = s.inv.slice(); var i = inv.indexOf(k);
    if (i === -1) return;
    inv.splice(i, 1);
    if (s.phase === 'wait' && !s.me) this.setState({ inv: inv, giftPick: false, me: { amount: GIFTS[k].price, gift: k, cashed: false } });
    else this.setState({ inv: inv, giftPick: false, queued: { gift: k } });
  }
  cashout() {
    var s = this.state;
    if (s.phase !== 'fly' || !s.me || s.me.cashed) return;
    var pay = Math.floor(s.me.amount * s.m * 100) / 100;
    this.setState({ balance: r2(s.balance + pay), me: Object.assign({}, s.me, { cashed: true, at: Math.floor(s.m * 100) / 100, pay: pay }) });
  }
  setBet(v) { this.setState({ bet: r2(Math.max(0.1, Math.min(v, Math.max(0.1, this.state.balance)))) }); }

  renderVals() {
    var self = this, s = this.state;
    var el = s.now - s.t0;
    var remain = Math.max(0, (WAIT - el) / 1000);
    var timerColor = remain > 3 ? '#2bd46b' : (remain > 1.5 ? '#ffc83d' : '#ff5d73');
    var timerText = (remain < 10 ? '0' : '') + remain.toFixed(2);
    var m = s.phase === 'wait' ? 1 : s.m;
    var p = s.phase === 'wait' ? 0 : 1 - 1 / (1 + Math.log(m) * 1.3);
    var sx = 42, sy = 318;
    var rx = sx + p * 214, ry = sy - p * 196;

    var top = Math.max(2, m * 1.3), scale = [];
    for (var i = 4; i >= 0; i--) scale.push({ label: (1 + (top - 1) * i / 4).toFixed(1) + 'x' });

    var players = [];
    if (s.me) {
      var me = s.me;
      players.push({
        name: '\u0422\u044B', initial: '\u042F', avBg: '#ffc83d', border: '#ffc83d',
        betText: fmt(me.amount) + ' TON',
        multText: me.cashed ? 'x' + me.at.toFixed(2) : (s.phase === 'fly' ? '\u0432 \u0438\u0433\u0440\u0435' : (me.lost ? '\u043A\u0440\u0430\u0448' : 'x1.00')),
        multColor: me.cashed ? '#2bd46b' : (me.lost ? '#ff5d73' : '#8a90a0'),
        payText: me.cashed ? '+' + fmt(me.pay) : (me.lost ? '0.00' : fmt(me.amount)),
        payColor: me.cashed ? '#2bd46b' : (me.lost ? '#ff5d73' : '#ffffff'),
        hasGift: !!me.gift, giftImg: me.gift ? GIFTS[me.gift].img : '', giftName: me.gift ? GIFTS[me.gift].name : ''
      });
    }
    var sorted = s.bots.slice().sort(function (a, b) { return b.bet - a.bet; });
    sorted.forEach(function (b) {
      var lost = s.phase === 'crash' && !b.cashed;
      players.push({
        name: b.name, initial: b.name.charAt(0).toUpperCase(), avBg: b.av, border: b.cashed ? 'rgba(43,212,107,0.4)' : '#222838',
        betText: fmt(b.bet) + ' TON',
        multText: b.cashed ? 'x' + b.at.toFixed(2) : (lost ? 'x' + s.crashAt.toFixed(2) : 'x1.00'),
        multColor: b.cashed ? '#2bd46b' : (lost ? '#ff5d73' : '#8a90a0'),
        payText: b.cashed ? '+' + fmt(b.bet * b.at) : (lost ? '0.00' : fmt(b.bet)),
        payColor: b.cashed ? '#2bd46b' : (lost ? '#ff5d73' : '#ffffff'),
        hasGift: !!b.gift, giftImg: b.gift ? GIFTS[b.gift].img : '', giftName: b.gift ? GIFTS[b.gift].name : ''
      });
    });
    var total = 0; s.bots.forEach(function (b) { total += b.bet; }); if (s.me) total += s.me.amount;

    var canBetNow = s.phase === 'wait' && !s.me;
    var showCashout = s.phase === 'fly' && s.me && !s.me.cashed;

    return {
      balanceText: fmt(s.balance) + ' TON',
      tintOpacity: s.phase === 'crash' ? '1' : '0',
      trailColor: s.phase === 'crash' ? '#ff3b55' : '#3d8bff',
      trailD: s.phase === 'wait' ? 'M 0 0' : 'M ' + sx + ' ' + (sy + 4) + ' Q ' + (sx + (rx - sx) * 0.6).toFixed(1) + ' ' + (sy + 4) + ' ' + rx.toFixed(1) + ' ' + ry.toFixed(1),
      scale: scale,
      isWait: s.phase === 'wait', isFly: s.phase === 'fly', isCrash: s.phase === 'crash',
      timerText: timerText, timerColor: timerColor, timerPct: (remain / (WAIT / 1000)) * 100,
      multText: m.toFixed(2) + 'x',
      crashText: s.crashAt.toFixed(2) + 'x',
      showRocket: s.phase !== 'crash',
      rocketStyle: 'left: ' + (rx - 36).toFixed(1) + 'px; top: ' + (ry - 103).toFixed(1) + 'px; opacity: ' + (s.phase === 'wait' ? '0.85' : '1') + '; animation: rkBob 0.6s ease-in-out infinite; filter: drop-shadow(0 0 14px rgba(61,139,255,0.45))',
      boomPos: 'left: ' + (rx + 28).toFixed(1) + 'px; top: ' + (ry - 44).toFixed(1) + 'px',
      history: s.history.map(function (h) {
        return { label: h.toFixed(2) + 'x', bg: h >= 10 ? 'rgba(255,200,61,0.18)' : (h >= 2 ? 'rgba(42,127,255,0.2)' : 'rgba(255,255,255,0.08)'), color: h >= 10 ? '#ffc83d' : (h >= 2 ? '#7fb2ff' : '#c9cdd6') };
      }),
      showCashout: showCashout,
      cashoutText: showCashout ? fmt(s.me.amount * m) + ' TON' : '',
      cashout: function () { self.cashout(); },
      showBetPanel: !showCashout,
      betText: fmt(s.bet) + ' TON',
      betMinus: function () { self.setBet(self.state.bet - 0.5); },
      betPlus: function () { self.setBet(self.state.bet + 0.5); },
      betHalf: function () { self.setBet(self.state.bet / 2); },
      betDouble: function () { self.setBet(self.state.bet * 2); },
      betDisabled: s.phase === 'wait' && !!s.me,
      tonBtnBg: canBetNow || s.phase !== 'wait' ? '#ffc83d' : '#1d2230',
      tonBtnColor: canBetNow || s.phase !== 'wait' ? '#1a1300' : '#6c7282',
      tonBtnText: s.phase === 'wait' ? (s.me ? '\u0421\u0442\u0430\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430' : '\u0421\u0442\u0430\u0432\u043A\u0430 TON') : (s.queued ? '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C' : '\u041D\u0430 \u0441\u043B\u0435\u0434. \u0440\u0430\u0443\u043D\u0434'),
      giftBtnColor: s.inv.length ? '#ffffff' : '#5a6070',
      openGift: function () { if (self.state.inv.length) self.setState({ giftPick: !self.state.giftPick }); },
      closeGift: function () { self.setState({ giftPick: false }); },
      placeTon: function () { self.placeTon(); },
      showGiftPick: s.giftPick && !showCashout,
      gifts: s.inv.map(function (k) { var g = GIFTS[k]; return { name: g.name, img: g.img, priceText: g.price + ' TON', pick: function () { self.placeGift(k); } }; }),
      hasQueued: !!s.queued,
      queuedText: s.queued ? (s.queued.gift ? GIFTS[s.queued.gift].name : fmt(s.queued.amount) + ' TON') : '',
      players: players,
      playersInfo: players.length + ' \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \xB7 ' + fmt(total) + ' TON'
    };
  }
}
<\/script>
</body>
</html>
`;var N0=`<!doctype html>
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
<input id="rk-search" type="search" value="{{q}}" onInput="{{onSearch}}" placeholder="\u041D\u0430\u0439\u0442\u0438 NFT \u0438\u0437 117 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0439" style="width: 100%; height: 44px; box-sizing: border-box; border-radius: 14px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 14px; padding: 0 14px 0 40px; outline: none">
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
// \u0412\u0441\u0435 117 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0439 NFT-\u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 Telegram (\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0438 \u0442\u0438\u0440\u0430\u0436: giftclub.app, \u0430\u0432\u0433\u0443\u0441\u0442 2026).
// \u0422\u0440\u0435\u0442\u044C\u0435 \u0447\u0438\u0441\u043B\u043E \u2014 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440 \u0446\u0435\u043D\u044B \u0432 TON; \u0433\u0434\u0435 \u0435\u0433\u043E \u043D\u0435\u0442, \u0446\u0435\u043D\u0430 \u043E\u0446\u0435\u043D\u0435\u043D\u0430 \u043F\u043E \u0442\u0438\u0440\u0430\u0436\u0443.
// \u0412 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435 \u0446\u0435\u043D\u044B \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0441 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430 (MRKT / Portals / Fragment).
var RAW = [
  ["Durov's Glasses", 148], ["Heroic Helmet", 1258], ["Heart Locket", 1305], ["Surge Board", 1756],
  ["Mighty Arm", 1769], ["Nail Bracelet", 1832], ["Bling Binky", 1959], ["Gem Signet", 2104],
  ["Perfume Bottle", 2106], ["Mini Oscar", 2108], ["Precious Peach", 2112, 300], ["Plush Pepe", 2448, 5000],
  ["Ionic Dryer", 2455], ["Ion Gem", 2615, 70], ["Genie Lamp", 2623], ["Bonded Ring", 2847],
  ["Artisan Brick", 2852], ["Astral Shard", 2889], ["Love Candle", 3012], ["Durov's Cap", 3029, 700],
  ["Khabib's Papakha", 3143], ["Magic Potion", 3277], ["Rare Bird", 3348], ["Valentine Box", 3559],
  ["Joyful Bundle", 3568], ["Sharp Tongue", 3793], ["Sleigh Bell", 3996], ["Neko Helmet", 4002],
  ["Electric Skull", 4191], ["Snow Mittens", 4684], ["Pretty Posy", 4797], ["Westside Sign", 5186],
  ["Record Player", 5214, 7.5], ["Eternal Rose", 5403, 16], ["Sky Stilettos", 5542], ["Cupid Charm", 5569],
  ["Lush Bouquet", 5797], ["Holiday Drink", 5923], ["Snow Globe", 5979, 3.2], ["UFC Strike", 5984],
  ["Bunny Muffin", 6223, 4.3], ["Love Potion", 6420, 13], ["Mad Pumpkin", 6426], ["Loot Bag", 6429],
  ["Hanging Star", 6488], ["Low Rider", 6519], ["Flying Broom", 6536], ["Mousse Cake", 6669],
  ["Skull Flower", 6856], ["Timeless Book", 6986], ["Signet Ring", 7099, 25], ["Kissed Frog", 7508],
  ["Jingle Bells", 7965, 2.5], ["Crystal Ball", 8004], ["Bow Tie", 8092], ["Diamond Ring", 8179, 12],
  ["Top Hat", 8191, 8.5], ["Hypno Lollipop", 8343, 2.4], ["Star Notepad", 8443], ["Vintage Cigar", 8528],
  ["Berry Box", 8623, 4.1], ["Money Pot", 8661], ["Restless Jar", 8729], ["Snake Box", 8755],
  ["Winter Wreath", 8926], ["Trapped Heart", 9566], ["Happy Brownie", 9989], ["Pet Snake", 10382],
  ["Tama Gadget", 10412], ["Swiss Watch", 10480, 28], ["Fresh Socks", 10667], ["Voodoo Doll", 10752],
  ["Faith Amulet", 10892], ["Big Year", 11544], ["Spring Basket", 11605], ["Spiced Wine", 11682],
  ["Santa Hat", 11705], ["Eternal Candle", 11919], ["Jester Hat", 11969], ["Pool Float", 12397],
  ["Mood Pack", 12462], ["Liberty Figure", 12499], ["Moon Pendant", 12531], ["Cookie Heart", 12779],
  ["Input Key", 13025], ["Whip Cupcake", 13270], ["Victory Medal", 13289], ["Sakura Flower", 13339],
  ["Jelly Bunny", 13367], ["Xmas Stocking", 13526], ["Jolly Chimp", 13658], ["Scared Cat", 13986],
  ["Hex Pot", 14095], ["Candy Cane", 14703], ["Stellar Rocket", 15504], ["Jack-in-the-Box", 15807],
  ["Light Sword", 16012], ["Ginger Cookie", 16858], ["Lunar Snake", 16883], ["Snoop Cigar", 17056],
  ["Clover Pin", 17449], ["Evil Eye", 17803], ["Swag Bag", 19313], ["Party Sparkler", 20446],
  ["Instant Ramen", 21613], ["B-Day Candle", 23201, 1.8], ["Easter Egg", 25973], ["Spy Agaric", 28563],
  ["Toy Bear", 29142, 17], ["Witch Hat", 30548], ["Desk Calendar", 32423, 2.1], ["Homemade Cake", 32643, 2.6],
  ["Ice Cream", 32806], ["Chill Flame", 35999], ["Vice Cream", 37569], ["Snoop Dogg", 52945],
  ["Lol Pop", 65396, 2]
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
function dayPrice(name, base, d) { return Math.round(base * (1 + (seeded(name + ':' + d) * 2 - 1) * 0.08) * 100) / 100; }
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
function supplyText(c) { return c.supply.toLocaleString('ru-RU') + ' \u0448\u0442.'; }

var QUICK = [1.5, 2, 3, 5, 10, 20];
var RTP = 0.96, MAX_CHANCE = 0.75, MAX_PICK = 6, SHOW = 15;
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
      inv: startInv(), own: [], target: null, angle: 0, spinning: false,
      result: null, overlay: false, lastChance: 0, lastSide: 'right',
      side: 'right', fast: true, history: [], res: null, nextId: 100, q: ''
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
      if (win) { inv = [{ uid: 'i' + nextId, key: st.target }].concat(inv); nextId += 1; }
      var mult = 'x' + (tgt.price / st0.price).toFixed(2);
      var history = [{ mult: mult, win: win }].concat(st.history).slice(0, 10);
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
      reset: function () { if (!self.state.spinning) self.setState({ inv: startInv(), own: [], target: null, result: null, lastChance: 0, overlay: false }); },
      invEmpty: s.inv.length === 0,
      invList: invList,
      q: s.q,
      onSearch: function (e) { self.setState({ q: e && e.target ? e.target.value : '' }); },
      targetSub: s.q ? '\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430' : (stake ? '\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u043F\u043E \u0446\u0435\u043D\u0435 \u043A \u0442\u0432\u043E\u0435\u0439 \u0441\u0442\u0430\u0432\u043A\u0435. \u0426\u0435\u043D\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u0434\u0435\u043D\u044C' : '\u0412\u0441\u0435 117 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0439, \u0438\u0449\u0438 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E. \u0426\u0435\u043D\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u0434\u0435\u043D\u044C'),
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
`;var H0=`<!doctype html>
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
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1400px; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 14px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff; overflow: hidden">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="font-size: 26px; font-weight: 900; font-style: italic; flex-grow: 1">CASES</div>
<div style="height: 44px; box-sizing: border-box; border-radius: 14px; background: #1a1d27; padding: 0 12px; display: flex; align-items: center; font-size: 14px; font-weight: 700; color: #ffc83d">{{balanceText}}</div>
<button type="button" onClick="{{toggleFast}}" aria-pressed="{{fastPressed}}" aria-label="\u0411\u044B\u0441\u0442\u0440\u043E\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435" style="width: 44px; height: 44px; border-radius: 14px; border: 2px solid {{fastBorder}}; background: #1a1d27; color: {{fastColor}}; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0">
<svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true"><path d="M8 0 L0 9 H6 L5 16 L14 6 H8Z" fill="currentColor"></path></svg>
</button>
</header>

<div style="position: relative; height: 150px; border-radius: 24px; overflow: hidden; background: #0a4cc0">
<img src="/_blob/88b023f22e2d3006641849bb168e073d" alt="" style="position: absolute; right: 0; top: 0; width: 240px; height: 150px; object-fit: cover; object-position: 60% 45%; -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 40%); mask-image: linear-gradient(to right, transparent 0%, #000 40%)">
<div style="position: relative; height: 100%; box-sizing: border-box; padding: 18px 20px; display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start">
<span style="background: #ffffff; color: #1a4fb8; font-size: 13px; font-weight: 700; padding: 5px 10px; border-radius: 9px">{{caseTier}}</span>
<div style="display: flex; flex-direction: column; gap: 2px">
<div style="font-size: 28px; font-weight: 900; font-style: italic; line-height: 1.05; text-shadow: 0 3px 8px rgba(0,0,0,0.45)">{{caseName}}</div>
<div style="font-size: 16px; font-weight: 900; color: #ffc83d; text-shadow: 0 2px 6px rgba(0,0,0,0.5)">{{casePriceText}}</div>
</div>
</div>
</div>

<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px">
<sc-for list="{{caseList}}" as="c" hint-placeholder-count="4">
<button type="button" onClick="{{c.pick}}" aria-pressed="{{c.pressed}}" style="background: #151821; border: 2px solid {{c.border}}; border-radius: 14px; padding: 10px 4px; display: flex; flex-direction: column; align-items: center; gap: 4px; cursor: pointer; font-family: Rubik, system-ui, sans-serif; color: #ffffff">
<svg width="40" height="32" viewBox="0 0 40 32" aria-hidden="true">
<path d="M4 12 L36 12 L33 3 L7 3Z" fill="{{c.lid}}"></path>
<rect x="3" y="11" width="34" height="20" rx="4" fill="{{c.color}}"></rect>
<rect x="3" y="11" width="34" height="5" fill="#000000" fill-opacity="0.2"></rect>
<rect x="17" y="15" width="6" height="8" rx="1.5" fill="#ffc83d"></rect>
</svg>
<span style="font-size: 11px; font-weight: 700; white-space: nowrap">{{c.short}}</span>
<span style="font-size: 12px; font-weight: 900; color: #ffc83d">{{c.priceText}}</span>
</button>
</sc-for>
</div>

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

<div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 4px">
<div style="font-size: 17px; font-weight: 700">\u041C\u043E\u0439 \u043B\u0443\u0442</div>
<sc-if value="{{hasLoot}}" hint-placeholder-val="{{ false }}">
<button type="button" onClick="{{sellAll}}" style="height: 40px; border-radius: 12px; border: 1px solid #2bd46b; background: transparent; color: #2bd46b; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; padding: 0 12px; cursor: pointer">\u041F\u0440\u043E\u0434\u0430\u0442\u044C \u0432\u0441\u0451 \xB7 {{lootTotal}}</button>
</sc-if>
</div>
<sc-if value="{{noLoot}}" hint-placeholder-val="{{ true }}">
<div style="background: #151821; border-radius: 14px; padding: 14px; font-size: 13px; color: #a3a8b5; text-align: center">\u041E\u0442\u043A\u0440\u043E\u0439 \u043A\u0435\u0439\u0441, \u0438 \u0432\u044B\u043F\u0430\u0432\u0448\u0438\u0435 NFT \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C</div>
</sc-if>
<div style="display: flex; flex-wrap: wrap; gap: 6px">
<sc-for list="{{loot}}" as="l" hint-placeholder-count="0">
<span style="display: flex; align-items: center; gap: 6px; background: #151821; border: 1px solid #222838; border-radius: 10px; padding: 4px 10px 4px 4px; font-size: 12px; font-weight: 700">
<img src="{{l.img}}" alt="" style="width: 24px; height: 24px">{{l.name}} \xB7 <span style="color: #ffc83d">{{l.priceText}}</span>
</span>
</sc-for>
</div>

<div style="display: flex; flex-direction: column; gap: 2px; margin-top: 6px">
<div style="font-size: 17px; font-weight: 700">\u0427\u0442\u043E \u0432\u043D\u0443\u0442\u0440\u0438</div>
<div style="font-size: 12px; font-weight: 500; color: #a3a8b5">\u0428\u0430\u043D\u0441 \u0432\u044B\u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0438 \u0446\u0435\u043D\u0430, \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0430\u0437 \u0432 \u0434\u0435\u043D\u044C</div>
</div>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px">
<sc-for list="{{contents}}" as="item" hint-placeholder-count="12">
<div style="position: relative; min-width: 0; background: #151821; border: 1px solid #222838; border-radius: 14px; padding: 12px 6px 10px; display: flex; flex-direction: column; align-items: center; gap: 3px; overflow: hidden">
<span style="position: absolute; left: 0; top: 0; right: 0; height: 3px; background: {{item.color}}"></span>
<img src="{{item.img}}" alt="" style="width: 48px; height: 48px">
<span style="max-width: 100%; font-size: 12px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{item.name}}</span>
<span style="font-size: 13px; font-weight: 700; color: #ffc83d">{{item.priceText}}</span>
<span style="font-size: 11px; font-weight: 700; color: {{item.chgColor}}">{{item.chgText}}</span>
<span style="font-size: 11px; font-weight: 700; color: #a3a8b5">{{item.chanceText}}</span>
</div>
</sc-for>
</div>

<sc-if value="{{showOverlay}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba(5, 6, 10, 0.8); display: flex; justify-content: center; align-items: flex-start; padding-top: 170px">
<div role="dialog" aria-label="\u0412\u044B\u043F\u0430\u043B NFT" style="width: 320px; box-sizing: border-box; background: #151821; border: 2px solid {{resColor}}; border-radius: 28px; padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; animation: rkPop 0.45s ease-out; box-shadow: 0 0 60px {{resGlow}}">
<div style="font-size: 14px; font-weight: 700; color: #a3a8b5">{{resHead}}</div>
<img src="{{resImg}}" alt="" style="width: 120px; height: 120px">
<div style="font-size: 30px; font-weight: 900; font-style: italic; line-height: 1.05">{{resName}}</div>
<div style="display: flex; gap: 8px; align-items: center">
<span style="font-size: 20px; font-weight: 900; color: #ffc83d">{{resPrice}}</span>
<span style="font-size: 13px; font-weight: 700; padding: 4px 8px; border-radius: 8px; background: {{resMultBg}}; color: {{resMultColor}}">{{resMult}}</span>
</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; width: 100%; margin-top: 8px">
<button type="button" onClick="{{sellWon}}" style="height: 52px; border: 0; border-radius: 16px; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer; background: #2bd46b; color: #06210f">\u041F\u0440\u043E\u0434\u0430\u0442\u044C</button>
<button type="button" onClick="{{keepWon}}" style="height: 52px; border: 2px solid #ffc83d; border-radius: 16px; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer; background: transparent; color: #ffc83d">\u0417\u0430\u0431\u0440\u0430\u0442\u044C</button>
</div>
</div>
</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1400}}'>
// \u0412\u0441\u0435 117 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0439 NFT-\u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 Telegram (\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0438 \u0442\u0438\u0440\u0430\u0436: giftclub.app, \u0430\u0432\u0433\u0443\u0441\u0442 2026).
// \u0422\u0440\u0435\u0442\u044C\u0435 \u0447\u0438\u0441\u043B\u043E \u2014 \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440 \u0446\u0435\u043D\u044B \u0432 TON; \u0433\u0434\u0435 \u0435\u0433\u043E \u043D\u0435\u0442, \u0446\u0435\u043D\u0430 \u043E\u0446\u0435\u043D\u0435\u043D\u0430 \u043F\u043E \u0442\u0438\u0440\u0430\u0436\u0443.
// \u0412 \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0435 \u0446\u0435\u043D\u044B \u0431\u0435\u0440\u0443\u0442\u0441\u044F \u0441 \u043C\u0430\u0440\u043A\u0435\u0442\u043F\u043B\u0435\u0439\u0441\u0430 (MRKT / Portals / Fragment).
var RAW = [
  ["Durov's Glasses", 148], ["Heroic Helmet", 1258], ["Heart Locket", 1305], ["Surge Board", 1756],
  ["Mighty Arm", 1769], ["Nail Bracelet", 1832], ["Bling Binky", 1959], ["Gem Signet", 2104],
  ["Perfume Bottle", 2106], ["Mini Oscar", 2108], ["Precious Peach", 2112, 300], ["Plush Pepe", 2448, 5000],
  ["Ionic Dryer", 2455], ["Ion Gem", 2615, 70], ["Genie Lamp", 2623], ["Bonded Ring", 2847],
  ["Artisan Brick", 2852], ["Astral Shard", 2889], ["Love Candle", 3012], ["Durov's Cap", 3029, 700],
  ["Khabib's Papakha", 3143], ["Magic Potion", 3277], ["Rare Bird", 3348], ["Valentine Box", 3559],
  ["Joyful Bundle", 3568], ["Sharp Tongue", 3793], ["Sleigh Bell", 3996], ["Neko Helmet", 4002],
  ["Electric Skull", 4191], ["Snow Mittens", 4684], ["Pretty Posy", 4797], ["Westside Sign", 5186],
  ["Record Player", 5214, 7.5], ["Eternal Rose", 5403, 16], ["Sky Stilettos", 5542], ["Cupid Charm", 5569],
  ["Lush Bouquet", 5797], ["Holiday Drink", 5923], ["Snow Globe", 5979, 3.2], ["UFC Strike", 5984],
  ["Bunny Muffin", 6223, 4.3], ["Love Potion", 6420, 13], ["Mad Pumpkin", 6426], ["Loot Bag", 6429],
  ["Hanging Star", 6488], ["Low Rider", 6519], ["Flying Broom", 6536], ["Mousse Cake", 6669],
  ["Skull Flower", 6856], ["Timeless Book", 6986], ["Signet Ring", 7099, 25], ["Kissed Frog", 7508],
  ["Jingle Bells", 7965, 2.5], ["Crystal Ball", 8004], ["Bow Tie", 8092], ["Diamond Ring", 8179, 12],
  ["Top Hat", 8191, 8.5], ["Hypno Lollipop", 8343, 2.4], ["Star Notepad", 8443], ["Vintage Cigar", 8528],
  ["Berry Box", 8623, 4.1], ["Money Pot", 8661], ["Restless Jar", 8729], ["Snake Box", 8755],
  ["Winter Wreath", 8926], ["Trapped Heart", 9566], ["Happy Brownie", 9989], ["Pet Snake", 10382],
  ["Tama Gadget", 10412], ["Swiss Watch", 10480, 28], ["Fresh Socks", 10667], ["Voodoo Doll", 10752],
  ["Faith Amulet", 10892], ["Big Year", 11544], ["Spring Basket", 11605], ["Spiced Wine", 11682],
  ["Santa Hat", 11705], ["Eternal Candle", 11919], ["Jester Hat", 11969], ["Pool Float", 12397],
  ["Mood Pack", 12462], ["Liberty Figure", 12499], ["Moon Pendant", 12531], ["Cookie Heart", 12779],
  ["Input Key", 13025], ["Whip Cupcake", 13270], ["Victory Medal", 13289], ["Sakura Flower", 13339],
  ["Jelly Bunny", 13367], ["Xmas Stocking", 13526], ["Jolly Chimp", 13658], ["Scared Cat", 13986],
  ["Hex Pot", 14095], ["Candy Cane", 14703], ["Stellar Rocket", 15504], ["Jack-in-the-Box", 15807],
  ["Light Sword", 16012], ["Ginger Cookie", 16858], ["Lunar Snake", 16883], ["Snoop Cigar", 17056],
  ["Clover Pin", 17449], ["Evil Eye", 17803], ["Swag Bag", 19313], ["Party Sparkler", 20446],
  ["Instant Ramen", 21613], ["B-Day Candle", 23201, 1.8], ["Easter Egg", 25973], ["Spy Agaric", 28563],
  ["Toy Bear", 29142, 17], ["Witch Hat", 30548], ["Desk Calendar", 32423, 2.1], ["Homemade Cake", 32643, 2.6],
  ["Ice Cream", 32806], ["Chill Flame", 35999], ["Vice Cream", 37569], ["Snoop Dogg", 52945],
  ["Lol Pop", 65396, 2]
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
function dayPrice(name, base, d) { return Math.round(base * (1 + (seeded(name + ':' + d) * 2 - 1) * 0.08) * 100) / 100; }
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
function supplyText(c) { return c.supply.toLocaleString('ru-RU') + ' \u0448\u0442.'; }

var RTP = 0.96;
var CASES = [
  { id: 'c1', name: '\u041A\u0430\u0440\u043C\u0430\u043D\u043D\u0438\u043A', short: '\u041A\u0430\u0440\u043C\u0430\u043D', tier: '\u0414\u043B\u044F \u0441\u0442\u0430\u0440\u0442\u0430', price: 3, color: '#6b7280', lid: '#4b5160' },
  { id: 'c2', name: '\u041D\u0430\u043B\u0451\u0442\u0447\u0438\u043A', short: '\u041D\u0430\u043B\u0451\u0442', tier: '\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0439', price: 10, color: '#2a7fff', lid: '#1a5fd0' },
  { id: 'c3', name: '\u041C\u0435\u0434\u0432\u0435\u0436\u0430\u0442\u043D\u0438\u043A', short: '\u041C\u0435\u0434\u0432\u0435\u0436.', tier: '\u0414\u043B\u044F \u0441\u043C\u0435\u043B\u044B\u0445', price: 50, color: '#9b5cff', lid: '#7a3fe0' },
  { id: 'c4', name: '\u041A\u0440\u0451\u0441\u0442\u043D\u044B\u0439 \u0435\u043D\u043E\u0442', short: '\u041A\u0440\u0451\u0441\u0442\u043D\u044B\u0439', tier: '\u0425\u0430\u0439\u0440\u043E\u043B\u043B\u0435\u0440', price: 300, color: '#e0a800', lid: '#b88a00' }
];
// \u0421\u043E\u0441\u0442\u0430\u0432 \u043A\u0435\u0439\u0441\u0430 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u0438\u0437 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430: 12 NFT \u043E\u0442 ~\xBC \u0434\u043E ~40 \u0446\u0435\u043D \u043A\u0435\u0439\u0441\u0430
function buildPool(P) {
  var cand = CAT_LIST.filter(function (c) { return c.price >= 0.25 * P && c.price <= 40 * P; });
  var n = 12, out = [];
  for (var i = 0; i < n && i < cand.length; i++) {
    var idx = Math.round(i * (cand.length - 1) / Math.max(1, n - 1));
    var nm = cand[idx].name;
    if (out.indexOf(nm) === -1) out.push(nm);
  }
  return out;
}
// \u0412\u0435\u0440\u043E\u044F\u0442\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u044E\u0442\u0441\u044F \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0434\u0440\u043E\u043F = 96% \u0446\u0435\u043D\u044B \u043A\u0435\u0439\u0441\u0430
CASES.forEach(function (c) {
  c.pool = buildPool(c.price);
  var prices = c.pool.map(function (k) { return CAT[k].price; });
  var target = c.price * RTP;
  function ev(a) {
    var S = 0, E = 0;
    prices.forEach(function (p) { var w = Math.pow(p, -a); S += w; E += w * p; });
    return E / S;
  }
  var lo = -5, hi = 12;
  for (var i = 0; i < 80; i++) { var mid = (lo + hi) / 2; if (ev(mid) > target) lo = mid; else hi = mid; }
  var a = (lo + hi) / 2, S = 0;
  var w = prices.map(function (p) { var x = Math.pow(p, -a); S += x; return x; });
  c.probs = w.map(function (x) { return x / S; });
});

var TILE = 92, GAP = 6, STEP = TILE + GAP, N = 44, WIN_IDX = 38, CENTER = 179;
function caseById(id) { return CASES.filter(function (c) { return c.id === id; })[0]; }
function fmt(p) { return (Math.round(p * 100) / 100) + ' TON'; }
function roll(c) {
  var r = Math.random(), acc = 0;
  for (var i = 0; i < c.pool.length; i++) { acc += c.probs[i]; if (r < acc) return c.pool[i]; }
  return c.pool[c.pool.length - 1];
}
function previewStrip(c) { var s = []; for (var i = 0; i < N; i++) s.push(c.pool[i % c.pool.length]); return s; }
function fmtChance(p) {
  var v = p * 100;
  if (v >= 10) return v.toFixed(1) + '%';
  if (v >= 1) return v.toFixed(2) + '%';
  return v.toFixed(3) + '%';
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    var c = CASES[1];
    this.state = {
      caseId: c.id, balance: 500, fast: true, spinning: false,
      strip: previewStrip(c), offset: 2 * STEP + TILE / 2 - CENTER, anim: false,
      won: null, overlay: false, loot: [], nextId: 1
    };
  }
  componentWillUnmount() { clearTimeout(this.t1); clearTimeout(this.t2); }

  pickCase(id) {
    if (this.state.spinning) return;
    var c = caseById(id);
    this.setState({ caseId: id, strip: previewStrip(c), offset: 2 * STEP + TILE / 2 - CENTER, anim: false, overlay: false });
  }

  open() {
    var s = this.state;
    var c = caseById(s.caseId);
    if (s.spinning || s.balance < c.price) return;
    var won = roll(c);
    var strip = [];
    for (var i = 0; i < N; i++) strip.push(i === WIN_IDX ? won : roll(c));
    var jitter = (Math.random() - 0.5) * (TILE - 20);
    var finalOffset = WIN_IDX * STEP + TILE / 2 - CENTER + jitter;
    var dur = s.fast ? 1100 : 4800;
    var self = this;
    this.setState({ balance: Math.round((s.balance - c.price) * 100) / 100, spinning: true, strip: strip, offset: 2 * STEP + TILE / 2 - CENTER, anim: false, overlay: false, won: null });
    this.t1 = setTimeout(function () {
      self.setState({ offset: finalOffset, anim: true });
      self.t2 = setTimeout(function () { self.setState({ spinning: false, won: { key: won, caseId: c.id }, overlay: true }); }, dur + 120);
    }, 40);
  }

  renderVals() {
    var self = this;
    var s = this.state;
    var c = caseById(s.caseId);
    var dur = s.fast ? 1.1 : 4.8;
    var canOpen = !s.spinning && s.balance >= c.price;
    var lootTotal = 0;
    s.loot.forEach(function (l) { lootTotal += CAT[l.key].price; });
    var won = s.won ? CAT[s.won.key] : null;
    var wonCase = s.won ? caseById(s.won.caseId) : null;
    var mult = won ? won.price / wonCase.price : 0;

    return {
      balanceText: fmt(s.balance),
      toggleFast: function () { if (!self.state.spinning) self.setState({ fast: !self.state.fast }); },
      fastPressed: s.fast ? 'true' : 'false',
      fastBorder: s.fast ? '#ffc83d' : '#1a1d27',
      fastColor: s.fast ? '#ffc83d' : '#a3a8b5',
      caseName: c.name, caseTier: c.tier, casePriceText: fmt(c.price),
      caseList: CASES.map(function (x) {
        var sel = x.id === s.caseId;
        return { short: x.short, priceText: fmt(x.price), color: x.color, lid: x.lid, border: sel ? '#ffc83d' : '#222838', pressed: sel ? 'true' : 'false', pick: function () { self.pickCase(x.id); } };
      }),
      strip: s.strip.map(function (k) { var it = CAT[k]; return { name: it.name, img: it.img, priceText: fmt(it.price), color: it.color }; }),
      stripStyle: 'transform: translateX(' + (-s.offset) + 'px); transition: ' + (s.anim ? 'transform ' + dur + 's cubic-bezier(0.08, 0.7, 0.12, 1)' : 'none'),
      open: function () { self.open(); },
      openDisabled: !canOpen,
      btnBg: canOpen ? '#ffc83d' : '#1d2230',
      btnColor: canOpen ? '#1a1300' : '#6c7282',
      btnShadow: canOpen ? '0 6px 24px rgba(255,200,61,0.35)' : 'none',
      btnText: s.spinning ? '\u041E\u0422\u041A\u0420\u042B\u0412\u0410\u0415\u041C...' : (s.balance >= c.price ? '\u041E\u0422\u041A\u0420\u042B\u0422\u042C \xB7 ' + fmt(c.price) : '\u041D\u0415 \u0425\u0412\u0410\u0422\u0410\u0415\u0422 TON'),
      contents: c.pool.map(function (k, i) { var it = CAT[k]; return { name: it.name, img: it.img, priceText: fmt(it.price), color: it.color, chanceText: fmtChance(c.probs[i]), chgText: chgText(it), chgColor: chgColor(it) }; }).reverse(),
      loot: s.loot.map(function (l) { var it = CAT[l.key]; return { name: it.name, img: it.img, priceText: fmt(it.price) }; }),
      hasLoot: s.loot.length > 0,
      noLoot: s.loot.length === 0,
      lootTotal: fmt(lootTotal),
      sellAll: function () {
        var st = self.state, sum = 0;
        st.loot.forEach(function (l) { sum += CAT[l.key].price; });
        self.setState({ loot: [], balance: Math.round((st.balance + sum) * 100) / 100 });
      },
      showOverlay: s.overlay && !!won,
      resHead: wonCase ? '\u0418\u0437 \u043A\u0435\u0439\u0441\u0430 \xAB' + wonCase.name + '\xBB \u0432\u044B\u043F\u0430\u043B\u043E' : '',
      resName: won ? won.name : '',
      resImg: won ? won.img : GIFT_IMG,
      resPrice: won ? fmt(won.price) : '',
      resColor: won ? won.color : '#9aa3b5',
      resGlow: won ? (mult >= 1 ? 'rgba(255,200,61,0.35)' : 'rgba(0,0,0,0.4)') : 'transparent',
      resMult: won ? 'x' + mult.toFixed(2) : '',
      resMultBg: mult >= 1 ? 'rgba(43,212,107,0.16)' : 'rgba(255,93,115,0.16)',
      resMultColor: mult >= 1 ? '#2bd46b' : '#ff5d73',
      sellWon: function () {
        var st = self.state;
        if (!st.won) return;
        self.setState({ balance: Math.round((st.balance + CAT[st.won.key].price) * 100) / 100, overlay: false, won: null });
      },
      keepWon: function () {
        var st = self.state;
        if (!st.won) return;
        self.setState({ loot: [{ id: st.nextId, key: st.won.key }].concat(st.loot), nextId: st.nextId + 1, overlay: false, won: null });
      }
    };
  }
}
<\/script>
</body>
</html>
`;var U0=`<!doctype html>
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
<span style="font-size: 18px; font-weight: 900; color: #ffc83d">{{betText}}</span>
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
var RTP = 0.96;
var PRESETS = [1, 3, 5, 10, 20];

function multFor(k, m) {
  if (k <= 0) return 1;
  var p = 1;
  for (var i = 0; i < k; i++) p *= (SIZE - i) / (SIZE - m - i);
  return RTP * p;
}
function fmt(p) { return (Math.floor(p * 100) / 100) + ' TON'; }
function fmtMult(x) { return 'x' + (x >= 100 ? x.toFixed(0) : x.toFixed(2)); }
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
    if (s.phase === 'playing' || s.bet > s.balance || s.bet <= 0) return;
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
    this.setState({ bet: round2(v) });
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

    var canStart = s.bet <= s.balance && s.bet > 0;
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
`;var G0=`<!doctype html>
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
<sc-if value="{{a.isMe}}" hint-placeholder-val="{{ false }}"><img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{a.notMe}}" hint-placeholder-val="{{ true }}">{{a.initial}}</sc-if>
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
<span style="position: relative; font-size: 22px; font-weight: 500; color: #c9cdd6">\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0438\u0433\u0440\u043E\u043A\u043E\u0432</span>
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
<sc-if value="{{isTonMode}}" hint-placeholder-val="{{ true }}">
<div style="display: grid; grid-template-columns: 44px minmax(0, 1fr) 44px; gap: 8px; padding-top: 12px; border-top: 1px solid #222838">
<button type="button" onClick="{{betMinus}}" aria-label="\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443" style="height: 44px; border-radius: 12px; border: 0; background: #1d2230; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 20px; cursor: pointer">\u2212</button>
<div style="height: 44px; border-radius: 12px; background: #0b0d12; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700; color: #ffc83d">{{betText}}</div>
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
<span style="font-size: 20px; font-weight: 500">\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 ({{playersCount}})</span>
<span style="font-size: 11px; padding: 4px 8px; border-radius: 8px; background: #151821; color: #a3a8b5">\u0418\u0433\u0440\u0430 #{{gameId}}</span>
</div>
<div style="display: flex; flex-direction: column; gap: 8px">
<sc-for list="{{players}}" as="p" hint-placeholder-count="2">
<div style="background: #151821; border: 1px solid {{p.border}}; border-radius: 14px; padding: 10px 12px; display: flex; flex-direction: column; gap: 8px">
<div style="display: flex; align-items: center; gap: 10px">
<div style="width: 32px; height: 32px; border-radius: 10px; background: {{p.avBg}}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 900; flex-shrink: 0; overflow: hidden">
<sc-if value="{{p.isMe}}" hint-placeholder-val="{{ false }}"><img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{p.notMe}}" hint-placeholder-val="{{ true }}">{{p.initial}}</sc-if>
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
<div style="font-size: 20px; font-weight: 500; margin-top: 4px">\u0418\u0441\u0442\u043E\u0440\u0438\u044F</div>
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
<sc-if value="{{winIsMe}}" hint-placeholder-val="{{ false }}"><img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{winNotMe}}" hint-placeholder-val="{{ true }}">{{winInitial}}</sc-if>
</div>
<span style="flex-grow: 1; font-size: 15px; font-weight: 700">{{winName}}</span>
<span style="font-size: 11px; font-weight: 700; padding: 3px 7px; border-radius: 7px; background: #151821; color: #c9cdd6">{{winChance}}</span>
<span style="font-size: 14px; font-weight: 900; color: #ffc83d">{{winAmount}}</span>
</div>
<div style="font-size: 12px; color: #8a90a0; text-align: center">\u0411\u0430\u043D\u043A {{winPot}} \xB7 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F 5% \u0441 \u0432\u044B\u0438\u0433\u0440\u044B\u0448\u0430</div>
<button type="button" onClick="{{closeWinner}}" style="height: 52px; border: 0; border-radius: 14px; font-family: Rubik, system-ui, sans-serif; font-size: 16px; font-weight: 700; cursor: pointer; background: #ffc83d; color: #1a1300">\u041E\u043A</button>
</div>
</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1250}}'>
var FEE = 0.05, COUNTDOWN = 15000, S = 358;
var GIFTS = {
  cake: { name: 'Homemade Cake', price: 2.6, img: '/_blob/6ef5ecbeb712d1b1d752a33d1e9c279d' },
  globe: { name: 'Snow Globe', price: 3.2, img: '/_blob/6e3628fac94b5266f3b64cea9c5fe7ee' },
  record: { name: 'Record Player', price: 7.5, img: '/_blob/8f4c023d08704d2319e54c9872a8c46d' },
  rose: { name: 'Eternal Rose', price: 16, img: '/_blob/734e25b54462cda990767f69381d8355' },
  bear: { name: 'Toy Bear', price: 17, img: '/_blob/c02bc9477e447f6f71962df1fc7a399a' },
  lpotion: { name: 'Love Potion', price: 13, img: '/_blob/5bb7da32fc8a6f8dbe91cf7cedc20c65' },
  bells: { name: 'Jingle Bells', price: 2.5, img: '/_blob/808ef5efdbeb6b276f70430b220f760b' },
  signet: { name: 'Signet Ring', price: 25, img: '/_blob/4826a2db621709393534f8feae3d3f4a' }
};
if (window.rkThumb) Object.keys(GIFTS).forEach(function (k) { GIFTS[k].img = window.rkThumb(GIFTS[k].name, GIFTS[k].img); });
var BOT_GIFTS = Object.keys(GIFTS);
var NAMES = ['hill_best', 'vova_tushlek', 'cntgf52', 'Investor_Belarus', 'Eugeneer', 'Bandit_77', 'TonWhale', '\u0415\u043D\u043E\u0442\u044B\u0447', 'lucky_ray', 'night_owl', '\u041C\u0443\u0440\u0437\u0438\u043A', 'kisa_mur', 'moonboy', '\u0416\u043E\u0440\u0430'];
var COLORS = ['#1fb89a', '#d6197e', '#2f7cf0', '#f08a12', '#8a4ff0', '#e0383b', '#11a7a7', '#c9a100', '#4aa53a', '#c03fa0'];
// \u0420\u0435\u0430\u043A\u0446\u0438\u0438: \u0441\u0432\u043E\u0438 \u0438\u043A\u043E\u043D\u043A\u0438 (\u043E\u0433\u043E\u043D\u044C, \u0441\u043C\u0435\u0445, \u0437\u043B\u043E\u0441\u0442\u044C, \u0441\u0435\u0440\u0434\u0446\u0435, \u0441\u0430\u043B\u044E\u0442)
var REACTIONS = [
  { label: '\u041E\u0433\u043E\u043D\u044C', icon: '/_blob/34af5661e80ecf394b0a48aeeb28ab6c' },
  { label: '\u0421\u043C\u0435\u0448\u043D\u043E', icon: '/_blob/7629870dfcd56d08701d6a71de1e83df' },
  { label: '\u0417\u043B\u043E\u0441\u0442\u044C', icon: '/_blob/f5a9ceb49eb8c4c03e26914bcd1e2576' },
  { label: '\u0421\u0435\u0440\u0434\u0446\u0435', icon: '/_blob/89d4ee9117e73bee099492a4ce5c5498' },
  { label: '\u0421\u0430\u043B\u044E\u0442', icon: '/_blob/c22eeb9eb2c04b336c2c7f989a2a93a7' }
];

function r2(x) { return Math.round(x * 100) / 100; }
function fmt(x) { return (Math.floor(x * 100) / 100).toFixed(2) + ' TON'; }
function stakeOf(p) { var s = p.ton; p.gifts.forEach(function (k) { s += GIFTS[k].price; }); return r2(s); }
function nowTime() { var d = new Date(); return ('0' + d.getDate()).slice(-2) + ' \u043E\u043A\u0442. ' + ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }

// \u0410\u0440\u0435\u043D\u0430: \u0443\u0447\u0430\u0441\u0442\u043A\u0438 \u043D\u0430\u0440\u0435\u0437\u0430\u044E\u0442\u0441\u044F \u0434\u0438\u0430\u0433\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u043E\u0442 \u043F\u0440\u0430\u0432\u043E\u0433\u043E \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u0443\u0433\u043B\u0430.
// \u0421\u0430\u043C\u0430\u044F \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430 \u2014 \u0442\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0432 \u0443\u0433\u043B\u0443, \u0441\u0430\u043C\u0430\u044F \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u2014 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.
// \u041F\u043B\u043E\u0449\u0430\u0434\u044C \u0443\u0447\u0430\u0441\u0442\u043A\u0430 = \u0434\u043E\u043B\u044F \u0438\u0433\u0440\u043E\u043A\u0430 \u0432 \u0431\u0430\u043D\u043A\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0442\u043E\u0447\u043A\u0430, \u0443\u043F\u0430\u0432\u0448\u0430\u044F \u0432 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u043F\u043E\u043B\u044F, \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442 \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044F \u0447\u0435\u0441\u0442\u043D\u043E.
function depthForArea(a) { var A = S * S; return a <= A / 2 ? Math.sqrt(2 * a) : 2 * S - Math.sqrt(2 * (A - a)); }
function regionPts(d) {
  if (d <= 0) return '';
  if (d <= S) return S + ',0 ' + (S - d) + ',0 ' + S + ',' + d;
  return S + ',0 0,0 0,' + (d - S) + ' ' + (2 * S - d) + ',' + S + ' ' + S + ',' + S;
}
function depthOf(x, y) { return (S - x) + y; }
function bandsFor(players) {
  var list = players.map(function (p) { return { p: p, v: stakeOf(p) }; }).filter(function (b) { return b.v > 0; })
    .sort(function (a, b) { return a.v - b.v; });
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

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'wait', t0: Date.now(), now: Date.now(), gameId: 1148666,
      players: [this.makeBot(0)], nextBot: 1,
      balance: 50, bet: 0.5, mode: 'ton', inv: ['cake', 'globe', 'record', 'rose'], pickGift: null,
      ball: { x: S / 2, y: S / 2 }, ballDur: 0, frozen: null, cam: false,
      winner: null, showWinner: false, view: 'players', online: 6938, floaters: [], fid: 0,
      history: [
        { id: 1148665, name: 'hill_best', chance: '99.79%', win: '48.51', av: COLORS[0], time: '21 \u043E\u043A\u0442. 18:56', ton: 0.05, gifts: ['rose', 'record'] },
        { id: 1148663, name: 'hill_best', chance: '49.81%', win: '7.54', av: COLORS[0], time: '21 \u043E\u043A\u0442. 18:56', ton: 0, gifts: ['bells', 'cake'] },
        { id: 1148661, name: 'cntgf52', chance: '33.28%', win: '7.67', av: COLORS[3], time: '21 \u043E\u043A\u0442. 18:55', ton: 0.1, gifts: ['globe', 'lpotion'] }
      ]
    };
    this.timers = [];
  }
  makeBot(i) {
    var gift = Math.random() < 0.55 ? BOT_GIFTS[Math.floor(Math.random() * BOT_GIFTS.length)] : null;
    return {
      id: 'b' + i + '_' + Date.now(), name: NAMES[Math.floor(Math.random() * NAMES.length)], me: false,
      ton: gift ? (Math.random() < 0.4 ? 0.1 : 0) : r2(0.1 + Math.pow(Math.random(), 2) * 6),
      gifts: gift ? [gift] : [], color: COLORS[i % COLORS.length]
    };
  }
  componentDidMount() { var self = this; this.iv = setInterval(function () { self.tick(); }, 250); }
  componentWillUnmount() { clearInterval(this.iv); this.timers.forEach(clearTimeout); }
  later(fn, ms) { this.timers.push(setTimeout(fn, ms)); }

  tick() {
    var s = this.state, now = Date.now();
    var upd = { now: now, online: Math.max(6000, s.online + Math.round((Math.random() - 0.5) * 6)) };
    if (s.phase === 'wait' || s.phase === 'count') {
      var players = s.players;
      if (players.length < 8 && Math.random() < (s.phase === 'wait' ? 0.05 : 0.035)) {
        players = players.concat([this.makeBot(s.nextBot)]);
        upd.players = players; upd.nextBot = s.nextBot + 1;
      }
      if (s.phase === 'wait' && players.length >= 2) { upd.phase = 'count'; upd.t0 = now; }
      if (s.phase === 'count' && now - s.t0 >= COUNTDOWN) { this.setState(upd); this.spin(); return; }
    }
    if (s.floaters.length) upd.floaters = s.floaters.filter(function (f) { return now - f.t < 1800; });
    this.setState(upd);
  }

  spin() {
    var s = this.state, self = this;
    var bands = bandsFor(s.players);
    var total = 0; bands.forEach(function (b) { total += b.v; });
    // \u041F\u043E\u0431\u0435\u0434\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430 \u2014 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E \u043D\u0430 \u0430\u0440\u0435\u043D\u0435
    var fx = 6 + Math.random() * (S - 12), fy = 6 + Math.random() * (S - 12);
    var fd = depthOf(fx, fy), winBand = bands[bands.length - 1];
    for (var i = 0; i < bands.length; i++) { if (fd >= bands[i].d1 && fd < bands[i].d2) { winBand = bands[i]; break; } }
    var path = [], t = 80;
    for (var j = 0; j < 10; j++) path.push({ x: 15 + Math.random() * (S - 30), y: 15 + Math.random() * (S - 30), d: 520 - j * 15 });
    path.push({ x: fx, y: fy, d: 1100 });
    this.setState({ phase: 'spin', frozen: bands, cam: true, ball: { x: S / 2, y: S / 2 }, ballDur: 0 });
    path.forEach(function (pt) {
      self.later(function () { self.setState({ ball: { x: pt.x, y: pt.y }, ballDur: pt.d }); }, t);
      t += pt.d;
    });
    this.later(function () { self.finish(winBand.p, total); }, t + 900);
  }

  finish(wp, total) {
    var s = this.state;
    var win = r2(total * (1 - FEE));
    var chance = (stakeOf(wp) / total * 100).toFixed(2) + '%';
    var tonSum = 0, giftsAll = [];
    s.players.forEach(function (p) { tonSum += p.ton; giftsAll = giftsAll.concat(p.gifts); });
    var upd = {
      phase: 'result', showWinner: true, cam: false,
      winner: { name: wp.me ? '\u0422\u044B' : wp.name, me: wp.me, color: wp.color, chance: chance, win: win, pot: total, gameId: s.gameId },
      history: [{ id: s.gameId, name: wp.me ? '\u0422\u044B' : wp.name, chance: chance, win: win.toFixed(2), av: wp.color, time: nowTime(), ton: r2(tonSum), gifts: giftsAll.slice(0, 5) }].concat(s.history).slice(0, 20)
    };
    if (wp.me) upd.balance = r2(s.balance + win);
    this.setState(upd);
  }

  newRound() {
    this.timers.forEach(clearTimeout); this.timers = [];
    this.setState({
      phase: 'wait', t0: Date.now(), gameId: this.state.gameId + 1, players: [],
      frozen: null, cam: false, showWinner: false, winner: null, ball: { x: S / 2, y: S / 2 }, ballDur: 0
    });
  }

  join(ton, gift) {
    var s = this.state;
    if (s.phase !== 'wait' && s.phase !== 'count') return null;
    var players = s.players.slice(), idx = -1;
    players.forEach(function (p, i) { if (p.me) idx = i; });
    var me = idx >= 0 ? Object.assign({}, players[idx]) : { id: 'me', name: '\u0422\u044B', me: true, ton: 0, gifts: [], color: '#d9a400' };
    me.ton = r2(me.ton + ton);
    if (gift) me.gifts = me.gifts.concat([gift]);
    if (idx >= 0) players[idx] = me; else players.push(me);
    var upd = { players: players };
    if (s.phase === 'wait' && players.length >= 2) { upd.phase = 'count'; upd.t0 = Date.now(); }
    return upd;
  }
  mainAction() {
    var s = this.state;
    if (s.mode === 'ton') {
      if (s.bet > s.balance) return;
      var u = this.join(s.bet, null); if (!u) return;
      u.balance = r2(s.balance - s.bet); this.setState(u);
    } else {
      if (!s.pickGift) return;
      var u2 = this.join(0, s.pickGift); if (!u2) return;
      var inv = s.inv.slice(); inv.splice(inv.indexOf(s.pickGift), 1);
      u2.inv = inv; u2.pickGift = null; this.setState(u2);
    }
  }
  react(i) {
    var s = this.state;
    var f = { id: s.fid, t: Date.now(), x: 20 + Math.random() * 300, icon: REACTIONS[i].icon };
    this.setState({ floaters: s.floaters.concat([f]).slice(-8), fid: s.fid + 1 });
  }

  renderVals() {
    var self = this, s = this.state;
    var bands = s.frozen || bandsFor(s.players);
    var total = 0; s.players.forEach(function (p) { total += stakeOf(p); });
    var giftsCount = 0; s.players.forEach(function (p) { giftsCount += p.gifts.length; });
    var joinable = s.phase === 'wait' || s.phase === 'count';
    var remain = Math.max(0, (COUNTDOWN - (s.now - s.t0)) / 1000);

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
      return { x: (cx - size / 2).toFixed(1), y: (cy - size / 2).toFixed(1), s: size.toFixed(0), fs: (size * 0.42).toFixed(0), bw: size > 60 ? 4 : 2, bg: 'rgba(0,0,0,0.22)', isMe: b.p.me, notMe: !b.p.me, initial: b.p.name.charAt(0).toUpperCase() };
    });

    var bd = depthOf(s.ball.x, s.ball.y), owner = '';
    bands.forEach(function (b) { if (bd >= b.d1 && bd < b.d2) owner = b.p.me ? '\u0442\u044B' : b.p.name; });
    var scale = 1.9;
    var tx = S / 2 - s.ball.x * scale, ty = S / 2 - s.ball.y * scale;
    tx = Math.min(0, Math.max(S - S * scale, tx)); ty = Math.min(0, Math.max(S - S * scale, ty));
    var dur = s.ballDur;

    var players = s.players.slice().sort(function (a, b) { return stakeOf(b) - stakeOf(a); }).map(function (p) {
      var st = stakeOf(p);
      return {
        name: p.me ? '\u0422\u044B' : p.name, initial: p.name.charAt(0).toUpperCase(), avBg: p.color, isMe: p.me, notMe: !p.me,
        border: p.me ? '#ffc83d' : '#222838', chance: total ? (st / total * 100).toFixed(2) + '%' : '\u2014', stakeText: st.toFixed(2),
        hasTon: p.ton > 0, tonText: p.ton.toFixed(2),
        giftImgs: p.gifts.map(function (k) { return { img: GIFTS[k].img, name: GIFTS[k].name }; })
      };
    });

    var best = 0; s.history.forEach(function (h) { best = Math.max(best, parseFloat(h.win)); });
    var w = s.winner;
    var meIn = s.players.some(function (p) { return p.me; });
    var canTon = joinable && s.bet <= s.balance;
    var mainText = !joinable ? '\u0418\u0434\u0451\u0442 \u0438\u0433\u0440\u0430' : (s.mode === 'ton' ? (s.balance < s.bet ? '\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441' : (meIn ? '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443' : '\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443')) : (s.pickGift ? '\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A' : '\u0412\u044B\u0431\u0435\u0440\u0438 \u043F\u043E\u0434\u0430\u0440\u043E\u043A'));
    var mainOn = joinable && (s.mode === 'ton' ? canTon : !!s.pickGift);

    return {
      online: s.online, balanceText: fmt(s.balance),
      bestWin: best.toFixed(2) + ' TON', lastWin: s.history.length ? s.history[0].win + ' TON' : '\u2014',
      giftsCount: giftsCount, potText: fmt(total), playersCount: s.players.length,
      regions: regions, avatars: avatars, arenaBg: bands.length ? bands[bands.length - 1].p.color : '#151821',
      camStyle: s.cam
        ? 'transform-origin: 0 0; transform: translate(' + tx.toFixed(1) + 'px, ' + ty.toFixed(1) + 'px) scale(' + scale + '); transition: transform ' + Math.max(400, dur) + 'ms cubic-bezier(0.45, 0, 0.55, 1)'
        : 'transform-origin: 0 0; transform: translate(0px, 0px) scale(1); transition: transform 0.6s ease',
      showBall: s.phase === 'spin' || s.phase === 'result',
      ballStyle: 'left: ' + s.ball.x.toFixed(1) + 'px; top: ' + s.ball.y.toFixed(1) + 'px; transition: left ' + dur + 'ms cubic-bezier(0.45, 0, 0.55, 1), top ' + dur + 'ms cubic-bezier(0.45, 0, 0.55, 1)',
      ballOwner: owner || '...',
      isWaiting: s.players.length === 0,
      statusText: s.phase === 'count' ? '\u041D\u0430\u0447\u0430\u043B\u043E 00:' + ('0' + Math.ceil(remain)).slice(-2) : (s.phase === 'wait' ? '\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0438\u0433\u0440\u043E\u043A\u043E\u0432' : (s.phase === 'spin' ? '\u0420\u043E\u0437\u044B\u0433\u0440\u044B\u0448...' : '\u0418\u0433\u0440\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430')),
      floaters: s.floaters.map(function (f) { return { x: f.x.toFixed(0), icon: f.icon }; }),
      reactions: REACTIONS.map(function (r, i) { return { label: r.label, icon: r.icon, send: function () { self.react(i); } }; }),
      modeTon: function () { self.setState({ mode: 'ton' }); },
      modeGift: function () { self.setState({ mode: 'gift' }); },
      tonPressed: s.mode === 'ton' ? 'true' : 'false', giftPressed: s.mode === 'gift' ? 'true' : 'false',
      tonModeBorder: s.mode === 'ton' ? '#ffc83d' : '#222838', tonModeBg: s.mode === 'ton' ? '#2a2410' : '#0b0d12',
      giftModeBorder: s.mode === 'gift' ? '#ffc83d' : '#222838', giftModeBg: s.mode === 'gift' ? '#2a2410' : '#0b0d12',
      isTonMode: s.mode === 'ton', isGiftMode: s.mode === 'gift',
      mainAction: function () { self.mainAction(); }, mainDisabled: !mainOn,
      mainBg: mainOn ? '#ffc83d' : '#3a3420', mainColor: mainOn ? '#1a1300' : '#8a8060', mainText: mainText,
      betText: s.bet.toFixed(2) + ' TON',
      betMinus: function () { self.setState({ bet: r2(Math.max(0.1, self.state.bet - 0.1)) }); },
      betPlus: function () { self.setState({ bet: r2(Math.min(Math.max(0.1, self.state.balance), self.state.bet + 0.1)) }); },
      gifts: s.inv.map(function (k) { var g = GIFTS[k]; var sel = s.pickGift === k; return { name: g.name, img: g.img, priceText: g.price + ' TON', pressed: sel ? 'true' : 'false', border: sel ? '#ffc83d' : '#222838', pick: function () { self.setState({ pickGift: sel ? null : k }); } }; }),
      noGifts: s.inv.length === 0,
      toggleHistory: function () { self.setState({ view: self.state.view === 'history' ? 'players' : 'history' }); },
      historyPressed: s.view === 'history' ? 'true' : 'false', historyBorder: s.view === 'history' ? '#ffc83d' : '#1a1d27',
      showPlayers: s.view === 'players', showHistory: s.view === 'history',
      gameId: s.gameId, players: players,
      history: s.history.map(function (h) { return { id: h.id, name: h.name, chance: h.chance, win: h.win, time: h.time, avBg: h.av, initial: h.name.charAt(0).toUpperCase(), hasTon: h.ton > 0, tonText: h.ton.toFixed(2), giftImgs: (h.gifts || []).map(function (k) { return GIFTS[k].img; }) }; }),
      showWinner: s.showWinner && !!w,
      winGameId: w ? w.gameId : '', winIsMe: w ? w.me : false, winNotMe: w ? !w.me : true,
      winInitial: w ? w.name.charAt(0).toUpperCase() : '', winAvBg: w ? w.color : '#222838', winName: w ? w.name : '',
      winBorder: w && w.me ? '#2bd46b' : '#222838', winChance: w ? w.chance : '', winAmount: w ? w.win.toFixed(2) + ' TON' : '', winPot: w ? fmt(w.pot) : '',
      closeWinner: function () { self.newRound(); }
    };
  }
}
<\/script>
</body>
</html>
`;var lt=window.Telegram&&window.Telegram.WebApp,j0=100,qo={get(){try{let t=parseFloat(localStorage.getItem("rk_balance"));return isNaN(t)?j0:t}catch{return j0}},set(t){try{localStorage.setItem("rk_balance",String(Math.round(t*100)/100))}catch{}}};window.RK={wallet:qo,user:lt&&lt.initDataUnsafe&&lt.initDataUnsafe.user||null};if(lt){lt.ready(),lt.expand();try{lt.setHeaderColor("#0b0d12"),lt.setBackgroundColor("#0b0d12")}catch{}try{lt.disableVerticalSwipes&&lt.disableVerticalSwipes()}catch{}}document.addEventListener("click",t=>{if(lt&&lt.HapticFeedback&&t.target.closest&&t.target.closest("button, a"))try{lt.HapticFeedback.impactOccurred("light")}catch{}},!0);var Vn={"16b8be03ec4054a9ad560c5be1c9ab9e":"banner-crash.jpg","88b023f22e2d3006641849bb168e073d":"banner-cases.jpg","63c10368990e8788e655de65d5a9b515":"banner-upgrade.jpg",b81dc491ff982e1892b4eeeb94570e3c:"banner-mines.jpg","661884b648dd965ea69af44ea8c7ee95":"avatar.jpg",a8d1e2a1f1626c9b8edd4755d9c32150:"rocket.png","29f965541d768edadf1aad890a105f4f":"space.jpg",ac9e83f513d62d0c7fc3250c8a2d1f89:"candle.svg","1f689ff254757e970266197964c5d390":"lolpop.svg","9b7049b84c84b25ce8e457f56c837c42":"calendar.svg",b4c8d4f914ed6e253c933045ab9e3461:"hypno.svg","808ef5efdbeb6b276f70430b220f760b":"bells.svg","6ef5ecbeb712d1b1d752a33d1e9c279d":"cake.svg","6e3628fac94b5266f3b64cea9c5fe7ee":"globe.svg",c2c0de4f1d0a4ed1dd2df84eff4c7f73:"berry.svg","45ac385132ce7b83da133306d9a330f8":"muffin.svg","8f4c023d08704d2319e54c9872a8c46d":"record.svg",fe01a5a2d2ff76e0192e008ed6267558:"tophat.svg",ef580f1649ad89b5e268954da6ea30b2:"dring.svg","5bb7da32fc8a6f8dbe91cf7cedc20c65":"lpotion.svg","734e25b54462cda990767f69381d8355":"rose.svg",c02bc9477e447f6f71962df1fc7a399a:"bear.svg","4826a2db621709393534f8feae3d3f4a":"signet.svg","5efc0b426406d53e3b649c727079f26d":"watch.svg",e562d84d61312007f5108ab64cbfe6f9:"iongem.svg","923c4583ef32f1e6549c08d5a1839d4c":"peach.svg","500977bc4572974cf066e4c08b276369":"cap.svg",a64ccb23ba5a5ab0f1f789ab412cf3af:"pepe.svg",bb8c4faf5d5477b7abe934698601360a:"none.svg","34af5661e80ecf394b0a48aeeb28ab6c":"r-fire.svg","7629870dfcd56d08701d6a71de1e83df":"r-laugh.svg",f5a9ceb49eb8c4c03e26914bcd1e2576:"r-angry.svg","89d4ee9117e73bee099492a4ce5c5498":"r-heart.svg",c22eeb9eb2c04b336c2c7f989a2a93a7:"r-party.svg"};function Wh(t){return t.replace(/\/_blob\/([0-9a-f]{32})/g,(e,a)=>Vn[a]?"assets/"+Vn[a]:e)}function $h(t){return t.replace(/position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba\(5, 6, 10, ([0-9.]+)\); display: flex; justify-content: center; align-items: flex-start; padding-top: \d+px/g,"position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, $1); display: flex; justify-content: center; align-items: center; padding: 16px")}var No={};window.rkThumb=function(t,e){let a=t.toLowerCase().replace(/[^a-z0-9]/g,""),l="https://fragment.com/file/gifts/"+a+"/thumb.webp",i="https://nft.fragment.com/gift/"+a+"-1.webp";return No[l]=i,No[i]=e.replace(/\/_blob\/([0-9a-f]{32})/,(n,u)=>Vn[u]?"assets/"+Vn[u]:n),l};window.addEventListener("error",t=>{let e=t.target;if(e&&e.tagName==="IMG"){let a=No[e.getAttribute("src")];a&&e.setAttribute("src",a)}},!0);function rl(t,e){let a=$h(Wh(e)),l=new DOMParser().parseFromString(a,"text/html"),i=l.querySelector("x-dc"),n=i.querySelector("helmet"),u=[];n&&(n.querySelectorAll("link, style").forEach(b=>u.push(b.outerHTML)),n.remove());let f=Array.from(i.children)[0],o=l.querySelector("script[data-dc-script]").textContent,r=new Function("DCLogic",o+`
;return Component;`)(Ho);return{name:t,head:u,root:f,Logic:r}}var Ho=class{constructor(e){this.props=e||{},this.state={},this._host=null}setState(e,a){typeof e=="function"&&(e=e(this.state,this.props)),Object.assign(this.state,e),e&&"balance"in e&&qo.set(e.balance),this._host?this._host.forceUpdate(a):a&&a()}forceUpdate(e){this._host&&this._host.forceUpdate(e)}},Uo=t=>t.replace(/-([a-z])/g,(e,a)=>a.toUpperCase());function q0(t,e){if(t=t.trim(),t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(/^-?\d+(\.\d+)?$/.test(t))return parseFloat(t);let a=t.split("."),l;for(let i=e.length-1;i>=0;i--)if(e[i]&&a[0]in e[i]){l=e[i][a[0]];break}for(let i=1;i<a.length&&l!=null;i++)l=l[a[i]];return l}var Ih=/\{\{([^}]+)\}\}/g;function Qn(t,e){let a=t.match(/^\s*\{\{([^}]+)\}\}\s*$/);return a?q0(a[1],e):t.replace(Ih,(l,i)=>{let n=q0(i,e);return n==null?"":String(n)})}function Ph(t){let e={};return t.split(";").forEach(a=>{let l=a.indexOf(":");if(l<0)return;let i=a.slice(0,l).trim(),n=a.slice(l+1).trim();if(i){if(i.startsWith("--")){e[i]=n;return}i.startsWith("-webkit-")&&(i="Webkit"+Uo(i.slice(8)).replace(/^./,u=>u.toUpperCase()).slice(0)),e[i.startsWith("Webkit")?i:Uo(i)]=n}}),e}function Z0(t,e,a,l){if(t.nodeType===3){let b=t.nodeValue;return!b.trim()&&b.indexOf(`
`)!==-1?null:b.indexOf("{{")===-1?b:Qn(b,e)}if(t.nodeType!==1)return null;let i=t.tagName.toLowerCase(),n=b=>Array.from(t.childNodes).map((g,d)=>Z0(g,b,a,d)).filter(g=>g!=null&&g!==!1);if(i==="sc-if")return Qn(t.getAttribute("value")||"",e)?Nt.default.createElement(Nt.default.Fragment,{key:l},...n(e)):null;if(i==="sc-for"){let b=Qn(t.getAttribute("list")||"",e)||[],g=t.getAttribute("as")||"item";return Nt.default.createElement(Nt.default.Fragment,{key:l},...b.map((d,h)=>Nt.default.createElement(Nt.default.Fragment,{key:h},...n(e.concat([{[g]:d,$index:h}])))))}let u=t.namespaceURI==="http://www.w3.org/2000/svg",f={key:l};for(let b of Array.from(t.attributes)){let g=b.name,d=b.value,h=d.indexOf("{{")===-1?d:Qn(d,e);if(!g.startsWith("hint-")){if(g==="class")g="className";else if(g==="for")g="htmlFor";else if(g==="style"){f.style=Ph(String(h));continue}else if(g.startsWith("on")){let v="on"+g.charAt(2).toUpperCase()+g.slice(3);v==="Onclick"&&(v="onClick"),g.toLowerCase()==="onclick"&&(v="onClick"),g.toLowerCase()==="oninput"&&(v="onChange"),typeof h=="function"&&(f[v]=h);continue}else u&&g.indexOf("-")!==-1&&!g.startsWith("aria-")&&!g.startsWith("data-")?g=Uo(g):g==="tabindex"?g="tabIndex":g==="readonly"?g="readOnly":g==="disabled"&&(h=h===!0||h===""||h==="disabled"||h==="true");f[g]=h}}if(i==="a"){let g=(t.getAttribute("href")||"").match(/([A-Za-z]+)\.dc\.html$/);f.href="#",f.onClick=d=>{d.preventDefault(),g&&a(g[1])}}i==="input"&&"value"in f&&!f.onChange&&(f.readOnly=!0);let o=n(e);return{img:1,input:1,br:1,hr:1,meta:1,link:1}[i]?Nt.default.createElement(i,f):Nt.default.createElement(i,f,...o)}var Go=class extends Nt.default.Component{constructor(e){super(e),this.logic=new e.screen.Logic({}),this.logic.state&&"balance"in this.logic.state&&(this.logic.state.balance=qo.get()),this.logic._host=this}componentDidMount(){this.logic.componentDidMount&&this.logic.componentDidMount()}componentWillUnmount(){this.logic.componentWillUnmount&&this.logic.componentWillUnmount(),this.logic._host=null}render(){let e=this.logic.renderVals?this.logic.renderVals():{};return Z0(this.props.screen.root,[e],this.props.nav,"root")}},Kn={Main:rl("Main",B0),Crash:rl("Crash",R0),Upgrade:rl("Upgrade",N0),Cases:rl("Cases",H0),Mines:rl("Mines",U0),Pvp:rl("Pvp",G0)},L0=new Set;Object.values(Kn).forEach(t=>t.head.forEach(e=>{if(L0.has(e))return;L0.add(e);let a=document.createElement("div");a.innerHTML=e;let l=a.firstElementChild;l.tagName==="STYLE"&&/body\{/.test(l.textContent)&&(l.textContent=l.textContent.replace(/body\{[^}]*\}/,"")),document.head.appendChild(l)}));function Y0(){let t=(location.hash||"").replace("#/","");return Kn[t]?t:"Main"}var jo=class extends Nt.default.Component{constructor(e){super(e),this.state={route:Y0()},this.nav=this.nav.bind(this),this.back=()=>this.nav("Main")}componentDidMount(){window.addEventListener("hashchange",()=>this.setState({route:Y0()})),lt&&lt.BackButton&&lt.BackButton.onClick(this.back),this.syncBack()}componentDidUpdate(){this.syncBack()}syncBack(){!lt||!lt.BackButton||(this.state.route==="Main"?lt.BackButton.hide():lt.BackButton.show())}nav(e){Kn[e]&&(location.hash=e==="Main"?"":"#/"+e,this.setState({route:e}),window.scrollTo(0,0))}render(){let e=this.state.route;return Nt.default.createElement(Go,{key:e,screen:Kn[e],nav:this.nav})}};function Q0(){let t=document.getElementById("app"),e=Math.min(window.innerWidth,480);t.style.zoom=String(e/390)}window.addEventListener("resize",Q0);Q0();(0,X0.createRoot)(document.getElementById("app")).render(Nt.default.createElement(jo));})();
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
