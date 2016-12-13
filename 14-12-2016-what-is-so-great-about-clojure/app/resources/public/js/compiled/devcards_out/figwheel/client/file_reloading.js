// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__44182__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__44182__auto__){
return or__44182__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__44182__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__53161_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__53161_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__53166 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__53167 = null;
var count__53168 = (0);
var i__53169 = (0);
while(true){
if((i__53169 < count__53168)){
var n = cljs.core._nth.call(null,chunk__53167,i__53169);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53170 = seq__53166;
var G__53171 = chunk__53167;
var G__53172 = count__53168;
var G__53173 = (i__53169 + (1));
seq__53166 = G__53170;
chunk__53167 = G__53171;
count__53168 = G__53172;
i__53169 = G__53173;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53166);
if(temp__4657__auto__){
var seq__53166__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53166__$1)){
var c__44993__auto__ = cljs.core.chunk_first.call(null,seq__53166__$1);
var G__53174 = cljs.core.chunk_rest.call(null,seq__53166__$1);
var G__53175 = c__44993__auto__;
var G__53176 = cljs.core.count.call(null,c__44993__auto__);
var G__53177 = (0);
seq__53166 = G__53174;
chunk__53167 = G__53175;
count__53168 = G__53176;
i__53169 = G__53177;
continue;
} else {
var n = cljs.core.first.call(null,seq__53166__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53178 = cljs.core.next.call(null,seq__53166__$1);
var G__53179 = null;
var G__53180 = (0);
var G__53181 = (0);
seq__53166 = G__53178;
chunk__53167 = G__53179;
count__53168 = G__53180;
i__53169 = G__53181;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__53232_53243 = cljs.core.seq.call(null,deps);
var chunk__53233_53244 = null;
var count__53234_53245 = (0);
var i__53235_53246 = (0);
while(true){
if((i__53235_53246 < count__53234_53245)){
var dep_53247 = cljs.core._nth.call(null,chunk__53233_53244,i__53235_53246);
topo_sort_helper_STAR_.call(null,dep_53247,(depth + (1)),state);

var G__53248 = seq__53232_53243;
var G__53249 = chunk__53233_53244;
var G__53250 = count__53234_53245;
var G__53251 = (i__53235_53246 + (1));
seq__53232_53243 = G__53248;
chunk__53233_53244 = G__53249;
count__53234_53245 = G__53250;
i__53235_53246 = G__53251;
continue;
} else {
var temp__4657__auto___53252 = cljs.core.seq.call(null,seq__53232_53243);
if(temp__4657__auto___53252){
var seq__53232_53253__$1 = temp__4657__auto___53252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53232_53253__$1)){
var c__44993__auto___53254 = cljs.core.chunk_first.call(null,seq__53232_53253__$1);
var G__53255 = cljs.core.chunk_rest.call(null,seq__53232_53253__$1);
var G__53256 = c__44993__auto___53254;
var G__53257 = cljs.core.count.call(null,c__44993__auto___53254);
var G__53258 = (0);
seq__53232_53243 = G__53255;
chunk__53233_53244 = G__53256;
count__53234_53245 = G__53257;
i__53235_53246 = G__53258;
continue;
} else {
var dep_53259 = cljs.core.first.call(null,seq__53232_53253__$1);
topo_sort_helper_STAR_.call(null,dep_53259,(depth + (1)),state);

var G__53260 = cljs.core.next.call(null,seq__53232_53253__$1);
var G__53261 = null;
var G__53262 = (0);
var G__53263 = (0);
seq__53232_53243 = G__53260;
chunk__53233_53244 = G__53261;
count__53234_53245 = G__53262;
i__53235_53246 = G__53263;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__53236){
var vec__53240 = p__53236;
var seq__53241 = cljs.core.seq.call(null,vec__53240);
var first__53242 = cljs.core.first.call(null,seq__53241);
var seq__53241__$1 = cljs.core.next.call(null,seq__53241);
var x = first__53242;
var xs = seq__53241__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__53240,seq__53241,first__53242,seq__53241__$1,x,xs,get_deps__$1){
return (function (p1__53182_SHARP_){
return clojure.set.difference.call(null,p1__53182_SHARP_,x);
});})(vec__53240,seq__53241,first__53242,seq__53241__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__53276 = cljs.core.seq.call(null,provides);
var chunk__53277 = null;
var count__53278 = (0);
var i__53279 = (0);
while(true){
if((i__53279 < count__53278)){
var prov = cljs.core._nth.call(null,chunk__53277,i__53279);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53280_53288 = cljs.core.seq.call(null,requires);
var chunk__53281_53289 = null;
var count__53282_53290 = (0);
var i__53283_53291 = (0);
while(true){
if((i__53283_53291 < count__53282_53290)){
var req_53292 = cljs.core._nth.call(null,chunk__53281_53289,i__53283_53291);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53292,prov);

var G__53293 = seq__53280_53288;
var G__53294 = chunk__53281_53289;
var G__53295 = count__53282_53290;
var G__53296 = (i__53283_53291 + (1));
seq__53280_53288 = G__53293;
chunk__53281_53289 = G__53294;
count__53282_53290 = G__53295;
i__53283_53291 = G__53296;
continue;
} else {
var temp__4657__auto___53297 = cljs.core.seq.call(null,seq__53280_53288);
if(temp__4657__auto___53297){
var seq__53280_53298__$1 = temp__4657__auto___53297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53280_53298__$1)){
var c__44993__auto___53299 = cljs.core.chunk_first.call(null,seq__53280_53298__$1);
var G__53300 = cljs.core.chunk_rest.call(null,seq__53280_53298__$1);
var G__53301 = c__44993__auto___53299;
var G__53302 = cljs.core.count.call(null,c__44993__auto___53299);
var G__53303 = (0);
seq__53280_53288 = G__53300;
chunk__53281_53289 = G__53301;
count__53282_53290 = G__53302;
i__53283_53291 = G__53303;
continue;
} else {
var req_53304 = cljs.core.first.call(null,seq__53280_53298__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53304,prov);

var G__53305 = cljs.core.next.call(null,seq__53280_53298__$1);
var G__53306 = null;
var G__53307 = (0);
var G__53308 = (0);
seq__53280_53288 = G__53305;
chunk__53281_53289 = G__53306;
count__53282_53290 = G__53307;
i__53283_53291 = G__53308;
continue;
}
} else {
}
}
break;
}

var G__53309 = seq__53276;
var G__53310 = chunk__53277;
var G__53311 = count__53278;
var G__53312 = (i__53279 + (1));
seq__53276 = G__53309;
chunk__53277 = G__53310;
count__53278 = G__53311;
i__53279 = G__53312;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53276);
if(temp__4657__auto__){
var seq__53276__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53276__$1)){
var c__44993__auto__ = cljs.core.chunk_first.call(null,seq__53276__$1);
var G__53313 = cljs.core.chunk_rest.call(null,seq__53276__$1);
var G__53314 = c__44993__auto__;
var G__53315 = cljs.core.count.call(null,c__44993__auto__);
var G__53316 = (0);
seq__53276 = G__53313;
chunk__53277 = G__53314;
count__53278 = G__53315;
i__53279 = G__53316;
continue;
} else {
var prov = cljs.core.first.call(null,seq__53276__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53284_53317 = cljs.core.seq.call(null,requires);
var chunk__53285_53318 = null;
var count__53286_53319 = (0);
var i__53287_53320 = (0);
while(true){
if((i__53287_53320 < count__53286_53319)){
var req_53321 = cljs.core._nth.call(null,chunk__53285_53318,i__53287_53320);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53321,prov);

var G__53322 = seq__53284_53317;
var G__53323 = chunk__53285_53318;
var G__53324 = count__53286_53319;
var G__53325 = (i__53287_53320 + (1));
seq__53284_53317 = G__53322;
chunk__53285_53318 = G__53323;
count__53286_53319 = G__53324;
i__53287_53320 = G__53325;
continue;
} else {
var temp__4657__auto___53326__$1 = cljs.core.seq.call(null,seq__53284_53317);
if(temp__4657__auto___53326__$1){
var seq__53284_53327__$1 = temp__4657__auto___53326__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53284_53327__$1)){
var c__44993__auto___53328 = cljs.core.chunk_first.call(null,seq__53284_53327__$1);
var G__53329 = cljs.core.chunk_rest.call(null,seq__53284_53327__$1);
var G__53330 = c__44993__auto___53328;
var G__53331 = cljs.core.count.call(null,c__44993__auto___53328);
var G__53332 = (0);
seq__53284_53317 = G__53329;
chunk__53285_53318 = G__53330;
count__53286_53319 = G__53331;
i__53287_53320 = G__53332;
continue;
} else {
var req_53333 = cljs.core.first.call(null,seq__53284_53327__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53333,prov);

var G__53334 = cljs.core.next.call(null,seq__53284_53327__$1);
var G__53335 = null;
var G__53336 = (0);
var G__53337 = (0);
seq__53284_53317 = G__53334;
chunk__53285_53318 = G__53335;
count__53286_53319 = G__53336;
i__53287_53320 = G__53337;
continue;
}
} else {
}
}
break;
}

var G__53338 = cljs.core.next.call(null,seq__53276__$1);
var G__53339 = null;
var G__53340 = (0);
var G__53341 = (0);
seq__53276 = G__53338;
chunk__53277 = G__53339;
count__53278 = G__53340;
i__53279 = G__53341;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__53346_53350 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__53347_53351 = null;
var count__53348_53352 = (0);
var i__53349_53353 = (0);
while(true){
if((i__53349_53353 < count__53348_53352)){
var ns_53354 = cljs.core._nth.call(null,chunk__53347_53351,i__53349_53353);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53354);

var G__53355 = seq__53346_53350;
var G__53356 = chunk__53347_53351;
var G__53357 = count__53348_53352;
var G__53358 = (i__53349_53353 + (1));
seq__53346_53350 = G__53355;
chunk__53347_53351 = G__53356;
count__53348_53352 = G__53357;
i__53349_53353 = G__53358;
continue;
} else {
var temp__4657__auto___53359 = cljs.core.seq.call(null,seq__53346_53350);
if(temp__4657__auto___53359){
var seq__53346_53360__$1 = temp__4657__auto___53359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53346_53360__$1)){
var c__44993__auto___53361 = cljs.core.chunk_first.call(null,seq__53346_53360__$1);
var G__53362 = cljs.core.chunk_rest.call(null,seq__53346_53360__$1);
var G__53363 = c__44993__auto___53361;
var G__53364 = cljs.core.count.call(null,c__44993__auto___53361);
var G__53365 = (0);
seq__53346_53350 = G__53362;
chunk__53347_53351 = G__53363;
count__53348_53352 = G__53364;
i__53349_53353 = G__53365;
continue;
} else {
var ns_53366 = cljs.core.first.call(null,seq__53346_53360__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53366);

var G__53367 = cljs.core.next.call(null,seq__53346_53360__$1);
var G__53368 = null;
var G__53369 = (0);
var G__53370 = (0);
seq__53346_53350 = G__53367;
chunk__53347_53351 = G__53368;
count__53348_53352 = G__53369;
i__53349_53353 = G__53370;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__44182__auto__ = goog.require__;
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__53371__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__53371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53372__i = 0, G__53372__a = new Array(arguments.length -  0);
while (G__53372__i < G__53372__a.length) {G__53372__a[G__53372__i] = arguments[G__53372__i + 0]; ++G__53372__i;}
  args = new cljs.core.IndexedSeq(G__53372__a,0);
} 
return G__53371__delegate.call(this,args);};
G__53371.cljs$lang$maxFixedArity = 0;
G__53371.cljs$lang$applyTo = (function (arglist__53373){
var args = cljs.core.seq(arglist__53373);
return G__53371__delegate(args);
});
G__53371.cljs$core$IFn$_invoke$arity$variadic = G__53371__delegate;
return G__53371;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__53375 = cljs.core._EQ_;
var expr__53376 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__53375.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__53376))){
var path_parts = ((function (pred__53375,expr__53376){
return (function (p1__53374_SHARP_){
return clojure.string.split.call(null,p1__53374_SHARP_,/[\/\\]/);
});})(pred__53375,expr__53376))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__53375,expr__53376){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e53378){if((e53378 instanceof Error)){
var e = e53378;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53378;

}
}})());
});
;})(path_parts,sep,root,pred__53375,expr__53376))
} else {
if(cljs.core.truth_(pred__53375.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__53376))){
return ((function (pred__53375,expr__53376){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__53375,expr__53376){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__53375,expr__53376))
);

return deferred.addErrback(((function (deferred,pred__53375,expr__53376){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__53375,expr__53376))
);
});
;})(pred__53375,expr__53376))
} else {
return ((function (pred__53375,expr__53376){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__53375,expr__53376))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__53379,callback){
var map__53382 = p__53379;
var map__53382__$1 = ((((!((map__53382 == null)))?((((map__53382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53382):map__53382);
var file_msg = map__53382__$1;
var request_url = cljs.core.get.call(null,map__53382__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__53382,map__53382__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__53382,map__53382__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__){
return (function (state_53406){
var state_val_53407 = (state_53406[(1)]);
if((state_val_53407 === (7))){
var inst_53402 = (state_53406[(2)]);
var state_53406__$1 = state_53406;
var statearr_53408_53428 = state_53406__$1;
(statearr_53408_53428[(2)] = inst_53402);

(statearr_53408_53428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (1))){
var state_53406__$1 = state_53406;
var statearr_53409_53429 = state_53406__$1;
(statearr_53409_53429[(2)] = null);

(statearr_53409_53429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (4))){
var inst_53386 = (state_53406[(7)]);
var inst_53386__$1 = (state_53406[(2)]);
var state_53406__$1 = (function (){var statearr_53410 = state_53406;
(statearr_53410[(7)] = inst_53386__$1);

return statearr_53410;
})();
if(cljs.core.truth_(inst_53386__$1)){
var statearr_53411_53430 = state_53406__$1;
(statearr_53411_53430[(1)] = (5));

} else {
var statearr_53412_53431 = state_53406__$1;
(statearr_53412_53431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (6))){
var state_53406__$1 = state_53406;
var statearr_53413_53432 = state_53406__$1;
(statearr_53413_53432[(2)] = null);

(statearr_53413_53432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (3))){
var inst_53404 = (state_53406[(2)]);
var state_53406__$1 = state_53406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53406__$1,inst_53404);
} else {
if((state_val_53407 === (2))){
var state_53406__$1 = state_53406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53406__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_53407 === (11))){
var inst_53398 = (state_53406[(2)]);
var state_53406__$1 = (function (){var statearr_53414 = state_53406;
(statearr_53414[(8)] = inst_53398);

return statearr_53414;
})();
var statearr_53415_53433 = state_53406__$1;
(statearr_53415_53433[(2)] = null);

(statearr_53415_53433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (9))){
var inst_53392 = (state_53406[(9)]);
var inst_53390 = (state_53406[(10)]);
var inst_53394 = inst_53392.call(null,inst_53390);
var state_53406__$1 = state_53406;
var statearr_53416_53434 = state_53406__$1;
(statearr_53416_53434[(2)] = inst_53394);

(statearr_53416_53434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (5))){
var inst_53386 = (state_53406[(7)]);
var inst_53388 = figwheel.client.file_reloading.blocking_load.call(null,inst_53386);
var state_53406__$1 = state_53406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53406__$1,(8),inst_53388);
} else {
if((state_val_53407 === (10))){
var inst_53390 = (state_53406[(10)]);
var inst_53396 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_53390);
var state_53406__$1 = state_53406;
var statearr_53417_53435 = state_53406__$1;
(statearr_53417_53435[(2)] = inst_53396);

(statearr_53417_53435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53407 === (8))){
var inst_53386 = (state_53406[(7)]);
var inst_53392 = (state_53406[(9)]);
var inst_53390 = (state_53406[(2)]);
var inst_53391 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_53392__$1 = cljs.core.get.call(null,inst_53391,inst_53386);
var state_53406__$1 = (function (){var statearr_53418 = state_53406;
(statearr_53418[(9)] = inst_53392__$1);

(statearr_53418[(10)] = inst_53390);

return statearr_53418;
})();
if(cljs.core.truth_(inst_53392__$1)){
var statearr_53419_53436 = state_53406__$1;
(statearr_53419_53436[(1)] = (9));

} else {
var statearr_53420_53437 = state_53406__$1;
(statearr_53420_53437[(1)] = (10));

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
});})(c__47999__auto__))
;
return ((function (switch__47887__auto__,c__47999__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__47888__auto__ = null;
var figwheel$client$file_reloading$state_machine__47888__auto____0 = (function (){
var statearr_53424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53424[(0)] = figwheel$client$file_reloading$state_machine__47888__auto__);

(statearr_53424[(1)] = (1));

return statearr_53424;
});
var figwheel$client$file_reloading$state_machine__47888__auto____1 = (function (state_53406){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_53406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e53425){if((e53425 instanceof Object)){
var ex__47891__auto__ = e53425;
var statearr_53426_53438 = state_53406;
(statearr_53426_53438[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53439 = state_53406;
state_53406 = G__53439;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__47888__auto__ = function(state_53406){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__47888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__47888__auto____1.call(this,state_53406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__47888__auto____0;
figwheel$client$file_reloading$state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__47888__auto____1;
return figwheel$client$file_reloading$state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__))
})();
var state__48001__auto__ = (function (){var statearr_53427 = f__48000__auto__.call(null);
(statearr_53427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_53427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__))
);

return c__47999__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__53440,callback){
var map__53443 = p__53440;
var map__53443__$1 = ((((!((map__53443 == null)))?((((map__53443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53443):map__53443);
var file_msg = map__53443__$1;
var namespace = cljs.core.get.call(null,map__53443__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__53443,map__53443__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__53443,map__53443__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__53445){
var map__53448 = p__53445;
var map__53448__$1 = ((((!((map__53448 == null)))?((((map__53448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53448):map__53448);
var file_msg = map__53448__$1;
var namespace = cljs.core.get.call(null,map__53448__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__44170__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__44170__auto__){
var or__44182__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
var or__44182__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44182__auto____$1)){
return or__44182__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__44170__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__53450,callback){
var map__53453 = p__53450;
var map__53453__$1 = ((((!((map__53453 == null)))?((((map__53453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53453):map__53453);
var file_msg = map__53453__$1;
var request_url = cljs.core.get.call(null,map__53453__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__53453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__47999__auto___53557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto___53557,out){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto___53557,out){
return (function (state_53539){
var state_val_53540 = (state_53539[(1)]);
if((state_val_53540 === (1))){
var inst_53513 = cljs.core.seq.call(null,files);
var inst_53514 = cljs.core.first.call(null,inst_53513);
var inst_53515 = cljs.core.next.call(null,inst_53513);
var inst_53516 = files;
var state_53539__$1 = (function (){var statearr_53541 = state_53539;
(statearr_53541[(7)] = inst_53515);

(statearr_53541[(8)] = inst_53514);

(statearr_53541[(9)] = inst_53516);

return statearr_53541;
})();
var statearr_53542_53558 = state_53539__$1;
(statearr_53542_53558[(2)] = null);

(statearr_53542_53558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (2))){
var inst_53516 = (state_53539[(9)]);
var inst_53522 = (state_53539[(10)]);
var inst_53521 = cljs.core.seq.call(null,inst_53516);
var inst_53522__$1 = cljs.core.first.call(null,inst_53521);
var inst_53523 = cljs.core.next.call(null,inst_53521);
var inst_53524 = (inst_53522__$1 == null);
var inst_53525 = cljs.core.not.call(null,inst_53524);
var state_53539__$1 = (function (){var statearr_53543 = state_53539;
(statearr_53543[(11)] = inst_53523);

(statearr_53543[(10)] = inst_53522__$1);

return statearr_53543;
})();
if(inst_53525){
var statearr_53544_53559 = state_53539__$1;
(statearr_53544_53559[(1)] = (4));

} else {
var statearr_53545_53560 = state_53539__$1;
(statearr_53545_53560[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (3))){
var inst_53537 = (state_53539[(2)]);
var state_53539__$1 = state_53539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53539__$1,inst_53537);
} else {
if((state_val_53540 === (4))){
var inst_53522 = (state_53539[(10)]);
var inst_53527 = figwheel.client.file_reloading.reload_js_file.call(null,inst_53522);
var state_53539__$1 = state_53539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53539__$1,(7),inst_53527);
} else {
if((state_val_53540 === (5))){
var inst_53533 = cljs.core.async.close_BANG_.call(null,out);
var state_53539__$1 = state_53539;
var statearr_53546_53561 = state_53539__$1;
(statearr_53546_53561[(2)] = inst_53533);

(statearr_53546_53561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (6))){
var inst_53535 = (state_53539[(2)]);
var state_53539__$1 = state_53539;
var statearr_53547_53562 = state_53539__$1;
(statearr_53547_53562[(2)] = inst_53535);

(statearr_53547_53562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53540 === (7))){
var inst_53523 = (state_53539[(11)]);
var inst_53529 = (state_53539[(2)]);
var inst_53530 = cljs.core.async.put_BANG_.call(null,out,inst_53529);
var inst_53516 = inst_53523;
var state_53539__$1 = (function (){var statearr_53548 = state_53539;
(statearr_53548[(12)] = inst_53530);

(statearr_53548[(9)] = inst_53516);

return statearr_53548;
})();
var statearr_53549_53563 = state_53539__$1;
(statearr_53549_53563[(2)] = null);

(statearr_53549_53563[(1)] = (2));


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
});})(c__47999__auto___53557,out))
;
return ((function (switch__47887__auto__,c__47999__auto___53557,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto____0 = (function (){
var statearr_53553 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53553[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto__);

(statearr_53553[(1)] = (1));

return statearr_53553;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto____1 = (function (state_53539){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_53539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e53554){if((e53554 instanceof Object)){
var ex__47891__auto__ = e53554;
var statearr_53555_53564 = state_53539;
(statearr_53555_53564[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53565 = state_53539;
state_53539 = G__53565;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto__ = function(state_53539){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto____1.call(this,state_53539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto___53557,out))
})();
var state__48001__auto__ = (function (){var statearr_53556 = f__48000__auto__.call(null);
(statearr_53556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto___53557);

return statearr_53556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto___53557,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__53566,opts){
var map__53570 = p__53566;
var map__53570__$1 = ((((!((map__53570 == null)))?((((map__53570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53570):map__53570);
var eval_body__$1 = cljs.core.get.call(null,map__53570__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__53570__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__44170__auto__ = eval_body__$1;
if(cljs.core.truth_(and__44170__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__44170__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e53572){var e = e53572;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__53573_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53573_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__53582){
var vec__53583 = p__53582;
var k = cljs.core.nth.call(null,vec__53583,(0),null);
var v = cljs.core.nth.call(null,vec__53583,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__53586){
var vec__53587 = p__53586;
var k = cljs.core.nth.call(null,vec__53587,(0),null);
var v = cljs.core.nth.call(null,vec__53587,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__53593,p__53594){
var map__53841 = p__53593;
var map__53841__$1 = ((((!((map__53841 == null)))?((((map__53841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53841):map__53841);
var opts = map__53841__$1;
var before_jsload = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__53842 = p__53594;
var map__53842__$1 = ((((!((map__53842 == null)))?((((map__53842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53842):map__53842);
var msg = map__53842__$1;
var files = cljs.core.get.call(null,map__53842__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__53842__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__53842__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__47999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48000__auto__ = (function (){var switch__47887__auto__ = ((function (c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_53995){
var state_val_53996 = (state_53995[(1)]);
if((state_val_53996 === (7))){
var inst_53856 = (state_53995[(7)]);
var inst_53859 = (state_53995[(8)]);
var inst_53857 = (state_53995[(9)]);
var inst_53858 = (state_53995[(10)]);
var inst_53864 = cljs.core._nth.call(null,inst_53857,inst_53859);
var inst_53865 = figwheel.client.file_reloading.eval_body.call(null,inst_53864,opts);
var inst_53866 = (inst_53859 + (1));
var tmp53997 = inst_53856;
var tmp53998 = inst_53857;
var tmp53999 = inst_53858;
var inst_53856__$1 = tmp53997;
var inst_53857__$1 = tmp53998;
var inst_53858__$1 = tmp53999;
var inst_53859__$1 = inst_53866;
var state_53995__$1 = (function (){var statearr_54000 = state_53995;
(statearr_54000[(7)] = inst_53856__$1);

(statearr_54000[(8)] = inst_53859__$1);

(statearr_54000[(9)] = inst_53857__$1);

(statearr_54000[(10)] = inst_53858__$1);

(statearr_54000[(11)] = inst_53865);

return statearr_54000;
})();
var statearr_54001_54087 = state_53995__$1;
(statearr_54001_54087[(2)] = null);

(statearr_54001_54087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (20))){
var inst_53899 = (state_53995[(12)]);
var inst_53907 = figwheel.client.file_reloading.sort_files.call(null,inst_53899);
var state_53995__$1 = state_53995;
var statearr_54002_54088 = state_53995__$1;
(statearr_54002_54088[(2)] = inst_53907);

(statearr_54002_54088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (27))){
var state_53995__$1 = state_53995;
var statearr_54003_54089 = state_53995__$1;
(statearr_54003_54089[(2)] = null);

(statearr_54003_54089[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (1))){
var inst_53848 = (state_53995[(13)]);
var inst_53845 = before_jsload.call(null,files);
var inst_53846 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_53847 = (function (){return ((function (inst_53848,inst_53845,inst_53846,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53590_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53590_SHARP_);
});
;})(inst_53848,inst_53845,inst_53846,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53848__$1 = cljs.core.filter.call(null,inst_53847,files);
var inst_53849 = cljs.core.not_empty.call(null,inst_53848__$1);
var state_53995__$1 = (function (){var statearr_54004 = state_53995;
(statearr_54004[(13)] = inst_53848__$1);

(statearr_54004[(14)] = inst_53845);

(statearr_54004[(15)] = inst_53846);

return statearr_54004;
})();
if(cljs.core.truth_(inst_53849)){
var statearr_54005_54090 = state_53995__$1;
(statearr_54005_54090[(1)] = (2));

} else {
var statearr_54006_54091 = state_53995__$1;
(statearr_54006_54091[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (24))){
var state_53995__$1 = state_53995;
var statearr_54007_54092 = state_53995__$1;
(statearr_54007_54092[(2)] = null);

(statearr_54007_54092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (39))){
var inst_53949 = (state_53995[(16)]);
var state_53995__$1 = state_53995;
var statearr_54008_54093 = state_53995__$1;
(statearr_54008_54093[(2)] = inst_53949);

(statearr_54008_54093[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (46))){
var inst_53990 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
var statearr_54009_54094 = state_53995__$1;
(statearr_54009_54094[(2)] = inst_53990);

(statearr_54009_54094[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (4))){
var inst_53893 = (state_53995[(2)]);
var inst_53894 = cljs.core.List.EMPTY;
var inst_53895 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_53894);
var inst_53896 = (function (){return ((function (inst_53893,inst_53894,inst_53895,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53591_SHARP_){
var and__44170__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53591_SHARP_);
if(cljs.core.truth_(and__44170__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53591_SHARP_));
} else {
return and__44170__auto__;
}
});
;})(inst_53893,inst_53894,inst_53895,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53897 = cljs.core.filter.call(null,inst_53896,files);
var inst_53898 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_53899 = cljs.core.concat.call(null,inst_53897,inst_53898);
var state_53995__$1 = (function (){var statearr_54010 = state_53995;
(statearr_54010[(17)] = inst_53895);

(statearr_54010[(18)] = inst_53893);

(statearr_54010[(12)] = inst_53899);

return statearr_54010;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_54011_54095 = state_53995__$1;
(statearr_54011_54095[(1)] = (16));

} else {
var statearr_54012_54096 = state_53995__$1;
(statearr_54012_54096[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (15))){
var inst_53883 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
var statearr_54013_54097 = state_53995__$1;
(statearr_54013_54097[(2)] = inst_53883);

(statearr_54013_54097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (21))){
var inst_53909 = (state_53995[(19)]);
var inst_53909__$1 = (state_53995[(2)]);
var inst_53910 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_53909__$1);
var state_53995__$1 = (function (){var statearr_54014 = state_53995;
(statearr_54014[(19)] = inst_53909__$1);

return statearr_54014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53995__$1,(22),inst_53910);
} else {
if((state_val_53996 === (31))){
var inst_53993 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53995__$1,inst_53993);
} else {
if((state_val_53996 === (32))){
var inst_53949 = (state_53995[(16)]);
var inst_53954 = inst_53949.cljs$lang$protocol_mask$partition0$;
var inst_53955 = (inst_53954 & (64));
var inst_53956 = inst_53949.cljs$core$ISeq$;
var inst_53957 = (inst_53955) || (inst_53956);
var state_53995__$1 = state_53995;
if(cljs.core.truth_(inst_53957)){
var statearr_54015_54098 = state_53995__$1;
(statearr_54015_54098[(1)] = (35));

} else {
var statearr_54016_54099 = state_53995__$1;
(statearr_54016_54099[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (40))){
var inst_53970 = (state_53995[(20)]);
var inst_53969 = (state_53995[(2)]);
var inst_53970__$1 = cljs.core.get.call(null,inst_53969,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_53971 = cljs.core.get.call(null,inst_53969,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_53972 = cljs.core.not_empty.call(null,inst_53970__$1);
var state_53995__$1 = (function (){var statearr_54017 = state_53995;
(statearr_54017[(21)] = inst_53971);

(statearr_54017[(20)] = inst_53970__$1);

return statearr_54017;
})();
if(cljs.core.truth_(inst_53972)){
var statearr_54018_54100 = state_53995__$1;
(statearr_54018_54100[(1)] = (41));

} else {
var statearr_54019_54101 = state_53995__$1;
(statearr_54019_54101[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (33))){
var state_53995__$1 = state_53995;
var statearr_54020_54102 = state_53995__$1;
(statearr_54020_54102[(2)] = false);

(statearr_54020_54102[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (13))){
var inst_53869 = (state_53995[(22)]);
var inst_53873 = cljs.core.chunk_first.call(null,inst_53869);
var inst_53874 = cljs.core.chunk_rest.call(null,inst_53869);
var inst_53875 = cljs.core.count.call(null,inst_53873);
var inst_53856 = inst_53874;
var inst_53857 = inst_53873;
var inst_53858 = inst_53875;
var inst_53859 = (0);
var state_53995__$1 = (function (){var statearr_54021 = state_53995;
(statearr_54021[(7)] = inst_53856);

(statearr_54021[(8)] = inst_53859);

(statearr_54021[(9)] = inst_53857);

(statearr_54021[(10)] = inst_53858);

return statearr_54021;
})();
var statearr_54022_54103 = state_53995__$1;
(statearr_54022_54103[(2)] = null);

(statearr_54022_54103[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (22))){
var inst_53913 = (state_53995[(23)]);
var inst_53909 = (state_53995[(19)]);
var inst_53912 = (state_53995[(24)]);
var inst_53917 = (state_53995[(25)]);
var inst_53912__$1 = (state_53995[(2)]);
var inst_53913__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53912__$1);
var inst_53914 = (function (){var all_files = inst_53909;
var res_SINGLEQUOTE_ = inst_53912__$1;
var res = inst_53913__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_53913,inst_53909,inst_53912,inst_53917,inst_53912__$1,inst_53913__$1,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53592_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__53592_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_53913,inst_53909,inst_53912,inst_53917,inst_53912__$1,inst_53913__$1,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53915 = cljs.core.filter.call(null,inst_53914,inst_53912__$1);
var inst_53916 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_53917__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53916);
var inst_53918 = cljs.core.not_empty.call(null,inst_53917__$1);
var state_53995__$1 = (function (){var statearr_54023 = state_53995;
(statearr_54023[(23)] = inst_53913__$1);

(statearr_54023[(24)] = inst_53912__$1);

(statearr_54023[(26)] = inst_53915);

(statearr_54023[(25)] = inst_53917__$1);

return statearr_54023;
})();
if(cljs.core.truth_(inst_53918)){
var statearr_54024_54104 = state_53995__$1;
(statearr_54024_54104[(1)] = (23));

} else {
var statearr_54025_54105 = state_53995__$1;
(statearr_54025_54105[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (36))){
var state_53995__$1 = state_53995;
var statearr_54026_54106 = state_53995__$1;
(statearr_54026_54106[(2)] = false);

(statearr_54026_54106[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (41))){
var inst_53970 = (state_53995[(20)]);
var inst_53974 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_53975 = cljs.core.map.call(null,inst_53974,inst_53970);
var inst_53976 = cljs.core.pr_str.call(null,inst_53975);
var inst_53977 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_53976)].join('');
var inst_53978 = figwheel.client.utils.log.call(null,inst_53977);
var state_53995__$1 = state_53995;
var statearr_54027_54107 = state_53995__$1;
(statearr_54027_54107[(2)] = inst_53978);

(statearr_54027_54107[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (43))){
var inst_53971 = (state_53995[(21)]);
var inst_53981 = (state_53995[(2)]);
var inst_53982 = cljs.core.not_empty.call(null,inst_53971);
var state_53995__$1 = (function (){var statearr_54028 = state_53995;
(statearr_54028[(27)] = inst_53981);

return statearr_54028;
})();
if(cljs.core.truth_(inst_53982)){
var statearr_54029_54108 = state_53995__$1;
(statearr_54029_54108[(1)] = (44));

} else {
var statearr_54030_54109 = state_53995__$1;
(statearr_54030_54109[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (29))){
var inst_53913 = (state_53995[(23)]);
var inst_53909 = (state_53995[(19)]);
var inst_53912 = (state_53995[(24)]);
var inst_53915 = (state_53995[(26)]);
var inst_53949 = (state_53995[(16)]);
var inst_53917 = (state_53995[(25)]);
var inst_53945 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_53948 = (function (){var all_files = inst_53909;
var res_SINGLEQUOTE_ = inst_53912;
var res = inst_53913;
var files_not_loaded = inst_53915;
var dependencies_that_loaded = inst_53917;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53913,inst_53909,inst_53912,inst_53915,inst_53949,inst_53917,inst_53945,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53947){
var map__54031 = p__53947;
var map__54031__$1 = ((((!((map__54031 == null)))?((((map__54031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54031):map__54031);
var namespace = cljs.core.get.call(null,map__54031__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53913,inst_53909,inst_53912,inst_53915,inst_53949,inst_53917,inst_53945,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53949__$1 = cljs.core.group_by.call(null,inst_53948,inst_53915);
var inst_53951 = (inst_53949__$1 == null);
var inst_53952 = cljs.core.not.call(null,inst_53951);
var state_53995__$1 = (function (){var statearr_54033 = state_53995;
(statearr_54033[(28)] = inst_53945);

(statearr_54033[(16)] = inst_53949__$1);

return statearr_54033;
})();
if(inst_53952){
var statearr_54034_54110 = state_53995__$1;
(statearr_54034_54110[(1)] = (32));

} else {
var statearr_54035_54111 = state_53995__$1;
(statearr_54035_54111[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (44))){
var inst_53971 = (state_53995[(21)]);
var inst_53984 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53971);
var inst_53985 = cljs.core.pr_str.call(null,inst_53984);
var inst_53986 = [cljs.core.str("not required: "),cljs.core.str(inst_53985)].join('');
var inst_53987 = figwheel.client.utils.log.call(null,inst_53986);
var state_53995__$1 = state_53995;
var statearr_54036_54112 = state_53995__$1;
(statearr_54036_54112[(2)] = inst_53987);

(statearr_54036_54112[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (6))){
var inst_53890 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
var statearr_54037_54113 = state_53995__$1;
(statearr_54037_54113[(2)] = inst_53890);

(statearr_54037_54113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (28))){
var inst_53915 = (state_53995[(26)]);
var inst_53942 = (state_53995[(2)]);
var inst_53943 = cljs.core.not_empty.call(null,inst_53915);
var state_53995__$1 = (function (){var statearr_54038 = state_53995;
(statearr_54038[(29)] = inst_53942);

return statearr_54038;
})();
if(cljs.core.truth_(inst_53943)){
var statearr_54039_54114 = state_53995__$1;
(statearr_54039_54114[(1)] = (29));

} else {
var statearr_54040_54115 = state_53995__$1;
(statearr_54040_54115[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (25))){
var inst_53913 = (state_53995[(23)]);
var inst_53929 = (state_53995[(2)]);
var inst_53930 = cljs.core.not_empty.call(null,inst_53913);
var state_53995__$1 = (function (){var statearr_54041 = state_53995;
(statearr_54041[(30)] = inst_53929);

return statearr_54041;
})();
if(cljs.core.truth_(inst_53930)){
var statearr_54042_54116 = state_53995__$1;
(statearr_54042_54116[(1)] = (26));

} else {
var statearr_54043_54117 = state_53995__$1;
(statearr_54043_54117[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (34))){
var inst_53964 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
if(cljs.core.truth_(inst_53964)){
var statearr_54044_54118 = state_53995__$1;
(statearr_54044_54118[(1)] = (38));

} else {
var statearr_54045_54119 = state_53995__$1;
(statearr_54045_54119[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (17))){
var state_53995__$1 = state_53995;
var statearr_54046_54120 = state_53995__$1;
(statearr_54046_54120[(2)] = recompile_dependents);

(statearr_54046_54120[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (3))){
var state_53995__$1 = state_53995;
var statearr_54047_54121 = state_53995__$1;
(statearr_54047_54121[(2)] = null);

(statearr_54047_54121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (12))){
var inst_53886 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
var statearr_54048_54122 = state_53995__$1;
(statearr_54048_54122[(2)] = inst_53886);

(statearr_54048_54122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (2))){
var inst_53848 = (state_53995[(13)]);
var inst_53855 = cljs.core.seq.call(null,inst_53848);
var inst_53856 = inst_53855;
var inst_53857 = null;
var inst_53858 = (0);
var inst_53859 = (0);
var state_53995__$1 = (function (){var statearr_54049 = state_53995;
(statearr_54049[(7)] = inst_53856);

(statearr_54049[(8)] = inst_53859);

(statearr_54049[(9)] = inst_53857);

(statearr_54049[(10)] = inst_53858);

return statearr_54049;
})();
var statearr_54050_54123 = state_53995__$1;
(statearr_54050_54123[(2)] = null);

(statearr_54050_54123[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (23))){
var inst_53913 = (state_53995[(23)]);
var inst_53909 = (state_53995[(19)]);
var inst_53912 = (state_53995[(24)]);
var inst_53915 = (state_53995[(26)]);
var inst_53917 = (state_53995[(25)]);
var inst_53920 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_53922 = (function (){var all_files = inst_53909;
var res_SINGLEQUOTE_ = inst_53912;
var res = inst_53913;
var files_not_loaded = inst_53915;
var dependencies_that_loaded = inst_53917;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53913,inst_53909,inst_53912,inst_53915,inst_53917,inst_53920,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53921){
var map__54051 = p__53921;
var map__54051__$1 = ((((!((map__54051 == null)))?((((map__54051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54051):map__54051);
var request_url = cljs.core.get.call(null,map__54051__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53913,inst_53909,inst_53912,inst_53915,inst_53917,inst_53920,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53923 = cljs.core.reverse.call(null,inst_53917);
var inst_53924 = cljs.core.map.call(null,inst_53922,inst_53923);
var inst_53925 = cljs.core.pr_str.call(null,inst_53924);
var inst_53926 = figwheel.client.utils.log.call(null,inst_53925);
var state_53995__$1 = (function (){var statearr_54053 = state_53995;
(statearr_54053[(31)] = inst_53920);

return statearr_54053;
})();
var statearr_54054_54124 = state_53995__$1;
(statearr_54054_54124[(2)] = inst_53926);

(statearr_54054_54124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (35))){
var state_53995__$1 = state_53995;
var statearr_54055_54125 = state_53995__$1;
(statearr_54055_54125[(2)] = true);

(statearr_54055_54125[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (19))){
var inst_53899 = (state_53995[(12)]);
var inst_53905 = figwheel.client.file_reloading.expand_files.call(null,inst_53899);
var state_53995__$1 = state_53995;
var statearr_54056_54126 = state_53995__$1;
(statearr_54056_54126[(2)] = inst_53905);

(statearr_54056_54126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (11))){
var state_53995__$1 = state_53995;
var statearr_54057_54127 = state_53995__$1;
(statearr_54057_54127[(2)] = null);

(statearr_54057_54127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (9))){
var inst_53888 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
var statearr_54058_54128 = state_53995__$1;
(statearr_54058_54128[(2)] = inst_53888);

(statearr_54058_54128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (5))){
var inst_53859 = (state_53995[(8)]);
var inst_53858 = (state_53995[(10)]);
var inst_53861 = (inst_53859 < inst_53858);
var inst_53862 = inst_53861;
var state_53995__$1 = state_53995;
if(cljs.core.truth_(inst_53862)){
var statearr_54059_54129 = state_53995__$1;
(statearr_54059_54129[(1)] = (7));

} else {
var statearr_54060_54130 = state_53995__$1;
(statearr_54060_54130[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (14))){
var inst_53869 = (state_53995[(22)]);
var inst_53878 = cljs.core.first.call(null,inst_53869);
var inst_53879 = figwheel.client.file_reloading.eval_body.call(null,inst_53878,opts);
var inst_53880 = cljs.core.next.call(null,inst_53869);
var inst_53856 = inst_53880;
var inst_53857 = null;
var inst_53858 = (0);
var inst_53859 = (0);
var state_53995__$1 = (function (){var statearr_54061 = state_53995;
(statearr_54061[(7)] = inst_53856);

(statearr_54061[(8)] = inst_53859);

(statearr_54061[(9)] = inst_53857);

(statearr_54061[(32)] = inst_53879);

(statearr_54061[(10)] = inst_53858);

return statearr_54061;
})();
var statearr_54062_54131 = state_53995__$1;
(statearr_54062_54131[(2)] = null);

(statearr_54062_54131[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (45))){
var state_53995__$1 = state_53995;
var statearr_54063_54132 = state_53995__$1;
(statearr_54063_54132[(2)] = null);

(statearr_54063_54132[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (26))){
var inst_53913 = (state_53995[(23)]);
var inst_53909 = (state_53995[(19)]);
var inst_53912 = (state_53995[(24)]);
var inst_53915 = (state_53995[(26)]);
var inst_53917 = (state_53995[(25)]);
var inst_53932 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_53934 = (function (){var all_files = inst_53909;
var res_SINGLEQUOTE_ = inst_53912;
var res = inst_53913;
var files_not_loaded = inst_53915;
var dependencies_that_loaded = inst_53917;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53913,inst_53909,inst_53912,inst_53915,inst_53917,inst_53932,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53933){
var map__54064 = p__53933;
var map__54064__$1 = ((((!((map__54064 == null)))?((((map__54064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54064):map__54064);
var namespace = cljs.core.get.call(null,map__54064__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__54064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53913,inst_53909,inst_53912,inst_53915,inst_53917,inst_53932,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53935 = cljs.core.map.call(null,inst_53934,inst_53913);
var inst_53936 = cljs.core.pr_str.call(null,inst_53935);
var inst_53937 = figwheel.client.utils.log.call(null,inst_53936);
var inst_53938 = (function (){var all_files = inst_53909;
var res_SINGLEQUOTE_ = inst_53912;
var res = inst_53913;
var files_not_loaded = inst_53915;
var dependencies_that_loaded = inst_53917;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53913,inst_53909,inst_53912,inst_53915,inst_53917,inst_53932,inst_53934,inst_53935,inst_53936,inst_53937,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53913,inst_53909,inst_53912,inst_53915,inst_53917,inst_53932,inst_53934,inst_53935,inst_53936,inst_53937,state_val_53996,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53939 = setTimeout(inst_53938,(10));
var state_53995__$1 = (function (){var statearr_54066 = state_53995;
(statearr_54066[(33)] = inst_53932);

(statearr_54066[(34)] = inst_53937);

return statearr_54066;
})();
var statearr_54067_54133 = state_53995__$1;
(statearr_54067_54133[(2)] = inst_53939);

(statearr_54067_54133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (16))){
var state_53995__$1 = state_53995;
var statearr_54068_54134 = state_53995__$1;
(statearr_54068_54134[(2)] = reload_dependents);

(statearr_54068_54134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (38))){
var inst_53949 = (state_53995[(16)]);
var inst_53966 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53949);
var state_53995__$1 = state_53995;
var statearr_54069_54135 = state_53995__$1;
(statearr_54069_54135[(2)] = inst_53966);

(statearr_54069_54135[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (30))){
var state_53995__$1 = state_53995;
var statearr_54070_54136 = state_53995__$1;
(statearr_54070_54136[(2)] = null);

(statearr_54070_54136[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (10))){
var inst_53869 = (state_53995[(22)]);
var inst_53871 = cljs.core.chunked_seq_QMARK_.call(null,inst_53869);
var state_53995__$1 = state_53995;
if(inst_53871){
var statearr_54071_54137 = state_53995__$1;
(statearr_54071_54137[(1)] = (13));

} else {
var statearr_54072_54138 = state_53995__$1;
(statearr_54072_54138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (18))){
var inst_53903 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
if(cljs.core.truth_(inst_53903)){
var statearr_54073_54139 = state_53995__$1;
(statearr_54073_54139[(1)] = (19));

} else {
var statearr_54074_54140 = state_53995__$1;
(statearr_54074_54140[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (42))){
var state_53995__$1 = state_53995;
var statearr_54075_54141 = state_53995__$1;
(statearr_54075_54141[(2)] = null);

(statearr_54075_54141[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (37))){
var inst_53961 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
var statearr_54076_54142 = state_53995__$1;
(statearr_54076_54142[(2)] = inst_53961);

(statearr_54076_54142[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (8))){
var inst_53856 = (state_53995[(7)]);
var inst_53869 = (state_53995[(22)]);
var inst_53869__$1 = cljs.core.seq.call(null,inst_53856);
var state_53995__$1 = (function (){var statearr_54077 = state_53995;
(statearr_54077[(22)] = inst_53869__$1);

return statearr_54077;
})();
if(inst_53869__$1){
var statearr_54078_54143 = state_53995__$1;
(statearr_54078_54143[(1)] = (10));

} else {
var statearr_54079_54144 = state_53995__$1;
(statearr_54079_54144[(1)] = (11));

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
}
});})(c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__47887__auto__,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto____0 = (function (){
var statearr_54083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54083[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto__);

(statearr_54083[(1)] = (1));

return statearr_54083;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto____1 = (function (state_53995){
while(true){
var ret_value__47889__auto__ = (function (){try{while(true){
var result__47890__auto__ = switch__47887__auto__.call(null,state_53995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47890__auto__;
}
break;
}
}catch (e54084){if((e54084 instanceof Object)){
var ex__47891__auto__ = e54084;
var statearr_54085_54145 = state_53995;
(statearr_54085_54145[(5)] = ex__47891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54146 = state_53995;
state_53995 = G__54146;
continue;
} else {
return ret_value__47889__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto__ = function(state_53995){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto____1.call(this,state_53995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47888__auto__;
})()
;})(switch__47887__auto__,c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48001__auto__ = (function (){var statearr_54086 = f__48000__auto__.call(null);
(statearr_54086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__47999__auto__);

return statearr_54086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48001__auto__);
});})(c__47999__auto__,map__53841,map__53841__$1,opts,before_jsload,on_jsload,reload_dependents,map__53842,map__53842__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__47999__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__54149,link){
var map__54152 = p__54149;
var map__54152__$1 = ((((!((map__54152 == null)))?((((map__54152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54152):map__54152);
var file = cljs.core.get.call(null,map__54152__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__54152,map__54152__$1,file){
return (function (p1__54147_SHARP_,p2__54148_SHARP_){
if(cljs.core._EQ_.call(null,p1__54147_SHARP_,p2__54148_SHARP_)){
return p1__54147_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__54152,map__54152__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__54158){
var map__54159 = p__54158;
var map__54159__$1 = ((((!((map__54159 == null)))?((((map__54159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54159):map__54159);
var match_length = cljs.core.get.call(null,map__54159__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__54159__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__54154_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__54154_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args54161 = [];
var len__45257__auto___54164 = arguments.length;
var i__45258__auto___54165 = (0);
while(true){
if((i__45258__auto___54165 < len__45257__auto___54164)){
args54161.push((arguments[i__45258__auto___54165]));

var G__54166 = (i__45258__auto___54165 + (1));
i__45258__auto___54165 = G__54166;
continue;
} else {
}
break;
}

var G__54163 = args54161.length;
switch (G__54163) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54161.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__54168_SHARP_,p2__54169_SHARP_){
return cljs.core.assoc.call(null,p1__54168_SHARP_,cljs.core.get.call(null,p2__54169_SHARP_,key),p2__54169_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__54170){
var map__54173 = p__54170;
var map__54173__$1 = ((((!((map__54173 == null)))?((((map__54173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54173):map__54173);
var f_data = map__54173__$1;
var file = cljs.core.get.call(null,map__54173__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__54175,p__54176){
var map__54185 = p__54175;
var map__54185__$1 = ((((!((map__54185 == null)))?((((map__54185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54185):map__54185);
var opts = map__54185__$1;
var on_cssload = cljs.core.get.call(null,map__54185__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__54186 = p__54176;
var map__54186__$1 = ((((!((map__54186 == null)))?((((map__54186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54186):map__54186);
var files_msg = map__54186__$1;
var files = cljs.core.get.call(null,map__54186__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__54189_54193 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__54190_54194 = null;
var count__54191_54195 = (0);
var i__54192_54196 = (0);
while(true){
if((i__54192_54196 < count__54191_54195)){
var f_54197 = cljs.core._nth.call(null,chunk__54190_54194,i__54192_54196);
figwheel.client.file_reloading.reload_css_file.call(null,f_54197);

var G__54198 = seq__54189_54193;
var G__54199 = chunk__54190_54194;
var G__54200 = count__54191_54195;
var G__54201 = (i__54192_54196 + (1));
seq__54189_54193 = G__54198;
chunk__54190_54194 = G__54199;
count__54191_54195 = G__54200;
i__54192_54196 = G__54201;
continue;
} else {
var temp__4657__auto___54202 = cljs.core.seq.call(null,seq__54189_54193);
if(temp__4657__auto___54202){
var seq__54189_54203__$1 = temp__4657__auto___54202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54189_54203__$1)){
var c__44993__auto___54204 = cljs.core.chunk_first.call(null,seq__54189_54203__$1);
var G__54205 = cljs.core.chunk_rest.call(null,seq__54189_54203__$1);
var G__54206 = c__44993__auto___54204;
var G__54207 = cljs.core.count.call(null,c__44993__auto___54204);
var G__54208 = (0);
seq__54189_54193 = G__54205;
chunk__54190_54194 = G__54206;
count__54191_54195 = G__54207;
i__54192_54196 = G__54208;
continue;
} else {
var f_54209 = cljs.core.first.call(null,seq__54189_54203__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_54209);

var G__54210 = cljs.core.next.call(null,seq__54189_54203__$1);
var G__54211 = null;
var G__54212 = (0);
var G__54213 = (0);
seq__54189_54193 = G__54210;
chunk__54190_54194 = G__54211;
count__54191_54195 = G__54212;
i__54192_54196 = G__54213;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__54185,map__54185__$1,opts,on_cssload,map__54186,map__54186__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__54185,map__54185__$1,opts,on_cssload,map__54186,map__54186__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1481668789212