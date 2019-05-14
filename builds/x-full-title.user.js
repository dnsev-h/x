// ==UserScript==
// @name        x/full-title
// @version     1.1.0
// @author      dnsev-h
// @namespace   dnsev-h
// @description Show the full title of galleries on mouse hover
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM.getValue
// @grant       GM_setValue
// @grant       GM.setValue
// @include     http://exhentai.org/*
// @include     https://exhentai.org/*
// @include     http://e-hentai.org/*
// @include     https://e-hentai.org/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABoVBMVEUAAAA0NTs3Nzc0NDsxMUE0NTs0NTszNDs0Njs0NTs0NDw0NTszNTszNTs1NTs0Njs1NTwzMzk0NDszNTszNDo0NDszNTszNDo0NDszNDs0NDsxNDo0NTs0NTszNDs0NTs0NDszNTs0NTs1NTwzMzo0NTszNTs1NTs1NTozNTo0NjrmXu////80NTvjXutAN0iBR4n3y/o5NkD//P/+9f70t/ijT6w8N0L2wfnwnvXvl/XqefLoavDmYO/UWdzMWNTCVstdPmT98f775fz40/v2x/n2xfntivTpc/DcW+XaW+LXWuDWWt+/VcenT7BNO1RKOlH87f376P364fz4zvrzsPfyqPbwo/XnY/DnZ+/gaOneXOjAVci1U72tUbaGSI59RYR5RIFvQ3dsQnRjP2tUPVtQO1dEOEz52fv1vvn0u/jztPjwm/Xsg/Prh/LobvDpju/kguzhcOnRWdm7VMSyUrqcTaWZTKGWTJ6US5ySSpqNSZV0Q3toQW9SPFn63PzulPTrgfPuqvLkd+viderlpeniiujhk+bGV8+OSpZWPV6jFuz0AAAAK3RSTlMA/AO/B/LXg2NGPfXfamZfJhCnpJmId3BYSyIU7OfQy7mvlBkLxI1QNDKds9RbVAAAAxJJREFUSMeNlmdb4lAQhYksUkTE3vuurnsyCYKCHey9997L2nvX7fVXbxJyI1Hv6vuN5zmHmbkzc28sz5PscngczmTLK8kqJA3hg/c18twi+ntx2tfT178YEuxxL+pL3aEgdLqXqOilvJzxcgTYrx5rq6mdAoJ+65v/ybMLaXAOx6OiRksnsECpfHlcCd0HJRxXiYwd4IIyuQYH3UgAPokPVAMrCTk8Q8o6FL6IseyiT7byDKlDUJgwGaqmEaQkjqGclsPAV9FEDdDs5p1UokA+/DQbAvU45deda13HjGimErjLf8tz2P2zGH3kqMcceXiG9xTE5NMQzfEWHvGr+BUjHu7oqFJCDJCLZyhYwY+Rj7p8pA7AwXA7pM0UboRbHEzVRfVj01DZFbvgS+CV/a4ZQAfrgEaDMiARbvOSyDcLSc2pvQs6gapGbBRxD1bYbEKtqLCHKI0B8RA3AneTSkISahS98rdRupRo6Kdys+xhWgrXgFbt+HUmFbMkySUxam+KjfIzdKfwRylToZZlpLq/YzWmd9kJsu9yhdK1Hzk0gE7V0MUCRN1XgpGE19bcA8AnaN10Uj/G1aZBZyu6eQvkNRZN7oWCNBSfnlaWZqU+tCmSbdaFgGpoR4SyWbkJi9CYXxsckjcHN4AWRbKPKHXRpqOXEnVDBZ3BzIw6ddCp1Axt6DEMTorAzKGWNMtIH/EmchjD0AQzE9rWRKllm31CWWyRqRtmttUUGJ9bVcM45sjJLncKg2Gk3QmDKXV263BOpUYN/U8Mo9Bhrf6GZeMCLBUuYaY6sIdYxsUWwOe3uR52xsw0q9hoxQ6A3g12ZXroqheYbQpHJDzLREsDFBZt7JZPJR2OYesIKrduC6PCk5GR6Sj241k6j9AdBgb86RYzZTKeZQYn9xQK0ZPHy86JgAE5L9Fuz376AD2eETbEZM3h3KsLeET3mW+Q3J44zptoW0YM4eDSOpGtOIv/tqf7f0OjZ/76TibKK85wKWo+ue7Q0vm1b3WISChIS/K+4jMjLY+E/ILUTNdby2tJZjlw+AeRxP9HDmKpUQAAAABJRU5ErkJggg==
// @icon64      data:image/png;base64,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
// @homepage    https://dnsev-h.github.io/x/
// @supportURL  https://github.com/dnsev-h/x/issues
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-full-title.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-full-title.user.js
// ==/UserScript==
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";


function addLink(label, url, order) {
	const n = document.getElementById("nb");
	if (n === null) { return; }

	const div = document.createElement("div");
	const a = document.createElement("a");
	a.href = url;
	a.textContent = label;
	if (typeof(order) === "number") {
		div.style.order = `${order}`;
	}
	div.appendChild(a);
	n.appendChild(div);

	return div;
}


module.exports = {
	addLink
};

},{}],2:[function(require,module,exports){
"use strict";

function getPageType(doc, location) {
	let n;

	if (doc.querySelector("#searchbox") !== null) {
		return "search";
	}
	else if (doc.querySelector("input[name='favcat']") !== null) {
		return "favorites";
	}
	else if (doc.querySelector("#i1>h1") !== null) {
		return "image";
	}
	else if (doc.querySelector(".gm h1#gn") !== null) {
		return "gallery";
	}
	else if (doc.querySelector("#profile_outer") !== null) {
		return "settings";
	}
	else if (
		(n = doc.querySelector("body>.d>p")) !== null &&
		/gallery\s+has\s+been\s+removed/i.exec(n.textContent.trim()) !== null
	) {
		return "gallery_deleted";
	}
	else if ((n = doc.querySelector("img[src]")) !== null && location !== null) {
		const p = location.pathname;
		if (n.getAttribute("src") === location.href && p.substr(0, 3) !== "/t/" && p.substr(0, 5) !== "/img/") {
			return "panda";
		}
	}

	// Unknown
	return null;
}


module.exports = {
	get: getPageType
};

},{}],3:[function(require,module,exports){
"use strict";


const style = require("../style");
const urlFragment = require("../url-fragment");


const settingsContainerClass = "x-settings-container";
const settingsContainerHiddenClass = "x-settings-container-hidden";
const defaultSettingsHiddenClass = "x-settings-hidden";

let settingsContainerOuter = null;
let settingsContainer = null;


function addLink() {
	const id = "x-nav-settings-link";

	let n = document.getElementById(id);
	if (n !== null) { return n; }

	const navBar = require("./navigation-bar");
	n = navBar.addLink("x", `/uconfig.php${urlFragment.create("settings")}`, 1);
	n.id = id;
	return n;
}

function initialize() {
	settingsContainerOuter = document.querySelector("#outer.stuffbox");
	if (settingsContainerOuter === null) { return; }

	settingsContainer = settingsContainerOuter.querySelector(`.${settingsContainerClass}`);
	if (settingsContainer === null) {
		settingsContainer = document.createElement("div");
		settingsContainer.className = `${settingsContainerClass} ${settingsContainerHiddenClass}`;
		settingsContainerOuter.appendChild(settingsContainer);
	}

	const id = "x-settings";
	if (!style.hasStylesheet(id)) {
		const src = require("./style/settings.css");
		style.addStylesheet(src, id);
	}

	urlFragment.addRoute(/^\/settings(\/[\w\W]*)?$/, onSettingsPageChanged);
}

function onSettingsPageChanged(match) {
	setSettingsVisible(match !== null);
}

function setSettingsVisible(visible) {
	if (settingsContainerOuter === null || settingsContainer === null) { return; }

	if (settingsContainer.classList.contains(settingsContainerHiddenClass) !== visible) {
		// No change
		return;
	}

	settingsContainer.classList.toggle(settingsContainerHiddenClass, !visible);

	for (const child of settingsContainerOuter.children) {
		if (child === settingsContainer) { continue; }
		child.classList.toggle(defaultSettingsHiddenClass, visible);
	}
}

function addSection(header, id, order) {
	if (settingsContainer === null) { return null; }

	const fullId = `x-settings-section-${id}`;

	let section = settingsContainer.querySelector(`#${fullId}`);
	if (section === null) {
		section = document.createElement("div");
		section.id = fullId;
		section.className = "x-settings-section";
		if (typeof(order) === "number") {
			section.style.order = `${order}`;
		}

		settingsContainer.appendChild(section);
	}

	let cls = "x-settings-section-header";
	let sectionHeader = section.querySelector(`.${cls}`);
	if (sectionHeader === null) {
		sectionHeader = document.createElement("h2");
		sectionHeader.className = cls;
		sectionHeader.textContent = header;
		const relative = section.firstChild;
		if (relative !== null) {
			section.insertBefore(relative, sectionHeader);
		} else {
			section.appendChild(sectionHeader);
		}
	}

	cls = "x-settings-section-content";
	let sectionContent = section.querySelector(`.${cls}`);
	if (sectionContent === null) {
		sectionContent = document.createElement("div");
		sectionContent.className = cls;
		section.appendChild(sectionContent);
	}

	return sectionContent;
}


module.exports = {
	addLink,
	initialize,
	addSection
};

},{"../style":12,"../url-fragment":13,"./navigation-bar":1,"./style/settings.css":4}],4:[function(require,module,exports){
module.exports = ".x-settings-container{display:block}.x-settings-container.x-settings-container-hidden{display:none}.x-settings-hidden{display:none!important}.x-settings-option select{margin-right:.5em}";
},{}],5:[function(require,module,exports){
"use strict";

const gm = require("./gm");


function create(configKey, configDefault) {
	let config = null;
	let configGetPromise = null;


	async function loadConfig() {
		const configString = await gm.getValue(configKey, null);
		if (typeof(configString) === "string") {
			try {
				const c = JSON.parse(configString);
				if (c !== null && typeof(c) === "object" && !Array.isArray(c)) {
					return Object.assign({}, configDefault, c);
				}
			} catch (e) {}
		}
		return Object.assign({}, configDefault);
	}

	function get() {
		if (config !== null) { return Promise.resolve(config); }

		if (configGetPromise === null) {
			configGetPromise = loadConfig().then((v) => config = v);
		}

		return configGetPromise;
	}

	async function save() {
		if (config !== null) {
			await gm.setValue(configKey, JSON.stringify(config, null, ""));
		}
	}

	async function bindInput(node, settingName) {
		const c = await get();
		node.value = c[settingName];
		node.addEventListener("change", () => {
			c[settingName] = node.value;
			save();
		}, false);
	}


	return {
		get,
		save,
		bindInput
	};
}


module.exports = {
	create
};

},{"./gm":10}],6:[function(require,module,exports){
"use strict";

const configKey = "x-full-title-config";
const configDefault = {
	displayMode: "hover" // "none", "hover", "always"
};

module.exports = require("../config").create(configKey, configDefault);

},{"../config":5}],7:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const style = require("../style");
const config = require("./config");
const pageType = require("../api/page-type");
const settings = require("../api/settings");


async function initializeSettings() {
	settings.initialize();

	const section = settings.addSection("Full Title", "full-title", 0);
	if (section !== null) {
		await setupSettings(section);
	}
}

async function setupSettings(container) {
	container.innerHTML = require("./settings.html");
	bindInput(container, "displayMode");
}

function bindInput(container, settingName) {
	const n = container.querySelector(`[data-x-settings-for=${settingName}]`);
	if (n === null) { return null; }

	config.bindInput(container.querySelector(`[data-x-settings-for=${settingName}]`), settingName);
}

async function initializeMode() {
	const c = await config.get();
	document.documentElement.setAttribute("data-x-option-full-title-display-mode", c.displayMode);
}


function main() {
	settings.addLink();

	const currentPageType = pageType.get(document, location);
	if (currentPageType === "settings") {
		initializeSettings();
	}

	const id = "x-full-title";
	if (!style.hasStylesheet(id)) {
		const src = require("./style.css");
		style.addStylesheet(src, id);
	}

	initializeMode();
}


ready.onReady(main);

},{"../api/page-type":2,"../api/settings":3,"../ready":11,"../style":12,"./config":6,"./settings.html":8,"./style.css":9}],8:[function(require,module,exports){
module.exports = "<label class=\"x-settings-option\">\r\n\t<select data-x-settings-for=\"displayMode\">\r\n\t\t<option value=\"none\">None</option>\r\n\t\t<option value=\"hover\">Hover</option>\r\n\t\t<option value=\"always\">Always</option>\r\n\t</select><span>Display mode</span>\r\n</label>";
},{}],9:[function(require,module,exports){
module.exports = ".itg>.gl1t>a:first-of-type{overflow:hidden;min-height:32px;max-height:32px;margin:6px 4px 0;position:relative;display:block}.itg>.gl1t>a:first-of-type>.glname{overflow:visible;min-height:auto;max-height:none;margin:0}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t>a:first-of-type,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover>a:first-of-type{overflow:visible;z-index:10}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover>a:first-of-type>.glname{padding-bottom:.25em}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+1)>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+1)>a:first-of-type>.glname{background-color:rgba(242,240,228,.75)}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+2)>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+2)>a:first-of-type>.glname{background-color:rgba(237,235,223,.75)}:root.x-is-dark[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+1)>a:first-of-type>.glname,:root.x-is-dark[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+1)>a:first-of-type>.glname{background-color:rgba(54,57,64,.75)}:root.x-is-dark[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+2)>a:first-of-type>.glname,:root.x-is-dark[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+2)>a:first-of-type>.glname{background-color:rgba(60,65,75,.75)}";
},{}],10:[function(require,module,exports){
"use strict";

function toPromise(fn, self) {
	return (...args) => {
		return new Promise((resolve, reject) => {
			try {
				resolve(fn.apply(self, args));
			}
			catch (e) {
				reject(e);
			}
		});
	};
};

const gm = ((objects) => {
	try {
		for (const obj of objects) {
			if (obj.GM !== null && typeof(obj.GM) === "object") {
				return obj.GM;
			}
		}
	}
	catch (e) { }

	const mapping = [
		[ "getValue", "GM_getValue" ],
		[ "setValue", "GM_setValue" ],
		[ "deleteValue", "GM_deleteValue" ],
		[ "xmlHttpRequest", "GM_xmlhttpRequest" ]
	];

	const result = {};
	for (const [key, value] of mapping) {
		let promise = null;
		for (const obj of objects) {
			const fn = obj[value];
			if (typeof(fn) === "function") {
				promise = toPromise(fn, obj);
				break;
			}
		}
		if (promise === null) {
			promise = () => new Promise((resolve, reject) => reject(new Error(`Not supported (${key})`)));
		}
		result[key] = promise;
	}
	return result;
}).call(this, [this, window]);


module.exports = gm;

},{}],11:[function(require,module,exports){
"use strict";

let isReadyValue = false;
let callbacks = null;
let checkIntervalId = null;
const checkIntervalRate = 250;


function isHooked() {
	return callbacks !== null;
}

function hook() {
	callbacks = [];
	window.addEventListener("load", checkIfReady, false);
	window.addEventListener("DOMContentLoaded", checkIfReady, false);
	document.addEventListener("readystatechange", checkIfReady, false);
	checkIntervalId = setInterval(checkIfReady, checkIntervalRate);
}

function unhook() {
	const cbs = callbacks;

	callbacks = null;
	window.removeEventListener("load", checkIfReady, false);
	window.removeEventListener("DOMContentLoaded", checkIfReady, false);
	document.removeEventListener("readystatechange", checkIfReady, false);
	clearInterval(checkIntervalId);
	checkIntervalId = null;

	invoke(cbs);
}

function invoke(callbacks) {
	for (let cb of callbacks) {
		try {
			cb();
		}
		catch (e) {
			console.error(e);
		}
	}
}

function isReady() {
	if (isReadyValue) { return true; }

	if (document.readyState === "interactive" || document.readyState === "complete") {
		if (isHooked()) { unhook(); }
		isReadyValue = true;
		return true;
	}
	return false;
}

function checkIfReady() {
	isReady();
}


function onReady(callback) {
	if (isReady()) {
		callback();
		return;
	}

	if (!isHooked()) { hook(); }

	callbacks.push(callback);
}


module.exports = {
	onReady: onReady,
	get isReady() { return isReady(); }
};

},{}],12:[function(require,module,exports){
"use strict";

function getId(id) {
	return `${id}-stylesheet`;
}

function getStylesheet(id) {
	return document.getElementById(getId(id));
}

function hasStylesheet(id) {
	return !!getStylesheet(id);
}

function addStylesheet(source, id) {
	document.documentElement.classList.toggle("x-is-dark", window.location.hostname.indexOf("exhentai") >= 0);

	const style = document.createElement("style");
	style.textContent = source;
	if (typeof(id) === "string") {
		style.id = getId(id);
	}
	document.head.appendChild(style);
	return style;
}


module.exports = {
	hasStylesheet,
	getStylesheet,
	addStylesheet
};

},{}],13:[function(require,module,exports){
"use strict";


const xPrefix = "#!x";
const separator = "/";
const routes = [];


function clear(addHistory) {
	const url = window.location.pathname + window.location.search;
	if (addHistory) {
		window.history.pushState(null, "", url);
	} else {
		window.history.replaceState(null, "", url);
	}
}

function create(path) {
	return path ? `${xPrefix}${separator}${path}` : xPrefix;
}

function addRoute(match, callback) {
	const route = { match, callback };
	routes.push(route);
	if (routes.length === 1) {
		window.addEventListener("popstate", onUrlFragmentChanged, false);
	}
	testRoutes([route]);
}

function removeRoute(match, callback) {
	for (let i = 0, ii = routes.length; i < ii; ++i) {
		const route = routes[i];
		if (route.match === match && route.callback === callback) {
			routes.splice(i, 1);
			if (routes.length === 0) {
				window.removeEventListener("popstate", onUrlFragmentChanged, false);
			}
			return true;
		}
	}
	return false;
}

function getXFragment() {
	const fragment = window.location.hash;
	return (
		!fragment ||
		fragment.length < xPrefix.length ||
		fragment.substr(0, xPrefix.length) !== xPrefix ||
		(fragment.length > xPrefix.length && fragment[xPrefix.length] !== separator)) ?
		null :
		fragment.substr(xPrefix.length);
}

function testRoutes(routes) {
	const fragment = getXFragment();
	if (fragment === null) { return; }

	for (const route of routes) {
		const match = route.match.exec(fragment);
		route.callback(match, fragment);
	}
}

function onUrlFragmentChanged() {
	testRoutes(routes);
}


module.exports = {
	clear: clear,
	create: create,
	addRoute: addRoute,
	removeRoute: removeRoute
};

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS9zZXR0aW5ncy5jc3MiLCJzcmMvY29uZmlnLmpzIiwic3JjL2Z1bGwtdGl0bGUvY29uZmlnLmpzIiwic3JjL2Z1bGwtdGl0bGUvbWFpbi5qcyIsInNyYy9mdWxsLXRpdGxlL3NldHRpbmdzLmh0bWwiLCJzcmMvZnVsbC10aXRsZS9zdHlsZS5jc3MiLCJzcmMvZ20uanMiLCJzcmMvcmVhZHkuanMiLCJzcmMvc3R5bGUuanMiLCJzcmMvdXJsLWZyYWdtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKGxhYmVsLCB1cmwsIG9yZGVyKSB7XHJcblx0Y29uc3QgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJcIik7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGEuaHJlZiA9IHVybDtcclxuXHRhLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdGRpdi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0fVxyXG5cdGRpdi5hcHBlbmRDaGlsZChhKTtcclxuXHRuLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdHJldHVybiBkaXY7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0UGFnZVR5cGUoZG9jLCBsb2NhdGlvbikge1xyXG5cdGxldCBuO1xyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdmYXZjYXQnXVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZmF2b3JpdGVzXCI7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkb2MucXVlcnlTZWxlY3RvcihcIi5nbSBoMSNnblwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZ2FsbGVyeVwiO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX291dGVyXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZXR0aW5nc1wiO1xyXG5cdH1cclxuXHRlbHNlIGlmIChcclxuXHRcdChuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIikpICE9PSBudWxsICYmXHJcblx0XHQvZ2FsbGVyeVxccytoYXNcXHMrYmVlblxccytyZW1vdmVkL2kuZXhlYyhuLnRleHRDb250ZW50LnRyaW0oKSkgIT09IG51bGxcclxuXHQpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlfZGVsZXRlZFwiO1xyXG5cdH1cclxuXHRlbHNlIGlmICgobiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIikpICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAobi5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT09IGxvY2F0aW9uLmhyZWYgJiYgcC5zdWJzdHIoMCwgMykgIT09IFwiL3QvXCIgJiYgcC5zdWJzdHIoMCwgNSkgIT09IFwiL2ltZy9cIikge1xyXG5cdFx0XHRyZXR1cm4gXCJwYW5kYVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVW5rbm93blxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0OiBnZXRQYWdlVHlwZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgdXJsRnJhZ21lbnQgPSByZXF1aXJlKFwiLi4vdXJsLWZyYWdtZW50XCIpO1xyXG5cclxuXHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVyQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyXCI7XHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyLWhpZGRlblwiO1xyXG5jb25zdCBkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcyA9IFwieC1zZXR0aW5ncy1oaWRkZW5cIjtcclxuXHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lck91dGVyID0gbnVsbDtcclxubGV0IHNldHRpbmdzQ29udGFpbmVyID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LW5hdi1zZXR0aW5ncy1saW5rXCI7XHJcblxyXG5cdGxldCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdGlmIChuICE9PSBudWxsKSB7IHJldHVybiBuOyB9XHJcblxyXG5cdGNvbnN0IG5hdkJhciA9IHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyXCIpO1xyXG5cdG4gPSBuYXZCYXIuYWRkTGluayhcInhcIiwgYC91Y29uZmlnLnBocCR7dXJsRnJhZ21lbnQuY3JlYXRlKFwic2V0dGluZ3NcIil9YCwgMSk7XHJcblx0bi5pZCA9IGlkO1xyXG5cdHJldHVybiBuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dGVyLnN0dWZmYm94XCIpO1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lck91dGVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRzZXR0aW5nc0NvbnRhaW5lciA9IHNldHRpbmdzQ29udGFpbmVyT3V0ZXIucXVlcnlTZWxlY3RvcihgLiR7c2V0dGluZ3NDb250YWluZXJDbGFzc31gKTtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTmFtZSA9IGAke3NldHRpbmdzQ29udGFpbmVyQ2xhc3N9ICR7c2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzc31gO1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXJPdXRlci5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpZCA9IFwieC1zZXR0aW5nc1wiO1xyXG5cdGlmICghc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHtcclxuXHRcdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL3NldHRpbmdzLmNzc1wiKTtcclxuXHRcdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcblx0fVxyXG5cclxuXHR1cmxGcmFnbWVudC5hZGRSb3V0ZSgvXlxcL3NldHRpbmdzKFxcL1tcXHdcXFddKik/JC8sIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZChtYXRjaCkge1xyXG5cdHNldFNldHRpbmdzVmlzaWJsZShtYXRjaCAhPT0gbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNldHRpbmdzVmlzaWJsZSh2aXNpYmxlKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPT09IG51bGwgfHwgc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcykgIT09IHZpc2libGUpIHtcclxuXHRcdC8vIE5vIGNoYW5nZVxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0c2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzLCAhdmlzaWJsZSk7XHJcblxyXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygc2V0dGluZ3NDb250YWluZXJPdXRlci5jaGlsZHJlbikge1xyXG5cdFx0aWYgKGNoaWxkID09PSBzZXR0aW5nc0NvbnRhaW5lcikgeyBjb250aW51ZTsgfVxyXG5cdFx0Y2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcywgdmlzaWJsZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTZWN0aW9uKGhlYWRlciwgaWQsIG9yZGVyKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGZ1bGxJZCA9IGB4LXNldHRpbmdzLXNlY3Rpb24tJHtpZH1gO1xyXG5cclxuXHRsZXQgc2VjdGlvbiA9IHNldHRpbmdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2Z1bGxJZH1gKTtcclxuXHRpZiAoc2VjdGlvbiA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uLmlkID0gZnVsbElkO1xyXG5cdFx0c2VjdGlvbi5jbGFzc05hbWUgPSBcIngtc2V0dGluZ3Mtc2VjdGlvblwiO1xyXG5cdFx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0c2VjdGlvbi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblx0fVxyXG5cclxuXHRsZXQgY2xzID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24taGVhZGVyXCI7XHJcblx0bGV0IHNlY3Rpb25IZWFkZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nsc31gKTtcclxuXHRpZiAoc2VjdGlvbkhlYWRlciA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHRcdHNlY3Rpb25IZWFkZXIuY2xhc3NOYW1lID0gY2xzO1xyXG5cdFx0c2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlcjtcclxuXHRcdGNvbnN0IHJlbGF0aXZlID0gc2VjdGlvbi5maXJzdENoaWxkO1xyXG5cdFx0aWYgKHJlbGF0aXZlICE9PSBudWxsKSB7XHJcblx0XHRcdHNlY3Rpb24uaW5zZXJ0QmVmb3JlKHJlbGF0aXZlLCBzZWN0aW9uSGVhZGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbHMgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1jb250ZW50XCI7XHJcblx0bGV0IHNlY3Rpb25Db250ZW50ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKGAuJHtjbHN9YCk7XHJcblx0aWYgKHNlY3Rpb25Db250ZW50ID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uQ29udGVudC5jbGFzc05hbWUgPSBjbHM7XHJcblx0XHRzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzZWN0aW9uQ29udGVudDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmssXHJcblx0aW5pdGlhbGl6ZSxcclxuXHRhZGRTZWN0aW9uXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1zZXR0aW5ncy1jb250YWluZXJ7ZGlzcGxheTpibG9ja30ueC1zZXR0aW5ncy1jb250YWluZXIueC1zZXR0aW5ncy1jb250YWluZXItaGlkZGVue2Rpc3BsYXk6bm9uZX0ueC1zZXR0aW5ncy1oaWRkZW57ZGlzcGxheTpub25lIWltcG9ydGFudH0ueC1zZXR0aW5ncy1vcHRpb24gc2VsZWN0e21hcmdpbi1yaWdodDouNWVtfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZ20gPSByZXF1aXJlKFwiLi9nbVwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KSB7XHJcblx0bGV0IGNvbmZpZyA9IG51bGw7XHJcblx0bGV0IGNvbmZpZ0dldFByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZygpIHtcclxuXHRcdGNvbnN0IGNvbmZpZ1N0cmluZyA9IGF3YWl0IGdtLmdldFZhbHVlKGNvbmZpZ0tleSwgbnVsbCk7XHJcblx0XHRpZiAodHlwZW9mKGNvbmZpZ1N0cmluZykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCBjID0gSlNPTi5wYXJzZShjb25maWdTdHJpbmcpO1xyXG5cdFx0XHRcdGlmIChjICE9PSBudWxsICYmIHR5cGVvZihjKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShjKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ0RlZmF1bHQsIGMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZSkge31cclxuXHRcdH1cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWdEZWZhdWx0KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdGlmIChjb25maWcgIT09IG51bGwpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25maWcpOyB9XHJcblxyXG5cdFx0aWYgKGNvbmZpZ0dldFByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0Y29uZmlnR2V0UHJvbWlzZSA9IGxvYWRDb25maWcoKS50aGVuKCh2KSA9PiBjb25maWcgPSB2KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29uZmlnR2V0UHJvbWlzZTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIHNhdmUoKSB7XHJcblx0XHRpZiAoY29uZmlnICE9PSBudWxsKSB7XHJcblx0XHRcdGF3YWl0IGdtLnNldFZhbHVlKGNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCBcIlwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBiaW5kSW5wdXQobm9kZSwgc2V0dGluZ05hbWUpIHtcclxuXHRcdGNvbnN0IGMgPSBhd2FpdCBnZXQoKTtcclxuXHRcdG5vZGUudmFsdWUgPSBjW3NldHRpbmdOYW1lXTtcclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblx0XHRcdGNbc2V0dGluZ05hbWVdID0gbm9kZS52YWx1ZTtcclxuXHRcdFx0c2F2ZSgpO1xyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnZXQsXHJcblx0XHRzYXZlLFxyXG5cdFx0YmluZElucHV0XHJcblx0fTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNyZWF0ZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ0tleSA9IFwieC1mdWxsLXRpdGxlLWNvbmZpZ1wiO1xyXG5jb25zdCBjb25maWdEZWZhdWx0ID0ge1xyXG5cdGRpc3BsYXlNb2RlOiBcImhvdmVyXCIgLy8gXCJub25lXCIsIFwiaG92ZXJcIiwgXCJhbHdheXNcIlxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpLmNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHJlYWR5ID0gcmVxdWlyZShcIi4uL3JlYWR5XCIpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCBzZXR0aW5ncyA9IHJlcXVpcmUoXCIuLi9hcGkvc2V0dGluZ3NcIik7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVNldHRpbmdzKCkge1xyXG5cdHNldHRpbmdzLmluaXRpYWxpemUoKTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbiA9IHNldHRpbmdzLmFkZFNlY3Rpb24oXCJGdWxsIFRpdGxlXCIsIFwiZnVsbC10aXRsZVwiLCAwKTtcclxuXHRpZiAoc2VjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0YXdhaXQgc2V0dXBTZXR0aW5ncyhzZWN0aW9uKTtcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldHVwU2V0dGluZ3MoY29udGFpbmVyKSB7XHJcblx0Y29udGFpbmVyLmlubmVySFRNTCA9IHJlcXVpcmUoXCIuL3NldHRpbmdzLmh0bWxcIik7XHJcblx0YmluZElucHV0KGNvbnRhaW5lciwgXCJkaXNwbGF5TW9kZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZElucHV0KGNvbnRhaW5lciwgc2V0dGluZ05hbWUpIHtcclxuXHRjb25zdCBuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtc2V0dGluZ3MtZm9yPSR7c2V0dGluZ05hbWV9XWApO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbmZpZy5iaW5kSW5wdXQoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtc2V0dGluZ3MtZm9yPSR7c2V0dGluZ05hbWV9XWApLCBzZXR0aW5nTmFtZSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVNb2RlKCkge1xyXG5cdGNvbnN0IGMgPSBhd2FpdCBjb25maWcuZ2V0KCk7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGVcIiwgYy5kaXNwbGF5TW9kZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdHNldHRpbmdzLmFkZExpbmsoKTtcclxuXHJcblx0Y29uc3QgY3VycmVudFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGRvY3VtZW50LCBsb2NhdGlvbik7XHJcblx0aWYgKGN1cnJlbnRQYWdlVHlwZSA9PT0gXCJzZXR0aW5nc1wiKSB7XHJcblx0XHRpbml0aWFsaXplU2V0dGluZ3MoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlkID0gXCJ4LWZ1bGwtdGl0bGVcIjtcclxuXHRpZiAoIXN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7XHJcblx0XHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZU1vZGUoKTtcclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8bGFiZWwgY2xhc3M9XFxcIngtc2V0dGluZ3Mtb3B0aW9uXFxcIj5cXHJcXG5cXHQ8c2VsZWN0IGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImRpc3BsYXlNb2RlXFxcIj5cXHJcXG5cXHRcXHQ8b3B0aW9uIHZhbHVlPVxcXCJub25lXFxcIj5Ob25lPC9vcHRpb24+XFxyXFxuXFx0XFx0PG9wdGlvbiB2YWx1ZT1cXFwiaG92ZXJcXFwiPkhvdmVyPC9vcHRpb24+XFxyXFxuXFx0XFx0PG9wdGlvbiB2YWx1ZT1cXFwiYWx3YXlzXFxcIj5BbHdheXM8L29wdGlvbj5cXHJcXG5cXHQ8L3NlbGVjdD48c3Bhbj5EaXNwbGF5IG1vZGU8L3NwYW4+XFxyXFxuPC9sYWJlbD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLml0Zz4uZ2wxdD5hOmZpcnN0LW9mLXR5cGV7b3ZlcmZsb3c6aGlkZGVuO21pbi1oZWlnaHQ6MzJweDttYXgtaGVpZ2h0OjMycHg7bWFyZ2luOjZweCA0cHggMDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrfS5pdGc+LmdsMXQ+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWV7b3ZlcmZsb3c6dmlzaWJsZTttaW4taGVpZ2h0OmF1dG87bWF4LWhlaWdodDpub25lO21hcmdpbjowfTpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9YWx3YXlzXSAuaXRnPi5nbDF0PmE6Zmlyc3Qtb2YtdHlwZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyPmE6Zmlyc3Qtb2YtdHlwZXtvdmVyZmxvdzp2aXNpYmxlO3otaW5kZXg6MTB9OnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3Zlcj5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZXtwYWRkaW5nLWJvdHRvbTouMjVlbX06cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMSk+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3ZlcjpudGgtY2hpbGQoMm4rMSk+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MiwyNDAsMjI4LC43NSl9OnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzIpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI6bnRoLWNoaWxkKDJuKzIpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1le2JhY2tncm91bmQtY29sb3I6cmdiYSgyMzcsMjM1LDIyMywuNzUpfTpyb290LngtaXMtZGFya1tkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMSk+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWUsOnJvb3QueC1pcy1kYXJrW2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI6bnRoLWNoaWxkKDJuKzEpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1le2JhY2tncm91bmQtY29sb3I6cmdiYSg1NCw1Nyw2NCwuNzUpfTpyb290LngtaXMtZGFya1tkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMik+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWUsOnJvb3QueC1pcy1kYXJrW2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI6bnRoLWNoaWxkKDJuKzIpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1le2JhY2tncm91bmQtY29sb3I6cmdiYSg2MCw2NSw3NSwuNzUpfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9Qcm9taXNlKGZuLCBzZWxmKSB7XHJcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc29sdmUoZm4uYXBwbHkoc2VsZiwgYXJncykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgZ20gPSAoKG9iamVjdHMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRpZiAob2JqLkdNICE9PSBudWxsICYmIHR5cGVvZihvYmouR00pID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9iai5HTTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdGNvbnN0IG1hcHBpbmcgPSBbXHJcblx0XHRbIFwiZ2V0VmFsdWVcIiwgXCJHTV9nZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwic2V0VmFsdWVcIiwgXCJHTV9zZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwiZGVsZXRlVmFsdWVcIiwgXCJHTV9kZWxldGVWYWx1ZVwiIF0sXHJcblx0XHRbIFwieG1sSHR0cFJlcXVlc3RcIiwgXCJHTV94bWxodHRwUmVxdWVzdFwiIF1cclxuXHRdO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBtYXBwaW5nKSB7XHJcblx0XHRsZXQgcHJvbWlzZSA9IG51bGw7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGNvbnN0IGZuID0gb2JqW3ZhbHVlXTtcclxuXHRcdFx0aWYgKHR5cGVvZihmbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHByb21pc2UgPSB0b1Byb21pc2UoZm4sIG9iaik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChwcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdHByb21pc2UgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QobmV3IEVycm9yKGBOb3Qgc3VwcG9ydGVkICgke2tleX0pYCkpKTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdFtrZXldID0gcHJvbWlzZTtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufSkuY2FsbCh0aGlzLCBbdGhpcywgd2luZG93XSk7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRJZChpZCkge1xyXG5cdHJldHVybiBgJHtpZH0tc3R5bGVzaGVldGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0SWQoaWQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzU3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiAhIWdldFN0eWxlc2hlZXQoaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNoZWV0KHNvdXJjZSwgaWQpIHtcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIngtaXMtZGFya1wiLCB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDApO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHhQcmVmaXggPSBcIiMheFwiO1xyXG5jb25zdCBzZXBhcmF0b3IgPSBcIi9cIjtcclxuY29uc3Qgcm91dGVzID0gW107XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXIoYWRkSGlzdG9yeSkge1xyXG5cdGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0aWYgKGFkZEhpc3RvcnkpIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShwYXRoKSB7XHJcblx0cmV0dXJuIHBhdGggPyBgJHt4UHJlZml4fSR7c2VwYXJhdG9yfSR7cGF0aH1gIDogeFByZWZpeDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Y29uc3Qgcm91dGUgPSB7IG1hdGNoLCBjYWxsYmFjayB9O1xyXG5cdHJvdXRlcy5wdXNoKHJvdXRlKTtcclxuXHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdH1cclxuXHR0ZXN0Um91dGVzKFtyb3V0ZV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRmb3IgKGxldCBpID0gMCwgaWkgPSByb3V0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0Y29uc3Qgcm91dGUgPSByb3V0ZXNbaV07XHJcblx0XHRpZiAocm91dGUubWF0Y2ggPT09IG1hdGNoICYmIHJvdXRlLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xyXG5cdFx0XHRyb3V0ZXMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRYRnJhZ21lbnQoKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0IWZyYWdtZW50IHx8XHJcblx0XHRmcmFnbWVudC5sZW5ndGggPCB4UHJlZml4Lmxlbmd0aCB8fFxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKDAsIHhQcmVmaXgubGVuZ3RoKSAhPT0geFByZWZpeCB8fFxyXG5cdFx0KGZyYWdtZW50Lmxlbmd0aCA+IHhQcmVmaXgubGVuZ3RoICYmIGZyYWdtZW50W3hQcmVmaXgubGVuZ3RoXSAhPT0gc2VwYXJhdG9yKSkgP1xyXG5cdFx0bnVsbCA6XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoeFByZWZpeC5sZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0Um91dGVzKHJvdXRlcykge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gZ2V0WEZyYWdtZW50KCk7XHJcblx0aWYgKGZyYWdtZW50ID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5tYXRjaC5leGVjKGZyYWdtZW50KTtcclxuXHRcdHJvdXRlLmNhbGxiYWNrKG1hdGNoLCBmcmFnbWVudCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblVybEZyYWdtZW50Q2hhbmdlZCgpIHtcclxuXHR0ZXN0Um91dGVzKHJvdXRlcyk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjbGVhcjogY2xlYXIsXHJcblx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0YWRkUm91dGU6IGFkZFJvdXRlLFxyXG5cdHJlbW92ZVJvdXRlOiByZW1vdmVSb3V0ZVxyXG59O1xyXG4iXX0=
