// Compiled by ClojureScript 1.9.562 {}
goog.provide('muicljs.app_bar');
goog.require('cljs.core');
goog.require('om.dom');
muicljs.app_bar.AppBar = (function muicljs$app_bar$AppBar(style,text){
return om.dom.header.call(null,({"className": "demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"}),om.dom.div.call(null,({"className": "mdl-layout__header-row"}),om.dom.span.call(null,({"className": "mdl-layout-title"}),text),om.dom.div.call(null,({"className": "mdl-layout-spacer"}),null)));
});
