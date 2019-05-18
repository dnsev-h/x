// ==UserScript==
// @name        x/gallery-metadata
// @version     1.0.0
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

function getFromHtml(html) {
	const link = html.querySelector(".ptt td.ptds>a[href],.ptt td.ptdd>a[href]");
	if (link === null) { return null; }

	const idPage = utils.getGalleryIdentifierAndPageFromUrl(link.getAttribute("href") || "");
	if (idPage === null) { return null; }

	const info = new types.GalleryInfo();
	info.identifier = idPage.identifier;
	info.currentPage = idPage.page;
	info.source = "html";
	populateGalleryInfoFromHtml(info,html);
	info.dateGenerated = Date.now();
	return info;
}


module.exports = getFromHtml;

},{"./types":2,"./utils":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"./types":2}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const pageType = require("../api/page-type");

let downloadDataUrl = null;


function setupDownloadLink() {
	const isDark = require("../style").isDark();

	const parent = document.querySelector("#gd5");
	if (parent === null) { return; }

	const linkP = document.createElement("p");
	linkP.className = "g2 gsp";

	const img = document.createElement("img");
	img.src = (isDark ? "https://exhentai.org/img/mr.gif" : "https://ehgt.org/g/mr.gif");
	linkP.appendChild(img);

	linkP.appendChild(document.createTextNode(" "));

	const link = document.createElement("a");
	link.href = "#"
	link.textContent = "Metadata JSON";
	link.setAttribute("download", "info.json");
	linkP.appendChild(link);

	link.addEventListener("click", onDownloadLinkClicked, false);
	link.addEventListener("auxclick", onDownloadLinkClicked, false);

	parent.appendChild(linkP);
}

function createDownloadDataUrl(link) {
	const getGalleryInfo = require("../api/gallery-info/get-from-html");
	let info = null;
	try {
		info = getGalleryInfo(document);
	} catch (e) {
		console.error(e);
	}
	if (info === null) { return null; }

	const infoString = JSON.stringify(info.toCommonJson(), null, "  ");
	const blob = new Blob([ infoString ], { type: "application/json" });
	const url = URL.createObjectURL(blob);

	link.setAttribute("href", url);

	return url;
}

function onDownloadLinkClicked(e) {
	if (downloadDataUrl === null) {
		downloadDataUrl = createDownloadDataUrl(this);
		if (downloadDataUrl === null) {
			console.error("Failed to create download data");
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
	}
}


function main() {
	const currentPageType = pageType.get(document, location);
	if (currentPageType !== "gallery") { return; }

	setupDownloadLink();
}


ready.onReady(main);

},{"../api/gallery-info/get-from-html":1,"../api/page-type":4,"../ready":6,"../style":7}],6:[function(require,module,exports){
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

function getId(id) {
	return `${id}-stylesheet`;
}

function isDark() {
	return (window.location.hostname.indexOf("exhentai") >= 0);
}

function getStylesheet(id) {
	return document.getElementById(getId(id));
}

function hasStylesheet(id) {
	return !!getStylesheet(id);
}

function addStylesheet(source, id) {
	document.documentElement.classList.toggle("x-is-dark", isDark());

	const style = document.createElement("style");
	style.textContent = source;
	if (typeof(id) === "string") {
		style.id = getId(id);
	}
	document.head.appendChild(style);
	return style;
}


module.exports = {
	isDark,
	hasStylesheet,
	getStylesheet,
	addStylesheet
};

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby9nZXQtZnJvbS1odG1sLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdHlwZXMuanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby91dGlscy5qcyIsInNyYy9hcGkvcGFnZS10eXBlLmpzIiwic3JjL2dhbGxlcnktbWV0YWRhdGEvbWFpbi5qcyIsInNyYy9yZWFkeS5qcyIsInNyYy9zdHlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDc3NVcmwodXJsU3RyaW5nKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC91cmxcXHMqXFwoXFxzKihbJ1wiXSk/LztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh1cmxTdHJpbmcpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBxdW90ZSA9IG1hdGNoWzFdIHx8IFwiXCI7XHJcblx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAtIHF1b3RlLmxlbmd0aCk7XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4yID0gbmV3IFJlZ0V4cChgKCR7cXVvdGV9KVxcXFxzKlxcXFwpXFxcXHMqJGApO1xyXG5cdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4yLmV4ZWModXJsU3RyaW5nKTtcclxuXHRpZiAobWF0Y2gyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHVybCA9IHVybFN0cmluZy5zdWJzdHIoMCwgbWF0Y2gyLmluZGV4ICsgbWF0Y2gyWzFdLmxlbmd0aCk7XHJcblxyXG5cdGxldCB1cmwyID0gdXJsO1xyXG5cdGlmICghcXVvdGUpIHtcclxuXHRcdHVybDIgPSB1cmwucmVwbGFjZSgvXCIvZywgXCJcXFxcXFxcIlwiKTtcclxuXHRcdHVybDIgPSBgXCIke3VybDJ9XCJgO1xyXG5cdH0gZWxzZSBpZiAocXVvdGUgPT09IFwiJ1wiKSB7XHJcblx0XHR1cmwyID0gdXJsLnN1YnN0cigxLCB1cmwubGVuZ3RoIC0gMik7XHJcblx0XHR1cmwyID0gdXJsMi5yZXBsYWNlKC9cXFxcJy9nLCBcIidcIik7XHJcblx0XHR1cmwyID0gYFwiJHt1cmwyfVwiYDtcclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gSlNPTi5wYXJzZSh1cmwyKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRyZXR1cm4gdXJsO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZXN0YW1wKHRleHQpIHtcclxuXHRjb25zdCBtYXRjaCA9IC8oWzAtOV0rKS0oWzAtOV0rKS0oWzAtOV0rKVxccysoWzAtOV0rKTooWzAtOV0rKS8uZXhlYyh0ZXh0KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0cmV0dXJuIERhdGUuVVRDKFxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbMV0sIDEwKSwgLy8geWVhclxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbMl0sIDEwKSAtIDEsIC8vIG1vbnRoXHJcblx0XHRwYXJzZUludChtYXRjaFszXSwgMTApLCAvLyBkYXlcclxuXHRcdHBhcnNlSW50KG1hdGNoWzRdLCAxMCksIC8vIGhvdXJzXHJcblx0XHRwYXJzZUludChtYXRjaFs1XSwgMTApLCAvLyBtaW51dGVzXHJcblx0XHQwLCAvLyBzZWNvbmRzXHJcblx0XHQwKTsgLy8gbWlsbGlzZWNvbmRzXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUaXRsZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnblwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBub2RlLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaXRsZU9yaWdpbmFsKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dqXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IG5vZGUudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1haW5UaHVtYm5haWxVcmwoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2QxPmRpdlwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBnZXRDc3NVcmwobm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENhdGVnb3J5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkYz5kaXZbb25jbGlja11cIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9bJ1wiXS4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pP1snXCJdLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcIm9uY2xpY2tcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVwbG9hZGVyKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkbj5hXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXi4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pPyQvO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gKG1hdGNoWzFdLnNwbGl0KFwiL1wiKVsxXSB8fCBcIlwiKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYXRpbmdDb3VudChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfY291bnRcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBwYXJzZUludChub2RlLnRleHRDb250ZW50LnRyaW0oKSwgMTApO1xyXG5cdHJldHVybiAoTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhdGluZ0F2ZXJhZ2UoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nX2xhYmVsXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvYXZlcmFnZTpcXHMqKFswLTlcXC5dKykvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcclxuXHRyZXR1cm4gKE51bWJlci5pc05hTih2YWx1ZSkgPyBudWxsIDogdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYXZvcml0ZUNvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2ZhdmNvdW50XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxzKihbMC05XSt8b25jZSkvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgbWF0Y2gxID0gbWF0Y2hbMV07XHJcblx0cmV0dXJuIChtYXRjaDEudG9Mb3dlckNhc2UoKSA9PT0gXCJvbmNlXCIgPyAxIDogcGFyc2VJbnQobWF0Y2gxLCAxMCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYXZvcml0ZUNhdGVnb3J5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2Zhdj5kaXYuaVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikgfHwgXCJcIjtcclxuXHRjb25zdCBwYXR0ZXJuID0gL2JhY2tncm91bmQtcG9zaXRpb25cXHMqOlxccypcXGQrKD86cHgpP1xccysoLT9cXGQrKSg/OnB4KS87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiKTtcclxuXHRjb25zdCBpbmRleCA9IChtYXRjaCAhPT0gbnVsbCkgP1xyXG5cdFx0TWF0aC5mbG9vcigoTWF0aC5hYnMocGFyc2VJbnQobWF0Y2hbMV0sIDEwKSkgLSAyKSAvIDE5KSA6XHJcblx0XHQtMTtcclxuXHJcblx0cmV0dXJuIHsgaW5kZXgsIHRpdGxlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRodW1ibmFpbFNpemUoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkbzQ+Lm5vc2VsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPCAyKSB7IHJldHVybiBudWxsOyB9XHJcblx0cmV0dXJuIChub2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aHNcIikgPyBcIm5vcm1hbFwiIDogXCJsYXJnZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGh1bWJuYWlsUm93cyhodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RvMj4ubm9zZWxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxzKihbMC05XSspLztcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInRoc1wiKSkge1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYWdzKGh0bWwpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gLyguKyk6LztcclxuXHRjb25zdCBncm91cHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGFnbGlzdCB0clwiKTtcclxuXHRjb25zdCB0YWdzID0ge307XHJcblxyXG5cdGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSB7XHJcblx0XHRjb25zdCB0ZHMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XHJcblx0XHRpZiAodGRzLmxlbmd0aCA9PT0gMCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHRkc1swXS50ZXh0Q29udGVudCk7XHJcblx0XHRjb25zdCBuYW1lc3BhY2UgPSAobWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXS50cmltKCkgOiBcIlwiKTtcclxuXHJcblx0XHRsZXQgbmFtZXNwYWNlVGFncztcclxuXHRcdGlmICh0YWdzLmhhc093blByb3BlcnR5KG5hbWVzcGFjZSkpIHtcclxuXHRcdFx0bmFtZXNwYWNlVGFncyA9IHRhZ3NbbmFtZXNwYWNlXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MgPSBbXTtcclxuXHRcdFx0dGFnc1tuYW1lc3BhY2VdID0gbmFtZXNwYWNlVGFncztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0YWdEaXZzID0gdGRzW3Rkcy5sZW5ndGggLSAxXS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xyXG5cdFx0Zm9yIChjb25zdCBkaXYgb2YgdGFnRGl2cykge1xyXG5cdFx0XHRjb25zdCBsaW5rID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xyXG5cdFx0XHRpZiAobGluayA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdFx0Y29uc3QgdGFnID0gbGluay50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MucHVzaCh0YWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRhZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERldGFpbHNOb2RlcyhodG1sKSB7XHJcblx0cmV0dXJuIGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZGQgdHJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGVVcGxvYWRlZChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gZ2V0VGltZXN0YW1wKG5vZGUudGV4dENvbnRlbnQpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVJbmZvKGRldGFpbHNOb2Rlcykge1xyXG5cdGxldCB2aXNpYmxlID0gdHJ1ZTtcclxuXHRsZXQgdmlzaWJsZVJlYXNvbiA9IG51bGw7XHJcblxyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoID4gMikge1xyXG5cdFx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1syXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0XHRpZiAobm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBwYXR0ZXJuID0gL25vXFxzK1xcKCguKz8pXFwpL2k7XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0XHR2aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0dmlzaWJsZVJlYXNvbiA9IG1hdGNoWzFdLnRyaW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdmlzaWJsZSwgdmlzaWJsZVJlYXNvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYW5ndWFnZUluZm8oZGV0YWlsc05vZGVzKSB7XHJcblx0bGV0IGxhbmd1YWdlID0gbnVsbDtcclxuXHRsZXQgdHJhbnNsYXRlZCA9IGZhbHNlO1xyXG5cclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA+IDMpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbM10ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgdGV4dE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcblx0XHRcdGlmICh0ZXh0Tm9kZSAhPT0gbnVsbCAmJiB0ZXh0Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcclxuXHRcdFx0XHRsYW5ndWFnZSA9IHRleHROb2RlLm5vZGVWYWx1ZS50cmltKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHRyTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5oYWxwXCIpO1xyXG5cdFx0XHR0cmFuc2xhdGVkID0gKHRyTm9kZSAhPT0gbnVsbCAmJiB0ck5vZGUudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT0gXCJ0clwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IGxhbmd1YWdlLCB0cmFuc2xhdGVkIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwcHJveGltYXRlVG90YWxGaWxlU2l6ZShkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSA0KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbNF0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKFswLTlcXC5dKylcXHMqKFxcdyspL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IHV0aWxzLmdldEJ5dGVzU2l6ZUZyb21MYWJlbChtYXRjaFsxXSwgbWF0Y2hbMl0pIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpbGVDb3VudChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSA1KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbNV0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKFswLTksXSspXFxzKnBhZ2VzL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IHBhcnNlSW50KG1hdGNoWzFdLnJlcGxhY2UoLywvZywgXCJcIiksIDEwKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gMSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzFdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0Mj5hXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKGluZm8gIT09IG51bGwgPyBpbmZvLmlkZW50aWZpZXIgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmV3ZXJWZXJzaW9ucyhodG1sKSB7XHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2duZD5hXCIpO1xyXG5cclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IGluZm8gPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRcdGlmIChpbmZvID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0Y29uc3QgZ2FsbGVyeUluZm8gPSB7XHJcblx0XHRcdGlkZW50aWZpZXI6IGluZm8uaWRlbnRpZmllcixcclxuXHRcdFx0bmFtZTogbm9kZS50ZXh0Q29udGVudC50cmltKCksXHJcblx0XHRcdGRhdGVVcGxvYWRlZDogbnVsbFxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAobm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRnYWxsZXJ5SW5mby5kYXRlVXBsb2FkZWQgPSBnZXRUaW1lc3RhbXAobm9kZS5uZXh0U2libGluZy50ZXh0Q29udGVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVzdWx0cy5wdXNoKGdhbGxlcnlJbmZvKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb3JyZW50Q291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkNSAuZzI+YVwiKTtcclxuXHRjb25zdCBwYXR0ZXJuID0gL1xcYnRvcnJlbnRcXHMrZG93bmxvYWRcXHMqXFwoXFxzKihcXGQrKVxccypcXCkvaTtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFyY2hpdmVyS2V5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZDUgLmcyPmFcIik7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXGJhcmNoaXZlXFxzK2Rvd25sb2FkXFxiL2k7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBwYXR0ZXJuMiA9IC8mb3I9KFteJ1wiXSopWydcIl0vO1xyXG5cdFx0XHRjb25zdCBtYXRjaDIgPSBwYXR0ZXJuMi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwib25jbGlja1wiKSB8fCBcIlwiKTtcclxuXHRcdFx0cmV0dXJuIChtYXRjaDIgIT09IG51bGwgPyBtYXRjaDJbMV0gOiBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUh0bWwoaW5mbywgaHRtbCkge1xyXG5cdC8vIEdlbmVyYWxcclxuXHRpbmZvLnRpdGxlID0gZ2V0VGl0bGUoaHRtbCk7XHJcblx0aW5mby50aXRsZU9yaWdpbmFsID0gZ2V0VGl0bGVPcmlnaW5hbChodG1sKTtcclxuXHRpbmZvLm1haW5UaHVtYm5haWxVcmwgPSBnZXRNYWluVGh1bWJuYWlsVXJsKGh0bWwpO1xyXG5cdGluZm8uY2F0ZWdvcnkgPSBnZXRDYXRlZ29yeShodG1sKTtcclxuXHRpbmZvLnVwbG9hZGVyID0gZ2V0VXBsb2FkZXIoaHRtbCk7XHJcblxyXG5cdGluZm8ucmF0aW5nQ291bnQgPSBnZXRSYXRpbmdDb3VudChodG1sKTtcclxuXHRpbmZvLnJhdGluZ0F2ZXJhZ2UgPSBnZXRSYXRpbmdBdmVyYWdlKGh0bWwpO1xyXG5cclxuXHRpbmZvLmZhdm9yaXRlQ291bnQgPSBnZXRGYXZvcml0ZUNvdW50KGh0bWwpO1xyXG5cdGluZm8uZmF2b3JpdGVDYXRlZ29yeSA9IGdldEZhdm9yaXRlQ2F0ZWdvcnkoaHRtbCk7XHJcblxyXG5cdGluZm8udGh1bWJuYWlsU2l6ZSA9IGdldFRodW1ibmFpbFNpemUoaHRtbCk7XHJcblx0aW5mby50aHVtYm5haWxSb3dzID0gZ2V0VGh1bWJuYWlsUm93cyhodG1sKTtcclxuXHJcblx0aW5mby5uZXdlclZlcnNpb25zID0gZ2V0TmV3ZXJWZXJzaW9ucyhodG1sKTtcclxuXHJcblx0aW5mby50b3JyZW50Q291bnQgPSBnZXRUb3JyZW50Q291bnQoaHRtbCk7XHJcblx0aW5mby5hcmNoaXZlcktleSA9IGdldEFyY2hpdmVyS2V5KGh0bWwpO1xyXG5cclxuXHQvLyBEZXRhaWxzXHJcblx0Y29uc3QgZGV0YWlsc05vZGVzID0gZ2V0RGV0YWlsc05vZGVzKGh0bWwpO1xyXG5cclxuXHRpbmZvLmRhdGVVcGxvYWRlZCA9IGdldERhdGVVcGxvYWRlZChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRpbmZvLnBhcmVudCA9IGdldFBhcmVudChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRjb25zdCB2aXNpYmxlSW5mbyA9IGdldFZpc2libGVJbmZvKGRldGFpbHNOb2Rlcyk7XHJcblx0aW5mby52aXNpYmxlID0gdmlzaWJsZUluZm8udmlzaWJsZTtcclxuXHRpbmZvLnZpc2libGVSZWFzb24gPSB2aXNpYmxlSW5mby52aXNpYmxlUmVhc29uO1xyXG5cclxuXHRjb25zdCBsYW5ndWFnZUluZm8gPSBnZXRMYW5ndWFnZUluZm8oZGV0YWlsc05vZGVzKTtcclxuXHRpbmZvLmxhbmd1YWdlID0gbGFuZ3VhZ2VJbmZvLmxhbmd1YWdlO1xyXG5cdGluZm8udHJhbnNsYXRlZCA9IGxhbmd1YWdlSW5mby50cmFuc2xhdGVkO1xyXG5cclxuXHRpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IGdldEFwcHJveGltYXRlVG90YWxGaWxlU2l6ZShkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRpbmZvLmZpbGVDb3VudCA9IGdldEZpbGVDb3VudChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHQvLyBUYWdzXHJcblx0aW5mby50YWdzID0gZ2V0VGFncyhodG1sKTtcclxuXHRpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RnJvbUh0bWwoaHRtbCkge1xyXG5cdGNvbnN0IGxpbmsgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIucHR0IHRkLnB0ZHM+YVtocmVmXSwucHR0IHRkLnB0ZGQ+YVtocmVmXVwiKTtcclxuXHRpZiAobGluayA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpZFBhZ2UgPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRpZiAoaWRQYWdlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSBuZXcgdHlwZXMuR2FsbGVyeUluZm8oKTtcclxuXHRpbmZvLmlkZW50aWZpZXIgPSBpZFBhZ2UuaWRlbnRpZmllcjtcclxuXHRpbmZvLmN1cnJlbnRQYWdlID0gaWRQYWdlLnBhZ2U7XHJcblx0aW5mby5zb3VyY2UgPSBcImh0bWxcIjtcclxuXHRwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUh0bWwoaW5mbyxodG1sKTtcclxuXHRpbmZvLmRhdGVHZW5lcmF0ZWQgPSBEYXRlLm5vdygpO1xyXG5cdHJldHVybiBpbmZvO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXRGcm9tSHRtbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5SWRlbnRpZmllciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIHRva2VuKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRva2VuID0gdG9rZW47XHJcblx0fVxyXG5cclxuXHR0b0NvbW1vbkpzb24oKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRnaWQ6IHRoaXMuaWQsXHJcblx0XHRcdHRva2VuOiB0aGlzLnRva2VuXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmNsYXNzIEdhbGxlcnlJbmZvIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWRlbnRpZmllciA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlID0gbnVsbDtcclxuXHRcdHRoaXMudGl0bGVPcmlnaW5hbCA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVVcGxvYWRlZCA9IG51bGw7XHJcblx0XHR0aGlzLmNhdGVnb3J5ID0gbnVsbDtcclxuXHRcdHRoaXMudXBsb2FkZXIgPSBudWxsO1xyXG5cdFx0dGhpcy5yYXRpbmdBdmVyYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5mYXZvcml0ZUNhdGVnb3J5ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLm1haW5UaHVtYm5haWxVcmwgPSBudWxsXHJcblx0XHR0aGlzLnRodW1ibmFpbFNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy50aHVtYm5haWxSb3dzID0gbnVsbDtcclxuXHRcdHRoaXMuZmlsZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblx0XHR0aGlzLnZpc2libGVSZWFzb24gPSBudWxsO1xyXG5cdFx0dGhpcy5sYW5ndWFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcmNoaXZlcktleSA9IG51bGw7XHJcblx0XHR0aGlzLnRvcnJlbnRDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3MgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzSGF2ZU5hbWVzcGFjZSA9IG51bGw7XHJcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHRcdHRoaXMubmV3ZXJWZXJzaW9ucyA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZSA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVHZW5lcmF0ZWQgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0dG9Db21tb25Kc29uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Z2FsbGVyeTogdG9Db21tb25Kc29uT3JEZWZhdWx0KHRoaXMuaWRlbnRpZmllciwgbnVsbCkgfHwgbmV3IEdhbGxlcnlJZGVudGlmaWVyKDAsIFwiXCIpLnRvQ29tbW9uSnNvbigpLFxyXG5cdFx0XHR0aXRsZTogdG9TdHJpbmdPckRlZmF1bHQodGhpcy50aXRsZSwgXCJcIiksXHJcblx0XHRcdHRpdGxlX29yaWdpbmFsOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnRpdGxlT3JpZ2luYWwsIFwiXCIpLFxyXG5cdFx0XHRkYXRlX3VwbG9hZGVkOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLmRhdGVVcGxvYWRlZCwgXCJcIiksXHJcblx0XHRcdGNhdGVnb3J5OiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLmNhdGVnb3J5LCBcIlwiKSxcclxuXHRcdFx0dXBsb2FkZXI6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMudXBsb2FkZXIsIFwiXCIpLFxyXG5cdFx0XHRyYXRpbmc6IHtcclxuXHRcdFx0XHRhdmVyYWdlOiB0b051bWJlck9yRGVmYXVsdCh0aGlzLnJhdGluZ0F2ZXJhZ2UsIDApLFxyXG5cdFx0XHRcdGNvdW50OiB0b051bWJlck9yRGVmYXVsdCh0aGlzLnJhdGluZ0NvdW50LCAwKSxcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmF2b3JpdGVzOiB7XHJcblx0XHRcdFx0Y2F0ZWdvcnk6ICh0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkgIT09IG51bGwgPyB0b051bWJlck9yRGVmYXVsdCh0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkuaW5kZXgsIC0xKSA6IC0xKSxcclxuXHRcdFx0XHRjYXRlZ29yeV90aXRsZTogKHRoaXMuZmF2b3JpdGVDYXRlZ29yeSAhPT0gbnVsbCA/IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMuZmF2b3JpdGVDYXRlZ29yeS50aXRsZSwgXCJcIikgOiBcIlwiKSxcclxuXHRcdFx0XHRjb3VudDogdG9OdW1iZXJPckRlZmF1bHQodGhpcy5mYXZvcml0ZUNvdW50LCAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXJlbnQ6IHRvQ29tbW9uSnNvbk9yRGVmYXVsdCh0aGlzLnBhcmVudCwgbnVsbCksXHJcblx0XHRcdG5ld2VyX3ZlcnNpb25zOiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKHRoaXMubmV3ZXJWZXJzaW9ucyksXHJcblx0XHRcdHRodW1ibmFpbDogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5tYWluVGh1bWJuYWlsVXJsLCBcIlwiKSxcclxuXHRcdFx0dGh1bWJuYWlsX3NpemU6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMudGh1bWJuYWlsU2l6ZSwgXCJcIiksXHJcblx0XHRcdHRodW1ibmFpbF9yb3dzOiB0b051bWJlck9yRGVmYXVsdCh0aGlzLnRodW1ibmFpbFJvd3MsIDApLFxyXG5cdFx0XHRpbWFnZV9jb3VudDogdG9OdW1iZXJPckRlZmF1bHQodGhpcy5maWxlQ291bnQsIDApLFxyXG5cdFx0XHRpbWFnZXNfcmVzaXplZDogZmFsc2UsXHJcblx0XHRcdHRvdGFsX2ZpbGVfc2l6ZV9hcHByb3g6IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMuYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplLCAwKSxcclxuXHRcdFx0dmlzaWJsZTogKHRoaXMudmlzaWJsZSA9PT0gdHJ1ZSksXHJcblx0XHRcdHZpc2libGVfcmVhc29uOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnZpc2libGVSZWFzb24sIFwiXCIpLFxyXG5cdFx0XHRsYW5ndWFnZTogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5sYW5ndWFnZSwgXCJcIiksXHJcblx0XHRcdHRyYW5zbGF0ZWQ6ICh0aGlzLnRyYW5zbGF0ZWQgPT09IHRydWUpLFxyXG5cdFx0XHR0YWdzOiB0YWdzVG9Db21tb25Kc29uKHRoaXMudGFncyksXHJcblx0XHRcdC8vIE5ld1xyXG5cdFx0XHR0YWdzX2hhdmVfbmFtZXNwYWNlOiAodGhpcy50YWdzSGF2ZU5hbWVzcGFjZSA9PT0gdHJ1ZSksXHJcblx0XHRcdHRvcnJlbnRfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMudG9ycmVudENvdW50LCAwKSxcclxuXHRcdFx0YXJjaGl2ZXJfa2V5OiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLmFyY2hpdmVyS2V5LCBudWxsKSxcclxuXHRcdFx0c291cmNlOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnNvdXJjZSwgbnVsbCksXHJcblx0XHRcdGRhdGVfZ2VuZXJhdGVkOiB0b051bWJlck9yRGVmYXVsdCh0aGlzLmRhdGVHZW5lcmF0ZWQsIDApXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvU3RyaW5nT3JEZWZhdWx0KHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcclxuXHRyZXR1cm4gdHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlIDogZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b051bWJlck9yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIE51bWJlci5pc05hTih2YWx1ZSkgPyBkZWZhdWx0VmFsdWUgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9Db21tb25Kc29uT3JEZWZhdWx0KG9iaiwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIChvYmogJiYgdHlwZW9mKG9iai50b0NvbW1vbkpzb24pID09PSBcImZ1bmN0aW9uXCIpID9cclxuXHRcdG9iai50b0NvbW1vbkpzb24oKSA6XHJcblx0XHRkZWZhdWx0VmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld2VyVmVyc2lvbnNUb0NvbW1vbkpzb24obmV3ZXJWZXJzaW9ucykge1xyXG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cdGlmIChBcnJheS5pc0FycmF5KG5ld2VyVmVyc2lvbnMpKSB7XHJcblx0XHRmb3IgKGNvbnN0IG5ld2VyVmVyc2lvbiBvZiBuZXdlclZlcnNpb25zKSB7XHJcblx0XHRcdHJlc3VsdC5wdXNoKHtcclxuXHRcdFx0XHRnYWxsZXJ5OiB0b0NvbW1vbkpzb25PckRlZmF1bHQobmV3ZXJWZXJzaW9uLmlkZW50aWZpZXIsIG51bGwpIHx8IG5ldyBHYWxsZXJ5SWRlbnRpZmllcigwLCBcIlwiKS50b0NvbW1vbkpzb24oKSxcclxuXHRcdFx0XHRuYW1lOiB0b1N0cmluZ09yRGVmYXVsdChuZXdlclZlcnNpb24ubmFtZSksXHJcblx0XHRcdFx0ZGF0ZV91cGxvYWRlZDogdG9OdW1iZXJPckRlZmF1bHQobmV3ZXJWZXJzaW9uLmRhdGVVcGxvYWRlZClcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhZ3NUb0NvbW1vbkpzb24odGFncykge1xyXG5cdGNvbnN0IHJlc3VsdCA9IHt9O1xyXG5cdGlmICh0YWdzICE9PSBudWxsICYmIHR5cGVvZih0YWdzKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Zm9yIChjb25zdCBuYW1lc3BhY2UgaW4gdGFncykge1xyXG5cdFx0XHRjb25zdCB0YWdMaXN0ID0gdGFnc1tuYW1lc3BhY2VdO1xyXG5cdFx0XHRyZXN1bHRbbmFtZXNwYWNlXSA9IFsuLi50YWdMaXN0XTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyLFxyXG5cdEdhbGxlcnlJbmZvLFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcblxyXG5jb25zdCBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMgPSBbIFwiYlwiLCBcImtiXCIsIFwibWJcIiwgXCJnYlwiIF07XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBtYXRjaCA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXRoID0gbWF0Y2hbMV0ucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgXCJcIikucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xyXG5cdGlmIChwYXRoWzBdICE9PSBcImdcIiB8fCBwYXRoLmxlbmd0aCA8IDMpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWRlbnRpZmllciA9IG5ldyB0eXBlcy5HYWxsZXJ5SWRlbnRpZmllcihwYXJzZUludChwYXRoWzFdLCAxMCksIHBhdGhbMl0pO1xyXG5cdGlmIChOdW1iZXIuaXNOYU4oaWRlbnRpZmllci5pZCkpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0bGV0IHBhZ2UgPSBudWxsO1xyXG5cdGlmIChtYXRjaFsyXSkge1xyXG5cdFx0Y29uc3QgbWF0Y2gyID0gL1tcXD9cXCZdcD0oW1xcK1xcLV0/XFxkKykvLmV4ZWMobWF0Y2hbMl0pO1xyXG5cdFx0aWYgKG1hdGNoMiAhPT0gbnVsbCkge1xyXG5cdFx0XHRwYWdlID0gcGFyc2VJbnQobWF0Y2gyWzFdLCAxMCk7XHJcblx0XHRcdGlmIChOdW1iZXIuaXNOYU4ocGFnZSkpIHsgcGFnZSA9IG51bGw7IH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IGlkZW50aWZpZXIsIHBhZ2UgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Qnl0ZXNTaXplRnJvbUxhYmVsKG51bWJlciwgbGFiZWwpIHtcclxuXHRsZXQgaSA9IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcy5pbmRleE9mKGxhYmVsLnRvTG93ZXJDYXNlKCkpO1xyXG5cdGlmIChpIDwgMCkgeyBpID0gMDsgfVxyXG5cdHJldHVybiBNYXRoLmZsb29yKHBhcnNlRmxvYXQobnVtYmVyKSAqIE1hdGgucG93KDEwMjQsIGkpKTtcclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsLFxyXG5cdGdldEJ5dGVzU2l6ZUZyb21MYWJlbFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGdldFBhZ2VUeXBlKGRvYywgbG9jYXRpb24pIHtcclxuXHRsZXQgbjtcclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGVsc2UgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nZmF2Y2F0J11cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImZhdm9yaXRlc1wiO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9vdXRlclwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2V0dGluZ3NcIjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoXHJcblx0XHQobiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keT4uZD5wXCIpKSAhPT0gbnVsbCAmJlxyXG5cdFx0L2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLmV4ZWMobi50ZXh0Q29udGVudC50cmltKCkpICE9PSBudWxsXHJcblx0KSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5X2RlbGV0ZWRcIjtcclxuXHR9XHJcblx0ZWxzZSBpZiAoKG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpKSAhPT0gbnVsbCAmJiBsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgcCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0aWYgKG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmIHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmIHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldDogZ2V0UGFnZVR5cGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCByZWFkeSA9IHJlcXVpcmUoXCIuLi9yZWFkeVwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuXHJcbmxldCBkb3dubG9hZERhdGFVcmwgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldHVwRG93bmxvYWRMaW5rKCkge1xyXG5cdGNvbnN0IGlzRGFyayA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKS5pc0RhcmsoKTtcclxuXHJcblx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnZDVcIik7XHJcblx0aWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgbGlua1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRsaW5rUC5jbGFzc05hbWUgPSBcImcyIGdzcFwiO1xyXG5cclxuXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGltZy5zcmMgPSAoaXNEYXJrID8gXCJodHRwczovL2V4aGVudGFpLm9yZy9pbWcvbXIuZ2lmXCIgOiBcImh0dHBzOi8vZWhndC5vcmcvZy9tci5naWZcIik7XHJcblx0bGlua1AuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcblx0bGlua1AuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgXCIpKTtcclxuXHJcblx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGxpbmsuaHJlZiA9IFwiI1wiXHJcblx0bGluay50ZXh0Q29udGVudCA9IFwiTWV0YWRhdGEgSlNPTlwiO1xyXG5cdGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJpbmZvLmpzb25cIik7XHJcblx0bGlua1AuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uRG93bmxvYWRMaW5rQ2xpY2tlZCwgZmFsc2UpO1xyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImF1eGNsaWNrXCIsIG9uRG93bmxvYWRMaW5rQ2xpY2tlZCwgZmFsc2UpO1xyXG5cclxuXHRwYXJlbnQuYXBwZW5kQ2hpbGQobGlua1ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEb3dubG9hZERhdGFVcmwobGluaykge1xyXG5cdGNvbnN0IGdldEdhbGxlcnlJbmZvID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbFwiKTtcclxuXHRsZXQgaW5mbyA9IG51bGw7XHJcblx0dHJ5IHtcclxuXHRcdGluZm8gPSBnZXRHYWxsZXJ5SW5mbyhkb2N1bWVudCk7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHR9XHJcblx0aWYgKGluZm8gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mb1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGluZm8udG9Db21tb25Kc29uKCksIG51bGwsIFwiICBcIik7XHJcblx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKFsgaW5mb1N0cmluZyBdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xyXG5cdGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG5cdGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCB1cmwpO1xyXG5cclxuXHRyZXR1cm4gdXJsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkRvd25sb2FkTGlua0NsaWNrZWQoZSkge1xyXG5cdGlmIChkb3dubG9hZERhdGFVcmwgPT09IG51bGwpIHtcclxuXHRcdGRvd25sb2FkRGF0YVVybCA9IGNyZWF0ZURvd25sb2FkRGF0YVVybCh0aGlzKTtcclxuXHRcdGlmIChkb3dubG9hZERhdGFVcmwgPT09IG51bGwpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgZG93bmxvYWQgZGF0YVwiKTtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuXHRjb25zdCBjdXJyZW50UGFnZVR5cGUgPSBwYWdlVHlwZS5nZXQoZG9jdW1lbnQsIGxvY2F0aW9uKTtcclxuXHRpZiAoY3VycmVudFBhZ2VUeXBlICE9PSBcImdhbGxlcnlcIikgeyByZXR1cm47IH1cclxuXHJcblx0c2V0dXBEb3dubG9hZExpbmsoKTtcclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGlzUmVhZHlWYWx1ZSA9IGZhbHNlO1xyXG5sZXQgY2FsbGJhY2tzID0gbnVsbDtcclxubGV0IGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcbmNvbnN0IGNoZWNrSW50ZXJ2YWxSYXRlID0gMjUwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzSG9va2VkKCkge1xyXG5cdHJldHVybiBjYWxsYmFja3MgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvb2soKSB7XHJcblx0Y2FsbGJhY2tzID0gW107XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChjaGVja0lmUmVhZHksIGNoZWNrSW50ZXJ2YWxSYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5ob29rKCkge1xyXG5cdGNvbnN0IGNicyA9IGNhbGxiYWNrcztcclxuXHJcblx0Y2FsbGJhY2tzID0gbnVsbDtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbElkKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5cclxuXHRpbnZva2UoY2JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrcykge1xyXG5cdGZvciAobGV0IGNiIG9mIGNhbGxiYWNrcykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y2IoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlYWR5KCkge1xyXG5cdGlmIChpc1JlYWR5VmFsdWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdGlmIChpc0hvb2tlZCgpKSB7IHVuaG9vaygpOyB9XHJcblx0XHRpc1JlYWR5VmFsdWUgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlJlYWR5KCkge1xyXG5cdGlzUmVhZHkoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uUmVhZHkoY2FsbGJhY2spIHtcclxuXHRpZiAoaXNSZWFkeSgpKSB7XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCFpc0hvb2tlZCgpKSB7IGhvb2soKTsgfVxyXG5cclxuXHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvblJlYWR5OiBvblJlYWR5LFxyXG5cdGdldCBpc1JlYWR5KCkgeyByZXR1cm4gaXNSZWFkeSgpOyB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RhcmsoKSB7XHJcblx0cmV0dXJuICh3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGlzRGFyayxcclxuXHRoYXNTdHlsZXNoZWV0LFxyXG5cdGdldFN0eWxlc2hlZXQsXHJcblx0YWRkU3R5bGVzaGVldFxyXG59O1xyXG4iXX0=
