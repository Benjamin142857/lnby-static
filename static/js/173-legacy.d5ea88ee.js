"use strict";(self["webpackChunkpc"]=self["webpackChunkpc"]||[]).push([[173],{65166:function(t,i,e){e.d(i,{Z:function(){return c}});var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"breadcrumb"},[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._l(t.$router.currentRoute.matched,(function(i,a){return e("el-breadcrumb-item",{key:a,attrs:{to:i.path===t.$router.currentRoute.path?"":{path:i.path}}},[t._v(t._s(i.meta.title))])}))],2)],1)},s=[],r={name:"breadcrumb"},n=r,l=e(43736),o=(0,l.Z)(n,a,s,!1,null,"0d7f5663",null),c=o.exports},79338:function(t,i,e){e.d(i,{Z:function(){return c}});var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"titleDom"},[e("div",{staticClass:"main"},[e("div",{staticClass:"titleDom-h1"},[e("span",{staticClass:"trangle_01"}),t._v(" "+t._s(t.title)+" "),e("span",{staticClass:"trangle_02"})]),e("div",{staticClass:"titleDom-content",style:{color:t.myColor}},[t._v(" "+t._s(t.content)+" ")])])])},s=[],r={name:"titleDom",props:{title:{type:String,default:""},content:{type:String,default:""},myColor:{type:String,default:"#666"}}},n=r,l=e(43736),o=(0,l.Z)(n,a,s,!1,null,"66fd0914",null),c=o.exports},65741:function(t,i,e){e.d(i,{Z:function(){return c}});var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"footerCom"},[e("div",{staticClass:"footerCom-center main"},[e("div",{staticClass:"footerCom-left"},[t._m(0),e("div",{staticClass:"p2"},t._l(t.leftList,(function(i,a){return e("div",{key:a,on:{click:function(i){return t.$router.replace("/")}}},[t._v(" "+t._s(i.title)+" ")])})),0),e("div",{staticClass:"p3"})]),t._m(1)])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"p1"},[t._v(" Copyright © 2022 岭南泵业（LNBY）制造有限公司 保留所有版权 "),e("span",[t._v("粤ICP备2022000000号")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"footerCom-right"},[e("div",[t._v(" Tel:020-36478580   020-36478481 咨询热线，客户经理值守 ")]),e("div",[t._v("地址：广州市从化江埔街河东北路93号")]),e("div",[t._v("EMail: jyjdfff@126.com")])])}],r={name:"footerCom",data:function(){return{leftList:[{title:"首页",path:"/"},{title:"关于岭南泵业",path:"/about"},{title:"产品与服务",path:"/product"},{title:"联系我们",path:"/contactUs"}]}}},n=r,l=e(43736),o=(0,l.Z)(n,a,s,!1,null,"cc16d886",null),c=o.exports},25762:function(t,i,e){e.d(i,{Z:function(){return c}});var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"topCom main"},[a("div",{staticClass:"top-left-box"}),a("div",{staticClass:"logo-img",on:{click:function(i){return t.$router.replace("/")}}},[a("img",{attrs:{src:e(62026),height:"60px"}})]),a("div",{staticClass:"ul"},t._l(t.navigation,(function(i,e){return a("div",{key:e,staticClass:"li"},[a("a",{on:{click:function(e){i.name&&t.$router.push({name:i.name,query:i.query})}}},[t._v(t._s(i.title))]),i.children?a("div",{staticClass:"ul-children"},t._l(i.children,(function(i,e){return a("div",{key:e,staticClass:"li-children"},[a("a",{on:{click:function(e){i.name&&t.$router.push({name:i.name,query:i.query})}}},[t._v(t._s(i.title))])])})),0):t._e()])})),0),a("div",{staticClass:"top-right-box"})])},s=[],r={name:"topCom",data:function(){return{navigation:[{title:"首页",name:"home",query:{}},{title:"产品与服务",name:"product",query:{},children:[{title:"产品列表",name:"product",query:{}}]},{title:"关于岭南泵业",name:"about",query:{}},{title:"联系我们",name:"contactUs",query:{}}]}}},n=r,l=e(43736),o=(0,l.Z)(n,a,s,!1,null,"3adf98fd",null),c=o.exports},4345:function(t,i,e){e.d(i,{Z:function(){return u}});var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"partnerDom main"},[e("titleDomVue",{attrs:{title:"广东岭南泵业合作伙伴",content:"岭南泵业与100多个国家全球40多个公司形成战略合作，为众多客户提供更有力的服务。"}}),e("div",{staticClass:"partnerDom-box"},t._l(t.partnerDomList,(function(t,i){return e("div",{key:i,staticClass:"partnerDom-list"},[e("img",{attrs:{src:t.img,alt:""}})])})),0)],1)},s=[],r=e(79338),n={name:"partnerDom",components:{titleDomVue:r.Z},data:function(){return{partnerDomList:[{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)},{img:e(41462)}]}}},l=n,o=e(43736),c=(0,o.Z)(l,a,s,!1,null,"30e6b07a",null),u=c.exports},56173:function(t,i,e){e.r(i),e.d(i,{default:function(){return b}});var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"news1"},[e("div",{staticClass:"news1-top"},[e("topComVue"),e("titleDomVue",{attrs:{title:"新闻简讯",content:"苍茫的月下，什么都可以想，什么都可以不想。便觉得是个自由的人。白天一定要做的事情，一定要说的话，现在都可以不理。这是独处的妙处。我且受用了这无边的荷香月色好了。"}})],1),e("div",{staticClass:"breadcrumbs"},[e("div",{staticClass:"mian"},[e("breadcrumbVue")],1)]),t._m(0),e("div",{staticClass:"partner"},[e("partnerDomVue")],1),e("div",{staticClass:"information"},[e("informationideaDom")],1),e("div",{staticClass:"footer"},[e("footerComVue")],1)])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"data-text"},[e("div",{staticClass:"data-ul"},[e("ul",[e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("最热新闻")])])]),e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("最新新闻")])])]),e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("有趣的事")])])]),e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("关于琪邦")])])]),e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("服务优势")])])]),e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("琪邦资讯")])])]),e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("联系琪邦")])])]),e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("客户案例")])])]),e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("联系我们")])])]),e("li",[e("div",[e("a",{attrs:{href:"#"}},[t._v("欢迎投稿")])])])])]),e("div",{staticClass:"text"},[e("div",{staticClass:"text-h1"},[t._v("荷塘月色")]),e("div",{staticClass:"text-name"},[t._v("朱自清")]),e("div",{staticClass:"text-p"},[t._v("      这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了;妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。"),e("br"),t._v("       沿着荷塘，是一条曲折的小煤屑路。这是一条幽僻的路;白天也少人走，夜晚更加寂寞。荷塘四面，长着许多树，蓊蓊郁郁的。路的一旁，是些杨柳，和一些不知道名字的树。没有月光的晚上，这路上阴森森的，有些怕人。今晚却很好，虽然月光也还是淡淡的。"),e("br"),t._v("       路上只我一个人，背着手踱着。这一片天地好像是我的;我也像超出了平常的自己，到了另一世界里。我爱热闹，也爱冷静;爱群居，也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。白天里一定要做的事，一定要说的话，现在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。"),e("br"),t._v("       曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的;正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。微风过处，送来缕缕清香，仿佛远处高楼上渺茫的歌声似的。这时候叶子与花也有一丝的颤动，像闪电般，霎时传过荷塘的那边去了。叶子本是肩并肩密密地挨着，这便宛然有了一道凝碧的波痕。叶子底下是脉脉的流水，遮住了，不能见一些颜色;而叶子却更见风致了。"),e("br"),t._v("       月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样;又像笼着轻纱的梦。虽然是满月，天上却有一层淡淡的云，所以不能朗照;但我以为这恰是到了好处——酣眠固不可少，小睡也别有风味的。月光是隔了树照过来的，高处丛生的灌木，落下参差的斑驳的黑影，峭楞楞如鬼一般;弯弯的杨柳的稀疏的倩影，却又像是画在荷叶上。塘中的月色并不均匀;但光与影有着和谐的旋律，如梵婀玲上奏着的名曲。"),e("br"),t._v("       荷塘的四面，远远近近，高高低低都是树，而杨柳最多。这些树将一片荷塘重重围住;只在小路一旁，漏着几段空隙，像是特为月光留下的。树色一例是阴阴的，乍看像一团烟雾;但杨柳的丰姿，便在烟雾里也辨得出。树梢上隐隐约约的是一带远山，只有些大意罢了。树缝里也漏着一两点路灯光，没精打采的，是渴睡人的眼。这时候最热闹的，要数树上的蝉声与水里的蛙声;但热闹是它们的，我什么也没有。"),e("br"),t._v("       忽然想起采莲的事情来了。采莲是江南的旧俗，似乎很早就有，而六朝时为盛;从诗歌里可以约略知道。采莲的是少年的女子，她们是荡着小船，唱着艳歌去的。采莲人不用说很多，还有看采莲的人。那是一个热闹的季节，也是一个风流的季节。梁元帝《采莲赋》里说得好："),e("br"),t._v("       于是妖童媛女，荡舟心许;鷁首徐回，兼传羽杯;欋将移而藻挂，船欲动而萍开。尔其纤腰束素，迁延顾步;夏始春余，叶嫩花初，恐沾裳而浅笑，畏倾船而敛裾。"),e("br"),t._v("       可见当时嬉游的光景了。这真是有趣的事，可惜我们现在早已无福消受了。"),e("br"),t._v("       于是又记起《西洲曲》里的句子："),e("br"),t._v("       采莲南塘秋，莲花过人头;低头弄莲子，莲子清如水。今晚若有采莲人，这儿的莲花也算得“过人头”了;只不见一些流水的影子，是不行的。这令我到底惦着江南了。——这样想着，猛一抬头，不觉已是自己的门前;轻轻地推门进去，什么声息也没有，妻已睡熟好久了。"),e("br")])])])}],r=e(4345),n=e(79338),l=e(65741),o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"ideaDom main"},[e("titleDomVue",{attrs:{title:"昌航资讯",content:"昌航国际货运与进口报关代理服务相关资讯，以更新的国际物流视角让您了解国际贸易与货运代理相关新闻动态。"}}),e("div",{staticClass:"ideaDom-box"},t._l(t.ideaDomList,(function(i,a){return e("div",{key:a,staticClass:"ideaDom-list"},[e("div",{staticClass:"ideaDom-list-img"},[e("img",{attrs:{src:i.img,alt:""}})]),e("div",{staticClass:"ideaDom-list-title"},[t._v(t._s(i.title))]),e("div",{staticClass:"ideaDom-list-time"},[t._v(t._s(i.time))]),e("div",{staticClass:"ideaDom-list-p"},[t._v(t._s(i.p))])])})),0)],1)},c=[],u={name:"ideaDom",components:{titleDomVue:n.Z},data:function(){return{ideaDomList:[{img:e(35879),title:"怎样去寻找可靠的上海国际物流公司？",time:"2022 / 06 / 17  HOT",p:"外贸代理行业竞争激烈，毛利率非常透明。特别是近年来，大型综合外贸服务平台和省级综合外贸服务平台的兴起..."},{img:e(12671),title:"现代国际物流体系的的几大核心维度",time:"2022 / 06 / 17  HOT",p:"近年来，跨境电商行业呈现大幅增长，货物吞吐量明显上升。后疫情时代，多种不确定因素影响着跨境电商物流..."},{img:e(30261),title:"国际货运时效被延误的几个可能因素",time:"2022 / 06 / 17  HOT",p:"国际货运在我们的生活和工作中起着非常重要的作用，无论是企业还是个人。物流是市场发展的重要组成部分..."}]}}},m=u,v=e(43736),d=(0,v.Z)(m,o,c,!1,null,"f59ef9b4",null),f=d.exports,p=e(65166),_=e(25762),C={name:"news1",components:{topComVue:_.Z,breadcrumbVue:p.Z,footerComVue:l.Z,informationideaDom:f,titleDomVue:n.Z,partnerDomVue:r.Z}},g=C,h=(0,v.Z)(g,a,s,!1,null,"7bf11fbc",null),b=h.exports},41462:function(t,i,e){t.exports=e.p+"static/img/1.f2101ae1.png"},35879:function(t,i,e){t.exports=e.p+"static/img/1654800678557743429.a3c5ba0a.jpg"},12671:function(t,i,e){t.exports=e.p+"static/img/1655409402519718956.3f0a762b.jpg"},30261:function(t,i,e){t.exports=e.p+"static/img/1655504137398132215.3bb34f39.jpg"},62026:function(t,i,e){t.exports=e.p+"static/img/logo-img.41e50363.jpg"}}]);
//# sourceMappingURL=173-legacy.d5ea88ee.js.map