import * as cherry_core from 'cherry-cljs/cljs.core.js';
import * as p from 'promesa';
import { keywordize_keys } from 'cherry-cljs/lib/clojure.walk.js';
var parse_json = (function (body) {
return (() => {
try{
return keywordize_keys.call(null, cherry_core.js__GT_clj.call(null, JSON.parse(body)));}
catch(e1){
return null;}

})();
});
var handler = (function (event, context) {
return p.do$.call(null, (() => {
const method1 = event.httpMethod;
if (cherry_core.truth_.call(null, cherry_core._EQ_.call(null, method1, "POST"))) {
const body2 = parse_json.call(null, event.body);
if (cherry_core.truth_.call(null, cherry_core.contains_QMARK_.call(null, body2, cherry_core.keyword("email")))) {
return ({ "statusCode": 200, "body": "OK" });} else {
return ({ "statusCode": 400, "body": "Validation Error: 'email' key is missing" });}} else {
if (cherry_core.truth_.call(null, cherry_core._EQ_.call(null, method1, "HEAD"))) {
return ({ "statusCode": 200 });} else {
if (cherry_core.truth_.call(null, cherry_core.keyword("else"))) {
return ({ "statusCode": 405, "body": "Method Not Allowed" });} else {
return null;}}}
})());
});

export { parse_json, handler }
