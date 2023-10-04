"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[17221],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7896),r=(n(2784),n(30876));const a={title:"Further Exploration: Creating Deep Clones",id:"further-exploration-creating-deep-clones",slug:"further-exploration-creating-deep-clones",hide_table_of_contents:!0,sidebar_position:34,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ia_creating_deep_clones.md"},i=void 0,l={unversionedId:"react/functional-programming-with-javascript/further-exploration-creating-deep-clones",id:"react/functional-programming-with-javascript/further-exploration-creating-deep-clones",title:"Further Exploration: Creating Deep Clones",description:"You will not be expected to create deep clones of objects this course section. However, it's still helpful to know how we might go about creating a deep clone instead of a shallow clone.",source:"@site/docs/react/2_functional-programming-with-javascript/0ia-creating-deep-clones.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/further-exploration-creating-deep-clones",permalink:"/react/functional-programming-with-javascript/further-exploration-creating-deep-clones",draft:!1,tags:[],version:"current",sidebarPosition:34,frontMatter:{title:"Further Exploration: Creating Deep Clones",id:"further-exploration-creating-deep-clones",slug:"further-exploration-creating-deep-clones",hide_table_of_contents:!0,sidebar_position:34,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0ia_creating_deep_clones.md"},sidebar:"react",previous:{title:"Whiteboard Practice: Composition",permalink:"/react/functional-programming-with-javascript/whiteboard-practice-composition"},next:{title:"Build Your Own RPG, Haiku Checker (Two-day Project)",permalink:"/react/functional-programming-with-javascript/build-your-own-rpg-haiku-checker-two-day-project"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You will not be expected to create deep clones of objects this course section. However, it's still helpful to know how we might go about creating a deep clone instead of a shallow clone."),(0,r.kt)("p",null,"As we discussed in the lesson on the spread operator, there isn't native support for deep clones in JavaScript. That being said, there's still a way to do it. It involves combining two JSON methods like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const objectCopy = JSON.parse(JSON.stringify(originalObject));\n")),(0,r.kt)("p",null,"In the example above, we serialize the object into a JSON string. Then we deserialize it back into an object. This breaks the reference to the original object."),(0,r.kt)("p",null,"This is a bit hacky, however. For one, it doesn't look very pretty. It also doesn't work very well with large objects \u2014 and if the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," method doesn't properly serialize everything inside the object, then some information will be lost."),(0,r.kt)("p",null,"The better solution for deep clones is to use an external library. There are multiple options, so we'll just mention a few:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://lodash.com/"},"Lodash")," is a popular utility library that includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"clonedeep()")," function that can be used like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const clonedeep = require('lodash.clonedeep');\n\nconst objectCopy = clonedeep(originalObject);\n")),(0,r.kt)("p",null,"You can include just the Lodash ",(0,r.kt)("inlineCode",{parentName:"p"},"clonedeep")," function in a project with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"npm i lodash.clonedeep\n")),(0,r.kt)("p",null,"Lodash also has a lot of additional functionality as well. For instance, it has a function that can be used to automatically curry functions with multiple arguments. If you find that you want to experiment with other Lodash functionality, you can install it like this instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"npm i lodash\n")),(0,r.kt)("p",null,"In this case, you'd import ",(0,r.kt)("inlineCode",{parentName:"p"},"clonedeep")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const clonedeep = require('lodash/clonedeep');\n")),(0,r.kt)("p",null,"Another very popular tool that focuses on deep clones is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kolodny/immutability-helper"},"immutability-helper"),", which includes an ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," function that creates deep clones. We can use it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const update = require('immutability-helper');\n\nconst objectCopy = update(originalObject, {prop: \"property to update\" });\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"update()")," takes two arguments. The first is the object to be copied. The second is any property that needs to be updated in the copy. This library is commonly used with React but can also be used with vanilla JavaScript."),(0,r.kt)("p",null,"Note that we used ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," statements above \u2014 which works well for Node command line applications. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements to use these libraries as well."))}d.isMDXComponent=!0}}]);