(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{137:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(t),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||s;return t?r.a.createElement(m,o(o({ref:n},p),{},{components:t})):r.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),s=(t(0),t(137)),i={slug:"cssnano-5-release-notes",title:"cssnano 5 is available",author:"Ludovico Fischer"},o={permalink:"/blog/cssnano-5-release-notes",source:"@site/blog/2021-04-10-cssnano-5.md",title:"cssnano 5 is available",description:"We have released a new major version of cssnano.",date:"2021-04-10T00:00:00.000Z",formattedDate:"April 10, 2021",tags:[],readingTime:1.01,truncated:!1},c=[{value:"Major changes in cssnano 5",id:"major-changes-in-cssnano-5",children:[]},{value:"How to Upgrade",id:"how-to-upgrade",children:[{value:"Update the PostCSS dependency",id:"update-the-postcss-dependency",children:[]},{value:"JavaScript API changes",id:"javascript-api-changes",children:[]}]},{value:"Bug fixes",id:"bug-fixes",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"We have released a new major version of cssnano."),Object(s.b)("h2",{id:"major-changes-in-cssnano-5"},"Major changes in cssnano 5"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"cssnano 5 requires Node.js >= 10.13"),Object(s.b)("li",{parentName:"ul"},"PostCSS 8 API, so cssnano 5 does not emit warnings when running under PostCSS 8 "),Object(s.b)("li",{parentName:"ul"},"updates to SVGO 2, fixing many SVG minification bugs"),Object(s.b)("li",{parentName:"ul"},"updates css-value-parser and css-selector-parser, fixing many bugs")),Object(s.b)("h2",{id:"how-to-upgrade"},"How to Upgrade"),Object(s.b)("h3",{id:"update-the-postcss-dependency"},"Update the PostCSS dependency"),Object(s.b)("p",null,"Add ",Object(s.b)("inlineCode",{parentName:"p"},"postcss")," to your ",Object(s.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(s.b)("inlineCode",{parentName:"p"},"dependencies")," field, if your package manager does not install peer dependencies automatically."),Object(s.b)("h3",{id:"javascript-api-changes"},"JavaScript API changes"),Object(s.b)("p",null,"If you use the cssnano JavaScript API, change your code:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"replace ",Object(s.b)("inlineCode",{parentName:"p"},"cssnano.process()")," with ",Object(s.b)("inlineCode",{parentName:"p"},"cssnano().process()")," (notice the ",Object(s.b)("inlineCode",{parentName:"p"},"()")," after ",Object(s.b)("inlineCode",{parentName:"p"},"cssnano"),")")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"pass cssnano options to ",Object(s.b)("inlineCode",{parentName:"p"},"cssnano()")," instead of ",Object(s.b)("inlineCode",{parentName:"p"},"process()")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"cssnano(cssnanoOptions).process(postcssOptions)\n")),Object(s.b)("h2",{id:"bug-fixes"},"Bug fixes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"fix improperly discarding ",Object(s.b)("inlineCode",{parentName:"li"},"@font-face")," declarations ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/726"},"#726")),Object(s.b)("li",{parentName:"ul"},"partially fix some isues where cssnano did not combine rules when used together with ",Object(s.b)("inlineCode",{parentName:"li"},"postcss-nested")," ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/1004"},"#1004")),Object(s.b)("li",{parentName:"ul"},"fix ",Object(s.b)("inlineCode",{parentName:"li"},"translate3d()")," minification ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/920"},"#920")),Object(s.b)("li",{parentName:"ul"},"fix minification of values starting with ",Object(s.b)("inlineCode",{parentName:"li"},"e")," ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/958"},"#589"),", ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/984"},"#984")),Object(s.b)("li",{parentName:"ul"},"fix minification of percentage vaalues ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/962"},"#962"),", ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/957"},"#957")),Object(s.b)("li",{parentName:"ul"},"fix minification of ",Object(s.b)("inlineCode",{parentName:"li"},"aspect-ratio")," ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/963"},"#963")),Object(s.b)("li",{parentName:"ul"},"fix merging of ",Object(s.b)("inlineCode",{parentName:"li"},"@supports")," rules ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/974"},"#974")),Object(s.b)("li",{parentName:"ul"},"fix sorting of longhand and shorthand properties ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/issues/535"},"#535")),Object(s.b)("li",{parentName:"ul"},"remove vulnerable dependency and always warn with bad SVG input ",Object(s.b)("a",{parentName:"li",href:"https://github.com/cssnano/cssnano/pull/1034"},"#1034"))))}l.isMDXComponent=!0}}]);