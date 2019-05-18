// ==UserScript==
// @name        x/random
// @version     1.0.2
// @author      dnsev-h
// @namespace   dnsev-h
// @description Go to a random page
// @grant       GM_xmlhttpRequest
// @grant       GM.xmlHttpRequest
// @connect     exhentai.org
// @connect     e-hentai.org
// @run-at      document-start
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

function getPageType(doc, location) {
	let n;

	if (doc.querySelector("#searchbox") !== null) {
		return "search";
	}
	else if (doc.querySelector("input[name='favcat']") !== null) {
		return "favorites";
	}
	else if (doc.querySelector("#i1>h1") !== null) {
		return "image";
	}
	else if (doc.querySelector(".gm h1#gn") !== null) {
		return "gallery";
	}
	else if (doc.querySelector("#profile_outer") !== null) {
		return "settings";
	}
	else if (
		(n = doc.querySelector("body>.d>p")) !== null &&
		/gallery\s+has\s+been\s+removed/i.exec(n.textContent.trim()) !== null
	) {
		return "gallery_deleted";
	}
	else if ((n = doc.querySelector("img[src]")) !== null && location !== null) {
		const p = location.pathname;
		if (n.getAttribute("src") === location.href && p.substr(0, 3) !== "/t/" && p.substr(0, 5) !== "/img/") {
			return "panda";
		}
	}

	// Unknown
	return null;
}


module.exports = {
	get: getPageType
};

},{}],2:[function(require,module,exports){
"use strict";


const rePageList = /([0-9,]+)\s*-\s*([0-9,]+)\s*of\s*([0-9,]+)/i;
const reResults = /([0-9,]+)\s*results?/i;


class PageinationInfo {
	constructor(pageCurrent, pageCount, itemCount, itemsOnPage, itemsPerPage) {
		this.pageCurrent = pageCurrent;
		this.pageCount = pageCount;
		this.itemCount = itemCount;
		this.itemsOnPage = itemsOnPage;
		this.itemsPerPage = itemsPerPage;
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
	return new PageinationInfo(pageCurrent, pageCount, pageCount, 1, 1);
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
	if (v === null) {
		v = getItemsForGalleryList(html, pageCurrent, pageCount);
	}
	if (v !== null) {
		({itemCount, itemsOnPage, itemsPerPage} = v);
	}

	return new PageinationInfo(pageCurrent, pageCount, itemCount, itemsOnPage, itemsPerPage);
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

},{}],3:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"../api/page-type":1,"../api/pagination":2,"../fetch":3,"../ready":6,"../url-fragment":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL3BhZ2UtdHlwZS5qcyIsInNyYy9hcGkvcGFnaW5hdGlvbi5qcyIsInNyYy9mZXRjaC5qcyIsInNyYy9nbS5qcyIsInNyYy9yYW5kb20vbWFpbi5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDektBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VUeXBlKGRvYywgbG9jYXRpb24pIHtcclxuXHRsZXQgbjtcclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nZmF2Y2F0J11cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImZhdm9yaXRlc1wiO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9vdXRlclwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2V0dGluZ3NcIjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoXHJcblx0XHQobiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keT4uZD5wXCIpKSAhPT0gbnVsbCAmJlxyXG5cdFx0L2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLmV4ZWMobi50ZXh0Q29udGVudC50cmltKCkpICE9PSBudWxsXHJcblx0KSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5X2RlbGV0ZWRcIjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoKG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpKSAhPT0gbnVsbCAmJiBsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgcCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0aWYgKG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmIHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmIHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldDogZ2V0UGFnZVR5cGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3QgcmVQYWdlTGlzdCA9IC8oWzAtOSxdKylcXHMqLVxccyooWzAtOSxdKylcXHMqb2ZcXHMqKFswLTksXSspL2k7XHJcbmNvbnN0IHJlUmVzdWx0cyA9IC8oWzAtOSxdKylcXHMqcmVzdWx0cz8vaTtcclxuXHJcblxyXG5jbGFzcyBQYWdlaW5hdGlvbkluZm8ge1xyXG5cdGNvbnN0cnVjdG9yKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZSkge1xyXG5cdFx0dGhpcy5wYWdlQ3VycmVudCA9IHBhZ2VDdXJyZW50O1xyXG5cdFx0dGhpcy5wYWdlQ291bnQgPSBwYWdlQ291bnQ7XHJcblx0XHR0aGlzLml0ZW1Db3VudCA9IGl0ZW1Db3VudDtcclxuXHRcdHRoaXMuaXRlbXNPblBhZ2UgPSBpdGVtc09uUGFnZTtcclxuXHRcdHRoaXMuaXRlbXNQZXJQYWdlID0gaXRlbXNQZXJQYWdlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTnVtYmVyKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRjb25zdCB2ID0gcGFyc2VJbnQodmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpLCAxMCk7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2KSA/IGRlZmF1bHRWYWx1ZSA6IHY7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlc0ZvckltYWdlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIi5zbj5kaXY+c3BhblwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYWdlQ3VycmVudCA9IHBhcnNlTnVtYmVyKG5vZGVzWzBdLnRleHRDb250ZW50LCAxKSAtIDE7XHJcblx0Y29uc3QgcGFnZUNvdW50ID0gcGFyc2VOdW1iZXIobm9kZXNbMV0udGV4dENvbnRlbnQsIDApO1xyXG5cdHJldHVybiBuZXcgUGFnZWluYXRpb25JbmZvKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIHBhZ2VDb3VudCwgMSwgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUl0ZW1zUGVyUGFnZShwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlKSB7XHJcblx0cmV0dXJuIChwYWdlQ3VycmVudCArIDEgPCBwYWdlQ291bnQgfHwgcGFnZUN1cnJlbnQgPT09IDApID9cclxuXHRcdGl0ZW1zT25QYWdlIDpcclxuXHRcdE1hdGgucm91bmQoKGl0ZW1Db3VudCAtIGl0ZW1zT25QYWdlKSAvIHBhZ2VDdXJyZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGcm9tRnVsbEluZm8oY29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkge1xyXG5cdGNvbnN0IG1hdGNoID0gcmVQYWdlTGlzdC5leGVjKGNvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBzdGFydCA9IHBhcnNlTnVtYmVyKG1hdGNoWzFdLCAwKTtcclxuXHRjb25zdCBpdGVtc09uUGFnZSA9IHBhcnNlTnVtYmVyKG1hdGNoWzJdLCAwKSAtIChzdGFydCAtIDEpO1xyXG5cdGNvbnN0IGl0ZW1Db3VudCA9IHBhcnNlTnVtYmVyKG1hdGNoWzNdLCAwKTtcclxuXHRjb25zdCBpdGVtc1BlclBhZ2UgPSBjYWxjdWxhdGVJdGVtc1BlclBhZ2UocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSk7XHJcblxyXG5cdHJldHVybiB7aXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGb3JHYWxsZXJ5SW1hZ2VzKHBhZ2VMaXN0LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0Y29uc3Qgbm9kZSA9IHBhZ2VMaXN0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5ncGNcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsICYmIG5vZGUucGFyZW50Tm9kZSA9PT0gcGFnZUxpc3QucGFyZW50Tm9kZSkgP1xyXG5cdFx0Z2V0SXRlbXNGcm9tRnVsbEluZm8obm9kZS50ZXh0Q29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkgOlxyXG5cdFx0bnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0bGV0IGl0ZW1Db3VudCA9IG51bGw7XHJcblx0Zm9yIChjb25zdCBpcE5vZGUgb2YgaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwicC5pcFwiKSkge1xyXG5cdFx0Y29uc3QgaW5mbyA9IGdldEl0ZW1zRnJvbUZ1bGxJbmZvKGlwTm9kZS50ZXh0Q29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCk7XHJcblx0XHRpZiAoaW5mbyAhPT0gbnVsbCkgeyByZXR1cm4gaW5mbzsgfVxyXG5cclxuXHRcdGNvbnN0IG1hdGNoID0gcmVSZXN1bHRzLmV4ZWMoaXBOb2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRpdGVtQ291bnQgPSBwYXJzZU51bWJlcihtYXRjaFsxXSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKGl0ZW1Db3VudCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRsZXQgaXRlbXNPblBhZ2UgPSAwO1xyXG5cdGxldCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcImRpdi5pdGc+ZGl2XCIpO1xyXG5cdGlmICgoaXRlbXNPblBhZ2UgPSBub2Rlcy5sZW5ndGgpID09PSAwKSB7XHJcblx0XHRub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcInRhYmxlLml0Zz50Ym9keT50clwiKTtcclxuXHRcdGl0ZW1zT25QYWdlID0gbm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKGl0ZW1zT25QYWdlID4gMCAmJiBub2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwidGhcIikgIT09IG51bGwpIHtcclxuXHRcdFx0LS1pdGVtc09uUGFnZTsgLy8gSGVhZGVyIHJvd1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXNQZXJQYWdlID0gY2FsY3VsYXRlSXRlbXNQZXJQYWdlKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UpO1xyXG5cclxuXHRyZXR1cm4ge2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VzRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUxpc3QpIHtcclxuXHQvLyBDb3VudFxyXG5cdGNvbnN0IG5vZGVzID0gcGFnZUxpc3QucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xyXG5cdGNvbnN0IHBhZ2VDb3VudCA9IChub2Rlcy5sZW5ndGggPiAyID8gcGFyc2VOdW1iZXIobm9kZXNbbm9kZXMubGVuZ3RoIC0gMl0udGV4dENvbnRlbnQsIDEpIDogMCk7XHJcblxyXG5cdC8vIEN1cnJlbnRcclxuXHRjb25zdCBub2RlID0gcGFnZUxpc3QucXVlcnlTZWxlY3RvcihcInRkLnB0ZHNcIik7XHJcblx0Y29uc3QgcGFnZUN1cnJlbnQgPSAobm9kZSAhPT0gbnVsbCA/IHBhcnNlTnVtYmVyKG5vZGUudGV4dENvbnRlbnQsIDEpIC0gMSA6IDApO1xyXG5cclxuXHQvLyBJdGVtc1xyXG5cdGxldCBpdGVtQ291bnQgPSAwO1xyXG5cdGxldCBpdGVtc09uUGFnZSA9IDA7XHJcblx0bGV0IGl0ZW1zUGVyUGFnZSA9IDA7XHJcblxyXG5cdGxldCB2ID0gZ2V0SXRlbXNGb3JHYWxsZXJ5SW1hZ2VzKHBhZ2VMaXN0LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KTtcclxuXHRpZiAodiA9PT0gbnVsbCkge1xyXG5cdFx0diA9IGdldEl0ZW1zRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCk7XHJcblx0fVxyXG5cdGlmICh2ICE9PSBudWxsKSB7XHJcblx0XHQoe2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX0gPSB2KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBuZXcgUGFnZWluYXRpb25JbmZvKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJbmZvKGh0bWwpIHtcclxuXHRpZiAoIWh0bWwpIHsgaHRtbCA9IGRvY3VtZW50OyB9XHJcblxyXG5cdGNvbnN0IHBhZ2VMaXN0ID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiLnB0dFwiKTtcclxuXHRyZXR1cm4gcGFnZUxpc3QgIT09IG51bGwgPyBnZXRQYWdlc0ZvckdhbGxlcnlMaXN0KGh0bWwsIHBhZ2VMaXN0KSA6IGdldFBhZ2VzRm9ySW1hZ2UoaHRtbCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5VXJsKG5vZGUpIHtcclxuXHRjb25zdCBsaW5rU2VsZWN0b3IgPSBcImFbaHJlZl1cIjtcclxuXHRjb25zdCBuYW1lTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5nbG5hbWVcIik7XHJcblx0aWYgKG5hbWVOb2RlICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBsaW5rID0gbmFtZU5vZGUucXVlcnlTZWxlY3RvcihsaW5rU2VsZWN0b3IpO1xyXG5cdFx0aWYgKGxpbmsgIT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdH1cclxuXHRcdGlmIChuYW1lTm9kZS5wYXJlbnROb2RlICE9PSBudWxsICYmIG5hbWVOb2RlLnBhcmVudE5vZGUubWF0Y2hlcyhsaW5rU2VsZWN0b3IpKSB7XHJcblx0XHRcdHJldHVybiBuYW1lTm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVVybHMoaHRtbCkge1xyXG5cdGlmICghaHRtbCkgeyBodG1sID0gZG9jdW1lbnQ7IH1cclxuXHJcblx0bGV0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2Lml0Zz5kaXZcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0bm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0YWJsZS5pdGc+dGJvZHk+dHJcIik7XHJcblx0XHRpZiAobm9kZXMubGVuZ3RoID4gMCAmJiBub2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwidGhcIikgIT09IG51bGwpIHtcclxuXHRcdFx0bm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlcywgMSk7IC8vIE9taXQgaGVhZGVyIHJvd1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgdXJsID0gZ2V0R2FsbGVyeVVybChub2RlKTtcclxuXHRcdGlmICh1cmwgIT09IG51bGwpIHsgcmVzdWx0cy5wdXNoKHVybCk7IH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SW1hZ2VVcmxzKGh0bWwpIHtcclxuXHRpZiAoIWh0bWwpIHsgaHRtbCA9IGRvY3VtZW50OyB9XHJcblxyXG5cdGxldCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIi5nZHRsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdkdG1cIik7XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblxyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgbGluayA9IG5vZGUucXVlcnlTZWxlY3RvcihcImFbaHJlZl1cIik7XHJcblx0XHRpZiAobGluayAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXN1bHRzLnB1c2gobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0SW5mbyxcclxuXHRnZXRHYWxsZXJ5VXJscyxcclxuXHRnZXRHYWxsZXJ5SW1hZ2VVcmxzXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZ20gPSByZXF1aXJlKFwiLi9nbVwiKTtcclxuXHJcblxyXG5jbGFzcyBGZXRjaEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHJlc3BvbnNlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiRmV0Y2hFcnJvclwiO1xyXG5cdFx0dGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVzcG9uc2Uge1xyXG5cdGNvbnN0cnVjdG9yKHJlYWR5U3RhdGUsIHJlc3BvbnNlSGVhZGVycywgcmVzcG9uc2VUZXh0LCBzdGF0dXMsIHN0YXR1c1RleHQpIHtcclxuXHRcdHRoaXMucmVhZHlTdGF0ZSA9IHJlYWR5U3RhdGU7XHJcblx0XHR0aGlzLnJlc3BvbnNlSGVhZGVycyA9IHJlc3BvbnNlSGVhZGVycztcclxuXHRcdHRoaXMucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0O1xyXG5cdFx0dGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcblx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgUHJvZ3Jlc3NFdmVudCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoQ29tcHV0YWJsZSwgbG9hZGVkLCB0b3RhbCkge1xyXG5cdFx0dGhpcy5sZW5ndGhDb21wdXRhYmxlID0gbGVuZ3RoQ29tcHV0YWJsZTtcclxuXHRcdHRoaXMubG9hZGVkID0gbG9hZGVkO1xyXG5cdFx0dGhpcy50b3RhbCA9IHRvdGFsO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFJlc3BvbnNlSGVhZGVyTWFwKGFsbEhlYWRlcnMpIHtcclxuXHRjb25zdCByZXNwb25zZUhlYWRlcnMgPSB7fTtcclxuXHJcblx0Y29uc3QgcmUgPSAvXFxzKiguKilcXHMqOlxccyooLiopXFxzKi87XHJcblx0Zm9yIChjb25zdCBsaW5lIG9mIGFsbEhlYWRlcnMucmVwbGFjZSgvXFxyXFxuXFxzKiQvLCBcIlwiKS5zcGxpdChcIlxcclxcblwiKSkge1xyXG5cdFx0Y29uc3QgbSA9IHJlLmV4ZWMobGluZSk7XHJcblx0XHRpZiAobSAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNbbVsxXS50b0xvd2VyQ2FzZSgpXSA9IG1bMl07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzcG9uc2VIZWFkZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSB7XHJcblx0cmV0dXJuIG5ldyBSZXNwb25zZShcclxuXHRcdHhoci5yZWFkeVN0YXRlLFxyXG5cdFx0Z2V0UmVzcG9uc2VIZWFkZXJNYXAoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSxcclxuXHRcdHhoci5yZXNwb25zZVRleHQsXHJcblx0XHR4aHIuc3RhdHVzLFxyXG5cdFx0eGhyLnN0YXR1c1RleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdC8vY29uc3QgYmluYXJ5ID0gb3B0aW9ucy5iaW5hcnk7XHJcblx0Y29uc3QgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcclxuXHRjb25zdCB0aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDA7XHJcblx0Y29uc3Qgb25wcm9ncmVzcyA9IG9wdGlvbnMub25wcm9ncmVzcztcclxuXHRjb25zdCBvdmVycmlkZU1pbWVUeXBlID0gb3B0aW9ucy5vdmVycmlkZU1pbWVUeXBlO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0Y29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0eGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xyXG5cdFx0aWYgKHR5cGVvZihvdmVycmlkZU1pbWVUeXBlKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZShvdmVycmlkZU1pbWVUeXBlKTtcclxuXHRcdH1cclxuXHRcdGlmIChoZWFkZXJzICE9PSBudWxsICYmIHR5cGVvZihoZWFkZXJzKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRmb3IgKGxldCBrIGluIGhlYWRlcnMpIHtcclxuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBoZWFkZXJzW2tdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiByZXNvbHZlKGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihgUmVxdWVzdCBlcnJvcjogJHt4aHIuc3RhdHVzVGV4dH0gKCR7eGhyLnN0YXR1c30pYCwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwidGltZW91dFwiLCAoKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJUaW1lb3V0IHJlYWNoZWRcIiwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZihvbnByb2dyZXNzKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGUpID0+IG9ucHJvZ3Jlc3MobmV3IFByb2dyZXNzRXZlbnQoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCkpKTtcclxuXHRcdH1cclxuXHJcblx0XHR4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcblx0XHR4aHIuc2VuZChkYXRhKTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRHbVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcblx0cmV0dXJuIG5ldyBSZXNwb25zZShcclxuXHRcdHJlc3BvbnNlLnJlYWR5U3RhdGUsXHJcblx0XHRnZXRSZXNwb25zZUhlYWRlck1hcChyZXNwb25zZS5yZXNwb25zZUhlYWRlcnMpLFxyXG5cdFx0cmVzcG9uc2UucmVzcG9uc2VUZXh0LFxyXG5cdFx0cmVzcG9uc2Uuc3RhdHVzLFxyXG5cdFx0cmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHRjb25zdCBiaW5hcnkgPSBvcHRpb25zLmJpbmFyeTtcclxuXHRjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG5cdGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuXHRjb25zdCBvbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xyXG5cdGNvbnN0IG92ZXJyaWRlTWltZVR5cGUgPSBvcHRpb25zLm92ZXJyaWRlTWltZVR5cGU7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCBkZXRhaWxzID0ge1xyXG5cdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXHJcblx0XHRcdG92ZXJyaWRlTWltZVR5cGU6IG92ZXJyaWRlTWltZVR5cGUsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdGJpbmFyeTogYmluYXJ5LFxyXG5cdFx0XHRzeW5jaHJvbm91czogZmFsc2UsXHJcblx0XHRcdHRpbWVvdXQ6IHRpbWVvdXRcclxuXHRcdH07XHJcblxyXG5cdFx0ZGV0YWlscy5vbmxvYWQgPSAoZSkgPT4gcmVzb2x2ZShjb252ZXJ0R21SZXNwb25zZShlKSk7XHJcblx0XHRkZXRhaWxzLm9uZXJyb3IgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke2Uuc3RhdHVzVGV4dH0gKCR7ZS5zdGF0dXN9KWAsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblx0XHRkZXRhaWxzLm9uYWJvcnQgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblx0XHRkZXRhaWxzLm9udGltZW91dCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJUaW1lb3V0IHJlYWNoZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0ZGV0YWlscy5vbnByb2dyZXNzID0gKGUpID0+IG9ucHJvZ3Jlc3MobmV3IFByb2dyZXNzRXZlbnQoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdtLnhtbEh0dHBSZXF1ZXN0KGRldGFpbHMpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaXNHbVN1cHBvcnRlZCh1c2VHbSkge1xyXG5cdHJldHVybiAodXNlR20gJiYgdHlwZW9mKGdtLnhtbEh0dHBSZXF1ZXN0KSA9PT0gXCJmdW5jdGlvblwiKSA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIkdFVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRyZXF1ZXN0OiByZXF1ZXN0LFxyXG5cdGdldDogZ2V0LFxyXG5cdHBvc3Q6IHBvc3QsXHJcblx0Z206IHtcclxuXHRcdHJlcXVlc3Q6IHJlcXVlc3RHbSxcclxuXHRcdGdldDogZ2V0R20sXHJcblx0XHRwb3N0OiBwb3N0R20sXHJcblx0fVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvUHJvbWlzZShmbiwgc2VsZikge1xyXG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNvbHZlKGZuLmFwcGx5KHNlbGYsIGFyZ3MpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJlamVjdChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IGdtID0gKChvYmplY3RzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0aWYgKG9iai5HTSAhPT0gbnVsbCAmJiB0eXBlb2Yob2JqLkdNKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHJldHVybiBvYmouR007XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHRjb25zdCBtYXBwaW5nID0gW1xyXG5cdFx0WyBcImdldFZhbHVlXCIsIFwiR01fZ2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcInNldFZhbHVlXCIsIFwiR01fc2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcImRlbGV0ZVZhbHVlXCIsIFwiR01fZGVsZXRlVmFsdWVcIiBdLFxyXG5cdFx0WyBcInhtbEh0dHBSZXF1ZXN0XCIsIFwiR01feG1saHR0cFJlcXVlc3RcIiBdXHJcblx0XTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwcGluZykge1xyXG5cdFx0bGV0IHByb21pc2UgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRjb25zdCBmbiA9IG9ialt2YWx1ZV07XHJcblx0XHRcdGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRwcm9taXNlID0gdG9Qcm9taXNlKGZuLCBvYmopO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgTm90IHN1cHBvcnRlZCAoJHtrZXl9KWApKSk7XHJcblx0XHR9XHJcblx0XHRyZXN1bHRba2V5XSA9IHByb21pc2U7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn0pLmNhbGwodGhpcywgW3RoaXMsIHdpbmRvd10pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ207XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHVybEZyYWdtZW50ID0gcmVxdWlyZShcIi4uL3VybC1mcmFnbWVudFwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuY29uc3QgcGFnaW5hdGlvbiA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnaW5hdGlvblwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5TGlzdFJhbmRvbUxpbmtQYXJlbnQoKSB7XHJcblx0bGV0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWRvIC5pcFwiKTtcclxuXHRpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhcmVudHMgPSBwYXJlbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmlwXCIpO1xyXG5cdGlmIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcclxuXHRcdHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXJlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlSYW5kb21MaW5rUGFyZW50KCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmd0YiAuZ3BjXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRSYW5kb21MaW5rKGlzR2FsbGVyeSkge1xyXG5cdGNvbnN0IHBhcmVudCA9IGlzR2FsbGVyeSA/IGdldEdhbGxlcnlSYW5kb21MaW5rUGFyZW50KCkgOiBnZXRHYWxsZXJ5TGlzdFJhbmRvbUxpbmtQYXJlbnQoKTtcclxuXHRpZiAocGFyZW50PT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdHNwYWNlci5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRzcGFjZXIuc3R5bGUud2lkdGggPSBcIjAuNWVtXCI7XHJcblxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRsaW5rLmhyZWYgPSB1cmxGcmFnbWVudC5jcmVhdGUoXCJyYW5kb21cIik7XHJcblx0bGluay50ZXh0Q29udGVudCA9IFwiUmFuZG9tXCI7XHJcblxyXG5cdHBhcmVudC5hcHBlbmRDaGlsZChzcGFjZXIpO1xyXG5cdHBhcmVudC5hcHBlbmRDaGlsZChsaW5rKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZFBhZ2VJbmZvKHBhZ2VJbmZvKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdHBhZ2VJbmZvLml0ZW1zT25QYWdlID4gMCAmJlxyXG5cdFx0cGFnZUluZm8uaXRlbUNvdW50ID49IHBhZ2VJbmZvLml0ZW1zUGVyUGFnZSAqIChwYWdlSW5mby5wYWdlQ291bnQgLSAxKSAmJlxyXG5cdFx0cGFnZUluZm8uaXRlbUNvdW50IDw9IHBhZ2VJbmZvLml0ZW1zUGVyUGFnZSAqIChwYWdlSW5mby5wYWdlQ291bnQgKyAxKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybFBhZ2UoY3VycmVudFBhZ2VUeXBlLCBwYWdlSW5kZXgpIHtcclxuXHRsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHRsZXQgcGFnZU5hbWUgPSBcInBhZ2VcIjtcclxuXHJcblx0c3dpdGNoIChjdXJyZW50UGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdHBhZ2VOYW1lID0gXCJwXCI7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGAoWyY/XSkke3BhZ2VOYW1lfT1bXiZdKigmfCQpYCk7XHJcblx0dXJsID0gdXJsLnJlcGxhY2UocmUsIChtMCwgbTEsIG0yKSA9PiAobTEgPT09IFwiP1wiID8gXCI/XCIgOiBtMikpO1xyXG5cdHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpIDwgMCA/IFwiP1wiIDogKHVybC5sZW5ndGggPiAwICYmIHVybFt1cmwubGVuZ3RoIC0gMV0gIT09IFwiJlwiID8gXCImXCIgOiBcIlwiKSk7XHJcblx0dXJsICs9IGAke3BhZ2VOYW1lfT0ke3BhZ2VJbmRleH1gO1xyXG5cdHJldHVybiB1cmw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEl0ZW1zVXJscyhodG1sLCBsb2NhdGlvbikge1xyXG5cdGNvbnN0IGh0bWxQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChodG1sLCBsb2NhdGlvbik7XHJcblx0c3dpdGNoIChodG1sUGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdGNhc2UgXCJmYXZvcml0ZXNcIjpcclxuXHRcdFx0cmV0dXJuIHBhZ2luYXRpb24uZ2V0R2FsbGVyeVVybHMoaHRtbCk7XHJcblx0XHRjYXNlIFwiZ2FsbGVyeVwiOlxyXG5cdFx0XHRyZXR1cm4gcGFnaW5hdGlvbi5nZXRHYWxsZXJ5SW1hZ2VVcmxzKGh0bWwpO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ29Ub1VybCh1cmwsIGFkZEhpc3RvcnkpIHtcclxuXHRpZiAoYWRkSGlzdG9yeSkge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnb1RvUmFuZG9tKGN1cnJlbnRQYWdlVHlwZSkge1xyXG5cdC8vIEdldCBwYWdlIGluZm9cclxuXHRjb25zdCBwYWdlSW5mbyA9IHBhZ2luYXRpb24uZ2V0SW5mbyhkb2N1bWVudCk7XHJcblx0aWYgKHBhZ2VJbmZvID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBhZ2VJbmZvLml0ZW1Db3VudCk7XHJcblx0bGV0IHBhZ2VJbmRleDtcclxuXHRsZXQgaXRlbUluZGV4O1xyXG5cclxuXHRpZiAocGFnZUluZm8uaXRlbXNPblBhZ2UgPiAwICYmIGlzVmFsaWRQYWdlSW5mbyhwYWdlSW5mbykpIHtcclxuXHRcdHBhZ2VJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyBwYWdlSW5mby5pdGVtc09uUGFnZSk7XHJcblx0XHRpdGVtSW5kZXggPSBpbmRleCAtIHBhZ2VJbmRleCAqIHBhZ2VJbmZvLml0ZW1zT25QYWdlO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRwYWdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwYWdlSW5mby5wYWdlQ291bnQpO1xyXG5cdFx0aXRlbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGFnZUluZm8uaXRlbUNvdW50KTtcclxuXHR9XHJcblxyXG5cdC8vIFN0b3AgbG9hZGluZ1xyXG5cdHdpbmRvdy5zdG9wKCk7XHJcblxyXG5cdC8vIFJlcXVlc3RcclxuXHRjb25zdCBmZXRjaCA9IHJlcXVpcmUoXCIuLi9mZXRjaFwiKTtcclxuXHRjb25zdCB1cmwgPSBnZXRVcmxQYWdlKGN1cnJlbnRQYWdlVHlwZSwgcGFnZUluZGV4KTtcclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoLmdldCh7IHVybCwgZ206IHRydWUgfSk7XHJcblx0XHRjb25zdCBodG1sID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhyZXN1bHQucmVzcG9uc2VUZXh0LCBcInRleHQvaHRtbFwiKTtcclxuXHRcdGNvbnN0IGh0bWxMb2NhdGlvbiA9IHtcclxuXHRcdFx0cGF0aG5hbWU6IHVybC5yZXBsYWNlKC9bIz9dW1xcd1xcV10qJC8sIFwiXCIpLFxyXG5cdFx0XHRocmVmOiB1cmxcclxuXHRcdH07XHJcblx0XHRnb1RvSXRlbU9uUGFnZShodG1sLCBodG1sTG9jYXRpb24sIGl0ZW1JbmRleCwgZmFsc2UpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdC8vIEZhbGxiYWNrXHJcblx0XHRnb1RvVXJsKHVybC5yZXBsYWNlKC8jW1xcd1xcV10qJC8sIFwiXCIpICsgdXJsRnJhZ21lbnQuY3JlYXRlKGByYW5kb20vaXRlbS8ke2l0ZW1JbmRleH1gKSwgdHJ1ZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnb1RvSXRlbU9uUGFnZShodG1sLCBsb2NhdGlvbiwgaXRlbUluZGV4LCBhZGRIaXN0b3J5KSB7XHJcblx0Y29uc3QgaXRlbVVybHMgPSBnZXRJdGVtc1VybHMoaHRtbCwgbG9jYXRpb24pO1xyXG5cdGlmIChpdGVtVXJscy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHVybCA9IChpdGVtSW5kZXggPj0gMCAmJiBpdGVtSW5kZXggPCBpdGVtVXJscy5sZW5ndGggPyBpdGVtVXJsc1tpdGVtSW5kZXhdIDogaXRlbVVybHNbaXRlbVVybHMubGVuZ3RoIC0gMV0pO1xyXG5cdGlmICghdXJsKSB7IHJldHVybjsgfVxyXG5cclxuXHRnb1RvVXJsKHVybCwgYWRkSGlzdG9yeSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cclxuXHR1cmxGcmFnbWVudC5hZGRSb3V0ZSgvXlxcL3JhbmRvbShcXC9bXFx3XFxXXSopPyQvLCAobWF0Y2gpID0+IHtcclxuXHRcdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0XHR1cmxGcmFnbWVudC5jbGVhcigpO1xyXG5cclxuXHRcdGlmIChtYXRjaFsxXSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGNvbnN0IG1hdGNoMiA9IC9eXFwvaXRlbSg/OlxcLyhcXGQrKSk/JC8uZXhlYyhtYXRjaFsxXSk7XHJcblx0XHRcdGlmIChtYXRjaDIgIT09IG51bGwpIHtcclxuXHRcdFx0XHRjb25zdCBpdGVtSW5kZXggPSAobWF0Y2gyWzFdICE9PSB1bmRlZmluZWQpID9cclxuXHRcdFx0XHRcdHBhcnNlSW50KG1hdGNoMlsxXSwgMTApIDpcclxuXHRcdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdldEl0ZW1zVXJscyhkb2N1bWVudCwgbG9jYXRpb24pLmxlbmd0aCk7XHJcblx0XHRcdFx0Z29Ub0l0ZW1PblBhZ2UoZG9jdW1lbnQsIGxvY2F0aW9uLCBpdGVtSW5kZXgsIHRydWUpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGdvVG9SYW5kb20oY3VycmVudFBhZ2VUeXBlKTtcclxuXHR9KTtcclxuXHJcblx0c3dpdGNoIChjdXJyZW50UGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJzZWFyY2hcIjpcclxuXHRcdGNhc2UgXCJmYXZvcml0ZXNcIjpcclxuXHRcdFx0aW5zZXJ0UmFuZG9tTGluayhmYWxzZSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0aW5zZXJ0UmFuZG9tTGluayh0cnVlKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59XHJcblxyXG5cclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3QgeFByZWZpeCA9IFwiIyF4XCI7XHJcbmNvbnN0IHNlcGFyYXRvciA9IFwiL1wiO1xyXG5jb25zdCByb3V0ZXMgPSBbXTtcclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhcihhZGRIaXN0b3J5KSB7XHJcblx0Y29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuXHRpZiAoYWRkSGlzdG9yeSkge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKHBhdGgpIHtcclxuXHRyZXR1cm4gcGF0aCA/IGAke3hQcmVmaXh9JHtzZXBhcmF0b3J9JHtwYXRofWAgOiB4UHJlZml4O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRjb25zdCByb3V0ZSA9IHsgbWF0Y2gsIGNhbGxiYWNrIH07XHJcblx0cm91dGVzLnB1c2gocm91dGUpO1xyXG5cdGlmIChyb3V0ZXMubGVuZ3RoID09PSAxKSB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0fVxyXG5cdHRlc3RSb3V0ZXMoW3JvdXRlXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGZvciAobGV0IGkgPSAwLCBpaSA9IHJvdXRlcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRjb25zdCByb3V0ZSA9IHJvdXRlc1tpXTtcclxuXHRcdGlmIChyb3V0ZS5tYXRjaCA9PT0gbWF0Y2ggJiYgcm91dGUuY2FsbGJhY2sgPT09IGNhbGxiYWNrKSB7XHJcblx0XHRcdHJvdXRlcy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdGlmIChyb3V0ZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFhGcmFnbWVudCgpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG5cdHJldHVybiAoXHJcblx0XHQhZnJhZ21lbnQgfHxcclxuXHRcdGZyYWdtZW50Lmxlbmd0aCA8IHhQcmVmaXgubGVuZ3RoIHx8XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoMCwgeFByZWZpeC5sZW5ndGgpICE9PSB4UHJlZml4IHx8XHJcblx0XHQoZnJhZ21lbnQubGVuZ3RoID4geFByZWZpeC5sZW5ndGggJiYgZnJhZ21lbnRbeFByZWZpeC5sZW5ndGhdICE9PSBzZXBhcmF0b3IpKSA/XHJcblx0XHRudWxsIDpcclxuXHRcdGZyYWdtZW50LnN1YnN0cih4UHJlZml4Lmxlbmd0aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlc3RSb3V0ZXMocm91dGVzKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSBnZXRYRnJhZ21lbnQoKTtcclxuXHRpZiAoZnJhZ21lbnQgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHJvdXRlLm1hdGNoLmV4ZWMoZnJhZ21lbnQpO1xyXG5cdFx0cm91dGUuY2FsbGJhY2sobWF0Y2gsIGZyYWdtZW50KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVXJsRnJhZ21lbnRDaGFuZ2VkKCkge1xyXG5cdHRlc3RSb3V0ZXMocm91dGVzKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNsZWFyOiBjbGVhcixcclxuXHRjcmVhdGU6IGNyZWF0ZSxcclxuXHRhZGRSb3V0ZTogYWRkUm91dGUsXHJcblx0cmVtb3ZlUm91dGU6IHJlbW92ZVJvdXRlXHJcbn07XHJcbiJdfQ==
