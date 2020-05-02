(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=(n(0),n(187));const o={id:"api_interceptors",title:"Interceptors",sidebar_label:"Interceptors"},c={id:"api/api_interceptors",title:"Interceptors",description:"Interceptors are a powerful mechanism that can monitor and rewrite HTTP request before and after sending requests.",source:"@site/docs/api/interceptors.md",permalink:"/frontend-docs/docs/api/api_interceptors",editUrl:"https://github.com/django-stars/frontend-docs/tree/master/docs/api/interceptors.md",sidebar_label:"Interceptors",sidebar:"apiSitebar",previous:{title:"Creating an instance",permalink:"/frontend-docs/docs/api/api_instance"},next:{title:"Sending HTTP requests",permalink:"/frontend-docs/docs/api/api_requests"}},s=[{value:"<del>Intercept request</del>",id:"intercept-request",children:[]},{value:"<del>Intercept responce</del>",id:"intercept-responce",children:[]},{value:"<del>delete interceptor</del>",id:"delete-interceptor",children:[]}],i={rightToc:s};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Interceptors are a powerful mechanism that can monitor and rewrite HTTP request before and after sending requests."),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Interceptors should only modify request/responce and return modified argument. It is consider rule. Please pay attantions while throwing errors inside interceptor it could lead to unpredictable bugs. "))),Object(a.b)("h2",{id:"intercept-request"},Object(a.b)("del",{parentName:"h2"},"Intercept request")),Object(a.b)("p",null,"You can intercept request before fetch"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"api.interceptors.request.use({\n  onSuccess: (requestData)=>{},\n  onError: (requestData)=>{}\n})\n")),Object(a.b)("p",null,"In most cases there will not be onError interceptor while intercepting request. This situation could be only if you have some bugs in your own onSuccess interceptor."),Object(a.b)("p",null,"The most popular usecase for request interceptor is to pass authorisation header."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"api.interceptors.request.use({\n  onSuccess: (consfigs) => {\n    const headers = new Headers(consfigs.headers)\n    headers.set('Authorization', `JWT ${jwtToken}`)\n    return {\n      ...consfigs,\n      headers,\n    }\n  },\n})\n")),Object(a.b)("p",null,"Mostly if you are using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux")," it is better to create ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://redux.js.org/advanced/middleware"}),"middleware")," for setting up Authorization header."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nexport default function authMiddleware(store) {\n  let removeRequestInterceptor\n  return (next) => action => {\n    if(action.type === 'Login'){\n      removeRequestInterceptor && removeRequestInterceptor() // delete previous interceptor if exists\n      removeRequestInterceptor = api.interceptors.request.use({\n        onSuccess: (consfigs) => {\n          const headers = new Headers(consfigs.headers)\n          headers.set('Authorization', `JWT ${action.payload}`)\n          return {\n            ...consfigs,\n            headers,\n          }\n        },\n      })\n    }\n    if(action.type === 'Logout'){\n      removeRequestInterceptor && removeRequestInterceptor() // delete previous interceptor if exists\n      removeRequestInterceptor = undefined\n    }\n    return next(action)\n  }\n}\n")),Object(a.b)("h2",{id:"intercept-responce"},Object(a.b)("del",{parentName:"h2"},"Intercept responce")),Object(a.b)("p",null,"You can intercept request after sending Request"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"api.interceptors.response.use({\n  onSuccess: (responce)=>{},\n  onError: (responce)=>{}\n})\n")),Object(a.b)("p",null,"The most popular usecase for responce interceptor is to clear Rudux store on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://httpstatuses.com/401"}),"401")," responce status code. And the best place to do that is to create middleware"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"export default function authMiddleware(store) {\n  api.interceptors.response.use({\n    onError: function({ data, response }) {\n      if(get(response, 'status') === 401) {\n        store.dispatch(logout())\n        throw new Error(response.statusText)\n      }\n      return { data, response }\n    },\n  })\n  return (next) => action => {\n    return next(action)\n  }\n}\n\n")),Object(a.b)("h2",{id:"delete-interceptor"},Object(a.b)("del",{parentName:"h2"},"delete interceptor")),Object(a.b)("p",null,"Functions ",Object(a.b)("del",{parentName:"p"},"response.use")," and ",Object(a.b)("del",{parentName:"p"},"request.use")," returns functoin to delite this interceptor."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const deleteInterceptor = api.interceptors.request.use({...})\ndeleteInterceptor()\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const deleteInterceptor = api.interceptors.response.use({...})\ndeleteInterceptor()\n")))}p.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(m,s({ref:t},p,{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);