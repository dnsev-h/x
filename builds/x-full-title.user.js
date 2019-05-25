// ==UserScript==
// @name        x/full-title
// @version     1.1.4
// @author      dnsev-h
// @namespace   dnsev-h
// @description Show the full title of galleries on mouse hover
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM.getValue
// @grant       GM_setValue
// @grant       GM.setValue
// @include     https://exhentai.org/*
// @include     https://e-hentai.org/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABoVBMVEUAAAA0NTs3Nzc0NDsxMUE0NTs0NTszNDs0Njs0NTs0NDw0NTszNTszNTs1NTs0Njs1NTwzMzk0NDszNTszNDo0NDszNTszNDo0NDszNDs0NDsxNDo0NTs0NTszNDs0NTs0NDszNTs0NTs1NTwzMzo0NTszNTs1NTs1NTozNTo0NjrmXu////80NTvjXutAN0iBR4n3y/o5NkD//P/+9f70t/ijT6w8N0L2wfnwnvXvl/XqefLoavDmYO/UWdzMWNTCVstdPmT98f775fz40/v2x/n2xfntivTpc/DcW+XaW+LXWuDWWt+/VcenT7BNO1RKOlH87f376P364fz4zvrzsPfyqPbwo/XnY/DnZ+/gaOneXOjAVci1U72tUbaGSI59RYR5RIFvQ3dsQnRjP2tUPVtQO1dEOEz52fv1vvn0u/jztPjwm/Xsg/Prh/LobvDpju/kguzhcOnRWdm7VMSyUrqcTaWZTKGWTJ6US5ySSpqNSZV0Q3toQW9SPFn63PzulPTrgfPuqvLkd+viderlpeniiujhk+bGV8+OSpZWPV6jFuz0AAAAK3RSTlMA/AO/B/LXg2NGPfXfamZfJhCnpJmId3BYSyIU7OfQy7mvlBkLxI1QNDKds9RbVAAAAxJJREFUSMeNlmdb4lAQhYksUkTE3vuurnsyCYKCHey9997L2nvX7fVXbxJyI1Hv6vuN5zmHmbkzc28sz5PscngczmTLK8kqJA3hg/c18twi+ntx2tfT178YEuxxL+pL3aEgdLqXqOilvJzxcgTYrx5rq6mdAoJ+65v/ybMLaXAOx6OiRksnsECpfHlcCd0HJRxXiYwd4IIyuQYH3UgAPokPVAMrCTk8Q8o6FL6IseyiT7byDKlDUJgwGaqmEaQkjqGclsPAV9FEDdDs5p1UokA+/DQbAvU45deda13HjGimErjLf8tz2P2zGH3kqMcceXiG9xTE5NMQzfEWHvGr+BUjHu7oqFJCDJCLZyhYwY+Rj7p8pA7AwXA7pM0UboRbHEzVRfVj01DZFbvgS+CV/a4ZQAfrgEaDMiARbvOSyDcLSc2pvQs6gapGbBRxD1bYbEKtqLCHKI0B8RA3AneTSkISahS98rdRupRo6Kdys+xhWgrXgFbt+HUmFbMkySUxam+KjfIzdKfwRylToZZlpLq/YzWmd9kJsu9yhdK1Hzk0gE7V0MUCRN1XgpGE19bcA8AnaN10Uj/G1aZBZyu6eQvkNRZN7oWCNBSfnlaWZqU+tCmSbdaFgGpoR4SyWbkJi9CYXxsckjcHN4AWRbKPKHXRpqOXEnVDBZ3BzIw6ddCp1Axt6DEMTorAzKGWNMtIH/EmchjD0AQzE9rWRKllm31CWWyRqRtmttUUGJ9bVcM45sjJLncKg2Gk3QmDKXV263BOpUYN/U8Mo9Bhrf6GZeMCLBUuYaY6sIdYxsUWwOe3uR52xsw0q9hoxQ6A3g12ZXroqheYbQpHJDzLREsDFBZt7JZPJR2OYesIKrduC6PCk5GR6Sj241k6j9AdBgb86RYzZTKeZQYn9xQK0ZPHy86JgAE5L9Fuz376AD2eETbEZM3h3KsLeET3mW+Q3J44zptoW0YM4eDSOpGtOIv/tqf7f0OjZ/76TibKK85wKWo+ue7Q0vm1b3WISChIS/K+4jMjLY+E/ILUTNdby2tJZjlw+AeRxP9HDmKpUQAAAABJRU5ErkJggg==
// @icon64      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABnlBMVEUAAAA0NTs0NDs0NDs0NTs1NTs0NTozMzlLS0s0NTs0NDszNTs2NjsAAAA0NTs0NTs0NTs0NTs0NTszNTszNTo0NTs0NTwyNjwwMD80NTs0NTs0NTs0NTs0NDs0NTs0NTo0Njs1NTozNTozNTszNjsxNTkzNTs0NTo0NTo0NTs0NDsyNjszNTzmXu////80NTs+N0X87P3lXu7+9f6pULI5NkA1NTz//P/++f774/zrfvLnYu+6VMPzrvfulPTqd/LiXerCVsqfTadoQXBWPV5FOUz41Pv3yvrpb/HnZfDfXOnUWd3NWNWNSZV9RoR2RH5xQnhdPmVSO1k2NT386f363vz1v/nyqvfwoPbpcvHoavDoZ/DbW+TQWdnGV8+2U76xUrqUS5yER4xJOlFCOEn87/3xpvbuj/TshfP40Pr2xfn0uPjzsvfwmvXdXOa+VMeiTqqcTaWZTKGHSI+ARohtQnVjQGpOO1b98P352PvtivPsgvPpePHpg/DnfO/iaOrXW+DDVsyjT6yWS5/98P752fv0uvjrj/HlhezJWNI3l8R2AAAALXRSTlMAu5FYyidEBwP7wC0hAvXv66V/dG1gURcL592ujNi1meCEZ0wzENDOn5VJPzn5BnicAAAEYElEQVRYw73X51sTQRAG8IQEJPQiKM3e9d03JCSABAgkkd5Bkd5UpCioiL3X/9rbC3fZJAcrfvD3DR5m7nZmZ57DpXGq8NKlwlOuf3Oiuq6Mptqcwn+Iv1hLMhGPj8XXSJYXHffxZ8l49wCkwMKKn6VVx4o/XUB/dwC2TyNkTv4x4t1cXYDh/nrHm05ITSGWF/9teGUNV+eBmfZJIb1qnwHw1M/rfxdeUUq+HAR+BoXlW0cywwWXXm6tER4B0CFUm/IU4ZJCffVrOdZlnr5FpNkAsEKvtpAXOBaFtCEy/AD691mpS5DDHUh9LSLTIyASLsnVJKjnV0jrIktjHzDMAk2Cao7PQSmhagt4kuCNoxPkX+Xa8FPgl0OCll5gl95izQC7SUbwUTi4C0RXWa29CW52A40OCZo7gS9s0LbyJF8Ad4WDHiCwr3+Fm4yrbVDdBrq1jXDll4UHlTOoHgP9fhbqb9NKdoLm1tZm8xVWeFaXwMMRBISYVMJbt/uA3juyCvMTJZc1CSr5HIHG6V47PDgN02yj6ARi1K2381wG2vDOvsSdOPBQ3oUmFmj7OAxDuxV/H5ZOEewzyhgu0lwl+iMAPkxZ8SnNYhoYYaW2DaEVOVN35Pk3t5ESFK3AIq9oEhRX+DgO4IGQ3sDWZnTyHQJrLNJf5z3gfnII26DUQIh78gwndQnO8pm1FO4gZdr4eUr24Ux24TxVN5Uxa+ACsCmke0h5LQwz+BQuzRjJvKs0nMuzlzP9AWDKGiDLW2s5jmfMQwWZGB2O05dnN3LcrJjhFVJahdQui1CVXrHQsyiAIdYcfEzcYMx63gZst+2tsMx6Jb7IN7EEKRDjdWWnPBRSB0zK1ZwClliXVvEXSBoMhRu8XrfbWyOb0GNO8QxsU8L0APhMr3JrSsPzODA0wQNLwGRGE63pDAIDPJdKUMhx2KLzC12Gz4NR9AlpW70ESS3AE5ap62MUTt6bfzwL2/eMBOr6cGLWsCftGts1mFMTnOdXOLmb0YMte70B82xQZ7cbTh7LXdCm3ALjF9ZwdNGrJtiFk1ZrDlIpzJuY3Grl6RvQSdBo2CzS9PUcTNcQK9SPkmE4aZG3PkPbZHKYYvQok8gxOGkUD2adWtM8i4CfvtQ0nfaF+uFgK7iOLLfNGgaWRiaUd3Af0oY2ZOuVJ5C+KH2oZmIQGqk3eA1TlKUuWx1D8b3R0djY+Kp/B0dqD/bCNMca5esyp4SWJqiyu/AeSd3pezU/N89wKdfNRRzl3gdgINKPQJOfF10O3IzgCDMfgYUEJxIhKjtNdUbzBoDx6HMlDF/xOH/tlWtqMLBHXjvhunzCdYgKDuFwg8Mhlnk0X7oxHOL37ssJ+spPab5T6Y8iS39kObZGsiRH/89fAXcyTr30fCxEQ+01z2mX3kWuDlixc4vLowkZ6/PmVFnP1il2c21osSvSNDS6H5bBNXWVt5Sa612uo6W0oN5T5Dq+W/VnCtzlFZ7cYtd/8Adr2MpDGqTx0AAAAABJRU5ErkJggg==
// @homepage    https://dnsev-h.github.io/x/
// @supportURL  https://github.com/dnsev-h/x/issues
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-full-title.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-full-title.user.js
// ==/UserScript==
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";


function addLink(label, url, order) {
	const n = document.getElementById("nb");
	if (n === null) { return null; }

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

const overrideAttributeName = "data-x-override-page-type";


function setOverride(value) {
	if (value) {
		document.documentElement.setAttribute(overrideAttributeName, value);
	} else {
		document.documentElement.removeAttribute(overrideAttributeName);
	}
}

function getOverride() {
	const value = document.documentElement.getAttribute(overrideAttributeName);
	return value ? value : null;
}

function get(doc, location) {
	const overrideType = getOverride();
	if (overrideType !== null) {
		return overrideType;
	}

	if (doc.querySelector("#searchbox") !== null) {
		return "search";
	}
	if (doc.querySelector("input[name=favcat]") !== null) {
		return "favorites";
	}
	if (doc.querySelector("#i1>h1") !== null) {
		return "image";
	}
	if (doc.querySelector(".gm h1#gn") !== null) {
		return "gallery";
	}
	if (doc.querySelector("#profile_outer") !== null) {
		return "settings";
	}
	if (doc.querySelector("#torrentinfo") !== null) {
		return "torrentInfo";
	}

	let n = doc.querySelector("body>.d>p");
	if (
		(n !== null && /gallery\s+has\s+been\s+removed/i.test(n.textContent)) ||
		doc.querySelector(".eze_dgallery_table") !== null) { // eze resurrection
		return "deletedGallery";
	}

	n = doc.querySelector("img[src]");
	if (n !== null && location !== null) {
		const p = location.pathname;
		if (
			n.getAttribute("src") === location.href &&
			p.substr(0, 3) !== "/t/" &&
			p.substr(0, 5) !== "/img/") {
			return "panda";
		}
	}

	// Unknown
	return null;
}


module.exports = {
	get,
	getOverride,
	setOverride
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
	if (n === null) { return null; }

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
		section.className = "x-settings-section-container";
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

},{"../style":13,"../url-fragment":14,"./navigation-bar":1,"./style/settings.css":5}],4:[function(require,module,exports){
"use strict";

function isDark() {
	return (window.location.hostname.indexOf("exhentai") >= 0);
}

function setDocumentDarkFlag() {
	document.documentElement.classList.toggle("x-is-dark", isDark());
}

function getArrowIconUrl() {
	return (isDark() ? "https://exhentai.org/img/mr.gif" : "https://ehgt.org/g/mr.gif");
}


module.exports = {
	isDark,
	setDocumentDarkFlag,
	getArrowIconUrl
};

},{}],5:[function(require,module,exports){
module.exports = ".x-settings-container{display:flex;flex-direction:column;margin-top:-1em}.x-settings-container.x-settings-container-hidden{display:none}.x-settings-hidden{display:none!important}.x-settings-option select{margin-right:.5em}.x-settings-section-container{display:block;width:100%;margin-top:1em}.x-settings-section-content{margin:8px auto 10px 10px;clear:both}.x-settings-section-header{font-size:1.25em;line-height:1.5em;margin:.25em 0}.x-settings-section{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;align-content:flex-start;flex-wrap:nowrap;width:100%;padding:.5em 0}.x-settings-section+.x-settings-section{border-top:1px solid rgba(0,0,0,.25)}:root:not(.x-is-dark) .x-settings-section+.x-settings-section{border-top-color:rgba(92,13,18,.25)}.x-settings-section-left{flex:1 1 auto;padding-right:.5em}.x-settings-section-right{flex:0 0 auto;min-width:30%;text-align:right}.x-settings-section-title{font-weight:700;line-height:1.5em}.x-settings-section-description{line-height:1.35em}input.x-settings-section-input[type=number],input.x-settings-section-input[type=text]{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e}:root:not(.x-is-dark) input.x-settings-section-input[type=number],:root:not(.x-is-dark) input.x-settings-section-input[type=text]{background-color:#e3e0d1}input.x-settings-section-input[type=text]{width:20em}input.x-settings-section-input[type=number]{width:5em;-moz-appearance:textfield}input.x-settings-section-input[type=number]::-webkit-inner-spin-button,input.x-settings-section-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.x-settings-input-table-container .lc{display:inline-block;margin-right:-6px}.x-settings-container code{font-family:'Courier New',Courier,monospace;background-color:#43464e;font-weight:700}:root:not(.x-is-dark) .x-settings-container code{background-color:#e3e0d1}.x-settings-light-text{font-weight:400;opacity:.75}.x-settings-input-table-container{display:inline-block;text-align:left}.x-settings-input-table{display:table}.x-settings-input-row{display:table-row}.x-settings-input-row.x-settings-input-header-row{font-size:.8em;line-height:1em;opacity:.75}.x-settings-input-cell{display:table-cell}.x-settings-input-cell+.x-settings-input-cell{padding-left:.25em}.x-settings-input-label{cursor:pointer;margin:0 0 0 1em}.x-settings-input-checkbox-prefix{vertical-align:middle;display:inline-block;padding-right:.5em}";
},{}],6:[function(require,module,exports){
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

	async function bindInput(node, settingName, options, valueName) {
		const c = await get();

		if (typeof(valueName) === "undefined") {
			valueName = getDefaultValueName(node);
		}

		const updateInput = () => {
			const {value, valid} = convertToType(c[settingName], options, true);
			if (valid) { node[valueName] = value; }
		};

		updateInput();

		node.addEventListener("change", () => {
			const {value, valid} = convertToType(node[valueName], options, false);
			if (valid) {
				c[settingName] = value;
				save();
			}

			updateInput();
		}, false);
	}


	return {
		get,
		save,
		bindInput
	};
}


const defaultTypeConvertOptions = {};


function getDefaultValueName(node) {
	switch (node.tagName) {
		case "INPUT":
			if (node.type === "checkbox") { return "checked"; }
			break;
	}

	return "value";
}

function convertToType(value, options, toInput) {
	if (typeof(options) === "string") {
		return convertToTypeNormalized(value, options, defaultTypeConvertOptions, toInput);
	} if (options !== null && typeof(options) === "object" && typeof(options.type) === "string") {
		return convertToTypeNormalized(value, options.type, options, toInput);
	} else {
		return { value, valid: true };
	}
}

function convertToTypeNormalized(value, typeName, options, toInput) {
	let valid = true;

	// Convert
	switch (typeName) {
		case "boolean":
			value = !!value;
			break;
		case "integer":
		case "number":
			value = (typeName === "number" ? parseFloat(`${value}`) : parseInt(`${value}`, 10));
			if (!Number.isFinite(value)) {
				value = 0;
				valid = false;
			}
			break;
		case "string":
			value = `${value}`;
			break;
	}

	// Transform
	if (!toInput && typeof(options.inputToValue) === "function") {
		value = options.inputToValue(value);
	}

	// Limits
	switch (typeName) {
		case "integer":
		case "number":
			if (typeof(options.min) === "number" && value < options.min) { value = options.min; }
			if (typeof(options.max) === "number" && value > options.max) { value = options.max; }
			break;
		case "string":
			if (typeof(options.maxLength) === "number" && value.length > options.maxLength) {
				value = value.substr(0, options.maxLength);
			}
			break;
	}

	// Transform
	if (toInput && typeof(options.valueToInput) === "function") {
		value = options.valueToInput(value);
	}

	return { value, valid };
}


module.exports = {
	create
};

},{"./gm":11}],7:[function(require,module,exports){
"use strict";

const configKey = "x-full-title-config";
const configDefault = {
	displayMode: "hover" // "none", "hover", "always"
};

module.exports = require("../config").create(configKey, configDefault);

},{"../config":6}],8:[function(require,module,exports){
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
	bindInput(container, "displayMode", "string");
}

function bindInput(container, settingName, options) {
	const n = container.querySelector(`[data-x-settings-for=${settingName}]`);
	if (n === null) { return null; }

	config.bindInput(container.querySelector(`[data-x-settings-for=${settingName}]`), settingName, options);
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

},{"../api/page-type":2,"../api/settings":3,"../ready":12,"../style":13,"./config":7,"./settings.html":9,"./style.css":10}],9:[function(require,module,exports){
module.exports = "<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Display mode</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<select data-x-settings-for=\"displayMode\">\r\n\t\t\t<option value=\"none\">None</option>\r\n\t\t\t<option value=\"hover\">Hover</option>\r\n\t\t\t<option value=\"always\">Always</option>\r\n\t\t</select>\r\n\t</div>\r\n</div>\r\n";
},{}],10:[function(require,module,exports){
module.exports = ".itg>.gl1t>a:first-of-type{overflow:hidden;min-height:32px;max-height:32px;margin:6px 4px 0;position:relative;display:block}.itg>.gl1t>a:first-of-type>.glname{overflow:visible;min-height:auto;max-height:none;margin:0}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t>a:first-of-type,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover>a:first-of-type{overflow:visible;z-index:10}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover>a:first-of-type>.glname{padding-bottom:.25em}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+1)>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+1)>a:first-of-type>.glname{background-color:rgba(242,240,228,.75)}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+2)>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+2)>a:first-of-type>.glname{background-color:rgba(237,235,223,.75)}:root.x-is-dark[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+1)>a:first-of-type>.glname,:root.x-is-dark[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+1)>a:first-of-type>.glname{background-color:rgba(54,57,64,.75)}:root.x-is-dark[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+2)>a:first-of-type>.glname,:root.x-is-dark[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+2)>a:first-of-type>.glname{background-color:rgba(60,65,75,.75)}";
},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
"use strict";

let apiStyle = null;


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
	if (apiStyle === null) { apiStyle = require("./api/style"); }
	apiStyle.setDocumentDarkFlag();

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

},{"./api/style":4}],14:[function(require,module,exports){
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

},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvc2V0dGluZ3MuY3NzIiwic3JjL2NvbmZpZy5qcyIsInNyYy9mdWxsLXRpdGxlL2NvbmZpZy5qcyIsInNyYy9mdWxsLXRpdGxlL21haW4uanMiLCJzcmMvZnVsbC10aXRsZS9zZXR0aW5ncy5odG1sIiwic3JjL2Z1bGwtdGl0bGUvc3R5bGUuY3NzIiwic3JjL2dtLmpzIiwic3JjL3JlYWR5LmpzIiwic3JjL3N0eWxlLmpzIiwic3JjL3VybC1mcmFnbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExpbmsobGFiZWwsIHVybCwgb3JkZXIpIHtcclxuXHRjb25zdCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYlwiKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRhLmhyZWYgPSB1cmw7XHJcblx0YS50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG5cdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRkaXYuc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdH1cclxuXHRkaXYuYXBwZW5kQ2hpbGQoYSk7XHJcblx0bi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHRyZXR1cm4gZGl2O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YWRkTGlua1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG92ZXJyaWRlQXR0cmlidXRlTmFtZSA9IFwiZGF0YS14LW92ZXJyaWRlLXBhZ2UtdHlwZVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldE92ZXJyaWRlKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZSgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHRyZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChkb2MsIGxvY2F0aW9uKSB7XHJcblx0Y29uc3Qgb3ZlcnJpZGVUeXBlID0gZ2V0T3ZlcnJpZGUoKTtcclxuXHRpZiAob3ZlcnJpZGVUeXBlICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gb3ZlcnJpZGVUeXBlO1xyXG5cdH1cclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9ZmF2Y2F0XVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZmF2b3JpdGVzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiLmdtIGgxI2duXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5XCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX291dGVyXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZXR0aW5nc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjdG9ycmVudGluZm9cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInRvcnJlbnRJbmZvXCI7XHJcblx0fVxyXG5cclxuXHRsZXQgbiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keT4uZD5wXCIpO1xyXG5cdGlmIChcclxuXHRcdChuICE9PSBudWxsICYmIC9nYWxsZXJ5XFxzK2hhc1xccytiZWVuXFxzK3JlbW92ZWQvaS50ZXN0KG4udGV4dENvbnRlbnQpKSB8fFxyXG5cdFx0ZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZXplX2RnYWxsZXJ5X3RhYmxlXCIpICE9PSBudWxsKSB7IC8vIGV6ZSByZXN1cnJlY3Rpb25cclxuXHRcdHJldHVybiBcImRlbGV0ZWRHYWxsZXJ5XCI7XHJcblx0fVxyXG5cclxuXHRuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRpZiAobiAhPT0gbnVsbCAmJiBsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgcCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRuLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PT0gbG9jYXRpb24uaHJlZiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCAzKSAhPT0gXCIvdC9cIiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCA1KSAhPT0gXCIvaW1nL1wiKSB7XHJcblx0XHRcdHJldHVybiBcInBhbmRhXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBVbmtub3duXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQsXHJcblx0Z2V0T3ZlcnJpZGUsXHJcblx0c2V0T3ZlcnJpZGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcbmNvbnN0IHVybEZyYWdtZW50ID0gcmVxdWlyZShcIi4uL3VybC1mcmFnbWVudFwiKTtcclxuXHJcblxyXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lckNsYXNzID0gXCJ4LXNldHRpbmdzLWNvbnRhaW5lclwiO1xyXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzID0gXCJ4LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW5cIjtcclxuY29uc3QgZGVmYXVsdFNldHRpbmdzSGlkZGVuQ2xhc3MgPSBcIngtc2V0dGluZ3MtaGlkZGVuXCI7XHJcblxyXG5sZXQgc2V0dGluZ3NDb250YWluZXJPdXRlciA9IG51bGw7XHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTGluaygpIHtcclxuXHRjb25zdCBpZCA9IFwieC1uYXYtc2V0dGluZ3MtbGlua1wiO1xyXG5cclxuXHRsZXQgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRpZiAobiAhPT0gbnVsbCkgeyByZXR1cm4gbjsgfVxyXG5cclxuXHRjb25zdCBuYXZCYXIgPSByZXF1aXJlKFwiLi9uYXZpZ2F0aW9uLWJhclwiKTtcclxuXHRuID0gbmF2QmFyLmFkZExpbmsoXCJ4XCIsIGAvdWNvbmZpZy5waHAke3VybEZyYWdtZW50LmNyZWF0ZShcInNldHRpbmdzXCIpfWAsIDEpO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdG4uaWQgPSBpZDtcclxuXHRyZXR1cm4gbjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRzZXR0aW5nc0NvbnRhaW5lck91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRlci5zdHVmZmJveFwiKTtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXJPdXRlciA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0c2V0dGluZ3NDb250YWluZXIgPSBzZXR0aW5nc0NvbnRhaW5lck91dGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke3NldHRpbmdzQ29udGFpbmVyQ2xhc3N9YCk7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5jbGFzc05hbWUgPSBgJHtzZXR0aW5nc0NvbnRhaW5lckNsYXNzfSAke3NldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3N9YDtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyT3V0ZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaWQgPSBcIngtc2V0dGluZ3NcIjtcclxuXHRpZiAoIXN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7XHJcblx0XHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS9zZXR0aW5ncy5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxuXHJcblx0dXJsRnJhZ21lbnQuYWRkUm91dGUoL15cXC9zZXR0aW5ncyhcXC9bXFx3XFxXXSopPyQvLCBvblNldHRpbmdzUGFnZUNoYW5nZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblNldHRpbmdzUGFnZUNoYW5nZWQobWF0Y2gpIHtcclxuXHRzZXRTZXR0aW5nc1Zpc2libGUobWF0Y2ggIT09IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTZXR0aW5nc1Zpc2libGUodmlzaWJsZSkge1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lck91dGVyID09PSBudWxsIHx8IHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MpICE9PSB2aXNpYmxlKSB7XHJcblx0XHQvLyBObyBjaGFuZ2VcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcywgIXZpc2libGUpO1xyXG5cclxuXHRmb3IgKGNvbnN0IGNoaWxkIG9mIHNldHRpbmdzQ29udGFpbmVyT3V0ZXIuY2hpbGRyZW4pIHtcclxuXHRcdGlmIChjaGlsZCA9PT0gc2V0dGluZ3NDb250YWluZXIpIHsgY29udGludWU7IH1cclxuXHRcdGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoZGVmYXVsdFNldHRpbmdzSGlkZGVuQ2xhc3MsIHZpc2libGUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2VjdGlvbihoZWFkZXIsIGlkLCBvcmRlcikge1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBmdWxsSWQgPSBgeC1zZXR0aW5ncy1zZWN0aW9uLSR7aWR9YDtcclxuXHJcblx0bGV0IHNlY3Rpb24gPSBzZXR0aW5nc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHtmdWxsSWR9YCk7XHJcblx0aWYgKHNlY3Rpb24gPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2VjdGlvbi5pZCA9IGZ1bGxJZDtcclxuXHRcdHNlY3Rpb24uY2xhc3NOYW1lID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24tY29udGFpbmVyXCI7XHJcblx0XHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRzZWN0aW9uLnN0eWxlLm9yZGVyID0gYCR7b3JkZXJ9YDtcclxuXHRcdH1cclxuXHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuXHR9XHJcblxyXG5cdGxldCBjbHMgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJcIjtcclxuXHRsZXQgc2VjdGlvbkhlYWRlciA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihgLiR7Y2xzfWApO1xyXG5cdGlmIChzZWN0aW9uSGVhZGVyID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG5cdFx0c2VjdGlvbkhlYWRlci5jbGFzc05hbWUgPSBjbHM7XHJcblx0XHRzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyO1xyXG5cdFx0Y29uc3QgcmVsYXRpdmUgPSBzZWN0aW9uLmZpcnN0Q2hpbGQ7XHJcblx0XHRpZiAocmVsYXRpdmUgIT09IG51bGwpIHtcclxuXHRcdFx0c2VjdGlvbi5pbnNlcnRCZWZvcmUocmVsYXRpdmUsIHNlY3Rpb25IZWFkZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNscyA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRlbnRcIjtcclxuXHRsZXQgc2VjdGlvbkNvbnRlbnQgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nsc31gKTtcclxuXHRpZiAoc2VjdGlvbkNvbnRlbnQgPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNlY3Rpb25Db250ZW50LmNsYXNzTmFtZSA9IGNscztcclxuXHRcdHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbnRlbnQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlY3Rpb25Db250ZW50O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YWRkTGluayxcclxuXHRpbml0aWFsaXplLFxyXG5cdGFkZFNlY3Rpb25cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpc0RhcmsoKSB7XHJcblx0cmV0dXJuICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb2N1bWVudERhcmtGbGFnKCkge1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1pcy1kYXJrXCIsIGlzRGFyaygpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXJyb3dJY29uVXJsKCkge1xyXG5cdHJldHVybiAoaXNEYXJrKCkgPyBcImh0dHBzOi8vZXhoZW50YWkub3JnL2ltZy9tci5naWZcIiA6IFwiaHR0cHM6Ly9laGd0Lm9yZy9nL21yLmdpZlwiKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGlzRGFyayxcclxuXHRzZXREb2N1bWVudERhcmtGbGFnLFxyXG5cdGdldEFycm93SWNvblVybFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtc2V0dGluZ3MtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLXRvcDotMWVtfS54LXNldHRpbmdzLWNvbnRhaW5lci54LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW57ZGlzcGxheTpub25lfS54LXNldHRpbmdzLWhpZGRlbntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS54LXNldHRpbmdzLW9wdGlvbiBzZWxlY3R7bWFyZ2luLXJpZ2h0Oi41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21hcmdpbi10b3A6MWVtfS54LXNldHRpbmdzLXNlY3Rpb24tY29udGVudHttYXJnaW46OHB4IGF1dG8gMTBweCAxMHB4O2NsZWFyOmJvdGh9Lngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJ7Zm9udC1zaXplOjEuMjVlbTtsaW5lLWhlaWdodDoxLjVlbTttYXJnaW46LjI1ZW0gMH0ueC1zZXR0aW5ncy1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IHdyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4LXdyYXA6bm93cmFwO3dpZHRoOjEwMCU7cGFkZGluZzouNWVtIDB9Lngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjI1KX06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3AtY29sb3I6cmdiYSg5MiwxMywxOCwuMjUpfS54LXNldHRpbmdzLXNlY3Rpb24tbGVmdHtmbGV4OjEgMSBhdXRvO3BhZGRpbmctcmlnaHQ6LjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0e2ZsZXg6MCAwIGF1dG87bWluLXdpZHRoOjMwJTt0ZXh0LWFsaWduOnJpZ2h0fS54LXNldHRpbmdzLXNlY3Rpb24tdGl0bGV7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb257bGluZS1oZWlnaHQ6MS4zNWVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0saW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO21hcmdpbjowO3BhZGRpbmc6LjI1ZW0gLjVlbTtsaW5lLWhlaWdodDoxLjM3NWVtO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZX06cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXSw6cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde3dpZHRoOjIwZW19aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXXt3aWR0aDo1ZW07LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZH1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjB9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyIC5sY3tkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6LTZweH0ueC1zZXR0aW5ncy1jb250YWluZXIgY29kZXtmb250LWZhbWlseTonQ291cmllciBOZXcnLENvdXJpZXIsbW9ub3NwYWNlO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtmb250LXdlaWdodDo3MDB9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXNldHRpbmdzLWNvbnRhaW5lciBjb2Rle2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX0ueC1zZXR0aW5ncy1saWdodC10ZXh0e2ZvbnQtd2VpZ2h0OjQwMDtvcGFjaXR5Oi43NX0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpsZWZ0fS54LXNldHRpbmdzLWlucHV0LXRhYmxle2Rpc3BsYXk6dGFibGV9Lngtc2V0dGluZ3MtaW5wdXQtcm93e2Rpc3BsYXk6dGFibGUtcm93fS54LXNldHRpbmdzLWlucHV0LXJvdy54LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3d7Zm9udC1zaXplOi44ZW07bGluZS1oZWlnaHQ6MWVtO29wYWNpdHk6Ljc1fS54LXNldHRpbmdzLWlucHV0LWNlbGx7ZGlzcGxheTp0YWJsZS1jZWxsfS54LXNldHRpbmdzLWlucHV0LWNlbGwrLngtc2V0dGluZ3MtaW5wdXQtY2VsbHtwYWRkaW5nLWxlZnQ6LjI1ZW19Lngtc2V0dGluZ3MtaW5wdXQtbGFiZWx7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjAgMCAwIDFlbX0ueC1zZXR0aW5ncy1pbnB1dC1jaGVja2JveC1wcmVmaXh7dmVydGljYWwtYWxpZ246bWlkZGxlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctcmlnaHQ6LjVlbX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZ0tleSwgY29uZmlnRGVmYXVsdCkge1xyXG5cdGxldCBjb25maWcgPSBudWxsO1xyXG5cdGxldCBjb25maWdHZXRQcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWcoKSB7XHJcblx0XHRjb25zdCBjb25maWdTdHJpbmcgPSBhd2FpdCBnbS5nZXRWYWx1ZShjb25maWdLZXksIG51bGwpO1xyXG5cdFx0aWYgKHR5cGVvZihjb25maWdTdHJpbmcpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgYyA9IEpTT04ucGFyc2UoY29uZmlnU3RyaW5nKTtcclxuXHRcdFx0XHRpZiAoYyAhPT0gbnVsbCAmJiB0eXBlb2YoYykgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoYykpIHtcclxuXHRcdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWdEZWZhdWx0LCBjKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRGVmYXVsdCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXQoKSB7XHJcblx0XHRpZiAoY29uZmlnICE9PSBudWxsKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZmlnKTsgfVxyXG5cclxuXHRcdGlmIChjb25maWdHZXRQcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdGNvbmZpZ0dldFByb21pc2UgPSBsb2FkQ29uZmlnKCkudGhlbigodikgPT4gY29uZmlnID0gdik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbmZpZ0dldFByb21pc2U7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBzYXZlKCkge1xyXG5cdFx0aWYgKGNvbmZpZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRhd2FpdCBnbS5zZXRWYWx1ZShjb25maWdLZXksIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgXCJcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gYmluZElucHV0KG5vZGUsIHNldHRpbmdOYW1lLCBvcHRpb25zLCB2YWx1ZU5hbWUpIHtcclxuXHRcdGNvbnN0IGMgPSBhd2FpdCBnZXQoKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKHZhbHVlTmFtZSkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0dmFsdWVOYW1lID0gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKGNbc2V0dGluZ05hbWVdLCBvcHRpb25zLCB0cnVlKTtcclxuXHRcdFx0aWYgKHZhbGlkKSB7IG5vZGVbdmFsdWVOYW1lXSA9IHZhbHVlOyB9XHJcblx0XHR9O1xyXG5cclxuXHRcdHVwZGF0ZUlucHV0KCk7XHJcblxyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKG5vZGVbdmFsdWVOYW1lXSwgb3B0aW9ucywgZmFsc2UpO1xyXG5cdFx0XHRpZiAodmFsaWQpIHtcclxuXHRcdFx0XHRjW3NldHRpbmdOYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRcdHNhdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dXBkYXRlSW5wdXQoKTtcclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2F2ZSxcclxuXHRcdGJpbmRJbnB1dFxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0VHlwZUNvbnZlcnRPcHRpb25zID0ge307XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKSB7XHJcblx0c3dpdGNoIChub2RlLnRhZ05hbWUpIHtcclxuXHRcdGNhc2UgXCJJTlBVVFwiOlxyXG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBcImNoZWNrYm94XCIpIHsgcmV0dXJuIFwiY2hlY2tlZFwiOyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFwidmFsdWVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVHlwZSh2YWx1ZSwgb3B0aW9ucywgdG9JbnB1dCkge1xyXG5cdGlmICh0eXBlb2Yob3B0aW9ucykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucywgZGVmYXVsdFR5cGVDb252ZXJ0T3B0aW9ucywgdG9JbnB1dCk7XHJcblx0fSBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiB0eXBlb2Yob3B0aW9ucykgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mKG9wdGlvbnMudHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucy50eXBlLCBvcHRpb25zLCB0b0lucHV0KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHsgdmFsdWUsIHZhbGlkOiB0cnVlIH07XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgdHlwZU5hbWUsIG9wdGlvbnMsIHRvSW5wdXQpIHtcclxuXHRsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuXHQvLyBDb252ZXJ0XHJcblx0c3dpdGNoICh0eXBlTmFtZSkge1xyXG5cdFx0Y2FzZSBcImJvb2xlYW5cIjpcclxuXHRcdFx0dmFsdWUgPSAhIXZhbHVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJpbnRlZ2VyXCI6XHJcblx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdHZhbHVlID0gKHR5cGVOYW1lID09PSBcIm51bWJlclwiID8gcGFyc2VGbG9hdChgJHt2YWx1ZX1gKSA6IHBhcnNlSW50KGAke3ZhbHVlfWAsIDEwKSk7XHJcblx0XHRcdGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xyXG5cdFx0XHRcdHZhbHVlID0gMDtcclxuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Ly8gVHJhbnNmb3JtXHJcblx0aWYgKCF0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLmlucHV0VG9WYWx1ZSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLmlucHV0VG9WYWx1ZSh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyBMaW1pdHNcclxuXHRzd2l0Y2ggKHR5cGVOYW1lKSB7XHJcblx0XHRjYXNlIFwiaW50ZWdlclwiOlxyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWluKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA8IG9wdGlvbnMubWluKSB7IHZhbHVlID0gb3B0aW9ucy5taW47IH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1heCkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPiBvcHRpb25zLm1heCkgeyB2YWx1ZSA9IG9wdGlvbnMubWF4OyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWF4TGVuZ3RoKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZS5sZW5ndGggPiBvcHRpb25zLm1heExlbmd0aCkge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIG9wdGlvbnMubWF4TGVuZ3RoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIFRyYW5zZm9ybVxyXG5cdGlmICh0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLnZhbHVlVG9JbnB1dCkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLnZhbHVlVG9JbnB1dCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyB2YWx1ZSwgdmFsaWQgfTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNyZWF0ZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ0tleSA9IFwieC1mdWxsLXRpdGxlLWNvbmZpZ1wiO1xyXG5jb25zdCBjb25maWdEZWZhdWx0ID0ge1xyXG5cdGRpc3BsYXlNb2RlOiBcImhvdmVyXCIgLy8gXCJub25lXCIsIFwiaG92ZXJcIiwgXCJhbHdheXNcIlxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpLmNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHJlYWR5ID0gcmVxdWlyZShcIi4uL3JlYWR5XCIpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCBzZXR0aW5ncyA9IHJlcXVpcmUoXCIuLi9hcGkvc2V0dGluZ3NcIik7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVNldHRpbmdzKCkge1xyXG5cdHNldHRpbmdzLmluaXRpYWxpemUoKTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbiA9IHNldHRpbmdzLmFkZFNlY3Rpb24oXCJGdWxsIFRpdGxlXCIsIFwiZnVsbC10aXRsZVwiLCAwKTtcclxuXHRpZiAoc2VjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0YXdhaXQgc2V0dXBTZXR0aW5ncyhzZWN0aW9uKTtcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldHVwU2V0dGluZ3MoY29udGFpbmVyKSB7XHJcblx0Y29udGFpbmVyLmlubmVySFRNTCA9IHJlcXVpcmUoXCIuL3NldHRpbmdzLmh0bWxcIik7XHJcblx0YmluZElucHV0KGNvbnRhaW5lciwgXCJkaXNwbGF5TW9kZVwiLCBcInN0cmluZ1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZElucHV0KGNvbnRhaW5lciwgc2V0dGluZ05hbWUsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtc2V0dGluZ3MtZm9yPSR7c2V0dGluZ05hbWV9XWApO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbmZpZy5iaW5kSW5wdXQoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtc2V0dGluZ3MtZm9yPSR7c2V0dGluZ05hbWV9XWApLCBzZXR0aW5nTmFtZSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVNb2RlKCkge1xyXG5cdGNvbnN0IGMgPSBhd2FpdCBjb25maWcuZ2V0KCk7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGVcIiwgYy5kaXNwbGF5TW9kZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdHNldHRpbmdzLmFkZExpbmsoKTtcclxuXHJcblx0Y29uc3QgY3VycmVudFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGRvY3VtZW50LCBsb2NhdGlvbik7XHJcblx0aWYgKGN1cnJlbnRQYWdlVHlwZSA9PT0gXCJzZXR0aW5nc1wiKSB7XHJcblx0XHRpbml0aWFsaXplU2V0dGluZ3MoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlkID0gXCJ4LWZ1bGwtdGl0bGVcIjtcclxuXHRpZiAoIXN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7XHJcblx0XHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZU1vZGUoKTtcclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPkRpc3BsYXkgbW9kZTwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodFxcXCI+XFxyXFxuXFx0XFx0PHNlbGVjdCBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJkaXNwbGF5TW9kZVxcXCI+XFxyXFxuXFx0XFx0XFx0PG9wdGlvbiB2YWx1ZT1cXFwibm9uZVxcXCI+Tm9uZTwvb3B0aW9uPlxcclxcblxcdFxcdFxcdDxvcHRpb24gdmFsdWU9XFxcImhvdmVyXFxcIj5Ib3Zlcjwvb3B0aW9uPlxcclxcblxcdFxcdFxcdDxvcHRpb24gdmFsdWU9XFxcImFsd2F5c1xcXCI+QWx3YXlzPC9vcHRpb24+XFxyXFxuXFx0XFx0PC9zZWxlY3Q+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5pdGc+LmdsMXQ+YTpmaXJzdC1vZi10eXBle292ZXJmbG93OmhpZGRlbjttaW4taGVpZ2h0OjMycHg7bWF4LWhlaWdodDozMnB4O21hcmdpbjo2cHggNHB4IDA7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30uaXRnPi5nbDF0PmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1le292ZXJmbG93OnZpc2libGU7bWluLWhlaWdodDphdXRvO21heC1oZWlnaHQ6bm9uZTttYXJnaW46MH06cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdD5hOmZpcnN0LW9mLXR5cGUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3Zlcj5hOmZpcnN0LW9mLXR5cGV7b3ZlcmZsb3c6dmlzaWJsZTt6LWluZGV4OjEwfTpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9YWx3YXlzXSAuaXRnPi5nbDF0PmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWV7cGFkZGluZy1ib3R0b206LjI1ZW19OnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzEpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI6bnRoLWNoaWxkKDJuKzEpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1le2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjQwLDIyOCwuNzUpfTpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9YWx3YXlzXSAuaXRnPi5nbDF0Om50aC1jaGlsZCgybisyKT5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyOm50aC1jaGlsZCgybisyKT5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjM3LDIzNSwyMjMsLjc1KX06cm9vdC54LWlzLWRhcmtbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzEpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290LngtaXMtZGFya1tkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyOm50aC1jaGlsZCgybisxKT5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNTQsNTcsNjQsLjc1KX06cm9vdC54LWlzLWRhcmtbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzIpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290LngtaXMtZGFya1tkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyOm50aC1jaGlsZCgybisyKT5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNjAsNjUsNzUsLjc1KX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvUHJvbWlzZShmbiwgc2VsZikge1xyXG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNvbHZlKGZuLmFwcGx5KHNlbGYsIGFyZ3MpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJlamVjdChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IGdtID0gKChvYmplY3RzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0aWYgKG9iai5HTSAhPT0gbnVsbCAmJiB0eXBlb2Yob2JqLkdNKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHJldHVybiBvYmouR007XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHRjb25zdCBtYXBwaW5nID0gW1xyXG5cdFx0WyBcImdldFZhbHVlXCIsIFwiR01fZ2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcInNldFZhbHVlXCIsIFwiR01fc2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcImRlbGV0ZVZhbHVlXCIsIFwiR01fZGVsZXRlVmFsdWVcIiBdLFxyXG5cdFx0WyBcInhtbEh0dHBSZXF1ZXN0XCIsIFwiR01feG1saHR0cFJlcXVlc3RcIiBdXHJcblx0XTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwcGluZykge1xyXG5cdFx0bGV0IHByb21pc2UgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRjb25zdCBmbiA9IG9ialt2YWx1ZV07XHJcblx0XHRcdGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRwcm9taXNlID0gdG9Qcm9taXNlKGZuLCBvYmopO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgTm90IHN1cHBvcnRlZCAoJHtrZXl9KWApKSk7XHJcblx0XHR9XHJcblx0XHRyZXN1bHRba2V5XSA9IHByb21pc2U7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn0pLmNhbGwodGhpcywgW3RoaXMsIHdpbmRvd10pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ207XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGlzUmVhZHlWYWx1ZSA9IGZhbHNlO1xyXG5sZXQgY2FsbGJhY2tzID0gbnVsbDtcclxubGV0IGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcbmNvbnN0IGNoZWNrSW50ZXJ2YWxSYXRlID0gMjUwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzSG9va2VkKCkge1xyXG5cdHJldHVybiBjYWxsYmFja3MgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvb2soKSB7XHJcblx0Y2FsbGJhY2tzID0gW107XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChjaGVja0lmUmVhZHksIGNoZWNrSW50ZXJ2YWxSYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5ob29rKCkge1xyXG5cdGNvbnN0IGNicyA9IGNhbGxiYWNrcztcclxuXHJcblx0Y2FsbGJhY2tzID0gbnVsbDtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbElkKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5cclxuXHRpbnZva2UoY2JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrcykge1xyXG5cdGZvciAobGV0IGNiIG9mIGNhbGxiYWNrcykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y2IoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlYWR5KCkge1xyXG5cdGlmIChpc1JlYWR5VmFsdWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdGlmIChpc0hvb2tlZCgpKSB7IHVuaG9vaygpOyB9XHJcblx0XHRpc1JlYWR5VmFsdWUgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlJlYWR5KCkge1xyXG5cdGlzUmVhZHkoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uUmVhZHkoY2FsbGJhY2spIHtcclxuXHRpZiAoaXNSZWFkeSgpKSB7XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCFpc0hvb2tlZCgpKSB7IGhvb2soKTsgfVxyXG5cclxuXHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvblJlYWR5OiBvblJlYWR5LFxyXG5cdGdldCBpc1JlYWR5KCkgeyByZXR1cm4gaXNSZWFkeSgpOyB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGFwaVN0eWxlID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJZChpZCkge1xyXG5cdHJldHVybiBgJHtpZH0tc3R5bGVzaGVldGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0SWQoaWQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzU3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiAhIWdldFN0eWxlc2hlZXQoaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNoZWV0KHNvdXJjZSwgaWQpIHtcclxuXHRpZiAoYXBpU3R5bGUgPT09IG51bGwpIHsgYXBpU3R5bGUgPSByZXF1aXJlKFwiLi9hcGkvc3R5bGVcIik7IH1cclxuXHRhcGlTdHlsZS5zZXREb2N1bWVudERhcmtGbGFnKCk7XHJcblxyXG5cdGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlLnRleHRDb250ZW50ID0gc291cmNlO1xyXG5cdGlmICh0eXBlb2YoaWQpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRzdHlsZS5pZCA9IGdldElkKGlkKTtcclxuXHR9XHJcblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblx0cmV0dXJuIHN0eWxlO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aGFzU3R5bGVzaGVldCxcclxuXHRnZXRTdHlsZXNoZWV0LFxyXG5cdGFkZFN0eWxlc2hlZXRcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3QgeFByZWZpeCA9IFwiIyF4XCI7XHJcbmNvbnN0IHNlcGFyYXRvciA9IFwiL1wiO1xyXG5jb25zdCByb3V0ZXMgPSBbXTtcclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhcihhZGRIaXN0b3J5KSB7XHJcblx0Y29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHRpZiAoYWRkSGlzdG9yeSkge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKHBhdGgpIHtcclxuXHRyZXR1cm4gcGF0aCA/IGAke3hQcmVmaXh9JHtzZXBhcmF0b3J9JHtwYXRofWAgOiB4UHJlZml4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRjb25zdCByb3V0ZSA9IHsgbWF0Y2gsIGNhbGxiYWNrIH07XHJcblx0cm91dGVzLnB1c2gocm91dGUpO1xyXG5cdGlmIChyb3V0ZXMubGVuZ3RoID09PSAxKSB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0fVxyXG5cdHRlc3RSb3V0ZXMoW3JvdXRlXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGZvciAobGV0IGkgPSAwLCBpaSA9IHJvdXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRjb25zdCByb3V0ZSA9IHJvdXRlc1tpXTtcclxuXHRcdGlmIChyb3V0ZS5tYXRjaCA9PT0gbWF0Y2ggJiYgcm91dGUuY2FsbGJhY2sgPT09IGNhbGxiYWNrKSB7XHJcblx0XHRcdHJvdXRlcy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdGlmIChyb3V0ZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFhGcmFnbWVudCgpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cdHJldHVybiAoXHJcblx0XHQhZnJhZ21lbnQgfHxcclxuXHRcdGZyYWdtZW50Lmxlbmd0aCA8IHhQcmVmaXgubGVuZ3RoIHx8XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoMCwgeFByZWZpeC5sZW5ndGgpICE9PSB4UHJlZml4IHx8XHJcblx0XHQoZnJhZ21lbnQubGVuZ3RoID4geFByZWZpeC5sZW5ndGggJiYgZnJhZ21lbnRbeFByZWZpeC5sZW5ndGhdICE9PSBzZXBhcmF0b3IpKSA/XHJcblx0XHRudWxsIDpcclxuXHRcdGZyYWdtZW50LnN1YnN0cih4UHJlZml4Lmxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlc3RSb3V0ZXMocm91dGVzKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSBnZXRYRnJhZ21lbnQoKTtcclxuXHRpZiAoZnJhZ21lbnQgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHJvdXRlLm1hdGNoLmV4ZWMoZnJhZ21lbnQpO1xyXG5cdFx0cm91dGUuY2FsbGJhY2sobWF0Y2gsIGZyYWdtZW50KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVXJsRnJhZ21lbnRDaGFuZ2VkKCkge1xyXG5cdHRlc3RSb3V0ZXMocm91dGVzKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNsZWFyOiBjbGVhcixcclxuXHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRhZGRSb3V0ZTogYWRkUm91dGUsXHJcblx0cmVtb3ZlUm91dGU6IHJlbW92ZVJvdXRlXHJcbn07XHJcbiJdfQ==
