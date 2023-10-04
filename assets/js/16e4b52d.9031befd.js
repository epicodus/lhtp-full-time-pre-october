"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[94636],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var i=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return r?i.createElement(b,o(o({ref:t},u),{},{components:r})):i.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(7896),n=(r(2784),r(30876));const a={title:"Practice: Arithmetic",id:"practice-arithmetic",slug:"practice-arithmetic",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0h_classwork_practice_arithmetic.md"},o=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/practice-arithmetic",id:"introduction-to-programming/javascript-and-web-browsers/practice-arithmetic",title:"Practice: Arithmetic",description:"Goal",source:"@site/docs/introduction-to-programming/2_javascript-and-web-browsers/0h-classwork-practice-arithmetic.md",sourceDirName:"introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/practice-arithmetic",permalink:"/introduction-to-programming/javascript-and-web-browsers/practice-arithmetic",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Practice: Arithmetic",id:"practice-arithmetic",slug:"practice-arithmetic",hide_table_of_contents:!0,sidebar_position:8,day:"weekend",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/0h_classwork_practice_arithmetic.md"},sidebar:"introduction-to-programming",previous:{title:"Arithmetic",permalink:"/introduction-to-programming/javascript-and-web-browsers/arithmetic"},next:{title:"JavaScript Variables",permalink:"/introduction-to-programming/javascript-and-web-browsers/javascript-variables"}},c={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Add:",id:"add",level:4},{value:"Subtract:",id:"subtract",level:4},{value:"Multiply:",id:"multiply",level:4},{value:"Divide:",id:"divide",level:4}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:"),"   In the Arithmetic lesson, we learned:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to access the DevTools Console."),(0,n.kt)("li",{parentName:"ul"},"Addition, subtraction, multiplication, and division using JavaScript operators."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NaN")," means ",(0,n.kt)("em",{parentName:"li"},"not a number")," but is actually considered a type of number. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Infinity")," represents infinity and is also a type of number.")),(0,n.kt)("p",null,"Begin getting comfortable with these concepts by completing the practice exercises listed below. Soon enough, they'll be second nature!"),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Make sure you understand the following before moving on:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is an expression in JavaScript?"),(0,n.kt)("li",{parentName:"ul"},"How can we access the DevTools console?"),(0,n.kt)("li",{parentName:"ul"},"When might we see ",(0,n.kt)("inlineCode",{parentName:"li"},"NaN"),"?")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,'Complete the following exercises to practice arithmetic in JavaScript. If you are with a pair, switch off between every section (i.e.: "Add", "Subtract", etc.) or between every prompt (e.g.: "77 to 99", "99 from 665").'),(0,n.kt)("h4",{id:"add"},"Add:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"77 to 99"),(0,n.kt)("li",{parentName:"ul"},"34 to 1233"),(0,n.kt)("li",{parentName:"ul"},"-53 to 99")),(0,n.kt)("h4",{id:"subtract"},"Subtract:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"99 from 665"),(0,n.kt)("li",{parentName:"ul"},"555 from 23"),(0,n.kt)("li",{parentName:"ul"},"6,348,709,234 from 87,023,984,709,871,234")),(0,n.kt)("h4",{id:"multiply"},"Multiply:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"89 and 54"),(0,n.kt)("li",{parentName:"ul"},"932 and 1,900"),(0,n.kt)("li",{parentName:"ul"},"-34 and 8")),(0,n.kt)("h4",{id:"divide"},"Divide:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1008 by 7"),(0,n.kt)("li",{parentName:"ul"},"9,870,834,205,987 by 324"),(0,n.kt)("li",{parentName:"ul"},"A number by 0."),(0,n.kt)("li",{parentName:"ul"},"0 by 0.")))}m.isMDXComponent=!0}}]);