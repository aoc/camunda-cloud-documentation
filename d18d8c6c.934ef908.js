(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,b=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},113:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},117:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},118:function(e,t,n){"use strict";var r=n(0),a=n(117);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},120:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(118),c=n(113),i=n(47),l=n.n(i),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,d=e.values,f=e.groupId,p=Object(o.a)(),b=p.tabGroupChoices,m=p.setTabGroupChoices,O=Object(r.useState)(i),h=O[0],v=O[1],y=Object(r.useState)(!1),C=y[0],g=y[1];if(null!=f){var j=b[f];null!=j&&j!==h&&d.some((function(e){return e.value===j}))&&v(j)}var w=function(e){v(e),null!=f&&m(f,e)},P=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},k=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",k)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),style:C?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),T(e)},onFocus:function(){return w(t)},onClick:function(){w(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===h}))[0]))}},121:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(2),a=n(6),o=(n(0),n(112)),c=n(120),i=n(121),l={id:"cloud-console-api-clients",title:"Console API Clients"},u={unversionedId:"reference/cloud-console-api/cloud-console-api-clients",id:"reference/cloud-console-api/cloud-console-api-clients",isDocsHomePage:!1,title:"Console API Clients",description:"To interact with Camunda Cloud programmatically, without using the Camunda Cloud frontend, you can create Cloud API Clients.",source:"@site/docs/reference/cloud-console-api/cloud-console-api-clients.md",slug:"/reference/cloud-console-api/cloud-console-api-clients",permalink:"/camunda-cloud-documentation/docs/reference/cloud-console-api/cloud-console-api-clients",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/cloud-console-api/cloud-console-api-clients.md",version:"current",sidebar:"camundaCloud",previous:{title:"Overview Reference",permalink:"/camunda-cloud-documentation/docs/reference/"},next:{title:"Console API Reference (REST)",permalink:"/camunda-cloud-documentation/docs/reference/cloud-console-api/cloud-console-api-reference"}},s=[],d={rightToc:s};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To interact with Camunda Cloud programmatically, without using the Camunda Cloud frontend, you can create Cloud API Clients."),Object(o.b)("p",null,"Cloud API Clients are created for an Organization, an therefore can access all Zeebe Clusters of this Organization."),Object(o.b)("p",null,"You can create Cloud API Clients in the Organization Setting."),Object(o.b)("p",null,"A Client can have one or multiple of the following permissions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Get Clusters (Retrieve information of all Clusters of the Organization)"),Object(o.b)("li",{parentName:"ul"},"Create Clusters (Create a cluster for the Organization)"),Object(o.b)("li",{parentName:"ul"},"Delete Clusters (Delete a cluster of the Organization)"),Object(o.b)("li",{parentName:"ul"},"Get Zeebe Clients (Retieve all Zeebe Clients of the Organization)"),Object(o.b)("li",{parentName:"ul"},"Create Zeebe Clients (Create a Zeebe Client for a Cluster of the Organization)"),Object(o.b)("li",{parentName:"ul"},"Delete Zeebe Clients (Delete a Zeebe Client of a Cluster owned by the Organization)")),Object(o.b)("p",null,"After a Cloud API Client is created, the Client Secret is only shown once! Please write it down somewhere save!"),Object(o.b)("p",null,"To retrieve a access token for the Cloud API Client:"),Object(o.b)(c.a,{defaultValue:"curl",values:[{label:"cURL",value:"curl"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"curl",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{"grant_type"="client_credentials", "audience"="api.cloud.camunda.io", "client_id"="XXX", "client_secret"="YYY"}\' \\\n    https://login.cloud.camunda.io/oauth/token\n')))),Object(o.b)("p",null,"Please note:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Access tokens have a validity period that can be found in the access token. After this time a new Access Token must be requested."),Object(o.b)("li",{parentName:"ul"},"The Auth Service has a built-in rate limiting. If too many token requests are executed in a short time, the client is blocked for a certain time. Since the access tokens have a certain validity period, they must be cached on the client side.")))}f.isMDXComponent=!0}}]);