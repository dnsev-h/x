// ==UserScript==
// @name        x/gallery-info-copy
// @version     1.0.3
// @author      dnsev-h
// @namespace   dnsev-h
// @description Adds buttons to quickly copy certain info about galleries
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
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-gallery-info-copy.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-gallery-info-copy.user.js
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

},{"../style":15,"../url-fragment":16,"./navigation-bar":1,"./style/settings.css":5}],4:[function(require,module,exports){
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
module.exports = ".x-settings-container{display:flex;flex-direction:column;margin-top:-1em}.x-settings-container.x-settings-container-hidden{display:none}.x-settings-hidden{display:none!important}.x-settings-option select{margin-right:.5em}.x-settings-section-container{display:block;width:100%;margin-top:1em}.x-settings-section-content{margin:8px auto 10px 10px;clear:both}.x-settings-section-header{font-size:1.25em;line-height:1.5em;margin:.25em 0}.x-settings-section{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;align-content:flex-start;flex-wrap:nowrap;width:100%;padding:.5em 0}.x-settings-section+.x-settings-section{border-top:1px solid rgba(0,0,0,.25)}:root:not(.x-is-dark) .x-settings-section+.x-settings-section{border-top-color:rgba(92,13,18,.25)}.x-settings-section-left{flex:1 1 auto;padding-right:.5em}.x-settings-section-right{flex:0 0 auto;min-width:30%;text-align:right}.x-settings-section-title{font-weight:700;line-height:1.5em}.x-settings-section-description{line-height:1.35em}.x-settings-section-description+.x-settings-section-description{margin-top:.25em}input.x-settings-section-input[type=number],input.x-settings-section-input[type=text]{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e;box-sizing:border-box}:root:not(.x-is-dark) input.x-settings-section-input[type=number],:root:not(.x-is-dark) input.x-settings-section-input[type=text]{background-color:#e3e0d1}input.x-settings-section-input[type=text]{width:20em}input.x-settings-section-input[type=number]{width:5em;-moz-appearance:textfield}input.x-settings-section-input[type=number]::-webkit-inner-spin-button,input.x-settings-section-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}textarea.x-settings-section-textarea{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e;resize:vertical;font-size:inherit;width:100%;min-height:1.875em;height:4.625em;box-sizing:border-box;font-family:\"Courier New\",Courier,monospace}:root:not(.x-is-dark) textarea.x-settings-section-textarea{background-color:#e3e0d1}.x-settings-input-table-container .lc{display:inline-block;margin-right:-6px}.x-settings-container code{font-family:'Courier New',Courier,monospace;background-color:#43464e;font-weight:700}:root:not(.x-is-dark) .x-settings-container code{background-color:#e3e0d1}.x-settings-light-text{font-weight:400;opacity:.75}.x-settings-input-table-container{display:inline-block;text-align:left}.x-settings-input-table{display:table}.x-settings-input-row{display:table-row}.x-settings-input-row.x-settings-input-header-row{font-size:.8em;line-height:1em;opacity:.75}.x-settings-input-cell{display:table-cell}.x-settings-input-cell+.x-settings-input-cell{padding-left:.25em}.x-settings-input-row:not(.x-settings-input-header-row)+.x-settings-input-row>.x-settings-input-cell{padding-top:.25em}.x-settings-input-cell.x-settings-input-cell-middle{vertical-align:middle}.x-settings-input-cell.x-settings-input-cell-fill{width:100%}.x-settings-input-cell.x-settings-input-cell-nowrap{white-space:nowrap}.x-settings-input-label{cursor:pointer;margin:0 0 0 1em}.x-settings-input-checkbox-prefix{vertical-align:middle;display:inline-block;padding-right:.5em}";
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

},{"./gm":13}],7:[function(require,module,exports){
"use strict";

let copyTextArea = null;


function createHiddenTextarea() {
	const n = document.createElement("textarea");
	n.style.setProperty("pointer-events", "none", "important");
	n.style.setProperty("opacity", "0", "important");
	n.style.setProperty("position", "fixed", "important");
	n.style.setProperty("left", "0", "important");
	n.style.setProperty("top", "0", "important");
	return n;
}

function toClipboard(text) {
	if (copyTextArea === null) {
		copyTextArea = createHiddenTextarea();
	}

	const parent = document.body;
	if (copyTextArea.parentNode !== parent) {
		parent.appendChild(copyTextArea);
	}

	copyTextArea.style.setProperty("display", "block", "important");
	try {
		copyTextArea.value = text;
		copyTextArea.focus();
		copyTextArea.select();
		document.execCommand("copy");
		copyTextArea.blur();
	}
	catch (e)
	{}
	copyTextArea.value = "";
	copyTextArea.style.setProperty("display", "none", "important");

	if (copyTextArea.parentNode !== null) {
		copyTextArea.parentNode.removeChild(copyTextArea);
	}
}


module.exports = {
	toClipboard
};

},{}],8:[function(require,module,exports){
"use strict";

const replaceCharDefault = "-";
const replaceMap = {
	"<": "\uFF1C",
	">": "\uFF1E",
	":": "\uFF1A",
	"\"": "\uFF02",
	"/": "\uFF0F",
	"\\": "\uFF0F",
	"|": "\uFF5C",
	"?": "\uFF1F",
	"*": "\uFF0A"
};


function replaceRestrictedCharacters(fileName, replaceWith) {
	return fileName.replace(/[<>:"\|\?\*\/\\\x00-\x1f]/g, (m) => {
		if (typeof(replaceWith) === "string") { return replaceWith; }
		return replaceMap.hasOwnProperty(m) ? replaceMap[m] : replaceCharDefault;
	});
}


module.exports = {
	replaceRestrictedCharacters
};

},{}],9:[function(require,module,exports){
"use strict";

const configKey = "x-gallery-info-copy-config";
const configDefault = {
	replaceRestrictedFileNameCharacters: true // boolean
};

module.exports = require("../config").create(configKey, configDefault);

},{"../config":6}],10:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const style = require("../style");
const copy = require("../copy");
const fileName = require("../file-name");
const pageType = require("../api/page-type");
const settings = require("../api/settings");
const config = require("./config");

const copyLinks = [];


class CopyLink {
	constructor(node, config) {
		this.node = node;
		this.config = config;

		this.span = document.createElement("span");
		this.span.className = "x-full-title-copy-link-container";

		this.link = document.createElement("a");
		this.link.className = "x-full-title-copy-link";

		this.span.appendChild(this.link);
		this.node.appendChild(this.span);
		this.node.classList.add(CopyLink.nodeClass);

		this.updateVisibility();

		this.link.addEventListener("click", (e) => this.onLinkClicked(e), false);

		this.mutationObserver = new MutationObserver((records) => this.onNodeMutation(records));
		this.mutationObserver.observe(this.node, {
			childList: true,
			subtree: false,
			characterData: false
		});
	}

	onNodeMutation(records) {
		if (this.span.classList.contains(CopyLink.removedClass)) {
			this.mutationObserver.disconnect();
			return;
		}

		let isRemoved = false;
		let leaveRemoved = false;
		for (const record of records) {
			if (
				record.type !== "childList" ||
				record.target !== this.node ||
				!nodeListContains(record.removedNodes, this.span)) {
				continue;
			}

			isRemoved = true;
			leaveRemoved = (record.addedNodes.length === 0);
		}

		if (isRemoved) {
			if (!leaveRemoved && this.span.parentNode === null && this.span.parentNode !== this.node) {
				this.node.appendChild(this.span);
			} else {
				this.span.classList.add(CopyLink.removedClass);
				this.mutationObserver.disconnect();
				return;
			}
		}

		this.updateVisibility();
	}

	onLinkClicked(e) {
		const text = this.transformText(this.node.textContent.trim());
		copy.toClipboard(text);

		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	transformText(text) {
		return this.config.replaceRestrictedFileNameCharacters ? fileName.replaceRestrictedCharacters(text) : text;
	}

	updateVisibility() {
		const text = this.node.textContent.trim();
		this.span.classList.toggle("x-full-title-copy-link-container-hidden", text.length === 0);
	}

	static isSetup(node) {
		return node.classList.contains(CopyLink.nodeClass);
	}
}

CopyLink.nodeClass = "x-full-title-copy-node";
CopyLink.removedClass = "x-full-title-copy-removed";


async function initialize() {
	const id = "x-gallery-info-copy";
	if (!style.hasStylesheet(id)) {
		const src = require("./style.css");
		style.addStylesheet(src, id);
	}

	const c = await config.get();

	checkForCopyTargets(document.documentElement, c);

	const mo = new MutationObserver((records) => onDocumentBodyMutation(records, c));
	mo.observe(document.body, {
		childList: true,
		subtree: true,
		characterData: false
	});
}

function checkForCopyTargets(html, config) {
	const selectors = [ "#gn", "#gj"];
	for (const selector of selectors) {
		let node = html.querySelector(selector);
		if (node === null && html.matches(selector)) {
			node = html;
		}
		if (node !== null) {
			createCopyLink(node, config);
		}
	}
}

function createCopyLink(node, config) {
	if (!CopyLink.isSetup(node)) {
		const copyLink = new CopyLink(node, config);
		copyLinks.push(copyLink);
	}
}

function onDocumentBodyMutation(records, config) {
	for (const record of records) {
		if (
			record.type !== "childList" ||
			record.addedNodes.length === 0) {
			continue;
		}
		for (const addedNode of record.addedNodes) {
			if (addedNode.nodeType !== Node.ELEMENT_NODE) { continue; }
			checkForCopyTargets(addedNode, config);
		}
	}
}

function nodeListContains(nodeList, node) {
	for (let n of nodeList) {
		if (node === n) { return true; }
	}
	return false;
}


async function initializeSettings() {
	settings.initialize();

	const section = settings.addSection("Gallery Info Copy", "gallery-info-copy", 2);
	if (section !== null) {
		await setupSettings(section);
	}
}

async function setupSettings(container) {
	container.innerHTML = require("./settings.html");
	bindInput(container, "replaceRestrictedFileNameCharacters", "boolean");
}

function bindInput(container, settingName, options) {
	const n = container.querySelector(`[data-x-settings-for=${settingName}]`);
	if (n === null) { return null; }

	config.bindInput(container.querySelector(`[data-x-settings-for=${settingName}]`), settingName, options);
}


function main() {
	settings.addLink();

	const currentPageType = pageType.get(document, location);
	switch (currentPageType) {
		case "settings":
			initializeSettings();
			break;
	}

	initialize();
}


ready.onReady(main);

},{"../api/page-type":2,"../api/settings":3,"../copy":7,"../file-name":8,"../ready":14,"../style":15,"./config":9,"./settings.html":11,"./style.css":12}],11:[function(require,module,exports){
module.exports = "<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Replace restricted characters</div>\r\n\t\t<div class=\"x-settings-section-description\">Replace characters which are not valid for file names.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<div class=\"x-settings-input-table-container\">\r\n\t\t\t<label class=\"x-settings-input-label\">\r\n\t\t\t\t<span class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"replaceRestrictedFileNameCharacters\" /><span></span>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
},{}],12:[function(require,module,exports){
module.exports = ".x-full-title-copy-link-container{display:inline-block;position:relative}.x-full-title-copy-link-container.x-full-title-copy-link-container-hidden{display:none}.x-full-title-copy-link{margin-left:.5em;display:inline-block;white-space:nowrap;cursor:pointer}.x-full-title-copy-link:after{content:\"Copy\"}.x-full-title-copy-link:not(:hover){color:inherit}.x-full-title-copy-node .x-full-title-copy-link{opacity:0;transition:opacity .25s linear 0s}.x-full-title-copy-node:hover .x-full-title-copy-link{opacity:.99;transition:opacity .25s linear .5s}.x-full-title-copy-node:hover .x-full-title-copy-link:hover{opacity:1;transition:opacity .25s linear 0s}";
},{}],13:[function(require,module,exports){
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
}

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
}).call(this, [this, window]); // jshint ignore:line


module.exports = gm;

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{"./api/style":4}],16:[function(require,module,exports){
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

},{}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvc2V0dGluZ3MuY3NzIiwic3JjL2NvbmZpZy5qcyIsInNyYy9jb3B5LmpzIiwic3JjL2ZpbGUtbmFtZS5qcyIsInNyYy9nYWxsZXJ5LWluZm8tY29weS9jb25maWcuanMiLCJzcmMvZ2FsbGVyeS1pbmZvLWNvcHkvbWFpbi5qcyIsInNyYy9nYWxsZXJ5LWluZm8tY29weS9zZXR0aW5ncy5odG1sIiwic3JjL2dhbGxlcnktaW5mby1jb3B5L3N0eWxlLmNzcyIsInNyYy9nbS5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy9zdHlsZS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE1BOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTGluayhsYWJlbCwgdXJsLCBvcmRlcikge1xyXG5cdGNvbnN0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5iXCIpO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGEuaHJlZiA9IHVybDtcclxuXHRhLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdGRpdi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0fVxyXG5cdGRpdi5hcHBlbmRDaGlsZChhKTtcclxuXHRuLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdHJldHVybiBkaXY7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgdXJsRnJhZ21lbnQgPSByZXF1aXJlKFwiLi4vdXJsLWZyYWdtZW50XCIpO1xyXG5cclxuXHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVyQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyXCI7XHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyLWhpZGRlblwiO1xyXG5jb25zdCBkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcyA9IFwieC1zZXR0aW5ncy1oaWRkZW5cIjtcclxuXHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lck91dGVyID0gbnVsbDtcclxubGV0IHNldHRpbmdzQ29udGFpbmVyID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LW5hdi1zZXR0aW5ncy1saW5rXCI7XHJcblxyXG5cdGxldCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdGlmIChuICE9PSBudWxsKSB7IHJldHVybiBuOyB9XHJcblxyXG5cdGNvbnN0IG5hdkJhciA9IHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyXCIpO1xyXG5cdG4gPSBuYXZCYXIuYWRkTGluayhcInhcIiwgYC91Y29uZmlnLnBocCR7dXJsRnJhZ21lbnQuY3JlYXRlKFwic2V0dGluZ3NcIil9YCwgMSk7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0bi5pZCA9IGlkO1xyXG5cdHJldHVybiBuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dGVyLnN0dWZmYm94XCIpO1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lck91dGVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRzZXR0aW5nc0NvbnRhaW5lciA9IHNldHRpbmdzQ29udGFpbmVyT3V0ZXIucXVlcnlTZWxlY3RvcihgLiR7c2V0dGluZ3NDb250YWluZXJDbGFzc31gKTtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTmFtZSA9IGAke3NldHRpbmdzQ29udGFpbmVyQ2xhc3N9ICR7c2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzc31gO1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXJPdXRlci5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpZCA9IFwieC1zZXR0aW5nc1wiO1xyXG5cdGlmICghc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHtcclxuXHRcdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL3NldHRpbmdzLmNzc1wiKTtcclxuXHRcdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcblx0fVxyXG5cclxuXHR1cmxGcmFnbWVudC5hZGRSb3V0ZSgvXlxcL3NldHRpbmdzKFxcL1tcXHdcXFddKik/JC8sIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZChtYXRjaCkge1xyXG5cdHNldFNldHRpbmdzVmlzaWJsZShtYXRjaCAhPT0gbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNldHRpbmdzVmlzaWJsZSh2aXNpYmxlKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPT09IG51bGwgfHwgc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcykgIT09IHZpc2libGUpIHtcclxuXHRcdC8vIE5vIGNoYW5nZVxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0c2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzLCAhdmlzaWJsZSk7XHJcblxyXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygc2V0dGluZ3NDb250YWluZXJPdXRlci5jaGlsZHJlbikge1xyXG5cdFx0aWYgKGNoaWxkID09PSBzZXR0aW5nc0NvbnRhaW5lcikgeyBjb250aW51ZTsgfVxyXG5cdFx0Y2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcywgdmlzaWJsZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTZWN0aW9uKGhlYWRlciwgaWQsIG9yZGVyKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGZ1bGxJZCA9IGB4LXNldHRpbmdzLXNlY3Rpb24tJHtpZH1gO1xyXG5cclxuXHRsZXQgc2VjdGlvbiA9IHNldHRpbmdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2Z1bGxJZH1gKTtcclxuXHRpZiAoc2VjdGlvbiA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uLmlkID0gZnVsbElkO1xyXG5cdFx0c2VjdGlvbi5jbGFzc05hbWUgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJcIjtcclxuXHRcdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHNlY3Rpb24uc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cdH1cclxuXHJcblx0bGV0IGNscyA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWhlYWRlclwiO1xyXG5cdGxldCBzZWN0aW9uSGVhZGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKGAuJHtjbHN9YCk7XHJcblx0aWYgKHNlY3Rpb25IZWFkZXIgPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblx0XHRzZWN0aW9uSGVhZGVyLmNsYXNzTmFtZSA9IGNscztcclxuXHRcdHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkZXI7XHJcblx0XHRjb25zdCByZWxhdGl2ZSA9IHNlY3Rpb24uZmlyc3RDaGlsZDtcclxuXHRcdGlmIChyZWxhdGl2ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRzZWN0aW9uLmluc2VydEJlZm9yZShyZWxhdGl2ZSwgc2VjdGlvbkhlYWRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xzID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24tY29udGVudFwiO1xyXG5cdGxldCBzZWN0aW9uQ29udGVudCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihgLiR7Y2xzfWApO1xyXG5cdGlmIChzZWN0aW9uQ29udGVudCA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2VjdGlvbkNvbnRlbnQuY2xhc3NOYW1lID0gY2xzO1xyXG5cdFx0c2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2VjdGlvbkNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rLFxyXG5cdGluaXRpYWxpemUsXHJcblx0YWRkU2VjdGlvblxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGlzRGFyaygpIHtcclxuXHRyZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvY3VtZW50RGFya0ZsYWcoKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnJvd0ljb25VcmwoKSB7XHJcblx0cmV0dXJuIChpc0RhcmsoKSA/IFwiaHR0cHM6Ly9leGhlbnRhaS5vcmcvaW1nL21yLmdpZlwiIDogXCJodHRwczovL2VoZ3Qub3JnL2cvbXIuZ2lmXCIpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNEYXJrLFxyXG5cdHNldERvY3VtZW50RGFya0ZsYWcsXHJcblx0Z2V0QXJyb3dJY29uVXJsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1zZXR0aW5ncy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tdG9wOi0xZW19Lngtc2V0dGluZ3MtY29udGFpbmVyLngtc2V0dGluZ3MtY29udGFpbmVyLWhpZGRlbntkaXNwbGF5Om5vbmV9Lngtc2V0dGluZ3MtaGlkZGVue2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9Lngtc2V0dGluZ3Mtb3B0aW9uIHNlbGVjdHttYXJnaW4tcmlnaHQ6LjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1jb250ZW50e21hcmdpbjo4cHggYXV0byAxMHB4IDEwcHg7Y2xlYXI6Ym90aH0ueC1zZXR0aW5ncy1zZWN0aW9uLWhlYWRlcntmb250LXNpemU6MS4yNWVtO2xpbmUtaGVpZ2h0OjEuNWVtO21hcmdpbjouMjVlbSAwfS54LXNldHRpbmdzLXNlY3Rpb257ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpyb3cgd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0O2ZsZXgtd3JhcDpub3dyYXA7d2lkdGg6MTAwJTtwYWRkaW5nOi41ZW0gMH0ueC1zZXR0aW5ncy1zZWN0aW9uKy54LXNldHRpbmdzLXNlY3Rpb257Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuMjUpfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1zZXR0aW5ncy1zZWN0aW9uKy54LXNldHRpbmdzLXNlY3Rpb257Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDkyLDEzLDE4LC4yNSl9Lngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0e2ZsZXg6MSAxIGF1dG87cGFkZGluZy1yaWdodDouNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tcmlnaHR7ZmxleDowIDAgYXV0bzttaW4td2lkdGg6MzAlO3RleHQtYWxpZ246cmlnaHR9Lngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZXtmb250LXdlaWdodDo3MDA7bGluZS1oZWlnaHQ6MS41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbntsaW5lLWhlaWdodDoxLjM1ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbisueC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9ue21hcmdpbi10b3A6LjI1ZW19aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXSxpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjA7cGFkZGluZzouMjVlbSAuNWVtO2xpbmUtaGVpZ2h0OjEuMzc1ZW07YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO2JveC1zaXppbmc6Ym9yZGVyLWJveH06cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXSw6cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde3dpZHRoOjIwZW19aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXXt3aWR0aDo1ZW07LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZH1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjB9dGV4dGFyZWEueC1zZXR0aW5ncy1zZWN0aW9uLXRleHRhcmVhe2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MDttYXJnaW46MDtwYWRkaW5nOi4yNWVtIC41ZW07bGluZS1oZWlnaHQ6MS4zNzVlbTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7cmVzaXplOnZlcnRpY2FsO2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7bWluLWhlaWdodDoxLjg3NWVtO2hlaWdodDo0LjYyNWVtO2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LWZhbWlseTpcXFwiQ291cmllciBOZXdcXFwiLENvdXJpZXIsbW9ub3NwYWNlfTpyb290Om5vdCgueC1pcy1kYXJrKSB0ZXh0YXJlYS54LXNldHRpbmdzLXNlY3Rpb24tdGV4dGFyZWF7YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfS54LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lciAubGN7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0Oi02cHh9Lngtc2V0dGluZ3MtY29udGFpbmVyIGNvZGV7Zm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JyxDb3VyaWVyLG1vbm9zcGFjZTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7Zm9udC13ZWlnaHQ6NzAwfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1zZXR0aW5ncy1jb250YWluZXIgY29kZXtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDF9Lngtc2V0dGluZ3MtbGlnaHQtdGV4dHtmb250LXdlaWdodDo0MDA7b3BhY2l0eTouNzV9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246bGVmdH0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZXtkaXNwbGF5OnRhYmxlfS54LXNldHRpbmdzLWlucHV0LXJvd3tkaXNwbGF5OnRhYmxlLXJvd30ueC1zZXR0aW5ncy1pbnB1dC1yb3cueC1zZXR0aW5ncy1pbnB1dC1oZWFkZXItcm93e2ZvbnQtc2l6ZTouOGVtO2xpbmUtaGVpZ2h0OjFlbTtvcGFjaXR5Oi43NX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbH0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsKy54LXNldHRpbmdzLWlucHV0LWNlbGx7cGFkZGluZy1sZWZ0Oi4yNWVtfS54LXNldHRpbmdzLWlucHV0LXJvdzpub3QoLngtc2V0dGluZ3MtaW5wdXQtaGVhZGVyLXJvdykrLngtc2V0dGluZ3MtaW5wdXQtcm93Pi54LXNldHRpbmdzLWlucHV0LWNlbGx7cGFkZGluZy10b3A6LjI1ZW19Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtbWlkZGxle3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsLngtc2V0dGluZ3MtaW5wdXQtY2VsbC1maWxse3dpZHRoOjEwMCV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtbm93cmFwe3doaXRlLXNwYWNlOm5vd3JhcH0ueC1zZXR0aW5ncy1pbnB1dC1sYWJlbHtjdXJzb3I6cG9pbnRlcjttYXJnaW46MCAwIDAgMWVtfS54LXNldHRpbmdzLWlucHV0LWNoZWNrYm94LXByZWZpeHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1yaWdodDouNWVtfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZ20gPSByZXF1aXJlKFwiLi9nbVwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KSB7XHJcblx0bGV0IGNvbmZpZyA9IG51bGw7XHJcblx0bGV0IGNvbmZpZ0dldFByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZygpIHtcclxuXHRcdGNvbnN0IGNvbmZpZ1N0cmluZyA9IGF3YWl0IGdtLmdldFZhbHVlKGNvbmZpZ0tleSwgbnVsbCk7XHJcblx0XHRpZiAodHlwZW9mKGNvbmZpZ1N0cmluZykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCBjID0gSlNPTi5wYXJzZShjb25maWdTdHJpbmcpO1xyXG5cdFx0XHRcdGlmIChjICE9PSBudWxsICYmIHR5cGVvZihjKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShjKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ0RlZmF1bHQsIGMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZSkge31cclxuXHRcdH1cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWdEZWZhdWx0KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdGlmIChjb25maWcgIT09IG51bGwpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25maWcpOyB9XHJcblxyXG5cdFx0aWYgKGNvbmZpZ0dldFByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0Y29uZmlnR2V0UHJvbWlzZSA9IGxvYWRDb25maWcoKS50aGVuKCh2KSA9PiBjb25maWcgPSB2KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29uZmlnR2V0UHJvbWlzZTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIHNhdmUoKSB7XHJcblx0XHRpZiAoY29uZmlnICE9PSBudWxsKSB7XHJcblx0XHRcdGF3YWl0IGdtLnNldFZhbHVlKGNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCBcIlwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBiaW5kSW5wdXQobm9kZSwgc2V0dGluZ05hbWUsIG9wdGlvbnMsIHZhbHVlTmFtZSkge1xyXG5cdFx0Y29uc3QgYyA9IGF3YWl0IGdldCgpO1xyXG5cclxuXHRcdGlmICh0eXBlb2YodmFsdWVOYW1lKSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHR2YWx1ZU5hbWUgPSBnZXREZWZhdWx0VmFsdWVOYW1lKG5vZGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHVwZGF0ZUlucHV0ID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB7dmFsdWUsIHZhbGlkfSA9IGNvbnZlcnRUb1R5cGUoY1tzZXR0aW5nTmFtZV0sIG9wdGlvbnMsIHRydWUpO1xyXG5cdFx0XHRpZiAodmFsaWQpIHsgbm9kZVt2YWx1ZU5hbWVdID0gdmFsdWU7IH1cclxuXHRcdH07XHJcblxyXG5cdFx0dXBkYXRlSW5wdXQoKTtcclxuXHJcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB7dmFsdWUsIHZhbGlkfSA9IGNvbnZlcnRUb1R5cGUobm9kZVt2YWx1ZU5hbWVdLCBvcHRpb25zLCBmYWxzZSk7XHJcblx0XHRcdGlmICh2YWxpZCkge1xyXG5cdFx0XHRcdGNbc2V0dGluZ05hbWVdID0gdmFsdWU7XHJcblx0XHRcdFx0c2F2ZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVJbnB1dCgpO1xyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnZXQsXHJcblx0XHRzYXZlLFxyXG5cdFx0YmluZElucHV0XHJcblx0fTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRUeXBlQ29udmVydE9wdGlvbnMgPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVOYW1lKG5vZGUpIHtcclxuXHRzd2l0Y2ggKG5vZGUudGFnTmFtZSkge1xyXG5cdFx0Y2FzZSBcIklOUFVUXCI6XHJcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IFwiY2hlY2tib3hcIikgeyByZXR1cm4gXCJjaGVja2VkXCI7IH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gXCJ2YWx1ZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9UeXBlKHZhbHVlLCBvcHRpb25zLCB0b0lucHV0KSB7XHJcblx0aWYgKHR5cGVvZihvcHRpb25zKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0cmV0dXJuIGNvbnZlcnRUb1R5cGVOb3JtYWxpemVkKHZhbHVlLCBvcHRpb25zLCBkZWZhdWx0VHlwZUNvbnZlcnRPcHRpb25zLCB0b0lucHV0KTtcclxuXHR9IGlmIChvcHRpb25zICE9PSBudWxsICYmIHR5cGVvZihvcHRpb25zKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Yob3B0aW9ucy50eXBlKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0cmV0dXJuIGNvbnZlcnRUb1R5cGVOb3JtYWxpemVkKHZhbHVlLCBvcHRpb25zLnR5cGUsIG9wdGlvbnMsIHRvSW5wdXQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4geyB2YWx1ZSwgdmFsaWQ6IHRydWUgfTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb1R5cGVOb3JtYWxpemVkKHZhbHVlLCB0eXBlTmFtZSwgb3B0aW9ucywgdG9JbnB1dCkge1xyXG5cdGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG5cdC8vIENvbnZlcnRcclxuXHRzd2l0Y2ggKHR5cGVOYW1lKSB7XHJcblx0XHRjYXNlIFwiYm9vbGVhblwiOlxyXG5cdFx0XHR2YWx1ZSA9ICEhdmFsdWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImludGVnZXJcIjpcclxuXHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0dmFsdWUgPSAodHlwZU5hbWUgPT09IFwibnVtYmVyXCIgPyBwYXJzZUZsb2F0KGAke3ZhbHVlfWApIDogcGFyc2VJbnQoYCR7dmFsdWV9YCwgMTApKTtcclxuXHRcdFx0aWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XHJcblx0XHRcdFx0dmFsdWUgPSAwO1xyXG5cdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRcdHZhbHVlID0gYCR7dmFsdWV9YDtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHQvLyBUcmFuc2Zvcm1cclxuXHRpZiAoIXRvSW5wdXQgJiYgdHlwZW9mKG9wdGlvbnMuaW5wdXRUb1ZhbHVlKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHR2YWx1ZSA9IG9wdGlvbnMuaW5wdXRUb1ZhbHVlKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8vIExpbWl0c1xyXG5cdHN3aXRjaCAodHlwZU5hbWUpIHtcclxuXHRcdGNhc2UgXCJpbnRlZ2VyXCI6XHJcblx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5taW4pID09PSBcIm51bWJlclwiICYmIHZhbHVlIDwgb3B0aW9ucy5taW4pIHsgdmFsdWUgPSBvcHRpb25zLm1pbjsgfVxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWF4KSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA+IG9wdGlvbnMubWF4KSB7IHZhbHVlID0gb3B0aW9ucy5tYXg7IH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5tYXhMZW5ndGgpID09PSBcIm51bWJlclwiICYmIHZhbHVlLmxlbmd0aCA+IG9wdGlvbnMubWF4TGVuZ3RoKSB7XHJcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgb3B0aW9ucy5tYXhMZW5ndGgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Ly8gVHJhbnNmb3JtXHJcblx0aWYgKHRvSW5wdXQgJiYgdHlwZW9mKG9wdGlvbnMudmFsdWVUb0lucHV0KSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHR2YWx1ZSA9IG9wdGlvbnMudmFsdWVUb0lucHV0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7IHZhbHVlLCB2YWxpZCB9O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y3JlYXRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGNvcHlUZXh0QXJlYSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGlkZGVuVGV4dGFyZWEoKSB7XHJcblx0Y29uc3QgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuXHRuLnN0eWxlLnNldFByb3BlcnR5KFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIsIFwiaW1wb3J0YW50XCIpO1xyXG5cdG4uc3R5bGUuc2V0UHJvcGVydHkoXCJvcGFjaXR5XCIsIFwiMFwiLCBcImltcG9ydGFudFwiKTtcclxuXHRuLnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJmaXhlZFwiLCBcImltcG9ydGFudFwiKTtcclxuXHRuLnN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLCBcIjBcIiwgXCJpbXBvcnRhbnRcIik7XHJcblx0bi5zdHlsZS5zZXRQcm9wZXJ0eShcInRvcFwiLCBcIjBcIiwgXCJpbXBvcnRhbnRcIik7XHJcblx0cmV0dXJuIG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ2xpcGJvYXJkKHRleHQpIHtcclxuXHRpZiAoY29weVRleHRBcmVhID09PSBudWxsKSB7XHJcblx0XHRjb3B5VGV4dEFyZWEgPSBjcmVhdGVIaWRkZW5UZXh0YXJlYSgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQuYm9keTtcclxuXHRpZiAoY29weVRleHRBcmVhLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xyXG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKGNvcHlUZXh0QXJlYSk7XHJcblx0fVxyXG5cclxuXHRjb3B5VGV4dEFyZWEuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIiwgXCJpbXBvcnRhbnRcIik7XHJcblx0dHJ5IHtcclxuXHRcdGNvcHlUZXh0QXJlYS52YWx1ZSA9IHRleHQ7XHJcblx0XHRjb3B5VGV4dEFyZWEuZm9jdXMoKTtcclxuXHRcdGNvcHlUZXh0QXJlYS5zZWxlY3QoKTtcclxuXHRcdGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuXHRcdGNvcHlUZXh0QXJlYS5ibHVyKCk7XHJcblx0fVxyXG5cdGNhdGNoIChlKVxyXG5cdHt9XHJcblx0Y29weVRleHRBcmVhLnZhbHVlID0gXCJcIjtcclxuXHRjb3B5VGV4dEFyZWEuc3R5bGUuc2V0UHJvcGVydHkoXCJkaXNwbGF5XCIsIFwibm9uZVwiLCBcImltcG9ydGFudFwiKTtcclxuXHJcblx0aWYgKGNvcHlUZXh0QXJlYS5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcblx0XHRjb3B5VGV4dEFyZWEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb3B5VGV4dEFyZWEpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHRvQ2xpcGJvYXJkXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVwbGFjZUNoYXJEZWZhdWx0ID0gXCItXCI7XHJcbmNvbnN0IHJlcGxhY2VNYXAgPSB7XHJcblx0XCI8XCI6IFwiXFx1RkYxQ1wiLFxyXG5cdFwiPlwiOiBcIlxcdUZGMUVcIixcclxuXHRcIjpcIjogXCJcXHVGRjFBXCIsXHJcblx0XCJcXFwiXCI6IFwiXFx1RkYwMlwiLFxyXG5cdFwiL1wiOiBcIlxcdUZGMEZcIixcclxuXHRcIlxcXFxcIjogXCJcXHVGRjBGXCIsXHJcblx0XCJ8XCI6IFwiXFx1RkY1Q1wiLFxyXG5cdFwiP1wiOiBcIlxcdUZGMUZcIixcclxuXHRcIipcIjogXCJcXHVGRjBBXCJcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiByZXBsYWNlUmVzdHJpY3RlZENoYXJhY3RlcnMoZmlsZU5hbWUsIHJlcGxhY2VXaXRoKSB7XHJcblx0cmV0dXJuIGZpbGVOYW1lLnJlcGxhY2UoL1s8PjpcIlxcfFxcP1xcKlxcL1xcXFxcXHgwMC1cXHgxZl0vZywgKG0pID0+IHtcclxuXHRcdGlmICh0eXBlb2YocmVwbGFjZVdpdGgpID09PSBcInN0cmluZ1wiKSB7IHJldHVybiByZXBsYWNlV2l0aDsgfVxyXG5cdFx0cmV0dXJuIHJlcGxhY2VNYXAuaGFzT3duUHJvcGVydHkobSkgPyByZXBsYWNlTWFwW21dIDogcmVwbGFjZUNoYXJEZWZhdWx0O1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0cmVwbGFjZVJlc3RyaWN0ZWRDaGFyYWN0ZXJzXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgY29uZmlnS2V5ID0gXCJ4LWdhbGxlcnktaW5mby1jb3B5LWNvbmZpZ1wiO1xyXG5jb25zdCBjb25maWdEZWZhdWx0ID0ge1xyXG5cdHJlcGxhY2VSZXN0cmljdGVkRmlsZU5hbWVDaGFyYWN0ZXJzOiB0cnVlIC8vIGJvb2xlYW5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKS5jcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCByZWFkeSA9IHJlcXVpcmUoXCIuLi9yZWFkeVwiKTtcclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcbmNvbnN0IGNvcHkgPSByZXF1aXJlKFwiLi4vY29weVwiKTtcclxuY29uc3QgZmlsZU5hbWUgPSByZXF1aXJlKFwiLi4vZmlsZS1uYW1lXCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCBzZXR0aW5ncyA9IHJlcXVpcmUoXCIuLi9hcGkvc2V0dGluZ3NcIik7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcclxuXHJcbmNvbnN0IGNvcHlMaW5rcyA9IFtdO1xyXG5cclxuXHJcbmNsYXNzIENvcHlMaW5rIHtcclxuXHRjb25zdHJ1Y3Rvcihub2RlLCBjb25maWcpIHtcclxuXHRcdHRoaXMubm9kZSA9IG5vZGU7XHJcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHJcblx0XHR0aGlzLnNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRcdHRoaXMuc3Bhbi5jbGFzc05hbWUgPSBcIngtZnVsbC10aXRsZS1jb3B5LWxpbmstY29udGFpbmVyXCI7XHJcblxyXG5cdFx0dGhpcy5saW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHR0aGlzLmxpbmsuY2xhc3NOYW1lID0gXCJ4LWZ1bGwtdGl0bGUtY29weS1saW5rXCI7XHJcblxyXG5cdFx0dGhpcy5zcGFuLmFwcGVuZENoaWxkKHRoaXMubGluayk7XHJcblx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5zcGFuKTtcclxuXHRcdHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKENvcHlMaW5rLm5vZGVDbGFzcyk7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVWaXNpYmlsaXR5KCk7XHJcblxyXG5cdFx0dGhpcy5saW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5vbkxpbmtDbGlja2VkKGUpLCBmYWxzZSk7XHJcblxyXG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpID0+IHRoaXMub25Ob2RlTXV0YXRpb24ocmVjb3JkcykpO1xyXG5cdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy5ub2RlLCB7XHJcblx0XHRcdGNoaWxkTGlzdDogdHJ1ZSxcclxuXHRcdFx0c3VidHJlZTogZmFsc2UsXHJcblx0XHRcdGNoYXJhY3RlckRhdGE6IGZhbHNlXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG9uTm9kZU11dGF0aW9uKHJlY29yZHMpIHtcclxuXHRcdGlmICh0aGlzLnNwYW4uY2xhc3NMaXN0LmNvbnRhaW5zKENvcHlMaW5rLnJlbW92ZWRDbGFzcykpIHtcclxuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBpc1JlbW92ZWQgPSBmYWxzZTtcclxuXHRcdGxldCBsZWF2ZVJlbW92ZWQgPSBmYWxzZTtcclxuXHRcdGZvciAoY29uc3QgcmVjb3JkIG9mIHJlY29yZHMpIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHJlY29yZC50eXBlICE9PSBcImNoaWxkTGlzdFwiIHx8XHJcblx0XHRcdFx0cmVjb3JkLnRhcmdldCAhPT0gdGhpcy5ub2RlIHx8XHJcblx0XHRcdFx0IW5vZGVMaXN0Q29udGFpbnMocmVjb3JkLnJlbW92ZWROb2RlcywgdGhpcy5zcGFuKSkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpc1JlbW92ZWQgPSB0cnVlO1xyXG5cdFx0XHRsZWF2ZVJlbW92ZWQgPSAocmVjb3JkLmFkZGVkTm9kZXMubGVuZ3RoID09PSAwKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoaXNSZW1vdmVkKSB7XHJcblx0XHRcdGlmICghbGVhdmVSZW1vdmVkICYmIHRoaXMuc3Bhbi5wYXJlbnROb2RlID09PSBudWxsICYmIHRoaXMuc3Bhbi5wYXJlbnROb2RlICE9PSB0aGlzLm5vZGUpIHtcclxuXHRcdFx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQodGhpcy5zcGFuKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnNwYW4uY2xhc3NMaXN0LmFkZChDb3B5TGluay5yZW1vdmVkQ2xhc3MpO1xyXG5cdFx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVWaXNpYmlsaXR5KCk7XHJcblx0fVxyXG5cclxuXHRvbkxpbmtDbGlja2VkKGUpIHtcclxuXHRcdGNvbnN0IHRleHQgPSB0aGlzLnRyYW5zZm9ybVRleHQodGhpcy5ub2RlLnRleHRDb250ZW50LnRyaW0oKSk7XHJcblx0XHRjb3B5LnRvQ2xpcGJvYXJkKHRleHQpO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHR0cmFuc2Zvcm1UZXh0KHRleHQpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5yZXBsYWNlUmVzdHJpY3RlZEZpbGVOYW1lQ2hhcmFjdGVycyA/IGZpbGVOYW1lLnJlcGxhY2VSZXN0cmljdGVkQ2hhcmFjdGVycyh0ZXh0KSA6IHRleHQ7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVWaXNpYmlsaXR5KCkge1xyXG5cdFx0Y29uc3QgdGV4dCA9IHRoaXMubm9kZS50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHR0aGlzLnNwYW4uY2xhc3NMaXN0LnRvZ2dsZShcIngtZnVsbC10aXRsZS1jb3B5LWxpbmstY29udGFpbmVyLWhpZGRlblwiLCB0ZXh0Lmxlbmd0aCA9PT0gMCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaXNTZXR1cChub2RlKSB7XHJcblx0XHRyZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ29weUxpbmsubm9kZUNsYXNzKTtcclxuXHR9XHJcbn1cclxuXHJcbkNvcHlMaW5rLm5vZGVDbGFzcyA9IFwieC1mdWxsLXRpdGxlLWNvcHktbm9kZVwiO1xyXG5Db3B5TGluay5yZW1vdmVkQ2xhc3MgPSBcIngtZnVsbC10aXRsZS1jb3B5LXJlbW92ZWRcIjtcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LWdhbGxlcnktaW5mby1jb3B5XCI7XHJcblx0aWYgKCFzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkge1xyXG5cdFx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xyXG5cdFx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGMgPSBhd2FpdCBjb25maWcuZ2V0KCk7XHJcblxyXG5cdGNoZWNrRm9yQ29weVRhcmdldHMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBjKTtcclxuXHJcblx0Y29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkcykgPT4gb25Eb2N1bWVudEJvZHlNdXRhdGlvbihyZWNvcmRzLCBjKSk7XHJcblx0bW8ub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XHJcblx0XHRjaGlsZExpc3Q6IHRydWUsXHJcblx0XHRzdWJ0cmVlOiB0cnVlLFxyXG5cdFx0Y2hhcmFjdGVyRGF0YTogZmFsc2VcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tGb3JDb3B5VGFyZ2V0cyhodG1sLCBjb25maWcpIHtcclxuXHRjb25zdCBzZWxlY3RvcnMgPSBbIFwiI2duXCIsIFwiI2dqXCJdO1xyXG5cdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzKSB7XHJcblx0XHRsZXQgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcblx0XHRpZiAobm9kZSA9PT0gbnVsbCAmJiBodG1sLm1hdGNoZXMoc2VsZWN0b3IpKSB7XHJcblx0XHRcdG5vZGUgPSBodG1sO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y3JlYXRlQ29weUxpbmsobm9kZSwgY29uZmlnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvcHlMaW5rKG5vZGUsIGNvbmZpZykge1xyXG5cdGlmICghQ29weUxpbmsuaXNTZXR1cChub2RlKSkge1xyXG5cdFx0Y29uc3QgY29weUxpbmsgPSBuZXcgQ29weUxpbmsobm9kZSwgY29uZmlnKTtcclxuXHRcdGNvcHlMaW5rcy5wdXNoKGNvcHlMaW5rKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRG9jdW1lbnRCb2R5TXV0YXRpb24ocmVjb3JkcywgY29uZmlnKSB7XHJcblx0Zm9yIChjb25zdCByZWNvcmQgb2YgcmVjb3Jkcykge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRyZWNvcmQudHlwZSAhPT0gXCJjaGlsZExpc3RcIiB8fFxyXG5cdFx0XHRyZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRmb3IgKGNvbnN0IGFkZGVkTm9kZSBvZiByZWNvcmQuYWRkZWROb2Rlcykge1xyXG5cdFx0XHRpZiAoYWRkZWROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkgeyBjb250aW51ZTsgfVxyXG5cdFx0XHRjaGVja0ZvckNvcHlUYXJnZXRzKGFkZGVkTm9kZSwgY29uZmlnKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vZGVMaXN0Q29udGFpbnMobm9kZUxpc3QsIG5vZGUpIHtcclxuXHRmb3IgKGxldCBuIG9mIG5vZGVMaXN0KSB7XHJcblx0XHRpZiAobm9kZSA9PT0gbikgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplU2V0dGluZ3MoKSB7XHJcblx0c2V0dGluZ3MuaW5pdGlhbGl6ZSgpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uID0gc2V0dGluZ3MuYWRkU2VjdGlvbihcIkdhbGxlcnkgSW5mbyBDb3B5XCIsIFwiZ2FsbGVyeS1pbmZvLWNvcHlcIiwgMik7XHJcblx0aWYgKHNlY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdGF3YWl0IHNldHVwU2V0dGluZ3Moc2VjdGlvbik7XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXR1cFNldHRpbmdzKGNvbnRhaW5lcikge1xyXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSByZXF1aXJlKFwiLi9zZXR0aW5ncy5odG1sXCIpO1xyXG5cdGJpbmRJbnB1dChjb250YWluZXIsIFwicmVwbGFjZVJlc3RyaWN0ZWRGaWxlTmFtZUNoYXJhY3RlcnNcIiwgXCJib29sZWFuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kSW5wdXQoY29udGFpbmVyLCBzZXR0aW5nTmFtZSwgb3B0aW9ucykge1xyXG5cdGNvbnN0IG4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEteC1zZXR0aW5ncy1mb3I9JHtzZXR0aW5nTmFtZX1dYCk7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uZmlnLmJpbmRJbnB1dChjb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEteC1zZXR0aW5ncy1mb3I9JHtzZXR0aW5nTmFtZX1dYCksIHNldHRpbmdOYW1lLCBvcHRpb25zKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcblx0c2V0dGluZ3MuYWRkTGluaygpO1xyXG5cclxuXHRjb25zdCBjdXJyZW50UGFnZVR5cGUgPSBwYWdlVHlwZS5nZXQoZG9jdW1lbnQsIGxvY2F0aW9uKTtcclxuXHRzd2l0Y2ggKGN1cnJlbnRQYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcInNldHRpbmdzXCI6XHJcblx0XHRcdGluaXRpYWxpemVTZXR0aW5ncygpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPlJlcGxhY2UgcmVzdHJpY3RlZCBjaGFyYWN0ZXJzPC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uXFxcIj5SZXBsYWNlIGNoYXJhY3RlcnMgd2hpY2ggYXJlIG5vdCB2YWxpZCBmb3IgZmlsZSBuYW1lcy48L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tcmlnaHRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtbGFiZWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJsY1xcXCI+PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJyZXBsYWNlUmVzdHJpY3RlZEZpbGVOYW1lQ2hhcmFjdGVyc1xcXCIgLz48c3Bhbj48L3NwYW4+XFxyXFxuXFx0XFx0XFx0PC9sYWJlbD5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtZnVsbC10aXRsZS1jb3B5LWxpbmstY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS54LWZ1bGwtdGl0bGUtY29weS1saW5rLWNvbnRhaW5lci54LWZ1bGwtdGl0bGUtY29weS1saW5rLWNvbnRhaW5lci1oaWRkZW57ZGlzcGxheTpub25lfS54LWZ1bGwtdGl0bGUtY29weS1saW5re21hcmdpbi1sZWZ0Oi41ZW07ZGlzcGxheTppbmxpbmUtYmxvY2s7d2hpdGUtc3BhY2U6bm93cmFwO2N1cnNvcjpwb2ludGVyfS54LWZ1bGwtdGl0bGUtY29weS1saW5rOmFmdGVye2NvbnRlbnQ6XFxcIkNvcHlcXFwifS54LWZ1bGwtdGl0bGUtY29weS1saW5rOm5vdCg6aG92ZXIpe2NvbG9yOmluaGVyaXR9LngtZnVsbC10aXRsZS1jb3B5LW5vZGUgLngtZnVsbC10aXRsZS1jb3B5LWxpbmt7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAuMjVzIGxpbmVhciAwc30ueC1mdWxsLXRpdGxlLWNvcHktbm9kZTpob3ZlciAueC1mdWxsLXRpdGxlLWNvcHktbGlua3tvcGFjaXR5Oi45OTt0cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBsaW5lYXIgLjVzfS54LWZ1bGwtdGl0bGUtY29weS1ub2RlOmhvdmVyIC54LWZ1bGwtdGl0bGUtY29weS1saW5rOmhvdmVye29wYWNpdHk6MTt0cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBsaW5lYXIgMHN9XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiB0b1Byb21pc2UoZm4sIHNlbGYpIHtcclxuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmVzb2x2ZShmbi5hcHBseShzZWxmLCBhcmdzKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRyZWplY3QoZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IGdtID0gKChvYmplY3RzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0aWYgKG9iai5HTSAhPT0gbnVsbCAmJiB0eXBlb2Yob2JqLkdNKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHJldHVybiBvYmouR007XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHRjb25zdCBtYXBwaW5nID0gW1xyXG5cdFx0WyBcImdldFZhbHVlXCIsIFwiR01fZ2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcInNldFZhbHVlXCIsIFwiR01fc2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcImRlbGV0ZVZhbHVlXCIsIFwiR01fZGVsZXRlVmFsdWVcIiBdLFxyXG5cdFx0WyBcInhtbEh0dHBSZXF1ZXN0XCIsIFwiR01feG1saHR0cFJlcXVlc3RcIiBdXHJcblx0XTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwcGluZykge1xyXG5cdFx0bGV0IHByb21pc2UgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRjb25zdCBmbiA9IG9ialt2YWx1ZV07XHJcblx0XHRcdGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRwcm9taXNlID0gdG9Qcm9taXNlKGZuLCBvYmopO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgTm90IHN1cHBvcnRlZCAoJHtrZXl9KWApKSk7XHJcblx0XHR9XHJcblx0XHRyZXN1bHRba2V5XSA9IHByb21pc2U7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn0pLmNhbGwodGhpcywgW3RoaXMsIHdpbmRvd10pOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBpc1JlYWR5VmFsdWUgPSBmYWxzZTtcclxubGV0IGNhbGxiYWNrcyA9IG51bGw7XHJcbmxldCBjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5jb25zdCBjaGVja0ludGVydmFsUmF0ZSA9IDI1MDtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0hvb2tlZCgpIHtcclxuXHRyZXR1cm4gY2FsbGJhY2tzICE9PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob29rKCkge1xyXG5cdGNhbGxiYWNrcyA9IFtdO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoY2hlY2tJZlJlYWR5LCBjaGVja0ludGVydmFsUmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaG9vaygpIHtcclxuXHRjb25zdCBjYnMgPSBjYWxsYmFja3M7XHJcblxyXG5cdGNhbGxiYWNrcyA9IG51bGw7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjbGVhckludGVydmFsKGNoZWNrSW50ZXJ2YWxJZCk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuXHJcblx0aW52b2tlKGNicyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZShjYWxsYmFja3MpIHtcclxuXHRmb3IgKGxldCBjYiBvZiBjYWxsYmFja3MpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNiKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuXHRpZiAoaXNSZWFkeVZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRpZiAoaXNIb29rZWQoKSkgeyB1bmhvb2soKTsgfVxyXG5cdFx0aXNSZWFkeVZhbHVlID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcclxuXHRpc1JlYWR5KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvblJlYWR5KGNhbGxiYWNrKSB7XHJcblx0aWYgKGlzUmVhZHkoKSkge1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghaXNIb29rZWQoKSkgeyBob29rKCk7IH1cclxuXHJcblx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0b25SZWFkeTogb25SZWFkeSxcclxuXHRnZXQgaXNSZWFkeSgpIHsgcmV0dXJuIGlzUmVhZHkoKTsgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBhcGlTdHlsZSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0aWYgKGFwaVN0eWxlID09PSBudWxsKSB7IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vYXBpL3N0eWxlXCIpOyB9XHJcblx0YXBpU3R5bGUuc2V0RG9jdW1lbnREYXJrRmxhZygpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHhQcmVmaXggPSBcIiMheFwiO1xyXG5jb25zdCBzZXBhcmF0b3IgPSBcIi9cIjtcclxuY29uc3Qgcm91dGVzID0gW107XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXIoYWRkSGlzdG9yeSkge1xyXG5cdGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0aWYgKGFkZEhpc3RvcnkpIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShwYXRoKSB7XHJcblx0cmV0dXJuIHBhdGggPyBgJHt4UHJlZml4fSR7c2VwYXJhdG9yfSR7cGF0aH1gIDogeFByZWZpeDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Y29uc3Qgcm91dGUgPSB7IG1hdGNoLCBjYWxsYmFjayB9O1xyXG5cdHJvdXRlcy5wdXNoKHJvdXRlKTtcclxuXHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdH1cclxuXHR0ZXN0Um91dGVzKFtyb3V0ZV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRmb3IgKGxldCBpID0gMCwgaWkgPSByb3V0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0Y29uc3Qgcm91dGUgPSByb3V0ZXNbaV07XHJcblx0XHRpZiAocm91dGUubWF0Y2ggPT09IG1hdGNoICYmIHJvdXRlLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xyXG5cdFx0XHRyb3V0ZXMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRYRnJhZ21lbnQoKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0IWZyYWdtZW50IHx8XHJcblx0XHRmcmFnbWVudC5sZW5ndGggPCB4UHJlZml4Lmxlbmd0aCB8fFxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKDAsIHhQcmVmaXgubGVuZ3RoKSAhPT0geFByZWZpeCB8fFxyXG5cdFx0KGZyYWdtZW50Lmxlbmd0aCA+IHhQcmVmaXgubGVuZ3RoICYmIGZyYWdtZW50W3hQcmVmaXgubGVuZ3RoXSAhPT0gc2VwYXJhdG9yKSkgP1xyXG5cdFx0bnVsbCA6XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoeFByZWZpeC5sZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0Um91dGVzKHJvdXRlcykge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gZ2V0WEZyYWdtZW50KCk7XHJcblx0aWYgKGZyYWdtZW50ID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5tYXRjaC5leGVjKGZyYWdtZW50KTtcclxuXHRcdHJvdXRlLmNhbGxiYWNrKG1hdGNoLCBmcmFnbWVudCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblVybEZyYWdtZW50Q2hhbmdlZCgpIHtcclxuXHR0ZXN0Um91dGVzKHJvdXRlcyk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjbGVhcjogY2xlYXIsXHJcblx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0YWRkUm91dGU6IGFkZFJvdXRlLFxyXG5cdHJlbW92ZVJvdXRlOiByZW1vdmVSb3V0ZVxyXG59O1xyXG4iXX0=
