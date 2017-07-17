// Compiled by ClojureScript 1.9.562 {}
goog.provide('muicljs.list');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
muicljs.list.List = (function muicljs$list$List(var_args){
var args__8518__auto__ = [];
var len__8511__auto___19882 = arguments.length;
var i__8512__auto___19883 = (0);
while(true){
if((i__8512__auto___19883 < len__8511__auto___19882)){
args__8518__auto__.push((arguments[i__8512__auto___19883]));

var G__19884 = (i__8512__auto___19883 + (1));
i__8512__auto___19883 = G__19884;
continue;
} else {
}
break;
}

var argseq__8519__auto__ = ((((1) < args__8518__auto__.length))?(new cljs.core.IndexedSeq(args__8518__auto__.slice((1)),(0),null)):null);
return muicljs.list.List.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8519__auto__);
});

muicljs.list.List.cljs$core$IFn$_invoke$arity$variadic = (function (style,child){
return om.dom.ul.call(null,({"className": "mdl-list"}),child);
});

muicljs.list.List.cljs$lang$maxFixedArity = (1);

muicljs.list.List.cljs$lang$applyTo = (function (seq19880){
var G__19881 = cljs.core.first.call(null,seq19880);
var seq19880__$1 = cljs.core.next.call(null,seq19880);
return muicljs.list.List.cljs$core$IFn$_invoke$arity$variadic(G__19881,seq19880__$1);
});

