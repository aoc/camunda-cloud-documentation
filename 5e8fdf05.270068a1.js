(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,p=s["".concat(l,".").concat(m)]||s[m]||d[m]||c;return a?r.a.createElement(p,i(i({ref:t},u),{},{components:a})):r.a.createElement(p,i({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<c;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},162:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/avatar-menue-multiple-organisations-ad42a0e54882feb5c6cdca44ce1d1ef4.png"},163:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/avatar-menue-368cb6e58487717689dad1f2b56e2105.png"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),c=(a(0),a(112)),l={id:"administrate-account",title:"Administrate your Account"},i={unversionedId:"product-manuals/cloud-console/manage-cloud-account/administrate-account",id:"product-manuals/cloud-console/manage-cloud-account/administrate-account",isDocsHomePage:!1,title:"Administrate your Account",description:"Rights concept",source:"@site/docs/product-manuals/cloud-console/manage-cloud-account/administrate-account.md",slug:"/product-manuals/cloud-console/manage-cloud-account/administrate-account",permalink:"/camunda-cloud-documentation/docs/product-manuals/cloud-console/manage-cloud-account/administrate-account",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/cloud-console/manage-cloud-account/administrate-account.md",version:"current",sidebar:"camundaCloud",previous:{title:"Create Camunda Cloud Account",permalink:"/camunda-cloud-documentation/docs/guides/getting-started/create-camunda-cloud-account"},next:{title:"Create a Cluster",permalink:"/camunda-cloud-documentation/docs/product-manuals/cloud-console/manage-clusters/create-cluster"}},o=[{value:"Rights concept",id:"rights-concept",children:[]},{value:"Organization Settings",id:"organization-settings",children:[{value:"Overview",id:"overview",children:[]},{value:"Users",id:"users",children:[]},{value:"Billing",id:"billing",children:[]}]}],u={rightToc:o};function b(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"rights-concept"},"Rights concept"),Object(c.b)("p",null,"When a user signs up to Camunda Cloud, they receive a personal organization. Clusters that the user creates in this organization are assigned to this organization."),Object(c.b)("p",null,"If several users need access to the same Zeebe cluster, all users can be assigned to the same organization. If a user is assigned to more than one organization, the organization can be changed in the menu of the navigation bar."),Object(c.b)("p",null,Object(c.b)("img",{alt:"avatar-menue-multiple-organisations",src:a(162).default})),Object(c.b)("h2",{id:"organization-settings"},"Organization Settings"),Object(c.b)("p",null,"Organization settings can be accessed via the menu in the navigation bar."),Object(c.b)("p",null,Object(c.b)("img",{alt:"avatar-menue",src:a(163).default})),Object(c.b)("h3",{id:"overview"},"Overview"),Object(c.b)("p",null,"The overview provides a summary of the organization:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Organization name"),Object(c.b)("li",{parentName:"ul"},"Pricing Plan"),Object(c.b)("li",{parentName:"ul"},"Owner of the organization")),Object(c.b)("h3",{id:"users"},"Users"),Object(c.b)("p",null,"Under this setting members of the current organization can be managed. A user can have one of the following roles:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Owner: Owner of the organization (currently limited to one user, cannot be changed by the user)"),Object(c.b)("li",{parentName:"ul"},"Admin: Restricted rights for user management"),Object(c.b)("li",{parentName:"ul"},"Member: Can manage Zeebe Clusters and Client and use Operate")),Object(c.b)("p",null,"The following table illustrates the rights of the each roles:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Owner"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Admin"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Member"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manage Zeebe Clusters"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manage Clients"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use Operate"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Users: Manage Members"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Billing: Manage Reservations"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Billing: Request Paid Plan"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Users: Manage Admins"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.b)("p",null,"Users are invited to a Camunda cloud organisation via their email address, which must be accepted by the user. As long as the invitation has not been accepted, the user remains in the Pending state."),Object(c.b)("p",null,"People can also be invited to an organisation that does not yet have a Camunda cloud account. In this case the invited person must first create a Camunda Cloud account and then has access to the organisation."),Object(c.b)("h3",{id:"billing"},"Billing"),Object(c.b)("p",null,"This setting is only visible in the Professional Plan for Owners and Admins. More about it under ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/camunda-cloud-documentation/docs/product-manuals/cloud-console/manage-plan/professional-plan"}),"Professional Plan"),"."))}b.isMDXComponent=!0}}]);