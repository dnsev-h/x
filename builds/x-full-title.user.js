// ==UserScript==
// @name        x/full-title
// @version     1.1.10
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
	return (
		window.location.hostname.indexOf("exhentai") >= 0 ||
		document.documentElement.classList.contains("x-force-dark"));
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
module.exports = ".itg>.gl1t>a:first-of-type{overflow:hidden;min-height:32px;max-height:32px;margin:6px 4px 0;position:relative;display:block}.itg>.gl1t>a:first-of-type>.glname{overflow:visible;min-height:auto;max-height:none;margin:0}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t>.glname,:root[data-x-option-full-title-display-mode=always] .itg>.gl1t>a:first-of-type,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover>a:first-of-type{overflow:visible;z-index:10}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover>a:first-of-type>.glname{padding-bottom:.25em}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t>.glname>div:first-of-type,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover>.glname>div:first-of-type{padding-bottom:.25em;margin-right:-30px;padding-right:30px}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+1)>.glname>div:first-of-type,:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+1)>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+1)>.glname>div:first-of-type,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+1)>a:first-of-type>.glname{background-color:rgba(242,240,228,.75)}:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+2)>.glname>div:first-of-type,:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+2)>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+2)>.glname>div:first-of-type,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+2)>a:first-of-type>.glname{background-color:rgba(237,235,223,.75)}:root.x-is-dark[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+1)>a:first-of-type>.glname,:root.x-is-dark[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+1)>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+1)>.glname>div:first-of-type,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+1)>.glname>div:first-of-type{background-color:rgba(54,57,64,.75)}:root.x-is-dark[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+2)>a:first-of-type>.glname,:root.x-is-dark[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+2)>a:first-of-type>.glname,:root[data-x-option-full-title-display-mode=always] .itg>.gl1t:nth-child(2n+2)>.glname>div:first-of-type,:root[data-x-option-full-title-display-mode=hover] .itg>.gl1t:hover:nth-child(2n+2)>.glname>div:first-of-type{background-color:rgba(60,65,75,.75)}";
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
}

const gm = ((objects) => {
	try {
		const v = GM; // jshint ignore:line
		if (v !== null && typeof(v) === "object") {
			return v;
		}
	}
	catch (e) { }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvc2V0dGluZ3MuY3NzIiwic3JjL2NvbmZpZy5qcyIsInNyYy9mdWxsLXRpdGxlL2NvbmZpZy5qcyIsInNyYy9mdWxsLXRpdGxlL21haW4uanMiLCJzcmMvZnVsbC10aXRsZS9zZXR0aW5ncy5odG1sIiwic3JjL2Z1bGwtdGl0bGUvc3R5bGUuY3NzIiwic3JjL2dtLmpzIiwic3JjL3JlYWR5LmpzIiwic3JjL3N0eWxlLmpzIiwic3JjL3VybC1mcmFnbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTGluayhsYWJlbCwgdXJsLCBvcmRlcikge1xyXG5cdGNvbnN0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5iXCIpO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGEuaHJlZiA9IHVybDtcclxuXHRhLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdGRpdi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0fVxyXG5cdGRpdi5hcHBlbmRDaGlsZChhKTtcclxuXHRuLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdHJldHVybiBkaXY7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgdXJsRnJhZ21lbnQgPSByZXF1aXJlKFwiLi4vdXJsLWZyYWdtZW50XCIpO1xyXG5cclxuXHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVyQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyXCI7XHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyLWhpZGRlblwiO1xyXG5jb25zdCBkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcyA9IFwieC1zZXR0aW5ncy1oaWRkZW5cIjtcclxuXHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lck91dGVyID0gbnVsbDtcclxubGV0IHNldHRpbmdzQ29udGFpbmVyID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LW5hdi1zZXR0aW5ncy1saW5rXCI7XHJcblxyXG5cdGxldCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdGlmIChuICE9PSBudWxsKSB7IHJldHVybiBuOyB9XHJcblxyXG5cdGNvbnN0IG5hdkJhciA9IHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyXCIpO1xyXG5cdG4gPSBuYXZCYXIuYWRkTGluayhcInhcIiwgYC91Y29uZmlnLnBocCR7dXJsRnJhZ21lbnQuY3JlYXRlKFwic2V0dGluZ3NcIil9YCwgMSk7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0bi5pZCA9IGlkO1xyXG5cdHJldHVybiBuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dGVyLnN0dWZmYm94XCIpO1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lck91dGVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRzZXR0aW5nc0NvbnRhaW5lciA9IHNldHRpbmdzQ29udGFpbmVyT3V0ZXIucXVlcnlTZWxlY3RvcihgLiR7c2V0dGluZ3NDb250YWluZXJDbGFzc31gKTtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTmFtZSA9IGAke3NldHRpbmdzQ29udGFpbmVyQ2xhc3N9ICR7c2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzc31gO1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXJPdXRlci5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpZCA9IFwieC1zZXR0aW5nc1wiO1xyXG5cdGlmICghc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHtcclxuXHRcdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL3NldHRpbmdzLmNzc1wiKTtcclxuXHRcdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcblx0fVxyXG5cclxuXHR1cmxGcmFnbWVudC5hZGRSb3V0ZSgvXlxcL3NldHRpbmdzKFxcL1tcXHdcXFddKik/JC8sIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZChtYXRjaCkge1xyXG5cdHNldFNldHRpbmdzVmlzaWJsZShtYXRjaCAhPT0gbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNldHRpbmdzVmlzaWJsZSh2aXNpYmxlKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPT09IG51bGwgfHwgc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcykgIT09IHZpc2libGUpIHtcclxuXHRcdC8vIE5vIGNoYW5nZVxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0c2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzLCAhdmlzaWJsZSk7XHJcblxyXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygc2V0dGluZ3NDb250YWluZXJPdXRlci5jaGlsZHJlbikge1xyXG5cdFx0aWYgKGNoaWxkID09PSBzZXR0aW5nc0NvbnRhaW5lcikgeyBjb250aW51ZTsgfVxyXG5cdFx0Y2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcywgdmlzaWJsZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTZWN0aW9uKGhlYWRlciwgaWQsIG9yZGVyKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGZ1bGxJZCA9IGB4LXNldHRpbmdzLXNlY3Rpb24tJHtpZH1gO1xyXG5cclxuXHRsZXQgc2VjdGlvbiA9IHNldHRpbmdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2Z1bGxJZH1gKTtcclxuXHRpZiAoc2VjdGlvbiA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uLmlkID0gZnVsbElkO1xyXG5cdFx0c2VjdGlvbi5jbGFzc05hbWUgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJcIjtcclxuXHRcdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHNlY3Rpb24uc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cdH1cclxuXHJcblx0bGV0IGNscyA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWhlYWRlclwiO1xyXG5cdGxldCBzZWN0aW9uSGVhZGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKGAuJHtjbHN9YCk7XHJcblx0aWYgKHNlY3Rpb25IZWFkZXIgPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblx0XHRzZWN0aW9uSGVhZGVyLmNsYXNzTmFtZSA9IGNscztcclxuXHRcdHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkZXI7XHJcblx0XHRjb25zdCByZWxhdGl2ZSA9IHNlY3Rpb24uZmlyc3RDaGlsZDtcclxuXHRcdGlmIChyZWxhdGl2ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRzZWN0aW9uLmluc2VydEJlZm9yZShyZWxhdGl2ZSwgc2VjdGlvbkhlYWRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xzID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24tY29udGVudFwiO1xyXG5cdGxldCBzZWN0aW9uQ29udGVudCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihgLiR7Y2xzfWApO1xyXG5cdGlmIChzZWN0aW9uQ29udGVudCA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2VjdGlvbkNvbnRlbnQuY2xhc3NOYW1lID0gY2xzO1xyXG5cdFx0c2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2VjdGlvbkNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rLFxyXG5cdGluaXRpYWxpemUsXHJcblx0YWRkU2VjdGlvblxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGlzRGFyaygpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluZGV4T2YoXCJleGhlbnRhaVwiKSA+PSAwIHx8XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwieC1mb3JjZS1kYXJrXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RG9jdW1lbnREYXJrRmxhZygpIHtcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIngtaXMtZGFya1wiLCBpc0RhcmsoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFycm93SWNvblVybCgpIHtcclxuXHRyZXR1cm4gKGlzRGFyaygpID8gXCJodHRwczovL2V4aGVudGFpLm9yZy9pbWcvbXIuZ2lmXCIgOiBcImh0dHBzOi8vZWhndC5vcmcvZy9tci5naWZcIik7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpc0RhcmssXHJcblx0c2V0RG9jdW1lbnREYXJrRmxhZyxcclxuXHRnZXRBcnJvd0ljb25VcmxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi54LXNldHRpbmdzLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbi10b3A6LTFlbX0ueC1zZXR0aW5ncy1jb250YWluZXIueC1zZXR0aW5ncy1jb250YWluZXItaGlkZGVue2Rpc3BsYXk6bm9uZX0ueC1zZXR0aW5ncy1oaWRkZW57ZGlzcGxheTpub25lIWltcG9ydGFudH0ueC1zZXR0aW5ncy1vcHRpb24gc2VsZWN0e21hcmdpbi1yaWdodDouNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tY29udGFpbmVye2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttYXJnaW4tdG9wOjFlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRlbnR7bWFyZ2luOjhweCBhdXRvIDEwcHggMTBweDtjbGVhcjpib3RofS54LXNldHRpbmdzLXNlY3Rpb24taGVhZGVye2ZvbnQtc2l6ZToxLjI1ZW07bGluZS1oZWlnaHQ6MS41ZW07bWFyZ2luOi4yNWVtIDB9Lngtc2V0dGluZ3Mtc2VjdGlvbntkaXNwbGF5OmZsZXg7ZmxleC1mbG93OnJvdyB3cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQ7ZmxleC13cmFwOm5vd3JhcDt3aWR0aDoxMDAlO3BhZGRpbmc6LjVlbSAwfS54LXNldHRpbmdzLXNlY3Rpb24rLngtc2V0dGluZ3Mtc2VjdGlvbntib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4yNSl9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXNldHRpbmdzLXNlY3Rpb24rLngtc2V0dGluZ3Mtc2VjdGlvbntib3JkZXItdG9wLWNvbG9yOnJnYmEoOTIsMTMsMTgsLjI1KX0ueC1zZXR0aW5ncy1zZWN0aW9uLWxlZnR7ZmxleDoxIDEgYXV0bztwYWRkaW5nLXJpZ2h0Oi41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodHtmbGV4OjAgMCBhdXRvO21pbi13aWR0aDozMCU7dGV4dC1hbGlnbjpyaWdodH0ueC1zZXR0aW5ncy1zZWN0aW9uLXRpdGxle2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxLjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9ue2xpbmUtaGVpZ2h0OjEuMzVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uKy54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb257bWFyZ2luLXRvcDouMjVlbX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdLGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MDttYXJnaW46MDtwYWRkaW5nOi4yNWVtIC41ZW07bGluZS1oZWlnaHQ6MS4zNzVlbTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290Om5vdCgueC1pcy1kYXJrKSBpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdLDpyb290Om5vdCgueC1pcy1kYXJrKSBpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDF9aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17d2lkdGg6MjBlbX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJde3dpZHRoOjVlbTstbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24saW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTttYXJnaW46MH10ZXh0YXJlYS54LXNldHRpbmdzLXNlY3Rpb24tdGV4dGFyZWF7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO21hcmdpbjowO3BhZGRpbmc6LjI1ZW0gLjVlbTtsaW5lLWhlaWdodDoxLjM3NWVtO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtyZXNpemU6dmVydGljYWw7Zm9udC1zaXplOmluaGVyaXQ7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjEuODc1ZW07aGVpZ2h0OjQuNjI1ZW07Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtZmFtaWx5OlxcXCJDb3VyaWVyIE5ld1xcXCIsQ291cmllcixtb25vc3BhY2V9OnJvb3Q6bm90KC54LWlzLWRhcmspIHRleHRhcmVhLngtc2V0dGluZ3Mtc2VjdGlvbi10ZXh0YXJlYXtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDF9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyIC5sY3tkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6LTZweH0ueC1zZXR0aW5ncy1jb250YWluZXIgY29kZXtmb250LWZhbWlseTonQ291cmllciBOZXcnLENvdXJpZXIsbW9ub3NwYWNlO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtmb250LXdlaWdodDo3MDB9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXNldHRpbmdzLWNvbnRhaW5lciBjb2Rle2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX0ueC1zZXR0aW5ncy1saWdodC10ZXh0e2ZvbnQtd2VpZ2h0OjQwMDtvcGFjaXR5Oi43NX0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpsZWZ0fS54LXNldHRpbmdzLWlucHV0LXRhYmxle2Rpc3BsYXk6dGFibGV9Lngtc2V0dGluZ3MtaW5wdXQtcm93e2Rpc3BsYXk6dGFibGUtcm93fS54LXNldHRpbmdzLWlucHV0LXJvdy54LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3d7Zm9udC1zaXplOi44ZW07bGluZS1oZWlnaHQ6MWVtO29wYWNpdHk6Ljc1fS54LXNldHRpbmdzLWlucHV0LWNlbGx7ZGlzcGxheTp0YWJsZS1jZWxsfS54LXNldHRpbmdzLWlucHV0LWNlbGwrLngtc2V0dGluZ3MtaW5wdXQtY2VsbHtwYWRkaW5nLWxlZnQ6LjI1ZW19Lngtc2V0dGluZ3MtaW5wdXQtcm93Om5vdCgueC1zZXR0aW5ncy1pbnB1dC1oZWFkZXItcm93KSsueC1zZXR0aW5ncy1pbnB1dC1yb3c+Lngtc2V0dGluZ3MtaW5wdXQtY2VsbHtwYWRkaW5nLXRvcDouMjVlbX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsLngtc2V0dGluZ3MtaW5wdXQtY2VsbC1taWRkbGV7dmVydGljYWwtYWxpZ246bWlkZGxlfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLWZpbGx7d2lkdGg6MTAwJX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsLngtc2V0dGluZ3MtaW5wdXQtY2VsbC1ub3dyYXB7d2hpdGUtc3BhY2U6bm93cmFwfS54LXNldHRpbmdzLWlucHV0LWxhYmVse2N1cnNvcjpwb2ludGVyO21hcmdpbjowIDAgMCAxZW19Lngtc2V0dGluZ3MtaW5wdXQtY2hlY2tib3gtcHJlZml4e3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLXJpZ2h0Oi41ZW19XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBnbSA9IHJlcXVpcmUoXCIuL2dtXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpIHtcclxuXHRsZXQgY29uZmlnID0gbnVsbDtcclxuXHRsZXQgY29uZmlnR2V0UHJvbWlzZSA9IG51bGw7XHJcblxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnKCkge1xyXG5cdFx0Y29uc3QgY29uZmlnU3RyaW5nID0gYXdhaXQgZ20uZ2V0VmFsdWUoY29uZmlnS2V5LCBudWxsKTtcclxuXHRcdGlmICh0eXBlb2YoY29uZmlnU3RyaW5nKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IGMgPSBKU09OLnBhcnNlKGNvbmZpZ1N0cmluZyk7XHJcblx0XHRcdFx0aWYgKGMgIT09IG51bGwgJiYgdHlwZW9mKGMpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGMpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRGVmYXVsdCwgYyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ0RlZmF1bHQpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0aWYgKGNvbmZpZyAhPT0gbnVsbCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7IH1cclxuXHJcblx0XHRpZiAoY29uZmlnR2V0UHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRjb25maWdHZXRQcm9taXNlID0gbG9hZENvbmZpZygpLnRoZW4oKHYpID0+IGNvbmZpZyA9IHYpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb25maWdHZXRQcm9taXNlO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gc2F2ZSgpIHtcclxuXHRcdGlmIChjb25maWcgIT09IG51bGwpIHtcclxuXHRcdFx0YXdhaXQgZ20uc2V0VmFsdWUoY29uZmlnS2V5LCBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIFwiXCIpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGJpbmRJbnB1dChub2RlLCBzZXR0aW5nTmFtZSwgb3B0aW9ucywgdmFsdWVOYW1lKSB7XHJcblx0XHRjb25zdCBjID0gYXdhaXQgZ2V0KCk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZih2YWx1ZU5hbWUpID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHZhbHVlTmFtZSA9IGdldERlZmF1bHRWYWx1ZU5hbWUobm9kZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlSW5wdXQgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHt2YWx1ZSwgdmFsaWR9ID0gY29udmVydFRvVHlwZShjW3NldHRpbmdOYW1lXSwgb3B0aW9ucywgdHJ1ZSk7XHJcblx0XHRcdGlmICh2YWxpZCkgeyBub2RlW3ZhbHVlTmFtZV0gPSB2YWx1ZTsgfVxyXG5cdFx0fTtcclxuXHJcblx0XHR1cGRhdGVJbnB1dCgpO1xyXG5cclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHt2YWx1ZSwgdmFsaWR9ID0gY29udmVydFRvVHlwZShub2RlW3ZhbHVlTmFtZV0sIG9wdGlvbnMsIGZhbHNlKTtcclxuXHRcdFx0aWYgKHZhbGlkKSB7XHJcblx0XHRcdFx0Y1tzZXR0aW5nTmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRzYXZlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVwZGF0ZUlucHV0KCk7XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdldCxcclxuXHRcdHNhdmUsXHJcblx0XHRiaW5kSW5wdXRcclxuXHR9O1xyXG59XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdFR5cGVDb252ZXJ0T3B0aW9ucyA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZU5hbWUobm9kZSkge1xyXG5cdHN3aXRjaCAobm9kZS50YWdOYW1lKSB7XHJcblx0XHRjYXNlIFwiSU5QVVRcIjpcclxuXHRcdFx0aWYgKG5vZGUudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7IHJldHVybiBcImNoZWNrZWRcIjsgfVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdHJldHVybiBcInZhbHVlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb1R5cGUodmFsdWUsIG9wdGlvbnMsIHRvSW5wdXQpIHtcclxuXHRpZiAodHlwZW9mKG9wdGlvbnMpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIG9wdGlvbnMsIGRlZmF1bHRUeXBlQ29udmVydE9wdGlvbnMsIHRvSW5wdXQpO1xyXG5cdH0gaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgdHlwZW9mKG9wdGlvbnMpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZihvcHRpb25zLnR5cGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIG9wdGlvbnMudHlwZSwgb3B0aW9ucywgdG9JbnB1dCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiB7IHZhbHVlLCB2YWxpZDogdHJ1ZSB9O1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIHR5cGVOYW1lLCBvcHRpb25zLCB0b0lucHV0KSB7XHJcblx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcblx0Ly8gQ29udmVydFxyXG5cdHN3aXRjaCAodHlwZU5hbWUpIHtcclxuXHRcdGNhc2UgXCJib29sZWFuXCI6XHJcblx0XHRcdHZhbHVlID0gISF2YWx1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiaW50ZWdlclwiOlxyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHR2YWx1ZSA9ICh0eXBlTmFtZSA9PT0gXCJudW1iZXJcIiA/IHBhcnNlRmxvYXQoYCR7dmFsdWV9YCkgOiBwYXJzZUludChgJHt2YWx1ZX1gLCAxMCkpO1xyXG5cdFx0XHRpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IDA7XHJcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIFRyYW5zZm9ybVxyXG5cdGlmICghdG9JbnB1dCAmJiB0eXBlb2Yob3B0aW9ucy5pbnB1dFRvVmFsdWUpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHZhbHVlID0gb3B0aW9ucy5pbnB1dFRvVmFsdWUodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gTGltaXRzXHJcblx0c3dpdGNoICh0eXBlTmFtZSkge1xyXG5cdFx0Y2FzZSBcImludGVnZXJcIjpcclxuXHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1pbikgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPCBvcHRpb25zLm1pbikgeyB2YWx1ZSA9IG9wdGlvbnMubWluOyB9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5tYXgpID09PSBcIm51bWJlclwiICYmIHZhbHVlID4gb3B0aW9ucy5tYXgpIHsgdmFsdWUgPSBvcHRpb25zLm1heDsgfVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1heExlbmd0aCkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUubGVuZ3RoID4gb3B0aW9ucy5tYXhMZW5ndGgpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBvcHRpb25zLm1heExlbmd0aCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHQvLyBUcmFuc2Zvcm1cclxuXHRpZiAodG9JbnB1dCAmJiB0eXBlb2Yob3B0aW9ucy52YWx1ZVRvSW5wdXQpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHZhbHVlID0gb3B0aW9ucy52YWx1ZVRvSW5wdXQodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdmFsdWUsIHZhbGlkIH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBjb25maWdLZXkgPSBcIngtZnVsbC10aXRsZS1jb25maWdcIjtcclxuY29uc3QgY29uZmlnRGVmYXVsdCA9IHtcclxuXHRkaXNwbGF5TW9kZTogXCJob3ZlclwiIC8vIFwibm9uZVwiLCBcImhvdmVyXCIsIFwiYWx3YXlzXCJcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKS5jcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCByZWFkeSA9IHJlcXVpcmUoXCIuLi9yZWFkeVwiKTtcclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuY29uc3Qgc2V0dGluZ3MgPSByZXF1aXJlKFwiLi4vYXBpL3NldHRpbmdzXCIpO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVTZXR0aW5ncygpIHtcclxuXHRzZXR0aW5ncy5pbml0aWFsaXplKCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb24gPSBzZXR0aW5ncy5hZGRTZWN0aW9uKFwiRnVsbCBUaXRsZVwiLCBcImZ1bGwtdGl0bGVcIiwgMCk7XHJcblx0aWYgKHNlY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdGF3YWl0IHNldHVwU2V0dGluZ3Moc2VjdGlvbik7XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXR1cFNldHRpbmdzKGNvbnRhaW5lcikge1xyXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSByZXF1aXJlKFwiLi9zZXR0aW5ncy5odG1sXCIpO1xyXG5cdGJpbmRJbnB1dChjb250YWluZXIsIFwiZGlzcGxheU1vZGVcIiwgXCJzdHJpbmdcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRJbnB1dChjb250YWluZXIsIHNldHRpbmdOYW1lLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS14LXNldHRpbmdzLWZvcj0ke3NldHRpbmdOYW1lfV1gKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25maWcuYmluZElucHV0KGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS14LXNldHRpbmdzLWZvcj0ke3NldHRpbmdOYW1lfV1gKSwgc2V0dGluZ05hbWUsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplTW9kZSgpIHtcclxuXHRjb25zdCBjID0gYXdhaXQgY29uZmlnLmdldCgpO1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlXCIsIGMuZGlzcGxheU1vZGUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuXHRzZXR0aW5ncy5hZGRMaW5rKCk7XHJcblxyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdGlmIChjdXJyZW50UGFnZVR5cGUgPT09IFwic2V0dGluZ3NcIikge1xyXG5cdFx0aW5pdGlhbGl6ZVNldHRpbmdzKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpZCA9IFwieC1mdWxsLXRpdGxlXCI7XHJcblx0aWYgKCFzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkge1xyXG5cdFx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xyXG5cdFx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemVNb2RlKCk7XHJcbn1cclxuXHJcblxyXG5yZWFkeS5vblJlYWR5KG1haW4pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uXFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tbGVmdFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXRpdGxlXFxcIj5EaXNwbGF5IG1vZGU8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tcmlnaHRcXFwiPlxcclxcblxcdFxcdDxzZWxlY3QgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwiZGlzcGxheU1vZGVcXFwiPlxcclxcblxcdFxcdFxcdDxvcHRpb24gdmFsdWU9XFxcIm5vbmVcXFwiPk5vbmU8L29wdGlvbj5cXHJcXG5cXHRcXHRcXHQ8b3B0aW9uIHZhbHVlPVxcXCJob3ZlclxcXCI+SG92ZXI8L29wdGlvbj5cXHJcXG5cXHRcXHRcXHQ8b3B0aW9uIHZhbHVlPVxcXCJhbHdheXNcXFwiPkFsd2F5czwvb3B0aW9uPlxcclxcblxcdFxcdDwvc2VsZWN0PlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuaXRnPi5nbDF0PmE6Zmlyc3Qtb2YtdHlwZXtvdmVyZmxvdzpoaWRkZW47bWluLWhlaWdodDozMnB4O21heC1oZWlnaHQ6MzJweDttYXJnaW46NnB4IDRweCAwO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9Lml0Zz4uZ2wxdD5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZXtvdmVyZmxvdzp2aXNpYmxlO21pbi1oZWlnaHQ6YXV0bzttYXgtaGVpZ2h0Om5vbmU7bWFyZ2luOjB9OnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ+LmdsbmFtZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdD5hOmZpcnN0LW9mLXR5cGUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3Zlcj4uZ2xuYW1lLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI+YTpmaXJzdC1vZi10eXBle292ZXJmbG93OnZpc2libGU7ei1pbmRleDoxMH06cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdD5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1le3BhZGRpbmctYm90dG9tOi4yNWVtfTpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9YWx3YXlzXSAuaXRnPi5nbDF0Pi5nbG5hbWU+ZGl2OmZpcnN0LW9mLXR5cGUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3Zlcj4uZ2xuYW1lPmRpdjpmaXJzdC1vZi10eXBle3BhZGRpbmctYm90dG9tOi4yNWVtO21hcmdpbi1yaWdodDotMzBweDtwYWRkaW5nLXJpZ2h0OjMwcHh9OnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzEpPi5nbG5hbWU+ZGl2OmZpcnN0LW9mLXR5cGUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzEpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI6bnRoLWNoaWxkKDJuKzEpPi5nbG5hbWU+ZGl2OmZpcnN0LW9mLXR5cGUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3ZlcjpudGgtY2hpbGQoMm4rMSk+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MiwyNDAsMjI4LC43NSl9OnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzIpPi5nbG5hbWU+ZGl2OmZpcnN0LW9mLXR5cGUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzIpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI6bnRoLWNoaWxkKDJuKzIpPi5nbG5hbWU+ZGl2OmZpcnN0LW9mLXR5cGUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3ZlcjpudGgtY2hpbGQoMm4rMik+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIzNywyMzUsMjIzLC43NSl9OnJvb3QueC1pcy1kYXJrW2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9YWx3YXlzXSAuaXRnPi5nbDF0Om50aC1jaGlsZCgybisxKT5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZSw6cm9vdC54LWlzLWRhcmtbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3ZlcjpudGgtY2hpbGQoMm4rMSk+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzEpPi5nbG5hbWU+ZGl2OmZpcnN0LW9mLXR5cGUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3ZlcjpudGgtY2hpbGQoMm4rMSk+LmdsbmFtZT5kaXY6Zmlyc3Qtb2YtdHlwZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNTQsNTcsNjQsLjc1KX06cm9vdC54LWlzLWRhcmtbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzIpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290LngtaXMtZGFya1tkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyOm50aC1jaGlsZCgybisyKT5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMik+LmdsbmFtZT5kaXY6Zmlyc3Qtb2YtdHlwZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyOm50aC1jaGlsZCgybisyKT4uZ2xuYW1lPmRpdjpmaXJzdC1vZi10eXBle2JhY2tncm91bmQtY29sb3I6cmdiYSg2MCw2NSw3NSwuNzUpfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9Qcm9taXNlKGZuLCBzZWxmKSB7XHJcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc29sdmUoZm4uYXBwbHkoc2VsZiwgYXJncykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBnbSA9ICgob2JqZWN0cykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB2ID0gR007IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cdFx0aWYgKHYgIT09IG51bGwgJiYgdHlwZW9mKHYpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdHJldHVybiB2O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGlmIChvYmouR00gIT09IG51bGwgJiYgdHlwZW9mKG9iai5HTSkgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2JqLkdNO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNhdGNoIChlKSB7IH1cclxuXHJcblx0Y29uc3QgbWFwcGluZyA9IFtcclxuXHRcdFsgXCJnZXRWYWx1ZVwiLCBcIkdNX2dldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJzZXRWYWx1ZVwiLCBcIkdNX3NldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJkZWxldGVWYWx1ZVwiLCBcIkdNX2RlbGV0ZVZhbHVlXCIgXSxcclxuXHRcdFsgXCJ4bWxIdHRwUmVxdWVzdFwiLCBcIkdNX3htbGh0dHBSZXF1ZXN0XCIgXVxyXG5cdF07XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcHBpbmcpIHtcclxuXHRcdGxldCBwcm9taXNlID0gbnVsbDtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0Y29uc3QgZm4gPSBvYmpbdmFsdWVdO1xyXG5cdFx0XHRpZiAodHlwZW9mKGZuKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0cHJvbWlzZSA9IHRvUHJvbWlzZShmbiwgb2JqKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0cHJvbWlzZSA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdChuZXcgRXJyb3IoYE5vdCBzdXBwb3J0ZWQgKCR7a2V5fSlgKSkpO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0W2tleV0gPSBwcm9taXNlO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59KS5jYWxsKHRoaXMsIFt0aGlzLCB3aW5kb3ddKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgYXBpU3R5bGUgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldElkKGlkKSB7XHJcblx0cmV0dXJuIGAke2lkfS1zdHlsZXNoZWV0YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRJZChpZCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuICEhZ2V0U3R5bGVzaGVldChpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc2hlZXQoc291cmNlLCBpZCkge1xyXG5cdGlmIChhcGlTdHlsZSA9PT0gbnVsbCkgeyBhcGlTdHlsZSA9IHJlcXVpcmUoXCIuL2FwaS9zdHlsZVwiKTsgfVxyXG5cdGFwaVN0eWxlLnNldERvY3VtZW50RGFya0ZsYWcoKTtcclxuXHJcblx0Y29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGUudGV4dENvbnRlbnQgPSBzb3VyY2U7XHJcblx0aWYgKHR5cGVvZihpZCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHN0eWxlLmlkID0gZ2V0SWQoaWQpO1xyXG5cdH1cclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHRyZXR1cm4gc3R5bGU7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRoYXNTdHlsZXNoZWV0LFxyXG5cdGdldFN0eWxlc2hlZXQsXHJcblx0YWRkU3R5bGVzaGVldFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCB4UHJlZml4ID0gXCIjIXhcIjtcclxuY29uc3Qgc2VwYXJhdG9yID0gXCIvXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFtdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKGFkZEhpc3RvcnkpIHtcclxuXHRjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdGlmIChhZGRIaXN0b3J5KSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUocGF0aCkge1xyXG5cdHJldHVybiBwYXRoID8gYCR7eFByZWZpeH0ke3NlcGFyYXRvcn0ke3BhdGh9YCA6IHhQcmVmaXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGNvbnN0IHJvdXRlID0geyBtYXRjaCwgY2FsbGJhY2sgfTtcclxuXHRyb3V0ZXMucHVzaChyb3V0ZSk7XHJcblx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDEpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHR9XHJcblx0dGVzdFJvdXRlcyhbcm91dGVdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Zm9yIChsZXQgaSA9IDAsIGlpID0gcm91dGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdGNvbnN0IHJvdXRlID0gcm91dGVzW2ldO1xyXG5cdFx0aWYgKHJvdXRlLm1hdGNoID09PSBtYXRjaCAmJiByb3V0ZS5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcclxuXHRcdFx0cm91dGVzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WEZyYWdtZW50KCkge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblx0cmV0dXJuIChcclxuXHRcdCFmcmFnbWVudCB8fFxyXG5cdFx0ZnJhZ21lbnQubGVuZ3RoIDwgeFByZWZpeC5sZW5ndGggfHxcclxuXHRcdGZyYWdtZW50LnN1YnN0cigwLCB4UHJlZml4Lmxlbmd0aCkgIT09IHhQcmVmaXggfHxcclxuXHRcdChmcmFnbWVudC5sZW5ndGggPiB4UHJlZml4Lmxlbmd0aCAmJiBmcmFnbWVudFt4UHJlZml4Lmxlbmd0aF0gIT09IHNlcGFyYXRvcikpID9cclxuXHRcdG51bGwgOlxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKHhQcmVmaXgubGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdFJvdXRlcyhyb3V0ZXMpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IGdldFhGcmFnbWVudCgpO1xyXG5cdGlmIChmcmFnbWVudCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Zm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcm91dGUubWF0Y2guZXhlYyhmcmFnbWVudCk7XHJcblx0XHRyb3V0ZS5jYWxsYmFjayhtYXRjaCwgZnJhZ21lbnQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25VcmxGcmFnbWVudENoYW5nZWQoKSB7XHJcblx0dGVzdFJvdXRlcyhyb3V0ZXMpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y2xlYXI6IGNsZWFyLFxyXG5cdGNyZWF0ZTogY3JlYXRlLFxyXG5cdGFkZFJvdXRlOiBhZGRSb3V0ZSxcclxuXHRyZW1vdmVSb3V0ZTogcmVtb3ZlUm91dGVcclxufTtcclxuIl19
