(this["webpackJsonpcandy-crush-react"]=this["webpackJsonpcandy-crush-react"]||[]).push([[0],{25:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),u=n(20),o=n.n(u),i=(n(25),n(9)),a=n(4),s=n(6),f=n.n(s),v=n(14),l=n(8),d=n(0),b=new l.ToadScheduler,j=new l.Task("reset scores",(function(){localStorage.setItem("testData",JSON.stringify([{username:"John",score:15},{username:"David",score:13},{username:"Alicia",score:12},{username:"Pete",score:11},{username:"Mike",score:8},{username:"Anne",score:7},{username:"Jake",score:6},{username:"Bob",score:5},{username:"Mary",score:3},{username:"William",score:3}]))})),m=new l.SimpleIntervalJob({days:1},j,"id_1");b.addSimpleIntervalJob(m);var p=!1,h=function(e){var t,n=e.score,c=e.moves,u=localStorage.getItem("testData");if(!localStorage.getItem("testData")){localStorage.setItem("testData",JSON.stringify([{username:"John",score:15},{username:"David",score:13},{username:"Alicia",score:12},{username:"Pete",score:11},{username:"Mike",score:8},{username:"Anne",score:7},{username:"Jake",score:6},{username:"Bob",score:5},{username:"Mary",score:3},{username:"William",score:3}]))}var o=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=localStorage.getItem("testData"),u=JSON.parse(u);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p||(u=localStorage.getItem("testData"),u=JSON.parse(u),t={username:document.getElementById("username").value,score:n},u.push(t),localStorage.setItem("testData",JSON.stringify(u)),p=!0,document.getElementById("username").style.visibility="hidden",document.getElementById("submitButton").style.visibility="hidden");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){o()}),[]);var a=null===(t=JSON.parse(u))||void 0===t?void 0:t.sort((function(e,t){return t.score-e.score}));return Object(d.jsxs)("div",{className:"score-board",children:[Object(d.jsxs)("h3",{className:"values",style:{display:"inline-block"},children:["Score: ",n]}),"\xa0\xa0\xa0\xa0\xa0",Object(d.jsxs)("h3",{className:"values",style:{display:"inline-block"},children:["Moves: ",c]}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",id:"username",className:"username",placeholder:"Your username.."})," ",Object(d.jsx)("button",{id:"submitButton",onClick:i,children:"Submit"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("table",{id:"scores",children:[Object(d.jsx)("h3",{className:"values",style:{"text-align":"center"},children:"Today's High Scores"}),null===a||void 0===a?void 0:a.map((function(e,t){return Object(d.jsxs)("tbody",{children:[t<1&&Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Username"}),Object(d.jsx)("th",{children:"Score"})]}),t<10&&Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.username}),Object(d.jsx)("td",{children:e.score})]})]},t)}))]})]})},y=function(e){e.score;return!e.moves&&Object(d.jsx)("div",{style:{opacity:"75%"},className:"game-over",children:Object(d.jsx)("h2",{children:"Game Over!"})})},g=n.p+"static/media/blue-candy.73120c15.png",O=n.p+"static/media/green-candy.599f7016.png",x=n.p+"static/media/orange-candy.f106b2cd.png",S=n.p+"static/media/purple-candy.ae25b8a5.png",E=n.p+"static/media/red-candy.3658b37c.png",D=n.p+"static/media/yellow-candy.a3d87a9b.png",I=n.p+"static/media/blank.973227b4.png",N=function(){for(var e=[g,O,x,S,E,D],t=Object(r.useState)([]),n=Object(a.a)(t,2),c=n[0],u=n[1],o=Object(r.useState)(null),s=Object(a.a)(o,2),f=s[0],v=s[1],l=Object(r.useState)(null),b=Object(a.a)(l,2),j=b[0],m=b[1],p=Object(r.useState)(0),N=Object(a.a)(p,2),J=N[0],k=N[1],A=Object(r.useState)(20),w=Object(a.a)(A,2),M=w[0],B=w[1],T=[],G=7,P=[],W=0;W<9;W++)P[W]=W;for(var C=0;C<9;C++)T.push(G),G++,T.push(G),G+=8;var H=[];G=6;for(var L=0;L<9;L++)H.push(G),G++,H.push(G),G++,H.push(G),G+=7;var U=[];G=5;for(var Y=0;Y<9;Y++)U.push(G),G++,U.push(G),G++,U.push(G),G++,U.push(G),G+=6;var _=function(){for(var e=function(e){if(T.includes(e))return"continue";var t=[e,e+9,e+18,e+9+1,e+9+2],n=c[e],r=c[e]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<63;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},q=function(){for(var e=function(e){if(T.includes(e))return"continue";var t=[e+9,e+2,e+18,e+18+1,e+18+2],n=c[e+2],r=c[e+2]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<63;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},z=function(){for(var e=function(e){if(T.includes(e))return"continue";var t=[e+1,e+18,e+18+1,e+18+2,e+9+1],n=c[e+1],r=c[e+1]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<63;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},F=function(){for(var e=function(e){if(T.includes(e))return"continue";var t=[e,e+1,e+2,e+9+1,e+18+1],n=c[e],r=c[e]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<63;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},K=function(){for(var e=function(e){if(T.includes(e))return"continue";var t=[e,e+9,e+18,e+18+1,e+18+2],n=c[e],r=c[e]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<63;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},Q=function(){for(var e=function(e){if(T.includes(e))return"continue";var t=[e+18,e+18+1,e+18+2,e+2,e+9],n=c[e+2],r=c[e+2]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<63;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},R=function(){for(var e=function(e){if(T.includes(e))return"continue";var t=[e,e+1,e+2,e+9,e+18],n=c[e],r=c[e]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<63;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},V=function(){for(var e=function(e){if(T.includes(e))return"continue";var t=[e,e+1,e+2,e+2+9,e+2+18],n=c[e],r=c[e]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<63;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},X=function(){for(var e=function(e){var t=[e,e+9,e+18,e+27,e+36],n=c[e],r=c[e]===I;if(t.every((function(e){return c[e]===n&&!r})))return k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}},t=0;t<45;t++){var n=e(t);if("object"===typeof n)return n.v}},Z=function(){for(var e=function(e){if(U.includes(e))return"continue";var t=[e,e+1,e+2,e+3,e+4],n=c[e],r=c[e]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+5})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<81;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},$=function(){for(var e=function(e){var t=[e,e+9,e+18,e+27],n=c[e],r=c[e]===I;if(t.every((function(e){return c[e]===n&&!r})))return k((function(e){return e+4})),t.forEach((function(e){return c[e]=I})),{v:!0}},t=0;t<54;t++){var n=e(t);if("object"===typeof n)return n.v}},ee=function(){for(var e=function(e){if(H.includes(e))return"continue";var t=[e,e+1,e+2,e+3],n=c[e],r=c[e]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+4})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<81;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},te=function(){for(var e=function(e){var t=[e,e+9,e+18],n=c[e],r=c[e]===I;if(t.every((function(e){return c[e]===n&&!r})))return k((function(e){return e+3})),t.forEach((function(e){return c[e]=I})),{v:!0}},t=0;t<63;t++){var n=e(t);if("object"===typeof n)return n.v}},ne=function(){for(var e=function(e){if(T.includes(e))return"continue";var t=[e,e+1,e+2],n=c[e],r=c[e]===I;return t.every((function(e){return c[e]===n&&!r}))?(k((function(e){return e+3})),t.forEach((function(e){return c[e]=I})),{v:!0}):void 0},t=0;t<81;t++){var n=e(t);if("continue"!==n&&"object"===typeof n)return n.v}},re=function(){for(var t=0;t<72;t++){if(P.includes(t)&&c[t]===I){var n=Math.floor(Math.random()*e.length);c[t]=e[n]}c[t+9]===I&&(c[t+9]=c[t],c[t]=I),R(),V(),K(),Q(),_(),q(),z(),F(),X(),Z(),$(),ee(),te(),ne()}},ce=function(e){v(e.target)},ue=function(e){m(e.target)},oe=function(e){var t=parseInt(f.getAttribute("data-id"));if(j){var n=parseInt(j.getAttribute("data-id"));c[n]=f.getAttribute("src"),c[t]=j.getAttribute("src");var r=[t-1,t-9,t+1,t+9].includes(n);if(n&&r){var o=R(),a=V(),s=Q(),l=K(),d=_(),b=q(),p=z(),h=F(),y=X(),g=Z(),O=$(),x=ee(),S=te(),E=ne();if(y||g||O||x||S||E||o||a||s||l||d||b||p||h){if(v(null),m(null),B((function(e){return e-1})),!M)return"Game Over!"}else c[n]=j.getAttribute("src"),c[t]=f.getAttribute("src"),u(Object(i.a)(c))}else c[n]=j.getAttribute("src"),c[t]=f.getAttribute("src"),u(Object(i.a)(c))}},ie=function(){if(!M)return!1};return Object(r.useEffect)((function(){!function(){for(var t=[],n=0;n<81;n++){var r=e[Math.floor(Math.random()*e.length)];r!==t[n-1]||r!==t[n-2]&&r!==t[n+1]?r===t[n+1]&&r===t[n+2]||r===t[n-9]&&(r===t[n-18]||r===t[n+9])||r===t[n+9]&&r===t[n+18]?n--:t[n]=r:n--}u(t)}()}),[]),Object(r.useEffect)((function(){var e=setInterval((function(){R(),V(),K(),Q(),_(),q(),z(),F(),X(),Z(),$(),ee(),te(),ne(),re(),u(Object(i.a)(c))}),30);return function(){return clearInterval(e)}}),[R,V,K,Q,_,q,z,F,X,Z,$,ee,te,ne,re,c]),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsxs)("div",{className:"game",children:[Object(d.jsx)(y,{score:J,moves:M}),c.map((function(e,t){return Object(d.jsx)("img",{src:e,alt:e,"data-id":t,draggable:ie(),onDragStart:ce,onDragOver:function(e){return e.preventDefault()},onDragEnter:function(e){return e.preventDefault()},onDragLeave:function(e){return e.preventDefault()},onDrop:ue,onDragEnd:oe,className:"candy",style:{width:String(100/9)+"%",height:String(100/9)+"%"}},t)}))]}),Object(d.jsx)(h,{score:J,moves:M})]})};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.461507a4.chunk.js.map