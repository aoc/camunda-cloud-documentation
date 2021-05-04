(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"Tag",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(454)),i={id:"unclaim-task",title:"unclaimTask"},o={unversionedId:"reference/tasklist-api/mutations/unclaim-task",id:"reference/tasklist-api/mutations/unclaim-task",isDocsHomePage:!1,title:"unclaimTask",description:"<span",source:"@site/docs/reference/tasklist-api/mutations/unclaim-task.mdx",slug:"/reference/tasklist-api/mutations/unclaim-task",permalink:"/docs/reference/tasklist-api/mutations/unclaim-task",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/tasklist-api/mutations/unclaim-task.mdx",version:"current",sidebar:"Reference",previous:{title:"completeTask",permalink:"/docs/reference/tasklist-api/mutations/complete-task"},next:{title:"deprecated",permalink:"/docs/reference/tasklist-api/directives/deprecated"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},l={rightToc:s,Tag:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Unclaim a task with taskId. Returns the task."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"unclaimTask(\n  taskId: String!\n): Task!\n\n")),Object(c.b)("h3",{id:"arguments"},"Arguments"),Object(c.b)("h4",{id:"taskid-string"},Object(c.b)("inlineCode",{parentName:"h4"},"taskId")," (",Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/scalars/string"}),Object(c.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(c.b)("h3",{id:"type"},"Type"),Object(c.b)("h4",{id:"task"},Object(c.b)("a",Object(r.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/objects/task"}),Object(c.b)("inlineCode",{parentName:"a"},"Task"))),Object(c.b)("p",null,"Describes the User task"))}p.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return n?a.a.createElement(b,o(o({ref:t},u),{},{components:n})):a.a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);