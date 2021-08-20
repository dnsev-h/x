// ==UserScript==
// @name        x/gallery-resurrect
// @version     1.2.7
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
// @exclude     https://exhentai.org/archiver.php*
// @exclude     https://e-hentai.org/archiver.php*
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

const GalleryIdentifier = require("../gallery-identifier").GalleryIdentifier;


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
	if (tags !== null && typeof(tags) === "object" && !Array.isArray(tags)) {
		for (const namespace in tags) {
			if (!Object.prototype.hasOwnProperty.call(tags, namespace)) { continue; }
			const tagList = tags[namespace];
			result[namespace] = [...tagList];
		}
	}
	return result;
}

function toCommonFavoriteCategory(info) {
	if (info.favoriteCategory === null) { return null; }
	return {
		id: toNumberOrDefault(info.favoriteCategory.index, 0),
		title: toStringOrDefault(info.favoriteCategory.title, "")
	};
}


function toCommonFullGalleryInfoJson(info) {
	return {
		gallery: (
			galleryIdentifiertoCommonJson(info.identifier, null) ||
			galleryIdentifiertoCommonJson(new GalleryIdentifier(0, ""), null)),
		title: toStringOrDefault(info.title, ""),
		title_original: toStringOrDefault(info.titleOriginal, ""),
		date_uploaded: toNumberOrDefault(info.dateUploaded, 0),
		category: toStringOrDefault(info.category, ""),
		uploader: toStringOrDefault(info.uploader, ""),
		rating: {
			average: toNumberOrDefault(info.ratingAverage, 0),
			count: toNumberOrDefault(info.ratingCount, 0),
		},
		favorites: {
			category: (info.favoriteCategory !== null ? toNumberOrDefault(info.favoriteCategory.index, -1) : -1),
			category_title: (info.favoriteCategory !== null ? toStringOrDefault(info.favoriteCategory.title, "") : ""),
			count: toNumberOrDefault(info.favoriteCount, 0)
		},
		parent: galleryIdentifiertoCommonJson(info.parent, null),
		newer_versions: newerVersionsToCommonJson(info.newerVersions),
		thumbnail: toStringOrDefault(info.mainThumbnailUrl, ""),
		thumbnail_size: toStringOrDefault(info.thumbnailSize, ""),
		thumbnail_rows: toNumberOrDefault(info.thumbnailRows, 0),
		image_count: toNumberOrDefault(info.fileCount, 0),
		images_resized: false,
		total_file_size_approx: toNumberOrDefault(info.approximateTotalFileSize, 0),
		visible: (info.visible === true),
		visible_reason: toStringOrDefault(info.visibleReason, ""),
		language: toStringOrDefault(info.language, ""),
		translated: (info.translated === true),
		tags: tagsToCommonJson(info.tags),
		// New
		tags_have_namespace: (info.tagsHaveNamespace === true),
		torrent_count: toNumberOrDefault(info.torrentCount, 0),
		archiver_key: toStringOrDefault(info.archiverKey, null),
		source: toStringOrDefault(info.source, null),
		source_site: toStringOrDefault(info.sourceSite, null),
		date_generated: toNumberOrDefault(info.dateGenerated, 0)
	};
}

function toCommonGalleryInfoJson(info) {
	const date = new Date(toNumberOrDefault(info.dateUploaded, 0));
	return {
		title: toStringOrDefault(info.title, ""),
		title_original: toStringOrDefault(info.titleOriginal, ""),

		category: toStringOrDefault(info.category, ""),
		tags: tagsToCommonJson(info.tags),

		language: toStringOrDefault(info.language, ""),
		translated: !!info.translated,

		favorite_category: toCommonFavoriteCategory(info),

		upload_date: [
			date.getUTCFullYear(),
			date.getUTCMonth() + 1,
			date.getUTCDate(),
			date.getUTCHours(),
			date.getUTCMinutes(),
			date.getUTCSeconds()
		],

		source: {
			site: toStringOrDefault(info.sourceSite, ""),
			gid: (info.identifier !== null ? toNumberOrDefault(info.identifier.id, 0) : 0),
			token: (info.identifier !== null ? toStringOrDefault(info.identifier.token, 0) : 0),
			parent_gallery: galleryIdentifiertoCommonJson(info.parent, null),
			newer_versions: newerVersionsToCommonJson(info.newerVersions)
		}
	};
}

function toCommonJson(info) {
	return {
		gallery_info: toCommonGalleryInfoJson(info),
		gallery_info_full: toCommonFullGalleryInfoJson(info)
	};
}


module.exports = {
	toCommonJson
};

},{"../gallery-identifier":1}],3:[function(require,module,exports){
"use strict";

const fetch = require("../../fetch"); // jshint ignore:line
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
		gidlist: gidList,
		namespace: 1
	};

	const sourceUrl = window.location.href;
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
			const info = getFromJson(json, sourceUrl);
			results.push(info);
		}
	}

	setArrayCount(results, gidList.length, null);

	return isArray ? results : results[0];
}


module.exports = {
	get: getGalleryInfo
};

},{"../../fetch":13,"./get-from-json":4}],4:[function(require,module,exports){
"use strict";

const types = require("./types");
const utils = require("./utils");
const htmlUtils = require("../../html-utils");

const defaultNamespace = "misc";


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

function getTagAndNamespace(tag) {
	const pattern = /^(?:([^:]*):)?([\w\W]*)$/;
	const match = pattern.exec(tag);
	return (match !== null) ?
		({ tag: match[2], namespace: match[1] || defaultNamespace }) :
		({ tag: tag, namespace: defaultNamespace });
}

function toProperCase(text) {
	return text.replace(/(^|\W)(\w)/g, (m0, m1, m2) => `${m1}${m2.toUpperCase()}`);
}

function populateGalleryInfoFromJson(info, json) {
	info.title = htmlUtils.getStringFromHtmlEscapedString(getJsonString(json.title));
	info.titleOriginal = htmlUtils.getStringFromHtmlEscapedString(getJsonString(json.title_jpn));
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

	const tags = {};
	if (Array.isArray(json.tags)) {
		for (const jsonTag of json.tags) {
			const stringTag = getJsonString(jsonTag);
			if (stringTag === null) { continue; }

			const {tag, namespace} = getTagAndNamespace(stringTag);

			let namespaceTags;
			if (tags.hasOwnProperty(namespace)) {
				namespaceTags = tags[namespace];
			} else {
				namespaceTags = [];
				tags[namespace] = namespaceTags;
			}

			namespaceTags.push(tag);
		}
	}

	info.tags = tags;
	info.tagsHaveNamespace = true;

	// Tag-based info
	if (tags.hasOwnProperty("language")) {
		const languageTags = tags.language;
		const translatedIndex = languageTags.indexOf("translated");
		info.translated = (translatedIndex >= 0);
		if (translatedIndex !== 0) {
			info.language = toProperCase(languageTags[0]);
		}
	} else {
		info.language = "Japanese";
		info.translated = false;
	}
}

function getFromJson(json, url) {
	if (json === null || typeof(json) !== "object") { return null; }

	const id = getJsonNumber(json.gid);
	const token = getJsonString(json.token);
	if (id === null || token === null) { return null; }

	const info = new types.GalleryInfo();
	info.identifier = new types.GalleryIdentifier(id, token);
	info.currentPage = null;
	info.source = "json";
	populateGalleryInfoFromJson(info, json);
	info.sourceSite = utils.getSourceSiteFromUrl(url);
	info.dateGenerated = Date.now();
	return info;
}


module.exports = getFromJson;

},{"../../html-utils":20,"./types":5,"./utils":6}],5:[function(require,module,exports){
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
		this.mainThumbnailUrl = null;
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
		this.sourceSite = null;
		this.dateGenerated = null;
	}
}


module.exports = {
	GalleryIdentifier,
	GalleryInfo
};

},{"../gallery-identifier":1}],6:[function(require,module,exports){
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
}

function getSourceSiteFromUrl(url) {
	const pattern = /^(?:(?:[a-z][a-z0-9\+\-\.]*:\/*|\/{2,})([^\/]*))?(\/?[\w\W]*)$/i;
	const match = pattern.exec(url);

	if (match !== null && match[1]) {
		const host = match[1].toLowerCase();
		if (host.indexOf("exhentai") >= 0) { return "exhentai"; }
		if (host.indexOf("e-hentai") >= 0) { return "e-hentai"; }
	}

	return null;
}


module.exports = {
	getGalleryIdentifierAndPageFromUrl,
	getBytesSizeFromLabel,
	getSourceSiteFromUrl
};

},{"./types":5}],7:[function(require,module,exports){
"use strict";

const apiStyle = require("./style");
const style = require("../style");


function insertStylesheet() {
	const id = "x-gallery-links-right-sidebar";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style/gallery-right-sidebar.css");
	style.addStylesheet(src, id);
}

function getGroupContainer(parent) {
	const id = "x-gallery-links-right-sidebar-container";
	let node = parent.querySelector(`.${id}`);
	if (node === null) {
		node = document.createElement("div");
		node.className = `g2 gsp ${id}`;
		parent.appendChild(node);

		const p = parent.parentNode;
		if (p !== null) {
			p.classList.add("x-gallery-links-right-sidebar-contains-container");
		}
	}
	return node;
}

function createLink(label, order) {
	const parent = document.querySelector("#gd5");
	if (parent === null) {
		return { link: null, linkContainer: null };
	}

	// Style
	insertStylesheet();

	// Container
	const linkGroup = getGroupContainer(parent);
	const linkContainer = document.createElement("div");
	linkContainer.className = "x-gallery-links-right-sidebar-entry";
	if (typeof(order) === "number" && !Number.isNaN(order)) {
		linkContainer.style.order = `${order}`;
	}

	const img = document.createElement("img");
	img.src = apiStyle.getArrowIconUrl();
	linkContainer.appendChild(img);

	linkContainer.appendChild(document.createTextNode(" "));

	const link = document.createElement("a");
	link.textContent = label;
	linkContainer.appendChild(link);

	linkGroup.appendChild(linkContainer);

	return { link, linkContainer };
}


module.exports = {
	createLink
};

},{"../style":23,"./style":10,"./style/gallery-right-sidebar.css":11}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

function showOnClick(selector, url, size) {
	/* globals popUp */
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
			} catch (err) {
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

},{"../javascript":21}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
module.exports = ".x-gallery-links-right-sidebar-container{margin-top:-25px;padding-bottom:0;display:flex;flex-direction:column}.x-gallery-links-right-sidebar-entry{margin-top:25px}div#gright.x-gallery-links-right-sidebar-contains-container{overflow-x:hidden;overflow-y:auto}";
},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"./gm":19}],14:[function(require,module,exports){
module.exports = "<div class=\"gm x-resurrected\">\r\n\t<div id=\"gleft\">\r\n\t\t<div id=\"gd1\">\r\n\t\t\t<div><img id=\"x-gallery-resurrect-main-thumbnail\" style=\"max-width:250px;max-height:375px;display:block;\" /></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"gd2\">\r\n\t\t<h1 id=\"gn\"></h1>\r\n\t\t<h1 id=\"gj\"></h1>\r\n\t</div>\r\n\t<div id=\"gmid\">\r\n\t\t<div id=\"gd3\">\r\n\t\t\t<div id=\"gdc\">\r\n\t\t\t\t<a class=\"cs\" id=\"x-gallery-resurrect-category\"></a>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdn\"><a id=\"x-gallery-resurrect-uploader\"></a></div>\r\n\t\t\t<div id=\"gdd\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Posted:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-date-uploaded\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr class=\"x-gallery-resurrect-hidden-info\">\r\n\t\t\t\t\t\t<td class=\"gdt1\">Parent:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-parent\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Visible:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-visible\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr id=\"x-gallery-resurrect-language-row\">\r\n\t\t\t\t\t\t<td class=\"gdt1\">Language:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-language\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">File Size:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-size\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Length:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-count\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr class=\"x-gallery-resurrect-hidden-info\">\r\n\t\t\t\t\t\t<td class=\"gdt1\">Favorited:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-favorite-count\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdr\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"grt1\">Rating:</td>\r\n\t\t\t\t\t\t<td id=\"grt2\">\r\n\t\t\t\t\t\t\t<div id=\"rating_image\" class=\"ir\" style=\"background-position:-80px -1px\"></div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td id=\"grt3\"><span id=\"rating_count\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"rating_label\" colspan=\"3\">Average: <span id=\"x-gallery-resurrect-average-rating\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdf\">\r\n\t\t\t\t<div style=\"float:left;cursor:pointer\" id=\"fav\"></div>\r\n\t\t\t\t<div style=\"float:left\">&nbsp; <a id=\"x-gallery-resurrect-favorites-link\" target=\"_blank\"><img class=\"x-gallery-resurrect-mr-gif\" /> Add to Favorites</a></div>\r\n\t\t\t\t<div class=\"c\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"gd4\">\r\n\t\t\t<div id=\"taglist\">\r\n\t\t\t\t<table><tbody id=\"x-gallery-resurrect-tags\"></tbody></table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"gd5\">\r\n\t\t\t<p class=\"g3 gsp\" id=\"x-gallery-resurrect-gallery-unavailable\"><img class=\"x-gallery-resurrect-mr-gif\" /> <a title=\"Some information has been resurrected\">Gallery unavailable</a></p>\r\n\t\t</div>\r\n\t\t<div class=\"c\"></div>\r\n\t</div>\r\n\t<div class=\"c\"></div>\r\n</div>\r\n<div id=\"asm\"></div>\r\n<div class=\"gtb\">\r\n\t<p class=\"gpc\">Showing 0 - 0 of 0 images</p>\r\n\t<table class=\"ptt\"><tr><td class=\"ptds\"><a href=\"?p=0\" id=\"x-gallery-resurrect-page-url\"></a></td></tr></table>\r\n</div>";
},{}],15:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const style = require("../style");
const pageType = require("../api/page-type");
const toCommonJson = require("../api/gallery-info/common-json").toCommonJson;

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

	const n = document.querySelector("#x-gallery-resurrect-page-url");
	if (n !== null) {
		const loc = window.location;
		n.setAttribute("href", `${loc.protocol}//${loc.host}/g/${info.identifier.id}/${info.identifier.token}/`);
	}

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
	html.querySelector("#x-gallery-resurrect-file-count").textContent = plural(info.fileCount, " page", " pages");
	if (typeof(info.language) === "string") {
		const suffix = info.translated ? ` \xa0` : ""; // &nbsp;
		n = html.querySelector("#x-gallery-resurrect-language");
		n.textContent = `${info.language}${suffix}`;
		if (info.translated) {
			const span = document.createElement("span");
			span.className = "halp";
			span.title = "This gallery has been translated from the original language text.";
			span.textContent = "TR";
			n.appendChild(span);
		}
	} else {
		html.querySelector("#x-gallery-resurrect-language-row").style.display = "none";
	}

	// Tags
	const tagTable = html.querySelector("#x-gallery-resurrect-tags");
	for (const namespace in info.tags) {
		if (!Object.prototype.hasOwnProperty.call(info.tags, namespace)) { continue; }
		const row = document.createElement("tr");

		let td = document.createElement("td");
		td.className = "tc";
		td.textContent = `${namespace}:`;
		row.appendChild(td);

		td = document.createElement("td");
		row.appendChild(td);

		for (const tag of info.tags[namespace]) {
			const div = document.createElement("div");
			div.className = "gt";
			const a = document.createElement("a");
			a.href = `/tag/${tag}`;
			a.textContent = tag;
			div.appendChild(a);
			td.appendChild(div);
		}

		tagTable.appendChild(row);
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
	const galleryRightSidebar = require("../api/gallery-right-sidebar");
	const link = galleryRightSidebar.createLink("Metadata JSON", 0).link;
	if (link === null) { return; }

	link.setAttribute("download", "info.json");
	link.href = createDownloadDataUrl(info);
}

function createDownloadDataUrl(info) {
	if (info === null) { return null; }

	const infoString = JSON.stringify(toCommonJson(info), null, "  ");
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

},{"../api/gallery-info/common-json":2,"../api/gallery-info/fetch":3,"../api/gallery-info/utils":6,"../api/gallery-right-sidebar":7,"../api/page-type":8,"../api/popups":9,"../api/style":10,"../api/urls":12,"../javascript":21,"../ready":22,"../style":23,"./gallery.html":14,"./navigation-bar-dark.html":16,"./navigation-bar-light.html":17,"./style.css":18}],16:[function(require,module,exports){
module.exports = "<div id=\"nb\" class=\"nosel x-resurrected\">\r\n\t<div><a class=\"nbw\" href=\"/\">Front<span class=\"nbw1\"> Page</span></a></div>\r\n\t<div><a href=\"/watched\">Watched</a></div>\r\n\t<div><a href=\"/popular\">Popular</a></div>\r\n\t<div><a href=\"/torrents.php\">Torrents</a></div>\r\n\t<div><a href=\"/favorites.php\">Fav<span class=\"nbw1\">orite</span>s</a></div>\r\n\t<div><a href=\"/uconfig.php\">Settings</a></div>\r\n\t<div><a href=\"/upload/manage.php\"><span class=\"nbw2\">My </span>Uploads</a></div>\r\n\t<div><a href=\"/mytags\">My Tags</a></div>\r\n</div>";
},{}],17:[function(require,module,exports){
module.exports = "<div id=\"nb\" class=\"nosel x-resurrected\">\r\n\t<div><a class=\"nbw\" href=\"/\">Front<span class=\"nbw1\"> Page</span></a></div>\r\n\t<div><a href=\"/watched\">Watched</a></div>\r\n\t<div><a href=\"/popular\">Popular</a></div>\r\n\t<div><a href=\"/torrents.php\">Torrents</a></div>\r\n\t<div><a href=\"/favorites.php\">Fav<span class=\"nbw1\">orite</span>s</a></div>\r\n\t<div><a href=\"/home.php\"><span class=\"nbw2\">My </span>Home</a></div>\r\n\t<div><a href=\"https://upload.e-hentai.org/manage.php\"><span class=\"nbw2\">My </span>Uploads</a></div>\r\n\t<div><a href=\"/toplist.php\">Toplists</a></div>\r\n\t<div><a href=\"/bounty.php\">Bounties</a></div>\r\n\t<div><a href=\"/news.php\">News</a></div>\r\n\t<div><a href=\"https://forums.e-hentai.org/\">Forums</a></div>\r\n\t<div><a href=\"https://ehwiki.org/\">Wiki</a></div>\r\n\t<div><a href=\"https://hentaiverse.org/\" onclick=\"popUp('https://hentaiverse.org/',1250,720); return false\">H<span class=\"nbw1\">entai</span>V<span class=\"nbw1\">erse</span></a></div>\r\n</div>";
},{}],18:[function(require,module,exports){
module.exports = "body>:not(.x-resurrected):not(.x-popup-menu){display:none!important}#x-gallery-resurrect-category{text-decoration:none}.x-gallery-resurrect-hidden-info{display:none}";
},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
"use strict";


function getStringFromHtmlEscapedString(value) {
	if (value === null) { return null; }

  const doc = new DOMParser().parseFromString(value, "text/html");
  return doc.documentElement.textContent;
}


module.exports = {
	getStringFromHtmlEscapedString
};

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{"./api/style":10}]},{},[15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2NvbW1vbi1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZmV0Y2guanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby9nZXQtZnJvbS1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdHlwZXMuanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby91dGlscy5qcyIsInNyYy9hcGkvZ2FsbGVyeS1yaWdodC1zaWRlYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BvcHVwcy5qcyIsInNyYy9hcGkvc3R5bGUuanMiLCJzcmMvYXBpL3N0eWxlL2dhbGxlcnktcmlnaHQtc2lkZWJhci5jc3MiLCJzcmMvYXBpL3VybHMuanMiLCJzcmMvZmV0Y2guanMiLCJzcmMvZ2FsbGVyeS1yZXN1cnJlY3QvZ2FsbGVyeS5odG1sIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L21haW4uanMiLCJzcmMvZ2FsbGVyeS1yZXN1cnJlY3QvbmF2aWdhdGlvbi1iYXItZGFyay5odG1sIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L25hdmlnYXRpb24tYmFyLWxpZ2h0Lmh0bWwiLCJzcmMvZ2FsbGVyeS1yZXN1cnJlY3Qvc3R5bGUuY3NzIiwic3JjL2dtLmpzIiwic3JjL2h0bWwtdXRpbHMuanMiLCJzcmMvamF2YXNjcmlwdC5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1UUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5SWRlbnRpZmllciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIHRva2VuKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRva2VuID0gdG9rZW47XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlRnJvbVVybCh1cmwpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gL14uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT8kLy5leGVjKHVybCk7XHJcblx0XHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBwYXRoID0gbWF0Y2hbMV0ucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgXCJcIikucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xyXG5cdFx0aWYgKHBhdGhbMF0gIT09IFwiZ1wiIHx8IHBhdGgubGVuZ3RoIDwgMykgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IGlkID0gcGFyc2VJbnQocGF0aFsxXSwgMTApO1xyXG5cdFx0cmV0dXJuIChOdW1iZXIuaXNOYU4oaWQpID8gbnVsbCA6IG5ldyBHYWxsZXJ5SWRlbnRpZmllcihpZCwgcGF0aFsyXSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgR2FsbGVyeUlkZW50aWZpZXIgPSByZXF1aXJlKFwiLi4vZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvU3RyaW5nT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRyZXR1cm4gdHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b051bWJlck9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaWRlbnRpZmllciwgZGVmYXVsdFZhbHVlKSB7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwgfHwgdHlwZW9mKGlkZW50aWZpZXIpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdpZDogaWRlbnRpZmllci5pZCxcclxuXHRcdHRva2VuOiBpZGVudGlmaWVyLnRva2VuXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihuZXdlclZlcnNpb25zKSB7XHJcblx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0aWYgKEFycmF5LmlzQXJyYXkobmV3ZXJWZXJzaW9ucykpIHtcclxuXHRcdGZvciAoY29uc3QgbmV3ZXJWZXJzaW9uIG9mIG5ld2VyVmVyc2lvbnMpIHtcclxuXHRcdFx0cmVzdWx0LnB1c2goe1xyXG5cdFx0XHRcdGdhbGxlcnk6IChcclxuXHRcdFx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ld2VyVmVyc2lvbi5pZGVudGlmaWVyLCBudWxsKSB8fFxyXG5cdFx0XHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLCBudWxsKSksXHJcblx0XHRcdFx0bmFtZTogdG9TdHJpbmdPckRlZmF1bHQobmV3ZXJWZXJzaW9uLm5hbWUpLFxyXG5cdFx0XHRcdGRhdGVfdXBsb2FkZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KG5ld2VyVmVyc2lvbi5kYXRlVXBsb2FkZWQpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YWdzVG9Db21tb25Kc29uKHRhZ3MpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRpZiAodGFncyAhPT0gbnVsbCAmJiB0eXBlb2YodGFncykgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodGFncykpIHtcclxuXHRcdGZvciAoY29uc3QgbmFtZXNwYWNlIGluIHRhZ3MpIHtcclxuXHRcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFncywgbmFtZXNwYWNlKSkgeyBjb250aW51ZTsgfVxyXG5cdFx0XHRjb25zdCB0YWdMaXN0ID0gdGFnc1tuYW1lc3BhY2VdO1xyXG5cdFx0XHRyZXN1bHRbbmFtZXNwYWNlXSA9IFsuLi50YWdMaXN0XTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25GYXZvcml0ZUNhdGVnb3J5KGluZm8pIHtcclxuXHRpZiAoaW5mby5mYXZvcml0ZUNhdGVnb3J5ID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblx0cmV0dXJuIHtcclxuXHRcdGlkOiB0b051bWJlck9yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkuaW5kZXgsIDApLFxyXG5cdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS50aXRsZSwgXCJcIilcclxuXHR9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25GdWxsR2FsbGVyeUluZm9Kc29uKGluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2FsbGVyeTogKFxyXG5cdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpbmZvLmlkZW50aWZpZXIsIG51bGwpIHx8XHJcblx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ldyBHYWxsZXJ5SWRlbnRpZmllcigwLCBcIlwiKSwgbnVsbCkpLFxyXG5cdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGUsIFwiXCIpLFxyXG5cdFx0dGl0bGVfb3JpZ2luYWw6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGVPcmlnaW5hbCwgXCJcIiksXHJcblx0XHRkYXRlX3VwbG9hZGVkOiB0b051bWJlck9yRGVmYXVsdChpbmZvLmRhdGVVcGxvYWRlZCwgMCksXHJcblx0XHRjYXRlZ29yeTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5jYXRlZ29yeSwgXCJcIiksXHJcblx0XHR1cGxvYWRlcjogdG9TdHJpbmdPckRlZmF1bHQoaW5mby51cGxvYWRlciwgXCJcIiksXHJcblx0XHRyYXRpbmc6IHtcclxuXHRcdFx0YXZlcmFnZTogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5yYXRpbmdBdmVyYWdlLCAwKSxcclxuXHRcdFx0Y291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8ucmF0aW5nQ291bnQsIDApLFxyXG5cdFx0fSxcclxuXHRcdGZhdm9yaXRlczoge1xyXG5cdFx0XHRjYXRlZ29yeTogKGluZm8uZmF2b3JpdGVDYXRlZ29yeSAhPT0gbnVsbCA/IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS5pbmRleCwgLTEpIDogLTEpLFxyXG5cdFx0XHRjYXRlZ29yeV90aXRsZTogKGluZm8uZmF2b3JpdGVDYXRlZ29yeSAhPT0gbnVsbCA/IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS50aXRsZSwgXCJcIikgOiBcIlwiKSxcclxuXHRcdFx0Y291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDb3VudCwgMClcclxuXHRcdH0sXHJcblx0XHRwYXJlbnQ6IGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKGluZm8ucGFyZW50LCBudWxsKSxcclxuXHRcdG5ld2VyX3ZlcnNpb25zOiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKGluZm8ubmV3ZXJWZXJzaW9ucyksXHJcblx0XHR0aHVtYm5haWw6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8ubWFpblRodW1ibmFpbFVybCwgXCJcIiksXHJcblx0XHR0aHVtYm5haWxfc2l6ZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aHVtYm5haWxTaXplLCBcIlwiKSxcclxuXHRcdHRodW1ibmFpbF9yb3dzOiB0b051bWJlck9yRGVmYXVsdChpbmZvLnRodW1ibmFpbFJvd3MsIDApLFxyXG5cdFx0aW1hZ2VfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmlsZUNvdW50LCAwKSxcclxuXHRcdGltYWdlc19yZXNpemVkOiBmYWxzZSxcclxuXHRcdHRvdGFsX2ZpbGVfc2l6ZV9hcHByb3g6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplLCAwKSxcclxuXHRcdHZpc2libGU6IChpbmZvLnZpc2libGUgPT09IHRydWUpLFxyXG5cdFx0dmlzaWJsZV9yZWFzb246IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udmlzaWJsZVJlYXNvbiwgXCJcIiksXHJcblx0XHRsYW5ndWFnZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5sYW5ndWFnZSwgXCJcIiksXHJcblx0XHR0cmFuc2xhdGVkOiAoaW5mby50cmFuc2xhdGVkID09PSB0cnVlKSxcclxuXHRcdHRhZ3M6IHRhZ3NUb0NvbW1vbkpzb24oaW5mby50YWdzKSxcclxuXHRcdC8vIE5ld1xyXG5cdFx0dGFnc19oYXZlX25hbWVzcGFjZTogKGluZm8udGFnc0hhdmVOYW1lc3BhY2UgPT09IHRydWUpLFxyXG5cdFx0dG9ycmVudF9jb3VudDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby50b3JyZW50Q291bnQsIDApLFxyXG5cdFx0YXJjaGl2ZXJfa2V5OiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmFyY2hpdmVyS2V5LCBudWxsKSxcclxuXHRcdHNvdXJjZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5zb3VyY2UsIG51bGwpLFxyXG5cdFx0c291cmNlX3NpdGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uc291cmNlU2l0ZSwgbnVsbCksXHJcblx0XHRkYXRlX2dlbmVyYXRlZDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5kYXRlR2VuZXJhdGVkLCAwKVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uR2FsbGVyeUluZm9Kc29uKGluZm8pIHtcclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUodG9OdW1iZXJPckRlZmF1bHQoaW5mby5kYXRlVXBsb2FkZWQsIDApKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGUsIFwiXCIpLFxyXG5cdFx0dGl0bGVfb3JpZ2luYWw6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGVPcmlnaW5hbCwgXCJcIiksXHJcblxyXG5cdFx0Y2F0ZWdvcnk6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uY2F0ZWdvcnksIFwiXCIpLFxyXG5cdFx0dGFnczogdGFnc1RvQ29tbW9uSnNvbihpbmZvLnRhZ3MpLFxyXG5cclxuXHRcdGxhbmd1YWdlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmxhbmd1YWdlLCBcIlwiKSxcclxuXHRcdHRyYW5zbGF0ZWQ6ICEhaW5mby50cmFuc2xhdGVkLFxyXG5cclxuXHRcdGZhdm9yaXRlX2NhdGVnb3J5OiB0b0NvbW1vbkZhdm9yaXRlQ2F0ZWdvcnkoaW5mbyksXHJcblxyXG5cdFx0dXBsb2FkX2RhdGU6IFtcclxuXHRcdFx0ZGF0ZS5nZXRVVENGdWxsWWVhcigpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ01vbnRoKCkgKyAxLFxyXG5cdFx0XHRkYXRlLmdldFVUQ0RhdGUoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENIb3VycygpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ01pbnV0ZXMoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENTZWNvbmRzKClcclxuXHRcdF0sXHJcblxyXG5cdFx0c291cmNlOiB7XHJcblx0XHRcdHNpdGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uc291cmNlU2l0ZSwgXCJcIiksXHJcblx0XHRcdGdpZDogKGluZm8uaWRlbnRpZmllciAhPT0gbnVsbCA/IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uaWRlbnRpZmllci5pZCwgMCkgOiAwKSxcclxuXHRcdFx0dG9rZW46IChpbmZvLmlkZW50aWZpZXIgIT09IG51bGwgPyB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmlkZW50aWZpZXIudG9rZW4sIDApIDogMCksXHJcblx0XHRcdHBhcmVudF9nYWxsZXJ5OiBnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpbmZvLnBhcmVudCwgbnVsbCksXHJcblx0XHRcdG5ld2VyX3ZlcnNpb25zOiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKGluZm8ubmV3ZXJWZXJzaW9ucylcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkpzb24oaW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5X2luZm86IHRvQ29tbW9uR2FsbGVyeUluZm9Kc29uKGluZm8pLFxyXG5cdFx0Z2FsbGVyeV9pbmZvX2Z1bGw6IHRvQ29tbW9uRnVsbEdhbGxlcnlJbmZvSnNvbihpbmZvKVxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHR0b0NvbW1vbkpzb25cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoXCIuLi8uLi9mZXRjaFwiKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcbmNvbnN0IGdldEZyb21Kc29uID0gcmVxdWlyZShcIi4vZ2V0LWZyb20tanNvblwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBcnJheUNvdW50KGFycmF5LCBjb3VudCwgZmlsbCkge1xyXG5cdGNvbnN0IGlpID0gYXJyYXkubGVuZ3RoO1xyXG5cdGlmIChpaSAhPT0gY291bnQpIHtcclxuXHRcdGlmIChpaSA+IGNvdW50KSB7XHJcblx0XHRcdGFycmF5LnNwbGljZShjb3VudCwgaWkgLSBjb3VudCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gaWk7IGkgPCBjb3VudDsgKytpKSB7XHJcblx0XHRcdFx0YXJyYXkucHVzaChmaWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0R2FsbGVyeUluZm8oaWRlbnRpZmllcnMpIHtcclxuXHRjb25zdCBnaWRMaXN0ID0gW107XHJcblx0Y29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoaWRlbnRpZmllcnMpO1xyXG5cdGlmIChpc0FycmF5KSB7XHJcblx0XHRmb3IgKGNvbnN0IGlkZW50aWZpZXIgb2YgaWRlbnRpZmllcnMpIHtcclxuXHRcdFx0Z2lkTGlzdC5wdXNoKFsgaWRlbnRpZmllci5pZCwgaWRlbnRpZmllci50b2tlbiBdKTtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0Z2lkTGlzdC5wdXNoKFsgaWRlbnRpZmllcnMuaWQsIGlkZW50aWZpZXJzLnRva2VuIF0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdG1ldGhvZDogXCJnZGF0YVwiLFxyXG5cdFx0Z2lkbGlzdDogZ2lkTGlzdCxcclxuXHRcdG5hbWVzcGFjZTogMVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNvdXJjZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdGNvbnN0IGZldGNoUmVzdWx0ID0gYXdhaXQgZmV0Y2gucG9zdCh7XHJcblx0XHRnbTogdHJ1ZSxcclxuXHRcdHVybDogXCIvYXBpLnBocFwiLFxyXG5cdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgcmVzdWx0SnNvbiA9IEpTT04ucGFyc2UoZmV0Y2hSZXN1bHQucmVzcG9uc2VUZXh0KTtcclxuXHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGZvciAoY29uc3QganNvbiBvZiByZXN1bHRKc29uLmdtZXRhZGF0YSkge1xyXG5cdFx0aWYgKGpzb24uZXJyb3IpIHtcclxuXHRcdFx0cmVzdWx0cy5wdXNoKG51bGwpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgaW5mbyA9IGdldEZyb21Kc29uKGpzb24sIHNvdXJjZVVybCk7XHJcblx0XHRcdHJlc3VsdHMucHVzaChpbmZvKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldEFycmF5Q291bnQocmVzdWx0cywgZ2lkTGlzdC5sZW5ndGgsIG51bGwpO1xyXG5cclxuXHRyZXR1cm4gaXNBcnJheSA/IHJlc3VsdHMgOiByZXN1bHRzWzBdO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0OiBnZXRHYWxsZXJ5SW5mb1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbmNvbnN0IGh0bWxVdGlscyA9IHJlcXVpcmUoXCIuLi8uLi9odG1sLXV0aWxzXCIpO1xyXG5cclxuY29uc3QgZGVmYXVsdE5hbWVzcGFjZSA9IFwibWlzY1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEpzb25OdW1iZXIodmFsdWUpIHtcclxuXHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gXCJudW1iZXJcIikge1xyXG5cdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRcdHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcblx0fVxyXG5cdHJldHVybiAoTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEpzb25TdHJpbmcodmFsdWUpIHtcclxuXHRpZiAodHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIikgeyByZXR1cm4gdmFsdWU7IH1cclxuXHRpZiAodHlwZW9mKHZhbHVlKSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gdmFsdWU7IH1cclxuXHRyZXR1cm4gYCR7dmFsdWV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFnQW5kTmFtZXNwYWNlKHRhZykge1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXig/OihbXjpdKik6KT8oW1xcd1xcV10qKSQvO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHRhZyk7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCkgP1xyXG5cdFx0KHsgdGFnOiBtYXRjaFsyXSwgbmFtZXNwYWNlOiBtYXRjaFsxXSB8fCBkZWZhdWx0TmFtZXNwYWNlIH0pIDpcclxuXHRcdCh7IHRhZzogdGFnLCBuYW1lc3BhY2U6IGRlZmF1bHROYW1lc3BhY2UgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvUHJvcGVyQ2FzZSh0ZXh0KSB7XHJcblx0cmV0dXJuIHRleHQucmVwbGFjZSgvKF58XFxXKShcXHcpL2csIChtMCwgbTEsIG0yKSA9PiBgJHttMX0ke20yLnRvVXBwZXJDYXNlKCl9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSnNvbihpbmZvLCBqc29uKSB7XHJcblx0aW5mby50aXRsZSA9IGh0bWxVdGlscy5nZXRTdHJpbmdGcm9tSHRtbEVzY2FwZWRTdHJpbmcoZ2V0SnNvblN0cmluZyhqc29uLnRpdGxlKSk7XHJcblx0aW5mby50aXRsZU9yaWdpbmFsID0gaHRtbFV0aWxzLmdldFN0cmluZ0Zyb21IdG1sRXNjYXBlZFN0cmluZyhnZXRKc29uU3RyaW5nKGpzb24udGl0bGVfanBuKSk7XHJcblx0aW5mby5tYWluVGh1bWJuYWlsVXJsID0gZ2V0SnNvblN0cmluZyhqc29uLnRodW1iKTtcclxuXHRjb25zdCBjYXRlZ29yeSA9IGdldEpzb25TdHJpbmcoanNvbi5jYXRlZ29yeSk7XHJcblx0aW5mby5jYXRlZ29yeSA9IChjYXRlZ29yeSAhPT0gbnVsbCA/IGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgOiBudWxsKTtcclxuXHRpbmZvLnVwbG9hZGVyID0gZ2V0SnNvblN0cmluZyhqc29uLnVwbG9hZGVyKTtcclxuXHJcblx0aW5mby5yYXRpbmdBdmVyYWdlID0gZ2V0SnNvbk51bWJlcihqc29uLnJhdGluZyk7XHJcblxyXG5cdGNvbnN0IGRhdGVVcGxvYWRlZCA9IGdldEpzb25OdW1iZXIoanNvbi5wb3N0ZWQpO1xyXG5cdGluZm8uZGF0ZVVwbG9hZGVkID0gKGRhdGVVcGxvYWRlZCAhPT0gbnVsbCA/IG5ldyBEYXRlKGRhdGVVcGxvYWRlZCAqIDEwMDApLmdldFRpbWUoKSA6IG51bGwpO1xyXG5cclxuXHRpbmZvLnZpc2libGUgPSAhanNvbi5leHB1bmdlZDtcclxuXHJcblx0aW5mby5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBnZXRKc29uTnVtYmVyKGpzb24uZmlsZXNpemUpO1xyXG5cclxuXHRpbmZvLmZpbGVDb3VudCA9IGdldEpzb25OdW1iZXIoanNvbi5maWxlY291bnQpO1xyXG5cclxuXHRpbmZvLmFyY2hpdmVyS2V5ID0gZ2V0SnNvblN0cmluZyhqc29uLmFyY2hpdmVyX2tleSk7XHJcblx0aW5mby50b3JyZW50Q291bnQgPSBnZXRKc29uTnVtYmVyKGpzb24udG9ycmVudGNvdW50KTtcclxuXHJcblx0Y29uc3QgdGFncyA9IHt9O1xyXG5cdGlmIChBcnJheS5pc0FycmF5KGpzb24udGFncykpIHtcclxuXHRcdGZvciAoY29uc3QganNvblRhZyBvZiBqc29uLnRhZ3MpIHtcclxuXHRcdFx0Y29uc3Qgc3RyaW5nVGFnID0gZ2V0SnNvblN0cmluZyhqc29uVGFnKTtcclxuXHRcdFx0aWYgKHN0cmluZ1RhZyA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdFx0Y29uc3Qge3RhZywgbmFtZXNwYWNlfSA9IGdldFRhZ0FuZE5hbWVzcGFjZShzdHJpbmdUYWcpO1xyXG5cclxuXHRcdFx0bGV0IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHRcdGlmICh0YWdzLmhhc093blByb3BlcnR5KG5hbWVzcGFjZSkpIHtcclxuXHRcdFx0XHRuYW1lc3BhY2VUYWdzID0gdGFnc1tuYW1lc3BhY2VdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG5hbWVzcGFjZVRhZ3MgPSBbXTtcclxuXHRcdFx0XHR0YWdzW25hbWVzcGFjZV0gPSBuYW1lc3BhY2VUYWdzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuYW1lc3BhY2VUYWdzLnB1c2godGFnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGluZm8udGFncyA9IHRhZ3M7XHJcblx0aW5mby50YWdzSGF2ZU5hbWVzcGFjZSA9IHRydWU7XHJcblxyXG5cdC8vIFRhZy1iYXNlZCBpbmZvXHJcblx0aWYgKHRhZ3MuaGFzT3duUHJvcGVydHkoXCJsYW5ndWFnZVwiKSkge1xyXG5cdFx0Y29uc3QgbGFuZ3VhZ2VUYWdzID0gdGFncy5sYW5ndWFnZTtcclxuXHRcdGNvbnN0IHRyYW5zbGF0ZWRJbmRleCA9IGxhbmd1YWdlVGFncy5pbmRleE9mKFwidHJhbnNsYXRlZFwiKTtcclxuXHRcdGluZm8udHJhbnNsYXRlZCA9ICh0cmFuc2xhdGVkSW5kZXggPj0gMCk7XHJcblx0XHRpZiAodHJhbnNsYXRlZEluZGV4ICE9PSAwKSB7XHJcblx0XHRcdGluZm8ubGFuZ3VhZ2UgPSB0b1Byb3BlckNhc2UobGFuZ3VhZ2VUYWdzWzBdKTtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0aW5mby5sYW5ndWFnZSA9IFwiSmFwYW5lc2VcIjtcclxuXHRcdGluZm8udHJhbnNsYXRlZCA9IGZhbHNlO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RnJvbUpzb24oanNvbiwgdXJsKSB7XHJcblx0aWYgKGpzb24gPT09IG51bGwgfHwgdHlwZW9mKGpzb24pICE9PSBcIm9iamVjdFwiKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGlkID0gZ2V0SnNvbk51bWJlcihqc29uLmdpZCk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRKc29uU3RyaW5nKGpzb24udG9rZW4pO1xyXG5cdGlmIChpZCA9PT0gbnVsbCB8fCB0b2tlbiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvID0gbmV3IHR5cGVzLkdhbGxlcnlJbmZvKCk7XHJcblx0aW5mby5pZGVudGlmaWVyID0gbmV3IHR5cGVzLkdhbGxlcnlJZGVudGlmaWVyKGlkLCB0b2tlbik7XHJcblx0aW5mby5jdXJyZW50UGFnZSA9IG51bGw7XHJcblx0aW5mby5zb3VyY2UgPSBcImpzb25cIjtcclxuXHRwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUpzb24oaW5mbywganNvbik7XHJcblx0aW5mby5zb3VyY2VTaXRlID0gdXRpbHMuZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKTtcclxuXHRpbmZvLmRhdGVHZW5lcmF0ZWQgPSBEYXRlLm5vdygpO1xyXG5cdHJldHVybiBpbmZvO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXRGcm9tSnNvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5SWRlbnRpZmllciA9IHJlcXVpcmUoXCIuLi9nYWxsZXJ5LWlkZW50aWZpZXJcIikuR2FsbGVyeUlkZW50aWZpZXI7XHJcblxyXG5cclxuY2xhc3MgR2FsbGVyeUluZm8ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pZGVudGlmaWVyID0gbnVsbDtcclxuXHRcdHRoaXMudGl0bGUgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZU9yaWdpbmFsID0gbnVsbDtcclxuXHRcdHRoaXMuZGF0ZVVwbG9hZGVkID0gbnVsbDtcclxuXHRcdHRoaXMuY2F0ZWdvcnkgPSBudWxsO1xyXG5cdFx0dGhpcy51cGxvYWRlciA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5yYXRpbmdDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkgPSBudWxsO1xyXG5cdFx0dGhpcy5mYXZvcml0ZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMubWFpblRodW1ibmFpbFVybCA9IG51bGw7XHJcblx0XHR0aGlzLnRodW1ibmFpbFNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy50aHVtYm5haWxSb3dzID0gbnVsbDtcclxuXHRcdHRoaXMuZmlsZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblx0XHR0aGlzLnZpc2libGVSZWFzb24gPSBudWxsO1xyXG5cdFx0dGhpcy5sYW5ndWFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcmNoaXZlcktleSA9IG51bGw7XHJcblx0XHR0aGlzLnRvcnJlbnRDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3MgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzSGF2ZU5hbWVzcGFjZSA9IG51bGw7XHJcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHRcdHRoaXMubmV3ZXJWZXJzaW9ucyA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZSA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZVNpdGUgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlR2VuZXJhdGVkID0gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRHYWxsZXJ5SWRlbnRpZmllcixcclxuXHRHYWxsZXJ5SW5mb1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcblxyXG5jb25zdCBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMgPSBbIFwiYlwiLCBcImtiXCIsIFwibWJcIiwgXCJnYlwiIF07XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVBhZ2VGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IG1hdGNoID0gL1xcPyg/Oih8W1xcd1xcV10qPyYpcD0oW1xcK1xcLV0/XFxkKykpPy8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHRpZiAoIU51bWJlci5pc05hTihwYWdlKSkgeyByZXR1cm4gcGFnZTsgfVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBpZGVudGlmaWVyID0gdHlwZXMuR2FsbGVyeUlkZW50aWZpZXIuY3JlYXRlRnJvbVVybCh1cmwpO1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhZ2UgPSBnZXRHYWxsZXJ5UGFnZUZyb21VcmwodXJsKTtcclxuXHRyZXR1cm4geyBpZGVudGlmaWVyLCBwYWdlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJ5dGVzU2l6ZUZyb21MYWJlbChudW1iZXIsIGxhYmVsKSB7XHJcblx0bGV0IGkgPSBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMuaW5kZXhPZihsYWJlbC50b0xvd2VyQ2FzZSgpKTtcclxuXHRpZiAoaSA8IDApIHsgaSA9IDA7IH1cclxuXHRyZXR1cm4gTWF0aC5mbG9vcihwYXJzZUZsb2F0KG51bWJlcikgKiBNYXRoLnBvdygxMDI0LCBpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNvdXJjZVNpdGVGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXig/Oig/OlthLXpdW2EtejAtOVxcK1xcLVxcLl0qOlxcLyp8XFwvezIsfSkoW15cXC9dKikpPyhcXC8/W1xcd1xcV10qKSQvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh1cmwpO1xyXG5cclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0pIHtcclxuXHRcdGNvbnN0IGhvc3QgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKGhvc3QuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDApIHsgcmV0dXJuIFwiZXhoZW50YWlcIjsgfVxyXG5cdFx0aWYgKGhvc3QuaW5kZXhPZihcImUtaGVudGFpXCIpID49IDApIHsgcmV0dXJuIFwiZS1oZW50YWlcIjsgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsLFxyXG5cdGdldEJ5dGVzU2l6ZUZyb21MYWJlbCxcclxuXHRnZXRTb3VyY2VTaXRlRnJvbVVybFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vc3R5bGVcIik7XHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlc2hlZXQoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyXCI7XHJcblx0aWYgKHN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS9nYWxsZXJ5LXJpZ2h0LXNpZGViYXIuY3NzXCIpO1xyXG5cdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdyb3VwQ29udGFpbmVyKHBhcmVudCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1jb250YWluZXJcIjtcclxuXHRsZXQgbm9kZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKGAuJHtpZH1gKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkge1xyXG5cdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRub2RlLmNsYXNzTmFtZSA9IGBnMiBnc3AgJHtpZH1gO1xyXG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xyXG5cclxuXHRcdGNvbnN0IHAgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuXHRcdGlmIChwICE9PSBudWxsKSB7XHJcblx0XHRcdHAuY2xhc3NMaXN0LmFkZChcIngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyLWNvbnRhaW5zLWNvbnRhaW5lclwiKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG5vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmsobGFiZWwsIG9yZGVyKSB7XHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZDVcIik7XHJcblx0aWYgKHBhcmVudCA9PT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIHsgbGluazogbnVsbCwgbGlua0NvbnRhaW5lcjogbnVsbCB9O1xyXG5cdH1cclxuXHJcblx0Ly8gU3R5bGVcclxuXHRpbnNlcnRTdHlsZXNoZWV0KCk7XHJcblxyXG5cdC8vIENvbnRhaW5lclxyXG5cdGNvbnN0IGxpbmtHcm91cCA9IGdldEdyb3VwQ29udGFpbmVyKHBhcmVudCk7XHJcblx0Y29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGlua0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyLWVudHJ5XCI7XHJcblx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTihvcmRlcikpIHtcclxuXHRcdGxpbmtDb250YWluZXIuc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRpbWcuc3JjID0gYXBpU3R5bGUuZ2V0QXJyb3dJY29uVXJsKCk7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiKSk7XHJcblxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRsaW5rLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcblx0bGlua0dyb3VwLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xyXG5cclxuXHRyZXR1cm4geyBsaW5rLCBsaW5rQ29udGFpbmVyIH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZHxnYWxsZXJ5XFxzK2lzXFxzK3VuYXZhaWxhYmxlXFxzK2R1ZVxccyt0b1xccythXFxzK2NvcHlyaWdodFxccytjbGFpbS9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHNob3dPbkNsaWNrKHNlbGVjdG9yLCB1cmwsIHNpemUpIHtcclxuXHQvKiBnbG9iYWxzIHBvcFVwICovXHJcblx0bGV0IHdpZHRoID0gNjc1O1xyXG5cdGxldCBoZWlnaHQgPSA0MTU7XHJcblx0aWYgKHNpemUgIT09IG51bGwgJiYgdHlwZW9mKHNpemUpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQoe3dpZHRoLCBoZWlnaHR9ID0gc2l6ZSk7XHJcblx0fVxyXG5cclxuXHRyZXF1aXJlKFwiLi4vamF2YXNjcmlwdFwiKS5pbmplY3QoKHNlbGVjdG9yLCB1cmwsIHdpZHRoLCBoZWlnaHQpID0+IHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmV0dXJuIHBvcFVwKHVybCwgd2lkdGgsIGhlaWdodCk7XHJcblx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdH0sIFsgc2VsZWN0b3IsIHVybCwgd2lkdGgsIGhlaWdodCBdKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHNob3dPbkNsaWNrLFxyXG5cdHNpemVzOiB7XHJcblx0XHRmYXZvcml0ZXM6IHsgd2lkdGg6IDY3NSwgaGVpZ2h0OiA0MTUgfVxyXG5cdH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpc0RhcmsoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCB8fFxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIngtZm9yY2UtZGFya1wiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvY3VtZW50RGFya0ZsYWcoKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnJvd0ljb25VcmwoKSB7XHJcblx0cmV0dXJuIChpc0RhcmsoKSA/IFwiaHR0cHM6Ly9leGhlbnRhaS5vcmcvaW1nL21yLmdpZlwiIDogXCJodHRwczovL2VoZ3Qub3JnL2cvbXIuZ2lmXCIpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNEYXJrLFxyXG5cdHNldERvY3VtZW50RGFya0ZsYWcsXHJcblx0Z2V0QXJyb3dJY29uVXJsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItY29udGFpbmVye21hcmdpbi10b3A6LTI1cHg7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS54LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1lbnRyeXttYXJnaW4tdG9wOjI1cHh9ZGl2I2dyaWdodC54LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1jb250YWlucy1jb250YWluZXJ7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdXBsb2FkZXIodXNlcm5OYW1lKSB7XHJcblx0cmV0dXJuIGAvdXBsb2FkZXIvJHt1c2Vybk5hbWV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2F0ZWdvcnkoY2F0ZWdvcnkpIHtcclxuXHRyZXR1cm4gYC8ke2NhdGVnb3J5fWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhdm9yaXRlc1BvcHVwKGlkLCB0b2tlbikge1xyXG5cdHJldHVybiBgL2dhbGxlcnlwb3B1cHMucGhwP2dpZD0ke2lkfSZ0PSR7dG9rZW59JmFjdD1hZGRmYXZgO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0dXBsb2FkZXIsXHJcblx0Y2F0ZWdvcnksXHJcblx0ZmF2b3JpdGVzUG9wdXBcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBnbSA9IHJlcXVpcmUoXCIuL2dtXCIpO1xyXG5cclxuXHJcbmNsYXNzIEZldGNoRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgcmVzcG9uc2UpIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG5cdFx0dGhpcy5uYW1lID0gXCJGZXRjaEVycm9yXCI7XHJcblx0XHR0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXNwb25zZSB7XHJcblx0Y29uc3RydWN0b3IocmVhZHlTdGF0ZSwgcmVzcG9uc2VIZWFkZXJzLCByZXNwb25zZVRleHQsIHN0YXR1cywgc3RhdHVzVGV4dCkge1xyXG5cdFx0dGhpcy5yZWFkeVN0YXRlID0gcmVhZHlTdGF0ZTtcclxuXHRcdHRoaXMucmVzcG9uc2VIZWFkZXJzID0gcmVzcG9uc2VIZWFkZXJzO1xyXG5cdFx0dGhpcy5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHQ7XHJcblx0XHR0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuXHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBQcm9ncmVzc0V2ZW50IHtcclxuICBjb25zdHJ1Y3RvcihsZW5ndGhDb21wdXRhYmxlLCBsb2FkZWQsIHRvdGFsKSB7XHJcblx0XHR0aGlzLmxlbmd0aENvbXB1dGFibGUgPSBsZW5ndGhDb21wdXRhYmxlO1xyXG5cdFx0dGhpcy5sb2FkZWQgPSBsb2FkZWQ7XHJcblx0XHR0aGlzLnRvdGFsID0gdG90YWw7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UmVzcG9uc2VIZWFkZXJNYXAoYWxsSGVhZGVycykge1xyXG5cdGNvbnN0IHJlc3BvbnNlSGVhZGVycyA9IHt9O1xyXG5cclxuXHRjb25zdCByZSA9IC9cXHMqKC4qKVxccyo6XFxzKiguKilcXHMqLztcclxuXHRmb3IgKGNvbnN0IGxpbmUgb2YgYWxsSGVhZGVycy5yZXBsYWNlKC9cXHJcXG5cXHMqJC8sIFwiXCIpLnNwbGl0KFwiXFxyXFxuXCIpKSB7XHJcblx0XHRjb25zdCBtID0gcmUuZXhlYyhsaW5lKTtcclxuXHRcdGlmIChtICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1ttWzFdLnRvTG93ZXJDYXNlKCldID0gbVsyXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNwb25zZUhlYWRlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0eGhyLnJlYWR5U3RhdGUsXHJcblx0XHRnZXRSZXNwb25zZUhlYWRlck1hcCh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpLFxyXG5cdFx0eGhyLnJlc3BvbnNlVGV4dCxcclxuXHRcdHhoci5zdGF0dXMsXHJcblx0XHR4aHIuc3RhdHVzVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykge1xyXG5cdGNvbnN0IGRhdGEgPSBvcHRpb25zLmRhdGE7XHJcblx0Ly9jb25zdCBiaW5hcnkgPSBvcHRpb25zLmJpbmFyeTtcclxuXHRjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG5cdGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuXHRjb25zdCBvbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xyXG5cdGNvbnN0IG92ZXJyaWRlTWltZVR5cGUgPSBvcHRpb25zLm92ZXJyaWRlTWltZVR5cGU7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHR4aHIudGltZW91dCA9IHRpbWVvdXQ7XHJcblx0XHRpZiAodHlwZW9mKG92ZXJyaWRlTWltZVR5cGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKG92ZXJyaWRlTWltZVR5cGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGhlYWRlcnMgIT09IG51bGwgJiYgdHlwZW9mKGhlYWRlcnMpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdGZvciAoY29uc3QgayBpbiBoZWFkZXJzKSB7XHJcblx0XHRcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgaykpIHsgY29udGludWU7IH1cclxuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBoZWFkZXJzW2tdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiByZXNvbHZlKGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihgUmVxdWVzdCBlcnJvcjogJHt4aHIuc3RhdHVzVGV4dH0gKCR7eGhyLnN0YXR1c30pYCwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwidGltZW91dFwiLCAoKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJUaW1lb3V0IHJlYWNoZWRcIiwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZihvbnByb2dyZXNzKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGUpID0+IG9ucHJvZ3Jlc3MobmV3IFByb2dyZXNzRXZlbnQoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCkpKTtcclxuXHRcdH1cclxuXHJcblx0XHR4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcblx0XHR4aHIuc2VuZChkYXRhKTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRHbVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcblx0cmV0dXJuIG5ldyBSZXNwb25zZShcclxuXHRcdHJlc3BvbnNlLnJlYWR5U3RhdGUsXHJcblx0XHRnZXRSZXNwb25zZUhlYWRlck1hcChyZXNwb25zZS5yZXNwb25zZUhlYWRlcnMpLFxyXG5cdFx0cmVzcG9uc2UucmVzcG9uc2VUZXh0LFxyXG5cdFx0cmVzcG9uc2Uuc3RhdHVzLFxyXG5cdFx0cmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHRjb25zdCBiaW5hcnkgPSBvcHRpb25zLmJpbmFyeTtcclxuXHRjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG5cdGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuXHRjb25zdCBvbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xyXG5cdGNvbnN0IG92ZXJyaWRlTWltZVR5cGUgPSBvcHRpb25zLm92ZXJyaWRlTWltZVR5cGU7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCBkZXRhaWxzID0ge1xyXG5cdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXHJcblx0XHRcdG92ZXJyaWRlTWltZVR5cGU6IG92ZXJyaWRlTWltZVR5cGUsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdGJpbmFyeTogYmluYXJ5LFxyXG5cdFx0XHRzeW5jaHJvbm91czogZmFsc2UsXHJcblx0XHRcdHRpbWVvdXQ6IHRpbWVvdXRcclxuXHRcdH07XHJcblxyXG5cdFx0ZGV0YWlscy5vbmxvYWQgPSAoZSkgPT4gcmVzb2x2ZShjb252ZXJ0R21SZXNwb25zZShlKSk7XHJcblx0XHRkZXRhaWxzLm9uZXJyb3IgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke2Uuc3RhdHVzVGV4dH0gKCR7ZS5zdGF0dXN9KWAsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblx0XHRkZXRhaWxzLm9uYWJvcnQgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblx0XHRkZXRhaWxzLm9udGltZW91dCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJUaW1lb3V0IHJlYWNoZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0ZGV0YWlscy5vbnByb2dyZXNzID0gKGUpID0+IG9ucHJvZ3Jlc3MobmV3IFByb2dyZXNzRXZlbnQoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdtLnhtbEh0dHBSZXF1ZXN0KGRldGFpbHMpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaXNHbVN1cHBvcnRlZCh1c2VHbSkge1xyXG5cdHJldHVybiAodXNlR20gJiYgdHlwZW9mKGdtLnhtbEh0dHBSZXF1ZXN0KSA9PT0gXCJmdW5jdGlvblwiKSA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIkdFVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRyZXF1ZXN0OiByZXF1ZXN0LFxyXG5cdGdldDogZ2V0LFxyXG5cdHBvc3Q6IHBvc3QsXHJcblx0Z206IHtcclxuXHRcdHJlcXVlc3Q6IHJlcXVlc3RHbSxcclxuXHRcdGdldDogZ2V0R20sXHJcblx0XHRwb3N0OiBwb3N0R20sXHJcblx0fVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZ20geC1yZXN1cnJlY3RlZFxcXCI+XFxyXFxuXFx0PGRpdiBpZD1cXFwiZ2xlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgaWQ9XFxcImdkMVxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdj48aW1nIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LW1haW4tdGh1bWJuYWlsXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOjI1MHB4O21heC1oZWlnaHQ6Mzc1cHg7ZGlzcGxheTpibG9jaztcXFwiIC8+PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBpZD1cXFwiZ2QyXFxcIj5cXHJcXG5cXHRcXHQ8aDEgaWQ9XFxcImduXFxcIj48L2gxPlxcclxcblxcdFxcdDxoMSBpZD1cXFwiZ2pcXFwiPjwvaDE+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBpZD1cXFwiZ21pZFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBpZD1cXFwiZ2QzXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJnZGNcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJjc1xcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtY2F0ZWdvcnlcXFwiPjwvYT5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJnZG5cXFwiPjxhIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LXVwbG9hZGVyXFxcIj48L2E+PC9kaXY+XFxyXFxuXFx0XFx0XFx0PGRpdiBpZD1cXFwiZ2RkXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8dGFibGU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+UG9zdGVkOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQyXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1kYXRlLXVwbG9hZGVkXFxcIj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyIGNsYXNzPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWhpZGRlbi1pbmZvXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDFcXFwiPlBhcmVudDo8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MlxcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtcGFyZW50XFxcIj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+VmlzaWJsZTo8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MlxcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtdmlzaWJsZVxcXCI+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ciBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1sYW5ndWFnZS1yb3dcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+TGFuZ3VhZ2U6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWxhbmd1YWdlXFxcIj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+RmlsZSBTaXplOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQyXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1maWxlLXNpemVcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5MZW5ndGg6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWZpbGUtY291bnRcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHIgY2xhc3M9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtaGlkZGVuLWluZm9cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+RmF2b3JpdGVkOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQyXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1mYXZvcml0ZS1jb3VudFxcXCI+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdDwvdGFibGU+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PGRpdiBpZD1cXFwiZ2RyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8dGFibGU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBpZD1cXFwiZ3J0MVxcXCI+UmF0aW5nOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGlkPVxcXCJncnQyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGlkPVxcXCJyYXRpbmdfaW1hZ2VcXFwiIGNsYXNzPVxcXCJpclxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtcG9zaXRpb246LTgwcHggLTFweFxcXCI+PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgaWQ9XFxcImdydDNcXFwiPjxzcGFuIGlkPVxcXCJyYXRpbmdfY291bnRcXFwiPjwvc3Bhbj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBpZD1cXFwicmF0aW5nX2xhYmVsXFxcIiBjb2xzcGFuPVxcXCIzXFxcIj5BdmVyYWdlOiA8c3BhbiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1hdmVyYWdlLXJhdGluZ1xcXCI+PC9zcGFuPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHQ8L3RhYmxlPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcImdkZlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBzdHlsZT1cXFwiZmxvYXQ6bGVmdDtjdXJzb3I6cG9pbnRlclxcXCIgaWQ9XFxcImZhdlxcXCI+PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBzdHlsZT1cXFwiZmxvYXQ6bGVmdFxcXCI+Jm5ic3A7IDxhIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWZhdm9yaXRlcy1saW5rXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGltZyBjbGFzcz1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1tci1naWZcXFwiIC8+IEFkZCB0byBGYXZvcml0ZXM8L2E+PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiY1xcXCI+PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBpZD1cXFwiZ2Q0XFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJ0YWdsaXN0XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8dGFibGU+PHRib2R5IGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LXRhZ3NcXFwiPjwvdGJvZHk+PC90YWJsZT5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJnZDVcXFwiPlxcclxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJnMyBnc3BcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWdhbGxlcnktdW5hdmFpbGFibGVcXFwiPjxpbWcgY2xhc3M9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtbXItZ2lmXFxcIiAvPiA8YSB0aXRsZT1cXFwiU29tZSBpbmZvcm1hdGlvbiBoYXMgYmVlbiByZXN1cnJlY3RlZFxcXCI+R2FsbGVyeSB1bmF2YWlsYWJsZTwvYT48L3A+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiY1xcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwiYXNtXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJndGJcXFwiPlxcclxcblxcdDxwIGNsYXNzPVxcXCJncGNcXFwiPlNob3dpbmcgMCAtIDAgb2YgMCBpbWFnZXM8L3A+XFxyXFxuXFx0PHRhYmxlIGNsYXNzPVxcXCJwdHRcXFwiPjx0cj48dGQgY2xhc3M9XFxcInB0ZHNcXFwiPjxhIGhyZWY9XFxcIj9wPTBcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LXBhZ2UtdXJsXFxcIj48L2E+PC90ZD48L3RyPjwvdGFibGU+XFxyXFxuPC9kaXY+XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCByZWFkeSA9IHJlcXVpcmUoXCIuLi9yZWFkeVwiKTtcclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcbmNvbnN0IHBhZ2VUeXBlID0gcmVxdWlyZShcIi4uL2FwaS9wYWdlLXR5cGVcIik7XHJcbmNvbnN0IHRvQ29tbW9uSnNvbiA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1pbmZvL2NvbW1vbi1qc29uXCIpLnRvQ29tbW9uSnNvbjtcclxuXHJcbmNvbnN0IHJlSmF2YXNjcmlwdEdvdG9OZXh0ID0gL3NldFRpbWVvdXRcXHMqXFwoXFxzKihnb3RvbmV4dHxcImdvdG9uZXh0XFwoXFwpXCIpXFxzKixcXHMqXFxkK1xccypcXCkvO1xyXG5jb25zdCBmaWxlU2l6ZUxhYmVscyA9IFsgXCJCXCIsIFwiS0JcIiwgXCJNQlwiLCBcIkdCXCIgXTtcclxuXHJcbmNvbnN0IGNhdGVnb3J5SW5mb3MgPSB7XHJcblx0XCJkb3VqaW5zaGlcIjogeyBuYW1lOiBcIkRvdWppbnNoaVwiLCB1cmw6IFwiZG91amluc2hpXCIsIGNsYXNzOiBcImN0MlwiIH0sXHJcblx0XCJtYW5nYVwiOiB7IG5hbWU6IFwiTWFuZ2FcIiwgdXJsOiBcIm1hbmdhXCIsIGNsYXNzOiBcImN0M1wiIH0sXHJcblx0XCJhcnRpc3RjZ1wiOiB7IG5hbWU6IFwiQXJ0aXN0IENHXCIsIHVybDogXCJhcnRpc3RjZ1wiLCBjbGFzczogXCJjdDRcIiB9LFxyXG5cdFwiZ2FtZWNnXCI6IHsgbmFtZTogXCJHYW1lIENHXCIsIHVybDogXCJnYW1lY2dcIiwgY2xhc3M6IFwiY3Q1XCIgfSxcclxuXHRcIndlc3Rlcm5cIjogeyBuYW1lOiBcIldlc3Rlcm5cIiwgdXJsOiBcIndlc3Rlcm5cIiwgY2xhc3M6IFwiY3RhXCIgfSxcclxuXHRcIm5vbi1oXCI6IHsgbmFtZTogXCJOb24tSFwiLCB1cmw6IFwibm9uLWhcIiwgY2xhc3M6IFwiY3Q5XCIgfSxcclxuXHRcImltYWdlc2V0XCI6IHsgbmFtZTogXCJJbWFnZSBTZXRcIiwgdXJsOiBcImltYWdlc2V0XCIsIGNsYXNzOiBcImN0NlwiIH0sXHJcblx0XCJjb3NwbGF5XCI6IHsgbmFtZTogXCJDb3NwbGF5XCIsIHVybDogXCJjb3NwbGF5XCIsIGNsYXNzOiBcImN0N1wiIH0sXHJcblx0XCJhc2lhbnBvcm5cIjogeyBuYW1lOiBcIkFzaWFuIFBvcm5cIiwgdXJsOiBcImFzaWFucG9yblwiLCBjbGFzczogXCJjdDhcIiB9LFxyXG5cdFwibWlzY1wiOiB7IG5hbWU6IFwiTWlzY1wiLCB1cmw6IFwibWlzY1wiLCBjbGFzczogXCJjdDFcIiB9LFxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIG9uV2luZG93QmVmb3JlU2NyaXB0RXhlY3V0ZShldmVudCkge1xyXG5cdGNvbnN0IHJlbW92ZSA9ICghZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInNyY1wiKSAmJiByZUphdmFzY3JpcHRHb3RvTmV4dC50ZXN0KGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCkpO1xyXG5cdGlmICghcmVtb3ZlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChldmVudC50YXJnZXQucGFyZW50Tm9kZSkge1xyXG5cdFx0ZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZXZlbnQudGFyZ2V0KTtcclxuXHR9XHJcblxyXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBibG9ja1JlZGlyZWN0aW9ucygpIHtcclxuXHRyZXF1aXJlKFwiLi4vamF2YXNjcmlwdFwiKS5pbmplY3QoKCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZih3aW5kb3cuZ290b25leHQpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0d2luZG93LmdvdG9uZXh0ID0gKCkgPT4ge307XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZXNoZWV0KCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LWdhbGxlcnktcmVzdXJyZWN0XCI7XHJcblx0aWYgKCFzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkge1xyXG5cdFx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xyXG5cdFx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFudXBEb2N1bWVudCgpIHtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHk+c2NyaXB0LGJvZHk+ZGl2LmRcIikpIHtcclxuXHRcdGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZURvbU5vZGVzKHNvdXJjZSwgZGVzdGluYXRpb24pIHtcclxuXHRpZiAoIXNvdXJjZSB8fCAhZGVzdGluYXRpb24pIHsgcmV0dXJuOyB9XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIHNvdXJjZS5jaGlsZE5vZGVzKSB7XHJcblx0XHRkZXN0aW5hdGlvbi5hcHBlbmRDaGlsZChub2RlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVEb2N1bWVudChodG1sU291cmNlLCBkZXN0aW5hdGlvbikge1xyXG5cdGNvbnN0IGdhbGxlcnlIdG1sRG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sU291cmNlLCBcInRleHQvaHRtbFwiKTtcclxuXHRtb3ZlRG9tTm9kZXMoZ2FsbGVyeUh0bWxEb2MuaGVhZCwgZGVzdGluYXRpb24uaGVhZCk7XHJcblx0bW92ZURvbU5vZGVzKGdhbGxlcnlIdG1sRG9jLmJvZHksIGRlc3RpbmF0aW9uLmJvZHkpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbnNlcnRHYWxsZXJ5SHRtbChpZGVudGlmaWVyKSB7XHJcblx0Y29uc3QgYXBpU3R5bGUgPSByZXF1aXJlKFwiLi4vYXBpL3N0eWxlXCIpO1xyXG5cdGNvbnN0IG5hdkJhciA9IGFwaVN0eWxlLmlzRGFyaygpID9cclxuXHRcdHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyLWRhcmsuaHRtbFwiKSA6XHJcblx0XHRyZXF1aXJlKFwiLi9uYXZpZ2F0aW9uLWJhci1saWdodC5odG1sXCIpO1xyXG5cclxuXHRtb3ZlRG9jdW1lbnQobmF2QmFyLCBkb2N1bWVudCk7XHJcblx0bW92ZURvY3VtZW50KHJlcXVpcmUoXCIuL2dhbGxlcnkuaHRtbFwiKSwgZG9jdW1lbnQpO1xyXG5cclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHRpZiAoIWJvZHkpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IGltYWdlVXJsID0gYXBpU3R5bGUuZ2V0QXJyb3dJY29uVXJsKCk7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIGJvZHkucXVlcnlTZWxlY3RvckFsbChcImltZy54LWdhbGxlcnktcmVzdXJyZWN0LW1yLWdpZlwiKSkge1xyXG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1hZ2VVcmwpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZ2FsbGVyeUluZm9GZXRjaCA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1pbmZvL2ZldGNoXCIpO1xyXG5cdGNvbnN0IGluZm8gPSBhd2FpdCBnYWxsZXJ5SW5mb0ZldGNoLmdldChpZGVudGlmaWVyKTtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC1wYWdlLXVybFwiKTtcclxuXHRpZiAobiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgbG9jID0gd2luZG93LmxvY2F0aW9uO1xyXG5cdFx0bi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGAke2xvYy5wcm90b2NvbH0vLyR7bG9jLmhvc3R9L2cvJHtpbmZvLmlkZW50aWZpZXIuaWR9LyR7aW5mby5pZGVudGlmaWVyLnRva2VufS9gKTtcclxuXHR9XHJcblxyXG5cdHNldEdhbGxlcnlJbmZvKGJvZHksIGluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRHYWxsZXJ5SW5mbyhodG1sLCBpbmZvKSB7XHJcblx0Y29uc3QgdXJscyA9IHJlcXVpcmUoXCIuLi9hcGkvdXJsc1wiKTtcclxuXHRjb25zdCBwb3B1cHMgPSByZXF1aXJlKFwiLi4vYXBpL3BvcHVwc1wiKTtcclxuXHRsZXQgbjtcclxuXHJcblx0Ly8gVGl0bGVcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ25cIikudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiNnalwiKS50ZXh0Q29udGVudCA9IGluZm8udGl0bGVPcmlnaW5hbDtcclxuXHJcblx0Ly8gVGh1bWJuYWlsXHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtbWFpbi10aHVtYm5haWxcIikuc2V0QXR0cmlidXRlKFwic3JjXCIsIGluZm8ubWFpblRodW1ibmFpbFVybCk7XHJcblxyXG5cdC8vIFVwbG9hZGVyXHJcblx0biA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LXVwbG9hZGVyXCIpO1xyXG5cdG4udGV4dENvbnRlbnQgPSBpbmZvLnVwbG9hZGVyO1xyXG5cdG4uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmxzLnVwbG9hZGVyKGluZm8udXBsb2FkZXIpKTtcclxuXHJcblx0Ly8gQ2F0ZWdvcnlcclxuXHRuID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtY2F0ZWdvcnlcIik7XHJcblx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjYXRlZ29yeUluZm9zLCBpbmZvLmNhdGVnb3J5KSkge1xyXG5cdFx0Y29uc3QgY2F0ZWdvcnlJbmZvID0gY2F0ZWdvcnlJbmZvc1tpbmZvLmNhdGVnb3J5XTtcclxuXHRcdG4udGV4dENvbnRlbnQgPSBjYXRlZ29yeUluZm8ubmFtZTtcclxuXHRcdG4uY2xhc3NMaXN0LmFkZChjYXRlZ29yeUluZm8uY2xhc3MpO1xyXG5cdFx0bi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybHMuY2F0ZWdvcnkoY2F0ZWdvcnlJbmZvLnVybCkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuLnRleHRDb250ZW50ID0gaW5mby5jYXRlZ29yeTtcclxuXHR9XHJcblxyXG5cdC8vIFJhdGluZ1xyXG5cdGNvbnN0IHBvcyA9IGdldEJhY2tncm91bmRQb3NpdGlvbkZvclJhdGluZyhpbmZvLnJhdGluZ0F2ZXJhZ2UpO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfaW1hZ2VcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYCR7cG9zLnh9cHggJHtwb3MueX1weGA7XHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtYXZlcmFnZS1yYXRpbmdcIikudGV4dENvbnRlbnQgPSBpbmZvLnJhdGluZ0F2ZXJhZ2UudG9GaXhlZCgyKTtcclxuXHJcblx0Ly8gSW5mb1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWRhdGUtdXBsb2FkZWRcIikudGV4dENvbnRlbnQgPSBnZXRUaW1lc3RhbXBEYXRlU3RyaW5nKGluZm8uZGF0ZVVwbG9hZGVkKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC12aXNpYmxlXCIpLnRleHRDb250ZW50ID0gKGluZm8udmlzaWJsZSA/IFwiWWVzXCIgOiBcIk5vXCIpO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWZpbGUtc2l6ZVwiKS50ZXh0Q29udGVudCA9IGdldFByZXR0eUZpbGVTaXplKGluZm8uYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC1maWxlLWNvdW50XCIpLnRleHRDb250ZW50ID0gcGx1cmFsKGluZm8uZmlsZUNvdW50LCBcIiBwYWdlXCIsIFwiIHBhZ2VzXCIpO1xyXG5cdGlmICh0eXBlb2YoaW5mby5sYW5ndWFnZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdGNvbnN0IHN1ZmZpeCA9IGluZm8udHJhbnNsYXRlZCA/IGAgXFx4YTBgIDogXCJcIjsgLy8gJm5ic3A7XHJcblx0XHRuID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtbGFuZ3VhZ2VcIik7XHJcblx0XHRuLnRleHRDb250ZW50ID0gYCR7aW5mby5sYW5ndWFnZX0ke3N1ZmZpeH1gO1xyXG5cdFx0aWYgKGluZm8udHJhbnNsYXRlZCkge1xyXG5cdFx0XHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdHNwYW4uY2xhc3NOYW1lID0gXCJoYWxwXCI7XHJcblx0XHRcdHNwYW4udGl0bGUgPSBcIlRoaXMgZ2FsbGVyeSBoYXMgYmVlbiB0cmFuc2xhdGVkIGZyb20gdGhlIG9yaWdpbmFsIGxhbmd1YWdlIHRleHQuXCI7XHJcblx0XHRcdHNwYW4udGV4dENvbnRlbnQgPSBcIlRSXCI7XHJcblx0XHRcdG4uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWxhbmd1YWdlLXJvd1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fVxyXG5cclxuXHQvLyBUYWdzXHJcblx0Y29uc3QgdGFnVGFibGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC10YWdzXCIpO1xyXG5cdGZvciAoY29uc3QgbmFtZXNwYWNlIGluIGluZm8udGFncykge1xyXG5cdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5mby50YWdzLCBuYW1lc3BhY2UpKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG5cdFx0bGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQuY2xhc3NOYW1lID0gXCJ0Y1wiO1xyXG5cdFx0dGQudGV4dENvbnRlbnQgPSBgJHtuYW1lc3BhY2V9OmA7XHJcblx0XHRyb3cuYXBwZW5kQ2hpbGQodGQpO1xyXG5cclxuXHRcdHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0cm93LmFwcGVuZENoaWxkKHRkKTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IHRhZyBvZiBpbmZvLnRhZ3NbbmFtZXNwYWNlXSkge1xyXG5cdFx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRkaXYuY2xhc3NOYW1lID0gXCJndFwiO1xyXG5cdFx0XHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHRcdGEuaHJlZiA9IGAvdGFnLyR7dGFnfWA7XHJcblx0XHRcdGEudGV4dENvbnRlbnQgPSB0YWc7XHJcblx0XHRcdGRpdi5hcHBlbmRDaGlsZChhKTtcclxuXHRcdFx0dGQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdH1cclxuXHJcblx0XHR0YWdUYWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG5cdH1cclxuXHJcblx0Ly8gRmF2b3JpdGVzXHJcblx0Y29uc3QgZmF2b3JpdGVVcmwgPSB1cmxzLmZhdm9yaXRlc1BvcHVwKGluZm8uaWRlbnRpZmllci5pZCwgaW5mby5pZGVudGlmaWVyLnRva2VuKTtcclxuXHRjb25zdCBmYXZvcml0ZUxpbmtTZWxlY3RvciA9IFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtZmF2b3JpdGVzLWxpbmtcIjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZhdm9yaXRlTGlua1NlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGZhdm9yaXRlVXJsKTtcclxuXHRwb3B1cHMuc2hvd09uQ2xpY2soXCIjZ2RmXCIsIGZhdm9yaXRlVXJsLCBwb3B1cHMuc2l6ZXMuZmF2b3JpdGVzKTtcclxuXHJcblx0Ly8gRG93bmxvYWQgbWV0YWRhdGFcclxuXHRzZXR1cERvd25sb2FkTGluayhpbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QmFja2dyb3VuZFBvc2l0aW9uRm9yUmF0aW5nKHJhdGluZykge1xyXG5cdHJhdGluZyA9IE1hdGgucm91bmQocmF0aW5nICogMi4wKTtcclxuXHRyYXRpbmcgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxMCwgcmF0aW5nKSk7XHJcblx0Y29uc3QgeCA9ICg1IC0gTWF0aC5jZWlsKHJhdGluZyAvIDIpKSAqIC0xNjtcclxuXHRjb25zdCB5ID0gKHJhdGluZyAlIDIgPT09IDApID8gLTEgOiAtMjE7XHJcblx0cmV0dXJuIHsgeCwgeSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbHVyYWwobnVtYmVyLCBzaW5ndWxhckxhYmVsLCBwbHVyYWxMYWJlbCkge1xyXG5cdGNvbnN0IGxhYmVsID0gKG51bWJlciA9PT0gMSA/IHNpbmd1bGFyTGFiZWwgOiBwbHVyYWxMYWJlbCk7XHJcblx0cmV0dXJuIGAke251bWJlcn0ke2xhYmVsfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWVzdGFtcERhdGVTdHJpbmcodGltZXN0YW1wKSB7XHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcblx0Y29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG5cdGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0Y29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcblx0cmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAke2hvdXJ9OiR7bWludXRlfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByZXR0eUZpbGVTaXplKGJ5dGVzKSB7XHJcblx0Y29uc3QgaWkgPSBmaWxlU2l6ZUxhYmVscy5sZW5ndGggLSAxO1xyXG5cdGxldCBpID0gMDtcclxuXHR3aGlsZSAoaSA8IGlpICYmIGJ5dGVzID49IDEwMjQpIHtcclxuXHRcdGJ5dGVzIC89IDEwMjQ7XHJcblx0XHQrK2k7XHJcblx0fVxyXG5cdHJldHVybiBgJHtieXRlcy50b0ZpeGVkKGkgPT09IDAgPyAwIDogMil9ICR7ZmlsZVNpemVMYWJlbHNbaV19YDtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldHVwRG93bmxvYWRMaW5rKGluZm8pIHtcclxuXHRjb25zdCBnYWxsZXJ5UmlnaHRTaWRlYmFyID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LXJpZ2h0LXNpZGViYXJcIik7XHJcblx0Y29uc3QgbGluayA9IGdhbGxlcnlSaWdodFNpZGViYXIuY3JlYXRlTGluayhcIk1ldGFkYXRhIEpTT05cIiwgMCkubGluaztcclxuXHRpZiAobGluayA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0bGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcImluZm8uanNvblwiKTtcclxuXHRsaW5rLmhyZWYgPSBjcmVhdGVEb3dubG9hZERhdGFVcmwoaW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURvd25sb2FkRGF0YVVybChpbmZvKSB7XHJcblx0aWYgKGluZm8gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mb1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRvQ29tbW9uSnNvbihpbmZvKSwgbnVsbCwgXCIgIFwiKTtcclxuXHRjb25zdCBibG9iID0gbmV3IEJsb2IoWyBpbmZvU3RyaW5nIF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdGlmIChjdXJyZW50UGFnZVR5cGUgIT09IFwiZGVsZXRlZEdhbGxlcnlcIikgeyByZXR1cm47IH1cclxuXHJcblx0YmxvY2tSZWRpcmVjdGlvbnMoKTtcclxuXHJcblx0Y29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby91dGlsc1wiKTtcclxuXHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChsb2NhdGlvbi5ocmVmKTtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cdGNsZWFudXBEb2N1bWVudCgpO1xyXG5cdGluc2VydEdhbGxlcnlIdG1sKGluZm8uaWRlbnRpZmllcik7XHJcblxyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1wYWdlLXJlc3VycmVjdGVkXCIpO1xyXG5cdHBhZ2VUeXBlLnNldE92ZXJyaWRlKGN1cnJlbnRQYWdlVHlwZSk7XHJcbn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXNjcmlwdGV4ZWN1dGVcIiwgb25XaW5kb3dCZWZvcmVTY3JpcHRFeGVjdXRlLCB0cnVlKTtcclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIm5iXFxcIiBjbGFzcz1cXFwibm9zZWwgeC1yZXN1cnJlY3RlZFxcXCI+XFxyXFxuXFx0PGRpdj48YSBjbGFzcz1cXFwibmJ3XFxcIiBocmVmPVxcXCIvXFxcIj5Gcm9udDxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj4gUGFnZTwvc3Bhbj48L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvd2F0Y2hlZFxcXCI+V2F0Y2hlZDwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9wb3B1bGFyXFxcIj5Qb3B1bGFyPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3RvcnJlbnRzLnBocFxcXCI+VG9ycmVudHM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvZmF2b3JpdGVzLnBocFxcXCI+RmF2PHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPm9yaXRlPC9zcGFuPnM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvdWNvbmZpZy5waHBcXFwiPlNldHRpbmdzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3VwbG9hZC9tYW5hZ2UucGhwXFxcIj48c3BhbiBjbGFzcz1cXFwibmJ3MlxcXCI+TXkgPC9zcGFuPlVwbG9hZHM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvbXl0YWdzXFxcIj5NeSBUYWdzPC9hPjwvZGl2PlxcclxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJuYlxcXCIgY2xhc3M9XFxcIm5vc2VsIHgtcmVzdXJyZWN0ZWRcXFwiPlxcclxcblxcdDxkaXY+PGEgY2xhc3M9XFxcIm5id1xcXCIgaHJlZj1cXFwiL1xcXCI+RnJvbnQ8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+IFBhZ2U8L3NwYW4+PC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3dhdGNoZWRcXFwiPldhdGNoZWQ8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvcG9wdWxhclxcXCI+UG9wdWxhcjwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi90b3JyZW50cy5waHBcXFwiPlRvcnJlbnRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL2Zhdm9yaXRlcy5waHBcXFwiPkZhdjxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj5vcml0ZTwvc3Bhbj5zPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL2hvbWUucGhwXFxcIj48c3BhbiBjbGFzcz1cXFwibmJ3MlxcXCI+TXkgPC9zcGFuPkhvbWU8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL3VwbG9hZC5lLWhlbnRhaS5vcmcvbWFuYWdlLnBocFxcXCI+PHNwYW4gY2xhc3M9XFxcIm5idzJcXFwiPk15IDwvc3Bhbj5VcGxvYWRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3RvcGxpc3QucGhwXFxcIj5Ub3BsaXN0czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9ib3VudHkucGhwXFxcIj5Cb3VudGllczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9uZXdzLnBocFxcXCI+TmV3czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcImh0dHBzOi8vZm9ydW1zLmUtaGVudGFpLm9yZy9cXFwiPkZvcnVtczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcImh0dHBzOi8vZWh3aWtpLm9yZy9cXFwiPldpa2k8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL2hlbnRhaXZlcnNlLm9yZy9cXFwiIG9uY2xpY2s9XFxcInBvcFVwKCdodHRwczovL2hlbnRhaXZlcnNlLm9yZy8nLDEyNTAsNzIwKTsgcmV0dXJuIGZhbHNlXFxcIj5IPHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPmVudGFpPC9zcGFuPlY8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+ZXJzZTwvc3Bhbj48L2E+PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImJvZHk+Om5vdCgueC1yZXN1cnJlY3RlZCk6bm90KC54LXBvcHVwLW1lbnUpe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9I3gtZ2FsbGVyeS1yZXN1cnJlY3QtY2F0ZWdvcnl7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LngtZ2FsbGVyeS1yZXN1cnJlY3QtaGlkZGVuLWluZm97ZGlzcGxheTpub25lfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9Qcm9taXNlKGZuLCBzZWxmKSB7XHJcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc29sdmUoZm4uYXBwbHkoc2VsZiwgYXJncykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBnbSA9ICgob2JqZWN0cykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB2ID0gR007IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cdFx0aWYgKHYgIT09IG51bGwgJiYgdHlwZW9mKHYpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdHJldHVybiB2O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGlmIChvYmouR00gIT09IG51bGwgJiYgdHlwZW9mKG9iai5HTSkgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2JqLkdNO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNhdGNoIChlKSB7IH1cclxuXHJcblx0Y29uc3QgbWFwcGluZyA9IFtcclxuXHRcdFsgXCJnZXRWYWx1ZVwiLCBcIkdNX2dldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJzZXRWYWx1ZVwiLCBcIkdNX3NldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJkZWxldGVWYWx1ZVwiLCBcIkdNX2RlbGV0ZVZhbHVlXCIgXSxcclxuXHRcdFsgXCJ4bWxIdHRwUmVxdWVzdFwiLCBcIkdNX3htbGh0dHBSZXF1ZXN0XCIgXVxyXG5cdF07XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcHBpbmcpIHtcclxuXHRcdGxldCBwcm9taXNlID0gbnVsbDtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0Y29uc3QgZm4gPSBvYmpbdmFsdWVdO1xyXG5cdFx0XHRpZiAodHlwZW9mKGZuKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0cHJvbWlzZSA9IHRvUHJvbWlzZShmbiwgb2JqKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0cHJvbWlzZSA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdChuZXcgRXJyb3IoYE5vdCBzdXBwb3J0ZWQgKCR7a2V5fSlgKSkpO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0W2tleV0gPSBwcm9taXNlO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59KS5jYWxsKHRoaXMsIFt0aGlzLCB3aW5kb3ddKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodmFsdWUsIFwidGV4dC9odG1sXCIpO1xyXG4gIHJldHVybiBkb2MuZG9jdW1lbnRFbGVtZW50LnRleHRDb250ZW50O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluamVjdChmdW5jLCBhcmdzKSB7XHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIikgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG51bGw7XHJcblx0aWYgKCFwYXJlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdGNvbnN0IHNjcmlwdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdGNvbnN0IGFyZ1N0ciA9IChBcnJheS5pc0FycmF5KGFyZ3MpICYmIGFyZ3MubGVuZ3RoID4gMCkgP1xyXG5cdFx0YC4uLiR7SlNPTi5zdHJpbmdpZnkoYXJncywgbnVsbCwgXCJcIil9YCA6XHJcblx0XHRcIlwiO1xyXG5cdHNjcmlwdE5vZGUudGV4dENvbnRlbnQgPSBgKCR7ZnVuYy50b1N0cmluZygpfSkoJHthcmdTdHJ9KTtgO1xyXG5cclxuXHRwYXJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0Tm9kZSk7XHJcblx0cGFyZW50LnJlbW92ZUNoaWxkKHNjcmlwdE5vZGUpO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluamVjdFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBpc1JlYWR5VmFsdWUgPSBmYWxzZTtcclxubGV0IGNhbGxiYWNrcyA9IG51bGw7XHJcbmxldCBjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5jb25zdCBjaGVja0ludGVydmFsUmF0ZSA9IDI1MDtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0hvb2tlZCgpIHtcclxuXHRyZXR1cm4gY2FsbGJhY2tzICE9PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob29rKCkge1xyXG5cdGNhbGxiYWNrcyA9IFtdO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoY2hlY2tJZlJlYWR5LCBjaGVja0ludGVydmFsUmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaG9vaygpIHtcclxuXHRjb25zdCBjYnMgPSBjYWxsYmFja3M7XHJcblxyXG5cdGNhbGxiYWNrcyA9IG51bGw7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjbGVhckludGVydmFsKGNoZWNrSW50ZXJ2YWxJZCk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuXHJcblx0aW52b2tlKGNicyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZShjYWxsYmFja3MpIHtcclxuXHRmb3IgKGxldCBjYiBvZiBjYWxsYmFja3MpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNiKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuXHRpZiAoaXNSZWFkeVZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRpZiAoaXNIb29rZWQoKSkgeyB1bmhvb2soKTsgfVxyXG5cdFx0aXNSZWFkeVZhbHVlID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcclxuXHRpc1JlYWR5KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvblJlYWR5KGNhbGxiYWNrKSB7XHJcblx0aWYgKGlzUmVhZHkoKSkge1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghaXNIb29rZWQoKSkgeyBob29rKCk7IH1cclxuXHJcblx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0b25SZWFkeTogb25SZWFkeSxcclxuXHRnZXQgaXNSZWFkeSgpIHsgcmV0dXJuIGlzUmVhZHkoKTsgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBhcGlTdHlsZSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0aWYgKGFwaVN0eWxlID09PSBudWxsKSB7IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vYXBpL3N0eWxlXCIpOyB9XHJcblx0YXBpU3R5bGUuc2V0RG9jdW1lbnREYXJrRmxhZygpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiJdfQ==
