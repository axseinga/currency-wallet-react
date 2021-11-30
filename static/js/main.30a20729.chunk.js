(this["webpackJsonptask-react-redux-enhancement"]=this["webpackJsonptask-react-redux-enhancement"]||[]).push([[0],{36:function(n,e,t){"use strict";t.r(e);var r,c,a,i,o,s,u,d=t(0),l=t.n(d),b=t(11),h=t.n(b),j=t(2),m=t(3),f=m.b.div(r||(r=Object(j.a)(["\n    width: 100%;\n    height: 100vh;\n    background-color: #1f2943;\n"]))),p=t(4),x=t(5),O=m.b.div(c||(c=Object(j.a)(["\n    display: flex;\n    width: 100vw;\n    align-items: center;\n\n    @media (max-width: 1000px) {\n        flex-direction: column;\n    }\n"]))),g=m.b.section(a||(a=Object(j.a)(["\n    height: 100vh;\n    width: 10%;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    background-color: #37405a;\n    padding: 3rem 1rem;\n    color: white;\n\n    & h2 {\n        font-size: 1.5rem;\n        margin-bottom: 0.5rem;\n    }\n\n    h3 {\n        font-size: 1.2rem;\n        margin-bottom: 2rem;\n    }\n\n    & div {\n        display: flex;\n        flex-direction: column;\n\n        & button {\n            padding: 0.5rem 0;\n            margin: 0.2rem 0;\n        }\n    }\n\n    @media (max-width: 1200px) {\n        width: 30%;\n    }\n\n    @media (max-width: 1000px) {\n        width: 100%;\n        height: 20vh;\n\n        & div {\n            flex-direction: row;\n            justify-content: space-around;\n\n            & button {\n                width: 200px;\n            }\n        }\n    }\n"]))),v=t(1),y=function(n){return Object(v.jsxs)(g,{children:[Object(v.jsx)("h2",{children:"Online Wallet"}),Object(v.jsx)("h3",{children:"Currency exchange"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:function(){return n.setCurrentPage(1)},children:"Wallet"}),Object(v.jsx)("button",{onClick:function(){return n.setCurrentPage(2)},children:"Add currency"}),Object(v.jsx)("button",{onClick:function(){return n.setCurrentPage(3)},children:"History"})]})]})},w=m.b.section(i||(i=Object(j.a)(["\n    width: 90%;\n"]))),S=t(38),C=function(n){var e=Object(d.useState)(n),t=Object(p.a)(e,2),r=t[0],c=t[1];return[r,function(n){c(n.target.value)},c,function(){c(n)}]},P=m.b.div(o||(o=Object(j.a)(["\n    color: white;\n    font-size: 1.5rem;\n    background-color: #37405a;\n    margin: 0.5rem 0.2rem;\n    padding: 2rem;\n    text-align: center;\n\n    & h2 {\n        margin: 1rem 0;\n    }\n\n    & form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        & label {\n            min-width: 200px;\n\n            & input,\n            select {\n                margin-left: 15px;\n            }\n        }\n\n        & button {\n            margin-top: 1rem;\n        }\n    }\n"]))),D="0cd8bc758d48bed0cbe607a8b0538ba3",E="https://api.exchangeratesapi.io/v1",R=function(){return function(n,e){(function(){var n="".concat(E,"/latest?access_key=").concat(D,"&symbols=").concat("USD, JPY, GBP, CHF, CAD, AUD");return fetch(n).then((function(n){if(n.ok)return n.json();throw Error(n.statusText)})).then((function(n){return n.rates})).catch((function(n){console.log(n)}))})().then((function(e){n(function(n){return{type:"SAVE_CURRENT_RATES",payload:{rates:n}}}(e))}))}},k=function(n,e){return function(t,r){(function(n,e){var t="".concat(E,"/").concat(n,"?access_key=").concat(D,"&symbols=").concat(e);return fetch(t).then((function(n){if(n.ok)return n.json();throw Error(n.statusText)})).then((function(n){return n.rates[e].toFixed(2)})).catch((function(n){console.error(n)}))})(n,e).then((function(n){t(function(n){return{type:"SAVE_SUGGESTED_RATE",payload:{rate:n}}}(n))}))}},A=function(n){var e=C("GBP"),t=Object(p.a)(e,4),r=t[0],c=t[1],a=(t[2],t[3]),i=C(""),o=Object(p.a)(i,4),s=o[0],u=o[1],l=(o[2],o[3]),b=(new Date).toJSON().slice(0,10),h=C(b),j=Object(p.a)(h,4),m=j[0],f=j[1],O=(j[2],j[3]),g=C(n.rates.suggestedRate),y=Object(p.a)(g,4),w=y[0],D=y[1],E=y[2],R=y[3];Object(d.useEffect)((function(){F(k(m,r))}),[r,m]),Object(d.useEffect)((function(){E(n.rates.suggestedRate)}),[n.rates.suggestedRate]);var A={id:Object(S.a)(),curr:r,amount:s,purchaseDate:m,purchasePrice:w},F=Object(x.b)();return Object(v.jsx)(P,{children:Object(v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),F(function(n){return{type:"ADD_PURCHASE",payload:{purchase:n}}}(A)),a(),l(),O(),R()},children:[Object(v.jsx)("h2",{children:"Add new purchase to your wallet"}),Object(v.jsxs)("label",{htmlFor:"currency",children:["Select currency:",Object(v.jsxs)("select",{name:"currency",value:r,onChange:c,children:[Object(v.jsx)("option",{value:"GBP",children:"GBP"}),Object(v.jsx)("option",{value:"USD",children:"USD"}),Object(v.jsx)("option",{value:"JPY",children:"JPY"}),Object(v.jsx)("option",{value:"CHF",children:"CHF"}),Object(v.jsx)("option",{value:"CAD",children:"CAD"}),Object(v.jsx)("option",{value:"AUD",children:"AUD"}),Object(v.jsx)("option",{value:"PLN",children:"PLN"})]})]}),Object(v.jsxs)("label",{htmlFor:"amount",children:["Select quantity",Object(v.jsx)("input",{type:"number",min:"1",name:"amount",value:s,onChange:u})]}),Object(v.jsxs)("label",{htmlFor:"purchaseDate",children:["Purchase date:",Object(v.jsx)("input",{type:"date",name:"purchaseDate",min:"2000-01-01",max:b,value:m,onChange:f})]}),Object(v.jsxs)("label",{htmlFor:"purchaseRate",children:["Purchase rate:",Object(v.jsx)("input",{type:"number",name:"purchaseRate",value:w,onChange:D})]}),Object(v.jsx)("button",{type:"submit",children:"Add purchase"})]})})},F=m.b.div(s||(s=Object(j.a)(["\n    background-color: lightsteelblue;\n    font-size: 1.5rem;\n    padding: 2rem 4rem;\n    display: flex;\n    flex-direction: column;\n\n    & h2 {\n        margin-bottom: 0.5rem;\n        text-align: center;\n    }\n\n    & table,\n    th,\n    td {\n        border: 1px solid white;\n    }\n\n    & th,\n    td {\n        padding: 0.7rem;\n    }\n\n    @media (max-width: 1200px) {\n        margin: 2rem 1rem;\n        padding: 2rem 4rem;\n\n        & th,\n        td {\n            padding: 0.3rem;\n        }\n    }\n\n    @media (max-width: 1000px) {\n        margin: 2rem 1rem;\n        padding: 2rem 1rem;\n\n        & th,\n        td {\n            padding: 0.7rem;\n        }\n    }\n\n    @media (max-width: 900px) {\n        margin: 2rem 0;\n        font-size: 1rem;\n\n        & th,\n        td {\n            padding: 0.3rem;\n        }\n    }\n"]))),T=function(n){return Object(v.jsxs)(F,{children:[Object(v.jsx)("h2",{children:"History of your purchases"}),Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsx)("tr",{children:["Currency","Amount","Purchase Date","Purchase Rate","Current Rate","Current Value","Profit / Loss"].map((function(n){return Object(v.jsx)("th",{children:n},n)}))})}),Object(v.jsx)("tbody",{children:n.data.map((function(n,e){var t=n.curr,r=n.amount,c=n.purchaseDate,a=n.purchasePrice,i=n.currentRate,o=r*i,s=o-r*a,u=r*a,d=(o-u)/u*100;return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t}),Object(v.jsx)("td",{children:r}),Object(v.jsx)("td",{children:c}),Object(v.jsx)("td",{children:a}),Object(v.jsx)("td",{children:i}),Object(v.jsx)("td",{children:o.toFixed(0)}),Object(v.jsxs)("td",{children:[s.toFixed(0)," (",d.toFixed(2),"%)"]})]},e)}))})]})]})},U=m.b.div(u||(u=Object(j.a)(["\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    & h1 {\n        font-size: 2rem;\n        margin: 2rem 0;\n\n        & span {\n            font-size: 2.5rem;\n            color: #2da1ef;\n        }\n    }\n\n    & li {\n        padding: 0.5rem;\n    }\n"]))),_=function(n){var e=[];n.data.forEach((function(n){var t=n.amount*n.currentRate;e.push(t)}));var t=e.reduce((function(n,e){return n+e}),0);return Object(v.jsxs)(U,{children:[Object(v.jsxs)("h1",{children:["You have currencies worth of ",Object(v.jsxs)("span",{children:["\u20ac",t.toFixed(2)]})," in your wallet"]}),Object(v.jsx)("ul",{children:function(){var e=function(){var e={};return n.data.forEach((function(n){var t=n.amount*n.currentRate;e[n.curr]||(e[n.curr]=[]),e[n.curr].push(t)})),e}();return Object.entries(e).map((function(n){var e=Object(p.a)(n,2),t=e[0],r=e[1];return Object(v.jsxs)("li",{children:["You have ",t," worth of \u20ac",r.reduce((function(n,e){return n+e}),0).toFixed(2)]},t)}))}()})]})},q=function(n){var e;return Object(v.jsx)(w,{children:(e=n.currentPage,1===e?Object(v.jsx)(_,{data:n.data}):2===e?Object(v.jsx)(A,{rates:n.rates}):3===e?Object(v.jsx)(T,{data:n.data}):void 0)})},z=function(){var n=Object(x.c)((function(n){return n.wallet})).data,e=Object(x.c)((function(n){return n.api})),t=Object(d.useState)(1),r=Object(p.a)(t,2),c=r[0],a=r[1],i=Object(x.b)();return Object(d.useEffect)((function(){i(R()),n.map((function(n){n.currentRate=e.rates[n.curr].toFixed(2)}))}),[n]),Object(v.jsxs)(O,{children:[Object(v.jsx)(y,{setCurrentPage:a}),Object(v.jsx)(q,{data:n,rates:e,currentPage:c})]})},G=function(){return Object(v.jsx)(f,{children:Object(v.jsx)(z,{})})},J=t(7),H=t(19),N=t(20),B=t(21),L=t(6),V={data:[]},Y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;return"ADD_PURCHASE"===e.type?Object(L.a)(Object(L.a)({},n),{},{data:[].concat(Object(B.a)(n.data),[e.payload.purchase])}):n},I={rates:{},suggestedRate:null},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SAVE_CURRENT_RATES":return Object(L.a)(Object(L.a)({},n),{},{rates:e.payload.rates});case"SAVE_SUGGESTED_RATE":return Object(L.a)(Object(L.a)({},n),{},{suggestedRate:e.payload.rate});default:return n}},M=Object(J.combineReducers)({wallet:Y,api:W}),K=Object(J.createStore)(M,function(){try{var n=localStorage.getItem("purchases");if(null===n)return;return JSON.parse(n)}catch(e){return void console.log("something went wrong")}}(),Object(H.composeWithDevTools)(Object(J.applyMiddleware)(N.a)));K.getState();K.subscribe((function(){return function(n){try{var e=JSON.stringify(n);localStorage.setItem("purchases",e)}catch(t){console.log("data was not saved")}}(K.getState())}));var Q,X=K,Z=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),a(n),i(n)}))},$=Object(m.a)(Q||(Q=Object(j.a)(["\n\n* {\n    box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n"])));t(33).config(),h.a.render(Object(v.jsxs)(l.a.StrictMode,{children:[Object(v.jsx)($,{}),Object(v.jsx)(x.a,{store:X,children:Object(v.jsx)(G,{})})]}),document.getElementById("root")),Z()}},[[36,1,2]]]);
//# sourceMappingURL=main.30a20729.chunk.js.map