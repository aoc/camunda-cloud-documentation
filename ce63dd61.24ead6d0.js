(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{374:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(454)),l={id:"workflow-deploy",title:"Deploy a workflow"},c={unversionedId:"product-manuals/clients/java-client-examples/workflow-deploy",id:"product-manuals/clients/java-client-examples/workflow-deploy",isDocsHomePage:!1,title:"Deploy a workflow",description:"Related resources",source:"@site/docs/product-manuals/clients/java-client-examples/workflow-deploy.md",slug:"/product-manuals/clients/java-client-examples/workflow-deploy",permalink:"/docs/product-manuals/clients/java-client-examples/workflow-deploy",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/clients/java-client-examples/workflow-deploy.md",version:"current",sidebar:"Product Manuals",previous:{title:"Java examples",permalink:"/docs/product-manuals/clients/java-client-examples/index"},next:{title:"Create a workflow instance",permalink:"/docs/product-manuals/clients/java-client-examples/workflow-instance-create"}},i=[{value:"Related resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"WorkflowDeployer.java",id:"workflowdeployerjava",children:[]},{value:"demoProcess.bpmn",id:"demoprocessbpmn",children:[]}],p={rightToc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"related-resources"},"Related resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/workflows"}),"Workflow basics")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/bpmn-workflows/bpmn-primer"}),"BPMN introduction"))),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",Object(a.b)("inlineCode",{parentName:"li"},"localhost:26500")," (default)")),Object(a.b)("h2",{id:"workflowdeployerjava"},"WorkflowDeployer.java"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/workflow/WorkflowDeployer.java"}),"Source on github")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'final DeploymentEvent deploymentEvent =\n        client.newDeployCommand()\n            .addResourceFromClasspath("demoProcess.bpmn")\n            .send()\n            .join();\n')),Object(a.b)("h2",{id:"demoprocessbpmn"},"demoProcess.bpmn"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/resources/demoProcess.bpmn"}),"Source on github")),Object(a.b)("p",null,"Download the XML and save it in the Java classpath before running the example. Open the file with Zeebe Modeler for a graphical representation."))}s.isMDXComponent=!0},454:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);