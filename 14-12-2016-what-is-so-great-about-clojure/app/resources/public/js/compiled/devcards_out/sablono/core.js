// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__51407__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__51404 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__51405 = cljs.core.seq.call(null,vec__51404);
var first__51406 = cljs.core.first.call(null,seq__51405);
var seq__51405__$1 = cljs.core.next.call(null,seq__51405);
var tag = first__51406;
var body = seq__51405__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__51407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51408__i = 0, G__51408__a = new Array(arguments.length -  0);
while (G__51408__i < G__51408__a.length) {G__51408__a[G__51408__i] = arguments[G__51408__i + 0]; ++G__51408__i;}
  args = new cljs.core.IndexedSeq(G__51408__a,0);
} 
return G__51407__delegate.call(this,args);};
G__51407.cljs$lang$maxFixedArity = 0;
G__51407.cljs$lang$applyTo = (function (arglist__51409){
var args = cljs.core.seq(arglist__51409);
return G__51407__delegate(args);
});
G__51407.cljs$core$IFn$_invoke$arity$variadic = G__51407__delegate;
return G__51407;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__44962__auto__ = (function sablono$core$update_arglists_$_iter__51414(s__51415){
return (new cljs.core.LazySeq(null,(function (){
var s__51415__$1 = s__51415;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51415__$1);
if(temp__4657__auto__){
var s__51415__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51415__$2)){
var c__44960__auto__ = cljs.core.chunk_first.call(null,s__51415__$2);
var size__44961__auto__ = cljs.core.count.call(null,c__44960__auto__);
var b__51417 = cljs.core.chunk_buffer.call(null,size__44961__auto__);
if((function (){var i__51416 = (0);
while(true){
if((i__51416 < size__44961__auto__)){
var args = cljs.core._nth.call(null,c__44960__auto__,i__51416);
cljs.core.chunk_append.call(null,b__51417,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__51418 = (i__51416 + (1));
i__51416 = G__51418;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51417),sablono$core$update_arglists_$_iter__51414.call(null,cljs.core.chunk_rest.call(null,s__51415__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51417),null);
}
} else {
var args = cljs.core.first.call(null,s__51415__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__51414.call(null,cljs.core.rest.call(null,s__51415__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44962__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__45264__auto__ = [];
var len__45257__auto___51424 = arguments.length;
var i__45258__auto___51425 = (0);
while(true){
if((i__45258__auto___51425 < len__45257__auto___51424)){
args__45264__auto__.push((arguments[i__45258__auto___51425]));

var G__51426 = (i__45258__auto___51425 + (1));
i__45258__auto___51425 = G__51426;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__44962__auto__ = (function sablono$core$iter__51420(s__51421){
return (new cljs.core.LazySeq(null,(function (){
var s__51421__$1 = s__51421;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51421__$1);
if(temp__4657__auto__){
var s__51421__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51421__$2)){
var c__44960__auto__ = cljs.core.chunk_first.call(null,s__51421__$2);
var size__44961__auto__ = cljs.core.count.call(null,c__44960__auto__);
var b__51423 = cljs.core.chunk_buffer.call(null,size__44961__auto__);
if((function (){var i__51422 = (0);
while(true){
if((i__51422 < size__44961__auto__)){
var style = cljs.core._nth.call(null,c__44960__auto__,i__51422);
cljs.core.chunk_append.call(null,b__51423,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__51427 = (i__51422 + (1));
i__51422 = G__51427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51423),sablono$core$iter__51420.call(null,cljs.core.chunk_rest.call(null,s__51421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51423),null);
}
} else {
var style = cljs.core.first.call(null,s__51421__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__51420.call(null,cljs.core.rest.call(null,s__51421__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44962__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq51419){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51419));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to51428 = (function sablono$core$link_to51428(var_args){
var args__45264__auto__ = [];
var len__45257__auto___51431 = arguments.length;
var i__45258__auto___51432 = (0);
while(true){
if((i__45258__auto___51432 < len__45257__auto___51431)){
args__45264__auto__.push((arguments[i__45258__auto___51432]));

var G__51433 = (i__45258__auto___51432 + (1));
i__45258__auto___51432 = G__51433;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((1) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to51428.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45265__auto__);
});

sablono.core.link_to51428.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to51428.cljs$lang$maxFixedArity = (1);

sablono.core.link_to51428.cljs$lang$applyTo = (function (seq51429){
var G__51430 = cljs.core.first.call(null,seq51429);
var seq51429__$1 = cljs.core.next.call(null,seq51429);
return sablono.core.link_to51428.cljs$core$IFn$_invoke$arity$variadic(G__51430,seq51429__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to51428);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to51434 = (function sablono$core$mail_to51434(var_args){
var args__45264__auto__ = [];
var len__45257__auto___51441 = arguments.length;
var i__45258__auto___51442 = (0);
while(true){
if((i__45258__auto___51442 < len__45257__auto___51441)){
args__45264__auto__.push((arguments[i__45258__auto___51442]));

var G__51443 = (i__45258__auto___51442 + (1));
i__45258__auto___51442 = G__51443;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((1) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to51434.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45265__auto__);
});

sablono.core.mail_to51434.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__51437){
var vec__51438 = p__51437;
var content = cljs.core.nth.call(null,vec__51438,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__44182__auto__ = content;
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to51434.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to51434.cljs$lang$applyTo = (function (seq51435){
var G__51436 = cljs.core.first.call(null,seq51435);
var seq51435__$1 = cljs.core.next.call(null,seq51435);
return sablono.core.mail_to51434.cljs$core$IFn$_invoke$arity$variadic(G__51436,seq51435__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to51434);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list51444 = (function sablono$core$unordered_list51444(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__44962__auto__ = (function sablono$core$unordered_list51444_$_iter__51449(s__51450){
return (new cljs.core.LazySeq(null,(function (){
var s__51450__$1 = s__51450;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51450__$1);
if(temp__4657__auto__){
var s__51450__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51450__$2)){
var c__44960__auto__ = cljs.core.chunk_first.call(null,s__51450__$2);
var size__44961__auto__ = cljs.core.count.call(null,c__44960__auto__);
var b__51452 = cljs.core.chunk_buffer.call(null,size__44961__auto__);
if((function (){var i__51451 = (0);
while(true){
if((i__51451 < size__44961__auto__)){
var x = cljs.core._nth.call(null,c__44960__auto__,i__51451);
cljs.core.chunk_append.call(null,b__51452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51453 = (i__51451 + (1));
i__51451 = G__51453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51452),sablono$core$unordered_list51444_$_iter__51449.call(null,cljs.core.chunk_rest.call(null,s__51450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51452),null);
}
} else {
var x = cljs.core.first.call(null,s__51450__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list51444_$_iter__51449.call(null,cljs.core.rest.call(null,s__51450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44962__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list51444);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list51454 = (function sablono$core$ordered_list51454(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__44962__auto__ = (function sablono$core$ordered_list51454_$_iter__51459(s__51460){
return (new cljs.core.LazySeq(null,(function (){
var s__51460__$1 = s__51460;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51460__$1);
if(temp__4657__auto__){
var s__51460__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51460__$2)){
var c__44960__auto__ = cljs.core.chunk_first.call(null,s__51460__$2);
var size__44961__auto__ = cljs.core.count.call(null,c__44960__auto__);
var b__51462 = cljs.core.chunk_buffer.call(null,size__44961__auto__);
if((function (){var i__51461 = (0);
while(true){
if((i__51461 < size__44961__auto__)){
var x = cljs.core._nth.call(null,c__44960__auto__,i__51461);
cljs.core.chunk_append.call(null,b__51462,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51463 = (i__51461 + (1));
i__51461 = G__51463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51462),sablono$core$ordered_list51454_$_iter__51459.call(null,cljs.core.chunk_rest.call(null,s__51460__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51462),null);
}
} else {
var x = cljs.core.first.call(null,s__51460__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list51454_$_iter__51459.call(null,cljs.core.rest.call(null,s__51460__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44962__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list51454);
/**
 * Create an image element.
 */
sablono.core.image51464 = (function sablono$core$image51464(var_args){
var args51465 = [];
var len__45257__auto___51468 = arguments.length;
var i__45258__auto___51469 = (0);
while(true){
if((i__45258__auto___51469 < len__45257__auto___51468)){
args51465.push((arguments[i__45258__auto___51469]));

var G__51470 = (i__45258__auto___51469 + (1));
i__45258__auto___51469 = G__51470;
continue;
} else {
}
break;
}

var G__51467 = args51465.length;
switch (G__51467) {
case 1:
return sablono.core.image51464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image51464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51465.length)].join('')));

}
});

sablono.core.image51464.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image51464.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image51464.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image51464);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__51472_SHARP_,p2__51473_SHARP_){
return [cljs.core.str(p1__51472_SHARP_),cljs.core.str("["),cljs.core.str(p2__51473_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__51474_SHARP_,p2__51475_SHARP_){
return [cljs.core.str(p1__51474_SHARP_),cljs.core.str("-"),cljs.core.str(p2__51475_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__44182__auto__ = value;
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field51476 = (function sablono$core$color_field51476(var_args){
var args51477 = [];
var len__45257__auto___51544 = arguments.length;
var i__45258__auto___51545 = (0);
while(true){
if((i__45258__auto___51545 < len__45257__auto___51544)){
args51477.push((arguments[i__45258__auto___51545]));

var G__51546 = (i__45258__auto___51545 + (1));
i__45258__auto___51545 = G__51546;
continue;
} else {
}
break;
}

var G__51479 = args51477.length;
switch (G__51479) {
case 1:
return sablono.core.color_field51476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field51476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51477.length)].join('')));

}
});

sablono.core.color_field51476.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.color_field51476.call(null,name__51391__auto__,null);
});

sablono.core.color_field51476.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.color_field51476.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field51476);

/**
 * Creates a date input field.
 */
sablono.core.date_field51480 = (function sablono$core$date_field51480(var_args){
var args51481 = [];
var len__45257__auto___51548 = arguments.length;
var i__45258__auto___51549 = (0);
while(true){
if((i__45258__auto___51549 < len__45257__auto___51548)){
args51481.push((arguments[i__45258__auto___51549]));

var G__51550 = (i__45258__auto___51549 + (1));
i__45258__auto___51549 = G__51550;
continue;
} else {
}
break;
}

var G__51483 = args51481.length;
switch (G__51483) {
case 1:
return sablono.core.date_field51480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field51480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51481.length)].join('')));

}
});

sablono.core.date_field51480.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.date_field51480.call(null,name__51391__auto__,null);
});

sablono.core.date_field51480.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.date_field51480.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field51480);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field51484 = (function sablono$core$datetime_field51484(var_args){
var args51485 = [];
var len__45257__auto___51552 = arguments.length;
var i__45258__auto___51553 = (0);
while(true){
if((i__45258__auto___51553 < len__45257__auto___51552)){
args51485.push((arguments[i__45258__auto___51553]));

var G__51554 = (i__45258__auto___51553 + (1));
i__45258__auto___51553 = G__51554;
continue;
} else {
}
break;
}

var G__51487 = args51485.length;
switch (G__51487) {
case 1:
return sablono.core.datetime_field51484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field51484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51485.length)].join('')));

}
});

sablono.core.datetime_field51484.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.datetime_field51484.call(null,name__51391__auto__,null);
});

sablono.core.datetime_field51484.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.datetime_field51484.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field51484);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field51488 = (function sablono$core$datetime_local_field51488(var_args){
var args51489 = [];
var len__45257__auto___51556 = arguments.length;
var i__45258__auto___51557 = (0);
while(true){
if((i__45258__auto___51557 < len__45257__auto___51556)){
args51489.push((arguments[i__45258__auto___51557]));

var G__51558 = (i__45258__auto___51557 + (1));
i__45258__auto___51557 = G__51558;
continue;
} else {
}
break;
}

var G__51491 = args51489.length;
switch (G__51491) {
case 1:
return sablono.core.datetime_local_field51488.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field51488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51489.length)].join('')));

}
});

sablono.core.datetime_local_field51488.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.datetime_local_field51488.call(null,name__51391__auto__,null);
});

sablono.core.datetime_local_field51488.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.datetime_local_field51488.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field51488);

/**
 * Creates a email input field.
 */
sablono.core.email_field51492 = (function sablono$core$email_field51492(var_args){
var args51493 = [];
var len__45257__auto___51560 = arguments.length;
var i__45258__auto___51561 = (0);
while(true){
if((i__45258__auto___51561 < len__45257__auto___51560)){
args51493.push((arguments[i__45258__auto___51561]));

var G__51562 = (i__45258__auto___51561 + (1));
i__45258__auto___51561 = G__51562;
continue;
} else {
}
break;
}

var G__51495 = args51493.length;
switch (G__51495) {
case 1:
return sablono.core.email_field51492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field51492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51493.length)].join('')));

}
});

sablono.core.email_field51492.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.email_field51492.call(null,name__51391__auto__,null);
});

sablono.core.email_field51492.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.email_field51492.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field51492);

/**
 * Creates a file input field.
 */
sablono.core.file_field51496 = (function sablono$core$file_field51496(var_args){
var args51497 = [];
var len__45257__auto___51564 = arguments.length;
var i__45258__auto___51565 = (0);
while(true){
if((i__45258__auto___51565 < len__45257__auto___51564)){
args51497.push((arguments[i__45258__auto___51565]));

var G__51566 = (i__45258__auto___51565 + (1));
i__45258__auto___51565 = G__51566;
continue;
} else {
}
break;
}

var G__51499 = args51497.length;
switch (G__51499) {
case 1:
return sablono.core.file_field51496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field51496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51497.length)].join('')));

}
});

sablono.core.file_field51496.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.file_field51496.call(null,name__51391__auto__,null);
});

sablono.core.file_field51496.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.file_field51496.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field51496);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field51500 = (function sablono$core$hidden_field51500(var_args){
var args51501 = [];
var len__45257__auto___51568 = arguments.length;
var i__45258__auto___51569 = (0);
while(true){
if((i__45258__auto___51569 < len__45257__auto___51568)){
args51501.push((arguments[i__45258__auto___51569]));

var G__51570 = (i__45258__auto___51569 + (1));
i__45258__auto___51569 = G__51570;
continue;
} else {
}
break;
}

var G__51503 = args51501.length;
switch (G__51503) {
case 1:
return sablono.core.hidden_field51500.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field51500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51501.length)].join('')));

}
});

sablono.core.hidden_field51500.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.hidden_field51500.call(null,name__51391__auto__,null);
});

sablono.core.hidden_field51500.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.hidden_field51500.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field51500);

/**
 * Creates a month input field.
 */
sablono.core.month_field51504 = (function sablono$core$month_field51504(var_args){
var args51505 = [];
var len__45257__auto___51572 = arguments.length;
var i__45258__auto___51573 = (0);
while(true){
if((i__45258__auto___51573 < len__45257__auto___51572)){
args51505.push((arguments[i__45258__auto___51573]));

var G__51574 = (i__45258__auto___51573 + (1));
i__45258__auto___51573 = G__51574;
continue;
} else {
}
break;
}

var G__51507 = args51505.length;
switch (G__51507) {
case 1:
return sablono.core.month_field51504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field51504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51505.length)].join('')));

}
});

sablono.core.month_field51504.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.month_field51504.call(null,name__51391__auto__,null);
});

sablono.core.month_field51504.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.month_field51504.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field51504);

/**
 * Creates a number input field.
 */
sablono.core.number_field51508 = (function sablono$core$number_field51508(var_args){
var args51509 = [];
var len__45257__auto___51576 = arguments.length;
var i__45258__auto___51577 = (0);
while(true){
if((i__45258__auto___51577 < len__45257__auto___51576)){
args51509.push((arguments[i__45258__auto___51577]));

var G__51578 = (i__45258__auto___51577 + (1));
i__45258__auto___51577 = G__51578;
continue;
} else {
}
break;
}

var G__51511 = args51509.length;
switch (G__51511) {
case 1:
return sablono.core.number_field51508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field51508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51509.length)].join('')));

}
});

sablono.core.number_field51508.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.number_field51508.call(null,name__51391__auto__,null);
});

sablono.core.number_field51508.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.number_field51508.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field51508);

/**
 * Creates a password input field.
 */
sablono.core.password_field51512 = (function sablono$core$password_field51512(var_args){
var args51513 = [];
var len__45257__auto___51580 = arguments.length;
var i__45258__auto___51581 = (0);
while(true){
if((i__45258__auto___51581 < len__45257__auto___51580)){
args51513.push((arguments[i__45258__auto___51581]));

var G__51582 = (i__45258__auto___51581 + (1));
i__45258__auto___51581 = G__51582;
continue;
} else {
}
break;
}

var G__51515 = args51513.length;
switch (G__51515) {
case 1:
return sablono.core.password_field51512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field51512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51513.length)].join('')));

}
});

sablono.core.password_field51512.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.password_field51512.call(null,name__51391__auto__,null);
});

sablono.core.password_field51512.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.password_field51512.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field51512);

/**
 * Creates a range input field.
 */
sablono.core.range_field51516 = (function sablono$core$range_field51516(var_args){
var args51517 = [];
var len__45257__auto___51584 = arguments.length;
var i__45258__auto___51585 = (0);
while(true){
if((i__45258__auto___51585 < len__45257__auto___51584)){
args51517.push((arguments[i__45258__auto___51585]));

var G__51586 = (i__45258__auto___51585 + (1));
i__45258__auto___51585 = G__51586;
continue;
} else {
}
break;
}

var G__51519 = args51517.length;
switch (G__51519) {
case 1:
return sablono.core.range_field51516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field51516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51517.length)].join('')));

}
});

sablono.core.range_field51516.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.range_field51516.call(null,name__51391__auto__,null);
});

sablono.core.range_field51516.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.range_field51516.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field51516);

/**
 * Creates a search input field.
 */
sablono.core.search_field51520 = (function sablono$core$search_field51520(var_args){
var args51521 = [];
var len__45257__auto___51588 = arguments.length;
var i__45258__auto___51589 = (0);
while(true){
if((i__45258__auto___51589 < len__45257__auto___51588)){
args51521.push((arguments[i__45258__auto___51589]));

var G__51590 = (i__45258__auto___51589 + (1));
i__45258__auto___51589 = G__51590;
continue;
} else {
}
break;
}

var G__51523 = args51521.length;
switch (G__51523) {
case 1:
return sablono.core.search_field51520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field51520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51521.length)].join('')));

}
});

sablono.core.search_field51520.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.search_field51520.call(null,name__51391__auto__,null);
});

sablono.core.search_field51520.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.search_field51520.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field51520);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field51524 = (function sablono$core$tel_field51524(var_args){
var args51525 = [];
var len__45257__auto___51592 = arguments.length;
var i__45258__auto___51593 = (0);
while(true){
if((i__45258__auto___51593 < len__45257__auto___51592)){
args51525.push((arguments[i__45258__auto___51593]));

var G__51594 = (i__45258__auto___51593 + (1));
i__45258__auto___51593 = G__51594;
continue;
} else {
}
break;
}

var G__51527 = args51525.length;
switch (G__51527) {
case 1:
return sablono.core.tel_field51524.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field51524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51525.length)].join('')));

}
});

sablono.core.tel_field51524.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.tel_field51524.call(null,name__51391__auto__,null);
});

sablono.core.tel_field51524.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.tel_field51524.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field51524);

/**
 * Creates a text input field.
 */
sablono.core.text_field51528 = (function sablono$core$text_field51528(var_args){
var args51529 = [];
var len__45257__auto___51596 = arguments.length;
var i__45258__auto___51597 = (0);
while(true){
if((i__45258__auto___51597 < len__45257__auto___51596)){
args51529.push((arguments[i__45258__auto___51597]));

var G__51598 = (i__45258__auto___51597 + (1));
i__45258__auto___51597 = G__51598;
continue;
} else {
}
break;
}

var G__51531 = args51529.length;
switch (G__51531) {
case 1:
return sablono.core.text_field51528.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field51528.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51529.length)].join('')));

}
});

sablono.core.text_field51528.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.text_field51528.call(null,name__51391__auto__,null);
});

sablono.core.text_field51528.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.text_field51528.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field51528);

/**
 * Creates a time input field.
 */
sablono.core.time_field51532 = (function sablono$core$time_field51532(var_args){
var args51533 = [];
var len__45257__auto___51600 = arguments.length;
var i__45258__auto___51601 = (0);
while(true){
if((i__45258__auto___51601 < len__45257__auto___51600)){
args51533.push((arguments[i__45258__auto___51601]));

var G__51602 = (i__45258__auto___51601 + (1));
i__45258__auto___51601 = G__51602;
continue;
} else {
}
break;
}

var G__51535 = args51533.length;
switch (G__51535) {
case 1:
return sablono.core.time_field51532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field51532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51533.length)].join('')));

}
});

sablono.core.time_field51532.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.time_field51532.call(null,name__51391__auto__,null);
});

sablono.core.time_field51532.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.time_field51532.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field51532);

/**
 * Creates a url input field.
 */
sablono.core.url_field51536 = (function sablono$core$url_field51536(var_args){
var args51537 = [];
var len__45257__auto___51604 = arguments.length;
var i__45258__auto___51605 = (0);
while(true){
if((i__45258__auto___51605 < len__45257__auto___51604)){
args51537.push((arguments[i__45258__auto___51605]));

var G__51606 = (i__45258__auto___51605 + (1));
i__45258__auto___51605 = G__51606;
continue;
} else {
}
break;
}

var G__51539 = args51537.length;
switch (G__51539) {
case 1:
return sablono.core.url_field51536.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field51536.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51537.length)].join('')));

}
});

sablono.core.url_field51536.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.url_field51536.call(null,name__51391__auto__,null);
});

sablono.core.url_field51536.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.url_field51536.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field51536);

/**
 * Creates a week input field.
 */
sablono.core.week_field51540 = (function sablono$core$week_field51540(var_args){
var args51541 = [];
var len__45257__auto___51608 = arguments.length;
var i__45258__auto___51609 = (0);
while(true){
if((i__45258__auto___51609 < len__45257__auto___51608)){
args51541.push((arguments[i__45258__auto___51609]));

var G__51610 = (i__45258__auto___51609 + (1));
i__45258__auto___51609 = G__51610;
continue;
} else {
}
break;
}

var G__51543 = args51541.length;
switch (G__51543) {
case 1:
return sablono.core.week_field51540.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field51540.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51541.length)].join('')));

}
});

sablono.core.week_field51540.cljs$core$IFn$_invoke$arity$1 = (function (name__51391__auto__){
return sablono.core.week_field51540.call(null,name__51391__auto__,null);
});

sablono.core.week_field51540.cljs$core$IFn$_invoke$arity$2 = (function (name__51391__auto__,value__51392__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__51391__auto__,value__51392__auto__);
});

sablono.core.week_field51540.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field51540);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box51612 = (function sablono$core$check_box51612(var_args){
var args51613 = [];
var len__45257__auto___51616 = arguments.length;
var i__45258__auto___51617 = (0);
while(true){
if((i__45258__auto___51617 < len__45257__auto___51616)){
args51613.push((arguments[i__45258__auto___51617]));

var G__51618 = (i__45258__auto___51617 + (1));
i__45258__auto___51617 = G__51618;
continue;
} else {
}
break;
}

var G__51615 = args51613.length;
switch (G__51615) {
case 1:
return sablono.core.check_box51612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box51612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box51612.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51613.length)].join('')));

}
});

sablono.core.check_box51612.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box51612.call(null,name,null);
});

sablono.core.check_box51612.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box51612.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box51612.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__44182__auto__ = value;
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box51612.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box51612);
/**
 * Creates a radio button.
 */
sablono.core.radio_button51620 = (function sablono$core$radio_button51620(var_args){
var args51621 = [];
var len__45257__auto___51624 = arguments.length;
var i__45258__auto___51625 = (0);
while(true){
if((i__45258__auto___51625 < len__45257__auto___51624)){
args51621.push((arguments[i__45258__auto___51625]));

var G__51626 = (i__45258__auto___51625 + (1));
i__45258__auto___51625 = G__51626;
continue;
} else {
}
break;
}

var G__51623 = args51621.length;
switch (G__51623) {
case 1:
return sablono.core.radio_button51620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button51620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button51620.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51621.length)].join('')));

}
});

sablono.core.radio_button51620.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button51620.call(null,group,null);
});

sablono.core.radio_button51620.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button51620.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button51620.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__44182__auto__ = value;
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button51620.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button51620);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options51628 = (function sablono$core$select_options51628(coll){
var iter__44962__auto__ = (function sablono$core$select_options51628_$_iter__51645(s__51646){
return (new cljs.core.LazySeq(null,(function (){
var s__51646__$1 = s__51646;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51646__$1);
if(temp__4657__auto__){
var s__51646__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51646__$2)){
var c__44960__auto__ = cljs.core.chunk_first.call(null,s__51646__$2);
var size__44961__auto__ = cljs.core.count.call(null,c__44960__auto__);
var b__51648 = cljs.core.chunk_buffer.call(null,size__44961__auto__);
if((function (){var i__51647 = (0);
while(true){
if((i__51647 < size__44961__auto__)){
var x = cljs.core._nth.call(null,c__44960__auto__,i__51647);
cljs.core.chunk_append.call(null,b__51648,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51655 = x;
var text = cljs.core.nth.call(null,vec__51655,(0),null);
var val = cljs.core.nth.call(null,vec__51655,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__51655,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options51628.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__51661 = (i__51647 + (1));
i__51647 = G__51661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51648),sablono$core$select_options51628_$_iter__51645.call(null,cljs.core.chunk_rest.call(null,s__51646__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51648),null);
}
} else {
var x = cljs.core.first.call(null,s__51646__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51658 = x;
var text = cljs.core.nth.call(null,vec__51658,(0),null);
var val = cljs.core.nth.call(null,vec__51658,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__51658,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options51628.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options51628_$_iter__51645.call(null,cljs.core.rest.call(null,s__51646__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__44962__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options51628);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down51662 = (function sablono$core$drop_down51662(var_args){
var args51663 = [];
var len__45257__auto___51666 = arguments.length;
var i__45258__auto___51667 = (0);
while(true){
if((i__45258__auto___51667 < len__45257__auto___51666)){
args51663.push((arguments[i__45258__auto___51667]));

var G__51668 = (i__45258__auto___51667 + (1));
i__45258__auto___51667 = G__51668;
continue;
} else {
}
break;
}

var G__51665 = args51663.length;
switch (G__51665) {
case 2:
return sablono.core.drop_down51662.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down51662.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51663.length)].join('')));

}
});

sablono.core.drop_down51662.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down51662.call(null,name,options,null);
});

sablono.core.drop_down51662.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down51662.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down51662);
/**
 * Creates a text area element.
 */
sablono.core.text_area51670 = (function sablono$core$text_area51670(var_args){
var args51671 = [];
var len__45257__auto___51674 = arguments.length;
var i__45258__auto___51675 = (0);
while(true){
if((i__45258__auto___51675 < len__45257__auto___51674)){
args51671.push((arguments[i__45258__auto___51675]));

var G__51676 = (i__45258__auto___51675 + (1));
i__45258__auto___51675 = G__51676;
continue;
} else {
}
break;
}

var G__51673 = args51671.length;
switch (G__51673) {
case 1:
return sablono.core.text_area51670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area51670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51671.length)].join('')));

}
});

sablono.core.text_area51670.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area51670.call(null,name,null);
});

sablono.core.text_area51670.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__44182__auto__ = value;
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area51670.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area51670);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label51678 = (function sablono$core$label51678(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label51678);
/**
 * Creates a submit button.
 */
sablono.core.submit_button51679 = (function sablono$core$submit_button51679(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button51679);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button51680 = (function sablono$core$reset_button51680(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button51680);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to51681 = (function sablono$core$form_to51681(var_args){
var args__45264__auto__ = [];
var len__45257__auto___51688 = arguments.length;
var i__45258__auto___51689 = (0);
while(true){
if((i__45258__auto___51689 < len__45257__auto___51688)){
args__45264__auto__.push((arguments[i__45258__auto___51689]));

var G__51690 = (i__45258__auto___51689 + (1));
i__45258__auto___51689 = G__51690;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((1) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to51681.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45265__auto__);
});

sablono.core.form_to51681.cljs$core$IFn$_invoke$arity$variadic = (function (p__51684,body){
var vec__51685 = p__51684;
var method = cljs.core.nth.call(null,vec__51685,(0),null);
var action = cljs.core.nth.call(null,vec__51685,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to51681.cljs$lang$maxFixedArity = (1);

sablono.core.form_to51681.cljs$lang$applyTo = (function (seq51682){
var G__51683 = cljs.core.first.call(null,seq51682);
var seq51682__$1 = cljs.core.next.call(null,seq51682);
return sablono.core.form_to51681.cljs$core$IFn$_invoke$arity$variadic(G__51683,seq51682__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to51681);

//# sourceMappingURL=core.js.map?rel=1481668787119