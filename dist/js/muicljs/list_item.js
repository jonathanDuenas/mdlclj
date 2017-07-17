// Compiled by ClojureScript 1.9.562 {}
goog.provide('muicljs.list_item');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
muicljs.list_item.ListItem = (function muicljs$list_item$ListItem(style,text){
return om.dom.li.call(null,({"className": "mdl-list__item"}),om.dom.a.call(null,({"className": "mdl-list__item-primary-content", "href": new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(style)}),text));
});
