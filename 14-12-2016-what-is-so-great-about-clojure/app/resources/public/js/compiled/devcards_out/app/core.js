// Compiled by ClojureScript 1.9.229 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('reagent.core');
goog.require('om.next');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('om.core');
app.core.front_matter = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"layout","layout",-2120940921),false,new cljs.core.Keyword(null,"title","title",636505583),"The Hard Sell",new cljs.core.Keyword(null,"slug","slug",2029314850),"devcards-the-hard-sell",new cljs.core.Keyword(null,"date","date",-1463434462),"2015-06-06",new cljs.core.Keyword(null,"draft","draft",1421831058),true,new cljs.core.Keyword(null,"published","published",-514587618),false,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false], null)], null);
goog.exportSymbol('app.core.front_matter', app.core.front_matter);
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# [Devcards](https://github.com/bhauman/devcards): the hard sell\n\n   The Devcards library is intended to make ClojureScript development\n   a pure joy.\n\n   Devcards are intended to facilitate **interactive live\n   development**. Devcards can be used in conjunction with figwheel but\n   will also work with any form of live code reloading (repl, boot-reload, ...)\n\n   Devcards revolves around a multi-purpose macro called `defcard`.\n   You can think of `defcard` as a powerful form of **pprint** that helps you\n   interactively lift code examples out of your source files into the\n   Devcards interface (you are currently looking at the Devcards\n   interface).\n\n   The Devcards that you create are intended to have no impact on the\n   size of your production code. You can use Devcards just as you\n   would use exectuable comments inline with your source code. You\n   can also keep them separate like a test suite.\n\n   With [figwheel](https://github.com/bhauman/lein-figwheel), Devcards\n   configuration couldn't be simpler. Just add\n\n[![Clojars Project](https://clojars.org/devcards/latest-version.svg)](https://clojars.org/devcards)\n\n   to your dependencies and create a new build config with `:figwheel\n   {:devcards true}`. See the Quick Start instructions at the end of\n   this document.\n\n   Let's look at an advanced Devcard:\n\n   ```\n   (defcard bmi-calculator                        ;; optional symbol name\n     \"*Code taken from Reagent readme.*\"          ;; optional markdown doc\n     (fn [data-atom _] (bmi-component data-atom)) ;; object of focus\n     {:height 180 :weight 80}                     ;; optional initial data\n     {:inspect-data true :history true})          ;; optional devcard config options\n   ```\n\n   The [defcard api](#!/devdemos.defcard_api)\n   is intended to be small and intuitive.\n\n   You can see this devcard rendered below:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
app.core.calc_bmi = (function app$core$calc_bmi(bmi_data){
var map__61901 = bmi_data;
var map__61901__$1 = ((((!((map__61901 == null)))?((((map__61901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61901):map__61901);
var data = map__61901__$1;
var height = cljs.core.get.call(null,map__61901__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var weight = cljs.core.get.call(null,map__61901__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var bmi = cljs.core.get.call(null,map__61901__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var h = (height / (100));
if((bmi == null)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),(weight / (h * h)));
} else {
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"weight","weight",-1262796205),((bmi * h) * h));
}
});
app.core.slider = (function app$core$slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",({"type": "range", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}));
});
app.core.bmi_component = (function app$core$bmi_component(bmi_data){
var map__61913 = app.core.calc_bmi.call(null,cljs.core.deref.call(null,bmi_data));
var map__61913__$1 = ((((!((map__61913 == null)))?((((map__61913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61913):map__61913);
var weight = cljs.core.get.call(null,map__61913__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__61913__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__61913__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__61914 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__61914,(0),null);
var diagnose = cljs.core.nth.call(null,vec__61914,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"BMI calculator"),React.createElement("div",null,(function (){var attrs61920 = [cljs.core.str("Height: "),cljs.core.str((height | (0))),cljs.core.str("cm")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs61920))?sablono.interpreter.attributes.call(null,attrs61920):null),((cljs.core.map_QMARK_.call(null,attrs61920))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61920)], null)));
})(),sablono.interpreter.interpret.call(null,app.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,(function (){var attrs61921 = [cljs.core.str("Weight: "),cljs.core.str((weight | (0))),cljs.core.str("kg")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs61921))?sablono.interpreter.attributes.call(null,attrs61921):null),((cljs.core.map_QMARK_.call(null,attrs61921))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61921)], null)));
})(),sablono.interpreter.interpret.call(null,app.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150)))),React.createElement("div",null,(function (){var attrs61922 = [cljs.core.str("BMI: "),cljs.core.str((bmi | (0))),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs61922))?sablono.interpreter.attributes.call(null,attrs61922):null),((cljs.core.map_QMARK_.call(null,attrs61922))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61922)], null)));
})(),React.createElement("span",({"style": ({"color": color})}),sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,app.core.slider.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"bmi-calculator","bmi-calculator",1180119377)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"bmi-calculator",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"*Code taken from the Reagent readme.*",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data_atom,_){
return app.core.bmi_component.call(null,data_atom);
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.call(null,"## Time travel\n\n   Please interact with **the BMI calculator above**. As you change\n   the sliders you will notice that a\n   &nbsp;<span class='com-rigsomelight-devcards-history-control-left'></span>&nbsp; shows up.\n\n   This is the integrated history control widget which be enabled by\n   adding `{:history true}` to the devcard options.\n\n   Go ahead and move the sliders and play with the history control.\n\n   You can move forward with the <span class='com-rigsomelight-devcards-history-control-right'></span> control.\n\n   You can continue from where you left off with the fast forward control\n   <span class='com-rigsomelight-devcards-history-control-fast-forward'>\n<span  style='margin-right: -14px' class='com-rigsomelight-devcards-history-control-small-arrow'></span>\n<span style='margin-right: -14px' class='com-rigsomelight-devcards-history-control-small-arrow'></span>\n<span class='com-rigsomelight-devcards-history-control-block'></span>\n   </span>\n\n   You can reify the current point in history and start working with your app from this point with the\n   <span class='com-rigsomelight-devcards-history-stop'></span> control or by simply interacting with the app.\n\n   ## Data display\n\n   You will also notice that the data from the main data store is\n   being displayed. This is enabled by adding `{:inspect-data true}`\n   to the devcard options.\n\n   If you interact with the calculator above you will see that the\n   integers are being stored as strings in the data atom. This is a\n   smell that you will see immediately when the data is displayed\n   front and center like this.\n\n   ## Markdown docs\n\n   The documentation string \"*Code taken from the Reagent readme*\"\n   in the example above is optional and allows for the easy display of\n   contextual information.\n\n   ## Auto-detection and dispatch\n\n   The `defcard` macro does its best to display the given object.\n   You can pass `defcard` a **string** (will be interpreted as\n   markdown), a **function** that takes a data-atom and an React owner, a\n   **ReactElement**, a **Map**, a **Vector**, a **List**, an **Atom**,\n   an **RAtom**, an **IDeref**, anything that implements\n   **IDevcardOptions** or **IDevcard**, and I'm hoping to get various\n   cursor implementations working as well.\n\n   Implementing your own cards is easy. You can simply create an\n   arbitrary ReactElement and `defcard` will render it. If you want to\n   create a completely custom card there are the [**IDevcardOptions**\n   and **IDevcard** protocols](#!/devdemos.custom_cards).\n   "),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# cljs.test integration\n\n   Devcards provides a `deftest` macro that behaves very similarly to\n   the `cljs.test/deftest` macro. This makes it easy to define tests\n   that both show up in the Devcards display and can be run\n   using `(run-tests)` as well.\n\n   The test card has controls in the upper right hand corner that not\n   only summarize testing status but also allow you to focus on passing or\n   failing tests.\n\n   Go ahead and click on the numbers in the header of this card.\n\n   The test card will display the testing context as well as the\n   messages for the various tests that run.\n\n   For example the following tests are defined like this:\n\n   ```\n   (deftest cljs-test-integration\n     \"## Here are some example tests\"\n     (testing \"testing context 1\"\n       (is (= (+ 3 4 55555) 4) \"This is the message arg to an 'is' test\")\n       (is (= (+ 1 0 0 0) 1) \"This should work\")\n       (is (= 1 3))\n       (is false)\n       (is (throw \"errors get an extra red line on the side\")))\n      \"Top level strings are interpreted as markdown for inline documentation.\"\n     (testing \"testing context 2\"\n       (is (= (+ 1 0 0 0) 1))\n       (is (= (+ 3 4 55555) 4))\n       (is false)\n     (testing \"nested context\"\n       (is (= (+ 1 0 0 0) 1))\n       (is (= (+ 3 4 55555) 4))\n       (is false))))\n   ```\n\n   The `testing` and `is` macros are the ones from `cljs.test`\n\n   These tests are rendered below:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"cljs-test-integration","cljs-test-integration",1863903871)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cljs-test-integration",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"## Here are some example tests");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"testing context 1");

try{try{var values__52106__auto___61945 = (function (){var x__45024__auto__ = (((3) + (4)) + (55555));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),x__45024__auto__);
})();
var result__52107__auto___61946 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61945);
if(cljs.core.truth_(result__52107__auto___61946)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61945),new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61945);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
}

}catch (e61923){var t__52144__auto___61947 = e61923;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61947,new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
}
try{var values__52106__auto___61948 = (function (){var x__45024__auto__ = ((((1) + (0)) + (0)) + (0));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__45024__auto__);
})();
var result__52107__auto___61949 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61948);
if(cljs.core.truth_(result__52107__auto___61949)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61948),new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61948);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
}

}catch (e61924){var t__52144__auto___61950 = e61924;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61950,new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
}
try{var values__52106__auto___61951 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),(1));
var result__52107__auto___61952 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61951);
if(cljs.core.truth_(result__52107__auto___61952)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61951),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61951);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61925){var t__52144__auto___61953 = e61925;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61953,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__52109__auto___61954 = false;
if(value__52109__auto___61954){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61954,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61954,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61926){var t__52144__auto___61955 = e61926;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61955,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__52109__auto__ = (function(){throw "errors get an extra red line on the side"})();
if(cljs.core.truth_(value__52109__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__52109__auto__;
}catch (e61927){var t__52144__auto__ = e61927;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
return devcards.core.test_doc.call(null,"Top level strings are interpreted as markdown for inline documentation.");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"testing context 2");

try{try{var values__52106__auto___61956 = (function (){var x__45024__auto__ = ((((1) + (0)) + (0)) + (0));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__45024__auto__);
})();
var result__52107__auto___61957 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61956);
if(cljs.core.truth_(result__52107__auto___61957)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61956),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61956);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61928){var t__52144__auto___61958 = e61928;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61958,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52106__auto___61959 = (function (){var x__45024__auto__ = (((3) + (4)) + (55555));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),x__45024__auto__);
})();
var result__52107__auto___61960 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61959);
if(cljs.core.truth_(result__52107__auto___61960)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61959),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61959);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61929){var t__52144__auto___61961 = e61929;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61961,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__52109__auto___61962 = false;
if(value__52109__auto___61962){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61962,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61962,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61930){var t__52144__auto___61963 = e61930;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61963,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"nested context");

try{try{var values__52106__auto___61964 = (function (){var x__45024__auto__ = ((((1) + (0)) + (0)) + (0));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__45024__auto__);
})();
var result__52107__auto___61965 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61964);
if(cljs.core.truth_(result__52107__auto___61965)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61964),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61964);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61931){var t__52144__auto___61966 = e61931;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61966,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52106__auto___61967 = (function (){var x__45024__auto__ = (((3) + (4)) + (55555));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),x__45024__auto__);
})();
var result__52107__auto___61968 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61967);
if(cljs.core.truth_(result__52107__auto___61968)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61967),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61967);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61932){var t__52144__auto___61969 = e61932;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61969,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__52109__auto__ = false;
if(value__52109__auto__){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__52109__auto__;
}catch (e61933){var t__52144__auto__ = e61933;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

app.core.cljs_test_integration = (function app$core$cljs_test_integration(){
return cljs.test.test_var.call(null,app$core$cljs_test_integration.cljs$lang$var);
});
app.core.cljs_test_integration.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"testing context 1");

try{try{var values__52106__auto___61970 = (function (){var x__45024__auto__ = (((3) + (4)) + (55555));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),x__45024__auto__);
})();
var result__52107__auto___61971 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61970);
if(cljs.core.truth_(result__52107__auto___61971)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61970),new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61970);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
}

}catch (e61934){var t__52144__auto___61972 = e61934;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61972,new cljs.core.Keyword(null,"message","message",-406056002),"This is the message arg to an 'is' test"], null));
}
try{var values__52106__auto___61973 = (function (){var x__45024__auto__ = ((((1) + (0)) + (0)) + (0));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__45024__auto__);
})();
var result__52107__auto___61974 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61973);
if(cljs.core.truth_(result__52107__auto___61974)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61973),new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61973);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
}

}catch (e61935){var t__52144__auto___61975 = e61935;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61975,new cljs.core.Keyword(null,"message","message",-406056002),"This should work"], null));
}
try{var values__52106__auto___61976 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),(1));
var result__52107__auto___61977 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61976);
if(cljs.core.truth_(result__52107__auto___61977)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61976),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61976);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61936){var t__52144__auto___61978 = e61936;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61978,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__52109__auto___61979 = false;
if(value__52109__auto___61979){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61979,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61979,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61937){var t__52144__auto___61980 = e61937;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61980,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__52109__auto___61981 = (function(){throw "errors get an extra red line on the side"})();
if(cljs.core.truth_(value__52109__auto___61981)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61981,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61981,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61938){var t__52144__auto___61982 = e61938;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),"errors get an extra red line on the side"),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61982,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"testing context 2");

try{try{var values__52106__auto___61983 = (function (){var x__45024__auto__ = ((((1) + (0)) + (0)) + (0));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__45024__auto__);
})();
var result__52107__auto___61984 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61983);
if(cljs.core.truth_(result__52107__auto___61984)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61983),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61983);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61939){var t__52144__auto___61985 = e61939;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61985,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52106__auto___61986 = (function (){var x__45024__auto__ = (((3) + (4)) + (55555));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),x__45024__auto__);
})();
var result__52107__auto___61987 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61986);
if(cljs.core.truth_(result__52107__auto___61987)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61986),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61986);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61940){var t__52144__auto___61988 = e61940;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61988,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__52109__auto___61989 = false;
if(value__52109__auto___61989){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61989,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto___61989,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61941){var t__52144__auto___61990 = e61941;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61990,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"nested context");

try{try{var values__52106__auto___61991 = (function (){var x__45024__auto__ = ((((1) + (0)) + (0)) + (0));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),x__45024__auto__);
})();
var result__52107__auto___61992 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61991);
if(cljs.core.truth_(result__52107__auto___61992)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61991),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61991);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61942){var t__52144__auto___61993 = e61942;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(0),(0),(0)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61993,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__52106__auto___61994 = (function (){var x__45024__auto__ = (((3) + (4)) + (55555));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),x__45024__auto__);
})();
var result__52107__auto___61995 = cljs.core.apply.call(null,cljs.core._EQ_,values__52106__auto___61994);
if(cljs.core.truth_(result__52107__auto___61995)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__52106__auto___61994),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__45024__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__52106__auto___61994);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e61943){var t__52144__auto___61996 = e61943;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(4),(55555)),(4)),new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto___61996,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var value__52109__auto__ = false;
if(value__52109__auto__){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),value__52109__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__52109__auto__;
}catch (e61944){var t__52144__auto__ = e61944;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),false,new cljs.core.Keyword(null,"actual","actual",107306363),t__52144__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

app.core.cljs_test_integration.cljs$lang$var = new cljs.core.Var(function(){return app.core.cljs_test_integration;},new cljs.core.Symbol("app.core","cljs-test-integration","app.core/cljs-test-integration",-1648109814,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"description","description",-1428560544),"Devcards: A high level introduction.",new cljs.core.Keyword(null,"rigsomelight-post","rigsomelight-post",1998129093),true], null)),new cljs.core.Symbol(null,"cljs-test-integration","cljs-test-integration",-790531898,null),"/Users/erooijak/git/talks/14-12-2016-what-is-so-great-about-clojure/app/src/app/core.cljs",31,1,222,222,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.core.cljs_test_integration)?app.core.cljs_test_integration.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You can learn more about testing with devcards [here](#!/devdemos.testing)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
app.core.om_slider = (function app$core$om_slider(bmi_data,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",({"type": "range", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
om.core.update_BANG_.call(null,bmi_data,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return om.core.update_BANG_.call(null,bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})}));
});
app.core.om_bmi_component = (function app$core$om_bmi_component(bmi_data,owner){
var map__62010 = app.core.calc_bmi.call(null,bmi_data);
var map__62010__$1 = ((((!((map__62010 == null)))?((((map__62010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62010):map__62010);
var weight = cljs.core.get.call(null,map__62010__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__62010__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__62010__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__62011 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__62011,(0),null);
var diagnose = cljs.core.nth.call(null,vec__62011,(1),null);
if(typeof app.core.t_app$core62015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core62015 = (function (owner,height,om_bmi_component,color,vec__62011,bmi_data,map__62010,diagnose,weight,bmi,meta62016){
this.owner = owner;
this.height = height;
this.om_bmi_component = om_bmi_component;
this.color = color;
this.vec__62011 = vec__62011;
this.bmi_data = bmi_data;
this.map__62010 = map__62010;
this.diagnose = diagnose;
this.weight = weight;
this.bmi = bmi;
this.meta62016 = meta62016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

app.core.t_app$core62015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose){
return (function (_62017,meta62016__$1){
var self__ = this;
var _62017__$1 = this;
return (new app.core.t_app$core62015(self__.owner,self__.height,self__.om_bmi_component,self__.color,self__.vec__62011,self__.bmi_data,self__.map__62010,self__.diagnose,self__.weight,self__.bmi,meta62016__$1));
});})(map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose))
;


app.core.t_app$core62015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose){
return (function (_62017){
var self__ = this;
var _62017__$1 = this;
return self__.meta62016;
});})(map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose))
;


app.core.t_app$core62015.prototype.om$core$IRender$ = true;


app.core.t_app$core62015.prototype.om$core$IRender$render$arity$1 = ((function (map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose){
return (function (this__57122__auto__){
var self__ = this;
var this__57122__auto____$1 = this;
return React.createElement("div",null,React.createElement("h3",null,"BMI calculator"),React.createElement("div",null,(function (){var attrs62020 = [cljs.core.str("Height: "),cljs.core.str((self__.height | (0))),cljs.core.str("cm")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs62020))?sablono.interpreter.attributes.call(null,attrs62020):null),((cljs.core.map_QMARK_.call(null,attrs62020))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62020)], null)));
})(),sablono.interpreter.interpret.call(null,app.core.om_slider.call(null,self__.bmi_data,new cljs.core.Keyword(null,"height","height",1025178622),self__.height,(100),(220)))),React.createElement("div",null,(function (){var attrs62021 = [cljs.core.str("Weight: "),cljs.core.str((self__.weight | (0))),cljs.core.str("kg")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs62021))?sablono.interpreter.attributes.call(null,attrs62021):null),((cljs.core.map_QMARK_.call(null,attrs62021))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62021)], null)));
})(),sablono.interpreter.interpret.call(null,app.core.om_slider.call(null,self__.bmi_data,new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight,(30),(150)))),React.createElement("div",null,(function (){var attrs62022 = [cljs.core.str("BMI: "),cljs.core.str((self__.bmi | (0))),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs62022))?sablono.interpreter.attributes.call(null,attrs62022):null),((cljs.core.map_QMARK_.call(null,attrs62022))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62022)], null)));
})(),React.createElement("span",({"style": ({"color": self__.color})}),sablono.interpreter.interpret.call(null,self__.diagnose)),sablono.interpreter.interpret.call(null,app.core.om_slider.call(null,self__.bmi_data,new cljs.core.Keyword(null,"bmi","bmi",1421979636),self__.bmi,(10),(50)))));
});})(map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose))
;

app.core.t_app$core62015.getBasis = ((function (map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"om-bmi-component","om-bmi-component",1694840839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bmi-data","bmi-data",2011255058,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"vec__62011","vec__62011",2003754544,null),new cljs.core.Symbol(null,"bmi-data","bmi-data",2011255058,null),new cljs.core.Symbol(null,"map__62010","map__62010",1778153107,null),new cljs.core.Symbol(null,"diagnose","diagnose",-2105527019,null),new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"bmi","bmi",-1232456133,null),new cljs.core.Symbol(null,"meta62016","meta62016",1599720097,null)], null);
});})(map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose))
;

app.core.t_app$core62015.cljs$lang$type = true;

app.core.t_app$core62015.cljs$lang$ctorStr = "app.core/t_app$core62015";

app.core.t_app$core62015.cljs$lang$ctorPrWriter = ((function (map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose){
return (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"app.core/t_app$core62015");
});})(map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose))
;

app.core.__GT_t_app$core62015 = ((function (map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose){
return (function app$core$om_bmi_component_$___GT_t_app$core62015(owner__$1,height__$1,om_bmi_component__$1,color__$1,vec__62011__$1,bmi_data__$1,map__62010__$2,diagnose__$1,weight__$1,bmi__$1,meta62016){
return (new app.core.t_app$core62015(owner__$1,height__$1,om_bmi_component__$1,color__$1,vec__62011__$1,bmi_data__$1,map__62010__$2,diagnose__$1,weight__$1,bmi__$1,meta62016));
});})(map__62010,map__62010__$1,weight,height,bmi,vec__62011,color,diagnose))
;

}

return (new app.core.t_app$core62015(owner,height,app$core$om_bmi_component,color,vec__62011,bmi_data,map__62010__$1,diagnose,weight,bmi,null));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Om support\n\n   Here is the same calculator being rendered as an Om application.\n\n   ```\n   (defcard om-support\n     (dc/om-root om-bmi-component)\n     {:height 180 :weight 80} ;; initial data\n     {:inspect-data true :history true })\n   ```\n   ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"om-support","om-support",-942873915)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"om-support",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof app.core.t_app$core62023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
app.core.t_app$core62023 = (function (meta62024){
this.meta62024 = meta62024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

app.core.t_app$core62023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62025,meta62024__$1){
var self__ = this;
var _62025__$1 = this;
return (new app.core.t_app$core62023(meta62024__$1));
});


app.core.t_app$core62023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62025){
var self__ = this;
var _62025__$1 = this;
return self__.meta62024;
});


app.core.t_app$core62023.prototype.devcards$core$IDevcardOptions$ = true;


app.core.t_app$core62023.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__61234__auto__,devcard_opts__61235__auto__){
var self__ = this;
var this__61234__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__61235__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,((function (this__61234__auto____$1){
return (function (data_atom__61267__auto__,node__61268__auto__){
return om.core.root.call(null,app.core.om_bmi_component,data_atom__61267__auto__,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),node__61268__auto__], null)));
});})(this__61234__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__61235__auto__))));
});

app.core.t_app$core62023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta62024","meta62024",-1401818403,null)], null);
});

app.core.t_app$core62023.cljs$lang$type = true;

app.core.t_app$core62023.cljs$lang$ctorStr = "app.core/t_app$core62023";

app.core.t_app$core62023.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"app.core/t_app$core62023");
});

app.core.__GT_t_app$core62023 = (function app$core$__GT_t_app$core62023(meta62024){
return (new app.core.t_app$core62023(meta62024));
});

}

return (new app.core.t_app$core62023(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)], null));
})], null));
app.core.bmi_mutate = (function app$core$bmi_mutate(p__62026,_,params){
var map__62032 = p__62026;
var map__62032__$1 = ((((!((map__62032 == null)))?((((map__62032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62032):map__62032);
var state = cljs.core.get.call(null,map__62032__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var vec__62034 = cljs.core.first.call(null,params);
var k = cljs.core.nth.call(null,vec__62034,(0),null);
var v = cljs.core.nth.call(null,vec__62034,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (vec__62034,k,v,map__62032,map__62032__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,k,v);
});})(vec__62034,k,v,map__62032,map__62032__$1,state))
], null);
});
app.core.bmi_read = (function app$core$bmi_read(p__62037,k,p__62038){
var map__62043 = p__62037;
var map__62043__$1 = ((((!((map__62043 == null)))?((((map__62043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62043):map__62043);
var state = cljs.core.get.call(null,map__62043__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__62044 = p__62038;
var map__62044__$1 = ((((!((map__62044 == null)))?((((map__62044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62044):map__62044);
var params = map__62044__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),k)], null);
});
app.core.om_next_slider = (function app$core$om_next_slider(c,param,value,min,max){
return sablono.interpreter.create_element.call(null,"input",({"type": "range", "value": value, "min": min, "max": max, "style": ({"width": "100%"}), "onChange": (function (e){
om.next.transact_BANG_.call(null,c,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__45024__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("app.core","change-bmi-key!","app.core/change-bmi-key!",-1710102118,null)),(function (){var x__45024__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__45024__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})(),(function (){var x__45024__auto__ = e.target.value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__45024__auto__);
})())))));

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return om.next.transact_BANG_.call(null,c,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"change-bmi-key!","change-bmi-key!",1559252182,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bmi","bmi",1421979636),null], null))], null));
} else {
return null;
}
})}));
});
if(typeof app.core.BmiComponent !== 'undefined'){
} else {
/**
 * @constructor
 */
app.core.BmiComponent = (function app$core$BmiComponent(){
var this__59468__auto__ = this;
React.Component.apply(this__59468__auto__,arguments);

if(!((this__59468__auto__.initLocalState == null))){
this__59468__auto__.state = this__59468__auto__.initLocalState();
} else {
this__59468__auto__.state = {};
}

return this__59468__auto__;
});

app.core.BmiComponent.prototype = goog.object.clone(React.Component.prototype);
}

var x62051_62071 = app.core.BmiComponent.prototype;
x62051_62071.componentWillUpdate = ((function (x62051_62071){
return (function (next_props__59373__auto__,next_state__59374__auto__){
var this__59372__auto__ = this;
if(((!((this__59372__auto__ == null)))?(((false) || (this__59372__auto__.om$next$Ident$))?true:false):false)){
var ident__59376__auto___62072 = om.next.ident.call(null,this__59372__auto__,om.next.props.call(null,this__59372__auto__));
var next_ident__59377__auto___62073 = om.next.ident.call(null,this__59372__auto__,om.next._next_props.call(null,next_props__59373__auto__,this__59372__auto__));
if(cljs.core.not_EQ_.call(null,ident__59376__auto___62072,next_ident__59377__auto___62073)){
var idxr__59378__auto___62074 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__59372__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__59378__auto___62074 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__59378__auto___62074),((function (idxr__59378__auto___62074,ident__59376__auto___62072,next_ident__59377__auto___62073,this__59372__auto__,x62051_62071){
return (function (indexes__59379__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__59379__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__59376__auto___62072], null),cljs.core.disj,this__59372__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__59377__auto___62073], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__59372__auto__);
});})(idxr__59378__auto___62074,ident__59376__auto___62072,next_ident__59377__auto___62073,this__59372__auto__,x62051_62071))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__59372__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__59372__auto__);
});})(x62051_62071))
;

x62051_62071.shouldComponentUpdate = ((function (x62051_62071){
return (function (next_props__59373__auto__,next_state__59374__auto__){
var this__59372__auto__ = this;
var next_children__59375__auto__ = next_props__59373__auto__.children;
var next_props__59373__auto____$1 = goog.object.get(next_props__59373__auto__,"omcljs$value");
var next_props__59373__auto____$2 = (function (){var G__62053 = next_props__59373__auto____$1;
if((next_props__59373__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__62053);
} else {
return G__62053;
}
})();
var or__44190__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__59372__auto__),next_props__59373__auto____$2);
if(or__44190__auto__){
return or__44190__auto__;
} else {
var or__44190__auto____$1 = (function (){var and__44178__auto__ = this__59372__auto__.state;
if(cljs.core.truth_(and__44178__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__59372__auto__.state,"omcljs$state"),goog.object.get(next_state__59374__auto__,"omcljs$state"));
} else {
return and__44178__auto__;
}
})();
if(cljs.core.truth_(or__44190__auto____$1)){
return or__44190__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__59372__auto__.props.children,next_children__59375__auto__);
}
}
});})(x62051_62071))
;

x62051_62071.componentWillUnmount = ((function (x62051_62071){
return (function (){
var this__59372__auto__ = this;
var r__59383__auto__ = om.next.get_reconciler.call(null,this__59372__auto__);
var cfg__59384__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__59383__auto__);
var st__59385__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__59384__auto__);
var indexer__59382__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__59384__auto__);
if(cljs.core.truth_((function (){var and__44178__auto__ = !((st__59385__auto__ == null));
if(and__44178__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__59385__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__59372__auto__], null));
} else {
return and__44178__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__59385__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__59372__auto__);
} else {
}

if((indexer__59382__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__59382__auto__,this__59372__auto__);
}
});})(x62051_62071))
;

x62051_62071.componentDidUpdate = ((function (x62051_62071){
return (function (prev_props__59380__auto__,prev_state__59381__auto__){
var this__59372__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__59372__auto__);
});})(x62051_62071))
;

x62051_62071.isMounted = ((function (x62051_62071){
return (function (){
var this__59372__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__59372__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x62051_62071))
;

x62051_62071.componentWillMount = ((function (x62051_62071){
return (function (){
var this__59372__auto__ = this;
var indexer__59382__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__59372__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__59382__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__59382__auto__,this__59372__auto__);
}
});})(x62051_62071))
;

x62051_62071.render = ((function (x62051_62071){
return (function (){
var this__59371__auto__ = this;
var this$ = this__59371__auto__;
var _STAR_reconciler_STAR_62054 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_62055 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_62056 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_62057 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_62058 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__59371__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__59371__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__59371__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__59371__auto__);

om.next._STAR_parent_STAR_ = this__59371__auto__;

try{var props = om.next.props.call(null,this$);
var map__62059 = app.core.calc_bmi.call(null,props);
var map__62059__$1 = ((((!((map__62059 == null)))?((((map__62059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62059):map__62059);
var weight = cljs.core.get.call(null,map__62059__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__62059__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__62059__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__62060 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__62060,(0),null);
var diagnose = cljs.core.nth.call(null,vec__62060,(1),null);
return React.createElement("div",null,React.createElement("h3",null,"BMI calculator"),React.createElement("div",null,(function (){var attrs62066 = [cljs.core.str("Height: "),cljs.core.str((height | (0))),cljs.core.str("cm")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs62066))?sablono.interpreter.attributes.call(null,attrs62066):null),((cljs.core.map_QMARK_.call(null,attrs62066))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62066)], null)));
})(),sablono.interpreter.interpret.call(null,app.core.om_next_slider.call(null,this$,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)))),React.createElement("div",null,(function (){var attrs62067 = [cljs.core.str("Weight: "),cljs.core.str((weight | (0))),cljs.core.str("kg")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs62067))?sablono.interpreter.attributes.call(null,attrs62067):null),((cljs.core.map_QMARK_.call(null,attrs62067))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62067)], null)));
})(),sablono.interpreter.interpret.call(null,app.core.om_next_slider.call(null,this$,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150)))),React.createElement("div",null,(function (){var attrs62068 = [cljs.core.str("BMI: "),cljs.core.str((bmi | (0))),cljs.core.str(" ")].join('');
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs62068))?sablono.interpreter.attributes.call(null,attrs62068):null),((cljs.core.map_QMARK_.call(null,attrs62068))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62068)], null)));
})(),React.createElement("span",({"style": ({"color": color})}),sablono.interpreter.interpret.call(null,diagnose)),sablono.interpreter.interpret.call(null,app.core.om_next_slider.call(null,this$,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_62058;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_62057;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_62056;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_62055;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_62054;
}});})(x62051_62071))
;


app.core.BmiComponent.prototype.constructor = app.core.BmiComponent;

app.core.BmiComponent.prototype.constructor.displayName = "app.core/BmiComponent";

app.core.BmiComponent.prototype.om$isComponent = true;

var x62069_62075 = app.core.BmiComponent;
/** @nocollapse */
x62069_62075.om$next$IQuery$ = true;

/** @nocollapse */
x62069_62075.om$next$IQuery$query$arity$1 = ((function (x62069_62075){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null);
});})(x62069_62075))
;


var x62070_62076 = app.core.BmiComponent.prototype;

x62070_62076.om$next$IQuery$ = true;


x62070_62076.om$next$IQuery$query$arity$1 = ((function (x62070_62076){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"bmi","bmi",1421979636)], null);
});})(x62070_62076))
;


app.core.BmiComponent.cljs$lang$type = true;

app.core.BmiComponent.cljs$lang$ctorStr = "app.core/BmiComponent";

app.core.BmiComponent.cljs$lang$ctorPrWriter = (function (this__59471__auto__,writer__59472__auto__,opt__59473__auto__){
return cljs.core._write.call(null,writer__59472__auto__,"app.core/BmiComponent");
});
if(typeof app.core.bmi_reconciler !== 'undefined'){
} else {
app.core.bmi_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null),new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),app.core.bmi_read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),app.core.bmi_mutate], null))], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Om Next support\n\n   Here is the same calculator being rendered as an Om Next application.\n   ```\n   (defcard-om-next om-next-support\n     BmiComponent\n     bmi-reconciler\n     {:inspect-data true :history true })\n   ```\n   ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"om-next-support","om-next-support",46553015)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"om-next-support",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof app.core.t_app$core62077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
app.core.t_app$core62077 = (function (meta62078){
this.meta62078 = meta62078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

app.core.t_app$core62077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62079,meta62078__$1){
var self__ = this;
var _62079__$1 = this;
return (new app.core.t_app$core62077(meta62078__$1));
});


app.core.t_app$core62077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62079){
var self__ = this;
var _62079__$1 = this;
return self__.meta62078;
});


app.core.t_app$core62077.prototype.devcards$core$IDevcardOptions$ = true;


app.core.t_app$core62077.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__61234__auto__,devcard_opts__61235__auto__){
var self__ = this;
var this__61234__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__61235__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.dom_node_STAR_.call(null,((function (this__61234__auto____$1){
return (function (data_atom__61280__auto__,node__61281__auto__){
var state__61282__auto__ = ((cljs.core.map_QMARK_.call(null,app.core.bmi_reconciler))?cljs.core.atom.call(null,app.core.bmi_reconciler):data_atom__61280__auto__);
var reconciler__61283__auto__ = ((om.next.reconciler_QMARK_.call(null,app.core.bmi_reconciler))?app.core.bmi_reconciler:om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__61282__auto__,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),((function (state__61282__auto__,this__61234__auto____$1){
return (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),data_atom__61280__auto__], null);
});})(state__61282__auto__,this__61234__auto____$1))
], null))], null)));
return om.next.add_root_BANG_.call(null,reconciler__61283__auto__,app.core.BmiComponent,node__61281__auto__);
});})(this__61234__auto____$1))
),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null),devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__61235__auto__))));
});

app.core.t_app$core62077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta62078","meta62078",903904837,null)], null);
});

app.core.t_app$core62077.cljs$lang$type = true;

app.core.t_app$core62077.cljs$lang$ctorStr = "app.core/t_app$core62077";

app.core.t_app$core62077.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"app.core/t_app$core62077");
});

app.core.__GT_t_app$core62077 = (function app$core$__GT_t_app$core62077(meta62078){
return (new app.core.t_app$core62077(meta62078));
});

}

return (new app.core.t_app$core62077(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null),new cljs.core.Keyword(null,"options","options",99638489),null], null));
})], null));
if(typeof app.core.re_bmi_data !== 'undefined'){
} else {
app.core.re_bmi_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(180),new cljs.core.Keyword(null,"weight","weight",-1262796205),(80)], null));
}
app.core.re_slider = (function app$core$re_slider(param,value,min,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.swap_BANG_.call(null,app.core.re_bmi_data,cljs.core.assoc,param,e.target.value);

if(cljs.core.not_EQ_.call(null,param,new cljs.core.Keyword(null,"bmi","bmi",1421979636))){
return cljs.core.swap_BANG_.call(null,app.core.re_bmi_data,cljs.core.assoc,new cljs.core.Keyword(null,"bmi","bmi",1421979636),null);
} else {
return null;
}
})], null)], null);
});
app.core.re_bmi_component = (function app$core$re_bmi_component(){
var map__62085 = app.core.calc_bmi.call(null,cljs.core.deref.call(null,app.core.re_bmi_data));
var map__62085__$1 = ((((!((map__62085 == null)))?((((map__62085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62085):map__62085);
var weight = cljs.core.get.call(null,map__62085__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var height = cljs.core.get.call(null,map__62085__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var bmi = cljs.core.get.call(null,map__62085__$1,new cljs.core.Keyword(null,"bmi","bmi",1421979636));
var vec__62086 = (((bmi < 18.5))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","underweight"], null):(((bmi < (25)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["inherit","normal"], null):(((bmi < (30)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["orange","overweight"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","obese"], null)
)));
var color = cljs.core.nth.call(null,vec__62086,(0),null);
var diagnose = cljs.core.nth.call(null,vec__62086,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"BMI calculator"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Height: ",(height | (0)),"cm",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.re_slider,new cljs.core.Keyword(null,"height","height",1025178622),height,(100),(220)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Weight: ",(weight | (0)),"kg",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.re_slider,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight,(30),(150)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BMI: ",(bmi | (0))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null)], null),diagnose], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.re_slider,new cljs.core.Keyword(null,"bmi","bmi",1421979636),bmi,(10),(50)], null)], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# There is also built-in support for Reagent\n\n  Below is the same BMI calculator in Reagent:\n  ```\n  (defcard reagent-support\n    (dc/reagent re-bmi-component)\n    re-bmi-data ;; reagent atom\n    {:inspect-data true :history true })\n  ```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"reagent-support","reagent-support",974377056)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"reagent-support",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof app.core.t_app$core62090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
app.core.t_app$core62090 = (function (meta62091){
this.meta62091 = meta62091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

app.core.t_app$core62090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62092,meta62091__$1){
var self__ = this;
var _62092__$1 = this;
return (new app.core.t_app$core62090(meta62091__$1));
});


app.core.t_app$core62090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62092){
var self__ = this;
var _62092__$1 = this;
return self__.meta62091;
});


app.core.t_app$core62090.prototype.devcards$core$IDevcardOptions$ = true;


app.core.t_app$core62090.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__61234__auto__,devcard_opts__61235__auto__){
var self__ = this;
var this__61234__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__61235__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__61253__auto__ = app.core.re_bmi_component;
if(cljs.core.fn_QMARK_.call(null,v__61253__auto__)){
return ((function (v__61253__auto__,this__61234__auto____$1){
return (function (data_atom__61254__auto__,owner__61255__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__61253__auto__,data_atom__61254__auto__,owner__61255__auto__], null));
});
;})(v__61253__auto__,this__61234__auto____$1))
} else {
return reagent.core.as_element.call(null,v__61253__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__61235__auto__))));
});

app.core.t_app$core62090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta62091","meta62091",957943962,null)], null);
});

app.core.t_app$core62090.cljs$lang$type = true;

app.core.t_app$core62090.cljs$lang$ctorStr = "app.core/t_app$core62090";

app.core.t_app$core62090.cljs$lang$ctorPrWriter = (function (this__44796__auto__,writer__44797__auto__,opt__44798__auto__){
return cljs.core._write.call(null,writer__44797__auto__,"app.core/t_app$core62090");
});

app.core.__GT_t_app$core62090 = (function app$core$__GT_t_app$core62090(meta62091){
return (new app.core.t_app$core62090(meta62091));
});

}

return (new app.core.t_app$core62090(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),app.core.re_bmi_data,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app.core","app.core",121759764),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Not cool enough?\n\n   Well there is a bunch more, but that's what the docs are for.\n\n   For quick documentation please see the source for these devcards here.\n\n   ## Quick Start\n\n   These are brief instructions for the curious. These will not be\n   helpful if you are not an experienced ClojureScript developer.\n\n   You can generate a new devcards project with:\n\n   ```bash\n   $ lein new devcards hello-world\n   ```\n\n   ## Existing project\n\n   Integrating devcards into an existing project is straightforward and\n   requires a seperate build, similar to how you would create a test\n   build.\n\n   Add\n\n[![Clojars Project](https://clojars.org/devcards/latest-version.svg)](https://clojars.org/devcards)\n\nas a dependency.\n\n   Require the devcards macros:\n\n   ```\n   (ns example.core\n    (:require-macros\n     ;; Notice that I am not including the 'devcards.core namespace\n     ;; but only the macros. This helps ensure that devcards will only\n     ;; be created when the :devcards is set to true in the build config.\n     [devcards.core :as dc :refer [defcard deftest]]))\n   ```\n\n   If you are using figwheel you can create a build from your current\n   figwheel dev build and add `:devcards true` (figwheel >= 0.3.7) to\n   your `:figwheel` build config like so:\n\n   ```clojure\n   :cljsbuild {\n     :builds [{:id :devcards\n               :source-paths [\"src\"]\n               :figwheel { :devcards true }\n               :compiler {\n                 :main \"example.core\"\n                 :asset-path \"js/out\"\n                 :output-to \"resources/public/js/example.js\"\n                 :output-dir \"resources/public/js/out\"\n               }}]}\n   ```\n\n  It's important to make sure that your application isn't launching\n  itself on load. We don't want your application to run. We want the\n  Devcards application to run. So having a seperate HTML file for the\n  devcards build is the best solution.\n\n  ```\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no\">\n    </head>\n    <body>\n      <script src=\"js/example.js\" type=\"text/javascript\"></script>\n    </body>\n  </html>\n  ```\n\n  A quick way to prevent your main application from running is to make\n  it conditional on the presence of the DOM node it's expecting to\n  mount and then just include that DOM node on HTML pages where your\n  app is going to launch.\n\n  ```\n  (defn main []\n    ;; conditionally start the app based on the presence of #main-app-area\n    ;; node is on the page\n    (if-let [node (.getElementById js/document \"main-app-area\")]\n      (js/React.render (sab/html [:div \"This is main app is ruunning.\"]) node)))\n\n  (main)\n  ```\n\n  For now refer to the\n  [devcards-template](https://github.com/bhauman/devcards-template)\n  for a more complete picture of setting up decards.\n\n## Devcards without Figwheel\n\nFigwheel does some magic so that Devcards can be included or excluded\nfrom your code easily. You can certainly use Devcards without Figwheel,\nbut there are three things that you will need to do.\n\n#### You need to specify `:devcards true` **in the build-options** of your ClojureScript build\n\n```clojure\n{ :main    \"{{name}}.core\"\n  :devcards true\n  :asset-path \"js/compiled/devcards_out\"\n  :output-to  \"resources/public/js/{{sanitized}}_devcards.js\"\n  :output-dir \"resources/public/js/devcards_out\"\n  :source-map-timestamp true }\n```\n\nThis is important as it is a signal to the `defcard` macro to render\nthe cards.\n\n#### You will need to require `devcards.core` in the files that use devcards as such:\n\n```clojure\n(ns example.core\n  (:require\n   [devcards.core :as dc] ; <-- here\n   [sablono.core :as sab]) ; just for this example\n  (:require-macros\n   [devcards.core :refer [defcard]])) ; <-- and here\n\n(defcard my-first-card\n  (sab/html [:h1 \"Devcards is freaking awesome!\"]))\n```\n\nThis isn't required with Figwheel because it puts `devcards.core` into the\nbuild automatically.\n\n#### You will need to start the Devcards UI\n\n```\n(devcards.core/start-devcard-ui!)\n```\n\nAs mentioned above, you don't want the Devcards UI to compete with\nyour application's UI so you will want to make sure it isn't getting\nlaunched.\n\n\n\n  ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));

//# sourceMappingURL=core.js.map?rel=1481750468270