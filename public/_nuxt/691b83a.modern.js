(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7,11],{294:function(e,t,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("3b38464e",content,!0,{sourceMap:!1})},296:function(e,t,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("4bfe1f1a",content,!0,{sourceMap:!1})},297:function(e,t,n){"use strict";n.r(t);var l={props:{tag:{type:String,default:()=>"h2"}}},r=n(298),o=n(2);var component=Object(o.a)(l,(function(e,t){return(0,t._c)(t.props.tag,{tag:"component",class:t.$style.title},[t._t("default")],2)}),[],!0,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports},298:function(e,t,n){"use strict";var l=n(294),r=n.n(l);n.d(t,"default",(function(){return r.a}))},299:function(e,t,n){var l=n(11)(!1);l.push([e.i,"._ejWa{font-size:28px;font-weight:900;margin-bottom:6%;text-align:center;text-transform:uppercase}@media(min-width:961px){._ejWa{font-size:48px}}",""]),l.locals={title:"_ejWa"},e.exports=l},300:function(e,t,n){var content=n(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("36eee905",content,!0,{sourceMap:!1})},304:function(e,t,n){"use strict";n.r(t);var l={props:{item:Object,level:{type:Number,default:()=>1}},data:()=>({observe:null}),destroyed(){},mounted(){},methods:{init(){this.observer=new IntersectionObserver((e=>{e[0].isIntersecting&&(this.initSlider(),this.observer.unobserve(this.$refs.swiper))}),{threshold:.1}),this.$nextTick((()=>{this.observer.observe(this.$refs.swiper)}))},initSlider(){this.$swiper(this.$refs.swiper,{speed:400,slidesPerView:"auto",spaceBetween:16,navigation:{nextEl:this.$refs.next,prevEl:this.$refs.prev}})}}},r=n(309),o=n(2);var component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{class:[e.$style.service,e.$style["service--"+e.level]]},[n("header",{class:e.$style.service__header},[n(2===e.level?"h4":"h3",{tag:"component",class:[e.$style.service__title,e.$style["level-"+e.level]]},[n("span",[e._v(e._s(e.item.name))])]),e.item.description?n("div",{class:e.$style.service__description},[e._v("("+e._s(e.item.description)+")")]):e._e()],1),e.item.items?n("div",{class:e.$style.service__sub},e._l(e.item.items,(function(e,t){return n("home-services-item",{key:t,attrs:{item:e,level:2}})})),1):e._e(),e.item.list?n("ul",{class:e.$style.service__list},e._l(e.item.list,(function(t){return n("li",{class:e.$style.service__item},[e._v(e._s(t))])})),0):e._e(),e.item.price?n("div",{class:e.$style.service__price},[e._v(e._s(e.item.price)+" грн")]):e._e()])}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports;installComponents(component,{HomeServicesItem:n(304).default})},307:function(e,t,n){e.exports=n.p+"img/1.ab87287.png"},308:function(e,t,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("80571392",content,!0,{sourceMap:!1})},309:function(e,t,n){"use strict";var l=n(296),r=n.n(l);n.d(t,"default",(function(){return r.a}))},310:function(e,t,n){var l=n(11)(!1);l.push([e.i,"._P45U{-webkit-box-orient:vertical;-webkit-box-direction:normal;color:var(--black);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}._P45U:not(:first-child){border-top:2px solid #7f9577;margin-top:32px;padding-top:32px}._6axR{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:18px;font-weight:700;text-align:center}._6axR,._HP0M{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center}._HP0M._jO8K{font-size:24px}@media(min-width:961px){._HP0M._jO8K{font-size:32px}}._HP0M._jO8K span{text-decoration:underline}._HP0M._2vHn{font-size:22px}@media(min-width:961px){._HP0M._2vHn{font-size:24px}}._b-zJ{font-size:18px;font-weight:400}._ys5p{padding:16px}._PBhb{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}._ay8L{font-size:14px;text-align:center}@media(min-width:961px){._ay8L{font-size:18px}}._ay8L:not(:last-child){margin-bottom:8px}._DGlY{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:end;-ms-flex-pack:end;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:22px;justify-content:flex-end}._WVtM{padding:0 8px 8px}._hOiN{margin-top:8px}",""]),l.locals={service:"_P45U",service__header:"_6axR",service__title:"_HP0M","level-1":"_jO8K","level-2":"_2vHn",service__description:"_b-zJ",service__list:"_ys5p",service__gallery:"_PBhb",service__item:"_ay8L",service__price:"_DGlY",service__sub:"_WVtM","service--2":"_hOiN"},e.exports=l},405:function(e){e.exports=JSON.parse('{"title":"Пакети послуг","items":[{"name":"Newborn","items":[{"name":"Пакет S","list":["Два образи в обмотках та їх модифікації.","Використовується тканинний фон та реквізит.","10 фото в детальній ретуші.","Усі вдалі фото в кольорокорекції.","Фото Ви отримуєте через галерею (можливість скачати у високій якості для друку та у форматі для соцмереж)","Термін готовності фото 2 тижні"],"price":3000},{"name":"Пакет M","list":["Три образи в обмотках, костюмчиках та їх модифікації.","Використовується тканинний фон та реквізит.","20 фото в детальній ретуші.","Друк 20 фото 10*15 см в подарунковій упаковці.","Портрети з батьками,старшими дітьми.","Усі фото в кольорокорекції.","Фото Ви отримуєте через галерею (можливість скачати у високій якості для друку та у форматі для соцмереж).","Термін готовності фото 3 тижні"],"images":["IMG_0616-min","IMG_0922-min","IMG_0939-min","IMG_3626-min","IMG_0912-min"],"price":4000},{"name":"Пакет L","list":["Чотири образи в обмотках костюмчиках та їх модифікації","Використовується тканинний фон та реквізит 30 фото в детальній ретуші","Макро кадри (ручки,ніжки)","Друк 30 фото 10*15см","Портрети з батьками,старшими дітьми","Флешка з фото в подарунковій упаковці","Усі фото в кольорокорекції","Фото Ви отримуєте через галерею (можливість скачати у високій якості для друку та у форматі для соцмереж)","Термін готовності фото 3 тижні"],"images":["IMG_0966-min","IMG_0954-min","IMG_0945-min","IMG_0879-min","IMG_0854-min","IMG_0828-min","IMG_0736-min","IMG_0605-min"],"price":5500}]}]}')},406:function(e,t,n){"use strict";n(308)},407:function(e,t,n){var l=n(11)(!1);l.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Yomogi&display=swap);"]),l.push([e.i,"",""]),e.exports=l},408:function(e,t,n){"use strict";var l=n(300),r=n.n(l);n.d(t,"default",(function(){return r.a}))},409:function(e,t,n){var l=n(11)(!1);l.push([e.i,"._CMSj{position:relative;z-index:3}._yuAK{position:sticky;top:30vh;z-index:6}._yuAK img{display:block;position:relative}@media(max-width:960.98px){._yuAK img{left:-10vw;width:160%}}@media(min-width:961px){._yuAK img{width:120%}}._CMSj ._9LLo{padding-bottom:12%;padding-top:1%}._uj\\+p{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:24px;font-weight:500;justify-content:center;margin-bottom:70px;text-transform:uppercase}@media(min-width:961px){._uj\\+p{font-size:32px}}._uj\\+p h3{padding-left:5%}._uj\\+p span{color:#a5ae5e;font-family:Yomogi,cursive;left:-20%;position:relative;top:36px}._Pe1C{color:#a5ae5e;font-size:18px;font-style:italic}@media(min-width:961px){._Pe1C{font-size:32px}}._Pe1C span{left:-20%;position:relative;top:28px}._hx4M{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center}._hx4M ul{border-right:2px solid #a5ae5e;font-size:18px;list-style:disc;margin-right:20px;padding-left:20px;padding-right:20px;width:60%}@media(min-width:961px){._hx4M ul{font-size:22px}}._YVN2{color:#a5ae5e;margin-bottom:100px;margin-top:100px;position:relative}@media(min-width:961px){._YVN2{margin-bottom:200px;margin-top:200px}}._YVN2 span{display:block;font-size:18px;padding-left:30%}._YVN2 img{bottom:-100px;height:calc(100% + 200px);margin-right:30px;margin-top:30px;position:absolute;top:-100px;width:auto}@media(min-width:961px){._YVN2 img{bottom:-200px;height:calc(100% + 400px);top:-200px}}",""]),l.locals={services:"_CMSj",services__sticky:"_yuAK",container:"_9LLo",prices__title:"_uj+p",prices__sum:"_Pe1C",prices__list:"_hx4M",prices__description:"_YVN2"},e.exports=l},420:function(e,t,n){"use strict";n.r(t);var l=n(405),r={data:()=>({params:l})},o=(n(406),n(408)),c=n(2);var component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{class:e.$style.services,attrs:{id:"services"}},[l("layout-waves",{attrs:{params:{color:"hsl(0, 0%, 100%)",index:6,height:213,revert:!0}}}),l("ui-container",{class:e.$style.container},[l("ui-headline",[e._v(e._s(e.params.title))]),l("ui-row",[l("ui-grid",{attrs:{md:4}}),l("ui-grid",{attrs:{xs:8,md:4}},[l("div",{class:e.$style.services__sticky},[l("img",{attrs:{src:n(307),alt:"alt"}})])]),l("ui-grid",{attrs:{xs:16,md:10}},[l("div",{class:e.$style.services__main},e._l(e.params.items,(function(t,n){return l("div",[0!==n?l("ui-hr"):e._e(),l("home-services-item",{key:n,attrs:{item:t}})],1)})),0)])],1),l("ui-hr"),l("div",{class:e.$style.prices},[l("div",{class:e.$style.prices__title},[l("h3",[e._v("Вартість"),l("span",[e._v("послуг")])])]),l("ui-row",[l("ui-grid",{attrs:{md:6}}),l("ui-grid",{attrs:{md:12}},[l("div",{class:e.$style.prices__list},[l("ul",[l("li",[e._v("ТАЇНСТВО ХРЕЩЕННЯ")]),l("li",[e._v("ВИПИСКА 3 ПОЛОГОВОГО")]),l("li",[e._v("ПЕРШІ ДНІ В ПОЛОГОВОМУ")]),l("li",[e._v("ПЕРШИЙ ТОРТИК")]),l("li",[e._v("СІМЕЙНА ІСТОРІЯ")]),l("li",[e._v("ФОТОПРОГУЛЯНКА")])]),l("div",{class:e.$style.prices__sum},[l("div",[e._v("1000"),l("span",[e._v("грн/год")])])])]),l("div",{class:e.$style.prices__description},[l("img",{attrs:{src:n(307),alt:"alt"}}),l("span",[e._v("100+ ФОТО В КОЛЬОРО ТА СВІТЛОКОРЕКЦІЇ. "),l("br"),e._v("  ПЕРЕДАЧА МАТЕРІАЛУ ЧЕРЕЗ ФАЙЛООБМІННИК. "),l("br"),e._v(" ТЕРМІН ГОТОВНОСТІ ФОТО 2 ТИЖНІ.")])])])],1)],1)],1)],1)}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports;installComponents(component,{LayoutWaves:n(177).default,UiHeadline:n(297).default,UiGrid:n(178).default,UiHr:n(180).default,HomeServicesItem:n(304).default,UiRow:n(179).default,UiContainer:n(84).default})}}]);