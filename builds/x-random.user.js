// ==UserScript==
// @name        x/random
// @version     1.0.4
// @author      dnsev-h
// @namespace   dnsev-h
// @description Go to a random page
// @run-at      document-start
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
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-random.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-random.user.js
// ==/UserScript==
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"../query-string":5}],3:[function(require,module,exports){
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

},{"./gm":4}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const urlFragment = require("../url-fragment");
const pageType = require("../api/page-type");
const pagination = require("../api/pagination");


function getGalleryListRandomLinkParent() {
	let parent = document.querySelector(".ido .ip");
	if (parent === null) { return null; }

	const parents = parent.parentNode.querySelectorAll(".ip");
	if (parents.length > 0) {
		parent = parents[parents.length - 1];
	}

	return parent;
}

function getGalleryRandomLinkParent() {
	return document.querySelector(".gtb .gpc");
}

function insertRandomLink(isGallery) {
	const parent = isGallery ? getGalleryRandomLinkParent() : getGalleryListRandomLinkParent();
	if (parent=== null) { return; }

	const spacer = document.createElement("span");
	spacer.style.display = "inline-block";
	spacer.style.width = "0.5em";

	const link = document.createElement("a");
	link.href = urlFragment.create("random");
	link.textContent = "Random";

	parent.appendChild(spacer);
	parent.appendChild(link);
}

function isValidPageInfo(pageInfo) {
	return (
		pageInfo.itemsOnPage > 0 &&
		pageInfo.itemCount >= pageInfo.itemsPerPage * (pageInfo.pageCount - 1) &&
		pageInfo.itemCount <= pageInfo.itemsPerPage * (pageInfo.pageCount + 1));
}

function getUrlPage(currentPageType, pageIndex) {
	let url = window.location.pathname + window.location.search;
	let pageName = "page";

	switch (currentPageType) {
		case "gallery":
			pageName = "p";
			break;
	}

	const re = new RegExp(`([&?])${pageName}=[^&]*(&|$)`);
	url = url.replace(re, (m0, m1, m2) => (m1 === "?" ? "?" : m2));
	url += (url.indexOf("?") < 0 ? "?" : (url.length > 0 && url[url.length - 1] !== "&" ? "&" : ""));
	url += `${pageName}=${pageIndex}`;
	return url;
}

function getItemsUrls(html, location) {
	const htmlPageType = pageType.get(html, location);
	switch (htmlPageType) {
		case "search":
		case "favorites":
			return pagination.getGalleryUrls(html);
		case "gallery":
			return pagination.getGalleryImageUrls(html);
		default:
			return [];
	}
}

function goToUrl(url, addHistory) {
	if (addHistory) {
		window.location.href = url;
	} else {
		window.location.replace(url);
	}
}

async function goToRandom(currentPageType) {
	// Get page info
	const pageInfo = pagination.getInfo(document);
	if (pageInfo === null) { return; }

	const index = Math.floor(Math.random() * pageInfo.itemCount);
	let pageIndex;
	let itemIndex;

	if (pageInfo.itemsOnPage > 0 && isValidPageInfo(pageInfo)) {
		pageIndex = Math.floor(index / pageInfo.itemsOnPage);
		itemIndex = index - pageIndex * pageInfo.itemsOnPage;
	} else {
		pageIndex = Math.floor(Math.random() * pageInfo.pageCount);
		itemIndex = Math.floor(Math.random() * pageInfo.itemCount);
	}

	// Stop loading
	window.stop();

	// Request
	const fetch = require("../fetch");
	const url = getUrlPage(currentPageType, pageIndex);

	try {
		const result = await fetch.get({ url, gm: true });
		const html = new DOMParser().parseFromString(result.responseText, "text/html");
		const htmlLocation = {
			pathname: url.replace(/[#?][\w\W]*$/, ""),
			href: url
		};
		goToItemOnPage(html, htmlLocation, itemIndex, false);
	} catch (e) {
		// Fallback
		goToUrl(url.replace(/#[\w\W]*$/, "") + urlFragment.create(`random/item/${itemIndex}`), true);
	}
}

function goToItemOnPage(html, location, itemIndex, addHistory) {
	const itemUrls = getItemsUrls(html, location);
	if (itemUrls.length === 0) { return; }

	const url = (itemIndex >= 0 && itemIndex < itemUrls.length ? itemUrls[itemIndex] : itemUrls[itemUrls.length - 1]);
	if (!url) { return; }

	goToUrl(url, addHistory);
}


function main() {
	const currentPageType = pageType.get(document, location);

	urlFragment.addRoute(/^\/random(\/[\w\W]*)?$/, (match) => {
		if (match === null) { return; }

		urlFragment.clear();

		if (match[1] !== undefined) {
			const match2 = /^\/item(?:\/(\d+))?$/.exec(match[1]);
			if (match2 !== null) {
				const itemIndex = (match2[1] !== undefined) ?
					parseInt(match2[1], 10) :
					Math.floor(Math.random() * getItemsUrls(document, location).length);
				goToItemOnPage(document, location, itemIndex, true);
				return;
			}
		}

		goToRandom(currentPageType);
	});

	switch (currentPageType) {
		case "search":
		case "favorites":
			insertRandomLink(false);
			break;
		case "gallery":
			insertRandomLink(true);
			break;
	}
}


ready.onReady(main);

},{"../api/page-type":1,"../api/pagination":2,"../fetch":3,"../ready":7,"../url-fragment":8}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL3BhZ2UtdHlwZS5qcyIsInNyYy9hcGkvcGFnaW5hdGlvbi5qcyIsInNyYy9mZXRjaC5qcyIsInNyYy9nbS5qcyIsInNyYy9xdWVyeS1zdHJpbmcuanMiLCJzcmMvcmFuZG9tL21haW4uanMiLCJzcmMvcmVhZHkuanMiLCJzcmMvdXJsLWZyYWdtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4uL3F1ZXJ5LXN0cmluZ1wiKTtcclxuXHJcbmNvbnN0IHJlUGFnZUxpc3QgPSAvKFswLTksXSspXFxzKi1cXHMqKFswLTksXSspXFxzKm9mXFxzKihbMC05LF0rKS9pO1xyXG5jb25zdCByZVJlc3VsdHMgPSAvKFswLTksXSspXFxzKnJlc3VsdHM/L2k7XHJcblxyXG5cclxuY2xhc3MgUGFnZWluYXRpb25JbmZvIHtcclxuXHRjb25zdHJ1Y3RvcihwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2UsIHVybEJhc2UsIHBhZ2VGaWVsZE5hbWUpIHtcclxuXHRcdHRoaXMucGFnZUN1cnJlbnQgPSBwYWdlQ3VycmVudDtcclxuXHRcdHRoaXMucGFnZUNvdW50ID0gcGFnZUNvdW50O1xyXG5cdFx0dGhpcy5pdGVtQ291bnQgPSBpdGVtQ291bnQ7XHJcblx0XHR0aGlzLml0ZW1zT25QYWdlID0gaXRlbXNPblBhZ2U7XHJcblx0XHR0aGlzLml0ZW1zUGVyUGFnZSA9IGl0ZW1zUGVyUGFnZTtcclxuXHRcdHRoaXMudXJsQmFzZSA9IHVybEJhc2U7XHJcblx0XHR0aGlzLnBhZ2VGaWVsZE5hbWUgPSBwYWdlRmllbGROYW1lO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGFnZVVybChwYWdlSW5kZXgpIHtcclxuXHRcdGlmICh0aGlzLnVybEJhc2UgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy51cmxCYXNlLnJlcGxhY2UoL14oW14jXFw/XSopKFxcP1teI10qKT8oI1tcXHdcXFddKik/JC8sIChtMCwgbTEsIG0yLCBtMykgPT4ge1xyXG5cdFx0XHRtMiA9IChcclxuXHRcdFx0XHRwYWdlSW5kZXggIT09IDAgP1xyXG5cdFx0XHRcdChtMiA/IGAke20yfSYke3RoaXMucGFnZUZpZWxkTmFtZX09JHtwYWdlSW5kZXh9YCA6IGA/JHt0aGlzLnBhZ2VGaWVsZE5hbWV9PSR7cGFnZUluZGV4fWApIDpcclxuXHRcdFx0XHQobTIgfHwgXCJcIikpO1xyXG5cdFx0XHRyZXR1cm4gYCR7bTF9JHttMn0ke20zIHx8IFwiXCJ9YDtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTnVtYmVyKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRjb25zdCB2ID0gcGFyc2VJbnQodmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpLCAxMCk7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2KSA/IGRlZmF1bHRWYWx1ZSA6IHY7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlc0ZvckltYWdlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIi5zbj5kaXY+c3BhblwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYWdlQ3VycmVudCA9IHBhcnNlTnVtYmVyKG5vZGVzWzBdLnRleHRDb250ZW50LCAxKSAtIDE7XHJcblx0Y29uc3QgcGFnZUNvdW50ID0gcGFyc2VOdW1iZXIobm9kZXNbMV0udGV4dENvbnRlbnQsIDApO1xyXG5cdHJldHVybiBuZXcgUGFnZWluYXRpb25JbmZvKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIHBhZ2VDb3VudCwgMSwgMSwgbnVsbCwgbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUl0ZW1zUGVyUGFnZShwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlKSB7XHJcblx0cmV0dXJuIChwYWdlQ3VycmVudCArIDEgPCBwYWdlQ291bnQgfHwgcGFnZUN1cnJlbnQgPT09IDApID9cclxuXHRcdGl0ZW1zT25QYWdlIDpcclxuXHRcdE1hdGgucm91bmQoKGl0ZW1Db3VudCAtIGl0ZW1zT25QYWdlKSAvIHBhZ2VDdXJyZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGcm9tRnVsbEluZm8oY29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkge1xyXG5cdGNvbnN0IG1hdGNoID0gcmVQYWdlTGlzdC5leGVjKGNvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBzdGFydCA9IHBhcnNlTnVtYmVyKG1hdGNoWzFdLCAwKTtcclxuXHRjb25zdCBpdGVtc09uUGFnZSA9IHBhcnNlTnVtYmVyKG1hdGNoWzJdLCAwKSAtIChzdGFydCAtIDEpO1xyXG5cdGNvbnN0IGl0ZW1Db3VudCA9IHBhcnNlTnVtYmVyKG1hdGNoWzNdLCAwKTtcclxuXHRjb25zdCBpdGVtc1BlclBhZ2UgPSBjYWxjdWxhdGVJdGVtc1BlclBhZ2UocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSk7XHJcblxyXG5cdHJldHVybiB7aXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGb3JHYWxsZXJ5SW1hZ2VzKHBhZ2VMaXN0LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0Y29uc3Qgbm9kZSA9IHBhZ2VMaXN0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5ncGNcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsICYmIG5vZGUucGFyZW50Tm9kZSA9PT0gcGFnZUxpc3QucGFyZW50Tm9kZSkgP1xyXG5cdFx0Z2V0SXRlbXNGcm9tRnVsbEluZm8obm9kZS50ZXh0Q29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkgOlxyXG5cdFx0bnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0bGV0IGl0ZW1Db3VudCA9IG51bGw7XHJcblx0Zm9yIChjb25zdCBpcE5vZGUgb2YgaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwicC5pcFwiKSkge1xyXG5cdFx0Y29uc3QgaW5mbyA9IGdldEl0ZW1zRnJvbUZ1bGxJbmZvKGlwTm9kZS50ZXh0Q29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCk7XHJcblx0XHRpZiAoaW5mbyAhPT0gbnVsbCkgeyByZXR1cm4gaW5mbzsgfVxyXG5cclxuXHRcdGNvbnN0IG1hdGNoID0gcmVSZXN1bHRzLmV4ZWMoaXBOb2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRpdGVtQ291bnQgPSBwYXJzZU51bWJlcihtYXRjaFsxXSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKGl0ZW1Db3VudCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRsZXQgaXRlbXNPblBhZ2UgPSAwO1xyXG5cdGxldCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcImRpdi5pdGc+ZGl2XCIpO1xyXG5cdGlmICgoaXRlbXNPblBhZ2UgPSBub2Rlcy5sZW5ndGgpID09PSAwKSB7XHJcblx0XHRub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcInRhYmxlLml0Zz50Ym9keT50clwiKTtcclxuXHRcdGl0ZW1zT25QYWdlID0gbm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKGl0ZW1zT25QYWdlID4gMCAmJiBub2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwidGhcIikgIT09IG51bGwpIHtcclxuXHRcdFx0LS1pdGVtc09uUGFnZTsgLy8gSGVhZGVyIHJvd1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXNQZXJQYWdlID0gY2FsY3VsYXRlSXRlbXNQZXJQYWdlKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UpO1xyXG5cclxuXHRyZXR1cm4ge2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VzRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUxpc3QpIHtcclxuXHQvLyBDb3VudFxyXG5cdGNvbnN0IG5vZGVzID0gcGFnZUxpc3QucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xyXG5cdGNvbnN0IHBhZ2VDb3VudCA9IChub2Rlcy5sZW5ndGggPiAyID8gcGFyc2VOdW1iZXIobm9kZXNbbm9kZXMubGVuZ3RoIC0gMl0udGV4dENvbnRlbnQsIDEpIDogMCk7XHJcblxyXG5cdC8vIEN1cnJlbnRcclxuXHRjb25zdCBub2RlID0gcGFnZUxpc3QucXVlcnlTZWxlY3RvcihcInRkLnB0ZHNcIik7XHJcblx0Y29uc3QgcGFnZUN1cnJlbnQgPSAobm9kZSAhPT0gbnVsbCA/IHBhcnNlTnVtYmVyKG5vZGUudGV4dENvbnRlbnQsIDEpIC0gMSA6IDApO1xyXG5cclxuXHQvLyBJdGVtc1xyXG5cdGxldCBpdGVtQ291bnQgPSAwO1xyXG5cdGxldCBpdGVtc09uUGFnZSA9IDA7XHJcblx0bGV0IGl0ZW1zUGVyUGFnZSA9IDA7XHJcblxyXG5cdGxldCB2ID0gZ2V0SXRlbXNGb3JHYWxsZXJ5SW1hZ2VzKHBhZ2VMaXN0LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KTtcclxuXHRsZXQgcGFnZUZpZWxkTmFtZSA9IG51bGw7XHJcblx0bGV0IGlzR2FsbGVyeUxpc3QgPSBmYWxzZTtcclxuXHRpZiAodiAhPT0gbnVsbCkge1xyXG5cdFx0cGFnZUZpZWxkTmFtZSA9IFwicFwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2ID0gZ2V0SXRlbXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KTtcclxuXHRcdGlmICh2ICE9PSBudWxsKSB7XHJcblx0XHRcdHBhZ2VGaWVsZE5hbWUgPSBcInBhZ2VcIjtcclxuXHRcdFx0aXNHYWxsZXJ5TGlzdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICh2ICE9PSBudWxsKSB7XHJcblx0XHQoe2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX0gPSB2KTtcclxuXHR9XHJcblxyXG5cdC8vIFVybCBmb3JtYXRcclxuXHRjb25zdCBsaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiYVtocmVmXVwiKTtcclxuXHRsZXQgdXJsQmFzZSA9IG51bGw7XHJcblx0aWYgKGxpbmsgIT09IG51bGwgJiYgcGFnZUZpZWxkTmFtZSAhPT0gbnVsbCkge1xyXG5cdFx0dXJsQmFzZSA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdHVybEJhc2UgPSBxdWVyeVN0cmluZy5yZW1vdmVRdWVyeVBhcmFtZXRlcih1cmxCYXNlLCBwYWdlRmllbGROYW1lKTtcclxuXHRcdGlmIChpc0dhbGxlcnlMaXN0KSB7XHJcblx0XHRcdHVybEJhc2UgPSBxdWVyeVN0cmluZy5yZW1vdmVRdWVyeVBhcmFtZXRlcih1cmxCYXNlLCBcImZyb21cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmV3IFBhZ2VpbmF0aW9uSW5mbyhwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2UsIHVybEJhc2UsIHBhZ2VGaWVsZE5hbWUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SW5mbyhodG1sKSB7XHJcblx0aWYgKCFodG1sKSB7IGh0bWwgPSBkb2N1bWVudDsgfVxyXG5cclxuXHRjb25zdCBwYWdlTGlzdCA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5wdHRcIik7XHJcblx0cmV0dXJuIHBhZ2VMaXN0ICE9PSBudWxsID8gZ2V0UGFnZXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlTGlzdCkgOiBnZXRQYWdlc0ZvckltYWdlKGh0bWwpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVVybChub2RlKSB7XHJcblx0Y29uc3QgbGlua1NlbGVjdG9yID0gXCJhW2hyZWZdXCI7XHJcblx0Y29uc3QgbmFtZU5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZ2xuYW1lXCIpO1xyXG5cdGlmIChuYW1lTm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgbGluayA9IG5hbWVOb2RlLnF1ZXJ5U2VsZWN0b3IobGlua1NlbGVjdG9yKTtcclxuXHRcdGlmIChsaW5rICE9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblx0XHR9XHJcblx0XHRpZiAobmFtZU5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCAmJiBuYW1lTm9kZS5wYXJlbnROb2RlLm1hdGNoZXMobGlua1NlbGVjdG9yKSkge1xyXG5cdFx0XHRyZXR1cm4gbmFtZU5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlVcmxzKGh0bWwpIHtcclxuXHRpZiAoIWh0bWwpIHsgaHRtbCA9IGRvY3VtZW50OyB9XHJcblxyXG5cdGxldCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcImRpdi5pdGc+ZGl2XCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUuaXRnPnRib2R5PnRyXCIpO1xyXG5cdFx0aWYgKG5vZGVzLmxlbmd0aCA+IDAgJiYgbm9kZXNbMF0ucXVlcnlTZWxlY3RvcihcInRoXCIpICE9PSBudWxsKSB7XHJcblx0XHRcdG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZXMsIDEpOyAvLyBPbWl0IGhlYWRlciByb3dcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IHVybCA9IGdldEdhbGxlcnlVcmwobm9kZSk7XHJcblx0XHRpZiAodXJsICE9PSBudWxsKSB7IHJlc3VsdHMucHVzaCh1cmwpOyB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUltYWdlVXJscyhodG1sKSB7XHJcblx0aWYgKCFodG1sKSB7IGh0bWwgPSBkb2N1bWVudDsgfVxyXG5cclxuXHRsZXQgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2R0bFwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIi5nZHRtXCIpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IGxpbmsgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCJhW2hyZWZdXCIpO1xyXG5cdFx0aWYgKGxpbmsgIT09IG51bGwpIHtcclxuXHRcdFx0cmVzdWx0cy5wdXNoKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldEluZm8sXHJcblx0Z2V0R2FsbGVyeVVybHMsXHJcblx0Z2V0R2FsbGVyeUltYWdlVXJsc1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuY2xhc3MgRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCByZXNwb25zZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkZldGNoRXJyb3JcIjtcclxuXHRcdHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuXHRjb25zdHJ1Y3RvcihyZWFkeVN0YXRlLCByZXNwb25zZUhlYWRlcnMsIHJlc3BvbnNlVGV4dCwgc3RhdHVzLCBzdGF0dXNUZXh0KSB7XHJcblx0XHR0aGlzLnJlYWR5U3RhdGUgPSByZWFkeVN0YXRlO1xyXG5cdFx0dGhpcy5yZXNwb25zZUhlYWRlcnMgPSByZXNwb25zZUhlYWRlcnM7XHJcblx0XHR0aGlzLnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcclxuXHRcdHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG5cdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFByb2dyZXNzRXZlbnQge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aENvbXB1dGFibGUsIGxvYWRlZCwgdG90YWwpIHtcclxuXHRcdHRoaXMubGVuZ3RoQ29tcHV0YWJsZSA9IGxlbmd0aENvbXB1dGFibGU7XHJcblx0XHR0aGlzLmxvYWRlZCA9IGxvYWRlZDtcclxuXHRcdHRoaXMudG90YWwgPSB0b3RhbDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRSZXNwb25zZUhlYWRlck1hcChhbGxIZWFkZXJzKSB7XHJcblx0Y29uc3QgcmVzcG9uc2VIZWFkZXJzID0ge307XHJcblxyXG5cdGNvbnN0IHJlID0gL1xccyooLiopXFxzKjpcXHMqKC4qKVxccyovO1xyXG5cdGZvciAoY29uc3QgbGluZSBvZiBhbGxIZWFkZXJzLnJlcGxhY2UoL1xcclxcblxccyokLywgXCJcIikuc3BsaXQoXCJcXHJcXG5cIikpIHtcclxuXHRcdGNvbnN0IG0gPSByZS5leGVjKGxpbmUpO1xyXG5cdFx0aWYgKG0gIT09IG51bGwpIHtcclxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzW21bMV0udG9Mb3dlckNhc2UoKV0gPSBtWzJdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3BvbnNlSGVhZGVycztcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFhoclJlc3BvbnNlKHhocikge1xyXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoXHJcblx0XHR4aHIucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSksXHJcblx0XHR4aHIucmVzcG9uc2VUZXh0LFxyXG5cdFx0eGhyLnN0YXR1cyxcclxuXHRcdHhoci5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHQvL2NvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdHhoci50aW1lb3V0ID0gdGltZW91dDtcclxuXHRcdGlmICh0eXBlb2Yob3ZlcnJpZGVNaW1lVHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUob3ZlcnJpZGVNaW1lVHlwZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoaGVhZGVycyAhPT0gbnVsbCAmJiB0eXBlb2YoaGVhZGVycykgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0Zm9yIChjb25zdCBrIGluIGhlYWRlcnMpIHtcclxuXHRcdFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBrKSkgeyBjb250aW51ZTsgfVxyXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIGhlYWRlcnNba10pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoY29udmVydFhoclJlc3BvbnNlKHhocikpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke3hoci5zdGF0dXNUZXh0fSAoJHt4aHIuc3RhdHVzfSlgLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5zZW5kKGRhdGEpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydEdtUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0cmVzcG9uc2UucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHJlc3BvbnNlLnJlc3BvbnNlSGVhZGVycyksXHJcblx0XHRyZXNwb25zZS5yZXNwb25zZVRleHQsXHJcblx0XHRyZXNwb25zZS5zdGF0dXMsXHJcblx0XHRyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdGNvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IGRldGFpbHMgPSB7XHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcclxuXHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogb3ZlcnJpZGVNaW1lVHlwZSxcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0YmluYXJ5OiBiaW5hcnksXHJcblx0XHRcdHN5bmNocm9ub3VzOiBmYWxzZSxcclxuXHRcdFx0dGltZW91dDogdGltZW91dFxyXG5cdFx0fTtcclxuXHJcblx0XHRkZXRhaWxzLm9ubG9hZCA9IChlKSA9PiByZXNvbHZlKGNvbnZlcnRHbVJlc3BvbnNlKGUpKTtcclxuXHRcdGRldGFpbHMub25lcnJvciA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7ZS5zdGF0dXNUZXh0fSAoJHtlLnN0YXR1c30pYCwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub25hYm9ydCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub250aW1lb3V0ID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob25wcm9ncmVzcykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRkZXRhaWxzLm9ucHJvZ3Jlc3MgPSAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z20ueG1sSHR0cFJlcXVlc3QoZGV0YWlscyk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc0dtU3VwcG9ydGVkKHVzZUdtKSB7XHJcblx0cmV0dXJuICh1c2VHbSAmJiB0eXBlb2YoZ20ueG1sSHR0cFJlcXVlc3QpID09PSBcImZ1bmN0aW9uXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJHRVRcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHJlcXVlc3Q6IHJlcXVlc3QsXHJcblx0Z2V0OiBnZXQsXHJcblx0cG9zdDogcG9zdCxcclxuXHRnbToge1xyXG5cdFx0cmVxdWVzdDogcmVxdWVzdEdtLFxyXG5cdFx0Z2V0OiBnZXRHbSxcclxuXHRcdHBvc3Q6IHBvc3RHbSxcclxuXHR9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9Qcm9taXNlKGZuLCBzZWxmKSB7XHJcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc29sdmUoZm4uYXBwbHkoc2VsZiwgYXJncykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBnbSA9ICgob2JqZWN0cykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGlmIChvYmouR00gIT09IG51bGwgJiYgdHlwZW9mKG9iai5HTSkgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2JqLkdNO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNhdGNoIChlKSB7IH1cclxuXHJcblx0Y29uc3QgbWFwcGluZyA9IFtcclxuXHRcdFsgXCJnZXRWYWx1ZVwiLCBcIkdNX2dldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJzZXRWYWx1ZVwiLCBcIkdNX3NldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJkZWxldGVWYWx1ZVwiLCBcIkdNX2RlbGV0ZVZhbHVlXCIgXSxcclxuXHRcdFsgXCJ4bWxIdHRwUmVxdWVzdFwiLCBcIkdNX3htbGh0dHBSZXF1ZXN0XCIgXVxyXG5cdF07XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcHBpbmcpIHtcclxuXHRcdGxldCBwcm9taXNlID0gbnVsbDtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0Y29uc3QgZm4gPSBvYmpbdmFsdWVdO1xyXG5cdFx0XHRpZiAodHlwZW9mKGZuKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0cHJvbWlzZSA9IHRvUHJvbWlzZShmbiwgb2JqKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0cHJvbWlzZSA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdChuZXcgRXJyb3IoYE5vdCBzdXBwb3J0ZWQgKCR7a2V5fSlgKSkpO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0W2tleV0gPSBwcm9taXNlO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59KS5jYWxsKHRoaXMsIFt0aGlzLCB3aW5kb3ddKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXJzKHVybCkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGNvbnN0IG1hdGNoID0gL14oW14jXFw/XSopKFxcP1teI10qKT8oI1tcXHdcXFddKik/JC8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsyXSAmJiBtYXRjaFsyXS5sZW5ndGggPiAxKSB7XHJcblx0XHRjb25zdCBwYXR0ZXJuID0gLyhbXj1dKikoPzo9KFtcXHdcXFddKikpPy87XHJcblx0XHRmb3IgKGNvbnN0IHBhcnQgb2YgbWF0Y2hbMl0uc3Vic3RyKDEpLnNwbGl0KFwiJlwiKSkge1xyXG5cdFx0XHRpZiAocGFydC5sZW5ndGggPT09IDApIHsgY29udGludWU7IH1cclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybi5leGVjKHBhcnQpO1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IG1hdGNoMlsyXTtcclxuXHRcdFx0cmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChtYXRjaDJbMV0pXSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkID8gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVRdWVyeVBhcmFtZXRlcih1cmwsIHBhcmFtZXRlck5hbWUpIHtcclxuXHRyZXR1cm4gdXJsLnJlcGxhY2UoXHJcblx0XHRuZXcgUmVnRXhwKGAoWyZcXFxcP10pJHtwYXJhbWV0ZXJOYW1lfSg/Oig/Oj1bXiZdKik/KCZ8JCkpYCksXHJcblx0XHQobTAsIG0xLCBtMikgPT4gKG0xID09PSBcIj9cIiAmJiBtMiA/IFwiP1wiIDogbTIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldFVybFBhcmFtZXRlcnMsXHJcblx0cmVtb3ZlUXVlcnlQYXJhbWV0ZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCByZWFkeSA9IHJlcXVpcmUoXCIuLi9yZWFkeVwiKTtcclxuY29uc3QgdXJsRnJhZ21lbnQgPSByZXF1aXJlKFwiLi4vdXJsLWZyYWdtZW50XCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCBwYWdpbmF0aW9uID0gcmVxdWlyZShcIi4uL2FwaS9wYWdpbmF0aW9uXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlMaXN0UmFuZG9tTGlua1BhcmVudCgpIHtcclxuXHRsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pZG8gLmlwXCIpO1xyXG5cdGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGFyZW50cyA9IHBhcmVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXBcIik7XHJcblx0aWYgKHBhcmVudHMubGVuZ3RoID4gMCkge1xyXG5cdFx0cGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHBhcmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVJhbmRvbUxpbmtQYXJlbnQoKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3RiIC5ncGNcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFJhbmRvbUxpbmsoaXNHYWxsZXJ5KSB7XHJcblx0Y29uc3QgcGFyZW50ID0gaXNHYWxsZXJ5ID8gZ2V0R2FsbGVyeVJhbmRvbUxpbmtQYXJlbnQoKSA6IGdldEdhbGxlcnlMaXN0UmFuZG9tTGlua1BhcmVudCgpO1xyXG5cdGlmIChwYXJlbnQ9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0c3BhY2VyLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG5cdHNwYWNlci5zdHlsZS53aWR0aCA9IFwiMC41ZW1cIjtcclxuXHJcblx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGxpbmsuaHJlZiA9IHVybEZyYWdtZW50LmNyZWF0ZShcInJhbmRvbVwiKTtcclxuXHRsaW5rLnRleHRDb250ZW50ID0gXCJSYW5kb21cIjtcclxuXHJcblx0cGFyZW50LmFwcGVuZENoaWxkKHNwYWNlcik7XHJcblx0cGFyZW50LmFwcGVuZENoaWxkKGxpbmspO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkUGFnZUluZm8ocGFnZUluZm8pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0cGFnZUluZm8uaXRlbXNPblBhZ2UgPiAwICYmXHJcblx0XHRwYWdlSW5mby5pdGVtQ291bnQgPj0gcGFnZUluZm8uaXRlbXNQZXJQYWdlICogKHBhZ2VJbmZvLnBhZ2VDb3VudCAtIDEpICYmXHJcblx0XHRwYWdlSW5mby5pdGVtQ291bnQgPD0gcGFnZUluZm8uaXRlbXNQZXJQYWdlICogKHBhZ2VJbmZvLnBhZ2VDb3VudCArIDEpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFnZShjdXJyZW50UGFnZVR5cGUsIHBhZ2VJbmRleCkge1xyXG5cdGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdGxldCBwYWdlTmFtZSA9IFwicGFnZVwiO1xyXG5cclxuXHRzd2l0Y2ggKGN1cnJlbnRQYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0cGFnZU5hbWUgPSBcInBcIjtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYChbJj9dKSR7cGFnZU5hbWV9PVteJl0qKCZ8JClgKTtcclxuXHR1cmwgPSB1cmwucmVwbGFjZShyZSwgKG0wLCBtMSwgbTIpID0+IChtMSA9PT0gXCI/XCIgPyBcIj9cIiA6IG0yKSk7XHJcblx0dXJsICs9ICh1cmwuaW5kZXhPZihcIj9cIikgPCAwID8gXCI/XCIgOiAodXJsLmxlbmd0aCA+IDAgJiYgdXJsW3VybC5sZW5ndGggLSAxXSAhPT0gXCImXCIgPyBcIiZcIiA6IFwiXCIpKTtcclxuXHR1cmwgKz0gYCR7cGFnZU5hbWV9PSR7cGFnZUluZGV4fWA7XHJcblx0cmV0dXJuIHVybDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNVcmxzKGh0bWwsIGxvY2F0aW9uKSB7XHJcblx0Y29uc3QgaHRtbFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGh0bWwsIGxvY2F0aW9uKTtcclxuXHRzd2l0Y2ggKGh0bWxQYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcInNlYXJjaFwiOlxyXG5cdFx0Y2FzZSBcImZhdm9yaXRlc1wiOlxyXG5cdFx0XHRyZXR1cm4gcGFnaW5hdGlvbi5nZXRHYWxsZXJ5VXJscyhodG1sKTtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdHJldHVybiBwYWdpbmF0aW9uLmdldEdhbGxlcnlJbWFnZVVybHMoaHRtbCk7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gW107XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnb1RvVXJsKHVybCwgYWRkSGlzdG9yeSkge1xyXG5cdGlmIChhZGRIaXN0b3J5KSB7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdvVG9SYW5kb20oY3VycmVudFBhZ2VUeXBlKSB7XHJcblx0Ly8gR2V0IHBhZ2UgaW5mb1xyXG5cdGNvbnN0IHBhZ2VJbmZvID0gcGFnaW5hdGlvbi5nZXRJbmZvKGRvY3VtZW50KTtcclxuXHRpZiAocGFnZUluZm8gPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGFnZUluZm8uaXRlbUNvdW50KTtcclxuXHRsZXQgcGFnZUluZGV4O1xyXG5cdGxldCBpdGVtSW5kZXg7XHJcblxyXG5cdGlmIChwYWdlSW5mby5pdGVtc09uUGFnZSA+IDAgJiYgaXNWYWxpZFBhZ2VJbmZvKHBhZ2VJbmZvKSkge1xyXG5cdFx0cGFnZUluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIHBhZ2VJbmZvLml0ZW1zT25QYWdlKTtcclxuXHRcdGl0ZW1JbmRleCA9IGluZGV4IC0gcGFnZUluZGV4ICogcGFnZUluZm8uaXRlbXNPblBhZ2U7XHJcblx0fSBlbHNlIHtcclxuXHRcdHBhZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBhZ2VJbmZvLnBhZ2VDb3VudCk7XHJcblx0XHRpdGVtSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwYWdlSW5mby5pdGVtQ291bnQpO1xyXG5cdH1cclxuXHJcblx0Ly8gU3RvcCBsb2FkaW5nXHJcblx0d2luZG93LnN0b3AoKTtcclxuXHJcblx0Ly8gUmVxdWVzdFxyXG5cdGNvbnN0IGZldGNoID0gcmVxdWlyZShcIi4uL2ZldGNoXCIpO1xyXG5cdGNvbnN0IHVybCA9IGdldFVybFBhZ2UoY3VycmVudFBhZ2VUeXBlLCBwYWdlSW5kZXgpO1xyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2guZ2V0KHsgdXJsLCBnbTogdHJ1ZSB9KTtcclxuXHRcdGNvbnN0IGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHJlc3VsdC5yZXNwb25zZVRleHQsIFwidGV4dC9odG1sXCIpO1xyXG5cdFx0Y29uc3QgaHRtbExvY2F0aW9uID0ge1xyXG5cdFx0XHRwYXRobmFtZTogdXJsLnJlcGxhY2UoL1sjP11bXFx3XFxXXSokLywgXCJcIiksXHJcblx0XHRcdGhyZWY6IHVybFxyXG5cdFx0fTtcclxuXHRcdGdvVG9JdGVtT25QYWdlKGh0bWwsIGh0bWxMb2NhdGlvbiwgaXRlbUluZGV4LCBmYWxzZSk7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0Ly8gRmFsbGJhY2tcclxuXHRcdGdvVG9VcmwodXJsLnJlcGxhY2UoLyNbXFx3XFxXXSokLywgXCJcIikgKyB1cmxGcmFnbWVudC5jcmVhdGUoYHJhbmRvbS9pdGVtLyR7aXRlbUluZGV4fWApLCB0cnVlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdvVG9JdGVtT25QYWdlKGh0bWwsIGxvY2F0aW9uLCBpdGVtSW5kZXgsIGFkZEhpc3RvcnkpIHtcclxuXHRjb25zdCBpdGVtVXJscyA9IGdldEl0ZW1zVXJscyhodG1sLCBsb2NhdGlvbik7XHJcblx0aWYgKGl0ZW1VcmxzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgdXJsID0gKGl0ZW1JbmRleCA+PSAwICYmIGl0ZW1JbmRleCA8IGl0ZW1VcmxzLmxlbmd0aCA/IGl0ZW1VcmxzW2l0ZW1JbmRleF0gOiBpdGVtVXJsc1tpdGVtVXJscy5sZW5ndGggLSAxXSk7XHJcblx0aWYgKCF1cmwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGdvVG9VcmwodXJsLCBhZGRIaXN0b3J5KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcblx0Y29uc3QgY3VycmVudFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGRvY3VtZW50LCBsb2NhdGlvbik7XHJcblxyXG5cdHVybEZyYWdtZW50LmFkZFJvdXRlKC9eXFwvcmFuZG9tKFxcL1tcXHdcXFddKik/JC8sIChtYXRjaCkgPT4ge1xyXG5cdFx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdHVybEZyYWdtZW50LmNsZWFyKCk7XHJcblxyXG5cdFx0aWYgKG1hdGNoWzFdICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gL15cXC9pdGVtKD86XFwvKFxcZCspKT8kLy5leGVjKG1hdGNoWzFdKTtcclxuXHRcdFx0aWYgKG1hdGNoMiAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdGNvbnN0IGl0ZW1JbmRleCA9IChtYXRjaDJbMV0gIT09IHVuZGVmaW5lZCkgP1xyXG5cdFx0XHRcdFx0cGFyc2VJbnQobWF0Y2gyWzFdLCAxMCkgOlxyXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2V0SXRlbXNVcmxzKGRvY3VtZW50LCBsb2NhdGlvbikubGVuZ3RoKTtcclxuXHRcdFx0XHRnb1RvSXRlbU9uUGFnZShkb2N1bWVudCwgbG9jYXRpb24sIGl0ZW1JbmRleCwgdHJ1ZSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Z29Ub1JhbmRvbShjdXJyZW50UGFnZVR5cGUpO1xyXG5cdH0pO1xyXG5cclxuXHRzd2l0Y2ggKGN1cnJlbnRQYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcInNlYXJjaFwiOlxyXG5cdFx0Y2FzZSBcImZhdm9yaXRlc1wiOlxyXG5cdFx0XHRpbnNlcnRSYW5kb21MaW5rKGZhbHNlKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiZ2FsbGVyeVwiOlxyXG5cdFx0XHRpbnNlcnRSYW5kb21MaW5rKHRydWUpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5yZWFkeS5vblJlYWR5KG1haW4pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBpc1JlYWR5VmFsdWUgPSBmYWxzZTtcclxubGV0IGNhbGxiYWNrcyA9IG51bGw7XHJcbmxldCBjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5jb25zdCBjaGVja0ludGVydmFsUmF0ZSA9IDI1MDtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0hvb2tlZCgpIHtcclxuXHRyZXR1cm4gY2FsbGJhY2tzICE9PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob29rKCkge1xyXG5cdGNhbGxiYWNrcyA9IFtdO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoY2hlY2tJZlJlYWR5LCBjaGVja0ludGVydmFsUmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaG9vaygpIHtcclxuXHRjb25zdCBjYnMgPSBjYWxsYmFja3M7XHJcblxyXG5cdGNhbGxiYWNrcyA9IG51bGw7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjbGVhckludGVydmFsKGNoZWNrSW50ZXJ2YWxJZCk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuXHJcblx0aW52b2tlKGNicyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZShjYWxsYmFja3MpIHtcclxuXHRmb3IgKGxldCBjYiBvZiBjYWxsYmFja3MpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNiKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuXHRpZiAoaXNSZWFkeVZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRpZiAoaXNIb29rZWQoKSkgeyB1bmhvb2soKTsgfVxyXG5cdFx0aXNSZWFkeVZhbHVlID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcclxuXHRpc1JlYWR5KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvblJlYWR5KGNhbGxiYWNrKSB7XHJcblx0aWYgKGlzUmVhZHkoKSkge1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghaXNIb29rZWQoKSkgeyBob29rKCk7IH1cclxuXHJcblx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0b25SZWFkeTogb25SZWFkeSxcclxuXHRnZXQgaXNSZWFkeSgpIHsgcmV0dXJuIGlzUmVhZHkoKTsgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCB4UHJlZml4ID0gXCIjIXhcIjtcclxuY29uc3Qgc2VwYXJhdG9yID0gXCIvXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFtdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKGFkZEhpc3RvcnkpIHtcclxuXHRjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdGlmIChhZGRIaXN0b3J5KSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUocGF0aCkge1xyXG5cdHJldHVybiBwYXRoID8gYCR7eFByZWZpeH0ke3NlcGFyYXRvcn0ke3BhdGh9YCA6IHhQcmVmaXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGNvbnN0IHJvdXRlID0geyBtYXRjaCwgY2FsbGJhY2sgfTtcclxuXHRyb3V0ZXMucHVzaChyb3V0ZSk7XHJcblx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDEpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHR9XHJcblx0dGVzdFJvdXRlcyhbcm91dGVdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Zm9yIChsZXQgaSA9IDAsIGlpID0gcm91dGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdGNvbnN0IHJvdXRlID0gcm91dGVzW2ldO1xyXG5cdFx0aWYgKHJvdXRlLm1hdGNoID09PSBtYXRjaCAmJiByb3V0ZS5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcclxuXHRcdFx0cm91dGVzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WEZyYWdtZW50KCkge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblx0cmV0dXJuIChcclxuXHRcdCFmcmFnbWVudCB8fFxyXG5cdFx0ZnJhZ21lbnQubGVuZ3RoIDwgeFByZWZpeC5sZW5ndGggfHxcclxuXHRcdGZyYWdtZW50LnN1YnN0cigwLCB4UHJlZml4Lmxlbmd0aCkgIT09IHhQcmVmaXggfHxcclxuXHRcdChmcmFnbWVudC5sZW5ndGggPiB4UHJlZml4Lmxlbmd0aCAmJiBmcmFnbWVudFt4UHJlZml4Lmxlbmd0aF0gIT09IHNlcGFyYXRvcikpID9cclxuXHRcdG51bGwgOlxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKHhQcmVmaXgubGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdFJvdXRlcyhyb3V0ZXMpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IGdldFhGcmFnbWVudCgpO1xyXG5cdGlmIChmcmFnbWVudCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Zm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcm91dGUubWF0Y2guZXhlYyhmcmFnbWVudCk7XHJcblx0XHRyb3V0ZS5jYWxsYmFjayhtYXRjaCwgZnJhZ21lbnQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25VcmxGcmFnbWVudENoYW5nZWQoKSB7XHJcblx0dGVzdFJvdXRlcyhyb3V0ZXMpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y2xlYXI6IGNsZWFyLFxyXG5cdGNyZWF0ZTogY3JlYXRlLFxyXG5cdGFkZFJvdXRlOiBhZGRSb3V0ZSxcclxuXHRyZW1vdmVSb3V0ZTogcmVtb3ZlUm91dGVcclxufTtcclxuIl19
