(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n(28),i=n.n(a),o=(n(36),n(29)),r=n(2),l=n(11),d=n(12),j=n(14),h=n(13),b=n(9),u=n.n(b),m=function(e){return u.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},x=function(){return u.a.get("/api/books")},O=function(e){return u.a.delete("/api/books/"+e)},f=function(e){return u.a.post("/api/books",e)};n(55);var v=function(e){var t=e.children;return Object(c.jsx)("div",{className:"jumbotron jumbotron-fluid d-flex align-items-center",children:Object(c.jsx)("div",{className:"container text-center",children:t})})};function p(e){var t=e.fluid,n=e.children;return Object(c.jsx)("div",{className:"container".concat(t?"-fluid":""),children:n})}function k(e){var t=e.fluid,n=e.children;return Object(c.jsx)("div",{className:"row".concat(t?"-fluid":""),children:n})}function g(e){var t=e.size,n=e.children;return Object(c.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:n})}n(56);var N=function(e){return 0===e.savedBooks.length?Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body player",children:Object(c.jsx)("div",{className:"article",children:Object(c.jsx)("h3",{children:"Books that You Saved"})})})}):Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body player",children:Object(c.jsxs)("div",{className:"article",children:[Object(c.jsx)("h3",{children:"Books that You Saved"}),e.savedBooks.map((function(t){return Object(c.jsxs)("li",{className:"saved-list list-group-item",children:[Object(c.jsxs)(k,{className:"SearchResult",id:t.title+"Card",children:[Object(c.jsx)(g,{size:"2",className:"bookImage",children:Object(c.jsx)("img",{src:t.image,alt:t.title})}),Object(c.jsx)(g,{size:"1",className:"emptyCol"}),Object(c.jsxs)(g,{size:"9",className:"bookInfo",children:[Object(c.jsx)(k,{children:Object(c.jsx)("h2",{className:"bookTitle",children:t.title})}),Object(c.jsx)(k,{children:Object(c.jsx)("h3",{className:"bookAuthor",children:t.authors})}),Object(c.jsx)(k,{children:Object(c.jsx)("p",{className:"bookDescription",children:t.description})})]})]},t._id),Object(c.jsx)("br",{}),Object(c.jsxs)(k,{className:"buttonDiv ",children:[Object(c.jsx)("button",{className:"deleteBook btn btn-danger",id:t._id,onClick:function(){return e.handleDeleteButton(t._id)},children:"Delete Book"}),Object(c.jsx)("a",{href:t.link,target:"example",children:Object(c.jsx)("button",{className:"viewBook btn btn-success",children:"View Book"})})]})]})}))]})})})},w=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={savedBooks:[]},e.handleDeleteButton=function(t){O(t).then((function(t){return e.componentDidMount()})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){return e.setState({savedBooks:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsxs)(p,{fluid:!0,className:"container",children:[Object(c.jsx)(v,{}),Object(c.jsx)(p,{children:Object(c.jsx)(N,{savedBooks:this.state.savedBooks,handleDeleteButton:this.handleDeleteButton})})]})}}]),n}(s.Component),B=(n(57),function(e){return Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"BookSearchLabel",children:Object(c.jsx)("h3",{children:"Search For Book"})}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{className:"col-12 form-control",value:e.search,type:"text",name:"searchBook",placeholder:"Enter Book's Name",onChange:e.handleInputChange})]}),Object(c.jsx)("button",{type:"submit",className:"submitBtn btn btn-primary",onClick:e.handleFormSubmit,children:"Submit"})]})}),y=(n(58),function(e){return 0===e.books.length?Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body player",children:Object(c.jsx)("div",{className:"article",children:Object(c.jsx)("h3",{children:"Search Results"})})})}):Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-body player",children:Object(c.jsxs)("div",{className:"article",children:[Object(c.jsx)("h3",{children:"Search Results"}),e.books.map((function(t){return Object(c.jsxs)("li",{className:"search-list list-group-item",children:[Object(c.jsxs)(k,{className:"SearchResult row",_id:t.title+"Card",children:[Object(c.jsx)(g,{size:"2",className:"bookImage",children:Object(c.jsx)("img",{src:t.image,alt:t.title})}),Object(c.jsx)(g,{size:"1",className:"emptyCol"}),Object(c.jsxs)(g,{size:"9",className:"bookInfo",children:[Object(c.jsx)(k,{children:Object(c.jsx)("h3",{className:"bookTitle",children:t.title})}),Object(c.jsx)(k,{children:Object(c.jsx)("h4",{className:"bookAuthor",children:t.author})}),Object(c.jsx)(k,{children:Object(c.jsx)("p",{className:"bookDescription",children:t.description})})]})]},t._id),Object(c.jsx)("br",{}),Object(c.jsxs)(k,{className:"buttonDiv ",children:[Object(c.jsx)("button",{className:"saveBook btn btn-primary",_id:t._id,onClick:function(t){return e.handleSavedButton(t)},children:"Save Book"}),Object(c.jsx)("a",{href:t.link,target:"example",children:Object(c.jsx)("button",{className:"viewBook btn btn-success",children:"View Book"})})]})]})}))]})})})}),S=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={search:"",books:[],error:"",message:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),m(e.state.search).then((function(t){if("error"===t.data.items)throw new Error(t.data.items);var n=t.data.items;n=n.map((function(e){return e={key:e._id,_id:e._id,title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink}})),e.setState({books:n,error:""})})).catch((function(t){return e.setState({error:t.items})}))},e.handleSavedButton=function(t){t.preventDefault(),console.log(e.state.books);var n=e.state.books.filter((function(e){return e._id===t.target._id}));n=n[0],f(n).then(e.setState({message:alert("Your book is saved")})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(p,{fluid:!0,children:[Object(c.jsx)(v,{children:Object(c.jsx)("h1",{className:"text-white",children:"Find Your Favorite Books with GoogleBook API"})}),Object(c.jsx)(p,{children:Object(c.jsx)(k,{children:Object(c.jsx)(g,{size:"12",children:Object(c.jsx)(B,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange})})})}),Object(c.jsx)("br",{}),Object(c.jsx)(p,{children:Object(c.jsx)(y,{books:this.state.books,handleSavedButton:this.handleSavedButton})})]})}}]),n}(s.Component);var C=function(){return Object(c.jsx)(p,{fluid:!0,children:Object(c.jsx)(k,{children:Object(c.jsx)(g,{size:"md-12",children:Object(c.jsxs)(v,{children:[Object(c.jsx)("h1",{className:"text-white",children:"404 Page Not Found"}),Object(c.jsx)("h1",{children:Object(c.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})})})};var I=function(){return Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-primary bg-primary",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"/",children:Object(c.jsx)("h2",{className:"text-white",children:"Google book Search"})}),Object(c.jsx)("div",{id:"navbarNav",children:Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"nav-item",_id:"home",children:Object(c.jsx)("a",{className:"nav-link",href:"/",children:Object(c.jsx)("button",{type:"button",className:"btn btn-info text-white",children:"Search Books"})})}),Object(c.jsx)("li",{className:"nav-item",_id:"report",children:Object(c.jsx)("a",{className:"nav-link",href:"/saved",children:Object(c.jsx)("button",{type:"button",className:"btn btn-warning text-white",children:"Saved Books"})})})]})})]})},_=(n(59),function(){return Object(c.jsx)("footer",{className:"page-footer",children:Object(c.jsx)("div",{className:"container-fluid text-center",children:Object(c.jsx)("p",{children:"Google Books - Y Waller"})})})});n(60);var D=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(I,{}),Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:S}),Object(c.jsx)(r.a,{exact:!0,path:"/saved",component:w}),Object(c.jsx)(r.a,{exact:!0,path:"/saved/:_id",component:w}),Object(c.jsx)(r.a,{component:C})]}),Object(c.jsx)(_,{})]})})},z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(c.jsx)(D,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");z?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):F(e)}))}}()}},[[66,1,2]]]);
//# sourceMappingURL=main.169b324b.chunk.js.map