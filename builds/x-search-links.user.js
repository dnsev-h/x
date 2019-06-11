// ==UserScript==
// @name        x/search-links
// @version     1.0.1
// @author      dnsev-h
// @namespace   dnsev-h
// @description Add customizable search links to gallery pages
// @run-at      document-start
// @grant       GM_getValue
// @grant       GM.getValue
// @grant       GM_setValue
// @grant       GM.setValue
// @include     https://exhentai.org/*
// @include     https://e-hentai.org/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABoVBMVEUAAAA0NTs3Nzc0NDsxMUE0NTs0NTszNDs0Njs0NTs0NDw0NTszNTszNTs1NTs0Njs1NTwzMzk0NDszNTszNDo0NDszNTszNDo0NDszNDs0NDsxNDo0NTs0NTszNDs0NTs0NDszNTs0NTs1NTwzMzo0NTszNTs1NTs1NTozNTo0NjrmXu////80NTvjXutAN0iBR4n3y/o5NkD//P/+9f70t/ijT6w8N0L2wfnwnvXvl/XqefLoavDmYO/UWdzMWNTCVstdPmT98f775fz40/v2x/n2xfntivTpc/DcW+XaW+LXWuDWWt+/VcenT7BNO1RKOlH87f376P364fz4zvrzsPfyqPbwo/XnY/DnZ+/gaOneXOjAVci1U72tUbaGSI59RYR5RIFvQ3dsQnRjP2tUPVtQO1dEOEz52fv1vvn0u/jztPjwm/Xsg/Prh/LobvDpju/kguzhcOnRWdm7VMSyUrqcTaWZTKGWTJ6US5ySSpqNSZV0Q3toQW9SPFn63PzulPTrgfPuqvLkd+viderlpeniiujhk+bGV8+OSpZWPV6jFuz0AAAAK3RSTlMA/AO/B/LXg2NGPfXfamZfJhCnpJmId3BYSyIU7OfQy7mvlBkLxI1QNDKds9RbVAAAAxJJREFUSMeNlmdb4lAQhYksUkTE3vuurnsyCYKCHey9997L2nvX7fVXbxJyI1Hv6vuN5zmHmbkzc28sz5PscngczmTLK8kqJA3hg/c18twi+ntx2tfT178YEuxxL+pL3aEgdLqXqOilvJzxcgTYrx5rq6mdAoJ+65v/ybMLaXAOx6OiRksnsECpfHlcCd0HJRxXiYwd4IIyuQYH3UgAPokPVAMrCTk8Q8o6FL6IseyiT7byDKlDUJgwGaqmEaQkjqGclsPAV9FEDdDs5p1UokA+/DQbAvU45deda13HjGimErjLf8tz2P2zGH3kqMcceXiG9xTE5NMQzfEWHvGr+BUjHu7oqFJCDJCLZyhYwY+Rj7p8pA7AwXA7pM0UboRbHEzVRfVj01DZFbvgS+CV/a4ZQAfrgEaDMiARbvOSyDcLSc2pvQs6gapGbBRxD1bYbEKtqLCHKI0B8RA3AneTSkISahS98rdRupRo6Kdys+xhWgrXgFbt+HUmFbMkySUxam+KjfIzdKfwRylToZZlpLq/YzWmd9kJsu9yhdK1Hzk0gE7V0MUCRN1XgpGE19bcA8AnaN10Uj/G1aZBZyu6eQvkNRZN7oWCNBSfnlaWZqU+tCmSbdaFgGpoR4SyWbkJi9CYXxsckjcHN4AWRbKPKHXRpqOXEnVDBZ3BzIw6ddCp1Axt6DEMTorAzKGWNMtIH/EmchjD0AQzE9rWRKllm31CWWyRqRtmttUUGJ9bVcM45sjJLncKg2Gk3QmDKXV263BOpUYN/U8Mo9Bhrf6GZeMCLBUuYaY6sIdYxsUWwOe3uR52xsw0q9hoxQ6A3g12ZXroqheYbQpHJDzLREsDFBZt7JZPJR2OYesIKrduC6PCk5GR6Sj241k6j9AdBgb86RYzZTKeZQYn9xQK0ZPHy86JgAE5L9Fuz376AD2eETbEZM3h3KsLeET3mW+Q3J44zptoW0YM4eDSOpGtOIv/tqf7f0OjZ/76TibKK85wKWo+ue7Q0vm1b3WISChIS/K+4jMjLY+E/ILUTNdby2tJZjlw+AeRxP9HDmKpUQAAAABJRU5ErkJggg==
// @icon64      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABnlBMVEUAAAA0NTs0NDs0NDs0NTs1NTs0NTozMzlLS0s0NTs0NDszNTs2NjsAAAA0NTs0NTs0NTs0NTs0NTszNTszNTo0NTs0NTwyNjwwMD80NTs0NTs0NTs0NTs0NDs0NTs0NTo0Njs1NTozNTozNTszNjsxNTkzNTs0NTo0NTo0NTs0NDsyNjszNTzmXu////80NTs+N0X87P3lXu7+9f6pULI5NkA1NTz//P/++f774/zrfvLnYu+6VMPzrvfulPTqd/LiXerCVsqfTadoQXBWPV5FOUz41Pv3yvrpb/HnZfDfXOnUWd3NWNWNSZV9RoR2RH5xQnhdPmVSO1k2NT386f363vz1v/nyqvfwoPbpcvHoavDoZ/DbW+TQWdnGV8+2U76xUrqUS5yER4xJOlFCOEn87/3xpvbuj/TshfP40Pr2xfn0uPjzsvfwmvXdXOa+VMeiTqqcTaWZTKGHSI+ARohtQnVjQGpOO1b98P352PvtivPsgvPpePHpg/DnfO/iaOrXW+DDVsyjT6yWS5/98P752fv0uvjrj/HlhezJWNI3l8R2AAAALXRSTlMAu5FYyidEBwP7wC0hAvXv66V/dG1gURcL592ujNi1meCEZ0wzENDOn5VJPzn5BnicAAAEYElEQVRYw73X51sTQRAG8IQEJPQiKM3e9d03JCSABAgkkd5Bkd5UpCioiL3X/9rbC3fZJAcrfvD3DR5m7nZmZ57DpXGq8NKlwlOuf3Oiuq6Mptqcwn+Iv1hLMhGPj8XXSJYXHffxZ8l49wCkwMKKn6VVx4o/XUB/dwC2TyNkTv4x4t1cXYDh/nrHm05ITSGWF/9teGUNV+eBmfZJIb1qnwHw1M/rfxdeUUq+HAR+BoXlW0cywwWXXm6tER4B0CFUm/IU4ZJCffVrOdZlnr5FpNkAsEKvtpAXOBaFtCEy/AD691mpS5DDHUh9LSLTIyASLsnVJKjnV0jrIktjHzDMAk2Cao7PQSmhagt4kuCNoxPkX+Xa8FPgl0OCll5gl95izQC7SUbwUTi4C0RXWa29CW52A40OCZo7gS9s0LbyJF8Ad4WDHiCwr3+Fm4yrbVDdBrq1jXDll4UHlTOoHgP9fhbqb9NKdoLm1tZm8xVWeFaXwMMRBISYVMJbt/uA3juyCvMTJZc1CSr5HIHG6V47PDgN02yj6ARi1K2381wG2vDOvsSdOPBQ3oUmFmj7OAxDuxV/H5ZOEewzyhgu0lwl+iMAPkxZ8SnNYhoYYaW2DaEVOVN35Pk3t5ESFK3AIq9oEhRX+DgO4IGQ3sDWZnTyHQJrLNJf5z3gfnII26DUQIh78gwndQnO8pm1FO4gZdr4eUr24Ux24TxVN5Uxa+ACsCmke0h5LQwz+BQuzRjJvKs0nMuzlzP9AWDKGiDLW2s5jmfMQwWZGB2O05dnN3LcrJjhFVJahdQui1CVXrHQsyiAIdYcfEzcYMx63gZst+2tsMx6Jb7IN7EEKRDjdWWnPBRSB0zK1ZwClliXVvEXSBoMhRu8XrfbWyOb0GNO8QxsU8L0APhMr3JrSsPzODA0wQNLwGRGE63pDAIDPJdKUMhx2KLzC12Gz4NR9AlpW70ESS3AE5ap62MUTt6bfzwL2/eMBOr6cGLWsCftGts1mFMTnOdXOLmb0YMte70B82xQZ7cbTh7LXdCm3ALjF9ZwdNGrJtiFk1ZrDlIpzJuY3Grl6RvQSdBo2CzS9PUcTNcQK9SPkmE4aZG3PkPbZHKYYvQok8gxOGkUD2adWtM8i4CfvtQ0nfaF+uFgK7iOLLfNGgaWRiaUd3Af0oY2ZOuVJ5C+KH2oZmIQGqk3eA1TlKUuWx1D8b3R0djY+Kp/B0dqD/bCNMca5esyp4SWJqiyu/AeSd3pezU/N89wKdfNRRzl3gdgINKPQJOfF10O3IzgCDMfgYUEJxIhKjtNdUbzBoDx6HMlDF/xOH/tlWtqMLBHXjvhunzCdYgKDuFwg8Mhlnk0X7oxHOL37ssJ+spPab5T6Y8iS39kObZGsiRH/89fAXcyTr30fCxEQ+01z2mX3kWuDlixc4vLowkZ6/PmVFnP1il2c21osSvSNDS6H5bBNXWVt5Sa612uo6W0oN5T5Dq+W/VnCtzlFZ7cYtd/8Adr2MpDGqTx0AAAAABJRU5ErkJggg==
// @homepage    https://dnsev-h.github.io/x/
// @supportURL  https://github.com/dnsev-h/x/issues
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-search-links.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-search-links.user.js
// ==/UserScript==
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";


const galleryDetailsStylesheetId = "x-gallery-details-style";
const galleryDetailsContainerId = "x-gallery-details";
const galleryDetailsLinksContainerClassName = "x-gallery-details-links";
const galleryDetailsContentContainerClassName = "x-gallery-details-content-container";
let galleryDetailsInstance = null;


class GalleryDetails {
	constructor(containerNode) {
		this.containerNode = containerNode;
		this.linksContainer = containerNode.querySelector(`.${galleryDetailsLinksContainerClassName}`);
		this.contentContainer = containerNode.querySelector(`.${galleryDetailsContentContainerClassName}`);
	}

	addLink(title, order) {
		if (this.linksContainer === null) { return null; }

		const n0 = document.createElement("span");
		n0.className = "x-gallery-details-link-container";
		if (typeof(order) === "number") {
			n0.style.order = `${Math.round(order)}`;
		}

		const n1 = document.createElement("a");
		n1.className = "x-gallery-details-link";
		n1.textContent = title;

		n0.appendChild(n1);

		this.linksContainer.appendChild(n0);
		return n1;
	}

	addContentContainer(name, order) {
		if (this.contentContainer === null) { return null; }

		const n0 = document.createElement("div");
		n0.className = "x-gallery-details-content";
		if (typeof(name) === "string") {
			n0.setAttribute("data-x-content-name", name);
		}
		if (typeof(order) === "number") {
			n0.style.order = `${Math.round(order)}`;
		}

		this.contentContainer.appendChild(n0);
		return n0;
	}

	getContentContainer(name) {
		return this.contentContainer !== null ? this.contentContainer.querySelector(`[data-x-content-name="${name}"]`) : null;
	}
}


function findParentWithClass(node, className) {
	if (node !== null) {
		while ((node = node.parentNode) !== null) {
			if (node.classList.contains(className)) {
				return node;
			}
		}
	}
	return null;
}

function getGalleryInfoContainer() {
	return findParentWithClass(document.querySelector(".gm h1#gn"), "gm");
}

function createGalleryDetailsStylesheet() {
	const id = galleryDetailsStylesheetId;
	const style = require("../style");
	if (!style.hasStylesheet(id)) {
		const src = require("./style/gallery-details.css");
		style.addStylesheet(src, id);
	}
}

function createGalleryDetailsHtml() {
	const n0 = document.createElement("div");
	n0.id = galleryDetailsContainerId;
	n0.className = "x-gallery-details";

	const n1 = document.createElement("div");
	n1.className = "x-gallery-details-inner";

	let n2 = document.createElement("div");
	n2.className = galleryDetailsLinksContainerClassName;
	n1.appendChild(n2);

	n2 = document.createElement("div");
	n2.className = galleryDetailsContentContainerClassName;
	n1.appendChild(n2);

	n0.appendChild(n1);

	return n0;
}

function getGalleryDetails(allowCreate) {
	let n = document.getElementById(galleryDetailsContainerId);
	if (n !== null) {
		if (galleryDetailsInstance === null || galleryDetailsInstance.containerNode !== n) {
			galleryDetailsInstance = new GalleryDetails(n);
		}
		return galleryDetailsInstance;
	}

	if (!allowCreate) { return null; }

	const galleryInfoContainer = getGalleryInfoContainer();
	if (galleryInfoContainer === null) { return null; }

	createGalleryDetailsStylesheet();
	n = createGalleryDetailsHtml();

	galleryInfoContainer.appendChild(n);

	galleryDetailsInstance = new GalleryDetails(n);
	return galleryDetailsInstance;
}


module.exports = {
	get: getGalleryDetails
};

},{"../style":22,"./style/gallery-details.css":11}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{"../gallery-identifier":2}],5:[function(require,module,exports){
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


function addLink(label, url, order) {
	const n = document.getElementById("nb");
	if (n === null) { return null; }

	const div = document.createElement("div");
	const a = document.createElement("a");
	a.href = url;
	a.textContent = label;
	if (typeof(order) === "number") {
		div.style.order = `${order}`;
	}
	div.appendChild(a);
	n.appendChild(div);

	return div;
}


module.exports = {
	addLink
};

},{}],7:[function(require,module,exports){
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

const style = require("../style");


class PopupMenu {
	constructor() {
		this.menuNode = document.createElement("div");
		this.menuNode.className = "x-popup-menu";

		this._onDocumentClickHookElement = null;
		this._onDocumentClick = (e) => onDocumentClickToClose(e, this);
	}

	show(node, fixed, anchor) {
		/* globals DOMRect */
		insertStylesheet();

		const parent = document.body;
		if (this.menuNode.parentNode !== parent) {
			parent.appendChild(this.menuNode);
		}
		this.menuNode.style.left = "0";
		this.menuNode.style.top = "0";
		this.menuNode.classList.toggle("x-popup-menu-fixed", fixed);

		const htmlRect = document.documentElement.getBoundingClientRect();
		const nodeRect = (node instanceof DOMRect) ? node : node.getBoundingClientRect();
		const menuRect = this.menuNode.getBoundingClientRect();
		const windowWidth = window.innerWidth || 0;
		const windowHeight = window.innerHeight || 0;

		let xAnchor = null;
		let yAnchor = null;
		if (isObject(anchor)) {
			let v = anchor.x;
			if (typeof(v) === "number" && !Number.isNaN(v)) { xAnchor = (v > 0.5 ? 1.0 : 0.0); }
			v = anchor.y;
			if (typeof(v) === "number" && !Number.isNaN(v)) { yAnchor = (v > 0.5 ? 1.0 : 0.0); }
		}

		if (xAnchor === null) {
			xAnchor = (nodeRect.x + menuRect.width >= windowWidth) ? 1.0 : 0.0;
		}

		if (yAnchor === null) {
			yAnchor = (nodeRect.y + nodeRect.height + menuRect.height >= windowHeight) ? 0.0 : 1.0;
		}

		let x = nodeRect.x + xAnchor * (nodeRect.width - menuRect.width);
		let y = nodeRect.y + yAnchor * nodeRect.height - menuRect.height * (1.0 - yAnchor);

		x = Math.max(0.0, Math.min(windowWidth - menuRect.width, x));
		y = Math.max(0.0, Math.min(windowHeight - menuRect.height, y));

		if (!fixed) {
			x -= htmlRect.x;
			y -= htmlRect.y;
		}

		this.menuNode.style.left = `${x}px`;
		this.menuNode.style.top = `${y}px`;

		if (this._onDocumentClickHookElement === null) {
			this._onDocumentClickHookElement = document.documentElement;
			this._onDocumentClickHookElement.addEventListener("click", this._onDocumentClick, false);
		}
	}

	hide() {
		if (this.menuNode.parentNode !== null) {
			this.menuNode.parentNode.removeChild(this.menuNode);
		}

		if (this._onDocumentClickHookElement !== null) {
			this._onDocumentClickHookElement.removeEventListener("click", this._onDocumentClick, false);
			this._onDocumentClickHookElement = null;
		}
	}

	addOption(options) {
		const node = document.createElement("a");
		node.className = "x-popup-menu-option";
		node.setAttribute("rel", "noreferrer");

		let closeOnClick = true;
		if (isObject(options)) {
			if (typeof(options.title) === "string") {
				node.textContent = options.title;
			}
			if (typeof(options.url) === "string") {
				node.href = options.url;
			}
			if (typeof(options.target) === "string") {
				node.target = options.target;
			}
			if (typeof(options.order) === "number") {
				node.style.order = `${options.order}`;
			}
			if (typeof(options.callback) === "function") {
				node.addEventListener("click", options.callback, false);
			}
			closeOnClick = (typeof(options.close) !== "boolean" || options.close);
		}

		if (closeOnClick) {
			node.addEventListener("click", (e) => onMenuItemClickToClose(e, this), false);
		}

		this.menuNode.appendChild(node);
		return node;
	}

	removeOption(node) {
		if (node.parentNode === this.menuNode) {
			node.parentNode.removeChild(node);
		}
	}
}


function onDocumentClickToClose(e, menu) {
	if (!menu.menuNode.contains(e.target)) {
		menu.hide();
	}
}

function onMenuItemClickToClose(e, menu) {
	menu.hide();
}

function isObject(v) {
	return v !== null && typeof(v) === "object" && !Array.isArray(v);
}

function insertStylesheet() {
	const id = "x-popup-menu";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style/popup-menu.css");
	style.addStylesheet(src, id);
}


module.exports = {
	PopupMenu
};

},{"../style":22,"./style/popup-menu.css":12}],9:[function(require,module,exports){
"use strict";


const style = require("../style");
const urlFragment = require("../url-fragment");


const settingsContainerClass = "x-settings-container";
const settingsContainerHiddenClass = "x-settings-container-hidden";
const defaultSettingsHiddenClass = "x-settings-hidden";

let settingsContainerOuter = null;
let settingsContainer = null;


function addLink() {
	const id = "x-nav-settings-link";

	let n = document.getElementById(id);
	if (n !== null) { return n; }

	const navBar = require("./navigation-bar");
	n = navBar.addLink("x", `/uconfig.php${urlFragment.create("settings")}`, 1);
	if (n === null) { return null; }

	n.id = id;
	return n;
}

function initialize() {
	settingsContainerOuter = document.querySelector("#outer.stuffbox");
	if (settingsContainerOuter === null) { return; }

	settingsContainer = settingsContainerOuter.querySelector(`.${settingsContainerClass}`);
	if (settingsContainer === null) {
		settingsContainer = document.createElement("div");
		settingsContainer.className = `${settingsContainerClass} ${settingsContainerHiddenClass}`;
		settingsContainerOuter.appendChild(settingsContainer);
	}

	const id = "x-settings";
	if (!style.hasStylesheet(id)) {
		const src = require("./style/settings.css");
		style.addStylesheet(src, id);
	}

	urlFragment.addRoute(/^\/settings(\/[\w\W]*)?$/, onSettingsPageChanged);
}

function onSettingsPageChanged(match) {
	setSettingsVisible(match !== null);
}

function setSettingsVisible(visible) {
	if (settingsContainerOuter === null || settingsContainer === null) { return; }

	if (settingsContainer.classList.contains(settingsContainerHiddenClass) !== visible) {
		// No change
		return;
	}

	settingsContainer.classList.toggle(settingsContainerHiddenClass, !visible);

	for (const child of settingsContainerOuter.children) {
		if (child === settingsContainer) { continue; }
		child.classList.toggle(defaultSettingsHiddenClass, visible);
	}
}

function addSection(header, id, order) {
	if (settingsContainer === null) { return null; }

	const fullId = `x-settings-section-${id}`;

	let section = settingsContainer.querySelector(`#${fullId}`);
	if (section === null) {
		section = document.createElement("div");
		section.id = fullId;
		section.className = "x-settings-section-container";
		if (typeof(order) === "number") {
			section.style.order = `${order}`;
		}

		settingsContainer.appendChild(section);
	}

	let cls = "x-settings-section-header";
	let sectionHeader = section.querySelector(`.${cls}`);
	if (sectionHeader === null) {
		sectionHeader = document.createElement("h2");
		sectionHeader.className = cls;
		sectionHeader.textContent = header;
		const relative = section.firstChild;
		if (relative !== null) {
			section.insertBefore(relative, sectionHeader);
		} else {
			section.appendChild(sectionHeader);
		}
	}

	cls = "x-settings-section-content";
	let sectionContent = section.querySelector(`.${cls}`);
	if (sectionContent === null) {
		sectionContent = document.createElement("div");
		sectionContent.className = cls;
		section.appendChild(sectionContent);
	}

	return sectionContent;
}


module.exports = {
	addLink,
	initialize,
	addSection
};

},{"../style":22,"../url-fragment":23,"./navigation-bar":6,"./style/settings.css":13}],10:[function(require,module,exports){
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
module.exports = ".x-gallery-details{font-size:10pt;border:none;padding:.5em 0 0 0;margin:-3px -5px}.x-gallery-details-content:before,.x-gallery-details:before{content:\"\";display:block;margin:0 .5em;border-top:1px solid #000}:root:not(.x-is-dark) .x-gallery-details-content:before,:root:not(.x-is-dark) .x-gallery-details:before{border-top-color:#5c0d12}.x-gallery-details-inner{border:none;margin:0}.x-gallery-details-links{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;align-content:flex-start;padding:.5em;margin-left:-1em}.x-gallery-details-link-container{flex:0 1 auto;margin-left:1em}.x-gallery-details-link{display:inline-block;cursor:pointer}.x-gallery-details-content-container{display:flex;width:100%;flex-flow:column wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start}.x-gallery-details-content{flex:0 1 auto;width:100%}";
},{}],12:[function(require,module,exports){
module.exports = ".x-popup-menu{position:absolute;font-size:10pt;border:1px solid #000;background-color:#43464e;display:flex;flex-direction:column;z-index:210;text-align:left;box-shadow:.25em .25em 0 0 rgba(0,0,0,.5)}:root:not(.x-is-dark) .x-popup-menu{border-color:#5c0d12;background-color:#e3e0d1;box-shadow:.25em .25em 0 0 rgba(92,13,18,.5)}.x-popup-menu.x-popup-menu-fixed{position:fixed}.x-popup-menu-option{padding:.25em 1em;line-height:1.375em;text-decoration:none}.x-popup-menu-option:hover{background-color:#34353b}:root:not(.x-is-dark) .x-popup-menu-option:hover{background-color:#edebdf}";
},{}],13:[function(require,module,exports){
module.exports = ".x-settings-container{display:flex;flex-direction:column;margin-top:-1em}.x-settings-container.x-settings-container-hidden{display:none}.x-settings-hidden{display:none!important}.x-settings-option select{margin-right:.5em}.x-settings-section-container{display:block;width:100%;margin-top:1em}.x-settings-section-content{margin:8px auto 10px 10px;clear:both}.x-settings-section-header{font-size:1.25em;line-height:1.5em;margin:.25em 0}.x-settings-section{display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center;align-content:flex-start;flex-wrap:nowrap;width:100%;padding:.5em 0}.x-settings-section+.x-settings-section{border-top:1px solid rgba(0,0,0,.25)}:root:not(.x-is-dark) .x-settings-section+.x-settings-section{border-top-color:rgba(92,13,18,.25)}.x-settings-section-left{flex:1 1 auto;padding-right:.5em}.x-settings-section-right{flex:0 0 auto;min-width:30%;text-align:right}.x-settings-section-title{font-weight:700;line-height:1.5em}.x-settings-section-description{line-height:1.35em}.x-settings-section-description+.x-settings-section-description{margin-top:.25em}input.x-settings-section-input[type=number],input.x-settings-section-input[type=text]{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e;box-sizing:border-box}:root:not(.x-is-dark) input.x-settings-section-input[type=number],:root:not(.x-is-dark) input.x-settings-section-input[type=text]{background-color:#e3e0d1}input.x-settings-section-input[type=text]{width:20em}input.x-settings-section-input[type=number]{width:5em;-moz-appearance:textfield}input.x-settings-section-input[type=number]::-webkit-inner-spin-button,input.x-settings-section-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}textarea.x-settings-section-textarea{border:none;border-radius:0;margin:0;padding:.25em .5em;line-height:1.375em;background-color:#43464e;resize:vertical;font-size:inherit;width:100%;min-height:1.875em;height:4.625em;box-sizing:border-box;font-family:\"Courier New\",Courier,monospace}:root:not(.x-is-dark) textarea.x-settings-section-textarea{background-color:#e3e0d1}.x-settings-input-table-container .lc{display:inline-block;margin-right:-6px}.x-settings-container code{font-family:'Courier New',Courier,monospace;background-color:#43464e;font-weight:700}:root:not(.x-is-dark) .x-settings-container code{background-color:#e3e0d1}.x-settings-light-text{font-weight:400;opacity:.75}.x-settings-input-table-container{display:inline-block;text-align:left}.x-settings-input-table{display:table}.x-settings-input-row{display:table-row}.x-settings-input-row.x-settings-input-header-row{font-size:.8em;line-height:1em;opacity:.75}.x-settings-input-cell{display:table-cell}.x-settings-input-cell+.x-settings-input-cell{padding-left:.25em}.x-settings-input-row:not(.x-settings-input-header-row)+.x-settings-input-row>.x-settings-input-cell{padding-top:.25em}.x-settings-input-cell.x-settings-input-cell-middle{vertical-align:middle}.x-settings-input-cell.x-settings-input-cell-fill{width:100%}.x-settings-input-cell.x-settings-input-cell-nowrap{white-space:nowrap}.x-settings-input-label{cursor:pointer;margin:0 0 0 1em}.x-settings-input-checkbox-prefix{vertical-align:middle;display:inline-block;padding-right:.5em}";
},{}],14:[function(require,module,exports){
"use strict";

const gm = require("./gm");


function create(configKey, configDefault) {
	let config = null;
	let configGetPromise = null;


	async function loadConfig() {
		const configString = await gm.getValue(configKey, null);
		if (typeof(configString) === "string") {
			try {
				const c = JSON.parse(configString);
				if (c !== null && typeof(c) === "object" && !Array.isArray(c)) {
					return Object.assign({}, configDefault, c);
				}
			} catch (e) {}
		}
		return Object.assign({}, configDefault);
	}

	function get() {
		if (config !== null) { return Promise.resolve(config); }

		if (configGetPromise === null) {
			configGetPromise = loadConfig().then((v) => config = v);
		}

		return configGetPromise;
	}

	async function save() {
		if (config !== null) {
			await gm.setValue(configKey, JSON.stringify(config, null, ""));
		}
	}

	async function bindInput(node, settingName, options, valueName) {
		const c = await get();

		if (typeof(valueName) === "undefined") {
			valueName = getDefaultValueName(node);
		}

		const updateInput = () => {
			const {value, valid} = convertToType(c[settingName], options, true);
			if (valid) { node[valueName] = value; }
		};

		updateInput();

		node.addEventListener("change", () => {
			const {value, valid} = convertToType(node[valueName], options, false);
			if (valid) {
				c[settingName] = value;
				save();
			}

			updateInput();
		}, false);
	}


	return {
		get,
		save,
		bindInput
	};
}


const defaultTypeConvertOptions = {};


function getDefaultValueName(node) {
	switch (node.tagName) {
		case "INPUT":
			if (node.type === "checkbox") { return "checked"; }
			break;
	}

	return "value";
}

function convertToType(value, options, toInput) {
	if (typeof(options) === "string") {
		return convertToTypeNormalized(value, options, defaultTypeConvertOptions, toInput);
	} if (options !== null && typeof(options) === "object" && typeof(options.type) === "string") {
		return convertToTypeNormalized(value, options.type, options, toInput);
	} else {
		return { value, valid: true };
	}
}

function convertToTypeNormalized(value, typeName, options, toInput) {
	let valid = true;

	// Convert
	switch (typeName) {
		case "boolean":
			value = !!value;
			break;
		case "integer":
		case "number":
			value = (typeName === "number" ? parseFloat(`${value}`) : parseInt(`${value}`, 10));
			if (!Number.isFinite(value)) {
				value = 0;
				valid = false;
			}
			break;
		case "string":
			value = `${value}`;
			break;
	}

	// Transform
	if (!toInput && typeof(options.inputToValue) === "function") {
		value = options.inputToValue(value);
	}

	// Limits
	switch (typeName) {
		case "integer":
		case "number":
			if (typeof(options.min) === "number" && value < options.min) { value = options.min; }
			if (typeof(options.max) === "number" && value > options.max) { value = options.max; }
			break;
		case "string":
			if (typeof(options.maxLength) === "number" && value.length > options.maxLength) {
				value = value.substr(0, options.maxLength);
			}
			break;
	}

	// Transform
	if (toInput && typeof(options.valueToInput) === "function") {
		value = options.valueToInput(value);
	}

	return { value, valid };
}


module.exports = {
	create
};

},{"./gm":15}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
"use strict";

const configKey = "x-search-links-config";
const searchTargetsDefault = [
	{
		title: "Search by Name",
		url: "/?f_cats=0&f_sname=1&f_search=\"{short-name}\"",
		enabled: true
	},
	{
		title: "Search by Full Name",
		url: "/?f_cats=0&f_sname=1&f_search=\"{full-name}\"",
		enabled: true
	},
	{
		title: "Search by Name (nhentai.net)",
		url: "https://nhentai.net/search/?q=\"{short-name}\"",
		enabled: true
	},
	{
		title: "Search by Full Name (nhentai.net)",
		url: "https://nhentai.net/search/?q=\"{full-name}\"",
		enabled: true
	},
	{
		title: "Search by Name (hitomi.la)",
		url: "https://hitomi.la/search.html?{short-name}",
		enabled: true
	}
];
const configDefault = {
	searchTargets: getDefaultSearchTargets()
};

function getDefaultSearchTargets() {
	return JSON.parse(JSON.stringify(searchTargetsDefault, null, ""));
}

module.exports = require("../config").create(configKey, configDefault);
module.exports.getDefaultSearchTargets = getDefaultSearchTargets;

},{"../config":14}],18:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const style = require("../style");
const pageType = require("../api/page-type");
const settings = require("./settings");
const PopupMenu = require("../api/popup-menu").PopupMenu;

let menu = null;


async function setupGalleryPage() {
	const config = await require("./config").get();
	const searchTargets = config.searchTargets;
	if (!Array.isArray(searchTargets) || searchTargets.length === 0) { return; }

	const galleryDetails = require("../api/gallery-details").get(true);
	if (galleryDetails === null) { return; }

	const link = galleryDetails.addLink("Custom Search", 0);
	if (link === null) { return; }

	link.addEventListener("click", (e) => onMenuLinkClick(e, link, searchTargets), false);
}

function onMenuLinkClick(e, node, searchTargets) {
	if (menu === null) {
		menu = createMenu(searchTargets);
	}

	if (menu !== null) {
		menu.show(node, false, null);
	}

	e.preventDefault();
	e.stopPropagation();
	return false;
}

function createMenu(searchTargets) {
	const options = [];
	for (const searchTarget of searchTargets) {
		if (searchTarget.enabled === false) { continue; }
		options.push({
			title: searchTarget.title,
			url: searchTarget.url,
			target: "_blank"
		});
	}

	if (options.length === 0) { return; }

	const getGalleryInfoFromHtml = require("../api/gallery-info/get-from-html");
	const info = getGalleryInfoFromHtml(document.documentElement, window.location.href);
	if (info === null) { return; }

	const replacements = getGalleryInfoReplacements(info);

	const menu = new PopupMenu();
	for (const option of options) {
		option.url = formatUrl(option.url, replacements);
		menu.addOption(option);
	}

	return menu;
}

function formatUrl(url, replacements) {
	return url.replace(/\{([^\}]*)\}/g, (m0, m1) => {
		return Object.prototype.hasOwnProperty.call(replacements, m1) ? replacements[m1] : m0;
	});
}

function getGalleryInfoReplacements(galleryInfo) {
	return {
		"short-name": encodeURIComponent(getShortTitle(galleryInfo.title)),
		"full-name": encodeURIComponent(galleryInfo.title)
	};
}

function getShortTitle(title) {
	const prefixTags = /^\s*(\(([^\)]*?)\)|\[([^\]]*?)\]|\{([^\}]*?)\})\s*/i;
	const suffixTags = /\s*(\(([^\)]*?)(?:\)|$)|\[([^\]]*?)(?:\]|$)|\{([^\}]*?)(?:\}|$))\s*$/i;

	let m;
	while ((m = prefixTags.exec(title))) {
		title = title.substr(m.index + m[0].length);
	}
	while ((m = suffixTags.exec(title))) {
		title = title.substr(0, m.index);
	}
	return title;
}


function insertStylesheet() {
	const id = "x-search-links";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style.css");
	style.addStylesheet(src, id);
}


function main() {
	settings.addLink();

	const currentPageType = pageType.get(document, location);
	switch (currentPageType) {
		case "gallery":
			insertStylesheet();
			setupGalleryPage();
			break;
		case "settings":
			insertStylesheet();
			settings.initialize();
			break;
	}
}


ready.onReady(main);

},{"../api/gallery-details":1,"../api/gallery-info/get-from-html":3,"../api/page-type":7,"../api/popup-menu":8,"../ready":16,"../style":22,"./config":17,"./settings":20,"./style.css":21}],19:[function(require,module,exports){
module.exports = "<div class=\"x-settings-section\">\r\n\t<div class=\"x-settings-section-left\">\r\n\t\t<div class=\"x-settings-section-title\">Search Targets</div>\r\n\t\t<div class=\"x-settings-section-description\">\r\n\t\t\tList of search search targets.\r\n\t\t</div>\r\n\t\t<div class=\"x-settings-section-description\">\r\n\t\t\t<div class=\"x-settings-input-table-container x-search-links-search-target-container\">\r\n\t\t\t\t<div class=\"x-settings-input-table\">\r\n\t\t\t\t\t<div class=\"x-settings-input-row x-settings-input-header-row\">\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">Order</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">Title</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">URL</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">Enabled</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"x-settings-input-row x-search-links-search-target-entry\">\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell x-settings-input-cell-nowrap\">\r\n\t\t\t\t\t\t\t<input class=\"x-search-links-settings-button x-search-links-remove-button\" type=\"button\" value=\"&#x2716;\" /><input class=\"x-search-links-settings-button x-search-links-move-up-button\" type=\"button\" value=\"&#x25B2;\" /><input class=\"x-search-links-settings-button x-search-links-move-down-button\" type=\"button\" value=\"&#x25BC;\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t\t\t<input class=\"x-settings-section-input x-search-links-title-input\" type=\"text\" spellcheck=\"false\" data-x-settings-option=\"title\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell x-settings-input-cell-fill\">\r\n\t\t\t\t\t\t\t<input class=\"x-settings-section-input x-search-links-url-input\" type=\"text\" spellcheck=\"false\" data-x-settings-option=\"url\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell x-settings-input-cell-middle\">\r\n\t\t\t\t\t\t\t<label><span class=\"lc\"><input class=\"x-settings-section-input x-search-links-enabled-input\" type=\"checkbox\" data-x-settings-for=\"enabled\" /><span></span></label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"x-settings-input-table-container\">\r\n\t\t\t\t<div class=\"x-settings-input-table\">\r\n\t\t\t\t\t<div class=\"x-settings-input-row x-search-links-search-target-entry\">\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell\">\r\n\t\t\t\t\t\t\t\t<input class=\"x-search-links-settings-button x-search-links-add-button\" type=\"button\" value=\"&#x2795;&#xFE0E;\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"x-settings-input-cell x-settings-input-cell-middle\">\r\n\t\t\t\t\t\t\t<a class=\"x-search-links-reset-link\">Reset to default</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
},{}],20:[function(require,module,exports){
"use strict";

const settings = require("../api/settings");

let settingsController = null;


class SettingsController {
	constructor(config, configValue, template, searchTargetParent, addButton, resetButton, hideIfEmptyNode) {
		this.config = config;
		this.configValue = configValue;
		this.template = template;
		this.searchTargetParent = searchTargetParent;
		this.addButton = addButton;
		this.resetButton = resetButton;
		this.hideIfEmptyNode = hideIfEmptyNode;

		this.searchTargets = [];
		this.searchTargetControllers = [];
		this.setupSearchTargets();

		this.addButton.addEventListener("click", () => this.addSearchTarget(), false);
		this.resetButton.addEventListener("click", () => this.resetSearchTargets(), false);
	}

	async addSearchTarget() {
		const searchTarget = { title: "", url: "", enabled: true };
		const index = this.searchTargets.length;
		this.searchTargets.push(searchTarget);
		this.searchTargetControllers.push(new SettingsSearchTargetController(this, searchTarget, index));
		if (index > 0) {
			const c = this.searchTargetControllers[index - 1];
			if (c !== null) { c.updateIndex(c.index); }
		}

		this.updateSearchTargetCount();

		await this.saveConfig();
	}

	async resetSearchTargets() {
		this.cleanupSearchTargets();

		this.configValue.searchTargets = this.config.getDefaultSearchTargets();
		await this.saveConfig();

		this.setupSearchTargets();
	}

	cleanupSearchTargets() {
		for (const searchTargetController of this.searchTargetControllers) {
			searchTargetController.destroy();
		}
		this.searchTargetControllers = [];
	}

	setupSearchTargets() {
		if (!Array.isArray(this.configValue.searchTargets)) {
			this.configValue.searchTargets = [];
		}

		this.searchTargets = this.configValue.searchTargets;
		this.searchTargetControllers = [];

		for (let i = 0, ii = this.searchTargets.length; i < ii; ++i) {
			const searchTarget = this.searchTargets[i];
			const controller = isObject(searchTarget) ? new SettingsSearchTargetController(this, searchTarget, i) : null;
			this.searchTargetControllers.push(controller);
		}

		this.updateSearchTargetCount();
	}

	async move(controller, offset) {
		const indexOld = controller.index;
		const indexNew = Math.max(0, Math.min(this.searchTargetControllers.length - 1, indexOld + offset));
		if (indexNew === indexOld) { return; }

		const searchTarget = this.searchTargets[indexOld];

		this.searchTargets.splice(indexOld, 1);
		this.searchTargets.splice(indexNew, 0, searchTarget);

		this.searchTargetControllers.splice(indexOld, 1);
		this.searchTargetControllers.splice(indexNew, 0, controller);

		for (let i = Math.min(indexOld, indexNew), ii = Math.max(indexOld, indexNew) + 1; i < ii; ++i) {
			const c = this.searchTargetControllers[i];
			if (c !== null) { c.updateIndex(i); }
		}

		let next = null;
		for (let i = indexNew + 1, ii = this.searchTargetControllers.length; i < ii; ++i) {
			const c = this.searchTargetControllers[i];
			if (c !== null) {
				next = c;
				break;
			}
		}

		if (next !== null && next.row.parentNode !== null) {
			next.row.parentNode.insertBefore(controller.row, next.row);
		} else {
			this.searchTargetParent.appendChild(controller.row);
		}

		await this.saveConfig();
	}

	async remove(controller) {
		const index = controller.index;
		this.searchTargets.splice(index, 1);
		this.searchTargetControllers.splice(index, 1);

		controller.destroy();

		for (let i = Math.max(0, index - 1), ii = this.searchTargetControllers.length; i < ii; ++i) {
			const c = this.searchTargetControllers[i];
			if (c !== null) { c.updateIndex(i); }
		}

		this.updateSearchTargetCount();

		await this.saveConfig();
	}

	updateSearchTargetCount() {
		if (this.hideIfEmptyNode === null) { return; }
		this.hideIfEmptyNode.style.display = (this.searchTargetControllers.length > 0 ? "" : "none");
	}

	async saveConfig() {
		this.config.save();
	}
}

class SettingsSearchTargetController {
	constructor(parent, searchTarget, index) {
		this.parent = parent;
		this.searchTarget = searchTarget;
		this.index = index;

		this.hookedEvents = [];
		this.row = this.parent.template.cloneNode(true);
		this.parent.searchTargetParent.appendChild(this.row);

		this.removeButton = this.row.querySelector(".x-search-links-remove-button");
		this.moveUpButton = this.row.querySelector(".x-search-links-move-up-button");
		this.moveDownButton = this.row.querySelector(".x-search-links-move-down-button");
		this.titleField = this.row.querySelector(".x-search-links-title-input");
		this.urlField = this.row.querySelector(".x-search-links-url-input");
		this.enabledCheckbox = this.row.querySelector(".x-search-links-enabled-input");

		this.titleField.value = (typeof(searchTarget.title) === "string" ? searchTarget.title : "");
		this.urlField.value = (typeof(searchTarget.url) === "string" ? searchTarget.url : "");
		this.enabledCheckbox.checked = !!searchTarget.enabled;

		const self = this;
		this._hook(this.removeButton, "click", () => this.remove());
		this._hook(this.moveUpButton, "click", () => this.moveUp());
		this._hook(this.moveDownButton, "click", () => this.moveDown());
		this._hook(this.titleField, "change", function () { self.setTitle(this.value); });
		this._hook(this.urlField, "change", function () { self.setUrl(this.value); });
		this._hook(this.enabledCheckbox, "change", function () { self.setEnabled(this.checked); });

		this.updateIndex(index);
	}

	destroy() {
		if (this.row === null) { return; }

		for (const info of this.hookedEvents) {
			info.node.removeEventListener(info.event, info.callback, false);
		}
		this.hookedEvents = [];

		this.row.parentNode.removeChild(this.row);
		this.row = null;
	}

	remove() {
		this.parent.remove(this);
	}

	moveUp() {
		this.parent.move(this, -1);
	}

	moveDown() {
		this.parent.move(this, 1);
	}

	setTitle(value) {
		if (typeof(value) !== "string") { return; }
		this.searchTarget.title = value;
		this.parent.saveConfig();
	}

	setUrl(value) {
		if (typeof(value) !== "string") { return; }
		this.searchTarget.url = value;
		this.parent.saveConfig();
	}

	setEnabled(value) {
		this.searchTarget.enabled = !!value;
		this.parent.saveConfig();
	}

	updateIndex(index) {
		this.index = index;
		this.moveUpButton.disabled = (index <= 0);
		this.moveDownButton.disabled = (index >= this.parent.searchTargets.length - 1);
	}

	_hook(node, event, callback) {
		this.hookedEvents.push({ node, event, callback });
		node.addEventListener(event, callback, false);
	}
}


function isObject(v) {
	return (v !== null && typeof(v) === "object" && !Array.isArray(v));
}

function addLink() {
	settings.addLink();
}

async function initialize() {
	settings.initialize();

	const section = settings.addSection("Search Links", "search-links", 3);
	if (section !== null) {
		const config = require("./config");
		const configValue = await config.get();
		setupSettings(config, configValue, section);
	}
}

function setupSettings(config, configValue, container) {
	if (settingsController !== null) { return; }

	container.innerHTML = require("./settings.html");

	const template = container.querySelector(".x-search-links-search-target-entry");
	const parent = template.parentNode;
	const addButton = container.querySelector(".x-search-links-add-button");
	const resetButton = container.querySelector(".x-search-links-reset-link");
	const hideNode = container.querySelector(".x-search-links-search-target-container");
	parent.removeChild(template);

	settingsController = new SettingsController(config, configValue, template, parent, addButton, resetButton, hideNode);
}


module.exports = {
	addLink,
	initialize
};

},{"../api/settings":9,"./config":17,"./settings.html":19}],21:[function(require,module,exports){
module.exports = "input.x-search-links-settings-button[type=button]{display:inline-block;border:none;border-radius:0;margin:0;padding:0;line-height:1.875em;box-sizing:border-box;font-size:inherit;font-weight:700;width:1.875em;height:1.875em;min-height:0;background-color:#43464e;text-align:center;cursor:pointer}:root.x-is-dark input.x-search-links-settings-button[type=button]:disabled{color:rgba(241,241,241,.5);-webkit-text-fill-color:rgba(241,241,241,.5)}:root:not(.x-is-dark) input.x-search-links-settings-button[type=button]{background-color:#e3e0d1}input.x-search-links-settings-button[type=button]::-moz-focus-inner{border:0}input.x-search-links-settings-button[type=button]+input.x-search-links-settings-button[type=button]{margin-left:.25em}input.x-settings-section-input[type=text].x-search-links-url-input{width:100%}.x-search-links-search-target-container{width:100%}.x-search-links-reset-link{text-decoration:underline;cursor:pointer}.x-search-links-reset-link:not(:hover){opacity:.5}";
},{}],22:[function(require,module,exports){
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

},{"./api/style":10}],23:[function(require,module,exports){
"use strict";


const xPrefix = "#!x";
const separator = "/";
const routes = [];


function clear(addHistory) {
	const url = window.location.pathname + window.location.search;
	if (addHistory) {
		window.history.pushState(null, "", url);
	} else {
		window.history.replaceState(null, "", url);
	}
}

function create(path) {
	return path ? `${xPrefix}${separator}${path}` : xPrefix;
}

function addRoute(match, callback) {
	const route = { match, callback };
	routes.push(route);
	if (routes.length === 1) {
		window.addEventListener("popstate", onUrlFragmentChanged, false);
	}
	testRoutes([route]);
}

function removeRoute(match, callback) {
	for (let i = 0, ii = routes.length; i < ii; ++i) {
		const route = routes[i];
		if (route.match === match && route.callback === callback) {
			routes.splice(i, 1);
			if (routes.length === 0) {
				window.removeEventListener("popstate", onUrlFragmentChanged, false);
			}
			return true;
		}
	}
	return false;
}

function getXFragment() {
	const fragment = window.location.hash;
	return (
		!fragment ||
		fragment.length < xPrefix.length ||
		fragment.substr(0, xPrefix.length) !== xPrefix ||
		(fragment.length > xPrefix.length && fragment[xPrefix.length] !== separator)) ?
		null :
		fragment.substr(xPrefix.length);
}

function testRoutes(routes) {
	const fragment = getXFragment();
	if (fragment === null) { return; }

	for (const route of routes) {
		const match = route.match.exec(fragment);
		route.callback(match, fragment);
	}
}

function onUrlFragmentChanged() {
	testRoutes(routes);
}


module.exports = {
	clear: clear,
	create: create,
	addRoute: addRoute,
	removeRoute: removeRoute
};

},{}]},{},[18])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktZGV0YWlscy5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pZGVudGlmaWVyLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbC5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3R5cGVzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHMuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BvcHVwLW1lbnUuanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvZ2FsbGVyeS1kZXRhaWxzLmNzcyIsInNyYy9hcGkvc3R5bGUvcG9wdXAtbWVudS5jc3MiLCJzcmMvYXBpL3N0eWxlL3NldHRpbmdzLmNzcyIsInNyYy9jb25maWcuanMiLCJzcmMvZ20uanMiLCJzcmMvcmVhZHkuanMiLCJzcmMvc2VhcmNoLWxpbmtzL2NvbmZpZy5qcyIsInNyYy9zZWFyY2gtbGlua3MvbWFpbi5qcyIsInNyYy9zZWFyY2gtbGlua3Mvc2V0dGluZ3MuaHRtbCIsInNyYy9zZWFyY2gtbGlua3Mvc2V0dGluZ3MuanMiLCJzcmMvc2VhcmNoLWxpbmtzL3N0eWxlLmNzcyIsInNyYy9zdHlsZS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3QgZ2FsbGVyeURldGFpbHNTdHlsZXNoZWV0SWQgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLXN0eWxlXCI7XHJcbmNvbnN0IGdhbGxlcnlEZXRhaWxzQ29udGFpbmVySWQgPSBcIngtZ2FsbGVyeS1kZXRhaWxzXCI7XHJcbmNvbnN0IGdhbGxlcnlEZXRhaWxzTGlua3NDb250YWluZXJDbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLWxpbmtzXCI7XHJcbmNvbnN0IGdhbGxlcnlEZXRhaWxzQ29udGVudENvbnRhaW5lckNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWRldGFpbHMtY29udGVudC1jb250YWluZXJcIjtcclxubGV0IGdhbGxlcnlEZXRhaWxzSW5zdGFuY2UgPSBudWxsO1xyXG5cclxuXHJcbmNsYXNzIEdhbGxlcnlEZXRhaWxzIHtcclxuXHRjb25zdHJ1Y3Rvcihjb250YWluZXJOb2RlKSB7XHJcblx0XHR0aGlzLmNvbnRhaW5lck5vZGUgPSBjb250YWluZXJOb2RlO1xyXG5cdFx0dGhpcy5saW5rc0NvbnRhaW5lciA9IGNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihgLiR7Z2FsbGVyeURldGFpbHNMaW5rc0NvbnRhaW5lckNsYXNzTmFtZX1gKTtcclxuXHRcdHRoaXMuY29udGVudENvbnRhaW5lciA9IGNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihgLiR7Z2FsbGVyeURldGFpbHNDb250ZW50Q29udGFpbmVyQ2xhc3NOYW1lfWApO1xyXG5cdH1cclxuXHJcblx0YWRkTGluayh0aXRsZSwgb3JkZXIpIHtcclxuXHRcdGlmICh0aGlzLmxpbmtzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHRcdG4wLmNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWRldGFpbHMtbGluay1jb250YWluZXJcIjtcclxuXHRcdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdG4wLnN0eWxlLm9yZGVyID0gYCR7TWF0aC5yb3VuZChvcmRlcil9YDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdFx0bjEuY2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlscy1saW5rXCI7XHJcblx0XHRuMS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG5cclxuXHRcdG4wLmFwcGVuZENoaWxkKG4xKTtcclxuXHJcblx0XHR0aGlzLmxpbmtzQ29udGFpbmVyLmFwcGVuZENoaWxkKG4wKTtcclxuXHRcdHJldHVybiBuMTtcclxuXHR9XHJcblxyXG5cdGFkZENvbnRlbnRDb250YWluZXIobmFtZSwgb3JkZXIpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRlbnRDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBuMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRuMC5jbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnRcIjtcclxuXHRcdGlmICh0eXBlb2YobmFtZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0bjAuc2V0QXR0cmlidXRlKFwiZGF0YS14LWNvbnRlbnQtbmFtZVwiLCBuYW1lKTtcclxuXHRcdH1cclxuXHRcdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdG4wLnN0eWxlLm9yZGVyID0gYCR7TWF0aC5yb3VuZChvcmRlcil9YDtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobjApO1xyXG5cdFx0cmV0dXJuIG4wO1xyXG5cdH1cclxuXHJcblx0Z2V0Q29udGVudENvbnRhaW5lcihuYW1lKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZW50Q29udGFpbmVyICE9PSBudWxsID8gdGhpcy5jb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXgtY29udGVudC1uYW1lPVwiJHtuYW1lfVwiXWApIDogbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmaW5kUGFyZW50V2l0aENsYXNzKG5vZGUsIGNsYXNzTmFtZSkge1xyXG5cdGlmIChub2RlICE9PSBudWxsKSB7XHJcblx0XHR3aGlsZSAoKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpICE9PSBudWxsKSB7XHJcblx0XHRcdGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuIG5vZGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJbmZvQ29udGFpbmVyKCkge1xyXG5cdHJldHVybiBmaW5kUGFyZW50V2l0aENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIiksIFwiZ21cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlEZXRhaWxzU3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IGdhbGxlcnlEZXRhaWxzU3R5bGVzaGVldElkO1xyXG5cdGNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5cdGlmICghc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHtcclxuXHRcdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL2dhbGxlcnktZGV0YWlscy5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURldGFpbHNIdG1sKCkge1xyXG5cdGNvbnN0IG4wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRuMC5pZCA9IGdhbGxlcnlEZXRhaWxzQ29udGFpbmVySWQ7XHJcblx0bjAuY2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlsc1wiO1xyXG5cclxuXHRjb25zdCBuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bjEuY2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlscy1pbm5lclwiO1xyXG5cclxuXHRsZXQgbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdG4yLmNsYXNzTmFtZSA9IGdhbGxlcnlEZXRhaWxzTGlua3NDb250YWluZXJDbGFzc05hbWU7XHJcblx0bjEuYXBwZW5kQ2hpbGQobjIpO1xyXG5cclxuXHRuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bjIuY2xhc3NOYW1lID0gZ2FsbGVyeURldGFpbHNDb250ZW50Q29udGFpbmVyQ2xhc3NOYW1lO1xyXG5cdG4xLmFwcGVuZENoaWxkKG4yKTtcclxuXHJcblx0bjAuYXBwZW5kQ2hpbGQobjEpO1xyXG5cclxuXHRyZXR1cm4gbjA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlEZXRhaWxzKGFsbG93Q3JlYXRlKSB7XHJcblx0bGV0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnYWxsZXJ5RGV0YWlsc0NvbnRhaW5lcklkKTtcclxuXHRpZiAobiAhPT0gbnVsbCkge1xyXG5cdFx0aWYgKGdhbGxlcnlEZXRhaWxzSW5zdGFuY2UgPT09IG51bGwgfHwgZ2FsbGVyeURldGFpbHNJbnN0YW5jZS5jb250YWluZXJOb2RlICE9PSBuKSB7XHJcblx0XHRcdGdhbGxlcnlEZXRhaWxzSW5zdGFuY2UgPSBuZXcgR2FsbGVyeURldGFpbHMobik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZ2FsbGVyeURldGFpbHNJbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdGlmICghYWxsb3dDcmVhdGUpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZ2FsbGVyeUluZm9Db250YWluZXIgPSBnZXRHYWxsZXJ5SW5mb0NvbnRhaW5lcigpO1xyXG5cdGlmIChnYWxsZXJ5SW5mb0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjcmVhdGVHYWxsZXJ5RGV0YWlsc1N0eWxlc2hlZXQoKTtcclxuXHRuID0gY3JlYXRlR2FsbGVyeURldGFpbHNIdG1sKCk7XHJcblxyXG5cdGdhbGxlcnlJbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG4pO1xyXG5cclxuXHRnYWxsZXJ5RGV0YWlsc0luc3RhbmNlID0gbmV3IEdhbGxlcnlEZXRhaWxzKG4pO1xyXG5cdHJldHVybiBnYWxsZXJ5RGV0YWlsc0luc3RhbmNlO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0OiBnZXRHYWxsZXJ5RGV0YWlsc1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIEdhbGxlcnlJZGVudGlmaWVyIHtcclxuXHRjb25zdHJ1Y3RvcihpZCwgdG9rZW4pIHtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMudG9rZW4gPSB0b2tlbjtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjcmVhdGVGcm9tVXJsKHVybCkge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSAvXi4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pPyQvLmV4ZWModXJsKTtcclxuXHRcdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IHBhdGggPSBtYXRjaFsxXS5yZXBsYWNlKC9eXFwvK3xcXC8rJC9nLCBcIlwiKS5yZXBsYWNlKC9cXC97Mix9L2csIFwiL1wiKS5zcGxpdChcIi9cIik7XHJcblx0XHRpZiAocGF0aFswXSAhPT0gXCJnXCIgfHwgcGF0aC5sZW5ndGggPCAzKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgaWQgPSBwYXJzZUludChwYXRoWzFdLCAxMCk7XHJcblx0XHRyZXR1cm4gKE51bWJlci5pc05hTihpZCkgPyBudWxsIDogbmV3IEdhbGxlcnlJZGVudGlmaWVyKGlkLCBwYXRoWzJdKSk7XHJcblx0fVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0R2FsbGVyeUlkZW50aWZpZXJcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENzc1VybCh1cmxTdHJpbmcpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gL3VybFxccypcXChcXHMqKFsnXCJdKT8vO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybFN0cmluZyk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHF1b3RlID0gbWF0Y2hbMV0gfHwgXCJcIjtcclxuXHR1cmxTdHJpbmcgPSB1cmxTdHJpbmcuc3Vic3RyKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIC0gcXVvdGUubGVuZ3RoKTtcclxuXHJcblx0Y29uc3QgcGF0dGVybjIgPSBuZXcgUmVnRXhwKGAoJHtxdW90ZX0pXFxcXHMqXFxcXClcXFxccyokYCk7XHJcblx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybjIuZXhlYyh1cmxTdHJpbmcpO1xyXG5cdGlmIChtYXRjaDIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdXJsID0gdXJsU3RyaW5nLnN1YnN0cigwLCBtYXRjaDIuaW5kZXggKyBtYXRjaDJbMV0ubGVuZ3RoKTtcclxuXHJcblx0bGV0IHVybDIgPSB1cmw7XHJcblx0aWYgKCFxdW90ZSkge1xyXG5cdFx0dXJsMiA9IHVybC5yZXBsYWNlKC9cIi9nLCBcIlxcXFxcXFwiXCIpO1xyXG5cdFx0dXJsMiA9IGBcIiR7dXJsMn1cImA7XHJcblx0fSBlbHNlIGlmIChxdW90ZSA9PT0gXCInXCIpIHtcclxuXHRcdHVybDIgPSB1cmwuc3Vic3RyKDEsIHVybC5sZW5ndGggLSAyKTtcclxuXHRcdHVybDIgPSB1cmwyLnJlcGxhY2UoL1xcXFwnL2csIFwiJ1wiKTtcclxuXHRcdHVybDIgPSBgXCIke3VybDJ9XCJgO1xyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdHJldHVybiBKU09OLnBhcnNlKHVybDIpO1xyXG5cdH0gY2F0Y2ggKGUpIHtcclxuXHRcdHJldHVybiB1cmw7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXAodGV4dCkge1xyXG5cdGNvbnN0IG1hdGNoID0gLyhbMC05XSspLShbMC05XSspLShbMC05XSspXFxzKyhbMC05XSspOihbMC05XSspLy5leGVjKHRleHQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRyZXR1cm4gRGF0ZS5VVEMoXHJcblx0XHRwYXJzZUludChtYXRjaFsxXSwgMTApLCAvLyB5ZWFyXHJcblx0XHRwYXJzZUludChtYXRjaFsyXSwgMTApIC0gMSwgLy8gbW9udGhcclxuXHRcdHBhcnNlSW50KG1hdGNoWzNdLCAxMCksIC8vIGRheVxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbNF0sIDEwKSwgLy8gaG91cnNcclxuXHRcdHBhcnNlSW50KG1hdGNoWzVdLCAxMCksIC8vIG1pbnV0ZXNcclxuXHRcdDAsIC8vIHNlY29uZHNcclxuXHRcdDApOyAvLyBtaWxsaXNlY29uZHNcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRpdGxlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2duXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IG5vZGUudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpdGxlT3JpZ2luYWwoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2pcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gbm9kZS50ZXh0Q29udGVudC50cmltKCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWFpblRodW1ibmFpbFVybChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZDE+ZGl2XCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IGdldENzc1VybChub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnkoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2RjPmRpdltvbmNsaWNrXVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1snXCJdLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/WydcIl0vO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwib25jbGlja1wiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0gOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXBsb2FkZXIoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2RuPmFcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyAobWF0Y2hbMV0uc3BsaXQoXCIvXCIpWzFdIHx8IFwiXCIpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhdGluZ0NvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3JhdGluZ19jb3VudFwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB2YWx1ZSA9IHBhcnNlSW50KG5vZGUudGV4dENvbnRlbnQudHJpbSgpLCAxMCk7XHJcblx0cmV0dXJuIChOdW1iZXIuaXNOYU4odmFsdWUpID8gbnVsbCA6IHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmF0aW5nQXZlcmFnZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfbGFiZWxcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9hdmVyYWdlOlxccyooWzAtOVxcLl0rKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xyXG5cdHJldHVybiAoTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhdm9yaXRlQ291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZmF2Y291bnRcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXHMqKFswLTldK3xvbmNlKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBtYXRjaDEgPSBtYXRjaFsxXTtcclxuXHRyZXR1cm4gKG1hdGNoMS50b0xvd2VyQ2FzZSgpID09PSBcIm9uY2VcIiA/IDEgOiBwYXJzZUludChtYXRjaDEsIDEwKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZhdm9yaXRlQ2F0ZWdvcnkoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZmF2PmRpdi5pXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHRpdGxlID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKSB8fCBcIlwiO1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvYmFja2dyb3VuZC1wb3NpdGlvblxccyo6XFxzKlxcZCsoPzpweCk/XFxzKygtP1xcZCspKD86cHgpLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpIHx8IFwiXCIpO1xyXG5cdGNvbnN0IGluZGV4ID0gKG1hdGNoICE9PSBudWxsKSA/XHJcblx0XHRNYXRoLmZsb29yKChNYXRoLmFicyhwYXJzZUludChtYXRjaFsxXSwgMTApKSAtIDIpIC8gMTkpIDpcclxuXHRcdC0xO1xyXG5cclxuXHRyZXR1cm4geyBpbmRleCwgdGl0bGUgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGh1bWJuYWlsU2l6ZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RvND4ubm9zZWxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA8IDIpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRyZXR1cm4gKG5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucyhcInRoc1wiKSA/IFwibm9ybWFsXCIgOiBcImxhcmdlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaHVtYm5haWxSb3dzKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZG8yPi5ub3NlbFwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxzKihbMC05XSspLztcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInRoc1wiKSkge1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUYWdzKGh0bWwpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gLyguKyk6LztcclxuXHRjb25zdCBncm91cHMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdGFnbGlzdCB0clwiKTtcclxuXHRjb25zdCB0YWdzID0ge307XHJcblxyXG5cdGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSB7XHJcblx0XHRjb25zdCB0ZHMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIik7XHJcblx0XHRpZiAodGRzLmxlbmd0aCA9PT0gMCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHRkc1swXS50ZXh0Q29udGVudCk7XHJcblx0XHRjb25zdCBuYW1lc3BhY2UgPSAobWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXS50cmltKCkgOiBcIlwiKTtcclxuXHJcblx0XHRsZXQgbmFtZXNwYWNlVGFncztcclxuXHRcdGlmICh0YWdzLmhhc093blByb3BlcnR5KG5hbWVzcGFjZSkpIHtcclxuXHRcdFx0bmFtZXNwYWNlVGFncyA9IHRhZ3NbbmFtZXNwYWNlXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MgPSBbXTtcclxuXHRcdFx0dGFnc1tuYW1lc3BhY2VdID0gbmFtZXNwYWNlVGFncztcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0YWdEaXZzID0gdGRzW3Rkcy5sZW5ndGggLSAxXS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xyXG5cdFx0Zm9yIChjb25zdCBkaXYgb2YgdGFnRGl2cykge1xyXG5cdFx0XHRjb25zdCBsaW5rID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJhXCIpO1xyXG5cdFx0XHRpZiAobGluayA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdFx0Y29uc3QgdGFnID0gbGluay50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MucHVzaCh0YWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRhZ3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERldGFpbHNOb2RlcyhodG1sKSB7XHJcblx0cmV0dXJuIGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZGQgdHJcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGVVcGxvYWRlZChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1swXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gZ2V0VGltZXN0YW1wKG5vZGUudGV4dENvbnRlbnQpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVJbmZvKGRldGFpbHNOb2Rlcykge1xyXG5cdGxldCB2aXNpYmxlID0gdHJ1ZTtcclxuXHRsZXQgdmlzaWJsZVJlYXNvbiA9IG51bGw7XHJcblxyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoID4gMikge1xyXG5cdFx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1syXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0XHRpZiAobm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBwYXR0ZXJuID0gL25vXFxzK1xcKCguKz8pXFwpL2k7XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0XHR2aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdFx0dmlzaWJsZVJlYXNvbiA9IG1hdGNoWzFdLnRyaW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdmlzaWJsZSwgdmlzaWJsZVJlYXNvbiB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYW5ndWFnZUluZm8oZGV0YWlsc05vZGVzKSB7XHJcblx0bGV0IGxhbmd1YWdlID0gbnVsbDtcclxuXHRsZXQgdHJhbnNsYXRlZCA9IGZhbHNlO1xyXG5cclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA+IDMpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbM10ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgdGV4dE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XHJcblx0XHRcdGlmICh0ZXh0Tm9kZSAhPT0gbnVsbCAmJiB0ZXh0Tm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcclxuXHRcdFx0XHRsYW5ndWFnZSA9IHRleHROb2RlLm5vZGVWYWx1ZS50cmltKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IHRyTm9kZSA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5oYWxwXCIpO1xyXG5cdFx0XHR0cmFuc2xhdGVkID0gKHRyTm9kZSAhPT0gbnVsbCAmJiB0ck5vZGUudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09IFwidHJcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyBsYW5ndWFnZSwgdHJhbnNsYXRlZCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gNCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzRdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gLyhbMC05XFwuXSspXFxzKihcXHcrKS9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyB1dGlscy5nZXRCeXRlc1NpemVGcm9tTGFiZWwobWF0Y2hbMV0sIG1hdGNoWzJdKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaWxlQ291bnQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gNSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzVdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gLyhbMC05LF0rKVxccypwYWdlcy9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyBwYXJzZUludChtYXRjaFsxXS5yZXBsYWNlKC8sL2csIFwiXCIpLCAxMCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50KGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDEpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1sxXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDI+YVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChpbmZvICE9PSBudWxsID8gaW5mby5pZGVudGlmaWVyIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE5ld2VyVmVyc2lvbnMoaHRtbCkge1xyXG5cdGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnbmQ+YVwiKTtcclxuXHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBpbmZvID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0XHRpZiAoaW5mbyA9PT0gbnVsbCkgeyBjb250aW51ZTsgfVxyXG5cclxuXHRcdGNvbnN0IGdhbGxlcnlJbmZvID0ge1xyXG5cdFx0XHRpZGVudGlmaWVyOiBpbmZvLmlkZW50aWZpZXIsXHJcblx0XHRcdG5hbWU6IG5vZGUudGV4dENvbnRlbnQudHJpbSgpLFxyXG5cdFx0XHRkYXRlVXBsb2FkZWQ6IG51bGxcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG5vZGUubmV4dFNpYmxpbmcgIT09IG51bGwpIHtcclxuXHRcdFx0Z2FsbGVyeUluZm8uZGF0ZVVwbG9hZGVkID0gZ2V0VGltZXN0YW1wKG5vZGUubmV4dFNpYmxpbmcudGV4dENvbnRlbnQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlc3VsdHMucHVzaChnYWxsZXJ5SW5mbyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0cztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9ycmVudENvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZDUgLmcyPmFcIik7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXGJ0b3JyZW50XFxzK2Rvd25sb2FkXFxzKlxcKFxccyooXFxkKylcXHMqXFwpL2k7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcmNoaXZlcktleShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2Q1IC5nMj5hXCIpO1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxiYXJjaGl2ZVxccytkb3dubG9hZFxcYi9pO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcGF0dGVybjIgPSAvJm9yPShbXidcIl0qKVsnXCJdLztcclxuXHRcdFx0Y29uc3QgbWF0Y2gyID0gcGF0dGVybjIuZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcIm9uY2xpY2tcIikgfHwgXCJcIik7XHJcblx0XHRcdHJldHVybiAobWF0Y2gyICE9PSBudWxsID8gbWF0Y2gyWzFdIDogbnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21IdG1sKGluZm8sIGh0bWwpIHtcclxuXHQvLyBHZW5lcmFsXHJcblx0aW5mby50aXRsZSA9IGdldFRpdGxlKGh0bWwpO1xyXG5cdGluZm8udGl0bGVPcmlnaW5hbCA9IGdldFRpdGxlT3JpZ2luYWwoaHRtbCk7XHJcblx0aW5mby5tYWluVGh1bWJuYWlsVXJsID0gZ2V0TWFpblRodW1ibmFpbFVybChodG1sKTtcclxuXHRpbmZvLmNhdGVnb3J5ID0gZ2V0Q2F0ZWdvcnkoaHRtbCk7XHJcblx0aW5mby51cGxvYWRlciA9IGdldFVwbG9hZGVyKGh0bWwpO1xyXG5cclxuXHRpbmZvLnJhdGluZ0NvdW50ID0gZ2V0UmF0aW5nQ291bnQoaHRtbCk7XHJcblx0aW5mby5yYXRpbmdBdmVyYWdlID0gZ2V0UmF0aW5nQXZlcmFnZShodG1sKTtcclxuXHJcblx0aW5mby5mYXZvcml0ZUNvdW50ID0gZ2V0RmF2b3JpdGVDb3VudChodG1sKTtcclxuXHRpbmZvLmZhdm9yaXRlQ2F0ZWdvcnkgPSBnZXRGYXZvcml0ZUNhdGVnb3J5KGh0bWwpO1xyXG5cclxuXHRpbmZvLnRodW1ibmFpbFNpemUgPSBnZXRUaHVtYm5haWxTaXplKGh0bWwpO1xyXG5cdGluZm8udGh1bWJuYWlsUm93cyA9IGdldFRodW1ibmFpbFJvd3MoaHRtbCk7XHJcblxyXG5cdGluZm8ubmV3ZXJWZXJzaW9ucyA9IGdldE5ld2VyVmVyc2lvbnMoaHRtbCk7XHJcblxyXG5cdGluZm8udG9ycmVudENvdW50ID0gZ2V0VG9ycmVudENvdW50KGh0bWwpO1xyXG5cdGluZm8uYXJjaGl2ZXJLZXkgPSBnZXRBcmNoaXZlcktleShodG1sKTtcclxuXHJcblx0Ly8gRGV0YWlsc1xyXG5cdGNvbnN0IGRldGFpbHNOb2RlcyA9IGdldERldGFpbHNOb2RlcyhodG1sKTtcclxuXHJcblx0aW5mby5kYXRlVXBsb2FkZWQgPSBnZXREYXRlVXBsb2FkZWQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0aW5mby5wYXJlbnQgPSBnZXRQYXJlbnQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0Y29uc3QgdmlzaWJsZUluZm8gPSBnZXRWaXNpYmxlSW5mbyhkZXRhaWxzTm9kZXMpO1xyXG5cdGluZm8udmlzaWJsZSA9IHZpc2libGVJbmZvLnZpc2libGU7XHJcblx0aW5mby52aXNpYmxlUmVhc29uID0gdmlzaWJsZUluZm8udmlzaWJsZVJlYXNvbjtcclxuXHJcblx0Y29uc3QgbGFuZ3VhZ2VJbmZvID0gZ2V0TGFuZ3VhZ2VJbmZvKGRldGFpbHNOb2Rlcyk7XHJcblx0aW5mby5sYW5ndWFnZSA9IGxhbmd1YWdlSW5mby5sYW5ndWFnZTtcclxuXHRpbmZvLnRyYW5zbGF0ZWQgPSBsYW5ndWFnZUluZm8udHJhbnNsYXRlZDtcclxuXHJcblx0aW5mby5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBnZXRBcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0aW5mby5maWxlQ291bnQgPSBnZXRGaWxlQ291bnQoZGV0YWlsc05vZGVzKTtcclxuXHJcblx0Ly8gVGFnc1xyXG5cdGluZm8udGFncyA9IGdldFRhZ3MoaHRtbCk7XHJcblx0aW5mby50YWdzSGF2ZU5hbWVzcGFjZSA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21IdG1sKGh0bWwsIHVybCkge1xyXG5cdGNvbnN0IGxpbmsgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIucHR0IHRkLnB0ZHM+YVtocmVmXSwucHR0IHRkLnB0ZGQ+YVtocmVmXVwiKTtcclxuXHRpZiAobGluayA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpZFBhZ2UgPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRpZiAoaWRQYWdlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSBuZXcgdHlwZXMuR2FsbGVyeUluZm8oKTtcclxuXHRpbmZvLmlkZW50aWZpZXIgPSBpZFBhZ2UuaWRlbnRpZmllcjtcclxuXHRpbmZvLmN1cnJlbnRQYWdlID0gaWRQYWdlLnBhZ2U7XHJcblx0aW5mby5zb3VyY2UgPSBcImh0bWxcIjtcclxuXHRwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUh0bWwoaW5mbywgaHRtbCk7XHJcblx0aW5mby5zb3VyY2VTaXRlID0gdXRpbHMuZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKTtcclxuXHRpbmZvLmRhdGVHZW5lcmF0ZWQgPSBEYXRlLm5vdygpO1xyXG5cdHJldHVybiBpbmZvO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZXRGcm9tSHRtbDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBHYWxsZXJ5SWRlbnRpZmllciA9IHJlcXVpcmUoXCIuLi9nYWxsZXJ5LWlkZW50aWZpZXJcIikuR2FsbGVyeUlkZW50aWZpZXI7XHJcblxyXG5cclxuY2xhc3MgR2FsbGVyeUluZm8ge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5pZGVudGlmaWVyID0gbnVsbDtcclxuXHRcdHRoaXMudGl0bGUgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZU9yaWdpbmFsID0gbnVsbDtcclxuXHRcdHRoaXMuZGF0ZVVwbG9hZGVkID0gbnVsbDtcclxuXHRcdHRoaXMuY2F0ZWdvcnkgPSBudWxsO1xyXG5cdFx0dGhpcy51cGxvYWRlciA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0F2ZXJhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5yYXRpbmdDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ2F0ZWdvcnkgPSBudWxsO1xyXG5cdFx0dGhpcy5mYXZvcml0ZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMubWFpblRodW1ibmFpbFVybCA9IG51bGw7XHJcblx0XHR0aGlzLnRodW1ibmFpbFNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy50aHVtYm5haWxSb3dzID0gbnVsbDtcclxuXHRcdHRoaXMuZmlsZUNvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XHJcblx0XHR0aGlzLnZpc2libGVSZWFzb24gPSBudWxsO1xyXG5cdFx0dGhpcy5sYW5ndWFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnRyYW5zbGF0ZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcmNoaXZlcktleSA9IG51bGw7XHJcblx0XHR0aGlzLnRvcnJlbnRDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3MgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzSGF2ZU5hbWVzcGFjZSA9IG51bGw7XHJcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHRcdHRoaXMubmV3ZXJWZXJzaW9ucyA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZSA9IG51bGw7XHJcblx0XHR0aGlzLnNvdXJjZVNpdGUgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlR2VuZXJhdGVkID0gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRHYWxsZXJ5SWRlbnRpZmllcixcclxuXHRHYWxsZXJ5SW5mb1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcblxyXG5jb25zdCBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMgPSBbIFwiYlwiLCBcImtiXCIsIFwibWJcIiwgXCJnYlwiIF07XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVBhZ2VGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IG1hdGNoID0gL1xcPyg/Oih8W1xcd1xcV10qPyYpcD0oW1xcK1xcLV0/XFxkKykpPy8uZXhlYyh1cmwpO1xyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgcGFnZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHRpZiAoIU51bWJlci5pc05hTihwYWdlKSkgeyByZXR1cm4gcGFnZTsgfVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBpZGVudGlmaWVyID0gdHlwZXMuR2FsbGVyeUlkZW50aWZpZXIuY3JlYXRlRnJvbVVybCh1cmwpO1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhZ2UgPSBnZXRHYWxsZXJ5UGFnZUZyb21VcmwodXJsKTtcclxuXHRyZXR1cm4geyBpZGVudGlmaWVyLCBwYWdlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEJ5dGVzU2l6ZUZyb21MYWJlbChudW1iZXIsIGxhYmVsKSB7XHJcblx0bGV0IGkgPSBzaXplTGFiZWxUb0J5dGVzUHJlZml4ZXMuaW5kZXhPZihsYWJlbC50b0xvd2VyQ2FzZSgpKTtcclxuXHRpZiAoaSA8IDApIHsgaSA9IDA7IH1cclxuXHRyZXR1cm4gTWF0aC5mbG9vcihwYXJzZUZsb2F0KG51bWJlcikgKiBNYXRoLnBvdygxMDI0LCBpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNvdXJjZVNpdGVGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXig/Oig/OlthLXpdW2EtejAtOVxcK1xcLVxcLl0qOlxcLyp8XFwvezIsfSkoW15cXC9dKikpPyhcXC8/W1xcd1xcV10qKSQvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh1cmwpO1xyXG5cclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0pIHtcclxuXHRcdGNvbnN0IGhvc3QgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKGhvc3QuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDApIHsgcmV0dXJuIFwiZXhoZW50YWlcIjsgfVxyXG5cdFx0aWYgKGhvc3QuaW5kZXhPZihcImUtaGVudGFpXCIpID49IDApIHsgcmV0dXJuIFwiZS1oZW50YWlcIjsgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsLFxyXG5cdGdldEJ5dGVzU2l6ZUZyb21MYWJlbCxcclxuXHRnZXRTb3VyY2VTaXRlRnJvbVVybFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKGxhYmVsLCB1cmwsIG9yZGVyKSB7XHJcblx0Y29uc3QgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmJcIik7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0YS5ocmVmID0gdXJsO1xyXG5cdGEudGV4dENvbnRlbnQgPSBsYWJlbDtcclxuXHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0ZGl2LnN0eWxlLm9yZGVyID0gYCR7b3JkZXJ9YDtcclxuXHR9XHJcblx0ZGl2LmFwcGVuZENoaWxkKGEpO1xyXG5cdG4uYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcblx0cmV0dXJuIGRpdjtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBvdmVycmlkZUF0dHJpYnV0ZU5hbWUgPSBcImRhdGEteC1vdmVycmlkZS1wYWdlLXR5cGVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBzZXRPdmVycmlkZSh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3ZlcnJpZGUoKSB7XHJcblx0Y29uc3QgdmFsdWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0cmV0dXJuIHZhbHVlID8gdmFsdWUgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoZG9jLCBsb2NhdGlvbikge1xyXG5cdGNvbnN0IG92ZXJyaWRlVHlwZSA9IGdldE92ZXJyaWRlKCk7XHJcblx0aWYgKG92ZXJyaWRlVHlwZSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIG92ZXJyaWRlVHlwZTtcclxuXHR9XHJcblxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hib3hcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNlYXJjaFwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPWZhdmNhdF1cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImZhdm9yaXRlc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjaTE+aDFcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImltYWdlXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIi5nbSBoMSNnblwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZ2FsbGVyeVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZV9vdXRlclwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2V0dGluZ3NcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3RvcnJlbnRpbmZvXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJ0b3JyZW50SW5mb1wiO1xyXG5cdH1cclxuXHJcblx0bGV0IG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImJvZHk+LmQ+cFwiKTtcclxuXHRpZiAoXHJcblx0XHQobiAhPT0gbnVsbCAmJiAvZ2FsbGVyeVxccytoYXNcXHMrYmVlblxccytyZW1vdmVkL2kudGVzdChuLnRleHRDb250ZW50KSkgfHxcclxuXHRcdGRvYy5xdWVyeVNlbGVjdG9yKFwiLmV6ZV9kZ2FsbGVyeV90YWJsZVwiKSAhPT0gbnVsbCkgeyAvLyBlemUgcmVzdXJyZWN0aW9uXHJcblx0XHRyZXR1cm4gXCJkZWxldGVkR2FsbGVyeVwiO1xyXG5cdH1cclxuXHJcblx0biA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0aWYgKG4gIT09IG51bGwgJiYgbG9jYXRpb24gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IHAgPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdGlmIChcclxuXHRcdFx0bi5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT09IGxvY2F0aW9uLmhyZWYgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgMykgIT09IFwiL3QvXCIgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgNSkgIT09IFwiL2ltZy9cIikge1xyXG5cdFx0XHRyZXR1cm4gXCJwYW5kYVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVW5rbm93blxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0LFxyXG5cdGdldE92ZXJyaWRlLFxyXG5cdHNldE92ZXJyaWRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcblxyXG5cclxuY2xhc3MgUG9wdXBNZW51IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubWVudU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0dGhpcy5tZW51Tm9kZS5jbGFzc05hbWUgPSBcIngtcG9wdXAtbWVudVwiO1xyXG5cclxuXHRcdHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50ID0gbnVsbDtcclxuXHRcdHRoaXMuX29uRG9jdW1lbnRDbGljayA9IChlKSA9PiBvbkRvY3VtZW50Q2xpY2tUb0Nsb3NlKGUsIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0c2hvdyhub2RlLCBmaXhlZCwgYW5jaG9yKSB7XHJcblx0XHQvKiBnbG9iYWxzIERPTVJlY3QgKi9cclxuXHRcdGluc2VydFN0eWxlc2hlZXQoKTtcclxuXHJcblx0XHRjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5O1xyXG5cdFx0aWYgKHRoaXMubWVudU5vZGUucGFyZW50Tm9kZSAhPT0gcGFyZW50KSB7XHJcblx0XHRcdHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLm1lbnVOb2RlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubWVudU5vZGUuc3R5bGUubGVmdCA9IFwiMFwiO1xyXG5cdFx0dGhpcy5tZW51Tm9kZS5zdHlsZS50b3AgPSBcIjBcIjtcclxuXHRcdHRoaXMubWVudU5vZGUuY2xhc3NMaXN0LnRvZ2dsZShcIngtcG9wdXAtbWVudS1maXhlZFwiLCBmaXhlZCk7XHJcblxyXG5cdFx0Y29uc3QgaHRtbFJlY3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRjb25zdCBub2RlUmVjdCA9IChub2RlIGluc3RhbmNlb2YgRE9NUmVjdCkgPyBub2RlIDogbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGNvbnN0IG1lbnVSZWN0ID0gdGhpcy5tZW51Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgMDtcclxuXHRcdGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCAwO1xyXG5cclxuXHRcdGxldCB4QW5jaG9yID0gbnVsbDtcclxuXHRcdGxldCB5QW5jaG9yID0gbnVsbDtcclxuXHRcdGlmIChpc09iamVjdChhbmNob3IpKSB7XHJcblx0XHRcdGxldCB2ID0gYW5jaG9yLng7XHJcblx0XHRcdGlmICh0eXBlb2YodikgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2KSkgeyB4QW5jaG9yID0gKHYgPiAwLjUgPyAxLjAgOiAwLjApOyB9XHJcblx0XHRcdHYgPSBhbmNob3IueTtcclxuXHRcdFx0aWYgKHR5cGVvZih2KSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHYpKSB7IHlBbmNob3IgPSAodiA+IDAuNSA/IDEuMCA6IDAuMCk7IH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoeEFuY2hvciA9PT0gbnVsbCkge1xyXG5cdFx0XHR4QW5jaG9yID0gKG5vZGVSZWN0LnggKyBtZW51UmVjdC53aWR0aCA+PSB3aW5kb3dXaWR0aCkgPyAxLjAgOiAwLjA7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHlBbmNob3IgPT09IG51bGwpIHtcclxuXHRcdFx0eUFuY2hvciA9IChub2RlUmVjdC55ICsgbm9kZVJlY3QuaGVpZ2h0ICsgbWVudVJlY3QuaGVpZ2h0ID49IHdpbmRvd0hlaWdodCkgPyAwLjAgOiAxLjA7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHggPSBub2RlUmVjdC54ICsgeEFuY2hvciAqIChub2RlUmVjdC53aWR0aCAtIG1lbnVSZWN0LndpZHRoKTtcclxuXHRcdGxldCB5ID0gbm9kZVJlY3QueSArIHlBbmNob3IgKiBub2RlUmVjdC5oZWlnaHQgLSBtZW51UmVjdC5oZWlnaHQgKiAoMS4wIC0geUFuY2hvcik7XHJcblxyXG5cdFx0eCA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4od2luZG93V2lkdGggLSBtZW51UmVjdC53aWR0aCwgeCkpO1xyXG5cdFx0eSA9IE1hdGgubWF4KDAuMCwgTWF0aC5taW4od2luZG93SGVpZ2h0IC0gbWVudVJlY3QuaGVpZ2h0LCB5KSk7XHJcblxyXG5cdFx0aWYgKCFmaXhlZCkge1xyXG5cdFx0XHR4IC09IGh0bWxSZWN0Lng7XHJcblx0XHRcdHkgLT0gaHRtbFJlY3QueTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm1lbnVOb2RlLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuXHRcdHRoaXMubWVudU5vZGUuc3R5bGUudG9wID0gYCR7eX1weGA7XHJcblxyXG5cdFx0aWYgKHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50ID09PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdFx0XHR0aGlzLl9vbkRvY3VtZW50Q2xpY2tIb29rRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fb25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoaWRlKCkge1xyXG5cdFx0aWYgKHRoaXMubWVudU5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLm1lbnVOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5tZW51Tm9kZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2ssIGZhbHNlKTtcclxuXHRcdFx0dGhpcy5fb25Eb2N1bWVudENsaWNrSG9va0VsZW1lbnQgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YWRkT3B0aW9uKG9wdGlvbnMpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRcdG5vZGUuY2xhc3NOYW1lID0gXCJ4LXBvcHVwLW1lbnUtb3B0aW9uXCI7XHJcblx0XHRub2RlLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcIm5vcmVmZXJyZXJcIik7XHJcblxyXG5cdFx0bGV0IGNsb3NlT25DbGljayA9IHRydWU7XHJcblx0XHRpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLnRpdGxlKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdG5vZGUudGV4dENvbnRlbnQgPSBvcHRpb25zLnRpdGxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy51cmwpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0bm9kZS5ocmVmID0gb3B0aW9ucy51cmw7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLnRhcmdldCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRub2RlLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5vcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0XHRub2RlLnN0eWxlLm9yZGVyID0gYCR7b3B0aW9ucy5vcmRlcn1gO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5jYWxsYmFjaykgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wdGlvbnMuY2FsbGJhY2ssIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjbG9zZU9uQ2xpY2sgPSAodHlwZW9mKG9wdGlvbnMuY2xvc2UpICE9PSBcImJvb2xlYW5cIiB8fCBvcHRpb25zLmNsb3NlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2xvc2VPbkNsaWNrKSB7XHJcblx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBvbk1lbnVJdGVtQ2xpY2tUb0Nsb3NlKGUsIHRoaXMpLCBmYWxzZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5tZW51Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcclxuXHRcdHJldHVybiBub2RlO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlT3B0aW9uKG5vZGUpIHtcclxuXHRcdGlmIChub2RlLnBhcmVudE5vZGUgPT09IHRoaXMubWVudU5vZGUpIHtcclxuXHRcdFx0bm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uRG9jdW1lbnRDbGlja1RvQ2xvc2UoZSwgbWVudSkge1xyXG5cdGlmICghbWVudS5tZW51Tm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuXHRcdG1lbnUuaGlkZSgpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25NZW51SXRlbUNsaWNrVG9DbG9zZShlLCBtZW51KSB7XHJcblx0bWVudS5oaWRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHYpIHtcclxuXHRyZXR1cm4gdiAhPT0gbnVsbCAmJiB0eXBlb2YodikgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkodik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlc2hlZXQoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtcG9wdXAtbWVudVwiO1xyXG5cdGlmIChzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUvcG9wdXAtbWVudS5jc3NcIik7XHJcblx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFBvcHVwTWVudVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgdXJsRnJhZ21lbnQgPSByZXF1aXJlKFwiLi4vdXJsLWZyYWdtZW50XCIpO1xyXG5cclxuXHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVyQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyXCI7XHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MgPSBcIngtc2V0dGluZ3MtY29udGFpbmVyLWhpZGRlblwiO1xyXG5jb25zdCBkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcyA9IFwieC1zZXR0aW5ncy1oaWRkZW5cIjtcclxuXHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lck91dGVyID0gbnVsbDtcclxubGV0IHNldHRpbmdzQ29udGFpbmVyID0gbnVsbDtcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRMaW5rKCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LW5hdi1zZXR0aW5ncy1saW5rXCI7XHJcblxyXG5cdGxldCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdGlmIChuICE9PSBudWxsKSB7IHJldHVybiBuOyB9XHJcblxyXG5cdGNvbnN0IG5hdkJhciA9IHJlcXVpcmUoXCIuL25hdmlnYXRpb24tYmFyXCIpO1xyXG5cdG4gPSBuYXZCYXIuYWRkTGluayhcInhcIiwgYC91Y29uZmlnLnBocCR7dXJsRnJhZ21lbnQuY3JlYXRlKFwic2V0dGluZ3NcIil9YCwgMSk7XHJcblx0aWYgKG4gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0bi5pZCA9IGlkO1xyXG5cdHJldHVybiBuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI291dGVyLnN0dWZmYm94XCIpO1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lck91dGVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRzZXR0aW5nc0NvbnRhaW5lciA9IHNldHRpbmdzQ29udGFpbmVyT3V0ZXIucXVlcnlTZWxlY3RvcihgLiR7c2V0dGluZ3NDb250YWluZXJDbGFzc31gKTtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTmFtZSA9IGAke3NldHRpbmdzQ29udGFpbmVyQ2xhc3N9ICR7c2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzc31gO1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXJPdXRlci5hcHBlbmRDaGlsZChzZXR0aW5nc0NvbnRhaW5lcik7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpZCA9IFwieC1zZXR0aW5nc1wiO1xyXG5cdGlmICghc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHtcclxuXHRcdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL3NldHRpbmdzLmNzc1wiKTtcclxuXHRcdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcblx0fVxyXG5cclxuXHR1cmxGcmFnbWVudC5hZGRSb3V0ZSgvXlxcL3NldHRpbmdzKFxcL1tcXHdcXFddKik/JC8sIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2V0dGluZ3NQYWdlQ2hhbmdlZChtYXRjaCkge1xyXG5cdHNldFNldHRpbmdzVmlzaWJsZShtYXRjaCAhPT0gbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNldHRpbmdzVmlzaWJsZSh2aXNpYmxlKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPT09IG51bGwgfHwgc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcykgIT09IHZpc2libGUpIHtcclxuXHRcdC8vIE5vIGNoYW5nZVxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0c2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzLCAhdmlzaWJsZSk7XHJcblxyXG5cdGZvciAoY29uc3QgY2hpbGQgb2Ygc2V0dGluZ3NDb250YWluZXJPdXRlci5jaGlsZHJlbikge1xyXG5cdFx0aWYgKGNoaWxkID09PSBzZXR0aW5nc0NvbnRhaW5lcikgeyBjb250aW51ZTsgfVxyXG5cdFx0Y2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShkZWZhdWx0U2V0dGluZ3NIaWRkZW5DbGFzcywgdmlzaWJsZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRTZWN0aW9uKGhlYWRlciwgaWQsIG9yZGVyKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGZ1bGxJZCA9IGB4LXNldHRpbmdzLXNlY3Rpb24tJHtpZH1gO1xyXG5cclxuXHRsZXQgc2VjdGlvbiA9IHNldHRpbmdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2Z1bGxJZH1gKTtcclxuXHRpZiAoc2VjdGlvbiA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uLmlkID0gZnVsbElkO1xyXG5cdFx0c2VjdGlvbi5jbGFzc05hbWUgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJcIjtcclxuXHRcdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHNlY3Rpb24uc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG5cdH1cclxuXHJcblx0bGV0IGNscyA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWhlYWRlclwiO1xyXG5cdGxldCBzZWN0aW9uSGVhZGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKGAuJHtjbHN9YCk7XHJcblx0aWYgKHNlY3Rpb25IZWFkZXIgPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblx0XHRzZWN0aW9uSGVhZGVyLmNsYXNzTmFtZSA9IGNscztcclxuXHRcdHNlY3Rpb25IZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkZXI7XHJcblx0XHRjb25zdCByZWxhdGl2ZSA9IHNlY3Rpb24uZmlyc3RDaGlsZDtcclxuXHRcdGlmIChyZWxhdGl2ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRzZWN0aW9uLmluc2VydEJlZm9yZShyZWxhdGl2ZSwgc2VjdGlvbkhlYWRlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25IZWFkZXIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xzID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24tY29udGVudFwiO1xyXG5cdGxldCBzZWN0aW9uQ29udGVudCA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihgLiR7Y2xzfWApO1xyXG5cdGlmIChzZWN0aW9uQ29udGVudCA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2VjdGlvbkNvbnRlbnQuY2xhc3NOYW1lID0gY2xzO1xyXG5cdFx0c2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uQ29udGVudCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2VjdGlvbkNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rLFxyXG5cdGluaXRpYWxpemUsXHJcblx0YWRkU2VjdGlvblxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIGlzRGFyaygpIHtcclxuXHRyZXR1cm4gKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvY3VtZW50RGFya0ZsYWcoKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnJvd0ljb25VcmwoKSB7XHJcblx0cmV0dXJuIChpc0RhcmsoKSA/IFwiaHR0cHM6Ly9leGhlbnRhaS5vcmcvaW1nL21yLmdpZlwiIDogXCJodHRwczovL2VoZ3Qub3JnL2cvbXIuZ2lmXCIpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNEYXJrLFxyXG5cdHNldERvY3VtZW50RGFya0ZsYWcsXHJcblx0Z2V0QXJyb3dJY29uVXJsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1nYWxsZXJ5LWRldGFpbHN7Zm9udC1zaXplOjEwcHQ7Ym9yZGVyOm5vbmU7cGFkZGluZzouNWVtIDAgMCAwO21hcmdpbjotM3B4IC01cHh9LngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnQ6YmVmb3JlLC54LWdhbGxlcnktZGV0YWlsczpiZWZvcmV7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO21hcmdpbjowIC41ZW07Ym9yZGVyLXRvcDoxcHggc29saWQgIzAwMH06cm9vdDpub3QoLngtaXMtZGFyaykgLngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnQ6YmVmb3JlLDpyb290Om5vdCgueC1pcy1kYXJrKSAueC1nYWxsZXJ5LWRldGFpbHM6YmVmb3Jle2JvcmRlci10b3AtY29sb3I6IzVjMGQxMn0ueC1nYWxsZXJ5LWRldGFpbHMtaW5uZXJ7Ym9yZGVyOm5vbmU7bWFyZ2luOjB9LngtZ2FsbGVyeS1kZXRhaWxzLWxpbmtze2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IHdyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDtwYWRkaW5nOi41ZW07bWFyZ2luLWxlZnQ6LTFlbX0ueC1nYWxsZXJ5LWRldGFpbHMtbGluay1jb250YWluZXJ7ZmxleDowIDEgYXV0bzttYXJnaW4tbGVmdDoxZW19LngtZ2FsbGVyeS1kZXRhaWxzLWxpbmt7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y3Vyc29yOnBvaW50ZXJ9LngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnQtY29udGFpbmVye2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2ZsZXgtZmxvdzpjb2x1bW4gd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydH0ueC1nYWxsZXJ5LWRldGFpbHMtY29udGVudHtmbGV4OjAgMSBhdXRvO3dpZHRoOjEwMCV9XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi54LXBvcHVwLW1lbnV7cG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjEwcHQ7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3otaW5kZXg6MjEwO3RleHQtYWxpZ246bGVmdDtib3gtc2hhZG93Oi4yNWVtIC4yNWVtIDAgMCByZ2JhKDAsMCwwLC41KX06cm9vdDpub3QoLngtaXMtZGFyaykgLngtcG9wdXAtbWVudXtib3JkZXItY29sb3I6IzVjMGQxMjtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDE7Ym94LXNoYWRvdzouMjVlbSAuMjVlbSAwIDAgcmdiYSg5MiwxMywxOCwuNSl9LngtcG9wdXAtbWVudS54LXBvcHVwLW1lbnUtZml4ZWR7cG9zaXRpb246Zml4ZWR9LngtcG9wdXAtbWVudS1vcHRpb257cGFkZGluZzouMjVlbSAxZW07bGluZS1oZWlnaHQ6MS4zNzVlbTt0ZXh0LWRlY29yYXRpb246bm9uZX0ueC1wb3B1cC1tZW51LW9wdGlvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMzNDM1M2J9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXBvcHVwLW1lbnUtb3B0aW9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2VkZWJkZn1cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtc2V0dGluZ3MtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLXRvcDotMWVtfS54LXNldHRpbmdzLWNvbnRhaW5lci54LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW57ZGlzcGxheTpub25lfS54LXNldHRpbmdzLWhpZGRlbntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS54LXNldHRpbmdzLW9wdGlvbiBzZWxlY3R7bWFyZ2luLXJpZ2h0Oi41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21hcmdpbi10b3A6MWVtfS54LXNldHRpbmdzLXNlY3Rpb24tY29udGVudHttYXJnaW46OHB4IGF1dG8gMTBweCAxMHB4O2NsZWFyOmJvdGh9Lngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJ7Zm9udC1zaXplOjEuMjVlbTtsaW5lLWhlaWdodDoxLjVlbTttYXJnaW46LjI1ZW0gMH0ueC1zZXR0aW5ncy1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IHdyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4LXdyYXA6bm93cmFwO3dpZHRoOjEwMCU7cGFkZGluZzouNWVtIDB9Lngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjI1KX06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3AtY29sb3I6cmdiYSg5MiwxMywxOCwuMjUpfS54LXNldHRpbmdzLXNlY3Rpb24tbGVmdHtmbGV4OjEgMSBhdXRvO3BhZGRpbmctcmlnaHQ6LjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0e2ZsZXg6MCAwIGF1dG87bWluLXdpZHRoOjMwJTt0ZXh0LWFsaWduOnJpZ2h0fS54LXNldHRpbmdzLXNlY3Rpb24tdGl0bGV7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb257bGluZS1oZWlnaHQ6MS4zNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb24rLngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbnttYXJnaW4tdG9wOi4yNWVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0saW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO21hcmdpbjowO3BhZGRpbmc6LjI1ZW0gLjVlbTtsaW5lLWhlaWdodDoxLjM3NWVtO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0sOnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXt3aWR0aDoyMGVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl17d2lkdGg6NWVtOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfXRleHRhcmVhLngtc2V0dGluZ3Mtc2VjdGlvbi10ZXh0YXJlYXtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjA7cGFkZGluZzouMjVlbSAuNWVtO2xpbmUtaGVpZ2h0OjEuMzc1ZW07YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO3Jlc2l6ZTp2ZXJ0aWNhbDtmb250LXNpemU6aW5oZXJpdDt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MS44NzVlbTtoZWlnaHQ6NC42MjVlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1mYW1pbHk6XFxcIkNvdXJpZXIgTmV3XFxcIixDb3VyaWVyLG1vbm9zcGFjZX06cm9vdDpub3QoLngtaXMtZGFyaykgdGV4dGFyZWEueC1zZXR0aW5ncy1zZWN0aW9uLXRleHRhcmVhe2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXIgLmxje2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDotNnB4fS54LXNldHRpbmdzLWNvbnRhaW5lciBjb2Rle2ZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsQ291cmllcixtb25vc3BhY2U7YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO2ZvbnQtd2VpZ2h0OjcwMH06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3MtY29udGFpbmVyIGNvZGV7YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfS54LXNldHRpbmdzLWxpZ2h0LXRleHR7Zm9udC13ZWlnaHQ6NDAwO29wYWNpdHk6Ljc1fS54LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmxlZnR9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGV7ZGlzcGxheTp0YWJsZX0ueC1zZXR0aW5ncy1pbnB1dC1yb3d7ZGlzcGxheTp0YWJsZS1yb3d9Lngtc2V0dGluZ3MtaW5wdXQtcm93Lngtc2V0dGluZ3MtaW5wdXQtaGVhZGVyLXJvd3tmb250LXNpemU6LjhlbTtsaW5lLWhlaWdodDoxZW07b3BhY2l0eTouNzV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGx9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbCsueC1zZXR0aW5ncy1pbnB1dC1jZWxse3BhZGRpbmctbGVmdDouMjVlbX0ueC1zZXR0aW5ncy1pbnB1dC1yb3c6bm90KC54LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3cpKy54LXNldHRpbmdzLWlucHV0LXJvdz4ueC1zZXR0aW5ncy1pbnB1dC1jZWxse3BhZGRpbmctdG9wOi4yNWVtfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLW1pZGRsZXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtZmlsbHt3aWR0aDoxMDAlfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLW5vd3JhcHt3aGl0ZS1zcGFjZTpub3dyYXB9Lngtc2V0dGluZ3MtaW5wdXQtbGFiZWx7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjAgMCAwIDFlbX0ueC1zZXR0aW5ncy1pbnB1dC1jaGVja2JveC1wcmVmaXh7dmVydGljYWwtYWxpZ246bWlkZGxlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctcmlnaHQ6LjVlbX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZ0tleSwgY29uZmlnRGVmYXVsdCkge1xyXG5cdGxldCBjb25maWcgPSBudWxsO1xyXG5cdGxldCBjb25maWdHZXRQcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWcoKSB7XHJcblx0XHRjb25zdCBjb25maWdTdHJpbmcgPSBhd2FpdCBnbS5nZXRWYWx1ZShjb25maWdLZXksIG51bGwpO1xyXG5cdFx0aWYgKHR5cGVvZihjb25maWdTdHJpbmcpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgYyA9IEpTT04ucGFyc2UoY29uZmlnU3RyaW5nKTtcclxuXHRcdFx0XHRpZiAoYyAhPT0gbnVsbCAmJiB0eXBlb2YoYykgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoYykpIHtcclxuXHRcdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWdEZWZhdWx0LCBjKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRGVmYXVsdCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXQoKSB7XHJcblx0XHRpZiAoY29uZmlnICE9PSBudWxsKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZmlnKTsgfVxyXG5cclxuXHRcdGlmIChjb25maWdHZXRQcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdGNvbmZpZ0dldFByb21pc2UgPSBsb2FkQ29uZmlnKCkudGhlbigodikgPT4gY29uZmlnID0gdik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbmZpZ0dldFByb21pc2U7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBzYXZlKCkge1xyXG5cdFx0aWYgKGNvbmZpZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRhd2FpdCBnbS5zZXRWYWx1ZShjb25maWdLZXksIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgXCJcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gYmluZElucHV0KG5vZGUsIHNldHRpbmdOYW1lLCBvcHRpb25zLCB2YWx1ZU5hbWUpIHtcclxuXHRcdGNvbnN0IGMgPSBhd2FpdCBnZXQoKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKHZhbHVlTmFtZSkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0dmFsdWVOYW1lID0gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKGNbc2V0dGluZ05hbWVdLCBvcHRpb25zLCB0cnVlKTtcclxuXHRcdFx0aWYgKHZhbGlkKSB7IG5vZGVbdmFsdWVOYW1lXSA9IHZhbHVlOyB9XHJcblx0XHR9O1xyXG5cclxuXHRcdHVwZGF0ZUlucHV0KCk7XHJcblxyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKG5vZGVbdmFsdWVOYW1lXSwgb3B0aW9ucywgZmFsc2UpO1xyXG5cdFx0XHRpZiAodmFsaWQpIHtcclxuXHRcdFx0XHRjW3NldHRpbmdOYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRcdHNhdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dXBkYXRlSW5wdXQoKTtcclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2F2ZSxcclxuXHRcdGJpbmRJbnB1dFxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0VHlwZUNvbnZlcnRPcHRpb25zID0ge307XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKSB7XHJcblx0c3dpdGNoIChub2RlLnRhZ05hbWUpIHtcclxuXHRcdGNhc2UgXCJJTlBVVFwiOlxyXG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBcImNoZWNrYm94XCIpIHsgcmV0dXJuIFwiY2hlY2tlZFwiOyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFwidmFsdWVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVHlwZSh2YWx1ZSwgb3B0aW9ucywgdG9JbnB1dCkge1xyXG5cdGlmICh0eXBlb2Yob3B0aW9ucykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucywgZGVmYXVsdFR5cGVDb252ZXJ0T3B0aW9ucywgdG9JbnB1dCk7XHJcblx0fSBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiB0eXBlb2Yob3B0aW9ucykgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mKG9wdGlvbnMudHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucy50eXBlLCBvcHRpb25zLCB0b0lucHV0KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHsgdmFsdWUsIHZhbGlkOiB0cnVlIH07XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgdHlwZU5hbWUsIG9wdGlvbnMsIHRvSW5wdXQpIHtcclxuXHRsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuXHQvLyBDb252ZXJ0XHJcblx0c3dpdGNoICh0eXBlTmFtZSkge1xyXG5cdFx0Y2FzZSBcImJvb2xlYW5cIjpcclxuXHRcdFx0dmFsdWUgPSAhIXZhbHVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJpbnRlZ2VyXCI6XHJcblx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdHZhbHVlID0gKHR5cGVOYW1lID09PSBcIm51bWJlclwiID8gcGFyc2VGbG9hdChgJHt2YWx1ZX1gKSA6IHBhcnNlSW50KGAke3ZhbHVlfWAsIDEwKSk7XHJcblx0XHRcdGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xyXG5cdFx0XHRcdHZhbHVlID0gMDtcclxuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Ly8gVHJhbnNmb3JtXHJcblx0aWYgKCF0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLmlucHV0VG9WYWx1ZSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLmlucHV0VG9WYWx1ZSh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyBMaW1pdHNcclxuXHRzd2l0Y2ggKHR5cGVOYW1lKSB7XHJcblx0XHRjYXNlIFwiaW50ZWdlclwiOlxyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWluKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA8IG9wdGlvbnMubWluKSB7IHZhbHVlID0gb3B0aW9ucy5taW47IH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1heCkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPiBvcHRpb25zLm1heCkgeyB2YWx1ZSA9IG9wdGlvbnMubWF4OyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWF4TGVuZ3RoKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZS5sZW5ndGggPiBvcHRpb25zLm1heExlbmd0aCkge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIG9wdGlvbnMubWF4TGVuZ3RoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIFRyYW5zZm9ybVxyXG5cdGlmICh0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLnZhbHVlVG9JbnB1dCkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLnZhbHVlVG9JbnB1dCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyB2YWx1ZSwgdmFsaWQgfTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNyZWF0ZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvUHJvbWlzZShmbiwgc2VsZikge1xyXG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNvbHZlKGZuLmFwcGx5KHNlbGYsIGFyZ3MpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJlamVjdChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufVxyXG5cclxuY29uc3QgZ20gPSAoKG9iamVjdHMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgdiA9IEdNOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHRcdGlmICh2ICE9PSBudWxsICYmIHR5cGVvZih2KSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRyZXR1cm4gdjtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRpZiAob2JqLkdNICE9PSBudWxsICYmIHR5cGVvZihvYmouR00pID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9iai5HTTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdGNvbnN0IG1hcHBpbmcgPSBbXHJcblx0XHRbIFwiZ2V0VmFsdWVcIiwgXCJHTV9nZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwic2V0VmFsdWVcIiwgXCJHTV9zZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwiZGVsZXRlVmFsdWVcIiwgXCJHTV9kZWxldGVWYWx1ZVwiIF0sXHJcblx0XHRbIFwieG1sSHR0cFJlcXVlc3RcIiwgXCJHTV94bWxodHRwUmVxdWVzdFwiIF1cclxuXHRdO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBtYXBwaW5nKSB7XHJcblx0XHRsZXQgcHJvbWlzZSA9IG51bGw7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGNvbnN0IGZuID0gb2JqW3ZhbHVlXTtcclxuXHRcdFx0aWYgKHR5cGVvZihmbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHByb21pc2UgPSB0b1Byb21pc2UoZm4sIG9iaik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChwcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdHByb21pc2UgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QobmV3IEVycm9yKGBOb3Qgc3VwcG9ydGVkICgke2tleX0pYCkpKTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdFtrZXldID0gcHJvbWlzZTtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufSkuY2FsbCh0aGlzLCBbdGhpcywgd2luZG93XSk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ207XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGlzUmVhZHlWYWx1ZSA9IGZhbHNlO1xyXG5sZXQgY2FsbGJhY2tzID0gbnVsbDtcclxubGV0IGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcbmNvbnN0IGNoZWNrSW50ZXJ2YWxSYXRlID0gMjUwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzSG9va2VkKCkge1xyXG5cdHJldHVybiBjYWxsYmFja3MgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvb2soKSB7XHJcblx0Y2FsbGJhY2tzID0gW107XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChjaGVja0lmUmVhZHksIGNoZWNrSW50ZXJ2YWxSYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5ob29rKCkge1xyXG5cdGNvbnN0IGNicyA9IGNhbGxiYWNrcztcclxuXHJcblx0Y2FsbGJhY2tzID0gbnVsbDtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbElkKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5cclxuXHRpbnZva2UoY2JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrcykge1xyXG5cdGZvciAobGV0IGNiIG9mIGNhbGxiYWNrcykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y2IoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlYWR5KCkge1xyXG5cdGlmIChpc1JlYWR5VmFsdWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdGlmIChpc0hvb2tlZCgpKSB7IHVuaG9vaygpOyB9XHJcblx0XHRpc1JlYWR5VmFsdWUgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlJlYWR5KCkge1xyXG5cdGlzUmVhZHkoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uUmVhZHkoY2FsbGJhY2spIHtcclxuXHRpZiAoaXNSZWFkeSgpKSB7XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCFpc0hvb2tlZCgpKSB7IGhvb2soKTsgfVxyXG5cclxuXHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvblJlYWR5OiBvblJlYWR5LFxyXG5cdGdldCBpc1JlYWR5KCkgeyByZXR1cm4gaXNSZWFkeSgpOyB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgY29uZmlnS2V5ID0gXCJ4LXNlYXJjaC1saW5rcy1jb25maWdcIjtcclxuY29uc3Qgc2VhcmNoVGFyZ2V0c0RlZmF1bHQgPSBbXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IE5hbWVcIixcclxuXHRcdHVybDogXCIvP2ZfY2F0cz0wJmZfc25hbWU9MSZmX3NlYXJjaD1cXFwie3Nob3J0LW5hbWV9XFxcIlwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IEZ1bGwgTmFtZVwiLFxyXG5cdFx0dXJsOiBcIi8/Zl9jYXRzPTAmZl9zbmFtZT0xJmZfc2VhcmNoPVxcXCJ7ZnVsbC1uYW1lfVxcXCJcIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlNlYXJjaCBieSBOYW1lIChuaGVudGFpLm5ldClcIixcclxuXHRcdHVybDogXCJodHRwczovL25oZW50YWkubmV0L3NlYXJjaC8/cT1cXFwie3Nob3J0LW5hbWV9XFxcIlwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IEZ1bGwgTmFtZSAobmhlbnRhaS5uZXQpXCIsXHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9uaGVudGFpLm5ldC9zZWFyY2gvP3E9XFxcIntmdWxsLW5hbWV9XFxcIlwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IE5hbWUgKGhpdG9taS5sYSlcIixcclxuXHRcdHVybDogXCJodHRwczovL2hpdG9taS5sYS9zZWFyY2guaHRtbD97c2hvcnQtbmFtZX1cIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9XHJcbl07XHJcbmNvbnN0IGNvbmZpZ0RlZmF1bHQgPSB7XHJcblx0c2VhcmNoVGFyZ2V0czogZ2V0RGVmYXVsdFNlYXJjaFRhcmdldHMoKVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdFNlYXJjaFRhcmdldHMoKSB7XHJcblx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2VhcmNoVGFyZ2V0c0RlZmF1bHQsIG51bGwsIFwiXCIpKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpLmNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpO1xyXG5tb2R1bGUuZXhwb3J0cy5nZXREZWZhdWx0U2VhcmNoVGFyZ2V0cyA9IGdldERlZmF1bHRTZWFyY2hUYXJnZXRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHJlYWR5ID0gcmVxdWlyZShcIi4uL3JlYWR5XCIpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuY29uc3Qgc2V0dGluZ3MgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcclxuY29uc3QgUG9wdXBNZW51ID0gcmVxdWlyZShcIi4uL2FwaS9wb3B1cC1tZW51XCIpLlBvcHVwTWVudTtcclxuXHJcbmxldCBtZW51ID0gbnVsbDtcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXR1cEdhbGxlcnlQYWdlKCkge1xyXG5cdGNvbnN0IGNvbmZpZyA9IGF3YWl0IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKS5nZXQoKTtcclxuXHRjb25zdCBzZWFyY2hUYXJnZXRzID0gY29uZmlnLnNlYXJjaFRhcmdldHM7XHJcblx0aWYgKCFBcnJheS5pc0FycmF5KHNlYXJjaFRhcmdldHMpIHx8IHNlYXJjaFRhcmdldHMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBnYWxsZXJ5RGV0YWlscyA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1kZXRhaWxzXCIpLmdldCh0cnVlKTtcclxuXHRpZiAoZ2FsbGVyeURldGFpbHMgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IGxpbmsgPSBnYWxsZXJ5RGV0YWlscy5hZGRMaW5rKFwiQ3VzdG9tIFNlYXJjaFwiLCAwKTtcclxuXHRpZiAobGluayA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IG9uTWVudUxpbmtDbGljayhlLCBsaW5rLCBzZWFyY2hUYXJnZXRzKSwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1lbnVMaW5rQ2xpY2soZSwgbm9kZSwgc2VhcmNoVGFyZ2V0cykge1xyXG5cdGlmIChtZW51ID09PSBudWxsKSB7XHJcblx0XHRtZW51ID0gY3JlYXRlTWVudShzZWFyY2hUYXJnZXRzKTtcclxuXHR9XHJcblxyXG5cdGlmIChtZW51ICE9PSBudWxsKSB7XHJcblx0XHRtZW51LnNob3cobm9kZSwgZmFsc2UsIG51bGwpO1xyXG5cdH1cclxuXHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KHNlYXJjaFRhcmdldHMpIHtcclxuXHRjb25zdCBvcHRpb25zID0gW107XHJcblx0Zm9yIChjb25zdCBzZWFyY2hUYXJnZXQgb2Ygc2VhcmNoVGFyZ2V0cykge1xyXG5cdFx0aWYgKHNlYXJjaFRhcmdldC5lbmFibGVkID09PSBmYWxzZSkgeyBjb250aW51ZTsgfVxyXG5cdFx0b3B0aW9ucy5wdXNoKHtcclxuXHRcdFx0dGl0bGU6IHNlYXJjaFRhcmdldC50aXRsZSxcclxuXHRcdFx0dXJsOiBzZWFyY2hUYXJnZXQudXJsLFxyXG5cdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCJcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBnZXRHYWxsZXJ5SW5mb0Zyb21IdG1sID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbFwiKTtcclxuXHRjb25zdCBpbmZvID0gZ2V0R2FsbGVyeUluZm9Gcm9tSHRtbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHRpZiAoaW5mbyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgcmVwbGFjZW1lbnRzID0gZ2V0R2FsbGVyeUluZm9SZXBsYWNlbWVudHMoaW5mbyk7XHJcblxyXG5cdGNvbnN0IG1lbnUgPSBuZXcgUG9wdXBNZW51KCk7XHJcblx0Zm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xyXG5cdFx0b3B0aW9uLnVybCA9IGZvcm1hdFVybChvcHRpb24udXJsLCByZXBsYWNlbWVudHMpO1xyXG5cdFx0bWVudS5hZGRPcHRpb24ob3B0aW9uKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBtZW51O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsLCByZXBsYWNlbWVudHMpIHtcclxuXHRyZXR1cm4gdXJsLnJlcGxhY2UoL1xceyhbXlxcfV0qKVxcfS9nLCAobTAsIG0xKSA9PiB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcGxhY2VtZW50cywgbTEpID8gcmVwbGFjZW1lbnRzW20xXSA6IG0wO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SW5mb1JlcGxhY2VtZW50cyhnYWxsZXJ5SW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInNob3J0LW5hbWVcIjogZW5jb2RlVVJJQ29tcG9uZW50KGdldFNob3J0VGl0bGUoZ2FsbGVyeUluZm8udGl0bGUpKSxcclxuXHRcdFwiZnVsbC1uYW1lXCI6IGVuY29kZVVSSUNvbXBvbmVudChnYWxsZXJ5SW5mby50aXRsZSlcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTaG9ydFRpdGxlKHRpdGxlKSB7XHJcblx0Y29uc3QgcHJlZml4VGFncyA9IC9eXFxzKihcXCgoW15cXCldKj8pXFwpfFxcWyhbXlxcXV0qPylcXF18XFx7KFteXFx9XSo/KVxcfSlcXHMqL2k7XHJcblx0Y29uc3Qgc3VmZml4VGFncyA9IC9cXHMqKFxcKChbXlxcKV0qPykoPzpcXCl8JCl8XFxbKFteXFxdXSo/KSg/OlxcXXwkKXxcXHsoW15cXH1dKj8pKD86XFx9fCQpKVxccyokL2k7XHJcblxyXG5cdGxldCBtO1xyXG5cdHdoaWxlICgobSA9IHByZWZpeFRhZ3MuZXhlYyh0aXRsZSkpKSB7XHJcblx0XHR0aXRsZSA9IHRpdGxlLnN1YnN0cihtLmluZGV4ICsgbVswXS5sZW5ndGgpO1xyXG5cdH1cclxuXHR3aGlsZSAoKG0gPSBzdWZmaXhUYWdzLmV4ZWModGl0bGUpKSkge1xyXG5cdFx0dGl0bGUgPSB0aXRsZS5zdWJzdHIoMCwgbS5pbmRleCk7XHJcblx0fVxyXG5cdHJldHVybiB0aXRsZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlc2hlZXQoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtc2VhcmNoLWxpbmtzXCI7XHJcblx0aWYgKHN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS5jc3NcIik7XHJcblx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcblx0c2V0dGluZ3MuYWRkTGluaygpO1xyXG5cclxuXHRjb25zdCBjdXJyZW50UGFnZVR5cGUgPSBwYWdlVHlwZS5nZXQoZG9jdW1lbnQsIGxvY2F0aW9uKTtcclxuXHRzd2l0Y2ggKGN1cnJlbnRQYWdlVHlwZSkge1xyXG5cdFx0Y2FzZSBcImdhbGxlcnlcIjpcclxuXHRcdFx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cdFx0XHRzZXR1cEdhbGxlcnlQYWdlKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInNldHRpbmdzXCI6XHJcblx0XHRcdGluc2VydFN0eWxlc2hlZXQoKTtcclxuXHRcdFx0c2V0dGluZ3MuaW5pdGlhbGl6ZSgpO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcbn1cclxuXHJcblxyXG5yZWFkeS5vblJlYWR5KG1haW4pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uXFxcIj5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tbGVmdFxcXCI+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLXRpdGxlXFxcIj5TZWFyY2ggVGFyZ2V0czwvZGl2PlxcclxcblxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvblxcXCI+XFxyXFxuXFx0XFx0XFx0TGlzdCBvZiBzZWFyY2ggc2VhcmNoIHRhcmdldHMuXFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uXFxcIj5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lciB4LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC10YWJsZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1yb3cgeC1zZXR0aW5ncy1pbnB1dC1oZWFkZXItcm93XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPk9yZGVyPC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5UaXRsZTwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+VVJMPC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5FbmFibGVkPC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1yb3cgeC1zZWFyY2gtbGlua3Mtc2VhcmNoLXRhcmdldC1lbnRyeVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsIHgtc2V0dGluZ3MtaW5wdXQtY2VsbC1ub3dyYXBcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwieC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uIHgtc2VhcmNoLWxpbmtzLXJlbW92ZS1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIiYjeDI3MTY7XFxcIiAvPjxpbnB1dCBjbGFzcz1cXFwieC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uIHgtc2VhcmNoLWxpbmtzLW1vdmUtdXAtYnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCImI3gyNUIyO1xcXCIgLz48aW5wdXQgY2xhc3M9XFxcIngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvbiB4LXNlYXJjaC1saW5rcy1tb3ZlLWRvd24tYnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIHZhbHVlPVxcXCImI3gyNUJDO1xcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0IHgtc2VhcmNoLWxpbmtzLXRpdGxlLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgZGF0YS14LXNldHRpbmdzLW9wdGlvbj1cXFwidGl0bGVcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsIHgtc2V0dGluZ3MtaW5wdXQtY2VsbC1maWxsXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dCB4LXNlYXJjaC1saW5rcy11cmwtaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBkYXRhLXgtc2V0dGluZ3Mtb3B0aW9uPVxcXCJ1cmxcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsIHgtc2V0dGluZ3MtaW5wdXQtY2VsbC1taWRkbGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsYWJlbD48c3BhbiBjbGFzcz1cXFwibGNcXFwiPjxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0IHgtc2VhcmNoLWxpbmtzLWVuYWJsZWQtaW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLXgtc2V0dGluZ3MtZm9yPVxcXCJlbmFibGVkXFxcIiAvPjxzcGFuPjwvc3Bhbj48L2xhYmVsPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXJvdyB4LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWVudHJ5XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwieC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uIHgtc2VhcmNoLWxpbmtzLWFkZC1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIiYjeDI3OTU7JiN4RkUwRTtcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsIHgtc2V0dGluZ3MtaW5wdXQtY2VsbC1taWRkbGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxhIGNsYXNzPVxcXCJ4LXNlYXJjaC1saW5rcy1yZXNldC1saW5rXFxcIj5SZXNldCB0byBkZWZhdWx0PC9hPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvZGl2PlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlwiOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSByZXF1aXJlKFwiLi4vYXBpL3NldHRpbmdzXCIpO1xyXG5cclxubGV0IHNldHRpbmdzQ29udHJvbGxlciA9IG51bGw7XHJcblxyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcclxuXHRjb25zdHJ1Y3Rvcihjb25maWcsIGNvbmZpZ1ZhbHVlLCB0ZW1wbGF0ZSwgc2VhcmNoVGFyZ2V0UGFyZW50LCBhZGRCdXR0b24sIHJlc2V0QnV0dG9uLCBoaWRlSWZFbXB0eU5vZGUpIHtcclxuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG5cdFx0dGhpcy5jb25maWdWYWx1ZSA9IGNvbmZpZ1ZhbHVlO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRQYXJlbnQgPSBzZWFyY2hUYXJnZXRQYXJlbnQ7XHJcblx0XHR0aGlzLmFkZEJ1dHRvbiA9IGFkZEJ1dHRvbjtcclxuXHRcdHRoaXMucmVzZXRCdXR0b24gPSByZXNldEJ1dHRvbjtcclxuXHRcdHRoaXMuaGlkZUlmRW1wdHlOb2RlID0gaGlkZUlmRW1wdHlOb2RlO1xyXG5cclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0cyA9IFtdO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycyA9IFtdO1xyXG5cdFx0dGhpcy5zZXR1cFNlYXJjaFRhcmdldHMoKTtcclxuXHJcblx0XHR0aGlzLmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5hZGRTZWFyY2hUYXJnZXQoKSwgZmFsc2UpO1xyXG5cdFx0dGhpcy5yZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5yZXNldFNlYXJjaFRhcmdldHMoKSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgYWRkU2VhcmNoVGFyZ2V0KCkge1xyXG5cdFx0Y29uc3Qgc2VhcmNoVGFyZ2V0ID0geyB0aXRsZTogXCJcIiwgdXJsOiBcIlwiLCBlbmFibGVkOiB0cnVlIH07XHJcblx0XHRjb25zdCBpbmRleCA9IHRoaXMuc2VhcmNoVGFyZ2V0cy5sZW5ndGg7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldHMucHVzaChzZWFyY2hUYXJnZXQpO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5wdXNoKG5ldyBTZXR0aW5nc1NlYXJjaFRhcmdldENvbnRyb2xsZXIodGhpcywgc2VhcmNoVGFyZ2V0LCBpbmRleCkpO1xyXG5cdFx0aWYgKGluZGV4ID4gMCkge1xyXG5cdFx0XHRjb25zdCBjID0gdGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVyc1tpbmRleCAtIDFdO1xyXG5cdFx0XHRpZiAoYyAhPT0gbnVsbCkgeyBjLnVwZGF0ZUluZGV4KGMuaW5kZXgpOyB9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTZWFyY2hUYXJnZXRDb3VudCgpO1xyXG5cclxuXHRcdGF3YWl0IHRoaXMuc2F2ZUNvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgcmVzZXRTZWFyY2hUYXJnZXRzKCkge1xyXG5cdFx0dGhpcy5jbGVhbnVwU2VhcmNoVGFyZ2V0cygpO1xyXG5cclxuXHRcdHRoaXMuY29uZmlnVmFsdWUuc2VhcmNoVGFyZ2V0cyA9IHRoaXMuY29uZmlnLmdldERlZmF1bHRTZWFyY2hUYXJnZXRzKCk7XHJcblx0XHRhd2FpdCB0aGlzLnNhdmVDb25maWcoKTtcclxuXHJcblx0XHR0aGlzLnNldHVwU2VhcmNoVGFyZ2V0cygpO1xyXG5cdH1cclxuXHJcblx0Y2xlYW51cFNlYXJjaFRhcmdldHMoKSB7XHJcblx0XHRmb3IgKGNvbnN0IHNlYXJjaFRhcmdldENvbnRyb2xsZXIgb2YgdGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycykge1xyXG5cdFx0XHRzZWFyY2hUYXJnZXRDb250cm9sbGVyLmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHNldHVwU2VhcmNoVGFyZ2V0cygpIHtcclxuXHRcdGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmNvbmZpZ1ZhbHVlLnNlYXJjaFRhcmdldHMpKSB7XHJcblx0XHRcdHRoaXMuY29uZmlnVmFsdWUuc2VhcmNoVGFyZ2V0cyA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0cyA9IHRoaXMuY29uZmlnVmFsdWUuc2VhcmNoVGFyZ2V0cztcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMgPSBbXTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMCwgaWkgPSB0aGlzLnNlYXJjaFRhcmdldHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0XHRjb25zdCBzZWFyY2hUYXJnZXQgPSB0aGlzLnNlYXJjaFRhcmdldHNbaV07XHJcblx0XHRcdGNvbnN0IGNvbnRyb2xsZXIgPSBpc09iamVjdChzZWFyY2hUYXJnZXQpID8gbmV3IFNldHRpbmdzU2VhcmNoVGFyZ2V0Q29udHJvbGxlcih0aGlzLCBzZWFyY2hUYXJnZXQsIGkpIDogbnVsbDtcclxuXHRcdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5wdXNoKGNvbnRyb2xsZXIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudXBkYXRlU2VhcmNoVGFyZ2V0Q291bnQoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIG1vdmUoY29udHJvbGxlciwgb2Zmc2V0KSB7XHJcblx0XHRjb25zdCBpbmRleE9sZCA9IGNvbnRyb2xsZXIuaW5kZXg7XHJcblx0XHRjb25zdCBpbmRleE5ldyA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMubGVuZ3RoIC0gMSwgaW5kZXhPbGQgKyBvZmZzZXQpKTtcclxuXHRcdGlmIChpbmRleE5ldyA9PT0gaW5kZXhPbGQpIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0Y29uc3Qgc2VhcmNoVGFyZ2V0ID0gdGhpcy5zZWFyY2hUYXJnZXRzW2luZGV4T2xkXTtcclxuXHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldHMuc3BsaWNlKGluZGV4T2xkLCAxKTtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0cy5zcGxpY2UoaW5kZXhOZXcsIDAsIHNlYXJjaFRhcmdldCk7XHJcblxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5zcGxpY2UoaW5kZXhPbGQsIDEpO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5zcGxpY2UoaW5kZXhOZXcsIDAsIGNvbnRyb2xsZXIpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSBNYXRoLm1pbihpbmRleE9sZCwgaW5kZXhOZXcpLCBpaSA9IE1hdGgubWF4KGluZGV4T2xkLCBpbmRleE5ldykgKyAxOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0XHRjb25zdCBjID0gdGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVyc1tpXTtcclxuXHRcdFx0aWYgKGMgIT09IG51bGwpIHsgYy51cGRhdGVJbmRleChpKTsgfVxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBuZXh0ID0gbnVsbDtcclxuXHRcdGZvciAobGV0IGkgPSBpbmRleE5ldyArIDEsIGlpID0gdGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzW2ldO1xyXG5cdFx0XHRpZiAoYyAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdG5leHQgPSBjO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG5leHQgIT09IG51bGwgJiYgbmV4dC5yb3cucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRuZXh0LnJvdy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb250cm9sbGVyLnJvdywgbmV4dC5yb3cpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zZWFyY2hUYXJnZXRQYXJlbnQuYXBwZW5kQ2hpbGQoY29udHJvbGxlci5yb3cpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGF3YWl0IHRoaXMuc2F2ZUNvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgcmVtb3ZlKGNvbnRyb2xsZXIpIHtcclxuXHRcdGNvbnN0IGluZGV4ID0gY29udHJvbGxlci5pbmRleDtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuXHRcdGNvbnRyb2xsZXIuZGVzdHJveSgpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSBNYXRoLm1heCgwLCBpbmRleCAtIDEpLCBpaSA9IHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0XHRjb25zdCBjID0gdGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVyc1tpXTtcclxuXHRcdFx0aWYgKGMgIT09IG51bGwpIHsgYy51cGRhdGVJbmRleChpKTsgfVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudXBkYXRlU2VhcmNoVGFyZ2V0Q291bnQoKTtcclxuXHJcblx0XHRhd2FpdCB0aGlzLnNhdmVDb25maWcoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNlYXJjaFRhcmdldENvdW50KCkge1xyXG5cdFx0aWYgKHRoaXMuaGlkZUlmRW1wdHlOb2RlID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5oaWRlSWZFbXB0eU5vZGUuc3R5bGUuZGlzcGxheSA9ICh0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLmxlbmd0aCA+IDAgPyBcIlwiIDogXCJub25lXCIpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgc2F2ZUNvbmZpZygpIHtcclxuXHRcdHRoaXMuY29uZmlnLnNhdmUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFNldHRpbmdzU2VhcmNoVGFyZ2V0Q29udHJvbGxlciB7XHJcblx0Y29uc3RydWN0b3IocGFyZW50LCBzZWFyY2hUYXJnZXQsIGluZGV4KSB7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0ID0gc2VhcmNoVGFyZ2V0O1xyXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xyXG5cclxuXHRcdHRoaXMuaG9va2VkRXZlbnRzID0gW107XHJcblx0XHR0aGlzLnJvdyA9IHRoaXMucGFyZW50LnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdHRoaXMucGFyZW50LnNlYXJjaFRhcmdldFBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnJvdyk7XHJcblxyXG5cdFx0dGhpcy5yZW1vdmVCdXR0b24gPSB0aGlzLnJvdy5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLXJlbW92ZS1idXR0b25cIik7XHJcblx0XHR0aGlzLm1vdmVVcEJ1dHRvbiA9IHRoaXMucm93LnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtbW92ZS11cC1idXR0b25cIik7XHJcblx0XHR0aGlzLm1vdmVEb3duQnV0dG9uID0gdGhpcy5yb3cucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1tb3ZlLWRvd24tYnV0dG9uXCIpO1xyXG5cdFx0dGhpcy50aXRsZUZpZWxkID0gdGhpcy5yb3cucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy10aXRsZS1pbnB1dFwiKTtcclxuXHRcdHRoaXMudXJsRmllbGQgPSB0aGlzLnJvdy5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLXVybC1pbnB1dFwiKTtcclxuXHRcdHRoaXMuZW5hYmxlZENoZWNrYm94ID0gdGhpcy5yb3cucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1lbmFibGVkLWlucHV0XCIpO1xyXG5cclxuXHRcdHRoaXMudGl0bGVGaWVsZC52YWx1ZSA9ICh0eXBlb2Yoc2VhcmNoVGFyZ2V0LnRpdGxlKSA9PT0gXCJzdHJpbmdcIiA/IHNlYXJjaFRhcmdldC50aXRsZSA6IFwiXCIpO1xyXG5cdFx0dGhpcy51cmxGaWVsZC52YWx1ZSA9ICh0eXBlb2Yoc2VhcmNoVGFyZ2V0LnVybCkgPT09IFwic3RyaW5nXCIgPyBzZWFyY2hUYXJnZXQudXJsIDogXCJcIik7XHJcblx0XHR0aGlzLmVuYWJsZWRDaGVja2JveC5jaGVja2VkID0gISFzZWFyY2hUYXJnZXQuZW5hYmxlZDtcclxuXHJcblx0XHRjb25zdCBzZWxmID0gdGhpcztcclxuXHRcdHRoaXMuX2hvb2sodGhpcy5yZW1vdmVCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5yZW1vdmUoKSk7XHJcblx0XHR0aGlzLl9ob29rKHRoaXMubW92ZVVwQnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHRoaXMubW92ZVVwKCkpO1xyXG5cdFx0dGhpcy5faG9vayh0aGlzLm1vdmVEb3duQnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHRoaXMubW92ZURvd24oKSk7XHJcblx0XHR0aGlzLl9ob29rKHRoaXMudGl0bGVGaWVsZCwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkgeyBzZWxmLnNldFRpdGxlKHRoaXMudmFsdWUpOyB9KTtcclxuXHRcdHRoaXMuX2hvb2sodGhpcy51cmxGaWVsZCwgXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkgeyBzZWxmLnNldFVybCh0aGlzLnZhbHVlKTsgfSk7XHJcblx0XHR0aGlzLl9ob29rKHRoaXMuZW5hYmxlZENoZWNrYm94LCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7IHNlbGYuc2V0RW5hYmxlZCh0aGlzLmNoZWNrZWQpOyB9KTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZUluZGV4KGluZGV4KTtcclxuXHR9XHJcblxyXG5cdGRlc3Ryb3koKSB7XHJcblx0XHRpZiAodGhpcy5yb3cgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdFx0Zm9yIChjb25zdCBpbmZvIG9mIHRoaXMuaG9va2VkRXZlbnRzKSB7XHJcblx0XHRcdGluZm8ubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGluZm8uZXZlbnQsIGluZm8uY2FsbGJhY2ssIGZhbHNlKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuaG9va2VkRXZlbnRzID0gW107XHJcblxyXG5cdFx0dGhpcy5yb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnJvdyk7XHJcblx0XHR0aGlzLnJvdyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRyZW1vdmUoKSB7XHJcblx0XHR0aGlzLnBhcmVudC5yZW1vdmUodGhpcyk7XHJcblx0fVxyXG5cclxuXHRtb3ZlVXAoKSB7XHJcblx0XHR0aGlzLnBhcmVudC5tb3ZlKHRoaXMsIC0xKTtcclxuXHR9XHJcblxyXG5cdG1vdmVEb3duKCkge1xyXG5cdFx0dGhpcy5wYXJlbnQubW92ZSh0aGlzLCAxKTtcclxuXHR9XHJcblxyXG5cdHNldFRpdGxlKHZhbHVlKSB7XHJcblx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gXCJzdHJpbmdcIikgeyByZXR1cm47IH1cclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0LnRpdGxlID0gdmFsdWU7XHJcblx0XHR0aGlzLnBhcmVudC5zYXZlQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRzZXRVcmwodmFsdWUpIHtcclxuXHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSBcInN0cmluZ1wiKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXQudXJsID0gdmFsdWU7XHJcblx0XHR0aGlzLnBhcmVudC5zYXZlQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRzZXRFbmFibGVkKHZhbHVlKSB7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldC5lbmFibGVkID0gISF2YWx1ZTtcclxuXHRcdHRoaXMucGFyZW50LnNhdmVDb25maWcoKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUluZGV4KGluZGV4KSB7XHJcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XHJcblx0XHR0aGlzLm1vdmVVcEJ1dHRvbi5kaXNhYmxlZCA9IChpbmRleCA8PSAwKTtcclxuXHRcdHRoaXMubW92ZURvd25CdXR0b24uZGlzYWJsZWQgPSAoaW5kZXggPj0gdGhpcy5wYXJlbnQuc2VhcmNoVGFyZ2V0cy5sZW5ndGggLSAxKTtcclxuXHR9XHJcblxyXG5cdF9ob29rKG5vZGUsIGV2ZW50LCBjYWxsYmFjaykge1xyXG5cdFx0dGhpcy5ob29rZWRFdmVudHMucHVzaCh7IG5vZGUsIGV2ZW50LCBjYWxsYmFjayB9KTtcclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIGZhbHNlKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCh2KSB7XHJcblx0cmV0dXJuICh2ICE9PSBudWxsICYmIHR5cGVvZih2KSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpbmsoKSB7XHJcblx0c2V0dGluZ3MuYWRkTGluaygpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdHNldHRpbmdzLmluaXRpYWxpemUoKTtcclxuXHJcblx0Y29uc3Qgc2VjdGlvbiA9IHNldHRpbmdzLmFkZFNlY3Rpb24oXCJTZWFyY2ggTGlua3NcIiwgXCJzZWFyY2gtbGlua3NcIiwgMyk7XHJcblx0aWYgKHNlY3Rpb24gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcclxuXHRcdGNvbnN0IGNvbmZpZ1ZhbHVlID0gYXdhaXQgY29uZmlnLmdldCgpO1xyXG5cdFx0c2V0dXBTZXR0aW5ncyhjb25maWcsIGNvbmZpZ1ZhbHVlLCBzZWN0aW9uKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwU2V0dGluZ3MoY29uZmlnLCBjb25maWdWYWx1ZSwgY29udGFpbmVyKSB7XHJcblx0aWYgKHNldHRpbmdzQ29udHJvbGxlciAhPT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29udGFpbmVyLmlubmVySFRNTCA9IHJlcXVpcmUoXCIuL3NldHRpbmdzLmh0bWxcIik7XHJcblxyXG5cdGNvbnN0IHRlbXBsYXRlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3Mtc2VhcmNoLXRhcmdldC1lbnRyeVwiKTtcclxuXHRjb25zdCBwYXJlbnQgPSB0ZW1wbGF0ZS5wYXJlbnROb2RlO1xyXG5cdGNvbnN0IGFkZEJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLWFkZC1idXR0b25cIik7XHJcblx0Y29uc3QgcmVzZXRCdXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1yZXNldC1saW5rXCIpO1xyXG5cdGNvbnN0IGhpZGVOb2RlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3Mtc2VhcmNoLXRhcmdldC1jb250YWluZXJcIik7XHJcblx0cGFyZW50LnJlbW92ZUNoaWxkKHRlbXBsYXRlKTtcclxuXHJcblx0c2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcihjb25maWcsIGNvbmZpZ1ZhbHVlLCB0ZW1wbGF0ZSwgcGFyZW50LCBhZGRCdXR0b24sIHJlc2V0QnV0dG9uLCBoaWRlTm9kZSk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rLFxyXG5cdGluaXRpYWxpemVcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImlucHV0Lngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvblt0eXBlPWJ1dHRvbl17ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO21hcmdpbjowO3BhZGRpbmc6MDtsaW5lLWhlaWdodDoxLjg3NWVtO2JveC1zaXppbmc6Ym9yZGVyLWJveDtmb250LXNpemU6aW5oZXJpdDtmb250LXdlaWdodDo3MDA7d2lkdGg6MS44NzVlbTtoZWlnaHQ6MS44NzVlbTttaW4taGVpZ2h0OjA7YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO3RleHQtYWxpZ246Y2VudGVyO2N1cnNvcjpwb2ludGVyfTpyb290LngtaXMtZGFyayBpbnB1dC54LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b25bdHlwZT1idXR0b25dOmRpc2FibGVke2NvbG9yOnJnYmEoMjQxLDI0MSwyNDEsLjUpOy13ZWJraXQtdGV4dC1maWxsLWNvbG9yOnJnYmEoMjQxLDI0MSwyNDEsLjUpfTpyb290Om5vdCgueC1pcy1kYXJrKSBpbnB1dC54LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b25bdHlwZT1idXR0b25de2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX1pbnB1dC54LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b25bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfWlucHV0Lngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvblt0eXBlPWJ1dHRvbl0raW5wdXQueC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uW3R5cGU9YnV0dG9uXXttYXJnaW4tbGVmdDouMjVlbX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XS54LXNlYXJjaC1saW5rcy11cmwtaW5wdXR7d2lkdGg6MTAwJX0ueC1zZWFyY2gtbGlua3Mtc2VhcmNoLXRhcmdldC1jb250YWluZXJ7d2lkdGg6MTAwJX0ueC1zZWFyY2gtbGlua3MtcmVzZXQtbGlua3t0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO2N1cnNvcjpwb2ludGVyfS54LXNlYXJjaC1saW5rcy1yZXNldC1saW5rOm5vdCg6aG92ZXIpe29wYWNpdHk6LjV9XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgYXBpU3R5bGUgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldElkKGlkKSB7XHJcblx0cmV0dXJuIGAke2lkfS1zdHlsZXNoZWV0YDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U3R5bGVzaGVldChpZCkge1xyXG5cdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRJZChpZCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuICEhZ2V0U3R5bGVzaGVldChpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc2hlZXQoc291cmNlLCBpZCkge1xyXG5cdGlmIChhcGlTdHlsZSA9PT0gbnVsbCkgeyBhcGlTdHlsZSA9IHJlcXVpcmUoXCIuL2FwaS9zdHlsZVwiKTsgfVxyXG5cdGFwaVN0eWxlLnNldERvY3VtZW50RGFya0ZsYWcoKTtcclxuXHJcblx0Y29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0c3R5bGUudGV4dENvbnRlbnQgPSBzb3VyY2U7XHJcblx0aWYgKHR5cGVvZihpZCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHN0eWxlLmlkID0gZ2V0SWQoaWQpO1xyXG5cdH1cclxuXHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHRyZXR1cm4gc3R5bGU7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRoYXNTdHlsZXNoZWV0LFxyXG5cdGdldFN0eWxlc2hlZXQsXHJcblx0YWRkU3R5bGVzaGVldFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCB4UHJlZml4ID0gXCIjIXhcIjtcclxuY29uc3Qgc2VwYXJhdG9yID0gXCIvXCI7XHJcbmNvbnN0IHJvdXRlcyA9IFtdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKGFkZEhpc3RvcnkpIHtcclxuXHRjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdGlmIChhZGRIaXN0b3J5KSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIFwiXCIsIHVybCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUocGF0aCkge1xyXG5cdHJldHVybiBwYXRoID8gYCR7eFByZWZpeH0ke3NlcGFyYXRvcn0ke3BhdGh9YCA6IHhQcmVmaXg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFJvdXRlKG1hdGNoLCBjYWxsYmFjaykge1xyXG5cdGNvbnN0IHJvdXRlID0geyBtYXRjaCwgY2FsbGJhY2sgfTtcclxuXHRyb3V0ZXMucHVzaChyb3V0ZSk7XHJcblx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDEpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHR9XHJcblx0dGVzdFJvdXRlcyhbcm91dGVdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Zm9yIChsZXQgaSA9IDAsIGlpID0gcm91dGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdGNvbnN0IHJvdXRlID0gcm91dGVzW2ldO1xyXG5cdFx0aWYgKHJvdXRlLm1hdGNoID09PSBtYXRjaCAmJiByb3V0ZS5jYWxsYmFjayA9PT0gY2FsbGJhY2spIHtcclxuXHRcdFx0cm91dGVzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0aWYgKHJvdXRlcy5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIG9uVXJsRnJhZ21lbnRDaGFuZ2VkLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WEZyYWdtZW50KCkge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XHJcblx0cmV0dXJuIChcclxuXHRcdCFmcmFnbWVudCB8fFxyXG5cdFx0ZnJhZ21lbnQubGVuZ3RoIDwgeFByZWZpeC5sZW5ndGggfHxcclxuXHRcdGZyYWdtZW50LnN1YnN0cigwLCB4UHJlZml4Lmxlbmd0aCkgIT09IHhQcmVmaXggfHxcclxuXHRcdChmcmFnbWVudC5sZW5ndGggPiB4UHJlZml4Lmxlbmd0aCAmJiBmcmFnbWVudFt4UHJlZml4Lmxlbmd0aF0gIT09IHNlcGFyYXRvcikpID9cclxuXHRcdG51bGwgOlxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKHhQcmVmaXgubGVuZ3RoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdFJvdXRlcyhyb3V0ZXMpIHtcclxuXHRjb25zdCBmcmFnbWVudCA9IGdldFhGcmFnbWVudCgpO1xyXG5cdGlmIChmcmFnbWVudCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0Zm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcm91dGUubWF0Y2guZXhlYyhmcmFnbWVudCk7XHJcblx0XHRyb3V0ZS5jYWxsYmFjayhtYXRjaCwgZnJhZ21lbnQpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25VcmxGcmFnbWVudENoYW5nZWQoKSB7XHJcblx0dGVzdFJvdXRlcyhyb3V0ZXMpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y2xlYXI6IGNsZWFyLFxyXG5cdGNyZWF0ZTogY3JlYXRlLFxyXG5cdGFkZFJvdXRlOiBhZGRSb3V0ZSxcclxuXHRyZW1vdmVSb3V0ZTogcmVtb3ZlUm91dGVcclxufTtcclxuIl19
