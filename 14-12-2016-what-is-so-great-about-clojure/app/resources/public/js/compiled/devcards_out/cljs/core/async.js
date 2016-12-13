// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args48044 = [];
var len__45257__auto___48050 = arguments.length;
var i__45258__auto___48051 = (0);
while(true){
if((i__45258__auto___48051 < len__45257__auto___48050)){
args48044.push((arguments[i__45258__auto___48051]));

var G__48052 = (i__45258__auto___48051 + (1));
i__45258__auto___48051 = G__48052;
continue;
} else {
}
break;
}

var G__48046 = args48044.length;
switch (G__48046) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48044.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async48047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48047 = (function (f,blockable,meta48048){
this.f = f;
this.blockable = blockable;
this.meta48048 = meta48048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48049,meta48048__$1){
var self__ = this;
var _48049__$1 = this;
return (new cljs.core.async.t_cljs$core$async48047(self__.f,self__.blockable,meta48048__$1));
});

cljs.core.async.t_cljs$core$async48047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48049){
var self__ = this;
var _48049__$1 = this;
return self__.meta48048;
});

cljs.core.async.t_cljs$core$async48047.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async48047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async48047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48048","meta48048",1913168724,null)], null);
});

cljs.core.async.t_cljs$core$async48047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48047";

cljs.core.async.t_cljs$core$async48047.cljs$lang$ctorPrWriter = (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async48047");
});

cljs.core.async.__GT_t_cljs$core$async48047 = (function cljs$core$async$__GT_t_cljs$core$async48047(f__$1,blockable__$1,meta48048){
return (new cljs.core.async.t_cljs$core$async48047(f__$1,blockable__$1,meta48048));
});

}

return (new cljs.core.async.t_cljs$core$async48047(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args48056 = [];
var len__45257__auto___48059 = arguments.length;
var i__45258__auto___48060 = (0);
while(true){
if((i__45258__auto___48060 < len__45257__auto___48059)){
args48056.push((arguments[i__45258__auto___48060]));

var G__48061 = (i__45258__auto___48060 + (1));
i__45258__auto___48060 = G__48061;
continue;
} else {
}
break;
}

var G__48058 = args48056.length;
switch (G__48058) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48056.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args48063 = [];
var len__45257__auto___48066 = arguments.length;
var i__45258__auto___48067 = (0);
while(true){
if((i__45258__auto___48067 < len__45257__auto___48066)){
args48063.push((arguments[i__45258__auto___48067]));

var G__48068 = (i__45258__auto___48067 + (1));
i__45258__auto___48067 = G__48068;
continue;
} else {
}
break;
}

var G__48065 = args48063.length;
switch (G__48065) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48063.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args48070 = [];
var len__45257__auto___48073 = arguments.length;
var i__45258__auto___48074 = (0);
while(true){
if((i__45258__auto___48074 < len__45257__auto___48073)){
args48070.push((arguments[i__45258__auto___48074]));

var G__48075 = (i__45258__auto___48074 + (1));
i__45258__auto___48074 = G__48075;
continue;
} else {
}
break;
}

var G__48072 = args48070.length;
switch (G__48072) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48070.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_48077 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48077);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48077,ret){
return (function (){
return fn1.call(null,val_48077);
});})(val_48077,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args48078 = [];
var len__45257__auto___48081 = arguments.length;
var i__45258__auto___48082 = (0);
while(true){
if((i__45258__auto___48082 < len__45257__auto___48081)){
args48078.push((arguments[i__45258__auto___48082]));

var G__48083 = (i__45258__auto___48082 + (1));
i__45258__auto___48082 = G__48083;
continue;
} else {
}
break;
}

var G__48080 = args48078.length;
switch (G__48080) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48078.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__45097__auto___48085 = n;
var x_48086 = (0);
while(true){
if((x_48086 < n__45097__auto___48085)){
(a[x_48086] = (0));

var G__48087 = (x_48086 + (1));
x_48086 = G__48087;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__48088 = (i + (1));
i = G__48088;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async48092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48092 = (function (alt_flag,flag,meta48093){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta48093 = meta48093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48094,meta48093__$1){
var self__ = this;
var _48094__$1 = this;
return (new cljs.core.async.t_cljs$core$async48092(self__.alt_flag,self__.flag,meta48093__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async48092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48094){
var self__ = this;
var _48094__$1 = this;
return self__.meta48093;
});})(flag))
;

cljs.core.async.t_cljs$core$async48092.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48092.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async48092.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48092.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48092.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48093","meta48093",2108102851,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async48092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48092";

cljs.core.async.t_cljs$core$async48092.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async48092");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async48092 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48092(alt_flag__$1,flag__$1,meta48093){
return (new cljs.core.async.t_cljs$core$async48092(alt_flag__$1,flag__$1,meta48093));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async48092(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async48098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48098 = (function (alt_handler,flag,cb,meta48099){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta48099 = meta48099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48100,meta48099__$1){
var self__ = this;
var _48100__$1 = this;
return (new cljs.core.async.t_cljs$core$async48098(self__.alt_handler,self__.flag,self__.cb,meta48099__$1));
});

cljs.core.async.t_cljs$core$async48098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48100){
var self__ = this;
var _48100__$1 = this;
return self__.meta48099;
});

cljs.core.async.t_cljs$core$async48098.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async48098.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async48098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48099","meta48099",-1722512346,null)], null);
});

cljs.core.async.t_cljs$core$async48098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48098";

cljs.core.async.t_cljs$core$async48098.cljs$lang$ctorPrWriter = (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async48098");
});

cljs.core.async.__GT_t_cljs$core$async48098 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48098(alt_handler__$1,flag__$1,cb__$1,meta48099){
return (new cljs.core.async.t_cljs$core$async48098(alt_handler__$1,flag__$1,cb__$1,meta48099));
});

}

return (new cljs.core.async.t_cljs$core$async48098(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48101_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48101_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48102_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48102_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__44182__auto__ = wport;
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48103 = (i + (1));
i = G__48103;
continue;
}
} else {
return null;
}
break;
}
})();
var or__44182__auto__ = ret;
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__44170__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__44170__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__44170__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__45264__auto__ = [];
var len__45257__auto___48109 = arguments.length;
var i__45258__auto___48110 = (0);
while(true){
if((i__45258__auto___48110 < len__45257__auto___48109)){
args__45264__auto__.push((arguments[i__45258__auto___48110]));

var G__48111 = (i__45258__auto___48110 + (1));
i__45258__auto___48110 = G__48111;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((1) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45265__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48106){
var map__48107 = p__48106;
var map__48107__$1 = ((((!((map__48107 == null)))?((((map__48107.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48107.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48107):map__48107);
var opts = map__48107__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48104){
var G__48105 = cljs.core.first.call(null,seq48104);
var seq48104__$1 = cljs.core.next.call(null,seq48104);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48105,seq48104__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args48112 = [];
var len__45257__auto___48162 = arguments.length;
var i__45258__auto___48163 = (0);
while(true){
if((i__45258__auto___48163 < len__45257__auto___48162)){
args48112.push((arguments[i__45258__auto___48163]));

var G__48164 = (i__45258__auto___48163 + (1));
i__45258__auto___48163 = G__48164;
continue;
} else {
}
break;
}

var G__48114 = args48112.length;
switch (G__48114) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48112.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47999__auto___48166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___48166){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___48166){
return (function (state_48138){
var state_val_48139 = (state_48138[(1)]);
if((state_val_48139 === (7))){
var inst_48134 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48140_48167 = state_48138__$1;
(statearr_48140_48167[(2)] = inst_48134);

(statearr_48140_48167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (1))){
var state_48138__$1 = state_48138;
var statearr_48141_48168 = state_48138__$1;
(statearr_48141_48168[(2)] = null);

(statearr_48141_48168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (4))){
var inst_48117 = (state_48138[(7)]);
var inst_48117__$1 = (state_48138[(2)]);
var inst_48118 = (inst_48117__$1 == null);
var state_48138__$1 = (function (){var statearr_48142 = state_48138;
(statearr_48142[(7)] = inst_48117__$1);

return statearr_48142;
})();
if(cljs.core.truth_(inst_48118)){
var statearr_48143_48169 = state_48138__$1;
(statearr_48143_48169[(1)] = (5));

} else {
var statearr_48144_48170 = state_48138__$1;
(statearr_48144_48170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (13))){
var state_48138__$1 = state_48138;
var statearr_48145_48171 = state_48138__$1;
(statearr_48145_48171[(2)] = null);

(statearr_48145_48171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (6))){
var inst_48117 = (state_48138[(7)]);
var state_48138__$1 = state_48138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48138__$1,(11),to,inst_48117);
} else {
if((state_val_48139 === (3))){
var inst_48136 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48138__$1,inst_48136);
} else {
if((state_val_48139 === (12))){
var state_48138__$1 = state_48138;
var statearr_48146_48172 = state_48138__$1;
(statearr_48146_48172[(2)] = null);

(statearr_48146_48172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (2))){
var state_48138__$1 = state_48138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48138__$1,(4),from);
} else {
if((state_val_48139 === (11))){
var inst_48127 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
if(cljs.core.truth_(inst_48127)){
var statearr_48147_48173 = state_48138__$1;
(statearr_48147_48173[(1)] = (12));

} else {
var statearr_48148_48174 = state_48138__$1;
(statearr_48148_48174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (9))){
var state_48138__$1 = state_48138;
var statearr_48149_48175 = state_48138__$1;
(statearr_48149_48175[(2)] = null);

(statearr_48149_48175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (5))){
var state_48138__$1 = state_48138;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48150_48176 = state_48138__$1;
(statearr_48150_48176[(1)] = (8));

} else {
var statearr_48151_48177 = state_48138__$1;
(statearr_48151_48177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (14))){
var inst_48132 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48152_48178 = state_48138__$1;
(statearr_48152_48178[(2)] = inst_48132);

(statearr_48152_48178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (10))){
var inst_48124 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48153_48179 = state_48138__$1;
(statearr_48153_48179[(2)] = inst_48124);

(statearr_48153_48179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (8))){
var inst_48121 = cljs.core.async.close_BANG_.call(null,to);
var state_48138__$1 = state_48138;
var statearr_48154_48180 = state_48138__$1;
(statearr_48154_48180[(2)] = inst_48121);

(statearr_48154_48180[(1)] = (10));


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
});})(c__47999__auto___48166))
;
return ((function (switch__47887__auto__,c__47999__auto___48166){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_48158 = [null,null,null,null,null,null,null,null];
(statearr_48158[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_48158[(1)] = (1));

return statearr_48158;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_48138){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_48138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e48159){if((e48159 instanceof Object)){
var ex__47891__auto__ = e48159;
var statearr_48160_48181 = state_48138;
(statearr_48160_48181[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48182 = state_48138;
state_48138 = G__48182;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_48138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_48138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___48166))
})();
var state__48001__auto__ = (function (){var statearr_48161 = f__48000__auto__.call(null);
(statearr_48161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___48166);

return statearr_48161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___48166))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__48370){
var vec__48371 = p__48370;
var v = cljs.core.nth.call(null,vec__48371,(0),null);
var p = cljs.core.nth.call(null,vec__48371,(1),null);
var job = vec__48371;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__47999__auto___48557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___48557,res,vec__48371,v,p,job,jobs,results){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___48557,res,vec__48371,v,p,job,jobs,results){
return (function (state_48378){
var state_val_48379 = (state_48378[(1)]);
if((state_val_48379 === (1))){
var state_48378__$1 = state_48378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48378__$1,(2),res,v);
} else {
if((state_val_48379 === (2))){
var inst_48375 = (state_48378[(2)]);
var inst_48376 = cljs.core.async.close_BANG_.call(null,res);
var state_48378__$1 = (function (){var statearr_48380 = state_48378;
(statearr_48380[(7)] = inst_48375);

return statearr_48380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48378__$1,inst_48376);
} else {
return null;
}
}
});})(c__47999__auto___48557,res,vec__48371,v,p,job,jobs,results))
;
return ((function (switch__47887__auto__,c__47999__auto___48557,res,vec__48371,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0 = (function (){
var statearr_48384 = [null,null,null,null,null,null,null,null];
(statearr_48384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__);

(statearr_48384[(1)] = (1));

return statearr_48384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1 = (function (state_48378){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_48378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e48385){if((e48385 instanceof Object)){
var ex__47891__auto__ = e48385;
var statearr_48386_48558 = state_48378;
(statearr_48386_48558[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48559 = state_48378;
state_48378 = G__48559;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = function(state_48378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1.call(this,state_48378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___48557,res,vec__48371,v,p,job,jobs,results))
})();
var state__48001__auto__ = (function (){var statearr_48387 = f__48000__auto__.call(null);
(statearr_48387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___48557);

return statearr_48387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___48557,res,vec__48371,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__48388){
var vec__48389 = p__48388;
var v = cljs.core.nth.call(null,vec__48389,(0),null);
var p = cljs.core.nth.call(null,vec__48389,(1),null);
var job = vec__48389;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__45097__auto___48560 = n;
var __48561 = (0);
while(true){
if((__48561 < n__45097__auto___48560)){
var G__48392_48562 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48392_48562) {
case "compute":
var c__47999__auto___48564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48561,c__47999__auto___48564,G__48392_48562,n__45097__auto___48560,jobs,results,process,async){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (__48561,c__47999__auto___48564,G__48392_48562,n__45097__auto___48560,jobs,results,process,async){
return (function (state_48405){
var state_val_48406 = (state_48405[(1)]);
if((state_val_48406 === (1))){
var state_48405__$1 = state_48405;
var statearr_48407_48565 = state_48405__$1;
(statearr_48407_48565[(2)] = null);

(statearr_48407_48565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48406 === (2))){
var state_48405__$1 = state_48405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48405__$1,(4),jobs);
} else {
if((state_val_48406 === (3))){
var inst_48403 = (state_48405[(2)]);
var state_48405__$1 = state_48405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48405__$1,inst_48403);
} else {
if((state_val_48406 === (4))){
var inst_48395 = (state_48405[(2)]);
var inst_48396 = process.call(null,inst_48395);
var state_48405__$1 = state_48405;
if(cljs.core.truth_(inst_48396)){
var statearr_48408_48566 = state_48405__$1;
(statearr_48408_48566[(1)] = (5));

} else {
var statearr_48409_48567 = state_48405__$1;
(statearr_48409_48567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48406 === (5))){
var state_48405__$1 = state_48405;
var statearr_48410_48568 = state_48405__$1;
(statearr_48410_48568[(2)] = null);

(statearr_48410_48568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48406 === (6))){
var state_48405__$1 = state_48405;
var statearr_48411_48569 = state_48405__$1;
(statearr_48411_48569[(2)] = null);

(statearr_48411_48569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48406 === (7))){
var inst_48401 = (state_48405[(2)]);
var state_48405__$1 = state_48405;
var statearr_48412_48570 = state_48405__$1;
(statearr_48412_48570[(2)] = inst_48401);

(statearr_48412_48570[(1)] = (3));


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
});})(__48561,c__47999__auto___48564,G__48392_48562,n__45097__auto___48560,jobs,results,process,async))
;
return ((function (__48561,switch__47887__auto__,c__47999__auto___48564,G__48392_48562,n__45097__auto___48560,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0 = (function (){
var statearr_48416 = [null,null,null,null,null,null,null];
(statearr_48416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__);

(statearr_48416[(1)] = (1));

return statearr_48416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1 = (function (state_48405){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_48405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e48417){if((e48417 instanceof Object)){
var ex__47891__auto__ = e48417;
var statearr_48418_48571 = state_48405;
(statearr_48418_48571[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48572 = state_48405;
state_48405 = G__48572;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = function(state_48405){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1.call(this,state_48405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__;
})()
;})(__48561,switch__47887__auto__,c__47999__auto___48564,G__48392_48562,n__45097__auto___48560,jobs,results,process,async))
})();
var state__48001__auto__ = (function (){var statearr_48419 = f__48000__auto__.call(null);
(statearr_48419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___48564);

return statearr_48419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(__48561,c__47999__auto___48564,G__48392_48562,n__45097__auto___48560,jobs,results,process,async))
);


break;
case "async":
var c__47999__auto___48573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48561,c__47999__auto___48573,G__48392_48562,n__45097__auto___48560,jobs,results,process,async){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (__48561,c__47999__auto___48573,G__48392_48562,n__45097__auto___48560,jobs,results,process,async){
return (function (state_48432){
var state_val_48433 = (state_48432[(1)]);
if((state_val_48433 === (1))){
var state_48432__$1 = state_48432;
var statearr_48434_48574 = state_48432__$1;
(statearr_48434_48574[(2)] = null);

(statearr_48434_48574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48433 === (2))){
var state_48432__$1 = state_48432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48432__$1,(4),jobs);
} else {
if((state_val_48433 === (3))){
var inst_48430 = (state_48432[(2)]);
var state_48432__$1 = state_48432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48432__$1,inst_48430);
} else {
if((state_val_48433 === (4))){
var inst_48422 = (state_48432[(2)]);
var inst_48423 = async.call(null,inst_48422);
var state_48432__$1 = state_48432;
if(cljs.core.truth_(inst_48423)){
var statearr_48435_48575 = state_48432__$1;
(statearr_48435_48575[(1)] = (5));

} else {
var statearr_48436_48576 = state_48432__$1;
(statearr_48436_48576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48433 === (5))){
var state_48432__$1 = state_48432;
var statearr_48437_48577 = state_48432__$1;
(statearr_48437_48577[(2)] = null);

(statearr_48437_48577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48433 === (6))){
var state_48432__$1 = state_48432;
var statearr_48438_48578 = state_48432__$1;
(statearr_48438_48578[(2)] = null);

(statearr_48438_48578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48433 === (7))){
var inst_48428 = (state_48432[(2)]);
var state_48432__$1 = state_48432;
var statearr_48439_48579 = state_48432__$1;
(statearr_48439_48579[(2)] = inst_48428);

(statearr_48439_48579[(1)] = (3));


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
});})(__48561,c__47999__auto___48573,G__48392_48562,n__45097__auto___48560,jobs,results,process,async))
;
return ((function (__48561,switch__47887__auto__,c__47999__auto___48573,G__48392_48562,n__45097__auto___48560,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0 = (function (){
var statearr_48443 = [null,null,null,null,null,null,null];
(statearr_48443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__);

(statearr_48443[(1)] = (1));

return statearr_48443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1 = (function (state_48432){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_48432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e48444){if((e48444 instanceof Object)){
var ex__47891__auto__ = e48444;
var statearr_48445_48580 = state_48432;
(statearr_48445_48580[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48581 = state_48432;
state_48432 = G__48581;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = function(state_48432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1.call(this,state_48432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__;
})()
;})(__48561,switch__47887__auto__,c__47999__auto___48573,G__48392_48562,n__45097__auto___48560,jobs,results,process,async))
})();
var state__48001__auto__ = (function (){var statearr_48446 = f__48000__auto__.call(null);
(statearr_48446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___48573);

return statearr_48446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(__48561,c__47999__auto___48573,G__48392_48562,n__45097__auto___48560,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__48582 = (__48561 + (1));
__48561 = G__48582;
continue;
} else {
}
break;
}

var c__47999__auto___48583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___48583,jobs,results,process,async){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___48583,jobs,results,process,async){
return (function (state_48468){
var state_val_48469 = (state_48468[(1)]);
if((state_val_48469 === (1))){
var state_48468__$1 = state_48468;
var statearr_48470_48584 = state_48468__$1;
(statearr_48470_48584[(2)] = null);

(statearr_48470_48584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48469 === (2))){
var state_48468__$1 = state_48468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48468__$1,(4),from);
} else {
if((state_val_48469 === (3))){
var inst_48466 = (state_48468[(2)]);
var state_48468__$1 = state_48468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48468__$1,inst_48466);
} else {
if((state_val_48469 === (4))){
var inst_48449 = (state_48468[(7)]);
var inst_48449__$1 = (state_48468[(2)]);
var inst_48450 = (inst_48449__$1 == null);
var state_48468__$1 = (function (){var statearr_48471 = state_48468;
(statearr_48471[(7)] = inst_48449__$1);

return statearr_48471;
})();
if(cljs.core.truth_(inst_48450)){
var statearr_48472_48585 = state_48468__$1;
(statearr_48472_48585[(1)] = (5));

} else {
var statearr_48473_48586 = state_48468__$1;
(statearr_48473_48586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48469 === (5))){
var inst_48452 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48468__$1 = state_48468;
var statearr_48474_48587 = state_48468__$1;
(statearr_48474_48587[(2)] = inst_48452);

(statearr_48474_48587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48469 === (6))){
var inst_48449 = (state_48468[(7)]);
var inst_48454 = (state_48468[(8)]);
var inst_48454__$1 = cljs.core.async.chan.call(null,(1));
var inst_48455 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48456 = [inst_48449,inst_48454__$1];
var inst_48457 = (new cljs.core.PersistentVector(null,2,(5),inst_48455,inst_48456,null));
var state_48468__$1 = (function (){var statearr_48475 = state_48468;
(statearr_48475[(8)] = inst_48454__$1);

return statearr_48475;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48468__$1,(8),jobs,inst_48457);
} else {
if((state_val_48469 === (7))){
var inst_48464 = (state_48468[(2)]);
var state_48468__$1 = state_48468;
var statearr_48476_48588 = state_48468__$1;
(statearr_48476_48588[(2)] = inst_48464);

(statearr_48476_48588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48469 === (8))){
var inst_48454 = (state_48468[(8)]);
var inst_48459 = (state_48468[(2)]);
var state_48468__$1 = (function (){var statearr_48477 = state_48468;
(statearr_48477[(9)] = inst_48459);

return statearr_48477;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48468__$1,(9),results,inst_48454);
} else {
if((state_val_48469 === (9))){
var inst_48461 = (state_48468[(2)]);
var state_48468__$1 = (function (){var statearr_48478 = state_48468;
(statearr_48478[(10)] = inst_48461);

return statearr_48478;
})();
var statearr_48479_48589 = state_48468__$1;
(statearr_48479_48589[(2)] = null);

(statearr_48479_48589[(1)] = (2));


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
});})(c__47999__auto___48583,jobs,results,process,async))
;
return ((function (switch__47887__auto__,c__47999__auto___48583,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0 = (function (){
var statearr_48483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__);

(statearr_48483[(1)] = (1));

return statearr_48483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1 = (function (state_48468){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_48468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e48484){if((e48484 instanceof Object)){
var ex__47891__auto__ = e48484;
var statearr_48485_48590 = state_48468;
(statearr_48485_48590[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48591 = state_48468;
state_48468 = G__48591;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = function(state_48468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1.call(this,state_48468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___48583,jobs,results,process,async))
})();
var state__48001__auto__ = (function (){var statearr_48486 = f__48000__auto__.call(null);
(statearr_48486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___48583);

return statearr_48486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___48583,jobs,results,process,async))
);


var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__,jobs,results,process,async){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__,jobs,results,process,async){
return (function (state_48524){
var state_val_48525 = (state_48524[(1)]);
if((state_val_48525 === (7))){
var inst_48520 = (state_48524[(2)]);
var state_48524__$1 = state_48524;
var statearr_48526_48592 = state_48524__$1;
(statearr_48526_48592[(2)] = inst_48520);

(statearr_48526_48592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (20))){
var state_48524__$1 = state_48524;
var statearr_48527_48593 = state_48524__$1;
(statearr_48527_48593[(2)] = null);

(statearr_48527_48593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (1))){
var state_48524__$1 = state_48524;
var statearr_48528_48594 = state_48524__$1;
(statearr_48528_48594[(2)] = null);

(statearr_48528_48594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (4))){
var inst_48489 = (state_48524[(7)]);
var inst_48489__$1 = (state_48524[(2)]);
var inst_48490 = (inst_48489__$1 == null);
var state_48524__$1 = (function (){var statearr_48529 = state_48524;
(statearr_48529[(7)] = inst_48489__$1);

return statearr_48529;
})();
if(cljs.core.truth_(inst_48490)){
var statearr_48530_48595 = state_48524__$1;
(statearr_48530_48595[(1)] = (5));

} else {
var statearr_48531_48596 = state_48524__$1;
(statearr_48531_48596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (15))){
var inst_48502 = (state_48524[(8)]);
var state_48524__$1 = state_48524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48524__$1,(18),to,inst_48502);
} else {
if((state_val_48525 === (21))){
var inst_48515 = (state_48524[(2)]);
var state_48524__$1 = state_48524;
var statearr_48532_48597 = state_48524__$1;
(statearr_48532_48597[(2)] = inst_48515);

(statearr_48532_48597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (13))){
var inst_48517 = (state_48524[(2)]);
var state_48524__$1 = (function (){var statearr_48533 = state_48524;
(statearr_48533[(9)] = inst_48517);

return statearr_48533;
})();
var statearr_48534_48598 = state_48524__$1;
(statearr_48534_48598[(2)] = null);

(statearr_48534_48598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (6))){
var inst_48489 = (state_48524[(7)]);
var state_48524__$1 = state_48524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48524__$1,(11),inst_48489);
} else {
if((state_val_48525 === (17))){
var inst_48510 = (state_48524[(2)]);
var state_48524__$1 = state_48524;
if(cljs.core.truth_(inst_48510)){
var statearr_48535_48599 = state_48524__$1;
(statearr_48535_48599[(1)] = (19));

} else {
var statearr_48536_48600 = state_48524__$1;
(statearr_48536_48600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (3))){
var inst_48522 = (state_48524[(2)]);
var state_48524__$1 = state_48524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48524__$1,inst_48522);
} else {
if((state_val_48525 === (12))){
var inst_48499 = (state_48524[(10)]);
var state_48524__$1 = state_48524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48524__$1,(14),inst_48499);
} else {
if((state_val_48525 === (2))){
var state_48524__$1 = state_48524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48524__$1,(4),results);
} else {
if((state_val_48525 === (19))){
var state_48524__$1 = state_48524;
var statearr_48537_48601 = state_48524__$1;
(statearr_48537_48601[(2)] = null);

(statearr_48537_48601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (11))){
var inst_48499 = (state_48524[(2)]);
var state_48524__$1 = (function (){var statearr_48538 = state_48524;
(statearr_48538[(10)] = inst_48499);

return statearr_48538;
})();
var statearr_48539_48602 = state_48524__$1;
(statearr_48539_48602[(2)] = null);

(statearr_48539_48602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (9))){
var state_48524__$1 = state_48524;
var statearr_48540_48603 = state_48524__$1;
(statearr_48540_48603[(2)] = null);

(statearr_48540_48603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (5))){
var state_48524__$1 = state_48524;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48541_48604 = state_48524__$1;
(statearr_48541_48604[(1)] = (8));

} else {
var statearr_48542_48605 = state_48524__$1;
(statearr_48542_48605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (14))){
var inst_48502 = (state_48524[(8)]);
var inst_48504 = (state_48524[(11)]);
var inst_48502__$1 = (state_48524[(2)]);
var inst_48503 = (inst_48502__$1 == null);
var inst_48504__$1 = cljs.core.not.call(null,inst_48503);
var state_48524__$1 = (function (){var statearr_48543 = state_48524;
(statearr_48543[(8)] = inst_48502__$1);

(statearr_48543[(11)] = inst_48504__$1);

return statearr_48543;
})();
if(inst_48504__$1){
var statearr_48544_48606 = state_48524__$1;
(statearr_48544_48606[(1)] = (15));

} else {
var statearr_48545_48607 = state_48524__$1;
(statearr_48545_48607[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (16))){
var inst_48504 = (state_48524[(11)]);
var state_48524__$1 = state_48524;
var statearr_48546_48608 = state_48524__$1;
(statearr_48546_48608[(2)] = inst_48504);

(statearr_48546_48608[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (10))){
var inst_48496 = (state_48524[(2)]);
var state_48524__$1 = state_48524;
var statearr_48547_48609 = state_48524__$1;
(statearr_48547_48609[(2)] = inst_48496);

(statearr_48547_48609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (18))){
var inst_48507 = (state_48524[(2)]);
var state_48524__$1 = state_48524;
var statearr_48548_48610 = state_48524__$1;
(statearr_48548_48610[(2)] = inst_48507);

(statearr_48548_48610[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48525 === (8))){
var inst_48493 = cljs.core.async.close_BANG_.call(null,to);
var state_48524__$1 = state_48524;
var statearr_48549_48611 = state_48524__$1;
(statearr_48549_48611[(2)] = inst_48493);

(statearr_48549_48611[(1)] = (10));


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
});})(c__47999__auto__,jobs,results,process,async))
;
return ((function (switch__47887__auto__,c__47999__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0 = (function (){
var statearr_48553 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__);

(statearr_48553[(1)] = (1));

return statearr_48553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1 = (function (state_48524){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_48524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e48554){if((e48554 instanceof Object)){
var ex__47891__auto__ = e48554;
var statearr_48555_48612 = state_48524;
(statearr_48555_48612[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48613 = state_48524;
state_48524 = G__48613;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__ = function(state_48524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1.call(this,state_48524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__,jobs,results,process,async))
})();
var state__48001__auto__ = (function (){var statearr_48556 = f__48000__auto__.call(null);
(statearr_48556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_48556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__,jobs,results,process,async))
);

return c__47999__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args48614 = [];
var len__45257__auto___48617 = arguments.length;
var i__45258__auto___48618 = (0);
while(true){
if((i__45258__auto___48618 < len__45257__auto___48617)){
args48614.push((arguments[i__45258__auto___48618]));

var G__48619 = (i__45258__auto___48618 + (1));
i__45258__auto___48618 = G__48619;
continue;
} else {
}
break;
}

var G__48616 = args48614.length;
switch (G__48616) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48614.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args48621 = [];
var len__45257__auto___48624 = arguments.length;
var i__45258__auto___48625 = (0);
while(true){
if((i__45258__auto___48625 < len__45257__auto___48624)){
args48621.push((arguments[i__45258__auto___48625]));

var G__48626 = (i__45258__auto___48625 + (1));
i__45258__auto___48625 = G__48626;
continue;
} else {
}
break;
}

var G__48623 = args48621.length;
switch (G__48623) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48621.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args48628 = [];
var len__45257__auto___48681 = arguments.length;
var i__45258__auto___48682 = (0);
while(true){
if((i__45258__auto___48682 < len__45257__auto___48681)){
args48628.push((arguments[i__45258__auto___48682]));

var G__48683 = (i__45258__auto___48682 + (1));
i__45258__auto___48682 = G__48683;
continue;
} else {
}
break;
}

var G__48630 = args48628.length;
switch (G__48630) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48628.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__47999__auto___48685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___48685,tc,fc){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___48685,tc,fc){
return (function (state_48656){
var state_val_48657 = (state_48656[(1)]);
if((state_val_48657 === (7))){
var inst_48652 = (state_48656[(2)]);
var state_48656__$1 = state_48656;
var statearr_48658_48686 = state_48656__$1;
(statearr_48658_48686[(2)] = inst_48652);

(statearr_48658_48686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (1))){
var state_48656__$1 = state_48656;
var statearr_48659_48687 = state_48656__$1;
(statearr_48659_48687[(2)] = null);

(statearr_48659_48687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (4))){
var inst_48633 = (state_48656[(7)]);
var inst_48633__$1 = (state_48656[(2)]);
var inst_48634 = (inst_48633__$1 == null);
var state_48656__$1 = (function (){var statearr_48660 = state_48656;
(statearr_48660[(7)] = inst_48633__$1);

return statearr_48660;
})();
if(cljs.core.truth_(inst_48634)){
var statearr_48661_48688 = state_48656__$1;
(statearr_48661_48688[(1)] = (5));

} else {
var statearr_48662_48689 = state_48656__$1;
(statearr_48662_48689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (13))){
var state_48656__$1 = state_48656;
var statearr_48663_48690 = state_48656__$1;
(statearr_48663_48690[(2)] = null);

(statearr_48663_48690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (6))){
var inst_48633 = (state_48656[(7)]);
var inst_48639 = p.call(null,inst_48633);
var state_48656__$1 = state_48656;
if(cljs.core.truth_(inst_48639)){
var statearr_48664_48691 = state_48656__$1;
(statearr_48664_48691[(1)] = (9));

} else {
var statearr_48665_48692 = state_48656__$1;
(statearr_48665_48692[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (3))){
var inst_48654 = (state_48656[(2)]);
var state_48656__$1 = state_48656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48656__$1,inst_48654);
} else {
if((state_val_48657 === (12))){
var state_48656__$1 = state_48656;
var statearr_48666_48693 = state_48656__$1;
(statearr_48666_48693[(2)] = null);

(statearr_48666_48693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (2))){
var state_48656__$1 = state_48656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48656__$1,(4),ch);
} else {
if((state_val_48657 === (11))){
var inst_48633 = (state_48656[(7)]);
var inst_48643 = (state_48656[(2)]);
var state_48656__$1 = state_48656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48656__$1,(8),inst_48643,inst_48633);
} else {
if((state_val_48657 === (9))){
var state_48656__$1 = state_48656;
var statearr_48667_48694 = state_48656__$1;
(statearr_48667_48694[(2)] = tc);

(statearr_48667_48694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (5))){
var inst_48636 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48637 = cljs.core.async.close_BANG_.call(null,fc);
var state_48656__$1 = (function (){var statearr_48668 = state_48656;
(statearr_48668[(8)] = inst_48636);

return statearr_48668;
})();
var statearr_48669_48695 = state_48656__$1;
(statearr_48669_48695[(2)] = inst_48637);

(statearr_48669_48695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (14))){
var inst_48650 = (state_48656[(2)]);
var state_48656__$1 = state_48656;
var statearr_48670_48696 = state_48656__$1;
(statearr_48670_48696[(2)] = inst_48650);

(statearr_48670_48696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (10))){
var state_48656__$1 = state_48656;
var statearr_48671_48697 = state_48656__$1;
(statearr_48671_48697[(2)] = fc);

(statearr_48671_48697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48657 === (8))){
var inst_48645 = (state_48656[(2)]);
var state_48656__$1 = state_48656;
if(cljs.core.truth_(inst_48645)){
var statearr_48672_48698 = state_48656__$1;
(statearr_48672_48698[(1)] = (12));

} else {
var statearr_48673_48699 = state_48656__$1;
(statearr_48673_48699[(1)] = (13));

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
});})(c__47999__auto___48685,tc,fc))
;
return ((function (switch__47887__auto__,c__47999__auto___48685,tc,fc){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_48677 = [null,null,null,null,null,null,null,null,null];
(statearr_48677[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_48677[(1)] = (1));

return statearr_48677;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_48656){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_48656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e48678){if((e48678 instanceof Object)){
var ex__47891__auto__ = e48678;
var statearr_48679_48700 = state_48656;
(statearr_48679_48700[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48701 = state_48656;
state_48656 = G__48701;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_48656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_48656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___48685,tc,fc))
})();
var state__48001__auto__ = (function (){var statearr_48680 = f__48000__auto__.call(null);
(statearr_48680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___48685);

return statearr_48680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___48685,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__){
return (function (state_48765){
var state_val_48766 = (state_48765[(1)]);
if((state_val_48766 === (7))){
var inst_48761 = (state_48765[(2)]);
var state_48765__$1 = state_48765;
var statearr_48767_48788 = state_48765__$1;
(statearr_48767_48788[(2)] = inst_48761);

(statearr_48767_48788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48766 === (1))){
var inst_48745 = init;
var state_48765__$1 = (function (){var statearr_48768 = state_48765;
(statearr_48768[(7)] = inst_48745);

return statearr_48768;
})();
var statearr_48769_48789 = state_48765__$1;
(statearr_48769_48789[(2)] = null);

(statearr_48769_48789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48766 === (4))){
var inst_48748 = (state_48765[(8)]);
var inst_48748__$1 = (state_48765[(2)]);
var inst_48749 = (inst_48748__$1 == null);
var state_48765__$1 = (function (){var statearr_48770 = state_48765;
(statearr_48770[(8)] = inst_48748__$1);

return statearr_48770;
})();
if(cljs.core.truth_(inst_48749)){
var statearr_48771_48790 = state_48765__$1;
(statearr_48771_48790[(1)] = (5));

} else {
var statearr_48772_48791 = state_48765__$1;
(statearr_48772_48791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48766 === (6))){
var inst_48745 = (state_48765[(7)]);
var inst_48752 = (state_48765[(9)]);
var inst_48748 = (state_48765[(8)]);
var inst_48752__$1 = f.call(null,inst_48745,inst_48748);
var inst_48753 = cljs.core.reduced_QMARK_.call(null,inst_48752__$1);
var state_48765__$1 = (function (){var statearr_48773 = state_48765;
(statearr_48773[(9)] = inst_48752__$1);

return statearr_48773;
})();
if(inst_48753){
var statearr_48774_48792 = state_48765__$1;
(statearr_48774_48792[(1)] = (8));

} else {
var statearr_48775_48793 = state_48765__$1;
(statearr_48775_48793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48766 === (3))){
var inst_48763 = (state_48765[(2)]);
var state_48765__$1 = state_48765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48765__$1,inst_48763);
} else {
if((state_val_48766 === (2))){
var state_48765__$1 = state_48765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48765__$1,(4),ch);
} else {
if((state_val_48766 === (9))){
var inst_48752 = (state_48765[(9)]);
var inst_48745 = inst_48752;
var state_48765__$1 = (function (){var statearr_48776 = state_48765;
(statearr_48776[(7)] = inst_48745);

return statearr_48776;
})();
var statearr_48777_48794 = state_48765__$1;
(statearr_48777_48794[(2)] = null);

(statearr_48777_48794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48766 === (5))){
var inst_48745 = (state_48765[(7)]);
var state_48765__$1 = state_48765;
var statearr_48778_48795 = state_48765__$1;
(statearr_48778_48795[(2)] = inst_48745);

(statearr_48778_48795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48766 === (10))){
var inst_48759 = (state_48765[(2)]);
var state_48765__$1 = state_48765;
var statearr_48779_48796 = state_48765__$1;
(statearr_48779_48796[(2)] = inst_48759);

(statearr_48779_48796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48766 === (8))){
var inst_48752 = (state_48765[(9)]);
var inst_48755 = cljs.core.deref.call(null,inst_48752);
var state_48765__$1 = state_48765;
var statearr_48780_48797 = state_48765__$1;
(statearr_48780_48797[(2)] = inst_48755);

(statearr_48780_48797[(1)] = (10));


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
});})(c__47999__auto__))
;
return ((function (switch__47887__auto__,c__47999__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__47888__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47888__auto____0 = (function (){
var statearr_48784 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48784[(0)] = cljs$core$async$reduce_$_state_machine__47888__auto__);

(statearr_48784[(1)] = (1));

return statearr_48784;
});
var cljs$core$async$reduce_$_state_machine__47888__auto____1 = (function (state_48765){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_48765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e48785){if((e48785 instanceof Object)){
var ex__47891__auto__ = e48785;
var statearr_48786_48798 = state_48765;
(statearr_48786_48798[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48799 = state_48765;
state_48765 = G__48799;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47888__auto__ = function(state_48765){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47888__auto____1.call(this,state_48765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47888__auto____0;
cljs$core$async$reduce_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47888__auto____1;
return cljs$core$async$reduce_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__))
})();
var state__48001__auto__ = (function (){var statearr_48787 = f__48000__auto__.call(null);
(statearr_48787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_48787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__))
);

return c__47999__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args48800 = [];
var len__45257__auto___48852 = arguments.length;
var i__45258__auto___48853 = (0);
while(true){
if((i__45258__auto___48853 < len__45257__auto___48852)){
args48800.push((arguments[i__45258__auto___48853]));

var G__48854 = (i__45258__auto___48853 + (1));
i__45258__auto___48853 = G__48854;
continue;
} else {
}
break;
}

var G__48802 = args48800.length;
switch (G__48802) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48800.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__){
return (function (state_48827){
var state_val_48828 = (state_48827[(1)]);
if((state_val_48828 === (7))){
var inst_48809 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48829_48856 = state_48827__$1;
(statearr_48829_48856[(2)] = inst_48809);

(statearr_48829_48856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (1))){
var inst_48803 = cljs.core.seq.call(null,coll);
var inst_48804 = inst_48803;
var state_48827__$1 = (function (){var statearr_48830 = state_48827;
(statearr_48830[(7)] = inst_48804);

return statearr_48830;
})();
var statearr_48831_48857 = state_48827__$1;
(statearr_48831_48857[(2)] = null);

(statearr_48831_48857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (4))){
var inst_48804 = (state_48827[(7)]);
var inst_48807 = cljs.core.first.call(null,inst_48804);
var state_48827__$1 = state_48827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48827__$1,(7),ch,inst_48807);
} else {
if((state_val_48828 === (13))){
var inst_48821 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48832_48858 = state_48827__$1;
(statearr_48832_48858[(2)] = inst_48821);

(statearr_48832_48858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (6))){
var inst_48812 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
if(cljs.core.truth_(inst_48812)){
var statearr_48833_48859 = state_48827__$1;
(statearr_48833_48859[(1)] = (8));

} else {
var statearr_48834_48860 = state_48827__$1;
(statearr_48834_48860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (3))){
var inst_48825 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48827__$1,inst_48825);
} else {
if((state_val_48828 === (12))){
var state_48827__$1 = state_48827;
var statearr_48835_48861 = state_48827__$1;
(statearr_48835_48861[(2)] = null);

(statearr_48835_48861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (2))){
var inst_48804 = (state_48827[(7)]);
var state_48827__$1 = state_48827;
if(cljs.core.truth_(inst_48804)){
var statearr_48836_48862 = state_48827__$1;
(statearr_48836_48862[(1)] = (4));

} else {
var statearr_48837_48863 = state_48827__$1;
(statearr_48837_48863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (11))){
var inst_48818 = cljs.core.async.close_BANG_.call(null,ch);
var state_48827__$1 = state_48827;
var statearr_48838_48864 = state_48827__$1;
(statearr_48838_48864[(2)] = inst_48818);

(statearr_48838_48864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (9))){
var state_48827__$1 = state_48827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48839_48865 = state_48827__$1;
(statearr_48839_48865[(1)] = (11));

} else {
var statearr_48840_48866 = state_48827__$1;
(statearr_48840_48866[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (5))){
var inst_48804 = (state_48827[(7)]);
var state_48827__$1 = state_48827;
var statearr_48841_48867 = state_48827__$1;
(statearr_48841_48867[(2)] = inst_48804);

(statearr_48841_48867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (10))){
var inst_48823 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48842_48868 = state_48827__$1;
(statearr_48842_48868[(2)] = inst_48823);

(statearr_48842_48868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (8))){
var inst_48804 = (state_48827[(7)]);
var inst_48814 = cljs.core.next.call(null,inst_48804);
var inst_48804__$1 = inst_48814;
var state_48827__$1 = (function (){var statearr_48843 = state_48827;
(statearr_48843[(7)] = inst_48804__$1);

return statearr_48843;
})();
var statearr_48844_48869 = state_48827__$1;
(statearr_48844_48869[(2)] = null);

(statearr_48844_48869[(1)] = (2));


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
});})(c__47999__auto__))
;
return ((function (switch__47887__auto__,c__47999__auto__){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_48848 = [null,null,null,null,null,null,null,null];
(statearr_48848[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_48848[(1)] = (1));

return statearr_48848;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_48827){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_48827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e48849){if((e48849 instanceof Object)){
var ex__47891__auto__ = e48849;
var statearr_48850_48870 = state_48827;
(statearr_48850_48870[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48871 = state_48827;
state_48827 = G__48871;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_48827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_48827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__))
})();
var state__48001__auto__ = (function (){var statearr_48851 = f__48000__auto__.call(null);
(statearr_48851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_48851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__))
);

return c__47999__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__44845__auto__ = (((_ == null))?null:_);
var m__44846__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,_);
} else {
var m__44846__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__44845__auto__ = (((m == null))?null:m);
var m__44846__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__44846__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__44845__auto__ = (((m == null))?null:m);
var m__44846__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,m,ch);
} else {
var m__44846__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__44845__auto__ = (((m == null))?null:m);
var m__44846__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,m);
} else {
var m__44846__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49097 = (function (mult,ch,cs,meta49098){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta49098 = meta49098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49099,meta49098__$1){
var self__ = this;
var _49099__$1 = this;
return (new cljs.core.async.t_cljs$core$async49097(self__.mult,self__.ch,self__.cs,meta49098__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49099){
var self__ = this;
var _49099__$1 = this;
return self__.meta49098;
});})(cs))
;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49097.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49098","meta49098",-610792763,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async49097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49097";

cljs.core.async.t_cljs$core$async49097.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async49097");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async49097 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async49097(mult__$1,ch__$1,cs__$1,meta49098){
return (new cljs.core.async.t_cljs$core$async49097(mult__$1,ch__$1,cs__$1,meta49098));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async49097(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__47999__auto___49322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___49322,cs,m,dchan,dctr,done){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___49322,cs,m,dchan,dctr,done){
return (function (state_49234){
var state_val_49235 = (state_49234[(1)]);
if((state_val_49235 === (7))){
var inst_49230 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49236_49323 = state_49234__$1;
(statearr_49236_49323[(2)] = inst_49230);

(statearr_49236_49323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (20))){
var inst_49133 = (state_49234[(7)]);
var inst_49145 = cljs.core.first.call(null,inst_49133);
var inst_49146 = cljs.core.nth.call(null,inst_49145,(0),null);
var inst_49147 = cljs.core.nth.call(null,inst_49145,(1),null);
var state_49234__$1 = (function (){var statearr_49237 = state_49234;
(statearr_49237[(8)] = inst_49146);

return statearr_49237;
})();
if(cljs.core.truth_(inst_49147)){
var statearr_49238_49324 = state_49234__$1;
(statearr_49238_49324[(1)] = (22));

} else {
var statearr_49239_49325 = state_49234__$1;
(statearr_49239_49325[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (27))){
var inst_49182 = (state_49234[(9)]);
var inst_49175 = (state_49234[(10)]);
var inst_49102 = (state_49234[(11)]);
var inst_49177 = (state_49234[(12)]);
var inst_49182__$1 = cljs.core._nth.call(null,inst_49175,inst_49177);
var inst_49183 = cljs.core.async.put_BANG_.call(null,inst_49182__$1,inst_49102,done);
var state_49234__$1 = (function (){var statearr_49240 = state_49234;
(statearr_49240[(9)] = inst_49182__$1);

return statearr_49240;
})();
if(cljs.core.truth_(inst_49183)){
var statearr_49241_49326 = state_49234__$1;
(statearr_49241_49326[(1)] = (30));

} else {
var statearr_49242_49327 = state_49234__$1;
(statearr_49242_49327[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (1))){
var state_49234__$1 = state_49234;
var statearr_49243_49328 = state_49234__$1;
(statearr_49243_49328[(2)] = null);

(statearr_49243_49328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (24))){
var inst_49133 = (state_49234[(7)]);
var inst_49152 = (state_49234[(2)]);
var inst_49153 = cljs.core.next.call(null,inst_49133);
var inst_49111 = inst_49153;
var inst_49112 = null;
var inst_49113 = (0);
var inst_49114 = (0);
var state_49234__$1 = (function (){var statearr_49244 = state_49234;
(statearr_49244[(13)] = inst_49152);

(statearr_49244[(14)] = inst_49112);

(statearr_49244[(15)] = inst_49114);

(statearr_49244[(16)] = inst_49111);

(statearr_49244[(17)] = inst_49113);

return statearr_49244;
})();
var statearr_49245_49329 = state_49234__$1;
(statearr_49245_49329[(2)] = null);

(statearr_49245_49329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (39))){
var state_49234__$1 = state_49234;
var statearr_49249_49330 = state_49234__$1;
(statearr_49249_49330[(2)] = null);

(statearr_49249_49330[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (4))){
var inst_49102 = (state_49234[(11)]);
var inst_49102__$1 = (state_49234[(2)]);
var inst_49103 = (inst_49102__$1 == null);
var state_49234__$1 = (function (){var statearr_49250 = state_49234;
(statearr_49250[(11)] = inst_49102__$1);

return statearr_49250;
})();
if(cljs.core.truth_(inst_49103)){
var statearr_49251_49331 = state_49234__$1;
(statearr_49251_49331[(1)] = (5));

} else {
var statearr_49252_49332 = state_49234__$1;
(statearr_49252_49332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (15))){
var inst_49112 = (state_49234[(14)]);
var inst_49114 = (state_49234[(15)]);
var inst_49111 = (state_49234[(16)]);
var inst_49113 = (state_49234[(17)]);
var inst_49129 = (state_49234[(2)]);
var inst_49130 = (inst_49114 + (1));
var tmp49246 = inst_49112;
var tmp49247 = inst_49111;
var tmp49248 = inst_49113;
var inst_49111__$1 = tmp49247;
var inst_49112__$1 = tmp49246;
var inst_49113__$1 = tmp49248;
var inst_49114__$1 = inst_49130;
var state_49234__$1 = (function (){var statearr_49253 = state_49234;
(statearr_49253[(18)] = inst_49129);

(statearr_49253[(14)] = inst_49112__$1);

(statearr_49253[(15)] = inst_49114__$1);

(statearr_49253[(16)] = inst_49111__$1);

(statearr_49253[(17)] = inst_49113__$1);

return statearr_49253;
})();
var statearr_49254_49333 = state_49234__$1;
(statearr_49254_49333[(2)] = null);

(statearr_49254_49333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (21))){
var inst_49156 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49258_49334 = state_49234__$1;
(statearr_49258_49334[(2)] = inst_49156);

(statearr_49258_49334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (31))){
var inst_49182 = (state_49234[(9)]);
var inst_49186 = done.call(null,null);
var inst_49187 = cljs.core.async.untap_STAR_.call(null,m,inst_49182);
var state_49234__$1 = (function (){var statearr_49259 = state_49234;
(statearr_49259[(19)] = inst_49186);

return statearr_49259;
})();
var statearr_49260_49335 = state_49234__$1;
(statearr_49260_49335[(2)] = inst_49187);

(statearr_49260_49335[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (32))){
var inst_49176 = (state_49234[(20)]);
var inst_49175 = (state_49234[(10)]);
var inst_49177 = (state_49234[(12)]);
var inst_49174 = (state_49234[(21)]);
var inst_49189 = (state_49234[(2)]);
var inst_49190 = (inst_49177 + (1));
var tmp49255 = inst_49176;
var tmp49256 = inst_49175;
var tmp49257 = inst_49174;
var inst_49174__$1 = tmp49257;
var inst_49175__$1 = tmp49256;
var inst_49176__$1 = tmp49255;
var inst_49177__$1 = inst_49190;
var state_49234__$1 = (function (){var statearr_49261 = state_49234;
(statearr_49261[(20)] = inst_49176__$1);

(statearr_49261[(22)] = inst_49189);

(statearr_49261[(10)] = inst_49175__$1);

(statearr_49261[(12)] = inst_49177__$1);

(statearr_49261[(21)] = inst_49174__$1);

return statearr_49261;
})();
var statearr_49262_49336 = state_49234__$1;
(statearr_49262_49336[(2)] = null);

(statearr_49262_49336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (40))){
var inst_49202 = (state_49234[(23)]);
var inst_49206 = done.call(null,null);
var inst_49207 = cljs.core.async.untap_STAR_.call(null,m,inst_49202);
var state_49234__$1 = (function (){var statearr_49263 = state_49234;
(statearr_49263[(24)] = inst_49206);

return statearr_49263;
})();
var statearr_49264_49337 = state_49234__$1;
(statearr_49264_49337[(2)] = inst_49207);

(statearr_49264_49337[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (33))){
var inst_49193 = (state_49234[(25)]);
var inst_49195 = cljs.core.chunked_seq_QMARK_.call(null,inst_49193);
var state_49234__$1 = state_49234;
if(inst_49195){
var statearr_49265_49338 = state_49234__$1;
(statearr_49265_49338[(1)] = (36));

} else {
var statearr_49266_49339 = state_49234__$1;
(statearr_49266_49339[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (13))){
var inst_49123 = (state_49234[(26)]);
var inst_49126 = cljs.core.async.close_BANG_.call(null,inst_49123);
var state_49234__$1 = state_49234;
var statearr_49267_49340 = state_49234__$1;
(statearr_49267_49340[(2)] = inst_49126);

(statearr_49267_49340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (22))){
var inst_49146 = (state_49234[(8)]);
var inst_49149 = cljs.core.async.close_BANG_.call(null,inst_49146);
var state_49234__$1 = state_49234;
var statearr_49268_49341 = state_49234__$1;
(statearr_49268_49341[(2)] = inst_49149);

(statearr_49268_49341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (36))){
var inst_49193 = (state_49234[(25)]);
var inst_49197 = cljs.core.chunk_first.call(null,inst_49193);
var inst_49198 = cljs.core.chunk_rest.call(null,inst_49193);
var inst_49199 = cljs.core.count.call(null,inst_49197);
var inst_49174 = inst_49198;
var inst_49175 = inst_49197;
var inst_49176 = inst_49199;
var inst_49177 = (0);
var state_49234__$1 = (function (){var statearr_49269 = state_49234;
(statearr_49269[(20)] = inst_49176);

(statearr_49269[(10)] = inst_49175);

(statearr_49269[(12)] = inst_49177);

(statearr_49269[(21)] = inst_49174);

return statearr_49269;
})();
var statearr_49270_49342 = state_49234__$1;
(statearr_49270_49342[(2)] = null);

(statearr_49270_49342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (41))){
var inst_49193 = (state_49234[(25)]);
var inst_49209 = (state_49234[(2)]);
var inst_49210 = cljs.core.next.call(null,inst_49193);
var inst_49174 = inst_49210;
var inst_49175 = null;
var inst_49176 = (0);
var inst_49177 = (0);
var state_49234__$1 = (function (){var statearr_49271 = state_49234;
(statearr_49271[(20)] = inst_49176);

(statearr_49271[(27)] = inst_49209);

(statearr_49271[(10)] = inst_49175);

(statearr_49271[(12)] = inst_49177);

(statearr_49271[(21)] = inst_49174);

return statearr_49271;
})();
var statearr_49272_49343 = state_49234__$1;
(statearr_49272_49343[(2)] = null);

(statearr_49272_49343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (43))){
var state_49234__$1 = state_49234;
var statearr_49273_49344 = state_49234__$1;
(statearr_49273_49344[(2)] = null);

(statearr_49273_49344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (29))){
var inst_49218 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49274_49345 = state_49234__$1;
(statearr_49274_49345[(2)] = inst_49218);

(statearr_49274_49345[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (44))){
var inst_49227 = (state_49234[(2)]);
var state_49234__$1 = (function (){var statearr_49275 = state_49234;
(statearr_49275[(28)] = inst_49227);

return statearr_49275;
})();
var statearr_49276_49346 = state_49234__$1;
(statearr_49276_49346[(2)] = null);

(statearr_49276_49346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (6))){
var inst_49166 = (state_49234[(29)]);
var inst_49165 = cljs.core.deref.call(null,cs);
var inst_49166__$1 = cljs.core.keys.call(null,inst_49165);
var inst_49167 = cljs.core.count.call(null,inst_49166__$1);
var inst_49168 = cljs.core.reset_BANG_.call(null,dctr,inst_49167);
var inst_49173 = cljs.core.seq.call(null,inst_49166__$1);
var inst_49174 = inst_49173;
var inst_49175 = null;
var inst_49176 = (0);
var inst_49177 = (0);
var state_49234__$1 = (function (){var statearr_49277 = state_49234;
(statearr_49277[(30)] = inst_49168);

(statearr_49277[(20)] = inst_49176);

(statearr_49277[(10)] = inst_49175);

(statearr_49277[(29)] = inst_49166__$1);

(statearr_49277[(12)] = inst_49177);

(statearr_49277[(21)] = inst_49174);

return statearr_49277;
})();
var statearr_49278_49347 = state_49234__$1;
(statearr_49278_49347[(2)] = null);

(statearr_49278_49347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (28))){
var inst_49193 = (state_49234[(25)]);
var inst_49174 = (state_49234[(21)]);
var inst_49193__$1 = cljs.core.seq.call(null,inst_49174);
var state_49234__$1 = (function (){var statearr_49279 = state_49234;
(statearr_49279[(25)] = inst_49193__$1);

return statearr_49279;
})();
if(inst_49193__$1){
var statearr_49280_49348 = state_49234__$1;
(statearr_49280_49348[(1)] = (33));

} else {
var statearr_49281_49349 = state_49234__$1;
(statearr_49281_49349[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (25))){
var inst_49176 = (state_49234[(20)]);
var inst_49177 = (state_49234[(12)]);
var inst_49179 = (inst_49177 < inst_49176);
var inst_49180 = inst_49179;
var state_49234__$1 = state_49234;
if(cljs.core.truth_(inst_49180)){
var statearr_49282_49350 = state_49234__$1;
(statearr_49282_49350[(1)] = (27));

} else {
var statearr_49283_49351 = state_49234__$1;
(statearr_49283_49351[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (34))){
var state_49234__$1 = state_49234;
var statearr_49284_49352 = state_49234__$1;
(statearr_49284_49352[(2)] = null);

(statearr_49284_49352[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (17))){
var state_49234__$1 = state_49234;
var statearr_49285_49353 = state_49234__$1;
(statearr_49285_49353[(2)] = null);

(statearr_49285_49353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (3))){
var inst_49232 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49234__$1,inst_49232);
} else {
if((state_val_49235 === (12))){
var inst_49161 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49286_49354 = state_49234__$1;
(statearr_49286_49354[(2)] = inst_49161);

(statearr_49286_49354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (2))){
var state_49234__$1 = state_49234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49234__$1,(4),ch);
} else {
if((state_val_49235 === (23))){
var state_49234__$1 = state_49234;
var statearr_49287_49355 = state_49234__$1;
(statearr_49287_49355[(2)] = null);

(statearr_49287_49355[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (35))){
var inst_49216 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49288_49356 = state_49234__$1;
(statearr_49288_49356[(2)] = inst_49216);

(statearr_49288_49356[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (19))){
var inst_49133 = (state_49234[(7)]);
var inst_49137 = cljs.core.chunk_first.call(null,inst_49133);
var inst_49138 = cljs.core.chunk_rest.call(null,inst_49133);
var inst_49139 = cljs.core.count.call(null,inst_49137);
var inst_49111 = inst_49138;
var inst_49112 = inst_49137;
var inst_49113 = inst_49139;
var inst_49114 = (0);
var state_49234__$1 = (function (){var statearr_49289 = state_49234;
(statearr_49289[(14)] = inst_49112);

(statearr_49289[(15)] = inst_49114);

(statearr_49289[(16)] = inst_49111);

(statearr_49289[(17)] = inst_49113);

return statearr_49289;
})();
var statearr_49290_49357 = state_49234__$1;
(statearr_49290_49357[(2)] = null);

(statearr_49290_49357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (11))){
var inst_49111 = (state_49234[(16)]);
var inst_49133 = (state_49234[(7)]);
var inst_49133__$1 = cljs.core.seq.call(null,inst_49111);
var state_49234__$1 = (function (){var statearr_49291 = state_49234;
(statearr_49291[(7)] = inst_49133__$1);

return statearr_49291;
})();
if(inst_49133__$1){
var statearr_49292_49358 = state_49234__$1;
(statearr_49292_49358[(1)] = (16));

} else {
var statearr_49293_49359 = state_49234__$1;
(statearr_49293_49359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (9))){
var inst_49163 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49294_49360 = state_49234__$1;
(statearr_49294_49360[(2)] = inst_49163);

(statearr_49294_49360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (5))){
var inst_49109 = cljs.core.deref.call(null,cs);
var inst_49110 = cljs.core.seq.call(null,inst_49109);
var inst_49111 = inst_49110;
var inst_49112 = null;
var inst_49113 = (0);
var inst_49114 = (0);
var state_49234__$1 = (function (){var statearr_49295 = state_49234;
(statearr_49295[(14)] = inst_49112);

(statearr_49295[(15)] = inst_49114);

(statearr_49295[(16)] = inst_49111);

(statearr_49295[(17)] = inst_49113);

return statearr_49295;
})();
var statearr_49296_49361 = state_49234__$1;
(statearr_49296_49361[(2)] = null);

(statearr_49296_49361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (14))){
var state_49234__$1 = state_49234;
var statearr_49297_49362 = state_49234__$1;
(statearr_49297_49362[(2)] = null);

(statearr_49297_49362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (45))){
var inst_49224 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49298_49363 = state_49234__$1;
(statearr_49298_49363[(2)] = inst_49224);

(statearr_49298_49363[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (26))){
var inst_49166 = (state_49234[(29)]);
var inst_49220 = (state_49234[(2)]);
var inst_49221 = cljs.core.seq.call(null,inst_49166);
var state_49234__$1 = (function (){var statearr_49299 = state_49234;
(statearr_49299[(31)] = inst_49220);

return statearr_49299;
})();
if(inst_49221){
var statearr_49300_49364 = state_49234__$1;
(statearr_49300_49364[(1)] = (42));

} else {
var statearr_49301_49365 = state_49234__$1;
(statearr_49301_49365[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (16))){
var inst_49133 = (state_49234[(7)]);
var inst_49135 = cljs.core.chunked_seq_QMARK_.call(null,inst_49133);
var state_49234__$1 = state_49234;
if(inst_49135){
var statearr_49302_49366 = state_49234__$1;
(statearr_49302_49366[(1)] = (19));

} else {
var statearr_49303_49367 = state_49234__$1;
(statearr_49303_49367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (38))){
var inst_49213 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49304_49368 = state_49234__$1;
(statearr_49304_49368[(2)] = inst_49213);

(statearr_49304_49368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (30))){
var state_49234__$1 = state_49234;
var statearr_49305_49369 = state_49234__$1;
(statearr_49305_49369[(2)] = null);

(statearr_49305_49369[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (10))){
var inst_49112 = (state_49234[(14)]);
var inst_49114 = (state_49234[(15)]);
var inst_49122 = cljs.core._nth.call(null,inst_49112,inst_49114);
var inst_49123 = cljs.core.nth.call(null,inst_49122,(0),null);
var inst_49124 = cljs.core.nth.call(null,inst_49122,(1),null);
var state_49234__$1 = (function (){var statearr_49306 = state_49234;
(statearr_49306[(26)] = inst_49123);

return statearr_49306;
})();
if(cljs.core.truth_(inst_49124)){
var statearr_49307_49370 = state_49234__$1;
(statearr_49307_49370[(1)] = (13));

} else {
var statearr_49308_49371 = state_49234__$1;
(statearr_49308_49371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (18))){
var inst_49159 = (state_49234[(2)]);
var state_49234__$1 = state_49234;
var statearr_49309_49372 = state_49234__$1;
(statearr_49309_49372[(2)] = inst_49159);

(statearr_49309_49372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (42))){
var state_49234__$1 = state_49234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49234__$1,(45),dchan);
} else {
if((state_val_49235 === (37))){
var inst_49202 = (state_49234[(23)]);
var inst_49193 = (state_49234[(25)]);
var inst_49102 = (state_49234[(11)]);
var inst_49202__$1 = cljs.core.first.call(null,inst_49193);
var inst_49203 = cljs.core.async.put_BANG_.call(null,inst_49202__$1,inst_49102,done);
var state_49234__$1 = (function (){var statearr_49310 = state_49234;
(statearr_49310[(23)] = inst_49202__$1);

return statearr_49310;
})();
if(cljs.core.truth_(inst_49203)){
var statearr_49311_49373 = state_49234__$1;
(statearr_49311_49373[(1)] = (39));

} else {
var statearr_49312_49374 = state_49234__$1;
(statearr_49312_49374[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49235 === (8))){
var inst_49114 = (state_49234[(15)]);
var inst_49113 = (state_49234[(17)]);
var inst_49116 = (inst_49114 < inst_49113);
var inst_49117 = inst_49116;
var state_49234__$1 = state_49234;
if(cljs.core.truth_(inst_49117)){
var statearr_49313_49375 = state_49234__$1;
(statearr_49313_49375[(1)] = (10));

} else {
var statearr_49314_49376 = state_49234__$1;
(statearr_49314_49376[(1)] = (11));

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
});})(c__47999__auto___49322,cs,m,dchan,dctr,done))
;
return ((function (switch__47887__auto__,c__47999__auto___49322,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__47888__auto__ = null;
var cljs$core$async$mult_$_state_machine__47888__auto____0 = (function (){
var statearr_49318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49318[(0)] = cljs$core$async$mult_$_state_machine__47888__auto__);

(statearr_49318[(1)] = (1));

return statearr_49318;
});
var cljs$core$async$mult_$_state_machine__47888__auto____1 = (function (state_49234){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_49234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e49319){if((e49319 instanceof Object)){
var ex__47891__auto__ = e49319;
var statearr_49320_49377 = state_49234;
(statearr_49320_49377[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49378 = state_49234;
state_49234 = G__49378;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47888__auto__ = function(state_49234){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47888__auto____1.call(this,state_49234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47888__auto____0;
cljs$core$async$mult_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47888__auto____1;
return cljs$core$async$mult_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___49322,cs,m,dchan,dctr,done))
})();
var state__48001__auto__ = (function (){var statearr_49321 = f__48000__auto__.call(null);
(statearr_49321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___49322);

return statearr_49321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___49322,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args49379 = [];
var len__45257__auto___49382 = arguments.length;
var i__45258__auto___49383 = (0);
while(true){
if((i__45258__auto___49383 < len__45257__auto___49382)){
args49379.push((arguments[i__45258__auto___49383]));

var G__49384 = (i__45258__auto___49383 + (1));
i__45258__auto___49383 = G__49384;
continue;
} else {
}
break;
}

var G__49381 = args49379.length;
switch (G__49381) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49379.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__44845__auto__ = (((m == null))?null:m);
var m__44846__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,m,ch);
} else {
var m__44846__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__44845__auto__ = (((m == null))?null:m);
var m__44846__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,m,ch);
} else {
var m__44846__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__44845__auto__ = (((m == null))?null:m);
var m__44846__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,m);
} else {
var m__44846__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__44845__auto__ = (((m == null))?null:m);
var m__44846__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,m,state_map);
} else {
var m__44846__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__44845__auto__ = (((m == null))?null:m);
var m__44846__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,m,mode);
} else {
var m__44846__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45264__auto__ = [];
var len__45257__auto___49396 = arguments.length;
var i__45258__auto___49397 = (0);
while(true){
if((i__45258__auto___49397 < len__45257__auto___49396)){
args__45264__auto__.push((arguments[i__45258__auto___49397]));

var G__49398 = (i__45258__auto___49397 + (1));
i__45258__auto___49397 = G__49398;
continue;
} else {
}
break;
}

var argseq__45265__auto__ = ((((3) < args__45264__auto__.length))?(new cljs.core.IndexedSeq(args__45264__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45265__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49390){
var map__49391 = p__49390;
var map__49391__$1 = ((((!((map__49391 == null)))?((((map__49391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49391):map__49391);
var opts = map__49391__$1;
var statearr_49393_49399 = state;
(statearr_49393_49399[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__49391,map__49391__$1,opts){
return (function (val){
var statearr_49394_49400 = state;
(statearr_49394_49400[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__49391,map__49391__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_49395_49401 = state;
(statearr_49395_49401[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49386){
var G__49387 = cljs.core.first.call(null,seq49386);
var seq49386__$1 = cljs.core.next.call(null,seq49386);
var G__49388 = cljs.core.first.call(null,seq49386__$1);
var seq49386__$2 = cljs.core.next.call(null,seq49386__$1);
var G__49389 = cljs.core.first.call(null,seq49386__$2);
var seq49386__$3 = cljs.core.next.call(null,seq49386__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49387,G__49388,G__49389,seq49386__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49567 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49568){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49568 = meta49568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49569,meta49568__$1){
var self__ = this;
var _49569__$1 = this;
return (new cljs.core.async.t_cljs$core$async49567(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49568__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49569){
var self__ = this;
var _49569__$1 = this;
return self__.meta49568;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49567.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49567.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49568","meta49568",-1264702666,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49567";

cljs.core.async.t_cljs$core$async49567.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async49567");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async49567 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49567(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49568){
return (new cljs.core.async.t_cljs$core$async49567(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49568));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49567(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47999__auto___49732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___49732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___49732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49669){
var state_val_49670 = (state_49669[(1)]);
if((state_val_49670 === (7))){
var inst_49585 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
var statearr_49671_49733 = state_49669__$1;
(statearr_49671_49733[(2)] = inst_49585);

(statearr_49671_49733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (20))){
var inst_49597 = (state_49669[(7)]);
var state_49669__$1 = state_49669;
var statearr_49672_49734 = state_49669__$1;
(statearr_49672_49734[(2)] = inst_49597);

(statearr_49672_49734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (27))){
var state_49669__$1 = state_49669;
var statearr_49673_49735 = state_49669__$1;
(statearr_49673_49735[(2)] = null);

(statearr_49673_49735[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (1))){
var inst_49573 = (state_49669[(8)]);
var inst_49573__$1 = calc_state.call(null);
var inst_49575 = (inst_49573__$1 == null);
var inst_49576 = cljs.core.not.call(null,inst_49575);
var state_49669__$1 = (function (){var statearr_49674 = state_49669;
(statearr_49674[(8)] = inst_49573__$1);

return statearr_49674;
})();
if(inst_49576){
var statearr_49675_49736 = state_49669__$1;
(statearr_49675_49736[(1)] = (2));

} else {
var statearr_49676_49737 = state_49669__$1;
(statearr_49676_49737[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (24))){
var inst_49643 = (state_49669[(9)]);
var inst_49629 = (state_49669[(10)]);
var inst_49620 = (state_49669[(11)]);
var inst_49643__$1 = inst_49620.call(null,inst_49629);
var state_49669__$1 = (function (){var statearr_49677 = state_49669;
(statearr_49677[(9)] = inst_49643__$1);

return statearr_49677;
})();
if(cljs.core.truth_(inst_49643__$1)){
var statearr_49678_49738 = state_49669__$1;
(statearr_49678_49738[(1)] = (29));

} else {
var statearr_49679_49739 = state_49669__$1;
(statearr_49679_49739[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (4))){
var inst_49588 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
if(cljs.core.truth_(inst_49588)){
var statearr_49680_49740 = state_49669__$1;
(statearr_49680_49740[(1)] = (8));

} else {
var statearr_49681_49741 = state_49669__$1;
(statearr_49681_49741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (15))){
var inst_49614 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
if(cljs.core.truth_(inst_49614)){
var statearr_49682_49742 = state_49669__$1;
(statearr_49682_49742[(1)] = (19));

} else {
var statearr_49683_49743 = state_49669__$1;
(statearr_49683_49743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (21))){
var inst_49619 = (state_49669[(12)]);
var inst_49619__$1 = (state_49669[(2)]);
var inst_49620 = cljs.core.get.call(null,inst_49619__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49621 = cljs.core.get.call(null,inst_49619__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49622 = cljs.core.get.call(null,inst_49619__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49669__$1 = (function (){var statearr_49684 = state_49669;
(statearr_49684[(12)] = inst_49619__$1);

(statearr_49684[(13)] = inst_49621);

(statearr_49684[(11)] = inst_49620);

return statearr_49684;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49669__$1,(22),inst_49622);
} else {
if((state_val_49670 === (31))){
var inst_49651 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
if(cljs.core.truth_(inst_49651)){
var statearr_49685_49744 = state_49669__$1;
(statearr_49685_49744[(1)] = (32));

} else {
var statearr_49686_49745 = state_49669__$1;
(statearr_49686_49745[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (32))){
var inst_49628 = (state_49669[(14)]);
var state_49669__$1 = state_49669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49669__$1,(35),out,inst_49628);
} else {
if((state_val_49670 === (33))){
var inst_49619 = (state_49669[(12)]);
var inst_49597 = inst_49619;
var state_49669__$1 = (function (){var statearr_49687 = state_49669;
(statearr_49687[(7)] = inst_49597);

return statearr_49687;
})();
var statearr_49688_49746 = state_49669__$1;
(statearr_49688_49746[(2)] = null);

(statearr_49688_49746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (13))){
var inst_49597 = (state_49669[(7)]);
var inst_49604 = inst_49597.cljs$lang$protocol_mask$partition0$;
var inst_49605 = (inst_49604 & (64));
var inst_49606 = inst_49597.cljs$core$ISeq$;
var inst_49607 = (inst_49605) || (inst_49606);
var state_49669__$1 = state_49669;
if(cljs.core.truth_(inst_49607)){
var statearr_49689_49747 = state_49669__$1;
(statearr_49689_49747[(1)] = (16));

} else {
var statearr_49690_49748 = state_49669__$1;
(statearr_49690_49748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (22))){
var inst_49629 = (state_49669[(10)]);
var inst_49628 = (state_49669[(14)]);
var inst_49627 = (state_49669[(2)]);
var inst_49628__$1 = cljs.core.nth.call(null,inst_49627,(0),null);
var inst_49629__$1 = cljs.core.nth.call(null,inst_49627,(1),null);
var inst_49630 = (inst_49628__$1 == null);
var inst_49631 = cljs.core._EQ_.call(null,inst_49629__$1,change);
var inst_49632 = (inst_49630) || (inst_49631);
var state_49669__$1 = (function (){var statearr_49691 = state_49669;
(statearr_49691[(10)] = inst_49629__$1);

(statearr_49691[(14)] = inst_49628__$1);

return statearr_49691;
})();
if(cljs.core.truth_(inst_49632)){
var statearr_49692_49749 = state_49669__$1;
(statearr_49692_49749[(1)] = (23));

} else {
var statearr_49693_49750 = state_49669__$1;
(statearr_49693_49750[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (36))){
var inst_49619 = (state_49669[(12)]);
var inst_49597 = inst_49619;
var state_49669__$1 = (function (){var statearr_49694 = state_49669;
(statearr_49694[(7)] = inst_49597);

return statearr_49694;
})();
var statearr_49695_49751 = state_49669__$1;
(statearr_49695_49751[(2)] = null);

(statearr_49695_49751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (29))){
var inst_49643 = (state_49669[(9)]);
var state_49669__$1 = state_49669;
var statearr_49696_49752 = state_49669__$1;
(statearr_49696_49752[(2)] = inst_49643);

(statearr_49696_49752[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (6))){
var state_49669__$1 = state_49669;
var statearr_49697_49753 = state_49669__$1;
(statearr_49697_49753[(2)] = false);

(statearr_49697_49753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (28))){
var inst_49639 = (state_49669[(2)]);
var inst_49640 = calc_state.call(null);
var inst_49597 = inst_49640;
var state_49669__$1 = (function (){var statearr_49698 = state_49669;
(statearr_49698[(7)] = inst_49597);

(statearr_49698[(15)] = inst_49639);

return statearr_49698;
})();
var statearr_49699_49754 = state_49669__$1;
(statearr_49699_49754[(2)] = null);

(statearr_49699_49754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (25))){
var inst_49665 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
var statearr_49700_49755 = state_49669__$1;
(statearr_49700_49755[(2)] = inst_49665);

(statearr_49700_49755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (34))){
var inst_49663 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
var statearr_49701_49756 = state_49669__$1;
(statearr_49701_49756[(2)] = inst_49663);

(statearr_49701_49756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (17))){
var state_49669__$1 = state_49669;
var statearr_49702_49757 = state_49669__$1;
(statearr_49702_49757[(2)] = false);

(statearr_49702_49757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (3))){
var state_49669__$1 = state_49669;
var statearr_49703_49758 = state_49669__$1;
(statearr_49703_49758[(2)] = false);

(statearr_49703_49758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (12))){
var inst_49667 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49669__$1,inst_49667);
} else {
if((state_val_49670 === (2))){
var inst_49573 = (state_49669[(8)]);
var inst_49578 = inst_49573.cljs$lang$protocol_mask$partition0$;
var inst_49579 = (inst_49578 & (64));
var inst_49580 = inst_49573.cljs$core$ISeq$;
var inst_49581 = (inst_49579) || (inst_49580);
var state_49669__$1 = state_49669;
if(cljs.core.truth_(inst_49581)){
var statearr_49704_49759 = state_49669__$1;
(statearr_49704_49759[(1)] = (5));

} else {
var statearr_49705_49760 = state_49669__$1;
(statearr_49705_49760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (23))){
var inst_49628 = (state_49669[(14)]);
var inst_49634 = (inst_49628 == null);
var state_49669__$1 = state_49669;
if(cljs.core.truth_(inst_49634)){
var statearr_49706_49761 = state_49669__$1;
(statearr_49706_49761[(1)] = (26));

} else {
var statearr_49707_49762 = state_49669__$1;
(statearr_49707_49762[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (35))){
var inst_49654 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
if(cljs.core.truth_(inst_49654)){
var statearr_49708_49763 = state_49669__$1;
(statearr_49708_49763[(1)] = (36));

} else {
var statearr_49709_49764 = state_49669__$1;
(statearr_49709_49764[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (19))){
var inst_49597 = (state_49669[(7)]);
var inst_49616 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49597);
var state_49669__$1 = state_49669;
var statearr_49710_49765 = state_49669__$1;
(statearr_49710_49765[(2)] = inst_49616);

(statearr_49710_49765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (11))){
var inst_49597 = (state_49669[(7)]);
var inst_49601 = (inst_49597 == null);
var inst_49602 = cljs.core.not.call(null,inst_49601);
var state_49669__$1 = state_49669;
if(inst_49602){
var statearr_49711_49766 = state_49669__$1;
(statearr_49711_49766[(1)] = (13));

} else {
var statearr_49712_49767 = state_49669__$1;
(statearr_49712_49767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (9))){
var inst_49573 = (state_49669[(8)]);
var state_49669__$1 = state_49669;
var statearr_49713_49768 = state_49669__$1;
(statearr_49713_49768[(2)] = inst_49573);

(statearr_49713_49768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (5))){
var state_49669__$1 = state_49669;
var statearr_49714_49769 = state_49669__$1;
(statearr_49714_49769[(2)] = true);

(statearr_49714_49769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (14))){
var state_49669__$1 = state_49669;
var statearr_49715_49770 = state_49669__$1;
(statearr_49715_49770[(2)] = false);

(statearr_49715_49770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (26))){
var inst_49629 = (state_49669[(10)]);
var inst_49636 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49629);
var state_49669__$1 = state_49669;
var statearr_49716_49771 = state_49669__$1;
(statearr_49716_49771[(2)] = inst_49636);

(statearr_49716_49771[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (16))){
var state_49669__$1 = state_49669;
var statearr_49717_49772 = state_49669__$1;
(statearr_49717_49772[(2)] = true);

(statearr_49717_49772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (38))){
var inst_49659 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
var statearr_49718_49773 = state_49669__$1;
(statearr_49718_49773[(2)] = inst_49659);

(statearr_49718_49773[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (30))){
var inst_49629 = (state_49669[(10)]);
var inst_49621 = (state_49669[(13)]);
var inst_49620 = (state_49669[(11)]);
var inst_49646 = cljs.core.empty_QMARK_.call(null,inst_49620);
var inst_49647 = inst_49621.call(null,inst_49629);
var inst_49648 = cljs.core.not.call(null,inst_49647);
var inst_49649 = (inst_49646) && (inst_49648);
var state_49669__$1 = state_49669;
var statearr_49719_49774 = state_49669__$1;
(statearr_49719_49774[(2)] = inst_49649);

(statearr_49719_49774[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (10))){
var inst_49573 = (state_49669[(8)]);
var inst_49593 = (state_49669[(2)]);
var inst_49594 = cljs.core.get.call(null,inst_49593,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49595 = cljs.core.get.call(null,inst_49593,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49596 = cljs.core.get.call(null,inst_49593,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49597 = inst_49573;
var state_49669__$1 = (function (){var statearr_49720 = state_49669;
(statearr_49720[(16)] = inst_49594);

(statearr_49720[(17)] = inst_49596);

(statearr_49720[(18)] = inst_49595);

(statearr_49720[(7)] = inst_49597);

return statearr_49720;
})();
var statearr_49721_49775 = state_49669__$1;
(statearr_49721_49775[(2)] = null);

(statearr_49721_49775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (18))){
var inst_49611 = (state_49669[(2)]);
var state_49669__$1 = state_49669;
var statearr_49722_49776 = state_49669__$1;
(statearr_49722_49776[(2)] = inst_49611);

(statearr_49722_49776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (37))){
var state_49669__$1 = state_49669;
var statearr_49723_49777 = state_49669__$1;
(statearr_49723_49777[(2)] = null);

(statearr_49723_49777[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49670 === (8))){
var inst_49573 = (state_49669[(8)]);
var inst_49590 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49573);
var state_49669__$1 = state_49669;
var statearr_49724_49778 = state_49669__$1;
(statearr_49724_49778[(2)] = inst_49590);

(statearr_49724_49778[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__47999__auto___49732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__47887__auto__,c__47999__auto___49732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__47888__auto__ = null;
var cljs$core$async$mix_$_state_machine__47888__auto____0 = (function (){
var statearr_49728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49728[(0)] = cljs$core$async$mix_$_state_machine__47888__auto__);

(statearr_49728[(1)] = (1));

return statearr_49728;
});
var cljs$core$async$mix_$_state_machine__47888__auto____1 = (function (state_49669){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_49669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e49729){if((e49729 instanceof Object)){
var ex__47891__auto__ = e49729;
var statearr_49730_49779 = state_49669;
(statearr_49730_49779[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49780 = state_49669;
state_49669 = G__49780;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47888__auto__ = function(state_49669){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47888__auto____1.call(this,state_49669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47888__auto____0;
cljs$core$async$mix_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47888__auto____1;
return cljs$core$async$mix_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___49732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48001__auto__ = (function (){var statearr_49731 = f__48000__auto__.call(null);
(statearr_49731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___49732);

return statearr_49731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___49732,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__44845__auto__ = (((p == null))?null:p);
var m__44846__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__44846__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__44845__auto__ = (((p == null))?null:p);
var m__44846__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,p,v,ch);
} else {
var m__44846__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args49781 = [];
var len__45257__auto___49784 = arguments.length;
var i__45258__auto___49785 = (0);
while(true){
if((i__45258__auto___49785 < len__45257__auto___49784)){
args49781.push((arguments[i__45258__auto___49785]));

var G__49786 = (i__45258__auto___49785 + (1));
i__45258__auto___49785 = G__49786;
continue;
} else {
}
break;
}

var G__49783 = args49781.length;
switch (G__49783) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49781.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__44845__auto__ = (((p == null))?null:p);
var m__44846__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,p);
} else {
var m__44846__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__44845__auto__ = (((p == null))?null:p);
var m__44846__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44845__auto__)]);
if(!((m__44846__auto__ == null))){
return m__44846__auto__.call(null,p,v);
} else {
var m__44846__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44846__auto____$1 == null))){
return m__44846__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args49789 = [];
var len__45257__auto___49914 = arguments.length;
var i__45258__auto___49915 = (0);
while(true){
if((i__45258__auto___49915 < len__45257__auto___49914)){
args49789.push((arguments[i__45258__auto___49915]));

var G__49916 = (i__45258__auto___49915 + (1));
i__45258__auto___49915 = G__49916;
continue;
} else {
}
break;
}

var G__49791 = args49789.length;
switch (G__49791) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49789.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__44182__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__44182__auto__,mults){
return (function (p1__49788_SHARP_){
if(cljs.core.truth_(p1__49788_SHARP_.call(null,topic))){
return p1__49788_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49788_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44182__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49792 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49793){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49793 = meta49793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49794,meta49793__$1){
var self__ = this;
var _49794__$1 = this;
return (new cljs.core.async.t_cljs$core$async49792(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49793__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49794){
var self__ = this;
var _49794__$1 = this;
return self__.meta49793;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49792.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49792.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async49792.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49792.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49792.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49792.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49793","meta49793",1923321728,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49792";

cljs.core.async.t_cljs$core$async49792.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async49792");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async49792 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49793){
return (new cljs.core.async.t_cljs$core$async49792(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49793));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49792(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47999__auto___49918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___49918,mults,ensure_mult,p){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___49918,mults,ensure_mult,p){
return (function (state_49866){
var state_val_49867 = (state_49866[(1)]);
if((state_val_49867 === (7))){
var inst_49862 = (state_49866[(2)]);
var state_49866__$1 = state_49866;
var statearr_49868_49919 = state_49866__$1;
(statearr_49868_49919[(2)] = inst_49862);

(statearr_49868_49919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (20))){
var state_49866__$1 = state_49866;
var statearr_49869_49920 = state_49866__$1;
(statearr_49869_49920[(2)] = null);

(statearr_49869_49920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (1))){
var state_49866__$1 = state_49866;
var statearr_49870_49921 = state_49866__$1;
(statearr_49870_49921[(2)] = null);

(statearr_49870_49921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (24))){
var inst_49845 = (state_49866[(7)]);
var inst_49854 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49845);
var state_49866__$1 = state_49866;
var statearr_49871_49922 = state_49866__$1;
(statearr_49871_49922[(2)] = inst_49854);

(statearr_49871_49922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (4))){
var inst_49797 = (state_49866[(8)]);
var inst_49797__$1 = (state_49866[(2)]);
var inst_49798 = (inst_49797__$1 == null);
var state_49866__$1 = (function (){var statearr_49872 = state_49866;
(statearr_49872[(8)] = inst_49797__$1);

return statearr_49872;
})();
if(cljs.core.truth_(inst_49798)){
var statearr_49873_49923 = state_49866__$1;
(statearr_49873_49923[(1)] = (5));

} else {
var statearr_49874_49924 = state_49866__$1;
(statearr_49874_49924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (15))){
var inst_49839 = (state_49866[(2)]);
var state_49866__$1 = state_49866;
var statearr_49875_49925 = state_49866__$1;
(statearr_49875_49925[(2)] = inst_49839);

(statearr_49875_49925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (21))){
var inst_49859 = (state_49866[(2)]);
var state_49866__$1 = (function (){var statearr_49876 = state_49866;
(statearr_49876[(9)] = inst_49859);

return statearr_49876;
})();
var statearr_49877_49926 = state_49866__$1;
(statearr_49877_49926[(2)] = null);

(statearr_49877_49926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (13))){
var inst_49821 = (state_49866[(10)]);
var inst_49823 = cljs.core.chunked_seq_QMARK_.call(null,inst_49821);
var state_49866__$1 = state_49866;
if(inst_49823){
var statearr_49878_49927 = state_49866__$1;
(statearr_49878_49927[(1)] = (16));

} else {
var statearr_49879_49928 = state_49866__$1;
(statearr_49879_49928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (22))){
var inst_49851 = (state_49866[(2)]);
var state_49866__$1 = state_49866;
if(cljs.core.truth_(inst_49851)){
var statearr_49880_49929 = state_49866__$1;
(statearr_49880_49929[(1)] = (23));

} else {
var statearr_49881_49930 = state_49866__$1;
(statearr_49881_49930[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (6))){
var inst_49845 = (state_49866[(7)]);
var inst_49797 = (state_49866[(8)]);
var inst_49847 = (state_49866[(11)]);
var inst_49845__$1 = topic_fn.call(null,inst_49797);
var inst_49846 = cljs.core.deref.call(null,mults);
var inst_49847__$1 = cljs.core.get.call(null,inst_49846,inst_49845__$1);
var state_49866__$1 = (function (){var statearr_49882 = state_49866;
(statearr_49882[(7)] = inst_49845__$1);

(statearr_49882[(11)] = inst_49847__$1);

return statearr_49882;
})();
if(cljs.core.truth_(inst_49847__$1)){
var statearr_49883_49931 = state_49866__$1;
(statearr_49883_49931[(1)] = (19));

} else {
var statearr_49884_49932 = state_49866__$1;
(statearr_49884_49932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (25))){
var inst_49856 = (state_49866[(2)]);
var state_49866__$1 = state_49866;
var statearr_49885_49933 = state_49866__$1;
(statearr_49885_49933[(2)] = inst_49856);

(statearr_49885_49933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (17))){
var inst_49821 = (state_49866[(10)]);
var inst_49830 = cljs.core.first.call(null,inst_49821);
var inst_49831 = cljs.core.async.muxch_STAR_.call(null,inst_49830);
var inst_49832 = cljs.core.async.close_BANG_.call(null,inst_49831);
var inst_49833 = cljs.core.next.call(null,inst_49821);
var inst_49807 = inst_49833;
var inst_49808 = null;
var inst_49809 = (0);
var inst_49810 = (0);
var state_49866__$1 = (function (){var statearr_49886 = state_49866;
(statearr_49886[(12)] = inst_49810);

(statearr_49886[(13)] = inst_49809);

(statearr_49886[(14)] = inst_49808);

(statearr_49886[(15)] = inst_49807);

(statearr_49886[(16)] = inst_49832);

return statearr_49886;
})();
var statearr_49887_49934 = state_49866__$1;
(statearr_49887_49934[(2)] = null);

(statearr_49887_49934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (3))){
var inst_49864 = (state_49866[(2)]);
var state_49866__$1 = state_49866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49866__$1,inst_49864);
} else {
if((state_val_49867 === (12))){
var inst_49841 = (state_49866[(2)]);
var state_49866__$1 = state_49866;
var statearr_49888_49935 = state_49866__$1;
(statearr_49888_49935[(2)] = inst_49841);

(statearr_49888_49935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (2))){
var state_49866__$1 = state_49866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49866__$1,(4),ch);
} else {
if((state_val_49867 === (23))){
var state_49866__$1 = state_49866;
var statearr_49889_49936 = state_49866__$1;
(statearr_49889_49936[(2)] = null);

(statearr_49889_49936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (19))){
var inst_49797 = (state_49866[(8)]);
var inst_49847 = (state_49866[(11)]);
var inst_49849 = cljs.core.async.muxch_STAR_.call(null,inst_49847);
var state_49866__$1 = state_49866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49866__$1,(22),inst_49849,inst_49797);
} else {
if((state_val_49867 === (11))){
var inst_49807 = (state_49866[(15)]);
var inst_49821 = (state_49866[(10)]);
var inst_49821__$1 = cljs.core.seq.call(null,inst_49807);
var state_49866__$1 = (function (){var statearr_49890 = state_49866;
(statearr_49890[(10)] = inst_49821__$1);

return statearr_49890;
})();
if(inst_49821__$1){
var statearr_49891_49937 = state_49866__$1;
(statearr_49891_49937[(1)] = (13));

} else {
var statearr_49892_49938 = state_49866__$1;
(statearr_49892_49938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (9))){
var inst_49843 = (state_49866[(2)]);
var state_49866__$1 = state_49866;
var statearr_49893_49939 = state_49866__$1;
(statearr_49893_49939[(2)] = inst_49843);

(statearr_49893_49939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (5))){
var inst_49804 = cljs.core.deref.call(null,mults);
var inst_49805 = cljs.core.vals.call(null,inst_49804);
var inst_49806 = cljs.core.seq.call(null,inst_49805);
var inst_49807 = inst_49806;
var inst_49808 = null;
var inst_49809 = (0);
var inst_49810 = (0);
var state_49866__$1 = (function (){var statearr_49894 = state_49866;
(statearr_49894[(12)] = inst_49810);

(statearr_49894[(13)] = inst_49809);

(statearr_49894[(14)] = inst_49808);

(statearr_49894[(15)] = inst_49807);

return statearr_49894;
})();
var statearr_49895_49940 = state_49866__$1;
(statearr_49895_49940[(2)] = null);

(statearr_49895_49940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (14))){
var state_49866__$1 = state_49866;
var statearr_49899_49941 = state_49866__$1;
(statearr_49899_49941[(2)] = null);

(statearr_49899_49941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (16))){
var inst_49821 = (state_49866[(10)]);
var inst_49825 = cljs.core.chunk_first.call(null,inst_49821);
var inst_49826 = cljs.core.chunk_rest.call(null,inst_49821);
var inst_49827 = cljs.core.count.call(null,inst_49825);
var inst_49807 = inst_49826;
var inst_49808 = inst_49825;
var inst_49809 = inst_49827;
var inst_49810 = (0);
var state_49866__$1 = (function (){var statearr_49900 = state_49866;
(statearr_49900[(12)] = inst_49810);

(statearr_49900[(13)] = inst_49809);

(statearr_49900[(14)] = inst_49808);

(statearr_49900[(15)] = inst_49807);

return statearr_49900;
})();
var statearr_49901_49942 = state_49866__$1;
(statearr_49901_49942[(2)] = null);

(statearr_49901_49942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (10))){
var inst_49810 = (state_49866[(12)]);
var inst_49809 = (state_49866[(13)]);
var inst_49808 = (state_49866[(14)]);
var inst_49807 = (state_49866[(15)]);
var inst_49815 = cljs.core._nth.call(null,inst_49808,inst_49810);
var inst_49816 = cljs.core.async.muxch_STAR_.call(null,inst_49815);
var inst_49817 = cljs.core.async.close_BANG_.call(null,inst_49816);
var inst_49818 = (inst_49810 + (1));
var tmp49896 = inst_49809;
var tmp49897 = inst_49808;
var tmp49898 = inst_49807;
var inst_49807__$1 = tmp49898;
var inst_49808__$1 = tmp49897;
var inst_49809__$1 = tmp49896;
var inst_49810__$1 = inst_49818;
var state_49866__$1 = (function (){var statearr_49902 = state_49866;
(statearr_49902[(12)] = inst_49810__$1);

(statearr_49902[(13)] = inst_49809__$1);

(statearr_49902[(14)] = inst_49808__$1);

(statearr_49902[(17)] = inst_49817);

(statearr_49902[(15)] = inst_49807__$1);

return statearr_49902;
})();
var statearr_49903_49943 = state_49866__$1;
(statearr_49903_49943[(2)] = null);

(statearr_49903_49943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (18))){
var inst_49836 = (state_49866[(2)]);
var state_49866__$1 = state_49866;
var statearr_49904_49944 = state_49866__$1;
(statearr_49904_49944[(2)] = inst_49836);

(statearr_49904_49944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49867 === (8))){
var inst_49810 = (state_49866[(12)]);
var inst_49809 = (state_49866[(13)]);
var inst_49812 = (inst_49810 < inst_49809);
var inst_49813 = inst_49812;
var state_49866__$1 = state_49866;
if(cljs.core.truth_(inst_49813)){
var statearr_49905_49945 = state_49866__$1;
(statearr_49905_49945[(1)] = (10));

} else {
var statearr_49906_49946 = state_49866__$1;
(statearr_49906_49946[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__47999__auto___49918,mults,ensure_mult,p))
;
return ((function (switch__47887__auto__,c__47999__auto___49918,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_49910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49910[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_49910[(1)] = (1));

return statearr_49910;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_49866){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_49866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e49911){if((e49911 instanceof Object)){
var ex__47891__auto__ = e49911;
var statearr_49912_49947 = state_49866;
(statearr_49912_49947[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49948 = state_49866;
state_49866 = G__49948;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_49866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_49866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___49918,mults,ensure_mult,p))
})();
var state__48001__auto__ = (function (){var statearr_49913 = f__48000__auto__.call(null);
(statearr_49913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___49918);

return statearr_49913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___49918,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args49949 = [];
var len__45257__auto___49952 = arguments.length;
var i__45258__auto___49953 = (0);
while(true){
if((i__45258__auto___49953 < len__45257__auto___49952)){
args49949.push((arguments[i__45258__auto___49953]));

var G__49954 = (i__45258__auto___49953 + (1));
i__45258__auto___49953 = G__49954;
continue;
} else {
}
break;
}

var G__49951 = args49949.length;
switch (G__49951) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49949.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args49956 = [];
var len__45257__auto___49959 = arguments.length;
var i__45258__auto___49960 = (0);
while(true){
if((i__45258__auto___49960 < len__45257__auto___49959)){
args49956.push((arguments[i__45258__auto___49960]));

var G__49961 = (i__45258__auto___49960 + (1));
i__45258__auto___49960 = G__49961;
continue;
} else {
}
break;
}

var G__49958 = args49956.length;
switch (G__49958) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49956.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args49963 = [];
var len__45257__auto___50034 = arguments.length;
var i__45258__auto___50035 = (0);
while(true){
if((i__45258__auto___50035 < len__45257__auto___50034)){
args49963.push((arguments[i__45258__auto___50035]));

var G__50036 = (i__45258__auto___50035 + (1));
i__45258__auto___50035 = G__50036;
continue;
} else {
}
break;
}

var G__49965 = args49963.length;
switch (G__49965) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49963.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__47999__auto___50038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___50038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___50038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50004){
var state_val_50005 = (state_50004[(1)]);
if((state_val_50005 === (7))){
var state_50004__$1 = state_50004;
var statearr_50006_50039 = state_50004__$1;
(statearr_50006_50039[(2)] = null);

(statearr_50006_50039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (1))){
var state_50004__$1 = state_50004;
var statearr_50007_50040 = state_50004__$1;
(statearr_50007_50040[(2)] = null);

(statearr_50007_50040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (4))){
var inst_49968 = (state_50004[(7)]);
var inst_49970 = (inst_49968 < cnt);
var state_50004__$1 = state_50004;
if(cljs.core.truth_(inst_49970)){
var statearr_50008_50041 = state_50004__$1;
(statearr_50008_50041[(1)] = (6));

} else {
var statearr_50009_50042 = state_50004__$1;
(statearr_50009_50042[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (15))){
var inst_50000 = (state_50004[(2)]);
var state_50004__$1 = state_50004;
var statearr_50010_50043 = state_50004__$1;
(statearr_50010_50043[(2)] = inst_50000);

(statearr_50010_50043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (13))){
var inst_49993 = cljs.core.async.close_BANG_.call(null,out);
var state_50004__$1 = state_50004;
var statearr_50011_50044 = state_50004__$1;
(statearr_50011_50044[(2)] = inst_49993);

(statearr_50011_50044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (6))){
var state_50004__$1 = state_50004;
var statearr_50012_50045 = state_50004__$1;
(statearr_50012_50045[(2)] = null);

(statearr_50012_50045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (3))){
var inst_50002 = (state_50004[(2)]);
var state_50004__$1 = state_50004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50004__$1,inst_50002);
} else {
if((state_val_50005 === (12))){
var inst_49990 = (state_50004[(8)]);
var inst_49990__$1 = (state_50004[(2)]);
var inst_49991 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49990__$1);
var state_50004__$1 = (function (){var statearr_50013 = state_50004;
(statearr_50013[(8)] = inst_49990__$1);

return statearr_50013;
})();
if(cljs.core.truth_(inst_49991)){
var statearr_50014_50046 = state_50004__$1;
(statearr_50014_50046[(1)] = (13));

} else {
var statearr_50015_50047 = state_50004__$1;
(statearr_50015_50047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (2))){
var inst_49967 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49968 = (0);
var state_50004__$1 = (function (){var statearr_50016 = state_50004;
(statearr_50016[(7)] = inst_49968);

(statearr_50016[(9)] = inst_49967);

return statearr_50016;
})();
var statearr_50017_50048 = state_50004__$1;
(statearr_50017_50048[(2)] = null);

(statearr_50017_50048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (11))){
var inst_49968 = (state_50004[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50004,(10),Object,null,(9));
var inst_49977 = chs__$1.call(null,inst_49968);
var inst_49978 = done.call(null,inst_49968);
var inst_49979 = cljs.core.async.take_BANG_.call(null,inst_49977,inst_49978);
var state_50004__$1 = state_50004;
var statearr_50018_50049 = state_50004__$1;
(statearr_50018_50049[(2)] = inst_49979);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50004__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (9))){
var inst_49968 = (state_50004[(7)]);
var inst_49981 = (state_50004[(2)]);
var inst_49982 = (inst_49968 + (1));
var inst_49968__$1 = inst_49982;
var state_50004__$1 = (function (){var statearr_50019 = state_50004;
(statearr_50019[(7)] = inst_49968__$1);

(statearr_50019[(10)] = inst_49981);

return statearr_50019;
})();
var statearr_50020_50050 = state_50004__$1;
(statearr_50020_50050[(2)] = null);

(statearr_50020_50050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (5))){
var inst_49988 = (state_50004[(2)]);
var state_50004__$1 = (function (){var statearr_50021 = state_50004;
(statearr_50021[(11)] = inst_49988);

return statearr_50021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50004__$1,(12),dchan);
} else {
if((state_val_50005 === (14))){
var inst_49990 = (state_50004[(8)]);
var inst_49995 = cljs.core.apply.call(null,f,inst_49990);
var state_50004__$1 = state_50004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50004__$1,(16),out,inst_49995);
} else {
if((state_val_50005 === (16))){
var inst_49997 = (state_50004[(2)]);
var state_50004__$1 = (function (){var statearr_50022 = state_50004;
(statearr_50022[(12)] = inst_49997);

return statearr_50022;
})();
var statearr_50023_50051 = state_50004__$1;
(statearr_50023_50051[(2)] = null);

(statearr_50023_50051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (10))){
var inst_49972 = (state_50004[(2)]);
var inst_49973 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50004__$1 = (function (){var statearr_50024 = state_50004;
(statearr_50024[(13)] = inst_49972);

return statearr_50024;
})();
var statearr_50025_50052 = state_50004__$1;
(statearr_50025_50052[(2)] = inst_49973);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50004__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (8))){
var inst_49986 = (state_50004[(2)]);
var state_50004__$1 = state_50004;
var statearr_50026_50053 = state_50004__$1;
(statearr_50026_50053[(2)] = inst_49986);

(statearr_50026_50053[(1)] = (5));


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
});})(c__47999__auto___50038,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__47887__auto__,c__47999__auto___50038,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_50030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50030[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_50030[(1)] = (1));

return statearr_50030;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_50004){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_50004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e50031){if((e50031 instanceof Object)){
var ex__47891__auto__ = e50031;
var statearr_50032_50054 = state_50004;
(statearr_50032_50054[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50055 = state_50004;
state_50004 = G__50055;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_50004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_50004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___50038,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48001__auto__ = (function (){var statearr_50033 = f__48000__auto__.call(null);
(statearr_50033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___50038);

return statearr_50033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___50038,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args50057 = [];
var len__45257__auto___50115 = arguments.length;
var i__45258__auto___50116 = (0);
while(true){
if((i__45258__auto___50116 < len__45257__auto___50115)){
args50057.push((arguments[i__45258__auto___50116]));

var G__50117 = (i__45258__auto___50116 + (1));
i__45258__auto___50116 = G__50117;
continue;
} else {
}
break;
}

var G__50059 = args50057.length;
switch (G__50059) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50057.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47999__auto___50119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___50119,out){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___50119,out){
return (function (state_50091){
var state_val_50092 = (state_50091[(1)]);
if((state_val_50092 === (7))){
var inst_50070 = (state_50091[(7)]);
var inst_50071 = (state_50091[(8)]);
var inst_50070__$1 = (state_50091[(2)]);
var inst_50071__$1 = cljs.core.nth.call(null,inst_50070__$1,(0),null);
var inst_50072 = cljs.core.nth.call(null,inst_50070__$1,(1),null);
var inst_50073 = (inst_50071__$1 == null);
var state_50091__$1 = (function (){var statearr_50093 = state_50091;
(statearr_50093[(7)] = inst_50070__$1);

(statearr_50093[(8)] = inst_50071__$1);

(statearr_50093[(9)] = inst_50072);

return statearr_50093;
})();
if(cljs.core.truth_(inst_50073)){
var statearr_50094_50120 = state_50091__$1;
(statearr_50094_50120[(1)] = (8));

} else {
var statearr_50095_50121 = state_50091__$1;
(statearr_50095_50121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50092 === (1))){
var inst_50060 = cljs.core.vec.call(null,chs);
var inst_50061 = inst_50060;
var state_50091__$1 = (function (){var statearr_50096 = state_50091;
(statearr_50096[(10)] = inst_50061);

return statearr_50096;
})();
var statearr_50097_50122 = state_50091__$1;
(statearr_50097_50122[(2)] = null);

(statearr_50097_50122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50092 === (4))){
var inst_50061 = (state_50091[(10)]);
var state_50091__$1 = state_50091;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50091__$1,(7),inst_50061);
} else {
if((state_val_50092 === (6))){
var inst_50087 = (state_50091[(2)]);
var state_50091__$1 = state_50091;
var statearr_50098_50123 = state_50091__$1;
(statearr_50098_50123[(2)] = inst_50087);

(statearr_50098_50123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50092 === (3))){
var inst_50089 = (state_50091[(2)]);
var state_50091__$1 = state_50091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50091__$1,inst_50089);
} else {
if((state_val_50092 === (2))){
var inst_50061 = (state_50091[(10)]);
var inst_50063 = cljs.core.count.call(null,inst_50061);
var inst_50064 = (inst_50063 > (0));
var state_50091__$1 = state_50091;
if(cljs.core.truth_(inst_50064)){
var statearr_50100_50124 = state_50091__$1;
(statearr_50100_50124[(1)] = (4));

} else {
var statearr_50101_50125 = state_50091__$1;
(statearr_50101_50125[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50092 === (11))){
var inst_50061 = (state_50091[(10)]);
var inst_50080 = (state_50091[(2)]);
var tmp50099 = inst_50061;
var inst_50061__$1 = tmp50099;
var state_50091__$1 = (function (){var statearr_50102 = state_50091;
(statearr_50102[(10)] = inst_50061__$1);

(statearr_50102[(11)] = inst_50080);

return statearr_50102;
})();
var statearr_50103_50126 = state_50091__$1;
(statearr_50103_50126[(2)] = null);

(statearr_50103_50126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50092 === (9))){
var inst_50071 = (state_50091[(8)]);
var state_50091__$1 = state_50091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50091__$1,(11),out,inst_50071);
} else {
if((state_val_50092 === (5))){
var inst_50085 = cljs.core.async.close_BANG_.call(null,out);
var state_50091__$1 = state_50091;
var statearr_50104_50127 = state_50091__$1;
(statearr_50104_50127[(2)] = inst_50085);

(statearr_50104_50127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50092 === (10))){
var inst_50083 = (state_50091[(2)]);
var state_50091__$1 = state_50091;
var statearr_50105_50128 = state_50091__$1;
(statearr_50105_50128[(2)] = inst_50083);

(statearr_50105_50128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50092 === (8))){
var inst_50070 = (state_50091[(7)]);
var inst_50061 = (state_50091[(10)]);
var inst_50071 = (state_50091[(8)]);
var inst_50072 = (state_50091[(9)]);
var inst_50075 = (function (){var cs = inst_50061;
var vec__50066 = inst_50070;
var v = inst_50071;
var c = inst_50072;
return ((function (cs,vec__50066,v,c,inst_50070,inst_50061,inst_50071,inst_50072,state_val_50092,c__47999__auto___50119,out){
return (function (p1__50056_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__50056_SHARP_);
});
;})(cs,vec__50066,v,c,inst_50070,inst_50061,inst_50071,inst_50072,state_val_50092,c__47999__auto___50119,out))
})();
var inst_50076 = cljs.core.filterv.call(null,inst_50075,inst_50061);
var inst_50061__$1 = inst_50076;
var state_50091__$1 = (function (){var statearr_50106 = state_50091;
(statearr_50106[(10)] = inst_50061__$1);

return statearr_50106;
})();
var statearr_50107_50129 = state_50091__$1;
(statearr_50107_50129[(2)] = null);

(statearr_50107_50129[(1)] = (2));


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
});})(c__47999__auto___50119,out))
;
return ((function (switch__47887__auto__,c__47999__auto___50119,out){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_50111 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50111[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_50111[(1)] = (1));

return statearr_50111;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_50091){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_50091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e50112){if((e50112 instanceof Object)){
var ex__47891__auto__ = e50112;
var statearr_50113_50130 = state_50091;
(statearr_50113_50130[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50131 = state_50091;
state_50091 = G__50131;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_50091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_50091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___50119,out))
})();
var state__48001__auto__ = (function (){var statearr_50114 = f__48000__auto__.call(null);
(statearr_50114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___50119);

return statearr_50114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___50119,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args50132 = [];
var len__45257__auto___50181 = arguments.length;
var i__45258__auto___50182 = (0);
while(true){
if((i__45258__auto___50182 < len__45257__auto___50181)){
args50132.push((arguments[i__45258__auto___50182]));

var G__50183 = (i__45258__auto___50182 + (1));
i__45258__auto___50182 = G__50183;
continue;
} else {
}
break;
}

var G__50134 = args50132.length;
switch (G__50134) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50132.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47999__auto___50185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___50185,out){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___50185,out){
return (function (state_50158){
var state_val_50159 = (state_50158[(1)]);
if((state_val_50159 === (7))){
var inst_50140 = (state_50158[(7)]);
var inst_50140__$1 = (state_50158[(2)]);
var inst_50141 = (inst_50140__$1 == null);
var inst_50142 = cljs.core.not.call(null,inst_50141);
var state_50158__$1 = (function (){var statearr_50160 = state_50158;
(statearr_50160[(7)] = inst_50140__$1);

return statearr_50160;
})();
if(inst_50142){
var statearr_50161_50186 = state_50158__$1;
(statearr_50161_50186[(1)] = (8));

} else {
var statearr_50162_50187 = state_50158__$1;
(statearr_50162_50187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (1))){
var inst_50135 = (0);
var state_50158__$1 = (function (){var statearr_50163 = state_50158;
(statearr_50163[(8)] = inst_50135);

return statearr_50163;
})();
var statearr_50164_50188 = state_50158__$1;
(statearr_50164_50188[(2)] = null);

(statearr_50164_50188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (4))){
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50158__$1,(7),ch);
} else {
if((state_val_50159 === (6))){
var inst_50153 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50165_50189 = state_50158__$1;
(statearr_50165_50189[(2)] = inst_50153);

(statearr_50165_50189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (3))){
var inst_50155 = (state_50158[(2)]);
var inst_50156 = cljs.core.async.close_BANG_.call(null,out);
var state_50158__$1 = (function (){var statearr_50166 = state_50158;
(statearr_50166[(9)] = inst_50155);

return statearr_50166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50158__$1,inst_50156);
} else {
if((state_val_50159 === (2))){
var inst_50135 = (state_50158[(8)]);
var inst_50137 = (inst_50135 < n);
var state_50158__$1 = state_50158;
if(cljs.core.truth_(inst_50137)){
var statearr_50167_50190 = state_50158__$1;
(statearr_50167_50190[(1)] = (4));

} else {
var statearr_50168_50191 = state_50158__$1;
(statearr_50168_50191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (11))){
var inst_50135 = (state_50158[(8)]);
var inst_50145 = (state_50158[(2)]);
var inst_50146 = (inst_50135 + (1));
var inst_50135__$1 = inst_50146;
var state_50158__$1 = (function (){var statearr_50169 = state_50158;
(statearr_50169[(10)] = inst_50145);

(statearr_50169[(8)] = inst_50135__$1);

return statearr_50169;
})();
var statearr_50170_50192 = state_50158__$1;
(statearr_50170_50192[(2)] = null);

(statearr_50170_50192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (9))){
var state_50158__$1 = state_50158;
var statearr_50171_50193 = state_50158__$1;
(statearr_50171_50193[(2)] = null);

(statearr_50171_50193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (5))){
var state_50158__$1 = state_50158;
var statearr_50172_50194 = state_50158__$1;
(statearr_50172_50194[(2)] = null);

(statearr_50172_50194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (10))){
var inst_50150 = (state_50158[(2)]);
var state_50158__$1 = state_50158;
var statearr_50173_50195 = state_50158__$1;
(statearr_50173_50195[(2)] = inst_50150);

(statearr_50173_50195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50159 === (8))){
var inst_50140 = (state_50158[(7)]);
var state_50158__$1 = state_50158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50158__$1,(11),out,inst_50140);
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
});})(c__47999__auto___50185,out))
;
return ((function (switch__47887__auto__,c__47999__auto___50185,out){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_50177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50177[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_50177[(1)] = (1));

return statearr_50177;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_50158){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_50158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e50178){if((e50178 instanceof Object)){
var ex__47891__auto__ = e50178;
var statearr_50179_50196 = state_50158;
(statearr_50179_50196[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50197 = state_50158;
state_50158 = G__50197;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_50158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_50158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___50185,out))
})();
var state__48001__auto__ = (function (){var statearr_50180 = f__48000__auto__.call(null);
(statearr_50180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___50185);

return statearr_50180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___50185,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50205 = (function (map_LT_,f,ch,meta50206){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta50206 = meta50206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50207,meta50206__$1){
var self__ = this;
var _50207__$1 = this;
return (new cljs.core.async.t_cljs$core$async50205(self__.map_LT_,self__.f,self__.ch,meta50206__$1));
});

cljs.core.async.t_cljs$core$async50205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50207){
var self__ = this;
var _50207__$1 = this;
return self__.meta50206;
});

cljs.core.async.t_cljs$core$async50205.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async50205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50205.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50205.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async50205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async50208 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50208 = (function (map_LT_,f,ch,meta50206,_,fn1,meta50209){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta50206 = meta50206;
this._ = _;
this.fn1 = fn1;
this.meta50209 = meta50209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50210,meta50209__$1){
var self__ = this;
var _50210__$1 = this;
return (new cljs.core.async.t_cljs$core$async50208(self__.map_LT_,self__.f,self__.ch,self__.meta50206,self__._,self__.fn1,meta50209__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async50208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50210){
var self__ = this;
var _50210__$1 = this;
return self__.meta50209;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50208.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async50208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50208.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__50198_SHARP_){
return f1.call(null,(((p1__50198_SHARP_ == null))?null:self__.f.call(null,p1__50198_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async50208.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50206","meta50206",987051029,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50205","cljs.core.async/t_cljs$core$async50205",-1567319017,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50209","meta50209",-249789708,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50208.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50208";

cljs.core.async.t_cljs$core$async50208.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async50208");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async50208 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50208(map_LT___$1,f__$1,ch__$1,meta50206__$1,___$2,fn1__$1,meta50209){
return (new cljs.core.async.t_cljs$core$async50208(map_LT___$1,f__$1,ch__$1,meta50206__$1,___$2,fn1__$1,meta50209));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async50208(self__.map_LT_,self__.f,self__.ch,self__.meta50206,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__44170__auto__ = ret;
if(cljs.core.truth_(and__44170__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__44170__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async50205.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async50205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async50205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50206","meta50206",987051029,null)], null);
});

cljs.core.async.t_cljs$core$async50205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50205";

cljs.core.async.t_cljs$core$async50205.cljs$lang$ctorPrWriter = (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async50205");
});

cljs.core.async.__GT_t_cljs$core$async50205 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50205(map_LT___$1,f__$1,ch__$1,meta50206){
return (new cljs.core.async.t_cljs$core$async50205(map_LT___$1,f__$1,ch__$1,meta50206));
});

}

return (new cljs.core.async.t_cljs$core$async50205(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50214 = (function (map_GT_,f,ch,meta50215){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta50215 = meta50215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50216,meta50215__$1){
var self__ = this;
var _50216__$1 = this;
return (new cljs.core.async.t_cljs$core$async50214(self__.map_GT_,self__.f,self__.ch,meta50215__$1));
});

cljs.core.async.t_cljs$core$async50214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50216){
var self__ = this;
var _50216__$1 = this;
return self__.meta50215;
});

cljs.core.async.t_cljs$core$async50214.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async50214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50214.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async50214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50214.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async50214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async50214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50215","meta50215",-1282969781,null)], null);
});

cljs.core.async.t_cljs$core$async50214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50214";

cljs.core.async.t_cljs$core$async50214.cljs$lang$ctorPrWriter = (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async50214");
});

cljs.core.async.__GT_t_cljs$core$async50214 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50214(map_GT___$1,f__$1,ch__$1,meta50215){
return (new cljs.core.async.t_cljs$core$async50214(map_GT___$1,f__$1,ch__$1,meta50215));
});

}

return (new cljs.core.async.t_cljs$core$async50214(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async50220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50220 = (function (filter_GT_,p,ch,meta50221){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta50221 = meta50221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50222,meta50221__$1){
var self__ = this;
var _50222__$1 = this;
return (new cljs.core.async.t_cljs$core$async50220(self__.filter_GT_,self__.p,self__.ch,meta50221__$1));
});

cljs.core.async.t_cljs$core$async50220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50222){
var self__ = this;
var _50222__$1 = this;
return self__.meta50221;
});

cljs.core.async.t_cljs$core$async50220.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async50220.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50220.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50220.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async50220.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50220.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async50220.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async50220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50221","meta50221",746391098,null)], null);
});

cljs.core.async.t_cljs$core$async50220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50220";

cljs.core.async.t_cljs$core$async50220.cljs$lang$ctorPrWriter = (function (this__44788__auto__,writer__44789__auto__,opt__44790__auto__){
return cljs.core._write.call(null,writer__44789__auto__,"cljs.core.async/t_cljs$core$async50220");
});

cljs.core.async.__GT_t_cljs$core$async50220 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50220(filter_GT___$1,p__$1,ch__$1,meta50221){
return (new cljs.core.async.t_cljs$core$async50220(filter_GT___$1,p__$1,ch__$1,meta50221));
});

}

return (new cljs.core.async.t_cljs$core$async50220(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args50223 = [];
var len__45257__auto___50267 = arguments.length;
var i__45258__auto___50268 = (0);
while(true){
if((i__45258__auto___50268 < len__45257__auto___50267)){
args50223.push((arguments[i__45258__auto___50268]));

var G__50269 = (i__45258__auto___50268 + (1));
i__45258__auto___50268 = G__50269;
continue;
} else {
}
break;
}

var G__50225 = args50223.length;
switch (G__50225) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50223.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47999__auto___50271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___50271,out){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___50271,out){
return (function (state_50246){
var state_val_50247 = (state_50246[(1)]);
if((state_val_50247 === (7))){
var inst_50242 = (state_50246[(2)]);
var state_50246__$1 = state_50246;
var statearr_50248_50272 = state_50246__$1;
(statearr_50248_50272[(2)] = inst_50242);

(statearr_50248_50272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50247 === (1))){
var state_50246__$1 = state_50246;
var statearr_50249_50273 = state_50246__$1;
(statearr_50249_50273[(2)] = null);

(statearr_50249_50273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50247 === (4))){
var inst_50228 = (state_50246[(7)]);
var inst_50228__$1 = (state_50246[(2)]);
var inst_50229 = (inst_50228__$1 == null);
var state_50246__$1 = (function (){var statearr_50250 = state_50246;
(statearr_50250[(7)] = inst_50228__$1);

return statearr_50250;
})();
if(cljs.core.truth_(inst_50229)){
var statearr_50251_50274 = state_50246__$1;
(statearr_50251_50274[(1)] = (5));

} else {
var statearr_50252_50275 = state_50246__$1;
(statearr_50252_50275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50247 === (6))){
var inst_50228 = (state_50246[(7)]);
var inst_50233 = p.call(null,inst_50228);
var state_50246__$1 = state_50246;
if(cljs.core.truth_(inst_50233)){
var statearr_50253_50276 = state_50246__$1;
(statearr_50253_50276[(1)] = (8));

} else {
var statearr_50254_50277 = state_50246__$1;
(statearr_50254_50277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50247 === (3))){
var inst_50244 = (state_50246[(2)]);
var state_50246__$1 = state_50246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50246__$1,inst_50244);
} else {
if((state_val_50247 === (2))){
var state_50246__$1 = state_50246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50246__$1,(4),ch);
} else {
if((state_val_50247 === (11))){
var inst_50236 = (state_50246[(2)]);
var state_50246__$1 = state_50246;
var statearr_50255_50278 = state_50246__$1;
(statearr_50255_50278[(2)] = inst_50236);

(statearr_50255_50278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50247 === (9))){
var state_50246__$1 = state_50246;
var statearr_50256_50279 = state_50246__$1;
(statearr_50256_50279[(2)] = null);

(statearr_50256_50279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50247 === (5))){
var inst_50231 = cljs.core.async.close_BANG_.call(null,out);
var state_50246__$1 = state_50246;
var statearr_50257_50280 = state_50246__$1;
(statearr_50257_50280[(2)] = inst_50231);

(statearr_50257_50280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50247 === (10))){
var inst_50239 = (state_50246[(2)]);
var state_50246__$1 = (function (){var statearr_50258 = state_50246;
(statearr_50258[(8)] = inst_50239);

return statearr_50258;
})();
var statearr_50259_50281 = state_50246__$1;
(statearr_50259_50281[(2)] = null);

(statearr_50259_50281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50247 === (8))){
var inst_50228 = (state_50246[(7)]);
var state_50246__$1 = state_50246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50246__$1,(11),out,inst_50228);
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
});})(c__47999__auto___50271,out))
;
return ((function (switch__47887__auto__,c__47999__auto___50271,out){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_50263 = [null,null,null,null,null,null,null,null,null];
(statearr_50263[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_50263[(1)] = (1));

return statearr_50263;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_50246){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_50246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e50264){if((e50264 instanceof Object)){
var ex__47891__auto__ = e50264;
var statearr_50265_50282 = state_50246;
(statearr_50265_50282[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50283 = state_50246;
state_50246 = G__50283;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_50246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_50246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___50271,out))
})();
var state__48001__auto__ = (function (){var statearr_50266 = f__48000__auto__.call(null);
(statearr_50266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___50271);

return statearr_50266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___50271,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args50284 = [];
var len__45257__auto___50287 = arguments.length;
var i__45258__auto___50288 = (0);
while(true){
if((i__45258__auto___50288 < len__45257__auto___50287)){
args50284.push((arguments[i__45258__auto___50288]));

var G__50289 = (i__45258__auto___50288 + (1));
i__45258__auto___50288 = G__50289;
continue;
} else {
}
break;
}

var G__50286 = args50284.length;
switch (G__50286) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50284.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__){
return (function (state_50456){
var state_val_50457 = (state_50456[(1)]);
if((state_val_50457 === (7))){
var inst_50452 = (state_50456[(2)]);
var state_50456__$1 = state_50456;
var statearr_50458_50499 = state_50456__$1;
(statearr_50458_50499[(2)] = inst_50452);

(statearr_50458_50499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (20))){
var inst_50422 = (state_50456[(7)]);
var inst_50433 = (state_50456[(2)]);
var inst_50434 = cljs.core.next.call(null,inst_50422);
var inst_50408 = inst_50434;
var inst_50409 = null;
var inst_50410 = (0);
var inst_50411 = (0);
var state_50456__$1 = (function (){var statearr_50459 = state_50456;
(statearr_50459[(8)] = inst_50408);

(statearr_50459[(9)] = inst_50410);

(statearr_50459[(10)] = inst_50411);

(statearr_50459[(11)] = inst_50433);

(statearr_50459[(12)] = inst_50409);

return statearr_50459;
})();
var statearr_50460_50500 = state_50456__$1;
(statearr_50460_50500[(2)] = null);

(statearr_50460_50500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (1))){
var state_50456__$1 = state_50456;
var statearr_50461_50501 = state_50456__$1;
(statearr_50461_50501[(2)] = null);

(statearr_50461_50501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (4))){
var inst_50397 = (state_50456[(13)]);
var inst_50397__$1 = (state_50456[(2)]);
var inst_50398 = (inst_50397__$1 == null);
var state_50456__$1 = (function (){var statearr_50462 = state_50456;
(statearr_50462[(13)] = inst_50397__$1);

return statearr_50462;
})();
if(cljs.core.truth_(inst_50398)){
var statearr_50463_50502 = state_50456__$1;
(statearr_50463_50502[(1)] = (5));

} else {
var statearr_50464_50503 = state_50456__$1;
(statearr_50464_50503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (15))){
var state_50456__$1 = state_50456;
var statearr_50468_50504 = state_50456__$1;
(statearr_50468_50504[(2)] = null);

(statearr_50468_50504[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (21))){
var state_50456__$1 = state_50456;
var statearr_50469_50505 = state_50456__$1;
(statearr_50469_50505[(2)] = null);

(statearr_50469_50505[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (13))){
var inst_50408 = (state_50456[(8)]);
var inst_50410 = (state_50456[(9)]);
var inst_50411 = (state_50456[(10)]);
var inst_50409 = (state_50456[(12)]);
var inst_50418 = (state_50456[(2)]);
var inst_50419 = (inst_50411 + (1));
var tmp50465 = inst_50408;
var tmp50466 = inst_50410;
var tmp50467 = inst_50409;
var inst_50408__$1 = tmp50465;
var inst_50409__$1 = tmp50467;
var inst_50410__$1 = tmp50466;
var inst_50411__$1 = inst_50419;
var state_50456__$1 = (function (){var statearr_50470 = state_50456;
(statearr_50470[(8)] = inst_50408__$1);

(statearr_50470[(9)] = inst_50410__$1);

(statearr_50470[(14)] = inst_50418);

(statearr_50470[(10)] = inst_50411__$1);

(statearr_50470[(12)] = inst_50409__$1);

return statearr_50470;
})();
var statearr_50471_50506 = state_50456__$1;
(statearr_50471_50506[(2)] = null);

(statearr_50471_50506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (22))){
var state_50456__$1 = state_50456;
var statearr_50472_50507 = state_50456__$1;
(statearr_50472_50507[(2)] = null);

(statearr_50472_50507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (6))){
var inst_50397 = (state_50456[(13)]);
var inst_50406 = f.call(null,inst_50397);
var inst_50407 = cljs.core.seq.call(null,inst_50406);
var inst_50408 = inst_50407;
var inst_50409 = null;
var inst_50410 = (0);
var inst_50411 = (0);
var state_50456__$1 = (function (){var statearr_50473 = state_50456;
(statearr_50473[(8)] = inst_50408);

(statearr_50473[(9)] = inst_50410);

(statearr_50473[(10)] = inst_50411);

(statearr_50473[(12)] = inst_50409);

return statearr_50473;
})();
var statearr_50474_50508 = state_50456__$1;
(statearr_50474_50508[(2)] = null);

(statearr_50474_50508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (17))){
var inst_50422 = (state_50456[(7)]);
var inst_50426 = cljs.core.chunk_first.call(null,inst_50422);
var inst_50427 = cljs.core.chunk_rest.call(null,inst_50422);
var inst_50428 = cljs.core.count.call(null,inst_50426);
var inst_50408 = inst_50427;
var inst_50409 = inst_50426;
var inst_50410 = inst_50428;
var inst_50411 = (0);
var state_50456__$1 = (function (){var statearr_50475 = state_50456;
(statearr_50475[(8)] = inst_50408);

(statearr_50475[(9)] = inst_50410);

(statearr_50475[(10)] = inst_50411);

(statearr_50475[(12)] = inst_50409);

return statearr_50475;
})();
var statearr_50476_50509 = state_50456__$1;
(statearr_50476_50509[(2)] = null);

(statearr_50476_50509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (3))){
var inst_50454 = (state_50456[(2)]);
var state_50456__$1 = state_50456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50456__$1,inst_50454);
} else {
if((state_val_50457 === (12))){
var inst_50442 = (state_50456[(2)]);
var state_50456__$1 = state_50456;
var statearr_50477_50510 = state_50456__$1;
(statearr_50477_50510[(2)] = inst_50442);

(statearr_50477_50510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (2))){
var state_50456__$1 = state_50456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50456__$1,(4),in$);
} else {
if((state_val_50457 === (23))){
var inst_50450 = (state_50456[(2)]);
var state_50456__$1 = state_50456;
var statearr_50478_50511 = state_50456__$1;
(statearr_50478_50511[(2)] = inst_50450);

(statearr_50478_50511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (19))){
var inst_50437 = (state_50456[(2)]);
var state_50456__$1 = state_50456;
var statearr_50479_50512 = state_50456__$1;
(statearr_50479_50512[(2)] = inst_50437);

(statearr_50479_50512[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (11))){
var inst_50408 = (state_50456[(8)]);
var inst_50422 = (state_50456[(7)]);
var inst_50422__$1 = cljs.core.seq.call(null,inst_50408);
var state_50456__$1 = (function (){var statearr_50480 = state_50456;
(statearr_50480[(7)] = inst_50422__$1);

return statearr_50480;
})();
if(inst_50422__$1){
var statearr_50481_50513 = state_50456__$1;
(statearr_50481_50513[(1)] = (14));

} else {
var statearr_50482_50514 = state_50456__$1;
(statearr_50482_50514[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (9))){
var inst_50444 = (state_50456[(2)]);
var inst_50445 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_50456__$1 = (function (){var statearr_50483 = state_50456;
(statearr_50483[(15)] = inst_50444);

return statearr_50483;
})();
if(cljs.core.truth_(inst_50445)){
var statearr_50484_50515 = state_50456__$1;
(statearr_50484_50515[(1)] = (21));

} else {
var statearr_50485_50516 = state_50456__$1;
(statearr_50485_50516[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (5))){
var inst_50400 = cljs.core.async.close_BANG_.call(null,out);
var state_50456__$1 = state_50456;
var statearr_50486_50517 = state_50456__$1;
(statearr_50486_50517[(2)] = inst_50400);

(statearr_50486_50517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (14))){
var inst_50422 = (state_50456[(7)]);
var inst_50424 = cljs.core.chunked_seq_QMARK_.call(null,inst_50422);
var state_50456__$1 = state_50456;
if(inst_50424){
var statearr_50487_50518 = state_50456__$1;
(statearr_50487_50518[(1)] = (17));

} else {
var statearr_50488_50519 = state_50456__$1;
(statearr_50488_50519[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (16))){
var inst_50440 = (state_50456[(2)]);
var state_50456__$1 = state_50456;
var statearr_50489_50520 = state_50456__$1;
(statearr_50489_50520[(2)] = inst_50440);

(statearr_50489_50520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50457 === (10))){
var inst_50411 = (state_50456[(10)]);
var inst_50409 = (state_50456[(12)]);
var inst_50416 = cljs.core._nth.call(null,inst_50409,inst_50411);
var state_50456__$1 = state_50456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50456__$1,(13),out,inst_50416);
} else {
if((state_val_50457 === (18))){
var inst_50422 = (state_50456[(7)]);
var inst_50431 = cljs.core.first.call(null,inst_50422);
var state_50456__$1 = state_50456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50456__$1,(20),out,inst_50431);
} else {
if((state_val_50457 === (8))){
var inst_50410 = (state_50456[(9)]);
var inst_50411 = (state_50456[(10)]);
var inst_50413 = (inst_50411 < inst_50410);
var inst_50414 = inst_50413;
var state_50456__$1 = state_50456;
if(cljs.core.truth_(inst_50414)){
var statearr_50490_50521 = state_50456__$1;
(statearr_50490_50521[(1)] = (10));

} else {
var statearr_50491_50522 = state_50456__$1;
(statearr_50491_50522[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__47888__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47888__auto____0 = (function (){
var statearr_50495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50495[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47888__auto__);

(statearr_50495[(1)] = (1));

return statearr_50495;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47888__auto____1 = (function (state_50456){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_50456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e50496){if((e50496 instanceof Object)){
var ex__47891__auto__ = e50496;
var statearr_50497_50523 = state_50456;
(statearr_50497_50523[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50524 = state_50456;
state_50456 = G__50524;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47888__auto__ = function(state_50456){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47888__auto____1.call(this,state_50456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47888__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47888__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__))
})();
var state__48001__auto__ = (function (){var statearr_50498 = f__48000__auto__.call(null);
(statearr_50498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_50498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__))
);

return c__47999__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args50525 = [];
var len__45257__auto___50528 = arguments.length;
var i__45258__auto___50529 = (0);
while(true){
if((i__45258__auto___50529 < len__45257__auto___50528)){
args50525.push((arguments[i__45258__auto___50529]));

var G__50530 = (i__45258__auto___50529 + (1));
i__45258__auto___50529 = G__50530;
continue;
} else {
}
break;
}

var G__50527 = args50525.length;
switch (G__50527) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50525.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args50532 = [];
var len__45257__auto___50535 = arguments.length;
var i__45258__auto___50536 = (0);
while(true){
if((i__45258__auto___50536 < len__45257__auto___50535)){
args50532.push((arguments[i__45258__auto___50536]));

var G__50537 = (i__45258__auto___50536 + (1));
i__45258__auto___50536 = G__50537;
continue;
} else {
}
break;
}

var G__50534 = args50532.length;
switch (G__50534) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50532.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args50539 = [];
var len__45257__auto___50590 = arguments.length;
var i__45258__auto___50591 = (0);
while(true){
if((i__45258__auto___50591 < len__45257__auto___50590)){
args50539.push((arguments[i__45258__auto___50591]));

var G__50592 = (i__45258__auto___50591 + (1));
i__45258__auto___50591 = G__50592;
continue;
} else {
}
break;
}

var G__50541 = args50539.length;
switch (G__50541) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50539.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47999__auto___50594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___50594,out){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___50594,out){
return (function (state_50565){
var state_val_50566 = (state_50565[(1)]);
if((state_val_50566 === (7))){
var inst_50560 = (state_50565[(2)]);
var state_50565__$1 = state_50565;
var statearr_50567_50595 = state_50565__$1;
(statearr_50567_50595[(2)] = inst_50560);

(statearr_50567_50595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50566 === (1))){
var inst_50542 = null;
var state_50565__$1 = (function (){var statearr_50568 = state_50565;
(statearr_50568[(7)] = inst_50542);

return statearr_50568;
})();
var statearr_50569_50596 = state_50565__$1;
(statearr_50569_50596[(2)] = null);

(statearr_50569_50596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50566 === (4))){
var inst_50545 = (state_50565[(8)]);
var inst_50545__$1 = (state_50565[(2)]);
var inst_50546 = (inst_50545__$1 == null);
var inst_50547 = cljs.core.not.call(null,inst_50546);
var state_50565__$1 = (function (){var statearr_50570 = state_50565;
(statearr_50570[(8)] = inst_50545__$1);

return statearr_50570;
})();
if(inst_50547){
var statearr_50571_50597 = state_50565__$1;
(statearr_50571_50597[(1)] = (5));

} else {
var statearr_50572_50598 = state_50565__$1;
(statearr_50572_50598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50566 === (6))){
var state_50565__$1 = state_50565;
var statearr_50573_50599 = state_50565__$1;
(statearr_50573_50599[(2)] = null);

(statearr_50573_50599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50566 === (3))){
var inst_50562 = (state_50565[(2)]);
var inst_50563 = cljs.core.async.close_BANG_.call(null,out);
var state_50565__$1 = (function (){var statearr_50574 = state_50565;
(statearr_50574[(9)] = inst_50562);

return statearr_50574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50565__$1,inst_50563);
} else {
if((state_val_50566 === (2))){
var state_50565__$1 = state_50565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50565__$1,(4),ch);
} else {
if((state_val_50566 === (11))){
var inst_50545 = (state_50565[(8)]);
var inst_50554 = (state_50565[(2)]);
var inst_50542 = inst_50545;
var state_50565__$1 = (function (){var statearr_50575 = state_50565;
(statearr_50575[(7)] = inst_50542);

(statearr_50575[(10)] = inst_50554);

return statearr_50575;
})();
var statearr_50576_50600 = state_50565__$1;
(statearr_50576_50600[(2)] = null);

(statearr_50576_50600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50566 === (9))){
var inst_50545 = (state_50565[(8)]);
var state_50565__$1 = state_50565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50565__$1,(11),out,inst_50545);
} else {
if((state_val_50566 === (5))){
var inst_50542 = (state_50565[(7)]);
var inst_50545 = (state_50565[(8)]);
var inst_50549 = cljs.core._EQ_.call(null,inst_50545,inst_50542);
var state_50565__$1 = state_50565;
if(inst_50549){
var statearr_50578_50601 = state_50565__$1;
(statearr_50578_50601[(1)] = (8));

} else {
var statearr_50579_50602 = state_50565__$1;
(statearr_50579_50602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50566 === (10))){
var inst_50557 = (state_50565[(2)]);
var state_50565__$1 = state_50565;
var statearr_50580_50603 = state_50565__$1;
(statearr_50580_50603[(2)] = inst_50557);

(statearr_50580_50603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50566 === (8))){
var inst_50542 = (state_50565[(7)]);
var tmp50577 = inst_50542;
var inst_50542__$1 = tmp50577;
var state_50565__$1 = (function (){var statearr_50581 = state_50565;
(statearr_50581[(7)] = inst_50542__$1);

return statearr_50581;
})();
var statearr_50582_50604 = state_50565__$1;
(statearr_50582_50604[(2)] = null);

(statearr_50582_50604[(1)] = (2));


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
});})(c__47999__auto___50594,out))
;
return ((function (switch__47887__auto__,c__47999__auto___50594,out){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_50586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50586[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_50586[(1)] = (1));

return statearr_50586;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_50565){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_50565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e50587){if((e50587 instanceof Object)){
var ex__47891__auto__ = e50587;
var statearr_50588_50605 = state_50565;
(statearr_50588_50605[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50606 = state_50565;
state_50565 = G__50606;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_50565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_50565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___50594,out))
})();
var state__48001__auto__ = (function (){var statearr_50589 = f__48000__auto__.call(null);
(statearr_50589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___50594);

return statearr_50589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___50594,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args50607 = [];
var len__45257__auto___50677 = arguments.length;
var i__45258__auto___50678 = (0);
while(true){
if((i__45258__auto___50678 < len__45257__auto___50677)){
args50607.push((arguments[i__45258__auto___50678]));

var G__50679 = (i__45258__auto___50678 + (1));
i__45258__auto___50678 = G__50679;
continue;
} else {
}
break;
}

var G__50609 = args50607.length;
switch (G__50609) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50607.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47999__auto___50681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___50681,out){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___50681,out){
return (function (state_50647){
var state_val_50648 = (state_50647[(1)]);
if((state_val_50648 === (7))){
var inst_50643 = (state_50647[(2)]);
var state_50647__$1 = state_50647;
var statearr_50649_50682 = state_50647__$1;
(statearr_50649_50682[(2)] = inst_50643);

(statearr_50649_50682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (1))){
var inst_50610 = (new Array(n));
var inst_50611 = inst_50610;
var inst_50612 = (0);
var state_50647__$1 = (function (){var statearr_50650 = state_50647;
(statearr_50650[(7)] = inst_50612);

(statearr_50650[(8)] = inst_50611);

return statearr_50650;
})();
var statearr_50651_50683 = state_50647__$1;
(statearr_50651_50683[(2)] = null);

(statearr_50651_50683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (4))){
var inst_50615 = (state_50647[(9)]);
var inst_50615__$1 = (state_50647[(2)]);
var inst_50616 = (inst_50615__$1 == null);
var inst_50617 = cljs.core.not.call(null,inst_50616);
var state_50647__$1 = (function (){var statearr_50652 = state_50647;
(statearr_50652[(9)] = inst_50615__$1);

return statearr_50652;
})();
if(inst_50617){
var statearr_50653_50684 = state_50647__$1;
(statearr_50653_50684[(1)] = (5));

} else {
var statearr_50654_50685 = state_50647__$1;
(statearr_50654_50685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (15))){
var inst_50637 = (state_50647[(2)]);
var state_50647__$1 = state_50647;
var statearr_50655_50686 = state_50647__$1;
(statearr_50655_50686[(2)] = inst_50637);

(statearr_50655_50686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (13))){
var state_50647__$1 = state_50647;
var statearr_50656_50687 = state_50647__$1;
(statearr_50656_50687[(2)] = null);

(statearr_50656_50687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (6))){
var inst_50612 = (state_50647[(7)]);
var inst_50633 = (inst_50612 > (0));
var state_50647__$1 = state_50647;
if(cljs.core.truth_(inst_50633)){
var statearr_50657_50688 = state_50647__$1;
(statearr_50657_50688[(1)] = (12));

} else {
var statearr_50658_50689 = state_50647__$1;
(statearr_50658_50689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (3))){
var inst_50645 = (state_50647[(2)]);
var state_50647__$1 = state_50647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50647__$1,inst_50645);
} else {
if((state_val_50648 === (12))){
var inst_50611 = (state_50647[(8)]);
var inst_50635 = cljs.core.vec.call(null,inst_50611);
var state_50647__$1 = state_50647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50647__$1,(15),out,inst_50635);
} else {
if((state_val_50648 === (2))){
var state_50647__$1 = state_50647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50647__$1,(4),ch);
} else {
if((state_val_50648 === (11))){
var inst_50627 = (state_50647[(2)]);
var inst_50628 = (new Array(n));
var inst_50611 = inst_50628;
var inst_50612 = (0);
var state_50647__$1 = (function (){var statearr_50659 = state_50647;
(statearr_50659[(10)] = inst_50627);

(statearr_50659[(7)] = inst_50612);

(statearr_50659[(8)] = inst_50611);

return statearr_50659;
})();
var statearr_50660_50690 = state_50647__$1;
(statearr_50660_50690[(2)] = null);

(statearr_50660_50690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (9))){
var inst_50611 = (state_50647[(8)]);
var inst_50625 = cljs.core.vec.call(null,inst_50611);
var state_50647__$1 = state_50647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50647__$1,(11),out,inst_50625);
} else {
if((state_val_50648 === (5))){
var inst_50612 = (state_50647[(7)]);
var inst_50620 = (state_50647[(11)]);
var inst_50615 = (state_50647[(9)]);
var inst_50611 = (state_50647[(8)]);
var inst_50619 = (inst_50611[inst_50612] = inst_50615);
var inst_50620__$1 = (inst_50612 + (1));
var inst_50621 = (inst_50620__$1 < n);
var state_50647__$1 = (function (){var statearr_50661 = state_50647;
(statearr_50661[(11)] = inst_50620__$1);

(statearr_50661[(12)] = inst_50619);

return statearr_50661;
})();
if(cljs.core.truth_(inst_50621)){
var statearr_50662_50691 = state_50647__$1;
(statearr_50662_50691[(1)] = (8));

} else {
var statearr_50663_50692 = state_50647__$1;
(statearr_50663_50692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (14))){
var inst_50640 = (state_50647[(2)]);
var inst_50641 = cljs.core.async.close_BANG_.call(null,out);
var state_50647__$1 = (function (){var statearr_50665 = state_50647;
(statearr_50665[(13)] = inst_50640);

return statearr_50665;
})();
var statearr_50666_50693 = state_50647__$1;
(statearr_50666_50693[(2)] = inst_50641);

(statearr_50666_50693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (10))){
var inst_50631 = (state_50647[(2)]);
var state_50647__$1 = state_50647;
var statearr_50667_50694 = state_50647__$1;
(statearr_50667_50694[(2)] = inst_50631);

(statearr_50667_50694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50648 === (8))){
var inst_50620 = (state_50647[(11)]);
var inst_50611 = (state_50647[(8)]);
var tmp50664 = inst_50611;
var inst_50611__$1 = tmp50664;
var inst_50612 = inst_50620;
var state_50647__$1 = (function (){var statearr_50668 = state_50647;
(statearr_50668[(7)] = inst_50612);

(statearr_50668[(8)] = inst_50611__$1);

return statearr_50668;
})();
var statearr_50669_50695 = state_50647__$1;
(statearr_50669_50695[(2)] = null);

(statearr_50669_50695[(1)] = (2));


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
});})(c__47999__auto___50681,out))
;
return ((function (switch__47887__auto__,c__47999__auto___50681,out){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_50673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50673[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_50673[(1)] = (1));

return statearr_50673;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_50647){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_50647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e50674){if((e50674 instanceof Object)){
var ex__47891__auto__ = e50674;
var statearr_50675_50696 = state_50647;
(statearr_50675_50696[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50697 = state_50647;
state_50647 = G__50697;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_50647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_50647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___50681,out))
})();
var state__48001__auto__ = (function (){var statearr_50676 = f__48000__auto__.call(null);
(statearr_50676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___50681);

return statearr_50676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___50681,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args50698 = [];
var len__45257__auto___50772 = arguments.length;
var i__45258__auto___50773 = (0);
while(true){
if((i__45258__auto___50773 < len__45257__auto___50772)){
args50698.push((arguments[i__45258__auto___50773]));

var G__50774 = (i__45258__auto___50773 + (1));
i__45258__auto___50773 = G__50774;
continue;
} else {
}
break;
}

var G__50700 = args50698.length;
switch (G__50700) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50698.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47999__auto___50776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___50776,out){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___50776,out){
return (function (state_50742){
var state_val_50743 = (state_50742[(1)]);
if((state_val_50743 === (7))){
var inst_50738 = (state_50742[(2)]);
var state_50742__$1 = state_50742;
var statearr_50744_50777 = state_50742__$1;
(statearr_50744_50777[(2)] = inst_50738);

(statearr_50744_50777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (1))){
var inst_50701 = [];
var inst_50702 = inst_50701;
var inst_50703 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50742__$1 = (function (){var statearr_50745 = state_50742;
(statearr_50745[(7)] = inst_50702);

(statearr_50745[(8)] = inst_50703);

return statearr_50745;
})();
var statearr_50746_50778 = state_50742__$1;
(statearr_50746_50778[(2)] = null);

(statearr_50746_50778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (4))){
var inst_50706 = (state_50742[(9)]);
var inst_50706__$1 = (state_50742[(2)]);
var inst_50707 = (inst_50706__$1 == null);
var inst_50708 = cljs.core.not.call(null,inst_50707);
var state_50742__$1 = (function (){var statearr_50747 = state_50742;
(statearr_50747[(9)] = inst_50706__$1);

return statearr_50747;
})();
if(inst_50708){
var statearr_50748_50779 = state_50742__$1;
(statearr_50748_50779[(1)] = (5));

} else {
var statearr_50749_50780 = state_50742__$1;
(statearr_50749_50780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (15))){
var inst_50732 = (state_50742[(2)]);
var state_50742__$1 = state_50742;
var statearr_50750_50781 = state_50742__$1;
(statearr_50750_50781[(2)] = inst_50732);

(statearr_50750_50781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (13))){
var state_50742__$1 = state_50742;
var statearr_50751_50782 = state_50742__$1;
(statearr_50751_50782[(2)] = null);

(statearr_50751_50782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (6))){
var inst_50702 = (state_50742[(7)]);
var inst_50727 = inst_50702.length;
var inst_50728 = (inst_50727 > (0));
var state_50742__$1 = state_50742;
if(cljs.core.truth_(inst_50728)){
var statearr_50752_50783 = state_50742__$1;
(statearr_50752_50783[(1)] = (12));

} else {
var statearr_50753_50784 = state_50742__$1;
(statearr_50753_50784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (3))){
var inst_50740 = (state_50742[(2)]);
var state_50742__$1 = state_50742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50742__$1,inst_50740);
} else {
if((state_val_50743 === (12))){
var inst_50702 = (state_50742[(7)]);
var inst_50730 = cljs.core.vec.call(null,inst_50702);
var state_50742__$1 = state_50742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50742__$1,(15),out,inst_50730);
} else {
if((state_val_50743 === (2))){
var state_50742__$1 = state_50742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50742__$1,(4),ch);
} else {
if((state_val_50743 === (11))){
var inst_50706 = (state_50742[(9)]);
var inst_50710 = (state_50742[(10)]);
var inst_50720 = (state_50742[(2)]);
var inst_50721 = [];
var inst_50722 = inst_50721.push(inst_50706);
var inst_50702 = inst_50721;
var inst_50703 = inst_50710;
var state_50742__$1 = (function (){var statearr_50754 = state_50742;
(statearr_50754[(11)] = inst_50722);

(statearr_50754[(7)] = inst_50702);

(statearr_50754[(12)] = inst_50720);

(statearr_50754[(8)] = inst_50703);

return statearr_50754;
})();
var statearr_50755_50785 = state_50742__$1;
(statearr_50755_50785[(2)] = null);

(statearr_50755_50785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (9))){
var inst_50702 = (state_50742[(7)]);
var inst_50718 = cljs.core.vec.call(null,inst_50702);
var state_50742__$1 = state_50742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50742__$1,(11),out,inst_50718);
} else {
if((state_val_50743 === (5))){
var inst_50706 = (state_50742[(9)]);
var inst_50710 = (state_50742[(10)]);
var inst_50703 = (state_50742[(8)]);
var inst_50710__$1 = f.call(null,inst_50706);
var inst_50711 = cljs.core._EQ_.call(null,inst_50710__$1,inst_50703);
var inst_50712 = cljs.core.keyword_identical_QMARK_.call(null,inst_50703,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50713 = (inst_50711) || (inst_50712);
var state_50742__$1 = (function (){var statearr_50756 = state_50742;
(statearr_50756[(10)] = inst_50710__$1);

return statearr_50756;
})();
if(cljs.core.truth_(inst_50713)){
var statearr_50757_50786 = state_50742__$1;
(statearr_50757_50786[(1)] = (8));

} else {
var statearr_50758_50787 = state_50742__$1;
(statearr_50758_50787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (14))){
var inst_50735 = (state_50742[(2)]);
var inst_50736 = cljs.core.async.close_BANG_.call(null,out);
var state_50742__$1 = (function (){var statearr_50760 = state_50742;
(statearr_50760[(13)] = inst_50735);

return statearr_50760;
})();
var statearr_50761_50788 = state_50742__$1;
(statearr_50761_50788[(2)] = inst_50736);

(statearr_50761_50788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (10))){
var inst_50725 = (state_50742[(2)]);
var state_50742__$1 = state_50742;
var statearr_50762_50789 = state_50742__$1;
(statearr_50762_50789[(2)] = inst_50725);

(statearr_50762_50789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50743 === (8))){
var inst_50702 = (state_50742[(7)]);
var inst_50706 = (state_50742[(9)]);
var inst_50710 = (state_50742[(10)]);
var inst_50715 = inst_50702.push(inst_50706);
var tmp50759 = inst_50702;
var inst_50702__$1 = tmp50759;
var inst_50703 = inst_50710;
var state_50742__$1 = (function (){var statearr_50763 = state_50742;
(statearr_50763[(7)] = inst_50702__$1);

(statearr_50763[(14)] = inst_50715);

(statearr_50763[(8)] = inst_50703);

return statearr_50763;
})();
var statearr_50764_50790 = state_50742__$1;
(statearr_50764_50790[(2)] = null);

(statearr_50764_50790[(1)] = (2));


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
});})(c__47999__auto___50776,out))
;
return ((function (switch__47887__auto__,c__47999__auto___50776,out){
return (function() {
var cljs$core$async$state_machine__47888__auto__ = null;
var cljs$core$async$state_machine__47888__auto____0 = (function (){
var statearr_50768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50768[(0)] = cljs$core$async$state_machine__47888__auto__);

(statearr_50768[(1)] = (1));

return statearr_50768;
});
var cljs$core$async$state_machine__47888__auto____1 = (function (state_50742){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_50742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e50769){if((e50769 instanceof Object)){
var ex__47891__auto__ = e50769;
var statearr_50770_50791 = state_50742;
(statearr_50770_50791[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50792 = state_50742;
state_50742 = G__50792;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
cljs$core$async$state_machine__47888__auto__ = function(state_50742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47888__auto____1.call(this,state_50742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47888__auto____0;
cljs$core$async$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47888__auto____1;
return cljs$core$async$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___50776,out))
})();
var state__48001__auto__ = (function (){var statearr_50771 = f__48000__auto__.call(null);
(statearr_50771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___50776);

return statearr_50771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___50776,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1481668785934