importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

if (workbox) {
  workbox.setConfig({
    debug: true,
  });

  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
  // workbox.precaching.precacheAndRoute([{"revision":"c92b85a5b907c70211f4ec25e29a8c4a","url":"favicon.ico"},{"revision":"6438ca42b6e586374fd70716286908bf","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"d9d975cebe2ec20b6c652e1e4c12ccf0","url":"manifest.json"},{"revision":"a69c8b860ab8b3c3e3f0110acaef805e","url":"oldsw.js"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"eb712d5aa8302bd0902253f42c1bc2e7","url":"workbox-b2aca18b.js"}]);
  workbox.precaching.precacheAndRoute([
    "/static/js/bundle.js",
    "/static/js/0.chunk.js",
    "/static/js/main.chunk.js",
    "index.html",
    "/",
    "/home"
  ])
  
  workbox.routing.registerRoute(
    new RegExp('/|/home|/images'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'pages-cache' 
   })
  ); 
//   workbox.routing.registerRoute(
//     /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
//     new workbox.strategies.CacheFirst({
//         "cacheName": "images",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxEntries: 1000,
//                 maxAgeSeconds: 31536000
//             })
//         ]
//     })
// );
const url ='https://api.fda.gov/food/(.*)'
const url2 = "https://motulvmo0ewtgpd9e.vms.hana.ondemand.com/dev/form/AccountSelection"

  workbox.routing.registerRoute(
    new RegExp(url2),
    new workbox.strategies.NetworkFirst({
      cacheName: 'accounts-cache' 
   })
  ); 

  // self.addEventListener('fetch', event => {
  //   if(event.request.method === "GET" ) {
  //     event.respondWith(
  //       fetch(event.request).then(()=> console.log('success GET')).catch(err => {
  //         return new Response(
  //           JSON.stringify({ error: "This action disabled while app is offline" }), {
  //             headers: { 'Content-Type': 'application/json' }
  //           }
  //         )
  //       })
  //     )
  //   }
  // })
//   const {strategies} = workbox;

//  self.addEventListener('fetch', (event) => {
//   if (event.request.url== url2) {
//     // Using the previously-initialized strategies will work as expected.
//     const cacheFirst = new strategies.CacheFirst();
//     event.respondWith(cacheFirst.handle({request: event.request}));
//   }
// });

}else {
  console.log(`Boo! Workbox didn't load 😬`);
}




