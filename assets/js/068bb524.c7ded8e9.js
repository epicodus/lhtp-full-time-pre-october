"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[9654],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||s;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<s;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(7896),a=(n(2784),n(30876));const s={title:"Finding Objects with Unique IDs",id:"finding-objects-with-unique-ids",slug:"finding-objects-with-unique-ids",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2d_finding_objects_with_unique_ids.md"},r=void 0,l={unversionedId:"c-and-net/basic-web-applications/finding-objects-with-unique-ids",id:"c-and-net/basic-web-applications/finding-objects-with-unique-ids",title:"Finding Objects with Unique IDs",description:"We'll eventually want users to click an individual Item in our To Do List to view its details on a special detail page. To do this, our application needs to differentiate between Items. Otherwise, the server won't know which Item's details to display. That means we need to add a unique ID to our Item model. Then we can use routing to differentiate between Items like this: items/1 and items/2.",source:"@site/docs/c-and-net/7_basic-web-applications/2d-finding-objects-with-unique-ids.md",sourceDirName:"c-and-net/7_basic-web-applications",slug:"/c-and-net/basic-web-applications/finding-objects-with-unique-ids",permalink:"/c-and-net/basic-web-applications/finding-objects-with-unique-ids",draft:!1,tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"Finding Objects with Unique IDs",id:"finding-objects-with-unique-ids",slug:"finding-objects-with-unique-ids",hide_table_of_contents:!0,sidebar_position:32,day:"tuesday",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2d_finding_objects_with_unique_ids.md"},sidebar:"c-and-net",previous:{title:"Deleting Items",permalink:"/c-and-net/basic-web-applications/deleting-items"},next:{title:"Introduction to RESTful Routing",permalink:"/c-and-net/basic-web-applications/introduction-to-restful-routing"}},o={},p=[{value:"Assigning Unique IDs",id:"assigning-unique-ids",level:2},{value:"Testing",id:"testing",level:3},{value:"Implementing Unique IDs",id:"implementing-unique-ids",level:3},{value:"Finding Items By ID",id:"finding-items-by-id",level:2},{value:"Testing",id:"testing-1",level:3},{value:"Properly Failing the Test",id:"properly-failing-the-test",level:3},{value:"Implementing <code>Find()</code>",id:"implementing-find",level:3},{value:"Repository Reference",id:"repository-reference",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We'll eventually want users to click an individual ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," in our To Do List to view its details on a special detail page. To do this, our application needs to differentiate between ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s. Otherwise, the server won't know ",(0,a.kt)("em",{parentName:"p"},"which")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"'s details to display. That means we need to add a unique ID to our ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," model. Then we can use routing to differentiate between ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"items/1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"items/2"),"."),(0,a.kt)("h2",{id:"assigning-unique-ids"},"Assigning Unique IDs"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Because this requires updating our ",(0,a.kt)("inlineCode",{parentName:"p"},"Item.cs")," model logic, we'll need to add a test."),(0,a.kt)("p",null,"First, however, let's run our previous tests by navigating to the test directory and running ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet test"),"."),(0,a.kt)("p",null,"All 5 should pass, but if there are errors, try running ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet restore")," in the test directory."),(0,a.kt)("p",null,"Let's add our new test:"),(0,a.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/ItemTests.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [TestMethod]\n  public void GetId_ItemsInstantiateWithAnIdAndGetterReturns_Int()\n  {\n    //Arrange\n    string description = "Walk the dog.";\n    Item newItem = new Item(description);\n\n    //Act\n    int result = newItem.Id;\n\n    //Assert\n    Assert.AreEqual(1, result);\n  }\n\n...\n')),(0,a.kt)("p",null,"Our new test:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Arranges the necessary materials by creating a sample ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),";")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Calls a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," property from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),";")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Asserts that ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."))),(0,a.kt)("h3",{id:"implementing-unique-ids"},"Implementing Unique IDs"),(0,a.kt)("p",null,"Because our new test references an ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," property that doesn't exist yet, we won't be able to run our tests. In order to get around this and see our test fail, however, let's temporarily change the 'Act' portion of our test to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"int result = 0;\n")),(0,a.kt)("p",null,"Now we should be able to see our test fail properly."),(0,a.kt)("p",null,"Let's change the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," variable in the test back to ",(0,a.kt)("inlineCode",{parentName:"p"},"newItem.Id"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"int result = newItem.Id;\n")),(0,a.kt)("p",null,"Let's also add our logic to make this test pass. We'll begin by updating our ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," class to contain a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," property:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"...\npublic class Item\n{\n  public string Description { get; set; }\n  public int Id { get; }\n  private static List<Item> _instances = new List<Item> {};\n\n...\n")),(0,a.kt)("p",null,"Then we'll set this property in the constructor:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n    public Item(string description)\n    {\n      Description = description;\n      _instances.Add(this);\n      Id = _instances.Count;\n    }\n\n    ...\n  ...\n...\n")),(0,a.kt)("p",null,"This assigns an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," to the current number of ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s in the static ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances")," list. After the first ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," is added, ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances.Count")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". After the second ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),", it'll be ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),", and so on. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances.Count")," to assign ",(0,a.kt)("inlineCode",{parentName:"p"},"Id"),"  ensures each is always unique. Note that we do this ",(0,a.kt)("em",{parentName:"p"},"after")," adding ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s to the ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances")," list in order to get an updated ",(0,a.kt)("inlineCode",{parentName:"p"},"Count")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"Id"),"."),(0,a.kt)("p",null,"One more thing: Remember that when we are working inside an object, we can use the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," to reference that object. In the code above, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"this")," to reference the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," being actively constructed by the constructor."),(0,a.kt)("p",null,"We don't add a set method, because this property will be set in the constructor automatically. In fact, we specifically ",(0,a.kt)("em",{parentName:"p"},"don't")," ever want to manually edit it. That would increase the risk of IDs not being unique."),(0,a.kt)("p",null,"This is called creating a ",(0,a.kt)("strong",{parentName:"p"},"readonly")," property. In other words, it's a property that can be read but not overwritten."),(0,a.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n    public int Id { get; }\n\n...\n")),(0,a.kt)("p",null,"If we run our tests again, they'll all pass."),(0,a.kt)("h2",{id:"finding-items-by-id"},"Finding Items By ID"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Next, we'll need to locate specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s based on their new unique ",(0,a.kt)("inlineCode",{parentName:"p"},"Id"),"s. This will help our server populate our eventual ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," detail pages with the correct object's information."),(0,a.kt)("h3",{id:"testing-1"},"Testing"),(0,a.kt)("p",null,"Let's write a test for this functionality:"),(0,a.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/ItemTests.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n  [TestMethod]\n  public void Find_ReturnsCorrectItem_Item()\n  {\n    //Arrange\n    string description01 = "Walk the dog";\n    string description02 = "Wash the dishes";\n    Item newItem1 = new Item(description01);\n    Item newItem2 = new Item(description02);\n\n    //Act\n    Item result = Item.Find(2);\n\n    //Assert\n    Assert.AreEqual(newItem2, result);\n  }\n\n...\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This test arranges multiple sample ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," objects.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It then calls a static ",(0,a.kt)("inlineCode",{parentName:"p"},"Find()")," method, passing in the int ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," as an argument because this is the anticipated ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," property of the second ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We then assert that ",(0,a.kt)("inlineCode",{parentName:"p"},"Find()")," will return ",(0,a.kt)("inlineCode",{parentName:"p"},"newItem2")," when provided the argument ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"."))),(0,a.kt)("h3",{id:"properly-failing-the-test"},"Properly Failing the Test"),(0,a.kt)("p",null,"Similar to when we added our last test, we won't be able to compile and run our test suite because we are referencing a method that doesn't yet exist. In order to properly fail this test, we'll have to set the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," to a different ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),". Normally, we could just set the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", but this time, because ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),", we'll set it to a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," we know will give us a proper failure."),(0,a.kt)("p",null,"Let's do that now:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n  //Act\n  Item result = new Item("Incorrect test item");\n...\n')),(0,a.kt)("p",null,"If we run ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet test")," we can now see that our test is failing as expected. Let's now reset the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"result"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n  //Act\n  Item result = Item.Find(2);\n...\n")),(0,a.kt)("h3",{id:"implementing-find"},"Implementing ",(0,a.kt)("inlineCode",{parentName:"h3"},"Find()")),(0,a.kt)("p",null,"Let's add logic for our new static ",(0,a.kt)("inlineCode",{parentName:"p"},"Find()")," method:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n    public static Item Find(int searchId)\n    {\n      return _instances[searchId-1];\n    }\n\n...\n")),(0,a.kt)("p",null,"We create a ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," method to locate an ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," using its ",(0,a.kt)("inlineCode",{parentName:"p"},"Id"),". It's static because it must sift through ",(0,a.kt)("em",{parentName:"p"},"all")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Item"),"s to find the one we're seeking. And because it's static, we must call it on the entire ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," class, as seen in the test above.  "),(0,a.kt)("p",null,"Also, notice we subtract ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," from the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"searchId")," because indexes in the ",(0,a.kt)("inlineCode",{parentName:"p"},"_instances")," array begin at ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", whereas our ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," properties will begin at ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("p",null,"The entire updated ",(0,a.kt)("inlineCode",{parentName:"p"},"Item.cs")," model file looks like this:"),(0,a.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using System.Collections.Generic;\n\nnamespace ToDoList.Models\n{\n    public class Item\n    {\n        public string Description { get; set; }\n        public int Id { get; }\n        private static List<Item> _instances = new List<Item> { };\n\n        public Item(string description)\n        {\n            Description = description;\n            _instances.Add(this);\n            Id = _instances.Count;\n        }\n\n        public static List<Item> GetAll()\n        {\n            return _instances;\n        }\n\n        public static void ClearAll()\n        {\n            _instances.Clear();\n        }\n\n        public static Item Find(int searchId)\n        {\n            return _instances[searchId - 1];\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Try running tests and verify that they pass. We can now automatically assign each ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," a guaranteed unique ",(0,a.kt)("inlineCode",{parentName:"p"},"Id")," that can be used to locate specific objects. In the next few lessons, we'll add functionality for ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," detail pages to our app."),(0,a.kt)("h3",{id:"repository-reference"},"Repository Reference"),(0,a.kt)("p",null,"Follow the link below to view how a sample version of the project should look at this point. Note that this is a link to a specific branch in the repository."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/section-2-to-do-list-csharp-net6/tree/5_deleting_and_finding_objects"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"})," Example GitHub Repo for To Do List: 5","_","deleting","_","and","_","finding","_","objects"))))}u.isMDXComponent=!0}}]);