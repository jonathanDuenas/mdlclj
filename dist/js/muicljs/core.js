// Compiled by ClojureScript 1.9.562 {}
goog.provide('muicljs.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('muicljs.mui');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
muicljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
muicljs.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),muicljs.core.app_state], null));
/**
 * @constructor
 */
muicljs.core.RootView = (function muicljs$core$RootView(){
var this__10013__auto__ = this;
React.Component.apply(this__10013__auto__,arguments);

if(!((this__10013__auto__.initLocalState == null))){
this__10013__auto__.state = this__10013__auto__.initLocalState();
} else {
this__10013__auto__.state = {};
}

return this__10013__auto__;
});

muicljs.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x19921_19933 = muicljs.core.RootView.prototype;
x19921_19933.componentWillUpdate = ((function (x19921_19933){
return (function (next_props__9901__auto__,next_state__9902__auto__){
var this__9900__auto__ = this;
if(((!((this__9900__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__9900__auto__.om$next$Ident$)))?true:false):false)){
var ident__9904__auto___19934 = om.next.ident.call(null,this__9900__auto__,om.next.props.call(null,this__9900__auto__));
var next_ident__9905__auto___19935 = om.next.ident.call(null,this__9900__auto__,om.next._next_props.call(null,next_props__9901__auto__,this__9900__auto__));
if(cljs.core.not_EQ_.call(null,ident__9904__auto___19934,next_ident__9905__auto___19935)){
var idxr__9906__auto___19936 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9900__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__9906__auto___19936 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__9906__auto___19936),((function (idxr__9906__auto___19936,ident__9904__auto___19934,next_ident__9905__auto___19935,this__9900__auto__,x19921_19933){
return (function (indexes__9907__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__9907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__9904__auto___19934], null),cljs.core.disj,this__9900__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__9905__auto___19935], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__9900__auto__);
});})(idxr__9906__auto___19936,ident__9904__auto___19934,next_ident__9905__auto___19935,this__9900__auto__,x19921_19933))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__9900__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9900__auto__);
});})(x19921_19933))
;

x19921_19933.shouldComponentUpdate = ((function (x19921_19933){
return (function (next_props__9901__auto__,next_state__9902__auto__){
var this__9900__auto__ = this;
var next_children__9903__auto__ = next_props__9901__auto__.children;
var next_props__9901__auto____$1 = goog.object.get(next_props__9901__auto__,"omcljs$value");
var next_props__9901__auto____$2 = (function (){var G__19923 = next_props__9901__auto____$1;
if((next_props__9901__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19923);
} else {
return G__19923;
}
})();
var or__7398__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__9900__auto__),next_props__9901__auto____$2);
if(or__7398__auto__){
return or__7398__auto__;
} else {
var or__7398__auto____$1 = (function (){var and__7386__auto__ = this__9900__auto__.state;
if(cljs.core.truth_(and__7386__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__9900__auto__.state,"omcljs$state"),goog.object.get(next_state__9902__auto__,"omcljs$state"));
} else {
return and__7386__auto__;
}
})();
if(cljs.core.truth_(or__7398__auto____$1)){
return or__7398__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__9900__auto__.props.children,next_children__9903__auto__);
}
}
});})(x19921_19933))
;

x19921_19933.componentWillUnmount = ((function (x19921_19933){
return (function (){
var this__9900__auto__ = this;
var r__9911__auto__ = om.next.get_reconciler.call(null,this__9900__auto__);
var cfg__9912__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__9911__auto__);
var st__9913__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__9912__auto__);
var indexer__9910__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__9912__auto__);
if(cljs.core.truth_((function (){var and__7386__auto__ = !((st__9913__auto__ == null));
if(and__7386__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__9913__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__9900__auto__], null));
} else {
return and__7386__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__9913__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__9900__auto__);
} else {
}

if((indexer__9910__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__9910__auto__,this__9900__auto__);
}
});})(x19921_19933))
;

x19921_19933.componentDidUpdate = ((function (x19921_19933){
return (function (prev_props__9908__auto__,prev_state__9909__auto__){
var this__9900__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9900__auto__);
});})(x19921_19933))
;

x19921_19933.isMounted = ((function (x19921_19933){
return (function (){
var this__9900__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9900__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19921_19933))
;

x19921_19933.componentWillMount = ((function (x19921_19933){
return (function (){
var this__9900__auto__ = this;
var indexer__9910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9900__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9910__auto__,this__9900__auto__);
}
});})(x19921_19933))
;

x19921_19933.render = ((function (x19921_19933){
return (function (){
var this__9899__auto__ = this;
var this$ = this__9899__auto__;
var _STAR_reconciler_STAR_19924 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19925 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19926 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19927 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19928 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9899__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9899__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9899__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9899__auto__);

om.next._STAR_parent_STAR_ = this__9899__auto__;

try{var map__19929 = om.next.props.call(null,this$);
var map__19929__$1 = ((((!((map__19929 == null)))?((((map__19929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19929):map__19929);
var props = map__19929__$1;
return muicljs.mui.content.call(null,muicljs.mui.appBar.call(null,null,"Inicial"),muicljs.mui.menuDrawer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Titulo"], null),muicljs.mui.menuItem.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Home"),muicljs.mui.menuItem.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/Segunda"], null),"Segunda")),om.dom.main.call(null,({"className": "mdl-layout__content mdl-color--grey-100"}),om.dom.h2.call(null,null,"Lorean Ipsum"),muicljs.mui.divider.call(null),muicljs.mui.button.call(null,({"onClick": ((function (map__19929,map__19929__$1,props,_STAR_reconciler_STAR_19924,_STAR_depth_STAR_19925,_STAR_shared_STAR_19926,_STAR_instrument_STAR_19927,_STAR_parent_STAR_19928,this$,this__9899__auto__,x19921_19933){
return (function (){
return alert("Hola Mundo");
});})(map__19929,map__19929__$1,props,_STAR_reconciler_STAR_19924,_STAR_depth_STAR_19925,_STAR_shared_STAR_19926,_STAR_instrument_STAR_19927,_STAR_parent_STAR_19928,this$,this__9899__auto__,x19921_19933))
}),"Prueba")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19928;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19927;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19926;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19925;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19924;
}});})(x19921_19933))
;


muicljs.core.RootView.prototype.constructor = muicljs.core.RootView;

muicljs.core.RootView.prototype.constructor.displayName = "muicljs.core/RootView";

muicljs.core.RootView.prototype.om$isComponent = true;

var x19931_19937 = muicljs.core.RootView;


var x19932_19938 = muicljs.core.RootView.prototype;


muicljs.core.RootView.cljs$lang$type = true;

muicljs.core.RootView.cljs$lang$ctorStr = "muicljs.core/RootView";

muicljs.core.RootView.cljs$lang$ctorPrWriter = (function (this__10016__auto__,writer__10017__auto__,opt__10018__auto__){
return cljs.core._write.call(null,writer__10017__auto__,"muicljs.core/RootView");
});
/**
 * @constructor
 */
muicljs.core.Counter = (function muicljs$core$Counter(){
var this__10013__auto__ = this;
React.Component.apply(this__10013__auto__,arguments);

if(!((this__10013__auto__.initLocalState == null))){
this__10013__auto__.state = this__10013__auto__.initLocalState();
} else {
this__10013__auto__.state = {};
}

return this__10013__auto__;
});

muicljs.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x19943_19955 = muicljs.core.Counter.prototype;
x19943_19955.componentWillUpdate = ((function (x19943_19955){
return (function (next_props__9901__auto__,next_state__9902__auto__){
var this__9900__auto__ = this;
if(((!((this__9900__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__9900__auto__.om$next$Ident$)))?true:false):false)){
var ident__9904__auto___19956 = om.next.ident.call(null,this__9900__auto__,om.next.props.call(null,this__9900__auto__));
var next_ident__9905__auto___19957 = om.next.ident.call(null,this__9900__auto__,om.next._next_props.call(null,next_props__9901__auto__,this__9900__auto__));
if(cljs.core.not_EQ_.call(null,ident__9904__auto___19956,next_ident__9905__auto___19957)){
var idxr__9906__auto___19958 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9900__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__9906__auto___19958 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__9906__auto___19958),((function (idxr__9906__auto___19958,ident__9904__auto___19956,next_ident__9905__auto___19957,this__9900__auto__,x19943_19955){
return (function (indexes__9907__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__9907__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__9904__auto___19956], null),cljs.core.disj,this__9900__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__9905__auto___19957], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__9900__auto__);
});})(idxr__9906__auto___19958,ident__9904__auto___19956,next_ident__9905__auto___19957,this__9900__auto__,x19943_19955))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__9900__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__9900__auto__);
});})(x19943_19955))
;

x19943_19955.shouldComponentUpdate = ((function (x19943_19955){
return (function (next_props__9901__auto__,next_state__9902__auto__){
var this__9900__auto__ = this;
var next_children__9903__auto__ = next_props__9901__auto__.children;
var next_props__9901__auto____$1 = goog.object.get(next_props__9901__auto__,"omcljs$value");
var next_props__9901__auto____$2 = (function (){var G__19945 = next_props__9901__auto____$1;
if((next_props__9901__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__19945);
} else {
return G__19945;
}
})();
var or__7398__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__9900__auto__),next_props__9901__auto____$2);
if(or__7398__auto__){
return or__7398__auto__;
} else {
var or__7398__auto____$1 = (function (){var and__7386__auto__ = this__9900__auto__.state;
if(cljs.core.truth_(and__7386__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__9900__auto__.state,"omcljs$state"),goog.object.get(next_state__9902__auto__,"omcljs$state"));
} else {
return and__7386__auto__;
}
})();
if(cljs.core.truth_(or__7398__auto____$1)){
return or__7398__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__9900__auto__.props.children,next_children__9903__auto__);
}
}
});})(x19943_19955))
;

x19943_19955.componentWillUnmount = ((function (x19943_19955){
return (function (){
var this__9900__auto__ = this;
var r__9911__auto__ = om.next.get_reconciler.call(null,this__9900__auto__);
var cfg__9912__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__9911__auto__);
var st__9913__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__9912__auto__);
var indexer__9910__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__9912__auto__);
if(cljs.core.truth_((function (){var and__7386__auto__ = !((st__9913__auto__ == null));
if(and__7386__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__9913__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__9900__auto__], null));
} else {
return and__7386__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__9913__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__9900__auto__);
} else {
}

if((indexer__9910__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__9910__auto__,this__9900__auto__);
}
});})(x19943_19955))
;

x19943_19955.componentDidUpdate = ((function (x19943_19955){
return (function (prev_props__9908__auto__,prev_state__9909__auto__){
var this__9900__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__9900__auto__);
});})(x19943_19955))
;

x19943_19955.isMounted = ((function (x19943_19955){
return (function (){
var this__9900__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__9900__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19943_19955))
;

x19943_19955.componentWillMount = ((function (x19943_19955){
return (function (){
var this__9900__auto__ = this;
var indexer__9910__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__9900__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__9910__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__9910__auto__,this__9900__auto__);
}
});})(x19943_19955))
;

x19943_19955.render = ((function (x19943_19955){
return (function (){
var this__9899__auto__ = this;
var this$ = this__9899__auto__;
var _STAR_reconciler_STAR_19946 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19947 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19948 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19949 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19950 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__9899__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__9899__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__9899__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__9899__auto__);

om.next._STAR_parent_STAR_ = this__9899__auto__;

try{var map__19951 = om.next.props.call(null,this$);
var map__19951__$1 = ((((!((map__19951 == null)))?((((map__19951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19951):map__19951);
var count = cljs.core.get.call(null,map__19951__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return muicljs.mui.content.call(null,muicljs.mui.appBar.call(null,null,"Inicial"),muicljs.mui.menuDrawer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Titulo"], null),muicljs.mui.menuItem.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Home"),muicljs.mui.menuItem.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/Segunda"], null),"Segunda")),om.dom.main.call(null,({"className": "mdl-layout__content mdl-color--grey-100"}),om.dom.h2.call(null,null,"Lorean Ipsum"),muicljs.mui.divider.call(null),om.dom.br.call(null,null,null),muicljs.mui.button.call(null,({"onClick": ((function (map__19951,map__19951__$1,count,_STAR_reconciler_STAR_19946,_STAR_depth_STAR_19947,_STAR_shared_STAR_19948,_STAR_instrument_STAR_19949,_STAR_parent_STAR_19950,this$,this__9899__auto__,x19943_19955){
return (function (){
return alert("Hola Mundo");
});})(map__19951,map__19951__$1,count,_STAR_reconciler_STAR_19946,_STAR_depth_STAR_19947,_STAR_shared_STAR_19948,_STAR_instrument_STAR_19949,_STAR_parent_STAR_19950,this$,this__9899__auto__,x19943_19955))
}),"Hola"),muicljs.mui.listMui.call(null,null,muicljs.mui.listItem.call(null,null,"lista 1"),muicljs.mui.listItem.call(null,null,"lista 2")),om.dom.span.call(null,null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Count: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)].join('')),muicljs.mui.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__19951,map__19951__$1,count,_STAR_reconciler_STAR_19946,_STAR_depth_STAR_19947,_STAR_shared_STAR_19948,_STAR_instrument_STAR_19949,_STAR_parent_STAR_19950,this$,this__9899__auto__,x19943_19955){
return (function (e){
return cljs.core.swap_BANG_.call(null,muicljs.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__19951,map__19951__$1,count,_STAR_reconciler_STAR_19946,_STAR_depth_STAR_19947,_STAR_shared_STAR_19948,_STAR_instrument_STAR_19949,_STAR_parent_STAR_19950,this$,this__9899__auto__,x19943_19955))
], null),"Click me!")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19950;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19949;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19948;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19947;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19946;
}});})(x19943_19955))
;


muicljs.core.Counter.prototype.constructor = muicljs.core.Counter;

muicljs.core.Counter.prototype.constructor.displayName = "muicljs.core/Counter";

muicljs.core.Counter.prototype.om$isComponent = true;

var x19953_19959 = muicljs.core.Counter;


var x19954_19960 = muicljs.core.Counter.prototype;


muicljs.core.Counter.cljs$lang$type = true;

muicljs.core.Counter.cljs$lang$ctorStr = "muicljs.core/Counter";

muicljs.core.Counter.cljs$lang$ctorPrWriter = (function (this__10016__auto__,writer__10017__auto__,opt__10018__auto__){
return cljs.core._write.call(null,writer__10017__auto__,"muicljs.core/Counter");
});
om.next.add_root_BANG_.call(null,muicljs.core.reconciler,muicljs.core.Counter,goog.dom.getElement("app"));
