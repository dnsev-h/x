// ==UserScript==
// @name        x/favorites-scrape
// @version     1.0.1
// @author      dnsev-h
// @namespace   dnsev-h
// @description Fetch information about galleries
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
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-favorites-scrape.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-favorites-scrape.user.js
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

},{"../../fetch":10,"./get-from-json":4}],4:[function(require,module,exports){
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

},{"../../html-utils":12,"./types":5,"./utils":6}],5:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"../query-string":13}],9:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const fetch = require("../fetch");
const pageType = require("../api/page-type");
const pagination = require("../api/pagination");
const toCommonJson = require("../api/gallery-info/common-json").toCommonJson;
const gUtils = require("../api/gallery-info/utils");
const gFetch = require("../api/gallery-info/fetch");


let delayPromise = null;
let delayTime = 1;

async function waitDelay() {
	if (delayPromise !== null) {
		await delayPromise;
	}
}

function setDelay(time) {
	delayPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			delayPromise = null;
			resolve();
		}, time * 1000);
	});
}


async function start(status, textarea) {
	let results = "";
	const p = pagination.getInfo(document.documentElement);
	for (let i = 0; i < p.pageCount; ++i) {
		await waitDelay();

		const pageUrl = p.createPageUrl(i);
		status.textContent = `Page ${i} of ${p.pageCount}`;

		let src;
		try {
			src = await fetch.get({ url: pageUrl, gm: true });
		} catch (e) {
			console.log(e);
			--i;
			continue;
		} finally {
			setDelay(delayTime);
		}

		const doc = new DOMParser().parseFromString(src.responseText, "text/html");
		const infos = pagination.getGalleryUrls(doc.documentElement).map((v) => gUtils.getGalleryIdentifierAndPageFromUrl(v));

		const countPerPage = 20;
		for (let j = 0; j < infos.length; j += countPerPage) {
			status.textContent = `Page ${i} of ${p.pageCount} (${j} of ${infos.length})`;
			await waitDelay();
			let galleryInfos;
			try {
				galleryInfos = await gFetch.get(infos.slice(j, j + countPerPage).map((v) => v.identifier));
			} catch (e) {
				continue;
			} finally {
				setDelay(delayTime);
			}

			for (const g of galleryInfos) {
				if (g !== null) {
					results += JSON.stringify(toCommonJson(g), null, "") + "\n";
				}
			}
			textarea.value = results;
		}
	}
	status.textContent = "Done";
}

async function startTorrent(status, textarea) {
	let results = "";
	const p = pagination.getInfo(document.documentElement);
	for (let i = 0; i < p.pageCount; ++i) {
		await waitDelay();

		const pageUrl = p.createPageUrl(i);
		status.textContent = `Page ${i} of ${p.pageCount}`;

		let src;
		try {
			src = await fetch.get({ url: pageUrl, gm: true });
		} catch (e) {
			console.log(e);
			--i;
			continue;
		} finally {
			setDelay(delayTime);
		}

		const doc = new DOMParser().parseFromString(src.responseText, "text/html");
		const infos = pagination.getGalleryUrls(doc.documentElement).map((v) => gUtils.getGalleryIdentifierAndPageFromUrl(v));

		const countPerPage = 1;
		for (let j = 0; j < infos.length; j += countPerPage) {
			status.textContent = `Page ${i} of ${p.pageCount} (${j} of ${infos.length})`;
			await waitDelay();
			const id = infos[j].identifier;
			let src2;
			try {
				src2 = await fetch.get({ url: `https://exhentai.org/gallerytorrents.php?gid=${id.id}&t=${id.token}`, gm: true });
			} catch (e) {
				continue;
			} finally {
				setDelay(delayTime);
			}

			const doc2 = new DOMParser().parseFromString(src2.responseText, "text/html");
			const links = doc2.documentElement.querySelectorAll("form a[href][onclick]");
			for (let k = 0; k < links.length; ++k) {
				const link = links[k];
				results += "curl " + link.getAttribute("href") + " --output " + id.id + "_" + id.token + "_" + k + ".torrent\n";
				textarea.value = results;
			}
		}
	}
	status.textContent = "Done";
}


function main() {
	const currentPageType = pageType.get(document, location);
	if (currentPageType !== "favorites") { return; }

	const n = document.createElement("textarea");
	n.wrap = "hard";
	n.style.whiteSpace = "pre";
	n.spellcheck = false;
	document.body.insertBefore(n, document.body.firstChild);

	const s = document.createElement("div");
	document.body.insertBefore(s, document.body.firstChild);

	let b = document.createElement("button");
	b.textContent = "Fetch Metadata";
	b.addEventListener("click", () => start(s, n), false);
	document.body.insertBefore(b, document.body.firstChild);

	b = document.createElement("button");
	b.textContent = "Fetch Torrent Links";
	b.addEventListener("click", () => startTorrent(s, n), false);
	document.body.insertBefore(b, document.body.firstChild);
}


ready.onReady(main);

},{"../api/gallery-info/common-json":2,"../api/gallery-info/fetch":3,"../api/gallery-info/utils":6,"../api/page-type":7,"../api/pagination":8,"../fetch":10,"../ready":14}],10:[function(require,module,exports){
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

},{"./gm":11}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
"use strict";


function getStringFromHtmlEscapedString(value) {
	if (value === null) { return null; }

  const doc = new DOMParser().parseFromString(value, "text/html");
  return doc.documentElement.textContent;
}


module.exports = {
	getStringFromHtmlEscapedString
};

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2NvbW1vbi1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZmV0Y2guanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby9nZXQtZnJvbS1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdHlwZXMuanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby91dGlscy5qcyIsInNyYy9hcGkvcGFnZS10eXBlLmpzIiwic3JjL2FwaS9wYWdpbmF0aW9uLmpzIiwic3JjL2Zhdm9yaXRlcy1zY3JhcGUvbWFpbi5qcyIsInNyYy9mZXRjaC5qcyIsInNyYy9nbS5qcyIsInNyYy9odG1sLXV0aWxzLmpzIiwic3JjL3F1ZXJ5LXN0cmluZy5qcyIsInNyYy9yZWFkeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIEdhbGxlcnlJZGVudGlmaWVyIHtcclxuXHRjb25zdHJ1Y3RvcihpZCwgdG9rZW4pIHtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMudG9rZW4gPSB0b2tlbjtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVGcm9tVXJsKHVybCkge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSAvXi4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pPyQvLmV4ZWModXJsKTtcclxuXHRcdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IHBhdGggPSBtYXRjaFsxXS5yZXBsYWNlKC9eXFwvK3xcXC8rJC9nLCBcIlwiKS5yZXBsYWNlKC9cXC97Mix9L2csIFwiL1wiKS5zcGxpdChcIi9cIik7XHJcblx0XHRpZiAocGF0aFswXSAhPT0gXCJnXCIgfHwgcGF0aC5sZW5ndGggPCAzKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgaWQgPSBwYXJzZUludChwYXRoWzFdLCAxMCk7XHJcblx0XHRyZXR1cm4gKE51bWJlci5pc05hTihpZCkgPyBudWxsIDogbmV3IEdhbGxlcnlJZGVudGlmaWVyKGlkLCBwYXRoWzJdKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0R2FsbGVyeUlkZW50aWZpZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5SWRlbnRpZmllciA9IHJlcXVpcmUoXCIuLi9nYWxsZXJ5LWlkZW50aWZpZXJcIikuR2FsbGVyeUlkZW50aWZpZXI7XHJcblxyXG5cclxuZnVuY3Rpb24gdG9TdHJpbmdPckRlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdHJldHVybiB0eXBlb2YodmFsdWUpID09PSBcInN0cmluZ1wiID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvTnVtYmVyT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRyZXR1cm4gTnVtYmVyLmlzTmFOKHZhbHVlKSA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpZGVudGlmaWVyLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRpZiAoaWRlbnRpZmllciA9PT0gbnVsbCB8fCB0eXBlb2YoaWRlbnRpZmllcikgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBkZWZhdWx0VmFsdWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2lkOiBpZGVudGlmaWVyLmlkLFxyXG5cdFx0dG9rZW46IGlkZW50aWZpZXIudG9rZW5cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKG5ld2VyVmVyc2lvbnMpIHtcclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShuZXdlclZlcnNpb25zKSkge1xyXG5cdFx0Zm9yIChjb25zdCBuZXdlclZlcnNpb24gb2YgbmV3ZXJWZXJzaW9ucykge1xyXG5cdFx0XHRyZXN1bHQucHVzaCh7XHJcblx0XHRcdFx0Z2FsbGVyeTogKFxyXG5cdFx0XHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3ZXJWZXJzaW9uLmlkZW50aWZpZXIsIG51bGwpIHx8XHJcblx0XHRcdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihuZXcgR2FsbGVyeUlkZW50aWZpZXIoMCwgXCJcIiksIG51bGwpKSxcclxuXHRcdFx0XHRuYW1lOiB0b1N0cmluZ09yRGVmYXVsdChuZXdlclZlcnNpb24ubmFtZSksXHJcblx0XHRcdFx0ZGF0ZV91cGxvYWRlZDogdG9OdW1iZXJPckRlZmF1bHQobmV3ZXJWZXJzaW9uLmRhdGVVcGxvYWRlZClcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhZ3NUb0NvbW1vbkpzb24odGFncykge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGlmICh0YWdzICE9PSBudWxsICYmIHR5cGVvZih0YWdzKSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh0YWdzKSkge1xyXG5cdFx0Zm9yIChjb25zdCBuYW1lc3BhY2UgaW4gdGFncykge1xyXG5cdFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YWdzLCBuYW1lc3BhY2UpKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRcdGNvbnN0IHRhZ0xpc3QgPSB0YWdzW25hbWVzcGFjZV07XHJcblx0XHRcdHJlc3VsdFtuYW1lc3BhY2VdID0gWy4uLnRhZ0xpc3RdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkZhdm9yaXRlQ2F0ZWdvcnkoaW5mbykge1xyXG5cdGlmIChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRyZXR1cm4ge1xyXG5cdFx0aWQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS5pbmRleCwgMCksXHJcblx0XHR0aXRsZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNhdGVnb3J5LnRpdGxlLCBcIlwiKVxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkZ1bGxHYWxsZXJ5SW5mb0pzb24oaW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5OiAoXHJcblx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKGluZm8uaWRlbnRpZmllciwgbnVsbCkgfHxcclxuXHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLCBudWxsKSksXHJcblx0XHR0aXRsZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aXRsZSwgXCJcIiksXHJcblx0XHR0aXRsZV9vcmlnaW5hbDogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aXRsZU9yaWdpbmFsLCBcIlwiKSxcclxuXHRcdGRhdGVfdXBsb2FkZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZGF0ZVVwbG9hZGVkLCAwKSxcclxuXHRcdGNhdGVnb3J5OiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmNhdGVnb3J5LCBcIlwiKSxcclxuXHRcdHVwbG9hZGVyOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnVwbG9hZGVyLCBcIlwiKSxcclxuXHRcdHJhdGluZzoge1xyXG5cdFx0XHRhdmVyYWdlOiB0b051bWJlck9yRGVmYXVsdChpbmZvLnJhdGluZ0F2ZXJhZ2UsIDApLFxyXG5cdFx0XHRjb3VudDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5yYXRpbmdDb3VudCwgMCksXHJcblx0XHR9LFxyXG5cdFx0ZmF2b3JpdGVzOiB7XHJcblx0XHRcdGNhdGVnb3J5OiAoaW5mby5mYXZvcml0ZUNhdGVnb3J5ICE9PSBudWxsID8gdG9OdW1iZXJPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNhdGVnb3J5LmluZGV4LCAtMSkgOiAtMSksXHJcblx0XHRcdGNhdGVnb3J5X3RpdGxlOiAoaW5mby5mYXZvcml0ZUNhdGVnb3J5ICE9PSBudWxsID8gdG9TdHJpbmdPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNhdGVnb3J5LnRpdGxlLCBcIlwiKSA6IFwiXCIpLFxyXG5cdFx0XHRjb3VudDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNvdW50LCAwKVxyXG5cdFx0fSxcclxuXHRcdHBhcmVudDogZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaW5mby5wYXJlbnQsIG51bGwpLFxyXG5cdFx0bmV3ZXJfdmVyc2lvbnM6IG5ld2VyVmVyc2lvbnNUb0NvbW1vbkpzb24oaW5mby5uZXdlclZlcnNpb25zKSxcclxuXHRcdHRodW1ibmFpbDogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5tYWluVGh1bWJuYWlsVXJsLCBcIlwiKSxcclxuXHRcdHRodW1ibmFpbF9zaXplOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRodW1ibmFpbFNpemUsIFwiXCIpLFxyXG5cdFx0dGh1bWJuYWlsX3Jvd3M6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8udGh1bWJuYWlsUm93cywgMCksXHJcblx0XHRpbWFnZV9jb3VudDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5maWxlQ291bnQsIDApLFxyXG5cdFx0aW1hZ2VzX3Jlc2l6ZWQ6IGZhbHNlLFxyXG5cdFx0dG90YWxfZmlsZV9zaXplX2FwcHJveDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUsIDApLFxyXG5cdFx0dmlzaWJsZTogKGluZm8udmlzaWJsZSA9PT0gdHJ1ZSksXHJcblx0XHR2aXNpYmxlX3JlYXNvbjogdG9TdHJpbmdPckRlZmF1bHQoaW5mby52aXNpYmxlUmVhc29uLCBcIlwiKSxcclxuXHRcdGxhbmd1YWdlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmxhbmd1YWdlLCBcIlwiKSxcclxuXHRcdHRyYW5zbGF0ZWQ6IChpbmZvLnRyYW5zbGF0ZWQgPT09IHRydWUpLFxyXG5cdFx0dGFnczogdGFnc1RvQ29tbW9uSnNvbihpbmZvLnRhZ3MpLFxyXG5cdFx0Ly8gTmV3XHJcblx0XHR0YWdzX2hhdmVfbmFtZXNwYWNlOiAoaW5mby50YWdzSGF2ZU5hbWVzcGFjZSA9PT0gdHJ1ZSksXHJcblx0XHR0b3JyZW50X2NvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLnRvcnJlbnRDb3VudCwgMCksXHJcblx0XHRhcmNoaXZlcl9rZXk6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uYXJjaGl2ZXJLZXksIG51bGwpLFxyXG5cdFx0c291cmNlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnNvdXJjZSwgbnVsbCksXHJcblx0XHRzb3VyY2Vfc2l0ZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5zb3VyY2VTaXRlLCBudWxsKSxcclxuXHRcdGRhdGVfZ2VuZXJhdGVkOiB0b051bWJlck9yRGVmYXVsdChpbmZvLmRhdGVHZW5lcmF0ZWQsIDApXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25HYWxsZXJ5SW5mb0pzb24oaW5mbykge1xyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0b051bWJlck9yRGVmYXVsdChpbmZvLmRhdGVVcGxvYWRlZCwgMCkpO1xyXG5cdHJldHVybiB7XHJcblx0XHR0aXRsZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aXRsZSwgXCJcIiksXHJcblx0XHR0aXRsZV9vcmlnaW5hbDogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aXRsZU9yaWdpbmFsLCBcIlwiKSxcclxuXHJcblx0XHRjYXRlZ29yeTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5jYXRlZ29yeSwgXCJcIiksXHJcblx0XHR0YWdzOiB0YWdzVG9Db21tb25Kc29uKGluZm8udGFncyksXHJcblxyXG5cdFx0bGFuZ3VhZ2U6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8ubGFuZ3VhZ2UsIFwiXCIpLFxyXG5cdFx0dHJhbnNsYXRlZDogISFpbmZvLnRyYW5zbGF0ZWQsXHJcblxyXG5cdFx0ZmF2b3JpdGVfY2F0ZWdvcnk6IHRvQ29tbW9uRmF2b3JpdGVDYXRlZ29yeShpbmZvKSxcclxuXHJcblx0XHR1cGxvYWRfZGF0ZTogW1xyXG5cdFx0XHRkYXRlLmdldFVUQ0Z1bGxZZWFyKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDTW9udGgoKSArIDEsXHJcblx0XHRcdGRhdGUuZ2V0VVRDRGF0ZSgpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ0hvdXJzKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDTWludXRlcygpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ1NlY29uZHMoKVxyXG5cdFx0XSxcclxuXHJcblx0XHRzb3VyY2U6IHtcclxuXHRcdFx0c2l0ZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5zb3VyY2VTaXRlLCBcIlwiKSxcclxuXHRcdFx0Z2lkOiAoaW5mby5pZGVudGlmaWVyICE9PSBudWxsID8gdG9OdW1iZXJPckRlZmF1bHQoaW5mby5pZGVudGlmaWVyLmlkLCAwKSA6IDApLFxyXG5cdFx0XHR0b2tlbjogKGluZm8uaWRlbnRpZmllciAhPT0gbnVsbCA/IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uaWRlbnRpZmllci50b2tlbiwgMCkgOiAwKSxcclxuXHRcdFx0cGFyZW50X2dhbGxlcnk6IGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKGluZm8ucGFyZW50LCBudWxsKSxcclxuXHRcdFx0bmV3ZXJfdmVyc2lvbnM6IG5ld2VyVmVyc2lvbnNUb0NvbW1vbkpzb24oaW5mby5uZXdlclZlcnNpb25zKVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uSnNvbihpbmZvKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdhbGxlcnlfaW5mbzogdG9Db21tb25HYWxsZXJ5SW5mb0pzb24oaW5mbyksXHJcblx0XHRnYWxsZXJ5X2luZm9fZnVsbDogdG9Db21tb25GdWxsR2FsbGVyeUluZm9Kc29uKGluZm8pXHJcblx0fTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHRvQ29tbW9uSnNvblxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGZldGNoID0gcmVxdWlyZShcIi4uLy4uL2ZldGNoXCIpOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuY29uc3QgZ2V0RnJvbUpzb24gPSByZXF1aXJlKFwiLi9nZXQtZnJvbS1qc29uXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldEFycmF5Q291bnQoYXJyYXksIGNvdW50LCBmaWxsKSB7XHJcblx0Y29uc3QgaWkgPSBhcnJheS5sZW5ndGg7XHJcblx0aWYgKGlpICE9PSBjb3VudCkge1xyXG5cdFx0aWYgKGlpID4gY291bnQpIHtcclxuXHRcdFx0YXJyYXkuc3BsaWNlKGNvdW50LCBpaSAtIGNvdW50KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSBpaTsgaSA8IGNvdW50OyArK2kpIHtcclxuXHRcdFx0XHRhcnJheS5wdXNoKGZpbGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHYWxsZXJ5SW5mbyhpZGVudGlmaWVycykge1xyXG5cdGNvbnN0IGdpZExpc3QgPSBbXTtcclxuXHRjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShpZGVudGlmaWVycyk7XHJcblx0aWYgKGlzQXJyYXkpIHtcclxuXHRcdGZvciAoY29uc3QgaWRlbnRpZmllciBvZiBpZGVudGlmaWVycykge1xyXG5cdFx0XHRnaWRMaXN0LnB1c2goWyBpZGVudGlmaWVyLmlkLCBpZGVudGlmaWVyLnRva2VuIF0pO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRnaWRMaXN0LnB1c2goWyBpZGVudGlmaWVycy5pZCwgaWRlbnRpZmllcnMudG9rZW4gXSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBkYXRhID0ge1xyXG5cdFx0bWV0aG9kOiBcImdkYXRhXCIsXHJcblx0XHRnaWRsaXN0OiBnaWRMaXN0LFxyXG5cdFx0bmFtZXNwYWNlOiAxXHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc291cmNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcblx0Y29uc3QgZmV0Y2hSZXN1bHQgPSBhd2FpdCBmZXRjaC5wb3N0KHtcclxuXHRcdGdtOiB0cnVlLFxyXG5cdFx0dXJsOiBcIi9hcGkucGhwXCIsXHJcblx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCByZXN1bHRKc29uID0gSlNPTi5wYXJzZShmZXRjaFJlc3VsdC5yZXNwb25zZVRleHQpO1xyXG5cclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Zm9yIChjb25zdCBqc29uIG9mIHJlc3VsdEpzb24uZ21ldGFkYXRhKSB7XHJcblx0XHRpZiAoanNvbi5lcnJvcikge1xyXG5cdFx0XHRyZXN1bHRzLnB1c2gobnVsbCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBpbmZvID0gZ2V0RnJvbUpzb24oanNvbiwgc291cmNlVXJsKTtcclxuXHRcdFx0cmVzdWx0cy5wdXNoKGluZm8pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0QXJyYXlDb3VudChyZXN1bHRzLCBnaWRMaXN0Lmxlbmd0aCwgbnVsbCk7XHJcblxyXG5cdHJldHVybiBpc0FycmF5ID8gcmVzdWx0cyA6IHJlc3VsdHNbMF07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQ6IGdldEdhbGxlcnlJbmZvXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuY29uc3QgaHRtbFV0aWxzID0gcmVxdWlyZShcIi4uLy4uL2h0bWwtdXRpbHNcIik7XHJcblxyXG5jb25zdCBkZWZhdWx0TmFtZXNwYWNlID0gXCJtaXNjXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SnNvbk51bWJlcih2YWx1ZSkge1xyXG5cdGlmICh0eXBlb2YodmFsdWUpICE9PSBcIm51bWJlclwiKSB7XHJcblx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gXCJzdHJpbmdcIikgeyByZXR1cm4gbnVsbDsgfVxyXG5cdFx0dmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuXHR9XHJcblx0cmV0dXJuIChOdW1iZXIuaXNOYU4odmFsdWUpID8gbnVsbCA6IHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SnNvblN0cmluZyh2YWx1ZSkge1xyXG5cdGlmICh0eXBlb2YodmFsdWUpID09PSBcInN0cmluZ1wiKSB7IHJldHVybiB2YWx1ZTsgfVxyXG5cdGlmICh0eXBlb2YodmFsdWUpID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09PSBudWxsKSB7IHJldHVybiB2YWx1ZTsgfVxyXG5cdHJldHVybiBgJHt2YWx1ZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYWdBbmROYW1lc3BhY2UodGFnKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9eKD86KFteOl0qKTopPyhbXFx3XFxXXSopJC87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGFnKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsKSA/XHJcblx0XHQoeyB0YWc6IG1hdGNoWzJdLCBuYW1lc3BhY2U6IG1hdGNoWzFdIHx8IGRlZmF1bHROYW1lc3BhY2UgfSkgOlxyXG5cdFx0KHsgdGFnOiB0YWcsIG5hbWVzcGFjZTogZGVmYXVsdE5hbWVzcGFjZSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Qcm9wZXJDYXNlKHRleHQpIHtcclxuXHRyZXR1cm4gdGV4dC5yZXBsYWNlKC8oXnxcXFcpKFxcdykvZywgKG0wLCBtMSwgbTIpID0+IGAke20xfSR7bTIudG9VcHBlckNhc2UoKX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21Kc29uKGluZm8sIGpzb24pIHtcclxuXHRpbmZvLnRpdGxlID0gaHRtbFV0aWxzLmdldFN0cmluZ0Zyb21IdG1sRXNjYXBlZFN0cmluZyhnZXRKc29uU3RyaW5nKGpzb24udGl0bGUpKTtcclxuXHRpbmZvLnRpdGxlT3JpZ2luYWwgPSBodG1sVXRpbHMuZ2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nKGdldEpzb25TdHJpbmcoanNvbi50aXRsZV9qcG4pKTtcclxuXHRpbmZvLm1haW5UaHVtYm5haWxVcmwgPSBnZXRKc29uU3RyaW5nKGpzb24udGh1bWIpO1xyXG5cdGNvbnN0IGNhdGVnb3J5ID0gZ2V0SnNvblN0cmluZyhqc29uLmNhdGVnb3J5KTtcclxuXHRpbmZvLmNhdGVnb3J5ID0gKGNhdGVnb3J5ICE9PSBudWxsID8gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA6IG51bGwpO1xyXG5cdGluZm8udXBsb2FkZXIgPSBnZXRKc29uU3RyaW5nKGpzb24udXBsb2FkZXIpO1xyXG5cclxuXHRpbmZvLnJhdGluZ0F2ZXJhZ2UgPSBnZXRKc29uTnVtYmVyKGpzb24ucmF0aW5nKTtcclxuXHJcblx0Y29uc3QgZGF0ZVVwbG9hZGVkID0gZ2V0SnNvbk51bWJlcihqc29uLnBvc3RlZCk7XHJcblx0aW5mby5kYXRlVXBsb2FkZWQgPSAoZGF0ZVVwbG9hZGVkICE9PSBudWxsID8gbmV3IERhdGUoZGF0ZVVwbG9hZGVkICogMTAwMCkuZ2V0VGltZSgpIDogbnVsbCk7XHJcblxyXG5cdGluZm8udmlzaWJsZSA9ICFqc29uLmV4cHVuZ2VkO1xyXG5cclxuXHRpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IGdldEpzb25OdW1iZXIoanNvbi5maWxlc2l6ZSk7XHJcblxyXG5cdGluZm8uZmlsZUNvdW50ID0gZ2V0SnNvbk51bWJlcihqc29uLmZpbGVjb3VudCk7XHJcblxyXG5cdGluZm8uYXJjaGl2ZXJLZXkgPSBnZXRKc29uU3RyaW5nKGpzb24uYXJjaGl2ZXJfa2V5KTtcclxuXHRpbmZvLnRvcnJlbnRDb3VudCA9IGdldEpzb25OdW1iZXIoanNvbi50b3JyZW50Y291bnQpO1xyXG5cclxuXHRjb25zdCB0YWdzID0ge307XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoanNvbi50YWdzKSkge1xyXG5cdFx0Zm9yIChjb25zdCBqc29uVGFnIG9mIGpzb24udGFncykge1xyXG5cdFx0XHRjb25zdCBzdHJpbmdUYWcgPSBnZXRKc29uU3RyaW5nKGpzb25UYWcpO1xyXG5cdFx0XHRpZiAoc3RyaW5nVGFnID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0XHRjb25zdCB7dGFnLCBuYW1lc3BhY2V9ID0gZ2V0VGFnQW5kTmFtZXNwYWNlKHN0cmluZ1RhZyk7XHJcblxyXG5cdFx0XHRsZXQgbmFtZXNwYWNlVGFncztcclxuXHRcdFx0aWYgKHRhZ3MuaGFzT3duUHJvcGVydHkobmFtZXNwYWNlKSkge1xyXG5cdFx0XHRcdG5hbWVzcGFjZVRhZ3MgPSB0YWdzW25hbWVzcGFjZV07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bmFtZXNwYWNlVGFncyA9IFtdO1xyXG5cdFx0XHRcdHRhZ3NbbmFtZXNwYWNlXSA9IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MucHVzaCh0YWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5mby50YWdzID0gdGFncztcclxuXHRpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID0gdHJ1ZTtcclxuXHJcblx0Ly8gVGFnLWJhc2VkIGluZm9cclxuXHRpZiAodGFncy5oYXNPd25Qcm9wZXJ0eShcImxhbmd1YWdlXCIpKSB7XHJcblx0XHRjb25zdCBsYW5ndWFnZVRhZ3MgPSB0YWdzLmxhbmd1YWdlO1xyXG5cdFx0Y29uc3QgdHJhbnNsYXRlZEluZGV4ID0gbGFuZ3VhZ2VUYWdzLmluZGV4T2YoXCJ0cmFuc2xhdGVkXCIpO1xyXG5cdFx0aW5mby50cmFuc2xhdGVkID0gKHRyYW5zbGF0ZWRJbmRleCA+PSAwKTtcclxuXHRcdGlmICh0cmFuc2xhdGVkSW5kZXggIT09IDApIHtcclxuXHRcdFx0aW5mby5sYW5ndWFnZSA9IHRvUHJvcGVyQ2FzZShsYW5ndWFnZVRhZ3NbMF0pO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRpbmZvLmxhbmd1YWdlID0gXCJKYXBhbmVzZVwiO1xyXG5cdFx0aW5mby50cmFuc2xhdGVkID0gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGcm9tSnNvbihqc29uLCB1cmwpIHtcclxuXHRpZiAoanNvbiA9PT0gbnVsbCB8fCB0eXBlb2YoanNvbikgIT09IFwib2JqZWN0XCIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWQgPSBnZXRKc29uTnVtYmVyKGpzb24uZ2lkKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldEpzb25TdHJpbmcoanNvbi50b2tlbik7XHJcblx0aWYgKGlkID09PSBudWxsIHx8IHRva2VuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSBuZXcgdHlwZXMuR2FsbGVyeUluZm8oKTtcclxuXHRpbmZvLmlkZW50aWZpZXIgPSBuZXcgdHlwZXMuR2FsbGVyeUlkZW50aWZpZXIoaWQsIHRva2VuKTtcclxuXHRpbmZvLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRpbmZvLnNvdXJjZSA9IFwianNvblwiO1xyXG5cdHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSnNvbihpbmZvLCBqc29uKTtcclxuXHRpbmZvLnNvdXJjZVNpdGUgPSB1dGlscy5nZXRTb3VyY2VTaXRlRnJvbVVybCh1cmwpO1xyXG5cdGluZm8uZGF0ZUdlbmVyYXRlZCA9IERhdGUubm93KCk7XHJcblx0cmV0dXJuIGluZm87XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldEZyb21Kc29uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlJZGVudGlmaWVyID0gcmVxdWlyZShcIi4uL2dhbGxlcnktaWRlbnRpZmllclwiKS5HYWxsZXJ5SWRlbnRpZmllcjtcclxuXHJcblxyXG5jbGFzcyBHYWxsZXJ5SW5mbyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZSA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlT3JpZ2luYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlVXBsb2FkZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLnVwbG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQXZlcmFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0NvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5tYWluVGh1bWJuYWlsVXJsID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnRodW1ibmFpbFJvd3MgPSBudWxsO1xyXG5cdFx0dGhpcy5maWxlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdHRoaXMudmlzaWJsZVJlYXNvbiA9IG51bGw7XHJcblx0XHR0aGlzLmxhbmd1YWdlID0gbnVsbDtcclxuXHRcdHRoaXMudHJhbnNsYXRlZCA9IG51bGw7XHJcblx0XHR0aGlzLmFyY2hpdmVyS2V5ID0gbnVsbDtcclxuXHRcdHRoaXMudG9ycmVudENvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMudGFncyA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3NIYXZlTmFtZXNwYWNlID0gbnVsbDtcclxuXHRcdHRoaXMuY3VycmVudFBhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5uZXdlclZlcnNpb25zID0gbnVsbDtcclxuXHRcdHRoaXMuc291cmNlID0gbnVsbDtcclxuXHRcdHRoaXMuc291cmNlU2l0ZSA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVHZW5lcmF0ZWQgPSBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyLFxyXG5cdEdhbGxlcnlJbmZvXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuXHJcbmNvbnN0IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcyA9IFsgXCJiXCIsIFwia2JcIiwgXCJtYlwiLCBcImdiXCIgXTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5UGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgbWF0Y2ggPSAvXFw/KD86KHxbXFx3XFxXXSo/JilwPShbXFwrXFwtXT9cXGQrKSk/Ly5leGVjKHVybCk7XHJcblx0aWYgKG1hdGNoICE9PSBudWxsICYmIG1hdGNoWzFdKSB7XHJcblx0XHRjb25zdCBwYWdlID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdGlmICghTnVtYmVyLmlzTmFOKHBhZ2UpKSB7IHJldHVybiBwYWdlOyB9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IGlkZW50aWZpZXIgPSB0eXBlcy5HYWxsZXJ5SWRlbnRpZmllci5jcmVhdGVGcm9tVXJsKHVybCk7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGFnZSA9IGdldEdhbGxlcnlQYWdlRnJvbVVybCh1cmwpO1xyXG5cdHJldHVybiB7IGlkZW50aWZpZXIsIHBhZ2UgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Qnl0ZXNTaXplRnJvbUxhYmVsKG51bWJlciwgbGFiZWwpIHtcclxuXHRsZXQgaSA9IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcy5pbmRleE9mKGxhYmVsLnRvTG93ZXJDYXNlKCkpO1xyXG5cdGlmIChpIDwgMCkgeyBpID0gMDsgfVxyXG5cdHJldHVybiBNYXRoLmZsb29yKHBhcnNlRmxvYXQobnVtYmVyKSAqIE1hdGgucG93KDEwMjQsIGkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9eKD86KD86W2Etel1bYS16MC05XFwrXFwtXFwuXSo6XFwvKnxcXC97Mix9KShbXlxcL10qKSk/KFxcLz9bXFx3XFxXXSopJC9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybCk7XHJcblxyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgaG9zdCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJleGhlbnRhaVwiOyB9XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZS1oZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJlLWhlbnRhaVwiOyB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwsXHJcblx0Z2V0Qnl0ZXNTaXplRnJvbUxhYmVsLFxyXG5cdGdldFNvdXJjZVNpdGVGcm9tVXJsXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHF1ZXJ5U3RyaW5nID0gcmVxdWlyZShcIi4uL3F1ZXJ5LXN0cmluZ1wiKTtcclxuXHJcbmNvbnN0IHJlUGFnZUxpc3QgPSAvKFswLTksXSspXFxzKi1cXHMqKFswLTksXSspXFxzKm9mXFxzKihbMC05LF0rKS9pO1xyXG5jb25zdCByZVJlc3VsdHMgPSAvKFswLTksXSspXFxzKnJlc3VsdHM/L2k7XHJcblxyXG5cclxuY2xhc3MgUGFnZWluYXRpb25JbmZvIHtcclxuXHRjb25zdHJ1Y3RvcihwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2UsIHVybEJhc2UsIHBhZ2VGaWVsZE5hbWUpIHtcclxuXHRcdHRoaXMucGFnZUN1cnJlbnQgPSBwYWdlQ3VycmVudDtcclxuXHRcdHRoaXMucGFnZUNvdW50ID0gcGFnZUNvdW50O1xyXG5cdFx0dGhpcy5pdGVtQ291bnQgPSBpdGVtQ291bnQ7XHJcblx0XHR0aGlzLml0ZW1zT25QYWdlID0gaXRlbXNPblBhZ2U7XHJcblx0XHR0aGlzLml0ZW1zUGVyUGFnZSA9IGl0ZW1zUGVyUGFnZTtcclxuXHRcdHRoaXMudXJsQmFzZSA9IHVybEJhc2U7XHJcblx0XHR0aGlzLnBhZ2VGaWVsZE5hbWUgPSBwYWdlRmllbGROYW1lO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUGFnZVVybChwYWdlSW5kZXgpIHtcclxuXHRcdGlmICh0aGlzLnVybEJhc2UgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy51cmxCYXNlLnJlcGxhY2UoL14oW14jXFw/XSopKFxcP1teI10qKT8oI1tcXHdcXFddKik/JC8sIChtMCwgbTEsIG0yLCBtMykgPT4ge1xyXG5cdFx0XHRtMiA9IChcclxuXHRcdFx0XHRwYWdlSW5kZXggIT09IDAgP1xyXG5cdFx0XHRcdChtMiA/IGAke20yfSYke3RoaXMucGFnZUZpZWxkTmFtZX09JHtwYWdlSW5kZXh9YCA6IGA/JHt0aGlzLnBhZ2VGaWVsZE5hbWV9PSR7cGFnZUluZGV4fWApIDpcclxuXHRcdFx0XHQobTIgfHwgXCJcIikpO1xyXG5cdFx0XHRyZXR1cm4gYCR7bTF9JHttMn0ke20zIHx8IFwiXCJ9YDtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBhcnNlTnVtYmVyKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRjb25zdCB2ID0gcGFyc2VJbnQodmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpLCAxMCk7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2KSA/IGRlZmF1bHRWYWx1ZSA6IHY7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRQYWdlc0ZvckltYWdlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIi5zbj5kaXY+c3BhblwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYWdlQ3VycmVudCA9IHBhcnNlTnVtYmVyKG5vZGVzWzBdLnRleHRDb250ZW50LCAxKSAtIDE7XHJcblx0Y29uc3QgcGFnZUNvdW50ID0gcGFyc2VOdW1iZXIobm9kZXNbMV0udGV4dENvbnRlbnQsIDApO1xyXG5cdHJldHVybiBuZXcgUGFnZWluYXRpb25JbmZvKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIHBhZ2VDb3VudCwgMSwgMSwgbnVsbCwgbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZUl0ZW1zUGVyUGFnZShwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlKSB7XHJcblx0cmV0dXJuIChwYWdlQ3VycmVudCArIDEgPCBwYWdlQ291bnQgfHwgcGFnZUN1cnJlbnQgPT09IDApID9cclxuXHRcdGl0ZW1zT25QYWdlIDpcclxuXHRcdE1hdGgucm91bmQoKGl0ZW1Db3VudCAtIGl0ZW1zT25QYWdlKSAvIHBhZ2VDdXJyZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGcm9tRnVsbEluZm8oY29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkge1xyXG5cdGNvbnN0IG1hdGNoID0gcmVQYWdlTGlzdC5leGVjKGNvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBzdGFydCA9IHBhcnNlTnVtYmVyKG1hdGNoWzFdLCAwKTtcclxuXHRjb25zdCBpdGVtc09uUGFnZSA9IHBhcnNlTnVtYmVyKG1hdGNoWzJdLCAwKSAtIChzdGFydCAtIDEpO1xyXG5cdGNvbnN0IGl0ZW1Db3VudCA9IHBhcnNlTnVtYmVyKG1hdGNoWzNdLCAwKTtcclxuXHRjb25zdCBpdGVtc1BlclBhZ2UgPSBjYWxjdWxhdGVJdGVtc1BlclBhZ2UocGFnZUN1cnJlbnQsIHBhZ2VDb3VudCwgaXRlbUNvdW50LCBpdGVtc09uUGFnZSk7XHJcblxyXG5cdHJldHVybiB7aXRlbUNvdW50LCBpdGVtc09uUGFnZSwgaXRlbXNQZXJQYWdlfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGb3JHYWxsZXJ5SW1hZ2VzKHBhZ2VMaXN0LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0Y29uc3Qgbm9kZSA9IHBhZ2VMaXN0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5ncGNcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsICYmIG5vZGUucGFyZW50Tm9kZSA9PT0gcGFnZUxpc3QucGFyZW50Tm9kZSkgP1xyXG5cdFx0Z2V0SXRlbXNGcm9tRnVsbEluZm8obm9kZS50ZXh0Q29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCkgOlxyXG5cdFx0bnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KSB7XHJcblx0bGV0IGl0ZW1Db3VudCA9IG51bGw7XHJcblx0Zm9yIChjb25zdCBpcE5vZGUgb2YgaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwicC5pcFwiKSkge1xyXG5cdFx0Y29uc3QgaW5mbyA9IGdldEl0ZW1zRnJvbUZ1bGxJbmZvKGlwTm9kZS50ZXh0Q29udGVudCwgcGFnZUN1cnJlbnQsIHBhZ2VDb3VudCk7XHJcblx0XHRpZiAoaW5mbyAhPT0gbnVsbCkgeyByZXR1cm4gaW5mbzsgfVxyXG5cclxuXHRcdGNvbnN0IG1hdGNoID0gcmVSZXN1bHRzLmV4ZWMoaXBOb2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRpdGVtQ291bnQgPSBwYXJzZU51bWJlcihtYXRjaFsxXSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKGl0ZW1Db3VudCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRsZXQgaXRlbXNPblBhZ2UgPSAwO1xyXG5cdGxldCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcImRpdi5pdGc+ZGl2XCIpO1xyXG5cdGlmICgoaXRlbXNPblBhZ2UgPSBub2Rlcy5sZW5ndGgpID09PSAwKSB7XHJcblx0XHRub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcInRhYmxlLml0Zz50Ym9keT50clwiKTtcclxuXHRcdGl0ZW1zT25QYWdlID0gbm9kZXMubGVuZ3RoO1xyXG5cdFx0aWYgKGl0ZW1zT25QYWdlID4gMCAmJiBub2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwidGhcIikgIT09IG51bGwpIHtcclxuXHRcdFx0LS1pdGVtc09uUGFnZTsgLy8gSGVhZGVyIHJvd1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXNQZXJQYWdlID0gY2FsY3VsYXRlSXRlbXNQZXJQYWdlKHBhZ2VDdXJyZW50LCBwYWdlQ291bnQsIGl0ZW1Db3VudCwgaXRlbXNPblBhZ2UpO1xyXG5cclxuXHRyZXR1cm4ge2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VzRm9yR2FsbGVyeUxpc3QoaHRtbCwgcGFnZUxpc3QpIHtcclxuXHQvLyBDb3VudFxyXG5cdGNvbnN0IG5vZGVzID0gcGFnZUxpc3QucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xyXG5cdGNvbnN0IHBhZ2VDb3VudCA9IChub2Rlcy5sZW5ndGggPiAyID8gcGFyc2VOdW1iZXIobm9kZXNbbm9kZXMubGVuZ3RoIC0gMl0udGV4dENvbnRlbnQsIDEpIDogMCk7XHJcblxyXG5cdC8vIEN1cnJlbnRcclxuXHRjb25zdCBub2RlID0gcGFnZUxpc3QucXVlcnlTZWxlY3RvcihcInRkLnB0ZHNcIik7XHJcblx0Y29uc3QgcGFnZUN1cnJlbnQgPSAobm9kZSAhPT0gbnVsbCA/IHBhcnNlTnVtYmVyKG5vZGUudGV4dENvbnRlbnQsIDEpIC0gMSA6IDApO1xyXG5cclxuXHQvLyBJdGVtc1xyXG5cdGxldCBpdGVtQ291bnQgPSAwO1xyXG5cdGxldCBpdGVtc09uUGFnZSA9IDA7XHJcblx0bGV0IGl0ZW1zUGVyUGFnZSA9IDA7XHJcblxyXG5cdGxldCB2ID0gZ2V0SXRlbXNGb3JHYWxsZXJ5SW1hZ2VzKHBhZ2VMaXN0LCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KTtcclxuXHRsZXQgcGFnZUZpZWxkTmFtZSA9IG51bGw7XHJcblx0bGV0IGlzR2FsbGVyeUxpc3QgPSBmYWxzZTtcclxuXHRpZiAodiAhPT0gbnVsbCkge1xyXG5cdFx0cGFnZUZpZWxkTmFtZSA9IFwicFwiO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR2ID0gZ2V0SXRlbXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlQ3VycmVudCwgcGFnZUNvdW50KTtcclxuXHRcdGlmICh2ICE9PSBudWxsKSB7XHJcblx0XHRcdHBhZ2VGaWVsZE5hbWUgPSBcInBhZ2VcIjtcclxuXHRcdFx0aXNHYWxsZXJ5TGlzdCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICh2ICE9PSBudWxsKSB7XHJcblx0XHQoe2l0ZW1Db3VudCwgaXRlbXNPblBhZ2UsIGl0ZW1zUGVyUGFnZX0gPSB2KTtcclxuXHR9XHJcblxyXG5cdC8vIFVybCBmb3JtYXRcclxuXHRjb25zdCBsaW5rID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiYVtocmVmXVwiKTtcclxuXHRsZXQgdXJsQmFzZSA9IG51bGw7XHJcblx0aWYgKGxpbmsgIT09IG51bGwgJiYgcGFnZUZpZWxkTmFtZSAhPT0gbnVsbCkge1xyXG5cdFx0dXJsQmFzZSA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuXHRcdHVybEJhc2UgPSBxdWVyeVN0cmluZy5yZW1vdmVRdWVyeVBhcmFtZXRlcih1cmxCYXNlLCBwYWdlRmllbGROYW1lKTtcclxuXHRcdGlmIChpc0dhbGxlcnlMaXN0KSB7XHJcblx0XHRcdHVybEJhc2UgPSBxdWVyeVN0cmluZy5yZW1vdmVRdWVyeVBhcmFtZXRlcih1cmxCYXNlLCBcImZyb21cIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbmV3IFBhZ2VpbmF0aW9uSW5mbyhwYWdlQ3VycmVudCwgcGFnZUNvdW50LCBpdGVtQ291bnQsIGl0ZW1zT25QYWdlLCBpdGVtc1BlclBhZ2UsIHVybEJhc2UsIHBhZ2VGaWVsZE5hbWUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SW5mbyhodG1sKSB7XHJcblx0aWYgKCFodG1sKSB7IGh0bWwgPSBkb2N1bWVudDsgfVxyXG5cclxuXHRjb25zdCBwYWdlTGlzdCA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5wdHRcIik7XHJcblx0cmV0dXJuIHBhZ2VMaXN0ICE9PSBudWxsID8gZ2V0UGFnZXNGb3JHYWxsZXJ5TGlzdChodG1sLCBwYWdlTGlzdCkgOiBnZXRQYWdlc0ZvckltYWdlKGh0bWwpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVVybChub2RlKSB7XHJcblx0Y29uc3QgbGlua1NlbGVjdG9yID0gXCJhW2hyZWZdXCI7XHJcblx0Y29uc3QgbmFtZU5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuZ2xuYW1lXCIpO1xyXG5cdGlmIChuYW1lTm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgbGluayA9IG5hbWVOb2RlLnF1ZXJ5U2VsZWN0b3IobGlua1NlbGVjdG9yKTtcclxuXHRcdGlmIChsaW5rICE9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblx0XHR9XHJcblx0XHRpZiAobmFtZU5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCAmJiBuYW1lTm9kZS5wYXJlbnROb2RlLm1hdGNoZXMobGlua1NlbGVjdG9yKSkge1xyXG5cdFx0XHRyZXR1cm4gbmFtZU5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlVcmxzKGh0bWwpIHtcclxuXHRpZiAoIWh0bWwpIHsgaHRtbCA9IGRvY3VtZW50OyB9XHJcblxyXG5cdGxldCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcImRpdi5pdGc+ZGl2XCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwidGFibGUuaXRnPnRib2R5PnRyXCIpO1xyXG5cdFx0aWYgKG5vZGVzLmxlbmd0aCA+IDAgJiYgbm9kZXNbMF0ucXVlcnlTZWxlY3RvcihcInRoXCIpICE9PSBudWxsKSB7XHJcblx0XHRcdG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZXMsIDEpOyAvLyBPbWl0IGhlYWRlciByb3dcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IHVybCA9IGdldEdhbGxlcnlVcmwobm9kZSk7XHJcblx0XHRpZiAodXJsICE9PSBudWxsKSB7IHJlc3VsdHMucHVzaCh1cmwpOyB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUltYWdlVXJscyhodG1sKSB7XHJcblx0aWYgKCFodG1sKSB7IGh0bWwgPSBkb2N1bWVudDsgfVxyXG5cclxuXHRsZXQgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2R0bFwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIi5nZHRtXCIpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IGxpbmsgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCJhW2hyZWZdXCIpO1xyXG5cdFx0aWYgKGxpbmsgIT09IG51bGwpIHtcclxuXHRcdFx0cmVzdWx0cy5wdXNoKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldEluZm8sXHJcblx0Z2V0R2FsbGVyeVVybHMsXHJcblx0Z2V0R2FsbGVyeUltYWdlVXJsc1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHJlYWR5ID0gcmVxdWlyZShcIi4uL3JlYWR5XCIpO1xyXG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoXCIuLi9mZXRjaFwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuY29uc3QgcGFnaW5hdGlvbiA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnaW5hdGlvblwiKTtcclxuY29uc3QgdG9Db21tb25Kc29uID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vY29tbW9uLWpzb25cIikudG9Db21tb25Kc29uO1xyXG5jb25zdCBnVXRpbHMgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby91dGlsc1wiKTtcclxuY29uc3QgZ0ZldGNoID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vZmV0Y2hcIik7XHJcblxyXG5cclxubGV0IGRlbGF5UHJvbWlzZSA9IG51bGw7XHJcbmxldCBkZWxheVRpbWUgPSAxO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gd2FpdERlbGF5KCkge1xyXG5cdGlmIChkZWxheVByb21pc2UgIT09IG51bGwpIHtcclxuXHRcdGF3YWl0IGRlbGF5UHJvbWlzZTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERlbGF5KHRpbWUpIHtcclxuXHRkZWxheVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ZGVsYXlQcm9taXNlID0gbnVsbDtcclxuXHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0fSwgdGltZSAqIDEwMDApO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3RhcnQoc3RhdHVzLCB0ZXh0YXJlYSkge1xyXG5cdGxldCByZXN1bHRzID0gXCJcIjtcclxuXHRjb25zdCBwID0gcGFnaW5hdGlvbi5nZXRJbmZvKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwLnBhZ2VDb3VudDsgKytpKSB7XHJcblx0XHRhd2FpdCB3YWl0RGVsYXkoKTtcclxuXHJcblx0XHRjb25zdCBwYWdlVXJsID0gcC5jcmVhdGVQYWdlVXJsKGkpO1xyXG5cdFx0c3RhdHVzLnRleHRDb250ZW50ID0gYFBhZ2UgJHtpfSBvZiAke3AucGFnZUNvdW50fWA7XHJcblxyXG5cdFx0bGV0IHNyYztcclxuXHRcdHRyeSB7XHJcblx0XHRcdHNyYyA9IGF3YWl0IGZldGNoLmdldCh7IHVybDogcGFnZVVybCwgZ206IHRydWUgfSk7XHJcblx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHQtLWk7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0c2V0RGVsYXkoZGVsYXlUaW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHNyYy5yZXNwb25zZVRleHQsIFwidGV4dC9odG1sXCIpO1xyXG5cdFx0Y29uc3QgaW5mb3MgPSBwYWdpbmF0aW9uLmdldEdhbGxlcnlVcmxzKGRvYy5kb2N1bWVudEVsZW1lbnQpLm1hcCgodikgPT4gZ1V0aWxzLmdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwodikpO1xyXG5cclxuXHRcdGNvbnN0IGNvdW50UGVyUGFnZSA9IDIwO1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBpbmZvcy5sZW5ndGg7IGogKz0gY291bnRQZXJQYWdlKSB7XHJcblx0XHRcdHN0YXR1cy50ZXh0Q29udGVudCA9IGBQYWdlICR7aX0gb2YgJHtwLnBhZ2VDb3VudH0gKCR7an0gb2YgJHtpbmZvcy5sZW5ndGh9KWA7XHJcblx0XHRcdGF3YWl0IHdhaXREZWxheSgpO1xyXG5cdFx0XHRsZXQgZ2FsbGVyeUluZm9zO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGdhbGxlcnlJbmZvcyA9IGF3YWl0IGdGZXRjaC5nZXQoaW5mb3Muc2xpY2UoaiwgaiArIGNvdW50UGVyUGFnZSkubWFwKCh2KSA9PiB2LmlkZW50aWZpZXIpKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRcdHNldERlbGF5KGRlbGF5VGltZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAoY29uc3QgZyBvZiBnYWxsZXJ5SW5mb3MpIHtcclxuXHRcdFx0XHRpZiAoZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0cmVzdWx0cyArPSBKU09OLnN0cmluZ2lmeSh0b0NvbW1vbkpzb24oZyksIG51bGwsIFwiXCIpICsgXCJcXG5cIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dGV4dGFyZWEudmFsdWUgPSByZXN1bHRzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzdGF0dXMudGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3RhcnRUb3JyZW50KHN0YXR1cywgdGV4dGFyZWEpIHtcclxuXHRsZXQgcmVzdWx0cyA9IFwiXCI7XHJcblx0Y29uc3QgcCA9IHBhZ2luYXRpb24uZ2V0SW5mbyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcC5wYWdlQ291bnQ7ICsraSkge1xyXG5cdFx0YXdhaXQgd2FpdERlbGF5KCk7XHJcblxyXG5cdFx0Y29uc3QgcGFnZVVybCA9IHAuY3JlYXRlUGFnZVVybChpKTtcclxuXHRcdHN0YXR1cy50ZXh0Q29udGVudCA9IGBQYWdlICR7aX0gb2YgJHtwLnBhZ2VDb3VudH1gO1xyXG5cclxuXHRcdGxldCBzcmM7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRzcmMgPSBhd2FpdCBmZXRjaC5nZXQoeyB1cmw6IHBhZ2VVcmwsIGdtOiB0cnVlIH0pO1xyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0LS1pO1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHNldERlbGF5KGRlbGF5VGltZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzcmMucmVzcG9uc2VUZXh0LCBcInRleHQvaHRtbFwiKTtcclxuXHRcdGNvbnN0IGluZm9zID0gcGFnaW5hdGlvbi5nZXRHYWxsZXJ5VXJscyhkb2MuZG9jdW1lbnRFbGVtZW50KS5tYXAoKHYpID0+IGdVdGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKHYpKTtcclxuXHJcblx0XHRjb25zdCBjb3VudFBlclBhZ2UgPSAxO1xyXG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBpbmZvcy5sZW5ndGg7IGogKz0gY291bnRQZXJQYWdlKSB7XHJcblx0XHRcdHN0YXR1cy50ZXh0Q29udGVudCA9IGBQYWdlICR7aX0gb2YgJHtwLnBhZ2VDb3VudH0gKCR7an0gb2YgJHtpbmZvcy5sZW5ndGh9KWA7XHJcblx0XHRcdGF3YWl0IHdhaXREZWxheSgpO1xyXG5cdFx0XHRjb25zdCBpZCA9IGluZm9zW2pdLmlkZW50aWZpZXI7XHJcblx0XHRcdGxldCBzcmMyO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHNyYzIgPSBhd2FpdCBmZXRjaC5nZXQoeyB1cmw6IGBodHRwczovL2V4aGVudGFpLm9yZy9nYWxsZXJ5dG9ycmVudHMucGhwP2dpZD0ke2lkLmlkfSZ0PSR7aWQudG9rZW59YCwgZ206IHRydWUgfSk7XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHRzZXREZWxheShkZWxheVRpbWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBkb2MyID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzcmMyLnJlc3BvbnNlVGV4dCwgXCJ0ZXh0L2h0bWxcIik7XHJcblx0XHRcdGNvbnN0IGxpbmtzID0gZG9jMi5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm0gYVtocmVmXVtvbmNsaWNrXVwiKTtcclxuXHRcdFx0Zm9yIChsZXQgayA9IDA7IGsgPCBsaW5rcy5sZW5ndGg7ICsraykge1xyXG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBsaW5rc1trXTtcclxuXHRcdFx0XHRyZXN1bHRzICs9IFwiY3VybCBcIiArIGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSArIFwiIC0tb3V0cHV0IFwiICsgaWQuaWQgKyBcIl9cIiArIGlkLnRva2VuICsgXCJfXCIgKyBrICsgXCIudG9ycmVudFxcblwiO1xyXG5cdFx0XHRcdHRleHRhcmVhLnZhbHVlID0gcmVzdWx0cztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRzdGF0dXMudGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcblx0Y29uc3QgY3VycmVudFBhZ2VUeXBlID0gcGFnZVR5cGUuZ2V0KGRvY3VtZW50LCBsb2NhdGlvbik7XHJcblx0aWYgKGN1cnJlbnRQYWdlVHlwZSAhPT0gXCJmYXZvcml0ZXNcIikgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuXHRuLndyYXAgPSBcImhhcmRcIjtcclxuXHRuLnN0eWxlLndoaXRlU3BhY2UgPSBcInByZVwiO1xyXG5cdG4uc3BlbGxjaGVjayA9IGZhbHNlO1xyXG5cdGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKG4sIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcblxyXG5cdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHMsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcblxyXG5cdGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHRiLnRleHRDb250ZW50ID0gXCJGZXRjaCBNZXRhZGF0YVwiO1xyXG5cdGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN0YXJ0KHMsIG4pLCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoYiwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcclxuXHJcblx0YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0Yi50ZXh0Q29udGVudCA9IFwiRmV0Y2ggVG9ycmVudCBMaW5rc1wiO1xyXG5cdGIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN0YXJ0VG9ycmVudChzLCBuKSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbn1cclxuXHJcblxyXG5yZWFkeS5vblJlYWR5KG1haW4pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuY2xhc3MgRmV0Y2hFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCByZXNwb25zZSkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkZldGNoRXJyb3JcIjtcclxuXHRcdHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlc3BvbnNlIHtcclxuXHRjb25zdHJ1Y3RvcihyZWFkeVN0YXRlLCByZXNwb25zZUhlYWRlcnMsIHJlc3BvbnNlVGV4dCwgc3RhdHVzLCBzdGF0dXNUZXh0KSB7XHJcblx0XHR0aGlzLnJlYWR5U3RhdGUgPSByZWFkeVN0YXRlO1xyXG5cdFx0dGhpcy5yZXNwb25zZUhlYWRlcnMgPSByZXNwb25zZUhlYWRlcnM7XHJcblx0XHR0aGlzLnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcclxuXHRcdHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG5cdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFByb2dyZXNzRXZlbnQge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aENvbXB1dGFibGUsIGxvYWRlZCwgdG90YWwpIHtcclxuXHRcdHRoaXMubGVuZ3RoQ29tcHV0YWJsZSA9IGxlbmd0aENvbXB1dGFibGU7XHJcblx0XHR0aGlzLmxvYWRlZCA9IGxvYWRlZDtcclxuXHRcdHRoaXMudG90YWwgPSB0b3RhbDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRSZXNwb25zZUhlYWRlck1hcChhbGxIZWFkZXJzKSB7XHJcblx0Y29uc3QgcmVzcG9uc2VIZWFkZXJzID0ge307XHJcblxyXG5cdGNvbnN0IHJlID0gL1xccyooLiopXFxzKjpcXHMqKC4qKVxccyovO1xyXG5cdGZvciAoY29uc3QgbGluZSBvZiBhbGxIZWFkZXJzLnJlcGxhY2UoL1xcclxcblxccyokLywgXCJcIikuc3BsaXQoXCJcXHJcXG5cIikpIHtcclxuXHRcdGNvbnN0IG0gPSByZS5leGVjKGxpbmUpO1xyXG5cdFx0aWYgKG0gIT09IG51bGwpIHtcclxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzW21bMV0udG9Mb3dlckNhc2UoKV0gPSBtWzJdO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3BvbnNlSGVhZGVycztcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFhoclJlc3BvbnNlKHhocikge1xyXG5cdHJldHVybiBuZXcgUmVzcG9uc2UoXHJcblx0XHR4aHIucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSksXHJcblx0XHR4aHIucmVzcG9uc2VUZXh0LFxyXG5cdFx0eGhyLnN0YXR1cyxcclxuXHRcdHhoci5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHQvL2NvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdHhoci50aW1lb3V0ID0gdGltZW91dDtcclxuXHRcdGlmICh0eXBlb2Yob3ZlcnJpZGVNaW1lVHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUob3ZlcnJpZGVNaW1lVHlwZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoaGVhZGVycyAhPT0gbnVsbCAmJiB0eXBlb2YoaGVhZGVycykgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0Zm9yIChjb25zdCBrIGluIGhlYWRlcnMpIHtcclxuXHRcdFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBrKSkgeyBjb250aW51ZTsgfVxyXG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKGssIGhlYWRlcnNba10pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoY29udmVydFhoclJlc3BvbnNlKHhocikpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke3hoci5zdGF0dXNUZXh0fSAoJHt4aHIuc3RhdHVzfSlgLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSkpO1xyXG5cdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1lb3V0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0eGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5zZW5kKGRhdGEpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY29udmVydEdtUmVzcG9uc2UocmVzcG9uc2UpIHtcclxuXHRyZXR1cm4gbmV3IFJlc3BvbnNlKFxyXG5cdFx0cmVzcG9uc2UucmVhZHlTdGF0ZSxcclxuXHRcdGdldFJlc3BvbnNlSGVhZGVyTWFwKHJlc3BvbnNlLnJlc3BvbnNlSGVhZGVycyksXHJcblx0XHRyZXNwb25zZS5yZXNwb25zZVRleHQsXHJcblx0XHRyZXNwb25zZS5zdGF0dXMsXHJcblx0XHRyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdGNvbnN0IGJpbmFyeSA9IG9wdGlvbnMuYmluYXJ5O1xyXG5cdGNvbnN0IGhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcblx0Y29uc3QgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwO1xyXG5cdGNvbnN0IG9ucHJvZ3Jlc3MgPSBvcHRpb25zLm9ucHJvZ3Jlc3M7XHJcblx0Y29uc3Qgb3ZlcnJpZGVNaW1lVHlwZSA9IG9wdGlvbnMub3ZlcnJpZGVNaW1lVHlwZTtcclxuXHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbnN0IGRldGFpbHMgPSB7XHJcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0aGVhZGVyczogaGVhZGVycyxcclxuXHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogb3ZlcnJpZGVNaW1lVHlwZSxcclxuXHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0YmluYXJ5OiBiaW5hcnksXHJcblx0XHRcdHN5bmNocm9ub3VzOiBmYWxzZSxcclxuXHRcdFx0dGltZW91dDogdGltZW91dFxyXG5cdFx0fTtcclxuXHJcblx0XHRkZXRhaWxzLm9ubG9hZCA9IChlKSA9PiByZXNvbHZlKGNvbnZlcnRHbVJlc3BvbnNlKGUpKTtcclxuXHRcdGRldGFpbHMub25lcnJvciA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoYFJlcXVlc3QgZXJyb3I6ICR7ZS5zdGF0dXNUZXh0fSAoJHtlLnN0YXR1c30pYCwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub25hYm9ydCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJSZXF1ZXN0IGFib3J0ZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHRcdGRldGFpbHMub250aW1lb3V0ID0gKGUpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlRpbWVvdXQgcmVhY2hlZFwiLCBjb252ZXJ0R21SZXNwb25zZShlKSkpO1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob25wcm9ncmVzcykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRkZXRhaWxzLm9ucHJvZ3Jlc3MgPSAoZSkgPT4gb25wcm9ncmVzcyhuZXcgUHJvZ3Jlc3NFdmVudChlLmxlbmd0aENvbXB1dGFibGUsIGUubG9hZGVkLCBlLnRvdGFsKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Z20ueG1sSHR0cFJlcXVlc3QoZGV0YWlscyk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc0dtU3VwcG9ydGVkKHVzZUdtKSB7XHJcblx0cmV0dXJuICh1c2VHbSAmJiB0eXBlb2YoZ20ueG1sSHR0cFJlcXVlc3QpID09PSBcImZ1bmN0aW9uXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKG9wdGlvbnMuZ20pID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogcmVxdWVzdFhockludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJHRVRcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIlBPU1RcIjtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZCh0cnVlKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkdNIG5vdCBzdXBwb3J0ZWRcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHJlcXVlc3Q6IHJlcXVlc3QsXHJcblx0Z2V0OiBnZXQsXHJcblx0cG9zdDogcG9zdCxcclxuXHRnbToge1xyXG5cdFx0cmVxdWVzdDogcmVxdWVzdEdtLFxyXG5cdFx0Z2V0OiBnZXRHbSxcclxuXHRcdHBvc3Q6IHBvc3RHbSxcclxuXHR9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9Qcm9taXNlKGZuLCBzZWxmKSB7XHJcblx0cmV0dXJuICguLi5hcmdzKSA9PiB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJlc29sdmUoZm4uYXBwbHkoc2VsZiwgYXJncykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmVqZWN0KGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBnbSA9ICgob2JqZWN0cykgPT4ge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCB2ID0gR007IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cdFx0aWYgKHYgIT09IG51bGwgJiYgdHlwZW9mKHYpID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdHJldHVybiB2O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGlmIChvYmouR00gIT09IG51bGwgJiYgdHlwZW9mKG9iai5HTSkgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gb2JqLkdNO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGNhdGNoIChlKSB7IH1cclxuXHJcblx0Y29uc3QgbWFwcGluZyA9IFtcclxuXHRcdFsgXCJnZXRWYWx1ZVwiLCBcIkdNX2dldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJzZXRWYWx1ZVwiLCBcIkdNX3NldFZhbHVlXCIgXSxcclxuXHRcdFsgXCJkZWxldGVWYWx1ZVwiLCBcIkdNX2RlbGV0ZVZhbHVlXCIgXSxcclxuXHRcdFsgXCJ4bWxIdHRwUmVxdWVzdFwiLCBcIkdNX3htbGh0dHBSZXF1ZXN0XCIgXVxyXG5cdF07XHJcblxyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIG1hcHBpbmcpIHtcclxuXHRcdGxldCBwcm9taXNlID0gbnVsbDtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0Y29uc3QgZm4gPSBvYmpbdmFsdWVdO1xyXG5cdFx0XHRpZiAodHlwZW9mKGZuKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0cHJvbWlzZSA9IHRvUHJvbWlzZShmbiwgb2JqKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHByb21pc2UgPT09IG51bGwpIHtcclxuXHRcdFx0cHJvbWlzZSA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHJlamVjdChuZXcgRXJyb3IoYE5vdCBzdXBwb3J0ZWQgKCR7a2V5fSlgKSkpO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0W2tleV0gPSBwcm9taXNlO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59KS5jYWxsKHRoaXMsIFt0aGlzLCB3aW5kb3ddKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnbTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodmFsdWUsIFwidGV4dC9odG1sXCIpO1xyXG4gIHJldHVybiBkb2MuZG9jdW1lbnRFbGVtZW50LnRleHRDb250ZW50O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVycyh1cmwpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRjb25zdCBtYXRjaCA9IC9eKFteI1xcP10qKShcXD9bXiNdKik/KCNbXFx3XFxXXSopPyQvLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMl0gJiYgbWF0Y2hbMl0ubGVuZ3RoID4gMSkge1xyXG5cdFx0Y29uc3QgcGF0dGVybiA9IC8oW149XSopKD86PShbXFx3XFxXXSopKT8vO1xyXG5cdFx0Zm9yIChjb25zdCBwYXJ0IG9mIG1hdGNoWzJdLnN1YnN0cigxKS5zcGxpdChcIiZcIikpIHtcclxuXHRcdFx0aWYgKHBhcnQubGVuZ3RoID09PSAwKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRcdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4uZXhlYyhwYXJ0KTtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBtYXRjaDJbMl07XHJcblx0XHRcdHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQobWF0Y2gyWzFdKV0gPSAodmFsdWUgIT09IHVuZGVmaW5lZCA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUXVlcnlQYXJhbWV0ZXIodXJsLCBwYXJhbWV0ZXJOYW1lKSB7XHJcblx0cmV0dXJuIHVybC5yZXBsYWNlKFxyXG5cdFx0bmV3IFJlZ0V4cChgKFsmXFxcXD9dKSR7cGFyYW1ldGVyTmFtZX0oPzooPzo9W14mXSopPygmfCQpKWApLFxyXG5cdFx0KG0wLCBtMSwgbTIpID0+IChtMSA9PT0gXCI/XCIgJiYgbTIgPyBcIj9cIiA6IG0yKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRVcmxQYXJhbWV0ZXJzLFxyXG5cdHJlbW92ZVF1ZXJ5UGFyYW1ldGVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGlzUmVhZHlWYWx1ZSA9IGZhbHNlO1xyXG5sZXQgY2FsbGJhY2tzID0gbnVsbDtcclxubGV0IGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcbmNvbnN0IGNoZWNrSW50ZXJ2YWxSYXRlID0gMjUwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzSG9va2VkKCkge1xyXG5cdHJldHVybiBjYWxsYmFja3MgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvb2soKSB7XHJcblx0Y2FsbGJhY2tzID0gW107XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChjaGVja0lmUmVhZHksIGNoZWNrSW50ZXJ2YWxSYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5ob29rKCkge1xyXG5cdGNvbnN0IGNicyA9IGNhbGxiYWNrcztcclxuXHJcblx0Y2FsbGJhY2tzID0gbnVsbDtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbElkKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5cclxuXHRpbnZva2UoY2JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrcykge1xyXG5cdGZvciAobGV0IGNiIG9mIGNhbGxiYWNrcykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y2IoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlYWR5KCkge1xyXG5cdGlmIChpc1JlYWR5VmFsdWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdGlmIChpc0hvb2tlZCgpKSB7IHVuaG9vaygpOyB9XHJcblx0XHRpc1JlYWR5VmFsdWUgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlJlYWR5KCkge1xyXG5cdGlzUmVhZHkoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uUmVhZHkoY2FsbGJhY2spIHtcclxuXHRpZiAoaXNSZWFkeSgpKSB7XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCFpc0hvb2tlZCgpKSB7IGhvb2soKTsgfVxyXG5cclxuXHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvblJlYWR5OiBvblJlYWR5LFxyXG5cdGdldCBpc1JlYWR5KCkgeyByZXR1cm4gaXNSZWFkeSgpOyB9XHJcbn07XHJcbiJdfQ==
