(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(1),r=(a(0),a(187));const i={id:"api_instance",title:"Creating an instance",sidebar_label:"Instance"},c={id:"api/api_instance",title:"Creating an instance",description:"You can pass custom configs to new API instance.",source:"@site/docs/api/instance.md",permalink:"/frontend-docs/docs/api/api_instance",editUrl:"https://github.com/django-stars/frontend-docs/tree/master/docs/api/instance.md",sidebar_label:"Instance",sidebar:"apiSitebar",previous:{title:"API",permalink:"/frontend-docs/docs/api/api_about"},next:{title:"Interceptors",permalink:"/frontend-docs/docs/api/api_interceptors"}},o=[{value:"<del>API</del>",id:"api",children:[{value:"<del>baseURL</del>",id:"baseurl",children:[]},{value:"<del>headers</del>",id:"headers",children:[]},{value:"<del>paramsSerializer</del>",id:"paramsserializer",children:[]},{value:"<del>isMultipartFormData</del>",id:"ismultipartformdata",children:[]}]}],b={rightToc:o};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"You can pass custom configs to new API instance."),Object(r.b)("h2",{id:"api"},Object(r.b)("del",{parentName:"h2"},"API")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { API } from '@ds-frontend/api'\nconst api = new API(configs)\n")),Object(r.b)("p",null,"Where ",Object(r.b)("inlineCode",{parentName:"p"},"configs")," is Object with possible configurations:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"baseURL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"headers"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"paramsSerializer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isMultipartFormData"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fucntion")))),Object(r.b)("h3",{id:"baseurl"},Object(r.b)("del",{parentName:"h3"},"baseURL")),Object(r.b)("p",null,"String option that will set up a base url.\nThis is not required option that will help you not to dublicate everywhere your REST API endpoint. So that if you specify\nbaseURL as ",Object(r.b)("inlineCode",{parentName:"p"},"/api/v1/")," than you can easy send Requests to ",Object(r.b)("inlineCode",{parentName:"p"},"users")," that will be transpailed to ",Object(r.b)("inlineCode",{parentName:"p"},"/api/v1/users")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is recommended to use relative url instead of absolute. That means that set up  baseURL as ",Object(r.b)("inlineCode",{parentName:"p"},"https://my.domain.com/api/v1/")," to not right config and it could be changed to ",Object(r.b)("inlineCode",{parentName:"p"},"/api/v1/")))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Here you can use ",Object(r.b)("inlineCode",{parentName:"p"},"process.env.API_URL")))),Object(r.b)("h3",{id:"headers"},Object(r.b)("del",{parentName:"h3"},"headers")),Object(r.b)("p",null,"This option helps you to define global ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"}),"HTTP headers")," as a JSON Object. For Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { API } from '@ds-frontend/api'\nconst api = new API({\n  headers: {\n    'Accept-Language': 'en' \n  }\n})\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In most cases you should not be worry about ",Object(r.b)("inlineCode",{parentName:"p"},"Content-Type"),". This will be automatically added to all requests based on body and is multipart form data."))),Object(r.b)("h3",{id:"paramsserializer"},Object(r.b)("del",{parentName:"h3"},"paramsSerializer")),Object(r.b)("p",null,"Is function that will convert JSON to query string.\nBy default uses ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/frontend-docs/docs/queryParams/queryParams_about"}),"queryParams.buildQueryParams")),Object(r.b)("h3",{id:"ismultipartformdata"},Object(r.b)("del",{parentName:"h3"},"isMultipartFormData")),Object(r.b)("p",null,"This a function that takes body and should return Boolean to determinate if need to convert JSON to FormData.\nThis is not required config and in default implementation it will determinate FormData if you have ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/File"}),"File")," object in body."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"function isMultipartFormData(body){\n  //return Boolean\n}\n")))}l.isMDXComponent=!0},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?r.a.createElement(u,o({ref:t},l,{components:a})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);