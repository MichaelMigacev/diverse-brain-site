(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{343:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var n=r(5155),o=r(6874),a=r.n(o),i=r(2115);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,i.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:s="",children:u,iconNode:f,...d}=e;return(0,i.createElement)("svg",{ref:t,...c,width:n,height:n,stroke:r,strokeWidth:a?24*Number(o)/Number(n):o,className:l("lucide",s),...d},[...f.map(e=>{let[t,r]=e;return(0,i.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),f=(e,t)=>{let r=(0,i.forwardRef)((r,n)=>{let{className:o,...a}=r;return(0,i.createElement)(u,{ref:n,iconNode:t,className:l("lucide-".concat(s(e)),o),...a})});return r.displayName="".concat(e),r},d=f("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),h=f("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var p=r(8999);let m=()=>{let[e,t]=(0,i.useState)(!1),r=(0,p.useRouter)(),o=(0,p.usePathname)().startsWith("/de")?"de":"en",s=e=>{e!==o&&r.push("/".concat(e))};return(0,n.jsxs)("nav",{className:"bg-white fixed w-full top-0 z-50",children:[(0,n.jsx)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)("div",{className:"flex justify-between items-center h-24",children:[(0,n.jsx)("div",{className:"flex items-center space-x-2",children:(0,n.jsx)(a(),{href:"de"===o?"/de":"/",className:"text-2xl font-semibold",children:"DIVERSE BRAIN"})}),(0,n.jsxs)("div",{className:"hidden md:flex space-x-6 font-semibold text-xl",children:[(0,n.jsx)(a(),{href:"de"===o?"/de/Exhibition":"/Exhibition",className:"hover:text-gray-600",children:"de"===o?"Ausstellung":"Exhibition"}),(0,n.jsx)(a(),{href:"de"===o?"/de/Teaching":"/Teaching",className:"hover:text-gray-600",children:"de"===o?"Lehre":"Teaching"}),(0,n.jsx)(a(),{href:"de"===o?"/de/Outreach":"/Outreach",className:"hover:text-gray-600",children:"de"===o?"Reachweite":"Outreach"}),(0,n.jsx)(a(),{href:"de"===o?"/de/Contact":"/Contact",className:"hover:text-gray-600",children:"de"===o?"Kontakt":"Contact"})]}),(0,n.jsxs)("div",{className:"flex space-x-2",children:[(0,n.jsx)("button",{onClick:()=>s(""),className:"px-3 py-1 rounded transition-all duration-200 ".concat("en"===o?"bg-white  text-gray-800 font-semibold":"bg-white text-gray-400 "," "),children:"EN"}),(0,n.jsx)("button",{onClick:()=>s("de"),className:"px-3 py-1 rounded transition-all duration-200".concat("de"===o?"bg-white text-gray-800 font-semibold":"bg-white text-gray-400"," "),children:"DE"})]}),(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsx)("button",{onClick:()=>t(!e),children:e?(0,n.jsx)(d,{size:24}):(0,n.jsx)(h,{size:24})})})]})}),e&&(0,n.jsx)("div",{className:"md:hidden bg-white shadow-md",children:(0,n.jsxs)("div",{className:"flex flex-col items-center space-y-4 py-4",children:[(0,n.jsx)(a(),{href:"de"===o?"/de/Exhibition":"/Exhibition",className:"hover:text-gray-600",onClick:()=>t(!1),children:"de"===o?"Ausstellung":"Exhibition"}),(0,n.jsx)(a(),{href:"de"===o?"/de/Teaching":"/Teaching",className:"hover:text-gray-600",onClick:()=>t(!1),children:"de"===o?"Lehre":"Teaching"}),(0,n.jsx)(a(),{href:"de"===o?"/de/Outreach":"/Outreach",className:"hover:text-gray-600",onClick:()=>t(!1),children:"de"===o?"Reichweite":"Outreach"}),(0,n.jsx)(a(),{href:"de"===o?"/de/Contact":"/Contact",className:"hover:text-gray-600",onClick:()=>t(!1),children:"de"===o?"Kontakt":"Contact"})]})})]})}},2757:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return s},urlObjectKeys:function(){return i}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,a=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let u=e.search||l&&"?"+l||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),""+a+c+(i=i.replace(/[?#]/g,encodeURIComponent))+(u=u.replace("#","%23"))+s}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return a(e)}},3032:e=>{e.exports={style:{fontFamily:"'Montserrat', 'Montserrat Fallback'",fontStyle:"normal"},className:"__className_c745ec",variable:"__variable_c745ec"}},6874:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let n=r(8229),o=r(5155),a=n._(r(2115)),i=r(2757),s=r(5227),l=r(9818),c=r(6654),u=r(9991),f=r(5929);r(3230);let d=r(4930);function h(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let p=a.default.forwardRef(function(e,t){let r,n;let{href:i,as:p,children:m,prefetch:y=null,passHref:x,replace:g,shallow:b,scroll:v,onClick:N,onMouseEnter:j,onTouchStart:E,legacyBehavior:k=!1,...w}=e;r=m,k&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let C=a.default.useContext(s.AppRouterContext),P=!1!==y,_=null===y?l.PrefetchKind.AUTO:l.PrefetchKind.FULL,{href:O,as:T}=a.default.useMemo(()=>{let e=h(i);return{href:e,as:p?h(p):e}},[i,p]);k&&(n=a.default.Children.only(r));let A=k?n&&"object"==typeof n&&n.ref:t,S=a.default.useCallback(e=>(P&&null!==C&&(0,d.mountLinkInstance)(e,O,C,_),()=>{(0,d.unmountLinkInstance)(e)}),[P,O,C,_]),R={ref:(0,c.useMergedRef)(S,A),onClick(e){k||"function"!=typeof N||N(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),C&&!e.defaultPrevented&&!function(e,t,r,n,o,i,s){let{nodeName:l}=e.currentTarget;!("A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),a.default.startTransition(()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,C,O,T,g,b,v)},onMouseEnter(e){k||"function"!=typeof j||j(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),C&&P&&(0,d.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){k||"function"!=typeof E||E(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),C&&P&&(0,d.onNavigationIntent)(e.currentTarget)}};return(0,u.isAbsoluteUrl)(T)?R.href=T:k&&!x&&("a"!==n.type||"href"in n.props)||(R.href=(0,f.addBasePath)(T)),k?a.default.cloneElement(n,R):(0,o.jsx)("a",{...w,...R,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6937:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9324,23)),Promise.resolve().then(r.bind(r,343)),Promise.resolve().then(r.t.bind(r,3063,23)),Promise.resolve().then(r.t.bind(r,3032,23))},8859:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9324:()=>{},9991:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return p},MiddlewareNotFoundError:function(){return g},MissingStaticPage:function(){return x},NormalizeError:function(){return m},PageNotFoundError:function(){return y},SP:function(){return d},ST:function(){return h},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return i},getURL:function(){return s},isAbsoluteUrl:function(){return a},isResSent:function(){return c},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return b}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=i();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n)throw Object.defineProperty(Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let d="undefined"!=typeof performance,h=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class p extends Error{}class m extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class x extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class g extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}}},e=>{var t=t=>e(e.s=t);e.O(0,[89,63,441,684,358],()=>t(6937)),_N_E=e.O()}]);