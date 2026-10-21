(()=>{var ap=Object.create;var Vr=Object.defineProperty;var lp=Object.getOwnPropertyDescriptor;var ip=Object.getOwnPropertyNames;var np=Object.getPrototypeOf,op=Object.prototype.hasOwnProperty;var Me=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var sp=(t,e,a,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ip(e))!op.call(t,i)&&i!==a&&Vr(t,i,{get:()=>e[i],enumerable:!(l=lp(e,i))||l.enumerable});return t};var Xr=(t,e,a)=>(a=t!=null?ap(np(t)):{},sp(e||!t||!t.__esModule?Vr(a,"default",{value:t,enumerable:!0}):a,t));var lc=Me(T=>{"use strict";var to=Symbol.for("react.transitional.element"),rp=Symbol.for("react.portal"),cp=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),up=Symbol.for("react.profiler"),dp=Symbol.for("react.consumer"),pp=Symbol.for("react.context"),hp=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),bp=Symbol.for("react.memo"),Ir=Symbol.for("react.lazy"),mp=Symbol.for("react.activity"),Qr=Symbol.iterator;function yp(t){return t===null||typeof t!="object"?null:(t=Qr&&t[Qr]||t["@@iterator"],typeof t=="function"?t:null)}var $r={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pr=Object.assign,tc={};function ka(t,e,a){this.props=t,this.context=e,this.refs=tc,this.updater=a||$r}ka.prototype.isReactComponent={};ka.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ka.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ec(){}ec.prototype=ka.prototype;function eo(t,e,a){this.props=t,this.context=e,this.refs=tc,this.updater=a||$r}var ao=eo.prototype=new ec;ao.constructor=eo;Pr(ao,ka.prototype);ao.isPureReactComponent=!0;var Jr=Array.isArray;function Pn(){}var K={H:null,A:null,T:null,S:null},ac=Object.prototype.hasOwnProperty;function lo(t,e,a){var l=a.ref;return{$$typeof:to,type:t,key:e,ref:l!==void 0?l:null,props:a}}function vp(t,e){return lo(t.type,e,t.props)}function io(t){return typeof t=="object"&&t!==null&&t.$$typeof===to}function xp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Fr=/\/+/g;function $n(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xp(""+t.key):e.toString(36)}function wp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Pn,Pn):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Sa(t,e,a,l,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case to:case rp:o=!0;break;case Ir:return o=t._init,Sa(o(t._payload),e,a,l,i)}}if(o)return i=i(t),o=l===""?"."+$n(t,0):l,Jr(i)?(a="",o!=null&&(a=o.replace(Fr,"$&/")+"/"),Sa(i,e,a,"",function(u){return u})):i!=null&&(io(i)&&(i=vp(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Fr,"$&/")+"/")+o)),e.push(i)),1;o=0;var s=l===""?".":l+":";if(Jr(t))for(var r=0;r<t.length;r++)l=t[r],n=s+$n(l,r),o+=Sa(l,e,a,n,i);else if(r=yp(t),typeof r=="function")for(t=r.call(t),r=0;!(l=t.next()).done;)l=l.value,n=s+$n(l,r++),o+=Sa(l,e,a,n,i);else if(n==="object"){if(typeof t.then=="function")return Sa(wp(t),e,a,l,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function bi(t,e,a){if(t==null)return t;var l=[],i=0;return Sa(t,l,"","",function(n){return e.call(a,n,i++)}),l}function Sp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},kp={map:bi,forEach:function(t,e,a){bi(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return bi(t,function(){e++}),e},toArray:function(t){return bi(t,function(e){return e})||[]},only:function(t){if(!io(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};T.Activity=mp;T.Children=kp;T.Component=ka;T.Fragment=cp;T.Profiler=up;T.PureComponent=eo;T.StrictMode=fp;T.Suspense=gp;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K;T.__COMPILER_RUNTIME={__proto__:null,c:function(t){return K.H.useMemoCache(t)}};T.cache=function(t){return function(){return t.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var l=Pr({},t.props),i=t.key;if(e!=null)for(n in e.key!==void 0&&(i=""+e.key),e)!ac.call(e,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&e.ref===void 0||(l[n]=e[n]);var n=arguments.length-2;if(n===1)l.children=a;else if(1<n){for(var o=Array(n),s=0;s<n;s++)o[s]=arguments[s+2];l.children=o}return lo(t.type,i,l)};T.createContext=function(t){return t={$$typeof:pp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:dp,_context:t},t};T.createElement=function(t,e,a){var l,i={},n=null;if(e!=null)for(l in e.key!==void 0&&(n=""+e.key),e)ac.call(e,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(i[l]=e[l]);var o=arguments.length-2;if(o===1)i.children=a;else if(1<o){for(var s=Array(o),r=0;r<o;r++)s[r]=arguments[r+2];i.children=s}if(t&&t.defaultProps)for(l in o=t.defaultProps,o)i[l]===void 0&&(i[l]=o[l]);return lo(t,n,i)};T.createRef=function(){return{current:null}};T.forwardRef=function(t){return{$$typeof:hp,render:t}};T.isValidElement=io;T.lazy=function(t){return{$$typeof:Ir,_payload:{_status:-1,_result:t},_init:Sp}};T.memo=function(t,e){return{$$typeof:bp,type:t,compare:e===void 0?null:e}};T.startTransition=function(t){var e=K.T,a={};K.T=a;try{var l=t(),i=K.S;i!==null&&i(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Pn,Wr)}catch(n){Wr(n)}finally{e!==null&&a.types!==null&&(e.types=a.types),K.T=e}};T.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()};T.use=function(t){return K.H.use(t)};T.useActionState=function(t,e,a){return K.H.useActionState(t,e,a)};T.useCallback=function(t,e){return K.H.useCallback(t,e)};T.useContext=function(t){return K.H.useContext(t)};T.useDebugValue=function(){};T.useDeferredValue=function(t,e){return K.H.useDeferredValue(t,e)};T.useEffect=function(t,e){return K.H.useEffect(t,e)};T.useEffectEvent=function(t){return K.H.useEffectEvent(t)};T.useId=function(){return K.H.useId()};T.useImperativeHandle=function(t,e,a){return K.H.useImperativeHandle(t,e,a)};T.useInsertionEffect=function(t,e){return K.H.useInsertionEffect(t,e)};T.useLayoutEffect=function(t,e){return K.H.useLayoutEffect(t,e)};T.useMemo=function(t,e){return K.H.useMemo(t,e)};T.useOptimistic=function(t,e){return K.H.useOptimistic(t,e)};T.useReducer=function(t,e,a){return K.H.useReducer(t,e,a)};T.useRef=function(t){return K.H.useRef(t)};T.useState=function(t){return K.H.useState(t)};T.useSyncExternalStore=function(t,e,a){return K.H.useSyncExternalStore(t,e,a)};T.useTransition=function(){return K.H.useTransition()};T.version="19.2.8"});var mi=Me((vg,ic)=>{"use strict";ic.exports=lc()});var hc=Me(J=>{"use strict";function ro(t,e){var a=t.length;t.push(e);t:for(;0<a;){var l=a-1>>>1,i=t[l];if(0<yi(i,e))t[l]=e,t[a]=i,a=l;else break t}}function Wt(t){return t.length===0?null:t[0]}function xi(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;t:for(var l=0,i=t.length,n=i>>>1;l<n;){var o=2*(l+1)-1,s=t[o],r=o+1,u=t[r];if(0>yi(s,a))r<i&&0>yi(u,s)?(t[l]=u,t[r]=a,l=r):(t[l]=s,t[o]=a,l=o);else if(r<i&&0>yi(u,a))t[l]=u,t[r]=a,l=r;else break t}}return e}function yi(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}J.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(nc=performance,J.unstable_now=function(){return nc.now()}):(no=Date,oc=no.now(),J.unstable_now=function(){return no.now()-oc});var nc,no,oc,le=[],Ce=[],Tp=1,Lt=null,ht=3,co=!1,gl=!1,bl=!1,fo=!1,cc=typeof setTimeout=="function"?setTimeout:null,fc=typeof clearTimeout=="function"?clearTimeout:null,sc=typeof setImmediate!="undefined"?setImmediate:null;function vi(t){for(var e=Wt(Ce);e!==null;){if(e.callback===null)xi(Ce);else if(e.startTime<=t)xi(Ce),e.sortIndex=e.expirationTime,ro(le,e);else break;e=Wt(Ce)}}function uo(t){if(bl=!1,vi(t),!gl)if(Wt(le)!==null)gl=!0,za||(za=!0,Ta());else{var e=Wt(Ce);e!==null&&po(uo,e.startTime-t)}}var za=!1,ml=-1,uc=5,dc=-1;function pc(){return fo?!0:!(J.unstable_now()-dc<uc)}function oo(){if(fo=!1,za){var t=J.unstable_now();dc=t;var e=!0;try{t:{gl=!1,bl&&(bl=!1,fc(ml),ml=-1),co=!0;var a=ht;try{e:{for(vi(t),Lt=Wt(le);Lt!==null&&!(Lt.expirationTime>t&&pc());){var l=Lt.callback;if(typeof l=="function"){Lt.callback=null,ht=Lt.priorityLevel;var i=l(Lt.expirationTime<=t);if(t=J.unstable_now(),typeof i=="function"){Lt.callback=i,vi(t),e=!0;break e}Lt===Wt(le)&&xi(le),vi(t)}else xi(le);Lt=Wt(le)}if(Lt!==null)e=!0;else{var n=Wt(Ce);n!==null&&po(uo,n.startTime-t),e=!1}}break t}finally{Lt=null,ht=a,co=!1}e=void 0}}finally{e?Ta():za=!1}}}var Ta;typeof sc=="function"?Ta=function(){sc(oo)}:typeof MessageChannel!="undefined"?(so=new MessageChannel,rc=so.port2,so.port1.onmessage=oo,Ta=function(){rc.postMessage(null)}):Ta=function(){cc(oo,0)};var so,rc;function po(t,e){ml=cc(function(){t(J.unstable_now())},e)}J.unstable_IdlePriority=5;J.unstable_ImmediatePriority=1;J.unstable_LowPriority=4;J.unstable_NormalPriority=3;J.unstable_Profiling=null;J.unstable_UserBlockingPriority=2;J.unstable_cancelCallback=function(t){t.callback=null};J.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):uc=0<t?Math.floor(1e3/t):5};J.unstable_getCurrentPriorityLevel=function(){return ht};J.unstable_next=function(t){switch(ht){case 1:case 2:case 3:var e=3;break;default:e=ht}var a=ht;ht=e;try{return t()}finally{ht=a}};J.unstable_requestPaint=function(){fo=!0};J.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ht;ht=t;try{return e()}finally{ht=a}};J.unstable_scheduleCallback=function(t,e,a){var l=J.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?l+a:l):a=l,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:Tp++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>l?(t.sortIndex=a,ro(Ce,t),Wt(le)===null&&t===Wt(Ce)&&(bl?(fc(ml),ml=-1):bl=!0,po(uo,a-l))):(t.sortIndex=i,ro(le,t),gl||co||(gl=!0,za||(za=!0,Ta()))),t};J.unstable_shouldYield=pc;J.unstable_wrapCallback=function(t){var e=ht;return function(){var a=ht;ht=e;try{return t.apply(this,arguments)}finally{ht=a}}}});var bc=Me((wg,gc)=>{"use strict";gc.exports=hc()});var yc=Me(bt=>{"use strict";var zp=mi();function mc(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ae(){}var gt={d:{f:Ae,r:function(){throw Error(mc(522))},D:Ae,C:Ae,L:Ae,m:Ae,X:Ae,S:Ae,M:Ae},p:0,findDOMNode:null},Mp=Symbol.for("react.portal");function Cp(t,e,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mp,key:l==null?null:""+l,children:t,containerInfo:e,implementation:a}}var yl=zp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wi(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gt;bt.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(mc(299));return Cp(t,e,null,a)};bt.flushSync=function(t){var e=yl.T,a=gt.p;try{if(yl.T=null,gt.p=2,t)return t()}finally{yl.T=e,gt.p=a,gt.d.f()}};bt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,gt.d.C(t,e))};bt.prefetchDNS=function(t){typeof t=="string"&&gt.d.D(t)};bt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,l=wi(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,n=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?gt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:l,integrity:i,fetchPriority:n}):a==="script"&&gt.d.X(t,{crossOrigin:l,integrity:i,fetchPriority:n,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};bt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=wi(e.as,e.crossOrigin);gt.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&gt.d.M(t)};bt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,l=wi(a,e.crossOrigin);gt.d.L(t,a,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};bt.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=wi(e.as,e.crossOrigin);gt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else gt.d.m(t)};bt.requestFormReset=function(t){gt.d.r(t)};bt.unstable_batchedUpdates=function(t,e){return t(e)};bt.useFormState=function(t,e,a){return yl.H.useFormState(t,e,a)};bt.useFormStatus=function(){return yl.H.useHostTransitionStatus()};bt.version="19.2.8"});var wc=Me((kg,xc)=>{"use strict";function vc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vc)}catch(t){console.error(t)}}vc(),xc.exports=yc()});var D0=Me(Qn=>{"use strict";var nt=bc(),Jf=mi(),Ap=wc();function y(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ii(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function Wf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function If(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sc(t){if(ii(t)!==t)throw Error(y(188))}function _p(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(y(188));return e!==t?null:t}for(var a=t,l=e;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return Sc(i),t;if(n===l)return Sc(i),e;n=n.sibling}throw Error(y(188))}if(a.return!==l.return)a=i,l=n;else{for(var o=!1,s=i.child;s;){if(s===a){o=!0,a=i,l=n;break}if(s===l){o=!0,l=i,a=n;break}s=s.sibling}if(!o){for(s=n.child;s;){if(s===a){o=!0,a=n,l=i;break}if(s===l){o=!0,l=n,a=i;break}s=s.sibling}if(!o)throw Error(y(189))}}if(a.alternate!==l)throw Error(y(190))}if(a.tag!==3)throw Error(y(188));return a.stateNode.current===a?t:e}function $f(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=$f(t),e!==null)return e;t=t.sibling}return null}var X=Object.assign,Ep=Symbol.for("react.element"),Si=Symbol.for("react.transitional.element"),Ml=Symbol.for("react.portal"),Oa=Symbol.for("react.fragment"),Pf=Symbol.for("react.strict_mode"),Qo=Symbol.for("react.profiler"),tu=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Jo=Symbol.for("react.suspense"),Fo=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Wo=Symbol.for("react.activity"),Op=Symbol.for("react.memo_cache_sentinel"),kc=Symbol.iterator;function vl(t){return t===null||typeof t!="object"?null:(t=kc&&t[kc]||t["@@iterator"],typeof t=="function"?t:null)}var Bp=Symbol.for("react.client.reference");function Io(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Bp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Oa:return"Fragment";case Qo:return"Profiler";case Pf:return"StrictMode";case Jo:return"Suspense";case Fo:return"SuspenseList";case Wo:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ml:return"Portal";case ue:return t.displayName||"Context";case tu:return(t._context.displayName||"Context")+".Consumer";case Ys:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ks:return e=t.displayName||null,e!==null?e:Io(t.type)||"Memo";case _e:e=t._payload,t=t._init;try{return Io(t(e))}catch{}}return null}var Cl=Array.isArray,k=Jf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Ap.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,sa={pending:!1,data:null,method:null,action:null},$o=[],Ba=-1;function ee(t){return{current:t}}function rt(t){0>Ba||(t.current=$o[Ba],$o[Ba]=null,Ba--)}function Y(t,e){Ba++,$o[Ba]=t.current,t.current=e}var te=ee(null),Zl=ee(null),Ge=ee(null),en=ee(null);function an(t,e){switch(Y(Ge,e),Y(Zl,t),Y(te,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Of(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Of(e),t=x0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}rt(te),Y(te,t)}function Wa(){rt(te),rt(Zl),rt(Ge)}function Po(t){t.memoizedState!==null&&Y(en,t);var e=te.current,a=x0(e,t.type);e!==a&&(Y(Zl,t),Y(te,a))}function ln(t){Zl.current===t&&(rt(te),rt(Zl)),en.current===t&&(rt(en),ei._currentValue=sa)}var ho,Tc;function la(t){if(ho===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);ho=e&&e[1]||"",Tc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ho+t+Tc}var go=!1;function bo(t,e){if(!t||go)return"";go=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(g){var d=g}Reflect.construct(t,[],h)}else{try{h.call()}catch(g){d=g}t.call(h.prototype)}}else{try{throw Error()}catch(g){d=g}(h=t())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(g){if(g&&d&&typeof g.stack=="string")return[g.stack,d.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),o=n[0],s=n[1];if(o&&s){var r=o.split(`
`),u=s.split(`
`);for(i=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(l===r.length||i===u.length)for(l=r.length-1,i=u.length-1;1<=l&&0<=i&&r[l]!==u[i];)i--;for(;1<=l&&0<=i;l--,i--)if(r[l]!==u[i]){if(l!==1||i!==1)do if(l--,i--,0>i||r[l]!==u[i]){var b=`
`+r[l].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=l&&0<=i);break}}}finally{go=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?la(a):""}function Rp(t,e){switch(t.tag){case 26:case 27:case 5:return la(t.type);case 16:return la("Lazy");case 13:return t.child!==e&&e!==null?la("Suspense Fallback"):la("Suspense");case 19:return la("SuspenseList");case 0:case 15:return bo(t.type,!1);case 11:return bo(t.type.render,!1);case 1:return bo(t.type,!0);case 31:return la("Activity");default:return""}}function zc(t){try{var e="",a=null;do e+=Rp(t,a),a=t,t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ts=Object.prototype.hasOwnProperty,Zs=nt.unstable_scheduleCallback,mo=nt.unstable_cancelCallback,Dp=nt.unstable_shouldYield,Np=nt.unstable_requestPaint,_t=nt.unstable_now,Lp=nt.unstable_getCurrentPriorityLevel,eu=nt.unstable_ImmediatePriority,au=nt.unstable_UserBlockingPriority,nn=nt.unstable_NormalPriority,Hp=nt.unstable_LowPriority,lu=nt.unstable_IdlePriority,Up=nt.log,jp=nt.unstable_setDisableYieldValue,ni=null,Et=null;function Ne(t){if(typeof Up=="function"&&jp(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(ni,t)}catch{}}var Ot=Math.clz32?Math.clz32:Yp,Gp=Math.log,qp=Math.LN2;function Yp(t){return t>>>=0,t===0?32:31-(Gp(t)/qp|0)|0}var ki=256,Ti=262144,zi=4194304;function ia(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function On(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var s=l&134217727;return s!==0?(l=s&~n,l!==0?i=ia(l):(o&=s,o!==0?i=ia(o):a||(a=s&~t,a!==0&&(i=ia(a))))):(s=l&~n,s!==0?i=ia(s):o!==0?i=ia(o):a||(a=l&~t,a!==0&&(i=ia(a)))),i===0?0:e!==0&&e!==i&&(e&n)===0&&(n=i&-i,a=e&-e,n>=a||n===32&&(a&4194048)!==0)?e:i}function oi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Kp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iu(){var t=zi;return zi<<=1,(zi&62914560)===0&&(zi=4194304),t}function yo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function si(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Zp(t,e,a,l,i,n){var o=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var s=t.entanglements,r=t.expirationTimes,u=t.hiddenUpdates;for(a=o&~a;0<a;){var b=31-Ot(a),h=1<<b;s[b]=0,r[b]=-1;var d=u[b];if(d!==null)for(u[b]=null,b=0;b<d.length;b++){var g=d[b];g!==null&&(g.lane&=-536870913)}a&=~h}l!==0&&nu(t,l,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~e))}function nu(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-Ot(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&261930}function ou(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-Ot(a),i=1<<l;i&e|t[l]&e&&(t[l]|=e),a&=~i}}function su(t,e){var a=e&-e;return a=(a&42)!==0?1:Vs(a),(a&(t.suspendedLanes|e))!==0?0:a}function Vs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ru(){var t=N.p;return t!==0?t:(t=window.event,t===void 0?32:O0(t.type))}function Mc(t,e){var a=N.p;try{return N.p=t,e()}finally{N.p=a}}var Pe=Math.random().toString(36).slice(2),ft="__reactFiber$"+Pe,kt="__reactProps$"+Pe,sl="__reactContainer$"+Pe,es="__reactEvents$"+Pe,Vp="__reactListeners$"+Pe,Xp="__reactHandles$"+Pe,Cc="__reactResources$"+Pe,ri="__reactMarker$"+Pe;function Qs(t){delete t[ft],delete t[kt],delete t[es],delete t[Vp],delete t[Xp]}function Ra(t){var e=t[ft];if(e)return e;for(var a=t.parentNode;a;){if(e=a[sl]||a[ft]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Lf(t);t!==null;){if(a=t[ft])return a;t=Lf(t)}return e}t=a,a=t.parentNode}return null}function rl(t){if(t=t[ft]||t[sl]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Al(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(y(33))}function Ka(t){var e=t[Cc];return e||(e=t[Cc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function st(t){t[ri]=!0}var cu=new Set,fu={};function ma(t,e){Ia(t,e),Ia(t+"Capture",e)}function Ia(t,e){for(fu[t]=e,t=0;t<e.length;t++)cu.add(e[t])}var Qp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ac={},_c={};function Jp(t){return ts.call(_c,t)?!0:ts.call(Ac,t)?!1:Qp.test(t)?_c[t]=!0:(Ac[t]=!0,!1)}function Gi(t,e,a){if(Jp(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Mi(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ie(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}function Ut(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uu(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fp(t,e,a){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof l!="undefined"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,n.call(this,o)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function as(t){if(!t._valueTracker){var e=uu(t)?"checked":"value";t._valueTracker=Fp(t,e,""+t[e])}}function du(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=uu(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function on(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wp=/[\n"\\]/g;function qt(t){return t.replace(Wp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ls(t,e,a,l,i,n,o,s){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ut(e)):t.value!==""+Ut(e)&&(t.value=""+Ut(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?is(t,o,Ut(e)):a!=null?is(t,o,Ut(a)):l!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Ut(s):t.removeAttribute("name")}function pu(t,e,a,l,i,n,o,s){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||e!=null)){as(t);return}a=a!=null?""+Ut(a):"",e=e!=null?""+Ut(e):a,s||e===t.value||(t.value=e),t.defaultValue=e}l=l!=null?l:i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=s?t.checked:!!l,t.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),as(t)}function is(t,e,a){e==="number"&&on(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Za(t,e,a,l){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ut(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,l&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hu(t,e,a){if(e!=null&&(e=""+Ut(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Ut(a):""}function gu(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(y(92));if(Cl(l)){if(1<l.length)throw Error(y(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Ut(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l),as(t)}function $a(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Ip=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ec(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Ip.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function bu(t,e,a){if(e!=null&&typeof e!="object")throw Error(y(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var i in e)l=e[i],e.hasOwnProperty(i)&&a[i]!==l&&Ec(t,i,l)}else for(var n in e)e.hasOwnProperty(n)&&Ec(t,n,e[n])}function Js(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $p=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qi(t){return Pp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function de(){}var ns=null;function Fs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Da=null,Va=null;function Oc(t){var e=rl(t);if(e&&(t=e.stateNode)){var a=t[kt]||null;t:switch(t=e.stateNode,e.type){case"input":if(ls(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var i=l[kt]||null;if(!i)throw Error(y(90));ls(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&du(l)}break t;case"textarea":hu(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Za(t,!!a.multiple,e,!1)}}}var vo=!1;function mu(t,e,a){if(vo)return t(e,a);vo=!0;try{var l=t(e);return l}finally{if(vo=!1,(Da!==null||Va!==null)&&(Kn(),Da&&(e=Da,t=Va,Va=Da=null,Oc(e),t)))for(e=0;e<t.length;e++)Oc(t[e])}}function Vl(t,e){var a=t.stateNode;if(a===null)return null;var l=a[kt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(y(231,e,typeof a));return a}var me=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),os=!1;if(me)try{Ma={},Object.defineProperty(Ma,"passive",{get:function(){os=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{os=!1}var Ma,Le=null,Ws=null,Yi=null;function yu(){if(Yi)return Yi;var t,e=Ws,a=e.length,l,i="value"in Le?Le.value:Le.textContent,n=i.length;for(t=0;t<a&&e[t]===i[t];t++);var o=a-t;for(l=1;l<=o&&e[a-l]===i[n-l];l++);return Yi=i.slice(t,1<l?1-l:void 0)}function Ki(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ci(){return!0}function Bc(){return!1}function Tt(t){function e(a,l,i,n,o){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(a=t[s],this[s]=a?a(n):n[s]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ci:Bc,this.isPropagationStopped=Bc,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),e}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Tt(ya),ci=X({},ya,{view:0,detail:0}),t1=Tt(ci),xo,wo,xl,Rn=X({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Is,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xl&&(xl&&t.type==="mousemove"?(xo=t.screenX-xl.screenX,wo=t.screenY-xl.screenY):wo=xo=0,xl=t),xo)},movementY:function(t){return"movementY"in t?t.movementY:wo}}),Rc=Tt(Rn),e1=X({},Rn,{dataTransfer:0}),a1=Tt(e1),l1=X({},ci,{relatedTarget:0}),So=Tt(l1),i1=X({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),n1=Tt(i1),o1=X({},ya,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),s1=Tt(o1),r1=X({},ya,{data:0}),Dc=Tt(r1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=u1[t])?!!e[t]:!1}function Is(){return d1}var p1=X({},ci,{key:function(t){if(t.key){var e=c1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ki(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Is,charCode:function(t){return t.type==="keypress"?Ki(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ki(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h1=Tt(p1),g1=X({},Rn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=Tt(g1),b1=X({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Is}),m1=Tt(b1),y1=X({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),v1=Tt(y1),x1=X({},Rn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),w1=Tt(x1),S1=X({},ya,{newState:0,oldState:0}),k1=Tt(S1),T1=[9,13,27,32],$s=me&&"CompositionEvent"in window,Ol=null;me&&"documentMode"in document&&(Ol=document.documentMode);var z1=me&&"TextEvent"in window&&!Ol,vu=me&&(!$s||Ol&&8<Ol&&11>=Ol),Lc=" ",Hc=!1;function xu(t,e){switch(t){case"keyup":return T1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Na=!1;function M1(t,e){switch(t){case"compositionend":return wu(e);case"keypress":return e.which!==32?null:(Hc=!0,Lc);case"textInput":return t=e.data,t===Lc&&Hc?null:t;default:return null}}function C1(t,e){if(Na)return t==="compositionend"||!$s&&xu(t,e)?(t=yu(),Yi=Ws=Le=null,Na=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vu&&e.locale!=="ko"?null:e.data;default:return null}}var A1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A1[t.type]:e==="textarea"}function Su(t,e,a,l){Da?Va?Va.push(l):Va=[l]:Da=l,e=Tn(e,"onChange"),0<e.length&&(a=new Bn("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var Bl=null,Xl=null;function _1(t){m0(t,0)}function Dn(t){var e=Al(t);if(du(e))return t}function jc(t,e){if(t==="change")return e}var ku=!1;me&&(me?(_i="oninput"in document,_i||(ko=document.createElement("div"),ko.setAttribute("oninput","return;"),_i=typeof ko.oninput=="function"),Ai=_i):Ai=!1,ku=Ai&&(!document.documentMode||9<document.documentMode));var Ai,_i,ko;function Gc(){Bl&&(Bl.detachEvent("onpropertychange",Tu),Xl=Bl=null)}function Tu(t){if(t.propertyName==="value"&&Dn(Xl)){var e=[];Su(e,Xl,t,Fs(t)),mu(_1,e)}}function E1(t,e,a){t==="focusin"?(Gc(),Bl=e,Xl=a,Bl.attachEvent("onpropertychange",Tu)):t==="focusout"&&Gc()}function O1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dn(Xl)}function B1(t,e){if(t==="click")return Dn(e)}function R1(t,e){if(t==="input"||t==="change")return Dn(e)}function D1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:D1;function Ql(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!ts.call(e,i)||!Rt(t[i],e[i]))return!1}return!0}function qc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yc(t,e){var a=qc(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qc(a)}}function zu(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zu(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Mu(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=on(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=on(t.document)}return e}function Ps(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var N1=me&&"documentMode"in document&&11>=document.documentMode,La=null,ss=null,Rl=null,rs=!1;function Kc(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rs||La==null||La!==on(l)||(l=La,"selectionStart"in l&&Ps(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Rl&&Ql(Rl,l)||(Rl=l,l=Tn(ss,"onSelect"),0<l.length&&(e=new Bn("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=La)))}function aa(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ha={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},To={},Cu={};me&&(Cu=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function va(t){if(To[t])return To[t];if(!Ha[t])return t;var e=Ha[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Cu)return To[t]=e[a];return t}var Au=va("animationend"),_u=va("animationiteration"),Eu=va("animationstart"),L1=va("transitionrun"),H1=va("transitionstart"),U1=va("transitioncancel"),Ou=va("transitionend"),Bu=new Map,cs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cs.push("scrollEnd");function Ft(t,e){Bu.set(t,e),ma(e,[t])}var sn=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ht=[],Ua=0,tr=0;function Nn(){for(var t=Ua,e=tr=Ua=0;e<t;){var a=Ht[e];Ht[e++]=null;var l=Ht[e];Ht[e++]=null;var i=Ht[e];Ht[e++]=null;var n=Ht[e];if(Ht[e++]=null,l!==null&&i!==null){var o=l.pending;o===null?i.next=i:(i.next=o.next,o.next=i),l.pending=i}n!==0&&Ru(a,i,n)}}function Ln(t,e,a,l){Ht[Ua++]=t,Ht[Ua++]=e,Ht[Ua++]=a,Ht[Ua++]=l,tr|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function er(t,e,a,l){return Ln(t,e,a,l),rn(t)}function xa(t,e){return Ln(t,null,null,e),rn(t)}function Ru(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var i=!1,n=t.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&e!==null&&(i=31-Ot(a),t=n.hiddenUpdates,l=t[i],l===null?t[i]=[e]:l.push(e),e.lane=a|536870912),n):null}function rn(t){if(50<Yl)throw Yl=0,Es=null,Error(y(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ja={};function j1(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,a,l){return new j1(t,e,a,l)}function ar(t){return t=t.prototype,!(!t||!t.isReactComponent)}function he(t,e){var a=t.alternate;return a===null?(a=Ct(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Du(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zi(t,e,a,l,i,n){var o=0;if(l=t,typeof t=="function")ar(t)&&(o=1);else if(typeof t=="string")o=Yh(t,a,te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Wo:return t=Ct(31,a,e,i),t.elementType=Wo,t.lanes=n,t;case Oa:return ra(a.children,i,n,e);case Pf:o=8,i|=24;break;case Qo:return t=Ct(12,a,e,i|2),t.elementType=Qo,t.lanes=n,t;case Jo:return t=Ct(13,a,e,i),t.elementType=Jo,t.lanes=n,t;case Fo:return t=Ct(19,a,e,i),t.elementType=Fo,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ue:o=10;break t;case tu:o=9;break t;case Ys:o=11;break t;case Ks:o=14;break t;case _e:o=16,l=null;break t}o=29,a=Error(y(130,t===null?"null":typeof t,"")),l=null}return e=Ct(o,a,e,i),e.elementType=t,e.type=l,e.lanes=n,e}function ra(t,e,a,l){return t=Ct(7,t,l,e),t.lanes=a,t}function zo(t,e,a){return t=Ct(6,t,null,e),t.lanes=a,t}function Nu(t){var e=Ct(18,null,null,0);return e.stateNode=t,e}function Mo(t,e,a){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Zc=new WeakMap;function Yt(t,e){if(typeof t=="object"&&t!==null){var a=Zc.get(t);return a!==void 0?a:(e={value:t,source:e,stack:zc(e)},Zc.set(t,e),e)}return{value:t,source:e,stack:zc(e)}}var Ga=[],qa=0,cn=null,Jl=0,jt=[],Gt=0,Fe=null,It=1,$t="";function ce(t,e){Ga[qa++]=Jl,Ga[qa++]=cn,cn=t,Jl=e}function Lu(t,e,a){jt[Gt++]=It,jt[Gt++]=$t,jt[Gt++]=Fe,Fe=t;var l=It;t=$t;var i=32-Ot(l)-1;l&=~(1<<i),a+=1;var n=32-Ot(e)+i;if(30<n){var o=i-i%5;n=(l&(1<<o)-1).toString(32),l>>=o,i-=o,It=1<<32-Ot(e)+i|a<<i|l,$t=n+t}else It=1<<n|a<<i|l,$t=t}function lr(t){t.return!==null&&(ce(t,1),Lu(t,1,0))}function ir(t){for(;t===cn;)cn=Ga[--qa],Ga[qa]=null,Jl=Ga[--qa],Ga[qa]=null;for(;t===Fe;)Fe=jt[--Gt],jt[Gt]=null,$t=jt[--Gt],jt[Gt]=null,It=jt[--Gt],jt[Gt]=null}function Hu(t,e){jt[Gt++]=It,jt[Gt++]=$t,jt[Gt++]=Fe,It=e.id,$t=e.overflow,Fe=t}var ut=null,V=null,O=!1,qe=null,Kt=!1,fs=Error(y(519));function We(t){var e=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(Yt(e,t)),fs}function Vc(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[ft]=t,e[kt]=l,a){case"dialog":C("cancel",e),C("close",e);break;case"iframe":case"object":case"embed":C("load",e);break;case"video":case"audio":for(a=0;a<Pl.length;a++)C(Pl[a],e);break;case"source":C("error",e);break;case"img":case"image":case"link":C("error",e),C("load",e);break;case"details":C("toggle",e);break;case"input":C("invalid",e),pu(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":C("invalid",e);break;case"textarea":C("invalid",e),gu(e,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||v0(e.textContent,a)?(l.popover!=null&&(C("beforetoggle",e),C("toggle",e)),l.onScroll!=null&&C("scroll",e),l.onScrollEnd!=null&&C("scrollend",e),l.onClick!=null&&(e.onclick=de),e=!0):e=!1,e||We(t,!0)}function Xc(t){for(ut=t.return;ut;)switch(ut.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:ut=ut.return}}function Ca(t){if(t!==ut)return!1;if(!O)return Xc(t),O=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ns(t.type,t.memoizedProps)),a=!a),a&&V&&We(t),Xc(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));V=Nf(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));V=Nf(t)}else e===27?(e=V,ta(t.type)?(t=js,js=null,V=t):V=e):V=ut?Vt(t.stateNode.nextSibling):null;return!0}function da(){V=ut=null,O=!1}function Co(){var t=qe;return t!==null&&(wt===null?wt=t:wt.push.apply(wt,t),qe=null),t}function Fl(t){qe===null?qe=[t]:qe.push(t)}var us=ee(null),wa=null,pe=null;function Oe(t,e,a){Y(us,e._currentValue),e._currentValue=a}function ge(t){t._currentValue=us.current,rt(us)}function ds(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function ps(t,e,a,l){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var s=n;n=i;for(var r=0;r<e.length;r++)if(s.context===e[r]){n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),ds(n.return,a,t),l||(o=null);break t}n=s.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=a,n=o.alternate,n!==null&&(n.lanes|=a),ds(o,a,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function cl(t,e,a,l){t=null;for(var i=e,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(y(387));if(o=o.memoizedProps,o!==null){var s=i.type;Rt(i.pendingProps.value,o.value)||(t!==null?t.push(s):t=[s])}}else if(i===en.current){if(o=i.alternate,o===null)throw Error(y(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(ei):t=[ei])}i=i.return}t!==null&&ps(e,t,a,l),e.flags|=262144}function fn(t){for(t=t.firstContext;t!==null;){if(!Rt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function pa(t){wa=t,pe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function dt(t){return Uu(wa,t)}function Ei(t,e){return wa===null&&pa(t),Uu(t,e)}function Uu(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},pe===null){if(t===null)throw Error(y(308));pe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else pe=pe.next=e;return a}var G1=typeof AbortController!="undefined"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},q1=nt.unstable_scheduleCallback,Y1=nt.unstable_NormalPriority,at={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nr(){return{controller:new G1,data:new Map,refCount:0}}function fi(t){t.refCount--,t.refCount===0&&q1(Y1,function(){t.controller.abort()})}var Dl=null,hs=0,Pa=0,Xa=null;function K1(t,e){if(Dl===null){var a=Dl=[];hs=0,Pa=Er(),Xa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return hs++,e.then(Qc,Qc),e}function Qc(){if(--hs===0&&Dl!==null){Xa!==null&&(Xa.status="fulfilled");var t=Dl;Dl=null,Pa=0,Xa=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Z1(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Jc=k.S;k.S=function(t,e){$d=_t(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&K1(t,e),Jc!==null&&Jc(t,e)};var ca=ee(null);function or(){var t=ca.current;return t!==null?t:q.pooledCache}function Vi(t,e){e===null?Y(ca,ca.current):Y(ca,e.pool)}function ju(){var t=or();return t===null?null:{parent:at._currentValue,pool:t}}var fl=Error(y(460)),sr=Error(y(474)),Hn=Error(y(542)),un={then:function(){}};function Fc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gu(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(de,de),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ic(t),t;default:if(typeof e.status=="string")e.then(de,de);else{if(t=q,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=l}},function(l){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ic(t),t}throw fa=e,fl}}function na(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fa=a,fl):a}}var fa=null;function Wc(){if(fa===null)throw Error(y(459));var t=fa;return fa=null,t}function Ic(t){if(t===fl||t===Hn)throw Error(y(483))}var Qa=null,Wl=0;function Oi(t){var e=Wl;return Wl+=1,Qa===null&&(Qa=[]),Gu(Qa,t,e)}function wl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Bi(t,e){throw e.$$typeof===Ep?Error(y(525)):(t=Object.prototype.toString.call(e),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function qu(t){function e(f,c){if(t){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function a(f,c){if(!t)return null;for(;c!==null;)e(f,c),c=c.sibling;return null}function l(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function i(f,c){return f=he(f,c),f.index=0,f.sibling=null,f}function n(f,c,p){return f.index=p,t?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=67108866,c):p):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function o(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function s(f,c,p,m){return c===null||c.tag!==6?(c=zo(p,f.mode,m),c.return=f,c):(c=i(c,p),c.return=f,c)}function r(f,c,p,m){var w=p.type;return w===Oa?b(f,c,p.props.children,m,p.key):c!==null&&(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_e&&na(w)===c.type)?(c=i(c,p.props),wl(c,p),c.return=f,c):(c=Zi(p.type,p.key,p.props,null,f.mode,m),wl(c,p),c.return=f,c)}function u(f,c,p,m){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Mo(p,f.mode,m),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function b(f,c,p,m,w){return c===null||c.tag!==7?(c=ra(p,f.mode,m,w),c.return=f,c):(c=i(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=zo(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Si:return p=Zi(c.type,c.key,c.props,null,f.mode,p),wl(p,c),p.return=f,p;case Ml:return c=Mo(c,f.mode,p),c.return=f,c;case _e:return c=na(c),h(f,c,p)}if(Cl(c)||vl(c))return c=ra(c,f.mode,p,null),c.return=f,c;if(typeof c.then=="function")return h(f,Oi(c),p);if(c.$$typeof===ue)return h(f,Ei(f,c),p);Bi(f,c)}return null}function d(f,c,p,m){var w=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return w!==null?null:s(f,c,""+p,m);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Si:return p.key===w?r(f,c,p,m):null;case Ml:return p.key===w?u(f,c,p,m):null;case _e:return p=na(p),d(f,c,p,m)}if(Cl(p)||vl(p))return w!==null?null:b(f,c,p,m,null);if(typeof p.then=="function")return d(f,c,Oi(p),m);if(p.$$typeof===ue)return d(f,c,Ei(f,p),m);Bi(f,p)}return null}function g(f,c,p,m,w){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return f=f.get(p)||null,s(c,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Si:return f=f.get(m.key===null?p:m.key)||null,r(c,f,m,w);case Ml:return f=f.get(m.key===null?p:m.key)||null,u(c,f,m,w);case _e:return m=na(m),g(f,c,p,m,w)}if(Cl(m)||vl(m))return f=f.get(p)||null,b(c,f,m,w,null);if(typeof m.then=="function")return g(f,c,p,Oi(m),w);if(m.$$typeof===ue)return g(f,c,p,Ei(c,m),w);Bi(c,m)}return null}function v(f,c,p,m){for(var w=null,B=null,x=c,M=c=0,_=null;x!==null&&M<p.length;M++){x.index>M?(_=x,x=null):_=x.sibling;var R=d(f,x,p[M],m);if(R===null){x===null&&(x=_);break}t&&x&&R.alternate===null&&e(f,x),c=n(R,c,M),B===null?w=R:B.sibling=R,B=R,x=_}if(M===p.length)return a(f,x),O&&ce(f,M),w;if(x===null){for(;M<p.length;M++)x=h(f,p[M],m),x!==null&&(c=n(x,c,M),B===null?w=x:B.sibling=x,B=x);return O&&ce(f,M),w}for(x=l(x);M<p.length;M++)_=g(x,f,M,p[M],m),_!==null&&(t&&_.alternate!==null&&x.delete(_.key===null?M:_.key),c=n(_,c,M),B===null?w=_:B.sibling=_,B=_);return t&&x.forEach(function(ze){return e(f,ze)}),O&&ce(f,M),w}function S(f,c,p,m){if(p==null)throw Error(y(151));for(var w=null,B=null,x=c,M=c=0,_=null,R=p.next();x!==null&&!R.done;M++,R=p.next()){x.index>M?(_=x,x=null):_=x.sibling;var ze=d(f,x,R.value,m);if(ze===null){x===null&&(x=_);break}t&&x&&ze.alternate===null&&e(f,x),c=n(ze,c,M),B===null?w=ze:B.sibling=ze,B=ze,x=_}if(R.done)return a(f,x),O&&ce(f,M),w;if(x===null){for(;!R.done;M++,R=p.next())R=h(f,R.value,m),R!==null&&(c=n(R,c,M),B===null?w=R:B.sibling=R,B=R);return O&&ce(f,M),w}for(x=l(x);!R.done;M++,R=p.next())R=g(x,f,M,R.value,m),R!==null&&(t&&R.alternate!==null&&x.delete(R.key===null?M:R.key),c=n(R,c,M),B===null?w=R:B.sibling=R,B=R);return t&&x.forEach(function(ep){return e(f,ep)}),O&&ce(f,M),w}function U(f,c,p,m){if(typeof p=="object"&&p!==null&&p.type===Oa&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Si:t:{for(var w=p.key;c!==null;){if(c.key===w){if(w=p.type,w===Oa){if(c.tag===7){a(f,c.sibling),m=i(c,p.props.children),m.return=f,f=m;break t}}else if(c.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===_e&&na(w)===c.type){a(f,c.sibling),m=i(c,p.props),wl(m,p),m.return=f,f=m;break t}a(f,c);break}else e(f,c);c=c.sibling}p.type===Oa?(m=ra(p.props.children,f.mode,m,p.key),m.return=f,f=m):(m=Zi(p.type,p.key,p.props,null,f.mode,m),wl(m,p),m.return=f,f=m)}return o(f);case Ml:t:{for(w=p.key;c!==null;){if(c.key===w)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){a(f,c.sibling),m=i(c,p.children||[]),m.return=f,f=m;break t}else{a(f,c);break}else e(f,c);c=c.sibling}m=Mo(p,f.mode,m),m.return=f,f=m}return o(f);case _e:return p=na(p),U(f,c,p,m)}if(Cl(p))return v(f,c,p,m);if(vl(p)){if(w=vl(p),typeof w!="function")throw Error(y(150));return p=w.call(p),S(f,c,p,m)}if(typeof p.then=="function")return U(f,c,Oi(p),m);if(p.$$typeof===ue)return U(f,c,Ei(f,p),m);Bi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,c!==null&&c.tag===6?(a(f,c.sibling),m=i(c,p),m.return=f,f=m):(a(f,c),m=zo(p,f.mode,m),m.return=f,f=m),o(f)):a(f,c)}return function(f,c,p,m){try{Wl=0;var w=U(f,c,p,m);return Qa=null,w}catch(x){if(x===fl||x===Hn)throw x;var B=Ct(29,x,null,f.mode);return B.lanes=m,B.return=f,B}}}var ha=qu(!0),Yu=qu(!1),Ee=!1;function rr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gs(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ye(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ke(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(D&2)!==0){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,e=rn(t),Ru(t,null,a),e}return Ln(t,l,e,a),rn(t)}function Nl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,ou(t,a)}}function Ao(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,a=a.next}while(a!==null);n===null?i=n=e:n=n.next=e}else i=n=e;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var bs=!1;function Ll(){if(bs){var t=Xa;if(t!==null)throw t}}function Hl(t,e,a,l){bs=!1;var i=t.updateQueue;Ee=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var r=s,u=r.next;r.next=null,o===null?n=u:o.next=u,o=r;var b=t.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==o&&(s===null?b.firstBaseUpdate=u:s.next=u,b.lastBaseUpdate=r))}if(n!==null){var h=i.baseState;o=0,b=u=r=null,s=n;do{var d=s.lane&-536870913,g=d!==s.lane;if(g?(E&d)===d:(l&d)===d){d!==0&&d===Pa&&(bs=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var v=t,S=s;d=e;var U=a;switch(S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(U,h,d);break t}h=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,d=typeof v=="function"?v.call(U,h,d):v,d==null)break t;h=X({},h,d);break t;case 2:Ee=!0}}d=s.callback,d!==null&&(t.flags|=64,g&&(t.flags|=8192),g=i.callbacks,g===null?i.callbacks=[d]:g.push(d))}else g={lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(u=b=g,r=h):b=b.next=g,o|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);b===null&&(r=h),i.baseState=r,i.firstBaseUpdate=u,i.lastBaseUpdate=b,n===null&&(i.shared.lanes=0),$e|=o,t.lanes=o,t.memoizedState=h}}function Ku(t,e){if(typeof t!="function")throw Error(y(191,t));t.call(e)}function Zu(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ku(a[t],e)}var tl=ee(null),dn=ee(0);function $c(t,e){t=we,Y(dn,t),Y(tl,e),we=t|e.baseLanes}function ms(){Y(dn,we),Y(tl,tl.current)}function cr(){we=dn.current,rt(tl),rt(dn)}var Dt=ee(null),Zt=null;function Be(t){var e=t.alternate;Y($,$.current&1),Y(Dt,t),Zt===null&&(e===null||tl.current!==null||e.memoizedState!==null)&&(Zt=t)}function ys(t){Y($,$.current),Y(Dt,t),Zt===null&&(Zt=t)}function Vu(t){t.tag===22?(Y($,$.current),Y(Dt,t),Zt===null&&(Zt=t)):Re(t)}function Re(){Y($,$.current),Y(Dt,Dt.current)}function Mt(t){rt(Dt),Zt===t&&(Zt=null),rt($)}var $=ee(0);function pn(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hs(a)||Us(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ye=0,z=null,G=null,tt=null,hn=!1,Ja=!1,ga=!1,gn=0,Il=0,Fa=null,V1=0;function W(){throw Error(y(321))}function fr(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Rt(t[a],e[a]))return!1;return!0}function ur(t,e,a,l,i,n){return ye=n,z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,k.H=t===null||t.memoizedState===null?Sd:Sr,ga=!1,n=a(l,i),ga=!1,Ja&&(n=Qu(e,a,l,i)),Xu(t),n}function Xu(t){k.H=$l;var e=G!==null&&G.next!==null;if(ye=0,tt=G=z=null,hn=!1,Il=0,Fa=null,e)throw Error(y(300));t===null||lt||(t=t.dependencies,t!==null&&fn(t)&&(lt=!0))}function Qu(t,e,a,l){z=t;var i=0;do{if(Ja&&(Fa=null),Il=0,Ja=!1,25<=i)throw Error(y(301));if(i+=1,tt=G=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}k.H=kd,n=e(a,l)}while(Ja);return n}function X1(){var t=k.H,e=t.useState()[0];return e=typeof e.then=="function"?ui(e):e,t=t.useState()[0],(G!==null?G.memoizedState:null)!==t&&(z.flags|=1024),e}function dr(){var t=gn!==0;return gn=0,t}function pr(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function hr(t){if(hn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}hn=!1}ye=0,tt=G=z=null,Ja=!1,Il=gn=0,Fa=null}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?z.memoizedState=tt=t:tt=tt.next=t,tt}function P(){if(G===null){var t=z.alternate;t=t!==null?t.memoizedState:null}else t=G.next;var e=tt===null?z.memoizedState:tt.next;if(e!==null)tt=e,G=t;else{if(t===null)throw z.alternate===null?Error(y(467)):Error(y(310));G=t,t={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},tt===null?z.memoizedState=tt=t:tt=tt.next=t}return tt}function Un(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ui(t){var e=Il;return Il+=1,Fa===null&&(Fa=[]),t=Gu(Fa,t,e),e=z,(tt===null?e.memoizedState:tt.next)===null&&(e=e.alternate,k.H=e===null||e.memoizedState===null?Sd:Sr),t}function jn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ui(t);if(t.$$typeof===ue)return dt(t)}throw Error(y(438,String(t)))}function gr(t){var e=null,a=z.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=z.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Un(),z.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Op;return e.index++,a}function ve(t,e){return typeof e=="function"?e(t):e}function Xi(t){var e=P();return br(e,G,t)}function br(t,e,a){var l=t.queue;if(l===null)throw Error(y(311));l.lastRenderedReducer=a;var i=t.baseQueue,n=l.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}e.baseQueue=i=n,l.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{e=i.next;var s=o=null,r=null,u=e,b=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(E&h)===h:(ye&h)===h){var d=u.revertLane;if(d===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===Pa&&(b=!0);else if((ye&d)===d){u=u.next,d===Pa&&(b=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},r===null?(s=r=h,o=n):r=r.next=h,z.lanes|=d,$e|=d;h=u.action,ga&&a(n,h),n=u.hasEagerState?u.eagerState:a(n,h)}else d={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},r===null?(s=r=d,o=n):r=r.next=d,z.lanes|=h,$e|=h;u=u.next}while(u!==null&&u!==e);if(r===null?o=n:r.next=s,!Rt(n,t.memoizedState)&&(lt=!0,b&&(a=Xa,a!==null)))throw a;t.memoizedState=n,t.baseState=o,t.baseQueue=r,l.lastRenderedState=n}return i===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function _o(t){var e=P(),a=e.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=t;var l=a.dispatch,i=a.pending,n=e.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);Rt(n,e.memoizedState)||(lt=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),a.lastRenderedState=n}return[n,l]}function Ju(t,e,a){var l=z,i=P(),n=O;if(n){if(a===void 0)throw Error(y(407));a=a()}else a=e();var o=!Rt((G||i).memoizedState,a);if(o&&(i.memoizedState=a,lt=!0),i=i.queue,mr(Iu.bind(null,l,i,t),[t]),i.getSnapshot!==e||o||tt!==null&&tt.memoizedState.tag&1){if(l.flags|=2048,el(9,{destroy:void 0},Wu.bind(null,l,i,a,e),null),q===null)throw Error(y(349));n||(ye&127)!==0||Fu(l,e,a)}return a}function Fu(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=z.updateQueue,e===null?(e=Un(),z.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Wu(t,e,a,l){e.value=a,e.getSnapshot=l,$u(e)&&Pu(t)}function Iu(t,e,a){return a(function(){$u(e)&&Pu(t)})}function $u(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Rt(t,a)}catch{return!0}}function Pu(t){var e=xa(t,2);e!==null&&St(e,t,2)}function vs(t){var e=mt();if(typeof t=="function"){var a=t;if(t=a(),ga){Ne(!0);try{a()}finally{Ne(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:t},e}function td(t,e,a,l){return t.baseState=a,br(t,G,typeof l=="function"?l:ve)}function Q1(t,e,a,l,i){if(qn(t))throw Error(y(485));if(t=e.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};k.T!==null?a(!0):n.isTransition=!1,l(n),a=e.pending,a===null?(n.next=e.pending=n,ed(e,n)):(n.next=a.next,e.pending=a.next=n)}}function ed(t,e){var a=e.action,l=e.payload,i=t.state;if(e.isTransition){var n=k.T,o={};k.T=o;try{var s=a(i,l),r=k.S;r!==null&&r(o,s),Pc(t,e,s)}catch(u){xs(t,e,u)}finally{n!==null&&o.types!==null&&(n.types=o.types),k.T=n}}else try{n=a(i,l),Pc(t,e,n)}catch(u){xs(t,e,u)}}function Pc(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){tf(t,e,l)},function(l){return xs(t,e,l)}):tf(t,e,a)}function tf(t,e,a){e.status="fulfilled",e.value=a,ad(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,ed(t,a)))}function xs(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,ad(e),e=e.next;while(e!==l)}t.action=null}function ad(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ld(t,e){return e}function ef(t,e){if(O){var a=q.formState;if(a!==null){t:{var l=z;if(O){if(V){e:{for(var i=V,n=Kt;i.nodeType!==8;){if(!n){i=null;break e}if(i=Vt(i.nextSibling),i===null){i=null;break e}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){V=Vt(i.nextSibling),l=i.data==="F!";break t}}We(l)}l=!1}l&&(e=a[0])}}return a=mt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ld,lastRenderedState:e},a.queue=l,a=vd.bind(null,z,l),l.dispatch=a,l=vs(!1),n=wr.bind(null,z,!1,l.queue),l=mt(),i={state:e,dispatch:null,action:t,pending:null},l.queue=i,a=Q1.bind(null,z,i,n,a),i.dispatch=a,l.memoizedState=t,[e,a,!1]}function af(t){var e=P();return id(e,G,t)}function id(t,e,a){if(e=br(t,e,ld)[0],t=Xi(ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=ui(e)}catch(o){throw o===fl?Hn:o}else l=e;e=P();var i=e.queue,n=i.dispatch;return a!==e.memoizedState&&(z.flags|=2048,el(9,{destroy:void 0},J1.bind(null,i,a),null)),[l,n,t]}function J1(t,e){t.action=e}function lf(t){var e=P(),a=G;if(a!==null)return id(e,a,t);P(),e=e.memoizedState,a=P();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function el(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=z.updateQueue,e===null&&(e=Un(),z.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function nd(){return P().memoizedState}function Qi(t,e,a,l){var i=mt();z.flags|=t,i.memoizedState=el(1|e,{destroy:void 0},a,l===void 0?null:l)}function Gn(t,e,a,l){var i=P();l=l===void 0?null:l;var n=i.memoizedState.inst;G!==null&&l!==null&&fr(l,G.memoizedState.deps)?i.memoizedState=el(e,n,a,l):(z.flags|=t,i.memoizedState=el(1|e,n,a,l))}function nf(t,e){Qi(8390656,8,t,e)}function mr(t,e){Gn(2048,8,t,e)}function F1(t){z.flags|=4;var e=z.updateQueue;if(e===null)e=Un(),z.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function od(t){var e=P().memoizedState;return F1({ref:e,nextImpl:t}),function(){if((D&2)!==0)throw Error(y(440));return e.impl.apply(void 0,arguments)}}function sd(t,e){return Gn(4,2,t,e)}function rd(t,e){return Gn(4,4,t,e)}function cd(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fd(t,e,a){a=a!=null?a.concat([t]):null,Gn(4,4,cd.bind(null,e,t),a)}function yr(){}function ud(t,e){var a=P();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&fr(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function dd(t,e){var a=P();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&fr(e,l[1]))return l[0];if(l=t(),ga){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[l,e],l}function vr(t,e,a){return a===void 0||(ye&1073741824)!==0&&(E&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=t0(),z.lanes|=t,$e|=t,a)}function pd(t,e,a,l){return Rt(a,e)?a:tl.current!==null?(t=vr(t,a,l),Rt(t,e)||(lt=!0),t):(ye&42)===0||(ye&1073741824)!==0&&(E&261930)===0?(lt=!0,t.memoizedState=a):(t=t0(),z.lanes|=t,$e|=t,e)}function hd(t,e,a,l,i){var n=N.p;N.p=n!==0&&8>n?n:8;var o=k.T,s={};k.T=s,wr(t,!1,e,a);try{var r=i(),u=k.S;if(u!==null&&u(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var b=Z1(r,l);Ul(t,e,b,Bt(t))}else Ul(t,e,l,Bt(t))}catch(h){Ul(t,e,{then:function(){},status:"rejected",reason:h},Bt())}finally{N.p=n,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function W1(){}function ws(t,e,a,l){if(t.tag!==5)throw Error(y(476));var i=gd(t).queue;hd(t,i,e,sa,a===null?W1:function(){return bd(t),a(l)})}function gd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:sa,baseState:sa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:sa},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ve,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function bd(t){var e=gd(t);e.next===null&&(e=t.alternate.memoizedState),Ul(t,e.next.queue,{},Bt())}function xr(){return dt(ei)}function md(){return P().memoizedState}function yd(){return P().memoizedState}function I1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Bt();t=Ye(a);var l=Ke(e,t,a);l!==null&&(St(l,e,a),Nl(l,e,a)),e={cache:nr()},t.payload=e;return}e=e.return}}function $1(t,e,a){var l=Bt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},qn(t)?xd(e,a):(a=er(t,e,a,l),a!==null&&(St(a,t,l),wd(a,e,l)))}function vd(t,e,a){var l=Bt();Ul(t,e,a,l)}function Ul(t,e,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(qn(t))xd(e,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var o=e.lastRenderedState,s=n(o,a);if(i.hasEagerState=!0,i.eagerState=s,Rt(s,o))return Ln(t,e,i,0),q===null&&Nn(),!1}catch{}if(a=er(t,e,i,l),a!==null)return St(a,t,l),wd(a,e,l),!0}return!1}function wr(t,e,a,l){if(l={lane:2,revertLane:Er(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},qn(t)){if(e)throw Error(y(479))}else e=er(t,a,l,2),e!==null&&St(e,t,2)}function qn(t){var e=t.alternate;return t===z||e!==null&&e===z}function xd(t,e){Ja=hn=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function wd(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,ou(t,a)}}var $l={readContext:dt,use:jn,useCallback:W,useContext:W,useEffect:W,useImperativeHandle:W,useLayoutEffect:W,useInsertionEffect:W,useMemo:W,useReducer:W,useRef:W,useState:W,useDebugValue:W,useDeferredValue:W,useTransition:W,useSyncExternalStore:W,useId:W,useHostTransitionStatus:W,useFormState:W,useActionState:W,useOptimistic:W,useMemoCache:W,useCacheRefresh:W};$l.useEffectEvent=W;var Sd={readContext:dt,use:jn,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:nf,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Qi(4194308,4,cd.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Qi(4194308,4,t,e)},useInsertionEffect:function(t,e){Qi(4,2,t,e)},useMemo:function(t,e){var a=mt();e=e===void 0?null:e;var l=t();if(ga){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=mt();if(a!==void 0){var i=a(e);if(ga){Ne(!0);try{a(e)}finally{Ne(!1)}}}else i=e;return l.memoizedState=l.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=$1.bind(null,z,t),[l.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:function(t){t=vs(t);var e=t.queue,a=vd.bind(null,z,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:yr,useDeferredValue:function(t,e){var a=mt();return vr(a,t,e)},useTransition:function(){var t=vs(!1);return t=hd.bind(null,z,t.queue,!0,!1),mt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=z,i=mt();if(O){if(a===void 0)throw Error(y(407));a=a()}else{if(a=e(),q===null)throw Error(y(349));(E&127)!==0||Fu(l,e,a)}i.memoizedState=a;var n={value:a,getSnapshot:e};return i.queue=n,nf(Iu.bind(null,l,n,t),[t]),l.flags|=2048,el(9,{destroy:void 0},Wu.bind(null,l,n,a,e),null),a},useId:function(){var t=mt(),e=q.identifierPrefix;if(O){var a=$t,l=It;a=(l&~(1<<32-Ot(l)-1)).toString(32)+a,e="_"+e+"R_"+a,a=gn++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=V1++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:xr,useFormState:ef,useActionState:ef,useOptimistic:function(t){var e=mt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=wr.bind(null,z,!0,a),a.dispatch=e,[t,e]},useMemoCache:gr,useCacheRefresh:function(){return mt().memoizedState=I1.bind(null,z)},useEffectEvent:function(t){var e=mt(),a={impl:t};return e.memoizedState=a,function(){if((D&2)!==0)throw Error(y(440));return a.impl.apply(void 0,arguments)}}},Sr={readContext:dt,use:jn,useCallback:ud,useContext:dt,useEffect:mr,useImperativeHandle:fd,useInsertionEffect:sd,useLayoutEffect:rd,useMemo:dd,useReducer:Xi,useRef:nd,useState:function(){return Xi(ve)},useDebugValue:yr,useDeferredValue:function(t,e){var a=P();return pd(a,G.memoizedState,t,e)},useTransition:function(){var t=Xi(ve)[0],e=P().memoizedState;return[typeof t=="boolean"?t:ui(t),e]},useSyncExternalStore:Ju,useId:md,useHostTransitionStatus:xr,useFormState:af,useActionState:af,useOptimistic:function(t,e){var a=P();return td(a,G,t,e)},useMemoCache:gr,useCacheRefresh:yd};Sr.useEffectEvent=od;var kd={readContext:dt,use:jn,useCallback:ud,useContext:dt,useEffect:mr,useImperativeHandle:fd,useInsertionEffect:sd,useLayoutEffect:rd,useMemo:dd,useReducer:_o,useRef:nd,useState:function(){return _o(ve)},useDebugValue:yr,useDeferredValue:function(t,e){var a=P();return G===null?vr(a,t,e):pd(a,G.memoizedState,t,e)},useTransition:function(){var t=_o(ve)[0],e=P().memoizedState;return[typeof t=="boolean"?t:ui(t),e]},useSyncExternalStore:Ju,useId:md,useHostTransitionStatus:xr,useFormState:lf,useActionState:lf,useOptimistic:function(t,e){var a=P();return G!==null?td(a,G,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:gr,useCacheRefresh:yd};kd.useEffectEvent=od;function Eo(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:X({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ss={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Bt(),i=Ye(l);i.payload=e,a!=null&&(i.callback=a),e=Ke(t,i,l),e!==null&&(St(e,t,l),Nl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Bt(),i=Ye(l);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Ke(t,i,l),e!==null&&(St(e,t,l),Nl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Bt(),l=Ye(a);l.tag=2,e!=null&&(l.callback=e),e=Ke(t,l,a),e!==null&&(St(e,t,a),Nl(e,t,a))}};function of(t,e,a,l,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,n,o):e.prototype&&e.prototype.isPureReactComponent?!Ql(a,l)||!Ql(i,n):!0}function sf(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&Ss.enqueueReplaceState(e,e.state,null)}function ba(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=X({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function Td(t){sn(t)}function zd(t){console.error(t)}function Md(t){sn(t)}function bn(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function rf(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function ks(t,e,a){return a=Ye(a),a.tag=3,a.payload={element:null},a.callback=function(){bn(t,e)},a}function Cd(t){return t=Ye(t),t.tag=3,t}function Ad(t,e,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;t.payload=function(){return i(n)},t.callback=function(){rf(e,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){rf(e,a,l),typeof i!="function"&&(Ze===null?Ze=new Set([this]):Ze.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function P1(t,e,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&cl(e,a,i,!0),a=Dt.current,a!==null){switch(a.tag){case 31:case 13:return Zt===null?wn():a.alternate===null&&I===0&&(I=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===un?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),qo(t,l,i)),!1;case 22:return a.flags|=65536,l===un?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),qo(t,l,i)),!1}throw Error(y(435,a.tag))}return qo(t,l,i),wn(),!1}if(O)return e=Dt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,l!==fs&&(t=Error(y(422),{cause:l}),Fl(Yt(t,a)))):(l!==fs&&(e=Error(y(423),{cause:l}),Fl(Yt(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,l=Yt(l,a),i=ks(t.stateNode,l,i),Ao(t,i),I!==4&&(I=2)),!1;var n=Error(y(520),{cause:l});if(n=Yt(n,a),ql===null?ql=[n]:ql.push(n),I!==4&&(I=2),e===null)return!0;l=Yt(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=ks(a.stateNode,l,t),Ao(a,t),!1;case 1:if(e=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Ze===null||!Ze.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Cd(i),Ad(i,t,a,l),Ao(a,i),!1}a=a.return}while(a!==null);return!1}var kr=Error(y(461)),lt=!1;function ct(t,e,a,l){e.child=t===null?Yu(e,null,a,l):ha(e,t.child,a,l)}function cf(t,e,a,l,i){a=a.render;var n=e.ref;if("ref"in l){var o={};for(var s in l)s!=="ref"&&(o[s]=l[s])}else o=l;return pa(e),l=ur(t,e,a,o,n,i),s=dr(),t!==null&&!lt?(pr(t,e,i),xe(t,e,i)):(O&&s&&lr(e),e.flags|=1,ct(t,e,l,i),e.child)}function ff(t,e,a,l,i){if(t===null){var n=a.type;return typeof n=="function"&&!ar(n)&&n.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=n,_d(t,e,n,l,i)):(t=Zi(a.type,null,l,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!Tr(t,i)){var o=n.memoizedProps;if(a=a.compare,a=a!==null?a:Ql,a(o,l)&&t.ref===e.ref)return xe(t,e,i)}return e.flags|=1,t=he(n,l),t.ref=e.ref,t.return=e,e.child=t}function _d(t,e,a,l,i){if(t!==null){var n=t.memoizedProps;if(Ql(n,l)&&t.ref===e.ref)if(lt=!1,e.pendingProps=l=n,Tr(t,i))(t.flags&131072)!==0&&(lt=!0);else return e.lanes=t.lanes,xe(t,e,i)}return Ts(t,e,a,l,i)}function Ed(t,e,a,l){var i=l.children,n=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,t!==null){for(l=e.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,e.child=null;return uf(t,e,n,a,l)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vi(e,n!==null?n.cachePool:null),n!==null?$c(e,n):ms(),Vu(e);else return l=e.lanes=536870912,uf(t,e,n!==null?n.baseLanes|a:a,a,l)}else n!==null?(Vi(e,n.cachePool),$c(e,n),Re(e),e.memoizedState=null):(t!==null&&Vi(e,null),ms(),Re(e));return ct(t,e,i,a),e.child}function _l(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function uf(t,e,a,l,i){var n=or();return n=n===null?null:{parent:at._currentValue,pool:n},e.memoizedState={baseLanes:a,cachePool:n},t!==null&&Vi(e,null),ms(),Vu(e),t!==null&&cl(t,e,l,!0),e.childLanes=i,null}function Ji(t,e){return e=mn({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function df(t,e,a){return ha(e,t.child,null,a),t=Ji(e,e.pendingProps),t.flags|=2,Mt(e),e.memoizedState=null,t}function th(t,e,a){var l=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(O){if(l.mode==="hidden")return t=Ji(e,l),e.lanes=536870912,_l(null,t);if(ys(e),(t=V)?(t=S0(t,Kt),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fe!==null?{id:It,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},a=Nu(t),a.return=e,e.child=a,ut=e,V=null)):t=null,t===null)throw We(e);return e.lanes=536870912,null}return Ji(e,l)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(ys(e),i)if(e.flags&256)e.flags&=-257,e=df(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(y(558));else if(lt||cl(t,e,a,!1),i=(a&t.childLanes)!==0,lt||i){if(l=q,l!==null&&(o=su(l,a),o!==0&&o!==n.retryLane))throw n.retryLane=o,xa(t,o),St(l,t,o),kr;wn(),e=df(t,e,a)}else t=n.treeContext,V=Vt(o.nextSibling),ut=e,O=!0,qe=null,Kt=!1,t!==null&&Hu(e,t),e=Ji(e,l),e.flags|=4096;return e}return t=he(t.child,{mode:l.mode,children:l.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Fi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(y(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Ts(t,e,a,l,i){return pa(e),a=ur(t,e,a,l,void 0,i),l=dr(),t!==null&&!lt?(pr(t,e,i),xe(t,e,i)):(O&&l&&lr(e),e.flags|=1,ct(t,e,a,i),e.child)}function pf(t,e,a,l,i,n){return pa(e),e.updateQueue=null,a=Qu(e,l,a,i),Xu(t),l=dr(),t!==null&&!lt?(pr(t,e,n),xe(t,e,n)):(O&&l&&lr(e),e.flags|=1,ct(t,e,a,n),e.child)}function hf(t,e,a,l,i){if(pa(e),e.stateNode===null){var n=ja,o=a.contextType;typeof o=="object"&&o!==null&&(n=dt(o)),n=new a(l,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ss,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=l,n.state=e.memoizedState,n.refs={},rr(e),o=a.contextType,n.context=typeof o=="object"&&o!==null?dt(o):ja,n.state=e.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Eo(e,a,o,l),n.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&Ss.enqueueReplaceState(n,n.state,null),Hl(e,l,n,i),Ll(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){n=e.stateNode;var s=e.memoizedProps,r=ba(a,s);n.props=r;var u=n.context,b=a.contextType;o=ja,typeof b=="object"&&b!==null&&(o=dt(b));var h=a.getDerivedStateFromProps;b=typeof h=="function"||typeof n.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,b||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s||u!==o)&&sf(e,n,l,o),Ee=!1;var d=e.memoizedState;n.state=d,Hl(e,l,n,i),Ll(),u=e.memoizedState,s||d!==u||Ee?(typeof h=="function"&&(Eo(e,a,h,l),u=e.memoizedState),(r=Ee||of(e,a,r,l,d,u,o))?(b||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=u),n.props=l,n.state=u,n.context=o,l=r):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{n=e.stateNode,gs(t,e),o=e.memoizedProps,b=ba(a,o),n.props=b,h=e.pendingProps,d=n.context,u=a.contextType,r=ja,typeof u=="object"&&u!==null&&(r=dt(u)),s=a.getDerivedStateFromProps,(u=typeof s=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==h||d!==r)&&sf(e,n,l,r),Ee=!1,d=e.memoizedState,n.state=d,Hl(e,l,n,i),Ll();var g=e.memoizedState;o!==h||d!==g||Ee||t!==null&&t.dependencies!==null&&fn(t.dependencies)?(typeof s=="function"&&(Eo(e,a,s,l),g=e.memoizedState),(b=Ee||of(e,a,b,l,d,g,r)||t!==null&&t.dependencies!==null&&fn(t.dependencies))?(u||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,g,r),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,g,r)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=g),n.props=l,n.state=g,n.context=r,l=b):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),l=!1)}return n=l,Fi(t,e),l=(e.flags&128)!==0,n||l?(n=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&l?(e.child=ha(e,t.child,null,i),e.child=ha(e,null,a,i)):ct(t,e,a,i),e.memoizedState=n.state,t=e.child):t=xe(t,e,i),t}function gf(t,e,a,l){return da(),e.flags|=256,ct(t,e,a,l),e.child}var Oo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bo(t){return{baseLanes:t,cachePool:ju()}}function Ro(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=At),t}function Od(t,e,a){var l=e.pendingProps,i=!1,n=(e.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:($.current&2)!==0),o&&(i=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(O){if(i?Be(e):Re(e),(t=V)?(t=S0(t,Kt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fe!==null?{id:It,overflow:$t}:null,retryLane:536870912,hydrationErrors:null},a=Nu(t),a.return=e,e.child=a,ut=e,V=null)):t=null,t===null)throw We(e);return Us(t)?e.lanes=32:e.lanes=536870912,null}var s=l.children;return l=l.fallback,i?(Re(e),i=e.mode,s=mn({mode:"hidden",children:s},i),l=ra(l,i,a,null),s.return=e,l.return=e,s.sibling=l,e.child=s,l=e.child,l.memoizedState=Bo(a),l.childLanes=Ro(t,o,a),e.memoizedState=Oo,_l(null,l)):(Be(e),zs(e,s))}var r=t.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(n)e.flags&256?(Be(e),e.flags&=-257,e=Do(t,e,a)):e.memoizedState!==null?(Re(e),e.child=t.child,e.flags|=128,e=null):(Re(e),s=l.fallback,i=e.mode,l=mn({mode:"visible",children:l.children},i),s=ra(s,i,a,null),s.flags|=2,l.return=e,s.return=e,l.sibling=s,e.child=l,ha(e,t.child,null,a),l=e.child,l.memoizedState=Bo(a),l.childLanes=Ro(t,o,a),e.memoizedState=Oo,e=_l(null,l));else if(Be(e),Us(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var u=o.dgst;o=u,l=Error(y(419)),l.stack="",l.digest=o,Fl({value:l,source:null,stack:null}),e=Do(t,e,a)}else if(lt||cl(t,e,a,!1),o=(a&t.childLanes)!==0,lt||o){if(o=q,o!==null&&(l=su(o,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,xa(t,l),St(o,t,l),kr;Hs(s)||wn(),e=Do(t,e,a)}else Hs(s)?(e.flags|=192,e.child=t.child,e=null):(t=r.treeContext,V=Vt(s.nextSibling),ut=e,O=!0,qe=null,Kt=!1,t!==null&&Hu(e,t),e=zs(e,l.children),e.flags|=4096);return e}return i?(Re(e),s=l.fallback,i=e.mode,r=t.child,u=r.sibling,l=he(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,u!==null?s=he(u,s):(s=ra(s,i,a,null),s.flags|=2),s.return=e,l.return=e,l.sibling=s,e.child=l,_l(null,l),l=e.child,s=t.child.memoizedState,s===null?s=Bo(a):(i=s.cachePool,i!==null?(r=at._currentValue,i=i.parent!==r?{parent:r,pool:r}:i):i=ju(),s={baseLanes:s.baseLanes|a,cachePool:i}),l.memoizedState=s,l.childLanes=Ro(t,o,a),e.memoizedState=Oo,_l(t.child,l)):(Be(e),a=t.child,t=a.sibling,a=he(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=a,e.memoizedState=null,a)}function zs(t,e){return e=mn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function mn(t,e){return t=Ct(22,t,null,e),t.lanes=0,t}function Do(t,e,a){return ha(e,t.child,null,a),t=zs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bf(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),ds(t.return,e,a)}function No(t,e,a,l,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:n}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=i,o.treeForkCount=n)}function Bd(t,e,a){var l=e.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var o=$.current,s=(o&2)!==0;if(s?(o=o&1|2,e.flags|=128):o&=1,Y($,o),ct(t,e,l,a),l=O?Jl:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bf(t,a,e);else if(t.tag===19)bf(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&pn(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),No(e,!1,i,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pn(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}No(e,!0,a,null,n,l);break;case"together":No(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function xe(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),$e|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(cl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(y(153));if(e.child!==null){for(t=e.child,a=he(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=he(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Tr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&fn(t)))}function eh(t,e,a){switch(e.tag){case 3:an(e,e.stateNode.containerInfo),Oe(e,at,t.memoizedState.cache),da();break;case 27:case 5:Po(e);break;case 4:an(e,e.stateNode.containerInfo);break;case 10:Oe(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ys(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Be(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Od(t,e,a):(Be(e),t=xe(t,e,a),t!==null?t.sibling:null);Be(e);break;case 19:var i=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(cl(t,e,a,!1),l=(a&e.childLanes)!==0),i){if(l)return Bd(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y($,$.current),l)break;return null;case 22:return e.lanes=0,Ed(t,e,a,e.pendingProps);case 24:Oe(e,at,t.memoizedState.cache)}return xe(t,e,a)}function Rd(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)lt=!0;else{if(!Tr(t,a)&&(e.flags&128)===0)return lt=!1,eh(t,e,a);lt=(t.flags&131072)!==0}else lt=!1,O&&(e.flags&1048576)!==0&&Lu(e,Jl,e.index);switch(e.lanes=0,e.tag){case 16:t:{var l=e.pendingProps;if(t=na(e.elementType),e.type=t,typeof t=="function")ar(t)?(l=ba(t,l),e.tag=1,e=hf(null,e,t,l,a)):(e.tag=0,e=Ts(null,e,t,l,a));else{if(t!=null){var i=t.$$typeof;if(i===Ys){e.tag=11,e=cf(null,e,t,l,a);break t}else if(i===Ks){e.tag=14,e=ff(null,e,t,l,a);break t}}throw e=Io(t)||t,Error(y(306,e,""))}}return e;case 0:return Ts(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,i=ba(l,e.pendingProps),hf(t,e,l,i,a);case 3:t:{if(an(e,e.stateNode.containerInfo),t===null)throw Error(y(387));l=e.pendingProps;var n=e.memoizedState;i=n.element,gs(t,e),Hl(e,l,null,a);var o=e.memoizedState;if(l=o.cache,Oe(e,at,l),l!==n.cache&&ps(e,[at],a,!0),Ll(),l=o.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=gf(t,e,l,a);break t}else if(l!==i){i=Yt(Error(y(424)),e),Fl(i),e=gf(t,e,l,a);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,V=Vt(t.firstChild),ut=e,O=!0,qe=null,Kt=!0,a=Yu(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(da(),l===i){e=xe(t,e,a);break t}ct(t,e,l,a)}e=e.child}return e;case 26:return Fi(t,e),t===null?(a=Uf(e.type,null,e.pendingProps,null))?e.memoizedState=a:O||(a=e.type,t=e.pendingProps,l=zn(Ge.current).createElement(a),l[ft]=e,l[kt]=t,pt(l,a,t),st(l),e.stateNode=l):e.memoizedState=Uf(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Po(e),t===null&&O&&(l=e.stateNode=k0(e.type,e.pendingProps,Ge.current),ut=e,Kt=!0,i=V,ta(e.type)?(js=i,V=Vt(l.firstChild)):V=i),ct(t,e,e.pendingProps.children,a),Fi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&O&&((i=l=V)&&(l=_h(l,e.type,e.pendingProps,Kt),l!==null?(e.stateNode=l,ut=e,V=Vt(l.firstChild),Kt=!1,i=!0):i=!1),i||We(e)),Po(e),i=e.type,n=e.pendingProps,o=t!==null?t.memoizedProps:null,l=n.children,Ns(i,n)?l=null:o!==null&&Ns(i,o)&&(e.flags|=32),e.memoizedState!==null&&(i=ur(t,e,X1,null,null,a),ei._currentValue=i),Fi(t,e),ct(t,e,l,a),e.child;case 6:return t===null&&O&&((t=a=V)&&(a=Eh(a,e.pendingProps,Kt),a!==null?(e.stateNode=a,ut=e,V=null,t=!0):t=!1),t||We(e)),null;case 13:return Od(t,e,a);case 4:return an(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=ha(e,null,l,a):ct(t,e,l,a),e.child;case 11:return cf(t,e,e.type,e.pendingProps,a);case 7:return ct(t,e,e.pendingProps,a),e.child;case 8:return ct(t,e,e.pendingProps.children,a),e.child;case 12:return ct(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,Oe(e,e.type,l.value),ct(t,e,l.children,a),e.child;case 9:return i=e.type._context,l=e.pendingProps.children,pa(e),i=dt(i),l=l(i),e.flags|=1,ct(t,e,l,a),e.child;case 14:return ff(t,e,e.type,e.pendingProps,a);case 15:return _d(t,e,e.type,e.pendingProps,a);case 19:return Bd(t,e,a);case 31:return th(t,e,a);case 22:return Ed(t,e,a,e.pendingProps);case 24:return pa(e),l=dt(at),t===null?(i=or(),i===null&&(i=q,n=nr(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),e.memoizedState={parent:l,cache:i},rr(e),Oe(e,at,i)):((t.lanes&a)!==0&&(gs(t,e),Hl(e,null,null,a),Ll()),i=t.memoizedState,n=e.memoizedState,i.parent!==l?(i={parent:l,cache:l},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Oe(e,at,l)):(l=n.cache,Oe(e,at,l),l!==i.cache&&ps(e,[at],a,!0))),ct(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(y(156,e.tag))}function ne(t){t.flags|=4}function Lo(t,e,a,l,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(l0())t.flags|=8192;else throw fa=un,sr}else t.flags&=-16777217}function mf(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!M0(e))if(l0())t.flags|=8192;else throw fa=un,sr}function Ri(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?iu():536870912,t.lanes|=e,al|=e)}function Sl(t,e){if(!O)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Z(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function ah(t,e,a){var l=e.pendingProps;switch(ir(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Z(e),null;case 1:return Z(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ge(at),Wa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?ne(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Co())),Z(e),null;case 26:var i=e.type,n=e.memoizedState;return t===null?(ne(e),n!==null?(Z(e),mf(e,n)):(Z(e),Lo(e,i,null,l,a))):n?n!==t.memoizedState?(ne(e),Z(e),mf(e,n)):(Z(e),e.flags&=-16777217):(t=t.memoizedProps,t!==l&&ne(e),Z(e),Lo(e,i,t,l,a)),null;case 27:if(ln(e),a=Ge.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ne(e);else{if(!l){if(e.stateNode===null)throw Error(y(166));return Z(e),null}t=te.current,Ca(e)?Vc(e,t):(t=k0(i,l,a),e.stateNode=t,ne(e))}return Z(e),null;case 5:if(ln(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&ne(e);else{if(!l){if(e.stateNode===null)throw Error(y(166));return Z(e),null}if(n=te.current,Ca(e))Vc(e,n);else{var o=zn(Ge.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?o.createElement(i,{is:l.is}):o.createElement(i)}}n[ft]=e,n[kt]=l;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=n;t:switch(pt(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ne(e)}}return Z(e),Lo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&ne(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(y(166));if(t=Ge.current,Ca(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,i=ut,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}t[ft]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||v0(t.nodeValue,a)),t||We(e,!0)}else t=zn(t).createTextNode(l),t[ft]=e,e.stateNode=t}return Z(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(l=Ca(e),a!==null){if(t===null){if(!l)throw Error(y(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[ft]=e}else da(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Z(e),t=!1}else a=Co(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Mt(e),e):(Mt(e),null);if((e.flags&128)!==0)throw Error(y(558))}return Z(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Ca(e),l!==null&&l.dehydrated!==null){if(t===null){if(!i)throw Error(y(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[ft]=e}else da(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Z(e),i=!1}else i=Co(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Mt(e),e):(Mt(e),null)}return Mt(e),(e.flags&128)!==0?(e.lanes=a,e):(a=l!==null,t=t!==null&&t.memoizedState!==null,a&&(l=e.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Ri(e,e.updateQueue),Z(e),null);case 4:return Wa(),t===null&&Or(e.stateNode.containerInfo),Z(e),null;case 10:return ge(e.type),Z(e),null;case 19:if(rt($),l=e.memoizedState,l===null)return Z(e),null;if(i=(e.flags&128)!==0,n=l.rendering,n===null)if(i)Sl(l,!1);else{if(I!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=pn(t),n!==null){for(e.flags|=128,Sl(l,!1),t=n.updateQueue,e.updateQueue=t,Ri(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Du(a,t),a=a.sibling;return Y($,$.current&1|2),O&&ce(e,l.treeForkCount),e.child}t=t.sibling}l.tail!==null&&_t()>vn&&(e.flags|=128,i=!0,Sl(l,!1),e.lanes=4194304)}else{if(!i)if(t=pn(n),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Ri(e,t),Sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!O)return Z(e),null}else 2*_t()-l.renderingStartTime>vn&&a!==536870912&&(e.flags|=128,i=!0,Sl(l,!1),e.lanes=4194304);l.isBackwards?(n.sibling=e.child,e.child=n):(t=l.last,t!==null?t.sibling=n:e.child=n,l.last=n)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=_t(),t.sibling=null,a=$.current,Y($,i?a&1|2:a&1),O&&ce(e,l.treeForkCount),t):(Z(e),null);case 22:case 23:return Mt(e),cr(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Z(e),e.subtreeFlags&6&&(e.flags|=8192)):Z(e),a=e.updateQueue,a!==null&&Ri(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&rt(ca),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ge(at),Z(e),null;case 25:return null;case 30:return null}throw Error(y(156,e.tag))}function lh(t,e){switch(ir(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ge(at),Wa(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ln(e),null;case 31:if(e.memoizedState!==null){if(Mt(e),e.alternate===null)throw Error(y(340));da()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Mt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(y(340));da()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt($),null;case 4:return Wa(),null;case 10:return ge(e.type),null;case 22:case 23:return Mt(e),cr(),t!==null&&rt(ca),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ge(at),null;case 25:return null;default:return null}}function Dd(t,e){switch(ir(e),e.tag){case 3:ge(at),Wa();break;case 26:case 27:case 5:ln(e);break;case 4:Wa();break;case 31:e.memoizedState!==null&&Mt(e);break;case 13:Mt(e);break;case 19:rt($);break;case 10:ge(e.type);break;case 22:case 23:Mt(e),cr(),t!==null&&rt(ca);break;case 24:ge(at)}}function di(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){l=void 0;var n=a.create,o=a.inst;l=n(),o.destroy=l}a=a.next}while(a!==i)}}catch(s){H(e,e.return,s)}}function Ie(t,e,a){try{var l=e.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&t)===t){var o=l.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=e;var r=a,u=s;try{u()}catch(b){H(i,r,b)}}}l=l.next}while(l!==n)}}catch(b){H(e,e.return,b)}}function Nd(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Zu(e,a)}catch(l){H(t,t.return,l)}}}function Ld(t,e,a){a.props=ba(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){H(t,e,l)}}function jl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(i){H(t,e,i)}}function Pt(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){H(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){H(t,e,i)}else a.current=null}function Hd(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){H(t,t.return,i)}}function Ho(t,e,a){try{var l=t.stateNode;kh(l,t.type,a,e),l[kt]=e}catch(i){H(t,t.return,i)}}function Ud(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ta(t.type)||t.tag===4}function Uo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ud(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ms(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=de));else if(l!==4&&(l===27&&ta(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Ms(t,e,a),t=t.sibling;t!==null;)Ms(t,e,a),t=t.sibling}function yn(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(yn(t,e,a),t=t.sibling;t!==null;)yn(t,e,a),t=t.sibling}function jd(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);pt(e,l,a),e[ft]=t,e[kt]=a}catch(n){H(t,t.return,n)}}var fe=!1,et=!1,jo=!1,yf=typeof WeakSet=="function"?WeakSet:Set,ot=null;function ih(t,e){if(t=t.containerInfo,Rs=_n,t=Mu(t),Ps(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break t}var o=0,s=-1,r=-1,u=0,b=0,h=t,d=null;e:for(;;){for(var g;h!==a||i!==0&&h.nodeType!==3||(s=o+i),h!==n||l!==0&&h.nodeType!==3||(r=o+l),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break e;if(d===a&&++u===i&&(s=o),d===n&&++b===l&&(r=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ds={focusedElem:t,selectionRange:a},_n=!1,ot=e;ot!==null;)if(e=ot,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ot=t;else for(;ot!==null;){switch(e=ot,n=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,a=e,i=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var v=ba(a.type,i);t=l.getSnapshotBeforeUpdate(v,n),l.__reactInternalSnapshotBeforeUpdate=t}catch(S){H(a,a.return,S)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Ls(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ls(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(y(163))}if(t=e.sibling,t!==null){t.return=e.return,ot=t;break}ot=e.return}}function Gd(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:se(t,a),l&4&&di(5,a);break;case 1:if(se(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(o){H(a,a.return,o)}else{var i=ba(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){H(a,a.return,o)}}l&64&&Nd(a),l&512&&jl(a,a.return);break;case 3:if(se(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Zu(t,e)}catch(o){H(a,a.return,o)}}break;case 27:e===null&&l&4&&jd(a);case 26:case 5:se(t,a),e===null&&l&4&&Hd(a),l&512&&jl(a,a.return);break;case 12:se(t,a);break;case 31:se(t,a),l&4&&Kd(t,a);break;case 13:se(t,a),l&4&&Zd(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ph.bind(null,a),Oh(t,a))));break;case 22:if(l=a.memoizedState!==null||fe,!l){e=e!==null&&e.memoizedState!==null||et,i=fe;var n=et;fe=l,(et=e)&&!n?re(t,a,(a.subtreeFlags&8772)!==0):se(t,a),fe=i,et=n}break;case 30:break;default:se(t,a)}}function qd(t){var e=t.alternate;e!==null&&(t.alternate=null,qd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Qs(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var F=null,xt=!1;function oe(t,e,a){for(a=a.child;a!==null;)Yd(t,e,a),a=a.sibling}function Yd(t,e,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(ni,a)}catch{}switch(a.tag){case 26:et||Pt(a,e),oe(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:et||Pt(a,e);var l=F,i=xt;ta(a.type)&&(F=a.stateNode,xt=!1),oe(t,e,a),Kl(a.stateNode),F=l,xt=i;break;case 5:et||Pt(a,e);case 6:if(l=F,i=xt,F=null,oe(t,e,a),F=l,xt=i,F!==null)if(xt)try{(F.nodeType===9?F.body:F.nodeName==="HTML"?F.ownerDocument.body:F).removeChild(a.stateNode)}catch(n){H(a,e,n)}else try{F.removeChild(a.stateNode)}catch(n){H(a,e,n)}break;case 18:F!==null&&(xt?(t=F,Rf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ol(t)):Rf(F,a.stateNode));break;case 4:l=F,i=xt,F=a.stateNode.containerInfo,xt=!0,oe(t,e,a),F=l,xt=i;break;case 0:case 11:case 14:case 15:Ie(2,a,e),et||Ie(4,a,e),oe(t,e,a);break;case 1:et||(Pt(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ld(a,e,l)),oe(t,e,a);break;case 21:oe(t,e,a);break;case 22:et=(l=et)||a.memoizedState!==null,oe(t,e,a),et=l;break;default:oe(t,e,a)}}function Kd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ol(t)}catch(a){H(e,e.return,a)}}}function Zd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ol(t)}catch(a){H(e,e.return,a)}}function nh(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new yf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new yf),e;default:throw Error(y(435,t.tag))}}function Di(t,e){var a=nh(t);e.forEach(function(l){if(!a.has(l)){a.add(l);var i=hh.bind(null,t,l);l.then(i,i)}})}function yt(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],n=t,o=e,s=o;t:for(;s!==null;){switch(s.tag){case 27:if(ta(s.type)){F=s.stateNode,xt=!1;break t}break;case 5:F=s.stateNode,xt=!1;break t;case 3:case 4:F=s.stateNode.containerInfo,xt=!0;break t}s=s.return}if(F===null)throw Error(y(160));Yd(n,o,i),F=null,xt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Vd(e,t),e=e.sibling}var Jt=null;function Vd(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yt(e,t),vt(t),l&4&&(Ie(3,t,t.return),di(3,t),Ie(5,t,t.return));break;case 1:yt(e,t),vt(t),l&512&&(et||a===null||Pt(a,a.return)),l&64&&fe&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Jt;if(yt(e,t),vt(t),l&512&&(et||a===null||Pt(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[ri]||n[ft]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),pt(n,l,a),n[ft]=t,st(n),l=n;break t;case"link":var o=Gf("link","href",i).get(l+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(n=o[s],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break e}}n=i.createElement(l),pt(n,l,a),i.head.appendChild(n);break;case"meta":if(o=Gf("meta","content",i).get(l+(a.content||""))){for(s=0;s<o.length;s++)if(n=o[s],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break e}}n=i.createElement(l),pt(n,l,a),i.head.appendChild(n);break;default:throw Error(y(468,l))}n[ft]=t,st(n),l=n}t.stateNode=l}else qf(i,t.type,t.stateNode);else t.stateNode=jf(i,l,t.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?qf(i,t.type,t.stateNode):jf(i,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Ho(t,t.memoizedProps,a.memoizedProps)}break;case 27:yt(e,t),vt(t),l&512&&(et||a===null||Pt(a,a.return)),a!==null&&l&4&&Ho(t,t.memoizedProps,a.memoizedProps);break;case 5:if(yt(e,t),vt(t),l&512&&(et||a===null||Pt(a,a.return)),t.flags&32){i=t.stateNode;try{$a(i,"")}catch(v){H(t,t.return,v)}}l&4&&t.stateNode!=null&&(i=t.memoizedProps,Ho(t,i,a!==null?a.memoizedProps:i)),l&1024&&(jo=!0);break;case 6:if(yt(e,t),vt(t),l&4){if(t.stateNode===null)throw Error(y(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(v){H(t,t.return,v)}}break;case 3:if($i=null,i=Jt,Jt=Mn(e.containerInfo),yt(e,t),Jt=i,vt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ol(e.containerInfo)}catch(v){H(t,t.return,v)}jo&&(jo=!1,Xd(t));break;case 4:l=Jt,Jt=Mn(t.stateNode.containerInfo),yt(e,t),vt(t),Jt=l;break;case 12:yt(e,t),vt(t);break;case 31:yt(e,t),vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Di(t,l)));break;case 13:yt(e,t),vt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yn=_t()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Di(t,l)));break;case 22:i=t.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,u=fe,b=et;if(fe=u||i,et=b||r,yt(e,t),et=b,fe=u,vt(t),l&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||r||fe||et||oa(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){r=a=e;try{if(n=r.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=r.stateNode;var h=r.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null;s.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(v){H(r,r.return,v)}}}else if(e.tag===6){if(a===null){r=e;try{r.stateNode.nodeValue=i?"":r.memoizedProps}catch(v){H(r,r.return,v)}}}else if(e.tag===18){if(a===null){r=e;try{var g=r.stateNode;i?Df(g,!0):Df(r.stateNode,!1)}catch(v){H(r,r.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Di(t,a))));break;case 19:yt(e,t),vt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Di(t,l)));break;case 30:break;case 21:break;default:yt(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Ud(l)){a=l;break}l=l.return}if(a==null)throw Error(y(160));switch(a.tag){case 27:var i=a.stateNode,n=Uo(t);yn(t,n,i);break;case 5:var o=a.stateNode;a.flags&32&&($a(o,""),a.flags&=-33);var s=Uo(t);yn(t,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,u=Uo(t);Ms(t,u,r);break;default:throw Error(y(161))}}catch(b){H(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Xd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function se(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Gd(t,e.alternate,e),e=e.sibling}function oa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ie(4,e,e.return),oa(e);break;case 1:Pt(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Ld(e,e.return,a),oa(e);break;case 27:Kl(e.stateNode);case 26:case 5:Pt(e,e.return),oa(e);break;case 22:e.memoizedState===null&&oa(e);break;case 30:oa(e);break;default:oa(e)}t=t.sibling}}function re(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,i=t,n=e,o=n.flags;switch(n.tag){case 0:case 11:case 15:re(i,n,a),di(4,n);break;case 1:if(re(i,n,a),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(u){H(l,l.return,u)}if(l=n,i=l.updateQueue,i!==null){var s=l.stateNode;try{var r=i.shared.hiddenCallbacks;if(r!==null)for(i.shared.hiddenCallbacks=null,i=0;i<r.length;i++)Ku(r[i],s)}catch(u){H(l,l.return,u)}}a&&o&64&&Nd(n),jl(n,n.return);break;case 27:jd(n);case 26:case 5:re(i,n,a),a&&l===null&&o&4&&Hd(n),jl(n,n.return);break;case 12:re(i,n,a);break;case 31:re(i,n,a),a&&o&4&&Kd(i,n);break;case 13:re(i,n,a),a&&o&4&&Zd(i,n);break;case 22:n.memoizedState===null&&re(i,n,a),jl(n,n.return);break;case 30:break;default:re(i,n,a)}e=e.sibling}}function zr(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fi(a))}function Mr(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&fi(t))}function Qt(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qd(t,e,a,l),e=e.sibling}function Qd(t,e,a,l){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Qt(t,e,a,l),i&2048&&di(9,e);break;case 1:Qt(t,e,a,l);break;case 3:Qt(t,e,a,l),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&fi(t)));break;case 12:if(i&2048){Qt(t,e,a,l),t=e.stateNode;try{var n=e.memoizedProps,o=n.id,s=n.onPostCommit;typeof s=="function"&&s(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(r){H(e,e.return,r)}}else Qt(t,e,a,l);break;case 31:Qt(t,e,a,l);break;case 13:Qt(t,e,a,l);break;case 23:break;case 22:n=e.stateNode,o=e.alternate,e.memoizedState!==null?n._visibility&2?Qt(t,e,a,l):Gl(t,e):n._visibility&2?Qt(t,e,a,l):(n._visibility|=2,_a(t,e,a,l,(e.subtreeFlags&10256)!==0||!1)),i&2048&&zr(o,e);break;case 24:Qt(t,e,a,l),i&2048&&Mr(e.alternate,e);break;default:Qt(t,e,a,l)}}function _a(t,e,a,l,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var n=t,o=e,s=a,r=l,u=o.flags;switch(o.tag){case 0:case 11:case 15:_a(n,o,s,r,i),di(8,o);break;case 23:break;case 22:var b=o.stateNode;o.memoizedState!==null?b._visibility&2?_a(n,o,s,r,i):Gl(n,o):(b._visibility|=2,_a(n,o,s,r,i)),i&&u&2048&&zr(o.alternate,o);break;case 24:_a(n,o,s,r,i),i&&u&2048&&Mr(o.alternate,o);break;default:_a(n,o,s,r,i)}e=e.sibling}}function Gl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,i=l.flags;switch(l.tag){case 22:Gl(a,l),i&2048&&zr(l.alternate,l);break;case 24:Gl(a,l),i&2048&&Mr(l.alternate,l);break;default:Gl(a,l)}e=e.sibling}}var El=8192;function Aa(t,e,a){if(t.subtreeFlags&El)for(t=t.child;t!==null;)Jd(t,e,a),t=t.sibling}function Jd(t,e,a){switch(t.tag){case 26:Aa(t,e,a),t.flags&El&&t.memoizedState!==null&&Kh(a,Jt,t.memoizedState,t.memoizedProps);break;case 5:Aa(t,e,a);break;case 3:case 4:var l=Jt;Jt=Mn(t.stateNode.containerInfo),Aa(t,e,a),Jt=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=El,El=16777216,Aa(t,e,a),El=l):Aa(t,e,a));break;default:Aa(t,e,a)}}function Fd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function kl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];ot=l,Id(l,t)}Fd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wd(t),t=t.sibling}function Wd(t){switch(t.tag){case 0:case 11:case 15:kl(t),t.flags&2048&&Ie(9,t,t.return);break;case 3:kl(t);break;case 12:kl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Wi(t)):kl(t);break;default:kl(t)}}function Wi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];ot=l,Id(l,t)}Fd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ie(8,e,e.return),Wi(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Wi(e));break;default:Wi(e)}t=t.sibling}}function Id(t,e){for(;ot!==null;){var a=ot;switch(a.tag){case 0:case 11:case 15:Ie(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ot=l;else t:for(a=t;ot!==null;){l=ot;var i=l.sibling,n=l.return;if(qd(l),l===a){ot=null;break t}if(i!==null){i.return=n,ot=i;break t}ot=n}}}var oh={getCacheForType:function(t){var e=dt(at),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return dt(at).controller.signal}},sh=typeof WeakMap=="function"?WeakMap:Map,D=0,q=null,A=null,E=0,L=0,zt=null,He=!1,ul=!1,Cr=!1,we=0,I=0,$e=0,ua=0,Ar=0,At=0,al=0,ql=null,wt=null,Cs=!1,Yn=0,$d=0,vn=1/0,xn=null,Ze=null,it=0,Ve=null,ll=null,be=0,As=0,_s=null,Pd=null,Yl=0,Es=null;function Bt(){return(D&2)!==0&&E!==0?E&-E:k.T!==null?Er():ru()}function t0(){if(At===0)if((E&536870912)===0||O){var t=Ti;Ti<<=1,(Ti&3932160)===0&&(Ti=262144),At=t}else At=536870912;return t=Dt.current,t!==null&&(t.flags|=32),At}function St(t,e,a){(t===q&&(L===2||L===9)||t.cancelPendingCommit!==null)&&(il(t,0),Ue(t,E,At,!1)),si(t,a),((D&2)===0||t!==q)&&(t===q&&((D&2)===0&&(ua|=a),I===4&&Ue(t,E,At,!1)),ae(t))}function e0(t,e,a){if((D&6)!==0)throw Error(y(327));var l=!a&&(e&127)===0&&(e&t.expiredLanes)===0||oi(t,e),i=l?fh(t,e):Go(t,e,!0),n=l;do{if(i===0){ul&&!l&&Ue(t,e,0,!1);break}else{if(a=t.current.alternate,n&&!rh(a)){i=Go(t,e,!1),n=!1;continue}if(i===2){if(n=e,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var s=t;i=ql;var r=s.current.memoizedState.isDehydrated;if(r&&(il(s,o).flags|=256),o=Go(s,o,!1),o!==2){if(Cr&&!r){s.errorRecoveryDisabledLanes|=n,ua|=n,i=4;break t}n=wt,wt=i,n!==null&&(wt===null?wt=n:wt.push.apply(wt,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){il(t,0),Ue(t,e,0,!0);break}t:{switch(l=t,n=i,n){case 0:case 1:throw Error(y(345));case 4:if((e&4194048)!==e)break;case 6:Ue(l,e,At,!He);break t;case 2:wt=null;break;case 3:case 5:break;default:throw Error(y(329))}if((e&62914560)===e&&(i=Yn+300-_t(),10<i)){if(Ue(l,e,At,!He),On(l,0,!0)!==0)break t;be=e,l.timeoutHandle=w0(vf.bind(null,l,a,wt,xn,Cs,e,At,ua,al,He,n,"Throttled",-0,0),i);break t}vf(l,a,wt,xn,Cs,e,At,ua,al,He,n,null,-0,0)}}break}while(!0);ae(t)}function vf(t,e,a,l,i,n,o,s,r,u,b,h,d,g){if(t.timeoutHandle=-1,h=e.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:de},Jd(e,n,h);var v=(n&62914560)===n?Yn-_t():(n&4194048)===n?$d-_t():0;if(v=Zh(h,v),v!==null){be=n,t.cancelPendingCommit=v(wf.bind(null,t,e,n,a,l,i,o,s,r,b,h,null,d,g)),Ue(t,n,o,!u);return}}wf(t,e,n,a,l,i,o,s,r)}function rh(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],n=i.getSnapshot;i=i.value;try{if(!Rt(n(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ue(t,e,a,l){e&=~Ar,e&=~ua,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var i=e;0<i;){var n=31-Ot(i),o=1<<n;l[n]=-1,i&=~o}a!==0&&nu(t,a,e)}function Kn(){return(D&6)===0?(pi(0,!1),!1):!0}function _r(){if(A!==null){if(L===0)var t=A.return;else t=A,pe=wa=null,hr(t),Qa=null,Wl=0,t=A;for(;t!==null;)Dd(t.alternate,t),t=t.return;A=null}}function il(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Mh(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),be=0,_r(),q=t,A=a=he(t.current,null),E=e,L=0,zt=null,He=!1,ul=oi(t,e),Cr=!1,al=At=Ar=ua=$e=I=0,wt=ql=null,Cs=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var i=31-Ot(l),n=1<<i;e|=t[i],l&=~n}return we=e,Nn(),a}function a0(t,e){z=null,k.H=$l,e===fl||e===Hn?(e=Wc(),L=3):e===sr?(e=Wc(),L=4):L=e===kr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,zt=e,A===null&&(I=1,bn(t,Yt(e,t.current)))}function l0(){var t=Dt.current;return t===null?!0:(E&4194048)===E?Zt===null:(E&62914560)===E||(E&536870912)!==0?t===Zt:!1}function i0(){var t=k.H;return k.H=$l,t===null?$l:t}function n0(){var t=k.A;return k.A=oh,t}function wn(){I=4,He||(E&4194048)!==E&&Dt.current!==null||(ul=!0),($e&134217727)===0&&(ua&134217727)===0||q===null||Ue(q,E,At,!1)}function Go(t,e,a){var l=D;D|=2;var i=i0(),n=n0();(q!==t||E!==e)&&(xn=null,il(t,e)),e=!1;var o=I;t:do try{if(L!==0&&A!==null){var s=A,r=zt;switch(L){case 8:_r(),o=6;break t;case 3:case 2:case 9:case 6:Dt.current===null&&(e=!0);var u=L;if(L=0,zt=null,Ya(t,s,r,u),a&&ul){o=0;break t}break;default:u=L,L=0,zt=null,Ya(t,s,r,u)}}ch(),o=I;break}catch(b){a0(t,b)}while(!0);return e&&t.shellSuspendCounter++,pe=wa=null,D=l,k.H=i,k.A=n,A===null&&(q=null,E=0,Nn()),o}function ch(){for(;A!==null;)o0(A)}function fh(t,e){var a=D;D|=2;var l=i0(),i=n0();q!==t||E!==e?(xn=null,vn=_t()+500,il(t,e)):ul=oi(t,e);t:do try{if(L!==0&&A!==null){e=A;var n=zt;e:switch(L){case 1:L=0,zt=null,Ya(t,e,n,1);break;case 2:case 9:if(Fc(n)){L=0,zt=null,xf(e);break}e=function(){L!==2&&L!==9||q!==t||(L=7),ae(t)},n.then(e,e);break t;case 3:L=7;break t;case 4:L=5;break t;case 7:Fc(n)?(L=0,zt=null,xf(e)):(L=0,zt=null,Ya(t,e,n,7));break;case 5:var o=null;switch(A.tag){case 26:o=A.memoizedState;case 5:case 27:var s=A;if(o?M0(o):s.stateNode.complete){L=0,zt=null;var r=s.sibling;if(r!==null)A=r;else{var u=s.return;u!==null?(A=u,Zn(u)):A=null}break e}}L=0,zt=null,Ya(t,e,n,5);break;case 6:L=0,zt=null,Ya(t,e,n,6);break;case 8:_r(),I=6;break t;default:throw Error(y(462))}}uh();break}catch(b){a0(t,b)}while(!0);return pe=wa=null,k.H=l,k.A=i,D=a,A!==null?0:(q=null,E=0,Nn(),I)}function uh(){for(;A!==null&&!Dp();)o0(A)}function o0(t){var e=Rd(t.alternate,t,we);t.memoizedProps=t.pendingProps,e===null?Zn(t):A=e}function xf(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=pf(a,e,e.pendingProps,e.type,void 0,E);break;case 11:e=pf(a,e,e.pendingProps,e.type.render,e.ref,E);break;case 5:hr(e);default:Dd(a,e),e=A=Du(e,we),e=Rd(a,e,we)}t.memoizedProps=t.pendingProps,e===null?Zn(t):A=e}function Ya(t,e,a,l){pe=wa=null,hr(e),Qa=null,Wl=0;var i=e.return;try{if(P1(t,i,e,a,E)){I=1,bn(t,Yt(a,t.current)),A=null;return}}catch(n){if(i!==null)throw A=i,n;I=1,bn(t,Yt(a,t.current)),A=null;return}e.flags&32768?(O||l===1?t=!0:ul||(E&536870912)!==0?t=!1:(He=t=!0,(l===2||l===9||l===3||l===6)&&(l=Dt.current,l!==null&&l.tag===13&&(l.flags|=16384))),s0(e,t)):Zn(e)}function Zn(t){var e=t;do{if((e.flags&32768)!==0){s0(e,He);return}t=e.return;var a=ah(e.alternate,e,we);if(a!==null){A=a;return}if(e=e.sibling,e!==null){A=e;return}A=e=t}while(e!==null);I===0&&(I=5)}function s0(t,e){do{var a=lh(t.alternate,t);if(a!==null){a.flags&=32767,A=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){A=t;return}A=t=a}while(t!==null);I=6,A=null}function wf(t,e,a,l,i,n,o,s,r){t.cancelPendingCommit=null;do Vn();while(it!==0);if((D&6)!==0)throw Error(y(327));if(e!==null){if(e===t.current)throw Error(y(177));if(n=e.lanes|e.childLanes,n|=tr,Zp(t,a,n,o,s,r),t===q&&(A=q=null,E=0),ll=e,Ve=t,be=a,As=n,_s=i,Pd=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,gh(nn,function(){return d0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=k.T,k.T=null,i=N.p,N.p=2,o=D,D|=4;try{ih(t,e,a)}finally{D=o,N.p=i,k.T=l}}it=1,r0(),c0(),f0()}}function r0(){if(it===1){it=0;var t=Ve,e=ll,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=k.T,k.T=null;var l=N.p;N.p=2;var i=D;D|=4;try{Vd(e,t);var n=Ds,o=Mu(t.containerInfo),s=n.focusedElem,r=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&zu(s.ownerDocument.documentElement,s)){if(r!==null&&Ps(s)){var u=r.start,b=r.end;if(b===void 0&&(b=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(b,s.value.length);else{var h=s.ownerDocument||document,d=h&&h.defaultView||window;if(d.getSelection){var g=d.getSelection(),v=s.textContent.length,S=Math.min(r.start,v),U=r.end===void 0?S:Math.min(r.end,v);!g.extend&&S>U&&(o=U,U=S,S=o);var f=Yc(s,S),c=Yc(s,U);if(f&&c&&(g.rangeCount!==1||g.anchorNode!==f.node||g.anchorOffset!==f.offset||g.focusNode!==c.node||g.focusOffset!==c.offset)){var p=h.createRange();p.setStart(f.node,f.offset),g.removeAllRanges(),S>U?(g.addRange(p),g.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),g.addRange(p))}}}}for(h=[],g=s;g=g.parentNode;)g.nodeType===1&&h.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<h.length;s++){var m=h[s];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}_n=!!Rs,Ds=Rs=null}finally{D=i,N.p=l,k.T=a}}t.current=e,it=2}}function c0(){if(it===2){it=0;var t=Ve,e=ll,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=k.T,k.T=null;var l=N.p;N.p=2;var i=D;D|=4;try{Gd(t,e.alternate,e)}finally{D=i,N.p=l,k.T=a}}it=3}}function f0(){if(it===4||it===3){it=0,Np();var t=Ve,e=ll,a=be,l=Pd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?it=5:(it=0,ll=Ve=null,u0(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ze=null),Xs(a),e=e.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=k.T,i=N.p,N.p=2,k.T=null;try{for(var n=t.onRecoverableError,o=0;o<l.length;o++){var s=l[o];n(s.value,{componentStack:s.stack})}}finally{k.T=e,N.p=i}}(be&3)!==0&&Vn(),ae(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===Es?Yl++:(Yl=0,Es=t):Yl=0,pi(0,!1)}}function u0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,fi(e)))}function Vn(){return r0(),c0(),f0(),d0()}function d0(){if(it!==5)return!1;var t=Ve,e=As;As=0;var a=Xs(be),l=k.T,i=N.p;try{N.p=32>a?32:a,k.T=null,a=_s,_s=null;var n=Ve,o=be;if(it=0,ll=Ve=null,be=0,(D&6)!==0)throw Error(y(331));var s=D;if(D|=4,Wd(n.current),Qd(n,n.current,o,a),D=s,pi(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(ni,n)}catch{}return!0}finally{N.p=i,k.T=l,u0(t,e)}}function Sf(t,e,a){e=Yt(a,e),e=ks(t.stateNode,e,2),t=Ke(t,e,2),t!==null&&(si(t,2),ae(t))}function H(t,e,a){if(t.tag===3)Sf(t,t,a);else for(;e!==null;){if(e.tag===3){Sf(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ze===null||!Ze.has(l))){t=Yt(a,t),a=Cd(2),l=Ke(e,a,2),l!==null&&(Ad(a,l,e,t),si(l,2),ae(l));break}}e=e.return}}function qo(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new sh;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(a)||(Cr=!0,i.add(a),t=dh.bind(null,t,e,a),e.then(t,t))}function dh(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,q===t&&(E&a)===a&&(I===4||I===3&&(E&62914560)===E&&300>_t()-Yn?(D&2)===0&&il(t,0):Ar|=a,al===E&&(al=0)),ae(t)}function p0(t,e){e===0&&(e=iu()),t=xa(t,e),t!==null&&(si(t,e),ae(t))}function ph(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),p0(t,a)}function hh(t,e){var a=0;switch(t.tag){case 31:case 13:var l=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(y(314))}l!==null&&l.delete(e),p0(t,a)}function gh(t,e){return Zs(t,e)}var Sn=null,Ea=null,Os=!1,kn=!1,Yo=!1,je=0;function ae(t){t!==Ea&&t.next===null&&(Ea===null?Sn=Ea=t:Ea=Ea.next=t),kn=!0,Os||(Os=!0,mh())}function pi(t,e){if(!Yo&&kn){Yo=!0;do for(var a=!1,l=Sn;l!==null;){if(!e)if(t!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var o=l.suspendedLanes,s=l.pingedLanes;n=(1<<31-Ot(42|t)+1)-1,n&=i&~(o&~s),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,kf(l,n))}else n=E,n=On(l,l===q?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||oi(l,n)||(a=!0,kf(l,n));l=l.next}while(a);Yo=!1}}function bh(){h0()}function h0(){kn=Os=!1;var t=0;je!==0&&zh()&&(t=je);for(var e=_t(),a=null,l=Sn;l!==null;){var i=l.next,n=g0(l,e);n===0?(l.next=null,a===null?Sn=i:a.next=i,i===null&&(Ea=a)):(a=l,(t!==0||(n&3)!==0)&&(kn=!0)),l=i}it!==0&&it!==5||pi(t,!1),je!==0&&(je=0)}function g0(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-Ot(n),s=1<<o,r=i[o];r===-1?((s&a)===0||(s&l)!==0)&&(i[o]=Kp(s,e)):r<=e&&(t.expiredLanes|=s),n&=~s}if(e=q,a=E,a=On(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(L===2||L===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&mo(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||oi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&mo(l),Xs(a)){case 2:case 8:a=au;break;case 32:a=nn;break;case 268435456:a=lu;break;default:a=nn}return l=b0.bind(null,t),a=Zs(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&mo(l),t.callbackPriority=2,t.callbackNode=null,2}function b0(t,e){if(it!==0&&it!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vn()&&t.callbackNode!==a)return null;var l=E;return l=On(t,t===q?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(e0(t,l,e),g0(t,_t()),t.callbackNode!=null&&t.callbackNode===a?b0.bind(null,t):null)}function kf(t,e){if(Vn())return null;e0(t,e,!0)}function mh(){Ch(function(){(D&6)!==0?Zs(eu,bh):h0()})}function Er(){if(je===0){var t=Pa;t===0&&(t=ki,ki<<=1,(ki&261888)===0&&(ki=256)),je=t}return je}function Tf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:qi(""+t)}function zf(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function yh(t,e,a,l,i){if(e==="submit"&&a&&a.stateNode===i){var n=Tf((i[kt]||null).action),o=l.submitter;o&&(e=(e=o[kt]||null)?Tf(e.formAction):o.getAttribute("formAction"),e!==null&&(n=e,o=null));var s=new Bn("action","action",null,l,i);t.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(je!==0){var r=o?zf(i,o):new FormData(i);ws(a,{pending:!0,data:r,method:i.method,action:n},null,r)}}else typeof n=="function"&&(s.preventDefault(),r=o?zf(i,o):new FormData(i),ws(a,{pending:!0,data:r,method:i.method,action:n},n,r))},currentTarget:i}]})}}for(Ni=0;Ni<cs.length;Ni++)Li=cs[Ni],Mf=Li.toLowerCase(),Cf=Li[0].toUpperCase()+Li.slice(1),Ft(Mf,"on"+Cf);var Li,Mf,Cf,Ni;Ft(Au,"onAnimationEnd");Ft(_u,"onAnimationIteration");Ft(Eu,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(L1,"onTransitionRun");Ft(H1,"onTransitionStart");Ft(U1,"onTransitionCancel");Ft(Ou,"onTransitionEnd");Ia("onMouseEnter",["mouseout","mouseover"]);Ia("onMouseLeave",["mouseout","mouseover"]);Ia("onPointerEnter",["pointerout","pointerover"]);Ia("onPointerLeave",["pointerout","pointerover"]);ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ma("onBeforeInput",["compositionend","keypress","textInput","paste"]);ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pl));function m0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],i=l.event;l=l.listeners;t:{var n=void 0;if(e)for(var o=l.length-1;0<=o;o--){var s=l[o],r=s.instance,u=s.currentTarget;if(s=s.listener,r!==n&&i.isPropagationStopped())break t;n=s,i.currentTarget=u;try{n(i)}catch(b){sn(b)}i.currentTarget=null,n=r}else for(o=0;o<l.length;o++){if(s=l[o],r=s.instance,u=s.currentTarget,s=s.listener,r!==n&&i.isPropagationStopped())break t;n=s,i.currentTarget=u;try{n(i)}catch(b){sn(b)}i.currentTarget=null,n=r}}}}function C(t,e){var a=e[es];a===void 0&&(a=e[es]=new Set);var l=t+"__bubble";a.has(l)||(y0(e,t,2,!1),a.add(l))}function Ko(t,e,a){var l=0;e&&(l|=4),y0(a,t,l,e)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function Or(t){if(!t[Hi]){t[Hi]=!0,cu.forEach(function(a){a!=="selectionchange"&&(vh.has(a)||Ko(a,!1,t),Ko(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hi]||(e[Hi]=!0,Ko("selectionchange",!1,e))}}function y0(t,e,a,l){switch(O0(e)){case 2:var i=Qh;break;case 8:i=Jh;break;default:i=Nr}a=i.bind(null,e,a,t),i=void 0,!os||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Zo(t,e,a,l,i){var n=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var s=l.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=l.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Ra(s),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){l=n=o;continue t}s=s.parentNode}}l=l.return}mu(function(){var u=n,b=Fs(a),h=[];t:{var d=Bu.get(t);if(d!==void 0){var g=Bn,v=t;switch(t){case"keypress":if(Ki(a)===0)break t;case"keydown":case"keyup":g=h1;break;case"focusin":v="focus",g=So;break;case"focusout":v="blur",g=So;break;case"beforeblur":case"afterblur":g=So;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=m1;break;case Au:case _u:case Eu:g=n1;break;case Ou:g=v1;break;case"scroll":case"scrollend":g=t1;break;case"wheel":g=w1;break;case"copy":case"cut":case"paste":g=s1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Nc;break;case"toggle":case"beforetoggle":g=k1}var S=(e&4)!==0,U=!S&&(t==="scroll"||t==="scrollend"),f=S?d!==null?d+"Capture":null:d;S=[];for(var c=u,p;c!==null;){var m=c;if(p=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||p===null||f===null||(m=Vl(c,f),m!=null&&S.push(ti(c,m,p))),U)break;c=c.return}0<S.length&&(d=new g(d,v,null,a,b),h.push({event:d,listeners:S}))}}if((e&7)===0){t:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&a!==ns&&(v=a.relatedTarget||a.fromElement)&&(Ra(v)||v[sl]))break t;if((g||d)&&(d=b.window===b?b:(d=b.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=a.relatedTarget||a.toElement,g=u,v=v?Ra(v):null,v!==null&&(U=ii(v),S=v.tag,v!==U||S!==5&&S!==27&&S!==6)&&(v=null)):(g=null,v=u),g!==v)){if(S=Rc,m="onMouseLeave",f="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(S=Nc,m="onPointerLeave",f="onPointerEnter",c="pointer"),U=g==null?d:Al(g),p=v==null?d:Al(v),d=new S(m,c+"leave",g,a,b),d.target=U,d.relatedTarget=p,m=null,Ra(b)===u&&(S=new S(f,c+"enter",v,a,b),S.target=p,S.relatedTarget=U,m=S),U=m,g&&v)e:{for(S=xh,f=g,c=v,p=0,m=f;m;m=S(m))p++;m=0;for(var w=c;w;w=S(w))m++;for(;0<p-m;)f=S(f),p--;for(;0<m-p;)c=S(c),m--;for(;p--;){if(f===c||c!==null&&f===c.alternate){S=f;break e}f=S(f),c=S(c)}S=null}else S=null;g!==null&&Af(h,d,g,S,!1),v!==null&&U!==null&&Af(h,U,v,S,!0)}}t:{if(d=u?Al(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var B=jc;else if(Uc(d))if(ku)B=R1;else{B=O1;var x=E1}else g=d.nodeName,!g||g.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?u&&Js(u.elementType)&&(B=jc):B=B1;if(B&&(B=B(t,u))){Su(h,B,a,b);break t}x&&x(t,d,u),t==="focusout"&&u&&d.type==="number"&&u.memoizedProps.value!=null&&is(d,"number",d.value)}switch(x=u?Al(u):window,t){case"focusin":(Uc(x)||x.contentEditable==="true")&&(La=x,ss=u,Rl=null);break;case"focusout":Rl=ss=La=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,Kc(h,a,b);break;case"selectionchange":if(N1)break;case"keydown":case"keyup":Kc(h,a,b)}var M;if($s)t:{switch(t){case"compositionstart":var _="onCompositionStart";break t;case"compositionend":_="onCompositionEnd";break t;case"compositionupdate":_="onCompositionUpdate";break t}_=void 0}else Na?xu(t,a)&&(_="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_="onCompositionStart");_&&(vu&&a.locale!=="ko"&&(Na||_!=="onCompositionStart"?_==="onCompositionEnd"&&Na&&(M=yu()):(Le=b,Ws="value"in Le?Le.value:Le.textContent,Na=!0)),x=Tn(u,_),0<x.length&&(_=new Dc(_,t,null,a,b),h.push({event:_,listeners:x}),M?_.data=M:(M=wu(a),M!==null&&(_.data=M)))),(M=z1?M1(t,a):C1(t,a))&&(_=Tn(u,"onBeforeInput"),0<_.length&&(x=new Dc("onBeforeInput","beforeinput",null,a,b),h.push({event:x,listeners:_}),x.data=M)),yh(h,t,u,a,b)}m0(h,e)})}function ti(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Tn(t,e){for(var a=e+"Capture",l=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Vl(t,a),i!=null&&l.unshift(ti(t,i,n)),i=Vl(t,e),i!=null&&l.push(ti(t,i,n))),t.tag===3)return l;t=t.return}return[]}function xh(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Af(t,e,a,l,i){for(var n=e._reactName,o=[];a!==null&&a!==l;){var s=a,r=s.alternate,u=s.stateNode;if(s=s.tag,r!==null&&r===l)break;s!==5&&s!==26&&s!==27||u===null||(r=u,i?(u=Vl(a,n),u!=null&&o.unshift(ti(a,u,r))):i||(u=Vl(a,n),u!=null&&o.push(ti(a,u,r)))),a=a.return}o.length!==0&&t.push({event:e,listeners:o})}var wh=/\r\n?/g,Sh=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(wh,`
`).replace(Sh,"")}function v0(t,e){return e=_f(e),_f(t)===e}function j(t,e,a,l,i,n){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||$a(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&$a(t,""+l);break;case"className":Mi(t,"class",l);break;case"tabIndex":Mi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Mi(t,a,l);break;case"style":bu(t,l,n);break;case"data":if(e!=="object"){Mi(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=qi(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(e!=="input"&&j(t,e,"name",i.name,i,null),j(t,e,"formEncType",i.formEncType,i,null),j(t,e,"formMethod",i.formMethod,i,null),j(t,e,"formTarget",i.formTarget,i,null)):(j(t,e,"encType",i.encType,i,null),j(t,e,"method",i.method,i,null),j(t,e,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=qi(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=de);break;case"onScroll":l!=null&&C("scroll",t);break;case"onScrollEnd":l!=null&&C("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=qi(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":C("beforetoggle",t),C("toggle",t),Gi(t,"popover",l);break;case"xlinkActuate":ie(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ie(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ie(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ie(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ie(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ie(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ie(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ie(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ie(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Gi(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$p.get(a)||a,Gi(t,a,l))}}function Bs(t,e,a,l,i,n){switch(a){case"style":bu(t,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(y(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=a}}break;case"children":typeof l=="string"?$a(t,l):(typeof l=="number"||typeof l=="bigint")&&$a(t,""+l);break;case"onScroll":l!=null&&C("scroll",t);break;case"onScrollEnd":l!=null&&C("scrollend",t);break;case"onClick":l!=null&&(t.onclick=de);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fu.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),n=t[kt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(e,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,i);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Gi(t,a,l)}}}function pt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":C("error",t),C("load",t);var l=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var o=a[n];if(o!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:j(t,e,n,o,a,null)}}i&&j(t,e,"srcSet",a.srcSet,a,null),l&&j(t,e,"src",a.src,a,null);return;case"input":C("invalid",t);var s=n=o=i=null,r=null,u=null;for(l in a)if(a.hasOwnProperty(l)){var b=a[l];if(b!=null)switch(l){case"name":i=b;break;case"type":o=b;break;case"checked":r=b;break;case"defaultChecked":u=b;break;case"value":n=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(y(137,e));break;default:j(t,e,l,b,a,null)}}pu(t,n,s,r,u,o,i,!1);return;case"select":C("invalid",t),l=o=n=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":n=s;break;case"defaultValue":o=s;break;case"multiple":l=s;default:j(t,e,i,s,a,null)}e=n,a=o,t.multiple=!!l,e!=null?Za(t,!!l,e,!1):a!=null&&Za(t,!!l,a,!0);return;case"textarea":C("invalid",t),n=i=l=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":l=s;break;case"defaultValue":i=s;break;case"children":n=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(y(91));break;default:j(t,e,o,s,a,null)}gu(t,l,i,n);return;case"option":for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null)&&(r==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":j(t,e,r,l,a,null));return;case"dialog":C("beforetoggle",t),C("toggle",t),C("cancel",t),C("close",t);break;case"iframe":case"object":C("load",t);break;case"video":case"audio":for(l=0;l<Pl.length;l++)C(Pl[l],t);break;case"image":C("error",t),C("load",t);break;case"details":C("toggle",t);break;case"embed":case"source":case"link":C("error",t),C("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(l=a[u],l!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,e));default:j(t,e,u,l,a,null)}return;default:if(Js(e)){for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!==void 0&&Bs(t,e,b,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&j(t,e,s,l,a,null))}function kh(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,s=null,r=null,u=null,b=null;for(g in a){var h=a[g];if(a.hasOwnProperty(g)&&h!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":r=h;default:l.hasOwnProperty(g)||j(t,e,g,null,l,h)}}for(var d in l){var g=l[d];if(h=a[d],l.hasOwnProperty(d)&&(g!=null||h!=null))switch(d){case"type":n=g;break;case"name":i=g;break;case"checked":u=g;break;case"defaultChecked":b=g;break;case"value":o=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(y(137,e));break;default:g!==h&&j(t,e,d,g,l,h)}}ls(t,o,s,r,u,b,n,i);return;case"select":g=o=s=d=null;for(n in a)if(r=a[n],a.hasOwnProperty(n)&&r!=null)switch(n){case"value":break;case"multiple":g=r;default:l.hasOwnProperty(n)||j(t,e,n,null,l,r)}for(i in l)if(n=l[i],r=a[i],l.hasOwnProperty(i)&&(n!=null||r!=null))switch(i){case"value":d=n;break;case"defaultValue":s=n;break;case"multiple":o=n;default:n!==r&&j(t,e,i,n,l,r)}e=s,a=o,l=g,d!=null?Za(t,!!a,d,!1):!!l!=!!a&&(e!=null?Za(t,!!a,e,!0):Za(t,!!a,a?[]:"",!1));return;case"textarea":g=d=null;for(s in a)if(i=a[s],a.hasOwnProperty(s)&&i!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:j(t,e,s,null,l,i)}for(o in l)if(i=l[o],n=a[o],l.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":d=i;break;case"defaultValue":g=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(y(91));break;default:i!==n&&j(t,e,o,i,l,n)}hu(t,d,g);return;case"option":for(var v in a)d=a[v],a.hasOwnProperty(v)&&d!=null&&!l.hasOwnProperty(v)&&(v==="selected"?t.selected=!1:j(t,e,v,null,l,d));for(r in l)d=l[r],g=a[r],l.hasOwnProperty(r)&&d!==g&&(d!=null||g!=null)&&(r==="selected"?t.selected=d&&typeof d!="function"&&typeof d!="symbol":j(t,e,r,d,l,g));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in a)d=a[S],a.hasOwnProperty(S)&&d!=null&&!l.hasOwnProperty(S)&&j(t,e,S,null,l,d);for(u in l)if(d=l[u],g=a[u],l.hasOwnProperty(u)&&d!==g&&(d!=null||g!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(y(137,e));break;default:j(t,e,u,d,l,g)}return;default:if(Js(e)){for(var U in a)d=a[U],a.hasOwnProperty(U)&&d!==void 0&&!l.hasOwnProperty(U)&&Bs(t,e,U,void 0,l,d);for(b in l)d=l[b],g=a[b],!l.hasOwnProperty(b)||d===g||d===void 0&&g===void 0||Bs(t,e,b,d,l,g);return}}for(var f in a)d=a[f],a.hasOwnProperty(f)&&d!=null&&!l.hasOwnProperty(f)&&j(t,e,f,null,l,d);for(h in l)d=l[h],g=a[h],!l.hasOwnProperty(h)||d===g||d==null&&g==null||j(t,e,h,d,l,g)}function Ef(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Th(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],n=i.transferSize,o=i.initiatorType,s=i.duration;if(n&&s&&Ef(o)){for(o=0,s=i.responseEnd,l+=1;l<a.length;l++){var r=a[l],u=r.startTime;if(u>s)break;var b=r.transferSize,h=r.initiatorType;b&&Ef(h)&&(r=r.responseEnd,o+=b*(r<s?1:(s-u)/(r-u)))}if(--l,e+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rs=null,Ds=null;function zn(t){return t.nodeType===9?t:t.ownerDocument}function Of(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ns(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vo=null;function zh(){var t=window.event;return t&&t.type==="popstate"?t===Vo?!1:(Vo=t,!0):(Vo=null,!1)}var w0=typeof setTimeout=="function"?setTimeout:void 0,Mh=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,Ch=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf!="undefined"?function(t){return Bf.resolve(null).then(t).catch(Ah)}:w0;function Ah(t){setTimeout(function(){throw t})}function ta(t){return t==="head"}function Rf(t,e){var a=e,l=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){t.removeChild(i),ol(e);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Kl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Kl(a);for(var n=a.firstChild;n;){var o=n.nextSibling,s=n.nodeName;n[ri]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=o}}else a==="body"&&Kl(t.ownerDocument.body);a=i}while(a);ol(e)}function Df(t,e){var a=t;t=0;do{var l=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=l}while(a)}function Ls(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ls(a),Qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _h(t,e,a,l){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ri])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Vt(t.nextSibling),t===null)break}return null}function Eh(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Vt(t.nextSibling),t===null))return null;return t}function S0(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Vt(t.nextSibling),t===null))return null;return t}function Hs(t){return t.data==="$?"||t.data==="$~"}function Us(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Oh(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Vt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var js=null;function Nf(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Vt(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Lf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function k0(t,e,a){switch(e=zn(a),t){case"html":if(t=e.documentElement,!t)throw Error(y(452));return t;case"head":if(t=e.head,!t)throw Error(y(453));return t;case"body":if(t=e.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function Kl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Qs(t)}var Xt=new Map,Hf=new Set;function Mn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Se=N.d;N.d={f:Bh,r:Rh,D:Dh,C:Nh,L:Lh,m:Hh,X:jh,S:Uh,M:Gh};function Bh(){var t=Se.f(),e=Kn();return t||e}function Rh(t){var e=rl(t);e!==null&&e.tag===5&&e.type==="form"?bd(e):Se.r(t)}var dl=typeof document=="undefined"?null:document;function T0(t,e,a){var l=dl;if(l&&typeof e=="string"&&e){var i=qt(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Hf.has(i)||(Hf.add(i),t={rel:t,crossOrigin:a,href:e},l.querySelector(i)===null&&(e=l.createElement("link"),pt(e,"link",t),st(e),l.head.appendChild(e)))}}function Dh(t){Se.D(t),T0("dns-prefetch",t,null)}function Nh(t,e){Se.C(t,e),T0("preconnect",t,e)}function Lh(t,e,a){Se.L(t,e,a);var l=dl;if(l&&t&&e){var i='link[rel="preload"][as="'+qt(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+qt(a.imageSizes)+'"]')):i+='[href="'+qt(t)+'"]';var n=i;switch(e){case"style":n=nl(t);break;case"script":n=pl(t)}Xt.has(n)||(t=X({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Xt.set(n,t),l.querySelector(i)!==null||e==="style"&&l.querySelector(hi(n))||e==="script"&&l.querySelector(gi(n))||(e=l.createElement("link"),pt(e,"link",t),st(e),l.head.appendChild(e)))}}function Hh(t,e){Se.m(t,e);var a=dl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+qt(l)+'"][href="'+qt(t)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=pl(t)}if(!Xt.has(n)&&(t=X({rel:"modulepreload",href:t},e),Xt.set(n,t),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gi(n)))return}l=a.createElement("link"),pt(l,"link",t),st(l),a.head.appendChild(l)}}}function Uh(t,e,a){Se.S(t,e,a);var l=dl;if(l&&t){var i=Ka(l).hoistableStyles,n=nl(t);e=e||"default";var o=i.get(n);if(!o){var s={loading:0,preload:null};if(o=l.querySelector(hi(n)))s.loading=5;else{t=X({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Xt.get(n))&&Br(t,a);var r=o=l.createElement("link");st(r),pt(r,"link",t),r._p=new Promise(function(u,b){r.onload=u,r.onerror=b}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ii(o,e,l)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(n,o)}}}function jh(t,e){Se.X(t,e);var a=dl;if(a&&t){var l=Ka(a).hoistableScripts,i=pl(t),n=l.get(i);n||(n=a.querySelector(gi(i)),n||(t=X({src:t,async:!0},e),(e=Xt.get(i))&&Rr(t,e),n=a.createElement("script"),st(n),pt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Gh(t,e){Se.M(t,e);var a=dl;if(a&&t){var l=Ka(a).hoistableScripts,i=pl(t),n=l.get(i);n||(n=a.querySelector(gi(i)),n||(t=X({src:t,async:!0,type:"module"},e),(e=Xt.get(i))&&Rr(t,e),n=a.createElement("script"),st(n),pt(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Uf(t,e,a,l){var i=(i=Ge.current)?Mn(i):null;if(!i)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=nl(a.href),a=Ka(i).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=nl(a.href);var n=Ka(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(hi(t)))&&!n._p&&(o.instance=n,o.state.loading=5),Xt.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(t,a),n||qh(i,t,a,o.state))),e&&l===null)throw Error(y(528,""));return o}if(e&&l!==null)throw Error(y(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=pl(a),a=Ka(i).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function nl(t){return'href="'+qt(t)+'"'}function hi(t){return'link[rel="stylesheet"]['+t+"]"}function z0(t){return X({},t,{"data-precedence":t.precedence,precedence:null})}function qh(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),pt(e,"link",a),st(e),t.head.appendChild(e))}function pl(t){return'[src="'+qt(t)+'"]'}function gi(t){return"script[async]"+t}function jf(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+qt(a.href)+'"]');if(l)return e.instance=l,st(l),l;var i=X({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),st(l),pt(l,"style",i),Ii(l,a.precedence,t),e.instance=l;case"stylesheet":i=nl(a.href);var n=t.querySelector(hi(i));if(n)return e.state.loading|=4,e.instance=n,st(n),n;l=z0(a),(i=Xt.get(i))&&Br(l,i),n=(t.ownerDocument||t).createElement("link"),st(n);var o=n;return o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(n,"link",l),e.state.loading|=4,Ii(n,a.precedence,t),e.instance=n;case"script":return n=pl(a.src),(i=t.querySelector(gi(n)))?(e.instance=i,st(i),i):(l=a,(i=Xt.get(n))&&(l=X({},a),Rr(l,i)),t=t.ownerDocument||t,i=t.createElement("script"),st(i),pt(i,"link",l),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(y(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Ii(l,a.precedence,t));return e.instance}function Ii(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,o=0;o<l.length;o++){var s=l[o];if(s.dataset.precedence===e)n=s;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Br(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Rr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var $i=null;function Gf(t,e,a){if($i===null){var l=new Map,i=$i=new Map;i.set(a,l)}else i=$i,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var n=a[i];if(!(n[ri]||n[ft]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(e)||"";o=t+o;var s=l.get(o);s?s.push(n):l.set(o,[n])}}return l}function qf(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Yh(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function M0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Kh(t,e,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=nl(l.href),n=e.querySelector(hi(i));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Cn.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=n,st(n);return}n=e.ownerDocument||e,l=z0(l),(i=Xt.get(i))&&Br(l,i),n=n.createElement("link"),st(n);var o=n;o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),pt(n,"link",l),a.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Cn.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Xo=0;function Zh(t,e){return t.stylesheets&&t.count===0&&Pi(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var l=setTimeout(function(){if(t.stylesheets&&Pi(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+e);0<t.imgBytes&&Xo===0&&(Xo=62500*Th());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pi(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Xo?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Cn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var An=null;function Pi(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,An=new Map,e.forEach(Vh,t),An=null,Cn.call(t))}function Vh(t,e){if(!(e.state.loading&4)){var a=An.get(t);if(a)var l=a.get(null);else{a=new Map,An.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}i=e.instance,o=i.getAttribute("data-precedence"),n=a.get(o)||l,n===l&&a.set(null,i),a.set(o,i),this.count++,l=Cn.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var ei={$$typeof:ue,Provider:null,Consumer:null,_currentValue:sa,_currentValue2:sa,_threadCount:0};function Xh(t,e,a,l,i,n,o,s,r){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yo(0),this.hiddenUpdates=yo(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function C0(t,e,a,l,i,n,o,s,r,u,b,h){return t=new Xh(t,e,a,o,r,u,b,h,s),e=1,n===!0&&(e|=24),n=Ct(3,null,null,e),t.current=n,n.stateNode=t,e=nr(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:e},rr(n),t}function A0(t){return t?(t=ja,t):ja}function _0(t,e,a,l,i,n){i=A0(i),l.context===null?l.context=i:l.pendingContext=i,l=Ye(e),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=Ke(t,l,e),a!==null&&(St(a,t,e),Nl(a,t,e))}function Yf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Dr(t,e){Yf(t,e),(t=t.alternate)&&Yf(t,e)}function E0(t){if(t.tag===13||t.tag===31){var e=xa(t,67108864);e!==null&&St(e,t,67108864),Dr(t,67108864)}}function Kf(t){if(t.tag===13||t.tag===31){var e=Bt();e=Vs(e);var a=xa(t,e);a!==null&&St(a,t,e),Dr(t,e)}}var _n=!0;function Qh(t,e,a,l){var i=k.T;k.T=null;var n=N.p;try{N.p=2,Nr(t,e,a,l)}finally{N.p=n,k.T=i}}function Jh(t,e,a,l){var i=k.T;k.T=null;var n=N.p;try{N.p=8,Nr(t,e,a,l)}finally{N.p=n,k.T=i}}function Nr(t,e,a,l){if(_n){var i=Gs(l);if(i===null)Zo(t,e,l,En,a),Zf(t,l);else if(Wh(i,t,e,a,l))l.stopPropagation();else if(Zf(t,l),e&4&&-1<Fh.indexOf(t)){for(;i!==null;){var n=rl(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=ia(n.pendingLanes);if(o!==0){var s=n;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var r=1<<31-Ot(o);s.entanglements[1]|=r,o&=~r}ae(n),(D&6)===0&&(vn=_t()+500,pi(0,!1))}}break;case 31:case 13:s=xa(n,2),s!==null&&St(s,n,2),Kn(),Dr(n,2)}if(n=Gs(l),n===null&&Zo(t,e,l,En,a),n===i)break;i=n}i!==null&&l.stopPropagation()}else Zo(t,e,l,null,a)}}function Gs(t){return t=Fs(t),Lr(t)}var En=null;function Lr(t){if(En=null,t=Ra(t),t!==null){var e=ii(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=Wf(e),t!==null)return t;t=null}else if(a===31){if(t=If(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return En=t,null}function O0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lp()){case eu:return 2;case au:return 8;case nn:case Hp:return 32;case lu:return 268435456;default:return 32}default:return 32}}var qs=!1,Xe=null,Qe=null,Je=null,ai=new Map,li=new Map,De=[],Fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Zf(t,e){switch(t){case"focusin":case"focusout":Xe=null;break;case"dragenter":case"dragleave":Qe=null;break;case"mouseover":case"mouseout":Je=null;break;case"pointerover":case"pointerout":ai.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(e.pointerId)}}function Tl(t,e,a,l,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},e!==null&&(e=rl(e),e!==null&&E0(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Wh(t,e,a,l,i){switch(e){case"focusin":return Xe=Tl(Xe,t,e,a,l,i),!0;case"dragenter":return Qe=Tl(Qe,t,e,a,l,i),!0;case"mouseover":return Je=Tl(Je,t,e,a,l,i),!0;case"pointerover":var n=i.pointerId;return ai.set(n,Tl(ai.get(n)||null,t,e,a,l,i)),!0;case"gotpointercapture":return n=i.pointerId,li.set(n,Tl(li.get(n)||null,t,e,a,l,i)),!0}return!1}function B0(t){var e=Ra(t.target);if(e!==null){var a=ii(e);if(a!==null){if(e=a.tag,e===13){if(e=Wf(a),e!==null){t.blockedOn=e,Mc(t.priority,function(){Kf(a)});return}}else if(e===31){if(e=If(a),e!==null){t.blockedOn=e,Mc(t.priority,function(){Kf(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tn(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Gs(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ns=l,a.target.dispatchEvent(l),ns=null}else return e=rl(a),e!==null&&E0(e),t.blockedOn=a,!1;e.shift()}return!0}function Vf(t,e,a){tn(t)&&a.delete(e)}function Ih(){qs=!1,Xe!==null&&tn(Xe)&&(Xe=null),Qe!==null&&tn(Qe)&&(Qe=null),Je!==null&&tn(Je)&&(Je=null),ai.forEach(Vf),li.forEach(Vf)}function Ui(t,e){t.blockedOn===e&&(t.blockedOn=null,qs||(qs=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Ih)))}var ji=null;function Xf(t){ji!==t&&(ji=t,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,function(){ji===t&&(ji=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],i=t[e+2];if(typeof l!="function"){if(Lr(l||a)===null)continue;break}var n=rl(a);n!==null&&(t.splice(e,3),e-=3,ws(n,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function ol(t){function e(r){return Ui(r,t)}Xe!==null&&Ui(Xe,t),Qe!==null&&Ui(Qe,t),Je!==null&&Ui(Je,t),ai.forEach(e),li.forEach(e);for(var a=0;a<De.length;a++){var l=De[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<De.length&&(a=De[0],a.blockedOn===null);)B0(a),a.blockedOn===null&&De.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],n=a[l+1],o=i[kt]||null;if(typeof n=="function")o||Xf(a);else if(o){var s=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[kt]||null)s=o.formAction;else if(Lr(i)!==null)continue}else s=o.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Xf(a)}}}function R0(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Hr(t){this._internalRoot=t}Xn.prototype.render=Hr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(y(409));var a=e.current,l=Bt();_0(a,l,t,e,null,null)};Xn.prototype.unmount=Hr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_0(t.current,2,null,t,null,null),Kn(),e[sl]=null}};function Xn(t){this._internalRoot=t}Xn.prototype.unstable_scheduleHydration=function(t){if(t){var e=ru();t={blockedOn:null,target:t,priority:e};for(var a=0;a<De.length&&e!==0&&e<De[a].priority;a++);De.splice(a,0,t),a===0&&B0(t)}};var Qf=Jf.version;if(Qf!=="19.2.8")throw Error(y(527,Qf,"19.2.8"));N.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=_p(e),t=t!==null?$f(t):null,t=t===null?null:t.stateNode,t};var $h={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(zl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!zl.isDisabled&&zl.supportsFiber))try{ni=zl.inject($h),Et=zl}catch{}var zl;Qn.createRoot=function(t,e){if(!Ff(t))throw Error(y(299));var a=!1,l="",i=Td,n=zd,o=Md;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=C0(t,1,!1,null,null,a,l,null,i,n,o,R0),t[sl]=e.current,Or(t),new Hr(e)};Qn.hydrateRoot=function(t,e,a){if(!Ff(t))throw Error(y(299));var l=!1,i="",n=Td,o=zd,s=Md,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),e=C0(t,1,!0,e,a!=null?a:null,l,i,r,n,o,s,R0),e.context=A0(null),a=e.current,l=Bt(),l=Vs(l),i=Ye(l),i.callback=null,Ke(a,i,l),a=l,e.current.lanes=a,si(e,a),ae(e),t[sl]=e.current,Or(t),new Xn(e)};Qn.version="19.2.8"});var H0=Me((zg,L0)=>{"use strict";function N0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N0)}catch(t){console.error(t)}}N0(),L0.exports=D0()});var Nt=Xr(mi()),I0=Xr(H0());var U0=`<!doctype html>
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
<button type="button" onClick="{{topUp}}" aria-label="\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0434\u0435\u043C\u043E-\u0431\u0430\u043B\u0430\u043D\u0441 \u043D\u0430 100 TON" style="width: 40px; height: 40px; border-radius: 50%; border: 0; background: #2a7fff; color: #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer">
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
    var self = this;
    return {
      topUp: function () { if (window.RK) { window.RK.wallet.set(window.RK.wallet.get() + 100); } self.forceUpdate(); },
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
`;var j0=`<!doctype html>
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
@keyframes rkWarp{0%{transform:translateY(-260px)}100%{transform:translateY(520px)}}
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

<div style="position: relative; height: 400px; border-radius: 26px; overflow: hidden; background: #070b1c; border: 1px solid #1d2230">
<img src="/_blob/29f965541d768edadf1aad890a105f4f" alt="" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover">
<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: radial-gradient(circle at 70% 30%, rgba(170,20,45,0.55), rgba(60,5,20,0.75)); opacity: {{tintOpacity}}; transition: opacity 0.35s"></div>

<div aria-hidden="true" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; opacity: {{speedOp}}; transition: opacity 0.6s">
<sc-for list="{{warp}}" as="w" hint-placeholder-count="0">
<span style="position: absolute; top: 0; left: {{w.x}}px; width: {{w.wd}}px; height: {{w.h}}px; border-radius: 2px; background: linear-gradient(to bottom, rgba(255,255,255,0), {{w.c}}); animation: rkWarp {{w.d}}ms linear infinite; animation-delay: -{{w.delay}}ms"></span>
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
<div style="position: absolute; width: 110px; height: 121px; {{rocketBox}}"><img src="/_blob/a8d1e2a1f1626c9b8edd4755d9c32150" alt="\u0415\u043D\u043E\u0442 \u043D\u0430 \u0440\u0430\u043A\u0435\u0442\u0435" style="width: 110px; height: 121px; display: block; {{rocketAnim}}"></div>
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
var RTP = 0.80, WAIT = 5000, AFTER = 3000, GROWTH = 0.16;
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
var BOT_GIFTS = ['cake', 'globe', 'record', 'rose', 'bear', 'lpotion', 'bells'];
var NAMES = ['Bandit_77', 'TonWhale', '\u0415\u043D\u043E\u0442\u044B\u0447', 'lucky_ray', 'Gift Hunter', 'night_owl', '\u041C\u0443\u0440\u0437\u0438\u043A', 'Sasha_K', 'raccoon.eth', 'Vova', 'Polina', 'moonboy', '\u0416\u043E\u0440\u0430', 'kisa_mur'];
var AV = ['#e5383b', '#2a7fff', '#2bd46b', '#9b5cff', '#ff8a5c', '#00a8a8', '#c77dff', '#e0a800'];

function r2(x) { return Math.round(x * 100) / 100; }
function rkTrack(o) { try { if (window.RK && window.RK.track) window.RK.track(o); } catch (e) {} }
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
    out.push({ x: Math.round(Math.random() * 356), wd: Math.random() < 0.3 ? 2 : 1, h: Math.round(80 + Math.random() * 180), c: cols[i % 3], d: Math.round(450 + Math.random() * 500), delay: Math.round(Math.random() * 900) });
  }
  return out;
})();
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
      history: (function () { var S = typeof window !== 'undefined' && window.RK && window.RK.store; var v = S ? S.getJSON('rk_crash_hist', null) : null; return Array.isArray(v) && v.length ? v : [2.08, 4.6, 2.39, 1.04, 6.85, 3.3, 1.94, 12.4, 1.21, 1.55]; })()
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
        var bp = rocketPos(el, s.crashAt);
        this.setState({ phase: 'crash', boom: bp, t0: now, now: now, m: s.crashAt, me: me, history: [s.crashAt].concat(s.history).slice(0, 12) });
        if (window.RK && window.RK.store) window.RK.store.setJSON('rk_crash_hist', [s.crashAt].concat(s.history).slice(0, 12));
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
      if (s.me || s.bet > s.balance || !(s.bet >= 0.1)) return;
      rkTrack({ game: 'crash', bet: s.bet, round: true });
      this.setState({ balance: r2(s.balance - s.bet), me: { amount: s.bet, gift: null, cashed: false } });
    } else {
      if (!(s.bet >= 0.1)) return;
      this.setState({ queued: s.queued ? null : { amount: s.bet, gift: null } });
    }
  }
  placeGift(k) {
    var s = this.state;
    var inv = s.inv.slice(); var i = inv.indexOf(k);
    if (i === -1) return;
    inv.splice(i, 1);
    if (s.phase === 'wait' && !s.me) { rkTrack({ game: 'crash', bet: GIFTS[k].price, round: true }); this.setState({ inv: inv, giftPick: false, me: { amount: GIFTS[k].price, gift: k, cashed: false } }); }
    else this.setState({ inv: inv, giftPick: false, queued: { gift: k } });
  }
  cashout() {
    var s = this.state;
    if (s.phase !== 'fly' || !s.me || s.me.cashed) return;
    var pay = Math.floor(s.me.amount * s.m * 100) / 100;
    rkTrack({ game: 'crash', win: pay });
    this.setState({ balance: r2(s.balance + pay), me: Object.assign({}, s.me, { cashed: true, at: Math.floor(s.m * 100) / 100, pay: pay }) });
  }
  setBet(v) { this.setState({ betStr: null, bet: r2(Math.max(0.1, Math.min(v, Math.max(0.1, this.state.balance)))) }); }

  renderVals() {
    var self = this, s = this.state;
    var el = s.now - s.t0;
    var remain = Math.max(0, (WAIT - el) / 1000);
    var timerColor = remain > 3 ? '#2bd46b' : (remain > 1.5 ? '#ffc83d' : '#ff5d73');
    var timerText = (remain < 10 ? '0' : '') + remain.toFixed(2);
    var m = s.phase === 'wait' ? 1 : s.m;
    var rp = s.phase === 'fly' ? rocketPos(el, m) : (s.phase === 'crash' && s.boom ? s.boom : { x: 70, y: 300, rot: 0 });
    var rx = rp.x, ry = rp.y;

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
      trailD: 'M 0 0',
      warp: WARP,
      speedOp: s.phase === 'fly' ? Math.min(1, Math.max(0, (m - 1.25) / 1.2)).toFixed(2) : '0',
      scale: scale,
      isWait: s.phase === 'wait', isFly: s.phase === 'fly', isCrash: s.phase === 'crash',
      timerText: timerText, timerColor: timerColor, timerPct: (remain / (WAIT / 1000)) * 100,
      multText: m.toFixed(2) + 'x',
      crashText: s.crashAt.toFixed(2) + 'x',
      showRocket: s.phase !== 'crash',
      rocketBox: 'left: ' + (rx - 55).toFixed(1) + 'px; top: ' + (ry - 60).toFixed(1) + 'px; transform: rotate(' + rp.rot.toFixed(1) + 'deg); transition: transform 0.25s linear; opacity: ' + (s.phase === 'wait' ? '0.85' : '1'),
      rocketAnim: 'animation: ' + (s.phase === 'fly' && m > 1.6 ? 'rkShake 0.12s linear infinite' : 'rkBob 0.6s ease-in-out infinite') + '; filter: drop-shadow(0 0 16px rgba(255,160,40,0.55))',
      boomPos: 'left: ' + rx.toFixed(1) + 'px; top: ' + ry.toFixed(1) + 'px',
      history: s.history.map(function (h) {
        return { label: h.toFixed(2) + 'x', bg: h >= 10 ? 'rgba(255,200,61,0.18)' : (h >= 2 ? 'rgba(42,127,255,0.2)' : 'rgba(255,255,255,0.08)'), color: h >= 10 ? '#ffc83d' : (h >= 2 ? '#7fb2ff' : '#c9cdd6') };
      }),
      showCashout: showCashout,
      cashoutText: showCashout ? fmt(s.me.amount * m) + ' TON' : '',
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
`;var G0=`<!doctype html>
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
      side: 'right', fast: true, history: (function () { var S = typeof window !== 'undefined' && window.RK && window.RK.store; var v = S ? S.getJSON('rk_upg_hist', null) : null; return Array.isArray(v) ? v : []; })(), res: null, nextId: 100, q: ''
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
`;var q0=`<!doctype html>
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
  { id: 'free', name: '\u0415\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439', price: 0, free: true, color: '#5fd4ff', dark: '#2fa0d0', bg: '#0c2430', glow: 'rgba(95,212,255,0.9)', edge: '#18465a', opened: 8812 },
  { id: 'ref', name: '\u0417\u0430 5 \u0434\u0440\u0443\u0437\u0435\u0439', price: 0, free: true, locked: true, lockText: '\u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438 5 \u0434\u0440\u0443\u0437\u0435\u0439', color: '#ff5d9e', dark: '#c02a6c', bg: '#2e1020', glow: 'rgba(255,93,158,0.9)', edge: '#5a1c3a', opened: 412 }
];
// \u0421\u043E\u0441\u0442\u0430\u0432 \u043A\u0435\u0439\u0441\u0430: 12 NFT \u043E\u0442 ~\xBC \u0434\u043E ~40 \u0446\u0435\u043D \u043A\u0435\u0439\u0441\u0430. \u0423 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0445 \u2014 \u0441\u0430\u043C\u044B\u0435 \u0434\u0435\u0448\u0451\u0432\u044B\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u0438.
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
  if (c.free) { c.pool = CAT_LIST.slice(0, 6).map(function (x) { return x.name; }); c.probs = c.pool.map(function () { return 1 / c.pool.length; }); }
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
function previewStrip(c) { var s = []; for (var i = 0; i < N; i++) s.push(c.pool[i % c.pool.length]); return s; }
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
      caseId: null, tab: 'paid', balance: 500, fast: true, spinning: false,
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
  componentWillUnmount() { clearTimeout(this.t1); clearTimeout(this.t2); clearInterval(this.iv); }

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
    for (var i = 0; i < N; i++) strip.push(i === WIN_IDX ? won : roll(c));
    var finalOffset = WIN_IDX * STEP + TILE / 2 - CENTER + (Math.random() - 0.5) * (TILE - 20);
    var dur = s.fast ? 1100 : 4800, self = this;
    var upd = { spinning: true, strip: strip, offset: 2 * STEP + TILE / 2 - CENTER, anim: false, overlay: false, won: null };
    if (c.free) { var t = Date.now(); setFreeAt(t); upd.freeAt = t; } else upd.balance = Math.round((s.balance - c.price) * 100) / 100;
    this.setState(upd);
    this.t1 = setTimeout(function () {
      self.setState({ offset: finalOffset, anim: true });
      self.t2 = setTimeout(function () { try { if (window.RK && window.RK.track) window.RK.track({ game: 'cases', bet: c.free ? 0 : c.price, win: CAT[won].price, round: true }); } catch (e) {} self.setState({ spinning: false, won: { key: won, caseId: c.id }, overlay: true, drops: [won].concat(self.state.drops).slice(0, 7) }); }, dur + 120);
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
      sellWon: function () { var st = self.state; if (!st.won) return; self.setState({ balance: Math.round((st.balance + CAT[st.won.key].price) * 100) / 100, overlay: false, won: null }); },
      keepWon: function () { var st = self.state; if (!st.won) return; if (typeof window !== 'undefined' && window.RK && window.RK.inventory) window.RK.inventory.add(st.won.key); self.setState({ loot: [{ id: st.nextId, key: st.won.key }].concat(st.loot), nextId: st.nextId + 1, overlay: false, won: null }); }
    };
  }
}
<\/script>
</body>
</html>
`;var Y0=`<!doctype html>
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
`;var K0=`<!doctype html>
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
<sc-if value="{{winIsMe}}" hint-placeholder-val="{{ false }}"><img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
<sc-if value="{{winNotMe}}" hint-placeholder-val="{{ true }}">{{winInitial}}</sc-if>
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
var FEE = 0.07, COUNTDOWN = 15000, S = 358;
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
function rkTrack(o) { try { if (window.RK && window.RK.track) window.RK.track(o); } catch (e) {} }
function rkStore() { return typeof window !== 'undefined' && window.RK && window.RK.store ? window.RK.store : null; }
function pvpHistLoad(def) { var S = rkStore(); var v = S ? S.getJSON('rk_pvp_hist', null) : null; return Array.isArray(v) && v.length ? v : def; }
function pvpHistSave(h) { var S = rkStore(); if (S) S.setJSON('rk_pvp_hist', h); }
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
      history: pvpHistLoad([
        { id: 1148665, name: 'hill_best', chance: '99.79%', win: '48.51', av: COLORS[0], time: '21 \u043E\u043A\u0442. 18:56', ton: 0.05, gifts: ['rose', 'record'] },
        { id: 1148663, name: 'hill_best', chance: '49.81%', win: '7.54', av: COLORS[0], time: '21 \u043E\u043A\u0442. 18:56', ton: 0, gifts: ['bells', 'cake'] },
        { id: 1148661, name: 'cntgf52', chance: '33.28%', win: '7.67', av: COLORS[3], time: '21 \u043E\u043A\u0442. 18:55', ton: 0.1, gifts: ['globe', 'lpotion'] }
      ])
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
    var mine = s.players.filter(function (p) { return p.me; })[0];
    if (mine) rkTrack({ game: 'pvp', bet: stakeOf(mine), win: wp.me ? win : 0, round: true });
    pvpHistSave(upd.history);
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
      if (s.bet > s.balance || !(s.bet >= 0.1)) return;
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
      showPlayers: true, showHistory: s.view === 'history', historyCount: s.history.length,
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
`;var Z0=`<!doctype html>
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
<img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 84px; height: 84px; border-radius: 50%; object-fit: cover; border: 3px solid #ffc83d">
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
`;var V0=`<!doctype html>
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
    var bot = r && r.botName ? r.botName : 'rackoon_bot';
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
`;var X0=`<!doctype html>
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
<sc-if value="{{p.isMe}}" hint-placeholder-val="{{ false }}"><img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
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
<sc-if value="{{r.isMe}}" hint-placeholder-val="{{ false }}"><img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 100%; height: 100%; object-fit: cover"></sc-if>
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
<img src="/_blob/661884b648dd965ea69af44ea8c7ee95" alt="" style="width: 34px; height: 34px; border-radius: 10px; object-fit: cover">
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
`;var Q=window.Telegram&&window.Telegram.WebApp,rg=100,Fn=["rk_balance","rk_inv","rk_free_at","rk_pvp_hist","rk_crash_hist","rk_upg_hist","rk_stats","rk_tasks"],Q0=3900,ea=(()=>{try{return Q&&Q.CloudStorage&&(!Q.isVersionAtLeast||Q.isVersionAtLeast("6.9"))?Q.CloudStorage:null}catch{return null}})(),Te={_m:{},_t:{},get(t){let e=null;try{e=localStorage.getItem(t)}catch{}return e!=null?e:t in this._m?this._m[t]:null},set(t,e){e=String(e),this._m[t]=e;try{localStorage.setItem(t,e)}catch{}ea&&Fn.indexOf(t)!==-1&&(clearTimeout(this._t[t]),this._t[t]=setTimeout(()=>{let a=[];for(let l=0;l<e.length;l+=Q0)a.push(e.slice(l,l+Q0));a.length||a.push("");try{ea.setItem(t+"__n",String(a.length)),a.forEach((l,i)=>ea.setItem(t+"__"+i,l))}catch{}},400))},remove(t){delete this._m[t];try{localStorage.removeItem(t)}catch{}if(ea)try{ea.setItem(t+"__n","0")}catch{}},getJSON(t,e){try{let a=JSON.parse(this.get(t)||"null");return a==null?e:a}catch{return e}},setJSON(t,e){this.set(t,JSON.stringify(e))}};function cg(){return new Promise(t=>{if(!ea)return t();let e=setTimeout(t,2500);try{ea.getItems(Fn.map(a=>a+"__n"),(a,l)=>{if(a||!l)return clearTimeout(e),t();let i=[];if(Fn.forEach(n=>{let o=parseInt(l[n+"__n"]||"0",10)||0;for(let s=0;s<o;s++)i.push(n+"__"+s)}),!i.length)return clearTimeout(e),t();ea.getItems(i,(n,o)=>{!n&&o&&Fn.forEach(s=>{let r=parseInt(l[s+"__n"]||"0",10)||0;if(!r)return;let u="";for(let b=0;b<r;b++)u+=o[s+"__"+b]||"";Te._m[s]=u;try{localStorage.setItem(s,u)}catch{}}),clearTimeout(e),t()})})}catch{clearTimeout(e),t()}})}var Zr={get(){let t=parseFloat(Te.get("rk_balance"));return isNaN(t)?rg:t},set(t){Te.set("rk_balance",String(Math.round(t*100)/100))}},fg=["B-Day Candle","Lol Pop","Desk Calendar","Homemade Cake","Homemade Cake","Jingle Bells","Hypno Lollipop","Snow Globe","Berry Box"],ug={_load(){let t=Te.getJSON("rk_inv",null);return Array.isArray(t)?t:null},_save(t){Te.setJSON("rk_inv",t),this._mem=t},list(){let t=this._load()||this._mem;if(!t){let e=Date.now();t=fg.map((a,l)=>({uid:"s"+l+"_"+e,key:a,at:e-(l+1)*36e5})),this._save(t)}return t.slice()},add(t){let e=this.list(),a={uid:"g"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),key:t,at:Date.now()};return e.unshift(a),this._save(e),a},remove(t){let e=new Set([].concat(t));this._save(this.list().filter(a=>!e.has(a.uid)))},reset(){return Te.remove("rk_inv"),this._mem=null,this.list()}},Ur=t=>new Date((t||Date.now())+3*3600*1e3).toISOString().slice(0,10),hl=()=>({cases:0,crash:0,pvp:0,upgrade:0,mines:0,wagered:0,won:0}),$0={_get(){let t=Te.getJSON("rk_stats",null);return t&&t.days?t:{total:hl(),days:{}}},day(){return Object.assign(hl(),this._get().days[Ur()]||{})},range(t){let e=this._get(),a=hl();for(let l=0;l<t;l++){let i=e.days[Ur(Date.now()-l*864e5)];i&&Object.keys(a).forEach(n=>{a[n]+=i[n]||0})}return a},total(){return Object.assign(hl(),this._get().total)}};function dg(t){let e=$0._get(),a=Ur(),l=Object.assign(hl(),e.days[a]||{}),i=Object.assign(hl(),e.total||{});[l,i].forEach(n=>{t.round&&t.game in n&&(n[t.game]+=1),n.wagered=Math.round((n.wagered+(t.bet||0))*100)/100,n.won=Math.round((n.won+(t.win||0))*100)/100}),e.days[a]=l,e.total=i,Object.keys(e.days).sort().slice(0,-8).forEach(n=>{delete e.days[n]}),Te.setJSON("rk_stats",e)}window.RK={wallet:Zr,inventory:ug,store:Te,stats:$0,track:dg,botName:"",user:Q&&Q.initDataUnsafe&&Q.initDataUnsafe.user||null};if(Q){Q.ready(),Q.expand();try{Q.setHeaderColor("#0b0d12"),Q.setBackgroundColor("#0b0d12")}catch{}try{Q.disableVerticalSwipes&&Q.disableVerticalSwipes()}catch{}}document.addEventListener("click",t=>{if(Q&&Q.HapticFeedback&&t.target.closest&&t.target.closest("button, a"))try{Q.HapticFeedback.impactOccurred("light")}catch{}},!0);var Wn={"16b8be03ec4054a9ad560c5be1c9ab9e":"banner-crash.jpg","88b023f22e2d3006641849bb168e073d":"banner-cases.jpg","63c10368990e8788e655de65d5a9b515":"banner-upgrade.jpg",b81dc491ff982e1892b4eeeb94570e3c:"banner-mines.jpg","661884b648dd965ea69af44ea8c7ee95":"avatar.jpg",a8d1e2a1f1626c9b8edd4755d9c32150:"rocket.png","29f965541d768edadf1aad890a105f4f":"space.jpg",ac9e83f513d62d0c7fc3250c8a2d1f89:"candle.svg","1f689ff254757e970266197964c5d390":"lolpop.svg","9b7049b84c84b25ce8e457f56c837c42":"calendar.svg",b4c8d4f914ed6e253c933045ab9e3461:"hypno.svg","808ef5efdbeb6b276f70430b220f760b":"bells.svg","6ef5ecbeb712d1b1d752a33d1e9c279d":"cake.svg","6e3628fac94b5266f3b64cea9c5fe7ee":"globe.svg",c2c0de4f1d0a4ed1dd2df84eff4c7f73:"berry.svg","45ac385132ce7b83da133306d9a330f8":"muffin.svg","8f4c023d08704d2319e54c9872a8c46d":"record.svg",fe01a5a2d2ff76e0192e008ed6267558:"tophat.svg",ef580f1649ad89b5e268954da6ea30b2:"dring.svg","5bb7da32fc8a6f8dbe91cf7cedc20c65":"lpotion.svg","734e25b54462cda990767f69381d8355":"rose.svg",c02bc9477e447f6f71962df1fc7a399a:"bear.svg","4826a2db621709393534f8feae3d3f4a":"signet.svg","5efc0b426406d53e3b649c727079f26d":"watch.svg",e562d84d61312007f5108ab64cbfe6f9:"iongem.svg","923c4583ef32f1e6549c08d5a1839d4c":"peach.svg","500977bc4572974cf066e4c08b276369":"cap.svg",a64ccb23ba5a5ab0f1f789ab412cf3af:"pepe.svg",bb8c4faf5d5477b7abe934698601360a:"none.svg","34af5661e80ecf394b0a48aeeb28ab6c":"r-fire.svg","7629870dfcd56d08701d6a71de1e83df":"r-laugh.svg",f5a9ceb49eb8c4c03e26914bcd1e2576:"r-angry.svg","89d4ee9117e73bee099492a4ce5c5498":"r-heart.svg",c22eeb9eb2c04b336c2c7f989a2a93a7:"r-party.svg",fcf5bf14ee8b1ae499c387610e4d1977:"case-c1.jpg","06ce572b9077b276c1d8a7b06b5e8713":"case-c2.jpg","9e1537bfc41c71475ce556a1aaf4884f":"case-c3.jpg",c0847d0dc5fbcb1a68d80763032f0675:"case-c4.jpg",db1a02051117bc41aa898a143cdc3d48:"case-c5.jpg","72f77fc4af6bf75c8e7d10aa33580007":"case-c6.jpg",b289144243be3c7e4e7176e3a0070caa:"case-c7.jpg","313d5daa64736bbfb70ecfcd97ed3141":"case-c8.jpg"};function pg(t){return t.replace(/\/_blob\/([0-9a-f]{32})/g,(e,a)=>Wn[a]?"assets/"+Wn[a]:e)}function hg(t){return t.replace(/position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba\(5, 6, 10, ([0-9.]+)\); display: flex; justify-content: center; align-items: flex-start; padding-top: \d+px/g,"position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, $1); display: flex; justify-content: center; align-items: center; padding: 16px")}var jr={};window.rkThumb=function(t,e){let a=t.toLowerCase().replace(/[^a-z0-9]/g,""),l="https://fragment.com/file/gifts/"+a+"/thumb.webp",i="https://nft.fragment.com/gift/"+a+"-1.webp";return jr[l]=i,jr[i]=e.replace(/\/_blob\/([0-9a-f]{32})/,(n,o)=>Wn[o]?"assets/"+Wn[o]:n),l};window.addEventListener("error",t=>{let e=t.target;if(e&&e.tagName==="IMG"){let a=jr[e.getAttribute("src")];a&&e.setAttribute("src",a)}},!0);function ke(t,e){let a=hg(pg(e)),l=new DOMParser().parseFromString(a,"text/html"),i=l.querySelector("x-dc"),n=i.querySelector("helmet"),o=[];n&&(n.querySelectorAll("link, style").forEach(b=>o.push(b.outerHTML)),n.remove());let s=Array.from(i.children)[0],r=l.querySelector("script[data-dc-script]").textContent,u=new Function("DCLogic",r+`
;return Component;`)(Gr);return{name:t,head:o,root:s,Logic:u}}var Gr=class{constructor(e){this.props=e||{},this.state={},this._host=null}setState(e,a){typeof e=="function"&&(e=e(this.state,this.props)),Object.assign(this.state,e),e&&"balance"in e&&Zr.set(e.balance),this._host?this._host.forceUpdate(a):a&&a()}forceUpdate(e){this._host&&this._host.forceUpdate(e)}},qr=t=>t.replace(/-([a-z])/g,(e,a)=>a.toUpperCase());function J0(t,e){if(t=t.trim(),t==="true")return!0;if(t==="false")return!1;if(t==="null")return null;if(/^-?\d+(\.\d+)?$/.test(t))return parseFloat(t);let a=t.split("."),l;for(let i=e.length-1;i>=0;i--)if(e[i]&&a[0]in e[i]){l=e[i][a[0]];break}for(let i=1;i<a.length&&l!=null;i++)l=l[a[i]];return l}var gg=/\{\{([^}]+)\}\}/g;function Jn(t,e){let a=t.match(/^\s*\{\{([^}]+)\}\}\s*$/);return a?J0(a[1],e):t.replace(gg,(l,i)=>{let n=J0(i,e);return n==null?"":String(n)})}function bg(t){let e={};return t.split(";").forEach(a=>{let l=a.indexOf(":");if(l<0)return;let i=a.slice(0,l).trim(),n=a.slice(l+1).trim();if(i){if(i.startsWith("--")){e[i]=n;return}i.startsWith("-webkit-")&&(i="Webkit"+qr(i.slice(8)).replace(/^./,o=>o.toUpperCase()).slice(0)),e[i.startsWith("Webkit")?i:qr(i)]=n}}),e}function P0(t,e,a,l){if(t.nodeType===3){let b=t.nodeValue;return!b.trim()&&b.indexOf(`
`)!==-1?null:b.indexOf("{{")===-1?b:Jn(b,e)}if(t.nodeType!==1)return null;let i=t.tagName.toLowerCase(),n=b=>Array.from(t.childNodes).map((h,d)=>P0(h,b,a,d)).filter(h=>h!=null&&h!==!1);if(i==="sc-if")return Jn(t.getAttribute("value")||"",e)?Nt.default.createElement(Nt.default.Fragment,{key:l},...n(e)):null;if(i==="sc-for"){let b=Jn(t.getAttribute("list")||"",e)||[],h=t.getAttribute("as")||"item";return Nt.default.createElement(Nt.default.Fragment,{key:l},...b.map((d,g)=>Nt.default.createElement(Nt.default.Fragment,{key:g},...n(e.concat([{[h]:d,$index:g}])))))}let o=t.namespaceURI==="http://www.w3.org/2000/svg",s={key:l};for(let b of Array.from(t.attributes)){let h=b.name,d=b.value,g=d.indexOf("{{")===-1?d:Jn(d,e);if(!h.startsWith("hint-")){if(h==="class")h="className";else if(h==="for")h="htmlFor";else if(h==="style"){s.style=bg(String(g));continue}else if(h.startsWith("on")){let v="on"+h.charAt(2).toUpperCase()+h.slice(3);v==="Onclick"&&(v="onClick"),h.toLowerCase()==="onclick"&&(v="onClick"),h.toLowerCase()==="oninput"&&(v="onChange"),h.toLowerCase()==="onkeydown"&&(v="onKeyDown"),typeof g=="function"&&(s[v]=g);continue}else o&&h.indexOf("-")!==-1&&!h.startsWith("aria-")&&!h.startsWith("data-")?h=qr(h):h==="tabindex"?h="tabIndex":h==="inputmode"?h="inputMode":h==="enterkeyhint"?h="enterKeyHint":h==="autocomplete"?h="autoComplete":h==="readonly"?h="readOnly":h==="disabled"&&(g=g===!0||g===""||g==="disabled"||g==="true");s[h]=g}}if(i==="a"){let h=String(s.href||t.getAttribute("href")||"").match(/([A-Za-z]+)\.dc\.html$/);s.href="#",s.onClick=d=>{d.preventDefault(),h&&a(h[1])}}i==="input"&&"value"in s&&!s.onChange&&(s.readOnly=!0);let r=n(e);return{img:1,input:1,br:1,hr:1,meta:1,link:1}[i]?Nt.default.createElement(i,s):Nt.default.createElement(i,s,...r)}var Yr=class extends Nt.default.Component{constructor(e){super(e),this.logic=new e.screen.Logic({}),this.logic.state&&"balance"in this.logic.state&&(this.logic.state.balance=Zr.get()),this.logic._host=this}componentDidMount(){this.logic.componentDidMount&&this.logic.componentDidMount()}componentWillUnmount(){this.logic.componentWillUnmount&&this.logic.componentWillUnmount(),this.logic._host=null}render(){let e=this.logic.renderVals?this.logic.renderVals():{};return P0(this.props.screen.root,[e],this.props.nav,"root")}},In={Main:ke("Main",U0),Crash:ke("Crash",j0),Upgrade:ke("Upgrade",G0),Cases:ke("Cases",q0),Mines:ke("Mines",Y0),Pvp:ke("Pvp",K0),Inventory:ke("Inventory",Z0),Tasks:ke("Tasks",V0),Leaders:ke("Leaders",X0)},F0=new Set;Object.values(In).forEach(t=>t.head.forEach(e=>{if(F0.has(e))return;F0.add(e);let a=document.createElement("div");a.innerHTML=e;let l=a.firstElementChild;l.tagName==="STYLE"&&/body\{/.test(l.textContent)&&(l.textContent=l.textContent.replace(/body\{[^}]*\}/,"")),document.head.appendChild(l)}));function W0(){let t=(location.hash||"").replace("#/","");return In[t]?t:"Main"}var Kr=class extends Nt.default.Component{constructor(e){super(e),this.state={route:W0()},this.nav=this.nav.bind(this),this.back=()=>this.nav("Main")}componentDidMount(){window.addEventListener("hashchange",()=>this.setState({route:W0()})),Q&&Q.BackButton&&Q.BackButton.onClick(this.back),this.syncBack()}componentDidUpdate(){this.syncBack()}syncBack(){!Q||!Q.BackButton||(this.state.route==="Main"?Q.BackButton.hide():Q.BackButton.show())}nav(e){In[e]&&(location.hash=e==="Main"?"":"#/"+e,this.setState({route:e}),window.scrollTo(0,0))}render(){let e=this.state.route;return Nt.default.createElement(Yr,{key:e,screen:In[e],nav:this.nav})}};function tp(){let t=document.getElementById("app"),e=Math.min(window.innerWidth,480);t.style.zoom=String(e/390)}window.addEventListener("resize",tp);tp();cg().then(()=>(0,I0.createRoot)(document.getElementById("app")).render(Nt.default.createElement(Kr)));})();
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
