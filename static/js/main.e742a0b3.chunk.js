(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{20:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(15),i=n.n(a),u=(n(20),n(11)),s=n(2),o=n(4),l=n.n(o),j=n(10),f=n(12),b=n(9),h=n(6),d=n(3),p="https://opentdb.com";function O(){return m.apply(this,arguments)}function m(){return(m=Object(h.a)(l.a.mark((function e(){var t,n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(p,"/api_token.php?command=request"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,r=c.token,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return v.apply(this,arguments)}function v(){return(v=Object(h.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/api_category.php"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,c=n.trivia_categories,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return n=e.sent,c=n.filter((function(e){return e.name===t}))[0].id,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(l.a.mark((function e(t){var n,c,r,a,i,u,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:"",c=s.length>2&&void 0!==s[2]?s[2]:"",r=s.length>3?s[3]:void 0){e.next=5;break}return e.abrupt("return");case 5:return a="amount=".concat(t).concat(n).concat(c,"&token=").concat(r),e.next=8,fetch("".concat(p,"/api.php?").concat(a));case 8:return i=e.sent,e.next=11,i.json();case 11:return u=e.sent,e.abrupt("return",u);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=n(1),C=r.a.createContext();function N(e){var t=e.children,n=Object(c.useState)(["Any Category"]),r=Object(d.a)(n,2),a=r[0],i=r[1],u=["Any Difficulty","easy","medium","hard"],s=Object(c.useState)({amount:10,category:a[0],difficulty:u[0]}),o=Object(d.a)(s,2),p=o[0],O=o[1];function m(){return(m=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,n=t.map((function(e){return e.name})),i([].concat(Object(j.a)(a),Object(j.a)(n)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),Object(q.jsx)(C.Provider,{value:{categories:a,difficulty:u,filledForm:p,handleFormChange:function(e){e.preventDefault();var t=e.target,n=t.name,c=t.value;O(Object(b.a)(Object(b.a)({},p),{},Object(f.a)({},n,c)))}},children:t})}function S(){return Object(c.useContext)(C)}n(23);var A=function(){var e=Object(s.f)(),t=S(),n=t.categories,c=t.difficulty,r=t.filledForm,a=t.handleFormChange;return Object(q.jsx)("main",{children:Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e("/quiz/questions")},className:"quiz-form",children:[Object(q.jsx)("h2",{children:"Quiz"}),Object(q.jsxs)("div",{children:[Object(q.jsx)("label",{htmlFor:"questionsAmount",children:"Number Of Questions"}),Object(q.jsx)("input",{type:"number",name:"amount",id:"questionsAmount",value:r.amount,onChange:function(e){return a(e)}})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("label",{htmlFor:"category",children:"Category"}),Object(q.jsx)("select",{name:"category",id:"category",value:r.category,onChange:function(e){return a(e)},children:n.map((function(e,t){return Object(q.jsx)("option",{value:e,children:e},t)}))})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)("label",{htmlFor:"difficultyLevel",children:"Difficulty"}),Object(q.jsx)("select",{name:"difficulty",id:"difficultyLevel",value:r.difficulty,onChange:function(e){return a(e)},children:c.map((function(e,t){return Object(q.jsx)("option",{value:e,children:e},t)}))})]}),Object(q.jsx)("button",{className:"submitBtn",type:"submit",children:"submit"})]})})},F=n(14);n(27);var z=function(e){var t=e.question,n=e.correct_answer,r=e.incorrect_answers,a=e.checkAnswer,i=Object(c.useState)([]),u=Object(d.a)(i,2),s=u[0],o=u[1],l=Object(c.useState)(-1),f=Object(d.a)(l,2),b=f[0],h=f[1];return Object(c.useEffect)((function(){t&&o(function(e){for(var t=e.slice(),n=t.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),r=t[c];t[c]=t[n],t[n]=r}return t}([n].concat(Object(j.a)(r))))}),[t]),t?Object(q.jsxs)("article",{className:"questionContainer",children:[Object(q.jsx)("h2",{className:"question",children:Object(F.decode)(t)}),s.map((function(e,t){return Object(q.jsx)("p",{className:"answers ".concat(t===b&&"active"),onClick:function(){return h(t)},children:Object(F.decode)(e)},t)})),Object(q.jsx)("button",{className:"next-button",disabled:-1===b,onClick:function(){a(s[b],n),h(-1)},children:"Next Question"})]}):Object(q.jsx)("h2",{children:"loading..."})};n(28);var D=function(e){var t=e.questionsNumber,n=e.playerPoints,c=Object(s.f)();return Object(q.jsx)("div",{className:"modal-overlay",children:Object(q.jsxs)("div",{className:"modal",children:[Object(q.jsx)("h2",{children:"Finished"}),Object(q.jsxs)("p",{children:["You answered ",n," out of ",t]}),Object(q.jsx)("button",{onClick:function(){c("/quiz")},children:"Play Again"})]})})};n(29);var _=function(){var e=S().filledForm,t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(0),u=Object(d.a)(i,2),s=u[0],o=u[1],j=Object(c.useState)(0),f=Object(d.a)(j,2),p=f[0],m=f[1],x=Object(c.useState)(!1),v=Object(d.a)(x,2),g=v[0],k=v[1];function C(){return(C=Object(h.a)(l.a.mark((function t(){var n,c,r,i,u,s,o,j,f;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.amount,c=e.category,r=e.difficulty,t.next=3,O();case 3:if(i=t.sent,"Any Category"===c){t.next=9;break}return t.next=7,y(c);case 7:o=t.sent,u="&category=".concat(o);case 9:return"Any Difficulty"!==r&&(s="&difficulty=".concat(r)),t.next=12,w(n,u,s,i);case 12:j=t.sent,f=j.results,a(f);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){C.apply(this,arguments)}()}),[]),Object(q.jsxs)("div",{className:"questionsContainer",children:[Object(q.jsx)("p",{children:"".concat(p," / ").concat(r.length)}),Object(q.jsx)(z,Object(b.a)({checkAnswer:function(e,t){t===e&&m(p+1),function(e){e>=r.length-1?k(!0):o(e+1)}(s)}},r[s])),g&&Object(q.jsx)(D,{questionsNumber:r.length,playerPoints:p})]})};var E=function(){return Object(q.jsx)(u.a,{children:Object(q.jsxs)(s.c,{children:[Object(q.jsx)(s.a,{path:"/quiz",element:Object(q.jsx)(A,{})}),Object(q.jsx)(s.a,{path:"/quiz/questions",element:Object(q.jsx)(_,{})})]})})};i.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(N,{children:Object(q.jsx)(E,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e742a0b3.chunk.js.map