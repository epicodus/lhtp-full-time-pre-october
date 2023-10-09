"use strict";(self.webpackChunklhtp=self.webpackChunklhtp||[]).push([[3884],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={title:"\ud83d\udcd3 Adding Redux to React: Part 1",id:"adding-redux-to-react-part-1",slug:"adding-redux-to-react-part-1",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0k_adding_redux_to_react_part_1.md"},i=void 0,s={unversionedId:"react/react-with-redux/adding-redux-to-react-part-1",id:"react/react-with-redux/adding-redux-to-react-part-1",title:"\ud83d\udcd3 Adding Redux to React: Part 1",description:"Here at Epicodus, we usually build a project from the ground up when we learn about a new technology. We build new projects every class session or every few class sessions in order to reinforce key concepts.",source:"@site/docs/react/4_react-with-redux/0k-adding-redux-to-react-part-1.md",sourceDirName:"react/4_react-with-redux",slug:"/react/react-with-redux/adding-redux-to-react-part-1",permalink:"/react/react-with-redux/adding-redux-to-react-part-1",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"\ud83d\udcd3 Adding Redux to React: Part 1",id:"adding-redux-to-react-part-1",slug:"adding-redux-to-react-part-1",hide_table_of_contents:!0,sidebar_position:11,day:"weekend",type:"lesson",url:"https://github.com/epicodus-curriculum/react-full-stack/blob/main/0k_adding_redux_to_react_part_1.md"},sidebar:"react",previous:{title:"\ud83d\udcd3 Introduction to React Redux Library",permalink:"/react/react-with-redux/introduction-to-react-redux-library"},next:{title:"\ud83d\udcd3 Adding Redux to React: Part 2",permalink:"/react/react-with-redux/adding-redux-to-react-part-2"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here at Epicodus, we usually build a project from the ground up when we learn about a new technology. We build new projects every class session or every few class sessions in order to reinforce key concepts."),(0,a.kt)("p",null,"However, this isn't typical in the workplace. It's very unlikely you'll go into a new job and start a project from scratch. Instead, you'll be working on a larger codebase with other developers."),(0,a.kt)("p",null,"In this scenario, imagine that some developers are already working on a Help Queue application for a code school. You've been asked to incorporate Redux into the project."),(0,a.kt)("p",null,"In this lesson, that's exactly what we'll start doing. We'll work on refactoring our Help Queue application to use Redux."),(0,a.kt)("p",null,"Then, in the next lesson, we'll review and go through the steps we need to take to add Redux to a new project."),(0,a.kt)("p",null,"Let's return to the Help Queue repo we've been working on. We'll start by adding Redux and React Redux bindings to our project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"$ npm install redux@4.2.0 react-redux@8.0.2\n")),(0,a.kt)("p",null,"If you've been working along with the weekend homework up to this point, you should've added the following code to the Help Queue project that we started in the React Fundamentals course section. If for some reason you want to start fresh from here, this is the starter repo that contains all the code from the last course section:"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/epicodus-lessons/react-help-queue-starter-project"},(0,a.kt)("i",{class:"glyphicon glyphicon-folder-open"}),"  Starter Project for Help Queue"))),(0,a.kt)("p",null,"You'll need to add the following code so the project is up to date with the work we've done so far this weekend. If you're already following along and your code is up to date, you can skip to the next lesson now."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You should have a ",(0,a.kt)("inlineCode",{parentName:"li"},"src/reducers")," directory with the following file:")),(0,a.kt)("div",{class:"filename"},"src/reducers/ticket-list-reducer.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const reducer = (state = {}, action) => {\n  const { names, location, issue, id } = action;\n  switch (action.type) {\n  case 'ADD_TICKET':\n    return Object.assign({}, state, {\n      [id]: {\n        names: names,\n        location: location,\n        issue: issue,\n        id: id\n      }\n    });\n  case 'DELETE_TICKET':\n    const newState = { ...state };\n    delete newState[id];\n    return newState;\n  default:\n    return state;\n  }\n};\n\nexport default reducer;\n")),(0,a.kt)("p",null,"This is the reducer that we've already written for the Help Queue \u2014 no surprises here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"src/__tests__/reducers")," directory with the following file:")),(0,a.kt)("div",{class:"filename"},"src/__tests__/reducers/ticket-list-reducer.test.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import ticketListReducer from '../../reducers/ticket-list-reducer';\n\ndescribe('ticketListReducer', () => {\n\n  let action;\n\n  const currentState = {\n    1: {\n      names: 'Ryan & Aimen',\n      location: '4b',\n      issue: 'Redux action is not working correctly.',\n      id: 1 \n    }, 2: {\n      names: 'Jasmine and Justine',\n      location: '2a',\n      issue: 'Reducer has side effects.',\n      id: 2 \n    }\n  }\n\n  const ticketData = {\n    names: 'Ryan & Aimen',\n    location: '4b',\n    issue: 'Redux action is not working correctly.',\n    id: 1\n  };\n\n  test('Should return default state if no action type is recognized', () => {\n    expect(ticketListReducer({}, { type: null })).toEqual({});\n  });\n\n  test('Should successfully add new ticket data to mainTicketList', () => {\n    const { names, location, issue, id } = ticketData;\n    action = {\n      type: 'ADD_TICKET',\n      names: names,\n      location: location,\n      issue: issue,\n      id: id\n    };\n    expect(ticketListReducer({}, action)).toEqual({\n      [id] : {\n        names: names,\n        location: location,\n        issue: issue,\n        id: id\n      }\n    });\n  });\n\n  test('Should successfully delete a ticket', () => {\n    action = {\n      type: 'DELETE_TICKET',\n      id: 1\n    };\n    expect(ticketListReducer(currentState, action)).toEqual({\n      2: {\n        names: 'Jasmine and Justine',\n        location: '2a',\n        issue: 'Reducer has side effects.',\n        id: 2 \n      }\n    });\n  });\n\n});\n")),(0,a.kt)("p",null,"These are the tests we've already written for our reducer."),(0,a.kt)("p",null,"At this point, we are ready to actually incorporate Redux into our Help Queue."))}p.isMDXComponent=!0}}]);