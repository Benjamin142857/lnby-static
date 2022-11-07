(function(){var t={230:function(t,e,n){"use strict";n(1703);var a=n(2083),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i={methods:{async initWebMeta(){try{const t=this.$store.state,e=await this.$http.get("/api/getWebMeta",{});e.data.main_banner_lst&&e.data.main_banner_lst.length>0&&(t.mainBannerList=e.data.main_banner_lst),e.data.sub_banner_lst&&e.data.sub_banner_lst.length>0&&(t.subBannerList=e.data.sub_banner_lst),e.data.other_lst&&e.data.other_lst.forEach((e=>{t.otherImgMap[e.key]&&e.src&&(t.otherImgMap[e.key]=e.src)})),console.log("==========================="),console.log("initWebMeta 成功"),console.log(t),console.log("===========================")}catch(t){console.log("==========================="),console.log("initWebMeta 失败"),console.log(t),console.log("===========================")}}},created(){this.initWebMeta()}},c=i,u=n(3736),s=(0,u.Z)(c,o,r,!1,null,"31891426",null),l=s.exports,d=n(3625);a["default"].use(d.Z);const f=[{path:"/",name:"home",component:()=>n.e(940).then(n.bind(n,1940))},{path:"/contactUs",name:"contactUs",component:()=>Promise.all([n.e(291),n.e(281)]).then(n.bind(n,9205)),meta:{title:"联系我们"}},{path:"/system",name:"system",component:()=>n.e(120).then(n.bind(n,6120)),meta:{title:"货代服务系统"}},{path:"/product",name:"product",component:()=>Promise.all([n.e(291),n.e(11)]).then(n.bind(n,9292)),meta:{title:"产品与服务"}},{path:"/afterSales",name:"afterSales",component:()=>n.e(602).then(n.bind(n,1602)),meta:{title:"在线售后"}},{path:"/bulkcargo",name:"bulkcargo",component:()=>n.e(235).then(n.bind(n,5235)),meta:{title:"散货船货运输"}},{path:"/global",name:"global",component:()=>n.e(249).then(n.bind(n,5249)),meta:{title:"国际物流服务"}},{path:"/airplant",name:"airplant",component:()=>n.e(174).then(n.bind(n,6174)),meta:{title:"国际航空货代"}},{path:"/about",name:"about",component:()=>Promise.all([n.e(291),n.e(886)]).then(n.bind(n,5913)),meta:{title:"关于岭南泵业"}},{path:"/list",name:"list",component:()=>n.e(337).then(n.bind(n,4337)),meta:{title:"产品列表"},children:[{path:"",name:"list",component:()=>n.e(622).then(n.bind(n,5622))},{path:"detail",name:"detail",component:()=>n.e(130).then(n.bind(n,4130)),meta:{title:"产品详情"}}]},{path:"/news2",name:"news2",component:()=>n.e(760).then(n.bind(n,4760)),meta:{title:"新闻2"}}],p=new d.Z({base:"/",routes:f});var m=p,h=n(5173);a["default"].use(h.ZP);var b=new h.ZP.Store({state:{mainBannerList:["static/img/main-banner/default.jpg","static/img/main-banner/default.jpg","static/img/main-banner/default.jpg"],subBannerList:["static/img/sub-banner/default.jpg","static/img/sub-banner/default.jpg","static/img/sub-banner/default.jpg"],otherImgMap:{about_top:"static/img/other/default_about_top.jpg",about_img1:"static/img/other/default_about_img1.jpg",about_img2:"static/img/other/default_about_img2.jpg",product_top:"static/img/other/default_product_top.jpg",aftersafes_top:"static/img/other/default_aftersafes_top.jpg",contact_top:"static/img/other/default_contact_top.jpg",contact_img1:"static/img/other/default_contact_img1.jpg",contact_qrcode:"static/img/other/default_contact_qrcode.jpg"}},getters:{},mutations:{},actions:{},modules:{}}),g=n(1960),v=n.n(g),_=n(4233);a["default"].config.productionTip=!1,a["default"].use(v()),a["default"].use(_.ZP),a["default"].http.interceptors.push(((t,e)=>{e((t=>{const e=t.data;if(0===e.code)return e.ok=!0,e;throw new Error(e.err_msg||e)}))})),new a["default"]({router:m,store:b,render:t=>t(l)}).$mount("#app")},6608:function(){}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var i=1/0;for(l=0;l<t.length;l++){a=t[l][0],o=t[l][1],r=t[l][2];for(var c=!0,u=0;u<a.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(c=!1,r<i&&(i=r));if(c){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"static/js/"+t+"."+{11:"97761f30",120:"1be82602",130:"5e88eed6",174:"19121ceb",235:"2ce400da",249:"ada4aff7",281:"e3aec588",291:"b9d38581",337:"2df9d83d",602:"6b923569",622:"fdc274ec",760:"46cc8184",886:"9cb330f6",940:"e808e2f3"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"static/css/"+t+"."+{11:"98299904",120:"1b671b70",130:"f1d1dc59",174:"9b23249d",235:"c27334ae",249:"587ba49a",281:"634d9b27",337:"210e60de",602:"2b53f4e6",622:"da6e9db8",760:"90b892c3",886:"787eb4d0",940:"c1ae7332"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="pc:";n.l=function(a,o,r,i){if(t[a])t[a].push(o);else{var c,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+r),c.src=a),t[a]=[o];var f=function(e,n){c.onerror=c.onload=null,clearTimeout(p);var o=t[a];if(delete t[a],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t=function(t,e,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),a(u)}};return o.onerror=o.onload=r,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===t||r===e))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===t||r===e)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),c=n.p+i;if(e(i,c))return o();t(a,c,o,r)}))},o={143:0};n.f.miniCss=function(t,e){var n={11:1,120:1,130:1,174:1,235:1,249:1,281:1,337:1,602:1,622:1,760:1,886:1,940:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(e),c=new Error,u=function(a){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,o[1](c)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,i=a[0],c=a[1],u=a[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(e&&e(a);s<i.length;s++)r=i[s],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},a=self["webpackChunkpc"]=self["webpackChunkpc"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(230)}));a=n.O(a)})();
//# sourceMappingURL=app.ea4c59f9.js.map