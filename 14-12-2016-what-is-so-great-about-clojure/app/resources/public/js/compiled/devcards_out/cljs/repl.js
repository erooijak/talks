// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55531){
var map__55556 = p__55531;
var map__55556__$1 = ((((!((map__55556 == null)))?((((map__55556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55556):map__55556);
var m = map__55556__$1;
var n = cljs.core.get.call(null,map__55556__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__55556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55558_55580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55559_55581 = null;
var count__55560_55582 = (0);
var i__55561_55583 = (0);
while(true){
if((i__55561_55583 < count__55560_55582)){
var f_55584 = cljs.core._nth.call(null,chunk__55559_55581,i__55561_55583);
cljs.core.println.call(null,"  ",f_55584);

var G__55585 = seq__55558_55580;
var G__55586 = chunk__55559_55581;
var G__55587 = count__55560_55582;
var G__55588 = (i__55561_55583 + (1));
seq__55558_55580 = G__55585;
chunk__55559_55581 = G__55586;
count__55560_55582 = G__55587;
i__55561_55583 = G__55588;
continue;
} else {
var temp__4657__auto___55589 = cljs.core.seq.call(null,seq__55558_55580);
if(temp__4657__auto___55589){
var seq__55558_55590__$1 = temp__4657__auto___55589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55558_55590__$1)){
var c__44993__auto___55591 = cljs.core.chunk_first.call(null,seq__55558_55590__$1);
var G__55592 = cljs.core.chunk_rest.call(null,seq__55558_55590__$1);
var G__55593 = c__44993__auto___55591;
var G__55594 = cljs.core.count.call(null,c__44993__auto___55591);
var G__55595 = (0);
seq__55558_55580 = G__55592;
chunk__55559_55581 = G__55593;
count__55560_55582 = G__55594;
i__55561_55583 = G__55595;
continue;
} else {
var f_55596 = cljs.core.first.call(null,seq__55558_55590__$1);
cljs.core.println.call(null,"  ",f_55596);

var G__55597 = cljs.core.next.call(null,seq__55558_55590__$1);
var G__55598 = null;
var G__55599 = (0);
var G__55600 = (0);
seq__55558_55580 = G__55597;
chunk__55559_55581 = G__55598;
count__55560_55582 = G__55599;
i__55561_55583 = G__55600;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55601 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44182__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44182__auto__)){
return or__44182__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_55601);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_55601)))?cljs.core.second.call(null,arglists_55601):arglists_55601));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__55562_55602 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55563_55603 = null;
var count__55564_55604 = (0);
var i__55565_55605 = (0);
while(true){
if((i__55565_55605 < count__55564_55604)){
var vec__55566_55606 = cljs.core._nth.call(null,chunk__55563_55603,i__55565_55605);
var name_55607 = cljs.core.nth.call(null,vec__55566_55606,(0),null);
var map__55569_55608 = cljs.core.nth.call(null,vec__55566_55606,(1),null);
var map__55569_55609__$1 = ((((!((map__55569_55608 == null)))?((((map__55569_55608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55569_55608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55569_55608):map__55569_55608);
var doc_55610 = cljs.core.get.call(null,map__55569_55609__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55611 = cljs.core.get.call(null,map__55569_55609__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55607);

cljs.core.println.call(null," ",arglists_55611);

if(cljs.core.truth_(doc_55610)){
cljs.core.println.call(null," ",doc_55610);
} else {
}

var G__55612 = seq__55562_55602;
var G__55613 = chunk__55563_55603;
var G__55614 = count__55564_55604;
var G__55615 = (i__55565_55605 + (1));
seq__55562_55602 = G__55612;
chunk__55563_55603 = G__55613;
count__55564_55604 = G__55614;
i__55565_55605 = G__55615;
continue;
} else {
var temp__4657__auto___55616 = cljs.core.seq.call(null,seq__55562_55602);
if(temp__4657__auto___55616){
var seq__55562_55617__$1 = temp__4657__auto___55616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55562_55617__$1)){
var c__44993__auto___55618 = cljs.core.chunk_first.call(null,seq__55562_55617__$1);
var G__55619 = cljs.core.chunk_rest.call(null,seq__55562_55617__$1);
var G__55620 = c__44993__auto___55618;
var G__55621 = cljs.core.count.call(null,c__44993__auto___55618);
var G__55622 = (0);
seq__55562_55602 = G__55619;
chunk__55563_55603 = G__55620;
count__55564_55604 = G__55621;
i__55565_55605 = G__55622;
continue;
} else {
var vec__55571_55623 = cljs.core.first.call(null,seq__55562_55617__$1);
var name_55624 = cljs.core.nth.call(null,vec__55571_55623,(0),null);
var map__55574_55625 = cljs.core.nth.call(null,vec__55571_55623,(1),null);
var map__55574_55626__$1 = ((((!((map__55574_55625 == null)))?((((map__55574_55625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55574_55625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55574_55625):map__55574_55625);
var doc_55627 = cljs.core.get.call(null,map__55574_55626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55628 = cljs.core.get.call(null,map__55574_55626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55624);

cljs.core.println.call(null," ",arglists_55628);

if(cljs.core.truth_(doc_55627)){
cljs.core.println.call(null," ",doc_55627);
} else {
}

var G__55629 = cljs.core.next.call(null,seq__55562_55617__$1);
var G__55630 = null;
var G__55631 = (0);
var G__55632 = (0);
seq__55562_55602 = G__55629;
chunk__55563_55603 = G__55630;
count__55564_55604 = G__55631;
i__55565_55605 = G__55632;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__55576 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55577 = null;
var count__55578 = (0);
var i__55579 = (0);
while(true){
if((i__55579 < count__55578)){
var role = cljs.core._nth.call(null,chunk__55577,i__55579);
var temp__4657__auto___55633__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___55633__$1)){
var spec_55634 = temp__4657__auto___55633__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_55634));
} else {
}

var G__55635 = seq__55576;
var G__55636 = chunk__55577;
var G__55637 = count__55578;
var G__55638 = (i__55579 + (1));
seq__55576 = G__55635;
chunk__55577 = G__55636;
count__55578 = G__55637;
i__55579 = G__55638;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__55576);
if(temp__4657__auto____$1){
var seq__55576__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55576__$1)){
var c__44993__auto__ = cljs.core.chunk_first.call(null,seq__55576__$1);
var G__55639 = cljs.core.chunk_rest.call(null,seq__55576__$1);
var G__55640 = c__44993__auto__;
var G__55641 = cljs.core.count.call(null,c__44993__auto__);
var G__55642 = (0);
seq__55576 = G__55639;
chunk__55577 = G__55640;
count__55578 = G__55641;
i__55579 = G__55642;
continue;
} else {
var role = cljs.core.first.call(null,seq__55576__$1);
var temp__4657__auto___55643__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___55643__$2)){
var spec_55644 = temp__4657__auto___55643__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_55644));
} else {
}

var G__55645 = cljs.core.next.call(null,seq__55576__$1);
var G__55646 = null;
var G__55647 = (0);
var G__55648 = (0);
seq__55576 = G__55645;
chunk__55577 = G__55646;
count__55578 = G__55647;
i__55579 = G__55648;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1481668791091