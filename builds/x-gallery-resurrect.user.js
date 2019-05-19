// ==UserScript==
// @name        x/gallery-resurrect
// @version     1.0.1
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

class GalleryIdentifier {
	constructor(id, token) {
		this.id = id;
		this.token = token;
	}

	static createFromUrl(url) {
		const match = /^.*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?$/.exec(url);
		if (match === null) { return null; }

		const path = match[1].replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/").split("/");
		if (path[0] !== "g" || path.length < 3) { return null; }

		const id = parseInt(path[1], 10);
		return (Number.isNaN(id) ? null : new GalleryIdentifier(id, path[2]));
	}
}


module.exports = {
	GalleryIdentifier
};

},{}],2:[function(require,module,exports){
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

},{"../../fetch":11,"./get-from-json":3}],3:[function(require,module,exports){
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

},{"./types":4}],4:[function(require,module,exports){
"use strict";

const GalleryIdentifier = require("../gallery-identifier").GalleryIdentifier;


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
			gallery: (
				galleryIdentifiertoCommonJson(this.identifier, null) ||
				galleryIdentifiertoCommonJson(new GalleryIdentifier(0, ""), null)),
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
			parent: galleryIdentifiertoCommonJson(this.parent, null),
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

function galleryIdentifiertoCommonJson(identifier, defaultValue) {
	if (identifier === null || typeof(identifier) !== "object") {
		return defaultValue;
	}

	return {
		gid: identifier.id,
		token: identifier.token
	};
}

function newerVersionsToCommonJson(newerVersions) {
	const result = [];
	if (Array.isArray(newerVersions)) {
		for (const newerVersion of newerVersions) {
			result.push({
				gallery: (
					galleryIdentifiertoCommonJson(newerVersion.identifier, null) ||
					galleryIdentifiertoCommonJson(new GalleryIdentifier(0, ""), null)),
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
	GalleryInfo
};

},{"../gallery-identifier":1}],5:[function(require,module,exports){
"use strict";

const types = require("./types");

const sizeLabelToBytesPrefixes = [ "b", "kb", "mb", "gb" ];


function getGalleryPageFromUrl(url) {
	const match = /\?(?:(|[\w\W]*?&)p=([\+\-]?\d+))?/.exec(url);
	if (match !== null && match[1]) {
		const page = parseInt(match[1], 10);
		if (!Number.isNaN(page)) { return page; }
	}
	return null;
}

function getGalleryIdentifierAndPageFromUrl(url) {
	const identifier = types.GalleryIdentifier.createFromUrl(url);
	if (identifier === null) { return null; }

	const page = getGalleryPageFromUrl(url);
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

},{"./types":4}],6:[function(require,module,exports){
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

},{"./style":9}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
"use strict";

function showOnClick(selector, url, size) {
	let width = 675;
	let height = 415;
	if (size !== null && typeof(size) === "object") {
		({width, height} = size);
	}

	require("../javascript").inject((selector, url, width, height) => {
		document.querySelector(selector).addEventListener("click", (e) => {
			e.preventDefault();
			e.stopPropagation();
			try {
				return popUp(url, width, height);
			} catch (e) {
				return false;
			}
		}, false);
	}, [ selector, url, width, height ]);
}


module.exports = {
	showOnClick,
	sizes: {
		favorites: { width: 675, height: 415 }
	}
};

},{"../javascript":18}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
"use strict";

function uploader(usernName) {
	return `/uploader/${usernName}`;
}

function category(category) {
	return `/${category}`;
}

function favoritesPopup(id, token) {
	return `/gallerypopups.php?gid=${id}&t=${token}&act=addfav`;
}


module.exports = {
	uploader,
	category,
	favoritesPopup
};

},{}],11:[function(require,module,exports){
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

},{"./gm":17}],12:[function(require,module,exports){
module.exports = "<div class=\"gm x-resurrected\">\r\n\t<div id=\"gleft\">\r\n\t\t<div id=\"gd1\">\r\n\t\t\t<div><img id=\"x-gallery-resurrect-main-thumbnail\" style=\"max-width:250px;max-height:375px;display:block;\" /></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"gd2\">\r\n\t\t<h1 id=\"gn\"></h1>\r\n\t\t<h1 id=\"gj\"></h1>\r\n\t</div>\r\n\t<div id=\"gright\">\r\n\t\t<div id=\"gd5\">\r\n\t\t\t<p class=\"g3 gsp\" id=\"x-gallery-resurrect-gallery-unavailable\"><img class=\"x-gallery-resurrect-mr-gif\" /> <a title=\"Some information has been resurrected\">Gallery unavailable</a></p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"gmid\">\r\n\t\t<div id=\"gd3\">\r\n\t\t\t<div id=\"gdc\">\r\n\t\t\t\t<a class=\"cs\" id=\"x-gallery-resurrect-category\"></a>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdn\"><a id=\"x-gallery-resurrect-uploader\"></a></div>\r\n\t\t\t<div id=\"gdd\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Posted:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-date-uploaded\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Visible:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-visible\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">File Size:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-size\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Length:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-count\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdr\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"grt1\">Rating:</td>\r\n\t\t\t\t\t\t<td id=\"grt2\">\r\n\t\t\t\t\t\t\t<div id=\"rating_image\" class=\"ir\" style=\"background-position:-80px -1px\"></div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td id=\"grt3\"><span id=\"rating_count\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"rating_label\" colspan=\"3\">Average: <span id=\"x-gallery-resurrect-average-rating\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdf\">\r\n\t\t\t\t<div style=\"float:left;cursor:pointer\" id=\"fav\"></div>\r\n\t\t\t\t<div style=\"float:left\">&nbsp; <a id=\"x-gallery-resurrect-favorites-link\" target=\"_blank\"><img class=\"x-gallery-resurrect-mr-gif\" /> Add to Favorites</a></div>\r\n\t\t\t\t<div class=\"c\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"gd4\">\r\n\t\t\t<div id=\"taglist\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"tc\">tags:</td>\r\n\t\t\t\t\t\t<td id=\"x-gallery-resurrect-tags\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"c\"></div>\r\n\t</div>\r\n\t<div class=\"c\"></div>\r\n</div>\r\n<div id=\"asm\"></div>\r\n<div class=\"gtb\">\r\n\t<p class=\"gpc\">Showing 0 - 0 of 0 images</p>\r\n\t<table class=\"ptt\"><tr><td><a href=\"?p=1\"></a></td></tr></table>\r\n</div>";
},{}],13:[function(require,module,exports){
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
	const urls = require("../api/urls");
	const popups = require("../api/popups");
	let n;

	// Title
	html.querySelector("#gn").textContent = info.title;
	html.querySelector("#gj").textContent = info.titleOriginal;

	// Thumbnail
	html.querySelector("#x-gallery-resurrect-main-thumbnail").setAttribute("src", info.mainThumbnailUrl);

	// Uploader
	n = html.querySelector("#x-gallery-resurrect-uploader");
	n.textContent = info.uploader;
	n.setAttribute("href", urls.uploader(info.uploader));

	// Category
	n = html.querySelector("#x-gallery-resurrect-category");
	if (Object.prototype.hasOwnProperty.call(categoryInfos, info.category)) {
		const categoryInfo = categoryInfos[info.category];
		n.textContent = categoryInfo.name;
		n.classList.add(categoryInfo.class);
		n.setAttribute("href", urls.category(categoryInfo.url));
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
	const favoriteUrl = urls.favoritesPopup(info.identifier.id, info.identifier.token);
	const favoriteLinkSelector = "#x-gallery-resurrect-favorites-link";
	document.querySelector(favoriteLinkSelector).setAttribute("href", favoriteUrl);
	popups.showOnClick("#gdf", favoriteUrl, popups.sizes.favorites);

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

},{"../api/gallery-info/fetch":2,"../api/gallery-info/utils":5,"../api/gallery-links":6,"../api/page-type":7,"../api/popups":8,"../api/style":9,"../api/urls":10,"../javascript":18,"../ready":19,"../style":20,"./gallery.html":12,"./navigation-bar-dark.html":14,"./navigation-bar-light.html":15,"./style.css":16}],14:[function(require,module,exports){
module.exports = "<div id=\"nb\" class=\"nosel x-resurrected\">\r\n\t<div><a class=\"nbw\" href=\"/\">Front<span class=\"nbw1\"> Page</span></a></div>\r\n\t<div><a href=\"/watched\">Watched</a></div>\r\n\t<div><a href=\"/popular\">Popular</a></div>\r\n\t<div><a href=\"/torrents.php\">Torrents</a></div>\r\n\t<div><a href=\"/favorites.php\">Fav<span class=\"nbw1\">orite</span>s</a></div>\r\n\t<div><a href=\"/uconfig.php\">Settings</a></div>\r\n\t<div><a href=\"/upload/manage.php\"><span class=\"nbw2\">My </span>Uploads</a></div>\r\n\t<div><a href=\"/mytags\">My Tags</a></div>\r\n</div>";
},{}],15:[function(require,module,exports){
module.exports = "<div id=\"nb\" class=\"nosel x-resurrected\">\r\n\t<div><a class=\"nbw\" href=\"/\">Front<span class=\"nbw1\"> Page</span></a></div>\r\n\t<div><a href=\"/watched\">Watched</a></div>\r\n\t<div><a href=\"/popular\">Popular</a></div>\r\n\t<div><a href=\"/torrents.php\">Torrents</a></div>\r\n\t<div><a href=\"/favorites.php\">Fav<span class=\"nbw1\">orite</span>s</a></div>\r\n\t<div><a href=\"/home.php\"><span class=\"nbw2\">My </span>Home</a></div>\r\n\t<div><a href=\"https://upload.e-hentai.org/manage.php\"><span class=\"nbw2\">My </span>Uploads</a></div>\r\n\t<div><a href=\"/toplist.php\">Toplists</a></div>\r\n\t<div><a href=\"/bounty.php\">Bounties</a></div>\r\n\t<div><a href=\"/news.php\">News</a></div>\r\n\t<div><a href=\"https://forums.e-hentai.org/\">Forums</a></div>\r\n\t<div><a href=\"https://ehwiki.org/\">Wiki</a></div>\r\n\t<div><a href=\"https://hentaiverse.org/\" onclick=\"popUp('https://hentaiverse.org/',1250,720); return false\">H<span class=\"nbw1\">entai</span>V<span class=\"nbw1\">erse</span></a></div>\r\n</div>";
},{}],16:[function(require,module,exports){
module.exports = "body>:not(.x-resurrected){display:none!important}#x-gallery-resurrect-category{text-decoration:none}";
},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{"./api/style":9}]},{},[13])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2ZldGNoLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20tanNvbi5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3R5cGVzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHMuanMiLCJzcmMvYXBpL2dhbGxlcnktbGlua3MuanMiLCJzcmMvYXBpL3BhZ2UtdHlwZS5qcyIsInNyYy9hcGkvcG9wdXBzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvdXJscy5qcyIsInNyYy9mZXRjaC5qcyIsInNyYy9nYWxsZXJ5LXJlc3VycmVjdC9nYWxsZXJ5Lmh0bWwiLCJzcmMvZ2FsbGVyeS1yZXN1cnJlY3QvbWFpbi5qcyIsInNyYy9nYWxsZXJ5LXJlc3VycmVjdC9uYXZpZ2F0aW9uLWJhci1kYXJrLmh0bWwiLCJzcmMvZ2FsbGVyeS1yZXN1cnJlY3QvbmF2aWdhdGlvbi1iYXItbGlnaHQuaHRtbCIsInNyYy9nYWxsZXJ5LXJlc3VycmVjdC9zdHlsZS5jc3MiLCJzcmMvZ20uanMiLCJzcmMvamF2YXNjcmlwdC5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4T0E7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgR2FsbGVyeUlkZW50aWZpZXIge1xyXG5cdGNvbnN0cnVjdG9yKGlkLCB0b2tlbikge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy50b2tlbiA9IHRva2VuO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZUZyb21VcmwodXJsKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC8uZXhlYyh1cmwpO1xyXG5cdFx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgcGF0aCA9IG1hdGNoWzFdLnJlcGxhY2UoL15cXC8rfFxcLyskL2csIFwiXCIpLnJlcGxhY2UoL1xcL3syLH0vZywgXCIvXCIpLnNwbGl0KFwiL1wiKTtcclxuXHRcdGlmIChwYXRoWzBdICE9PSBcImdcIiB8fCBwYXRoLmxlbmd0aCA8IDMpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBpZCA9IHBhcnNlSW50KHBhdGhbMV0sIDEwKTtcclxuXHRcdHJldHVybiAoTnVtYmVyLmlzTmFOKGlkKSA/IG51bGwgOiBuZXcgR2FsbGVyeUlkZW50aWZpZXIoaWQsIHBhdGhbMl0pKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRHYWxsZXJ5SWRlbnRpZmllclxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGZldGNoID0gcmVxdWlyZShcIi4uLy4uL2ZldGNoXCIpO1xyXG5jb25zdCBnZXRGcm9tSnNvbiA9IHJlcXVpcmUoXCIuL2dldC1mcm9tLWpzb25cIik7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QXJyYXlDb3VudChhcnJheSwgY291bnQsIGZpbGwpIHtcclxuXHRjb25zdCBpaSA9IGFycmF5Lmxlbmd0aDtcclxuXHRpZiAoaWkgIT09IGNvdW50KSB7XHJcblx0XHRpZiAoaWkgPiBjb3VudCkge1xyXG5cdFx0XHRhcnJheS5zcGxpY2UoY291bnQsIGlpIC0gY291bnQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IGlpOyBpIDwgY291bnQ7ICsraSkge1xyXG5cdFx0XHRcdGFycmF5LnB1c2goZmlsbCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEdhbGxlcnlJbmZvKGlkZW50aWZpZXJzKSB7XHJcblx0Y29uc3QgZ2lkTGlzdCA9IFtdO1xyXG5cdGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGlkZW50aWZpZXJzKTtcclxuXHRpZiAoaXNBcnJheSkge1xyXG5cdFx0Zm9yIChjb25zdCBpZGVudGlmaWVyIG9mIGlkZW50aWZpZXJzKSB7XHJcblx0XHRcdGdpZExpc3QucHVzaChbIGlkZW50aWZpZXIuaWQsIGlkZW50aWZpZXIudG9rZW4gXSk7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdGdpZExpc3QucHVzaChbIGlkZW50aWZpZXJzLmlkLCBpZGVudGlmaWVycy50b2tlbiBdKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRhdGEgPSB7XHJcblx0XHRtZXRob2Q6IFwiZ2RhdGFcIixcclxuXHRcdGdpZGxpc3Q6IGdpZExpc3RcclxuXHR9O1xyXG5cclxuXHRjb25zdCBmZXRjaFJlc3VsdCA9IGF3YWl0IGZldGNoLnBvc3Qoe1xyXG5cdFx0Z206IHRydWUsXHJcblx0XHR1cmw6IFwiL2FwaS5waHBcIixcclxuXHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHJlc3VsdEpzb24gPSBKU09OLnBhcnNlKGZldGNoUmVzdWx0LnJlc3BvbnNlVGV4dCk7XHJcblxyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IgKGNvbnN0IGpzb24gb2YgcmVzdWx0SnNvbi5nbWV0YWRhdGEpIHtcclxuXHRcdGlmIChqc29uLmVycm9yKSB7XHJcblx0XHRcdHJlc3VsdHMucHVzaChudWxsKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IGluZm8gPSBnZXRGcm9tSnNvbihqc29uKTtcclxuXHRcdFx0cmVzdWx0cy5wdXNoKGluZm8pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0QXJyYXlDb3VudChyZXN1bHRzLCBnaWRMaXN0Lmxlbmd0aCwgbnVsbCk7XHJcblxyXG5cdHJldHVybiBpc0FycmF5ID8gcmVzdWx0cyA6IHJlc3VsdHNbMF07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQ6IGdldEdhbGxlcnlJbmZvXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tSHRtbEVzY2FwZWRTdHJpbmcodmFsdWUpIHtcclxuXHRpZiAodmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgY29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgXCJ0ZXh0L2h0bWxcIik7XHJcbiAgcmV0dXJuIGRvYy5kb2N1bWVudEVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEpzb25OdW1iZXIodmFsdWUpIHtcclxuXHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gXCJudW1iZXJcIikge1xyXG5cdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcblx0fVxyXG5cdHJldHVybiAoTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEpzb25TdHJpbmcodmFsdWUpIHtcclxuXHRpZiAodHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIikgeyByZXR1cm4gdmFsdWU7IH1cclxuXHRpZiAodHlwZW9mKHZhbHVlKSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gdmFsdWU7IH1cclxuXHRyZXR1cm4gYCR7dmFsdWV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21Kc29uKGluZm8sIGpzb24pIHtcclxuXHRpbmZvLnRpdGxlID0gZ2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nKGdldEpzb25TdHJpbmcoanNvbi50aXRsZSkpO1xyXG5cdGluZm8udGl0bGVPcmlnaW5hbCA9IGdldFN0cmluZ0Zyb21IdG1sRXNjYXBlZFN0cmluZyhnZXRKc29uU3RyaW5nKGpzb24udGl0bGVfanBuKSk7XHJcblx0aW5mby5tYWluVGh1bWJuYWlsVXJsID0gZ2V0SnNvblN0cmluZyhqc29uLnRodW1iKTtcclxuXHRjb25zdCBjYXRlZ29yeSA9IGdldEpzb25TdHJpbmcoanNvbi5jYXRlZ29yeSk7XHJcblx0aW5mby5jYXRlZ29yeSA9IChjYXRlZ29yeSAhPT0gbnVsbCA/IGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgOiBudWxsKTtcclxuXHRpbmZvLnVwbG9hZGVyID0gZ2V0SnNvblN0cmluZyhqc29uLnVwbG9hZGVyKTtcclxuXHJcblx0aW5mby5yYXRpbmdBdmVyYWdlID0gZ2V0SnNvbk51bWJlcihqc29uLnJhdGluZyk7XHJcblxyXG5cdGNvbnN0IGRhdGVVcGxvYWRlZCA9IGdldEpzb25OdW1iZXIoanNvbi5wb3N0ZWQpO1xyXG5cdGluZm8uZGF0ZVVwbG9hZGVkID0gKGRhdGVVcGxvYWRlZCAhPT0gbnVsbCA/IG5ldyBEYXRlKGRhdGVVcGxvYWRlZCAqIDEwMDApLmdldFRpbWUoKSA6IG51bGwpO1xyXG5cclxuXHRpbmZvLnZpc2libGUgPSAhanNvbi5leHB1bmdlZDtcclxuXHJcblx0aW5mby5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBnZXRKc29uTnVtYmVyKGpzb24uZmlsZXNpemUpO1xyXG5cclxuXHRpbmZvLmZpbGVDb3VudCA9IGdldEpzb25OdW1iZXIoanNvbi5maWxlY291bnQpO1xyXG5cclxuXHRpbmZvLmFyY2hpdmVyS2V5ID0gZ2V0SnNvblN0cmluZyhqc29uLmFyY2hpdmVyX2tleSk7XHJcblx0aW5mby50b3JyZW50Q291bnQgPSBnZXRKc29uTnVtYmVyKGpzb24udG9ycmVudGNvdW50KTtcclxuXHJcblx0Y29uc3QgdGFnTGlzdCA9IFtdO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGpzb24udGFncykpIHtcclxuXHRcdGZvciAoY29uc3QgdGFnIG9mIGpzb24udGFncykge1xyXG5cdFx0XHRjb25zdCBzdHJpbmdUYWcgPSBnZXRKc29uU3RyaW5nKHRhZyk7XHJcblx0XHRcdGlmIChzdHJpbmdUYWcgIT09IG51bGwpIHsgdGFnTGlzdC5wdXNoKHN0cmluZ1RhZyk7IH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluZm8udGFncyA9IHsgXCJ1bmRlZmluZWRcIjogdGFnTGlzdCB9O1xyXG5cdGluZm8udGFnc0hhdmVOYW1lc3BhY2UgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RnJvbUpzb24oanNvbikge1xyXG5cdGlmIChqc29uID09PSBudWxsIHx8IHR5cGVvZihqc29uKSAhPT0gXCJvYmplY3RcIikgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpZCA9IGdldEpzb25OdW1iZXIoanNvbi5naWQpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0SnNvblN0cmluZyhqc29uLnRva2VuKTtcclxuXHRpZiAoaWQgPT09IG51bGwgfHwgdG9rZW4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mbyA9IG5ldyB0eXBlcy5HYWxsZXJ5SW5mbygpO1xyXG5cdGluZm8uaWRlbnRpZmllciA9IG5ldyB0eXBlcy5HYWxsZXJ5SWRlbnRpZmllcihpZCwgdG9rZW4pO1xyXG5cdGluZm8uY3VycmVudFBhZ2UgPSBudWxsO1xyXG5cdGluZm8uc291cmNlID0gXCJqc29uXCI7XHJcblx0cG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21Kc29uKGluZm8sIGpzb24pO1xyXG5cdGluZm8uZGF0ZUdlbmVyYXRlZCA9IERhdGUubm93KCk7XHJcblx0cmV0dXJuIGluZm87XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldEZyb21Kc29uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlJZGVudGlmaWVyID0gcmVxdWlyZShcIi4uL2dhbGxlcnktaWRlbnRpZmllclwiKS5HYWxsZXJ5SWRlbnRpZmllcjtcclxuXHJcblxyXG5jbGFzcyBHYWxsZXJ5SW5mbyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZSA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlT3JpZ2luYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlVXBsb2FkZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLnVwbG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQXZlcmFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0NvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5tYWluVGh1bWJuYWlsVXJsID0gbnVsbFxyXG5cdFx0dGhpcy50aHVtYm5haWxTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsUm93cyA9IG51bGw7XHJcblx0XHR0aGlzLmZpbGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0dGhpcy52aXNpYmxlUmVhc29uID0gbnVsbDtcclxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy50cmFuc2xhdGVkID0gbnVsbDtcclxuXHRcdHRoaXMuYXJjaGl2ZXJLZXkgPSBudWxsO1xyXG5cdFx0dGhpcy50b3JyZW50Q291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzID0gbnVsbDtcclxuXHRcdHRoaXMudGFnc0hhdmVOYW1lc3BhY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XHJcblx0XHR0aGlzLm5ld2VyVmVyc2lvbnMgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlR2VuZXJhdGVkID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHRvQ29tbW9uSnNvbigpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGdhbGxlcnk6IChcclxuXHRcdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbih0aGlzLmlkZW50aWZpZXIsIG51bGwpIHx8XHJcblx0XHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLCBudWxsKSksXHJcblx0XHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnRpdGxlLCBcIlwiKSxcclxuXHRcdFx0dGl0bGVfb3JpZ2luYWw6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMudGl0bGVPcmlnaW5hbCwgXCJcIiksXHJcblx0XHRcdGRhdGVfdXBsb2FkZWQ6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMuZGF0ZVVwbG9hZGVkLCBcIlwiKSxcclxuXHRcdFx0Y2F0ZWdvcnk6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMuY2F0ZWdvcnksIFwiXCIpLFxyXG5cdFx0XHR1cGxvYWRlcjogdG9TdHJpbmdPckRlZmF1bHQodGhpcy51cGxvYWRlciwgXCJcIiksXHJcblx0XHRcdHJhdGluZzoge1xyXG5cdFx0XHRcdGF2ZXJhZ2U6IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMucmF0aW5nQXZlcmFnZSwgMCksXHJcblx0XHRcdFx0Y291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMucmF0aW5nQ291bnQsIDApLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYXZvcml0ZXM6IHtcclxuXHRcdFx0XHRjYXRlZ29yeTogKHRoaXMuZmF2b3JpdGVDYXRlZ29yeSAhPT0gbnVsbCA/IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMuZmF2b3JpdGVDYXRlZ29yeS5pbmRleCwgLTEpIDogLTEpLFxyXG5cdFx0XHRcdGNhdGVnb3J5X3RpdGxlOiAodGhpcy5mYXZvcml0ZUNhdGVnb3J5ICE9PSBudWxsID8gdG9TdHJpbmdPckRlZmF1bHQodGhpcy5mYXZvcml0ZUNhdGVnb3J5LnRpdGxlLCBcIlwiKSA6IFwiXCIpLFxyXG5cdFx0XHRcdGNvdW50OiB0b051bWJlck9yRGVmYXVsdCh0aGlzLmZhdm9yaXRlQ291bnQsIDApXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhcmVudDogZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24odGhpcy5wYXJlbnQsIG51bGwpLFxyXG5cdFx0XHRuZXdlcl92ZXJzaW9uczogbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbih0aGlzLm5ld2VyVmVyc2lvbnMpLFxyXG5cdFx0XHR0aHVtYm5haWw6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMubWFpblRodW1ibmFpbFVybCwgXCJcIiksXHJcblx0XHRcdHRodW1ibmFpbF9zaXplOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnRodW1ibmFpbFNpemUsIFwiXCIpLFxyXG5cdFx0XHR0aHVtYm5haWxfcm93czogdG9OdW1iZXJPckRlZmF1bHQodGhpcy50aHVtYm5haWxSb3dzLCAwKSxcclxuXHRcdFx0aW1hZ2VfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMuZmlsZUNvdW50LCAwKSxcclxuXHRcdFx0aW1hZ2VzX3Jlc2l6ZWQ6IGZhbHNlLFxyXG5cdFx0XHR0b3RhbF9maWxlX3NpemVfYXBwcm94OiB0b051bWJlck9yRGVmYXVsdCh0aGlzLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSwgMCksXHJcblx0XHRcdHZpc2libGU6ICh0aGlzLnZpc2libGUgPT09IHRydWUpLFxyXG5cdFx0XHR2aXNpYmxlX3JlYXNvbjogdG9TdHJpbmdPckRlZmF1bHQodGhpcy52aXNpYmxlUmVhc29uLCBcIlwiKSxcclxuXHRcdFx0bGFuZ3VhZ2U6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMubGFuZ3VhZ2UsIFwiXCIpLFxyXG5cdFx0XHR0cmFuc2xhdGVkOiAodGhpcy50cmFuc2xhdGVkID09PSB0cnVlKSxcclxuXHRcdFx0dGFnczogdGFnc1RvQ29tbW9uSnNvbih0aGlzLnRhZ3MpLFxyXG5cdFx0XHQvLyBOZXdcclxuXHRcdFx0dGFnc19oYXZlX25hbWVzcGFjZTogKHRoaXMudGFnc0hhdmVOYW1lc3BhY2UgPT09IHRydWUpLFxyXG5cdFx0XHR0b3JyZW50X2NvdW50OiB0b051bWJlck9yRGVmYXVsdCh0aGlzLnRvcnJlbnRDb3VudCwgMCksXHJcblx0XHRcdGFyY2hpdmVyX2tleTogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5hcmNoaXZlcktleSwgbnVsbCksXHJcblx0XHRcdHNvdXJjZTogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5zb3VyY2UsIG51bGwpLFxyXG5cdFx0XHRkYXRlX2dlbmVyYXRlZDogdG9OdW1iZXJPckRlZmF1bHQodGhpcy5kYXRlR2VuZXJhdGVkLCAwKVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b1N0cmluZ09yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIHR5cGVvZih2YWx1ZSkgPT09IFwic3RyaW5nXCIgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9OdW1iZXJPckRlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdHJldHVybiBOdW1iZXIuaXNOYU4odmFsdWUpID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKGlkZW50aWZpZXIsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsIHx8IHR5cGVvZihpZGVudGlmaWVyKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnaWQ6IGlkZW50aWZpZXIuaWQsXHJcblx0XHR0b2tlbjogaWRlbnRpZmllci50b2tlblxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld2VyVmVyc2lvbnNUb0NvbW1vbkpzb24obmV3ZXJWZXJzaW9ucykge1xyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KG5ld2VyVmVyc2lvbnMpKSB7XHJcblx0XHRmb3IgKGNvbnN0IG5ld2VyVmVyc2lvbiBvZiBuZXdlclZlcnNpb25zKSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHtcclxuXHRcdFx0XHRnYWxsZXJ5OiAoXHJcblx0XHRcdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihuZXdlclZlcnNpb24uaWRlbnRpZmllciwgbnVsbCkgfHxcclxuXHRcdFx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ldyBHYWxsZXJ5SWRlbnRpZmllcigwLCBcIlwiKSwgbnVsbCkpLFxyXG5cdFx0XHRcdG5hbWU6IHRvU3RyaW5nT3JEZWZhdWx0KG5ld2VyVmVyc2lvbi5uYW1lKSxcclxuXHRcdFx0XHRkYXRlX3VwbG9hZGVkOiB0b051bWJlck9yRGVmYXVsdChuZXdlclZlcnNpb24uZGF0ZVVwbG9hZGVkKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFnc1RvQ29tbW9uSnNvbih0YWdzKSB7XHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0aWYgKHRhZ3MgIT09IG51bGwgJiYgdHlwZW9mKHRhZ3MpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRmb3IgKGNvbnN0IG5hbWVzcGFjZSBpbiB0YWdzKSB7XHJcblx0XHRcdGNvbnN0IHRhZ0xpc3QgPSB0YWdzW25hbWVzcGFjZV07XHJcblx0XHRcdHJlc3VsdFtuYW1lc3BhY2VdID0gWy4uLnRhZ0xpc3RdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0R2FsbGVyeUlkZW50aWZpZXIsXHJcblx0R2FsbGVyeUluZm9cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5cclxuY29uc3Qgc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzID0gWyBcImJcIiwgXCJrYlwiLCBcIm1iXCIsIFwiZ2JcIiBdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBtYXRjaCA9IC9cXD8oPzoofFtcXHdcXFddKj8mKXA9KFtcXCtcXC1dP1xcZCspKT8vLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0pIHtcclxuXHRcdGNvbnN0IHBhZ2UgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0aWYgKCFOdW1iZXIuaXNOYU4ocGFnZSkpIHsgcmV0dXJuIHBhZ2U7IH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgaWRlbnRpZmllciA9IHR5cGVzLkdhbGxlcnlJZGVudGlmaWVyLmNyZWF0ZUZyb21VcmwodXJsKTtcclxuXHRpZiAoaWRlbnRpZmllciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYWdlID0gZ2V0R2FsbGVyeVBhZ2VGcm9tVXJsKHVybCk7XHJcblx0cmV0dXJuIHsgaWRlbnRpZmllciwgcGFnZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCeXRlc1NpemVGcm9tTGFiZWwobnVtYmVyLCBsYWJlbCkge1xyXG5cdGxldCBpID0gc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzLmluZGV4T2YobGFiZWwudG9Mb3dlckNhc2UoKSk7XHJcblx0aWYgKGkgPCAwKSB7IGkgPSAwOyB9XHJcblx0cmV0dXJuIE1hdGguZmxvb3IocGFyc2VGbG9hdChudW1iZXIpICogTWF0aC5wb3coMTAyNCwgaSkpO1xyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwsXHJcblx0Z2V0Qnl0ZXNTaXplRnJvbUxhYmVsXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi9zdHlsZVwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSaWdodFNpZGVMaW5rKGxhYmVsKSB7XHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZDVcIik7XHJcblx0aWYgKHBhcmVudCA9PT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIHsgbGluazogbnVsbCwgbGlua0NvbnRhaW5lcjogbnVsbCB9O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdGxpbmtDb250YWluZXIuY2xhc3NOYW1lID0gXCJnMiBnc3BcIjtcclxuXHJcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRpbWcuc3JjID0gc3R5bGUuZ2V0QXJyb3dJY29uVXJsKCk7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiKSk7XHJcblxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRsaW5rLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcblx0cGFyZW50LmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xyXG5cclxuXHRyZXR1cm4geyBsaW5rLCBsaW5rQ29udGFpbmVyIH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVSaWdodFNpZGVMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cclxuXHRsZXQgbiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keT4uZD5wXCIpO1xyXG5cdGlmIChcclxuXHRcdChuICE9PSBudWxsICYmIC9nYWxsZXJ5XFxzK2hhc1xccytiZWVuXFxzK3JlbW92ZWQvaS50ZXN0KG4udGV4dENvbnRlbnQpKSB8fFxyXG5cdFx0ZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZXplX2RnYWxsZXJ5X3RhYmxlXCIpICE9PSBudWxsKSB7IC8vIGV6ZSByZXN1cnJlY3Rpb25cclxuXHRcdHJldHVybiBcImRlbGV0ZWRHYWxsZXJ5XCI7XHJcblx0fVxyXG5cclxuXHRuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRpZiAobiAhPT0gbnVsbCAmJiBsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgcCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRuLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PT0gbG9jYXRpb24uaHJlZiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCAzKSAhPT0gXCIvdC9cIiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCA1KSAhPT0gXCIvaW1nL1wiKSB7XHJcblx0XHRcdHJldHVybiBcInBhbmRhXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBVbmtub3duXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQsXHJcblx0Z2V0T3ZlcnJpZGUsXHJcblx0c2V0T3ZlcnJpZGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBzaG93T25DbGljayhzZWxlY3RvciwgdXJsLCBzaXplKSB7XHJcblx0bGV0IHdpZHRoID0gNjc1O1xyXG5cdGxldCBoZWlnaHQgPSA0MTU7XHJcblx0aWYgKHNpemUgIT09IG51bGwgJiYgdHlwZW9mKHNpemUpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQoe3dpZHRoLCBoZWlnaHR9ID0gc2l6ZSk7XHJcblx0fVxyXG5cclxuXHRyZXF1aXJlKFwiLi4vamF2YXNjcmlwdFwiKS5pbmplY3QoKHNlbGVjdG9yLCB1cmwsIHdpZHRoLCBoZWlnaHQpID0+IHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIHBvcFVwKHVybCwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9LCBbIHNlbGVjdG9yLCB1cmwsIHdpZHRoLCBoZWlnaHQgXSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRzaG93T25DbGljayxcclxuXHRzaXplczoge1xyXG5cdFx0ZmF2b3JpdGVzOiB7IHdpZHRoOiA2NzUsIGhlaWdodDogNDE1IH1cclxuXHR9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gaXNEYXJrKCkge1xyXG5cdHJldHVybiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluZGV4T2YoXCJleGhlbnRhaVwiKSA+PSAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RG9jdW1lbnREYXJrRmxhZygpIHtcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIngtaXMtZGFya1wiLCBpc0RhcmsoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFycm93SWNvblVybCgpIHtcclxuXHRyZXR1cm4gKGlzRGFyaygpID8gXCJodHRwczovL2V4aGVudGFpLm9yZy9pbWcvbXIuZ2lmXCIgOiBcImh0dHBzOi8vZWhndC5vcmcvZy9tci5naWZcIik7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpc0RhcmssXHJcblx0c2V0RG9jdW1lbnREYXJrRmxhZyxcclxuXHRnZXRBcnJvd0ljb25VcmxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRlcih1c2Vybk5hbWUpIHtcclxuXHRyZXR1cm4gYC91cGxvYWRlci8ke3VzZXJuTmFtZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYXRlZ29yeShjYXRlZ29yeSkge1xyXG5cdHJldHVybiBgLyR7Y2F0ZWdvcnl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmF2b3JpdGVzUG9wdXAoaWQsIHRva2VuKSB7XHJcblx0cmV0dXJuIGAvZ2FsbGVyeXBvcHVwcy5waHA/Z2lkPSR7aWR9JnQ9JHt0b2tlbn0mYWN0PWFkZGZhdmA7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHR1cGxvYWRlcixcclxuXHRjYXRlZ29yeSxcclxuXHRmYXZvcml0ZXNQb3B1cFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuY2xhc3MgRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCByZXNwb25zZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkZldGNoRXJyb3JcIjtcclxuXHRcdHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuXHRjb25zdHJ1Y3RvcihyZWFkeVN0YXRlLCByZXNwb25zZUhlYWRlcnMsIHJlc3BvbnNlVGV4dCwgc3RhdHVzLCBzdGF0dXNUZXh0KSB7XHJcblx0XHR0aGlzLnJlYWR5U3RhdGUgPSByZWFkeVN0YXRlO1xyXG5cdFx0dGhpcy5yZXNwb25zZUhlYWRlcnMgPSByZXNwb25zZUhlYWRlcnM7XHJcblx0XHR0aGlzLnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcclxuXHRcdHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG5cdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFByb2dyZXNzRXZlbnQge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aENvbXB1dGFibGUsIGxvYWRlZCwgdG90YWwpIHtcclxuXHRcdHRoaXMubGVuZ3RoQ29tcHV0YWJsZSA9IGxlbmd0aENvbXB1dGFibGU7XHJcblx0XHR0aGlzLmxvYWRlZCA9IGxvYWRlZDtcclxuXHRcdHRoaXMudG90YWwgPSB0b3RhbDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRSZXNwb25zZUhlYWRlck1hcChhbGxIZWFkZXJzKSB7XHJcblx0Y29uc3QgcmVzcG9uc2VIZWFkZXJzID0ge307XHJcblxyXG5cdGNvbnN0IHJlID0gL1xccyooLiopXFxzKjpcXHMqKC4qKVxccyovO1xyXG5cdGZvciAoY29uc3QgbGluZSBvZiBhbGxIZWFkZXJzLnJlcGxhY2UoL1xcclxcblxccyokLywgXCJcIikuc3BsaXQoXCJcXHJcXG5cIikpIHtcclxuXHRcdGNvbnN0IG0gPSByZS5leGVjKGxpbmUpO1xyXG5cdFx0aWYgKG0gIT09IG51bGwpIHtcclxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzW21bMV0udG9Mb3dlckNhc2UoKV0gPSBtWzJdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3BvbnNlSGVhZGVycztcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFhoclJlc3BvbnNlKHhocikge1xyXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoXHJcblx0XHR4aHIucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSksXHJcblx0XHR4aHIucmVzcG9uc2VUZXh0LFxyXG5cdFx0eGhyLnN0YXR1cyxcclxuXHRcdHhoci5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHQvL2NvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdHhoci50aW1lb3V0ID0gdGltZW91dDtcclxuXHRcdGlmICh0eXBlb2Yob3ZlcnJpZGVNaW1lVHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUob3ZlcnJpZGVNaW1lVHlwZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoaGVhZGVycyAhPT0gbnVsbCAmJiB0eXBlb2YoaGVhZGVycykgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0Zm9yIChsZXQgayBpbiBoZWFkZXJzKSB7XHJcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoaywgaGVhZGVyc1trXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gcmVzb2x2ZShjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7eGhyLnN0YXR1c1RleHR9ICgke3hoci5zdGF0dXN9KWAsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCAoKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIiwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInRpbWVvdXRcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiVGltZW91dCByZWFjaGVkXCIsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob25wcm9ncmVzcykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIChlKSA9PiBvbnByb2dyZXNzKG5ldyBQcm9ncmVzc0V2ZW50KGUubGVuZ3RoQ29tcHV0YWJsZSwgZS5sb2FkZWQsIGUudG90YWwpKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xyXG5cdFx0eGhyLnNlbmQoZGF0YSk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0R21SZXNwb25zZShyZXNwb25zZSkge1xyXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoXHJcblx0XHRyZXNwb25zZS5yZWFkeVN0YXRlLFxyXG5cdFx0Z2V0UmVzcG9uc2VIZWFkZXJNYXAocmVzcG9uc2UucmVzcG9uc2VIZWFkZXJzKSxcclxuXHRcdHJlc3BvbnNlLnJlc3BvbnNlVGV4dCxcclxuXHRcdHJlc3BvbnNlLnN0YXR1cyxcclxuXHRcdHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykge1xyXG5cdGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0Y29uc3QgYmluYXJ5ID0gb3B0aW9ucy5iaW5hcnk7XHJcblx0Y29uc3QgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcclxuXHRjb25zdCB0aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDA7XHJcblx0Y29uc3Qgb25wcm9ncmVzcyA9IG9wdGlvbnMub25wcm9ncmVzcztcclxuXHRjb25zdCBvdmVycmlkZU1pbWVUeXBlID0gb3B0aW9ucy5vdmVycmlkZU1pbWVUeXBlO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0Y29uc3QgZGV0YWlscyA9IHtcclxuXHRcdFx0bWV0aG9kOiBtZXRob2QsXHJcblx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJzLFxyXG5cdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBvdmVycmlkZU1pbWVUeXBlLFxyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRiaW5hcnk6IGJpbmFyeSxcclxuXHRcdFx0c3luY2hyb25vdXM6IGZhbHNlLFxyXG5cdFx0XHR0aW1lb3V0OiB0aW1lb3V0XHJcblx0XHR9O1xyXG5cclxuXHRcdGRldGFpbHMub25sb2FkID0gKGUpID0+IHJlc29sdmUoY29udmVydEdtUmVzcG9uc2UoZSkpO1xyXG5cdFx0ZGV0YWlscy5vbmVycm9yID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihgUmVxdWVzdCBlcnJvcjogJHtlLnN0YXR1c1RleHR9ICgke2Uuc3RhdHVzfSlgLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cdFx0ZGV0YWlscy5vbmFib3J0ID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cdFx0ZGV0YWlscy5vbnRpbWVvdXQgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiVGltZW91dCByZWFjaGVkXCIsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZihvbnByb2dyZXNzKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdGRldGFpbHMub25wcm9ncmVzcyA9IChlKSA9PiBvbnByb2dyZXNzKG5ldyBQcm9ncmVzc0V2ZW50KGUubGVuZ3RoQ29tcHV0YWJsZSwgZS5sb2FkZWQsIGUudG90YWwpKTtcclxuXHRcdH1cclxuXHJcblx0XHRnbS54bWxIdHRwUmVxdWVzdChkZXRhaWxzKTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGlzR21TdXBwb3J0ZWQodXNlR20pIHtcclxuXHRyZXR1cm4gKHVzZUdtICYmIHR5cGVvZihnbS54bWxIdHRwUmVxdWVzdCkgPT09IFwiZnVuY3Rpb25cIikgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIkdFVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJHRVRcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0cmVxdWVzdDogcmVxdWVzdCxcclxuXHRnZXQ6IGdldCxcclxuXHRwb3N0OiBwb3N0LFxyXG5cdGdtOiB7XHJcblx0XHRyZXF1ZXN0OiByZXF1ZXN0R20sXHJcblx0XHRnZXQ6IGdldEdtLFxyXG5cdFx0cG9zdDogcG9zdEdtLFxyXG5cdH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImdtIHgtcmVzdXJyZWN0ZWRcXFwiPlxcclxcblxcdDxkaXYgaWQ9XFxcImdsZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJnZDFcXFwiPlxcclxcblxcdFxcdFxcdDxkaXY+PGltZyBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1tYWluLXRodW1ibmFpbFxcXCIgc3R5bGU9XFxcIm1heC13aWR0aDoyNTBweDttYXgtaGVpZ2h0OjM3NXB4O2Rpc3BsYXk6YmxvY2s7XFxcIiAvPjwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgaWQ9XFxcImdkMlxcXCI+XFxyXFxuXFx0XFx0PGgxIGlkPVxcXCJnblxcXCI+PC9oMT5cXHJcXG5cXHRcXHQ8aDEgaWQ9XFxcImdqXFxcIj48L2gxPlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgaWQ9XFxcImdyaWdodFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBpZD1cXFwiZ2Q1XFxcIj5cXHJcXG5cXHRcXHRcXHQ8cCBjbGFzcz1cXFwiZzMgZ3NwXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1nYWxsZXJ5LXVuYXZhaWxhYmxlXFxcIj48aW1nIGNsYXNzPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LW1yLWdpZlxcXCIgLz4gPGEgdGl0bGU9XFxcIlNvbWUgaW5mb3JtYXRpb24gaGFzIGJlZW4gcmVzdXJyZWN0ZWRcXFwiPkdhbGxlcnkgdW5hdmFpbGFibGU8L2E+PC9wPlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgaWQ9XFxcImdtaWRcXFwiPlxcclxcblxcdFxcdDxkaXYgaWQ9XFxcImdkM1xcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBpZD1cXFwiZ2RjXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8YSBjbGFzcz1cXFwiY3NcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWNhdGVnb3J5XFxcIj48L2E+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PGRpdiBpZD1cXFwiZ2RuXFxcIj48YSBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC11cGxvYWRlclxcXCI+PC9hPjwvZGl2PlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcImdkZFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHRhYmxlPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDFcXFwiPlBvc3RlZDo8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MlxcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtZGF0ZS11cGxvYWRlZFxcXCI+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDFcXFwiPlZpc2libGU6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LXZpc2libGVcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5GaWxlIFNpemU6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWZpbGUtc2l6ZVxcXCI+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDFcXFwiPkxlbmd0aDo8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MlxcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtZmlsZS1jb3VudFxcXCI+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdDwvdGFibGU+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PGRpdiBpZD1cXFwiZ2RyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8dGFibGU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBpZD1cXFwiZ3J0MVxcXCI+UmF0aW5nOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGlkPVxcXCJncnQyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGlkPVxcXCJyYXRpbmdfaW1hZ2VcXFwiIGNsYXNzPVxcXCJpclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtcG9zaXRpb246LTgwcHggLTFweFxcXCI+PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgaWQ9XFxcImdydDNcXFwiPjxzcGFuIGlkPVxcXCJyYXRpbmdfY291bnRcXFwiPjwvc3Bhbj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBpZD1cXFwicmF0aW5nX2xhYmVsXFxcIiBjb2xzcGFuPVxcXCIzXFxcIj5BdmVyYWdlOiA8c3BhbiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1hdmVyYWdlLXJhdGluZ1xcXCI+PC9zcGFuPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHQ8L3RhYmxlPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcImdkZlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBzdHlsZT1cXFwiZmxvYXQ6bGVmdDtjdXJzb3I6cG9pbnRlclxcXCIgaWQ9XFxcImZhdlxcXCI+PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBzdHlsZT1cXFwiZmxvYXQ6bGVmdFxcXCI+Jm5ic3A7IDxhIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWZhdm9yaXRlcy1saW5rXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBjbGFzcz1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1tci1naWZcXFwiIC8+IEFkZCB0byBGYXZvcml0ZXM8L2E+PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY1xcXCI+PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBpZD1cXFwiZ2Q0XFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJ0YWdsaXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8dGFibGU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwidGNcXFwiPnRhZ3M6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtdGFnc1xcXCI+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdDwvdGFibGU+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiY1xcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwiYXNtXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJndGJcXFwiPlxcclxcblxcdDxwIGNsYXNzPVxcXCJncGNcXFwiPlNob3dpbmcgMCAtIDAgb2YgMCBpbWFnZXM8L3A+XFxyXFxuXFx0PHRhYmxlIGNsYXNzPVxcXCJwdHRcXFwiPjx0cj48dGQ+PGEgaHJlZj1cXFwiP3A9MVxcXCI+PC9hPjwvdGQ+PC90cj48L3RhYmxlPlxcclxcbjwvZGl2PlwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5cclxuY29uc3QgcmVKYXZhc2NyaXB0R290b05leHQgPSAvc2V0VGltZW91dFxccypcXChcXHMqKGdvdG9uZXh0fFwiZ290b25leHRcXChcXClcIilcXHMqLFxccypcXGQrXFxzKlxcKS87XHJcbmNvbnN0IGZpbGVTaXplTGFiZWxzID0gWyBcIkJcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiBdO1xyXG5cclxuY29uc3QgY2F0ZWdvcnlJbmZvcyA9IHtcclxuXHRcImRvdWppbnNoaVwiOiB7IG5hbWU6IFwiRG91amluc2hpXCIsIHVybDogXCJkb3VqaW5zaGlcIiwgY2xhc3M6IFwiY3QyXCIgfSxcclxuXHRcIm1hbmdhXCI6IHsgbmFtZTogXCJNYW5nYVwiLCB1cmw6IFwibWFuZ2FcIiwgY2xhc3M6IFwiY3QzXCIgfSxcclxuXHRcImFydGlzdGNnXCI6IHsgbmFtZTogXCJBcnRpc3QgQ0dcIiwgdXJsOiBcImFydGlzdGNnXCIsIGNsYXNzOiBcImN0NFwiIH0sXHJcblx0XCJnYW1lY2dcIjogeyBuYW1lOiBcIkdhbWUgQ0dcIiwgdXJsOiBcImdhbWVjZ1wiLCBjbGFzczogXCJjdDVcIiB9LFxyXG5cdFwid2VzdGVyblwiOiB7IG5hbWU6IFwiV2VzdGVyblwiLCB1cmw6IFwid2VzdGVyblwiLCBjbGFzczogXCJjdGFcIiB9LFxyXG5cdFwibm9uLWhcIjogeyBuYW1lOiBcIk5vbi1IXCIsIHVybDogXCJub24taFwiLCBjbGFzczogXCJjdDlcIiB9LFxyXG5cdFwiaW1hZ2VzZXRcIjogeyBuYW1lOiBcIkltYWdlIFNldFwiLCB1cmw6IFwiaW1hZ2VzZXRcIiwgY2xhc3M6IFwiY3Q2XCIgfSxcclxuXHRcImNvc3BsYXlcIjogeyBuYW1lOiBcIkNvc3BsYXlcIiwgdXJsOiBcImNvc3BsYXlcIiwgY2xhc3M6IFwiY3Q3XCIgfSxcclxuXHRcImFzaWFucG9yblwiOiB7IG5hbWU6IFwiQXNpYW4gUG9yblwiLCB1cmw6IFwiYXNpYW5wb3JuXCIsIGNsYXNzOiBcImN0OFwiIH0sXHJcblx0XCJtaXNjXCI6IHsgbmFtZTogXCJNaXNjXCIsIHVybDogXCJtaXNjXCIsIGNsYXNzOiBcImN0MVwiIH0sXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gb25XaW5kb3dCZWZvcmVTY3JpcHRFeGVjdXRlKGV2ZW50KSB7XHJcblx0Y29uc3QgcmVtb3ZlID0gKCFldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwic3JjXCIpICYmIHJlSmF2YXNjcmlwdEdvdG9OZXh0LnRlc3QoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KSk7XHJcblx0aWYgKCFyZW1vdmUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0aWYgKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKSB7XHJcblx0XHRldmVudC50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChldmVudC50YXJnZXQpO1xyXG5cdH1cclxuXHJcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJsb2NrUmVkaXJlY3Rpb25zKCkge1xyXG5cdHJlcXVpcmUoXCIuLi9qYXZhc2NyaXB0XCIpLmluamVjdCgoKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mKHdpbmRvdy5nb3RvbmV4dCkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHR3aW5kb3cuZ290b25leHQgPSAoKSA9PiB7fTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlc2hlZXQoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtZ2FsbGVyeS1yZXN1cnJlY3RcIjtcclxuXHRpZiAoIXN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7XHJcblx0XHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW51cERvY3VtZW50KCkge1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYm9keT5zY3JpcHQsYm9keT5kaXYuZFwiKSkge1xyXG5cdFx0aWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlRG9tTm9kZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xyXG5cdGlmICghc291cmNlIHx8ICFkZXN0aW5hdGlvbikgeyByZXR1cm47IH1cclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygc291cmNlLmNoaWxkTm9kZXMpIHtcclxuXHRcdGRlc3RpbmF0aW9uLmFwcGVuZENoaWxkKG5vZGUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZURvY3VtZW50KGh0bWxTb3VyY2UsIGRlc3RpbmF0aW9uKSB7XHJcblx0Y29uc3QgZ2FsbGVyeUh0bWxEb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWxTb3VyY2UsIFwidGV4dC9odG1sXCIpO1xyXG5cdG1vdmVEb21Ob2RlcyhnYWxsZXJ5SHRtbERvYy5oZWFkLCBkZXN0aW5hdGlvbi5oZWFkKTtcclxuXHRtb3ZlRG9tTm9kZXMoZ2FsbGVyeUh0bWxEb2MuYm9keSwgZGVzdGluYXRpb24uYm9keSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluc2VydEdhbGxlcnlIdG1sKGlkZW50aWZpZXIpIHtcclxuXHRjb25zdCBhcGlTdHlsZSA9IHJlcXVpcmUoXCIuLi9hcGkvc3R5bGVcIik7XHJcblx0Y29uc3QgbmF2QmFyID0gYXBpU3R5bGUuaXNEYXJrKCkgP1xyXG5cdFx0cmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXItZGFyay5odG1sXCIpIDpcclxuXHRcdHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyLWxpZ2h0Lmh0bWxcIik7XHJcblxyXG5cdG1vdmVEb2N1bWVudChuYXZCYXIsIGRvY3VtZW50KTtcclxuXHRtb3ZlRG9jdW1lbnQocmVxdWlyZShcIi4vZ2FsbGVyeS5odG1sXCIpLCBkb2N1bWVudCk7XHJcblxyXG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghYm9keSkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgaW1hZ2VVcmwgPSBhcGlTdHlsZS5nZXRBcnJvd0ljb25VcmwoKTtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2YgYm9keS5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nLngtZ2FsbGVyeS1yZXN1cnJlY3QtbXItZ2lmXCIpKSB7XHJcblx0XHRub2RlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZVVybCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBnYWxsZXJ5SW5mb0ZldGNoID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vZmV0Y2hcIik7XHJcblx0Y29uc3QgaW5mbyA9IGF3YWl0IGdhbGxlcnlJbmZvRmV0Y2guZ2V0KGlkZW50aWZpZXIpO1xyXG5cdGlmIChpbmZvID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRzZXRHYWxsZXJ5SW5mbyhib2R5LCBpbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0R2FsbGVyeUluZm8oaHRtbCwgaW5mbykge1xyXG5cdGNvbnN0IHVybHMgPSByZXF1aXJlKFwiLi4vYXBpL3VybHNcIik7XHJcblx0Y29uc3QgcG9wdXBzID0gcmVxdWlyZShcIi4uL2FwaS9wb3B1cHNcIik7XHJcblx0bGV0IG47XHJcblxyXG5cdC8vIFRpdGxlXHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI2duXCIpLnRleHRDb250ZW50ID0gaW5mby50aXRsZTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2pcIikudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlT3JpZ2luYWw7XHJcblxyXG5cdC8vIFRodW1ibmFpbFxyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LW1haW4tdGh1bWJuYWlsXCIpLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbmZvLm1haW5UaHVtYm5haWxVcmwpO1xyXG5cclxuXHQvLyBVcGxvYWRlclxyXG5cdG4gPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC11cGxvYWRlclwiKTtcclxuXHRuLnRleHRDb250ZW50ID0gaW5mby51cGxvYWRlcjtcclxuXHRuLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJscy51cGxvYWRlcihpbmZvLnVwbG9hZGVyKSk7XHJcblxyXG5cdC8vIENhdGVnb3J5XHJcblx0biA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWNhdGVnb3J5XCIpO1xyXG5cdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2F0ZWdvcnlJbmZvcywgaW5mby5jYXRlZ29yeSkpIHtcclxuXHRcdGNvbnN0IGNhdGVnb3J5SW5mbyA9IGNhdGVnb3J5SW5mb3NbaW5mby5jYXRlZ29yeV07XHJcblx0XHRuLnRleHRDb250ZW50ID0gY2F0ZWdvcnlJbmZvLm5hbWU7XHJcblx0XHRuLmNsYXNzTGlzdC5hZGQoY2F0ZWdvcnlJbmZvLmNsYXNzKTtcclxuXHRcdG4uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmxzLmNhdGVnb3J5KGNhdGVnb3J5SW5mby51cmwpKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bi50ZXh0Q29udGVudCA9IGluZm8uY2F0ZWdvcnk7XHJcblx0fVxyXG5cclxuXHQvLyBSYXRpbmdcclxuXHRjb25zdCBwb3MgPSBnZXRCYWNrZ3JvdW5kUG9zaXRpb25Gb3JSYXRpbmcoaW5mby5yYXRpbmdBdmVyYWdlKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nX2ltYWdlXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGAke3Bvcy54fXB4ICR7cG9zLnl9cHhgO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWF2ZXJhZ2UtcmF0aW5nXCIpLnRleHRDb250ZW50ID0gaW5mby5yYXRpbmdBdmVyYWdlLnRvRml4ZWQoMik7XHJcblxyXG5cdC8vIEluZm9cclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC1kYXRlLXVwbG9hZGVkXCIpLnRleHRDb250ZW50ID0gZ2V0VGltZXN0YW1wRGF0ZVN0cmluZyhpbmZvLmRhdGVVcGxvYWRlZCk7XHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtdmlzaWJsZVwiKS50ZXh0Q29udGVudCA9IChpbmZvLnZpc2libGUgPyBcIlllc1wiIDogXCJOb1wiKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC1maWxlLXNpemVcIikudGV4dENvbnRlbnQgPSBnZXRQcmV0dHlGaWxlU2l6ZShpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSk7XHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtZmlsZS1jb3VudFwiKS50ZXh0Q29udGVudCA9IHBsdXJhbChpbmZvLmZpbGVDb3VudCwgXCIgZmlsZVwiLCBcIiBmaWxlc1wiKTtcclxuXHJcblx0Ly8gVGFnc1xyXG5cdGNvbnN0IHRhZ0NvbnRhaW5lciA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LXRhZ3NcIik7XHJcblx0Zm9yIChjb25zdCB0YWcgb2YgaW5mby50YWdzLnVuZGVmaW5lZCkge1xyXG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGRpdi5jbGFzc05hbWUgPSBcImd0XCI7XHJcblx0XHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHRhLmhyZWYgPSBgL3RhZy8ke3RhZ31gO1xyXG5cdFx0YS50ZXh0Q29udGVudCA9IHRhZztcclxuXHRcdGRpdi5hcHBlbmRDaGlsZChhKTtcclxuXHRcdHRhZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xyXG5cdH1cclxuXHJcblx0Ly8gRmF2b3JpdGVzXHJcblx0Y29uc3QgZmF2b3JpdGVVcmwgPSB1cmxzLmZhdm9yaXRlc1BvcHVwKGluZm8uaWRlbnRpZmllci5pZCwgaW5mby5pZGVudGlmaWVyLnRva2VuKTtcclxuXHRjb25zdCBmYXZvcml0ZUxpbmtTZWxlY3RvciA9IFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtZmF2b3JpdGVzLWxpbmtcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZhdm9yaXRlTGlua1NlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGZhdm9yaXRlVXJsKTtcclxuXHRwb3B1cHMuc2hvd09uQ2xpY2soXCIjZ2RmXCIsIGZhdm9yaXRlVXJsLCBwb3B1cHMuc2l6ZXMuZmF2b3JpdGVzKTtcclxuXHJcblx0Ly8gRG93bmxvYWQgbWV0YWRhdGFcclxuXHRzZXR1cERvd25sb2FkTGluayhpbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFBvc2l0aW9uRm9yUmF0aW5nKHJhdGluZykge1xyXG5cdHJhdGluZyA9IE1hdGgucm91bmQocmF0aW5nICogMi4wKTtcclxuXHRyYXRpbmcgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMCwgcmF0aW5nKSk7XHJcblx0Y29uc3QgeCA9ICg1IC0gTWF0aC5jZWlsKHJhdGluZyAvIDIpKSAqIC0xNjtcclxuXHRjb25zdCB5ID0gKHJhdGluZyAlIDIgPT09IDApID8gLTEgOiAtMjE7XHJcblx0cmV0dXJuIHsgeCwgeSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbHVyYWwobnVtYmVyLCBzaW5ndWxhckxhYmVsLCBwbHVyYWxMYWJlbCkge1xyXG5cdGNvbnN0IGxhYmVsID0gKG51bWJlciA9PT0gMSA/IHNpbmd1bGFyTGFiZWwgOiBwbHVyYWxMYWJlbCk7XHJcblx0cmV0dXJuIGAke251bWJlcn0ke2xhYmVsfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWVzdGFtcERhdGVTdHJpbmcodGltZXN0YW1wKSB7XHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcblx0Y29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG5cdGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0Y29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0cmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAke2hvdXJ9OiR7bWludXRlfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByZXR0eUZpbGVTaXplKGJ5dGVzKSB7XHJcblx0Y29uc3QgaWkgPSBmaWxlU2l6ZUxhYmVscy5sZW5ndGggLSAxO1xyXG5cdGxldCBpID0gMDtcclxuXHR3aGlsZSAoaSA8IGlpICYmIGJ5dGVzID49IDEwMjQpIHtcclxuXHRcdGJ5dGVzIC89IDEwMjQ7XHJcblx0XHQrK2k7XHJcblx0fVxyXG5cdHJldHVybiBgJHtieXRlcy50b0ZpeGVkKGkgPT09IDAgPyAwIDogMil9ICR7ZmlsZVNpemVMYWJlbHNbaV19YDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldHVwRG93bmxvYWRMaW5rKGluZm8pIHtcclxuXHRjb25zdCBnYWxsZXJ5TGlua3MgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktbGlua3NcIik7XHJcblx0Y29uc3QgbGluayA9IGdhbGxlcnlMaW5rcy5jcmVhdGVSaWdodFNpZGVMaW5rKFwiTWV0YWRhdGEgSlNPTlwiKS5saW5rO1xyXG5cdGlmIChsaW5rID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiaW5mby5qc29uXCIpO1xyXG5cdGxpbmsuaHJlZiA9IGNyZWF0ZURvd25sb2FkRGF0YVVybChpbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRG93bmxvYWREYXRhVXJsKGluZm8pIHtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaW5mby50b0NvbW1vbkpzb24oKSwgbnVsbCwgXCIgIFwiKTtcclxuXHRjb25zdCBibG9iID0gbmV3IEJsb2IoWyBpbmZvU3RyaW5nIF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdGlmIChjdXJyZW50UGFnZVR5cGUgIT09IFwiZGVsZXRlZEdhbGxlcnlcIikgeyByZXR1cm47IH1cclxuXHJcblx0YmxvY2tSZWRpcmVjdGlvbnMoKTtcclxuXHJcblx0Y29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby91dGlsc1wiKTtcclxuXHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChsb2NhdGlvbi5ocmVmKTtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cdGNsZWFudXBEb2N1bWVudCgpO1xyXG5cdGluc2VydEdhbGxlcnlIdG1sKGluZm8uaWRlbnRpZmllcik7XHJcblxyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1wYWdlLXJlc3VycmVjdGVkXCIpO1xyXG5cdHBhZ2VUeXBlLnNldE92ZXJyaWRlKGN1cnJlbnRQYWdlVHlwZSk7XHJcbn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXNjcmlwdGV4ZWN1dGVcIiwgb25XaW5kb3dCZWZvcmVTY3JpcHRFeGVjdXRlLCB0cnVlKTtcclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIm5iXFxcIiBjbGFzcz1cXFwibm9zZWwgeC1yZXN1cnJlY3RlZFxcXCI+XFxyXFxuXFx0PGRpdj48YSBjbGFzcz1cXFwibmJ3XFxcIiBocmVmPVxcXCIvXFxcIj5Gcm9udDxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj4gUGFnZTwvc3Bhbj48L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvd2F0Y2hlZFxcXCI+V2F0Y2hlZDwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9wb3B1bGFyXFxcIj5Qb3B1bGFyPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3RvcnJlbnRzLnBocFxcXCI+VG9ycmVudHM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvZmF2b3JpdGVzLnBocFxcXCI+RmF2PHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPm9yaXRlPC9zcGFuPnM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvdWNvbmZpZy5waHBcXFwiPlNldHRpbmdzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3VwbG9hZC9tYW5hZ2UucGhwXFxcIj48c3BhbiBjbGFzcz1cXFwibmJ3MlxcXCI+TXkgPC9zcGFuPlVwbG9hZHM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvbXl0YWdzXFxcIj5NeSBUYWdzPC9hPjwvZGl2PlxcclxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJuYlxcXCIgY2xhc3M9XFxcIm5vc2VsIHgtcmVzdXJyZWN0ZWRcXFwiPlxcclxcblxcdDxkaXY+PGEgY2xhc3M9XFxcIm5id1xcXCIgaHJlZj1cXFwiL1xcXCI+RnJvbnQ8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+IFBhZ2U8L3NwYW4+PC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3dhdGNoZWRcXFwiPldhdGNoZWQ8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvcG9wdWxhclxcXCI+UG9wdWxhcjwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi90b3JyZW50cy5waHBcXFwiPlRvcnJlbnRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL2Zhdm9yaXRlcy5waHBcXFwiPkZhdjxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj5vcml0ZTwvc3Bhbj5zPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL2hvbWUucGhwXFxcIj48c3BhbiBjbGFzcz1cXFwibmJ3MlxcXCI+TXkgPC9zcGFuPkhvbWU8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL3VwbG9hZC5lLWhlbnRhaS5vcmcvbWFuYWdlLnBocFxcXCI+PHNwYW4gY2xhc3M9XFxcIm5idzJcXFwiPk15IDwvc3Bhbj5VcGxvYWRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3RvcGxpc3QucGhwXFxcIj5Ub3BsaXN0czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9ib3VudHkucGhwXFxcIj5Cb3VudGllczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9uZXdzLnBocFxcXCI+TmV3czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcImh0dHBzOi8vZm9ydW1zLmUtaGVudGFpLm9yZy9cXFwiPkZvcnVtczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcImh0dHBzOi8vZWh3aWtpLm9yZy9cXFwiPldpa2k8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL2hlbnRhaXZlcnNlLm9yZy9cXFwiIG9uY2xpY2s9XFxcInBvcFVwKCdodHRwczovL2hlbnRhaXZlcnNlLm9yZy8nLDEyNTAsNzIwKTsgcmV0dXJuIGZhbHNlXFxcIj5IPHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPmVudGFpPC9zcGFuPlY8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+ZXJzZTwvc3Bhbj48L2E+PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImJvZHk+Om5vdCgueC1yZXN1cnJlY3RlZCl7ZGlzcGxheTpub25lIWltcG9ydGFudH0jeC1nYWxsZXJ5LXJlc3VycmVjdC1jYXRlZ29yeXt0ZXh0LWRlY29yYXRpb246bm9uZX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvUHJvbWlzZShmbiwgc2VsZikge1xyXG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNvbHZlKGZuLmFwcGx5KHNlbGYsIGFyZ3MpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJlamVjdChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IGdtID0gKChvYmplY3RzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0aWYgKG9iai5HTSAhPT0gbnVsbCAmJiB0eXBlb2Yob2JqLkdNKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHJldHVybiBvYmouR007XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHRjb25zdCBtYXBwaW5nID0gW1xyXG5cdFx0WyBcImdldFZhbHVlXCIsIFwiR01fZ2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcInNldFZhbHVlXCIsIFwiR01fc2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcImRlbGV0ZVZhbHVlXCIsIFwiR01fZGVsZXRlVmFsdWVcIiBdLFxyXG5cdFx0WyBcInhtbEh0dHBSZXF1ZXN0XCIsIFwiR01feG1saHR0cFJlcXVlc3RcIiBdXHJcblx0XTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwcGluZykge1xyXG5cdFx0bGV0IHByb21pc2UgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRjb25zdCBmbiA9IG9ialt2YWx1ZV07XHJcblx0XHRcdGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRwcm9taXNlID0gdG9Qcm9taXNlKGZuLCBvYmopO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgTm90IHN1cHBvcnRlZCAoJHtrZXl9KWApKSk7XHJcblx0XHR9XHJcblx0XHRyZXN1bHRba2V5XSA9IHByb21pc2U7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn0pLmNhbGwodGhpcywgW3RoaXMsIHdpbmRvd10pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ207XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluamVjdChmdW5jLCBhcmdzKSB7XHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIikgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG51bGw7XHJcblx0aWYgKCFwYXJlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdGNvbnN0IHNjcmlwdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdGNvbnN0IGFyZ1N0ciA9IChBcnJheS5pc0FycmF5KGFyZ3MpICYmIGFyZ3MubGVuZ3RoID4gMCkgP1xyXG5cdFx0YC4uLiR7SlNPTi5zdHJpbmdpZnkoYXJncywgbnVsbCwgXCJcIil9YCA6XHJcblx0XHRcIlwiO1xyXG5cdHNjcmlwdE5vZGUudGV4dENvbnRlbnQgPSBgKCR7ZnVuYy50b1N0cmluZygpfSkoJHthcmdTdHJ9KTtgO1xyXG5cclxuXHRwYXJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0Tm9kZSk7XHJcblx0cGFyZW50LnJlbW92ZUNoaWxkKHNjcmlwdE5vZGUpO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluamVjdFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBpc1JlYWR5VmFsdWUgPSBmYWxzZTtcclxubGV0IGNhbGxiYWNrcyA9IG51bGw7XHJcbmxldCBjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5jb25zdCBjaGVja0ludGVydmFsUmF0ZSA9IDI1MDtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0hvb2tlZCgpIHtcclxuXHRyZXR1cm4gY2FsbGJhY2tzICE9PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob29rKCkge1xyXG5cdGNhbGxiYWNrcyA9IFtdO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoY2hlY2tJZlJlYWR5LCBjaGVja0ludGVydmFsUmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaG9vaygpIHtcclxuXHRjb25zdCBjYnMgPSBjYWxsYmFja3M7XHJcblxyXG5cdGNhbGxiYWNrcyA9IG51bGw7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjbGVhckludGVydmFsKGNoZWNrSW50ZXJ2YWxJZCk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuXHJcblx0aW52b2tlKGNicyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZShjYWxsYmFja3MpIHtcclxuXHRmb3IgKGxldCBjYiBvZiBjYWxsYmFja3MpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNiKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuXHRpZiAoaXNSZWFkeVZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRpZiAoaXNIb29rZWQoKSkgeyB1bmhvb2soKTsgfVxyXG5cdFx0aXNSZWFkeVZhbHVlID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcclxuXHRpc1JlYWR5KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvblJlYWR5KGNhbGxiYWNrKSB7XHJcblx0aWYgKGlzUmVhZHkoKSkge1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghaXNIb29rZWQoKSkgeyBob29rKCk7IH1cclxuXHJcblx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0b25SZWFkeTogb25SZWFkeSxcclxuXHRnZXQgaXNSZWFkeSgpIHsgcmV0dXJuIGlzUmVhZHkoKTsgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBhcGlTdHlsZSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0aWYgKGFwaVN0eWxlID09PSBudWxsKSB7IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vYXBpL3N0eWxlXCIpOyB9XHJcblx0YXBpU3R5bGUuc2V0RG9jdW1lbnREYXJrRmxhZygpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiJdfQ==
