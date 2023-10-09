"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[70403],{30876:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,u=c["".concat(l,".").concat(m)]||c[m]||h[m]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7896),r=(a(2784),a(30876));const o={title:"\ud83d\udcd3 Overriding Equals and GetHashCode",id:"overriding-equals-and-gethashcode",slug:"overriding-equals-and-gethashcode",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_overriding_equals.md"},i=void 0,s={unversionedId:"c-and-net/database-basics/overriding-equals-and-gethashcode",id:"c-and-net/database-basics/overriding-equals-and-gethashcode",title:"\ud83d\udcd3 Overriding Equals and GetHashCode",description:"Before we add functionality to our To Do List app that will save new Items to our database, we need to consider a specific problem that comes up when comparing two objects.",source:"@site/docs/c-and-net/8_database-basics/0k-overriding-equals.md",sourceDirName:"c-and-net/8_database-basics",slug:"/c-and-net/database-basics/overriding-equals-and-gethashcode",permalink:"/c-and-net/database-basics/overriding-equals-and-gethashcode",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"\ud83d\udcd3 Overriding Equals and GetHashCode",id:"overriding-equals-and-gethashcode",slug:"overriding-equals-and-gethashcode",hide_table_of_contents:!0,sidebar_position:12,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/0k_overriding_equals.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Testing for an Empty Database",permalink:"/c-and-net/database-basics/testing-for-an-empty-database"},next:{title:"\ud83d\udcd3 Saving Objects in the Database",permalink:"/c-and-net/database-basics/saving-objects-in-the-database"}},l={},p=[{value:"Overriding Built-In Methods",id:"overriding-built-in-methods",level:2},{value:"Overriding <code>Equals()</code>",id:"overriding-equals",level:3},{value:"Overriding <code>GetHashCode()</code>",id:"overriding-gethashcode",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before we add functionality to our To Do List app that will save new ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s to our database, we need to consider a specific problem that comes up when comparing two objects."),(0,r.kt)("p",null,"We'll start with a new test that demonstrates the problem."),(0,r.kt)("div",{class:"filename"},"ToDoList.Tests/ModelTests/ItemTests.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'[TestMethod]\npublic void Equals_ReturnsTrueIfDescriptionsAreTheSame_Item()\n{\n  // Arrange, Act\n  Item firstItem = new Item("Mow the lawn");\n  Item secondItem = new Item("Mow the lawn");\n\n  // Assert\n  Assert.AreEqual(firstItem, secondItem);\n}\n')),(0,r.kt)("p",null,"In the eyes of a user, ",(0,r.kt)("inlineCode",{parentName:"p"},"firstItem")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"secondItem")," are exactly the same. Both are ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s for mowing the lawn. However, if we run our tests, we'll get the following error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{style:{color:"red"}},"Error Message: Assert.AreEqual failed. Expected:<ToDoList.Models.Item>. Actual:<ToDoList.Models.Item>.")),(0,r.kt)("p",null,"From the perspective of our application, ",(0,r.kt)("inlineCode",{parentName:"p"},"firstItem")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"secondItem")," are two different objects that happen to have the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," property. This is because objects created from C# classes are saved as references to actual data stored in memory. This means that when we create ",(0,r.kt)("inlineCode",{parentName:"p"},"firstItem"),", this variable stores a reference to data saved in memory, but not the actual data. The same is true for ",(0,r.kt)("inlineCode",{parentName:"p"},"secondItem")," as well. So when we compare ",(0,r.kt)("inlineCode",{parentName:"p"},"firstItem")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"secondItem"),", we are actually comparing their two references, which are ",(0,r.kt)("em",{parentName:"p"},"not")," the same. "),(0,r.kt)("p",null,'All this talk about "references" and "actual data" actually has formal terminology in C#: data types are considered a ',(0,r.kt)("strong",{parentName:"p"},"reference type")," or a ",(0,r.kt)("strong",{parentName:"p"},"value type"),", and each category describes how the data is saved in memory. Let's learn more about these two categories."),(0,r.kt)("p",null,"When we create classes or interfaces, we create a reference type. When a variable stores a ",(0,r.kt)("strong",{parentName:"p"},"reference type"),", it means that it only stores a reference to the object in memory, and not the actual object data. Let's look at an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'[TestMethod]\npublic void ReferenceTypes_ReturnsTrueBecauseBothItemsAreSameReference_bool()\n{\n  // Arrange, Act\n  Item firstItem = new Item("Mow the lawn");\n  Item copyOfFirstItem = firstItem;\n  copyOfFirstItem.Description = "Learn about C#";\n\n  // Assert\n  Assert.AreEqual(firstItem.Description, copyOfFirstItem.Description);\n}\n')),(0,r.kt)("p",null,"With this test, we demonstrate how two ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," objects both point to the same reference in memory. If we run this test in our To Do List app, the test will pass."),(0,r.kt)("p",null,"When we create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"copyOfFristItem")," set to the ",(0,r.kt)("inlineCode",{parentName:"p"},"firstItem"),", we might expect that we're creating a brand new and separate object (a new reference in memory), but in fact we're just setting a new variable to the same object reference that ",(0,r.kt)("inlineCode",{parentName:"p"},"firstItem")," points to. We verify this when we change the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"copyOfFirstItem.Description")," and compare it to ",(0,r.kt)("inlineCode",{parentName:"p"},"firstItem.Description"),": the values are the same! "),(0,r.kt)("p",null,"Note that delegates and records are also reference types in C#, though we haven't worked with those data types before. To learn more about reference types, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/reference-types"},"MS Docs on Reference Types"),"."),(0,r.kt)("p",null,"On the other hand, when a variable stores a ",(0,r.kt)("strong",{parentName:"p"},"value type"),", it means that it stores the actual data, not a reference to it. This means that when we compare value types, they are considered the same if they store the same data. This is unlike with reference types like we saw with the first test comparing two ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," objects with the same data. Let's look at a test that demonstrates this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[TestMethod]\npublic void ValueTypes_ReturnsTrueBecauseValuesAreTheSame_Bool()\n{\n  // Arrange, Act\n  int test1 = 1;\n  int test2 = 1;\n\n  // Assert\n  Assert.AreEqual(test1, test2);\n}\n")),(0,r.kt)("p",null,"The above test will pass, because as value types, ",(0,r.kt)("inlineCode",{parentName:"p"},"test1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"test2")," store the actual data (not a reference to data stored elsewhere) and C# can compare the values and determine they are the same. This is unlike the very first test we wrote that fails to to declare equality between two ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s that contain the exact same data. Examples of value types include ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"char"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),". To learn more about value types, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/value-types"},"MS Docs on value types"),"."),(0,r.kt)("p",null,"Note that strings are a reference type, and ",(0,r.kt)("em",{parentName:"p"},"not")," a value type. However, strings are given extra functionality so that they can be compared just like value types. To learn more, visit ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#the-string-type"},"the MS Docs on ",(0,r.kt)("inlineCode",{parentName:"a"},"string")),"."),(0,r.kt)("h2",{id:"overriding-built-in-methods"},"Overriding Built-In Methods"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"From the perspective of our tests, we want two ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," objects to be seen as the same. Our test should be able to instantiate an ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," and then expect that an ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," returned from our database is equal to the first ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," if they have the same properties. However, when a record is retrieved from the database, C# has to convert it into a ",(0,r.kt)("em",{parentName:"p"},"new")," object. That means it will always be a different object from the first ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"."),(0,r.kt)("p",null,"So, we need to update our application so our tests know when we want two different objects to be considered the same."),(0,r.kt)("h3",{id:"overriding-equals"},"Overriding ",(0,r.kt)("inlineCode",{parentName:"h3"},"Equals()")),(0,r.kt)("p",null,"We can fix this issue by overriding a built-in method that belongs to all objects created via the ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," declaration. Note that best practice dictates that this method be below the properties and constructors but above the other methods in our file:"),(0,r.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\n    public override bool Equals(System.Object otherItem)\n    {\n      if (!(otherItem is Item))\n      {\n        return false;\n      }\n      else\n      {\n        Item newItem = (Item) otherItem;\n        bool descriptionEquality = (this.Description == newItem.Description);\n        return descriptionEquality;\n      }\n    }\n\n...\n")),(0,r.kt)("p",null,"Let's go over this method line by line."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"Equals()")," is built into C#. It's included in a set of default behaviors all objects have. If we want to override it, we do so with the ",(0,r.kt)("inlineCode",{parentName:"p"},"override")," keyword, which we use here.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"Equals()")," accepts ",(0,r.kt)("em",{parentName:"p"},"any")," type of object, we must declare its argument as the generic ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Object")," type. That's why our parameter specifies that ",(0,r.kt)("inlineCode",{parentName:"p"},"otherItem")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Object"),", not an ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Next, we have a conditional that checks if the argument passed into the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"otherItem")," is in fact an ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," object. If it isn't, our method will return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". At the very least, we know that we want both objects to be of the same type.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Next, we use ",(0,r.kt)("strong",{parentName:"p"},"type casting")," to ensure that ",(0,r.kt)("inlineCode",{parentName:"p"},"otherItem")," is in fact an ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),". With type casting, we turn ",(0,r.kt)("inlineCode",{parentName:"p"},"System.Object otherItem")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"Item otherItem"),". "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This may seem like a redundant piece of code but our method will break without it. If we omit the type casting ",(0,r.kt)("inlineCode",{parentName:"li"},"(Item)")," in the previous line, we'll get the following error when we try to run our tests: ",(0,r.kt)("inlineCode",{parentName:"li"},"'object' does not contain a definition for 'Description' and no accessible extension method 'Description' accepting a first argument of type 'object' could be found"),"."),(0,r.kt)("li",{parentName:"ul"},"To learn about type casting, ",(0,r.kt)("a",{parentName:"li",href:"/c-and-net/data-types-variables-branching-and-looping/type-casting"},"check out this lesson"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We can now compare the ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," (the ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," our method will be called on) to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"newItem"),". If they have the same value for ",(0,r.kt)("inlineCode",{parentName:"p"},"Description"),", our application should consider both ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s to be exactly the same. "))),(0,r.kt)("p",null,"We're done with overriding ",(0,r.kt)("inlineCode",{parentName:"p"},"Equals()")," for the moment. In the next lesson, we'll update this method to include a comparison of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," property."),(0,r.kt)("h3",{id:"overriding-gethashcode"},"Overriding ",(0,r.kt)("inlineCode",{parentName:"h3"},"GetHashCode()")),(0,r.kt)("p",null,"Our new test will now pass. However, there is now a new warning: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Item' overrides Object.Equals(object o) but does not override Object.GetHashCode()"),". This warning is letting us know that we also need to override the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetHashCode()")," method if we want the ",(0,r.kt)("inlineCode",{parentName:"p"},"Equals()")," method to also evaluate dictionary or hash table entries as the same. "),(0,r.kt)("p",null,"Dictionaries and ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-6.0"},"hash tables")," are hash-based collections, which give each entry a ",(0,r.kt)("strong",{parentName:"p"},"hash code"),", which is a unique identifier. The point of each entry having a unique hash code is to make searching and finding an entry fast and efficient. Also, when we're comparing two objects and they both have the same hash code, they are considered to be the same object."),(0,r.kt)("p",null,"We can get the hash code of an entry using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetHashCode()")," method, which uses a hashing function to get the hash code (an integer). A ",(0,r.kt)("strong",{parentName:"p"},"hashing function")," takes an input, changes it, and returns a unique output. For the same input, the hash function always returns the same output. Why? Well, every time we search for an entry in a dictionary or hash table, we want to always get the same element returned to us."),(0,r.kt)("p",null,"When we override the ",(0,r.kt)("inlineCode",{parentName:"p"},"GetHashCode()")," method, we're telling the C# compiler how the hash code should be determined for the object that it is called on. There are many ways we can do this, and we'll pick the simplest route. Add the following code to ",(0,r.kt)("inlineCode",{parentName:"p"},"ToDoList/Item.cs"),", below the ",(0,r.kt)("inlineCode",{parentName:"p"},"Equals()")," method."),(0,r.kt)("div",{class:"filename"},"ToDoList/Models/Item.cs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n    public override bool Equals(System.Object otherItem)\n    {\n      ...\n    }\n\n    public override int GetHashCode()\n    {\n        return Id.GetHashCode();\n    }\n...\n")),(0,r.kt)("p",null,"With the above code, we're telling the compiler to generate a hash code for an ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," based on the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," property. Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"Id")," property is always unique and never will change, this is a good value to use to generate a hash code. Note that we could use any object or ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," property here. The thing we need to be careful about is choosing a value like ",(0,r.kt)("inlineCode",{parentName:"p"},"Description"),' that may not be unique across objects, which could generate "collisions" where multiple entries have the same hash code.'),(0,r.kt)("p",null,"With the above code in place, we'll resolve the terminal warning. However, it's important to note that we won't be using the overridden ",(0,r.kt)("inlineCode",{parentName:"p"},"GetHashCode()")," method. That's because we will not use custom objects (like ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),") as the key of a dictionary entry, which is when the overridden ",(0,r.kt)("inlineCode",{parentName:"p"},"GetHashCode()")," method is required."),(0,r.kt)("p",null,"Now that we have our two new methods in place, we're ready to write and test a method for saving ",(0,r.kt)("inlineCode",{parentName:"p"},"Item"),"s to the database. To learn more about the topics covered in this lesson, visit the following MS Documentation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To read more about best practices with overriding ",(0,r.kt)("inlineCode",{parentName:"li"},"Equals()"),", check out this ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/how-to-define-value-equality-for-a-type"},"Microsoft documentation"),"."),(0,r.kt)("li",{parentName:"ul"},"To learn more about overriding ",(0,r.kt)("inlineCode",{parentName:"li"},"GetHashCode()"),", including more examples and remarks on use cases, visit the ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.object.gethashcode?view=net-6.0#remarks"},"MS Documentation on ",(0,r.kt)("inlineCode",{parentName:"a"},"GetHashCode()")),".")))}h.isMDXComponent=!0}}]);