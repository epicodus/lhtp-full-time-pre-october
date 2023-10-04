"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[13054],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7896),a=(n(2784),n(30876));const i={title:"Function Scope Versus Block Scope",id:"function-scope-versus-block-scope",slug:"function-scope-versus-block-scope",hide_table_of_contents:!0,sidebar_position:71,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4e_function_versus_block_scope.md"},r=void 0,l={unversionedId:"introduction-to-programming/javascript-and-web-browsers/function-scope-versus-block-scope",id:"introduction-to-programming/javascript-and-web-browsers/function-scope-versus-block-scope",title:"Function Scope Versus Block Scope",description:"When we first introduced variables, we mentioned that there are differences in how var, let, and const are scoped. At the time, we weren't ready to discuss those differences. Now that we are actively branching, though, we can explore this difference in a little more detail. It's important because there is another layer of scope that goes beyond local and global scope: function scope and block scope. As you read along with the lesson, you are welcome to try out the different code snippets in the DevTools console.",source:"@site/docs/introduction-to-programming/2_javascript-and-web-browsers/4e-function-versus-block-scope.md",sourceDirName:"introduction-to-programming/2_javascript-and-web-browsers",slug:"/introduction-to-programming/javascript-and-web-browsers/function-scope-versus-block-scope",permalink:"/introduction-to-programming/javascript-and-web-browsers/function-scope-versus-block-scope",draft:!1,tags:[],version:"current",sidebarPosition:71,frontMatter:{title:"Function Scope Versus Block Scope",id:"function-scope-versus-block-scope",slug:"function-scope-versus-block-scope",hide_table_of_contents:!0,sidebar_position:71,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/4e_function_versus_block_scope.md"},sidebar:"introduction-to-programming",previous:{title:"Practice: Calculator and More",permalink:"/introduction-to-programming/javascript-and-web-browsers/practice-calculator-and-more"},next:{title:"Debugging in JavaScript: Pausing on Exceptions",permalink:"/introduction-to-programming/javascript-and-web-browsers/debugging-in-javascript-pausing-on-exceptions"}},s={},c=[{value:"Function Scoping",id:"function-scoping",level:2},{value:"Block Scoping",id:"block-scoping",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When we first introduced variables, we mentioned that there are differences in how ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," are scoped. At the time, we weren't ready to discuss those differences. Now that we are actively branching, though, we can explore this difference in a little more detail. It's important because there is another layer of scope that goes beyond local and global scope: function scope and block scope. As you read along with the lesson, you are welcome to try out the different code snippets in the DevTools console."),(0,a.kt)("h2",{id:"function-scoping"},"Function Scoping"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's take a look at a function that includes branching and then illustrate the differences between ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"const"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function doYouLikeApples(bool) {\n  if (bool) {\n    var str = "Apples are delicious!";\n  } else {\n    str = "Maybe oranges would be better.";\n  }\n  return str;\n}\n')),(0,a.kt)("p",null,"In the function above, the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," is available everywhere in the ",(0,a.kt)("inlineCode",{parentName:"p"},"doYouLikeApples()")," function because it is initialized with ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),". As a result, the code above is poorly written and should be refactored to look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function doYouLikeApples(bool) {\n  var str;\n  if (bool) {\n    str = "Apples are delicious!";\n  } else {\n    str = "Maybe oranges would be better.";\n  }\n  return str;\n}\n')),(0,a.kt)("p",null,"The functionality in both of the above examples is exactly the same. With ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),', all variables are "hoisted" to the outermost level of the function. This is called ',(0,a.kt)("strong",{parentName:"p"},"function scoping"),"."),(0,a.kt)("p",null,"However, we should always try to scope all variables as tightly as possible. What if we have a variable that we only need to use inside one conditional block within the ",(0,a.kt)("inlineCode",{parentName:"p"},"if...else")," statement? Take note, a ",(0,a.kt)("strong",{parentName:"p"},"conditional block")," is one condition of an ",(0,a.kt)("inlineCode",{parentName:"p"},"if...else")," statement, including any condition that needs evaluating and any code that should be run if the condition is true. In the above ",(0,a.kt)("inlineCode",{parentName:"p"},"doYouLikeApples()")," function, we have two conditional blocks in the ",(0,a.kt)("inlineCode",{parentName:"p"},"if...else")," statement. Here we've separated each conditional block into two code blocks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'if (bool) {\n  str = "Apples are delicious!";\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'else {\n  str = "Maybe oranges would be better.";\n}\n')),(0,a.kt)("p",null,"So, if we have a variable that we only need to use inside one conditional block and we want to scope all variables as tightly as possible, it would be better if we could only scope the variable to the conditional block instead of to the whole function. ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," doesn't let us do that."),(0,a.kt)("p",null,"This is one of the problems that ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," fix."),(0,a.kt)("h2",{id:"block-scoping"},"Block Scoping"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"What happens if we rewrite our first example above to use ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),"? Well, let's take a look. Be warned \u2014 we are going to see some tricky behavior."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function doYouLikeApples(bool) {\n  if (bool) {\n    let str = "Apples are delicious!";\n  } else {\n    str = "Maybe oranges would be better.";\n  }\n  return str;\n}\n')),(0,a.kt)("p",null,"All we are doing is changing ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," from the first example in this lesson."),(0,a.kt)("p",null,"So what happens if we call ",(0,a.kt)("inlineCode",{parentName:"p"},"doYouLikeApples(true)"),"?"),(0,a.kt)("p",null,"We'll get the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught ReferenceError: str is not defined\n")),(0,a.kt)("p",null,"This is because ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," use ",(0,a.kt)("strong",{parentName:"p"},"block scoping"),"."),(0,a.kt)("p",null,"When we scope to a block, the scope remains inside the curly braces of each conditional statement within the ",(0,a.kt)("inlineCode",{parentName:"p"},"if...else")," statement."),(0,a.kt)("p",null,"In the example above, that means the ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," variable is scoped inside the curly braces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'if (bool) {\n  let str = "Apples are delicious!";\n}\n')),(0,a.kt)("p",null,"When we try to ",(0,a.kt)("inlineCode",{parentName:"p"},"return str"),", we are at a higher level of scope than the block where ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," was defined. For that reason, the variable has fallen out of scope and the function doesn't have access to it."),(0,a.kt)("p",null,"Now let's do something tricky. What do you think happens when we try calling ",(0,a.kt)("inlineCode",{parentName:"p"},"doYouLikeApples(false)"),"?"),(0,a.kt)("p",null,"It will return ",(0,a.kt)("inlineCode",{parentName:"p"},'"Maybe oranges would be better."'),". So what happened?"),(0,a.kt)("p",null,"Well, with ",(0,a.kt)("inlineCode",{parentName:"p"},'str = "Maybe oranges would be better.";')," in the second conditional block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'else {\n  str = "Maybe oranges would be better.";\n}\n')),(0,a.kt)("p",null,"We've created a global variable! Because ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," can be scoped to blocks, when we use ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," a second time, it's not referring to the variable we declared in the first conditional. Even though it has the same name, it's not in the same scope. Instead, a ",(0,a.kt)("em",{parentName:"p"},"new")," variable is created. Because we don't use ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"const"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," to declare it, it defaults to the global scope. We can confirm this in the console by checking the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," after the function has been called. We'll see that ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," retains its value even though the variables inside the function should no longer be in scope."),(0,a.kt)("p",null,"We can still use ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," to have local scope at the outermost level of a function. We just need to do something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function doYouLikeApples(bool) {\n  let str;\n  if (bool) {\n    str = "Apples are delicious!";\n  } else {\n    str = "Maybe oranges would be better.";\n  }\n  return str;\n}\n')),(0,a.kt)("p",null,"Because ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," is being declared at the uppermost level of the function, it can be accessed anywhere in the function."),(0,a.kt)("p",null,"So as we can see, block scoping gives us more granular control over scope, which is a good thing. Since we want to always scope variables as tightly as possible, we should try to scope to the level of the block. Old school JavaScript with ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," doesn't allow that. ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," do."),(0,a.kt)("p",null,"Here's one other little behavior that's different between ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"const"),". It's a little thing, but it's one more way ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," make JavaScript more consistent and developer-friendly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function doYouLikeApples(bool) {\n  if (bool) {\n    str = "Apples are delicious!";\n  } else {\n    str = "Maybe oranges would be better.";\n  }\n  let str;\n  return str;\n}\n')),(0,a.kt)("p",null,"If we call this function, we'll get the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Uncaught ReferenceError: Cannot access 'str' before initialization\n")),(0,a.kt)("p",null,"This makes sense. We aren't defining ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," until ",(0,a.kt)("em",{parentName:"p"},"after")," we use it. Even if that worked, it would be sloppy code and hard to read."),(0,a.kt)("p",null,"However, replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," in the function above and everything works just as if ",(0,a.kt)("inlineCode",{parentName:"p"},"str")," were defined at the beginning of the function. This is because ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," automatically scopes all variables to the level of the function no matter where they are declared. It's not really a convenience at all \u2014 in fact, it's JavaScript being a bit too loosey-goosey. The problem with loosey-goosey code is that it results in annoying bugs."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In this lesson, we covered the difference between block and function scope and a few more reasons why ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," are better than ",(0,a.kt)("inlineCode",{parentName:"p"},"var"),". Block scoping doesn't just apply to conditionals (branching with ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," statements) \u2014 it also applies to ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"},"switch statements")," (another form of branching that we'll cover later in the program) and loops. We won't cover looping until the next section, so don't worry about that yet."),(0,a.kt)("p",null,"When you write functions that include blocks, always consider whether any variables you declare can be scoped more tightly. There is no need to scope a variable to the top level of the function if it's only needed in a block. Paying close attention to this granularity of scope is a key step you can take towards becoming a better programmer."))}u.isMDXComponent=!0}}]);