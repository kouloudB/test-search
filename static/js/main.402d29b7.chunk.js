(this["webpackJsonpsoe-codebase"]=this["webpackJsonpsoe-codebase"]||[]).push([[0],{113:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t(0),a=t(21),r=t.n(a),i=(t(62),t(26)),s=t(3),u=t(15),l=t.n(u),d=t(22),f=t(20),h=t(16),j="GET_ACCOUNTS",p="Offline/STATUS_CHANGED",b="ACCOUNT_SEARCH_ONLINE",v="ACCOUNT_SEARCH_OFFLINE",O="https://motulvmo0ewtgpd9e.vms.hana.ondemand.com/dev/form/AccountSelection";var g=function(){Object(h.c)((function(e){return e.accountsReducer.accounts}));var e=Object(h.c)((function(e){return e.accountsReducer.isConnected})),n=Object(h.b)(),t=Object(o.useState)(""),a=Object(f.a)(t,2),r=a[0],i=a[1],s=function(){var n=Object(d.a)(l.a.mark((function n(t){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=8;break}return n.next=3,caches.open("accounts-cache");case 3:n.sent.match(O).then((function(e){return i(void 0==e?"undefined":"online data"+(null===e||void 0===e?void 0:e.toString())),null===e||void 0===e?void 0:e.json().then((function(e){e.results}))})),console.log(">>> from API"),n.next=13;break;case 8:return n.next=10,caches.open("accounts-cache");case 10:n.sent.match(O).then((function(e){return i(void 0==e?"undefined":"offline data"+(null===e||void 0===e?void 0:e.toString())),null===e||void 0===e?void 0:e.json().then((function(e){e.results}))})),console.log(">>> from CACHE");case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(o.useEffect)((function(){n({type:"GET_ACCOUNTS",payload:[],meta:{offline:{effect:{url:O,method:"GET"},commit:{type:j,meta:{}}}}})}),[]),Object(c.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100vw",flexDirection:"column"},children:[Object(c.jsx)("p",{children:e?"online":"offline"}),Object(c.jsx)("p",{children:"consCach  "+r}),Object(c.jsx)("input",{type:"text",onChange:s})]})};var m=function(){var e=Object(o.useState)("no url"),n=Object(f.a)(e,2),t=n[0],a=n[1],r=Object(o.useState)("nooo url"),i=Object(f.a)(r,2),u=i[0],h=i[1],j=Object(s.f)();return Object(o.useEffect)((function(){!function(){var e=Object(d.a)(l.a.mark((function e(){var n,t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,caches.open("cats-cache");case 2:return(n=e.sent).add("/cats.json"),n.put("/cats.json",new Response('{"james": "kitten", "daniel": "kitten"}')),e.next=7,n.match("/cats.json");case 7:return t=e.sent,console.log("cache===>",t),a(t?t.toString():"fail"),e.next=12,n.match("cats-cache");case 12:c=e.sent,console.log("cache===>",c),h(c?c.toString():"fail respo");case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){j.push("/home")},children:"Login"}),Object(c.jsx)("p",{children:"cats "+t}),Object(c.jsx)("p",{children:"cat=>>> "+u})]})};var w=function(){return Object(c.jsx)(i.a,{children:Object(c.jsx)("div",{children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{path:"/home",component:g}),Object(c.jsx)(s.a,{path:"/",component:m})]})})})},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=t(56),y=t(8),S=t(10),E=t(55),A=t(49),T={accounts:[],id:"",isConnected:!0};var N=Object(S.combineReducers)({accountsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case j:case b:return Object(y.a)(Object(y.a)({},e),{},{accounts:n.payload,isConnected:!0});case v:return Object(y.a)(Object(y.a)({},e),{},{accounts:n.payload});case p:return Object(y.a)(Object(y.a)({},e),{},{isConnected:n.payload.online});default:return e}}}),R=t(50),U=t.n(R),W=t(51),_=t.n(W),I=t(52),L=t(27),G=t.n(L),H=[Object(E.a)(),A.a,U.a],P=(Object(y.a)(Object(y.a)({},G.a),{},{discard:function(e,n,t){var c=e.response;return c&&c.status>=400||t>10}}),{effect:function(e,n){console.log("Executing effect for ".concat(n.type));var t=e.url,c=Object(k.a)(e,["url"]);return _()(Object(y.a)({url:t},c)).then((function(e){return Promise.resolve(e.data.results)})).catch((function(e){throw e}))}}),B=Object(S.createStore)(N,Object(S.compose)(S.applyMiddleware.apply(void 0,H),Object(I.offline)(P)));r.a.render(Object(c.jsx)(h.a,{store:B,children:Object(c.jsx)(w,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return void console.log("2");window.addEventListener("load",(function(){var n="".concat("","/service-worker.js?debug");x?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):C(n,e)}))}}()},62:function(e,n,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.402d29b7.chunk.js.map