(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3329:function(e,t,a){Promise.resolve().then(a.bind(a,8919)),Promise.resolve().then(a.bind(a,7826)),Promise.resolve().then(a.bind(a,8302)),Promise.resolve().then(a.bind(a,9201)),Promise.resolve().then(a.bind(a,9380)),Promise.resolve().then(a.t.bind(a,2126,23)),Promise.resolve().then(a.t.bind(a,7402,23))},7826:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var r=a(9268);a(6006);var i=a(8121),n=a(5840),o=a(5846),s=a.n(o),A=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=function e(t){var a,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(a=0;a<t.length;a++)t[a]&&(r=e(t[a]))&&(i&&(i+=" "),i+=r);else for(a in t)t[a]&&(i&&(i+=" "),i+=a)}return i}(e))&&(r&&(r+=" "),r+=t);return r},l=a(9201);function c(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:a}=(0,l.useActiveSectionContext)();return(0,r.jsxs)("header",{className:"z-[999] relative",children:[(0,r.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,r.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,r.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:n.Ok.map(n=>(0,r.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,r.jsxs)(s(),{className:A("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===n.name}),href:n.hash,onClick:()=>{t(n.name),a(Date.now())},children:[n.name,n.name===e&&(0,r.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},n.hash))})})]})}},8302:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var r=a(9268),i=a(9380);a(6006);var n=a(8136);function o(){let{theme:e,toggleTheme:t}=(0,i.useTheme)();return(0,r.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,r.jsx)(n.eSY,{}):(0,r.jsx)(n.s1t,{})})}},9201:function(e,t,a){"use strict";a.r(t),a.d(t,{ActiveSectionContext:function(){return n},default:function(){return o},useActiveSectionContext:function(){return s}});var r=a(9268),i=a(6006);let n=(0,i.createContext)(null);function o(e){let{children:t}=e,[a,o]=(0,i.useState)("Home"),[s,A]=(0,i.useState)(0);return(0,r.jsx)(n.Provider,{value:{activeSection:a,setActiveSection:o,timeOfLastClick:s,setTimeOfLastClick:A},children:t})}function s(){let e=(0,i.useContext)(n);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o},useTheme:function(){return s}});var r=a(9268),i=a(6006);let n=(0,i.createContext)(null);function o(e){let{children:t}=e,[a,o]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(o(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(o("dark"),document.documentElement.classList.add("dark"))},[]),(0,r.jsx)(n.Provider,{value:{theme:a,toggleTheme:()=>{"light"===a?(o("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(o("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(n);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},5840:function(e,t,a){"use strict";a.d(t,{$c:function(){return A},Ok:function(){return s},nD:function(){return l},ZU:function(){return c}});var r=a(6006),i=a(198),n=a(2801),o=a(7782);let s=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],A=[{title:"undergraduate of university of Sri Jayawardenapura",location:"Sri Lanka",description:"I'm an undergraduate studying in USJ. While studying I'm working as a freelancer",icon:r.createElement(o.qWM),date:"2023"},{title:"Conducted Couple of projects in UNIVERSITY",location:"Sri Lanka",description:"I worked as the UI/UX designer in university projects",icon:r.createElement(i.zQU),date:"2023"},{title:"freelancing as a UI/UX Designer",location:"Sri Lanka",description:"Designing UI/UX for clients as a freelancer",icon:r.createElement(n.huN),date:"2023 present"}],l=[{title:"Travel Destination App",description:"Designed a travel app to help users discover and plan trips seamlessly. Conducted user research to identify key features, including destination recommendations and hotel listings. Created a clean, intuitive interface in Figma with interactive elements like search and location-based suggestions. Collaborated closely with a small team, gaining hands-on experience in UI/UX design and user flow creation.",tags:["React","Next.js","CSS","HTML","JS"],imageUrl:{src:"/Assignment_3/_next/static/media/travel.b62e6a56.jpeg",height:1601,width:997,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAoBP/xAAeEAABBAEFAAAAAAAAAAAAAAABAgMEBQARISIyM//aAAgBAQABPwCwmVTEKsbKo/iFcBqd0p75/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Ar//EABYRAQEBAAAAAAAAAAAAAAAAAAEAsf/aAAgBAwEBPwBML//Z",blurWidth:5,blurHeight:8}},{title:"Donut Shop Web App",description:"Developed a responsive web app for a donut shop to enhance online ordering and customer engagement. Designed a user-friendly interface that allows customers to browse flavors, customize orders, and schedule pickups. Focused on creating an intuitive experience with a visually appealing layout, enabling easy navigation and a smooth ordering process.",tags:["React","TypeScript","Next.js","Tailwind","Redux"],imageUrl:{src:"/Assignment_3/_next/static/media/donut.f41e4ff2.jpg",height:891,width:1912,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAJcFf//EAB0QAAECBwAAAAAAAAAAAAAAABEBIgACAwQUFTL/2gAIAQEAAT8AS6q61JGnI7DwCDH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAkJy/9oACAEDAQE/AGnJ/9k=",blurWidth:8,blurHeight:4}},{title:"Personal Portfolio Website",description:"Designed and developed a personal portfolio website to showcase my design projects and growing skill set. Created a responsive and interactive layout using Figma, ensuring an intuitive user flow for easy navigation. Integrated basic HTML/CSS to bring the design to life and practiced building cohesive visual branding to reflect my personality and style.",tags:["React","Next.js","SQL","Tailwind","Framer"],imageUrl:{src:"/Assignment_3/_next/static/media/potfolio.e9bd667b.jpeg",height:596,width:1170,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAswf/xAAcEAACAgIDAAAAAAAAAAAAAAARFBITAAEDIXL/2gAIAQEAAT8AZ044vwzhXDuseSDn/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:4}}],c=["HTML","CSS","JavaScript","TypeScript","React","Next.js","Node.js","Git","Tailwind","Prisma","MongoDB","Redux","GraphQL","Apollo","Express","PostgreSQL","Python","Django","Framer Motion"]},7402:function(){},2126:function(e){e.exports={style:{fontFamily:"'__Inter_ccc032', '__Inter_Fallback_ccc032'",fontStyle:"normal"},className:"__className_ccc032"}},8919:function(e,t,a){"use strict";let r,i;a.r(t),a.d(t,{CheckmarkIcon:function(){return H},ErrorIcon:function(){return O},LoaderIcon:function(){return $},ToastBar:function(){return ee},ToastIcon:function(){return Y},Toaster:function(){return ei},default:function(){return en},resolveValue:function(){return C},toast:function(){return N},useToaster:function(){return R},useToasterStore:function(){return M}});var n,o=a(6006);let s={data:""},A=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,u=(e,t)=>{let a="",r="",i="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?a=n+" "+o+";":r+="f"==n[1]?u(o,n):n+"{"+u(o,"k"==n[1]?"":t)+"}":"object"==typeof o?r+=u(o,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=u.p?u.p(n,o):n+":"+o+";")}return a+(t&&i?t+"{"+i+"}":i)+r},p={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},g=(e,t,a,r,i)=>{var n;let o=m(e),s=p[o]||(p[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!p[s]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=l.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(d," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(d," ").trim();return r[0]})(e);p[s]=u(i?{["@keyframes "+s]:t}:t,a?"":"."+s)}let A=a&&p.g?p.g:null;return a&&(p.g=p[s]),n=p[s],A?t.data=t.data.replace(A,n):-1===t.data.indexOf(n)&&(t.data=r?n+t.data:t.data+n),s},f=(e,t,a)=>e.reduce((e,r,i)=>{let n=t[i];if(n&&n.call){let e=n(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==n?"":n)},"");function h(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?f(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,A(t.target),t.g,t.o,t.k)}h.bind({g:1});let y,b,x,w=h.bind({k:1});function v(e,t){let a=this||{};return function(){let r=arguments;function i(n,o){let s=Object.assign({},n),A=s.className||i.className;a.p=Object.assign({theme:b&&b()},s),a.o=/ *go\d+/.test(A),s.className=h.apply(a,r)+(A?" "+A:""),t&&(s.ref=o);let l=e;return e[0]&&(l=s.as||e,delete s.as),x&&l[0]&&x(s),y(l,s)}return t?t(i):i}}var E=e=>"function"==typeof e,C=(e,t)=>E(e)?e(t):e,k=(r=0,()=>(++r).toString()),I=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},Q=new Map,B=e=>{if(Q.has(e))return;let t=setTimeout(()=>{Q.delete(e),T({type:4,toastId:e})},1e3);Q.set(e,t)},S=e=>{let t=Q.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&S(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?D(e,{type:1,toast:a}):D(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?B(r):e.toasts.forEach(e=>{B(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},j=[],P={toasts:[],pausedAt:void 0},T=e=>{P=D(P,e),j.forEach(e=>{e(P)})},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},M=(e={})=>{let[t,a]=(0,o.useState)(P);(0,o.useEffect)(()=>(j.push(a),()=>{let e=j.indexOf(a);e>-1&&j.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},U=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),L=e=>(t,a)=>{let r=U(t,e,a);return T({type:2,toast:r}),r.id},N=(e,t)=>L("blank")(e,t);N.error=L("error"),N.success=L("success"),N.loading=L("loading"),N.custom=L("custom"),N.dismiss=e=>{T({type:3,toastId:e})},N.remove=e=>T({type:4,toastId:e}),N.promise=(e,t,a)=>{let r=N.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(N.success(C(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{N.error(C(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var _=(e,t)=>{T({type:1,toast:{id:e,height:t}})},z=()=>{T({type:5,time:Date.now()})},R=e=>{let{toasts:t,pausedAt:a}=M(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&N.dismiss(t.id);return}return setTimeout(()=>N.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,o.useCallback)(()=>{a&&T({type:6,time:Date.now()})},[a]),i=(0,o.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:n}=a||{},o=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),s=o.findIndex(t=>t.id===e.id),A=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[A+1]:[0,A]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:_,startPause:z,endPause:r,calculateOffset:i}}},O=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,$=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,H=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,J=v("div")`
  position: absolute;
`,K=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(G,null,t):t:"blank"===a?null:o.createElement(K,null,o.createElement($,{...r}),"loading"!==a&&o.createElement(J,null,"error"===a?o.createElement(O,{...r}):o.createElement(H,{...r})))},W=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,X=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,V=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,q=(e,t)=>{let a=e.includes("top")?1:-1,[r,i]=I()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[W(a),X(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:a,children:r})=>{let i=e.height?q(e.position||t||"top-center",e.visible):{opacity:0},n=o.createElement(Y,{toast:e}),s=o.createElement(Z,{...e.ariaProps},C(e.message,e));return o.createElement(V,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof r?r({icon:n,message:s}):o.createElement(o.Fragment,null,n,s))});n=o.createElement,u.p=void 0,y=n,b=void 0,x=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:i})=>{let n=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:n,className:t,style:a},i)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:I()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:i,containerStyle:n,containerClassName:s})=>{let{toasts:A,handlers:l}=R(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},A.map(a=>{let n=a.position||t,s=ea(n,l.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(et,{id:a.id,key:a.id,onHeightUpdate:l.updateHeight,className:a.visible?er:"",style:s},"custom"===a.type?C(a.message,a):i?i(a):o.createElement(ee,{toast:a,position:n}))}))},en=N}},function(e){e.O(0,[680,296,166,269,584,253,769,744],function(){return e(e.s=3329)}),_N_E=e.O()}]);