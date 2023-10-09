"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[23227],{30876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=t[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=t(7896),a=(t(2784),t(30876));const i={title:"\ud83d\udcd3 Other Ways to Organize UI Logic",id:"other-ways-to-organize-ui-logic",slug:"other-ways-to-organize-ui-logic",hide_table_of_contents:!0,sidebar_position:55,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3aa_organizing_UI_logic_outside_of_window_onload.md"},r=void 0,s={unversionedId:"introduction-to-programming/javascript-and-web-browsers/other-ways-to-organize-ui-logic",id:"introduction-to-programming/javascript-and-web-browsers/other-ways-to-organize-ui-logic",title:"\ud83d\udcd3 Other Ways to Organize UI Logic",description:"Not all UI logic should automatically be placed inside of the window.onload event handler! Even though we need to make sure that our page loads before setting up any event handlers, that doesn't mean that all event handler logic needs to be inside of the window.onload event handler. In this lesson, we're going to get a sense of what exactly this means by looking at other configurations for our Mad Libs' UI logic.",source:"@site/docs/introduction-to-programming/2_javascript-and-web-browsers/3aa-organizing-UI-logic-outside-of-window-onload.md",sourceDirName:"introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/other-ways-to-organize-ui-logic",permalink:"/introduction-to-programming/javascript-and-web-browsers/other-ways-to-organize-ui-logic",draft:!1,tags:[],version:"current",sidebarPosition:55,frontMatter:{title:"\ud83d\udcd3 Other Ways to Organize UI Logic",id:"other-ways-to-organize-ui-logic",slug:"other-ways-to-organize-ui-logic",hide_table_of_contents:!0,sidebar_position:55,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3aa_organizing_UI_logic_outside_of_window_onload.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Forms, Hiding and Showing Elements, and the Event Object",permalink:"/introduction-to-programming/javascript-and-web-browsers/forms-hiding-and-showing-elements-and-the-event-object"},next:{title:"\ud83d\udcd3 Debugging in JavaScript: Using console.log()",permalink:"/introduction-to-programming/javascript-and-web-browsers/debugging-in-javascript-using-consolelog"}},l={},u=[{value:"Current Mad Libs&#39; Scripts Organization",id:"current-mad-libs-scripts-organization",level:2},{value:"Other Ways to Organize our UI Logic",id:"other-ways-to-organize-our-ui-logic",level:2},{value:"Configuration 2",id:"configuration-2",level:3},{value:"Configuration #3",id:"configuration-3",level:3},{value:"Summary",id:"summary",level:2}],d={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Not all UI logic should automatically be placed inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler! Even though we need to make sure that our page loads before setting up any event handlers, that doesn't mean that ",(0,a.kt)("em",{parentName:"p"},"all")," event handler logic needs to be inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler. In this lesson, we're going to get a sense of what exactly this means by looking at other configurations for our Mad Libs' UI logic. "),(0,a.kt)("p",null,"The goal of this lesson is to give you ideas of how you can organize your code, and encourage you to start thinking about different ways to organize your code so that it is easier to read and understand. As you read through each code snippet, pay attention to the comments."),(0,a.kt)("h2",{id:"current-mad-libs-scripts-organization"},"Current Mad Libs' Scripts Organization"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Currently, all of our scripts for the Mad Libs project are located within the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler. Review the scripts now, before we move on to looking at other ways to organize our UI logic."),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'window.onload = function() {\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    const person1Input = document.getElementById("person1Input").value;\n    const person2Input = document.getElementById("person2Input").value;\n    const animalInput= document.getElementById("animalInput").value;\n    const exclamationInput = document.getElementById("exclamationInput").value;\n    const verbInput = document.getElementById("verbInput").value;\n    const nounInput = document.getElementById("nounInput").value;\n    \n    document.querySelector("span#person1a").innerText = person1Input;\n    document.querySelector("span#person1b").innerText = person1Input;\n    document.querySelector("span#person1c").innerText = person1Input;\n    document.querySelector("span#person2a").innerText = person2Input;\n    document.querySelector("span#person2b").innerText = person2Input;\n    document.querySelector("span#animal").innerText = animalInput;\n    document.querySelector("span#verb").innerText = verbInput;\n    document.querySelector("span#noun").innerText = nounInput;\n    document.querySelector("span#exclamation").innerText = exclamationInput;\n    \n    document.querySelector("div#story").removeAttribute("class");\n\n    event.preventDefault();\n  };\n};\n')),(0,a.kt)("h2",{id:"other-ways-to-organize-our-ui-logic"},"Other Ways to Organize our UI Logic"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We'll look at two other ways to organize our UI logic, and we'll also address some best practices! Start by reviewing the code snippet below, and remember to pay attention to the comments as you go."),(0,a.kt)("h3",{id:"configuration-2"},"Configuration 2"),(0,a.kt)("div",{class:"filename"},"js/scripts.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// UI Logic \n\n// this function handles getting form values and \n// setting the values for the Mad Libs story\nfunction getAndSetMadLibValues() {\n  // in this section we get the value for each form input\n  const person1Input = document.getElementById("person1Input").value;\n  const person2Input = document.getElementById("person2Input").value;\n  const animalInput= document.getElementById("animalInput").value;\n  const exclamationInput = document.getElementById("exclamationInput").value;\n  const verbInput = document.getElementById("verbInput").value;\n  const nounInput = document.getElementById("nounInput").value;\n  \n  // then we set the story variables to the values we got from the form\n  document.querySelector("span#person1a").innerText = person1Input;\n  document.querySelector("span#person1b").innerText = person1Input;\n  document.querySelector("span#person1c").innerText = person1Input;\n  document.querySelector("span#person2a").innerText = person2Input;\n  document.querySelector("span#person2b").innerText = person2Input;\n  document.querySelector("span#animal").innerText = animalInput;\n  document.querySelector("span#verb").innerText = verbInput;\n  document.querySelector("span#noun").innerText = nounInput;\n  document.querySelector("span#exclamation").innerText = exclamationInput;\n}\n\nwindow.onload = function() {\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    // notice that event.preventDefault() can be located anywhere within \n    // the onsubmit event handler\n    event.preventDefault();\n    // we call the new function in the onsubmit event handler\n    getAndSetMadLibValues();\n    document.querySelector("div#story").removeAttribute("class");\n  };\n};\n')),(0,a.kt)("p",null,"The above scripts now includes a new function called ",(0,a.kt)("inlineCode",{parentName:"p"},"getAndSetMadLibValues()"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This function handles getting the form input values and updating the ",(0,a.kt)("inlineCode",{parentName:"li"},"<span>")," elements in the Mad Libs story with the user inputted values."),(0,a.kt)("li",{parentName:"ul"},"We call this function from within the ",(0,a.kt)("inlineCode",{parentName:"li"},"onsubmit")," event handler.")),(0,a.kt)("p",null,"Notably, we only need to create the event handlers (IE: ",(0,a.kt)("inlineCode",{parentName:"p"},"form.onsubmit"),") inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler, but we don't need to include all of the logic (everything in ",(0,a.kt)("inlineCode",{parentName:"p"},"getAndSetMadLibValues()"),") for that event handler inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler."),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"getAndSetMadLibValues()")," function separates our UI logic by its functionality. The functionality of getting and setting the values for our Mad Libs story is all contained within one function that has a descriptive name. Because of this separation and descriptive naming, our code is a bit more organized and easier to read."),(0,a.kt)("p",null,"Notice the location of ",(0,a.kt)("inlineCode",{parentName:"p"},"getAndSetMadLibValues()")," within our scripts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It's within UI logic. All code that handles accessing or updating the DOM is considered user interface logic. Code that does not access or update the DOM is considered business logic, and we'll see more examples of that in an upcoming lesson."),(0,a.kt)("li",{parentName:"ul"},"It's outside of the ",(0,a.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler. In this case, we don't need to define this function within the ",(0,a.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler. We only need to ",(0,a.kt)("em",{parentName:"li"},"call")," the function inside of the ",(0,a.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler (specifically the ",(0,a.kt)("inlineCode",{parentName:"li"},"onsubmit")," event handler that is located inside of the ",(0,a.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler)."),(0,a.kt)("li",{parentName:"ul"},"It's above the ",(0,a.kt)("inlineCode",{parentName:"li"},"window.onload")," event handler. We always place a function's definition above where we call on that function in our scripts.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Anytime we organize our scripts into multiple functions, we'll follow the best practices listed above.")),(0,a.kt)("h3",{id:"configuration-3"},"Configuration #3"),(0,a.kt)("p",null,"Now let's look at another configuration that builds off of the previous one. Check out the code below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// UI Logic\n\nfunction getAndSetMadLibValues() {\n  const person1Input = document.getElementById("person1Input").value;\n  const person2Input = document.getElementById("person2Input").value;\n  const animalInput= document.getElementById("animalInput").value;\n  const exclamationInput = document.getElementById("exclamationInput").value;\n  const verbInput = document.getElementById("verbInput").value;\n  const nounInput = document.getElementById("nounInput").value;\n  \n  document.querySelector("span#person1a").innerText = person1Input;\n  document.querySelector("span#person1b").innerText = person1Input;\n  document.querySelector("span#person1c").innerText = person1Input;\n  document.querySelector("span#person2a").innerText = person2Input;\n  document.querySelector("span#person2b").innerText = person2Input;\n  document.querySelector("span#animal").innerText = animalInput;\n  document.querySelector("span#verb").innerText = verbInput;\n  document.querySelector("span#noun").innerText = nounInput;\n  document.querySelector("span#exclamation").innerText = exclamationInput;\n}\n\n// this function creates the onsubmit event handler\n// it needs to be called in the window.onload event handler\nfunction setFormSubmissionEventHandler() {\n  let form = document.querySelector("form");\n  form.onsubmit = function(event) {\n    event.preventDefault();\n    getAndSetMadLibValues();\n    document.querySelector("div#story").removeAttribute("class");\n  }\n}\n\nwindow.onload = function() {\n  // inside of the window.onload handler function we only include\n  // the code that we want to run when\n  // the webpage has finished loading all resources\n  setFormSubmissionEventHandler();\n};\n')),(0,a.kt)("p",null,"We now use two functions to organize and separate our UI logic:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setFormSubmissionEventHandler()")," handles creating the event handler for the form submission."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getAndSetMadLibValues()")," does the same thing as when we used it in the last example: after the submission event, it gets the form values and sets the Mad Libs story values.")),(0,a.kt)("p",null,"This new configuration separates our JavaScript UI logic into different functions based on its purpose. Each function is named descriptively so that it communicates what its purpose is in our website's functionality. There are more lines of code now, but this code is arguably more descriptive and easier to read and understand. What do you think?"),(0,a.kt)("p",null,"If the above code organization is harder for you to understand, that is completely okay. Take some time to talk about it with your pair, dev team, or instructor, but don't spend too much time understanding it now. It's not super important as we'll be talking about code organization a lot in future lessons and projects. As always, do what makes sense to you and start exploring the idea of organizing your code into separate functions."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this lesson, we learned that all JS that accesses and manipulates the DOM is considered UI logic, and that we can organize our UI logic into separate functions. Organizing code into separate functions makes our code easier to read and understand. "),(0,a.kt)("p",null,"We also learned that we need to create event handlers (like for form submissions) within the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler, but not all logic for each event handler needs to be inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"window.onload")," event handler. "),(0,a.kt)("p",null,"As you go along in this course section, we want you to start thinking about how you might organize your code in a way that promotes its readability. However, it's important to reiterate that when you are just starting out there's no one right way to code a solution or to organize your code. Do what makes sense to you and don't get hung up on achieving the most efficient or organized solution. As a baseline, make sure to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use descriptive variable and function names."),(0,a.kt)("li",{parentName:"ul"},"Always place a function's definition above where we call on that function in our scripts."),(0,a.kt)("li",{parentName:"ul"},"Use comments to identify what different code does."),(0,a.kt)("li",{parentName:"ul"},'As a starting point, ask yourself "what can I do to make my code easier to read and understand?"')))}p.isMDXComponent=!0}}]);