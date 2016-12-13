// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54267 = arguments.length;
var i__45258__auto___54268 = (0);
while(true){
if((i__45258__auto___54268 < len__45257__auto___54267)){
args__45264__auto__.push((arguments[i__45258__auto___54268]));

var G__54269 = (i__45258__auto___54268 + (1));
i__45258__auto___54268 = G__54269;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq54266){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54266));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54271 = arguments.length;
var i__45258__auto___54272 = (0);
while(true){
if((i__45258__auto___54272 < len__45257__auto___54271)){
args__45264__auto__.push((arguments[i__45258__auto___54272]));

var G__54273 = (i__45258__auto___54272 + (1));
i__45258__auto___54272 = G__54273;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq54270){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54270));
});

var g_QMARK__54274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_54275 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__54274){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__54274))
,null));
var mkg_54276 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__54274,g_54275){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__54274,g_54275))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__54274,g_54275,mkg_54276){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__54274).call(null,x);
});})(g_QMARK__54274,g_54275,mkg_54276))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__54274,g_54275,mkg_54276){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_54276).call(null,gfn);
});})(g_QMARK__54274,g_54275,mkg_54276))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__54274,g_54275,mkg_54276){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_54275).call(null,generator);
});})(g_QMARK__54274,g_54275,mkg_54276))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__54238__auto___54295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__54238__auto___54295){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54296 = arguments.length;
var i__45258__auto___54297 = (0);
while(true){
if((i__45258__auto___54297 < len__45257__auto___54296)){
args__45264__auto__.push((arguments[i__45258__auto___54297]));

var G__54298 = (i__45258__auto___54297 + (1));
i__45258__auto___54297 = G__54298;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54295))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54295){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54295),args);
});})(g__54238__auto___54295))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__54238__auto___54295){
return (function (seq54277){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54277));
});})(g__54238__auto___54295))
;


var g__54238__auto___54299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__54238__auto___54299){
return (function cljs$spec$impl$gen$list(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54300 = arguments.length;
var i__45258__auto___54301 = (0);
while(true){
if((i__45258__auto___54301 < len__45257__auto___54300)){
args__45264__auto__.push((arguments[i__45258__auto___54301]));

var G__54302 = (i__45258__auto___54301 + (1));
i__45258__auto___54301 = G__54302;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54299))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54299){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54299),args);
});})(g__54238__auto___54299))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__54238__auto___54299){
return (function (seq54278){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54278));
});})(g__54238__auto___54299))
;


var g__54238__auto___54303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__54238__auto___54303){
return (function cljs$spec$impl$gen$map(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54304 = arguments.length;
var i__45258__auto___54305 = (0);
while(true){
if((i__45258__auto___54305 < len__45257__auto___54304)){
args__45264__auto__.push((arguments[i__45258__auto___54305]));

var G__54306 = (i__45258__auto___54305 + (1));
i__45258__auto___54305 = G__54306;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54303))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54303){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54303),args);
});})(g__54238__auto___54303))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__54238__auto___54303){
return (function (seq54279){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54279));
});})(g__54238__auto___54303))
;


var g__54238__auto___54307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__54238__auto___54307){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54308 = arguments.length;
var i__45258__auto___54309 = (0);
while(true){
if((i__45258__auto___54309 < len__45257__auto___54308)){
args__45264__auto__.push((arguments[i__45258__auto___54309]));

var G__54310 = (i__45258__auto___54309 + (1));
i__45258__auto___54309 = G__54310;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54307))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54307){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54307),args);
});})(g__54238__auto___54307))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__54238__auto___54307){
return (function (seq54280){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54280));
});})(g__54238__auto___54307))
;


var g__54238__auto___54311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__54238__auto___54311){
return (function cljs$spec$impl$gen$set(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54312 = arguments.length;
var i__45258__auto___54313 = (0);
while(true){
if((i__45258__auto___54313 < len__45257__auto___54312)){
args__45264__auto__.push((arguments[i__45258__auto___54313]));

var G__54314 = (i__45258__auto___54313 + (1));
i__45258__auto___54313 = G__54314;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54311))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54311){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54311),args);
});})(g__54238__auto___54311))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__54238__auto___54311){
return (function (seq54281){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54281));
});})(g__54238__auto___54311))
;


var g__54238__auto___54315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__54238__auto___54315){
return (function cljs$spec$impl$gen$vector(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54316 = arguments.length;
var i__45258__auto___54317 = (0);
while(true){
if((i__45258__auto___54317 < len__45257__auto___54316)){
args__45264__auto__.push((arguments[i__45258__auto___54317]));

var G__54318 = (i__45258__auto___54317 + (1));
i__45258__auto___54317 = G__54318;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54315))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54315){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54315),args);
});})(g__54238__auto___54315))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__54238__auto___54315){
return (function (seq54282){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54282));
});})(g__54238__auto___54315))
;


var g__54238__auto___54319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__54238__auto___54319){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54320 = arguments.length;
var i__45258__auto___54321 = (0);
while(true){
if((i__45258__auto___54321 < len__45257__auto___54320)){
args__45264__auto__.push((arguments[i__45258__auto___54321]));

var G__54322 = (i__45258__auto___54321 + (1));
i__45258__auto___54321 = G__54322;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54319))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54319){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54319),args);
});})(g__54238__auto___54319))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__54238__auto___54319){
return (function (seq54283){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54283));
});})(g__54238__auto___54319))
;


var g__54238__auto___54323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__54238__auto___54323){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54324 = arguments.length;
var i__45258__auto___54325 = (0);
while(true){
if((i__45258__auto___54325 < len__45257__auto___54324)){
args__45264__auto__.push((arguments[i__45258__auto___54325]));

var G__54326 = (i__45258__auto___54325 + (1));
i__45258__auto___54325 = G__54326;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54323))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54323){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54323),args);
});})(g__54238__auto___54323))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__54238__auto___54323){
return (function (seq54284){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54284));
});})(g__54238__auto___54323))
;


var g__54238__auto___54327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__54238__auto___54327){
return (function cljs$spec$impl$gen$elements(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54328 = arguments.length;
var i__45258__auto___54329 = (0);
while(true){
if((i__45258__auto___54329 < len__45257__auto___54328)){
args__45264__auto__.push((arguments[i__45258__auto___54329]));

var G__54330 = (i__45258__auto___54329 + (1));
i__45258__auto___54329 = G__54330;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54327))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54327){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54327),args);
});})(g__54238__auto___54327))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__54238__auto___54327){
return (function (seq54285){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54285));
});})(g__54238__auto___54327))
;


var g__54238__auto___54331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__54238__auto___54331){
return (function cljs$spec$impl$gen$bind(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54332 = arguments.length;
var i__45258__auto___54333 = (0);
while(true){
if((i__45258__auto___54333 < len__45257__auto___54332)){
args__45264__auto__.push((arguments[i__45258__auto___54333]));

var G__54334 = (i__45258__auto___54333 + (1));
i__45258__auto___54333 = G__54334;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54331))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54331){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54331),args);
});})(g__54238__auto___54331))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__54238__auto___54331){
return (function (seq54286){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54286));
});})(g__54238__auto___54331))
;


var g__54238__auto___54335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__54238__auto___54335){
return (function cljs$spec$impl$gen$choose(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54336 = arguments.length;
var i__45258__auto___54337 = (0);
while(true){
if((i__45258__auto___54337 < len__45257__auto___54336)){
args__45264__auto__.push((arguments[i__45258__auto___54337]));

var G__54338 = (i__45258__auto___54337 + (1));
i__45258__auto___54337 = G__54338;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54335))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54335){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54335),args);
});})(g__54238__auto___54335))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__54238__auto___54335){
return (function (seq54287){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54287));
});})(g__54238__auto___54335))
;


var g__54238__auto___54339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__54238__auto___54339){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54340 = arguments.length;
var i__45258__auto___54341 = (0);
while(true){
if((i__45258__auto___54341 < len__45257__auto___54340)){
args__45264__auto__.push((arguments[i__45258__auto___54341]));

var G__54342 = (i__45258__auto___54341 + (1));
i__45258__auto___54341 = G__54342;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54339))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54339){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54339),args);
});})(g__54238__auto___54339))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__54238__auto___54339){
return (function (seq54288){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54288));
});})(g__54238__auto___54339))
;


var g__54238__auto___54343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__54238__auto___54343){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54344 = arguments.length;
var i__45258__auto___54345 = (0);
while(true){
if((i__45258__auto___54345 < len__45257__auto___54344)){
args__45264__auto__.push((arguments[i__45258__auto___54345]));

var G__54346 = (i__45258__auto___54345 + (1));
i__45258__auto___54345 = G__54346;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54343))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54343){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54343),args);
});})(g__54238__auto___54343))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__54238__auto___54343){
return (function (seq54289){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54289));
});})(g__54238__auto___54343))
;


var g__54238__auto___54347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__54238__auto___54347){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54348 = arguments.length;
var i__45258__auto___54349 = (0);
while(true){
if((i__45258__auto___54349 < len__45257__auto___54348)){
args__45264__auto__.push((arguments[i__45258__auto___54349]));

var G__54350 = (i__45258__auto___54349 + (1));
i__45258__auto___54349 = G__54350;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54347))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54347){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54347),args);
});})(g__54238__auto___54347))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__54238__auto___54347){
return (function (seq54290){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54290));
});})(g__54238__auto___54347))
;


var g__54238__auto___54351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__54238__auto___54351){
return (function cljs$spec$impl$gen$sample(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54352 = arguments.length;
var i__45258__auto___54353 = (0);
while(true){
if((i__45258__auto___54353 < len__45257__auto___54352)){
args__45264__auto__.push((arguments[i__45258__auto___54353]));

var G__54354 = (i__45258__auto___54353 + (1));
i__45258__auto___54353 = G__54354;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54351))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54351){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54351),args);
});})(g__54238__auto___54351))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__54238__auto___54351){
return (function (seq54291){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54291));
});})(g__54238__auto___54351))
;


var g__54238__auto___54355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__54238__auto___54355){
return (function cljs$spec$impl$gen$return(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54356 = arguments.length;
var i__45258__auto___54357 = (0);
while(true){
if((i__45258__auto___54357 < len__45257__auto___54356)){
args__45264__auto__.push((arguments[i__45258__auto___54357]));

var G__54358 = (i__45258__auto___54357 + (1));
i__45258__auto___54357 = G__54358;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54355))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54355){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54355),args);
});})(g__54238__auto___54355))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__54238__auto___54355){
return (function (seq54292){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54292));
});})(g__54238__auto___54355))
;


var g__54238__auto___54359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__54238__auto___54359){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54360 = arguments.length;
var i__45258__auto___54361 = (0);
while(true){
if((i__45258__auto___54361 < len__45257__auto___54360)){
args__45264__auto__.push((arguments[i__45258__auto___54361]));

var G__54362 = (i__45258__auto___54361 + (1));
i__45258__auto___54361 = G__54362;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54359))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54359){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54359),args);
});})(g__54238__auto___54359))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__54238__auto___54359){
return (function (seq54293){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54293));
});})(g__54238__auto___54359))
;


var g__54238__auto___54363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__54238__auto___54363){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54364 = arguments.length;
var i__45258__auto___54365 = (0);
while(true){
if((i__45258__auto___54365 < len__45257__auto___54364)){
args__45264__auto__.push((arguments[i__45258__auto___54365]));

var G__54366 = (i__45258__auto___54365 + (1));
i__45258__auto___54365 = G__54366;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54238__auto___54363))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54238__auto___54363){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__54238__auto___54363),args);
});})(g__54238__auto___54363))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__54238__auto___54363){
return (function (seq54294){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54294));
});})(g__54238__auto___54363))
;

var g__54251__auto___54388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__54251__auto___54388){
return (function cljs$spec$impl$gen$any(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54389 = arguments.length;
var i__45258__auto___54390 = (0);
while(true){
if((i__45258__auto___54390 < len__45257__auto___54389)){
args__45264__auto__.push((arguments[i__45258__auto___54390]));

var G__54391 = (i__45258__auto___54390 + (1));
i__45258__auto___54390 = G__54391;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54388))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54388){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54388);
});})(g__54251__auto___54388))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__54251__auto___54388){
return (function (seq54367){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54367));
});})(g__54251__auto___54388))
;


var g__54251__auto___54392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__54251__auto___54392){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54393 = arguments.length;
var i__45258__auto___54394 = (0);
while(true){
if((i__45258__auto___54394 < len__45257__auto___54393)){
args__45264__auto__.push((arguments[i__45258__auto___54394]));

var G__54395 = (i__45258__auto___54394 + (1));
i__45258__auto___54394 = G__54395;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54392))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54392){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54392);
});})(g__54251__auto___54392))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__54251__auto___54392){
return (function (seq54368){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54368));
});})(g__54251__auto___54392))
;


var g__54251__auto___54396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__54251__auto___54396){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54397 = arguments.length;
var i__45258__auto___54398 = (0);
while(true){
if((i__45258__auto___54398 < len__45257__auto___54397)){
args__45264__auto__.push((arguments[i__45258__auto___54398]));

var G__54399 = (i__45258__auto___54398 + (1));
i__45258__auto___54398 = G__54399;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54396))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54396){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54396);
});})(g__54251__auto___54396))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__54251__auto___54396){
return (function (seq54369){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54369));
});})(g__54251__auto___54396))
;


var g__54251__auto___54400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__54251__auto___54400){
return (function cljs$spec$impl$gen$char(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54401 = arguments.length;
var i__45258__auto___54402 = (0);
while(true){
if((i__45258__auto___54402 < len__45257__auto___54401)){
args__45264__auto__.push((arguments[i__45258__auto___54402]));

var G__54403 = (i__45258__auto___54402 + (1));
i__45258__auto___54402 = G__54403;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54400))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54400){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54400);
});})(g__54251__auto___54400))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__54251__auto___54400){
return (function (seq54370){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54370));
});})(g__54251__auto___54400))
;


var g__54251__auto___54404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__54251__auto___54404){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54405 = arguments.length;
var i__45258__auto___54406 = (0);
while(true){
if((i__45258__auto___54406 < len__45257__auto___54405)){
args__45264__auto__.push((arguments[i__45258__auto___54406]));

var G__54407 = (i__45258__auto___54406 + (1));
i__45258__auto___54406 = G__54407;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54404))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54404){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54404);
});})(g__54251__auto___54404))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__54251__auto___54404){
return (function (seq54371){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54371));
});})(g__54251__auto___54404))
;


var g__54251__auto___54408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__54251__auto___54408){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54409 = arguments.length;
var i__45258__auto___54410 = (0);
while(true){
if((i__45258__auto___54410 < len__45257__auto___54409)){
args__45264__auto__.push((arguments[i__45258__auto___54410]));

var G__54411 = (i__45258__auto___54410 + (1));
i__45258__auto___54410 = G__54411;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54408))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54408){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54408);
});})(g__54251__auto___54408))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__54251__auto___54408){
return (function (seq54372){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54372));
});})(g__54251__auto___54408))
;


var g__54251__auto___54412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__54251__auto___54412){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54413 = arguments.length;
var i__45258__auto___54414 = (0);
while(true){
if((i__45258__auto___54414 < len__45257__auto___54413)){
args__45264__auto__.push((arguments[i__45258__auto___54414]));

var G__54415 = (i__45258__auto___54414 + (1));
i__45258__auto___54414 = G__54415;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54412))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54412){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54412);
});})(g__54251__auto___54412))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__54251__auto___54412){
return (function (seq54373){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54373));
});})(g__54251__auto___54412))
;


var g__54251__auto___54416 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__54251__auto___54416){
return (function cljs$spec$impl$gen$double(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54417 = arguments.length;
var i__45258__auto___54418 = (0);
while(true){
if((i__45258__auto___54418 < len__45257__auto___54417)){
args__45264__auto__.push((arguments[i__45258__auto___54418]));

var G__54419 = (i__45258__auto___54418 + (1));
i__45258__auto___54418 = G__54419;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54416))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54416){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54416);
});})(g__54251__auto___54416))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__54251__auto___54416){
return (function (seq54374){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54374));
});})(g__54251__auto___54416))
;


var g__54251__auto___54420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__54251__auto___54420){
return (function cljs$spec$impl$gen$int(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54421 = arguments.length;
var i__45258__auto___54422 = (0);
while(true){
if((i__45258__auto___54422 < len__45257__auto___54421)){
args__45264__auto__.push((arguments[i__45258__auto___54422]));

var G__54423 = (i__45258__auto___54422 + (1));
i__45258__auto___54422 = G__54423;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54420))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54420){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54420);
});})(g__54251__auto___54420))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__54251__auto___54420){
return (function (seq54375){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54375));
});})(g__54251__auto___54420))
;


var g__54251__auto___54424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__54251__auto___54424){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54425 = arguments.length;
var i__45258__auto___54426 = (0);
while(true){
if((i__45258__auto___54426 < len__45257__auto___54425)){
args__45264__auto__.push((arguments[i__45258__auto___54426]));

var G__54427 = (i__45258__auto___54426 + (1));
i__45258__auto___54426 = G__54427;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54424))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54424){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54424);
});})(g__54251__auto___54424))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__54251__auto___54424){
return (function (seq54376){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54376));
});})(g__54251__auto___54424))
;


var g__54251__auto___54428 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__54251__auto___54428){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54429 = arguments.length;
var i__45258__auto___54430 = (0);
while(true){
if((i__45258__auto___54430 < len__45257__auto___54429)){
args__45264__auto__.push((arguments[i__45258__auto___54430]));

var G__54431 = (i__45258__auto___54430 + (1));
i__45258__auto___54430 = G__54431;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54428))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54428){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54428);
});})(g__54251__auto___54428))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__54251__auto___54428){
return (function (seq54377){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54377));
});})(g__54251__auto___54428))
;


var g__54251__auto___54432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__54251__auto___54432){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54433 = arguments.length;
var i__45258__auto___54434 = (0);
while(true){
if((i__45258__auto___54434 < len__45257__auto___54433)){
args__45264__auto__.push((arguments[i__45258__auto___54434]));

var G__54435 = (i__45258__auto___54434 + (1));
i__45258__auto___54434 = G__54435;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54432))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54432){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54432);
});})(g__54251__auto___54432))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__54251__auto___54432){
return (function (seq54378){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54378));
});})(g__54251__auto___54432))
;


var g__54251__auto___54436 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__54251__auto___54436){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54437 = arguments.length;
var i__45258__auto___54438 = (0);
while(true){
if((i__45258__auto___54438 < len__45257__auto___54437)){
args__45264__auto__.push((arguments[i__45258__auto___54438]));

var G__54439 = (i__45258__auto___54438 + (1));
i__45258__auto___54438 = G__54439;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54436))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54436){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54436);
});})(g__54251__auto___54436))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__54251__auto___54436){
return (function (seq54379){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54379));
});})(g__54251__auto___54436))
;


var g__54251__auto___54440 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__54251__auto___54440){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54441 = arguments.length;
var i__45258__auto___54442 = (0);
while(true){
if((i__45258__auto___54442 < len__45257__auto___54441)){
args__45264__auto__.push((arguments[i__45258__auto___54442]));

var G__54443 = (i__45258__auto___54442 + (1));
i__45258__auto___54442 = G__54443;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54440))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54440){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54440);
});})(g__54251__auto___54440))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__54251__auto___54440){
return (function (seq54380){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54380));
});})(g__54251__auto___54440))
;


var g__54251__auto___54444 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__54251__auto___54444){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54445 = arguments.length;
var i__45258__auto___54446 = (0);
while(true){
if((i__45258__auto___54446 < len__45257__auto___54445)){
args__45264__auto__.push((arguments[i__45258__auto___54446]));

var G__54447 = (i__45258__auto___54446 + (1));
i__45258__auto___54446 = G__54447;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54444))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54444){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54444);
});})(g__54251__auto___54444))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__54251__auto___54444){
return (function (seq54381){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54381));
});})(g__54251__auto___54444))
;


var g__54251__auto___54448 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__54251__auto___54448){
return (function cljs$spec$impl$gen$string(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54449 = arguments.length;
var i__45258__auto___54450 = (0);
while(true){
if((i__45258__auto___54450 < len__45257__auto___54449)){
args__45264__auto__.push((arguments[i__45258__auto___54450]));

var G__54451 = (i__45258__auto___54450 + (1));
i__45258__auto___54450 = G__54451;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54448))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54448){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54448);
});})(g__54251__auto___54448))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__54251__auto___54448){
return (function (seq54382){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54382));
});})(g__54251__auto___54448))
;


var g__54251__auto___54452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__54251__auto___54452){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54453 = arguments.length;
var i__45258__auto___54454 = (0);
while(true){
if((i__45258__auto___54454 < len__45257__auto___54453)){
args__45264__auto__.push((arguments[i__45258__auto___54454]));

var G__54455 = (i__45258__auto___54454 + (1));
i__45258__auto___54454 = G__54455;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54452))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54452){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54452);
});})(g__54251__auto___54452))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__54251__auto___54452){
return (function (seq54383){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54383));
});})(g__54251__auto___54452))
;


var g__54251__auto___54456 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__54251__auto___54456){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54457 = arguments.length;
var i__45258__auto___54458 = (0);
while(true){
if((i__45258__auto___54458 < len__45257__auto___54457)){
args__45264__auto__.push((arguments[i__45258__auto___54458]));

var G__54459 = (i__45258__auto___54458 + (1));
i__45258__auto___54458 = G__54459;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54456))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54456){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54456);
});})(g__54251__auto___54456))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__54251__auto___54456){
return (function (seq54384){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54384));
});})(g__54251__auto___54456))
;


var g__54251__auto___54460 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__54251__auto___54460){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54461 = arguments.length;
var i__45258__auto___54462 = (0);
while(true){
if((i__45258__auto___54462 < len__45257__auto___54461)){
args__45264__auto__.push((arguments[i__45258__auto___54462]));

var G__54463 = (i__45258__auto___54462 + (1));
i__45258__auto___54462 = G__54463;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54460))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54460){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54460);
});})(g__54251__auto___54460))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__54251__auto___54460){
return (function (seq54385){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54385));
});})(g__54251__auto___54460))
;


var g__54251__auto___54464 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__54251__auto___54464){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54465 = arguments.length;
var i__45258__auto___54466 = (0);
while(true){
if((i__45258__auto___54466 < len__45257__auto___54465)){
args__45264__auto__.push((arguments[i__45258__auto___54466]));

var G__54467 = (i__45258__auto___54466 + (1));
i__45258__auto___54466 = G__54467;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54464))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54464){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54464);
});})(g__54251__auto___54464))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__54251__auto___54464){
return (function (seq54386){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54386));
});})(g__54251__auto___54464))
;


var g__54251__auto___54468 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__54251__auto___54468){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54469 = arguments.length;
var i__45258__auto___54470 = (0);
while(true){
if((i__45258__auto___54470 < len__45257__auto___54469)){
args__45264__auto__.push((arguments[i__45258__auto___54470]));

var G__54471 = (i__45258__auto___54470 + (1));
i__45258__auto___54470 = G__54471;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});})(g__54251__auto___54468))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54251__auto___54468){
return (function (args){
return cljs.core.deref.call(null,g__54251__auto___54468);
});})(g__54251__auto___54468))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__54251__auto___54468){
return (function (seq54387){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54387));
});})(g__54251__auto___54468))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__45264__auto__ = [];
var len__45257__auto___54474 = arguments.length;
var i__45258__auto___54475 = (0);
while(true){
if((i__45258__auto___54475 < len__45257__auto___54474)){
args__45264__auto__.push((arguments[i__45258__auto___54475]));

var G__54476 = (i__45258__auto___54475 + (1));
i__45258__auto___54475 = G__54476;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((0) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45265__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__54472_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__54472_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq54473){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54473));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__54477_SHARP_){
return (new Date(p1__54477_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1481668789658