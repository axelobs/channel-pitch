(this["webpackJsonpchannel-program"]=this["webpackJsonpchannel-program"]||[]).push([[0],{112:function(e,a,t){},137:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),n=t(79),r=t.n(n),l=(t(86),t(2));var i=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"CHANNEL PROGRAM"})})},o=t(27);var j=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:!0,children:Object(l.jsx)(o.b,{to:"/",children:"CHANNEL PROGRAM"})}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor03","aria-controls":"navbarColor03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarColor03",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:!0,children:Object(l.jsx)(o.b,{to:"/",children:"HOME"})})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:!0,children:Object(l.jsx)(o.b,{to:"/register",children:"ABOUT"})})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:!0,children:Object(l.jsx)(o.b,{to:"/register",children:"PITCH"})})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:!0,children:Object(l.jsx)(o.b,{to:"/register",children:"EPISODES"})})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:!0,children:Object(l.jsx)(o.b,{to:"/register",children:"CONTACT"})})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:!0,children:Object(l.jsx)(o.b,{to:"/register",children:"Register"})})})]}),Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"form-control me-sm-2",type:"text",placeholder:"Search"}),Object(l.jsx)("button",{className:"btn btn-primary my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})})},b=t(5),d=t.n(b),m=t(3),h=t(16),x=t(81),O=t(46),u=t.n(O);t(74);u.a.defaults.xsrfCookieName="CSRF-TOKEN",u.a.defaults.xsrfHeaderName="X-CSRF-Token";var p=function(){var e=Object(x.a)(),a=e.register,t=e.handleSubmit,c=e.formState;function s(){return(s=Object(h.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("/api/books",a);case 3:t=e.sent,console.log(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function n(){return(n=Object(h.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("/api/books");case 3:a=e.sent,console.log(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return function(){n.apply(this,arguments)}(),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row p-0",children:[Object(l.jsxs)("div",{className:"col d-flex flex-column justify-content-center align-items-center p-5",children:[Object(l.jsx)("h1",{children:"CREATE AN ACCOUNT"}),Object(l.jsx)("p",{children:"Already a user?"}),Object(l.jsxs)("form",{onSubmit:t((function(e){return s.apply(this,arguments)})),children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("input",Object(m.a)({className:"form-control m-0",name:"title",placeholder:"First Name",autoComplete:"off"},a("title",{required:"Required"})))}),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("input",Object(m.a)({className:"form-control m-0",name:"subtitle",placeholder:"Last Name",autoComplete:"off"},a("subtitle",{required:"Required"})))})]}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col mt-3",children:Object(l.jsx)("input",{className:"form-control m-0",placeholder:"Company Name"})})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col mt-3",children:Object(l.jsx)("input",{className:"form-control m-0",placeholder:"Email Address"})})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col mt-3",children:Object(l.jsx)("input",{className:"form-control m-0",placeholder:"Password"})})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mt-3",disabled:c.isSubmitting,children:"Sign up"})})})]})]}),Object(l.jsx)("div",{className:"col bg-dark"})]})})},v=t(8);t(112);var N=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{exact:!0,path:"/",component:i}),Object(l.jsx)(v.a,{exact:!0,path:"/register",component:p}),Object(l.jsx)(v.a,{path:"/"})]})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,141)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),c(e),s(e),n(e),r(e)}))};t(136),t(113),t(114),t(115);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),f()},86:function(e,a,t){}},[[137,1,2]]]);
//# sourceMappingURL=main.f6afb6e1.chunk.js.map