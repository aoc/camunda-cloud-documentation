(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{377:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),s=n(7),b=(n(0),n(454)),o={id:"embedded-subprocesses",title:"Embedded Subprocess"},l={unversionedId:"product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses",id:"version-0.25/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses",isDocsHomePage:!1,title:"Embedded Subprocess",description:"An embedded subprocess allows to group elements of the workflow.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses.md",slug:"/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/subprocesses"},next:{title:"Call Activities",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/call-activities/call-activities"}},c=[{value:"Variable Mappings",id:"variable-mappings",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],a={rightToc:c};function d(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},a,o,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"An embedded subprocess allows to group elements of the workflow."),Object(b.b)("p",null,Object(b.b)("img",{alt:"embedded-subprocess",src:n(818).default})),Object(b.b)("p",null,"An embedded subprocess must have exactly one none start event. Other start events are not allowed.  "),Object(b.b)("p",null,"When an embedded subprocess is entered then the start event gets activated. The subprocess stays active as long as one containing element is active. When the last element is completed then the subprocess gets completed and the outgoing sequence flow is taken."),Object(b.b)("p",null,"Embedded subprocesses are often used together with ",Object(b.b)("strong",{parentName:"p"},"boundary events"),". One or more boundary events can be attached to an subprocess. When an interrupting boundary event is triggered then the whole subprocess including all active elements gets terminated. "),Object(b.b)("h2",{id:"variable-mappings"},"Variable Mappings"),Object(b.b)("p",null,"Input mappings can be used to create new local variables in the scope of the subprocess. These variables are only visible within the subprocess."),Object(b.b)("p",null,"By default, the local variables of the subprocess are not propagated (i.e. they are removed with the scope). This behavior can be customized by defining output mappings at the subprocess. The output mappings are applied on completing the subprocess."),Object(b.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(b.b)("details",null,Object(b.b)("summary",null,"XML representation"),Object(b.b)("p",null,"An embedded subprocess with a start event:",Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<bpmn:subProcess id="process-order" name="Process Order">\n  <bpmn:startEvent id="order-placed" />\n  ... more contained elements ...\n</bpmn:subProcess>\n')))),Object(b.b)("details",null,Object(b.b)("summary",null,"Using the BPMN modeler"),Object(b.b)("p",null,"Adding an embedded subprocess:",Object(b.b)("p",null,Object(b.b)("img",{alt:"event-based-gateway",src:n(819).default})," "))),Object(b.b)("details",null,Object(b.b)("summary",null,"Workflow Lifecycle"),Object(b.b)("p",null,"Workflow instance records of an embedded subprocess:",Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Intent"),Object(b.b)("th",null,"Element Id"),Object(b.b)("th",null,"Element Type")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_ACTIVATING"),Object(b.b)("td",null,"process-order"),Object(b.b)("td",null,"SUB_PROCESS")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_ACTIVATED"),Object(b.b)("td",null,"process-order"),Object(b.b)("td",null,"SUB_PROCESS")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_ACTIVATING"),Object(b.b)("td",null,"order-placed"),Object(b.b)("td",null,"START_EVENT")),Object(b.b)("tr",null,Object(b.b)("td",null,"..."),Object(b.b)("td",null,"..."),Object(b.b)("td",null,"...")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_COMPLETED"),Object(b.b)("td",null,"items-fetched"),Object(b.b)("td",null,"END_EVENT")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_COMPLETING"),Object(b.b)("td",null,"process-order"),Object(b.b)("td",null,"SUB_PROCESS")),Object(b.b)("tr",null,Object(b.b)("td",null,"ELEMENT_COMPLETED"),Object(b.b)("td",null,"process-order"),Object(b.b)("td",null,"SUB_PROCESS"))))),Object(b.b)("p",null,"References:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.25/product-manuals/zeebe/reference/variables#inputoutput-variable-mappings"}),"Variable Mappings"))))}d.isMDXComponent=!0},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=s.a.createContext({}),d=function(e){var t=s.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return s.a.createElement(a.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},p=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,o=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||i[p]||b;return n?s.a.createElement(m,l(l({ref:t},a),{},{components:n})):s.a.createElement(m,l({ref:t},a))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,o=new Array(b);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var a=2;a<b;a++)o[a]=n[a];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},818:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/embedded-subprocess-8fd375199fd19cefe18281ecda0759b6.png"},819:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/embedded-subprocess-5908fdc9ecad970be2e7af35b6039fa5.gif"}}]);