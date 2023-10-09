"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[67101],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7896),o=(n(2784),n(30876));const r={title:"\ud83d\udcd3 Introduction to date-fns",id:"introduction-to-date-fns",slug:"introduction-to-date-fns",hide_table_of_contents:!0,sidebar_position:26,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3b_introduction_to_datefns.md"},i=void 0,l={unversionedId:"react/react-with-redux/introduction-to-date-fns",id:"react/react-with-redux/introduction-to-date-fns",title:"\ud83d\udcd3 Introduction to date-fns",description:"Note: You are not expected to incorporate any of the concepts from the homework on the date-fns library for the independent project.",source:"@site/docs/react/4_react-with-redux/3b-introduction-to-datefns.md",sourceDirName:"react/4_react-with-redux",slug:"/react/react-with-redux/introduction-to-date-fns",permalink:"/react/react-with-redux/introduction-to-date-fns",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"\ud83d\udcd3 Introduction to date-fns",id:"introduction-to-date-fns",slug:"introduction-to-date-fns",hide_table_of_contents:!0,sidebar_position:26,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/3b_introduction_to_datefns.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Action Constants",permalink:"/react/react-with-redux/action-constants"},next:{title:"\ud83d\udcd3 Component Lifecycle Methods",permalink:"/react/react-with-redux/component-lifecycle-methods"}},c={},s=[{value:"date-fns",id:"date-fns",level:3}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," You are not expected to incorporate any of the concepts from the homework on the date-fns library for the independent project."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Over the next several lessons, we will add a key piece of functionality to our Help Queue. Users will be able to see how long a ticket has been open, just like with the Epicodus Help Queue."),(0,o.kt)("p",null,"In this lesson, we'll learn about ",(0,o.kt)("a",{parentName:"p",href:"https://date-fns.org/"},"date-fns"),", a modern JavaScript date utility library used for managing time and dates."),(0,o.kt)("p",null,"Then, in the next lesson, we'll learn about a React component's lifecycle \u2014 and how to write lifecycle methods."),(0,o.kt)("p",null,"Finally, we'll put all the pieces together and add this functionality to our Help Queue project."),(0,o.kt)("h3",{id:"date-fns"},"date-fns"),(0,o.kt)("p",null,"date-fns is a popular JavaScript library for working with dates and time. We can use date-fns to manipulate and parse time \u2014 which is exactly what we'll use it for."),(0,o.kt)("p",null,"We'll start by adding it to our project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install date-fns@2\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://date-fns.org/docs/Getting-Started"},"documentation for date-fns")," is extensive, and there are many helper functions available. We recommend checking it out \u2014 there are many use cases where it can add valuable functionality to an application."),(0,o.kt)("p",null,"When we import date-fns into a component where we needed it, we'll need to import the specific tool we want to use. We'll use ",(0,o.kt)("a",{parentName:"p",href:"https://date-fns.org/v2.29.1/docs/formatDistanceToNow"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"formatDistanceToNow")," helper function"),", which we'll import with the following import statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { formatDistanceToNow } from 'date-fns';\n")),(0,o.kt)("p",null,"Then we can use that helper in our code as needed. This is how we'll use this function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"formatDistanceToNow(new Date(), {\n  addSuffix: true\n});\n")),(0,o.kt)("p",null,"In our case, we are only interested in seeing how much time has elapsed since a ticket was added to the queue, and this is what ",(0,o.kt)("inlineCode",{parentName:"p"},"formatDistanceToNow()")," does. If a ticket was put in seven minutes ago, the output from date-fns will be ",(0,o.kt)("inlineCode",{parentName:"p"},"7 minutes ago"),". We can remove the suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"ago")," by calling not passing in the second argument to the helper function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"formatDistanceToNow(new Date());\n")),(0,o.kt)("p",null,"Also notice that our first argument makes use of the JavaScript ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," object. A JavaScript-formatted date is all that ",(0,o.kt)("inlineCode",{parentName:"p"},"formatDistanceToNow()")," needs to work! When we call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," constructor, it will return the date and time, with the time zone matching what our computer is set to. "),(0,o.kt)("p",null,"For our particular use case in our Help Queue, this is all we need to know about date-fns. We need to be able to create track when a ticket was initially created and then we need to check to see how much time has passed since the ticket was put in."),(0,o.kt)("p",null,"Now that we know a little about date-fns, we're ready to take a closer look at the lifecycle of React components \u2014 as well as lifecycle methods we can use to automatically update a React component. We'll do that in the next lesson."))}p.isMDXComponent=!0}}]);