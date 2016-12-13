// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__45168__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_46999_47001 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_47000_47002 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_46999_47001,_STAR_print_fn_STAR_47000_47002,sb__45168__auto__){
return (function (x__45169__auto__){
return sb__45168__auto__.append(x__45169__auto__);
});})(_STAR_print_newline_STAR_46999_47001,_STAR_print_fn_STAR_47000_47002,sb__45168__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_47000_47002;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_46999_47001;
}
return [cljs.core.str(sb__45168__auto__)].join('');
}catch (e46997){if((e46997 instanceof Error)){
var e1 = e46997;
try{return obj.toString();
}catch (e46998){if((e46998 instanceof Error)){
var e2 = e46998;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e46998;

}
}} else {
throw e46997;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_47004 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_47004;
}});

//# sourceMappingURL=utils.js.map?rel=1481668784075