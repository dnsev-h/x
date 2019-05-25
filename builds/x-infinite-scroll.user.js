// ==UserScript==
// @name        x/infinite-scroll
// @version     1.0.0
// @author      dnsev-h
// @namespace   dnsev-h
// @description Infinite scrolling for gallery images
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
module.exports = ".x-settings-container{display:flex;flex-direction:column;margin-top:-1em}.x-settings-container.x-settings-container-hidden{display:none}.x-settings-hidden{display:none!important}.x-settings-option select{margin-right:.5em}.x-settings-section-container{display:block;width:100%;margin-top:1em}.x-settings-section-content{margin:8px auto 10px 10px;clear:both}.x-settings-section-header{font-size:1.25em;line-height:1.5em;margin:.25em 0}.x-settings-section{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;align-content:flex-start;flex-wrap:nowrap;width:100%;padding:.5em 0}.x-settings-section+.x-settings-section{border-top:1px solid rgba(0,0,0,.25)}:root:not(.x-is-dark) .x-settings-section+.x-settings-section{border-top-color:rgba(92,13,18,.25)}.x-settings-section-left{flex:1 1 auto;padding-right:.5em}.x-settings-section-right{flex:0 0 auto;min-width:30%;text-align:right}.x-settings-section-title{font-weight:700;line-height:1.5em}.x-settings-section-description{line-height:1.35em}input.x-settings-section-input[type=number],input.x-settings-section-input[type=text]{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e}:root:not(.x-is-dark) input.x-settings-section-input[type=number],:root:not(.x-is-dark) input.x-settings-section-input[type=text]{background-color:#e3e0d1}input.x-settings-section-input[type=text]{width:20em}input.x-settings-section-input[type=number]{width:5em;-moz-appearance:textfield}input.x-settings-section-input[type=number]::-webkit-inner-spin-button,input.x-settings-section-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.x-settings-input-table-container .lc{display:inline-block;margin-right:-6px}.x-settings-container code{font-family:'Courier New',Courier,monospace;background-color:#43464e;font-weight:700}:root:not(.x-is-dark) .x-settings-container code{background-color:#e3e0d1}.x-settings-light-text{font-weight:400;opacity:.75}.x-settings-input-table-container{display:inline-block;text-align:left}.x-settings-input-table{display:table}.x-settings-input-row{display:table-row}.x-settings-input-row.x-settings-input-header-row{font-size:.8em;line-height:1em;opacity:.75}.x-settings-input-cell{display:table-cell}.x-settings-input-cell+.x-settings-input-cell{padding-left:.25em}";
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
	enabledByDefaultForGalleryImages: true // boolean
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
		const content = html.querySelector("#gdt");
		if (content === null) { return null; }

		content.removeAttribute("id");
		content.setAttribute("class", "x-infinite-scroll");
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
		typeof(document.visibilityState) !== "string" ||
		document.visibilityState === "visible");
}

function onVisibilityStateChanged() {
	if (!isWindowVisible()) { return; }
	document.removeEventListener("visibilitychange", onVisibilityStateChanged, false);
	initialize(currentPageType);
}


function getDefaultPageContent(pageType) {
	let n;
	switch (pageType) {
		case "gallery":
			n = document.querySelector("#gdt");
			if (n !== null) { return n; }
			n = document.querySelector(".eze_gallery_page_container");
			if (n !== null) { return n; }
			break;
	}

	return null;
}

function isEnabledByDefault(pageType, config) {
	switch (pageType) {
		case "gallery": return config.enabledByDefaultForGalleryImages;
		default: return false;
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

	const pageNode = getDefaultPageContent(pageType);
	if (pageNode === null) { return; }

	const config = await require("./config").get();

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
	currentPageType = pageType.get(document, location);
	switch (currentPageType) {
		case "gallery":
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
module.exports = "<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Enabled for gallery images</div>\r\n\t\t<div class=\"x-settings-section-description\">Enable infinite-scrolling by default for gallery images.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<div class=\"x-settings-input-table-container\">\r\n\t\t\t<label class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"enabledByDefaultForGalleryImages\" /><span></span></label>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Delay</div>\r\n\t\t<div class=\"x-settings-section-description\">Seconds to wait before loading the next page.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<input class=\"x-settings-section-input\" type=\"number\" min=\"0\" autocomplete=\"off\" spellcheck=\"false\" data-x-settings-for=\"delay\" />\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Load attempts</div>\r\n\t\t<div class=\"x-settings-section-description\">Maximum number of attempts allowed to load the next page.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<input class=\"x-settings-section-input\" type=\"number\" min=\"0\" step=\"1\" autocomplete=\"off\" spellcheck=\"false\" data-x-settings-for=\"loadAttempts\" />\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Required page view percent</div>\r\n\t\t<div class=\"x-settings-section-description\">Percent of the current page that must be viewed before loading the next.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<input class=\"x-settings-section-input\" type=\"number\" min=\"0\" max=\"100\" autocomplete=\"off\" spellcheck=\"false\" data-x-settings-for=\"pageViewPercentRequired\" />\r\n\t</div>\r\n</div>";
},{}],16:[function(require,module,exports){
module.exports = ".x-infinite-scroll-container{border:1px solid #000;min-width:710px;max-width:1210px;margin:0 auto;clear:both;position:relative}.x-infinite-scroll-header-container{position:absolute;top:0;right:0;bottom:0;pointer-events:none}.x-infinite-scroll-header{top:0;bottom:0;position:sticky;font-size:10pt;text-align:right;line-height:1.35em;z-index:2;pointer-events:auto}.x-infinite-scroll-header-content{display:inline-block;white-space:nowrap;line-height:1.5em;height:2.5em}.x-infinite-scroll-header-top-link{display:inline-block;text-decoration:none;padding:.5em;margin-right:.5em}.x-infinite-scroll-enabled-checkbox-label0,.x-infinite-scroll-page-link{white-space:nowrap;display:inline-block;padding:.5em}.x-infinite-scroll-page{position:relative}.x-infinite-scroll-page-header{top:0;bottom:0;position:sticky;font-size:10pt;text-align:left;line-height:1.35em;z-index:1}.x-infinite-scroll-page:not(:last-child){border-bottom:1px solid #000}.x-infinite-scroll-page-link{text-decoration:none}.x-infinite-scroll-page,div#gdt{border:0;text-align:left;min-width:0;max-width:none;padding:0}.x-infinite-scroll-page img{border:1px solid #000;margin:0;padding:0}.x-infinite-scroll-page a{text-decoration:none}:root.x-is-dark .x-infinite-scroll-container,:root.x-is-dark .x-infinite-scroll-header-content,:root.x-is-dark .x-infinite-scroll-page-header{background-color:#4f535b}:root:not(.x-is-dark) .x-infinite-scroll-container,:root:not(.x-is-dark) .x-infinite-scroll-header-content,:root:not(.x-is-dark) .x-infinite-scroll-page-header{background-color:#edebdf}:root:not(.x-is-dark) .x-infinite-scroll-container,:root:not(.x-is-dark) .x-infinite-scroll-page img,:root:not(.x-is-dark) .x-infinite-scroll-page:not(:last-child){border-color:#5c0d12}@media screen and (max-width:1230px){.x-infinite-scroll-container{max-width:970px}}@media screen and (max-width:990px){.x-infinite-scroll-container{max-width:730px}}.lc.x-checkbox-small{height:20px;line-height:20px;padding-left:26px;display:inline-block}.lc.x-checkbox-small>span{height:16px;width:16px}.lc.x-checkbox-small>span:after{left:5px;top:1.1px;width:3px;height:8px}div.eze_gallery_page{background-color:transparent;border:0;width:auto;min-width:0;max-width:none;margin:0;clear:none;padding:0;border-radius:0}a.eze_gallery_page_indicator{display:none}.eze_gallery_custom_table>.eze_gallery_custom_row>.eze_gallery_custom_cell:nth-child(1)>p:nth-child(1){display:none}";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BhZ2luYXRpb24uanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvc2V0dGluZ3MuY3NzIiwic3JjL2NvbmZpZy5qcyIsInNyYy9mZXRjaC5qcyIsInNyYy9nbS5qcyIsInNyYy9pbmZpbml0ZS1zY3JvbGwvY29uZmlnLmpzIiwic3JjL2luZmluaXRlLXNjcm9sbC9jb250YWluZXIuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvaW5maW5pdGUtc2Nyb2xsLWJhc2UuanMiLCJzcmMvaW5maW5pdGUtc2Nyb2xsL21haW4uanMiLCJzcmMvaW5maW5pdGUtc2Nyb2xsL3BhZ2UuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvc2V0dGluZ3MuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvc3R5bGUuY3NzIiwic3JjL3F1ZXJ5LXN0cmluZy5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy9zdHlsZS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuVEE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKGxhYmVsLCB1cmwsIG9yZGVyKSB7XHJcblx0Y29uc3QgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJcIik7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0YS5ocmVmID0gdXJsO1xyXG5cdGEudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuXHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0ZGl2LnN0eWxlLm9yZGVyID0gYCR7b3JkZXJ9YDtcclxuXHR9XHJcblx0ZGl2LmFwcGVuZENoaWxkKGEpO1xyXG5cdG4uYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0cmV0dXJuIGRpdjtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBvdmVycmlkZUF0dHJpYnV0ZU5hbWUgPSBcImRhdGEteC1vdmVycmlkZS1wYWdlLXR5cGVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRPdmVycmlkZSh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3ZlcnJpZGUoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0cmV0dXJuIHZhbHVlID8gdmFsdWUgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoZG9jLCBsb2NhdGlvbikge1xyXG5cdGNvbnN0IG92ZXJyaWRlVHlwZSA9IGdldE92ZXJyaWRlKCk7XHJcblx0aWYgKG92ZXJyaWRlVHlwZSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIG92ZXJyaWRlVHlwZTtcclxuXHR9XHJcblxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hib3hcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNlYXJjaFwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPWZhdmNhdF1cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImZhdm9yaXRlc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjaTE+aDFcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImltYWdlXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIi5nbSBoMSNnblwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZ2FsbGVyeVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9vdXRlclwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2V0dGluZ3NcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3RvcnJlbnRpbmZvXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJ0b3JyZW50SW5mb1wiO1xyXG5cdH1cclxuXHJcblx0bGV0IG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImJvZHk+LmQ+cFwiKTtcclxuXHRpZiAoXHJcblx0XHQobiAhPT0gbnVsbCAmJiAvZ2FsbGVyeVxccytoYXNcXHMrYmVlblxccytyZW1vdmVkL2kudGVzdChuLnRleHRDb250ZW50KSkgfHxcclxuXHRcdGRvYy5xdWVyeVNlbGVjdG9yKFwiLmV6ZV9kZ2FsbGVyeV90YWJsZVwiKSAhPT0gbnVsbCkgeyAvLyBlemUgcmVzdXJyZWN0aW9uXHJcblx0XHRyZXR1cm4gXCJkZWxldGVkR2FsbGVyeVwiO1xyXG5cdH1cclxuXHJcblx0biA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0aWYgKG4gIT09IG51bGwgJiYgbG9jYXRpb24gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IHAgPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdGlmIChcclxuXHRcdFx0bi5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT09IGxvY2F0aW9uLmhyZWYgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgMykgIT09IFwiL3QvXCIgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgNSkgIT09IFwiL2ltZy9cIikge1xyXG5cdFx0XHRyZXR1cm4gXCJwYW5kYVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVW5rbm93blxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0LFxyXG5cdGdldE92ZXJyaWRlLFxyXG5cdHNldE92ZXJyaWRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi4vcXVlcnktc3RyaW5nXCIpO1xyXG5cclxuY29uc3QgcmVQYWdlTGlzdCA9IC8oWzAtOSxdKylcXHMqLVxccyooWzAtOSxdKylcXHMqb2ZcXHMqKFswLTksXSspL2k7XHJcbmNvbnN0IHJlUmVzdWx0cyA9IC8oWzAtOSxdKylcXHMqcmVzdWx0cz8vaTtcclxuXHJcblxyXG5jbGFzcyBQYWdlaW5hdGlvbkluZm8ge1xyXG5cdGNvbnN0cnVjdG9yKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZSwgdXJsQmFzZSwgcGFnZUZpZWxkTmFtZSkge1xyXG5cdFx0dGhpcy5wYWdlQ3VycmVudCA9IHBhZ2VDdXJyZW50O1xyXG5cdFx0dGhpcy5wYWdlQ291bnQgPSBwYWdlQ291bnQ7XHJcblx0XHR0aGlzLml0ZW1Db3VudCA9IGl0ZW1Db3VudDtcclxuXHRcdHRoaXMuaXRlbXNPblBhZ2UgPSBpdGVtc09uUGFnZTtcclxuXHRcdHRoaXMuaXRlbXNQZXJQYWdlID0gaXRlbXNQZXJQYWdlO1xyXG5cdFx0dGhpcy51cmxCYXNlID0gdXJsQmFzZTtcclxuXHRcdHRoaXMucGFnZUZpZWxkTmFtZSA9IHBhZ2VGaWVsZE5hbWU7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVQYWdlVXJsKHBhZ2VJbmRleCkge1xyXG5cdFx0aWYgKHRoaXMudXJsQmFzZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdHJldHVybiB0aGlzLnVybEJhc2UucmVwbGFjZSgvXihbXiNcXD9dKikoXFw/W14jXSopPygjW1xcd1xcV10qKT8kLywgKG0wLCBtMSwgbTIsIG0zKSA9PiB7XHJcblx0XHRcdG0yID0gKFxyXG5cdFx0XHRcdHBhZ2VJbmRleCAhPT0gMCA/XHJcblx0XHRcdFx0KG0yID8gYCR7bTJ9JiR7dGhpcy5wYWdlRmllbGROYW1lfT0ke3BhZ2VJbmRleH1gIDogYD8ke3RoaXMucGFnZUZpZWxkTmFtZX09JHtwYWdlSW5kZXh9YCkgOlxyXG5cdFx0XHRcdChtMiB8fCBcIlwiKSk7XHJcblx0XHRcdHJldHVybiBgJHttMX0ke20yfSR7bTMgfHwgXCJcIn1gO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcGFyc2VOdW1iZXIodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdGNvbnN0IHYgPSBwYXJzZUludCh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIiksIDEwKTtcclxuXHRyZXR1cm4gTnVtYmVyLmlzTmFOKHYpID8gZGVmYXVsdFZhbHVlIDogdjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VzRm9ySW1hZ2UoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNuPmRpdj5zcGFuXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPCAyKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhZ2VDdXJyZW50ID0gcGFyc2VOdW1iZXIobm9kZXNbMF0udGV4dENvbnRlbnQsIDEpIC0gMTtcclxuXHRjb25zdCBwYWdlQ291bnQgPSBwYXJzZU51bWJlcihub2Rlc1sxXS50ZXh0Q29udGVudCwgMCk7XHJcblx0cmV0dXJuIG5ldyBQYWdlaW5hdGlvbkluZm8ocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgcGFnZUNvdW50LCAxLCAxLCBudWxsLCBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlSXRlbXNQZXJQYWdlKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UpIHtcclxuXHRyZXR1cm4gKHBhZ2VDdXJyZW50ICsgMSA8IHBhZ2VDb3VudCB8fCBwYWdlQ3VycmVudCA9PT0gMCkgP1xyXG5cdFx0aXRlbXNPblBhZ2UgOlxyXG5cdFx0TWF0aC5yb3VuZCgoaXRlbUNvdW50IC0gaXRlbXNPblBhZ2UpIC8gcGFnZUN1cnJlbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJdGVtc0Zyb21GdWxsSW5mbyhjb250ZW50LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0Y29uc3QgbWF0Y2ggPSByZVBhZ2VMaXN0LmV4ZWMoY29udGVudCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHN0YXJ0ID0gcGFyc2VOdW1iZXIobWF0Y2hbMV0sIDApO1xyXG5cdGNvbnN0IGl0ZW1zT25QYWdlID0gcGFyc2VOdW1iZXIobWF0Y2hbMl0sIDApIC0gKHN0YXJ0IC0gMSk7XHJcblx0Y29uc3QgaXRlbUNvdW50ID0gcGFyc2VOdW1iZXIobWF0Y2hbM10sIDApO1xyXG5cdGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGNhbGN1bGF0ZUl0ZW1zUGVyUGFnZShwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlKTtcclxuXHJcblx0cmV0dXJuIHtpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2V9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJdGVtc0ZvckdhbGxlcnlJbWFnZXMocGFnZUxpc3QsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpIHtcclxuXHRjb25zdCBub2RlID0gcGFnZUxpc3QucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLmdwY1wiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgJiYgbm9kZS5wYXJlbnROb2RlID09PSBwYWdlTGlzdC5wYXJlbnROb2RlKSA/XHJcblx0XHRnZXRJdGVtc0Zyb21GdWxsSW5mbyhub2RlLnRleHRDb250ZW50LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSA6XHJcblx0XHRudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJdGVtc0ZvckdhbGxlcnlMaXN0KGh0bWwsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpIHtcclxuXHRsZXQgaXRlbUNvdW50ID0gbnVsbDtcclxuXHRmb3IgKGNvbnN0IGlwTm9kZSBvZiBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwLmlwXCIpKSB7XHJcblx0XHRjb25zdCBpbmZvID0gZ2V0SXRlbXNGcm9tRnVsbEluZm8oaXBOb2RlLnRleHRDb250ZW50LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KTtcclxuXHRcdGlmIChpbmZvICE9PSBudWxsKSB7IHJldHVybiBpbmZvOyB9XHJcblxyXG5cdFx0Y29uc3QgbWF0Y2ggPSByZVJlc3VsdHMuZXhlYyhpcE5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdGl0ZW1Db3VudCA9IHBhcnNlTnVtYmVyKG1hdGNoWzFdKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoaXRlbUNvdW50ID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGxldCBpdGVtc09uUGFnZSA9IDA7XHJcblx0bGV0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2Lml0Zz5kaXZcIik7XHJcblx0aWYgKChpdGVtc09uUGFnZSA9IG5vZGVzLmxlbmd0aCkgPT09IDApIHtcclxuXHRcdG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUuaXRnPnRib2R5PnRyXCIpO1xyXG5cdFx0aXRlbXNPblBhZ2UgPSBub2Rlcy5sZW5ndGg7XHJcblx0XHRpZiAoaXRlbXNPblBhZ2UgPiAwICYmIG5vZGVzWzBdLnF1ZXJ5U2VsZWN0b3IoXCJ0aFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0XHQtLWl0ZW1zT25QYWdlOyAvLyBIZWFkZXIgcm93XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtc1BlclBhZ2UgPSBjYWxjdWxhdGVJdGVtc1BlclBhZ2UocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSk7XHJcblxyXG5cdHJldHVybiB7aXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFnZXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlTGlzdCkge1xyXG5cdC8vIENvdW50XHJcblx0Y29uc3Qgbm9kZXMgPSBwYWdlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XHJcblx0Y29uc3QgcGFnZUNvdW50ID0gKG5vZGVzLmxlbmd0aCA+IDIgPyBwYXJzZU51bWJlcihub2Rlc1tub2Rlcy5sZW5ndGggLSAyXS50ZXh0Q29udGVudCwgMSkgOiAwKTtcclxuXHJcblx0Ly8gQ3VycmVudFxyXG5cdGNvbnN0IG5vZGUgPSBwYWdlTGlzdC5xdWVyeVNlbGVjdG9yKFwidGQucHRkc1wiKTtcclxuXHRjb25zdCBwYWdlQ3VycmVudCA9IChub2RlICE9PSBudWxsID8gcGFyc2VOdW1iZXIobm9kZS50ZXh0Q29udGVudCwgMSkgLSAxIDogMCk7XHJcblxyXG5cdC8vIEl0ZW1zXHJcblx0bGV0IGl0ZW1Db3VudCA9IDA7XHJcblx0bGV0IGl0ZW1zT25QYWdlID0gMDtcclxuXHRsZXQgaXRlbXNQZXJQYWdlID0gMDtcclxuXHJcblx0bGV0IHYgPSBnZXRJdGVtc0ZvckdhbGxlcnlJbWFnZXMocGFnZUxpc3QsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpO1xyXG5cdGxldCBwYWdlRmllbGROYW1lID0gbnVsbDtcclxuXHRsZXQgaXNHYWxsZXJ5TGlzdCA9IGZhbHNlO1xyXG5cdGlmICh2ICE9PSBudWxsKSB7XHJcblx0XHRwYWdlRmllbGROYW1lID0gXCJwXCI7XHJcblx0fSBlbHNlIHtcclxuXHRcdHYgPSBnZXRJdGVtc0ZvckdhbGxlcnlMaXN0KGh0bWwsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpO1xyXG5cdFx0aWYgKHYgIT09IG51bGwpIHtcclxuXHRcdFx0cGFnZUZpZWxkTmFtZSA9IFwicGFnZVwiO1xyXG5cdFx0XHRpc0dhbGxlcnlMaXN0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHYgIT09IG51bGwpIHtcclxuXHRcdCh7aXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlfSA9IHYpO1xyXG5cdH1cclxuXHJcblx0Ly8gVXJsIGZvcm1hdFxyXG5cdGNvbnN0IGxpbmsgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCJhW2hyZWZdXCIpO1xyXG5cdGxldCB1cmxCYXNlID0gbnVsbDtcclxuXHRpZiAobGluayAhPT0gbnVsbCAmJiBwYWdlRmllbGROYW1lICE9PSBudWxsKSB7XHJcblx0XHR1cmxCYXNlID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cdFx0dXJsQmFzZSA9IHF1ZXJ5U3RyaW5nLnJlbW92ZVF1ZXJ5UGFyYW1ldGVyKHVybEJhc2UsIHBhZ2VGaWVsZE5hbWUpO1xyXG5cdFx0aWYgKGlzR2FsbGVyeUxpc3QpIHtcclxuXHRcdFx0dXJsQmFzZSA9IHF1ZXJ5U3RyaW5nLnJlbW92ZVF1ZXJ5UGFyYW1ldGVyKHVybEJhc2UsIFwiZnJvbVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXcgUGFnZWluYXRpb25JbmZvKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZSwgdXJsQmFzZSwgcGFnZUZpZWxkTmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVVybFF1ZXJ5U3RyaW5nRmllbGQodXJsLCBmaWVsZCkge1xyXG5cdHJldHVybiB1cmwucmVwbGFjZShcclxuXHRcdG5ldyBSZWdFeHAoYChbJlxcXFw/XSkke2ZpZWxkfSg/Oig/Oj1bXiZdKik/KCZ8JCkpYCksXHJcblx0XHQobTAsIG0xLCBtMikgPT4gKG0xID09PSBcIj9cIiAmJiBtMiA/IFwiP1wiIDogbTIpKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEluZm8oaHRtbCkge1xyXG5cdGlmICghaHRtbCkgeyBodG1sID0gZG9jdW1lbnQ7IH1cclxuXHJcblx0Y29uc3QgcGFnZUxpc3QgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIucHR0XCIpO1xyXG5cdHJldHVybiBwYWdlTGlzdCAhPT0gbnVsbCA/IGdldFBhZ2VzRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUxpc3QpIDogZ2V0UGFnZXNGb3JJbWFnZShodG1sKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlVcmwobm9kZSkge1xyXG5cdGNvbnN0IGxpbmtTZWxlY3RvciA9IFwiYVtocmVmXVwiO1xyXG5cdGNvbnN0IG5hbWVOb2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLmdsbmFtZVwiKTtcclxuXHRpZiAobmFtZU5vZGUgIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IGxpbmsgPSBuYW1lTm9kZS5xdWVyeVNlbGVjdG9yKGxpbmtTZWxlY3Rvcik7XHJcblx0XHRpZiAobGluayAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG5hbWVOb2RlLnBhcmVudE5vZGUgIT09IG51bGwgJiYgbmFtZU5vZGUucGFyZW50Tm9kZS5tYXRjaGVzKGxpbmtTZWxlY3RvcikpIHtcclxuXHRcdFx0cmV0dXJuIG5hbWVOb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5VXJscyhodG1sKSB7XHJcblx0aWYgKCFodG1sKSB7IGh0bWwgPSBkb2N1bWVudDsgfVxyXG5cclxuXHRsZXQgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuaXRnPmRpdlwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcInRhYmxlLml0Zz50Ym9keT50clwiKTtcclxuXHRcdGlmIChub2Rlcy5sZW5ndGggPiAwICYmIG5vZGVzWzBdLnF1ZXJ5U2VsZWN0b3IoXCJ0aFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRub2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVzLCAxKTsgLy8gT21pdCBoZWFkZXIgcm93XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCB1cmwgPSBnZXRHYWxsZXJ5VXJsKG5vZGUpO1xyXG5cdFx0aWYgKHVybCAhPT0gbnVsbCkgeyByZXN1bHRzLnB1c2godXJsKTsgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJbWFnZVVybHMoaHRtbCkge1xyXG5cdGlmICghaHRtbCkgeyBodG1sID0gZG9jdW1lbnQ7IH1cclxuXHJcblx0bGV0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdkdGxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0bm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2R0bVwiKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBsaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiYVtocmVmXVwiKTtcclxuXHRcdGlmIChsaW5rICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3VsdHMucHVzaChsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRJbmZvLFxyXG5cdGdldEdhbGxlcnlVcmxzLFxyXG5cdGdldEdhbGxlcnlJbWFnZVVybHNcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcbmNvbnN0IHVybEZyYWdtZW50ID0gcmVxdWlyZShcIi4uL3VybC1mcmFnbWVudFwiKTtcclxuXHJcblxyXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lckNsYXNzID0gXCJ4LXNldHRpbmdzLWNvbnRhaW5lclwiO1xyXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzID0gXCJ4LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW5cIjtcclxuY29uc3QgZGVmYXVsdFNldHRpbmdzSGlkZGVuQ2xhc3MgPSBcIngtc2V0dGluZ3MtaGlkZGVuXCI7XHJcblxyXG5sZXQgc2V0dGluZ3NDb250YWluZXJPdXRlciA9IG51bGw7XHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTGluaygpIHtcclxuXHRjb25zdCBpZCA9IFwieC1uYXYtc2V0dGluZ3MtbGlua1wiO1xyXG5cclxuXHRsZXQgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRpZiAobiAhPT0gbnVsbCkgeyByZXR1cm4gbjsgfVxyXG5cclxuXHRjb25zdCBuYXZCYXIgPSByZXF1aXJlKFwiLi9uYXZpZ2F0aW9uLWJhclwiKTtcclxuXHRuID0gbmF2QmFyLmFkZExpbmsoXCJ4XCIsIGAvdWNvbmZpZy5waHAke3VybEZyYWdtZW50LmNyZWF0ZShcInNldHRpbmdzXCIpfWAsIDEpO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdG4uaWQgPSBpZDtcclxuXHRyZXR1cm4gbjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRzZXR0aW5nc0NvbnRhaW5lck91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRlci5zdHVmZmJveFwiKTtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXJPdXRlciA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0c2V0dGluZ3NDb250YWluZXIgPSBzZXR0aW5nc0NvbnRhaW5lck91dGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke3NldHRpbmdzQ29udGFpbmVyQ2xhc3N9YCk7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5jbGFzc05hbWUgPSBgJHtzZXR0aW5nc0NvbnRhaW5lckNsYXNzfSAke3NldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3N9YDtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyT3V0ZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaWQgPSBcIngtc2V0dGluZ3NcIjtcclxuXHRpZiAoIXN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7XHJcblx0XHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS9zZXR0aW5ncy5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxuXHJcblx0dXJsRnJhZ21lbnQuYWRkUm91dGUoL15cXC9zZXR0aW5ncyhcXC9bXFx3XFxXXSopPyQvLCBvblNldHRpbmdzUGFnZUNoYW5nZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblNldHRpbmdzUGFnZUNoYW5nZWQobWF0Y2gpIHtcclxuXHRzZXRTZXR0aW5nc1Zpc2libGUobWF0Y2ggIT09IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTZXR0aW5nc1Zpc2libGUodmlzaWJsZSkge1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lck91dGVyID09PSBudWxsIHx8IHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MpICE9PSB2aXNpYmxlKSB7XHJcblx0XHQvLyBObyBjaGFuZ2VcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcywgIXZpc2libGUpO1xyXG5cclxuXHRmb3IgKGNvbnN0IGNoaWxkIG9mIHNldHRpbmdzQ29udGFpbmVyT3V0ZXIuY2hpbGRyZW4pIHtcclxuXHRcdGlmIChjaGlsZCA9PT0gc2V0dGluZ3NDb250YWluZXIpIHsgY29udGludWU7IH1cclxuXHRcdGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoZGVmYXVsdFNldHRpbmdzSGlkZGVuQ2xhc3MsIHZpc2libGUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2VjdGlvbihoZWFkZXIsIGlkLCBvcmRlcikge1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBmdWxsSWQgPSBgeC1zZXR0aW5ncy1zZWN0aW9uLSR7aWR9YDtcclxuXHJcblx0bGV0IHNlY3Rpb24gPSBzZXR0aW5nc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHtmdWxsSWR9YCk7XHJcblx0aWYgKHNlY3Rpb24gPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2VjdGlvbi5pZCA9IGZ1bGxJZDtcclxuXHRcdHNlY3Rpb24uY2xhc3NOYW1lID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24tY29udGFpbmVyXCI7XHJcblx0XHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRzZWN0aW9uLnN0eWxlLm9yZGVyID0gYCR7b3JkZXJ9YDtcclxuXHRcdH1cclxuXHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuXHR9XHJcblxyXG5cdGxldCBjbHMgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJcIjtcclxuXHRsZXQgc2VjdGlvbkhlYWRlciA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihgLiR7Y2xzfWApO1xyXG5cdGlmIChzZWN0aW9uSGVhZGVyID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG5cdFx0c2VjdGlvbkhlYWRlci5jbGFzc05hbWUgPSBjbHM7XHJcblx0XHRzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyO1xyXG5cdFx0Y29uc3QgcmVsYXRpdmUgPSBzZWN0aW9uLmZpcnN0Q2hpbGQ7XHJcblx0XHRpZiAocmVsYXRpdmUgIT09IG51bGwpIHtcclxuXHRcdFx0c2VjdGlvbi5pbnNlcnRCZWZvcmUocmVsYXRpdmUsIHNlY3Rpb25IZWFkZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNscyA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRlbnRcIjtcclxuXHRsZXQgc2VjdGlvbkNvbnRlbnQgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nsc31gKTtcclxuXHRpZiAoc2VjdGlvbkNvbnRlbnQgPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNlY3Rpb25Db250ZW50LmNsYXNzTmFtZSA9IGNscztcclxuXHRcdHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbnRlbnQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlY3Rpb25Db250ZW50O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YWRkTGluayxcclxuXHRpbml0aWFsaXplLFxyXG5cdGFkZFNlY3Rpb25cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpc0RhcmsoKSB7XHJcblx0cmV0dXJuICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb2N1bWVudERhcmtGbGFnKCkge1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1pcy1kYXJrXCIsIGlzRGFyaygpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXJyb3dJY29uVXJsKCkge1xyXG5cdHJldHVybiAoaXNEYXJrKCkgPyBcImh0dHBzOi8vZXhoZW50YWkub3JnL2ltZy9tci5naWZcIiA6IFwiaHR0cHM6Ly9laGd0Lm9yZy9nL21yLmdpZlwiKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGlzRGFyayxcclxuXHRzZXREb2N1bWVudERhcmtGbGFnLFxyXG5cdGdldEFycm93SWNvblVybFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtc2V0dGluZ3MtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLXRvcDotMWVtfS54LXNldHRpbmdzLWNvbnRhaW5lci54LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW57ZGlzcGxheTpub25lfS54LXNldHRpbmdzLWhpZGRlbntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS54LXNldHRpbmdzLW9wdGlvbiBzZWxlY3R7bWFyZ2luLXJpZ2h0Oi41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21hcmdpbi10b3A6MWVtfS54LXNldHRpbmdzLXNlY3Rpb24tY29udGVudHttYXJnaW46OHB4IGF1dG8gMTBweCAxMHB4O2NsZWFyOmJvdGh9Lngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJ7Zm9udC1zaXplOjEuMjVlbTtsaW5lLWhlaWdodDoxLjVlbTttYXJnaW46LjI1ZW0gMH0ueC1zZXR0aW5ncy1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IHdyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4LXdyYXA6bm93cmFwO3dpZHRoOjEwMCU7cGFkZGluZzouNWVtIDB9Lngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjI1KX06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3AtY29sb3I6cmdiYSg5MiwxMywxOCwuMjUpfS54LXNldHRpbmdzLXNlY3Rpb24tbGVmdHtmbGV4OjEgMSBhdXRvO3BhZGRpbmctcmlnaHQ6LjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0e2ZsZXg6MCAwIGF1dG87bWluLXdpZHRoOjMwJTt0ZXh0LWFsaWduOnJpZ2h0fS54LXNldHRpbmdzLXNlY3Rpb24tdGl0bGV7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb257bGluZS1oZWlnaHQ6MS4zNWVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0saW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO21hcmdpbjowO3BhZGRpbmc6LjI1ZW0gLjVlbTtsaW5lLWhlaWdodDoxLjM3NWVtO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZX06cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXSw6cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde3dpZHRoOjIwZW19aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXXt3aWR0aDo1ZW07LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZH1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjB9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyIC5sY3tkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6LTZweH0ueC1zZXR0aW5ncy1jb250YWluZXIgY29kZXtmb250LWZhbWlseTonQ291cmllciBOZXcnLENvdXJpZXIsbW9ub3NwYWNlO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtmb250LXdlaWdodDo3MDB9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXNldHRpbmdzLWNvbnRhaW5lciBjb2Rle2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX0ueC1zZXR0aW5ncy1saWdodC10ZXh0e2ZvbnQtd2VpZ2h0OjQwMDtvcGFjaXR5Oi43NX0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpsZWZ0fS54LXNldHRpbmdzLWlucHV0LXRhYmxle2Rpc3BsYXk6dGFibGV9Lngtc2V0dGluZ3MtaW5wdXQtcm93e2Rpc3BsYXk6dGFibGUtcm93fS54LXNldHRpbmdzLWlucHV0LXJvdy54LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3d7Zm9udC1zaXplOi44ZW07bGluZS1oZWlnaHQ6MWVtO29wYWNpdHk6Ljc1fS54LXNldHRpbmdzLWlucHV0LWNlbGx7ZGlzcGxheTp0YWJsZS1jZWxsfS54LXNldHRpbmdzLWlucHV0LWNlbGwrLngtc2V0dGluZ3MtaW5wdXQtY2VsbHtwYWRkaW5nLWxlZnQ6LjI1ZW19XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBnbSA9IHJlcXVpcmUoXCIuL2dtXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpIHtcclxuXHRsZXQgY29uZmlnID0gbnVsbDtcclxuXHRsZXQgY29uZmlnR2V0UHJvbWlzZSA9IG51bGw7XHJcblxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnKCkge1xyXG5cdFx0Y29uc3QgY29uZmlnU3RyaW5nID0gYXdhaXQgZ20uZ2V0VmFsdWUoY29uZmlnS2V5LCBudWxsKTtcclxuXHRcdGlmICh0eXBlb2YoY29uZmlnU3RyaW5nKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IGMgPSBKU09OLnBhcnNlKGNvbmZpZ1N0cmluZyk7XHJcblx0XHRcdFx0aWYgKGMgIT09IG51bGwgJiYgdHlwZW9mKGMpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGMpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRGVmYXVsdCwgYyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ0RlZmF1bHQpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0aWYgKGNvbmZpZyAhPT0gbnVsbCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7IH1cclxuXHJcblx0XHRpZiAoY29uZmlnR2V0UHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRjb25maWdHZXRQcm9taXNlID0gbG9hZENvbmZpZygpLnRoZW4oKHYpID0+IGNvbmZpZyA9IHYpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb25maWdHZXRQcm9taXNlO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gc2F2ZSgpIHtcclxuXHRcdGlmIChjb25maWcgIT09IG51bGwpIHtcclxuXHRcdFx0YXdhaXQgZ20uc2V0VmFsdWUoY29uZmlnS2V5LCBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIFwiXCIpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGJpbmRJbnB1dChub2RlLCBzZXR0aW5nTmFtZSwgb3B0aW9ucywgdmFsdWVOYW1lKSB7XHJcblx0XHRjb25zdCBjID0gYXdhaXQgZ2V0KCk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZih2YWx1ZU5hbWUpID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHZhbHVlTmFtZSA9IGdldERlZmF1bHRWYWx1ZU5hbWUobm9kZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlSW5wdXQgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHt2YWx1ZSwgdmFsaWR9ID0gY29udmVydFRvVHlwZShjW3NldHRpbmdOYW1lXSwgb3B0aW9ucywgdHJ1ZSk7XHJcblx0XHRcdGlmICh2YWxpZCkgeyBub2RlW3ZhbHVlTmFtZV0gPSB2YWx1ZTsgfVxyXG5cdFx0fTtcclxuXHJcblx0XHR1cGRhdGVJbnB1dCgpO1xyXG5cclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHt2YWx1ZSwgdmFsaWR9ID0gY29udmVydFRvVHlwZShub2RlW3ZhbHVlTmFtZV0sIG9wdGlvbnMsIGZhbHNlKTtcclxuXHRcdFx0aWYgKHZhbGlkKSB7XHJcblx0XHRcdFx0Y1tzZXR0aW5nTmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRzYXZlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVwZGF0ZUlucHV0KCk7XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdldCxcclxuXHRcdHNhdmUsXHJcblx0XHRiaW5kSW5wdXRcclxuXHR9O1xyXG59XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdFR5cGVDb252ZXJ0T3B0aW9ucyA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZU5hbWUobm9kZSkge1xyXG5cdHN3aXRjaCAobm9kZS50YWdOYW1lKSB7XHJcblx0XHRjYXNlIFwiSU5QVVRcIjpcclxuXHRcdFx0aWYgKG5vZGUudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7IHJldHVybiBcImNoZWNrZWRcIjsgfVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdHJldHVybiBcInZhbHVlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb1R5cGUodmFsdWUsIG9wdGlvbnMsIHRvSW5wdXQpIHtcclxuXHRpZiAodHlwZW9mKG9wdGlvbnMpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIG9wdGlvbnMsIGRlZmF1bHRUeXBlQ29udmVydE9wdGlvbnMsIHRvSW5wdXQpO1xyXG5cdH0gaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgdHlwZW9mKG9wdGlvbnMpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZihvcHRpb25zLnR5cGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIG9wdGlvbnMudHlwZSwgb3B0aW9ucywgdG9JbnB1dCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiB7IHZhbHVlLCB2YWxpZDogdHJ1ZSB9O1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIHR5cGVOYW1lLCBvcHRpb25zLCB0b0lucHV0KSB7XHJcblx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcblx0Ly8gQ29udmVydFxyXG5cdHN3aXRjaCAodHlwZU5hbWUpIHtcclxuXHRcdGNhc2UgXCJib29sZWFuXCI6XHJcblx0XHRcdHZhbHVlID0gISF2YWx1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiaW50ZWdlclwiOlxyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHR2YWx1ZSA9ICh0eXBlTmFtZSA9PT0gXCJudW1iZXJcIiA/IHBhcnNlRmxvYXQoYCR7dmFsdWV9YCkgOiBwYXJzZUludChgJHt2YWx1ZX1gLCAxMCkpO1xyXG5cdFx0XHRpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IDA7XHJcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIFRyYW5zZm9ybVxyXG5cdGlmICghdG9JbnB1dCAmJiB0eXBlb2Yob3B0aW9ucy5pbnB1dFRvVmFsdWUpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHZhbHVlID0gb3B0aW9ucy5pbnB1dFRvVmFsdWUodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gTGltaXRzXHJcblx0c3dpdGNoICh0eXBlTmFtZSkge1xyXG5cdFx0Y2FzZSBcImludGVnZXJcIjpcclxuXHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1pbikgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPCBvcHRpb25zLm1pbikgeyB2YWx1ZSA9IG9wdGlvbnMubWluOyB9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5tYXgpID09PSBcIm51bWJlclwiICYmIHZhbHVlID4gb3B0aW9ucy5tYXgpIHsgdmFsdWUgPSBvcHRpb25zLm1heDsgfVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1heExlbmd0aCkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUubGVuZ3RoID4gb3B0aW9ucy5tYXhMZW5ndGgpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBvcHRpb25zLm1heExlbmd0aCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHQvLyBUcmFuc2Zvcm1cclxuXHRpZiAodG9JbnB1dCAmJiB0eXBlb2Yob3B0aW9ucy52YWx1ZVRvSW5wdXQpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHZhbHVlID0gb3B0aW9ucy52YWx1ZVRvSW5wdXQodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdmFsdWUsIHZhbGlkIH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBnbSA9IHJlcXVpcmUoXCIuL2dtXCIpO1xyXG5cclxuXHJcbmNsYXNzIEZldGNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgcmVzcG9uc2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJGZXRjaEVycm9yXCI7XHJcblx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXNwb25zZSB7XHJcblx0Y29uc3RydWN0b3IocmVhZHlTdGF0ZSwgcmVzcG9uc2VIZWFkZXJzLCByZXNwb25zZVRleHQsIHN0YXR1cywgc3RhdHVzVGV4dCkge1xyXG5cdFx0dGhpcy5yZWFkeVN0YXRlID0gcmVhZHlTdGF0ZTtcclxuXHRcdHRoaXMucmVzcG9uc2VIZWFkZXJzID0gcmVzcG9uc2VIZWFkZXJzO1xyXG5cdFx0dGhpcy5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHQ7XHJcblx0XHR0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuXHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBQcm9ncmVzc0V2ZW50IHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGhDb21wdXRhYmxlLCBsb2FkZWQsIHRvdGFsKSB7XHJcblx0XHR0aGlzLmxlbmd0aENvbXB1dGFibGUgPSBsZW5ndGhDb21wdXRhYmxlO1xyXG5cdFx0dGhpcy5sb2FkZWQgPSBsb2FkZWQ7XHJcblx0XHR0aGlzLnRvdGFsID0gdG90YWw7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzcG9uc2VIZWFkZXJNYXAoYWxsSGVhZGVycykge1xyXG5cdGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IHt9O1xyXG5cclxuXHRjb25zdCByZSA9IC9cXHMqKC4qKVxccyo6XFxzKiguKilcXHMqLztcclxuXHRmb3IgKGNvbnN0IGxpbmUgb2YgYWxsSGVhZGVycy5yZXBsYWNlKC9cXHJcXG5cXHMqJC8sIFwiXCIpLnNwbGl0KFwiXFxyXFxuXCIpKSB7XHJcblx0XHRjb25zdCBtID0gcmUuZXhlYyhsaW5lKTtcclxuXHRcdGlmIChtICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1ttWzFdLnRvTG93ZXJDYXNlKCldID0gbVsyXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNwb25zZUhlYWRlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0eGhyLnJlYWR5U3RhdGUsXHJcblx0XHRnZXRSZXNwb25zZUhlYWRlck1hcCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpLFxyXG5cdFx0eGhyLnJlc3BvbnNlVGV4dCxcclxuXHRcdHhoci5zdGF0dXMsXHJcblx0XHR4aHIuc3RhdHVzVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykge1xyXG5cdGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0Ly9jb25zdCBiaW5hcnkgPSBvcHRpb25zLmJpbmFyeTtcclxuXHRjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG5cdGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuXHRjb25zdCBvbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xyXG5cdGNvbnN0IG92ZXJyaWRlTWltZVR5cGUgPSBvcHRpb25zLm92ZXJyaWRlTWltZVR5cGU7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHR4aHIudGltZW91dCA9IHRpbWVvdXQ7XHJcblx0XHRpZiAodHlwZW9mKG92ZXJyaWRlTWltZVR5cGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKG92ZXJyaWRlTWltZVR5cGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGhlYWRlcnMgIT09IG51bGwgJiYgdHlwZW9mKGhlYWRlcnMpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdGZvciAobGV0IGsgaW4gaGVhZGVycykge1xyXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIGhlYWRlcnNba10pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoY29udmVydFhoclJlc3BvbnNlKHhocikpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke3hoci5zdGF0dXNUZXh0fSAoJHt4aHIuc3RhdHVzfSlgLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5zZW5kKGRhdGEpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydEdtUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0cmVzcG9uc2UucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHJlc3BvbnNlLnJlc3BvbnNlSGVhZGVycyksXHJcblx0XHRyZXNwb25zZS5yZXNwb25zZVRleHQsXHJcblx0XHRyZXNwb25zZS5zdGF0dXMsXHJcblx0XHRyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdGNvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IGRldGFpbHMgPSB7XHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcclxuXHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogb3ZlcnJpZGVNaW1lVHlwZSxcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0YmluYXJ5OiBiaW5hcnksXHJcblx0XHRcdHN5bmNocm9ub3VzOiBmYWxzZSxcclxuXHRcdFx0dGltZW91dDogdGltZW91dFxyXG5cdFx0fTtcclxuXHJcblx0XHRkZXRhaWxzLm9ubG9hZCA9IChlKSA9PiByZXNvbHZlKGNvbnZlcnRHbVJlc3BvbnNlKGUpKTtcclxuXHRcdGRldGFpbHMub25lcnJvciA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7ZS5zdGF0dXNUZXh0fSAoJHtlLnN0YXR1c30pYCwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub25hYm9ydCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub250aW1lb3V0ID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob25wcm9ncmVzcykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRkZXRhaWxzLm9ucHJvZ3Jlc3MgPSAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z20ueG1sSHR0cFJlcXVlc3QoZGV0YWlscyk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc0dtU3VwcG9ydGVkKHVzZUdtKSB7XHJcblx0cmV0dXJuICh1c2VHbSAmJiB0eXBlb2YoZ20ueG1sSHR0cFJlcXVlc3QpID09PSBcImZ1bmN0aW9uXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJHRVRcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHJlcXVlc3Q6IHJlcXVlc3QsXHJcblx0Z2V0OiBnZXQsXHJcblx0cG9zdDogcG9zdCxcclxuXHRnbToge1xyXG5cdFx0cmVxdWVzdDogcmVxdWVzdEdtLFxyXG5cdFx0Z2V0OiBnZXRHbSxcclxuXHRcdHBvc3Q6IHBvc3RHbSxcclxuXHR9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9Qcm9taXNlKGZuLCBzZWxmKSB7XHJcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc29sdmUoZm4uYXBwbHkoc2VsZiwgYXJncykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59O1xyXG5cclxuY29uc3QgZ20gPSAoKG9iamVjdHMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRpZiAob2JqLkdNICE9PSBudWxsICYmIHR5cGVvZihvYmouR00pID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9iai5HTTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdGNvbnN0IG1hcHBpbmcgPSBbXHJcblx0XHRbIFwiZ2V0VmFsdWVcIiwgXCJHTV9nZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwic2V0VmFsdWVcIiwgXCJHTV9zZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwiZGVsZXRlVmFsdWVcIiwgXCJHTV9kZWxldGVWYWx1ZVwiIF0sXHJcblx0XHRbIFwieG1sSHR0cFJlcXVlc3RcIiwgXCJHTV94bWxodHRwUmVxdWVzdFwiIF1cclxuXHRdO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBtYXBwaW5nKSB7XHJcblx0XHRsZXQgcHJvbWlzZSA9IG51bGw7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGNvbnN0IGZuID0gb2JqW3ZhbHVlXTtcclxuXHRcdFx0aWYgKHR5cGVvZihmbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHByb21pc2UgPSB0b1Byb21pc2UoZm4sIG9iaik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChwcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdHByb21pc2UgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QobmV3IEVycm9yKGBOb3Qgc3VwcG9ydGVkICgke2tleX0pYCkpKTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdFtrZXldID0gcHJvbWlzZTtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufSkuY2FsbCh0aGlzLCBbdGhpcywgd2luZG93XSk7XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBjb25maWdLZXkgPSBcIngtaW5maW5pdGUtc2Nyb2xsLWNvbmZpZ1wiO1xyXG5jb25zdCBjb25maWdEZWZhdWx0ID0ge1xyXG5cdGRlbGF5OiAxLCAvLyBmbG9hdCBbMC1pbmZdOyBzZWNvbmRzIGJlZm9yZSBsb2FkaW5nIGEgbmV3IHBhZ2VcclxuXHRsb2FkQXR0ZW1wdHM6IDEsIC8vIGludGVnZXIgWzAtaW5mXTsgbnVtYmVyIG9mIGF0dGVtcHRzIGZvciBsb2FkaW5nIG5ldyBwYWdlc1xyXG5cdHBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkOiAwLjUsIC8vIGZsb2F0IFswLTFdOyA1MCUgb2YgcGFnZSBtdXN0IGJlIHZpZXdlZCBiZWZvcmUgbG9hZGluZyB0aGUgbmV4dFxyXG5cdGVuYWJsZWRCeURlZmF1bHRGb3JHYWxsZXJ5SW1hZ2VzOiB0cnVlIC8vIGJvb2xlYW5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKS5jcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGVudFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci10b3AtbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+VG9wPC9hPjxsYWJlbCBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveC1sYWJlbDBcXFwiPjxsYWJlbCBjbGFzcz1cXFwibGMgeC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveC1sYWJlbDEgeC1jaGVja2JveC1zbWFsbFxcXCI+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveFxcXCI+PHNwYW4+PC9zcGFuPiBJbmZpbml0ZSBzY3JvbGw8L2xhYmVsPjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBJbmZpbml0ZVNjcm9sbEJhc2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5wYWdlVmlld1BlcmNlbnRSZXF1aXJlZCA9IDAuNTsgLy8gNTAlIG9mIHBhZ2UgbXVzdCBiZSB2aWV3ZWQgYmVmb3JlIGxvYWRpbmcgdGhlIG5leHRcclxuXHRcdHRoaXMucGFnZU5vZGUgPSBudWxsO1xyXG5cdFx0dGhpcy5jb250YWluZXJOb2RlID0gd2luZG93O1xyXG5cclxuXHRcdHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLl9zY3JvbGxZID0gMDtcclxuXHRcdHRoaXMuX29uU2Nyb2xsID0gKCkgPT4gb25TY3JvbGxDaGFuZ2VkLmNhbGwodGhpcywgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0bG9hZE5leHRQYWdlKCkge31cclxuXHJcblx0aXNBY3RpdmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXNBY3RpdmU7XHJcblx0fVxyXG5cdHNldEFjdGl2ZSh2YWx1ZSkge1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdGlmICh0aGlzLl9pc0FjdGl2ZSkgeyByZXR1cm47IH1cclxuXHRcdFx0dGhpcy5faXNBY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLl9zY3JvbGxZID0gZ2V0UGFnZVNjcm9sbFkoKTtcclxuXHRcdFx0dGhpcy5jb250YWluZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5fb25TY3JvbGwsIGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghdGhpcy5faXNBY3RpdmUpIHsgcmV0dXJuOyB9XHJcblx0XHRcdHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX29uU2Nyb2xsLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDaGVjaygpIHtcclxuXHRcdG9uU2Nyb2xsQ2hhbmdlZC5jYWxsKHRoaXMsIHRydWUpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uU2Nyb2xsQ2hhbmdlZChmb3JjZSkge1xyXG5cdGNvbnN0IHNjcm9sbFlOZXcgPSBnZXRQYWdlU2Nyb2xsWSgpO1xyXG5cdGNvbnN0IHNjcm9sbFlQcmUgPSB0aGlzLl9zY3JvbGxZO1xyXG5cdHRoaXMuX3Njcm9sbFkgPSBzY3JvbGxZTmV3O1xyXG5cclxuXHQvLyBNdXN0IGhhdmUgdmFsaWQgdGFyZ2V0XHJcblx0aWYgKHRoaXMucGFnZU5vZGUgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdC8vIERvbid0IGxvYWQgaWYgYWxyZWFkeSBsb2FkaW5nLCBpZiBub3Qgc2Nyb2xsZWQgYXQgYWxsLCBvciBpZiBzY3JvbGxpbmcgdXBcclxuXHRpZiAoZm9yY2UgIT09IHRydWUpIHtcclxuXHRcdGlmIChzY3JvbGxZTmV3IDwgMSB8fCBzY3JvbGxZTmV3IDw9IHNjcm9sbFlQcmUpIHsgcmV0dXJuOyB9XHJcblx0fVxyXG5cclxuXHQvLyBEb24ndCBsb2FkIGlmIHRoZSBjdXJyZW50IHBhZ2UgaXMgZW50aXJlbHkgb2ZmLXNjcmVlblxyXG5cdGNvbnN0IHJlY3QgPSB0aGlzLnBhZ2VOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdGlmIChyZWN0LnkgKyByZWN0LmhlaWdodCA8IDApIHsgcmV0dXJuOyB9XHJcblxyXG5cdC8vIERvbid0IGxvYWQgaWYgbm90IGVub3VnaCBvZiB0aGUgcGFnZSBoYXMgYmVlbiB2aWV3ZWRcclxuXHRjb25zdCBoZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcclxuXHRpZiAocmVjdC55ICsgcmVjdC5oZWlnaHQgKiB0aGlzLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkID49IGhlaWdodCkgeyByZXR1cm47IH1cclxuXHJcblx0Ly8gTG9hZFxyXG5cdHRoaXMubG9hZE5leHRQYWdlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpIHtcclxuXHRyZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VTY3JvbGxZKCkge1xyXG5cdGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRyZXR1cm4gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2Muc2Nyb2xsVG9wKSAtIChkb2MuY2xpZW50VG9wIHx8IDApO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0SW5maW5pdGVTY3JvbGxCYXNlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IGZldGNoID0gcmVxdWlyZShcIi4uL2ZldGNoXCIpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuY29uc3QgcGFnaW5hdGlvbiA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnaW5hdGlvblwiKTtcclxuY29uc3Qgc2V0dGluZ3MgPSByZXF1aXJlKFwiLi4vYXBpL3NldHRpbmdzXCIpO1xyXG5jb25zdCBJbmZpbml0ZVNjcm9sbEJhc2UgPSByZXF1aXJlKFwiLi9pbmZpbml0ZS1zY3JvbGwtYmFzZVwiKS5JbmZpbml0ZVNjcm9sbEJhc2U7XHJcblxyXG5sZXQgY3VycmVudFBhZ2VUeXBlID0gbnVsbDtcclxubGV0IHNjcm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG5jbGFzcyBJbmZpbml0ZVNjcm9sbCBleHRlbmRzIEluZmluaXRlU2Nyb2xsQmFzZSB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnLCBwYWdlVHlwZSwgcGFnZU5vZGUsIHBhZ2VzSW5mbykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkID0gY29uZmlnLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLnBhZ2VUeXBlID0gcGFnZVR5cGU7XHJcblx0XHR0aGlzLnBhZ2VOb2RlID0gcGFnZU5vZGU7XHJcblx0XHR0aGlzLnBhZ2VzSW5mbyA9IHBhZ2VzSW5mbztcclxuXHRcdHRoaXMuY29udGVudENvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5fZGVsYXlQcm9taXNlID0gbnVsbDtcclxuXHRcdHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5faXNFbmFibGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLl9pc0VuYWJsZWRDaGVja2JveCA9IG51bGw7XHJcblx0XHR0aGlzLl9wYWdlV3JhcHBlclRlbXBsYXRlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmluaXRpYWxpemVDb250ZW50Q29udGFpbmVyKCk7XHJcblx0fVxyXG5cclxuXHJcblx0aW5pdGlhbGl6ZUNvbnRlbnRDb250YWluZXIoKSB7XHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUNvbnRlbnRDb250YWluZXIoKTtcclxuXHRcdHRoaXMucGFnZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jb250ZW50Q29udGFpbmVyLCB0aGlzLnBhZ2VOb2RlKTtcclxuXHJcblx0XHR0aGlzLnBhZ2VOb2RlID0gdGhpcy5jcmVhdGVXcmFwcGVkUGFnZSh0aGlzLnBhZ2VOb2RlLCB0aGlzLnBhZ2VzSW5mby5wYWdlQ3VycmVudCk7XHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wYWdlTm9kZSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDb250ZW50Q29udGFpbmVyKCkge1xyXG5cdFx0Y29uc3QgaHRtbCA9IHJlcXVpcmUoXCIuL2NvbnRhaW5lci5odG1sXCIpO1xyXG5cdFx0Y29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiLngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lclwiKTtcclxuXHJcblx0XHRjb25zdCB0b3AgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi54LWluZmluaXRlLXNjcm9sbC1oZWFkZXItdG9wLWxpbmtcIik7XHJcblx0XHR0b3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSwgZmFsc2UpO1xyXG5cclxuXHRcdHRoaXMuX2lzRW5hYmxlZENoZWNrYm94ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveFwiKTtcclxuXHRcdHRoaXMuX2lzRW5hYmxlZENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldEVuYWJsZWQodGhpcy5faXNFbmFibGVkQ2hlY2tib3guY2hlY2tlZCk7XHJcblx0XHRcdGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7IHRoaXMudXBkYXRlQ2hlY2soKTsgfVxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVXcmFwcGVkUGFnZShjb250ZW50LCBwYWdlSW5kZXgpIHtcclxuXHRcdGlmICh0aGlzLl9wYWdlV3JhcHBlclRlbXBsYXRlID09PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IGh0bWwgPSByZXF1aXJlKFwiLi9wYWdlLmh0bWxcIik7XHJcblx0XHRcdGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XHJcblx0XHRcdHRoaXMuX3BhZ2VXcmFwcGVyVGVtcGxhdGUgPSBkb2MucXVlcnlTZWxlY3RvcihcIi54LWluZmluaXRlLXNjcm9sbC1wYWdlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHdyYXBwZXIgPSB0aGlzLl9wYWdlV3JhcHBlclRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdGNvbnN0IGxpbmsgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1saW5rXCIpO1xyXG5cdFx0bGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRoaXMucGFnZXNJbmZvLmNyZWF0ZVBhZ2VVcmwocGFnZUluZGV4KSk7XHJcblx0XHRsaW5rLnRleHRDb250ZW50ID0gYFBhZ2UgJHtwYWdlSW5kZXggKyAxfWA7XHJcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cdFx0cmV0dXJuIHdyYXBwZXI7XHJcblx0fVxyXG5cclxuXHJcblx0aXNFbmFibGVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lzRW5hYmxlZDtcclxuXHR9XHJcblxyXG5cdHNldEVuYWJsZWQodmFsdWUpIHtcclxuXHRcdGNvbnN0IGlzQ29tcGxldGUgPSB0aGlzLmlzQ29tcGxldGUoKTtcclxuXHRcdHRoaXMuX2lzRW5hYmxlZCA9ICEhdmFsdWUgJiYgIWlzQ29tcGxldGU7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9pc0xvYWRpbmcpIHtcclxuXHRcdFx0dGhpcy5zZXRBY3RpdmUodGhpcy5faXNFbmFibGVkKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9pc0VuYWJsZWRDaGVja2JveC5jaGVja2VkID0gdGhpcy5faXNFbmFibGVkIHx8IGlzQ29tcGxldGU7XHJcblx0fVxyXG5cclxuXHRpc0NvbXBsZXRlKCkge1xyXG5cdFx0cmV0dXJuICh0aGlzLnBhZ2VzSW5mby5wYWdlQ3VycmVudCArIDEgPj0gdGhpcy5wYWdlc0luZm8ucGFnZUNvdW50KTtcclxuXHR9XHJcblxyXG5cdGdldE5leHRQYWdlVXJsKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGFnZXNJbmZvLmNyZWF0ZVBhZ2VVcmwodGhpcy5wYWdlc0luZm8ucGFnZUN1cnJlbnQgKyAxKTtcclxuXHR9XHJcblxyXG5cdGdldFBhZ2VEYXRhRnJvbUh0bWwoaHRtbCkge1xyXG5cdFx0Y29uc3QgY29udGVudCA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZHRcIik7XHJcblx0XHRpZiAoY29udGVudCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XHJcblx0XHRjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwieC1pbmZpbml0ZS1zY3JvbGxcIik7XHJcblx0XHRyZXR1cm4geyBjb250ZW50IH07XHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkTmV4dFBhZ2UoKSB7XHJcblx0XHRpZiAoIWlzV2luZG93VmlzaWJsZSgpKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG5cdFx0aWYgKHRoaXMuX2lzTG9hZGluZykgeyByZXR1cm47IH1cclxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGUoKSkge1xyXG5cdFx0XHR0aGlzLnBhZ2VOb2RlID0gbnVsbDtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIExvYWQgZGF0YVxyXG5cdFx0Y29uc3QgdXJsID0gdGhpcy5nZXROZXh0UGFnZVVybCgpO1xyXG5cdFx0bGV0IHBhZ2VEYXRhO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0dGhpcy5faXNMb2FkaW5nID0gdHJ1ZTtcclxuXHRcdFx0cGFnZURhdGEgPSBhd2FpdCB0aGlzLmZldGNoUGFnZURhdGEodXJsLCB0aGlzLmNvbmZpZy5sb2FkQXR0ZW1wdHMsIHRoaXMuY29uZmlnLmRlbGF5KTtcclxuXHRcdH1cclxuXHRcdGZpbmFsbHkge1xyXG5cdFx0XHR0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChwYWdlRGF0YSA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0XHQvLyBVcGRhdGUgcGFnZVxyXG5cdFx0Kyt0aGlzLnBhZ2VzSW5mby5wYWdlQ3VycmVudDtcclxuXHJcblx0XHQvLyBDcmVhdGUgbm9kZVxyXG5cdFx0Y29uc3QgbmV3UGFnZU5vZGUgPSB0aGlzLmNyZWF0ZVdyYXBwZWRQYWdlKHBhZ2VEYXRhLmNvbnRlbnQsIHRoaXMucGFnZXNJbmZvLnBhZ2VDdXJyZW50KTtcclxuXHRcdHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQYWdlTm9kZSk7XHJcblxyXG5cdFx0Ly8gRG9uZT9cclxuXHRcdGlmICh0aGlzLmlzQ29tcGxldGUoKSkge1xyXG5cdFx0XHR0aGlzLnBhZ2VOb2RlID0gbnVsbDtcclxuXHRcdFx0dGhpcy5zZXRFbmFibGVkKGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFnZU5vZGUgPSBuZXdQYWdlTm9kZTtcclxuXHRcdFx0dGhpcy5zZXRBY3RpdmUodHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBmZXRjaFBhZ2VEYXRhKHVybCwgbG9hZEF0dGVtcHRzLCBkZWxheSkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsb2FkQXR0ZW1wdHM7ICsraSkge1xyXG5cdFx0XHRhd2FpdCB0aGlzLndhaXRGb3JEZWxheSgpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoLmdldCh7IHVybDogdXJsIH0pO1xyXG5cdFx0XHRcdGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcocmVzdWx0LnJlc3BvbnNlVGV4dCwgXCJ0ZXh0L2h0bWxcIik7XHJcblx0XHRcdFx0Y29uc3QgZGF0YSA9IHRoaXMuZ2V0UGFnZURhdGFGcm9tSHRtbChkb2MpO1xyXG5cdFx0XHRcdGlmIChkYXRhICE9PSBudWxsKSB7IHJldHVybiBkYXRhOyB9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0fVxyXG5cdFx0XHRmaW5hbGx5IHtcclxuXHRcdFx0XHR0aGlzLnNldERlbGF5KGRlbGF5KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblx0c2V0RGVsYXkodGltZSkge1xyXG5cdFx0dGhpcy5fZGVsYXlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLl9kZWxheVByb21pc2UgPSBudWxsO1xyXG5cdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0fSwgdGltZSAqIDEwMDApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyB3YWl0Rm9yRGVsYXkoKSB7XHJcblx0XHRpZiAodGhpcy5fZGVsYXlQcm9taXNlICE9PSBudWxsKSB7XHJcblx0XHRcdGF3YWl0IHRoaXMuX2RlbGF5UHJvbWlzZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXR1cFBhZ2VGb2N1cygpIHtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBvblZpc2liaWxpdHlTdGF0ZUNoYW5nZWQsIGZhbHNlKTtcclxuXHRvblZpc2liaWxpdHlTdGF0ZUNoYW5nZWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNXaW5kb3dWaXNpYmxlKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHR0eXBlb2YoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKSAhPT0gXCJzdHJpbmdcIiB8fFxyXG5cdFx0ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVmlzaWJpbGl0eVN0YXRlQ2hhbmdlZCgpIHtcclxuXHRpZiAoIWlzV2luZG93VmlzaWJsZSgpKSB7IHJldHVybjsgfVxyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIG9uVmlzaWJpbGl0eVN0YXRlQ2hhbmdlZCwgZmFsc2UpO1xyXG5cdGluaXRpYWxpemUoY3VycmVudFBhZ2VUeXBlKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRQYWdlQ29udGVudChwYWdlVHlwZSkge1xyXG5cdGxldCBuO1xyXG5cdHN3aXRjaCAocGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dkdFwiKTtcclxuXHRcdFx0aWYgKG4gIT09IG51bGwpIHsgcmV0dXJuIG47IH1cclxuXHRcdFx0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXplX2dhbGxlcnlfcGFnZV9jb250YWluZXJcIik7XHJcblx0XHRcdGlmIChuICE9PSBudWxsKSB7IHJldHVybiBuOyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW5hYmxlZEJ5RGVmYXVsdChwYWdlVHlwZSwgY29uZmlnKSB7XHJcblx0c3dpdGNoIChwYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjogcmV0dXJuIGNvbmZpZy5lbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUltYWdlcztcclxuXHRcdGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlc2hlZXQoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtaW5maW5pdGUtc2Nyb2xsXCI7XHJcblx0aWYgKHN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS5jc3NcIik7XHJcblx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZShwYWdlVHlwZSkge1xyXG5cdGlmIChzY3JvbGxlciAhPT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgcGFnZXNJbmZvID0gcGFnaW5hdGlvbi5nZXRJbmZvKGRvY3VtZW50KTtcclxuXHRpZiAocGFnZXNJbmZvID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBwYWdlTm9kZSA9IGdldERlZmF1bHRQYWdlQ29udGVudChwYWdlVHlwZSk7XHJcblx0aWYgKHBhZ2VOb2RlID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBjb25maWcgPSBhd2FpdCByZXF1aXJlKFwiLi9jb25maWdcIikuZ2V0KCk7XHJcblxyXG5cdGluc2VydFN0eWxlc2hlZXQoKTtcclxuXHJcblx0c2Nyb2xsZXIgPSBuZXcgSW5maW5pdGVTY3JvbGwoY29uZmlnLCBwYWdlVHlwZSwgcGFnZU5vZGUsIHBhZ2VzSW5mbyk7XHJcblx0c2Nyb2xsZXIuc2V0RW5hYmxlZChpc0VuYWJsZWRCeURlZmF1bHQocGFnZVR5cGUsIGNvbmZpZykpO1xyXG59XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVTZXR0aW5ncygpIHtcclxuXHRzZXR0aW5ncy5pbml0aWFsaXplKCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb24gPSBzZXR0aW5ncy5hZGRTZWN0aW9uKFwiSW5maW5pdGUgU2Nyb2xsXCIsIFwiaW5maW5pdGUtc2Nyb2xsXCIsIDEpO1xyXG5cdGlmIChzZWN0aW9uICE9PSBudWxsKSB7XHJcblx0XHRhd2FpdCBzZXR1cFNldHRpbmdzKHNlY3Rpb24pO1xyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0dXBTZXR0aW5ncyhjb250YWluZXIpIHtcclxuXHRjb25zdCBjb25maWcgPSBhd2FpdCByZXF1aXJlKFwiLi9jb25maWdcIik7XHJcblxyXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSByZXF1aXJlKFwiLi9zZXR0aW5ncy5odG1sXCIpO1xyXG5cdGJpbmRJbnB1dChjb25maWcsIGNvbnRhaW5lciwgXCJlbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUltYWdlc1wiLCBcImJvb2xlYW5cIik7XHJcblx0YmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBcImRlbGF5XCIsIHtcclxuXHRcdHR5cGU6IFwibnVtYmVyXCIsXHJcblx0XHRtaW46IDBcclxuXHR9KTtcclxuXHRiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIFwibG9hZEF0dGVtcHRzXCIsIHtcclxuXHRcdHR5cGU6IFwiaW50ZWdlclwiLFxyXG5cdFx0bWluOiAwXHJcblx0fSk7XHJcblx0YmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBcInBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkXCIsIHtcclxuXHRcdHR5cGU6IFwibnVtYmVyXCIsXHJcblx0XHRtaW46IDAsXHJcblx0XHRtYXg6IDEsXHJcblx0XHR2YWx1ZVRvSW5wdXQ6ICh2KSA9PiB2ICogMTAwLFxyXG5cdFx0aW5wdXRUb1ZhbHVlOiAodikgPT4gdiAvIDEwMFxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIHNldHRpbmdOYW1lLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS14LXNldHRpbmdzLWZvcj0ke3NldHRpbmdOYW1lfV1gKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25maWcuYmluZElucHV0KGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS14LXNldHRpbmdzLWZvcj0ke3NldHRpbmdOYW1lfV1gKSwgc2V0dGluZ05hbWUsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcblx0Y3VycmVudFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGRvY3VtZW50LCBsb2NhdGlvbik7XHJcblx0c3dpdGNoIChjdXJyZW50UGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdHNldHVwUGFnZUZvY3VzKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNldHRpbmdzXCI6XHJcblx0XHRcdGluaXRpYWxpemVTZXR0aW5ncygpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5yZWFkeS5vblJlYWR5KG1haW4pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtcGFnZVxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1oZWFkZXJcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci1jb250ZW50XFxcIj5cXHJcXG5cXHRcXHRcXHQ8YSBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1saW5rXFxcIj48L2E+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvblxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWxlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZVxcXCI+RW5hYmxlZCBmb3IgZ2FsbGVyeSBpbWFnZXM8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPkVuYWJsZSBpbmZpbml0ZS1zY3JvbGxpbmcgYnkgZGVmYXVsdCBmb3IgZ2FsbGVyeSBpbWFnZXMuPC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGxhYmVsIGNsYXNzPVxcXCJsY1xcXCI+PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJlbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUltYWdlc1xcXCIgLz48c3Bhbj48L3NwYW4+PC9sYWJlbD5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPkRlbGF5PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uXFxcIj5TZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGxvYWRpbmcgdGhlIG5leHQgcGFnZS48L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tcmlnaHRcXFwiPlxcclxcblxcdFxcdDxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0XFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJkZWxheVxcXCIgLz5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPkxvYWQgYXR0ZW1wdHM8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPk1heGltdW0gbnVtYmVyIG9mIGF0dGVtcHRzIGFsbG93ZWQgdG8gbG9hZCB0aGUgbmV4dCBwYWdlLjwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodFxcXCI+XFxyXFxuXFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBzdGVwPVxcXCIxXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImxvYWRBdHRlbXB0c1xcXCIgLz5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPlJlcXVpcmVkIHBhZ2UgdmlldyBwZXJjZW50PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uXFxcIj5QZXJjZW50IG9mIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCBtdXN0IGJlIHZpZXdlZCBiZWZvcmUgbG9hZGluZyB0aGUgbmV4dC48L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tcmlnaHRcXFwiPlxcclxcblxcdFxcdDxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0XFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMDBcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwicGFnZVZpZXdQZXJjZW50UmVxdWlyZWRcXFwiIC8+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXJ7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO21pbi13aWR0aDo3MTBweDttYXgtd2lkdGg6MTIxMHB4O21hcmdpbjowIGF1dG87Y2xlYXI6Ym90aDtwb3NpdGlvbjpyZWxhdGl2ZX0ueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlcnt0b3A6MDtib3R0b206MDtwb3NpdGlvbjpzdGlja3k7Zm9udC1zaXplOjEwcHQ7dGV4dC1hbGlnbjpyaWdodDtsaW5lLWhlaWdodDoxLjM1ZW07ei1pbmRleDoyO3BvaW50ZXItZXZlbnRzOmF1dG99LngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci1jb250ZW50e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3doaXRlLXNwYWNlOm5vd3JhcDtsaW5lLWhlaWdodDoxLjVlbTtoZWlnaHQ6Mi41ZW19LngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci10b3AtbGlua3tkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWRlY29yYXRpb246bm9uZTtwYWRkaW5nOi41ZW07bWFyZ2luLXJpZ2h0Oi41ZW19LngtaW5maW5pdGUtc2Nyb2xsLWVuYWJsZWQtY2hlY2tib3gtbGFiZWwwLC54LWluZmluaXRlLXNjcm9sbC1wYWdlLWxpbmt7d2hpdGUtc3BhY2U6bm93cmFwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6LjVlbX0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZXtwb3NpdGlvbjpyZWxhdGl2ZX0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1oZWFkZXJ7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246c3RpY2t5O2ZvbnQtc2l6ZToxMHB0O3RleHQtYWxpZ246bGVmdDtsaW5lLWhlaWdodDoxLjM1ZW07ei1pbmRleDoxfS54LWluZmluaXRlLXNjcm9sbC1wYWdlOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMH0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1saW5re3RleHQtZGVjb3JhdGlvbjpub25lfS54LWluZmluaXRlLXNjcm9sbC1wYWdlLGRpdiNnZHR7Ym9yZGVyOjA7dGV4dC1hbGlnbjpsZWZ0O21pbi13aWR0aDowO21heC13aWR0aDpub25lO3BhZGRpbmc6MH0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZSBpbWd7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO21hcmdpbjowO3BhZGRpbmc6MH0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZSBhe3RleHQtZGVjb3JhdGlvbjpub25lfTpyb290LngtaXMtZGFyayAueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyLDpyb290LngtaXMtZGFyayAueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRlbnQsOnJvb3QueC1pcy1kYXJrIC54LWluZmluaXRlLXNjcm9sbC1wYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiM0ZjUzNWJ9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXIsOnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGVudCw6cm9vdDpub3QoLngtaXMtZGFyaykgLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2VkZWJkZn06cm9vdDpub3QoLngtaXMtZGFyaykgLngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lciw6cm9vdDpub3QoLngtaXMtZGFyaykgLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UgaW1nLDpyb290Om5vdCgueC1pcy1kYXJrKSAueC1pbmZpbml0ZS1zY3JvbGwtcGFnZTpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1jb2xvcjojNWMwZDEyfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIzMHB4KXsueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVye21heC13aWR0aDo5NzBweH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTBweCl7LngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lcnttYXgtd2lkdGg6NzMwcHh9fS5sYy54LWNoZWNrYm94LXNtYWxse2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjIwcHg7cGFkZGluZy1sZWZ0OjI2cHg7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmxjLngtY2hlY2tib3gtc21hbGw+c3BhbntoZWlnaHQ6MTZweDt3aWR0aDoxNnB4fS5sYy54LWNoZWNrYm94LXNtYWxsPnNwYW46YWZ0ZXJ7bGVmdDo1cHg7dG9wOjEuMXB4O3dpZHRoOjNweDtoZWlnaHQ6OHB4fWRpdi5lemVfZ2FsbGVyeV9wYWdle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjA7d2lkdGg6YXV0bzttaW4td2lkdGg6MDttYXgtd2lkdGg6bm9uZTttYXJnaW46MDtjbGVhcjpub25lO3BhZGRpbmc6MDtib3JkZXItcmFkaXVzOjB9YS5lemVfZ2FsbGVyeV9wYWdlX2luZGljYXRvcntkaXNwbGF5Om5vbmV9LmV6ZV9nYWxsZXJ5X2N1c3RvbV90YWJsZT4uZXplX2dhbGxlcnlfY3VzdG9tX3Jvdz4uZXplX2dhbGxlcnlfY3VzdG9tX2NlbGw6bnRoLWNoaWxkKDEpPnA6bnRoLWNoaWxkKDEpe2Rpc3BsYXk6bm9uZX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdldFVybFBhcmFtZXRlcnModXJsKSB7XHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Y29uc3QgbWF0Y2ggPSAvXihbXiNcXD9dKikoXFw/W14jXSopPygjW1xcd1xcV10qKT8kLy5leGVjKHVybCk7XHJcblx0aWYgKG1hdGNoICE9PSBudWxsICYmIG1hdGNoWzJdICYmIG1hdGNoWzJdLmxlbmd0aCA+IDEpIHtcclxuXHRcdGNvbnN0IHBhdHRlcm4gPSAvKFtePV0qKSg/Oj0oW1xcd1xcV10qKSk/LztcclxuXHRcdGZvciAoY29uc3QgcGFydCBvZiBtYXRjaFsyXS5zdWJzdHIoMSkuc3BsaXQoXCImXCIpKSB7XHJcblx0XHRcdGlmIChwYXJ0Lmxlbmd0aCA9PT0gMCkgeyBjb250aW51ZTsgfVxyXG5cdFx0XHRjb25zdCBtYXRjaDIgPSBwYXR0ZXJuLmV4ZWMocGFydCk7XHJcblx0XHRcdGNvbnN0IHZhbHVlID0gbWF0Y2gyWzJdO1xyXG5cdFx0XHRyZXN1bHRbZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoMlsxXSldID0gKHZhbHVlICE9PSB1bmRlZmluZWQgPyBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpIDogbnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVF1ZXJ5UGFyYW1ldGVyKHVybCwgcGFyYW1ldGVyTmFtZSkge1xyXG5cdHJldHVybiB1cmwucmVwbGFjZShcclxuXHRcdG5ldyBSZWdFeHAoYChbJlxcXFw/XSkke3BhcmFtZXRlck5hbWV9KD86KD86PVteJl0qKT8oJnwkKSlgKSxcclxuXHRcdChtMCwgbTEsIG0yKSA9PiAobTEgPT09IFwiP1wiICYmIG0yID8gXCI/XCIgOiBtMikpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0VXJsUGFyYW1ldGVycyxcclxuXHRyZW1vdmVRdWVyeVBhcmFtZXRlclxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBpc1JlYWR5VmFsdWUgPSBmYWxzZTtcclxubGV0IGNhbGxiYWNrcyA9IG51bGw7XHJcbmxldCBjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5jb25zdCBjaGVja0ludGVydmFsUmF0ZSA9IDI1MDtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0hvb2tlZCgpIHtcclxuXHRyZXR1cm4gY2FsbGJhY2tzICE9PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob29rKCkge1xyXG5cdGNhbGxiYWNrcyA9IFtdO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoY2hlY2tJZlJlYWR5LCBjaGVja0ludGVydmFsUmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaG9vaygpIHtcclxuXHRjb25zdCBjYnMgPSBjYWxsYmFja3M7XHJcblxyXG5cdGNhbGxiYWNrcyA9IG51bGw7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjbGVhckludGVydmFsKGNoZWNrSW50ZXJ2YWxJZCk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuXHJcblx0aW52b2tlKGNicyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZShjYWxsYmFja3MpIHtcclxuXHRmb3IgKGxldCBjYiBvZiBjYWxsYmFja3MpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNiKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuXHRpZiAoaXNSZWFkeVZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRpZiAoaXNIb29rZWQoKSkgeyB1bmhvb2soKTsgfVxyXG5cdFx0aXNSZWFkeVZhbHVlID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcclxuXHRpc1JlYWR5KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvblJlYWR5KGNhbGxiYWNrKSB7XHJcblx0aWYgKGlzUmVhZHkoKSkge1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghaXNIb29rZWQoKSkgeyBob29rKCk7IH1cclxuXHJcblx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0b25SZWFkeTogb25SZWFkeSxcclxuXHRnZXQgaXNSZWFkeSgpIHsgcmV0dXJuIGlzUmVhZHkoKTsgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBhcGlTdHlsZSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0aWYgKGFwaVN0eWxlID09PSBudWxsKSB7IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vYXBpL3N0eWxlXCIpOyB9XHJcblx0YXBpU3R5bGUuc2V0RG9jdW1lbnREYXJrRmxhZygpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHhQcmVmaXggPSBcIiMheFwiO1xyXG5jb25zdCBzZXBhcmF0b3IgPSBcIi9cIjtcclxuY29uc3Qgcm91dGVzID0gW107XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXIoYWRkSGlzdG9yeSkge1xyXG5cdGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0aWYgKGFkZEhpc3RvcnkpIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShwYXRoKSB7XHJcblx0cmV0dXJuIHBhdGggPyBgJHt4UHJlZml4fSR7c2VwYXJhdG9yfSR7cGF0aH1gIDogeFByZWZpeDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Y29uc3Qgcm91dGUgPSB7IG1hdGNoLCBjYWxsYmFjayB9O1xyXG5cdHJvdXRlcy5wdXNoKHJvdXRlKTtcclxuXHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdH1cclxuXHR0ZXN0Um91dGVzKFtyb3V0ZV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRmb3IgKGxldCBpID0gMCwgaWkgPSByb3V0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0Y29uc3Qgcm91dGUgPSByb3V0ZXNbaV07XHJcblx0XHRpZiAocm91dGUubWF0Y2ggPT09IG1hdGNoICYmIHJvdXRlLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xyXG5cdFx0XHRyb3V0ZXMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRYRnJhZ21lbnQoKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0IWZyYWdtZW50IHx8XHJcblx0XHRmcmFnbWVudC5sZW5ndGggPCB4UHJlZml4Lmxlbmd0aCB8fFxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKDAsIHhQcmVmaXgubGVuZ3RoKSAhPT0geFByZWZpeCB8fFxyXG5cdFx0KGZyYWdtZW50Lmxlbmd0aCA+IHhQcmVmaXgubGVuZ3RoICYmIGZyYWdtZW50W3hQcmVmaXgubGVuZ3RoXSAhPT0gc2VwYXJhdG9yKSkgP1xyXG5cdFx0bnVsbCA6XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoeFByZWZpeC5sZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0Um91dGVzKHJvdXRlcykge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gZ2V0WEZyYWdtZW50KCk7XHJcblx0aWYgKGZyYWdtZW50ID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5tYXRjaC5leGVjKGZyYWdtZW50KTtcclxuXHRcdHJvdXRlLmNhbGxiYWNrKG1hdGNoLCBmcmFnbWVudCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblVybEZyYWdtZW50Q2hhbmdlZCgpIHtcclxuXHR0ZXN0Um91dGVzKHJvdXRlcyk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjbGVhcjogY2xlYXIsXHJcblx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0YWRkUm91dGU6IGFkZFJvdXRlLFxyXG5cdHJlbW92ZVJvdXRlOiByZW1vdmVSb3V0ZVxyXG59O1xyXG4iXX0=
