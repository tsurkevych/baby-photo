(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{424:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("873a3b9e",content,!0,{sourceMap:!1})},431:function(t,e,n){var content=n(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("57182311",content,!0,{sourceMap:!1})},444:function(t,e,n){"use strict";var r=n(424),o=n.n(r);n.d(e,"default",(function(){return o.a}))},445:function(t,e,n){var r=n(15)(!1);r.push([t.i,"._wO4K{background-color:var(--secondary);border-radius:20px;height:20px;left:0;position:absolute;top:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center;width:20px}",""]),r.locals={dot:"_wO4K"},t.exports=r},450:function(t,e,n){"use strict";n.r(e);n(260);var r=n(451),o={props:{index:Number,width:Number,sineDots:Number,idle:Boolean,x:Number,y:Number,drawUpdate:Number,lockUpdate:Number},data:function(){return{anglespeed:.05,scale:null,range:null,limit:null,lockX:null,lockY:null,angleX:null,angleY:null}},watch:{drawUpdate:function(){this.draw()},lockUpdate:function(){this.lock()}},mounted:function(){this.scale=1-.05*this.index,this.range=this.width/2-this.width/2*this.scale+2,this.limit=.75*this.width*this.scale,r.a.set(this.$refs.dot,{scale:this.scale})},methods:{lock:function(){this.lockX=this.x,this.lockY=this.y,this.angleX=2*Math.PI*Math.random(),this.angleY=-2*Math.PI*Math.random()},draw:function(){!this.idle||this.index<=this.sineDots?r.a.set(this.$refs.dot,{x:this.x,y:this.y}):(this.angleX+=this.anglespeed,this.angleY+=this.anglespeed,r.a.set(this.$refs.dot,{x:this.lockX+Math.sin(this.angleX)*this.range,y:this.lockY+Math.sin(this.angleY)*this.range}))}}},l=n(444),c=n(6);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{ref:"dot",class:t.$style.dot})}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},452:function(t,e,n){"use strict";var r=n(431),o=n.n(r);n.d(e,"default",(function(){return o.a}))},453:function(t,e,n){var r=n(15)(!1);r.push([t.i,"._d9AQ{left:0;pointer-events:none;position:fixed;top:0;-webkit-transform-origin:center center;transform-origin:center center;z-index:9999999}",""]),r.locals={cursor:"_d9AQ"},t.exports=r},465:function(t,e,n){"use strict";n.r(e);n(56),n(10),n(33),n(41),n(24),n(40),n(28),n(23),n(29),n(42),n(43),n(30);var r=n(22);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c={data:function(){return{amount:20,sineDots:0,width:16,timeoutID:void 0,lastFrame:0,x:0,y:0,dots:[],idle:!1}},computed:Object(r.c)({ww:"ww"}),watch:{idle:function(){var t,e=o(this.dots);try{for(e.s();!(t=e.n()).done;){t.value.idle=this.idle}}catch(t){e.e(t)}finally{e.f()}}},created:function(){this.sineDots=Math.floor(.3*this.amount)},mounted:function(){this.ww>this.$size.md&&(window.addEventListener("mousemove",this.onMouseMove),this.lastFrame+=new Date,this.buildDots(),this.render())},methods:{goInactive:function(){this.idle=!0;var t,e=o(this.dots);try{for(e.s();!(t=e.n()).done;){t.value.lockUpdate=Math.random()}}catch(t){e.e(t)}finally{e.f()}},startIdleTimer:function(){this.timeoutID=setTimeout(this.goInactive,150),this.idle=!1},resetIdleTimer:function(){clearTimeout(this.timeoutID),this.startIdleTimer()},onMouseMove:function(t){this.x=t.clientX-this.width/4,this.y=t.clientY-this.width/4,this.resetIdleTimer()},buildDots:function(){for(var t=0;t<this.amount;t++)this.dots.push({x:0,y:0})},positionCursor:function(){var t=this,e=this.x,i=this.y;this.dots.forEach((function(n,s,r){var o=r[s+1]||r[0];n.x=e,n.y=i,n.drawUpdate=e*i,(!t.idle||s<=t.sineDots)&&(e+=.35*(o.x-n.x),i+=.35*(o.y-n.y))}))},render:function(){this.positionCursor(this.lastFrame),requestAnimationFrame(this.render)}}},d=n(452),h=n(6);var component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ww>t.$size.md?n("div",{ref:"cursor",class:t.$style.cursor},t._l(t.dots,(function(e,r){return n("layout-cursor-dot",{key:r,attrs:{index:r,width:t.width,sineDots:t.sineDots,idle:t.idle,x:e.x,y:e.y,"draw-update":e.drawUpdate,"lock-update":e.lockUpdate}})})),1):t._e()}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports;installComponents(component,{LayoutCursorDot:n(450).default})}}]);