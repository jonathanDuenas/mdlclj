// Compiled by ClojureScript 1.9.562 {}
goog.provide('om.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('com.cognitect.transit');
goog.require('om.tempid');

/**
* @constructor
 * @implements {om.transit.Object}
*/
om.transit.TempIdHandler = (function (){
})
om.transit.TempIdHandler.prototype.tag = (function (_){
var self__ = this;
var ___$1 = this;
return "om/id";
});

om.transit.TempIdHandler.prototype.rep = (function (r){
var self__ = this;
var _ = this;
return r.id;
});

om.transit.TempIdHandler.prototype.stringRep = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

om.transit.TempIdHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

om.transit.TempIdHandler.cljs$lang$type = true;

om.transit.TempIdHandler.cljs$lang$ctorStr = "om.transit/TempIdHandler";

om.transit.TempIdHandler.cljs$lang$ctorPrWriter = (function (this__8009__auto__,writer__8010__auto__,opt__8011__auto__){
return cljs.core._write.call(null,writer__8010__auto__,"om.transit/TempIdHandler");
});

om.transit.__GT_TempIdHandler = (function om$transit$__GT_TempIdHandler(){
return (new om.transit.TempIdHandler());
});

om.transit.writer = (function om$transit$writer(var_args){
var args18495 = [];
var len__8511__auto___18498 = arguments.length;
var i__8512__auto___18499 = (0);
while(true){
if((i__8512__auto___18499 < len__8511__auto___18498)){
args18495.push((arguments[i__8512__auto___18499]));

var G__18500 = (i__8512__auto___18499 + (1));
i__8512__auto___18499 = G__18500;
continue;
} else {
}
break;
}

var G__18497 = args18495.length;
switch (G__18497) {
case 0:
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18495.length)].join('')));

}
});

om.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.assoc_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),om.tempid.TempId], null),(new om.transit.TempIdHandler())));
});

om.transit.writer.cljs$lang$maxFixedArity = 1;

om.transit.reader = (function om$transit$reader(var_args){
var args18502 = [];
var len__8511__auto___18505 = arguments.length;
var i__8512__auto___18506 = (0);
while(true){
if((i__8512__auto___18506 < len__8511__auto___18505)){
args18502.push((arguments[i__8512__auto___18506]));

var G__18507 = (i__8512__auto___18506 + (1));
i__8512__auto___18506 = G__18507;
continue;
} else {
}
break;
}

var G__18504 = args18502.length;
switch (G__18504) {
case 0:
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18502.length)].join('')));

}
});

om.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.assoc_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),"om/id"], null),(function (id){
return om.tempid.tempid.call(null,id);
})));
});

om.transit.reader.cljs$lang$maxFixedArity = 1;

