// ==UserScript==
// @name        x/gallery-resurrect
// @version     1.0.0
// @author      dnsev-h
// @namespace   dnsev-h
// @description Resurrect information about removed galleries
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
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-gallery-resurrect.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-gallery-resurrect.user.js
// ==/UserScript==
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const fetch = require("../../fetch");
const getFromJson = require("./get-from-json");


function setArrayCount(array, count, fill) {
	const ii = array.length;
	if (ii !== count) {
		if (ii > count) {
			array.splice(count, ii - count);
		} else {
			for (let i = ii; i < count; ++i) {
				array.push(fill);
			}
		}
	}
}

async function getGalleryInfo(identifiers) {
	const gidList = [];
	const isArray = Array.isArray(identifiers);
	if (isArray) {
		for (const identifier of identifiers) {
			gidList.push([ identifier.id, identifier.token ]);
		}
	} else {
		gidList.push([ identifiers.id, identifiers.token ]);
	}

	const data = {
		method: "gdata",
		gidlist: gidList
	};

	const fetchResult = await fetch.post({
		gm: true,
		url: "/api.php",
		data: JSON.stringify(data)
	});

	const resultJson = JSON.parse(fetchResult.responseText);

	const results = [];
	for (const json of resultJson.gmetadata) {
		if (json.error) {
			results.push(null);
		} else {
			const info = getFromJson(json);
			results.push(info);
		}
	}

	setArrayCount(results, gidList.length, null);

	return isArray ? results : results[0];
}


module.exports = {
	get: getGalleryInfo
};

},{"../../fetch":8,"./get-from-json":2}],2:[function(require,module,exports){
"use strict";

const types = require("./types");


function getStringFromHtmlEscapedString(value) {
	if (value === null) { return null; }

  const doc = new DOMParser().parseFromString(value, "text/html");
  return doc.documentElement.textContent;
}

function getJsonNumber(value) {
	if (typeof(value) !== "number") {
		if (typeof(value) !== "string") { return null; }
		value = parseFloat(value);
	}
	return (Number.isNaN(value) ? null : value);
}

function getJsonString(value) {
	if (typeof(value) === "string") { return value; }
	if (typeof(value) === "undefined" || value === null) { return value; }
	return `${value}`;
}

function populateGalleryInfoFromJson(info, json) {
	info.title = getStringFromHtmlEscapedString(getJsonString(json.title));
	info.titleOriginal = getStringFromHtmlEscapedString(getJsonString(json.title_jpn));
	info.mainThumbnailUrl = getJsonString(json.thumb);
	const category = getJsonString(json.category);
	info.category = (category !== null ? category.toLowerCase() : null);
	info.uploader = getJsonString(json.uploader);

	info.ratingAverage = getJsonNumber(json.rating);

	const dateUploaded = getJsonNumber(json.posted);
	info.dateUploaded = (dateUploaded !== null ? new Date(dateUploaded * 1000).getTime() : null);

	info.visible = !json.expunged;

	info.approximateTotalFileSize = getJsonNumber(json.filesize);

	info.fileCount = getJsonNumber(json.filecount);

	info.archiverKey = getJsonString(json.archiver_key);
	info.torrentCount = getJsonNumber(json.torrentcount);

	const tagList = [];
	if (Array.isArray(json.tags)) {
		for (const tag of json.tags) {
			const stringTag = getJsonString(tag);
			if (stringTag !== null) { tagList.push(stringTag); }
		}
	}

	info.tags = { "undefined": tagList };
	info.tagsHaveNamespace = false;
}

function getFromJson(json) {
	if (json === null || typeof(json) !== "object") { return null; }

	const id = getJsonNumber(json.gid);
	const token = getJsonString(json.token);
	if (id === null || token === null) { return null; }

	const info = new types.GalleryInfo();
	info.identifier = new types.GalleryIdentifier(id, token);
	info.currentPage = null;
	info.source = "json";
	populateGalleryInfoFromJson(info, json);
	info.dateGenerated = Date.now();
	return info;
}


module.exports = getFromJson;

},{"./types":3}],3:[function(require,module,exports){
"use strict";

class GalleryIdentifier {
	constructor(id, token) {
		this.id = id;
		this.token = token;
	}

	toCommonJson() {
		return {
			gid: this.id,
			token: this.token
		};
	}
}


class GalleryInfo {
	constructor() {
		this.identifier = null;
		this.title = null;
		this.titleOriginal = null;
		this.dateUploaded = null;
		this.category = null;
		this.uploader = null;
		this.ratingAverage = null;
		this.ratingCount = null;
		this.favoriteCategory = null;
		this.favoriteCount = null;
		this.mainThumbnailUrl = null
		this.thumbnailSize = null;
		this.thumbnailRows = null;
		this.fileCount = null;
		this.approximateTotalFileSize = null;
		this.visible = true;
		this.visibleReason = null;
		this.language = null;
		this.translated = null;
		this.archiverKey = null;
		this.torrentCount = null;
		this.tags = null;
		this.tagsHaveNamespace = null;
		this.currentPage = null;
		this.parent = null;
		this.newerVersions = null;
		this.source = null;
		this.dateGenerated = null;
	}

	toCommonJson() {
		return {
			gallery: toCommonJsonOrDefault(this.identifier, null) || new GalleryIdentifier(0, "").toCommonJson(),
			title: toStringOrDefault(this.title, ""),
			title_original: toStringOrDefault(this.titleOriginal, ""),
			date_uploaded: toStringOrDefault(this.dateUploaded, ""),
			category: toStringOrDefault(this.category, ""),
			uploader: toStringOrDefault(this.uploader, ""),
			rating: {
				average: toNumberOrDefault(this.ratingAverage, 0),
				count: toNumberOrDefault(this.ratingCount, 0),
			},
			favorites: {
				category: (this.favoriteCategory !== null ? toNumberOrDefault(this.favoriteCategory.index, -1) : -1),
				category_title: (this.favoriteCategory !== null ? toStringOrDefault(this.favoriteCategory.title, "") : ""),
				count: toNumberOrDefault(this.favoriteCount, 0)
			},
			parent: toCommonJsonOrDefault(this.parent, null),
			newer_versions: newerVersionsToCommonJson(this.newerVersions),
			thumbnail: toStringOrDefault(this.mainThumbnailUrl, ""),
			thumbnail_size: toStringOrDefault(this.thumbnailSize, ""),
			thumbnail_rows: toNumberOrDefault(this.thumbnailRows, 0),
			image_count: toNumberOrDefault(this.fileCount, 0),
			images_resized: false,
			total_file_size_approx: toNumberOrDefault(this.approximateTotalFileSize, 0),
			visible: (this.visible === true),
			visible_reason: toStringOrDefault(this.visibleReason, ""),
			language: toStringOrDefault(this.language, ""),
			translated: (this.translated === true),
			tags: tagsToCommonJson(this.tags),
			// New
			tags_have_namespace: (this.tagsHaveNamespace === true),
			torrent_count: toNumberOrDefault(this.torrentCount, 0),
			archiver_key: toStringOrDefault(this.archiverKey, null),
			source: toStringOrDefault(this.source, null),
			date_generated: toNumberOrDefault(this.dateGenerated, 0)
		};
	}
}


function toStringOrDefault(value, defaultValue) {
	return typeof(value) === "string" ? value : defaultValue;
}

function toNumberOrDefault(value, defaultValue) {
	return Number.isNaN(value) ? defaultValue : value;
}

function toCommonJsonOrDefault(obj, defaultValue) {
	return (obj && typeof(obj.toCommonJson) === "function") ?
		obj.toCommonJson() :
		defaultValue;
}

function newerVersionsToCommonJson(newerVersions) {
	const result = [];
	if (Array.isArray(newerVersions)) {
		for (const newerVersion of newerVersions) {
			result.push({
				gallery: toCommonJsonOrDefault(newerVersion.identifier, null) || new GalleryIdentifier(0, "").toCommonJson(),
				name: toStringOrDefault(newerVersion.name),
				date_uploaded: toNumberOrDefault(newerVersion.dateUploaded)
			});
		}
	}
	return result;
}

function tagsToCommonJson(tags) {
	const result = {};
	if (tags !== null && typeof(tags) === "object") {
		for (const namespace in tags) {
			const tagList = tags[namespace];
			result[namespace] = [...tagList];
		}
	}
	return result;
}


module.exports = {
	GalleryIdentifier,
	GalleryInfo,
};

},{}],4:[function(require,module,exports){
"use strict";

const types = require("./types");

const sizeLabelToBytesPrefixes = [ "b", "kb", "mb", "gb" ];


function getGalleryIdentifierAndPageFromUrl(url) {
	const match = /^.*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?$/.exec(url);
	if (match === null) { return null; }

	const path = match[1].replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/").split("/");
	if (path[0] !== "g" || path.length < 3) { return null; }

	const identifier = new types.GalleryIdentifier(parseInt(path[1], 10), path[2]);
	if (Number.isNaN(identifier.id)) { return null; }

	let page = null;
	if (match[2]) {
		const match2 = /[\?\&]p=([\+\-]?\d+)/.exec(match[2]);
		if (match2 !== null) {
			page = parseInt(match2[1], 10);
			if (Number.isNaN(page)) { page = null; }
		}
	}

	return { identifier, page };
}

function getBytesSizeFromLabel(number, label) {
	let i = sizeLabelToBytesPrefixes.indexOf(label.toLowerCase());
	if (i < 0) { i = 0; }
	return Math.floor(parseFloat(number) * Math.pow(1024, i));
};


module.exports = {
	getGalleryIdentifierAndPageFromUrl,
	getBytesSizeFromLabel
};

},{"./types":3}],5:[function(require,module,exports){
"use strict";

const style = require("./style");


function createRightSideLink(label) {
	const parent = document.querySelector("#gd5");
	if (parent === null) {
		return { link: null, linkContainer: null };
	}

	const linkContainer = document.createElement("p");
	linkContainer.className = "g2 gsp";

	const img = document.createElement("img");
	img.src = style.getArrowIconUrl();
	linkContainer.appendChild(img);

	linkContainer.appendChild(document.createTextNode(" "));

	const link = document.createElement("a");
	link.textContent = label;
	linkContainer.appendChild(link);

	parent.appendChild(linkContainer);

	return { link, linkContainer };
}


module.exports = {
	createRightSideLink
};

},{"./style":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"./gm":14}],9:[function(require,module,exports){
module.exports = "<div class=\"gm x-resurrected\">\r\n\t<div id=\"gleft\">\r\n\t\t<div id=\"gd1\">\r\n\t\t\t<div><img id=\"x-gallery-resurrect-main-thumbnail\" style=\"max-width:250px;max-height:375px;display:block;\" /></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"gd2\">\r\n\t\t<h1 id=\"gn\"></h1>\r\n\t\t<h1 id=\"gj\"></h1>\r\n\t</div>\r\n\t<div id=\"gright\">\r\n\t\t<div id=\"gd5\">\r\n\t\t\t<p class=\"g3 gsp\" id=\"x-gallery-resurrect-gallery-unavailable\"><img class=\"x-gallery-resurrect-mr-gif\" /> <a title=\"Some information has been resurrected\">Gallery unavailable</a></p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"gmid\">\r\n\t\t<div id=\"gd3\">\r\n\t\t\t<div id=\"gdc\">\r\n\t\t\t\t<a class=\"cs\" id=\"x-gallery-resurrect-category\"></a>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdn\"><a id=\"x-gallery-resurrect-uploader\"></a></div>\r\n\t\t\t<div id=\"gdd\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Posted:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-date-uploaded\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Visible:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-visible\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">File Size:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-size\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Length:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-count\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdr\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"grt1\">Rating:</td>\r\n\t\t\t\t\t\t<td id=\"grt2\">\r\n\t\t\t\t\t\t\t<div id=\"rating_image\" class=\"ir\" style=\"background-position:-80px -1px\"></div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td id=\"grt3\"><span id=\"rating_count\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"rating_label\" colspan=\"3\">Average: <span id=\"x-gallery-resurrect-average-rating\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdf\">\r\n\t\t\t\t<div style=\"float:left;cursor:pointer\" id=\"fav\"></div>\r\n\t\t\t\t<div style=\"float:left\">&nbsp; <a id=\"x-gallery-resurrect-favorites-link\" target=\"_blank\"><img class=\"x-gallery-resurrect-mr-gif\" /> Add to Favorites</a></div>\r\n\t\t\t\t<div class=\"c\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"gd4\">\r\n\t\t\t<div id=\"taglist\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"tc\">tags:</td>\r\n\t\t\t\t\t\t<td id=\"x-gallery-resurrect-tags\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"c\"></div>\r\n\t</div>\r\n\t<div class=\"c\"></div>\r\n</div>\r\n<div id=\"asm\"></div>\r\n<div class=\"gtb\">\r\n\t<p class=\"gpc\">Showing 0 - 0 of 0 images</p>\r\n\t<table class=\"ptt\"><tr><td><a href=\"?p=1\"></a></td></tr></table>\r\n</div>";
},{}],10:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const style = require("../style");
const pageType = require("../api/page-type");

const reJavascriptGotoNext = /setTimeout\s*\(\s*(gotonext|"gotonext\(\)")\s*,\s*\d+\s*\)/;
const fileSizeLabels = [ "B", "KB", "MB", "GB" ];

const categoryInfos = {
	"doujinshi": { name: "Doujinshi", url: "doujinshi", class: "ct2" },
	"manga": { name: "Manga", url: "manga", class: "ct3" },
	"artistcg": { name: "Artist CG", url: "artistcg", class: "ct4" },
	"gamecg": { name: "Game CG", url: "gamecg", class: "ct5" },
	"western": { name: "Western", url: "western", class: "cta" },
	"non-h": { name: "Non-H", url: "non-h", class: "ct9" },
	"imageset": { name: "Image Set", url: "imageset", class: "ct6" },
	"cosplay": { name: "Cosplay", url: "cosplay", class: "ct7" },
	"asianporn": { name: "Asian Porn", url: "asianporn", class: "ct8" },
	"misc": { name: "Misc", url: "misc", class: "ct1" },
};


function onWindowBeforeScriptExecute(event) {
	const remove = (!event.target.getAttribute("src") && reJavascriptGotoNext.test(event.target.textContent));
	if (!remove) { return true; }

	if (event.target.parentNode) {
		event.target.parentNode.removeChild(event.target);
	}

	event.preventDefault();
	event.stopPropagation();
	return false;
}

function blockRedirections() {
	require("../javascript").inject(() => {
		if (typeof(window.gotonext) === "function") {
			window.gotonext = () => {};
		}
	});
}


function insertStylesheet() {
	const id = "x-gallery-resurrect";
	if (!style.hasStylesheet(id)) {
		const src = require("./style.css");
		style.addStylesheet(src, id);
	}
}

function cleanupDocument() {
	for (const node of document.querySelectorAll("body>script,body>div.d")) {
		if (node.parentNode !== null) {
			node.parentNode.removeChild(node);
		}
	}
}

function moveDomNodes(source, destination) {
	if (!source || !destination) { return; }
	for (const node of source.childNodes) {
		destination.appendChild(node);
	}
}

function moveDocument(htmlSource, destination) {
	const galleryHtmlDoc = new DOMParser().parseFromString(htmlSource, "text/html");
	moveDomNodes(galleryHtmlDoc.head, destination.head);
	moveDomNodes(galleryHtmlDoc.body, destination.body);
}

async function insertGalleryHtml(identifier) {
	const apiStyle = require("../api/style");
	const navBar = apiStyle.isDark() ?
		require("./navigation-bar-dark.html") :
		require("./navigation-bar-light.html");

	moveDocument(navBar, document);
	moveDocument(require("./gallery.html"), document);

	const body = document.body;
	if (!body) { return; }

	const imageUrl = apiStyle.getArrowIconUrl();
	for (const node of body.querySelectorAll("img.x-gallery-resurrect-mr-gif")) {
		node.setAttribute("src", imageUrl);
	}

	const galleryInfoFetch = require("../api/gallery-info/fetch");
	const info = await galleryInfoFetch.get(identifier);
	if (info === null) { return; }

	setGalleryInfo(body, info);
}

function setGalleryInfo(html, info) {
	let n;

	// Title
	html.querySelector("#gn").textContent = info.title;
	html.querySelector("#gj").textContent = info.titleOriginal;

	// Thumbnail
	html.querySelector("#x-gallery-resurrect-main-thumbnail").setAttribute("src", info.mainThumbnailUrl);

	// Uploader
	n = html.querySelector("#x-gallery-resurrect-uploader");
	n.textContent = info.uploader;
	n.setAttribute("href", `/uploader/${info.uploader}`);

	// Category
	n = html.querySelector("#x-gallery-resurrect-category");
	if (Object.prototype.hasOwnProperty.call(categoryInfos, info.category)) {
		const categoryInfo = categoryInfos[info.category];
		n.textContent = categoryInfo.name;
		n.classList.add(categoryInfo.class);
		n.setAttribute("href", `/${categoryInfo.url}`);
	} else {
		n.textContent = info.category;
	}

	// Rating
	const pos = getBackgroundPositionForRating(info.ratingAverage);
	html.querySelector("#rating_image").style.backgroundPosition = `${pos.x}px ${pos.y}px`;
	html.querySelector("#x-gallery-resurrect-average-rating").textContent = info.ratingAverage.toFixed(2);

	// Info
	html.querySelector("#x-gallery-resurrect-date-uploaded").textContent = getTimestampDateString(info.dateUploaded);
	html.querySelector("#x-gallery-resurrect-visible").textContent = (info.visible ? "Yes" : "No");
	html.querySelector("#x-gallery-resurrect-file-size").textContent = getPrettyFileSize(info.approximateTotalFileSize);
	html.querySelector("#x-gallery-resurrect-file-count").textContent = plural(info.fileCount, " file", " files");

	// Tags
	const tagContainer = html.querySelector("#x-gallery-resurrect-tags");
	for (const tag of info.tags.undefined) {
		const div = document.createElement("div");
		div.className = "gt";
		const a = document.createElement("a");
		a.href = `/tag/${tag}`;
		a.textContent = tag;
		div.appendChild(a);
		tagContainer.appendChild(div);
	}

	// Favorites
	const favoriteUrl = `/gallerypopups.php?gid=${info.identifier.id}&t=${info.identifier.token}&act=addfav`;
	const favoriteLinkSelector = "#x-gallery-resurrect-favorites-link";
	document.querySelector(favoriteLinkSelector).setAttribute("href", favoriteUrl);
	require("../javascript").inject((favoriteUrl) => {
		document.querySelector("#gdf").addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			try {
				return popUp(favoriteUrl, 675, 415);
			} catch (e) {
				return false;
			}
		}, false);
	}, [ favoriteUrl ]);

	// Download metadata
	setupDownloadLink(info);
}

function getBackgroundPositionForRating(rating) {
	rating = Math.round(rating * 2.0);
	rating = Math.max(0, Math.min(10, rating));
	const x = (5 - Math.ceil(rating / 2)) * -16;
	const y = (rating % 2 === 0) ? -1 : -21;
	return { x, y };
}

function plural(number, singularLabel, pluralLabel) {
	const label = (number === 1 ? singularLabel : pluralLabel);
	return `${number}${label}`;
}

function getTimestampDateString(timestamp) {
	const date = new Date(timestamp);
	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	const hour = date.getHours().toString().padStart(2, "0");
	const minute = date.getMinutes().toString().padStart(2, "0");
	return `${year}-${month}-${day} ${hour}:${minute}`;
}

function getPrettyFileSize(bytes) {
	const ii = fileSizeLabels.length - 1;
	let i = 0;
	while (i < ii && bytes >= 1024) {
		bytes /= 1024;
		++i;
	}
	return `${bytes.toFixed(i === 0 ? 0 : 2)} ${fileSizeLabels[i]}`;
}


function setupDownloadLink(info) {
	const galleryLinks = require("../api/gallery-links");
	const link = galleryLinks.createRightSideLink("Metadata JSON").link;
	if (link === null) { return; }

	link.setAttribute("download", "info.json");
	link.href = createDownloadDataUrl(info);
}

function createDownloadDataUrl(info) {
	if (info === null) { return null; }

	const infoString = JSON.stringify(info.toCommonJson(), null, "  ");
	const blob = new Blob([ infoString ], { type: "application/json" });
	return URL.createObjectURL(blob);
}


function main() {
	const currentPageType = pageType.get(document, location);
	if (currentPageType !== "deletedGallery") { return; }

	blockRedirections();

	const utils = require("../api/gallery-info/utils");
	const info = utils.getGalleryIdentifierAndPageFromUrl(location.href);
	if (info === null) { return; }

	insertStylesheet();
	cleanupDocument();
	insertGalleryHtml(info.identifier);

	document.documentElement.classList.toggle("x-page-resurrected");
	pageType.setOverride(currentPageType);
}


window.addEventListener("beforescriptexecute", onWindowBeforeScriptExecute, true);
ready.onReady(main);

},{"../api/gallery-info/fetch":1,"../api/gallery-info/utils":4,"../api/gallery-links":5,"../api/page-type":6,"../api/style":7,"../javascript":15,"../ready":16,"../style":17,"./gallery.html":9,"./navigation-bar-dark.html":11,"./navigation-bar-light.html":12,"./style.css":13}],11:[function(require,module,exports){
module.exports = "<div id=\"nb\" class=\"nosel x-resurrected\">\r\n\t<div><a class=\"nbw\" href=\"/\">Front<span class=\"nbw1\"> Page</span></a></div>\r\n\t<div><a href=\"/watched\">Watched</a></div>\r\n\t<div><a href=\"/popular\">Popular</a></div>\r\n\t<div><a href=\"/torrents.php\">Torrents</a></div>\r\n\t<div><a href=\"/favorites.php\">Fav<span class=\"nbw1\">orite</span>s</a></div>\r\n\t<div><a href=\"/uconfig.php\">Settings</a></div>\r\n\t<div><a href=\"/upload/manage.php\"><span class=\"nbw2\">My </span>Uploads</a></div>\r\n\t<div><a href=\"/mytags\">My Tags</a></div>\r\n</div>";
},{}],12:[function(require,module,exports){
module.exports = "<div id=\"nb\" class=\"nosel x-resurrected\">\r\n\t<div><a class=\"nbw\" href=\"/\">Front<span class=\"nbw1\"> Page</span></a></div>\r\n\t<div><a href=\"/watched\">Watched</a></div>\r\n\t<div><a href=\"/popular\">Popular</a></div>\r\n\t<div><a href=\"/torrents.php\">Torrents</a></div>\r\n\t<div><a href=\"/favorites.php\">Fav<span class=\"nbw1\">orite</span>s</a></div>\r\n\t<div><a href=\"/home.php\"><span class=\"nbw2\">My </span>Home</a></div>\r\n\t<div><a href=\"https://upload.e-hentai.org/manage.php\"><span class=\"nbw2\">My </span>Uploads</a></div>\r\n\t<div><a href=\"/toplist.php\">Toplists</a></div>\r\n\t<div><a href=\"/bounty.php\">Bounties</a></div>\r\n\t<div><a href=\"/news.php\">News</a></div>\r\n\t<div><a href=\"https://forums.e-hentai.org/\">Forums</a></div>\r\n\t<div><a href=\"https://ehwiki.org/\">Wiki</a></div>\r\n\t<div><a href=\"https://hentaiverse.org/\" onclick=\"popUp('https://hentaiverse.org/',1250,720); return false\">H<span class=\"nbw1\">entai</span>V<span class=\"nbw1\">erse</span></a></div>\r\n</div>";
},{}],13:[function(require,module,exports){
module.exports = "body>:not(.x-resurrected){display:none!important}#x-gallery-resurrect-category{text-decoration:none}";
},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
"use strict";


function inject(func, args) {
	const parent = document.body || document.documentElement.querySelector("head") || document.documentElement || null;
	if (!parent) { return false; }

	const scriptNode = document.createElement("script");
	const argStr = (Array.isArray(args) && args.length > 0) ?
		`...${JSON.stringify(args, null, "")}` :
		"";
	scriptNode.textContent = `(${func.toString()})(${argStr});`;

	parent.appendChild(scriptNode);
	parent.removeChild(scriptNode);

	return true;
}


module.exports = {
	inject
};

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"./api/style":7}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby9mZXRjaC5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2dldC1mcm9tLWpzb24uanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby90eXBlcy5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3V0aWxzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWxpbmtzLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3N0eWxlLmpzIiwic3JjL2ZldGNoLmpzIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L2dhbGxlcnkuaHRtbCIsInNyYy9nYWxsZXJ5LXJlc3VycmVjdC9tYWluLmpzIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L25hdmlnYXRpb24tYmFyLWRhcmsuaHRtbCIsInNyYy9nYWxsZXJ5LXJlc3VycmVjdC9uYXZpZ2F0aW9uLWJhci1saWdodC5odG1sIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L3N0eWxlLmNzcyIsInNyYy9nbS5qcyIsInNyYy9qYXZhc2NyaXB0LmpzIiwic3JjL3JlYWR5LmpzIiwic3JjL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hQQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoXCIuLi8uLi9mZXRjaFwiKTtcclxuY29uc3QgZ2V0RnJvbUpzb24gPSByZXF1aXJlKFwiLi9nZXQtZnJvbS1qc29uXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFycmF5Q291bnQoYXJyYXksIGNvdW50LCBmaWxsKSB7XHJcblx0Y29uc3QgaWkgPSBhcnJheS5sZW5ndGg7XHJcblx0aWYgKGlpICE9PSBjb3VudCkge1xyXG5cdFx0aWYgKGlpID4gY291bnQpIHtcclxuXHRcdFx0YXJyYXkuc3BsaWNlKGNvdW50LCBpaSAtIGNvdW50KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSBpaTsgaSA8IGNvdW50OyArK2kpIHtcclxuXHRcdFx0XHRhcnJheS5wdXNoKGZpbGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHYWxsZXJ5SW5mbyhpZGVudGlmaWVycykge1xyXG5cdGNvbnN0IGdpZExpc3QgPSBbXTtcclxuXHRjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShpZGVudGlmaWVycyk7XHJcblx0aWYgKGlzQXJyYXkpIHtcclxuXHRcdGZvciAoY29uc3QgaWRlbnRpZmllciBvZiBpZGVudGlmaWVycykge1xyXG5cdFx0XHRnaWRMaXN0LnB1c2goWyBpZGVudGlmaWVyLmlkLCBpZGVudGlmaWVyLnRva2VuIF0pO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRnaWRMaXN0LnB1c2goWyBpZGVudGlmaWVycy5pZCwgaWRlbnRpZmllcnMudG9rZW4gXSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBkYXRhID0ge1xyXG5cdFx0bWV0aG9kOiBcImdkYXRhXCIsXHJcblx0XHRnaWRsaXN0OiBnaWRMaXN0XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZmV0Y2hSZXN1bHQgPSBhd2FpdCBmZXRjaC5wb3N0KHtcclxuXHRcdGdtOiB0cnVlLFxyXG5cdFx0dXJsOiBcIi9hcGkucGhwXCIsXHJcblx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCByZXN1bHRKc29uID0gSlNPTi5wYXJzZShmZXRjaFJlc3VsdC5yZXNwb25zZVRleHQpO1xyXG5cclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Zm9yIChjb25zdCBqc29uIG9mIHJlc3VsdEpzb24uZ21ldGFkYXRhKSB7XHJcblx0XHRpZiAoanNvbi5lcnJvcikge1xyXG5cdFx0XHRyZXN1bHRzLnB1c2gobnVsbCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBpbmZvID0gZ2V0RnJvbUpzb24oanNvbik7XHJcblx0XHRcdHJlc3VsdHMucHVzaChpbmZvKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldEFycmF5Q291bnQocmVzdWx0cywgZ2lkTGlzdC5sZW5ndGgsIG51bGwpO1xyXG5cclxuXHRyZXR1cm4gaXNBcnJheSA/IHJlc3VsdHMgOiByZXN1bHRzWzBdO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0OiBnZXRHYWxsZXJ5SW5mb1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodmFsdWUsIFwidGV4dC9odG1sXCIpO1xyXG4gIHJldHVybiBkb2MuZG9jdW1lbnRFbGVtZW50LnRleHRDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRKc29uTnVtYmVyKHZhbHVlKSB7XHJcblx0aWYgKHR5cGVvZih2YWx1ZSkgIT09IFwibnVtYmVyXCIpIHtcclxuXHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSBcInN0cmluZ1wiKSB7IHJldHVybiBudWxsOyB9XHJcblx0XHR2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG5cdH1cclxuXHRyZXR1cm4gKE51bWJlci5pc05hTih2YWx1ZSkgPyBudWxsIDogdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRKc29uU3RyaW5nKHZhbHVlKSB7XHJcblx0aWYgKHR5cGVvZih2YWx1ZSkgPT09IFwic3RyaW5nXCIpIHsgcmV0dXJuIHZhbHVlOyB9XHJcblx0aWYgKHR5cGVvZih2YWx1ZSkgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIHZhbHVlOyB9XHJcblx0cmV0dXJuIGAke3ZhbHVlfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSnNvbihpbmZvLCBqc29uKSB7XHJcblx0aW5mby50aXRsZSA9IGdldFN0cmluZ0Zyb21IdG1sRXNjYXBlZFN0cmluZyhnZXRKc29uU3RyaW5nKGpzb24udGl0bGUpKTtcclxuXHRpbmZvLnRpdGxlT3JpZ2luYWwgPSBnZXRTdHJpbmdGcm9tSHRtbEVzY2FwZWRTdHJpbmcoZ2V0SnNvblN0cmluZyhqc29uLnRpdGxlX2pwbikpO1xyXG5cdGluZm8ubWFpblRodW1ibmFpbFVybCA9IGdldEpzb25TdHJpbmcoanNvbi50aHVtYik7XHJcblx0Y29uc3QgY2F0ZWdvcnkgPSBnZXRKc29uU3RyaW5nKGpzb24uY2F0ZWdvcnkpO1xyXG5cdGluZm8uY2F0ZWdvcnkgPSAoY2F0ZWdvcnkgIT09IG51bGwgPyBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpIDogbnVsbCk7XHJcblx0aW5mby51cGxvYWRlciA9IGdldEpzb25TdHJpbmcoanNvbi51cGxvYWRlcik7XHJcblxyXG5cdGluZm8ucmF0aW5nQXZlcmFnZSA9IGdldEpzb25OdW1iZXIoanNvbi5yYXRpbmcpO1xyXG5cclxuXHRjb25zdCBkYXRlVXBsb2FkZWQgPSBnZXRKc29uTnVtYmVyKGpzb24ucG9zdGVkKTtcclxuXHRpbmZvLmRhdGVVcGxvYWRlZCA9IChkYXRlVXBsb2FkZWQgIT09IG51bGwgPyBuZXcgRGF0ZShkYXRlVXBsb2FkZWQgKiAxMDAwKS5nZXRUaW1lKCkgOiBudWxsKTtcclxuXHJcblx0aW5mby52aXNpYmxlID0gIWpzb24uZXhwdW5nZWQ7XHJcblxyXG5cdGluZm8uYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplID0gZ2V0SnNvbk51bWJlcihqc29uLmZpbGVzaXplKTtcclxuXHJcblx0aW5mby5maWxlQ291bnQgPSBnZXRKc29uTnVtYmVyKGpzb24uZmlsZWNvdW50KTtcclxuXHJcblx0aW5mby5hcmNoaXZlcktleSA9IGdldEpzb25TdHJpbmcoanNvbi5hcmNoaXZlcl9rZXkpO1xyXG5cdGluZm8udG9ycmVudENvdW50ID0gZ2V0SnNvbk51bWJlcihqc29uLnRvcnJlbnRjb3VudCk7XHJcblxyXG5cdGNvbnN0IHRhZ0xpc3QgPSBbXTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShqc29uLnRhZ3MpKSB7XHJcblx0XHRmb3IgKGNvbnN0IHRhZyBvZiBqc29uLnRhZ3MpIHtcclxuXHRcdFx0Y29uc3Qgc3RyaW5nVGFnID0gZ2V0SnNvblN0cmluZyh0YWcpO1xyXG5cdFx0XHRpZiAoc3RyaW5nVGFnICE9PSBudWxsKSB7IHRhZ0xpc3QucHVzaChzdHJpbmdUYWcpOyB9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpbmZvLnRhZ3MgPSB7IFwidW5kZWZpbmVkXCI6IHRhZ0xpc3QgfTtcclxuXHRpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21Kc29uKGpzb24pIHtcclxuXHRpZiAoanNvbiA9PT0gbnVsbCB8fCB0eXBlb2YoanNvbikgIT09IFwib2JqZWN0XCIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWQgPSBnZXRKc29uTnVtYmVyKGpzb24uZ2lkKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldEpzb25TdHJpbmcoanNvbi50b2tlbik7XHJcblx0aWYgKGlkID09PSBudWxsIHx8IHRva2VuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSBuZXcgdHlwZXMuR2FsbGVyeUluZm8oKTtcclxuXHRpbmZvLmlkZW50aWZpZXIgPSBuZXcgdHlwZXMuR2FsbGVyeUlkZW50aWZpZXIoaWQsIHRva2VuKTtcclxuXHRpbmZvLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRpbmZvLnNvdXJjZSA9IFwianNvblwiO1xyXG5cdHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSnNvbihpbmZvLCBqc29uKTtcclxuXHRpbmZvLmRhdGVHZW5lcmF0ZWQgPSBEYXRlLm5vdygpO1xyXG5cdHJldHVybiBpbmZvO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXRGcm9tSnNvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5SWRlbnRpZmllciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIHRva2VuKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRva2VuID0gdG9rZW47XHJcblx0fVxyXG5cclxuXHR0b0NvbW1vbkpzb24oKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRnaWQ6IHRoaXMuaWQsXHJcblx0XHRcdHRva2VuOiB0aGlzLnRva2VuXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEdhbGxlcnlJbmZvIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWRlbnRpZmllciA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlID0gbnVsbDtcclxuXHRcdHRoaXMudGl0bGVPcmlnaW5hbCA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVVcGxvYWRlZCA9IG51bGw7XHJcblx0XHR0aGlzLmNhdGVnb3J5ID0gbnVsbDtcclxuXHRcdHRoaXMudXBsb2FkZXIgPSBudWxsO1xyXG5cdFx0dGhpcy5yYXRpbmdBdmVyYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5mYXZvcml0ZUNhdGVnb3J5ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLm1haW5UaHVtYm5haWxVcmwgPSBudWxsXHJcblx0XHR0aGlzLnRodW1ibmFpbFNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy50aHVtYm5haWxSb3dzID0gbnVsbDtcclxuXHRcdHRoaXMuZmlsZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblx0XHR0aGlzLnZpc2libGVSZWFzb24gPSBudWxsO1xyXG5cdFx0dGhpcy5sYW5ndWFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcmNoaXZlcktleSA9IG51bGw7XHJcblx0XHR0aGlzLnRvcnJlbnRDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3MgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzSGF2ZU5hbWVzcGFjZSA9IG51bGw7XHJcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHRcdHRoaXMubmV3ZXJWZXJzaW9ucyA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZSA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVHZW5lcmF0ZWQgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0dG9Db21tb25Kc29uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Z2FsbGVyeTogdG9Db21tb25Kc29uT3JEZWZhdWx0KHRoaXMuaWRlbnRpZmllciwgbnVsbCkgfHwgbmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLnRvQ29tbW9uSnNvbigpLFxyXG5cdFx0XHR0aXRsZTogdG9TdHJpbmdPckRlZmF1bHQodGhpcy50aXRsZSwgXCJcIiksXHJcblx0XHRcdHRpdGxlX29yaWdpbmFsOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnRpdGxlT3JpZ2luYWwsIFwiXCIpLFxyXG5cdFx0XHRkYXRlX3VwbG9hZGVkOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLmRhdGVVcGxvYWRlZCwgXCJcIiksXHJcblx0XHRcdGNhdGVnb3J5OiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLmNhdGVnb3J5LCBcIlwiKSxcclxuXHRcdFx0dXBsb2FkZXI6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMudXBsb2FkZXIsIFwiXCIpLFxyXG5cdFx0XHRyYXRpbmc6IHtcclxuXHRcdFx0XHRhdmVyYWdlOiB0b051bWJlck9yRGVmYXVsdCh0aGlzLnJhdGluZ0F2ZXJhZ2UsIDApLFxyXG5cdFx0XHRcdGNvdW50OiB0b051bWJlck9yRGVmYXVsdCh0aGlzLnJhdGluZ0NvdW50LCAwKSxcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmF2b3JpdGVzOiB7XHJcblx0XHRcdFx0Y2F0ZWdvcnk6ICh0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkgIT09IG51bGwgPyB0b051bWJlck9yRGVmYXVsdCh0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkuaW5kZXgsIC0xKSA6IC0xKSxcclxuXHRcdFx0XHRjYXRlZ29yeV90aXRsZTogKHRoaXMuZmF2b3JpdGVDYXRlZ29yeSAhPT0gbnVsbCA/IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMuZmF2b3JpdGVDYXRlZ29yeS50aXRsZSwgXCJcIikgOiBcIlwiKSxcclxuXHRcdFx0XHRjb3VudDogdG9OdW1iZXJPckRlZmF1bHQodGhpcy5mYXZvcml0ZUNvdW50LCAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXJlbnQ6IHRvQ29tbW9uSnNvbk9yRGVmYXVsdCh0aGlzLnBhcmVudCwgbnVsbCksXHJcblx0XHRcdG5ld2VyX3ZlcnNpb25zOiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKHRoaXMubmV3ZXJWZXJzaW9ucyksXHJcblx0XHRcdHRodW1ibmFpbDogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5tYWluVGh1bWJuYWlsVXJsLCBcIlwiKSxcclxuXHRcdFx0dGh1bWJuYWlsX3NpemU6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMudGh1bWJuYWlsU2l6ZSwgXCJcIiksXHJcblx0XHRcdHRodW1ibmFpbF9yb3dzOiB0b051bWJlck9yRGVmYXVsdCh0aGlzLnRodW1ibmFpbFJvd3MsIDApLFxyXG5cdFx0XHRpbWFnZV9jb3VudDogdG9OdW1iZXJPckRlZmF1bHQodGhpcy5maWxlQ291bnQsIDApLFxyXG5cdFx0XHRpbWFnZXNfcmVzaXplZDogZmFsc2UsXHJcblx0XHRcdHRvdGFsX2ZpbGVfc2l6ZV9hcHByb3g6IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMuYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplLCAwKSxcclxuXHRcdFx0dmlzaWJsZTogKHRoaXMudmlzaWJsZSA9PT0gdHJ1ZSksXHJcblx0XHRcdHZpc2libGVfcmVhc29uOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnZpc2libGVSZWFzb24sIFwiXCIpLFxyXG5cdFx0XHRsYW5ndWFnZTogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5sYW5ndWFnZSwgXCJcIiksXHJcblx0XHRcdHRyYW5zbGF0ZWQ6ICh0aGlzLnRyYW5zbGF0ZWQgPT09IHRydWUpLFxyXG5cdFx0XHR0YWdzOiB0YWdzVG9Db21tb25Kc29uKHRoaXMudGFncyksXHJcblx0XHRcdC8vIE5ld1xyXG5cdFx0XHR0YWdzX2hhdmVfbmFtZXNwYWNlOiAodGhpcy50YWdzSGF2ZU5hbWVzcGFjZSA9PT0gdHJ1ZSksXHJcblx0XHRcdHRvcnJlbnRfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMudG9ycmVudENvdW50LCAwKSxcclxuXHRcdFx0YXJjaGl2ZXJfa2V5OiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLmFyY2hpdmVyS2V5LCBudWxsKSxcclxuXHRcdFx0c291cmNlOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnNvdXJjZSwgbnVsbCksXHJcblx0XHRcdGRhdGVfZ2VuZXJhdGVkOiB0b051bWJlck9yRGVmYXVsdCh0aGlzLmRhdGVHZW5lcmF0ZWQsIDApXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvU3RyaW5nT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRyZXR1cm4gdHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b051bWJlck9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25Kc29uT3JEZWZhdWx0KG9iaiwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIChvYmogJiYgdHlwZW9mKG9iai50b0NvbW1vbkpzb24pID09PSBcImZ1bmN0aW9uXCIpID9cclxuXHRcdG9iai50b0NvbW1vbkpzb24oKSA6XHJcblx0XHRkZWZhdWx0VmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld2VyVmVyc2lvbnNUb0NvbW1vbkpzb24obmV3ZXJWZXJzaW9ucykge1xyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KG5ld2VyVmVyc2lvbnMpKSB7XHJcblx0XHRmb3IgKGNvbnN0IG5ld2VyVmVyc2lvbiBvZiBuZXdlclZlcnNpb25zKSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHtcclxuXHRcdFx0XHRnYWxsZXJ5OiB0b0NvbW1vbkpzb25PckRlZmF1bHQobmV3ZXJWZXJzaW9uLmlkZW50aWZpZXIsIG51bGwpIHx8IG5ldyBHYWxsZXJ5SWRlbnRpZmllcigwLCBcIlwiKS50b0NvbW1vbkpzb24oKSxcclxuXHRcdFx0XHRuYW1lOiB0b1N0cmluZ09yRGVmYXVsdChuZXdlclZlcnNpb24ubmFtZSksXHJcblx0XHRcdFx0ZGF0ZV91cGxvYWRlZDogdG9OdW1iZXJPckRlZmF1bHQobmV3ZXJWZXJzaW9uLmRhdGVVcGxvYWRlZClcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhZ3NUb0NvbW1vbkpzb24odGFncykge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGlmICh0YWdzICE9PSBudWxsICYmIHR5cGVvZih0YWdzKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Zm9yIChjb25zdCBuYW1lc3BhY2UgaW4gdGFncykge1xyXG5cdFx0XHRjb25zdCB0YWdMaXN0ID0gdGFnc1tuYW1lc3BhY2VdO1xyXG5cdFx0XHRyZXN1bHRbbmFtZXNwYWNlXSA9IFsuLi50YWdMaXN0XTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyLFxyXG5cdEdhbGxlcnlJbmZvLFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcblxyXG5jb25zdCBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMgPSBbIFwiYlwiLCBcImtiXCIsIFwibWJcIiwgXCJnYlwiIF07XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBtYXRjaCA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXRoID0gbWF0Y2hbMV0ucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgXCJcIikucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xyXG5cdGlmIChwYXRoWzBdICE9PSBcImdcIiB8fCBwYXRoLmxlbmd0aCA8IDMpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWRlbnRpZmllciA9IG5ldyB0eXBlcy5HYWxsZXJ5SWRlbnRpZmllcihwYXJzZUludChwYXRoWzFdLCAxMCksIHBhdGhbMl0pO1xyXG5cdGlmIChOdW1iZXIuaXNOYU4oaWRlbnRpZmllci5pZCkpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0bGV0IHBhZ2UgPSBudWxsO1xyXG5cdGlmIChtYXRjaFsyXSkge1xyXG5cdFx0Y29uc3QgbWF0Y2gyID0gL1tcXD9cXCZdcD0oW1xcK1xcLV0/XFxkKykvLmV4ZWMobWF0Y2hbMl0pO1xyXG5cdFx0aWYgKG1hdGNoMiAhPT0gbnVsbCkge1xyXG5cdFx0XHRwYWdlID0gcGFyc2VJbnQobWF0Y2gyWzFdLCAxMCk7XHJcblx0XHRcdGlmIChOdW1iZXIuaXNOYU4ocGFnZSkpIHsgcGFnZSA9IG51bGw7IH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IGlkZW50aWZpZXIsIHBhZ2UgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Qnl0ZXNTaXplRnJvbUxhYmVsKG51bWJlciwgbGFiZWwpIHtcclxuXHRsZXQgaSA9IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcy5pbmRleE9mKGxhYmVsLnRvTG93ZXJDYXNlKCkpO1xyXG5cdGlmIChpIDwgMCkgeyBpID0gMDsgfVxyXG5cdHJldHVybiBNYXRoLmZsb29yKHBhcnNlRmxvYXQobnVtYmVyKSAqIE1hdGgucG93KDEwMjQsIGkpKTtcclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsLFxyXG5cdGdldEJ5dGVzU2l6ZUZyb21MYWJlbFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4vc3R5bGVcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmlnaHRTaWRlTGluayhsYWJlbCkge1xyXG5cdGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2Q1XCIpO1xyXG5cdGlmIChwYXJlbnQgPT09IG51bGwpIHtcclxuXHRcdHJldHVybiB7IGxpbms6IG51bGwsIGxpbmtDb250YWluZXI6IG51bGwgfTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRsaW5rQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZzIgZ3NwXCI7XHJcblxyXG5cdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0aW1nLnNyYyA9IHN0eWxlLmdldEFycm93SWNvblVybCgpO1xyXG5cdGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBcIikpO1xyXG5cclxuXHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0bGluay50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG5cdGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG5cdHBhcmVudC5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcclxuXHJcblx0cmV0dXJuIHsgbGluaywgbGlua0NvbnRhaW5lciB9O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y3JlYXRlUmlnaHRTaWRlTGlua1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG92ZXJyaWRlQXR0cmlidXRlTmFtZSA9IFwiZGF0YS14LW92ZXJyaWRlLXBhZ2UtdHlwZVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldE92ZXJyaWRlKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZSgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHRyZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChkb2MsIGxvY2F0aW9uKSB7XHJcblx0Y29uc3Qgb3ZlcnJpZGVUeXBlID0gZ2V0T3ZlcnJpZGUoKTtcclxuXHRpZiAob3ZlcnJpZGVUeXBlICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gb3ZlcnJpZGVUeXBlO1xyXG5cdH1cclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9ZmF2Y2F0XVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZmF2b3JpdGVzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiLmdtIGgxI2duXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5XCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX291dGVyXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZXR0aW5nc1wiO1xyXG5cdH1cclxuXHJcblx0bGV0IG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImJvZHk+LmQ+cFwiKTtcclxuXHRpZiAoXHJcblx0XHQobiAhPT0gbnVsbCAmJiAvZ2FsbGVyeVxccytoYXNcXHMrYmVlblxccytyZW1vdmVkL2kudGVzdChuLnRleHRDb250ZW50KSkgfHxcclxuXHRcdGRvYy5xdWVyeVNlbGVjdG9yKFwiLmV6ZV9kZ2FsbGVyeV90YWJsZVwiKSAhPT0gbnVsbCkgeyAvLyBlemUgcmVzdXJyZWN0aW9uXHJcblx0XHRyZXR1cm4gXCJkZWxldGVkR2FsbGVyeVwiO1xyXG5cdH1cclxuXHJcblx0biA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0aWYgKG4gIT09IG51bGwgJiYgbG9jYXRpb24gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IHAgPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdGlmIChcclxuXHRcdFx0bi5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT09IGxvY2F0aW9uLmhyZWYgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgMykgIT09IFwiL3QvXCIgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgNSkgIT09IFwiL2ltZy9cIikge1xyXG5cdFx0XHRyZXR1cm4gXCJwYW5kYVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVW5rbm93blxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0LFxyXG5cdGdldE92ZXJyaWRlLFxyXG5cdHNldE92ZXJyaWRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gaXNEYXJrKCkge1xyXG5cdHJldHVybiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluZGV4T2YoXCJleGhlbnRhaVwiKSA+PSAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RG9jdW1lbnREYXJrRmxhZygpIHtcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIngtaXMtZGFya1wiLCBpc0RhcmsoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFycm93SWNvblVybCgpIHtcclxuXHRyZXR1cm4gKGlzRGFyaygpID8gXCJodHRwczovL2V4aGVudGFpLm9yZy9pbWcvbXIuZ2lmXCIgOiBcImh0dHBzOi8vZWhndC5vcmcvZy9tci5naWZcIik7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpc0RhcmssXHJcblx0c2V0RG9jdW1lbnREYXJrRmxhZyxcclxuXHRnZXRBcnJvd0ljb25VcmxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBnbSA9IHJlcXVpcmUoXCIuL2dtXCIpO1xyXG5cclxuXHJcbmNsYXNzIEZldGNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgcmVzcG9uc2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJGZXRjaEVycm9yXCI7XHJcblx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXNwb25zZSB7XHJcblx0Y29uc3RydWN0b3IocmVhZHlTdGF0ZSwgcmVzcG9uc2VIZWFkZXJzLCByZXNwb25zZVRleHQsIHN0YXR1cywgc3RhdHVzVGV4dCkge1xyXG5cdFx0dGhpcy5yZWFkeVN0YXRlID0gcmVhZHlTdGF0ZTtcclxuXHRcdHRoaXMucmVzcG9uc2VIZWFkZXJzID0gcmVzcG9uc2VIZWFkZXJzO1xyXG5cdFx0dGhpcy5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHQ7XHJcblx0XHR0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuXHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBQcm9ncmVzc0V2ZW50IHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGhDb21wdXRhYmxlLCBsb2FkZWQsIHRvdGFsKSB7XHJcblx0XHR0aGlzLmxlbmd0aENvbXB1dGFibGUgPSBsZW5ndGhDb21wdXRhYmxlO1xyXG5cdFx0dGhpcy5sb2FkZWQgPSBsb2FkZWQ7XHJcblx0XHR0aGlzLnRvdGFsID0gdG90YWw7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzcG9uc2VIZWFkZXJNYXAoYWxsSGVhZGVycykge1xyXG5cdGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IHt9O1xyXG5cclxuXHRjb25zdCByZSA9IC9cXHMqKC4qKVxccyo6XFxzKiguKilcXHMqLztcclxuXHRmb3IgKGNvbnN0IGxpbmUgb2YgYWxsSGVhZGVycy5yZXBsYWNlKC9cXHJcXG5cXHMqJC8sIFwiXCIpLnNwbGl0KFwiXFxyXFxuXCIpKSB7XHJcblx0XHRjb25zdCBtID0gcmUuZXhlYyhsaW5lKTtcclxuXHRcdGlmIChtICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1ttWzFdLnRvTG93ZXJDYXNlKCldID0gbVsyXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNwb25zZUhlYWRlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0eGhyLnJlYWR5U3RhdGUsXHJcblx0XHRnZXRSZXNwb25zZUhlYWRlck1hcCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpLFxyXG5cdFx0eGhyLnJlc3BvbnNlVGV4dCxcclxuXHRcdHhoci5zdGF0dXMsXHJcblx0XHR4aHIuc3RhdHVzVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykge1xyXG5cdGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0Ly9jb25zdCBiaW5hcnkgPSBvcHRpb25zLmJpbmFyeTtcclxuXHRjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG5cdGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuXHRjb25zdCBvbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xyXG5cdGNvbnN0IG92ZXJyaWRlTWltZVR5cGUgPSBvcHRpb25zLm92ZXJyaWRlTWltZVR5cGU7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHR4aHIudGltZW91dCA9IHRpbWVvdXQ7XHJcblx0XHRpZiAodHlwZW9mKG92ZXJyaWRlTWltZVR5cGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKG92ZXJyaWRlTWltZVR5cGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGhlYWRlcnMgIT09IG51bGwgJiYgdHlwZW9mKGhlYWRlcnMpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdGZvciAobGV0IGsgaW4gaGVhZGVycykge1xyXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIGhlYWRlcnNba10pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoY29udmVydFhoclJlc3BvbnNlKHhocikpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke3hoci5zdGF0dXNUZXh0fSAoJHt4aHIuc3RhdHVzfSlgLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5zZW5kKGRhdGEpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydEdtUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0cmVzcG9uc2UucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHJlc3BvbnNlLnJlc3BvbnNlSGVhZGVycyksXHJcblx0XHRyZXNwb25zZS5yZXNwb25zZVRleHQsXHJcblx0XHRyZXNwb25zZS5zdGF0dXMsXHJcblx0XHRyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdGNvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IGRldGFpbHMgPSB7XHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcclxuXHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogb3ZlcnJpZGVNaW1lVHlwZSxcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0YmluYXJ5OiBiaW5hcnksXHJcblx0XHRcdHN5bmNocm9ub3VzOiBmYWxzZSxcclxuXHRcdFx0dGltZW91dDogdGltZW91dFxyXG5cdFx0fTtcclxuXHJcblx0XHRkZXRhaWxzLm9ubG9hZCA9IChlKSA9PiByZXNvbHZlKGNvbnZlcnRHbVJlc3BvbnNlKGUpKTtcclxuXHRcdGRldGFpbHMub25lcnJvciA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7ZS5zdGF0dXNUZXh0fSAoJHtlLnN0YXR1c30pYCwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub25hYm9ydCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub250aW1lb3V0ID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob25wcm9ncmVzcykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRkZXRhaWxzLm9ucHJvZ3Jlc3MgPSAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z20ueG1sSHR0cFJlcXVlc3QoZGV0YWlscyk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc0dtU3VwcG9ydGVkKHVzZUdtKSB7XHJcblx0cmV0dXJuICh1c2VHbSAmJiB0eXBlb2YoZ20ueG1sSHR0cFJlcXVlc3QpID09PSBcImZ1bmN0aW9uXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJHRVRcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHJlcXVlc3Q6IHJlcXVlc3QsXHJcblx0Z2V0OiBnZXQsXHJcblx0cG9zdDogcG9zdCxcclxuXHRnbToge1xyXG5cdFx0cmVxdWVzdDogcmVxdWVzdEdtLFxyXG5cdFx0Z2V0OiBnZXRHbSxcclxuXHRcdHBvc3Q6IHBvc3RHbSxcclxuXHR9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnbSB4LXJlc3VycmVjdGVkXFxcIj5cXHJcXG5cXHQ8ZGl2IGlkPVxcXCJnbGVmdFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBpZD1cXFwiZ2QxXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2PjxpbWcgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtbWFpbi10aHVtYm5haWxcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6MjUwcHg7bWF4LWhlaWdodDozNzVweDtkaXNwbGF5OmJsb2NrO1xcXCIgLz48L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGlkPVxcXCJnZDJcXFwiPlxcclxcblxcdFxcdDxoMSBpZD1cXFwiZ25cXFwiPjwvaDE+XFxyXFxuXFx0XFx0PGgxIGlkPVxcXCJnalxcXCI+PC9oMT5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGlkPVxcXCJncmlnaHRcXFwiPlxcclxcblxcdFxcdDxkaXYgaWQ9XFxcImdkNVxcXCI+XFxyXFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcImczIGdzcFxcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtZ2FsbGVyeS11bmF2YWlsYWJsZVxcXCI+PGltZyBjbGFzcz1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1tci1naWZcXFwiIC8+IDxhIHRpdGxlPVxcXCJTb21lIGluZm9ybWF0aW9uIGhhcyBiZWVuIHJlc3VycmVjdGVkXFxcIj5HYWxsZXJ5IHVuYXZhaWxhYmxlPC9hPjwvcD5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGlkPVxcXCJnbWlkXFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJnZDNcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcImdkY1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcImNzXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1jYXRlZ29yeVxcXCI+PC9hPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcImdkblxcXCI+PGEgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtdXBsb2FkZXJcXFwiPjwvYT48L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJnZGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdDx0YWJsZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5Qb3N0ZWQ6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWRhdGUtdXBsb2FkZWRcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5WaXNpYmxlOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQyXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC12aXNpYmxlXFxcIj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+RmlsZSBTaXplOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQyXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1maWxlLXNpemVcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5MZW5ndGg6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWZpbGUtY291bnRcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHQ8L3RhYmxlPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcImdkclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHRhYmxlPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgaWQ9XFxcImdydDFcXFwiPlJhdGluZzo8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBpZD1cXFwiZ3J0MlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBpZD1cXFwicmF0aW5nX2ltYWdlXFxcIiBjbGFzcz1cXFwiaXJcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC0xcHhcXFwiPjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGlkPVxcXCJncnQzXFxcIj48c3BhbiBpZD1cXFwicmF0aW5nX2NvdW50XFxcIj48L3NwYW4+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgaWQ9XFxcInJhdGluZ19sYWJlbFxcXCIgY29sc3Bhbj1cXFwiM1xcXCI+QXZlcmFnZTogPHNwYW4gaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtYXZlcmFnZS1yYXRpbmdcXFwiPjwvc3Bhbj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0PC90YWJsZT5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJnZGZcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgc3R5bGU9XFxcImZsb2F0OmxlZnQ7Y3Vyc29yOnBvaW50ZXJcXFwiIGlkPVxcXCJmYXZcXFwiPjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXYgc3R5bGU9XFxcImZsb2F0OmxlZnRcXFwiPiZuYnNwOyA8YSBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1mYXZvcml0ZXMtbGlua1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgY2xhc3M9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtbXItZ2lmXFxcIiAvPiBBZGQgdG8gRmF2b3JpdGVzPC9hPjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNcXFwiPjwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDxkaXYgaWQ9XFxcImdkNFxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBpZD1cXFwidGFnbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHRhYmxlPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcInRjXFxcIj50YWdzOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LXRhZ3NcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHQ8L3RhYmxlPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNcXFwiPjwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImNcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcImFzbVxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZ3RiXFxcIj5cXHJcXG5cXHQ8cCBjbGFzcz1cXFwiZ3BjXFxcIj5TaG93aW5nIDAgLSAwIG9mIDAgaW1hZ2VzPC9wPlxcclxcblxcdDx0YWJsZSBjbGFzcz1cXFwicHR0XFxcIj48dHI+PHRkPjxhIGhyZWY9XFxcIj9wPTFcXFwiPjwvYT48L3RkPjwvdHI+PC90YWJsZT5cXHJcXG48L2Rpdj5cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHJlYWR5ID0gcmVxdWlyZShcIi4uL3JlYWR5XCIpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuXHJcbmNvbnN0IHJlSmF2YXNjcmlwdEdvdG9OZXh0ID0gL3NldFRpbWVvdXRcXHMqXFwoXFxzKihnb3RvbmV4dHxcImdvdG9uZXh0XFwoXFwpXCIpXFxzKixcXHMqXFxkK1xccypcXCkvO1xyXG5jb25zdCBmaWxlU2l6ZUxhYmVscyA9IFsgXCJCXCIsIFwiS0JcIiwgXCJNQlwiLCBcIkdCXCIgXTtcclxuXHJcbmNvbnN0IGNhdGVnb3J5SW5mb3MgPSB7XHJcblx0XCJkb3VqaW5zaGlcIjogeyBuYW1lOiBcIkRvdWppbnNoaVwiLCB1cmw6IFwiZG91amluc2hpXCIsIGNsYXNzOiBcImN0MlwiIH0sXHJcblx0XCJtYW5nYVwiOiB7IG5hbWU6IFwiTWFuZ2FcIiwgdXJsOiBcIm1hbmdhXCIsIGNsYXNzOiBcImN0M1wiIH0sXHJcblx0XCJhcnRpc3RjZ1wiOiB7IG5hbWU6IFwiQXJ0aXN0IENHXCIsIHVybDogXCJhcnRpc3RjZ1wiLCBjbGFzczogXCJjdDRcIiB9LFxyXG5cdFwiZ2FtZWNnXCI6IHsgbmFtZTogXCJHYW1lIENHXCIsIHVybDogXCJnYW1lY2dcIiwgY2xhc3M6IFwiY3Q1XCIgfSxcclxuXHRcIndlc3Rlcm5cIjogeyBuYW1lOiBcIldlc3Rlcm5cIiwgdXJsOiBcIndlc3Rlcm5cIiwgY2xhc3M6IFwiY3RhXCIgfSxcclxuXHRcIm5vbi1oXCI6IHsgbmFtZTogXCJOb24tSFwiLCB1cmw6IFwibm9uLWhcIiwgY2xhc3M6IFwiY3Q5XCIgfSxcclxuXHRcImltYWdlc2V0XCI6IHsgbmFtZTogXCJJbWFnZSBTZXRcIiwgdXJsOiBcImltYWdlc2V0XCIsIGNsYXNzOiBcImN0NlwiIH0sXHJcblx0XCJjb3NwbGF5XCI6IHsgbmFtZTogXCJDb3NwbGF5XCIsIHVybDogXCJjb3NwbGF5XCIsIGNsYXNzOiBcImN0N1wiIH0sXHJcblx0XCJhc2lhbnBvcm5cIjogeyBuYW1lOiBcIkFzaWFuIFBvcm5cIiwgdXJsOiBcImFzaWFucG9yblwiLCBjbGFzczogXCJjdDhcIiB9LFxyXG5cdFwibWlzY1wiOiB7IG5hbWU6IFwiTWlzY1wiLCB1cmw6IFwibWlzY1wiLCBjbGFzczogXCJjdDFcIiB9LFxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIG9uV2luZG93QmVmb3JlU2NyaXB0RXhlY3V0ZShldmVudCkge1xyXG5cdGNvbnN0IHJlbW92ZSA9ICghZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInNyY1wiKSAmJiByZUphdmFzY3JpcHRHb3RvTmV4dC50ZXN0KGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCkpO1xyXG5cdGlmICghcmVtb3ZlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChldmVudC50YXJnZXQucGFyZW50Tm9kZSkge1xyXG5cdFx0ZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXZlbnQudGFyZ2V0KTtcclxuXHR9XHJcblxyXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBibG9ja1JlZGlyZWN0aW9ucygpIHtcclxuXHRyZXF1aXJlKFwiLi4vamF2YXNjcmlwdFwiKS5pbmplY3QoKCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZih3aW5kb3cuZ290b25leHQpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0d2luZG93LmdvdG9uZXh0ID0gKCkgPT4ge307XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZXNoZWV0KCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LWdhbGxlcnktcmVzdXJyZWN0XCI7XHJcblx0aWYgKCFzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkge1xyXG5cdFx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xyXG5cdFx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFudXBEb2N1bWVudCgpIHtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHk+c2NyaXB0LGJvZHk+ZGl2LmRcIikpIHtcclxuXHRcdGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZURvbU5vZGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcclxuXHRpZiAoIXNvdXJjZSB8fCAhZGVzdGluYXRpb24pIHsgcmV0dXJuOyB9XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIHNvdXJjZS5jaGlsZE5vZGVzKSB7XHJcblx0XHRkZXN0aW5hdGlvbi5hcHBlbmRDaGlsZChub2RlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVEb2N1bWVudChodG1sU291cmNlLCBkZXN0aW5hdGlvbikge1xyXG5cdGNvbnN0IGdhbGxlcnlIdG1sRG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sU291cmNlLCBcInRleHQvaHRtbFwiKTtcclxuXHRtb3ZlRG9tTm9kZXMoZ2FsbGVyeUh0bWxEb2MuaGVhZCwgZGVzdGluYXRpb24uaGVhZCk7XHJcblx0bW92ZURvbU5vZGVzKGdhbGxlcnlIdG1sRG9jLmJvZHksIGRlc3RpbmF0aW9uLmJvZHkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbnNlcnRHYWxsZXJ5SHRtbChpZGVudGlmaWVyKSB7XHJcblx0Y29uc3QgYXBpU3R5bGUgPSByZXF1aXJlKFwiLi4vYXBpL3N0eWxlXCIpO1xyXG5cdGNvbnN0IG5hdkJhciA9IGFwaVN0eWxlLmlzRGFyaygpID9cclxuXHRcdHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyLWRhcmsuaHRtbFwiKSA6XHJcblx0XHRyZXF1aXJlKFwiLi9uYXZpZ2F0aW9uLWJhci1saWdodC5odG1sXCIpO1xyXG5cclxuXHRtb3ZlRG9jdW1lbnQobmF2QmFyLCBkb2N1bWVudCk7XHJcblx0bW92ZURvY3VtZW50KHJlcXVpcmUoXCIuL2dhbGxlcnkuaHRtbFwiKSwgZG9jdW1lbnQpO1xyXG5cclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHRpZiAoIWJvZHkpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IGltYWdlVXJsID0gYXBpU3R5bGUuZ2V0QXJyb3dJY29uVXJsKCk7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIGJvZHkucXVlcnlTZWxlY3RvckFsbChcImltZy54LWdhbGxlcnktcmVzdXJyZWN0LW1yLWdpZlwiKSkge1xyXG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1hZ2VVcmwpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2FsbGVyeUluZm9GZXRjaCA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1pbmZvL2ZldGNoXCIpO1xyXG5cdGNvbnN0IGluZm8gPSBhd2FpdCBnYWxsZXJ5SW5mb0ZldGNoLmdldChpZGVudGlmaWVyKTtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0c2V0R2FsbGVyeUluZm8oYm9keSwgaW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEdhbGxlcnlJbmZvKGh0bWwsIGluZm8pIHtcclxuXHRsZXQgbjtcclxuXHJcblx0Ly8gVGl0bGVcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ25cIikudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiNnalwiKS50ZXh0Q29udGVudCA9IGluZm8udGl0bGVPcmlnaW5hbDtcclxuXHJcblx0Ly8gVGh1bWJuYWlsXHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtbWFpbi10aHVtYm5haWxcIikuc2V0QXR0cmlidXRlKFwic3JjXCIsIGluZm8ubWFpblRodW1ibmFpbFVybCk7XHJcblxyXG5cdC8vIFVwbG9hZGVyXHJcblx0biA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LXVwbG9hZGVyXCIpO1xyXG5cdG4udGV4dENvbnRlbnQgPSBpbmZvLnVwbG9hZGVyO1xyXG5cdG4uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgL3VwbG9hZGVyLyR7aW5mby51cGxvYWRlcn1gKTtcclxuXHJcblx0Ly8gQ2F0ZWdvcnlcclxuXHRuID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtY2F0ZWdvcnlcIik7XHJcblx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjYXRlZ29yeUluZm9zLCBpbmZvLmNhdGVnb3J5KSkge1xyXG5cdFx0Y29uc3QgY2F0ZWdvcnlJbmZvID0gY2F0ZWdvcnlJbmZvc1tpbmZvLmNhdGVnb3J5XTtcclxuXHRcdG4udGV4dENvbnRlbnQgPSBjYXRlZ29yeUluZm8ubmFtZTtcclxuXHRcdG4uY2xhc3NMaXN0LmFkZChjYXRlZ29yeUluZm8uY2xhc3MpO1xyXG5cdFx0bi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAvJHtjYXRlZ29yeUluZm8udXJsfWApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuLnRleHRDb250ZW50ID0gaW5mby5jYXRlZ29yeTtcclxuXHR9XHJcblxyXG5cdC8vIFJhdGluZ1xyXG5cdGNvbnN0IHBvcyA9IGdldEJhY2tncm91bmRQb3NpdGlvbkZvclJhdGluZyhpbmZvLnJhdGluZ0F2ZXJhZ2UpO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfaW1hZ2VcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYCR7cG9zLnh9cHggJHtwb3MueX1weGA7XHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtYXZlcmFnZS1yYXRpbmdcIikudGV4dENvbnRlbnQgPSBpbmZvLnJhdGluZ0F2ZXJhZ2UudG9GaXhlZCgyKTtcclxuXHJcblx0Ly8gSW5mb1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWRhdGUtdXBsb2FkZWRcIikudGV4dENvbnRlbnQgPSBnZXRUaW1lc3RhbXBEYXRlU3RyaW5nKGluZm8uZGF0ZVVwbG9hZGVkKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC12aXNpYmxlXCIpLnRleHRDb250ZW50ID0gKGluZm8udmlzaWJsZSA/IFwiWWVzXCIgOiBcIk5vXCIpO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWZpbGUtc2l6ZVwiKS50ZXh0Q29udGVudCA9IGdldFByZXR0eUZpbGVTaXplKGluZm8uYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC1maWxlLWNvdW50XCIpLnRleHRDb250ZW50ID0gcGx1cmFsKGluZm8uZmlsZUNvdW50LCBcIiBmaWxlXCIsIFwiIGZpbGVzXCIpO1xyXG5cclxuXHQvLyBUYWdzXHJcblx0Y29uc3QgdGFnQ29udGFpbmVyID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtdGFnc1wiKTtcclxuXHRmb3IgKGNvbnN0IHRhZyBvZiBpbmZvLnRhZ3MudW5kZWZpbmVkKSB7XHJcblx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0ZGl2LmNsYXNzTmFtZSA9IFwiZ3RcIjtcclxuXHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRcdGEuaHJlZiA9IGAvdGFnLyR7dGFnfWA7XHJcblx0XHRhLnRleHRDb250ZW50ID0gdGFnO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGEpO1xyXG5cdFx0dGFnQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XHJcblx0fVxyXG5cclxuXHQvLyBGYXZvcml0ZXNcclxuXHRjb25zdCBmYXZvcml0ZVVybCA9IGAvZ2FsbGVyeXBvcHVwcy5waHA/Z2lkPSR7aW5mby5pZGVudGlmaWVyLmlkfSZ0PSR7aW5mby5pZGVudGlmaWVyLnRva2VufSZhY3Q9YWRkZmF2YDtcclxuXHRjb25zdCBmYXZvcml0ZUxpbmtTZWxlY3RvciA9IFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtZmF2b3JpdGVzLWxpbmtcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZhdm9yaXRlTGlua1NlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGZhdm9yaXRlVXJsKTtcclxuXHRyZXF1aXJlKFwiLi4vamF2YXNjcmlwdFwiKS5pbmplY3QoKGZhdm9yaXRlVXJsKSA9PiB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dkZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBwb3BVcChmYXZvcml0ZVVybCwgNjc1LCA0MTUpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fSwgWyBmYXZvcml0ZVVybCBdKTtcclxuXHJcblx0Ly8gRG93bmxvYWQgbWV0YWRhdGFcclxuXHRzZXR1cERvd25sb2FkTGluayhpbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFBvc2l0aW9uRm9yUmF0aW5nKHJhdGluZykge1xyXG5cdHJhdGluZyA9IE1hdGgucm91bmQocmF0aW5nICogMi4wKTtcclxuXHRyYXRpbmcgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMCwgcmF0aW5nKSk7XHJcblx0Y29uc3QgeCA9ICg1IC0gTWF0aC5jZWlsKHJhdGluZyAvIDIpKSAqIC0xNjtcclxuXHRjb25zdCB5ID0gKHJhdGluZyAlIDIgPT09IDApID8gLTEgOiAtMjE7XHJcblx0cmV0dXJuIHsgeCwgeSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbHVyYWwobnVtYmVyLCBzaW5ndWxhckxhYmVsLCBwbHVyYWxMYWJlbCkge1xyXG5cdGNvbnN0IGxhYmVsID0gKG51bWJlciA9PT0gMSA/IHNpbmd1bGFyTGFiZWwgOiBwbHVyYWxMYWJlbCk7XHJcblx0cmV0dXJuIGAke251bWJlcn0ke2xhYmVsfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWVzdGFtcERhdGVTdHJpbmcodGltZXN0YW1wKSB7XHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcblx0Y29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG5cdGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0Y29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0cmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAke2hvdXJ9OiR7bWludXRlfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByZXR0eUZpbGVTaXplKGJ5dGVzKSB7XHJcblx0Y29uc3QgaWkgPSBmaWxlU2l6ZUxhYmVscy5sZW5ndGggLSAxO1xyXG5cdGxldCBpID0gMDtcclxuXHR3aGlsZSAoaSA8IGlpICYmIGJ5dGVzID49IDEwMjQpIHtcclxuXHRcdGJ5dGVzIC89IDEwMjQ7XHJcblx0XHQrK2k7XHJcblx0fVxyXG5cdHJldHVybiBgJHtieXRlcy50b0ZpeGVkKGkgPT09IDAgPyAwIDogMil9ICR7ZmlsZVNpemVMYWJlbHNbaV19YDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldHVwRG93bmxvYWRMaW5rKGluZm8pIHtcclxuXHRjb25zdCBnYWxsZXJ5TGlua3MgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktbGlua3NcIik7XHJcblx0Y29uc3QgbGluayA9IGdhbGxlcnlMaW5rcy5jcmVhdGVSaWdodFNpZGVMaW5rKFwiTWV0YWRhdGEgSlNPTlwiKS5saW5rO1xyXG5cdGlmIChsaW5rID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiaW5mby5qc29uXCIpO1xyXG5cdGxpbmsuaHJlZiA9IGNyZWF0ZURvd25sb2FkRGF0YVVybChpbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRG93bmxvYWREYXRhVXJsKGluZm8pIHtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaW5mby50b0NvbW1vbkpzb24oKSwgbnVsbCwgXCIgIFwiKTtcclxuXHRjb25zdCBibG9iID0gbmV3IEJsb2IoWyBpbmZvU3RyaW5nIF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdGlmIChjdXJyZW50UGFnZVR5cGUgIT09IFwiZGVsZXRlZEdhbGxlcnlcIikgeyByZXR1cm47IH1cclxuXHJcblx0YmxvY2tSZWRpcmVjdGlvbnMoKTtcclxuXHJcblx0Y29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby91dGlsc1wiKTtcclxuXHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChsb2NhdGlvbi5ocmVmKTtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cdGNsZWFudXBEb2N1bWVudCgpO1xyXG5cdGluc2VydEdhbGxlcnlIdG1sKGluZm8uaWRlbnRpZmllcik7XHJcblxyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1wYWdlLXJlc3VycmVjdGVkXCIpO1xyXG5cdHBhZ2VUeXBlLnNldE92ZXJyaWRlKGN1cnJlbnRQYWdlVHlwZSk7XHJcbn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXNjcmlwdGV4ZWN1dGVcIiwgb25XaW5kb3dCZWZvcmVTY3JpcHRFeGVjdXRlLCB0cnVlKTtcclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIm5iXFxcIiBjbGFzcz1cXFwibm9zZWwgeC1yZXN1cnJlY3RlZFxcXCI+XFxyXFxuXFx0PGRpdj48YSBjbGFzcz1cXFwibmJ3XFxcIiBocmVmPVxcXCIvXFxcIj5Gcm9udDxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj4gUGFnZTwvc3Bhbj48L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvd2F0Y2hlZFxcXCI+V2F0Y2hlZDwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9wb3B1bGFyXFxcIj5Qb3B1bGFyPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3RvcnJlbnRzLnBocFxcXCI+VG9ycmVudHM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvZmF2b3JpdGVzLnBocFxcXCI+RmF2PHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPm9yaXRlPC9zcGFuPnM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvdWNvbmZpZy5waHBcXFwiPlNldHRpbmdzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3VwbG9hZC9tYW5hZ2UucGhwXFxcIj48c3BhbiBjbGFzcz1cXFwibmJ3MlxcXCI+TXkgPC9zcGFuPlVwbG9hZHM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvbXl0YWdzXFxcIj5NeSBUYWdzPC9hPjwvZGl2PlxcclxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJuYlxcXCIgY2xhc3M9XFxcIm5vc2VsIHgtcmVzdXJyZWN0ZWRcXFwiPlxcclxcblxcdDxkaXY+PGEgY2xhc3M9XFxcIm5id1xcXCIgaHJlZj1cXFwiL1xcXCI+RnJvbnQ8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+IFBhZ2U8L3NwYW4+PC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3dhdGNoZWRcXFwiPldhdGNoZWQ8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvcG9wdWxhclxcXCI+UG9wdWxhcjwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi90b3JyZW50cy5waHBcXFwiPlRvcnJlbnRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL2Zhdm9yaXRlcy5waHBcXFwiPkZhdjxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj5vcml0ZTwvc3Bhbj5zPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL2hvbWUucGhwXFxcIj48c3BhbiBjbGFzcz1cXFwibmJ3MlxcXCI+TXkgPC9zcGFuPkhvbWU8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL3VwbG9hZC5lLWhlbnRhaS5vcmcvbWFuYWdlLnBocFxcXCI+PHNwYW4gY2xhc3M9XFxcIm5idzJcXFwiPk15IDwvc3Bhbj5VcGxvYWRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3RvcGxpc3QucGhwXFxcIj5Ub3BsaXN0czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9ib3VudHkucGhwXFxcIj5Cb3VudGllczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9uZXdzLnBocFxcXCI+TmV3czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcImh0dHBzOi8vZm9ydW1zLmUtaGVudGFpLm9yZy9cXFwiPkZvcnVtczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcImh0dHBzOi8vZWh3aWtpLm9yZy9cXFwiPldpa2k8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL2hlbnRhaXZlcnNlLm9yZy9cXFwiIG9uY2xpY2s9XFxcInBvcFVwKCdodHRwczovL2hlbnRhaXZlcnNlLm9yZy8nLDEyNTAsNzIwKTsgcmV0dXJuIGZhbHNlXFxcIj5IPHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPmVudGFpPC9zcGFuPlY8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+ZXJzZTwvc3Bhbj48L2E+PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImJvZHk+Om5vdCgueC1yZXN1cnJlY3RlZCl7ZGlzcGxheTpub25lIWltcG9ydGFudH0jeC1nYWxsZXJ5LXJlc3VycmVjdC1jYXRlZ29yeXt0ZXh0LWRlY29yYXRpb246bm9uZX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvUHJvbWlzZShmbiwgc2VsZikge1xyXG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNvbHZlKGZuLmFwcGx5KHNlbGYsIGFyZ3MpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJlamVjdChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IGdtID0gKChvYmplY3RzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0aWYgKG9iai5HTSAhPT0gbnVsbCAmJiB0eXBlb2Yob2JqLkdNKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHJldHVybiBvYmouR007XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHRjb25zdCBtYXBwaW5nID0gW1xyXG5cdFx0WyBcImdldFZhbHVlXCIsIFwiR01fZ2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcInNldFZhbHVlXCIsIFwiR01fc2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcImRlbGV0ZVZhbHVlXCIsIFwiR01fZGVsZXRlVmFsdWVcIiBdLFxyXG5cdFx0WyBcInhtbEh0dHBSZXF1ZXN0XCIsIFwiR01feG1saHR0cFJlcXVlc3RcIiBdXHJcblx0XTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwcGluZykge1xyXG5cdFx0bGV0IHByb21pc2UgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRjb25zdCBmbiA9IG9ialt2YWx1ZV07XHJcblx0XHRcdGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRwcm9taXNlID0gdG9Qcm9taXNlKGZuLCBvYmopO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgTm90IHN1cHBvcnRlZCAoJHtrZXl9KWApKSk7XHJcblx0XHR9XHJcblx0XHRyZXN1bHRba2V5XSA9IHByb21pc2U7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn0pLmNhbGwodGhpcywgW3RoaXMsIHdpbmRvd10pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ207XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluamVjdChmdW5jLCBhcmdzKSB7XHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIikgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG51bGw7XHJcblx0aWYgKCFwYXJlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdGNvbnN0IHNjcmlwdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdGNvbnN0IGFyZ1N0ciA9IChBcnJheS5pc0FycmF5KGFyZ3MpICYmIGFyZ3MubGVuZ3RoID4gMCkgP1xyXG5cdFx0YC4uLiR7SlNPTi5zdHJpbmdpZnkoYXJncywgbnVsbCwgXCJcIil9YCA6XHJcblx0XHRcIlwiO1xyXG5cdHNjcmlwdE5vZGUudGV4dENvbnRlbnQgPSBgKCR7ZnVuYy50b1N0cmluZygpfSkoJHthcmdTdHJ9KTtgO1xyXG5cclxuXHRwYXJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0Tm9kZSk7XHJcblx0cGFyZW50LnJlbW92ZUNoaWxkKHNjcmlwdE5vZGUpO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluamVjdFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBpc1JlYWR5VmFsdWUgPSBmYWxzZTtcclxubGV0IGNhbGxiYWNrcyA9IG51bGw7XHJcbmxldCBjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5jb25zdCBjaGVja0ludGVydmFsUmF0ZSA9IDI1MDtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0hvb2tlZCgpIHtcclxuXHRyZXR1cm4gY2FsbGJhY2tzICE9PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob29rKCkge1xyXG5cdGNhbGxiYWNrcyA9IFtdO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoY2hlY2tJZlJlYWR5LCBjaGVja0ludGVydmFsUmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaG9vaygpIHtcclxuXHRjb25zdCBjYnMgPSBjYWxsYmFja3M7XHJcblxyXG5cdGNhbGxiYWNrcyA9IG51bGw7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjbGVhckludGVydmFsKGNoZWNrSW50ZXJ2YWxJZCk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuXHJcblx0aW52b2tlKGNicyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZShjYWxsYmFja3MpIHtcclxuXHRmb3IgKGxldCBjYiBvZiBjYWxsYmFja3MpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNiKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuXHRpZiAoaXNSZWFkeVZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRpZiAoaXNIb29rZWQoKSkgeyB1bmhvb2soKTsgfVxyXG5cdFx0aXNSZWFkeVZhbHVlID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcclxuXHRpc1JlYWR5KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvblJlYWR5KGNhbGxiYWNrKSB7XHJcblx0aWYgKGlzUmVhZHkoKSkge1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghaXNIb29rZWQoKSkgeyBob29rKCk7IH1cclxuXHJcblx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0b25SZWFkeTogb25SZWFkeSxcclxuXHRnZXQgaXNSZWFkeSgpIHsgcmV0dXJuIGlzUmVhZHkoKTsgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBhcGlTdHlsZSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0aWYgKGFwaVN0eWxlID09PSBudWxsKSB7IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vYXBpL3N0eWxlXCIpOyB9XHJcblx0YXBpU3R5bGUuc2V0RG9jdW1lbnREYXJrRmxhZygpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiJdfQ==
