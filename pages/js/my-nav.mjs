import * as cherry_core from 'cherry-cljs/cljs.core.js';import * as squint_html from 'squint-cljs/src/squint/html.js';import{no_self_referring_link,get_BANG_}from 'helpers';import{router}from 'router';var item_link =(()=>{const f18 =(function(var_args){const G__211 = cherry_core.alength.call(null,arguments);switch(G__211){case 1:return f18.cljs$core$IFn$_invoke$arity$1((arguments[0]));break;case 2:return f18.cljs$core$IFn$_invoke$arity$2((arguments[0]),(arguments[1]));break;default:throw new Error(cherry_core.str.call(null,"Invalid arity:",cherry_core.alength.call(null,arguments)))}});f18.cljs$core$IFn$_invoke$arity$1 =(function(router_entry){return item_link.call(null,router_entry,cherry_core.array_map());});f18.cljs$core$IFn$_invoke$arity$2 =(function(router_entry,opts){return no_self_referring_link.call(null,get_BANG_.call(null,router_entry,cherry_core.keyword("title")),get_BANG_.call(null,router_entry,cherry_core.keyword("path")),opts);});f18.cljs$lang$maxFixedArity = 2;return f18;})();var render =(function(){const main1 = item_link.call(null,get_BANG_.call(null,router,cherry_core.keyword("index")));const about2 = item_link.call(null,get_BANG_.call(null,router,cherry_core.keyword("about")));const spiritual_guidance3 = item_link.call(null,get_BANG_.call(null,router,cherry_core.keyword("services-guidance")));const astro_reading4 = item_link.call(null,get_BANG_.call(null,router,cherry_core.keyword("services-reading")));const remote_healing5 = item_link.call(null,get_BANG_.call(null,router,cherry_core.keyword("services-healing")));const services6 = cherry_core.vector(squint_html.tag`<span id="services">${item_link.call(null,get_BANG_.call(null,router,cherry_core.keyword("services")),cherry_core.array_map(cherry_core.keyword("class"),"mobile"))}</span>`,squint_html.tag`<ul class="large-screen"><li>${spiritual_guidance3}</li><li>${astro_reading4}</li><li>${remote_healing5}</li></ul>`);const contact7 = item_link.call(null,get_BANG_.call(null,router,cherry_core.keyword("contact")));return squint_html.tag`<link rel="stylesheet" href="/css/my-nav.css"><nav><ul><li>${main1}</li><li>${about2}</li><li>${services6}</li><li>${contact7}</li></ul></nav>`;});class MyNav extends HTMLElement{constructor(){super();const self__ = this;const this$ = this;this$.attachShadow(cherry_core.js_obj.call(null,"mode","open"))}connectedCallback(){const this$ = this;const self__ = this;this$.shadowRoot.innerHTML = render.call(null);;return null;}};customElements.define("my-nav",MyNav);export{item_link,render,MyNav}