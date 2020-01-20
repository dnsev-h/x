// ==UserScript==
// @name        x/gallery-metadata
// @version     1.2.4
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL2NvbW1vbi1qc29uLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbC5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3R5cGVzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHMuanMiLCJzcmMvYXBpL2dhbGxlcnktcmlnaHQtc2lkZWJhci5qcyIsInNyYy9hcGkvcGFnZS10eXBlLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvZ2FsbGVyeS1yaWdodC1zaWRlYmFyLmNzcyIsInNyYy9nYWxsZXJ5LW1ldGFkYXRhL21haW4uanMiLCJzcmMvcXVlcnktc3RyaW5nLmpzIiwic3JjL3JlYWR5LmpzIiwic3JjL3N0eWxlLmpzIiwic3JjL3dpbmRvdy1tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgR2FsbGVyeUlkZW50aWZpZXIge1xyXG5cdGNvbnN0cnVjdG9yKGlkLCB0b2tlbikge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy50b2tlbiA9IHRva2VuO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZUZyb21VcmwodXJsKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC8uZXhlYyh1cmwpO1xyXG5cdFx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgcGF0aCA9IG1hdGNoWzFdLnJlcGxhY2UoL15cXC8rfFxcLyskL2csIFwiXCIpLnJlcGxhY2UoL1xcL3syLH0vZywgXCIvXCIpLnNwbGl0KFwiL1wiKTtcclxuXHRcdGlmIChwYXRoWzBdICE9PSBcImdcIiB8fCBwYXRoLmxlbmd0aCA8IDMpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBpZCA9IHBhcnNlSW50KHBhdGhbMV0sIDEwKTtcclxuXHRcdHJldHVybiAoTnVtYmVyLmlzTmFOKGlkKSA/IG51bGwgOiBuZXcgR2FsbGVyeUlkZW50aWZpZXIoaWQsIHBhdGhbMl0pKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRHYWxsZXJ5SWRlbnRpZmllclxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlJZGVudGlmaWVyID0gcmVxdWlyZShcIi4uL2dhbGxlcnktaWRlbnRpZmllclwiKS5HYWxsZXJ5SWRlbnRpZmllcjtcclxuXHJcblxyXG5mdW5jdGlvbiB0b1N0cmluZ09yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIHR5cGVvZih2YWx1ZSkgPT09IFwic3RyaW5nXCIgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9OdW1iZXJPckRlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdHJldHVybiBOdW1iZXIuaXNOYU4odmFsdWUpID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKGlkZW50aWZpZXIsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsIHx8IHR5cGVvZihpZGVudGlmaWVyKSAhPT0gXCJvYmplY3RcIikge1xyXG5cdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnaWQ6IGlkZW50aWZpZXIuaWQsXHJcblx0XHR0b2tlbjogaWRlbnRpZmllci50b2tlblxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld2VyVmVyc2lvbnNUb0NvbW1vbkpzb24obmV3ZXJWZXJzaW9ucykge1xyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KG5ld2VyVmVyc2lvbnMpKSB7XHJcblx0XHRmb3IgKGNvbnN0IG5ld2VyVmVyc2lvbiBvZiBuZXdlclZlcnNpb25zKSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHtcclxuXHRcdFx0XHRnYWxsZXJ5OiAoXHJcblx0XHRcdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihuZXdlclZlcnNpb24uaWRlbnRpZmllciwgbnVsbCkgfHxcclxuXHRcdFx0XHRcdGdhbGxlcnlJZGVudGlmaWVydG9Db21tb25Kc29uKG5ldyBHYWxsZXJ5SWRlbnRpZmllcigwLCBcIlwiKSwgbnVsbCkpLFxyXG5cdFx0XHRcdG5hbWU6IHRvU3RyaW5nT3JEZWZhdWx0KG5ld2VyVmVyc2lvbi5uYW1lKSxcclxuXHRcdFx0XHRkYXRlX3VwbG9hZGVkOiB0b051bWJlck9yRGVmYXVsdChuZXdlclZlcnNpb24uZGF0ZVVwbG9hZGVkKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdGFnc1RvQ29tbW9uSnNvbih0YWdzKSB7XHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0aWYgKHRhZ3MgIT09IG51bGwgJiYgdHlwZW9mKHRhZ3MpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHRhZ3MpKSB7XHJcblx0XHRmb3IgKGNvbnN0IG5hbWVzcGFjZSBpbiB0YWdzKSB7XHJcblx0XHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhZ3MsIG5hbWVzcGFjZSkpIHsgY29udGludWU7IH1cclxuXHRcdFx0Y29uc3QgdGFnTGlzdCA9IHRhZ3NbbmFtZXNwYWNlXTtcclxuXHRcdFx0cmVzdWx0W25hbWVzcGFjZV0gPSBbLi4udGFnTGlzdF07XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uRmF2b3JpdGVDYXRlZ29yeShpbmZvKSB7XHJcblx0aWYgKGluZm8uZmF2b3JpdGVDYXRlZ29yeSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdHJldHVybiB7XHJcblx0XHRpZDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5mYXZvcml0ZUNhdGVnb3J5LmluZGV4LCAwKSxcclxuXHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkudGl0bGUsIFwiXCIpXHJcblx0fTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uRnVsbEdhbGxlcnlJbmZvSnNvbihpbmZvKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdhbGxlcnk6IChcclxuXHRcdFx0Z2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaW5mby5pZGVudGlmaWVyLCBudWxsKSB8fFxyXG5cdFx0XHRnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihuZXcgR2FsbGVyeUlkZW50aWZpZXIoMCwgXCJcIiksIG51bGwpKSxcclxuXHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlLCBcIlwiKSxcclxuXHRcdHRpdGxlX29yaWdpbmFsOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlT3JpZ2luYWwsIFwiXCIpLFxyXG5cdFx0ZGF0ZV91cGxvYWRlZDogdG9OdW1iZXJPckRlZmF1bHQoaW5mby5kYXRlVXBsb2FkZWQsIDApLFxyXG5cdFx0Y2F0ZWdvcnk6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uY2F0ZWdvcnksIFwiXCIpLFxyXG5cdFx0dXBsb2FkZXI6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udXBsb2FkZXIsIFwiXCIpLFxyXG5cdFx0cmF0aW5nOiB7XHJcblx0XHRcdGF2ZXJhZ2U6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8ucmF0aW5nQXZlcmFnZSwgMCksXHJcblx0XHRcdGNvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLnJhdGluZ0NvdW50LCAwKSxcclxuXHRcdH0sXHJcblx0XHRmYXZvcml0ZXM6IHtcclxuXHRcdFx0Y2F0ZWdvcnk6IChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgIT09IG51bGwgPyB0b051bWJlck9yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkuaW5kZXgsIC0xKSA6IC0xKSxcclxuXHRcdFx0Y2F0ZWdvcnlfdGl0bGU6IChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgIT09IG51bGwgPyB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkudGl0bGUsIFwiXCIpIDogXCJcIiksXHJcblx0XHRcdGNvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLmZhdm9yaXRlQ291bnQsIDApXHJcblx0XHR9LFxyXG5cdFx0cGFyZW50OiBnYWxsZXJ5SWRlbnRpZmllcnRvQ29tbW9uSnNvbihpbmZvLnBhcmVudCwgbnVsbCksXHJcblx0XHRuZXdlcl92ZXJzaW9uczogbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihpbmZvLm5ld2VyVmVyc2lvbnMpLFxyXG5cdFx0dGh1bWJuYWlsOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLm1haW5UaHVtYm5haWxVcmwsIFwiXCIpLFxyXG5cdFx0dGh1bWJuYWlsX3NpemU6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8udGh1bWJuYWlsU2l6ZSwgXCJcIiksXHJcblx0XHR0aHVtYm5haWxfcm93czogdG9OdW1iZXJPckRlZmF1bHQoaW5mby50aHVtYm5haWxSb3dzLCAwKSxcclxuXHRcdGltYWdlX2NvdW50OiB0b051bWJlck9yRGVmYXVsdChpbmZvLmZpbGVDb3VudCwgMCksXHJcblx0XHRpbWFnZXNfcmVzaXplZDogZmFsc2UsXHJcblx0XHR0b3RhbF9maWxlX3NpemVfYXBwcm94OiB0b051bWJlck9yRGVmYXVsdChpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSwgMCksXHJcblx0XHR2aXNpYmxlOiAoaW5mby52aXNpYmxlID09PSB0cnVlKSxcclxuXHRcdHZpc2libGVfcmVhc29uOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnZpc2libGVSZWFzb24sIFwiXCIpLFxyXG5cdFx0bGFuZ3VhZ2U6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8ubGFuZ3VhZ2UsIFwiXCIpLFxyXG5cdFx0dHJhbnNsYXRlZDogKGluZm8udHJhbnNsYXRlZCA9PT0gdHJ1ZSksXHJcblx0XHR0YWdzOiB0YWdzVG9Db21tb25Kc29uKGluZm8udGFncyksXHJcblx0XHQvLyBOZXdcclxuXHRcdHRhZ3NfaGF2ZV9uYW1lc3BhY2U6IChpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID09PSB0cnVlKSxcclxuXHRcdHRvcnJlbnRfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8udG9ycmVudENvdW50LCAwKSxcclxuXHRcdGFyY2hpdmVyX2tleTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5hcmNoaXZlcktleSwgbnVsbCksXHJcblx0XHRzb3VyY2U6IHRvU3RyaW5nT3JEZWZhdWx0KGluZm8uc291cmNlLCBudWxsKSxcclxuXHRcdHNvdXJjZV9zaXRlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnNvdXJjZVNpdGUsIG51bGwpLFxyXG5cdFx0ZGF0ZV9nZW5lcmF0ZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZGF0ZUdlbmVyYXRlZCwgMClcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0NvbW1vbkdhbGxlcnlJbmZvSnNvbihpbmZvKSB7XHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRvTnVtYmVyT3JEZWZhdWx0KGluZm8uZGF0ZVVwbG9hZGVkLCAwKSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdHRpdGxlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlLCBcIlwiKSxcclxuXHRcdHRpdGxlX29yaWdpbmFsOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnRpdGxlT3JpZ2luYWwsIFwiXCIpLFxyXG5cclxuXHRcdGNhdGVnb3J5OiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLmNhdGVnb3J5LCBcIlwiKSxcclxuXHRcdHRhZ3M6IHRhZ3NUb0NvbW1vbkpzb24oaW5mby50YWdzKSxcclxuXHJcblx0XHRsYW5ndWFnZTogdG9TdHJpbmdPckRlZmF1bHQoaW5mby5sYW5ndWFnZSwgXCJcIiksXHJcblx0XHR0cmFuc2xhdGVkOiAhIWluZm8udHJhbnNsYXRlZCxcclxuXHJcblx0XHRmYXZvcml0ZV9jYXRlZ29yeTogdG9Db21tb25GYXZvcml0ZUNhdGVnb3J5KGluZm8pLFxyXG5cclxuXHRcdHVwbG9hZF9kYXRlOiBbXHJcblx0XHRcdGRhdGUuZ2V0VVRDRnVsbFllYXIoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENNb250aCgpICsgMSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENEYXRlKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDSG91cnMoKSxcclxuXHRcdFx0ZGF0ZS5nZXRVVENNaW51dGVzKCksXHJcblx0XHRcdGRhdGUuZ2V0VVRDU2Vjb25kcygpXHJcblx0XHRdLFxyXG5cclxuXHRcdHNvdXJjZToge1xyXG5cdFx0XHRzaXRlOiB0b1N0cmluZ09yRGVmYXVsdChpbmZvLnNvdXJjZVNpdGUsIFwiXCIpLFxyXG5cdFx0XHRnaWQ6IChpbmZvLmlkZW50aWZpZXIgIT09IG51bGwgPyB0b051bWJlck9yRGVmYXVsdChpbmZvLmlkZW50aWZpZXIuaWQsIDApIDogMCksXHJcblx0XHRcdHRva2VuOiAoaW5mby5pZGVudGlmaWVyICE9PSBudWxsID8gdG9TdHJpbmdPckRlZmF1bHQoaW5mby5pZGVudGlmaWVyLnRva2VuLCAwKSA6IDApLFxyXG5cdFx0XHRwYXJlbnRfZ2FsbGVyeTogZ2FsbGVyeUlkZW50aWZpZXJ0b0NvbW1vbkpzb24oaW5mby5wYXJlbnQsIG51bGwpLFxyXG5cdFx0XHRuZXdlcl92ZXJzaW9uczogbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbihpbmZvLm5ld2VyVmVyc2lvbnMpXHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25Kc29uKGluZm8pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2FsbGVyeV9pbmZvOiB0b0NvbW1vbkdhbGxlcnlJbmZvSnNvbihpbmZvKSxcclxuXHRcdGdhbGxlcnlfaW5mb19mdWxsOiB0b0NvbW1vbkZ1bGxHYWxsZXJ5SW5mb0pzb24oaW5mbylcclxuXHR9O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0dG9Db21tb25Kc29uXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDc3NVcmwodXJsU3RyaW5nKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC91cmxcXHMqXFwoXFxzKihbJ1wiXSk/LztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh1cmxTdHJpbmcpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBxdW90ZSA9IG1hdGNoWzFdIHx8IFwiXCI7XHJcblx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAtIHF1b3RlLmxlbmd0aCk7XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4yID0gbmV3IFJlZ0V4cChgKCR7cXVvdGV9KVxcXFxzKlxcXFwpXFxcXHMqJGApO1xyXG5cdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4yLmV4ZWModXJsU3RyaW5nKTtcclxuXHRpZiAobWF0Y2gyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHVybCA9IHVybFN0cmluZy5zdWJzdHIoMCwgbWF0Y2gyLmluZGV4ICsgbWF0Y2gyWzFdLmxlbmd0aCk7XHJcblxyXG5cdGxldCB1cmwyID0gdXJsO1xyXG5cdGlmICghcXVvdGUpIHtcclxuXHRcdHVybDIgPSB1cmwucmVwbGFjZSgvXCIvZywgXCJcXFxcXFxcIlwiKTtcclxuXHRcdHVybDIgPSBgXCIke3VybDJ9XCJgO1xyXG5cdH0gZWxzZSBpZiAocXVvdGUgPT09IFwiJ1wiKSB7XHJcblx0XHR1cmwyID0gdXJsLnN1YnN0cigxLCB1cmwubGVuZ3RoIC0gMik7XHJcblx0XHR1cmwyID0gdXJsMi5yZXBsYWNlKC9cXFxcJy9nLCBcIidcIik7XHJcblx0XHR1cmwyID0gYFwiJHt1cmwyfVwiYDtcclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gSlNPTi5wYXJzZSh1cmwyKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRyZXR1cm4gdXJsO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZXN0YW1wKHRleHQpIHtcclxuXHRjb25zdCBtYXRjaCA9IC8oWzAtOV0rKS0oWzAtOV0rKS0oWzAtOV0rKVxccysoWzAtOV0rKTooWzAtOV0rKS8uZXhlYyh0ZXh0KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0cmV0dXJuIERhdGUuVVRDKFxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbMV0sIDEwKSwgLy8geWVhclxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbMl0sIDEwKSAtIDEsIC8vIG1vbnRoXHJcblx0XHRwYXJzZUludChtYXRjaFszXSwgMTApLCAvLyBkYXlcclxuXHRcdHBhcnNlSW50KG1hdGNoWzRdLCAxMCksIC8vIGhvdXJzXHJcblx0XHRwYXJzZUludChtYXRjaFs1XSwgMTApLCAvLyBtaW51dGVzXHJcblx0XHQwLCAvLyBzZWNvbmRzXHJcblx0XHQwKTsgLy8gbWlsbGlzZWNvbmRzXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUaXRsZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnblwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBub2RlLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaXRsZU9yaWdpbmFsKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dqXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IG5vZGUudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1haW5UaHVtYm5haWxVcmwoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2QxPmRpdlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRsZXQgdXJsID0gZ2V0Q3NzVXJsKG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlKTtcclxuXHRpZiAodXJsICE9PSBudWxsKSB7IHJldHVybiB1cmw7IH1cclxuXHJcblx0Y29uc3QgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0cmV0dXJuIChpbWcgIT09IG51bGwgPyBpbWcuZ2V0QXR0cmlidXRlKFwic3JjXCIpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENhdGVnb3J5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkYz5kaXZbb25jbGlja11cIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9bJ1wiXS4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pP1snXCJdLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcIm9uY2xpY2tcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVwbG9hZGVyKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkbj5hXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXi4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pPyQvO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gKG1hdGNoWzFdLnNwbGl0KFwiL1wiKVsxXSB8fCBcIlwiKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYXRpbmdDb3VudChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfY291bnRcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBwYXJzZUludChub2RlLnRleHRDb250ZW50LnRyaW0oKSwgMTApO1xyXG5cdHJldHVybiAoTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhdGluZ0F2ZXJhZ2UoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nX2xhYmVsXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvYXZlcmFnZTpcXHMqKFswLTlcXC5dKykvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcclxuXHRyZXR1cm4gKE51bWJlci5pc05hTih2YWx1ZSkgPyBudWxsIDogdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYXZvcml0ZUNvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2ZhdmNvdW50XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxzKihbMC05XSt8b25jZSkvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgbWF0Y2gxID0gbWF0Y2hbMV07XHJcblx0cmV0dXJuIChtYXRjaDEudG9Mb3dlckNhc2UoKSA9PT0gXCJvbmNlXCIgPyAxIDogcGFyc2VJbnQobWF0Y2gxLCAxMCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYXZvcml0ZUNhdGVnb3J5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2Zhdj5kaXYuaVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikgfHwgXCJcIjtcclxuXHRjb25zdCBwYXR0ZXJuID0gL2JhY2tncm91bmQtcG9zaXRpb25cXHMqOlxccypcXGQrKD86cHgpP1xccysoLT9cXGQrKSg/OnB4KS87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiKTtcclxuXHRjb25zdCBpbmRleCA9IChtYXRjaCAhPT0gbnVsbCkgP1xyXG5cdFx0TWF0aC5mbG9vcigoTWF0aC5hYnMocGFyc2VJbnQobWF0Y2hbMV0sIDEwKSkgLSAyKSAvIDE5KSA6XHJcblx0XHQtMTtcclxuXHJcblx0cmV0dXJuIHsgaW5kZXgsIHRpdGxlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRodW1ibmFpbFNpemUoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkbzQ+Lm5vc2VsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPCAyKSB7IHJldHVybiBudWxsOyB9XHJcblx0cmV0dXJuIChub2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aHNcIikgPyBcIm5vcm1hbFwiIDogXCJsYXJnZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGh1bWJuYWlsUm93cyhodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RvMj4ubm9zZWxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1xccyooWzAtOV0rKS87XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aHNcIikpIHtcclxuXHRcdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFncyhodG1sKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC8oLispOi87XHJcblx0Y29uc3QgZ3JvdXBzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RhZ2xpc3QgdHJcIik7XHJcblx0Y29uc3QgdGFncyA9IHt9O1xyXG5cclxuXHRmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xyXG5cdFx0Y29uc3QgdGRzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xyXG5cdFx0aWYgKHRkcy5sZW5ndGggPT09IDApIHsgY29udGludWU7IH1cclxuXHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZHNbMF0udGV4dENvbnRlbnQpO1xyXG5cdFx0Y29uc3QgbmFtZXNwYWNlID0gKG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0udHJpbSgpIDogXCJcIik7XHJcblxyXG5cdFx0bGV0IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHRpZiAodGFncy5oYXNPd25Qcm9wZXJ0eShuYW1lc3BhY2UpKSB7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MgPSB0YWdzW25hbWVzcGFjZV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuYW1lc3BhY2VUYWdzID0gW107XHJcblx0XHRcdHRhZ3NbbmFtZXNwYWNlXSA9IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGFnRGl2cyA9IHRkc1t0ZHMubGVuZ3RoIC0gMV0ucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcclxuXHRcdGZvciAoY29uc3QgZGl2IG9mIHRhZ0RpdnMpIHtcclxuXHRcdFx0Y29uc3QgbGluayA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcclxuXHRcdFx0aWYgKGxpbmsgPT09IG51bGwpIHsgY29udGludWU7IH1cclxuXHJcblx0XHRcdGNvbnN0IHRhZyA9IGxpbmsudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHRuYW1lc3BhY2VUYWdzLnB1c2godGFnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0YWdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXRhaWxzTm9kZXMoaHRtbCkge1xyXG5cdHJldHVybiBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RkIHRyXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRlVXBsb2FkZWQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gMCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbMF0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IGdldFRpbWVzdGFtcChub2RlLnRleHRDb250ZW50KSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlSW5mbyhkZXRhaWxzTm9kZXMpIHtcclxuXHRsZXQgdmlzaWJsZSA9IHRydWU7XHJcblx0bGV0IHZpc2libGVSZWFzb24gPSBudWxsO1xyXG5cclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA+IDIpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbMl0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcGF0dGVybiA9IC9ub1xccytcXCgoLis/KVxcKS9pO1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdFx0dmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHZpc2libGVSZWFzb24gPSBtYXRjaFsxXS50cmltKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IHZpc2libGUsIHZpc2libGVSZWFzb24gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VJbmZvKGRldGFpbHNOb2Rlcykge1xyXG5cdGxldCBsYW5ndWFnZSA9IG51bGw7XHJcblx0bGV0IHRyYW5zbGF0ZWQgPSBmYWxzZTtcclxuXHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPiAzKSB7XHJcblx0XHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzNdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRcdGlmIChub2RlICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHRleHROb2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG5cdFx0XHRpZiAodGV4dE5vZGUgIT09IG51bGwgJiYgdGV4dE5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XHJcblx0XHRcdFx0bGFuZ3VhZ2UgPSB0ZXh0Tm9kZS5ub2RlVmFsdWUudHJpbSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCB0ck5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuaGFscFwiKTtcclxuXHRcdFx0dHJhbnNsYXRlZCA9ICh0ck5vZGUgIT09IG51bGwgJiYgdHJOb2RlLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBcInRyXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgbGFuZ3VhZ2UsIHRyYW5zbGF0ZWQgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXBwcm94aW1hdGVUb3RhbEZpbGVTaXplKGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1s0XS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC8oWzAtOVxcLl0rKVxccyooXFx3KykvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gdXRpbHMuZ2V0Qnl0ZXNTaXplRnJvbUxhYmVsKG1hdGNoWzFdLCBtYXRjaFsyXSkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmlsZUNvdW50KGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDUpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1s1XS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC8oWzAtOSxdKylcXHMqcGFnZXMvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gcGFyc2VJbnQobWF0Y2hbMV0ucmVwbGFjZSgvLC9nLCBcIlwiKSwgMTApIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhcmVudChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSAxKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbMV0ucXVlcnlTZWxlY3RvcihcIi5nZHQyPmFcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mbyA9IHV0aWxzLmdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21Vcmwobm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdHJldHVybiAoaW5mbyAhPT0gbnVsbCA/IGluZm8uaWRlbnRpZmllciA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXdlclZlcnNpb25zKGh0bWwpIHtcclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ25kPmFcIik7XHJcblxyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgaW5mbyA9IHV0aWxzLmdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21Vcmwobm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdFx0aWYgKGluZm8gPT09IG51bGwpIHsgY29udGludWU7IH1cclxuXHJcblx0XHRjb25zdCBnYWxsZXJ5SW5mbyA9IHtcclxuXHRcdFx0aWRlbnRpZmllcjogaW5mby5pZGVudGlmaWVyLFxyXG5cdFx0XHRuYW1lOiBub2RlLnRleHRDb250ZW50LnRyaW0oKSxcclxuXHRcdFx0ZGF0ZVVwbG9hZGVkOiBudWxsXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChub2RlLm5leHRTaWJsaW5nICE9PSBudWxsKSB7XHJcblx0XHRcdGdhbGxlcnlJbmZvLmRhdGVVcGxvYWRlZCA9IGdldFRpbWVzdGFtcChub2RlLm5leHRTaWJsaW5nLnRleHRDb250ZW50KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXN1bHRzLnB1c2goZ2FsbGVyeUluZm8pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvcnJlbnRDb3VudChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2Q1IC5nMj5hXCIpO1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxidG9ycmVudFxccytkb3dubG9hZFxccypcXChcXHMqKFxcZCspXFxzKlxcKS9pO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXJjaGl2ZXJLZXkoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkNSAuZzI+YVwiKTtcclxuXHRjb25zdCBwYXR0ZXJuID0gL1xcYmFyY2hpdmVcXHMrZG93bmxvYWRcXGIvaTtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHBhdHRlcm4yID0gLyZvcj0oW14nXCJdKilbJ1wiXS87XHJcblx0XHRcdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4yLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIpIHx8IFwiXCIpO1xyXG5cdFx0XHRyZXR1cm4gKG1hdGNoMiAhPT0gbnVsbCA/IG1hdGNoMlsxXSA6IG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSHRtbChpbmZvLCBodG1sKSB7XHJcblx0Ly8gR2VuZXJhbFxyXG5cdGluZm8udGl0bGUgPSBnZXRUaXRsZShodG1sKTtcclxuXHRpbmZvLnRpdGxlT3JpZ2luYWwgPSBnZXRUaXRsZU9yaWdpbmFsKGh0bWwpO1xyXG5cdGluZm8ubWFpblRodW1ibmFpbFVybCA9IGdldE1haW5UaHVtYm5haWxVcmwoaHRtbCk7XHJcblx0aW5mby5jYXRlZ29yeSA9IGdldENhdGVnb3J5KGh0bWwpO1xyXG5cdGluZm8udXBsb2FkZXIgPSBnZXRVcGxvYWRlcihodG1sKTtcclxuXHJcblx0aW5mby5yYXRpbmdDb3VudCA9IGdldFJhdGluZ0NvdW50KGh0bWwpO1xyXG5cdGluZm8ucmF0aW5nQXZlcmFnZSA9IGdldFJhdGluZ0F2ZXJhZ2UoaHRtbCk7XHJcblxyXG5cdGluZm8uZmF2b3JpdGVDb3VudCA9IGdldEZhdm9yaXRlQ291bnQoaHRtbCk7XHJcblx0aW5mby5mYXZvcml0ZUNhdGVnb3J5ID0gZ2V0RmF2b3JpdGVDYXRlZ29yeShodG1sKTtcclxuXHJcblx0aW5mby50aHVtYm5haWxTaXplID0gZ2V0VGh1bWJuYWlsU2l6ZShodG1sKTtcclxuXHRpbmZvLnRodW1ibmFpbFJvd3MgPSBnZXRUaHVtYm5haWxSb3dzKGh0bWwpO1xyXG5cclxuXHRpbmZvLm5ld2VyVmVyc2lvbnMgPSBnZXROZXdlclZlcnNpb25zKGh0bWwpO1xyXG5cclxuXHRpbmZvLnRvcnJlbnRDb3VudCA9IGdldFRvcnJlbnRDb3VudChodG1sKTtcclxuXHRpbmZvLmFyY2hpdmVyS2V5ID0gZ2V0QXJjaGl2ZXJLZXkoaHRtbCk7XHJcblxyXG5cdC8vIERldGFpbHNcclxuXHRjb25zdCBkZXRhaWxzTm9kZXMgPSBnZXREZXRhaWxzTm9kZXMoaHRtbCk7XHJcblxyXG5cdGluZm8uZGF0ZVVwbG9hZGVkID0gZ2V0RGF0ZVVwbG9hZGVkKGRldGFpbHNOb2Rlcyk7XHJcblxyXG5cdGluZm8ucGFyZW50ID0gZ2V0UGFyZW50KGRldGFpbHNOb2Rlcyk7XHJcblxyXG5cdGNvbnN0IHZpc2libGVJbmZvID0gZ2V0VmlzaWJsZUluZm8oZGV0YWlsc05vZGVzKTtcclxuXHRpbmZvLnZpc2libGUgPSB2aXNpYmxlSW5mby52aXNpYmxlO1xyXG5cdGluZm8udmlzaWJsZVJlYXNvbiA9IHZpc2libGVJbmZvLnZpc2libGVSZWFzb247XHJcblxyXG5cdGNvbnN0IGxhbmd1YWdlSW5mbyA9IGdldExhbmd1YWdlSW5mbyhkZXRhaWxzTm9kZXMpO1xyXG5cdGluZm8ubGFuZ3VhZ2UgPSBsYW5ndWFnZUluZm8ubGFuZ3VhZ2U7XHJcblx0aW5mby50cmFuc2xhdGVkID0gbGFuZ3VhZ2VJbmZvLnRyYW5zbGF0ZWQ7XHJcblxyXG5cdGluZm8uYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplID0gZ2V0QXBwcm94aW1hdGVUb3RhbEZpbGVTaXplKGRldGFpbHNOb2Rlcyk7XHJcblxyXG5cdGluZm8uZmlsZUNvdW50ID0gZ2V0RmlsZUNvdW50KGRldGFpbHNOb2Rlcyk7XHJcblxyXG5cdC8vIFRhZ3NcclxuXHRpbmZvLnRhZ3MgPSBnZXRUYWdzKGh0bWwpO1xyXG5cdGluZm8udGFnc0hhdmVOYW1lc3BhY2UgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGcm9tSHRtbChodG1sLCB1cmwpIHtcclxuXHRjb25zdCBsaW5rID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiLnB0dCB0ZC5wdGRzPmFbaHJlZl0sLnB0dCB0ZC5wdGRkPmFbaHJlZl1cIik7XHJcblx0aWYgKGxpbmsgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWRQYWdlID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0aWYgKGlkUGFnZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvID0gbmV3IHR5cGVzLkdhbGxlcnlJbmZvKCk7XHJcblx0aW5mby5pZGVudGlmaWVyID0gaWRQYWdlLmlkZW50aWZpZXI7XHJcblx0aW5mby5jdXJyZW50UGFnZSA9IGlkUGFnZS5wYWdlO1xyXG5cdGluZm8uc291cmNlID0gXCJodG1sXCI7XHJcblx0cG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21IdG1sKGluZm8sIGh0bWwpO1xyXG5cdGluZm8uc291cmNlU2l0ZSA9IHV0aWxzLmdldFNvdXJjZVNpdGVGcm9tVXJsKHVybCk7XHJcblx0aW5mby5kYXRlR2VuZXJhdGVkID0gRGF0ZS5ub3coKTtcclxuXHRyZXR1cm4gaW5mbztcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2V0RnJvbUh0bWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgR2FsbGVyeUlkZW50aWZpZXIgPSByZXF1aXJlKFwiLi4vZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5cclxuXHJcbmNsYXNzIEdhbGxlcnlJbmZvIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWRlbnRpZmllciA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlID0gbnVsbDtcclxuXHRcdHRoaXMudGl0bGVPcmlnaW5hbCA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVVcGxvYWRlZCA9IG51bGw7XHJcblx0XHR0aGlzLmNhdGVnb3J5ID0gbnVsbDtcclxuXHRcdHRoaXMudXBsb2FkZXIgPSBudWxsO1xyXG5cdFx0dGhpcy5yYXRpbmdBdmVyYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5mYXZvcml0ZUNhdGVnb3J5ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLm1haW5UaHVtYm5haWxVcmwgPSBudWxsO1xyXG5cdFx0dGhpcy50aHVtYm5haWxTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsUm93cyA9IG51bGw7XHJcblx0XHR0aGlzLmZpbGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0dGhpcy52aXNpYmxlUmVhc29uID0gbnVsbDtcclxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy50cmFuc2xhdGVkID0gbnVsbDtcclxuXHRcdHRoaXMuYXJjaGl2ZXJLZXkgPSBudWxsO1xyXG5cdFx0dGhpcy50b3JyZW50Q291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzID0gbnVsbDtcclxuXHRcdHRoaXMudGFnc0hhdmVOYW1lc3BhY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XHJcblx0XHR0aGlzLm5ld2VyVmVyc2lvbnMgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2VTaXRlID0gbnVsbDtcclxuXHRcdHRoaXMuZGF0ZUdlbmVyYXRlZCA9IG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0R2FsbGVyeUlkZW50aWZpZXIsXHJcblx0R2FsbGVyeUluZm9cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5cclxuY29uc3Qgc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzID0gWyBcImJcIiwgXCJrYlwiLCBcIm1iXCIsIFwiZ2JcIiBdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBtYXRjaCA9IC9cXD8oPzoofFtcXHdcXFddKj8mKXA9KFtcXCtcXC1dP1xcZCspKT8vLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0pIHtcclxuXHRcdGNvbnN0IHBhZ2UgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0aWYgKCFOdW1iZXIuaXNOYU4ocGFnZSkpIHsgcmV0dXJuIHBhZ2U7IH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgaWRlbnRpZmllciA9IHR5cGVzLkdhbGxlcnlJZGVudGlmaWVyLmNyZWF0ZUZyb21VcmwodXJsKTtcclxuXHRpZiAoaWRlbnRpZmllciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYWdlID0gZ2V0R2FsbGVyeVBhZ2VGcm9tVXJsKHVybCk7XHJcblx0cmV0dXJuIHsgaWRlbnRpZmllciwgcGFnZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCeXRlc1NpemVGcm9tTGFiZWwobnVtYmVyLCBsYWJlbCkge1xyXG5cdGxldCBpID0gc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzLmluZGV4T2YobGFiZWwudG9Mb3dlckNhc2UoKSk7XHJcblx0aWYgKGkgPCAwKSB7IGkgPSAwOyB9XHJcblx0cmV0dXJuIE1hdGguZmxvb3IocGFyc2VGbG9hdChudW1iZXIpICogTWF0aC5wb3coMTAyNCwgaSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTb3VyY2VTaXRlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gL14oPzooPzpbYS16XVthLXowLTlcXCtcXC1cXC5dKjpcXC8qfFxcL3syLH0pKFteXFwvXSopKT8oXFwvP1tcXHdcXFddKikkL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModXJsKTtcclxuXHJcblx0aWYgKG1hdGNoICE9PSBudWxsICYmIG1hdGNoWzFdKSB7XHJcblx0XHRjb25zdCBob3N0ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcclxuXHRcdGlmIChob3N0LmluZGV4T2YoXCJleGhlbnRhaVwiKSA+PSAwKSB7IHJldHVybiBcImV4aGVudGFpXCI7IH1cclxuXHRcdGlmIChob3N0LmluZGV4T2YoXCJlLWhlbnRhaVwiKSA+PSAwKSB7IHJldHVybiBcImUtaGVudGFpXCI7IH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybCxcclxuXHRnZXRCeXRlc1NpemVGcm9tTGFiZWwsXHJcblx0Z2V0U291cmNlU2l0ZUZyb21VcmxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBhcGlTdHlsZSA9IHJlcXVpcmUoXCIuL3N0eWxlXCIpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZXNoZWV0KCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhclwiO1xyXG5cdGlmIChzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUvZ2FsbGVyeS1yaWdodC1zaWRlYmFyLmNzc1wiKTtcclxuXHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHcm91cENvbnRhaW5lcihwYXJlbnQpIHtcclxuXHRjb25zdCBpZCA9IFwieC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItY29udGFpbmVyXCI7XHJcblx0bGV0IG5vZGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihgLiR7aWR9YCk7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHtcclxuXHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0bm9kZS5jbGFzc05hbWUgPSBgZzIgZ3NwICR7aWR9YDtcclxuXHRcdHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcclxuXHJcblx0XHRjb25zdCBwID0gcGFyZW50LnBhcmVudE5vZGU7XHJcblx0XHRpZiAocCAhPT0gbnVsbCkge1xyXG5cdFx0XHRwLmNsYXNzTGlzdC5hZGQoXCJ4LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1jb250YWlucy1jb250YWluZXJcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBub2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rKGxhYmVsLCBvcmRlcikge1xyXG5cdGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2Q1XCIpO1xyXG5cdGlmIChwYXJlbnQgPT09IG51bGwpIHtcclxuXHRcdHJldHVybiB7IGxpbms6IG51bGwsIGxpbmtDb250YWluZXI6IG51bGwgfTtcclxuXHR9XHJcblxyXG5cdC8vIFN0eWxlXHJcblx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cclxuXHQvLyBDb250YWluZXJcclxuXHRjb25zdCBsaW5rR3JvdXAgPSBnZXRHcm91cENvbnRhaW5lcihwYXJlbnQpO1xyXG5cdGNvbnN0IGxpbmtDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGxpbmtDb250YWluZXIuY2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1lbnRyeVwiO1xyXG5cdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4ob3JkZXIpKSB7XHJcblx0XHRsaW5rQ29udGFpbmVyLnN0eWxlLm9yZGVyID0gYCR7b3JkZXJ9YDtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcblx0aW1nLnNyYyA9IGFwaVN0eWxlLmdldEFycm93SWNvblVybCgpO1xyXG5cdGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcblx0bGlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBcIikpO1xyXG5cclxuXHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0bGluay50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG5cdGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG5cdGxpbmtHcm91cC5hcHBlbmRDaGlsZChsaW5rQ29udGFpbmVyKTtcclxuXHJcblx0cmV0dXJuIHsgbGluaywgbGlua0NvbnRhaW5lciB9O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y3JlYXRlTGlua1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG92ZXJyaWRlQXR0cmlidXRlTmFtZSA9IFwiZGF0YS14LW92ZXJyaWRlLXBhZ2UtdHlwZVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldE92ZXJyaWRlKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZSgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHRyZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChkb2MsIGxvY2F0aW9uKSB7XHJcblx0Y29uc3Qgb3ZlcnJpZGVUeXBlID0gZ2V0T3ZlcnJpZGUoKTtcclxuXHRpZiAob3ZlcnJpZGVUeXBlICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gb3ZlcnJpZGVUeXBlO1xyXG5cdH1cclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9ZmF2Y2F0XVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZmF2b3JpdGVzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiLmdtIGgxI2duXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5XCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX291dGVyXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZXR0aW5nc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjdG9ycmVudGluZm9cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInRvcnJlbnRJbmZvXCI7XHJcblx0fVxyXG5cclxuXHRsZXQgbiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keT4uZD5wXCIpO1xyXG5cdGlmIChcclxuXHRcdChuICE9PSBudWxsICYmIC9nYWxsZXJ5XFxzK2hhc1xccytiZWVuXFxzK3JlbW92ZWQvaS50ZXN0KG4udGV4dENvbnRlbnQpKSB8fFxyXG5cdFx0ZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZXplX2RnYWxsZXJ5X3RhYmxlXCIpICE9PSBudWxsKSB7IC8vIGV6ZSByZXN1cnJlY3Rpb25cclxuXHRcdHJldHVybiBcImRlbGV0ZWRHYWxsZXJ5XCI7XHJcblx0fVxyXG5cclxuXHRuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRpZiAobiAhPT0gbnVsbCAmJiBsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgcCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRuLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PT0gbG9jYXRpb24uaHJlZiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCAzKSAhPT0gXCIvdC9cIiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCA1KSAhPT0gXCIvaW1nL1wiKSB7XHJcblx0XHRcdHJldHVybiBcInBhbmRhXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBVbmtub3duXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQsXHJcblx0Z2V0T3ZlcnJpZGUsXHJcblx0c2V0T3ZlcnJpZGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpc0RhcmsoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCB8fFxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIngtZm9yY2UtZGFya1wiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvY3VtZW50RGFya0ZsYWcoKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnJvd0ljb25VcmwoKSB7XHJcblx0cmV0dXJuIChpc0RhcmsoKSA/IFwiaHR0cHM6Ly9leGhlbnRhaS5vcmcvaW1nL21yLmdpZlwiIDogXCJodHRwczovL2VoZ3Qub3JnL2cvbXIuZ2lmXCIpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNEYXJrLFxyXG5cdHNldERvY3VtZW50RGFya0ZsYWcsXHJcblx0Z2V0QXJyb3dJY29uVXJsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1nYWxsZXJ5LWxpbmtzLXJpZ2h0LXNpZGViYXItY29udGFpbmVye21hcmdpbi10b3A6LTI1cHg7cGFkZGluZy1ib3R0b206MDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS54LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1lbnRyeXttYXJnaW4tdG9wOjI1cHh9ZGl2I2dyaWdodC54LWdhbGxlcnktbGlua3MtcmlnaHQtc2lkZWJhci1jb250YWlucy1jb250YWluZXJ7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTphdXRvfVwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHBhZ2VUeXBlID0gcmVxdWlyZShcIi4uL2FwaS9wYWdlLXR5cGVcIik7XHJcbmNvbnN0IHdpbmRvd01lc3NhZ2UgPSByZXF1aXJlKFwiLi4vd2luZG93LW1lc3NhZ2VcIik7XHJcbmNvbnN0IGdldEZyb21IdG1sID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbFwiKTtcclxuY29uc3QgcXVlcnlTdHJpbmcgPSByZXF1aXJlKFwiLi4vcXVlcnktc3RyaW5nXCIpO1xyXG5jb25zdCBHYWxsZXJ5SWRlbnRpZmllciA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5jb25zdCB0b0NvbW1vbkpzb24gPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby9jb21tb24tanNvblwiKS50b0NvbW1vbkpzb247XHJcblxyXG5sZXQgZG93bmxvYWREYXRhVXJsID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXR1cEdhbGxlcnlQYWdlKCkge1xyXG5cdGNyZWF0ZUdhbGxlcnlQYWdlRG93bmxvYWRMaW5rKCk7XHJcblxyXG5cdHdpbmRvd01lc3NhZ2UucmVnaXN0ZXJDb21tYW5kKFwiZ2FsbGVyeUluZm9SZXF1ZXN0XCIsIChlKSA9PiB7XHJcblx0XHRjb25zdCBkYXRhID0gZ2V0RnJvbUh0bWwoZG9jdW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRcdGlmIChkYXRhID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cdFx0d2luZG93TWVzc2FnZS5wb3N0KGUuc291cmNlLCBcImdhbGxlcnlJbmZvUmVzcG9uc2VcIiwgdG9Db21tb25Kc29uKGRhdGEpKTtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeVBhZ2VEb3dubG9hZExpbmsoKSB7XHJcblx0Y29uc3QgZ2FsbGVyeVJpZ2h0U2lkZWJhciA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1yaWdodC1zaWRlYmFyXCIpO1xyXG5cdGNvbnN0IGxpbmsgPSBnYWxsZXJ5UmlnaHRTaWRlYmFyLmNyZWF0ZUxpbmsoXCJNZXRhZGF0YSBKU09OXCIsIDApLmxpbms7XHJcblx0aWYgKGxpbmsgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJpbmZvLmpzb25cIik7XHJcblx0bGluay5ocmVmID0gXCIjXCI7XHJcblxyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uRG93bmxvYWRMaW5rQ2xpY2tlZCwgZmFsc2UpO1xyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImF1eGNsaWNrXCIsIG9uRG93bmxvYWRMaW5rQ2xpY2tlZCwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SW5mbygpIHtcclxuXHR0cnkge1xyXG5cdFx0cmV0dXJuIGdldEZyb21IdG1sKGRvY3VtZW50LCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRG93bmxvYWREYXRhVXJsKGluZm8pIHtcclxuXHRjb25zdCBpbmZvU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoaW5mbywgbnVsbCwgXCIgIFwiKTtcclxuXHRjb25zdCBibG9iID0gbmV3IEJsb2IoWyBpbmZvU3RyaW5nIF0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XHJcblx0cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRG93bmxvYWRMaW5rQ2xpY2tlZChlKSB7XHJcblx0LyoganNoaW50IC1XMDQwICovXHJcblx0aWYgKGRvd25sb2FkRGF0YVVybCA9PT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgaW5mbyA9IGdldEdhbGxlcnlJbmZvKCk7XHJcblx0XHRpZiAoaW5mbyA9PT0gbnVsbCkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBkb3dubG9hZCBkYXRhXCIpO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRkb3dubG9hZERhdGFVcmwgPSBjcmVhdGVEb3dubG9hZERhdGFVcmwodG9Db21tb25Kc29uKGluZm8pKTtcclxuXHRcdHRoaXMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBkb3dubG9hZERhdGFVcmwpO1xyXG5cdH1cclxuXHQvKiBqc2hpbnQgK1cwNDAgKi9cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldHVwVG9ycmVudFBhZ2UoKSB7XHJcblx0aWYgKCF3aW5kb3cub3BlbmVyKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBpZGVudGlmaWVyID0gZ2V0R2FsbGVyeUlkZW50aWZpZXJGcm9tVG9ycmVudFBhZ2VVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHR3aW5kb3dNZXNzYWdlLnJlZ2lzdGVyQ29tbWFuZChcImdhbGxlcnlJbmZvUmVzcG9uc2VcIiwgKGUsIGluZm8pID0+IHtcclxuXHRcdGlmIChkb3dubG9hZERhdGFVcmwgIT09IG51bGwgfHwgIWlzVmFsaWRJbmZvKGluZm8sIGlkZW50aWZpZXIpKSB7IHJldHVybjsgfVxyXG5cdFx0ZG93bmxvYWREYXRhVXJsID0gY3JlYXRlRG93bmxvYWREYXRhVXJsKGluZm8pO1xyXG5cdFx0Y3JlYXRlVG9ycmVudFBhZ2VEb3dubG9hZExpbmtzKGRvd25sb2FkRGF0YVVybCk7XHJcblx0fSk7XHJcblx0d2luZG93TWVzc2FnZS5wb3N0KHdpbmRvdy5vcGVuZXIsIFwiZ2FsbGVyeUluZm9SZXF1ZXN0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SWRlbnRpZmllckZyb21Ub3JyZW50UGFnZVVybCh1cmwpIHtcclxuXHRjb25zdCBwYXJhbXMgPSBxdWVyeVN0cmluZy5nZXRVcmxQYXJhbWV0ZXJzKHVybCk7XHJcblx0aWYgKCFwYXJhbXMuaGFzT3duUHJvcGVydHkoXCJnaWRcIikgfHwgIXBhcmFtcy5oYXNPd25Qcm9wZXJ0eShcInRcIikpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWQgPSBwYXJzZUludChwYXJhbXMuZ2lkLCAxMCk7XHJcblx0aWYgKE51bWJlci5pc05hTihpZCkpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0cmV0dXJuIG5ldyBHYWxsZXJ5SWRlbnRpZmllcihpZCwgcGFyYW1zLnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkSW5mbyhpbmZvLCBpZGVudGlmaWVyKSB7XHJcblx0Y29uc3QgZyA9IGluZm8uZ2FsbGVyeTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0ZyAhPT0gbnVsbCAmJiB0eXBlb2YoZykgPT09IFwib2JqZWN0XCIgJiZcclxuXHRcdGcuZ2lkID09PSBpZGVudGlmaWVyLmlkICYmXHJcblx0XHRnLnRva2VuID09PSBpZGVudGlmaWVyLnRva2VuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9ycmVudFBhZ2VEb3dubG9hZExpbmtzKHVybCkge1xyXG5cdGNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9ycmVudGluZm8gZm9ybSB0YWJsZT50Ym9keVwiKTtcclxuXHRmb3IgKGNvbnN0IHRhYmxlIG9mIHRhYmxlcykge1xyXG5cdFx0Y29uc3QgdG9ycmVudExpbmsgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidHI6bnRoLW9mLXR5cGUoMyk+dGRcIik7XHJcblx0XHRpZiAodG9ycmVudExpbmsgPT09IG51bGwpIHsgY29udGludWU7IH1cclxuXHJcblx0XHRjb25zdCB0ZXh0ID0gdG9ycmVudExpbmsudGV4dENvbnRlbnQ7XHJcblx0XHRjb25zdCB3aGl0ZXNwYWNlID0gL15cXHMqLy5leGVjKHRleHQpWzBdO1xyXG5cdFx0Y29uc3QgdG9ycmVudEZpbGVOYW1lID0gdGV4dC50cmltKCkucmVwbGFjZSgvXFwuW15cXC5dKiQvLCBcIlwiKTtcclxuXHJcblx0XHRjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG5cdFx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdGNlbGwuc2V0QXR0cmlidXRlKFwiY29sc3BhblwiLCBcIjVcIik7XHJcblxyXG5cdFx0aWYgKHdoaXRlc3BhY2UubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjZWxsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdoaXRlc3BhY2UpKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHRsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIGAke3RvcnJlbnRGaWxlTmFtZX0uaW5mby5qc29uYCk7XHJcblx0XHRsaW5rLmhyZWYgPSB1cmw7XHJcblx0XHRsaW5rLnRleHRDb250ZW50ID0gXCJNZXRhZGF0YSBKU09OXCI7XHJcblx0XHRjZWxsLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuXHRcdHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuXHRcdHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuXHRjb25zdCBjdXJyZW50UGFnZVR5cGUgPSBwYWdlVHlwZS5nZXQoZG9jdW1lbnQsIGxvY2F0aW9uKTtcclxuXHJcblx0c3dpdGNoIChjdXJyZW50UGFnZVR5cGUpIHtcclxuXHRcdGNhc2UgXCJnYWxsZXJ5XCI6XHJcblx0XHRcdHNldHVwR2FsbGVyeVBhZ2UoKTtcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInRvcnJlbnRJbmZvXCI6XHJcblx0XHRcdHNldHVwVG9ycmVudFBhZ2UoKTtcclxuXHRcdGJyZWFrO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVycyh1cmwpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRjb25zdCBtYXRjaCA9IC9eKFteI1xcP10qKShcXD9bXiNdKik/KCNbXFx3XFxXXSopPyQvLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMl0gJiYgbWF0Y2hbMl0ubGVuZ3RoID4gMSkge1xyXG5cdFx0Y29uc3QgcGF0dGVybiA9IC8oW149XSopKD86PShbXFx3XFxXXSopKT8vO1xyXG5cdFx0Zm9yIChjb25zdCBwYXJ0IG9mIG1hdGNoWzJdLnN1YnN0cigxKS5zcGxpdChcIiZcIikpIHtcclxuXHRcdFx0aWYgKHBhcnQubGVuZ3RoID09PSAwKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRcdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4uZXhlYyhwYXJ0KTtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBtYXRjaDJbMl07XHJcblx0XHRcdHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQobWF0Y2gyWzFdKV0gPSAodmFsdWUgIT09IHVuZGVmaW5lZCA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUXVlcnlQYXJhbWV0ZXIodXJsLCBwYXJhbWV0ZXJOYW1lKSB7XHJcblx0cmV0dXJuIHVybC5yZXBsYWNlKFxyXG5cdFx0bmV3IFJlZ0V4cChgKFsmXFxcXD9dKSR7cGFyYW1ldGVyTmFtZX0oPzooPzo9W14mXSopPygmfCQpKWApLFxyXG5cdFx0KG0wLCBtMSwgbTIpID0+IChtMSA9PT0gXCI/XCIgJiYgbTIgPyBcIj9cIiA6IG0yKSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRVcmxQYXJhbWV0ZXJzLFxyXG5cdHJlbW92ZVF1ZXJ5UGFyYW1ldGVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGlzUmVhZHlWYWx1ZSA9IGZhbHNlO1xyXG5sZXQgY2FsbGJhY2tzID0gbnVsbDtcclxubGV0IGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcbmNvbnN0IGNoZWNrSW50ZXJ2YWxSYXRlID0gMjUwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzSG9va2VkKCkge1xyXG5cdHJldHVybiBjYWxsYmFja3MgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvb2soKSB7XHJcblx0Y2FsbGJhY2tzID0gW107XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChjaGVja0lmUmVhZHksIGNoZWNrSW50ZXJ2YWxSYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5ob29rKCkge1xyXG5cdGNvbnN0IGNicyA9IGNhbGxiYWNrcztcclxuXHJcblx0Y2FsbGJhY2tzID0gbnVsbDtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbElkKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5cclxuXHRpbnZva2UoY2JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrcykge1xyXG5cdGZvciAobGV0IGNiIG9mIGNhbGxiYWNrcykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y2IoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlYWR5KCkge1xyXG5cdGlmIChpc1JlYWR5VmFsdWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdGlmIChpc0hvb2tlZCgpKSB7IHVuaG9vaygpOyB9XHJcblx0XHRpc1JlYWR5VmFsdWUgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlJlYWR5KCkge1xyXG5cdGlzUmVhZHkoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uUmVhZHkoY2FsbGJhY2spIHtcclxuXHRpZiAoaXNSZWFkeSgpKSB7XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCFpc0hvb2tlZCgpKSB7IGhvb2soKTsgfVxyXG5cclxuXHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvblJlYWR5OiBvblJlYWR5LFxyXG5cdGdldCBpc1JlYWR5KCkgeyByZXR1cm4gaXNSZWFkeSgpOyB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGFwaVN0eWxlID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRJZChpZCkge1xyXG5cdHJldHVybiBgJHtpZH0tc3R5bGVzaGVldGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0SWQoaWQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzU3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiAhIWdldFN0eWxlc2hlZXQoaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTdHlsZXNoZWV0KHNvdXJjZSwgaWQpIHtcclxuXHRpZiAoYXBpU3R5bGUgPT09IG51bGwpIHsgYXBpU3R5bGUgPSByZXF1aXJlKFwiLi9hcGkvc3R5bGVcIik7IH1cclxuXHRhcGlTdHlsZS5zZXREb2N1bWVudERhcmtGbGFnKCk7XHJcblxyXG5cdGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG5cdHN0eWxlLnRleHRDb250ZW50ID0gc291cmNlO1xyXG5cdGlmICh0eXBlb2YoaWQpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRzdHlsZS5pZCA9IGdldElkKGlkKTtcclxuXHR9XHJcblx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcblx0cmV0dXJuIHN0eWxlO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aGFzU3R5bGVzaGVldCxcclxuXHRnZXRTdHlsZXNoZWV0LFxyXG5cdGFkZFN0eWxlc2hlZXRcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgY29tbWFuZHMgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyQ29tbWFuZChjb21tYW5kTmFtZSwgY2FsbGJhY2spIHtcclxuXHRpZiAoY29tbWFuZHMgPT09IG51bGwpIHtcclxuXHRcdGNvbW1hbmRzID0ge307XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25XaW5kb3dNZXNzYWdlLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRjb21tYW5kc1tjb21tYW5kTmFtZV0gPSBjYWxsYmFjaztcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zdCh0YXJnZXRXaW5kb3csIGNvbW1hbmROYW1lLCBkYXRhKSB7XHJcblx0dGFyZ2V0V2luZG93LnBvc3RNZXNzYWdlKHtcclxuXHRcdHhEYXRhOiB7IGNvbW1hbmQ6IGNvbW1hbmROYW1lLCBkYXRhOiBkYXRhIH1cclxuXHR9LCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25XaW5kb3dNZXNzYWdlKGUpIHtcclxuXHRpZiAoZS5vcmlnaW4gIT09IHdpbmRvdy5vcmlnaW4pIHsgcmV0dXJuOyB9XHJcblxyXG5cdGxldCBkYXRhID0gZS5kYXRhO1xyXG5cdGlmIChkYXRhID09PSBudWxsIHx8IHR5cGVvZihkYXRhKSAhPT0gXCJvYmplY3RcIikgeyByZXR1cm47IH1cclxuXHJcblx0ZGF0YSA9IGRhdGEueERhdGE7XHJcblx0aWYgKGRhdGEgPT09IG51bGwgfHwgdHlwZW9mKGRhdGEpICE9PSBcIm9iamVjdFwiKSB7IHJldHVybjsgfVxyXG5cdGlmICh0eXBlb2YoZGF0YS5jb21tYW5kKSAhPT0gXCJzdHJpbmdcIikgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgY2FsbGJhY2sgPSBjb21tYW5kc1tkYXRhLmNvbW1hbmRdO1xyXG5cdGlmICh0eXBlb2YoY2FsbGJhY2spICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNhbGxiYWNrKGUsIGRhdGEuZGF0YSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRyZWdpc3RlckNvbW1hbmQsXHJcblx0cG9zdFxyXG59O1xyXG4iXX0=
