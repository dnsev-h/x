// ==UserScript==
// @name        x/gallery-resurrect
// @version     1.2.5
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
module.exports = "<div class=\"gm x-resurrected\">\r\n\t<div id=\"gleft\">\r\n\t\t<div id=\"gd1\">\r\n\t\t\t<div><img id=\"x-gallery-resurrect-main-thumbnail\" style=\"max-width:250px;max-height:375px;display:block;\" /></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"gd2\">\r\n\t\t<h1 id=\"gn\"></h1>\r\n\t\t<h1 id=\"gj\"></h1>\r\n\t</div>\r\n\t<div id=\"gright\">\r\n\t\t<div id=\"gd5\">\r\n\t\t\t<p class=\"g3 gsp\" id=\"x-gallery-resurrect-gallery-unavailable\"><img class=\"x-gallery-resurrect-mr-gif\" /> <a title=\"Some information has been resurrected\">Gallery unavailable</a></p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"gmid\">\r\n\t\t<div id=\"gd3\">\r\n\t\t\t<div id=\"gdc\">\r\n\t\t\t\t<a class=\"cs\" id=\"x-gallery-resurrect-category\"></a>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdn\"><a id=\"x-gallery-resurrect-uploader\"></a></div>\r\n\t\t\t<div id=\"gdd\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Posted:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-date-uploaded\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr class=\"x-gallery-resurrect-hidden-info\">\r\n\t\t\t\t\t\t<td class=\"gdt1\">Parent:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-parent\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Visible:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-visible\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr id=\"x-gallery-resurrect-language-row\">\r\n\t\t\t\t\t\t<td class=\"gdt1\">Language:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-language\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">File Size:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-size\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Length:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-count\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr class=\"x-gallery-resurrect-hidden-info\">\r\n\t\t\t\t\t\t<td class=\"gdt1\">Favorited:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-favorite-count\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdr\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"grt1\">Rating:</td>\r\n\t\t\t\t\t\t<td id=\"grt2\">\r\n\t\t\t\t\t\t\t<div id=\"rating_image\" class=\"ir\" style=\"background-position:-80px -1px\"></div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td id=\"grt3\"><span id=\"rating_count\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"rating_label\" colspan=\"3\">Average: <span id=\"x-gallery-resurrect-average-rating\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdf\">\r\n\t\t\t\t<div style=\"float:left;cursor:pointer\" id=\"fav\"></div>\r\n\t\t\t\t<div style=\"float:left\">&nbsp; <a id=\"x-gallery-resurrect-favorites-link\" target=\"_blank\"><img class=\"x-gallery-resurrect-mr-gif\" /> Add to Favorites</a></div>\r\n\t\t\t\t<div class=\"c\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"gd4\">\r\n\t\t\t<div id=\"taglist\">\r\n\t\t\t\t<table><tbody id=\"x-gallery-resurrect-tags\"></tbody></table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"c\"></div>\r\n\t</div>\r\n\t<div class=\"c\"></div>\r\n</div>\r\n<div id=\"asm\"></div>\r\n<div class=\"gtb\">\r\n\t<p class=\"gpc\">Showing 0 - 0 of 0 images</p>\r\n\t<table class=\"ptt\"><tr><td class=\"ptds\"><a href=\"?p=0\" id=\"x-gallery-resurrect-page-url\"></a></td></tr></table>\r\n</div>";
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

	const style = document.createElement("link");
	style.rel = "stylesheet";
	style.href = `data:text/css;base64,${window.btoa(source)}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2NvbW1vbi1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZmV0Y2guanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby9nZXQtZnJvbS1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdHlwZXMuanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby91dGlscy5qcyIsInNyYy9hcGkvZ2FsbGVyeS1yaWdodC1zaWRlYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BvcHVwcy5qcyIsInNyYy9hcGkvc3R5bGUuanMiLCJzcmMvYXBpL3N0eWxlL2dhbGxlcnktcmlnaHQtc2lkZWJhci5jc3MiLCJzcmMvYXBpL3VybHMuanMiLCJzcmMvZmV0Y2guanMiLCJzcmMvZ2FsbGVyeS1yZXN1cnJlY3QvZ2FsbGVyeS5odG1sIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L21haW4uanMiLCJzcmMvZ2FsbGVyeS1yZXN1cnJlY3QvbmF2aWdhdGlvbi1iYXItZGFyay5odG1sIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L25hdmlnYXRpb24tYmFyLWxpZ2h0Lmh0bWwiLCJzcmMvZ2FsbGVyeS1yZXN1cnJlY3Qvc3R5bGUuY3NzIiwic3JjL2dtLmpzIiwic3JjL2h0bWwtdXRpbHMuanMiLCJzcmMvamF2YXNjcmlwdC5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1UUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIEdhbGxlcnlJZGVudGlmaWVyIHtcclxuXHRjb25zdHJ1Y3RvcihpZCwgdG9rZW4pIHtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMudG9rZW4gPSB0b2tlbjtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVGcm9tVXJsKHVybCkge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSAvXi4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pPyQvLmV4ZWModXJsKTtcclxuXHRcdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IHBhdGggPSBtYXRjaFsxXS5yZXBsYWNlKC9eXFwvK3xcXC8rJC9nLCBcIlwiKS5yZXBsYWNlKC9cXC97Mix9L2csIFwiL1wiKS5zcGxpdChcIi9cIik7XHJcblx0XHRpZiAocGF0aFswXSAhPT0gXCJnXCIgfHwgcGF0aC5sZW5ndGggPCAzKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgaWQgPSBwYXJzZUludChwYXRoWzFdLCAxMCk7XHJcblx0XHRyZXR1cm4gKE51bWJlci5pc05hTihpZCkgPyBudWxsIDogbmV3IEdhbGxlcnlJZGVudGlmaWVyKGlkLCBwYXRoWzJdKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0R2FsbGVyeUlkZW50aWZpZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5SWRlbnRpZmllciA9IHJlcXVpcmUoXCIuLi9nYWxsZXJ5LWlkZW50aWZpZXJcIikuR2FsbGVyeUlkZW50aWZpZXI7XHJcblxyXG5cclxuZnVuY3Rpb24gdG9TdHJpbmdPckRlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdHJldHVybiB0eXBlb2YodmFsdWUpID09PSBcInN0cmluZ1wiID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvTnVtYmVyT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRyZXR1cm4gTnVtYmVyLmlzTmFOKHZhbHVlKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpZGVudGlmaWVyLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRpZiAoaWRlbnRpZmllciA9PT0gbnVsbCB8fCB0eXBlb2YoaWRlbnRpZmllcikgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2lkOiBpZGVudGlmaWVyLmlkLFxyXG5cdFx0dG9rZW46IGlkZW50aWZpZXIudG9rZW5cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKG5ld2VyVmVyc2lvbnMpIHtcclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShuZXdlclZlcnNpb25zKSkge1xyXG5cdFx0Zm9yIChjb25zdCBuZXdlclZlcnNpb24gb2YgbmV3ZXJWZXJzaW9ucykge1xyXG5cdFx0XHRyZXN1bHQucHVzaCh7XHJcblx0XHRcdFx0Z2FsbGVyeTogKFxyXG5cdFx0XHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3ZXJWZXJzaW9uLmlkZW50aWZpZXIsIG51bGwpIHx8XHJcblx0XHRcdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihuZXcgR2FsbGVyeUlkZW50aWZpZXIoMCwgXCJcIiksIG51bGwpKSxcclxuXHRcdFx0XHRuYW1lOiB0b1N0cmluZ09yRGVmYXVsdChuZXdlclZlcnNpb24ubmFtZSksXHJcblx0XHRcdFx0ZGF0ZV91cGxvYWRlZDogdG9OdW1iZXJPckRlZmF1bHQobmV3ZXJWZXJzaW9uLmRhdGVVcGxvYWRlZClcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhZ3NUb0NvbW1vbkpzb24odGFncykge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGlmICh0YWdzICE9PSBudWxsICYmIHR5cGVvZih0YWdzKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh0YWdzKSkge1xyXG5cdFx0Zm9yIChjb25zdCBuYW1lc3BhY2UgaW4gdGFncykge1xyXG5cdFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YWdzLCBuYW1lc3BhY2UpKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRcdGNvbnN0IHRhZ0xpc3QgPSB0YWdzW25hbWVzcGFjZV07XHJcblx0XHRcdHJlc3VsdFtuYW1lc3BhY2VdID0gWy4uLnRhZ0xpc3RdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkZhdm9yaXRlQ2F0ZWdvcnkoaW5mbykge1xyXG5cdGlmIChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRyZXR1cm4ge1xyXG5cdFx0aWQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS5pbmRleCwgMCksXHJcblx0XHR0aXRsZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNhdGVnb3J5LnRpdGxlLCBcIlwiKVxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkZ1bGxHYWxsZXJ5SW5mb0pzb24oaW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5OiAoXHJcblx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKGluZm8uaWRlbnRpZmllciwgbnVsbCkgfHxcclxuXHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLCBudWxsKSksXHJcblx0XHR0aXRsZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aXRsZSwgXCJcIiksXHJcblx0XHR0aXRsZV9vcmlnaW5hbDogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aXRsZU9yaWdpbmFsLCBcIlwiKSxcclxuXHRcdGRhdGVfdXBsb2FkZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZGF0ZVVwbG9hZGVkLCAwKSxcclxuXHRcdGNhdGVnb3J5OiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmNhdGVnb3J5LCBcIlwiKSxcclxuXHRcdHVwbG9hZGVyOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnVwbG9hZGVyLCBcIlwiKSxcclxuXHRcdHJhdGluZzoge1xyXG5cdFx0XHRhdmVyYWdlOiB0b051bWJlck9yRGVmYXVsdChpbmZvLnJhdGluZ0F2ZXJhZ2UsIDApLFxyXG5cdFx0XHRjb3VudDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5yYXRpbmdDb3VudCwgMCksXHJcblx0XHR9LFxyXG5cdFx0ZmF2b3JpdGVzOiB7XHJcblx0XHRcdGNhdGVnb3J5OiAoaW5mby5mYXZvcml0ZUNhdGVnb3J5ICE9PSBudWxsID8gdG9OdW1iZXJPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNhdGVnb3J5LmluZGV4LCAtMSkgOiAtMSksXHJcblx0XHRcdGNhdGVnb3J5X3RpdGxlOiAoaW5mby5mYXZvcml0ZUNhdGVnb3J5ICE9PSBudWxsID8gdG9TdHJpbmdPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNhdGVnb3J5LnRpdGxlLCBcIlwiKSA6IFwiXCIpLFxyXG5cdFx0XHRjb3VudDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNvdW50LCAwKVxyXG5cdFx0fSxcclxuXHRcdHBhcmVudDogZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaW5mby5wYXJlbnQsIG51bGwpLFxyXG5cdFx0bmV3ZXJfdmVyc2lvbnM6IG5ld2VyVmVyc2lvbnNUb0NvbW1vbkpzb24oaW5mby5uZXdlclZlcnNpb25zKSxcclxuXHRcdHRodW1ibmFpbDogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5tYWluVGh1bWJuYWlsVXJsLCBcIlwiKSxcclxuXHRcdHRodW1ibmFpbF9zaXplOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRodW1ibmFpbFNpemUsIFwiXCIpLFxyXG5cdFx0dGh1bWJuYWlsX3Jvd3M6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8udGh1bWJuYWlsUm93cywgMCksXHJcblx0XHRpbWFnZV9jb3VudDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5maWxlQ291bnQsIDApLFxyXG5cdFx0aW1hZ2VzX3Jlc2l6ZWQ6IGZhbHNlLFxyXG5cdFx0dG90YWxfZmlsZV9zaXplX2FwcHJveDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUsIDApLFxyXG5cdFx0dmlzaWJsZTogKGluZm8udmlzaWJsZSA9PT0gdHJ1ZSksXHJcblx0XHR2aXNpYmxlX3JlYXNvbjogdG9TdHJpbmdPckRlZmF1bHQoaW5mby52aXNpYmxlUmVhc29uLCBcIlwiKSxcclxuXHRcdGxhbmd1YWdlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmxhbmd1YWdlLCBcIlwiKSxcclxuXHRcdHRyYW5zbGF0ZWQ6IChpbmZvLnRyYW5zbGF0ZWQgPT09IHRydWUpLFxyXG5cdFx0dGFnczogdGFnc1RvQ29tbW9uSnNvbihpbmZvLnRhZ3MpLFxyXG5cdFx0Ly8gTmV3XHJcblx0XHR0YWdzX2hhdmVfbmFtZXNwYWNlOiAoaW5mby50YWdzSGF2ZU5hbWVzcGFjZSA9PT0gdHJ1ZSksXHJcblx0XHR0b3JyZW50X2NvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLnRvcnJlbnRDb3VudCwgMCksXHJcblx0XHRhcmNoaXZlcl9rZXk6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uYXJjaGl2ZXJLZXksIG51bGwpLFxyXG5cdFx0c291cmNlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnNvdXJjZSwgbnVsbCksXHJcblx0XHRzb3VyY2Vfc2l0ZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5zb3VyY2VTaXRlLCBudWxsKSxcclxuXHRcdGRhdGVfZ2VuZXJhdGVkOiB0b051bWJlck9yRGVmYXVsdChpbmZvLmRhdGVHZW5lcmF0ZWQsIDApXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25HYWxsZXJ5SW5mb0pzb24oaW5mbykge1xyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0b051bWJlck9yRGVmYXVsdChpbmZvLmRhdGVVcGxvYWRlZCwgMCkpO1xyXG5cdHJldHVybiB7XHJcblx0XHR0aXRsZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aXRsZSwgXCJcIiksXHJcblx0XHR0aXRsZV9vcmlnaW5hbDogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aXRsZU9yaWdpbmFsLCBcIlwiKSxcclxuXHJcblx0XHRjYXRlZ29yeTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5jYXRlZ29yeSwgXCJcIiksXHJcblx0XHR0YWdzOiB0YWdzVG9Db21tb25Kc29uKGluZm8udGFncyksXHJcblxyXG5cdFx0bGFuZ3VhZ2U6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8ubGFuZ3VhZ2UsIFwiXCIpLFxyXG5cdFx0dHJhbnNsYXRlZDogISFpbmZvLnRyYW5zbGF0ZWQsXHJcblxyXG5cdFx0ZmF2b3JpdGVfY2F0ZWdvcnk6IHRvQ29tbW9uRmF2b3JpdGVDYXRlZ29yeShpbmZvKSxcclxuXHJcblx0XHR1cGxvYWRfZGF0ZTogW1xyXG5cdFx0XHRkYXRlLmdldFVUQ0Z1bGxZZWFyKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDTW9udGgoKSArIDEsXHJcblx0XHRcdGRhdGUuZ2V0VVRDRGF0ZSgpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ0hvdXJzKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDTWludXRlcygpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ1NlY29uZHMoKVxyXG5cdFx0XSxcclxuXHJcblx0XHRzb3VyY2U6IHtcclxuXHRcdFx0c2l0ZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5zb3VyY2VTaXRlLCBcIlwiKSxcclxuXHRcdFx0Z2lkOiAoaW5mby5pZGVudGlmaWVyICE9PSBudWxsID8gdG9OdW1iZXJPckRlZmF1bHQoaW5mby5pZGVudGlmaWVyLmlkLCAwKSA6IDApLFxyXG5cdFx0XHR0b2tlbjogKGluZm8uaWRlbnRpZmllciAhPT0gbnVsbCA/IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uaWRlbnRpZmllci50b2tlbiwgMCkgOiAwKSxcclxuXHRcdFx0cGFyZW50X2dhbGxlcnk6IGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKGluZm8ucGFyZW50LCBudWxsKSxcclxuXHRcdFx0bmV3ZXJfdmVyc2lvbnM6IG5ld2VyVmVyc2lvbnNUb0NvbW1vbkpzb24oaW5mby5uZXdlclZlcnNpb25zKVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uSnNvbihpbmZvKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdhbGxlcnlfaW5mbzogdG9Db21tb25HYWxsZXJ5SW5mb0pzb24oaW5mbyksXHJcblx0XHRnYWxsZXJ5X2luZm9fZnVsbDogdG9Db21tb25GdWxsR2FsbGVyeUluZm9Kc29uKGluZm8pXHJcblx0fTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHRvQ29tbW9uSnNvblxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGZldGNoID0gcmVxdWlyZShcIi4uLy4uL2ZldGNoXCIpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuY29uc3QgZ2V0RnJvbUpzb24gPSByZXF1aXJlKFwiLi9nZXQtZnJvbS1qc29uXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFycmF5Q291bnQoYXJyYXksIGNvdW50LCBmaWxsKSB7XHJcblx0Y29uc3QgaWkgPSBhcnJheS5sZW5ndGg7XHJcblx0aWYgKGlpICE9PSBjb3VudCkge1xyXG5cdFx0aWYgKGlpID4gY291bnQpIHtcclxuXHRcdFx0YXJyYXkuc3BsaWNlKGNvdW50LCBpaSAtIGNvdW50KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSBpaTsgaSA8IGNvdW50OyArK2kpIHtcclxuXHRcdFx0XHRhcnJheS5wdXNoKGZpbGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHYWxsZXJ5SW5mbyhpZGVudGlmaWVycykge1xyXG5cdGNvbnN0IGdpZExpc3QgPSBbXTtcclxuXHRjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShpZGVudGlmaWVycyk7XHJcblx0aWYgKGlzQXJyYXkpIHtcclxuXHRcdGZvciAoY29uc3QgaWRlbnRpZmllciBvZiBpZGVudGlmaWVycykge1xyXG5cdFx0XHRnaWRMaXN0LnB1c2goWyBpZGVudGlmaWVyLmlkLCBpZGVudGlmaWVyLnRva2VuIF0pO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRnaWRMaXN0LnB1c2goWyBpZGVudGlmaWVycy5pZCwgaWRlbnRpZmllcnMudG9rZW4gXSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBkYXRhID0ge1xyXG5cdFx0bWV0aG9kOiBcImdkYXRhXCIsXHJcblx0XHRnaWRsaXN0OiBnaWRMaXN0LFxyXG5cdFx0bmFtZXNwYWNlOiAxXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc291cmNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0Y29uc3QgZmV0Y2hSZXN1bHQgPSBhd2FpdCBmZXRjaC5wb3N0KHtcclxuXHRcdGdtOiB0cnVlLFxyXG5cdFx0dXJsOiBcIi9hcGkucGhwXCIsXHJcblx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCByZXN1bHRKc29uID0gSlNPTi5wYXJzZShmZXRjaFJlc3VsdC5yZXNwb25zZVRleHQpO1xyXG5cclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Zm9yIChjb25zdCBqc29uIG9mIHJlc3VsdEpzb24uZ21ldGFkYXRhKSB7XHJcblx0XHRpZiAoanNvbi5lcnJvcikge1xyXG5cdFx0XHRyZXN1bHRzLnB1c2gobnVsbCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBpbmZvID0gZ2V0RnJvbUpzb24oanNvbiwgc291cmNlVXJsKTtcclxuXHRcdFx0cmVzdWx0cy5wdXNoKGluZm8pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0QXJyYXlDb3VudChyZXN1bHRzLCBnaWRMaXN0Lmxlbmd0aCwgbnVsbCk7XHJcblxyXG5cdHJldHVybiBpc0FycmF5ID8gcmVzdWx0cyA6IHJlc3VsdHNbMF07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQ6IGdldEdhbGxlcnlJbmZvXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuY29uc3QgaHRtbFV0aWxzID0gcmVxdWlyZShcIi4uLy4uL2h0bWwtdXRpbHNcIik7XHJcblxyXG5jb25zdCBkZWZhdWx0TmFtZXNwYWNlID0gXCJtaXNjXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SnNvbk51bWJlcih2YWx1ZSkge1xyXG5cdGlmICh0eXBlb2YodmFsdWUpICE9PSBcIm51bWJlclwiKSB7XHJcblx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gXCJzdHJpbmdcIikgeyByZXR1cm4gbnVsbDsgfVxyXG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuXHR9XHJcblx0cmV0dXJuIChOdW1iZXIuaXNOYU4odmFsdWUpID8gbnVsbCA6IHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SnNvblN0cmluZyh2YWx1ZSkge1xyXG5cdGlmICh0eXBlb2YodmFsdWUpID09PSBcInN0cmluZ1wiKSB7IHJldHVybiB2YWx1ZTsgfVxyXG5cdGlmICh0eXBlb2YodmFsdWUpID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09PSBudWxsKSB7IHJldHVybiB2YWx1ZTsgfVxyXG5cdHJldHVybiBgJHt2YWx1ZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYWdBbmROYW1lc3BhY2UodGFnKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9eKD86KFteOl0qKTopPyhbXFx3XFxXXSopJC87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGFnKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsKSA/XHJcblx0XHQoeyB0YWc6IG1hdGNoWzJdLCBuYW1lc3BhY2U6IG1hdGNoWzFdIHx8IGRlZmF1bHROYW1lc3BhY2UgfSkgOlxyXG5cdFx0KHsgdGFnOiB0YWcsIG5hbWVzcGFjZTogZGVmYXVsdE5hbWVzcGFjZSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Qcm9wZXJDYXNlKHRleHQpIHtcclxuXHRyZXR1cm4gdGV4dC5yZXBsYWNlKC8oXnxcXFcpKFxcdykvZywgKG0wLCBtMSwgbTIpID0+IGAke20xfSR7bTIudG9VcHBlckNhc2UoKX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21Kc29uKGluZm8sIGpzb24pIHtcclxuXHRpbmZvLnRpdGxlID0gaHRtbFV0aWxzLmdldFN0cmluZ0Zyb21IdG1sRXNjYXBlZFN0cmluZyhnZXRKc29uU3RyaW5nKGpzb24udGl0bGUpKTtcclxuXHRpbmZvLnRpdGxlT3JpZ2luYWwgPSBodG1sVXRpbHMuZ2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nKGdldEpzb25TdHJpbmcoanNvbi50aXRsZV9qcG4pKTtcclxuXHRpbmZvLm1haW5UaHVtYm5haWxVcmwgPSBnZXRKc29uU3RyaW5nKGpzb24udGh1bWIpO1xyXG5cdGNvbnN0IGNhdGVnb3J5ID0gZ2V0SnNvblN0cmluZyhqc29uLmNhdGVnb3J5KTtcclxuXHRpbmZvLmNhdGVnb3J5ID0gKGNhdGVnb3J5ICE9PSBudWxsID8gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA6IG51bGwpO1xyXG5cdGluZm8udXBsb2FkZXIgPSBnZXRKc29uU3RyaW5nKGpzb24udXBsb2FkZXIpO1xyXG5cclxuXHRpbmZvLnJhdGluZ0F2ZXJhZ2UgPSBnZXRKc29uTnVtYmVyKGpzb24ucmF0aW5nKTtcclxuXHJcblx0Y29uc3QgZGF0ZVVwbG9hZGVkID0gZ2V0SnNvbk51bWJlcihqc29uLnBvc3RlZCk7XHJcblx0aW5mby5kYXRlVXBsb2FkZWQgPSAoZGF0ZVVwbG9hZGVkICE9PSBudWxsID8gbmV3IERhdGUoZGF0ZVVwbG9hZGVkICogMTAwMCkuZ2V0VGltZSgpIDogbnVsbCk7XHJcblxyXG5cdGluZm8udmlzaWJsZSA9ICFqc29uLmV4cHVuZ2VkO1xyXG5cclxuXHRpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IGdldEpzb25OdW1iZXIoanNvbi5maWxlc2l6ZSk7XHJcblxyXG5cdGluZm8uZmlsZUNvdW50ID0gZ2V0SnNvbk51bWJlcihqc29uLmZpbGVjb3VudCk7XHJcblxyXG5cdGluZm8uYXJjaGl2ZXJLZXkgPSBnZXRKc29uU3RyaW5nKGpzb24uYXJjaGl2ZXJfa2V5KTtcclxuXHRpbmZvLnRvcnJlbnRDb3VudCA9IGdldEpzb25OdW1iZXIoanNvbi50b3JyZW50Y291bnQpO1xyXG5cclxuXHRjb25zdCB0YWdzID0ge307XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoanNvbi50YWdzKSkge1xyXG5cdFx0Zm9yIChjb25zdCBqc29uVGFnIG9mIGpzb24udGFncykge1xyXG5cdFx0XHRjb25zdCBzdHJpbmdUYWcgPSBnZXRKc29uU3RyaW5nKGpzb25UYWcpO1xyXG5cdFx0XHRpZiAoc3RyaW5nVGFnID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0XHRjb25zdCB7dGFnLCBuYW1lc3BhY2V9ID0gZ2V0VGFnQW5kTmFtZXNwYWNlKHN0cmluZ1RhZyk7XHJcblxyXG5cdFx0XHRsZXQgbmFtZXNwYWNlVGFncztcclxuXHRcdFx0aWYgKHRhZ3MuaGFzT3duUHJvcGVydHkobmFtZXNwYWNlKSkge1xyXG5cdFx0XHRcdG5hbWVzcGFjZVRhZ3MgPSB0YWdzW25hbWVzcGFjZV07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bmFtZXNwYWNlVGFncyA9IFtdO1xyXG5cdFx0XHRcdHRhZ3NbbmFtZXNwYWNlXSA9IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MucHVzaCh0YWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5mby50YWdzID0gdGFncztcclxuXHRpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID0gdHJ1ZTtcclxuXHJcblx0Ly8gVGFnLWJhc2VkIGluZm9cclxuXHRpZiAodGFncy5oYXNPd25Qcm9wZXJ0eShcImxhbmd1YWdlXCIpKSB7XHJcblx0XHRjb25zdCBsYW5ndWFnZVRhZ3MgPSB0YWdzLmxhbmd1YWdlO1xyXG5cdFx0Y29uc3QgdHJhbnNsYXRlZEluZGV4ID0gbGFuZ3VhZ2VUYWdzLmluZGV4T2YoXCJ0cmFuc2xhdGVkXCIpO1xyXG5cdFx0aW5mby50cmFuc2xhdGVkID0gKHRyYW5zbGF0ZWRJbmRleCA+PSAwKTtcclxuXHRcdGlmICh0cmFuc2xhdGVkSW5kZXggIT09IDApIHtcclxuXHRcdFx0aW5mby5sYW5ndWFnZSA9IHRvUHJvcGVyQ2FzZShsYW5ndWFnZVRhZ3NbMF0pO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRpbmZvLmxhbmd1YWdlID0gXCJKYXBhbmVzZVwiO1xyXG5cdFx0aW5mby50cmFuc2xhdGVkID0gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGcm9tSnNvbihqc29uLCB1cmwpIHtcclxuXHRpZiAoanNvbiA9PT0gbnVsbCB8fCB0eXBlb2YoanNvbikgIT09IFwib2JqZWN0XCIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWQgPSBnZXRKc29uTnVtYmVyKGpzb24uZ2lkKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldEpzb25TdHJpbmcoanNvbi50b2tlbik7XHJcblx0aWYgKGlkID09PSBudWxsIHx8IHRva2VuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSBuZXcgdHlwZXMuR2FsbGVyeUluZm8oKTtcclxuXHRpbmZvLmlkZW50aWZpZXIgPSBuZXcgdHlwZXMuR2FsbGVyeUlkZW50aWZpZXIoaWQsIHRva2VuKTtcclxuXHRpbmZvLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRpbmZvLnNvdXJjZSA9IFwianNvblwiO1xyXG5cdHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSnNvbihpbmZvLCBqc29uKTtcclxuXHRpbmZvLnNvdXJjZVNpdGUgPSB1dGlscy5nZXRTb3VyY2VTaXRlRnJvbVVybCh1cmwpO1xyXG5cdGluZm8uZGF0ZUdlbmVyYXRlZCA9IERhdGUubm93KCk7XHJcblx0cmV0dXJuIGluZm87XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldEZyb21Kc29uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlJZGVudGlmaWVyID0gcmVxdWlyZShcIi4uL2dhbGxlcnktaWRlbnRpZmllclwiKS5HYWxsZXJ5SWRlbnRpZmllcjtcclxuXHJcblxyXG5jbGFzcyBHYWxsZXJ5SW5mbyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZSA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlT3JpZ2luYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlVXBsb2FkZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLnVwbG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQXZlcmFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0NvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5tYWluVGh1bWJuYWlsVXJsID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnRodW1ibmFpbFJvd3MgPSBudWxsO1xyXG5cdFx0dGhpcy5maWxlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdHRoaXMudmlzaWJsZVJlYXNvbiA9IG51bGw7XHJcblx0XHR0aGlzLmxhbmd1YWdlID0gbnVsbDtcclxuXHRcdHRoaXMudHJhbnNsYXRlZCA9IG51bGw7XHJcblx0XHR0aGlzLmFyY2hpdmVyS2V5ID0gbnVsbDtcclxuXHRcdHRoaXMudG9ycmVudENvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMudGFncyA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3NIYXZlTmFtZXNwYWNlID0gbnVsbDtcclxuXHRcdHRoaXMuY3VycmVudFBhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5uZXdlclZlcnNpb25zID0gbnVsbDtcclxuXHRcdHRoaXMuc291cmNlID0gbnVsbDtcclxuXHRcdHRoaXMuc291cmNlU2l0ZSA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVHZW5lcmF0ZWQgPSBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyLFxyXG5cdEdhbGxlcnlJbmZvXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuXHJcbmNvbnN0IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcyA9IFsgXCJiXCIsIFwia2JcIiwgXCJtYlwiLCBcImdiXCIgXTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5UGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgbWF0Y2ggPSAvXFw/KD86KHxbXFx3XFxXXSo/JilwPShbXFwrXFwtXT9cXGQrKSk/Ly5leGVjKHVybCk7XHJcblx0aWYgKG1hdGNoICE9PSBudWxsICYmIG1hdGNoWzFdKSB7XHJcblx0XHRjb25zdCBwYWdlID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdGlmICghTnVtYmVyLmlzTmFOKHBhZ2UpKSB7IHJldHVybiBwYWdlOyB9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IGlkZW50aWZpZXIgPSB0eXBlcy5HYWxsZXJ5SWRlbnRpZmllci5jcmVhdGVGcm9tVXJsKHVybCk7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGFnZSA9IGdldEdhbGxlcnlQYWdlRnJvbVVybCh1cmwpO1xyXG5cdHJldHVybiB7IGlkZW50aWZpZXIsIHBhZ2UgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Qnl0ZXNTaXplRnJvbUxhYmVsKG51bWJlciwgbGFiZWwpIHtcclxuXHRsZXQgaSA9IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcy5pbmRleE9mKGxhYmVsLnRvTG93ZXJDYXNlKCkpO1xyXG5cdGlmIChpIDwgMCkgeyBpID0gMDsgfVxyXG5cdHJldHVybiBNYXRoLmZsb29yKHBhcnNlRmxvYXQobnVtYmVyKSAqIE1hdGgucG93KDEwMjQsIGkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9eKD86KD86W2Etel1bYS16MC05XFwrXFwtXFwuXSo6XFwvKnxcXC97Mix9KShbXlxcL10qKSk/KFxcLz9bXFx3XFxXXSopJC9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybCk7XHJcblxyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgaG9zdCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJleGhlbnRhaVwiOyB9XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZS1oZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJlLWhlbnRhaVwiOyB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwsXHJcblx0Z2V0Qnl0ZXNTaXplRnJvbUxhYmVsLFxyXG5cdGdldFNvdXJjZVNpdGVGcm9tVXJsXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgYXBpU3R5bGUgPSByZXF1aXJlKFwiLi9zdHlsZVwiKTtcclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IFwieC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXJcIjtcclxuXHRpZiAoc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL2dhbGxlcnktcmlnaHQtc2lkZWJhci5jc3NcIik7XHJcblx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R3JvdXBDb250YWluZXIocGFyZW50KSB7XHJcblx0Y29uc3QgaWQgPSBcIngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyLWNvbnRhaW5lclwiO1xyXG5cdGxldCBub2RlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lkfWApO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7XHJcblx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdG5vZGUuY2xhc3NOYW1lID0gYGcyIGdzcCAke2lkfWA7XHJcblx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcblxyXG5cdFx0Y29uc3QgcCA9IHBhcmVudC5wYXJlbnROb2RlO1xyXG5cdFx0aWYgKHAgIT09IG51bGwpIHtcclxuXHRcdFx0cC5jbGFzc0xpc3QuYWRkKFwieC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItY29udGFpbnMtY29udGFpbmVyXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbm9kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGluayhsYWJlbCwgb3JkZXIpIHtcclxuXHRjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dkNVwiKTtcclxuXHRpZiAocGFyZW50ID09PSBudWxsKSB7XHJcblx0XHRyZXR1cm4geyBsaW5rOiBudWxsLCBsaW5rQ29udGFpbmVyOiBudWxsIH07XHJcblx0fVxyXG5cclxuXHQvLyBTdHlsZVxyXG5cdGluc2VydFN0eWxlc2hlZXQoKTtcclxuXHJcblx0Ly8gQ29udGFpbmVyXHJcblx0Y29uc3QgbGlua0dyb3VwID0gZ2V0R3JvdXBDb250YWluZXIocGFyZW50KTtcclxuXHRjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRsaW5rQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItZW50cnlcIjtcclxuXHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKG9yZGVyKSkge1xyXG5cdFx0bGlua0NvbnRhaW5lci5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGltZy5zcmMgPSBhcGlTdHlsZS5nZXRBcnJvd0ljb25VcmwoKTtcclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG5cdGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgXCIpKTtcclxuXHJcblx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGxpbmsudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuXHRsaW5rR3JvdXAuYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7XHJcblxyXG5cdHJldHVybiB7IGxpbmssIGxpbmtDb250YWluZXIgfTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNyZWF0ZUxpbmtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBvdmVycmlkZUF0dHJpYnV0ZU5hbWUgPSBcImRhdGEteC1vdmVycmlkZS1wYWdlLXR5cGVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRPdmVycmlkZSh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3ZlcnJpZGUoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0cmV0dXJuIHZhbHVlID8gdmFsdWUgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoZG9jLCBsb2NhdGlvbikge1xyXG5cdGNvbnN0IG92ZXJyaWRlVHlwZSA9IGdldE92ZXJyaWRlKCk7XHJcblx0aWYgKG92ZXJyaWRlVHlwZSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIG92ZXJyaWRlVHlwZTtcclxuXHR9XHJcblxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hib3hcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNlYXJjaFwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPWZhdmNhdF1cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImZhdm9yaXRlc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjaTE+aDFcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImltYWdlXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIi5nbSBoMSNnblwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZ2FsbGVyeVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9vdXRlclwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2V0dGluZ3NcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3RvcnJlbnRpbmZvXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJ0b3JyZW50SW5mb1wiO1xyXG5cdH1cclxuXHJcblx0bGV0IG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImJvZHk+LmQ+cFwiKTtcclxuXHRpZiAoXHJcblx0XHQobiAhPT0gbnVsbCAmJiAvZ2FsbGVyeVxccytoYXNcXHMrYmVlblxccytyZW1vdmVkL2kudGVzdChuLnRleHRDb250ZW50KSkgfHxcclxuXHRcdGRvYy5xdWVyeVNlbGVjdG9yKFwiLmV6ZV9kZ2FsbGVyeV90YWJsZVwiKSAhPT0gbnVsbCkgeyAvLyBlemUgcmVzdXJyZWN0aW9uXHJcblx0XHRyZXR1cm4gXCJkZWxldGVkR2FsbGVyeVwiO1xyXG5cdH1cclxuXHJcblx0biA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0aWYgKG4gIT09IG51bGwgJiYgbG9jYXRpb24gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IHAgPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdGlmIChcclxuXHRcdFx0bi5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT09IGxvY2F0aW9uLmhyZWYgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgMykgIT09IFwiL3QvXCIgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgNSkgIT09IFwiL2ltZy9cIikge1xyXG5cdFx0XHRyZXR1cm4gXCJwYW5kYVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVW5rbm93blxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0LFxyXG5cdGdldE92ZXJyaWRlLFxyXG5cdHNldE92ZXJyaWRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gc2hvd09uQ2xpY2soc2VsZWN0b3IsIHVybCwgc2l6ZSkge1xyXG5cdC8qIGdsb2JhbHMgcG9wVXAgKi9cclxuXHRsZXQgd2lkdGggPSA2NzU7XHJcblx0bGV0IGhlaWdodCA9IDQxNTtcclxuXHRpZiAoc2l6ZSAhPT0gbnVsbCAmJiB0eXBlb2Yoc2l6ZSkgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdCh7d2lkdGgsIGhlaWdodH0gPSBzaXplKTtcclxuXHR9XHJcblxyXG5cdHJlcXVpcmUoXCIuLi9qYXZhc2NyaXB0XCIpLmluamVjdCgoc2VsZWN0b3IsIHVybCwgd2lkdGgsIGhlaWdodCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXR1cm4gcG9wVXAodXJsLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fSwgWyBzZWxlY3RvciwgdXJsLCB3aWR0aCwgaGVpZ2h0IF0pO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0c2hvd09uQ2xpY2ssXHJcblx0c2l6ZXM6IHtcclxuXHRcdGZhdm9yaXRlczogeyB3aWR0aDogNjc1LCBoZWlnaHQ6IDQxNSB9XHJcblx0fVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGlzRGFyaygpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluZGV4T2YoXCJleGhlbnRhaVwiKSA+PSAwIHx8XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwieC1mb3JjZS1kYXJrXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RG9jdW1lbnREYXJrRmxhZygpIHtcclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIngtaXMtZGFya1wiLCBpc0RhcmsoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFycm93SWNvblVybCgpIHtcclxuXHRyZXR1cm4gKGlzRGFyaygpID8gXCJodHRwczovL2V4aGVudGFpLm9yZy9pbWcvbXIuZ2lmXCIgOiBcImh0dHBzOi8vZWhndC5vcmcvZy9tci5naWZcIik7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpc0RhcmssXHJcblx0c2V0RG9jdW1lbnREYXJrRmxhZyxcclxuXHRnZXRBcnJvd0ljb25VcmxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi54LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1jb250YWluZXJ7bWFyZ2luLXRvcDotMjVweDtwYWRkaW5nLWJvdHRvbTowO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyLWVudHJ5e21hcmdpbi10b3A6MjVweH1kaXYjZ3JpZ2h0LngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyLWNvbnRhaW5zLWNvbnRhaW5lcntvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmF1dG99XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRlcih1c2Vybk5hbWUpIHtcclxuXHRyZXR1cm4gYC91cGxvYWRlci8ke3VzZXJuTmFtZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYXRlZ29yeShjYXRlZ29yeSkge1xyXG5cdHJldHVybiBgLyR7Y2F0ZWdvcnl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmF2b3JpdGVzUG9wdXAoaWQsIHRva2VuKSB7XHJcblx0cmV0dXJuIGAvZ2FsbGVyeXBvcHVwcy5waHA/Z2lkPSR7aWR9JnQ9JHt0b2tlbn0mYWN0PWFkZGZhdmA7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHR1cGxvYWRlcixcclxuXHRjYXRlZ29yeSxcclxuXHRmYXZvcml0ZXNQb3B1cFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuY2xhc3MgRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCByZXNwb25zZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkZldGNoRXJyb3JcIjtcclxuXHRcdHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuXHRjb25zdHJ1Y3RvcihyZWFkeVN0YXRlLCByZXNwb25zZUhlYWRlcnMsIHJlc3BvbnNlVGV4dCwgc3RhdHVzLCBzdGF0dXNUZXh0KSB7XHJcblx0XHR0aGlzLnJlYWR5U3RhdGUgPSByZWFkeVN0YXRlO1xyXG5cdFx0dGhpcy5yZXNwb25zZUhlYWRlcnMgPSByZXNwb25zZUhlYWRlcnM7XHJcblx0XHR0aGlzLnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcclxuXHRcdHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG5cdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFByb2dyZXNzRXZlbnQge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aENvbXB1dGFibGUsIGxvYWRlZCwgdG90YWwpIHtcclxuXHRcdHRoaXMubGVuZ3RoQ29tcHV0YWJsZSA9IGxlbmd0aENvbXB1dGFibGU7XHJcblx0XHR0aGlzLmxvYWRlZCA9IGxvYWRlZDtcclxuXHRcdHRoaXMudG90YWwgPSB0b3RhbDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRSZXNwb25zZUhlYWRlck1hcChhbGxIZWFkZXJzKSB7XHJcblx0Y29uc3QgcmVzcG9uc2VIZWFkZXJzID0ge307XHJcblxyXG5cdGNvbnN0IHJlID0gL1xccyooLiopXFxzKjpcXHMqKC4qKVxccyovO1xyXG5cdGZvciAoY29uc3QgbGluZSBvZiBhbGxIZWFkZXJzLnJlcGxhY2UoL1xcclxcblxccyokLywgXCJcIikuc3BsaXQoXCJcXHJcXG5cIikpIHtcclxuXHRcdGNvbnN0IG0gPSByZS5leGVjKGxpbmUpO1xyXG5cdFx0aWYgKG0gIT09IG51bGwpIHtcclxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzW21bMV0udG9Mb3dlckNhc2UoKV0gPSBtWzJdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3BvbnNlSGVhZGVycztcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFhoclJlc3BvbnNlKHhocikge1xyXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoXHJcblx0XHR4aHIucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSksXHJcblx0XHR4aHIucmVzcG9uc2VUZXh0LFxyXG5cdFx0eGhyLnN0YXR1cyxcclxuXHRcdHhoci5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHQvL2NvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdHhoci50aW1lb3V0ID0gdGltZW91dDtcclxuXHRcdGlmICh0eXBlb2Yob3ZlcnJpZGVNaW1lVHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUob3ZlcnJpZGVNaW1lVHlwZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoaGVhZGVycyAhPT0gbnVsbCAmJiB0eXBlb2YoaGVhZGVycykgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0Zm9yIChjb25zdCBrIGluIGhlYWRlcnMpIHtcclxuXHRcdFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBrKSkgeyBjb250aW51ZTsgfVxyXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIGhlYWRlcnNba10pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoY29udmVydFhoclJlc3BvbnNlKHhocikpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke3hoci5zdGF0dXNUZXh0fSAoJHt4aHIuc3RhdHVzfSlgLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5zZW5kKGRhdGEpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydEdtUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0cmVzcG9uc2UucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHJlc3BvbnNlLnJlc3BvbnNlSGVhZGVycyksXHJcblx0XHRyZXNwb25zZS5yZXNwb25zZVRleHQsXHJcblx0XHRyZXNwb25zZS5zdGF0dXMsXHJcblx0XHRyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdGNvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IGRldGFpbHMgPSB7XHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcclxuXHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogb3ZlcnJpZGVNaW1lVHlwZSxcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0YmluYXJ5OiBiaW5hcnksXHJcblx0XHRcdHN5bmNocm9ub3VzOiBmYWxzZSxcclxuXHRcdFx0dGltZW91dDogdGltZW91dFxyXG5cdFx0fTtcclxuXHJcblx0XHRkZXRhaWxzLm9ubG9hZCA9IChlKSA9PiByZXNvbHZlKGNvbnZlcnRHbVJlc3BvbnNlKGUpKTtcclxuXHRcdGRldGFpbHMub25lcnJvciA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7ZS5zdGF0dXNUZXh0fSAoJHtlLnN0YXR1c30pYCwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub25hYm9ydCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub250aW1lb3V0ID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob25wcm9ncmVzcykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRkZXRhaWxzLm9ucHJvZ3Jlc3MgPSAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z20ueG1sSHR0cFJlcXVlc3QoZGV0YWlscyk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc0dtU3VwcG9ydGVkKHVzZUdtKSB7XHJcblx0cmV0dXJuICh1c2VHbSAmJiB0eXBlb2YoZ20ueG1sSHR0cFJlcXVlc3QpID09PSBcImZ1bmN0aW9uXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJHRVRcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHJlcXVlc3Q6IHJlcXVlc3QsXHJcblx0Z2V0OiBnZXQsXHJcblx0cG9zdDogcG9zdCxcclxuXHRnbToge1xyXG5cdFx0cmVxdWVzdDogcmVxdWVzdEdtLFxyXG5cdFx0Z2V0OiBnZXRHbSxcclxuXHRcdHBvc3Q6IHBvc3RHbSxcclxuXHR9XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJnbSB4LXJlc3VycmVjdGVkXFxcIj5cXHJcXG5cXHQ8ZGl2IGlkPVxcXCJnbGVmdFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBpZD1cXFwiZ2QxXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2PjxpbWcgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtbWFpbi10aHVtYm5haWxcXFwiIHN0eWxlPVxcXCJtYXgtd2lkdGg6MjUwcHg7bWF4LWhlaWdodDozNzVweDtkaXNwbGF5OmJsb2NrO1xcXCIgLz48L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGlkPVxcXCJnZDJcXFwiPlxcclxcblxcdFxcdDxoMSBpZD1cXFwiZ25cXFwiPjwvaDE+XFxyXFxuXFx0XFx0PGgxIGlkPVxcXCJnalxcXCI+PC9oMT5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGlkPVxcXCJncmlnaHRcXFwiPlxcclxcblxcdFxcdDxkaXYgaWQ9XFxcImdkNVxcXCI+XFxyXFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcImczIGdzcFxcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtZ2FsbGVyeS11bmF2YWlsYWJsZVxcXCI+PGltZyBjbGFzcz1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1tci1naWZcXFwiIC8+IDxhIHRpdGxlPVxcXCJTb21lIGluZm9ybWF0aW9uIGhhcyBiZWVuIHJlc3VycmVjdGVkXFxcIj5HYWxsZXJ5IHVuYXZhaWxhYmxlPC9hPjwvcD5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG5cXHQ8ZGl2IGlkPVxcXCJnbWlkXFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJnZDNcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcImdkY1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcImNzXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1jYXRlZ29yeVxcXCI+PC9hPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcImdkblxcXCI+PGEgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtdXBsb2FkZXJcXFwiPjwvYT48L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJnZGRcXFwiPlxcclxcblxcdFxcdFxcdFxcdDx0YWJsZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5Qb3N0ZWQ6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWRhdGUtdXBsb2FkZWRcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHIgY2xhc3M9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtaGlkZGVuLWluZm9cXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+UGFyZW50OjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQyXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1wYXJlbnRcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5WaXNpYmxlOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQyXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC12aXNpYmxlXFxcIj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWxhbmd1YWdlLXJvd1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5MYW5ndWFnZTo8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MlxcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtbGFuZ3VhZ2VcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5GaWxlIFNpemU6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWZpbGUtc2l6ZVxcXCI+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDFcXFwiPkxlbmd0aDo8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MlxcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtZmlsZS1jb3VudFxcXCI+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ciBjbGFzcz1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1oaWRkZW4taW5mb1xcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5GYXZvcml0ZWQ6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWZhdm9yaXRlLWNvdW50XFxcIj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0PC90YWJsZT5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJnZHJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDx0YWJsZT5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGlkPVxcXCJncnQxXFxcIj5SYXRpbmc6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgaWQ9XFxcImdydDJcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgaWQ9XFxcInJhdGluZ19pbWFnZVxcXCIgY2xhc3M9XFxcImlyXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1wb3NpdGlvbjotODBweCAtMXB4XFxcIj48L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBpZD1cXFwiZ3J0M1xcXCI+PHNwYW4gaWQ9XFxcInJhdGluZ19jb3VudFxcXCI+PC9zcGFuPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGlkPVxcXCJyYXRpbmdfbGFiZWxcXFwiIGNvbHNwYW49XFxcIjNcXFwiPkF2ZXJhZ2U6IDxzcGFuIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWF2ZXJhZ2UtcmF0aW5nXFxcIj48L3NwYW4+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdDwvdGFibGU+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PGRpdiBpZD1cXFwiZ2RmXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IHN0eWxlPVxcXCJmbG9hdDpsZWZ0O2N1cnNvcjpwb2ludGVyXFxcIiBpZD1cXFwiZmF2XFxcIj48L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IHN0eWxlPVxcXCJmbG9hdDpsZWZ0XFxcIj4mbmJzcDsgPGEgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtZmF2b3JpdGVzLWxpbmtcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aW1nIGNsYXNzPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LW1yLWdpZlxcXCIgLz4gQWRkIHRvIEZhdm9yaXRlczwvYT48L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJjXFxcIj48L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJnZDRcXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcInRhZ2xpc3RcXFwiPlxcclxcblxcdFxcdFxcdFxcdDx0YWJsZT48dGJvZHkgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtdGFnc1xcXCI+PC90Ym9keT48L3RhYmxlPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcImNcXFwiPjwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImNcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcImFzbVxcXCI+PC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZ3RiXFxcIj5cXHJcXG5cXHQ8cCBjbGFzcz1cXFwiZ3BjXFxcIj5TaG93aW5nIDAgLSAwIG9mIDAgaW1hZ2VzPC9wPlxcclxcblxcdDx0YWJsZSBjbGFzcz1cXFwicHR0XFxcIj48dHI+PHRkIGNsYXNzPVxcXCJwdGRzXFxcIj48YSBocmVmPVxcXCI/cD0wXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1wYWdlLXVybFxcXCI+PC9hPjwvdGQ+PC90cj48L3RhYmxlPlxcclxcbjwvZGl2PlwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCB0b0NvbW1vbkpzb24gPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby9jb21tb24tanNvblwiKS50b0NvbW1vbkpzb247XHJcblxyXG5jb25zdCByZUphdmFzY3JpcHRHb3RvTmV4dCA9IC9zZXRUaW1lb3V0XFxzKlxcKFxccyooZ290b25leHR8XCJnb3RvbmV4dFxcKFxcKVwiKVxccyosXFxzKlxcZCtcXHMqXFwpLztcclxuY29uc3QgZmlsZVNpemVMYWJlbHMgPSBbIFwiQlwiLCBcIktCXCIsIFwiTUJcIiwgXCJHQlwiIF07XHJcblxyXG5jb25zdCBjYXRlZ29yeUluZm9zID0ge1xyXG5cdFwiZG91amluc2hpXCI6IHsgbmFtZTogXCJEb3VqaW5zaGlcIiwgdXJsOiBcImRvdWppbnNoaVwiLCBjbGFzczogXCJjdDJcIiB9LFxyXG5cdFwibWFuZ2FcIjogeyBuYW1lOiBcIk1hbmdhXCIsIHVybDogXCJtYW5nYVwiLCBjbGFzczogXCJjdDNcIiB9LFxyXG5cdFwiYXJ0aXN0Y2dcIjogeyBuYW1lOiBcIkFydGlzdCBDR1wiLCB1cmw6IFwiYXJ0aXN0Y2dcIiwgY2xhc3M6IFwiY3Q0XCIgfSxcclxuXHRcImdhbWVjZ1wiOiB7IG5hbWU6IFwiR2FtZSBDR1wiLCB1cmw6IFwiZ2FtZWNnXCIsIGNsYXNzOiBcImN0NVwiIH0sXHJcblx0XCJ3ZXN0ZXJuXCI6IHsgbmFtZTogXCJXZXN0ZXJuXCIsIHVybDogXCJ3ZXN0ZXJuXCIsIGNsYXNzOiBcImN0YVwiIH0sXHJcblx0XCJub24taFwiOiB7IG5hbWU6IFwiTm9uLUhcIiwgdXJsOiBcIm5vbi1oXCIsIGNsYXNzOiBcImN0OVwiIH0sXHJcblx0XCJpbWFnZXNldFwiOiB7IG5hbWU6IFwiSW1hZ2UgU2V0XCIsIHVybDogXCJpbWFnZXNldFwiLCBjbGFzczogXCJjdDZcIiB9LFxyXG5cdFwiY29zcGxheVwiOiB7IG5hbWU6IFwiQ29zcGxheVwiLCB1cmw6IFwiY29zcGxheVwiLCBjbGFzczogXCJjdDdcIiB9LFxyXG5cdFwiYXNpYW5wb3JuXCI6IHsgbmFtZTogXCJBc2lhbiBQb3JuXCIsIHVybDogXCJhc2lhbnBvcm5cIiwgY2xhc3M6IFwiY3Q4XCIgfSxcclxuXHRcIm1pc2NcIjogeyBuYW1lOiBcIk1pc2NcIiwgdXJsOiBcIm1pc2NcIiwgY2xhc3M6IFwiY3QxXCIgfSxcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBvbldpbmRvd0JlZm9yZVNjcmlwdEV4ZWN1dGUoZXZlbnQpIHtcclxuXHRjb25zdCByZW1vdmUgPSAoIWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgJiYgcmVKYXZhc2NyaXB0R290b05leHQudGVzdChldmVudC50YXJnZXQudGV4dENvbnRlbnQpKTtcclxuXHRpZiAoIXJlbW92ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpIHtcclxuXHRcdGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGV2ZW50LnRhcmdldCk7XHJcblx0fVxyXG5cclxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmxvY2tSZWRpcmVjdGlvbnMoKSB7XHJcblx0cmVxdWlyZShcIi4uL2phdmFzY3JpcHRcIikuaW5qZWN0KCgpID0+IHtcclxuXHRcdGlmICh0eXBlb2Yod2luZG93LmdvdG9uZXh0KSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdHdpbmRvdy5nb3RvbmV4dCA9ICgpID0+IHt9O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IFwieC1nYWxsZXJ5LXJlc3VycmVjdFwiO1xyXG5cdGlmICghc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHtcclxuXHRcdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcclxuXHRcdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbnVwRG9jdW1lbnQoKSB7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5PnNjcmlwdCxib2R5PmRpdi5kXCIpKSB7XHJcblx0XHRpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcblx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVEb21Ob2Rlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XHJcblx0aWYgKCFzb3VyY2UgfHwgIWRlc3RpbmF0aW9uKSB7IHJldHVybjsgfVxyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBzb3VyY2UuY2hpbGROb2Rlcykge1xyXG5cdFx0ZGVzdGluYXRpb24uYXBwZW5kQ2hpbGQobm9kZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlRG9jdW1lbnQoaHRtbFNvdXJjZSwgZGVzdGluYXRpb24pIHtcclxuXHRjb25zdCBnYWxsZXJ5SHRtbERvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbFNvdXJjZSwgXCJ0ZXh0L2h0bWxcIik7XHJcblx0bW92ZURvbU5vZGVzKGdhbGxlcnlIdG1sRG9jLmhlYWQsIGRlc3RpbmF0aW9uLmhlYWQpO1xyXG5cdG1vdmVEb21Ob2RlcyhnYWxsZXJ5SHRtbERvYy5ib2R5LCBkZXN0aW5hdGlvbi5ib2R5KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0R2FsbGVyeUh0bWwoaWRlbnRpZmllcikge1xyXG5cdGNvbnN0IGFwaVN0eWxlID0gcmVxdWlyZShcIi4uL2FwaS9zdHlsZVwiKTtcclxuXHRjb25zdCBuYXZCYXIgPSBhcGlTdHlsZS5pc0RhcmsoKSA/XHJcblx0XHRyZXF1aXJlKFwiLi9uYXZpZ2F0aW9uLWJhci1kYXJrLmh0bWxcIikgOlxyXG5cdFx0cmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXItbGlnaHQuaHRtbFwiKTtcclxuXHJcblx0bW92ZURvY3VtZW50KG5hdkJhciwgZG9jdW1lbnQpO1xyXG5cdG1vdmVEb2N1bWVudChyZXF1aXJlKFwiLi9nYWxsZXJ5Lmh0bWxcIiksIGRvY3VtZW50KTtcclxuXHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblx0aWYgKCFib2R5KSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBpbWFnZVVybCA9IGFwaVN0eWxlLmdldEFycm93SWNvblVybCgpO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWcueC1nYWxsZXJ5LXJlc3VycmVjdC1tci1naWZcIikpIHtcclxuXHRcdG5vZGUuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlVXJsKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdhbGxlcnlJbmZvRmV0Y2ggPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby9mZXRjaFwiKTtcclxuXHRjb25zdCBpbmZvID0gYXdhaXQgZ2FsbGVyeUluZm9GZXRjaC5nZXQoaWRlbnRpZmllcik7XHJcblx0aWYgKGluZm8gPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtcGFnZS11cmxcIik7XHJcblx0aWYgKG4gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcclxuXHRcdG4uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgJHtsb2MucHJvdG9jb2x9Ly8ke2xvYy5ob3N0fS9nLyR7aW5mby5pZGVudGlmaWVyLmlkfS8ke2luZm8uaWRlbnRpZmllci50b2tlbn0vYCk7XHJcblx0fVxyXG5cclxuXHRzZXRHYWxsZXJ5SW5mbyhib2R5LCBpbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0R2FsbGVyeUluZm8oaHRtbCwgaW5mbykge1xyXG5cdGNvbnN0IHVybHMgPSByZXF1aXJlKFwiLi4vYXBpL3VybHNcIik7XHJcblx0Y29uc3QgcG9wdXBzID0gcmVxdWlyZShcIi4uL2FwaS9wb3B1cHNcIik7XHJcblx0bGV0IG47XHJcblxyXG5cdC8vIFRpdGxlXHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI2duXCIpLnRleHRDb250ZW50ID0gaW5mby50aXRsZTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2pcIikudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlT3JpZ2luYWw7XHJcblxyXG5cdC8vIFRodW1ibmFpbFxyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LW1haW4tdGh1bWJuYWlsXCIpLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbmZvLm1haW5UaHVtYm5haWxVcmwpO1xyXG5cclxuXHQvLyBVcGxvYWRlclxyXG5cdG4gPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC11cGxvYWRlclwiKTtcclxuXHRuLnRleHRDb250ZW50ID0gaW5mby51cGxvYWRlcjtcclxuXHRuLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJscy51cGxvYWRlcihpbmZvLnVwbG9hZGVyKSk7XHJcblxyXG5cdC8vIENhdGVnb3J5XHJcblx0biA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWNhdGVnb3J5XCIpO1xyXG5cdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2F0ZWdvcnlJbmZvcywgaW5mby5jYXRlZ29yeSkpIHtcclxuXHRcdGNvbnN0IGNhdGVnb3J5SW5mbyA9IGNhdGVnb3J5SW5mb3NbaW5mby5jYXRlZ29yeV07XHJcblx0XHRuLnRleHRDb250ZW50ID0gY2F0ZWdvcnlJbmZvLm5hbWU7XHJcblx0XHRuLmNsYXNzTGlzdC5hZGQoY2F0ZWdvcnlJbmZvLmNsYXNzKTtcclxuXHRcdG4uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmxzLmNhdGVnb3J5KGNhdGVnb3J5SW5mby51cmwpKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bi50ZXh0Q29udGVudCA9IGluZm8uY2F0ZWdvcnk7XHJcblx0fVxyXG5cclxuXHQvLyBSYXRpbmdcclxuXHRjb25zdCBwb3MgPSBnZXRCYWNrZ3JvdW5kUG9zaXRpb25Gb3JSYXRpbmcoaW5mby5yYXRpbmdBdmVyYWdlKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nX2ltYWdlXCIpLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGAke3Bvcy54fXB4ICR7cG9zLnl9cHhgO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWF2ZXJhZ2UtcmF0aW5nXCIpLnRleHRDb250ZW50ID0gaW5mby5yYXRpbmdBdmVyYWdlLnRvRml4ZWQoMik7XHJcblxyXG5cdC8vIEluZm9cclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC1kYXRlLXVwbG9hZGVkXCIpLnRleHRDb250ZW50ID0gZ2V0VGltZXN0YW1wRGF0ZVN0cmluZyhpbmZvLmRhdGVVcGxvYWRlZCk7XHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtdmlzaWJsZVwiKS50ZXh0Q29udGVudCA9IChpbmZvLnZpc2libGUgPyBcIlllc1wiIDogXCJOb1wiKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC1maWxlLXNpemVcIikudGV4dENvbnRlbnQgPSBnZXRQcmV0dHlGaWxlU2l6ZShpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSk7XHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtZmlsZS1jb3VudFwiKS50ZXh0Q29udGVudCA9IHBsdXJhbChpbmZvLmZpbGVDb3VudCwgXCIgcGFnZVwiLCBcIiBwYWdlc1wiKTtcclxuXHRpZiAodHlwZW9mKGluZm8ubGFuZ3VhZ2UpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRjb25zdCBzdWZmaXggPSBpbmZvLnRyYW5zbGF0ZWQgPyBgIFxceGEwYCA6IFwiXCI7IC8vICZuYnNwO1xyXG5cdFx0biA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWxhbmd1YWdlXCIpO1xyXG5cdFx0bi50ZXh0Q29udGVudCA9IGAke2luZm8ubGFuZ3VhZ2V9JHtzdWZmaXh9YDtcclxuXHRcdGlmIChpbmZvLnRyYW5zbGF0ZWQpIHtcclxuXHRcdFx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdFx0XHRzcGFuLmNsYXNzTmFtZSA9IFwiaGFscFwiO1xyXG5cdFx0XHRzcGFuLnRpdGxlID0gXCJUaGlzIGdhbGxlcnkgaGFzIGJlZW4gdHJhbnNsYXRlZCBmcm9tIHRoZSBvcmlnaW5hbCBsYW5ndWFnZSB0ZXh0LlwiO1xyXG5cdFx0XHRzcGFuLnRleHRDb250ZW50ID0gXCJUUlwiO1xyXG5cdFx0XHRuLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC1sYW5ndWFnZS1yb3dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH1cclxuXHJcblx0Ly8gVGFnc1xyXG5cdGNvbnN0IHRhZ1RhYmxlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtdGFnc1wiKTtcclxuXHRmb3IgKGNvbnN0IG5hbWVzcGFjZSBpbiBpbmZvLnRhZ3MpIHtcclxuXHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluZm8udGFncywgbmFtZXNwYWNlKSkgeyBjb250aW51ZTsgfVxyXG5cdFx0Y29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuXHRcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRkLmNsYXNzTmFtZSA9IFwidGNcIjtcclxuXHRcdHRkLnRleHRDb250ZW50ID0gYCR7bmFtZXNwYWNlfTpgO1xyXG5cdFx0cm93LmFwcGVuZENoaWxkKHRkKTtcclxuXHJcblx0XHR0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHJvdy5hcHBlbmRDaGlsZCh0ZCk7XHJcblxyXG5cdFx0Zm9yIChjb25zdCB0YWcgb2YgaW5mby50YWdzW25hbWVzcGFjZV0pIHtcclxuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0ZGl2LmNsYXNzTmFtZSA9IFwiZ3RcIjtcclxuXHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdFx0XHRhLmhyZWYgPSBgL3RhZy8ke3RhZ31gO1xyXG5cdFx0XHRhLnRleHRDb250ZW50ID0gdGFnO1xyXG5cdFx0XHRkaXYuYXBwZW5kQ2hpbGQoYSk7XHJcblx0XHRcdHRkLmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGFnVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuXHR9XHJcblxyXG5cdC8vIEZhdm9yaXRlc1xyXG5cdGNvbnN0IGZhdm9yaXRlVXJsID0gdXJscy5mYXZvcml0ZXNQb3B1cChpbmZvLmlkZW50aWZpZXIuaWQsIGluZm8uaWRlbnRpZmllci50b2tlbik7XHJcblx0Y29uc3QgZmF2b3JpdGVMaW5rU2VsZWN0b3IgPSBcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWZhdm9yaXRlcy1saW5rXCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmYXZvcml0ZUxpbmtTZWxlY3Rvcikuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBmYXZvcml0ZVVybCk7XHJcblx0cG9wdXBzLnNob3dPbkNsaWNrKFwiI2dkZlwiLCBmYXZvcml0ZVVybCwgcG9wdXBzLnNpemVzLmZhdm9yaXRlcyk7XHJcblxyXG5cdC8vIERvd25sb2FkIG1ldGFkYXRhXHJcblx0c2V0dXBEb3dubG9hZExpbmsoaW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJhY2tncm91bmRQb3NpdGlvbkZvclJhdGluZyhyYXRpbmcpIHtcclxuXHRyYXRpbmcgPSBNYXRoLnJvdW5kKHJhdGluZyAqIDIuMCk7XHJcblx0cmF0aW5nID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAsIHJhdGluZykpO1xyXG5cdGNvbnN0IHggPSAoNSAtIE1hdGguY2VpbChyYXRpbmcgLyAyKSkgKiAtMTY7XHJcblx0Y29uc3QgeSA9IChyYXRpbmcgJSAyID09PSAwKSA/IC0xIDogLTIxO1xyXG5cdHJldHVybiB7IHgsIHkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGx1cmFsKG51bWJlciwgc2luZ3VsYXJMYWJlbCwgcGx1cmFsTGFiZWwpIHtcclxuXHRjb25zdCBsYWJlbCA9IChudW1iZXIgPT09IDEgPyBzaW5ndWxhckxhYmVsIDogcGx1cmFsTGFiZWwpO1xyXG5cdHJldHVybiBgJHtudW1iZXJ9JHtsYWJlbH1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXBEYXRlU3RyaW5nKHRpbWVzdGFtcCkge1xyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xyXG5cdGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuXHRjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuXHRjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuXHRjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gJHtob3VyfToke21pbnV0ZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcmV0dHlGaWxlU2l6ZShieXRlcykge1xyXG5cdGNvbnN0IGlpID0gZmlsZVNpemVMYWJlbHMubGVuZ3RoIC0gMTtcclxuXHRsZXQgaSA9IDA7XHJcblx0d2hpbGUgKGkgPCBpaSAmJiBieXRlcyA+PSAxMDI0KSB7XHJcblx0XHRieXRlcyAvPSAxMDI0O1xyXG5cdFx0KytpO1xyXG5cdH1cclxuXHRyZXR1cm4gYCR7Ynl0ZXMudG9GaXhlZChpID09PSAwID8gMCA6IDIpfSAke2ZpbGVTaXplTGFiZWxzW2ldfWA7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXR1cERvd25sb2FkTGluayhpbmZvKSB7XHJcblx0Y29uc3QgZ2FsbGVyeVJpZ2h0U2lkZWJhciA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1yaWdodC1zaWRlYmFyXCIpO1xyXG5cdGNvbnN0IGxpbmsgPSBnYWxsZXJ5UmlnaHRTaWRlYmFyLmNyZWF0ZUxpbmsoXCJNZXRhZGF0YSBKU09OXCIsIDApLmxpbms7XHJcblx0aWYgKGxpbmsgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJpbmZvLmpzb25cIik7XHJcblx0bGluay5ocmVmID0gY3JlYXRlRG93bmxvYWREYXRhVXJsKGluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEb3dubG9hZERhdGFVcmwoaW5mbykge1xyXG5cdGlmIChpbmZvID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm9TdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0b0NvbW1vbkpzb24oaW5mbyksIG51bGwsIFwiICBcIik7XHJcblx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKFsgaW5mb1N0cmluZyBdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xyXG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuXHRjb25zdCBjdXJyZW50UGFnZVR5cGUgPSBwYWdlVHlwZS5nZXQoZG9jdW1lbnQsIGxvY2F0aW9uKTtcclxuXHRpZiAoY3VycmVudFBhZ2VUeXBlICE9PSBcImRlbGV0ZWRHYWxsZXJ5XCIpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGJsb2NrUmVkaXJlY3Rpb25zKCk7XHJcblxyXG5cdGNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHNcIik7XHJcblx0Y29uc3QgaW5mbyA9IHV0aWxzLmdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwobG9jYXRpb24uaHJlZik7XHJcblx0aWYgKGluZm8gPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGluc2VydFN0eWxlc2hlZXQoKTtcclxuXHRjbGVhbnVwRG9jdW1lbnQoKTtcclxuXHRpbnNlcnRHYWxsZXJ5SHRtbChpbmZvLmlkZW50aWZpZXIpO1xyXG5cclxuXHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIngtcGFnZS1yZXN1cnJlY3RlZFwiKTtcclxuXHRwYWdlVHlwZS5zZXRPdmVycmlkZShjdXJyZW50UGFnZVR5cGUpO1xyXG59XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVzY3JpcHRleGVjdXRlXCIsIG9uV2luZG93QmVmb3JlU2NyaXB0RXhlY3V0ZSwgdHJ1ZSk7XHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJuYlxcXCIgY2xhc3M9XFxcIm5vc2VsIHgtcmVzdXJyZWN0ZWRcXFwiPlxcclxcblxcdDxkaXY+PGEgY2xhc3M9XFxcIm5id1xcXCIgaHJlZj1cXFwiL1xcXCI+RnJvbnQ8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+IFBhZ2U8L3NwYW4+PC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3dhdGNoZWRcXFwiPldhdGNoZWQ8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvcG9wdWxhclxcXCI+UG9wdWxhcjwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi90b3JyZW50cy5waHBcXFwiPlRvcnJlbnRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL2Zhdm9yaXRlcy5waHBcXFwiPkZhdjxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj5vcml0ZTwvc3Bhbj5zPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3Vjb25maWcucGhwXFxcIj5TZXR0aW5nczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi91cGxvYWQvbWFuYWdlLnBocFxcXCI+PHNwYW4gY2xhc3M9XFxcIm5idzJcXFwiPk15IDwvc3Bhbj5VcGxvYWRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL215dGFnc1xcXCI+TXkgVGFnczwvYT48L2Rpdj5cXHJcXG48L2Rpdj5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBpZD1cXFwibmJcXFwiIGNsYXNzPVxcXCJub3NlbCB4LXJlc3VycmVjdGVkXFxcIj5cXHJcXG5cXHQ8ZGl2PjxhIGNsYXNzPVxcXCJuYndcXFwiIGhyZWY9XFxcIi9cXFwiPkZyb250PHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPiBQYWdlPC9zcGFuPjwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi93YXRjaGVkXFxcIj5XYXRjaGVkPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3BvcHVsYXJcXFwiPlBvcHVsYXI8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvdG9ycmVudHMucGhwXFxcIj5Ub3JyZW50czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9mYXZvcml0ZXMucGhwXFxcIj5GYXY8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+b3JpdGU8L3NwYW4+czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9ob21lLnBocFxcXCI+PHNwYW4gY2xhc3M9XFxcIm5idzJcXFwiPk15IDwvc3Bhbj5Ib21lPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiaHR0cHM6Ly91cGxvYWQuZS1oZW50YWkub3JnL21hbmFnZS5waHBcXFwiPjxzcGFuIGNsYXNzPVxcXCJuYncyXFxcIj5NeSA8L3NwYW4+VXBsb2FkczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi90b3BsaXN0LnBocFxcXCI+VG9wbGlzdHM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvYm91bnR5LnBocFxcXCI+Qm91bnRpZXM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvbmV3cy5waHBcXFwiPk5ld3M8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL2ZvcnVtcy5lLWhlbnRhaS5vcmcvXFxcIj5Gb3J1bXM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL2Vod2lraS5vcmcvXFxcIj5XaWtpPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiaHR0cHM6Ly9oZW50YWl2ZXJzZS5vcmcvXFxcIiBvbmNsaWNrPVxcXCJwb3BVcCgnaHR0cHM6Ly9oZW50YWl2ZXJzZS5vcmcvJywxMjUwLDcyMCk7IHJldHVybiBmYWxzZVxcXCI+SDxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj5lbnRhaTwvc3Bhbj5WPHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPmVyc2U8L3NwYW4+PC9hPjwvZGl2PlxcclxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJib2R5Pjpub3QoLngtcmVzdXJyZWN0ZWQpOm5vdCgueC1wb3B1cC1tZW51KXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fSN4LWdhbGxlcnktcmVzdXJyZWN0LWNhdGVnb3J5e3RleHQtZGVjb3JhdGlvbjpub25lfS54LWdhbGxlcnktcmVzdXJyZWN0LWhpZGRlbi1pbmZve2Rpc3BsYXk6bm9uZX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvUHJvbWlzZShmbiwgc2VsZikge1xyXG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNvbHZlKGZuLmFwcGx5KHNlbGYsIGFyZ3MpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJlamVjdChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufVxyXG5cclxuY29uc3QgZ20gPSAoKG9iamVjdHMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgdiA9IEdNOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHRcdGlmICh2ICE9PSBudWxsICYmIHR5cGVvZih2KSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRyZXR1cm4gdjtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRpZiAob2JqLkdNICE9PSBudWxsICYmIHR5cGVvZihvYmouR00pID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9iai5HTTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdGNvbnN0IG1hcHBpbmcgPSBbXHJcblx0XHRbIFwiZ2V0VmFsdWVcIiwgXCJHTV9nZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwic2V0VmFsdWVcIiwgXCJHTV9zZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwiZGVsZXRlVmFsdWVcIiwgXCJHTV9kZWxldGVWYWx1ZVwiIF0sXHJcblx0XHRbIFwieG1sSHR0cFJlcXVlc3RcIiwgXCJHTV94bWxodHRwUmVxdWVzdFwiIF1cclxuXHRdO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBtYXBwaW5nKSB7XHJcblx0XHRsZXQgcHJvbWlzZSA9IG51bGw7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGNvbnN0IGZuID0gb2JqW3ZhbHVlXTtcclxuXHRcdFx0aWYgKHR5cGVvZihmbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHByb21pc2UgPSB0b1Byb21pc2UoZm4sIG9iaik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChwcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdHByb21pc2UgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QobmV3IEVycm9yKGBOb3Qgc3VwcG9ydGVkICgke2tleX0pYCkpKTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdFtrZXldID0gcHJvbWlzZTtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufSkuY2FsbCh0aGlzLCBbdGhpcywgd2luZG93XSk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ207XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21IdG1sRXNjYXBlZFN0cmluZyh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICBjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCBcInRleHQvaHRtbFwiKTtcclxuICByZXR1cm4gZG9jLmRvY3VtZW50RWxlbWVudC50ZXh0Q29udGVudDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldFN0cmluZ0Zyb21IdG1sRXNjYXBlZFN0cmluZ1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBpbmplY3QoZnVuYywgYXJncykge1xyXG5cdGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBudWxsO1xyXG5cdGlmICghcGFyZW50KSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHRjb25zdCBzY3JpcHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHRjb25zdCBhcmdTdHIgPSAoQXJyYXkuaXNBcnJheShhcmdzKSAmJiBhcmdzLmxlbmd0aCA+IDApID9cclxuXHRcdGAuLi4ke0pTT04uc3RyaW5naWZ5KGFyZ3MsIG51bGwsIFwiXCIpfWAgOlxyXG5cdFx0XCJcIjtcclxuXHRzY3JpcHROb2RlLnRleHRDb250ZW50ID0gYCgke2Z1bmMudG9TdHJpbmcoKX0pKCR7YXJnU3RyfSk7YDtcclxuXHJcblx0cGFyZW50LmFwcGVuZENoaWxkKHNjcmlwdE5vZGUpO1xyXG5cdHBhcmVudC5yZW1vdmVDaGlsZChzY3JpcHROb2RlKTtcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpbmplY3RcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgYXBpU3R5bGUgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldElkKGlkKSB7XHJcblx0cmV0dXJuIGAke2lkfS1zdHlsZXNoZWV0YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRJZChpZCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuICEhZ2V0U3R5bGVzaGVldChpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc2hlZXQoc291cmNlLCBpZCkge1xyXG5cdGlmIChhcGlTdHlsZSA9PT0gbnVsbCkgeyBhcGlTdHlsZSA9IHJlcXVpcmUoXCIuL2FwaS9zdHlsZVwiKTsgfVxyXG5cdGFwaVN0eWxlLnNldERvY3VtZW50RGFya0ZsYWcoKTtcclxuXHJcblx0Y29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHRzdHlsZS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuXHRzdHlsZS5ocmVmID0gYGRhdGE6dGV4dC9jc3M7YmFzZTY0LCR7d2luZG93LmJ0b2Eoc291cmNlKX1gO1xyXG5cdGlmICh0eXBlb2YoaWQpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRzdHlsZS5pZCA9IGdldElkKGlkKTtcclxuXHR9XHJcblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblx0cmV0dXJuIHN0eWxlO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aGFzU3R5bGVzaGVldCxcclxuXHRnZXRTdHlsZXNoZWV0LFxyXG5cdGFkZFN0eWxlc2hlZXRcclxufTtcclxuIl19
