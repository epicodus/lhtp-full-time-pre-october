"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[12933],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(7896),a=(n(2784),n(30876));const s={title:"\ud83d\udcd3 React Components",id:"react-components",slug:"react-components",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_components.md"},r=void 0,i={unversionedId:"react/react-fundamentals/react-components",id:"react/react-fundamentals/react-components",title:"\ud83d\udcd3 React Components",description:"Components are the building blocks of React. Everything in a React application is a component.",source:"@site/docs/react/3_react-fundamentals/0d-components.md",sourceDirName:"react/3_react-fundamentals",slug:"/react/react-fundamentals/react-components",permalink:"/react/react-fundamentals/react-components",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\ud83d\udcd3 React Components",id:"react-components",slug:"react-components",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0d_components.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Using create-react-app",permalink:"/react/react-fundamentals/using-create-react-app"},next:{title:"\ud83d\udcd3 Introduction to JSX",permalink:"/react/react-fundamentals/introduction-to-jsx"}},l={},p=[{value:"Function Components",id:"function-components",level:2},{value:"Class Components",id:"class-components",level:2},{value:"Class Components Have a Constructor",id:"class-components-have-a-constructor",level:3},{value:"Class Components Always Have a Render Method",id:"class-components-always-have-a-render-method",level:3},{value:"Nesting Components",id:"nesting-components",level:2},{value:"React Applications Should Be Modular",id:"react-applications-should-be-modular",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Components are the building blocks of React. Everything in a React application is a component."),(0,a.kt)("p",null,"We will be working with two kinds of components in our applications: ",(0,a.kt)("strong",{parentName:"p"},"function components")," and ",(0,a.kt)("strong",{parentName:"p"},"class components"),". All of the code we write will be added to these components."),(0,a.kt)("p",null,"All React applications have a single root component called ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),". This ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," is a parent component for all the other components in an application. ",(0,a.kt)("inlineCode",{parentName:"p"},"create-react-app")," automatically builds an ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," component for us, though we will always delete it and start from scratch when we build new applications."),(0,a.kt)("h2",{id:"function-components"},"Function Components"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Most of our components will be function components. Here's the basic structure of a function component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nfunction ThisIsAFunctionalComponent(){\n  return (\n    <div>\n      // jsx code goes here\n    </div>\n  );\n}\n\nexport default ThisIsAFunctionalComponent;\n')),(0,a.kt)("p",null,"As we can see in the example above, a function component (also known as a functional component) is just a function that returns code stored inside a div. The code inside the div will be JSX code, which we will cover in the next lesson."),(0,a.kt)("p",null,"We use an ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statement to add the functionality we need. In this case, we need the ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," library. We also ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," the component so that it will be available to the rest of the application. We must always export components \u2014 otherwise, we won't be able to use them elsewhere!"),(0,a.kt)("p",null,"Function components ",(0,a.kt)("strong",{parentName:"p"},"cannot change state in any way"),". They are completely static. For instance, we cannot add code to a function component that conditionally renders a piece of text. That would involve changing something on the page, which means we'd need state."),(0,a.kt)("p",null,"We should always use function components where possible. State can get very complex in a React application, which is exactly why we want to minimize the number of components that use it. That way, we only add state when it's absolutely needed."),(0,a.kt)("p",null,"In fact, it's common practice to build out entirely static sites with placeholders for data and then refactor components to class components as needed. We will follow this practice when building out our Help Queue."),(0,a.kt)("h2",{id:"class-components"},"Class Components"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Class components, on the other hand, are used whenever we need to add state to a component. We won't add class components to our applicatons until later in this course section, but we'll provide a brief overview of how they look now."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\n\nclass ThisIsAClassComponent extends React.Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    return (\n    );\n  }\n}\n\nexport default ThisIsAClassComponent;\n")),(0,a.kt)("p",null,"As we can see, this component isn't a function. Instead, it's a custom class that extends the base functionality of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," class that React provides."),(0,a.kt)("h3",{id:"class-components-have-a-constructor"},"Class Components Have a Constructor"),(0,a.kt)("p",null,"Notice that class components contain a constructor which takes ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," as an argument. We will cover ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," further in a future lesson, but for now just know they are properties we can pass between different components."),(0,a.kt)("p",null,"The constructor in a class component also uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," keyword. ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," is called to access a parent class' constructor. Without using the ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," keyword, our component won't be able to inherit the functionality of the parent ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Component")," class. ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," is plain old JavaScript and isn't specific to React. If you'd like to learn more about the ",(0,a.kt)("inlineCode",{parentName:"p"},"super")," keyword, check out Dan Abramov's great ",(0,a.kt)("a",{parentName:"p",href:"https://overreacted.io/why-do-we-write-super-props/"},"blog article")," on the topic. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"this.state = {};")," is standard convention for declaring state in ES6 React classes. It's a JavaScript object defined in literal notation. It will include state values in the form of key-value pairs."),(0,a.kt)("h3",{id:"class-components-always-have-a-render-method"},"Class Components Always Have a Render Method"),(0,a.kt)("p",null,"Class components must always include a ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method. This method will return any JSX content that React should add to its virtual DOM."),(0,a.kt)("p",null,"Just as with a function component, we use an ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statement to add the functionality we need. In this case, we need the ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," library and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," class."),(0,a.kt)("p",null,"And just as with a function component, we export the component so that it will be available to the rest of the application."),(0,a.kt)("p",null,"Don't worry if the specifics aren't clear yet. We'll get plenty of practice with class components in future lessons. You can always refer back to this lesson for information on the basics of a class component."),(0,a.kt)("h2",{id:"nesting-components"},"Nesting Components"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"As discussed at the beginning of this lesson, React applications have a root component called ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," is a ",(0,a.kt)("strong",{parentName:"p"},"parent")," to all the other components in an application. We could also say that all the other components in an application are the ",(0,a.kt)("strong",{parentName:"p"},"children")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"Component2")," is nested inside ",(0,a.kt)("inlineCode",{parentName:"li"},"Component1"),", we'd say that ",(0,a.kt)("inlineCode",{parentName:"li"},"Component2")," is the child while ",(0,a.kt)("inlineCode",{parentName:"li"},"Component1")," is the parent.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Component1 (Parent)\n    |\nComponent2 (Child)\n")),(0,a.kt)("p",null,"Components can also be siblings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      Component1\n      |        |\nComponent2  Component3\n")),(0,a.kt)("p",null,"In the diagram above, ",(0,a.kt)("inlineCode",{parentName:"p"},"Component2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Component3")," are siblings."),(0,a.kt)("p",null,"We will cover nesting in greater detail in future lessons, but for now, this covers the basics!"),(0,a.kt)("h2",{id:"react-applications-should-be-modular"},"React Applications Should Be Modular"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Before we move on to the next lesson, there is one other important point to note. As we now know, a React application is made up of components. "),(0,a.kt)("p",null,"While it's possible to create an application that has just a few components, each with a lot of code, this is a bad practice."),(0,a.kt)("p",null,"Instead, our goal should be to create many small and modular components. This best practice allows us to fully separate our concerns. We will demonstrate this in greater detail in future lessons."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this lesson, we covered several key points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Function components")," are literally functions that returns a React element. They can't store or alter state. We will mostly write function components.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Class components")," are classes that extend React's ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," class. They must always include a ",(0,a.kt)("inlineCode",{parentName:"p"},"render()")," method that will return a React element. They are used when we need state.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Nesting components")," is a big part of developing with React. Components can be parents, siblings, children or any combination thereof.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Small, modular components")," are the way to go. This makes our code easier to understand and allows us to separate presentational concerns."))),(0,a.kt)("p",null,"If it's still not quite clear what a component is, that's to be expected \u2014 we haven't built one yet! However, building and using components will soon become second nature with React. Now that we understand the basic concepts behind components, we're ready to learn some JSX and actually build our first component."))}m.isMDXComponent=!0}}]);