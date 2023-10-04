"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[71677],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(n),h=i,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},37378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(7896),i=(n(2784),n(30876));const o={title:"Establishing a One-To-Many Relationship with Navigation Properties",id:"establishing-a-one-to-many-relationship-with-navigation-properties",slug:"establishing-a-one-to-many-relationship-with-navigation-properties",hide_table_of_contents:!0,sidebar_position:33,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2j_relationships_with_entity_framework.md"},l=void 0,r={unversionedId:"c-and-net/database-basics/establishing-a-one-to-many-relationship-with-navigation-properties",id:"c-and-net/database-basics/establishing-a-one-to-many-relationship-with-navigation-properties",title:"Establishing a One-To-Many Relationship with Navigation Properties",description:"In this lesson, we'll learn how to create database relationships using EF Core navigation properties. We'll add a one-to-many relationship between Items and Categories so that each Item belongs to a specific Category.",source:"@site/docs/c-and-net/8_database-basics/2j-relationships-with-entity-framework.md",sourceDirName:"c-and-net/8_database-basics",slug:"/c-and-net/database-basics/establishing-a-one-to-many-relationship-with-navigation-properties",permalink:"/c-and-net/database-basics/establishing-a-one-to-many-relationship-with-navigation-properties",draft:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{title:"Establishing a One-To-Many Relationship with Navigation Properties",id:"establishing-a-one-to-many-relationship-with-navigation-properties",slug:"establishing-a-one-to-many-relationship-with-navigation-properties",hide_table_of_contents:!0,sidebar_position:33,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2j_relationships_with_entity_framework.md"},sidebar:"c-and-net",previous:{title:"Delete with EF Core",permalink:"/c-and-net/database-basics/delete-with-ef-core"},next:{title:"Using ViewBag",permalink:"/c-and-net/database-basics/using-viewbag"}},p={},s=[{value:"Adding a One-To-Many Relationship to To Do List",id:"adding-a-one-to-many-relationship-to-to-do-list",level:2},{value:"Updating the Database",id:"updating-the-database",level:3},{value:"Updating the ToDoListContext",id:"updating-the-todolistcontext",level:3},{value:"Updating the <code>Category</code> Class and Creating a Navigation Property",id:"updating-the-category-class-and-creating-a-navigation-property",level:3},{value:"Adding a Controller and Views",id:"adding-a-controller-and-views",level:3},{value:"Adding New Links",id:"adding-new-links",level:3},{value:"Updating the <code>Item</code> Class to Include a Navigation Property for <code>Category</code>",id:"updating-the-item-class-to-include-a-navigation-property-for-category",level:3},{value:"Updating the <code>ItemsController</code> and <code>Index</code> View to Display the <code>Category</code>",id:"updating-the-itemscontroller-and-index-view-to-display-the-category",level:3},{value:"Updating the <code>CategoriesController</code> and <code>Details</code> View to Display the <code>Items</code> that Belong to Each <code>Category</code>",id:"updating-the-categoriescontroller-and-details-view-to-display-the-items-that-belong-to-each-category",level:3},{value:"What&#39;s Next?",id:"whats-next",level:3}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this lesson, we'll learn how to create database relationships using EF Core ",(0,i.kt)("strong",{parentName:"p"},"navigation properties"),". We'll add a one-to-many relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Categories")," so that each ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," belongs to a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),". "),(0,i.kt)("h2",{id:"adding-a-one-to-many-relationship-to-to-do-list"},"Adding a One-To-Many Relationship to To Do List"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Before we get started, let's review one-to-many relationships. Let's say we have two classes, ",(0,i.kt)("inlineCode",{parentName:"p"},"Team")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Player"),". We can conceptualize a one-to-many relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"Team")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Player")," by recognizing the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One ",(0,i.kt)("inlineCode",{parentName:"li"},"Team")," has many ",(0,i.kt)("inlineCode",{parentName:"li"},"Player"),"s in it.s"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"Player")," may only belong to one ",(0,i.kt)("inlineCode",{parentName:"li"},"Team")," at a time. ")),(0,i.kt)("p",null,"We would integrate this one-to-many relationship into a database by making sure that each ",(0,i.kt)("inlineCode",{parentName:"p"},"Player")," entry has a ",(0,i.kt)("inlineCode",{parentName:"p"},"TeamId")," to denote which specific ",(0,i.kt)("inlineCode",{parentName:"p"},"Team"),' they belong to, "linking" the tables together. In this case, a ',(0,i.kt)("inlineCode",{parentName:"p"},"Player")," entry can only have one ",(0,i.kt)("inlineCode",{parentName:"p"},"TeamId")," value, because a ",(0,i.kt)("inlineCode",{parentName:"p"},"Player")," can only belong to one team."),(0,i.kt)("h3",{id:"updating-the-database"},"Updating the Database"),(0,i.kt)("p",null,"First, let's update our ",(0,i.kt)("inlineCode",{parentName:"p"},"to_do_list_with_ef_core")," database to include a ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," table. We'll also make updates so that we can establish a relationship between the ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," tables."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," table."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"CategoryId")," as a column. It should be an ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"primary key"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"non null"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"auto incrementing"),"."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"Name")," as a column. It should be a ",(0,i.kt)("inlineCode",{parentName:"li"},"Varchar(255)"),"."),(0,i.kt)("li",{parentName:"ul"},"Don't forget to hit Apply and confirm that the changes actually happen."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add a ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId")," column of type ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," table. Set the ",(0,i.kt)("em",{parentName:"p"},"Default/Expression")," to 0, to avoid ",(0,i.kt)("inlineCode",{parentName:"p"},"Null")," errors. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you have existing data in your database, you will need to remove it or set the ",(0,i.kt)("inlineCode",{parentName:"li"},"CategoryId")," column value to 0 for all items."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Don't forget to hit Apply and confirm that the changes actually happen."))),(0,i.kt)("h3",{id:"updating-the-todolistcontext"},"Updating the ToDoListContext"),(0,i.kt)("p",null,"First, we need to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Categories")," DbSet to ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoListContext.cs"),":"),(0,i.kt)("div",{class:"filename"},"Models/ToDoListContext.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.EntityFrameworkCore;\n\nnamespace ToDoList.Models\n{\n  public class ToDoListContext : DbContext\n  {\n    public DbSet<Category> Categories { get; set; }\n    public DbSet<Item> Items { get; set; }\n    \n    public ToDoListContext(DbContextOptions options) : base(options) { }\n  }\n}\n")),(0,i.kt)("h3",{id:"updating-the-category-class-and-creating-a-navigation-property"},"Updating the ",(0,i.kt)("inlineCode",{parentName:"h3"},"Category")," Class and Creating a Navigation Property"),(0,i.kt)("p",null,"Next, we'll completely update the old version of our ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," class (found in ",(0,i.kt)("inlineCode",{parentName:"p"},"Models/Category.cs"),"):"),(0,i.kt)("div",{class:"filename"},"Models/Category.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ToDoList.Models\n{\n    public class Category\n    {\n        public int CategoryId { get; set; }\n        public string Name { get; set; }\n        public List<Item> Items { get; set; }\n    }\n}\n")),(0,i.kt)("p",null,"Let's walk through this file together:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," class includes a property for its ID and name.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," class includes a public property called ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," that will hold a ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," of all ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s that belong to a category.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For EF Core, ",(0,i.kt)("inlineCode",{parentName:"p"},"Items"),' is a navigation property, specifically a "collection navigation property". '))),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"navigation property")," is a property on one entity (like ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),") that includes a reference to a related entity (like ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"). EF Core uses navigation properties to recognize when there is a relationship between two entities. "),(0,i.kt)("p",null,"In this case, EF Core sees that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property has the type ",(0,i.kt)("inlineCode",{parentName:"p"},"List<Item>")," which references another entity ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," within our project, and because of that is able to understand that there is a relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),". "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property is more specifically categorized as a ",(0,i.kt)("strong",{parentName:"p"},"collection navigation property")," because it contains multiple entities. In this case, we have a collection (",(0,i.kt)("inlineCode",{parentName:"p"},"List<>"),") of multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," objects. "),(0,i.kt)("p",null,"Notably, ",(0,i.kt)("strong",{parentName:"p"},"navigation properties are never saved in the database"),". Instead, they are populated in our projects by EF Core from the data in the database. "),(0,i.kt)("h3",{id:"adding-a-controller-and-views"},"Adding a Controller and Views"),(0,i.kt)("p",null,"Next, we need to update our ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController")," and replace the CRUD actions with our new Entity-backed ones. This controller will look like the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController")," and views we completed in the previous lessons. Because we've already covered how to set up CRUD functionality, it's your task now to build out the controller and its corresponding views on your own. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We will further configure the ",(0,i.kt)("inlineCode",{parentName:"strong"},"CategoriesController")," and views later in this lesson, so pause now to create these files.")),(0,i.kt)("h3",{id:"adding-new-links"},"Adding New Links"),(0,i.kt)("p",null,"Let's add a link in the homepage (",(0,i.kt)("inlineCode",{parentName:"p"},"Home/Index.cshtml"),") to go to our categories index view."),(0,i.kt)("div",{class:"filename"},"Home/Index.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n<p>@Html.ActionLink("See all categories", "Index", "Categories")</p>\n')),(0,i.kt)("p",null,"Let's make sure to also add a link to the homepage in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Categories/Index.cshtml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Items/Index.cshtml")," views:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'<p>@Html.ActionLink("Home", "Index", "Home")</p>\n')),(0,i.kt)("p",null,"Now that we've created CRUD functionality and the respective views for categories, let's go ahead and implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," relationship into our application."),(0,i.kt)("h3",{id:"updating-the-item-class-to-include-a-navigation-property-for-category"},"Updating the ",(0,i.kt)("inlineCode",{parentName:"h3"},"Item")," Class to Include a Navigation Property for ",(0,i.kt)("inlineCode",{parentName:"h3"},"Category")),(0,i.kt)("p",null,"Finally, we need to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," class to set up its new relationship to ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),":"),(0,i.kt)("div",{class:"filename"},"Models/Item.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ToDoList.Models\n{\n    ...\n    {\n        ...\n        public int CategoryId { get; set; }\n        public Category Category { get; set; }\n    }\n}\n")),(0,i.kt)("p",null,"Since each ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," will be associated with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," class now has a ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId")," property. The ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoryId")," property is the foreign key in our ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," database table that connects each ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"."),(0,i.kt)("p",null,"We also include a new property called ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," set to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," object that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," belongs to. This is the ",(0,i.kt)("strong",{parentName:"p"},"navigation property")," in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," model that creates the one-to-many relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"."),(0,i.kt)("p",null,"More specifically, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," property is called a ",(0,i.kt)("strong",{parentName:"p"},"reference navigation property"),", because it holds a reference to a single related entity. Now with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," property in place, we can fetch the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," object when we fetch the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," object from the database. We'll see exactly how to do this next!"),(0,i.kt)("h3",{id:"updating-the-itemscontroller-and-index-view-to-display-the-category"},"Updating the ",(0,i.kt)("inlineCode",{parentName:"h3"},"ItemsController")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"Index")," View to Display the ",(0,i.kt)("inlineCode",{parentName:"h3"},"Category")),(0,i.kt)("p",null,"Let's update our ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController")," so that whenever an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," is loaded, its corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," is available as well. We can do so by using ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.entityframeworkqueryableextensions.include?view=efcore-6.0"},"Entity's built-in ",(0,i.kt)("inlineCode",{parentName:"a"},"Include()")," method"),". We'll make a small update to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Index()")," action in our ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController"),". Note that we're including a new ",(0,i.kt)("inlineCode",{parentName:"p"},"using")," directive for ",(0,i.kt)("inlineCode",{parentName:"p"},"Microsoft.EntityFrameworkCore")," so that we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Include()")," method."),(0,i.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.EntityFrameworkCore;\n\n...\n\npublic ActionResult Index()\n{\n    List<Item> model = _db.Items\n                          .Include(item => item.Category)\n                          .ToList();\n    return View(model);\n}\n...\n")),(0,i.kt)("p",null,"With this update, we're having EF Core do the following: for each ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," in the database, include the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," it belongs to, and then put all the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s into list."),(0,i.kt)("p",null,"When we tell EF Core to ",(0,i.kt)("inlineCode",{parentName:"p"},".Include(item => item.Category)"),", we're telling it to go into the ",(0,i.kt)("inlineCode",{parentName:"p"},"categories")," table and retrieve the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," object with all of its data and then populate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.Category")," property with that data. "),(0,i.kt)("p",null,"If we don't explicitly tell EF Core to include the navigation property ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),", it won't. We'll still get the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.ItemId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.Description"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.CategoryId")," properties, but the navigation property ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," will be empty."),(0,i.kt)("p",null,"Next, we'll update the Item ",(0,i.kt)("inlineCode",{parentName:"p"},"Index")," view to display the category that each item belongs to. We'll add the name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," next to each ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," in the view."),(0,i.kt)("div",{class:"filename"},"Views/Items/Index.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.Models;\n@model List<ToDoList.Models.Item>;\n\n<h1>Items</h1>\n\n@if (@Model.Count == 0)\n{\n  <h3>No items have been added yet!</h3>\n} \nelse\n{\n  <ul>\n    @foreach (Item item in Model)\n    {\n      <li>@Html.ActionLink($"{item.Description}", "Details", new { id = item.ItemId }) | @item.Category.Name</li>\n    }\n  </ul>\n}\n\n<p>@Html.ActionLink("Add new item", "Create")</p>\n')),(0,i.kt)("p",null,"Our index view will now show both an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and the name of its related ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"!"),(0,i.kt)("h3",{id:"updating-the-categoriescontroller-and-details-view-to-display-the-items-that-belong-to-each-category"},"Updating the ",(0,i.kt)("inlineCode",{parentName:"h3"},"CategoriesController")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"Details")," View to Display the ",(0,i.kt)("inlineCode",{parentName:"h3"},"Items")," that Belong to Each ",(0,i.kt)("inlineCode",{parentName:"h3"},"Category")),(0,i.kt)("p",null,"Next, let's use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Include()")," method to include and display the items that belong to each ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),". We'll display this information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," details page."),(0,i.kt)("p",null,"First, let's update the Details action in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController.cs"),":"),(0,i.kt)("div",{class:"filename"},"Controllers/CategoriesController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.EntityFrameworkCore;\n\n...\n\n    public ActionResult Details(int id)\n    {\n      Category thisCategory = _db.Categories\n                                  .Include(category => category.Items)\n                                  .FirstOrDefault(category => category.CategoryId == id);\n      return View(thisCategory);\n    }\n\n...\n")),(0,i.kt)("p",null,"Here we state that we want to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," property, which tells EF Core to fetch every ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," object belonging to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),". "),(0,i.kt)("p",null,"Just like before, if we don't explicitly tell EF Core to include the data for the navigation property ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," with the code ",(0,i.kt)("inlineCode",{parentName:"p"},".Include(category => category.Items)"),", it won't gather that data. However, we'll still get the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category.CategoryId")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category.Name")," information."),(0,i.kt)("p",null,"Next, let's update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," details view:"),(0,i.kt)("div",{class:"filename"},"Views/Categories/Details.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Category\n@using ToDoList.Models\n\n<h2>Category Details</h2>\n<hr />\n<h3>@Html.DisplayNameFor(model => model.Name): @Html.DisplayFor(model => model.Name)<h3>\n\n@if (@Model.Items.Count == 0)\n{\n  <h3>No items have been added to this category yet!</h3>\n} \nelse\n{\n  <h3>Items:</h3>\n  <ul>\n    @foreach (Item item in Model.Items)\n    {\n      <li>@Html.ActionLink($"{item.Description}", "Details", "Items", new { id = item.ItemId })</li>\n    }\n  </ul>\n}\n\n<p>@Html.ActionLink("Edit Category", "Edit", new { id = Model.CategoryId })</p>\n<p>@Html.ActionLink("Delete Category", "Delete", new { id = Model.CategoryId })</p>\n<p>@Html.ActionLink("Back to list", "Index")</p>\n')),(0,i.kt)("p",null,"Much of this code should look familiar, like using an if statement and looping through a list of objects. However, there's a two new changes to note in the update we've made:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We've included a new ",(0,i.kt)("inlineCode",{parentName:"li"},"@using")," directive for ",(0,i.kt)("inlineCode",{parentName:"li"},"ToDoList.Models"),". This enables us to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"Item")," model in our view alongside the ",(0,i.kt)("inlineCode",{parentName:"li"},"Category")," model which we've specified as the main ",(0,i.kt)("inlineCode",{parentName:"li"},"@model")," that we're using in the view."),(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("inlineCode",{parentName:"li"},"HTML.ActionLink")," contains an additional argument in order to route to the ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemsController"),": note the 3rd argument of ",(0,i.kt)("inlineCode",{parentName:"li"},'"Items"'),". If we don't include this, our ",(0,i.kt)("inlineCode",{parentName:"li"},"ActionLink")," will route us to the category's ",(0,i.kt)("inlineCode",{parentName:"li"},"Details")," view.")),(0,i.kt)("h3",{id:"whats-next"},"What's Next?"),(0,i.kt)("p",null,"At this point, we've set up the database to track a one-to-many relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s. However, there is still one key thing missing: there's no way for users to actually make the association between an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Category")," in our application! In other words, we've set up the READ functionality for an association in our index view but users can't actually CREATE associations yet. In the next two lessons, we'll update the rest of our methods to add this functionality and learn about a property of Views called ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewBag"),"."))}c.isMDXComponent=!0}}]);