// ==UserScript==
// @name        x/gallery-metadata
// @version     1.2.0
// @author      dnsev-h
// @namespace   dnsev-h
// @description Download metadata JSON files for galleries
// @run-at      document-start
// @include     https://exhentai.org/*
// @include     https://e-hentai.org/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABoVBMVEUAAAA0NTs3Nzc0NDsxMUE0NTs0NTszNDs0Njs0NTs0NDw0NTszNTszNTs1NTs0Njs1NTwzMzk0NDszNTszNDo0NDszNTszNDo0NDszNDs0NDsxNDo0NTs0NTszNDs0NTs0NDszNTs0NTs1NTwzMzo0NTszNTs1NTs1NTozNTo0NjrmXu////80NTvjXutAN0iBR4n3y/o5NkD//P/+9f70t/ijT6w8N0L2wfnwnvXvl/XqefLoavDmYO/UWdzMWNTCVstdPmT98f775fz40/v2x/n2xfntivTpc/DcW+XaW+LXWuDWWt+/VcenT7BNO1RKOlH87f376P364fz4zvrzsPfyqPbwo/XnY/DnZ+/gaOneXOjAVci1U72tUbaGSI59RYR5RIFvQ3dsQnRjP2tUPVtQO1dEOEz52fv1vvn0u/jztPjwm/Xsg/Prh/LobvDpju/kguzhcOnRWdm7VMSyUrqcTaWZTKGWTJ6US5ySSpqNSZV0Q3toQW9SPFn63PzulPTrgfPuqvLkd+viderlpeniiujhk+bGV8+OSpZWPV6jFuz0AAAAK3RSTlMA/AO/B/LXg2NGPfXfamZfJhCnpJmId3BYSyIU7OfQy7mvlBkLxI1QNDKds9RbVAAAAxJJREFUSMeNlmdb4lAQhYksUkTE3vuurnsyCYKCHey9997L2nvX7fVXbxJyI1Hv6vuN5zmHmbkzc28sz5PscngczmTLK8kqJA3hg/c18twi+ntx2tfT178YEuxxL+pL3aEgdLqXqOilvJzxcgTYrx5rq6mdAoJ+65v/ybMLaXAOx6OiRksnsECpfHlcCd0HJRxXiYwd4IIyuQYH3UgAPokPVAMrCTk8Q8o6FL6IseyiT7byDKlDUJgwGaqmEaQkjqGclsPAV9FEDdDs5p1UokA+/DQbAvU45deda13HjGimErjLf8tz2P2zGH3kqMcceXiG9xTE5NMQzfEWHvGr+BUjHu7oqFJCDJCLZyhYwY+Rj7p8pA7AwXA7pM0UboRbHEzVRfVj01DZFbvgS+CV/a4ZQAfrgEaDMiARbvOSyDcLSc2pvQs6gapGbBRxD1bYbEKtqLCHKI0B8RA3AneTSkISahS98rdRupRo6Kdys+xhWgrXgFbt+HUmFbMkySUxam+KjfIzdKfwRylToZZlpLq/YzWmd9kJsu9yhdK1Hzk0gE7V0MUCRN1XgpGE19bcA8AnaN10Uj/G1aZBZyu6eQvkNRZN7oWCNBSfnlaWZqU+tCmSbdaFgGpoR4SyWbkJi9CYXxsckjcHN4AWRbKPKHXRpqOXEnVDBZ3BzIw6ddCp1Axt6DEMTorAzKGWNMtIH/EmchjD0AQzE9rWRKllm31CWWyRqRtmttUUGJ9bVcM45sjJLncKg2Gk3QmDKXV263BOpUYN/U8Mo9Bhrf6GZeMCLBUuYaY6sIdYxsUWwOe3uR52xsw0q9hoxQ6A3g12ZXroqheYbQpHJDzLREsDFBZt7JZPJR2OYesIKrduC6PCk5GR6Sj241k6j9AdBgb86RYzZTKeZQYn9xQK0ZPHy86JgAE5L9Fuz376AD2eETbEZM3h3KsLeET3mW+Q3J44zptoW0YM4eDSOpGtOIv/tqf7f0OjZ/76TibKK85wKWo+ue7Q0vm1b3WISChIS/K+4jMjLY+E/ILUTNdby2tJZjlw+AeRxP9HDmKpUQAAAABJRU5ErkJggg==
// @icon64      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABnlBMVEUAAAA0NTs0NDs0NDs0NTs1NTs0NTozMzlLS0s0NTs0NDszNTs2NjsAAAA0NTs0NTs0NTs0NTs0NTszNTszNTo0NTs0NTwyNjwwMD80NTs0NTs0NTs0NTs0NDs0NTs0NTo0Njs1NTozNTozNTszNjsxNTkzNTs0NTo0NTo0NTs0NDsyNjszNTzmXu////80NTs+N0X87P3lXu7+9f6pULI5NkA1NTz//P/++f774/zrfvLnYu+6VMPzrvfulPTqd/LiXerCVsqfTadoQXBWPV5FOUz41Pv3yvrpb/HnZfDfXOnUWd3NWNWNSZV9RoR2RH5xQnhdPmVSO1k2NT386f363vz1v/nyqvfwoPbpcvHoavDoZ/DbW+TQWdnGV8+2U76xUrqUS5yER4xJOlFCOEn87/3xpvbuj/TshfP40Pr2xfn0uPjzsvfwmvXdXOa+VMeiTqqcTaWZTKGHSI+ARohtQnVjQGpOO1b98P352PvtivPsgvPpePHpg/DnfO/iaOrXW+DDVsyjT6yWS5/98P752fv0uvjrj/HlhezJWNI3l8R2AAAALXRSTlMAu5FYyidEBwP7wC0hAvXv66V/dG1gURcL592ujNi1meCEZ0wzENDOn5VJPzn5BnicAAAEYElEQVRYw73X51sTQRAG8IQEJPQiKM3e9d03JCSABAgkkd5Bkd5UpCioiL3X/9rbC3fZJAcrfvD3DR5m7nZmZ57DpXGq8NKlwlOuf3Oiuq6Mptqcwn+Iv1hLMhGPj8XXSJYXHffxZ8l49wCkwMKKn6VVx4o/XUB/dwC2TyNkTv4x4t1cXYDh/nrHm05ITSGWF/9teGUNV+eBmfZJIb1qnwHw1M/rfxdeUUq+HAR+BoXlW0cywwWXXm6tER4B0CFUm/IU4ZJCffVrOdZlnr5FpNkAsEKvtpAXOBaFtCEy/AD691mpS5DDHUh9LSLTIyASLsnVJKjnV0jrIktjHzDMAk2Cao7PQSmhagt4kuCNoxPkX+Xa8FPgl0OCll5gl95izQC7SUbwUTi4C0RXWa29CW52A40OCZo7gS9s0LbyJF8Ad4WDHiCwr3+Fm4yrbVDdBrq1jXDll4UHlTOoHgP9fhbqb9NKdoLm1tZm8xVWeFaXwMMRBISYVMJbt/uA3juyCvMTJZc1CSr5HIHG6V47PDgN02yj6ARi1K2381wG2vDOvsSdOPBQ3oUmFmj7OAxDuxV/H5ZOEewzyhgu0lwl+iMAPkxZ8SnNYhoYYaW2DaEVOVN35Pk3t5ESFK3AIq9oEhRX+DgO4IGQ3sDWZnTyHQJrLNJf5z3gfnII26DUQIh78gwndQnO8pm1FO4gZdr4eUr24Ux24TxVN5Uxa+ACsCmke0h5LQwz+BQuzRjJvKs0nMuzlzP9AWDKGiDLW2s5jmfMQwWZGB2O05dnN3LcrJjhFVJahdQui1CVXrHQsyiAIdYcfEzcYMx63gZst+2tsMx6Jb7IN7EEKRDjdWWnPBRSB0zK1ZwClliXVvEXSBoMhRu8XrfbWyOb0GNO8QxsU8L0APhMr3JrSsPzODA0wQNLwGRGE63pDAIDPJdKUMhx2KLzC12Gz4NR9AlpW70ESS3AE5ap62MUTt6bfzwL2/eMBOr6cGLWsCftGts1mFMTnOdXOLmb0YMte70B82xQZ7cbTh7LXdCm3ALjF9ZwdNGrJtiFk1ZrDlIpzJuY3Grl6RvQSdBo2CzS9PUcTNcQK9SPkmE4aZG3PkPbZHKYYvQok8gxOGkUD2adWtM8i4CfvtQ0nfaF+uFgK7iOLLfNGgaWRiaUd3Af0oY2ZOuVJ5C+KH2oZmIQGqk3eA1TlKUuWx1D8b3R0djY+Kp/B0dqD/bCNMca5esyp4SWJqiyu/AeSd3pezU/N89wKdfNRRzl3gdgINKPQJOfF10O3IzgCDMfgYUEJxIhKjtNdUbzBoDx6HMlDF/xOH/tlWtqMLBHXjvhunzCdYgKDuFwg8Mhlnk0X7oxHOL37ssJ+spPab5T6Y8iS39kObZGsiRH/89fAXcyTr30fCxEQ+01z2mX3kWuDlixc4vLowkZ6/PmVFnP1il2c21osSvSNDS6H5bBNXWVt5Sa612uo6W0oN5T5Dq+W/VnCtzlFZ7cYtd/8Adr2MpDGqTx0AAAAABJRU5ErkJggg==
// @homepage    https://dnsev-h.github.io/x/
// @supportURL  https://github.com/dnsev-h/x/issues
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-gallery-metadata.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-gallery-metadata.user.js
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

const types = require("./types");
const utils = require("./utils");


function getCssUrl(urlString) {
	const pattern = /url\s*\(\s*(['"])?/;
	const match = pattern.exec(urlString);
	if (match === null) { return null; }

	const quote = match[1] || "";
	urlString = urlString.substr(match.index + match[0].length - quote.length);

	const pattern2 = new RegExp(`(${quote})\\s*\\)\\s*$`);
	const match2 = pattern2.exec(urlString);
	if (match2 === null) { return null; }

	const url = urlString.substr(0, match2.index + match2[1].length);

	let url2 = url;
	if (!quote) {
		url2 = url.replace(/"/g, "\\\"");
		url2 = `"${url2}"`;
	} else if (quote === "'") {
		url2 = url.substr(1, url.length - 2);
		url2 = url2.replace(/\\'/g, "'");
		url2 = `"${url2}"`;
	}

	try {
		return JSON.parse(url2);
	} catch (e) {
		return url;
	}
}

function getTimestamp(text) {
	const match = /([0-9]+)-([0-9]+)-([0-9]+)\s+([0-9]+):([0-9]+)/.exec(text);
	if (match === null) { return null; }

	return Date.UTC(
		parseInt(match[1], 10), // year
		parseInt(match[2], 10) - 1, // month
		parseInt(match[3], 10), // day
		parseInt(match[4], 10), // hours
		parseInt(match[5], 10), // minutes
		0, // seconds
		0); // milliseconds
}


function getTitle(html) {
	const node = html.querySelector("#gn");
	return (node !== null ? node.textContent.trim() : null);
}

function getTitleOriginal(html) {
	const node = html.querySelector("#gj");
	return (node !== null ? node.textContent.trim() : null);
}

function getMainThumbnailUrl(html) {
	const node = html.querySelector("#gd1>div");
	return (node !== null ? getCssUrl(node.style.backgroundImage) : null);
}

function getCategory(html) {
	const node = html.querySelector("#gdc>div[onclick]");
	if (node === null) { return null; }

	const pattern = /['"].*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?['"]/;
	const match = pattern.exec(node.getAttribute("onclick") || "");
	return (match !== null ? match[1] : null);
}

function getUploader(html) {
	const node = html.querySelector("#gdn>a");
	if (node === null) { return null; }

	const pattern = /^.*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?$/;
	const match = pattern.exec(node.getAttribute("href") || "");
	return (match !== null ? (match[1].split("/")[1] || "") : null);
}

function getRatingCount(html) {
	const node = html.querySelector("#rating_count");
	if (node === null) { return null; }

	const value = parseInt(node.textContent.trim(), 10);
	return (Number.isNaN(value) ? null : value);
}

function getRatingAverage(html) {
	const node = html.querySelector("#rating_label");
	if (node === null) { return null; }

	const pattern = /average:\s*([0-9\.]+)/i;
	const match = pattern.exec(node.textContent);
	if (match === null) { return null; }

	const value = parseFloat(match[1]);
	return (Number.isNaN(value) ? null : value);
}

function getFavoriteCount(html) {
	const node = html.querySelector("#favcount");
	if (node === null) { return null; }

	const pattern = /\s*([0-9]+|once)/i;
	const match = pattern.exec(node.textContent);
	if (match === null) { return null; }

	const match1 = match[1];
	return (match1.toLowerCase() === "once" ? 1 : parseInt(match1, 10));
}

function getFavoriteCategory(html) {
	const node = html.querySelector("#fav>div.i");
	if (node === null) { return null; }

	const title = node.getAttribute("title") || "";
	const pattern = /background-position\s*:\s*\d+(?:px)?\s+(-?\d+)(?:px)/;
	const match = pattern.exec(node.getAttribute("style") || "");
	const index = (match !== null) ?
		Math.floor((Math.abs(parseInt(match[1], 10)) - 2) / 19) :
		-1;

	return { index, title };
}

function getThumbnailSize(html) {
	const nodes = html.querySelectorAll("#gdo4>.nosel");
	if (nodes.length < 2) { return null; }
	return (nodes[0].classList.contains("ths") ? "normal" : "large");
}

function getThumbnailRows(html) {
	const nodes = html.querySelectorAll("#gdo2>.nosel");
	if (nodes.length == 0) { return null; }

	const pattern = /\s*([0-9]+)/;
	for (const node of nodes) {
		if (node.classList.contains("ths")) {
			const match = pattern.exec(node.textContent);
			if (match !== null) {
				return parseInt(match[1], 10);
			}
		}
	}

	return null;
}

function getTags(html) {
	const pattern = /(.+):/;
	const groups = html.querySelectorAll("#taglist tr");
	const tags = {};

	for (const group of groups) {
		const tds = group.querySelectorAll("td");
		if (tds.length === 0) { continue; }

		const match = pattern.exec(tds[0].textContent);
		const namespace = (match !== null ? match[1].trim() : "");

		let namespaceTags;
		if (tags.hasOwnProperty(namespace)) {
			namespaceTags = tags[namespace];
		} else {
			namespaceTags = [];
			tags[namespace] = namespaceTags;
		}

		const tagDivs = tds[tds.length - 1].querySelectorAll("div");
		for (const div of tagDivs) {
			const link = div.querySelector("a");
			if (link === null) { continue; }

			const tag = link.textContent.trim();
			namespaceTags.push(tag);
		}
	}

	return tags;
}

function getDetailsNodes(html) {
	return html.querySelectorAll("#gdd tr");
}

function getDateUploaded(detailsNodes) {
	if (detailsNodes.length <= 0) { return null; }
	const node = detailsNodes[0].querySelector(".gdt2");
	return (node !== null ? getTimestamp(node.textContent) : null);
}

function getVisibleInfo(detailsNodes) {
	let visible = true;
	let visibleReason = null;

	if (detailsNodes.length > 2) {
		const node = detailsNodes[2].querySelector(".gdt2");
		if (node !== null) {
			const pattern = /no\s+\((.+?)\)/i;
			const match = pattern.exec(node.textContent);
			if (match !== null) {
				visible = false;
				visibleReason = match[1].trim();
			}
		}
	}

	return { visible, visibleReason };
}

function getLanguageInfo(detailsNodes) {
	let language = null;
	let translated = false;

	if (detailsNodes.length > 3) {
		const node = detailsNodes[3].querySelector(".gdt2");
		if (node !== null) {
			const textNode = node.firstChild;
			if (textNode !== null && textNode.nodeType === Node.TEXT_NODE) {
				language = textNode.nodeValue.trim();
			}

			const trNode = node.querySelector(".halp");
			translated = (trNode !== null && trNode.textContent.trim().toLowerCase() == "tr");
		}
	}

	return { language, translated };
}

function getApproximateTotalFileSize(detailsNodes) {
	if (detailsNodes.length <= 4) { return null; }

	const node = detailsNodes[4].querySelector(".gdt2");
	if (node === null) { return null; }

	const pattern = /([0-9\.]+)\s*(\w+)/i;
	const match = pattern.exec(node.textContent);
	return (match !== null ? utils.getBytesSizeFromLabel(match[1], match[2]) : null);
}

function getFileCount(detailsNodes) {
	if (detailsNodes.length <= 5) { return null; }

	const node = detailsNodes[5].querySelector(".gdt2");
	if (node === null) { return null; }

	const pattern = /([0-9,]+)\s*pages/i;
	const match = pattern.exec(node.textContent);
	return (match !== null ? parseInt(match[1].replace(/,/g, ""), 10) : null);
}

function getParent(detailsNodes) {
	if (detailsNodes.length <= 1) { return null; }

	const node = detailsNodes[1].querySelector(".gdt2>a");
	if (node === null) { return null; }

	const info = utils.getGalleryIdentifierAndPageFromUrl(node.getAttribute("href") || "");
	return (info !== null ? info.identifier : null);
}

function getNewerVersions(html) {
	const results = [];
	const nodes = html.querySelectorAll("#gnd>a");

	for (const node of nodes) {
		const info = utils.getGalleryIdentifierAndPageFromUrl(node.getAttribute("href") || "");
		if (info === null) { continue; }

		const galleryInfo = {
			identifier: info.identifier,
			name: node.textContent.trim(),
			dateUploaded: null
		};

		if (node.nextSibling !== null) {
			galleryInfo.dateUploaded = getTimestamp(node.nextSibling.textContent);
		}

		results.push(galleryInfo);
	}

	return results;
}

function getTorrentCount(html) {
	const nodes = html.querySelectorAll("#gd5 .g2>a");
	const pattern = /\btorrent\s+download\s*\(\s*(\d+)\s*\)/i;
	for (const node of nodes) {
		const match = pattern.exec(node.textContent);
		if (match !== null) {
			return parseInt(match[1], 10);
		}
	}

	return null;
}

function getArchiverKey(html) {
	const nodes = html.querySelectorAll("#gd5 .g2>a");
	const pattern = /\barchive\s+download\b/i;
	for (const node of nodes) {
		const match = pattern.exec(node.textContent);
		if (match !== null) {
			const pattern2 = /&or=([^'"]*)['"]/;
			const match2 = pattern2.exec(node.getAttribute("onclick") || "");
			return (match2 !== null ? match2[1] : null);
		}
	}

	return null;
}

function populateGalleryInfoFromHtml(info, html) {
	// General
	info.title = getTitle(html);
	info.titleOriginal = getTitleOriginal(html);
	info.mainThumbnailUrl = getMainThumbnailUrl(html);
	info.category = getCategory(html);
	info.uploader = getUploader(html);

	info.ratingCount = getRatingCount(html);
	info.ratingAverage = getRatingAverage(html);

	info.favoriteCount = getFavoriteCount(html);
	info.favoriteCategory = getFavoriteCategory(html);

	info.thumbnailSize = getThumbnailSize(html);
	info.thumbnailRows = getThumbnailRows(html);

	info.newerVersions = getNewerVersions(html);

	info.torrentCount = getTorrentCount(html);
	info.archiverKey = getArchiverKey(html);

	// Details
	const detailsNodes = getDetailsNodes(html);

	info.dateUploaded = getDateUploaded(detailsNodes);

	info.parent = getParent(detailsNodes);

	const visibleInfo = getVisibleInfo(detailsNodes);
	info.visible = visibleInfo.visible;
	info.visibleReason = visibleInfo.visibleReason;

	const languageInfo = getLanguageInfo(detailsNodes);
	info.language = languageInfo.language;
	info.translated = languageInfo.translated;

	info.approximateTotalFileSize = getApproximateTotalFileSize(detailsNodes);

	info.fileCount = getFileCount(detailsNodes);

	// Tags
	info.tags = getTags(html);
	info.tagsHaveNamespace = true;
}

function getFromHtml(html, url) {
	const link = html.querySelector(".ptt td.ptds>a[href],.ptt td.ptdd>a[href]");
	if (link === null) { return null; }

	const idPage = utils.getGalleryIdentifierAndPageFromUrl(link.getAttribute("href") || "");
	if (idPage === null) { return null; }

	const info = new types.GalleryInfo();
	info.identifier = idPage.identifier;
	info.currentPage = idPage.page;
	info.source = "html";
	populateGalleryInfoFromHtml(info, html);
	info.sourceSite = utils.getSourceSiteFromUrl(url);
	info.dateGenerated = Date.now();
	return info;
}


module.exports = getFromHtml;

},{"./types":4,"./utils":5}],4:[function(require,module,exports){
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

},{"./style":8}],7:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const pageType = require("../api/page-type");
const windowMessage = require("../window-message");
const getFromHtml = require("../api/gallery-info/get-from-html");
const queryString = require("../query-string");
const GalleryIdentifier = require("../api/gallery-identifier").GalleryIdentifier;
const toCommonJson = require("../api/gallery-info/common-json").toCommonJson;

let downloadDataUrl = null;


function setupGalleryPage() {
	createGalleryPageDownloadLink();

	windowMessage.registerCommand("galleryInfoRequest", (e) => {
		const data = getFromHtml(document, window.location.href);
		if (data === null) { return; }
		windowMessage.post(e.source, "galleryInfoResponse", toCommonJson(data));
	});
}

function createGalleryPageDownloadLink() {
	const galleryLinks = require("../api/gallery-links");
	const link = galleryLinks.createRightSideLink("Metadata JSON").link;
	if (link === null) { return; }

	link.setAttribute("download", "info.json");
	link.href = "#";

	link.addEventListener("click", onDownloadLinkClicked, false);
	link.addEventListener("auxclick", onDownloadLinkClicked, false);
}

function getGalleryInfo() {
	try {
		return getFromHtml(document, window.location.href);
	} catch (e) {
		console.error(e);
		return null;
	}
}

function createDownloadDataUrl(info) {
	const infoString = JSON.stringify(info, null, "  ");
	const blob = new Blob([ infoString ], { type: "application/json" });
	return URL.createObjectURL(blob);
}

function onDownloadLinkClicked(e) {
	if (downloadDataUrl === null) {
		const info = getGalleryInfo();
		if (info === null) {
			console.error("Failed to create download data");
			e.preventDefault();
			e.stopPropagation();
			return false;
		}

		downloadDataUrl = createDownloadDataUrl(toCommonJson(info));
		this.setAttribute("href", downloadDataUrl);
	}
}


function setupTorrentPage() {
	if (!window.opener) { return; }

	const identifier = getGalleryIdentifierFromTorrentPageUrl(window.location.href);
	if (identifier === null) { return; }

	windowMessage.registerCommand("galleryInfoResponse", (e, info) => {
		if (downloadDataUrl !== null || !isValidInfo(info, identifier)) { return; }
		downloadDataUrl = createDownloadDataUrl(info);
		createTorrentPageDownloadLinks(downloadDataUrl);
	});
	windowMessage.post(window.opener, "galleryInfoRequest");
}

function getGalleryIdentifierFromTorrentPageUrl(url) {
	const params = queryString.getUrlParameters(url);
	if (!params.hasOwnProperty("gid") || !params.hasOwnProperty("t")) { return null; }

	const id = parseInt(params.gid, 10);
	if (Number.isNaN(id)) { return null; }

	return new GalleryIdentifier(id, params.t);
}

function isValidInfo(info, identifier) {
	const g = info.gallery;
	return (
		g !== null && typeof(g) === "object" &&
		g.gid === identifier.id &&
		g.token === identifier.token);
}

function createTorrentPageDownloadLinks(url) {
	const tables = document.querySelectorAll("#torrentinfo form table>tbody");
	for (const table of tables) {
		const torrentLink = table.querySelector("tr:nth-of-type(3)>td");
		if (torrentLink === null) { continue; }

		const text = torrentLink.textContent;
		const whitespace = /^\s*/.exec(text)[0];
		const torrentFileName = text.trim().replace(/\.[^\.]*$/, "");

		const row = document.createElement("tr");

		const cell = document.createElement("td");
		cell.setAttribute("colspan", "5");

		if (whitespace.length > 0) {
			cell.appendChild(document.createTextNode(whitespace));
		}

		const link = document.createElement("a");
		link.setAttribute("download", `${torrentFileName}.info.json`);
		link.href = url;
		link.textContent = "Metadata JSON";
		cell.appendChild(link);

		row.appendChild(cell);
		table.appendChild(row);
	}
}


function main() {
	const currentPageType = pageType.get(document, location);

	switch (currentPageType) {
		case "gallery":
			setupGalleryPage();
		break;
		case "torrentInfo":
			setupTorrentPage();
		break;
	}
}


ready.onReady(main);

},{"../api/gallery-identifier":1,"../api/gallery-info/common-json":2,"../api/gallery-info/get-from-html":3,"../api/gallery-links":6,"../api/page-type":7,"../query-string":10,"../ready":11,"../window-message":12}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
"use strict";

let commands = null;


function registerCommand(commandName, callback) {
	if (commands === null) {
		commands = {};
		window.addEventListener("message", onWindowMessage, false);
	}

	commands[commandName] = callback;
}

function post(targetWindow, commandName, data) {
	targetWindow.postMessage({
		xData: { command: commandName, data: data }
	}, window.location.origin);
}

function onWindowMessage(e) {
	if (e.origin !== window.origin) { return; }

	let data = e.data;
	if (data === null || typeof(data) !== "object") { return; }

	data = data.xData;
	if (data === null || typeof(data) !== "object") { return; }
	if (typeof(data.command) !== "string") { return; }

	const callback = commands[data.command];
	if (typeof(callback) !== "function") { return; }

	callback(e, data.data);
}


module.exports = {
	registerCommand,
	post
};

},{}]},{},[9])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2NvbW1vbi1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbC5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3R5cGVzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHMuanMiLCJzcmMvYXBpL2dhbGxlcnktbGlua3MuanMiLCJzcmMvYXBpL3BhZ2UtdHlwZS5qcyIsInNyYy9hcGkvc3R5bGUuanMiLCJzcmMvZ2FsbGVyeS1tZXRhZGF0YS9tYWluLmpzIiwic3JjL3F1ZXJ5LXN0cmluZy5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy93aW5kb3ctbWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDallBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5SWRlbnRpZmllciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIHRva2VuKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRva2VuID0gdG9rZW47XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlRnJvbVVybCh1cmwpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gL14uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT8kLy5leGVjKHVybCk7XHJcblx0XHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBwYXRoID0gbWF0Y2hbMV0ucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgXCJcIikucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xyXG5cdFx0aWYgKHBhdGhbMF0gIT09IFwiZ1wiIHx8IHBhdGgubGVuZ3RoIDwgMykgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IGlkID0gcGFyc2VJbnQocGF0aFsxXSwgMTApO1xyXG5cdFx0cmV0dXJuIChOdW1iZXIuaXNOYU4oaWQpID8gbnVsbCA6IG5ldyBHYWxsZXJ5SWRlbnRpZmllcihpZCwgcGF0aFsyXSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgR2FsbGVyeUlkZW50aWZpZXIgPSByZXF1aXJlKFwiLi4vZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvU3RyaW5nT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRyZXR1cm4gdHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b051bWJlck9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaWRlbnRpZmllciwgZGVmYXVsdFZhbHVlKSB7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwgfHwgdHlwZW9mKGlkZW50aWZpZXIpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdpZDogaWRlbnRpZmllci5pZCxcclxuXHRcdHRva2VuOiBpZGVudGlmaWVyLnRva2VuXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihuZXdlclZlcnNpb25zKSB7XHJcblx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0aWYgKEFycmF5LmlzQXJyYXkobmV3ZXJWZXJzaW9ucykpIHtcclxuXHRcdGZvciAoY29uc3QgbmV3ZXJWZXJzaW9uIG9mIG5ld2VyVmVyc2lvbnMpIHtcclxuXHRcdFx0cmVzdWx0LnB1c2goe1xyXG5cdFx0XHRcdGdhbGxlcnk6IChcclxuXHRcdFx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ld2VyVmVyc2lvbi5pZGVudGlmaWVyLCBudWxsKSB8fFxyXG5cdFx0XHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLCBudWxsKSksXHJcblx0XHRcdFx0bmFtZTogdG9TdHJpbmdPckRlZmF1bHQobmV3ZXJWZXJzaW9uLm5hbWUpLFxyXG5cdFx0XHRcdGRhdGVfdXBsb2FkZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KG5ld2VyVmVyc2lvbi5kYXRlVXBsb2FkZWQpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YWdzVG9Db21tb25Kc29uKHRhZ3MpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRpZiAodGFncyAhPT0gbnVsbCAmJiB0eXBlb2YodGFncykgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdGZvciAoY29uc3QgbmFtZXNwYWNlIGluIHRhZ3MpIHtcclxuXHRcdFx0Y29uc3QgdGFnTGlzdCA9IHRhZ3NbbmFtZXNwYWNlXTtcclxuXHRcdFx0cmVzdWx0W25hbWVzcGFjZV0gPSBbLi4udGFnTGlzdF07XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uRmF2b3JpdGVDYXRlZ29yeShpbmZvKSB7XHJcblx0aWYgKGluZm8uZmF2b3JpdGVDYXRlZ29yeSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdHJldHVybiB7XHJcblx0XHRpZDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNhdGVnb3J5LmluZGV4LCAwKSxcclxuXHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkudGl0bGUsIFwiXCIpXHJcblx0fTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uRnVsbEdhbGxlcnlJbmZvSnNvbihpbmZvKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdhbGxlcnk6IChcclxuXHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaW5mby5pZGVudGlmaWVyLCBudWxsKSB8fFxyXG5cdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihuZXcgR2FsbGVyeUlkZW50aWZpZXIoMCwgXCJcIiksIG51bGwpKSxcclxuXHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlLCBcIlwiKSxcclxuXHRcdHRpdGxlX29yaWdpbmFsOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlT3JpZ2luYWwsIFwiXCIpLFxyXG5cdFx0ZGF0ZV91cGxvYWRlZDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5kYXRlVXBsb2FkZWQsIDApLFxyXG5cdFx0Y2F0ZWdvcnk6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uY2F0ZWdvcnksIFwiXCIpLFxyXG5cdFx0dXBsb2FkZXI6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udXBsb2FkZXIsIFwiXCIpLFxyXG5cdFx0cmF0aW5nOiB7XHJcblx0XHRcdGF2ZXJhZ2U6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8ucmF0aW5nQXZlcmFnZSwgMCksXHJcblx0XHRcdGNvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLnJhdGluZ0NvdW50LCAwKSxcclxuXHRcdH0sXHJcblx0XHRmYXZvcml0ZXM6IHtcclxuXHRcdFx0Y2F0ZWdvcnk6IChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgIT09IG51bGwgPyB0b051bWJlck9yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkuaW5kZXgsIC0xKSA6IC0xKSxcclxuXHRcdFx0Y2F0ZWdvcnlfdGl0bGU6IChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgIT09IG51bGwgPyB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkudGl0bGUsIFwiXCIpIDogXCJcIiksXHJcblx0XHRcdGNvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ291bnQsIDApXHJcblx0XHR9LFxyXG5cdFx0cGFyZW50OiBnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpbmZvLnBhcmVudCwgbnVsbCksXHJcblx0XHRuZXdlcl92ZXJzaW9uczogbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihpbmZvLm5ld2VyVmVyc2lvbnMpLFxyXG5cdFx0dGh1bWJuYWlsOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLm1haW5UaHVtYm5haWxVcmwsIFwiXCIpLFxyXG5cdFx0dGh1bWJuYWlsX3NpemU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGh1bWJuYWlsU2l6ZSwgXCJcIiksXHJcblx0XHR0aHVtYm5haWxfcm93czogdG9OdW1iZXJPckRlZmF1bHQoaW5mby50aHVtYm5haWxSb3dzLCAwKSxcclxuXHRcdGltYWdlX2NvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLmZpbGVDb3VudCwgMCksXHJcblx0XHRpbWFnZXNfcmVzaXplZDogZmFsc2UsXHJcblx0XHR0b3RhbF9maWxlX3NpemVfYXBwcm94OiB0b051bWJlck9yRGVmYXVsdChpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSwgMCksXHJcblx0XHR2aXNpYmxlOiAoaW5mby52aXNpYmxlID09PSB0cnVlKSxcclxuXHRcdHZpc2libGVfcmVhc29uOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnZpc2libGVSZWFzb24sIFwiXCIpLFxyXG5cdFx0bGFuZ3VhZ2U6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8ubGFuZ3VhZ2UsIFwiXCIpLFxyXG5cdFx0dHJhbnNsYXRlZDogKGluZm8udHJhbnNsYXRlZCA9PT0gdHJ1ZSksXHJcblx0XHR0YWdzOiB0YWdzVG9Db21tb25Kc29uKGluZm8udGFncyksXHJcblx0XHQvLyBOZXdcclxuXHRcdHRhZ3NfaGF2ZV9uYW1lc3BhY2U6IChpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID09PSB0cnVlKSxcclxuXHRcdHRvcnJlbnRfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8udG9ycmVudENvdW50LCAwKSxcclxuXHRcdGFyY2hpdmVyX2tleTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5hcmNoaXZlcktleSwgbnVsbCksXHJcblx0XHRzb3VyY2U6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uc291cmNlLCBudWxsKSxcclxuXHRcdHNvdXJjZV9zaXRlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnNvdXJjZVNpdGUsIG51bGwpLFxyXG5cdFx0ZGF0ZV9nZW5lcmF0ZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZGF0ZUdlbmVyYXRlZCwgMClcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkdhbGxlcnlJbmZvSnNvbihpbmZvKSB7XHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZGF0ZVVwbG9hZGVkLCAwKSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlLCBcIlwiKSxcclxuXHRcdHRpdGxlX29yaWdpbmFsOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlT3JpZ2luYWwsIFwiXCIpLFxyXG5cclxuXHRcdGNhdGVnb3J5OiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmNhdGVnb3J5LCBcIlwiKSxcclxuXHRcdHRhZ3M6IHRhZ3NUb0NvbW1vbkpzb24oaW5mby50YWdzKSxcclxuXHJcblx0XHRsYW5ndWFnZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5sYW5ndWFnZSwgXCJcIiksXHJcblx0XHR0cmFuc2xhdGVkOiAhIWluZm8udHJhbnNsYXRlZCxcclxuXHJcblx0XHRmYXZvcml0ZV9jYXRlZ29yeTogdG9Db21tb25GYXZvcml0ZUNhdGVnb3J5KGluZm8pLFxyXG5cclxuXHRcdHVwbG9hZF9kYXRlOiBbXHJcblx0XHRcdGRhdGUuZ2V0VVRDRnVsbFllYXIoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENNb250aCgpICsgMSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENEYXRlKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDSG91cnMoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENNaW51dGVzKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDU2Vjb25kcygpXHJcblx0XHRdLFxyXG5cclxuXHRcdHNvdXJjZToge1xyXG5cdFx0XHRzaXRlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnNvdXJjZVNpdGUsIFwiXCIpLFxyXG5cdFx0XHRnaWQ6IChpbmZvLmlkZW50aWZpZXIgIT09IG51bGwgPyB0b051bWJlck9yRGVmYXVsdChpbmZvLmlkZW50aWZpZXIuaWQsIDApIDogMCksXHJcblx0XHRcdHRva2VuOiAoaW5mby5pZGVudGlmaWVyICE9PSBudWxsID8gdG9TdHJpbmdPckRlZmF1bHQoaW5mby5pZGVudGlmaWVyLnRva2VuLCAwKSA6IDApLFxyXG5cdFx0XHRwYXJlbnRfZ2FsbGVyeTogZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaW5mby5wYXJlbnQsIG51bGwpLFxyXG5cdFx0XHRuZXdlcl92ZXJzaW9uczogbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihpbmZvLm5ld2VyVmVyc2lvbnMpXHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25Kc29uKGluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2FsbGVyeV9pbmZvOiB0b0NvbW1vbkdhbGxlcnlJbmZvSnNvbihpbmZvKSxcclxuXHRcdGdhbGxlcnlfaW5mb19mdWxsOiB0b0NvbW1vbkZ1bGxHYWxsZXJ5SW5mb0pzb24oaW5mbylcclxuXHR9O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0dG9Db21tb25Kc29uXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDc3NVcmwodXJsU3RyaW5nKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC91cmxcXHMqXFwoXFxzKihbJ1wiXSk/LztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh1cmxTdHJpbmcpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBxdW90ZSA9IG1hdGNoWzFdIHx8IFwiXCI7XHJcblx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAtIHF1b3RlLmxlbmd0aCk7XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4yID0gbmV3IFJlZ0V4cChgKCR7cXVvdGV9KVxcXFxzKlxcXFwpXFxcXHMqJGApO1xyXG5cdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4yLmV4ZWModXJsU3RyaW5nKTtcclxuXHRpZiAobWF0Y2gyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHVybCA9IHVybFN0cmluZy5zdWJzdHIoMCwgbWF0Y2gyLmluZGV4ICsgbWF0Y2gyWzFdLmxlbmd0aCk7XHJcblxyXG5cdGxldCB1cmwyID0gdXJsO1xyXG5cdGlmICghcXVvdGUpIHtcclxuXHRcdHVybDIgPSB1cmwucmVwbGFjZSgvXCIvZywgXCJcXFxcXFxcIlwiKTtcclxuXHRcdHVybDIgPSBgXCIke3VybDJ9XCJgO1xyXG5cdH0gZWxzZSBpZiAocXVvdGUgPT09IFwiJ1wiKSB7XHJcblx0XHR1cmwyID0gdXJsLnN1YnN0cigxLCB1cmwubGVuZ3RoIC0gMik7XHJcblx0XHR1cmwyID0gdXJsMi5yZXBsYWNlKC9cXFxcJy9nLCBcIidcIik7XHJcblx0XHR1cmwyID0gYFwiJHt1cmwyfVwiYDtcclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gSlNPTi5wYXJzZSh1cmwyKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRyZXR1cm4gdXJsO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZXN0YW1wKHRleHQpIHtcclxuXHRjb25zdCBtYXRjaCA9IC8oWzAtOV0rKS0oWzAtOV0rKS0oWzAtOV0rKVxccysoWzAtOV0rKTooWzAtOV0rKS8uZXhlYyh0ZXh0KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0cmV0dXJuIERhdGUuVVRDKFxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbMV0sIDEwKSwgLy8geWVhclxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbMl0sIDEwKSAtIDEsIC8vIG1vbnRoXHJcblx0XHRwYXJzZUludChtYXRjaFszXSwgMTApLCAvLyBkYXlcclxuXHRcdHBhcnNlSW50KG1hdGNoWzRdLCAxMCksIC8vIGhvdXJzXHJcblx0XHRwYXJzZUludChtYXRjaFs1XSwgMTApLCAvLyBtaW51dGVzXHJcblx0XHQwLCAvLyBzZWNvbmRzXHJcblx0XHQwKTsgLy8gbWlsbGlzZWNvbmRzXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUaXRsZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnblwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBub2RlLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaXRsZU9yaWdpbmFsKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dqXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IG5vZGUudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1haW5UaHVtYm5haWxVcmwoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2QxPmRpdlwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBnZXRDc3NVcmwobm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENhdGVnb3J5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkYz5kaXZbb25jbGlja11cIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9bJ1wiXS4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pP1snXCJdLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcIm9uY2xpY2tcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVwbG9hZGVyKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkbj5hXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXi4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pPyQvO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gKG1hdGNoWzFdLnNwbGl0KFwiL1wiKVsxXSB8fCBcIlwiKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYXRpbmdDb3VudChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfY291bnRcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBwYXJzZUludChub2RlLnRleHRDb250ZW50LnRyaW0oKSwgMTApO1xyXG5cdHJldHVybiAoTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhdGluZ0F2ZXJhZ2UoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nX2xhYmVsXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvYXZlcmFnZTpcXHMqKFswLTlcXC5dKykvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcclxuXHRyZXR1cm4gKE51bWJlci5pc05hTih2YWx1ZSkgPyBudWxsIDogdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYXZvcml0ZUNvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2ZhdmNvdW50XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxzKihbMC05XSt8b25jZSkvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgbWF0Y2gxID0gbWF0Y2hbMV07XHJcblx0cmV0dXJuIChtYXRjaDEudG9Mb3dlckNhc2UoKSA9PT0gXCJvbmNlXCIgPyAxIDogcGFyc2VJbnQobWF0Y2gxLCAxMCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYXZvcml0ZUNhdGVnb3J5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2Zhdj5kaXYuaVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikgfHwgXCJcIjtcclxuXHRjb25zdCBwYXR0ZXJuID0gL2JhY2tncm91bmQtcG9zaXRpb25cXHMqOlxccypcXGQrKD86cHgpP1xccysoLT9cXGQrKSg/OnB4KS87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiKTtcclxuXHRjb25zdCBpbmRleCA9IChtYXRjaCAhPT0gbnVsbCkgP1xyXG5cdFx0TWF0aC5mbG9vcigoTWF0aC5hYnMocGFyc2VJbnQobWF0Y2hbMV0sIDEwKSkgLSAyKSAvIDE5KSA6XHJcblx0XHQtMTtcclxuXHJcblx0cmV0dXJuIHsgaW5kZXgsIHRpdGxlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRodW1ibmFpbFNpemUoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkbzQ+Lm5vc2VsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPCAyKSB7IHJldHVybiBudWxsOyB9XHJcblx0cmV0dXJuIChub2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aHNcIikgPyBcIm5vcm1hbFwiIDogXCJsYXJnZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGh1bWJuYWlsUm93cyhodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RvMj4ubm9zZWxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxzKihbMC05XSspLztcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInRoc1wiKSkge1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYWdzKGh0bWwpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gLyguKyk6LztcclxuXHRjb25zdCBncm91cHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGFnbGlzdCB0clwiKTtcclxuXHRjb25zdCB0YWdzID0ge307XHJcblxyXG5cdGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSB7XHJcblx0XHRjb25zdCB0ZHMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XHJcblx0XHRpZiAodGRzLmxlbmd0aCA9PT0gMCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHRkc1swXS50ZXh0Q29udGVudCk7XHJcblx0XHRjb25zdCBuYW1lc3BhY2UgPSAobWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXS50cmltKCkgOiBcIlwiKTtcclxuXHJcblx0XHRsZXQgbmFtZXNwYWNlVGFncztcclxuXHRcdGlmICh0YWdzLmhhc093blByb3BlcnR5KG5hbWVzcGFjZSkpIHtcclxuXHRcdFx0bmFtZXNwYWNlVGFncyA9IHRhZ3NbbmFtZXNwYWNlXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MgPSBbXTtcclxuXHRcdFx0dGFnc1tuYW1lc3BhY2VdID0gbmFtZXNwYWNlVGFncztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0YWdEaXZzID0gdGRzW3Rkcy5sZW5ndGggLSAxXS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xyXG5cdFx0Zm9yIChjb25zdCBkaXYgb2YgdGFnRGl2cykge1xyXG5cdFx0XHRjb25zdCBsaW5rID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xyXG5cdFx0XHRpZiAobGluayA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdFx0Y29uc3QgdGFnID0gbGluay50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MucHVzaCh0YWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRhZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERldGFpbHNOb2RlcyhodG1sKSB7XHJcblx0cmV0dXJuIGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZGQgdHJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGVVcGxvYWRlZChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gZ2V0VGltZXN0YW1wKG5vZGUudGV4dENvbnRlbnQpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVJbmZvKGRldGFpbHNOb2Rlcykge1xyXG5cdGxldCB2aXNpYmxlID0gdHJ1ZTtcclxuXHRsZXQgdmlzaWJsZVJlYXNvbiA9IG51bGw7XHJcblxyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoID4gMikge1xyXG5cdFx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1syXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0XHRpZiAobm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBwYXR0ZXJuID0gL25vXFxzK1xcKCguKz8pXFwpL2k7XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0XHR2aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0dmlzaWJsZVJlYXNvbiA9IG1hdGNoWzFdLnRyaW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdmlzaWJsZSwgdmlzaWJsZVJlYXNvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYW5ndWFnZUluZm8oZGV0YWlsc05vZGVzKSB7XHJcblx0bGV0IGxhbmd1YWdlID0gbnVsbDtcclxuXHRsZXQgdHJhbnNsYXRlZCA9IGZhbHNlO1xyXG5cclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA+IDMpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbM10ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgdGV4dE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcblx0XHRcdGlmICh0ZXh0Tm9kZSAhPT0gbnVsbCAmJiB0ZXh0Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcclxuXHRcdFx0XHRsYW5ndWFnZSA9IHRleHROb2RlLm5vZGVWYWx1ZS50cmltKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHRyTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5oYWxwXCIpO1xyXG5cdFx0XHR0cmFuc2xhdGVkID0gKHRyTm9kZSAhPT0gbnVsbCAmJiB0ck5vZGUudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT0gXCJ0clwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IGxhbmd1YWdlLCB0cmFuc2xhdGVkIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwcHJveGltYXRlVG90YWxGaWxlU2l6ZShkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSA0KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbNF0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKFswLTlcXC5dKylcXHMqKFxcdyspL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IHV0aWxzLmdldEJ5dGVzU2l6ZUZyb21MYWJlbChtYXRjaFsxXSwgbWF0Y2hbMl0pIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpbGVDb3VudChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSA1KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbNV0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKFswLTksXSspXFxzKnBhZ2VzL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IHBhcnNlSW50KG1hdGNoWzFdLnJlcGxhY2UoLywvZywgXCJcIiksIDEwKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gMSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzFdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0Mj5hXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKGluZm8gIT09IG51bGwgPyBpbmZvLmlkZW50aWZpZXIgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmV3ZXJWZXJzaW9ucyhodG1sKSB7XHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2duZD5hXCIpO1xyXG5cclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IGluZm8gPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRcdGlmIChpbmZvID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0Y29uc3QgZ2FsbGVyeUluZm8gPSB7XHJcblx0XHRcdGlkZW50aWZpZXI6IGluZm8uaWRlbnRpZmllcixcclxuXHRcdFx0bmFtZTogbm9kZS50ZXh0Q29udGVudC50cmltKCksXHJcblx0XHRcdGRhdGVVcGxvYWRlZDogbnVsbFxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAobm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRnYWxsZXJ5SW5mby5kYXRlVXBsb2FkZWQgPSBnZXRUaW1lc3RhbXAobm9kZS5uZXh0U2libGluZy50ZXh0Q29udGVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVzdWx0cy5wdXNoKGdhbGxlcnlJbmZvKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb3JyZW50Q291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkNSAuZzI+YVwiKTtcclxuXHRjb25zdCBwYXR0ZXJuID0gL1xcYnRvcnJlbnRcXHMrZG93bmxvYWRcXHMqXFwoXFxzKihcXGQrKVxccypcXCkvaTtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFyY2hpdmVyS2V5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZDUgLmcyPmFcIik7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXGJhcmNoaXZlXFxzK2Rvd25sb2FkXFxiL2k7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBwYXR0ZXJuMiA9IC8mb3I9KFteJ1wiXSopWydcIl0vO1xyXG5cdFx0XHRjb25zdCBtYXRjaDIgPSBwYXR0ZXJuMi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwib25jbGlja1wiKSB8fCBcIlwiKTtcclxuXHRcdFx0cmV0dXJuIChtYXRjaDIgIT09IG51bGwgPyBtYXRjaDJbMV0gOiBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUh0bWwoaW5mbywgaHRtbCkge1xyXG5cdC8vIEdlbmVyYWxcclxuXHRpbmZvLnRpdGxlID0gZ2V0VGl0bGUoaHRtbCk7XHJcblx0aW5mby50aXRsZU9yaWdpbmFsID0gZ2V0VGl0bGVPcmlnaW5hbChodG1sKTtcclxuXHRpbmZvLm1haW5UaHVtYm5haWxVcmwgPSBnZXRNYWluVGh1bWJuYWlsVXJsKGh0bWwpO1xyXG5cdGluZm8uY2F0ZWdvcnkgPSBnZXRDYXRlZ29yeShodG1sKTtcclxuXHRpbmZvLnVwbG9hZGVyID0gZ2V0VXBsb2FkZXIoaHRtbCk7XHJcblxyXG5cdGluZm8ucmF0aW5nQ291bnQgPSBnZXRSYXRpbmdDb3VudChodG1sKTtcclxuXHRpbmZvLnJhdGluZ0F2ZXJhZ2UgPSBnZXRSYXRpbmdBdmVyYWdlKGh0bWwpO1xyXG5cclxuXHRpbmZvLmZhdm9yaXRlQ291bnQgPSBnZXRGYXZvcml0ZUNvdW50KGh0bWwpO1xyXG5cdGluZm8uZmF2b3JpdGVDYXRlZ29yeSA9IGdldEZhdm9yaXRlQ2F0ZWdvcnkoaHRtbCk7XHJcblxyXG5cdGluZm8udGh1bWJuYWlsU2l6ZSA9IGdldFRodW1ibmFpbFNpemUoaHRtbCk7XHJcblx0aW5mby50aHVtYm5haWxSb3dzID0gZ2V0VGh1bWJuYWlsUm93cyhodG1sKTtcclxuXHJcblx0aW5mby5uZXdlclZlcnNpb25zID0gZ2V0TmV3ZXJWZXJzaW9ucyhodG1sKTtcclxuXHJcblx0aW5mby50b3JyZW50Q291bnQgPSBnZXRUb3JyZW50Q291bnQoaHRtbCk7XHJcblx0aW5mby5hcmNoaXZlcktleSA9IGdldEFyY2hpdmVyS2V5KGh0bWwpO1xyXG5cclxuXHQvLyBEZXRhaWxzXHJcblx0Y29uc3QgZGV0YWlsc05vZGVzID0gZ2V0RGV0YWlsc05vZGVzKGh0bWwpO1xyXG5cclxuXHRpbmZvLmRhdGVVcGxvYWRlZCA9IGdldERhdGVVcGxvYWRlZChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRpbmZvLnBhcmVudCA9IGdldFBhcmVudChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRjb25zdCB2aXNpYmxlSW5mbyA9IGdldFZpc2libGVJbmZvKGRldGFpbHNOb2Rlcyk7XHJcblx0aW5mby52aXNpYmxlID0gdmlzaWJsZUluZm8udmlzaWJsZTtcclxuXHRpbmZvLnZpc2libGVSZWFzb24gPSB2aXNpYmxlSW5mby52aXNpYmxlUmVhc29uO1xyXG5cclxuXHRjb25zdCBsYW5ndWFnZUluZm8gPSBnZXRMYW5ndWFnZUluZm8oZGV0YWlsc05vZGVzKTtcclxuXHRpbmZvLmxhbmd1YWdlID0gbGFuZ3VhZ2VJbmZvLmxhbmd1YWdlO1xyXG5cdGluZm8udHJhbnNsYXRlZCA9IGxhbmd1YWdlSW5mby50cmFuc2xhdGVkO1xyXG5cclxuXHRpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IGdldEFwcHJveGltYXRlVG90YWxGaWxlU2l6ZShkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRpbmZvLmZpbGVDb3VudCA9IGdldEZpbGVDb3VudChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHQvLyBUYWdzXHJcblx0aW5mby50YWdzID0gZ2V0VGFncyhodG1sKTtcclxuXHRpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RnJvbUh0bWwoaHRtbCwgdXJsKSB7XHJcblx0Y29uc3QgbGluayA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5wdHQgdGQucHRkcz5hW2hyZWZdLC5wdHQgdGQucHRkZD5hW2hyZWZdXCIpO1xyXG5cdGlmIChsaW5rID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGlkUGFnZSA9IHV0aWxzLmdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdGlmIChpZFBhZ2UgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mbyA9IG5ldyB0eXBlcy5HYWxsZXJ5SW5mbygpO1xyXG5cdGluZm8uaWRlbnRpZmllciA9IGlkUGFnZS5pZGVudGlmaWVyO1xyXG5cdGluZm8uY3VycmVudFBhZ2UgPSBpZFBhZ2UucGFnZTtcclxuXHRpbmZvLnNvdXJjZSA9IFwiaHRtbFwiO1xyXG5cdHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSHRtbChpbmZvLCBodG1sKTtcclxuXHRpbmZvLnNvdXJjZVNpdGUgPSB1dGlscy5nZXRTb3VyY2VTaXRlRnJvbVVybCh1cmwpO1xyXG5cdGluZm8uZGF0ZUdlbmVyYXRlZCA9IERhdGUubm93KCk7XHJcblx0cmV0dXJuIGluZm87XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldEZyb21IdG1sO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlJZGVudGlmaWVyID0gcmVxdWlyZShcIi4uL2dhbGxlcnktaWRlbnRpZmllclwiKS5HYWxsZXJ5SWRlbnRpZmllcjtcclxuXHJcblxyXG5jbGFzcyBHYWxsZXJ5SW5mbyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZSA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlT3JpZ2luYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlVXBsb2FkZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLnVwbG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQXZlcmFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0NvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5tYWluVGh1bWJuYWlsVXJsID0gbnVsbFxyXG5cdFx0dGhpcy50aHVtYm5haWxTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsUm93cyA9IG51bGw7XHJcblx0XHR0aGlzLmZpbGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0dGhpcy52aXNpYmxlUmVhc29uID0gbnVsbDtcclxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy50cmFuc2xhdGVkID0gbnVsbDtcclxuXHRcdHRoaXMuYXJjaGl2ZXJLZXkgPSBudWxsO1xyXG5cdFx0dGhpcy50b3JyZW50Q291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzID0gbnVsbDtcclxuXHRcdHRoaXMudGFnc0hhdmVOYW1lc3BhY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XHJcblx0XHR0aGlzLm5ld2VyVmVyc2lvbnMgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2VTaXRlID0gbnVsbDtcclxuXHRcdHRoaXMuZGF0ZUdlbmVyYXRlZCA9IG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0R2FsbGVyeUlkZW50aWZpZXIsXHJcblx0R2FsbGVyeUluZm9cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5cclxuY29uc3Qgc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzID0gWyBcImJcIiwgXCJrYlwiLCBcIm1iXCIsIFwiZ2JcIiBdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBtYXRjaCA9IC9cXD8oPzoofFtcXHdcXFddKj8mKXA9KFtcXCtcXC1dP1xcZCspKT8vLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0pIHtcclxuXHRcdGNvbnN0IHBhZ2UgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0aWYgKCFOdW1iZXIuaXNOYU4ocGFnZSkpIHsgcmV0dXJuIHBhZ2U7IH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgaWRlbnRpZmllciA9IHR5cGVzLkdhbGxlcnlJZGVudGlmaWVyLmNyZWF0ZUZyb21VcmwodXJsKTtcclxuXHRpZiAoaWRlbnRpZmllciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYWdlID0gZ2V0R2FsbGVyeVBhZ2VGcm9tVXJsKHVybCk7XHJcblx0cmV0dXJuIHsgaWRlbnRpZmllciwgcGFnZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCeXRlc1NpemVGcm9tTGFiZWwobnVtYmVyLCBsYWJlbCkge1xyXG5cdGxldCBpID0gc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzLmluZGV4T2YobGFiZWwudG9Mb3dlckNhc2UoKSk7XHJcblx0aWYgKGkgPCAwKSB7IGkgPSAwOyB9XHJcblx0cmV0dXJuIE1hdGguZmxvb3IocGFyc2VGbG9hdChudW1iZXIpICogTWF0aC5wb3coMTAyNCwgaSkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9eKD86KD86W2Etel1bYS16MC05XFwrXFwtXFwuXSo6XFwvKnxcXC97Mix9KShbXlxcL10qKSk/KFxcLz9bXFx3XFxXXSopJC9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybCk7XHJcblxyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgaG9zdCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJleGhlbnRhaVwiOyB9XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZS1oZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJlLWhlbnRhaVwiOyB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwsXHJcblx0Z2V0Qnl0ZXNTaXplRnJvbUxhYmVsLFxyXG5cdGdldFNvdXJjZVNpdGVGcm9tVXJsXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi9zdHlsZVwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSaWdodFNpZGVMaW5rKGxhYmVsKSB7XHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZDVcIik7XHJcblx0aWYgKHBhcmVudCA9PT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIHsgbGluazogbnVsbCwgbGlua0NvbnRhaW5lcjogbnVsbCB9O1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdGxpbmtDb250YWluZXIuY2xhc3NOYW1lID0gXCJnMiBnc3BcIjtcclxuXHJcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRpbWcuc3JjID0gc3R5bGUuZ2V0QXJyb3dJY29uVXJsKCk7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiKSk7XHJcblxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRsaW5rLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcblx0cGFyZW50LmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xyXG5cclxuXHRyZXR1cm4geyBsaW5rLCBsaW5rQ29udGFpbmVyIH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVSaWdodFNpZGVMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGlzRGFyaygpIHtcclxuXHRyZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvY3VtZW50RGFya0ZsYWcoKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnJvd0ljb25VcmwoKSB7XHJcblx0cmV0dXJuIChpc0RhcmsoKSA/IFwiaHR0cHM6Ly9leGhlbnRhaS5vcmcvaW1nL21yLmdpZlwiIDogXCJodHRwczovL2VoZ3Qub3JnL2cvbXIuZ2lmXCIpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNEYXJrLFxyXG5cdHNldERvY3VtZW50RGFya0ZsYWcsXHJcblx0Z2V0QXJyb3dJY29uVXJsXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHBhZ2VUeXBlID0gcmVxdWlyZShcIi4uL2FwaS9wYWdlLXR5cGVcIik7XHJcbmNvbnN0IHdpbmRvd01lc3NhZ2UgPSByZXF1aXJlKFwiLi4vd2luZG93LW1lc3NhZ2VcIik7XHJcbmNvbnN0IGdldEZyb21IdG1sID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbFwiKTtcclxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi4vcXVlcnktc3RyaW5nXCIpO1xyXG5jb25zdCBHYWxsZXJ5SWRlbnRpZmllciA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5jb25zdCB0b0NvbW1vbkpzb24gPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby9jb21tb24tanNvblwiKS50b0NvbW1vbkpzb247XHJcblxyXG5sZXQgZG93bmxvYWREYXRhVXJsID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXR1cEdhbGxlcnlQYWdlKCkge1xyXG5cdGNyZWF0ZUdhbGxlcnlQYWdlRG93bmxvYWRMaW5rKCk7XHJcblxyXG5cdHdpbmRvd01lc3NhZ2UucmVnaXN0ZXJDb21tYW5kKFwiZ2FsbGVyeUluZm9SZXF1ZXN0XCIsIChlKSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0gZ2V0RnJvbUh0bWwoZG9jdW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdGlmIChkYXRhID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cdFx0d2luZG93TWVzc2FnZS5wb3N0KGUuc291cmNlLCBcImdhbGxlcnlJbmZvUmVzcG9uc2VcIiwgdG9Db21tb25Kc29uKGRhdGEpKTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeVBhZ2VEb3dubG9hZExpbmsoKSB7XHJcblx0Y29uc3QgZ2FsbGVyeUxpbmtzID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWxpbmtzXCIpO1xyXG5cdGNvbnN0IGxpbmsgPSBnYWxsZXJ5TGlua3MuY3JlYXRlUmlnaHRTaWRlTGluayhcIk1ldGFkYXRhIEpTT05cIikubGluaztcclxuXHRpZiAobGluayA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0bGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcImluZm8uanNvblwiKTtcclxuXHRsaW5rLmhyZWYgPSBcIiNcIjtcclxuXHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25Eb3dubG9hZExpbmtDbGlja2VkLCBmYWxzZSk7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiYXV4Y2xpY2tcIiwgb25Eb3dubG9hZExpbmtDbGlja2VkLCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJbmZvKCkge1xyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gZ2V0RnJvbUh0bWwoZG9jdW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEb3dubG9hZERhdGFVcmwoaW5mbykge1xyXG5cdGNvbnN0IGluZm9TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCBcIiAgXCIpO1xyXG5cdGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbIGluZm9TdHJpbmcgXSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9KTtcclxuXHRyZXR1cm4gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Eb3dubG9hZExpbmtDbGlja2VkKGUpIHtcclxuXHRpZiAoZG93bmxvYWREYXRhVXJsID09PSBudWxsKSB7XHJcblx0XHRjb25zdCBpbmZvID0gZ2V0R2FsbGVyeUluZm8oKTtcclxuXHRcdGlmIChpbmZvID09PSBudWxsKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGRvd25sb2FkIGRhdGFcIik7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRvd25sb2FkRGF0YVVybCA9IGNyZWF0ZURvd25sb2FkRGF0YVVybCh0b0NvbW1vbkpzb24oaW5mbykpO1xyXG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGRvd25sb2FkRGF0YVVybCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0dXBUb3JyZW50UGFnZSgpIHtcclxuXHRpZiAoIXdpbmRvdy5vcGVuZXIpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IGlkZW50aWZpZXIgPSBnZXRHYWxsZXJ5SWRlbnRpZmllckZyb21Ub3JyZW50UGFnZVVybCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdHdpbmRvd01lc3NhZ2UucmVnaXN0ZXJDb21tYW5kKFwiZ2FsbGVyeUluZm9SZXNwb25zZVwiLCAoZSwgaW5mbykgPT4ge1xyXG5cdFx0aWYgKGRvd25sb2FkRGF0YVVybCAhPT0gbnVsbCB8fCAhaXNWYWxpZEluZm8oaW5mbywgaWRlbnRpZmllcikpIHsgcmV0dXJuOyB9XHJcblx0XHRkb3dubG9hZERhdGFVcmwgPSBjcmVhdGVEb3dubG9hZERhdGFVcmwoaW5mbyk7XHJcblx0XHRjcmVhdGVUb3JyZW50UGFnZURvd25sb2FkTGlua3MoZG93bmxvYWREYXRhVXJsKTtcclxuXHR9KTtcclxuXHR3aW5kb3dNZXNzYWdlLnBvc3Qod2luZG93Lm9wZW5lciwgXCJnYWxsZXJ5SW5mb1JlcXVlc3RcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJZGVudGlmaWVyRnJvbVRvcnJlbnRQYWdlVXJsKHVybCkge1xyXG5cdGNvbnN0IHBhcmFtcyA9IHF1ZXJ5U3RyaW5nLmdldFVybFBhcmFtZXRlcnModXJsKTtcclxuXHRpZiAoIXBhcmFtcy5oYXNPd25Qcm9wZXJ0eShcImdpZFwiKSB8fCAhcGFyYW1zLmhhc093blByb3BlcnR5KFwidFwiKSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpZCA9IHBhcnNlSW50KHBhcmFtcy5naWQsIDEwKTtcclxuXHRpZiAoTnVtYmVyLmlzTmFOKGlkKSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRyZXR1cm4gbmV3IEdhbGxlcnlJZGVudGlmaWVyKGlkLCBwYXJhbXMudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRJbmZvKGluZm8sIGlkZW50aWZpZXIpIHtcclxuXHRjb25zdCBnID0gaW5mby5nYWxsZXJ5O1xyXG5cdHJldHVybiAoXHJcblx0XHRnICE9PSBudWxsICYmIHR5cGVvZihnKSA9PT0gXCJvYmplY3RcIiAmJlxyXG5cdFx0Zy5naWQgPT09IGlkZW50aWZpZXIuaWQgJiZcclxuXHRcdGcudG9rZW4gPT09IGlkZW50aWZpZXIudG9rZW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb3JyZW50UGFnZURvd25sb2FkTGlua3ModXJsKSB7XHJcblx0Y29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b3JyZW50aW5mbyBmb3JtIHRhYmxlPnRib2R5XCIpO1xyXG5cdGZvciAoY29uc3QgdGFibGUgb2YgdGFibGVzKSB7XHJcblx0XHRjb25zdCB0b3JyZW50TGluayA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0cjpudGgtb2YtdHlwZSgzKT50ZFwiKTtcclxuXHRcdGlmICh0b3JyZW50TGluayA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IHRleHQgPSB0b3JyZW50TGluay50ZXh0Q29udGVudDtcclxuXHRcdGNvbnN0IHdoaXRlc3BhY2UgPSAvXlxccyovLmV4ZWModGV4dClbMF07XHJcblx0XHRjb25zdCB0b3JyZW50RmlsZU5hbWUgPSB0ZXh0LnRyaW0oKS5yZXBsYWNlKC9cXC5bXlxcLl0qJC8sIFwiXCIpO1xyXG5cclxuXHRcdGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHJcblx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJjb2xzcGFuXCIsIFwiNVwiKTtcclxuXHJcblx0XHRpZiAod2hpdGVzcGFjZS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGNlbGwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod2hpdGVzcGFjZSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRcdGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgYCR7dG9ycmVudEZpbGVOYW1lfS5pbmZvLmpzb25gKTtcclxuXHRcdGxpbmsuaHJlZiA9IHVybDtcclxuXHRcdGxpbmsudGV4dENvbnRlbnQgPSBcIk1ldGFkYXRhIEpTT05cIjtcclxuXHRcdGNlbGwuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG5cdFx0cm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG5cdFx0dGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cclxuXHRzd2l0Y2ggKGN1cnJlbnRQYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0c2V0dXBHYWxsZXJ5UGFnZSgpO1xyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwidG9ycmVudEluZm9cIjpcclxuXHRcdFx0c2V0dXBUb3JyZW50UGFnZSgpO1xyXG5cdFx0YnJlYWs7XHJcblx0fVxyXG59XHJcblxyXG5cclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXJzKHVybCkge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGNvbnN0IG1hdGNoID0gL14oW14jXFw/XSopKFxcP1teI10qKT8oI1tcXHdcXFddKik/JC8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsyXSAmJiBtYXRjaFsyXS5sZW5ndGggPiAxKSB7XHJcblx0XHRjb25zdCBwYXR0ZXJuID0gLyhbXj1dKikoPzo9KFtcXHdcXFddKikpPy87XHJcblx0XHRmb3IgKGNvbnN0IHBhcnQgb2YgbWF0Y2hbMl0uc3Vic3RyKDEpLnNwbGl0KFwiJlwiKSkge1xyXG5cdFx0XHRpZiAocGFydC5sZW5ndGggPT09IDApIHsgY29udGludWU7IH1cclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybi5leGVjKHBhcnQpO1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IG1hdGNoMlsyXTtcclxuXHRcdFx0cmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChtYXRjaDJbMV0pXSA9ICh2YWx1ZSAhPT0gdW5kZWZpbmVkID8gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSA6IG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVRdWVyeVBhcmFtZXRlcih1cmwsIHBhcmFtZXRlck5hbWUpIHtcclxuXHRyZXR1cm4gdXJsLnJlcGxhY2UoXHJcblx0XHRuZXcgUmVnRXhwKGAoWyZcXFxcP10pJHtwYXJhbWV0ZXJOYW1lfSg/Oig/Oj1bXiZdKik/KCZ8JCkpYCksXHJcblx0XHQobTAsIG0xLCBtMikgPT4gKG0xID09PSBcIj9cIiAmJiBtMiA/IFwiP1wiIDogbTIpKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldFVybFBhcmFtZXRlcnMsXHJcblx0cmVtb3ZlUXVlcnlQYXJhbWV0ZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgY29tbWFuZHMgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29tbWFuZChjb21tYW5kTmFtZSwgY2FsbGJhY2spIHtcclxuXHRpZiAoY29tbWFuZHMgPT09IG51bGwpIHtcclxuXHRcdGNvbW1hbmRzID0ge307XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25XaW5kb3dNZXNzYWdlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRjb21tYW5kc1tjb21tYW5kTmFtZV0gPSBjYWxsYmFjaztcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdCh0YXJnZXRXaW5kb3csIGNvbW1hbmROYW1lLCBkYXRhKSB7XHJcblx0dGFyZ2V0V2luZG93LnBvc3RNZXNzYWdlKHtcclxuXHRcdHhEYXRhOiB7IGNvbW1hbmQ6IGNvbW1hbmROYW1lLCBkYXRhOiBkYXRhIH1cclxuXHR9LCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25XaW5kb3dNZXNzYWdlKGUpIHtcclxuXHRpZiAoZS5vcmlnaW4gIT09IHdpbmRvdy5vcmlnaW4pIHsgcmV0dXJuOyB9XHJcblxyXG5cdGxldCBkYXRhID0gZS5kYXRhO1xyXG5cdGlmIChkYXRhID09PSBudWxsIHx8IHR5cGVvZihkYXRhKSAhPT0gXCJvYmplY3RcIikgeyByZXR1cm47IH1cclxuXHJcblx0ZGF0YSA9IGRhdGEueERhdGE7XHJcblx0aWYgKGRhdGEgPT09IG51bGwgfHwgdHlwZW9mKGRhdGEpICE9PSBcIm9iamVjdFwiKSB7IHJldHVybjsgfVxyXG5cdGlmICh0eXBlb2YoZGF0YS5jb21tYW5kKSAhPT0gXCJzdHJpbmdcIikgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgY2FsbGJhY2sgPSBjb21tYW5kc1tkYXRhLmNvbW1hbmRdO1xyXG5cdGlmICh0eXBlb2YoY2FsbGJhY2spICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNhbGxiYWNrKGUsIGRhdGEuZGF0YSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRyZWdpc3RlckNvbW1hbmQsXHJcblx0cG9zdFxyXG59O1xyXG4iXX0=
