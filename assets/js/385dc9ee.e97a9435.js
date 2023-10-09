"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[85003],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7896),r=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Homework: JavaScript Exception Handling with try...catch",id:"homework-javascript-exception-handling-with-trycatch",slug:"homework-javascript-exception-handling-with-trycatch",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0k_exception_handling_in_javascript.md"},i=void 0,l={unversionedId:"intermediate-javascript/asynchrony-and-apis/homework-javascript-exception-handling-with-trycatch",id:"intermediate-javascript/asynchrony-and-apis/homework-javascript-exception-handling-with-trycatch",title:"\ud83d\udcd3 Homework: JavaScript Exception Handling with try...catch",description:"In this lesson, we're going to familiarize ourselves with a JavaScript exception handling tool called try...catch. This tool can be used for any JavaScript, as well as code that makes API calls. In a future lesson, we'll use a try...catch with an API call, but in this lesson, we'll use it with regular, synchronous JavaScript. So, take the opportunity to absorb the concepts covered here with the understanding that they will be incorporated later in this section.",source:"@site/docs/intermediate-javascript/5_asynchrony-and-apis/0k-exception-handling-in-javascript.md",sourceDirName:"intermediate-javascript/5_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/homework-javascript-exception-handling-with-trycatch",permalink:"/intermediate-javascript/asynchrony-and-apis/homework-javascript-exception-handling-with-trycatch",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\ud83d\udcd3 Homework: JavaScript Exception Handling with try...catch",id:"homework-javascript-exception-handling-with-trycatch",slug:"homework-javascript-exception-handling-with-trycatch",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/0k_exception_handling_in_javascript.md"},sidebar:"intermediate-javascript",previous:{title:"\ud83d\udcd3 The DevTools Network Tab",permalink:"/intermediate-javascript/asynchrony-and-apis/the-devtools-network-tab"},next:{title:"\ud83d\udcd3 Team Week: Project Pitch",permalink:"/intermediate-javascript/asynchrony-and-apis/team-week-project-pitch"}},s={},c=[{value:"Error Handling with <code>try...catch</code>",id:"error-handling-with-trycatch",level:2},{value:"A Demonstration",id:"a-demonstration",level:3},{value:"<code>try...catch</code> with Separated Logic",id:"trycatch-with-separated-logic",level:3},{value:"Remember: Only Use <code>try...catch</code> for Exceptional Errors",id:"remember-only-use-trycatch-for-exceptional-errors",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lesson, we're going to familiarize ourselves with a JavaScript exception handling tool called ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch"),". This tool can be used for any JavaScript, as well as code that makes API calls. In a future lesson, we'll use a ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," with an API call, but in this lesson, we'll use it with regular, synchronous JavaScript. So, take the opportunity to absorb the concepts covered here with the understanding that they will be incorporated later in this section."),(0,r.kt)("h2",{id:"error-handling-with-trycatch"},"Error Handling with ",(0,r.kt)("inlineCode",{parentName:"h2"},"try...catch")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In an ideal world, all our code would function perfectly and never have errors. But in the real world, errors are inevitable. By this point, you've learned how to debug applications with breakpoints and the DevTools console. You've also learned to lint and to continuously test your code with Jest. Let's take this knowledge one step further and learn about exception handling."),(0,r.kt)("p",null,"First, what is an exception? An ",(0,r.kt)("strong",{parentName:"p"},"exception")," is an unusual problem that arises in your code. An exception should be just that: ",(0,r.kt)("em",{parentName:"p"},"exceptional"),'. What does "exceptional" mean? Exceptions should handle ',(0,r.kt)("em",{parentName:"p"},"unexpected")," errors in our code, not ",(0,r.kt)("em",{parentName:"p"},"anticipated")," errors. When a user enters their password incorrectly, that's an ",(0,r.kt)("em",{parentName:"p"},"anticipated")," error. Users often make mistakes, so we shouldn't throw exceptions when they do."),(0,r.kt)("p",null,"However, let's say we have a complex application that handles credit card payments. What would happen if we had a ",(0,r.kt)("inlineCode",{parentName:"p"},"payBalance()")," function that accidentally charged our customers twice? That would be a serious and unexpected error."),(0,r.kt)("p",null,"Similarly, when we make an API call, we expect to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"200 OK")," as a response. However, if we were to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"400")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," level status code (error codes), that would be an exceptional error."),(0,r.kt)("p",null,"Programmers use ",(0,r.kt)("strong",{parentName:"p"},"exception handling")," to deal with serious and unexpected anomalies in their code. Exception handling is a feature of programming languages in general, not just JavaScript. "),(0,r.kt)("p",null,"In JavaScript, we can handle an exception with a ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," block, which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  // Code to try goes here.\n} catch {\n  // Handle or log any raised errors.\n}\n")),(0,r.kt)("p",null,"We can wrap any code inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block. Then, if that code has errors, control will shift to the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block, where we can write code to handle these errors."),(0,r.kt)("p",null,"What do we mean by control? Well, ",(0,r.kt)("strong",{parentName:"p"},"control flow")," is a term used to explain the order a sequence of code will be evaluated. Conditionals change the flow of control in a block of code depending on whether the conditional evaluates to true or false. Likewise, a ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," block can change control flow if an error is thrown, moving the control into the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block."),(0,r.kt)("p",null,"We can't use a ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block by itself; doing so will throw an error. ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," blocks must always be accompanied by either ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"finally"),", or both. We won't cover ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," in depth, other than the fact that a ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," block always runs regardless of whether the ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," block has errors that are caught. ",(0,r.kt)("inlineCode",{parentName:"p"},"finally")," blocks are often used for cleanup or freeing up resources."),(0,r.kt)("h3",{id:"a-demonstration"},"A Demonstration"),(0,r.kt)("p",null,"Let's create a very basic application to demonstrate how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," blocks. The application asks a user to input a number. If the number is negative, the application will throw and catch an error. "),(0,r.kt)("p",null,"Before we start, ",(0,r.kt)("strong",{parentName:"p"},"it's important to note that this is not a situation where we'd use exception handling"),". After all, we expect users to make mistakes. However, we can use this example to show how exception handling works."),(0,r.kt)("p",null,"The root directory of our application will have two files: ",(0,r.kt)("inlineCode",{parentName:"p"},"try.html")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"try.js"),". Note that we aren't using a development environment for this example \u2014 we don't need webpack to demonstrate how ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," blocks work. We will add ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," blocks in a development environment in a future lesson."),(0,r.kt)("p",null,"Here's the HTML:"),(0,r.kt)("div",{class:"filename"},"try.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<html lang="en-US">\n<head>\n  <script type="text/javascript" src="try.js"><\/script>\n  <title>Enter a positive number</title>\n</head>\n<body>\n  <div>\n    <h1>Please enter a whole number above 0</h1>\n    <form>\n      <label for="number">Enter your number:</label>\n      <input id="number" name="number" type="text">\n      <button type="submit" id="submittedNumber">Is your number valid?</button>\n    </form>\n    <div id="displayNumber"></div>\n  </div>\n</body>\n</html>\n')),(0,r.kt)("p",null,"Now let's take a look at the JavaScript code:"),(0,r.kt)("div",{class:"filename"},"try.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// User Interface Logic\nfunction checkNumber(number) {\n  if (isNaN(number) || number < 0) {\n    throw \"Not a valid number!\";\n  } else {\n    document.querySelector('#displayNumber').innerText = \"This number is valid. You may continue.\";\n  }\n}\n\nwindow.addEventListener(\"load\", function() {\n  document.querySelector('#submittedNumber').addEventListener(\"submit\", function(event) {\n    event.preventDefault();\n\n    const inputtedNumber = parseInt(document.querySelector('#number').value);\n    document.querySelector('#number').value = null;\n\n    try {\n      checkNumber(inputtedNumber);\n    } catch(error) {\n      console.error(`Red alert! We have an error: ${error.message}`);\n    } \n  });\n});\n")),(0,r.kt)("p",null,"We'll skip the familiar event handling code and jump right into the new concepts. First, we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"checkNumber()")," function which will check to see if the number is ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," or below 0. If it is, it will ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," an exception. Here's ours:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if (isNaN(number) || number < 0) {\n  throw "Not a valid number!";\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," statement is very similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," in that it ends the current function in which it is called. So, if we included more code below our ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," statement, it would not run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if (isNaN(number) || number < 0) {\n  throw "Not a valid number!";\n  // this console.log is unreachable\n  console.log("Hello!");\n}\n')),(0,r.kt)("p",null,"However, ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," is different from the ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," keyword in that control automatically switches to a ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block, if there is one. If the program can't find a ",(0,r.kt)("inlineCode",{parentName:"p"},"catch"),", the program will simply terminate. So, if we intend to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," keyword effectively, we should always use it with ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch"),". That's just what we do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  checkNumber(inputtedNumber);\n} catch(error) {\n  console.error(`Red alert! We have an error: ${error.message}`);\n} \n")),(0,r.kt)("p",null,"That's the basics of a ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," block. However, there's a few ways we can improve our code: we can turn our ",(0,r.kt)("inlineCode",{parentName:"p"},"checkNumber()")," function into a business logic function, and we can incorporate the JavaScript ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object. In the process, we'll see another way that we can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch"),", and learn about a new operator. "),(0,r.kt)("p",null,"Let's do that next!"),(0,r.kt)("h3",{id:"trycatch-with-separated-logic"},(0,r.kt)("inlineCode",{parentName:"h3"},"try...catch")," with Separated Logic"),(0,r.kt)("p",null,"For this next configuration, we'll only be updating our code in ",(0,r.kt)("inlineCode",{parentName:"p"},"try.js"),". Here's what the new code looks like:"),(0,r.kt)("div",{class:"filename"},"try.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Business Logic\nfunction checkNumber(number) {\n  if (isNaN(number) || number < 0) {\n    return new Error("Not a valid number!");\n  } else {\n    return true;\n  }\n}\n\n// User Interface Logic\nwindow.addEventListener("load", function() {\n  document.querySelector(\'#submittedNumber\').addEventListener("submit", function(event) {\n    event.preventDefault();\n\n    const inputtedNumber = parseInt(document.querySelector(\'#number\').value);\n    document.querySelector(\'#number\').value = null;\n\n    try {\n      const isNumberValid = checkNumber(inputtedNumber);\n      if (isNumberValid instanceof Error) {\n        console.error(isNumberValid.message);\n        throw RangeError("Not a valid number!");\n      } else {\n        console.log("Try was successful, so no need to catch!");\n        document.querySelector(\'#displayNumber\').innerText = "This number is valid. You may continue.";\n      }\n    } catch(error) {\n      console.error(`Red alert! We have an error: ${error.message}`);\n    }\n  });\n});\n')),(0,r.kt)("p",null,"Now in our ",(0,r.kt)("inlineCode",{parentName:"p"},"checkNumber()")," function, if the number is ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," or below 0, we return an ",(0,r.kt)("inlineCode",{parentName:"p"},"Error"),"."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," is a built-in JavaScript object. There are a number of different types of errors that we could specify; for instance, instead of creating a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object, we could create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"RangeError"),". In fact, a ",(0,r.kt)("inlineCode",{parentName:"p"},"RangeError")," would make more sense here because it's more specific. The ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"},"documentation for JavaScript's ",(0,r.kt)("inlineCode",{parentName:"a"},"Error")," object")," states that a ",(0,r.kt)("inlineCode",{parentName:"p"},"RangeError"),' represents "an error that occurs when a numeric variable or parameter is outside of its valid range", and that\'s exactly the case here. Later on in our ',(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," we incorporate a ",(0,r.kt)("inlineCode",{parentName:"p"},"RangeError"),". "),(0,r.kt)("p",null,"Also notice that we pass a string value into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if (isNaN(number) || number < 0) {\n  return new Error("Not a valid number!");\n}\n')),(0,r.kt)("p",null,"We should always pass a value into any ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," objects we create. When the error is raised, we can see this value by looking at its ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," property. Because errors can be very difficult to pinpoint in a larger application, the added detail is essential for debugging."),(0,r.kt)("p",null,"The next update we make is to our ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  const isNumberValid = checkNumber(inputtedNumber);\n  if (isNumberValid instanceof Error) {\n    console.error(isNumberValid.message);\n    throw RangeError("Not a valid number!");\n  } else {\n    console.log("Try was successful, so no need to catch!");\n    document.querySelector(\'#displayNumber\').innerText = "This number is valid. You may continue.";\n  }\n} catch(error) {\n  console.error(`Red alert! We have an error: ${error.message}`);\n}\n')),(0,r.kt)("p",null,"Now we save the result from calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"checkNumber()")," function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"isNumberValid")," variable, and we run that variable through a conditional. In our ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement, we check to see if ",(0,r.kt)("inlineCode",{parentName:"p"},"isNumberValid")," is an ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof Error"),". If so, our application will throw a ",(0,r.kt)("inlineCode",{parentName:"p"},"RangeError"),"."),(0,r.kt)("p",null,"We have a new JavaScript ",(0,r.kt)("strong",{parentName:"p"},"operator")," here: ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof")," operator is specifically used to check the type of a JavaScript object. It does this by looking at the prototype chain of the object, which is a topic beyond the scope of this lesson. "),(0,r.kt)("p",null,"We can test out ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof")," in the DevTools console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> let error = new Error();\n> let error2 = new RangeError();\n> error instanceof Error;\ntrue\n> error2 instanceof Error;\ntrue\n")),(0,r.kt)("p",null,"Both of the last two expressions return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Note that while ",(0,r.kt)("inlineCode",{parentName:"p"},"error2")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"RangeError"),", this object type is also an ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," as well."),(0,r.kt)("p",null,"Also notice that we use ",(0,r.kt)("inlineCode",{parentName:"p"},"console.error()")," in our first ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'try {\n  ...\n  if (isNumberValid instanceof Error) {\n    console.error(isNumberValid.message);\n    throw RangeError("Not a valid number!");\n  }\n} catch {\n  ...\n}\n')),(0,r.kt)("p",null,"You may have stumbled across ",(0,r.kt)("inlineCode",{parentName:"p"},"console.error")," before, but if you haven't, it operates in a similar fashion to ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log"),". The only difference is that the message is outlined in red. There's also ",(0,r.kt)("inlineCode",{parentName:"p"},"console.warn"),", which is generally used for notifications about deprecated functionality."),(0,r.kt)("p",null,"Inside our ",(0,r.kt)("inlineCode",{parentName:"p"},"console.error")," message, we log the ",(0,r.kt)("inlineCode",{parentName:"p"},"error.message"),". If we hadn't passed a string into our ",(0,r.kt)("inlineCode",{parentName:"p"},"Error")," object before, the ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," property would be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," and we'd be depriving ourselves of useful information for debugging."),(0,r.kt)("p",null,"Next, we ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"RangeError")," to ensure that control moves to the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block. Keep in mind that ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," allows developers to define exceptions in an application. "),(0,r.kt)("p",null,"For instance, JavaScript itself doesn't care if we call ",(0,r.kt)("inlineCode",{parentName:"p"},"payBalance()")," twice, charging our customers double in the process. To actually catch that behavior, we'd need to write and throw a custom exception."),(0,r.kt)("p",null,"Also keep in mind that if we ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," an error outside of a ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," block, the program will terminate. That's not really what we want, however. Instead, our application should be able to handle the error gracefully without terminating (unless it's absolutely necessary to terminate)."),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block is the same as it was before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  ...\n} catch(error) {\n  console.error(`Red alert! We have an error: ${error.message}`);\n}\n")),(0,r.kt)("p",null,"Take note that our ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block could handle exceptions in a number of ways. The most obvious (and passive) is to log the error. However, since control has moved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"catch")," block, we could technically run any code we want, including code that allows us to handle the error gracefully without terminating, like displaying a message to the user about the error."),(0,r.kt)("h3",{id:"remember-only-use-trycatch-for-exceptional-errors"},"Remember: Only Use ",(0,r.kt)("inlineCode",{parentName:"h3"},"try...catch")," for Exceptional Errors"),(0,r.kt)("p",null,"It's very simple to incorporate ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," blocks. In fact, it's easy enough that it can be very tempting to start using these blocks to handle many errors, including unexceptional ones. However, this is a mistake for a number of reasons. When developers see a ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," block, they will assume it's for handling serious exceptions. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," blocks in other cases can be confusing. For instance, why would we use ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," for user input when validations are used for that exact purpose?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," can also result in a performance hit. While this usually won't be an issue, it's important to consider, particularly when an application has a long and resource-intensive stack trace that logs all of the function calls that led up to the error."),(0,r.kt)("p",null,"Just as importantly, our code would become both unreadable and very painful to write if we wrapped everything in a ",(0,r.kt)("inlineCode",{parentName:"p"},"try...catch")," block. Think about going through the scanner at the airport. You only need to do that once, when you're going into the terminal, not every time you go to the bathroom!"),(0,r.kt)("p",null,"While the basics of exception handling are relatively easy, knowing when to use exception handling is a more advanced concept that comes with practice. As you build out classwork projects, consider situations where your application might have serious exceptions. You may find opportunities to practice using them even before we incorporate them in a future lesson."))}d.isMDXComponent=!0}}]);