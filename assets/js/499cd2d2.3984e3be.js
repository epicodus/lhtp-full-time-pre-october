"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70081],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},73640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=a(7896),o=(a(2784),a(30876));const l={title:"\ud83d\udcd3 Layouts and Partials",id:"layouts-and-partials",slug:"layouts-and-partials",hide_table_of_contents:!0,sidebar_position:41,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3g_layouts_and_partials.md"},i=void 0,r={unversionedId:"c-and-net/basic-web-applications/layouts-and-partials",id:"c-and-net/basic-web-applications/layouts-and-partials",title:"\ud83d\udcd3 Layouts and Partials",description:"In this lesson, we'll learn a few ways to DRY up the project structure of our front-end files.",source:"@site/docs/c-and-net/7_basic-web-applications/3g-layouts-and-partials.md",sourceDirName:"c-and-net/7_basic-web-applications",slug:"/c-and-net/basic-web-applications/layouts-and-partials",permalink:"/c-and-net/basic-web-applications/layouts-and-partials",draft:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{title:"\ud83d\udcd3 Layouts and Partials",id:"layouts-and-partials",slug:"layouts-and-partials",hide_table_of_contents:!0,sidebar_position:41,day:"wednesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/3g_layouts_and_partials.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Using Static Content",permalink:"/c-and-net/basic-web-applications/using-static-content"},next:{title:"\u270f\ufe0f To Do List, CD Organizer, Go Fish, Word Puzzle",permalink:"/c-and-net/basic-web-applications/to-do-list-cd-organizer-go-fish-word-puzzle"}},s={},p=[{value:"Layout Files",id:"layout-files",level:2},{value:"Partials",id:"partials",level:2},{value:"Repository Reference",id:"repository-reference",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this lesson, we'll learn a few ways to DRY up the project structure of our front-end files."),(0,o.kt)("h2",{id:"layout-files"},"Layout Files"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"So far, our view files have contained a full HTML template, including both a ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"<body>"),". However, we usually only need to change the body of the page. We can turn this code into a ",(0,o.kt)("strong",{parentName:"p"},"layout view"),", which allows us to reuse the same code and content on multiple pages."),(0,o.kt)("p",null,"In addition to saving us some typing, layout views also give us a way to give our site a uniform look and feel."),(0,o.kt)("p",null,"Now let's create a layout file for our To-Do List, containing an HTML skeleton and some CSS to use throughout our application."),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Views")," folder, create another folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"Shared"),'. This name is a convention that states these views will be "shared" with the project\'s components. Inside that folder, create a file named ',(0,o.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml"),". The leading underscore is another naming convention that indicates the file is not intended to be used directly. Now let's add some code."),(0,o.kt)("div",{class:"filename"},"Views/Shared/_Layout.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <title>My To-Do List!</title>\n    <link \n      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" \n      rel="stylesheet" \n      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" \n      crossorigin="anonymous">\n    <link rel="stylesheet" href="~/css/styles.css">\n  </head>\n  <body>\n    @RenderBody()\n  </body>\n</html>\n')),(0,o.kt)("p",null,"This is a standard HTML skeleton using Bootstrap and custom CSS. There's one new addition: the code ",(0,o.kt)("inlineCode",{parentName:"p"},"@RenderBody()")," is where we'll load our views."),(0,o.kt)("p",null,"Now let's add a view that uses this layout."),(0,o.kt)("div",{class:"filename"},"Views/Home/Index.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n...\n')),(0,o.kt)("p",null,"The code at the top of the page is called a ",(0,o.kt)("strong",{parentName:"p"},"Razor code block")," and it's another way to indicate Razor code. In this case, we're letting the page know that we want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," as the layout file."),(0,o.kt)("p",null,"Now when we load the page, we'll see that Bootstrap, our custom CSS, and our custom page title have all been applied."),(0,o.kt)("h2",{id:"partials"},"Partials"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's look at one more feature of the Razor view engine before we move on: ",(0,o.kt)("strong",{parentName:"p"},"partial views"),". If we have a section of a page that we'd like to reuse, we can write it once in a partial view. Then we can insert that partial view where it's needed."),(0,o.kt)("p",null,"To illustrate, let's create a footer view that we can use."),(0,o.kt)("div",{class:"filename"},"Views/Shared/Footer.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div id="footer">Bottom div content</div>\n')),(0,o.kt)("p",null,"Let's also add some CSS that will fix the footer to the bottom of the page:"),(0,o.kt)("div",{class:"filename"},"wwwroot/css/styles.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"div#footer {\n    position:fixed;\n    bottom:'0px%';\n    left:'0px%';\n    width:'100%%';\n    color:'#CCC';\n    background:#333;\n    padding:'8px%';\n}\n")),(0,o.kt)("p",null,"Finally, we add the following code where we want the partial to load. In this case, we want it to load underneath the page content, so we will put it in our layout file:"),(0,o.kt)("div",{class:"filename"},"Views/Shared/_Layout.cshtml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  ...\n  <body>\n    @RenderBody()\n    @await Html.PartialAsync("Footer")\n  </body>\n</html>\n')),(0,o.kt)("p",null,"Now when we load up the page, there will be a footer on the bottom of the page. All we did was add this code to a view file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'@await Html.PartialAsync("Footer")\n')),(0,o.kt)("p",null,"The name of the view file will be the argument of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Partial")," method. If we have a header partial in ",(0,o.kt)("inlineCode",{parentName:"p"},"Header.cshtml"),", we'd use ",(0,o.kt)("inlineCode",{parentName:"p"},'@await Html.PartialAsync("Header")')," to display it."),(0,o.kt)("p",null,"Just to clarify, we can use the code ",(0,o.kt)("inlineCode",{parentName:"p"},'@await Html.PartialAsync("viewname")')," in ",(0,o.kt)("em",{parentName:"p"},"any")," view, not just layout files. We can use this to construct our web pages in sections and stitch them together as needed. This makes our view code much more DRY."),(0,o.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,o.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/9_static_content_layouts_and_partials"},(0,o.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List: 9","_","static","_","content","_","layouts","_","and","_","partials"))))}u.isMDXComponent=!0}}]);