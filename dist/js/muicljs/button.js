// Compiled by ClojureScript 1.9.562 {}
goog.provide('muicljs.button');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
muicljs.button.Button = (function muicljs$button$Button(style,text){
return om.dom.button.call(null,({"className": "mdl-button mdl-js-button mdl-button--raised mdl-button--colored", "onClick": new cljs.core.Keyword(null,"onClick","onClick",-1991238530).cljs$core$IFn$_invoke$arity$1(style)}),text);
});
