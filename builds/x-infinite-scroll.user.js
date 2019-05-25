// ==UserScript==
// @name        x/infinite-scroll
// @version     1.1.0
// @author      dnsev-h
// @namespace   dnsev-h
// @description Infinite scrolling for gallery lists and images
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM.getValue
// @grant       GM_setValue
// @grant       GM.setValue
// @grant       GM_xmlhttpRequest
// @grant       GM.xmlHttpRequest
// @connect     exhentai.org
// @connect     e-hentai.org
// @include     https://exhentai.org/*
// @include     https://e-hentai.org/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABoVBMVEUAAAA0NTs3Nzc0NDsxMUE0NTs0NTszNDs0Njs0NTs0NDw0NTszNTszNTs1NTs0Njs1NTwzMzk0NDszNTszNDo0NDszNTszNDo0NDszNDs0NDsxNDo0NTs0NTszNDs0NTs0NDszNTs0NTs1NTwzMzo0NTszNTs1NTs1NTozNTo0NjrmXu////80NTvjXutAN0iBR4n3y/o5NkD//P/+9f70t/ijT6w8N0L2wfnwnvXvl/XqefLoavDmYO/UWdzMWNTCVstdPmT98f775fz40/v2x/n2xfntivTpc/DcW+XaW+LXWuDWWt+/VcenT7BNO1RKOlH87f376P364fz4zvrzsPfyqPbwo/XnY/DnZ+/gaOneXOjAVci1U72tUbaGSI59RYR5RIFvQ3dsQnRjP2tUPVtQO1dEOEz52fv1vvn0u/jztPjwm/Xsg/Prh/LobvDpju/kguzhcOnRWdm7VMSyUrqcTaWZTKGWTJ6US5ySSpqNSZV0Q3toQW9SPFn63PzulPTrgfPuqvLkd+viderlpeniiujhk+bGV8+OSpZWPV6jFuz0AAAAK3RSTlMA/AO/B/LXg2NGPfXfamZfJhCnpJmId3BYSyIU7OfQy7mvlBkLxI1QNDKds9RbVAAAAxJJREFUSMeNlmdb4lAQhYksUkTE3vuurnsyCYKCHey9997L2nvX7fVXbxJyI1Hv6vuN5zmHmbkzc28sz5PscngczmTLK8kqJA3hg/c18twi+ntx2tfT178YEuxxL+pL3aEgdLqXqOilvJzxcgTYrx5rq6mdAoJ+65v/ybMLaXAOx6OiRksnsECpfHlcCd0HJRxXiYwd4IIyuQYH3UgAPokPVAMrCTk8Q8o6FL6IseyiT7byDKlDUJgwGaqmEaQkjqGclsPAV9FEDdDs5p1UokA+/DQbAvU45deda13HjGimErjLf8tz2P2zGH3kqMcceXiG9xTE5NMQzfEWHvGr+BUjHu7oqFJCDJCLZyhYwY+Rj7p8pA7AwXA7pM0UboRbHEzVRfVj01DZFbvgS+CV/a4ZQAfrgEaDMiARbvOSyDcLSc2pvQs6gapGbBRxD1bYbEKtqLCHKI0B8RA3AneTSkISahS98rdRupRo6Kdys+xhWgrXgFbt+HUmFbMkySUxam+KjfIzdKfwRylToZZlpLq/YzWmd9kJsu9yhdK1Hzk0gE7V0MUCRN1XgpGE19bcA8AnaN10Uj/G1aZBZyu6eQvkNRZN7oWCNBSfnlaWZqU+tCmSbdaFgGpoR4SyWbkJi9CYXxsckjcHN4AWRbKPKHXRpqOXEnVDBZ3BzIw6ddCp1Axt6DEMTorAzKGWNMtIH/EmchjD0AQzE9rWRKllm31CWWyRqRtmttUUGJ9bVcM45sjJLncKg2Gk3QmDKXV263BOpUYN/U8Mo9Bhrf6GZeMCLBUuYaY6sIdYxsUWwOe3uR52xsw0q9hoxQ6A3g12ZXroqheYbQpHJDzLREsDFBZt7JZPJR2OYesIKrduC6PCk5GR6Sj241k6j9AdBgb86RYzZTKeZQYn9xQK0ZPHy86JgAE5L9Fuz376AD2eETbEZM3h3KsLeET3mW+Q3J44zptoW0YM4eDSOpGtOIv/tqf7f0OjZ/76TibKK85wKWo+ue7Q0vm1b3WISChIS/K+4jMjLY+E/ILUTNdby2tJZjlw+AeRxP9HDmKpUQAAAABJRU5ErkJggg==
// @icon64      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABnlBMVEUAAAA0NTs0NDs0NDs0NTs1NTs0NTozMzlLS0s0NTs0NDszNTs2NjsAAAA0NTs0NTs0NTs0NTs0NTszNTszNTo0NTs0NTwyNjwwMD80NTs0NTs0NTs0NTs0NDs0NTs0NTo0Njs1NTozNTozNTszNjsxNTkzNTs0NTo0NTo0NTs0NDsyNjszNTzmXu////80NTs+N0X87P3lXu7+9f6pULI5NkA1NTz//P/++f774/zrfvLnYu+6VMPzrvfulPTqd/LiXerCVsqfTadoQXBWPV5FOUz41Pv3yvrpb/HnZfDfXOnUWd3NWNWNSZV9RoR2RH5xQnhdPmVSO1k2NT386f363vz1v/nyqvfwoPbpcvHoavDoZ/DbW+TQWdnGV8+2U76xUrqUS5yER4xJOlFCOEn87/3xpvbuj/TshfP40Pr2xfn0uPjzsvfwmvXdXOa+VMeiTqqcTaWZTKGHSI+ARohtQnVjQGpOO1b98P352PvtivPsgvPpePHpg/DnfO/iaOrXW+DDVsyjT6yWS5/98P752fv0uvjrj/HlhezJWNI3l8R2AAAALXRSTlMAu5FYyidEBwP7wC0hAvXv66V/dG1gURcL592ujNi1meCEZ0wzENDOn5VJPzn5BnicAAAEYElEQVRYw73X51sTQRAG8IQEJPQiKM3e9d03JCSABAgkkd5Bkd5UpCioiL3X/9rbC3fZJAcrfvD3DR5m7nZmZ57DpXGq8NKlwlOuf3Oiuq6Mptqcwn+Iv1hLMhGPj8XXSJYXHffxZ8l49wCkwMKKn6VVx4o/XUB/dwC2TyNkTv4x4t1cXYDh/nrHm05ITSGWF/9teGUNV+eBmfZJIb1qnwHw1M/rfxdeUUq+HAR+BoXlW0cywwWXXm6tER4B0CFUm/IU4ZJCffVrOdZlnr5FpNkAsEKvtpAXOBaFtCEy/AD691mpS5DDHUh9LSLTIyASLsnVJKjnV0jrIktjHzDMAk2Cao7PQSmhagt4kuCNoxPkX+Xa8FPgl0OCll5gl95izQC7SUbwUTi4C0RXWa29CW52A40OCZo7gS9s0LbyJF8Ad4WDHiCwr3+Fm4yrbVDdBrq1jXDll4UHlTOoHgP9fhbqb9NKdoLm1tZm8xVWeFaXwMMRBISYVMJbt/uA3juyCvMTJZc1CSr5HIHG6V47PDgN02yj6ARi1K2381wG2vDOvsSdOPBQ3oUmFmj7OAxDuxV/H5ZOEewzyhgu0lwl+iMAPkxZ8SnNYhoYYaW2DaEVOVN35Pk3t5ESFK3AIq9oEhRX+DgO4IGQ3sDWZnTyHQJrLNJf5z3gfnII26DUQIh78gwndQnO8pm1FO4gZdr4eUr24Ux24TxVN5Uxa+ACsCmke0h5LQwz+BQuzRjJvKs0nMuzlzP9AWDKGiDLW2s5jmfMQwWZGB2O05dnN3LcrJjhFVJahdQui1CVXrHQsyiAIdYcfEzcYMx63gZst+2tsMx6Jb7IN7EEKRDjdWWnPBRSB0zK1ZwClliXVvEXSBoMhRu8XrfbWyOb0GNO8QxsU8L0APhMr3JrSsPzODA0wQNLwGRGE63pDAIDPJdKUMhx2KLzC12Gz4NR9AlpW70ESS3AE5ap62MUTt6bfzwL2/eMBOr6cGLWsCftGts1mFMTnOdXOLmb0YMte70B82xQZ7cbTh7LXdCm3ALjF9ZwdNGrJtiFk1ZrDlIpzJuY3Grl6RvQSdBo2CzS9PUcTNcQK9SPkmE4aZG3PkPbZHKYYvQok8gxOGkUD2adWtM8i4CfvtQ0nfaF+uFgK7iOLLfNGgaWRiaUd3Af0oY2ZOuVJ5C+KH2oZmIQGqk3eA1TlKUuWx1D8b3R0djY+Kp/B0dqD/bCNMca5esyp4SWJqiyu/AeSd3pezU/N89wKdfNRRzl3gdgINKPQJOfF10O3IzgCDMfgYUEJxIhKjtNdUbzBoDx6HMlDF/xOH/tlWtqMLBHXjvhunzCdYgKDuFwg8Mhlnk0X7oxHOL37ssJ+spPab5T6Y8iS39kObZGsiRH/89fAXcyTr30fCxEQ+01z2mX3kWuDlixc4vLowkZ6/PmVFnP1il2c21osSvSNDS6H5bBNXWVt5Sa612uo6W0oN5T5Dq+W/VnCtzlFZ7cYtd/8Adr2MpDGqTx0AAAAABJRU5ErkJggg==
// @homepage    https://dnsev-h.github.io/x/
// @supportURL  https://github.com/dnsev-h/x/issues
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-infinite-scroll.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-infinite-scroll.user.js
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

const queryString = require("../query-string");

const rePageList = /([0-9,]+)\s*-\s*([0-9,]+)\s*of\s*([0-9,]+)/i;
const reResults = /([0-9,]+)\s*results?/i;


class PageinationInfo {
	constructor(pageCurrent, pageCount, itemCount, itemsOnPage, itemsPerPage, urlBase, pageFieldName) {
		this.pageCurrent = pageCurrent;
		this.pageCount = pageCount;
		this.itemCount = itemCount;
		this.itemsOnPage = itemsOnPage;
		this.itemsPerPage = itemsPerPage;
		this.urlBase = urlBase;
		this.pageFieldName = pageFieldName;
	}

	createPageUrl(pageIndex) {
		if (this.urlBase === null) { return null; }

		return this.urlBase.replace(/^([^#\?]*)(\?[^#]*)?(#[\w\W]*)?$/, (m0, m1, m2, m3) => {
			m2 = (
				pageIndex !== 0 ?
				(m2 ? `${m2}&${this.pageFieldName}=${pageIndex}` : `?${this.pageFieldName}=${pageIndex}`) :
				(m2 || ""));
			return `${m1}${m2}${m3 || ""}`;
		});
	}
}


function parseNumber(value, defaultValue) {
	const v = parseInt(value.replace(/\D/g, ""), 10);
	return Number.isNaN(v) ? defaultValue : v;
}


function getPagesForImage(html) {
	const nodes = html.querySelectorAll(".sn>div>span");
	if (nodes.length < 2) { return null; }

	const pageCurrent = parseNumber(nodes[0].textContent, 1) - 1;
	const pageCount = parseNumber(nodes[1].textContent, 0);
	return new PageinationInfo(pageCurrent, pageCount, pageCount, 1, 1, null, null);
}

function calculateItemsPerPage(pageCurrent, pageCount, itemCount, itemsOnPage) {
	return (pageCurrent + 1 < pageCount || pageCurrent === 0) ?
		itemsOnPage :
		Math.round((itemCount - itemsOnPage) / pageCurrent);
}

function getItemsFromFullInfo(content, pageCurrent, pageCount) {
	const match = rePageList.exec(content);
	if (match === null) { return null; }

	const start = parseNumber(match[1], 0);
	const itemsOnPage = parseNumber(match[2], 0) - (start - 1);
	const itemCount = parseNumber(match[3], 0);
	const itemsPerPage = calculateItemsPerPage(pageCurrent, pageCount, itemCount, itemsOnPage);

	return {itemCount, itemsOnPage, itemsPerPage};
}

function getItemsForGalleryImages(pageList, pageCurrent, pageCount) {
	const node = pageList.parentNode.querySelector(".gpc");
	return (node !== null && node.parentNode === pageList.parentNode) ?
		getItemsFromFullInfo(node.textContent, pageCurrent, pageCount) :
		null;
}

function getItemsForGalleryList(html, pageCurrent, pageCount) {
	let itemCount = null;
	for (const ipNode of html.querySelectorAll("p.ip")) {
		const info = getItemsFromFullInfo(ipNode.textContent, pageCurrent, pageCount);
		if (info !== null) { return info; }

		const match = reResults.exec(ipNode.textContent);
		if (match !== null) {
			itemCount = parseNumber(match[1]);
			break;
		}
	}

	if (itemCount === null) { return null; }

	let itemsOnPage = 0;
	let nodes = html.querySelectorAll("div.itg>div");
	if ((itemsOnPage = nodes.length) === 0) {
		nodes = html.querySelectorAll("table.itg>tbody>tr");
		itemsOnPage = nodes.length;
		if (itemsOnPage > 0 && nodes[0].querySelector("th") !== null) {
			--itemsOnPage; // Header row
		}
	}

	const itemsPerPage = calculateItemsPerPage(pageCurrent, pageCount, itemCount, itemsOnPage);

	return {itemCount, itemsOnPage, itemsPerPage};
}

function getPagesForGalleryList(html, pageList) {
	// Count
	const nodes = pageList.querySelectorAll("td");
	const pageCount = (nodes.length > 2 ? parseNumber(nodes[nodes.length - 2].textContent, 1) : 0);

	// Current
	const node = pageList.querySelector("td.ptds");
	const pageCurrent = (node !== null ? parseNumber(node.textContent, 1) - 1 : 0);

	// Items
	let itemCount = 0;
	let itemsOnPage = 0;
	let itemsPerPage = 0;

	let v = getItemsForGalleryImages(pageList, pageCurrent, pageCount);
	let pageFieldName = null;
	let isGalleryList = false;
	if (v !== null) {
		pageFieldName = "p";
	} else {
		v = getItemsForGalleryList(html, pageCurrent, pageCount);
		if (v !== null) {
			pageFieldName = "page";
			isGalleryList = true;
		}
	}
	if (v !== null) {
		({itemCount, itemsOnPage, itemsPerPage} = v);
	}

	// Url format
	const link = node.querySelector("a[href]");
	let urlBase = null;
	if (link !== null && pageFieldName !== null) {
		urlBase = link.getAttribute("href");
		urlBase = queryString.removeQueryParameter(urlBase, pageFieldName);
		if (isGalleryList) {
			urlBase = queryString.removeQueryParameter(urlBase, "from");
		}
	}

	return new PageinationInfo(pageCurrent, pageCount, itemCount, itemsOnPage, itemsPerPage, urlBase, pageFieldName);
}

function removeUrlQueryStringField(url, field) {
	return url.replace(
		new RegExp(`([&\\?])${field}(?:(?:=[^&]*)?(&|$))`),
		(m0, m1, m2) => (m1 === "?" && m2 ? "?" : m2));
}


function getInfo(html) {
	if (!html) { html = document; }

	const pageList = html.querySelector(".ptt");
	return pageList !== null ? getPagesForGalleryList(html, pageList) : getPagesForImage(html);
}


function getGalleryUrl(node) {
	const linkSelector = "a[href]";
	const nameNode = node.querySelector(".glname");
	if (nameNode !== null) {
		const link = nameNode.querySelector(linkSelector);
		if (link !== null) {
			return link.getAttribute("href");
		}
		if (nameNode.parentNode !== null && nameNode.parentNode.matches(linkSelector)) {
			return nameNode.parentNode.getAttribute("href");
		}
	}

	return null;
}

function getGalleryUrls(html) {
	if (!html) { html = document; }

	let nodes = html.querySelectorAll("div.itg>div");
	if (nodes.length === 0) {
		nodes = html.querySelectorAll("table.itg>tbody>tr");
		if (nodes.length > 0 && nodes[0].querySelector("th") !== null) {
			nodes = Array.prototype.slice.call(nodes, 1); // Omit header row
		}
	}

	const results = [];
	for (const node of nodes) {
		const url = getGalleryUrl(node);
		if (url !== null) { results.push(url); }
	}

	return results;
}

function getGalleryImageUrls(html) {
	if (!html) { html = document; }

	let nodes = html.querySelectorAll(".gdtl");
	if (nodes.length === 0) {
		nodes = html.querySelectorAll(".gdtm");
	}

	const results = [];

	for (const node of nodes) {
		const link = node.querySelector("a[href]");
		if (link !== null) {
			results.push(link.getAttribute("href"));
		}
	}

	return results;
}


module.exports = {
	getInfo,
	getGalleryUrls,
	getGalleryImageUrls
};

},{"../query-string":17}],4:[function(require,module,exports){
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

},{"../style":19,"../url-fragment":20,"./navigation-bar":1,"./style/settings.css":6}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
module.exports = ".x-settings-container{display:flex;flex-direction:column;margin-top:-1em}.x-settings-container.x-settings-container-hidden{display:none}.x-settings-hidden{display:none!important}.x-settings-option select{margin-right:.5em}.x-settings-section-container{display:block;width:100%;margin-top:1em}.x-settings-section-content{margin:8px auto 10px 10px;clear:both}.x-settings-section-header{font-size:1.25em;line-height:1.5em;margin:.25em 0}.x-settings-section{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;align-content:flex-start;flex-wrap:nowrap;width:100%;padding:.5em 0}.x-settings-section+.x-settings-section{border-top:1px solid rgba(0,0,0,.25)}:root:not(.x-is-dark) .x-settings-section+.x-settings-section{border-top-color:rgba(92,13,18,.25)}.x-settings-section-left{flex:1 1 auto;padding-right:.5em}.x-settings-section-right{flex:0 0 auto;min-width:30%;text-align:right}.x-settings-section-title{font-weight:700;line-height:1.5em}.x-settings-section-description{line-height:1.35em}input.x-settings-section-input[type=number],input.x-settings-section-input[type=text]{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e}:root:not(.x-is-dark) input.x-settings-section-input[type=number],:root:not(.x-is-dark) input.x-settings-section-input[type=text]{background-color:#e3e0d1}input.x-settings-section-input[type=text]{width:20em}input.x-settings-section-input[type=number]{width:5em;-moz-appearance:textfield}input.x-settings-section-input[type=number]::-webkit-inner-spin-button,input.x-settings-section-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.x-settings-input-table-container .lc{display:inline-block;margin-right:-6px}.x-settings-container code{font-family:'Courier New',Courier,monospace;background-color:#43464e;font-weight:700}:root:not(.x-is-dark) .x-settings-container code{background-color:#e3e0d1}.x-settings-light-text{font-weight:400;opacity:.75}.x-settings-input-table-container{display:inline-block;text-align:left}.x-settings-input-table{display:table}.x-settings-input-row{display:table-row}.x-settings-input-row.x-settings-input-header-row{font-size:.8em;line-height:1em;opacity:.75}.x-settings-input-cell{display:table-cell}.x-settings-input-cell+.x-settings-input-cell{padding-left:.25em}.x-settings-input-label{cursor:pointer;margin:0 0 0 1em}.x-settings-input-checkbox-prefix{vertical-align:middle;display:inline-block;padding-right:.5em}";
},{}],7:[function(require,module,exports){
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

},{"./gm":9}],8:[function(require,module,exports){
"use strict";

const gm = require("./gm");


class FetchError extends Error {
  constructor(message, response) {
    super(message);
		this.name = "FetchError";
		this.response = response;
  }
}

class Response {
	constructor(readyState, responseHeaders, responseText, status, statusText) {
		this.readyState = readyState;
		this.responseHeaders = responseHeaders;
		this.responseText = responseText;
		this.status = status;
		this.statusText = statusText;
	}
}

class ProgressEvent {
  constructor(lengthComputable, loaded, total) {
		this.lengthComputable = lengthComputable;
		this.loaded = loaded;
		this.total = total;
  }
}


function getResponseHeaderMap(allHeaders) {
	const responseHeaders = {};

	const re = /\s*(.*)\s*:\s*(.*)\s*/;
	for (const line of allHeaders.replace(/\r\n\s*$/, "").split("\r\n")) {
		const m = re.exec(line);
		if (m !== null) {
			responseHeaders[m[1].toLowerCase()] = m[2];
		}
	}

	return responseHeaders;
}

function convertXhrResponse(xhr) {
	return new Response(
		xhr.readyState,
		getResponseHeaderMap(xhr.getAllResponseHeaders()),
		xhr.responseText,
		xhr.status,
		xhr.statusText);
}

function requestXhrInternal(method, url, options) {
	const data = options.data;
	//const binary = options.binary;
	const headers = options.headers;
	const timeout = options.timeout || 0;
	const onprogress = options.onprogress;
	const overrideMimeType = options.overrideMimeType;

	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.timeout = timeout;
		if (typeof(overrideMimeType) === "string") {
			xhr.overrideMimeType(overrideMimeType);
		}
		if (headers !== null && typeof(headers) === "object") {
			for (let k in headers) {
				xhr.setRequestHeader(k, headers[k]);
			}
		}

		xhr.addEventListener("load", () => resolve(convertXhrResponse(xhr)));
		xhr.addEventListener("error", () => reject(new FetchError(`Request error: ${xhr.statusText} (${xhr.status})`, convertXhrResponse(xhr))));
		xhr.addEventListener("abort", () => reject(new FetchError("Request aborted", convertXhrResponse(xhr))));
		xhr.addEventListener("timeout", () => reject(new FetchError("Timeout reached", convertXhrResponse(xhr))));

		if (typeof(onprogress) === "function") {
			xhr.addEventListener("progress", (e) => onprogress(new ProgressEvent(e.lengthComputable, e.loaded, e.total)));
		}

		xhr.open(method, url, true);
		xhr.send(data);
	});
}


function convertGmResponse(response) {
	return new Response(
		response.readyState,
		getResponseHeaderMap(response.responseHeaders),
		response.responseText,
		response.status,
		response.statusText);
}

function requestGmInternal(method, url, options) {
	const data = options.data;
	const binary = options.binary;
	const headers = options.headers;
	const timeout = options.timeout || 0;
	const onprogress = options.onprogress;
	const overrideMimeType = options.overrideMimeType;

	return new Promise((resolve, reject) => {
		const details = {
			method: method,
			url: url,
			headers: headers,
			overrideMimeType: overrideMimeType,
			data: data,
			binary: binary,
			synchronous: false,
			timeout: timeout
		};

		details.onload = (e) => resolve(convertGmResponse(e));
		details.onerror = (e) => reject(new FetchError(`Request error: ${e.statusText} (${e.status})`, convertGmResponse(e)));
		details.onabort = (e) => reject(new FetchError("Request aborted", convertGmResponse(e)));
		details.ontimeout = (e) => reject(new FetchError("Timeout reached", convertGmResponse(e)));

		if (typeof(onprogress) === "function") {
			details.onprogress = (e) => onprogress(new ProgressEvent(e.lengthComputable, e.loaded, e.total));
		}

		gm.xmlHttpRequest(details);
	});
}


function isGmSupported(useGm) {
	return (useGm && typeof(gm.xmlHttpRequest) === "function") ? true : false;
}


function request(options) {
	if (options === null || typeof(options) !== "object") {
		return Promise.reject(new Error("Invalid options"));
	}

	const method = options.method;
	const url = options.url;
	return isGmSupported(options.gm) ? requestGmInternal(method, url, options) : requestXhrInternal(method, url, options);
}

function get(options) {
	if (options === null || typeof(options) !== "object") {
		return Promise.reject(new Error("Invalid options"));
	}

	const method = "GET";
	const url = options.url;
	return isGmSupported(options.gm) ? requestGmInternal(method, url, options) : requestXhrInternal(method, url, options);
}

function post(options) {
	if (options === null || typeof(options) !== "object") {
		return Promise.reject(new Error("Invalid options"));
	}

	const method = "POST";
	const url = options.url;
	return isGmSupported(options.gm) ? requestGmInternal(method, url, options) : requestXhrInternal(method, url, options);
}


function requestGm(options) {
	if (options === null || typeof(options) !== "object") {
		return Promise.reject(new Error("Invalid options"));
	}

	const method = options.method;
	const url = options.url;
	return isGmSupported(true) ? requestGmInternal(method, url, options) : Promise.reject(new Error("GM not supported"));
}

function getGm(options) {
	if (options === null || typeof(options) !== "object") {
		return Promise.reject(new Error("Invalid options"));
	}

	const method = "GET";
	const url = options.url;
	return isGmSupported(true) ? requestGmInternal(method, url, options) : Promise.reject(new Error("GM not supported"));
}

function postGm(options) {
	if (options === null || typeof(options) !== "object") {
		return Promise.reject(new Error("Invalid options"));
	}

	const method = "POST";
	const url = options.url;
	return isGmSupported(true) ? requestGmInternal(method, url, options) : Promise.reject(new Error("GM not supported"));
}


module.exports = {
	request: request,
	get: get,
	post: post,
	gm: {
		request: requestGm,
		get: getGm,
		post: postGm,
	}
};

},{"./gm":9}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
"use strict";

const configKey = "x-infinite-scroll-config";
const configDefault = {
	delay: 1, // float [0-inf]; seconds before loading a new page
	loadAttempts: 1, // integer [0-inf]; number of attempts for loading new pages
	pageViewPercentRequired: 0.5, // float [0-1]; 50% of page must be viewed before loading the next
	allowForGalleryImages: true, // boolean
	allowForGalleryLists: true, // boolean
	enabledByDefaultForGalleryImages: true, // boolean
	enabledByDefaultForGalleryLists: true // boolean
};

module.exports = require("../config").create(configKey, configDefault);

},{"../config":7}],11:[function(require,module,exports){
module.exports = "<div class=\"x-infinite-scroll-container\">\r\n\t<div class=\"x-infinite-scroll-header-container\">\r\n\t\t<div class=\"x-infinite-scroll-header\">\r\n\t\t\t<div class=\"x-infinite-scroll-header-content\">\r\n\t\t\t\t<a class=\"x-infinite-scroll-header-top-link\" href=\"#\">Top</a><label class=\"x-infinite-scroll-enabled-checkbox-label0\"><label class=\"lc x-infinite-scroll-enabled-checkbox-label1 x-checkbox-small\"><input type=\"checkbox\" class=\"x-infinite-scroll-enabled-checkbox\"><span></span> Infinite scroll</label></label>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
},{}],12:[function(require,module,exports){
"use strict";

class InfiniteScrollBase {
	constructor() {
		this.pageViewPercentRequired = 0.5; // 50% of page must be viewed before loading the next
		this.pageNode = null;
		this.containerNode = window;

		this._isActive = false;
		this._scrollY = 0;
		this._onScroll = () => onScrollChanged.call(this, false);
	}

	loadNextPage() {}

	isActive() {
		return this._isActive;
	}
	setActive(value) {
		if (value) {
			if (this._isActive) { return; }
			this._isActive = true;
			this._scrollY = getPageScrollY();
			this.containerNode.addEventListener("scroll", this._onScroll, false);
		} else {
			if (!this._isActive) { return; }
			this._isActive = false;
			this.containerNode.removeEventListener("scroll", this._onScroll, false);
		}
	}

	updateCheck() {
		onScrollChanged.call(this, true);
	}
}


function onScrollChanged(force) {
	const scrollYNew = getPageScrollY();
	const scrollYPre = this._scrollY;
	this._scrollY = scrollYNew;

	// Must have valid target
	if (this.pageNode === null) { return; }

	// Don't load if already loading, if not scrolled at all, or if scrolling up
	if (force !== true) {
		if (scrollYNew < 1 || scrollYNew <= scrollYPre) { return; }
	}

	// Don't load if the current page is entirely off-screen
	const rect = this.pageNode.getBoundingClientRect();
	if (rect.y + rect.height < 0) { return; }

	// Don't load if not enough of the page has been viewed
	const height = getWindowHeight();
	if (rect.y + rect.height * this.pageViewPercentRequired >= height) { return; }

	// Load
	this.loadNextPage();
}

function getWindowHeight() {
	return window.innerHeight || 0;
}

function getPageScrollY() {
	const doc = document.documentElement;
	return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}


module.exports = {
	InfiniteScrollBase
};

},{}],13:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const fetch = require("../fetch");
const style = require("../style");
const pageType = require("../api/page-type");
const pagination = require("../api/pagination");
const settings = require("../api/settings");
const InfiniteScrollBase = require("./infinite-scroll-base").InfiniteScrollBase;

let currentPageType = null;
let scroller = null;


class InfiniteScroll extends InfiniteScrollBase {
	constructor(config, pageType, pageNode, pagesInfo) {
		super();

		this.pageViewPercentRequired = config.pageViewPercentRequired;
		this.config = config;
		this.pageType = pageType;
		this.pageNode = pageNode;
		this.pagesInfo = pagesInfo;
		this.contentContainer = null;

		this._delayPromise = null;
		this._isLoading = false;
		this._isEnabled = false;
		this._isEnabledCheckbox = null;
		this._pageWrapperTemplate = null;

		this.initializeContentContainer();
	}


	getPageMode(pageType) {
		switch (pageType) {
			case "gallery":
				return "image-list";
			case "search":
			case "favorites":
				return "gallery-list";
			default:
				return null;
		}
	}

	initializeContentContainer() {
		this.contentContainer = this.createContentContainer();
		this.pageNode.parentNode.insertBefore(this.contentContainer, this.pageNode);

		this.pageNode = this.createWrappedPage(this.pageNode, this.pagesInfo.pageCurrent);
		this.contentContainer.appendChild(this.pageNode);
	}

	createContentContainer() {
		const html = require("./container.html");
		const doc = new DOMParser().parseFromString(html, "text/html");
		const container = doc.querySelector(".x-infinite-scroll-container");

		const mode = this.getPageMode(this.pageType);
		if (mode !== null) {
			container.setAttribute("data-x-infinite-scroll-mode", mode);
		}

		const top = container.querySelector(".x-infinite-scroll-header-top-link");
		top.addEventListener("click", (e) => {
			document.documentElement.scrollTop = document.body.scrollTop = 0;
			e.preventDefault();
			e.stopPropagation();
			return false;
		}, false);

		this._isEnabledCheckbox = container.querySelector(".x-infinite-scroll-enabled-checkbox");
		this._isEnabledCheckbox.addEventListener("change", () => {
			this.setEnabled(this._isEnabledCheckbox.checked);
			if (this.isEnabled()) { this.updateCheck(); }
		}, false);

		return container;
	}

	createWrappedPage(content, pageIndex) {
		if (this._pageWrapperTemplate === null) {
			const html = require("./page.html");
			const doc = new DOMParser().parseFromString(html, "text/html");
			this._pageWrapperTemplate = doc.querySelector(".x-infinite-scroll-page");
		}

		const wrapper = this._pageWrapperTemplate.cloneNode(true);
		const link = wrapper.querySelector(".x-infinite-scroll-page-link");
		link.setAttribute("href", this.pagesInfo.createPageUrl(pageIndex));
		link.textContent = `Page ${pageIndex + 1}`;
		wrapper.appendChild(content);
		return wrapper;
	}


	isEnabled() {
		return this._isEnabled;
	}

	setEnabled(value) {
		const isComplete = this.isComplete();
		this._isEnabled = !!value && !isComplete;

		if (!this._isLoading) {
			this.setActive(this._isEnabled);
		}

		this._isEnabledCheckbox.checked = this._isEnabled || isComplete;
	}

	isComplete() {
		return (this.pagesInfo.pageCurrent + 1 >= this.pagesInfo.pageCount);
	}

	getNextPageUrl() {
		return this.pagesInfo.createPageUrl(this.pagesInfo.pageCurrent + 1);
	}

	getPageDataFromHtml(html) {
		const content = getDefaultPageContent(html, this.pageType); // html.querySelector("#gdt");
		if (content === null) { return null; }

		content.removeAttribute("id");

		let className = content.getAttribute("class") || "";
		if (className) { className += " "; }
		className += "x-infinite-scroll";
		content.setAttribute("class", className);

		return { content };
	}

	async loadNextPage() {
		if (!isWindowVisible()) { return; }
		this.setActive(false);
		if (this._isLoading) { return; }
		if (this.isComplete()) {
			this.pageNode = null;
			return;
		}

		// Load data
		const url = this.getNextPageUrl();
		let pageData;
		try {
			this._isLoading = true;
			pageData = await this.fetchPageData(url, this.config.loadAttempts, this.config.delay);
		}
		finally {
			this._isLoading = false;
		}
		if (pageData === null) { return; }

		// Update page
		++this.pagesInfo.pageCurrent;

		// Create node
		const newPageNode = this.createWrappedPage(pageData.content, this.pagesInfo.pageCurrent);
		this.contentContainer.appendChild(newPageNode);

		// Done?
		if (this.isComplete()) {
			this.pageNode = null;
			this.setEnabled(false);
		} else {
			this.pageNode = newPageNode;
			this.setActive(true);
		}
	}

	async fetchPageData(url, loadAttempts, delay) {
		for (let i = 0; i < loadAttempts; ++i) {
			await this.waitForDelay();
			try {
				const result = await fetch.get({ url: url });
				const doc = new DOMParser().parseFromString(result.responseText, "text/html");
				const data = this.getPageDataFromHtml(doc);
				if (data !== null) { return data; }
			}
			catch (e) {
			}
			finally {
				this.setDelay(delay);
			}
		}
		return null;
	}


	setDelay(time) {
		this._delayPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				this._delayPromise = null;
				resolve();
			}, time * 1000);
		});
	}

	async waitForDelay() {
		if (this._delayPromise !== null) {
			await this._delayPromise;
		}
	}
}


function setupPageFocus() {
	document.addEventListener("visibilitychange", onVisibilityStateChanged, false);
	onVisibilityStateChanged();
}

function isWindowVisible() {
	return (
		typeof (document.visibilityState) !== "string" ||
		document.visibilityState === "visible");
}

function onVisibilityStateChanged() {
	if (!isWindowVisible()) { return; }
	document.removeEventListener("visibilitychange", onVisibilityStateChanged, false);
	initialize(currentPageType);
}


function getDefaultPageContent(html, pageType) {
	let n;
	switch (pageType) {
		case "gallery":
			n = html.querySelector("#gdt");
			if (n !== null) { return n; }
			n = html.querySelector(".eze_gallery_page_container");
			if (n !== null) { return n; }
			break;
		case "search":
		case "favorites":
			n = html.querySelector(".itg");
			if (n !== null) { return n; }
			break;
	}

	return null;
}

function isEnabledByDefault(pageType, config) {
	switch (pageType) {
		case "gallery":
			return config.enabledByDefaultForGalleryImages;
		case "search":
		case "favorites":
			return config.enabledByDefaultForGalleryLists;
		default:
			return false;
	}
}

function isAllowed(pageType, config) {
	switch (pageType) {
		case "gallery":
			return config.allowForGalleryImages;
		case "search":
		case "favorites":
			return config.allowForGalleryLists;
		default:
			return false;
	}
}

function insertStylesheet() {
	const id = "x-infinite-scroll";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style.css");
	style.addStylesheet(src, id);
}

async function initialize(pageType) {
	if (scroller !== null) { return; }

	const pagesInfo = pagination.getInfo(document);
	if (pagesInfo === null) { return; }

	const pageNode = getDefaultPageContent(document, pageType);
	if (pageNode === null) { return; }

	const config = await require("./config").get();

	if (!isAllowed(pageType, config)) { return; }

	insertStylesheet();

	scroller = new InfiniteScroll(config, pageType, pageNode, pagesInfo);
	scroller.setEnabled(isEnabledByDefault(pageType, config));
}



async function initializeSettings() {
	settings.initialize();

	const section = settings.addSection("Infinite Scroll", "infinite-scroll", 1);
	if (section !== null) {
		await setupSettings(section);
	}
}

async function setupSettings(container) {
	const config = await require("./config");

	container.innerHTML = require("./settings.html");
	bindInput(config, container, "enabledByDefaultForGalleryImages", "boolean");
	bindInput(config, container, "enabledByDefaultForGalleryLists", "boolean");
	bindInput(config, container, "allowForGalleryImages", "boolean");
	bindInput(config, container, "allowForGalleryLists", "boolean");
	bindInput(config, container, "delay", {
		type: "number",
		min: 0
	});
	bindInput(config, container, "loadAttempts", {
		type: "integer",
		min: 0
	});
	bindInput(config, container, "pageViewPercentRequired", {
		type: "number",
		min: 0,
		max: 1,
		valueToInput: (v) => v * 100,
		inputToValue: (v) => v / 100
	});
}

function bindInput(config, container, settingName, options) {
	const n = container.querySelector(`[data-x-settings-for=${settingName}]`);
	if (n === null) { return null; }

	config.bindInput(container.querySelector(`[data-x-settings-for=${settingName}]`), settingName, options);
}



function main() {
	settings.addLink();

	currentPageType = pageType.get(document, location);
	switch (currentPageType) {
		case "gallery":
		case "search":
		case "favorites":
			setupPageFocus();
			break;
		case "settings":
			initializeSettings();
			break;
	}
}


ready.onReady(main);

},{"../api/page-type":2,"../api/pagination":3,"../api/settings":4,"../fetch":8,"../ready":18,"../style":19,"./config":10,"./container.html":11,"./infinite-scroll-base":12,"./page.html":14,"./settings.html":15,"./style.css":16}],14:[function(require,module,exports){
module.exports = "<div class=\"x-infinite-scroll-page\">\r\n\t<div class=\"x-infinite-scroll-page-header\">\r\n\t\t<div class=\"x-infinite-scroll-header-content\">\r\n\t\t\t<a class=\"x-infinite-scroll-page-link\"></a>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
},{}],15:[function(require,module,exports){
module.exports = "<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Gallery images</div>\r\n\t\t<div class=\"x-settings-section-description\">Enable infinite-scrolling for gallery thumbnails.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<div class=\"x-settings-input-table-container\">\r\n\t\t\t<div class=\"x-settings-input-table\">\r\n\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t<label class=\"x-settings-input-label\">\r\n\t\t\t\t\t\t<span class=\"x-settings-input-checkbox-prefix\">Enable by default</span><span class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"enabledByDefaultForGalleryImages\" /><span></span></label>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t<label class=\"x-settings-input-label\">\r\n\t\t\t\t\t\t<span class=\"x-settings-input-checkbox-prefix\">Allow</span><span class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"allowForGalleryImages\" /><span></span></label>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Gallery lists</div>\r\n\t\t<div class=\"x-settings-section-description\">Enable infinite-scrolling for gallery lists.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<div class=\"x-settings-input-table-container\">\r\n\t\t\t<div class=\"x-settings-input-table\">\r\n\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t<label class=\"x-settings-input-label\">\r\n\t\t\t\t\t\t<span class=\"x-settings-input-checkbox-prefix\">Enable by default</span><span class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"enabledByDefaultForGalleryLists\" /><span></span></label>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t<label class=\"x-settings-input-label\">\r\n\t\t\t\t\t\t<span class=\"x-settings-input-checkbox-prefix\">Allow</span><span class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"allowForGalleryLists\" /><span></span></label>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Delay</div>\r\n\t\t<div class=\"x-settings-section-description\">Seconds to wait before loading the next page.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<input class=\"x-settings-section-input\" type=\"number\" min=\"0\" autocomplete=\"off\" spellcheck=\"false\" data-x-settings-for=\"delay\" />\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Load attempts</div>\r\n\t\t<div class=\"x-settings-section-description\">Maximum number of attempts allowed to load the next page.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<input class=\"x-settings-section-input\" type=\"number\" min=\"0\" step=\"1\" autocomplete=\"off\" spellcheck=\"false\" data-x-settings-for=\"loadAttempts\" />\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Required page view percent</div>\r\n\t\t<div class=\"x-settings-section-description\">Percent of the current page that must be viewed before loading the next.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<input class=\"x-settings-section-input\" type=\"number\" min=\"0\" max=\"100\" autocomplete=\"off\" spellcheck=\"false\" data-x-settings-for=\"pageViewPercentRequired\" />\r\n\t</div>\r\n</div>";
},{}],16:[function(require,module,exports){
module.exports = ".x-infinite-scroll-container{clear:both;position:relative}.x-infinite-scroll-container[data-x-infinite-scroll-mode=gallery-list]{border:0;border-top:1px solid #000;width:100%}.x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list]{border:1px solid #000;min-width:710px;max-width:1210px;margin:0 auto}.x-infinite-scroll-header-container{position:absolute;top:0;right:0;bottom:0;pointer-events:none}.x-infinite-scroll-header{top:0;bottom:0;position:sticky;font-size:10pt;text-align:right;line-height:1.35em;z-index:202;pointer-events:auto}.x-infinite-scroll-header-content{display:inline-block;white-space:nowrap;line-height:1.5em;height:2.5em}.x-infinite-scroll-header-top-link{display:inline-block;text-decoration:none;padding:.5em;margin-right:.5em}.x-infinite-scroll-enabled-checkbox-label0,.x-infinite-scroll-page-link{white-space:nowrap;display:inline-block;padding:.5em}.x-infinite-scroll-page{position:relative}.x-infinite-scroll-page-header{top:0;bottom:0;position:sticky;font-size:10pt;text-align:left;line-height:1.35em;z-index:201}.x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list] .x-infinite-scroll-page:not(:last-child){border-bottom:1px solid #000}.x-infinite-scroll-page-link{text-decoration:none}.x-infinite-scroll-page,div#gdt{border:0;text-align:left;min-width:0;max-width:none;padding:0}.x-infinite-scroll-page img{border:1px solid #000;margin:0;padding:0}.x-infinite-scroll-page a{text-decoration:none}:root.x-is-dark .x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list],:root.x-is-dark .x-infinite-scroll-header-content,:root.x-is-dark .x-infinite-scroll-page-header{background-color:#4f535b}:root:not(.x-is-dark) .x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list],:root:not(.x-is-dark) .x-infinite-scroll-header-content,:root:not(.x-is-dark) .x-infinite-scroll-page-header{background-color:#edebdf}:root:not(.x-is-dark) .x-infinite-scroll-container,:root:not(.x-is-dark) .x-infinite-scroll-page img,:root:not(.x-is-dark) .x-infinite-scroll-page:not(:last-child){border-color:#5c0d12}@media screen and (max-width:1230px){.x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list]{max-width:970px}}@media screen and (max-width:990px){.x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list]{max-width:730px}}.lc.x-checkbox-small{height:20px;line-height:20px;padding-left:26px;display:inline-block}.lc.x-checkbox-small>span{height:16px;width:16px}.lc.x-checkbox-small>span:after{left:5px;top:1.1px;width:3px;height:8px}div.eze_gallery_page{background-color:transparent;border:0;width:auto;min-width:0;max-width:none;margin:0;clear:none;padding:0;border-radius:0}a.eze_gallery_page_indicator{display:none}.eze_gallery_custom_table>.eze_gallery_custom_row>.eze_gallery_custom_cell:nth-child(1)>p:nth-child(1){display:none}";
},{}],17:[function(require,module,exports){
"use strict";

function getUrlParameters(url) {
	const result = {};
	const match = /^([^#\?]*)(\?[^#]*)?(#[\w\W]*)?$/.exec(url);
	if (match !== null && match[2] && match[2].length > 1) {
		const pattern = /([^=]*)(?:=([\w\W]*))?/;
		for (const part of match[2].substr(1).split("&")) {
			if (part.length === 0) { continue; }
			const match2 = pattern.exec(part);
			const value = match2[2];
			result[decodeURIComponent(match2[1])] = (value !== undefined ? decodeURIComponent(value) : null);
		}
	}
	return result;
}

function removeQueryParameter(url, parameterName) {
	return url.replace(
		new RegExp(`([&\\?])${parameterName}(?:(?:=[^&]*)?(&|$))`),
		(m0, m1, m2) => (m1 === "?" && m2 ? "?" : m2));
}


module.exports = {
	getUrlParameters,
	removeQueryParameter
};

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{"./api/style":5}],20:[function(require,module,exports){
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

},{}]},{},[13])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BhZ2luYXRpb24uanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvc2V0dGluZ3MuY3NzIiwic3JjL2NvbmZpZy5qcyIsInNyYy9mZXRjaC5qcyIsInNyYy9nbS5qcyIsInNyYy9pbmZpbml0ZS1zY3JvbGwvY29uZmlnLmpzIiwic3JjL2luZmluaXRlLXNjcm9sbC9jb250YWluZXIuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvaW5maW5pdGUtc2Nyb2xsLWJhc2UuanMiLCJzcmMvaW5maW5pdGUtc2Nyb2xsL21haW4uanMiLCJzcmMvaW5maW5pdGUtc2Nyb2xsL3BhZ2UuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvc2V0dGluZ3MuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvc3R5bGUuY3NzIiwic3JjL3F1ZXJ5LXN0cmluZy5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy9zdHlsZS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFdBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTGluayhsYWJlbCwgdXJsLCBvcmRlcikge1xyXG5cdGNvbnN0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5iXCIpO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGEuaHJlZiA9IHVybDtcclxuXHRhLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdGRpdi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0fVxyXG5cdGRpdi5hcHBlbmRDaGlsZChhKTtcclxuXHRuLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdHJldHVybiBkaXY7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4uL3F1ZXJ5LXN0cmluZ1wiKTtcclxuXHJcbmNvbnN0IHJlUGFnZUxpc3QgPSAvKFswLTksXSspXFxzKi1cXHMqKFswLTksXSspXFxzKm9mXFxzKihbMC05LF0rKS9pO1xyXG5jb25zdCByZVJlc3VsdHMgPSAvKFswLTksXSspXFxzKnJlc3VsdHM/L2k7XHJcblxyXG5cclxuY2xhc3MgUGFnZWluYXRpb25JbmZvIHtcclxuXHRjb25zdHJ1Y3RvcihwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2UsIHVybEJhc2UsIHBhZ2VGaWVsZE5hbWUpIHtcclxuXHRcdHRoaXMucGFnZUN1cnJlbnQgPSBwYWdlQ3VycmVudDtcclxuXHRcdHRoaXMucGFnZUNvdW50ID0gcGFnZUNvdW50O1xyXG5cdFx0dGhpcy5pdGVtQ291bnQgPSBpdGVtQ291bnQ7XHJcblx0XHR0aGlzLml0ZW1zT25QYWdlID0gaXRlbXNPblBhZ2U7XHJcblx0XHR0aGlzLml0ZW1zUGVyUGFnZSA9IGl0ZW1zUGVyUGFnZTtcclxuXHRcdHRoaXMudXJsQmFzZSA9IHVybEJhc2U7XHJcblx0XHR0aGlzLnBhZ2VGaWVsZE5hbWUgPSBwYWdlRmllbGROYW1lO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGFnZVVybChwYWdlSW5kZXgpIHtcclxuXHRcdGlmICh0aGlzLnVybEJhc2UgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy51cmxCYXNlLnJlcGxhY2UoL14oW14jXFw/XSopKFxcP1teI10qKT8oI1tcXHdcXFddKik/JC8sIChtMCwgbTEsIG0yLCBtMykgPT4ge1xyXG5cdFx0XHRtMiA9IChcclxuXHRcdFx0XHRwYWdlSW5kZXggIT09IDAgP1xyXG5cdFx0XHRcdChtMiA/IGAke20yfSYke3RoaXMucGFnZUZpZWxkTmFtZX09JHtwYWdlSW5kZXh9YCA6IGA/JHt0aGlzLnBhZ2VGaWVsZE5hbWV9PSR7cGFnZUluZGV4fWApIDpcclxuXHRcdFx0XHQobTIgfHwgXCJcIikpO1xyXG5cdFx0XHRyZXR1cm4gYCR7bTF9JHttMn0ke20zIHx8IFwiXCJ9YDtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTnVtYmVyKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRjb25zdCB2ID0gcGFyc2VJbnQodmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpLCAxMCk7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2KSA/IGRlZmF1bHRWYWx1ZSA6IHY7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlc0ZvckltYWdlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIi5zbj5kaXY+c3BhblwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYWdlQ3VycmVudCA9IHBhcnNlTnVtYmVyKG5vZGVzWzBdLnRleHRDb250ZW50LCAxKSAtIDE7XHJcblx0Y29uc3QgcGFnZUNvdW50ID0gcGFyc2VOdW1iZXIobm9kZXNbMV0udGV4dENvbnRlbnQsIDApO1xyXG5cdHJldHVybiBuZXcgUGFnZWluYXRpb25JbmZvKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIHBhZ2VDb3VudCwgMSwgMSwgbnVsbCwgbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUl0ZW1zUGVyUGFnZShwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlKSB7XHJcblx0cmV0dXJuIChwYWdlQ3VycmVudCArIDEgPCBwYWdlQ291bnQgfHwgcGFnZUN1cnJlbnQgPT09IDApID9cclxuXHRcdGl0ZW1zT25QYWdlIDpcclxuXHRcdE1hdGgucm91bmQoKGl0ZW1Db3VudCAtIGl0ZW1zT25QYWdlKSAvIHBhZ2VDdXJyZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGcm9tRnVsbEluZm8oY29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkge1xyXG5cdGNvbnN0IG1hdGNoID0gcmVQYWdlTGlzdC5leGVjKGNvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBzdGFydCA9IHBhcnNlTnVtYmVyKG1hdGNoWzFdLCAwKTtcclxuXHRjb25zdCBpdGVtc09uUGFnZSA9IHBhcnNlTnVtYmVyKG1hdGNoWzJdLCAwKSAtIChzdGFydCAtIDEpO1xyXG5cdGNvbnN0IGl0ZW1Db3VudCA9IHBhcnNlTnVtYmVyKG1hdGNoWzNdLCAwKTtcclxuXHRjb25zdCBpdGVtc1BlclBhZ2UgPSBjYWxjdWxhdGVJdGVtc1BlclBhZ2UocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSk7XHJcblxyXG5cdHJldHVybiB7aXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGb3JHYWxsZXJ5SW1hZ2VzKHBhZ2VMaXN0LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0Y29uc3Qgbm9kZSA9IHBhZ2VMaXN0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5ncGNcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsICYmIG5vZGUucGFyZW50Tm9kZSA9PT0gcGFnZUxpc3QucGFyZW50Tm9kZSkgP1xyXG5cdFx0Z2V0SXRlbXNGcm9tRnVsbEluZm8obm9kZS50ZXh0Q29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkgOlxyXG5cdFx0bnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0bGV0IGl0ZW1Db3VudCA9IG51bGw7XHJcblx0Zm9yIChjb25zdCBpcE5vZGUgb2YgaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwicC5pcFwiKSkge1xyXG5cdFx0Y29uc3QgaW5mbyA9IGdldEl0ZW1zRnJvbUZ1bGxJbmZvKGlwTm9kZS50ZXh0Q29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCk7XHJcblx0XHRpZiAoaW5mbyAhPT0gbnVsbCkgeyByZXR1cm4gaW5mbzsgfVxyXG5cclxuXHRcdGNvbnN0IG1hdGNoID0gcmVSZXN1bHRzLmV4ZWMoaXBOb2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRpdGVtQ291bnQgPSBwYXJzZU51bWJlcihtYXRjaFsxXSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKGl0ZW1Db3VudCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRsZXQgaXRlbXNPblBhZ2UgPSAwO1xyXG5cdGxldCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcImRpdi5pdGc+ZGl2XCIpO1xyXG5cdGlmICgoaXRlbXNPblBhZ2UgPSBub2Rlcy5sZW5ndGgpID09PSAwKSB7XHJcblx0XHRub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcInRhYmxlLml0Zz50Ym9keT50clwiKTtcclxuXHRcdGl0ZW1zT25QYWdlID0gbm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKGl0ZW1zT25QYWdlID4gMCAmJiBub2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwidGhcIikgIT09IG51bGwpIHtcclxuXHRcdFx0LS1pdGVtc09uUGFnZTsgLy8gSGVhZGVyIHJvd1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXNQZXJQYWdlID0gY2FsY3VsYXRlSXRlbXNQZXJQYWdlKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UpO1xyXG5cclxuXHRyZXR1cm4ge2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VzRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUxpc3QpIHtcclxuXHQvLyBDb3VudFxyXG5cdGNvbnN0IG5vZGVzID0gcGFnZUxpc3QucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xyXG5cdGNvbnN0IHBhZ2VDb3VudCA9IChub2Rlcy5sZW5ndGggPiAyID8gcGFyc2VOdW1iZXIobm9kZXNbbm9kZXMubGVuZ3RoIC0gMl0udGV4dENvbnRlbnQsIDEpIDogMCk7XHJcblxyXG5cdC8vIEN1cnJlbnRcclxuXHRjb25zdCBub2RlID0gcGFnZUxpc3QucXVlcnlTZWxlY3RvcihcInRkLnB0ZHNcIik7XHJcblx0Y29uc3QgcGFnZUN1cnJlbnQgPSAobm9kZSAhPT0gbnVsbCA/IHBhcnNlTnVtYmVyKG5vZGUudGV4dENvbnRlbnQsIDEpIC0gMSA6IDApO1xyXG5cclxuXHQvLyBJdGVtc1xyXG5cdGxldCBpdGVtQ291bnQgPSAwO1xyXG5cdGxldCBpdGVtc09uUGFnZSA9IDA7XHJcblx0bGV0IGl0ZW1zUGVyUGFnZSA9IDA7XHJcblxyXG5cdGxldCB2ID0gZ2V0SXRlbXNGb3JHYWxsZXJ5SW1hZ2VzKHBhZ2VMaXN0LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KTtcclxuXHRsZXQgcGFnZUZpZWxkTmFtZSA9IG51bGw7XHJcblx0bGV0IGlzR2FsbGVyeUxpc3QgPSBmYWxzZTtcclxuXHRpZiAodiAhPT0gbnVsbCkge1xyXG5cdFx0cGFnZUZpZWxkTmFtZSA9IFwicFwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2ID0gZ2V0SXRlbXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KTtcclxuXHRcdGlmICh2ICE9PSBudWxsKSB7XHJcblx0XHRcdHBhZ2VGaWVsZE5hbWUgPSBcInBhZ2VcIjtcclxuXHRcdFx0aXNHYWxsZXJ5TGlzdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICh2ICE9PSBudWxsKSB7XHJcblx0XHQoe2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX0gPSB2KTtcclxuXHR9XHJcblxyXG5cdC8vIFVybCBmb3JtYXRcclxuXHRjb25zdCBsaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiYVtocmVmXVwiKTtcclxuXHRsZXQgdXJsQmFzZSA9IG51bGw7XHJcblx0aWYgKGxpbmsgIT09IG51bGwgJiYgcGFnZUZpZWxkTmFtZSAhPT0gbnVsbCkge1xyXG5cdFx0dXJsQmFzZSA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdHVybEJhc2UgPSBxdWVyeVN0cmluZy5yZW1vdmVRdWVyeVBhcmFtZXRlcih1cmxCYXNlLCBwYWdlRmllbGROYW1lKTtcclxuXHRcdGlmIChpc0dhbGxlcnlMaXN0KSB7XHJcblx0XHRcdHVybEJhc2UgPSBxdWVyeVN0cmluZy5yZW1vdmVRdWVyeVBhcmFtZXRlcih1cmxCYXNlLCBcImZyb21cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmV3IFBhZ2VpbmF0aW9uSW5mbyhwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2UsIHVybEJhc2UsIHBhZ2VGaWVsZE5hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVVcmxRdWVyeVN0cmluZ0ZpZWxkKHVybCwgZmllbGQpIHtcclxuXHRyZXR1cm4gdXJsLnJlcGxhY2UoXHJcblx0XHRuZXcgUmVnRXhwKGAoWyZcXFxcP10pJHtmaWVsZH0oPzooPzo9W14mXSopPygmfCQpKWApLFxyXG5cdFx0KG0wLCBtMSwgbTIpID0+IChtMSA9PT0gXCI/XCIgJiYgbTIgPyBcIj9cIiA6IG0yKSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJbmZvKGh0bWwpIHtcclxuXHRpZiAoIWh0bWwpIHsgaHRtbCA9IGRvY3VtZW50OyB9XHJcblxyXG5cdGNvbnN0IHBhZ2VMaXN0ID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiLnB0dFwiKTtcclxuXHRyZXR1cm4gcGFnZUxpc3QgIT09IG51bGwgPyBnZXRQYWdlc0ZvckdhbGxlcnlMaXN0KGh0bWwsIHBhZ2VMaXN0KSA6IGdldFBhZ2VzRm9ySW1hZ2UoaHRtbCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5VXJsKG5vZGUpIHtcclxuXHRjb25zdCBsaW5rU2VsZWN0b3IgPSBcImFbaHJlZl1cIjtcclxuXHRjb25zdCBuYW1lTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5nbG5hbWVcIik7XHJcblx0aWYgKG5hbWVOb2RlICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBsaW5rID0gbmFtZU5vZGUucXVlcnlTZWxlY3RvcihsaW5rU2VsZWN0b3IpO1xyXG5cdFx0aWYgKGxpbmsgIT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdH1cclxuXHRcdGlmIChuYW1lTm9kZS5wYXJlbnROb2RlICE9PSBudWxsICYmIG5hbWVOb2RlLnBhcmVudE5vZGUubWF0Y2hlcyhsaW5rU2VsZWN0b3IpKSB7XHJcblx0XHRcdHJldHVybiBuYW1lTm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVVybHMoaHRtbCkge1xyXG5cdGlmICghaHRtbCkgeyBodG1sID0gZG9jdW1lbnQ7IH1cclxuXHJcblx0bGV0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2Lml0Zz5kaXZcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0bm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZS5pdGc+dGJvZHk+dHJcIik7XHJcblx0XHRpZiAobm9kZXMubGVuZ3RoID4gMCAmJiBub2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwidGhcIikgIT09IG51bGwpIHtcclxuXHRcdFx0bm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlcywgMSk7IC8vIE9taXQgaGVhZGVyIHJvd1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgdXJsID0gZ2V0R2FsbGVyeVVybChub2RlKTtcclxuXHRcdGlmICh1cmwgIT09IG51bGwpIHsgcmVzdWx0cy5wdXNoKHVybCk7IH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SW1hZ2VVcmxzKGh0bWwpIHtcclxuXHRpZiAoIWh0bWwpIHsgaHRtbCA9IGRvY3VtZW50OyB9XHJcblxyXG5cdGxldCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIi5nZHRsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdkdG1cIik7XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblxyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgbGluayA9IG5vZGUucXVlcnlTZWxlY3RvcihcImFbaHJlZl1cIik7XHJcblx0XHRpZiAobGluayAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXN1bHRzLnB1c2gobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0SW5mbyxcclxuXHRnZXRHYWxsZXJ5VXJscyxcclxuXHRnZXRHYWxsZXJ5SW1hZ2VVcmxzXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5jb25zdCB1cmxGcmFnbWVudCA9IHJlcXVpcmUoXCIuLi91cmwtZnJhZ21lbnRcIik7XHJcblxyXG5cclxuY29uc3Qgc2V0dGluZ3NDb250YWluZXJDbGFzcyA9IFwieC1zZXR0aW5ncy1jb250YWluZXJcIjtcclxuY29uc3Qgc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcyA9IFwieC1zZXR0aW5ncy1jb250YWluZXItaGlkZGVuXCI7XHJcbmNvbnN0IGRlZmF1bHRTZXR0aW5nc0hpZGRlbkNsYXNzID0gXCJ4LXNldHRpbmdzLWhpZGRlblwiO1xyXG5cclxubGV0IHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPSBudWxsO1xyXG5sZXQgc2V0dGluZ3NDb250YWluZXIgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExpbmsoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtbmF2LXNldHRpbmdzLWxpbmtcIjtcclxuXHJcblx0bGV0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0aWYgKG4gIT09IG51bGwpIHsgcmV0dXJuIG47IH1cclxuXHJcblx0Y29uc3QgbmF2QmFyID0gcmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXJcIik7XHJcblx0biA9IG5hdkJhci5hZGRMaW5rKFwieFwiLCBgL3Vjb25maWcucGhwJHt1cmxGcmFnbWVudC5jcmVhdGUoXCJzZXR0aW5nc1wiKX1gLCAxKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRuLmlkID0gaWQ7XHJcblx0cmV0dXJuIG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0c2V0dGluZ3NDb250YWluZXJPdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0ZXIuc3R1ZmZib3hcIik7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdHNldHRpbmdzQ29udGFpbmVyID0gc2V0dGluZ3NDb250YWluZXJPdXRlci5xdWVyeVNlbGVjdG9yKGAuJHtzZXR0aW5nc0NvbnRhaW5lckNsYXNzfWApO1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkge1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gYCR7c2V0dGluZ3NDb250YWluZXJDbGFzc30gJHtzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzfWA7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lck91dGVyLmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlkID0gXCJ4LXNldHRpbmdzXCI7XHJcblx0aWYgKCFzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkge1xyXG5cdFx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUvc2V0dGluZ3MuY3NzXCIpO1xyXG5cdFx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxuXHR9XHJcblxyXG5cdHVybEZyYWdtZW50LmFkZFJvdXRlKC9eXFwvc2V0dGluZ3MoXFwvW1xcd1xcV10qKT8kLywgb25TZXR0aW5nc1BhZ2VDaGFuZ2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25TZXR0aW5nc1BhZ2VDaGFuZ2VkKG1hdGNoKSB7XHJcblx0c2V0U2V0dGluZ3NWaXNpYmxlKG1hdGNoICE9PSBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2V0dGluZ3NWaXNpYmxlKHZpc2libGUpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXJPdXRlciA9PT0gbnVsbCB8fCBzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzKSAhPT0gdmlzaWJsZSkge1xyXG5cdFx0Ly8gTm8gY2hhbmdlXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MsICF2aXNpYmxlKTtcclxuXHJcblx0Zm9yIChjb25zdCBjaGlsZCBvZiBzZXR0aW5nc0NvbnRhaW5lck91dGVyLmNoaWxkcmVuKSB7XHJcblx0XHRpZiAoY2hpbGQgPT09IHNldHRpbmdzQ29udGFpbmVyKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKGRlZmF1bHRTZXR0aW5nc0hpZGRlbkNsYXNzLCB2aXNpYmxlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNlY3Rpb24oaGVhZGVyLCBpZCwgb3JkZXIpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZnVsbElkID0gYHgtc2V0dGluZ3Mtc2VjdGlvbi0ke2lkfWA7XHJcblxyXG5cdGxldCBzZWN0aW9uID0gc2V0dGluZ3NDb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7ZnVsbElkfWApO1xyXG5cdGlmIChzZWN0aW9uID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNlY3Rpb24uaWQgPSBmdWxsSWQ7XHJcblx0XHRzZWN0aW9uLmNsYXNzTmFtZSA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRhaW5lclwiO1xyXG5cdFx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0c2VjdGlvbi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblx0fVxyXG5cclxuXHRsZXQgY2xzID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24taGVhZGVyXCI7XHJcblx0bGV0IHNlY3Rpb25IZWFkZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nsc31gKTtcclxuXHRpZiAoc2VjdGlvbkhlYWRlciA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHRcdHNlY3Rpb25IZWFkZXIuY2xhc3NOYW1lID0gY2xzO1xyXG5cdFx0c2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlcjtcclxuXHRcdGNvbnN0IHJlbGF0aXZlID0gc2VjdGlvbi5maXJzdENoaWxkO1xyXG5cdFx0aWYgKHJlbGF0aXZlICE9PSBudWxsKSB7XHJcblx0XHRcdHNlY3Rpb24uaW5zZXJ0QmVmb3JlKHJlbGF0aXZlLCBzZWN0aW9uSGVhZGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbHMgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1jb250ZW50XCI7XHJcblx0bGV0IHNlY3Rpb25Db250ZW50ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKGAuJHtjbHN9YCk7XHJcblx0aWYgKHNlY3Rpb25Db250ZW50ID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uQ29udGVudC5jbGFzc05hbWUgPSBjbHM7XHJcblx0XHRzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzZWN0aW9uQ29udGVudDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmssXHJcblx0aW5pdGlhbGl6ZSxcclxuXHRhZGRTZWN0aW9uXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gaXNEYXJrKCkge1xyXG5cdHJldHVybiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluZGV4T2YoXCJleGhlbnRhaVwiKSA+PSAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RG9jdW1lbnREYXJrRmxhZygpIHtcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIngtaXMtZGFya1wiLCBpc0RhcmsoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFycm93SWNvblVybCgpIHtcclxuXHRyZXR1cm4gKGlzRGFyaygpID8gXCJodHRwczovL2V4aGVudGFpLm9yZy9pbWcvbXIuZ2lmXCIgOiBcImh0dHBzOi8vZWhndC5vcmcvZy9tci5naWZcIik7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpc0RhcmssXHJcblx0c2V0RG9jdW1lbnREYXJrRmxhZyxcclxuXHRnZXRBcnJvd0ljb25VcmxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi54LXNldHRpbmdzLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbi10b3A6LTFlbX0ueC1zZXR0aW5ncy1jb250YWluZXIueC1zZXR0aW5ncy1jb250YWluZXItaGlkZGVue2Rpc3BsYXk6bm9uZX0ueC1zZXR0aW5ncy1oaWRkZW57ZGlzcGxheTpub25lIWltcG9ydGFudH0ueC1zZXR0aW5ncy1vcHRpb24gc2VsZWN0e21hcmdpbi1yaWdodDouNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tY29udGFpbmVye2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttYXJnaW4tdG9wOjFlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRlbnR7bWFyZ2luOjhweCBhdXRvIDEwcHggMTBweDtjbGVhcjpib3RofS54LXNldHRpbmdzLXNlY3Rpb24taGVhZGVye2ZvbnQtc2l6ZToxLjI1ZW07bGluZS1oZWlnaHQ6MS41ZW07bWFyZ2luOi4yNWVtIDB9Lngtc2V0dGluZ3Mtc2VjdGlvbntkaXNwbGF5OmZsZXg7ZmxleC1mbG93OnJvdyB3cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQ7ZmxleC13cmFwOm5vd3JhcDt3aWR0aDoxMDAlO3BhZGRpbmc6LjVlbSAwfS54LXNldHRpbmdzLXNlY3Rpb24rLngtc2V0dGluZ3Mtc2VjdGlvbntib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4yNSl9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXNldHRpbmdzLXNlY3Rpb24rLngtc2V0dGluZ3Mtc2VjdGlvbntib3JkZXItdG9wLWNvbG9yOnJnYmEoOTIsMTMsMTgsLjI1KX0ueC1zZXR0aW5ncy1zZWN0aW9uLWxlZnR7ZmxleDoxIDEgYXV0bztwYWRkaW5nLXJpZ2h0Oi41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodHtmbGV4OjAgMCBhdXRvO21pbi13aWR0aDozMCU7dGV4dC1hbGlnbjpyaWdodH0ueC1zZXR0aW5ncy1zZWN0aW9uLXRpdGxle2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxLjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9ue2xpbmUtaGVpZ2h0OjEuMzVlbX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdLGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MDttYXJnaW46MDtwYWRkaW5nOi4yNWVtIC41ZW07bGluZS1oZWlnaHQ6MS4zNzVlbTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGV9OnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0sOnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXt3aWR0aDoyMGVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl17d2lkdGg6NWVtOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfS54LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lciAubGN7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0Oi02cHh9Lngtc2V0dGluZ3MtY29udGFpbmVyIGNvZGV7Zm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JyxDb3VyaWVyLG1vbm9zcGFjZTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7Zm9udC13ZWlnaHQ6NzAwfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1zZXR0aW5ncy1jb250YWluZXIgY29kZXtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDF9Lngtc2V0dGluZ3MtbGlnaHQtdGV4dHtmb250LXdlaWdodDo0MDA7b3BhY2l0eTouNzV9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246bGVmdH0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZXtkaXNwbGF5OnRhYmxlfS54LXNldHRpbmdzLWlucHV0LXJvd3tkaXNwbGF5OnRhYmxlLXJvd30ueC1zZXR0aW5ncy1pbnB1dC1yb3cueC1zZXR0aW5ncy1pbnB1dC1oZWFkZXItcm93e2ZvbnQtc2l6ZTouOGVtO2xpbmUtaGVpZ2h0OjFlbTtvcGFjaXR5Oi43NX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbH0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsKy54LXNldHRpbmdzLWlucHV0LWNlbGx7cGFkZGluZy1sZWZ0Oi4yNWVtfS54LXNldHRpbmdzLWlucHV0LWxhYmVse2N1cnNvcjpwb2ludGVyO21hcmdpbjowIDAgMCAxZW19Lngtc2V0dGluZ3MtaW5wdXQtY2hlY2tib3gtcHJlZml4e3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLXJpZ2h0Oi41ZW19XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBnbSA9IHJlcXVpcmUoXCIuL2dtXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpIHtcclxuXHRsZXQgY29uZmlnID0gbnVsbDtcclxuXHRsZXQgY29uZmlnR2V0UHJvbWlzZSA9IG51bGw7XHJcblxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnKCkge1xyXG5cdFx0Y29uc3QgY29uZmlnU3RyaW5nID0gYXdhaXQgZ20uZ2V0VmFsdWUoY29uZmlnS2V5LCBudWxsKTtcclxuXHRcdGlmICh0eXBlb2YoY29uZmlnU3RyaW5nKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IGMgPSBKU09OLnBhcnNlKGNvbmZpZ1N0cmluZyk7XHJcblx0XHRcdFx0aWYgKGMgIT09IG51bGwgJiYgdHlwZW9mKGMpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGMpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRGVmYXVsdCwgYyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ0RlZmF1bHQpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0aWYgKGNvbmZpZyAhPT0gbnVsbCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7IH1cclxuXHJcblx0XHRpZiAoY29uZmlnR2V0UHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRjb25maWdHZXRQcm9taXNlID0gbG9hZENvbmZpZygpLnRoZW4oKHYpID0+IGNvbmZpZyA9IHYpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb25maWdHZXRQcm9taXNlO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gc2F2ZSgpIHtcclxuXHRcdGlmIChjb25maWcgIT09IG51bGwpIHtcclxuXHRcdFx0YXdhaXQgZ20uc2V0VmFsdWUoY29uZmlnS2V5LCBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIFwiXCIpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGJpbmRJbnB1dChub2RlLCBzZXR0aW5nTmFtZSwgb3B0aW9ucywgdmFsdWVOYW1lKSB7XHJcblx0XHRjb25zdCBjID0gYXdhaXQgZ2V0KCk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZih2YWx1ZU5hbWUpID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHZhbHVlTmFtZSA9IGdldERlZmF1bHRWYWx1ZU5hbWUobm9kZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlSW5wdXQgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHt2YWx1ZSwgdmFsaWR9ID0gY29udmVydFRvVHlwZShjW3NldHRpbmdOYW1lXSwgb3B0aW9ucywgdHJ1ZSk7XHJcblx0XHRcdGlmICh2YWxpZCkgeyBub2RlW3ZhbHVlTmFtZV0gPSB2YWx1ZTsgfVxyXG5cdFx0fTtcclxuXHJcblx0XHR1cGRhdGVJbnB1dCgpO1xyXG5cclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHt2YWx1ZSwgdmFsaWR9ID0gY29udmVydFRvVHlwZShub2RlW3ZhbHVlTmFtZV0sIG9wdGlvbnMsIGZhbHNlKTtcclxuXHRcdFx0aWYgKHZhbGlkKSB7XHJcblx0XHRcdFx0Y1tzZXR0aW5nTmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRzYXZlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVwZGF0ZUlucHV0KCk7XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdldCxcclxuXHRcdHNhdmUsXHJcblx0XHRiaW5kSW5wdXRcclxuXHR9O1xyXG59XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdFR5cGVDb252ZXJ0T3B0aW9ucyA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZU5hbWUobm9kZSkge1xyXG5cdHN3aXRjaCAobm9kZS50YWdOYW1lKSB7XHJcblx0XHRjYXNlIFwiSU5QVVRcIjpcclxuXHRcdFx0aWYgKG5vZGUudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7IHJldHVybiBcImNoZWNrZWRcIjsgfVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdHJldHVybiBcInZhbHVlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb1R5cGUodmFsdWUsIG9wdGlvbnMsIHRvSW5wdXQpIHtcclxuXHRpZiAodHlwZW9mKG9wdGlvbnMpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIG9wdGlvbnMsIGRlZmF1bHRUeXBlQ29udmVydE9wdGlvbnMsIHRvSW5wdXQpO1xyXG5cdH0gaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgdHlwZW9mKG9wdGlvbnMpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZihvcHRpb25zLnR5cGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIG9wdGlvbnMudHlwZSwgb3B0aW9ucywgdG9JbnB1dCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiB7IHZhbHVlLCB2YWxpZDogdHJ1ZSB9O1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIHR5cGVOYW1lLCBvcHRpb25zLCB0b0lucHV0KSB7XHJcblx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcblx0Ly8gQ29udmVydFxyXG5cdHN3aXRjaCAodHlwZU5hbWUpIHtcclxuXHRcdGNhc2UgXCJib29sZWFuXCI6XHJcblx0XHRcdHZhbHVlID0gISF2YWx1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiaW50ZWdlclwiOlxyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHR2YWx1ZSA9ICh0eXBlTmFtZSA9PT0gXCJudW1iZXJcIiA/IHBhcnNlRmxvYXQoYCR7dmFsdWV9YCkgOiBwYXJzZUludChgJHt2YWx1ZX1gLCAxMCkpO1xyXG5cdFx0XHRpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IDA7XHJcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIFRyYW5zZm9ybVxyXG5cdGlmICghdG9JbnB1dCAmJiB0eXBlb2Yob3B0aW9ucy5pbnB1dFRvVmFsdWUpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHZhbHVlID0gb3B0aW9ucy5pbnB1dFRvVmFsdWUodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gTGltaXRzXHJcblx0c3dpdGNoICh0eXBlTmFtZSkge1xyXG5cdFx0Y2FzZSBcImludGVnZXJcIjpcclxuXHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1pbikgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPCBvcHRpb25zLm1pbikgeyB2YWx1ZSA9IG9wdGlvbnMubWluOyB9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5tYXgpID09PSBcIm51bWJlclwiICYmIHZhbHVlID4gb3B0aW9ucy5tYXgpIHsgdmFsdWUgPSBvcHRpb25zLm1heDsgfVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1heExlbmd0aCkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUubGVuZ3RoID4gb3B0aW9ucy5tYXhMZW5ndGgpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBvcHRpb25zLm1heExlbmd0aCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHQvLyBUcmFuc2Zvcm1cclxuXHRpZiAodG9JbnB1dCAmJiB0eXBlb2Yob3B0aW9ucy52YWx1ZVRvSW5wdXQpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHZhbHVlID0gb3B0aW9ucy52YWx1ZVRvSW5wdXQodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdmFsdWUsIHZhbGlkIH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBnbSA9IHJlcXVpcmUoXCIuL2dtXCIpO1xyXG5cclxuXHJcbmNsYXNzIEZldGNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgcmVzcG9uc2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJGZXRjaEVycm9yXCI7XHJcblx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXNwb25zZSB7XHJcblx0Y29uc3RydWN0b3IocmVhZHlTdGF0ZSwgcmVzcG9uc2VIZWFkZXJzLCByZXNwb25zZVRleHQsIHN0YXR1cywgc3RhdHVzVGV4dCkge1xyXG5cdFx0dGhpcy5yZWFkeVN0YXRlID0gcmVhZHlTdGF0ZTtcclxuXHRcdHRoaXMucmVzcG9uc2VIZWFkZXJzID0gcmVzcG9uc2VIZWFkZXJzO1xyXG5cdFx0dGhpcy5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHQ7XHJcblx0XHR0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuXHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBQcm9ncmVzc0V2ZW50IHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGhDb21wdXRhYmxlLCBsb2FkZWQsIHRvdGFsKSB7XHJcblx0XHR0aGlzLmxlbmd0aENvbXB1dGFibGUgPSBsZW5ndGhDb21wdXRhYmxlO1xyXG5cdFx0dGhpcy5sb2FkZWQgPSBsb2FkZWQ7XHJcblx0XHR0aGlzLnRvdGFsID0gdG90YWw7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzcG9uc2VIZWFkZXJNYXAoYWxsSGVhZGVycykge1xyXG5cdGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IHt9O1xyXG5cclxuXHRjb25zdCByZSA9IC9cXHMqKC4qKVxccyo6XFxzKiguKilcXHMqLztcclxuXHRmb3IgKGNvbnN0IGxpbmUgb2YgYWxsSGVhZGVycy5yZXBsYWNlKC9cXHJcXG5cXHMqJC8sIFwiXCIpLnNwbGl0KFwiXFxyXFxuXCIpKSB7XHJcblx0XHRjb25zdCBtID0gcmUuZXhlYyhsaW5lKTtcclxuXHRcdGlmIChtICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1ttWzFdLnRvTG93ZXJDYXNlKCldID0gbVsyXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNwb25zZUhlYWRlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0eGhyLnJlYWR5U3RhdGUsXHJcblx0XHRnZXRSZXNwb25zZUhlYWRlck1hcCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpLFxyXG5cdFx0eGhyLnJlc3BvbnNlVGV4dCxcclxuXHRcdHhoci5zdGF0dXMsXHJcblx0XHR4aHIuc3RhdHVzVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykge1xyXG5cdGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0Ly9jb25zdCBiaW5hcnkgPSBvcHRpb25zLmJpbmFyeTtcclxuXHRjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG5cdGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuXHRjb25zdCBvbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xyXG5cdGNvbnN0IG92ZXJyaWRlTWltZVR5cGUgPSBvcHRpb25zLm92ZXJyaWRlTWltZVR5cGU7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHR4aHIudGltZW91dCA9IHRpbWVvdXQ7XHJcblx0XHRpZiAodHlwZW9mKG92ZXJyaWRlTWltZVR5cGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKG92ZXJyaWRlTWltZVR5cGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGhlYWRlcnMgIT09IG51bGwgJiYgdHlwZW9mKGhlYWRlcnMpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdGZvciAobGV0IGsgaW4gaGVhZGVycykge1xyXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIGhlYWRlcnNba10pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoY29udmVydFhoclJlc3BvbnNlKHhocikpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke3hoci5zdGF0dXNUZXh0fSAoJHt4aHIuc3RhdHVzfSlgLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5zZW5kKGRhdGEpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydEdtUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0cmVzcG9uc2UucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHJlc3BvbnNlLnJlc3BvbnNlSGVhZGVycyksXHJcblx0XHRyZXNwb25zZS5yZXNwb25zZVRleHQsXHJcblx0XHRyZXNwb25zZS5zdGF0dXMsXHJcblx0XHRyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdGNvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IGRldGFpbHMgPSB7XHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcclxuXHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogb3ZlcnJpZGVNaW1lVHlwZSxcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0YmluYXJ5OiBiaW5hcnksXHJcblx0XHRcdHN5bmNocm9ub3VzOiBmYWxzZSxcclxuXHRcdFx0dGltZW91dDogdGltZW91dFxyXG5cdFx0fTtcclxuXHJcblx0XHRkZXRhaWxzLm9ubG9hZCA9IChlKSA9PiByZXNvbHZlKGNvbnZlcnRHbVJlc3BvbnNlKGUpKTtcclxuXHRcdGRldGFpbHMub25lcnJvciA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7ZS5zdGF0dXNUZXh0fSAoJHtlLnN0YXR1c30pYCwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub25hYm9ydCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub250aW1lb3V0ID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob25wcm9ncmVzcykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRkZXRhaWxzLm9ucHJvZ3Jlc3MgPSAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z20ueG1sSHR0cFJlcXVlc3QoZGV0YWlscyk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc0dtU3VwcG9ydGVkKHVzZUdtKSB7XHJcblx0cmV0dXJuICh1c2VHbSAmJiB0eXBlb2YoZ20ueG1sSHR0cFJlcXVlc3QpID09PSBcImZ1bmN0aW9uXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJHRVRcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHJlcXVlc3Q6IHJlcXVlc3QsXHJcblx0Z2V0OiBnZXQsXHJcblx0cG9zdDogcG9zdCxcclxuXHRnbToge1xyXG5cdFx0cmVxdWVzdDogcmVxdWVzdEdtLFxyXG5cdFx0Z2V0OiBnZXRHbSxcclxuXHRcdHBvc3Q6IHBvc3RHbSxcclxuXHR9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9Qcm9taXNlKGZuLCBzZWxmKSB7XHJcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc29sdmUoZm4uYXBwbHkoc2VsZiwgYXJncykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgZ20gPSAoKG9iamVjdHMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRpZiAob2JqLkdNICE9PSBudWxsICYmIHR5cGVvZihvYmouR00pID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9iai5HTTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdGNvbnN0IG1hcHBpbmcgPSBbXHJcblx0XHRbIFwiZ2V0VmFsdWVcIiwgXCJHTV9nZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwic2V0VmFsdWVcIiwgXCJHTV9zZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwiZGVsZXRlVmFsdWVcIiwgXCJHTV9kZWxldGVWYWx1ZVwiIF0sXHJcblx0XHRbIFwieG1sSHR0cFJlcXVlc3RcIiwgXCJHTV94bWxodHRwUmVxdWVzdFwiIF1cclxuXHRdO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBtYXBwaW5nKSB7XHJcblx0XHRsZXQgcHJvbWlzZSA9IG51bGw7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGNvbnN0IGZuID0gb2JqW3ZhbHVlXTtcclxuXHRcdFx0aWYgKHR5cGVvZihmbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHByb21pc2UgPSB0b1Byb21pc2UoZm4sIG9iaik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChwcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdHByb21pc2UgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QobmV3IEVycm9yKGBOb3Qgc3VwcG9ydGVkICgke2tleX0pYCkpKTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdFtrZXldID0gcHJvbWlzZTtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufSkuY2FsbCh0aGlzLCBbdGhpcywgd2luZG93XSk7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBjb25maWdLZXkgPSBcIngtaW5maW5pdGUtc2Nyb2xsLWNvbmZpZ1wiO1xyXG5jb25zdCBjb25maWdEZWZhdWx0ID0ge1xyXG5cdGRlbGF5OiAxLCAvLyBmbG9hdCBbMC1pbmZdOyBzZWNvbmRzIGJlZm9yZSBsb2FkaW5nIGEgbmV3IHBhZ2VcclxuXHRsb2FkQXR0ZW1wdHM6IDEsIC8vIGludGVnZXIgWzAtaW5mXTsgbnVtYmVyIG9mIGF0dGVtcHRzIGZvciBsb2FkaW5nIG5ldyBwYWdlc1xyXG5cdHBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkOiAwLjUsIC8vIGZsb2F0IFswLTFdOyA1MCUgb2YgcGFnZSBtdXN0IGJlIHZpZXdlZCBiZWZvcmUgbG9hZGluZyB0aGUgbmV4dFxyXG5cdGFsbG93Rm9yR2FsbGVyeUltYWdlczogdHJ1ZSwgLy8gYm9vbGVhblxyXG5cdGFsbG93Rm9yR2FsbGVyeUxpc3RzOiB0cnVlLCAvLyBib29sZWFuXHJcblx0ZW5hYmxlZEJ5RGVmYXVsdEZvckdhbGxlcnlJbWFnZXM6IHRydWUsIC8vIGJvb2xlYW5cclxuXHRlbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUxpc3RzOiB0cnVlIC8vIGJvb2xlYW5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKS5jcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGVudFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci10b3AtbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+VG9wPC9hPjxsYWJlbCBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveC1sYWJlbDBcXFwiPjxsYWJlbCBjbGFzcz1cXFwibGMgeC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveC1sYWJlbDEgeC1jaGVja2JveC1zbWFsbFxcXCI+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveFxcXCI+PHNwYW4+PC9zcGFuPiBJbmZpbml0ZSBzY3JvbGw8L2xhYmVsPjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBJbmZpbml0ZVNjcm9sbEJhc2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5wYWdlVmlld1BlcmNlbnRSZXF1aXJlZCA9IDAuNTsgLy8gNTAlIG9mIHBhZ2UgbXVzdCBiZSB2aWV3ZWQgYmVmb3JlIGxvYWRpbmcgdGhlIG5leHRcclxuXHRcdHRoaXMucGFnZU5vZGUgPSBudWxsO1xyXG5cdFx0dGhpcy5jb250YWluZXJOb2RlID0gd2luZG93O1xyXG5cclxuXHRcdHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLl9zY3JvbGxZID0gMDtcclxuXHRcdHRoaXMuX29uU2Nyb2xsID0gKCkgPT4gb25TY3JvbGxDaGFuZ2VkLmNhbGwodGhpcywgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0bG9hZE5leHRQYWdlKCkge31cclxuXHJcblx0aXNBY3RpdmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXNBY3RpdmU7XHJcblx0fVxyXG5cdHNldEFjdGl2ZSh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdGlmICh0aGlzLl9pc0FjdGl2ZSkgeyByZXR1cm47IH1cclxuXHRcdFx0dGhpcy5faXNBY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLl9zY3JvbGxZID0gZ2V0UGFnZVNjcm9sbFkoKTtcclxuXHRcdFx0dGhpcy5jb250YWluZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5fb25TY3JvbGwsIGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghdGhpcy5faXNBY3RpdmUpIHsgcmV0dXJuOyB9XHJcblx0XHRcdHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX29uU2Nyb2xsLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDaGVjaygpIHtcclxuXHRcdG9uU2Nyb2xsQ2hhbmdlZC5jYWxsKHRoaXMsIHRydWUpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uU2Nyb2xsQ2hhbmdlZChmb3JjZSkge1xyXG5cdGNvbnN0IHNjcm9sbFlOZXcgPSBnZXRQYWdlU2Nyb2xsWSgpO1xyXG5cdGNvbnN0IHNjcm9sbFlQcmUgPSB0aGlzLl9zY3JvbGxZO1xyXG5cdHRoaXMuX3Njcm9sbFkgPSBzY3JvbGxZTmV3O1xyXG5cclxuXHQvLyBNdXN0IGhhdmUgdmFsaWQgdGFyZ2V0XHJcblx0aWYgKHRoaXMucGFnZU5vZGUgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdC8vIERvbid0IGxvYWQgaWYgYWxyZWFkeSBsb2FkaW5nLCBpZiBub3Qgc2Nyb2xsZWQgYXQgYWxsLCBvciBpZiBzY3JvbGxpbmcgdXBcclxuXHRpZiAoZm9yY2UgIT09IHRydWUpIHtcclxuXHRcdGlmIChzY3JvbGxZTmV3IDwgMSB8fCBzY3JvbGxZTmV3IDw9IHNjcm9sbFlQcmUpIHsgcmV0dXJuOyB9XHJcblx0fVxyXG5cclxuXHQvLyBEb24ndCBsb2FkIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgZW50aXJlbHkgb2ZmLXNjcmVlblxyXG5cdGNvbnN0IHJlY3QgPSB0aGlzLnBhZ2VOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdGlmIChyZWN0LnkgKyByZWN0LmhlaWdodCA8IDApIHsgcmV0dXJuOyB9XHJcblxyXG5cdC8vIERvbid0IGxvYWQgaWYgbm90IGVub3VnaCBvZiB0aGUgcGFnZSBoYXMgYmVlbiB2aWV3ZWRcclxuXHRjb25zdCBoZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcclxuXHRpZiAocmVjdC55ICsgcmVjdC5oZWlnaHQgKiB0aGlzLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkID49IGhlaWdodCkgeyByZXR1cm47IH1cclxuXHJcblx0Ly8gTG9hZFxyXG5cdHRoaXMubG9hZE5leHRQYWdlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpIHtcclxuXHRyZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VTY3JvbGxZKCkge1xyXG5cdGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRyZXR1cm4gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAtIChkb2MuY2xpZW50VG9wIHx8IDApO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0SW5maW5pdGVTY3JvbGxCYXNlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IGZldGNoID0gcmVxdWlyZShcIi4uL2ZldGNoXCIpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuY29uc3QgcGFnaW5hdGlvbiA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnaW5hdGlvblwiKTtcclxuY29uc3Qgc2V0dGluZ3MgPSByZXF1aXJlKFwiLi4vYXBpL3NldHRpbmdzXCIpO1xyXG5jb25zdCBJbmZpbml0ZVNjcm9sbEJhc2UgPSByZXF1aXJlKFwiLi9pbmZpbml0ZS1zY3JvbGwtYmFzZVwiKS5JbmZpbml0ZVNjcm9sbEJhc2U7XHJcblxyXG5sZXQgY3VycmVudFBhZ2VUeXBlID0gbnVsbDtcclxubGV0IHNjcm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG5jbGFzcyBJbmZpbml0ZVNjcm9sbCBleHRlbmRzIEluZmluaXRlU2Nyb2xsQmFzZSB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnLCBwYWdlVHlwZSwgcGFnZU5vZGUsIHBhZ2VzSW5mbykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkID0gY29uZmlnLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLnBhZ2VUeXBlID0gcGFnZVR5cGU7XHJcblx0XHR0aGlzLnBhZ2VOb2RlID0gcGFnZU5vZGU7XHJcblx0XHR0aGlzLnBhZ2VzSW5mbyA9IHBhZ2VzSW5mbztcclxuXHRcdHRoaXMuY29udGVudENvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5fZGVsYXlQcm9taXNlID0gbnVsbDtcclxuXHRcdHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5faXNFbmFibGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLl9pc0VuYWJsZWRDaGVja2JveCA9IG51bGw7XHJcblx0XHR0aGlzLl9wYWdlV3JhcHBlclRlbXBsYXRlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmluaXRpYWxpemVDb250ZW50Q29udGFpbmVyKCk7XHJcblx0fVxyXG5cclxuXHJcblx0Z2V0UGFnZU1vZGUocGFnZVR5cGUpIHtcclxuXHRcdHN3aXRjaCAocGFnZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0XHRyZXR1cm4gXCJpbWFnZS1saXN0XCI7XHJcblx0XHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdFx0Y2FzZSBcImZhdm9yaXRlc1wiOlxyXG5cdFx0XHRcdHJldHVybiBcImdhbGxlcnktbGlzdFwiO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZUNvbnRlbnRDb250YWluZXIoKSB7XHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUNvbnRlbnRDb250YWluZXIoKTtcclxuXHRcdHRoaXMucGFnZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jb250ZW50Q29udGFpbmVyLCB0aGlzLnBhZ2VOb2RlKTtcclxuXHJcblx0XHR0aGlzLnBhZ2VOb2RlID0gdGhpcy5jcmVhdGVXcmFwcGVkUGFnZSh0aGlzLnBhZ2VOb2RlLCB0aGlzLnBhZ2VzSW5mby5wYWdlQ3VycmVudCk7XHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wYWdlTm9kZSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDb250ZW50Q29udGFpbmVyKCkge1xyXG5cdFx0Y29uc3QgaHRtbCA9IHJlcXVpcmUoXCIuL2NvbnRhaW5lci5odG1sXCIpO1xyXG5cdFx0Y29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiLngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lclwiKTtcclxuXHJcblx0XHRjb25zdCBtb2RlID0gdGhpcy5nZXRQYWdlTW9kZSh0aGlzLnBhZ2VUeXBlKTtcclxuXHRcdGlmIChtb2RlICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXgtaW5maW5pdGUtc2Nyb2xsLW1vZGVcIiwgbW9kZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdG9wID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLXRvcC1saW5rXCIpO1xyXG5cdFx0dG9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0sIGZhbHNlKTtcclxuXHJcblx0XHR0aGlzLl9pc0VuYWJsZWRDaGVja2JveCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLngtaW5maW5pdGUtc2Nyb2xsLWVuYWJsZWQtY2hlY2tib3hcIik7XHJcblx0XHR0aGlzLl9pc0VuYWJsZWRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRFbmFibGVkKHRoaXMuX2lzRW5hYmxlZENoZWNrYm94LmNoZWNrZWQpO1xyXG5cdFx0XHRpZiAodGhpcy5pc0VuYWJsZWQoKSkgeyB0aGlzLnVwZGF0ZUNoZWNrKCk7IH1cclxuXHRcdH0sIGZhbHNlKTtcclxuXHJcblx0XHRyZXR1cm4gY29udGFpbmVyO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlV3JhcHBlZFBhZ2UoY29udGVudCwgcGFnZUluZGV4KSB7XHJcblx0XHRpZiAodGhpcy5fcGFnZVdyYXBwZXJUZW1wbGF0ZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBodG1sID0gcmVxdWlyZShcIi4vcGFnZS5odG1sXCIpO1xyXG5cdFx0XHRjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xyXG5cdFx0XHR0aGlzLl9wYWdlV3JhcHBlclRlbXBsYXRlID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIueC1pbmZpbml0ZS1zY3JvbGwtcGFnZVwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB3cmFwcGVyID0gdGhpcy5fcGFnZVdyYXBwZXJUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHRjb25zdCBsaW5rID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtbGlua1wiKTtcclxuXHRcdGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB0aGlzLnBhZ2VzSW5mby5jcmVhdGVQYWdlVXJsKHBhZ2VJbmRleCkpO1xyXG5cdFx0bGluay50ZXh0Q29udGVudCA9IGBQYWdlICR7cGFnZUluZGV4ICsgMX1gO1xyXG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHRcdHJldHVybiB3cmFwcGVyO1xyXG5cdH1cclxuXHJcblxyXG5cdGlzRW5hYmxlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9pc0VuYWJsZWQ7XHJcblx0fVxyXG5cclxuXHRzZXRFbmFibGVkKHZhbHVlKSB7XHJcblx0XHRjb25zdCBpc0NvbXBsZXRlID0gdGhpcy5pc0NvbXBsZXRlKCk7XHJcblx0XHR0aGlzLl9pc0VuYWJsZWQgPSAhIXZhbHVlICYmICFpc0NvbXBsZXRlO1xyXG5cclxuXHRcdGlmICghdGhpcy5faXNMb2FkaW5nKSB7XHJcblx0XHRcdHRoaXMuc2V0QWN0aXZlKHRoaXMuX2lzRW5hYmxlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5faXNFbmFibGVkQ2hlY2tib3guY2hlY2tlZCA9IHRoaXMuX2lzRW5hYmxlZCB8fCBpc0NvbXBsZXRlO1xyXG5cdH1cclxuXHJcblx0aXNDb21wbGV0ZSgpIHtcclxuXHRcdHJldHVybiAodGhpcy5wYWdlc0luZm8ucGFnZUN1cnJlbnQgKyAxID49IHRoaXMucGFnZXNJbmZvLnBhZ2VDb3VudCk7XHJcblx0fVxyXG5cclxuXHRnZXROZXh0UGFnZVVybCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhZ2VzSW5mby5jcmVhdGVQYWdlVXJsKHRoaXMucGFnZXNJbmZvLnBhZ2VDdXJyZW50ICsgMSk7XHJcblx0fVxyXG5cclxuXHRnZXRQYWdlRGF0YUZyb21IdG1sKGh0bWwpIHtcclxuXHRcdGNvbnN0IGNvbnRlbnQgPSBnZXREZWZhdWx0UGFnZUNvbnRlbnQoaHRtbCwgdGhpcy5wYWdlVHlwZSk7IC8vIGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZHRcIik7XHJcblx0XHRpZiAoY29udGVudCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG5cdFx0bGV0IGNsYXNzTmFtZSA9IGNvbnRlbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIjtcclxuXHRcdGlmIChjbGFzc05hbWUpIHsgY2xhc3NOYW1lICs9IFwiIFwiOyB9XHJcblx0XHRjbGFzc05hbWUgKz0gXCJ4LWluZmluaXRlLXNjcm9sbFwiO1xyXG5cdFx0Y29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc05hbWUpO1xyXG5cclxuXHRcdHJldHVybiB7IGNvbnRlbnQgfTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvYWROZXh0UGFnZSgpIHtcclxuXHRcdGlmICghaXNXaW5kb3dWaXNpYmxlKCkpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcblx0XHRpZiAodGhpcy5faXNMb2FkaW5nKSB7IHJldHVybjsgfVxyXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZSgpKSB7XHJcblx0XHRcdHRoaXMucGFnZU5vZGUgPSBudWxsO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gTG9hZCBkYXRhXHJcblx0XHRjb25zdCB1cmwgPSB0aGlzLmdldE5leHRQYWdlVXJsKCk7XHJcblx0XHRsZXQgcGFnZURhdGE7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLl9pc0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRwYWdlRGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2hQYWdlRGF0YSh1cmwsIHRoaXMuY29uZmlnLmxvYWRBdHRlbXB0cywgdGhpcy5jb25maWcuZGVsYXkpO1xyXG5cdFx0fVxyXG5cdFx0ZmluYWxseSB7XHJcblx0XHRcdHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHBhZ2VEYXRhID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdC8vIFVwZGF0ZSBwYWdlXHJcblx0XHQrK3RoaXMucGFnZXNJbmZvLnBhZ2VDdXJyZW50O1xyXG5cclxuXHRcdC8vIENyZWF0ZSBub2RlXHJcblx0XHRjb25zdCBuZXdQYWdlTm9kZSA9IHRoaXMuY3JlYXRlV3JhcHBlZFBhZ2UocGFnZURhdGEuY29udGVudCwgdGhpcy5wYWdlc0luZm8ucGFnZUN1cnJlbnQpO1xyXG5cdFx0dGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1BhZ2VOb2RlKTtcclxuXHJcblx0XHQvLyBEb25lP1xyXG5cdFx0aWYgKHRoaXMuaXNDb21wbGV0ZSgpKSB7XHJcblx0XHRcdHRoaXMucGFnZU5vZGUgPSBudWxsO1xyXG5cdFx0XHR0aGlzLnNldEVuYWJsZWQoZmFsc2UpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5wYWdlTm9kZSA9IG5ld1BhZ2VOb2RlO1xyXG5cdFx0XHR0aGlzLnNldEFjdGl2ZSh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGZldGNoUGFnZURhdGEodXJsLCBsb2FkQXR0ZW1wdHMsIGRlbGF5KSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxvYWRBdHRlbXB0czsgKytpKSB7XHJcblx0XHRcdGF3YWl0IHRoaXMud2FpdEZvckRlbGF5KCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2guZ2V0KHsgdXJsOiB1cmwgfSk7XHJcblx0XHRcdFx0Y29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhyZXN1bHQucmVzcG9uc2VUZXh0LCBcInRleHQvaHRtbFwiKTtcclxuXHRcdFx0XHRjb25zdCBkYXRhID0gdGhpcy5nZXRQYWdlRGF0YUZyb21IdG1sKGRvYyk7XHJcblx0XHRcdFx0aWYgKGRhdGEgIT09IG51bGwpIHsgcmV0dXJuIGRhdGE7IH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHR9XHJcblx0XHRcdGZpbmFsbHkge1xyXG5cdFx0XHRcdHRoaXMuc2V0RGVsYXkoZGVsYXkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHRzZXREZWxheSh0aW1lKSB7XHJcblx0XHR0aGlzLl9kZWxheVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuX2RlbGF5UHJvbWlzZSA9IG51bGw7XHJcblx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHR9LCB0aW1lICogMTAwMCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHdhaXRGb3JEZWxheSgpIHtcclxuXHRcdGlmICh0aGlzLl9kZWxheVByb21pc2UgIT09IG51bGwpIHtcclxuXHRcdFx0YXdhaXQgdGhpcy5fZGVsYXlQcm9taXNlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldHVwUGFnZUZvY3VzKCkge1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIG9uVmlzaWJpbGl0eVN0YXRlQ2hhbmdlZCwgZmFsc2UpO1xyXG5cdG9uVmlzaWJpbGl0eVN0YXRlQ2hhbmdlZCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1dpbmRvd1Zpc2libGUoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdHR5cGVvZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKSAhPT0gXCJzdHJpbmdcIiB8fFxyXG5cdFx0ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVmlzaWJpbGl0eVN0YXRlQ2hhbmdlZCgpIHtcclxuXHRpZiAoIWlzV2luZG93VmlzaWJsZSgpKSB7IHJldHVybjsgfVxyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIG9uVmlzaWJpbGl0eVN0YXRlQ2hhbmdlZCwgZmFsc2UpO1xyXG5cdGluaXRpYWxpemUoY3VycmVudFBhZ2VUeXBlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRQYWdlQ29udGVudChodG1sLCBwYWdlVHlwZSkge1xyXG5cdGxldCBuO1xyXG5cdHN3aXRjaCAocGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdG4gPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2R0XCIpO1xyXG5cdFx0XHRpZiAobiAhPT0gbnVsbCkgeyByZXR1cm4gbjsgfVxyXG5cdFx0XHRuID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiLmV6ZV9nYWxsZXJ5X3BhZ2VfY29udGFpbmVyXCIpO1xyXG5cdFx0XHRpZiAobiAhPT0gbnVsbCkgeyByZXR1cm4gbjsgfVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdGNhc2UgXCJmYXZvcml0ZXNcIjpcclxuXHRcdFx0biA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5pdGdcIik7XHJcblx0XHRcdGlmIChuICE9PSBudWxsKSB7IHJldHVybiBuOyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW5hYmxlZEJ5RGVmYXVsdChwYWdlVHlwZSwgY29uZmlnKSB7XHJcblx0c3dpdGNoIChwYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0cmV0dXJuIGNvbmZpZy5lbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUltYWdlcztcclxuXHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdGNhc2UgXCJmYXZvcml0ZXNcIjpcclxuXHRcdFx0cmV0dXJuIGNvbmZpZy5lbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUxpc3RzO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNBbGxvd2VkKHBhZ2VUeXBlLCBjb25maWcpIHtcclxuXHRzd2l0Y2ggKHBhZ2VUeXBlKSB7XHJcblx0XHRjYXNlIFwiZ2FsbGVyeVwiOlxyXG5cdFx0XHRyZXR1cm4gY29uZmlnLmFsbG93Rm9yR2FsbGVyeUltYWdlcztcclxuXHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdGNhc2UgXCJmYXZvcml0ZXNcIjpcclxuXHRcdFx0cmV0dXJuIGNvbmZpZy5hbGxvd0ZvckdhbGxlcnlMaXN0cztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlc2hlZXQoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtaW5maW5pdGUtc2Nyb2xsXCI7XHJcblx0aWYgKHN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS5jc3NcIik7XHJcblx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZShwYWdlVHlwZSkge1xyXG5cdGlmIChzY3JvbGxlciAhPT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgcGFnZXNJbmZvID0gcGFnaW5hdGlvbi5nZXRJbmZvKGRvY3VtZW50KTtcclxuXHRpZiAocGFnZXNJbmZvID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBwYWdlTm9kZSA9IGdldERlZmF1bHRQYWdlQ29udGVudChkb2N1bWVudCwgcGFnZVR5cGUpO1xyXG5cdGlmIChwYWdlTm9kZSA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgY29uZmlnID0gYXdhaXQgcmVxdWlyZShcIi4vY29uZmlnXCIpLmdldCgpO1xyXG5cclxuXHRpZiAoIWlzQWxsb3dlZChwYWdlVHlwZSwgY29uZmlnKSkgeyByZXR1cm47IH1cclxuXHJcblx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cclxuXHRzY3JvbGxlciA9IG5ldyBJbmZpbml0ZVNjcm9sbChjb25maWcsIHBhZ2VUeXBlLCBwYWdlTm9kZSwgcGFnZXNJbmZvKTtcclxuXHRzY3JvbGxlci5zZXRFbmFibGVkKGlzRW5hYmxlZEJ5RGVmYXVsdChwYWdlVHlwZSwgY29uZmlnKSk7XHJcbn1cclxuXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVNldHRpbmdzKCkge1xyXG5cdHNldHRpbmdzLmluaXRpYWxpemUoKTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbiA9IHNldHRpbmdzLmFkZFNlY3Rpb24oXCJJbmZpbml0ZSBTY3JvbGxcIiwgXCJpbmZpbml0ZS1zY3JvbGxcIiwgMSk7XHJcblx0aWYgKHNlY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdGF3YWl0IHNldHVwU2V0dGluZ3Moc2VjdGlvbik7XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXR1cFNldHRpbmdzKGNvbnRhaW5lcikge1xyXG5cdGNvbnN0IGNvbmZpZyA9IGF3YWl0IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcclxuXHJcblx0Y29udGFpbmVyLmlubmVySFRNTCA9IHJlcXVpcmUoXCIuL3NldHRpbmdzLmh0bWxcIik7XHJcblx0YmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBcImVuYWJsZWRCeURlZmF1bHRGb3JHYWxsZXJ5SW1hZ2VzXCIsIFwiYm9vbGVhblwiKTtcclxuXHRiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIFwiZW5hYmxlZEJ5RGVmYXVsdEZvckdhbGxlcnlMaXN0c1wiLCBcImJvb2xlYW5cIik7XHJcblx0YmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBcImFsbG93Rm9yR2FsbGVyeUltYWdlc1wiLCBcImJvb2xlYW5cIik7XHJcblx0YmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBcImFsbG93Rm9yR2FsbGVyeUxpc3RzXCIsIFwiYm9vbGVhblwiKTtcclxuXHRiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIFwiZGVsYXlcIiwge1xyXG5cdFx0dHlwZTogXCJudW1iZXJcIixcclxuXHRcdG1pbjogMFxyXG5cdH0pO1xyXG5cdGJpbmRJbnB1dChjb25maWcsIGNvbnRhaW5lciwgXCJsb2FkQXR0ZW1wdHNcIiwge1xyXG5cdFx0dHlwZTogXCJpbnRlZ2VyXCIsXHJcblx0XHRtaW46IDBcclxuXHR9KTtcclxuXHRiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIFwicGFnZVZpZXdQZXJjZW50UmVxdWlyZWRcIiwge1xyXG5cdFx0dHlwZTogXCJudW1iZXJcIixcclxuXHRcdG1pbjogMCxcclxuXHRcdG1heDogMSxcclxuXHRcdHZhbHVlVG9JbnB1dDogKHYpID0+IHYgKiAxMDAsXHJcblx0XHRpbnB1dFRvVmFsdWU6ICh2KSA9PiB2IC8gMTAwXHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRJbnB1dChjb25maWcsIGNvbnRhaW5lciwgc2V0dGluZ05hbWUsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtc2V0dGluZ3MtZm9yPSR7c2V0dGluZ05hbWV9XWApO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbmZpZy5iaW5kSW5wdXQoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtc2V0dGluZ3MtZm9yPSR7c2V0dGluZ05hbWV9XWApLCBzZXR0aW5nTmFtZSwgb3B0aW9ucyk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuXHRzZXR0aW5ncy5hZGRMaW5rKCk7XHJcblxyXG5cdGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdHN3aXRjaCAoY3VycmVudFBhZ2VUeXBlKSB7XHJcblx0XHRjYXNlIFwiZ2FsbGVyeVwiOlxyXG5cdFx0Y2FzZSBcInNlYXJjaFwiOlxyXG5cdFx0Y2FzZSBcImZhdm9yaXRlc1wiOlxyXG5cdFx0XHRzZXR1cFBhZ2VGb2N1cygpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzZXR0aW5nc1wiOlxyXG5cdFx0XHRpbml0aWFsaXplU2V0dGluZ3MoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59XHJcblxyXG5cclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLXBhZ2VcXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtaGVhZGVyXFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGVudFxcXCI+XFxyXFxuXFx0XFx0XFx0PGEgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtbGlua1xcXCI+PC9hPlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPkdhbGxlcnkgaW1hZ2VzPC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uXFxcIj5FbmFibGUgaW5maW5pdGUtc2Nyb2xsaW5nIGZvciBnYWxsZXJ5IHRodW1ibmFpbHMuPC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC10YWJsZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtbGFiZWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNoZWNrYm94LXByZWZpeFxcXCI+RW5hYmxlIGJ5IGRlZmF1bHQ8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImxjXFxcIj48aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImVuYWJsZWRCeURlZmF1bHRGb3JHYWxsZXJ5SW1hZ2VzXFxcIiAvPjxzcGFuPjwvc3Bhbj48L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtbGFiZWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNoZWNrYm94LXByZWZpeFxcXCI+QWxsb3c8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImxjXFxcIj48aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImFsbG93Rm9yR2FsbGVyeUltYWdlc1xcXCIgLz48c3Bhbj48L3NwYW4+PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvblxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWxlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZVxcXCI+R2FsbGVyeSBsaXN0czwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvblxcXCI+RW5hYmxlIGluZmluaXRlLXNjcm9sbGluZyBmb3IgZ2FsbGVyeSBsaXN0cy48L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tcmlnaHRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsYWJlbCBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1sYWJlbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2hlY2tib3gtcHJlZml4XFxcIj5FbmFibGUgYnkgZGVmYXVsdDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwibGNcXFwiPjxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwiZW5hYmxlZEJ5RGVmYXVsdEZvckdhbGxlcnlMaXN0c1xcXCIgLz48c3Bhbj48L3NwYW4+PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxhYmVsIGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWxhYmVsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jaGVja2JveC1wcmVmaXhcXFwiPkFsbG93PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJsY1xcXCI+PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJhbGxvd0ZvckdhbGxlcnlMaXN0c1xcXCIgLz48c3Bhbj48L3NwYW4+PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvblxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWxlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZVxcXCI+RGVsYXk8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPlNlY29uZHMgdG8gd2FpdCBiZWZvcmUgbG9hZGluZyB0aGUgbmV4dCBwYWdlLjwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodFxcXCI+XFxyXFxuXFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImRlbGF5XFxcIiAvPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvblxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWxlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZVxcXCI+TG9hZCBhdHRlbXB0czwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvblxcXCI+TWF4aW11bSBudW1iZXIgb2YgYXR0ZW1wdHMgYWxsb3dlZCB0byBsb2FkIHRoZSBuZXh0IHBhZ2UuPC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0XFxcIj5cXHJcXG5cXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIHN0ZXA9XFxcIjFcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwibG9hZEF0dGVtcHRzXFxcIiAvPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvblxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWxlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZVxcXCI+UmVxdWlyZWQgcGFnZSB2aWV3IHBlcmNlbnQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPlBlcmNlbnQgb2YgdGhlIGN1cnJlbnQgcGFnZSB0aGF0IG11c3QgYmUgdmlld2VkIGJlZm9yZSBsb2FkaW5nIHRoZSBuZXh0LjwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodFxcXCI+XFxyXFxuXFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwMFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJwYWdlVmlld1BlcmNlbnRSZXF1aXJlZFxcXCIgLz5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lcntjbGVhcjpib3RoO3Bvc2l0aW9uOnJlbGF0aXZlfS54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXJbZGF0YS14LWluZmluaXRlLXNjcm9sbC1tb2RlPWdhbGxlcnktbGlzdF17Ym9yZGVyOjA7Ym9yZGVyLXRvcDoxcHggc29saWQgIzAwMDt3aWR0aDoxMDAlfS54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXJbZGF0YS14LWluZmluaXRlLXNjcm9sbC1tb2RlPWltYWdlLWxpc3Rde2JvcmRlcjoxcHggc29saWQgIzAwMDttaW4td2lkdGg6NzEwcHg7bWF4LXdpZHRoOjEyMTBweDttYXJnaW46MCBhdXRvfS54LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGFpbmVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7cG9pbnRlci1ldmVudHM6bm9uZX0ueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVye3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOnN0aWNreTtmb250LXNpemU6MTBwdDt0ZXh0LWFsaWduOnJpZ2h0O2xpbmUtaGVpZ2h0OjEuMzVlbTt6LWluZGV4OjIwMjtwb2ludGVyLWV2ZW50czphdXRvfS54LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGVudHtkaXNwbGF5OmlubGluZS1ibG9jazt3aGl0ZS1zcGFjZTpub3dyYXA7bGluZS1oZWlnaHQ6MS41ZW07aGVpZ2h0OjIuNWVtfS54LWluZmluaXRlLXNjcm9sbC1oZWFkZXItdG9wLWxpbmt7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1kZWNvcmF0aW9uOm5vbmU7cGFkZGluZzouNWVtO21hcmdpbi1yaWdodDouNWVtfS54LWluZmluaXRlLXNjcm9sbC1lbmFibGVkLWNoZWNrYm94LWxhYmVsMCwueC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1saW5re3doaXRlLXNwYWNlOm5vd3JhcDtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOi41ZW19LngtaW5maW5pdGUtc2Nyb2xsLXBhZ2V7cG9zaXRpb246cmVsYXRpdmV9LngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtaGVhZGVye3RvcDowO2JvdHRvbTowO3Bvc2l0aW9uOnN0aWNreTtmb250LXNpemU6MTBwdDt0ZXh0LWFsaWduOmxlZnQ7bGluZS1oZWlnaHQ6MS4zNWVtO3otaW5kZXg6MjAxfS54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXJbZGF0YS14LWluZmluaXRlLXNjcm9sbC1tb2RlPWltYWdlLWxpc3RdIC54LWluZmluaXRlLXNjcm9sbC1wYWdlOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMH0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1saW5re3RleHQtZGVjb3JhdGlvbjpub25lfS54LWluZmluaXRlLXNjcm9sbC1wYWdlLGRpdiNnZHR7Ym9yZGVyOjA7dGV4dC1hbGlnbjpsZWZ0O21pbi13aWR0aDowO21heC13aWR0aDpub25lO3BhZGRpbmc6MH0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZSBpbWd7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO21hcmdpbjowO3BhZGRpbmc6MH0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZSBhe3RleHQtZGVjb3JhdGlvbjpub25lfTpyb290LngtaXMtZGFyayAueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyW2RhdGEteC1pbmZpbml0ZS1zY3JvbGwtbW9kZT1pbWFnZS1saXN0XSw6cm9vdC54LWlzLWRhcmsgLngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci1jb250ZW50LDpyb290LngtaXMtZGFyayAueC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojNGY1MzVifTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyW2RhdGEteC1pbmZpbml0ZS1zY3JvbGwtbW9kZT1pbWFnZS1saXN0XSw6cm9vdDpub3QoLngtaXMtZGFyaykgLngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci1jb250ZW50LDpyb290Om5vdCgueC1pcy1kYXJrKSAueC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojZWRlYmRmfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyLDpyb290Om5vdCgueC1pcy1kYXJrKSAueC1pbmZpbml0ZS1zY3JvbGwtcGFnZSBpbWcsOnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWluZmluaXRlLXNjcm9sbC1wYWdlOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLWNvbG9yOiM1YzBkMTJ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjMwcHgpey54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXJbZGF0YS14LWluZmluaXRlLXNjcm9sbC1tb2RlPWltYWdlLWxpc3Rde21heC13aWR0aDo5NzBweH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTBweCl7LngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lcltkYXRhLXgtaW5maW5pdGUtc2Nyb2xsLW1vZGU9aW1hZ2UtbGlzdF17bWF4LXdpZHRoOjczMHB4fX0ubGMueC1jaGVja2JveC1zbWFsbHtoZWlnaHQ6MjBweDtsaW5lLWhlaWdodDoyMHB4O3BhZGRpbmctbGVmdDoyNnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5sYy54LWNoZWNrYm94LXNtYWxsPnNwYW57aGVpZ2h0OjE2cHg7d2lkdGg6MTZweH0ubGMueC1jaGVja2JveC1zbWFsbD5zcGFuOmFmdGVye2xlZnQ6NXB4O3RvcDoxLjFweDt3aWR0aDozcHg7aGVpZ2h0OjhweH1kaXYuZXplX2dhbGxlcnlfcGFnZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlcjowO3dpZHRoOmF1dG87bWluLXdpZHRoOjA7bWF4LXdpZHRoOm5vbmU7bWFyZ2luOjA7Y2xlYXI6bm9uZTtwYWRkaW5nOjA7Ym9yZGVyLXJhZGl1czowfWEuZXplX2dhbGxlcnlfcGFnZV9pbmRpY2F0b3J7ZGlzcGxheTpub25lfS5lemVfZ2FsbGVyeV9jdXN0b21fdGFibGU+LmV6ZV9nYWxsZXJ5X2N1c3RvbV9yb3c+LmV6ZV9nYWxsZXJ5X2N1c3RvbV9jZWxsOm50aC1jaGlsZCgxKT5wOm50aC1jaGlsZCgxKXtkaXNwbGF5Om5vbmV9XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXJzKHVybCkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGNvbnN0IG1hdGNoID0gL14oW14jXFw/XSopKFxcP1teI10qKT8oI1tcXHdcXFddKik/JC8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsyXSAmJiBtYXRjaFsyXS5sZW5ndGggPiAxKSB7XHJcblx0XHRjb25zdCBwYXR0ZXJuID0gLyhbXj1dKikoPzo9KFtcXHdcXFddKikpPy87XHJcblx0XHRmb3IgKGNvbnN0IHBhcnQgb2YgbWF0Y2hbMl0uc3Vic3RyKDEpLnNwbGl0KFwiJlwiKSkge1xyXG5cdFx0XHRpZiAocGFydC5sZW5ndGggPT09IDApIHsgY29udGludWU7IH1cclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybi5leGVjKHBhcnQpO1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IG1hdGNoMlsyXTtcclxuXHRcdFx0cmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChtYXRjaDJbMV0pXSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkID8gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVRdWVyeVBhcmFtZXRlcih1cmwsIHBhcmFtZXRlck5hbWUpIHtcclxuXHRyZXR1cm4gdXJsLnJlcGxhY2UoXHJcblx0XHRuZXcgUmVnRXhwKGAoWyZcXFxcP10pJHtwYXJhbWV0ZXJOYW1lfSg/Oig/Oj1bXiZdKik/KCZ8JCkpYCksXHJcblx0XHQobTAsIG0xLCBtMikgPT4gKG0xID09PSBcIj9cIiAmJiBtMiA/IFwiP1wiIDogbTIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldFVybFBhcmFtZXRlcnMsXHJcblx0cmVtb3ZlUXVlcnlQYXJhbWV0ZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgYXBpU3R5bGUgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldElkKGlkKSB7XHJcblx0cmV0dXJuIGAke2lkfS1zdHlsZXNoZWV0YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRJZChpZCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuICEhZ2V0U3R5bGVzaGVldChpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc2hlZXQoc291cmNlLCBpZCkge1xyXG5cdGlmIChhcGlTdHlsZSA9PT0gbnVsbCkgeyBhcGlTdHlsZSA9IHJlcXVpcmUoXCIuL2FwaS9zdHlsZVwiKTsgfVxyXG5cdGFwaVN0eWxlLnNldERvY3VtZW50RGFya0ZsYWcoKTtcclxuXHJcblx0Y29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGUudGV4dENvbnRlbnQgPSBzb3VyY2U7XHJcblx0aWYgKHR5cGVvZihpZCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHN0eWxlLmlkID0gZ2V0SWQoaWQpO1xyXG5cdH1cclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHRyZXR1cm4gc3R5bGU7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRoYXNTdHlsZXNoZWV0LFxyXG5cdGdldFN0eWxlc2hlZXQsXHJcblx0YWRkU3R5bGVzaGVldFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCB4UHJlZml4ID0gXCIjIXhcIjtcclxuY29uc3Qgc2VwYXJhdG9yID0gXCIvXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFtdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKGFkZEhpc3RvcnkpIHtcclxuXHRjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdGlmIChhZGRIaXN0b3J5KSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUocGF0aCkge1xyXG5cdHJldHVybiBwYXRoID8gYCR7eFByZWZpeH0ke3NlcGFyYXRvcn0ke3BhdGh9YCA6IHhQcmVmaXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGNvbnN0IHJvdXRlID0geyBtYXRjaCwgY2FsbGJhY2sgfTtcclxuXHRyb3V0ZXMucHVzaChyb3V0ZSk7XHJcblx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDEpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHR9XHJcblx0dGVzdFJvdXRlcyhbcm91dGVdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Zm9yIChsZXQgaSA9IDAsIGlpID0gcm91dGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdGNvbnN0IHJvdXRlID0gcm91dGVzW2ldO1xyXG5cdFx0aWYgKHJvdXRlLm1hdGNoID09PSBtYXRjaCAmJiByb3V0ZS5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcclxuXHRcdFx0cm91dGVzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WEZyYWdtZW50KCkge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblx0cmV0dXJuIChcclxuXHRcdCFmcmFnbWVudCB8fFxyXG5cdFx0ZnJhZ21lbnQubGVuZ3RoIDwgeFByZWZpeC5sZW5ndGggfHxcclxuXHRcdGZyYWdtZW50LnN1YnN0cigwLCB4UHJlZml4Lmxlbmd0aCkgIT09IHhQcmVmaXggfHxcclxuXHRcdChmcmFnbWVudC5sZW5ndGggPiB4UHJlZml4Lmxlbmd0aCAmJiBmcmFnbWVudFt4UHJlZml4Lmxlbmd0aF0gIT09IHNlcGFyYXRvcikpID9cclxuXHRcdG51bGwgOlxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKHhQcmVmaXgubGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdFJvdXRlcyhyb3V0ZXMpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IGdldFhGcmFnbWVudCgpO1xyXG5cdGlmIChmcmFnbWVudCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Zm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcm91dGUubWF0Y2guZXhlYyhmcmFnbWVudCk7XHJcblx0XHRyb3V0ZS5jYWxsYmFjayhtYXRjaCwgZnJhZ21lbnQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25VcmxGcmFnbWVudENoYW5nZWQoKSB7XHJcblx0dGVzdFJvdXRlcyhyb3V0ZXMpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y2xlYXI6IGNsZWFyLFxyXG5cdGNyZWF0ZTogY3JlYXRlLFxyXG5cdGFkZFJvdXRlOiBhZGRSb3V0ZSxcclxuXHRyZW1vdmVSb3V0ZTogcmVtb3ZlUm91dGVcclxufTtcclxuIl19
