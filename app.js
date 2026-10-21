(()=>{var K0=Object.create;var qc=Object.defineProperty;var J0=Object.getOwnPropertyDescriptor;var F0=Object.getOwnPropertyNames;var W0=Object.getPrototypeOf,$0=Object.prototype.hasOwnProperty;var ze=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var I0=(t,e,a,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of F0(e))!$0.call(t,i)&&i!==a&&qc(t,i,{get:()=>e[i],enumerable:!(l=J0(e,i))||l.enumerable});return t};var Lc=(t,e,a)=>(a=t!=null?K0(W0(t)):{},I0(e||!t||!t.__esModule?qc(a,"default",{value:t,enumerable:!0}):a,t));var Ic=ze(z=>{"use strict";var Wn=Symbol.for("react.transitional.element"),P0=Symbol.for("react.portal"),tp=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),lp=Symbol.for("react.consumer"),ip=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),up=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),Vc=Symbol.for("react.lazy"),cp=Symbol.for("react.activity"),Yc=Symbol.iterator;function op(t){return t===null||typeof t!="object"?null:(t=Yc&&t[Yc]||t["@@iterator"],typeof t=="function"?t:null)}var Kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jc=Object.assign,Fc={};function xa(t,e,a){this.props=t,this.context=e,this.refs=Fc,this.updater=a||Kc}xa.prototype.isReactComponent={};xa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wc(){}Wc.prototype=xa.prototype;function $n(t,e,a){this.props=t,this.context=e,this.refs=Fc,this.updater=a||Kc}var In=$n.prototype=new Wc;In.constructor=$n;Jc(In,xa.prototype);In.isPureReactComponent=!0;var Xc=Array.isArray;function Fn(){}var X={H:null,A:null,T:null,S:null},$c=Object.prototype.hasOwnProperty;function Pn(t,e,a){var l=a.ref;return{$$typeof:Wn,type:t,key:e,ref:l!==void 0?l:null,props:a}}function sp(t,e){return Pn(t.type,e,t.props)}function tu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wn}function rp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Qc=/\/+/g;function Jn(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rp(""+t.key):e.toString(36)}function dp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Fn,Fn):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function va(t,e,a,l,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(n){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case Wn:case P0:u=!0;break;case Vc:return u=t._init,va(u(t._payload),e,a,l,i)}}if(u)return i=i(t),u=l===""?"."+Jn(t,0):l,Xc(i)?(a="",u!=null&&(a=u.replace(Qc,"$&/")+"/"),va(i,e,a,"",function(r){return r})):i!=null&&(tu(i)&&(i=sp(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Qc,"$&/")+"/")+u)),e.push(i)),1;u=0;var f=l===""?".":l+":";if(Xc(t))for(var c=0;c<t.length;c++)l=t[c],n=f+Jn(l,c),u+=va(l,e,a,n,i);else if(c=op(t),typeof c=="function")for(t=c.call(t),c=0;!(l=t.next()).done;)l=l.value,n=f+Jn(l,c++),u+=va(l,e,a,n,i);else if(n==="object"){if(typeof t.then=="function")return va(dp(t),e,a,l,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function pi(t,e,a){if(t==null)return t;var l=[],i=0;return va(t,l,"","",function(n){return e.call(a,n,i++)}),l}function pp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hp={map:pi,forEach:function(t,e,a){pi(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return pi(t,function(){e++}),e},toArray:function(t){return pi(t,function(e){return e})||[]},only:function(t){if(!tu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Activity=cp;z.Children=hp;z.Component=xa;z.Fragment=tp;z.Profiler=ap;z.PureComponent=$n;z.StrictMode=ep;z.Suspense=up;z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X;z.__COMPILER_RUNTIME={__proto__:null,c:function(t){return X.H.useMemoCache(t)}};z.cache=function(t){return function(){return t.apply(null,arguments)}};z.cacheSignal=function(){return null};z.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var l=Jc({},t.props),i=t.key;if(e!=null)for(n in e.key!==void 0&&(i=""+e.key),e)!$c.call(e,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&e.ref===void 0||(l[n]=e[n]);var n=arguments.length-2;if(n===1)l.children=a;else if(1<n){for(var u=Array(n),f=0;f<n;f++)u[f]=arguments[f+2];l.children=u}return Pn(t.type,i,l)};z.createContext=function(t){return t={$$typeof:ip,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:lp,_context:t},t};z.createElement=function(t,e,a){var l,i={},n=null;if(e!=null)for(l in e.key!==void 0&&(n=""+e.key),e)$c.call(e,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(i[l]=e[l]);var u=arguments.length-2;if(u===1)i.children=a;else if(1<u){for(var f=Array(u),c=0;c<u;c++)f[c]=arguments[c+2];i.children=f}if(t&&t.defaultProps)for(l in u=t.defaultProps,u)i[l]===void 0&&(i[l]=u[l]);return Pn(t,n,i)};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:np,render:t}};z.isValidElement=tu;z.lazy=function(t){return{$$typeof:Vc,_payload:{_status:-1,_result:t},_init:pp}};z.memo=function(t,e){return{$$typeof:fp,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=X.T,a={};X.T=a;try{var l=t(),i=X.S;i!==null&&i(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Fn,Zc)}catch(n){Zc(n)}finally{e!==null&&a.types!==null&&(e.types=a.types),X.T=e}};z.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()};z.use=function(t){return X.H.use(t)};z.useActionState=function(t,e,a){return X.H.useActionState(t,e,a)};z.useCallback=function(t,e){return X.H.useCallback(t,e)};z.useContext=function(t){return X.H.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t,e){return X.H.useDeferredValue(t,e)};z.useEffect=function(t,e){return X.H.useEffect(t,e)};z.useEffectEvent=function(t){return X.H.useEffectEvent(t)};z.useId=function(){return X.H.useId()};z.useImperativeHandle=function(t,e,a){return X.H.useImperativeHandle(t,e,a)};z.useInsertionEffect=function(t,e){return X.H.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return X.H.useLayoutEffect(t,e)};z.useMemo=function(t,e){return X.H.useMemo(t,e)};z.useOptimistic=function(t,e){return X.H.useOptimistic(t,e)};z.useReducer=function(t,e,a){return X.H.useReducer(t,e,a)};z.useRef=function(t){return X.H.useRef(t)};z.useState=function(t){return X.H.useState(t)};z.useSyncExternalStore=function(t,e,a){return X.H.useSyncExternalStore(t,e,a)};z.useTransition=function(){return X.H.useTransition()};z.version="19.2.8"});var hi=ze((ag,Pc)=>{"use strict";Pc.exports=Ic()});var oo=ze(K=>{"use strict";function iu(t,e){var a=t.length;t.push(e);t:for(;0<a;){var l=a-1>>>1,i=t[l];if(0<gi(i,e))t[l]=e,t[a]=i,a=l;else break t}}function Wt(t){return t.length===0?null:t[0]}function mi(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;t:for(var l=0,i=t.length,n=i>>>1;l<n;){var u=2*(l+1)-1,f=t[u],c=u+1,r=t[c];if(0>gi(f,a))c<i&&0>gi(r,f)?(t[l]=r,t[c]=a,l=c):(t[l]=f,t[u]=a,l=u);else if(c<i&&0>gi(r,a))t[l]=r,t[c]=a,l=c;else break t}}return e}function gi(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}K.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(to=performance,K.unstable_now=function(){return to.now()}):(eu=Date,eo=eu.now(),K.unstable_now=function(){return eu.now()-eo});var to,eu,eo,le=[],Me=[],gp=1,Ht=null,ht=3,nu=!1,dl=!1,pl=!1,uu=!1,io=typeof setTimeout=="function"?setTimeout:null,no=typeof clearTimeout=="function"?clearTimeout:null,ao=typeof setImmediate!="undefined"?setImmediate:null;function bi(t){for(var e=Wt(Me);e!==null;){if(e.callback===null)mi(Me);else if(e.startTime<=t)mi(Me),e.sortIndex=e.expirationTime,iu(le,e);else break;e=Wt(Me)}}function fu(t){if(pl=!1,bi(t),!dl)if(Wt(le)!==null)dl=!0,wa||(wa=!0,Sa());else{var e=Wt(Me);e!==null&&cu(fu,e.startTime-t)}}var wa=!1,hl=-1,uo=5,fo=-1;function co(){return uu?!0:!(K.unstable_now()-fo<uo)}function au(){if(uu=!1,wa){var t=K.unstable_now();fo=t;var e=!0;try{t:{dl=!1,pl&&(pl=!1,no(hl),hl=-1),nu=!0;var a=ht;try{e:{for(bi(t),Ht=Wt(le);Ht!==null&&!(Ht.expirationTime>t&&co());){var l=Ht.callback;if(typeof l=="function"){Ht.callback=null,ht=Ht.priorityLevel;var i=l(Ht.expirationTime<=t);if(t=K.unstable_now(),typeof i=="function"){Ht.callback=i,bi(t),e=!0;break e}Ht===Wt(le)&&mi(le),bi(t)}else mi(le);Ht=Wt(le)}if(Ht!==null)e=!0;else{var n=Wt(Me);n!==null&&cu(fu,n.startTime-t),e=!1}}break t}finally{Ht=null,ht=a,nu=!1}e=void 0}}finally{e?Sa():wa=!1}}}var Sa;typeof ao=="function"?Sa=function(){ao(au)}:typeof MessageChannel!="undefined"?(lu=new MessageChannel,lo=lu.port2,lu.port1.onmessage=au,Sa=function(){lo.postMessage(null)}):Sa=function(){io(au,0)};var lu,lo;function cu(t,e){hl=io(function(){t(K.unstable_now())},e)}K.unstable_IdlePriority=5;K.unstable_ImmediatePriority=1;K.unstable_LowPriority=4;K.unstable_NormalPriority=3;K.unstable_Profiling=null;K.unstable_UserBlockingPriority=2;K.unstable_cancelCallback=function(t){t.callback=null};K.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):uo=0<t?Math.floor(1e3/t):5};K.unstable_getCurrentPriorityLevel=function(){return ht};K.unstable_next=function(t){switch(ht){case 1:case 2:case 3:var e=3;break;default:e=ht}var a=ht;ht=e;try{return t()}finally{ht=a}};K.unstable_requestPaint=function(){uu=!0};K.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ht;ht=t;try{return e()}finally{ht=a}};K.unstable_scheduleCallback=function(t,e,a){var l=K.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?l+a:l):a=l,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:gp++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>l?(t.sortIndex=a,iu(Me,t),Wt(le)===null&&t===Wt(Me)&&(pl?(no(hl),hl=-1):pl=!0,cu(fu,a-l))):(t.sortIndex=i,iu(le,t),dl||nu||(dl=!0,wa||(wa=!0,Sa()))),t};K.unstable_shouldYield=co;K.unstable_wrapCallback=function(t){var e=ht;return function(){var a=ht;ht=e;try{return t.apply(this,arguments)}finally{ht=a}}}});var ro=ze((ig,so)=>{"use strict";so.exports=oo()});var ho=ze(bt=>{"use strict";var bp=hi();function po(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ce(){}var gt={d:{f:Ce,r:function(){throw Error(po(522))},D:Ce,C:Ce,L:Ce,m:Ce,X:Ce,S:Ce,M:Ce},p:0,findDOMNode:null},mp=Symbol.for("react.portal");function yp(t,e,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mp,key:l==null?null:""+l,children:t,containerInfo:e,implementation:a}}var gl=bp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function yi(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gt;bt.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(po(299));return yp(t,e,null,a)};bt.flushSync=function(t){var e=gl.T,a=gt.p;try{if(gl.T=null,gt.p=2,t)return t()}finally{gl.T=e,gt.p=a,gt.d.f()}};bt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,gt.d.C(t,e))};bt.prefetchDNS=function(t){typeof t=="string"&&gt.d.D(t)};bt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,l=yi(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,n=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?gt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:l,integrity:i,fetchPriority:n}):a==="script"&&gt.d.X(t,{crossOrigin:l,integrity:i,fetchPriority:n,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};bt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=yi(e.as,e.crossOrigin);gt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&gt.d.M(t)};bt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,l=yi(a,e.crossOrigin);gt.d.L(t,a,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};bt.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=yi(e.as,e.crossOrigin);gt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else gt.d.m(t)};bt.requestFormReset=function(t){gt.d.r(t)};bt.unstable_batchedUpdates=function(t,e){return t(e)};bt.useFormState=function(t,e,a){return gl.H.useFormState(t,e,a)};bt.useFormStatus=function(){return gl.H.useHostTransitionStatus()};bt.version="19.2.8"});var mo=ze((ug,bo)=>{"use strict";function go(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(go)}catch(t){console.error(t)}}go(),bo.exports=ho()});var A0=ze(Qn=>{"use strict";var nt=ro(),Xs=hi(),vp=mo();function y(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Qs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ei(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function Zs(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vs(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yo(t){if(ei(t)!==t)throw Error(y(188))}function xp(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(y(188));return e!==t?null:t}for(var a=t,l=e;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return yo(i),t;if(n===l)return yo(i),e;n=n.sibling}throw Error(y(188))}if(a.return!==l.return)a=i,l=n;else{for(var u=!1,f=i.child;f;){if(f===a){u=!0,a=i,l=n;break}if(f===l){u=!0,l=i,a=n;break}f=f.sibling}if(!u){for(f=n.child;f;){if(f===a){u=!0,a=n,l=i;break}if(f===l){u=!0,l=n,a=i;break}f=f.sibling}if(!u)throw Error(y(189))}}if(a.alternate!==l)throw Error(y(190))}if(a.tag!==3)throw Error(y(188));return a.stateNode.current===a?t:e}function Ks(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Ks(t),e!==null)return e;t=t.sibling}return null}var V=Object.assign,Sp=Symbol.for("react.element"),vi=Symbol.for("react.transitional.element"),Tl=Symbol.for("react.portal"),ka=Symbol.for("react.fragment"),Js=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),Fs=Symbol.for("react.consumer"),re=Symbol.for("react.context"),Gf=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Zu=Symbol.for("react.activity"),wp=Symbol.for("react.memo_cache_sentinel"),vo=Symbol.iterator;function bl(t){return t===null||typeof t!="object"?null:(t=vo&&t[vo]||t["@@iterator"],typeof t=="function"?t:null)}var Tp=Symbol.for("react.client.reference");function Vu(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ka:return"Fragment";case Yu:return"Profiler";case Js:return"StrictMode";case Xu:return"Suspense";case Qu:return"SuspenseList";case Zu:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Tl:return"Portal";case re:return t.displayName||"Context";case Fs:return(t._context.displayName||"Context")+".Consumer";case Gf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case Ee:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}var zl=Array.isArray,T=Xs.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=vp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ia={pending:!1,data:null,method:null,action:null},Ku=[],Aa=-1;function ee(t){return{current:t}}function ct(t){0>Aa||(t.current=Ku[Aa],Ku[Aa]=null,Aa--)}function Y(t,e){Aa++,Ku[Aa]=t.current,t.current=e}var te=ee(null),Ll=ee(null),Ge=ee(null),Ii=ee(null);function Pi(t,e){switch(Y(Ge,e),Y(Ll,t),Y(te,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Cs(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Cs(e),t=g0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ct(te),Y(te,t)}function Ka(){ct(te),ct(Ll),ct(Ge)}function Ju(t){t.memoizedState!==null&&Y(Ii,t);var e=te.current,a=g0(e,t.type);e!==a&&(Y(Ll,t),Y(te,a))}function tn(t){Ll.current===t&&(ct(te),ct(Ll)),Ii.current===t&&(ct(Ii),Il._currentValue=ia)}var ou,xo;function ta(t){if(ou===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);ou=e&&e[1]||"",xo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ou+t+xo}var su=!1;function ru(t,e){if(!t||su)return"";su=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(h){var d=h}Reflect.construct(t,[],g)}else{try{g.call()}catch(h){d=h}t.call(g.prototype)}}else{try{throw Error()}catch(h){d=h}(g=t())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(h){if(h&&d&&typeof h.stack=="string")return[h.stack,d.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),u=n[0],f=n[1];if(u&&f){var c=u.split(`
`),r=f.split(`
`);for(i=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;if(l===c.length||i===r.length)for(l=c.length-1,i=r.length-1;1<=l&&0<=i&&c[l]!==r[i];)i--;for(;1<=l&&0<=i;l--,i--)if(c[l]!==r[i]){if(l!==1||i!==1)do if(l--,i--,0>i||c[l]!==r[i]){var b=`
`+c[l].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=l&&0<=i);break}}}finally{su=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ta(a):""}function zp(t,e){switch(t.tag){case 26:case 27:case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return t.child!==e&&e!==null?ta("Suspense Fallback"):ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return ru(t.type,!1);case 11:return ru(t.type.render,!1);case 1:return ru(t.type,!0);case 31:return ta("Activity");default:return""}}function So(t){try{var e="",a=null;do e+=zp(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Fu=Object.prototype.hasOwnProperty,qf=nt.unstable_scheduleCallback,du=nt.unstable_cancelCallback,Mp=nt.unstable_shouldYield,Cp=nt.unstable_requestPaint,At=nt.unstable_now,Ep=nt.unstable_getCurrentPriorityLevel,Ws=nt.unstable_ImmediatePriority,$s=nt.unstable_UserBlockingPriority,en=nt.unstable_NormalPriority,kp=nt.unstable_LowPriority,Is=nt.unstable_IdlePriority,Ap=nt.log,Op=nt.unstable_setDisableYieldValue,ai=null,Ot=null;function De(t){if(typeof Ap=="function"&&Op(t),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(ai,t)}catch{}}var _t=Math.clz32?Math.clz32:Dp,_p=Math.log,Bp=Math.LN2;function Dp(t){return t>>>=0,t===0?32:31-(_p(t)/Bp|0)|0}var xi=256,Si=262144,wi=4194304;function ea(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function kn(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var i=0,n=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var f=l&134217727;return f!==0?(l=f&~n,l!==0?i=ea(l):(u&=f,u!==0?i=ea(u):a||(a=f&~t,a!==0&&(i=ea(a))))):(f=l&~n,f!==0?i=ea(f):u!==0?i=ea(u):a||(a=l&~t,a!==0&&(i=ea(a)))),i===0?0:e!==0&&e!==i&&(e&n)===0&&(n=i&-i,a=e&-e,n>=a||n===32&&(a&4194048)!==0)?e:i}function li(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Rp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ps(){var t=wi;return wi<<=1,(wi&62914560)===0&&(wi=4194304),t}function pu(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function ii(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Np(t,e,a,l,i,n){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var f=t.entanglements,c=t.expirationTimes,r=t.hiddenUpdates;for(a=u&~a;0<a;){var b=31-_t(a),g=1<<b;f[b]=0,c[b]=-1;var d=r[b];if(d!==null)for(r[b]=null,b=0;b<d.length;b++){var h=d[b];h!==null&&(h.lane&=-536870913)}a&=~g}l!==0&&tr(t,l,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(u&~e))}function tr(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-_t(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function er(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-_t(a),i=1<<l;i&e|t[l]&e&&(t[l]|=e),a&=~i}}function ar(t,e){var a=e&-e;return a=(a&42)!==0?1:Lf(a),(a&(t.suspendedLanes|e))!==0?0:a}function Lf(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Yf(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function lr(){var t=N.p;return t!==0?t:(t=window.event,t===void 0?32:C0(t.type))}function wo(t,e){var a=N.p;try{return N.p=t,e()}finally{N.p=a}}var $e=Math.random().toString(36).slice(2),st="__reactFiber$"+$e,Tt="__reactProps$"+$e,il="__reactContainer$"+$e,Wu="__reactEvents$"+$e,Hp="__reactListeners$"+$e,Up="__reactHandles$"+$e,To="__reactResources$"+$e,ni="__reactMarker$"+$e;function Xf(t){delete t[st],delete t[Tt],delete t[Wu],delete t[Hp],delete t[Up]}function Oa(t){var e=t[st];if(e)return e;for(var a=t.parentNode;a;){if(e=a[il]||a[st]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=_s(t);t!==null;){if(a=t[st])return a;t=_s(t)}return e}t=a,a=t.parentNode}return null}function nl(t){if(t=t[st]||t[il]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ml(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(y(33))}function qa(t){var e=t[To];return e||(e=t[To]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ft(t){t[ni]=!0}var ir=new Set,nr={};function ha(t,e){Ja(t,e),Ja(t+"Capture",e)}function Ja(t,e){for(nr[t]=e,t=0;t<e.length;t++)ir.add(e[t])}var Gp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zo={},Mo={};function jp(t){return Fu.call(Mo,t)?!0:Fu.call(zo,t)?!1:Gp.test(t)?Mo[t]=!0:(zo[t]=!0,!1)}function Ui(t,e,a){if(jp(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Ti(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ie(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function Gt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ur(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qp(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l!="undefined"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(u){a=""+u,n.call(this,u)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $u(t){if(!t._valueTracker){var e=ur(t)?"checked":"value";t._valueTracker=qp(t,e,""+t[e])}}function fr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=ur(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function an(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lp=/[\n"\\]/g;function Lt(t){return t.replace(Lp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Iu(t,e,a,l,i,n,u,f){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Gt(e)):t.value!==""+Gt(e)&&(t.value=""+Gt(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Pu(t,u,Gt(e)):a!=null?Pu(t,u,Gt(a)):l!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+Gt(f):t.removeAttribute("name")}function cr(t,e,a,l,i,n,u,f){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||e!=null)){$u(t);return}a=a!=null?""+Gt(a):"",e=e!=null?""+Gt(e):a,f||e===t.value||(t.value=e),t.defaultValue=e}l=l!=null?l:i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=f?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),$u(t)}function Pu(t,e,a){e==="number"&&an(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function La(t,e,a,l){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Gt(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,l&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function or(t,e,a){if(e!=null&&(e=""+Gt(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Gt(a):""}function sr(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(y(92));if(zl(l)){if(1<l.length)throw Error(y(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Gt(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),$u(t)}function Fa(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Yp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Co(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Yp.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function rr(t,e,a){if(e!=null&&typeof e!="object")throw Error(y(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var i in e)l=e[i],e.hasOwnProperty(i)&&a[i]!==l&&Co(t,i,l)}else for(var n in e)e.hasOwnProperty(n)&&Co(t,n,e[n])}function Qf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gi(t){return Qp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function de(){}var tf=null;function Zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _a=null,Ya=null;function Eo(t){var e=nl(t);if(e&&(t=e.stateNode)){var a=t[Tt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Iu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Lt(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var i=l[Tt]||null;if(!i)throw Error(y(90));Iu(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&fr(l)}break t;case"textarea":or(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&La(t,!!a.multiple,e,!1)}}}var hu=!1;function dr(t,e,a){if(hu)return t(e,a);hu=!0;try{var l=t(e);return l}finally{if(hu=!1,(_a!==null||Ya!==null)&&(qn(),_a&&(e=_a,t=Ya,Ya=_a=null,Eo(e),t)))for(e=0;e<t.length;e++)Eo(t[e])}}function Yl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(y(231,e,typeof a));return a}var me=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ef=!1;if(me)try{Ta={},Object.defineProperty(Ta,"passive",{get:function(){ef=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{ef=!1}var Ta,Re=null,Vf=null,ji=null;function pr(){if(ji)return ji;var t,e=Vf,a=e.length,l,i="value"in Re?Re.value:Re.textContent,n=i.length;for(t=0;t<a&&e[t]===i[t];t++);var u=a-t;for(l=1;l<=u&&e[a-l]===i[n-l];l++);return ji=i.slice(t,1<l?1-l:void 0)}function qi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zi(){return!0}function ko(){return!1}function zt(t){function e(a,l,i,n,u){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(a=t[f],this[f]=a?a(n):n[f]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?zi:ko,this.isPropagationStopped=ko,this}return V(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),e}var ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=zt(ga),ui=V({},ga,{view:0,detail:0}),Zp=zt(ui),gu,bu,ml,On=V({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ml&&(ml&&t.type==="mousemove"?(gu=t.screenX-ml.screenX,bu=t.screenY-ml.screenY):bu=gu=0,ml=t),gu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),Ao=zt(On),Vp=V({},On,{dataTransfer:0}),Kp=zt(Vp),Jp=V({},ui,{relatedTarget:0}),mu=zt(Jp),Fp=V({},ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Wp=zt(Fp),$p=V({},ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ip=zt($p),Pp=V({},ga,{data:0}),Oo=zt(Pp),t1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a1[t])?!!e[t]:!1}function Kf(){return l1}var i1=V({},ui,{key:function(t){if(t.key){var e=t1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kf,charCode:function(t){return t.type==="keypress"?qi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),n1=zt(i1),u1=V({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_o=zt(u1),f1=V({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kf}),c1=zt(f1),o1=V({},ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=zt(o1),r1=V({},On,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),d1=zt(r1),p1=V({},ga,{newState:0,oldState:0}),h1=zt(p1),g1=[9,13,27,32],Jf=me&&"CompositionEvent"in window,kl=null;me&&"documentMode"in document&&(kl=document.documentMode);var b1=me&&"TextEvent"in window&&!kl,hr=me&&(!Jf||kl&&8<kl&&11>=kl),Bo=" ",Do=!1;function gr(t,e){switch(t){case"keyup":return g1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function br(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ba=!1;function m1(t,e){switch(t){case"compositionend":return br(e);case"keypress":return e.which!==32?null:(Do=!0,Bo);case"textInput":return t=e.data,t===Bo&&Do?null:t;default:return null}}function y1(t,e){if(Ba)return t==="compositionend"||!Jf&&gr(t,e)?(t=pr(),ji=Vf=Re=null,Ba=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hr&&e.locale!=="ko"?null:e.data;default:return null}}var v1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ro(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v1[t.type]:e==="textarea"}function mr(t,e,a,l){_a?Ya?Ya.push(l):Ya=[l]:_a=l,e=Sn(e,"onChange"),0<e.length&&(a=new An("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Al=null,Xl=null;function x1(t){d0(t,0)}function _n(t){var e=Ml(t);if(fr(e))return t}function No(t,e){if(t==="change")return e}var yr=!1;me&&(me?(Ci="oninput"in document,Ci||(yu=document.createElement("div"),yu.setAttribute("oninput","return;"),Ci=typeof yu.oninput=="function"),Mi=Ci):Mi=!1,yr=Mi&&(!document.documentMode||9<document.documentMode));var Mi,Ci,yu;function Ho(){Al&&(Al.detachEvent("onpropertychange",vr),Xl=Al=null)}function vr(t){if(t.propertyName==="value"&&_n(Xl)){var e=[];mr(e,Xl,t,Zf(t)),dr(x1,e)}}function S1(t,e,a){t==="focusin"?(Ho(),Al=e,Xl=a,Al.attachEvent("onpropertychange",vr)):t==="focusout"&&Ho()}function w1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _n(Xl)}function T1(t,e){if(t==="click")return _n(e)}function z1(t,e){if(t==="input"||t==="change")return _n(e)}function M1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dt=typeof Object.is=="function"?Object.is:M1;function Ql(t,e){if(Dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Fu.call(e,i)||!Dt(t[i],e[i]))return!1}return!0}function Uo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Go(t,e){var a=Uo(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Uo(a)}}function xr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=an(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=an(t.document)}return e}function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var C1=me&&"documentMode"in document&&11>=document.documentMode,Da=null,af=null,Ol=null,lf=!1;function jo(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lf||Da==null||Da!==an(l)||(l=Da,"selectionStart"in l&&Ff(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Ql(Ol,l)||(Ol=l,l=Sn(af,"onSelect"),0<l.length&&(e=new An("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Da)))}function Pe(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ra={animationend:Pe("Animation","AnimationEnd"),animationiteration:Pe("Animation","AnimationIteration"),animationstart:Pe("Animation","AnimationStart"),transitionrun:Pe("Transition","TransitionRun"),transitionstart:Pe("Transition","TransitionStart"),transitioncancel:Pe("Transition","TransitionCancel"),transitionend:Pe("Transition","TransitionEnd")},vu={},wr={};me&&(wr=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function ba(t){if(vu[t])return vu[t];if(!Ra[t])return t;var e=Ra[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in wr)return vu[t]=e[a];return t}var Tr=ba("animationend"),zr=ba("animationiteration"),Mr=ba("animationstart"),E1=ba("transitionrun"),k1=ba("transitionstart"),A1=ba("transitioncancel"),Cr=ba("transitionend"),Er=new Map,nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nf.push("scrollEnd");function Ft(t,e){Er.set(t,e),ha(e,[t])}var ln=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ut=[],Na=0,Wf=0;function Bn(){for(var t=Na,e=Wf=Na=0;e<t;){var a=Ut[e];Ut[e++]=null;var l=Ut[e];Ut[e++]=null;var i=Ut[e];Ut[e++]=null;var n=Ut[e];if(Ut[e++]=null,l!==null&&i!==null){var u=l.pending;u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i}n!==0&&kr(a,i,n)}}function Dn(t,e,a,l){Ut[Na++]=t,Ut[Na++]=e,Ut[Na++]=a,Ut[Na++]=l,Wf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function $f(t,e,a,l){return Dn(t,e,a,l),nn(t)}function ma(t,e){return Dn(t,null,null,e),nn(t)}function kr(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var i=!1,n=t.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&e!==null&&(i=31-_t(a),t=n.hiddenUpdates,l=t[i],l===null?t[i]=[e]:l.push(e),e.lane=a|536870912),n):null}function nn(t){if(50<jl)throw jl=0,Cf=null,Error(y(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ha={};function O1(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(t,e,a,l){return new O1(t,e,a,l)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function he(t,e){var a=t.alternate;return a===null?(a=Et(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ar(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Li(t,e,a,l,i,n){var u=0;if(l=t,typeof t=="function")If(t)&&(u=1);else if(typeof t=="string")u=Dh(t,a,te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Zu:return t=Et(31,a,e,i),t.elementType=Zu,t.lanes=n,t;case ka:return na(a.children,i,n,e);case Js:u=8,i|=24;break;case Yu:return t=Et(12,a,e,i|2),t.elementType=Yu,t.lanes=n,t;case Xu:return t=Et(13,a,e,i),t.elementType=Xu,t.lanes=n,t;case Qu:return t=Et(19,a,e,i),t.elementType=Qu,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case re:u=10;break t;case Fs:u=9;break t;case Gf:u=11;break t;case jf:u=14;break t;case Ee:u=16,l=null;break t}u=29,a=Error(y(130,t===null?"null":typeof t,"")),l=null}return e=Et(u,a,e,i),e.elementType=t,e.type=l,e.lanes=n,e}function na(t,e,a,l){return t=Et(7,t,l,e),t.lanes=a,t}function xu(t,e,a){return t=Et(6,t,null,e),t.lanes=a,t}function Or(t){var e=Et(18,null,null,0);return e.stateNode=t,e}function Su(t,e,a){return e=Et(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var qo=new WeakMap;function Yt(t,e){if(typeof t=="object"&&t!==null){var a=qo.get(t);return a!==void 0?a:(e={value:t,source:e,stack:So(e)},qo.set(t,e),e)}return{value:t,source:e,stack:So(e)}}var Ua=[],Ga=0,un=null,Zl=0,jt=[],qt=0,Ke=null,$t=1,It="";function oe(t,e){Ua[Ga++]=Zl,Ua[Ga++]=un,un=t,Zl=e}function _r(t,e,a){jt[qt++]=$t,jt[qt++]=It,jt[qt++]=Ke,Ke=t;var l=$t;t=It;var i=32-_t(l)-1;l&=~(1<<i),a+=1;var n=32-_t(e)+i;if(30<n){var u=i-i%5;n=(l&(1<<u)-1).toString(32),l>>=u,i-=u,$t=1<<32-_t(e)+i|a<<i|l,It=n+t}else $t=1<<n|a<<i|l,It=t}function Pf(t){t.return!==null&&(oe(t,1),_r(t,1,0))}function tc(t){for(;t===un;)un=Ua[--Ga],Ua[Ga]=null,Zl=Ua[--Ga],Ua[Ga]=null;for(;t===Ke;)Ke=jt[--qt],jt[qt]=null,It=jt[--qt],jt[qt]=null,$t=jt[--qt],jt[qt]=null}function Br(t,e){jt[qt++]=$t,jt[qt++]=It,jt[qt++]=Ke,$t=e.id,It=e.overflow,Ke=t}var rt=null,Z=null,_=!1,je=null,Xt=!1,uf=Error(y(519));function Je(t){var e=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(Yt(e,t)),uf}function Lo(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[st]=t,e[Tt]=l,a){case"dialog":E("cancel",e),E("close",e);break;case"iframe":case"object":case"embed":E("load",e);break;case"video":case"audio":for(a=0;a<Wl.length;a++)E(Wl[a],e);break;case"source":E("error",e);break;case"img":case"image":case"link":E("error",e),E("load",e);break;case"details":E("toggle",e);break;case"input":E("invalid",e),cr(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":E("invalid",e);break;case"textarea":E("invalid",e),sr(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||h0(e.textContent,a)?(l.popover!=null&&(E("beforetoggle",e),E("toggle",e)),l.onScroll!=null&&E("scroll",e),l.onScrollEnd!=null&&E("scrollend",e),l.onClick!=null&&(e.onclick=de),e=!0):e=!1,e||Je(t,!0)}function Yo(t){for(rt=t.return;rt;)switch(rt.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:rt=rt.return}}function za(t){if(t!==rt)return!1;if(!_)return Yo(t),_=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||_f(t.type,t.memoizedProps)),a=!a),a&&Z&&Je(t),Yo(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));Z=Os(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));Z=Os(t)}else e===27?(e=Z,Ie(t.type)?(t=Nf,Nf=null,Z=t):Z=e):Z=rt?Zt(t.stateNode.nextSibling):null;return!0}function oa(){Z=rt=null,_=!1}function wu(){var t=je;return t!==null&&(St===null?St=t:St.push.apply(St,t),je=null),t}function Vl(t){je===null?je=[t]:je.push(t)}var ff=ee(null),ya=null,pe=null;function Ae(t,e,a){Y(ff,e._currentValue),e._currentValue=a}function ge(t){t._currentValue=ff.current,ct(ff)}function cf(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function of(t,e,a,l){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;t:for(;n!==null;){var f=n;n=i;for(var c=0;c<e.length;c++)if(f.context===e[c]){n.lanes|=a,f=n.alternate,f!==null&&(f.lanes|=a),cf(n.return,a,t),l||(u=null);break t}n=f.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(y(341));u.lanes|=a,n=u.alternate,n!==null&&(n.lanes|=a),cf(u,a,t),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function ul(t,e,a,l){t=null;for(var i=e,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(y(387));if(u=u.memoizedProps,u!==null){var f=i.type;Dt(i.pendingProps.value,u.value)||(t!==null?t.push(f):t=[f])}}else if(i===Ii.current){if(u=i.alternate,u===null)throw Error(y(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Il):t=[Il])}i=i.return}t!==null&&of(e,t,a,l),e.flags|=262144}function fn(t){for(t=t.firstContext;t!==null;){if(!Dt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sa(t){ya=t,pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dt(t){return Dr(ya,t)}function Ei(t,e){return ya===null&&sa(t),Dr(t,e)}function Dr(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},pe===null){if(t===null)throw Error(y(308));pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else pe=pe.next=e;return a}var _1=typeof AbortController!="undefined"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},B1=nt.unstable_scheduleCallback,D1=nt.unstable_NormalPriority,et={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ec(){return{controller:new _1,data:new Map,refCount:0}}function fi(t){t.refCount--,t.refCount===0&&B1(D1,function(){t.controller.abort()})}var _l=null,sf=0,Wa=0,Xa=null;function R1(t,e){if(_l===null){var a=_l=[];sf=0,Wa=Cc(),Xa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return sf++,e.then(Xo,Xo),e}function Xo(){if(--sf===0&&_l!==null){Xa!==null&&(Xa.status="fulfilled");var t=_l;_l=null,Wa=0,Xa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function N1(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Qo=T.S;T.S=function(t,e){Kd=At(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&R1(t,e),Qo!==null&&Qo(t,e)};var ua=ee(null);function ac(){var t=ua.current;return t!==null?t:L.pooledCache}function Yi(t,e){e===null?Y(ua,ua.current):Y(ua,e.pool)}function Rr(){var t=ac();return t===null?null:{parent:et._currentValue,pool:t}}var fl=Error(y(460)),lc=Error(y(474)),Rn=Error(y(542)),cn={then:function(){}};function Zo(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nr(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(de,de),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ko(t),t;default:if(typeof e.status=="string")e.then(de,de);else{if(t=L,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=l}},function(l){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ko(t),t}throw fa=e,fl}}function aa(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fa=a,fl):a}}var fa=null;function Vo(){if(fa===null)throw Error(y(459));var t=fa;return fa=null,t}function Ko(t){if(t===fl||t===Rn)throw Error(y(483))}var Qa=null,Kl=0;function ki(t){var e=Kl;return Kl+=1,Qa===null&&(Qa=[]),Nr(Qa,t,e)}function yl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ai(t,e){throw e.$$typeof===Sp?Error(y(525)):(t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Hr(t){function e(s,o){if(t){var p=s.deletions;p===null?(s.deletions=[o],s.flags|=16):p.push(o)}}function a(s,o){if(!t)return null;for(;o!==null;)e(s,o),o=o.sibling;return null}function l(s){for(var o=new Map;s!==null;)s.key!==null?o.set(s.key,s):o.set(s.index,s),s=s.sibling;return o}function i(s,o){return s=he(s,o),s.index=0,s.sibling=null,s}function n(s,o,p){return s.index=p,t?(p=s.alternate,p!==null?(p=p.index,p<o?(s.flags|=67108866,o):p):(s.flags|=67108866,o)):(s.flags|=1048576,o)}function u(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function f(s,o,p,m){return o===null||o.tag!==6?(o=xu(p,s.mode,m),o.return=s,o):(o=i(o,p),o.return=s,o)}function c(s,o,p,m){var S=p.type;return S===ka?b(s,o,p.props.children,m,p.key):o!==null&&(o.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ee&&aa(S)===o.type)?(o=i(o,p.props),yl(o,p),o.return=s,o):(o=Li(p.type,p.key,p.props,null,s.mode,m),yl(o,p),o.return=s,o)}function r(s,o,p,m){return o===null||o.tag!==4||o.stateNode.containerInfo!==p.containerInfo||o.stateNode.implementation!==p.implementation?(o=Su(p,s.mode,m),o.return=s,o):(o=i(o,p.children||[]),o.return=s,o)}function b(s,o,p,m,S){return o===null||o.tag!==7?(o=na(p,s.mode,m,S),o.return=s,o):(o=i(o,p),o.return=s,o)}function g(s,o,p){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=xu(""+o,s.mode,p),o.return=s,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case vi:return p=Li(o.type,o.key,o.props,null,s.mode,p),yl(p,o),p.return=s,p;case Tl:return o=Su(o,s.mode,p),o.return=s,o;case Ee:return o=aa(o),g(s,o,p)}if(zl(o)||bl(o))return o=na(o,s.mode,p,null),o.return=s,o;if(typeof o.then=="function")return g(s,ki(o),p);if(o.$$typeof===re)return g(s,Ei(s,o),p);Ai(s,o)}return null}function d(s,o,p,m){var S=o!==null?o.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return S!==null?null:f(s,o,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:return p.key===S?c(s,o,p,m):null;case Tl:return p.key===S?r(s,o,p,m):null;case Ee:return p=aa(p),d(s,o,p,m)}if(zl(p)||bl(p))return S!==null?null:b(s,o,p,m,null);if(typeof p.then=="function")return d(s,o,ki(p),m);if(p.$$typeof===re)return d(s,o,Ei(s,p),m);Ai(s,p)}return null}function h(s,o,p,m,S){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return s=s.get(p)||null,f(o,s,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vi:return s=s.get(m.key===null?p:m.key)||null,c(o,s,m,S);case Tl:return s=s.get(m.key===null?p:m.key)||null,r(o,s,m,S);case Ee:return m=aa(m),h(s,o,p,m,S)}if(zl(m)||bl(m))return s=s.get(p)||null,b(o,s,m,S,null);if(typeof m.then=="function")return h(s,o,p,ki(m),S);if(m.$$typeof===re)return h(s,o,p,Ei(o,m),S);Ai(o,m)}return null}function v(s,o,p,m){for(var S=null,B=null,x=o,C=o=0,A=null;x!==null&&C<p.length;C++){x.index>C?(A=x,x=null):A=x.sibling;var D=d(s,x,p[C],m);if(D===null){x===null&&(x=A);break}t&&x&&D.alternate===null&&e(s,x),o=n(D,o,C),B===null?S=D:B.sibling=D,B=D,x=A}if(C===p.length)return a(s,x),_&&oe(s,C),S;if(x===null){for(;C<p.length;C++)x=g(s,p[C],m),x!==null&&(o=n(x,o,C),B===null?S=x:B.sibling=x,B=x);return _&&oe(s,C),S}for(x=l(x);C<p.length;C++)A=h(x,s,C,p[C],m),A!==null&&(t&&A.alternate!==null&&x.delete(A.key===null?C:A.key),o=n(A,o,C),B===null?S=A:B.sibling=A,B=A);return t&&x.forEach(function(Te){return e(s,Te)}),_&&oe(s,C),S}function w(s,o,p,m){if(p==null)throw Error(y(151));for(var S=null,B=null,x=o,C=o=0,A=null,D=p.next();x!==null&&!D.done;C++,D=p.next()){x.index>C?(A=x,x=null):A=x.sibling;var Te=d(s,x,D.value,m);if(Te===null){x===null&&(x=A);break}t&&x&&Te.alternate===null&&e(s,x),o=n(Te,o,C),B===null?S=Te:B.sibling=Te,B=Te,x=A}if(D.done)return a(s,x),_&&oe(s,C),S;if(x===null){for(;!D.done;C++,D=p.next())D=g(s,D.value,m),D!==null&&(o=n(D,o,C),B===null?S=D:B.sibling=D,B=D);return _&&oe(s,C),S}for(x=l(x);!D.done;C++,D=p.next())D=h(x,s,C,D.value,m),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?C:D.key),o=n(D,o,C),B===null?S=D:B.sibling=D,B=D);return t&&x.forEach(function(V0){return e(s,V0)}),_&&oe(s,C),S}function G(s,o,p,m){if(typeof p=="object"&&p!==null&&p.type===ka&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:t:{for(var S=p.key;o!==null;){if(o.key===S){if(S=p.type,S===ka){if(o.tag===7){a(s,o.sibling),m=i(o,p.props.children),m.return=s,s=m;break t}}else if(o.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ee&&aa(S)===o.type){a(s,o.sibling),m=i(o,p.props),yl(m,p),m.return=s,s=m;break t}a(s,o);break}else e(s,o);o=o.sibling}p.type===ka?(m=na(p.props.children,s.mode,m,p.key),m.return=s,s=m):(m=Li(p.type,p.key,p.props,null,s.mode,m),yl(m,p),m.return=s,s=m)}return u(s);case Tl:t:{for(S=p.key;o!==null;){if(o.key===S)if(o.tag===4&&o.stateNode.containerInfo===p.containerInfo&&o.stateNode.implementation===p.implementation){a(s,o.sibling),m=i(o,p.children||[]),m.return=s,s=m;break t}else{a(s,o);break}else e(s,o);o=o.sibling}m=Su(p,s.mode,m),m.return=s,s=m}return u(s);case Ee:return p=aa(p),G(s,o,p,m)}if(zl(p))return v(s,o,p,m);if(bl(p)){if(S=bl(p),typeof S!="function")throw Error(y(150));return p=S.call(p),w(s,o,p,m)}if(typeof p.then=="function")return G(s,o,ki(p),m);if(p.$$typeof===re)return G(s,o,Ei(s,p),m);Ai(s,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,o!==null&&o.tag===6?(a(s,o.sibling),m=i(o,p),m.return=s,s=m):(a(s,o),m=xu(p,s.mode,m),m.return=s,s=m),u(s)):a(s,o)}return function(s,o,p,m){try{Kl=0;var S=G(s,o,p,m);return Qa=null,S}catch(x){if(x===fl||x===Rn)throw x;var B=Et(29,x,null,s.mode);return B.lanes=m,B.return=s,B}}}var ra=Hr(!0),Ur=Hr(!1),ke=!1;function ic(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function qe(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Le(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(R&2)!==0){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,e=nn(t),kr(t,null,a),e}return Dn(t,l,e,a),nn(t)}function Bl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,er(t,a)}}function Tu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,a=a.next}while(a!==null);n===null?i=n=e:n=n.next=e}else i=n=e;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var df=!1;function Dl(){if(df){var t=Xa;if(t!==null)throw t}}function Rl(t,e,a,l){df=!1;var i=t.updateQueue;ke=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var c=f,r=c.next;c.next=null,u===null?n=r:u.next=r,u=c;var b=t.alternate;b!==null&&(b=b.updateQueue,f=b.lastBaseUpdate,f!==u&&(f===null?b.firstBaseUpdate=r:f.next=r,b.lastBaseUpdate=c))}if(n!==null){var g=i.baseState;u=0,b=r=c=null,f=n;do{var d=f.lane&-536870913,h=d!==f.lane;if(h?(O&d)===d:(l&d)===d){d!==0&&d===Wa&&(df=!0),b!==null&&(b=b.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var v=t,w=f;d=e;var G=a;switch(w.tag){case 1:if(v=w.payload,typeof v=="function"){g=v.call(G,g,d);break t}g=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(G,g,d):v,d==null)break t;g=V({},g,d);break t;case 2:ke=!0}}d=f.callback,d!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[d]:h.push(d))}else h={lane:d,tag:f.tag,payload:f.payload,callback:f.callback,next:null},b===null?(r=b=h,c=g):b=b.next=h,u|=d;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;h=f,f=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);b===null&&(c=g),i.baseState=c,i.firstBaseUpdate=r,i.lastBaseUpdate=b,n===null&&(i.shared.lanes=0),We|=u,t.lanes=u,t.memoizedState=g}}function Gr(t,e){if(typeof t!="function")throw Error(y(191,t));t.call(e)}function jr(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gr(a[t],e)}var $a=ee(null),on=ee(0);function Jo(t,e){t=Se,Y(on,t),Y($a,e),Se=t|e.baseLanes}function pf(){Y(on,Se),Y($a,$a.current)}function nc(){Se=on.current,ct($a),ct(on)}var Rt=ee(null),Qt=null;function Oe(t){var e=t.alternate;Y($,$.current&1),Y(Rt,t),Qt===null&&(e===null||$a.current!==null||e.memoizedState!==null)&&(Qt=t)}function hf(t){Y($,$.current),Y(Rt,t),Qt===null&&(Qt=t)}function qr(t){t.tag===22?(Y($,$.current),Y(Rt,t),Qt===null&&(Qt=t)):_e(t)}function _e(){Y($,$.current),Y(Rt,Rt.current)}function Ct(t){ct(Rt),Qt===t&&(Qt=null),ct($)}var $=ee(0);function sn(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Df(a)||Rf(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ye=0,M=null,q=null,P=null,rn=!1,Za=!1,da=!1,dn=0,Jl=0,Va=null,H1=0;function F(){throw Error(y(321))}function uc(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Dt(t[a],e[a]))return!1;return!0}function fc(t,e,a,l,i,n){return ye=n,M=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,T.H=t===null||t.memoizedState===null?md:yc,da=!1,n=a(l,i),da=!1,Za&&(n=Yr(e,a,l,i)),Lr(t),n}function Lr(t){T.H=Fl;var e=q!==null&&q.next!==null;if(ye=0,P=q=M=null,rn=!1,Jl=0,Va=null,e)throw Error(y(300));t===null||at||(t=t.dependencies,t!==null&&fn(t)&&(at=!0))}function Yr(t,e,a,l){M=t;var i=0;do{if(Za&&(Va=null),Jl=0,Za=!1,25<=i)throw Error(y(301));if(i+=1,P=q=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}T.H=yd,n=e(a,l)}while(Za);return n}function U1(){var t=T.H,e=t.useState()[0];return e=typeof e.then=="function"?ci(e):e,t=t.useState()[0],(q!==null?q.memoizedState:null)!==t&&(M.flags|=1024),e}function cc(){var t=dn!==0;return dn=0,t}function oc(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function sc(t){if(rn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}rn=!1}ye=0,P=q=M=null,Za=!1,Jl=dn=0,Va=null}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?M.memoizedState=P=t:P=P.next=t,P}function I(){if(q===null){var t=M.alternate;t=t!==null?t.memoizedState:null}else t=q.next;var e=P===null?M.memoizedState:P.next;if(e!==null)P=e,q=t;else{if(t===null)throw M.alternate===null?Error(y(467)):Error(y(310));q=t,t={memoizedState:q.memoizedState,baseState:q.baseState,baseQueue:q.baseQueue,queue:q.queue,next:null},P===null?M.memoizedState=P=t:P=P.next=t}return P}function Nn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ci(t){var e=Jl;return Jl+=1,Va===null&&(Va=[]),t=Nr(Va,t,e),e=M,(P===null?e.memoizedState:P.next)===null&&(e=e.alternate,T.H=e===null||e.memoizedState===null?md:yc),t}function Hn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ci(t);if(t.$$typeof===re)return dt(t)}throw Error(y(438,String(t)))}function rc(t){var e=null,a=M.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=M.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Nn(),M.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=wp;return e.index++,a}function ve(t,e){return typeof e=="function"?e(t):e}function Xi(t){var e=I();return dc(e,q,t)}function dc(t,e,a){var l=t.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=a;var i=t.baseQueue,n=l.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}e.baseQueue=i=n,l.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{e=i.next;var f=u=null,c=null,r=e,b=!1;do{var g=r.lane&-536870913;if(g!==r.lane?(O&g)===g:(ye&g)===g){var d=r.revertLane;if(d===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),g===Wa&&(b=!0);else if((ye&d)===d){r=r.next,d===Wa&&(b=!0);continue}else g={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},c===null?(f=c=g,u=n):c=c.next=g,M.lanes|=d,We|=d;g=r.action,da&&a(n,g),n=r.hasEagerState?r.eagerState:a(n,g)}else d={lane:g,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},c===null?(f=c=d,u=n):c=c.next=d,M.lanes|=g,We|=g;r=r.next}while(r!==null&&r!==e);if(c===null?u=n:c.next=f,!Dt(n,t.memoizedState)&&(at=!0,b&&(a=Xa,a!==null)))throw a;t.memoizedState=n,t.baseState=u,t.baseQueue=c,l.lastRenderedState=n}return i===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function zu(t){var e=I(),a=e.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=t;var l=a.dispatch,i=a.pending,n=e.memoizedState;if(i!==null){a.pending=null;var u=i=i.next;do n=t(n,u.action),u=u.next;while(u!==i);Dt(n,e.memoizedState)||(at=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),a.lastRenderedState=n}return[n,l]}function Xr(t,e,a){var l=M,i=I(),n=_;if(n){if(a===void 0)throw Error(y(407));a=a()}else a=e();var u=!Dt((q||i).memoizedState,a);if(u&&(i.memoizedState=a,at=!0),i=i.queue,pc(Vr.bind(null,l,i,t),[t]),i.getSnapshot!==e||u||P!==null&&P.memoizedState.tag&1){if(l.flags|=2048,Ia(9,{destroy:void 0},Zr.bind(null,l,i,a,e),null),L===null)throw Error(y(349));n||(ye&127)!==0||Qr(l,e,a)}return a}function Qr(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=M.updateQueue,e===null?(e=Nn(),M.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Zr(t,e,a,l){e.value=a,e.getSnapshot=l,Kr(e)&&Jr(t)}function Vr(t,e,a){return a(function(){Kr(e)&&Jr(t)})}function Kr(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Dt(t,a)}catch{return!0}}function Jr(t){var e=ma(t,2);e!==null&&wt(e,t,2)}function gf(t){var e=mt();if(typeof t=="function"){var a=t;if(t=a(),da){De(!0);try{a()}finally{De(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:t},e}function Fr(t,e,a,l){return t.baseState=a,dc(t,q,typeof l=="function"?l:ve)}function G1(t,e,a,l,i){if(Gn(t))throw Error(y(485));if(t=e.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};T.T!==null?a(!0):n.isTransition=!1,l(n),a=e.pending,a===null?(n.next=e.pending=n,Wr(e,n)):(n.next=a.next,e.pending=a.next=n)}}function Wr(t,e){var a=e.action,l=e.payload,i=t.state;if(e.isTransition){var n=T.T,u={};T.T=u;try{var f=a(i,l),c=T.S;c!==null&&c(u,f),Fo(t,e,f)}catch(r){bf(t,e,r)}finally{n!==null&&u.types!==null&&(n.types=u.types),T.T=n}}else try{n=a(i,l),Fo(t,e,n)}catch(r){bf(t,e,r)}}function Fo(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Wo(t,e,l)},function(l){return bf(t,e,l)}):Wo(t,e,a)}function Wo(t,e,a){e.status="fulfilled",e.value=a,$r(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Wr(t,a)))}function bf(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,$r(e),e=e.next;while(e!==l)}t.action=null}function $r(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ir(t,e){return e}function $o(t,e){if(_){var a=L.formState;if(a!==null){t:{var l=M;if(_){if(Z){e:{for(var i=Z,n=Xt;i.nodeType!==8;){if(!n){i=null;break e}if(i=Zt(i.nextSibling),i===null){i=null;break e}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){Z=Zt(i.nextSibling),l=i.data==="F!";break t}}Je(l)}l=!1}l&&(e=a[0])}}return a=mt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},a.queue=l,a=hd.bind(null,M,l),l.dispatch=a,l=gf(!1),n=mc.bind(null,M,!1,l.queue),l=mt(),i={state:e,dispatch:null,action:t,pending:null},l.queue=i,a=G1.bind(null,M,i,n,a),i.dispatch=a,l.memoizedState=t,[e,a,!1]}function Io(t){var e=I();return Pr(e,q,t)}function Pr(t,e,a){if(e=dc(t,e,Ir)[0],t=Xi(ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=ci(e)}catch(u){throw u===fl?Rn:u}else l=e;e=I();var i=e.queue,n=i.dispatch;return a!==e.memoizedState&&(M.flags|=2048,Ia(9,{destroy:void 0},j1.bind(null,i,a),null)),[l,n,t]}function j1(t,e){t.action=e}function Po(t){var e=I(),a=q;if(a!==null)return Pr(e,a,t);I(),e=e.memoizedState,a=I();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Ia(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=M.updateQueue,e===null&&(e=Nn(),M.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function td(){return I().memoizedState}function Qi(t,e,a,l){var i=mt();M.flags|=t,i.memoizedState=Ia(1|e,{destroy:void 0},a,l===void 0?null:l)}function Un(t,e,a,l){var i=I();l=l===void 0?null:l;var n=i.memoizedState.inst;q!==null&&l!==null&&uc(l,q.memoizedState.deps)?i.memoizedState=Ia(e,n,a,l):(M.flags|=t,i.memoizedState=Ia(1|e,n,a,l))}function ts(t,e){Qi(8390656,8,t,e)}function pc(t,e){Un(2048,8,t,e)}function q1(t){M.flags|=4;var e=M.updateQueue;if(e===null)e=Nn(),M.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function ed(t){var e=I().memoizedState;return q1({ref:e,nextImpl:t}),function(){if((R&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}function ad(t,e){return Un(4,2,t,e)}function ld(t,e){return Un(4,4,t,e)}function id(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nd(t,e,a){a=a!=null?a.concat([t]):null,Un(4,4,id.bind(null,e,t),a)}function hc(){}function ud(t,e){var a=I();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&uc(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function fd(t,e){var a=I();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&uc(e,l[1]))return l[0];if(l=t(),da){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[l,e],l}function gc(t,e,a){return a===void 0||(ye&1073741824)!==0&&(O&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Fd(),M.lanes|=t,We|=t,a)}function cd(t,e,a,l){return Dt(a,e)?a:$a.current!==null?(t=gc(t,a,l),Dt(t,e)||(at=!0),t):(ye&42)===0||(ye&1073741824)!==0&&(O&261930)===0?(at=!0,t.memoizedState=a):(t=Fd(),M.lanes|=t,We|=t,e)}function od(t,e,a,l,i){var n=N.p;N.p=n!==0&&8>n?n:8;var u=T.T,f={};T.T=f,mc(t,!1,e,a);try{var c=i(),r=T.S;if(r!==null&&r(f,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var b=N1(c,l);Nl(t,e,b,Bt(t))}else Nl(t,e,l,Bt(t))}catch(g){Nl(t,e,{then:function(){},status:"rejected",reason:g},Bt())}finally{N.p=n,u!==null&&f.types!==null&&(u.types=f.types),T.T=u}}function L1(){}function mf(t,e,a,l){if(t.tag!==5)throw Error(y(476));var i=sd(t).queue;od(t,i,e,ia,a===null?L1:function(){return rd(t),a(l)})}function sd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ia,baseState:ia,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:ia},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function rd(t){var e=sd(t);e.next===null&&(e=t.alternate.memoizedState),Nl(t,e.next.queue,{},Bt())}function bc(){return dt(Il)}function dd(){return I().memoizedState}function pd(){return I().memoizedState}function Y1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Bt();t=qe(a);var l=Le(e,t,a);l!==null&&(wt(l,e,a),Bl(l,e,a)),e={cache:ec()},t.payload=e;return}e=e.return}}function X1(t,e,a){var l=Bt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gn(t)?gd(e,a):(a=$f(t,e,a,l),a!==null&&(wt(a,t,l),bd(a,e,l)))}function hd(t,e,a){var l=Bt();Nl(t,e,a,l)}function Nl(t,e,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gn(t))gd(e,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var u=e.lastRenderedState,f=n(u,a);if(i.hasEagerState=!0,i.eagerState=f,Dt(f,u))return Dn(t,e,i,0),L===null&&Bn(),!1}catch{}if(a=$f(t,e,i,l),a!==null)return wt(a,t,l),bd(a,e,l),!0}return!1}function mc(t,e,a,l){if(l={lane:2,revertLane:Cc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gn(t)){if(e)throw Error(y(479))}else e=$f(t,a,l,2),e!==null&&wt(e,t,2)}function Gn(t){var e=t.alternate;return t===M||e!==null&&e===M}function gd(t,e){Za=rn=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function bd(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,er(t,a)}}var Fl={readContext:dt,use:Hn,useCallback:F,useContext:F,useEffect:F,useImperativeHandle:F,useLayoutEffect:F,useInsertionEffect:F,useMemo:F,useReducer:F,useRef:F,useState:F,useDebugValue:F,useDeferredValue:F,useTransition:F,useSyncExternalStore:F,useId:F,useHostTransitionStatus:F,useFormState:F,useActionState:F,useOptimistic:F,useMemoCache:F,useCacheRefresh:F};Fl.useEffectEvent=F;var md={readContext:dt,use:Hn,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:ts,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Qi(4194308,4,id.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Qi(4194308,4,t,e)},useInsertionEffect:function(t,e){Qi(4,2,t,e)},useMemo:function(t,e){var a=mt();e=e===void 0?null:e;var l=t();if(da){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=mt();if(a!==void 0){var i=a(e);if(da){De(!0);try{a(e)}finally{De(!1)}}}else i=e;return l.memoizedState=l.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=X1.bind(null,M,t),[l.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:function(t){t=gf(t);var e=t.queue,a=hd.bind(null,M,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:hc,useDeferredValue:function(t,e){var a=mt();return gc(a,t,e)},useTransition:function(){var t=gf(!1);return t=od.bind(null,M,t.queue,!0,!1),mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=M,i=mt();if(_){if(a===void 0)throw Error(y(407));a=a()}else{if(a=e(),L===null)throw Error(y(349));(O&127)!==0||Qr(l,e,a)}i.memoizedState=a;var n={value:a,getSnapshot:e};return i.queue=n,ts(Vr.bind(null,l,n,t),[t]),l.flags|=2048,Ia(9,{destroy:void 0},Zr.bind(null,l,n,a,e),null),a},useId:function(){var t=mt(),e=L.identifierPrefix;if(_){var a=It,l=$t;a=(l&~(1<<32-_t(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=dn++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=H1++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:bc,useFormState:$o,useActionState:$o,useOptimistic:function(t){var e=mt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=mc.bind(null,M,!0,a),a.dispatch=e,[t,e]},useMemoCache:rc,useCacheRefresh:function(){return mt().memoizedState=Y1.bind(null,M)},useEffectEvent:function(t){var e=mt(),a={impl:t};return e.memoizedState=a,function(){if((R&2)!==0)throw Error(y(440));return a.impl.apply(void 0,arguments)}}},yc={readContext:dt,use:Hn,useCallback:ud,useContext:dt,useEffect:pc,useImperativeHandle:nd,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:fd,useReducer:Xi,useRef:td,useState:function(){return Xi(ve)},useDebugValue:hc,useDeferredValue:function(t,e){var a=I();return cd(a,q.memoizedState,t,e)},useTransition:function(){var t=Xi(ve)[0],e=I().memoizedState;return[typeof t=="boolean"?t:ci(t),e]},useSyncExternalStore:Xr,useId:dd,useHostTransitionStatus:bc,useFormState:Io,useActionState:Io,useOptimistic:function(t,e){var a=I();return Fr(a,q,t,e)},useMemoCache:rc,useCacheRefresh:pd};yc.useEffectEvent=ed;var yd={readContext:dt,use:Hn,useCallback:ud,useContext:dt,useEffect:pc,useImperativeHandle:nd,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:fd,useReducer:zu,useRef:td,useState:function(){return zu(ve)},useDebugValue:hc,useDeferredValue:function(t,e){var a=I();return q===null?gc(a,t,e):cd(a,q.memoizedState,t,e)},useTransition:function(){var t=zu(ve)[0],e=I().memoizedState;return[typeof t=="boolean"?t:ci(t),e]},useSyncExternalStore:Xr,useId:dd,useHostTransitionStatus:bc,useFormState:Po,useActionState:Po,useOptimistic:function(t,e){var a=I();return q!==null?Fr(a,q,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rc,useCacheRefresh:pd};yd.useEffectEvent=ed;function Mu(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:V({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var yf={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Bt(),i=qe(l);i.payload=e,a!=null&&(i.callback=a),e=Le(t,i,l),e!==null&&(wt(e,t,l),Bl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Bt(),i=qe(l);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Le(t,i,l),e!==null&&(wt(e,t,l),Bl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Bt(),l=qe(a);l.tag=2,e!=null&&(l.callback=e),e=Le(t,l,a),e!==null&&(wt(e,t,a),Bl(e,t,a))}};function es(t,e,a,l,i,n,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,n,u):e.prototype&&e.prototype.isPureReactComponent?!Ql(a,l)||!Ql(i,n):!0}function as(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&yf.enqueueReplaceState(e,e.state,null)}function pa(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=V({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function vd(t){ln(t)}function xd(t){console.error(t)}function Sd(t){ln(t)}function pn(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function ls(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function vf(t,e,a){return a=qe(a),a.tag=3,a.payload={element:null},a.callback=function(){pn(t,e)},a}function wd(t){return t=qe(t),t.tag=3,t}function Td(t,e,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;t.payload=function(){return i(n)},t.callback=function(){ls(e,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){ls(e,a,l),typeof i!="function"&&(Ye===null?Ye=new Set([this]):Ye.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function Q1(t,e,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&ul(e,a,i,!0),a=Rt.current,a!==null){switch(a.tag){case 31:case 13:return Qt===null?yn():a.alternate===null&&W===0&&(W=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===cn?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Hu(t,l,i)),!1;case 22:return a.flags|=65536,l===cn?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Hu(t,l,i)),!1}throw Error(y(435,a.tag))}return Hu(t,l,i),yn(),!1}if(_)return e=Rt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,l!==uf&&(t=Error(y(422),{cause:l}),Vl(Yt(t,a)))):(l!==uf&&(e=Error(y(423),{cause:l}),Vl(Yt(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,l=Yt(l,a),i=vf(t.stateNode,l,i),Tu(t,i),W!==4&&(W=2)),!1;var n=Error(y(520),{cause:l});if(n=Yt(n,a),Gl===null?Gl=[n]:Gl.push(n),W!==4&&(W=2),e===null)return!0;l=Yt(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=vf(a.stateNode,l,t),Tu(a,t),!1;case 1:if(e=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Ye===null||!Ye.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=wd(i),Td(i,t,a,l),Tu(a,i),!1}a=a.return}while(a!==null);return!1}var vc=Error(y(461)),at=!1;function ot(t,e,a,l){e.child=t===null?Ur(e,null,a,l):ra(e,t.child,a,l)}function is(t,e,a,l,i){a=a.render;var n=e.ref;if("ref"in l){var u={};for(var f in l)f!=="ref"&&(u[f]=l[f])}else u=l;return sa(e),l=fc(t,e,a,u,n,i),f=cc(),t!==null&&!at?(oc(t,e,i),xe(t,e,i)):(_&&f&&Pf(e),e.flags|=1,ot(t,e,l,i),e.child)}function ns(t,e,a,l,i){if(t===null){var n=a.type;return typeof n=="function"&&!If(n)&&n.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=n,zd(t,e,n,l,i)):(t=Li(a.type,null,l,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!xc(t,i)){var u=n.memoizedProps;if(a=a.compare,a=a!==null?a:Ql,a(u,l)&&t.ref===e.ref)return xe(t,e,i)}return e.flags|=1,t=he(n,l),t.ref=e.ref,t.return=e,e.child=t}function zd(t,e,a,l,i){if(t!==null){var n=t.memoizedProps;if(Ql(n,l)&&t.ref===e.ref)if(at=!1,e.pendingProps=l=n,xc(t,i))(t.flags&131072)!==0&&(at=!0);else return e.lanes=t.lanes,xe(t,e,i)}return xf(t,e,a,l,i)}function Md(t,e,a,l){var i=l.children,n=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,t!==null){for(l=e.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,e.child=null;return us(t,e,n,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yi(e,n!==null?n.cachePool:null),n!==null?Jo(e,n):pf(),qr(e);else return l=e.lanes=536870912,us(t,e,n!==null?n.baseLanes|a:a,a,l)}else n!==null?(Yi(e,n.cachePool),Jo(e,n),_e(e),e.memoizedState=null):(t!==null&&Yi(e,null),pf(),_e(e));return ot(t,e,i,a),e.child}function Cl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function us(t,e,a,l,i){var n=ac();return n=n===null?null:{parent:et._currentValue,pool:n},e.memoizedState={baseLanes:a,cachePool:n},t!==null&&Yi(e,null),pf(),qr(e),t!==null&&ul(t,e,l,!0),e.childLanes=i,null}function Zi(t,e){return e=hn({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function fs(t,e,a){return ra(e,t.child,null,a),t=Zi(e,e.pendingProps),t.flags|=2,Ct(e),e.memoizedState=null,t}function Z1(t,e,a){var l=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(_){if(l.mode==="hidden")return t=Zi(e,l),e.lanes=536870912,Cl(null,t);if(hf(e),(t=Z)?(t=m0(t,Xt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ke!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Or(t),a.return=e,e.child=a,rt=e,Z=null)):t=null,t===null)throw Je(e);return e.lanes=536870912,null}return Zi(e,l)}var n=t.memoizedState;if(n!==null){var u=n.dehydrated;if(hf(e),i)if(e.flags&256)e.flags&=-257,e=fs(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(y(558));else if(at||ul(t,e,a,!1),i=(a&t.childLanes)!==0,at||i){if(l=L,l!==null&&(u=ar(l,a),u!==0&&u!==n.retryLane))throw n.retryLane=u,ma(t,u),wt(l,t,u),vc;yn(),e=fs(t,e,a)}else t=n.treeContext,Z=Zt(u.nextSibling),rt=e,_=!0,je=null,Xt=!1,t!==null&&Br(e,t),e=Zi(e,l),e.flags|=4096;return e}return t=he(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Vi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(y(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function xf(t,e,a,l,i){return sa(e),a=fc(t,e,a,l,void 0,i),l=cc(),t!==null&&!at?(oc(t,e,i),xe(t,e,i)):(_&&l&&Pf(e),e.flags|=1,ot(t,e,a,i),e.child)}function cs(t,e,a,l,i,n){return sa(e),e.updateQueue=null,a=Yr(e,l,a,i),Lr(t),l=cc(),t!==null&&!at?(oc(t,e,n),xe(t,e,n)):(_&&l&&Pf(e),e.flags|=1,ot(t,e,a,n),e.child)}function os(t,e,a,l,i){if(sa(e),e.stateNode===null){var n=Ha,u=a.contextType;typeof u=="object"&&u!==null&&(n=dt(u)),n=new a(l,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=yf,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=l,n.state=e.memoizedState,n.refs={},ic(e),u=a.contextType,n.context=typeof u=="object"&&u!==null?dt(u):Ha,n.state=e.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(Mu(e,a,u,l),n.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&yf.enqueueReplaceState(n,n.state,null),Rl(e,l,n,i),Dl(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){n=e.stateNode;var f=e.memoizedProps,c=pa(a,f);n.props=c;var r=n.context,b=a.contextType;u=Ha,typeof b=="object"&&b!==null&&(u=dt(b));var g=a.getDerivedStateFromProps;b=typeof g=="function"||typeof n.getSnapshotBeforeUpdate=="function",f=e.pendingProps!==f,b||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(f||r!==u)&&as(e,n,l,u),ke=!1;var d=e.memoizedState;n.state=d,Rl(e,l,n,i),Dl(),r=e.memoizedState,f||d!==r||ke?(typeof g=="function"&&(Mu(e,a,g,l),r=e.memoizedState),(c=ke||es(e,a,c,l,d,r,u))?(b||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=r),n.props=l,n.state=r,n.context=u,l=c):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{n=e.stateNode,rf(t,e),u=e.memoizedProps,b=pa(a,u),n.props=b,g=e.pendingProps,d=n.context,r=a.contextType,c=Ha,typeof r=="object"&&r!==null&&(c=dt(r)),f=a.getDerivedStateFromProps,(r=typeof f=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==g||d!==c)&&as(e,n,l,c),ke=!1,d=e.memoizedState,n.state=d,Rl(e,l,n,i),Dl();var h=e.memoizedState;u!==g||d!==h||ke||t!==null&&t.dependencies!==null&&fn(t.dependencies)?(typeof f=="function"&&(Mu(e,a,f,l),h=e.memoizedState),(b=ke||es(e,a,b,l,d,h,c)||t!==null&&t.dependencies!==null&&fn(t.dependencies))?(r||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,h,c),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,h,c)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=h),n.props=l,n.state=h,n.context=c,l=b):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),l=!1)}return n=l,Vi(t,e),l=(e.flags&128)!==0,n||l?(n=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&l?(e.child=ra(e,t.child,null,i),e.child=ra(e,null,a,i)):ot(t,e,a,i),e.memoizedState=n.state,t=e.child):t=xe(t,e,i),t}function ss(t,e,a,l){return oa(),e.flags|=256,ot(t,e,a,l),e.child}var Cu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eu(t){return{baseLanes:t,cachePool:Rr()}}function ku(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=kt),t}function Cd(t,e,a){var l=e.pendingProps,i=!1,n=(e.flags&128)!==0,u;if((u=n)||(u=t!==null&&t.memoizedState===null?!1:($.current&2)!==0),u&&(i=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(_){if(i?Oe(e):_e(e),(t=Z)?(t=m0(t,Xt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ke!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=Or(t),a.return=e,e.child=a,rt=e,Z=null)):t=null,t===null)throw Je(e);return Rf(t)?e.lanes=32:e.lanes=536870912,null}var f=l.children;return l=l.fallback,i?(_e(e),i=e.mode,f=hn({mode:"hidden",children:f},i),l=na(l,i,a,null),f.return=e,l.return=e,f.sibling=l,e.child=f,l=e.child,l.memoizedState=Eu(a),l.childLanes=ku(t,u,a),e.memoizedState=Cu,Cl(null,l)):(Oe(e),Sf(e,f))}var c=t.memoizedState;if(c!==null&&(f=c.dehydrated,f!==null)){if(n)e.flags&256?(Oe(e),e.flags&=-257,e=Au(t,e,a)):e.memoizedState!==null?(_e(e),e.child=t.child,e.flags|=128,e=null):(_e(e),f=l.fallback,i=e.mode,l=hn({mode:"visible",children:l.children},i),f=na(f,i,a,null),f.flags|=2,l.return=e,f.return=e,l.sibling=f,e.child=l,ra(e,t.child,null,a),l=e.child,l.memoizedState=Eu(a),l.childLanes=ku(t,u,a),e.memoizedState=Cu,e=Cl(null,l));else if(Oe(e),Rf(f)){if(u=f.nextSibling&&f.nextSibling.dataset,u)var r=u.dgst;u=r,l=Error(y(419)),l.stack="",l.digest=u,Vl({value:l,source:null,stack:null}),e=Au(t,e,a)}else if(at||ul(t,e,a,!1),u=(a&t.childLanes)!==0,at||u){if(u=L,u!==null&&(l=ar(u,a),l!==0&&l!==c.retryLane))throw c.retryLane=l,ma(t,l),wt(u,t,l),vc;Df(f)||yn(),e=Au(t,e,a)}else Df(f)?(e.flags|=192,e.child=t.child,e=null):(t=c.treeContext,Z=Zt(f.nextSibling),rt=e,_=!0,je=null,Xt=!1,t!==null&&Br(e,t),e=Sf(e,l.children),e.flags|=4096);return e}return i?(_e(e),f=l.fallback,i=e.mode,c=t.child,r=c.sibling,l=he(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,r!==null?f=he(r,f):(f=na(f,i,a,null),f.flags|=2),f.return=e,l.return=e,l.sibling=f,e.child=l,Cl(null,l),l=e.child,f=t.child.memoizedState,f===null?f=Eu(a):(i=f.cachePool,i!==null?(c=et._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Rr(),f={baseLanes:f.baseLanes|a,cachePool:i}),l.memoizedState=f,l.childLanes=ku(t,u,a),e.memoizedState=Cu,Cl(t.child,l)):(Oe(e),a=t.child,t=a.sibling,a=he(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=a,e.memoizedState=null,a)}function Sf(t,e){return e=hn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function hn(t,e){return t=Et(22,t,null,e),t.lanes=0,t}function Au(t,e,a){return ra(e,t.child,null,a),t=Sf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rs(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),cf(t.return,e,a)}function Ou(t,e,a,l,i,n){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:n}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=i,u.treeForkCount=n)}function Ed(t,e,a){var l=e.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var u=$.current,f=(u&2)!==0;if(f?(u=u&1|2,e.flags|=128):u&=1,Y($,u),ot(t,e,l,a),l=_?Zl:0,!f&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rs(t,a,e);else if(t.tag===19)rs(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&sn(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Ou(e,!1,i,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sn(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Ou(e,!0,a,null,n,l);break;case"together":Ou(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function xe(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),We|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ul(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,a=he(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=he(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function xc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&fn(t)))}function V1(t,e,a){switch(e.tag){case 3:Pi(e,e.stateNode.containerInfo),Ae(e,et,t.memoizedState.cache),oa();break;case 27:case 5:Ju(e);break;case 4:Pi(e,e.stateNode.containerInfo);break;case 10:Ae(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,hf(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Oe(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Cd(t,e,a):(Oe(e),t=xe(t,e,a),t!==null?t.sibling:null);Oe(e);break;case 19:var i=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(ul(t,e,a,!1),l=(a&e.childLanes)!==0),i){if(l)return Ed(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y($,$.current),l)break;return null;case 22:return e.lanes=0,Md(t,e,a,e.pendingProps);case 24:Ae(e,et,t.memoizedState.cache)}return xe(t,e,a)}function kd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)at=!0;else{if(!xc(t,a)&&(e.flags&128)===0)return at=!1,V1(t,e,a);at=(t.flags&131072)!==0}else at=!1,_&&(e.flags&1048576)!==0&&_r(e,Zl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=aa(e.elementType),e.type=t,typeof t=="function")If(t)?(l=pa(t,l),e.tag=1,e=os(null,e,t,l,a)):(e.tag=0,e=xf(null,e,t,l,a));else{if(t!=null){var i=t.$$typeof;if(i===Gf){e.tag=11,e=is(null,e,t,l,a);break t}else if(i===jf){e.tag=14,e=ns(null,e,t,l,a);break t}}throw e=Vu(t)||t,Error(y(306,e,""))}}return e;case 0:return xf(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,i=pa(l,e.pendingProps),os(t,e,l,i,a);case 3:t:{if(Pi(e,e.stateNode.containerInfo),t===null)throw Error(y(387));l=e.pendingProps;var n=e.memoizedState;i=n.element,rf(t,e),Rl(e,l,null,a);var u=e.memoizedState;if(l=u.cache,Ae(e,et,l),l!==n.cache&&of(e,[et],a,!0),Dl(),l=u.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=ss(t,e,l,a);break t}else if(l!==i){i=Yt(Error(y(424)),e),Vl(i),e=ss(t,e,l,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Z=Zt(t.firstChild),rt=e,_=!0,je=null,Xt=!0,a=Ur(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oa(),l===i){e=xe(t,e,a);break t}ot(t,e,l,a)}e=e.child}return e;case 26:return Vi(t,e),t===null?(a=Ds(e.type,null,e.pendingProps,null))?e.memoizedState=a:_||(a=e.type,t=e.pendingProps,l=wn(Ge.current).createElement(a),l[st]=e,l[Tt]=t,pt(l,a,t),ft(l),e.stateNode=l):e.memoizedState=Ds(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ju(e),t===null&&_&&(l=e.stateNode=y0(e.type,e.pendingProps,Ge.current),rt=e,Xt=!0,i=Z,Ie(e.type)?(Nf=i,Z=Zt(l.firstChild)):Z=i),ot(t,e,e.pendingProps.children,a),Vi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&_&&((i=l=Z)&&(l=xh(l,e.type,e.pendingProps,Xt),l!==null?(e.stateNode=l,rt=e,Z=Zt(l.firstChild),Xt=!1,i=!0):i=!1),i||Je(e)),Ju(e),i=e.type,n=e.pendingProps,u=t!==null?t.memoizedProps:null,l=n.children,_f(i,n)?l=null:u!==null&&_f(i,u)&&(e.flags|=32),e.memoizedState!==null&&(i=fc(t,e,U1,null,null,a),Il._currentValue=i),Vi(t,e),ot(t,e,l,a),e.child;case 6:return t===null&&_&&((t=a=Z)&&(a=Sh(a,e.pendingProps,Xt),a!==null?(e.stateNode=a,rt=e,Z=null,t=!0):t=!1),t||Je(e)),null;case 13:return Cd(t,e,a);case 4:return Pi(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=ra(e,null,l,a):ot(t,e,l,a),e.child;case 11:return is(t,e,e.type,e.pendingProps,a);case 7:return ot(t,e,e.pendingProps,a),e.child;case 8:return ot(t,e,e.pendingProps.children,a),e.child;case 12:return ot(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,Ae(e,e.type,l.value),ot(t,e,l.children,a),e.child;case 9:return i=e.type._context,l=e.pendingProps.children,sa(e),i=dt(i),l=l(i),e.flags|=1,ot(t,e,l,a),e.child;case 14:return ns(t,e,e.type,e.pendingProps,a);case 15:return zd(t,e,e.type,e.pendingProps,a);case 19:return Ed(t,e,a);case 31:return Z1(t,e,a);case 22:return Md(t,e,a,e.pendingProps);case 24:return sa(e),l=dt(et),t===null?(i=ac(),i===null&&(i=L,n=ec(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),e.memoizedState={parent:l,cache:i},ic(e),Ae(e,et,i)):((t.lanes&a)!==0&&(rf(t,e),Rl(e,null,null,a),Dl()),i=t.memoizedState,n=e.memoizedState,i.parent!==l?(i={parent:l,cache:l},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Ae(e,et,l)):(l=n.cache,Ae(e,et,l),l!==i.cache&&of(e,[et],a,!0))),ot(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(y(156,e.tag))}function ne(t){t.flags|=4}function _u(t,e,a,l,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Id())t.flags|=8192;else throw fa=cn,lc}else t.flags&=-16777217}function ds(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!S0(e))if(Id())t.flags|=8192;else throw fa=cn,lc}function Oi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ps():536870912,t.lanes|=e,Pa|=e)}function vl(t,e){if(!_)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Q(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function K1(t,e,a){var l=e.pendingProps;switch(tc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Q(e),null;case 1:return Q(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ge(et),Ka(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(za(e)?ne(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,wu())),Q(e),null;case 26:var i=e.type,n=e.memoizedState;return t===null?(ne(e),n!==null?(Q(e),ds(e,n)):(Q(e),_u(e,i,null,l,a))):n?n!==t.memoizedState?(ne(e),Q(e),ds(e,n)):(Q(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&ne(e),Q(e),_u(e,i,t,l,a)),null;case 27:if(tn(e),a=Ge.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ne(e);else{if(!l){if(e.stateNode===null)throw Error(y(166));return Q(e),null}t=te.current,za(e)?Lo(e,t):(t=y0(i,l,a),e.stateNode=t,ne(e))}return Q(e),null;case 5:if(tn(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ne(e);else{if(!l){if(e.stateNode===null)throw Error(y(166));return Q(e),null}if(n=te.current,za(e))Lo(e,n);else{var u=wn(Ge.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?u.createElement(i,{is:l.is}):u.createElement(i)}}n[st]=e,n[Tt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=n;t:switch(pt(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ne(e)}}return Q(e),_u(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&ne(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(y(166));if(t=Ge.current,za(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,i=rt,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}t[st]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||h0(t.nodeValue,a)),t||Je(e,!0)}else t=wn(t).createTextNode(l),t[st]=e,e.stateNode=t}return Q(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=za(e),a!==null){if(t===null){if(!l)throw Error(y(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[st]=e}else oa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Q(e),t=!1}else a=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Ct(e),e):(Ct(e),null);if((e.flags&128)!==0)throw Error(y(558))}return Q(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=za(e),l!==null&&l.dehydrated!==null){if(t===null){if(!i)throw Error(y(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[st]=e}else oa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Q(e),i=!1}else i=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ct(e),e):(Ct(e),null)}return Ct(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Oi(e,e.updateQueue),Q(e),null);case 4:return Ka(),t===null&&Ec(e.stateNode.containerInfo),Q(e),null;case 10:return ge(e.type),Q(e),null;case 19:if(ct($),l=e.memoizedState,l===null)return Q(e),null;if(i=(e.flags&128)!==0,n=l.rendering,n===null)if(i)vl(l,!1);else{if(W!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=sn(t),n!==null){for(e.flags|=128,vl(l,!1),t=n.updateQueue,e.updateQueue=t,Oi(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Ar(a,t),a=a.sibling;return Y($,$.current&1|2),_&&oe(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&At()>bn&&(e.flags|=128,i=!0,vl(l,!1),e.lanes=4194304)}else{if(!i)if(t=sn(n),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Oi(e,t),vl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!_)return Q(e),null}else 2*At()-l.renderingStartTime>bn&&a!==536870912&&(e.flags|=128,i=!0,vl(l,!1),e.lanes=4194304);l.isBackwards?(n.sibling=e.child,e.child=n):(t=l.last,t!==null?t.sibling=n:e.child=n,l.last=n)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=At(),t.sibling=null,a=$.current,Y($,i?a&1|2:a&1),_&&oe(e,l.treeForkCount),t):(Q(e),null);case 22:case 23:return Ct(e),nc(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Q(e),e.subtreeFlags&6&&(e.flags|=8192)):Q(e),a=e.updateQueue,a!==null&&Oi(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&ct(ua),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ge(et),Q(e),null;case 25:return null;case 30:return null}throw Error(y(156,e.tag))}function J1(t,e){switch(tc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ge(et),Ka(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return tn(e),null;case 31:if(e.memoizedState!==null){if(Ct(e),e.alternate===null)throw Error(y(340));oa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ct(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));oa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct($),null;case 4:return Ka(),null;case 10:return ge(e.type),null;case 22:case 23:return Ct(e),nc(),t!==null&&ct(ua),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ge(et),null;case 25:return null;default:return null}}function Ad(t,e){switch(tc(e),e.tag){case 3:ge(et),Ka();break;case 26:case 27:case 5:tn(e);break;case 4:Ka();break;case 31:e.memoizedState!==null&&Ct(e);break;case 13:Ct(e);break;case 19:ct($);break;case 10:ge(e.type);break;case 22:case 23:Ct(e),nc(),t!==null&&ct(ua);break;case 24:ge(et)}}function oi(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){l=void 0;var n=a.create,u=a.inst;l=n(),u.destroy=l}a=a.next}while(a!==i)}}catch(f){U(e,e.return,f)}}function Fe(t,e,a){try{var l=e.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&t)===t){var u=l.inst,f=u.destroy;if(f!==void 0){u.destroy=void 0,i=e;var c=a,r=f;try{r()}catch(b){U(i,c,b)}}}l=l.next}while(l!==n)}}catch(b){U(e,e.return,b)}}function Od(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{jr(e,a)}catch(l){U(t,t.return,l)}}}function _d(t,e,a){a.props=pa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){U(t,e,l)}}function Hl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(i){U(t,e,i)}}function Pt(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){U(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){U(t,e,i)}else a.current=null}function Bd(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){U(t,t.return,i)}}function Bu(t,e,a){try{var l=t.stateNode;hh(l,t.type,a,e),l[Tt]=e}catch(i){U(t,t.return,i)}}function Dd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ie(t.type)||t.tag===4}function Du(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Dd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ie(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=de));else if(l!==4&&(l===27&&Ie(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(wf(t,e,a),t=t.sibling;t!==null;)wf(t,e,a),t=t.sibling}function gn(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Ie(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gn(t,e,a),t=t.sibling;t!==null;)gn(t,e,a),t=t.sibling}function Rd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);pt(e,l,a),e[st]=t,e[Tt]=a}catch(n){U(t,t.return,n)}}var se=!1,tt=!1,Ru=!1,ps=typeof WeakSet=="function"?WeakSet:Set,ut=null;function F1(t,e){if(t=t.containerInfo,Af=Cn,t=Sr(t),Ff(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break t}var u=0,f=-1,c=-1,r=0,b=0,g=t,d=null;e:for(;;){for(var h;g!==a||i!==0&&g.nodeType!==3||(f=u+i),g!==n||l!==0&&g.nodeType!==3||(c=u+l),g.nodeType===3&&(u+=g.nodeValue.length),(h=g.firstChild)!==null;)d=g,g=h;for(;;){if(g===t)break e;if(d===a&&++r===i&&(f=u),d===n&&++b===l&&(c=u),(h=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=h}a=f===-1||c===-1?null:{start:f,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},Cn=!1,ut=e;ut!==null;)if(e=ut,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ut=t;else for(;ut!==null;){switch(e=ut,n=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,a=e,i=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var v=pa(a.type,i);t=l.getSnapshotBeforeUpdate(v,n),l.__reactInternalSnapshotBeforeUpdate=t}catch(w){U(a,a.return,w)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Bf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(y(163))}if(t=e.sibling,t!==null){t.return=e.return,ut=t;break}ut=e.return}}function Nd(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:fe(t,a),l&4&&oi(5,a);break;case 1:if(fe(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(u){U(a,a.return,u)}else{var i=pa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){U(a,a.return,u)}}l&64&&Od(a),l&512&&Hl(a,a.return);break;case 3:if(fe(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{jr(t,e)}catch(u){U(a,a.return,u)}}break;case 27:e===null&&l&4&&Rd(a);case 26:case 5:fe(t,a),e===null&&l&4&&Bd(a),l&512&&Hl(a,a.return);break;case 12:fe(t,a);break;case 31:fe(t,a),l&4&&Gd(t,a);break;case 13:fe(t,a),l&4&&jd(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ih.bind(null,a),wh(t,a))));break;case 22:if(l=a.memoizedState!==null||se,!l){e=e!==null&&e.memoizedState!==null||tt,i=se;var n=tt;se=l,(tt=e)&&!n?ce(t,a,(a.subtreeFlags&8772)!==0):fe(t,a),se=i,tt=n}break;case 30:break;default:fe(t,a)}}function Hd(t){var e=t.alternate;e!==null&&(t.alternate=null,Hd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Xf(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var J=null,xt=!1;function ue(t,e,a){for(a=a.child;a!==null;)Ud(t,e,a),a=a.sibling}function Ud(t,e,a){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(ai,a)}catch{}switch(a.tag){case 26:tt||Pt(a,e),ue(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tt||Pt(a,e);var l=J,i=xt;Ie(a.type)&&(J=a.stateNode,xt=!1),ue(t,e,a),ql(a.stateNode),J=l,xt=i;break;case 5:tt||Pt(a,e);case 6:if(l=J,i=xt,J=null,ue(t,e,a),J=l,xt=i,J!==null)if(xt)try{(J.nodeType===9?J.body:J.nodeName==="HTML"?J.ownerDocument.body:J).removeChild(a.stateNode)}catch(n){U(a,e,n)}else try{J.removeChild(a.stateNode)}catch(n){U(a,e,n)}break;case 18:J!==null&&(xt?(t=J,ks(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ll(t)):ks(J,a.stateNode));break;case 4:l=J,i=xt,J=a.stateNode.containerInfo,xt=!0,ue(t,e,a),J=l,xt=i;break;case 0:case 11:case 14:case 15:Fe(2,a,e),tt||Fe(4,a,e),ue(t,e,a);break;case 1:tt||(Pt(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&_d(a,e,l)),ue(t,e,a);break;case 21:ue(t,e,a);break;case 22:tt=(l=tt)||a.memoizedState!==null,ue(t,e,a),tt=l;break;default:ue(t,e,a)}}function Gd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ll(t)}catch(a){U(e,e.return,a)}}}function jd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ll(t)}catch(a){U(e,e.return,a)}}function W1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ps),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ps),e;default:throw Error(y(435,t.tag))}}function _i(t,e){var a=W1(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var i=nh.bind(null,t,l);l.then(i,i)}})}function yt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],n=t,u=e,f=u;t:for(;f!==null;){switch(f.tag){case 27:if(Ie(f.type)){J=f.stateNode,xt=!1;break t}break;case 5:J=f.stateNode,xt=!1;break t;case 3:case 4:J=f.stateNode.containerInfo,xt=!0;break t}f=f.return}if(J===null)throw Error(y(160));Ud(n,u,i),J=null,xt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)qd(e,t),e=e.sibling}var Jt=null;function qd(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yt(e,t),vt(t),l&4&&(Fe(3,t,t.return),oi(3,t),Fe(5,t,t.return));break;case 1:yt(e,t),vt(t),l&512&&(tt||a===null||Pt(a,a.return)),l&64&&se&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Jt;if(yt(e,t),vt(t),l&512&&(tt||a===null||Pt(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[ni]||n[st]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),pt(n,l,a),n[st]=t,ft(n),l=n;break t;case"link":var u=Ns("link","href",i).get(l+(a.href||""));if(u){for(var f=0;f<u.length;f++)if(n=u[f],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(f,1);break e}}n=i.createElement(l),pt(n,l,a),i.head.appendChild(n);break;case"meta":if(u=Ns("meta","content",i).get(l+(a.content||""))){for(f=0;f<u.length;f++)if(n=u[f],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(f,1);break e}}n=i.createElement(l),pt(n,l,a),i.head.appendChild(n);break;default:throw Error(y(468,l))}n[st]=t,ft(n),l=n}t.stateNode=l}else Hs(i,t.type,t.stateNode);else t.stateNode=Rs(i,l,t.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?Hs(i,t.type,t.stateNode):Rs(i,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Bu(t,t.memoizedProps,a.memoizedProps)}break;case 27:yt(e,t),vt(t),l&512&&(tt||a===null||Pt(a,a.return)),a!==null&&l&4&&Bu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(yt(e,t),vt(t),l&512&&(tt||a===null||Pt(a,a.return)),t.flags&32){i=t.stateNode;try{Fa(i,"")}catch(v){U(t,t.return,v)}}l&4&&t.stateNode!=null&&(i=t.memoizedProps,Bu(t,i,a!==null?a.memoizedProps:i)),l&1024&&(Ru=!0);break;case 6:if(yt(e,t),vt(t),l&4){if(t.stateNode===null)throw Error(y(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(v){U(t,t.return,v)}}break;case 3:if(Fi=null,i=Jt,Jt=Tn(e.containerInfo),yt(e,t),Jt=i,vt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ll(e.containerInfo)}catch(v){U(t,t.return,v)}Ru&&(Ru=!1,Ld(t));break;case 4:l=Jt,Jt=Tn(t.stateNode.containerInfo),yt(e,t),vt(t),Jt=l;break;case 12:yt(e,t),vt(t);break;case 31:yt(e,t),vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_i(t,l)));break;case 13:yt(e,t),vt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jn=At()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_i(t,l)));break;case 22:i=t.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,r=se,b=tt;if(se=r||i,tt=b||c,yt(e,t),tt=b,se=r,vt(t),l&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||c||se||tt||la(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){c=a=e;try{if(n=c.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{f=c.stateNode;var g=c.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null;f.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(v){U(c,c.return,v)}}}else if(e.tag===6){if(a===null){c=e;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(v){U(c,c.return,v)}}}else if(e.tag===18){if(a===null){c=e;try{var h=c.stateNode;i?As(h,!0):As(c.stateNode,!1)}catch(v){U(c,c.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,_i(t,a))));break;case 19:yt(e,t),vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,_i(t,l)));break;case 30:break;case 21:break;default:yt(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Dd(l)){a=l;break}l=l.return}if(a==null)throw Error(y(160));switch(a.tag){case 27:var i=a.stateNode,n=Du(t);gn(t,n,i);break;case 5:var u=a.stateNode;a.flags&32&&(Fa(u,""),a.flags&=-33);var f=Du(t);gn(t,f,u);break;case 3:case 4:var c=a.stateNode.containerInfo,r=Du(t);wf(t,r,c);break;default:throw Error(y(161))}}catch(b){U(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ld(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ld(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function fe(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Nd(t,e.alternate,e),e=e.sibling}function la(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Fe(4,e,e.return),la(e);break;case 1:Pt(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&_d(e,e.return,a),la(e);break;case 27:ql(e.stateNode);case 26:case 5:Pt(e,e.return),la(e);break;case 22:e.memoizedState===null&&la(e);break;case 30:la(e);break;default:la(e)}t=t.sibling}}function ce(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,i=t,n=e,u=n.flags;switch(n.tag){case 0:case 11:case 15:ce(i,n,a),oi(4,n);break;case 1:if(ce(i,n,a),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(r){U(l,l.return,r)}if(l=n,i=l.updateQueue,i!==null){var f=l.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Gr(c[i],f)}catch(r){U(l,l.return,r)}}a&&u&64&&Od(n),Hl(n,n.return);break;case 27:Rd(n);case 26:case 5:ce(i,n,a),a&&l===null&&u&4&&Bd(n),Hl(n,n.return);break;case 12:ce(i,n,a);break;case 31:ce(i,n,a),a&&u&4&&Gd(i,n);break;case 13:ce(i,n,a),a&&u&4&&jd(i,n);break;case 22:n.memoizedState===null&&ce(i,n,a),Hl(n,n.return);break;case 30:break;default:ce(i,n,a)}e=e.sibling}}function Sc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fi(a))}function wc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&fi(t))}function Kt(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yd(t,e,a,l),e=e.sibling}function Yd(t,e,a,l){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Kt(t,e,a,l),i&2048&&oi(9,e);break;case 1:Kt(t,e,a,l);break;case 3:Kt(t,e,a,l),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&fi(t)));break;case 12:if(i&2048){Kt(t,e,a,l),t=e.stateNode;try{var n=e.memoizedProps,u=n.id,f=n.onPostCommit;typeof f=="function"&&f(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){U(e,e.return,c)}}else Kt(t,e,a,l);break;case 31:Kt(t,e,a,l);break;case 13:Kt(t,e,a,l);break;case 23:break;case 22:n=e.stateNode,u=e.alternate,e.memoizedState!==null?n._visibility&2?Kt(t,e,a,l):Ul(t,e):n._visibility&2?Kt(t,e,a,l):(n._visibility|=2,Ca(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Sc(u,e);break;case 24:Kt(t,e,a,l),i&2048&&wc(e.alternate,e);break;default:Kt(t,e,a,l)}}function Ca(t,e,a,l,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var n=t,u=e,f=a,c=l,r=u.flags;switch(u.tag){case 0:case 11:case 15:Ca(n,u,f,c,i),oi(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?Ca(n,u,f,c,i):Ul(n,u):(b._visibility|=2,Ca(n,u,f,c,i)),i&&r&2048&&Sc(u.alternate,u);break;case 24:Ca(n,u,f,c,i),i&&r&2048&&wc(u.alternate,u);break;default:Ca(n,u,f,c,i)}e=e.sibling}}function Ul(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,i=l.flags;switch(l.tag){case 22:Ul(a,l),i&2048&&Sc(l.alternate,l);break;case 24:Ul(a,l),i&2048&&wc(l.alternate,l);break;default:Ul(a,l)}e=e.sibling}}var El=8192;function Ma(t,e,a){if(t.subtreeFlags&El)for(t=t.child;t!==null;)Xd(t,e,a),t=t.sibling}function Xd(t,e,a){switch(t.tag){case 26:Ma(t,e,a),t.flags&El&&t.memoizedState!==null&&Rh(a,Jt,t.memoizedState,t.memoizedProps);break;case 5:Ma(t,e,a);break;case 3:case 4:var l=Jt;Jt=Tn(t.stateNode.containerInfo),Ma(t,e,a),Jt=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=El,El=16777216,Ma(t,e,a),El=l):Ma(t,e,a));break;default:Ma(t,e,a)}}function Qd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function xl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];ut=l,Vd(l,t)}Qd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zd(t),t=t.sibling}function Zd(t){switch(t.tag){case 0:case 11:case 15:xl(t),t.flags&2048&&Fe(9,t,t.return);break;case 3:xl(t);break;case 12:xl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ki(t)):xl(t);break;default:xl(t)}}function Ki(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];ut=l,Vd(l,t)}Qd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Fe(8,e,e.return),Ki(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Ki(e));break;default:Ki(e)}t=t.sibling}}function Vd(t,e){for(;ut!==null;){var a=ut;switch(a.tag){case 0:case 11:case 15:Fe(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ut=l;else t:for(a=t;ut!==null;){l=ut;var i=l.sibling,n=l.return;if(Hd(l),l===a){ut=null;break t}if(i!==null){i.return=n,ut=i;break t}ut=n}}}var $1={getCacheForType:function(t){var e=dt(et),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return dt(et).controller.signal}},I1=typeof WeakMap=="function"?WeakMap:Map,R=0,L=null,k=null,O=0,H=0,Mt=null,Ne=!1,cl=!1,Tc=!1,Se=0,W=0,We=0,ca=0,zc=0,kt=0,Pa=0,Gl=null,St=null,Tf=!1,jn=0,Kd=0,bn=1/0,mn=null,Ye=null,it=0,Xe=null,tl=null,be=0,zf=0,Mf=null,Jd=null,jl=0,Cf=null;function Bt(){return(R&2)!==0&&O!==0?O&-O:T.T!==null?Cc():lr()}function Fd(){if(kt===0)if((O&536870912)===0||_){var t=Si;Si<<=1,(Si&3932160)===0&&(Si=262144),kt=t}else kt=536870912;return t=Rt.current,t!==null&&(t.flags|=32),kt}function wt(t,e,a){(t===L&&(H===2||H===9)||t.cancelPendingCommit!==null)&&(el(t,0),He(t,O,kt,!1)),ii(t,a),((R&2)===0||t!==L)&&(t===L&&((R&2)===0&&(ca|=a),W===4&&He(t,O,kt,!1)),ae(t))}function Wd(t,e,a){if((R&6)!==0)throw Error(y(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||li(t,e),i=l?eh(t,e):Nu(t,e,!0),n=l;do{if(i===0){cl&&!l&&He(t,e,0,!1);break}else{if(a=t.current.alternate,n&&!P1(a)){i=Nu(t,e,!1),n=!1;continue}if(i===2){if(n=e,t.errorRecoveryDisabledLanes&n)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var f=t;i=Gl;var c=f.current.memoizedState.isDehydrated;if(c&&(el(f,u).flags|=256),u=Nu(f,u,!1),u!==2){if(Tc&&!c){f.errorRecoveryDisabledLanes|=n,ca|=n,i=4;break t}n=St,St=i,n!==null&&(St===null?St=n:St.push.apply(St,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){el(t,0),He(t,e,0,!0);break}t:{switch(l=t,n=i,n){case 0:case 1:throw Error(y(345));case 4:if((e&4194048)!==e)break;case 6:He(l,e,kt,!Ne);break t;case 2:St=null;break;case 3:case 5:break;default:throw Error(y(329))}if((e&62914560)===e&&(i=jn+300-At(),10<i)){if(He(l,e,kt,!Ne),kn(l,0,!0)!==0)break t;be=e,l.timeoutHandle=b0(hs.bind(null,l,a,St,mn,Tf,e,kt,ca,Pa,Ne,n,"Throttled",-0,0),i);break t}hs(l,a,St,mn,Tf,e,kt,ca,Pa,Ne,n,null,-0,0)}}break}while(!0);ae(t)}function hs(t,e,a,l,i,n,u,f,c,r,b,g,d,h){if(t.timeoutHandle=-1,g=e.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:de},Xd(e,n,g);var v=(n&62914560)===n?jn-At():(n&4194048)===n?Kd-At():0;if(v=Nh(g,v),v!==null){be=n,t.cancelPendingCommit=v(bs.bind(null,t,e,n,a,l,i,u,f,c,b,g,null,d,h)),He(t,n,u,!r);return}}bs(t,e,n,a,l,i,u,f,c)}function P1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],n=i.getSnapshot;i=i.value;try{if(!Dt(n(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function He(t,e,a,l){e&=~zc,e&=~ca,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var i=e;0<i;){var n=31-_t(i),u=1<<n;l[n]=-1,i&=~u}a!==0&&tr(t,a,e)}function qn(){return(R&6)===0?(si(0,!1),!1):!0}function Mc(){if(k!==null){if(H===0)var t=k.return;else t=k,pe=ya=null,sc(t),Qa=null,Kl=0,t=k;for(;t!==null;)Ad(t.alternate,t),t=t.return;k=null}}function el(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,mh(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),be=0,Mc(),L=t,k=a=he(t.current,null),O=e,H=0,Mt=null,Ne=!1,cl=li(t,e),Tc=!1,Pa=kt=zc=ca=We=W=0,St=Gl=null,Tf=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var i=31-_t(l),n=1<<i;e|=t[i],l&=~n}return Se=e,Bn(),a}function $d(t,e){M=null,T.H=Fl,e===fl||e===Rn?(e=Vo(),H=3):e===lc?(e=Vo(),H=4):H=e===vc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Mt=e,k===null&&(W=1,pn(t,Yt(e,t.current)))}function Id(){var t=Rt.current;return t===null?!0:(O&4194048)===O?Qt===null:(O&62914560)===O||(O&536870912)!==0?t===Qt:!1}function Pd(){var t=T.H;return T.H=Fl,t===null?Fl:t}function t0(){var t=T.A;return T.A=$1,t}function yn(){W=4,Ne||(O&4194048)!==O&&Rt.current!==null||(cl=!0),(We&134217727)===0&&(ca&134217727)===0||L===null||He(L,O,kt,!1)}function Nu(t,e,a){var l=R;R|=2;var i=Pd(),n=t0();(L!==t||O!==e)&&(mn=null,el(t,e)),e=!1;var u=W;t:do try{if(H!==0&&k!==null){var f=k,c=Mt;switch(H){case 8:Mc(),u=6;break t;case 3:case 2:case 9:case 6:Rt.current===null&&(e=!0);var r=H;if(H=0,Mt=null,ja(t,f,c,r),a&&cl){u=0;break t}break;default:r=H,H=0,Mt=null,ja(t,f,c,r)}}th(),u=W;break}catch(b){$d(t,b)}while(!0);return e&&t.shellSuspendCounter++,pe=ya=null,R=l,T.H=i,T.A=n,k===null&&(L=null,O=0,Bn()),u}function th(){for(;k!==null;)e0(k)}function eh(t,e){var a=R;R|=2;var l=Pd(),i=t0();L!==t||O!==e?(mn=null,bn=At()+500,el(t,e)):cl=li(t,e);t:do try{if(H!==0&&k!==null){e=k;var n=Mt;e:switch(H){case 1:H=0,Mt=null,ja(t,e,n,1);break;case 2:case 9:if(Zo(n)){H=0,Mt=null,gs(e);break}e=function(){H!==2&&H!==9||L!==t||(H=7),ae(t)},n.then(e,e);break t;case 3:H=7;break t;case 4:H=5;break t;case 7:Zo(n)?(H=0,Mt=null,gs(e)):(H=0,Mt=null,ja(t,e,n,7));break;case 5:var u=null;switch(k.tag){case 26:u=k.memoizedState;case 5:case 27:var f=k;if(u?S0(u):f.stateNode.complete){H=0,Mt=null;var c=f.sibling;if(c!==null)k=c;else{var r=f.return;r!==null?(k=r,Ln(r)):k=null}break e}}H=0,Mt=null,ja(t,e,n,5);break;case 6:H=0,Mt=null,ja(t,e,n,6);break;case 8:Mc(),W=6;break t;default:throw Error(y(462))}}ah();break}catch(b){$d(t,b)}while(!0);return pe=ya=null,T.H=l,T.A=i,R=a,k!==null?0:(L=null,O=0,Bn(),W)}function ah(){for(;k!==null&&!Mp();)e0(k)}function e0(t){var e=kd(t.alternate,t,Se);t.memoizedProps=t.pendingProps,e===null?Ln(t):k=e}function gs(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=cs(a,e,e.pendingProps,e.type,void 0,O);break;case 11:e=cs(a,e,e.pendingProps,e.type.render,e.ref,O);break;case 5:sc(e);default:Ad(a,e),e=k=Ar(e,Se),e=kd(a,e,Se)}t.memoizedProps=t.pendingProps,e===null?Ln(t):k=e}function ja(t,e,a,l){pe=ya=null,sc(e),Qa=null,Kl=0;var i=e.return;try{if(Q1(t,i,e,a,O)){W=1,pn(t,Yt(a,t.current)),k=null;return}}catch(n){if(i!==null)throw k=i,n;W=1,pn(t,Yt(a,t.current)),k=null;return}e.flags&32768?(_||l===1?t=!0:cl||(O&536870912)!==0?t=!1:(Ne=t=!0,(l===2||l===9||l===3||l===6)&&(l=Rt.current,l!==null&&l.tag===13&&(l.flags|=16384))),a0(e,t)):Ln(e)}function Ln(t){var e=t;do{if((e.flags&32768)!==0){a0(e,Ne);return}t=e.return;var a=K1(e.alternate,e,Se);if(a!==null){k=a;return}if(e=e.sibling,e!==null){k=e;return}k=e=t}while(e!==null);W===0&&(W=5)}function a0(t,e){do{var a=J1(t.alternate,t);if(a!==null){a.flags&=32767,k=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){k=t;return}k=t=a}while(t!==null);W=6,k=null}function bs(t,e,a,l,i,n,u,f,c){t.cancelPendingCommit=null;do Yn();while(it!==0);if((R&6)!==0)throw Error(y(327));if(e!==null){if(e===t.current)throw Error(y(177));if(n=e.lanes|e.childLanes,n|=Wf,Np(t,a,n,u,f,c),t===L&&(k=L=null,O=0),tl=e,Xe=t,be=a,zf=n,Mf=i,Jd=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,uh(en,function(){return f0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=T.T,T.T=null,i=N.p,N.p=2,u=R,R|=4;try{F1(t,e,a)}finally{R=u,N.p=i,T.T=l}}it=1,l0(),i0(),n0()}}function l0(){if(it===1){it=0;var t=Xe,e=tl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=T.T,T.T=null;var l=N.p;N.p=2;var i=R;R|=4;try{qd(e,t);var n=Of,u=Sr(t.containerInfo),f=n.focusedElem,c=n.selectionRange;if(u!==f&&f&&f.ownerDocument&&xr(f.ownerDocument.documentElement,f)){if(c!==null&&Ff(f)){var r=c.start,b=c.end;if(b===void 0&&(b=r),"selectionStart"in f)f.selectionStart=r,f.selectionEnd=Math.min(b,f.value.length);else{var g=f.ownerDocument||document,d=g&&g.defaultView||window;if(d.getSelection){var h=d.getSelection(),v=f.textContent.length,w=Math.min(c.start,v),G=c.end===void 0?w:Math.min(c.end,v);!h.extend&&w>G&&(u=G,G=w,w=u);var s=Go(f,w),o=Go(f,G);if(s&&o&&(h.rangeCount!==1||h.anchorNode!==s.node||h.anchorOffset!==s.offset||h.focusNode!==o.node||h.focusOffset!==o.offset)){var p=g.createRange();p.setStart(s.node,s.offset),h.removeAllRanges(),w>G?(h.addRange(p),h.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),h.addRange(p))}}}}for(g=[],h=f;h=h.parentNode;)h.nodeType===1&&g.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<g.length;f++){var m=g[f];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}Cn=!!Af,Of=Af=null}finally{R=i,N.p=l,T.T=a}}t.current=e,it=2}}function i0(){if(it===2){it=0;var t=Xe,e=tl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=T.T,T.T=null;var l=N.p;N.p=2;var i=R;R|=4;try{Nd(t,e.alternate,e)}finally{R=i,N.p=l,T.T=a}}it=3}}function n0(){if(it===4||it===3){it=0,Cp();var t=Xe,e=tl,a=be,l=Jd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?it=5:(it=0,tl=Xe=null,u0(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ye=null),Yf(a),e=e.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=T.T,i=N.p,N.p=2,T.T=null;try{for(var n=t.onRecoverableError,u=0;u<l.length;u++){var f=l[u];n(f.value,{componentStack:f.stack})}}finally{T.T=e,N.p=i}}(be&3)!==0&&Yn(),ae(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===Cf?jl++:(jl=0,Cf=t):jl=0,si(0,!1)}}function u0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,fi(e)))}function Yn(){return l0(),i0(),n0(),f0()}function f0(){if(it!==5)return!1;var t=Xe,e=zf;zf=0;var a=Yf(be),l=T.T,i=N.p;try{N.p=32>a?32:a,T.T=null,a=Mf,Mf=null;var n=Xe,u=be;if(it=0,tl=Xe=null,be=0,(R&6)!==0)throw Error(y(331));var f=R;if(R|=4,Zd(n.current),Yd(n,n.current,u,a),R=f,si(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(ai,n)}catch{}return!0}finally{N.p=i,T.T=l,u0(t,e)}}function ms(t,e,a){e=Yt(a,e),e=vf(t.stateNode,e,2),t=Le(t,e,2),t!==null&&(ii(t,2),ae(t))}function U(t,e,a){if(t.tag===3)ms(t,t,a);else for(;e!==null;){if(e.tag===3){ms(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ye===null||!Ye.has(l))){t=Yt(a,t),a=wd(2),l=Le(e,a,2),l!==null&&(Td(a,l,e,t),ii(l,2),ae(l));break}}e=e.return}}function Hu(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new I1;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(a)||(Tc=!0,i.add(a),t=lh.bind(null,t,e,a),e.then(t,t))}function lh(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,L===t&&(O&a)===a&&(W===4||W===3&&(O&62914560)===O&&300>At()-jn?(R&2)===0&&el(t,0):zc|=a,Pa===O&&(Pa=0)),ae(t)}function c0(t,e){e===0&&(e=Ps()),t=ma(t,e),t!==null&&(ii(t,e),ae(t))}function ih(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),c0(t,a)}function nh(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(y(314))}l!==null&&l.delete(e),c0(t,a)}function uh(t,e){return qf(t,e)}var vn=null,Ea=null,Ef=!1,xn=!1,Uu=!1,Ue=0;function ae(t){t!==Ea&&t.next===null&&(Ea===null?vn=Ea=t:Ea=Ea.next=t),xn=!0,Ef||(Ef=!0,ch())}function si(t,e){if(!Uu&&xn){Uu=!0;do for(var a=!1,l=vn;l!==null;){if(!e)if(t!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var u=l.suspendedLanes,f=l.pingedLanes;n=(1<<31-_t(42|t)+1)-1,n&=i&~(u&~f),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,ys(l,n))}else n=O,n=kn(l,l===L?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||li(l,n)||(a=!0,ys(l,n));l=l.next}while(a);Uu=!1}}function fh(){o0()}function o0(){xn=Ef=!1;var t=0;Ue!==0&&bh()&&(t=Ue);for(var e=At(),a=null,l=vn;l!==null;){var i=l.next,n=s0(l,e);n===0?(l.next=null,a===null?vn=i:a.next=i,i===null&&(Ea=a)):(a=l,(t!==0||(n&3)!==0)&&(xn=!0)),l=i}it!==0&&it!==5||si(t,!1),Ue!==0&&(Ue=0)}function s0(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var u=31-_t(n),f=1<<u,c=i[u];c===-1?((f&a)===0||(f&l)!==0)&&(i[u]=Rp(f,e)):c<=e&&(t.expiredLanes|=f),n&=~f}if(e=L,a=O,a=kn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(H===2||H===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&du(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||li(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&du(l),Yf(a)){case 2:case 8:a=$s;break;case 32:a=en;break;case 268435456:a=Is;break;default:a=en}return l=r0.bind(null,t),a=qf(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&du(l),t.callbackPriority=2,t.callbackNode=null,2}function r0(t,e){if(it!==0&&it!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yn()&&t.callbackNode!==a)return null;var l=O;return l=kn(t,t===L?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Wd(t,l,e),s0(t,At()),t.callbackNode!=null&&t.callbackNode===a?r0.bind(null,t):null)}function ys(t,e){if(Yn())return null;Wd(t,e,!0)}function ch(){yh(function(){(R&6)!==0?qf(Ws,fh):o0()})}function Cc(){if(Ue===0){var t=Wa;t===0&&(t=xi,xi<<=1,(xi&261888)===0&&(xi=256)),Ue=t}return Ue}function vs(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gi(""+t)}function xs(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function oh(t,e,a,l,i){if(e==="submit"&&a&&a.stateNode===i){var n=vs((i[Tt]||null).action),u=l.submitter;u&&(e=(e=u[Tt]||null)?vs(e.formAction):u.getAttribute("formAction"),e!==null&&(n=e,u=null));var f=new An("action","action",null,l,i);t.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ue!==0){var c=u?xs(i,u):new FormData(i);mf(a,{pending:!0,data:c,method:i.method,action:n},null,c)}}else typeof n=="function"&&(f.preventDefault(),c=u?xs(i,u):new FormData(i),mf(a,{pending:!0,data:c,method:i.method,action:n},n,c))},currentTarget:i}]})}}for(Bi=0;Bi<nf.length;Bi++)Di=nf[Bi],Ss=Di.toLowerCase(),ws=Di[0].toUpperCase()+Di.slice(1),Ft(Ss,"on"+ws);var Di,Ss,ws,Bi;Ft(Tr,"onAnimationEnd");Ft(zr,"onAnimationIteration");Ft(Mr,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(E1,"onTransitionRun");Ft(k1,"onTransitionStart");Ft(A1,"onTransitionCancel");Ft(Cr,"onTransitionEnd");Ja("onMouseEnter",["mouseout","mouseover"]);Ja("onMouseLeave",["mouseout","mouseover"]);Ja("onPointerEnter",["pointerout","pointerover"]);Ja("onPointerLeave",["pointerout","pointerover"]);ha("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ha("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ha("onBeforeInput",["compositionend","keypress","textInput","paste"]);ha("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ha("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ha("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function d0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],i=l.event;l=l.listeners;t:{var n=void 0;if(e)for(var u=l.length-1;0<=u;u--){var f=l[u],c=f.instance,r=f.currentTarget;if(f=f.listener,c!==n&&i.isPropagationStopped())break t;n=f,i.currentTarget=r;try{n(i)}catch(b){ln(b)}i.currentTarget=null,n=c}else for(u=0;u<l.length;u++){if(f=l[u],c=f.instance,r=f.currentTarget,f=f.listener,c!==n&&i.isPropagationStopped())break t;n=f,i.currentTarget=r;try{n(i)}catch(b){ln(b)}i.currentTarget=null,n=c}}}}function E(t,e){var a=e[Wu];a===void 0&&(a=e[Wu]=new Set);var l=t+"__bubble";a.has(l)||(p0(e,t,2,!1),a.add(l))}function Gu(t,e,a){var l=0;e&&(l|=4),p0(a,t,l,e)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Ec(t){if(!t[Ri]){t[Ri]=!0,ir.forEach(function(a){a!=="selectionchange"&&(sh.has(a)||Gu(a,!1,t),Gu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ri]||(e[Ri]=!0,Gu("selectionchange",!1,e))}}function p0(t,e,a,l){switch(C0(e)){case 2:var i=Gh;break;case 8:i=jh;break;default:i=_c}a=i.bind(null,e,a,t),i=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function ju(t,e,a,l,i){var n=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var f=l.stateNode.containerInfo;if(f===i)break;if(u===4)for(u=l.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;f!==null;){if(u=Oa(f),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){l=n=u;continue t}f=f.parentNode}}l=l.return}dr(function(){var r=n,b=Zf(a),g=[];t:{var d=Er.get(t);if(d!==void 0){var h=An,v=t;switch(t){case"keypress":if(qi(a)===0)break t;case"keydown":case"keyup":h=n1;break;case"focusin":v="focus",h=mu;break;case"focusout":v="blur",h=mu;break;case"beforeblur":case"afterblur":h=mu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ao;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=c1;break;case Tr:case zr:case Mr:h=Wp;break;case Cr:h=s1;break;case"scroll":case"scrollend":h=Zp;break;case"wheel":h=d1;break;case"copy":case"cut":case"paste":h=Ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=_o;break;case"toggle":case"beforetoggle":h=h1}var w=(e&4)!==0,G=!w&&(t==="scroll"||t==="scrollend"),s=w?d!==null?d+"Capture":null:d;w=[];for(var o=r,p;o!==null;){var m=o;if(p=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||p===null||s===null||(m=Yl(o,s),m!=null&&w.push($l(o,m,p))),G)break;o=o.return}0<w.length&&(d=new h(d,v,null,a,b),g.push({event:d,listeners:w}))}}if((e&7)===0){t:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&a!==tf&&(v=a.relatedTarget||a.fromElement)&&(Oa(v)||v[il]))break t;if((h||d)&&(d=b.window===b?b:(d=b.ownerDocument)?d.defaultView||d.parentWindow:window,h?(v=a.relatedTarget||a.toElement,h=r,v=v?Oa(v):null,v!==null&&(G=ei(v),w=v.tag,v!==G||w!==5&&w!==27&&w!==6)&&(v=null)):(h=null,v=r),h!==v)){if(w=Ao,m="onMouseLeave",s="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(w=_o,m="onPointerLeave",s="onPointerEnter",o="pointer"),G=h==null?d:Ml(h),p=v==null?d:Ml(v),d=new w(m,o+"leave",h,a,b),d.target=G,d.relatedTarget=p,m=null,Oa(b)===r&&(w=new w(s,o+"enter",v,a,b),w.target=p,w.relatedTarget=G,m=w),G=m,h&&v)e:{for(w=rh,s=h,o=v,p=0,m=s;m;m=w(m))p++;m=0;for(var S=o;S;S=w(S))m++;for(;0<p-m;)s=w(s),p--;for(;0<m-p;)o=w(o),m--;for(;p--;){if(s===o||o!==null&&s===o.alternate){w=s;break e}s=w(s),o=w(o)}w=null}else w=null;h!==null&&Ts(g,d,h,w,!1),v!==null&&G!==null&&Ts(g,G,v,w,!0)}}t:{if(d=r?Ml(r):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var B=No;else if(Ro(d))if(yr)B=z1;else{B=w1;var x=S1}else h=d.nodeName,!h||h.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?r&&Qf(r.elementType)&&(B=No):B=T1;if(B&&(B=B(t,r))){mr(g,B,a,b);break t}x&&x(t,d,r),t==="focusout"&&r&&d.type==="number"&&r.memoizedProps.value!=null&&Pu(d,"number",d.value)}switch(x=r?Ml(r):window,t){case"focusin":(Ro(x)||x.contentEditable==="true")&&(Da=x,af=r,Ol=null);break;case"focusout":Ol=af=Da=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,jo(g,a,b);break;case"selectionchange":if(C1)break;case"keydown":case"keyup":jo(g,a,b)}var C;if(Jf)t:{switch(t){case"compositionstart":var A="onCompositionStart";break t;case"compositionend":A="onCompositionEnd";break t;case"compositionupdate":A="onCompositionUpdate";break t}A=void 0}else Ba?gr(t,a)&&(A="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(A="onCompositionStart");A&&(hr&&a.locale!=="ko"&&(Ba||A!=="onCompositionStart"?A==="onCompositionEnd"&&Ba&&(C=pr()):(Re=b,Vf="value"in Re?Re.value:Re.textContent,Ba=!0)),x=Sn(r,A),0<x.length&&(A=new Oo(A,t,null,a,b),g.push({event:A,listeners:x}),C?A.data=C:(C=br(a),C!==null&&(A.data=C)))),(C=b1?m1(t,a):y1(t,a))&&(A=Sn(r,"onBeforeInput"),0<A.length&&(x=new Oo("onBeforeInput","beforeinput",null,a,b),g.push({event:x,listeners:A}),x.data=C)),oh(g,t,r,a,b)}d0(g,e)})}function $l(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Sn(t,e){for(var a=e+"Capture",l=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Yl(t,a),i!=null&&l.unshift($l(t,i,n)),i=Yl(t,e),i!=null&&l.push($l(t,i,n))),t.tag===3)return l;t=t.return}return[]}function rh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ts(t,e,a,l,i){for(var n=e._reactName,u=[];a!==null&&a!==l;){var f=a,c=f.alternate,r=f.stateNode;if(f=f.tag,c!==null&&c===l)break;f!==5&&f!==26&&f!==27||r===null||(c=r,i?(r=Yl(a,n),r!=null&&u.unshift($l(a,r,c))):i||(r=Yl(a,n),r!=null&&u.push($l(a,r,c)))),a=a.return}u.length!==0&&t.push({event:e,listeners:u})}var dh=/\r\n?/g,ph=/\u0000|\uFFFD/g;function zs(t){return(typeof t=="string"?t:""+t).replace(dh,`
`).replace(ph,"")}function h0(t,e){return e=zs(e),zs(t)===e}function j(t,e,a,l,i,n){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Fa(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Fa(t,""+l);break;case"className":Ti(t,"class",l);break;case"tabIndex":Ti(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ti(t,a,l);break;case"style":rr(t,l,n);break;case"data":if(e!=="object"){Ti(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Gi(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(e!=="input"&&j(t,e,"name",i.name,i,null),j(t,e,"formEncType",i.formEncType,i,null),j(t,e,"formMethod",i.formMethod,i,null),j(t,e,"formTarget",i.formTarget,i,null)):(j(t,e,"encType",i.encType,i,null),j(t,e,"method",i.method,i,null),j(t,e,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Gi(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=de);break;case"onScroll":l!=null&&E("scroll",t);break;case"onScrollEnd":l!=null&&E("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Gi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":E("beforetoggle",t),E("toggle",t),Ui(t,"popover",l);break;case"xlinkActuate":ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ie(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ie(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ie(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ie(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ui(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xp.get(a)||a,Ui(t,a,l))}}function kf(t,e,a,l,i,n){switch(a){case"style":rr(t,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Fa(t,l):(typeof l=="number"||typeof l=="bigint")&&Fa(t,""+l);break;case"onScroll":l!=null&&E("scroll",t);break;case"onScrollEnd":l!=null&&E("scrollend",t);break;case"onClick":l!=null&&(t.onclick=de);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nr.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),n=t[Tt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(e,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,i);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ui(t,a,l)}}}function pt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":E("error",t),E("load",t);var l=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var u=a[n];if(u!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:j(t,e,n,u,a,null)}}i&&j(t,e,"srcSet",a.srcSet,a,null),l&&j(t,e,"src",a.src,a,null);return;case"input":E("invalid",t);var f=n=u=i=null,c=null,r=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":i=b;break;case"type":u=b;break;case"checked":c=b;break;case"defaultChecked":r=b;break;case"value":n=b;break;case"defaultValue":f=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(y(137,e));break;default:j(t,e,l,b,a,null)}}cr(t,n,f,c,r,u,i,!1);return;case"select":E("invalid",t),l=u=n=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":n=f;break;case"defaultValue":u=f;break;case"multiple":l=f;default:j(t,e,i,f,a,null)}e=n,a=u,t.multiple=!!l,e!=null?La(t,!!l,e,!1):a!=null&&La(t,!!l,a,!0);return;case"textarea":E("invalid",t),n=i=l=null;for(u in a)if(a.hasOwnProperty(u)&&(f=a[u],f!=null))switch(u){case"value":l=f;break;case"defaultValue":i=f;break;case"children":n=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(y(91));break;default:j(t,e,u,f,a,null)}sr(t,l,i,n);return;case"option":for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null)&&(c==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":j(t,e,c,l,a,null));return;case"dialog":E("beforetoggle",t),E("toggle",t),E("cancel",t),E("close",t);break;case"iframe":case"object":E("load",t);break;case"video":case"audio":for(l=0;l<Wl.length;l++)E(Wl[l],t);break;case"image":E("error",t),E("load",t);break;case"details":E("toggle",t);break;case"embed":case"source":case"link":E("error",t),E("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in a)if(a.hasOwnProperty(r)&&(l=a[r],l!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:j(t,e,r,l,a,null)}return;default:if(Qf(e)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&kf(t,e,b,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&j(t,e,f,l,a,null))}function hh(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,f=null,c=null,r=null,b=null;for(h in a){var g=a[h];if(a.hasOwnProperty(h)&&g!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":c=g;default:l.hasOwnProperty(h)||j(t,e,h,null,l,g)}}for(var d in l){var h=l[d];if(g=a[d],l.hasOwnProperty(d)&&(h!=null||g!=null))switch(d){case"type":n=h;break;case"name":i=h;break;case"checked":r=h;break;case"defaultChecked":b=h;break;case"value":u=h;break;case"defaultValue":f=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,e));break;default:h!==g&&j(t,e,d,h,l,g)}}Iu(t,u,f,c,r,b,n,i);return;case"select":h=u=f=d=null;for(n in a)if(c=a[n],a.hasOwnProperty(n)&&c!=null)switch(n){case"value":break;case"multiple":h=c;default:l.hasOwnProperty(n)||j(t,e,n,null,l,c)}for(i in l)if(n=l[i],c=a[i],l.hasOwnProperty(i)&&(n!=null||c!=null))switch(i){case"value":d=n;break;case"defaultValue":f=n;break;case"multiple":u=n;default:n!==c&&j(t,e,i,n,l,c)}e=f,a=u,l=h,d!=null?La(t,!!a,d,!1):!!l!=!!a&&(e!=null?La(t,!!a,e,!0):La(t,!!a,a?[]:"",!1));return;case"textarea":h=d=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:j(t,e,f,null,l,i)}for(u in l)if(i=l[u],n=a[u],l.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":d=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(y(91));break;default:i!==n&&j(t,e,u,i,l,n)}or(t,d,h);return;case"option":for(var v in a)d=a[v],a.hasOwnProperty(v)&&d!=null&&!l.hasOwnProperty(v)&&(v==="selected"?t.selected=!1:j(t,e,v,null,l,d));for(c in l)d=l[c],h=a[c],l.hasOwnProperty(c)&&d!==h&&(d!=null||h!=null)&&(c==="selected"?t.selected=d&&typeof d!="function"&&typeof d!="symbol":j(t,e,c,d,l,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in a)d=a[w],a.hasOwnProperty(w)&&d!=null&&!l.hasOwnProperty(w)&&j(t,e,w,null,l,d);for(r in l)if(d=l[r],h=a[r],l.hasOwnProperty(r)&&d!==h&&(d!=null||h!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(y(137,e));break;default:j(t,e,r,d,l,h)}return;default:if(Qf(e)){for(var G in a)d=a[G],a.hasOwnProperty(G)&&d!==void 0&&!l.hasOwnProperty(G)&&kf(t,e,G,void 0,l,d);for(b in l)d=l[b],h=a[b],!l.hasOwnProperty(b)||d===h||d===void 0&&h===void 0||kf(t,e,b,d,l,h);return}}for(var s in a)d=a[s],a.hasOwnProperty(s)&&d!=null&&!l.hasOwnProperty(s)&&j(t,e,s,null,l,d);for(g in l)d=l[g],h=a[g],!l.hasOwnProperty(g)||d===h||d==null&&h==null||j(t,e,g,d,l,h)}function Ms(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],n=i.transferSize,u=i.initiatorType,f=i.duration;if(n&&f&&Ms(u)){for(u=0,f=i.responseEnd,l+=1;l<a.length;l++){var c=a[l],r=c.startTime;if(r>f)break;var b=c.transferSize,g=c.initiatorType;b&&Ms(g)&&(c=c.responseEnd,u+=b*(c<f?1:(f-r)/(c-r)))}if(--l,e+=8*(n+u)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Af=null,Of=null;function wn(t){return t.nodeType===9?t:t.ownerDocument}function Cs(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function _f(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qu=null;function bh(){var t=window.event;return t&&t.type==="popstate"?t===qu?!1:(qu=t,!0):(qu=null,!1)}var b0=typeof setTimeout=="function"?setTimeout:void 0,mh=typeof clearTimeout=="function"?clearTimeout:void 0,Es=typeof Promise=="function"?Promise:void 0,yh=typeof queueMicrotask=="function"?queueMicrotask:typeof Es!="undefined"?function(t){return Es.resolve(null).then(t).catch(vh)}:b0;function vh(t){setTimeout(function(){throw t})}function Ie(t){return t==="head"}function ks(t,e){var a=e,l=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(i),ll(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")ql(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ql(a);for(var n=a.firstChild;n;){var u=n.nextSibling,f=n.nodeName;n[ni]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=u}}else a==="body"&&ql(t.ownerDocument.body);a=i}while(a);ll(e)}function As(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Bf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),Xf(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xh(t,e,a,l){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ni])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Zt(t.nextSibling),t===null)break}return null}function Sh(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Zt(t.nextSibling),t===null))return null;return t}function m0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Zt(t.nextSibling),t===null))return null;return t}function Df(t){return t.data==="$?"||t.data==="$~"}function Rf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function wh(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Nf=null;function Os(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Zt(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function _s(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function y0(t,e,a){switch(e=wn(a),t){case"html":if(t=e.documentElement,!t)throw Error(y(452));return t;case"head":if(t=e.head,!t)throw Error(y(453));return t;case"body":if(t=e.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function ql(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Xf(t)}var Vt=new Map,Bs=new Set;function Tn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var we=N.d;N.d={f:Th,r:zh,D:Mh,C:Ch,L:Eh,m:kh,X:Oh,S:Ah,M:_h};function Th(){var t=we.f(),e=qn();return t||e}function zh(t){var e=nl(t);e!==null&&e.tag===5&&e.type==="form"?rd(e):we.r(t)}var ol=typeof document=="undefined"?null:document;function v0(t,e,a){var l=ol;if(l&&typeof e=="string"&&e){var i=Lt(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Bs.has(i)||(Bs.add(i),t={rel:t,crossOrigin:a,href:e},l.querySelector(i)===null&&(e=l.createElement("link"),pt(e,"link",t),ft(e),l.head.appendChild(e)))}}function Mh(t){we.D(t),v0("dns-prefetch",t,null)}function Ch(t,e){we.C(t,e),v0("preconnect",t,e)}function Eh(t,e,a){we.L(t,e,a);var l=ol;if(l&&t&&e){var i='link[rel="preload"][as="'+Lt(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Lt(a.imageSizes)+'"]')):i+='[href="'+Lt(t)+'"]';var n=i;switch(e){case"style":n=al(t);break;case"script":n=sl(t)}Vt.has(n)||(t=V({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Vt.set(n,t),l.querySelector(i)!==null||e==="style"&&l.querySelector(ri(n))||e==="script"&&l.querySelector(di(n))||(e=l.createElement("link"),pt(e,"link",t),ft(e),l.head.appendChild(e)))}}function kh(t,e){we.m(t,e);var a=ol;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Lt(l)+'"][href="'+Lt(t)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=sl(t)}if(!Vt.has(n)&&(t=V({rel:"modulepreload",href:t},e),Vt.set(n,t),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(di(n)))return}l=a.createElement("link"),pt(l,"link",t),ft(l),a.head.appendChild(l)}}}function Ah(t,e,a){we.S(t,e,a);var l=ol;if(l&&t){var i=qa(l).hoistableStyles,n=al(t);e=e||"default";var u=i.get(n);if(!u){var f={loading:0,preload:null};if(u=l.querySelector(ri(n)))f.loading=5;else{t=V({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Vt.get(n))&&kc(t,a);var c=u=l.createElement("link");ft(c),pt(c,"link",t),c._p=new Promise(function(r,b){c.onload=r,c.onerror=b}),c.addEventListener("load",function(){f.loading|=1}),c.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ji(u,e,l)}u={type:"stylesheet",instance:u,count:1,state:f},i.set(n,u)}}}function Oh(t,e){we.X(t,e);var a=ol;if(a&&t){var l=qa(a).hoistableScripts,i=sl(t),n=l.get(i);n||(n=a.querySelector(di(i)),n||(t=V({src:t,async:!0},e),(e=Vt.get(i))&&Ac(t,e),n=a.createElement("script"),ft(n),pt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function _h(t,e){we.M(t,e);var a=ol;if(a&&t){var l=qa(a).hoistableScripts,i=sl(t),n=l.get(i);n||(n=a.querySelector(di(i)),n||(t=V({src:t,async:!0,type:"module"},e),(e=Vt.get(i))&&Ac(t,e),n=a.createElement("script"),ft(n),pt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Ds(t,e,a,l){var i=(i=Ge.current)?Tn(i):null;if(!i)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=al(a.href),a=qa(i).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=al(a.href);var n=qa(i).hoistableStyles,u=n.get(t);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,u),(n=i.querySelector(ri(t)))&&!n._p&&(u.instance=n,u.state.loading=5),Vt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vt.set(t,a),n||Bh(i,t,a,u.state))),e&&l===null)throw Error(y(528,""));return u}if(e&&l!==null)throw Error(y(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=sl(a),a=qa(i).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function al(t){return'href="'+Lt(t)+'"'}function ri(t){return'link[rel="stylesheet"]['+t+"]"}function x0(t){return V({},t,{"data-precedence":t.precedence,precedence:null})}function Bh(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),pt(e,"link",a),ft(e),t.head.appendChild(e))}function sl(t){return'[src="'+Lt(t)+'"]'}function di(t){return"script[async]"+t}function Rs(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Lt(a.href)+'"]');if(l)return e.instance=l,ft(l),l;var i=V({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),ft(l),pt(l,"style",i),Ji(l,a.precedence,t),e.instance=l;case"stylesheet":i=al(a.href);var n=t.querySelector(ri(i));if(n)return e.state.loading|=4,e.instance=n,ft(n),n;l=x0(a),(i=Vt.get(i))&&kc(l,i),n=(t.ownerDocument||t).createElement("link"),ft(n);var u=n;return u._p=new Promise(function(f,c){u.onload=f,u.onerror=c}),pt(n,"link",l),e.state.loading|=4,Ji(n,a.precedence,t),e.instance=n;case"script":return n=sl(a.src),(i=t.querySelector(di(n)))?(e.instance=i,ft(i),i):(l=a,(i=Vt.get(n))&&(l=V({},a),Ac(l,i)),t=t.ownerDocument||t,i=t.createElement("script"),ft(i),pt(i,"link",l),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(y(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Ji(l,a.precedence,t));return e.instance}function Ji(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,u=0;u<l.length;u++){var f=l[u];if(f.dataset.precedence===e)n=f;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function kc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ac(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Fi=null;function Ns(t,e,a){if(Fi===null){var l=new Map,i=Fi=new Map;i.set(a,l)}else i=Fi,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var n=a[i];if(!(n[ni]||n[st]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(e)||"";u=t+u;var f=l.get(u);f?f.push(n):l.set(u,[n])}}return l}function Hs(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Dh(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function S0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Rh(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=al(l.href),n=e.querySelector(ri(i));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=zn.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=n,ft(n);return}n=e.ownerDocument||e,l=x0(l),(i=Vt.get(i))&&kc(l,i),n=n.createElement("link"),ft(n);var u=n;u._p=new Promise(function(f,c){u.onload=f,u.onerror=c}),pt(n,"link",l),a.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=zn.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Lu=0;function Nh(t,e){return t.stylesheets&&t.count===0&&Wi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Wi(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+e);0<t.imgBytes&&Lu===0&&(Lu=62500*gh());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wi(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Lu?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function zn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mn=null;function Wi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mn=new Map,e.forEach(Hh,t),Mn=null,zn.call(t))}function Hh(t,e){if(!(e.state.loading&4)){var a=Mn.get(t);if(a)var l=a.get(null);else{a=new Map,Mn.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}i=e.instance,u=i.getAttribute("data-precedence"),n=a.get(u)||l,n===l&&a.set(null,i),a.set(u,i),this.count++,l=zn.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Il={$$typeof:re,Provider:null,Consumer:null,_currentValue:ia,_currentValue2:ia,_threadCount:0};function Uh(t,e,a,l,i,n,u,f,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.hiddenUpdates=pu(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function w0(t,e,a,l,i,n,u,f,c,r,b,g){return t=new Uh(t,e,a,u,c,r,b,g,f),e=1,n===!0&&(e|=24),n=Et(3,null,null,e),t.current=n,n.stateNode=t,e=ec(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:e},ic(n),t}function T0(t){return t?(t=Ha,t):Ha}function z0(t,e,a,l,i,n){i=T0(i),l.context===null?l.context=i:l.pendingContext=i,l=qe(e),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=Le(t,l,e),a!==null&&(wt(a,t,e),Bl(a,t,e))}function Us(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Oc(t,e){Us(t,e),(t=t.alternate)&&Us(t,e)}function M0(t){if(t.tag===13||t.tag===31){var e=ma(t,67108864);e!==null&&wt(e,t,67108864),Oc(t,67108864)}}function Gs(t){if(t.tag===13||t.tag===31){var e=Bt();e=Lf(e);var a=ma(t,e);a!==null&&wt(a,t,e),Oc(t,e)}}var Cn=!0;function Gh(t,e,a,l){var i=T.T;T.T=null;var n=N.p;try{N.p=2,_c(t,e,a,l)}finally{N.p=n,T.T=i}}function jh(t,e,a,l){var i=T.T;T.T=null;var n=N.p;try{N.p=8,_c(t,e,a,l)}finally{N.p=n,T.T=i}}function _c(t,e,a,l){if(Cn){var i=Hf(l);if(i===null)ju(t,e,l,En,a),js(t,l);else if(Lh(i,t,e,a,l))l.stopPropagation();else if(js(t,l),e&4&&-1<qh.indexOf(t)){for(;i!==null;){var n=nl(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=ea(n.pendingLanes);if(u!==0){var f=n;for(f.pendingLanes|=2,f.entangledLanes|=2;u;){var c=1<<31-_t(u);f.entanglements[1]|=c,u&=~c}ae(n),(R&6)===0&&(bn=At()+500,si(0,!1))}}break;case 31:case 13:f=ma(n,2),f!==null&&wt(f,n,2),qn(),Oc(n,2)}if(n=Hf(l),n===null&&ju(t,e,l,En,a),n===i)break;i=n}i!==null&&l.stopPropagation()}else ju(t,e,l,null,a)}}function Hf(t){return t=Zf(t),Bc(t)}var En=null;function Bc(t){if(En=null,t=Oa(t),t!==null){var e=ei(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Zs(e),t!==null)return t;t=null}else if(a===31){if(t=Vs(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return En=t,null}function C0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ep()){case Ws:return 2;case $s:return 8;case en:case kp:return 32;case Is:return 268435456;default:return 32}default:return 32}}var Uf=!1,Qe=null,Ze=null,Ve=null,Pl=new Map,ti=new Map,Be=[],qh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function js(t,e){switch(t){case"focusin":case"focusout":Qe=null;break;case"dragenter":case"dragleave":Ze=null;break;case"mouseover":case"mouseout":Ve=null;break;case"pointerover":case"pointerout":Pl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(e.pointerId)}}function Sl(t,e,a,l,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},e!==null&&(e=nl(e),e!==null&&M0(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Lh(t,e,a,l,i){switch(e){case"focusin":return Qe=Sl(Qe,t,e,a,l,i),!0;case"dragenter":return Ze=Sl(Ze,t,e,a,l,i),!0;case"mouseover":return Ve=Sl(Ve,t,e,a,l,i),!0;case"pointerover":var n=i.pointerId;return Pl.set(n,Sl(Pl.get(n)||null,t,e,a,l,i)),!0;case"gotpointercapture":return n=i.pointerId,ti.set(n,Sl(ti.get(n)||null,t,e,a,l,i)),!0}return!1}function E0(t){var e=Oa(t.target);if(e!==null){var a=ei(e);if(a!==null){if(e=a.tag,e===13){if(e=Zs(a),e!==null){t.blockedOn=e,wo(t.priority,function(){Gs(a)});return}}else if(e===31){if(e=Vs(a),e!==null){t.blockedOn=e,wo(t.priority,function(){Gs(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Hf(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);tf=l,a.target.dispatchEvent(l),tf=null}else return e=nl(a),e!==null&&M0(e),t.blockedOn=a,!1;e.shift()}return!0}function qs(t,e,a){$i(t)&&a.delete(e)}function Yh(){Uf=!1,Qe!==null&&$i(Qe)&&(Qe=null),Ze!==null&&$i(Ze)&&(Ze=null),Ve!==null&&$i(Ve)&&(Ve=null),Pl.forEach(qs),ti.forEach(qs)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,Uf||(Uf=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Yh)))}var Hi=null;function Ls(t){Hi!==t&&(Hi=t,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,function(){Hi===t&&(Hi=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],i=t[e+2];if(typeof l!="function"){if(Bc(l||a)===null)continue;break}var n=nl(a);n!==null&&(t.splice(e,3),e-=3,mf(n,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function ll(t){function e(c){return Ni(c,t)}Qe!==null&&Ni(Qe,t),Ze!==null&&Ni(Ze,t),Ve!==null&&Ni(Ve,t),Pl.forEach(e),ti.forEach(e);for(var a=0;a<Be.length;a++){var l=Be[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Be.length&&(a=Be[0],a.blockedOn===null);)E0(a),a.blockedOn===null&&Be.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],n=a[l+1],u=i[Tt]||null;if(typeof n=="function")u||Ls(a);else if(u){var f=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[Tt]||null)f=u.formAction;else if(Bc(i)!==null)continue}else f=u.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),Ls(a)}}}function k0(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Dc(t){this._internalRoot=t}Xn.prototype.render=Dc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));var a=e.current,l=Bt();z0(a,l,t,e,null,null)};Xn.prototype.unmount=Dc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;z0(t.current,2,null,t,null,null),qn(),e[il]=null}};function Xn(t){this._internalRoot=t}Xn.prototype.unstable_scheduleHydration=function(t){if(t){var e=lr();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Be.length&&e!==0&&e<Be[a].priority;a++);Be.splice(a,0,t),a===0&&E0(t)}};var Ys=Xs.version;if(Ys!=="19.2.8")throw Error(y(527,Ys,"19.2.8"));N.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=xp(e),t=t!==null?Ks(t):null,t=t===null?null:t.stateNode,t};var Xh={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(wl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!wl.isDisabled&&wl.supportsFiber))try{ai=wl.inject(Xh),Ot=wl}catch{}var wl;Qn.createRoot=function(t,e){if(!Qs(t))throw Error(y(299));var a=!1,l="",i=vd,n=xd,u=Sd;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=w0(t,1,!1,null,null,a,l,null,i,n,u,k0),t[il]=e.current,Ec(t),new Dc(e)};Qn.hydrateRoot=function(t,e,a){if(!Qs(t))throw Error(y(299));var l=!1,i="",n=vd,u=xd,f=Sd,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),e=w0(t,1,!0,e,a!=null?a:null,l,i,c,n,u,f,k0),e.context=T0(null),a=e.current,l=Bt(),l=Lf(l),i=qe(l),i.callback=null,Le(a,i,l),a=l,e.current.lanes=a,ii(e,a),ae(e),t[il]=e.current,Ec(t),new Xn(e)};Qn.version="19.2.8"});var B0=ze((cg,_0)=>{"use strict";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(t){console.error(t)}}O0(),_0.exports=A0()});var Nt=Lc(hi()),X0=Lc(B0());var D0=`<!doctype html>
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
<title>RACKOON \u2014 PvP</title>
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
@keyframes rkWin{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.05);opacity:1}100%{transform:scale(1)}}
@keyframes rkPulseBall{0%,100%{box-shadow:0 0 0 0 rgba(255,200,61,.7),0 0 18px rgba(255,200,61,.9)}50%{box-shadow:0 0 0 8px rgba(255,200,61,0),0 0 24px rgba(255,200,61,1)}}
@keyframes rkTileIn{0%{opacity:0;transform:scale(.92)}100%{opacity:1;transform:scale(1)}}
</style>
</helmet>
<div style="position: relative; width: 390px; min-height: 1300px; box-sizing: border-box; padding: 20px 16px 32px; display: flex; flex-direction: column; gap: 14px; background: #0b0d12; font-family: Rubik, system-ui, sans-serif; color: #ffffff; overflow: hidden">

<header style="display: flex; align-items: center; gap: 10px; height: 48px">
<a href="Main.dc.html" aria-label="\u041D\u0430\u0437\u0430\u0434 \u0432 \u043B\u043E\u0431\u0431\u0438" style="width: 44px; height: 44px; border-radius: 14px; background: #1a1d27; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M13 3 L6 10 L13 17" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>
<div style="display: flex; flex-direction: column; gap: 2px; flex-grow: 1">
<div style="font-size: 26px; font-weight: 900; font-style: italic; line-height: 1">PVP</div>
<div style="font-size: 11px; font-weight: 500; color: #2bd46b">\u25CF {{online}} \u043E\u043D\u043B\u0430\u0439\u043D</div>
</div>
<div style="height: 44px; box-sizing: border-box; border-radius: 14px; background: #1a1d27; padding: 0 12px; display: flex; align-items: center; font-size: 14px; font-weight: 700; color: #ffc83d">{{balanceText}}</div>
</header>

<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
<div style="height: 40px; border-radius: 12px; background: #151821; border: 1px solid #222838; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 14px; font-weight: 700">
<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="5" r="3" fill="none" stroke="#a3a8b5" stroke-width="1.8"></circle><path d="M2 15 C2 10 14 10 14 15" fill="none" stroke="#a3a8b5" stroke-width="1.8"></path></svg>
{{playersCount}}
</div>
<div style="height: 40px; border-radius: 12px; background: #151821; border: 1px solid #222838; display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 14px; font-weight: 700; color: #ffc83d">\u0411\u0430\u043D\u043A {{potText}}</div>
</div>

<div style="position: relative; width: 358px; height: 358px; border-radius: 24px; overflow: hidden; background: #11141c; border: 1px solid #1d2230">
<div style="position: absolute; left: 0; top: 0; width: 358px; height: 358px; {{arenaStyle}}">
<sc-for list="{{tiles}}" as="t" hint-placeholder-count="2">
<div style="position: absolute; box-sizing: border-box; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; left: {{t.x}}px; top: {{t.y}}px; width: {{t.w}}px; height: {{t.h}}px; background: {{t.bg}}; border: {{t.border}}; animation: rkTileIn 0.35s ease-out">
<div style="width: {{t.av}}px; height: {{t.av}}px; border-radius: 50%; background: {{t.avBg}}; border: 3px solid rgba(255,255,255,0.85); box-sizing: border-box; display: flex; align-items: center; justify-content: center; font-size: {{t.fs}}px; font-weight: 900; color: #ffffff; overflow: hidden">
<sc-if value="{{t.isMe}}" hint-placeholder-val="{{ false }}">
<img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 100%; height: 100%; object-fit: cover">
</sc-if>
<sc-if value="{{t.notMe}}" hint-placeholder-val="{{ true }}">{{t.initial}}</sc-if>
</div>
<sc-if value="{{t.showLabel}}" hint-placeholder-val="{{ false }}">
<span style="max-width: 92%; font-size: 12px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-shadow: 0 1px 3px rgba(0,0,0,0.5)">{{t.name}}</span>
<span style="font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 7px; background: rgba(0,0,0,0.3)">{{t.chance}}</span>
</sc-if>
</div>
</sc-for>

<sc-if value="{{showBall}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; width: 0; height: 0; {{ballStyle}}">
<div style="position: absolute; left: -10px; top: -10px; width: 20px; height: 20px; border-radius: 50%; background: #ffc83d; border: 3px solid #ffffff; box-sizing: border-box; animation: rkPulseBall 0.9s infinite"></div>
<span style="position: absolute; left: 50%; top: 14px; transform: translateX(-50%); white-space: nowrap; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 8px; background: rgba(11,13,18,0.85); color: #ffc83d">@{{ballOwner}}</span>
</div>
</sc-if>
</div>

<sc-if value="{{isWaiting}}" hint-placeholder-val="{{ true }}">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; background: rgba(11,13,18,0.55)">
<svg width="120" height="34" viewBox="0 0 120 34" aria-hidden="true"><circle cx="17" cy="17" r="13" fill="none" stroke="#3a4157" stroke-width="3"></circle><path d="M60 4 L74 30 H46Z" fill="none" stroke="#3a4157" stroke-width="3" stroke-linejoin="round"></path><rect x="90" y="4" width="26" height="26" rx="3" fill="none" stroke="#3a4157" stroke-width="3"></rect></svg>
<div style="font-size: 20px; font-weight: 700; color: #c9cdd6">\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0438\u0433\u0440\u043E\u043A\u043E\u0432</div>
<div style="font-size: 13px; color: #8a90a0">\u0420\u0430\u0443\u043D\u0434 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0437\u0430\u0439\u0434\u0451\u0442 \u0432\u0442\u043E\u0440\u043E\u0439 \u0438\u0433\u0440\u043E\u043A</div>
</div>
</sc-if>

</div>
<div style="height: 40px; margin-top: -6px; border-radius: 12px; background: #151821; border: 1px solid #222838; display: flex; align-items: center; justify-content: space-between; padding: 0 14px; font-size: 13px; font-weight: 700">
<span>\u0418\u0433\u0440\u043E\u043A\u0438: {{playersCount}}/32</span>
<span style="color: {{statusColor}}">{{statusText}}</span>
</div>

<div style="display: flex; flex-direction: column; gap: 10px">
<div style="display: grid; grid-template-columns: 44px minmax(0, 1fr) 44px 44px 44px; gap: 6px; align-items: center">
<button type="button" onClick="{{betMinus}}" aria-label="\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 700; cursor: pointer">\u2212</button>
<div style="height: 44px; border-radius: 12px; background: #151821; border: 1px solid #222838; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 900; color: #ffc83d">{{betText}}</div>
<button type="button" onClick="{{betPlus}}" aria-label="\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0441\u0442\u0430\u0432\u043A\u0443" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 18px; font-weight: 700; cursor: pointer">+</button>
<button type="button" onClick="{{betHalf}}" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer">\xBD</button>
<button type="button" onClick="{{betDouble}}" style="height: 44px; border-radius: 12px; border: 1px solid #222838; background: #151821; color: #ffffff; font-family: Rubik, system-ui, sans-serif; font-size: 13px; font-weight: 700; cursor: pointer">x2</button>
</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px">
<button type="button" onClick="{{openGift}}" disabled="{{joinDisabled}}" style="height: 56px; border-radius: 16px; border: 2px solid #2c3244; background: #151821; color: {{giftBtnColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px">
<svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><rect x="2" y="7" width="14" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect><rect x="1" y="4" width="16" height="4" rx="1.5" fill="currentColor"></rect><path d="M9 4 V17" stroke="currentColor" stroke-width="2"></path></svg>
\u041F\u043E\u0434\u0430\u0440\u043A\u043E\u043C
</button>
<button type="button" onClick="{{placeTon}}" disabled="{{joinDisabled}}" style="height: 56px; border-radius: 16px; border: 0; background: {{tonBtnBg}}; color: {{tonBtnColor}}; font-family: Rubik, system-ui, sans-serif; font-size: 15px; font-weight: 900; cursor: pointer">{{tonBtnText}}</button>
</div>
<sc-if value="{{showGiftPick}}" hint-placeholder-val="{{ false }}">
<div style="background: #151821; border: 1px solid #222838; border-radius: 18px; padding: 12px; display: flex; flex-direction: column; gap: 10px">
<div style="display: flex; justify-content: space-between; align-items: center">
<span style="font-size: 14px; font-weight: 700">\u041F\u043E\u0441\u0442\u0430\u0432\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u043A</span>
<button type="button" onClick="{{closeGift}}" style="height: 36px; border: 0; background: transparent; color: #a3a8b5; font-family: Rubik, system-ui, sans-serif; font-size: 13px; cursor: pointer">\u041E\u0442\u043C\u0435\u043D\u0430</button>
</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px">
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
<div style="font-size: 12px; color: #8a90a0; text-align: center">\u0428\u0430\u043D\u0441 = \u0442\u0432\u043E\u044F \u0434\u043E\u043B\u044F \u0432 \u0431\u0430\u043D\u043A\u0435. \u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u0442 \u0432\u0435\u0441\u044C \u0431\u0430\u043D\u043A, \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F 5% \u0441 \u0432\u044B\u0438\u0433\u0440\u044B\u0448\u0430.</div>
</div>

<div role="tablist" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; background: #151821; border-radius: 14px; padding: 4px">
<button type="button" role="tab" onClick="{{tabPlayers}}" aria-selected="{{playersSel}}" style="height: 40px; border: 0; border-radius: 11px; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer; background: {{playersTabBg}}; color: {{playersTabColor}}">\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 ({{playersCount}})</button>
<button type="button" role="tab" onClick="{{tabHistory}}" aria-selected="{{historySel}}" style="height: 40px; border: 0; border-radius: 11px; font-family: Rubik, system-ui, sans-serif; font-size: 14px; font-weight: 700; cursor: pointer; background: {{historyTabBg}}; color: {{historyTabColor}}">\u0418\u0441\u0442\u043E\u0440\u0438\u044F</button>
</div>

<sc-if value="{{showPlayersTab}}" hint-placeholder-val="{{ true }}">
<div style="display: flex; justify-content: space-between; font-size: 12px; color: #8a90a0"><span>\u0418\u0433\u0440\u0430 #{{gameId}}</span><span>\u0448\u0430\u043D\u0441 \xB7 \u0441\u0442\u0430\u0432\u043A\u0430</span></div>
<div style="display: flex; flex-direction: column; gap: 8px">
<sc-for list="{{players}}" as="p" hint-placeholder-count="2">
<div style="background: #151821; border: 1px solid {{p.border}}; border-radius: 16px; padding: 10px 12px; display: flex; flex-direction: column; gap: 8px">
<div style="display: flex; align-items: center; gap: 10px">
<div style="width: 36px; height: 36px; border-radius: 12px; background: {{p.avBg}}; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 900; flex-shrink: 0; overflow: hidden">
<sc-if value="{{p.isMe}}" hint-placeholder-val="{{ false }}"><img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{p.notMe}}" hint-placeholder-val="{{ true }}">{{p.initial}}</sc-if>
</div>
<span style="flex-grow: 1; min-width: 0; font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{p.name}}</span>
<span style="font-size: 12px; font-weight: 700; padding: 3px 8px; border-radius: 8px; background: #0b0d12; color: #c9cdd6">{{p.chance}}</span>
<span style="font-size: 14px; font-weight: 900; color: #ffc83d">{{p.stakeText}}</span>
</div>
<sc-if value="{{p.hasItems}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap">
<sc-if value="{{p.hasTon}}" hint-placeholder-val="{{ false }}"><span style="font-size: 12px; font-weight: 700; padding: 4px 8px; border-radius: 8px; background: #0b0d12; color: #ffc83d">{{p.tonText}}</span></sc-if>
<sc-for list="{{p.giftImgs}}" as="gi" hint-placeholder-count="0"><img src="{{gi.img}}" alt="{{gi.name}}" style="width: 30px; height: 30px; border-radius: 8px; background: #0b0d12"></sc-for>
</div>
</sc-if>
</div>
</sc-for>
</div>
</sc-if>

<sc-if value="{{showHistoryTab}}" hint-placeholder-val="{{ false }}">
<div style="display: flex; flex-direction: column; gap: 8px">
<sc-for list="{{history}}" as="h" hint-placeholder-count="3">
<div style="background: #151821; border: 1px solid #222838; border-radius: 16px; padding: 10px 12px; display: flex; flex-direction: column; gap: 6px">
<div style="display: flex; justify-content: space-between; font-size: 11px; color: #8a90a0"><span>\u0418\u0433\u0440\u0430 #{{h.id}}</span><span>{{h.time}}</span></div>
<div style="display: flex; align-items: center; gap: 10px">
<div style="width: 30px; height: 30px; border-radius: 10px; background: {{h.avBg}}; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 900; flex-shrink: 0">{{h.initial}}</div>
<span style="flex-grow: 1; min-width: 0; font-size: 14px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">{{h.name}}</span>
<span style="font-size: 12px; font-weight: 700; padding: 3px 8px; border-radius: 8px; background: #0b0d12; color: #c9cdd6">{{h.chance}}</span>
<span style="font-size: 14px; font-weight: 900; color: #2bd46b">+{{h.win}}</span>
</div>
</div>
</sc-for>
</div>
</sc-if>

<sc-if value="{{showWinner}}" hint-placeholder-val="{{ false }}">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba(5, 6, 10, 0.8); display: flex; justify-content: center; align-items: flex-start; padding-top: 200px">
<div role="dialog" aria-label="\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C" style="width: 320px; box-sizing: border-box; background: #151821; border: 2px solid {{winColor}}; border-radius: 28px; padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; animation: rkWin 0.45s ease-out; box-shadow: 0 0 60px {{winGlow}}">
<div style="font-size: 14px; font-weight: 700; color: #a3a8b5">\u041F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \xB7 \u0438\u0433\u0440\u0430 #{{winGameId}}</div>
<div style="width: 96px; height: 96px; border-radius: 50%; border: 3px solid {{winColor}}; box-sizing: border-box; background: {{winAvBg}}; display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: 900; overflow: hidden">
<sc-if value="{{winIsMe}}" hint-placeholder-val="{{ false }}"><img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{winNotMe}}" hint-placeholder-val="{{ true }}">{{winInitial}}</sc-if>
</div>
<div style="font-size: 30px; font-weight: 900; font-style: italic; line-height: 1.05; color: {{winColor}}">{{winTitle}}</div>
<div style="font-size: 14px; color: #c9cdd6">\u0428\u0430\u043D\u0441 \u0431\u044B\u043B {{winChance}}</div>
<div style="font-size: 26px; font-weight: 900; color: #ffc83d">+{{winAmount}}</div>
<div style="font-size: 12px; color: #8a90a0">\u0411\u0430\u043D\u043A {{winPot}}, \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F 5% \u0443\u0434\u0435\u0440\u0436\u0430\u043D\u0430</div>
<button type="button" onClick="{{closeWinner}}" style="width: 100%; height: 52px; border: 0; border-radius: 16px; margin-top: 6px; font-family: Rubik, system-ui, sans-serif; font-size: 17px; font-weight: 900; cursor: pointer; background: {{winColor}}; color: #0b0d12">\u041E\u043A</button>
</div>
</div>
</sc-if>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1300}}'>
var FEE = 0.05, COUNTDOWN = 12000, ARENA = 358, MAX_PLAYERS = 32;
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
var COLORS = ['#13a58a', '#c41a78', '#2a6fe0', '#d9730a', '#7c3fe0', '#c92a2d', '#078a8a', '#9a7a00', '#3a8a2a', '#b0368f'];

function r2(x) { return Math.round(x * 100) / 100; }
function fmt(x) { return (Math.floor(x * 100) / 100).toFixed(2) + ' TON'; }
function stakeOf(p) { var s = p.ton; p.gifts.forEach(function (k) { s += GIFTS[k].price; }); return r2(s); }
function nowTime() { var d = new Date(); return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); }

// \u0420\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0430 \u0430\u0440\u0435\u043D\u044B: \u043F\u043B\u043E\u0449\u0430\u0434\u044C \u0443\u0447\u0430\u0441\u0442\u043A\u0430 \u0438\u0433\u0440\u043E\u043A\u0430 = \u0435\u0433\u043E \u0434\u043E\u043B\u044F \u0432 \u0431\u0430\u043D\u043A\u0435
function layout(items, x, y, w, h) {
  if (!items.length) return [];
  if (items.length === 1) return [{ p: items[0].p, x: x, y: y, w: w, h: h }];
  var total = 0; items.forEach(function (it) { total += it.v; });
  var acc = 0, i = 0;
  while (i < items.length - 1 && acc + items[i].v / 2 < total / 2) { acc += items[i].v; i++; }
  if (i === 0) { acc = items[0].v; i = 1; }
  var a = items.slice(0, i), b = items.slice(i), f = acc / total;
  if (w >= h) return layout(a, x, y, w * f, h).concat(layout(b, x + w * f, y, w * (1 - f), h));
  return layout(a, x, y, w, h * f).concat(layout(b, x, y + h * f, w, h * (1 - f)));
}
function tilesFor(players) {
  var items = players.map(function (p) { return { p: p, v: stakeOf(p) }; }).filter(function (it) { return it.v > 0; })
    .sort(function (a, b) { return b.v - a.v; });
  return layout(items, 0, 0, ARENA, ARENA);
}

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'wait', t0: Date.now(), now: Date.now(), gameId: 1148666,
      players: [this.makeBot(0)], nextBot: 1,
      balance: 50, bet: 1, inv: ['cake', 'globe', 'record', 'rose'], giftPick: false,
      ball: { x: ARENA / 2, y: ARENA / 2 }, ballDur: 0, zoom: false, frozen: null,
      winner: null, showWinner: false, tab: 'players', online: 6938,
      history: [
        { id: 1148665, name: 'hill_best', chance: '99.79%', win: '46.08', av: COLORS[0], time: '18:56' },
        { id: 1148663, name: 'hill_best', chance: '49.81%', win: '7.16', av: COLORS[0], time: '18:56' },
        { id: 1148661, name: 'cntgf52', chance: '33.28%', win: '7.29', av: COLORS[2], time: '18:55' }
      ]
    };
    this.timers = [];
  }
  makeBot(i) {
    var gift = Math.random() < 0.5 ? BOT_GIFTS[Math.floor(Math.random() * BOT_GIFTS.length)] : null;
    return {
      id: 'b' + i + '_' + Date.now(), name: NAMES[Math.floor(Math.random() * NAMES.length)], me: false,
      ton: gift ? (Math.random() < 0.4 ? r2(0.1 + Math.random()) : 0) : r2(0.1 + Math.pow(Math.random(), 2) * 8),
      gifts: gift ? [gift] : [], av: COLORS[i % COLORS.length]
    };
  }
  componentDidMount() {
    var self = this;
    this.iv = setInterval(function () { self.tick(); }, 250);
  }
  componentWillUnmount() { clearInterval(this.iv); this.timers.forEach(clearTimeout); }
  later(fn, ms) { this.timers.push(setTimeout(fn, ms)); }

  tick() {
    var s = this.state, now = Date.now();
    var upd = { now: now, online: Math.max(6000, s.online + Math.round((Math.random() - 0.5) * 6)) };
    if (s.phase === 'wait' || s.phase === 'count') {
      var players = s.players;
      var joinChance = s.phase === 'wait' ? 0.06 : 0.05;
      if (players.length < 9 && Math.random() < joinChance) {
        players = players.concat([this.makeBot(s.nextBot)]);
        upd.players = players; upd.nextBot = s.nextBot + 1;
      }
      if (s.phase === 'wait' && players.length >= 2) { upd.phase = 'count'; upd.t0 = now; }
      if (s.phase === 'count' && now - s.t0 >= COUNTDOWN) { this.setState(upd); this.spin(); return; }
    }
    this.setState(upd);
  }

  spin() {
    var s = this.state, self = this;
    var tiles = tilesFor(s.players);
    var total = 0; s.players.forEach(function (p) { total += stakeOf(p); });
    var r = Math.random() * total, acc = 0, winTile = tiles[tiles.length - 1];
    for (var i = 0; i < tiles.length; i++) { acc += stakeOf(tiles[i].p); if (r < acc) { winTile = tiles[i]; break; } }
    var m = 10;
    var fx = winTile.x + m + Math.random() * Math.max(1, winTile.w - 2 * m);
    var fy = winTile.y + m + Math.random() * Math.max(1, winTile.h - 2 * m);
    var path = [];
    for (var j = 0; j < 9; j++) path.push({ x: 20 + Math.random() * (ARENA - 40), y: 20 + Math.random() * (ARENA - 40), d: 380 });
    path.push({ x: fx, y: fy, d: 900 });
    this.setState({ phase: 'spin', frozen: tiles, zoom: false, giftPick: false, ball: { x: ARENA / 2, y: ARENA / 2 }, ballDur: 0 });
    var t = 60;
    path.forEach(function (pt) {
      self.later(function () { self.setState({ ball: { x: pt.x, y: pt.y }, ballDur: pt.d }); }, t);
      t += pt.d;
    });
    this.later(function () { self.setState({ zoom: true }); }, t + 100);
    this.later(function () { self.finish(winTile.p, total); }, t + 1100);
  }

  finish(wp, total) {
    var s = this.state;
    var win = r2(total * (1 - FEE));
    var chance = (stakeOf(wp) / total * 100).toFixed(2) + '%';
    var upd = {
      phase: 'result', showWinner: true,
      winner: { name: wp.me ? '\u0422\u044B' : wp.name, me: wp.me, av: wp.av, chance: chance, win: win, pot: total, gameId: s.gameId },
      history: [{ id: s.gameId, name: wp.me ? '\u0422\u044B' : wp.name, chance: chance, win: win.toFixed(2), av: wp.av, time: nowTime() }].concat(s.history).slice(0, 15)
    };
    if (wp.me) upd.balance = r2(s.balance + win);
    this.setState(upd);
    var self = this;
    this.later(function () { if (self.state.phase === 'result') self.newRound(); }, 7000);
  }

  newRound() {
    this.timers.forEach(clearTimeout); this.timers = [];
    this.setState({
      phase: 'wait', t0: Date.now(), gameId: this.state.gameId + 1, players: [this.makeBot(this.state.nextBot)], nextBot: this.state.nextBot + 1,
      frozen: null, zoom: false, showWinner: false, winner: null, ball: { x: ARENA / 2, y: ARENA / 2 }, ballDur: 0
    });
  }

  joinWith(ton, gift) {
    var s = this.state;
    if (s.phase !== 'wait' && s.phase !== 'count') return;
    var players = s.players.slice();
    var idx = -1;
    players.forEach(function (p, i) { if (p.me) idx = i; });
    var me = idx >= 0 ? Object.assign({}, players[idx]) : { id: 'me', name: '\u0422\u044B', me: true, ton: 0, gifts: [], av: '#ffc83d' };
    me.ton = r2(me.ton + ton);
    if (gift) me.gifts = me.gifts.concat([gift]);
    if (idx >= 0) players[idx] = me; else players.push(me);
    var upd = { players: players };
    if (s.phase === 'wait' && players.length >= 2) { upd.phase = 'count'; upd.t0 = Date.now(); }
    return upd;
  }
  placeTon() {
    var s = this.state;
    if (s.bet > s.balance) return;
    var upd = this.joinWith(s.bet, null);
    if (!upd) return;
    upd.balance = r2(s.balance - s.bet);
    this.setState(upd);
  }
  placeGift(k) {
    var upd = this.joinWith(0, k);
    if (!upd) return;
    var inv = this.state.inv.slice(); inv.splice(inv.indexOf(k), 1);
    upd.inv = inv; upd.giftPick = false;
    this.setState(upd);
  }
  setBet(v) { this.setState({ bet: r2(Math.max(0.1, Math.min(v, Math.max(0.1, this.state.balance)))) }); }

  renderVals() {
    var self = this, s = this.state;
    var total = 0; s.players.forEach(function (p) { total += stakeOf(p); });
    var tiles = s.frozen || tilesFor(s.players);
    var joinable = s.phase === 'wait' || s.phase === 'count';
    var remain = Math.max(0, (COUNTDOWN - (s.now - s.t0)) / 1000);

    var tileVals = tiles.map(function (t, i) {
      var p = t.p, st = stakeOf(p), mn = Math.min(t.w, t.h);
      var av = Math.max(14, Math.min(110, mn * 0.5));
      return {
        x: t.x.toFixed(1), y: t.y.toFixed(1), w: t.w.toFixed(1), h: t.h.toFixed(1),
        bg: p.me ? '#b8860b' : COLORS[i % COLORS.length],
        border: p.me ? '3px solid #ffc83d' : '1px solid rgba(11,13,18,0.6)',
        av: av.toFixed(0), fs: Math.max(8, av * 0.42).toFixed(0), avBg: 'rgba(0,0,0,0.25)',
        initial: p.name.charAt(0).toUpperCase(), name: p.me ? '\u0422\u044B' : p.name, isMe: p.me, notMe: !p.me,
        chance: total ? (st / total * 100).toFixed(1) + '%' : '', showLabel: t.w > 70 && t.h > 90
      };
    });

    var owner = '';
    tiles.forEach(function (t) { if (s.ball.x >= t.x && s.ball.x <= t.x + t.w && s.ball.y >= t.y && s.ball.y <= t.y + t.h) owner = t.p.me ? '\u0442\u044B' : t.p.name; });

    var players = s.players.slice().sort(function (a, b) { return stakeOf(b) - stakeOf(a); }).map(function (p) {
      var st = stakeOf(p);
      return {
        name: p.me ? '\u0422\u044B' : p.name, initial: p.name.charAt(0).toUpperCase(), avBg: p.av, isMe: p.me, notMe: !p.me,
        border: p.me ? '#ffc83d' : '#222838',
        chance: total ? (st / total * 100).toFixed(2) + '%' : '\u2014', stakeText: st.toFixed(2),
        hasTon: p.ton > 0, tonText: p.ton.toFixed(2) + ' TON',
        hasItems: p.ton > 0 || p.gifts.length > 0,
        giftImgs: p.gifts.map(function (k) { return { img: GIFTS[k].img, name: GIFTS[k].name }; })
      };
    });

    var statusText = s.phase === 'wait' ? '\u0416\u0434\u0451\u043C \u0438\u0433\u0440\u043E\u043A\u043E\u0432' : (s.phase === 'count' ? '\u041D\u0430\u0447\u0430\u043B\u043E 00:' + ('0' + Math.ceil(remain)).slice(-2) : (s.phase === 'spin' ? '\u0418\u0434\u0451\u0442 \u0440\u043E\u0437\u044B\u0433\u0440\u044B\u0448' : '\u0420\u0430\u0443\u043D\u0434 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D'));
    var w = s.winner;
    var meIn = s.players.some(function (p) { return p.me; });

    return {
      online: s.online,
      balanceText: fmt(s.balance),
      playersCount: s.players.length,
      potText: fmt(total),
      tiles: tileVals,
      arenaStyle: s.zoom ? 'transform: scale(1.7); transform-origin: ' + s.ball.x.toFixed(0) + 'px ' + s.ball.y.toFixed(0) + 'px; transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform: scale(1); transition: transform 0.4s',
      showBall: s.phase === 'spin' || s.phase === 'result',
      ballStyle: 'left: ' + s.ball.x.toFixed(1) + 'px; top: ' + s.ball.y.toFixed(1) + 'px; transition: left ' + s.ballDur + 'ms cubic-bezier(0.45, 0, 0.55, 1), top ' + s.ballDur + 'ms cubic-bezier(0.45, 0, 0.55, 1)',
      ballOwner: owner || '...',
      isWaiting: s.phase === 'wait' && s.players.length < 2,
      statusText: statusText,
      statusColor: s.phase === 'count' ? (remain > 5 ? '#2bd46b' : '#ffc83d') : (s.phase === 'spin' ? '#ffc83d' : '#a3a8b5'),
      betText: fmt(s.bet),
      betMinus: function () { self.setBet(self.state.bet - 0.5); },
      betPlus: function () { self.setBet(self.state.bet + 0.5); },
      betHalf: function () { self.setBet(self.state.bet / 2); },
      betDouble: function () { self.setBet(self.state.bet * 2); },
      joinDisabled: !joinable,
      tonBtnBg: joinable && s.bet <= s.balance ? '#ffc83d' : '#1d2230',
      tonBtnColor: joinable && s.bet <= s.balance ? '#1a1300' : '#6c7282',
      tonBtnText: !joinable ? '\u0420\u0430\u0443\u043D\u0434 \u0438\u0434\u0451\u0442' : (s.bet > s.balance ? '\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 TON' : (meIn ? '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ' + s.bet.toFixed(2) : '\u0418\u0433\u0440\u0430\u0442\u044C ' + s.bet.toFixed(2))),
      placeTon: function () { self.placeTon(); },
      giftBtnColor: s.inv.length && joinable ? '#ffffff' : '#5a6070',
      openGift: function () { if (self.state.inv.length) self.setState({ giftPick: !self.state.giftPick }); },
      closeGift: function () { self.setState({ giftPick: false }); },
      showGiftPick: s.giftPick && joinable,
      gifts: s.inv.map(function (k) { var g = GIFTS[k]; return { name: g.name, img: g.img, priceText: g.price + ' TON', pick: function () { self.placeGift(k); } }; }),
      tabPlayers: function () { self.setState({ tab: 'players' }); },
      tabHistory: function () { self.setState({ tab: 'history' }); },
      playersSel: s.tab === 'players' ? 'true' : 'false', historySel: s.tab === 'history' ? 'true' : 'false',
      playersTabBg: s.tab === 'players' ? '#ffc83d' : 'transparent', playersTabColor: s.tab === 'players' ? '#1a1300' : '#a3a8b5',
      historyTabBg: s.tab === 'history' ? '#ffc83d' : 'transparent', historyTabColor: s.tab === 'history' ? '#1a1300' : '#a3a8b5',
      showPlayersTab: s.tab === 'players', showHistoryTab: s.tab === 'history',
      gameId: s.gameId,
      players: players,
      history: s.history.map(function (h) { return { id: h.id, name: h.name, chance: h.chance, win: h.win, time: h.time, avBg: h.av, initial: h.name.charAt(0).toUpperCase() }; }),
      showWinner: s.showWinner && !!w,
      winGameId: w ? w.gameId : '',
      winIsMe: w ? w.me : false, winNotMe: w ? !w.me : true,
      winInitial: w ? w.name.charAt(0).toUpperCase() : '',
      winAvBg: w ? w.av : '#222838',
      winTitle: w ? (w.me ? '\u0422\u042B \u0417\u0410\u0411\u0420\u0410\u041B \u0411\u0410\u041D\u041A!' : w.name) : '',
      winColor: w && w.me ? '#2bd46b' : '#ffc83d',
      winGlow: w && w.me ? 'rgba(43,212,107,0.35)' : 'rgba(255,200,61,0.25)',
      winChance: w ? w.chance : '',
      winAmount: w ? fmt(w.win) : '',
      winPot: w ? fmt(w.pot) : '',
      closeWinner: function () { self.newRound(); }
    };
  }
}
<\/script>
</body>
</html>
`;var lt=window.Telegram&&window.Telegram.WebApp,j0=100,jc={get(){try{let t=parseFloat(localStorage.getItem("rk_balance"));return isNaN(t)?j0:t}catch{return j0}},set(t){try{localStorage.setItem("rk_balance",String(Math.round(t*100)/100))}catch{}}};window.RK={wallet:jc,user:lt&&lt.initDataUnsafe&&lt.initDataUnsafe.user||null};if(lt){lt.ready(),lt.expand();try{lt.setHeaderColor("#0b0d12"),lt.setBackgroundColor("#0b0d12")}catch{}try{lt.disableVerticalSwipes&&lt.disableVerticalSwipes()}catch{}}document.addEventListener("click",t=>{if(lt&&lt.HapticFeedback&&t.target.closest&&t.target.closest("button, a"))try{lt.HapticFeedback.impactOccurred("light")}catch{}},!0);var Vn={"16b8be03ec4054a9ad560c5be1c9ab9e":"banner-crash.jpg","88b023f22e2d3006641849bb168e073d":"banner-cases.jpg","63c10368990e8788e655de65d5a9b515":"banner-upgrade.jpg",b81dc491ff982e1892b4eeeb94570e3c:"banner-mines.jpg","661884b648dd965ea69af44ea8c7ee95":"avatar.jpg",a8d1e2a1f1626c9b8edd4755d9c32150:"rocket.png","29f965541d768edadf1aad890a105f4f":"space.jpg",ac9e83f513d62d0c7fc3250c8a2d1f89:"candle.svg","1f689ff254757e970266197964c5d390":"lolpop.svg","9b7049b84c84b25ce8e457f56c837c42":"calendar.svg",b4c8d4f914ed6e253c933045ab9e3461:"hypno.svg","808ef5efdbeb6b276f70430b220f760b":"bells.svg","6ef5ecbeb712d1b1d752a33d1e9c279d":"cake.svg","6e3628fac94b5266f3b64cea9c5fe7ee":"globe.svg",c2c0de4f1d0a4ed1dd2df84eff4c7f73:"berry.svg","45ac385132ce7b83da133306d9a330f8":"muffin.svg","8f4c023d08704d2319e54c9872a8c46d":"record.svg",fe01a5a2d2ff76e0192e008ed6267558:"tophat.svg",ef580f1649ad89b5e268954da6ea30b2:"dring.svg","5bb7da32fc8a6f8dbe91cf7cedc20c65":"lpotion.svg","734e25b54462cda990767f69381d8355":"rose.svg",c02bc9477e447f6f71962df1fc7a399a:"bear.svg","4826a2db621709393534f8feae3d3f4a":"signet.svg","5efc0b426406d53e3b649c727079f26d":"watch.svg",e562d84d61312007f5108ab64cbfe6f9:"iongem.svg","923c4583ef32f1e6549c08d5a1839d4c":"peach.svg","500977bc4572974cf066e4c08b276369":"cap.svg",a64ccb23ba5a5ab0f1f789ab412cf3af:"pepe.svg",bb8c4faf5d5477b7abe934698601360a:"none.svg"};function Wh(t){return t.replace(/\/_blob\/([0-9a-f]{32})/g,(e,a)=>Vn[a]?"assets/"+Vn[a]:e)}function $h(t){return t.replace(/position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba\(5, 6, 10, ([0-9.]+)\); display: flex; justify-content: center; align-items: flex-start; padding-top: \d+px/g,"position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, $1); display: flex; justify-content: center; align-items: center; padding: 16px")}var Rc={};window.rkThumb=function(t,e){let a=t.toLowerCase().replace(/[^a-z0-9]/g,""),l="https://fragment.com/file/gifts/"+a+"/thumb.webp",i="https://nft.fragment.com/gift/"+a+"-1.webp";return Rc[l]=i,Rc[i]=e.replace(/\/_blob\/([0-9a-f]{32})/,(n,u)=>Vn[u]?"assets/"+Vn[u]:n),l};window.addEventListener("error",t=>{let e=t.target;if(e&&e.tagName==="IMG"){let a=Rc[e.getAttribute("src")];a&&e.setAttribute("src",a)}},!0);function rl(t,e){let a=$h(Wh(e)),l=new DOMParser().parseFromString(a,"text/html"),i=l.querySelector("x-dc"),n=i.querySelector("helmet"),u=[];n&&(n.querySelectorAll("link, style").forEach(b=>u.push(b.outerHTML)),n.remove());let f=Array.from(i.children)[0],c=l.querySelector("script[data-dc-script]").textContent,r=new Function("DCLogic",c+`
;return Component;`)(Nc);return{name:t,head:u,root:f,Logic:r}}var Nc=class{constructor(e){this.props=e||{},this.state={},this._host=null}setState(e,a){typeof e=="function"&&(e=e(this.state,this.props)),Object.assign(this.state,e),e&&"balance"in e&&jc.set(e.balance),this._host?this._host.forceUpdate(a):a&&a()}forceUpdate(e){this._host&&this._host.forceUpdate(e)}},Hc=t=>t.replace(/-([a-z])/g,(e,a)=>a.toUpperCase());function q0(t,e){if(t=t.trim(),t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(/^-?\d+(\.\d+)?$/.test(t))return parseFloat(t);let a=t.split("."),l;for(let i=e.length-1;i>=0;i--)if(e[i]&&a[0]in e[i]){l=e[i][a[0]];break}for(let i=1;i<a.length&&l!=null;i++)l=l[a[i]];return l}var Ih=/\{\{([^}]+)\}\}/g;function Zn(t,e){let a=t.match(/^\s*\{\{([^}]+)\}\}\s*$/);return a?q0(a[1],e):t.replace(Ih,(l,i)=>{let n=q0(i,e);return n==null?"":String(n)})}function Ph(t){let e={};return t.split(";").forEach(a=>{let l=a.indexOf(":");if(l<0)return;let i=a.slice(0,l).trim(),n=a.slice(l+1).trim();if(i){if(i.startsWith("--")){e[i]=n;return}i.startsWith("-webkit-")&&(i="Webkit"+Hc(i.slice(8)).replace(/^./,u=>u.toUpperCase()).slice(0)),e[i.startsWith("Webkit")?i:Hc(i)]=n}}),e}function Q0(t,e,a,l){if(t.nodeType===3){let b=t.nodeValue;return!b.trim()&&b.indexOf(`
`)!==-1?null:b.indexOf("{{")===-1?b:Zn(b,e)}if(t.nodeType!==1)return null;let i=t.tagName.toLowerCase(),n=b=>Array.from(t.childNodes).map((g,d)=>Q0(g,b,a,d)).filter(g=>g!=null&&g!==!1);if(i==="sc-if")return Zn(t.getAttribute("value")||"",e)?Nt.default.createElement(Nt.default.Fragment,{key:l},...n(e)):null;if(i==="sc-for"){let b=Zn(t.getAttribute("list")||"",e)||[],g=t.getAttribute("as")||"item";return Nt.default.createElement(Nt.default.Fragment,{key:l},...b.map((d,h)=>Nt.default.createElement(Nt.default.Fragment,{key:h},...n(e.concat([{[g]:d,$index:h}])))))}let u=t.namespaceURI==="http://www.w3.org/2000/svg",f={key:l};for(let b of Array.from(t.attributes)){let g=b.name,d=b.value,h=d.indexOf("{{")===-1?d:Zn(d,e);if(!g.startsWith("hint-")){if(g==="class")g="className";else if(g==="for")g="htmlFor";else if(g==="style"){f.style=Ph(String(h));continue}else if(g.startsWith("on")){let v="on"+g.charAt(2).toUpperCase()+g.slice(3);v==="Onclick"&&(v="onClick"),g.toLowerCase()==="onclick"&&(v="onClick"),g.toLowerCase()==="oninput"&&(v="onChange"),typeof h=="function"&&(f[v]=h);continue}else u&&g.indexOf("-")!==-1&&!g.startsWith("aria-")&&!g.startsWith("data-")?g=Hc(g):g==="tabindex"?g="tabIndex":g==="readonly"?g="readOnly":g==="disabled"&&(h=h===!0||h===""||h==="disabled"||h==="true");f[g]=h}}if(i==="a"){let g=(t.getAttribute("href")||"").match(/([A-Za-z]+)\.dc\.html$/);f.href="#",f.onClick=d=>{d.preventDefault(),g&&a(g[1])}}i==="input"&&"value"in f&&!f.onChange&&(f.readOnly=!0);let c=n(e);return{img:1,input:1,br:1,hr:1,meta:1,link:1}[i]?Nt.default.createElement(i,f):Nt.default.createElement(i,f,...c)}var Uc=class extends Nt.default.Component{constructor(e){super(e),this.logic=new e.screen.Logic({}),this.logic.state&&"balance"in this.logic.state&&(this.logic.state.balance=jc.get()),this.logic._host=this}componentDidMount(){this.logic.componentDidMount&&this.logic.componentDidMount()}componentWillUnmount(){this.logic.componentWillUnmount&&this.logic.componentWillUnmount(),this.logic._host=null}render(){let e=this.logic.renderVals?this.logic.renderVals():{};return Q0(this.props.screen.root,[e],this.props.nav,"root")}},Kn={Main:rl("Main",D0),Crash:rl("Crash",R0),Upgrade:rl("Upgrade",N0),Cases:rl("Cases",H0),Mines:rl("Mines",U0),Pvp:rl("Pvp",G0)},L0=new Set;Object.values(Kn).forEach(t=>t.head.forEach(e=>{if(L0.has(e))return;L0.add(e);let a=document.createElement("div");a.innerHTML=e;let l=a.firstElementChild;l.tagName==="STYLE"&&/body\{/.test(l.textContent)&&(l.textContent=l.textContent.replace(/body\{[^}]*\}/,"")),document.head.appendChild(l)}));function Y0(){let t=(location.hash||"").replace("#/","");return Kn[t]?t:"Main"}var Gc=class extends Nt.default.Component{constructor(e){super(e),this.state={route:Y0()},this.nav=this.nav.bind(this),this.back=()=>this.nav("Main")}componentDidMount(){window.addEventListener("hashchange",()=>this.setState({route:Y0()})),lt&&lt.BackButton&&lt.BackButton.onClick(this.back),this.syncBack()}componentDidUpdate(){this.syncBack()}syncBack(){!lt||!lt.BackButton||(this.state.route==="Main"?lt.BackButton.hide():lt.BackButton.show())}nav(e){Kn[e]&&(location.hash=e==="Main"?"":"#/"+e,this.setState({route:e}),window.scrollTo(0,0))}render(){let e=this.state.route;return Nt.default.createElement(Uc,{key:e,screen:Kn[e],nav:this.nav})}};function Z0(){let t=document.getElementById("app"),e=Math.min(window.innerWidth,480);t.style.zoom=String(e/390)}window.addEventListener("resize",Z0);Z0();(0,X0.createRoot)(document.getElementById("app")).render(Nt.default.createElement(Gc));})();
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
