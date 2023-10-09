"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[51323],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||h[c]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(7896),i=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Many-to-Many Read Functionality",id:"many-to-many-read-functionality",slug:"many-to-many-read-functionality",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0d_read_with_many_to_many.md"},l=void 0,r={unversionedId:"c-and-net/many-to-many-relationships/many-to-many-read-functionality",id:"c-and-net/many-to-many-relationships/many-to-many-read-functionality",title:"\ud83d\udcd3 Many-to-Many Read Functionality",description:"In the last lesson, we set up a many-to-many structure in our classes, created a join class, and configured and migrated our code into our database. Now we're ready to create controllers that will handle our new application structure. In this lesson, we'll focus on adding read functionality to the ItemsController, including the following:",source:"@site/docs/c-and-net/9_many-to-many-relationships/0d-read-with-many-to-many.md",sourceDirName:"c-and-net/9_many-to-many-relationships",slug:"/c-and-net/many-to-many-relationships/many-to-many-read-functionality",permalink:"/c-and-net/many-to-many-relationships/many-to-many-read-functionality",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\ud83d\udcd3 Many-to-Many Read Functionality",id:"many-to-many-read-functionality",slug:"many-to-many-read-functionality",hide_table_of_contents:!0,sidebar_position:5,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0d_read_with_many_to_many.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Many-to-Many Relationships: Join Entities",permalink:"/c-and-net/many-to-many-relationships/many-to-many-relationships-join-entities"},next:{title:"\ud83d\udcd3 Many-to-Many Create Functionality",permalink:"/c-and-net/many-to-many-relationships/many-to-many-create-functionality"}},s={},d=[{value:"READ: Creating the <code>TagsController</code> and <code>Index()</code> Action and View",id:"read-creating-the-tagscontroller-and-index-action-and-view",level:2},{value:"Adding Navigation for Tag Views from the Homepage",id:"adding-navigation-for-tag-views-from-the-homepage",level:3},{value:"READ: Creating the Tags <code>Details()</code> Action and View",id:"read-creating-the-tags-details-action-and-view",level:2},{value:"READ for Join Entities in the Item Details View",id:"read-for-join-entities-in-the-item-details-view",level:2},{value:"READ for Join Entities in the Category Details View",id:"read-for-join-entities-in-the-category-details-view",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we set up a many-to-many structure in our classes, created a join class, and configured and migrated our code into our database. Now we're ready to create controllers that will handle our new application structure. In this lesson, we'll focus on adding read functionality to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController"),", including the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating the ",(0,i.kt)("inlineCode",{parentName:"li"},"TagsController")," with READ functionality for all tags (the ",(0,i.kt)("inlineCode",{parentName:"li"},"Index()")," action) and an individual tag (the ",(0,i.kt)("inlineCode",{parentName:"li"},"Details()")," action)."),(0,i.kt)("li",{parentName:"ul"},"Adding a new navigation link on the homepage to access tags."),(0,i.kt)("li",{parentName:"ul"},"Creating the views for index and details."),(0,i.kt)("li",{parentName:"ul"},"Adding READ for join entities (viewing the tags that belong to each item and vice versa) in the following views:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A category's detail page."),(0,i.kt)("li",{parentName:"ul"},"An item's detail page."),(0,i.kt)("li",{parentName:"ul"},"A tag's detail page.")))),(0,i.kt)("h2",{id:"read-creating-the-tagscontroller-and-index-action-and-view"},"READ: Creating the ",(0,i.kt)("inlineCode",{parentName:"h2"},"TagsController")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"Index()")," Action and View"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList")," production directory, create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController.cs")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Controllers")," directory and add the following code:"),(0,i.kt)("div",{class:"filename"},"Controllers/TagsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.AspNetCore.Mvc;\nusing ToDoList.Models;\nusing System.Collections.Generic;\nusing System.Linq;\nusing Microsoft.EntityFrameworkCore;\nusing Microsoft.AspNetCore.Mvc.Rendering;\n\nnamespace ToDoList.Controllers\n{\n  public class TagsController : Controller\n  {\n    private readonly ToDoListContext _db;\n\n    public TagsController(ToDoListContext db)\n    {\n      _db = db;\n    }\n\n    public ActionResult Index()\n    {\n      return View(_db.Tags.ToList());\n    }\n  }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Index()")," route should look familiar to those we've created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController.cs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController.cs")," with one shortcut: instead of saving the list of tags to a variable and passing that into the ",(0,i.kt)("inlineCode",{parentName:"p"},"View()")," method, we pass in the method call ",(0,i.kt)("inlineCode",{parentName:"p"},"_db.Tags.ToList()")," directly as the argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"View()"),"."),(0,i.kt)("p",null,"Next, let's create the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.cshtml"),". Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"Views")," directory, create another subdirectory called ",(0,i.kt)("inlineCode",{parentName:"p"},"Tags")," and a file within called ",(0,i.kt)("inlineCode",{parentName:"p"},"Index.cshtml")," with the following code:"),(0,i.kt)("div",{class:"filename"},"Views/Tags/Index.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.Models;\n\n<h1>Tags</h1>\n\n@if (@Model.Count == 0)\n{\n  <h3>No tags have been added yet!</h3>\n} \n\n@foreach (Tag tag in Model)\n{\n  <li>@Html.ActionLink($"{tag.Title}", "Details", new { id = tag.TagId })</li>\n}\n\n<p>@Html.ActionLink("Add new tag", "Create")</p>\n\n<p>@Html.ActionLink("Home", "Index", "Home")</p>\n')),(0,i.kt)("h3",{id:"adding-navigation-for-tag-views-from-the-homepage"},"Adding Navigation for Tag Views from the Homepage"),(0,i.kt)("p",null,"Next, let's add a link to our tags from the homepage of our To Do List app. Open up ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList/Views/Home/Index.cshtml")," and add the following action link:"),(0,i.kt)("div",{class:"filename"},"Views/Home/Index.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n\n<p>@Html.ActionLink("See all tags", "Index", "Tags")</p>\n')),(0,i.kt)("h2",{id:"read-creating-the-tags-details-action-and-view"},"READ: Creating the Tags ",(0,i.kt)("inlineCode",{parentName:"h2"},"Details()")," Action and View"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Next, let's add the ability to see the details of a single tag. In the view, we'll list the title of the tag as well as every item that is currently associated with that tag. That means we're going to have to deliver the tag object to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details.cshtml")," view, as well as the join entities the tag is associated with."),(0,i.kt)("p",null,"First, let's add the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details()")," action to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TagsController.cs"),":"),(0,i.kt)("div",{class:"filename"},"Controllers/TagsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"... \n\n    public ActionResult Details(int id)\n    {\n      Tag thisTag = _db.Tags\n          .Include(tag => tag.JoinEntities)\n          .ThenInclude(join => join.Item)\n          .FirstOrDefault(tag => tag.TagId == id);\n      return View(thisTag);\n    }\n\n...\n")),(0,i.kt)("p",null,"Notice the new method we are using: ",(0,i.kt)("inlineCode",{parentName:"p"},"ThenInclude()"),". Let's go over what's happening here."),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"_db.Tags")," expression gives us a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," objects from the database. However, if we completed the query now (using the ",(0,i.kt)("inlineCode",{parentName:"p"},"FirstOrDefault()")," method), we'd simply have an ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," without its related ",(0,i.kt)("inlineCode",{parentName:"p"},"Category"),"s."),(0,i.kt)("p",null,"We need to ",(0,i.kt)("inlineCode",{parentName:"p"},".Include(tag => tag.JoinEntities)")," to load the ",(0,i.kt)("inlineCode",{parentName:"p"},"JoinEntities")," property of each ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),". However, the ",(0,i.kt)("inlineCode",{parentName:"p"},"JoinEntities")," property on an ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," is just a collection of join entities (",(0,i.kt)("inlineCode",{parentName:"p"},"List<ItemTag>"),"), which are tracked by ids: ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTagId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TagId"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemId"),". These are ",(0,i.kt)("strong",{parentName:"p"},"not")," the actual item objects related to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag"),"."),(0,i.kt)("p",null,"We need the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," objects themselves, so we use ",(0,i.kt)("inlineCode",{parentName:"p"},"ThenInclude()")," method to load the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," object associated with each ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag"),". Remember that an ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," is simply a reference to a relationship. Each ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," includes the id of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," as well as the id of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),". With ",(0,i.kt)("inlineCode",{parentName:"p"},".ThenInclude(join => join.Item)"),", we actually fetch the associated ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," object for each ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemTag")," join entity."),(0,i.kt)("p",null,"Next, let's create the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tags/Details.cshtml")," view. Again, we'll make sure to display the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," details as well as all of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," objects associated with each Tag."),(0,i.kt)("div",{class:"filename"},"Views/Tags/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.Models\n@model ToDoList.Models.Tag\n\n<h2>Tag Details</h2>\n<hr />\n<h3>@Html.DisplayNameFor(model => model.Title): @Html.DisplayFor(model => model.Title)</h3>\n\n@if(@Model.JoinEntities.Count == 0)\n{\n  <p>This tag does not belong to any items.</p>\n}\nelse\n{\n  <h4>Items the tag belongs to:</h4>\n  <ul>\n  @foreach(ItemTag join in Model.JoinEntities)\n  {\n    <li>@join.Item.Description</li>\n  }\n  </ul>\n}\n\n<p>@Html.ActionLink("Back to list", "Index")</p>\n')),(0,i.kt)("p",null,"Most of this code should look familiar, so we'll point out a few important pieces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have an ",(0,i.kt)("inlineCode",{parentName:"li"},"@using")," directive for ",(0,i.kt)("inlineCode",{parentName:"li"},"ToDoList.Models")," so that we can reference the ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemTag")," class in our ",(0,i.kt)("inlineCode",{parentName:"li"},"foreach")," loop."),(0,i.kt)("li",{parentName:"ul"},"We also have an ",(0,i.kt)("inlineCode",{parentName:"li"},"@model")," directive for ",(0,i.kt)("inlineCode",{parentName:"li"},"ToDoList.Models.Tag")," so that we can use the strongly typed HTML helper methods ",(0,i.kt)("inlineCode",{parentName:"li"},"Html.DisplayNameFor()")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"@Html.DisplayFor"),". "),(0,i.kt)("li",{parentName:"ul"},"Notice that we access ",(0,i.kt)("inlineCode",{parentName:"li"},"@Model.JoinEntities.Count")," in our conditional: with this line of code, we are checking if the ",(0,i.kt)("inlineCode",{parentName:"li"},"List<ItemTag>")," that we save to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag.JoinEntities")," property is empty, and if so, we deliver a message to the user stating that there are no items associated with the tag we're looking at."),(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("inlineCode",{parentName:"li"},"List<ItemTag>")," is not empty, then we loop through the ",(0,i.kt)("inlineCode",{parentName:"li"},"Tag.JoinEntities")," property and display each item's description: ",(0,i.kt)("inlineCode",{parentName:"li"},"<li>@join.Item.Description</li>"),". A few notes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The variable ",(0,i.kt)("inlineCode",{parentName:"li"},"join")," represents a single ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemTag")," join entity."),(0,i.kt)("li",{parentName:"ul"},"To get the Item's description, we need to go through the ",(0,i.kt)("inlineCode",{parentName:"li"},"ItemTag.Item")," property, which contains all of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Item")," object's data.")))),(0,i.kt)("h2",{id:"read-for-join-entities-in-the-item-details-view"},"READ for Join Entities in the Item Details View"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Next, we'll update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details.cshtml")," views for both ",(0,i.kt)("inlineCode",{parentName:"p"},"Categories")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Items")," to display tags. "),(0,i.kt)("p",null,"We'll start with updating ",(0,i.kt)("inlineCode",{parentName:"p"},"Views/Items/Details.cshtml"),". Right now this view shows the description of the item along with the category it belongs to. After the update we make, the view will also include a list of tags that are associated with the item."),(0,i.kt)("p",null,"Here's the updated code:"),(0,i.kt)("div",{class:"filename"},"Views/Items/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.Models\n@model ToDoList.Models.Item\n\n<h2>Item Details</h2>\n<hr />\n<h3>@Html.DisplayNameFor(model => model.Description): @Html.DisplayFor(model => model.Description)</h3>  \n<h3>@Html.DisplayNameFor(model => model.Category): @Html.DisplayFor(model => model.Category.Name)</h3>\n\n@if(@Model.JoinEntities.Count == 0)\n{\n  <p>This item does not have any tags yet!</p>\n}\nelse\n{\n  <h4>This item has the following tags:</h4>\n  <ul>\n    @foreach(ItemTag join in Model.JoinEntities)\n    {\n      <li>Tag: @join.Tag.Title</li>\n    }\n  </ul>\n}\n\n<p>@Html.ActionLink("Back to list", "Index")</p>\n<p>@Html.ActionLink("Edit Item or Category", "Edit", new { id = Model.ItemId })</p>\n<p>@Html.ActionLink("Delete Item", "Delete", new { id = Model.ItemId })</p>\n')),(0,i.kt)("p",null,"The above addition looks very similar to how we display a list of items that belong to a tag. The main difference is in the naming. In summary, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.JoinEntities.Count")," is equal to zero, then there are no tags that are associated with the item, so we deliver a message to the user about this. Otherwise, we loop through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.JoinEntities")," property, and for each join entity we access the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," property to display the tag's title."),(0,i.kt)("p",null,"With our view ready to display join entities, we now need to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Details()")," action in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemsController.cs")," to fetch the join entities and tags from the database when we get the data for the item. Here's the update we'll make:"),(0,i.kt)("div",{class:"filename"},"Controllers/ItemsController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"... \n\n    public ActionResult Details(int id)\n    {\n      Item thisItem = _db.Items\n          .Include(item => item.Category)\n          .Include(item => item.JoinEntities)\n          .ThenInclude(join => join.Tag)\n          .FirstOrDefault(item => item.ItemId == id);\n      return View(thisItem);\n    }\n\n...\n")),(0,i.kt)("p",null,"What we've done is add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Include()")," method to fetch the join entities, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"ThenInclude()")," method to fetch the actual tag object for each join entity. "),(0,i.kt)("p",null,"Notice how we list an ",(0,i.kt)("inlineCode",{parentName:"p"},"Include()")," method for each navigation property in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item")," class: ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.Category")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.JoinEntities"),". We can do this for as many navigation properties as we have and need to fetch. "),(0,i.kt)("p",null,"As always, we end our database query with ",(0,i.kt)("inlineCode",{parentName:"p"},"FirstOrDefault()")," if we want to fetch one object, or ",(0,i.kt)("inlineCode",{parentName:"p"},"ToList()")," if we want to fetch a list of objects. There are many other methods we can use like ",(0,i.kt)("inlineCode",{parentName:"p"},"OrderBy()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDictionary()"),". If you have not already done so, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.linq.enumerable?view=net-6.0#methods"},"MS Docs on the ",(0,i.kt)("inlineCode",{parentName:"a"},"System.Linq.Enumerable")," class methods")," to learn about other methods we can use to query our database. "),(0,i.kt)("h2",{id:"read-for-join-entities-in-the-category-details-view"},"READ for Join Entities in the Category Details View"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Next, we'll update our category details view to display not just the items that belong to each category, but also the tags that belong to each item. This is what the finished product will look like:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/c-sharp-category-details-many-to-many.png",alt:"To Do List app's category details page that lists items and tags that belong to each item."})),(0,i.kt)("p",null,"To make the above possible, we'll need a loop within a loop and some additional code to format our tags to display inline. Here's the updated code:"),(0,i.kt)("div",{class:"filename"},"Views/Category/Details.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@model ToDoList.Models.Category;\n@using ToDoList.Models;\n@using System.Collections.Generic;\n\n<h2>Category Details</h2>\n<hr />\n<h3>@Html.DisplayNameFor(model => model.Name): @Html.DisplayFor(model => model.Name)</h3>\n\n@if(@Model.Items.Count == 0)\n{\n  <p>This category does not contain any items</p>\n}\nelse\n{\n  <h4>Items the category contains:</h4>\n  <ul>\n  @foreach(Item item in Model.Items)\n  {\n    string tags = "";\n    @if(item.JoinEntities.Count == 0)\n    {\n      tags = "This item does not have any tags.";\n    }\n    else\n    {\n      List<string> tagList = new List<string>();\n      @foreach(ItemTag join in item.JoinEntities)\n      {\n        tagList.Add(join.Tag.Title);\n      }\n      tags = String.Join(", ", tagList);\n    }\n    <li>@item.Description | Tags: @tags</li>\n  }\n  </ul>\n}\n\n<p>@Html.ActionLink("Back to categories", "Index")</p>\n<p>@Html.ActionLink("Edit Category", "Edit", new { id = Model.CategoryId })</p>\n<p>@Html.ActionLink("Delete Category", "Delete", new { id = Model.CategoryId })</p>\n<p>@Html.ActionLink("Add new item", "Create", "Items")</p>\n')),(0,i.kt)("p",null,"We'll focus on understanding the new code:"),(0,i.kt)("p",null,"First notice that we've added a new ",(0,i.kt)("inlineCode",{parentName:"p"},"@using")," directive for the ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic;")," namespace that allows use to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"List<T>")," type."),(0,i.kt)("p",null,"Next, notice how we've refactored the first (outer) ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach")," loop:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We've added branching logic to check whether there are any tags (join entities) associated with the item. If so, then we loop through the ",(0,i.kt)("inlineCode",{parentName:"li"},"Item.JoinEntities")," property, and if not, then we display a message ",(0,i.kt)("inlineCode",{parentName:"li"},'"This item does not have any tags."'),"."),(0,i.kt)("li",{parentName:"ul"},"In order to display the list of tags inline next to an item, we make use of a variable called ",(0,i.kt)("inlineCode",{parentName:"li"},"tags"),", and the ",(0,i.kt)("inlineCode",{parentName:"li"},"String.Join()")," method:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We use the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"tags")," to hold the display value for tags. It will be either a message saying there are no tags, or all of the tags associated with the item, separated by a comma."),(0,i.kt)("li",{parentName:"ul"},"When the ",(0,i.kt)("inlineCode",{parentName:"li"},"tags")," variable is set to the item's tags separated by a comma, we create this string by doing the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Creating an empty ",(0,i.kt)("inlineCode",{parentName:"li"},"List<string>")," called ",(0,i.kt)("inlineCode",{parentName:"li"},"tagList"),". "),(0,i.kt)("li",{parentName:"ul"},"Looping through the join entities and adding each join entity's tag's title to the ",(0,i.kt)("inlineCode",{parentName:"li"},"tagList"),"."),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"String.Join()")," to join each list item in ",(0,i.kt)("inlineCode",{parentName:"li"},"tagList")," into a string, separating each item with a comma and space.")))))),(0,i.kt)("p",null,"Phew! That is a lot of new logic. Note that you can format your code however you like and you don't need to create complicated formatting in your own projects. You also don't ",(0,i.kt)("em",{parentName:"p"},"need")," to display each item's tags on a category's detail page. However, you should consider what is best for a user's experience as far as navigating a site and accessing information. As always, have fun and try exploring something new. "),(0,i.kt)("p",null,"With our category ",(0,i.kt)("inlineCode",{parentName:"p"},"Details")," view ready to display each item's join entities, we now need to revisit our ",(0,i.kt)("inlineCode",{parentName:"p"},"Details()")," action in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CategoriesController.cs")," to fetch not only a list of items, but each's item's tags. "),(0,i.kt)("p",null,"Here's the update we'll make:"),(0,i.kt)("div",{class:"filename"},"Controllers/CategoriesController.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"... \n\n    public ActionResult Details(int id)\n    {\n      Category thisCategory = _db.Categories\n                                .Include(cat => cat.Items)\n                                .ThenInclude(item => item.JoinEntities)\n                                .ThenInclude(join => join.Tag)\n                                .FirstOrDefault(category => category.CategoryId == id);\n      return View(thisCategory);\n    }\n\n...\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Category")," has only one navigation property, ",(0,i.kt)("inlineCode",{parentName:"p"},"Category.Items"),"; this is why there is only one ",(0,i.kt)("inlineCode",{parentName:"p"},"Include()")," method call. If we want to access each item's tag(s), we need to use a series of ",(0,i.kt)("inlineCode",{parentName:"p"},"ThenInclude()")," method calls to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"Item.JoinEntities")," data for each item, and then the ",(0,i.kt)("inlineCode",{parentName:"p"},"JoinEntity.Tag")," tag data for each join entity."),(0,i.kt)("p",null,"We should now be able to run our application and navigate from the homepage to the tags index view. However, in order to view our new tag's details page (and the updates to our category and item details page), we'll have to first add some tags. Let's do that next."))}h.isMDXComponent=!0}}]);