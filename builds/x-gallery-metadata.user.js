// ==UserScript==
// @name        x/gallery-metadata
// @version     1.0.1
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

},{"./style":6}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const pageType = require("../api/page-type");

let downloadDataUrl = null;


function setupDownloadLink() {
	const galleryLinks = require("../api/gallery-links");
	const link = galleryLinks.createRightSideLink("Metadata JSON").link;
	if (link === null) { return; }

	link.setAttribute("download", "info.json");
	link.href = "#";

	link.addEventListener("click", onDownloadLinkClicked, false);
	link.addEventListener("auxclick", onDownloadLinkClicked, false);
}

function getGalleryInfo() {
	const getFromHtml = require("../api/gallery-info/get-from-html");
	try {
		return getFromHtml(document);
	} catch (e) {
		console.error(e);
		return null;
	}
}

function createDownloadDataUrl(info) {
	if (info === null) { return null; }

	const infoString = JSON.stringify(info.toCommonJson(), null, "  ");
	const blob = new Blob([ infoString ], { type: "application/json" });
	return URL.createObjectURL(blob);
}

function onDownloadLinkClicked(e) {
	if (downloadDataUrl === null) {
		downloadDataUrl = createDownloadDataUrl(getGalleryInfo());
		if (downloadDataUrl === null) {
			console.error("Failed to create download data");
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
		link.setAttribute("href", downloadDataUrl);
	}
}


function main() {
	const currentPageType = pageType.get(document, location);
	if (currentPageType !== "gallery") { return; }

	setupDownloadLink();
}


ready.onReady(main);

},{"../api/gallery-info/get-from-html":1,"../api/gallery-links":4,"../api/page-type":5,"../ready":8}],8:[function(require,module,exports){
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

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby9nZXQtZnJvbS1odG1sLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdHlwZXMuanMiLCJzcmMvYXBpL2dhbGxlcnktaW5mby91dGlscy5qcyIsInNyYy9hcGkvZ2FsbGVyeS1saW5rcy5qcyIsInNyYy9hcGkvcGFnZS10eXBlLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9nYWxsZXJ5LW1ldGFkYXRhL21haW4uanMiLCJzcmMvcmVhZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q3NzVXJsKHVybFN0cmluZykge1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvdXJsXFxzKlxcKFxccyooWydcIl0pPy87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModXJsU3RyaW5nKTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcXVvdGUgPSBtYXRjaFsxXSB8fCBcIlwiO1xyXG5cdHVybFN0cmluZyA9IHVybFN0cmluZy5zdWJzdHIobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggLSBxdW90ZS5sZW5ndGgpO1xyXG5cclxuXHRjb25zdCBwYXR0ZXJuMiA9IG5ldyBSZWdFeHAoYCgke3F1b3RlfSlcXFxccypcXFxcKVxcXFxzKiRgKTtcclxuXHRjb25zdCBtYXRjaDIgPSBwYXR0ZXJuMi5leGVjKHVybFN0cmluZyk7XHJcblx0aWYgKG1hdGNoMiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB1cmwgPSB1cmxTdHJpbmcuc3Vic3RyKDAsIG1hdGNoMi5pbmRleCArIG1hdGNoMlsxXS5sZW5ndGgpO1xyXG5cclxuXHRsZXQgdXJsMiA9IHVybDtcclxuXHRpZiAoIXF1b3RlKSB7XHJcblx0XHR1cmwyID0gdXJsLnJlcGxhY2UoL1wiL2csIFwiXFxcXFxcXCJcIik7XHJcblx0XHR1cmwyID0gYFwiJHt1cmwyfVwiYDtcclxuXHR9IGVsc2UgaWYgKHF1b3RlID09PSBcIidcIikge1xyXG5cdFx0dXJsMiA9IHVybC5zdWJzdHIoMSwgdXJsLmxlbmd0aCAtIDIpO1xyXG5cdFx0dXJsMiA9IHVybDIucmVwbGFjZSgvXFxcXCcvZywgXCInXCIpO1xyXG5cdFx0dXJsMiA9IGBcIiR7dXJsMn1cImA7XHJcblx0fVxyXG5cclxuXHR0cnkge1xyXG5cdFx0cmV0dXJuIEpTT04ucGFyc2UodXJsMik7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0cmV0dXJuIHVybDtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWVzdGFtcCh0ZXh0KSB7XHJcblx0Y29uc3QgbWF0Y2ggPSAvKFswLTldKyktKFswLTldKyktKFswLTldKylcXHMrKFswLTldKyk6KFswLTldKykvLmV4ZWModGV4dCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdHJldHVybiBEYXRlLlVUQyhcclxuXHRcdHBhcnNlSW50KG1hdGNoWzFdLCAxMCksIC8vIHllYXJcclxuXHRcdHBhcnNlSW50KG1hdGNoWzJdLCAxMCkgLSAxLCAvLyBtb250aFxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbM10sIDEwKSwgLy8gZGF5XHJcblx0XHRwYXJzZUludChtYXRjaFs0XSwgMTApLCAvLyBob3Vyc1xyXG5cdFx0cGFyc2VJbnQobWF0Y2hbNV0sIDEwKSwgLy8gbWludXRlc1xyXG5cdFx0MCwgLy8gc2Vjb25kc1xyXG5cdFx0MCk7IC8vIG1pbGxpc2Vjb25kc1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0VGl0bGUoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ25cIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gbm9kZS50ZXh0Q29udGVudC50cmltKCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGl0bGVPcmlnaW5hbChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnalwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBub2RlLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNYWluVGh1bWJuYWlsVXJsKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkMT5kaXZcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gZ2V0Q3NzVXJsKG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDYXRlZ29yeShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZGM+ZGl2W29uY2xpY2tdXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvWydcIl0uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT9bJ1wiXS87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIpIHx8IFwiXCIpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcGxvYWRlcihodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZG4+YVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL14uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT8kLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IChtYXRjaFsxXS5zcGxpdChcIi9cIilbMV0gfHwgXCJcIikgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmF0aW5nQ291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nX2NvdW50XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gcGFyc2VJbnQobm9kZS50ZXh0Q29udGVudC50cmltKCksIDEwKTtcclxuXHRyZXR1cm4gKE51bWJlci5pc05hTih2YWx1ZSkgPyBudWxsIDogdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYXRpbmdBdmVyYWdlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3JhdGluZ19sYWJlbFwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL2F2ZXJhZ2U6XFxzKihbMC05XFwuXSspL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XHJcblx0cmV0dXJuIChOdW1iZXIuaXNOYU4odmFsdWUpID8gbnVsbCA6IHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmF2b3JpdGVDb3VudChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNmYXZjb3VudFwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1xccyooWzAtOV0rfG9uY2UpL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG1hdGNoMSA9IG1hdGNoWzFdO1xyXG5cdHJldHVybiAobWF0Y2gxLnRvTG93ZXJDYXNlKCkgPT09IFwib25jZVwiID8gMSA6IHBhcnNlSW50KG1hdGNoMSwgMTApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmF2b3JpdGVDYXRlZ29yeShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNmYXY+ZGl2LmlcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdGl0bGUgPSBub2RlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpIHx8IFwiXCI7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9iYWNrZ3JvdW5kLXBvc2l0aW9uXFxzKjpcXHMqXFxkKyg/OnB4KT9cXHMrKC0/XFxkKykoPzpweCkvO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIik7XHJcblx0Y29uc3QgaW5kZXggPSAobWF0Y2ggIT09IG51bGwpID9cclxuXHRcdE1hdGguZmxvb3IoKE1hdGguYWJzKHBhcnNlSW50KG1hdGNoWzFdLCAxMCkpIC0gMikgLyAxOSkgOlxyXG5cdFx0LTE7XHJcblxyXG5cdHJldHVybiB7IGluZGV4LCB0aXRsZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaHVtYm5haWxTaXplKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZG80Pi5ub3NlbFwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxyXG5cdHJldHVybiAobm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhzXCIpID8gXCJub3JtYWxcIiA6IFwibGFyZ2VcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRodW1ibmFpbFJvd3MoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkbzI+Lm5vc2VsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPT0gMCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1xccyooWzAtOV0rKS87XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aHNcIikpIHtcclxuXHRcdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFncyhodG1sKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC8oLispOi87XHJcblx0Y29uc3QgZ3JvdXBzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RhZ2xpc3QgdHJcIik7XHJcblx0Y29uc3QgdGFncyA9IHt9O1xyXG5cclxuXHRmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xyXG5cdFx0Y29uc3QgdGRzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xyXG5cdFx0aWYgKHRkcy5sZW5ndGggPT09IDApIHsgY29udGludWU7IH1cclxuXHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZHNbMF0udGV4dENvbnRlbnQpO1xyXG5cdFx0Y29uc3QgbmFtZXNwYWNlID0gKG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0udHJpbSgpIDogXCJcIik7XHJcblxyXG5cdFx0bGV0IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHRpZiAodGFncy5oYXNPd25Qcm9wZXJ0eShuYW1lc3BhY2UpKSB7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MgPSB0YWdzW25hbWVzcGFjZV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuYW1lc3BhY2VUYWdzID0gW107XHJcblx0XHRcdHRhZ3NbbmFtZXNwYWNlXSA9IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGFnRGl2cyA9IHRkc1t0ZHMubGVuZ3RoIC0gMV0ucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcclxuXHRcdGZvciAoY29uc3QgZGl2IG9mIHRhZ0RpdnMpIHtcclxuXHRcdFx0Y29uc3QgbGluayA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcclxuXHRcdFx0aWYgKGxpbmsgPT09IG51bGwpIHsgY29udGludWU7IH1cclxuXHJcblx0XHRcdGNvbnN0IHRhZyA9IGxpbmsudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHRuYW1lc3BhY2VUYWdzLnB1c2godGFnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0YWdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXRhaWxzTm9kZXMoaHRtbCkge1xyXG5cdHJldHVybiBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RkIHRyXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRlVXBsb2FkZWQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gMCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbMF0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IGdldFRpbWVzdGFtcChub2RlLnRleHRDb250ZW50KSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlSW5mbyhkZXRhaWxzTm9kZXMpIHtcclxuXHRsZXQgdmlzaWJsZSA9IHRydWU7XHJcblx0bGV0IHZpc2libGVSZWFzb24gPSBudWxsO1xyXG5cclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA+IDIpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbMl0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcGF0dGVybiA9IC9ub1xccytcXCgoLis/KVxcKS9pO1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdFx0dmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHZpc2libGVSZWFzb24gPSBtYXRjaFsxXS50cmltKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IHZpc2libGUsIHZpc2libGVSZWFzb24gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VJbmZvKGRldGFpbHNOb2Rlcykge1xyXG5cdGxldCBsYW5ndWFnZSA9IG51bGw7XHJcblx0bGV0IHRyYW5zbGF0ZWQgPSBmYWxzZTtcclxuXHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPiAzKSB7XHJcblx0XHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzNdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRcdGlmIChub2RlICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHRleHROb2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG5cdFx0XHRpZiAodGV4dE5vZGUgIT09IG51bGwgJiYgdGV4dE5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XHJcblx0XHRcdFx0bGFuZ3VhZ2UgPSB0ZXh0Tm9kZS5ub2RlVmFsdWUudHJpbSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCB0ck5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuaGFscFwiKTtcclxuXHRcdFx0dHJhbnNsYXRlZCA9ICh0ck5vZGUgIT09IG51bGwgJiYgdHJOb2RlLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpID09IFwidHJcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyBsYW5ndWFnZSwgdHJhbnNsYXRlZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gNCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzRdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gLyhbMC05XFwuXSspXFxzKihcXHcrKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyB1dGlscy5nZXRCeXRlc1NpemVGcm9tTGFiZWwobWF0Y2hbMV0sIG1hdGNoWzJdKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaWxlQ291bnQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gNSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzVdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gLyhbMC05LF0rKVxccypwYWdlcy9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyBwYXJzZUludChtYXRjaFsxXS5yZXBsYWNlKC8sL2csIFwiXCIpLCAxMCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50KGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDEpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1sxXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDI+YVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChpbmZvICE9PSBudWxsID8gaW5mby5pZGVudGlmaWVyIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5ld2VyVmVyc2lvbnMoaHRtbCkge1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnbmQ+YVwiKTtcclxuXHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0XHRpZiAoaW5mbyA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IGdhbGxlcnlJbmZvID0ge1xyXG5cdFx0XHRpZGVudGlmaWVyOiBpbmZvLmlkZW50aWZpZXIsXHJcblx0XHRcdG5hbWU6IG5vZGUudGV4dENvbnRlbnQudHJpbSgpLFxyXG5cdFx0XHRkYXRlVXBsb2FkZWQ6IG51bGxcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG5vZGUubmV4dFNpYmxpbmcgIT09IG51bGwpIHtcclxuXHRcdFx0Z2FsbGVyeUluZm8uZGF0ZVVwbG9hZGVkID0gZ2V0VGltZXN0YW1wKG5vZGUubmV4dFNpYmxpbmcudGV4dENvbnRlbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlc3VsdHMucHVzaChnYWxsZXJ5SW5mbyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9ycmVudENvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZDUgLmcyPmFcIik7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXGJ0b3JyZW50XFxzK2Rvd25sb2FkXFxzKlxcKFxccyooXFxkKylcXHMqXFwpL2k7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcmNoaXZlcktleShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2Q1IC5nMj5hXCIpO1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxiYXJjaGl2ZVxccytkb3dubG9hZFxcYi9pO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcGF0dGVybjIgPSAvJm9yPShbXidcIl0qKVsnXCJdLztcclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybjIuZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcIm9uY2xpY2tcIikgfHwgXCJcIik7XHJcblx0XHRcdHJldHVybiAobWF0Y2gyICE9PSBudWxsID8gbWF0Y2gyWzFdIDogbnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21IdG1sKGluZm8sIGh0bWwpIHtcclxuXHQvLyBHZW5lcmFsXHJcblx0aW5mby50aXRsZSA9IGdldFRpdGxlKGh0bWwpO1xyXG5cdGluZm8udGl0bGVPcmlnaW5hbCA9IGdldFRpdGxlT3JpZ2luYWwoaHRtbCk7XHJcblx0aW5mby5tYWluVGh1bWJuYWlsVXJsID0gZ2V0TWFpblRodW1ibmFpbFVybChodG1sKTtcclxuXHRpbmZvLmNhdGVnb3J5ID0gZ2V0Q2F0ZWdvcnkoaHRtbCk7XHJcblx0aW5mby51cGxvYWRlciA9IGdldFVwbG9hZGVyKGh0bWwpO1xyXG5cclxuXHRpbmZvLnJhdGluZ0NvdW50ID0gZ2V0UmF0aW5nQ291bnQoaHRtbCk7XHJcblx0aW5mby5yYXRpbmdBdmVyYWdlID0gZ2V0UmF0aW5nQXZlcmFnZShodG1sKTtcclxuXHJcblx0aW5mby5mYXZvcml0ZUNvdW50ID0gZ2V0RmF2b3JpdGVDb3VudChodG1sKTtcclxuXHRpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgPSBnZXRGYXZvcml0ZUNhdGVnb3J5KGh0bWwpO1xyXG5cclxuXHRpbmZvLnRodW1ibmFpbFNpemUgPSBnZXRUaHVtYm5haWxTaXplKGh0bWwpO1xyXG5cdGluZm8udGh1bWJuYWlsUm93cyA9IGdldFRodW1ibmFpbFJvd3MoaHRtbCk7XHJcblxyXG5cdGluZm8ubmV3ZXJWZXJzaW9ucyA9IGdldE5ld2VyVmVyc2lvbnMoaHRtbCk7XHJcblxyXG5cdGluZm8udG9ycmVudENvdW50ID0gZ2V0VG9ycmVudENvdW50KGh0bWwpO1xyXG5cdGluZm8uYXJjaGl2ZXJLZXkgPSBnZXRBcmNoaXZlcktleShodG1sKTtcclxuXHJcblx0Ly8gRGV0YWlsc1xyXG5cdGNvbnN0IGRldGFpbHNOb2RlcyA9IGdldERldGFpbHNOb2RlcyhodG1sKTtcclxuXHJcblx0aW5mby5kYXRlVXBsb2FkZWQgPSBnZXREYXRlVXBsb2FkZWQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0aW5mby5wYXJlbnQgPSBnZXRQYXJlbnQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0Y29uc3QgdmlzaWJsZUluZm8gPSBnZXRWaXNpYmxlSW5mbyhkZXRhaWxzTm9kZXMpO1xyXG5cdGluZm8udmlzaWJsZSA9IHZpc2libGVJbmZvLnZpc2libGU7XHJcblx0aW5mby52aXNpYmxlUmVhc29uID0gdmlzaWJsZUluZm8udmlzaWJsZVJlYXNvbjtcclxuXHJcblx0Y29uc3QgbGFuZ3VhZ2VJbmZvID0gZ2V0TGFuZ3VhZ2VJbmZvKGRldGFpbHNOb2Rlcyk7XHJcblx0aW5mby5sYW5ndWFnZSA9IGxhbmd1YWdlSW5mby5sYW5ndWFnZTtcclxuXHRpbmZvLnRyYW5zbGF0ZWQgPSBsYW5ndWFnZUluZm8udHJhbnNsYXRlZDtcclxuXHJcblx0aW5mby5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBnZXRBcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0aW5mby5maWxlQ291bnQgPSBnZXRGaWxlQ291bnQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0Ly8gVGFnc1xyXG5cdGluZm8udGFncyA9IGdldFRhZ3MoaHRtbCk7XHJcblx0aW5mby50YWdzSGF2ZU5hbWVzcGFjZSA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21IdG1sKGh0bWwpIHtcclxuXHRjb25zdCBsaW5rID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiLnB0dCB0ZC5wdGRzPmFbaHJlZl0sLnB0dCB0ZC5wdGRkPmFbaHJlZl1cIik7XHJcblx0aWYgKGxpbmsgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWRQYWdlID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0aWYgKGlkUGFnZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvID0gbmV3IHR5cGVzLkdhbGxlcnlJbmZvKCk7XHJcblx0aW5mby5pZGVudGlmaWVyID0gaWRQYWdlLmlkZW50aWZpZXI7XHJcblx0aW5mby5jdXJyZW50UGFnZSA9IGlkUGFnZS5wYWdlO1xyXG5cdGluZm8uc291cmNlID0gXCJodG1sXCI7XHJcblx0cG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21IdG1sKGluZm8saHRtbCk7XHJcblx0aW5mby5kYXRlR2VuZXJhdGVkID0gRGF0ZS5ub3coKTtcclxuXHRyZXR1cm4gaW5mbztcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2V0RnJvbUh0bWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgR2FsbGVyeUlkZW50aWZpZXIge1xyXG5cdGNvbnN0cnVjdG9yKGlkLCB0b2tlbikge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy50b2tlbiA9IHRva2VuO1xyXG5cdH1cclxuXHJcblx0dG9Db21tb25Kc29uKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Z2lkOiB0aGlzLmlkLFxyXG5cdFx0XHR0b2tlbjogdGhpcy50b2tlblxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBHYWxsZXJ5SW5mbyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZSA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlT3JpZ2luYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlVXBsb2FkZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLnVwbG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQXZlcmFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0NvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5tYWluVGh1bWJuYWlsVXJsID0gbnVsbFxyXG5cdFx0dGhpcy50aHVtYm5haWxTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsUm93cyA9IG51bGw7XHJcblx0XHR0aGlzLmZpbGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0dGhpcy52aXNpYmxlUmVhc29uID0gbnVsbDtcclxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy50cmFuc2xhdGVkID0gbnVsbDtcclxuXHRcdHRoaXMuYXJjaGl2ZXJLZXkgPSBudWxsO1xyXG5cdFx0dGhpcy50b3JyZW50Q291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzID0gbnVsbDtcclxuXHRcdHRoaXMudGFnc0hhdmVOYW1lc3BhY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XHJcblx0XHR0aGlzLm5ld2VyVmVyc2lvbnMgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlR2VuZXJhdGVkID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHRvQ29tbW9uSnNvbigpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGdhbGxlcnk6IHRvQ29tbW9uSnNvbk9yRGVmYXVsdCh0aGlzLmlkZW50aWZpZXIsIG51bGwpIHx8IG5ldyBHYWxsZXJ5SWRlbnRpZmllcigwLCBcIlwiKS50b0NvbW1vbkpzb24oKSxcclxuXHRcdFx0dGl0bGU6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMudGl0bGUsIFwiXCIpLFxyXG5cdFx0XHR0aXRsZV9vcmlnaW5hbDogdG9TdHJpbmdPckRlZmF1bHQodGhpcy50aXRsZU9yaWdpbmFsLCBcIlwiKSxcclxuXHRcdFx0ZGF0ZV91cGxvYWRlZDogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5kYXRlVXBsb2FkZWQsIFwiXCIpLFxyXG5cdFx0XHRjYXRlZ29yeTogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5jYXRlZ29yeSwgXCJcIiksXHJcblx0XHRcdHVwbG9hZGVyOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnVwbG9hZGVyLCBcIlwiKSxcclxuXHRcdFx0cmF0aW5nOiB7XHJcblx0XHRcdFx0YXZlcmFnZTogdG9OdW1iZXJPckRlZmF1bHQodGhpcy5yYXRpbmdBdmVyYWdlLCAwKSxcclxuXHRcdFx0XHRjb3VudDogdG9OdW1iZXJPckRlZmF1bHQodGhpcy5yYXRpbmdDb3VudCwgMCksXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhdm9yaXRlczoge1xyXG5cdFx0XHRcdGNhdGVnb3J5OiAodGhpcy5mYXZvcml0ZUNhdGVnb3J5ICE9PSBudWxsID8gdG9OdW1iZXJPckRlZmF1bHQodGhpcy5mYXZvcml0ZUNhdGVnb3J5LmluZGV4LCAtMSkgOiAtMSksXHJcblx0XHRcdFx0Y2F0ZWdvcnlfdGl0bGU6ICh0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkgIT09IG51bGwgPyB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkudGl0bGUsIFwiXCIpIDogXCJcIiksXHJcblx0XHRcdFx0Y291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMuZmF2b3JpdGVDb3VudCwgMClcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFyZW50OiB0b0NvbW1vbkpzb25PckRlZmF1bHQodGhpcy5wYXJlbnQsIG51bGwpLFxyXG5cdFx0XHRuZXdlcl92ZXJzaW9uczogbmV3ZXJWZXJzaW9uc1RvQ29tbW9uSnNvbih0aGlzLm5ld2VyVmVyc2lvbnMpLFxyXG5cdFx0XHR0aHVtYm5haWw6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMubWFpblRodW1ibmFpbFVybCwgXCJcIiksXHJcblx0XHRcdHRodW1ibmFpbF9zaXplOiB0b1N0cmluZ09yRGVmYXVsdCh0aGlzLnRodW1ibmFpbFNpemUsIFwiXCIpLFxyXG5cdFx0XHR0aHVtYm5haWxfcm93czogdG9OdW1iZXJPckRlZmF1bHQodGhpcy50aHVtYm5haWxSb3dzLCAwKSxcclxuXHRcdFx0aW1hZ2VfY291bnQ6IHRvTnVtYmVyT3JEZWZhdWx0KHRoaXMuZmlsZUNvdW50LCAwKSxcclxuXHRcdFx0aW1hZ2VzX3Jlc2l6ZWQ6IGZhbHNlLFxyXG5cdFx0XHR0b3RhbF9maWxlX3NpemVfYXBwcm94OiB0b051bWJlck9yRGVmYXVsdCh0aGlzLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSwgMCksXHJcblx0XHRcdHZpc2libGU6ICh0aGlzLnZpc2libGUgPT09IHRydWUpLFxyXG5cdFx0XHR2aXNpYmxlX3JlYXNvbjogdG9TdHJpbmdPckRlZmF1bHQodGhpcy52aXNpYmxlUmVhc29uLCBcIlwiKSxcclxuXHRcdFx0bGFuZ3VhZ2U6IHRvU3RyaW5nT3JEZWZhdWx0KHRoaXMubGFuZ3VhZ2UsIFwiXCIpLFxyXG5cdFx0XHR0cmFuc2xhdGVkOiAodGhpcy50cmFuc2xhdGVkID09PSB0cnVlKSxcclxuXHRcdFx0dGFnczogdGFnc1RvQ29tbW9uSnNvbih0aGlzLnRhZ3MpLFxyXG5cdFx0XHQvLyBOZXdcclxuXHRcdFx0dGFnc19oYXZlX25hbWVzcGFjZTogKHRoaXMudGFnc0hhdmVOYW1lc3BhY2UgPT09IHRydWUpLFxyXG5cdFx0XHR0b3JyZW50X2NvdW50OiB0b051bWJlck9yRGVmYXVsdCh0aGlzLnRvcnJlbnRDb3VudCwgMCksXHJcblx0XHRcdGFyY2hpdmVyX2tleTogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5hcmNoaXZlcktleSwgbnVsbCksXHJcblx0XHRcdHNvdXJjZTogdG9TdHJpbmdPckRlZmF1bHQodGhpcy5zb3VyY2UsIG51bGwpLFxyXG5cdFx0XHRkYXRlX2dlbmVyYXRlZDogdG9OdW1iZXJPckRlZmF1bHQodGhpcy5kYXRlR2VuZXJhdGVkLCAwKVxyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB0b1N0cmluZ09yRGVmYXVsdCh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XHJcblx0cmV0dXJuIHR5cGVvZih2YWx1ZSkgPT09IFwic3RyaW5nXCIgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9OdW1iZXJPckRlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xyXG5cdHJldHVybiBOdW1iZXIuaXNOYU4odmFsdWUpID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQ29tbW9uSnNvbk9yRGVmYXVsdChvYmosIGRlZmF1bHRWYWx1ZSkge1xyXG5cdHJldHVybiAob2JqICYmIHR5cGVvZihvYmoudG9Db21tb25Kc29uKSA9PT0gXCJmdW5jdGlvblwiKSA/XHJcblx0XHRvYmoudG9Db21tb25Kc29uKCkgOlxyXG5cdFx0ZGVmYXVsdFZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdlclZlcnNpb25zVG9Db21tb25Kc29uKG5ld2VyVmVyc2lvbnMpIHtcclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHRpZiAoQXJyYXkuaXNBcnJheShuZXdlclZlcnNpb25zKSkge1xyXG5cdFx0Zm9yIChjb25zdCBuZXdlclZlcnNpb24gb2YgbmV3ZXJWZXJzaW9ucykge1xyXG5cdFx0XHRyZXN1bHQucHVzaCh7XHJcblx0XHRcdFx0Z2FsbGVyeTogdG9Db21tb25Kc29uT3JEZWZhdWx0KG5ld2VyVmVyc2lvbi5pZGVudGlmaWVyLCBudWxsKSB8fCBuZXcgR2FsbGVyeUlkZW50aWZpZXIoMCwgXCJcIikudG9Db21tb25Kc29uKCksXHJcblx0XHRcdFx0bmFtZTogdG9TdHJpbmdPckRlZmF1bHQobmV3ZXJWZXJzaW9uLm5hbWUpLFxyXG5cdFx0XHRcdGRhdGVfdXBsb2FkZWQ6IHRvTnVtYmVyT3JEZWZhdWx0KG5ld2VyVmVyc2lvbi5kYXRlVXBsb2FkZWQpXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YWdzVG9Db21tb25Kc29uKHRhZ3MpIHtcclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRpZiAodGFncyAhPT0gbnVsbCAmJiB0eXBlb2YodGFncykgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdGZvciAoY29uc3QgbmFtZXNwYWNlIGluIHRhZ3MpIHtcclxuXHRcdFx0Y29uc3QgdGFnTGlzdCA9IHRhZ3NbbmFtZXNwYWNlXTtcclxuXHRcdFx0cmVzdWx0W25hbWVzcGFjZV0gPSBbLi4udGFnTGlzdF07XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRHYWxsZXJ5SWRlbnRpZmllcixcclxuXHRHYWxsZXJ5SW5mbyxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5cclxuY29uc3Qgc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzID0gWyBcImJcIiwgXCJrYlwiLCBcIm1iXCIsIFwiZ2JcIiBdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgbWF0Y2ggPSAvXi4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pPyQvLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0aCA9IG1hdGNoWzFdLnJlcGxhY2UoL15cXC8rfFxcLyskL2csIFwiXCIpLnJlcGxhY2UoL1xcL3syLH0vZywgXCIvXCIpLnNwbGl0KFwiL1wiKTtcclxuXHRpZiAocGF0aFswXSAhPT0gXCJnXCIgfHwgcGF0aC5sZW5ndGggPCAzKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGlkZW50aWZpZXIgPSBuZXcgdHlwZXMuR2FsbGVyeUlkZW50aWZpZXIocGFyc2VJbnQocGF0aFsxXSwgMTApLCBwYXRoWzJdKTtcclxuXHRpZiAoTnVtYmVyLmlzTmFOKGlkZW50aWZpZXIuaWQpKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGxldCBwYWdlID0gbnVsbDtcclxuXHRpZiAobWF0Y2hbMl0pIHtcclxuXHRcdGNvbnN0IG1hdGNoMiA9IC9bXFw/XFwmXXA9KFtcXCtcXC1dP1xcZCspLy5leGVjKG1hdGNoWzJdKTtcclxuXHRcdGlmIChtYXRjaDIgIT09IG51bGwpIHtcclxuXHRcdFx0cGFnZSA9IHBhcnNlSW50KG1hdGNoMlsxXSwgMTApO1xyXG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKHBhZ2UpKSB7IHBhZ2UgPSBudWxsOyB9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyBpZGVudGlmaWVyLCBwYWdlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJ5dGVzU2l6ZUZyb21MYWJlbChudW1iZXIsIGxhYmVsKSB7XHJcblx0bGV0IGkgPSBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMuaW5kZXhPZihsYWJlbC50b0xvd2VyQ2FzZSgpKTtcclxuXHRpZiAoaSA8IDApIHsgaSA9IDA7IH1cclxuXHRyZXR1cm4gTWF0aC5mbG9vcihwYXJzZUZsb2F0KG51bWJlcikgKiBNYXRoLnBvdygxMDI0LCBpKSk7XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybCxcclxuXHRnZXRCeXRlc1NpemVGcm9tTGFiZWxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuL3N0eWxlXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJpZ2h0U2lkZUxpbmsobGFiZWwpIHtcclxuXHRjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dkNVwiKTtcclxuXHRpZiAocGFyZW50ID09PSBudWxsKSB7XHJcblx0XHRyZXR1cm4geyBsaW5rOiBudWxsLCBsaW5rQ29udGFpbmVyOiBudWxsIH07XHJcblx0fVxyXG5cclxuXHRjb25zdCBsaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblx0bGlua0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImcyIGdzcFwiO1xyXG5cclxuXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdGltZy5zcmMgPSBzdHlsZS5nZXRBcnJvd0ljb25VcmwoKTtcclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG5cdGxpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgXCIpKTtcclxuXHJcblx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGxpbmsudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuXHRsaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuXHRwYXJlbnQuYXBwZW5kQ2hpbGQobGlua0NvbnRhaW5lcik7XHJcblxyXG5cdHJldHVybiB7IGxpbmssIGxpbmtDb250YWluZXIgfTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNyZWF0ZVJpZ2h0U2lkZUxpbmtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBvdmVycmlkZUF0dHJpYnV0ZU5hbWUgPSBcImRhdGEteC1vdmVycmlkZS1wYWdlLXR5cGVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRPdmVycmlkZSh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3ZlcnJpZGUoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0cmV0dXJuIHZhbHVlID8gdmFsdWUgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoZG9jLCBsb2NhdGlvbikge1xyXG5cdGNvbnN0IG92ZXJyaWRlVHlwZSA9IGdldE92ZXJyaWRlKCk7XHJcblx0aWYgKG92ZXJyaWRlVHlwZSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIG92ZXJyaWRlVHlwZTtcclxuXHR9XHJcblxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hib3hcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNlYXJjaFwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPWZhdmNhdF1cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImZhdm9yaXRlc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjaTE+aDFcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImltYWdlXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIi5nbSBoMSNnblwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZ2FsbGVyeVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9vdXRlclwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2V0dGluZ3NcIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGlzRGFyaygpIHtcclxuXHRyZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvY3VtZW50RGFya0ZsYWcoKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnJvd0ljb25VcmwoKSB7XHJcblx0cmV0dXJuIChpc0RhcmsoKSA/IFwiaHR0cHM6Ly9leGhlbnRhaS5vcmcvaW1nL21yLmdpZlwiIDogXCJodHRwczovL2VoZ3Qub3JnL2cvbXIuZ2lmXCIpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNEYXJrLFxyXG5cdHNldERvY3VtZW50RGFya0ZsYWcsXHJcblx0Z2V0QXJyb3dJY29uVXJsXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHBhZ2VUeXBlID0gcmVxdWlyZShcIi4uL2FwaS9wYWdlLXR5cGVcIik7XHJcblxyXG5sZXQgZG93bmxvYWREYXRhVXJsID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXR1cERvd25sb2FkTGluaygpIHtcclxuXHRjb25zdCBnYWxsZXJ5TGlua3MgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktbGlua3NcIik7XHJcblx0Y29uc3QgbGluayA9IGdhbGxlcnlMaW5rcy5jcmVhdGVSaWdodFNpZGVMaW5rKFwiTWV0YWRhdGEgSlNPTlwiKS5saW5rO1xyXG5cdGlmIChsaW5rID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiaW5mby5qc29uXCIpO1xyXG5cdGxpbmsuaHJlZiA9IFwiI1wiO1xyXG5cclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkRvd25sb2FkTGlua0NsaWNrZWQsIGZhbHNlKTtcclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJhdXhjbGlja1wiLCBvbkRvd25sb2FkTGlua0NsaWNrZWQsIGZhbHNlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUluZm8oKSB7XHJcblx0Y29uc3QgZ2V0RnJvbUh0bWwgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby9nZXQtZnJvbS1odG1sXCIpO1xyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gZ2V0RnJvbUh0bWwoZG9jdW1lbnQpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURvd25sb2FkRGF0YVVybChpbmZvKSB7XHJcblx0aWYgKGluZm8gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mb1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGluZm8udG9Db21tb25Kc29uKCksIG51bGwsIFwiICBcIik7XHJcblx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKFsgaW5mb1N0cmluZyBdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiIH0pO1xyXG5cdHJldHVybiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkRvd25sb2FkTGlua0NsaWNrZWQoZSkge1xyXG5cdGlmIChkb3dubG9hZERhdGFVcmwgPT09IG51bGwpIHtcclxuXHRcdGRvd25sb2FkRGF0YVVybCA9IGNyZWF0ZURvd25sb2FkRGF0YVVybChnZXRHYWxsZXJ5SW5mbygpKTtcclxuXHRcdGlmIChkb3dubG9hZERhdGFVcmwgPT09IG51bGwpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgZG93bmxvYWQgZGF0YVwiKTtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZG93bmxvYWREYXRhVXJsKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdGlmIChjdXJyZW50UGFnZVR5cGUgIT09IFwiZ2FsbGVyeVwiKSB7IHJldHVybjsgfVxyXG5cclxuXHRzZXR1cERvd25sb2FkTGluaygpO1xyXG59XHJcblxyXG5cclxucmVhZHkub25SZWFkeShtYWluKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIl19
