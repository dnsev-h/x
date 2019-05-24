// ==UserScript==
// @name        x/gallery-resurrect
// @version     1.2.0
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
	if (tags !== null && typeof(tags) === "object") {
		for (const namespace in tags) {
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

},{"../../fetch":12,"./get-from-json":4}],4:[function(require,module,exports){
"use strict";

const types = require("./types");
const utils = require("./utils");

const defaultNamespace = "misc";


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

},{"./types":5,"./utils":6}],5:[function(require,module,exports){
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
};

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

},{"./style":10}],8:[function(require,module,exports){
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

},{"../javascript":19}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{"./gm":18}],13:[function(require,module,exports){
module.exports = "<div class=\"gm x-resurrected\">\r\n\t<div id=\"gleft\">\r\n\t\t<div id=\"gd1\">\r\n\t\t\t<div><img id=\"x-gallery-resurrect-main-thumbnail\" style=\"max-width:250px;max-height:375px;display:block;\" /></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"gd2\">\r\n\t\t<h1 id=\"gn\"></h1>\r\n\t\t<h1 id=\"gj\"></h1>\r\n\t</div>\r\n\t<div id=\"gright\">\r\n\t\t<div id=\"gd5\">\r\n\t\t\t<p class=\"g3 gsp\" id=\"x-gallery-resurrect-gallery-unavailable\"><img class=\"x-gallery-resurrect-mr-gif\" /> <a title=\"Some information has been resurrected\">Gallery unavailable</a></p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"gmid\">\r\n\t\t<div id=\"gd3\">\r\n\t\t\t<div id=\"gdc\">\r\n\t\t\t\t<a class=\"cs\" id=\"x-gallery-resurrect-category\"></a>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdn\"><a id=\"x-gallery-resurrect-uploader\"></a></div>\r\n\t\t\t<div id=\"gdd\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Posted:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-date-uploaded\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Visible:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-visible\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr id=\"x-gallery-resurrect-language-row\">\r\n\t\t\t\t\t\t<td class=\"gdt1\">Language:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-language\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">File Size:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-size\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"gdt1\">Length:</td>\r\n\t\t\t\t\t\t<td class=\"gdt2\" id=\"x-gallery-resurrect-file-count\"></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdr\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"grt1\">Rating:</td>\r\n\t\t\t\t\t\t<td id=\"grt2\">\r\n\t\t\t\t\t\t\t<div id=\"rating_image\" class=\"ir\" style=\"background-position:-80px -1px\"></div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td id=\"grt3\"><span id=\"rating_count\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td id=\"rating_label\" colspan=\"3\">Average: <span id=\"x-gallery-resurrect-average-rating\"></span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"gdf\">\r\n\t\t\t\t<div style=\"float:left;cursor:pointer\" id=\"fav\"></div>\r\n\t\t\t\t<div style=\"float:left\">&nbsp; <a id=\"x-gallery-resurrect-favorites-link\" target=\"_blank\"><img class=\"x-gallery-resurrect-mr-gif\" /> Add to Favorites</a></div>\r\n\t\t\t\t<div class=\"c\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div id=\"gd4\">\r\n\t\t\t<div id=\"taglist\">\r\n\t\t\t\t<table><tbody id=\"x-gallery-resurrect-tags\"></tbody></table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"c\"></div>\r\n\t</div>\r\n\t<div class=\"c\"></div>\r\n</div>\r\n<div id=\"asm\"></div>\r\n<div class=\"gtb\">\r\n\t<p class=\"gpc\">Showing 0 - 0 of 0 images</p>\r\n\t<table class=\"ptt\"><tr><td><a href=\"?p=1\"></a></td></tr></table>\r\n</div>";
},{}],14:[function(require,module,exports){
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
	const galleryLinks = require("../api/gallery-links");
	const link = galleryLinks.createRightSideLink("Metadata JSON").link;
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

},{"../api/gallery-info/common-json":2,"../api/gallery-info/fetch":3,"../api/gallery-info/utils":6,"../api/gallery-links":7,"../api/page-type":8,"../api/popups":9,"../api/style":10,"../api/urls":11,"../javascript":19,"../ready":20,"../style":21,"./gallery.html":13,"./navigation-bar-dark.html":15,"./navigation-bar-light.html":16,"./style.css":17}],15:[function(require,module,exports){
module.exports = "<div id=\"nb\" class=\"nosel x-resurrected\">\r\n\t<div><a class=\"nbw\" href=\"/\">Front<span class=\"nbw1\"> Page</span></a></div>\r\n\t<div><a href=\"/watched\">Watched</a></div>\r\n\t<div><a href=\"/popular\">Popular</a></div>\r\n\t<div><a href=\"/torrents.php\">Torrents</a></div>\r\n\t<div><a href=\"/favorites.php\">Fav<span class=\"nbw1\">orite</span>s</a></div>\r\n\t<div><a href=\"/uconfig.php\">Settings</a></div>\r\n\t<div><a href=\"/upload/manage.php\"><span class=\"nbw2\">My </span>Uploads</a></div>\r\n\t<div><a href=\"/mytags\">My Tags</a></div>\r\n</div>";
},{}],16:[function(require,module,exports){
module.exports = "<div id=\"nb\" class=\"nosel x-resurrected\">\r\n\t<div><a class=\"nbw\" href=\"/\">Front<span class=\"nbw1\"> Page</span></a></div>\r\n\t<div><a href=\"/watched\">Watched</a></div>\r\n\t<div><a href=\"/popular\">Popular</a></div>\r\n\t<div><a href=\"/torrents.php\">Torrents</a></div>\r\n\t<div><a href=\"/favorites.php\">Fav<span class=\"nbw1\">orite</span>s</a></div>\r\n\t<div><a href=\"/home.php\"><span class=\"nbw2\">My </span>Home</a></div>\r\n\t<div><a href=\"https://upload.e-hentai.org/manage.php\"><span class=\"nbw2\">My </span>Uploads</a></div>\r\n\t<div><a href=\"/toplist.php\">Toplists</a></div>\r\n\t<div><a href=\"/bounty.php\">Bounties</a></div>\r\n\t<div><a href=\"/news.php\">News</a></div>\r\n\t<div><a href=\"https://forums.e-hentai.org/\">Forums</a></div>\r\n\t<div><a href=\"https://ehwiki.org/\">Wiki</a></div>\r\n\t<div><a href=\"https://hentaiverse.org/\" onclick=\"popUp('https://hentaiverse.org/',1250,720); return false\">H<span class=\"nbw1\">entai</span>V<span class=\"nbw1\">erse</span></a></div>\r\n</div>";
},{}],17:[function(require,module,exports){
module.exports = "body>:not(.x-resurrected){display:none!important}#x-gallery-resurrect-category{text-decoration:none}";
},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{"./api/style":10}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2NvbW1vbi1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZmV0Y2guanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby9nZXQtZnJvbS1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdHlwZXMuanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby91dGlscy5qcyIsInNyYy9hcGkvZ2FsbGVyeS1saW5rcy5qcyIsInNyYy9hcGkvcGFnZS10eXBlLmpzIiwic3JjL2FwaS9wb3B1cHMuanMiLCJzcmMvYXBpL3N0eWxlLmpzIiwic3JjL2FwaS91cmxzLmpzIiwic3JjL2ZldGNoLmpzIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L2dhbGxlcnkuaHRtbCIsInNyYy9nYWxsZXJ5LXJlc3VycmVjdC9tYWluLmpzIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L25hdmlnYXRpb24tYmFyLWRhcmsuaHRtbCIsInNyYy9nYWxsZXJ5LXJlc3VycmVjdC9uYXZpZ2F0aW9uLWJhci1saWdodC5odG1sIiwic3JjL2dhbGxlcnktcmVzdXJyZWN0L3N0eWxlLmNzcyIsInNyYy9nbS5qcyIsInNyYy9qYXZhc2NyaXB0LmpzIiwic3JjL3JlYWR5LmpzIiwic3JjL3N0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbk5BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JRQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5SWRlbnRpZmllciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIHRva2VuKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRva2VuID0gdG9rZW47XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlRnJvbVVybCh1cmwpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gL14uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT8kLy5leGVjKHVybCk7XHJcblx0XHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBwYXRoID0gbWF0Y2hbMV0ucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgXCJcIikucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xyXG5cdFx0aWYgKHBhdGhbMF0gIT09IFwiZ1wiIHx8IHBhdGgubGVuZ3RoIDwgMykgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IGlkID0gcGFyc2VJbnQocGF0aFsxXSwgMTApO1xyXG5cdFx0cmV0dXJuIChOdW1iZXIuaXNOYU4oaWQpID8gbnVsbCA6IG5ldyBHYWxsZXJ5SWRlbnRpZmllcihpZCwgcGF0aFsyXSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgR2FsbGVyeUlkZW50aWZpZXIgPSByZXF1aXJlKFwiLi4vZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvU3RyaW5nT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRyZXR1cm4gdHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b051bWJlck9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaWRlbnRpZmllciwgZGVmYXVsdFZhbHVlKSB7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwgfHwgdHlwZW9mKGlkZW50aWZpZXIpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdpZDogaWRlbnRpZmllci5pZCxcclxuXHRcdHRva2VuOiBpZGVudGlmaWVyLnRva2VuXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihuZXdlclZlcnNpb25zKSB7XHJcblx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0aWYgKEFycmF5LmlzQXJyYXkobmV3ZXJWZXJzaW9ucykpIHtcclxuXHRcdGZvciAoY29uc3QgbmV3ZXJWZXJzaW9uIG9mIG5ld2VyVmVyc2lvbnMpIHtcclxuXHRcdFx0cmVzdWx0LnB1c2goe1xyXG5cdFx0XHRcdGdhbGxlcnk6IChcclxuXHRcdFx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ld2VyVmVyc2lvbi5pZGVudGlmaWVyLCBudWxsKSB8fFxyXG5cdFx0XHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLCBudWxsKSksXHJcblx0XHRcdFx0bmFtZTogdG9TdHJpbmdPckRlZmF1bHQobmV3ZXJWZXJzaW9uLm5hbWUpLFxyXG5cdFx0XHRcdGRhdGVfdXBsb2FkZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KG5ld2VyVmVyc2lvbi5kYXRlVXBsb2FkZWQpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YWdzVG9Db21tb25Kc29uKHRhZ3MpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRpZiAodGFncyAhPT0gbnVsbCAmJiB0eXBlb2YodGFncykgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdGZvciAoY29uc3QgbmFtZXNwYWNlIGluIHRhZ3MpIHtcclxuXHRcdFx0Y29uc3QgdGFnTGlzdCA9IHRhZ3NbbmFtZXNwYWNlXTtcclxuXHRcdFx0cmVzdWx0W25hbWVzcGFjZV0gPSBbLi4udGFnTGlzdF07XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uRmF2b3JpdGVDYXRlZ29yeShpbmZvKSB7XHJcblx0aWYgKGluZm8uZmF2b3JpdGVDYXRlZ29yeSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdHJldHVybiB7XHJcblx0XHRpZDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNhdGVnb3J5LmluZGV4LCAwKSxcclxuXHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkudGl0bGUsIFwiXCIpXHJcblx0fTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uRnVsbEdhbGxlcnlJbmZvSnNvbihpbmZvKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdhbGxlcnk6IChcclxuXHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaW5mby5pZGVudGlmaWVyLCBudWxsKSB8fFxyXG5cdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihuZXcgR2FsbGVyeUlkZW50aWZpZXIoMCwgXCJcIiksIG51bGwpKSxcclxuXHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlLCBcIlwiKSxcclxuXHRcdHRpdGxlX29yaWdpbmFsOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlT3JpZ2luYWwsIFwiXCIpLFxyXG5cdFx0ZGF0ZV91cGxvYWRlZDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5kYXRlVXBsb2FkZWQsIDApLFxyXG5cdFx0Y2F0ZWdvcnk6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uY2F0ZWdvcnksIFwiXCIpLFxyXG5cdFx0dXBsb2FkZXI6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udXBsb2FkZXIsIFwiXCIpLFxyXG5cdFx0cmF0aW5nOiB7XHJcblx0XHRcdGF2ZXJhZ2U6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8ucmF0aW5nQXZlcmFnZSwgMCksXHJcblx0XHRcdGNvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLnJhdGluZ0NvdW50LCAwKSxcclxuXHRcdH0sXHJcblx0XHRmYXZvcml0ZXM6IHtcclxuXHRcdFx0Y2F0ZWdvcnk6IChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgIT09IG51bGwgPyB0b051bWJlck9yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkuaW5kZXgsIC0xKSA6IC0xKSxcclxuXHRcdFx0Y2F0ZWdvcnlfdGl0bGU6IChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgIT09IG51bGwgPyB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkudGl0bGUsIFwiXCIpIDogXCJcIiksXHJcblx0XHRcdGNvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ291bnQsIDApXHJcblx0XHR9LFxyXG5cdFx0cGFyZW50OiBnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpbmZvLnBhcmVudCwgbnVsbCksXHJcblx0XHRuZXdlcl92ZXJzaW9uczogbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihpbmZvLm5ld2VyVmVyc2lvbnMpLFxyXG5cdFx0dGh1bWJuYWlsOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLm1haW5UaHVtYm5haWxVcmwsIFwiXCIpLFxyXG5cdFx0dGh1bWJuYWlsX3NpemU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGh1bWJuYWlsU2l6ZSwgXCJcIiksXHJcblx0XHR0aHVtYm5haWxfcm93czogdG9OdW1iZXJPckRlZmF1bHQoaW5mby50aHVtYm5haWxSb3dzLCAwKSxcclxuXHRcdGltYWdlX2NvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLmZpbGVDb3VudCwgMCksXHJcblx0XHRpbWFnZXNfcmVzaXplZDogZmFsc2UsXHJcblx0XHR0b3RhbF9maWxlX3NpemVfYXBwcm94OiB0b051bWJlck9yRGVmYXVsdChpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSwgMCksXHJcblx0XHR2aXNpYmxlOiAoaW5mby52aXNpYmxlID09PSB0cnVlKSxcclxuXHRcdHZpc2libGVfcmVhc29uOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnZpc2libGVSZWFzb24sIFwiXCIpLFxyXG5cdFx0bGFuZ3VhZ2U6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8ubGFuZ3VhZ2UsIFwiXCIpLFxyXG5cdFx0dHJhbnNsYXRlZDogKGluZm8udHJhbnNsYXRlZCA9PT0gdHJ1ZSksXHJcblx0XHR0YWdzOiB0YWdzVG9Db21tb25Kc29uKGluZm8udGFncyksXHJcblx0XHQvLyBOZXdcclxuXHRcdHRhZ3NfaGF2ZV9uYW1lc3BhY2U6IChpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID09PSB0cnVlKSxcclxuXHRcdHRvcnJlbnRfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8udG9ycmVudENvdW50LCAwKSxcclxuXHRcdGFyY2hpdmVyX2tleTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5hcmNoaXZlcktleSwgbnVsbCksXHJcblx0XHRzb3VyY2U6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uc291cmNlLCBudWxsKSxcclxuXHRcdHNvdXJjZV9zaXRlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnNvdXJjZVNpdGUsIG51bGwpLFxyXG5cdFx0ZGF0ZV9nZW5lcmF0ZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZGF0ZUdlbmVyYXRlZCwgMClcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkdhbGxlcnlJbmZvSnNvbihpbmZvKSB7XHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZGF0ZVVwbG9hZGVkLCAwKSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlLCBcIlwiKSxcclxuXHRcdHRpdGxlX29yaWdpbmFsOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlT3JpZ2luYWwsIFwiXCIpLFxyXG5cclxuXHRcdGNhdGVnb3J5OiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmNhdGVnb3J5LCBcIlwiKSxcclxuXHRcdHRhZ3M6IHRhZ3NUb0NvbW1vbkpzb24oaW5mby50YWdzKSxcclxuXHJcblx0XHRsYW5ndWFnZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5sYW5ndWFnZSwgXCJcIiksXHJcblx0XHR0cmFuc2xhdGVkOiAhIWluZm8udHJhbnNsYXRlZCxcclxuXHJcblx0XHRmYXZvcml0ZV9jYXRlZ29yeTogdG9Db21tb25GYXZvcml0ZUNhdGVnb3J5KGluZm8pLFxyXG5cclxuXHRcdHVwbG9hZF9kYXRlOiBbXHJcblx0XHRcdGRhdGUuZ2V0VVRDRnVsbFllYXIoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENNb250aCgpICsgMSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENEYXRlKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDSG91cnMoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENNaW51dGVzKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDU2Vjb25kcygpXHJcblx0XHRdLFxyXG5cclxuXHRcdHNvdXJjZToge1xyXG5cdFx0XHRzaXRlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnNvdXJjZVNpdGUsIFwiXCIpLFxyXG5cdFx0XHRnaWQ6IChpbmZvLmlkZW50aWZpZXIgIT09IG51bGwgPyB0b051bWJlck9yRGVmYXVsdChpbmZvLmlkZW50aWZpZXIuaWQsIDApIDogMCksXHJcblx0XHRcdHRva2VuOiAoaW5mby5pZGVudGlmaWVyICE9PSBudWxsID8gdG9TdHJpbmdPckRlZmF1bHQoaW5mby5pZGVudGlmaWVyLnRva2VuLCAwKSA6IDApLFxyXG5cdFx0XHRwYXJlbnRfZ2FsbGVyeTogZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaW5mby5wYXJlbnQsIG51bGwpLFxyXG5cdFx0XHRuZXdlcl92ZXJzaW9uczogbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihpbmZvLm5ld2VyVmVyc2lvbnMpXHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25Kc29uKGluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2FsbGVyeV9pbmZvOiB0b0NvbW1vbkdhbGxlcnlJbmZvSnNvbihpbmZvKSxcclxuXHRcdGdhbGxlcnlfaW5mb19mdWxsOiB0b0NvbW1vbkZ1bGxHYWxsZXJ5SW5mb0pzb24oaW5mbylcclxuXHR9O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0dG9Db21tb25Kc29uXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZmV0Y2ggPSByZXF1aXJlKFwiLi4vLi4vZmV0Y2hcIik7XHJcbmNvbnN0IGdldEZyb21Kc29uID0gcmVxdWlyZShcIi4vZ2V0LWZyb20tanNvblwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRBcnJheUNvdW50KGFycmF5LCBjb3VudCwgZmlsbCkge1xyXG5cdGNvbnN0IGlpID0gYXJyYXkubGVuZ3RoO1xyXG5cdGlmIChpaSAhPT0gY291bnQpIHtcclxuXHRcdGlmIChpaSA+IGNvdW50KSB7XHJcblx0XHRcdGFycmF5LnNwbGljZShjb3VudCwgaWkgLSBjb3VudCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gaWk7IGkgPCBjb3VudDsgKytpKSB7XHJcblx0XHRcdFx0YXJyYXkucHVzaChmaWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0R2FsbGVyeUluZm8oaWRlbnRpZmllcnMpIHtcclxuXHRjb25zdCBnaWRMaXN0ID0gW107XHJcblx0Y29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoaWRlbnRpZmllcnMpO1xyXG5cdGlmIChpc0FycmF5KSB7XHJcblx0XHRmb3IgKGNvbnN0IGlkZW50aWZpZXIgb2YgaWRlbnRpZmllcnMpIHtcclxuXHRcdFx0Z2lkTGlzdC5wdXNoKFsgaWRlbnRpZmllci5pZCwgaWRlbnRpZmllci50b2tlbiBdKTtcclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0Z2lkTGlzdC5wdXNoKFsgaWRlbnRpZmllcnMuaWQsIGlkZW50aWZpZXJzLnRva2VuIF0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZGF0YSA9IHtcclxuXHRcdG1ldGhvZDogXCJnZGF0YVwiLFxyXG5cdFx0Z2lkbGlzdDogZ2lkTGlzdCxcclxuXHRcdG5hbWVzcGFjZTogMVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNvdXJjZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG5cdGNvbnN0IGZldGNoUmVzdWx0ID0gYXdhaXQgZmV0Y2gucG9zdCh7XHJcblx0XHRnbTogdHJ1ZSxcclxuXHRcdHVybDogXCIvYXBpLnBocFwiLFxyXG5cdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgcmVzdWx0SnNvbiA9IEpTT04ucGFyc2UoZmV0Y2hSZXN1bHQucmVzcG9uc2VUZXh0KTtcclxuXHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGZvciAoY29uc3QganNvbiBvZiByZXN1bHRKc29uLmdtZXRhZGF0YSkge1xyXG5cdFx0aWYgKGpzb24uZXJyb3IpIHtcclxuXHRcdFx0cmVzdWx0cy5wdXNoKG51bGwpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgaW5mbyA9IGdldEZyb21Kc29uKGpzb24sIHNvdXJjZVVybCk7XHJcblx0XHRcdHJlc3VsdHMucHVzaChpbmZvKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNldEFycmF5Q291bnQocmVzdWx0cywgZ2lkTGlzdC5sZW5ndGgsIG51bGwpO1xyXG5cclxuXHRyZXR1cm4gaXNBcnJheSA/IHJlc3VsdHMgOiByZXN1bHRzWzBdO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0OiBnZXRHYWxsZXJ5SW5mb1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcblxyXG5jb25zdCBkZWZhdWx0TmFtZXNwYWNlID0gXCJtaXNjXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG4gIGNvbnN0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodmFsdWUsIFwidGV4dC9odG1sXCIpO1xyXG4gIHJldHVybiBkb2MuZG9jdW1lbnRFbGVtZW50LnRleHRDb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRKc29uTnVtYmVyKHZhbHVlKSB7XHJcblx0aWYgKHR5cGVvZih2YWx1ZSkgIT09IFwibnVtYmVyXCIpIHtcclxuXHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSBcInN0cmluZ1wiKSB7IHJldHVybiBudWxsOyB9XHJcblx0XHR2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG5cdH1cclxuXHRyZXR1cm4gKE51bWJlci5pc05hTih2YWx1ZSkgPyBudWxsIDogdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRKc29uU3RyaW5nKHZhbHVlKSB7XHJcblx0aWYgKHR5cGVvZih2YWx1ZSkgPT09IFwic3RyaW5nXCIpIHsgcmV0dXJuIHZhbHVlOyB9XHJcblx0aWYgKHR5cGVvZih2YWx1ZSkgPT09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIHZhbHVlOyB9XHJcblx0cmV0dXJuIGAke3ZhbHVlfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhZ0FuZE5hbWVzcGFjZSh0YWcpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gL14oPzooW146XSopOik/KFtcXHdcXFddKikkLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0YWcpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwpID9cclxuXHRcdCh7IHRhZzogbWF0Y2hbMl0sIG5hbWVzcGFjZTogbWF0Y2hbMV0gfHwgZGVmYXVsdE5hbWVzcGFjZSB9KSA6XHJcblx0XHQoeyB0YWc6IHRhZywgbmFtZXNwYWNlOiBkZWZhdWx0TmFtZXNwYWNlIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b1Byb3BlckNhc2UodGV4dCkge1xyXG5cdHJldHVybiB0ZXh0LnJlcGxhY2UoLyhefFxcVykoXFx3KS9nLCAobTAsIG0xLCBtMikgPT4gYCR7bTF9JHttMi50b1VwcGVyQ2FzZSgpfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUpzb24oaW5mbywganNvbikge1xyXG5cdGluZm8udGl0bGUgPSBnZXRTdHJpbmdGcm9tSHRtbEVzY2FwZWRTdHJpbmcoZ2V0SnNvblN0cmluZyhqc29uLnRpdGxlKSk7XHJcblx0aW5mby50aXRsZU9yaWdpbmFsID0gZ2V0U3RyaW5nRnJvbUh0bWxFc2NhcGVkU3RyaW5nKGdldEpzb25TdHJpbmcoanNvbi50aXRsZV9qcG4pKTtcclxuXHRpbmZvLm1haW5UaHVtYm5haWxVcmwgPSBnZXRKc29uU3RyaW5nKGpzb24udGh1bWIpO1xyXG5cdGNvbnN0IGNhdGVnb3J5ID0gZ2V0SnNvblN0cmluZyhqc29uLmNhdGVnb3J5KTtcclxuXHRpbmZvLmNhdGVnb3J5ID0gKGNhdGVnb3J5ICE9PSBudWxsID8gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA6IG51bGwpO1xyXG5cdGluZm8udXBsb2FkZXIgPSBnZXRKc29uU3RyaW5nKGpzb24udXBsb2FkZXIpO1xyXG5cclxuXHRpbmZvLnJhdGluZ0F2ZXJhZ2UgPSBnZXRKc29uTnVtYmVyKGpzb24ucmF0aW5nKTtcclxuXHJcblx0Y29uc3QgZGF0ZVVwbG9hZGVkID0gZ2V0SnNvbk51bWJlcihqc29uLnBvc3RlZCk7XHJcblx0aW5mby5kYXRlVXBsb2FkZWQgPSAoZGF0ZVVwbG9hZGVkICE9PSBudWxsID8gbmV3IERhdGUoZGF0ZVVwbG9hZGVkICogMTAwMCkuZ2V0VGltZSgpIDogbnVsbCk7XHJcblxyXG5cdGluZm8udmlzaWJsZSA9ICFqc29uLmV4cHVuZ2VkO1xyXG5cclxuXHRpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IGdldEpzb25OdW1iZXIoanNvbi5maWxlc2l6ZSk7XHJcblxyXG5cdGluZm8uZmlsZUNvdW50ID0gZ2V0SnNvbk51bWJlcihqc29uLmZpbGVjb3VudCk7XHJcblxyXG5cdGluZm8uYXJjaGl2ZXJLZXkgPSBnZXRKc29uU3RyaW5nKGpzb24uYXJjaGl2ZXJfa2V5KTtcclxuXHRpbmZvLnRvcnJlbnRDb3VudCA9IGdldEpzb25OdW1iZXIoanNvbi50b3JyZW50Y291bnQpO1xyXG5cclxuXHRjb25zdCB0YWdzID0ge307XHJcblx0aWYgKEFycmF5LmlzQXJyYXkoanNvbi50YWdzKSkge1xyXG5cdFx0Zm9yIChjb25zdCBqc29uVGFnIG9mIGpzb24udGFncykge1xyXG5cdFx0XHRjb25zdCBzdHJpbmdUYWcgPSBnZXRKc29uU3RyaW5nKGpzb25UYWcpO1xyXG5cdFx0XHRpZiAoc3RyaW5nVGFnID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0XHRjb25zdCB7dGFnLCBuYW1lc3BhY2V9ID0gZ2V0VGFnQW5kTmFtZXNwYWNlKHN0cmluZ1RhZyk7XHJcblxyXG5cdFx0XHRsZXQgbmFtZXNwYWNlVGFncztcclxuXHRcdFx0aWYgKHRhZ3MuaGFzT3duUHJvcGVydHkobmFtZXNwYWNlKSkge1xyXG5cdFx0XHRcdG5hbWVzcGFjZVRhZ3MgPSB0YWdzW25hbWVzcGFjZV07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bmFtZXNwYWNlVGFncyA9IFtdO1xyXG5cdFx0XHRcdHRhZ3NbbmFtZXNwYWNlXSA9IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MucHVzaCh0YWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aW5mby50YWdzID0gdGFncztcclxuXHRpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID0gdHJ1ZTtcclxuXHJcblx0Ly8gVGFnLWJhc2VkIGluZm9cclxuXHRpZiAodGFncy5oYXNPd25Qcm9wZXJ0eShcImxhbmd1YWdlXCIpKSB7XHJcblx0XHRjb25zdCBsYW5ndWFnZVRhZ3MgPSB0YWdzLmxhbmd1YWdlO1xyXG5cdFx0Y29uc3QgdHJhbnNsYXRlZEluZGV4ID0gbGFuZ3VhZ2VUYWdzLmluZGV4T2YoXCJ0cmFuc2xhdGVkXCIpO1xyXG5cdFx0aW5mby50cmFuc2xhdGVkID0gKHRyYW5zbGF0ZWRJbmRleCA+PSAwKTtcclxuXHRcdGlmICh0cmFuc2xhdGVkSW5kZXggIT09IDApIHtcclxuXHRcdFx0aW5mby5sYW5ndWFnZSA9IHRvUHJvcGVyQ2FzZShsYW5ndWFnZVRhZ3NbMF0pO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRpbmZvLmxhbmd1YWdlID0gXCJKYXBhbmVzZVwiO1xyXG5cdFx0aW5mby50cmFuc2xhdGVkID0gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGcm9tSnNvbihqc29uLCB1cmwpIHtcclxuXHRpZiAoanNvbiA9PT0gbnVsbCB8fCB0eXBlb2YoanNvbikgIT09IFwib2JqZWN0XCIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWQgPSBnZXRKc29uTnVtYmVyKGpzb24uZ2lkKTtcclxuXHRjb25zdCB0b2tlbiA9IGdldEpzb25TdHJpbmcoanNvbi50b2tlbik7XHJcblx0aWYgKGlkID09PSBudWxsIHx8IHRva2VuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSBuZXcgdHlwZXMuR2FsbGVyeUluZm8oKTtcclxuXHRpbmZvLmlkZW50aWZpZXIgPSBuZXcgdHlwZXMuR2FsbGVyeUlkZW50aWZpZXIoaWQsIHRva2VuKTtcclxuXHRpbmZvLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRpbmZvLnNvdXJjZSA9IFwianNvblwiO1xyXG5cdHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSnNvbihpbmZvLCBqc29uKTtcclxuXHRpbmZvLnNvdXJjZVNpdGUgPSB1dGlscy5nZXRTb3VyY2VTaXRlRnJvbVVybCh1cmwpO1xyXG5cdGluZm8uZGF0ZUdlbmVyYXRlZCA9IERhdGUubm93KCk7XHJcblx0cmV0dXJuIGluZm87XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldEZyb21Kc29uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlJZGVudGlmaWVyID0gcmVxdWlyZShcIi4uL2dhbGxlcnktaWRlbnRpZmllclwiKS5HYWxsZXJ5SWRlbnRpZmllcjtcclxuXHJcblxyXG5jbGFzcyBHYWxsZXJ5SW5mbyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZSA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlT3JpZ2luYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlVXBsb2FkZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLnVwbG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQXZlcmFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0NvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5tYWluVGh1bWJuYWlsVXJsID0gbnVsbFxyXG5cdFx0dGhpcy50aHVtYm5haWxTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsUm93cyA9IG51bGw7XHJcblx0XHR0aGlzLmZpbGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0dGhpcy52aXNpYmxlUmVhc29uID0gbnVsbDtcclxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy50cmFuc2xhdGVkID0gbnVsbDtcclxuXHRcdHRoaXMuYXJjaGl2ZXJLZXkgPSBudWxsO1xyXG5cdFx0dGhpcy50b3JyZW50Q291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzID0gbnVsbDtcclxuXHRcdHRoaXMudGFnc0hhdmVOYW1lc3BhY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XHJcblx0XHR0aGlzLm5ld2VyVmVyc2lvbnMgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2VTaXRlID0gbnVsbDtcclxuXHRcdHRoaXMuZGF0ZUdlbmVyYXRlZCA9IG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0R2FsbGVyeUlkZW50aWZpZXIsXHJcblx0R2FsbGVyeUluZm9cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5cclxuY29uc3Qgc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzID0gWyBcImJcIiwgXCJrYlwiLCBcIm1iXCIsIFwiZ2JcIiBdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBtYXRjaCA9IC9cXD8oPzoofFtcXHdcXFddKj8mKXA9KFtcXCtcXC1dP1xcZCspKT8vLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0pIHtcclxuXHRcdGNvbnN0IHBhZ2UgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0aWYgKCFOdW1iZXIuaXNOYU4ocGFnZSkpIHsgcmV0dXJuIHBhZ2U7IH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgaWRlbnRpZmllciA9IHR5cGVzLkdhbGxlcnlJZGVudGlmaWVyLmNyZWF0ZUZyb21VcmwodXJsKTtcclxuXHRpZiAoaWRlbnRpZmllciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYWdlID0gZ2V0R2FsbGVyeVBhZ2VGcm9tVXJsKHVybCk7XHJcblx0cmV0dXJuIHsgaWRlbnRpZmllciwgcGFnZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCeXRlc1NpemVGcm9tTGFiZWwobnVtYmVyLCBsYWJlbCkge1xyXG5cdGxldCBpID0gc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzLmluZGV4T2YobGFiZWwudG9Mb3dlckNhc2UoKSk7XHJcblx0aWYgKGkgPCAwKSB7IGkgPSAwOyB9XHJcblx0cmV0dXJuIE1hdGguZmxvb3IocGFyc2VGbG9hdChudW1iZXIpICogTWF0aC5wb3coMTAyNCwgaSkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9eKD86KD86W2Etel1bYS16MC05XFwrXFwtXFwuXSo6XFwvKnxcXC97Mix9KShbXlxcL10qKSk/KFxcLz9bXFx3XFxXXSopJC9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybCk7XHJcblxyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgaG9zdCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJleGhlbnRhaVwiOyB9XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZS1oZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJlLWhlbnRhaVwiOyB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwsXHJcblx0Z2V0Qnl0ZXNTaXplRnJvbUxhYmVsLFxyXG5cdGdldFNvdXJjZVNpdGVGcm9tVXJsXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi9zdHlsZVwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSaWdodFNpZGVMaW5rKGxhYmVsKSB7XHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZDVcIik7XHJcblx0aWYgKHBhcmVudCA9PT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIHsgbGluazogbnVsbCwgbGlua0NvbnRhaW5lcjogbnVsbCB9O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdGxpbmtDb250YWluZXIuY2xhc3NOYW1lID0gXCJnMiBnc3BcIjtcclxuXHJcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRpbWcuc3JjID0gc3R5bGUuZ2V0QXJyb3dJY29uVXJsKCk7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiKSk7XHJcblxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRsaW5rLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcblx0cGFyZW50LmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xyXG5cclxuXHRyZXR1cm4geyBsaW5rLCBsaW5rQ29udGFpbmVyIH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVSaWdodFNpZGVMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHNob3dPbkNsaWNrKHNlbGVjdG9yLCB1cmwsIHNpemUpIHtcclxuXHRsZXQgd2lkdGggPSA2NzU7XHJcblx0bGV0IGhlaWdodCA9IDQxNTtcclxuXHRpZiAoc2l6ZSAhPT0gbnVsbCAmJiB0eXBlb2Yoc2l6ZSkgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdCh7d2lkdGgsIGhlaWdodH0gPSBzaXplKTtcclxuXHR9XHJcblxyXG5cdHJlcXVpcmUoXCIuLi9qYXZhc2NyaXB0XCIpLmluamVjdCgoc2VsZWN0b3IsIHVybCwgd2lkdGgsIGhlaWdodCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXR1cm4gcG9wVXAodXJsLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgZmFsc2UpO1xyXG5cdH0sIFsgc2VsZWN0b3IsIHVybCwgd2lkdGgsIGhlaWdodCBdKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHNob3dPbkNsaWNrLFxyXG5cdHNpemVzOiB7XHJcblx0XHRmYXZvcml0ZXM6IHsgd2lkdGg6IDY3NSwgaGVpZ2h0OiA0MTUgfVxyXG5cdH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpc0RhcmsoKSB7XHJcblx0cmV0dXJuICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb2N1bWVudERhcmtGbGFnKCkge1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1pcy1kYXJrXCIsIGlzRGFyaygpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXJyb3dJY29uVXJsKCkge1xyXG5cdHJldHVybiAoaXNEYXJrKCkgPyBcImh0dHBzOi8vZXhoZW50YWkub3JnL2ltZy9tci5naWZcIiA6IFwiaHR0cHM6Ly9laGd0Lm9yZy9nL21yLmdpZlwiKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGlzRGFyayxcclxuXHRzZXREb2N1bWVudERhcmtGbGFnLFxyXG5cdGdldEFycm93SWNvblVybFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVwbG9hZGVyKHVzZXJuTmFtZSkge1xyXG5cdHJldHVybiBgL3VwbG9hZGVyLyR7dXNlcm5OYW1lfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhdGVnb3J5KGNhdGVnb3J5KSB7XHJcblx0cmV0dXJuIGAvJHtjYXRlZ29yeX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmYXZvcml0ZXNQb3B1cChpZCwgdG9rZW4pIHtcclxuXHRyZXR1cm4gYC9nYWxsZXJ5cG9wdXBzLnBocD9naWQ9JHtpZH0mdD0ke3Rva2VufSZhY3Q9YWRkZmF2YDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHVwbG9hZGVyLFxyXG5cdGNhdGVnb3J5LFxyXG5cdGZhdm9yaXRlc1BvcHVwXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgZ20gPSByZXF1aXJlKFwiLi9nbVwiKTtcclxuXHJcblxyXG5jbGFzcyBGZXRjaEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHJlc3BvbnNlKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuXHRcdHRoaXMubmFtZSA9IFwiRmV0Y2hFcnJvclwiO1xyXG5cdFx0dGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVzcG9uc2Uge1xyXG5cdGNvbnN0cnVjdG9yKHJlYWR5U3RhdGUsIHJlc3BvbnNlSGVhZGVycywgcmVzcG9uc2VUZXh0LCBzdGF0dXMsIHN0YXR1c1RleHQpIHtcclxuXHRcdHRoaXMucmVhZHlTdGF0ZSA9IHJlYWR5U3RhdGU7XHJcblx0XHR0aGlzLnJlc3BvbnNlSGVhZGVycyA9IHJlc3BvbnNlSGVhZGVycztcclxuXHRcdHRoaXMucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0O1xyXG5cdFx0dGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcblx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgUHJvZ3Jlc3NFdmVudCB7XHJcbiAgY29uc3RydWN0b3IobGVuZ3RoQ29tcHV0YWJsZSwgbG9hZGVkLCB0b3RhbCkge1xyXG5cdFx0dGhpcy5sZW5ndGhDb21wdXRhYmxlID0gbGVuZ3RoQ29tcHV0YWJsZTtcclxuXHRcdHRoaXMubG9hZGVkID0gbG9hZGVkO1xyXG5cdFx0dGhpcy50b3RhbCA9IHRvdGFsO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFJlc3BvbnNlSGVhZGVyTWFwKGFsbEhlYWRlcnMpIHtcclxuXHRjb25zdCByZXNwb25zZUhlYWRlcnMgPSB7fTtcclxuXHJcblx0Y29uc3QgcmUgPSAvXFxzKiguKilcXHMqOlxccyooLiopXFxzKi87XHJcblx0Zm9yIChjb25zdCBsaW5lIG9mIGFsbEhlYWRlcnMucmVwbGFjZSgvXFxyXFxuXFxzKiQvLCBcIlwiKS5zcGxpdChcIlxcclxcblwiKSkge1xyXG5cdFx0Y29uc3QgbSA9IHJlLmV4ZWMobGluZSk7XHJcblx0XHRpZiAobSAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNbbVsxXS50b0xvd2VyQ2FzZSgpXSA9IG1bMl07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzcG9uc2VIZWFkZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSB7XHJcblx0cmV0dXJuIG5ldyBSZXNwb25zZShcclxuXHRcdHhoci5yZWFkeVN0YXRlLFxyXG5cdFx0Z2V0UmVzcG9uc2VIZWFkZXJNYXAoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSxcclxuXHRcdHhoci5yZXNwb25zZVRleHQsXHJcblx0XHR4aHIuc3RhdHVzLFxyXG5cdFx0eGhyLnN0YXR1c1RleHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIHtcclxuXHRjb25zdCBkYXRhID0gb3B0aW9ucy5kYXRhO1xyXG5cdC8vY29uc3QgYmluYXJ5ID0gb3B0aW9ucy5iaW5hcnk7XHJcblx0Y29uc3QgaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcclxuXHRjb25zdCB0aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0IHx8IDA7XHJcblx0Y29uc3Qgb25wcm9ncmVzcyA9IG9wdGlvbnMub25wcm9ncmVzcztcclxuXHRjb25zdCBvdmVycmlkZU1pbWVUeXBlID0gb3B0aW9ucy5vdmVycmlkZU1pbWVUeXBlO1xyXG5cclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0Y29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0eGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xyXG5cdFx0aWYgKHR5cGVvZihvdmVycmlkZU1pbWVUeXBlKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHR4aHIub3ZlcnJpZGVNaW1lVHlwZShvdmVycmlkZU1pbWVUeXBlKTtcclxuXHRcdH1cclxuXHRcdGlmIChoZWFkZXJzICE9PSBudWxsICYmIHR5cGVvZihoZWFkZXJzKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRmb3IgKGxldCBrIGluIGhlYWRlcnMpIHtcclxuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBoZWFkZXJzW2tdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiByZXNvbHZlKGNvbnZlcnRYaHJSZXNwb25zZSh4aHIpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihgUmVxdWVzdCBlcnJvcjogJHt4aHIuc3RhdHVzVGV4dH0gKCR7eGhyLnN0YXR1c30pYCwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblx0XHR4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsICgpID0+IHJlamVjdChuZXcgRmV0Y2hFcnJvcihcIlJlcXVlc3QgYWJvcnRlZFwiLCBjb252ZXJ0WGhyUmVzcG9uc2UoeGhyKSkpKTtcclxuXHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwidGltZW91dFwiLCAoKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJUaW1lb3V0IHJlYWNoZWRcIiwgY29udmVydFhoclJlc3BvbnNlKHhocikpKSk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZihvbnByb2dyZXNzKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdHhoci5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKGUpID0+IG9ucHJvZ3Jlc3MobmV3IFByb2dyZXNzRXZlbnQoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCkpKTtcclxuXHRcdH1cclxuXHJcblx0XHR4aHIub3BlbihtZXRob2QsIHVybCwgdHJ1ZSk7XHJcblx0XHR4aHIuc2VuZChkYXRhKTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRHbVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcblx0cmV0dXJuIG5ldyBSZXNwb25zZShcclxuXHRcdHJlc3BvbnNlLnJlYWR5U3RhdGUsXHJcblx0XHRnZXRSZXNwb25zZUhlYWRlck1hcChyZXNwb25zZS5yZXNwb25zZUhlYWRlcnMpLFxyXG5cdFx0cmVzcG9uc2UucmVzcG9uc2VUZXh0LFxyXG5cdFx0cmVzcG9uc2Uuc3RhdHVzLFxyXG5cdFx0cmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuXHRjb25zdCBiaW5hcnkgPSBvcHRpb25zLmJpbmFyeTtcclxuXHRjb25zdCBoZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG5cdGNvbnN0IHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQgfHwgMDtcclxuXHRjb25zdCBvbnByb2dyZXNzID0gb3B0aW9ucy5vbnByb2dyZXNzO1xyXG5cdGNvbnN0IG92ZXJyaWRlTWltZVR5cGUgPSBvcHRpb25zLm92ZXJyaWRlTWltZVR5cGU7XHJcblxyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCBkZXRhaWxzID0ge1xyXG5cdFx0XHRtZXRob2Q6IG1ldGhvZCxcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXHJcblx0XHRcdG92ZXJyaWRlTWltZVR5cGU6IG92ZXJyaWRlTWltZVR5cGUsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdGJpbmFyeTogYmluYXJ5LFxyXG5cdFx0XHRzeW5jaHJvbm91czogZmFsc2UsXHJcblx0XHRcdHRpbWVvdXQ6IHRpbWVvdXRcclxuXHRcdH07XHJcblxyXG5cdFx0ZGV0YWlscy5vbmxvYWQgPSAoZSkgPT4gcmVzb2x2ZShjb252ZXJ0R21SZXNwb25zZShlKSk7XHJcblx0XHRkZXRhaWxzLm9uZXJyb3IgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXF1ZXN0IGVycm9yOiAke2Uuc3RhdHVzVGV4dH0gKCR7ZS5zdGF0dXN9KWAsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblx0XHRkZXRhaWxzLm9uYWJvcnQgPSAoZSkgPT4gcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIsIGNvbnZlcnRHbVJlc3BvbnNlKGUpKSk7XHJcblx0XHRkZXRhaWxzLm9udGltZW91dCA9IChlKSA9PiByZWplY3QobmV3IEZldGNoRXJyb3IoXCJUaW1lb3V0IHJlYWNoZWRcIiwgY29udmVydEdtUmVzcG9uc2UoZSkpKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKG9ucHJvZ3Jlc3MpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0ZGV0YWlscy5vbnByb2dyZXNzID0gKGUpID0+IG9ucHJvZ3Jlc3MobmV3IFByb2dyZXNzRXZlbnQoZS5sZW5ndGhDb21wdXRhYmxlLCBlLmxvYWRlZCwgZS50b3RhbCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGdtLnhtbEh0dHBSZXF1ZXN0KGRldGFpbHMpO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaXNHbVN1cHBvcnRlZCh1c2VHbSkge1xyXG5cdHJldHVybiAodXNlR20gJiYgdHlwZW9mKGdtLnhtbEh0dHBSZXF1ZXN0KSA9PT0gXCJmdW5jdGlvblwiKSA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3Qob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZDtcclxuXHRjb25zdCB1cmwgPSBvcHRpb25zLnVybDtcclxuXHRyZXR1cm4gaXNHbVN1cHBvcnRlZChvcHRpb25zLmdtKSA/IHJlcXVlc3RHbUludGVybmFsKG1ldGhvZCwgdXJsLCBvcHRpb25zKSA6IHJlcXVlc3RYaHJJbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiR0VUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0KG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gXCJQT1NUXCI7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQob3B0aW9ucy5nbSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiByZXF1ZXN0WGhySW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVxdWVzdEdtKG9wdGlvbnMpIHtcclxuXHRpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCB0eXBlb2Yob3B0aW9ucykgIT09IFwib2JqZWN0XCIpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG9wdGlvbnNcIikpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWV0aG9kID0gb3B0aW9ucy5tZXRob2Q7XHJcblx0Y29uc3QgdXJsID0gb3B0aW9ucy51cmw7XHJcblx0cmV0dXJuIGlzR21TdXBwb3J0ZWQodHJ1ZSkgPyByZXF1ZXN0R21JbnRlcm5hbChtZXRob2QsIHVybCwgb3B0aW9ucykgOiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJHTSBub3Qgc3VwcG9ydGVkXCIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R20ob3B0aW9ucykge1xyXG5cdGlmIChvcHRpb25zID09PSBudWxsIHx8IHR5cGVvZihvcHRpb25zKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uc1wiKSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBtZXRob2QgPSBcIkdFVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvc3RHbShvcHRpb25zKSB7XHJcblx0aWYgKG9wdGlvbnMgPT09IG51bGwgfHwgdHlwZW9mKG9wdGlvbnMpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBvcHRpb25zXCIpKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IFwiUE9TVFwiO1xyXG5cdGNvbnN0IHVybCA9IG9wdGlvbnMudXJsO1xyXG5cdHJldHVybiBpc0dtU3VwcG9ydGVkKHRydWUpID8gcmVxdWVzdEdtSW50ZXJuYWwobWV0aG9kLCB1cmwsIG9wdGlvbnMpIDogUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiR00gbm90IHN1cHBvcnRlZFwiKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRyZXF1ZXN0OiByZXF1ZXN0LFxyXG5cdGdldDogZ2V0LFxyXG5cdHBvc3Q6IHBvc3QsXHJcblx0Z206IHtcclxuXHRcdHJlcXVlc3Q6IHJlcXVlc3RHbSxcclxuXHRcdGdldDogZ2V0R20sXHJcblx0XHRwb3N0OiBwb3N0R20sXHJcblx0fVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZ20geC1yZXN1cnJlY3RlZFxcXCI+XFxyXFxuXFx0PGRpdiBpZD1cXFwiZ2xlZnRcXFwiPlxcclxcblxcdFxcdDxkaXYgaWQ9XFxcImdkMVxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdj48aW1nIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LW1haW4tdGh1bWJuYWlsXFxcIiBzdHlsZT1cXFwibWF4LXdpZHRoOjI1MHB4O21heC1oZWlnaHQ6Mzc1cHg7ZGlzcGxheTpibG9jaztcXFwiIC8+PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBpZD1cXFwiZ2QyXFxcIj5cXHJcXG5cXHRcXHQ8aDEgaWQ9XFxcImduXFxcIj48L2gxPlxcclxcblxcdFxcdDxoMSBpZD1cXFwiZ2pcXFwiPjwvaDE+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBpZD1cXFwiZ3JpZ2h0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJnZDVcXFwiPlxcclxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJnMyBnc3BcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWdhbGxlcnktdW5hdmFpbGFibGVcXFwiPjxpbWcgY2xhc3M9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtbXItZ2lmXFxcIiAvPiA8YSB0aXRsZT1cXFwiU29tZSBpbmZvcm1hdGlvbiBoYXMgYmVlbiByZXN1cnJlY3RlZFxcXCI+R2FsbGVyeSB1bmF2YWlsYWJsZTwvYT48L3A+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBpZD1cXFwiZ21pZFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBpZD1cXFwiZ2QzXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJnZGNcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJjc1xcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtY2F0ZWdvcnlcXFwiPjwvYT5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJnZG5cXFwiPjxhIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LXVwbG9hZGVyXFxcIj48L2E+PC9kaXY+XFxyXFxuXFx0XFx0XFx0PGRpdiBpZD1cXFwiZ2RkXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8dGFibGU+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+UG9zdGVkOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQyXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1kYXRlLXVwbG9hZGVkXFxcIj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+VmlzaWJsZTo8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MlxcXCIgaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtdmlzaWJsZVxcXCI+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0ciBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1sYW5ndWFnZS1yb3dcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+TGFuZ3VhZ2U6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWxhbmd1YWdlXFxcIj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PHRyPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBjbGFzcz1cXFwiZ2R0MVxcXCI+RmlsZSBTaXplOjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQyXFxcIiBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1maWxlLXNpemVcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8dHI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGNsYXNzPVxcXCJnZHQxXFxcIj5MZW5ndGg6PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgY2xhc3M9XFxcImdkdDJcXFwiIGlkPVxcXCJ4LWdhbGxlcnktcmVzdXJyZWN0LWZpbGUtY291bnRcXFwiPjwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC90cj5cXHJcXG5cXHRcXHRcXHRcXHQ8L3RhYmxlPlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDxkaXYgaWQ9XFxcImdkclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHRhYmxlPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgaWQ9XFxcImdydDFcXFwiPlJhdGluZzo8L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDx0ZCBpZD1cXFwiZ3J0MlxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBpZD1cXFwicmF0aW5nX2ltYWdlXFxcIiBjbGFzcz1cXFwiaXJcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLXBvc2l0aW9uOi04MHB4IC0xcHhcXFwiPjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvdGQ+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PHRkIGlkPVxcXCJncnQzXFxcIj48c3BhbiBpZD1cXFwicmF0aW5nX2NvdW50XFxcIj48L3NwYW4+PC90ZD5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L3RyPlxcclxcblxcdFxcdFxcdFxcdFxcdDx0cj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8dGQgaWQ9XFxcInJhdGluZ19sYWJlbFxcXCIgY29sc3Bhbj1cXFwiM1xcXCI+QXZlcmFnZTogPHNwYW4gaWQ9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtYXZlcmFnZS1yYXRpbmdcXFwiPjwvc3Bhbj48L3RkPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvdHI+XFxyXFxuXFx0XFx0XFx0XFx0PC90YWJsZT5cXHJcXG5cXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGlkPVxcXCJnZGZcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgc3R5bGU9XFxcImZsb2F0OmxlZnQ7Y3Vyc29yOnBvaW50ZXJcXFwiIGlkPVxcXCJmYXZcXFwiPjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXYgc3R5bGU9XFxcImZsb2F0OmxlZnRcXFwiPiZuYnNwOyA8YSBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC1mYXZvcml0ZXMtbGlua1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpbWcgY2xhc3M9XFxcIngtZ2FsbGVyeS1yZXN1cnJlY3QtbXItZ2lmXFxcIiAvPiBBZGQgdG8gRmF2b3JpdGVzPC9hPjwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcImNcXFwiPjwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDxkaXYgaWQ9XFxcImdkNFxcXCI+XFxyXFxuXFx0XFx0XFx0PGRpdiBpZD1cXFwidGFnbGlzdFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PHRhYmxlPjx0Ym9keSBpZD1cXFwieC1nYWxsZXJ5LXJlc3VycmVjdC10YWdzXFxcIj48L3Rib2R5PjwvdGFibGU+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiY1xcXCI+PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwiY1xcXCI+PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwiYXNtXFxcIj48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJndGJcXFwiPlxcclxcblxcdDxwIGNsYXNzPVxcXCJncGNcXFwiPlNob3dpbmcgMCAtIDAgb2YgMCBpbWFnZXM8L3A+XFxyXFxuXFx0PHRhYmxlIGNsYXNzPVxcXCJwdHRcXFwiPjx0cj48dGQ+PGEgaHJlZj1cXFwiP3A9MVxcXCI+PC9hPjwvdGQ+PC90cj48L3RhYmxlPlxcclxcbjwvZGl2PlwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCB0b0NvbW1vbkpzb24gPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby9jb21tb24tanNvblwiKS50b0NvbW1vbkpzb247XHJcblxyXG5jb25zdCByZUphdmFzY3JpcHRHb3RvTmV4dCA9IC9zZXRUaW1lb3V0XFxzKlxcKFxccyooZ290b25leHR8XCJnb3RvbmV4dFxcKFxcKVwiKVxccyosXFxzKlxcZCtcXHMqXFwpLztcclxuY29uc3QgZmlsZVNpemVMYWJlbHMgPSBbIFwiQlwiLCBcIktCXCIsIFwiTUJcIiwgXCJHQlwiIF07XHJcblxyXG5jb25zdCBjYXRlZ29yeUluZm9zID0ge1xyXG5cdFwiZG91amluc2hpXCI6IHsgbmFtZTogXCJEb3VqaW5zaGlcIiwgdXJsOiBcImRvdWppbnNoaVwiLCBjbGFzczogXCJjdDJcIiB9LFxyXG5cdFwibWFuZ2FcIjogeyBuYW1lOiBcIk1hbmdhXCIsIHVybDogXCJtYW5nYVwiLCBjbGFzczogXCJjdDNcIiB9LFxyXG5cdFwiYXJ0aXN0Y2dcIjogeyBuYW1lOiBcIkFydGlzdCBDR1wiLCB1cmw6IFwiYXJ0aXN0Y2dcIiwgY2xhc3M6IFwiY3Q0XCIgfSxcclxuXHRcImdhbWVjZ1wiOiB7IG5hbWU6IFwiR2FtZSBDR1wiLCB1cmw6IFwiZ2FtZWNnXCIsIGNsYXNzOiBcImN0NVwiIH0sXHJcblx0XCJ3ZXN0ZXJuXCI6IHsgbmFtZTogXCJXZXN0ZXJuXCIsIHVybDogXCJ3ZXN0ZXJuXCIsIGNsYXNzOiBcImN0YVwiIH0sXHJcblx0XCJub24taFwiOiB7IG5hbWU6IFwiTm9uLUhcIiwgdXJsOiBcIm5vbi1oXCIsIGNsYXNzOiBcImN0OVwiIH0sXHJcblx0XCJpbWFnZXNldFwiOiB7IG5hbWU6IFwiSW1hZ2UgU2V0XCIsIHVybDogXCJpbWFnZXNldFwiLCBjbGFzczogXCJjdDZcIiB9LFxyXG5cdFwiY29zcGxheVwiOiB7IG5hbWU6IFwiQ29zcGxheVwiLCB1cmw6IFwiY29zcGxheVwiLCBjbGFzczogXCJjdDdcIiB9LFxyXG5cdFwiYXNpYW5wb3JuXCI6IHsgbmFtZTogXCJBc2lhbiBQb3JuXCIsIHVybDogXCJhc2lhbnBvcm5cIiwgY2xhc3M6IFwiY3Q4XCIgfSxcclxuXHRcIm1pc2NcIjogeyBuYW1lOiBcIk1pc2NcIiwgdXJsOiBcIm1pc2NcIiwgY2xhc3M6IFwiY3QxXCIgfSxcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBvbldpbmRvd0JlZm9yZVNjcmlwdEV4ZWN1dGUoZXZlbnQpIHtcclxuXHRjb25zdCByZW1vdmUgPSAoIWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgJiYgcmVKYXZhc2NyaXB0R290b05leHQudGVzdChldmVudC50YXJnZXQudGV4dENvbnRlbnQpKTtcclxuXHRpZiAoIXJlbW92ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpIHtcclxuXHRcdGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGV2ZW50LnRhcmdldCk7XHJcblx0fVxyXG5cclxuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmxvY2tSZWRpcmVjdGlvbnMoKSB7XHJcblx0cmVxdWlyZShcIi4uL2phdmFzY3JpcHRcIikuaW5qZWN0KCgpID0+IHtcclxuXHRcdGlmICh0eXBlb2Yod2luZG93LmdvdG9uZXh0KSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdHdpbmRvdy5nb3RvbmV4dCA9ICgpID0+IHt9O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IFwieC1nYWxsZXJ5LXJlc3VycmVjdFwiO1xyXG5cdGlmICghc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHtcclxuXHRcdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcclxuXHRcdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbnVwRG9jdW1lbnQoKSB7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5PnNjcmlwdCxib2R5PmRpdi5kXCIpKSB7XHJcblx0XHRpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcblx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVEb21Ob2Rlcyhzb3VyY2UsIGRlc3RpbmF0aW9uKSB7XHJcblx0aWYgKCFzb3VyY2UgfHwgIWRlc3RpbmF0aW9uKSB7IHJldHVybjsgfVxyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBzb3VyY2UuY2hpbGROb2Rlcykge1xyXG5cdFx0ZGVzdGluYXRpb24uYXBwZW5kQ2hpbGQobm9kZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlRG9jdW1lbnQoaHRtbFNvdXJjZSwgZGVzdGluYXRpb24pIHtcclxuXHRjb25zdCBnYWxsZXJ5SHRtbERvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbFNvdXJjZSwgXCJ0ZXh0L2h0bWxcIik7XHJcblx0bW92ZURvbU5vZGVzKGdhbGxlcnlIdG1sRG9jLmhlYWQsIGRlc3RpbmF0aW9uLmhlYWQpO1xyXG5cdG1vdmVEb21Ob2RlcyhnYWxsZXJ5SHRtbERvYy5ib2R5LCBkZXN0aW5hdGlvbi5ib2R5KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0R2FsbGVyeUh0bWwoaWRlbnRpZmllcikge1xyXG5cdGNvbnN0IGFwaVN0eWxlID0gcmVxdWlyZShcIi4uL2FwaS9zdHlsZVwiKTtcclxuXHRjb25zdCBuYXZCYXIgPSBhcGlTdHlsZS5pc0RhcmsoKSA/XHJcblx0XHRyZXF1aXJlKFwiLi9uYXZpZ2F0aW9uLWJhci1kYXJrLmh0bWxcIikgOlxyXG5cdFx0cmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXItbGlnaHQuaHRtbFwiKTtcclxuXHJcblx0bW92ZURvY3VtZW50KG5hdkJhciwgZG9jdW1lbnQpO1xyXG5cdG1vdmVEb2N1bWVudChyZXF1aXJlKFwiLi9nYWxsZXJ5Lmh0bWxcIiksIGRvY3VtZW50KTtcclxuXHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblx0aWYgKCFib2R5KSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBpbWFnZVVybCA9IGFwaVN0eWxlLmdldEFycm93SWNvblVybCgpO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWcueC1nYWxsZXJ5LXJlc3VycmVjdC1tci1naWZcIikpIHtcclxuXHRcdG5vZGUuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlVXJsKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGdhbGxlcnlJbmZvRmV0Y2ggPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby9mZXRjaFwiKTtcclxuXHRjb25zdCBpbmZvID0gYXdhaXQgZ2FsbGVyeUluZm9GZXRjaC5nZXQoaWRlbnRpZmllcik7XHJcblx0aWYgKGluZm8gPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdHNldEdhbGxlcnlJbmZvKGJvZHksIGluZm8pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRHYWxsZXJ5SW5mbyhodG1sLCBpbmZvKSB7XHJcblx0Y29uc3QgdXJscyA9IHJlcXVpcmUoXCIuLi9hcGkvdXJsc1wiKTtcclxuXHRjb25zdCBwb3B1cHMgPSByZXF1aXJlKFwiLi4vYXBpL3BvcHVwc1wiKTtcclxuXHRsZXQgbjtcclxuXHJcblx0Ly8gVGl0bGVcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ25cIikudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiNnalwiKS50ZXh0Q29udGVudCA9IGluZm8udGl0bGVPcmlnaW5hbDtcclxuXHJcblx0Ly8gVGh1bWJuYWlsXHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtbWFpbi10aHVtYm5haWxcIikuc2V0QXR0cmlidXRlKFwic3JjXCIsIGluZm8ubWFpblRodW1ibmFpbFVybCk7XHJcblxyXG5cdC8vIFVwbG9hZGVyXHJcblx0biA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LXVwbG9hZGVyXCIpO1xyXG5cdG4udGV4dENvbnRlbnQgPSBpbmZvLnVwbG9hZGVyO1xyXG5cdG4uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmxzLnVwbG9hZGVyKGluZm8udXBsb2FkZXIpKTtcclxuXHJcblx0Ly8gQ2F0ZWdvcnlcclxuXHRuID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtY2F0ZWdvcnlcIik7XHJcblx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjYXRlZ29yeUluZm9zLCBpbmZvLmNhdGVnb3J5KSkge1xyXG5cdFx0Y29uc3QgY2F0ZWdvcnlJbmZvID0gY2F0ZWdvcnlJbmZvc1tpbmZvLmNhdGVnb3J5XTtcclxuXHRcdG4udGV4dENvbnRlbnQgPSBjYXRlZ29yeUluZm8ubmFtZTtcclxuXHRcdG4uY2xhc3NMaXN0LmFkZChjYXRlZ29yeUluZm8uY2xhc3MpO1xyXG5cdFx0bi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybHMuY2F0ZWdvcnkoY2F0ZWdvcnlJbmZvLnVybCkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRuLnRleHRDb250ZW50ID0gaW5mby5jYXRlZ29yeTtcclxuXHR9XHJcblxyXG5cdC8vIFJhdGluZ1xyXG5cdGNvbnN0IHBvcyA9IGdldEJhY2tncm91bmRQb3NpdGlvbkZvclJhdGluZyhpbmZvLnJhdGluZ0F2ZXJhZ2UpO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfaW1hZ2VcIikuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYCR7cG9zLnh9cHggJHtwb3MueX1weGA7XHJcblx0aHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtYXZlcmFnZS1yYXRpbmdcIikudGV4dENvbnRlbnQgPSBpbmZvLnJhdGluZ0F2ZXJhZ2UudG9GaXhlZCgyKTtcclxuXHJcblx0Ly8gSW5mb1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWRhdGUtdXBsb2FkZWRcIikudGV4dENvbnRlbnQgPSBnZXRUaW1lc3RhbXBEYXRlU3RyaW5nKGluZm8uZGF0ZVVwbG9hZGVkKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC12aXNpYmxlXCIpLnRleHRDb250ZW50ID0gKGluZm8udmlzaWJsZSA/IFwiWWVzXCIgOiBcIk5vXCIpO1xyXG5cdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWZpbGUtc2l6ZVwiKS50ZXh0Q29udGVudCA9IGdldFByZXR0eUZpbGVTaXplKGluZm8uYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplKTtcclxuXHRodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC1maWxlLWNvdW50XCIpLnRleHRDb250ZW50ID0gcGx1cmFsKGluZm8uZmlsZUNvdW50LCBcIiBmaWxlXCIsIFwiIGZpbGVzXCIpO1xyXG5cdGlmICh0eXBlb2YoaW5mby5sYW5ndWFnZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdGNvbnN0IHN1ZmZpeCA9IGluZm8udHJhbnNsYXRlZCA/IGAgXFx4YTBgIDogXCJcIjsgLy8gJm5ic3A7XHJcblx0XHRuID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3gtZ2FsbGVyeS1yZXN1cnJlY3QtbGFuZ3VhZ2VcIik7XHJcblx0XHRuLnRleHRDb250ZW50ID0gYCR7aW5mby5sYW5ndWFnZX0ke3N1ZmZpeH1gO1xyXG5cdFx0aWYgKGluZm8udHJhbnNsYXRlZCkge1xyXG5cdFx0XHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRcdHNwYW4uY2xhc3NOYW1lID0gXCJoYWxwXCI7XHJcblx0XHRcdHNwYW4udGl0bGUgPSBcIlRoaXMgZ2FsbGVyeSBoYXMgYmVlbiB0cmFuc2xhdGVkIGZyb20gdGhlIG9yaWdpbmFsIGxhbmd1YWdlIHRleHQuXCI7XHJcblx0XHRcdHNwYW4udGV4dENvbnRlbnQgPSBcIlRSXCI7XHJcblx0XHRcdG4uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdGh0bWwucXVlcnlTZWxlY3RvcihcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWxhbmd1YWdlLXJvd1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fVxyXG5cclxuXHQvLyBUYWdzXHJcblx0Y29uc3QgdGFnVGFibGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjeC1nYWxsZXJ5LXJlc3VycmVjdC10YWdzXCIpO1xyXG5cdGZvciAoY29uc3QgbmFtZXNwYWNlIGluIGluZm8udGFncykge1xyXG5cdFx0Y29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cclxuXHRcdGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRkLmNsYXNzTmFtZSA9IFwidGNcIjtcclxuXHRcdHRkLnRleHRDb250ZW50ID0gYCR7bmFtZXNwYWNlfTpgO1xyXG5cdFx0cm93LmFwcGVuZENoaWxkKHRkKTtcclxuXHJcblx0XHR0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHJvdy5hcHBlbmRDaGlsZCh0ZCk7XHJcblxyXG5cdFx0Zm9yIChjb25zdCB0YWcgb2YgaW5mby50YWdzW25hbWVzcGFjZV0pIHtcclxuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0ZGl2LmNsYXNzTmFtZSA9IFwiZ3RcIjtcclxuXHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdFx0XHRhLmhyZWYgPSBgL3RhZy8ke3RhZ31gO1xyXG5cdFx0XHRhLnRleHRDb250ZW50ID0gdGFnO1xyXG5cdFx0XHRkaXYuYXBwZW5kQ2hpbGQoYSk7XHJcblx0XHRcdHRkLmFwcGVuZENoaWxkKGRpdik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGFnVGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuXHR9XHJcblxyXG5cdC8vIEZhdm9yaXRlc1xyXG5cdGNvbnN0IGZhdm9yaXRlVXJsID0gdXJscy5mYXZvcml0ZXNQb3B1cChpbmZvLmlkZW50aWZpZXIuaWQsIGluZm8uaWRlbnRpZmllci50b2tlbik7XHJcblx0Y29uc3QgZmF2b3JpdGVMaW5rU2VsZWN0b3IgPSBcIiN4LWdhbGxlcnktcmVzdXJyZWN0LWZhdm9yaXRlcy1saW5rXCI7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihmYXZvcml0ZUxpbmtTZWxlY3Rvcikuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBmYXZvcml0ZVVybCk7XHJcblx0cG9wdXBzLnNob3dPbkNsaWNrKFwiI2dkZlwiLCBmYXZvcml0ZVVybCwgcG9wdXBzLnNpemVzLmZhdm9yaXRlcyk7XHJcblxyXG5cdC8vIERvd25sb2FkIG1ldGFkYXRhXHJcblx0c2V0dXBEb3dubG9hZExpbmsoaW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJhY2tncm91bmRQb3NpdGlvbkZvclJhdGluZyhyYXRpbmcpIHtcclxuXHRyYXRpbmcgPSBNYXRoLnJvdW5kKHJhdGluZyAqIDIuMCk7XHJcblx0cmF0aW5nID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAsIHJhdGluZykpO1xyXG5cdGNvbnN0IHggPSAoNSAtIE1hdGguY2VpbChyYXRpbmcgLyAyKSkgKiAtMTY7XHJcblx0Y29uc3QgeSA9IChyYXRpbmcgJSAyID09PSAwKSA/IC0xIDogLTIxO1xyXG5cdHJldHVybiB7IHgsIHkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGx1cmFsKG51bWJlciwgc2luZ3VsYXJMYWJlbCwgcGx1cmFsTGFiZWwpIHtcclxuXHRjb25zdCBsYWJlbCA9IChudW1iZXIgPT09IDEgPyBzaW5ndWxhckxhYmVsIDogcGx1cmFsTGFiZWwpO1xyXG5cdHJldHVybiBgJHtudW1iZXJ9JHtsYWJlbH1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXBEYXRlU3RyaW5nKHRpbWVzdGFtcCkge1xyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xyXG5cdGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuXHRjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuXHRjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuXHRjb25zdCBob3VyID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cdHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gJHtob3VyfToke21pbnV0ZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcmV0dHlGaWxlU2l6ZShieXRlcykge1xyXG5cdGNvbnN0IGlpID0gZmlsZVNpemVMYWJlbHMubGVuZ3RoIC0gMTtcclxuXHRsZXQgaSA9IDA7XHJcblx0d2hpbGUgKGkgPCBpaSAmJiBieXRlcyA+PSAxMDI0KSB7XHJcblx0XHRieXRlcyAvPSAxMDI0O1xyXG5cdFx0KytpO1xyXG5cdH1cclxuXHRyZXR1cm4gYCR7Ynl0ZXMudG9GaXhlZChpID09PSAwID8gMCA6IDIpfSAke2ZpbGVTaXplTGFiZWxzW2ldfWA7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzZXR1cERvd25sb2FkTGluayhpbmZvKSB7XHJcblx0Y29uc3QgZ2FsbGVyeUxpbmtzID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWxpbmtzXCIpO1xyXG5cdGNvbnN0IGxpbmsgPSBnYWxsZXJ5TGlua3MuY3JlYXRlUmlnaHRTaWRlTGluayhcIk1ldGFkYXRhIEpTT05cIikubGluaztcclxuXHRpZiAobGluayA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0bGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcImluZm8uanNvblwiKTtcclxuXHRsaW5rLmhyZWYgPSBjcmVhdGVEb3dubG9hZERhdGFVcmwoaW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURvd25sb2FkRGF0YVVybChpbmZvKSB7XHJcblx0aWYgKGluZm8gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mb1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRvQ29tbW9uSnNvbihpbmZvKSwgbnVsbCwgXCIgIFwiKTtcclxuXHRjb25zdCBibG9iID0gbmV3IEJsb2IoWyBpbmZvU3RyaW5nIF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdGlmIChjdXJyZW50UGFnZVR5cGUgIT09IFwiZGVsZXRlZEdhbGxlcnlcIikgeyByZXR1cm47IH1cclxuXHJcblx0YmxvY2tSZWRpcmVjdGlvbnMoKTtcclxuXHJcblx0Y29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby91dGlsc1wiKTtcclxuXHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChsb2NhdGlvbi5ocmVmKTtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cdGNsZWFudXBEb2N1bWVudCgpO1xyXG5cdGluc2VydEdhbGxlcnlIdG1sKGluZm8uaWRlbnRpZmllcik7XHJcblxyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1wYWdlLXJlc3VycmVjdGVkXCIpO1xyXG5cdHBhZ2VUeXBlLnNldE92ZXJyaWRlKGN1cnJlbnRQYWdlVHlwZSk7XHJcbn1cclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXNjcmlwdGV4ZWN1dGVcIiwgb25XaW5kb3dCZWZvcmVTY3JpcHRFeGVjdXRlLCB0cnVlKTtcclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcIm5iXFxcIiBjbGFzcz1cXFwibm9zZWwgeC1yZXN1cnJlY3RlZFxcXCI+XFxyXFxuXFx0PGRpdj48YSBjbGFzcz1cXFwibmJ3XFxcIiBocmVmPVxcXCIvXFxcIj5Gcm9udDxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj4gUGFnZTwvc3Bhbj48L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvd2F0Y2hlZFxcXCI+V2F0Y2hlZDwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9wb3B1bGFyXFxcIj5Qb3B1bGFyPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3RvcnJlbnRzLnBocFxcXCI+VG9ycmVudHM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvZmF2b3JpdGVzLnBocFxcXCI+RmF2PHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPm9yaXRlPC9zcGFuPnM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvdWNvbmZpZy5waHBcXFwiPlNldHRpbmdzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3VwbG9hZC9tYW5hZ2UucGhwXFxcIj48c3BhbiBjbGFzcz1cXFwibmJ3MlxcXCI+TXkgPC9zcGFuPlVwbG9hZHM8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvbXl0YWdzXFxcIj5NeSBUYWdzPC9hPjwvZGl2PlxcclxcbjwvZGl2PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJuYlxcXCIgY2xhc3M9XFxcIm5vc2VsIHgtcmVzdXJyZWN0ZWRcXFwiPlxcclxcblxcdDxkaXY+PGEgY2xhc3M9XFxcIm5id1xcXCIgaHJlZj1cXFwiL1xcXCI+RnJvbnQ8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+IFBhZ2U8L3NwYW4+PC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3dhdGNoZWRcXFwiPldhdGNoZWQ8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCIvcG9wdWxhclxcXCI+UG9wdWxhcjwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi90b3JyZW50cy5waHBcXFwiPlRvcnJlbnRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL2Zhdm9yaXRlcy5waHBcXFwiPkZhdjxzcGFuIGNsYXNzPVxcXCJuYncxXFxcIj5vcml0ZTwvc3Bhbj5zPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL2hvbWUucGhwXFxcIj48c3BhbiBjbGFzcz1cXFwibmJ3MlxcXCI+TXkgPC9zcGFuPkhvbWU8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL3VwbG9hZC5lLWhlbnRhaS5vcmcvbWFuYWdlLnBocFxcXCI+PHNwYW4gY2xhc3M9XFxcIm5idzJcXFwiPk15IDwvc3Bhbj5VcGxvYWRzPC9hPjwvZGl2PlxcclxcblxcdDxkaXY+PGEgaHJlZj1cXFwiL3RvcGxpc3QucGhwXFxcIj5Ub3BsaXN0czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9ib3VudHkucGhwXFxcIj5Cb3VudGllczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcIi9uZXdzLnBocFxcXCI+TmV3czwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcImh0dHBzOi8vZm9ydW1zLmUtaGVudGFpLm9yZy9cXFwiPkZvcnVtczwvYT48L2Rpdj5cXHJcXG5cXHQ8ZGl2PjxhIGhyZWY9XFxcImh0dHBzOi8vZWh3aWtpLm9yZy9cXFwiPldpa2k8L2E+PC9kaXY+XFxyXFxuXFx0PGRpdj48YSBocmVmPVxcXCJodHRwczovL2hlbnRhaXZlcnNlLm9yZy9cXFwiIG9uY2xpY2s9XFxcInBvcFVwKCdodHRwczovL2hlbnRhaXZlcnNlLm9yZy8nLDEyNTAsNzIwKTsgcmV0dXJuIGZhbHNlXFxcIj5IPHNwYW4gY2xhc3M9XFxcIm5idzFcXFwiPmVudGFpPC9zcGFuPlY8c3BhbiBjbGFzcz1cXFwibmJ3MVxcXCI+ZXJzZTwvc3Bhbj48L2E+PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImJvZHk+Om5vdCgueC1yZXN1cnJlY3RlZCl7ZGlzcGxheTpub25lIWltcG9ydGFudH0jeC1nYWxsZXJ5LXJlc3VycmVjdC1jYXRlZ29yeXt0ZXh0LWRlY29yYXRpb246bm9uZX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvUHJvbWlzZShmbiwgc2VsZikge1xyXG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNvbHZlKGZuLmFwcGx5KHNlbGYsIGFyZ3MpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJlamVjdChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufTtcclxuXHJcbmNvbnN0IGdtID0gKChvYmplY3RzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0aWYgKG9iai5HTSAhPT0gbnVsbCAmJiB0eXBlb2Yob2JqLkdNKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHJldHVybiBvYmouR007XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHRjb25zdCBtYXBwaW5nID0gW1xyXG5cdFx0WyBcImdldFZhbHVlXCIsIFwiR01fZ2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcInNldFZhbHVlXCIsIFwiR01fc2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcImRlbGV0ZVZhbHVlXCIsIFwiR01fZGVsZXRlVmFsdWVcIiBdLFxyXG5cdFx0WyBcInhtbEh0dHBSZXF1ZXN0XCIsIFwiR01feG1saHR0cFJlcXVlc3RcIiBdXHJcblx0XTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwcGluZykge1xyXG5cdFx0bGV0IHByb21pc2UgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRjb25zdCBmbiA9IG9ialt2YWx1ZV07XHJcblx0XHRcdGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRwcm9taXNlID0gdG9Qcm9taXNlKGZuLCBvYmopO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgTm90IHN1cHBvcnRlZCAoJHtrZXl9KWApKSk7XHJcblx0XHR9XHJcblx0XHRyZXN1bHRba2V5XSA9IHByb21pc2U7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn0pLmNhbGwodGhpcywgW3RoaXMsIHdpbmRvd10pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ207XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluamVjdChmdW5jLCBhcmdzKSB7XHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIikgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG51bGw7XHJcblx0aWYgKCFwYXJlbnQpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdGNvbnN0IHNjcmlwdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG5cdGNvbnN0IGFyZ1N0ciA9IChBcnJheS5pc0FycmF5KGFyZ3MpICYmIGFyZ3MubGVuZ3RoID4gMCkgP1xyXG5cdFx0YC4uLiR7SlNPTi5zdHJpbmdpZnkoYXJncywgbnVsbCwgXCJcIil9YCA6XHJcblx0XHRcIlwiO1xyXG5cdHNjcmlwdE5vZGUudGV4dENvbnRlbnQgPSBgKCR7ZnVuYy50b1N0cmluZygpfSkoJHthcmdTdHJ9KTtgO1xyXG5cclxuXHRwYXJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0Tm9kZSk7XHJcblx0cGFyZW50LnJlbW92ZUNoaWxkKHNjcmlwdE5vZGUpO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluamVjdFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBpc1JlYWR5VmFsdWUgPSBmYWxzZTtcclxubGV0IGNhbGxiYWNrcyA9IG51bGw7XHJcbmxldCBjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5jb25zdCBjaGVja0ludGVydmFsUmF0ZSA9IDI1MDtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0hvb2tlZCgpIHtcclxuXHRyZXR1cm4gY2FsbGJhY2tzICE9PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob29rKCkge1xyXG5cdGNhbGxiYWNrcyA9IFtdO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoY2hlY2tJZlJlYWR5LCBjaGVja0ludGVydmFsUmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaG9vaygpIHtcclxuXHRjb25zdCBjYnMgPSBjYWxsYmFja3M7XHJcblxyXG5cdGNhbGxiYWNrcyA9IG51bGw7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjbGVhckludGVydmFsKGNoZWNrSW50ZXJ2YWxJZCk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuXHJcblx0aW52b2tlKGNicyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZShjYWxsYmFja3MpIHtcclxuXHRmb3IgKGxldCBjYiBvZiBjYWxsYmFja3MpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNiKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuXHRpZiAoaXNSZWFkeVZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRpZiAoaXNIb29rZWQoKSkgeyB1bmhvb2soKTsgfVxyXG5cdFx0aXNSZWFkeVZhbHVlID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcclxuXHRpc1JlYWR5KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvblJlYWR5KGNhbGxiYWNrKSB7XHJcblx0aWYgKGlzUmVhZHkoKSkge1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghaXNIb29rZWQoKSkgeyBob29rKCk7IH1cclxuXHJcblx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0b25SZWFkeTogb25SZWFkeSxcclxuXHRnZXQgaXNSZWFkeSgpIHsgcmV0dXJuIGlzUmVhZHkoKTsgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBhcGlTdHlsZSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0aWYgKGFwaVN0eWxlID09PSBudWxsKSB7IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vYXBpL3N0eWxlXCIpOyB9XHJcblx0YXBpU3R5bGUuc2V0RG9jdW1lbnREYXJrRmxhZygpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiJdfQ==
