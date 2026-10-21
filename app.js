(()=>{var V0=Object.create;var Lf=Object.defineProperty;var K0=Object.getOwnPropertyDescriptor;var J0=Object.getOwnPropertyNames;var W0=Object.getPrototypeOf,F0=Object.prototype.hasOwnProperty;var we=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(l){throw e=0,l}};var $0=(t,e,l,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of J0(e))!F0.call(t,i)&&i!==l&&Lf(t,i,{get:()=>e[i],enumerable:!(a=K0(e,i))||a.enumerable});return t};var jf=(t,e,l)=>(l=t!=null?V0(W0(t)):{},$0(e||!t||!t.__esModule?Lf(l,"default",{value:t,enumerable:!0}):l,t));var If=we(w=>{"use strict";var Fn=Symbol.for("react.transitional.element"),I0=Symbol.for("react.portal"),P0=Symbol.for("react.fragment"),tp=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),lp=Symbol.for("react.consumer"),ap=Symbol.for("react.context"),ip=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),up=Symbol.for("react.memo"),Vf=Symbol.for("react.lazy"),cp=Symbol.for("react.activity"),Yf=Symbol.iterator;function fp(t){return t===null||typeof t!="object"?null:(t=Yf&&t[Yf]||t["@@iterator"],typeof t=="function"?t:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jf=Object.assign,Wf={};function xl(t,e,l){this.props=t,this.context=e,this.refs=Wf,this.updater=l||Kf}xl.prototype.isReactComponent={};xl.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xl.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ff(){}Ff.prototype=xl.prototype;function $n(t,e,l){this.props=t,this.context=e,this.refs=Wf,this.updater=l||Kf}var In=$n.prototype=new Ff;In.constructor=$n;Jf(In,xl.prototype);In.isPureReactComponent=!0;var Xf=Array.isArray;function Wn(){}var X={H:null,A:null,T:null,S:null},$f=Object.prototype.hasOwnProperty;function Pn(t,e,l){var a=l.ref;return{$$typeof:Fn,type:t,key:e,ref:a!==void 0?a:null,props:l}}function op(t,e){return Pn(t.type,e,t.props)}function tu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fn}function sp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(l){return e[l]})}var Qf=/\/+/g;function Jn(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sp(""+t.key):e.toString(36)}function rp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Wn,Wn):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function vl(t,e,l,a,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(n){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case Fn:case I0:u=!0;break;case Vf:return u=t._init,vl(u(t._payload),e,l,a,i)}}if(u)return i=i(t),u=a===""?"."+Jn(t,0):a,Xf(i)?(l="",u!=null&&(l=u.replace(Qf,"$&/")+"/"),vl(i,e,l,"",function(r){return r})):i!=null&&(tu(i)&&(i=op(i,l+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Qf,"$&/")+"/")+u)),e.push(i)),1;u=0;var c=a===""?".":a+":";if(Xf(t))for(var f=0;f<t.length;f++)a=t[f],n=c+Jn(a,f),u+=vl(a,e,l,n,i);else if(f=fp(t),typeof f=="function")for(t=f.call(t),f=0;!(a=t.next()).done;)a=a.value,n=c+Jn(a,f++),u+=vl(a,e,l,n,i);else if(n==="object"){if(typeof t.then=="function")return vl(rp(t),e,l,a,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function pi(t,e,l){if(t==null)return t;var a=[],i=0;return vl(t,a,"","",function(n){return e.call(l,n,i++)}),a}function dp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(l){(t._status===0||t._status===-1)&&(t._status=1,t._result=l)},function(l){(t._status===0||t._status===-1)&&(t._status=2,t._result=l)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pp={map:pi,forEach:function(t,e,l){pi(t,function(){e.apply(this,arguments)},l)},count:function(t){var e=0;return pi(t,function(){e++}),e},toArray:function(t){return pi(t,function(e){return e})||[]},only:function(t){if(!tu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};w.Activity=cp;w.Children=pp;w.Component=xl;w.Fragment=P0;w.Profiler=ep;w.PureComponent=$n;w.StrictMode=tp;w.Suspense=np;w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X;w.__COMPILER_RUNTIME={__proto__:null,c:function(t){return X.H.useMemoCache(t)}};w.cache=function(t){return function(){return t.apply(null,arguments)}};w.cacheSignal=function(){return null};w.cloneElement=function(t,e,l){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var a=Jf({},t.props),i=t.key;if(e!=null)for(n in e.key!==void 0&&(i=""+e.key),e)!$f.call(e,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&e.ref===void 0||(a[n]=e[n]);var n=arguments.length-2;if(n===1)a.children=l;else if(1<n){for(var u=Array(n),c=0;c<n;c++)u[c]=arguments[c+2];a.children=u}return Pn(t.type,i,a)};w.createContext=function(t){return t={$$typeof:ap,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:lp,_context:t},t};w.createElement=function(t,e,l){var a,i={},n=null;if(e!=null)for(a in e.key!==void 0&&(n=""+e.key),e)$f.call(e,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(i[a]=e[a]);var u=arguments.length-2;if(u===1)i.children=l;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];i.children=c}if(t&&t.defaultProps)for(a in u=t.defaultProps,u)i[a]===void 0&&(i[a]=u[a]);return Pn(t,n,i)};w.createRef=function(){return{current:null}};w.forwardRef=function(t){return{$$typeof:ip,render:t}};w.isValidElement=tu;w.lazy=function(t){return{$$typeof:Vf,_payload:{_status:-1,_result:t},_init:dp}};w.memo=function(t,e){return{$$typeof:up,type:t,compare:e===void 0?null:e}};w.startTransition=function(t){var e=X.T,l={};X.T=l;try{var a=t(),i=X.S;i!==null&&i(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Wn,Zf)}catch(n){Zf(n)}finally{e!==null&&l.types!==null&&(e.types=l.types),X.T=e}};w.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()};w.use=function(t){return X.H.use(t)};w.useActionState=function(t,e,l){return X.H.useActionState(t,e,l)};w.useCallback=function(t,e){return X.H.useCallback(t,e)};w.useContext=function(t){return X.H.useContext(t)};w.useDebugValue=function(){};w.useDeferredValue=function(t,e){return X.H.useDeferredValue(t,e)};w.useEffect=function(t,e){return X.H.useEffect(t,e)};w.useEffectEvent=function(t){return X.H.useEffectEvent(t)};w.useId=function(){return X.H.useId()};w.useImperativeHandle=function(t,e,l){return X.H.useImperativeHandle(t,e,l)};w.useInsertionEffect=function(t,e){return X.H.useInsertionEffect(t,e)};w.useLayoutEffect=function(t,e){return X.H.useLayoutEffect(t,e)};w.useMemo=function(t,e){return X.H.useMemo(t,e)};w.useOptimistic=function(t,e){return X.H.useOptimistic(t,e)};w.useReducer=function(t,e,l){return X.H.useReducer(t,e,l)};w.useRef=function(t){return X.H.useRef(t)};w.useState=function(t){return X.H.useState(t)};w.useSyncExternalStore=function(t,e,l){return X.H.useSyncExternalStore(t,e,l)};w.useTransition=function(){return X.H.useTransition()};w.version="19.2.8"});var hi=we((tg,Pf)=>{"use strict";Pf.exports=If()});var oo=we(K=>{"use strict";function iu(t,e){var l=t.length;t.push(e);t:for(;0<l;){var a=l-1>>>1,i=t[a];if(0<gi(i,e))t[a]=e,t[l]=i,l=a;else break t}}function Ft(t){return t.length===0?null:t[0]}function bi(t){if(t.length===0)return null;var e=t[0],l=t.pop();if(l!==e){t[0]=l;t:for(var a=0,i=t.length,n=i>>>1;a<n;){var u=2*(a+1)-1,c=t[u],f=u+1,r=t[f];if(0>gi(c,l))f<i&&0>gi(r,c)?(t[a]=r,t[f]=l,a=f):(t[a]=c,t[u]=l,a=u);else if(f<i&&0>gi(r,l))t[a]=r,t[f]=l,a=f;else break t}}return e}function gi(t,e){var l=t.sortIndex-e.sortIndex;return l!==0?l:t.id-e.id}K.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(to=performance,K.unstable_now=function(){return to.now()}):(eu=Date,eo=eu.now(),K.unstable_now=function(){return eu.now()-eo});var to,eu,eo,ae=[],Me=[],hp=1,Ht=null,ht=3,nu=!1,ra=!1,da=!1,uu=!1,io=typeof setTimeout=="function"?setTimeout:null,no=typeof clearTimeout=="function"?clearTimeout:null,lo=typeof setImmediate!="undefined"?setImmediate:null;function mi(t){for(var e=Ft(Me);e!==null;){if(e.callback===null)bi(Me);else if(e.startTime<=t)bi(Me),e.sortIndex=e.expirationTime,iu(ae,e);else break;e=Ft(Me)}}function cu(t){if(da=!1,mi(t),!ra)if(Ft(ae)!==null)ra=!0,Tl||(Tl=!0,Sl());else{var e=Ft(Me);e!==null&&fu(cu,e.startTime-t)}}var Tl=!1,pa=-1,uo=5,co=-1;function fo(){return uu?!0:!(K.unstable_now()-co<uo)}function lu(){if(uu=!1,Tl){var t=K.unstable_now();co=t;var e=!0;try{t:{ra=!1,da&&(da=!1,no(pa),pa=-1),nu=!0;var l=ht;try{e:{for(mi(t),Ht=Ft(ae);Ht!==null&&!(Ht.expirationTime>t&&fo());){var a=Ht.callback;if(typeof a=="function"){Ht.callback=null,ht=Ht.priorityLevel;var i=a(Ht.expirationTime<=t);if(t=K.unstable_now(),typeof i=="function"){Ht.callback=i,mi(t),e=!0;break e}Ht===Ft(ae)&&bi(ae),mi(t)}else bi(ae);Ht=Ft(ae)}if(Ht!==null)e=!0;else{var n=Ft(Me);n!==null&&fu(cu,n.startTime-t),e=!1}}break t}finally{Ht=null,ht=l,nu=!1}e=void 0}}finally{e?Sl():Tl=!1}}}var Sl;typeof lo=="function"?Sl=function(){lo(lu)}:typeof MessageChannel!="undefined"?(au=new MessageChannel,ao=au.port2,au.port1.onmessage=lu,Sl=function(){ao.postMessage(null)}):Sl=function(){io(lu,0)};var au,ao;function fu(t,e){pa=io(function(){t(K.unstable_now())},e)}K.unstable_IdlePriority=5;K.unstable_ImmediatePriority=1;K.unstable_LowPriority=4;K.unstable_NormalPriority=3;K.unstable_Profiling=null;K.unstable_UserBlockingPriority=2;K.unstable_cancelCallback=function(t){t.callback=null};K.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):uo=0<t?Math.floor(1e3/t):5};K.unstable_getCurrentPriorityLevel=function(){return ht};K.unstable_next=function(t){switch(ht){case 1:case 2:case 3:var e=3;break;default:e=ht}var l=ht;ht=e;try{return t()}finally{ht=l}};K.unstable_requestPaint=function(){uu=!0};K.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var l=ht;ht=t;try{return e()}finally{ht=l}};K.unstable_scheduleCallback=function(t,e,l){var a=K.unstable_now();switch(typeof l=="object"&&l!==null?(l=l.delay,l=typeof l=="number"&&0<l?a+l:a):l=a,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=l+i,t={id:hp++,callback:e,priorityLevel:t,startTime:l,expirationTime:i,sortIndex:-1},l>a?(t.sortIndex=l,iu(Me,t),Ft(ae)===null&&t===Ft(Me)&&(da?(no(pa),pa=-1):da=!0,fu(cu,l-a))):(t.sortIndex=i,iu(ae,t),ra||nu||(ra=!0,Tl||(Tl=!0,Sl()))),t};K.unstable_shouldYield=fo;K.unstable_wrapCallback=function(t){var e=ht;return function(){var l=ht;ht=e;try{return t.apply(this,arguments)}finally{ht=l}}}});var ro=we((lg,so)=>{"use strict";so.exports=oo()});var ho=we(mt=>{"use strict";var gp=hi();function po(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ee(){}var gt={d:{f:Ee,r:function(){throw Error(po(522))},D:Ee,C:Ee,L:Ee,m:Ee,X:Ee,S:Ee,M:Ee},p:0,findDOMNode:null},mp=Symbol.for("react.portal");function bp(t,e,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mp,key:a==null?null:""+a,children:t,containerInfo:e,implementation:l}}var ha=gp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function yi(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gt;mt.createPortal=function(t,e){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(po(299));return bp(t,e,null,l)};mt.flushSync=function(t){var e=ha.T,l=gt.p;try{if(ha.T=null,gt.p=2,t)return t()}finally{ha.T=e,gt.p=l,gt.d.f()}};mt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,gt.d.C(t,e))};mt.prefetchDNS=function(t){typeof t=="string"&&gt.d.D(t)};mt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var l=e.as,a=yi(l,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,n=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;l==="style"?gt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:i,fetchPriority:n}):l==="script"&&gt.d.X(t,{crossOrigin:a,integrity:i,fetchPriority:n,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};mt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var l=yi(e.as,e.crossOrigin);gt.d.M(t,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&gt.d.M(t)};mt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var l=e.as,a=yi(l,e.crossOrigin);gt.d.L(t,l,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};mt.preloadModule=function(t,e){if(typeof t=="string")if(e){var l=yi(e.as,e.crossOrigin);gt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else gt.d.m(t)};mt.requestFormReset=function(t){gt.d.r(t)};mt.unstable_batchedUpdates=function(t,e){return t(e)};mt.useFormState=function(t,e,l){return ha.H.useFormState(t,e,l)};mt.useFormStatus=function(){return ha.H.useHostTransitionStatus()};mt.version="19.2.8"});var bo=we((ig,mo)=>{"use strict";function go(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(go)}catch(t){console.error(t)}}go(),mo.exports=ho()});var _0=we(Qn=>{"use strict";var nt=ro(),Xs=hi(),yp=bo();function y(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Qs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ti(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function Zs(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vs(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yo(t){if(ti(t)!==t)throw Error(y(188))}function vp(t){var e=t.alternate;if(!e){if(e=ti(t),e===null)throw Error(y(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var n=i.alternate;if(n===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===l)return yo(i),t;if(n===a)return yo(i),e;n=n.sibling}throw Error(y(188))}if(l.return!==a.return)l=i,a=n;else{for(var u=!1,c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u){for(c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u)throw Error(y(189))}}if(l.alternate!==a)throw Error(y(190))}if(l.tag!==3)throw Error(y(188));return l.stateNode.current===l?t:e}function Ks(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Ks(t),e!==null)return e;t=t.sibling}return null}var V=Object.assign,xp=Symbol.for("react.element"),vi=Symbol.for("react.transitional.element"),Ta=Symbol.for("react.portal"),Al=Symbol.for("react.fragment"),Js=Symbol.for("react.strict_mode"),Yu=Symbol.for("react.profiler"),Ws=Symbol.for("react.consumer"),re=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),Qu=Symbol.for("react.suspense_list"),qc=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Zu=Symbol.for("react.activity"),Sp=Symbol.for("react.memo_cache_sentinel"),vo=Symbol.iterator;function ga(t){return t===null||typeof t!="object"?null:(t=vo&&t[vo]||t["@@iterator"],typeof t=="function"?t:null)}var Tp=Symbol.for("react.client.reference");function Vu(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Al:return"Fragment";case Yu:return"Profiler";case Js:return"StrictMode";case Xu:return"Suspense";case Qu:return"SuspenseList";case Zu:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ta:return"Portal";case re:return t.displayName||"Context";case Ws:return(t._context.displayName||"Context")+".Consumer";case Uc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qc:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case Ce:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}var za=Array.isArray,z=Xs.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=yp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,il={pending:!1,data:null,method:null,action:null},Ku=[],_l=-1;function ee(t){return{current:t}}function ft(t){0>_l||(t.current=Ku[_l],Ku[_l]=null,_l--)}function Y(t,e){_l++,Ku[_l]=t.current,t.current=e}var te=ee(null),La=ee(null),qe=ee(null),Ii=ee(null);function Pi(t,e){switch(Y(qe,e),Y(La,t),Y(te,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Es(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Es(e),t=g0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ft(te),Y(te,t)}function Kl(){ft(te),ft(La),ft(qe)}function Ju(t){t.memoizedState!==null&&Y(Ii,t);var e=te.current,l=g0(e,t.type);e!==l&&(Y(La,t),Y(te,l))}function tn(t){La.current===t&&(ft(te),ft(La)),Ii.current===t&&(ft(Ii),$a._currentValue=il)}var ou,xo;function tl(t){if(ou===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);ou=e&&e[1]||"",xo=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ou+t+xo}var su=!1;function ru(t,e){if(!t||su)return"";su=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(h){var d=h}Reflect.construct(t,[],g)}else{try{g.call()}catch(h){d=h}t.call(g.prototype)}}else{try{throw Error()}catch(h){d=h}(g=t())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(h){if(h&&d&&typeof h.stack=="string")return[h.stack,d.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),u=n[0],c=n[1];if(u&&c){var f=u.split(`
`),r=c.split(`
`);for(i=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;if(a===f.length||i===r.length)for(a=f.length-1,i=r.length-1;1<=a&&0<=i&&f[a]!==r[i];)i--;for(;1<=a&&0<=i;a--,i--)if(f[a]!==r[i]){if(a!==1||i!==1)do if(a--,i--,0>i||f[a]!==r[i]){var m=`
`+f[a].replace(" at new "," at ");return t.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",t.displayName)),m}while(1<=a&&0<=i);break}}}finally{su=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?tl(l):""}function zp(t,e){switch(t.tag){case 26:case 27:case 5:return tl(t.type);case 16:return tl("Lazy");case 13:return t.child!==e&&e!==null?tl("Suspense Fallback"):tl("Suspense");case 19:return tl("SuspenseList");case 0:case 15:return ru(t.type,!1);case 11:return ru(t.type.render,!1);case 1:return ru(t.type,!0);case 31:return tl("Activity");default:return""}}function So(t){try{var e="",l=null;do e+=zp(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Wu=Object.prototype.hasOwnProperty,Gc=nt.unstable_scheduleCallback,du=nt.unstable_cancelCallback,wp=nt.unstable_shouldYield,Mp=nt.unstable_requestPaint,_t=nt.unstable_now,Ep=nt.unstable_getCurrentPriorityLevel,Fs=nt.unstable_ImmediatePriority,$s=nt.unstable_UserBlockingPriority,en=nt.unstable_NormalPriority,Cp=nt.unstable_LowPriority,Is=nt.unstable_IdlePriority,Ap=nt.log,_p=nt.unstable_setDisableYieldValue,ei=null,Ot=null;function Be(t){if(typeof Ap=="function"&&_p(t),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(ei,t)}catch{}}var kt=Math.clz32?Math.clz32:Dp,Op=Math.log,kp=Math.LN2;function Dp(t){return t>>>=0,t===0?32:31-(Op(t)/kp|0)|0}var xi=256,Si=262144,Ti=4194304;function el(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function An(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var i=0,n=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?i=el(a):(u&=c,u!==0?i=el(u):l||(l=c&~t,l!==0&&(i=el(l))))):(c=a&~n,c!==0?i=el(c):u!==0?i=el(u):l||(l=a&~t,l!==0&&(i=el(l)))),i===0?0:e!==0&&e!==i&&(e&n)===0&&(n=i&-i,l=e&-e,n>=l||n===32&&(l&4194048)!==0)?e:i}function li(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Bp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ps(){var t=Ti;return Ti<<=1,(Ti&62914560)===0&&(Ti=4194304),t}function pu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function ai(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Rp(t,e,l,a,i,n){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,r=t.hiddenUpdates;for(l=u&~l;0<l;){var m=31-kt(l),g=1<<m;c[m]=0,f[m]=-1;var d=r[m];if(d!==null)for(r[m]=null,m=0;m<d.length;m++){var h=d[m];h!==null&&(h.lane&=-536870913)}l&=~g}a!==0&&tr(t,a,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(u&~e))}function tr(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-kt(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function er(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-kt(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function lr(t,e){var l=e&-e;return l=(l&42)!==0?1:Lc(l),(l&(t.suspendedLanes|e))!==0?0:l}function Lc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function jc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ar(){var t=N.p;return t!==0?t:(t=window.event,t===void 0?32:E0(t.type))}function To(t,e){var l=N.p;try{return N.p=t,e()}finally{N.p=l}}var $e=Math.random().toString(36).slice(2),st="__reactFiber$"+$e,zt="__reactProps$"+$e,ia="__reactContainer$"+$e,Fu="__reactEvents$"+$e,Np="__reactListeners$"+$e,Hp="__reactHandles$"+$e,zo="__reactResources$"+$e,ii="__reactMarker$"+$e;function Yc(t){delete t[st],delete t[zt],delete t[Fu],delete t[Np],delete t[Hp]}function Ol(t){var e=t[st];if(e)return e;for(var l=t.parentNode;l;){if(e=l[ia]||l[st]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=ks(t);t!==null;){if(l=t[st])return l;t=ks(t)}return e}t=l,l=t.parentNode}return null}function na(t){if(t=t[st]||t[ia]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function wa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(y(33))}function Ll(t){var e=t[zo];return e||(e=t[zo]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ct(t){t[ii]=!0}var ir=new Set,nr={};function hl(t,e){Jl(t,e),Jl(t+"Capture",e)}function Jl(t,e){for(nr[t]=e,t=0;t<e.length;t++)ir.add(e[t])}var Up=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wo={},Mo={};function qp(t){return Wu.call(Mo,t)?!0:Wu.call(wo,t)?!1:Up.test(t)?Mo[t]=!0:(wo[t]=!0,!1)}function Ui(t,e,l){if(qp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function zi(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ie(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function qt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ur(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gp(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a!="undefined"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,n=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(u){l=""+u,n.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $u(t){if(!t._valueTracker){var e=ur(t)?"checked":"value";t._valueTracker=Gp(t,e,""+t[e])}}function cr(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=ur(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function ln(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lp=/[\n"\\]/g;function jt(t){return t.replace(Lp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Iu(t,e,l,a,i,n,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+qt(e)):t.value!==""+qt(e)&&(t.value=""+qt(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?Pu(t,u,qt(e)):l!=null?Pu(t,u,qt(l)):a!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+qt(c):t.removeAttribute("name")}function fr(t,e,l,a,i,n,u,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||e!=null)){$u(t);return}l=l!=null?""+qt(l):"",e=e!=null?""+qt(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a!=null?a:i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),$u(t)}function Pu(t,e,l){e==="number"&&ln(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function jl(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+qt(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function or(t,e,l){if(e!=null&&(e=""+qt(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+qt(l):""}function sr(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(y(92));if(za(a)){if(1<a.length)throw Error(y(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=qt(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),$u(t)}function Wl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var jp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eo(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||jp.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function rr(t,e,l){if(e!=null&&typeof e!="object")throw Error(y(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&Eo(t,i,a)}else for(var n in e)e.hasOwnProperty(n)&&Eo(t,n,e[n])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(t){return Xp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function de(){}var tc=null;function Qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kl=null,Yl=null;function Co(t){var e=na(t);if(e&&(t=e.stateNode)){var l=t[zt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Iu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+jt(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[zt]||null;if(!i)throw Error(y(90));Iu(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&cr(a)}break t;case"textarea":or(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&jl(t,!!l.multiple,e,!1)}}}var hu=!1;function dr(t,e,l){if(hu)return t(e,l);hu=!0;try{var a=t(e);return a}finally{if(hu=!1,(kl!==null||Yl!==null)&&(Ln(),kl&&(e=kl,t=Yl,Yl=kl=null,Co(e),t)))for(e=0;e<t.length;e++)Co(t[e])}}function ja(t,e){var l=t.stateNode;if(l===null)return null;var a=l[zt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(y(231,e,typeof l));return l}var be=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),ec=!1;if(be)try{zl={},Object.defineProperty(zl,"passive",{get:function(){ec=!0}}),window.addEventListener("test",zl,zl),window.removeEventListener("test",zl,zl)}catch{ec=!1}var zl,Re=null,Zc=null,Gi=null;function pr(){if(Gi)return Gi;var t,e=Zc,l=e.length,a,i="value"in Re?Re.value:Re.textContent,n=i.length;for(t=0;t<l&&e[t]===i[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===i[n-a];a++);return Gi=i.slice(t,1<a?1-a:void 0)}function Li(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wi(){return!0}function Ao(){return!1}function wt(t){function e(l,a,i,n,u){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?wi:Ao,this.isPropagationStopped=Ao,this}return V(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),e}var gl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=wt(gl),ni=V({},gl,{view:0,detail:0}),Qp=wt(ni),gu,mu,ma,On=V({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ma&&(ma&&t.type==="mousemove"?(gu=t.screenX-ma.screenX,mu=t.screenY-ma.screenY):mu=gu=0,ma=t),gu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),_o=wt(On),Zp=V({},On,{dataTransfer:0}),Vp=wt(Zp),Kp=V({},ni,{relatedTarget:0}),bu=wt(Kp),Jp=V({},gl,{animationName:0,elapsedTime:0,pseudoElement:0}),Wp=wt(Jp),Fp=V({},gl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$p=wt(Fp),Ip=V({},gl,{data:0}),Oo=wt(Ip),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=e1[t])?!!e[t]:!1}function Vc(){return l1}var a1=V({},ni,{key:function(t){if(t.key){var e=Pp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Li(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(t){return t.type==="keypress"?Li(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Li(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i1=wt(a1),n1=V({},On,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ko=wt(n1),u1=V({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),c1=wt(u1),f1=V({},gl,{propertyName:0,elapsedTime:0,pseudoElement:0}),o1=wt(f1),s1=V({},On,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r1=wt(s1),d1=V({},gl,{newState:0,oldState:0}),p1=wt(d1),h1=[9,13,27,32],Kc=be&&"CompositionEvent"in window,Ca=null;be&&"documentMode"in document&&(Ca=document.documentMode);var g1=be&&"TextEvent"in window&&!Ca,hr=be&&(!Kc||Ca&&8<Ca&&11>=Ca),Do=" ",Bo=!1;function gr(t,e){switch(t){case"keyup":return h1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dl=!1;function m1(t,e){switch(t){case"compositionend":return mr(e);case"keypress":return e.which!==32?null:(Bo=!0,Do);case"textInput":return t=e.data,t===Do&&Bo?null:t;default:return null}}function b1(t,e){if(Dl)return t==="compositionend"||!Kc&&gr(t,e)?(t=pr(),Gi=Zc=Re=null,Dl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hr&&e.locale!=="ko"?null:e.data;default:return null}}var y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ro(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!y1[t.type]:e==="textarea"}function br(t,e,l,a){kl?Yl?Yl.push(a):Yl=[a]:kl=a,e=Sn(e,"onChange"),0<e.length&&(l=new _n("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Aa=null,Ya=null;function v1(t){d0(t,0)}function kn(t){var e=wa(t);if(cr(e))return t}function No(t,e){if(t==="change")return e}var yr=!1;be&&(be?(Ei="oninput"in document,Ei||(yu=document.createElement("div"),yu.setAttribute("oninput","return;"),Ei=typeof yu.oninput=="function"),Mi=Ei):Mi=!1,yr=Mi&&(!document.documentMode||9<document.documentMode));var Mi,Ei,yu;function Ho(){Aa&&(Aa.detachEvent("onpropertychange",vr),Ya=Aa=null)}function vr(t){if(t.propertyName==="value"&&kn(Ya)){var e=[];br(e,Ya,t,Qc(t)),dr(v1,e)}}function x1(t,e,l){t==="focusin"?(Ho(),Aa=e,Ya=l,Aa.attachEvent("onpropertychange",vr)):t==="focusout"&&Ho()}function S1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kn(Ya)}function T1(t,e){if(t==="click")return kn(e)}function z1(t,e){if(t==="input"||t==="change")return kn(e)}function w1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bt=typeof Object.is=="function"?Object.is:w1;function Xa(t,e){if(Bt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!Wu.call(e,i)||!Bt(t[i],e[i]))return!1}return!0}function Uo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qo(t,e){var l=Uo(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Uo(l)}}function xr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ln(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=ln(t.document)}return e}function Jc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var M1=be&&"documentMode"in document&&11>=document.documentMode,Bl=null,lc=null,_a=null,ac=!1;function Go(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ac||Bl==null||Bl!==ln(a)||(a=Bl,"selectionStart"in a&&Jc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),_a&&Xa(_a,a)||(_a=a,a=Sn(lc,"onSelect"),0<a.length&&(e=new _n("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Bl)))}function Pe(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var Rl={animationend:Pe("Animation","AnimationEnd"),animationiteration:Pe("Animation","AnimationIteration"),animationstart:Pe("Animation","AnimationStart"),transitionrun:Pe("Transition","TransitionRun"),transitionstart:Pe("Transition","TransitionStart"),transitioncancel:Pe("Transition","TransitionCancel"),transitionend:Pe("Transition","TransitionEnd")},vu={},Tr={};be&&(Tr=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function ml(t){if(vu[t])return vu[t];if(!Rl[t])return t;var e=Rl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Tr)return vu[t]=e[l];return t}var zr=ml("animationend"),wr=ml("animationiteration"),Mr=ml("animationstart"),E1=ml("transitionrun"),C1=ml("transitionstart"),A1=ml("transitioncancel"),Er=ml("transitionend"),Cr=new Map,ic="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ic.push("scrollEnd");function Wt(t,e){Cr.set(t,e),hl(e,[t])}var an=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ut=[],Nl=0,Wc=0;function Dn(){for(var t=Nl,e=Wc=Nl=0;e<t;){var l=Ut[e];Ut[e++]=null;var a=Ut[e];Ut[e++]=null;var i=Ut[e];Ut[e++]=null;var n=Ut[e];if(Ut[e++]=null,a!==null&&i!==null){var u=a.pending;u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i}n!==0&&Ar(l,i,n)}}function Bn(t,e,l,a){Ut[Nl++]=t,Ut[Nl++]=e,Ut[Nl++]=l,Ut[Nl++]=a,Wc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Fc(t,e,l,a){return Bn(t,e,l,a),nn(t)}function bl(t,e){return Bn(t,null,null,e),nn(t)}function Ar(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,n=t.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&e!==null&&(i=31-kt(l),t=n.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=l|536870912),n):null}function nn(t){if(50<qa)throw qa=0,Mc=null,Error(y(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Hl={};function _1(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,l,a){return new _1(t,e,l,a)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function he(t,e){var l=t.alternate;return l===null?(l=Ct(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function _r(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ji(t,e,l,a,i,n){var u=0;if(a=t,typeof t=="function")$c(t)&&(u=1);else if(typeof t=="string")u=Dh(t,l,te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Zu:return t=Ct(31,l,e,i),t.elementType=Zu,t.lanes=n,t;case Al:return nl(l.children,i,n,e);case Js:u=8,i|=24;break;case Yu:return t=Ct(12,l,e,i|2),t.elementType=Yu,t.lanes=n,t;case Xu:return t=Ct(13,l,e,i),t.elementType=Xu,t.lanes=n,t;case Qu:return t=Ct(19,l,e,i),t.elementType=Qu,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case re:u=10;break t;case Ws:u=9;break t;case Uc:u=11;break t;case qc:u=14;break t;case Ce:u=16,a=null;break t}u=29,l=Error(y(130,t===null?"null":typeof t,"")),a=null}return e=Ct(u,l,e,i),e.elementType=t,e.type=a,e.lanes=n,e}function nl(t,e,l,a){return t=Ct(7,t,a,e),t.lanes=l,t}function xu(t,e,l){return t=Ct(6,t,null,e),t.lanes=l,t}function Or(t){var e=Ct(18,null,null,0);return e.stateNode=t,e}function Su(t,e,l){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Lo=new WeakMap;function Yt(t,e){if(typeof t=="object"&&t!==null){var l=Lo.get(t);return l!==void 0?l:(e={value:t,source:e,stack:So(e)},Lo.set(t,e),e)}return{value:t,source:e,stack:So(e)}}var Ul=[],ql=0,un=null,Qa=0,Gt=[],Lt=0,Ke=null,$t=1,It="";function oe(t,e){Ul[ql++]=Qa,Ul[ql++]=un,un=t,Qa=e}function kr(t,e,l){Gt[Lt++]=$t,Gt[Lt++]=It,Gt[Lt++]=Ke,Ke=t;var a=$t;t=It;var i=32-kt(a)-1;a&=~(1<<i),l+=1;var n=32-kt(e)+i;if(30<n){var u=i-i%5;n=(a&(1<<u)-1).toString(32),a>>=u,i-=u,$t=1<<32-kt(e)+i|l<<i|a,It=n+t}else $t=1<<n|l<<i|a,It=t}function Ic(t){t.return!==null&&(oe(t,1),kr(t,1,0))}function Pc(t){for(;t===un;)un=Ul[--ql],Ul[ql]=null,Qa=Ul[--ql],Ul[ql]=null;for(;t===Ke;)Ke=Gt[--Lt],Gt[Lt]=null,It=Gt[--Lt],Gt[Lt]=null,$t=Gt[--Lt],Gt[Lt]=null}function Dr(t,e){Gt[Lt++]=$t,Gt[Lt++]=It,Gt[Lt++]=Ke,$t=e.id,It=e.overflow,Ke=t}var rt=null,Z=null,k=!1,Ge=null,Xt=!1,nc=Error(y(519));function Je(t){var e=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Za(Yt(e,t)),nc}function jo(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[st]=t,e[zt]=a,l){case"dialog":C("cancel",e),C("close",e);break;case"iframe":case"object":case"embed":C("load",e);break;case"video":case"audio":for(l=0;l<Wa.length;l++)C(Wa[l],e);break;case"source":C("error",e);break;case"img":case"image":case"link":C("error",e),C("load",e);break;case"details":C("toggle",e);break;case"input":C("invalid",e),fr(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":C("invalid",e);break;case"textarea":C("invalid",e),sr(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||h0(e.textContent,l)?(a.popover!=null&&(C("beforetoggle",e),C("toggle",e)),a.onScroll!=null&&C("scroll",e),a.onScrollEnd!=null&&C("scrollend",e),a.onClick!=null&&(e.onclick=de),e=!0):e=!1,e||Je(t,!0)}function Yo(t){for(rt=t.return;rt;)switch(rt.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:rt=rt.return}}function wl(t){if(t!==rt)return!1;if(!k)return Yo(t),k=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Oc(t.type,t.memoizedProps)),l=!l),l&&Z&&Je(t),Yo(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));Z=Os(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));Z=Os(t)}else e===27?(e=Z,Ie(t.type)?(t=Rc,Rc=null,Z=t):Z=e):Z=rt?Zt(t.stateNode.nextSibling):null;return!0}function ol(){Z=rt=null,k=!1}function Tu(){var t=Ge;return t!==null&&(St===null?St=t:St.push.apply(St,t),Ge=null),t}function Za(t){Ge===null?Ge=[t]:Ge.push(t)}var uc=ee(null),yl=null,pe=null;function _e(t,e,l){Y(uc,e._currentValue),e._currentValue=l}function ge(t){t._currentValue=uc.current,ft(uc)}function cc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function fc(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=i;for(var f=0;f<e.length;f++)if(c.context===e[f]){n.lanes|=l,c=n.alternate,c!==null&&(c.lanes|=l),cc(n.return,l,t),a||(u=null);break t}n=c.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(y(341));u.lanes|=l,n=u.alternate,n!==null&&(n.lanes|=l),cc(u,l,t),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function ua(t,e,l,a){t=null;for(var i=e,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(y(387));if(u=u.memoizedProps,u!==null){var c=i.type;Bt(i.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(i===Ii.current){if(u=i.alternate,u===null)throw Error(y(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push($a):t=[$a])}i=i.return}t!==null&&fc(e,t,l,a),e.flags|=262144}function cn(t){for(t=t.firstContext;t!==null;){if(!Bt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sl(t){yl=t,pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dt(t){return Br(yl,t)}function Ci(t,e){return yl===null&&sl(t),Br(t,e)}function Br(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},pe===null){if(t===null)throw Error(y(308));pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else pe=pe.next=e;return l}var O1=typeof AbortController!="undefined"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},k1=nt.unstable_scheduleCallback,D1=nt.unstable_NormalPriority,et={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new O1,data:new Map,refCount:0}}function ui(t){t.refCount--,t.refCount===0&&k1(D1,function(){t.controller.abort()})}var Oa=null,oc=0,Fl=0,Xl=null;function B1(t,e){if(Oa===null){var l=Oa=[];oc=0,Fl=Ef(),Xl={status:"pending",value:void 0,then:function(a){l.push(a)}}}return oc++,e.then(Xo,Xo),e}function Xo(){if(--oc===0&&Oa!==null){Xl!==null&&(Xl.status="fulfilled");var t=Oa;Oa=null,Fl=0,Xl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function R1(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Qo=z.S;z.S=function(t,e){Kd=_t(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&B1(t,e),Qo!==null&&Qo(t,e)};var ul=ee(null);function ef(){var t=ul.current;return t!==null?t:j.pooledCache}function Yi(t,e){e===null?Y(ul,ul.current):Y(ul,e.pool)}function Rr(){var t=ef();return t===null?null:{parent:et._currentValue,pool:t}}var ca=Error(y(460)),lf=Error(y(474)),Rn=Error(y(542)),fn={then:function(){}};function Zo(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nr(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(de,de),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ko(t),t;default:if(typeof e.status=="string")e.then(de,de);else{if(t=j,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ko(t),t}throw cl=e,ca}}function ll(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(cl=l,ca):l}}var cl=null;function Vo(){if(cl===null)throw Error(y(459));var t=cl;return cl=null,t}function Ko(t){if(t===ca||t===Rn)throw Error(y(483))}var Ql=null,Va=0;function Ai(t){var e=Va;return Va+=1,Ql===null&&(Ql=[]),Nr(Ql,t,e)}function ba(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function _i(t,e){throw e.$$typeof===xp?Error(y(525)):(t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Hr(t){function e(s,o){if(t){var p=s.deletions;p===null?(s.deletions=[o],s.flags|=16):p.push(o)}}function l(s,o){if(!t)return null;for(;o!==null;)e(s,o),o=o.sibling;return null}function a(s){for(var o=new Map;s!==null;)s.key!==null?o.set(s.key,s):o.set(s.index,s),s=s.sibling;return o}function i(s,o){return s=he(s,o),s.index=0,s.sibling=null,s}function n(s,o,p){return s.index=p,t?(p=s.alternate,p!==null?(p=p.index,p<o?(s.flags|=67108866,o):p):(s.flags|=67108866,o)):(s.flags|=1048576,o)}function u(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function c(s,o,p,b){return o===null||o.tag!==6?(o=xu(p,s.mode,b),o.return=s,o):(o=i(o,p),o.return=s,o)}function f(s,o,p,b){var S=p.type;return S===Al?m(s,o,p.props.children,b,p.key):o!==null&&(o.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ce&&ll(S)===o.type)?(o=i(o,p.props),ba(o,p),o.return=s,o):(o=ji(p.type,p.key,p.props,null,s.mode,b),ba(o,p),o.return=s,o)}function r(s,o,p,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==p.containerInfo||o.stateNode.implementation!==p.implementation?(o=Su(p,s.mode,b),o.return=s,o):(o=i(o,p.children||[]),o.return=s,o)}function m(s,o,p,b,S){return o===null||o.tag!==7?(o=nl(p,s.mode,b,S),o.return=s,o):(o=i(o,p),o.return=s,o)}function g(s,o,p){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=xu(""+o,s.mode,p),o.return=s,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case vi:return p=ji(o.type,o.key,o.props,null,s.mode,p),ba(p,o),p.return=s,p;case Ta:return o=Su(o,s.mode,p),o.return=s,o;case Ce:return o=ll(o),g(s,o,p)}if(za(o)||ga(o))return o=nl(o,s.mode,p,null),o.return=s,o;if(typeof o.then=="function")return g(s,Ai(o),p);if(o.$$typeof===re)return g(s,Ci(s,o),p);_i(s,o)}return null}function d(s,o,p,b){var S=o!==null?o.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return S!==null?null:c(s,o,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:return p.key===S?f(s,o,p,b):null;case Ta:return p.key===S?r(s,o,p,b):null;case Ce:return p=ll(p),d(s,o,p,b)}if(za(p)||ga(p))return S!==null?null:m(s,o,p,b,null);if(typeof p.then=="function")return d(s,o,Ai(p),b);if(p.$$typeof===re)return d(s,o,Ci(s,p),b);_i(s,p)}return null}function h(s,o,p,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return s=s.get(p)||null,c(o,s,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case vi:return s=s.get(b.key===null?p:b.key)||null,f(o,s,b,S);case Ta:return s=s.get(b.key===null?p:b.key)||null,r(o,s,b,S);case Ce:return b=ll(b),h(s,o,p,b,S)}if(za(b)||ga(b))return s=s.get(p)||null,m(o,s,b,S,null);if(typeof b.then=="function")return h(s,o,p,Ai(b),S);if(b.$$typeof===re)return h(s,o,p,Ci(o,b),S);_i(o,b)}return null}function v(s,o,p,b){for(var S=null,D=null,x=o,E=o=0,_=null;x!==null&&E<p.length;E++){x.index>E?(_=x,x=null):_=x.sibling;var B=d(s,x,p[E],b);if(B===null){x===null&&(x=_);break}t&&x&&B.alternate===null&&e(s,x),o=n(B,o,E),D===null?S=B:D.sibling=B,D=B,x=_}if(E===p.length)return l(s,x),k&&oe(s,E),S;if(x===null){for(;E<p.length;E++)x=g(s,p[E],b),x!==null&&(o=n(x,o,E),D===null?S=x:D.sibling=x,D=x);return k&&oe(s,E),S}for(x=a(x);E<p.length;E++)_=h(x,s,E,p[E],b),_!==null&&(t&&_.alternate!==null&&x.delete(_.key===null?E:_.key),o=n(_,o,E),D===null?S=_:D.sibling=_,D=_);return t&&x.forEach(function(ze){return e(s,ze)}),k&&oe(s,E),S}function T(s,o,p,b){if(p==null)throw Error(y(151));for(var S=null,D=null,x=o,E=o=0,_=null,B=p.next();x!==null&&!B.done;E++,B=p.next()){x.index>E?(_=x,x=null):_=x.sibling;var ze=d(s,x,B.value,b);if(ze===null){x===null&&(x=_);break}t&&x&&ze.alternate===null&&e(s,x),o=n(ze,o,E),D===null?S=ze:D.sibling=ze,D=ze,x=_}if(B.done)return l(s,x),k&&oe(s,E),S;if(x===null){for(;!B.done;E++,B=p.next())B=g(s,B.value,b),B!==null&&(o=n(B,o,E),D===null?S=B:D.sibling=B,D=B);return k&&oe(s,E),S}for(x=a(x);!B.done;E++,B=p.next())B=h(x,s,E,B.value,b),B!==null&&(t&&B.alternate!==null&&x.delete(B.key===null?E:B.key),o=n(B,o,E),D===null?S=B:D.sibling=B,D=B);return t&&x.forEach(function(Z0){return e(s,Z0)}),k&&oe(s,E),S}function q(s,o,p,b){if(typeof p=="object"&&p!==null&&p.type===Al&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case vi:t:{for(var S=p.key;o!==null;){if(o.key===S){if(S=p.type,S===Al){if(o.tag===7){l(s,o.sibling),b=i(o,p.props.children),b.return=s,s=b;break t}}else if(o.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ce&&ll(S)===o.type){l(s,o.sibling),b=i(o,p.props),ba(b,p),b.return=s,s=b;break t}l(s,o);break}else e(s,o);o=o.sibling}p.type===Al?(b=nl(p.props.children,s.mode,b,p.key),b.return=s,s=b):(b=ji(p.type,p.key,p.props,null,s.mode,b),ba(b,p),b.return=s,s=b)}return u(s);case Ta:t:{for(S=p.key;o!==null;){if(o.key===S)if(o.tag===4&&o.stateNode.containerInfo===p.containerInfo&&o.stateNode.implementation===p.implementation){l(s,o.sibling),b=i(o,p.children||[]),b.return=s,s=b;break t}else{l(s,o);break}else e(s,o);o=o.sibling}b=Su(p,s.mode,b),b.return=s,s=b}return u(s);case Ce:return p=ll(p),q(s,o,p,b)}if(za(p))return v(s,o,p,b);if(ga(p)){if(S=ga(p),typeof S!="function")throw Error(y(150));return p=S.call(p),T(s,o,p,b)}if(typeof p.then=="function")return q(s,o,Ai(p),b);if(p.$$typeof===re)return q(s,o,Ci(s,p),b);_i(s,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,o!==null&&o.tag===6?(l(s,o.sibling),b=i(o,p),b.return=s,s=b):(l(s,o),b=xu(p,s.mode,b),b.return=s,s=b),u(s)):l(s,o)}return function(s,o,p,b){try{Va=0;var S=q(s,o,p,b);return Ql=null,S}catch(x){if(x===ca||x===Rn)throw x;var D=Ct(29,x,null,s.mode);return D.lanes=b,D.return=s,D}}}var rl=Hr(!0),Ur=Hr(!1),Ae=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Le(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function je(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(R&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=nn(t),Ar(t,null,l),e}return Bn(t,a,e,l),nn(t)}function ka(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,er(t,l)}}function zu(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,l=l.next}while(l!==null);n===null?i=n=e:n=n.next=e}else i=n=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var rc=!1;function Da(){if(rc){var t=Xl;if(t!==null)throw t}}function Ba(t,e,l,a){rc=!1;var i=t.updateQueue;Ae=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,r=f.next;f.next=null,u===null?n=r:u.next=r,u=f;var m=t.alternate;m!==null&&(m=m.updateQueue,c=m.lastBaseUpdate,c!==u&&(c===null?m.firstBaseUpdate=r:c.next=r,m.lastBaseUpdate=f))}if(n!==null){var g=i.baseState;u=0,m=r=f=null,c=n;do{var d=c.lane&-536870913,h=d!==c.lane;if(h?(O&d)===d:(a&d)===d){d!==0&&d===Fl&&(rc=!0),m!==null&&(m=m.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var v=t,T=c;d=e;var q=l;switch(T.tag){case 1:if(v=T.payload,typeof v=="function"){g=v.call(q,g,d);break t}g=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=T.payload,d=typeof v=="function"?v.call(q,g,d):v,d==null)break t;g=V({},g,d);break t;case 2:Ae=!0}}d=c.callback,d!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[d]:h.push(d))}else h={lane:d,tag:c.tag,payload:c.payload,callback:c.callback,next:null},m===null?(r=m=h,f=g):m=m.next=h,u|=d;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;h=c,c=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);m===null&&(f=g),i.baseState=f,i.firstBaseUpdate=r,i.lastBaseUpdate=m,n===null&&(i.shared.lanes=0),Fe|=u,t.lanes=u,t.memoizedState=g}}function qr(t,e){if(typeof t!="function")throw Error(y(191,t));t.call(e)}function Gr(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)qr(l[t],e)}var $l=ee(null),on=ee(0);function Jo(t,e){t=Se,Y(on,t),Y($l,e),Se=t|e.baseLanes}function dc(){Y(on,Se),Y($l,$l.current)}function nf(){Se=on.current,ft($l),ft(on)}var Rt=ee(null),Qt=null;function Oe(t){var e=t.alternate;Y($,$.current&1),Y(Rt,t),Qt===null&&(e===null||$l.current!==null||e.memoizedState!==null)&&(Qt=t)}function pc(t){Y($,$.current),Y(Rt,t),Qt===null&&(Qt=t)}function Lr(t){t.tag===22?(Y($,$.current),Y(Rt,t),Qt===null&&(Qt=t)):ke(t)}function ke(){Y($,$.current),Y(Rt,Rt.current)}function Et(t){ft(Rt),Qt===t&&(Qt=null),ft($)}var $=ee(0);function sn(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Dc(l)||Bc(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ye=0,M=null,L=null,P=null,rn=!1,Zl=!1,dl=!1,dn=0,Ka=0,Vl=null,N1=0;function W(){throw Error(y(321))}function uf(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Bt(t[l],e[l]))return!1;return!0}function cf(t,e,l,a,i,n){return ye=n,M=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,z.H=t===null||t.memoizedState===null?bd:yf,dl=!1,n=l(a,i),dl=!1,Zl&&(n=Yr(e,l,a,i)),jr(t),n}function jr(t){z.H=Ja;var e=L!==null&&L.next!==null;if(ye=0,P=L=M=null,rn=!1,Ka=0,Vl=null,e)throw Error(y(300));t===null||lt||(t=t.dependencies,t!==null&&cn(t)&&(lt=!0))}function Yr(t,e,l,a){M=t;var i=0;do{if(Zl&&(Vl=null),Ka=0,Zl=!1,25<=i)throw Error(y(301));if(i+=1,P=L=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}z.H=yd,n=e(l,a)}while(Zl);return n}function H1(){var t=z.H,e=t.useState()[0];return e=typeof e.then=="function"?ci(e):e,t=t.useState()[0],(L!==null?L.memoizedState:null)!==t&&(M.flags|=1024),e}function ff(){var t=dn!==0;return dn=0,t}function of(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function sf(t){if(rn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}rn=!1}ye=0,P=L=M=null,Zl=!1,Ka=dn=0,Vl=null}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?M.memoizedState=P=t:P=P.next=t,P}function I(){if(L===null){var t=M.alternate;t=t!==null?t.memoizedState:null}else t=L.next;var e=P===null?M.memoizedState:P.next;if(e!==null)P=e,L=t;else{if(t===null)throw M.alternate===null?Error(y(467)):Error(y(310));L=t,t={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},P===null?M.memoizedState=P=t:P=P.next=t}return P}function Nn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ci(t){var e=Ka;return Ka+=1,Vl===null&&(Vl=[]),t=Nr(Vl,t,e),e=M,(P===null?e.memoizedState:P.next)===null&&(e=e.alternate,z.H=e===null||e.memoizedState===null?bd:yf),t}function Hn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ci(t);if(t.$$typeof===re)return dt(t)}throw Error(y(438,String(t)))}function rf(t){var e=null,l=M.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=M.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Nn(),M.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Sp;return e.index++,l}function ve(t,e){return typeof e=="function"?e(t):e}function Xi(t){var e=I();return df(e,L,t)}function df(t,e,l){var a=t.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=l;var i=t.baseQueue,n=a.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}e.baseQueue=i=n,a.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{e=i.next;var c=u=null,f=null,r=e,m=!1;do{var g=r.lane&-536870913;if(g!==r.lane?(O&g)===g:(ye&g)===g){var d=r.revertLane;if(d===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),g===Fl&&(m=!0);else if((ye&d)===d){r=r.next,d===Fl&&(m=!0);continue}else g={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},f===null?(c=f=g,u=n):f=f.next=g,M.lanes|=d,Fe|=d;g=r.action,dl&&l(n,g),n=r.hasEagerState?r.eagerState:l(n,g)}else d={lane:g,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},f===null?(c=f=d,u=n):f=f.next=d,M.lanes|=g,Fe|=g;r=r.next}while(r!==null&&r!==e);if(f===null?u=n:f.next=c,!Bt(n,t.memoizedState)&&(lt=!0,m&&(l=Xl,l!==null)))throw l;t.memoizedState=n,t.baseState=u,t.baseQueue=f,a.lastRenderedState=n}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function wu(t){var e=I(),l=e.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,n=e.memoizedState;if(i!==null){l.pending=null;var u=i=i.next;do n=t(n,u.action),u=u.next;while(u!==i);Bt(n,e.memoizedState)||(lt=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),l.lastRenderedState=n}return[n,a]}function Xr(t,e,l){var a=M,i=I(),n=k;if(n){if(l===void 0)throw Error(y(407));l=l()}else l=e();var u=!Bt((L||i).memoizedState,l);if(u&&(i.memoizedState=l,lt=!0),i=i.queue,pf(Vr.bind(null,a,i,t),[t]),i.getSnapshot!==e||u||P!==null&&P.memoizedState.tag&1){if(a.flags|=2048,Il(9,{destroy:void 0},Zr.bind(null,a,i,l,e),null),j===null)throw Error(y(349));n||(ye&127)!==0||Qr(a,e,l)}return l}function Qr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=M.updateQueue,e===null?(e=Nn(),M.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Zr(t,e,l,a){e.value=l,e.getSnapshot=a,Kr(e)&&Jr(t)}function Vr(t,e,l){return l(function(){Kr(e)&&Jr(t)})}function Kr(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Bt(t,l)}catch{return!0}}function Jr(t){var e=bl(t,2);e!==null&&Tt(e,t,2)}function hc(t){var e=bt();if(typeof t=="function"){var l=t;if(t=l(),dl){Be(!0);try{l()}finally{Be(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:t},e}function Wr(t,e,l,a){return t.baseState=l,df(t,L,typeof a=="function"?a:ve)}function U1(t,e,l,a,i){if(qn(t))throw Error(y(485));if(t=e.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};z.T!==null?l(!0):n.isTransition=!1,a(n),l=e.pending,l===null?(n.next=e.pending=n,Fr(e,n)):(n.next=l.next,e.pending=l.next=n)}}function Fr(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var n=z.T,u={};z.T=u;try{var c=l(i,a),f=z.S;f!==null&&f(u,c),Wo(t,e,c)}catch(r){gc(t,e,r)}finally{n!==null&&u.types!==null&&(n.types=u.types),z.T=n}}else try{n=l(i,a),Wo(t,e,n)}catch(r){gc(t,e,r)}}function Wo(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Fo(t,e,a)},function(a){return gc(t,e,a)}):Fo(t,e,l)}function Fo(t,e,l){e.status="fulfilled",e.value=l,$r(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Fr(t,l)))}function gc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,$r(e),e=e.next;while(e!==a)}t.action=null}function $r(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ir(t,e){return e}function $o(t,e){if(k){var l=j.formState;if(l!==null){t:{var a=M;if(k){if(Z){e:{for(var i=Z,n=Xt;i.nodeType!==8;){if(!n){i=null;break e}if(i=Zt(i.nextSibling),i===null){i=null;break e}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){Z=Zt(i.nextSibling),a=i.data==="F!";break t}}Je(a)}a=!1}a&&(e=l[0])}}return l=bt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},l.queue=a,l=hd.bind(null,M,a),a.dispatch=l,a=hc(!1),n=bf.bind(null,M,!1,a.queue),a=bt(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=U1.bind(null,M,i,n,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function Io(t){var e=I();return Pr(e,L,t)}function Pr(t,e,l){if(e=df(t,e,Ir)[0],t=Xi(ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=ci(e)}catch(u){throw u===ca?Rn:u}else a=e;e=I();var i=e.queue,n=i.dispatch;return l!==e.memoizedState&&(M.flags|=2048,Il(9,{destroy:void 0},q1.bind(null,i,l),null)),[a,n,t]}function q1(t,e){t.action=e}function Po(t){var e=I(),l=L;if(l!==null)return Pr(e,l,t);I(),e=e.memoizedState,l=I();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Il(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=M.updateQueue,e===null&&(e=Nn(),M.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function td(){return I().memoizedState}function Qi(t,e,l,a){var i=bt();M.flags|=t,i.memoizedState=Il(1|e,{destroy:void 0},l,a===void 0?null:a)}function Un(t,e,l,a){var i=I();a=a===void 0?null:a;var n=i.memoizedState.inst;L!==null&&a!==null&&uf(a,L.memoizedState.deps)?i.memoizedState=Il(e,n,l,a):(M.flags|=t,i.memoizedState=Il(1|e,n,l,a))}function ts(t,e){Qi(8390656,8,t,e)}function pf(t,e){Un(2048,8,t,e)}function G1(t){M.flags|=4;var e=M.updateQueue;if(e===null)e=Nn(),M.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function ed(t){var e=I().memoizedState;return G1({ref:e,nextImpl:t}),function(){if((R&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}function ld(t,e){return Un(4,2,t,e)}function ad(t,e){return Un(4,4,t,e)}function id(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nd(t,e,l){l=l!=null?l.concat([t]):null,Un(4,4,id.bind(null,e,t),l)}function hf(){}function ud(t,e){var l=I();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&uf(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function cd(t,e){var l=I();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&uf(e,a[1]))return a[0];if(a=t(),dl){Be(!0);try{t()}finally{Be(!1)}}return l.memoizedState=[a,e],a}function gf(t,e,l){return l===void 0||(ye&1073741824)!==0&&(O&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=Wd(),M.lanes|=t,Fe|=t,l)}function fd(t,e,l,a){return Bt(l,e)?l:$l.current!==null?(t=gf(t,l,a),Bt(t,e)||(lt=!0),t):(ye&42)===0||(ye&1073741824)!==0&&(O&261930)===0?(lt=!0,t.memoizedState=l):(t=Wd(),M.lanes|=t,Fe|=t,e)}function od(t,e,l,a,i){var n=N.p;N.p=n!==0&&8>n?n:8;var u=z.T,c={};z.T=c,bf(t,!1,e,l);try{var f=i(),r=z.S;if(r!==null&&r(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var m=R1(f,a);Ra(t,e,m,Dt(t))}else Ra(t,e,a,Dt(t))}catch(g){Ra(t,e,{then:function(){},status:"rejected",reason:g},Dt())}finally{N.p=n,u!==null&&c.types!==null&&(u.types=c.types),z.T=u}}function L1(){}function mc(t,e,l,a){if(t.tag!==5)throw Error(y(476));var i=sd(t).queue;od(t,i,e,il,l===null?L1:function(){return rd(t),l(a)})}function sd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:il,baseState:il,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:il},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function rd(t){var e=sd(t);e.next===null&&(e=t.alternate.memoizedState),Ra(t,e.next.queue,{},Dt())}function mf(){return dt($a)}function dd(){return I().memoizedState}function pd(){return I().memoizedState}function j1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Dt();t=Le(l);var a=je(e,t,l);a!==null&&(Tt(a,e,l),ka(a,e,l)),e={cache:tf()},t.payload=e;return}e=e.return}}function Y1(t,e,l){var a=Dt();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},qn(t)?gd(e,l):(l=Fc(t,e,l,a),l!==null&&(Tt(l,t,a),md(l,e,a)))}function hd(t,e,l){var a=Dt();Ra(t,e,l,a)}function Ra(t,e,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(qn(t))gd(e,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var u=e.lastRenderedState,c=n(u,l);if(i.hasEagerState=!0,i.eagerState=c,Bt(c,u))return Bn(t,e,i,0),j===null&&Dn(),!1}catch{}if(l=Fc(t,e,i,a),l!==null)return Tt(l,t,a),md(l,e,a),!0}return!1}function bf(t,e,l,a){if(a={lane:2,revertLane:Ef(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qn(t)){if(e)throw Error(y(479))}else e=Fc(t,l,a,2),e!==null&&Tt(e,t,2)}function qn(t){var e=t.alternate;return t===M||e!==null&&e===M}function gd(t,e){Zl=rn=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function md(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,er(t,l)}}var Ja={readContext:dt,use:Hn,useCallback:W,useContext:W,useEffect:W,useImperativeHandle:W,useLayoutEffect:W,useInsertionEffect:W,useMemo:W,useReducer:W,useRef:W,useState:W,useDebugValue:W,useDeferredValue:W,useTransition:W,useSyncExternalStore:W,useId:W,useHostTransitionStatus:W,useFormState:W,useActionState:W,useOptimistic:W,useMemoCache:W,useCacheRefresh:W};Ja.useEffectEvent=W;var bd={readContext:dt,use:Hn,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:ts,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Qi(4194308,4,id.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Qi(4194308,4,t,e)},useInsertionEffect:function(t,e){Qi(4,2,t,e)},useMemo:function(t,e){var l=bt();e=e===void 0?null:e;var a=t();if(dl){Be(!0);try{t()}finally{Be(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=bt();if(l!==void 0){var i=l(e);if(dl){Be(!0);try{l(e)}finally{Be(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Y1.bind(null,M,t),[a.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:function(t){t=hc(t);var e=t.queue,l=hd.bind(null,M,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:hf,useDeferredValue:function(t,e){var l=bt();return gf(l,t,e)},useTransition:function(){var t=hc(!1);return t=od.bind(null,M,t.queue,!0,!1),bt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=M,i=bt();if(k){if(l===void 0)throw Error(y(407));l=l()}else{if(l=e(),j===null)throw Error(y(349));(O&127)!==0||Qr(a,e,l)}i.memoizedState=l;var n={value:l,getSnapshot:e};return i.queue=n,ts(Vr.bind(null,a,n,t),[t]),a.flags|=2048,Il(9,{destroy:void 0},Zr.bind(null,a,n,l,e),null),l},useId:function(){var t=bt(),e=j.identifierPrefix;if(k){var l=It,a=$t;l=(a&~(1<<32-kt(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=dn++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=N1++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:mf,useFormState:$o,useActionState:$o,useOptimistic:function(t){var e=bt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=bf.bind(null,M,!0,l),l.dispatch=e,[t,e]},useMemoCache:rf,useCacheRefresh:function(){return bt().memoizedState=j1.bind(null,M)},useEffectEvent:function(t){var e=bt(),l={impl:t};return e.memoizedState=l,function(){if((R&2)!==0)throw Error(y(440));return l.impl.apply(void 0,arguments)}}},yf={readContext:dt,use:Hn,useCallback:ud,useContext:dt,useEffect:pf,useImperativeHandle:nd,useInsertionEffect:ld,useLayoutEffect:ad,useMemo:cd,useReducer:Xi,useRef:td,useState:function(){return Xi(ve)},useDebugValue:hf,useDeferredValue:function(t,e){var l=I();return fd(l,L.memoizedState,t,e)},useTransition:function(){var t=Xi(ve)[0],e=I().memoizedState;return[typeof t=="boolean"?t:ci(t),e]},useSyncExternalStore:Xr,useId:dd,useHostTransitionStatus:mf,useFormState:Io,useActionState:Io,useOptimistic:function(t,e){var l=I();return Wr(l,L,t,e)},useMemoCache:rf,useCacheRefresh:pd};yf.useEffectEvent=ed;var yd={readContext:dt,use:Hn,useCallback:ud,useContext:dt,useEffect:pf,useImperativeHandle:nd,useInsertionEffect:ld,useLayoutEffect:ad,useMemo:cd,useReducer:wu,useRef:td,useState:function(){return wu(ve)},useDebugValue:hf,useDeferredValue:function(t,e){var l=I();return L===null?gf(l,t,e):fd(l,L.memoizedState,t,e)},useTransition:function(){var t=wu(ve)[0],e=I().memoizedState;return[typeof t=="boolean"?t:ci(t),e]},useSyncExternalStore:Xr,useId:dd,useHostTransitionStatus:mf,useFormState:Po,useActionState:Po,useOptimistic:function(t,e){var l=I();return L!==null?Wr(l,L,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:rf,useCacheRefresh:pd};yd.useEffectEvent=ed;function Mu(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:V({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var bc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Dt(),i=Le(a);i.payload=e,l!=null&&(i.callback=l),e=je(t,i,a),e!==null&&(Tt(e,t,a),ka(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Dt(),i=Le(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=je(t,i,a),e!==null&&(Tt(e,t,a),ka(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Dt(),a=Le(l);a.tag=2,e!=null&&(a.callback=e),e=je(t,a,l),e!==null&&(Tt(e,t,l),ka(e,t,l))}};function es(t,e,l,a,i,n,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,n,u):e.prototype&&e.prototype.isPureReactComponent?!Xa(l,a)||!Xa(i,n):!0}function ls(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&bc.enqueueReplaceState(e,e.state,null)}function pl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=V({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}function vd(t){an(t)}function xd(t){console.error(t)}function Sd(t){an(t)}function pn(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function as(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function yc(t,e,l){return l=Le(l),l.tag=3,l.payload={element:null},l.callback=function(){pn(t,e)},l}function Td(t){return t=Le(t),t.tag=3,t}function zd(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var n=a.value;t.payload=function(){return i(n)},t.callback=function(){as(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){as(e,l,a),typeof i!="function"&&(Ye===null?Ye=new Set([this]):Ye.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function X1(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&ua(e,l,i,!0),l=Rt.current,l!==null){switch(l.tag){case 31:case 13:return Qt===null?yn():l.alternate===null&&F===0&&(F=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===fn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Hu(t,a,i)),!1;case 22:return l.flags|=65536,a===fn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Hu(t,a,i)),!1}throw Error(y(435,l.tag))}return Hu(t,a,i),yn(),!1}if(k)return e=Rt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==nc&&(t=Error(y(422),{cause:a}),Za(Yt(t,l)))):(a!==nc&&(e=Error(y(423),{cause:a}),Za(Yt(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=Yt(a,l),i=yc(t.stateNode,a,i),zu(t,i),F!==4&&(F=2)),!1;var n=Error(y(520),{cause:a});if(n=Yt(n,l),Ua===null?Ua=[n]:Ua.push(n),F!==4&&(F=2),e===null)return!0;a=Yt(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=yc(l.stateNode,a,t),zu(l,t),!1;case 1:if(e=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Ye===null||!Ye.has(n))))return l.flags|=65536,i&=-i,l.lanes|=i,i=Td(i),zd(i,t,l,a),zu(l,i),!1}l=l.return}while(l!==null);return!1}var vf=Error(y(461)),lt=!1;function ot(t,e,l,a){e.child=t===null?Ur(e,null,l,a):rl(e,t.child,l,a)}function is(t,e,l,a,i){l=l.render;var n=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return sl(e),a=cf(t,e,l,u,n,i),c=ff(),t!==null&&!lt?(of(t,e,i),xe(t,e,i)):(k&&c&&Ic(e),e.flags|=1,ot(t,e,a,i),e.child)}function ns(t,e,l,a,i){if(t===null){var n=l.type;return typeof n=="function"&&!$c(n)&&n.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=n,wd(t,e,n,a,i)):(t=ji(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!xf(t,i)){var u=n.memoizedProps;if(l=l.compare,l=l!==null?l:Xa,l(u,a)&&t.ref===e.ref)return xe(t,e,i)}return e.flags|=1,t=he(n,a),t.ref=e.ref,t.return=e,e.child=t}function wd(t,e,l,a,i){if(t!==null){var n=t.memoizedProps;if(Xa(n,a)&&t.ref===e.ref)if(lt=!1,e.pendingProps=a=n,xf(t,i))(t.flags&131072)!==0&&(lt=!0);else return e.lanes=t.lanes,xe(t,e,i)}return vc(t,e,l,a,i)}function Md(t,e,l,a){var i=a.children,n=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(n=n!==null?n.baseLanes|l:l,t!==null){for(a=e.child=t.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~n}else a=0,e.child=null;return us(t,e,n,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yi(e,n!==null?n.cachePool:null),n!==null?Jo(e,n):dc(),Lr(e);else return a=e.lanes=536870912,us(t,e,n!==null?n.baseLanes|l:l,l,a)}else n!==null?(Yi(e,n.cachePool),Jo(e,n),ke(e),e.memoizedState=null):(t!==null&&Yi(e,null),dc(),ke(e));return ot(t,e,i,l),e.child}function Ma(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function us(t,e,l,a,i){var n=ef();return n=n===null?null:{parent:et._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&Yi(e,null),dc(),Lr(e),t!==null&&ua(t,e,a,!0),e.childLanes=i,null}function Zi(t,e){return e=hn({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function cs(t,e,l){return rl(e,t.child,null,l),t=Zi(e,e.pendingProps),t.flags|=2,Et(e),e.memoizedState=null,t}function Q1(t,e,l){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(k){if(a.mode==="hidden")return t=Zi(e,a),e.lanes=536870912,Ma(null,t);if(pc(e),(t=Z)?(t=b0(t,Xt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ke!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},l=Or(t),l.return=e,e.child=l,rt=e,Z=null)):t=null,t===null)throw Je(e);return e.lanes=536870912,null}return Zi(e,a)}var n=t.memoizedState;if(n!==null){var u=n.dehydrated;if(pc(e),i)if(e.flags&256)e.flags&=-257,e=cs(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(y(558));else if(lt||ua(t,e,l,!1),i=(l&t.childLanes)!==0,lt||i){if(a=j,a!==null&&(u=lr(a,l),u!==0&&u!==n.retryLane))throw n.retryLane=u,bl(t,u),Tt(a,t,u),vf;yn(),e=cs(t,e,l)}else t=n.treeContext,Z=Zt(u.nextSibling),rt=e,k=!0,Ge=null,Xt=!1,t!==null&&Dr(e,t),e=Zi(e,a),e.flags|=4096;return e}return t=he(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Vi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(y(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function vc(t,e,l,a,i){return sl(e),l=cf(t,e,l,a,void 0,i),a=ff(),t!==null&&!lt?(of(t,e,i),xe(t,e,i)):(k&&a&&Ic(e),e.flags|=1,ot(t,e,l,i),e.child)}function fs(t,e,l,a,i,n){return sl(e),e.updateQueue=null,l=Yr(e,a,l,i),jr(t),a=ff(),t!==null&&!lt?(of(t,e,n),xe(t,e,n)):(k&&a&&Ic(e),e.flags|=1,ot(t,e,l,n),e.child)}function os(t,e,l,a,i){if(sl(e),e.stateNode===null){var n=Hl,u=l.contextType;typeof u=="object"&&u!==null&&(n=dt(u)),n=new l(a,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=bc,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=a,n.state=e.memoizedState,n.refs={},af(e),u=l.contextType,n.context=typeof u=="object"&&u!==null?dt(u):Hl,n.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Mu(e,l,u,a),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&bc.enqueueReplaceState(n,n.state,null),Ba(e,a,n,i),Da(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){n=e.stateNode;var c=e.memoizedProps,f=pl(l,c);n.props=f;var r=n.context,m=l.contextType;u=Hl,typeof m=="object"&&m!==null&&(u=dt(m));var g=l.getDerivedStateFromProps;m=typeof g=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,m||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||r!==u)&&ls(e,n,a,u),Ae=!1;var d=e.memoizedState;n.state=d,Ba(e,a,n,i),Da(),r=e.memoizedState,c||d!==r||Ae?(typeof g=="function"&&(Mu(e,l,g,a),r=e.memoizedState),(f=Ae||es(e,l,f,a,d,r,u))?(m||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=r),n.props=a,n.state=r,n.context=u,a=f):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{n=e.stateNode,sc(t,e),u=e.memoizedProps,m=pl(l,u),n.props=m,g=e.pendingProps,d=n.context,r=l.contextType,f=Hl,typeof r=="object"&&r!==null&&(f=dt(r)),c=l.getDerivedStateFromProps,(r=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==g||d!==f)&&ls(e,n,a,f),Ae=!1,d=e.memoizedState,n.state=d,Ba(e,a,n,i),Da();var h=e.memoizedState;u!==g||d!==h||Ae||t!==null&&t.dependencies!==null&&cn(t.dependencies)?(typeof c=="function"&&(Mu(e,l,c,a),h=e.memoizedState),(m=Ae||es(e,l,m,a,d,h,f)||t!==null&&t.dependencies!==null&&cn(t.dependencies))?(r||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,h,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,h,f)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=h),n.props=a,n.state=h,n.context=f,a=m):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),a=!1)}return n=a,Vi(t,e),a=(e.flags&128)!==0,n||a?(n=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&a?(e.child=rl(e,t.child,null,i),e.child=rl(e,null,l,i)):ot(t,e,l,i),e.memoizedState=n.state,t=e.child):t=xe(t,e,i),t}function ss(t,e,l,a){return ol(),e.flags|=256,ot(t,e,l,a),e.child}var Eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(t){return{baseLanes:t,cachePool:Rr()}}function Au(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=At),t}function Ed(t,e,l){var a=e.pendingProps,i=!1,n=(e.flags&128)!==0,u;if((u=n)||(u=t!==null&&t.memoizedState===null?!1:($.current&2)!==0),u&&(i=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(k){if(i?Oe(e):ke(e),(t=Z)?(t=b0(t,Xt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ke!==null?{id:$t,overflow:It}:null,retryLane:536870912,hydrationErrors:null},l=Or(t),l.return=e,e.child=l,rt=e,Z=null)):t=null,t===null)throw Je(e);return Bc(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,i?(ke(e),i=e.mode,c=hn({mode:"hidden",children:c},i),a=nl(a,i,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=Cu(l),a.childLanes=Au(t,u,l),e.memoizedState=Eu,Ma(null,a)):(Oe(e),xc(e,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)e.flags&256?(Oe(e),e.flags&=-257,e=_u(t,e,l)):e.memoizedState!==null?(ke(e),e.child=t.child,e.flags|=128,e=null):(ke(e),c=a.fallback,i=e.mode,a=hn({mode:"visible",children:a.children},i),c=nl(c,i,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,rl(e,t.child,null,l),a=e.child,a.memoizedState=Cu(l),a.childLanes=Au(t,u,l),e.memoizedState=Eu,e=Ma(null,a));else if(Oe(e),Bc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var r=u.dgst;u=r,a=Error(y(419)),a.stack="",a.digest=u,Za({value:a,source:null,stack:null}),e=_u(t,e,l)}else if(lt||ua(t,e,l,!1),u=(l&t.childLanes)!==0,lt||u){if(u=j,u!==null&&(a=lr(u,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,bl(t,a),Tt(u,t,a),vf;Dc(c)||yn(),e=_u(t,e,l)}else Dc(c)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,Z=Zt(c.nextSibling),rt=e,k=!0,Ge=null,Xt=!1,t!==null&&Dr(e,t),e=xc(e,a.children),e.flags|=4096);return e}return i?(ke(e),c=a.fallback,i=e.mode,f=t.child,r=f.sibling,a=he(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,r!==null?c=he(r,c):(c=nl(c,i,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,Ma(null,a),a=e.child,c=t.child.memoizedState,c===null?c=Cu(l):(i=c.cachePool,i!==null?(f=et._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=Rr(),c={baseLanes:c.baseLanes|l,cachePool:i}),a.memoizedState=c,a.childLanes=Au(t,u,l),e.memoizedState=Eu,Ma(t.child,a)):(Oe(e),l=t.child,t=l.sibling,l=he(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function xc(t,e){return e=hn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function hn(t,e){return t=Ct(22,t,null,e),t.lanes=0,t}function _u(t,e,l){return rl(e,t.child,null,l),t=xc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rs(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),cc(t.return,e,l)}function Ou(t,e,l,a,i,n){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:n}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=i,u.treeForkCount=n)}function Cd(t,e,l){var a=e.pendingProps,i=a.revealOrder,n=a.tail;a=a.children;var u=$.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,Y($,u),ot(t,e,a,l),a=k?Qa:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rs(t,l,e);else if(t.tag===19)rs(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&sn(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),Ou(e,!1,i,l,n,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&sn(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}Ou(e,!0,l,null,n,a);break;case"together":Ou(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function xe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Fe|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(ua(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,l=he(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=he(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function xf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&cn(t)))}function Z1(t,e,l){switch(e.tag){case 3:Pi(e,e.stateNode.containerInfo),_e(e,et,t.memoizedState.cache),ol();break;case 27:case 5:Ju(e);break;case 4:Pi(e,e.stateNode.containerInfo);break;case 10:_e(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,pc(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Oe(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Ed(t,e,l):(Oe(e),t=xe(t,e,l),t!==null?t.sibling:null);Oe(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(ua(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return Cd(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y($,$.current),a)break;return null;case 22:return e.lanes=0,Md(t,e,l,e.pendingProps);case 24:_e(e,et,t.memoizedState.cache)}return xe(t,e,l)}function Ad(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)lt=!0;else{if(!xf(t,l)&&(e.flags&128)===0)return lt=!1,Z1(t,e,l);lt=(t.flags&131072)!==0}else lt=!1,k&&(e.flags&1048576)!==0&&kr(e,Qa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=ll(e.elementType),e.type=t,typeof t=="function")$c(t)?(a=pl(t,a),e.tag=1,e=os(null,e,t,a,l)):(e.tag=0,e=vc(null,e,t,a,l));else{if(t!=null){var i=t.$$typeof;if(i===Uc){e.tag=11,e=is(null,e,t,a,l);break t}else if(i===qc){e.tag=14,e=ns(null,e,t,a,l);break t}}throw e=Vu(t)||t,Error(y(306,e,""))}}return e;case 0:return vc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=pl(a,e.pendingProps),os(t,e,a,i,l);case 3:t:{if(Pi(e,e.stateNode.containerInfo),t===null)throw Error(y(387));a=e.pendingProps;var n=e.memoizedState;i=n.element,sc(t,e),Ba(e,a,null,l);var u=e.memoizedState;if(a=u.cache,_e(e,et,a),a!==n.cache&&fc(e,[et],l,!0),Da(),a=u.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=ss(t,e,a,l);break t}else if(a!==i){i=Yt(Error(y(424)),e),Za(i),e=ss(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Z=Zt(t.firstChild),rt=e,k=!0,Ge=null,Xt=!0,l=Ur(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ol(),a===i){e=xe(t,e,l);break t}ot(t,e,a,l)}e=e.child}return e;case 26:return Vi(t,e),t===null?(l=Bs(e.type,null,e.pendingProps,null))?e.memoizedState=l:k||(l=e.type,t=e.pendingProps,a=Tn(qe.current).createElement(l),a[st]=e,a[zt]=t,pt(a,l,t),ct(a),e.stateNode=a):e.memoizedState=Bs(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ju(e),t===null&&k&&(a=e.stateNode=y0(e.type,e.pendingProps,qe.current),rt=e,Xt=!0,i=Z,Ie(e.type)?(Rc=i,Z=Zt(a.firstChild)):Z=i),ot(t,e,e.pendingProps.children,l),Vi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&k&&((i=a=Z)&&(a=vh(a,e.type,e.pendingProps,Xt),a!==null?(e.stateNode=a,rt=e,Z=Zt(a.firstChild),Xt=!1,i=!0):i=!1),i||Je(e)),Ju(e),i=e.type,n=e.pendingProps,u=t!==null?t.memoizedProps:null,a=n.children,Oc(i,n)?a=null:u!==null&&Oc(i,u)&&(e.flags|=32),e.memoizedState!==null&&(i=cf(t,e,H1,null,null,l),$a._currentValue=i),Vi(t,e),ot(t,e,a,l),e.child;case 6:return t===null&&k&&((t=l=Z)&&(l=xh(l,e.pendingProps,Xt),l!==null?(e.stateNode=l,rt=e,Z=null,t=!0):t=!1),t||Je(e)),null;case 13:return Ed(t,e,l);case 4:return Pi(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=rl(e,null,a,l):ot(t,e,a,l),e.child;case 11:return is(t,e,e.type,e.pendingProps,l);case 7:return ot(t,e,e.pendingProps,l),e.child;case 8:return ot(t,e,e.pendingProps.children,l),e.child;case 12:return ot(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,_e(e,e.type,a.value),ot(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,sl(e),i=dt(i),a=a(i),e.flags|=1,ot(t,e,a,l),e.child;case 14:return ns(t,e,e.type,e.pendingProps,l);case 15:return wd(t,e,e.type,e.pendingProps,l);case 19:return Cd(t,e,l);case 31:return Q1(t,e,l);case 22:return Md(t,e,l,e.pendingProps);case 24:return sl(e),a=dt(et),t===null?(i=ef(),i===null&&(i=j,n=tf(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=l),i=n),e.memoizedState={parent:a,cache:i},af(e),_e(e,et,i)):((t.lanes&l)!==0&&(sc(t,e),Ba(e,null,null,l),Da()),i=t.memoizedState,n=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),_e(e,et,a)):(a=n.cache,_e(e,et,a),a!==i.cache&&fc(e,[et],l,!0))),ot(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(y(156,e.tag))}function ne(t){t.flags|=4}function ku(t,e,l,a,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Id())t.flags|=8192;else throw cl=fn,lf}else t.flags&=-16777217}function ds(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!S0(e))if(Id())t.flags|=8192;else throw cl=fn,lf}function Oi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Ps():536870912,t.lanes|=e,Pl|=e)}function ya(t,e){if(!k)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Q(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function V1(t,e,l){var a=e.pendingProps;switch(Pc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Q(e),null;case 1:return Q(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ge(et),Kl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(wl(e)?ne(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Tu())),Q(e),null;case 26:var i=e.type,n=e.memoizedState;return t===null?(ne(e),n!==null?(Q(e),ds(e,n)):(Q(e),ku(e,i,null,a,l))):n?n!==t.memoizedState?(ne(e),Q(e),ds(e,n)):(Q(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&ne(e),Q(e),ku(e,i,t,a,l)),null;case 27:if(tn(e),l=qe.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ne(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return Q(e),null}t=te.current,wl(e)?jo(e,t):(t=y0(i,a,l),e.stateNode=t,ne(e))}return Q(e),null;case 5:if(tn(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&ne(e);else{if(!a){if(e.stateNode===null)throw Error(y(166));return Q(e),null}if(n=te.current,wl(e))jo(e,n);else{var u=Tn(qe.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?u.createElement(i,{is:a.is}):u.createElement(i)}}n[st]=e,n[zt]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=n;t:switch(pt(n,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&ne(e)}}return Q(e),ku(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&ne(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(y(166));if(t=qe.current,wl(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=rt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[st]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||h0(t.nodeValue,l)),t||Je(e,!0)}else t=Tn(t).createTextNode(a),t[st]=e,e.stateNode=t}return Q(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=wl(e),l!==null){if(t===null){if(!a)throw Error(y(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[st]=e}else ol(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Q(e),t=!1}else l=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Et(e),e):(Et(e),null);if((e.flags&128)!==0)throw Error(y(558))}return Q(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=wl(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(y(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[st]=e}else ol(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Q(e),i=!1}else i=Tu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Et(e),e):(Et(e),null)}return Et(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==i&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),Oi(e,e.updateQueue),Q(e),null);case 4:return Kl(),t===null&&Cf(e.stateNode.containerInfo),Q(e),null;case 10:return ge(e.type),Q(e),null;case 19:if(ft($),a=e.memoizedState,a===null)return Q(e),null;if(i=(e.flags&128)!==0,n=a.rendering,n===null)if(i)ya(a,!1);else{if(F!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=sn(t),n!==null){for(e.flags|=128,ya(a,!1),t=n.updateQueue,e.updateQueue=t,Oi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)_r(l,t),l=l.sibling;return Y($,$.current&1|2),k&&oe(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&_t()>mn&&(e.flags|=128,i=!0,ya(a,!1),e.lanes=4194304)}else{if(!i)if(t=sn(n),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Oi(e,t),ya(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!k)return Q(e),null}else 2*_t()-a.renderingStartTime>mn&&l!==536870912&&(e.flags|=128,i=!0,ya(a,!1),e.lanes=4194304);a.isBackwards?(n.sibling=e.child,e.child=n):(t=a.last,t!==null?t.sibling=n:e.child=n,a.last=n)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=_t(),t.sibling=null,l=$.current,Y($,i?l&1|2:l&1),k&&oe(e,a.treeForkCount),t):(Q(e),null);case 22:case 23:return Et(e),nf(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Q(e),e.subtreeFlags&6&&(e.flags|=8192)):Q(e),l=e.updateQueue,l!==null&&Oi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&ft(ul),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ge(et),Q(e),null;case 25:return null;case 30:return null}throw Error(y(156,e.tag))}function K1(t,e){switch(Pc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ge(et),Kl(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return tn(e),null;case 31:if(e.memoizedState!==null){if(Et(e),e.alternate===null)throw Error(y(340));ol()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Et(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));ol()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft($),null;case 4:return Kl(),null;case 10:return ge(e.type),null;case 22:case 23:return Et(e),nf(),t!==null&&ft(ul),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ge(et),null;case 25:return null;default:return null}}function _d(t,e){switch(Pc(e),e.tag){case 3:ge(et),Kl();break;case 26:case 27:case 5:tn(e);break;case 4:Kl();break;case 31:e.memoizedState!==null&&Et(e);break;case 13:Et(e);break;case 19:ft($);break;case 10:ge(e.type);break;case 22:case 23:Et(e),nf(),t!==null&&ft(ul);break;case 24:ge(et)}}function fi(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var n=l.create,u=l.inst;a=n(),u.destroy=a}l=l.next}while(l!==i)}}catch(c){U(e,e.return,c)}}function We(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,i=e;var f=l,r=c;try{r()}catch(m){U(i,f,m)}}}a=a.next}while(a!==n)}}catch(m){U(e,e.return,m)}}function Od(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Gr(e,l)}catch(a){U(t,t.return,a)}}}function kd(t,e,l){l.props=pl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){U(t,e,a)}}function Na(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(i){U(t,e,i)}}function Pt(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){U(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){U(t,e,i)}else l.current=null}function Dd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){U(t,t.return,i)}}function Du(t,e,l){try{var a=t.stateNode;ph(a,t.type,l,e),a[zt]=e}catch(i){U(t,t.return,i)}}function Bd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ie(t.type)||t.tag===4}function Bu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Bd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ie(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=de));else if(a!==4&&(a===27&&Ie(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Sc(t,e,l),t=t.sibling;t!==null;)Sc(t,e,l),t=t.sibling}function gn(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Ie(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(gn(t,e,l),t=t.sibling;t!==null;)gn(t,e,l),t=t.sibling}function Rd(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);pt(e,a,l),e[st]=t,e[zt]=l}catch(n){U(t,t.return,n)}}var se=!1,tt=!1,Ru=!1,ps=typeof WeakSet=="function"?WeakSet:Set,ut=null;function J1(t,e){if(t=t.containerInfo,Ac=En,t=Sr(t),Jc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break t}var u=0,c=-1,f=-1,r=0,m=0,g=t,d=null;e:for(;;){for(var h;g!==l||i!==0&&g.nodeType!==3||(c=u+i),g!==n||a!==0&&g.nodeType!==3||(f=u+a),g.nodeType===3&&(u+=g.nodeValue.length),(h=g.firstChild)!==null;)d=g,g=h;for(;;){if(g===t)break e;if(d===l&&++r===i&&(c=u),d===n&&++m===a&&(f=u),(h=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=h}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(_c={focusedElem:t,selectionRange:l},En=!1,ut=e;ut!==null;)if(e=ut,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ut=t;else for(;ut!==null;){switch(e=ut,n=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)i=t[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,l=e,i=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var v=pl(l.type,i);t=a.getSnapshotBeforeUpdate(v,n),a.__reactInternalSnapshotBeforeUpdate=t}catch(T){U(l,l.return,T)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)kc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(y(163))}if(t=e.sibling,t!==null){t.return=e.return,ut=t;break}ut=e.return}}function Nd(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ce(t,l),a&4&&fi(5,l);break;case 1:if(ce(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){U(l,l.return,u)}else{var i=pl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){U(l,l.return,u)}}a&64&&Od(l),a&512&&Na(l,l.return);break;case 3:if(ce(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Gr(t,e)}catch(u){U(l,l.return,u)}}break;case 27:e===null&&a&4&&Rd(l);case 26:case 5:ce(t,l),e===null&&a&4&&Dd(l),a&512&&Na(l,l.return);break;case 12:ce(t,l);break;case 31:ce(t,l),a&4&&qd(t,l);break;case 13:ce(t,l),a&4&&Gd(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=ah.bind(null,l),Sh(t,l))));break;case 22:if(a=l.memoizedState!==null||se,!a){e=e!==null&&e.memoizedState!==null||tt,i=se;var n=tt;se=a,(tt=e)&&!n?fe(t,l,(l.subtreeFlags&8772)!==0):ce(t,l),se=i,tt=n}break;case 30:break;default:ce(t,l)}}function Hd(t){var e=t.alternate;e!==null&&(t.alternate=null,Hd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Yc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var J=null,xt=!1;function ue(t,e,l){for(l=l.child;l!==null;)Ud(t,e,l),l=l.sibling}function Ud(t,e,l){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(ei,l)}catch{}switch(l.tag){case 26:tt||Pt(l,e),ue(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:tt||Pt(l,e);var a=J,i=xt;Ie(l.type)&&(J=l.stateNode,xt=!1),ue(t,e,l),Ga(l.stateNode),J=a,xt=i;break;case 5:tt||Pt(l,e);case 6:if(a=J,i=xt,J=null,ue(t,e,l),J=a,xt=i,J!==null)if(xt)try{(J.nodeType===9?J.body:J.nodeName==="HTML"?J.ownerDocument.body:J).removeChild(l.stateNode)}catch(n){U(l,e,n)}else try{J.removeChild(l.stateNode)}catch(n){U(l,e,n)}break;case 18:J!==null&&(xt?(t=J,As(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),aa(t)):As(J,l.stateNode));break;case 4:a=J,i=xt,J=l.stateNode.containerInfo,xt=!0,ue(t,e,l),J=a,xt=i;break;case 0:case 11:case 14:case 15:We(2,l,e),tt||We(4,l,e),ue(t,e,l);break;case 1:tt||(Pt(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&kd(l,e,a)),ue(t,e,l);break;case 21:ue(t,e,l);break;case 22:tt=(a=tt)||l.memoizedState!==null,ue(t,e,l),tt=a;break;default:ue(t,e,l)}}function qd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{aa(t)}catch(l){U(e,e.return,l)}}}function Gd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{aa(t)}catch(l){U(e,e.return,l)}}function W1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new ps),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new ps),e;default:throw Error(y(435,t.tag))}}function ki(t,e){var l=W1(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var i=ih.bind(null,t,a);a.then(i,i)}})}function yt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],n=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(Ie(c.type)){J=c.stateNode,xt=!1;break t}break;case 5:J=c.stateNode,xt=!1;break t;case 3:case 4:J=c.stateNode.containerInfo,xt=!0;break t}c=c.return}if(J===null)throw Error(y(160));Ud(n,u,i),J=null,xt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ld(e,t),e=e.sibling}var Jt=null;function Ld(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yt(e,t),vt(t),a&4&&(We(3,t,t.return),fi(3,t),We(5,t,t.return));break;case 1:yt(e,t),vt(t),a&512&&(tt||l===null||Pt(l,l.return)),a&64&&se&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=Jt;if(yt(e,t),vt(t),a&512&&(tt||l===null||Pt(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":n=i.getElementsByTagName("title")[0],(!n||n[ii]||n[st]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(a),i.head.insertBefore(n,i.querySelector("head > title"))),pt(n,a,l),n[st]=t,ct(n),a=n;break t;case"link":var u=Ns("link","href",i).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(n=u[c],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}n=i.createElement(a),pt(n,a,l),i.head.appendChild(n);break;case"meta":if(u=Ns("meta","content",i).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(n=u[c],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}n=i.createElement(a),pt(n,a,l),i.head.appendChild(n);break;default:throw Error(y(468,a))}n[st]=t,ct(n),a=n}t.stateNode=a}else Hs(i,t.type,t.stateNode);else t.stateNode=Rs(i,a,t.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?Hs(i,t.type,t.stateNode):Rs(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Du(t,t.memoizedProps,l.memoizedProps)}break;case 27:yt(e,t),vt(t),a&512&&(tt||l===null||Pt(l,l.return)),l!==null&&a&4&&Du(t,t.memoizedProps,l.memoizedProps);break;case 5:if(yt(e,t),vt(t),a&512&&(tt||l===null||Pt(l,l.return)),t.flags&32){i=t.stateNode;try{Wl(i,"")}catch(v){U(t,t.return,v)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Du(t,i,l!==null?l.memoizedProps:i)),a&1024&&(Ru=!0);break;case 6:if(yt(e,t),vt(t),a&4){if(t.stateNode===null)throw Error(y(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(v){U(t,t.return,v)}}break;case 3:if(Wi=null,i=Jt,Jt=zn(e.containerInfo),yt(e,t),Jt=i,vt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{aa(e.containerInfo)}catch(v){U(t,t.return,v)}Ru&&(Ru=!1,jd(t));break;case 4:a=Jt,Jt=zn(t.stateNode.containerInfo),yt(e,t),vt(t),Jt=a;break;case 12:yt(e,t),vt(t);break;case 31:yt(e,t),vt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ki(t,a)));break;case 13:yt(e,t),vt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Gn=_t()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ki(t,a)));break;case 22:i=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,r=se,m=tt;if(se=r||i,tt=m||f,yt(e,t),tt=m,se=r,vt(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(l===null||f||se||tt||al(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){f=l=e;try{if(n=f.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var g=f.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null;c.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(v){U(f,f.return,v)}}}else if(e.tag===6){if(l===null){f=e;try{f.stateNode.nodeValue=i?"":f.memoizedProps}catch(v){U(f,f.return,v)}}}else if(e.tag===18){if(l===null){f=e;try{var h=f.stateNode;i?_s(h,!0):_s(f.stateNode,!1)}catch(v){U(f,f.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,ki(t,l))));break;case 19:yt(e,t),vt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ki(t,a)));break;case 30:break;case 21:break;default:yt(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(Bd(a)){l=a;break}a=a.return}if(l==null)throw Error(y(160));switch(l.tag){case 27:var i=l.stateNode,n=Bu(t);gn(t,n,i);break;case 5:var u=l.stateNode;l.flags&32&&(Wl(u,""),l.flags&=-33);var c=Bu(t);gn(t,c,u);break;case 3:case 4:var f=l.stateNode.containerInfo,r=Bu(t);Sc(t,r,f);break;default:throw Error(y(161))}}catch(m){U(t,t.return,m)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;jd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ce(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Nd(t,e.alternate,e),e=e.sibling}function al(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:We(4,e,e.return),al(e);break;case 1:Pt(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&kd(e,e.return,l),al(e);break;case 27:Ga(e.stateNode);case 26:case 5:Pt(e,e.return),al(e);break;case 22:e.memoizedState===null&&al(e);break;case 30:al(e);break;default:al(e)}t=t.sibling}}function fe(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,n=e,u=n.flags;switch(n.tag){case 0:case 11:case 15:fe(i,n,l),fi(4,n);break;case 1:if(fe(i,n,l),a=n,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(r){U(a,a.return,r)}if(a=n,i=a.updateQueue,i!==null){var c=a.stateNode;try{var f=i.shared.hiddenCallbacks;if(f!==null)for(i.shared.hiddenCallbacks=null,i=0;i<f.length;i++)qr(f[i],c)}catch(r){U(a,a.return,r)}}l&&u&64&&Od(n),Na(n,n.return);break;case 27:Rd(n);case 26:case 5:fe(i,n,l),l&&a===null&&u&4&&Dd(n),Na(n,n.return);break;case 12:fe(i,n,l);break;case 31:fe(i,n,l),l&&u&4&&qd(i,n);break;case 13:fe(i,n,l),l&&u&4&&Gd(i,n);break;case 22:n.memoizedState===null&&fe(i,n,l),Na(n,n.return);break;case 30:break;default:fe(i,n,l)}e=e.sibling}}function Sf(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&ui(l))}function Tf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ui(t))}function Kt(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yd(t,e,l,a),e=e.sibling}function Yd(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Kt(t,e,l,a),i&2048&&fi(9,e);break;case 1:Kt(t,e,l,a);break;case 3:Kt(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ui(t)));break;case 12:if(i&2048){Kt(t,e,l,a),t=e.stateNode;try{var n=e.memoizedProps,u=n.id,c=n.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){U(e,e.return,f)}}else Kt(t,e,l,a);break;case 31:Kt(t,e,l,a);break;case 13:Kt(t,e,l,a);break;case 23:break;case 22:n=e.stateNode,u=e.alternate,e.memoizedState!==null?n._visibility&2?Kt(t,e,l,a):Ha(t,e):n._visibility&2?Kt(t,e,l,a):(n._visibility|=2,El(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Sf(u,e);break;case 24:Kt(t,e,l,a),i&2048&&Tf(e.alternate,e);break;default:Kt(t,e,l,a)}}function El(t,e,l,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var n=t,u=e,c=l,f=a,r=u.flags;switch(u.tag){case 0:case 11:case 15:El(n,u,c,f,i),fi(8,u);break;case 23:break;case 22:var m=u.stateNode;u.memoizedState!==null?m._visibility&2?El(n,u,c,f,i):Ha(n,u):(m._visibility|=2,El(n,u,c,f,i)),i&&r&2048&&Sf(u.alternate,u);break;case 24:El(n,u,c,f,i),i&&r&2048&&Tf(u.alternate,u);break;default:El(n,u,c,f,i)}e=e.sibling}}function Ha(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:Ha(l,a),i&2048&&Sf(a.alternate,a);break;case 24:Ha(l,a),i&2048&&Tf(a.alternate,a);break;default:Ha(l,a)}e=e.sibling}}var Ea=8192;function Ml(t,e,l){if(t.subtreeFlags&Ea)for(t=t.child;t!==null;)Xd(t,e,l),t=t.sibling}function Xd(t,e,l){switch(t.tag){case 26:Ml(t,e,l),t.flags&Ea&&t.memoizedState!==null&&Bh(l,Jt,t.memoizedState,t.memoizedProps);break;case 5:Ml(t,e,l);break;case 3:case 4:var a=Jt;Jt=zn(t.stateNode.containerInfo),Ml(t,e,l),Jt=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=Ea,Ea=16777216,Ml(t,e,l),Ea=a):Ml(t,e,l));break;default:Ml(t,e,l)}}function Qd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function va(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ut=a,Vd(a,t)}Qd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zd(t),t=t.sibling}function Zd(t){switch(t.tag){case 0:case 11:case 15:va(t),t.flags&2048&&We(9,t,t.return);break;case 3:va(t);break;case 12:va(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ki(t)):va(t);break;default:va(t)}}function Ki(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ut=a,Vd(a,t)}Qd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:We(8,e,e.return),Ki(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Ki(e));break;default:Ki(e)}t=t.sibling}}function Vd(t,e){for(;ut!==null;){var l=ut;switch(l.tag){case 0:case 11:case 15:We(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ui(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ut=a;else t:for(l=t;ut!==null;){a=ut;var i=a.sibling,n=a.return;if(Hd(a),a===l){ut=null;break t}if(i!==null){i.return=n,ut=i;break t}ut=n}}}var F1={getCacheForType:function(t){var e=dt(et),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return dt(et).controller.signal}},$1=typeof WeakMap=="function"?WeakMap:Map,R=0,j=null,A=null,O=0,H=0,Mt=null,Ne=!1,fa=!1,zf=!1,Se=0,F=0,Fe=0,fl=0,wf=0,At=0,Pl=0,Ua=null,St=null,Tc=!1,Gn=0,Kd=0,mn=1/0,bn=null,Ye=null,it=0,Xe=null,ta=null,me=0,zc=0,wc=null,Jd=null,qa=0,Mc=null;function Dt(){return(R&2)!==0&&O!==0?O&-O:z.T!==null?Ef():ar()}function Wd(){if(At===0)if((O&536870912)===0||k){var t=Si;Si<<=1,(Si&3932160)===0&&(Si=262144),At=t}else At=536870912;return t=Rt.current,t!==null&&(t.flags|=32),At}function Tt(t,e,l){(t===j&&(H===2||H===9)||t.cancelPendingCommit!==null)&&(ea(t,0),He(t,O,At,!1)),ai(t,l),((R&2)===0||t!==j)&&(t===j&&((R&2)===0&&(fl|=l),F===4&&He(t,O,At,!1)),le(t))}function Fd(t,e,l){if((R&6)!==0)throw Error(y(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||li(t,e),i=a?th(t,e):Nu(t,e,!0),n=a;do{if(i===0){fa&&!a&&He(t,e,0,!1);break}else{if(l=t.current.alternate,n&&!I1(l)){i=Nu(t,e,!1),n=!1;continue}if(i===2){if(n=e,t.errorRecoveryDisabledLanes&n)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;i=Ua;var f=c.current.memoizedState.isDehydrated;if(f&&(ea(c,u).flags|=256),u=Nu(c,u,!1),u!==2){if(zf&&!f){c.errorRecoveryDisabledLanes|=n,fl|=n,i=4;break t}n=St,St=i,n!==null&&(St===null?St=n:St.push.apply(St,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){ea(t,0),He(t,e,0,!0);break}t:{switch(a=t,n=i,n){case 0:case 1:throw Error(y(345));case 4:if((e&4194048)!==e)break;case 6:He(a,e,At,!Ne);break t;case 2:St=null;break;case 3:case 5:break;default:throw Error(y(329))}if((e&62914560)===e&&(i=Gn+300-_t(),10<i)){if(He(a,e,At,!Ne),An(a,0,!0)!==0)break t;me=e,a.timeoutHandle=m0(hs.bind(null,a,l,St,bn,Tc,e,At,fl,Pl,Ne,n,"Throttled",-0,0),i);break t}hs(a,l,St,bn,Tc,e,At,fl,Pl,Ne,n,null,-0,0)}}break}while(!0);le(t)}function hs(t,e,l,a,i,n,u,c,f,r,m,g,d,h){if(t.timeoutHandle=-1,g=e.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:de},Xd(e,n,g);var v=(n&62914560)===n?Gn-_t():(n&4194048)===n?Kd-_t():0;if(v=Rh(g,v),v!==null){me=n,t.cancelPendingCommit=v(ms.bind(null,t,e,n,l,a,i,u,c,f,m,g,null,d,h)),He(t,n,u,!r);return}}ms(t,e,n,l,a,i,u,c,f)}function I1(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],n=i.getSnapshot;i=i.value;try{if(!Bt(n(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function He(t,e,l,a){e&=~wf,e&=~fl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var n=31-kt(i),u=1<<n;a[n]=-1,i&=~u}l!==0&&tr(t,l,e)}function Ln(){return(R&6)===0?(oi(0,!1),!1):!0}function Mf(){if(A!==null){if(H===0)var t=A.return;else t=A,pe=yl=null,sf(t),Ql=null,Va=0,t=A;for(;t!==null;)_d(t.alternate,t),t=t.return;A=null}}function ea(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,mh(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),me=0,Mf(),j=t,A=l=he(t.current,null),O=e,H=0,Mt=null,Ne=!1,fa=li(t,e),zf=!1,Pl=At=wf=fl=Fe=F=0,St=Ua=null,Tc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-kt(a),n=1<<i;e|=t[i],a&=~n}return Se=e,Dn(),l}function $d(t,e){M=null,z.H=Ja,e===ca||e===Rn?(e=Vo(),H=3):e===lf?(e=Vo(),H=4):H=e===vf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Mt=e,A===null&&(F=1,pn(t,Yt(e,t.current)))}function Id(){var t=Rt.current;return t===null?!0:(O&4194048)===O?Qt===null:(O&62914560)===O||(O&536870912)!==0?t===Qt:!1}function Pd(){var t=z.H;return z.H=Ja,t===null?Ja:t}function t0(){var t=z.A;return z.A=F1,t}function yn(){F=4,Ne||(O&4194048)!==O&&Rt.current!==null||(fa=!0),(Fe&134217727)===0&&(fl&134217727)===0||j===null||He(j,O,At,!1)}function Nu(t,e,l){var a=R;R|=2;var i=Pd(),n=t0();(j!==t||O!==e)&&(bn=null,ea(t,e)),e=!1;var u=F;t:do try{if(H!==0&&A!==null){var c=A,f=Mt;switch(H){case 8:Mf(),u=6;break t;case 3:case 2:case 9:case 6:Rt.current===null&&(e=!0);var r=H;if(H=0,Mt=null,Gl(t,c,f,r),l&&fa){u=0;break t}break;default:r=H,H=0,Mt=null,Gl(t,c,f,r)}}P1(),u=F;break}catch(m){$d(t,m)}while(!0);return e&&t.shellSuspendCounter++,pe=yl=null,R=a,z.H=i,z.A=n,A===null&&(j=null,O=0,Dn()),u}function P1(){for(;A!==null;)e0(A)}function th(t,e){var l=R;R|=2;var a=Pd(),i=t0();j!==t||O!==e?(bn=null,mn=_t()+500,ea(t,e)):fa=li(t,e);t:do try{if(H!==0&&A!==null){e=A;var n=Mt;e:switch(H){case 1:H=0,Mt=null,Gl(t,e,n,1);break;case 2:case 9:if(Zo(n)){H=0,Mt=null,gs(e);break}e=function(){H!==2&&H!==9||j!==t||(H=7),le(t)},n.then(e,e);break t;case 3:H=7;break t;case 4:H=5;break t;case 7:Zo(n)?(H=0,Mt=null,gs(e)):(H=0,Mt=null,Gl(t,e,n,7));break;case 5:var u=null;switch(A.tag){case 26:u=A.memoizedState;case 5:case 27:var c=A;if(u?S0(u):c.stateNode.complete){H=0,Mt=null;var f=c.sibling;if(f!==null)A=f;else{var r=c.return;r!==null?(A=r,jn(r)):A=null}break e}}H=0,Mt=null,Gl(t,e,n,5);break;case 6:H=0,Mt=null,Gl(t,e,n,6);break;case 8:Mf(),F=6;break t;default:throw Error(y(462))}}eh();break}catch(m){$d(t,m)}while(!0);return pe=yl=null,z.H=a,z.A=i,R=l,A!==null?0:(j=null,O=0,Dn(),F)}function eh(){for(;A!==null&&!wp();)e0(A)}function e0(t){var e=Ad(t.alternate,t,Se);t.memoizedProps=t.pendingProps,e===null?jn(t):A=e}function gs(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=fs(l,e,e.pendingProps,e.type,void 0,O);break;case 11:e=fs(l,e,e.pendingProps,e.type.render,e.ref,O);break;case 5:sf(e);default:_d(l,e),e=A=_r(e,Se),e=Ad(l,e,Se)}t.memoizedProps=t.pendingProps,e===null?jn(t):A=e}function Gl(t,e,l,a){pe=yl=null,sf(e),Ql=null,Va=0;var i=e.return;try{if(X1(t,i,e,l,O)){F=1,pn(t,Yt(l,t.current)),A=null;return}}catch(n){if(i!==null)throw A=i,n;F=1,pn(t,Yt(l,t.current)),A=null;return}e.flags&32768?(k||a===1?t=!0:fa||(O&536870912)!==0?t=!1:(Ne=t=!0,(a===2||a===9||a===3||a===6)&&(a=Rt.current,a!==null&&a.tag===13&&(a.flags|=16384))),l0(e,t)):jn(e)}function jn(t){var e=t;do{if((e.flags&32768)!==0){l0(e,Ne);return}t=e.return;var l=V1(e.alternate,e,Se);if(l!==null){A=l;return}if(e=e.sibling,e!==null){A=e;return}A=e=t}while(e!==null);F===0&&(F=5)}function l0(t,e){do{var l=K1(t.alternate,t);if(l!==null){l.flags&=32767,A=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){A=t;return}A=t=l}while(t!==null);F=6,A=null}function ms(t,e,l,a,i,n,u,c,f){t.cancelPendingCommit=null;do Yn();while(it!==0);if((R&6)!==0)throw Error(y(327));if(e!==null){if(e===t.current)throw Error(y(177));if(n=e.lanes|e.childLanes,n|=Wc,Rp(t,l,n,u,c,f),t===j&&(A=j=null,O=0),ta=e,Xe=t,me=l,zc=n,wc=i,Jd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nh(en,function(){return c0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,i=N.p,N.p=2,u=R,R|=4;try{J1(t,e,l)}finally{R=u,N.p=i,z.T=a}}it=1,a0(),i0(),n0()}}function a0(){if(it===1){it=0;var t=Xe,e=ta,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=z.T,z.T=null;var a=N.p;N.p=2;var i=R;R|=4;try{Ld(e,t);var n=_c,u=Sr(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(u!==c&&c&&c.ownerDocument&&xr(c.ownerDocument.documentElement,c)){if(f!==null&&Jc(c)){var r=f.start,m=f.end;if(m===void 0&&(m=r),"selectionStart"in c)c.selectionStart=r,c.selectionEnd=Math.min(m,c.value.length);else{var g=c.ownerDocument||document,d=g&&g.defaultView||window;if(d.getSelection){var h=d.getSelection(),v=c.textContent.length,T=Math.min(f.start,v),q=f.end===void 0?T:Math.min(f.end,v);!h.extend&&T>q&&(u=q,q=T,T=u);var s=qo(c,T),o=qo(c,q);if(s&&o&&(h.rangeCount!==1||h.anchorNode!==s.node||h.anchorOffset!==s.offset||h.focusNode!==o.node||h.focusOffset!==o.offset)){var p=g.createRange();p.setStart(s.node,s.offset),h.removeAllRanges(),T>q?(h.addRange(p),h.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),h.addRange(p))}}}}for(g=[],h=c;h=h.parentNode;)h.nodeType===1&&g.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<g.length;c++){var b=g[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}En=!!Ac,_c=Ac=null}finally{R=i,N.p=a,z.T=l}}t.current=e,it=2}}function i0(){if(it===2){it=0;var t=Xe,e=ta,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=z.T,z.T=null;var a=N.p;N.p=2;var i=R;R|=4;try{Nd(t,e.alternate,e)}finally{R=i,N.p=a,z.T=l}}it=3}}function n0(){if(it===4||it===3){it=0,Mp();var t=Xe,e=ta,l=me,a=Jd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?it=5:(it=0,ta=Xe=null,u0(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ye=null),jc(l),e=e.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=z.T,i=N.p,N.p=2,z.T=null;try{for(var n=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];n(c.value,{componentStack:c.stack})}}finally{z.T=e,N.p=i}}(me&3)!==0&&Yn(),le(t),i=t.pendingLanes,(l&261930)!==0&&(i&42)!==0?t===Mc?qa++:(qa=0,Mc=t):qa=0,oi(0,!1)}}function u0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ui(e)))}function Yn(){return a0(),i0(),n0(),c0()}function c0(){if(it!==5)return!1;var t=Xe,e=zc;zc=0;var l=jc(me),a=z.T,i=N.p;try{N.p=32>l?32:l,z.T=null,l=wc,wc=null;var n=Xe,u=me;if(it=0,ta=Xe=null,me=0,(R&6)!==0)throw Error(y(331));var c=R;if(R|=4,Zd(n.current),Yd(n,n.current,u,l),R=c,oi(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(ei,n)}catch{}return!0}finally{N.p=i,z.T=a,u0(t,e)}}function bs(t,e,l){e=Yt(l,e),e=yc(t.stateNode,e,2),t=je(t,e,2),t!==null&&(ai(t,2),le(t))}function U(t,e,l){if(t.tag===3)bs(t,t,l);else for(;e!==null;){if(e.tag===3){bs(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ye===null||!Ye.has(a))){t=Yt(l,t),l=Td(2),a=je(e,l,2),a!==null&&(zd(l,a,e,t),ai(a,2),le(a));break}}e=e.return}}function Hu(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new $1;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(zf=!0,i.add(l),t=lh.bind(null,t,e,l),e.then(t,t))}function lh(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,j===t&&(O&l)===l&&(F===4||F===3&&(O&62914560)===O&&300>_t()-Gn?(R&2)===0&&ea(t,0):wf|=l,Pl===O&&(Pl=0)),le(t)}function f0(t,e){e===0&&(e=Ps()),t=bl(t,e),t!==null&&(ai(t,e),le(t))}function ah(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),f0(t,l)}function ih(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(y(314))}a!==null&&a.delete(e),f0(t,l)}function nh(t,e){return Gc(t,e)}var vn=null,Cl=null,Ec=!1,xn=!1,Uu=!1,Ue=0;function le(t){t!==Cl&&t.next===null&&(Cl===null?vn=Cl=t:Cl=Cl.next=t),xn=!0,Ec||(Ec=!0,ch())}function oi(t,e){if(!Uu&&xn){Uu=!0;do for(var l=!1,a=vn;a!==null;){if(!e)if(t!==0){var i=a.pendingLanes;if(i===0)var n=0;else{var u=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-kt(42|t)+1)-1,n&=i&~(u&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,ys(a,n))}else n=O,n=An(a,a===j?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||li(a,n)||(l=!0,ys(a,n));a=a.next}while(l);Uu=!1}}function uh(){o0()}function o0(){xn=Ec=!1;var t=0;Ue!==0&&gh()&&(t=Ue);for(var e=_t(),l=null,a=vn;a!==null;){var i=a.next,n=s0(a,e);n===0?(a.next=null,l===null?vn=i:l.next=i,i===null&&(Cl=l)):(l=a,(t!==0||(n&3)!==0)&&(xn=!0)),a=i}it!==0&&it!==5||oi(t,!1),Ue!==0&&(Ue=0)}function s0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var u=31-kt(n),c=1<<u,f=i[u];f===-1?((c&l)===0||(c&a)!==0)&&(i[u]=Bp(c,e)):f<=e&&(t.expiredLanes|=c),n&=~c}if(e=j,l=O,l=An(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(H===2||H===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&du(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||li(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&du(a),jc(l)){case 2:case 8:l=$s;break;case 32:l=en;break;case 268435456:l=Is;break;default:l=en}return a=r0.bind(null,t),l=Gc(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&du(a),t.callbackPriority=2,t.callbackNode=null,2}function r0(t,e){if(it!==0&&it!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Yn()&&t.callbackNode!==l)return null;var a=O;return a=An(t,t===j?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Fd(t,a,e),s0(t,_t()),t.callbackNode!=null&&t.callbackNode===l?r0.bind(null,t):null)}function ys(t,e){if(Yn())return null;Fd(t,e,!0)}function ch(){bh(function(){(R&6)!==0?Gc(Fs,uh):o0()})}function Ef(){if(Ue===0){var t=Fl;t===0&&(t=xi,xi<<=1,(xi&261888)===0&&(xi=256)),Ue=t}return Ue}function vs(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qi(""+t)}function xs(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function fh(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var n=vs((i[zt]||null).action),u=a.submitter;u&&(e=(e=u[zt]||null)?vs(e.formAction):u.getAttribute("formAction"),e!==null&&(n=e,u=null));var c=new _n("action","action",null,a,i);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ue!==0){var f=u?xs(i,u):new FormData(i);mc(l,{pending:!0,data:f,method:i.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=u?xs(i,u):new FormData(i),mc(l,{pending:!0,data:f,method:i.method,action:n},n,f))},currentTarget:i}]})}}for(Di=0;Di<ic.length;Di++)Bi=ic[Di],Ss=Bi.toLowerCase(),Ts=Bi[0].toUpperCase()+Bi.slice(1),Wt(Ss,"on"+Ts);var Bi,Ss,Ts,Di;Wt(zr,"onAnimationEnd");Wt(wr,"onAnimationIteration");Wt(Mr,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(E1,"onTransitionRun");Wt(C1,"onTransitionStart");Wt(A1,"onTransitionCancel");Wt(Er,"onTransitionEnd");Jl("onMouseEnter",["mouseout","mouseover"]);Jl("onMouseLeave",["mouseout","mouseover"]);Jl("onPointerEnter",["pointerout","pointerover"]);Jl("onPointerLeave",["pointerout","pointerover"]);hl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hl("onBeforeInput",["compositionend","keypress","textInput","paste"]);hl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wa));function d0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var n=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],f=c.instance,r=c.currentTarget;if(c=c.listener,f!==n&&i.isPropagationStopped())break t;n=c,i.currentTarget=r;try{n(i)}catch(m){an(m)}i.currentTarget=null,n=f}else for(u=0;u<a.length;u++){if(c=a[u],f=c.instance,r=c.currentTarget,c=c.listener,f!==n&&i.isPropagationStopped())break t;n=c,i.currentTarget=r;try{n(i)}catch(m){an(m)}i.currentTarget=null,n=f}}}}function C(t,e){var l=e[Fu];l===void 0&&(l=e[Fu]=new Set);var a=t+"__bubble";l.has(a)||(p0(e,t,2,!1),l.add(a))}function qu(t,e,l){var a=0;e&&(a|=4),p0(l,t,a,e)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Cf(t){if(!t[Ri]){t[Ri]=!0,ir.forEach(function(l){l!=="selectionchange"&&(oh.has(l)||qu(l,!1,t),qu(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ri]||(e[Ri]=!0,qu("selectionchange",!1,e))}}function p0(t,e,l,a){switch(E0(e)){case 2:var i=Uh;break;case 8:i=qh;break;default:i=kf}l=i.bind(null,e,l,t),i=void 0,!ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function Gu(t,e,l,a,i){var n=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===i)break;if(u===4)for(u=a.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;c!==null;){if(u=Ol(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){a=n=u;continue t}c=c.parentNode}}a=a.return}dr(function(){var r=n,m=Qc(l),g=[];t:{var d=Cr.get(t);if(d!==void 0){var h=_n,v=t;switch(t){case"keypress":if(Li(l)===0)break t;case"keydown":case"keyup":h=i1;break;case"focusin":v="focus",h=bu;break;case"focusout":v="blur",h=bu;break;case"beforeblur":case"afterblur":h=bu;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=_o;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=c1;break;case zr:case wr:case Mr:h=Wp;break;case Er:h=o1;break;case"scroll":case"scrollend":h=Qp;break;case"wheel":h=r1;break;case"copy":case"cut":case"paste":h=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ko;break;case"toggle":case"beforetoggle":h=p1}var T=(e&4)!==0,q=!T&&(t==="scroll"||t==="scrollend"),s=T?d!==null?d+"Capture":null:d;T=[];for(var o=r,p;o!==null;){var b=o;if(p=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||p===null||s===null||(b=ja(o,s),b!=null&&T.push(Fa(o,b,p))),q)break;o=o.return}0<T.length&&(d=new h(d,v,null,l,m),g.push({event:d,listeners:T}))}}if((e&7)===0){t:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&l!==tc&&(v=l.relatedTarget||l.fromElement)&&(Ol(v)||v[ia]))break t;if((h||d)&&(d=m.window===m?m:(d=m.ownerDocument)?d.defaultView||d.parentWindow:window,h?(v=l.relatedTarget||l.toElement,h=r,v=v?Ol(v):null,v!==null&&(q=ti(v),T=v.tag,v!==q||T!==5&&T!==27&&T!==6)&&(v=null)):(h=null,v=r),h!==v)){if(T=_o,b="onMouseLeave",s="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(T=ko,b="onPointerLeave",s="onPointerEnter",o="pointer"),q=h==null?d:wa(h),p=v==null?d:wa(v),d=new T(b,o+"leave",h,l,m),d.target=q,d.relatedTarget=p,b=null,Ol(m)===r&&(T=new T(s,o+"enter",v,l,m),T.target=p,T.relatedTarget=q,b=T),q=b,h&&v)e:{for(T=sh,s=h,o=v,p=0,b=s;b;b=T(b))p++;b=0;for(var S=o;S;S=T(S))b++;for(;0<p-b;)s=T(s),p--;for(;0<b-p;)o=T(o),b--;for(;p--;){if(s===o||o!==null&&s===o.alternate){T=s;break e}s=T(s),o=T(o)}T=null}else T=null;h!==null&&zs(g,d,h,T,!1),v!==null&&q!==null&&zs(g,q,v,T,!0)}}t:{if(d=r?wa(r):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var D=No;else if(Ro(d))if(yr)D=z1;else{D=S1;var x=x1}else h=d.nodeName,!h||h.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?r&&Xc(r.elementType)&&(D=No):D=T1;if(D&&(D=D(t,r))){br(g,D,l,m);break t}x&&x(t,d,r),t==="focusout"&&r&&d.type==="number"&&r.memoizedProps.value!=null&&Pu(d,"number",d.value)}switch(x=r?wa(r):window,t){case"focusin":(Ro(x)||x.contentEditable==="true")&&(Bl=x,lc=r,_a=null);break;case"focusout":_a=lc=Bl=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Go(g,l,m);break;case"selectionchange":if(M1)break;case"keydown":case"keyup":Go(g,l,m)}var E;if(Kc)t:{switch(t){case"compositionstart":var _="onCompositionStart";break t;case"compositionend":_="onCompositionEnd";break t;case"compositionupdate":_="onCompositionUpdate";break t}_=void 0}else Dl?gr(t,l)&&(_="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(_="onCompositionStart");_&&(hr&&l.locale!=="ko"&&(Dl||_!=="onCompositionStart"?_==="onCompositionEnd"&&Dl&&(E=pr()):(Re=m,Zc="value"in Re?Re.value:Re.textContent,Dl=!0)),x=Sn(r,_),0<x.length&&(_=new Oo(_,t,null,l,m),g.push({event:_,listeners:x}),E?_.data=E:(E=mr(l),E!==null&&(_.data=E)))),(E=g1?m1(t,l):b1(t,l))&&(_=Sn(r,"onBeforeInput"),0<_.length&&(x=new Oo("onBeforeInput","beforeinput",null,l,m),g.push({event:x,listeners:_}),x.data=E)),fh(g,t,r,l,m)}d0(g,e)})}function Fa(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Sn(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=ja(t,l),i!=null&&a.unshift(Fa(t,i,n)),i=ja(t,e),i!=null&&a.push(Fa(t,i,n))),t.tag===3)return a;t=t.return}return[]}function sh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zs(t,e,l,a,i){for(var n=e._reactName,u=[];l!==null&&l!==a;){var c=l,f=c.alternate,r=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||r===null||(f=r,i?(r=ja(l,n),r!=null&&u.unshift(Fa(l,r,f))):i||(r=ja(l,n),r!=null&&u.push(Fa(l,r,f)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var rh=/\r\n?/g,dh=/\u0000|\uFFFD/g;function ws(t){return(typeof t=="string"?t:""+t).replace(rh,`
`).replace(dh,"")}function h0(t,e){return e=ws(e),ws(t)===e}function G(t,e,l,a,i,n){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Wl(t,""+a);break;case"className":zi(t,"class",a);break;case"tabIndex":zi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":zi(t,l,a);break;case"style":rr(t,a,n);break;case"data":if(e!=="object"){zi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=qi(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(e!=="input"&&G(t,e,"name",i.name,i,null),G(t,e,"formEncType",i.formEncType,i,null),G(t,e,"formMethod",i.formMethod,i,null),G(t,e,"formTarget",i.formTarget,i,null)):(G(t,e,"encType",i.encType,i,null),G(t,e,"method",i.method,i,null),G(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=qi(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=de);break;case"onScroll":a!=null&&C("scroll",t);break;case"onScrollEnd":a!=null&&C("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=qi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":C("beforetoggle",t),C("toggle",t),Ui(t,"popover",a);break;case"xlinkActuate":ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ie(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ie(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ie(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ie(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ui(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Yp.get(l)||l,Ui(t,l,a))}}function Cc(t,e,l,a,i,n){switch(l){case"style":rr(t,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(y(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Wl(t,a):(typeof a=="number"||typeof a=="bigint")&&Wl(t,""+a);break;case"onScroll":a!=null&&C("scroll",t);break;case"onScrollEnd":a!=null&&C("scrollend",t);break;case"onClick":a!=null&&(t.onclick=de);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nr.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),n=t[zt]||null,n=n!=null?n[l]:null,typeof n=="function"&&t.removeEventListener(e,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Ui(t,l,a)}}}function pt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":C("error",t),C("load",t);var a=!1,i=!1,n;for(n in l)if(l.hasOwnProperty(n)){var u=l[n];if(u!=null)switch(n){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:G(t,e,n,u,l,null)}}i&&G(t,e,"srcSet",l.srcSet,l,null),a&&G(t,e,"src",l.src,l,null);return;case"input":C("invalid",t);var c=n=u=i=null,f=null,r=null;for(a in l)if(l.hasOwnProperty(a)){var m=l[a];if(m!=null)switch(a){case"name":i=m;break;case"type":u=m;break;case"checked":f=m;break;case"defaultChecked":r=m;break;case"value":n=m;break;case"defaultValue":c=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(y(137,e));break;default:G(t,e,a,m,l,null)}}fr(t,n,c,f,r,u,i,!1);return;case"select":C("invalid",t),a=u=n=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:G(t,e,i,c,l,null)}e=n,l=u,t.multiple=!!a,e!=null?jl(t,!!a,e,!1):l!=null&&jl(t,!!a,l,!0);return;case"textarea":C("invalid",t),n=i=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":i=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(y(91));break;default:G(t,e,u,c,l,null)}sr(t,a,i,n);return;case"option":for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null)&&(f==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":G(t,e,f,a,l,null));return;case"dialog":C("beforetoggle",t),C("toggle",t),C("cancel",t),C("close",t);break;case"iframe":case"object":C("load",t);break;case"video":case"audio":for(a=0;a<Wa.length;a++)C(Wa[a],t);break;case"image":C("error",t),C("load",t);break;case"details":C("toggle",t);break;case"embed":case"source":case"link":C("error",t),C("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in l)if(l.hasOwnProperty(r)&&(a=l[r],a!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:G(t,e,r,a,l,null)}return;default:if(Xc(e)){for(m in l)l.hasOwnProperty(m)&&(a=l[m],a!==void 0&&Cc(t,e,m,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&G(t,e,c,a,l,null))}function ph(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,c=null,f=null,r=null,m=null;for(h in l){var g=l[h];if(l.hasOwnProperty(h)&&g!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":f=g;default:a.hasOwnProperty(h)||G(t,e,h,null,a,g)}}for(var d in a){var h=a[d];if(g=l[d],a.hasOwnProperty(d)&&(h!=null||g!=null))switch(d){case"type":n=h;break;case"name":i=h;break;case"checked":r=h;break;case"defaultChecked":m=h;break;case"value":u=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(y(137,e));break;default:h!==g&&G(t,e,d,h,a,g)}}Iu(t,u,c,f,r,m,n,i);return;case"select":h=u=c=d=null;for(n in l)if(f=l[n],l.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":h=f;default:a.hasOwnProperty(n)||G(t,e,n,null,a,f)}for(i in a)if(n=a[i],f=l[i],a.hasOwnProperty(i)&&(n!=null||f!=null))switch(i){case"value":d=n;break;case"defaultValue":c=n;break;case"multiple":u=n;default:n!==f&&G(t,e,i,n,a,f)}e=c,l=u,a=h,d!=null?jl(t,!!l,d,!1):!!a!=!!l&&(e!=null?jl(t,!!l,e,!0):jl(t,!!l,l?[]:"",!1));return;case"textarea":h=d=null;for(c in l)if(i=l[c],l.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:G(t,e,c,null,a,i)}for(u in a)if(i=a[u],n=l[u],a.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":d=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(y(91));break;default:i!==n&&G(t,e,u,i,a,n)}or(t,d,h);return;case"option":for(var v in l)d=l[v],l.hasOwnProperty(v)&&d!=null&&!a.hasOwnProperty(v)&&(v==="selected"?t.selected=!1:G(t,e,v,null,a,d));for(f in a)d=a[f],h=l[f],a.hasOwnProperty(f)&&d!==h&&(d!=null||h!=null)&&(f==="selected"?t.selected=d&&typeof d!="function"&&typeof d!="symbol":G(t,e,f,d,a,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in l)d=l[T],l.hasOwnProperty(T)&&d!=null&&!a.hasOwnProperty(T)&&G(t,e,T,null,a,d);for(r in a)if(d=a[r],h=l[r],a.hasOwnProperty(r)&&d!==h&&(d!=null||h!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(y(137,e));break;default:G(t,e,r,d,a,h)}return;default:if(Xc(e)){for(var q in l)d=l[q],l.hasOwnProperty(q)&&d!==void 0&&!a.hasOwnProperty(q)&&Cc(t,e,q,void 0,a,d);for(m in a)d=a[m],h=l[m],!a.hasOwnProperty(m)||d===h||d===void 0&&h===void 0||Cc(t,e,m,d,a,h);return}}for(var s in l)d=l[s],l.hasOwnProperty(s)&&d!=null&&!a.hasOwnProperty(s)&&G(t,e,s,null,a,d);for(g in a)d=a[g],h=l[g],!a.hasOwnProperty(g)||d===h||d==null&&h==null||G(t,e,g,d,a,h)}function Ms(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],n=i.transferSize,u=i.initiatorType,c=i.duration;if(n&&c&&Ms(u)){for(u=0,c=i.responseEnd,a+=1;a<l.length;a++){var f=l[a],r=f.startTime;if(r>c)break;var m=f.transferSize,g=f.initiatorType;m&&Ms(g)&&(f=f.responseEnd,u+=m*(f<c?1:(c-r)/(f-r)))}if(--a,e+=8*(n+u)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ac=null,_c=null;function Tn(t){return t.nodeType===9?t:t.ownerDocument}function Es(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Oc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lu=null;function gh(){var t=window.event;return t&&t.type==="popstate"?t===Lu?!1:(Lu=t,!0):(Lu=null,!1)}var m0=typeof setTimeout=="function"?setTimeout:void 0,mh=typeof clearTimeout=="function"?clearTimeout:void 0,Cs=typeof Promise=="function"?Promise:void 0,bh=typeof queueMicrotask=="function"?queueMicrotask:typeof Cs!="undefined"?function(t){return Cs.resolve(null).then(t).catch(yh)}:m0;function yh(t){setTimeout(function(){throw t})}function Ie(t){return t==="head"}function As(t,e){var l=e,a=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(i),aa(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Ga(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Ga(l);for(var n=l.firstChild;n;){var u=n.nextSibling,c=n.nodeName;n[ii]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=u}}else l==="body"&&Ga(t.ownerDocument.body);l=i}while(l);aa(e)}function _s(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function kc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":kc(l),Yc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function vh(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[ii])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Zt(t.nextSibling),t===null)break}return null}function xh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Zt(t.nextSibling),t===null))return null;return t}function b0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Zt(t.nextSibling),t===null))return null;return t}function Dc(t){return t.data==="$?"||t.data==="$~"}function Bc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Sh(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Zt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Rc=null;function Os(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Zt(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function ks(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function y0(t,e,l){switch(e=Tn(l),t){case"html":if(t=e.documentElement,!t)throw Error(y(452));return t;case"head":if(t=e.head,!t)throw Error(y(453));return t;case"body":if(t=e.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function Ga(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Yc(t)}var Vt=new Map,Ds=new Set;function zn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Te=N.d;N.d={f:Th,r:zh,D:wh,C:Mh,L:Eh,m:Ch,X:_h,S:Ah,M:Oh};function Th(){var t=Te.f(),e=Ln();return t||e}function zh(t){var e=na(t);e!==null&&e.tag===5&&e.type==="form"?rd(e):Te.r(t)}var oa=typeof document=="undefined"?null:document;function v0(t,e,l){var a=oa;if(a&&typeof e=="string"&&e){var i=jt(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Ds.has(i)||(Ds.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),pt(e,"link",t),ct(e),a.head.appendChild(e)))}}function wh(t){Te.D(t),v0("dns-prefetch",t,null)}function Mh(t,e){Te.C(t,e),v0("preconnect",t,e)}function Eh(t,e,l){Te.L(t,e,l);var a=oa;if(a&&t&&e){var i='link[rel="preload"][as="'+jt(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+jt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+jt(l.imageSizes)+'"]')):i+='[href="'+jt(t)+'"]';var n=i;switch(e){case"style":n=la(t);break;case"script":n=sa(t)}Vt.has(n)||(t=V({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Vt.set(n,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(si(n))||e==="script"&&a.querySelector(ri(n))||(e=a.createElement("link"),pt(e,"link",t),ct(e),a.head.appendChild(e)))}}function Ch(t,e){Te.m(t,e);var l=oa;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+jt(a)+'"][href="'+jt(t)+'"]',n=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=sa(t)}if(!Vt.has(n)&&(t=V({rel:"modulepreload",href:t},e),Vt.set(n,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ri(n)))return}a=l.createElement("link"),pt(a,"link",t),ct(a),l.head.appendChild(a)}}}function Ah(t,e,l){Te.S(t,e,l);var a=oa;if(a&&t){var i=Ll(a).hoistableStyles,n=la(t);e=e||"default";var u=i.get(n);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(si(n)))c.loading=5;else{t=V({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Vt.get(n))&&Af(t,l);var f=u=a.createElement("link");ct(f),pt(f,"link",t),f._p=new Promise(function(r,m){f.onload=r,f.onerror=m}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ji(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},i.set(n,u)}}}function _h(t,e){Te.X(t,e);var l=oa;if(l&&t){var a=Ll(l).hoistableScripts,i=sa(t),n=a.get(i);n||(n=l.querySelector(ri(i)),n||(t=V({src:t,async:!0},e),(e=Vt.get(i))&&_f(t,e),n=l.createElement("script"),ct(n),pt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function Oh(t,e){Te.M(t,e);var l=oa;if(l&&t){var a=Ll(l).hoistableScripts,i=sa(t),n=a.get(i);n||(n=l.querySelector(ri(i)),n||(t=V({src:t,async:!0,type:"module"},e),(e=Vt.get(i))&&_f(t,e),n=l.createElement("script"),ct(n),pt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function Bs(t,e,l,a){var i=(i=qe.current)?zn(i):null;if(!i)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=la(l.href),l=Ll(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=la(l.href);var n=Ll(i).hoistableStyles,u=n.get(t);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,u),(n=i.querySelector(si(t)))&&!n._p&&(u.instance=n,u.state.loading=5),Vt.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Vt.set(t,l),n||kh(i,t,l,u.state))),e&&a===null)throw Error(y(528,""));return u}if(e&&a!==null)throw Error(y(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=sa(l),l=Ll(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function la(t){return'href="'+jt(t)+'"'}function si(t){return'link[rel="stylesheet"]['+t+"]"}function x0(t){return V({},t,{"data-precedence":t.precedence,precedence:null})}function kh(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),pt(e,"link",l),ct(e),t.head.appendChild(e))}function sa(t){return'[src="'+jt(t)+'"]'}function ri(t){return"script[async]"+t}function Rs(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+jt(l.href)+'"]');if(a)return e.instance=a,ct(a),a;var i=V({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ct(a),pt(a,"style",i),Ji(a,l.precedence,t),e.instance=a;case"stylesheet":i=la(l.href);var n=t.querySelector(si(i));if(n)return e.state.loading|=4,e.instance=n,ct(n),n;a=x0(l),(i=Vt.get(i))&&Af(a,i),n=(t.ownerDocument||t).createElement("link"),ct(n);var u=n;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),pt(n,"link",a),e.state.loading|=4,Ji(n,l.precedence,t),e.instance=n;case"script":return n=sa(l.src),(i=t.querySelector(ri(n)))?(e.instance=i,ct(i),i):(a=l,(i=Vt.get(n))&&(a=V({},l),_f(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),ct(i),pt(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(y(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ji(a,l.precedence,t));return e.instance}function Ji(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,n=i,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)n=c;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Af(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function _f(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Wi=null;function Ns(t,e,l){if(Wi===null){var a=new Map,i=Wi=new Map;i.set(l,a)}else i=Wi,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var n=l[i];if(!(n[ii]||n[st]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(n):a.set(u,[n])}}return a}function Hs(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Dh(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function S0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Bh(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var i=la(a.href),n=e.querySelector(si(i));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=wn.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=n,ct(n);return}n=e.ownerDocument||e,a=x0(a),(i=Vt.get(i))&&Af(a,i),n=n.createElement("link"),ct(n);var u=n;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),pt(n,"link",a),l.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=wn.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var ju=0;function Rh(t,e){return t.stylesheets&&t.count===0&&Fi(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Fi(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+e);0<t.imgBytes&&ju===0&&(ju=62500*hh());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fi(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>ju?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function wn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mn=null;function Fi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mn=new Map,e.forEach(Nh,t),Mn=null,wn.call(t))}function Nh(t,e){if(!(e.state.loading&4)){var l=Mn.get(t);if(l)var a=l.get(null);else{l=new Map,Mn.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}i=e.instance,u=i.getAttribute("data-precedence"),n=l.get(u)||a,n===a&&l.set(null,i),l.set(u,i),this.count++,a=wn.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var $a={$$typeof:re,Provider:null,Consumer:null,_currentValue:il,_currentValue2:il,_threadCount:0};function Hh(t,e,l,a,i,n,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pu(0),this.hiddenUpdates=pu(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function T0(t,e,l,a,i,n,u,c,f,r,m,g){return t=new Hh(t,e,l,u,f,r,m,g,c),e=1,n===!0&&(e|=24),n=Ct(3,null,null,e),t.current=n,n.stateNode=t,e=tf(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:e},af(n),t}function z0(t){return t?(t=Hl,t):Hl}function w0(t,e,l,a,i,n){i=z0(i),a.context===null?a.context=i:a.pendingContext=i,a=Le(e),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=je(t,a,e),l!==null&&(Tt(l,t,e),ka(l,t,e))}function Us(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Of(t,e){Us(t,e),(t=t.alternate)&&Us(t,e)}function M0(t){if(t.tag===13||t.tag===31){var e=bl(t,67108864);e!==null&&Tt(e,t,67108864),Of(t,67108864)}}function qs(t){if(t.tag===13||t.tag===31){var e=Dt();e=Lc(e);var l=bl(t,e);l!==null&&Tt(l,t,e),Of(t,e)}}var En=!0;function Uh(t,e,l,a){var i=z.T;z.T=null;var n=N.p;try{N.p=2,kf(t,e,l,a)}finally{N.p=n,z.T=i}}function qh(t,e,l,a){var i=z.T;z.T=null;var n=N.p;try{N.p=8,kf(t,e,l,a)}finally{N.p=n,z.T=i}}function kf(t,e,l,a){if(En){var i=Nc(a);if(i===null)Gu(t,e,a,Cn,l),Gs(t,a);else if(Lh(i,t,e,l,a))a.stopPropagation();else if(Gs(t,a),e&4&&-1<Gh.indexOf(t)){for(;i!==null;){var n=na(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=el(n.pendingLanes);if(u!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-kt(u);c.entanglements[1]|=f,u&=~f}le(n),(R&6)===0&&(mn=_t()+500,oi(0,!1))}}break;case 31:case 13:c=bl(n,2),c!==null&&Tt(c,n,2),Ln(),Of(n,2)}if(n=Nc(a),n===null&&Gu(t,e,a,Cn,l),n===i)break;i=n}i!==null&&a.stopPropagation()}else Gu(t,e,a,null,l)}}function Nc(t){return t=Qc(t),Df(t)}var Cn=null;function Df(t){if(Cn=null,t=Ol(t),t!==null){var e=ti(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=Zs(e),t!==null)return t;t=null}else if(l===31){if(t=Vs(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Cn=t,null}function E0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ep()){case Fs:return 2;case $s:return 8;case en:case Cp:return 32;case Is:return 268435456;default:return 32}default:return 32}}var Hc=!1,Qe=null,Ze=null,Ve=null,Ia=new Map,Pa=new Map,De=[],Gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gs(t,e){switch(t){case"focusin":case"focusout":Qe=null;break;case"dragenter":case"dragleave":Ze=null;break;case"mouseover":case"mouseout":Ve=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(e.pointerId)}}function xa(t,e,l,a,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[i]},e!==null&&(e=na(e),e!==null&&M0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Lh(t,e,l,a,i){switch(e){case"focusin":return Qe=xa(Qe,t,e,l,a,i),!0;case"dragenter":return Ze=xa(Ze,t,e,l,a,i),!0;case"mouseover":return Ve=xa(Ve,t,e,l,a,i),!0;case"pointerover":var n=i.pointerId;return Ia.set(n,xa(Ia.get(n)||null,t,e,l,a,i)),!0;case"gotpointercapture":return n=i.pointerId,Pa.set(n,xa(Pa.get(n)||null,t,e,l,a,i)),!0}return!1}function C0(t){var e=Ol(t.target);if(e!==null){var l=ti(e);if(l!==null){if(e=l.tag,e===13){if(e=Zs(l),e!==null){t.blockedOn=e,To(t.priority,function(){qs(l)});return}}else if(e===31){if(e=Vs(l),e!==null){t.blockedOn=e,To(t.priority,function(){qs(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $i(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Nc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);tc=a,l.target.dispatchEvent(a),tc=null}else return e=na(l),e!==null&&M0(e),t.blockedOn=l,!1;e.shift()}return!0}function Ls(t,e,l){$i(t)&&l.delete(e)}function jh(){Hc=!1,Qe!==null&&$i(Qe)&&(Qe=null),Ze!==null&&$i(Ze)&&(Ze=null),Ve!==null&&$i(Ve)&&(Ve=null),Ia.forEach(Ls),Pa.forEach(Ls)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,Hc||(Hc=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,jh)))}var Hi=null;function js(t){Hi!==t&&(Hi=t,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,function(){Hi===t&&(Hi=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(Df(a||l)===null)continue;break}var n=na(l);n!==null&&(t.splice(e,3),e-=3,mc(n,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function aa(t){function e(f){return Ni(f,t)}Qe!==null&&Ni(Qe,t),Ze!==null&&Ni(Ze,t),Ve!==null&&Ni(Ve,t),Ia.forEach(e),Pa.forEach(e);for(var l=0;l<De.length;l++){var a=De[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<De.length&&(l=De[0],l.blockedOn===null);)C0(l),l.blockedOn===null&&De.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],n=l[a+1],u=i[zt]||null;if(typeof n=="function")u||js(l);else if(u){var c=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[zt]||null)c=u.formAction;else if(Df(i)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),js(l)}}}function A0(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Bf(t){this._internalRoot=t}Xn.prototype.render=Bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));var l=e.current,a=Dt();w0(l,a,t,e,null,null)};Xn.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;w0(t.current,2,null,t,null,null),Ln(),e[ia]=null}};function Xn(t){this._internalRoot=t}Xn.prototype.unstable_scheduleHydration=function(t){if(t){var e=ar();t={blockedOn:null,target:t,priority:e};for(var l=0;l<De.length&&e!==0&&e<De[l].priority;l++);De.splice(l,0,t),l===0&&C0(t)}};var Ys=Xs.version;if(Ys!=="19.2.8")throw Error(y(527,Ys,"19.2.8"));N.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=vp(e),t=t!==null?Ks(t):null,t=t===null?null:t.stateNode,t};var Yh={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Sa.isDisabled&&Sa.supportsFiber))try{ei=Sa.inject(Yh),Ot=Sa}catch{}var Sa;Qn.createRoot=function(t,e){if(!Qs(t))throw Error(y(299));var l=!1,a="",i=vd,n=xd,u=Sd;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=T0(t,1,!1,null,null,l,a,null,i,n,u,A0),t[ia]=e.current,Cf(t),new Bf(e)};Qn.hydrateRoot=function(t,e,l){if(!Qs(t))throw Error(y(299));var a=!1,i="",n=vd,u=xd,c=Sd,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=T0(t,1,!0,e,l!=null?l:null,a,i,f,n,u,c,A0),e.context=z0(null),l=e.current,a=Dt(),a=Lc(a),i=Le(a),i.callback=null,je(l,i,a),l=a,e.current.lanes=l,ai(e,l),le(e),t[ia]=e.current,Cf(t),new Xn(e)};Qn.version="19.2.8"});var D0=we((ug,k0)=>{"use strict";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(t){console.error(t)}}O0(),k0.exports=_0()});var Nt=jf(hi()),Y0=jf(D0());var B0=`<!doctype html>
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
<div style="width: 390px; min-height: 1010px; box-sizing: border-box; padding: 20px 16px 20px; display: flex; flex-direction: column; gap: 14px; background: #0d0f14; font-family: Rubik, system-ui, sans-serif; color: #ffffff; position: relative">

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
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":390,"height":1010}}'>
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
`;var at=window.Telegram&&window.Telegram.WebApp,q0=100,Gf={get(){try{let t=parseFloat(localStorage.getItem("rk_balance"));return isNaN(t)?q0:t}catch{return q0}},set(t){try{localStorage.setItem("rk_balance",String(Math.round(t*100)/100))}catch{}}};window.RK={wallet:Gf,user:at&&at.initDataUnsafe&&at.initDataUnsafe.user||null};if(at){at.ready(),at.expand();try{at.setHeaderColor("#0b0d12"),at.setBackgroundColor("#0b0d12")}catch{}try{at.disableVerticalSwipes&&at.disableVerticalSwipes()}catch{}}document.addEventListener("click",t=>{if(at&&at.HapticFeedback&&t.target.closest&&t.target.closest("button, a"))try{at.HapticFeedback.impactOccurred("light")}catch{}},!0);var Vn={"16b8be03ec4054a9ad560c5be1c9ab9e":"banner-crash.jpg","88b023f22e2d3006641849bb168e073d":"banner-cases.jpg","63c10368990e8788e655de65d5a9b515":"banner-upgrade.jpg",b81dc491ff982e1892b4eeeb94570e3c:"banner-mines.jpg","661884b648dd965ea69af44ea8c7ee95":"avatar.jpg",a8d1e2a1f1626c9b8edd4755d9c32150:"rocket.png","29f965541d768edadf1aad890a105f4f":"space.jpg",ac9e83f513d62d0c7fc3250c8a2d1f89:"candle.svg","1f689ff254757e970266197964c5d390":"lolpop.svg","9b7049b84c84b25ce8e457f56c837c42":"calendar.svg",b4c8d4f914ed6e253c933045ab9e3461:"hypno.svg","808ef5efdbeb6b276f70430b220f760b":"bells.svg","6ef5ecbeb712d1b1d752a33d1e9c279d":"cake.svg","6e3628fac94b5266f3b64cea9c5fe7ee":"globe.svg",c2c0de4f1d0a4ed1dd2df84eff4c7f73:"berry.svg","45ac385132ce7b83da133306d9a330f8":"muffin.svg","8f4c023d08704d2319e54c9872a8c46d":"record.svg",fe01a5a2d2ff76e0192e008ed6267558:"tophat.svg",ef580f1649ad89b5e268954da6ea30b2:"dring.svg","5bb7da32fc8a6f8dbe91cf7cedc20c65":"lpotion.svg","734e25b54462cda990767f69381d8355":"rose.svg",c02bc9477e447f6f71962df1fc7a399a:"bear.svg","4826a2db621709393534f8feae3d3f4a":"signet.svg","5efc0b426406d53e3b649c727079f26d":"watch.svg",e562d84d61312007f5108ab64cbfe6f9:"iongem.svg","923c4583ef32f1e6549c08d5a1839d4c":"peach.svg","500977bc4572974cf066e4c08b276369":"cap.svg",a64ccb23ba5a5ab0f1f789ab412cf3af:"pepe.svg",bb8c4faf5d5477b7abe934698601360a:"none.svg"};function Jh(t){return t.replace(/\/_blob\/([0-9a-f]{32})/g,(e,l)=>Vn[l]?"assets/"+Vn[l]:e)}function Wh(t){return t.replace(/position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba\(5, 6, 10, ([0-9.]+)\); display: flex; justify-content: center; align-items: flex-start; padding-top: \d+px/g,"position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, $1); display: flex; justify-content: center; align-items: center; padding: 16px")}var Rf={};window.rkThumb=function(t,e){let l=t.toLowerCase().replace(/[^a-z0-9]/g,""),a="https://fragment.com/file/gifts/"+l+"/thumb.webp",i="https://nft.fragment.com/gift/"+l+"-1.webp";return Rf[a]=i,Rf[i]=e.replace(/\/_blob\/([0-9a-f]{32})/,(n,u)=>Vn[u]?"assets/"+Vn[u]:n),a};window.addEventListener("error",t=>{let e=t.target;if(e&&e.tagName==="IMG"){let l=Rf[e.getAttribute("src")];l&&e.setAttribute("src",l)}},!0);function di(t,e){let l=Wh(Jh(e)),a=new DOMParser().parseFromString(l,"text/html"),i=a.querySelector("x-dc"),n=i.querySelector("helmet"),u=[];n&&(n.querySelectorAll("link, style").forEach(m=>u.push(m.outerHTML)),n.remove());let c=Array.from(i.children)[0],f=a.querySelector("script[data-dc-script]").textContent,r=new Function("DCLogic",f+`
;return Component;`)(Nf);return{name:t,head:u,root:c,Logic:r}}var Nf=class{constructor(e){this.props=e||{},this.state={},this._host=null}setState(e,l){typeof e=="function"&&(e=e(this.state,this.props)),Object.assign(this.state,e),e&&"balance"in e&&Gf.set(e.balance),this._host?this._host.forceUpdate(l):l&&l()}forceUpdate(e){this._host&&this._host.forceUpdate(e)}},Hf=t=>t.replace(/-([a-z])/g,(e,l)=>l.toUpperCase());function G0(t,e){if(t=t.trim(),t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(/^-?\d+(\.\d+)?$/.test(t))return parseFloat(t);let l=t.split("."),a;for(let i=e.length-1;i>=0;i--)if(e[i]&&l[0]in e[i]){a=e[i][l[0]];break}for(let i=1;i<l.length&&a!=null;i++)a=a[l[i]];return a}var Fh=/\{\{([^}]+)\}\}/g;function Zn(t,e){let l=t.match(/^\s*\{\{([^}]+)\}\}\s*$/);return l?G0(l[1],e):t.replace(Fh,(a,i)=>{let n=G0(i,e);return n==null?"":String(n)})}function $h(t){let e={};return t.split(";").forEach(l=>{let a=l.indexOf(":");if(a<0)return;let i=l.slice(0,a).trim(),n=l.slice(a+1).trim();if(i){if(i.startsWith("--")){e[i]=n;return}i.startsWith("-webkit-")&&(i="Webkit"+Hf(i.slice(8)).replace(/^./,u=>u.toUpperCase()).slice(0)),e[i.startsWith("Webkit")?i:Hf(i)]=n}}),e}function X0(t,e,l,a){if(t.nodeType===3){let m=t.nodeValue;return!m.trim()&&m.indexOf(`
`)!==-1?null:m.indexOf("{{")===-1?m:Zn(m,e)}if(t.nodeType!==1)return null;let i=t.tagName.toLowerCase(),n=m=>Array.from(t.childNodes).map((g,d)=>X0(g,m,l,d)).filter(g=>g!=null&&g!==!1);if(i==="sc-if")return Zn(t.getAttribute("value")||"",e)?Nt.default.createElement(Nt.default.Fragment,{key:a},...n(e)):null;if(i==="sc-for"){let m=Zn(t.getAttribute("list")||"",e)||[],g=t.getAttribute("as")||"item";return Nt.default.createElement(Nt.default.Fragment,{key:a},...m.map((d,h)=>Nt.default.createElement(Nt.default.Fragment,{key:h},...n(e.concat([{[g]:d,$index:h}])))))}let u=t.namespaceURI==="http://www.w3.org/2000/svg",c={key:a};for(let m of Array.from(t.attributes)){let g=m.name,d=m.value,h=d.indexOf("{{")===-1?d:Zn(d,e);if(!g.startsWith("hint-")){if(g==="class")g="className";else if(g==="for")g="htmlFor";else if(g==="style"){c.style=$h(String(h));continue}else if(g.startsWith("on")){let v="on"+g.charAt(2).toUpperCase()+g.slice(3);v==="Onclick"&&(v="onClick"),g.toLowerCase()==="onclick"&&(v="onClick"),g.toLowerCase()==="oninput"&&(v="onChange"),typeof h=="function"&&(c[v]=h);continue}else u&&g.indexOf("-")!==-1&&!g.startsWith("aria-")&&!g.startsWith("data-")?g=Hf(g):g==="tabindex"?g="tabIndex":g==="readonly"?g="readOnly":g==="disabled"&&(h=h===!0||h===""||h==="disabled"||h==="true");c[g]=h}}if(i==="a"){let g=(t.getAttribute("href")||"").match(/([A-Za-z]+)\.dc\.html$/);c.href="#",c.onClick=d=>{d.preventDefault(),g&&l(g[1])}}i==="input"&&"value"in c&&!c.onChange&&(c.readOnly=!0);let f=n(e);return{img:1,input:1,br:1,hr:1,meta:1,link:1}[i]?Nt.default.createElement(i,c):Nt.default.createElement(i,c,...f)}var Uf=class extends Nt.default.Component{constructor(e){super(e),this.logic=new e.screen.Logic({}),this.logic.state&&"balance"in this.logic.state&&(this.logic.state.balance=Gf.get()),this.logic._host=this}componentDidMount(){this.logic.componentDidMount&&this.logic.componentDidMount()}componentWillUnmount(){this.logic.componentWillUnmount&&this.logic.componentWillUnmount(),this.logic._host=null}render(){let e=this.logic.renderVals?this.logic.renderVals():{};return X0(this.props.screen.root,[e],this.props.nav,"root")}},Kn={Main:di("Main",B0),Crash:di("Crash",R0),Upgrade:di("Upgrade",N0),Cases:di("Cases",H0),Mines:di("Mines",U0)},L0=new Set;Object.values(Kn).forEach(t=>t.head.forEach(e=>{if(L0.has(e))return;L0.add(e);let l=document.createElement("div");l.innerHTML=e;let a=l.firstElementChild;a.tagName==="STYLE"&&/body\{/.test(a.textContent)&&(a.textContent=a.textContent.replace(/body\{[^}]*\}/,"")),document.head.appendChild(a)}));function j0(){let t=(location.hash||"").replace("#/","");return Kn[t]?t:"Main"}var qf=class extends Nt.default.Component{constructor(e){super(e),this.state={route:j0()},this.nav=this.nav.bind(this),this.back=()=>this.nav("Main")}componentDidMount(){window.addEventListener("hashchange",()=>this.setState({route:j0()})),at&&at.BackButton&&at.BackButton.onClick(this.back),this.syncBack()}componentDidUpdate(){this.syncBack()}syncBack(){!at||!at.BackButton||(this.state.route==="Main"?at.BackButton.hide():at.BackButton.show())}nav(e){Kn[e]&&(location.hash=e==="Main"?"":"#/"+e,this.setState({route:e}),window.scrollTo(0,0))}render(){let e=this.state.route;return Nt.default.createElement(Uf,{key:e,screen:Kn[e],nav:this.nav})}};function Q0(){let t=document.getElementById("app"),e=Math.min(window.innerWidth,480);t.style.zoom=String(e/390)}window.addEventListener("resize",Q0);Q0();(0,Y0.createRoot)(document.getElementById("app")).render(Nt.default.createElement(qf));})();
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
