(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var c=n(4),r=n.n(c),o=n(2),s=n(1),a=(n(9),n(0)),i=function(t){var e=t.goods;return Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)("li",{children:t},t)}))})},u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],l=function(){var t=Object(s.useState)(!1),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(s.useState)(!1),l=Object(o.a)(r,2),b=l[0],j=l[1],h=Object(s.useState)(""),O=Object(o.a)(h,2),d=O[0],p=O[1],f=Object(s.useState)(1),g=Object(o.a)(f,2),x=g[0],y=g[1],k=Object(s.useState)(u),v=Object(o.a)(k,1)[0].filter((function(t){return t.length>=x}));switch(d){case"alphabet":v.sort();break;case"length":v.sort((function(t,e){return t.length-e.length}))}b&&v.reverse();var m=Array.from(Array(10).keys());return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Goods"}),n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(i,{goods:v}),Object(a.jsx)("button",{type:"button",onClick:function(){return j(!b)},children:"Reverse"}),Object(a.jsx)("button",{type:"button",onClick:function(){p("alphabet"),j(!1)},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",onClick:function(){p(""),j(!1),y(1)},children:"Reset"}),Object(a.jsx)("button",{type:"button",onClick:function(){p("length"),j(!1)},children:"Sort by length"}),Object(a.jsx)("select",{onChange:function(t){var e=+t.target.value;y(e)},value:x,children:m.map((function(t){return Object(a.jsx)("option",{value:t+1,children:t+1},t)}))})]}):Object(a.jsx)("button",{type:"button",onClick:function(){return c(!0)},children:"Start"})]})};r.a.render(Object(a.jsx)(l,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.f636e3ec.chunk.js.map