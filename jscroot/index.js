import { insertHTML } from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.4/croot.js";
import {onHashChange} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.4/croot.js";
// Please change https://jscroot.github.io/skeleton/ into your base url
import { url } from "https://jscroot.github.io/skeleton/jscroot/url/config.js";
import { getContentURL } from url.croot+"url/content.js";
import {runAfterHeader,runAfterContent,runAfterHashChange} from url.croot+"controller/main.js";



insertHTML(url.header,"header__container",runAfterHeader);
insertHTML(getContentURL(),"content",runAfterContent);
onHashChange(runAfterHashChange);


