(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{198:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("62072f06",content,!0,{sourceMap:!1})},216:function(t,e,r){"use strict";var o=r(198);r.n(o).a},217:function(t,e,r){(t.exports=r(19)(!1)).push([t.i,".container{margin-bottom:15px;clear:both;background-color:#f6f6f6}.contents{background-color:#fff;padding:0 20px;border:1px solid #eaeaea;border-radius:2px}.article-header{margin-bottom:20px;padding:25px 0;border-bottom:1px solid #eee;text-align:center}.article-title{margin-top:0;font-size:26px;line-height:36px;margin-bottom:10px}.article-title a{color:#555;font-weight:400}.article-meta{font-size:12px;color:#999}.article-meta .item{margin-right:20px}.item a{color:#666}.item a:hover{color:#45b6f7}.article-content img{width:100%}.actions{padding:15px 0 30px}.actions,.article-copy{text-align:center;overflow:hidden;clear:both}.article-copy{background-color:#eee;font-size:12px;padding:8px 30px;border-radius:2px;color:#aaa;margin-bottom:18px}.article-copy a{color:#999}.article-copy a:hover{color:#45b6f7}.breadcrumbs{padding:15px 0;font-size:12px;line-height:1;text-align:left;background-color:#fff;margin-bottom:15px;margin-top:-14px;border-bottom:1px solid #ebebeb;box-shadow:0 1px 3px rgba(0,0,0,.04);color:#999}",""])},268:function(t,e,r){"use strict";r.r(e);var o=r(70),n=r.n(o),c={watch:{$route:function(){console.log(12312312)}},asyncData:function(t){return console.log(t),n.a.get("http://106.12.198.21:8040/api/article/getInfoData?p="+t.query.p).then(function(t){return{article:t.data.data}})}},l=(r(216),r(6)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("Row",{staticStyle:{"margin-bottom":"15px","min-height":"600px"}},[r("Row",{staticClass:"breadcrumbs "},[r("Col",{staticClass:"containers",attrs:{span:"22",offset:"1"}},[t._v("\n            当前位置: \n            "),r("nuxt-link",{attrs:{to:"/"}},[t._v("个人空间")]),t._v(" "),r("span",[t._v(">")]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"info",query:{p:t.article.ID}}}},[t._v(t._s(t.article.pclassName))]),t._v(" "),r("span",[t._v(">")]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"itemize",query:{tag:t.article.class}}}},[t._v(t._s(t.article.className))]),t._v(" "),r("span",[t._v(">")]),t._v(" "),r("span",[t._v("正文")])],1)],1),t._v(" "),r("Col",{attrs:{span:"22",offset:"1"}},[r("Row",{staticStyle:{"margin-top":"20px"}},[r("Col",{staticClass:"contents",attrs:{span:"16"}},[r("header",{staticClass:"article-header"},[r("h1",{staticClass:"article-title"},[r("a",{attrs:{href:""}},[t._v(t._s(t.article.strName))])]),t._v(" "),r("div",{staticClass:"article-meta"},[r("span",{staticClass:"item"},[t._v(t._s(t.article.time))]),t._v(" "),r("span",{staticClass:"item"},[t._v("分类: "),r("nuxt-link",{attrs:{to:{path:"itemize",query:{tag:t.article.class}}}},[t._v(t._s(t.article.className))])],1),t._v(" "),r("span",{staticClass:"item post-views"},[t._v("阅读(26)")]),t._v(" "),r("span",{staticClass:"item"},[t._v("评论(0)")]),t._v(" "),r("span",{staticClass:"item"})])]),t._v(" "),r("article",{staticClass:"article-content",domProps:{innerHTML:t._s(t.article.contentHtml)}}),t._v(" "),r("div",{staticClass:"actions"}),t._v(" "),r("div",{staticClass:"article-copy"},[t._v("\n                     未经允许不得转载: "),r("nuxt-link",{attrs:{to:"/"}},[t._v("个人空间")]),t._v(" -> "),r("nuxt-link",{attrs:{to:{path:"info",query:{p:t.$route.query.p}}}},[t._v(t._s(t.article.strName))])],1)]),t._v(" "),r("Col",{staticClass:"sidebar",attrs:{span:"8"}},[r("Card",{staticClass:"cards"},[r("Tabs",{attrs:{type:"card"}},[r("TabPane",{attrs:{label:"标签一"}},[r("div",{staticStyle:{width:"100%",height:"150px"}})]),t._v(" "),r("TabPane",{attrs:{label:"标签er"}},[r("div",{staticStyle:{width:"100%",height:"150px"}})])],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);