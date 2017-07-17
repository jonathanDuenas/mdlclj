// Compiled by ClojureScript 1.9.562 {}
goog.provide('muicljs.menu_drawer');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
muicljs.menu_drawer.MenuDrawer = (function muicljs$menu_drawer$MenuDrawer(var_args){
var args__8518__auto__ = [];
var len__8511__auto___19889 = arguments.length;
var i__8512__auto___19890 = (0);
while(true){
if((i__8512__auto___19890 < len__8511__auto___19889)){
args__8518__auto__.push((arguments[i__8512__auto___19890]));

var G__19891 = (i__8512__auto___19890 + (1));
i__8512__auto___19890 = G__19891;
continue;
} else {
}
break;
}

var argseq__8519__auto__ = ((((1) < args__8518__auto__.length))?(new cljs.core.IndexedSeq(args__8518__auto__.slice((1)),(0),null)):null);
return muicljs.menu_drawer.MenuDrawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8519__auto__);
});

muicljs.menu_drawer.MenuDrawer.cljs$core$IFn$_invoke$arity$variadic = (function (style,child){
return om.dom.div.call(null,({"className": "demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"}),om.dom.header.call(null,({"className": "demo-drawer-header"}),om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(style))),om.dom.nav.call(null,({"className": "demo-navigation mdl-navigation mdl-color--blue-grey-800"}),child));
});

muicljs.menu_drawer.MenuDrawer.cljs$lang$maxFixedArity = (1);

muicljs.menu_drawer.MenuDrawer.cljs$lang$applyTo = (function (seq19887){
var G__19888 = cljs.core.first.call(null,seq19887);
var seq19887__$1 = cljs.core.next.call(null,seq19887);
return muicljs.menu_drawer.MenuDrawer.cljs$core$IFn$_invoke$arity$variadic(G__19888,seq19887__$1);
});

