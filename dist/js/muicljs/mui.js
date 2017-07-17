// Compiled by ClojureScript 1.9.562 {}
goog.provide('muicljs.mui');
goog.require('cljs.core');
goog.require('muicljs.app_bar');
goog.require('muicljs.button');
goog.require('muicljs.divider');
goog.require('muicljs.list');
goog.require('muicljs.list_item');
goog.require('muicljs.menu_drawer');
goog.require('muicljs.menu_item');
goog.require('muicljs.content');
muicljs.mui.appBar = (function muicljs$mui$appBar(s,t){
return muicljs.app_bar.AppBar.call(null,s,t);
});
muicljs.mui.button = (function muicljs$mui$button(s,t){
return muicljs.button.Button.call(null,s,t);
});
muicljs.mui.divider = (function muicljs$mui$divider(var_args){
var args19894 = [];
var len__8511__auto___19897 = arguments.length;
var i__8512__auto___19898 = (0);
while(true){
if((i__8512__auto___19898 < len__8511__auto___19897)){
args19894.push((arguments[i__8512__auto___19898]));

var G__19899 = (i__8512__auto___19898 + (1));
i__8512__auto___19898 = G__19899;
continue;
} else {
}
break;
}

var G__19896 = args19894.length;
switch (G__19896) {
case 0:
return muicljs.mui.divider.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return muicljs.mui.divider.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19894.length)].join('')));

}
});

muicljs.mui.divider.cljs$core$IFn$_invoke$arity$0 = (function (){
return muicljs.mui.divider.call(null,null,null);
});

muicljs.mui.divider.cljs$core$IFn$_invoke$arity$2 = (function (s,t){
return muicljs.divider.Divider.call(null,s,t);
});

muicljs.mui.divider.cljs$lang$maxFixedArity = 2;

muicljs.mui.listMui = (function muicljs$mui$listMui(var_args){
var args__8518__auto__ = [];
var len__8511__auto___19903 = arguments.length;
var i__8512__auto___19904 = (0);
while(true){
if((i__8512__auto___19904 < len__8511__auto___19903)){
args__8518__auto__.push((arguments[i__8512__auto___19904]));

var G__19905 = (i__8512__auto___19904 + (1));
i__8512__auto___19904 = G__19905;
continue;
} else {
}
break;
}

var argseq__8519__auto__ = ((((1) < args__8518__auto__.length))?(new cljs.core.IndexedSeq(args__8518__auto__.slice((1)),(0),null)):null);
return muicljs.mui.listMui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8519__auto__);
});

muicljs.mui.listMui.cljs$core$IFn$_invoke$arity$variadic = (function (s,c){
return muicljs.list.List.call(null,s,c);
});

muicljs.mui.listMui.cljs$lang$maxFixedArity = (1);

muicljs.mui.listMui.cljs$lang$applyTo = (function (seq19901){
var G__19902 = cljs.core.first.call(null,seq19901);
var seq19901__$1 = cljs.core.next.call(null,seq19901);
return muicljs.mui.listMui.cljs$core$IFn$_invoke$arity$variadic(G__19902,seq19901__$1);
});

muicljs.mui.listItem = (function muicljs$mui$listItem(s,t){
return muicljs.list_item.ListItem.call(null,s,t);
});
muicljs.mui.menuDrawer = (function muicljs$mui$menuDrawer(var_args){
var args__8518__auto__ = [];
var len__8511__auto___19908 = arguments.length;
var i__8512__auto___19909 = (0);
while(true){
if((i__8512__auto___19909 < len__8511__auto___19908)){
args__8518__auto__.push((arguments[i__8512__auto___19909]));

var G__19910 = (i__8512__auto___19909 + (1));
i__8512__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var argseq__8519__auto__ = ((((1) < args__8518__auto__.length))?(new cljs.core.IndexedSeq(args__8518__auto__.slice((1)),(0),null)):null);
return muicljs.mui.menuDrawer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8519__auto__);
});

muicljs.mui.menuDrawer.cljs$core$IFn$_invoke$arity$variadic = (function (s,c){
return muicljs.menu_drawer.MenuDrawer.call(null,s,c);
});

muicljs.mui.menuDrawer.cljs$lang$maxFixedArity = (1);

muicljs.mui.menuDrawer.cljs$lang$applyTo = (function (seq19906){
var G__19907 = cljs.core.first.call(null,seq19906);
var seq19906__$1 = cljs.core.next.call(null,seq19906);
return muicljs.mui.menuDrawer.cljs$core$IFn$_invoke$arity$variadic(G__19907,seq19906__$1);
});

muicljs.mui.menuItem = (function muicljs$mui$menuItem(s,t){
return muicljs.menu_item.MenuItem.call(null,s,t);
});
muicljs.mui.content = (function muicljs$mui$content(var_args){
var args__8518__auto__ = [];
var len__8511__auto___19912 = arguments.length;
var i__8512__auto___19913 = (0);
while(true){
if((i__8512__auto___19913 < len__8511__auto___19912)){
args__8518__auto__.push((arguments[i__8512__auto___19913]));

var G__19914 = (i__8512__auto___19913 + (1));
i__8512__auto___19913 = G__19914;
continue;
} else {
}
break;
}

var argseq__8519__auto__ = ((((0) < args__8518__auto__.length))?(new cljs.core.IndexedSeq(args__8518__auto__.slice((0)),(0),null)):null);
return muicljs.mui.content.cljs$core$IFn$_invoke$arity$variadic(argseq__8519__auto__);
});

muicljs.mui.content.cljs$core$IFn$_invoke$arity$variadic = (function (c){
return muicljs.content.Content.call(null,c);
});

muicljs.mui.content.cljs$lang$maxFixedArity = (0);

muicljs.mui.content.cljs$lang$applyTo = (function (seq19911){
return muicljs.mui.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19911));
});

