// ==UserScript==
// @name        x/full-title
// @version     1.1.9
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

	const style = document.createElement("link");
	style.rel = "stylesheet";
	style.href = `data:text/css;base64,${window.btoa(source)}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvc2V0dGluZ3MuY3NzIiwic3JjL2NvbmZpZy5qcyIsInNyYy9mdWxsLXRpdGxlL2NvbmZpZy5qcyIsInNyYy9mdWxsLXRpdGxlL21haW4uanMiLCJzcmMvZnVsbC10aXRsZS9zZXR0aW5ncy5odG1sIiwic3JjL2Z1bGwtdGl0bGUvc3R5bGUuY3NzIiwic3JjL2dtLmpzIiwic3JjL3JlYWR5LmpzIiwic3JjL3N0eWxlLmpzIiwic3JjL3VybC1mcmFnbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKGxhYmVsLCB1cmwsIG9yZGVyKSB7XHJcblx0Y29uc3QgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJcIik7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0YS5ocmVmID0gdXJsO1xyXG5cdGEudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuXHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0ZGl2LnN0eWxlLm9yZGVyID0gYCR7b3JkZXJ9YDtcclxuXHR9XHJcblx0ZGl2LmFwcGVuZENoaWxkKGEpO1xyXG5cdG4uYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0cmV0dXJuIGRpdjtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBvdmVycmlkZUF0dHJpYnV0ZU5hbWUgPSBcImRhdGEteC1vdmVycmlkZS1wYWdlLXR5cGVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRPdmVycmlkZSh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3ZlcnJpZGUoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0cmV0dXJuIHZhbHVlID8gdmFsdWUgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoZG9jLCBsb2NhdGlvbikge1xyXG5cdGNvbnN0IG92ZXJyaWRlVHlwZSA9IGdldE92ZXJyaWRlKCk7XHJcblx0aWYgKG92ZXJyaWRlVHlwZSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIG92ZXJyaWRlVHlwZTtcclxuXHR9XHJcblxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hib3hcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNlYXJjaFwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPWZhdmNhdF1cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImZhdm9yaXRlc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjaTE+aDFcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImltYWdlXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIi5nbSBoMSNnblwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZ2FsbGVyeVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9vdXRlclwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2V0dGluZ3NcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3RvcnJlbnRpbmZvXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJ0b3JyZW50SW5mb1wiO1xyXG5cdH1cclxuXHJcblx0bGV0IG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImJvZHk+LmQ+cFwiKTtcclxuXHRpZiAoXHJcblx0XHQobiAhPT0gbnVsbCAmJiAvZ2FsbGVyeVxccytoYXNcXHMrYmVlblxccytyZW1vdmVkL2kudGVzdChuLnRleHRDb250ZW50KSkgfHxcclxuXHRcdGRvYy5xdWVyeVNlbGVjdG9yKFwiLmV6ZV9kZ2FsbGVyeV90YWJsZVwiKSAhPT0gbnVsbCkgeyAvLyBlemUgcmVzdXJyZWN0aW9uXHJcblx0XHRyZXR1cm4gXCJkZWxldGVkR2FsbGVyeVwiO1xyXG5cdH1cclxuXHJcblx0biA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0aWYgKG4gIT09IG51bGwgJiYgbG9jYXRpb24gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IHAgPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdGlmIChcclxuXHRcdFx0bi5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT09IGxvY2F0aW9uLmhyZWYgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgMykgIT09IFwiL3QvXCIgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgNSkgIT09IFwiL2ltZy9cIikge1xyXG5cdFx0XHRyZXR1cm4gXCJwYW5kYVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVW5rbm93blxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0LFxyXG5cdGdldE92ZXJyaWRlLFxyXG5cdHNldE92ZXJyaWRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5jb25zdCB1cmxGcmFnbWVudCA9IHJlcXVpcmUoXCIuLi91cmwtZnJhZ21lbnRcIik7XHJcblxyXG5cclxuY29uc3Qgc2V0dGluZ3NDb250YWluZXJDbGFzcyA9IFwieC1zZXR0aW5ncy1jb250YWluZXJcIjtcclxuY29uc3Qgc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcyA9IFwieC1zZXR0aW5ncy1jb250YWluZXItaGlkZGVuXCI7XHJcbmNvbnN0IGRlZmF1bHRTZXR0aW5nc0hpZGRlbkNsYXNzID0gXCJ4LXNldHRpbmdzLWhpZGRlblwiO1xyXG5cclxubGV0IHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPSBudWxsO1xyXG5sZXQgc2V0dGluZ3NDb250YWluZXIgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExpbmsoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtbmF2LXNldHRpbmdzLWxpbmtcIjtcclxuXHJcblx0bGV0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0aWYgKG4gIT09IG51bGwpIHsgcmV0dXJuIG47IH1cclxuXHJcblx0Y29uc3QgbmF2QmFyID0gcmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXJcIik7XHJcblx0biA9IG5hdkJhci5hZGRMaW5rKFwieFwiLCBgL3Vjb25maWcucGhwJHt1cmxGcmFnbWVudC5jcmVhdGUoXCJzZXR0aW5nc1wiKX1gLCAxKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRuLmlkID0gaWQ7XHJcblx0cmV0dXJuIG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0c2V0dGluZ3NDb250YWluZXJPdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0ZXIuc3R1ZmZib3hcIik7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdHNldHRpbmdzQ29udGFpbmVyID0gc2V0dGluZ3NDb250YWluZXJPdXRlci5xdWVyeVNlbGVjdG9yKGAuJHtzZXR0aW5nc0NvbnRhaW5lckNsYXNzfWApO1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkge1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gYCR7c2V0dGluZ3NDb250YWluZXJDbGFzc30gJHtzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzfWA7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lck91dGVyLmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlkID0gXCJ4LXNldHRpbmdzXCI7XHJcblx0aWYgKCFzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkge1xyXG5cdFx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUvc2V0dGluZ3MuY3NzXCIpO1xyXG5cdFx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxuXHR9XHJcblxyXG5cdHVybEZyYWdtZW50LmFkZFJvdXRlKC9eXFwvc2V0dGluZ3MoXFwvW1xcd1xcV10qKT8kLywgb25TZXR0aW5nc1BhZ2VDaGFuZ2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25TZXR0aW5nc1BhZ2VDaGFuZ2VkKG1hdGNoKSB7XHJcblx0c2V0U2V0dGluZ3NWaXNpYmxlKG1hdGNoICE9PSBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2V0dGluZ3NWaXNpYmxlKHZpc2libGUpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXJPdXRlciA9PT0gbnVsbCB8fCBzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzKSAhPT0gdmlzaWJsZSkge1xyXG5cdFx0Ly8gTm8gY2hhbmdlXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MsICF2aXNpYmxlKTtcclxuXHJcblx0Zm9yIChjb25zdCBjaGlsZCBvZiBzZXR0aW5nc0NvbnRhaW5lck91dGVyLmNoaWxkcmVuKSB7XHJcblx0XHRpZiAoY2hpbGQgPT09IHNldHRpbmdzQ29udGFpbmVyKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKGRlZmF1bHRTZXR0aW5nc0hpZGRlbkNsYXNzLCB2aXNpYmxlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNlY3Rpb24oaGVhZGVyLCBpZCwgb3JkZXIpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZnVsbElkID0gYHgtc2V0dGluZ3Mtc2VjdGlvbi0ke2lkfWA7XHJcblxyXG5cdGxldCBzZWN0aW9uID0gc2V0dGluZ3NDb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7ZnVsbElkfWApO1xyXG5cdGlmIChzZWN0aW9uID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNlY3Rpb24uaWQgPSBmdWxsSWQ7XHJcblx0XHRzZWN0aW9uLmNsYXNzTmFtZSA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRhaW5lclwiO1xyXG5cdFx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0c2VjdGlvbi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblx0fVxyXG5cclxuXHRsZXQgY2xzID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24taGVhZGVyXCI7XHJcblx0bGV0IHNlY3Rpb25IZWFkZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nsc31gKTtcclxuXHRpZiAoc2VjdGlvbkhlYWRlciA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHRcdHNlY3Rpb25IZWFkZXIuY2xhc3NOYW1lID0gY2xzO1xyXG5cdFx0c2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlcjtcclxuXHRcdGNvbnN0IHJlbGF0aXZlID0gc2VjdGlvbi5maXJzdENoaWxkO1xyXG5cdFx0aWYgKHJlbGF0aXZlICE9PSBudWxsKSB7XHJcblx0XHRcdHNlY3Rpb24uaW5zZXJ0QmVmb3JlKHJlbGF0aXZlLCBzZWN0aW9uSGVhZGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbHMgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1jb250ZW50XCI7XHJcblx0bGV0IHNlY3Rpb25Db250ZW50ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKGAuJHtjbHN9YCk7XHJcblx0aWYgKHNlY3Rpb25Db250ZW50ID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uQ29udGVudC5jbGFzc05hbWUgPSBjbHM7XHJcblx0XHRzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzZWN0aW9uQ29udGVudDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmssXHJcblx0aW5pdGlhbGl6ZSxcclxuXHRhZGRTZWN0aW9uXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gaXNEYXJrKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDAgfHxcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4LWZvcmNlLWRhcmtcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb2N1bWVudERhcmtGbGFnKCkge1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1pcy1kYXJrXCIsIGlzRGFyaygpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXJyb3dJY29uVXJsKCkge1xyXG5cdHJldHVybiAoaXNEYXJrKCkgPyBcImh0dHBzOi8vZXhoZW50YWkub3JnL2ltZy9tci5naWZcIiA6IFwiaHR0cHM6Ly9laGd0Lm9yZy9nL21yLmdpZlwiKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGlzRGFyayxcclxuXHRzZXREb2N1bWVudERhcmtGbGFnLFxyXG5cdGdldEFycm93SWNvblVybFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtc2V0dGluZ3MtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLXRvcDotMWVtfS54LXNldHRpbmdzLWNvbnRhaW5lci54LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW57ZGlzcGxheTpub25lfS54LXNldHRpbmdzLWhpZGRlbntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS54LXNldHRpbmdzLW9wdGlvbiBzZWxlY3R7bWFyZ2luLXJpZ2h0Oi41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21hcmdpbi10b3A6MWVtfS54LXNldHRpbmdzLXNlY3Rpb24tY29udGVudHttYXJnaW46OHB4IGF1dG8gMTBweCAxMHB4O2NsZWFyOmJvdGh9Lngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJ7Zm9udC1zaXplOjEuMjVlbTtsaW5lLWhlaWdodDoxLjVlbTttYXJnaW46LjI1ZW0gMH0ueC1zZXR0aW5ncy1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IHdyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4LXdyYXA6bm93cmFwO3dpZHRoOjEwMCU7cGFkZGluZzouNWVtIDB9Lngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjI1KX06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3AtY29sb3I6cmdiYSg5MiwxMywxOCwuMjUpfS54LXNldHRpbmdzLXNlY3Rpb24tbGVmdHtmbGV4OjEgMSBhdXRvO3BhZGRpbmctcmlnaHQ6LjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0e2ZsZXg6MCAwIGF1dG87bWluLXdpZHRoOjMwJTt0ZXh0LWFsaWduOnJpZ2h0fS54LXNldHRpbmdzLXNlY3Rpb24tdGl0bGV7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb257bGluZS1oZWlnaHQ6MS4zNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb24rLngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbnttYXJnaW4tdG9wOi4yNWVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0saW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO21hcmdpbjowO3BhZGRpbmc6LjI1ZW0gLjVlbTtsaW5lLWhlaWdodDoxLjM3NWVtO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0sOnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXt3aWR0aDoyMGVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl17d2lkdGg6NWVtOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfXRleHRhcmVhLngtc2V0dGluZ3Mtc2VjdGlvbi10ZXh0YXJlYXtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjA7cGFkZGluZzouMjVlbSAuNWVtO2xpbmUtaGVpZ2h0OjEuMzc1ZW07YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO3Jlc2l6ZTp2ZXJ0aWNhbDtmb250LXNpemU6aW5oZXJpdDt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MS44NzVlbTtoZWlnaHQ6NC42MjVlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1mYW1pbHk6XFxcIkNvdXJpZXIgTmV3XFxcIixDb3VyaWVyLG1vbm9zcGFjZX06cm9vdDpub3QoLngtaXMtZGFyaykgdGV4dGFyZWEueC1zZXR0aW5ncy1zZWN0aW9uLXRleHRhcmVhe2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXIgLmxje2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDotNnB4fS54LXNldHRpbmdzLWNvbnRhaW5lciBjb2Rle2ZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsQ291cmllcixtb25vc3BhY2U7YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO2ZvbnQtd2VpZ2h0OjcwMH06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3MtY29udGFpbmVyIGNvZGV7YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfS54LXNldHRpbmdzLWxpZ2h0LXRleHR7Zm9udC13ZWlnaHQ6NDAwO29wYWNpdHk6Ljc1fS54LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmxlZnR9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGV7ZGlzcGxheTp0YWJsZX0ueC1zZXR0aW5ncy1pbnB1dC1yb3d7ZGlzcGxheTp0YWJsZS1yb3d9Lngtc2V0dGluZ3MtaW5wdXQtcm93Lngtc2V0dGluZ3MtaW5wdXQtaGVhZGVyLXJvd3tmb250LXNpemU6LjhlbTtsaW5lLWhlaWdodDoxZW07b3BhY2l0eTouNzV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGx9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbCsueC1zZXR0aW5ncy1pbnB1dC1jZWxse3BhZGRpbmctbGVmdDouMjVlbX0ueC1zZXR0aW5ncy1pbnB1dC1yb3c6bm90KC54LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3cpKy54LXNldHRpbmdzLWlucHV0LXJvdz4ueC1zZXR0aW5ncy1pbnB1dC1jZWxse3BhZGRpbmctdG9wOi4yNWVtfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLW1pZGRsZXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtZmlsbHt3aWR0aDoxMDAlfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLW5vd3JhcHt3aGl0ZS1zcGFjZTpub3dyYXB9Lngtc2V0dGluZ3MtaW5wdXQtbGFiZWx7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjAgMCAwIDFlbX0ueC1zZXR0aW5ncy1pbnB1dC1jaGVja2JveC1wcmVmaXh7dmVydGljYWwtYWxpZ246bWlkZGxlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctcmlnaHQ6LjVlbX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZ0tleSwgY29uZmlnRGVmYXVsdCkge1xyXG5cdGxldCBjb25maWcgPSBudWxsO1xyXG5cdGxldCBjb25maWdHZXRQcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWcoKSB7XHJcblx0XHRjb25zdCBjb25maWdTdHJpbmcgPSBhd2FpdCBnbS5nZXRWYWx1ZShjb25maWdLZXksIG51bGwpO1xyXG5cdFx0aWYgKHR5cGVvZihjb25maWdTdHJpbmcpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgYyA9IEpTT04ucGFyc2UoY29uZmlnU3RyaW5nKTtcclxuXHRcdFx0XHRpZiAoYyAhPT0gbnVsbCAmJiB0eXBlb2YoYykgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoYykpIHtcclxuXHRcdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWdEZWZhdWx0LCBjKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRGVmYXVsdCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXQoKSB7XHJcblx0XHRpZiAoY29uZmlnICE9PSBudWxsKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZmlnKTsgfVxyXG5cclxuXHRcdGlmIChjb25maWdHZXRQcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdGNvbmZpZ0dldFByb21pc2UgPSBsb2FkQ29uZmlnKCkudGhlbigodikgPT4gY29uZmlnID0gdik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbmZpZ0dldFByb21pc2U7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBzYXZlKCkge1xyXG5cdFx0aWYgKGNvbmZpZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRhd2FpdCBnbS5zZXRWYWx1ZShjb25maWdLZXksIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgXCJcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gYmluZElucHV0KG5vZGUsIHNldHRpbmdOYW1lLCBvcHRpb25zLCB2YWx1ZU5hbWUpIHtcclxuXHRcdGNvbnN0IGMgPSBhd2FpdCBnZXQoKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKHZhbHVlTmFtZSkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0dmFsdWVOYW1lID0gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKGNbc2V0dGluZ05hbWVdLCBvcHRpb25zLCB0cnVlKTtcclxuXHRcdFx0aWYgKHZhbGlkKSB7IG5vZGVbdmFsdWVOYW1lXSA9IHZhbHVlOyB9XHJcblx0XHR9O1xyXG5cclxuXHRcdHVwZGF0ZUlucHV0KCk7XHJcblxyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKG5vZGVbdmFsdWVOYW1lXSwgb3B0aW9ucywgZmFsc2UpO1xyXG5cdFx0XHRpZiAodmFsaWQpIHtcclxuXHRcdFx0XHRjW3NldHRpbmdOYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRcdHNhdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dXBkYXRlSW5wdXQoKTtcclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2F2ZSxcclxuXHRcdGJpbmRJbnB1dFxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0VHlwZUNvbnZlcnRPcHRpb25zID0ge307XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKSB7XHJcblx0c3dpdGNoIChub2RlLnRhZ05hbWUpIHtcclxuXHRcdGNhc2UgXCJJTlBVVFwiOlxyXG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBcImNoZWNrYm94XCIpIHsgcmV0dXJuIFwiY2hlY2tlZFwiOyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFwidmFsdWVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVHlwZSh2YWx1ZSwgb3B0aW9ucywgdG9JbnB1dCkge1xyXG5cdGlmICh0eXBlb2Yob3B0aW9ucykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucywgZGVmYXVsdFR5cGVDb252ZXJ0T3B0aW9ucywgdG9JbnB1dCk7XHJcblx0fSBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiB0eXBlb2Yob3B0aW9ucykgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mKG9wdGlvbnMudHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucy50eXBlLCBvcHRpb25zLCB0b0lucHV0KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHsgdmFsdWUsIHZhbGlkOiB0cnVlIH07XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgdHlwZU5hbWUsIG9wdGlvbnMsIHRvSW5wdXQpIHtcclxuXHRsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuXHQvLyBDb252ZXJ0XHJcblx0c3dpdGNoICh0eXBlTmFtZSkge1xyXG5cdFx0Y2FzZSBcImJvb2xlYW5cIjpcclxuXHRcdFx0dmFsdWUgPSAhIXZhbHVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJpbnRlZ2VyXCI6XHJcblx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdHZhbHVlID0gKHR5cGVOYW1lID09PSBcIm51bWJlclwiID8gcGFyc2VGbG9hdChgJHt2YWx1ZX1gKSA6IHBhcnNlSW50KGAke3ZhbHVlfWAsIDEwKSk7XHJcblx0XHRcdGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xyXG5cdFx0XHRcdHZhbHVlID0gMDtcclxuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Ly8gVHJhbnNmb3JtXHJcblx0aWYgKCF0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLmlucHV0VG9WYWx1ZSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLmlucHV0VG9WYWx1ZSh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyBMaW1pdHNcclxuXHRzd2l0Y2ggKHR5cGVOYW1lKSB7XHJcblx0XHRjYXNlIFwiaW50ZWdlclwiOlxyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWluKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA8IG9wdGlvbnMubWluKSB7IHZhbHVlID0gb3B0aW9ucy5taW47IH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1heCkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPiBvcHRpb25zLm1heCkgeyB2YWx1ZSA9IG9wdGlvbnMubWF4OyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWF4TGVuZ3RoKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZS5sZW5ndGggPiBvcHRpb25zLm1heExlbmd0aCkge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIG9wdGlvbnMubWF4TGVuZ3RoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIFRyYW5zZm9ybVxyXG5cdGlmICh0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLnZhbHVlVG9JbnB1dCkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLnZhbHVlVG9JbnB1dCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyB2YWx1ZSwgdmFsaWQgfTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNyZWF0ZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ0tleSA9IFwieC1mdWxsLXRpdGxlLWNvbmZpZ1wiO1xyXG5jb25zdCBjb25maWdEZWZhdWx0ID0ge1xyXG5cdGRpc3BsYXlNb2RlOiBcImhvdmVyXCIgLy8gXCJub25lXCIsIFwiaG92ZXJcIiwgXCJhbHdheXNcIlxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpLmNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHJlYWR5ID0gcmVxdWlyZShcIi4uL3JlYWR5XCIpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCBzZXR0aW5ncyA9IHJlcXVpcmUoXCIuLi9hcGkvc2V0dGluZ3NcIik7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVNldHRpbmdzKCkge1xyXG5cdHNldHRpbmdzLmluaXRpYWxpemUoKTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbiA9IHNldHRpbmdzLmFkZFNlY3Rpb24oXCJGdWxsIFRpdGxlXCIsIFwiZnVsbC10aXRsZVwiLCAwKTtcclxuXHRpZiAoc2VjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0YXdhaXQgc2V0dXBTZXR0aW5ncyhzZWN0aW9uKTtcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldHVwU2V0dGluZ3MoY29udGFpbmVyKSB7XHJcblx0Y29udGFpbmVyLmlubmVySFRNTCA9IHJlcXVpcmUoXCIuL3NldHRpbmdzLmh0bWxcIik7XHJcblx0YmluZElucHV0KGNvbnRhaW5lciwgXCJkaXNwbGF5TW9kZVwiLCBcInN0cmluZ1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZElucHV0KGNvbnRhaW5lciwgc2V0dGluZ05hbWUsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtc2V0dGluZ3MtZm9yPSR7c2V0dGluZ05hbWV9XWApO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbmZpZy5iaW5kSW5wdXQoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtc2V0dGluZ3MtZm9yPSR7c2V0dGluZ05hbWV9XWApLCBzZXR0aW5nTmFtZSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVNb2RlKCkge1xyXG5cdGNvbnN0IGMgPSBhd2FpdCBjb25maWcuZ2V0KCk7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGVcIiwgYy5kaXNwbGF5TW9kZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdHNldHRpbmdzLmFkZExpbmsoKTtcclxuXHJcblx0Y29uc3QgY3VycmVudFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGRvY3VtZW50LCBsb2NhdGlvbik7XHJcblx0aWYgKGN1cnJlbnRQYWdlVHlwZSA9PT0gXCJzZXR0aW5nc1wiKSB7XHJcblx0XHRpbml0aWFsaXplU2V0dGluZ3MoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlkID0gXCJ4LWZ1bGwtdGl0bGVcIjtcclxuXHRpZiAoIXN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7XHJcblx0XHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZU1vZGUoKTtcclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPkRpc3BsYXkgbW9kZTwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodFxcXCI+XFxyXFxuXFx0XFx0PHNlbGVjdCBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJkaXNwbGF5TW9kZVxcXCI+XFxyXFxuXFx0XFx0XFx0PG9wdGlvbiB2YWx1ZT1cXFwibm9uZVxcXCI+Tm9uZTwvb3B0aW9uPlxcclxcblxcdFxcdFxcdDxvcHRpb24gdmFsdWU9XFxcImhvdmVyXFxcIj5Ib3Zlcjwvb3B0aW9uPlxcclxcblxcdFxcdFxcdDxvcHRpb24gdmFsdWU9XFxcImFsd2F5c1xcXCI+QWx3YXlzPC9vcHRpb24+XFxyXFxuXFx0XFx0PC9zZWxlY3Q+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5pdGc+LmdsMXQ+YTpmaXJzdC1vZi10eXBle292ZXJmbG93OmhpZGRlbjttaW4taGVpZ2h0OjMycHg7bWF4LWhlaWdodDozMnB4O21hcmdpbjo2cHggNHB4IDA7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja30uaXRnPi5nbDF0PmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1le292ZXJmbG93OnZpc2libGU7bWluLWhlaWdodDphdXRvO21heC1oZWlnaHQ6bm9uZTttYXJnaW46MH06cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdD4uZ2xuYW1lLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9YWx3YXlzXSAuaXRnPi5nbDF0PmE6Zmlyc3Qtb2YtdHlwZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyPi5nbG5hbWUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3Zlcj5hOmZpcnN0LW9mLXR5cGV7b3ZlcmZsb3c6dmlzaWJsZTt6LWluZGV4OjEwfTpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9YWx3YXlzXSAuaXRnPi5nbDF0PmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWV7cGFkZGluZy1ib3R0b206LjI1ZW19OnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ+LmdsbmFtZT5kaXY6Zmlyc3Qtb2YtdHlwZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyPi5nbG5hbWU+ZGl2OmZpcnN0LW9mLXR5cGV7cGFkZGluZy1ib3R0b206LjI1ZW07bWFyZ2luLXJpZ2h0Oi0zMHB4O3BhZGRpbmctcmlnaHQ6MzBweH06cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMSk+LmdsbmFtZT5kaXY6Zmlyc3Qtb2YtdHlwZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMSk+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3ZlcjpudGgtY2hpbGQoMm4rMSk+LmdsbmFtZT5kaXY6Zmlyc3Qtb2YtdHlwZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyOm50aC1jaGlsZCgybisxKT5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQyLDI0MCwyMjgsLjc1KX06cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMik+LmdsbmFtZT5kaXY6Zmlyc3Qtb2YtdHlwZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMik+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWUsOnJvb3RbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1ob3Zlcl0gLml0Zz4uZ2wxdDpob3ZlcjpudGgtY2hpbGQoMm4rMik+LmdsbmFtZT5kaXY6Zmlyc3Qtb2YtdHlwZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyOm50aC1jaGlsZCgybisyKT5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjM3LDIzNSwyMjMsLjc1KX06cm9vdC54LWlzLWRhcmtbZGF0YS14LW9wdGlvbi1mdWxsLXRpdGxlLWRpc3BsYXktbW9kZT1hbHdheXNdIC5pdGc+LmdsMXQ6bnRoLWNoaWxkKDJuKzEpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290LngtaXMtZGFya1tkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyOm50aC1jaGlsZCgybisxKT5hOmZpcnN0LW9mLXR5cGU+LmdsbmFtZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMSk+LmdsbmFtZT5kaXY6Zmlyc3Qtb2YtdHlwZSw6cm9vdFtkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWhvdmVyXSAuaXRnPi5nbDF0OmhvdmVyOm50aC1jaGlsZCgybisxKT4uZ2xuYW1lPmRpdjpmaXJzdC1vZi10eXBle2JhY2tncm91bmQtY29sb3I6cmdiYSg1NCw1Nyw2NCwuNzUpfTpyb290LngtaXMtZGFya1tkYXRhLXgtb3B0aW9uLWZ1bGwtdGl0bGUtZGlzcGxheS1tb2RlPWFsd2F5c10gLml0Zz4uZ2wxdDpudGgtY2hpbGQoMm4rMik+YTpmaXJzdC1vZi10eXBlPi5nbG5hbWUsOnJvb3QueC1pcy1kYXJrW2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI6bnRoLWNoaWxkKDJuKzIpPmE6Zmlyc3Qtb2YtdHlwZT4uZ2xuYW1lLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9YWx3YXlzXSAuaXRnPi5nbDF0Om50aC1jaGlsZCgybisyKT4uZ2xuYW1lPmRpdjpmaXJzdC1vZi10eXBlLDpyb290W2RhdGEteC1vcHRpb24tZnVsbC10aXRsZS1kaXNwbGF5LW1vZGU9aG92ZXJdIC5pdGc+LmdsMXQ6aG92ZXI6bnRoLWNoaWxkKDJuKzIpPi5nbG5hbWU+ZGl2OmZpcnN0LW9mLXR5cGV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDYwLDY1LDc1LC43NSl9XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiB0b1Byb21pc2UoZm4sIHNlbGYpIHtcclxuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmVzb2x2ZShmbi5hcHBseShzZWxmLCBhcmdzKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRyZWplY3QoZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IGdtID0gKChvYmplY3RzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHYgPSBHTTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblx0XHRpZiAodiAhPT0gbnVsbCAmJiB0eXBlb2YodikgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0cmV0dXJuIHY7XHJcblx0XHR9XHJcblx0fVxyXG5cdGNhdGNoIChlKSB7IH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0aWYgKG9iai5HTSAhPT0gbnVsbCAmJiB0eXBlb2Yob2JqLkdNKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHJldHVybiBvYmouR007XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHRjb25zdCBtYXBwaW5nID0gW1xyXG5cdFx0WyBcImdldFZhbHVlXCIsIFwiR01fZ2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcInNldFZhbHVlXCIsIFwiR01fc2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcImRlbGV0ZVZhbHVlXCIsIFwiR01fZGVsZXRlVmFsdWVcIiBdLFxyXG5cdFx0WyBcInhtbEh0dHBSZXF1ZXN0XCIsIFwiR01feG1saHR0cFJlcXVlc3RcIiBdXHJcblx0XTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwcGluZykge1xyXG5cdFx0bGV0IHByb21pc2UgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRjb25zdCBmbiA9IG9ialt2YWx1ZV07XHJcblx0XHRcdGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRwcm9taXNlID0gdG9Qcm9taXNlKGZuLCBvYmopO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgTm90IHN1cHBvcnRlZCAoJHtrZXl9KWApKSk7XHJcblx0XHR9XHJcblx0XHRyZXN1bHRba2V5XSA9IHByb21pc2U7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn0pLmNhbGwodGhpcywgW3RoaXMsIHdpbmRvd10pOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBpc1JlYWR5VmFsdWUgPSBmYWxzZTtcclxubGV0IGNhbGxiYWNrcyA9IG51bGw7XHJcbmxldCBjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5jb25zdCBjaGVja0ludGVydmFsUmF0ZSA9IDI1MDtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0hvb2tlZCgpIHtcclxuXHRyZXR1cm4gY2FsbGJhY2tzICE9PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob29rKCkge1xyXG5cdGNhbGxiYWNrcyA9IFtdO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoY2hlY2tJZlJlYWR5LCBjaGVja0ludGVydmFsUmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaG9vaygpIHtcclxuXHRjb25zdCBjYnMgPSBjYWxsYmFja3M7XHJcblxyXG5cdGNhbGxiYWNrcyA9IG51bGw7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjbGVhckludGVydmFsKGNoZWNrSW50ZXJ2YWxJZCk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuXHJcblx0aW52b2tlKGNicyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZShjYWxsYmFja3MpIHtcclxuXHRmb3IgKGxldCBjYiBvZiBjYWxsYmFja3MpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNiKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuXHRpZiAoaXNSZWFkeVZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRpZiAoaXNIb29rZWQoKSkgeyB1bmhvb2soKTsgfVxyXG5cdFx0aXNSZWFkeVZhbHVlID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcclxuXHRpc1JlYWR5KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvblJlYWR5KGNhbGxiYWNrKSB7XHJcblx0aWYgKGlzUmVhZHkoKSkge1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghaXNIb29rZWQoKSkgeyBob29rKCk7IH1cclxuXHJcblx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0b25SZWFkeTogb25SZWFkeSxcclxuXHRnZXQgaXNSZWFkeSgpIHsgcmV0dXJuIGlzUmVhZHkoKTsgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBhcGlTdHlsZSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0aWYgKGFwaVN0eWxlID09PSBudWxsKSB7IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vYXBpL3N0eWxlXCIpOyB9XHJcblx0YXBpU3R5bGUuc2V0RG9jdW1lbnREYXJrRmxhZygpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdHN0eWxlLnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cdHN0eWxlLmhyZWYgPSBgZGF0YTp0ZXh0L2NzcztiYXNlNjQsJHt3aW5kb3cuYnRvYShzb3VyY2UpfWA7XHJcblx0aWYgKHR5cGVvZihpZCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHN0eWxlLmlkID0gZ2V0SWQoaWQpO1xyXG5cdH1cclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHRyZXR1cm4gc3R5bGU7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRoYXNTdHlsZXNoZWV0LFxyXG5cdGdldFN0eWxlc2hlZXQsXHJcblx0YWRkU3R5bGVzaGVldFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCB4UHJlZml4ID0gXCIjIXhcIjtcclxuY29uc3Qgc2VwYXJhdG9yID0gXCIvXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFtdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKGFkZEhpc3RvcnkpIHtcclxuXHRjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdGlmIChhZGRIaXN0b3J5KSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUocGF0aCkge1xyXG5cdHJldHVybiBwYXRoID8gYCR7eFByZWZpeH0ke3NlcGFyYXRvcn0ke3BhdGh9YCA6IHhQcmVmaXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGNvbnN0IHJvdXRlID0geyBtYXRjaCwgY2FsbGJhY2sgfTtcclxuXHRyb3V0ZXMucHVzaChyb3V0ZSk7XHJcblx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDEpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHR9XHJcblx0dGVzdFJvdXRlcyhbcm91dGVdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Zm9yIChsZXQgaSA9IDAsIGlpID0gcm91dGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdGNvbnN0IHJvdXRlID0gcm91dGVzW2ldO1xyXG5cdFx0aWYgKHJvdXRlLm1hdGNoID09PSBtYXRjaCAmJiByb3V0ZS5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcclxuXHRcdFx0cm91dGVzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WEZyYWdtZW50KCkge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblx0cmV0dXJuIChcclxuXHRcdCFmcmFnbWVudCB8fFxyXG5cdFx0ZnJhZ21lbnQubGVuZ3RoIDwgeFByZWZpeC5sZW5ndGggfHxcclxuXHRcdGZyYWdtZW50LnN1YnN0cigwLCB4UHJlZml4Lmxlbmd0aCkgIT09IHhQcmVmaXggfHxcclxuXHRcdChmcmFnbWVudC5sZW5ndGggPiB4UHJlZml4Lmxlbmd0aCAmJiBmcmFnbWVudFt4UHJlZml4Lmxlbmd0aF0gIT09IHNlcGFyYXRvcikpID9cclxuXHRcdG51bGwgOlxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKHhQcmVmaXgubGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdFJvdXRlcyhyb3V0ZXMpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IGdldFhGcmFnbWVudCgpO1xyXG5cdGlmIChmcmFnbWVudCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Zm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcm91dGUubWF0Y2guZXhlYyhmcmFnbWVudCk7XHJcblx0XHRyb3V0ZS5jYWxsYmFjayhtYXRjaCwgZnJhZ21lbnQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25VcmxGcmFnbWVudENoYW5nZWQoKSB7XHJcblx0dGVzdFJvdXRlcyhyb3V0ZXMpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y2xlYXI6IGNsZWFyLFxyXG5cdGNyZWF0ZTogY3JlYXRlLFxyXG5cdGFkZFJvdXRlOiBhZGRSb3V0ZSxcclxuXHRyZW1vdmVSb3V0ZTogcmVtb3ZlUm91dGVcclxufTtcclxuIl19
