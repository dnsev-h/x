// ==UserScript==
// @name        x/random
// @version     1.0.5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL3BhZ2UtdHlwZS5qcyIsInNyYy9hcGkvcGFnaW5hdGlvbi5qcyIsInNyYy9mZXRjaC5qcyIsInNyYy9nbS5qcyIsInNyYy9xdWVyeS1zdHJpbmcuanMiLCJzcmMvcmFuZG9tL21haW4uanMiLCJzcmMvcmVhZHkuanMiLCJzcmMvdXJsLWZyYWdtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG92ZXJyaWRlQXR0cmlidXRlTmFtZSA9IFwiZGF0YS14LW92ZXJyaWRlLXBhZ2UtdHlwZVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldE92ZXJyaWRlKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZSgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHRyZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChkb2MsIGxvY2F0aW9uKSB7XHJcblx0Y29uc3Qgb3ZlcnJpZGVUeXBlID0gZ2V0T3ZlcnJpZGUoKTtcclxuXHRpZiAob3ZlcnJpZGVUeXBlICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gb3ZlcnJpZGVUeXBlO1xyXG5cdH1cclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9ZmF2Y2F0XVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZmF2b3JpdGVzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiLmdtIGgxI2duXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5XCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX291dGVyXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZXR0aW5nc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjdG9ycmVudGluZm9cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInRvcnJlbnRJbmZvXCI7XHJcblx0fVxyXG5cclxuXHRsZXQgbiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keT4uZD5wXCIpO1xyXG5cdGlmIChcclxuXHRcdChuICE9PSBudWxsICYmIC9nYWxsZXJ5XFxzK2hhc1xccytiZWVuXFxzK3JlbW92ZWQvaS50ZXN0KG4udGV4dENvbnRlbnQpKSB8fFxyXG5cdFx0ZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZXplX2RnYWxsZXJ5X3RhYmxlXCIpICE9PSBudWxsKSB7IC8vIGV6ZSByZXN1cnJlY3Rpb25cclxuXHRcdHJldHVybiBcImRlbGV0ZWRHYWxsZXJ5XCI7XHJcblx0fVxyXG5cclxuXHRuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRpZiAobiAhPT0gbnVsbCAmJiBsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgcCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRuLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PT0gbG9jYXRpb24uaHJlZiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCAzKSAhPT0gXCIvdC9cIiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCA1KSAhPT0gXCIvaW1nL1wiKSB7XHJcblx0XHRcdHJldHVybiBcInBhbmRhXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBVbmtub3duXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQsXHJcblx0Z2V0T3ZlcnJpZGUsXHJcblx0c2V0T3ZlcnJpZGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBxdWVyeVN0cmluZyA9IHJlcXVpcmUoXCIuLi9xdWVyeS1zdHJpbmdcIik7XHJcblxyXG5jb25zdCByZVBhZ2VMaXN0ID0gLyhbMC05LF0rKVxccyotXFxzKihbMC05LF0rKVxccypvZlxccyooWzAtOSxdKykvaTtcclxuY29uc3QgcmVSZXN1bHRzID0gLyhbMC05LF0rKVxccypyZXN1bHRzPy9pO1xyXG5cclxuXHJcbmNsYXNzIFBhZ2VpbmF0aW9uSW5mbyB7XHJcblx0Y29uc3RydWN0b3IocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlLCB1cmxCYXNlLCBwYWdlRmllbGROYW1lKSB7XHJcblx0XHR0aGlzLnBhZ2VDdXJyZW50ID0gcGFnZUN1cnJlbnQ7XHJcblx0XHR0aGlzLnBhZ2VDb3VudCA9IHBhZ2VDb3VudDtcclxuXHRcdHRoaXMuaXRlbUNvdW50ID0gaXRlbUNvdW50O1xyXG5cdFx0dGhpcy5pdGVtc09uUGFnZSA9IGl0ZW1zT25QYWdlO1xyXG5cdFx0dGhpcy5pdGVtc1BlclBhZ2UgPSBpdGVtc1BlclBhZ2U7XHJcblx0XHR0aGlzLnVybEJhc2UgPSB1cmxCYXNlO1xyXG5cdFx0dGhpcy5wYWdlRmllbGROYW1lID0gcGFnZUZpZWxkTmFtZTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVBhZ2VVcmwocGFnZUluZGV4KSB7XHJcblx0XHRpZiAodGhpcy51cmxCYXNlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMudXJsQmFzZS5yZXBsYWNlKC9eKFteI1xcP10qKShcXD9bXiNdKik/KCNbXFx3XFxXXSopPyQvLCAobTAsIG0xLCBtMiwgbTMpID0+IHtcclxuXHRcdFx0bTIgPSAoXHJcblx0XHRcdFx0cGFnZUluZGV4ICE9PSAwID9cclxuXHRcdFx0XHQobTIgPyBgJHttMn0mJHt0aGlzLnBhZ2VGaWVsZE5hbWV9PSR7cGFnZUluZGV4fWAgOiBgPyR7dGhpcy5wYWdlRmllbGROYW1lfT0ke3BhZ2VJbmRleH1gKSA6XHJcblx0XHRcdFx0KG0yIHx8IFwiXCIpKTtcclxuXHRcdFx0cmV0dXJuIGAke20xfSR7bTJ9JHttMyB8fCBcIlwifWA7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwYXJzZU51bWJlcih2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0Y29uc3QgdiA9IHBhcnNlSW50KHZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKSwgMTApO1xyXG5cdHJldHVybiBOdW1iZXIuaXNOYU4odikgPyBkZWZhdWx0VmFsdWUgOiB2O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UGFnZXNGb3JJbWFnZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc24+ZGl2PnNwYW5cIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA8IDIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGFnZUN1cnJlbnQgPSBwYXJzZU51bWJlcihub2Rlc1swXS50ZXh0Q29udGVudCwgMSkgLSAxO1xyXG5cdGNvbnN0IHBhZ2VDb3VudCA9IHBhcnNlTnVtYmVyKG5vZGVzWzFdLnRleHRDb250ZW50LCAwKTtcclxuXHRyZXR1cm4gbmV3IFBhZ2VpbmF0aW9uSW5mbyhwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBwYWdlQ291bnQsIDEsIDEsIG51bGwsIG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVJdGVtc1BlclBhZ2UocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSkge1xyXG5cdHJldHVybiAocGFnZUN1cnJlbnQgKyAxIDwgcGFnZUNvdW50IHx8IHBhZ2VDdXJyZW50ID09PSAwKSA/XHJcblx0XHRpdGVtc09uUGFnZSA6XHJcblx0XHRNYXRoLnJvdW5kKChpdGVtQ291bnQgLSBpdGVtc09uUGFnZSkgLyBwYWdlQ3VycmVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEl0ZW1zRnJvbUZ1bGxJbmZvKGNvbnRlbnQsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpIHtcclxuXHRjb25zdCBtYXRjaCA9IHJlUGFnZUxpc3QuZXhlYyhjb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgc3RhcnQgPSBwYXJzZU51bWJlcihtYXRjaFsxXSwgMCk7XHJcblx0Y29uc3QgaXRlbXNPblBhZ2UgPSBwYXJzZU51bWJlcihtYXRjaFsyXSwgMCkgLSAoc3RhcnQgLSAxKTtcclxuXHRjb25zdCBpdGVtQ291bnQgPSBwYXJzZU51bWJlcihtYXRjaFszXSwgMCk7XHJcblx0Y29uc3QgaXRlbXNQZXJQYWdlID0gY2FsY3VsYXRlSXRlbXNQZXJQYWdlKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UpO1xyXG5cclxuXHRyZXR1cm4ge2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEl0ZW1zRm9yR2FsbGVyeUltYWdlcyhwYWdlTGlzdCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkge1xyXG5cdGNvbnN0IG5vZGUgPSBwYWdlTGlzdC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZ3BjXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCAmJiBub2RlLnBhcmVudE5vZGUgPT09IHBhZ2VMaXN0LnBhcmVudE5vZGUpID9cclxuXHRcdGdldEl0ZW1zRnJvbUZ1bGxJbmZvKG5vZGUudGV4dENvbnRlbnQsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpIDpcclxuXHRcdG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEl0ZW1zRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkge1xyXG5cdGxldCBpdGVtQ291bnQgPSBudWxsO1xyXG5cdGZvciAoY29uc3QgaXBOb2RlIG9mIGh0bWwucXVlcnlTZWxlY3RvckFsbChcInAuaXBcIikpIHtcclxuXHRcdGNvbnN0IGluZm8gPSBnZXRJdGVtc0Zyb21GdWxsSW5mbyhpcE5vZGUudGV4dENvbnRlbnQsIHBhZ2VDdXJyZW50LCBwYWdlQ291bnQpO1xyXG5cdFx0aWYgKGluZm8gIT09IG51bGwpIHsgcmV0dXJuIGluZm87IH1cclxuXHJcblx0XHRjb25zdCBtYXRjaCA9IHJlUmVzdWx0cy5leGVjKGlwTm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0aXRlbUNvdW50ID0gcGFyc2VOdW1iZXIobWF0Y2hbMV0pO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChpdGVtQ291bnQgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0bGV0IGl0ZW1zT25QYWdlID0gMDtcclxuXHRsZXQgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuaXRnPmRpdlwiKTtcclxuXHRpZiAoKGl0ZW1zT25QYWdlID0gbm9kZXMubGVuZ3RoKSA9PT0gMCkge1xyXG5cdFx0bm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZS5pdGc+dGJvZHk+dHJcIik7XHJcblx0XHRpdGVtc09uUGFnZSA9IG5vZGVzLmxlbmd0aDtcclxuXHRcdGlmIChpdGVtc09uUGFnZSA+IDAgJiYgbm9kZXNbMF0ucXVlcnlTZWxlY3RvcihcInRoXCIpICE9PSBudWxsKSB7XHJcblx0XHRcdC0taXRlbXNPblBhZ2U7IC8vIEhlYWRlciByb3dcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGl0ZW1zUGVyUGFnZSA9IGNhbGN1bGF0ZUl0ZW1zUGVyUGFnZShwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlKTtcclxuXHJcblx0cmV0dXJuIHtpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2V9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlc0ZvckdhbGxlcnlMaXN0KGh0bWwsIHBhZ2VMaXN0KSB7XHJcblx0Ly8gQ291bnRcclxuXHRjb25zdCBub2RlcyA9IHBhZ2VMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKTtcclxuXHRjb25zdCBwYWdlQ291bnQgPSAobm9kZXMubGVuZ3RoID4gMiA/IHBhcnNlTnVtYmVyKG5vZGVzW25vZGVzLmxlbmd0aCAtIDJdLnRleHRDb250ZW50LCAxKSA6IDApO1xyXG5cclxuXHQvLyBDdXJyZW50XHJcblx0Y29uc3Qgbm9kZSA9IHBhZ2VMaXN0LnF1ZXJ5U2VsZWN0b3IoXCJ0ZC5wdGRzXCIpO1xyXG5cdGNvbnN0IHBhZ2VDdXJyZW50ID0gKG5vZGUgIT09IG51bGwgPyBwYXJzZU51bWJlcihub2RlLnRleHRDb250ZW50LCAxKSAtIDEgOiAwKTtcclxuXHJcblx0Ly8gSXRlbXNcclxuXHRsZXQgaXRlbUNvdW50ID0gMDtcclxuXHRsZXQgaXRlbXNPblBhZ2UgPSAwO1xyXG5cdGxldCBpdGVtc1BlclBhZ2UgPSAwO1xyXG5cclxuXHRsZXQgdiA9IGdldEl0ZW1zRm9yR2FsbGVyeUltYWdlcyhwYWdlTGlzdCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCk7XHJcblx0bGV0IHBhZ2VGaWVsZE5hbWUgPSBudWxsO1xyXG5cdGxldCBpc0dhbGxlcnlMaXN0ID0gZmFsc2U7XHJcblx0aWYgKHYgIT09IG51bGwpIHtcclxuXHRcdHBhZ2VGaWVsZE5hbWUgPSBcInBcIjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0diA9IGdldEl0ZW1zRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCk7XHJcblx0XHRpZiAodiAhPT0gbnVsbCkge1xyXG5cdFx0XHRwYWdlRmllbGROYW1lID0gXCJwYWdlXCI7XHJcblx0XHRcdGlzR2FsbGVyeUxpc3QgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpZiAodiAhPT0gbnVsbCkge1xyXG5cdFx0KHtpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2V9ID0gdik7XHJcblx0fVxyXG5cclxuXHQvLyBVcmwgZm9ybWF0XHJcblx0Y29uc3QgbGluayA9IG5vZGUucXVlcnlTZWxlY3RvcihcImFbaHJlZl1cIik7XHJcblx0bGV0IHVybEJhc2UgPSBudWxsO1xyXG5cdGlmIChsaW5rICE9PSBudWxsICYmIHBhZ2VGaWVsZE5hbWUgIT09IG51bGwpIHtcclxuXHRcdHVybEJhc2UgPSBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblx0XHR1cmxCYXNlID0gcXVlcnlTdHJpbmcucmVtb3ZlUXVlcnlQYXJhbWV0ZXIodXJsQmFzZSwgcGFnZUZpZWxkTmFtZSk7XHJcblx0XHRpZiAoaXNHYWxsZXJ5TGlzdCkge1xyXG5cdFx0XHR1cmxCYXNlID0gcXVlcnlTdHJpbmcucmVtb3ZlUXVlcnlQYXJhbWV0ZXIodXJsQmFzZSwgXCJmcm9tXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5ldyBQYWdlaW5hdGlvbkluZm8ocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlLCB1cmxCYXNlLCBwYWdlRmllbGROYW1lKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEluZm8oaHRtbCkge1xyXG5cdGlmICghaHRtbCkgeyBodG1sID0gZG9jdW1lbnQ7IH1cclxuXHJcblx0Y29uc3QgcGFnZUxpc3QgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIucHR0XCIpO1xyXG5cdHJldHVybiBwYWdlTGlzdCAhPT0gbnVsbCA/IGdldFBhZ2VzRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUxpc3QpIDogZ2V0UGFnZXNGb3JJbWFnZShodG1sKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlVcmwobm9kZSkge1xyXG5cdGNvbnN0IGxpbmtTZWxlY3RvciA9IFwiYVtocmVmXVwiO1xyXG5cdGNvbnN0IG5hbWVOb2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLmdsbmFtZVwiKTtcclxuXHRpZiAobmFtZU5vZGUgIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IGxpbmsgPSBuYW1lTm9kZS5xdWVyeVNlbGVjdG9yKGxpbmtTZWxlY3Rvcik7XHJcblx0XHRpZiAobGluayAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG5hbWVOb2RlLnBhcmVudE5vZGUgIT09IG51bGwgJiYgbmFtZU5vZGUucGFyZW50Tm9kZS5tYXRjaGVzKGxpbmtTZWxlY3RvcikpIHtcclxuXHRcdFx0cmV0dXJuIG5hbWVOb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5VXJscyhodG1sKSB7XHJcblx0aWYgKCFodG1sKSB7IGh0bWwgPSBkb2N1bWVudDsgfVxyXG5cclxuXHRsZXQgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXYuaXRnPmRpdlwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcInRhYmxlLml0Zz50Ym9keT50clwiKTtcclxuXHRcdGlmIChub2Rlcy5sZW5ndGggPiAwICYmIG5vZGVzWzBdLnF1ZXJ5U2VsZWN0b3IoXCJ0aFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRub2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVzLCAxKTsgLy8gT21pdCBoZWFkZXIgcm93XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCB1cmwgPSBnZXRHYWxsZXJ5VXJsKG5vZGUpO1xyXG5cdFx0aWYgKHVybCAhPT0gbnVsbCkgeyByZXN1bHRzLnB1c2godXJsKTsgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJbWFnZVVybHMoaHRtbCkge1xyXG5cdGlmICghaHRtbCkgeyBodG1sID0gZG9jdW1lbnQ7IH1cclxuXHJcblx0bGV0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdkdGxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0bm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2R0bVwiKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBsaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiYVtocmVmXVwiKTtcclxuXHRcdGlmIChsaW5rICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3VsdHMucHVzaChsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRJbmZvLFxyXG5cdGdldEdhbGxlcnlVcmxzLFxyXG5cdGdldEdhbGxlcnlJbWFnZVVybHNcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBnbSA9IHJlcXVpcmUoXCIuL2dtXCIpO1xyXG5cclxuXHJcbmNsYXNzIEZldGNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgcmVzcG9uc2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJGZXRjaEVycm9yXCI7XHJcblx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXNwb25zZSB7XHJcblx0Y29uc3RydWN0b3IocmVhZHlTdGF0ZSwgcmVzcG9uc2VIZWFkZXJzLCByZXNwb25zZVRleHQsIHN0YXR1cywgc3RhdHVzVGV4dCkge1xyXG5cdFx0dGhpcy5yZWFkeVN0YXRlID0gcmVhZHlTdGF0ZTtcclxuXHRcdHRoaXMucmVzcG9uc2VIZWFkZXJzID0gcmVzcG9uc2VIZWFkZXJzO1xyXG5cdFx0dGhpcy5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHQ7XHJcblx0XHR0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuXHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBQcm9ncmVzc0V2ZW50IHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGhDb21wdXRhYmxlLCBsb2FkZWQsIHRvdGFsKSB7XHJcblx0XHR0aGlzLmxlbmd0aENvbXB1dGFibGUgPSBsZW5ndGhDb21wdXRhYmxlO1xyXG5cdFx0dGhpcy5sb2FkZWQgPSBsb2FkZWQ7XHJcblx0XHR0aGlzLnRvdGFsID0gdG90YWw7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzcG9uc2VIZWFkZXJNYXAoYWxsSGVhZGVycykge1xyXG5cdGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IHt9O1xyXG5cclxuXHRjb25zdCByZSA9IC9cXHMqKC4qKVxccyo6XFxzKiguKilcXHMqLztcclxuXHRmb3IgKGNvbnN0IGxpbmUgb2YgYWxsSGVhZGVycy5yZXBsYWNlKC9cXHJcXG5cXHMqJC8sIFwiXCIpLnNwbGl0KFwiXFxyXFxuXCIpKSB7XHJcblx0XHRjb25zdCBtID0gcmUuZXhlYyhsaW5lKTtcclxuXHRcdGlmIChtICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1ttWzFdLnRvTG93ZXJDYXNlKCldID0gbVsyXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNwb25zZUhlYWRlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0eGhyLnJlYWR5U3RhdGUsXHJcblx0XHRnZXRSZXNwb25zZUhlYWRlck1hcCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpLFxyXG5cdFx0eGhyLnJlc3BvbnNlVGV4dCxcclxuXHRcdHhoci5zdGF0dXMsXHJcblx0XHR4aHIuc3RhdHVzVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykge1xyXG5cdGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0Ly9jb25zdCBiaW5hcnkgPSBvcHRpb25zLmJpbmFyeTtcclxuXHRjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG5cdGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuXHRjb25zdCBvbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xyXG5cdGNvbnN0IG92ZXJyaWRlTWltZVR5cGUgPSBvcHRpb25zLm92ZXJyaWRlTWltZVR5cGU7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHR4aHIudGltZW91dCA9IHRpbWVvdXQ7XHJcblx0XHRpZiAodHlwZW9mKG92ZXJyaWRlTWltZVR5cGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKG92ZXJyaWRlTWltZVR5cGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGhlYWRlcnMgIT09IG51bGwgJiYgdHlwZW9mKGhlYWRlcnMpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdGZvciAoY29uc3QgayBpbiBoZWFkZXJzKSB7XHJcblx0XHRcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgaykpIHsgY29udGludWU7IH1cclxuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBoZWFkZXJzW2tdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiByZXNvbHZlKGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihgUmVxdWVzdCBlcnJvcjogJHt4aHIuc3RhdHVzVGV4dH0gKCR7eGhyLnN0YXR1c30pYCwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwidGltZW91dFwiLCAoKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJUaW1lb3V0IHJlYWNoZWRcIiwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZihvbnByb2dyZXNzKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGUpID0+IG9ucHJvZ3Jlc3MobmV3IFByb2dyZXNzRXZlbnQoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCkpKTtcclxuXHRcdH1cclxuXHJcblx0XHR4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcblx0XHR4aHIuc2VuZChkYXRhKTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRHbVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcblx0cmV0dXJuIG5ldyBSZXNwb25zZShcclxuXHRcdHJlc3BvbnNlLnJlYWR5U3RhdGUsXHJcblx0XHRnZXRSZXNwb25zZUhlYWRlck1hcChyZXNwb25zZS5yZXNwb25zZUhlYWRlcnMpLFxyXG5cdFx0cmVzcG9uc2UucmVzcG9uc2VUZXh0LFxyXG5cdFx0cmVzcG9uc2Uuc3RhdHVzLFxyXG5cdFx0cmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHRjb25zdCBiaW5hcnkgPSBvcHRpb25zLmJpbmFyeTtcclxuXHRjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG5cdGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuXHRjb25zdCBvbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xyXG5cdGNvbnN0IG92ZXJyaWRlTWltZVR5cGUgPSBvcHRpb25zLm92ZXJyaWRlTWltZVR5cGU7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCBkZXRhaWxzID0ge1xyXG5cdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXHJcblx0XHRcdG92ZXJyaWRlTWltZVR5cGU6IG92ZXJyaWRlTWltZVR5cGUsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdGJpbmFyeTogYmluYXJ5LFxyXG5cdFx0XHRzeW5jaHJvbm91czogZmFsc2UsXHJcblx0XHRcdHRpbWVvdXQ6IHRpbWVvdXRcclxuXHRcdH07XHJcblxyXG5cdFx0ZGV0YWlscy5vbmxvYWQgPSAoZSkgPT4gcmVzb2x2ZShjb252ZXJ0R21SZXNwb25zZShlKSk7XHJcblx0XHRkZXRhaWxzLm9uZXJyb3IgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke2Uuc3RhdHVzVGV4dH0gKCR7ZS5zdGF0dXN9KWAsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblx0XHRkZXRhaWxzLm9uYWJvcnQgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblx0XHRkZXRhaWxzLm9udGltZW91dCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJUaW1lb3V0IHJlYWNoZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0ZGV0YWlscy5vbnByb2dyZXNzID0gKGUpID0+IG9ucHJvZ3Jlc3MobmV3IFByb2dyZXNzRXZlbnQoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdtLnhtbEh0dHBSZXF1ZXN0KGRldGFpbHMpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaXNHbVN1cHBvcnRlZCh1c2VHbSkge1xyXG5cdHJldHVybiAodXNlR20gJiYgdHlwZW9mKGdtLnhtbEh0dHBSZXF1ZXN0KSA9PT0gXCJmdW5jdGlvblwiKSA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIkdFVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRyZXF1ZXN0OiByZXF1ZXN0LFxyXG5cdGdldDogZ2V0LFxyXG5cdHBvc3Q6IHBvc3QsXHJcblx0Z206IHtcclxuXHRcdHJlcXVlc3Q6IHJlcXVlc3RHbSxcclxuXHRcdGdldDogZ2V0R20sXHJcblx0XHRwb3N0OiBwb3N0R20sXHJcblx0fVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvUHJvbWlzZShmbiwgc2VsZikge1xyXG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNvbHZlKGZuLmFwcGx5KHNlbGYsIGFyZ3MpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJlamVjdChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufVxyXG5cclxuY29uc3QgZ20gPSAoKG9iamVjdHMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgdiA9IEdNOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHRcdGlmICh2ICE9PSBudWxsICYmIHR5cGVvZih2KSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRyZXR1cm4gdjtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRpZiAob2JqLkdNICE9PSBudWxsICYmIHR5cGVvZihvYmouR00pID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9iai5HTTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdGNvbnN0IG1hcHBpbmcgPSBbXHJcblx0XHRbIFwiZ2V0VmFsdWVcIiwgXCJHTV9nZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwic2V0VmFsdWVcIiwgXCJHTV9zZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwiZGVsZXRlVmFsdWVcIiwgXCJHTV9kZWxldGVWYWx1ZVwiIF0sXHJcblx0XHRbIFwieG1sSHR0cFJlcXVlc3RcIiwgXCJHTV94bWxodHRwUmVxdWVzdFwiIF1cclxuXHRdO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBtYXBwaW5nKSB7XHJcblx0XHRsZXQgcHJvbWlzZSA9IG51bGw7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGNvbnN0IGZuID0gb2JqW3ZhbHVlXTtcclxuXHRcdFx0aWYgKHR5cGVvZihmbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHByb21pc2UgPSB0b1Byb21pc2UoZm4sIG9iaik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChwcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdHByb21pc2UgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QobmV3IEVycm9yKGBOb3Qgc3VwcG9ydGVkICgke2tleX0pYCkpKTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdFtrZXldID0gcHJvbWlzZTtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufSkuY2FsbCh0aGlzLCBbdGhpcywgd2luZG93XSk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ207XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVycyh1cmwpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRjb25zdCBtYXRjaCA9IC9eKFteI1xcP10qKShcXD9bXiNdKik/KCNbXFx3XFxXXSopPyQvLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMl0gJiYgbWF0Y2hbMl0ubGVuZ3RoID4gMSkge1xyXG5cdFx0Y29uc3QgcGF0dGVybiA9IC8oW149XSopKD86PShbXFx3XFxXXSopKT8vO1xyXG5cdFx0Zm9yIChjb25zdCBwYXJ0IG9mIG1hdGNoWzJdLnN1YnN0cigxKS5zcGxpdChcIiZcIikpIHtcclxuXHRcdFx0aWYgKHBhcnQubGVuZ3RoID09PSAwKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRcdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4uZXhlYyhwYXJ0KTtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBtYXRjaDJbMl07XHJcblx0XHRcdHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQobWF0Y2gyWzFdKV0gPSAodmFsdWUgIT09IHVuZGVmaW5lZCA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUXVlcnlQYXJhbWV0ZXIodXJsLCBwYXJhbWV0ZXJOYW1lKSB7XHJcblx0cmV0dXJuIHVybC5yZXBsYWNlKFxyXG5cdFx0bmV3IFJlZ0V4cChgKFsmXFxcXD9dKSR7cGFyYW1ldGVyTmFtZX0oPzooPzo9W14mXSopPygmfCQpKWApLFxyXG5cdFx0KG0wLCBtMSwgbTIpID0+IChtMSA9PT0gXCI/XCIgJiYgbTIgPyBcIj9cIiA6IG0yKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRVcmxQYXJhbWV0ZXJzLFxyXG5cdHJlbW92ZVF1ZXJ5UGFyYW1ldGVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHVybEZyYWdtZW50ID0gcmVxdWlyZShcIi4uL3VybC1mcmFnbWVudFwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuY29uc3QgcGFnaW5hdGlvbiA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnaW5hdGlvblwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5TGlzdFJhbmRvbUxpbmtQYXJlbnQoKSB7XHJcblx0bGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWRvIC5pcFwiKTtcclxuXHRpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhcmVudHMgPSBwYXJlbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmlwXCIpO1xyXG5cdGlmIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXJlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlSYW5kb21MaW5rUGFyZW50KCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmd0YiAuZ3BjXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRSYW5kb21MaW5rKGlzR2FsbGVyeSkge1xyXG5cdGNvbnN0IHBhcmVudCA9IGlzR2FsbGVyeSA/IGdldEdhbGxlcnlSYW5kb21MaW5rUGFyZW50KCkgOiBnZXRHYWxsZXJ5TGlzdFJhbmRvbUxpbmtQYXJlbnQoKTtcclxuXHRpZiAocGFyZW50PT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdHNwYWNlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRzcGFjZXIuc3R5bGUud2lkdGggPSBcIjAuNWVtXCI7XHJcblxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRsaW5rLmhyZWYgPSB1cmxGcmFnbWVudC5jcmVhdGUoXCJyYW5kb21cIik7XHJcblx0bGluay50ZXh0Q29udGVudCA9IFwiUmFuZG9tXCI7XHJcblxyXG5cdHBhcmVudC5hcHBlbmRDaGlsZChzcGFjZXIpO1xyXG5cdHBhcmVudC5hcHBlbmRDaGlsZChsaW5rKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZFBhZ2VJbmZvKHBhZ2VJbmZvKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdHBhZ2VJbmZvLml0ZW1zT25QYWdlID4gMCAmJlxyXG5cdFx0cGFnZUluZm8uaXRlbUNvdW50ID49IHBhZ2VJbmZvLml0ZW1zUGVyUGFnZSAqIChwYWdlSW5mby5wYWdlQ291bnQgLSAxKSAmJlxyXG5cdFx0cGFnZUluZm8uaXRlbUNvdW50IDw9IHBhZ2VJbmZvLml0ZW1zUGVyUGFnZSAqIChwYWdlSW5mby5wYWdlQ291bnQgKyAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybFBhZ2UoY3VycmVudFBhZ2VUeXBlLCBwYWdlSW5kZXgpIHtcclxuXHRsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHRsZXQgcGFnZU5hbWUgPSBcInBhZ2VcIjtcclxuXHJcblx0c3dpdGNoIChjdXJyZW50UGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdHBhZ2VOYW1lID0gXCJwXCI7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGAoWyY/XSkke3BhZ2VOYW1lfT1bXiZdKigmfCQpYCk7XHJcblx0dXJsID0gdXJsLnJlcGxhY2UocmUsIChtMCwgbTEsIG0yKSA9PiAobTEgPT09IFwiP1wiID8gXCI/XCIgOiBtMikpO1xyXG5cdHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogKHVybC5sZW5ndGggPiAwICYmIHVybFt1cmwubGVuZ3RoIC0gMV0gIT09IFwiJlwiID8gXCImXCIgOiBcIlwiKSk7XHJcblx0dXJsICs9IGAke3BhZ2VOYW1lfT0ke3BhZ2VJbmRleH1gO1xyXG5cdHJldHVybiB1cmw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEl0ZW1zVXJscyhodG1sLCBsb2NhdGlvbikge1xyXG5cdGNvbnN0IGh0bWxQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChodG1sLCBsb2NhdGlvbik7XHJcblx0c3dpdGNoIChodG1sUGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdGNhc2UgXCJmYXZvcml0ZXNcIjpcclxuXHRcdFx0cmV0dXJuIHBhZ2luYXRpb24uZ2V0R2FsbGVyeVVybHMoaHRtbCk7XHJcblx0XHRjYXNlIFwiZ2FsbGVyeVwiOlxyXG5cdFx0XHRyZXR1cm4gcGFnaW5hdGlvbi5nZXRHYWxsZXJ5SW1hZ2VVcmxzKGh0bWwpO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ29Ub1VybCh1cmwsIGFkZEhpc3RvcnkpIHtcclxuXHRpZiAoYWRkSGlzdG9yeSkge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnb1RvUmFuZG9tKGN1cnJlbnRQYWdlVHlwZSkge1xyXG5cdC8vIEdldCBwYWdlIGluZm9cclxuXHRjb25zdCBwYWdlSW5mbyA9IHBhZ2luYXRpb24uZ2V0SW5mbyhkb2N1bWVudCk7XHJcblx0aWYgKHBhZ2VJbmZvID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBhZ2VJbmZvLml0ZW1Db3VudCk7XHJcblx0bGV0IHBhZ2VJbmRleDtcclxuXHRsZXQgaXRlbUluZGV4O1xyXG5cclxuXHRpZiAocGFnZUluZm8uaXRlbXNPblBhZ2UgPiAwICYmIGlzVmFsaWRQYWdlSW5mbyhwYWdlSW5mbykpIHtcclxuXHRcdHBhZ2VJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyBwYWdlSW5mby5pdGVtc09uUGFnZSk7XHJcblx0XHRpdGVtSW5kZXggPSBpbmRleCAtIHBhZ2VJbmRleCAqIHBhZ2VJbmZvLml0ZW1zT25QYWdlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRwYWdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwYWdlSW5mby5wYWdlQ291bnQpO1xyXG5cdFx0aXRlbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGFnZUluZm8uaXRlbUNvdW50KTtcclxuXHR9XHJcblxyXG5cdC8vIFN0b3AgbG9hZGluZ1xyXG5cdHdpbmRvdy5zdG9wKCk7XHJcblxyXG5cdC8vIFJlcXVlc3RcclxuXHRjb25zdCBmZXRjaCA9IHJlcXVpcmUoXCIuLi9mZXRjaFwiKTtcclxuXHRjb25zdCB1cmwgPSBnZXRVcmxQYWdlKGN1cnJlbnRQYWdlVHlwZSwgcGFnZUluZGV4KTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoLmdldCh7IHVybCwgZ206IHRydWUgfSk7XHJcblx0XHRjb25zdCBodG1sID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhyZXN1bHQucmVzcG9uc2VUZXh0LCBcInRleHQvaHRtbFwiKTtcclxuXHRcdGNvbnN0IGh0bWxMb2NhdGlvbiA9IHtcclxuXHRcdFx0cGF0aG5hbWU6IHVybC5yZXBsYWNlKC9bIz9dW1xcd1xcV10qJC8sIFwiXCIpLFxyXG5cdFx0XHRocmVmOiB1cmxcclxuXHRcdH07XHJcblx0XHRnb1RvSXRlbU9uUGFnZShodG1sLCBodG1sTG9jYXRpb24sIGl0ZW1JbmRleCwgZmFsc2UpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdC8vIEZhbGxiYWNrXHJcblx0XHRnb1RvVXJsKHVybC5yZXBsYWNlKC8jW1xcd1xcV10qJC8sIFwiXCIpICsgdXJsRnJhZ21lbnQuY3JlYXRlKGByYW5kb20vaXRlbS8ke2l0ZW1JbmRleH1gKSwgdHJ1ZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnb1RvSXRlbU9uUGFnZShodG1sLCBsb2NhdGlvbiwgaXRlbUluZGV4LCBhZGRIaXN0b3J5KSB7XHJcblx0Y29uc3QgaXRlbVVybHMgPSBnZXRJdGVtc1VybHMoaHRtbCwgbG9jYXRpb24pO1xyXG5cdGlmIChpdGVtVXJscy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHVybCA9IChpdGVtSW5kZXggPj0gMCAmJiBpdGVtSW5kZXggPCBpdGVtVXJscy5sZW5ndGggPyBpdGVtVXJsc1tpdGVtSW5kZXhdIDogaXRlbVVybHNbaXRlbVVybHMubGVuZ3RoIC0gMV0pO1xyXG5cdGlmICghdXJsKSB7IHJldHVybjsgfVxyXG5cclxuXHRnb1RvVXJsKHVybCwgYWRkSGlzdG9yeSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cclxuXHR1cmxGcmFnbWVudC5hZGRSb3V0ZSgvXlxcL3JhbmRvbShcXC9bXFx3XFxXXSopPyQvLCAobWF0Y2gpID0+IHtcclxuXHRcdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0XHR1cmxGcmFnbWVudC5jbGVhcigpO1xyXG5cclxuXHRcdGlmIChtYXRjaFsxXSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNvbnN0IG1hdGNoMiA9IC9eXFwvaXRlbSg/OlxcLyhcXGQrKSk/JC8uZXhlYyhtYXRjaFsxXSk7XHJcblx0XHRcdGlmIChtYXRjaDIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRjb25zdCBpdGVtSW5kZXggPSAobWF0Y2gyWzFdICE9PSB1bmRlZmluZWQpID9cclxuXHRcdFx0XHRcdHBhcnNlSW50KG1hdGNoMlsxXSwgMTApIDpcclxuXHRcdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldEl0ZW1zVXJscyhkb2N1bWVudCwgbG9jYXRpb24pLmxlbmd0aCk7XHJcblx0XHRcdFx0Z29Ub0l0ZW1PblBhZ2UoZG9jdW1lbnQsIGxvY2F0aW9uLCBpdGVtSW5kZXgsIHRydWUpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGdvVG9SYW5kb20oY3VycmVudFBhZ2VUeXBlKTtcclxuXHR9KTtcclxuXHJcblx0c3dpdGNoIChjdXJyZW50UGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdGNhc2UgXCJmYXZvcml0ZXNcIjpcclxuXHRcdFx0aW5zZXJ0UmFuZG9tTGluayhmYWxzZSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0aW5zZXJ0UmFuZG9tTGluayh0cnVlKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59XHJcblxyXG5cclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3QgeFByZWZpeCA9IFwiIyF4XCI7XHJcbmNvbnN0IHNlcGFyYXRvciA9IFwiL1wiO1xyXG5jb25zdCByb3V0ZXMgPSBbXTtcclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhcihhZGRIaXN0b3J5KSB7XHJcblx0Y29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHRpZiAoYWRkSGlzdG9yeSkge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKHBhdGgpIHtcclxuXHRyZXR1cm4gcGF0aCA/IGAke3hQcmVmaXh9JHtzZXBhcmF0b3J9JHtwYXRofWAgOiB4UHJlZml4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRjb25zdCByb3V0ZSA9IHsgbWF0Y2gsIGNhbGxiYWNrIH07XHJcblx0cm91dGVzLnB1c2gocm91dGUpO1xyXG5cdGlmIChyb3V0ZXMubGVuZ3RoID09PSAxKSB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0fVxyXG5cdHRlc3RSb3V0ZXMoW3JvdXRlXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGZvciAobGV0IGkgPSAwLCBpaSA9IHJvdXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRjb25zdCByb3V0ZSA9IHJvdXRlc1tpXTtcclxuXHRcdGlmIChyb3V0ZS5tYXRjaCA9PT0gbWF0Y2ggJiYgcm91dGUuY2FsbGJhY2sgPT09IGNhbGxiYWNrKSB7XHJcblx0XHRcdHJvdXRlcy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdGlmIChyb3V0ZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFhGcmFnbWVudCgpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cdHJldHVybiAoXHJcblx0XHQhZnJhZ21lbnQgfHxcclxuXHRcdGZyYWdtZW50Lmxlbmd0aCA8IHhQcmVmaXgubGVuZ3RoIHx8XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoMCwgeFByZWZpeC5sZW5ndGgpICE9PSB4UHJlZml4IHx8XHJcblx0XHQoZnJhZ21lbnQubGVuZ3RoID4geFByZWZpeC5sZW5ndGggJiYgZnJhZ21lbnRbeFByZWZpeC5sZW5ndGhdICE9PSBzZXBhcmF0b3IpKSA/XHJcblx0XHRudWxsIDpcclxuXHRcdGZyYWdtZW50LnN1YnN0cih4UHJlZml4Lmxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlc3RSb3V0ZXMocm91dGVzKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSBnZXRYRnJhZ21lbnQoKTtcclxuXHRpZiAoZnJhZ21lbnQgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHJvdXRlLm1hdGNoLmV4ZWMoZnJhZ21lbnQpO1xyXG5cdFx0cm91dGUuY2FsbGJhY2sobWF0Y2gsIGZyYWdtZW50KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVXJsRnJhZ21lbnRDaGFuZ2VkKCkge1xyXG5cdHRlc3RSb3V0ZXMocm91dGVzKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNsZWFyOiBjbGVhcixcclxuXHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRhZGRSb3V0ZTogYWRkUm91dGUsXHJcblx0cmVtb3ZlUm91dGU6IHJlbW92ZVJvdXRlXHJcbn07XHJcbiJdfQ==
