"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[83140],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7896),i=(a(2784),a(30876));const r={title:"OpenWeather API, Giphy API",id:"openweather-api-giphy-api",slug:"openweather-api-giphy-api",hide_table_of_contents:!0,sidebar_position:16,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1a_classwork_open_weather_giphy_api.md"},o=void 0,l={unversionedId:"intermediate-javascript/asynchrony-and-apis/openweather-api-giphy-api",id:"intermediate-javascript/asynchrony-and-apis/openweather-api-giphy-api",title:"OpenWeather API, Giphy API",description:"Goal:  Practice making API calls in JavaScript. Start by following along with the pre-work and then build out a basic application that uses an API call. Your projects should include full development environments, a .env file for sensitive API variables, and complete README instructions, including instructions for setting up an API key as needed. Make sure to practice parsing JSON and API call error handling, too.",source:"@site/docs/intermediate-javascript/5_asynchrony-and-apis/1a-classwork-open-weather-giphy-api.md",sourceDirName:"intermediate-javascript/5_asynchrony-and-apis",slug:"/intermediate-javascript/asynchrony-and-apis/openweather-api-giphy-api",permalink:"/intermediate-javascript/asynchrony-and-apis/openweather-api-giphy-api",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"OpenWeather API, Giphy API",id:"openweather-api-giphy-api",slug:"openweather-api-giphy-api",hide_table_of_contents:!0,sidebar_position:16,day:"tuesday",type:"exercise",url:"https://github.com/epicodus-curriculum/javascript-full-stack/blob/main/1a_classwork_open_weather_giphy_api.md"},sidebar:"intermediate-javascript",previous:{title:"Journal #6",permalink:"/intermediate-javascript/asynchrony-and-apis/journal-6"},next:{title:"Tools for Handling Async Code",permalink:"/intermediate-javascript/asynchrony-and-apis/tools-for-handling-async-code"}},s={},p=[{value:"Warm Up",id:"warm-up",level:2},{value:"Code",id:"code",level:2},{value:"OpenWeather API",id:"openweather-api",level:3},{value:"Giphy API",id:"giphy-api",level:3},{value:"Project Requirements",id:"project-requirements",level:4},{value:"Functionality",id:"functionality",level:4},{value:"Trivia Flash Cards",id:"trivia-flash-cards",level:3},{value:"Project Requirements",id:"project-requirements-1",level:4},{value:"Functionality",id:"functionality-1",level:4},{value:"Peer Code Review",id:"peer-code-review",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Goal:"),"  Practice making API calls in JavaScript. Start by following along with the pre-work and then build out a basic application that uses an API call. Your projects should include full development environments, a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file for sensitive API variables, and complete README instructions, including instructions for setting up an API key as needed. Make sure to practice parsing JSON and API call error handling, too."),(0,i.kt)("h2",{id:"warm-up"},"Warm Up"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is the difference between synchronous and asynchronous code?"),(0,i.kt)("li",{parentName:"ul"},"What does it mean for JavaScript to be single-threaded and non-blocking?"),(0,i.kt)("li",{parentName:"ul"},"What does API stand for? "),(0,i.kt)("li",{parentName:"ul"},"What are some differences between Web APIs and third-party APIs?"),(0,i.kt)("li",{parentName:"ul"},"What is an HTTP status code?"),(0,i.kt)("li",{parentName:"ul"},"Name two tools that we can use to add error handling for API calls.")),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"openweather-api"},"OpenWeather API"),(0,i.kt)("p",null,"Follow along with the weekend homework to build out a basic application that works with the OpenWeather API. Once you've finished the weekend homework, incorporate the following functionality in your application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add additional information beyond temperature and humidity so that users get a full picture of the weather forecast. Convert the temperature into Fahrenheit, too."),(0,i.kt)("li",{parentName:"ul"},"Allow users to search by other options beyond ",(0,i.kt)("inlineCode",{parentName:"li"},"city"),"."),(0,i.kt)("li",{parentName:"ul"},"Check out other OpenWeather API endpoints and add additional code to your application so that users can query the API for other interesting data."),(0,i.kt)("li",{parentName:"ul"},"Use the DevTools ",(0,i.kt)("em",{parentName:"li"},"Network")," tab to look at the API response object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional:")," Try adding a ",(0,i.kt)("inlineCode",{parentName:"li"},"try...catch")," block to handle API errors. ",(0,i.kt)("em",{parentName:"li"},"Don't")," look at future lessons on how to do this. A big part of being a developer is figuring out how to combine different tools in an application. This is a good opportunity to practice! ",(0,i.kt)("strong",{parentName:"li"},"Hint:")," You'll want to throw an error if the API call is not successful.")),(0,i.kt)("h3",{id:"giphy-api"},"Giphy API"),(0,i.kt)("p",null,"Create an application that allows users to search ",(0,i.kt)("a",{parentName:"p",href:"https://developers.giphy.com/docs/api/"},"Giphy")," for interesting GIFs. Make sure to carefully read Giphy's documentation as you build out your application."),(0,i.kt)("h4",{id:"project-requirements"},"Project Requirements"),(0,i.kt)("p",null,"Make sure that your project has the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A fully functioning webpack environment."),(0,i.kt)("li",{parentName:"ul"},"Testing the API via Postman before coding."),(0,i.kt)("li",{parentName:"ul"},"An API key protected via a ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,i.kt)("li",{parentName:"ul"},"Error handling for the API call.")),(0,i.kt)("h4",{id:"functionality"},"Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, build out your application to allow users to search for GIFs using a keyword. "),(0,i.kt)("li",{parentName:"ul"},"At some point, use the DevTools ",(0,i.kt)("em",{parentName:"li"},"Network")," tab at least once to look at the API response object."),(0,i.kt)("li",{parentName:"ul"},"Next, add functionality so your users can see trending content from Giphy."),(0,i.kt)("li",{parentName:"ul"},"Finally, add a button that users can click to randomly see a GIF from Giphy."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Very challenging:")," Add functionality so a user can upload content to Giphy. Note that the free tier only allows users to upload 10 files per day. You can apply for a production key if you'd like the option to add more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional:")," Try adding a ",(0,i.kt)("inlineCode",{parentName:"li"},"try...catch")," block to handle API errors without looking at future lessons on how to do this. Once again, this is good practice.")),(0,i.kt)("h3",{id:"trivia-flash-cards"},"Trivia Flash Cards"),(0,i.kt)("p",null,"Create a trivia flash card application using a ",(0,i.kt)("a",{parentName:"p",href:"https://www.programmableweb.com/category/trivia/api"},"trivia API listed here")," or another API such as the ",(0,i.kt)("a",{parentName:"p",href:"https://opentdb.com/api_config.php"},"Open Trivia Database"),". Note that these APIs haven't been vetted... This is where you need to do some research on your own, try out API calls with Postman, and determine whether an API is a good fit for your project. Once you've found an API and verified that you can make API calls with Postman, build out the project to include the following:"),(0,i.kt)("h4",{id:"project-requirements-1"},"Project Requirements"),(0,i.kt)("p",null,"Make sure that your project has the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A fully functioning webpack environment."),(0,i.kt)("li",{parentName:"ul"},"An API key protected via a ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file."),(0,i.kt)("li",{parentName:"ul"},"Testing the API key via Postman before coding."),(0,i.kt)("li",{parentName:"ul"},"Error handling for the API call."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional:")," Try adding a ",(0,i.kt)("inlineCode",{parentName:"li"},"try...catch")," block to handle API errors without looking at future lessons on how to do this. Once again, this is good practice.")),(0,i.kt)("h4",{id:"functionality-1"},"Functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, query the API to get one (or multiple) trivia questions and answers."),(0,i.kt)("li",{parentName:"ul"},"Next, populate a series of cards with trivia questions. A user should be able to click on a trivia question to see the answer."),(0,i.kt)("li",{parentName:"ul"},"Add other functionality as you see fit. For instance, allow a user to mark whether they answered a question correctly or incorrectly \u2014 and then tally the total number of correct and incorrect answers once they are finished.")),(0,i.kt)("h2",{id:"peer-code-review"},"Peer Code Review"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Does the application have a fully functioning development environment?"),(0,i.kt)("li",{parentName:"ul"},"Does the application successfully make an API call?"),(0,i.kt)("li",{parentName:"ul"},"Are API keys stored in a ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file and protected?"),(0,i.kt)("li",{parentName:"ul"},"Does the README include instructions for setting up the project including getting an API key and adding it to a ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file?")))}d.isMDXComponent=!0}}]);