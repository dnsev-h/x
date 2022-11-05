// ==UserScript==
// @name        x/infinite-scroll
// @version     1.1.8
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
		(n !== null && /gallery\s+has\s+been\s+removed|gallery\s+is\s+unavailable\s+due\s+to\s+a\s+copyright\s+claim/i.test(n.textContent)) ||
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
	constructor(pageCurrent, pageCount, itemCount, itemsOnPage, itemsPerPage, urlBase, pageFieldName, hasPageNumbers, currentUrl, nextUrl) {
		this.pageCurrent = pageCurrent;
		this.pageCount = pageCount;
		this.itemCount = itemCount;
		this.itemsOnPage = itemsOnPage;
		this.itemsPerPage = itemsPerPage;
		this.urlBase = urlBase;
		this.pageFieldName = pageFieldName;
		this.hasPageNumbers = hasPageNumbers;
		this.currentUrl = currentUrl;
		this.nextUrl = nextUrl;
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

	getCurrentPageUrl() {
		return this.hasPageNumbers ? this.createPageUrl(this.pageCurrent) : this.currentUrl;
	}

	getNextPageUrl() {
		return this.hasPageNumbers ? this.createPageUrl(this.pageCurrent + 1) : this.nextUrl;
	}

	isOnLastPage() {
		return (
			this.itemsOnPage === 0 ||
			(this.hasPageNumbers ? (this.pageCurrent + 1 >= this.pageCount) : (this.nextUrl === null))
		)
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
	return new PageinationInfo(pageCurrent, pageCount, pageCount, 1, 1, null, null, true, null, null);
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

function getItemsOnPage(html) {
	let itemsOnPage = 0;
	let nodes = html.querySelectorAll("div.itg>div");
	if ((itemsOnPage = nodes.length) === 0) {
		nodes = html.querySelectorAll("table.itg>tbody>tr");
		itemsOnPage = nodes.length;
		if (itemsOnPage > 0 && nodes[0].querySelector("th") !== null) {
			--itemsOnPage; // Header row
		}
	}
	return itemsOnPage;
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

	let itemsOnPage = getItemsOnPage(html);

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

	return new PageinationInfo(pageCurrent, pageCount, itemCount, itemsOnPage, itemsPerPage, urlBase, pageFieldName, true, null, null);
}

function getPagesForGalleryListWithoutPageIndexes(html, searchNav, url) {
	// Url
	let nextUrl = null;
	const link = searchNav.querySelector("#unext[href]");
	if (link !== null) {
		nextUrl = link.getAttribute("href");
	}

	// Total count
	let itemCount = 0;
	const node = html.querySelector('.searchtext>p');
	if (node !== null) {
		for (const n of node.childNodes) {
			if (n.nodeType !== Node.TEXT_NODE) { continue; }
			const match = reResults.exec(n.nodeValue);
			if (match !== null) {
				itemCount = parseNumber(match[1], 0);
				break;
			}
		}
	}

	const itemsOnPage = getItemsOnPage(html);
	const itemsPerPage = itemsOnPage; // Assumed to be the same

	return new PageinationInfo(0, 0, itemCount, itemsOnPage, itemsPerPage, null, null, false, url, nextUrl);
}


function getInfo(html, url) {
	if (!html) { html = document; }

	const pageList = html.querySelector(".ptt");
	if (pageList !== null) { return getPagesForGalleryList(html, pageList); }
	const searchNav = html.querySelector('.searchnav');
	if (searchNav !== null) { return getPagesForGalleryListWithoutPageIndexes(html, searchNav, url); }
	return getPagesForImage(html);
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
		this.pageIndex = pagesInfo.hasPageNumbers ? pagesInfo.pageCurrent : 0;

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

		this.pageNode = this.createWrappedPage(this.pageNode, this.pageIndex);
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
		link.setAttribute("href", this.pagesInfo.getCurrentPageUrl());
		link.textContent = `Page ${pageIndex + 1}` + (this.pagesInfo.hasPageNumbers ? ` of ${this.pagesInfo.pageCount}` : '');
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
		return this.pagesInfo.isOnLastPage();
	}

	getNextPageUrl() {
		return this.pagesInfo.getNextPageUrl();
	}

	getPageDataFromHtml(html, url) {
		const content = getDefaultPageContent(html, this.pageType); // html.querySelector("#gdt");
		if (content === null) { return null; }

		content.removeAttribute("id");

		let className = content.getAttribute("class") || "";
		if (className) { className += " "; }
		className += "x-infinite-scroll";
		content.setAttribute("class", className);

		const pagesInfo = pagination.getInfo(html, url);
		if (pagesInfo === null) { return null; }

		return { content, pagesInfo };
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
		if (url === null) { return; }
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
		this.pagesInfo = pageData.pagesInfo;
		++this.pageIndex;

		// Create node
		const newPageNode = this.createWrappedPage(pageData.content, this.pageIndex);
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
				const data = this.getPageDataFromHtml(doc, url);
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

	const pagesInfo = pagination.getInfo(document, location.href);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BhZ2luYXRpb24uanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvc2V0dGluZ3MuY3NzIiwic3JjL2NvbmZpZy5qcyIsInNyYy9mZXRjaC5qcyIsInNyYy9nbS5qcyIsInNyYy9pbmZpbml0ZS1zY3JvbGwvY29uZmlnLmpzIiwic3JjL2luZmluaXRlLXNjcm9sbC9jb250YWluZXIuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvaW5maW5pdGUtc2Nyb2xsLWJhc2UuanMiLCJzcmMvaW5maW5pdGUtc2Nyb2xsL21haW4uanMiLCJzcmMvaW5maW5pdGUtc2Nyb2xsL3BhZ2UuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvc2V0dGluZ3MuaHRtbCIsInNyYy9pbmZpbml0ZS1zY3JvbGwvc3R5bGUuY3NzIiwic3JjL3F1ZXJ5LXN0cmluZy5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy9zdHlsZS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlXQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExpbmsobGFiZWwsIHVybCwgb3JkZXIpIHtcclxuXHRjb25zdCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYlwiKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRhLmhyZWYgPSB1cmw7XHJcblx0YS50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG5cdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRkaXYuc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdH1cclxuXHRkaXYuYXBwZW5kQ2hpbGQoYSk7XHJcblx0bi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHRyZXR1cm4gZGl2O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YWRkTGlua1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG92ZXJyaWRlQXR0cmlidXRlTmFtZSA9IFwiZGF0YS14LW92ZXJyaWRlLXBhZ2UtdHlwZVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldE92ZXJyaWRlKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZSgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHRyZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChkb2MsIGxvY2F0aW9uKSB7XHJcblx0Y29uc3Qgb3ZlcnJpZGVUeXBlID0gZ2V0T3ZlcnJpZGUoKTtcclxuXHRpZiAob3ZlcnJpZGVUeXBlICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gb3ZlcnJpZGVUeXBlO1xyXG5cdH1cclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9ZmF2Y2F0XVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZmF2b3JpdGVzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiLmdtIGgxI2duXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5XCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX291dGVyXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZXR0aW5nc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjdG9ycmVudGluZm9cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInRvcnJlbnRJbmZvXCI7XHJcblx0fVxyXG5cclxuXHRsZXQgbiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keT4uZD5wXCIpO1xyXG5cdGlmIChcclxuXHRcdChuICE9PSBudWxsICYmIC9nYWxsZXJ5XFxzK2hhc1xccytiZWVuXFxzK3JlbW92ZWR8Z2FsbGVyeVxccytpc1xccyt1bmF2YWlsYWJsZVxccytkdWVcXHMrdG9cXHMrYVxccytjb3B5cmlnaHRcXHMrY2xhaW0vaS50ZXN0KG4udGV4dENvbnRlbnQpKSB8fFxyXG5cdFx0ZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZXplX2RnYWxsZXJ5X3RhYmxlXCIpICE9PSBudWxsKSB7IC8vIGV6ZSByZXN1cnJlY3Rpb25cclxuXHRcdHJldHVybiBcImRlbGV0ZWRHYWxsZXJ5XCI7XHJcblx0fVxyXG5cclxuXHRuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRpZiAobiAhPT0gbnVsbCAmJiBsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgcCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRuLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PT0gbG9jYXRpb24uaHJlZiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCAzKSAhPT0gXCIvdC9cIiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCA1KSAhPT0gXCIvaW1nL1wiKSB7XHJcblx0XHRcdHJldHVybiBcInBhbmRhXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBVbmtub3duXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQsXHJcblx0Z2V0T3ZlcnJpZGUsXHJcblx0c2V0T3ZlcnJpZGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuLi9xdWVyeS1zdHJpbmdcIik7XHJcblxyXG5jb25zdCByZVBhZ2VMaXN0ID0gLyhbMC05LF0rKVxccyotXFxzKihbMC05LF0rKVxccypvZlxccyooWzAtOSxdKykvaTtcclxuY29uc3QgcmVSZXN1bHRzID0gLyhbMC05LF0rKVxccypyZXN1bHRzPy9pO1xyXG5cclxuXHJcbmNsYXNzIFBhZ2VpbmF0aW9uSW5mbyB7XHJcblx0Y29uc3RydWN0b3IocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlLCB1cmxCYXNlLCBwYWdlRmllbGROYW1lLCBoYXNQYWdlTnVtYmVycywgY3VycmVudFVybCwgbmV4dFVybCkge1xyXG5cdFx0dGhpcy5wYWdlQ3VycmVudCA9IHBhZ2VDdXJyZW50O1xyXG5cdFx0dGhpcy5wYWdlQ291bnQgPSBwYWdlQ291bnQ7XHJcblx0XHR0aGlzLml0ZW1Db3VudCA9IGl0ZW1Db3VudDtcclxuXHRcdHRoaXMuaXRlbXNPblBhZ2UgPSBpdGVtc09uUGFnZTtcclxuXHRcdHRoaXMuaXRlbXNQZXJQYWdlID0gaXRlbXNQZXJQYWdlO1xyXG5cdFx0dGhpcy51cmxCYXNlID0gdXJsQmFzZTtcclxuXHRcdHRoaXMucGFnZUZpZWxkTmFtZSA9IHBhZ2VGaWVsZE5hbWU7XHJcblx0XHR0aGlzLmhhc1BhZ2VOdW1iZXJzID0gaGFzUGFnZU51bWJlcnM7XHJcblx0XHR0aGlzLmN1cnJlbnRVcmwgPSBjdXJyZW50VXJsO1xyXG5cdFx0dGhpcy5uZXh0VXJsID0gbmV4dFVybDtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBhZ2VVcmwocGFnZUluZGV4KSB7XHJcblx0XHRpZiAodGhpcy51cmxCYXNlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudXJsQmFzZS5yZXBsYWNlKC9eKFteI1xcP10qKShcXD9bXiNdKik/KCNbXFx3XFxXXSopPyQvLCAobTAsIG0xLCBtMiwgbTMpID0+IHtcclxuXHRcdFx0bTIgPSAoXHJcblx0XHRcdFx0cGFnZUluZGV4ICE9PSAwID9cclxuXHRcdFx0XHQobTIgPyBgJHttMn0mJHt0aGlzLnBhZ2VGaWVsZE5hbWV9PSR7cGFnZUluZGV4fWAgOiBgPyR7dGhpcy5wYWdlRmllbGROYW1lfT0ke3BhZ2VJbmRleH1gKSA6XHJcblx0XHRcdFx0KG0yIHx8IFwiXCIpKTtcclxuXHRcdFx0cmV0dXJuIGAke20xfSR7bTJ9JHttMyB8fCBcIlwifWA7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldEN1cnJlbnRQYWdlVXJsKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaGFzUGFnZU51bWJlcnMgPyB0aGlzLmNyZWF0ZVBhZ2VVcmwodGhpcy5wYWdlQ3VycmVudCkgOiB0aGlzLmN1cnJlbnRVcmw7XHJcblx0fVxyXG5cclxuXHRnZXROZXh0UGFnZVVybCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmhhc1BhZ2VOdW1iZXJzID8gdGhpcy5jcmVhdGVQYWdlVXJsKHRoaXMucGFnZUN1cnJlbnQgKyAxKSA6IHRoaXMubmV4dFVybDtcclxuXHR9XHJcblxyXG5cdGlzT25MYXN0UGFnZSgpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdHRoaXMuaXRlbXNPblBhZ2UgPT09IDAgfHxcclxuXHRcdFx0KHRoaXMuaGFzUGFnZU51bWJlcnMgPyAodGhpcy5wYWdlQ3VycmVudCArIDEgPj0gdGhpcy5wYWdlQ291bnQpIDogKHRoaXMubmV4dFVybCA9PT0gbnVsbCkpXHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcGFyc2VOdW1iZXIodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdGNvbnN0IHYgPSBwYXJzZUludCh2YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIiksIDEwKTtcclxuXHRyZXR1cm4gTnVtYmVyLmlzTmFOKHYpID8gZGVmYXVsdFZhbHVlIDogdjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VzRm9ySW1hZ2UoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNuPmRpdj5zcGFuXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPCAyKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhZ2VDdXJyZW50ID0gcGFyc2VOdW1iZXIobm9kZXNbMF0udGV4dENvbnRlbnQsIDEpIC0gMTtcclxuXHRjb25zdCBwYWdlQ291bnQgPSBwYXJzZU51bWJlcihub2Rlc1sxXS50ZXh0Q29udGVudCwgMCk7XHJcblx0cmV0dXJuIG5ldyBQYWdlaW5hdGlvbkluZm8ocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgcGFnZUNvdW50LCAxLCAxLCBudWxsLCBudWxsLCB0cnVlLCBudWxsLCBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlSXRlbXNQZXJQYWdlKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UpIHtcclxuXHRyZXR1cm4gKHBhZ2VDdXJyZW50ICsgMSA8IHBhZ2VDb3VudCB8fCBwYWdlQ3VycmVudCA9PT0gMCkgP1xyXG5cdFx0aXRlbXNPblBhZ2UgOlxyXG5cdFx0TWF0aC5yb3VuZCgoaXRlbUNvdW50IC0gaXRlbXNPblBhZ2UpIC8gcGFnZUN1cnJlbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJdGVtc0Zyb21GdWxsSW5mbyhjb250ZW50LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0Y29uc3QgbWF0Y2ggPSByZVBhZ2VMaXN0LmV4ZWMoY29udGVudCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHN0YXJ0ID0gcGFyc2VOdW1iZXIobWF0Y2hbMV0sIDApO1xyXG5cdGNvbnN0IGl0ZW1zT25QYWdlID0gcGFyc2VOdW1iZXIobWF0Y2hbMl0sIDApIC0gKHN0YXJ0IC0gMSk7XHJcblx0Y29uc3QgaXRlbUNvdW50ID0gcGFyc2VOdW1iZXIobWF0Y2hbM10sIDApO1xyXG5cdGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGNhbGN1bGF0ZUl0ZW1zUGVyUGFnZShwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlKTtcclxuXHJcblx0cmV0dXJuIHtpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2V9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJdGVtc0ZvckdhbGxlcnlJbWFnZXMocGFnZUxpc3QsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpIHtcclxuXHRjb25zdCBub2RlID0gcGFnZUxpc3QucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLmdwY1wiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgJiYgbm9kZS5wYXJlbnROb2RlID09PSBwYWdlTGlzdC5wYXJlbnROb2RlKSA/XHJcblx0XHRnZXRJdGVtc0Zyb21GdWxsSW5mbyhub2RlLnRleHRDb250ZW50LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSA6XHJcblx0XHRudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJdGVtc09uUGFnZShodG1sKSB7XHJcblx0bGV0IGl0ZW1zT25QYWdlID0gMDtcclxuXHRsZXQgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuaXRnPmRpdlwiKTtcclxuXHRpZiAoKGl0ZW1zT25QYWdlID0gbm9kZXMubGVuZ3RoKSA9PT0gMCkge1xyXG5cdFx0bm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZS5pdGc+dGJvZHk+dHJcIik7XHJcblx0XHRpdGVtc09uUGFnZSA9IG5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChpdGVtc09uUGFnZSA+IDAgJiYgbm9kZXNbMF0ucXVlcnlTZWxlY3RvcihcInRoXCIpICE9PSBudWxsKSB7XHJcblx0XHRcdC0taXRlbXNPblBhZ2U7IC8vIEhlYWRlciByb3dcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGl0ZW1zT25QYWdlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJdGVtc0ZvckdhbGxlcnlMaXN0KGh0bWwsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpIHtcclxuXHRsZXQgaXRlbUNvdW50ID0gbnVsbDtcclxuXHRmb3IgKGNvbnN0IGlwTm9kZSBvZiBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwLmlwXCIpKSB7XHJcblx0XHRjb25zdCBpbmZvID0gZ2V0SXRlbXNGcm9tRnVsbEluZm8oaXBOb2RlLnRleHRDb250ZW50LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KTtcclxuXHRcdGlmIChpbmZvICE9PSBudWxsKSB7IHJldHVybiBpbmZvOyB9XHJcblxyXG5cdFx0Y29uc3QgbWF0Y2ggPSByZVJlc3VsdHMuZXhlYyhpcE5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdGl0ZW1Db3VudCA9IHBhcnNlTnVtYmVyKG1hdGNoWzFdKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoaXRlbUNvdW50ID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGxldCBpdGVtc09uUGFnZSA9IGdldEl0ZW1zT25QYWdlKGh0bWwpO1xyXG5cclxuXHRjb25zdCBpdGVtc1BlclBhZ2UgPSBjYWxjdWxhdGVJdGVtc1BlclBhZ2UocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSk7XHJcblxyXG5cdHJldHVybiB7aXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFnZXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlTGlzdCkge1xyXG5cdC8vIENvdW50XHJcblx0Y29uc3Qgbm9kZXMgPSBwYWdlTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XHJcblx0Y29uc3QgcGFnZUNvdW50ID0gKG5vZGVzLmxlbmd0aCA+IDIgPyBwYXJzZU51bWJlcihub2Rlc1tub2Rlcy5sZW5ndGggLSAyXS50ZXh0Q29udGVudCwgMSkgOiAwKTtcclxuXHJcblx0Ly8gQ3VycmVudFxyXG5cdGNvbnN0IG5vZGUgPSBwYWdlTGlzdC5xdWVyeVNlbGVjdG9yKFwidGQucHRkc1wiKTtcclxuXHRjb25zdCBwYWdlQ3VycmVudCA9IChub2RlICE9PSBudWxsID8gcGFyc2VOdW1iZXIobm9kZS50ZXh0Q29udGVudCwgMSkgLSAxIDogMCk7XHJcblxyXG5cdC8vIEl0ZW1zXHJcblx0bGV0IGl0ZW1Db3VudCA9IDA7XHJcblx0bGV0IGl0ZW1zT25QYWdlID0gMDtcclxuXHRsZXQgaXRlbXNQZXJQYWdlID0gMDtcclxuXHJcblx0bGV0IHYgPSBnZXRJdGVtc0ZvckdhbGxlcnlJbWFnZXMocGFnZUxpc3QsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpO1xyXG5cdGxldCBwYWdlRmllbGROYW1lID0gbnVsbDtcclxuXHRsZXQgaXNHYWxsZXJ5TGlzdCA9IGZhbHNlO1xyXG5cdGlmICh2ICE9PSBudWxsKSB7XHJcblx0XHRwYWdlRmllbGROYW1lID0gXCJwXCI7XHJcblx0fSBlbHNlIHtcclxuXHRcdHYgPSBnZXRJdGVtc0ZvckdhbGxlcnlMaXN0KGh0bWwsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpO1xyXG5cdFx0aWYgKHYgIT09IG51bGwpIHtcclxuXHRcdFx0cGFnZUZpZWxkTmFtZSA9IFwicGFnZVwiO1xyXG5cdFx0XHRpc0dhbGxlcnlMaXN0ID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHYgIT09IG51bGwpIHtcclxuXHRcdCh7aXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlfSA9IHYpO1xyXG5cdH1cclxuXHJcblx0Ly8gVXJsIGZvcm1hdFxyXG5cdGNvbnN0IGxpbmsgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCJhW2hyZWZdXCIpO1xyXG5cdGxldCB1cmxCYXNlID0gbnVsbDtcclxuXHRpZiAobGluayAhPT0gbnVsbCAmJiBwYWdlRmllbGROYW1lICE9PSBudWxsKSB7XHJcblx0XHR1cmxCYXNlID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cdFx0dXJsQmFzZSA9IHF1ZXJ5U3RyaW5nLnJlbW92ZVF1ZXJ5UGFyYW1ldGVyKHVybEJhc2UsIHBhZ2VGaWVsZE5hbWUpO1xyXG5cdFx0aWYgKGlzR2FsbGVyeUxpc3QpIHtcclxuXHRcdFx0dXJsQmFzZSA9IHF1ZXJ5U3RyaW5nLnJlbW92ZVF1ZXJ5UGFyYW1ldGVyKHVybEJhc2UsIFwiZnJvbVwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXcgUGFnZWluYXRpb25JbmZvKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZSwgdXJsQmFzZSwgcGFnZUZpZWxkTmFtZSwgdHJ1ZSwgbnVsbCwgbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VzRm9yR2FsbGVyeUxpc3RXaXRob3V0UGFnZUluZGV4ZXMoaHRtbCwgc2VhcmNoTmF2LCB1cmwpIHtcclxuXHQvLyBVcmxcclxuXHRsZXQgbmV4dFVybCA9IG51bGw7XHJcblx0Y29uc3QgbGluayA9IHNlYXJjaE5hdi5xdWVyeVNlbGVjdG9yKFwiI3VuZXh0W2hyZWZdXCIpO1xyXG5cdGlmIChsaW5rICE9PSBudWxsKSB7XHJcblx0XHRuZXh0VXJsID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cdH1cclxuXHJcblx0Ly8gVG90YWwgY291bnRcclxuXHRsZXQgaXRlbUNvdW50ID0gMDtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNodGV4dD5wJyk7XHJcblx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdGZvciAoY29uc3QgbiBvZiBub2RlLmNoaWxkTm9kZXMpIHtcclxuXHRcdFx0aWYgKG4ubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gcmVSZXN1bHRzLmV4ZWMobi5ub2RlVmFsdWUpO1xyXG5cdFx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0XHRpdGVtQ291bnQgPSBwYXJzZU51bWJlcihtYXRjaFsxXSwgMCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zT25QYWdlID0gZ2V0SXRlbXNPblBhZ2UoaHRtbCk7XHJcblx0Y29uc3QgaXRlbXNQZXJQYWdlID0gaXRlbXNPblBhZ2U7IC8vIEFzc3VtZWQgdG8gYmUgdGhlIHNhbWVcclxuXHJcblx0cmV0dXJuIG5ldyBQYWdlaW5hdGlvbkluZm8oMCwgMCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlLCBudWxsLCBudWxsLCBmYWxzZSwgdXJsLCBuZXh0VXJsKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEluZm8oaHRtbCwgdXJsKSB7XHJcblx0aWYgKCFodG1sKSB7IGh0bWwgPSBkb2N1bWVudDsgfVxyXG5cclxuXHRjb25zdCBwYWdlTGlzdCA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5wdHRcIik7XHJcblx0aWYgKHBhZ2VMaXN0ICE9PSBudWxsKSB7IHJldHVybiBnZXRQYWdlc0ZvckdhbGxlcnlMaXN0KGh0bWwsIHBhZ2VMaXN0KTsgfVxyXG5cdGNvbnN0IHNlYXJjaE5hdiA9IGh0bWwucXVlcnlTZWxlY3RvcignLnNlYXJjaG5hdicpO1xyXG5cdGlmIChzZWFyY2hOYXYgIT09IG51bGwpIHsgcmV0dXJuIGdldFBhZ2VzRm9yR2FsbGVyeUxpc3RXaXRob3V0UGFnZUluZGV4ZXMoaHRtbCwgc2VhcmNoTmF2LCB1cmwpOyB9XHJcblx0cmV0dXJuIGdldFBhZ2VzRm9ySW1hZ2UoaHRtbCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5VXJsKG5vZGUpIHtcclxuXHRjb25zdCBsaW5rU2VsZWN0b3IgPSBcImFbaHJlZl1cIjtcclxuXHRjb25zdCBuYW1lTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5nbG5hbWVcIik7XHJcblx0aWYgKG5hbWVOb2RlICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBsaW5rID0gbmFtZU5vZGUucXVlcnlTZWxlY3RvcihsaW5rU2VsZWN0b3IpO1xyXG5cdFx0aWYgKGxpbmsgIT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdH1cclxuXHRcdGlmIChuYW1lTm9kZS5wYXJlbnROb2RlICE9PSBudWxsICYmIG5hbWVOb2RlLnBhcmVudE5vZGUubWF0Y2hlcyhsaW5rU2VsZWN0b3IpKSB7XHJcblx0XHRcdHJldHVybiBuYW1lTm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVVybHMoaHRtbCkge1xyXG5cdGlmICghaHRtbCkgeyBodG1sID0gZG9jdW1lbnQ7IH1cclxuXHJcblx0bGV0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2Lml0Zz5kaXZcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0bm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZS5pdGc+dGJvZHk+dHJcIik7XHJcblx0XHRpZiAobm9kZXMubGVuZ3RoID4gMCAmJiBub2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwidGhcIikgIT09IG51bGwpIHtcclxuXHRcdFx0bm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlcywgMSk7IC8vIE9taXQgaGVhZGVyIHJvd1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgdXJsID0gZ2V0R2FsbGVyeVVybChub2RlKTtcclxuXHRcdGlmICh1cmwgIT09IG51bGwpIHsgcmVzdWx0cy5wdXNoKHVybCk7IH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SW1hZ2VVcmxzKGh0bWwpIHtcclxuXHRpZiAoIWh0bWwpIHsgaHRtbCA9IGRvY3VtZW50OyB9XHJcblxyXG5cdGxldCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIi5nZHRsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdkdG1cIik7XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblxyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgbGluayA9IG5vZGUucXVlcnlTZWxlY3RvcihcImFbaHJlZl1cIik7XHJcblx0XHRpZiAobGluayAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXN1bHRzLnB1c2gobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0SW5mbyxcclxuXHRnZXRHYWxsZXJ5VXJscyxcclxuXHRnZXRHYWxsZXJ5SW1hZ2VVcmxzXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5jb25zdCB1cmxGcmFnbWVudCA9IHJlcXVpcmUoXCIuLi91cmwtZnJhZ21lbnRcIik7XHJcblxyXG5cclxuY29uc3Qgc2V0dGluZ3NDb250YWluZXJDbGFzcyA9IFwieC1zZXR0aW5ncy1jb250YWluZXJcIjtcclxuY29uc3Qgc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcyA9IFwieC1zZXR0aW5ncy1jb250YWluZXItaGlkZGVuXCI7XHJcbmNvbnN0IGRlZmF1bHRTZXR0aW5nc0hpZGRlbkNsYXNzID0gXCJ4LXNldHRpbmdzLWhpZGRlblwiO1xyXG5cclxubGV0IHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPSBudWxsO1xyXG5sZXQgc2V0dGluZ3NDb250YWluZXIgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExpbmsoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtbmF2LXNldHRpbmdzLWxpbmtcIjtcclxuXHJcblx0bGV0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0aWYgKG4gIT09IG51bGwpIHsgcmV0dXJuIG47IH1cclxuXHJcblx0Y29uc3QgbmF2QmFyID0gcmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXJcIik7XHJcblx0biA9IG5hdkJhci5hZGRMaW5rKFwieFwiLCBgL3Vjb25maWcucGhwJHt1cmxGcmFnbWVudC5jcmVhdGUoXCJzZXR0aW5nc1wiKX1gLCAxKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRuLmlkID0gaWQ7XHJcblx0cmV0dXJuIG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0c2V0dGluZ3NDb250YWluZXJPdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0ZXIuc3R1ZmZib3hcIik7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdHNldHRpbmdzQ29udGFpbmVyID0gc2V0dGluZ3NDb250YWluZXJPdXRlci5xdWVyeVNlbGVjdG9yKGAuJHtzZXR0aW5nc0NvbnRhaW5lckNsYXNzfWApO1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkge1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gYCR7c2V0dGluZ3NDb250YWluZXJDbGFzc30gJHtzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzfWA7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lck91dGVyLmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlkID0gXCJ4LXNldHRpbmdzXCI7XHJcblx0aWYgKCFzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkge1xyXG5cdFx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUvc2V0dGluZ3MuY3NzXCIpO1xyXG5cdFx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxuXHR9XHJcblxyXG5cdHVybEZyYWdtZW50LmFkZFJvdXRlKC9eXFwvc2V0dGluZ3MoXFwvW1xcd1xcV10qKT8kLywgb25TZXR0aW5nc1BhZ2VDaGFuZ2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25TZXR0aW5nc1BhZ2VDaGFuZ2VkKG1hdGNoKSB7XHJcblx0c2V0U2V0dGluZ3NWaXNpYmxlKG1hdGNoICE9PSBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2V0dGluZ3NWaXNpYmxlKHZpc2libGUpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXJPdXRlciA9PT0gbnVsbCB8fCBzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzKSAhPT0gdmlzaWJsZSkge1xyXG5cdFx0Ly8gTm8gY2hhbmdlXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MsICF2aXNpYmxlKTtcclxuXHJcblx0Zm9yIChjb25zdCBjaGlsZCBvZiBzZXR0aW5nc0NvbnRhaW5lck91dGVyLmNoaWxkcmVuKSB7XHJcblx0XHRpZiAoY2hpbGQgPT09IHNldHRpbmdzQ29udGFpbmVyKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKGRlZmF1bHRTZXR0aW5nc0hpZGRlbkNsYXNzLCB2aXNpYmxlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNlY3Rpb24oaGVhZGVyLCBpZCwgb3JkZXIpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZnVsbElkID0gYHgtc2V0dGluZ3Mtc2VjdGlvbi0ke2lkfWA7XHJcblxyXG5cdGxldCBzZWN0aW9uID0gc2V0dGluZ3NDb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7ZnVsbElkfWApO1xyXG5cdGlmIChzZWN0aW9uID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNlY3Rpb24uaWQgPSBmdWxsSWQ7XHJcblx0XHRzZWN0aW9uLmNsYXNzTmFtZSA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRhaW5lclwiO1xyXG5cdFx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0c2VjdGlvbi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblx0fVxyXG5cclxuXHRsZXQgY2xzID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24taGVhZGVyXCI7XHJcblx0bGV0IHNlY3Rpb25IZWFkZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nsc31gKTtcclxuXHRpZiAoc2VjdGlvbkhlYWRlciA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHRcdHNlY3Rpb25IZWFkZXIuY2xhc3NOYW1lID0gY2xzO1xyXG5cdFx0c2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlcjtcclxuXHRcdGNvbnN0IHJlbGF0aXZlID0gc2VjdGlvbi5maXJzdENoaWxkO1xyXG5cdFx0aWYgKHJlbGF0aXZlICE9PSBudWxsKSB7XHJcblx0XHRcdHNlY3Rpb24uaW5zZXJ0QmVmb3JlKHJlbGF0aXZlLCBzZWN0aW9uSGVhZGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbHMgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1jb250ZW50XCI7XHJcblx0bGV0IHNlY3Rpb25Db250ZW50ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKGAuJHtjbHN9YCk7XHJcblx0aWYgKHNlY3Rpb25Db250ZW50ID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uQ29udGVudC5jbGFzc05hbWUgPSBjbHM7XHJcblx0XHRzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzZWN0aW9uQ29udGVudDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmssXHJcblx0aW5pdGlhbGl6ZSxcclxuXHRhZGRTZWN0aW9uXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gaXNEYXJrKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDAgfHxcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4LWZvcmNlLWRhcmtcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb2N1bWVudERhcmtGbGFnKCkge1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1pcy1kYXJrXCIsIGlzRGFyaygpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXJyb3dJY29uVXJsKCkge1xyXG5cdHJldHVybiAoaXNEYXJrKCkgPyBcImh0dHBzOi8vZXhoZW50YWkub3JnL2ltZy9tci5naWZcIiA6IFwiaHR0cHM6Ly9laGd0Lm9yZy9nL21yLmdpZlwiKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGlzRGFyayxcclxuXHRzZXREb2N1bWVudERhcmtGbGFnLFxyXG5cdGdldEFycm93SWNvblVybFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtc2V0dGluZ3MtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLXRvcDotMWVtfS54LXNldHRpbmdzLWNvbnRhaW5lci54LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW57ZGlzcGxheTpub25lfS54LXNldHRpbmdzLWhpZGRlbntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS54LXNldHRpbmdzLW9wdGlvbiBzZWxlY3R7bWFyZ2luLXJpZ2h0Oi41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21hcmdpbi10b3A6MWVtfS54LXNldHRpbmdzLXNlY3Rpb24tY29udGVudHttYXJnaW46OHB4IGF1dG8gMTBweCAxMHB4O2NsZWFyOmJvdGh9Lngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJ7Zm9udC1zaXplOjEuMjVlbTtsaW5lLWhlaWdodDoxLjVlbTttYXJnaW46LjI1ZW0gMH0ueC1zZXR0aW5ncy1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IHdyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4LXdyYXA6bm93cmFwO3dpZHRoOjEwMCU7cGFkZGluZzouNWVtIDB9Lngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjI1KX06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3AtY29sb3I6cmdiYSg5MiwxMywxOCwuMjUpfS54LXNldHRpbmdzLXNlY3Rpb24tbGVmdHtmbGV4OjEgMSBhdXRvO3BhZGRpbmctcmlnaHQ6LjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0e2ZsZXg6MCAwIGF1dG87bWluLXdpZHRoOjMwJTt0ZXh0LWFsaWduOnJpZ2h0fS54LXNldHRpbmdzLXNlY3Rpb24tdGl0bGV7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb257bGluZS1oZWlnaHQ6MS4zNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb24rLngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbnttYXJnaW4tdG9wOi4yNWVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0saW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO21hcmdpbjowO3BhZGRpbmc6LjI1ZW0gLjVlbTtsaW5lLWhlaWdodDoxLjM3NWVtO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0sOnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXt3aWR0aDoyMGVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl17d2lkdGg6NWVtOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfXRleHRhcmVhLngtc2V0dGluZ3Mtc2VjdGlvbi10ZXh0YXJlYXtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjA7cGFkZGluZzouMjVlbSAuNWVtO2xpbmUtaGVpZ2h0OjEuMzc1ZW07YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO3Jlc2l6ZTp2ZXJ0aWNhbDtmb250LXNpemU6aW5oZXJpdDt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MS44NzVlbTtoZWlnaHQ6NC42MjVlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1mYW1pbHk6XFxcIkNvdXJpZXIgTmV3XFxcIixDb3VyaWVyLG1vbm9zcGFjZX06cm9vdDpub3QoLngtaXMtZGFyaykgdGV4dGFyZWEueC1zZXR0aW5ncy1zZWN0aW9uLXRleHRhcmVhe2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXIgLmxje2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDotNnB4fS54LXNldHRpbmdzLWNvbnRhaW5lciBjb2Rle2ZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsQ291cmllcixtb25vc3BhY2U7YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO2ZvbnQtd2VpZ2h0OjcwMH06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3MtY29udGFpbmVyIGNvZGV7YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfS54LXNldHRpbmdzLWxpZ2h0LXRleHR7Zm9udC13ZWlnaHQ6NDAwO29wYWNpdHk6Ljc1fS54LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmxlZnR9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGV7ZGlzcGxheTp0YWJsZX0ueC1zZXR0aW5ncy1pbnB1dC1yb3d7ZGlzcGxheTp0YWJsZS1yb3d9Lngtc2V0dGluZ3MtaW5wdXQtcm93Lngtc2V0dGluZ3MtaW5wdXQtaGVhZGVyLXJvd3tmb250LXNpemU6LjhlbTtsaW5lLWhlaWdodDoxZW07b3BhY2l0eTouNzV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGx9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbCsueC1zZXR0aW5ncy1pbnB1dC1jZWxse3BhZGRpbmctbGVmdDouMjVlbX0ueC1zZXR0aW5ncy1pbnB1dC1yb3c6bm90KC54LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3cpKy54LXNldHRpbmdzLWlucHV0LXJvdz4ueC1zZXR0aW5ncy1pbnB1dC1jZWxse3BhZGRpbmctdG9wOi4yNWVtfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLW1pZGRsZXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtZmlsbHt3aWR0aDoxMDAlfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLW5vd3JhcHt3aGl0ZS1zcGFjZTpub3dyYXB9Lngtc2V0dGluZ3MtaW5wdXQtbGFiZWx7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjAgMCAwIDFlbX0ueC1zZXR0aW5ncy1pbnB1dC1jaGVja2JveC1wcmVmaXh7dmVydGljYWwtYWxpZ246bWlkZGxlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctcmlnaHQ6LjVlbX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZ0tleSwgY29uZmlnRGVmYXVsdCkge1xyXG5cdGxldCBjb25maWcgPSBudWxsO1xyXG5cdGxldCBjb25maWdHZXRQcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWcoKSB7XHJcblx0XHRjb25zdCBjb25maWdTdHJpbmcgPSBhd2FpdCBnbS5nZXRWYWx1ZShjb25maWdLZXksIG51bGwpO1xyXG5cdFx0aWYgKHR5cGVvZihjb25maWdTdHJpbmcpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgYyA9IEpTT04ucGFyc2UoY29uZmlnU3RyaW5nKTtcclxuXHRcdFx0XHRpZiAoYyAhPT0gbnVsbCAmJiB0eXBlb2YoYykgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoYykpIHtcclxuXHRcdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWdEZWZhdWx0LCBjKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRGVmYXVsdCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXQoKSB7XHJcblx0XHRpZiAoY29uZmlnICE9PSBudWxsKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZmlnKTsgfVxyXG5cclxuXHRcdGlmIChjb25maWdHZXRQcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdGNvbmZpZ0dldFByb21pc2UgPSBsb2FkQ29uZmlnKCkudGhlbigodikgPT4gY29uZmlnID0gdik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbmZpZ0dldFByb21pc2U7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBzYXZlKCkge1xyXG5cdFx0aWYgKGNvbmZpZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRhd2FpdCBnbS5zZXRWYWx1ZShjb25maWdLZXksIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgXCJcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gYmluZElucHV0KG5vZGUsIHNldHRpbmdOYW1lLCBvcHRpb25zLCB2YWx1ZU5hbWUpIHtcclxuXHRcdGNvbnN0IGMgPSBhd2FpdCBnZXQoKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKHZhbHVlTmFtZSkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0dmFsdWVOYW1lID0gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKGNbc2V0dGluZ05hbWVdLCBvcHRpb25zLCB0cnVlKTtcclxuXHRcdFx0aWYgKHZhbGlkKSB7IG5vZGVbdmFsdWVOYW1lXSA9IHZhbHVlOyB9XHJcblx0XHR9O1xyXG5cclxuXHRcdHVwZGF0ZUlucHV0KCk7XHJcblxyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKG5vZGVbdmFsdWVOYW1lXSwgb3B0aW9ucywgZmFsc2UpO1xyXG5cdFx0XHRpZiAodmFsaWQpIHtcclxuXHRcdFx0XHRjW3NldHRpbmdOYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRcdHNhdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dXBkYXRlSW5wdXQoKTtcclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2F2ZSxcclxuXHRcdGJpbmRJbnB1dFxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0VHlwZUNvbnZlcnRPcHRpb25zID0ge307XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKSB7XHJcblx0c3dpdGNoIChub2RlLnRhZ05hbWUpIHtcclxuXHRcdGNhc2UgXCJJTlBVVFwiOlxyXG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBcImNoZWNrYm94XCIpIHsgcmV0dXJuIFwiY2hlY2tlZFwiOyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFwidmFsdWVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVHlwZSh2YWx1ZSwgb3B0aW9ucywgdG9JbnB1dCkge1xyXG5cdGlmICh0eXBlb2Yob3B0aW9ucykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucywgZGVmYXVsdFR5cGVDb252ZXJ0T3B0aW9ucywgdG9JbnB1dCk7XHJcblx0fSBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiB0eXBlb2Yob3B0aW9ucykgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mKG9wdGlvbnMudHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucy50eXBlLCBvcHRpb25zLCB0b0lucHV0KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHsgdmFsdWUsIHZhbGlkOiB0cnVlIH07XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgdHlwZU5hbWUsIG9wdGlvbnMsIHRvSW5wdXQpIHtcclxuXHRsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuXHQvLyBDb252ZXJ0XHJcblx0c3dpdGNoICh0eXBlTmFtZSkge1xyXG5cdFx0Y2FzZSBcImJvb2xlYW5cIjpcclxuXHRcdFx0dmFsdWUgPSAhIXZhbHVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJpbnRlZ2VyXCI6XHJcblx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdHZhbHVlID0gKHR5cGVOYW1lID09PSBcIm51bWJlclwiID8gcGFyc2VGbG9hdChgJHt2YWx1ZX1gKSA6IHBhcnNlSW50KGAke3ZhbHVlfWAsIDEwKSk7XHJcblx0XHRcdGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xyXG5cdFx0XHRcdHZhbHVlID0gMDtcclxuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Ly8gVHJhbnNmb3JtXHJcblx0aWYgKCF0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLmlucHV0VG9WYWx1ZSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLmlucHV0VG9WYWx1ZSh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyBMaW1pdHNcclxuXHRzd2l0Y2ggKHR5cGVOYW1lKSB7XHJcblx0XHRjYXNlIFwiaW50ZWdlclwiOlxyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWluKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA8IG9wdGlvbnMubWluKSB7IHZhbHVlID0gb3B0aW9ucy5taW47IH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1heCkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPiBvcHRpb25zLm1heCkgeyB2YWx1ZSA9IG9wdGlvbnMubWF4OyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWF4TGVuZ3RoKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZS5sZW5ndGggPiBvcHRpb25zLm1heExlbmd0aCkge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIG9wdGlvbnMubWF4TGVuZ3RoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIFRyYW5zZm9ybVxyXG5cdGlmICh0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLnZhbHVlVG9JbnB1dCkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLnZhbHVlVG9JbnB1dCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyB2YWx1ZSwgdmFsaWQgfTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNyZWF0ZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuY2xhc3MgRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCByZXNwb25zZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkZldGNoRXJyb3JcIjtcclxuXHRcdHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuXHRjb25zdHJ1Y3RvcihyZWFkeVN0YXRlLCByZXNwb25zZUhlYWRlcnMsIHJlc3BvbnNlVGV4dCwgc3RhdHVzLCBzdGF0dXNUZXh0KSB7XHJcblx0XHR0aGlzLnJlYWR5U3RhdGUgPSByZWFkeVN0YXRlO1xyXG5cdFx0dGhpcy5yZXNwb25zZUhlYWRlcnMgPSByZXNwb25zZUhlYWRlcnM7XHJcblx0XHR0aGlzLnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcclxuXHRcdHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG5cdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFByb2dyZXNzRXZlbnQge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aENvbXB1dGFibGUsIGxvYWRlZCwgdG90YWwpIHtcclxuXHRcdHRoaXMubGVuZ3RoQ29tcHV0YWJsZSA9IGxlbmd0aENvbXB1dGFibGU7XHJcblx0XHR0aGlzLmxvYWRlZCA9IGxvYWRlZDtcclxuXHRcdHRoaXMudG90YWwgPSB0b3RhbDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRSZXNwb25zZUhlYWRlck1hcChhbGxIZWFkZXJzKSB7XHJcblx0Y29uc3QgcmVzcG9uc2VIZWFkZXJzID0ge307XHJcblxyXG5cdGNvbnN0IHJlID0gL1xccyooLiopXFxzKjpcXHMqKC4qKVxccyovO1xyXG5cdGZvciAoY29uc3QgbGluZSBvZiBhbGxIZWFkZXJzLnJlcGxhY2UoL1xcclxcblxccyokLywgXCJcIikuc3BsaXQoXCJcXHJcXG5cIikpIHtcclxuXHRcdGNvbnN0IG0gPSByZS5leGVjKGxpbmUpO1xyXG5cdFx0aWYgKG0gIT09IG51bGwpIHtcclxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzW21bMV0udG9Mb3dlckNhc2UoKV0gPSBtWzJdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3BvbnNlSGVhZGVycztcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFhoclJlc3BvbnNlKHhocikge1xyXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoXHJcblx0XHR4aHIucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSksXHJcblx0XHR4aHIucmVzcG9uc2VUZXh0LFxyXG5cdFx0eGhyLnN0YXR1cyxcclxuXHRcdHhoci5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHQvL2NvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdHhoci50aW1lb3V0ID0gdGltZW91dDtcclxuXHRcdGlmICh0eXBlb2Yob3ZlcnJpZGVNaW1lVHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUob3ZlcnJpZGVNaW1lVHlwZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoaGVhZGVycyAhPT0gbnVsbCAmJiB0eXBlb2YoaGVhZGVycykgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0Zm9yIChjb25zdCBrIGluIGhlYWRlcnMpIHtcclxuXHRcdFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBrKSkgeyBjb250aW51ZTsgfVxyXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIGhlYWRlcnNba10pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoY29udmVydFhoclJlc3BvbnNlKHhocikpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke3hoci5zdGF0dXNUZXh0fSAoJHt4aHIuc3RhdHVzfSlgLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5zZW5kKGRhdGEpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydEdtUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0cmVzcG9uc2UucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHJlc3BvbnNlLnJlc3BvbnNlSGVhZGVycyksXHJcblx0XHRyZXNwb25zZS5yZXNwb25zZVRleHQsXHJcblx0XHRyZXNwb25zZS5zdGF0dXMsXHJcblx0XHRyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdGNvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IGRldGFpbHMgPSB7XHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcclxuXHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogb3ZlcnJpZGVNaW1lVHlwZSxcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0YmluYXJ5OiBiaW5hcnksXHJcblx0XHRcdHN5bmNocm9ub3VzOiBmYWxzZSxcclxuXHRcdFx0dGltZW91dDogdGltZW91dFxyXG5cdFx0fTtcclxuXHJcblx0XHRkZXRhaWxzLm9ubG9hZCA9IChlKSA9PiByZXNvbHZlKGNvbnZlcnRHbVJlc3BvbnNlKGUpKTtcclxuXHRcdGRldGFpbHMub25lcnJvciA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7ZS5zdGF0dXNUZXh0fSAoJHtlLnN0YXR1c30pYCwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub25hYm9ydCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub250aW1lb3V0ID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob25wcm9ncmVzcykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRkZXRhaWxzLm9ucHJvZ3Jlc3MgPSAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z20ueG1sSHR0cFJlcXVlc3QoZGV0YWlscyk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc0dtU3VwcG9ydGVkKHVzZUdtKSB7XHJcblx0cmV0dXJuICh1c2VHbSAmJiB0eXBlb2YoZ20ueG1sSHR0cFJlcXVlc3QpID09PSBcImZ1bmN0aW9uXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJHRVRcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHJlcXVlc3Q6IHJlcXVlc3QsXHJcblx0Z2V0OiBnZXQsXHJcblx0cG9zdDogcG9zdCxcclxuXHRnbToge1xyXG5cdFx0cmVxdWVzdDogcmVxdWVzdEdtLFxyXG5cdFx0Z2V0OiBnZXRHbSxcclxuXHRcdHBvc3Q6IHBvc3RHbSxcclxuXHR9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9Qcm9taXNlKGZuLCBzZWxmKSB7XHJcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc29sdmUoZm4uYXBwbHkoc2VsZiwgYXJncykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBnbSA9ICgob2JqZWN0cykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB2ID0gR007IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cdFx0aWYgKHYgIT09IG51bGwgJiYgdHlwZW9mKHYpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdHJldHVybiB2O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGlmIChvYmouR00gIT09IG51bGwgJiYgdHlwZW9mKG9iai5HTSkgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2JqLkdNO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNhdGNoIChlKSB7IH1cclxuXHJcblx0Y29uc3QgbWFwcGluZyA9IFtcclxuXHRcdFsgXCJnZXRWYWx1ZVwiLCBcIkdNX2dldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJzZXRWYWx1ZVwiLCBcIkdNX3NldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJkZWxldGVWYWx1ZVwiLCBcIkdNX2RlbGV0ZVZhbHVlXCIgXSxcclxuXHRcdFsgXCJ4bWxIdHRwUmVxdWVzdFwiLCBcIkdNX3htbGh0dHBSZXF1ZXN0XCIgXVxyXG5cdF07XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcHBpbmcpIHtcclxuXHRcdGxldCBwcm9taXNlID0gbnVsbDtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0Y29uc3QgZm4gPSBvYmpbdmFsdWVdO1xyXG5cdFx0XHRpZiAodHlwZW9mKGZuKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0cHJvbWlzZSA9IHRvUHJvbWlzZShmbiwgb2JqKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0cHJvbWlzZSA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdChuZXcgRXJyb3IoYE5vdCBzdXBwb3J0ZWQgKCR7a2V5fSlgKSkpO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0W2tleV0gPSBwcm9taXNlO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59KS5jYWxsKHRoaXMsIFt0aGlzLCB3aW5kb3ddKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBjb25maWdLZXkgPSBcIngtaW5maW5pdGUtc2Nyb2xsLWNvbmZpZ1wiO1xyXG5jb25zdCBjb25maWdEZWZhdWx0ID0ge1xyXG5cdGRlbGF5OiAxLCAvLyBmbG9hdCBbMC1pbmZdOyBzZWNvbmRzIGJlZm9yZSBsb2FkaW5nIGEgbmV3IHBhZ2VcclxuXHRsb2FkQXR0ZW1wdHM6IDEsIC8vIGludGVnZXIgWzAtaW5mXTsgbnVtYmVyIG9mIGF0dGVtcHRzIGZvciBsb2FkaW5nIG5ldyBwYWdlc1xyXG5cdHBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkOiAwLjUsIC8vIGZsb2F0IFswLTFdOyA1MCUgb2YgcGFnZSBtdXN0IGJlIHZpZXdlZCBiZWZvcmUgbG9hZGluZyB0aGUgbmV4dFxyXG5cdGFsbG93Rm9yR2FsbGVyeUltYWdlczogdHJ1ZSwgLy8gYm9vbGVhblxyXG5cdGFsbG93Rm9yR2FsbGVyeUxpc3RzOiB0cnVlLCAvLyBib29sZWFuXHJcblx0ZW5hYmxlZEJ5RGVmYXVsdEZvckdhbGxlcnlJbWFnZXM6IHRydWUsIC8vIGJvb2xlYW5cclxuXHRlbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUxpc3RzOiB0cnVlIC8vIGJvb2xlYW5cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2NvbmZpZ1wiKS5jcmVhdGUoY29uZmlnS2V5LCBjb25maWdEZWZhdWx0KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGVudFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlci10b3AtbGlua1xcXCIgaHJlZj1cXFwiI1xcXCI+VG9wPC9hPjxsYWJlbCBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveC1sYWJlbDBcXFwiPjxsYWJlbCBjbGFzcz1cXFwibGMgeC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveC1sYWJlbDEgeC1jaGVja2JveC1zbWFsbFxcXCI+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveFxcXCI+PHNwYW4+PC9zcGFuPiBJbmZpbml0ZSBzY3JvbGw8L2xhYmVsPjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBJbmZpbml0ZVNjcm9sbEJhc2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5wYWdlVmlld1BlcmNlbnRSZXF1aXJlZCA9IDAuNTsgLy8gNTAlIG9mIHBhZ2UgbXVzdCBiZSB2aWV3ZWQgYmVmb3JlIGxvYWRpbmcgdGhlIG5leHRcclxuXHRcdHRoaXMucGFnZU5vZGUgPSBudWxsO1xyXG5cdFx0dGhpcy5jb250YWluZXJOb2RlID0gd2luZG93O1xyXG5cclxuXHRcdHRoaXMuX2lzQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLl9zY3JvbGxZID0gMDtcclxuXHRcdHRoaXMuX29uU2Nyb2xsQ2hhbmdlZENhbGxiYWNrID0gKCkgPT4gdGhpcy5fb25TY3JvbGxDaGFuZ2VkKGZhbHNlKTtcclxuXHRcdHRoaXMuX29uV2hlZWxDYWxsYmFjayA9ICgpID0+IHRoaXMuX29uV2hlZWwoKTtcclxuXHRcdHRoaXMuX3doZWVsRGVsYXkgPSAwLjEgKiAxMDAwOyAvLyBtaWxsaXNlY29uZHNcclxuXHRcdHRoaXMuX3doZWVsVGltZW91dCA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRsb2FkTmV4dFBhZ2UoKSB7fVxyXG5cclxuXHRpc0FjdGl2ZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcclxuXHR9XHJcblx0c2V0QWN0aXZlKHZhbHVlKSB7XHJcblx0XHRpZiAodmFsdWUpIHtcclxuXHRcdFx0aWYgKHRoaXMuX2lzQWN0aXZlKSB7IHJldHVybjsgfVxyXG5cdFx0XHR0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuX3Njcm9sbFkgPSBnZXRQYWdlU2Nyb2xsWSgpO1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lck5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLl9vblNjcm9sbENoYW5nZWRDYWxsYmFjaywgZmFsc2UpO1xyXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5fb25XaGVlbENhbGxiYWNrLCBmYWxzZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoIXRoaXMuX2lzQWN0aXZlKSB7IHJldHVybjsgfVxyXG5cdFx0XHR0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmNvbnRhaW5lck5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLl9vblNjcm9sbENoYW5nZWRDYWxsYmFjaywgZmFsc2UpO1xyXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5fb25XaGVlbENhbGxiYWNrLCBmYWxzZSk7XHJcblx0XHRcdHRoaXMuX2NsZWFyV2hlZWxUaW1lb3V0KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1cGRhdGVDaGVjaygpIHtcclxuXHRcdHRoaXMuX29uU2Nyb2xsQ2hhbmdlZCh0cnVlKTtcclxuXHR9XHJcblxyXG5cdF9vblNjcm9sbENoYW5nZWQoZm9yY2UpIHtcclxuXHRcdGNvbnN0IHNjcm9sbFlOZXcgPSBnZXRQYWdlU2Nyb2xsWSgpO1xyXG5cdFx0Y29uc3Qgc2Nyb2xsWVByZSA9IHRoaXMuX3Njcm9sbFk7XHJcblx0XHR0aGlzLl9zY3JvbGxZID0gc2Nyb2xsWU5ldztcclxuXHJcblx0XHR0aGlzLl9jbGVhcldoZWVsVGltZW91dCgpO1xyXG5cclxuXHRcdC8vIE11c3QgaGF2ZSB2YWxpZCB0YXJnZXRcclxuXHRcdGlmICh0aGlzLnBhZ2VOb2RlID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdC8vIERvbid0IGxvYWQgaWYgYWxyZWFkeSBsb2FkaW5nLCBpZiBub3Qgc2Nyb2xsZWQgYXQgYWxsLCBvciBpZiBzY3JvbGxpbmcgdXBcclxuXHRcdGlmIChmb3JjZSAhPT0gdHJ1ZSkge1xyXG5cdFx0XHRpZiAoc2Nyb2xsWU5ldyA8IDEgfHwgc2Nyb2xsWU5ldyA8PSBzY3JvbGxZUHJlKSB7IHJldHVybjsgfVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIERvbid0IGxvYWQgaWYgdGhlIGN1cnJlbnQgcGFnZSBpcyBlbnRpcmVseSBvZmYtc2NyZWVuXHJcblx0XHRjb25zdCByZWN0ID0gdGhpcy5wYWdlTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGlmIChyZWN0LnkgKyByZWN0LmhlaWdodCA8IDApIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0Ly8gRG9uJ3QgbG9hZCBpZiBub3QgZW5vdWdoIG9mIHRoZSBwYWdlIGhhcyBiZWVuIHZpZXdlZFxyXG5cdFx0Y29uc3QgaGVpZ2h0ID0gZ2V0V2luZG93SGVpZ2h0KCk7XHJcblx0XHRpZiAocmVjdC55ICsgcmVjdC5oZWlnaHQgKiB0aGlzLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkID49IGhlaWdodCkgeyByZXR1cm47IH1cclxuXHJcblx0XHQvLyBMb2FkXHJcblx0XHR0aGlzLmxvYWROZXh0UGFnZSgpO1xyXG5cdH1cclxuXHJcblx0X29uV2hlZWwoKSB7XHJcblx0XHR0aGlzLl9jbGVhcldoZWVsVGltZW91dCgpO1xyXG5cdFx0dGhpcy5fd2hlZWxUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9vbldoZWVsVGltZW91dCgpLCB0aGlzLl93aGVlbERlbGF5KTtcclxuXHR9XHJcblxyXG5cdF9vbldoZWVsVGltZW91dCgpIHtcclxuXHRcdHRoaXMuX3doZWVsVGltZW91dCA9IG51bGw7XHJcblx0XHR0aGlzLl9vblNjcm9sbENoYW5nZWQodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRfY2xlYXJXaGVlbFRpbWVvdXQoKSB7XHJcblx0XHRpZiAodGhpcy5fd2hlZWxUaW1lb3V0ICE9PSBudWxsKSB7XHJcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLl93aGVlbFRpbWVvdXQpO1xyXG5cdFx0XHR0aGlzLl93aGVlbFRpbWVvdXQgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93SGVpZ2h0KCkge1xyXG5cdHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFnZVNjcm9sbFkoKSB7XHJcblx0Y29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdHJldHVybiAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvYy5zY3JvbGxUb3ApIC0gKGRvYy5jbGllbnRUb3AgfHwgMCk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRJbmZpbml0ZVNjcm9sbEJhc2VcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCByZWFkeSA9IHJlcXVpcmUoXCIuLi9yZWFkeVwiKTtcclxuY29uc3QgZmV0Y2ggPSByZXF1aXJlKFwiLi4vZmV0Y2hcIik7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuY29uc3QgcGFnaW5hdGlvbiA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnaW5hdGlvblwiKTtcclxuY29uc3Qgc2V0dGluZ3MgPSByZXF1aXJlKFwiLi4vYXBpL3NldHRpbmdzXCIpO1xyXG5jb25zdCBJbmZpbml0ZVNjcm9sbEJhc2UgPSByZXF1aXJlKFwiLi9pbmZpbml0ZS1zY3JvbGwtYmFzZVwiKS5JbmZpbml0ZVNjcm9sbEJhc2U7XHJcblxyXG5sZXQgY3VycmVudFBhZ2VUeXBlID0gbnVsbDtcclxubGV0IHNjcm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG5jbGFzcyBJbmZpbml0ZVNjcm9sbCBleHRlbmRzIEluZmluaXRlU2Nyb2xsQmFzZSB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnLCBwYWdlVHlwZSwgcGFnZU5vZGUsIHBhZ2VzSW5mbykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkID0gY29uZmlnLnBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkO1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLnBhZ2VUeXBlID0gcGFnZVR5cGU7XHJcblx0XHR0aGlzLnBhZ2VOb2RlID0gcGFnZU5vZGU7XHJcblx0XHR0aGlzLnBhZ2VzSW5mbyA9IHBhZ2VzSW5mbztcclxuXHRcdHRoaXMuY29udGVudENvbnRhaW5lciA9IG51bGw7XHJcblx0XHR0aGlzLnBhZ2VJbmRleCA9IHBhZ2VzSW5mby5oYXNQYWdlTnVtYmVycyA/IHBhZ2VzSW5mby5wYWdlQ3VycmVudCA6IDA7XHJcblxyXG5cdFx0dGhpcy5fZGVsYXlQcm9taXNlID0gbnVsbDtcclxuXHRcdHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5faXNFbmFibGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLl9pc0VuYWJsZWRDaGVja2JveCA9IG51bGw7XHJcblx0XHR0aGlzLl9wYWdlV3JhcHBlclRlbXBsYXRlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLmluaXRpYWxpemVDb250ZW50Q29udGFpbmVyKCk7XHJcblx0fVxyXG5cclxuXHJcblx0Z2V0UGFnZU1vZGUocGFnZVR5cGUpIHtcclxuXHRcdHN3aXRjaCAocGFnZVR5cGUpIHtcclxuXHRcdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0XHRyZXR1cm4gXCJpbWFnZS1saXN0XCI7XHJcblx0XHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdFx0Y2FzZSBcImZhdm9yaXRlc1wiOlxyXG5cdFx0XHRcdHJldHVybiBcImdhbGxlcnktbGlzdFwiO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZUNvbnRlbnRDb250YWluZXIoKSB7XHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIgPSB0aGlzLmNyZWF0ZUNvbnRlbnRDb250YWluZXIoKTtcclxuXHRcdHRoaXMucGFnZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jb250ZW50Q29udGFpbmVyLCB0aGlzLnBhZ2VOb2RlKTtcclxuXHJcblx0XHR0aGlzLnBhZ2VOb2RlID0gdGhpcy5jcmVhdGVXcmFwcGVkUGFnZSh0aGlzLnBhZ2VOb2RlLCB0aGlzLnBhZ2VJbmRleCk7XHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5wYWdlTm9kZSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDb250ZW50Q29udGFpbmVyKCkge1xyXG5cdFx0Y29uc3QgaHRtbCA9IHJlcXVpcmUoXCIuL2NvbnRhaW5lci5odG1sXCIpO1xyXG5cdFx0Y29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcclxuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiLngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lclwiKTtcclxuXHJcblx0XHRjb25zdCBtb2RlID0gdGhpcy5nZXRQYWdlTW9kZSh0aGlzLnBhZ2VUeXBlKTtcclxuXHRcdGlmIChtb2RlICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXgtaW5maW5pdGUtc2Nyb2xsLW1vZGVcIiwgbW9kZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdG9wID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLXRvcC1saW5rXCIpO1xyXG5cdFx0dG9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0sIGZhbHNlKTtcclxuXHJcblx0XHR0aGlzLl9pc0VuYWJsZWRDaGVja2JveCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLngtaW5maW5pdGUtc2Nyb2xsLWVuYWJsZWQtY2hlY2tib3hcIik7XHJcblx0XHR0aGlzLl9pc0VuYWJsZWRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRFbmFibGVkKHRoaXMuX2lzRW5hYmxlZENoZWNrYm94LmNoZWNrZWQpO1xyXG5cdFx0XHRpZiAodGhpcy5pc0VuYWJsZWQoKSkgeyB0aGlzLnVwZGF0ZUNoZWNrKCk7IH1cclxuXHRcdH0sIGZhbHNlKTtcclxuXHJcblx0XHRyZXR1cm4gY29udGFpbmVyO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlV3JhcHBlZFBhZ2UoY29udGVudCwgcGFnZUluZGV4KSB7XHJcblx0XHRpZiAodGhpcy5fcGFnZVdyYXBwZXJUZW1wbGF0ZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBodG1sID0gcmVxdWlyZShcIi4vcGFnZS5odG1sXCIpO1xyXG5cdFx0XHRjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xyXG5cdFx0XHR0aGlzLl9wYWdlV3JhcHBlclRlbXBsYXRlID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIueC1pbmZpbml0ZS1zY3JvbGwtcGFnZVwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB3cmFwcGVyID0gdGhpcy5fcGFnZVdyYXBwZXJUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHRjb25zdCBsaW5rID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtbGlua1wiKTtcclxuXHRcdGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB0aGlzLnBhZ2VzSW5mby5nZXRDdXJyZW50UGFnZVVybCgpKTtcclxuXHRcdGxpbmsudGV4dENvbnRlbnQgPSBgUGFnZSAke3BhZ2VJbmRleCArIDF9YCArICh0aGlzLnBhZ2VzSW5mby5oYXNQYWdlTnVtYmVycyA/IGAgb2YgJHt0aGlzLnBhZ2VzSW5mby5wYWdlQ291bnR9YCA6ICcnKTtcclxuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblx0XHRyZXR1cm4gd3JhcHBlcjtcclxuXHR9XHJcblxyXG5cclxuXHRpc0VuYWJsZWQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5faXNFbmFibGVkO1xyXG5cdH1cclxuXHJcblx0c2V0RW5hYmxlZCh2YWx1ZSkge1xyXG5cdFx0Y29uc3QgaXNDb21wbGV0ZSA9IHRoaXMuaXNDb21wbGV0ZSgpO1xyXG5cdFx0dGhpcy5faXNFbmFibGVkID0gISF2YWx1ZSAmJiAhaXNDb21wbGV0ZTtcclxuXHJcblx0XHRpZiAoIXRoaXMuX2lzTG9hZGluZykge1xyXG5cdFx0XHR0aGlzLnNldEFjdGl2ZSh0aGlzLl9pc0VuYWJsZWQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2lzRW5hYmxlZENoZWNrYm94LmNoZWNrZWQgPSB0aGlzLl9pc0VuYWJsZWQgfHwgaXNDb21wbGV0ZTtcclxuXHR9XHJcblxyXG5cdGlzQ29tcGxldGUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wYWdlc0luZm8uaXNPbkxhc3RQYWdlKCk7XHJcblx0fVxyXG5cclxuXHRnZXROZXh0UGFnZVVybCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhZ2VzSW5mby5nZXROZXh0UGFnZVVybCgpO1xyXG5cdH1cclxuXHJcblx0Z2V0UGFnZURhdGFGcm9tSHRtbChodG1sLCB1cmwpIHtcclxuXHRcdGNvbnN0IGNvbnRlbnQgPSBnZXREZWZhdWx0UGFnZUNvbnRlbnQoaHRtbCwgdGhpcy5wYWdlVHlwZSk7IC8vIGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZHRcIik7XHJcblx0XHRpZiAoY29udGVudCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG5cdFx0bGV0IGNsYXNzTmFtZSA9IGNvbnRlbnQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIjtcclxuXHRcdGlmIChjbGFzc05hbWUpIHsgY2xhc3NOYW1lICs9IFwiIFwiOyB9XHJcblx0XHRjbGFzc05hbWUgKz0gXCJ4LWluZmluaXRlLXNjcm9sbFwiO1xyXG5cdFx0Y29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc05hbWUpO1xyXG5cclxuXHRcdGNvbnN0IHBhZ2VzSW5mbyA9IHBhZ2luYXRpb24uZ2V0SW5mbyhodG1sLCB1cmwpO1xyXG5cdFx0aWYgKHBhZ2VzSW5mbyA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdHJldHVybiB7IGNvbnRlbnQsIHBhZ2VzSW5mbyB9O1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbG9hZE5leHRQYWdlKCkge1xyXG5cdFx0aWYgKCFpc1dpbmRvd1Zpc2libGUoKSkgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuXHRcdGlmICh0aGlzLl9pc0xvYWRpbmcpIHsgcmV0dXJuOyB9XHJcblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlKCkpIHtcclxuXHRcdFx0dGhpcy5wYWdlTm9kZSA9IG51bGw7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBMb2FkIGRhdGFcclxuXHRcdGNvbnN0IHVybCA9IHRoaXMuZ2V0TmV4dFBhZ2VVcmwoKTtcclxuXHRcdGlmICh1cmwgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblx0XHRsZXQgcGFnZURhdGE7XHJcblx0XHR0cnkge1xyXG5cdFx0XHR0aGlzLl9pc0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHRwYWdlRGF0YSA9IGF3YWl0IHRoaXMuZmV0Y2hQYWdlRGF0YSh1cmwsIHRoaXMuY29uZmlnLmxvYWRBdHRlbXB0cywgdGhpcy5jb25maWcuZGVsYXkpO1xyXG5cdFx0fVxyXG5cdFx0ZmluYWxseSB7XHJcblx0XHRcdHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHBhZ2VEYXRhID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdC8vIFVwZGF0ZSBwYWdlXHJcblx0XHR0aGlzLnBhZ2VzSW5mbyA9IHBhZ2VEYXRhLnBhZ2VzSW5mbztcclxuXHRcdCsrdGhpcy5wYWdlSW5kZXg7XHJcblxyXG5cdFx0Ly8gQ3JlYXRlIG5vZGVcclxuXHRcdGNvbnN0IG5ld1BhZ2VOb2RlID0gdGhpcy5jcmVhdGVXcmFwcGVkUGFnZShwYWdlRGF0YS5jb250ZW50LCB0aGlzLnBhZ2VJbmRleCk7XHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UGFnZU5vZGUpO1xyXG5cclxuXHRcdC8vIERvbmU/XHJcblx0XHRpZiAodGhpcy5pc0NvbXBsZXRlKCkpIHtcclxuXHRcdFx0dGhpcy5wYWdlTm9kZSA9IG51bGw7XHJcblx0XHRcdHRoaXMuc2V0RW5hYmxlZChmYWxzZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2VOb2RlID0gbmV3UGFnZU5vZGU7XHJcblx0XHRcdHRoaXMuc2V0QWN0aXZlKHRydWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZmV0Y2hQYWdlRGF0YSh1cmwsIGxvYWRBdHRlbXB0cywgZGVsYXkpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbG9hZEF0dGVtcHRzOyArK2kpIHtcclxuXHRcdFx0YXdhaXQgdGhpcy53YWl0Rm9yRGVsYXkoKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaC5nZXQoeyB1cmw6IHVybCB9KTtcclxuXHRcdFx0XHRjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHJlc3VsdC5yZXNwb25zZVRleHQsIFwidGV4dC9odG1sXCIpO1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSB0aGlzLmdldFBhZ2VEYXRhRnJvbUh0bWwoZG9jLCB1cmwpO1xyXG5cdFx0XHRcdGlmIChkYXRhICE9PSBudWxsKSB7IHJldHVybiBkYXRhOyB9XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0fVxyXG5cdFx0XHRmaW5hbGx5IHtcclxuXHRcdFx0XHR0aGlzLnNldERlbGF5KGRlbGF5KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblx0c2V0RGVsYXkodGltZSkge1xyXG5cdFx0dGhpcy5fZGVsYXlQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLl9kZWxheVByb21pc2UgPSBudWxsO1xyXG5cdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0fSwgdGltZSAqIDEwMDApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyB3YWl0Rm9yRGVsYXkoKSB7XHJcblx0XHRpZiAodGhpcy5fZGVsYXlQcm9taXNlICE9PSBudWxsKSB7XHJcblx0XHRcdGF3YWl0IHRoaXMuX2RlbGF5UHJvbWlzZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXR1cFBhZ2VGb2N1cygpIHtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBvblZpc2liaWxpdHlTdGF0ZUNoYW5nZWQsIGZhbHNlKTtcclxuXHRvblZpc2liaWxpdHlTdGF0ZUNoYW5nZWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNXaW5kb3dWaXNpYmxlKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHR0eXBlb2YgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSkgIT09IFwic3RyaW5nXCIgfHxcclxuXHRcdGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblZpc2liaWxpdHlTdGF0ZUNoYW5nZWQoKSB7XHJcblx0aWYgKCFpc1dpbmRvd1Zpc2libGUoKSkgeyByZXR1cm47IH1cclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBvblZpc2liaWxpdHlTdGF0ZUNoYW5nZWQsIGZhbHNlKTtcclxuXHRpbml0aWFsaXplKGN1cnJlbnRQYWdlVHlwZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXREZWZhdWx0UGFnZUNvbnRlbnQoaHRtbCwgcGFnZVR5cGUpIHtcclxuXHRsZXQgbjtcclxuXHRzd2l0Y2ggKHBhZ2VUeXBlKSB7XHJcblx0XHRjYXNlIFwiZ2FsbGVyeVwiOlxyXG5cdFx0XHRuID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkdFwiKTtcclxuXHRcdFx0aWYgKG4gIT09IG51bGwpIHsgcmV0dXJuIG47IH1cclxuXHRcdFx0biA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5lemVfZ2FsbGVyeV9wYWdlX2NvbnRhaW5lclwiKTtcclxuXHRcdFx0aWYgKG4gIT09IG51bGwpIHsgcmV0dXJuIG47IH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic2VhcmNoXCI6XHJcblx0XHRjYXNlIFwiZmF2b3JpdGVzXCI6XHJcblx0XHRcdG4gPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIuaXRnXCIpO1xyXG5cdFx0XHRpZiAobiAhPT0gbnVsbCkgeyByZXR1cm4gbjsgfVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VuYWJsZWRCeURlZmF1bHQocGFnZVR5cGUsIGNvbmZpZykge1xyXG5cdHN3aXRjaCAocGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdHJldHVybiBjb25maWcuZW5hYmxlZEJ5RGVmYXVsdEZvckdhbGxlcnlJbWFnZXM7XHJcblx0XHRjYXNlIFwic2VhcmNoXCI6XHJcblx0XHRjYXNlIFwiZmF2b3JpdGVzXCI6XHJcblx0XHRcdHJldHVybiBjb25maWcuZW5hYmxlZEJ5RGVmYXVsdEZvckdhbGxlcnlMaXN0cztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQWxsb3dlZChwYWdlVHlwZSwgY29uZmlnKSB7XHJcblx0c3dpdGNoIChwYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0cmV0dXJuIGNvbmZpZy5hbGxvd0ZvckdhbGxlcnlJbWFnZXM7XHJcblx0XHRjYXNlIFwic2VhcmNoXCI6XHJcblx0XHRjYXNlIFwiZmF2b3JpdGVzXCI6XHJcblx0XHRcdHJldHVybiBjb25maWcuYWxsb3dGb3JHYWxsZXJ5TGlzdHM7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZXNoZWV0KCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LWluZmluaXRlLXNjcm9sbFwiO1xyXG5cdGlmIChzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xyXG5cdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUocGFnZVR5cGUpIHtcclxuXHRpZiAoc2Nyb2xsZXIgIT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHBhZ2VzSW5mbyA9IHBhZ2luYXRpb24uZ2V0SW5mbyhkb2N1bWVudCwgbG9jYXRpb24uaHJlZik7XHJcblx0aWYgKHBhZ2VzSW5mbyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgcGFnZU5vZGUgPSBnZXREZWZhdWx0UGFnZUNvbnRlbnQoZG9jdW1lbnQsIHBhZ2VUeXBlKTtcclxuXHRpZiAocGFnZU5vZGUgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IGNvbmZpZyA9IGF3YWl0IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKS5nZXQoKTtcclxuXHJcblx0aWYgKCFpc0FsbG93ZWQocGFnZVR5cGUsIGNvbmZpZykpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGluc2VydFN0eWxlc2hlZXQoKTtcclxuXHJcblx0c2Nyb2xsZXIgPSBuZXcgSW5maW5pdGVTY3JvbGwoY29uZmlnLCBwYWdlVHlwZSwgcGFnZU5vZGUsIHBhZ2VzSW5mbyk7XHJcblx0c2Nyb2xsZXIuc2V0RW5hYmxlZChpc0VuYWJsZWRCeURlZmF1bHQocGFnZVR5cGUsIGNvbmZpZykpO1xyXG59XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVTZXR0aW5ncygpIHtcclxuXHRzZXR0aW5ncy5pbml0aWFsaXplKCk7XHJcblxyXG5cdGNvbnN0IHNlY3Rpb24gPSBzZXR0aW5ncy5hZGRTZWN0aW9uKFwiSW5maW5pdGUgU2Nyb2xsXCIsIFwiaW5maW5pdGUtc2Nyb2xsXCIsIDEpO1xyXG5cdGlmIChzZWN0aW9uICE9PSBudWxsKSB7XHJcblx0XHRhd2FpdCBzZXR1cFNldHRpbmdzKHNlY3Rpb24pO1xyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0dXBTZXR0aW5ncyhjb250YWluZXIpIHtcclxuXHRjb25zdCBjb25maWcgPSBhd2FpdCByZXF1aXJlKFwiLi9jb25maWdcIik7XHJcblxyXG5cdGNvbnRhaW5lci5pbm5lckhUTUwgPSByZXF1aXJlKFwiLi9zZXR0aW5ncy5odG1sXCIpO1xyXG5cdGJpbmRJbnB1dChjb25maWcsIGNvbnRhaW5lciwgXCJlbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUltYWdlc1wiLCBcImJvb2xlYW5cIik7XHJcblx0YmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBcImVuYWJsZWRCeURlZmF1bHRGb3JHYWxsZXJ5TGlzdHNcIiwgXCJib29sZWFuXCIpO1xyXG5cdGJpbmRJbnB1dChjb25maWcsIGNvbnRhaW5lciwgXCJhbGxvd0ZvckdhbGxlcnlJbWFnZXNcIiwgXCJib29sZWFuXCIpO1xyXG5cdGJpbmRJbnB1dChjb25maWcsIGNvbnRhaW5lciwgXCJhbGxvd0ZvckdhbGxlcnlMaXN0c1wiLCBcImJvb2xlYW5cIik7XHJcblx0YmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBcImRlbGF5XCIsIHtcclxuXHRcdHR5cGU6IFwibnVtYmVyXCIsXHJcblx0XHRtaW46IDBcclxuXHR9KTtcclxuXHRiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIFwibG9hZEF0dGVtcHRzXCIsIHtcclxuXHRcdHR5cGU6IFwiaW50ZWdlclwiLFxyXG5cdFx0bWluOiAwXHJcblx0fSk7XHJcblx0YmluZElucHV0KGNvbmZpZywgY29udGFpbmVyLCBcInBhZ2VWaWV3UGVyY2VudFJlcXVpcmVkXCIsIHtcclxuXHRcdHR5cGU6IFwibnVtYmVyXCIsXHJcblx0XHRtaW46IDAsXHJcblx0XHRtYXg6IDEsXHJcblx0XHR2YWx1ZVRvSW5wdXQ6ICh2KSA9PiB2ICogMTAwLFxyXG5cdFx0aW5wdXRUb1ZhbHVlOiAodikgPT4gdiAvIDEwMFxyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kSW5wdXQoY29uZmlnLCBjb250YWluZXIsIHNldHRpbmdOYW1lLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS14LXNldHRpbmdzLWZvcj0ke3NldHRpbmdOYW1lfV1gKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25maWcuYmluZElucHV0KGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS14LXNldHRpbmdzLWZvcj0ke3NldHRpbmdOYW1lfV1gKSwgc2V0dGluZ05hbWUsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcblx0c2V0dGluZ3MuYWRkTGluaygpO1xyXG5cclxuXHRjdXJyZW50UGFnZVR5cGUgPSBwYWdlVHlwZS5nZXQoZG9jdW1lbnQsIGxvY2F0aW9uKTtcclxuXHRzd2l0Y2ggKGN1cnJlbnRQYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdGNhc2UgXCJmYXZvcml0ZXNcIjpcclxuXHRcdFx0c2V0dXBQYWdlRm9jdXMoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwic2V0dGluZ3NcIjpcclxuXHRcdFx0aW5pdGlhbGl6ZVNldHRpbmdzKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1wYWdlXFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1wYWdlLWhlYWRlclxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRlbnRcXFwiPlxcclxcblxcdFxcdFxcdDxhIGNsYXNzPVxcXCJ4LWluZmluaXRlLXNjcm9sbC1wYWdlLWxpbmtcXFwiPjwvYT5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uXFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tbGVmdFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXRpdGxlXFxcIj5HYWxsZXJ5IGltYWdlczwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvblxcXCI+RW5hYmxlIGluZmluaXRlLXNjcm9sbGluZyBmb3IgZ2FsbGVyeSB0aHVtYm5haWxzLjwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxhYmVsIGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWxhYmVsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jaGVja2JveC1wcmVmaXhcXFwiPkVuYWJsZSBieSBkZWZhdWx0PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJsY1xcXCI+PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJlbmFibGVkQnlEZWZhdWx0Rm9yR2FsbGVyeUltYWdlc1xcXCIgLz48c3Bhbj48L3NwYW4+PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGxhYmVsIGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWxhYmVsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jaGVja2JveC1wcmVmaXhcXFwiPkFsbG93PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJsY1xcXCI+PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJhbGxvd0ZvckdhbGxlcnlJbWFnZXNcXFwiIC8+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPkdhbGxlcnkgbGlzdHM8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPkVuYWJsZSBpbmZpbml0ZS1zY3JvbGxpbmcgZm9yIGdhbGxlcnkgbGlzdHMuPC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC10YWJsZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8bGFiZWwgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtbGFiZWxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNoZWNrYm94LXByZWZpeFxcXCI+RW5hYmxlIGJ5IGRlZmF1bHQ8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImxjXFxcIj48aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImVuYWJsZWRCeURlZmF1bHRGb3JHYWxsZXJ5TGlzdHNcXFwiIC8+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxsYWJlbCBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1sYWJlbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2hlY2tib3gtcHJlZml4XFxcIj5BbGxvdzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwibGNcXFwiPjxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0XFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwiYWxsb3dGb3JHYWxsZXJ5TGlzdHNcXFwiIC8+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9sYWJlbD5cXHJcXG5cXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPkRlbGF5PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uXFxcIj5TZWNvbmRzIHRvIHdhaXQgYmVmb3JlIGxvYWRpbmcgdGhlIG5leHQgcGFnZS48L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tcmlnaHRcXFwiPlxcclxcblxcdFxcdDxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0XFxcIiB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMFxcXCIgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImRlbGF5XFxcIiAvPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvblxcXCI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWxlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi10aXRsZVxcXCI+TG9hZCBhdHRlbXB0czwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvblxcXCI+TWF4aW11bSBudW1iZXIgb2YgYXR0ZW1wdHMgYWxsb3dlZCB0byBsb2FkIHRoZSBuZXh0IHBhZ2UuPC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0XFxcIj5cXHJcXG5cXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIHN0ZXA9XFxcIjFcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJsb2FkQXR0ZW1wdHNcXFwiIC8+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uXFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tbGVmdFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXRpdGxlXFxcIj5SZXF1aXJlZCBwYWdlIHZpZXcgcGVyY2VudDwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvblxcXCI+UGVyY2VudCBvZiB0aGUgY3VycmVudCBwYWdlIHRoYXQgbXVzdCBiZSB2aWV3ZWQgYmVmb3JlIGxvYWRpbmcgdGhlIG5leHQuPC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0XFxcIj5cXHJcXG5cXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTAwXFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgZGF0YS14LXNldHRpbmdzLWZvcj1cXFwicGFnZVZpZXdQZXJjZW50UmVxdWlyZWRcXFwiIC8+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXJ7Y2xlYXI6Ym90aDtwb3NpdGlvbjpyZWxhdGl2ZX0ueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyW2RhdGEteC1pbmZpbml0ZS1zY3JvbGwtbW9kZT1nYWxsZXJ5LWxpc3Rde2JvcmRlcjowO2JvcmRlci10b3A6MXB4IHNvbGlkICMwMDA7d2lkdGg6MTAwJX0ueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyW2RhdGEteC1pbmZpbml0ZS1zY3JvbGwtbW9kZT1pbWFnZS1saXN0XXtib3JkZXI6MXB4IHNvbGlkICMwMDA7bWluLXdpZHRoOjcxMHB4O21heC13aWR0aDoxMjEwcHg7bWFyZ2luOjAgYXV0b30ueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO3BvaW50ZXItZXZlbnRzOm5vbmV9LngtaW5maW5pdGUtc2Nyb2xsLWhlYWRlcnt0b3A6MDtib3R0b206MDtwb3NpdGlvbjpzdGlja3k7Zm9udC1zaXplOjEwcHQ7dGV4dC1hbGlnbjpyaWdodDtsaW5lLWhlaWdodDoxLjM1ZW07ei1pbmRleDoyMDI7cG9pbnRlci1ldmVudHM6YXV0b30ueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLWNvbnRlbnR7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2hpdGUtc3BhY2U6bm93cmFwO2xpbmUtaGVpZ2h0OjEuNWVtO2hlaWdodDoyLjVlbX0ueC1pbmZpbml0ZS1zY3JvbGwtaGVhZGVyLXRvcC1saW5re2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lO3BhZGRpbmc6LjVlbTttYXJnaW4tcmlnaHQ6LjVlbX0ueC1pbmZpbml0ZS1zY3JvbGwtZW5hYmxlZC1jaGVja2JveC1sYWJlbDAsLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtbGlua3t3aGl0ZS1zcGFjZTpub3dyYXA7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzouNWVtfS54LWluZmluaXRlLXNjcm9sbC1wYWdle3Bvc2l0aW9uOnJlbGF0aXZlfS54LWluZmluaXRlLXNjcm9sbC1wYWdlLWhlYWRlcnt0b3A6MDtib3R0b206MDtwb3NpdGlvbjpzdGlja3k7Zm9udC1zaXplOjEwcHQ7dGV4dC1hbGlnbjpsZWZ0O2xpbmUtaGVpZ2h0OjEuMzVlbTt6LWluZGV4OjIwMX0ueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyW2RhdGEteC1pbmZpbml0ZS1zY3JvbGwtbW9kZT1pbWFnZS1saXN0XSAueC1pbmZpbml0ZS1zY3JvbGwtcGFnZTpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1ib3R0b206MXB4IHNvbGlkICMwMDB9LngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtbGlua3t0ZXh0LWRlY29yYXRpb246bm9uZX0ueC1pbmZpbml0ZS1zY3JvbGwtcGFnZSxkaXYjZ2R0e2JvcmRlcjowO3RleHQtYWxpZ246bGVmdDttaW4td2lkdGg6MDttYXgtd2lkdGg6bm9uZTtwYWRkaW5nOjB9LngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UgaW1ne2JvcmRlcjoxcHggc29saWQgIzAwMDttYXJnaW46MDtwYWRkaW5nOjB9LngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UgYXt0ZXh0LWRlY29yYXRpb246bm9uZX06cm9vdC54LWlzLWRhcmsgLngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lcltkYXRhLXgtaW5maW5pdGUtc2Nyb2xsLW1vZGU9aW1hZ2UtbGlzdF0sOnJvb3QueC1pcy1kYXJrIC54LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGVudCw6cm9vdC54LWlzLWRhcmsgLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6IzRmNTM1Yn06cm9vdDpub3QoLngtaXMtZGFyaykgLngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lcltkYXRhLXgtaW5maW5pdGUtc2Nyb2xsLW1vZGU9aW1hZ2UtbGlzdF0sOnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWluZmluaXRlLXNjcm9sbC1oZWFkZXItY29udGVudCw6cm9vdDpub3QoLngtaXMtZGFyaykgLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2VkZWJkZn06cm9vdDpub3QoLngtaXMtZGFyaykgLngtaW5maW5pdGUtc2Nyb2xsLWNvbnRhaW5lciw6cm9vdDpub3QoLngtaXMtZGFyaykgLngtaW5maW5pdGUtc2Nyb2xsLXBhZ2UgaW1nLDpyb290Om5vdCgueC1pcy1kYXJrKSAueC1pbmZpbml0ZS1zY3JvbGwtcGFnZTpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1jb2xvcjojNWMwZDEyfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIzMHB4KXsueC1pbmZpbml0ZS1zY3JvbGwtY29udGFpbmVyW2RhdGEteC1pbmZpbml0ZS1zY3JvbGwtbW9kZT1pbWFnZS1saXN0XXttYXgtd2lkdGg6OTcwcHh9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkwcHgpey54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXJbZGF0YS14LWluZmluaXRlLXNjcm9sbC1tb2RlPWltYWdlLWxpc3Rde21heC13aWR0aDo3MzBweH19LmxjLngtY2hlY2tib3gtc21hbGx7aGVpZ2h0OjIwcHg7bGluZS1oZWlnaHQ6MjBweDtwYWRkaW5nLWxlZnQ6MjZweDtkaXNwbGF5OmlubGluZS1ibG9ja30ubGMueC1jaGVja2JveC1zbWFsbD5zcGFue2hlaWdodDoxNnB4O3dpZHRoOjE2cHh9LmxjLngtY2hlY2tib3gtc21hbGw+c3BhbjphZnRlcntsZWZ0OjVweDt0b3A6MS4xcHg7d2lkdGg6M3B4O2hlaWdodDo4cHh9ZGl2LmV6ZV9nYWxsZXJ5X3BhZ2V7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXI6MDt3aWR0aDphdXRvO21pbi13aWR0aDowO21heC13aWR0aDpub25lO21hcmdpbjowO2NsZWFyOm5vbmU7cGFkZGluZzowO2JvcmRlci1yYWRpdXM6MH1hLmV6ZV9nYWxsZXJ5X3BhZ2VfaW5kaWNhdG9ye2Rpc3BsYXk6bm9uZX0uZXplX2dhbGxlcnlfY3VzdG9tX3RhYmxlPi5lemVfZ2FsbGVyeV9jdXN0b21fcm93Pi5lemVfZ2FsbGVyeV9jdXN0b21fY2VsbDpudGgtY2hpbGQoMSk+cDpudGgtY2hpbGQoMSl7ZGlzcGxheTpub25lfS54LWluZmluaXRlLXNjcm9sbC1jb250YWluZXIgLmdsdGh1bWJ7ei1pbmRleDoyMDN9XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXJzKHVybCkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGNvbnN0IG1hdGNoID0gL14oW14jXFw/XSopKFxcP1teI10qKT8oI1tcXHdcXFddKik/JC8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsyXSAmJiBtYXRjaFsyXS5sZW5ndGggPiAxKSB7XHJcblx0XHRjb25zdCBwYXR0ZXJuID0gLyhbXj1dKikoPzo9KFtcXHdcXFddKikpPy87XHJcblx0XHRmb3IgKGNvbnN0IHBhcnQgb2YgbWF0Y2hbMl0uc3Vic3RyKDEpLnNwbGl0KFwiJlwiKSkge1xyXG5cdFx0XHRpZiAocGFydC5sZW5ndGggPT09IDApIHsgY29udGludWU7IH1cclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybi5leGVjKHBhcnQpO1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IG1hdGNoMlsyXTtcclxuXHRcdFx0cmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChtYXRjaDJbMV0pXSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkID8gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVRdWVyeVBhcmFtZXRlcih1cmwsIHBhcmFtZXRlck5hbWUpIHtcclxuXHRyZXR1cm4gdXJsLnJlcGxhY2UoXHJcblx0XHRuZXcgUmVnRXhwKGAoWyZcXFxcP10pJHtwYXJhbWV0ZXJOYW1lfSg/Oig/Oj1bXiZdKik/KCZ8JCkpYCksXHJcblx0XHQobTAsIG0xLCBtMikgPT4gKG0xID09PSBcIj9cIiAmJiBtMiA/IFwiP1wiIDogbTIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldFVybFBhcmFtZXRlcnMsXHJcblx0cmVtb3ZlUXVlcnlQYXJhbWV0ZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgYXBpU3R5bGUgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldElkKGlkKSB7XHJcblx0cmV0dXJuIGAke2lkfS1zdHlsZXNoZWV0YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRJZChpZCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuICEhZ2V0U3R5bGVzaGVldChpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc2hlZXQoc291cmNlLCBpZCkge1xyXG5cdGlmIChhcGlTdHlsZSA9PT0gbnVsbCkgeyBhcGlTdHlsZSA9IHJlcXVpcmUoXCIuL2FwaS9zdHlsZVwiKTsgfVxyXG5cdGFwaVN0eWxlLnNldERvY3VtZW50RGFya0ZsYWcoKTtcclxuXHJcblx0Y29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGUudGV4dENvbnRlbnQgPSBzb3VyY2U7XHJcblx0aWYgKHR5cGVvZihpZCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHN0eWxlLmlkID0gZ2V0SWQoaWQpO1xyXG5cdH1cclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHRyZXR1cm4gc3R5bGU7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRoYXNTdHlsZXNoZWV0LFxyXG5cdGdldFN0eWxlc2hlZXQsXHJcblx0YWRkU3R5bGVzaGVldFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCB4UHJlZml4ID0gXCIjIXhcIjtcclxuY29uc3Qgc2VwYXJhdG9yID0gXCIvXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFtdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKGFkZEhpc3RvcnkpIHtcclxuXHRjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdGlmIChhZGRIaXN0b3J5KSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUocGF0aCkge1xyXG5cdHJldHVybiBwYXRoID8gYCR7eFByZWZpeH0ke3NlcGFyYXRvcn0ke3BhdGh9YCA6IHhQcmVmaXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGNvbnN0IHJvdXRlID0geyBtYXRjaCwgY2FsbGJhY2sgfTtcclxuXHRyb3V0ZXMucHVzaChyb3V0ZSk7XHJcblx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDEpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHR9XHJcblx0dGVzdFJvdXRlcyhbcm91dGVdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Zm9yIChsZXQgaSA9IDAsIGlpID0gcm91dGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdGNvbnN0IHJvdXRlID0gcm91dGVzW2ldO1xyXG5cdFx0aWYgKHJvdXRlLm1hdGNoID09PSBtYXRjaCAmJiByb3V0ZS5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcclxuXHRcdFx0cm91dGVzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WEZyYWdtZW50KCkge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblx0cmV0dXJuIChcclxuXHRcdCFmcmFnbWVudCB8fFxyXG5cdFx0ZnJhZ21lbnQubGVuZ3RoIDwgeFByZWZpeC5sZW5ndGggfHxcclxuXHRcdGZyYWdtZW50LnN1YnN0cigwLCB4UHJlZml4Lmxlbmd0aCkgIT09IHhQcmVmaXggfHxcclxuXHRcdChmcmFnbWVudC5sZW5ndGggPiB4UHJlZml4Lmxlbmd0aCAmJiBmcmFnbWVudFt4UHJlZml4Lmxlbmd0aF0gIT09IHNlcGFyYXRvcikpID9cclxuXHRcdG51bGwgOlxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKHhQcmVmaXgubGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdFJvdXRlcyhyb3V0ZXMpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IGdldFhGcmFnbWVudCgpO1xyXG5cdGlmIChmcmFnbWVudCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Zm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcm91dGUubWF0Y2guZXhlYyhmcmFnbWVudCk7XHJcblx0XHRyb3V0ZS5jYWxsYmFjayhtYXRjaCwgZnJhZ21lbnQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25VcmxGcmFnbWVudENoYW5nZWQoKSB7XHJcblx0dGVzdFJvdXRlcyhyb3V0ZXMpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y2xlYXI6IGNsZWFyLFxyXG5cdGNyZWF0ZTogY3JlYXRlLFxyXG5cdGFkZFJvdXRlOiBhZGRSb3V0ZSxcclxuXHRyZW1vdmVSb3V0ZTogcmVtb3ZlUm91dGVcclxufTtcclxuIl19
