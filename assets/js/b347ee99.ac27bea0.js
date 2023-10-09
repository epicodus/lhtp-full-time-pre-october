"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[61054],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={title:"\ud83d\udcd3 Introduction to Controllers, Routes and URLs",id:"introduction-to-controllers-routes-and-urls",slug:"introduction-to-controllers-routes-and-urls",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0ja_introduction_to_controllers_routes_and_urls.md"},l=void 0,i={unversionedId:"c-and-net/basic-web-applications/introduction-to-controllers-routes-and-urls",id:"c-and-net/basic-web-applications/introduction-to-controllers-routes-and-urls",title:"\ud83d\udcd3 Introduction to Controllers, Routes and URLs",description:"Now that we can successfully run a project, we're ready to start building our application out further. We'll start by adding a new controller file. This file's job is to receive the requests a user will send the server and return the correct corresponding information to display in the browser.",source:"@site/docs/c-and-net/7_basic-web-applications/0ja-introduction-to-controllers-routes-and-urls.md",sourceDirName:"c-and-net/7_basic-web-applications",slug:"/c-and-net/basic-web-applications/introduction-to-controllers-routes-and-urls",permalink:"/c-and-net/basic-web-applications/introduction-to-controllers-routes-and-urls",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\ud83d\udcd3 Introduction to Controllers, Routes and URLs",id:"introduction-to-controllers-routes-and-urls",slug:"introduction-to-controllers-routes-and-urls",hide_table_of_contents:!0,sidebar_position:10,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0ja_introduction_to_controllers_routes_and_urls.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Building and Running an ASP.NET Core MVC Web App",permalink:"/c-and-net/basic-web-applications/building-and-running-an-aspnet-core-mvc-web-app"},next:{title:"\ud83d\udcd3 Custom URL Paths",permalink:"/c-and-net/basic-web-applications/custom-url-paths"}},s={},p=[{value:"Writing a Controller",id:"writing-a-controller",level:2},{value:"Routes",id:"routes",level:2},{value:"Invoking Routes",id:"invoking-routes",level:2},{value:"More Routes",id:"more-routes",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we can successfully run a project, we're ready to start building our application out further. We'll start by adding a new ",(0,o.kt)("strong",{parentName:"p"},"controller")," file. This file's job is to receive the requests a user will send the server and return the correct corresponding information to display in the browser."),(0,o.kt)("h2",{id:"writing-a-controller"},"Writing a Controller"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you followed along with the previous lessons, you already have a subdirectory called ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers")," within the production directory ",(0,o.kt)("inlineCode",{parentName:"p"},"FriendLetter"),". If not, add one now. Having a ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers")," subdirectory is standard convention within Model-View-Controller (MVC) frameworks. We'll add a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController.cs")," to within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers")," subdirectory."),(0,o.kt)("p",null,"The resulting structure for our ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers")," directory and ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," file should look like this:"),(0,o.kt)("pre",null,"FriendLetter.Solution \u2514\u2500\u2500 FriendLetter \u2514\u2500\u2500 Controllers \u2514\u2500\u2500 HomeController.cs"),(0,o.kt)("p",null,"Let's add code to our new controller file:"),(0,o.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Mvc;\n\nnamespace FriendLetter.Controllers\n{\n  public class HomeController : Controller\n  {\n\n  }\n}\n")),(0,o.kt)("p",null,"We add a ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," statement that imports functionality from the ASP.NET Core MVC package listed in our ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," file. This line imports the ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft.AspNetCore.Mvc")," namespace into our controller, so we have access to ASP.NET Core's built in ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," class. We'll see ",(0,o.kt)("em",{parentName:"p"},"why")," we need access in just a moment."),(0,o.kt)("p",null,"Then we add a ",(0,o.kt)("inlineCode",{parentName:"p"},"FriendLetter.Controllers")," namespace with a class called ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," inside of it. "),(0,o.kt)("p",null,"Notice this syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"class HomeController : Controller\n")),(0,o.kt)("p",null,"By adding ",(0,o.kt)("inlineCode",{parentName:"p"},": Controller")," to our ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," class, we tell our program that ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," should ",(0,o.kt)("strong",{parentName:"p"},"inherit")," or ",(0,o.kt)("strong",{parentName:"p"},"extend")," functionality from ASP.NET Core's built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")," class that we import with our ",(0,o.kt)("inlineCode",{parentName:"p"},"using")," statement."),(0,o.kt)("h2",{id:"routes"},"Routes"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's add a route to our new ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," class."),(0,o.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\n\nnamespace FriendLetter.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    public string Hello() { return "Hello friend!"; }\n\n  }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello()")," method represents a ",(0,o.kt)("strong",{parentName:"p"},"route")," in our application. As we discussed in the ",(0,o.kt)("a",{parentName:"p",href:"/c-and-net/basic-web-applications/how-the-web-works-uniform-resource-locator"},"Uniform Resource Locators (URLS)")," lesson:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("strong",{parentName:"p"},"path")," consists of one or more segments separated by slashes. It provides a name for identifying the specific resource requested.")),(0,o.kt)("p",null,"For instance, we can see all courses on LearnHowToProgram.com by visiting this URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.learnhowtoprogram.com/courses\n")),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"/courses")," is the ",(0,o.kt)("strong",{parentName:"p"},"path"),". "),(0,o.kt)("p",null,"How does this relate to our ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello()")," method? Because the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello()")," method is a ",(0,o.kt)("strong",{parentName:"p"},"route"),", it will create a special path, or ",(0,o.kt)("strong",{parentName:"p"},"pattern"),", in our application. If we were to host this application at ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"http://www.learnhowtoprogram.com"},"www.learnhowtoprogram.com")),", we'd have the following route because of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello()")," method in our ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"www.learnhowtoprogram.com/home/hello\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"path")," is the portion appended to the end of the homepage URL:"),(0,o.kt)("pre",null,"/home/hello"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The first part of the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/home")," corresponds to the name of our controller ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The second part ",(0,o.kt)("inlineCode",{parentName:"p"},"/hello")," corresponds to the name of our route method ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello()"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If we were to host our application at ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"http://www.learnhowtoprogram.com"},"www.learnhowtoprogram.com")),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello()")," method in ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," will run when a user navigates to ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"http://www.learnhowtoprogram.com/home/hello"},"www.learnhowtoprogram.com/home/hello")),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If we revisit our ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/hello")," route, we see it returns the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"Hello friend!"'),". This is called the ",(0,o.kt)("strong",{parentName:"p"},"action"),", because it defines what the site will do when a client requests this particular ",(0,o.kt)("strong",{parentName:"p"},"path"),"."))),(0,o.kt)("h2",{id:"invoking-routes"},"Invoking Routes"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"We can launch our application by running ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run")," in the production directory of our project: ",(0,o.kt)("inlineCode",{parentName:"p"},"FriendLetter.Solution/FriendLetter"),". If the project doesn't have ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," subdirectories, these will be created in the process of running the app with ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet run"),", since that command restores and builds the project before running it."),(0,o.kt)("p",null,"Now we can navigate to the following URL in the browser:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:5000/home/hello\n")),(0,o.kt)("p",null,"The message ",(0,o.kt)("inlineCode",{parentName:"p"},'"Hello friend!"')," will appear. Let's discuss exactly what's happening here."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When a ",(0,o.kt)("strong",{parentName:"p"},"client")," like a web browser makes a ",(0,o.kt)("strong",{parentName:"p"},"request")," to our server, it must include the URL it's requesting. In the example above, the URL contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/hello")," ",(0,o.kt)("strong",{parentName:"p"},"path"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our server looks at the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController")," because it matches the first ",(0,o.kt)("inlineCode",{parentName:"p"},"/home")," portion of the URL path.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In order to find the more specific ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/hello")," data, our server looks for a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello()")," method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The server provides our client with a ",(0,o.kt)("strong",{parentName:"p"},"response"),". In this case, our ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello()")," method returns the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"Hello friend!"'),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Our client receives the response and renders the resources in the browser. We see ",(0,o.kt)("inlineCode",{parentName:"p"},'"Hello friend!"')," appear on the page."))),(0,o.kt)("h2",{id:"more-routes"},"More Routes"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let\u2019s add another route to a page that says ",(0,o.kt)("inlineCode",{parentName:"p"},'"Goodbye friend!"'),". Open ",(0,o.kt)("inlineCode",{parentName:"p"},"HomeController.cs")," and add the following:"),(0,o.kt)("div",{class:"filename"},"FriendLetter/Controllers/HomeController.cs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.AspNetCore.Mvc;\n\nnamespace FriendLetter.Controllers\n{\n  public class HomeController : Controller\n  {\n\n    public string Hello() { return "Hello friend!"; }\n\n    public string Goodbye() { return "Goodbye friend."; }\n\n  }\n}\n')),(0,o.kt)("p",null,"Now we can navigate to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"localhost:5000/home/goodbye\n")),(0,o.kt)("p",null,"This time we should see ",(0,o.kt)("inlineCode",{parentName:"p"},'"Goodbye friend."')),(0,o.kt)("p",null,"In the next lesson, we'll discuss how to further customize the URL paths that match up with specific routes."))}d.isMDXComponent=!0}}]);