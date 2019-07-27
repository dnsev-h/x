// ==UserScript==
// @name        x/infinite-scroll
// @version     1.1.5
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

},{}],6:[function(require,module,exports){
module.exports = ".x-settings-container{display:flex;flex-direction:column;margin-top:-1em}.x-settings-container.x-settings-container-hidden{display:none}.x-settings-hidden{display:none!important}.x-settings-option select{margin-right:.5em}.x-settings-section-container{display:block;width:100%;margin-top:1em}.x-settings-section-content{margin:8px auto 10px 10px;clear:both}.x-settings-section-header{font-size:1.25em;line-height:1.5em;margin:.25em 0}.x-settings-section{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;align-content:flex-start;flex-wrap:nowrap;width:100%;padding:.5em 0}.x-settings-section+.x-settings-section{border-top:1px solid rgba(0,0,0,.25)}:root:not(.x-is-dark) .x-settings-section+.x-settings-section{border-top-color:rgba(92,13,18,.25)}.x-settings-section-left{flex:1 1 auto;padding-right:.5em}.x-settings-section-right{flex:0 0 auto;min-width:30%;text-align:right}.x-settings-section-title{font-weight:700;line-height:1.5em}.x-settings-section-description{line-height:1.35em}.x-settings-section-description+.x-settings-section-description{margin-top:.25em}input.x-settings-section-input[type=number],input.x-settings-section-input[type=text]{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e;box-sizing:border-box}:root:not(.x-is-dark) input.x-settings-section-input[type=number],:root:not(.x-is-dark) input.x-settings-section-input[type=text]{background-color:#e3e0d1}input.x-settings-section-input[type=text]{width:20em}input.x-settings-section-input[type=number]{width:5em;-moz-appearance:textfield}input.x-settings-section-input[type=number]::-webkit-inner-spin-button,input.x-settings-section-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}textarea.x-settings-section-textarea{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e;resize:vertical;font-size:inherit;width:100%;min-height:1.875em;height:4.625em;box-sizing:border-box;font-family:\"Courier New\",Courier,monospace}:root:not(.x-is-dark) textarea.x-settings-section-textarea{background-color:#e3e0d1}.x-settings-input-table-container .lc{display:inline-block;margin-right:-6px}.x-settings-container code{font-family:'Courier New',Courier,monospace;background-color:#43464e;font-weight:700}:root:not(.x-is-dark) .x-settings-container code{background-color:#e3e0d1}.x-settings-light-text{font-weight:400;opacity:.75}.x-settings-input-table-container{display:inline-block;text-align:left}.x-settings-input-table{display:table}.x-settings-input-row{display:table-row}.x-settings-input-row.x-settings-input-header-row{font-size:.8em;line-height:1em;opacity:.75}.x-settings-input-cell{display:table-cell}.x-settings-input-cell+.x-settings-input-cell{padding-left:.25em}.x-settings-input-row:not(.x-settings-input-header-row)+.x-settings-input-row>.x-settings-input-cell{padding-top:.25em}.x-settings-input-cell.x-settings-input-cell-middle{vertical-align:middle}.x-settings-input-cell.x-settings-input-cell-fill{width:100%}.x-settings-input-cell.x-settings-input-cell-nowrap{white-space:nowrap}.x-settings-input-label{cursor:pointer;margin:0 0 0 1em}.x-settings-input-checkbox-prefix{vertical-align:middle;display:inline-block;padding-right:.5em}";
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
			for (const k in headers) {
				if (!Object.prototype.hasOwnProperty.call(headers, k)) { continue; }
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
		this._onScrollChangedCallback = () => this._onScrollChanged(false);
		this._onWheelCallback = () => this._onWheel();
		this._wheelDelay = 0.1 * 1000; // milliseconds
		this._wheelTimeout = null;
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
			this.containerNode.addEventListener("scroll", this._onScrollChangedCallback, false);
			document.addEventListener("wheel", this._onWheelCallback, false);
		} else {
			if (!this._isActive) { return; }
			this._isActive = false;
			this.containerNode.removeEventListener("scroll", this._onScrollChangedCallback, false);
			document.removeEventListener("wheel", this._onWheelCallback, false);
			this._clearWheelTimeout();
		}
	}

	updateCheck() {
		this._onScrollChanged(true);
	}

	_onScrollChanged(force) {
		const scrollYNew = getPageScrollY();
		const scrollYPre = this._scrollY;
		this._scrollY = scrollYNew;

		this._clearWheelTimeout();

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

	_onWheel() {
		this._clearWheelTimeout();
		this._wheelTimeout = setTimeout(() => this._onWheelTimeout(), this._wheelDelay);
	}

	_onWheelTimeout() {
		this._wheelTimeout = null;
		this._onScrollChanged(true);
	}

	_clearWheelTimeout() {
		if (this._wheelTimeout !== null) {
			clearTimeout(this._wheelTimeout);
			this._wheelTimeout = null;
		}
	}
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
const fetch = require("../fetch"); // jshint ignore:line
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
module.exports = "<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Gallery images</div>\r\n\t\t<div class=\"x-settings-section-description\">Enable infinite-scrolling for gallery thumbnails.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<div class=\"x-settings-input-table-container\">\r\n\t\t\t<div class=\"x-settings-input-table\">\r\n\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t<label class=\"x-settings-input-label\">\r\n\t\t\t\t\t\t<span class=\"x-settings-input-checkbox-prefix\">Enable by default</span><span class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"enabledByDefaultForGalleryImages\" /><span></span></label>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t<label class=\"x-settings-input-label\">\r\n\t\t\t\t\t\t<span class=\"x-settings-input-checkbox-prefix\">Allow</span><span class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"allowForGalleryImages\" /><span></span></label>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Gallery lists</div>\r\n\t\t<div class=\"x-settings-section-description\">Enable infinite-scrolling for gallery lists.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<div class=\"x-settings-input-table-container\">\r\n\t\t\t<div class=\"x-settings-input-table\">\r\n\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t<label class=\"x-settings-input-label\">\r\n\t\t\t\t\t\t<span class=\"x-settings-input-checkbox-prefix\">Enable by default</span><span class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"enabledByDefaultForGalleryLists\" /><span></span></label>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t<label class=\"x-settings-input-label\">\r\n\t\t\t\t\t\t<span class=\"x-settings-input-checkbox-prefix\">Allow</span><span class=\"lc\"><input class=\"x-settings-section-input\" type=\"checkbox\" data-x-settings-for=\"allowForGalleryLists\" /><span></span></label>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Delay</div>\r\n\t\t<div class=\"x-settings-section-description\">Seconds to wait before loading the next page.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<input class=\"x-settings-section-input\" type=\"number\" min=\"0\" spellcheck=\"false\" data-x-settings-for=\"delay\" />\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Load attempts</div>\r\n\t\t<div class=\"x-settings-section-description\">Maximum number of attempts allowed to load the next page.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<input class=\"x-settings-section-input\" type=\"number\" min=\"0\" step=\"1\" spellcheck=\"false\" data-x-settings-for=\"loadAttempts\" />\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Required page view percent</div>\r\n\t\t<div class=\"x-settings-section-description\">Percent of the current page that must be viewed before loading the next.</div>\r\n\t</div>\r\n\t<div class=\"x-settings-section-right\">\r\n\t\t<input class=\"x-settings-section-input\" type=\"number\" min=\"0\" max=\"100\" spellcheck=\"false\" data-x-settings-for=\"pageViewPercentRequired\" />\r\n\t</div>\r\n</div>";
},{}],16:[function(require,module,exports){
module.exports = ".x-infinite-scroll-container{clear:both;position:relative}.x-infinite-scroll-container[data-x-infinite-scroll-mode=gallery-list]{border:0;border-top:1px solid #000;width:100%}.x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list]{border:1px solid #000;min-width:710px;max-width:1210px;margin:0 auto}.x-infinite-scroll-header-container{position:absolute;top:0;right:0;bottom:0;pointer-events:none}.x-infinite-scroll-header{top:0;bottom:0;position:sticky;font-size:10pt;text-align:right;line-height:1.35em;z-index:202;pointer-events:auto}.x-infinite-scroll-header-content{display:inline-block;white-space:nowrap;line-height:1.5em;height:2.5em}.x-infinite-scroll-header-top-link{display:inline-block;text-decoration:none;padding:.5em;margin-right:.5em}.x-infinite-scroll-enabled-checkbox-label0,.x-infinite-scroll-page-link{white-space:nowrap;display:inline-block;padding:.5em}.x-infinite-scroll-page{position:relative}.x-infinite-scroll-page-header{top:0;bottom:0;position:sticky;font-size:10pt;text-align:left;line-height:1.35em;z-index:201}.x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list] .x-infinite-scroll-page:not(:last-child){border-bottom:1px solid #000}.x-infinite-scroll-page-link{text-decoration:none}.x-infinite-scroll-page,div#gdt{border:0;text-align:left;min-width:0;max-width:none;padding:0}.x-infinite-scroll-page img{border:1px solid #000;margin:0;padding:0}.x-infinite-scroll-page a{text-decoration:none}:root.x-is-dark .x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list],:root.x-is-dark .x-infinite-scroll-header-content,:root.x-is-dark .x-infinite-scroll-page-header{background-color:#4f535b}:root:not(.x-is-dark) .x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list],:root:not(.x-is-dark) .x-infinite-scroll-header-content,:root:not(.x-is-dark) .x-infinite-scroll-page-header{background-color:#edebdf}:root:not(.x-is-dark) .x-infinite-scroll-container,:root:not(.x-is-dark) .x-infinite-scroll-page img,:root:not(.x-is-dark) .x-infinite-scroll-page:not(:last-child){border-color:#5c0d12}@media screen and (max-width:1230px){.x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list]{max-width:970px}}@media screen and (max-width:990px){.x-infinite-scroll-container[data-x-infinite-scroll-mode=image-list]{max-width:730px}}.lc.x-checkbox-small{height:20px;line-height:20px;padding-left:26px;display:inline-block}.lc.x-checkbox-small>span{height:16px;width:16px}.lc.x-checkbox-small>span:after{left:5px;top:1.1px;width:3px;height:8px}div.eze_gallery_page{background-color:transparent;border:0;width:auto;min-width:0;max-width:none;margin:0;clear:none;padding:0;border-radius:0}a.eze_gallery_page_indicator{display:none}.eze_gallery_custom_table>.eze_gallery_custom_row>.eze_gallery_custom_cell:nth-child(1)>p:nth-child(1){display:none}.x-infinite-scroll-container .glthumb{z-index:203}";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BhZ2luYXRpb24uanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvc2V0dGluZ3MuY3NzIiwic3JjL2NvbmZpZy5qcyIsInNyYy9mZXRjaC5qcyIsInNyYy9nbS5qcyIsInNyYy9pbmZpbml0ZS1zY3JvbGwvY29uZmlnLmpzIiwic3JjL2luZmluaXRlLXNjcm9sbC9jb250YWluZXIuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvaW5maW5pdGUtc2Nyb2xsLWJhc2UuanMiLCJzcmMvaW5maW5pdGUtc2Nyb2xsL21haW4uanMiLCJzcmMvaW5maW5pdGUtc2Nyb2xsL3BhZ2UuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvc2V0dGluZ3MuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvc3R5bGUuY3NzIiwic3JjL3F1ZXJ5LXN0cmluZy5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy9zdHlsZS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hXQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExpbmsobGFiZWwsIHVybCwgb3JkZXIpIHtcclxuXHRjb25zdCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYlwiKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRhLmhyZWYgPSB1cmw7XHJcblx0YS50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG5cdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRkaXYuc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdH1cclxuXHRkaXYuYXBwZW5kQ2hpbGQoYSk7XHJcblx0bi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHRyZXR1cm4gZGl2O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YWRkTGlua1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG92ZXJyaWRlQXR0cmlidXRlTmFtZSA9IFwiZGF0YS14LW92ZXJyaWRlLXBhZ2UtdHlwZVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldE92ZXJyaWRlKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZSgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHRyZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChkb2MsIGxvY2F0aW9uKSB7XHJcblx0Y29uc3Qgb3ZlcnJpZGVUeXBlID0gZ2V0T3ZlcnJpZGUoKTtcclxuXHRpZiAob3ZlcnJpZGVUeXBlICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gb3ZlcnJpZGVUeXBlO1xyXG5cdH1cclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9ZmF2Y2F0XVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZmF2b3JpdGVzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiLmdtIGgxI2duXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5XCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX291dGVyXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZXR0aW5nc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjdG9ycmVudGluZm9cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInRvcnJlbnRJbmZvXCI7XHJcblx0fVxyXG5cclxuXHRsZXQgbiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keT4uZD5wXCIpO1xyXG5cdGlmIChcclxuXHRcdChuICE9PSBudWxsICYmIC9nYWxsZXJ5XFxzK2hhc1xccytiZWVuXFxzK3JlbW92ZWQvaS50ZXN0KG4udGV4dENvbnRlbnQpKSB8fFxyXG5cdFx0ZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZXplX2RnYWxsZXJ5X3RhYmxlXCIpICE9PSBudWxsKSB7IC8vIGV6ZSByZXN1cnJlY3Rpb25cclxuXHRcdHJldHVybiBcImRlbGV0ZWRHYWxsZXJ5XCI7XHJcblx0fVxyXG5cclxuXHRuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRpZiAobiAhPT0gbnVsbCAmJiBsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgcCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRuLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PT0gbG9jYXRpb24uaHJlZiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCAzKSAhPT0gXCIvdC9cIiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCA1KSAhPT0gXCIvaW1nL1wiKSB7XHJcblx0XHRcdHJldHVybiBcInBhbmRhXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBVbmtub3duXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQsXHJcblx0Z2V0T3ZlcnJpZGUsXHJcblx0c2V0T3ZlcnJpZGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuLi9xdWVyeS1zdHJpbmdcIik7XHJcblxyXG5jb25zdCByZVBhZ2VMaXN0ID0gLyhbMC05LF0rKVxccyotXFxzKihbMC05LF0rKVxccypvZlxccyooWzAtOSxdKykvaTtcclxuY29uc3QgcmVSZXN1bHRzID0gLyhbMC05LF0rKVxccypyZXN1bHRzPy9pO1xyXG5cclxuXHJcbmNsYXNzIFBhZ2VpbmF0aW9uSW5mbyB7XHJcblx0Y29uc3RydWN0b3IocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlLCB1cmxCYXNlLCBwYWdlRmllbGROYW1lKSB7XHJcblx0XHR0aGlzLnBhZ2VDdXJyZW50ID0gcGFnZUN1cnJlbnQ7XHJcblx0XHR0aGlzLnBhZ2VDb3VudCA9IHBhZ2VDb3VudDtcclxuXHRcdHRoaXMuaXRlbUNvdW50ID0gaXRlbUNvdW50O1xyXG5cdFx0dGhpcy5pdGVtc09uUGFnZSA9IGl0ZW1zT25QYWdlO1xyXG5cdFx0dGhpcy5pdGVtc1BlclBhZ2UgPSBpdGVtc1BlclBhZ2U7XHJcblx0XHR0aGlzLnVybEJhc2UgPSB1cmxCYXNlO1xyXG5cdFx0dGhpcy5wYWdlRmllbGROYW1lID0gcGFnZUZpZWxkTmFtZTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBhZ2VVcmwocGFnZUluZGV4KSB7XHJcblx0XHRpZiAodGhpcy51cmxCYXNlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudXJsQmFzZS5yZXBsYWNlKC9eKFteI1xcP10qKShcXD9bXiNdKik/KCNbXFx3XFxXXSopPyQvLCAobTAsIG0xLCBtMiwgbTMpID0+IHtcclxuXHRcdFx0bTIgPSAoXHJcblx0XHRcdFx0cGFnZUluZGV4ICE9PSAwID9cclxuXHRcdFx0XHQobTIgPyBgJHttMn0mJHt0aGlzLnBhZ2VGaWVsZE5hbWV9PSR7cGFnZUluZGV4fWAgOiBgPyR7dGhpcy5wYWdlRmllbGROYW1lfT0ke3BhZ2VJbmRleH1gKSA6XHJcblx0XHRcdFx0KG0yIHx8IFwiXCIpKTtcclxuXHRcdFx0cmV0dXJuIGAke20xfSR7bTJ9JHttMyB8fCBcIlwifWA7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwYXJzZU51bWJlcih2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0Y29uc3QgdiA9IHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKSwgMTApO1xyXG5cdHJldHVybiBOdW1iZXIuaXNOYU4odikgPyBkZWZhdWx0VmFsdWUgOiB2O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UGFnZXNGb3JJbWFnZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc24+ZGl2PnNwYW5cIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA8IDIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGFnZUN1cnJlbnQgPSBwYXJzZU51bWJlcihub2Rlc1swXS50ZXh0Q29udGVudCwgMSkgLSAxO1xyXG5cdGNvbnN0IHBhZ2VDb3VudCA9IHBhcnNlTnVtYmVyKG5vZGVzWzFdLnRleHRDb250ZW50LCAwKTtcclxuXHRyZXR1cm4gbmV3IFBhZ2VpbmF0aW9uSW5mbyhwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBwYWdlQ291bnQsIDEsIDEsIG51bGwsIG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVJdGVtc1BlclBhZ2UocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSkge1xyXG5cdHJldHVybiAocGFnZUN1cnJlbnQgKyAxIDwgcGFnZUNvdW50IHx8IHBhZ2VDdXJyZW50ID09PSAwKSA/XHJcblx0XHRpdGVtc09uUGFnZSA6XHJcblx0XHRNYXRoLnJvdW5kKChpdGVtQ291bnQgLSBpdGVtc09uUGFnZSkgLyBwYWdlQ3VycmVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEl0ZW1zRnJvbUZ1bGxJbmZvKGNvbnRlbnQsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpIHtcclxuXHRjb25zdCBtYXRjaCA9IHJlUGFnZUxpc3QuZXhlYyhjb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgc3RhcnQgPSBwYXJzZU51bWJlcihtYXRjaFsxXSwgMCk7XHJcblx0Y29uc3QgaXRlbXNPblBhZ2UgPSBwYXJzZU51bWJlcihtYXRjaFsyXSwgMCkgLSAoc3RhcnQgLSAxKTtcclxuXHRjb25zdCBpdGVtQ291bnQgPSBwYXJzZU51bWJlcihtYXRjaFszXSwgMCk7XHJcblx0Y29uc3QgaXRlbXNQZXJQYWdlID0gY2FsY3VsYXRlSXRlbXNQZXJQYWdlKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UpO1xyXG5cclxuXHRyZXR1cm4ge2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEl0ZW1zRm9yR2FsbGVyeUltYWdlcyhwYWdlTGlzdCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkge1xyXG5cdGNvbnN0IG5vZGUgPSBwYWdlTGlzdC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZ3BjXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCAmJiBub2RlLnBhcmVudE5vZGUgPT09IHBhZ2VMaXN0LnBhcmVudE5vZGUpID9cclxuXHRcdGdldEl0ZW1zRnJvbUZ1bGxJbmZvKG5vZGUudGV4dENvbnRlbnQsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpIDpcclxuXHRcdG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEl0ZW1zRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkge1xyXG5cdGxldCBpdGVtQ291bnQgPSBudWxsO1xyXG5cdGZvciAoY29uc3QgaXBOb2RlIG9mIGh0bWwucXVlcnlTZWxlY3RvckFsbChcInAuaXBcIikpIHtcclxuXHRcdGNvbnN0IGluZm8gPSBnZXRJdGVtc0Zyb21GdWxsSW5mbyhpcE5vZGUudGV4dENvbnRlbnQsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpO1xyXG5cdFx0aWYgKGluZm8gIT09IG51bGwpIHsgcmV0dXJuIGluZm87IH1cclxuXHJcblx0XHRjb25zdCBtYXRjaCA9IHJlUmVzdWx0cy5leGVjKGlwTm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0aXRlbUNvdW50ID0gcGFyc2VOdW1iZXIobWF0Y2hbMV0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChpdGVtQ291bnQgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0bGV0IGl0ZW1zT25QYWdlID0gMDtcclxuXHRsZXQgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuaXRnPmRpdlwiKTtcclxuXHRpZiAoKGl0ZW1zT25QYWdlID0gbm9kZXMubGVuZ3RoKSA9PT0gMCkge1xyXG5cdFx0bm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZS5pdGc+dGJvZHk+dHJcIik7XHJcblx0XHRpdGVtc09uUGFnZSA9IG5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChpdGVtc09uUGFnZSA+IDAgJiYgbm9kZXNbMF0ucXVlcnlTZWxlY3RvcihcInRoXCIpICE9PSBudWxsKSB7XHJcblx0XHRcdC0taXRlbXNPblBhZ2U7IC8vIEhlYWRlciByb3dcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGNhbGN1bGF0ZUl0ZW1zUGVyUGFnZShwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlKTtcclxuXHJcblx0cmV0dXJuIHtpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2V9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlc0ZvckdhbGxlcnlMaXN0KGh0bWwsIHBhZ2VMaXN0KSB7XHJcblx0Ly8gQ291bnRcclxuXHRjb25zdCBub2RlcyA9IHBhZ2VMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKTtcclxuXHRjb25zdCBwYWdlQ291bnQgPSAobm9kZXMubGVuZ3RoID4gMiA/IHBhcnNlTnVtYmVyKG5vZGVzW25vZGVzLmxlbmd0aCAtIDJdLnRleHRDb250ZW50LCAxKSA6IDApO1xyXG5cclxuXHQvLyBDdXJyZW50XHJcblx0Y29uc3Qgbm9kZSA9IHBhZ2VMaXN0LnF1ZXJ5U2VsZWN0b3IoXCJ0ZC5wdGRzXCIpO1xyXG5cdGNvbnN0IHBhZ2VDdXJyZW50ID0gKG5vZGUgIT09IG51bGwgPyBwYXJzZU51bWJlcihub2RlLnRleHRDb250ZW50LCAxKSAtIDEgOiAwKTtcclxuXHJcblx0Ly8gSXRlbXNcclxuXHRsZXQgaXRlbUNvdW50ID0gMDtcclxuXHRsZXQgaXRlbXNPblBhZ2UgPSAwO1xyXG5cdGxldCBpdGVtc1BlclBhZ2UgPSAwO1xyXG5cclxuXHRsZXQgdiA9IGdldEl0ZW1zRm9yR2FsbGVyeUltYWdlcyhwYWdlTGlzdCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCk7XHJcblx0bGV0IHBhZ2VGaWVsZE5hbWUgPSBudWxsO1xyXG5cdGxldCBpc0dhbGxlcnlMaXN0ID0gZmFsc2U7XHJcblx0aWYgKHYgIT09IG51bGwpIHtcclxuXHRcdHBhZ2VGaWVsZE5hbWUgPSBcInBcIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0diA9IGdldEl0ZW1zRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCk7XHJcblx0XHRpZiAodiAhPT0gbnVsbCkge1xyXG5cdFx0XHRwYWdlRmllbGROYW1lID0gXCJwYWdlXCI7XHJcblx0XHRcdGlzR2FsbGVyeUxpc3QgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAodiAhPT0gbnVsbCkge1xyXG5cdFx0KHtpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2V9ID0gdik7XHJcblx0fVxyXG5cclxuXHQvLyBVcmwgZm9ybWF0XHJcblx0Y29uc3QgbGluayA9IG5vZGUucXVlcnlTZWxlY3RvcihcImFbaHJlZl1cIik7XHJcblx0bGV0IHVybEJhc2UgPSBudWxsO1xyXG5cdGlmIChsaW5rICE9PSBudWxsICYmIHBhZ2VGaWVsZE5hbWUgIT09IG51bGwpIHtcclxuXHRcdHVybEJhc2UgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblx0XHR1cmxCYXNlID0gcXVlcnlTdHJpbmcucmVtb3ZlUXVlcnlQYXJhbWV0ZXIodXJsQmFzZSwgcGFnZUZpZWxkTmFtZSk7XHJcblx0XHRpZiAoaXNHYWxsZXJ5TGlzdCkge1xyXG5cdFx0XHR1cmxCYXNlID0gcXVlcnlTdHJpbmcucmVtb3ZlUXVlcnlQYXJhbWV0ZXIodXJsQmFzZSwgXCJmcm9tXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ldyBQYWdlaW5hdGlvbkluZm8ocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlLCB1cmxCYXNlLCBwYWdlRmllbGROYW1lKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEluZm8oaHRtbCkge1xyXG5cdGlmICghaHRtbCkgeyBodG1sID0gZG9jdW1lbnQ7IH1cclxuXHJcblx0Y29uc3QgcGFnZUxpc3QgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIucHR0XCIpO1xyXG5cdHJldHVybiBwYWdlTGlzdCAhPT0gbnVsbCA/IGdldFBhZ2VzRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUxpc3QpIDogZ2V0UGFnZXNGb3JJbWFnZShodG1sKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlVcmwobm9kZSkge1xyXG5cdGNvbnN0IGxpbmtTZWxlY3RvciA9IFwiYVtocmVmXVwiO1xyXG5cdGNvbnN0IG5hbWVOb2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLmdsbmFtZVwiKTtcclxuXHRpZiAobmFtZU5vZGUgIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IGxpbmsgPSBuYW1lTm9kZS5xdWVyeVNlbGVjdG9yKGxpbmtTZWxlY3Rvcik7XHJcblx0XHRpZiAobGluayAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG5hbWVOb2RlLnBhcmVudE5vZGUgIT09IG51bGwgJiYgbmFtZU5vZGUucGFyZW50Tm9kZS5tYXRjaGVzKGxpbmtTZWxlY3RvcikpIHtcclxuXHRcdFx0cmV0dXJuIG5hbWVOb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5VXJscyhodG1sKSB7XHJcblx0aWYgKCFodG1sKSB7IGh0bWwgPSBkb2N1bWVudDsgfVxyXG5cclxuXHRsZXQgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuaXRnPmRpdlwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcInRhYmxlLml0Zz50Ym9keT50clwiKTtcclxuXHRcdGlmIChub2Rlcy5sZW5ndGggPiAwICYmIG5vZGVzWzBdLnF1ZXJ5U2VsZWN0b3IoXCJ0aFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRub2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVzLCAxKTsgLy8gT21pdCBoZWFkZXIgcm93XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCB1cmwgPSBnZXRHYWxsZXJ5VXJsKG5vZGUpO1xyXG5cdFx0aWYgKHVybCAhPT0gbnVsbCkgeyByZXN1bHRzLnB1c2godXJsKTsgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJbWFnZVVybHMoaHRtbCkge1xyXG5cdGlmICghaHRtbCkgeyBodG1sID0gZG9jdW1lbnQ7IH1cclxuXHJcblx0bGV0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdkdGxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0bm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2R0bVwiKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBsaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiYVtocmVmXVwiKTtcclxuXHRcdGlmIChsaW5rICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3VsdHMucHVzaChsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRJbmZvLFxyXG5cdGdldEdhbGxlcnlVcmxzLFxyXG5cdGdldEdhbGxlcnlJbWFnZVVybHNcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcbmNvbnN0IHVybEZyYWdtZW50ID0gcmVxdWlyZShcIi4uL3VybC1mcmFnbWVudFwiKTtcclxuXHJcblxyXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lckNsYXNzID0gXCJ4LXNldHRpbmdzLWNvbnRhaW5lclwiO1xyXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzID0gXCJ4LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW5cIjtcclxuY29uc3QgZGVmYXVsdFNldHRpbmdzSGlkZGVuQ2xhc3MgPSBcIngtc2V0dGluZ3MtaGlkZGVuXCI7XHJcblxyXG5sZXQgc2V0dGluZ3NDb250YWluZXJPdXRlciA9IG51bGw7XHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTGluaygpIHtcclxuXHRjb25zdCBpZCA9IFwieC1uYXYtc2V0dGluZ3MtbGlua1wiO1xyXG5cclxuXHRsZXQgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRpZiAobiAhPT0gbnVsbCkgeyByZXR1cm4gbjsgfVxyXG5cclxuXHRjb25zdCBuYXZCYXIgPSByZXF1aXJlKFwiLi9uYXZpZ2F0aW9uLWJhclwiKTtcclxuXHRuID0gbmF2QmFyLmFkZExpbmsoXCJ4XCIsIGAvdWNvbmZpZy5waHAke3VybEZyYWdtZW50LmNyZWF0ZShcInNldHRpbmdzXCIpfWAsIDEpO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdG4uaWQgPSBpZDtcclxuXHRyZXR1cm4gbjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRzZXR0aW5nc0NvbnRhaW5lck91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRlci5zdHVmZmJveFwiKTtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXJPdXRlciA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0c2V0dGluZ3NDb250YWluZXIgPSBzZXR0aW5nc0NvbnRhaW5lck91dGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke3NldHRpbmdzQ29udGFpbmVyQ2xhc3N9YCk7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5jbGFzc05hbWUgPSBgJHtzZXR0aW5nc0NvbnRhaW5lckNsYXNzfSAke3NldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3N9YDtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyT3V0ZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaWQgPSBcIngtc2V0dGluZ3NcIjtcclxuXHRpZiAoIXN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7XHJcblx0XHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS9zZXR0aW5ncy5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxuXHJcblx0dXJsRnJhZ21lbnQuYWRkUm91dGUoL15cXC9zZXR0aW5ncyhcXC9bXFx3XFxXXSopPyQvLCBvblNldHRpbmdzUGFnZUNoYW5nZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblNldHRpbmdzUGFnZUNoYW5nZWQobWF0Y2gpIHtcclxuXHRzZXRTZXR0aW5nc1Zpc2libGUobWF0Y2ggIT09IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTZXR0aW5nc1Zpc2libGUodmlzaWJsZSkge1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lck91dGVyID09PSBudWxsIHx8IHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MpICE9PSB2aXNpYmxlKSB7XHJcblx0XHQvLyBObyBjaGFuZ2VcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcywgIXZpc2libGUpO1xyXG5cclxuXHRmb3IgKGNvbnN0IGNoaWxkIG9mIHNldHRpbmdzQ29udGFpbmVyT3V0ZXIuY2hpbGRyZW4pIHtcclxuXHRcdGlmIChjaGlsZCA9PT0gc2V0dGluZ3NDb250YWluZXIpIHsgY29udGludWU7IH1cclxuXHRcdGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoZGVmYXVsdFNldHRpbmdzSGlkZGVuQ2xhc3MsIHZpc2libGUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2VjdGlvbihoZWFkZXIsIGlkLCBvcmRlcikge1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBmdWxsSWQgPSBgeC1zZXR0aW5ncy1zZWN0aW9uLSR7aWR9YDtcclxuXHJcblx0bGV0IHNlY3Rpb24gPSBzZXR0aW5nc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHtmdWxsSWR9YCk7XHJcblx0aWYgKHNlY3Rpb24gPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2VjdGlvbi5pZCA9IGZ1bGxJZDtcclxuXHRcdHNlY3Rpb24uY2xhc3NOYW1lID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24tY29udGFpbmVyXCI7XHJcblx0XHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRzZWN0aW9uLnN0eWxlLm9yZGVyID0gYCR7b3JkZXJ9YDtcclxuXHRcdH1cclxuXHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuXHR9XHJcblxyXG5cdGxldCBjbHMgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJcIjtcclxuXHRsZXQgc2VjdGlvbkhlYWRlciA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihgLiR7Y2xzfWApO1xyXG5cdGlmIChzZWN0aW9uSGVhZGVyID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG5cdFx0c2VjdGlvbkhlYWRlci5jbGFzc05hbWUgPSBjbHM7XHJcblx0XHRzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyO1xyXG5cdFx0Y29uc3QgcmVsYXRpdmUgPSBzZWN0aW9uLmZpcnN0Q2hpbGQ7XHJcblx0XHRpZiAocmVsYXRpdmUgIT09IG51bGwpIHtcclxuXHRcdFx0c2VjdGlvbi5pbnNlcnRCZWZvcmUocmVsYXRpdmUsIHNlY3Rpb25IZWFkZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNscyA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRlbnRcIjtcclxuXHRsZXQgc2VjdGlvbkNvbnRlbnQgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nsc31gKTtcclxuXHRpZiAoc2VjdGlvbkNvbnRlbnQgPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNlY3Rpb25Db250ZW50LmNsYXNzTmFtZSA9IGNscztcclxuXHRcdHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbnRlbnQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlY3Rpb25Db250ZW50O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YWRkTGluayxcclxuXHRpbml0aWFsaXplLFxyXG5cdGFkZFNlY3Rpb25cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpc0RhcmsoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCB8fFxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIngtZm9yY2UtZGFya1wiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvY3VtZW50RGFya0ZsYWcoKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnJvd0ljb25VcmwoKSB7XHJcblx0cmV0dXJuIChpc0RhcmsoKSA/IFwiaHR0cHM6Ly9leGhlbnRhaS5vcmcvaW1nL21yLmdpZlwiIDogXCJodHRwczovL2VoZ3Qub3JnL2cvbXIuZ2lmXCIpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNEYXJrLFxyXG5cdHNldERvY3VtZW50RGFya0ZsYWcsXHJcblx0Z2V0QXJyb3dJY29uVXJsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1zZXR0aW5ncy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tdG9wOi0xZW19Lngtc2V0dGluZ3MtY29udGFpbmVyLngtc2V0dGluZ3MtY29udGFpbmVyLWhpZGRlbntkaXNwbGF5Om5vbmV9Lngtc2V0dGluZ3MtaGlkZGVue2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9Lngtc2V0dGluZ3Mtb3B0aW9uIHNlbGVjdHttYXJnaW4tcmlnaHQ6LjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCU7bWFyZ2luLXRvcDoxZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1jb250ZW50e21hcmdpbjo4cHggYXV0byAxMHB4IDEwcHg7Y2xlYXI6Ym90aH0ueC1zZXR0aW5ncy1zZWN0aW9uLWhlYWRlcntmb250LXNpemU6MS4yNWVtO2xpbmUtaGVpZ2h0OjEuNWVtO21hcmdpbjouMjVlbSAwfS54LXNldHRpbmdzLXNlY3Rpb257ZGlzcGxheTpmbGV4O2ZsZXgtZmxvdzpyb3cgd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpjZW50ZXI7YWxpZ24tY29udGVudDpmbGV4LXN0YXJ0O2ZsZXgtd3JhcDpub3dyYXA7d2lkdGg6MTAwJTtwYWRkaW5nOi41ZW0gMH0ueC1zZXR0aW5ncy1zZWN0aW9uKy54LXNldHRpbmdzLXNlY3Rpb257Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuMjUpfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1zZXR0aW5ncy1zZWN0aW9uKy54LXNldHRpbmdzLXNlY3Rpb257Ym9yZGVyLXRvcC1jb2xvcjpyZ2JhKDkyLDEzLDE4LC4yNSl9Lngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0e2ZsZXg6MSAxIGF1dG87cGFkZGluZy1yaWdodDouNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tcmlnaHR7ZmxleDowIDAgYXV0bzttaW4td2lkdGg6MzAlO3RleHQtYWxpZ246cmlnaHR9Lngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZXtmb250LXdlaWdodDo3MDA7bGluZS1oZWlnaHQ6MS41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbntsaW5lLWhlaWdodDoxLjM1ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbisueC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9ue21hcmdpbi10b3A6LjI1ZW19aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXSxpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjA7cGFkZGluZzouMjVlbSAuNWVtO2xpbmUtaGVpZ2h0OjEuMzc1ZW07YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO2JveC1zaXppbmc6Ym9yZGVyLWJveH06cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXSw6cm9vdDpub3QoLngtaXMtZGFyaykgaW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde3dpZHRoOjIwZW19aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXXt3aWR0aDo1ZW07LW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZH1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7bWFyZ2luOjB9dGV4dGFyZWEueC1zZXR0aW5ncy1zZWN0aW9uLXRleHRhcmVhe2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MDttYXJnaW46MDtwYWRkaW5nOi4yNWVtIC41ZW07bGluZS1oZWlnaHQ6MS4zNzVlbTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7cmVzaXplOnZlcnRpY2FsO2ZvbnQtc2l6ZTppbmhlcml0O3dpZHRoOjEwMCU7bWluLWhlaWdodDoxLjg3NWVtO2hlaWdodDo0LjYyNWVtO2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LWZhbWlseTpcXFwiQ291cmllciBOZXdcXFwiLENvdXJpZXIsbW9ub3NwYWNlfTpyb290Om5vdCgueC1pcy1kYXJrKSB0ZXh0YXJlYS54LXNldHRpbmdzLXNlY3Rpb24tdGV4dGFyZWF7YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfS54LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lciAubGN7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0Oi02cHh9Lngtc2V0dGluZ3MtY29udGFpbmVyIGNvZGV7Zm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JyxDb3VyaWVyLG1vbm9zcGFjZTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7Zm9udC13ZWlnaHQ6NzAwfTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1zZXR0aW5ncy1jb250YWluZXIgY29kZXtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDF9Lngtc2V0dGluZ3MtbGlnaHQtdGV4dHtmb250LXdlaWdodDo0MDA7b3BhY2l0eTouNzV9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246bGVmdH0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZXtkaXNwbGF5OnRhYmxlfS54LXNldHRpbmdzLWlucHV0LXJvd3tkaXNwbGF5OnRhYmxlLXJvd30ueC1zZXR0aW5ncy1pbnB1dC1yb3cueC1zZXR0aW5ncy1pbnB1dC1oZWFkZXItcm93e2ZvbnQtc2l6ZTouOGVtO2xpbmUtaGVpZ2h0OjFlbTtvcGFjaXR5Oi43NX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxse2Rpc3BsYXk6dGFibGUtY2VsbH0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsKy54LXNldHRpbmdzLWlucHV0LWNlbGx7cGFkZGluZy1sZWZ0Oi4yNWVtfS54LXNldHRpbmdzLWlucHV0LXJvdzpub3QoLngtc2V0dGluZ3MtaW5wdXQtaGVhZGVyLXJvdykrLngtc2V0dGluZ3MtaW5wdXQtcm93Pi54LXNldHRpbmdzLWlucHV0LWNlbGx7cGFkZGluZy10b3A6LjI1ZW19Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtbWlkZGxle3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsLngtc2V0dGluZ3MtaW5wdXQtY2VsbC1maWxse3dpZHRoOjEwMCV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtbm93cmFwe3doaXRlLXNwYWNlOm5vd3JhcH0ueC1zZXR0aW5ncy1pbnB1dC1sYWJlbHtjdXJzb3I6cG9pbnRlcjttYXJnaW46MCAwIDAgMWVtfS54LXNldHRpbmdzLWlucHV0LWNoZWNrYm94LXByZWZpeHt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZy1yaWdodDouNWVtfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZ20gPSByZXF1aXJlKFwiLi9nbVwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KSB7XHJcblx0bGV0IGNvbmZpZyA9IG51bGw7XHJcblx0bGV0IGNvbmZpZ0dldFByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gbG9hZENvbmZpZygpIHtcclxuXHRcdGNvbnN0IGNvbmZpZ1N0cmluZyA9IGF3YWl0IGdtLmdldFZhbHVlKGNvbmZpZ0tleSwgbnVsbCk7XHJcblx0XHRpZiAodHlwZW9mKGNvbmZpZ1N0cmluZykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCBjID0gSlNPTi5wYXJzZShjb25maWdTdHJpbmcpO1xyXG5cdFx0XHRcdGlmIChjICE9PSBudWxsICYmIHR5cGVvZihjKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShjKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ0RlZmF1bHQsIGMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZSkge31cclxuXHRcdH1cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWdEZWZhdWx0KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdGlmIChjb25maWcgIT09IG51bGwpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb25maWcpOyB9XHJcblxyXG5cdFx0aWYgKGNvbmZpZ0dldFByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0Y29uZmlnR2V0UHJvbWlzZSA9IGxvYWRDb25maWcoKS50aGVuKCh2KSA9PiBjb25maWcgPSB2KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gY29uZmlnR2V0UHJvbWlzZTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIHNhdmUoKSB7XHJcblx0XHRpZiAoY29uZmlnICE9PSBudWxsKSB7XHJcblx0XHRcdGF3YWl0IGdtLnNldFZhbHVlKGNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCBcIlwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBiaW5kSW5wdXQobm9kZSwgc2V0dGluZ05hbWUsIG9wdGlvbnMsIHZhbHVlTmFtZSkge1xyXG5cdFx0Y29uc3QgYyA9IGF3YWl0IGdldCgpO1xyXG5cclxuXHRcdGlmICh0eXBlb2YodmFsdWVOYW1lKSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG5cdFx0XHR2YWx1ZU5hbWUgPSBnZXREZWZhdWx0VmFsdWVOYW1lKG5vZGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHVwZGF0ZUlucHV0ID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB7dmFsdWUsIHZhbGlkfSA9IGNvbnZlcnRUb1R5cGUoY1tzZXR0aW5nTmFtZV0sIG9wdGlvbnMsIHRydWUpO1xyXG5cdFx0XHRpZiAodmFsaWQpIHsgbm9kZVt2YWx1ZU5hbWVdID0gdmFsdWU7IH1cclxuXHRcdH07XHJcblxyXG5cdFx0dXBkYXRlSW5wdXQoKTtcclxuXHJcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB7dmFsdWUsIHZhbGlkfSA9IGNvbnZlcnRUb1R5cGUobm9kZVt2YWx1ZU5hbWVdLCBvcHRpb25zLCBmYWxzZSk7XHJcblx0XHRcdGlmICh2YWxpZCkge1xyXG5cdFx0XHRcdGNbc2V0dGluZ05hbWVdID0gdmFsdWU7XHJcblx0XHRcdFx0c2F2ZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR1cGRhdGVJbnB1dCgpO1xyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnZXQsXHJcblx0XHRzYXZlLFxyXG5cdFx0YmluZElucHV0XHJcblx0fTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRUeXBlQ29udmVydE9wdGlvbnMgPSB7fTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVOYW1lKG5vZGUpIHtcclxuXHRzd2l0Y2ggKG5vZGUudGFnTmFtZSkge1xyXG5cdFx0Y2FzZSBcIklOUFVUXCI6XHJcblx0XHRcdGlmIChub2RlLnR5cGUgPT09IFwiY2hlY2tib3hcIikgeyByZXR1cm4gXCJjaGVja2VkXCI7IH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gXCJ2YWx1ZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9UeXBlKHZhbHVlLCBvcHRpb25zLCB0b0lucHV0KSB7XHJcblx0aWYgKHR5cGVvZihvcHRpb25zKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0cmV0dXJuIGNvbnZlcnRUb1R5cGVOb3JtYWxpemVkKHZhbHVlLCBvcHRpb25zLCBkZWZhdWx0VHlwZUNvbnZlcnRPcHRpb25zLCB0b0lucHV0KTtcclxuXHR9IGlmIChvcHRpb25zICE9PSBudWxsICYmIHR5cGVvZihvcHRpb25zKSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Yob3B0aW9ucy50eXBlKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0cmV0dXJuIGNvbnZlcnRUb1R5cGVOb3JtYWxpemVkKHZhbHVlLCBvcHRpb25zLnR5cGUsIG9wdGlvbnMsIHRvSW5wdXQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4geyB2YWx1ZSwgdmFsaWQ6IHRydWUgfTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb1R5cGVOb3JtYWxpemVkKHZhbHVlLCB0eXBlTmFtZSwgb3B0aW9ucywgdG9JbnB1dCkge1xyXG5cdGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG5cdC8vIENvbnZlcnRcclxuXHRzd2l0Y2ggKHR5cGVOYW1lKSB7XHJcblx0XHRjYXNlIFwiYm9vbGVhblwiOlxyXG5cdFx0XHR2YWx1ZSA9ICEhdmFsdWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImludGVnZXJcIjpcclxuXHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0dmFsdWUgPSAodHlwZU5hbWUgPT09IFwibnVtYmVyXCIgPyBwYXJzZUZsb2F0KGAke3ZhbHVlfWApIDogcGFyc2VJbnQoYCR7dmFsdWV9YCwgMTApKTtcclxuXHRcdFx0aWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XHJcblx0XHRcdFx0dmFsdWUgPSAwO1xyXG5cdFx0XHRcdHZhbGlkID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRcdHZhbHVlID0gYCR7dmFsdWV9YDtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHQvLyBUcmFuc2Zvcm1cclxuXHRpZiAoIXRvSW5wdXQgJiYgdHlwZW9mKG9wdGlvbnMuaW5wdXRUb1ZhbHVlKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHR2YWx1ZSA9IG9wdGlvbnMuaW5wdXRUb1ZhbHVlKHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8vIExpbWl0c1xyXG5cdHN3aXRjaCAodHlwZU5hbWUpIHtcclxuXHRcdGNhc2UgXCJpbnRlZ2VyXCI6XHJcblx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5taW4pID09PSBcIm51bWJlclwiICYmIHZhbHVlIDwgb3B0aW9ucy5taW4pIHsgdmFsdWUgPSBvcHRpb25zLm1pbjsgfVxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWF4KSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA+IG9wdGlvbnMubWF4KSB7IHZhbHVlID0gb3B0aW9ucy5tYXg7IH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic3RyaW5nXCI6XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5tYXhMZW5ndGgpID09PSBcIm51bWJlclwiICYmIHZhbHVlLmxlbmd0aCA+IG9wdGlvbnMubWF4TGVuZ3RoKSB7XHJcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5zdWJzdHIoMCwgb3B0aW9ucy5tYXhMZW5ndGgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Ly8gVHJhbnNmb3JtXHJcblx0aWYgKHRvSW5wdXQgJiYgdHlwZW9mKG9wdGlvbnMudmFsdWVUb0lucHV0KSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHR2YWx1ZSA9IG9wdGlvbnMudmFsdWVUb0lucHV0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7IHZhbHVlLCB2YWxpZCB9O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y3JlYXRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZ20gPSByZXF1aXJlKFwiLi9nbVwiKTtcclxuXHJcblxyXG5jbGFzcyBGZXRjaEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHJlc3BvbnNlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiRmV0Y2hFcnJvclwiO1xyXG5cdFx0dGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVzcG9uc2Uge1xyXG5cdGNvbnN0cnVjdG9yKHJlYWR5U3RhdGUsIHJlc3BvbnNlSGVhZGVycywgcmVzcG9uc2VUZXh0LCBzdGF0dXMsIHN0YXR1c1RleHQpIHtcclxuXHRcdHRoaXMucmVhZHlTdGF0ZSA9IHJlYWR5U3RhdGU7XHJcblx0XHR0aGlzLnJlc3BvbnNlSGVhZGVycyA9IHJlc3BvbnNlSGVhZGVycztcclxuXHRcdHRoaXMucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0O1xyXG5cdFx0dGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcblx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgUHJvZ3Jlc3NFdmVudCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoQ29tcHV0YWJsZSwgbG9hZGVkLCB0b3RhbCkge1xyXG5cdFx0dGhpcy5sZW5ndGhDb21wdXRhYmxlID0gbGVuZ3RoQ29tcHV0YWJsZTtcclxuXHRcdHRoaXMubG9hZGVkID0gbG9hZGVkO1xyXG5cdFx0dGhpcy50b3RhbCA9IHRvdGFsO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFJlc3BvbnNlSGVhZGVyTWFwKGFsbEhlYWRlcnMpIHtcclxuXHRjb25zdCByZXNwb25zZUhlYWRlcnMgPSB7fTtcclxuXHJcblx0Y29uc3QgcmUgPSAvXFxzKiguKilcXHMqOlxccyooLiopXFxzKi87XHJcblx0Zm9yIChjb25zdCBsaW5lIG9mIGFsbEhlYWRlcnMucmVwbGFjZSgvXFxyXFxuXFxzKiQvLCBcIlwiKS5zcGxpdChcIlxcclxcblwiKSkge1xyXG5cdFx0Y29uc3QgbSA9IHJlLmV4ZWMobGluZSk7XHJcblx0XHRpZiAobSAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNbbVsxXS50b0xvd2VyQ2FzZSgpXSA9IG1bMl07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzcG9uc2VIZWFkZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSB7XHJcblx0cmV0dXJuIG5ldyBSZXNwb25zZShcclxuXHRcdHhoci5yZWFkeVN0YXRlLFxyXG5cdFx0Z2V0UmVzcG9uc2VIZWFkZXJNYXAoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSxcclxuXHRcdHhoci5yZXNwb25zZVRleHQsXHJcblx0XHR4aHIuc3RhdHVzLFxyXG5cdFx0eGhyLnN0YXR1c1RleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdC8vY29uc3QgYmluYXJ5ID0gb3B0aW9ucy5iaW5hcnk7XHJcblx0Y29uc3QgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcclxuXHRjb25zdCB0aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDA7XHJcblx0Y29uc3Qgb25wcm9ncmVzcyA9IG9wdGlvbnMub25wcm9ncmVzcztcclxuXHRjb25zdCBvdmVycmlkZU1pbWVUeXBlID0gb3B0aW9ucy5vdmVycmlkZU1pbWVUeXBlO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0Y29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0eGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xyXG5cdFx0aWYgKHR5cGVvZihvdmVycmlkZU1pbWVUeXBlKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZShvdmVycmlkZU1pbWVUeXBlKTtcclxuXHRcdH1cclxuXHRcdGlmIChoZWFkZXJzICE9PSBudWxsICYmIHR5cGVvZihoZWFkZXJzKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRmb3IgKGNvbnN0IGsgaW4gaGVhZGVycykge1xyXG5cdFx0XHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIGspKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoaywgaGVhZGVyc1trXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gcmVzb2x2ZShjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7eGhyLnN0YXR1c1RleHR9ICgke3hoci5zdGF0dXN9KWAsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIiwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInRpbWVvdXRcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiVGltZW91dCByZWFjaGVkXCIsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob25wcm9ncmVzcykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChlKSA9PiBvbnByb2dyZXNzKG5ldyBQcm9ncmVzc0V2ZW50KGUubGVuZ3RoQ29tcHV0YWJsZSwgZS5sb2FkZWQsIGUudG90YWwpKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xyXG5cdFx0eGhyLnNlbmQoZGF0YSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0R21SZXNwb25zZShyZXNwb25zZSkge1xyXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoXHJcblx0XHRyZXNwb25zZS5yZWFkeVN0YXRlLFxyXG5cdFx0Z2V0UmVzcG9uc2VIZWFkZXJNYXAocmVzcG9uc2UucmVzcG9uc2VIZWFkZXJzKSxcclxuXHRcdHJlc3BvbnNlLnJlc3BvbnNlVGV4dCxcclxuXHRcdHJlc3BvbnNlLnN0YXR1cyxcclxuXHRcdHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykge1xyXG5cdGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0Y29uc3QgYmluYXJ5ID0gb3B0aW9ucy5iaW5hcnk7XHJcblx0Y29uc3QgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcclxuXHRjb25zdCB0aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDA7XHJcblx0Y29uc3Qgb25wcm9ncmVzcyA9IG9wdGlvbnMub25wcm9ncmVzcztcclxuXHRjb25zdCBvdmVycmlkZU1pbWVUeXBlID0gb3B0aW9ucy5vdmVycmlkZU1pbWVUeXBlO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0Y29uc3QgZGV0YWlscyA9IHtcclxuXHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJzLFxyXG5cdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBvdmVycmlkZU1pbWVUeXBlLFxyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRiaW5hcnk6IGJpbmFyeSxcclxuXHRcdFx0c3luY2hyb25vdXM6IGZhbHNlLFxyXG5cdFx0XHR0aW1lb3V0OiB0aW1lb3V0XHJcblx0XHR9O1xyXG5cclxuXHRcdGRldGFpbHMub25sb2FkID0gKGUpID0+IHJlc29sdmUoY29udmVydEdtUmVzcG9uc2UoZSkpO1xyXG5cdFx0ZGV0YWlscy5vbmVycm9yID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihgUmVxdWVzdCBlcnJvcjogJHtlLnN0YXR1c1RleHR9ICgke2Uuc3RhdHVzfSlgLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cdFx0ZGV0YWlscy5vbmFib3J0ID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cdFx0ZGV0YWlscy5vbnRpbWVvdXQgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiVGltZW91dCByZWFjaGVkXCIsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZihvbnByb2dyZXNzKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdGRldGFpbHMub25wcm9ncmVzcyA9IChlKSA9PiBvbnByb2dyZXNzKG5ldyBQcm9ncmVzc0V2ZW50KGUubGVuZ3RoQ29tcHV0YWJsZSwgZS5sb2FkZWQsIGUudG90YWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHRnbS54bWxIdHRwUmVxdWVzdChkZXRhaWxzKTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGlzR21TdXBwb3J0ZWQodXNlR20pIHtcclxuXHRyZXR1cm4gKHVzZUdtICYmIHR5cGVvZihnbS54bWxIdHRwUmVxdWVzdCkgPT09IFwiZnVuY3Rpb25cIikgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIkdFVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJHRVRcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0cmVxdWVzdDogcmVxdWVzdCxcclxuXHRnZXQ6IGdldCxcclxuXHRwb3N0OiBwb3N0LFxyXG5cdGdtOiB7XHJcblx0XHRyZXF1ZXN0OiByZXF1ZXN0R20sXHJcblx0XHRnZXQ6IGdldEdtLFxyXG5cdFx0cG9zdDogcG9zdEdtLFxyXG5cdH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiB0b1Byb21pc2UoZm4sIHNlbGYpIHtcclxuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmVzb2x2ZShmbi5hcHBseShzZWxmLCBhcmdzKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRyZWplY3QoZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IGdtID0gKChvYmplY3RzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHYgPSBHTTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblx0XHRpZiAodiAhPT0gbnVsbCAmJiB0eXBlb2YodikgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0cmV0dXJuIHY7XHJcblx0XHR9XHJcblx0fVxyXG5cdGNhdGNoIChlKSB7IH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0aWYgKG9iai5HTSAhPT0gbnVsbCAmJiB0eXBlb2Yob2JqLkdNKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHJldHVybiBvYmouR007XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHRjb25zdCBtYXBwaW5nID0gW1xyXG5cdFx0WyBcImdldFZhbHVlXCIsIFwiR01fZ2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcInNldFZhbHVlXCIsIFwiR01fc2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcImRlbGV0ZVZhbHVlXCIsIFwiR01fZGVsZXRlVmFsdWVcIiBdLFxyXG5cdFx0WyBcInhtbEh0dHBSZXF1ZXN0XCIsIFwiR01feG1saHR0cFJlcXVlc3RcIiBdXHJcblx0XTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwcGluZykge1xyXG5cdFx0bGV0IHByb21pc2UgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRjb25zdCBmbiA9IG9ialt2YWx1ZV07XHJcblx0XHRcdGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRwcm9taXNlID0gdG9Qcm9taXNlKGZuLCBvYmopO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgTm90IHN1cHBvcnRlZCAoJHtrZXl9KWApKSk7XHJcblx0XHR9XHJcblx0XHRyZXN1bHRba2V5XSA9IHByb21pc2U7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn0pLmNhbGwodGhpcywgW3RoaXMsIHdpbmRvd10pOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ0tleSA9IFwieC1pbmZpbml0ZS1zY3JvbGwtY29uZmlnXCI7XHJcbmNvbnN0IGNvbmZpZ0RlZmF1bHQgPSB7XHJcblx0ZGVsYXk6IDEsIC8vIGZsb2F0IFswLWluZl07IHNlY29uZHMgYmVmb3JlIGxvYWRpbmcgYSBuZXcgcGFnZVxyXG5cdGxvYWRBdHRlbXB0czogMSwgLy8gaW50ZWdlciBbMC1pbmZdOyBudW1iZXIgb2YgYXR0ZW1wdHMgZm9yIGxvYWRpbmcgbmV3IHBhZ2VzXHJcblx0cGFnZVZpZXdQZXJjZW50UmVxdWlyZWQ6IDAuNSwgLy8gZmxvYXQgWzAtMV07IDUwJSBvZiBwYWdlIG11c3QgYmUgdmlld2VkIGJlZm9yZSBsb2FkaW5nIHRoZSBuZXh0XHJcblx0YWxsb3dGb3JHYWxsZXJ5SW1hZ2VzOiB0cnVlLCAvLyBib29sZWFuXHJcblx0YWxsb3dGb3JHYWxsZXJ5TGlzdHM6IHRydWUsIC8vIGJvb2xlYW5cclxuXHRlbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUltYWdlczogdHJ1ZSwgLy8gYm9vbGVhblxyXG5cdGVuYWJsZWRCeURlZmF1bHRGb3JHYWxsZXJ5TGlzdHM6IHRydWUgLy8gYm9vbGVhblxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpLmNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyXFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1oZWFkZXJcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci1jb250ZW50XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLXRvcC1saW5rXFxcIiBocmVmPVxcXCIjXFxcIj5Ub3A8L2E+PGxhYmVsIGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1lbmFibGVkLWNoZWNrYm94LWxhYmVsMFxcXCI+PGxhYmVsIGNsYXNzPVxcXCJsYyB4LWluZmluaXRlLXNjcm9sbC1lbmFibGVkLWNoZWNrYm94LWxhYmVsMSB4LWNoZWNrYm94LXNtYWxsXFxcIj48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1lbmFibGVkLWNoZWNrYm94XFxcIj48c3Bhbj48L3NwYW4+IEluZmluaXRlIHNjcm9sbDwvbGFiZWw+PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIEluZmluaXRlU2Nyb2xsQmFzZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkID0gMC41OyAvLyA1MCUgb2YgcGFnZSBtdXN0IGJlIHZpZXdlZCBiZWZvcmUgbG9hZGluZyB0aGUgbmV4dFxyXG5cdFx0dGhpcy5wYWdlTm9kZSA9IG51bGw7XHJcblx0XHR0aGlzLmNvbnRhaW5lck5vZGUgPSB3aW5kb3c7XHJcblxyXG5cdFx0dGhpcy5faXNBY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMuX3Njcm9sbFkgPSAwO1xyXG5cdFx0dGhpcy5fb25TY3JvbGxDaGFuZ2VkQ2FsbGJhY2sgPSAoKSA9PiB0aGlzLl9vblNjcm9sbENoYW5nZWQoZmFsc2UpO1xyXG5cdFx0dGhpcy5fb25XaGVlbENhbGxiYWNrID0gKCkgPT4gdGhpcy5fb25XaGVlbCgpO1xyXG5cdFx0dGhpcy5fd2hlZWxEZWxheSA9IDAuMSAqIDEwMDA7IC8vIG1pbGxpc2Vjb25kc1xyXG5cdFx0dGhpcy5fd2hlZWxUaW1lb3V0ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGxvYWROZXh0UGFnZSgpIHt9XHJcblxyXG5cdGlzQWN0aXZlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xyXG5cdH1cclxuXHRzZXRBY3RpdmUodmFsdWUpIHtcclxuXHRcdGlmICh2YWx1ZSkge1xyXG5cdFx0XHRpZiAodGhpcy5faXNBY3RpdmUpIHsgcmV0dXJuOyB9XHJcblx0XHRcdHRoaXMuX2lzQWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5fc2Nyb2xsWSA9IGdldFBhZ2VTY3JvbGxZKCk7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyTm9kZS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX29uU2Nyb2xsQ2hhbmdlZENhbGxiYWNrLCBmYWxzZSk7XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLl9vbldoZWVsQ2FsbGJhY2ssIGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghdGhpcy5faXNBY3RpdmUpIHsgcmV0dXJuOyB9XHJcblx0XHRcdHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuY29udGFpbmVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuX29uU2Nyb2xsQ2hhbmdlZENhbGxiYWNrLCBmYWxzZSk7XHJcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLl9vbldoZWVsQ2FsbGJhY2ssIGZhbHNlKTtcclxuXHRcdFx0dGhpcy5fY2xlYXJXaGVlbFRpbWVvdXQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVwZGF0ZUNoZWNrKCkge1xyXG5cdFx0dGhpcy5fb25TY3JvbGxDaGFuZ2VkKHRydWUpO1xyXG5cdH1cclxuXHJcblx0X29uU2Nyb2xsQ2hhbmdlZChmb3JjZSkge1xyXG5cdFx0Y29uc3Qgc2Nyb2xsWU5ldyA9IGdldFBhZ2VTY3JvbGxZKCk7XHJcblx0XHRjb25zdCBzY3JvbGxZUHJlID0gdGhpcy5fc2Nyb2xsWTtcclxuXHRcdHRoaXMuX3Njcm9sbFkgPSBzY3JvbGxZTmV3O1xyXG5cclxuXHRcdHRoaXMuX2NsZWFyV2hlZWxUaW1lb3V0KCk7XHJcblxyXG5cdFx0Ly8gTXVzdCBoYXZlIHZhbGlkIHRhcmdldFxyXG5cdFx0aWYgKHRoaXMucGFnZU5vZGUgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0Ly8gRG9uJ3QgbG9hZCBpZiBhbHJlYWR5IGxvYWRpbmcsIGlmIG5vdCBzY3JvbGxlZCBhdCBhbGwsIG9yIGlmIHNjcm9sbGluZyB1cFxyXG5cdFx0aWYgKGZvcmNlICE9PSB0cnVlKSB7XHJcblx0XHRcdGlmIChzY3JvbGxZTmV3IDwgMSB8fCBzY3JvbGxZTmV3IDw9IHNjcm9sbFlQcmUpIHsgcmV0dXJuOyB9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gRG9uJ3QgbG9hZCBpZiB0aGUgY3VycmVudCBwYWdlIGlzIGVudGlyZWx5IG9mZi1zY3JlZW5cclxuXHRcdGNvbnN0IHJlY3QgPSB0aGlzLnBhZ2VOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0aWYgKHJlY3QueSArIHJlY3QuaGVpZ2h0IDwgMCkgeyByZXR1cm47IH1cclxuXHJcblx0XHQvLyBEb24ndCBsb2FkIGlmIG5vdCBlbm91Z2ggb2YgdGhlIHBhZ2UgaGFzIGJlZW4gdmlld2VkXHJcblx0XHRjb25zdCBoZWlnaHQgPSBnZXRXaW5kb3dIZWlnaHQoKTtcclxuXHRcdGlmIChyZWN0LnkgKyByZWN0LmhlaWdodCAqIHRoaXMucGFnZVZpZXdQZXJjZW50UmVxdWlyZWQgPj0gaGVpZ2h0KSB7IHJldHVybjsgfVxyXG5cclxuXHRcdC8vIExvYWRcclxuXHRcdHRoaXMubG9hZE5leHRQYWdlKCk7XHJcblx0fVxyXG5cclxuXHRfb25XaGVlbCgpIHtcclxuXHRcdHRoaXMuX2NsZWFyV2hlZWxUaW1lb3V0KCk7XHJcblx0XHR0aGlzLl93aGVlbFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX29uV2hlZWxUaW1lb3V0KCksIHRoaXMuX3doZWVsRGVsYXkpO1xyXG5cdH1cclxuXHJcblx0X29uV2hlZWxUaW1lb3V0KCkge1xyXG5cdFx0dGhpcy5fd2hlZWxUaW1lb3V0ID0gbnVsbDtcclxuXHRcdHRoaXMuX29uU2Nyb2xsQ2hhbmdlZCh0cnVlKTtcclxuXHR9XHJcblxyXG5cdF9jbGVhcldoZWVsVGltZW91dCgpIHtcclxuXHRcdGlmICh0aGlzLl93aGVlbFRpbWVvdXQgIT09IG51bGwpIHtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuX3doZWVsVGltZW91dCk7XHJcblx0XHRcdHRoaXMuX3doZWVsVGltZW91dCA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3dIZWlnaHQoKSB7XHJcblx0cmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlU2Nyb2xsWSgpIHtcclxuXHRjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblx0cmV0dXJuICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEluZmluaXRlU2Nyb2xsQmFzZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHJlYWR5ID0gcmVxdWlyZShcIi4uL3JlYWR5XCIpO1xyXG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoXCIuLi9mZXRjaFwiKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCBwYWdpbmF0aW9uID0gcmVxdWlyZShcIi4uL2FwaS9wYWdpbmF0aW9uXCIpO1xyXG5jb25zdCBzZXR0aW5ncyA9IHJlcXVpcmUoXCIuLi9hcGkvc2V0dGluZ3NcIik7XHJcbmNvbnN0IEluZmluaXRlU2Nyb2xsQmFzZSA9IHJlcXVpcmUoXCIuL2luZmluaXRlLXNjcm9sbC1iYXNlXCIpLkluZmluaXRlU2Nyb2xsQmFzZTtcclxuXHJcbmxldCBjdXJyZW50UGFnZVR5cGUgPSBudWxsO1xyXG5sZXQgc2Nyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbmNsYXNzIEluZmluaXRlU2Nyb2xsIGV4dGVuZHMgSW5maW5pdGVTY3JvbGxCYXNlIHtcclxuXHRjb25zdHJ1Y3Rvcihjb25maWcsIHBhZ2VUeXBlLCBwYWdlTm9kZSwgcGFnZXNJbmZvKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucGFnZVZpZXdQZXJjZW50UmVxdWlyZWQgPSBjb25maWcucGFnZVZpZXdQZXJjZW50UmVxdWlyZWQ7XHJcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuXHRcdHRoaXMucGFnZVR5cGUgPSBwYWdlVHlwZTtcclxuXHRcdHRoaXMucGFnZU5vZGUgPSBwYWdlTm9kZTtcclxuXHRcdHRoaXMucGFnZXNJbmZvID0gcGFnZXNJbmZvO1xyXG5cdFx0dGhpcy5jb250ZW50Q29udGFpbmVyID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLl9kZWxheVByb21pc2UgPSBudWxsO1xyXG5cdFx0dGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLl9pc0VuYWJsZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuX2lzRW5hYmxlZENoZWNrYm94ID0gbnVsbDtcclxuXHRcdHRoaXMuX3BhZ2VXcmFwcGVyVGVtcGxhdGUgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMuaW5pdGlhbGl6ZUNvbnRlbnRDb250YWluZXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHRnZXRQYWdlTW9kZShwYWdlVHlwZSkge1xyXG5cdFx0c3dpdGNoIChwYWdlVHlwZSkge1xyXG5cdFx0XHRjYXNlIFwiZ2FsbGVyeVwiOlxyXG5cdFx0XHRcdHJldHVybiBcImltYWdlLWxpc3RcIjtcclxuXHRcdFx0Y2FzZSBcInNlYXJjaFwiOlxyXG5cdFx0XHRjYXNlIFwiZmF2b3JpdGVzXCI6XHJcblx0XHRcdFx0cmV0dXJuIFwiZ2FsbGVyeS1saXN0XCI7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplQ29udGVudENvbnRhaW5lcigpIHtcclxuXHRcdHRoaXMuY29udGVudENvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGVudENvbnRhaW5lcigpO1xyXG5cdFx0dGhpcy5wYWdlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbnRlbnRDb250YWluZXIsIHRoaXMucGFnZU5vZGUpO1xyXG5cclxuXHRcdHRoaXMucGFnZU5vZGUgPSB0aGlzLmNyZWF0ZVdyYXBwZWRQYWdlKHRoaXMucGFnZU5vZGUsIHRoaXMucGFnZXNJbmZvLnBhZ2VDdXJyZW50KTtcclxuXHRcdHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnBhZ2VOb2RlKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNvbnRlbnRDb250YWluZXIoKSB7XHJcblx0XHRjb25zdCBodG1sID0gcmVxdWlyZShcIi4vY29udGFpbmVyLmh0bWxcIik7XHJcblx0XHRjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyXCIpO1xyXG5cclxuXHRcdGNvbnN0IG1vZGUgPSB0aGlzLmdldFBhZ2VNb2RlKHRoaXMucGFnZVR5cGUpO1xyXG5cdFx0aWYgKG1vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEteC1pbmZpbml0ZS1zY3JvbGwtbW9kZVwiLCBtb2RlKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0b3AgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi54LWluZmluaXRlLXNjcm9sbC1oZWFkZXItdG9wLWxpbmtcIik7XHJcblx0XHR0b3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSwgZmFsc2UpO1xyXG5cclxuXHRcdHRoaXMuX2lzRW5hYmxlZENoZWNrYm94ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveFwiKTtcclxuXHRcdHRoaXMuX2lzRW5hYmxlZENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldEVuYWJsZWQodGhpcy5faXNFbmFibGVkQ2hlY2tib3guY2hlY2tlZCk7XHJcblx0XHRcdGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7IHRoaXMudXBkYXRlQ2hlY2soKTsgfVxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cclxuXHRcdHJldHVybiBjb250YWluZXI7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVXcmFwcGVkUGFnZShjb250ZW50LCBwYWdlSW5kZXgpIHtcclxuXHRcdGlmICh0aGlzLl9wYWdlV3JhcHBlclRlbXBsYXRlID09PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IGh0bWwgPSByZXF1aXJlKFwiLi9wYWdlLmh0bWxcIik7XHJcblx0XHRcdGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XHJcblx0XHRcdHRoaXMuX3BhZ2VXcmFwcGVyVGVtcGxhdGUgPSBkb2MucXVlcnlTZWxlY3RvcihcIi54LWluZmluaXRlLXNjcm9sbC1wYWdlXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHdyYXBwZXIgPSB0aGlzLl9wYWdlV3JhcHBlclRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdGNvbnN0IGxpbmsgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1saW5rXCIpO1xyXG5cdFx0bGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRoaXMucGFnZXNJbmZvLmNyZWF0ZVBhZ2VVcmwocGFnZUluZGV4KSk7XHJcblx0XHRsaW5rLnRleHRDb250ZW50ID0gYFBhZ2UgJHtwYWdlSW5kZXggKyAxfWA7XHJcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cdFx0cmV0dXJuIHdyYXBwZXI7XHJcblx0fVxyXG5cclxuXHJcblx0aXNFbmFibGVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2lzRW5hYmxlZDtcclxuXHR9XHJcblxyXG5cdHNldEVuYWJsZWQodmFsdWUpIHtcclxuXHRcdGNvbnN0IGlzQ29tcGxldGUgPSB0aGlzLmlzQ29tcGxldGUoKTtcclxuXHRcdHRoaXMuX2lzRW5hYmxlZCA9ICEhdmFsdWUgJiYgIWlzQ29tcGxldGU7XHJcblxyXG5cdFx0aWYgKCF0aGlzLl9pc0xvYWRpbmcpIHtcclxuXHRcdFx0dGhpcy5zZXRBY3RpdmUodGhpcy5faXNFbmFibGVkKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9pc0VuYWJsZWRDaGVja2JveC5jaGVja2VkID0gdGhpcy5faXNFbmFibGVkIHx8IGlzQ29tcGxldGU7XHJcblx0fVxyXG5cclxuXHRpc0NvbXBsZXRlKCkge1xyXG5cdFx0cmV0dXJuICh0aGlzLnBhZ2VzSW5mby5wYWdlQ3VycmVudCArIDEgPj0gdGhpcy5wYWdlc0luZm8ucGFnZUNvdW50KTtcclxuXHR9XHJcblxyXG5cdGdldE5leHRQYWdlVXJsKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGFnZXNJbmZvLmNyZWF0ZVBhZ2VVcmwodGhpcy5wYWdlc0luZm8ucGFnZUN1cnJlbnQgKyAxKTtcclxuXHR9XHJcblxyXG5cdGdldFBhZ2VEYXRhRnJvbUh0bWwoaHRtbCkge1xyXG5cdFx0Y29uc3QgY29udGVudCA9IGdldERlZmF1bHRQYWdlQ29udGVudChodG1sLCB0aGlzLnBhZ2VUeXBlKTsgLy8gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkdFwiKTtcclxuXHRcdGlmIChjb250ZW50ID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcclxuXHJcblx0XHRsZXQgY2xhc3NOYW1lID0gY29udGVudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiO1xyXG5cdFx0aWYgKGNsYXNzTmFtZSkgeyBjbGFzc05hbWUgKz0gXCIgXCI7IH1cclxuXHRcdGNsYXNzTmFtZSArPSBcIngtaW5maW5pdGUtc2Nyb2xsXCI7XHJcblx0XHRjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSk7XHJcblxyXG5cdFx0cmV0dXJuIHsgY29udGVudCB9O1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZE5leHRQYWdlKCkge1xyXG5cdFx0aWYgKCFpc1dpbmRvd1Zpc2libGUoKSkgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuXHRcdGlmICh0aGlzLl9pc0xvYWRpbmcpIHsgcmV0dXJuOyB9XHJcblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlKCkpIHtcclxuXHRcdFx0dGhpcy5wYWdlTm9kZSA9IG51bGw7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBMb2FkIGRhdGFcclxuXHRcdGNvbnN0IHVybCA9IHRoaXMuZ2V0TmV4dFBhZ2VVcmwoKTtcclxuXHRcdGxldCBwYWdlRGF0YTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRoaXMuX2lzTG9hZGluZyA9IHRydWU7XHJcblx0XHRcdHBhZ2VEYXRhID0gYXdhaXQgdGhpcy5mZXRjaFBhZ2VEYXRhKHVybCwgdGhpcy5jb25maWcubG9hZEF0dGVtcHRzLCB0aGlzLmNvbmZpZy5kZWxheSk7XHJcblx0XHR9XHJcblx0XHRmaW5hbGx5IHtcclxuXHRcdFx0dGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZiAocGFnZURhdGEgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0Ly8gVXBkYXRlIHBhZ2VcclxuXHRcdCsrdGhpcy5wYWdlc0luZm8ucGFnZUN1cnJlbnQ7XHJcblxyXG5cdFx0Ly8gQ3JlYXRlIG5vZGVcclxuXHRcdGNvbnN0IG5ld1BhZ2VOb2RlID0gdGhpcy5jcmVhdGVXcmFwcGVkUGFnZShwYWdlRGF0YS5jb250ZW50LCB0aGlzLnBhZ2VzSW5mby5wYWdlQ3VycmVudCk7XHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UGFnZU5vZGUpO1xyXG5cclxuXHRcdC8vIERvbmU/XHJcblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlKCkpIHtcclxuXHRcdFx0dGhpcy5wYWdlTm9kZSA9IG51bGw7XHJcblx0XHRcdHRoaXMuc2V0RW5hYmxlZChmYWxzZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2VOb2RlID0gbmV3UGFnZU5vZGU7XHJcblx0XHRcdHRoaXMuc2V0QWN0aXZlKHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZmV0Y2hQYWdlRGF0YSh1cmwsIGxvYWRBdHRlbXB0cywgZGVsYXkpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbG9hZEF0dGVtcHRzOyArK2kpIHtcclxuXHRcdFx0YXdhaXQgdGhpcy53YWl0Rm9yRGVsYXkoKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaC5nZXQoeyB1cmw6IHVybCB9KTtcclxuXHRcdFx0XHRjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHJlc3VsdC5yZXNwb25zZVRleHQsIFwidGV4dC9odG1sXCIpO1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSB0aGlzLmdldFBhZ2VEYXRhRnJvbUh0bWwoZG9jKTtcclxuXHRcdFx0XHRpZiAoZGF0YSAhPT0gbnVsbCkgeyByZXR1cm4gZGF0YTsgfVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdH1cclxuXHRcdFx0ZmluYWxseSB7XHJcblx0XHRcdFx0dGhpcy5zZXREZWxheShkZWxheSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cdHNldERlbGF5KHRpbWUpIHtcclxuXHRcdHRoaXMuX2RlbGF5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5fZGVsYXlQcm9taXNlID0gbnVsbDtcclxuXHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdH0sIHRpbWUgKiAxMDAwKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgd2FpdEZvckRlbGF5KCkge1xyXG5cdFx0aWYgKHRoaXMuX2RlbGF5UHJvbWlzZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRhd2FpdCB0aGlzLl9kZWxheVByb21pc2U7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0dXBQYWdlRm9jdXMoKSB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgb25WaXNpYmlsaXR5U3RhdGVDaGFuZ2VkLCBmYWxzZSk7XHJcblx0b25WaXNpYmlsaXR5U3RhdGVDaGFuZ2VkKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzV2luZG93VmlzaWJsZSgpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0dHlwZW9mIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpICE9PSBcInN0cmluZ1wiIHx8XHJcblx0XHRkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25WaXNpYmlsaXR5U3RhdGVDaGFuZ2VkKCkge1xyXG5cdGlmICghaXNXaW5kb3dWaXNpYmxlKCkpIHsgcmV0dXJuOyB9XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgb25WaXNpYmlsaXR5U3RhdGVDaGFuZ2VkLCBmYWxzZSk7XHJcblx0aW5pdGlhbGl6ZShjdXJyZW50UGFnZVR5cGUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdFBhZ2VDb250ZW50KGh0bWwsIHBhZ2VUeXBlKSB7XHJcblx0bGV0IG47XHJcblx0c3dpdGNoIChwYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0biA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZHRcIik7XHJcblx0XHRcdGlmIChuICE9PSBudWxsKSB7IHJldHVybiBuOyB9XHJcblx0XHRcdG4gPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIuZXplX2dhbGxlcnlfcGFnZV9jb250YWluZXJcIik7XHJcblx0XHRcdGlmIChuICE9PSBudWxsKSB7IHJldHVybiBuOyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNlYXJjaFwiOlxyXG5cdFx0Y2FzZSBcImZhdm9yaXRlc1wiOlxyXG5cdFx0XHRuID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiLml0Z1wiKTtcclxuXHRcdFx0aWYgKG4gIT09IG51bGwpIHsgcmV0dXJuIG47IH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbmFibGVkQnlEZWZhdWx0KHBhZ2VUeXBlLCBjb25maWcpIHtcclxuXHRzd2l0Y2ggKHBhZ2VUeXBlKSB7XHJcblx0XHRjYXNlIFwiZ2FsbGVyeVwiOlxyXG5cdFx0XHRyZXR1cm4gY29uZmlnLmVuYWJsZWRCeURlZmF1bHRGb3JHYWxsZXJ5SW1hZ2VzO1xyXG5cdFx0Y2FzZSBcInNlYXJjaFwiOlxyXG5cdFx0Y2FzZSBcImZhdm9yaXRlc1wiOlxyXG5cdFx0XHRyZXR1cm4gY29uZmlnLmVuYWJsZWRCeURlZmF1bHRGb3JHYWxsZXJ5TGlzdHM7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FsbG93ZWQocGFnZVR5cGUsIGNvbmZpZykge1xyXG5cdHN3aXRjaCAocGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdHJldHVybiBjb25maWcuYWxsb3dGb3JHYWxsZXJ5SW1hZ2VzO1xyXG5cdFx0Y2FzZSBcInNlYXJjaFwiOlxyXG5cdFx0Y2FzZSBcImZhdm9yaXRlc1wiOlxyXG5cdFx0XHRyZXR1cm4gY29uZmlnLmFsbG93Rm9yR2FsbGVyeUxpc3RzO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IFwieC1pbmZpbml0ZS1zY3JvbGxcIjtcclxuXHRpZiAoc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcclxuXHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKHBhZ2VUeXBlKSB7XHJcblx0aWYgKHNjcm9sbGVyICE9PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBwYWdlc0luZm8gPSBwYWdpbmF0aW9uLmdldEluZm8oZG9jdW1lbnQpO1xyXG5cdGlmIChwYWdlc0luZm8gPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHBhZ2VOb2RlID0gZ2V0RGVmYXVsdFBhZ2VDb250ZW50KGRvY3VtZW50LCBwYWdlVHlwZSk7XHJcblx0aWYgKHBhZ2VOb2RlID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBjb25maWcgPSBhd2FpdCByZXF1aXJlKFwiLi9jb25maWdcIikuZ2V0KCk7XHJcblxyXG5cdGlmICghaXNBbGxvd2VkKHBhZ2VUeXBlLCBjb25maWcpKSB7IHJldHVybjsgfVxyXG5cclxuXHRpbnNlcnRTdHlsZXNoZWV0KCk7XHJcblxyXG5cdHNjcm9sbGVyID0gbmV3IEluZmluaXRlU2Nyb2xsKGNvbmZpZywgcGFnZVR5cGUsIHBhZ2VOb2RlLCBwYWdlc0luZm8pO1xyXG5cdHNjcm9sbGVyLnNldEVuYWJsZWQoaXNFbmFibGVkQnlEZWZhdWx0KHBhZ2VUeXBlLCBjb25maWcpKTtcclxufVxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplU2V0dGluZ3MoKSB7XHJcblx0c2V0dGluZ3MuaW5pdGlhbGl6ZSgpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uID0gc2V0dGluZ3MuYWRkU2VjdGlvbihcIkluZmluaXRlIFNjcm9sbFwiLCBcImluZmluaXRlLXNjcm9sbFwiLCAxKTtcclxuXHRpZiAoc2VjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0YXdhaXQgc2V0dXBTZXR0aW5ncyhzZWN0aW9uKTtcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldHVwU2V0dGluZ3MoY29udGFpbmVyKSB7XHJcblx0Y29uc3QgY29uZmlnID0gYXdhaXQgcmVxdWlyZShcIi4vY29uZmlnXCIpO1xyXG5cclxuXHRjb250YWluZXIuaW5uZXJIVE1MID0gcmVxdWlyZShcIi4vc2V0dGluZ3MuaHRtbFwiKTtcclxuXHRiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIFwiZW5hYmxlZEJ5RGVmYXVsdEZvckdhbGxlcnlJbWFnZXNcIiwgXCJib29sZWFuXCIpO1xyXG5cdGJpbmRJbnB1dChjb25maWcsIGNvbnRhaW5lciwgXCJlbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUxpc3RzXCIsIFwiYm9vbGVhblwiKTtcclxuXHRiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIFwiYWxsb3dGb3JHYWxsZXJ5SW1hZ2VzXCIsIFwiYm9vbGVhblwiKTtcclxuXHRiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIFwiYWxsb3dGb3JHYWxsZXJ5TGlzdHNcIiwgXCJib29sZWFuXCIpO1xyXG5cdGJpbmRJbnB1dChjb25maWcsIGNvbnRhaW5lciwgXCJkZWxheVwiLCB7XHJcblx0XHR0eXBlOiBcIm51bWJlclwiLFxyXG5cdFx0bWluOiAwXHJcblx0fSk7XHJcblx0YmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBcImxvYWRBdHRlbXB0c1wiLCB7XHJcblx0XHR0eXBlOiBcImludGVnZXJcIixcclxuXHRcdG1pbjogMFxyXG5cdH0pO1xyXG5cdGJpbmRJbnB1dChjb25maWcsIGNvbnRhaW5lciwgXCJwYWdlVmlld1BlcmNlbnRSZXF1aXJlZFwiLCB7XHJcblx0XHR0eXBlOiBcIm51bWJlclwiLFxyXG5cdFx0bWluOiAwLFxyXG5cdFx0bWF4OiAxLFxyXG5cdFx0dmFsdWVUb0lucHV0OiAodikgPT4gdiAqIDEwMCxcclxuXHRcdGlucHV0VG9WYWx1ZTogKHYpID0+IHYgLyAxMDBcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBzZXR0aW5nTmFtZSwgb3B0aW9ucykge1xyXG5cdGNvbnN0IG4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEteC1zZXR0aW5ncy1mb3I9JHtzZXR0aW5nTmFtZX1dYCk7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uZmlnLmJpbmRJbnB1dChjb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEteC1zZXR0aW5ncy1mb3I9JHtzZXR0aW5nTmFtZX1dYCksIHNldHRpbmdOYW1lLCBvcHRpb25zKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdHNldHRpbmdzLmFkZExpbmsoKTtcclxuXHJcblx0Y3VycmVudFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGRvY3VtZW50LCBsb2NhdGlvbik7XHJcblx0c3dpdGNoIChjdXJyZW50UGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRjYXNlIFwic2VhcmNoXCI6XHJcblx0XHRjYXNlIFwiZmF2b3JpdGVzXCI6XHJcblx0XHRcdHNldHVwUGFnZUZvY3VzKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNldHRpbmdzXCI6XHJcblx0XHRcdGluaXRpYWxpemVTZXR0aW5ncygpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5yZWFkeS5vblJlYWR5KG1haW4pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtcGFnZVxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1oZWFkZXJcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci1jb250ZW50XFxcIj5cXHJcXG5cXHRcXHRcXHQ8YSBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1saW5rXFxcIj48L2E+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvblxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWxlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZVxcXCI+R2FsbGVyeSBpbWFnZXM8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPkVuYWJsZSBpbmZpbml0ZS1zY3JvbGxpbmcgZm9yIGdhbGxlcnkgdGh1bWJuYWlscy48L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tcmlnaHRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsYWJlbCBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1sYWJlbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2hlY2tib3gtcHJlZml4XFxcIj5FbmFibGUgYnkgZGVmYXVsdDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwibGNcXFwiPjxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwiZW5hYmxlZEJ5RGVmYXVsdEZvckdhbGxlcnlJbWFnZXNcXFwiIC8+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsYWJlbCBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1sYWJlbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2hlY2tib3gtcHJlZml4XFxcIj5BbGxvdzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwibGNcXFwiPjxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwiYWxsb3dGb3JHYWxsZXJ5SW1hZ2VzXFxcIiAvPjxzcGFuPjwvc3Bhbj48L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uXFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tbGVmdFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXRpdGxlXFxcIj5HYWxsZXJ5IGxpc3RzPC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uXFxcIj5FbmFibGUgaW5maW5pdGUtc2Nyb2xsaW5nIGZvciBnYWxsZXJ5IGxpc3RzLjwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxhYmVsIGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWxhYmVsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jaGVja2JveC1wcmVmaXhcXFwiPkVuYWJsZSBieSBkZWZhdWx0PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJsY1xcXCI+PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJlbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUxpc3RzXFxcIiAvPjxzcGFuPjwvc3Bhbj48L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtbGFiZWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNoZWNrYm94LXByZWZpeFxcXCI+QWxsb3c8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImxjXFxcIj48aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImFsbG93Rm9yR2FsbGVyeUxpc3RzXFxcIiAvPjxzcGFuPjwvc3Bhbj48L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uXFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tbGVmdFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXRpdGxlXFxcIj5EZWxheTwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvblxcXCI+U2Vjb25kcyB0byB3YWl0IGJlZm9yZSBsb2FkaW5nIHRoZSBuZXh0IHBhZ2UuPC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0XFxcIj5cXHJcXG5cXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJkZWxheVxcXCIgLz5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPkxvYWQgYXR0ZW1wdHM8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPk1heGltdW0gbnVtYmVyIG9mIGF0dGVtcHRzIGFsbG93ZWQgdG8gbG9hZCB0aGUgbmV4dCBwYWdlLjwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodFxcXCI+XFxyXFxuXFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBzdGVwPVxcXCIxXFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwibG9hZEF0dGVtcHRzXFxcIiAvPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvblxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWxlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZVxcXCI+UmVxdWlyZWQgcGFnZSB2aWV3IHBlcmNlbnQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPlBlcmNlbnQgb2YgdGhlIGN1cnJlbnQgcGFnZSB0aGF0IG11c3QgYmUgdmlld2VkIGJlZm9yZSBsb2FkaW5nIHRoZSBuZXh0LjwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodFxcXCI+XFxyXFxuXFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwMFxcXCIgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcInBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkXFxcIiAvPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVye2NsZWFyOmJvdGg7cG9zaXRpb246cmVsYXRpdmV9LngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lcltkYXRhLXgtaW5maW5pdGUtc2Nyb2xsLW1vZGU9Z2FsbGVyeS1saXN0XXtib3JkZXI6MDtib3JkZXItdG9wOjFweCBzb2xpZCAjMDAwO3dpZHRoOjEwMCV9LngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lcltkYXRhLXgtaW5maW5pdGUtc2Nyb2xsLW1vZGU9aW1hZ2UtbGlzdF17Ym9yZGVyOjFweCBzb2xpZCAjMDAwO21pbi13aWR0aDo3MTBweDttYXgtd2lkdGg6MTIxMHB4O21hcmdpbjowIGF1dG99LngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtwb2ludGVyLWV2ZW50czpub25lfS54LWluZmluaXRlLXNjcm9sbC1oZWFkZXJ7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246c3RpY2t5O2ZvbnQtc2l6ZToxMHB0O3RleHQtYWxpZ246cmlnaHQ7bGluZS1oZWlnaHQ6MS4zNWVtO3otaW5kZXg6MjAyO3BvaW50ZXItZXZlbnRzOmF1dG99LngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci1jb250ZW50e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3doaXRlLXNwYWNlOm5vd3JhcDtsaW5lLWhlaWdodDoxLjVlbTtoZWlnaHQ6Mi41ZW19LngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci10b3AtbGlua3tkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWRlY29yYXRpb246bm9uZTtwYWRkaW5nOi41ZW07bWFyZ2luLXJpZ2h0Oi41ZW19LngtaW5maW5pdGUtc2Nyb2xsLWVuYWJsZWQtY2hlY2tib3gtbGFiZWwwLC54LWluZmluaXRlLXNjcm9sbC1wYWdlLWxpbmt7d2hpdGUtc3BhY2U6bm93cmFwO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6LjVlbX0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZXtwb3NpdGlvbjpyZWxhdGl2ZX0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZS1oZWFkZXJ7dG9wOjA7Ym90dG9tOjA7cG9zaXRpb246c3RpY2t5O2ZvbnQtc2l6ZToxMHB0O3RleHQtYWxpZ246bGVmdDtsaW5lLWhlaWdodDoxLjM1ZW07ei1pbmRleDoyMDF9LngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lcltkYXRhLXgtaW5maW5pdGUtc2Nyb2xsLW1vZGU9aW1hZ2UtbGlzdF0gLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2U6bm90KDpsYXN0LWNoaWxkKXtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMDAwfS54LWluZmluaXRlLXNjcm9sbC1wYWdlLWxpbmt7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UsZGl2I2dkdHtib3JkZXI6MDt0ZXh0LWFsaWduOmxlZnQ7bWluLXdpZHRoOjA7bWF4LXdpZHRoOm5vbmU7cGFkZGluZzowfS54LWluZmluaXRlLXNjcm9sbC1wYWdlIGltZ3tib3JkZXI6MXB4IHNvbGlkICMwMDA7bWFyZ2luOjA7cGFkZGluZzowfS54LWluZmluaXRlLXNjcm9sbC1wYWdlIGF7dGV4dC1kZWNvcmF0aW9uOm5vbmV9OnJvb3QueC1pcy1kYXJrIC54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXJbZGF0YS14LWluZmluaXRlLXNjcm9sbC1tb2RlPWltYWdlLWxpc3RdLDpyb290LngtaXMtZGFyayAueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRlbnQsOnJvb3QueC1pcy1kYXJrIC54LWluZmluaXRlLXNjcm9sbC1wYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiM0ZjUzNWJ9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXJbZGF0YS14LWluZmluaXRlLXNjcm9sbC1tb2RlPWltYWdlLWxpc3RdLDpyb290Om5vdCgueC1pcy1kYXJrKSAueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRlbnQsOnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWluZmluaXRlLXNjcm9sbC1wYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNlZGViZGZ9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXIsOnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWluZmluaXRlLXNjcm9sbC1wYWdlIGltZyw6cm9vdDpub3QoLngtaXMtZGFyaykgLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2U6bm90KDpsYXN0LWNoaWxkKXtib3JkZXItY29sb3I6IzVjMGQxMn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMzBweCl7LngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lcltkYXRhLXgtaW5maW5pdGUtc2Nyb2xsLW1vZGU9aW1hZ2UtbGlzdF17bWF4LXdpZHRoOjk3MHB4fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MHB4KXsueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyW2RhdGEteC1pbmZpbml0ZS1zY3JvbGwtbW9kZT1pbWFnZS1saXN0XXttYXgtd2lkdGg6NzMwcHh9fS5sYy54LWNoZWNrYm94LXNtYWxse2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjIwcHg7cGFkZGluZy1sZWZ0OjI2cHg7ZGlzcGxheTppbmxpbmUtYmxvY2t9LmxjLngtY2hlY2tib3gtc21hbGw+c3BhbntoZWlnaHQ6MTZweDt3aWR0aDoxNnB4fS5sYy54LWNoZWNrYm94LXNtYWxsPnNwYW46YWZ0ZXJ7bGVmdDo1cHg7dG9wOjEuMXB4O3dpZHRoOjNweDtoZWlnaHQ6OHB4fWRpdi5lemVfZ2FsbGVyeV9wYWdle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyOjA7d2lkdGg6YXV0bzttaW4td2lkdGg6MDttYXgtd2lkdGg6bm9uZTttYXJnaW46MDtjbGVhcjpub25lO3BhZGRpbmc6MDtib3JkZXItcmFkaXVzOjB9YS5lemVfZ2FsbGVyeV9wYWdlX2luZGljYXRvcntkaXNwbGF5Om5vbmV9LmV6ZV9nYWxsZXJ5X2N1c3RvbV90YWJsZT4uZXplX2dhbGxlcnlfY3VzdG9tX3Jvdz4uZXplX2dhbGxlcnlfY3VzdG9tX2NlbGw6bnRoLWNoaWxkKDEpPnA6bnRoLWNoaWxkKDEpe2Rpc3BsYXk6bm9uZX0ueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyIC5nbHRodW1ie3otaW5kZXg6MjAzfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVycyh1cmwpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRjb25zdCBtYXRjaCA9IC9eKFteI1xcP10qKShcXD9bXiNdKik/KCNbXFx3XFxXXSopPyQvLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMl0gJiYgbWF0Y2hbMl0ubGVuZ3RoID4gMSkge1xyXG5cdFx0Y29uc3QgcGF0dGVybiA9IC8oW149XSopKD86PShbXFx3XFxXXSopKT8vO1xyXG5cdFx0Zm9yIChjb25zdCBwYXJ0IG9mIG1hdGNoWzJdLnN1YnN0cigxKS5zcGxpdChcIiZcIikpIHtcclxuXHRcdFx0aWYgKHBhcnQubGVuZ3RoID09PSAwKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRcdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4uZXhlYyhwYXJ0KTtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBtYXRjaDJbMl07XHJcblx0XHRcdHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQobWF0Y2gyWzFdKV0gPSAodmFsdWUgIT09IHVuZGVmaW5lZCA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUXVlcnlQYXJhbWV0ZXIodXJsLCBwYXJhbWV0ZXJOYW1lKSB7XHJcblx0cmV0dXJuIHVybC5yZXBsYWNlKFxyXG5cdFx0bmV3IFJlZ0V4cChgKFsmXFxcXD9dKSR7cGFyYW1ldGVyTmFtZX0oPzooPzo9W14mXSopPygmfCQpKWApLFxyXG5cdFx0KG0wLCBtMSwgbTIpID0+IChtMSA9PT0gXCI/XCIgJiYgbTIgPyBcIj9cIiA6IG0yKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRVcmxQYXJhbWV0ZXJzLFxyXG5cdHJlbW92ZVF1ZXJ5UGFyYW1ldGVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGlzUmVhZHlWYWx1ZSA9IGZhbHNlO1xyXG5sZXQgY2FsbGJhY2tzID0gbnVsbDtcclxubGV0IGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcbmNvbnN0IGNoZWNrSW50ZXJ2YWxSYXRlID0gMjUwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzSG9va2VkKCkge1xyXG5cdHJldHVybiBjYWxsYmFja3MgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvb2soKSB7XHJcblx0Y2FsbGJhY2tzID0gW107XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChjaGVja0lmUmVhZHksIGNoZWNrSW50ZXJ2YWxSYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5ob29rKCkge1xyXG5cdGNvbnN0IGNicyA9IGNhbGxiYWNrcztcclxuXHJcblx0Y2FsbGJhY2tzID0gbnVsbDtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbElkKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5cclxuXHRpbnZva2UoY2JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrcykge1xyXG5cdGZvciAobGV0IGNiIG9mIGNhbGxiYWNrcykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y2IoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlYWR5KCkge1xyXG5cdGlmIChpc1JlYWR5VmFsdWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdGlmIChpc0hvb2tlZCgpKSB7IHVuaG9vaygpOyB9XHJcblx0XHRpc1JlYWR5VmFsdWUgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlJlYWR5KCkge1xyXG5cdGlzUmVhZHkoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uUmVhZHkoY2FsbGJhY2spIHtcclxuXHRpZiAoaXNSZWFkeSgpKSB7XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCFpc0hvb2tlZCgpKSB7IGhvb2soKTsgfVxyXG5cclxuXHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvblJlYWR5OiBvblJlYWR5LFxyXG5cdGdldCBpc1JlYWR5KCkgeyByZXR1cm4gaXNSZWFkeSgpOyB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGFwaVN0eWxlID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJZChpZCkge1xyXG5cdHJldHVybiBgJHtpZH0tc3R5bGVzaGVldGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0SWQoaWQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzU3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiAhIWdldFN0eWxlc2hlZXQoaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNoZWV0KHNvdXJjZSwgaWQpIHtcclxuXHRpZiAoYXBpU3R5bGUgPT09IG51bGwpIHsgYXBpU3R5bGUgPSByZXF1aXJlKFwiLi9hcGkvc3R5bGVcIik7IH1cclxuXHRhcGlTdHlsZS5zZXREb2N1bWVudERhcmtGbGFnKCk7XHJcblxyXG5cdGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlLnRleHRDb250ZW50ID0gc291cmNlO1xyXG5cdGlmICh0eXBlb2YoaWQpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRzdHlsZS5pZCA9IGdldElkKGlkKTtcclxuXHR9XHJcblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblx0cmV0dXJuIHN0eWxlO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aGFzU3R5bGVzaGVldCxcclxuXHRnZXRTdHlsZXNoZWV0LFxyXG5cdGFkZFN0eWxlc2hlZXRcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3QgeFByZWZpeCA9IFwiIyF4XCI7XHJcbmNvbnN0IHNlcGFyYXRvciA9IFwiL1wiO1xyXG5jb25zdCByb3V0ZXMgPSBbXTtcclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhcihhZGRIaXN0b3J5KSB7XHJcblx0Y29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHRpZiAoYWRkSGlzdG9yeSkge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKHBhdGgpIHtcclxuXHRyZXR1cm4gcGF0aCA/IGAke3hQcmVmaXh9JHtzZXBhcmF0b3J9JHtwYXRofWAgOiB4UHJlZml4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRjb25zdCByb3V0ZSA9IHsgbWF0Y2gsIGNhbGxiYWNrIH07XHJcblx0cm91dGVzLnB1c2gocm91dGUpO1xyXG5cdGlmIChyb3V0ZXMubGVuZ3RoID09PSAxKSB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0fVxyXG5cdHRlc3RSb3V0ZXMoW3JvdXRlXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGZvciAobGV0IGkgPSAwLCBpaSA9IHJvdXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRjb25zdCByb3V0ZSA9IHJvdXRlc1tpXTtcclxuXHRcdGlmIChyb3V0ZS5tYXRjaCA9PT0gbWF0Y2ggJiYgcm91dGUuY2FsbGJhY2sgPT09IGNhbGxiYWNrKSB7XHJcblx0XHRcdHJvdXRlcy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdGlmIChyb3V0ZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFhGcmFnbWVudCgpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cdHJldHVybiAoXHJcblx0XHQhZnJhZ21lbnQgfHxcclxuXHRcdGZyYWdtZW50Lmxlbmd0aCA8IHhQcmVmaXgubGVuZ3RoIHx8XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoMCwgeFByZWZpeC5sZW5ndGgpICE9PSB4UHJlZml4IHx8XHJcblx0XHQoZnJhZ21lbnQubGVuZ3RoID4geFByZWZpeC5sZW5ndGggJiYgZnJhZ21lbnRbeFByZWZpeC5sZW5ndGhdICE9PSBzZXBhcmF0b3IpKSA/XHJcblx0XHRudWxsIDpcclxuXHRcdGZyYWdtZW50LnN1YnN0cih4UHJlZml4Lmxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlc3RSb3V0ZXMocm91dGVzKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSBnZXRYRnJhZ21lbnQoKTtcclxuXHRpZiAoZnJhZ21lbnQgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHJvdXRlLm1hdGNoLmV4ZWMoZnJhZ21lbnQpO1xyXG5cdFx0cm91dGUuY2FsbGJhY2sobWF0Y2gsIGZyYWdtZW50KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVXJsRnJhZ21lbnRDaGFuZ2VkKCkge1xyXG5cdHRlc3RSb3V0ZXMocm91dGVzKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNsZWFyOiBjbGVhcixcclxuXHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRhZGRSb3V0ZTogYWRkUm91dGUsXHJcblx0cmVtb3ZlUm91dGU6IHJlbW92ZVJvdXRlXHJcbn07XHJcbiJdfQ==
