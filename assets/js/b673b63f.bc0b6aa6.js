"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[14194],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},50757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7896),n=(r(2784),r(30876));const o={title:"\u270f\ufe0f Practice: Triangle Tracker",id:"practice-triangle-tracker",slug:"practice-triangle-tracker",hide_table_of_contents:!0,sidebar_position:74,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4h_classwork_practice_triangle_tracker.md"},i=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/practice-triangle-tracker",id:"introduction-to-programming/javascript-and-web-browsers/practice-triangle-tracker",title:"\u270f\ufe0f Practice: Triangle Tracker",description:"Goal: Practice bringing together everything we've learned in this section by creating a project that includes custom functions, branching, forms, and event listeners.",source:"@site/docs/introduction-to-programming/2_javascript-and-web-browsers/4h-classwork-practice-triangle-tracker.md",sourceDirName:"introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/practice-triangle-tracker",permalink:"/introduction-to-programming/javascript-and-web-browsers/practice-triangle-tracker",draft:!1,tags:[],version:"current",sidebarPosition:74,frontMatter:{title:"\u270f\ufe0f Practice: Triangle Tracker",id:"practice-triangle-tracker",slug:"practice-triangle-tracker",hide_table_of_contents:!0,sidebar_position:74,day:"thursday",type:"exercise",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4h_classwork_practice_triangle_tracker.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Debugging in JavaScript: Using debugger and Breakpoints",permalink:"/introduction-to-programming/javascript-and-web-browsers/debugging-in-javascript-using-debugger-and-breakpoints"},next:{title:"\u270f\ufe0f JavaScript and Web Browsers Independent Project",permalink:"/introduction-to-programming/javascript-and-web-browsers/javascript-and-web-browsers-independent-project"}},s={},c=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Triangle Tracker",id:"triangle-tracker",level:3},{value:"Online Marketplace",id:"online-marketplace",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Goal:")," Practice bringing together everything we've learned in this section by creating a project that includes custom functions, branching, forms, and event listeners."),(0,n.kt)("h2",{id:"warm-up"},"Warm Up"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is block scoping? Which variable initializers allows us to scope variables to a block? "),(0,n.kt)("li",{parentName:"ul"},"Pausing on exceptions and setting breakpoints are both powerful tools from the browser DevTools debugger. When would we choose to set breakpoints to debug our code instead of the pausing on exceptions tool? ")),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("hr",null),(0,n.kt)("p",null,'Everyone should complete the "Triangle Tracker" project first. Once you\'ve completed it and have more time in class, build the "Online Marketplace" project.'),(0,n.kt)("h3",{id:"triangle-tracker"},"Triangle Tracker"),(0,n.kt)("p",null,"Make a web page that allows the user to input the lengths of the sides of a triangle, and returns whether these sides form an equilateral, isosceles, or scalene triangle, or if the sides cannot make a triangle at all. Here are the definitions of each possibility:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Equilateral: all sides are equal."),(0,n.kt)("li",{parentName:"ul"},"Isosceles: exactly 2 sides are equal."),(0,n.kt)("li",{parentName:"ul"},"Scalene: no sides are equal."),(0,n.kt)("li",{parentName:"ul"},"NOT a triangle: the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.")),(0,n.kt)("p",null,"In your code, make sure to use the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"pausing on exceptions and breakpoints to debug"),(0,n.kt)("li",{parentName:"ul"},"event listeners with function declarations")),(0,n.kt)("p",null,"Once your application is functioning correctly, try to refactor your code as much as possible to make your code easy to understand and read, and so that your UI and business logic is separated."),(0,n.kt)("p",null,"Optionally, add CSS to your Triangle Tracker. If you haven't already, try using Bootstrap!"),(0,n.kt)("h3",{id:"online-marketplace"},"Online Marketplace"),(0,n.kt)("p",null,"Create a website that sells a specific product. Create a form that allows buyers to select a product to purchase. If your online marketplace sells jewelry, include form fields denoting whether they're ordering a bracelet, necklace, or earrings. Make sure to take in the buyer's shipping and payment information in this form."),(0,n.kt)("p",null,"When the buyer submits the form, use branching to add a discount to the order based on what the user has selected to purchase. You can make this as complicated or as simple as you like."),(0,n.kt)("p",null,"Then, display a receipt with all of the order information back to the user, including the discounted price. "),(0,n.kt)("p",null,"As you code, make sure to use the debugging tools you have learned about in this course section."),(0,n.kt)("p",null,"Once your application is functioning correctly, try to refactor your code as much as possible to make your code easy to understand and read, and so that your UI and business logic is separated."),(0,n.kt)("p",null,"Add CSS to your online store to make it look more professional or inviting. Or add a stylistic theme that matches whatever your store is selling."))}d.isMDXComponent=!0}}]);