// Compiled by ClojureScript 1.9.562 {}
goog.provide('muicljs.content');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
muicljs.content.Content = (function muicljs$content$Content(var_args){
var args__8518__auto__ = [];
var len__8511__auto___19871 = arguments.length;
var i__8512__auto___19872 = (0);
while(true){
if((i__8512__auto___19872 < len__8511__auto___19871)){
args__8518__auto__.push((arguments[i__8512__auto___19872]));

var G__19873 = (i__8512__auto___19872 + (1));
i__8512__auto___19872 = G__19873;
continue;
} else {
}
break;
}

var argseq__8519__auto__ = ((((0) < args__8518__auto__.length))?(new cljs.core.IndexedSeq(args__8518__auto__.slice((0)),(0),null)):null);
return muicljs.content.Content.cljs$core$IFn$_invoke$arity$variadic(argseq__8519__auto__);
});

muicljs.content.Content.cljs$core$IFn$_invoke$arity$variadic = (function (child){
return om.dom.div.call(null,({"className": "demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header"}),child);
});

muicljs.content.Content.cljs$lang$maxFixedArity = (0);

muicljs.content.Content.cljs$lang$applyTo = (function (seq19870){
return muicljs.content.Content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19870));
});

