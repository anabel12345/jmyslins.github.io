(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4340],{87837:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(32723),a=n(34795),u=n(9249),i=n(87371),s=n(45754),c=n(13820),o=n(69621),f=n(23520),l=n(56798),v=n(16979),h=n(90872),p=n(37168),b={refName:"seq_id"},d={seq_id:"refName"},g=function(){function e(t,n,r){(0,u.Z)(this,e),this.ncFeature=t,this.parentHandle=void 0,this.uniqueId=void 0,this.uniqueId=r||t.id(),this.parentHandle=n}return(0,i.Z)(e,[{key:"set",value:function(){throw new Error("not implemented")}},{key:"jb2TagToJb1Tag",value:function(e){return(b[e]||e).toLowerCase()}},{key:"jb1TagToJb2Tag",value:function(e){var t=e.toLowerCase();return d[t]||t}},{key:"get",value:function(t){var n=this,r=this.ncFeature.get(this.jb2TagToJb1Tag(t));return r&&"subfeatures"===t?r.map((function(t){return new e(t,n)})):r}},{key:"tags",value:function(){var e=this;return this.ncFeature.tags().map((function(t){return e.jb1TagToJb2Tag(t)}))}},{key:"id",value:function(){return this.uniqueId}},{key:"parent",value:function(){return this.parentHandle}},{key:"children",value:function(){return this.get("subfeatures")}},{key:"toJSON",value:function(){var t=this,n={uniqueId:this.id()};return this.ncFeature.tags().forEach((function(r){var a=t.jb1TagToJb2Tag(r),u=t.ncFeature.get(r);"subfeatures"===a?n.subfeatures=(u||[]).map((function(n){return new e(n,t).toJSON()})):n[a]=u})),n}}]),e}(),k=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(e,r,a){var i;(0,u.Z)(this,n),(i=t.call(this,e,r,a)).nclist=void 0,i.configRefNames=void 0;var s=i.getConf("refNames"),c=i.getConf("rootUrlTemplate");return i.configRefNames=s,i.nclist=new f.Z({baseUrl:"",urlTemplate:c.uri,readFile:function(e){return new p.kC(String(c.baseUri?new URL(e,c.baseUri).toString():e)).readFile()}}),i}return(0,i.Z)(n,[{key:"getFeatures",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,v.ObservableCreate)(function(){var u=(0,a.Z)((0,r.Z)().mark((function a(u){var i,s,c,f,l,v,p;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=n.signal,s=!1,c=!1,r.prev=3,l=(0,o.Z)(t.nclist.getFeatures(e,n));case 5:return r.next=7,l.next();case 7:if(!(s=!(v=r.sent).done)){r.next=14;break}p=v.value,(0,h.checkAbortSignal)(i),u.next(t.wrapFeature(p));case 11:s=!1,r.next=5;break;case 14:r.next=20;break;case 16:r.prev=16,r.t0=r.catch(3),c=!0,f=r.t0;case 20:if(r.prev=20,r.prev=21,!s||null==l.return){r.next=25;break}return r.next=25,l.return();case 25:if(r.prev=25,!c){r.next=28;break}throw f;case 28:return r.finish(25);case 29:return r.finish(20);case 30:u.complete();case 31:case"end":return r.stop()}}),a,null,[[3,16,20,30],[21,,25,29]])})));return function(e){return u.apply(this,arguments)}}())}},{key:"wrapFeature",value:function(e){return new g(e,void 0,"".concat(this.id,"-").concat(e.id()))}},{key:"hasDataForRefName",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.nclist.getDataRoot(t);case 2:return a=e.sent,e.abrupt("return",!(null===a||void 0===a||null===(n=a.stats)||void 0===n||!n.featureCount));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.configRefNames||[]);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"freeResources",value:function(){}}]),n}(l.BaseFeatureDataAdapter)},53260:function(){}}]);
//# sourceMappingURL=4340.1963709a.chunk.js.map