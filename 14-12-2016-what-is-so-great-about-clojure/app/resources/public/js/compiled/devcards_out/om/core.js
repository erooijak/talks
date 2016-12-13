// Compiled by ClojureScript 1.9.229 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('cljsjs.react');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.display_name[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core.display_name["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.init_state[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core.init_state["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.should_update[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,next_props,next_state);
} else {
var m__44854__auto____$1 = (om.core.should_update["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.will_mount[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core.will_mount["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.did_mount[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core.did_mount["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.will_unmount[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.will_update[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,next_props,next_state);
} else {
var m__44854__auto____$1 = (om.core.will_update["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,next_props,next_state);
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.did_update[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,prev_props,prev_state);
} else {
var m__44854__auto____$1 = (om.core.did_update["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,prev_props,prev_state);
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.will_receive_props[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,next_props);
} else {
var m__44854__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,next_props);
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.render[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core.render["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.render_props[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,props,state);
} else {
var m__44854__auto____$1 = (om.core.render_props["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,props,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core.render_state[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,state);
} else {
var m__44854__auto____$1 = (om.core.render_state["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,cursor,korks,f,tag);
} else {
var m__44854__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args47716 = [];
var len__45265__auto___47719 = arguments.length;
var i__45266__auto___47720 = (0);
while(true){
if((i__45266__auto___47720 < len__45265__auto___47719)){
args47716.push((arguments[i__45266__auto___47720]));

var G__47721 = (i__45266__auto___47720 + (1));
i__45266__auto___47720 = G__47721;
continue;
} else {
}
break;
}

var G__47718 = args47716.length;
switch (G__47718) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47716.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._get_state[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core._get_state["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._get_state[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,ks);
} else {
var m__44854__auto____$1 = (om.core._get_state["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args47723 = [];
var len__45265__auto___47726 = arguments.length;
var i__45266__auto___47727 = (0);
while(true){
if((i__45266__auto___47727 < len__45265__auto___47726)){
args47723.push((arguments[i__45266__auto___47727]));

var G__47728 = (i__45266__auto___47727 + (1));
i__45266__auto___47727 = G__47728;
continue;
} else {
}
break;
}

var G__47725 = args47723.length;
switch (G__47725) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47723.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._get_render_state[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._get_render_state[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,ks);
} else {
var m__44854__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args47730 = [];
var len__45265__auto___47733 = arguments.length;
var i__45266__auto___47734 = (0);
while(true){
if((i__45266__auto___47734 < len__45265__auto___47733)){
args47730.push((arguments[i__45266__auto___47734]));

var G__47735 = (i__45266__auto___47734 + (1));
i__45266__auto___47734 = G__47735;
continue;
} else {
}
break;
}

var G__47732 = args47730.length;
switch (G__47732) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47730.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,val,render);
} else {
var m__44854__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,ks,val,render);
} else {
var m__44854__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,ks,val,render);
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._get_queue[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core._get_queue["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,c);
} else {
var m__44854__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__44853__auto__ = (((x == null))?null:x);
var m__44854__auto__ = (om.core._value[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,x);
} else {
var m__44854__auto____$1 = (om.core._value["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__44853__auto__ = (((cursor == null))?null:cursor);
var m__44854__auto__ = (om.core._path[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,cursor);
} else {
var m__44854__auto____$1 = (om.core._path["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__44853__auto__ = (((cursor == null))?null:cursor);
var m__44854__auto__ = (om.core._state[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,cursor);
} else {
var m__44854__auto____$1 = (om.core._state["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args47737 = [];
var len__45265__auto___47740 = arguments.length;
var i__45266__auto___47741 = (0);
while(true){
if((i__45266__auto___47741 < len__45265__auto___47740)){
args47737.push((arguments[i__45266__auto___47741]));

var G__47742 = (i__45266__auto___47741 + (1));
i__45266__auto___47741 = G__47742;
continue;
} else {
}
break;
}

var G__47739 = args47737.length;
switch (G__47739) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47737.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__44853__auto__ = (((value == null))?null:value);
var m__44854__auto__ = (om.core._to_cursor[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,value,state);
} else {
var m__44854__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,value,state);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__44853__auto__ = (((value == null))?null:value);
var m__44854__auto__ = (om.core._to_cursor[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,value,state,path);
} else {
var m__44854__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,value,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__44853__auto__ = (((cursor == null))?null:cursor);
var m__44854__auto__ = (om.core._derive[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,cursor,derived,state,path);
} else {
var m__44854__auto____$1 = (om.core._derive["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,cursor,derived,state,path);
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__44853__auto__ = (((cursor == null))?null:cursor);
var m__44854__auto__ = (om.core._transact_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,cursor,korks,f,tag);
} else {
var m__44854__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,cursor,korks,f,tag);
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__44853__auto__ = (((x == null))?null:x);
var m__44854__auto__ = (om.core._listen_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,x,key,tx_listen);
} else {
var m__44854__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,x,key,tx_listen);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__44853__auto__ = (((x == null))?null:x);
var m__44854__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,x,key);
} else {
var m__44854__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,x,key);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__44853__auto__ = (((x == null))?null:x);
var m__44854__auto__ = (om.core._notify_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,x,tx_data,root_cursor);
} else {
var m__44854__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,x,tx_data,root_cursor);
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,id,p,val);
} else {
var m__44854__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,id,p,val);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,id,p);
} else {
var m__44854__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,id);
} else {
var m__44854__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,id);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._get_property[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,id,p);
} else {
var m__44854__auto____$1 = (om.core._get_property["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,id,p);
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__44853__auto__ = (((cursor == null))?null:cursor);
var m__44854__auto__ = (om.core._root_key[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,cursor);
} else {
var m__44854__auto____$1 = (om.core._root_key["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,cursor);
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._adapt[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,other);
} else {
var m__44854__auto____$1 = (om.core._adapt["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,other);
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,c);
} else {
var m__44854__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$,c);
} else {
var m__44854__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$,c);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__44853__auto__ = (((this$ == null))?null:this$);
var m__44854__auto__ = (om.core._get_deps[goog.typeOf(x__44853__auto__)]);
if(!((m__44854__auto__ == null))){
return m__44854__auto__.call(null,this$);
} else {
var m__44854__auto____$1 = (om.core._get_deps["_"]);
if(!((m__44854__auto____$1 == null))){
return m__44854__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,state)))?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args47748 = [];
var len__45265__auto___47752 = arguments.length;
var i__45266__auto___47753 = (0);
while(true){
if((i__45266__auto___47753 < len__45265__auto___47752)){
args47748.push((arguments[i__45266__auto___47753]));

var G__47754 = (i__45266__auto___47753 + (1));
i__45266__auto___47753 = G__47754;
continue;
} else {
}
break;
}

var G__47750 = args47748.length;
switch (G__47750) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47748.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__47751 = (x.props["__om_cursor"]);
if(cljs.core.seq.call(null,korks__$1)){
return cljs.core.get_in.call(null,G__47751,korks__$1);
} else {
return G__47751;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args47756 = [];
var len__45265__auto___47759 = arguments.length;
var i__45266__auto___47760 = (0);
while(true){
if((i__45266__auto___47760 < len__45265__auto___47759)){
args47756.push((arguments[i__45266__auto___47760]));

var G__47761 = (i__45266__auto___47760 + (1));
i__45266__auto___47760 = G__47761;
continue;
} else {
}
break;
}

var G__47758 = args47756.length;
switch (G__47758) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47756.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.call(null,owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args47763 = [];
var len__45265__auto___47766 = arguments.length;
var i__45266__auto___47767 = (0);
while(true){
if((i__45266__auto___47767 < len__45265__auto___47766)){
args47763.push((arguments[i__45266__auto___47767]));

var G__47768 = (i__45266__auto___47767 + (1));
i__45266__auto___47767 = G__47768;
continue;
} else {
}
break;
}

var G__47765 = args47763.length;
switch (G__47765) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47763.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om.core.get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om.core.get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om.core.get_shared.call(null,owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__47771 = state;
(G__47771["__om_prev_state"] = (state["__om_state"]));

(G__47771["__om_state"] = pending_state);

(G__47771["__om_pending_state"] = null);

return G__47771;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args47772 = [];
var len__45265__auto___47775 = arguments.length;
var i__45266__auto___47776 = (0);
while(true){
if((i__45266__auto___47776 < len__45265__auto___47775)){
args47772.push((arguments[i__45266__auto___47776]));

var G__47777 = (i__45266__auto___47776 + (1));
i__45266__auto___47776 = G__47777;
continue;
} else {
}
break;
}

var G__47774 = args47772.length;
switch (G__47774) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47772.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.call(null,owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__44190__auto__ = props;
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__44190__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_47801 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__44190__auto__ = (state_47801["__om_prev_state"]);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return (state_47801["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__47782 = cljs.core.seq.call(null,refs);
var chunk__47783 = null;
var count__47784 = (0);
var i__47785 = (0);
while(true){
if((i__47785 < count__47784)){
var ref = cljs.core._nth.call(null,chunk__47783,i__47785);
om.core.unobserve.call(null,this$,ref);

var G__47802 = seq__47782;
var G__47803 = chunk__47783;
var G__47804 = count__47784;
var G__47805 = (i__47785 + (1));
seq__47782 = G__47802;
chunk__47783 = G__47803;
count__47784 = G__47804;
i__47785 = G__47805;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47782);
if(temp__4657__auto____$1){
var seq__47782__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47782__$1)){
var c__45001__auto__ = cljs.core.chunk_first.call(null,seq__47782__$1);
var G__47806 = cljs.core.chunk_rest.call(null,seq__47782__$1);
var G__47807 = c__45001__auto__;
var G__47808 = cljs.core.count.call(null,c__45001__auto__);
var G__47809 = (0);
seq__47782 = G__47806;
chunk__47783 = G__47807;
count__47784 = G__47808;
i__47785 = G__47809;
continue;
} else {
var ref = cljs.core.first.call(null,seq__47782__$1);
om.core.unobserve.call(null,this$,ref);

var G__47810 = cljs.core.next.call(null,seq__47782__$1);
var G__47811 = null;
var G__47812 = (0);
var G__47813 = (0);
seq__47782 = G__47810;
chunk__47783 = G__47811;
count__47784 = G__47812;
i__47785 = G__47813;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,c))){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,c))){
return om.core.should_update.call(null,c,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__44178__auto__ = om.core.cursor_QMARK_.call(null,cursor);
if(cljs.core.truth_(and__44178__auto__)){
var and__44178__auto____$1 = om.core.cursor_QMARK_.call(null,next_cursor);
if(cljs.core.truth_(and__44178__auto____$1)){
return cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor));
} else {
return and__44178__auto____$1;
}
} else {
return and__44178__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__44178__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__44178__auto__){
return cljs.core.some.call(null,((function (and__44178__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__47779_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__47779_SHARP_);
});})(and__44178__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__44178__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_47788 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_47789 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_47790 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_47791 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_47792 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,c))){
return om.core.render.call(null,c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,c))){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,c))){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_47792;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_47791;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_47790;

om.core._STAR_state_STAR_ = _STAR_state_STAR_47789;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_47788;
}}),(function (next_props,next_state){
var this$ = this;
var c_47814 = om.core.children.call(null,this$);
if(((!((c_47814 == null)))?(((false) || (c_47814.om$core$IWillUpdate$))?true:(((!c_47814.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_47814):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_47814))){
var state_47815 = this$.state;
om.core.will_update.call(null,c_47814,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__44190__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = ({"__om_id": (function (){var or__44190__auto__ = id;
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))});
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,c))){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_47816 = om.core.children.call(null,this$);
if(((!((c_47816 == null)))?(((false) || (c_47816.om$core$IWillMount$))?true:(((!c_47816.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_47816):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_47816))){
om.core.will_mount.call(null,c_47816);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x47818 = obj;
x47818.om$core$ISetState$ = true;

x47818.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x47818){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__44178__auto__ = !((app_state == null));
if(and__44178__auto__){
return render;
} else {
return and__44178__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x47818))
;

x47818.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x47818){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__44178__auto__ = !((app_state == null));
if(and__44178__auto__){
return render;
} else {
return and__44178__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x47818))
;

x47818.om$core$IGetRenderState$ = true;

x47818.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x47818){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x47818))
;

x47818.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x47818){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x47818))
;

x47818.om$core$IGetState$ = true;

x47818.om$core$IGetState$_get_state$arity$1 = ((function (x47818){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__44190__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return (state["__om_state"]);
}
});})(x47818))
;

x47818.om$core$IGetState$_get_state$arity$2 = ((function (x47818){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x47818))
;

return x47818;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = goog.dom.dataset.get(om.core.get_node.call(null,x),"reactid");
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__44190__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__44190__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,c)))?om.core.init_state.call(null,c):null));
(props["__om_init_state"] = null);

return ({"__om_id": om_id});
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,c))){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_47829 = om.core.children.call(null,this$);
if(((!((c_47829 == null)))?(((false) || (c_47829.om$core$IWillMount$))?true:(((!c_47829.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_47829):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,c_47829))){
om.core.will_mount.call(null,c_47829);
} else {
}

if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$))){
return om.core.no_local_merge_pending_state.call(null,this$);
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,c))){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4657__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__47823 = cljs.core.seq.call(null,refs);
var chunk__47824 = null;
var count__47825 = (0);
var i__47826 = (0);
while(true){
if((i__47826 < count__47825)){
var ref = cljs.core._nth.call(null,chunk__47824,i__47826);
om.core.unobserve.call(null,this$,ref);

var G__47830 = seq__47823;
var G__47831 = chunk__47824;
var G__47832 = count__47825;
var G__47833 = (i__47826 + (1));
seq__47823 = G__47830;
chunk__47824 = G__47831;
count__47825 = G__47832;
i__47826 = G__47833;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__47823);
if(temp__4657__auto____$1){
var seq__47823__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47823__$1)){
var c__45001__auto__ = cljs.core.chunk_first.call(null,seq__47823__$1);
var G__47834 = cljs.core.chunk_rest.call(null,seq__47823__$1);
var G__47835 = c__45001__auto__;
var G__47836 = cljs.core.count.call(null,c__45001__auto__);
var G__47837 = (0);
seq__47823 = G__47834;
chunk__47824 = G__47835;
count__47825 = G__47836;
i__47826 = G__47837;
continue;
} else {
var ref = cljs.core.first.call(null,seq__47823__$1);
om.core.unobserve.call(null,this$,ref);

var G__47838 = cljs.core.next.call(null,seq__47823__$1);
var G__47839 = null;
var G__47840 = (0);
var G__47841 = (0);
seq__47823 = G__47838;
chunk__47824 = G__47839;
count__47825 = G__47840;
i__47826 = G__47841;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_47842 = this$.props;
var c_47843 = om.core.children.call(null,this$);
if(((!((c_47843 == null)))?(((false) || (c_47843.om$core$IWillUpdate$))?true:(((!c_47843.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_47843):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,c_47843))){
var state_47844 = this$.state;
om.core.will_update.call(null,c_47843,om.core.get_props.call(null,({"props": next_props, "isOmComponent": true})),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,c))){
var state_47845 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,({"props": prev_props, "isOmComponent": true})),(function (){var or__44190__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x47847 = cljs.core.clj__GT_js.call(null,methods$);
x47847.om$core$ISetState$ = true;

x47847.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x47847){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__44178__auto__ = !((gstate == null));
if(and__44178__auto__){
return render;
} else {
return and__44178__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x47847))
;

x47847.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x47847){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x47847))
;

x47847.om$core$IGetRenderState$ = true;

x47847.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x47847){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x47847))
;

x47847.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x47847){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x47847))
;

x47847.om$core$IGetState$ = true;

x47847.om$core$IGetState$_get_state$arity$1 = ((function (x47847){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(om.core.mounted_QMARK_.call(null,this$__$1))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__44190__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x47847))
;

x47847.om$core$IGetState$_get_state$arity$2 = ((function (x47847){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x47847))
;

return x47847;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__47851){
var vec__47852 = p__47851;
var k = cljs.core.nth.call(null,vec__47852,(0),null);
var v = cljs.core.nth.call(null,vec__47852,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__47855 = null;
var G__47855__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__47855__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__47855 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__47855__2.call(this,self__,k);
case 3:
return G__47855__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47855.cljs$core$IFn$_invoke$arity$2 = G__47855__2;
G__47855.cljs$core$IFn$_invoke$arity$3 = G__47855__3;
return G__47855;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args47850){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args47850)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__47857 = null;
var G__47857__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__47857__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__47857 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__47857__2.call(this,self__,k);
case 3:
return G__47857__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47857.cljs$core$IFn$_invoke$arity$2 = G__47857__2;
G__47857.cljs$core$IFn$_invoke$arity$3 = G__47857__3;
return G__47857;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args47856){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args47856)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x47859 = cljs.core.clone.call(null,val);
x47859.cljs$core$IDeref$ = true;

x47859.cljs$core$IDeref$_deref$arity$1 = ((function (x47859){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x47859))
;

x47859.om$core$ICursor$ = true;

x47859.om$core$ICursor$_path$arity$1 = ((function (x47859){
return (function (_){
var ___$1 = this;
return path;
});})(x47859))
;

x47859.om$core$ICursor$_state$arity$1 = ((function (x47859){
return (function (_){
var ___$1 = this;
return state;
});})(x47859))
;

x47859.om$core$ITransact$ = true;

x47859.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x47859){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x47859))
;

x47859.cljs$core$IEquiv$ = true;

x47859.cljs$core$IEquiv$_equiv$arity$2 = ((function (x47859){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,other))){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x47859))
;

return x47859;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args47860 = [];
var len__45265__auto___47865 = arguments.length;
var i__45266__auto___47866 = (0);
while(true){
if((i__45266__auto___47866 < len__45265__auto___47865)){
args47860.push((arguments[i__45266__auto___47866]));

var G__47867 = (i__45266__auto___47866 + (1));
i__45266__auto___47866 = G__47867;
continue;
} else {
}
break;
}

var G__47862 = args47860.length;
switch (G__47862) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47860.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,val))){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x47872 = cljs.core.clone.call(null,x);
x47872.cljs$core$ICloneable$ = true;

x47872.cljs$core$ICloneable$_clone$arity$1 = ((function (x47872){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x47872))
;

x47872.om$core$IAdapt$ = true;

x47872.om$core$IAdapt$_adapt$arity$2 = ((function (x47872){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x47872))
;

x47872.om$core$ICursorDerive$ = true;

x47872.om$core$ICursorDerive$_derive$arity$4 = ((function (x47872){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x47872))
;

x47872.om$core$ITransact$ = true;

x47872.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x47872){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x47872))
;

return x47872;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,cursor))){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x47880 = cljs.core.clone.call(null,cursor);
x47880.om$core$ICursorDerive$ = true;

x47880.om$core$ICursorDerive$_derive$arity$4 = ((function (x47880,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x47880,path,storage))
;

x47880.om$core$IOmRef$ = true;

x47880.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x47880,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x47880,path,storage))
;

x47880.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x47880,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x47880,path,storage))
;

x47880.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x47880,path,storage){
return (function (_){
var ___$1 = this;
var seq__47881 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__47882 = null;
var count__47883 = (0);
var i__47884 = (0);
while(true){
if((i__47884 < count__47883)){
var c = cljs.core._nth.call(null,chunk__47882,i__47884);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__47885 = seq__47881;
var G__47886 = chunk__47882;
var G__47887 = count__47883;
var G__47888 = (i__47884 + (1));
seq__47881 = G__47885;
chunk__47882 = G__47886;
count__47883 = G__47887;
i__47884 = G__47888;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47881);
if(temp__4657__auto__){
var seq__47881__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47881__$1)){
var c__45001__auto__ = cljs.core.chunk_first.call(null,seq__47881__$1);
var G__47889 = cljs.core.chunk_rest.call(null,seq__47881__$1);
var G__47890 = c__45001__auto__;
var G__47891 = cljs.core.count.call(null,c__45001__auto__);
var G__47892 = (0);
seq__47881 = G__47889;
chunk__47882 = G__47890;
count__47883 = G__47891;
i__47884 = G__47892;
continue;
} else {
var c = cljs.core.first.call(null,seq__47881__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__47893 = cljs.core.next.call(null,seq__47881__$1);
var G__47894 = null;
var G__47895 = (0);
var G__47896 = (0);
seq__47881 = G__47893;
chunk__47882 = G__47894;
count__47883 = G__47895;
i__47884 = G__47896;
continue;
}
} else {
return null;
}
}
break;
}
});})(x47880,path,storage))
;

x47880.om$core$IOmRef$_get_deps$arity$1 = ((function (x47880,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x47880,path,storage))
;

x47880.om$core$ITransact$ = true;

x47880.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x47880,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x47880,path,storage))
;

return x47880;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__44190__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_.call(null,ref))){
} else {
throw (new Error("Assert failed: (ref-cursor? ref)"));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__44190__auto__ = state.om$render$T;
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args47897 = [];
var len__45265__auto___47904 = arguments.length;
var i__45266__auto___47905 = (0);
while(true){
if((i__45266__auto___47905 < len__45265__auto___47904)){
args47897.push((arguments[i__45266__auto___47905]));

var G__47906 = (i__45266__auto___47905 + (1));
i__45266__auto___47905 = G__47906;
continue;
} else {
}
break;
}

var G__47899 = args47897.length;
switch (G__47899) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47897.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.call(null,null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__47900_47908 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__47901_47909 = null;
var count__47902_47910 = (0);
var i__47903_47911 = (0);
while(true){
if((i__47903_47911 < count__47902_47910)){
var f_47912 = cljs.core._nth.call(null,chunk__47901_47909,i__47903_47911);
f_47912.call(null);

var G__47913 = seq__47900_47908;
var G__47914 = chunk__47901_47909;
var G__47915 = count__47902_47910;
var G__47916 = (i__47903_47911 + (1));
seq__47900_47908 = G__47913;
chunk__47901_47909 = G__47914;
count__47902_47910 = G__47915;
i__47903_47911 = G__47916;
continue;
} else {
var temp__4657__auto___47917 = cljs.core.seq.call(null,seq__47900_47908);
if(temp__4657__auto___47917){
var seq__47900_47918__$1 = temp__4657__auto___47917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47900_47918__$1)){
var c__45001__auto___47919 = cljs.core.chunk_first.call(null,seq__47900_47918__$1);
var G__47920 = cljs.core.chunk_rest.call(null,seq__47900_47918__$1);
var G__47921 = c__45001__auto___47919;
var G__47922 = cljs.core.count.call(null,c__45001__auto___47919);
var G__47923 = (0);
seq__47900_47908 = G__47920;
chunk__47901_47909 = G__47921;
count__47902_47910 = G__47922;
i__47903_47911 = G__47923;
continue;
} else {
var f_47924 = cljs.core.first.call(null,seq__47900_47918__$1);
f_47924.call(null);

var G__47925 = cljs.core.next.call(null,seq__47900_47918__$1);
var G__47926 = null;
var G__47927 = (0);
var G__47928 = (0);
seq__47900_47908 = G__47925;
chunk__47901_47909 = G__47926;
count__47902_47910 = G__47927;
i__47903_47911 = G__47928;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;

om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__44190__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,x));
if(or__44190__auto__){
return or__44190__auto__;
} else {
var or__44190__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,x));
if(or__44190__auto____$1){
return or__44190__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args47939 = [];
var len__45265__auto___47942 = arguments.length;
var i__45266__auto___47943 = (0);
while(true){
if((i__45266__auto___47943 < len__45265__auto___47942)){
args47939.push((arguments[i__45266__auto___47943]));

var G__47944 = (i__45266__auto___47943 + (1));
i__45266__auto___47943 = G__47944;
continue;
} else {
}
break;
}

var G__47941 = args47939.length;
switch (G__47941) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47939.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.call(null,f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_47946 = (function (){var or__44190__auto__ = descriptor;
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
var or__44190__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__44190__auto____$1)){
return or__44190__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_47946 === goog.object.get(f,"om$tag"))))){
var factory_47947 = React.createFactory(React.createClass(rdesc_47946));
goog.object.set(f,"om$descriptor",factory_47947);

goog.object.set(f,"om$tag",rdesc_47946);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var args47948 = [];
var len__45265__auto___47951 = arguments.length;
var i__45266__auto___47952 = (0);
while(true){
if((i__45266__auto___47952 < len__45265__auto___47951)){
args47948.push((arguments[i__45266__auto___47952]));

var G__47953 = (i__45266__auto___47952 + (1));
i__45266__auto___47952 = G__47953;
continue;
} else {
}
break;
}

var G__47950 = args47948.length;
switch (G__47950) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47948.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args47955 = [];
var len__45265__auto___47960 = arguments.length;
var i__45266__auto___47961 = (0);
while(true){
if((i__45266__auto___47961 < len__45265__auto___47960)){
args47955.push((arguments[i__45266__auto___47961]));

var G__47962 = (i__45266__auto___47961 + (1));
i__45266__auto___47961 = G__47962;
continue;
} else {
}
break;
}

var G__47957 = args47955.length;
switch (G__47957) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47955.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.call(null,f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,({"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
}));
} else {
var map__47958 = m;
var map__47958__$1 = ((((!((map__47958 == null)))?((((map__47958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47958):map__47958);
var key = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__44190__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,({"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__47958,map__47958__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__47958,map__47958__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__47958,map__47958__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__47958,map__47958__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__44190__auto__ = rkey;
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_}));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args47964 = [];
var len__45265__auto___47967 = arguments.length;
var i__45266__auto___47968 = (0);
while(true){
if((i__45266__auto___47968 < len__45265__auto___47967)){
args47964.push((arguments[i__45266__auto___47968]));

var G__47969 = (i__45266__auto___47968 + (1));
i__45266__auto___47968 = G__47969;
continue;
} else {
}
break;
}

var G__47966 = args47964.length;
switch (G__47966) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47964.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.call(null,f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args47971 = [];
var len__45265__auto___47974 = arguments.length;
var i__45266__auto___47975 = (0);
while(true){
if((i__45266__auto___47975 < len__45265__auto___47974)){
args47971.push((arguments[i__45266__auto___47975]));

var G__47976 = (i__45266__auto___47975 + (1));
i__45266__auto___47975 = G__47976;
continue;
} else {
}
break;
}

var G__47973 = args47971.length;
switch (G__47973) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47971.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.call(null,f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,state))){
} else {
var properties_48002 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_48003 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_48004 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x47991_48005 = state;
x47991_48005.om$core$IRootProperties$ = true;

x47991_48005.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_48002,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

x47991_48005.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_48002,cljs.core.dissoc,id,k);
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

x47991_48005.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_48002,cljs.core.dissoc,id);
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

x47991_48005.om$core$IRootProperties$_get_property$arity$3 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_48002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

x47991_48005.om$core$INotify$ = true;

x47991_48005.om$core$INotify$_listen_BANG_$arity$3 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_48003,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

x47991_48005.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_48003,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

x47991_48005.om$core$INotify$_notify_BANG_$arity$3 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__47992_48006 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_48003));
var chunk__47993_48007 = null;
var count__47994_48008 = (0);
var i__47995_48009 = (0);
while(true){
if((i__47995_48009 < count__47994_48008)){
var vec__47996_48010 = cljs.core._nth.call(null,chunk__47993_48007,i__47995_48009);
var __48011 = cljs.core.nth.call(null,vec__47996_48010,(0),null);
var f_48012 = cljs.core.nth.call(null,vec__47996_48010,(1),null);
f_48012.call(null,tx_data,root_cursor);

var G__48013 = seq__47992_48006;
var G__48014 = chunk__47993_48007;
var G__48015 = count__47994_48008;
var G__48016 = (i__47995_48009 + (1));
seq__47992_48006 = G__48013;
chunk__47993_48007 = G__48014;
count__47994_48008 = G__48015;
i__47995_48009 = G__48016;
continue;
} else {
var temp__4657__auto___48017 = cljs.core.seq.call(null,seq__47992_48006);
if(temp__4657__auto___48017){
var seq__47992_48018__$1 = temp__4657__auto___48017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47992_48018__$1)){
var c__45001__auto___48019 = cljs.core.chunk_first.call(null,seq__47992_48018__$1);
var G__48020 = cljs.core.chunk_rest.call(null,seq__47992_48018__$1);
var G__48021 = c__45001__auto___48019;
var G__48022 = cljs.core.count.call(null,c__45001__auto___48019);
var G__48023 = (0);
seq__47992_48006 = G__48020;
chunk__47993_48007 = G__48021;
count__47994_48008 = G__48022;
i__47995_48009 = G__48023;
continue;
} else {
var vec__47999_48024 = cljs.core.first.call(null,seq__47992_48018__$1);
var __48025 = cljs.core.nth.call(null,vec__47999_48024,(0),null);
var f_48026 = cljs.core.nth.call(null,vec__47999_48024,(1),null);
f_48026.call(null,tx_data,root_cursor);

var G__48027 = cljs.core.next.call(null,seq__47992_48018__$1);
var G__48028 = null;
var G__48029 = (0);
var G__48030 = (0);
seq__47992_48006 = G__48027;
chunk__47993_48007 = G__48028;
count__47994_48008 = G__48029;
i__47995_48009 = G__48030;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

x47991_48005.om$core$IRenderQueue$ = true;

x47991_48005.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_48004);
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

x47991_48005.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_48004),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_48004,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

x47991_48005.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x47991_48005,properties_48002,listeners_48003,render_queue_48004){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_48004,cljs.core.empty);
});})(x47991_48005,properties_48002,listeners_48003,render_queue_48004))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
var x48032 = cljs.core.clone.call(null,cursor);
x48032.cljs$core$ICloneable$ = true;

x48032.cljs$core$ICloneable$_clone$arity$1 = ((function (x48032){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x48032))
;

x48032.om$core$IAdapt$ = true;

x48032.om$core$IAdapt$_adapt$arity$2 = ((function (x48032){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x48032))
;

x48032.om$core$IRootKey$ = true;

x48032.om$core$IRootKey$_root_key$arity$1 = ((function (x48032){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x48032))
;

return x48032;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__48033){
var map__48121 = p__48033;
var map__48121__$1 = ((((!((map__48121 == null)))?((((map__48121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48121):map__48121);
var options = map__48121__$1;
var target = cljs.core.get.call(null,map__48121__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__48121__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__48121__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__48121__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__48121__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__48121__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__48121__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__48208 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__48208,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__48208,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,value)))?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__44190__auto__ = adapt;
if(cljs.core.truth_(or__44190__auto__)){
return or__44190__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

var c_48209 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_48166 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_48167 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_48168 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_48169 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_48169;

om.core._STAR_state_STAR_ = _STAR_state_STAR_48168;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_48167;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_48166;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_48209);
} else {
}
}

var queue_48210 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_48210)){
} else {
var seq__48170_48211 = cljs.core.seq.call(null,queue_48210);
var chunk__48171_48212 = null;
var count__48172_48213 = (0);
var i__48173_48214 = (0);
while(true){
if((i__48173_48214 < count__48172_48213)){
var c_48215 = cljs.core._nth.call(null,chunk__48171_48212,i__48173_48214);
if(cljs.core.truth_(c_48215.isMounted())){
var temp__4657__auto___48216 = (c_48215.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___48216)){
var next_props_48217 = temp__4657__auto___48216;
(c_48215.props["__om_cursor"] = next_props_48217);

(c_48215.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__44190__auto__ = !((function (){var G__48175 = om.core.children.call(null,c_48215);
if(!((G__48175 == null))){
if((false) || (G__48175.om$core$ICheckState$)){
return true;
} else {
if((!G__48175.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__48175);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__48175);
}
})());
if(or__44190__auto__){
return or__44190__auto__;
} else {
return c_48215.shouldComponentUpdate(c_48215.props,c_48215.state);
}
})())){
c_48215.forceUpdate();
} else {
}
} else {
}

var G__48218 = seq__48170_48211;
var G__48219 = chunk__48171_48212;
var G__48220 = count__48172_48213;
var G__48221 = (i__48173_48214 + (1));
seq__48170_48211 = G__48218;
chunk__48171_48212 = G__48219;
count__48172_48213 = G__48220;
i__48173_48214 = G__48221;
continue;
} else {
var temp__4657__auto___48222 = cljs.core.seq.call(null,seq__48170_48211);
if(temp__4657__auto___48222){
var seq__48170_48223__$1 = temp__4657__auto___48222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48170_48223__$1)){
var c__45001__auto___48224 = cljs.core.chunk_first.call(null,seq__48170_48223__$1);
var G__48225 = cljs.core.chunk_rest.call(null,seq__48170_48223__$1);
var G__48226 = c__45001__auto___48224;
var G__48227 = cljs.core.count.call(null,c__45001__auto___48224);
var G__48228 = (0);
seq__48170_48211 = G__48225;
chunk__48171_48212 = G__48226;
count__48172_48213 = G__48227;
i__48173_48214 = G__48228;
continue;
} else {
var c_48229 = cljs.core.first.call(null,seq__48170_48223__$1);
if(cljs.core.truth_(c_48229.isMounted())){
var temp__4657__auto___48230__$1 = (c_48229.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___48230__$1)){
var next_props_48231 = temp__4657__auto___48230__$1;
(c_48229.props["__om_cursor"] = next_props_48231);

(c_48229.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__44190__auto__ = !((function (){var G__48177 = om.core.children.call(null,c_48229);
if(!((G__48177 == null))){
if((false) || (G__48177.om$core$ICheckState$)){
return true;
} else {
if((!G__48177.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__48177);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__48177);
}
})());
if(or__44190__auto__){
return or__44190__auto__;
} else {
return c_48229.shouldComponentUpdate(c_48229.props,c_48229.state);
}
})())){
c_48229.forceUpdate();
} else {
}
} else {
}

var G__48232 = cljs.core.next.call(null,seq__48170_48223__$1);
var G__48233 = null;
var G__48234 = (0);
var G__48235 = (0);
seq__48170_48211 = G__48232;
chunk__48171_48212 = G__48233;
count__48172_48213 = G__48234;
i__48173_48214 = G__48235;
continue;
}
} else {
}
}
break;
}
}

var _refs_48236 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_48236)){
} else {
var seq__48178_48237 = cljs.core.seq.call(null,_refs_48236);
var chunk__48179_48238 = null;
var count__48180_48239 = (0);
var i__48181_48240 = (0);
while(true){
if((i__48181_48240 < count__48180_48239)){
var vec__48182_48241 = cljs.core._nth.call(null,chunk__48179_48238,i__48181_48240);
var path_48242__$1 = cljs.core.nth.call(null,vec__48182_48241,(0),null);
var cs_48243 = cljs.core.nth.call(null,vec__48182_48241,(1),null);
var cs_48244__$1 = cljs.core.deref.call(null,cs_48243);
var seq__48185_48245 = cljs.core.seq.call(null,cs_48244__$1);
var chunk__48186_48246 = null;
var count__48187_48247 = (0);
var i__48188_48248 = (0);
while(true){
if((i__48188_48248 < count__48187_48247)){
var vec__48189_48249 = cljs.core._nth.call(null,chunk__48186_48246,i__48188_48248);
var id_48250 = cljs.core.nth.call(null,vec__48189_48249,(0),null);
var c_48251 = cljs.core.nth.call(null,vec__48189_48249,(1),null);
if(cljs.core.truth_(c_48251.shouldComponentUpdate(c_48251.props,c_48251.state))){
c_48251.forceUpdate();
} else {
}

var G__48252 = seq__48185_48245;
var G__48253 = chunk__48186_48246;
var G__48254 = count__48187_48247;
var G__48255 = (i__48188_48248 + (1));
seq__48185_48245 = G__48252;
chunk__48186_48246 = G__48253;
count__48187_48247 = G__48254;
i__48188_48248 = G__48255;
continue;
} else {
var temp__4657__auto___48256 = cljs.core.seq.call(null,seq__48185_48245);
if(temp__4657__auto___48256){
var seq__48185_48257__$1 = temp__4657__auto___48256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48185_48257__$1)){
var c__45001__auto___48258 = cljs.core.chunk_first.call(null,seq__48185_48257__$1);
var G__48259 = cljs.core.chunk_rest.call(null,seq__48185_48257__$1);
var G__48260 = c__45001__auto___48258;
var G__48261 = cljs.core.count.call(null,c__45001__auto___48258);
var G__48262 = (0);
seq__48185_48245 = G__48259;
chunk__48186_48246 = G__48260;
count__48187_48247 = G__48261;
i__48188_48248 = G__48262;
continue;
} else {
var vec__48192_48263 = cljs.core.first.call(null,seq__48185_48257__$1);
var id_48264 = cljs.core.nth.call(null,vec__48192_48263,(0),null);
var c_48265 = cljs.core.nth.call(null,vec__48192_48263,(1),null);
if(cljs.core.truth_(c_48265.shouldComponentUpdate(c_48265.props,c_48265.state))){
c_48265.forceUpdate();
} else {
}

var G__48266 = cljs.core.next.call(null,seq__48185_48257__$1);
var G__48267 = null;
var G__48268 = (0);
var G__48269 = (0);
seq__48185_48245 = G__48266;
chunk__48186_48246 = G__48267;
count__48187_48247 = G__48268;
i__48188_48248 = G__48269;
continue;
}
} else {
}
}
break;
}

var G__48270 = seq__48178_48237;
var G__48271 = chunk__48179_48238;
var G__48272 = count__48180_48239;
var G__48273 = (i__48181_48240 + (1));
seq__48178_48237 = G__48270;
chunk__48179_48238 = G__48271;
count__48180_48239 = G__48272;
i__48181_48240 = G__48273;
continue;
} else {
var temp__4657__auto___48274 = cljs.core.seq.call(null,seq__48178_48237);
if(temp__4657__auto___48274){
var seq__48178_48275__$1 = temp__4657__auto___48274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48178_48275__$1)){
var c__45001__auto___48276 = cljs.core.chunk_first.call(null,seq__48178_48275__$1);
var G__48277 = cljs.core.chunk_rest.call(null,seq__48178_48275__$1);
var G__48278 = c__45001__auto___48276;
var G__48279 = cljs.core.count.call(null,c__45001__auto___48276);
var G__48280 = (0);
seq__48178_48237 = G__48277;
chunk__48179_48238 = G__48278;
count__48180_48239 = G__48279;
i__48181_48240 = G__48280;
continue;
} else {
var vec__48195_48281 = cljs.core.first.call(null,seq__48178_48275__$1);
var path_48282__$1 = cljs.core.nth.call(null,vec__48195_48281,(0),null);
var cs_48283 = cljs.core.nth.call(null,vec__48195_48281,(1),null);
var cs_48284__$1 = cljs.core.deref.call(null,cs_48283);
var seq__48198_48285 = cljs.core.seq.call(null,cs_48284__$1);
var chunk__48199_48286 = null;
var count__48200_48287 = (0);
var i__48201_48288 = (0);
while(true){
if((i__48201_48288 < count__48200_48287)){
var vec__48202_48289 = cljs.core._nth.call(null,chunk__48199_48286,i__48201_48288);
var id_48290 = cljs.core.nth.call(null,vec__48202_48289,(0),null);
var c_48291 = cljs.core.nth.call(null,vec__48202_48289,(1),null);
if(cljs.core.truth_(c_48291.shouldComponentUpdate(c_48291.props,c_48291.state))){
c_48291.forceUpdate();
} else {
}

var G__48292 = seq__48198_48285;
var G__48293 = chunk__48199_48286;
var G__48294 = count__48200_48287;
var G__48295 = (i__48201_48288 + (1));
seq__48198_48285 = G__48292;
chunk__48199_48286 = G__48293;
count__48200_48287 = G__48294;
i__48201_48288 = G__48295;
continue;
} else {
var temp__4657__auto___48296__$1 = cljs.core.seq.call(null,seq__48198_48285);
if(temp__4657__auto___48296__$1){
var seq__48198_48297__$1 = temp__4657__auto___48296__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48198_48297__$1)){
var c__45001__auto___48298 = cljs.core.chunk_first.call(null,seq__48198_48297__$1);
var G__48299 = cljs.core.chunk_rest.call(null,seq__48198_48297__$1);
var G__48300 = c__45001__auto___48298;
var G__48301 = cljs.core.count.call(null,c__45001__auto___48298);
var G__48302 = (0);
seq__48198_48285 = G__48299;
chunk__48199_48286 = G__48300;
count__48200_48287 = G__48301;
i__48201_48288 = G__48302;
continue;
} else {
var vec__48205_48303 = cljs.core.first.call(null,seq__48198_48297__$1);
var id_48304 = cljs.core.nth.call(null,vec__48205_48303,(0),null);
var c_48305 = cljs.core.nth.call(null,vec__48205_48303,(1),null);
if(cljs.core.truth_(c_48305.shouldComponentUpdate(c_48305.props,c_48305.state))){
c_48305.forceUpdate();
} else {
}

var G__48306 = cljs.core.next.call(null,seq__48198_48297__$1);
var G__48307 = null;
var G__48308 = (0);
var G__48309 = (0);
seq__48198_48285 = G__48306;
chunk__48199_48286 = G__48307;
count__48200_48287 = G__48308;
i__48201_48288 = G__48309;
continue;
}
} else {
}
}
break;
}

var G__48310 = cljs.core.next.call(null,seq__48178_48275__$1);
var G__48311 = null;
var G__48312 = (0);
var G__48313 = (0);
seq__48178_48237 = G__48310;
chunk__48179_48238 = G__48311;
count__48180_48239 = G__48312;
i__48181_48240 = G__48313;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__48121,map__48121__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args48316 = [];
var len__45265__auto___48319 = arguments.length;
var i__45266__auto___48320 = (0);
while(true){
if((i__45266__auto___48320 < len__45265__auto___48319)){
args48316.push((arguments[i__45266__auto___48320]));

var G__48321 = (i__45266__auto___48320 + (1));
i__45266__auto___48320 = G__48321;
continue;
} else {
}
break;
}

var G__48318 = args48316.length;
switch (G__48318) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48316.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.call(null,cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args48323 = [];
var len__45265__auto___48326 = arguments.length;
var i__45266__auto___48327 = (0);
while(true){
if((i__45266__auto___48327 < len__45265__auto___48326)){
args48323.push((arguments[i__45266__auto___48327]));

var G__48328 = (i__45266__auto___48327 + (1));
i__45266__auto___48327 = G__48328;
continue;
} else {
}
break;
}

var G__48325 = args48323.length;
switch (G__48325) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48323.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_.call(null,cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,cursor)))?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args48332 = [];
var len__45265__auto___48336 = arguments.length;
var i__45266__auto___48337 = (0);
while(true){
if((i__45266__auto___48337 < len__45265__auto___48336)){
args48332.push((arguments[i__45266__auto___48337]));

var G__48338 = (i__45266__auto___48337 + (1));
i__45266__auto___48337 = G__48338;
continue;
} else {
}
break;
}

var G__48334 = args48332.length;
switch (G__48334) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48332.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return ReactDOM.findDOMNode(owner);
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__48335 = owner.refs;
var G__48335__$1 = (((G__48335 == null))?null:(G__48335[name]));
if((G__48335__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__48335__$1);
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__48341 = owner.refs;
if((G__48341 == null)){
return null;
} else {
return goog.object.get(G__48341,name);
}
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args48342 = [];
var len__45265__auto___48345 = arguments.length;
var i__45266__auto___48346 = (0);
while(true){
if((i__45266__auto___48346 < len__45265__auto___48345)){
args48342.push((arguments[i__45266__auto___48346]));

var G__48347 = (i__45266__auto___48346 + (1));
i__45266__auto___48346 = G__48347;
continue;
} else {
}
break;
}

var G__48344 = args48342.length;
switch (G__48344) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48342.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args48349 = [];
var len__45265__auto___48352 = arguments.length;
var i__45266__auto___48353 = (0);
while(true){
if((i__45266__auto___48353 < len__45265__auto___48352)){
args48349.push((arguments[i__45266__auto___48353]));

var G__48354 = (i__45266__auto___48353 + (1));
i__45266__auto___48353 = G__48354;
continue;
} else {
}
break;
}

var G__48351 = args48349.length;
switch (G__48351) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48349.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args48356 = [];
var len__45265__auto___48359 = arguments.length;
var i__45266__auto___48360 = (0);
while(true){
if((i__45266__auto___48360 < len__45265__auto___48359)){
args48356.push((arguments[i__45266__auto___48360]));

var G__48361 = (i__45266__auto___48360 + (1));
i__45266__auto___48360 = G__48361;
continue;
} else {
}
break;
}

var G__48358 = args48356.length;
switch (G__48358) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48356.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args48363 = [];
var len__45265__auto___48366 = arguments.length;
var i__45266__auto___48367 = (0);
while(true){
if((i__45266__auto___48367 < len__45265__auto___48366)){
args48363.push((arguments[i__45266__auto___48367]));

var G__48368 = (i__45266__auto___48367 + (1));
i__45266__auto___48367 = G__48368;
continue;
} else {
}
break;
}

var G__48365 = args48363.length;
switch (G__48365) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48363.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args48370 = [];
var len__45265__auto___48373 = arguments.length;
var i__45266__auto___48374 = (0);
while(true){
if((i__45266__auto___48374 < len__45265__auto___48373)){
args48370.push((arguments[i__45266__auto___48374]));

var G__48375 = (i__45266__auto___48374 + (1));
i__45266__auto___48374 = G__48375;
continue;
} else {
}
break;
}

var G__48372 = args48370.length;
switch (G__48372) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48370.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.call(null,owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1481669442100