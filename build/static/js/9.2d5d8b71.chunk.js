/*! For license information please see 9.2d5d8b71.chunk.js.LICENSE.txt */
(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[9],{228:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),l=a(35),n=a(41),c=(a(36),a(43),a(14));a(38),a(46);t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,null,"Key Performance Indicators"),s.a.createElement(n.a,null,"Overview"),s.a.createElement("div",{className:"grid gap-2 mb-8 md:grid-cols-4"},s.a.createElement(c.Card,{className:""},s.a.createElement(c.CardBody,null,s.a.createElement("sas-report-object",{objectName:"ve2205",authenticationType:"guest",url:"https://sasserver.demo.sas.com",reportUri:"/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"}))),s.a.createElement(c.Card,null,s.a.createElement(c.CardBody,null,s.a.createElement("sas-report-object",{objectName:"ve4627",authenticationType:"guest",url:"https://sasserver.demo.sas.com",reportUri:"/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"}))),s.a.createElement(c.Card,{className:""},s.a.createElement(c.CardBody,null,s.a.createElement("sas-report-object",{objectName:"ve2196",authenticationType:"guest",url:"https://sasserver.demo.sas.com",reportUri:"/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"}))),s.a.createElement(c.Card,{className:""},s.a.createElement(c.CardBody,null,s.a.createElement("sas-report-object",{objectName:"ve4651",authenticationType:"guest",url:"https://sasserver.demo.sas.com",reportUri:"/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"})))),s.a.createElement("div",{className:"grid gap-6 mb-8 md:grid-cols-2"},s.a.createElement(c.Card,null,s.a.createElement(c.CardBody,{className:""},s.a.createElement("sas-report-object",{style:{height:"350px"},objectName:"ve4637",authenticationType:"guest",url:"https://sasserver.demo.sas.com",reportUri:"/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"}))),s.a.createElement(c.Card,{className:""},s.a.createElement(c.CardBody,{className:""},s.a.createElement("sas-report-object",{style:{height:"350px"},objectName:"ve4661",authenticationType:"guest",url:"https://sasserver.demo.sas.com",reportUri:"/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"})))))}},35:function(e,t,a){"use strict";var r=a(0),s=a.n(r);t.a=function(e){var t=e.children;return s.a.createElement("h1",{className:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},t)}},36:function(e,t,a){"use strict";var r=a(0),s=a.n(r);t.a=function(){return s.a.createElement("a",{className:"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple",href:"https://sasserver.demo.sas.com/SASVisualAnalytics/",target:"_blank"},s.a.createElement("div",{className:"flex items-center"},s.a.createElement("svg",{className:"w-5 h-5 mr-2",fill:"currentColor",viewBox:"0 0 20 20"},s.a.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})),s.a.createElement("span",null,"View these reports on SAS Viya")),s.a.createElement("span",null,"View more ",s.a.createElement("span",{dangerouslySetInnerHTML:{__html:"&RightArrow;"}})))}},41:function(e,t,a){"use strict";var r=a(0),s=a.n(r);t.a=function(e){var t=e.children;return s.a.createElement("h2",{className:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},t)}},43:function(e,t,a){"use strict";var r=a(0),s=a.n(r),l=a(14);t.a=function(e){var t=e.title,a=e.value,r=e.children;return s.a.createElement(l.Card,null,s.a.createElement(l.CardBody,{className:"flex items-center"},r,s.a.createElement("div",null,s.a.createElement("p",{className:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},t),s.a.createElement("p",{className:"text-lg font-semibold text-gray-700 dark:text-gray-200"},a))))}},46:function(e,t,a){"use strict";var r=a(0),s=a.n(r),l=a(47),n=a.n(l);t.a=function(e){var t=e.icon,a=e.iconColorClass,r=void 0===a?"text-purple-600 dark:text-purple-100":a,l=e.bgColorClass,c=void 0===l?"bg-purple-100 dark:bg-purple-600":l,o=e.className,m=n()("p-3 rounded-full",r,c,o);return s.a.createElement("div",{className:m},s.a.createElement(t,{className:"w-5 h-5"}))}},47:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var n=s.apply(null,r);n&&e.push(n)}else if("object"===l)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=9.2d5d8b71.chunk.js.map