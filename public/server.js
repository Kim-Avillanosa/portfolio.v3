if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const o=e=>a(e,r),f={module:{uri:r},exports:c,require:o};s[r]=Promise.all(i.map((e=>f[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-C521OntRJKN1YXkCRhuIj.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/C521OntRJKN1YXkCRhuIj/_buildManifest.js",revision:"e732aea22a563f2af49fe35e297cfcf6"},{url:"/_next/static/C521OntRJKN1YXkCRhuIj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/793-560cd3b2d967154f.js",revision:"560cd3b2d967154f"},{url:"/_next/static/chunks/948-a9edf7a658025825.js",revision:"a9edf7a658025825"},{url:"/_next/static/chunks/framework-0c7baedefba6b077.js",revision:"0c7baedefba6b077"},{url:"/_next/static/chunks/main-d82a2fb6cebecf56.js",revision:"d82a2fb6cebecf56"},{url:"/_next/static/chunks/pages/_app-239ac38cd1389cb0.js",revision:"239ac38cd1389cb0"},{url:"/_next/static/chunks/pages/_error-08a9db0f433628d8.js",revision:"08a9db0f433628d8"},{url:"/_next/static/chunks/pages/_offline-850997a07013836a.js",revision:"850997a07013836a"},{url:"/_next/static/chunks/pages/index-48b3c3a1876c6e68.js",revision:"48b3c3a1876c6e68"},{url:"/_next/static/chunks/pages/me-2292d10a82e5ea98.js",revision:"2292d10a82e5ea98"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2e2f8b39736899c0.js",revision:"2e2f8b39736899c0"},{url:"/_next/static/css/7296fbcd2d8bc3b5.css",revision:"7296fbcd2d8bc3b5"},{url:"/_next/static/css/a60b94664ab9882f.css",revision:"a60b94664ab9882f"},{url:"/_next/static/media/0cf580864ae59341-s.woff2",revision:"9dc5c6da3314b5ad3e00ccbf3ef10513"},{url:"/_next/static/media/8bb90efd1b2442e0-s.woff2",revision:"87f09b862d14319724588218fc942688"},{url:"/_next/static/media/b3e13a4ac57b538e-s.woff2",revision:"06dcf6e4964584269071da60f523e129"},{url:"/_next/static/media/cb6f448281d0c282-s.woff2",revision:"af93dfb1312ecb3b98b31d2297739188"},{url:"/_next/static/media/f884d4ea94220255-s.p.woff2",revision:"764c83e6b726b9604b89b81974219735"},{url:"/_next/static/media/fb3d4f9492d39101-s.woff2",revision:"d4831dd83581f1d91182d0b53a70a3cd"},{url:"/_offline",revision:"C521OntRJKN1YXkCRhuIj"},{url:"/assets/Kim Cyriel S. Avillanosa.pdf",revision:"4232a80e581e7985166d3383e1431ccd"},{url:"/assets/banner.png",revision:"ad7512a9fa1978f1ef5d3e1076cd2291"},{url:"/assets/github.png",revision:"1ff8926e98c31f13fa1d6eda7acc42e8"},{url:"/assets/install.png",revision:"9c9ccc32feb77388e8ec8b036d7ddc2f"},{url:"/assets/linkedin.png",revision:"ceec71c9f7e42419a8ed09aeec6ffcd4"},{url:"/assets/me-banner.jpg",revision:"b58aff78626a736391a087ffbb7cc03d"},{url:"/assets/npm.png",revision:"4668b9ea45655a4d2f957f999dd41a92"},{url:"/assets/sample.gif",revision:"e04636997cbd8ed7d5c138fab4d45b5f"},{url:"/assets/timelapse.gif",revision:"b829ede850eaec958f75f6dd5041e53d"},{url:"/audio/failed.m4a",revision:"a4490bb5aa40b913820e8be8d24bce7d"},{url:"/audio/success.m4a",revision:"5fa5e3b3b18812639b8ece5436f7a280"},{url:"/favicon.ico",revision:"ec91ce048a179c3f797894b6b71735bc"},{url:"/favicon/android-chrome-192x192.png",revision:"17012e742fb25eeb5a5c264257edbf82"},{url:"/favicon/android-chrome-512x512.png",revision:"aff60777e935d04d94c35d17787b7da4"},{url:"/favicon/apple-touch-icon.png",revision:"57738bf1850696c534e54f53f7d797a7"},{url:"/favicon/favicon-16x16.png",revision:"bfc67f7c5405c7aa541c7faaa7d19f98"},{url:"/favicon/favicon-32x32.png",revision:"0d5d1a18109bb01d5e88ee7cdf80dc3b"},{url:"/images/application128.png",revision:"84c9204ccf27a6266b1ef541170286b2"},{url:"/images/application256.png",revision:"d8b016a6d7f285cfdf61654201826aa9"},{url:"/images/application512.png",revision:"ea2ecb358b7905908950674a76d43130"},{url:"/images/brand.png",revision:"d642ea88201391f99fedee4dc3a08f5c"},{url:"/images/ipp.png",revision:"1136c04ab9266691bda26746294700d2"},{url:"/images/logo/azure.png",revision:"441104121f45696d5db055686ef3f6f3"},{url:"/images/logo/c-sharp.png",revision:"fcd5414d57668eddd0beadc264ec925e"},{url:"/images/logo/default.png",revision:"70856270a422e842d8f45f624e79a0c6"},{url:"/images/logo/docker-compose.png",revision:"441210853adece3ae529caad0d0eaf0e"},{url:"/images/logo/docker.png",revision:"b3e6202f5356edebd8c8205623eef0f1"},{url:"/images/logo/dotnet.png",revision:"61128cf6975e2fdc18ba9d7002781168"},{url:"/images/logo/git.png",revision:"728ff5a8e44d74cd0f2359ef0a9ec88a"},{url:"/images/logo/js.png",revision:"6891ca53c103035866b0bd4fbacf0b2a"},{url:"/images/logo/microsoft.png",revision:"e31059842abef653a8ad5bede793ef94"},{url:"/images/logo/nextjs.png",revision:"d17b66a8326b901fbf01fc0ac9855f0d"},{url:"/images/logo/outsystems.png",revision:"37aca082a47b52dc5d8ebd35d1808109"},{url:"/images/logo/react.png",revision:"776fd8269417774ef8b29304781e5277"},{url:"/images/logo/redux.png",revision:"7571b6c674be0e4f8fee8a0f0b673701"},{url:"/images/logo/sql.png",revision:"fd3e71e1867e9980491402a3f0fa77a4"},{url:"/images/logo/typescript.png",revision:"bff6b2788849ed735b91799212e1d4c4"},{url:"/images/logo/wpf.png",revision:"63324af0a1a47b4571062cbcf77397ae"},{url:"/images/logo/zustand.png",revision:"7ca577fd8e2eb0361928fb0da75c82bc"},{url:"/images/ppc.png",revision:"3e9fc74be0ba00f5a6b2afbc54946eee"},{url:"/images/pps.png",revision:"de98d3f55f0e7c4a196e698f39c2b136"},{url:"/images/socials/github.png",revision:"3d4c7482f267f5accbb7461766f3f790"},{url:"/images/socials/linkedin.png",revision:"d604727cedcd27fcc981ffdb1f318a66"},{url:"/images/socials/linktree.png",revision:"21af1052657cbd08d478b76422d10618"},{url:"/images/theme/dark.png",revision:"fec6b2f469a045ce7ec396cb23851bcd"},{url:"/images/theme/install.png",revision:"cb9ff3320b9584fa1ddbfb497ca6d67b"},{url:"/images/theme/light.png",revision:"b09ad3828efa3033850fe095405d664f"},{url:"/images/yondu.png",revision:"89b7750fa193915c490e4e8fb7675a36"},{url:"/manifest.json",revision:"0a13b11cc06da2b97657f439d61255be"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/output.css",revision:"123bb289695a2bd52a1fb6940a039fe8"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));