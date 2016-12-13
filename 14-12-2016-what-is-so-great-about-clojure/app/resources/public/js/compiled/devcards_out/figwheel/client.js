// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args56102 = [];
var len__45257__auto___56105 = arguments.length;
var i__45258__auto___56106 = (0);
while(true){
if((i__45258__auto___56106 < len__45257__auto___56105)){
args56102.push((arguments[i__45258__auto___56106]));

var G__56107 = (i__45258__auto___56106 + (1));
i__45258__auto___56106 = G__56107;
continue;
} else {
}
break;
}

var G__56104 = args56102.length;
switch (G__56104) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56102.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__45264__auto__ = [];
var len__45257__auto___56110 = arguments.length;
var i__45258__auto___56111 = (0);
while(true){
if((i__45258__auto___56111 < len__45257__auto___56110)){
args__45264__auto__.push((arguments[i__45258__auto___56111]));

var G__56112 = (i__45258__auto___56111 + (1));
i__45258__auto___56111 = G__56112;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq56109){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56109));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45264__auto__ = [];
var len__45257__auto___56114 = arguments.length;
var i__45258__auto___56115 = (0);
while(true){
if((i__45258__auto___56115 < len__45257__auto___56114)){
args__45264__auto__.push((arguments[i__45258__auto___56115]));

var G__56116 = (i__45258__auto___56115 + (1));
i__45258__auto___56115 = G__56116;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq56113){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56113));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__56117 = cljs.core._EQ_;
var expr__56118 = (function (){var or__44182__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e56121){if((e56121 instanceof Error)){
var e = e56121;
return false;
} else {
throw e56121;

}
}})();
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__56117.call(null,"true",expr__56118))){
return true;
} else {
if(cljs.core.truth_(pred__56117.call(null,"false",expr__56118))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__56118)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e56123){if((e56123 instanceof Error)){
var e = e56123;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e56123;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__56124){
var map__56127 = p__56124;
var map__56127__$1 = ((((!((map__56127 == null)))?((((map__56127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56127):map__56127);
var message = cljs.core.get.call(null,map__56127__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__56127__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__44182__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__44170__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__44170__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__44170__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__47999__auto___56289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___56289,ch){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___56289,ch){
return (function (state_56258){
var state_val_56259 = (state_56258[(1)]);
if((state_val_56259 === (7))){
var inst_56254 = (state_56258[(2)]);
var state_56258__$1 = state_56258;
var statearr_56260_56290 = state_56258__$1;
(statearr_56260_56290[(2)] = inst_56254);

(statearr_56260_56290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (1))){
var state_56258__$1 = state_56258;
var statearr_56261_56291 = state_56258__$1;
(statearr_56261_56291[(2)] = null);

(statearr_56261_56291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (4))){
var inst_56211 = (state_56258[(7)]);
var inst_56211__$1 = (state_56258[(2)]);
var state_56258__$1 = (function (){var statearr_56262 = state_56258;
(statearr_56262[(7)] = inst_56211__$1);

return statearr_56262;
})();
if(cljs.core.truth_(inst_56211__$1)){
var statearr_56263_56292 = state_56258__$1;
(statearr_56263_56292[(1)] = (5));

} else {
var statearr_56264_56293 = state_56258__$1;
(statearr_56264_56293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (15))){
var inst_56218 = (state_56258[(8)]);
var inst_56233 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56218);
var inst_56234 = cljs.core.first.call(null,inst_56233);
var inst_56235 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_56234);
var inst_56236 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_56235)].join('');
var inst_56237 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_56236);
var state_56258__$1 = state_56258;
var statearr_56265_56294 = state_56258__$1;
(statearr_56265_56294[(2)] = inst_56237);

(statearr_56265_56294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (13))){
var inst_56242 = (state_56258[(2)]);
var state_56258__$1 = state_56258;
var statearr_56266_56295 = state_56258__$1;
(statearr_56266_56295[(2)] = inst_56242);

(statearr_56266_56295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (6))){
var state_56258__$1 = state_56258;
var statearr_56267_56296 = state_56258__$1;
(statearr_56267_56296[(2)] = null);

(statearr_56267_56296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (17))){
var inst_56240 = (state_56258[(2)]);
var state_56258__$1 = state_56258;
var statearr_56268_56297 = state_56258__$1;
(statearr_56268_56297[(2)] = inst_56240);

(statearr_56268_56297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (3))){
var inst_56256 = (state_56258[(2)]);
var state_56258__$1 = state_56258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56258__$1,inst_56256);
} else {
if((state_val_56259 === (12))){
var inst_56217 = (state_56258[(9)]);
var inst_56231 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_56217,opts);
var state_56258__$1 = state_56258;
if(cljs.core.truth_(inst_56231)){
var statearr_56269_56298 = state_56258__$1;
(statearr_56269_56298[(1)] = (15));

} else {
var statearr_56270_56299 = state_56258__$1;
(statearr_56270_56299[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (2))){
var state_56258__$1 = state_56258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56258__$1,(4),ch);
} else {
if((state_val_56259 === (11))){
var inst_56218 = (state_56258[(8)]);
var inst_56223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56224 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_56218);
var inst_56225 = cljs.core.async.timeout.call(null,(1000));
var inst_56226 = [inst_56224,inst_56225];
var inst_56227 = (new cljs.core.PersistentVector(null,2,(5),inst_56223,inst_56226,null));
var state_56258__$1 = state_56258;
return cljs.core.async.ioc_alts_BANG_.call(null,state_56258__$1,(14),inst_56227);
} else {
if((state_val_56259 === (9))){
var inst_56218 = (state_56258[(8)]);
var inst_56244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_56245 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_56218);
var inst_56246 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56245);
var inst_56247 = [cljs.core.str("Not loading: "),cljs.core.str(inst_56246)].join('');
var inst_56248 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_56247);
var state_56258__$1 = (function (){var statearr_56271 = state_56258;
(statearr_56271[(10)] = inst_56244);

return statearr_56271;
})();
var statearr_56272_56300 = state_56258__$1;
(statearr_56272_56300[(2)] = inst_56248);

(statearr_56272_56300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (5))){
var inst_56211 = (state_56258[(7)]);
var inst_56213 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_56214 = (new cljs.core.PersistentArrayMap(null,2,inst_56213,null));
var inst_56215 = (new cljs.core.PersistentHashSet(null,inst_56214,null));
var inst_56216 = figwheel.client.focus_msgs.call(null,inst_56215,inst_56211);
var inst_56217 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_56216);
var inst_56218 = cljs.core.first.call(null,inst_56216);
var inst_56219 = figwheel.client.autoload_QMARK_.call(null);
var state_56258__$1 = (function (){var statearr_56273 = state_56258;
(statearr_56273[(8)] = inst_56218);

(statearr_56273[(9)] = inst_56217);

return statearr_56273;
})();
if(cljs.core.truth_(inst_56219)){
var statearr_56274_56301 = state_56258__$1;
(statearr_56274_56301[(1)] = (8));

} else {
var statearr_56275_56302 = state_56258__$1;
(statearr_56275_56302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (14))){
var inst_56229 = (state_56258[(2)]);
var state_56258__$1 = state_56258;
var statearr_56276_56303 = state_56258__$1;
(statearr_56276_56303[(2)] = inst_56229);

(statearr_56276_56303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (16))){
var state_56258__$1 = state_56258;
var statearr_56277_56304 = state_56258__$1;
(statearr_56277_56304[(2)] = null);

(statearr_56277_56304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (10))){
var inst_56250 = (state_56258[(2)]);
var state_56258__$1 = (function (){var statearr_56278 = state_56258;
(statearr_56278[(11)] = inst_56250);

return statearr_56278;
})();
var statearr_56279_56305 = state_56258__$1;
(statearr_56279_56305[(2)] = null);

(statearr_56279_56305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56259 === (8))){
var inst_56217 = (state_56258[(9)]);
var inst_56221 = figwheel.client.reload_file_state_QMARK_.call(null,inst_56217,opts);
var state_56258__$1 = state_56258;
if(cljs.core.truth_(inst_56221)){
var statearr_56280_56306 = state_56258__$1;
(statearr_56280_56306[(1)] = (11));

} else {
var statearr_56281_56307 = state_56258__$1;
(statearr_56281_56307[(1)] = (12));

}

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
});})(c__47999__auto___56289,ch))
;
return ((function (switch__47887__auto__,c__47999__auto___56289,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__47888__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__47888__auto____0 = (function (){
var statearr_56285 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56285[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__47888__auto__);

(statearr_56285[(1)] = (1));

return statearr_56285;
});
var figwheel$client$file_reloader_plugin_$_state_machine__47888__auto____1 = (function (state_56258){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_56258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e56286){if((e56286 instanceof Object)){
var ex__47891__auto__ = e56286;
var statearr_56287_56308 = state_56258;
(statearr_56287_56308[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56309 = state_56258;
state_56258 = G__56309;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__47888__auto__ = function(state_56258){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__47888__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__47888__auto____1.call(this,state_56258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__47888__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__47888__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___56289,ch))
})();
var state__48001__auto__ = (function (){var statearr_56288 = f__48000__auto__.call(null);
(statearr_56288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___56289);

return statearr_56288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___56289,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__56310_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__56310_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_56313 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_56313){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e56312){if((e56312 instanceof Error)){
var e = e56312;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_56313], null));
} else {
var e = e56312;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_56313))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__56314){
var map__56323 = p__56314;
var map__56323__$1 = ((((!((map__56323 == null)))?((((map__56323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56323):map__56323);
var opts = map__56323__$1;
var build_id = cljs.core.get.call(null,map__56323__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__56323,map__56323__$1,opts,build_id){
return (function (p__56325){
var vec__56326 = p__56325;
var seq__56327 = cljs.core.seq.call(null,vec__56326);
var first__56328 = cljs.core.first.call(null,seq__56327);
var seq__56327__$1 = cljs.core.next.call(null,seq__56327);
var map__56329 = first__56328;
var map__56329__$1 = ((((!((map__56329 == null)))?((((map__56329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56329):map__56329);
var msg = map__56329__$1;
var msg_name = cljs.core.get.call(null,map__56329__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56327__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__56326,seq__56327,first__56328,seq__56327__$1,map__56329,map__56329__$1,msg,msg_name,_,map__56323,map__56323__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__56326,seq__56327,first__56328,seq__56327__$1,map__56329,map__56329__$1,msg,msg_name,_,map__56323,map__56323__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__56323,map__56323__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__56337){
var vec__56338 = p__56337;
var seq__56339 = cljs.core.seq.call(null,vec__56338);
var first__56340 = cljs.core.first.call(null,seq__56339);
var seq__56339__$1 = cljs.core.next.call(null,seq__56339);
var map__56341 = first__56340;
var map__56341__$1 = ((((!((map__56341 == null)))?((((map__56341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56341):map__56341);
var msg = map__56341__$1;
var msg_name = cljs.core.get.call(null,map__56341__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56339__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__56343){
var map__56355 = p__56343;
var map__56355__$1 = ((((!((map__56355 == null)))?((((map__56355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56355):map__56355);
var on_compile_warning = cljs.core.get.call(null,map__56355__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__56355__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__56355,map__56355__$1,on_compile_warning,on_compile_fail){
return (function (p__56357){
var vec__56358 = p__56357;
var seq__56359 = cljs.core.seq.call(null,vec__56358);
var first__56360 = cljs.core.first.call(null,seq__56359);
var seq__56359__$1 = cljs.core.next.call(null,seq__56359);
var map__56361 = first__56360;
var map__56361__$1 = ((((!((map__56361 == null)))?((((map__56361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56361):map__56361);
var msg = map__56361__$1;
var msg_name = cljs.core.get.call(null,map__56361__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__56359__$1;
var pred__56363 = cljs.core._EQ_;
var expr__56364 = msg_name;
if(cljs.core.truth_(pred__56363.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__56364))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__56363.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__56364))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__56355,map__56355__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__,msg_hist,msg_names,msg){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__,msg_hist,msg_names,msg){
return (function (state_56592){
var state_val_56593 = (state_56592[(1)]);
if((state_val_56593 === (7))){
var inst_56512 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
if(cljs.core.truth_(inst_56512)){
var statearr_56594_56644 = state_56592__$1;
(statearr_56594_56644[(1)] = (8));

} else {
var statearr_56595_56645 = state_56592__$1;
(statearr_56595_56645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (20))){
var inst_56586 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56596_56646 = state_56592__$1;
(statearr_56596_56646[(2)] = inst_56586);

(statearr_56596_56646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (27))){
var inst_56582 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56597_56647 = state_56592__$1;
(statearr_56597_56647[(2)] = inst_56582);

(statearr_56597_56647[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (1))){
var inst_56505 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56592__$1 = state_56592;
if(cljs.core.truth_(inst_56505)){
var statearr_56598_56648 = state_56592__$1;
(statearr_56598_56648[(1)] = (2));

} else {
var statearr_56599_56649 = state_56592__$1;
(statearr_56599_56649[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (24))){
var inst_56584 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56600_56650 = state_56592__$1;
(statearr_56600_56650[(2)] = inst_56584);

(statearr_56600_56650[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (4))){
var inst_56590 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56592__$1,inst_56590);
} else {
if((state_val_56593 === (15))){
var inst_56588 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56601_56651 = state_56592__$1;
(statearr_56601_56651[(2)] = inst_56588);

(statearr_56601_56651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (21))){
var inst_56541 = (state_56592[(2)]);
var inst_56542 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56543 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56542);
var state_56592__$1 = (function (){var statearr_56602 = state_56592;
(statearr_56602[(7)] = inst_56541);

return statearr_56602;
})();
var statearr_56603_56652 = state_56592__$1;
(statearr_56603_56652[(2)] = inst_56543);

(statearr_56603_56652[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (31))){
var inst_56571 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56592__$1 = state_56592;
if(cljs.core.truth_(inst_56571)){
var statearr_56604_56653 = state_56592__$1;
(statearr_56604_56653[(1)] = (34));

} else {
var statearr_56605_56654 = state_56592__$1;
(statearr_56605_56654[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (32))){
var inst_56580 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56606_56655 = state_56592__$1;
(statearr_56606_56655[(2)] = inst_56580);

(statearr_56606_56655[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (33))){
var inst_56567 = (state_56592[(2)]);
var inst_56568 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56569 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56568);
var state_56592__$1 = (function (){var statearr_56607 = state_56592;
(statearr_56607[(8)] = inst_56567);

return statearr_56607;
})();
var statearr_56608_56656 = state_56592__$1;
(statearr_56608_56656[(2)] = inst_56569);

(statearr_56608_56656[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (13))){
var inst_56526 = figwheel.client.heads_up.clear.call(null);
var state_56592__$1 = state_56592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56592__$1,(16),inst_56526);
} else {
if((state_val_56593 === (22))){
var inst_56547 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56548 = figwheel.client.heads_up.append_warning_message.call(null,inst_56547);
var state_56592__$1 = state_56592;
var statearr_56609_56657 = state_56592__$1;
(statearr_56609_56657[(2)] = inst_56548);

(statearr_56609_56657[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (36))){
var inst_56578 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56610_56658 = state_56592__$1;
(statearr_56610_56658[(2)] = inst_56578);

(statearr_56610_56658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (29))){
var inst_56558 = (state_56592[(2)]);
var inst_56559 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56560 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56559);
var state_56592__$1 = (function (){var statearr_56611 = state_56592;
(statearr_56611[(9)] = inst_56558);

return statearr_56611;
})();
var statearr_56612_56659 = state_56592__$1;
(statearr_56612_56659[(2)] = inst_56560);

(statearr_56612_56659[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (6))){
var inst_56507 = (state_56592[(10)]);
var state_56592__$1 = state_56592;
var statearr_56613_56660 = state_56592__$1;
(statearr_56613_56660[(2)] = inst_56507);

(statearr_56613_56660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (28))){
var inst_56554 = (state_56592[(2)]);
var inst_56555 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56556 = figwheel.client.heads_up.display_warning.call(null,inst_56555);
var state_56592__$1 = (function (){var statearr_56614 = state_56592;
(statearr_56614[(11)] = inst_56554);

return statearr_56614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56592__$1,(29),inst_56556);
} else {
if((state_val_56593 === (25))){
var inst_56552 = figwheel.client.heads_up.clear.call(null);
var state_56592__$1 = state_56592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56592__$1,(28),inst_56552);
} else {
if((state_val_56593 === (34))){
var inst_56573 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56592__$1 = state_56592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56592__$1,(37),inst_56573);
} else {
if((state_val_56593 === (17))){
var inst_56532 = (state_56592[(2)]);
var inst_56533 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56534 = figwheel.client.auto_jump_to_error.call(null,opts,inst_56533);
var state_56592__$1 = (function (){var statearr_56615 = state_56592;
(statearr_56615[(12)] = inst_56532);

return statearr_56615;
})();
var statearr_56616_56661 = state_56592__$1;
(statearr_56616_56661[(2)] = inst_56534);

(statearr_56616_56661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (3))){
var inst_56524 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56592__$1 = state_56592;
if(cljs.core.truth_(inst_56524)){
var statearr_56617_56662 = state_56592__$1;
(statearr_56617_56662[(1)] = (13));

} else {
var statearr_56618_56663 = state_56592__$1;
(statearr_56618_56663[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (12))){
var inst_56520 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56619_56664 = state_56592__$1;
(statearr_56619_56664[(2)] = inst_56520);

(statearr_56619_56664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (2))){
var inst_56507 = (state_56592[(10)]);
var inst_56507__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56592__$1 = (function (){var statearr_56620 = state_56592;
(statearr_56620[(10)] = inst_56507__$1);

return statearr_56620;
})();
if(cljs.core.truth_(inst_56507__$1)){
var statearr_56621_56665 = state_56592__$1;
(statearr_56621_56665[(1)] = (5));

} else {
var statearr_56622_56666 = state_56592__$1;
(statearr_56622_56666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (23))){
var inst_56550 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56592__$1 = state_56592;
if(cljs.core.truth_(inst_56550)){
var statearr_56623_56667 = state_56592__$1;
(statearr_56623_56667[(1)] = (25));

} else {
var statearr_56624_56668 = state_56592__$1;
(statearr_56624_56668[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (35))){
var state_56592__$1 = state_56592;
var statearr_56625_56669 = state_56592__$1;
(statearr_56625_56669[(2)] = null);

(statearr_56625_56669[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (19))){
var inst_56545 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56592__$1 = state_56592;
if(cljs.core.truth_(inst_56545)){
var statearr_56626_56670 = state_56592__$1;
(statearr_56626_56670[(1)] = (22));

} else {
var statearr_56627_56671 = state_56592__$1;
(statearr_56627_56671[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (11))){
var inst_56516 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56628_56672 = state_56592__$1;
(statearr_56628_56672[(2)] = inst_56516);

(statearr_56628_56672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (9))){
var inst_56518 = figwheel.client.heads_up.clear.call(null);
var state_56592__$1 = state_56592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56592__$1,(12),inst_56518);
} else {
if((state_val_56593 === (5))){
var inst_56509 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56592__$1 = state_56592;
var statearr_56629_56673 = state_56592__$1;
(statearr_56629_56673[(2)] = inst_56509);

(statearr_56629_56673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (14))){
var inst_56536 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56592__$1 = state_56592;
if(cljs.core.truth_(inst_56536)){
var statearr_56630_56674 = state_56592__$1;
(statearr_56630_56674[(1)] = (18));

} else {
var statearr_56631_56675 = state_56592__$1;
(statearr_56631_56675[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (26))){
var inst_56562 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56592__$1 = state_56592;
if(cljs.core.truth_(inst_56562)){
var statearr_56632_56676 = state_56592__$1;
(statearr_56632_56676[(1)] = (30));

} else {
var statearr_56633_56677 = state_56592__$1;
(statearr_56633_56677[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (16))){
var inst_56528 = (state_56592[(2)]);
var inst_56529 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56530 = figwheel.client.heads_up.display_exception.call(null,inst_56529);
var state_56592__$1 = (function (){var statearr_56634 = state_56592;
(statearr_56634[(13)] = inst_56528);

return statearr_56634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56592__$1,(17),inst_56530);
} else {
if((state_val_56593 === (30))){
var inst_56564 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56565 = figwheel.client.heads_up.display_warning.call(null,inst_56564);
var state_56592__$1 = state_56592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56592__$1,(33),inst_56565);
} else {
if((state_val_56593 === (10))){
var inst_56522 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56635_56678 = state_56592__$1;
(statearr_56635_56678[(2)] = inst_56522);

(statearr_56635_56678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (18))){
var inst_56538 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56539 = figwheel.client.heads_up.display_exception.call(null,inst_56538);
var state_56592__$1 = state_56592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56592__$1,(21),inst_56539);
} else {
if((state_val_56593 === (37))){
var inst_56575 = (state_56592[(2)]);
var state_56592__$1 = state_56592;
var statearr_56636_56679 = state_56592__$1;
(statearr_56636_56679[(2)] = inst_56575);

(statearr_56636_56679[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56593 === (8))){
var inst_56514 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56592__$1 = state_56592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56592__$1,(11),inst_56514);
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
}
}
}
}
}
}
}
});})(c__47999__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__47887__auto__,c__47999__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto____0 = (function (){
var statearr_56640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56640[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto__);

(statearr_56640[(1)] = (1));

return statearr_56640;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto____1 = (function (state_56592){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_56592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e56641){if((e56641 instanceof Object)){
var ex__47891__auto__ = e56641;
var statearr_56642_56680 = state_56592;
(statearr_56642_56680[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56681 = state_56592;
state_56592 = G__56681;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto__ = function(state_56592){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto____1.call(this,state_56592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__,msg_hist,msg_names,msg))
})();
var state__48001__auto__ = (function (){var statearr_56643 = f__48000__auto__.call(null);
(statearr_56643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_56643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__,msg_hist,msg_names,msg))
);

return c__47999__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__47999__auto___56744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___56744,ch){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___56744,ch){
return (function (state_56727){
var state_val_56728 = (state_56727[(1)]);
if((state_val_56728 === (1))){
var state_56727__$1 = state_56727;
var statearr_56729_56745 = state_56727__$1;
(statearr_56729_56745[(2)] = null);

(statearr_56729_56745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56728 === (2))){
var state_56727__$1 = state_56727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56727__$1,(4),ch);
} else {
if((state_val_56728 === (3))){
var inst_56725 = (state_56727[(2)]);
var state_56727__$1 = state_56727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56727__$1,inst_56725);
} else {
if((state_val_56728 === (4))){
var inst_56715 = (state_56727[(7)]);
var inst_56715__$1 = (state_56727[(2)]);
var state_56727__$1 = (function (){var statearr_56730 = state_56727;
(statearr_56730[(7)] = inst_56715__$1);

return statearr_56730;
})();
if(cljs.core.truth_(inst_56715__$1)){
var statearr_56731_56746 = state_56727__$1;
(statearr_56731_56746[(1)] = (5));

} else {
var statearr_56732_56747 = state_56727__$1;
(statearr_56732_56747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56728 === (5))){
var inst_56715 = (state_56727[(7)]);
var inst_56717 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56715);
var state_56727__$1 = state_56727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56727__$1,(8),inst_56717);
} else {
if((state_val_56728 === (6))){
var state_56727__$1 = state_56727;
var statearr_56733_56748 = state_56727__$1;
(statearr_56733_56748[(2)] = null);

(statearr_56733_56748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56728 === (7))){
var inst_56723 = (state_56727[(2)]);
var state_56727__$1 = state_56727;
var statearr_56734_56749 = state_56727__$1;
(statearr_56734_56749[(2)] = inst_56723);

(statearr_56734_56749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56728 === (8))){
var inst_56719 = (state_56727[(2)]);
var state_56727__$1 = (function (){var statearr_56735 = state_56727;
(statearr_56735[(8)] = inst_56719);

return statearr_56735;
})();
var statearr_56736_56750 = state_56727__$1;
(statearr_56736_56750[(2)] = null);

(statearr_56736_56750[(1)] = (2));


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
});})(c__47999__auto___56744,ch))
;
return ((function (switch__47887__auto__,c__47999__auto___56744,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__47888__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__47888__auto____0 = (function (){
var statearr_56740 = [null,null,null,null,null,null,null,null,null];
(statearr_56740[(0)] = figwheel$client$heads_up_plugin_$_state_machine__47888__auto__);

(statearr_56740[(1)] = (1));

return statearr_56740;
});
var figwheel$client$heads_up_plugin_$_state_machine__47888__auto____1 = (function (state_56727){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_56727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e56741){if((e56741 instanceof Object)){
var ex__47891__auto__ = e56741;
var statearr_56742_56751 = state_56727;
(statearr_56742_56751[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56752 = state_56727;
state_56727 = G__56752;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__47888__auto__ = function(state_56727){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__47888__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__47888__auto____1.call(this,state_56727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__47888__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__47888__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___56744,ch))
})();
var state__48001__auto__ = (function (){var statearr_56743 = f__48000__auto__.call(null);
(statearr_56743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___56744);

return statearr_56743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___56744,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__){
return (function (state_56773){
var state_val_56774 = (state_56773[(1)]);
if((state_val_56774 === (1))){
var inst_56768 = cljs.core.async.timeout.call(null,(3000));
var state_56773__$1 = state_56773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56773__$1,(2),inst_56768);
} else {
if((state_val_56774 === (2))){
var inst_56770 = (state_56773[(2)]);
var inst_56771 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_56773__$1 = (function (){var statearr_56775 = state_56773;
(statearr_56775[(7)] = inst_56770);

return statearr_56775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56773__$1,inst_56771);
} else {
return null;
}
}
});})(c__47999__auto__))
;
return ((function (switch__47887__auto__,c__47999__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__47888__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__47888__auto____0 = (function (){
var statearr_56779 = [null,null,null,null,null,null,null,null];
(statearr_56779[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__47888__auto__);

(statearr_56779[(1)] = (1));

return statearr_56779;
});
var figwheel$client$enforce_project_plugin_$_state_machine__47888__auto____1 = (function (state_56773){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_56773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e56780){if((e56780 instanceof Object)){
var ex__47891__auto__ = e56780;
var statearr_56781_56783 = state_56773;
(statearr_56781_56783[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56784 = state_56773;
state_56773 = G__56784;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__47888__auto__ = function(state_56773){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__47888__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__47888__auto____1.call(this,state_56773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__47888__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__47888__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__))
})();
var state__48001__auto__ = (function (){var statearr_56782 = f__48000__auto__.call(null);
(statearr_56782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_56782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__))
);

return c__47999__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__,figwheel_version,temp__4657__auto__){
return (function (state_56807){
var state_val_56808 = (state_56807[(1)]);
if((state_val_56808 === (1))){
var inst_56801 = cljs.core.async.timeout.call(null,(2000));
var state_56807__$1 = state_56807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56807__$1,(2),inst_56801);
} else {
if((state_val_56808 === (2))){
var inst_56803 = (state_56807[(2)]);
var inst_56804 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_56805 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_56804);
var state_56807__$1 = (function (){var statearr_56809 = state_56807;
(statearr_56809[(7)] = inst_56803);

return statearr_56809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56807__$1,inst_56805);
} else {
return null;
}
}
});})(c__47999__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__47887__auto__,c__47999__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto____0 = (function (){
var statearr_56813 = [null,null,null,null,null,null,null,null];
(statearr_56813[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto__);

(statearr_56813[(1)] = (1));

return statearr_56813;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto____1 = (function (state_56807){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_56807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e56814){if((e56814 instanceof Object)){
var ex__47891__auto__ = e56814;
var statearr_56815_56817 = state_56807;
(statearr_56815_56817[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56818 = state_56807;
state_56807 = G__56818;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto__ = function(state_56807){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto____1.call(this,state_56807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__,figwheel_version,temp__4657__auto__))
})();
var state__48001__auto__ = (function (){var statearr_56816 = f__48000__auto__.call(null);
(statearr_56816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_56816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__,figwheel_version,temp__4657__auto__))
);

return c__47999__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__56819){
var map__56823 = p__56819;
var map__56823__$1 = ((((!((map__56823 == null)))?((((map__56823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56823):map__56823);
var file = cljs.core.get.call(null,map__56823__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__56823__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__56823__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__56825 = "";
var G__56825__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__56825),cljs.core.str("file "),cljs.core.str(file)].join(''):G__56825);
var G__56825__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__56825__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__56825__$1);
if(cljs.core.truth_((function (){var and__44170__auto__ = line;
if(cljs.core.truth_(and__44170__auto__)){
return column;
} else {
return and__44170__auto__;
}
})())){
return [cljs.core.str(G__56825__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__56825__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__56826){
var map__56833 = p__56826;
var map__56833__$1 = ((((!((map__56833 == null)))?((((map__56833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56833):map__56833);
var ed = map__56833__$1;
var formatted_exception = cljs.core.get.call(null,map__56833__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__56833__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__56833__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__56835_56839 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__56836_56840 = null;
var count__56837_56841 = (0);
var i__56838_56842 = (0);
while(true){
if((i__56838_56842 < count__56837_56841)){
var msg_56843 = cljs.core._nth.call(null,chunk__56836_56840,i__56838_56842);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56843);

var G__56844 = seq__56835_56839;
var G__56845 = chunk__56836_56840;
var G__56846 = count__56837_56841;
var G__56847 = (i__56838_56842 + (1));
seq__56835_56839 = G__56844;
chunk__56836_56840 = G__56845;
count__56837_56841 = G__56846;
i__56838_56842 = G__56847;
continue;
} else {
var temp__4657__auto___56848 = cljs.core.seq.call(null,seq__56835_56839);
if(temp__4657__auto___56848){
var seq__56835_56849__$1 = temp__4657__auto___56848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56835_56849__$1)){
var c__44993__auto___56850 = cljs.core.chunk_first.call(null,seq__56835_56849__$1);
var G__56851 = cljs.core.chunk_rest.call(null,seq__56835_56849__$1);
var G__56852 = c__44993__auto___56850;
var G__56853 = cljs.core.count.call(null,c__44993__auto___56850);
var G__56854 = (0);
seq__56835_56839 = G__56851;
chunk__56836_56840 = G__56852;
count__56837_56841 = G__56853;
i__56838_56842 = G__56854;
continue;
} else {
var msg_56855 = cljs.core.first.call(null,seq__56835_56849__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56855);

var G__56856 = cljs.core.next.call(null,seq__56835_56849__$1);
var G__56857 = null;
var G__56858 = (0);
var G__56859 = (0);
seq__56835_56839 = G__56856;
chunk__56836_56840 = G__56857;
count__56837_56841 = G__56858;
i__56838_56842 = G__56859;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__56860){
var map__56863 = p__56860;
var map__56863__$1 = ((((!((map__56863 == null)))?((((map__56863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56863):map__56863);
var w = map__56863__$1;
var message = cljs.core.get.call(null,map__56863__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__44170__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__44170__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__44170__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__56875 = cljs.core.seq.call(null,plugins);
var chunk__56876 = null;
var count__56877 = (0);
var i__56878 = (0);
while(true){
if((i__56878 < count__56877)){
var vec__56879 = cljs.core._nth.call(null,chunk__56876,i__56878);
var k = cljs.core.nth.call(null,vec__56879,(0),null);
var plugin = cljs.core.nth.call(null,vec__56879,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56885 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56875,chunk__56876,count__56877,i__56878,pl_56885,vec__56879,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_56885.call(null,msg_hist);
});})(seq__56875,chunk__56876,count__56877,i__56878,pl_56885,vec__56879,k,plugin))
);
} else {
}

var G__56886 = seq__56875;
var G__56887 = chunk__56876;
var G__56888 = count__56877;
var G__56889 = (i__56878 + (1));
seq__56875 = G__56886;
chunk__56876 = G__56887;
count__56877 = G__56888;
i__56878 = G__56889;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56875);
if(temp__4657__auto__){
var seq__56875__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56875__$1)){
var c__44993__auto__ = cljs.core.chunk_first.call(null,seq__56875__$1);
var G__56890 = cljs.core.chunk_rest.call(null,seq__56875__$1);
var G__56891 = c__44993__auto__;
var G__56892 = cljs.core.count.call(null,c__44993__auto__);
var G__56893 = (0);
seq__56875 = G__56890;
chunk__56876 = G__56891;
count__56877 = G__56892;
i__56878 = G__56893;
continue;
} else {
var vec__56882 = cljs.core.first.call(null,seq__56875__$1);
var k = cljs.core.nth.call(null,vec__56882,(0),null);
var plugin = cljs.core.nth.call(null,vec__56882,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56894 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56875,chunk__56876,count__56877,i__56878,pl_56894,vec__56882,k,plugin,seq__56875__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_56894.call(null,msg_hist);
});})(seq__56875,chunk__56876,count__56877,i__56878,pl_56894,vec__56882,k,plugin,seq__56875__$1,temp__4657__auto__))
);
} else {
}

var G__56895 = cljs.core.next.call(null,seq__56875__$1);
var G__56896 = null;
var G__56897 = (0);
var G__56898 = (0);
seq__56875 = G__56895;
chunk__56876 = G__56896;
count__56877 = G__56897;
i__56878 = G__56898;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args56899 = [];
var len__45257__auto___56906 = arguments.length;
var i__45258__auto___56907 = (0);
while(true){
if((i__45258__auto___56907 < len__45257__auto___56906)){
args56899.push((arguments[i__45258__auto___56907]));

var G__56908 = (i__45258__auto___56907 + (1));
i__45258__auto___56907 = G__56908;
continue;
} else {
}
break;
}

var G__56901 = args56899.length;
switch (G__56901) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56899.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__56902_56910 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__56903_56911 = null;
var count__56904_56912 = (0);
var i__56905_56913 = (0);
while(true){
if((i__56905_56913 < count__56904_56912)){
var msg_56914 = cljs.core._nth.call(null,chunk__56903_56911,i__56905_56913);
figwheel.client.socket.handle_incoming_message.call(null,msg_56914);

var G__56915 = seq__56902_56910;
var G__56916 = chunk__56903_56911;
var G__56917 = count__56904_56912;
var G__56918 = (i__56905_56913 + (1));
seq__56902_56910 = G__56915;
chunk__56903_56911 = G__56916;
count__56904_56912 = G__56917;
i__56905_56913 = G__56918;
continue;
} else {
var temp__4657__auto___56919 = cljs.core.seq.call(null,seq__56902_56910);
if(temp__4657__auto___56919){
var seq__56902_56920__$1 = temp__4657__auto___56919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56902_56920__$1)){
var c__44993__auto___56921 = cljs.core.chunk_first.call(null,seq__56902_56920__$1);
var G__56922 = cljs.core.chunk_rest.call(null,seq__56902_56920__$1);
var G__56923 = c__44993__auto___56921;
var G__56924 = cljs.core.count.call(null,c__44993__auto___56921);
var G__56925 = (0);
seq__56902_56910 = G__56922;
chunk__56903_56911 = G__56923;
count__56904_56912 = G__56924;
i__56905_56913 = G__56925;
continue;
} else {
var msg_56926 = cljs.core.first.call(null,seq__56902_56920__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_56926);

var G__56927 = cljs.core.next.call(null,seq__56902_56920__$1);
var G__56928 = null;
var G__56929 = (0);
var G__56930 = (0);
seq__56902_56910 = G__56927;
chunk__56903_56911 = G__56928;
count__56904_56912 = G__56929;
i__56905_56913 = G__56930;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45264__auto__ = [];
var len__45257__auto___56935 = arguments.length;
var i__45258__auto___56936 = (0);
while(true){
if((i__45258__auto___56936 < len__45257__auto___56935)){
args__45264__auto__.push((arguments[i__45258__auto___56936]));

var G__56937 = (i__45258__auto___56936 + (1));
i__45258__auto___56936 = G__56937;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__56932){
var map__56933 = p__56932;
var map__56933__$1 = ((((!((map__56933 == null)))?((((map__56933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56933):map__56933);
var opts = map__56933__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq56931){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56931));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e56939){if((e56939 instanceof Error)){
var e = e56939;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e56939;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__56943){
var map__56944 = p__56943;
var map__56944__$1 = ((((!((map__56944 == null)))?((((map__56944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56944):map__56944);
var msg_name = cljs.core.get.call(null,map__56944__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1481668792184