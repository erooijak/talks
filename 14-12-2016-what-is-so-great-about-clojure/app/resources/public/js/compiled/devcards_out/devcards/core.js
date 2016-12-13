// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__44182__auto__ = (function (){var and__44170__auto__ = typeof Symbol !== 'undefined';
if(and__44170__auto__){
var and__44170__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__44170__auto____$1){
var and__44170__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__44170__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__44170__auto____$2;
}
} else {
return and__44170__auto____$1;
}
} else {
return and__44170__auto__;
}
})();
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__52529_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__52529_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args52530 = [];
var len__45257__auto___52533 = arguments.length;
var i__45258__auto___52534 = (0);
while(true){
if((i__45258__auto___52534 < len__45257__auto___52533)){
args52530.push((arguments[i__45258__auto___52534]));

var G__52535 = (i__45258__auto___52534 + (1));
i__45258__auto___52534 = G__52535;
continue;
} else {
}
break;
}

var G__52532 = args52530.length;
switch (G__52532) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52530.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__44170__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__44170__auto__){
var map__52543 = c;
var map__52543__$1 = ((((!((map__52543 == null)))?((((map__52543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52543):map__52543);
var path = cljs.core.get.call(null,map__52543__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__52543__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__44170__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__51737__auto___52549 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__44182__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__51737__auto___52549);
}

var seq__52545_52550 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__52546_52551 = null;
var count__52547_52552 = (0);
var i__52548_52553 = (0);
while(true){
if((i__52548_52553 < count__52547_52552)){
var property__51738__auto___52554 = cljs.core._nth.call(null,chunk__52546_52551,i__52548_52553);
if(cljs.core.truth_((base__51737__auto___52549[property__51738__auto___52554]))){
(devcards.core.CodeHighlight.prototype[property__51738__auto___52554] = (base__51737__auto___52549[property__51738__auto___52554]));
} else {
}

var G__52555 = seq__52545_52550;
var G__52556 = chunk__52546_52551;
var G__52557 = count__52547_52552;
var G__52558 = (i__52548_52553 + (1));
seq__52545_52550 = G__52555;
chunk__52546_52551 = G__52556;
count__52547_52552 = G__52557;
i__52548_52553 = G__52558;
continue;
} else {
var temp__4657__auto___52559 = cljs.core.seq.call(null,seq__52545_52550);
if(temp__4657__auto___52559){
var seq__52545_52560__$1 = temp__4657__auto___52559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52545_52560__$1)){
var c__44993__auto___52561 = cljs.core.chunk_first.call(null,seq__52545_52560__$1);
var G__52562 = cljs.core.chunk_rest.call(null,seq__52545_52560__$1);
var G__52563 = c__44993__auto___52561;
var G__52564 = cljs.core.count.call(null,c__44993__auto___52561);
var G__52565 = (0);
seq__52545_52550 = G__52562;
chunk__52546_52551 = G__52563;
count__52547_52552 = G__52564;
i__52548_52553 = G__52565;
continue;
} else {
var property__51738__auto___52566 = cljs.core.first.call(null,seq__52545_52560__$1);
if(cljs.core.truth_((base__51737__auto___52549[property__51738__auto___52566]))){
(devcards.core.CodeHighlight.prototype[property__51738__auto___52566] = (base__51737__auto___52549[property__51738__auto___52566]));
} else {
}

var G__52567 = cljs.core.next.call(null,seq__52545_52560__$1);
var G__52568 = null;
var G__52569 = (0);
var G__52570 = (0);
seq__52545_52550 = G__52567;
chunk__52546_52551 = G__52568;
count__52547_52552 = G__52569;
i__52548_52553 = G__52570;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__45107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__45108__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__45109__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__45110__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__45111__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__45111__auto__,method_table__45107__auto__,prefer_table__45108__auto__,method_cache__45109__auto__,cached_hierarchy__45110__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__52571){
var map__52572 = p__52571;
var map__52572__$1 = ((((!((map__52572 == null)))?((((map__52572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52572):map__52572);
var content = cljs.core.get.call(null,map__52572__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__52574){
var map__52575 = p__52574;
var map__52575__$1 = ((((!((map__52575 == null)))?((((map__52575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52575):map__52575);
var block = map__52575__$1;
var content = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__45264__auto__ = [];
var len__45257__auto___52578 = arguments.length;
var i__45258__auto___52579 = (0);
while(true){
if((i__45258__auto___52579 < len__45257__auto___52578)){
args__45264__auto__.push((arguments[i__45258__auto___52579]));

var G__52580 = (i__45258__auto___52579 + (1));
i__45258__auto___52579 = G__52580;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq52577){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52577));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__52582 = devcards.system.devcards_rendered_card_class;
var G__52582__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__52582),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__52582);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__52582__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__52582__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args52583 = [];
var len__45257__auto___52591 = arguments.length;
var i__45258__auto___52592 = (0);
while(true){
if((i__45258__auto___52592 < len__45257__auto___52591)){
args52583.push((arguments[i__45258__auto___52592]));

var G__52593 = (i__45258__auto___52592 + (1));
i__45258__auto___52592 = G__52593;
continue;
} else {
}
break;
}

var G__52585 = args52583.length;
switch (G__52585) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52583.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__52586 = card;
var map__52586__$1 = ((((!((map__52586 == null)))?((((map__52586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52586):map__52586);
var path = cljs.core.get.call(null,map__52586__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__52586__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__52586,map__52586__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__52586,map__52586__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs52588 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs52588))?sablono.interpreter.attributes.call(null,attrs52588):null),((cljs.core.map_QMARK_.call(null,attrs52588))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52588)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__44845__auto__ = (((this$ == null))?null:this$);
var m__44846__auto__ = (devcards.core._devcard_options[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,this$,devcard_opts);
} else {
var m__44846__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__44845__auto__ = (((this$ == null))?null:this$);
var m__44846__auto__ = (devcards.core._devcard[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,this$,devcard_opts);
} else {
var m__44846__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__51737__auto___52600 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs52595 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52595))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs52595)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs52595))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52595)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__51737__auto___52600);
}

var seq__52596_52601 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__52597_52602 = null;
var count__52598_52603 = (0);
var i__52599_52604 = (0);
while(true){
if((i__52599_52604 < count__52598_52603)){
var property__51738__auto___52605 = cljs.core._nth.call(null,chunk__52597_52602,i__52599_52604);
if(cljs.core.truth_((base__51737__auto___52600[property__51738__auto___52605]))){
(devcards.core.DontUpdate.prototype[property__51738__auto___52605] = (base__51737__auto___52600[property__51738__auto___52605]));
} else {
}

var G__52606 = seq__52596_52601;
var G__52607 = chunk__52597_52602;
var G__52608 = count__52598_52603;
var G__52609 = (i__52599_52604 + (1));
seq__52596_52601 = G__52606;
chunk__52597_52602 = G__52607;
count__52598_52603 = G__52608;
i__52599_52604 = G__52609;
continue;
} else {
var temp__4657__auto___52610 = cljs.core.seq.call(null,seq__52596_52601);
if(temp__4657__auto___52610){
var seq__52596_52611__$1 = temp__4657__auto___52610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52596_52611__$1)){
var c__44993__auto___52612 = cljs.core.chunk_first.call(null,seq__52596_52611__$1);
var G__52613 = cljs.core.chunk_rest.call(null,seq__52596_52611__$1);
var G__52614 = c__44993__auto___52612;
var G__52615 = cljs.core.count.call(null,c__44993__auto___52612);
var G__52616 = (0);
seq__52596_52601 = G__52613;
chunk__52597_52602 = G__52614;
count__52598_52603 = G__52615;
i__52599_52604 = G__52616;
continue;
} else {
var property__51738__auto___52617 = cljs.core.first.call(null,seq__52596_52611__$1);
if(cljs.core.truth_((base__51737__auto___52600[property__51738__auto___52617]))){
(devcards.core.DontUpdate.prototype[property__51738__auto___52617] = (base__51737__auto___52600[property__51738__auto___52617]));
} else {
}

var G__52618 = cljs.core.next.call(null,seq__52596_52611__$1);
var G__52619 = null;
var G__52620 = (0);
var G__52621 = (0);
seq__52596_52601 = G__52618;
chunk__52597_52602 = G__52619;
count__52598_52603 = G__52620;
i__52599_52604 = G__52621;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__44182__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__45016__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__45016__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__45016__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__45016__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45016__auto____$3);
})(),x__45016__auto____$2);
})(),x__45016__auto____$1);
})(),x__45016__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__51737__auto___52628 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__44182__auto__ = (function (){var and__44170__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__44170__auto__)){
return this$.state;
} else {
return and__44170__auto__;
}
})();
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__44170__auto__ = data_atom;
if(cljs.core.truth_(and__44170__auto__)){
return id;
} else {
return and__44170__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__51737__auto___52628);
}

var seq__52624_52629 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__52625_52630 = null;
var count__52626_52631 = (0);
var i__52627_52632 = (0);
while(true){
if((i__52627_52632 < count__52626_52631)){
var property__51738__auto___52633 = cljs.core._nth.call(null,chunk__52625_52630,i__52627_52632);
if(cljs.core.truth_((base__51737__auto___52628[property__51738__auto___52633]))){
(devcards.core.DevcardBase.prototype[property__51738__auto___52633] = (base__51737__auto___52628[property__51738__auto___52633]));
} else {
}

var G__52634 = seq__52624_52629;
var G__52635 = chunk__52625_52630;
var G__52636 = count__52626_52631;
var G__52637 = (i__52627_52632 + (1));
seq__52624_52629 = G__52634;
chunk__52625_52630 = G__52635;
count__52626_52631 = G__52636;
i__52627_52632 = G__52637;
continue;
} else {
var temp__4657__auto___52638 = cljs.core.seq.call(null,seq__52624_52629);
if(temp__4657__auto___52638){
var seq__52624_52639__$1 = temp__4657__auto___52638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52624_52639__$1)){
var c__44993__auto___52640 = cljs.core.chunk_first.call(null,seq__52624_52639__$1);
var G__52641 = cljs.core.chunk_rest.call(null,seq__52624_52639__$1);
var G__52642 = c__44993__auto___52640;
var G__52643 = cljs.core.count.call(null,c__44993__auto___52640);
var G__52644 = (0);
seq__52624_52629 = G__52641;
chunk__52625_52630 = G__52642;
count__52626_52631 = G__52643;
i__52627_52632 = G__52644;
continue;
} else {
var property__51738__auto___52645 = cljs.core.first.call(null,seq__52624_52639__$1);
if(cljs.core.truth_((base__51737__auto___52628[property__51738__auto___52645]))){
(devcards.core.DevcardBase.prototype[property__51738__auto___52645] = (base__51737__auto___52628[property__51738__auto___52645]));
} else {
}

var G__52646 = cljs.core.next.call(null,seq__52624_52639__$1);
var G__52647 = null;
var G__52648 = (0);
var G__52649 = (0);
seq__52624_52629 = G__52646;
chunk__52625_52630 = G__52647;
count__52626_52631 = G__52648;
i__52627_52632 = G__52649;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__51737__auto___52654 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__44170__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__44170__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__44170__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__51737__auto___52654);
}

var seq__52650_52655 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__52651_52656 = null;
var count__52652_52657 = (0);
var i__52653_52658 = (0);
while(true){
if((i__52653_52658 < count__52652_52657)){
var property__51738__auto___52659 = cljs.core._nth.call(null,chunk__52651_52656,i__52653_52658);
if(cljs.core.truth_((base__51737__auto___52654[property__51738__auto___52659]))){
(devcards.core.DomComponent.prototype[property__51738__auto___52659] = (base__51737__auto___52654[property__51738__auto___52659]));
} else {
}

var G__52660 = seq__52650_52655;
var G__52661 = chunk__52651_52656;
var G__52662 = count__52652_52657;
var G__52663 = (i__52653_52658 + (1));
seq__52650_52655 = G__52660;
chunk__52651_52656 = G__52661;
count__52652_52657 = G__52662;
i__52653_52658 = G__52663;
continue;
} else {
var temp__4657__auto___52664 = cljs.core.seq.call(null,seq__52650_52655);
if(temp__4657__auto___52664){
var seq__52650_52665__$1 = temp__4657__auto___52664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52650_52665__$1)){
var c__44993__auto___52666 = cljs.core.chunk_first.call(null,seq__52650_52665__$1);
var G__52667 = cljs.core.chunk_rest.call(null,seq__52650_52665__$1);
var G__52668 = c__44993__auto___52666;
var G__52669 = cljs.core.count.call(null,c__44993__auto___52666);
var G__52670 = (0);
seq__52650_52655 = G__52667;
chunk__52651_52656 = G__52668;
count__52652_52657 = G__52669;
i__52653_52658 = G__52670;
continue;
} else {
var property__51738__auto___52671 = cljs.core.first.call(null,seq__52650_52665__$1);
if(cljs.core.truth_((base__51737__auto___52654[property__51738__auto___52671]))){
(devcards.core.DomComponent.prototype[property__51738__auto___52671] = (base__51737__auto___52654[property__51738__auto___52671]));
} else {
}

var G__52672 = cljs.core.next.call(null,seq__52650_52665__$1);
var G__52673 = null;
var G__52674 = (0);
var G__52675 = (0);
seq__52650_52655 = G__52672;
chunk__52651_52656 = G__52673;
count__52652_52657 = G__52674;
i__52653_52658 = G__52675;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__44182__auto__ = x === true;
if(or__44182__auto__){
return or__44182__auto__;
} else {
var or__44182__auto____$1 = x === false;
if(or__44182__auto____$1){
return or__44182__auto____$1;
} else {
var or__44182__auto____$2 = (x == null);
if(or__44182__auto____$2){
return or__44182__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__44182__auto__ = typeof x === 'string';
if(or__44182__auto__){
return or__44182__auto__;
} else {
var or__44182__auto____$1 = (x == null);
if(or__44182__auto____$1){
return or__44182__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__44182__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__52676_SHARP_){
return !(p1__52676_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__52685 = opts;
var map__52685__$1 = ((((!((map__52685 == null)))?((((map__52685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52685):map__52685);
var name = cljs.core.get.call(null,map__52685__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__52685__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__52685__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__52685__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__44182__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__44182__auto__){
return or__44182__auto__;
} else {
var or__44182__auto____$1 = (options == null);
if(or__44182__auto____$1){
return or__44182__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__44182__auto__ = (initial_data == null);
if(or__44182__auto__){
return or__44182__auto__;
} else {
var or__44182__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__44182__auto____$1){
return or__44182__auto____$1;
} else {
var or__44182__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__44182__auto____$2){
return or__44182__auto____$2;
} else {
var or__44182__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__44182__auto____$3){
return or__44182__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__52685,map__52685__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__52677_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__52677_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__52685,map__52685__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs52693 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs52693))?sablono.interpreter.attributes.call(null,attrs52693):null),((cljs.core.map_QMARK_.call(null,attrs52693))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52693)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs52697 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52697))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs52697)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs52697))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52697)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs52698 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52698))?sablono.interpreter.attributes.call(null,attrs52698):null),((cljs.core.map_QMARK_.call(null,attrs52698))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52698)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs52699 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52699))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs52699)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs52699))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52699)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__52700_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__52700_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__44804__auto__,k__44805__auto__){
var self__ = this;
var this__44804__auto____$1 = this;
return cljs.core._lookup.call(null,this__44804__auto____$1,k__44805__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__44806__auto__,k52702,else__44807__auto__){
var self__ = this;
var this__44806__auto____$1 = this;
var G__52704 = (((k52702 instanceof cljs.core.Keyword))?k52702.fqn:null);
switch (G__52704) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52702,else__44807__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44818__auto__,writer__44819__auto__,opts__44820__auto__){
var self__ = this;
var this__44818__auto____$1 = this;
var pr_pair__44821__auto__ = ((function (this__44818__auto____$1){
return (function (keyval__44822__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44819__auto__,cljs.core.pr_writer,""," ","",opts__44820__auto__,keyval__44822__auto__);
});})(this__44818__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44819__auto__,pr_pair__44821__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__44820__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52701){
var self__ = this;
var G__52701__$1 = this;
return (new cljs.core.RecordIter((0),G__52701__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__44802__auto__){
var self__ = this;
var this__44802__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__44798__auto__){
var self__ = this;
var this__44798__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44808__auto__){
var self__ = this;
var this__44808__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__44799__auto__){
var self__ = this;
var this__44799__auto____$1 = this;
var h__44617__auto__ = self__.__hash;
if(!((h__44617__auto__ == null))){
return h__44617__auto__;
} else {
var h__44617__auto____$1 = cljs.core.hash_imap.call(null,this__44799__auto____$1);
self__.__hash = h__44617__auto____$1;

return h__44617__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__44800__auto__,other__44801__auto__){
var self__ = this;
var this__44800__auto____$1 = this;
if(cljs.core.truth_((function (){var and__44170__auto__ = other__44801__auto__;
if(cljs.core.truth_(and__44170__auto__)){
var and__44170__auto____$1 = (this__44800__auto____$1.constructor === other__44801__auto__.constructor);
if(and__44170__auto____$1){
return cljs.core.equiv_map.call(null,this__44800__auto____$1,other__44801__auto__);
} else {
return and__44170__auto____$1;
}
} else {
return and__44170__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44813__auto__,k__44814__auto__){
var self__ = this;
var this__44813__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__44814__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44813__auto____$1),self__.__meta),k__44814__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44814__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44811__auto__,k__44812__auto__,G__52701){
var self__ = this;
var this__44811__auto____$1 = this;
var pred__52705 = cljs.core.keyword_identical_QMARK_;
var expr__52706 = k__44812__auto__;
if(cljs.core.truth_(pred__52705.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__52706))){
return (new devcards.core.IdentiyOptions(G__52701,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44812__auto__,G__52701),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44816__auto__){
var self__ = this;
var this__44816__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__44803__auto__,G__52701){
var self__ = this;
var this__44803__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__52701,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44809__auto__,entry__44810__auto__){
var self__ = this;
var this__44809__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44810__auto__)){
return cljs.core._assoc.call(null,this__44809__auto____$1,cljs.core._nth.call(null,entry__44810__auto__,(0)),cljs.core._nth.call(null,entry__44810__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44809__auto____$1,entry__44810__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__44838__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__44838__auto__,writer__44839__auto__){
return cljs.core._write.call(null,writer__44839__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__52703){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__52703),null,cljs.core.dissoc.call(null,G__52703,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__52709){
var map__52712 = p__52709;
var map__52712__$1 = ((((!((map__52712 == null)))?((((map__52712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52712):map__52712);
var devcard_opts = map__52712__$1;
var options = cljs.core.get.call(null,map__52712__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__52712,map__52712__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__52712,map__52712__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__44804__auto__,k__44805__auto__){
var self__ = this;
var this__44804__auto____$1 = this;
return cljs.core._lookup.call(null,this__44804__auto____$1,k__44805__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__44806__auto__,k52715,else__44807__auto__){
var self__ = this;
var this__44806__auto____$1 = this;
var G__52717 = (((k52715 instanceof cljs.core.Keyword))?k52715.fqn:null);
switch (G__52717) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52715,else__44807__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44818__auto__,writer__44819__auto__,opts__44820__auto__){
var self__ = this;
var this__44818__auto____$1 = this;
var pr_pair__44821__auto__ = ((function (this__44818__auto____$1){
return (function (keyval__44822__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44819__auto__,cljs.core.pr_writer,""," ","",opts__44820__auto__,keyval__44822__auto__);
});})(this__44818__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44819__auto__,pr_pair__44821__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__44820__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52714){
var self__ = this;
var G__52714__$1 = this;
return (new cljs.core.RecordIter((0),G__52714__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__44802__auto__){
var self__ = this;
var this__44802__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__44798__auto__){
var self__ = this;
var this__44798__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44808__auto__){
var self__ = this;
var this__44808__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__44799__auto__){
var self__ = this;
var this__44799__auto____$1 = this;
var h__44617__auto__ = self__.__hash;
if(!((h__44617__auto__ == null))){
return h__44617__auto__;
} else {
var h__44617__auto____$1 = cljs.core.hash_imap.call(null,this__44799__auto____$1);
self__.__hash = h__44617__auto____$1;

return h__44617__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__44800__auto__,other__44801__auto__){
var self__ = this;
var this__44800__auto____$1 = this;
if(cljs.core.truth_((function (){var and__44170__auto__ = other__44801__auto__;
if(cljs.core.truth_(and__44170__auto__)){
var and__44170__auto____$1 = (this__44800__auto____$1.constructor === other__44801__auto__.constructor);
if(and__44170__auto____$1){
return cljs.core.equiv_map.call(null,this__44800__auto____$1,other__44801__auto__);
} else {
return and__44170__auto____$1;
}
} else {
return and__44170__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44813__auto__,k__44814__auto__){
var self__ = this;
var this__44813__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__44814__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44813__auto____$1),self__.__meta),k__44814__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44814__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44811__auto__,k__44812__auto__,G__52714){
var self__ = this;
var this__44811__auto____$1 = this;
var pred__52718 = cljs.core.keyword_identical_QMARK_;
var expr__52719 = k__44812__auto__;
if(cljs.core.truth_(pred__52718.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__52719))){
return (new devcards.core.AtomLikeOptions(G__52714,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44812__auto__,G__52714),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44816__auto__){
var self__ = this;
var this__44816__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__44803__auto__,G__52714){
var self__ = this;
var this__44803__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__52714,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44809__auto__,entry__44810__auto__){
var self__ = this;
var this__44809__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44810__auto__)){
return cljs.core._assoc.call(null,this__44809__auto____$1,cljs.core._nth.call(null,entry__44810__auto__,(0)),cljs.core._nth.call(null,entry__44810__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44809__auto____$1,entry__44810__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__44838__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__44838__auto__,writer__44839__auto__){
return cljs.core._write.call(null,writer__44839__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__52716){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__52716),null,cljs.core.dissoc.call(null,G__52716,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__44804__auto__,k__44805__auto__){
var self__ = this;
var this__44804__auto____$1 = this;
return cljs.core._lookup.call(null,this__44804__auto____$1,k__44805__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__44806__auto__,k52725,else__44807__auto__){
var self__ = this;
var this__44806__auto____$1 = this;
var G__52727 = (((k52725 instanceof cljs.core.Keyword))?k52725.fqn:null);
switch (G__52727) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52725,else__44807__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44818__auto__,writer__44819__auto__,opts__44820__auto__){
var self__ = this;
var this__44818__auto____$1 = this;
var pr_pair__44821__auto__ = ((function (this__44818__auto____$1){
return (function (keyval__44822__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44819__auto__,cljs.core.pr_writer,""," ","",opts__44820__auto__,keyval__44822__auto__);
});})(this__44818__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44819__auto__,pr_pair__44821__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__44820__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52724){
var self__ = this;
var G__52724__$1 = this;
return (new cljs.core.RecordIter((0),G__52724__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__44802__auto__){
var self__ = this;
var this__44802__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__44798__auto__){
var self__ = this;
var this__44798__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44808__auto__){
var self__ = this;
var this__44808__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__44799__auto__){
var self__ = this;
var this__44799__auto____$1 = this;
var h__44617__auto__ = self__.__hash;
if(!((h__44617__auto__ == null))){
return h__44617__auto__;
} else {
var h__44617__auto____$1 = cljs.core.hash_imap.call(null,this__44799__auto____$1);
self__.__hash = h__44617__auto____$1;

return h__44617__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__44800__auto__,other__44801__auto__){
var self__ = this;
var this__44800__auto____$1 = this;
if(cljs.core.truth_((function (){var and__44170__auto__ = other__44801__auto__;
if(cljs.core.truth_(and__44170__auto__)){
var and__44170__auto____$1 = (this__44800__auto____$1.constructor === other__44801__auto__.constructor);
if(and__44170__auto____$1){
return cljs.core.equiv_map.call(null,this__44800__auto____$1,other__44801__auto__);
} else {
return and__44170__auto____$1;
}
} else {
return and__44170__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44813__auto__,k__44814__auto__){
var self__ = this;
var this__44813__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__44814__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44813__auto____$1),self__.__meta),k__44814__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44814__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44811__auto__,k__44812__auto__,G__52724){
var self__ = this;
var this__44811__auto____$1 = this;
var pred__52728 = cljs.core.keyword_identical_QMARK_;
var expr__52729 = k__44812__auto__;
if(cljs.core.truth_(pred__52728.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__52729))){
return (new devcards.core.EdnLikeOptions(G__52724,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44812__auto__,G__52724),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44816__auto__){
var self__ = this;
var this__44816__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__44803__auto__,G__52724){
var self__ = this;
var this__44803__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__52724,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44809__auto__,entry__44810__auto__){
var self__ = this;
var this__44809__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44810__auto__)){
return cljs.core._assoc.call(null,this__44809__auto____$1,cljs.core._nth.call(null,entry__44810__auto__,(0)),cljs.core._nth.call(null,entry__44810__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44809__auto____$1,entry__44810__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__44838__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__44838__auto__,writer__44839__auto__){
return cljs.core._write.call(null,writer__44839__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__52726){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__52726),null,cljs.core.dissoc.call(null,G__52726,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__44170__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__44170__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__44170__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__52743 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__52743 == null))){
if((false) || (G__52743.devcards$core$IDevcard$)){
return true;
} else {
if((!G__52743.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__52743);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__52743);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__52746 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__52746__$1 = ((((!((map__52746 == null)))?((((map__52746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52746):map__52746);
var history = cljs.core.get.call(null,map__52746__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__52746__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__52750 = cljs.core.deref.call(null,history_atom);
var map__52750__$1 = ((((!((map__52750 == null)))?((((map__52750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52750):map__52750);
var history = cljs.core.get.call(null,map__52750__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__52750__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__52754 = cljs.core.deref.call(null,history_atom);
var map__52754__$1 = ((((!((map__52754 == null)))?((((map__52754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52754):map__52754);
var history = cljs.core.get.call(null,map__52754__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__52754__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__52758 = cljs.core.deref.call(null,history_atom);
var map__52758__$1 = ((((!((map__52758 == null)))?((((map__52758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52758):map__52758);
var history = cljs.core.get.call(null,map__52758__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__45016__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45016__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__44170__auto__ = data_atom;
if(cljs.core.truth_(and__44170__auto__)){
return id;
} else {
return and__44170__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__52760){
var map__52761 = p__52760;
var map__52761__$1 = ((((!((map__52761 == null)))?((((map__52761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52761):map__52761);
var ha = map__52761__$1;
var pointer = cljs.core.get.call(null,map__52761__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__52761__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__52761__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__44182__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__44182__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_52776 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_52776;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__45107__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__45108__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__45109__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__45110__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__45111__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__45111__auto__,method_table__45107__auto__,prefer_table__45108__auto__,method_cache__45109__auto__,cached_hierarchy__45110__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs52777 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52777))?sablono.interpreter.attributes.call(null,attrs52777):null),((cljs.core.map_QMARK_.call(null,attrs52777))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52777)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__52778,body){
var map__52782 = p__52778;
var map__52782__$1 = ((((!((map__52782 == null)))?((((map__52782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52782):map__52782);
var message = cljs.core.get.call(null,map__52782__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs52784 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs52784))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs52784)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs52784))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52784)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__52785){
var map__52793 = p__52785;
var map__52793__$1 = ((((!((map__52793 == null)))?((((map__52793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52793):map__52793);
var m = map__52793__$1;
var expected = cljs.core.get.call(null,map__52793__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__52793__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__52793__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs52795 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52795))?sablono.interpreter.attributes.call(null,attrs52795):null),((cljs.core.map_QMARK_.call(null,attrs52795))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52795),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs52802 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs52802))?sablono.interpreter.attributes.call(null,attrs52802):null),((cljs.core.map_QMARK_.call(null,attrs52802))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52802)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs52803 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52803))?sablono.interpreter.attributes.call(null,attrs52803):null),((cljs.core.map_QMARK_.call(null,attrs52803))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52803)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__52804){
var map__52805 = p__52804;
var map__52805__$1 = ((((!((map__52805 == null)))?((((map__52805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52805):map__52805);
var testing_contexts = cljs.core.get.call(null,map__52805__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs52807 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__52805,map__52805__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__52805,map__52805__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__45016__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45016__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52807))?sablono.interpreter.attributes.call(null,attrs52807):null),((cljs.core.map_QMARK_.call(null,attrs52807))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52807)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs52816 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__52817,p__52818){
var map__52819 = p__52817;
var map__52819__$1 = ((((!((map__52819 == null)))?((((map__52819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52819):map__52819);
var last_context = cljs.core.get.call(null,map__52819__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__52819__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__52820 = p__52818;
var i = cljs.core.nth.call(null,vec__52820,(0),null);
var t = cljs.core.nth.call(null,vec__52820,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__45016__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45016__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs52816))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs52816)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs52816))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52816)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__52836){
var map__52837 = p__52836;
var map__52837__$1 = ((((!((map__52837 == null)))?((((map__52837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52837):map__52837);
var type = cljs.core.get.call(null,map__52837__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__52835 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__52835__$1 = ((((!((map__52835 == null)))?((((map__52835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52835):map__52835);
var fail = cljs.core.get.call(null,map__52835__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__52835__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__52835__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1){
return (function (p__52840){
var map__52841 = p__52840;
var map__52841__$1 = ((((!((map__52841 == null)))?((((map__52841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52841):map__52841);
var type = cljs.core.get.call(null,map__52841__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1){
return (function (p__52843){
var map__52844 = p__52843;
var map__52844__$1 = ((((!((map__52844 == null)))?((((map__52844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52844):map__52844);
var type = cljs.core.get.call(null,map__52844__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__52835,map__52835__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__44182__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__){
return (function (state_52934){
var state_val_52935 = (state_52934[(1)]);
if((state_val_52935 === (7))){
var state_52934__$1 = state_52934;
var statearr_52936_52985 = state_52934__$1;
(statearr_52936_52985[(2)] = false);

(statearr_52936_52985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (20))){
var inst_52873 = (state_52934[(7)]);
var inst_52892 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52873);
var state_52934__$1 = state_52934;
var statearr_52937_52986 = state_52934__$1;
(statearr_52937_52986[(2)] = inst_52892);

(statearr_52937_52986[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (27))){
var inst_52897 = (state_52934[(8)]);
var inst_52909 = (state_52934[(9)]);
var inst_52913 = inst_52897.call(null,inst_52909);
var state_52934__$1 = state_52934;
var statearr_52938_52987 = state_52934__$1;
(statearr_52938_52987[(2)] = inst_52913);

(statearr_52938_52987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (1))){
var state_52934__$1 = state_52934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52934__$1,(2),devcards.core.test_channel);
} else {
if((state_val_52935 === (24))){
var state_52934__$1 = state_52934;
var statearr_52939_52988 = state_52934__$1;
(statearr_52939_52988[(2)] = null);

(statearr_52939_52988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (4))){
var state_52934__$1 = state_52934;
var statearr_52940_52989 = state_52934__$1;
(statearr_52940_52989[(2)] = false);

(statearr_52940_52989[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (15))){
var state_52934__$1 = state_52934;
var statearr_52941_52990 = state_52934__$1;
(statearr_52941_52990[(2)] = false);

(statearr_52941_52990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (21))){
var inst_52873 = (state_52934[(7)]);
var state_52934__$1 = state_52934;
var statearr_52942_52991 = state_52934__$1;
(statearr_52942_52991[(2)] = inst_52873);

(statearr_52942_52991[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (13))){
var inst_52932 = (state_52934[(2)]);
var state_52934__$1 = state_52934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52934__$1,inst_52932);
} else {
if((state_val_52935 === (22))){
var inst_52896 = (state_52934[(10)]);
var inst_52895 = (state_52934[(2)]);
var inst_52896__$1 = cljs.core.get.call(null,inst_52895,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_52897 = cljs.core.get.call(null,inst_52895,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_52934__$1 = (function (){var statearr_52943 = state_52934;
(statearr_52943[(10)] = inst_52896__$1);

(statearr_52943[(8)] = inst_52897);

return statearr_52943;
})();
if(cljs.core.truth_(inst_52896__$1)){
var statearr_52944_52992 = state_52934__$1;
(statearr_52944_52992[(1)] = (23));

} else {
var statearr_52945_52993 = state_52934__$1;
(statearr_52945_52993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (29))){
var inst_52923 = (state_52934[(2)]);
var inst_52924 = cljs.test.clear_env_BANG_.call(null);
var state_52934__$1 = (function (){var statearr_52946 = state_52934;
(statearr_52946[(11)] = inst_52923);

(statearr_52946[(12)] = inst_52924);

return statearr_52946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52934__$1,(30),devcards.core.test_channel);
} else {
if((state_val_52935 === (6))){
var state_52934__$1 = state_52934;
var statearr_52947_52994 = state_52934__$1;
(statearr_52947_52994[(2)] = true);

(statearr_52947_52994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (28))){
var inst_52897 = (state_52934[(8)]);
var inst_52915 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_52916 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_52917 = cljs.core.PersistentHashMap.fromArrays(inst_52915,inst_52916);
var inst_52918 = devcards.core.collect_test.call(null,inst_52917);
var inst_52919 = cljs.test.get_current_env.call(null);
var inst_52920 = cljs.core.assoc.call(null,inst_52919,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_52921 = inst_52897.call(null,inst_52920);
var state_52934__$1 = (function (){var statearr_52948 = state_52934;
(statearr_52948[(13)] = inst_52918);

return statearr_52948;
})();
var statearr_52949_52995 = state_52934__$1;
(statearr_52949_52995[(2)] = inst_52921);

(statearr_52949_52995[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (25))){
var inst_52930 = (state_52934[(2)]);
var state_52934__$1 = state_52934;
var statearr_52950_52996 = state_52934__$1;
(statearr_52950_52996[(2)] = inst_52930);

(statearr_52950_52996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (17))){
var state_52934__$1 = state_52934;
var statearr_52951_52997 = state_52934__$1;
(statearr_52951_52997[(2)] = true);

(statearr_52951_52997[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (3))){
var inst_52850 = (state_52934[(14)]);
var inst_52855 = inst_52850.cljs$lang$protocol_mask$partition0$;
var inst_52856 = (inst_52855 & (64));
var inst_52857 = inst_52850.cljs$core$ISeq$;
var inst_52858 = (inst_52856) || (inst_52857);
var state_52934__$1 = state_52934;
if(cljs.core.truth_(inst_52858)){
var statearr_52952_52998 = state_52934__$1;
(statearr_52952_52998[(1)] = (6));

} else {
var statearr_52953_52999 = state_52934__$1;
(statearr_52953_52999[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (12))){
var inst_52873 = (state_52934[(7)]);
var inst_52877 = (inst_52873 == null);
var inst_52878 = cljs.core.not.call(null,inst_52877);
var state_52934__$1 = state_52934;
if(inst_52878){
var statearr_52954_53000 = state_52934__$1;
(statearr_52954_53000[(1)] = (14));

} else {
var statearr_52955_53001 = state_52934__$1;
(statearr_52955_53001[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (2))){
var inst_52850 = (state_52934[(14)]);
var inst_52850__$1 = (state_52934[(2)]);
var inst_52852 = (inst_52850__$1 == null);
var inst_52853 = cljs.core.not.call(null,inst_52852);
var state_52934__$1 = (function (){var statearr_52956 = state_52934;
(statearr_52956[(14)] = inst_52850__$1);

return statearr_52956;
})();
if(inst_52853){
var statearr_52957_53002 = state_52934__$1;
(statearr_52957_53002[(1)] = (3));

} else {
var statearr_52958_53003 = state_52934__$1;
(statearr_52958_53003[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (23))){
var inst_52896 = (state_52934[(10)]);
var inst_52902 = (state_52934[(15)]);
var inst_52902__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_52903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52904 = devcards.core.run_card_tests.call(null,inst_52896);
var inst_52905 = [inst_52904,inst_52902__$1];
var inst_52906 = (new cljs.core.PersistentVector(null,2,(5),inst_52903,inst_52905,null));
var state_52934__$1 = (function (){var statearr_52959 = state_52934;
(statearr_52959[(15)] = inst_52902__$1);

return statearr_52959;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_52934__$1,(26),inst_52906);
} else {
if((state_val_52935 === (19))){
var inst_52887 = (state_52934[(2)]);
var state_52934__$1 = state_52934;
var statearr_52960_53004 = state_52934__$1;
(statearr_52960_53004[(2)] = inst_52887);

(statearr_52960_53004[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (11))){
var inst_52850 = (state_52934[(14)]);
var inst_52870 = (state_52934[(2)]);
var inst_52871 = cljs.core.get.call(null,inst_52870,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_52872 = cljs.core.get.call(null,inst_52870,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_52873 = inst_52850;
var state_52934__$1 = (function (){var statearr_52961 = state_52934;
(statearr_52961[(16)] = inst_52872);

(statearr_52961[(7)] = inst_52873);

(statearr_52961[(17)] = inst_52871);

return statearr_52961;
})();
var statearr_52962_53005 = state_52934__$1;
(statearr_52962_53005[(2)] = null);

(statearr_52962_53005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (9))){
var inst_52850 = (state_52934[(14)]);
var inst_52867 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52850);
var state_52934__$1 = state_52934;
var statearr_52963_53006 = state_52934__$1;
(statearr_52963_53006[(2)] = inst_52867);

(statearr_52963_53006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (5))){
var inst_52865 = (state_52934[(2)]);
var state_52934__$1 = state_52934;
if(cljs.core.truth_(inst_52865)){
var statearr_52964_53007 = state_52934__$1;
(statearr_52964_53007[(1)] = (9));

} else {
var statearr_52965_53008 = state_52934__$1;
(statearr_52965_53008[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (14))){
var inst_52873 = (state_52934[(7)]);
var inst_52880 = inst_52873.cljs$lang$protocol_mask$partition0$;
var inst_52881 = (inst_52880 & (64));
var inst_52882 = inst_52873.cljs$core$ISeq$;
var inst_52883 = (inst_52881) || (inst_52882);
var state_52934__$1 = state_52934;
if(cljs.core.truth_(inst_52883)){
var statearr_52966_53009 = state_52934__$1;
(statearr_52966_53009[(1)] = (17));

} else {
var statearr_52967_53010 = state_52934__$1;
(statearr_52967_53010[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (26))){
var inst_52902 = (state_52934[(15)]);
var inst_52908 = (state_52934[(2)]);
var inst_52909 = cljs.core.nth.call(null,inst_52908,(0),null);
var inst_52910 = cljs.core.nth.call(null,inst_52908,(1),null);
var inst_52911 = cljs.core.not_EQ_.call(null,inst_52910,inst_52902);
var state_52934__$1 = (function (){var statearr_52968 = state_52934;
(statearr_52968[(9)] = inst_52909);

return statearr_52968;
})();
if(inst_52911){
var statearr_52969_53011 = state_52934__$1;
(statearr_52969_53011[(1)] = (27));

} else {
var statearr_52970_53012 = state_52934__$1;
(statearr_52970_53012[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (16))){
var inst_52890 = (state_52934[(2)]);
var state_52934__$1 = state_52934;
if(cljs.core.truth_(inst_52890)){
var statearr_52971_53013 = state_52934__$1;
(statearr_52971_53013[(1)] = (20));

} else {
var statearr_52972_53014 = state_52934__$1;
(statearr_52972_53014[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (30))){
var inst_52926 = (state_52934[(2)]);
var inst_52873 = inst_52926;
var state_52934__$1 = (function (){var statearr_52973 = state_52934;
(statearr_52973[(7)] = inst_52873);

return statearr_52973;
})();
var statearr_52974_53015 = state_52934__$1;
(statearr_52974_53015[(2)] = null);

(statearr_52974_53015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (10))){
var inst_52850 = (state_52934[(14)]);
var state_52934__$1 = state_52934;
var statearr_52975_53016 = state_52934__$1;
(statearr_52975_53016[(2)] = inst_52850);

(statearr_52975_53016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (18))){
var state_52934__$1 = state_52934;
var statearr_52976_53017 = state_52934__$1;
(statearr_52976_53017[(2)] = false);

(statearr_52976_53017[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52935 === (8))){
var inst_52862 = (state_52934[(2)]);
var state_52934__$1 = state_52934;
var statearr_52977_53018 = state_52934__$1;
(statearr_52977_53018[(2)] = inst_52862);

(statearr_52977_53018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47999__auto__))
;
return ((function (switch__47887__auto__,c__47999__auto__){
return (function() {
var devcards$core$state_machine__47888__auto__ = null;
var devcards$core$state_machine__47888__auto____0 = (function (){
var statearr_52981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52981[(0)] = devcards$core$state_machine__47888__auto__);

(statearr_52981[(1)] = (1));

return statearr_52981;
});
var devcards$core$state_machine__47888__auto____1 = (function (state_52934){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_52934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e52982){if((e52982 instanceof Object)){
var ex__47891__auto__ = e52982;
var statearr_52983_53019 = state_52934;
(statearr_52983_53019[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53020 = state_52934;
state_52934 = G__53020;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
devcards$core$state_machine__47888__auto__ = function(state_52934){
switch(arguments.length){
case 0:
return devcards$core$state_machine__47888__auto____0.call(this);
case 1:
return devcards$core$state_machine__47888__auto____1.call(this,state_52934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__47888__auto____0;
devcards$core$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__47888__auto____1;
return devcards$core$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__))
})();
var state__48001__auto__ = (function (){var statearr_52984 = f__48000__auto__.call(null);
(statearr_52984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_52984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__))
);

return c__47999__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__51737__auto___53025 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__51737__auto___53025);
}

var seq__53021_53026 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__53022_53027 = null;
var count__53023_53028 = (0);
var i__53024_53029 = (0);
while(true){
if((i__53024_53029 < count__53023_53028)){
var property__51738__auto___53030 = cljs.core._nth.call(null,chunk__53022_53027,i__53024_53029);
if(cljs.core.truth_((base__51737__auto___53025[property__51738__auto___53030]))){
(devcards.core.TestDevcard.prototype[property__51738__auto___53030] = (base__51737__auto___53025[property__51738__auto___53030]));
} else {
}

var G__53031 = seq__53021_53026;
var G__53032 = chunk__53022_53027;
var G__53033 = count__53023_53028;
var G__53034 = (i__53024_53029 + (1));
seq__53021_53026 = G__53031;
chunk__53022_53027 = G__53032;
count__53023_53028 = G__53033;
i__53024_53029 = G__53034;
continue;
} else {
var temp__4657__auto___53035 = cljs.core.seq.call(null,seq__53021_53026);
if(temp__4657__auto___53035){
var seq__53021_53036__$1 = temp__4657__auto___53035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53021_53036__$1)){
var c__44993__auto___53037 = cljs.core.chunk_first.call(null,seq__53021_53036__$1);
var G__53038 = cljs.core.chunk_rest.call(null,seq__53021_53036__$1);
var G__53039 = c__44993__auto___53037;
var G__53040 = cljs.core.count.call(null,c__44993__auto___53037);
var G__53041 = (0);
seq__53021_53026 = G__53038;
chunk__53022_53027 = G__53039;
count__53023_53028 = G__53040;
i__53024_53029 = G__53041;
continue;
} else {
var property__51738__auto___53042 = cljs.core.first.call(null,seq__53021_53036__$1);
if(cljs.core.truth_((base__51737__auto___53025[property__51738__auto___53042]))){
(devcards.core.TestDevcard.prototype[property__51738__auto___53042] = (base__51737__auto___53025[property__51738__auto___53042]));
} else {
}

var G__53043 = cljs.core.next.call(null,seq__53021_53036__$1);
var G__53044 = null;
var G__53045 = (0);
var G__53046 = (0);
seq__53021_53026 = G__53043;
chunk__53022_53027 = G__53044;
count__53023_53028 = G__53045;
i__53024_53029 = G__53046;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__45264__auto__ = [];
var len__45257__auto___53051 = arguments.length;
var i__45258__auto___53052 = (0);
while(true){
if((i__45258__auto___53052 < len__45257__auto___53051)){
args__45264__auto__.push((arguments[i__45258__auto___53052]));

var G__53053 = (i__45258__auto___53052 + (1));
i__45258__auto___53052 = G__53053;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core53048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core53048 = (function (test_thunks,meta53049){
this.test_thunks = test_thunks;
this.meta53049 = meta53049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core53048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53050,meta53049__$1){
var self__ = this;
var _53050__$1 = this;
return (new devcards.core.t_devcards$core53048(self__.test_thunks,meta53049__$1));
});

devcards.core.t_devcards$core53048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53050){
var self__ = this;
var _53050__$1 = this;
return self__.meta53049;
});

devcards.core.t_devcards$core53048.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core53048.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core53048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta53049","meta53049",1949135308,null)], null);
});

devcards.core.t_devcards$core53048.cljs$lang$type = true;

devcards.core.t_devcards$core53048.cljs$lang$ctorStr = "devcards.core/t_devcards$core53048";

devcards.core.t_devcards$core53048.cljs$lang$ctorPrWriter = (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"devcards.core/t_devcards$core53048");
});

devcards.core.__GT_t_devcards$core53048 = (function devcards$core$__GT_t_devcards$core53048(test_thunks__$1,meta53049){
return (new devcards.core.t_devcards$core53048(test_thunks__$1,meta53049));
});

}

return (new devcards.core.t_devcards$core53048(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq53047){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53047));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs53055 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs53055))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs53055)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs53055))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53055)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs53057 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs53057))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs53057)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs53057))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53057)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__){
return (function (state_53087){
var state_val_53088 = (state_53087[(1)]);
if((state_val_53088 === (1))){
var inst_53078 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_53087__$1 = state_53087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53087__$1,(2),inst_53078);
} else {
if((state_val_53088 === (2))){
var inst_53080 = (state_53087[(2)]);
var inst_53081 = cljs.core.async.timeout.call(null,(100));
var state_53087__$1 = (function (){var statearr_53089 = state_53087;
(statearr_53089[(7)] = inst_53080);

return statearr_53089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53087__$1,(3),inst_53081);
} else {
if((state_val_53088 === (3))){
var inst_53083 = (state_53087[(2)]);
var inst_53084 = (function (){return ((function (inst_53083,state_val_53088,c__47999__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_53083,state_val_53088,c__47999__auto__))
})();
var inst_53085 = setTimeout(inst_53084,(0));
var state_53087__$1 = (function (){var statearr_53090 = state_53087;
(statearr_53090[(8)] = inst_53083);

return statearr_53090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53087__$1,inst_53085);
} else {
return null;
}
}
}
});})(c__47999__auto__))
;
return ((function (switch__47887__auto__,c__47999__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__47888__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__47888__auto____0 = (function (){
var statearr_53094 = [null,null,null,null,null,null,null,null,null];
(statearr_53094[(0)] = devcards$core$mount_namespace_$_state_machine__47888__auto__);

(statearr_53094[(1)] = (1));

return statearr_53094;
});
var devcards$core$mount_namespace_$_state_machine__47888__auto____1 = (function (state_53087){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_53087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e53095){if((e53095 instanceof Object)){
var ex__47891__auto__ = e53095;
var statearr_53096_53098 = state_53087;
(statearr_53096_53098[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53099 = state_53087;
state_53087 = G__53099;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__47888__auto__ = function(state_53087){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__47888__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__47888__auto____1.call(this,state_53087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__47888__auto____0;
devcards$core$mount_namespace_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__47888__auto____1;
return devcards$core$mount_namespace_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__))
})();
var state__48001__auto__ = (function (){var statearr_53097 = f__48000__auto__.call(null);
(statearr_53097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_53097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__))
);

return c__47999__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1481668788607