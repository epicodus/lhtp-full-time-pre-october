"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[42334],{30876:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(2784);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),u=l,h=s["".concat(d,".").concat(u)]||s[u]||k[u]||r;return a?n.createElement(h,i(i({ref:e},m),{},{components:a})):n.createElement(h,i({ref:e},m))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29298:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7896),l=(a(2784),a(30876));const r={title:"\ud83d\udcd3 Many-to-Many Relationship Review",id:"many-to-many-relationship-review",slug:"many-to-many-relationship-review",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0b_many_to_many_relationship_review.md"},i=void 0,o={unversionedId:"c-and-net/many-to-many-relationships/many-to-many-relationship-review",id:"c-and-net/many-to-many-relationships/many-to-many-relationship-review",title:"\ud83d\udcd3 Many-to-Many Relationship Review",description:"Before we begin implementing many-to-many relationships, let's review what they look like and how they work.",source:"@site/docs/c-and-net/9_many-to-many-relationships/0b-many-to-many-relationship-review.md",sourceDirName:"c-and-net/9_many-to-many-relationships",slug:"/c-and-net/many-to-many-relationships/many-to-many-relationship-review",permalink:"/c-and-net/many-to-many-relationships/many-to-many-relationship-review",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud83d\udcd3 Many-to-Many Relationship Review",id:"many-to-many-relationship-review",slug:"many-to-many-relationship-review",hide_table_of_contents:!0,sidebar_position:2,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0b_many_to_many_relationship_review.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Many-To-Many Objectives",permalink:"/c-and-net/many-to-many-relationships/many-to-many-objectives"},next:{title:"\ud83d\udcd3 Code First Development and Migrations",permalink:"/c-and-net/many-to-many-relationships/code-first-development-and-migrations"}},d={},p=[{value:"Many-to-Many Relationships",id:"many-to-many-relationships",level:2},{value:"friends",id:"friends",level:2},{value:"cities",id:"cities",level:2},{value:"friends",id:"friends-1",level:2},{value:"cities",id:"cities-1",level:2},{value:"Join Tables",id:"join-tables",level:3},{value:"friends",id:"friends-2",level:2},{value:"cities",id:"cities-2",level:2},{value:"cities_friends",id:"cities_friends",level:2},{value:"courses",id:"courses",level:2},{value:"students",id:"students",level:2},{value:"enrollments",id:"enrollments",level:2},{value:"Schema Diagrams",id:"schema-diagrams",level:3},{value:"friends",id:"friends-3",level:2}],m={toc:p},s="wrapper";function k(t){let{components:e,...a}=t;return(0,l.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Before we begin implementing many-to-many relationships, let's review what they look like and how they work."),(0,l.kt)("h2",{id:"many-to-many-relationships"},"Many-to-Many Relationships"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Imagine we have the following database table containing our friends' contact information:"),(0,l.kt)("h2",{id:"friends"},"friends"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"phone"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Pedro"),(0,l.kt)("td",{parentName:"tr",align:null},"9165551212")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Jessica"),(0,l.kt)("td",{parentName:"tr",align:null},"3235551212")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Jake"),(0,l.kt)("td",{parentName:"tr",align:null},"4155551212")))),(0,l.kt)("p",null,"What if we also want to track what cities our friends have visited? We can add a second ",(0,l.kt)("inlineCode",{parentName:"p"},"cities")," table that contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"friend_id")," foreign key, like this:"),(0,l.kt)("h2",{id:"cities"},"cities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"city"),(0,l.kt)("th",{parentName:"tr",align:null},"state"),(0,l.kt)("th",{parentName:"tr",align:null},"friend_id"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Chicago"),(0,l.kt)("td",{parentName:"tr",align:null},"IL"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"New York"),(0,l.kt)("td",{parentName:"tr",align:null},"NY"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Oakland"),(0,l.kt)("td",{parentName:"tr",align:null},"CA"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Portland"),(0,l.kt)("td",{parentName:"tr",align:null},"OR"),(0,l.kt)("td",{parentName:"tr",align:null},"3")))),(0,l.kt)("p",null,"Each city contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"friend_id")," that corresponds to the friend who has visited that city. So far so good."),(0,l.kt)("p",null,"However, what if Jessica, Jake, ",(0,l.kt)("em",{parentName:"p"},"and")," Pedro have all been to Chicago? To record this, our ",(0,l.kt)("inlineCode",{parentName:"p"},"cities")," table would look like this:"),(0,l.kt)("h2",{id:"friends-1"},"friends"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"phone"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Pedro"),(0,l.kt)("td",{parentName:"tr",align:null},"9165551212")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Jessica"),(0,l.kt)("td",{parentName:"tr",align:null},"3235551212")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Jake"),(0,l.kt)("td",{parentName:"tr",align:null},"4155551212")))),(0,l.kt)("h2",{id:"cities-1"},"cities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"city"),(0,l.kt)("th",{parentName:"tr",align:null},"state"),(0,l.kt)("th",{parentName:"tr",align:null},"friend_id"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Chicago"),(0,l.kt)("td",{parentName:"tr",align:null},"IL"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"New York"),(0,l.kt)("td",{parentName:"tr",align:null},"NY"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Oakland"),(0,l.kt)("td",{parentName:"tr",align:null},"CA"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Portland"),(0,l.kt)("td",{parentName:"tr",align:null},"OR"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Chicago"),(0,l.kt)("td",{parentName:"tr",align:null},"IL"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"Chicago"),(0,l.kt)("td",{parentName:"tr",align:null},"IL"),(0,l.kt)("td",{parentName:"tr",align:null},"3")))),(0,l.kt)("p",null,"Here we've created three entries for Chicago. Each one has a different ",(0,l.kt)("inlineCode",{parentName:"p"},"friend_id")," corresponding with one of the friends in our ",(0,l.kt)("inlineCode",{parentName:"p"},"friends")," table."),(0,l.kt)("p",null,"However, this is very inefficient. We are now storing information about Chicago in three different places. If we later want to update Chicago's entry, we'd have to update it in multiple locations. Our data could very quickly become inconsistent if we don't update it in every place."),(0,l.kt)("p",null,"If we try to solve the problem by including a ",(0,l.kt)("inlineCode",{parentName:"p"},"city_id")," column in the ",(0,l.kt)("inlineCode",{parentName:"p"},"friends")," table instead, we'll end up with the same problem. Instead of having duplicate cities, we'll have duplicate friends."),(0,l.kt)("p",null,"We can't accurately reflect this information with the tools we used to associate a one-to-many relationship. Instead, we need to create a ",(0,l.kt)("strong",{parentName:"p"},"many-to-many relationship")," because each friend is capable of visiting many different cities and each city can also have many different visits from friends."),(0,l.kt)("h3",{id:"join-tables"},"Join Tables"),(0,l.kt)("p",null,"The right way to handle a many-to-many relationship is by using a third table called ",(0,l.kt)("strong",{parentName:"p"},"join table"),"."),(0,l.kt)("h2",{id:"friends-2"},"friends"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"phone"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Pedro"),(0,l.kt)("td",{parentName:"tr",align:null},"9165551212")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Jessica"),(0,l.kt)("td",{parentName:"tr",align:null},"3235551212")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Jake"),(0,l.kt)("td",{parentName:"tr",align:null},"4155551212")))),(0,l.kt)("h2",{id:"cities-2"},"cities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"city"),(0,l.kt)("th",{parentName:"tr",align:null},"state"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Chicago"),(0,l.kt)("td",{parentName:"tr",align:null},"IL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"New York"),(0,l.kt)("td",{parentName:"tr",align:null},"NY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Oakland"),(0,l.kt)("td",{parentName:"tr",align:null},"CA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Portland"),(0,l.kt)("td",{parentName:"tr",align:null},"OR")))),(0,l.kt)("h2",{id:"cities_friends"},"cities_friends"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"city_id"),(0,l.kt)("th",{parentName:"tr",align:null},"friend_id"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We have a ",(0,l.kt)("inlineCode",{parentName:"p"},"friends")," table with information about each of our three friends.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We also have a ",(0,l.kt)("inlineCode",{parentName:"p"},"cities")," table with information about the four cities we're tracking.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We have a third ",(0,l.kt)("strong",{parentName:"p"},"join table")," called ",(0,l.kt)("inlineCode",{parentName:"p"},"cities_friends"),". For each instance of a friend interacting with a city, we record an entry in this table. Each entry contains the ID of a city and the ID of the friend that made a visit to that city. Notice that each of these two IDs match their corresponding entries in the ",(0,l.kt)("inlineCode",{parentName:"p"},"friends")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"cities")," table."))),(0,l.kt)("p",null,'Join tables are generally named by combining names of the two tables they\'re "joining." In this case, we have ',(0,l.kt)("inlineCode",{parentName:"p"},"cities")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"friends")," separated by an underscore. But if the type of interaction the join table is recording has a more descriptive name, we can use that instead. For instance, we could call the join table above ",(0,l.kt)("inlineCode",{parentName:"p"},"visits"),"."),(0,l.kt)("p",null,"Let's consider one more example. Let's say we're making an application for a school. Each course the school offers has many different students in it. A student is also capable of taking many different courses. Recording this information in a many-to-many database relationship might look like this:"),(0,l.kt)("h2",{id:"courses"},"courses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"course"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Epicodus")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"How to cook vegan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Intro to rocket science")))),(0,l.kt)("h2",{id:"students"},"students"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"student"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"libby")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"tiny")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"bub")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"lizzy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"hank")))),(0,l.kt)("h2",{id:"enrollments"},"enrollments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"student_id"),(0,l.kt)("th",{parentName:"tr",align:null},"course_id"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"3")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We have a ",(0,l.kt)("inlineCode",{parentName:"p"},"courses")," table recording each course the school offers.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We also have a ",(0,l.kt)("inlineCode",{parentName:"p"},"students")," table with all enrolled students.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Our join table is called ",(0,l.kt)("inlineCode",{parentName:"p"},"enrollments"),". For each instance of a relationship between a student and course, it contains an entry linking that student's ID and the course ID."))),(0,l.kt)("h3",{id:"schema-diagrams"},"Schema Diagrams"),(0,l.kt)("p",null,"To familiarize you with how a database works, we've been showing you tables with example data. However, when you want to describe all the tables and relations in a database, also called the database ",(0,l.kt)("strong",{parentName:"p"},"schema"),", it's not convenient to include sample data because it takes up too much space. Instead, tables are depicted only with the table name and column names, like this:"),(0,l.kt)("h2",{id:"friends-3"},"friends"),(0,l.kt)("p",null,"name\nphone\nbirthday"),(0,l.kt)("p",null,"As we can see, we're now listing the column names vertically under the table name, instead of horizontally. Also, there's no data listed."),(0,l.kt)("p",null,"Database column names are also called database ",(0,l.kt)("strong",{parentName:"p"},"fields"),". In this example, there are three fields for the friends table: name, phone, and birthday."),(0,l.kt)("p",null,"When designing database schemas, it's often helpful to draw out the relationships among tables like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/schema_simple.png",alt:"A simple database schema diagram."})),(0,l.kt)("p",null,"It's especially helpful if you're trying to figure out a more complex schema:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/schema_complex.png",alt:"drawing of complex schema"})),(0,l.kt)("p",null,"You can make schema diagrams like this with this online ",(0,l.kt)("a",{parentName:"p",href:"http://ondras.zarovi.cz/sql/demo/"},"SQL Designer"),". The SQL Designer has a lot of options, but ignore most of them. Just add tables and add fields to tables, and don't worry about data types or other options. To connect tables for your one-to-many and many-to-many relationships, click on the ID of the table, click ",(0,l.kt)("em",{parentName:"p"},"connection foreign key")," (on the right), and then click the corresponding field that references that ID."))}k.isMDXComponent=!0}}]);