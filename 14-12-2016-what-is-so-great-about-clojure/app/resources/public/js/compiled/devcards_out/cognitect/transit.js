// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__50256_50260 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__50257_50261 = null;
var count__50258_50262 = (0);
var i__50259_50263 = (0);
while(true){
if((i__50259_50263 < count__50258_50262)){
var k_50264 = cljs.core._nth.call(null,chunk__50257_50261,i__50259_50263);
var v_50265 = (b[k_50264]);
(a[k_50264] = v_50265);

var G__50266 = seq__50256_50260;
var G__50267 = chunk__50257_50261;
var G__50268 = count__50258_50262;
var G__50269 = (i__50259_50263 + (1));
seq__50256_50260 = G__50266;
chunk__50257_50261 = G__50267;
count__50258_50262 = G__50268;
i__50259_50263 = G__50269;
continue;
} else {
var temp__4657__auto___50270 = cljs.core.seq.call(null,seq__50256_50260);
if(temp__4657__auto___50270){
var seq__50256_50271__$1 = temp__4657__auto___50270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50256_50271__$1)){
var c__45001__auto___50272 = cljs.core.chunk_first.call(null,seq__50256_50271__$1);
var G__50273 = cljs.core.chunk_rest.call(null,seq__50256_50271__$1);
var G__50274 = c__45001__auto___50272;
var G__50275 = cljs.core.count.call(null,c__45001__auto___50272);
var G__50276 = (0);
seq__50256_50260 = G__50273;
chunk__50257_50261 = G__50274;
count__50258_50262 = G__50275;
i__50259_50263 = G__50276;
continue;
} else {
var k_50277 = cljs.core.first.call(null,seq__50256_50271__$1);
var v_50278 = (b[k_50277]);
(a[k_50277] = v_50278);

var G__50279 = cljs.core.next.call(null,seq__50256_50271__$1);
var G__50280 = null;
var G__50281 = (0);
var G__50282 = (0);
seq__50256_50260 = G__50279;
chunk__50257_50261 = G__50280;
count__50258_50262 = G__50281;
i__50259_50263 = G__50282;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args50283 = [];
var len__45265__auto___50286 = arguments.length;
var i__45266__auto___50287 = (0);
while(true){
if((i__45266__auto___50287 < len__45265__auto___50286)){
args50283.push((arguments[i__45266__auto___50287]));

var G__50288 = (i__45266__auto___50287 + (1));
i__45266__auto___50287 = G__50288;
continue;
} else {
}
break;
}

var G__50285 = args50283.length;
switch (G__50285) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50283.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__50290 = (i + (2));
var G__50291 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__50290;
ret = G__50291;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__50292_50296 = cljs.core.seq.call(null,v);
var chunk__50293_50297 = null;
var count__50294_50298 = (0);
var i__50295_50299 = (0);
while(true){
if((i__50295_50299 < count__50294_50298)){
var x_50300 = cljs.core._nth.call(null,chunk__50293_50297,i__50295_50299);
ret.push(x_50300);

var G__50301 = seq__50292_50296;
var G__50302 = chunk__50293_50297;
var G__50303 = count__50294_50298;
var G__50304 = (i__50295_50299 + (1));
seq__50292_50296 = G__50301;
chunk__50293_50297 = G__50302;
count__50294_50298 = G__50303;
i__50295_50299 = G__50304;
continue;
} else {
var temp__4657__auto___50305 = cljs.core.seq.call(null,seq__50292_50296);
if(temp__4657__auto___50305){
var seq__50292_50306__$1 = temp__4657__auto___50305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50292_50306__$1)){
var c__45001__auto___50307 = cljs.core.chunk_first.call(null,seq__50292_50306__$1);
var G__50308 = cljs.core.chunk_rest.call(null,seq__50292_50306__$1);
var G__50309 = c__45001__auto___50307;
var G__50310 = cljs.core.count.call(null,c__45001__auto___50307);
var G__50311 = (0);
seq__50292_50296 = G__50308;
chunk__50293_50297 = G__50309;
count__50294_50298 = G__50310;
i__50295_50299 = G__50311;
continue;
} else {
var x_50312 = cljs.core.first.call(null,seq__50292_50306__$1);
ret.push(x_50312);

var G__50313 = cljs.core.next.call(null,seq__50292_50306__$1);
var G__50314 = null;
var G__50315 = (0);
var G__50316 = (0);
seq__50292_50296 = G__50313;
chunk__50293_50297 = G__50314;
count__50294_50298 = G__50315;
i__50295_50299 = G__50316;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__50317_50321 = cljs.core.seq.call(null,v);
var chunk__50318_50322 = null;
var count__50319_50323 = (0);
var i__50320_50324 = (0);
while(true){
if((i__50320_50324 < count__50319_50323)){
var x_50325 = cljs.core._nth.call(null,chunk__50318_50322,i__50320_50324);
ret.push(x_50325);

var G__50326 = seq__50317_50321;
var G__50327 = chunk__50318_50322;
var G__50328 = count__50319_50323;
var G__50329 = (i__50320_50324 + (1));
seq__50317_50321 = G__50326;
chunk__50318_50322 = G__50327;
count__50319_50323 = G__50328;
i__50320_50324 = G__50329;
continue;
} else {
var temp__4657__auto___50330 = cljs.core.seq.call(null,seq__50317_50321);
if(temp__4657__auto___50330){
var seq__50317_50331__$1 = temp__4657__auto___50330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50317_50331__$1)){
var c__45001__auto___50332 = cljs.core.chunk_first.call(null,seq__50317_50331__$1);
var G__50333 = cljs.core.chunk_rest.call(null,seq__50317_50331__$1);
var G__50334 = c__45001__auto___50332;
var G__50335 = cljs.core.count.call(null,c__45001__auto___50332);
var G__50336 = (0);
seq__50317_50321 = G__50333;
chunk__50318_50322 = G__50334;
count__50319_50323 = G__50335;
i__50320_50324 = G__50336;
continue;
} else {
var x_50337 = cljs.core.first.call(null,seq__50317_50331__$1);
ret.push(x_50337);

var G__50338 = cljs.core.next.call(null,seq__50317_50331__$1);
var G__50339 = null;
var G__50340 = (0);
var G__50341 = (0);
seq__50317_50321 = G__50338;
chunk__50318_50322 = G__50339;
count__50319_50323 = G__50340;
i__50320_50324 = G__50341;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__50342_50346 = cljs.core.seq.call(null,v);
var chunk__50343_50347 = null;
var count__50344_50348 = (0);
var i__50345_50349 = (0);
while(true){
if((i__50345_50349 < count__50344_50348)){
var x_50350 = cljs.core._nth.call(null,chunk__50343_50347,i__50345_50349);
ret.push(x_50350);

var G__50351 = seq__50342_50346;
var G__50352 = chunk__50343_50347;
var G__50353 = count__50344_50348;
var G__50354 = (i__50345_50349 + (1));
seq__50342_50346 = G__50351;
chunk__50343_50347 = G__50352;
count__50344_50348 = G__50353;
i__50345_50349 = G__50354;
continue;
} else {
var temp__4657__auto___50355 = cljs.core.seq.call(null,seq__50342_50346);
if(temp__4657__auto___50355){
var seq__50342_50356__$1 = temp__4657__auto___50355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50342_50356__$1)){
var c__45001__auto___50357 = cljs.core.chunk_first.call(null,seq__50342_50356__$1);
var G__50358 = cljs.core.chunk_rest.call(null,seq__50342_50356__$1);
var G__50359 = c__45001__auto___50357;
var G__50360 = cljs.core.count.call(null,c__45001__auto___50357);
var G__50361 = (0);
seq__50342_50346 = G__50358;
chunk__50343_50347 = G__50359;
count__50344_50348 = G__50360;
i__50345_50349 = G__50361;
continue;
} else {
var x_50362 = cljs.core.first.call(null,seq__50342_50356__$1);
ret.push(x_50362);

var G__50363 = cljs.core.next.call(null,seq__50342_50356__$1);
var G__50364 = null;
var G__50365 = (0);
var G__50366 = (0);
seq__50342_50346 = G__50363;
chunk__50343_50347 = G__50364;
count__50344_50348 = G__50365;
i__50345_50349 = G__50366;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args50367 = [];
var len__45265__auto___50382 = arguments.length;
var i__45266__auto___50383 = (0);
while(true){
if((i__45266__auto___50383 < len__45265__auto___50382)){
args50367.push((arguments[i__45266__auto___50383]));

var G__50384 = (i__45266__auto___50383 + (1));
i__45266__auto___50383 = G__50384;
continue;
} else {
}
break;
}

var G__50369 = args50367.length;
switch (G__50369) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50367.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__50370 = obj;
G__50370.push(kfn.call(null,k),vfn.call(null,v));

return G__50370;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x50371 = cljs.core.clone.call(null,handlers);
x50371.forEach = ((function (x50371,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__50372 = cljs.core.seq.call(null,coll);
var chunk__50373 = null;
var count__50374 = (0);
var i__50375 = (0);
while(true){
if((i__50375 < count__50374)){
var vec__50376 = cljs.core._nth.call(null,chunk__50373,i__50375);
var k = cljs.core.nth.call(null,vec__50376,(0),null);
var v = cljs.core.nth.call(null,vec__50376,(1),null);
f.call(null,v,k);

var G__50386 = seq__50372;
var G__50387 = chunk__50373;
var G__50388 = count__50374;
var G__50389 = (i__50375 + (1));
seq__50372 = G__50386;
chunk__50373 = G__50387;
count__50374 = G__50388;
i__50375 = G__50389;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50372);
if(temp__4657__auto__){
var seq__50372__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50372__$1)){
var c__45001__auto__ = cljs.core.chunk_first.call(null,seq__50372__$1);
var G__50390 = cljs.core.chunk_rest.call(null,seq__50372__$1);
var G__50391 = c__45001__auto__;
var G__50392 = cljs.core.count.call(null,c__45001__auto__);
var G__50393 = (0);
seq__50372 = G__50390;
chunk__50373 = G__50391;
count__50374 = G__50392;
i__50375 = G__50393;
continue;
} else {
var vec__50379 = cljs.core.first.call(null,seq__50372__$1);
var k = cljs.core.nth.call(null,vec__50379,(0),null);
var v = cljs.core.nth.call(null,vec__50379,(1),null);
f.call(null,v,k);

var G__50394 = cljs.core.next.call(null,seq__50372__$1);
var G__50395 = null;
var G__50396 = (0);
var G__50397 = (0);
seq__50372 = G__50394;
chunk__50373 = G__50395;
count__50374 = G__50396;
i__50375 = G__50397;
continue;
}
} else {
return null;
}
}
break;
}
});})(x50371,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x50371;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args50398 = [];
var len__45265__auto___50404 = arguments.length;
var i__45266__auto___50405 = (0);
while(true){
if((i__45266__auto___50405 < len__45265__auto___50404)){
args50398.push((arguments[i__45266__auto___50405]));

var G__50406 = (i__45266__auto___50405 + (1));
i__45266__auto___50405 = G__50406;
continue;
} else {
}
break;
}

var G__50400 = args50398.length;
switch (G__50400) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50398.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit50401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit50401 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta50402){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta50402 = meta50402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit50401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50403,meta50402__$1){
var self__ = this;
var _50403__$1 = this;
return (new cognitect.transit.t_cognitect$transit50401(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta50402__$1));
});

cognitect.transit.t_cognitect$transit50401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50403){
var self__ = this;
var _50403__$1 = this;
return self__.meta50402;
});

cognitect.transit.t_cognitect$transit50401.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit50401.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit50401.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit50401.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit50401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta50402","meta50402",-815334713,null)], null);
});

cognitect.transit.t_cognitect$transit50401.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit50401.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit50401";

cognitect.transit.t_cognitect$transit50401.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"cognitect.transit/t_cognitect$transit50401");
});

cognitect.transit.__GT_t_cognitect$transit50401 = (function cognitect$transit$__GT_t_cognitect$transit50401(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta50402){
return (new cognitect.transit.t_cognitect$transit50401(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta50402));
});

}

return (new cognitect.transit.t_cognitect$transit50401(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__44190__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1481669445079