(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(e,t,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("4bfe1f1a",content,!0,{sourceMap:!1})},360:function(e,t,n){"use strict";n.r(t);n(226);var l={props:{item:Object,level:{type:Number,default:function(){return 1}}},data:function(){return{observe:null}},destroyed:function(){},mounted:function(){},methods:{init:function(){var e=this;this.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.initSlider(),e.observer.unobserve(e.$refs.swiper))}),{threshold:.1}),this.$nextTick((function(){e.observer.observe(e.$refs.swiper)}))},initSlider:function(){this.$swiper(this.$refs.swiper,{speed:400,slidesPerView:"auto",spaceBetween:16,navigation:{nextEl:this.$refs.next,prevEl:this.$refs.prev}})}}},r=n(365),o=n(6);var component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{class:[e.$style.service,e.$style["service--"+e.level]]},[n("header",{class:e.$style.service__header},[n(2===e.level?"h4":"h3",{tag:"component",class:[e.$style.service__title,e.$style["level-"+e.level]]},[n("span",[e._v(e._s(e.item.name))])]),e.item.description?n("div",{class:e.$style.service__description},[e._v("("+e._s(e.item.description)+")")]):e._e()],1),e.item.items?n("div",{class:e.$style.service__sub},e._l(e.item.items,(function(e,t){return n("home-services-item",{key:t,attrs:{item:e,level:2}})})),1):e._e(),e.item.list?n("ul",{class:e.$style.service__list},e._l(e.item.list,(function(t){return n("li",{class:e.$style.service__item},[e._v(e._s(t))])})),0):e._e(),e.item.price?n("div",{class:e.$style.service__price},[e._v(e._s(e.item.price)+" грн")]):e._e()])}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.default=component.exports;installComponents(component,{HomeServicesItem:n(360).default})},365:function(e,t,n){"use strict";var l=n(352),r=n.n(l);n.d(t,"default",(function(){return r.a}))},366:function(e,t,n){var l=n(16)(!1);l.push([e.i,"._P45U{-webkit-box-orient:vertical;-webkit-box-direction:normal;color:var(--black);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%}._P45U:not(:first-child){border-top:2px solid #7f9577;margin-top:32px;padding-top:32px}._6axR{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:18px;font-weight:700;text-align:center}._6axR,._HP0M{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:center;-ms-flex-pack:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center}._HP0M._jO8K{font-size:24px}@media(min-width:961px){._HP0M._jO8K{font-size:32px}}._HP0M._jO8K span{text-decoration:underline}._HP0M._2vHn{font-size:22px}@media(min-width:961px){._HP0M._2vHn{font-size:24px}}._b-zJ{font-size:18px;font-weight:400}._ys5p{padding:16px}._PBhb{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}._ay8L{font-size:14px;text-align:center}@media(min-width:961px){._ay8L{font-size:18px}}._ay8L:not(:last-child){margin-bottom:8px}._DGlY{-webkit-box-align:center;-ms-flex-align:center;-webkit-box-pack:end;-ms-flex-pack:end;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:22px;justify-content:flex-end}._WVtM{padding:0 8px 8px}._hOiN{margin-top:8px}",""]),l.locals={service:"_P45U",service__header:"_6axR",service__title:"_HP0M","level-1":"_jO8K","level-2":"_2vHn",service__description:"_b-zJ",service__list:"_ys5p",service__gallery:"_PBhb",service__item:"_ay8L",service__price:"_DGlY",service__sub:"_WVtM","service--2":"_hOiN"},e.exports=l}}]);