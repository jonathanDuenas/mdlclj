// Compiled by ClojureScript 1.9.562 {}
goog.provide('muicljs.divider');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
muicljs.divider.Divider = (function muicljs$divider$Divider(var_args){
var args19857 = [];
var len__8511__auto___19860 = arguments.length;
var i__8512__auto___19861 = (0);
while(true){
if((i__8512__auto___19861 < len__8511__auto___19860)){
args19857.push((arguments[i__8512__auto___19861]));

var G__19862 = (i__8512__auto___19861 + (1));
i__8512__auto___19861 = G__19862;
continue;
} else {
}
break;
}

var G__19859 = args19857.length;
switch (G__19859) {
case 2:
return muicljs.divider.Divider.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 0:
return muicljs.divider.Divider.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19857.length)].join('')));

}
});

muicljs.divider.Divider.cljs$core$IFn$_invoke$arity$2 = (function (style,text){
return om.dom.hr.call(null,({"style": ({"margin": "8px 0px", "height": "1px", "border": "none", "background-color": "rgb(224, 224, 224)"})}),null);
});

muicljs.divider.Divider.cljs$core$IFn$_invoke$arity$0 = (function (){
return muicljs.divider.Divider.call(null,null,null);
});

muicljs.divider.Divider.cljs$lang$maxFixedArity = 2;

