"use strict";(self["webpackChunkpc"]=self["webpackChunkpc"]||[]).push([[174],{5735:function(t,i,a){a.d(i,{Z:function(){return o}});var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"breadcrumb"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._l(t.matched,(function(i,s){return a("el-breadcrumb-item",{key:s,attrs:{to:i.path===t.path?"":{path:i.path}}},[t._v(t._s(i.meta.title))])}))],2)],1)},e=[],l={name:"breadcrumb",data:function(){return{matched:[],path:""}},watch:{"$route.fullPath":function(t,i){return this.matched=this.$router.currentRoute.matched,this.path=this.$router.currentRoute.path,t}},mounted:function(){this.matched=this.$router.currentRoute.matched,this.path=this.$router.currentRoute.path}},n=l,c=a(43736),r=(0,c.Z)(n,s,e,!1,null,"8ad94024",null),o=r.exports},19029:function(t,i,a){a.d(i,{Z:function(){return d}});var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"ideaDom main"},[a("titleDomVue",{attrs:{title:"国际物流与货代观点资讯",content:"琪邦国际货运与进口报关代理服务相关资讯，以更新的国际物流视角让您了解国际贸易与货运代理相关新闻动态。"}}),a("div",{staticClass:"ideaDom-box"},t._l(t.ideaDomList,(function(i,s){return a("div",{key:s,staticClass:"ideaDom-list"},[a("div",{staticClass:"ideaDom-list-img"},[a("img",{attrs:{src:i.img,alt:""}})]),a("div",{staticClass:"ideaDom-list-title"},[t._v(t._s(i.title))]),a("div",{staticClass:"ideaDom-list-time"},[t._v(t._s(i.time))])])})),0)],1)},e=[],l=a(79338),n={name:"ideaDom",components:{titleDomVue:l.Z},data:function(){return{ideaDomList:[{img:a(12671),title:"现代国际物流体系的的几大核心维度",time:"2022 / 06 / 17  HOT"},{img:a(12671),title:"现代国际物流体系的的几大核心维度",time:"2022 / 06 / 17  HOT"},{img:a(12671),title:"现代国际物流体系的的几大核心维度",time:"2022 / 06 / 17  HOT"}]}}},c=n,r=a(43736),o=(0,r.Z)(c,s,e,!1,null,"22980219",null),d=o.exports},79338:function(t,i,a){a.d(i,{Z:function(){return o}});var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"titleDom"},[a("div",{staticClass:"main"},[a("div",{staticClass:"titleDom-h1"},[a("span",{staticClass:"trangle_01"}),t._v(" "+t._s(t.title)+" "),a("span",{staticClass:"trangle_02"})]),a("div",{staticClass:"titleDom-content",style:{color:t.myColor}},[t._v(" "+t._s(t.content)+" ")])])])},e=[],l={name:"titleDom",props:{title:{type:String,default:""},content:{type:String,default:""},myColor:{type:String,default:"#666"}}},n=l,c=a(43736),r=(0,c.Z)(n,s,e,!1,null,"66fd0914",null),o=r.exports},37169:function(t,i,a){a.d(i,{Z:function(){return o}});var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"footerCom"},[a("div",{staticClass:"footerCom-center main"},[a("div",{staticClass:"footerCom-left"},[t._m(0),a("div",{staticClass:"p2"},t._l(t.leftList,(function(i,s){return a("div",{key:s,on:{click:function(a){return t.$router.replace(i.path)}}},[t._v(" "+t._s(i.title)+" ")])})),0),a("div",{staticClass:"p3"})]),t._m(1)])])},e=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"p1"},[t._v(" Copyright © 2022 岭南泵业（LNBY）制造有限公司 保留所有版权 "),a("span",[t._v("粤ICP备2022000000号")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"footerCom-right"},[a("div",[t._v(" Tel:020-87988820   020-87988821 咨询热线，客户经理值守 ")]),a("div",[t._v("地址：广州市从化江埔街河东北路93号")]),a("div",[t._v("EMail: lingnanbeng@126.com")])])}],l={name:"footerCom",data:function(){return{leftList:[{title:"首页",path:"/"},{title:"关于岭南泵业",path:"/about"},{title:"产品与服务",path:"/product"},{title:"在线售后",path:"/afterSales"},{title:"联系我们",path:"/contactUs"}]}}},n=l,c=a(43736),r=(0,c.Z)(n,s,e,!1,null,"7569699e",null),o=r.exports},17605:function(t,i,a){a.d(i,{Z:function(){return o}});var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"topCom main"},[s("div",{staticClass:"top-left-box"}),s("div",{staticClass:"logo-img",on:{click:function(i){return t.$router.replace("/")}}},[s("img",{attrs:{src:a(62026),height:"60px"}})]),s("div",{staticClass:"ul"},t._l(t.navigation,(function(i,a){return s("div",{key:a,class:i.active.includes(t.$route.name)?"li active":"li",on:{click:function(a){i.name&&t.$router.push({name:i.name,query:i.query})}}},[s("a",[t._v(t._s(i.title))]),i.children?s("div",{staticClass:"ul-children"},t._l(i.children,(function(i,a){return s("div",{key:a,staticClass:"li-children",on:{click:function(a){return a.stopPropagation(),t.$router.replace("/"+i.name)}}},[s("a",[t._v(t._s(i.title))])])})),0):t._e()])})),0),s("div",{staticClass:"top-right-box"})])},e=[],l={name:"topCom",data:function(){return{navigation:[{title:"首页",name:"home",active:["home"],query:{}},{title:"关于岭南泵业",name:"about",active:["about"],query:{}},{title:"产品与服务",name:"product",active:["product","list","detail"],query:{},children:[{title:"产品列表",name:"list",query:{}}]},{title:"在线售后",name:"afterSales",active:["afterSales"],query:{}},{title:"联系我们",name:"contactUs",active:["contactUs"],query:{}}]}},methods:{}},n=l,c=a(43736),r=(0,c.Z)(n,s,e,!1,null,"069e1ea2",null),o=r.exports},36174:function(t,i,a){a.r(i),a.d(i,{default:function(){return k}});var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"airplant"},[a("div",{staticClass:"airplant-top"},[a("topCom"),a("div",{staticClass:"air-main",staticStyle:{color:"#fff"}},[a("div",{staticClass:"TitleDomVue"},[a("TitleDomVue",{attrs:{title:"国际空运一站式服务引领者",content:""}}),a("p",[t._v("先进的航空运输供应链管理系统，聚焦客户实际需求，琪邦以现代化网络系统和定制化服务，致力为客户提供专业、")]),a("p",[t._v("高效、高性价比的一站式空运服务解决方案。")])],1)])],1),a("div",{staticClass:"breadcrumbs"},[a("div",{staticClass:"main"},[a("breadcrumbVue")],1)]),a("div",{staticClass:"idea"},[a("IdeaDom"),a("div",{staticClass:"idea-ul main"},t._l(t.ideaUlDat,(function(i,s){return a("div",{key:s,staticClass:"idea-li"},[a("ul",t._l(i.content,(function(i,s){return a("li",{key:s},[t._v(" "+t._s(i)+" ")])})),0)])})),0)],1),t._m(0),a("div",{staticClass:"idea-main"},[a("ideDomVue")],1),t._m(1),t._m(2),a("div",{staticClass:"idea"},[a("ideaDomVue"),a("div",{staticClass:"idea-ul main"},t._l(t.ideaUlDat,(function(i,s){return a("div",{key:s,staticClass:"idea-li"},[a("ul",t._l(i.content,(function(i,s){return a("li",{key:s},[t._v(" "+t._s(i)+" ")])})),0)])})),0)],1),t._m(3),a("footerComVue")],1)},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"business-advantage"},[s("div",{staticClass:"business-advantage-box clearfix"},[s("div",{staticClass:"lf video-box"},[s("img",{attrs:{src:a(75560),alt:""}})]),s("div",{staticClass:"rt advantage-details"},[s("ul",{staticStyle:{display:"none"}},[s("li",[s("div",[t._v(" 业务优势1"),s("span",[t._v(" Business advantage")])]),s("div",{staticClass:"clearfix"},[s("p",[t._v("以系统化流程和专业化技术，打造现代化的空运服务平台，形成独一无二的业务核心竞争力。")])])]),s("li",[s("div",[t._v(" 系统化专业服务 ")]),s("p",[t._v("以客户需求为导向，量身定制安全高效的货代解决方案，全方位服务流程相匹配，确保货物100%安全出运。")])]),s("li",[s("div",[t._v(" 可视化物流追踪 ")]),s("p",[t._v("全程GPS定位追踪，精准精准定位货物位置，层层监控物流环节，确保货物100%安全到达。")])]),s("li",[s("div",[t._v(" 现代化管理团队 ")]),s("p",[t._v("队伍专业化、管理现代化、服务人性化，全天候客服团队，24小时在线服务支持，提供一对一服务。")])]),s("li",[s("div",[t._v(" 公正价格体系 ")]),s("p",[t._v("拥有合理、公正的货代报价机制，无中间环节，客户直接受益，整体方案落地可行，规避虚高报价陷阱。")])])]),s("ul",[s("li",[s("div",{staticClass:"t"},[t._v("国际空运业务优势")]),s("div",{staticClass:"clearfix"},[s("p",[t._v("以系统化流程和专业化技术，打造现代化的国际空运服务平台，形成与众不同的业务核心竞争力。")])])]),s("li",[s("div",{staticClass:"t"},[t._v(" 系统化专业服务 ")]),s("p",[t._v("以客户需求为导向，量身定制安全高效的货代解决方案，全方位服务流程相匹配，确保货物安全出运。")])]),s("li",[s("div",{staticClass:"t"},[t._v(" 可视化物流追踪 ")]),s("p",[t._v("全程GPS定位追踪,定位货物位置,层层监控物流环节,确保货物安全到达。")])]),s("li",[s("div",{staticClass:"t"},[t._v(" 现代化管理团队 ")]),s("p",[t._v("队伍专业化、管理现代化、服务人性化,全天候客服团队,24小时在线服务支持,提供一对一服务。")])]),s("li",[s("div",{staticClass:"t"},[t._v(" 公正价格体系 ")]),s("p",[t._v("拥有合理、公正的货代报价机制，无中间环节，客户直接受益，整体方案落地可行，规避虚高报价陷阱。")])])])])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"feature-service"},[s("div",{staticClass:"service"},[s("div",{staticClass:"container t",staticStyle:{color:"#fff"}},[s("span",{staticClass:"trangle_01"}),t._v(" 上海空运解决方案 "),s("span",{staticClass:"trangle_02"})]),s("p",[t._v("以满足客户需求为前提，兼具安全与高效，提供高性价比、快捷无忧的上海空运特色服务。")])]),s("div",{staticClass:"solution"},[s("ul",{staticClass:"clearfix"},[s("li",[s("img",{attrs:{src:a(72971),alt:""}}),s("div",{staticClass:"text"},[s("h3",[t._v("特殊物品解决方案")]),s("p",[t._v("Special item solution")])])]),s("li",[s("img",{attrs:{src:a(72971),alt:""}}),s("div",{staticClass:"text"},[s("h3",[t._v("危险物品解决方案")]),s("p",[t._v("Dangerous goods solution")])])]),s("li",[s("img",{attrs:{src:a(72971),alt:""}}),s("div",{staticClass:"text"},[s("h3",[t._v("国际搬家解决方案")]),s("p",[t._v("International moving solutions")])])])])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"service-process"},[s("div",{staticClass:"service"},[s("div",{staticClass:"container t"},[s("span",{staticClass:"trangle_01"}),t._v("国际航空货运代理服务流程 "),s("span",{staticClass:"trangle_02"})]),s("div",{staticClass:"clearfix"},[s("p",[t._v("系统化服务流程，层层监控转运环节，从根本上提升运输效率，系统化服务流程，层层监控转运环节，从根本上提升运输效率。")])])]),s("div",{staticClass:"icon_show clearfix"},[s("ul",{staticClass:"icon-content"},[s("li",[s("dl",{staticClass:"lf"},[s("img",{attrs:{src:a(11450),alt:"委托书填写"}}),s("dd",[s("span",[t._v("01")])]),s("dd",[s("h3",[t._v("委托书填写")]),s("p")]),s("dd",{staticClass:"air-service-icon_arrow l"})])]),s("li",[s("dl",{staticClass:"lf"},[s("img",{attrs:{src:a(11450),alt:"委托书填写"}}),s("dd",[s("span",[t._v("01")])]),s("dd",[s("h3",[t._v("委托书填写")]),s("p")]),s("dd",{staticClass:"air-service-icon_arrow l"})])]),s("li",[s("dl",{staticClass:"lf"},[s("img",{attrs:{src:a(11450),alt:"委托书填写"}}),s("dd",[s("span",[t._v("01")])]),s("dd",[s("h3",[t._v("委托书填写")]),s("p")]),s("dd",{staticClass:"air-service-icon_arrow l"})])]),s("li",[s("dl",{staticClass:"lf"},[s("img",{attrs:{src:a(11450),alt:"委托书填写"}}),s("dd",[s("span",[t._v("01")])]),s("dd",[s("h3",[t._v("委托书填写")]),s("p")]),s("dd",{staticClass:"air-service-icon_arrow l"})])]),s("li",[s("dl",{staticClass:"lf"},[s("img",{attrs:{src:a(11450),alt:"委托书填写"}}),s("dd",[s("span",[t._v("01")])]),s("dd",[s("h3",[t._v("委托书填写")]),s("p")]),s("dd",{staticClass:"air-service-icon_arrow l"})])]),s("li",[s("dl",{staticClass:"lf"},[s("img",{attrs:{src:a(11450),alt:"委托书填写"}}),s("dd",[s("span",[t._v("01")])]),s("dd",[s("h3",[t._v("委托书填写")]),s("p")]),s("dd",{staticClass:"air-service-icon_arrow l"})])])])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"footercontainer"},[a("div",{staticClass:"main"},[a("div",{staticClass:"footer-tabs-container"})])])}],l=a(17605),n=a(79338),c=a(5735),r=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"ideaDom main"},[a("titleDomVue",{attrs:{title:"国际空运服务内容 ",content:"跟踪定制项目流程，优化运转环节，提供完善全面的一站式空运服务。"}}),a("div",{staticClass:"ideaDom-box"},t._l(t.ideaDomList,(function(i,s){return a("div",{key:s,staticClass:"ideaDom-list"},[a("div",{staticClass:"ideaDom-list-img"},[a("img",{attrs:{src:i.img,alt:""}})]),a("div",{staticClass:"ideaDom-list-title"},[t._v(t._s(i.title))]),a("div",{staticClass:"ideaDom-list-content"},[t._v(t._s(i.content))])])})),0)],1)},o=[],d={name:"ideaDom",components:{titleDomVue:n.Z},data:function(){return{ideaDomList:[{img:a(49197),title:"仓储与分拨",content:"全链式仓储管理，流程化运作严格把控配送及效率。"},{img:a(49197),title:"仓储与分拨",content:"全链式仓储管理，流程化运作严格把控配送及效率。"},{img:a(49197),title:"仓储与分拨",content:"全链式仓储管理，流程化运作严格把控配送及效率。"},{img:a(49197),title:"仓储与分拨",content:"全链式仓储管理，流程化运作严格把控配送及效率。"},{img:a(49197),title:"仓储与分拨",content:"全链式仓储管理，流程化运作严格把控配送及效率。"}]}}},u=d,v=a(43736),m=(0,v.Z)(u,r,o,!1,null,"b56483e8",null),_=m.exports,p=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"ideaDom main"},[a("titleDomVue",{attrs:{title:"国际空运服务内容 ",content:"跟踪定制项目流程，优化运转环节，提供完善全面的一站式空运服务。"}}),a("div",{staticClass:"ideaDom-box"},t._l(t.ideaDomList,(function(i,s){return a("div",{key:s,staticClass:"ideaDom-list"},[a("div",{staticClass:"ideaDom-list-img"},[a("img",{attrs:{src:i.img,alt:""}})]),a("div",{staticClass:"ideaDom-list-title"},[t._v(t._s(i.title))]),a("div",{staticClass:"ideaDom-list-content"},[t._v(t._s(i.content))])])})),0)],1)},f=[],C={name:"ideaDom",components:{titleDomVue:n.Z},data:function(){return{ideaDomList:[{img:a(34368),title:"多渠道灵活航线",content:"根据产品特性，匹配船东、港区及航线，确保货物安全、准时出运"},{img:a(34368),title:"多渠道灵活航线",content:"根据产品特性，匹配船东、港区及航线，确保货物安全、准时出运"},{img:a(34368),title:"多渠道灵活航线",content:"根据产品特性，匹配船东、港区及航线，确保货物安全、准时出运"}]}}},g=C,h=(0,v.Z)(g,p,f,!1,null,"4558c3be",null),D=h.exports,b=a(19029),x=a(37169),y={components:{topCom:l.Z,TitleDomVue:n.Z,breadcrumbVue:c.Z,IdeaDom:_,ideDomVue:D,ideaDomVue:b.Z,footerComVue:x.Z}},$=y,Z=(0,v.Z)($,s,e,!1,null,null,null),k=Z.exports},12671:function(t,i,a){t.exports=a.p+"static/img/1655409402519718956.3f0a762b.jpg"},11450:function(t,i,a){t.exports=a.p+"static/img/air-service-icon01.e1bf2858.png"},34368:function(t,i,a){t.exports=a.p+"static/img/air-service-img01.3b59bdc8.jpg"},72971:function(t,i,a){t.exports=a.p+"static/img/air-service-img05.54d92375.jpg"},62026:function(t,i,a){t.exports=a.p+"static/img/logo-img.41e50363.jpg"},49197:function(t,i,a){t.exports=a.p+"static/img/service-content-img01.a4a9c58d.jpg"},75560:function(t,i,a){t.exports=a.p+"static/img/service-content-img06.8c30f08d.jpg"}}]);
//# sourceMappingURL=174-legacy.3a9a62b3.js.map