(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{303:function(t,e,l){var content=l(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(14).default)("873a3b9e",content,!0,{sourceMap:!1})},418:function(t,e,l){"use strict";var n=l(303),r=l.n(n);l.d(e,"default",(function(){return r.a}))},419:function(t,e,l){var n=l(11)(!1);n.push([t.i,"._wO4K{background-color:var(--secondary);border-radius:20px;height:20px;left:0;position:absolute;top:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center;width:20px}",""]),n.locals={dot:"_wO4K"},t.exports=n},423:function(t,e,l){"use strict";l.r(e);var n=l(424),r={props:{index:Number,width:Number,sineDots:Number,idle:Boolean,x:Number,y:Number,drawUpdate:Number,lockUpdate:Number},data:()=>({anglespeed:.05,scale:null,range:null,limit:null,lockX:null,lockY:null,angleX:null,angleY:null}),watch:{drawUpdate(){this.draw()},lockUpdate(){this.lock()}},mounted(){this.scale=1-.05*this.index,this.range=this.width/2-this.width/2*this.scale+2,this.limit=.75*this.width*this.scale,n.a.set(this.$refs.dot,{scale:this.scale})},methods:{lock(){this.lockX=this.x,this.lockY=this.y,this.angleX=2*Math.PI*Math.random(),this.angleY=-2*Math.PI*Math.random()},draw(){!this.idle||this.index<=this.sineDots?n.a.set(this.$refs.dot,{x:this.x,y:this.y}):(this.angleX+=this.anglespeed,this.angleY+=this.anglespeed,n.a.set(this.$refs.dot,{x:this.lockX+Math.sin(this.angleX)*this.range,y:this.lockY+Math.sin(this.angleY)*this.range}))}}},o=l(418),h=l(2);var component=Object(h.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{ref:"dot",class:t.$style.dot})}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports}}]);