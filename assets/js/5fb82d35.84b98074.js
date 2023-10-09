"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[60779],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7896),i=(n(2784),n(30876));const a={title:"\u270f\ufe0f Coin Counter, Sieve",id:"coin-counter-sieve",slug:"coin-counter-sieve",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1a_classwork_coin_counter_sieve_old.md"},o=void 0,l={unversionedId:"react/functional-programming-with-javascript/coin-counter-sieve",id:"react/functional-programming-with-javascript/coin-counter-sieve",title:"\u270f\ufe0f Coin Counter, Sieve",description:"Goal: Get comfortable with the basics of functional programming. Practice writing pure functions, closures, curried functions, and recursive functions.",source:"@site/docs/react/2_functional-programming-with-javascript/1a-classwork-coin-counter-sieve-old.md",sourceDirName:"react/2_functional-programming-with-javascript",slug:"/react/functional-programming-with-javascript/coin-counter-sieve",permalink:"/react/functional-programming-with-javascript/coin-counter-sieve",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"\u270f\ufe0f Coin Counter, Sieve",id:"coin-counter-sieve",slug:"coin-counter-sieve",hide_table_of_contents:!0,sidebar_position:21,day:"monday",type:"exercise",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/1a_classwork_coin_counter_sieve_old.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Giving Constructive Feedback",permalink:"/react/functional-programming-with-javascript/giving-constructive-feedback"},next:{title:"\u270f\ufe0f Whiteboard Practice: Closures",permalink:"/react/functional-programming-with-javascript/whiteboard-practice-closures"}},u={},s=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"Coin Counter",id:"coin-counter",level:3},{value:"Part 1",id:"part-1",level:4},{value:"Part 2",id:"part-2",level:4},{value:"Roman Numerals",id:"roman-numerals",level:3},{value:"Prime Sifting",id:"prime-sifting",level:3},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:")," Get comfortable with the basics of functional programming. Practice writing pure functions, closures, curried functions, and recursive functions."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is a pure function? What are some of the benefits of pure functions?"),(0,i.kt)("li",{parentName:"ul"},"What is immutability? Why is it important in functional programming?"),(0,i.kt)("li",{parentName:"ul"},"What is a closure?"),(0,i.kt)("li",{parentName:"ul"},"Why would we want to curry a function?")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"coin-counter"},"Coin Counter"),(0,i.kt)("p",null,"Create a coin counter application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Do not worry about adding a user interface to the application. Instead, focus on writing good tests and functional code."),(0,i.kt)("h4",{id:"part-1"},"Part 1"),(0,i.kt)("p",null,"Create a coin counter function that uses recursion to solve the problem."),(0,i.kt)("h4",{id:"part-2"},"Part 2"),(0,i.kt)("p",null,"Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies). You can use recursion if you like."),(0,i.kt)("h3",{id:"roman-numerals"},"Roman Numerals"),(0,i.kt)("p",null,"You've already had a chance to create an application to convert numbers into Roman numerals. This time, solve the problem recursively!"),(0,i.kt)("p",null,"Roman numerals are based on seven symbols:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Symbol  Value\nI       1\nV       5\nX       10\nL       50\nC       100\nD       500\nM       1,000\n")),(0,i.kt)("p",null,"The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc."),(0,i.kt)("p",null,"The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC."),(0,i.kt)("p",null,"You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC.  You cannot count higher than 3,999 in Roman numerals."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bonus:")," Can you solve this problem using closures and currying?"),(0,i.kt)("h3",{id:"prime-sifting"},"Prime Sifting"),(0,i.kt)("p",null,"You may have solved this problem in C# or Ruby. This time, your goal is to solve it using recursion!"),(0,i.kt)("p",null,"Given a number, write a method that returns all of the prime numbers less than that number."),(0,i.kt)("p",null,"This is a tricky problem and you should use the Sieve of Eratosthenes to solve it. Here's how the Sieve of Eratosthenes works to find a number up to a given ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a list of numbers from 2 through n: 2, 3, 4, ..., ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"."),(0,i.kt)("li",{parentName:"ul"},"Initially, let ",(0,i.kt)("inlineCode",{parentName:"li"},"prime")," equal 2, the first prime number."),(0,i.kt)("li",{parentName:"ul"},"Starting from ",(0,i.kt)("inlineCode",{parentName:"li"},"prime"),", remove all multiples of ",(0,i.kt)("inlineCode",{parentName:"li"},"prime")," from the list."),(0,i.kt)("li",{parentName:"ul"},"Increment ",(0,i.kt)("inlineCode",{parentName:"li"},"prime")," by 1."),(0,i.kt)("li",{parentName:"ul"},"When you reach ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),", all the remaining numbers in the list are primes.")),(0,i.kt)("p",null,"You also might find ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=V08g_lkKj6Q"},"this video")," helpful in explaining the Sieve."),(0,i.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code uses functional programming and does not mutate state."),(0,i.kt)("li",{parentName:"ul"},"Code is well tested."),(0,i.kt)("li",{parentName:"ul"},"Code demonstrates an understanding of closures, recursion, and other functional concepts."),(0,i.kt)("li",{parentName:"ul"},"Application works as expected.")))}m.isMDXComponent=!0}}]);