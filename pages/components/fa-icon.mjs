import * as cherry_core from 'cherry-cljs/cljs.core.js';
import { tag } from 'helpers';
class FaIcon extends HTMLElement {
  constructor() {
super();const self__ = this;
const this$ = this;
  }
async connectedCallback() { 
const this$ = this;
const self__ = this;const name1 = this$.getAttribute("name");
const qualified_name2 = (cherry_core.truth_.call(null, name1.includes("/"))) ? (name1) : (cherry_core.str.call(null, "solid/", name1));
const path3 = cherry_core.str.call(null, "/assets/fa/svgs/", qualified_name2, ".svg");
const response4 = (await fetch(path3));
const svg5 = (await response4.text());
const colour6 = this$.getAttribute("colour");
this$.innerHTML = svg5;
const svg = this.getElementsByTagName('svg')[0];
svg.style.height = '14pt';
if (cherry_core.truth_.call(null, colour6)) {
return svg.children[0].setAttribute('fill', this.getAttribute('colour'));}
}};
customElements.define("fa-icon", FaIcon);

export { FaIcon }
