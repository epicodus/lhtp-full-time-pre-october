"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[89169],{30876:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(2784);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(i),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||s;return i?n.createElement(h,r(r({ref:t},d),{},{components:i})):n.createElement(h,r({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<s;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},92259:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=i(7896),a=(i(2784),i(30876));const s={title:"\ud83d\udcd3 CSS Media Queries and Responsive Design",id:"css-media-queries-and-responsive-design",slug:"css-media-queries-and-responsive-design",hide_table_of_contents:!0,sidebar_position:54,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3l_media_queries_and_responsive_design.md"},r=void 0,o={unversionedId:"introduction-to-programming/git-html-and-css/css-media-queries-and-responsive-design",id:"introduction-to-programming/git-html-and-css/css-media-queries-and-responsive-design",title:"\ud83d\udcd3 CSS Media Queries and Responsive Design",description:"You may notice some of your frequently-visited websites look a little different on your phone than they do in the browser on a computer. Altering the appearance of a website based on the device it is being viewed on is an important feature of CSS that ensures a quality viewing experience on any device. In this lesson, we'll learn more about adapting your site for different screen sizes using media queries.",source:"@site/docs/introduction-to-programming/1_git-html-and-css/3l-media-queries-and-responsive-design.md",sourceDirName:"introduction-to-programming/1_git-html-and-css",slug:"/introduction-to-programming/git-html-and-css/css-media-queries-and-responsive-design",permalink:"/introduction-to-programming/git-html-and-css/css-media-queries-and-responsive-design",draft:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{title:"\ud83d\udcd3 CSS Media Queries and Responsive Design",id:"css-media-queries-and-responsive-design",slug:"css-media-queries-and-responsive-design",hide_table_of_contents:!0,sidebar_position:54,day:"thursday",type:"lesson",url:"https://github.com/epicodus-curriculum/intro-full-stack/blob/main/3l_media_queries_and_responsive_design.md"},sidebar:"introduction-to-programming",previous:{title:"\ud83d\udcd3 Video Recap: Core CSS Concepts and Debugging",permalink:"/introduction-to-programming/git-html-and-css/video-recap-core-css-concepts-and-debugging"},next:{title:"\u270f\ufe0f Practice: CSS Media Queries and Responsive Design",permalink:"/introduction-to-programming/git-html-and-css/practice-css-media-queries-and-responsive-design"}},l={},p=[{value:"Responsive Design",id:"responsive-design",level:2},{value:"Making a Site Responsive",id:"making-a-site-responsive",level:2},{value:"Media Query Practice",id:"media-query-practice",level:2},{value:"Anatomy of a Media Query",id:"anatomy-of-a-media-query",level:3},{value:"Basic Structure",id:"basic-structure",level:3},{value:"Media Type",id:"media-type",level:3},{value:"Media Features",id:"media-features",level:3},{value:"Breakpoints",id:"breakpoints",level:4},{value:"Media Query CSS Rules",id:"media-query-css-rules",level:3},{value:"Multiple Media Queries",id:"multiple-media-queries",level:2},{value:"Defining Viewport Ranges",id:"defining-viewport-ranges",level:3},{value:"More CSS in Media Queries",id:"more-css-in-media-queries",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You may notice some of your frequently-visited websites look a little different on your phone than they do in the browser on a computer. Altering the appearance of a website based on the device it is being viewed on is an important feature of CSS that ensures a quality viewing experience on any device. In this lesson, we'll learn more about adapting your site for different screen sizes using media queries."),(0,a.kt)("h2",{id:"responsive-design"},"Responsive Design"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Coding your site to look different depending on the size of screen it is being viewed on is known as ",(0,a.kt)("strong",{parentName:"p"},"responsive web design"),".  In the realm of responsive web design, the screen being used to view a site is commonly referred to as a ",(0,a.kt)("strong",{parentName:"p"},"viewport"),"."),(0,a.kt)("p",null,"But what does responsive design look like? How should a site look on a small screen, versus a larger screen? Before we begin, check out the following two websites to view some examples of responsive design. Each site depicts the layouts of many different websites, and the way their styles appear differently depending on the user's viewport size:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://responsivedesign.is/examples"},"Responsive Design")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://mediaqueri.es/"},"mediaqueri.es"))),(0,a.kt)("h2",{id:"making-a-site-responsive"},"Making a Site Responsive"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"But how do we make our own sites responsive? How does it know when to use styles meant for smaller viewports, and when to apply styles meant for larger ones? Thankfully, this is actually easier than you might anticipate."),(0,a.kt)("p",null,"To make sites responsive we can use CSS media queries. A ",(0,a.kt)("strong",{parentName:"p"},"media query")," is a block of CSS that is applied ",(0,a.kt)("em",{parentName:"p"},"only")," when certain conditions about the user's viewport are true. For instance, CSS packaged in a media query that defines a maximum width of 500px would only be applied when the user's viewport width is below 500px."),(0,a.kt)("h2",{id:"media-query-practice"},"Media Query Practice"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's walk through creating media queries together. This will allow us to both understand their construction, and see what they look like in action."),(0,a.kt)("p",null,"We'll create a project directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"media-query-practice"),". Within it, we'll need a ",(0,a.kt)("inlineCode",{parentName:"p"},".html")," file named ",(0,a.kt)("inlineCode",{parentName:"p"},"media-query-site.html"),", and another directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"css"),". In the ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," directory we'll create a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.css"),"."),(0,a.kt)("p",null,"The project structure should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"media-query-practice\n\u251c\u2500\u2500 css\n\u2502\xa0\xa0 \u2514\u2500\u2500 styles.css\n\u2514\u2500\u2500 media-query-site.html\n")),(0,a.kt)("p",null,"Make sure to initialize a Git repository in the root directory so you'll be ready to start making commits."),(0,a.kt)("p",null,"Next, let's add some simple HTML:"),(0,a.kt)("div",{class:"filename"},"media-query-site.html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en-US">\n<head>\n  <link href="css/styles.css" rel="stylesheet" type="text/css">\n  <title>Media Queries</title>\n</head>\n<body>\n  <h1>Media Queries</h1>\n  <div class="column">\n    <p>Media queries allow us to make our sites <em>responsive</em>. We can use media queries to apply CSS styling only when certain conditions apply. For instance, our sites can look different depending on the size of the screen, or <em>viewport</em> a user is viewing our content with. We can also change the way our site appears if a user is printing our website, or using a screen-reader! </p>\n  </div>\n  <div class="column">\n    <p>Using media queries and responsive design allows us to ensure that our site looks and works great no matter <em>how</em> the user is viewing it. And, as more and more people use more and more devices to browse the internet, integrating media queries into websites is becoming a common, widespread practice!</p>\n  </div>\n  <div class="column">\n    <p>Are you beginning to see the possibilities here? Media queries are awesome!</p>\n  </div>\n</body>\n</html>\n')),(0,a.kt)("p",null,"If we load our ",(0,a.kt)("inlineCode",{parentName:"p"},"media-query-site.html")," file in the browser, it should currently look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Media+Queries+and+Responsive+Design+Lesson/site-no-queries.png",alt:"basic-site-no-queries"})),(0,a.kt)("h3",{id:"anatomy-of-a-media-query"},"Anatomy of a Media Query"),(0,a.kt)("p",null,"Now that we have a basic site in place, let's add media queries. We'll begin by building one from scratch together."),(0,a.kt)("h3",{id:"basic-structure"},"Basic Structure"),(0,a.kt)("p",null,"Media queries are located in CSS stylesheets. Because CSS cascades, they should be located at the ",(0,a.kt)("em",{parentName:"p"},"bottom")," of the file, to prevent other style rules from overriding them."),(0,a.kt)("p",null,"They begin with ",(0,a.kt)("inlineCode",{parentName:"p"},"@media"),", and contain a set of parenthesis and curly braces, like this:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media () {\n\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@media")," portion instructs the browser that this is a media query.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The parenthesis will eventually define ",(0,a.kt)("em",{parentName:"p"},"when")," the CSS in this query should be applied to our site. We'll get to this in a moment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The curly braces will eventually contain the CSS that will be applied when the conditions we define are true."))),(0,a.kt)("h3",{id:"media-type"},"Media Type"),(0,a.kt)("p",null,"Media queries often specify something called a media type. As the name implies, a ",(0,a.kt)("strong",{parentName:"p"},"media type")," refers to the type of media-viewing device the user is viewing our site with. We have the following options to choose from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"all"),":  Refers to any and all devices.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"print"),':  Refers to viewing our site in "print preview" mode. For instance, if we had a website with a dark-colored background that users may want to print, we could use a ',(0,a.kt)("inlineCode",{parentName:"p"},"print")," media query that removes the dark-colored background for ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," media types. This would both make our website's information more legible in a printed format, and save our users printer ink.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"screen"),":  Refers to color screens.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"speech"),":  Refers to special screen readers that assist individuals with impaired eyesight."))),(0,a.kt)("p",null,"Additionally, note that if you do not explicitly specify a type, your media query will default to ",(0,a.kt)("inlineCode",{parentName:"p"},"all"),"."),(0,a.kt)("p",null,"We can add the media type to our query like this:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media screen () {\n\n}\n")),(0,a.kt)("p",null,"By including the media type ",(0,a.kt)("inlineCode",{parentName:"p"},"screen")," we're instructing our site to only apply the CSS that this media query will eventually contain to the site if a user is viewing it through a screen."),(0,a.kt)("h3",{id:"media-features"},"Media Features"),(0,a.kt)("p",null,"Next, our media query requires we include something called a media feature. ",(0,a.kt)("strong",{parentName:"p"},"Media features")," are specific properties and details about the manner the user is viewing content. The most commonly-used media features are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"height"),":  Describes the height of the viewport, in pixels. This media feature can also have a ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"max")," prefix added onto it. That is, we can say ",(0,a.kt)("inlineCode",{parentName:"p"},"max-height")," to specify the maximum height a media query's CSS should apply to. Or ",(0,a.kt)("inlineCode",{parentName:"p"},"min-height")," to define a minimum height.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"width"),":  Describes the width of the viewport, in pixels. Like ",(0,a.kt)("inlineCode",{parentName:"p"},"height"),", it may also have a  ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"max")," prefix added onto it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"orientation"),": Indicates whether the viewport is ",(0,a.kt)("inlineCode",{parentName:"p"},"landscape")," (wider than it is tall) or ",(0,a.kt)("inlineCode",{parentName:"p"},"portrait")," (taller than it is wide).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"While not required for this course, you can learn about the additional, less common features in the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features"},"MDN Documentation on Media Queries"),"."))),(0,a.kt)("p",null,"Let's use the ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," media feature in our media query. We'll also include the ",(0,a.kt)("inlineCode",{parentName:"p"},"max")," prefix, in order to specify a maximum width:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media screen and (max-width: 768px) {\n\n}\n")),(0,a.kt)("p",null,"We've done a couple things here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"First, we add the word ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," between our ",(0,a.kt)("inlineCode",{parentName:"p"},"screen")," media type, and the parenthesis containing our new media feature. When using both a media type ",(0,a.kt)("em",{parentName:"p"},"and")," a media feature this is required.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then, we include ",(0,a.kt)("inlineCode",{parentName:"p"},"max-width: 768px")," in our parenthesis."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"width")," is our media feature."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"max")," prefix specifies that the CSS we will eventually include in this media query should only be applied to viewports with a maximum width of ",(0,a.kt)("inlineCode",{parentName:"li"},"768px"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"768px")," simply refers to size (in pixels) we'd like to define as the maximum. When defining pixel sizes in CSS, the ",(0,a.kt)("inlineCode",{parentName:"p"},"px")," suffix is required."))),(0,a.kt)("h4",{id:"breakpoints"},"Breakpoints"),(0,a.kt)("p",null,"So, this means the CSS we will eventually include in this media query will only be applied when the user's viewport is ",(0,a.kt)("em",{parentName:"p"},"under")," the maximum width of 768 pixels. This is known as a breakpoint."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"breakpoint"),' is the point at which a media query\'s condition becomes true. For instance, because our media query has a max-width of 768px, it will apply its styles only when the viewport is 768px or less wide. 768px is therefore the breakpoint, because it is the point at which the query will be "activated".'),(0,a.kt)("h3",{id:"media-query-css-rules"},"Media Query CSS Rules"),(0,a.kt)("p",null,"We can now include CSS within its opening and closing curly braces. The CSS in a media query is exactly like CSS we've been using so far. We can include any valid CSS in a media query. The only difference is that it will ",(0,a.kt)("em",{parentName:"p"},"only")," be applied when the conditions defined by our media query are met."),(0,a.kt)("p",null,"Let's add some basic, yet noticeable styles, so we can readily see when they're being applied:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media screen and (max-width: 768px) {\n    body {\n        background-color: black;\n        color: white;\n    }   \n}\n")),(0,a.kt)("p",null,"Here, we're saying that if the user is viewing our site on a ",(0,a.kt)("inlineCode",{parentName:"p"},"screen"),", whose viewport is no larger than 768 pixels, the background will be black and the font will be white."),(0,a.kt)("p",null,"Let's load our site into the browser to see this in action! If we refresh the page, we can see it still looks the same:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Media+Queries+and+Responsive+Design+Lesson/site-no-queries.png",alt:"basic-site-query-not-applied"})),(0,a.kt)("p",null,"However, slowly resize the browser window to make it narrower. As soon as the browser window becomes narrower than 768 pixels the media query is activated; our background turns black, and our text turns white!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Media+Queries+and+Responsive+Design+Lesson/query-activated.png",alt:"media-query-applied"})),(0,a.kt)("p",null,"Isn't this pretty cool?"),(0,a.kt)("h2",{id:"multiple-media-queries"},"Multiple Media Queries"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We can use multiple media queries at once to address a wide variety of potential viewport sizes and media types. Let's add another query to our site:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media screen and (max-width: 768px) {\n  body {\n    background-color: black;\n    color: white;\n  }   \n}\n\n@media screen and (max-width: 480px) {\n  body {\n    background-color: teal;\n  }\n}\n")),(0,a.kt)("p",null,"If we refresh our page, we can see it still has a white background if its width is over 768 pixels, and a black background between 480 pixels and 768 pixels. Now, thanks to our second query, our background is teal if the site is fewer than 480 pixels wide!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Media+Queries+and+Responsive+Design+Lesson/second-query-activated.png",alt:"second-query-activated"})),(0,a.kt)("p",null,"Notice here that the font color is ",(0,a.kt)("em",{parentName:"p"},"still")," white after the background turns teal, even though the second media query did not specify a font color. This is because the viewport width is ",(0,a.kt)("em",{parentName:"p"},"still")," less than 768 pixels; so unless we override the ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," property with a new property, it will continually remain white."),(0,a.kt)("p",null,"Sometimes multiple media queries can apply at once. For instance, in our media queries above, if a viewport is under 480 pixels ",(0,a.kt)("em",{parentName:"p"},"both")," media queries will apply because a size under 480 pixels is under ",(0,a.kt)("em",{parentName:"p"},"both")," the maximum width value of 768 ",(0,a.kt)("em",{parentName:"p"},"and")," the maximum value of 480."),(0,a.kt)("p",null,"When multiple media queries apply, the most-recently applied media query's CSS will override the other media queries' CSS if they contain the same selectors and properties. For instance, in the example above  ",(0,a.kt)("inlineCode",{parentName:"p"},"background-color")," defined in the first media query is being overridden by the ",(0,a.kt)("inlineCode",{parentName:"p"},"background-color")," property in our second media query when the viewport is 480 pixels or less in width."),(0,a.kt)("h3",{id:"defining-viewport-ranges"},"Defining Viewport Ranges"),(0,a.kt)("p",null,"We can also apply both minimum ",(0,a.kt)("em",{parentName:"p"},"and")," maximum values to a media query. This can especially come in handy if we ",(0,a.kt)("em",{parentName:"p"},"don't")," want to worry about multiple media queries applying at once."),(0,a.kt)("p",null,"We could add a ",(0,a.kt)("inlineCode",{parentName:"p"},"min-width")," feature to one of our existing queries like this:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media screen and (max-width: 768px) and (min-width: 600px) {\n  body {\n    background-color: black;\n    color: white;\n  }   \n}\n\n@media screen and (max-width: 480px) {\n  body {\n    background-color: teal;\n  }\n}\n")),(0,a.kt)("p",null,"Notice that there is another ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," between the two media features in parenthesis, just like the ",(0,a.kt)("inlineCode",{parentName:"p"},"and")," between our media type and first media feature. Now, this first query instructs our site to apply a black background and white text when the viewport is between 768 and 600 pixels wide."),(0,a.kt)("p",null,"Now, our site begins with a white background, and no styling applied:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Media+Queries+and+Responsive+Design+Lesson/site-no-queries.png",alt:"largest-size"})),(0,a.kt)("p",null,"As we slowly reduce the width of its browser window, its background turns black, and text turns white at 768px:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Media+Queries+and+Responsive+Design+Lesson/query-activated.png",alt:"smaller-size"})),(0,a.kt)("p",null,"But now, once its width is smaller than 600px (but below the 480 pixel width that will activate another media query), it reverts back to white:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Media+Queries+and+Responsive+Design+Lesson/Screen+Shot+2016-10-11+at+3.39.25+PM.png",alt:"almost-smallest"})),(0,a.kt)("p",null,"Yet, once it reaches 480 pixels or smaller, it still turns teal:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Media+Queries+and+Responsive+Design+Lesson/second-query-activated.png",alt:"second-query-activated"})),(0,a.kt)("h3",{id:"more-css-in-media-queries"},"More CSS in Media Queries"),(0,a.kt)("p",null,"Also, remember that you can define ",(0,a.kt)("em",{parentName:"p"},"any")," CSS in a media query; not just background colors! For instance, we learned how to create columns in a ",(0,a.kt)("a",{parentName:"p",href:"/introduction-to-programming/git-html-and-css/using-floats"},"previous lesson"),". Oftentimes, sites will display text in multiple columns on larger screens, then condense it into a single column for easier reading on smaller devices ",(0,a.kt)("a",{parentName:"p",href:"http://mediaqueri.es/dbp/"},"as seen in this example"),"."),(0,a.kt)("p",null,"We can do this too! Let's create another media query. This time, we'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," prefix on the ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," feature. We'll specify that any viewport ",(0,a.kt)("em",{parentName:"p"},"above")," 768px should float our text into columns. This means that any viewport ",(0,a.kt)("em",{parentName:"p"},"below")," the size of this breakpoint will display text in a single column:"),(0,a.kt)("div",{class:"filename"},"styles.css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@media screen and (min-width: 768px) {\n  .column {\n    width: 300px;\n    float: left;\n    padding: 20px;\n  }\n}\n\n@media screen and (max-width: 768px) and (min-width: 600px) {\n  body {\n    background-color: black;\n    color: white;\n  }   \n}\n\n@media screen and (max-width: 480px) {\n  body {\n    background-color: teal;\n  }\n}\n")),(0,a.kt)("p",null,"And look! Larger screen sizes see our text in columns:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/INTRO/week1-html-css/Media+Queries+and+Responsive+Design+Lesson/text-in-columns.png",alt:"text-in-columns"})),(0,a.kt)("p",null,"However, if we resize to a smaller viewport, text will be condensed into a single column."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"As you can see, media queries are pretty powerful! Based on the manner in which a user views our site, we can dynamically change what it looks like to appear best. With the increasing number of individuals accessing content on handheld devices and tablets, media queries and responsive design are becoming ever more important."),(0,a.kt)("p",null,"As you create websites and applications throughout this course, begin implementing media queries to ensure your content looks great on ",(0,a.kt)("em",{parentName:"p"},"all")," devices."))}m.isMDXComponent=!0}}]);