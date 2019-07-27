// ==UserScript==
// @name        x/search-links
// @version     1.1.1
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
let waitForGalleryDetailsPromise = null;


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

function waitForGalleryDetails() {
	const gd = getGalleryDetails(true);
	if (gd !== null) { return Promise.resolve(gd); }

	if (waitForGalleryDetailsPromise === null) {
		waitForGalleryDetailsPromise = createWaitForGalleryDetailsPromise();
	}

	return waitForGalleryDetailsPromise;
}

function createWaitForGalleryDetailsPromise() {
	return new Promise((resolve) => {
		const mo = new MutationObserver(() => {
			const gd = getGalleryDetails(true);
			if (gd === null) { return; }

			mo.disconnect();
			waitForGalleryDetailsPromise = null;
			resolve(gd);
		});
		mo.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}


module.exports = {
	get: getGalleryDetails,
	waitFor: waitForGalleryDetails
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
	},
	{
		title: "Search by Full Name (chaika)",
		url: "https://panda.chaika.moe/search/?qsearch={full-name}",
		enabled: true
	},
	{
		title: "Search by Name (chaika)",
		url: "https://panda.chaika.moe/search/?qsearch={short-name}",
		enabled: true
	},
	{
		title: "Search by URL (chaika)",
		url: "https://panda.chaika.moe/search/?qsearch={url}",
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
const galleryDetails = require("../api/gallery-details");
const PopupMenu = require("../api/popup-menu").PopupMenu;
const settings = require("./settings");

let menu = null;


async function setupGalleryPage(gd) {
	const config = await require("./config").get();
	const searchTargets = config.searchTargets;
	if (!Array.isArray(searchTargets) || searchTargets.length === 0) { return; }

	const link = gd.addLink("Custom Search", 0);
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

	if (options.length === 0) { return null; }

	const getGalleryInfoFromHtml = require("../api/gallery-info/get-from-html");
	const info = getGalleryInfoFromHtml(document.documentElement, window.location.href);
	if (info === null) { return null; }

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
		"full-name": encodeURIComponent(galleryInfo.title),
		"url": encodeURIComponent(getGalleryUrl(galleryInfo.identifier))
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

function getGalleryUrl(id) {
	const loc = window.location;
	return `${loc.protocol}//${loc.host}/g/${id.id}/${id.token}/`;
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
	if (currentPageType === "settings") {
		insertStylesheet();
		settings.initialize();
		return;
	}

	(async () => {
		const gd = await galleryDetails.waitFor();
		insertStylesheet();
		setupGalleryPage(gd);
	})();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktZGV0YWlscy5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pZGVudGlmaWVyLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbC5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3R5cGVzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHMuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BvcHVwLW1lbnUuanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvZ2FsbGVyeS1kZXRhaWxzLmNzcyIsInNyYy9hcGkvc3R5bGUvcG9wdXAtbWVudS5jc3MiLCJzcmMvYXBpL3N0eWxlL3NldHRpbmdzLmNzcyIsInNyYy9jb25maWcuanMiLCJzcmMvZ20uanMiLCJzcmMvcmVhZHkuanMiLCJzcmMvc2VhcmNoLWxpbmtzL2NvbmZpZy5qcyIsInNyYy9zZWFyY2gtbGlua3MvbWFpbi5qcyIsInNyYy9zZWFyY2gtbGlua3Mvc2V0dGluZ3MuaHRtbCIsInNyYy9zZWFyY2gtbGlua3Mvc2V0dGluZ3MuanMiLCJzcmMvc2VhcmNoLWxpbmtzL3N0eWxlLmNzcyIsInNyYy9zdHlsZS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JRQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IGdhbGxlcnlEZXRhaWxzU3R5bGVzaGVldElkID0gXCJ4LWdhbGxlcnktZGV0YWlscy1zdHlsZVwiO1xyXG5jb25zdCBnYWxsZXJ5RGV0YWlsc0NvbnRhaW5lcklkID0gXCJ4LWdhbGxlcnktZGV0YWlsc1wiO1xyXG5jb25zdCBnYWxsZXJ5RGV0YWlsc0xpbmtzQ29udGFpbmVyQ2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlscy1saW5rc1wiO1xyXG5jb25zdCBnYWxsZXJ5RGV0YWlsc0NvbnRlbnRDb250YWluZXJDbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnQtY29udGFpbmVyXCI7XHJcblxyXG5sZXQgZ2FsbGVyeURldGFpbHNJbnN0YW5jZSA9IG51bGw7XHJcbmxldCB3YWl0Rm9yR2FsbGVyeURldGFpbHNQcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG5jbGFzcyBHYWxsZXJ5RGV0YWlscyB7XHJcblx0Y29uc3RydWN0b3IoY29udGFpbmVyTm9kZSkge1xyXG5cdFx0dGhpcy5jb250YWluZXJOb2RlID0gY29udGFpbmVyTm9kZTtcclxuXHRcdHRoaXMubGlua3NDb250YWluZXIgPSBjb250YWluZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoYC4ke2dhbGxlcnlEZXRhaWxzTGlua3NDb250YWluZXJDbGFzc05hbWV9YCk7XHJcblx0XHR0aGlzLmNvbnRlbnRDb250YWluZXIgPSBjb250YWluZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoYC4ke2dhbGxlcnlEZXRhaWxzQ29udGVudENvbnRhaW5lckNsYXNzTmFtZX1gKTtcclxuXHR9XHJcblxyXG5cdGFkZExpbmsodGl0bGUsIG9yZGVyKSB7XHJcblx0XHRpZiAodGhpcy5saW5rc0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IG4wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblx0XHRuMC5jbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLWxpbmstY29udGFpbmVyXCI7XHJcblx0XHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRuMC5zdHlsZS5vcmRlciA9IGAke01hdGgucm91bmQob3JkZXIpfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRcdG4xLmNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWRldGFpbHMtbGlua1wiO1xyXG5cdFx0bjEudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcblx0XHRuMC5hcHBlbmRDaGlsZChuMSk7XHJcblxyXG5cdFx0dGhpcy5saW5rc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuMCk7XHJcblx0XHRyZXR1cm4gbjE7XHJcblx0fVxyXG5cclxuXHRhZGRDb250ZW50Q29udGFpbmVyKG5hbWUsIG9yZGVyKSB7XHJcblx0XHRpZiAodGhpcy5jb250ZW50Q29udGFpbmVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0bjAuY2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlscy1jb250ZW50XCI7XHJcblx0XHRpZiAodHlwZW9mKG5hbWUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdG4wLnNldEF0dHJpYnV0ZShcImRhdGEteC1jb250ZW50LW5hbWVcIiwgbmFtZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRuMC5zdHlsZS5vcmRlciA9IGAke01hdGgucm91bmQob3JkZXIpfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG4wKTtcclxuXHRcdHJldHVybiBuMDtcclxuXHR9XHJcblxyXG5cdGdldENvbnRlbnRDb250YWluZXIobmFtZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29udGVudENvbnRhaW5lciAhPT0gbnVsbCA/IHRoaXMuY29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS14LWNvbnRlbnQtbmFtZT1cIiR7bmFtZX1cIl1gKSA6IG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZmluZFBhcmVudFdpdGhDbGFzcyhub2RlLCBjbGFzc05hbWUpIHtcclxuXHRpZiAobm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0d2hpbGUgKChub2RlID0gbm9kZS5wYXJlbnROb2RlKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiBub2RlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SW5mb0NvbnRhaW5lcigpIHtcclxuXHRyZXR1cm4gZmluZFBhcmVudFdpdGhDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdtIGgxI2duXCIpLCBcImdtXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGV0YWlsc1N0eWxlc2hlZXQoKSB7XHJcblx0Y29uc3QgaWQgPSBnYWxsZXJ5RGV0YWlsc1N0eWxlc2hlZXRJZDtcclxuXHRjb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuXHRpZiAoIXN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7XHJcblx0XHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS9nYWxsZXJ5LWRldGFpbHMuY3NzXCIpO1xyXG5cdFx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdhbGxlcnlEZXRhaWxzSHRtbCgpIHtcclxuXHRjb25zdCBuMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bjAuaWQgPSBnYWxsZXJ5RGV0YWlsc0NvbnRhaW5lcklkO1xyXG5cdG4wLmNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWRldGFpbHNcIjtcclxuXHJcblx0Y29uc3QgbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdG4xLmNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWRldGFpbHMtaW5uZXJcIjtcclxuXHJcblx0bGV0IG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRuMi5jbGFzc05hbWUgPSBnYWxsZXJ5RGV0YWlsc0xpbmtzQ29udGFpbmVyQ2xhc3NOYW1lO1xyXG5cdG4xLmFwcGVuZENoaWxkKG4yKTtcclxuXHJcblx0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdG4yLmNsYXNzTmFtZSA9IGdhbGxlcnlEZXRhaWxzQ29udGVudENvbnRhaW5lckNsYXNzTmFtZTtcclxuXHRuMS5hcHBlbmRDaGlsZChuMik7XHJcblxyXG5cdG4wLmFwcGVuZENoaWxkKG4xKTtcclxuXHJcblx0cmV0dXJuIG4wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5RGV0YWlscyhhbGxvd0NyZWF0ZSkge1xyXG5cdGxldCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2FsbGVyeURldGFpbHNDb250YWluZXJJZCk7XHJcblx0aWYgKG4gIT09IG51bGwpIHtcclxuXHRcdGlmIChnYWxsZXJ5RGV0YWlsc0luc3RhbmNlID09PSBudWxsIHx8IGdhbGxlcnlEZXRhaWxzSW5zdGFuY2UuY29udGFpbmVyTm9kZSAhPT0gbikge1xyXG5cdFx0XHRnYWxsZXJ5RGV0YWlsc0luc3RhbmNlID0gbmV3IEdhbGxlcnlEZXRhaWxzKG4pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGdhbGxlcnlEZXRhaWxzSW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHRpZiAoIWFsbG93Q3JlYXRlKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGdhbGxlcnlJbmZvQ29udGFpbmVyID0gZ2V0R2FsbGVyeUluZm9Db250YWluZXIoKTtcclxuXHRpZiAoZ2FsbGVyeUluZm9Db250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y3JlYXRlR2FsbGVyeURldGFpbHNTdHlsZXNoZWV0KCk7XHJcblx0biA9IGNyZWF0ZUdhbGxlcnlEZXRhaWxzSHRtbCgpO1xyXG5cclxuXHRnYWxsZXJ5SW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuKTtcclxuXHJcblx0Z2FsbGVyeURldGFpbHNJbnN0YW5jZSA9IG5ldyBHYWxsZXJ5RGV0YWlscyhuKTtcclxuXHRyZXR1cm4gZ2FsbGVyeURldGFpbHNJbnN0YW5jZTtcclxufVxyXG5cclxuZnVuY3Rpb24gd2FpdEZvckdhbGxlcnlEZXRhaWxzKCkge1xyXG5cdGNvbnN0IGdkID0gZ2V0R2FsbGVyeURldGFpbHModHJ1ZSk7XHJcblx0aWYgKGdkICE9PSBudWxsKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2QpOyB9XHJcblxyXG5cdGlmICh3YWl0Rm9yR2FsbGVyeURldGFpbHNQcm9taXNlID09PSBudWxsKSB7XHJcblx0XHR3YWl0Rm9yR2FsbGVyeURldGFpbHNQcm9taXNlID0gY3JlYXRlV2FpdEZvckdhbGxlcnlEZXRhaWxzUHJvbWlzZSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHdhaXRGb3JHYWxsZXJ5RGV0YWlsc1Byb21pc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdhaXRGb3JHYWxsZXJ5RGV0YWlsc1Byb21pc2UoKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcblx0XHRjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuXHRcdFx0Y29uc3QgZ2QgPSBnZXRHYWxsZXJ5RGV0YWlscyh0cnVlKTtcclxuXHRcdFx0aWYgKGdkID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRcdFx0bW8uZGlzY29ubmVjdCgpO1xyXG5cdFx0XHR3YWl0Rm9yR2FsbGVyeURldGFpbHNQcm9taXNlID0gbnVsbDtcclxuXHRcdFx0cmVzb2x2ZShnZCk7XHJcblx0XHR9KTtcclxuXHRcdG1vLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xyXG5cdFx0XHRjaGlsZExpc3Q6IHRydWUsXHJcblx0XHRcdHN1YnRyZWU6IHRydWVcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0OiBnZXRHYWxsZXJ5RGV0YWlscyxcclxuXHR3YWl0Rm9yOiB3YWl0Rm9yR2FsbGVyeURldGFpbHNcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jbGFzcyBHYWxsZXJ5SWRlbnRpZmllciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIHRva2VuKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLnRva2VuID0gdG9rZW47XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlRnJvbVVybCh1cmwpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gL14uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT8kLy5leGVjKHVybCk7XHJcblx0XHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBwYXRoID0gbWF0Y2hbMV0ucmVwbGFjZSgvXlxcLyt8XFwvKyQvZywgXCJcIikucmVwbGFjZSgvXFwvezIsfS9nLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xyXG5cdFx0aWYgKHBhdGhbMF0gIT09IFwiZ1wiIHx8IHBhdGgubGVuZ3RoIDwgMykgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IGlkID0gcGFyc2VJbnQocGF0aFsxXSwgMTApO1xyXG5cdFx0cmV0dXJuIChOdW1iZXIuaXNOYU4oaWQpID8gbnVsbCA6IG5ldyBHYWxsZXJ5SWRlbnRpZmllcihpZCwgcGF0aFsyXSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDc3NVcmwodXJsU3RyaW5nKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC91cmxcXHMqXFwoXFxzKihbJ1wiXSk/LztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh1cmxTdHJpbmcpO1xyXG5cdGlmIChtYXRjaCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBxdW90ZSA9IG1hdGNoWzFdIHx8IFwiXCI7XHJcblx0dXJsU3RyaW5nID0gdXJsU3RyaW5nLnN1YnN0cihtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAtIHF1b3RlLmxlbmd0aCk7XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4yID0gbmV3IFJlZ0V4cChgKCR7cXVvdGV9KVxcXFxzKlxcXFwpXFxcXHMqJGApO1xyXG5cdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4yLmV4ZWModXJsU3RyaW5nKTtcclxuXHRpZiAobWF0Y2gyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHVybCA9IHVybFN0cmluZy5zdWJzdHIoMCwgbWF0Y2gyLmluZGV4ICsgbWF0Y2gyWzFdLmxlbmd0aCk7XHJcblxyXG5cdGxldCB1cmwyID0gdXJsO1xyXG5cdGlmICghcXVvdGUpIHtcclxuXHRcdHVybDIgPSB1cmwucmVwbGFjZSgvXCIvZywgXCJcXFxcXFxcIlwiKTtcclxuXHRcdHVybDIgPSBgXCIke3VybDJ9XCJgO1xyXG5cdH0gZWxzZSBpZiAocXVvdGUgPT09IFwiJ1wiKSB7XHJcblx0XHR1cmwyID0gdXJsLnN1YnN0cigxLCB1cmwubGVuZ3RoIC0gMik7XHJcblx0XHR1cmwyID0gdXJsMi5yZXBsYWNlKC9cXFxcJy9nLCBcIidcIik7XHJcblx0XHR1cmwyID0gYFwiJHt1cmwyfVwiYDtcclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRyZXR1cm4gSlNPTi5wYXJzZSh1cmwyKTtcclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRyZXR1cm4gdXJsO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGltZXN0YW1wKHRleHQpIHtcclxuXHRjb25zdCBtYXRjaCA9IC8oWzAtOV0rKS0oWzAtOV0rKS0oWzAtOV0rKVxccysoWzAtOV0rKTooWzAtOV0rKS8uZXhlYyh0ZXh0KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0cmV0dXJuIERhdGUuVVRDKFxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbMV0sIDEwKSwgLy8geWVhclxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbMl0sIDEwKSAtIDEsIC8vIG1vbnRoXHJcblx0XHRwYXJzZUludChtYXRjaFszXSwgMTApLCAvLyBkYXlcclxuXHRcdHBhcnNlSW50KG1hdGNoWzRdLCAxMCksIC8vIGhvdXJzXHJcblx0XHRwYXJzZUludChtYXRjaFs1XSwgMTApLCAvLyBtaW51dGVzXHJcblx0XHQwLCAvLyBzZWNvbmRzXHJcblx0XHQwKTsgLy8gbWlsbGlzZWNvbmRzXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUaXRsZShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnblwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBub2RlLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaXRsZU9yaWdpbmFsKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dqXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IG5vZGUudGV4dENvbnRlbnQudHJpbSgpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1haW5UaHVtYm5haWxVcmwoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ2QxPmRpdlwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRsZXQgdXJsID0gZ2V0Q3NzVXJsKG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlKTtcclxuXHRpZiAodXJsICE9PSBudWxsKSB7IHJldHVybiB1cmw7IH1cclxuXHJcblx0Y29uc3QgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0cmV0dXJuIChpbWcgIT09IG51bGwgPyBpbWcuZ2V0QXR0cmlidXRlKFwic3JjXCIpIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENhdGVnb3J5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkYz5kaXZbb25jbGlja11cIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9bJ1wiXS4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pP1snXCJdLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcIm9uY2xpY2tcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVwbG9hZGVyKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkbj5hXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXi4qP1xcL1xcLy4rP1xcLyguKj8pKFxcPy4qPyk/KCMuKj8pPyQvO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gKG1hdGNoWzFdLnNwbGl0KFwiL1wiKVsxXSB8fCBcIlwiKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYXRpbmdDb3VudChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNyYXRpbmdfY291bnRcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBwYXJzZUludChub2RlLnRleHRDb250ZW50LnRyaW0oKSwgMTApO1xyXG5cdHJldHVybiAoTnVtYmVyLmlzTmFOKHZhbHVlKSA/IG51bGwgOiB2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhdGluZ0F2ZXJhZ2UoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nX2xhYmVsXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvYXZlcmFnZTpcXHMqKFswLTlcXC5dKykvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcclxuXHRyZXR1cm4gKE51bWJlci5pc05hTih2YWx1ZSkgPyBudWxsIDogdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYXZvcml0ZUNvdW50KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2ZhdmNvdW50XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxzKihbMC05XSt8b25jZSkvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgbWF0Y2gxID0gbWF0Y2hbMV07XHJcblx0cmV0dXJuIChtYXRjaDEudG9Mb3dlckNhc2UoKSA9PT0gXCJvbmNlXCIgPyAxIDogcGFyc2VJbnQobWF0Y2gxLCAxMCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGYXZvcml0ZUNhdGVnb3J5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2Zhdj5kaXYuaVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikgfHwgXCJcIjtcclxuXHRjb25zdCBwYXR0ZXJuID0gL2JhY2tncm91bmQtcG9zaXRpb25cXHMqOlxccypcXGQrKD86cHgpP1xccysoLT9cXGQrKSg/OnB4KS87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSB8fCBcIlwiKTtcclxuXHRjb25zdCBpbmRleCA9IChtYXRjaCAhPT0gbnVsbCkgP1xyXG5cdFx0TWF0aC5mbG9vcigoTWF0aC5hYnMocGFyc2VJbnQobWF0Y2hbMV0sIDEwKSkgLSAyKSAvIDE5KSA6XHJcblx0XHQtMTtcclxuXHJcblx0cmV0dXJuIHsgaW5kZXgsIHRpdGxlIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRodW1ibmFpbFNpemUoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkbzQ+Lm5vc2VsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPCAyKSB7IHJldHVybiBudWxsOyB9XHJcblx0cmV0dXJuIChub2Rlc1swXS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aHNcIikgPyBcIm5vcm1hbFwiIDogXCJsYXJnZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGh1bWJuYWlsUm93cyhodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RvMj4ubm9zZWxcIik7XHJcblx0aWYgKG5vZGVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1xccyooWzAtOV0rKS87XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRpZiAobm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ0aHNcIikpIHtcclxuXHRcdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGFncyhodG1sKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC8oLispOi87XHJcblx0Y29uc3QgZ3JvdXBzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI3RhZ2xpc3QgdHJcIik7XHJcblx0Y29uc3QgdGFncyA9IHt9O1xyXG5cclxuXHRmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xyXG5cdFx0Y29uc3QgdGRzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbChcInRkXCIpO1xyXG5cdFx0aWYgKHRkcy5sZW5ndGggPT09IDApIHsgY29udGludWU7IH1cclxuXHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZHNbMF0udGV4dENvbnRlbnQpO1xyXG5cdFx0Y29uc3QgbmFtZXNwYWNlID0gKG1hdGNoICE9PSBudWxsID8gbWF0Y2hbMV0udHJpbSgpIDogXCJcIik7XHJcblxyXG5cdFx0bGV0IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHRpZiAodGFncy5oYXNPd25Qcm9wZXJ0eShuYW1lc3BhY2UpKSB7XHJcblx0XHRcdG5hbWVzcGFjZVRhZ3MgPSB0YWdzW25hbWVzcGFjZV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRuYW1lc3BhY2VUYWdzID0gW107XHJcblx0XHRcdHRhZ3NbbmFtZXNwYWNlXSA9IG5hbWVzcGFjZVRhZ3M7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGFnRGl2cyA9IHRkc1t0ZHMubGVuZ3RoIC0gMV0ucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcclxuXHRcdGZvciAoY29uc3QgZGl2IG9mIHRhZ0RpdnMpIHtcclxuXHRcdFx0Y29uc3QgbGluayA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcclxuXHRcdFx0aWYgKGxpbmsgPT09IG51bGwpIHsgY29udGludWU7IH1cclxuXHJcblx0XHRcdGNvbnN0IHRhZyA9IGxpbmsudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHRuYW1lc3BhY2VUYWdzLnB1c2godGFnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0YWdzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREZXRhaWxzTm9kZXMoaHRtbCkge1xyXG5cdHJldHVybiBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2RkIHRyXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRlVXBsb2FkZWQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gMCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbMF0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdHJldHVybiAobm9kZSAhPT0gbnVsbCA/IGdldFRpbWVzdGFtcChub2RlLnRleHRDb250ZW50KSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlSW5mbyhkZXRhaWxzTm9kZXMpIHtcclxuXHRsZXQgdmlzaWJsZSA9IHRydWU7XHJcblx0bGV0IHZpc2libGVSZWFzb24gPSBudWxsO1xyXG5cclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA+IDIpIHtcclxuXHRcdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbMl0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdFx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgcGF0dGVybiA9IC9ub1xccytcXCgoLis/KVxcKS9pO1xyXG5cdFx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdFx0dmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHZpc2libGVSZWFzb24gPSBtYXRjaFsxXS50cmltKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IHZpc2libGUsIHZpc2libGVSZWFzb24gfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VJbmZvKGRldGFpbHNOb2Rlcykge1xyXG5cdGxldCBsYW5ndWFnZSA9IG51bGw7XHJcblx0bGV0IHRyYW5zbGF0ZWQgPSBmYWxzZTtcclxuXHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPiAzKSB7XHJcblx0XHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzNdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRcdGlmIChub2RlICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHRleHROb2RlID0gbm9kZS5maXJzdENoaWxkO1xyXG5cdFx0XHRpZiAodGV4dE5vZGUgIT09IG51bGwgJiYgdGV4dE5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XHJcblx0XHRcdFx0bGFuZ3VhZ2UgPSB0ZXh0Tm9kZS5ub2RlVmFsdWUudHJpbSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCB0ck5vZGUgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXCIuaGFscFwiKTtcclxuXHRcdFx0dHJhbnNsYXRlZCA9ICh0ck5vZGUgIT09IG51bGwgJiYgdHJOb2RlLnRleHRDb250ZW50LnRyaW0oKS50b0xvd2VyQ2FzZSgpID09PSBcInRyXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgbGFuZ3VhZ2UsIHRyYW5zbGF0ZWQgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXBwcm94aW1hdGVUb3RhbEZpbGVTaXplKGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDQpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1s0XS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC8oWzAtOVxcLl0rKVxccyooXFx3KykvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gdXRpbHMuZ2V0Qnl0ZXNTaXplRnJvbUxhYmVsKG1hdGNoWzFdLCBtYXRjaFsyXSkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmlsZUNvdW50KGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDUpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1s1XS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC8oWzAtOSxdKylcXHMqcGFnZXMvaTtcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRyZXR1cm4gKG1hdGNoICE9PSBudWxsID8gcGFyc2VJbnQobWF0Y2hbMV0ucmVwbGFjZSgvLC9nLCBcIlwiKSwgMTApIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhcmVudChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSAxKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbMV0ucXVlcnlTZWxlY3RvcihcIi5nZHQyPmFcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mbyA9IHV0aWxzLmdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21Vcmwobm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdHJldHVybiAoaW5mbyAhPT0gbnVsbCA/IGluZm8uaWRlbnRpZmllciA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROZXdlclZlcnNpb25zKGh0bWwpIHtcclxuXHRjb25zdCByZXN1bHRzID0gW107XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ25kPmFcIik7XHJcblxyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgaW5mbyA9IHV0aWxzLmdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21Vcmwobm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdFx0aWYgKGluZm8gPT09IG51bGwpIHsgY29udGludWU7IH1cclxuXHJcblx0XHRjb25zdCBnYWxsZXJ5SW5mbyA9IHtcclxuXHRcdFx0aWRlbnRpZmllcjogaW5mby5pZGVudGlmaWVyLFxyXG5cdFx0XHRuYW1lOiBub2RlLnRleHRDb250ZW50LnRyaW0oKSxcclxuXHRcdFx0ZGF0ZVVwbG9hZGVkOiBudWxsXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChub2RlLm5leHRTaWJsaW5nICE9PSBudWxsKSB7XHJcblx0XHRcdGdhbGxlcnlJbmZvLmRhdGVVcGxvYWRlZCA9IGdldFRpbWVzdGFtcChub2RlLm5leHRTaWJsaW5nLnRleHRDb250ZW50KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXN1bHRzLnB1c2goZ2FsbGVyeUluZm8pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvcnJlbnRDb3VudChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZXMgPSBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZ2Q1IC5nMj5hXCIpO1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvXFxidG9ycmVudFxccytkb3dubG9hZFxccypcXChcXHMqKFxcZCspXFxzKlxcKS9pO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXJjaGl2ZXJLZXkoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkNSAuZzI+YVwiKTtcclxuXHRjb25zdCBwYXR0ZXJuID0gL1xcYmFyY2hpdmVcXHMrZG93bmxvYWRcXGIvaTtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHBhdHRlcm4yID0gLyZvcj0oW14nXCJdKilbJ1wiXS87XHJcblx0XHRcdGNvbnN0IG1hdGNoMiA9IHBhdHRlcm4yLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIpIHx8IFwiXCIpO1xyXG5cdFx0XHRyZXR1cm4gKG1hdGNoMiAhPT0gbnVsbCA/IG1hdGNoMlsxXSA6IG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSHRtbChpbmZvLCBodG1sKSB7XHJcblx0Ly8gR2VuZXJhbFxyXG5cdGluZm8udGl0bGUgPSBnZXRUaXRsZShodG1sKTtcclxuXHRpbmZvLnRpdGxlT3JpZ2luYWwgPSBnZXRUaXRsZU9yaWdpbmFsKGh0bWwpO1xyXG5cdGluZm8ubWFpblRodW1ibmFpbFVybCA9IGdldE1haW5UaHVtYm5haWxVcmwoaHRtbCk7XHJcblx0aW5mby5jYXRlZ29yeSA9IGdldENhdGVnb3J5KGh0bWwpO1xyXG5cdGluZm8udXBsb2FkZXIgPSBnZXRVcGxvYWRlcihodG1sKTtcclxuXHJcblx0aW5mby5yYXRpbmdDb3VudCA9IGdldFJhdGluZ0NvdW50KGh0bWwpO1xyXG5cdGluZm8ucmF0aW5nQXZlcmFnZSA9IGdldFJhdGluZ0F2ZXJhZ2UoaHRtbCk7XHJcblxyXG5cdGluZm8uZmF2b3JpdGVDb3VudCA9IGdldEZhdm9yaXRlQ291bnQoaHRtbCk7XHJcblx0aW5mby5mYXZvcml0ZUNhdGVnb3J5ID0gZ2V0RmF2b3JpdGVDYXRlZ29yeShodG1sKTtcclxuXHJcblx0aW5mby50aHVtYm5haWxTaXplID0gZ2V0VGh1bWJuYWlsU2l6ZShodG1sKTtcclxuXHRpbmZvLnRodW1ibmFpbFJvd3MgPSBnZXRUaHVtYm5haWxSb3dzKGh0bWwpO1xyXG5cclxuXHRpbmZvLm5ld2VyVmVyc2lvbnMgPSBnZXROZXdlclZlcnNpb25zKGh0bWwpO1xyXG5cclxuXHRpbmZvLnRvcnJlbnRDb3VudCA9IGdldFRvcnJlbnRDb3VudChodG1sKTtcclxuXHRpbmZvLmFyY2hpdmVyS2V5ID0gZ2V0QXJjaGl2ZXJLZXkoaHRtbCk7XHJcblxyXG5cdC8vIERldGFpbHNcclxuXHRjb25zdCBkZXRhaWxzTm9kZXMgPSBnZXREZXRhaWxzTm9kZXMoaHRtbCk7XHJcblxyXG5cdGluZm8uZGF0ZVVwbG9hZGVkID0gZ2V0RGF0ZVVwbG9hZGVkKGRldGFpbHNOb2Rlcyk7XHJcblxyXG5cdGluZm8ucGFyZW50ID0gZ2V0UGFyZW50KGRldGFpbHNOb2Rlcyk7XHJcblxyXG5cdGNvbnN0IHZpc2libGVJbmZvID0gZ2V0VmlzaWJsZUluZm8oZGV0YWlsc05vZGVzKTtcclxuXHRpbmZvLnZpc2libGUgPSB2aXNpYmxlSW5mby52aXNpYmxlO1xyXG5cdGluZm8udmlzaWJsZVJlYXNvbiA9IHZpc2libGVJbmZvLnZpc2libGVSZWFzb247XHJcblxyXG5cdGNvbnN0IGxhbmd1YWdlSW5mbyA9IGdldExhbmd1YWdlSW5mbyhkZXRhaWxzTm9kZXMpO1xyXG5cdGluZm8ubGFuZ3VhZ2UgPSBsYW5ndWFnZUluZm8ubGFuZ3VhZ2U7XHJcblx0aW5mby50cmFuc2xhdGVkID0gbGFuZ3VhZ2VJbmZvLnRyYW5zbGF0ZWQ7XHJcblxyXG5cdGluZm8uYXBwcm94aW1hdGVUb3RhbEZpbGVTaXplID0gZ2V0QXBwcm94aW1hdGVUb3RhbEZpbGVTaXplKGRldGFpbHNOb2Rlcyk7XHJcblxyXG5cdGluZm8uZmlsZUNvdW50ID0gZ2V0RmlsZUNvdW50KGRldGFpbHNOb2Rlcyk7XHJcblxyXG5cdC8vIFRhZ3NcclxuXHRpbmZvLnRhZ3MgPSBnZXRUYWdzKGh0bWwpO1xyXG5cdGluZm8udGFnc0hhdmVOYW1lc3BhY2UgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGcm9tSHRtbChodG1sLCB1cmwpIHtcclxuXHRjb25zdCBsaW5rID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiLnB0dCB0ZC5wdGRzPmFbaHJlZl0sLnB0dCB0ZC5wdGRkPmFbaHJlZl1cIik7XHJcblx0aWYgKGxpbmsgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaWRQYWdlID0gdXRpbHMuZ2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybChsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0aWYgKGlkUGFnZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBpbmZvID0gbmV3IHR5cGVzLkdhbGxlcnlJbmZvKCk7XHJcblx0aW5mby5pZGVudGlmaWVyID0gaWRQYWdlLmlkZW50aWZpZXI7XHJcblx0aW5mby5jdXJyZW50UGFnZSA9IGlkUGFnZS5wYWdlO1xyXG5cdGluZm8uc291cmNlID0gXCJodG1sXCI7XHJcblx0cG9wdWxhdGVHYWxsZXJ5SW5mb0Zyb21IdG1sKGluZm8sIGh0bWwpO1xyXG5cdGluZm8uc291cmNlU2l0ZSA9IHV0aWxzLmdldFNvdXJjZVNpdGVGcm9tVXJsKHVybCk7XHJcblx0aW5mby5kYXRlR2VuZXJhdGVkID0gRGF0ZS5ub3coKTtcclxuXHRyZXR1cm4gaW5mbztcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ2V0RnJvbUh0bWw7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgR2FsbGVyeUlkZW50aWZpZXIgPSByZXF1aXJlKFwiLi4vZ2FsbGVyeS1pZGVudGlmaWVyXCIpLkdhbGxlcnlJZGVudGlmaWVyO1xyXG5cclxuXHJcbmNsYXNzIEdhbGxlcnlJbmZvIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuaWRlbnRpZmllciA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlID0gbnVsbDtcclxuXHRcdHRoaXMudGl0bGVPcmlnaW5hbCA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVVcGxvYWRlZCA9IG51bGw7XHJcblx0XHR0aGlzLmNhdGVnb3J5ID0gbnVsbDtcclxuXHRcdHRoaXMudXBsb2FkZXIgPSBudWxsO1xyXG5cdFx0dGhpcy5yYXRpbmdBdmVyYWdlID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5mYXZvcml0ZUNhdGVnb3J5ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLm1haW5UaHVtYm5haWxVcmwgPSBudWxsO1xyXG5cdFx0dGhpcy50aHVtYm5haWxTaXplID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsUm93cyA9IG51bGw7XHJcblx0XHR0aGlzLmZpbGVDb3VudCA9IG51bGw7XHJcblx0XHR0aGlzLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0dGhpcy52aXNpYmxlUmVhc29uID0gbnVsbDtcclxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy50cmFuc2xhdGVkID0gbnVsbDtcclxuXHRcdHRoaXMuYXJjaGl2ZXJLZXkgPSBudWxsO1xyXG5cdFx0dGhpcy50b3JyZW50Q291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy50YWdzID0gbnVsbDtcclxuXHRcdHRoaXMudGFnc0hhdmVOYW1lc3BhY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XHJcblx0XHR0aGlzLm5ld2VyVmVyc2lvbnMgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBudWxsO1xyXG5cdFx0dGhpcy5zb3VyY2VTaXRlID0gbnVsbDtcclxuXHRcdHRoaXMuZGF0ZUdlbmVyYXRlZCA9IG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0R2FsbGVyeUlkZW50aWZpZXIsXHJcblx0R2FsbGVyeUluZm9cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xyXG5cclxuY29uc3Qgc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzID0gWyBcImJcIiwgXCJrYlwiLCBcIm1iXCIsIFwiZ2JcIiBdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlQYWdlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBtYXRjaCA9IC9cXD8oPzoofFtcXHdcXFddKj8mKXA9KFtcXCtcXC1dP1xcZCspKT8vLmV4ZWModXJsKTtcclxuXHRpZiAobWF0Y2ggIT09IG51bGwgJiYgbWF0Y2hbMV0pIHtcclxuXHRcdGNvbnN0IHBhZ2UgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0aWYgKCFOdW1iZXIuaXNOYU4ocGFnZSkpIHsgcmV0dXJuIHBhZ2U7IH1cclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgaWRlbnRpZmllciA9IHR5cGVzLkdhbGxlcnlJZGVudGlmaWVyLmNyZWF0ZUZyb21VcmwodXJsKTtcclxuXHRpZiAoaWRlbnRpZmllciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYWdlID0gZ2V0R2FsbGVyeVBhZ2VGcm9tVXJsKHVybCk7XHJcblx0cmV0dXJuIHsgaWRlbnRpZmllciwgcGFnZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRCeXRlc1NpemVGcm9tTGFiZWwobnVtYmVyLCBsYWJlbCkge1xyXG5cdGxldCBpID0gc2l6ZUxhYmVsVG9CeXRlc1ByZWZpeGVzLmluZGV4T2YobGFiZWwudG9Mb3dlckNhc2UoKSk7XHJcblx0aWYgKGkgPCAwKSB7IGkgPSAwOyB9XHJcblx0cmV0dXJuIE1hdGguZmxvb3IocGFyc2VGbG9hdChudW1iZXIpICogTWF0aC5wb3coMTAyNCwgaSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTb3VyY2VTaXRlRnJvbVVybCh1cmwpIHtcclxuXHRjb25zdCBwYXR0ZXJuID0gL14oPzooPzpbYS16XVthLXowLTlcXCtcXC1cXC5dKjpcXC8qfFxcL3syLH0pKFteXFwvXSopKT8oXFwvP1tcXHdcXFddKikkL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModXJsKTtcclxuXHJcblx0aWYgKG1hdGNoICE9PSBudWxsICYmIG1hdGNoWzFdKSB7XHJcblx0XHRjb25zdCBob3N0ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcclxuXHRcdGlmIChob3N0LmluZGV4T2YoXCJleGhlbnRhaVwiKSA+PSAwKSB7IHJldHVybiBcImV4aGVudGFpXCI7IH1cclxuXHRcdGlmIChob3N0LmluZGV4T2YoXCJlLWhlbnRhaVwiKSA+PSAwKSB7IHJldHVybiBcImUtaGVudGFpXCI7IH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0R2FsbGVyeUlkZW50aWZpZXJBbmRQYWdlRnJvbVVybCxcclxuXHRnZXRCeXRlc1NpemVGcm9tTGFiZWwsXHJcblx0Z2V0U291cmNlU2l0ZUZyb21VcmxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTGluayhsYWJlbCwgdXJsLCBvcmRlcikge1xyXG5cdGNvbnN0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5iXCIpO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGEuaHJlZiA9IHVybDtcclxuXHRhLnRleHRDb250ZW50ID0gbGFiZWw7XHJcblx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdGRpdi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0fVxyXG5cdGRpdi5hcHBlbmRDaGlsZChhKTtcclxuXHRuLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG5cdHJldHVybiBkaXY7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRhZGRMaW5rXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3Qgb3ZlcnJpZGVBdHRyaWJ1dGVOYW1lID0gXCJkYXRhLXgtb3ZlcnJpZGUtcGFnZS10eXBlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lLCB2YWx1ZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE92ZXJyaWRlKCkge1xyXG5cdGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShvdmVycmlkZUF0dHJpYnV0ZU5hbWUpO1xyXG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KGRvYywgbG9jYXRpb24pIHtcclxuXHRjb25zdCBvdmVycmlkZVR5cGUgPSBnZXRPdmVycmlkZSgpO1xyXG5cdGlmIChvdmVycmlkZVR5cGUgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBvdmVycmlkZVR5cGU7XHJcblx0fVxyXG5cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoYm94XCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZWFyY2hcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1mYXZjYXRdXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJmYXZvcml0ZXNcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI2kxPmgxXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJpbWFnZVwiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZ20gaDEjZ25cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcImdhbGxlcnlcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGVfb3V0ZXJcIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInNldHRpbmdzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiN0b3JyZW50aW5mb1wiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwidG9ycmVudEluZm9cIjtcclxuXHR9XHJcblxyXG5cdGxldCBuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJib2R5Pi5kPnBcIik7XHJcblx0aWYgKFxyXG5cdFx0KG4gIT09IG51bGwgJiYgL2dhbGxlcnlcXHMraGFzXFxzK2JlZW5cXHMrcmVtb3ZlZC9pLnRlc3Qobi50ZXh0Q29udGVudCkpIHx8XHJcblx0XHRkb2MucXVlcnlTZWxlY3RvcihcIi5lemVfZGdhbGxlcnlfdGFibGVcIikgIT09IG51bGwpIHsgLy8gZXplIHJlc3VycmVjdGlvblxyXG5cdFx0cmV0dXJuIFwiZGVsZXRlZEdhbGxlcnlcIjtcclxuXHR9XHJcblxyXG5cdG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdGlmIChuICE9PSBudWxsICYmIGxvY2F0aW9uICE9PSBudWxsKSB7XHJcblx0XHRjb25zdCBwID0gbG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRpZiAoXHJcblx0XHRcdG4uZ2V0QXR0cmlidXRlKFwic3JjXCIpID09PSBsb2NhdGlvbi5ocmVmICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDMpICE9PSBcIi90L1wiICYmXHJcblx0XHRcdHAuc3Vic3RyKDAsIDUpICE9PSBcIi9pbWcvXCIpIHtcclxuXHRcdFx0cmV0dXJuIFwicGFuZGFcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIFVua25vd25cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldCxcclxuXHRnZXRPdmVycmlkZSxcclxuXHRzZXRPdmVycmlkZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5cclxuXHJcbmNsYXNzIFBvcHVwTWVudSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLm1lbnVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHRoaXMubWVudU5vZGUuY2xhc3NOYW1lID0gXCJ4LXBvcHVwLW1lbnVcIjtcclxuXHJcblx0XHR0aGlzLl9vbkRvY3VtZW50Q2xpY2tIb29rRWxlbWVudCA9IG51bGw7XHJcblx0XHR0aGlzLl9vbkRvY3VtZW50Q2xpY2sgPSAoZSkgPT4gb25Eb2N1bWVudENsaWNrVG9DbG9zZShlLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cdHNob3cobm9kZSwgZml4ZWQsIGFuY2hvcikge1xyXG5cdFx0LyogZ2xvYmFscyBET01SZWN0ICovXHJcblx0XHRpbnNlcnRTdHlsZXNoZWV0KCk7XHJcblxyXG5cdFx0Y29uc3QgcGFyZW50ID0gZG9jdW1lbnQuYm9keTtcclxuXHRcdGlmICh0aGlzLm1lbnVOb2RlLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xyXG5cdFx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5tZW51Tm9kZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1lbnVOb2RlLnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuXHRcdHRoaXMubWVudU5vZGUuc3R5bGUudG9wID0gXCIwXCI7XHJcblx0XHR0aGlzLm1lbnVOb2RlLmNsYXNzTGlzdC50b2dnbGUoXCJ4LXBvcHVwLW1lbnUtZml4ZWRcIiwgZml4ZWQpO1xyXG5cclxuXHRcdGNvbnN0IGh0bWxSZWN0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0Y29uc3Qgbm9kZVJlY3QgPSAobm9kZSBpbnN0YW5jZW9mIERPTVJlY3QpID8gbm9kZSA6IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRjb25zdCBtZW51UmVjdCA9IHRoaXMubWVudU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IDA7XHJcblx0XHRjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMDtcclxuXHJcblx0XHRsZXQgeEFuY2hvciA9IG51bGw7XHJcblx0XHRsZXQgeUFuY2hvciA9IG51bGw7XHJcblx0XHRpZiAoaXNPYmplY3QoYW5jaG9yKSkge1xyXG5cdFx0XHRsZXQgdiA9IGFuY2hvci54O1xyXG5cdFx0XHRpZiAodHlwZW9mKHYpID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odikpIHsgeEFuY2hvciA9ICh2ID4gMC41ID8gMS4wIDogMC4wKTsgfVxyXG5cdFx0XHR2ID0gYW5jaG9yLnk7XHJcblx0XHRcdGlmICh0eXBlb2YodikgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih2KSkgeyB5QW5jaG9yID0gKHYgPiAwLjUgPyAxLjAgOiAwLjApOyB9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHhBbmNob3IgPT09IG51bGwpIHtcclxuXHRcdFx0eEFuY2hvciA9IChub2RlUmVjdC54ICsgbWVudVJlY3Qud2lkdGggPj0gd2luZG93V2lkdGgpID8gMS4wIDogMC4wO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh5QW5jaG9yID09PSBudWxsKSB7XHJcblx0XHRcdHlBbmNob3IgPSAobm9kZVJlY3QueSArIG5vZGVSZWN0LmhlaWdodCArIG1lbnVSZWN0LmhlaWdodCA+PSB3aW5kb3dIZWlnaHQpID8gMC4wIDogMS4wO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB4ID0gbm9kZVJlY3QueCArIHhBbmNob3IgKiAobm9kZVJlY3Qud2lkdGggLSBtZW51UmVjdC53aWR0aCk7XHJcblx0XHRsZXQgeSA9IG5vZGVSZWN0LnkgKyB5QW5jaG9yICogbm9kZVJlY3QuaGVpZ2h0IC0gbWVudVJlY3QuaGVpZ2h0ICogKDEuMCAtIHlBbmNob3IpO1xyXG5cclxuXHRcdHggPSBNYXRoLm1heCgwLjAsIE1hdGgubWluKHdpbmRvd1dpZHRoIC0gbWVudVJlY3Qud2lkdGgsIHgpKTtcclxuXHRcdHkgPSBNYXRoLm1heCgwLjAsIE1hdGgubWluKHdpbmRvd0hlaWdodCAtIG1lbnVSZWN0LmhlaWdodCwgeSkpO1xyXG5cclxuXHRcdGlmICghZml4ZWQpIHtcclxuXHRcdFx0eCAtPSBodG1sUmVjdC54O1xyXG5cdFx0XHR5IC09IGh0bWxSZWN0Lnk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5tZW51Tm9kZS5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XHJcblx0XHR0aGlzLm1lbnVOb2RlLnN0eWxlLnRvcCA9IGAke3l9cHhgO1xyXG5cclxuXHRcdGlmICh0aGlzLl9vbkRvY3VtZW50Q2xpY2tIb29rRWxlbWVudCA9PT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLl9vbkRvY3VtZW50Q2xpY2tIb29rRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRcdFx0dGhpcy5fb25Eb2N1bWVudENsaWNrSG9va0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX29uRG9jdW1lbnRDbGljaywgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aGlkZSgpIHtcclxuXHRcdGlmICh0aGlzLm1lbnVOb2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5tZW51Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubWVudU5vZGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9vbkRvY3VtZW50Q2xpY2tIb29rRWxlbWVudCAhPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLl9vbkRvY3VtZW50Q2xpY2tIb29rRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fb25Eb2N1bWVudENsaWNrLCBmYWxzZSk7XHJcblx0XHRcdHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50ID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFkZE9wdGlvbihvcHRpb25zKSB7XHJcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHRub2RlLmNsYXNzTmFtZSA9IFwieC1wb3B1cC1tZW51LW9wdGlvblwiO1xyXG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJub3JlZmVycmVyXCIpO1xyXG5cclxuXHRcdGxldCBjbG9zZU9uQ2xpY2sgPSB0cnVlO1xyXG5cdFx0aWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy50aXRsZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRub2RlLnRleHRDb250ZW50ID0gb3B0aW9ucy50aXRsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMudXJsKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdG5vZGUuaHJlZiA9IG9wdGlvbnMudXJsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy50YXJnZXQpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0bm9kZS50YXJnZXQgPSBvcHRpb25zLnRhcmdldDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMub3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdFx0bm9kZS5zdHlsZS5vcmRlciA9IGAke29wdGlvbnMub3JkZXJ9YDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMuY2FsbGJhY2spID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcHRpb25zLmNhbGxiYWNrLCBmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2xvc2VPbkNsaWNrID0gKHR5cGVvZihvcHRpb25zLmNsb3NlKSAhPT0gXCJib29sZWFuXCIgfHwgb3B0aW9ucy5jbG9zZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGNsb3NlT25DbGljaykge1xyXG5cdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gb25NZW51SXRlbUNsaWNrVG9DbG9zZShlLCB0aGlzKSwgZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubWVudU5vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XHJcblx0XHRyZXR1cm4gbm9kZTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZU9wdGlvbihub2RlKSB7XHJcblx0XHRpZiAobm9kZS5wYXJlbnROb2RlID09PSB0aGlzLm1lbnVOb2RlKSB7XHJcblx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvbkRvY3VtZW50Q2xpY2tUb0Nsb3NlKGUsIG1lbnUpIHtcclxuXHRpZiAoIW1lbnUubWVudU5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcblx0XHRtZW51LmhpZGUoKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTWVudUl0ZW1DbGlja1RvQ2xvc2UoZSwgbWVudSkge1xyXG5cdG1lbnUuaGlkZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCh2KSB7XHJcblx0cmV0dXJuIHYgIT09IG51bGwgJiYgdHlwZW9mKHYpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZXNoZWV0KCkge1xyXG5cdGNvbnN0IGlkID0gXCJ4LXBvcHVwLW1lbnVcIjtcclxuXHRpZiAoc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlL3BvcHVwLW1lbnUuY3NzXCIpO1xyXG5cdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRQb3B1cE1lbnVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcbmNvbnN0IHVybEZyYWdtZW50ID0gcmVxdWlyZShcIi4uL3VybC1mcmFnbWVudFwiKTtcclxuXHJcblxyXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lckNsYXNzID0gXCJ4LXNldHRpbmdzLWNvbnRhaW5lclwiO1xyXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzID0gXCJ4LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW5cIjtcclxuY29uc3QgZGVmYXVsdFNldHRpbmdzSGlkZGVuQ2xhc3MgPSBcIngtc2V0dGluZ3MtaGlkZGVuXCI7XHJcblxyXG5sZXQgc2V0dGluZ3NDb250YWluZXJPdXRlciA9IG51bGw7XHJcbmxldCBzZXR0aW5nc0NvbnRhaW5lciA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkTGluaygpIHtcclxuXHRjb25zdCBpZCA9IFwieC1uYXYtc2V0dGluZ3MtbGlua1wiO1xyXG5cclxuXHRsZXQgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRpZiAobiAhPT0gbnVsbCkgeyByZXR1cm4gbjsgfVxyXG5cclxuXHRjb25zdCBuYXZCYXIgPSByZXF1aXJlKFwiLi9uYXZpZ2F0aW9uLWJhclwiKTtcclxuXHRuID0gbmF2QmFyLmFkZExpbmsoXCJ4XCIsIGAvdWNvbmZpZy5waHAke3VybEZyYWdtZW50LmNyZWF0ZShcInNldHRpbmdzXCIpfWAsIDEpO1xyXG5cdGlmIChuID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdG4uaWQgPSBpZDtcclxuXHRyZXR1cm4gbjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRzZXR0aW5nc0NvbnRhaW5lck91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdXRlci5zdHVmZmJveFwiKTtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXJPdXRlciA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0c2V0dGluZ3NDb250YWluZXIgPSBzZXR0aW5nc0NvbnRhaW5lck91dGVyLnF1ZXJ5U2VsZWN0b3IoYC4ke3NldHRpbmdzQ29udGFpbmVyQ2xhc3N9YCk7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5jbGFzc05hbWUgPSBgJHtzZXR0aW5nc0NvbnRhaW5lckNsYXNzfSAke3NldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3N9YDtcclxuXHRcdHNldHRpbmdzQ29udGFpbmVyT3V0ZXIuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaWQgPSBcIngtc2V0dGluZ3NcIjtcclxuXHRpZiAoIXN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7XHJcblx0XHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS9zZXR0aW5ncy5jc3NcIik7XHJcblx0XHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG5cdH1cclxuXHJcblx0dXJsRnJhZ21lbnQuYWRkUm91dGUoL15cXC9zZXR0aW5ncyhcXC9bXFx3XFxXXSopPyQvLCBvblNldHRpbmdzUGFnZUNoYW5nZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblNldHRpbmdzUGFnZUNoYW5nZWQobWF0Y2gpIHtcclxuXHRzZXRTZXR0aW5nc1Zpc2libGUobWF0Y2ggIT09IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRTZXR0aW5nc1Zpc2libGUodmlzaWJsZSkge1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lck91dGVyID09PSBudWxsIHx8IHNldHRpbmdzQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MpICE9PSB2aXNpYmxlKSB7XHJcblx0XHQvLyBObyBjaGFuZ2VcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcywgIXZpc2libGUpO1xyXG5cclxuXHRmb3IgKGNvbnN0IGNoaWxkIG9mIHNldHRpbmdzQ29udGFpbmVyT3V0ZXIuY2hpbGRyZW4pIHtcclxuXHRcdGlmIChjaGlsZCA9PT0gc2V0dGluZ3NDb250YWluZXIpIHsgY29udGludWU7IH1cclxuXHRcdGNoaWxkLmNsYXNzTGlzdC50b2dnbGUoZGVmYXVsdFNldHRpbmdzSGlkZGVuQ2xhc3MsIHZpc2libGUpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU2VjdGlvbihoZWFkZXIsIGlkLCBvcmRlcikge1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBmdWxsSWQgPSBgeC1zZXR0aW5ncy1zZWN0aW9uLSR7aWR9YDtcclxuXHJcblx0bGV0IHNlY3Rpb24gPSBzZXR0aW5nc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHtmdWxsSWR9YCk7XHJcblx0aWYgKHNlY3Rpb24gPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2VjdGlvbi5pZCA9IGZ1bGxJZDtcclxuXHRcdHNlY3Rpb24uY2xhc3NOYW1lID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24tY29udGFpbmVyXCI7XHJcblx0XHRpZiAodHlwZW9mKG9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRzZWN0aW9uLnN0eWxlLm9yZGVyID0gYCR7b3JkZXJ9YDtcclxuXHRcdH1cclxuXHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuXHR9XHJcblxyXG5cdGxldCBjbHMgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJcIjtcclxuXHRsZXQgc2VjdGlvbkhlYWRlciA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcihgLiR7Y2xzfWApO1xyXG5cdGlmIChzZWN0aW9uSGVhZGVyID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG5cdFx0c2VjdGlvbkhlYWRlci5jbGFzc05hbWUgPSBjbHM7XHJcblx0XHRzZWN0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyO1xyXG5cdFx0Y29uc3QgcmVsYXRpdmUgPSBzZWN0aW9uLmZpcnN0Q2hpbGQ7XHJcblx0XHRpZiAocmVsYXRpdmUgIT09IG51bGwpIHtcclxuXHRcdFx0c2VjdGlvbi5pbnNlcnRCZWZvcmUocmVsYXRpdmUsIHNlY3Rpb25IZWFkZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2VjdGlvbi5hcHBlbmRDaGlsZChzZWN0aW9uSGVhZGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNscyA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRlbnRcIjtcclxuXHRsZXQgc2VjdGlvbkNvbnRlbnQgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nsc31gKTtcclxuXHRpZiAoc2VjdGlvbkNvbnRlbnQgPT09IG51bGwpIHtcclxuXHRcdHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNlY3Rpb25Db250ZW50LmNsYXNzTmFtZSA9IGNscztcclxuXHRcdHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkNvbnRlbnQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNlY3Rpb25Db250ZW50O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YWRkTGluayxcclxuXHRpbml0aWFsaXplLFxyXG5cdGFkZFNlY3Rpb25cclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpc0RhcmsoKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCB8fFxyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIngtZm9yY2UtZGFya1wiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERvY3VtZW50RGFya0ZsYWcoKSB7XHJcblx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ4LWlzLWRhcmtcIiwgaXNEYXJrKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBcnJvd0ljb25VcmwoKSB7XHJcblx0cmV0dXJuIChpc0RhcmsoKSA/IFwiaHR0cHM6Ly9leGhlbnRhaS5vcmcvaW1nL21yLmdpZlwiIDogXCJodHRwczovL2VoZ3Qub3JnL2cvbXIuZ2lmXCIpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0aXNEYXJrLFxyXG5cdHNldERvY3VtZW50RGFya0ZsYWcsXHJcblx0Z2V0QXJyb3dJY29uVXJsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1nYWxsZXJ5LWRldGFpbHN7Zm9udC1zaXplOjEwcHQ7Ym9yZGVyOm5vbmU7cGFkZGluZzouNWVtIDAgMCAwO21hcmdpbjotM3B4IC01cHh9LngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnQ6YmVmb3JlLC54LWdhbGxlcnktZGV0YWlsczpiZWZvcmV7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO21hcmdpbjowIC41ZW07Ym9yZGVyLXRvcDoxcHggc29saWQgIzAwMH06cm9vdDpub3QoLngtaXMtZGFyaykgLngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnQ6YmVmb3JlLDpyb290Om5vdCgueC1pcy1kYXJrKSAueC1nYWxsZXJ5LWRldGFpbHM6YmVmb3Jle2JvcmRlci10b3AtY29sb3I6IzVjMGQxMn0ueC1nYWxsZXJ5LWRldGFpbHMtaW5uZXJ7Ym9yZGVyOm5vbmU7bWFyZ2luOjB9LngtZ2FsbGVyeS1kZXRhaWxzLWxpbmtze2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IHdyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDtwYWRkaW5nOi41ZW07bWFyZ2luLWxlZnQ6LTFlbX0ueC1nYWxsZXJ5LWRldGFpbHMtbGluay1jb250YWluZXJ7ZmxleDowIDEgYXV0bzttYXJnaW4tbGVmdDoxZW19LngtZ2FsbGVyeS1kZXRhaWxzLWxpbmt7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y3Vyc29yOnBvaW50ZXJ9LngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnQtY29udGFpbmVye2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO2ZsZXgtZmxvdzpjb2x1bW4gd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydH0ueC1nYWxsZXJ5LWRldGFpbHMtY29udGVudHtmbGV4OjAgMSBhdXRvO3dpZHRoOjEwMCV9XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi54LXBvcHVwLW1lbnV7cG9zaXRpb246YWJzb2x1dGU7Zm9udC1zaXplOjEwcHQ7Ym9yZGVyOjFweCBzb2xpZCAjMDAwO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3otaW5kZXg6MjEwO3RleHQtYWxpZ246bGVmdDtib3gtc2hhZG93Oi4yNWVtIC4yNWVtIDAgMCByZ2JhKDAsMCwwLC41KX06cm9vdDpub3QoLngtaXMtZGFyaykgLngtcG9wdXAtbWVudXtib3JkZXItY29sb3I6IzVjMGQxMjtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDE7Ym94LXNoYWRvdzouMjVlbSAuMjVlbSAwIDAgcmdiYSg5MiwxMywxOCwuNSl9LngtcG9wdXAtbWVudS54LXBvcHVwLW1lbnUtZml4ZWR7cG9zaXRpb246Zml4ZWR9LngtcG9wdXAtbWVudS1vcHRpb257cGFkZGluZzouMjVlbSAxZW07bGluZS1oZWlnaHQ6MS4zNzVlbTt0ZXh0LWRlY29yYXRpb246bm9uZX0ueC1wb3B1cC1tZW51LW9wdGlvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMzNDM1M2J9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXBvcHVwLW1lbnUtb3B0aW9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2VkZWJkZn1cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtc2V0dGluZ3MtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWFyZ2luLXRvcDotMWVtfS54LXNldHRpbmdzLWNvbnRhaW5lci54LXNldHRpbmdzLWNvbnRhaW5lci1oaWRkZW57ZGlzcGxheTpub25lfS54LXNldHRpbmdzLWhpZGRlbntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS54LXNldHRpbmdzLW9wdGlvbiBzZWxlY3R7bWFyZ2luLXJpZ2h0Oi41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1jb250YWluZXJ7ZGlzcGxheTpibG9jazt3aWR0aDoxMDAlO21hcmdpbi10b3A6MWVtfS54LXNldHRpbmdzLXNlY3Rpb24tY29udGVudHttYXJnaW46OHB4IGF1dG8gMTBweCAxMHB4O2NsZWFyOmJvdGh9Lngtc2V0dGluZ3Mtc2VjdGlvbi1oZWFkZXJ7Zm9udC1zaXplOjEuMjVlbTtsaW5lLWhlaWdodDoxLjVlbTttYXJnaW46LjI1ZW0gMH0ueC1zZXR0aW5ncy1zZWN0aW9ue2Rpc3BsYXk6ZmxleDtmbGV4LWZsb3c6cm93IHdyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6Y2VudGVyO2FsaWduLWNvbnRlbnQ6ZmxleC1zdGFydDtmbGV4LXdyYXA6bm93cmFwO3dpZHRoOjEwMCU7cGFkZGluZzouNWVtIDB9Lngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjI1KX06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3Mtc2VjdGlvbisueC1zZXR0aW5ncy1zZWN0aW9ue2JvcmRlci10b3AtY29sb3I6cmdiYSg5MiwxMywxOCwuMjUpfS54LXNldHRpbmdzLXNlY3Rpb24tbGVmdHtmbGV4OjEgMSBhdXRvO3BhZGRpbmctcmlnaHQ6LjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLXJpZ2h0e2ZsZXg6MCAwIGF1dG87bWluLXdpZHRoOjMwJTt0ZXh0LWFsaWduOnJpZ2h0fS54LXNldHRpbmdzLXNlY3Rpb24tdGl0bGV7Zm9udC13ZWlnaHQ6NzAwO2xpbmUtaGVpZ2h0OjEuNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb257bGluZS1oZWlnaHQ6MS4zNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb24rLngtc2V0dGluZ3Mtc2VjdGlvbi1kZXNjcmlwdGlvbnttYXJnaW4tdG9wOi4yNWVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0saW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO21hcmdpbjowO3BhZGRpbmc6LjI1ZW0gLjVlbTtsaW5lLWhlaWdodDoxLjM3NWVtO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl0sOnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXt3aWR0aDoyMGVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl17d2lkdGg6NWVtOy1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGR9aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lO21hcmdpbjowfXRleHRhcmVhLngtc2V0dGluZ3Mtc2VjdGlvbi10ZXh0YXJlYXtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjA7cGFkZGluZzouMjVlbSAuNWVtO2xpbmUtaGVpZ2h0OjEuMzc1ZW07YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO3Jlc2l6ZTp2ZXJ0aWNhbDtmb250LXNpemU6aW5oZXJpdDt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MS44NzVlbTtoZWlnaHQ6NC42MjVlbTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Zm9udC1mYW1pbHk6XFxcIkNvdXJpZXIgTmV3XFxcIixDb3VyaWVyLG1vbm9zcGFjZX06cm9vdDpub3QoLngtaXMtZGFyaykgdGV4dGFyZWEueC1zZXR0aW5ncy1zZWN0aW9uLXRleHRhcmVhe2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXIgLmxje2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1yaWdodDotNnB4fS54LXNldHRpbmdzLWNvbnRhaW5lciBjb2Rle2ZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsQ291cmllcixtb25vc3BhY2U7YmFja2dyb3VuZC1jb2xvcjojNDM0NjRlO2ZvbnQtd2VpZ2h0OjcwMH06cm9vdDpub3QoLngtaXMtZGFyaykgLngtc2V0dGluZ3MtY29udGFpbmVyIGNvZGV7YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfS54LXNldHRpbmdzLWxpZ2h0LXRleHR7Zm9udC13ZWlnaHQ6NDAwO29wYWNpdHk6Ljc1fS54LXNldHRpbmdzLWlucHV0LXRhYmxlLWNvbnRhaW5lcntkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmxlZnR9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGV7ZGlzcGxheTp0YWJsZX0ueC1zZXR0aW5ncy1pbnB1dC1yb3d7ZGlzcGxheTp0YWJsZS1yb3d9Lngtc2V0dGluZ3MtaW5wdXQtcm93Lngtc2V0dGluZ3MtaW5wdXQtaGVhZGVyLXJvd3tmb250LXNpemU6LjhlbTtsaW5lLWhlaWdodDoxZW07b3BhY2l0eTouNzV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbHtkaXNwbGF5OnRhYmxlLWNlbGx9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbCsueC1zZXR0aW5ncy1pbnB1dC1jZWxse3BhZGRpbmctbGVmdDouMjVlbX0ueC1zZXR0aW5ncy1pbnB1dC1yb3c6bm90KC54LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3cpKy54LXNldHRpbmdzLWlucHV0LXJvdz4ueC1zZXR0aW5ncy1pbnB1dC1jZWxse3BhZGRpbmctdG9wOi4yNWVtfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLW1pZGRsZXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lngtc2V0dGluZ3MtaW5wdXQtY2VsbC54LXNldHRpbmdzLWlucHV0LWNlbGwtZmlsbHt3aWR0aDoxMDAlfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLW5vd3JhcHt3aGl0ZS1zcGFjZTpub3dyYXB9Lngtc2V0dGluZ3MtaW5wdXQtbGFiZWx7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luOjAgMCAwIDFlbX0ueC1zZXR0aW5ncy1pbnB1dC1jaGVja2JveC1wcmVmaXh7dmVydGljYWwtYWxpZ246bWlkZGxlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmctcmlnaHQ6LjVlbX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGdtID0gcmVxdWlyZShcIi4vZ21cIik7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKGNvbmZpZ0tleSwgY29uZmlnRGVmYXVsdCkge1xyXG5cdGxldCBjb25maWcgPSBudWxsO1xyXG5cdGxldCBjb25maWdHZXRQcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGxvYWRDb25maWcoKSB7XHJcblx0XHRjb25zdCBjb25maWdTdHJpbmcgPSBhd2FpdCBnbS5nZXRWYWx1ZShjb25maWdLZXksIG51bGwpO1xyXG5cdFx0aWYgKHR5cGVvZihjb25maWdTdHJpbmcpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgYyA9IEpTT04ucGFyc2UoY29uZmlnU3RyaW5nKTtcclxuXHRcdFx0XHRpZiAoYyAhPT0gbnVsbCAmJiB0eXBlb2YoYykgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoYykpIHtcclxuXHRcdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb25maWdEZWZhdWx0LCBjKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRGVmYXVsdCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXQoKSB7XHJcblx0XHRpZiAoY29uZmlnICE9PSBudWxsKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoY29uZmlnKTsgfVxyXG5cclxuXHRcdGlmIChjb25maWdHZXRQcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdGNvbmZpZ0dldFByb21pc2UgPSBsb2FkQ29uZmlnKCkudGhlbigodikgPT4gY29uZmlnID0gdik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbmZpZ0dldFByb21pc2U7XHJcblx0fVxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBzYXZlKCkge1xyXG5cdFx0aWYgKGNvbmZpZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRhd2FpdCBnbS5zZXRWYWx1ZShjb25maWdLZXksIEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgXCJcIikpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gYmluZElucHV0KG5vZGUsIHNldHRpbmdOYW1lLCBvcHRpb25zLCB2YWx1ZU5hbWUpIHtcclxuXHRcdGNvbnN0IGMgPSBhd2FpdCBnZXQoKTtcclxuXHJcblx0XHRpZiAodHlwZW9mKHZhbHVlTmFtZSkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuXHRcdFx0dmFsdWVOYW1lID0gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB1cGRhdGVJbnB1dCA9ICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKGNbc2V0dGluZ05hbWVdLCBvcHRpb25zLCB0cnVlKTtcclxuXHRcdFx0aWYgKHZhbGlkKSB7IG5vZGVbdmFsdWVOYW1lXSA9IHZhbHVlOyB9XHJcblx0XHR9O1xyXG5cclxuXHRcdHVwZGF0ZUlucHV0KCk7XHJcblxyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuXHRcdFx0Y29uc3Qge3ZhbHVlLCB2YWxpZH0gPSBjb252ZXJ0VG9UeXBlKG5vZGVbdmFsdWVOYW1lXSwgb3B0aW9ucywgZmFsc2UpO1xyXG5cdFx0XHRpZiAodmFsaWQpIHtcclxuXHRcdFx0XHRjW3NldHRpbmdOYW1lXSA9IHZhbHVlO1xyXG5cdFx0XHRcdHNhdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dXBkYXRlSW5wdXQoKTtcclxuXHRcdH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0LFxyXG5cdFx0c2F2ZSxcclxuXHRcdGJpbmRJbnB1dFxyXG5cdH07XHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0VHlwZUNvbnZlcnRPcHRpb25zID0ge307XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlTmFtZShub2RlKSB7XHJcblx0c3dpdGNoIChub2RlLnRhZ05hbWUpIHtcclxuXHRcdGNhc2UgXCJJTlBVVFwiOlxyXG5cdFx0XHRpZiAobm9kZS50eXBlID09PSBcImNoZWNrYm94XCIpIHsgcmV0dXJuIFwiY2hlY2tlZFwiOyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFwidmFsdWVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVHlwZSh2YWx1ZSwgb3B0aW9ucywgdG9JbnB1dCkge1xyXG5cdGlmICh0eXBlb2Yob3B0aW9ucykgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucywgZGVmYXVsdFR5cGVDb252ZXJ0T3B0aW9ucywgdG9JbnB1dCk7XHJcblx0fSBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiB0eXBlb2Yob3B0aW9ucykgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mKG9wdGlvbnMudHlwZSkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdHJldHVybiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgb3B0aW9ucy50eXBlLCBvcHRpb25zLCB0b0lucHV0KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHsgdmFsdWUsIHZhbGlkOiB0cnVlIH07XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9UeXBlTm9ybWFsaXplZCh2YWx1ZSwgdHlwZU5hbWUsIG9wdGlvbnMsIHRvSW5wdXQpIHtcclxuXHRsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuXHQvLyBDb252ZXJ0XHJcblx0c3dpdGNoICh0eXBlTmFtZSkge1xyXG5cdFx0Y2FzZSBcImJvb2xlYW5cIjpcclxuXHRcdFx0dmFsdWUgPSAhIXZhbHVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJpbnRlZ2VyXCI6XHJcblx0XHRjYXNlIFwibnVtYmVyXCI6XHJcblx0XHRcdHZhbHVlID0gKHR5cGVOYW1lID09PSBcIm51bWJlclwiID8gcGFyc2VGbG9hdChgJHt2YWx1ZX1gKSA6IHBhcnNlSW50KGAke3ZhbHVlfWAsIDEwKSk7XHJcblx0XHRcdGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xyXG5cdFx0XHRcdHZhbHVlID0gMDtcclxuXHRcdFx0XHR2YWxpZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0Ly8gVHJhbnNmb3JtXHJcblx0aWYgKCF0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLmlucHV0VG9WYWx1ZSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLmlucHV0VG9WYWx1ZSh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyBMaW1pdHNcclxuXHRzd2l0Y2ggKHR5cGVOYW1lKSB7XHJcblx0XHRjYXNlIFwiaW50ZWdlclwiOlxyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWluKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZSA8IG9wdGlvbnMubWluKSB7IHZhbHVlID0gb3B0aW9ucy5taW47IH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1heCkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPiBvcHRpb25zLm1heCkgeyB2YWx1ZSA9IG9wdGlvbnMubWF4OyB9XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMubWF4TGVuZ3RoKSA9PT0gXCJudW1iZXJcIiAmJiB2YWx1ZS5sZW5ndGggPiBvcHRpb25zLm1heExlbmd0aCkge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUuc3Vic3RyKDAsIG9wdGlvbnMubWF4TGVuZ3RoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIFRyYW5zZm9ybVxyXG5cdGlmICh0b0lucHV0ICYmIHR5cGVvZihvcHRpb25zLnZhbHVlVG9JbnB1dCkgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0dmFsdWUgPSBvcHRpb25zLnZhbHVlVG9JbnB1dCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyB2YWx1ZSwgdmFsaWQgfTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGNyZWF0ZVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvUHJvbWlzZShmbiwgc2VsZikge1xyXG5cdHJldHVybiAoLi4uYXJncykgPT4ge1xyXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRyZXNvbHZlKGZuLmFwcGx5KHNlbGYsIGFyZ3MpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJlamVjdChlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxufVxyXG5cclxuY29uc3QgZ20gPSAoKG9iamVjdHMpID0+IHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgdiA9IEdNOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHRcdGlmICh2ICE9PSBudWxsICYmIHR5cGVvZih2KSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRyZXR1cm4gdjtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRpZiAob2JqLkdNICE9PSBudWxsICYmIHR5cGVvZihvYmouR00pID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9iai5HTTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjYXRjaCAoZSkgeyB9XHJcblxyXG5cdGNvbnN0IG1hcHBpbmcgPSBbXHJcblx0XHRbIFwiZ2V0VmFsdWVcIiwgXCJHTV9nZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwic2V0VmFsdWVcIiwgXCJHTV9zZXRWYWx1ZVwiIF0sXHJcblx0XHRbIFwiZGVsZXRlVmFsdWVcIiwgXCJHTV9kZWxldGVWYWx1ZVwiIF0sXHJcblx0XHRbIFwieG1sSHR0cFJlcXVlc3RcIiwgXCJHTV94bWxodHRwUmVxdWVzdFwiIF1cclxuXHRdO1xyXG5cclxuXHRjb25zdCByZXN1bHQgPSB7fTtcclxuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBtYXBwaW5nKSB7XHJcblx0XHRsZXQgcHJvbWlzZSA9IG51bGw7XHJcblx0XHRmb3IgKGNvbnN0IG9iaiBvZiBvYmplY3RzKSB7XHJcblx0XHRcdGNvbnN0IGZuID0gb2JqW3ZhbHVlXTtcclxuXHRcdFx0aWYgKHR5cGVvZihmbikgPT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0XHRcdHByb21pc2UgPSB0b1Byb21pc2UoZm4sIG9iaik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChwcm9taXNlID09PSBudWxsKSB7XHJcblx0XHRcdHByb21pc2UgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiByZWplY3QobmV3IEVycm9yKGBOb3Qgc3VwcG9ydGVkICgke2tleX0pYCkpKTtcclxuXHRcdH1cclxuXHRcdHJlc3VsdFtrZXldID0gcHJvbWlzZTtcclxuXHR9XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufSkuY2FsbCh0aGlzLCBbdGhpcywgd2luZG93XSk7IC8vIGpzaGludCBpZ25vcmU6bGluZVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ207XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IGlzUmVhZHlWYWx1ZSA9IGZhbHNlO1xyXG5sZXQgY2FsbGJhY2tzID0gbnVsbDtcclxubGV0IGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcbmNvbnN0IGNoZWNrSW50ZXJ2YWxSYXRlID0gMjUwO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGlzSG9va2VkKCkge1xyXG5cdHJldHVybiBjYWxsYmFja3MgIT09IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhvb2soKSB7XHJcblx0Y2FsbGJhY2tzID0gW107XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBzZXRJbnRlcnZhbChjaGVja0lmUmVhZHksIGNoZWNrSW50ZXJ2YWxSYXRlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdW5ob29rKCkge1xyXG5cdGNvbnN0IGNicyA9IGNhbGxiYWNrcztcclxuXHJcblx0Y2FsbGJhY2tzID0gbnVsbDtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNsZWFySW50ZXJ2YWwoY2hlY2tJbnRlcnZhbElkKTtcclxuXHRjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5cclxuXHRpbnZva2UoY2JzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrcykge1xyXG5cdGZvciAobGV0IGNiIG9mIGNhbGxiYWNrcykge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y2IoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoIChlKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlYWR5KCkge1xyXG5cdGlmIChpc1JlYWR5VmFsdWUpIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuXHRcdGlmIChpc0hvb2tlZCgpKSB7IHVuaG9vaygpOyB9XHJcblx0XHRpc1JlYWR5VmFsdWUgPSB0cnVlO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJZlJlYWR5KCkge1xyXG5cdGlzUmVhZHkoKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uUmVhZHkoY2FsbGJhY2spIHtcclxuXHRpZiAoaXNSZWFkeSgpKSB7XHJcblx0XHRjYWxsYmFjaygpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCFpc0hvb2tlZCgpKSB7IGhvb2soKTsgfVxyXG5cclxuXHRjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRvblJlYWR5OiBvblJlYWR5LFxyXG5cdGdldCBpc1JlYWR5KCkgeyByZXR1cm4gaXNSZWFkeSgpOyB9XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgY29uZmlnS2V5ID0gXCJ4LXNlYXJjaC1saW5rcy1jb25maWdcIjtcclxuY29uc3Qgc2VhcmNoVGFyZ2V0c0RlZmF1bHQgPSBbXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IE5hbWVcIixcclxuXHRcdHVybDogXCIvP2ZfY2F0cz0wJmZfc25hbWU9MSZmX3NlYXJjaD1cXFwie3Nob3J0LW5hbWV9XFxcIlwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IEZ1bGwgTmFtZVwiLFxyXG5cdFx0dXJsOiBcIi8/Zl9jYXRzPTAmZl9zbmFtZT0xJmZfc2VhcmNoPVxcXCJ7ZnVsbC1uYW1lfVxcXCJcIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlNlYXJjaCBieSBOYW1lIChuaGVudGFpLm5ldClcIixcclxuXHRcdHVybDogXCJodHRwczovL25oZW50YWkubmV0L3NlYXJjaC8/cT1cXFwie3Nob3J0LW5hbWV9XFxcIlwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IEZ1bGwgTmFtZSAobmhlbnRhaS5uZXQpXCIsXHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9uaGVudGFpLm5ldC9zZWFyY2gvP3E9XFxcIntmdWxsLW5hbWV9XFxcIlwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IE5hbWUgKGhpdG9taS5sYSlcIixcclxuXHRcdHVybDogXCJodHRwczovL2hpdG9taS5sYS9zZWFyY2guaHRtbD97c2hvcnQtbmFtZX1cIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlNlYXJjaCBieSBGdWxsIE5hbWUgKGNoYWlrYSlcIixcclxuXHRcdHVybDogXCJodHRwczovL3BhbmRhLmNoYWlrYS5tb2Uvc2VhcmNoLz9xc2VhcmNoPXtmdWxsLW5hbWV9XCIsXHJcblx0XHRlbmFibGVkOiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJTZWFyY2ggYnkgTmFtZSAoY2hhaWthKVwiLFxyXG5cdFx0dXJsOiBcImh0dHBzOi8vcGFuZGEuY2hhaWthLm1vZS9zZWFyY2gvP3FzZWFyY2g9e3Nob3J0LW5hbWV9XCIsXHJcblx0XHRlbmFibGVkOiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJTZWFyY2ggYnkgVVJMIChjaGFpa2EpXCIsXHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9wYW5kYS5jaGFpa2EubW9lL3NlYXJjaC8/cXNlYXJjaD17dXJsfVwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH1cclxuXTtcclxuY29uc3QgY29uZmlnRGVmYXVsdCA9IHtcclxuXHRzZWFyY2hUYXJnZXRzOiBnZXREZWZhdWx0U2VhcmNoVGFyZ2V0cygpXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXREZWZhdWx0U2VhcmNoVGFyZ2V0cygpIHtcclxuXHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZWFyY2hUYXJnZXRzRGVmYXVsdCwgbnVsbCwgXCJcIikpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9jb25maWdcIikuY3JlYXRlKGNvbmZpZ0tleSwgY29uZmlnRGVmYXVsdCk7XHJcbm1vZHVsZS5leHBvcnRzLmdldERlZmF1bHRTZWFyY2hUYXJnZXRzID0gZ2V0RGVmYXVsdFNlYXJjaFRhcmdldHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5jb25zdCBwYWdlVHlwZSA9IHJlcXVpcmUoXCIuLi9hcGkvcGFnZS10eXBlXCIpO1xyXG5jb25zdCBnYWxsZXJ5RGV0YWlscyA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1kZXRhaWxzXCIpO1xyXG5jb25zdCBQb3B1cE1lbnUgPSByZXF1aXJlKFwiLi4vYXBpL3BvcHVwLW1lbnVcIikuUG9wdXBNZW51O1xyXG5jb25zdCBzZXR0aW5ncyA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xyXG5cclxubGV0IG1lbnUgPSBudWxsO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldHVwR2FsbGVyeVBhZ2UoZ2QpIHtcclxuXHRjb25zdCBjb25maWcgPSBhd2FpdCByZXF1aXJlKFwiLi9jb25maWdcIikuZ2V0KCk7XHJcblx0Y29uc3Qgc2VhcmNoVGFyZ2V0cyA9IGNvbmZpZy5zZWFyY2hUYXJnZXRzO1xyXG5cdGlmICghQXJyYXkuaXNBcnJheShzZWFyY2hUYXJnZXRzKSB8fCBzZWFyY2hUYXJnZXRzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgbGluayA9IGdkLmFkZExpbmsoXCJDdXN0b20gU2VhcmNoXCIsIDApO1xyXG5cdGlmIChsaW5rID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gb25NZW51TGlua0NsaWNrKGUsIGxpbmssIHNlYXJjaFRhcmdldHMpLCBmYWxzZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTWVudUxpbmtDbGljayhlLCBub2RlLCBzZWFyY2hUYXJnZXRzKSB7XHJcblx0aWYgKG1lbnUgPT09IG51bGwpIHtcclxuXHRcdG1lbnUgPSBjcmVhdGVNZW51KHNlYXJjaFRhcmdldHMpO1xyXG5cdH1cclxuXHJcblx0aWYgKG1lbnUgIT09IG51bGwpIHtcclxuXHRcdG1lbnUuc2hvdyhub2RlLCBmYWxzZSwgbnVsbCk7XHJcblx0fVxyXG5cclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoc2VhcmNoVGFyZ2V0cykge1xyXG5cdGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuXHRmb3IgKGNvbnN0IHNlYXJjaFRhcmdldCBvZiBzZWFyY2hUYXJnZXRzKSB7XHJcblx0XHRpZiAoc2VhcmNoVGFyZ2V0LmVuYWJsZWQgPT09IGZhbHNlKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRvcHRpb25zLnB1c2goe1xyXG5cdFx0XHR0aXRsZTogc2VhcmNoVGFyZ2V0LnRpdGxlLFxyXG5cdFx0XHR1cmw6IHNlYXJjaFRhcmdldC51cmwsXHJcblx0XHRcdHRhcmdldDogXCJfYmxhbmtcIlxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZiAob3B0aW9ucy5sZW5ndGggPT09IDApIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZ2V0R2FsbGVyeUluZm9Gcm9tSHRtbCA9IHJlcXVpcmUoXCIuLi9hcGkvZ2FsbGVyeS1pbmZvL2dldC1mcm9tLWh0bWxcIik7XHJcblx0Y29uc3QgaW5mbyA9IGdldEdhbGxlcnlJbmZvRnJvbUh0bWwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblx0aWYgKGluZm8gPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcmVwbGFjZW1lbnRzID0gZ2V0R2FsbGVyeUluZm9SZXBsYWNlbWVudHMoaW5mbyk7XHJcblxyXG5cdGNvbnN0IG1lbnUgPSBuZXcgUG9wdXBNZW51KCk7XHJcblx0Zm9yIChjb25zdCBvcHRpb24gb2Ygb3B0aW9ucykge1xyXG5cdFx0b3B0aW9uLnVybCA9IGZvcm1hdFVybChvcHRpb24udXJsLCByZXBsYWNlbWVudHMpO1xyXG5cdFx0bWVudS5hZGRPcHRpb24ob3B0aW9uKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBtZW51O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsLCByZXBsYWNlbWVudHMpIHtcclxuXHRyZXR1cm4gdXJsLnJlcGxhY2UoL1xceyhbXlxcfV0qKVxcfS9nLCAobTAsIG0xKSA9PiB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcGxhY2VtZW50cywgbTEpID8gcmVwbGFjZW1lbnRzW20xXSA6IG0wO1xyXG5cdH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SW5mb1JlcGxhY2VtZW50cyhnYWxsZXJ5SW5mbykge1xyXG5cdHJldHVybiB7XHJcblx0XHRcInNob3J0LW5hbWVcIjogZW5jb2RlVVJJQ29tcG9uZW50KGdldFNob3J0VGl0bGUoZ2FsbGVyeUluZm8udGl0bGUpKSxcclxuXHRcdFwiZnVsbC1uYW1lXCI6IGVuY29kZVVSSUNvbXBvbmVudChnYWxsZXJ5SW5mby50aXRsZSksXHJcblx0XHRcInVybFwiOiBlbmNvZGVVUklDb21wb25lbnQoZ2V0R2FsbGVyeVVybChnYWxsZXJ5SW5mby5pZGVudGlmaWVyKSlcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTaG9ydFRpdGxlKHRpdGxlKSB7XHJcblx0Y29uc3QgcHJlZml4VGFncyA9IC9eXFxzKihcXCgoW15cXCldKj8pXFwpfFxcWyhbXlxcXV0qPylcXF18XFx7KFteXFx9XSo/KVxcfSlcXHMqL2k7XHJcblx0Y29uc3Qgc3VmZml4VGFncyA9IC9cXHMqKFxcKChbXlxcKV0qPykoPzpcXCl8JCl8XFxbKFteXFxdXSo/KSg/OlxcXXwkKXxcXHsoW15cXH1dKj8pKD86XFx9fCQpKVxccyokL2k7XHJcblxyXG5cdGxldCBtO1xyXG5cdHdoaWxlICgobSA9IHByZWZpeFRhZ3MuZXhlYyh0aXRsZSkpKSB7XHJcblx0XHR0aXRsZSA9IHRpdGxlLnN1YnN0cihtLmluZGV4ICsgbVswXS5sZW5ndGgpO1xyXG5cdH1cclxuXHR3aGlsZSAoKG0gPSBzdWZmaXhUYWdzLmV4ZWModGl0bGUpKSkge1xyXG5cdFx0dGl0bGUgPSB0aXRsZS5zdWJzdHIoMCwgbS5pbmRleCk7XHJcblx0fVxyXG5cdHJldHVybiB0aXRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVVybChpZCkge1xyXG5cdGNvbnN0IGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcclxuXHRyZXR1cm4gYCR7bG9jLnByb3RvY29sfS8vJHtsb2MuaG9zdH0vZy8ke2lkLmlkfS8ke2lkLnRva2VufS9gO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IFwieC1zZWFyY2gtbGlua3NcIjtcclxuXHRpZiAoc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcclxuXHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuXHRzZXR0aW5ncy5hZGRMaW5rKCk7XHJcblxyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdGlmIChjdXJyZW50UGFnZVR5cGUgPT09IFwic2V0dGluZ3NcIikge1xyXG5cdFx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cdFx0c2V0dGluZ3MuaW5pdGlhbGl6ZSgpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0KGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IGdkID0gYXdhaXQgZ2FsbGVyeURldGFpbHMud2FpdEZvcigpO1xyXG5cdFx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cdFx0c2V0dXBHYWxsZXJ5UGFnZShnZCk7XHJcblx0fSkoKTtcclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPlNlYXJjaCBUYXJnZXRzPC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uXFxcIj5cXHJcXG5cXHRcXHRcXHRMaXN0IG9mIHNlYXJjaCBzZWFyY2ggdGFyZ2V0cy5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyIHgtc2VhcmNoLWxpbmtzLXNlYXJjaC10YXJnZXQtY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXJvdyB4LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3dcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+T3JkZXI8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPlRpdGxlPC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5VUkw8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPkVuYWJsZWQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXJvdyB4LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWVudHJ5XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGwgeC1zZXR0aW5ncy1pbnB1dC1jZWxsLW5vd3JhcFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b24geC1zZWFyY2gtbGlua3MtcmVtb3ZlLWJ1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiJiN4MjcxNjtcXFwiIC8+PGlucHV0IGNsYXNzPVxcXCJ4LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b24geC1zZWFyY2gtbGlua3MtbW92ZS11cC1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIiYjeDI1QjI7XFxcIiAvPjxpbnB1dCBjbGFzcz1cXFwieC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uIHgtc2VhcmNoLWxpbmtzLW1vdmUtZG93bi1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIiYjeDI1QkM7XFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXQgeC1zZWFyY2gtbGlua3MtdGl0bGUtaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBkYXRhLXgtc2V0dGluZ3Mtb3B0aW9uPVxcXCJ0aXRsZVxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGwgeC1zZXR0aW5ncy1pbnB1dC1jZWxsLWZpbGxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0IHgtc2VhcmNoLWxpbmtzLXVybC1pbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiIGRhdGEteC1zZXR0aW5ncy1vcHRpb249XFxcInVybFxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGwgeC1zZXR0aW5ncy1pbnB1dC1jZWxsLW1pZGRsZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsPjxzcGFuIGNsYXNzPVxcXCJsY1xcXCI+PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXQgeC1zZWFyY2gtbGlua3MtZW5hYmxlZC1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImVuYWJsZWRcXFwiIC8+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtcm93IHgtc2VhcmNoLWxpbmtzLXNlYXJjaC10YXJnZXQtZW50cnlcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b24geC1zZWFyY2gtbGlua3MtYWRkLWJ1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiJiN4Mjc5NTsmI3hGRTBFO1xcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGwgeC1zZXR0aW5ncy1pbnB1dC1jZWxsLW1pZGRsZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIngtc2VhcmNoLWxpbmtzLXJlc2V0LWxpbmtcXFwiPlJlc2V0IHRvIGRlZmF1bHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHJlcXVpcmUoXCIuLi9hcGkvc2V0dGluZ3NcIik7XHJcblxyXG5sZXQgc2V0dGluZ3NDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZywgY29uZmlnVmFsdWUsIHRlbXBsYXRlLCBzZWFyY2hUYXJnZXRQYXJlbnQsIGFkZEJ1dHRvbiwgcmVzZXRCdXR0b24sIGhpZGVJZkVtcHR5Tm9kZSkge1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLmNvbmZpZ1ZhbHVlID0gY29uZmlnVmFsdWU7XHJcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldFBhcmVudCA9IHNlYXJjaFRhcmdldFBhcmVudDtcclxuXHRcdHRoaXMuYWRkQnV0dG9uID0gYWRkQnV0dG9uO1xyXG5cdFx0dGhpcy5yZXNldEJ1dHRvbiA9IHJlc2V0QnV0dG9uO1xyXG5cdFx0dGhpcy5oaWRlSWZFbXB0eU5vZGUgPSBoaWRlSWZFbXB0eU5vZGU7XHJcblxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzID0gW107XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzID0gW107XHJcblx0XHR0aGlzLnNldHVwU2VhcmNoVGFyZ2V0cygpO1xyXG5cclxuXHRcdHRoaXMuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmFkZFNlYXJjaFRhcmdldCgpLCBmYWxzZSk7XHJcblx0XHR0aGlzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnJlc2V0U2VhcmNoVGFyZ2V0cygpLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBhZGRTZWFyY2hUYXJnZXQoKSB7XHJcblx0XHRjb25zdCBzZWFyY2hUYXJnZXQgPSB7IHRpdGxlOiBcIlwiLCB1cmw6IFwiXCIsIGVuYWJsZWQ6IHRydWUgfTtcclxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5zZWFyY2hUYXJnZXRzLmxlbmd0aDtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0cy5wdXNoKHNlYXJjaFRhcmdldCk7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnB1c2gobmV3IFNldHRpbmdzU2VhcmNoVGFyZ2V0Q29udHJvbGxlcih0aGlzLCBzZWFyY2hUYXJnZXQsIGluZGV4KSk7XHJcblx0XHRpZiAoaW5kZXggPiAwKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzW2luZGV4IC0gMV07XHJcblx0XHRcdGlmIChjICE9PSBudWxsKSB7IGMudXBkYXRlSW5kZXgoYy5pbmRleCk7IH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnVwZGF0ZVNlYXJjaFRhcmdldENvdW50KCk7XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5zYXZlQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZXNldFNlYXJjaFRhcmdldHMoKSB7XHJcblx0XHR0aGlzLmNsZWFudXBTZWFyY2hUYXJnZXRzKCk7XHJcblxyXG5cdFx0dGhpcy5jb25maWdWYWx1ZS5zZWFyY2hUYXJnZXRzID0gdGhpcy5jb25maWcuZ2V0RGVmYXVsdFNlYXJjaFRhcmdldHMoKTtcclxuXHRcdGF3YWl0IHRoaXMuc2F2ZUNvbmZpZygpO1xyXG5cclxuXHRcdHRoaXMuc2V0dXBTZWFyY2hUYXJnZXRzKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhbnVwU2VhcmNoVGFyZ2V0cygpIHtcclxuXHRcdGZvciAoY29uc3Qgc2VhcmNoVGFyZ2V0Q29udHJvbGxlciBvZiB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzKSB7XHJcblx0XHRcdHNlYXJjaFRhcmdldENvbnRyb2xsZXIuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycyA9IFtdO1xyXG5cdH1cclxuXHJcblx0c2V0dXBTZWFyY2hUYXJnZXRzKCkge1xyXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHRoaXMuY29uZmlnVmFsdWUuc2VhcmNoVGFyZ2V0cykpIHtcclxuXHRcdFx0dGhpcy5jb25maWdWYWx1ZS5zZWFyY2hUYXJnZXRzID0gW107XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzID0gdGhpcy5jb25maWdWYWx1ZS5zZWFyY2hUYXJnZXRzO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycyA9IFtdO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwLCBpaSA9IHRoaXMuc2VhcmNoVGFyZ2V0cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRcdGNvbnN0IHNlYXJjaFRhcmdldCA9IHRoaXMuc2VhcmNoVGFyZ2V0c1tpXTtcclxuXHRcdFx0Y29uc3QgY29udHJvbGxlciA9IGlzT2JqZWN0KHNlYXJjaFRhcmdldCkgPyBuZXcgU2V0dGluZ3NTZWFyY2hUYXJnZXRDb250cm9sbGVyKHRoaXMsIHNlYXJjaFRhcmdldCwgaSkgOiBudWxsO1xyXG5cdFx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTZWFyY2hUYXJnZXRDb3VudCgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbW92ZShjb250cm9sbGVyLCBvZmZzZXQpIHtcclxuXHRcdGNvbnN0IGluZGV4T2xkID0gY29udHJvbGxlci5pbmRleDtcclxuXHRcdGNvbnN0IGluZGV4TmV3ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5sZW5ndGggLSAxLCBpbmRleE9sZCArIG9mZnNldCkpO1xyXG5cdFx0aWYgKGluZGV4TmV3ID09PSBpbmRleE9sZCkgeyByZXR1cm47IH1cclxuXHJcblx0XHRjb25zdCBzZWFyY2hUYXJnZXQgPSB0aGlzLnNlYXJjaFRhcmdldHNbaW5kZXhPbGRdO1xyXG5cclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0cy5zcGxpY2UoaW5kZXhPbGQsIDEpO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzLnNwbGljZShpbmRleE5ldywgMCwgc2VhcmNoVGFyZ2V0KTtcclxuXHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnNwbGljZShpbmRleE9sZCwgMSk7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnNwbGljZShpbmRleE5ldywgMCwgY29udHJvbGxlcik7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IE1hdGgubWluKGluZGV4T2xkLCBpbmRleE5ldyksIGlpID0gTWF0aC5tYXgoaW5kZXhPbGQsIGluZGV4TmV3KSArIDE7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzW2ldO1xyXG5cdFx0XHRpZiAoYyAhPT0gbnVsbCkgeyBjLnVwZGF0ZUluZGV4KGkpOyB9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG5leHQgPSBudWxsO1xyXG5cdFx0Zm9yIChsZXQgaSA9IGluZGV4TmV3ICsgMSwgaWkgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdFx0Y29uc3QgYyA9IHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnNbaV07XHJcblx0XHRcdGlmIChjICE9PSBudWxsKSB7XHJcblx0XHRcdFx0bmV4dCA9IGM7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobmV4dCAhPT0gbnVsbCAmJiBuZXh0LnJvdy5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcblx0XHRcdG5leHQucm93LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRyb2xsZXIucm93LCBuZXh0LnJvdyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNlYXJjaFRhcmdldFBhcmVudC5hcHBlbmRDaGlsZChjb250cm9sbGVyLnJvdyk7XHJcblx0XHR9XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5zYXZlQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZW1vdmUoY29udHJvbGxlcikge1xyXG5cdFx0Y29uc3QgaW5kZXggPSBjb250cm9sbGVyLmluZGV4O1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG5cdFx0Y29udHJvbGxlci5kZXN0cm95KCk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IE1hdGgubWF4KDAsIGluZGV4IC0gMSksIGlpID0gdGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzW2ldO1xyXG5cdFx0XHRpZiAoYyAhPT0gbnVsbCkgeyBjLnVwZGF0ZUluZGV4KGkpOyB9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTZWFyY2hUYXJnZXRDb3VudCgpO1xyXG5cclxuXHRcdGF3YWl0IHRoaXMuc2F2ZUNvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2VhcmNoVGFyZ2V0Q291bnQoKSB7XHJcblx0XHRpZiAodGhpcy5oaWRlSWZFbXB0eU5vZGUgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLmhpZGVJZkVtcHR5Tm9kZS5zdHlsZS5kaXNwbGF5ID0gKHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMubGVuZ3RoID4gMCA/IFwiXCIgOiBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlQ29uZmlnKCkge1xyXG5cdFx0dGhpcy5jb25maWcuc2F2ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NTZWFyY2hUYXJnZXRDb250cm9sbGVyIHtcclxuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIHNlYXJjaFRhcmdldCwgaW5kZXgpIHtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXQgPSBzZWFyY2hUYXJnZXQ7XHJcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XHJcblxyXG5cdFx0dGhpcy5ob29rZWRFdmVudHMgPSBbXTtcclxuXHRcdHRoaXMucm93ID0gdGhpcy5wYXJlbnQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0dGhpcy5wYXJlbnQuc2VhcmNoVGFyZ2V0UGFyZW50LmFwcGVuZENoaWxkKHRoaXMucm93KTtcclxuXHJcblx0XHR0aGlzLnJlbW92ZUJ1dHRvbiA9IHRoaXMucm93LnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtcmVtb3ZlLWJ1dHRvblwiKTtcclxuXHRcdHRoaXMubW92ZVVwQnV0dG9uID0gdGhpcy5yb3cucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1tb3ZlLXVwLWJ1dHRvblwiKTtcclxuXHRcdHRoaXMubW92ZURvd25CdXR0b24gPSB0aGlzLnJvdy5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLW1vdmUtZG93bi1idXR0b25cIik7XHJcblx0XHR0aGlzLnRpdGxlRmllbGQgPSB0aGlzLnJvdy5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLXRpdGxlLWlucHV0XCIpO1xyXG5cdFx0dGhpcy51cmxGaWVsZCA9IHRoaXMucm93LnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtdXJsLWlucHV0XCIpO1xyXG5cdFx0dGhpcy5lbmFibGVkQ2hlY2tib3ggPSB0aGlzLnJvdy5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLWVuYWJsZWQtaW5wdXRcIik7XHJcblxyXG5cdFx0dGhpcy50aXRsZUZpZWxkLnZhbHVlID0gKHR5cGVvZihzZWFyY2hUYXJnZXQudGl0bGUpID09PSBcInN0cmluZ1wiID8gc2VhcmNoVGFyZ2V0LnRpdGxlIDogXCJcIik7XHJcblx0XHR0aGlzLnVybEZpZWxkLnZhbHVlID0gKHR5cGVvZihzZWFyY2hUYXJnZXQudXJsKSA9PT0gXCJzdHJpbmdcIiA/IHNlYXJjaFRhcmdldC51cmwgOiBcIlwiKTtcclxuXHRcdHRoaXMuZW5hYmxlZENoZWNrYm94LmNoZWNrZWQgPSAhIXNlYXJjaFRhcmdldC5lbmFibGVkO1xyXG5cclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5faG9vayh0aGlzLnJlbW92ZUJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLnJlbW92ZSgpKTtcclxuXHRcdHRoaXMuX2hvb2sodGhpcy5tb3ZlVXBCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5tb3ZlVXAoKSk7XHJcblx0XHR0aGlzLl9ob29rKHRoaXMubW92ZURvd25CdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5tb3ZlRG93bigpKTtcclxuXHRcdHRoaXMuX2hvb2sodGhpcy50aXRsZUZpZWxkLCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7IHNlbGYuc2V0VGl0bGUodGhpcy52YWx1ZSk7IH0pO1xyXG5cdFx0dGhpcy5faG9vayh0aGlzLnVybEZpZWxkLCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7IHNlbGYuc2V0VXJsKHRoaXMudmFsdWUpOyB9KTtcclxuXHRcdHRoaXMuX2hvb2sodGhpcy5lbmFibGVkQ2hlY2tib3gsIFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgc2VsZi5zZXRFbmFibGVkKHRoaXMuY2hlY2tlZCk7IH0pO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlSW5kZXgoaW5kZXgpO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnJvdyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0XHRmb3IgKGNvbnN0IGluZm8gb2YgdGhpcy5ob29rZWRFdmVudHMpIHtcclxuXHRcdFx0aW5mby5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoaW5mby5ldmVudCwgaW5mby5jYWxsYmFjaywgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ob29rZWRFdmVudHMgPSBbXTtcclxuXHJcblx0XHR0aGlzLnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucm93KTtcclxuXHRcdHRoaXMucm93ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHJlbW92ZSgpIHtcclxuXHRcdHRoaXMucGFyZW50LnJlbW92ZSh0aGlzKTtcclxuXHR9XHJcblxyXG5cdG1vdmVVcCgpIHtcclxuXHRcdHRoaXMucGFyZW50Lm1vdmUodGhpcywgLTEpO1xyXG5cdH1cclxuXHJcblx0bW92ZURvd24oKSB7XHJcblx0XHR0aGlzLnBhcmVudC5tb3ZlKHRoaXMsIDEpO1xyXG5cdH1cclxuXHJcblx0c2V0VGl0bGUodmFsdWUpIHtcclxuXHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSBcInN0cmluZ1wiKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXQudGl0bGUgPSB2YWx1ZTtcclxuXHRcdHRoaXMucGFyZW50LnNhdmVDb25maWcoKTtcclxuXHR9XHJcblxyXG5cdHNldFVybCh2YWx1ZSkge1xyXG5cdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldC51cmwgPSB2YWx1ZTtcclxuXHRcdHRoaXMucGFyZW50LnNhdmVDb25maWcoKTtcclxuXHR9XHJcblxyXG5cdHNldEVuYWJsZWQodmFsdWUpIHtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0LmVuYWJsZWQgPSAhIXZhbHVlO1xyXG5cdFx0dGhpcy5wYXJlbnQuc2F2ZUNvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSW5kZXgoaW5kZXgpIHtcclxuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHRcdHRoaXMubW92ZVVwQnV0dG9uLmRpc2FibGVkID0gKGluZGV4IDw9IDApO1xyXG5cdFx0dGhpcy5tb3ZlRG93bkJ1dHRvbi5kaXNhYmxlZCA9IChpbmRleCA+PSB0aGlzLnBhcmVudC5zZWFyY2hUYXJnZXRzLmxlbmd0aCAtIDEpO1xyXG5cdH1cclxuXHJcblx0X2hvb2sobm9kZSwgZXZlbnQsIGNhbGxiYWNrKSB7XHJcblx0XHR0aGlzLmhvb2tlZEV2ZW50cy5wdXNoKHsgbm9kZSwgZXZlbnQsIGNhbGxiYWNrIH0pO1xyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgZmFsc2UpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHYpIHtcclxuXHRyZXR1cm4gKHYgIT09IG51bGwgJiYgdHlwZW9mKHYpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHYpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGluaygpIHtcclxuXHRzZXR0aW5ncy5hZGRMaW5rKCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0c2V0dGluZ3MuaW5pdGlhbGl6ZSgpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uID0gc2V0dGluZ3MuYWRkU2VjdGlvbihcIlNlYXJjaCBMaW5rc1wiLCBcInNlYXJjaC1saW5rc1wiLCAzKTtcclxuXHRpZiAoc2VjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xyXG5cdFx0Y29uc3QgY29uZmlnVmFsdWUgPSBhd2FpdCBjb25maWcuZ2V0KCk7XHJcblx0XHRzZXR1cFNldHRpbmdzKGNvbmZpZywgY29uZmlnVmFsdWUsIHNlY3Rpb24pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBTZXR0aW5ncyhjb25maWcsIGNvbmZpZ1ZhbHVlLCBjb250YWluZXIpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250cm9sbGVyICE9PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb250YWluZXIuaW5uZXJIVE1MID0gcmVxdWlyZShcIi4vc2V0dGluZ3MuaHRtbFwiKTtcclxuXHJcblx0Y29uc3QgdGVtcGxhdGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWVudHJ5XCIpO1xyXG5cdGNvbnN0IHBhcmVudCA9IHRlbXBsYXRlLnBhcmVudE5vZGU7XHJcblx0Y29uc3QgYWRkQnV0dG9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtYWRkLWJ1dHRvblwiKTtcclxuXHRjb25zdCByZXNldEJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLXJlc2V0LWxpbmtcIik7XHJcblx0Y29uc3QgaGlkZU5vZGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWNvbnRhaW5lclwiKTtcclxuXHRwYXJlbnQucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xyXG5cclxuXHRzZXR0aW5nc0NvbnRyb2xsZXIgPSBuZXcgU2V0dGluZ3NDb250cm9sbGVyKGNvbmZpZywgY29uZmlnVmFsdWUsIHRlbXBsYXRlLCBwYXJlbnQsIGFkZEJ1dHRvbiwgcmVzZXRCdXR0b24sIGhpZGVOb2RlKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmssXHJcblx0aW5pdGlhbGl6ZVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW5wdXQueC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uW3R5cGU9YnV0dG9uXXtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjA7cGFkZGluZzowO2xpbmUtaGVpZ2h0OjEuODc1ZW07Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjcwMDt3aWR0aDoxLjg3NWVtO2hlaWdodDoxLjg3NWVtO21pbi1oZWlnaHQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7dGV4dC1hbGlnbjpjZW50ZXI7Y3Vyc29yOnBvaW50ZXJ9OnJvb3QueC1pcy1kYXJrIGlucHV0Lngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvblt0eXBlPWJ1dHRvbl06ZGlzYWJsZWR7Y29sb3I6cmdiYSgyNDEsMjQxLDI0MSwuNSk7LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6cmdiYSgyNDEsMjQxLDI0MSwuNSl9OnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvblt0eXBlPWJ1dHRvbl17YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfWlucHV0Lngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9aW5wdXQueC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uW3R5cGU9YnV0dG9uXStpbnB1dC54LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b25bdHlwZT1idXR0b25de21hcmdpbi1sZWZ0Oi4yNWVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRdLngtc2VhcmNoLWxpbmtzLXVybC1pbnB1dHt3aWR0aDoxMDAlfS54LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWNvbnRhaW5lcnt3aWR0aDoxMDAlfS54LXNlYXJjaC1saW5rcy1yZXNldC1saW5re3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7Y3Vyc29yOnBvaW50ZXJ9Lngtc2VhcmNoLWxpbmtzLXJlc2V0LWxpbms6bm90KDpob3Zlcil7b3BhY2l0eTouNX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBhcGlTdHlsZSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0aWYgKGFwaVN0eWxlID09PSBudWxsKSB7IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vYXBpL3N0eWxlXCIpOyB9XHJcblx0YXBpU3R5bGUuc2V0RG9jdW1lbnREYXJrRmxhZygpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHhQcmVmaXggPSBcIiMheFwiO1xyXG5jb25zdCBzZXBhcmF0b3IgPSBcIi9cIjtcclxuY29uc3Qgcm91dGVzID0gW107XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXIoYWRkSGlzdG9yeSkge1xyXG5cdGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0aWYgKGFkZEhpc3RvcnkpIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShwYXRoKSB7XHJcblx0cmV0dXJuIHBhdGggPyBgJHt4UHJlZml4fSR7c2VwYXJhdG9yfSR7cGF0aH1gIDogeFByZWZpeDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Y29uc3Qgcm91dGUgPSB7IG1hdGNoLCBjYWxsYmFjayB9O1xyXG5cdHJvdXRlcy5wdXNoKHJvdXRlKTtcclxuXHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdH1cclxuXHR0ZXN0Um91dGVzKFtyb3V0ZV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRmb3IgKGxldCBpID0gMCwgaWkgPSByb3V0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0Y29uc3Qgcm91dGUgPSByb3V0ZXNbaV07XHJcblx0XHRpZiAocm91dGUubWF0Y2ggPT09IG1hdGNoICYmIHJvdXRlLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xyXG5cdFx0XHRyb3V0ZXMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRYRnJhZ21lbnQoKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0IWZyYWdtZW50IHx8XHJcblx0XHRmcmFnbWVudC5sZW5ndGggPCB4UHJlZml4Lmxlbmd0aCB8fFxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKDAsIHhQcmVmaXgubGVuZ3RoKSAhPT0geFByZWZpeCB8fFxyXG5cdFx0KGZyYWdtZW50Lmxlbmd0aCA+IHhQcmVmaXgubGVuZ3RoICYmIGZyYWdtZW50W3hQcmVmaXgubGVuZ3RoXSAhPT0gc2VwYXJhdG9yKSkgP1xyXG5cdFx0bnVsbCA6XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoeFByZWZpeC5sZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0Um91dGVzKHJvdXRlcykge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gZ2V0WEZyYWdtZW50KCk7XHJcblx0aWYgKGZyYWdtZW50ID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5tYXRjaC5leGVjKGZyYWdtZW50KTtcclxuXHRcdHJvdXRlLmNhbGxiYWNrKG1hdGNoLCBmcmFnbWVudCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblVybEZyYWdtZW50Q2hhbmdlZCgpIHtcclxuXHR0ZXN0Um91dGVzKHJvdXRlcyk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjbGVhcjogY2xlYXIsXHJcblx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0YWRkUm91dGU6IGFkZFJvdXRlLFxyXG5cdHJlbW92ZVJvdXRlOiByZW1vdmVSb3V0ZVxyXG59O1xyXG4iXX0=
