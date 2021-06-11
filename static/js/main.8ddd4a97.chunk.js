(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),l=n.n(r),s=n(1),o=(n(15),n(16),n(17),n(7)),u=n.n(o),m=function(e){var t=e.posts,n=e.selectedPost,a=e.selectedPostId;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),t!==[]?c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{className:"PostsList__item",key:e.id},c.a.createElement("div",null,c.a.createElement("b",null,"User #".concat(e.userId,": ")),e.title),c.a.createElement("button",{type:"button",className:u()("PostsList__button","button",{button_active:a===e.id}),onClick:function(){return n(e.id)}},a===e.id?"Close":"Open"))}))):c.a.createElement("h2",null,"No posts in selected User")))},i=n(9),d=(n(18),function(e){var t=e.onAdd,n=Object(a.useState)(""),r=Object(s.a)(n,2),l=r[0],o=r[1],u=Object(a.useState)(""),m=Object(s.a)(u,2),i=m[0],d=m[1],p=Object(a.useState)(""),f=Object(s.a)(p,2),E=f[0],b=f[1],h=function(){o(""),d(""),b("")};return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),t(l,i,E),h()}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",value:l,required:!0,onChange:function(e){return o(e.target.value)},className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",value:i,required:!0,onChange:function(e){return d(e.target.value)},placeholder:"Your email",className:"NewCommentForm__input"})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",value:E,placeholder:"Type comment here",required:!0,onChange:function(e){return b(e.target.value)},className:"NewCommentForm__input"})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment")))}),p=n(4),f=n.n(p),E=n(8),b="https://mate-api.herokuapp.com",h=function(){var e=Object(E.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(b).concat(t),n).then((function(e){return e.json()})).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var _=function(){return h("/posts")},v=(n(20),function(e){return t="/comments/",n=e,fetch("".concat(b).concat(t,"/").concat(n),{method:"DELETE"});var t,n}),N=function(e){return t=e,h("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});var t},O=function(e){var t=e.selectedPostId,n=Object(a.useState)(null),r=Object(s.a)(n,2),l=r[0],o=r[1],u=Object(a.useState)(null),m=Object(s.a)(u,2),p=m[0],f=m[1],E=Object(a.useState)(!0),b=Object(s.a)(E,2),_=b[0],O=b[1];Object(a.useEffect)((function(){var e;(e=t,h("/posts/".concat(e))).then(o),f(null),function(e){return h("/comments?postId=".concat(e))}(t).then(f)}),[t]);return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),null!==l&&c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,l.title)),p&&c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"PostDetails__comments"},0!==p.length?c.a.createElement("button",{type:"button",className:"button",onClick:function(){return O(!_)}},_?"Hide ".concat(p.length," comments"):"Show comments"):c.a.createElement("h3",null,"No comments yet"),_&&c.a.createElement("ul",{className:"PostDetails__list"},p.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return t=e.id,void v(t).then((function(){return f(p.filter((function(e){return t!==e.id})))}));var t}},"X"),c.a.createElement("p",null,e.body))}))))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(d,{onAdd:function(e,n,a){N({name:e,email:n,body:a,postId:t}).then((function(e){f((function(t){return[].concat(Object(i.a)(t),[e])}))}))}}))))},j=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)([]),o=Object(s.a)(l,2),u=o[0],i=o[1],d=Object(a.useState)(0),p=Object(s.a)(d,2),f=p[0],E=p[1];Object(a.useEffect)((function(){_().then(i),h("/users").then(r)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",onChange:function(e){var t,n=e.target;0===+n.value&&_().then(i),(t=+n.value,h("/posts?userId=".concat(t))).then(i)}},c.a.createElement("option",{value:"0"},"All users"),n.map((function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.name)}))))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(m,{posts:u,selectedPost:function(e){return E(e===f?0:e)},selectedPostId:f})),c.a.createElement("div",{className:"App__content"},f?c.a.createElement(O,{selectedPostId:f}):c.a.createElement("h2",null,"Open post to see details")))))};l.a.render(c.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.8ddd4a97.chunk.js.map