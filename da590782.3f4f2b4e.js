(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1),r=(a(0),a(187));const l={id:"i18n_about",title:"i18n",sidebar_label:"i18n"},o={id:"i18n/i18n_about",title:"i18n",description:"Lightweight simple translation module for React apps based on [gettext](https://www.gnu.org/software/gettext/)",source:"@site/docs/i18n/about.md",permalink:"/frontend-docs/docs/i18n/i18n_about",editUrl:"https://github.com/django-stars/frontend-docs/tree/master/docs/i18n/about.md",sidebar_label:"i18n",sidebar:"i18nSitebar"},i=[{value:"<del>Ussage</del>",id:"ussage",children:[]},{value:"<del>TranslateProvider</del>",id:"translateprovider",children:[]},{value:"<del>API</del>",id:"api",children:[{value:"<del>defaultLanguage</del>",id:"defaultlanguage",children:[]},{value:"<del>langKey</del>",id:"langkey",children:[]},{value:"<del>translationsKey</del>",id:"translationskey",children:[]},{value:"<del>storage(required)</del>",id:"storagerequired",children:[]},{value:"<del>url</del>",id:"url",children:[]},{value:"<del>api</del>",id:"api-1",children:[]},{value:"<del>reload</del>",id:"reload",children:[]}]},{value:"<del>gettext(message)</del>",id:"gettextmessage",children:[]},{value:"<del>pgettext(domain, message)</del>",id:"pgettextdomain-message",children:[]},{value:"<del>ngettext(singular, plural, n)</del>",id:"ngettextsingular-plural-n",children:[]},{value:"<del>npgettext(domain, singular, plural, n)</del>",id:"npgettextdomain-singular-plural-n",children:[]},{value:"<del>gettextNoop(message)</del>",id:"gettextnoopmessage",children:[]},{value:"<del>interpolate(message, config, named)</del>",id:"interpolatemessage-config-named",children:[]},{value:"<del>withTranslations (HOC)</del>",id:"withtranslations-hoc",children:[]},{value:"<del>useTranslations (hook)</del>",id:"usetranslations-hook",children:[]},{value:"<del>Translator (render props)</del>",id:"translator-render-props",children:[]}],c={rightToc:i};function b({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Lightweight simple translation module for React apps based on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.gnu.org/software/gettext/"}),"gettext")),Object(r.b)("h2",{id:"ussage"},Object(r.b)("del",{parentName:"h2"},"Ussage")),Object(r.b)("h2",{id:"translateprovider"},Object(r.b)("del",{parentName:"h2"},"TranslateProvider")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import { TranslateProvider } from \'@ds-frontend/i18n\'\nfucntion APP () {\n  return (\n    <TranslateProvider\n      defaultLanguage="en"\n      storage={localStorage}\n      url="jsi18n"\n      api={api}\n    >\n        <Provider .../>\n    </TranslateProvider>\n  )\n}\n')),Object(r.b)("h2",{id:"api"},Object(r.b)("del",{parentName:"h2"},"API")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultLanguage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"'en'")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"langKey"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"'lang'")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"translationsKey"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"'translations'")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"storage"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"api"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"reload"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h3",{id:"defaultlanguage"},Object(r.b)("del",{parentName:"h3"},"defaultLanguage")),Object(r.b)("p",null,"Default language code that will be used when app opened at first time. You can check possible variants ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"}),"here")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"You can use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language"}),"navigator.language")))),Object(r.b)("h3",{id:"langkey"},Object(r.b)("del",{parentName:"h3"},"langKey")),Object(r.b)("p",null,"This is key that could be internally used by storage to cache user preferred language.\nFor example if you are using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage"),"\nThan it will be ",Object(r.b)("inlineCode",{parentName:"p"},"keyName")," in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem"}),"Storage.setItem")),Object(r.b)("h3",{id:"translationskey"},Object(r.b)("del",{parentName:"h3"},"translationsKey")),Object(r.b)("p",null,"This is key that could be internally used by storage to cache remote translations.\nFor example if you are using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage"),"\nThan it will be ",Object(r.b)("inlineCode",{parentName:"p"},"keyName")," in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem"}),"Storage.setItem")),Object(r.b)("h3",{id:"storagerequired"},Object(r.b)("del",{parentName:"h3"},"storage(required)")),Object(r.b)("p",null,"Object for caching data. For more information you can read ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/frontend-docs/docs/cache/cache_middleware#storage"}),"here"),". Or you can create your ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/frontend-docs/docs/cache/cache_middleware#create-own-storage"}),"own storage")),Object(r.b)("h3",{id:"url"},Object(r.b)("del",{parentName:"h3"},"url")),Object(r.b)("p",null,"API endpoint for tranlations.\nThis is common priciple that you should have an API Endpoint that will return translations in JSON formal like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "Between places": {\n    en: "Between places",\n    ru: "\u0432 \u043f\u043e\u0434\u0432\u0435\u0448\u0435\u043d\u043d\u043e\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438",\n  }\n}\n\n')),Object(r.b)("h3",{id:"api-1"},Object(r.b)("del",{parentName:"h3"},"api")),Object(r.b)("p",null,"Instance of ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/frontend-docs/docs/api/api_about"}),"API")),Object(r.b)("h3",{id:"reload"},Object(r.b)("del",{parentName:"h3"},"reload")),Object(r.b)("p",null,"Function that will be used when switching from rtl-ltr to reload page.\nMostly it will be ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Location/reload"}),"Location: reload()")," for Web apps.\nIt is not required function and if you don't need to reload page on switching rtl-ltr, you can skip this option"),Object(r.b)("h2",{id:"gettextmessage"},Object(r.b)("del",{parentName:"h2"},"gettext(message)")),Object(r.b)("p",null,"Returns the localized translation of message, based on the current language."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { gettext } from '@ds-frontend/i18n'\nfunction Title(props){\n    return <h1>{ gettext(\"Hello\") }</h1>\n}\n")),Object(r.b)("h2",{id:"pgettextdomain-message"},Object(r.b)("del",{parentName:"h2"},"pgettext(domain, message)")),Object(r.b)("p",null,"Like gettext(), but looks the message up in the specified domain"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import { pgettext } from \'@ds-frontend/i18n\'\nfunction Title(props){\n    return <h1>{ pgettext("pageid", "Hello") }</h1>\n}\n')),Object(r.b)("h2",{id:"ngettextsingular-plural-n"},Object(r.b)("del",{parentName:"h2"},"ngettext(singular, plural, n)")),Object(r.b)("p",null,"Like gettext(), but consider plural forms. If a translation is found, apply the plural formula to n, and return the resulting message. If no translation is found, return singular if n is 1; return plural otherwise."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import { ngettext } from \'@ds-frontend/i18n\'\nfunction Title(props){\n    return <h1>{ ngettext("Car", "Cars", 2) }</h1>\n}\n')),Object(r.b)("h2",{id:"npgettextdomain-singular-plural-n"},Object(r.b)("del",{parentName:"h2"},"npgettext(domain, singular, plural, n)")),Object(r.b)("p",null,"Like ngettext(), but look the message up in the specified domain."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'import { npgettext } from \'@ds-frontend/i18n\'\nfunction Title(props){\n    return <h1>{ npgettext("loginPage", "Car", "Cars", 2) }</h1>\n}\n')),Object(r.b)("h2",{id:"gettextnoopmessage"},Object(r.b)("del",{parentName:"h2"},"gettextNoop(message)")),Object(r.b)("p",null,"Returns message."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { gettextNoop } from '@ds-frontend/i18n'\nfunction Title(props){\n    return <h1>{ gettextNoop(\"Hello\") }</h1>\n}\n")),Object(r.b)("h2",{id:"interpolatemessage-config-named"},Object(r.b)("del",{parentName:"h2"},"interpolate(message, config, named)")),Object(r.b)("p",null,"The interpolate function supports dynamically populating a format string."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Positional interpolation: obj contains a JavaScript Array object whose elements values are then sequentially interpolated in their corresponding fmt placeholders in the same order they appear.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { gettext, interpolate } from '@ds-frontend/i18n'\nvar fmts = gettext('There are %s objects. Remaining: %s')\n interpolate(fmts, [11, 20]) => 'There are 11 objects. Remaining: 20'\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Named interpolation: This mode is selected by passing the optional boolean named parameter as true. ")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { gettext, interpolate } from '@ds-frontend/i18n'\nconst d = {\n    count: 10,\n    total: 50\n}\nvar fmts = gettext('There are %(count)s of a total of %(total)s objects')\ninterpolate(fmts, d, true) => There are 10 of a total of 50 objects\n")),Object(r.b)("h2",{id:"withtranslations-hoc"},Object(r.b)("del",{parentName:"h2"},"withTranslations (HOC)")),Object(r.b)("p",null,"Hight Order Component to pass transtation props to React component"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { withTranslations } from '@ds-frontend/i18n'\nfunction MyComponent({\n    gettext,\n    pgettext,\n    ngettext,\n    npgettext,\n    setLanguage,\n    language\n}){\n    retrun ...\n}\n\nexport default withTranslations(MyComponent)\n")),Object(r.b)("h2",{id:"usetranslations-hook"},Object(r.b)("del",{parentName:"h2"},"useTranslations (hook)")),Object(r.b)("p",null,"Hook to use transtation in React component"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { useTranslations } from '@ds-frontend/i18n'\nfunction MyComponent(){\n    const { gettext, pgettext, ngettext, npgettext, setLanguage, language } = useTranslations()\n    retrun ...\n}\n")),Object(r.b)("h2",{id:"translator-render-props"},Object(r.b)("del",{parentName:"h2"},"Translator (render props)")),Object(r.b)("p",null,"React component to use tarnslations as Render prop"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import { Translator } from '@ds-frontend/i18n'\nfunction MyComponent(){\n    retrun (\n        <Translator>\n            {({ gettext, pgettext, ngettext, npgettext, setLanguage, language })=>{\n                return <SomeJSX/>\n            }\n        </Translator>\n    )\n}\n")))}b.isMDXComponent=!0},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,g=p["".concat(o,".").concat(u)]||p[u]||d[u]||l;return a?r.a.createElement(g,i({ref:t},b,{components:a})):r.a.createElement(g,i({ref:t},b))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<l;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);