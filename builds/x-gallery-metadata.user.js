// ==UserScript==
// @name        x/gallery-metadata
// @version     1.2.1
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
	if (node === null) { return null; }

	let url = getCssUrl(node.style.backgroundImage);
	if (url !== null) { return url; }

	const img = node.querySelector("img[src]");
	return (img !== null ? img.getAttribute("src") : null);
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
	if (nodes.length === 0) { return null; }

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
			translated = (trNode !== null && trNode.textContent.trim().toLowerCase() === "tr");
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

},{"./types":4}],6:[function(require,module,exports){
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

},{"../style":13,"./style":8,"./style/gallery-right-sidebar.css":9}],7:[function(require,module,exports){
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
module.exports = ".x-gallery-links-right-sidebar-container{margin-top:-25px;padding-bottom:0;display:flex;flex-direction:column}.x-gallery-links-right-sidebar-entry{margin-top:25px}div#gright.x-gallery-links-right-sidebar-contains-container{overflow-x:hidden;overflow-y:auto}";
},{}],10:[function(require,module,exports){
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
	const galleryRightSidebar = require("../api/gallery-right-sidebar");
	const link = galleryRightSidebar.createLink("Metadata JSON", 0).link;
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
	/* jshint -W040 */
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
	/* jshint +W040 */
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

},{"../api/gallery-identifier":1,"../api/gallery-info/common-json":2,"../api/gallery-info/get-from-html":3,"../api/gallery-right-sidebar":6,"../api/page-type":7,"../query-string":11,"../ready":12,"../window-message":14}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"./api/style":8}],14:[function(require,module,exports){
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

},{}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2NvbW1vbi1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbC5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3R5cGVzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHMuanMiLCJzcmMvYXBpL2dhbGxlcnktcmlnaHQtc2lkZWJhci5qcyIsInNyYy9hcGkvcGFnZS10eXBlLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvZ2FsbGVyeS1yaWdodC1zaWRlYmFyLmNzcyIsInNyYy9nYWxsZXJ5LW1ldGFkYXRhL21haW4uanMiLCJzcmMvcXVlcnktc3RyaW5nLmpzIiwic3JjL3JlYWR5LmpzIiwic3JjL3N0eWxlLmpzIiwic3JjL3dpbmRvdy1tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5SWRlbnRpZmllciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIHRva2VuKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRva2VuID0gdG9rZW47XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlRnJvbVVybCh1cmwpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gL14uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT8kLy5leGVjKHVybCk7XHJcblx0XHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBwYXRoID0gbWF0Y2hbMV0ucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgXCJcIikucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xyXG5cdFx0aWYgKHBhdGhbMF0gIT09IFwiZ1wiIHx8IHBhdGgubGVuZ3RoIDwgMykgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IGlkID0gcGFyc2VJbnQocGF0aFsxXSwgMTApO1xyXG5cdFx0cmV0dXJuIChOdW1iZXIuaXNOYU4oaWQpID8gbnVsbCA6IG5ldyBHYWxsZXJ5SWRlbnRpZmllcihpZCwgcGF0aFsyXSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgR2FsbGVyeUlkZW50aWZpZXIgPSByZXF1aXJlKFwiLi4vZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvU3RyaW5nT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRyZXR1cm4gdHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b051bWJlck9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaWRlbnRpZmllciwgZGVmYXVsdFZhbHVlKSB7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwgfHwgdHlwZW9mKGlkZW50aWZpZXIpICE9PSBcIm9iamVjdFwiKSB7XHJcblx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdpZDogaWRlbnRpZmllci5pZCxcclxuXHRcdHRva2VuOiBpZGVudGlmaWVyLnRva2VuXHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihuZXdlclZlcnNpb25zKSB7XHJcblx0Y29uc3QgcmVzdWx0ID0gW107XHJcblx0aWYgKEFycmF5LmlzQXJyYXkobmV3ZXJWZXJzaW9ucykpIHtcclxuXHRcdGZvciAoY29uc3QgbmV3ZXJWZXJzaW9uIG9mIG5ld2VyVmVyc2lvbnMpIHtcclxuXHRcdFx0cmVzdWx0LnB1c2goe1xyXG5cdFx0XHRcdGdhbGxlcnk6IChcclxuXHRcdFx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ld2VyVmVyc2lvbi5pZGVudGlmaWVyLCBudWxsKSB8fFxyXG5cdFx0XHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24obmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLCBudWxsKSksXHJcblx0XHRcdFx0bmFtZTogdG9TdHJpbmdPckRlZmF1bHQobmV3ZXJWZXJzaW9uLm5hbWUpLFxyXG5cdFx0XHRcdGRhdGVfdXBsb2FkZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KG5ld2VyVmVyc2lvbi5kYXRlVXBsb2FkZWQpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YWdzVG9Db21tb25Kc29uKHRhZ3MpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRpZiAodGFncyAhPT0gbnVsbCAmJiB0eXBlb2YodGFncykgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodGFncykpIHtcclxuXHRcdGZvciAoY29uc3QgbmFtZXNwYWNlIGluIHRhZ3MpIHtcclxuXHRcdFx0aWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFncywgbmFtZXNwYWNlKSkgeyBjb250aW51ZTsgfVxyXG5cdFx0XHRjb25zdCB0YWdMaXN0ID0gdGFnc1tuYW1lc3BhY2VdO1xyXG5cdFx0XHRyZXN1bHRbbmFtZXNwYWNlXSA9IFsuLi50YWdMaXN0XTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25GYXZvcml0ZUNhdGVnb3J5KGluZm8pIHtcclxuXHRpZiAoaW5mby5mYXZvcml0ZUNhdGVnb3J5ID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblx0cmV0dXJuIHtcclxuXHRcdGlkOiB0b051bWJlck9yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkuaW5kZXgsIDApLFxyXG5cdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS50aXRsZSwgXCJcIilcclxuXHR9O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25GdWxsR2FsbGVyeUluZm9Kc29uKGluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2FsbGVyeTogKFxyXG5cdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpbmZvLmlkZW50aWZpZXIsIG51bGwpIHx8XHJcblx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ldyBHYWxsZXJ5SWRlbnRpZmllcigwLCBcIlwiKSwgbnVsbCkpLFxyXG5cdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGUsIFwiXCIpLFxyXG5cdFx0dGl0bGVfb3JpZ2luYWw6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGVPcmlnaW5hbCwgXCJcIiksXHJcblx0XHRkYXRlX3VwbG9hZGVkOiB0b051bWJlck9yRGVmYXVsdChpbmZvLmRhdGVVcGxvYWRlZCwgMCksXHJcblx0XHRjYXRlZ29yeTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5jYXRlZ29yeSwgXCJcIiksXHJcblx0XHR1cGxvYWRlcjogdG9TdHJpbmdPckRlZmF1bHQoaW5mby51cGxvYWRlciwgXCJcIiksXHJcblx0XHRyYXRpbmc6IHtcclxuXHRcdFx0YXZlcmFnZTogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5yYXRpbmdBdmVyYWdlLCAwKSxcclxuXHRcdFx0Y291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8ucmF0aW5nQ291bnQsIDApLFxyXG5cdFx0fSxcclxuXHRcdGZhdm9yaXRlczoge1xyXG5cdFx0XHRjYXRlZ29yeTogKGluZm8uZmF2b3JpdGVDYXRlZ29yeSAhPT0gbnVsbCA/IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS5pbmRleCwgLTEpIDogLTEpLFxyXG5cdFx0XHRjYXRlZ29yeV90aXRsZTogKGluZm8uZmF2b3JpdGVDYXRlZ29yeSAhPT0gbnVsbCA/IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDYXRlZ29yeS50aXRsZSwgXCJcIikgOiBcIlwiKSxcclxuXHRcdFx0Y291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmF2b3JpdGVDb3VudCwgMClcclxuXHRcdH0sXHJcblx0XHRwYXJlbnQ6IGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKGluZm8ucGFyZW50LCBudWxsKSxcclxuXHRcdG5ld2VyX3ZlcnNpb25zOiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKGluZm8ubmV3ZXJWZXJzaW9ucyksXHJcblx0XHR0aHVtYm5haWw6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8ubWFpblRodW1ibmFpbFVybCwgXCJcIiksXHJcblx0XHR0aHVtYm5haWxfc2l6ZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby50aHVtYm5haWxTaXplLCBcIlwiKSxcclxuXHRcdHRodW1ibmFpbF9yb3dzOiB0b051bWJlck9yRGVmYXVsdChpbmZvLnRodW1ibmFpbFJvd3MsIDApLFxyXG5cdFx0aW1hZ2VfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZmlsZUNvdW50LCAwKSxcclxuXHRcdGltYWdlc19yZXNpemVkOiBmYWxzZSxcclxuXHRcdHRvdGFsX2ZpbGVfc2l6ZV9hcHByb3g6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplLCAwKSxcclxuXHRcdHZpc2libGU6IChpbmZvLnZpc2libGUgPT09IHRydWUpLFxyXG5cdFx0dmlzaWJsZV9yZWFzb246IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udmlzaWJsZVJlYXNvbiwgXCJcIiksXHJcblx0XHRsYW5ndWFnZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5sYW5ndWFnZSwgXCJcIiksXHJcblx0XHR0cmFuc2xhdGVkOiAoaW5mby50cmFuc2xhdGVkID09PSB0cnVlKSxcclxuXHRcdHRhZ3M6IHRhZ3NUb0NvbW1vbkpzb24oaW5mby50YWdzKSxcclxuXHRcdC8vIE5ld1xyXG5cdFx0dGFnc19oYXZlX25hbWVzcGFjZTogKGluZm8udGFnc0hhdmVOYW1lc3BhY2UgPT09IHRydWUpLFxyXG5cdFx0dG9ycmVudF9jb3VudDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby50b3JyZW50Q291bnQsIDApLFxyXG5cdFx0YXJjaGl2ZXJfa2V5OiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmFyY2hpdmVyS2V5LCBudWxsKSxcclxuXHRcdHNvdXJjZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5zb3VyY2UsIG51bGwpLFxyXG5cdFx0c291cmNlX3NpdGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uc291cmNlU2l0ZSwgbnVsbCksXHJcblx0XHRkYXRlX2dlbmVyYXRlZDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5kYXRlR2VuZXJhdGVkLCAwKVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uR2FsbGVyeUluZm9Kc29uKGluZm8pIHtcclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUodG9OdW1iZXJPckRlZmF1bHQoaW5mby5kYXRlVXBsb2FkZWQsIDApKTtcclxuXHRyZXR1cm4ge1xyXG5cdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGUsIFwiXCIpLFxyXG5cdFx0dGl0bGVfb3JpZ2luYWw6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGl0bGVPcmlnaW5hbCwgXCJcIiksXHJcblxyXG5cdFx0Y2F0ZWdvcnk6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uY2F0ZWdvcnksIFwiXCIpLFxyXG5cdFx0dGFnczogdGFnc1RvQ29tbW9uSnNvbihpbmZvLnRhZ3MpLFxyXG5cclxuXHRcdGxhbmd1YWdlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmxhbmd1YWdlLCBcIlwiKSxcclxuXHRcdHRyYW5zbGF0ZWQ6ICEhaW5mby50cmFuc2xhdGVkLFxyXG5cclxuXHRcdGZhdm9yaXRlX2NhdGVnb3J5OiB0b0NvbW1vbkZhdm9yaXRlQ2F0ZWdvcnkoaW5mbyksXHJcblxyXG5cdFx0dXBsb2FkX2RhdGU6IFtcclxuXHRcdFx0ZGF0ZS5nZXRVVENGdWxsWWVhcigpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ01vbnRoKCkgKyAxLFxyXG5cdFx0XHRkYXRlLmdldFVUQ0RhdGUoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENIb3VycygpLFxyXG5cdFx0XHRkYXRlLmdldFVUQ01pbnV0ZXMoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENTZWNvbmRzKClcclxuXHRcdF0sXHJcblxyXG5cdFx0c291cmNlOiB7XHJcblx0XHRcdHNpdGU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uc291cmNlU2l0ZSwgXCJcIiksXHJcblx0XHRcdGdpZDogKGluZm8uaWRlbnRpZmllciAhPT0gbnVsbCA/IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uaWRlbnRpZmllci5pZCwgMCkgOiAwKSxcclxuXHRcdFx0dG9rZW46IChpbmZvLmlkZW50aWZpZXIgIT09IG51bGwgPyB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmlkZW50aWZpZXIudG9rZW4sIDApIDogMCksXHJcblx0XHRcdHBhcmVudF9nYWxsZXJ5OiBnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpbmZvLnBhcmVudCwgbnVsbCksXHJcblx0XHRcdG5ld2VyX3ZlcnNpb25zOiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKGluZm8ubmV3ZXJWZXJzaW9ucylcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkpzb24oaW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHRnYWxsZXJ5X2luZm86IHRvQ29tbW9uR2FsbGVyeUluZm9Kc29uKGluZm8pLFxyXG5cdFx0Z2FsbGVyeV9pbmZvX2Z1bGw6IHRvQ29tbW9uRnVsbEdhbGxlcnlJbmZvSnNvbihpbmZvKVxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHR0b0NvbW1vbkpzb25cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENzc1VybCh1cmxTdHJpbmcpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gL3VybFxccypcXChcXHMqKFsnXCJdKT8vO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybFN0cmluZyk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHF1b3RlID0gbWF0Y2hbMV0gfHwgXCJcIjtcclxuXHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIC0gcXVvdGUubGVuZ3RoKTtcclxuXHJcblx0Y29uc3QgcGF0dGVybjIgPSBuZXcgUmVnRXhwKGAoJHtxdW90ZX0pXFxcXHMqXFxcXClcXFxccyokYCk7XHJcblx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybjIuZXhlYyh1cmxTdHJpbmcpO1xyXG5cdGlmIChtYXRjaDIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdXJsID0gdXJsU3RyaW5nLnN1YnN0cigwLCBtYXRjaDIuaW5kZXggKyBtYXRjaDJbMV0ubGVuZ3RoKTtcclxuXHJcblx0bGV0IHVybDIgPSB1cmw7XHJcblx0aWYgKCFxdW90ZSkge1xyXG5cdFx0dXJsMiA9IHVybC5yZXBsYWNlKC9cIi9nLCBcIlxcXFxcXFwiXCIpO1xyXG5cdFx0dXJsMiA9IGBcIiR7dXJsMn1cImA7XHJcblx0fSBlbHNlIGlmIChxdW90ZSA9PT0gXCInXCIpIHtcclxuXHRcdHVybDIgPSB1cmwuc3Vic3RyKDEsIHVybC5sZW5ndGggLSAyKTtcclxuXHRcdHVybDIgPSB1cmwyLnJlcGxhY2UoL1xcXFwnL2csIFwiJ1wiKTtcclxuXHRcdHVybDIgPSBgXCIke3VybDJ9XCJgO1xyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdHJldHVybiBKU09OLnBhcnNlKHVybDIpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdHJldHVybiB1cmw7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXAodGV4dCkge1xyXG5cdGNvbnN0IG1hdGNoID0gLyhbMC05XSspLShbMC05XSspLShbMC05XSspXFxzKyhbMC05XSspOihbMC05XSspLy5leGVjKHRleHQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRyZXR1cm4gRGF0ZS5VVEMoXHJcblx0XHRwYXJzZUludChtYXRjaFsxXSwgMTApLCAvLyB5ZWFyXHJcblx0XHRwYXJzZUludChtYXRjaFsyXSwgMTApIC0gMSwgLy8gbW9udGhcclxuXHRcdHBhcnNlSW50KG1hdGNoWzNdLCAxMCksIC8vIGRheVxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbNF0sIDEwKSwgLy8gaG91cnNcclxuXHRcdHBhcnNlSW50KG1hdGNoWzVdLCAxMCksIC8vIG1pbnV0ZXNcclxuXHRcdDAsIC8vIHNlY29uZHNcclxuXHRcdDApOyAvLyBtaWxsaXNlY29uZHNcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRpdGxlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2duXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IG5vZGUudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpdGxlT3JpZ2luYWwoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2pcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gbm9kZS50ZXh0Q29udGVudC50cmltKCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWFpblRodW1ibmFpbFVybChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZDE+ZGl2XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGxldCB1cmwgPSBnZXRDc3NVcmwobm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpO1xyXG5cdGlmICh1cmwgIT09IG51bGwpIHsgcmV0dXJuIHVybDsgfVxyXG5cclxuXHRjb25zdCBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRyZXR1cm4gKGltZyAhPT0gbnVsbCA/IGltZy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2RjPmRpdltvbmNsaWNrXVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1snXCJdLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/WydcIl0vO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwib25jbGlja1wiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0gOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXBsb2FkZXIoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2RuPmFcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyAobWF0Y2hbMV0uc3BsaXQoXCIvXCIpWzFdIHx8IFwiXCIpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhdGluZ0NvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3JhdGluZ19jb3VudFwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB2YWx1ZSA9IHBhcnNlSW50KG5vZGUudGV4dENvbnRlbnQudHJpbSgpLCAxMCk7XHJcblx0cmV0dXJuIChOdW1iZXIuaXNOYU4odmFsdWUpID8gbnVsbCA6IHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmF0aW5nQXZlcmFnZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfbGFiZWxcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9hdmVyYWdlOlxccyooWzAtOVxcLl0rKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xyXG5cdHJldHVybiAoTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhdm9yaXRlQ291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZmF2Y291bnRcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXHMqKFswLTldK3xvbmNlKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBtYXRjaDEgPSBtYXRjaFsxXTtcclxuXHRyZXR1cm4gKG1hdGNoMS50b0xvd2VyQ2FzZSgpID09PSBcIm9uY2VcIiA/IDEgOiBwYXJzZUludChtYXRjaDEsIDEwKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhdm9yaXRlQ2F0ZWdvcnkoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZmF2PmRpdi5pXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHRpdGxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSB8fCBcIlwiO1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvYmFja2dyb3VuZC1wb3NpdGlvblxccyo6XFxzKlxcZCsoPzpweCk/XFxzKygtP1xcZCspKD86cHgpLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpIHx8IFwiXCIpO1xyXG5cdGNvbnN0IGluZGV4ID0gKG1hdGNoICE9PSBudWxsKSA/XHJcblx0XHRNYXRoLmZsb29yKChNYXRoLmFicyhwYXJzZUludChtYXRjaFsxXSwgMTApKSAtIDIpIC8gMTkpIDpcclxuXHRcdC0xO1xyXG5cclxuXHRyZXR1cm4geyBpbmRleCwgdGl0bGUgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGh1bWJuYWlsU2l6ZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RvND4ubm9zZWxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA8IDIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRyZXR1cm4gKG5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucyhcInRoc1wiKSA/IFwibm9ybWFsXCIgOiBcImxhcmdlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaHVtYm5haWxSb3dzKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZG8yPi5ub3NlbFwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxzKihbMC05XSspLztcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInRoc1wiKSkge1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYWdzKGh0bWwpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gLyguKyk6LztcclxuXHRjb25zdCBncm91cHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGFnbGlzdCB0clwiKTtcclxuXHRjb25zdCB0YWdzID0ge307XHJcblxyXG5cdGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSB7XHJcblx0XHRjb25zdCB0ZHMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XHJcblx0XHRpZiAodGRzLmxlbmd0aCA9PT0gMCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHRkc1swXS50ZXh0Q29udGVudCk7XHJcblx0XHRjb25zdCBuYW1lc3BhY2UgPSAobWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXS50cmltKCkgOiBcIlwiKTtcclxuXHJcblx0XHRsZXQgbmFtZXNwYWNlVGFncztcclxuXHRcdGlmICh0YWdzLmhhc093blByb3BlcnR5KG5hbWVzcGFjZSkpIHtcclxuXHRcdFx0bmFtZXNwYWNlVGFncyA9IHRhZ3NbbmFtZXNwYWNlXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MgPSBbXTtcclxuXHRcdFx0dGFnc1tuYW1lc3BhY2VdID0gbmFtZXNwYWNlVGFncztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0YWdEaXZzID0gdGRzW3Rkcy5sZW5ndGggLSAxXS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xyXG5cdFx0Zm9yIChjb25zdCBkaXYgb2YgdGFnRGl2cykge1xyXG5cdFx0XHRjb25zdCBsaW5rID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xyXG5cdFx0XHRpZiAobGluayA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdFx0Y29uc3QgdGFnID0gbGluay50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MucHVzaCh0YWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRhZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERldGFpbHNOb2RlcyhodG1sKSB7XHJcblx0cmV0dXJuIGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZGQgdHJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGVVcGxvYWRlZChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gZ2V0VGltZXN0YW1wKG5vZGUudGV4dENvbnRlbnQpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVJbmZvKGRldGFpbHNOb2Rlcykge1xyXG5cdGxldCB2aXNpYmxlID0gdHJ1ZTtcclxuXHRsZXQgdmlzaWJsZVJlYXNvbiA9IG51bGw7XHJcblxyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoID4gMikge1xyXG5cdFx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1syXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0XHRpZiAobm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBwYXR0ZXJuID0gL25vXFxzK1xcKCguKz8pXFwpL2k7XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0XHR2aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0dmlzaWJsZVJlYXNvbiA9IG1hdGNoWzFdLnRyaW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdmlzaWJsZSwgdmlzaWJsZVJlYXNvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYW5ndWFnZUluZm8oZGV0YWlsc05vZGVzKSB7XHJcblx0bGV0IGxhbmd1YWdlID0gbnVsbDtcclxuXHRsZXQgdHJhbnNsYXRlZCA9IGZhbHNlO1xyXG5cclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA+IDMpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbM10ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgdGV4dE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcblx0XHRcdGlmICh0ZXh0Tm9kZSAhPT0gbnVsbCAmJiB0ZXh0Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcclxuXHRcdFx0XHRsYW5ndWFnZSA9IHRleHROb2RlLm5vZGVWYWx1ZS50cmltKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHRyTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5oYWxwXCIpO1xyXG5cdFx0XHR0cmFuc2xhdGVkID0gKHRyTm9kZSAhPT0gbnVsbCAmJiB0ck5vZGUudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IFwidHJcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyBsYW5ndWFnZSwgdHJhbnNsYXRlZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gNCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzRdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gLyhbMC05XFwuXSspXFxzKihcXHcrKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyB1dGlscy5nZXRCeXRlc1NpemVGcm9tTGFiZWwobWF0Y2hbMV0sIG1hdGNoWzJdKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaWxlQ291bnQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gNSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzVdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gLyhbMC05LF0rKVxccypwYWdlcy9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyBwYXJzZUludChtYXRjaFsxXS5yZXBsYWNlKC8sL2csIFwiXCIpLCAxMCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50KGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDEpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1sxXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDI+YVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChpbmZvICE9PSBudWxsID8gaW5mby5pZGVudGlmaWVyIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5ld2VyVmVyc2lvbnMoaHRtbCkge1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnbmQ+YVwiKTtcclxuXHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0XHRpZiAoaW5mbyA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IGdhbGxlcnlJbmZvID0ge1xyXG5cdFx0XHRpZGVudGlmaWVyOiBpbmZvLmlkZW50aWZpZXIsXHJcblx0XHRcdG5hbWU6IG5vZGUudGV4dENvbnRlbnQudHJpbSgpLFxyXG5cdFx0XHRkYXRlVXBsb2FkZWQ6IG51bGxcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG5vZGUubmV4dFNpYmxpbmcgIT09IG51bGwpIHtcclxuXHRcdFx0Z2FsbGVyeUluZm8uZGF0ZVVwbG9hZGVkID0gZ2V0VGltZXN0YW1wKG5vZGUubmV4dFNpYmxpbmcudGV4dENvbnRlbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlc3VsdHMucHVzaChnYWxsZXJ5SW5mbyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9ycmVudENvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZDUgLmcyPmFcIik7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXGJ0b3JyZW50XFxzK2Rvd25sb2FkXFxzKlxcKFxccyooXFxkKylcXHMqXFwpL2k7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcmNoaXZlcktleShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2Q1IC5nMj5hXCIpO1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxiYXJjaGl2ZVxccytkb3dubG9hZFxcYi9pO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcGF0dGVybjIgPSAvJm9yPShbXidcIl0qKVsnXCJdLztcclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybjIuZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcIm9uY2xpY2tcIikgfHwgXCJcIik7XHJcblx0XHRcdHJldHVybiAobWF0Y2gyICE9PSBudWxsID8gbWF0Y2gyWzFdIDogbnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21IdG1sKGluZm8sIGh0bWwpIHtcclxuXHQvLyBHZW5lcmFsXHJcblx0aW5mby50aXRsZSA9IGdldFRpdGxlKGh0bWwpO1xyXG5cdGluZm8udGl0bGVPcmlnaW5hbCA9IGdldFRpdGxlT3JpZ2luYWwoaHRtbCk7XHJcblx0aW5mby5tYWluVGh1bWJuYWlsVXJsID0gZ2V0TWFpblRodW1ibmFpbFVybChodG1sKTtcclxuXHRpbmZvLmNhdGVnb3J5ID0gZ2V0Q2F0ZWdvcnkoaHRtbCk7XHJcblx0aW5mby51cGxvYWRlciA9IGdldFVwbG9hZGVyKGh0bWwpO1xyXG5cclxuXHRpbmZvLnJhdGluZ0NvdW50ID0gZ2V0UmF0aW5nQ291bnQoaHRtbCk7XHJcblx0aW5mby5yYXRpbmdBdmVyYWdlID0gZ2V0UmF0aW5nQXZlcmFnZShodG1sKTtcclxuXHJcblx0aW5mby5mYXZvcml0ZUNvdW50ID0gZ2V0RmF2b3JpdGVDb3VudChodG1sKTtcclxuXHRpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgPSBnZXRGYXZvcml0ZUNhdGVnb3J5KGh0bWwpO1xyXG5cclxuXHRpbmZvLnRodW1ibmFpbFNpemUgPSBnZXRUaHVtYm5haWxTaXplKGh0bWwpO1xyXG5cdGluZm8udGh1bWJuYWlsUm93cyA9IGdldFRodW1ibmFpbFJvd3MoaHRtbCk7XHJcblxyXG5cdGluZm8ubmV3ZXJWZXJzaW9ucyA9IGdldE5ld2VyVmVyc2lvbnMoaHRtbCk7XHJcblxyXG5cdGluZm8udG9ycmVudENvdW50ID0gZ2V0VG9ycmVudENvdW50KGh0bWwpO1xyXG5cdGluZm8uYXJjaGl2ZXJLZXkgPSBnZXRBcmNoaXZlcktleShodG1sKTtcclxuXHJcblx0Ly8gRGV0YWlsc1xyXG5cdGNvbnN0IGRldGFpbHNOb2RlcyA9IGdldERldGFpbHNOb2RlcyhodG1sKTtcclxuXHJcblx0aW5mby5kYXRlVXBsb2FkZWQgPSBnZXREYXRlVXBsb2FkZWQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0aW5mby5wYXJlbnQgPSBnZXRQYXJlbnQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0Y29uc3QgdmlzaWJsZUluZm8gPSBnZXRWaXNpYmxlSW5mbyhkZXRhaWxzTm9kZXMpO1xyXG5cdGluZm8udmlzaWJsZSA9IHZpc2libGVJbmZvLnZpc2libGU7XHJcblx0aW5mby52aXNpYmxlUmVhc29uID0gdmlzaWJsZUluZm8udmlzaWJsZVJlYXNvbjtcclxuXHJcblx0Y29uc3QgbGFuZ3VhZ2VJbmZvID0gZ2V0TGFuZ3VhZ2VJbmZvKGRldGFpbHNOb2Rlcyk7XHJcblx0aW5mby5sYW5ndWFnZSA9IGxhbmd1YWdlSW5mby5sYW5ndWFnZTtcclxuXHRpbmZvLnRyYW5zbGF0ZWQgPSBsYW5ndWFnZUluZm8udHJhbnNsYXRlZDtcclxuXHJcblx0aW5mby5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBnZXRBcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0aW5mby5maWxlQ291bnQgPSBnZXRGaWxlQ291bnQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0Ly8gVGFnc1xyXG5cdGluZm8udGFncyA9IGdldFRhZ3MoaHRtbCk7XHJcblx0aW5mby50YWdzSGF2ZU5hbWVzcGFjZSA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21IdG1sKGh0bWwsIHVybCkge1xyXG5cdGNvbnN0IGxpbmsgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIucHR0IHRkLnB0ZHM+YVtocmVmXSwucHR0IHRkLnB0ZGQ+YVtocmVmXVwiKTtcclxuXHRpZiAobGluayA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpZFBhZ2UgPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRpZiAoaWRQYWdlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSBuZXcgdHlwZXMuR2FsbGVyeUluZm8oKTtcclxuXHRpbmZvLmlkZW50aWZpZXIgPSBpZFBhZ2UuaWRlbnRpZmllcjtcclxuXHRpbmZvLmN1cnJlbnRQYWdlID0gaWRQYWdlLnBhZ2U7XHJcblx0aW5mby5zb3VyY2UgPSBcImh0bWxcIjtcclxuXHRwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUh0bWwoaW5mbywgaHRtbCk7XHJcblx0aW5mby5zb3VyY2VTaXRlID0gdXRpbHMuZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKTtcclxuXHRpbmZvLmRhdGVHZW5lcmF0ZWQgPSBEYXRlLm5vdygpO1xyXG5cdHJldHVybiBpbmZvO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXRGcm9tSHRtbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5SWRlbnRpZmllciA9IHJlcXVpcmUoXCIuLi9nYWxsZXJ5LWlkZW50aWZpZXJcIikuR2FsbGVyeUlkZW50aWZpZXI7XHJcblxyXG5cclxuY2xhc3MgR2FsbGVyeUluZm8ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pZGVudGlmaWVyID0gbnVsbDtcclxuXHRcdHRoaXMudGl0bGUgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZU9yaWdpbmFsID0gbnVsbDtcclxuXHRcdHRoaXMuZGF0ZVVwbG9hZGVkID0gbnVsbDtcclxuXHRcdHRoaXMuY2F0ZWdvcnkgPSBudWxsO1xyXG5cdFx0dGhpcy51cGxvYWRlciA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5yYXRpbmdDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkgPSBudWxsO1xyXG5cdFx0dGhpcy5mYXZvcml0ZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMubWFpblRodW1ibmFpbFVybCA9IG51bGw7XHJcblx0XHR0aGlzLnRodW1ibmFpbFNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy50aHVtYm5haWxSb3dzID0gbnVsbDtcclxuXHRcdHRoaXMuZmlsZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblx0XHR0aGlzLnZpc2libGVSZWFzb24gPSBudWxsO1xyXG5cdFx0dGhpcy5sYW5ndWFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcmNoaXZlcktleSA9IG51bGw7XHJcblx0XHR0aGlzLnRvcnJlbnRDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3MgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzSGF2ZU5hbWVzcGFjZSA9IG51bGw7XHJcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHRcdHRoaXMubmV3ZXJWZXJzaW9ucyA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZSA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZVNpdGUgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlR2VuZXJhdGVkID0gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRHYWxsZXJ5SWRlbnRpZmllcixcclxuXHRHYWxsZXJ5SW5mb1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcblxyXG5jb25zdCBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMgPSBbIFwiYlwiLCBcImtiXCIsIFwibWJcIiwgXCJnYlwiIF07XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVBhZ2VGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IG1hdGNoID0gL1xcPyg/Oih8W1xcd1xcV10qPyYpcD0oW1xcK1xcLV0/XFxkKykpPy8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHRpZiAoIU51bWJlci5pc05hTihwYWdlKSkgeyByZXR1cm4gcGFnZTsgfVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBpZGVudGlmaWVyID0gdHlwZXMuR2FsbGVyeUlkZW50aWZpZXIuY3JlYXRlRnJvbVVybCh1cmwpO1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhZ2UgPSBnZXRHYWxsZXJ5UGFnZUZyb21VcmwodXJsKTtcclxuXHRyZXR1cm4geyBpZGVudGlmaWVyLCBwYWdlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJ5dGVzU2l6ZUZyb21MYWJlbChudW1iZXIsIGxhYmVsKSB7XHJcblx0bGV0IGkgPSBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMuaW5kZXhPZihsYWJlbC50b0xvd2VyQ2FzZSgpKTtcclxuXHRpZiAoaSA8IDApIHsgaSA9IDA7IH1cclxuXHRyZXR1cm4gTWF0aC5mbG9vcihwYXJzZUZsb2F0KG51bWJlcikgKiBNYXRoLnBvdygxMDI0LCBpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNvdXJjZVNpdGVGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXig/Oig/OlthLXpdW2EtejAtOVxcK1xcLVxcLl0qOlxcLyp8XFwvezIsfSkoW15cXC9dKikpPyhcXC8/W1xcd1xcV10qKSQvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh1cmwpO1xyXG5cclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0pIHtcclxuXHRcdGNvbnN0IGhvc3QgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKGhvc3QuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDApIHsgcmV0dXJuIFwiZXhoZW50YWlcIjsgfVxyXG5cdFx0aWYgKGhvc3QuaW5kZXhPZihcImUtaGVudGFpXCIpID49IDApIHsgcmV0dXJuIFwiZS1oZW50YWlcIjsgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsLFxyXG5cdGdldEJ5dGVzU2l6ZUZyb21MYWJlbCxcclxuXHRnZXRTb3VyY2VTaXRlRnJvbVVybFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vc3R5bGVcIik7XHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlc2hlZXQoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyXCI7XHJcblx0aWYgKHN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS9nYWxsZXJ5LXJpZ2h0LXNpZGViYXIuY3NzXCIpO1xyXG5cdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdyb3VwQ29udGFpbmVyKHBhcmVudCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1jb250YWluZXJcIjtcclxuXHRsZXQgbm9kZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKGAuJHtpZH1gKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkge1xyXG5cdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRub2RlLmNsYXNzTmFtZSA9IGBnMiBnc3AgJHtpZH1gO1xyXG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xyXG5cclxuXHRcdGNvbnN0IHAgPSBwYXJlbnQucGFyZW50Tm9kZTtcclxuXHRcdGlmIChwICE9PSBudWxsKSB7XHJcblx0XHRcdHAuY2xhc3NMaXN0LmFkZChcIngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyLWNvbnRhaW5zLWNvbnRhaW5lclwiKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG5vZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmsobGFiZWwsIG9yZGVyKSB7XHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZDVcIik7XHJcblx0aWYgKHBhcmVudCA9PT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIHsgbGluazogbnVsbCwgbGlua0NvbnRhaW5lcjogbnVsbCB9O1xyXG5cdH1cclxuXHJcblx0Ly8gU3R5bGVcclxuXHRpbnNlcnRTdHlsZXNoZWV0KCk7XHJcblxyXG5cdC8vIENvbnRhaW5lclxyXG5cdGNvbnN0IGxpbmtHcm91cCA9IGdldEdyb3VwQ29udGFpbmVyKHBhcmVudCk7XHJcblx0Y29uc3QgbGlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGlua0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1saW5rcy1yaWdodC1zaWRlYmFyLWVudHJ5XCI7XHJcblx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTihvcmRlcikpIHtcclxuXHRcdGxpbmtDb250YWluZXIuc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRpbWcuc3JjID0gYXBpU3R5bGUuZ2V0QXJyb3dJY29uVXJsKCk7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xyXG5cclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiKSk7XHJcblxyXG5cdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRsaW5rLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcblx0bGlua0dyb3VwLmFwcGVuZENoaWxkKGxpbmtDb250YWluZXIpO1xyXG5cclxuXHRyZXR1cm4geyBsaW5rLCBsaW5rQ29udGFpbmVyIH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGlzRGFyaygpIHtcclxuXHRyZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvY3VtZW50RGFya0ZsYWcoKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnJvd0ljb25VcmwoKSB7XHJcblx0cmV0dXJuIChpc0RhcmsoKSA/IFwiaHR0cHM6Ly9leGhlbnRhaS5vcmcvaW1nL21yLmdpZlwiIDogXCJodHRwczovL2VoZ3Qub3JnL2cvbXIuZ2lmXCIpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNEYXJrLFxyXG5cdHNldERvY3VtZW50RGFya0ZsYWcsXHJcblx0Z2V0QXJyb3dJY29uVXJsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItY29udGFpbmVye21hcmdpbi10b3A6LTI1cHg7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS54LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1lbnRyeXttYXJnaW4tdG9wOjI1cHh9ZGl2I2dyaWdodC54LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1jb250YWlucy1jb250YWluZXJ7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHBhZ2VUeXBlID0gcmVxdWlyZShcIi4uL2FwaS9wYWdlLXR5cGVcIik7XHJcbmNvbnN0IHdpbmRvd01lc3NhZ2UgPSByZXF1aXJlKFwiLi4vd2luZG93LW1lc3NhZ2VcIik7XHJcbmNvbnN0IGdldEZyb21IdG1sID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbFwiKTtcclxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi4vcXVlcnktc3RyaW5nXCIpO1xyXG5jb25zdCBHYWxsZXJ5SWRlbnRpZmllciA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5jb25zdCB0b0NvbW1vbkpzb24gPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby9jb21tb24tanNvblwiKS50b0NvbW1vbkpzb247XHJcblxyXG5sZXQgZG93bmxvYWREYXRhVXJsID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXR1cEdhbGxlcnlQYWdlKCkge1xyXG5cdGNyZWF0ZUdhbGxlcnlQYWdlRG93bmxvYWRMaW5rKCk7XHJcblxyXG5cdHdpbmRvd01lc3NhZ2UucmVnaXN0ZXJDb21tYW5kKFwiZ2FsbGVyeUluZm9SZXF1ZXN0XCIsIChlKSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0gZ2V0RnJvbUh0bWwoZG9jdW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdGlmIChkYXRhID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cdFx0d2luZG93TWVzc2FnZS5wb3N0KGUuc291cmNlLCBcImdhbGxlcnlJbmZvUmVzcG9uc2VcIiwgdG9Db21tb25Kc29uKGRhdGEpKTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeVBhZ2VEb3dubG9hZExpbmsoKSB7XHJcblx0Y29uc3QgZ2FsbGVyeVJpZ2h0U2lkZWJhciA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1yaWdodC1zaWRlYmFyXCIpO1xyXG5cdGNvbnN0IGxpbmsgPSBnYWxsZXJ5UmlnaHRTaWRlYmFyLmNyZWF0ZUxpbmsoXCJNZXRhZGF0YSBKU09OXCIsIDApLmxpbms7XHJcblx0aWYgKGxpbmsgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJpbmZvLmpzb25cIik7XHJcblx0bGluay5ocmVmID0gXCIjXCI7XHJcblxyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uRG93bmxvYWRMaW5rQ2xpY2tlZCwgZmFsc2UpO1xyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImF1eGNsaWNrXCIsIG9uRG93bmxvYWRMaW5rQ2xpY2tlZCwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SW5mbygpIHtcclxuXHR0cnkge1xyXG5cdFx0cmV0dXJuIGdldEZyb21IdG1sKGRvY3VtZW50LCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRG93bmxvYWREYXRhVXJsKGluZm8pIHtcclxuXHRjb25zdCBpbmZvU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaW5mbywgbnVsbCwgXCIgIFwiKTtcclxuXHRjb25zdCBibG9iID0gbmV3IEJsb2IoWyBpbmZvU3RyaW5nIF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRG93bmxvYWRMaW5rQ2xpY2tlZChlKSB7XHJcblx0LyoganNoaW50IC1XMDQwICovXHJcblx0aWYgKGRvd25sb2FkRGF0YVVybCA9PT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgaW5mbyA9IGdldEdhbGxlcnlJbmZvKCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gbnVsbCkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBkb3dubG9hZCBkYXRhXCIpO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRkb3dubG9hZERhdGFVcmwgPSBjcmVhdGVEb3dubG9hZERhdGFVcmwodG9Db21tb25Kc29uKGluZm8pKTtcclxuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBkb3dubG9hZERhdGFVcmwpO1xyXG5cdH1cclxuXHQvKiBqc2hpbnQgK1cwNDAgKi9cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldHVwVG9ycmVudFBhZ2UoKSB7XHJcblx0aWYgKCF3aW5kb3cub3BlbmVyKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBpZGVudGlmaWVyID0gZ2V0R2FsbGVyeUlkZW50aWZpZXJGcm9tVG9ycmVudFBhZ2VVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHR3aW5kb3dNZXNzYWdlLnJlZ2lzdGVyQ29tbWFuZChcImdhbGxlcnlJbmZvUmVzcG9uc2VcIiwgKGUsIGluZm8pID0+IHtcclxuXHRcdGlmIChkb3dubG9hZERhdGFVcmwgIT09IG51bGwgfHwgIWlzVmFsaWRJbmZvKGluZm8sIGlkZW50aWZpZXIpKSB7IHJldHVybjsgfVxyXG5cdFx0ZG93bmxvYWREYXRhVXJsID0gY3JlYXRlRG93bmxvYWREYXRhVXJsKGluZm8pO1xyXG5cdFx0Y3JlYXRlVG9ycmVudFBhZ2VEb3dubG9hZExpbmtzKGRvd25sb2FkRGF0YVVybCk7XHJcblx0fSk7XHJcblx0d2luZG93TWVzc2FnZS5wb3N0KHdpbmRvdy5vcGVuZXIsIFwiZ2FsbGVyeUluZm9SZXF1ZXN0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SWRlbnRpZmllckZyb21Ub3JyZW50UGFnZVVybCh1cmwpIHtcclxuXHRjb25zdCBwYXJhbXMgPSBxdWVyeVN0cmluZy5nZXRVcmxQYXJhbWV0ZXJzKHVybCk7XHJcblx0aWYgKCFwYXJhbXMuaGFzT3duUHJvcGVydHkoXCJnaWRcIikgfHwgIXBhcmFtcy5oYXNPd25Qcm9wZXJ0eShcInRcIikpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWQgPSBwYXJzZUludChwYXJhbXMuZ2lkLCAxMCk7XHJcblx0aWYgKE51bWJlci5pc05hTihpZCkpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0cmV0dXJuIG5ldyBHYWxsZXJ5SWRlbnRpZmllcihpZCwgcGFyYW1zLnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkSW5mbyhpbmZvLCBpZGVudGlmaWVyKSB7XHJcblx0Y29uc3QgZyA9IGluZm8uZ2FsbGVyeTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0ZyAhPT0gbnVsbCAmJiB0eXBlb2YoZykgPT09IFwib2JqZWN0XCIgJiZcclxuXHRcdGcuZ2lkID09PSBpZGVudGlmaWVyLmlkICYmXHJcblx0XHRnLnRva2VuID09PSBpZGVudGlmaWVyLnRva2VuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9ycmVudFBhZ2VEb3dubG9hZExpbmtzKHVybCkge1xyXG5cdGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9ycmVudGluZm8gZm9ybSB0YWJsZT50Ym9keVwiKTtcclxuXHRmb3IgKGNvbnN0IHRhYmxlIG9mIHRhYmxlcykge1xyXG5cdFx0Y29uc3QgdG9ycmVudExpbmsgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidHI6bnRoLW9mLXR5cGUoMyk+dGRcIik7XHJcblx0XHRpZiAodG9ycmVudExpbmsgPT09IG51bGwpIHsgY29udGludWU7IH1cclxuXHJcblx0XHRjb25zdCB0ZXh0ID0gdG9ycmVudExpbmsudGV4dENvbnRlbnQ7XHJcblx0XHRjb25zdCB3aGl0ZXNwYWNlID0gL15cXHMqLy5leGVjKHRleHQpWzBdO1xyXG5cdFx0Y29uc3QgdG9ycmVudEZpbGVOYW1lID0gdGV4dC50cmltKCkucmVwbGFjZSgvXFwuW15cXC5dKiQvLCBcIlwiKTtcclxuXHJcblx0XHRjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG5cdFx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdGNlbGwuc2V0QXR0cmlidXRlKFwiY29sc3BhblwiLCBcIjVcIik7XHJcblxyXG5cdFx0aWYgKHdoaXRlc3BhY2UubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjZWxsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdoaXRlc3BhY2UpKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHRsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGAke3RvcnJlbnRGaWxlTmFtZX0uaW5mby5qc29uYCk7XHJcblx0XHRsaW5rLmhyZWYgPSB1cmw7XHJcblx0XHRsaW5rLnRleHRDb250ZW50ID0gXCJNZXRhZGF0YSBKU09OXCI7XHJcblx0XHRjZWxsLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuXHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuXHRcdHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuXHRjb25zdCBjdXJyZW50UGFnZVR5cGUgPSBwYWdlVHlwZS5nZXQoZG9jdW1lbnQsIGxvY2F0aW9uKTtcclxuXHJcblx0c3dpdGNoIChjdXJyZW50UGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdHNldHVwR2FsbGVyeVBhZ2UoKTtcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInRvcnJlbnRJbmZvXCI6XHJcblx0XHRcdHNldHVwVG9ycmVudFBhZ2UoKTtcclxuXHRcdGJyZWFrO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVycyh1cmwpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRjb25zdCBtYXRjaCA9IC9eKFteI1xcP10qKShcXD9bXiNdKik/KCNbXFx3XFxXXSopPyQvLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMl0gJiYgbWF0Y2hbMl0ubGVuZ3RoID4gMSkge1xyXG5cdFx0Y29uc3QgcGF0dGVybiA9IC8oW149XSopKD86PShbXFx3XFxXXSopKT8vO1xyXG5cdFx0Zm9yIChjb25zdCBwYXJ0IG9mIG1hdGNoWzJdLnN1YnN0cigxKS5zcGxpdChcIiZcIikpIHtcclxuXHRcdFx0aWYgKHBhcnQubGVuZ3RoID09PSAwKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRcdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4uZXhlYyhwYXJ0KTtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBtYXRjaDJbMl07XHJcblx0XHRcdHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQobWF0Y2gyWzFdKV0gPSAodmFsdWUgIT09IHVuZGVmaW5lZCA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUXVlcnlQYXJhbWV0ZXIodXJsLCBwYXJhbWV0ZXJOYW1lKSB7XHJcblx0cmV0dXJuIHVybC5yZXBsYWNlKFxyXG5cdFx0bmV3IFJlZ0V4cChgKFsmXFxcXD9dKSR7cGFyYW1ldGVyTmFtZX0oPzooPzo9W14mXSopPygmfCQpKWApLFxyXG5cdFx0KG0wLCBtMSwgbTIpID0+IChtMSA9PT0gXCI/XCIgJiYgbTIgPyBcIj9cIiA6IG0yKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRVcmxQYXJhbWV0ZXJzLFxyXG5cdHJlbW92ZVF1ZXJ5UGFyYW1ldGVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGlzUmVhZHlWYWx1ZSA9IGZhbHNlO1xyXG5sZXQgY2FsbGJhY2tzID0gbnVsbDtcclxubGV0IGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcbmNvbnN0IGNoZWNrSW50ZXJ2YWxSYXRlID0gMjUwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzSG9va2VkKCkge1xyXG5cdHJldHVybiBjYWxsYmFja3MgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvb2soKSB7XHJcblx0Y2FsbGJhY2tzID0gW107XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChjaGVja0lmUmVhZHksIGNoZWNrSW50ZXJ2YWxSYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5ob29rKCkge1xyXG5cdGNvbnN0IGNicyA9IGNhbGxiYWNrcztcclxuXHJcblx0Y2FsbGJhY2tzID0gbnVsbDtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbElkKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5cclxuXHRpbnZva2UoY2JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrcykge1xyXG5cdGZvciAobGV0IGNiIG9mIGNhbGxiYWNrcykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y2IoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlYWR5KCkge1xyXG5cdGlmIChpc1JlYWR5VmFsdWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdGlmIChpc0hvb2tlZCgpKSB7IHVuaG9vaygpOyB9XHJcblx0XHRpc1JlYWR5VmFsdWUgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlJlYWR5KCkge1xyXG5cdGlzUmVhZHkoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uUmVhZHkoY2FsbGJhY2spIHtcclxuXHRpZiAoaXNSZWFkeSgpKSB7XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCFpc0hvb2tlZCgpKSB7IGhvb2soKTsgfVxyXG5cclxuXHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvblJlYWR5OiBvblJlYWR5LFxyXG5cdGdldCBpc1JlYWR5KCkgeyByZXR1cm4gaXNSZWFkeSgpOyB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGFwaVN0eWxlID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJZChpZCkge1xyXG5cdHJldHVybiBgJHtpZH0tc3R5bGVzaGVldGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0SWQoaWQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzU3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiAhIWdldFN0eWxlc2hlZXQoaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNoZWV0KHNvdXJjZSwgaWQpIHtcclxuXHRpZiAoYXBpU3R5bGUgPT09IG51bGwpIHsgYXBpU3R5bGUgPSByZXF1aXJlKFwiLi9hcGkvc3R5bGVcIik7IH1cclxuXHRhcGlTdHlsZS5zZXREb2N1bWVudERhcmtGbGFnKCk7XHJcblxyXG5cdGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlLnRleHRDb250ZW50ID0gc291cmNlO1xyXG5cdGlmICh0eXBlb2YoaWQpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRzdHlsZS5pZCA9IGdldElkKGlkKTtcclxuXHR9XHJcblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblx0cmV0dXJuIHN0eWxlO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aGFzU3R5bGVzaGVldCxcclxuXHRnZXRTdHlsZXNoZWV0LFxyXG5cdGFkZFN0eWxlc2hlZXRcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgY29tbWFuZHMgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29tbWFuZChjb21tYW5kTmFtZSwgY2FsbGJhY2spIHtcclxuXHRpZiAoY29tbWFuZHMgPT09IG51bGwpIHtcclxuXHRcdGNvbW1hbmRzID0ge307XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25XaW5kb3dNZXNzYWdlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRjb21tYW5kc1tjb21tYW5kTmFtZV0gPSBjYWxsYmFjaztcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdCh0YXJnZXRXaW5kb3csIGNvbW1hbmROYW1lLCBkYXRhKSB7XHJcblx0dGFyZ2V0V2luZG93LnBvc3RNZXNzYWdlKHtcclxuXHRcdHhEYXRhOiB7IGNvbW1hbmQ6IGNvbW1hbmROYW1lLCBkYXRhOiBkYXRhIH1cclxuXHR9LCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25XaW5kb3dNZXNzYWdlKGUpIHtcclxuXHRpZiAoZS5vcmlnaW4gIT09IHdpbmRvdy5vcmlnaW4pIHsgcmV0dXJuOyB9XHJcblxyXG5cdGxldCBkYXRhID0gZS5kYXRhO1xyXG5cdGlmIChkYXRhID09PSBudWxsIHx8IHR5cGVvZihkYXRhKSAhPT0gXCJvYmplY3RcIikgeyByZXR1cm47IH1cclxuXHJcblx0ZGF0YSA9IGRhdGEueERhdGE7XHJcblx0aWYgKGRhdGEgPT09IG51bGwgfHwgdHlwZW9mKGRhdGEpICE9PSBcIm9iamVjdFwiKSB7IHJldHVybjsgfVxyXG5cdGlmICh0eXBlb2YoZGF0YS5jb21tYW5kKSAhPT0gXCJzdHJpbmdcIikgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgY2FsbGJhY2sgPSBjb21tYW5kc1tkYXRhLmNvbW1hbmRdO1xyXG5cdGlmICh0eXBlb2YoY2FsbGJhY2spICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNhbGxiYWNrKGUsIGRhdGEuZGF0YSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRyZWdpc3RlckNvbW1hbmQsXHJcblx0cG9zdFxyXG59O1xyXG4iXX0=
