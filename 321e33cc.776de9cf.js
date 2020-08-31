(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{102:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,f=b["".concat(i,".").concat(m)]||b[m]||l[m]||c;return r?a.a.createElement(f,o(o({ref:t},p),{},{components:r})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(0),r(102)),i={id:"_urx_src_actions_.emitter",title:"Emitter",sidebar_label:"Emitter"},o={unversionedId:"interfaces/_urx_src_actions_.emitter",id:"interfaces/_urx_src_actions_.emitter",isDocsHomePage:!1,title:"Emitter",description:'Documentation \u203a "urx/src/actions" \u203a Emitter',source:"@site/docs/interfaces/_urx_src_actions_.emitter.md",permalink:"/docs/interfaces/_urx_src_actions_.emitter",editUrl:"https://github.com/petyosi/urx/edit/master/packages/docs/docs/docs/interfaces/_urx_src_actions_.emitter.md",sidebar_label:"Emitter",sidebar:"typedoc",previous:{title:"SystemPropsMap",permalink:"/docs/interfaces/_react_urx_src_index_.systempropsmap"},next:{title:"Publisher",permalink:"/docs/interfaces/_urx_src_actions_.publisher"}},s=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]}],p={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/index"}),"Documentation")," \u203a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/_urx_src_actions_"}),'"urx/src/actions"')," \u203a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.emitter"}),"Emitter")),Object(c.b)("p",null,"An Emitter is the ",Object(c.b)("strong",{parentName:"p"},"output end")," of a Stream. The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/_urx_src_actions_#subscribe"}),"subscribe")," action binds ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.subscription"}),"subscriptions")," to emitters."),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"T")),Object(c.b)("p",null,"the type of values that will be emitted."),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Emitter")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.stream"}),"Stream")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/interfaces/_urx_src_actions_.statefulstream"}),"StatefulStream")))))}u.isMDXComponent=!0}}]);