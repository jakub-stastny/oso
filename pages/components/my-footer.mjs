import * as cherry_core from 'cherry-cljs/cljs.core.js';
import { tag, css_var } from 'helpers';
import { youtube_link, reddit_link } from 'config';
var social_icon = (function (name, link) {
return tag.call(null, cherry_core.keyword("a"), cherry_core.array_map(cherry_core.keyword("href"), link, cherry_core.keyword("target"), "_blank", cherry_core.keyword("rel"), "noopener"), tag.call(null, cherry_core.keyword("fa-icon"), cherry_core.array_map(cherry_core.keyword("name"), cherry_core.str.call(null, "brands/", name), cherry_core.keyword("colour"), css_var.call(null, cherry_core.str.call(null, name, "-colour")))));
});
var render = (function (root) {
const fa_envelope1 = tag.call(null, cherry_core.keyword("fa-icon"), cherry_core.array_map(cherry_core.keyword("name"), "envelope", cherry_core.keyword("colour"), css_var.call(null, "envelope-colour")));
const envelope2 = tag.call(null, cherry_core.keyword("li"), tag.call(null, cherry_core.keyword("my-email"), cherry_core.array_map(cherry_core.keyword("subject"), "Hey there!"), tag.call(null, cherry_core.keyword("a"), fa_envelope1)));
const youtube3 = tag.call(null, cherry_core.keyword("li"), social_icon.call(null, "youtube", youtube_link));
const reddit4 = tag.call(null, cherry_core.keyword("li"), social_icon.call(null, "reddit", reddit_link));
const social_icons5 = tag.call(null, cherry_core.keyword("ul"), cherry_core.array_map(cherry_core.keyword("class"), "footer-icons"), cherry_core.vector(youtube3, envelope2, reddit4));
root.appendChild(tag.call(null, cherry_core.keyword("script"), cherry_core.array_map(cherry_core.keyword("type"), "module", cherry_core.keyword("src"), "/components/fa-icon.mjs")));
root.appendChild(tag.call(null, cherry_core.keyword("script"), cherry_core.array_map(cherry_core.keyword("type"), "module", cherry_core.keyword("src"), "/components/my-email.mjs")));
root.appendChild(tag.call(null, cherry_core.keyword("link"), cherry_core.array_map(cherry_core.keyword("rel"), "stylesheet", cherry_core.keyword("href"), "/css/styles.css")));
root.appendChild(tag.call(null, cherry_core.keyword("link"), cherry_core.array_map(cherry_core.keyword("rel"), "stylesheet", cherry_core.keyword("href"), "/css/footer.css")));
return root.appendChild(tag.call(null, cherry_core.keyword("footer"), social_icons5));
});
class MyFooter extends HTMLElement {
  constructor() {
super();const self__ = this;
const this$ = this;
this$.attachShadow(({ "mode": "open" }))  }
connectedCallback() { 
const this$ = this;
const self__ = this;return render.call(null, this$.shadowRoot);
}};
customElements.define("my-footer", MyFooter);

export { social_icon, render, MyFooter }
