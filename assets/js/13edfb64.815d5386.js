"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[80874],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7896),i=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Authentication with Identity: User Registration ViewModel, Validation, and Views",id:"authentication-with-identity-user-registration-viewmodel-validation-and-views",slug:"authentication-with-identity-user-registration-viewmodel-validation-and-views",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2f_identity_user_registration_views.md"},r=void 0,s={unversionedId:"c-and-net/authentication-with-identity/authentication-with-identity-user-registration-viewmodel-validation-and-views",id:"c-and-net/authentication-with-identity/authentication-with-identity-user-registration-viewmodel-validation-and-views",title:"\ud83d\udcd3 Authentication with Identity: User Registration ViewModel, Validation, and Views",description:"In the last lesson, we added a controller for registering new users. In this lesson, we'll create the corresponding views as well as our first ViewModel. In the process, we'll learn about a few new validation attributes (also called \"data annotations\") and Identity's default password requirements and how to override them.",source:"@site/docs/c-and-net/10_authentication-with-identity/2f-identity-user-registration-views.md",sourceDirName:"c-and-net/10_authentication-with-identity",slug:"/c-and-net/authentication-with-identity/authentication-with-identity-user-registration-viewmodel-validation-and-views",permalink:"/c-and-net/authentication-with-identity/authentication-with-identity-user-registration-viewmodel-validation-and-views",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\ud83d\udcd3 Authentication with Identity: User Registration ViewModel, Validation, and Views",id:"authentication-with-identity-user-registration-viewmodel-validation-and-views",slug:"authentication-with-identity-user-registration-viewmodel-validation-and-views",hide_table_of_contents:!0,sidebar_position:7,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/c-sharp-full-stack/blob/main/2f_identity_user_registration_views.md"},sidebar:"c-and-net",previous:{title:"\ud83d\udcd3 Authentication with Identity: User Registration Controller",permalink:"/c-and-net/authentication-with-identity/authentication-with-identity-user-registration-controller"},next:{title:"\ud83d\udcd3 Authentication with Identity: User Login and Logout",permalink:"/c-and-net/authentication-with-identity/authentication-with-identity-user-login-and-logout"}},l={},d=[{value:"ViewModels",id:"viewmodels",level:2},{value:"Adding a ViewModel",id:"adding-a-viewmodel",level:3},{value:"Registration View",id:"registration-view",level:2},{value:"Account Index View and Navigation",id:"account-index-view-and-navigation",level:2},{value:"Default Identity Password Requirements and Overriding Them",id:"default-identity-password-requirements-and-overriding-them",level:2},{value:"Overriding Default Requirements",id:"overriding-default-requirements",level:3},{value:"Testing the Functionality",id:"testing-the-functionality",level:2},{value:"Review of Conventions for ViewModels",id:"review-of-conventions-for-viewmodels",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the last lesson, we added a controller for registering new users. In this lesson, we'll create the corresponding views as well as our first ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel"),". In the process, we'll learn about a few new validation attributes (also called \"data annotations\") and Identity's default password requirements and how to override them."),(0,i.kt)("p",null,"By the end of the lesson, we'll be able to create new users in the database via a registration form."),(0,i.kt)("h2",{id:"viewmodels"},"ViewModels"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Sometimes we want to gather or present data in our views that doesn't exactly correspond to our Models. When this happens, we can use a ",(0,i.kt)("strong",{parentName:"p"},"ViewModel")," instead of a Model. Just like a Model, with ViewModels we specify what data and data types we want in our view. "),(0,i.kt)("p",null,"Technically, whatever model we pass to the view becomes the view's model. However, we can make a further distinction among our model types: we can create Models that shape our business logic, like ",(0,i.kt)("inlineCode",{parentName:"p"},"Item"),", which also shape our database entities, and we can create ViewModels that are only used to represent data in our views. "),(0,i.kt)("p",null,"We're going to create a ViewModel for our registration page, because we want to gather data that doesn't exactly correspond to our ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," class. To register users, we want to gather a user's email address and password, and we also want the user to verify they've entered their password correctly, so we want them to enter in their password a 2nd time. While the email address and password are data relevant to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," class, the second password confirmation is not. That's data that we just want to use during registration, but we don't need to permanently store that data in the new  ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," we create. Because of this, using a ViewModel is a great choice to represent our registration data."),(0,i.kt)("p",null,"Let's take a look at our new registration ViewModel so that we can make this discussion more concrete. In the process, we'll also learn about new validation attributes we can use. "),(0,i.kt)("h3",{id:"adding-a-viewmodel"},"Adding a ViewModel"),(0,i.kt)("p",null,"We can save ViewModels to their own directory or within our existing ",(0,i.kt)("inlineCode",{parentName:"p"},"Models/")," directory. Both approaches are completely valid, and we'll opt for the former choice. Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModels/")," subdirectory within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDoList/")," project directory now."),(0,i.kt)("p",null,"It's standard naming convention to end each ViewModel's file and class name with ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel"),". By that convention, we'll call our ViewModel for user registration ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterViewModel"),". Go ahead and create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterViewModel.cs")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModels/")," subdirectory. "),(0,i.kt)("p",null,"Then, add the following code to the new ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterViewModel.cs")," file:"),(0,i.kt)("div",{class:"filename"},"ViewModels/RegisterViewModel.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.ComponentModel.DataAnnotations;\n\nnamespace ToDoList.ViewModels\n{\n  public class RegisterViewModel\n  {\n    [Required]\n    [EmailAddress]\n    [Display(Name = "Email Address")]\n    public string Email { get; set; }\n\n    [Required]\n    [DataType(DataType.Password)]\n    public string Password { get; set; }\n\n    [Required]\n    [DataType(DataType.Password)]\n    [Display(Name = "Confirm password")]\n    [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]\n    public string ConfirmPassword { get; set; }\n  }\n}\n')),(0,i.kt)("p",null,"As we can see, this ViewModel looks similar to a typical Model: it's really just a grouping of properties and data annotations. Some of these data annotations may be unfamiliar, so we'll go over them now."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.datatypeattribute?view=net-6.0"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"[DataType(DataType.Password)]")," annotation")," lets us specify how data should look or be formatted more precisely than a conventional C# type like ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," indicates on its own."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.displayattribute?view=net-6.0"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"[Display]")," annotation")," lets us specify a different way for our property to be displayed. Looking at  ",(0,i.kt)("inlineCode",{parentName:"li"},'[Display(Name = "Confirm password")]'),' as an example, we\'re specifying that if we use the property\'s name in our UI that it should be displayed as "Confirm Password" instead of "ConfirmPassword". '),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.emailaddressattribute?view=net-6.0"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"[EmailAddress]")," annotation")," handles validating any input associated with this property to ensure it meets the expected email address format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations.compareattribute?view=net-6.0"},"With the ",(0,i.kt)("inlineCode",{parentName:"a"},"[Compare]")," annotation"),", we can tell our program to compare two properties and return an error if they don't match.")),(0,i.kt)("p",null,"Now to summarize our previous conversation, registration is a good use case for a ViewModel because we don't want to save ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmPassword")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," that we create when we register a new user. Additionally, we can add validation attributes to our ViewModel that will validate the data in the registration view, but won't interfere or change the data saved in our business model ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationUser")," or how it is saved to our database. This is a good separation between UI and business logic."),(0,i.kt)("p",null,"Let's create the view for user registration next."),(0,i.kt)("h2",{id:"registration-view"},"Registration View"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now let's take care of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Register")," view, which will include a form asking the user to enter an email address, password, and a confirmation password. Add a new directory in ",(0,i.kt)("inlineCode",{parentName:"p"},"Views")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," and add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Register.cshtml")," file to the new directory with the following code:"),(0,i.kt)("div",{class:"filename"},"Views/Account/Register.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n@using ToDoList.ViewModels\n\n@model RegisterViewModel\n\n<h2>Register a new user</h2>\n<hr />\n\n@if(!ViewData.ModelState.IsValid) \n{\n  @Html.ValidationSummary("Please fix the following error(s) and then resubmit the form:") \n}\n\n@using (Html.BeginForm("Register", "Account", FormMethod.Post))\n{\n  @Html.LabelFor(user => user.Email)\n  @Html.TextBoxFor(user=> user.Email)\n\n  @Html.LabelFor(user=> user.Password)\n  @Html.EditorFor(user=> user.Password)\n\n  @Html.LabelFor(user=> user.ConfirmPassword)\n  @Html.EditorFor(user=> user.ConfirmPassword)\n\n  <input type="submit" value="Register" />\n}\n\n<p>@Html.ActionLink("Back to accounts page", "Index")</p>\n')),(0,i.kt)("p",null,"Most of this code should be familiar from previous forms, with a few new elements."),(0,i.kt)("p",null,"We use the HTML helper method ",(0,i.kt)("inlineCode",{parentName:"p"},"EditorFor")," for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Password")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfirmPassword")," fields. The ",(0,i.kt)("inlineCode",{parentName:"p"},"EditorFor")," helper method will change the input's ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," attribute based on our ",(0,i.kt)("inlineCode",{parentName:"p"},"[DataType(DataType.Password)]")," validation attribute; in this case, it will create the input with ",(0,i.kt)("inlineCode",{parentName:"p"},'type="password"'),", which will turn any input into black dots. Note that we can't use the ",(0,i.kt)("inlineCode",{parentName:"p"},"TextBoxFor")," HTML helper in this case, because ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is always set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"text"'),"."),(0,i.kt)("p",null,"We're also using a new HTML helper method to display error messages if our validation determines that our model is invalid: ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationSummary()"),". This method generates a bullet point list of all of the current errors. We can optionally pass an argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationSummary()"),' method to give an introduction to our list. Because we\'ve passed "Please fix the following error(s) and then resubmit the form:", the result will look like this:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://learnhowtoprogram.s3.us-west-2.amazonaws.com/c%23/aspnet_identity_form_validation.png",alt:"Error messages visible in the registration page due to invalid model."})),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationSummary()")," is particularly helpful for us, because it handles displaying all of the Identity errors that we (possibly) generate when we try to create a new user. This means that we don't have to worry about itemizing each of error with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationMessage()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationMessageFor()")," methods, which only handles displaying one single error message each. "),(0,i.kt)("p",null,"The last thing to notice here is that we wrap our ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidationSummary()")," in an if statement. Let's look at the code once more:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'@if(!ViewData.ModelState.IsValid) \n{\n  @Html.ValidationSummary("Please fix the following error(s) and then resubmit the form:") \n}\n')),(0,i.kt)("p",null,"The if statement checks if our model's state is invalid, and if so, then displays the summary of errors. If we don't include the if statement, then we would see \"Please fix the following error(s) and then resubmit the form:\" on our screen regardless of whether or not there are any errors. This would be confusing to users. We could instead choose to not include an introductory sentence for the list simply by invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"@Html.ValidationSummary()")," with no arguments. This choice is up to you."),(0,i.kt)("p",null,"You may be wondering, what's ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewData"),"? Well, ",(0,i.kt)("strong",{parentName:"p"},"ViewData")," is a Dictionary that holds the data that's passed to the view, including ",(0,i.kt)("inlineCode",{parentName:"p"},"ModelState")," as well as anything that we add to our ViewBag in our controllers. If you want more information, ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/aspnet/core/mvc/views/overview?view=aspnetcore-6.0#weakly-typed-data-viewdata-viewdata-attribute-and-viewbag"},"the MS Docs have great examples for ViewData and ViewBag")," that clearly illustrate their differences."),(0,i.kt)("h2",{id:"account-index-view-and-navigation"},"Account Index View and Navigation"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Next, let's add a view for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Index()")," route:"),(0,i.kt)("div",{class:"filename"},"Views/Account/Index.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'@{\n  Layout = "_Layout";\n}\n\n<h2>Authentication with Identity</h2>\n<hr />\n<p>@Html.ActionLink("Register", "Register")</p>\n<p>@Html.ActionLink("Home", "Index", "Home")</p>\n')),(0,i.kt)("p",null,"Let's also add a link to the account index in our homepage:"),(0,i.kt)("div",{class:"filename"},"Views/Home/Index.cshtml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'...\n<p>@Html.ActionLink("Create or manage an account", "Index", "Account")</p>\n')),(0,i.kt)("h2",{id:"default-identity-password-requirements-and-overriding-them"},"Default Identity Password Requirements and Overriding Them"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Identity's default requirements for a password is at least six characters, a capital letter, a lowercase letter, a number, and a special character. We can override these requirements, leave them as is, or increase them. We'll start by adding a validation attribute for this, and then later we'll learn how to change these default settings."),(0,i.kt)("p",null,"Since password requirements check for many different things, the best way to verify all of them is with a regular expression (also called \"regex\"). We don't need to be an expert with regular expressions to research how to use them. In fact the regular expression we'll use was taken from ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a"},"this stack overflow discussion"),". However, there are many regex generator sites out there, and with practice you can quickly teach yourself and remember the basics."),(0,i.kt)("p",null,"Let's add our new validation attribute to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Password")," property:"),(0,i.kt)("div",{class:"filename"},"ViewModels/RegisterViewModel.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'...\n\n[Required]\n[DataType(DataType.Password)]\n[RegularExpression("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)(?=.*[@$!%*?&])[A-Za-z\\\\d@$!%*?&]{6,}$", ErrorMessage = "Your password must contain at least six characters, a capital letter, a lowercase letter, a number, and a special character.")]\npublic string Password { get; set; }\n\n...\n')),(0,i.kt)("p",null,"Here we're using the ",(0,i.kt)("inlineCode",{parentName:"p"},"[RegularExpression]")," validation attribute, which includes the regex and an error message to display if the requirements are not met. "),(0,i.kt)("p",null,"If you want a breakdown of the regex, visit the stack overflow article that is linked above. Note that backslashes ",(0,i.kt)("inlineCode",{parentName:"p"},"\\")," in C# strings are considered characters that are meant to indicate an escape out of the string. This means that if we want to include a backslash in a string we must include two ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\"),", one as the escape character and one as the actual backslash. To learn more about this, check out ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/cs1009"},"this article from Microsoft"),"."),(0,i.kt)("h3",{id:"overriding-default-requirements"},"Overriding Default Requirements"),(0,i.kt)("p",null,"Depending on the type of application, we may want different password requirements. While we're still developing an application, we may actually want looser requirements to quickly create and login dummy accounts for experimentation. After all, it's a hassle to type out a long password every time when we are in development mode."),(0,i.kt)("p",null,"We can override Identity's default settings by configuring our Identity service in ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs"),". Here are the default requirements:"),(0,i.kt)("div",{class:"filename"},"Program.cs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"...\n\nbuilder.Services.AddIdentity<ApplicationUser, IdentityRole>()\n          .AddEntityFrameworkStores<ToDoListContext>()\n          .AddDefaultTokenProviders();\n\nbuilder.Services.Configure<IdentityOptions>(options =>\n{\n  // Default Password settings.\n  options.Password.RequireDigit = true;\n  options.Password.RequireLowercase = true;\n  options.Password.RequireNonAlphanumeric = true;\n  options.Password.RequireUppercase = true;\n  options.Password.RequiredLength = 6;\n  options.Password.RequiredUniqueChars = 1;\n});\n\nWebApplication app = builder.Build();\n\n...\n")),(0,i.kt)("p",null,"And here's how we can change them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"builder.Services.Configure<IdentityOptions>(options =>\n{\n  options.Password.RequireDigit = false;\n  options.Password.RequireLowercase = false;\n  options.Password.RequireNonAlphanumeric = false;\n  options.Password.RequireUppercase = false;\n  options.Password.RequiredLength = 0;\n  options.Password.RequiredUniqueChars = 0;\n});\n")),(0,i.kt)("p",null,"The configuration above allows us to input a password of a single character to create a new user. Even though the ",(0,i.kt)("inlineCode",{parentName:"p"},"RequiredLength")," property is 0, we can't actually put in an empty password because we have a validation attribute in place that states that some input for the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterViewModel.Password")," property is required. "),(0,i.kt)("p",null,"Keep in mind that the above settings should never be used in a production environment \u2014 only during development to make our lives a bit easier."),(0,i.kt)("p",null,"Finally, ",(0,i.kt)("strong",{parentName:"p"},"note that when we change our password requirements in ",(0,i.kt)("inlineCode",{parentName:"strong"},"Program.cs"),", we need to make a corresponding update to our ",(0,i.kt)("inlineCode",{parentName:"strong"},"[RegularExpression]")," validation attribute for the ",(0,i.kt)("inlineCode",{parentName:"strong"},"RegisterViewModel.Password")," property.")," "),(0,i.kt)("h2",{id:"testing-the-functionality"},"Testing the Functionality"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We now have everything we need to create user accounts. Run the app and click on the link in the homepage to register an account. Try entering bad inputs to test out the model validation. Then try putting in accurate information to register a new user. If everything is successful, we'll be directed back to ",(0,i.kt)("em",{parentName:"p"},"Index"),". "),(0,i.kt)("p",null,"If you want to see specifically what an Identity error message looks like, do the following: create a user, and then try to create another user with the exact same email. You should get an error message that says something like \"Username '",(0,i.kt)("a",{parentName:"p",href:"mailto:test@test.com"},"test@test.com"),"' is already taken\". That's Identity's very own error handling. "),(0,i.kt)("p",null,"We can also confirm that we've successfully created a new user by checking the data in our MySQL database. To do this, navigate to the database in MySQL Workbench and right-click on ",(0,i.kt)("em",{parentName:"p"},"AspNetUsers"),". Click on ",(0,i.kt)("em",{parentName:"p"},"Select Rows \u2014 Limit 1000"),". Our database should now include a new user."),(0,i.kt)("p",null,"In the next lesson, we'll integrate logic to allow users to sign in with their newly-created accounts."),(0,i.kt)("h3",{id:"review-of-conventions-for-viewmodels"},"Review of Conventions for ViewModels"),(0,i.kt)("p",null,"The class and file name for a ViewModel contains the suffix ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel"),", as in ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterViewModel"),". "),(0,i.kt)("p",null,"We can save our ViewModels to our ",(0,i.kt)("inlineCode",{parentName:"p"},"Models/")," directory, or create a separate subdirectory called ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModels/"),". Both approaches are acceptable."),(0,i.kt)("p",null,"We use a ViewModel when we want to define a model that's used just in the view."))}c.isMDXComponent=!0}}]);