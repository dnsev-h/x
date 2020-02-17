// ==UserScript==
// @name        x/search-links
// @version     1.1.4
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
	const shortTitle = getShortTitle(galleryInfo.title);
	const shortTitleJP = getShortTitle(galleryInfo.titleOriginal);

	const m = /^([\w\W]*)\|([\w\W]*)$/.exec(shortTitle);
	return {
		"short-name-jp": encodeURIComponent(shortTitleJP),
		"short-name": encodeURIComponent(shortTitle),
		"short-name1": encodeURIComponent(m !== null ? m[1] : shortTitle),
		"short-name2": encodeURIComponent(m !== null ? m[2] : shortTitle),
		"full-name": encodeURIComponent(galleryInfo.title),
		"full-name-jp": encodeURIComponent(galleryInfo.titleOriginal),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktZGV0YWlscy5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pZGVudGlmaWVyLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vZ2V0LWZyb20taHRtbC5qcyIsInNyYy9hcGkvZ2FsbGVyeS1pbmZvL3R5cGVzLmpzIiwic3JjL2FwaS9nYWxsZXJ5LWluZm8vdXRpbHMuanMiLCJzcmMvYXBpL25hdmlnYXRpb24tYmFyLmpzIiwic3JjL2FwaS9wYWdlLXR5cGUuanMiLCJzcmMvYXBpL3BvcHVwLW1lbnUuanMiLCJzcmMvYXBpL3NldHRpbmdzLmpzIiwic3JjL2FwaS9zdHlsZS5qcyIsInNyYy9hcGkvc3R5bGUvZ2FsbGVyeS1kZXRhaWxzLmNzcyIsInNyYy9hcGkvc3R5bGUvcG9wdXAtbWVudS5jc3MiLCJzcmMvYXBpL3N0eWxlL3NldHRpbmdzLmNzcyIsInNyYy9jb25maWcuanMiLCJzcmMvZ20uanMiLCJzcmMvcmVhZHkuanMiLCJzcmMvc2VhcmNoLWxpbmtzL2NvbmZpZy5qcyIsInNyYy9zZWFyY2gtbGlua3MvbWFpbi5qcyIsInNyYy9zZWFyY2gtbGlua3Mvc2V0dGluZ3MuaHRtbCIsInNyYy9zZWFyY2gtbGlua3Mvc2V0dGluZ3MuanMiLCJzcmMvc2VhcmNoLWxpbmtzL3N0eWxlLmNzcyIsInNyYy9zdHlsZS5qcyIsInNyYy91cmwtZnJhZ21lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaktBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZJQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyUUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5jb25zdCBnYWxsZXJ5RGV0YWlsc1N0eWxlc2hlZXRJZCA9IFwieC1nYWxsZXJ5LWRldGFpbHMtc3R5bGVcIjtcclxuY29uc3QgZ2FsbGVyeURldGFpbHNDb250YWluZXJJZCA9IFwieC1nYWxsZXJ5LWRldGFpbHNcIjtcclxuY29uc3QgZ2FsbGVyeURldGFpbHNMaW5rc0NvbnRhaW5lckNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWRldGFpbHMtbGlua3NcIjtcclxuY29uc3QgZ2FsbGVyeURldGFpbHNDb250ZW50Q29udGFpbmVyQ2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlscy1jb250ZW50LWNvbnRhaW5lclwiO1xyXG5cclxubGV0IGdhbGxlcnlEZXRhaWxzSW5zdGFuY2UgPSBudWxsO1xyXG5sZXQgd2FpdEZvckdhbGxlcnlEZXRhaWxzUHJvbWlzZSA9IG51bGw7XHJcblxyXG5cclxuY2xhc3MgR2FsbGVyeURldGFpbHMge1xyXG5cdGNvbnN0cnVjdG9yKGNvbnRhaW5lck5vZGUpIHtcclxuXHRcdHRoaXMuY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lck5vZGU7XHJcblx0XHR0aGlzLmxpbmtzQ29udGFpbmVyID0gY29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKGAuJHtnYWxsZXJ5RGV0YWlsc0xpbmtzQ29udGFpbmVyQ2xhc3NOYW1lfWApO1xyXG5cdFx0dGhpcy5jb250ZW50Q29udGFpbmVyID0gY29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKGAuJHtnYWxsZXJ5RGV0YWlsc0NvbnRlbnRDb250YWluZXJDbGFzc05hbWV9YCk7XHJcblx0fVxyXG5cclxuXHRhZGRMaW5rKHRpdGxlLCBvcmRlcikge1xyXG5cdFx0aWYgKHRoaXMubGlua3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBuMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cdFx0bjAuY2xhc3NOYW1lID0gXCJ4LWdhbGxlcnktZGV0YWlscy1saW5rLWNvbnRhaW5lclwiO1xyXG5cdFx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0bjAuc3R5bGUub3JkZXIgPSBgJHtNYXRoLnJvdW5kKG9yZGVyKX1gO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblx0XHRuMS5jbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLWxpbmtcIjtcclxuXHRcdG4xLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG5cdFx0bjAuYXBwZW5kQ2hpbGQobjEpO1xyXG5cclxuXHRcdHRoaXMubGlua3NDb250YWluZXIuYXBwZW5kQ2hpbGQobjApO1xyXG5cdFx0cmV0dXJuIG4xO1xyXG5cdH1cclxuXHJcblx0YWRkQ29udGVudENvbnRhaW5lcihuYW1lLCBvcmRlcikge1xyXG5cdFx0aWYgKHRoaXMuY29udGVudENvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRcdGNvbnN0IG4wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdG4wLmNsYXNzTmFtZSA9IFwieC1nYWxsZXJ5LWRldGFpbHMtY29udGVudFwiO1xyXG5cdFx0aWYgKHR5cGVvZihuYW1lKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRuMC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXgtY29udGVudC1uYW1lXCIsIG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0bjAuc3R5bGUub3JkZXIgPSBgJHtNYXRoLnJvdW5kKG9yZGVyKX1gO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuMCk7XHJcblx0XHRyZXR1cm4gbjA7XHJcblx0fVxyXG5cclxuXHRnZXRDb250ZW50Q29udGFpbmVyKG5hbWUpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnRlbnRDb250YWluZXIgIT09IG51bGwgPyB0aGlzLmNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEteC1jb250ZW50LW5hbWU9XCIke25hbWV9XCJdYCkgOiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZpbmRQYXJlbnRXaXRoQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XHJcblx0aWYgKG5vZGUgIT09IG51bGwpIHtcclxuXHRcdHdoaWxlICgobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkgIT09IG51bGwpIHtcclxuXHRcdFx0aWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUluZm9Db250YWluZXIoKSB7XHJcblx0cmV0dXJuIGZpbmRQYXJlbnRXaXRoQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nbSBoMSNnblwiKSwgXCJnbVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR2FsbGVyeURldGFpbHNTdHlsZXNoZWV0KCkge1xyXG5cdGNvbnN0IGlkID0gZ2FsbGVyeURldGFpbHNTdHlsZXNoZWV0SWQ7XHJcblx0Y29uc3Qgc3R5bGUgPSByZXF1aXJlKFwiLi4vc3R5bGVcIik7XHJcblx0aWYgKCFzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkge1xyXG5cdFx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUvZ2FsbGVyeS1kZXRhaWxzLmNzc1wiKTtcclxuXHRcdHN0eWxlLmFkZFN0eWxlc2hlZXQoc3JjLCBpZCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHYWxsZXJ5RGV0YWlsc0h0bWwoKSB7XHJcblx0Y29uc3QgbjAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdG4wLmlkID0gZ2FsbGVyeURldGFpbHNDb250YWluZXJJZDtcclxuXHRuMC5jbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1kZXRhaWxzXCI7XHJcblxyXG5cdGNvbnN0IG4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRuMS5jbGFzc05hbWUgPSBcIngtZ2FsbGVyeS1kZXRhaWxzLWlubmVyXCI7XHJcblxyXG5cdGxldCBuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bjIuY2xhc3NOYW1lID0gZ2FsbGVyeURldGFpbHNMaW5rc0NvbnRhaW5lckNsYXNzTmFtZTtcclxuXHRuMS5hcHBlbmRDaGlsZChuMik7XHJcblxyXG5cdG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRuMi5jbGFzc05hbWUgPSBnYWxsZXJ5RGV0YWlsc0NvbnRlbnRDb250YWluZXJDbGFzc05hbWU7XHJcblx0bjEuYXBwZW5kQ2hpbGQobjIpO1xyXG5cclxuXHRuMC5hcHBlbmRDaGlsZChuMSk7XHJcblxyXG5cdHJldHVybiBuMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeURldGFpbHMoYWxsb3dDcmVhdGUpIHtcclxuXHRsZXQgbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdhbGxlcnlEZXRhaWxzQ29udGFpbmVySWQpO1xyXG5cdGlmIChuICE9PSBudWxsKSB7XHJcblx0XHRpZiAoZ2FsbGVyeURldGFpbHNJbnN0YW5jZSA9PT0gbnVsbCB8fCBnYWxsZXJ5RGV0YWlsc0luc3RhbmNlLmNvbnRhaW5lck5vZGUgIT09IG4pIHtcclxuXHRcdFx0Z2FsbGVyeURldGFpbHNJbnN0YW5jZSA9IG5ldyBHYWxsZXJ5RGV0YWlscyhuKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBnYWxsZXJ5RGV0YWlsc0luc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0aWYgKCFhbGxvd0NyZWF0ZSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBnYWxsZXJ5SW5mb0NvbnRhaW5lciA9IGdldEdhbGxlcnlJbmZvQ29udGFpbmVyKCk7XHJcblx0aWYgKGdhbGxlcnlJbmZvQ29udGFpbmVyID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNyZWF0ZUdhbGxlcnlEZXRhaWxzU3R5bGVzaGVldCgpO1xyXG5cdG4gPSBjcmVhdGVHYWxsZXJ5RGV0YWlsc0h0bWwoKTtcclxuXHJcblx0Z2FsbGVyeUluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobik7XHJcblxyXG5cdGdhbGxlcnlEZXRhaWxzSW5zdGFuY2UgPSBuZXcgR2FsbGVyeURldGFpbHMobik7XHJcblx0cmV0dXJuIGdhbGxlcnlEZXRhaWxzSW5zdGFuY2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdhaXRGb3JHYWxsZXJ5RGV0YWlscygpIHtcclxuXHRjb25zdCBnZCA9IGdldEdhbGxlcnlEZXRhaWxzKHRydWUpO1xyXG5cdGlmIChnZCAhPT0gbnVsbCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGdkKTsgfVxyXG5cclxuXHRpZiAod2FpdEZvckdhbGxlcnlEZXRhaWxzUHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0d2FpdEZvckdhbGxlcnlEZXRhaWxzUHJvbWlzZSA9IGNyZWF0ZVdhaXRGb3JHYWxsZXJ5RGV0YWlsc1Byb21pc2UoKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB3YWl0Rm9yR2FsbGVyeURldGFpbHNQcm9taXNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXYWl0Rm9yR2FsbGVyeURldGFpbHNQcm9taXNlKCkge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG5cdFx0Y29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGdkID0gZ2V0R2FsbGVyeURldGFpbHModHJ1ZSk7XHJcblx0XHRcdGlmIChnZCA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0XHRcdG1vLmRpc2Nvbm5lY3QoKTtcclxuXHRcdFx0d2FpdEZvckdhbGxlcnlEZXRhaWxzUHJvbWlzZSA9IG51bGw7XHJcblx0XHRcdHJlc29sdmUoZ2QpO1xyXG5cdFx0fSk7XHJcblx0XHRtby5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcclxuXHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxyXG5cdFx0XHRzdWJ0cmVlOiB0cnVlXHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldDogZ2V0R2FsbGVyeURldGFpbHMsXHJcblx0d2FpdEZvcjogd2FpdEZvckdhbGxlcnlEZXRhaWxzXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgR2FsbGVyeUlkZW50aWZpZXIge1xyXG5cdGNvbnN0cnVjdG9yKGlkLCB0b2tlbikge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy50b2tlbiA9IHRva2VuO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZUZyb21VcmwodXJsKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC8uZXhlYyh1cmwpO1xyXG5cdFx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgcGF0aCA9IG1hdGNoWzFdLnJlcGxhY2UoL15cXC8rfFxcLyskL2csIFwiXCIpLnJlcGxhY2UoL1xcL3syLH0vZywgXCIvXCIpLnNwbGl0KFwiL1wiKTtcclxuXHRcdGlmIChwYXRoWzBdICE9PSBcImdcIiB8fCBwYXRoLmxlbmd0aCA8IDMpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBpZCA9IHBhcnNlSW50KHBhdGhbMV0sIDEwKTtcclxuXHRcdHJldHVybiAoTnVtYmVyLmlzTmFOKGlkKSA/IG51bGwgOiBuZXcgR2FsbGVyeUlkZW50aWZpZXIoaWQsIHBhdGhbMl0pKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRHYWxsZXJ5SWRlbnRpZmllclxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHR5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XHJcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q3NzVXJsKHVybFN0cmluZykge1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvdXJsXFxzKlxcKFxccyooWydcIl0pPy87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModXJsU3RyaW5nKTtcclxuXHRpZiAobWF0Y2ggPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcXVvdGUgPSBtYXRjaFsxXSB8fCBcIlwiO1xyXG5cdHVybFN0cmluZyA9IHVybFN0cmluZy5zdWJzdHIobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggLSBxdW90ZS5sZW5ndGgpO1xyXG5cclxuXHRjb25zdCBwYXR0ZXJuMiA9IG5ldyBSZWdFeHAoYCgke3F1b3RlfSlcXFxccypcXFxcKVxcXFxzKiRgKTtcclxuXHRjb25zdCBtYXRjaDIgPSBwYXR0ZXJuMi5leGVjKHVybFN0cmluZyk7XHJcblx0aWYgKG1hdGNoMiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCB1cmwgPSB1cmxTdHJpbmcuc3Vic3RyKDAsIG1hdGNoMi5pbmRleCArIG1hdGNoMlsxXS5sZW5ndGgpO1xyXG5cclxuXHRsZXQgdXJsMiA9IHVybDtcclxuXHRpZiAoIXF1b3RlKSB7XHJcblx0XHR1cmwyID0gdXJsLnJlcGxhY2UoL1wiL2csIFwiXFxcXFxcXCJcIik7XHJcblx0XHR1cmwyID0gYFwiJHt1cmwyfVwiYDtcclxuXHR9IGVsc2UgaWYgKHF1b3RlID09PSBcIidcIikge1xyXG5cdFx0dXJsMiA9IHVybC5zdWJzdHIoMSwgdXJsLmxlbmd0aCAtIDIpO1xyXG5cdFx0dXJsMiA9IHVybDIucmVwbGFjZSgvXFxcXCcvZywgXCInXCIpO1xyXG5cdFx0dXJsMiA9IGBcIiR7dXJsMn1cImA7XHJcblx0fVxyXG5cclxuXHR0cnkge1xyXG5cdFx0cmV0dXJuIEpTT04ucGFyc2UodXJsMik7XHJcblx0fSBjYXRjaCAoZSkge1xyXG5cdFx0cmV0dXJuIHVybDtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWVzdGFtcCh0ZXh0KSB7XHJcblx0Y29uc3QgbWF0Y2ggPSAvKFswLTldKyktKFswLTldKyktKFswLTldKylcXHMrKFswLTldKyk6KFswLTldKykvLmV4ZWModGV4dCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdHJldHVybiBEYXRlLlVUQyhcclxuXHRcdHBhcnNlSW50KG1hdGNoWzFdLCAxMCksIC8vIHllYXJcclxuXHRcdHBhcnNlSW50KG1hdGNoWzJdLCAxMCkgLSAxLCAvLyBtb250aFxyXG5cdFx0cGFyc2VJbnQobWF0Y2hbM10sIDEwKSwgLy8gZGF5XHJcblx0XHRwYXJzZUludChtYXRjaFs0XSwgMTApLCAvLyBob3Vyc1xyXG5cdFx0cGFyc2VJbnQobWF0Y2hbNV0sIDEwKSwgLy8gbWludXRlc1xyXG5cdFx0MCwgLy8gc2Vjb25kc1xyXG5cdFx0MCk7IC8vIG1pbGxpc2Vjb25kc1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0VGl0bGUoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjZ25cIik7XHJcblx0cmV0dXJuIChub2RlICE9PSBudWxsID8gbm9kZS50ZXh0Q29udGVudC50cmltKCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VGl0bGVPcmlnaW5hbChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnalwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBub2RlLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNYWluVGh1bWJuYWlsVXJsKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI2dkMT5kaXZcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0bGV0IHVybCA9IGdldENzc1VybChub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSk7XHJcblx0aWYgKHVybCAhPT0gbnVsbCkgeyByZXR1cm4gdXJsOyB9XHJcblxyXG5cdGNvbnN0IGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcihcImltZ1tzcmNdXCIpO1xyXG5cdHJldHVybiAoaW1nICE9PSBudWxsID8gaW1nLmdldEF0dHJpYnV0ZShcInNyY1wiKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDYXRlZ29yeShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZGM+ZGl2W29uY2xpY2tdXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvWydcIl0uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT9bJ1wiXS87XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS5nZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIpIHx8IFwiXCIpO1xyXG5cdHJldHVybiAobWF0Y2ggIT09IG51bGwgPyBtYXRjaFsxXSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcGxvYWRlcihodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNnZG4+YVwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL14uKj9cXC9cXC8uKz9cXC8oLio/KShcXD8uKj8pPygjLio/KT8kLztcclxuXHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIik7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IChtYXRjaFsxXS5zcGxpdChcIi9cIilbMV0gfHwgXCJcIikgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmF0aW5nQ291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoXCIjcmF0aW5nX2NvdW50XCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gcGFyc2VJbnQobm9kZS50ZXh0Q29udGVudC50cmltKCksIDEwKTtcclxuXHRyZXR1cm4gKE51bWJlci5pc05hTih2YWx1ZSkgPyBudWxsIDogdmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYXRpbmdBdmVyYWdlKGh0bWwpIHtcclxuXHRjb25zdCBub2RlID0gaHRtbC5xdWVyeVNlbGVjdG9yKFwiI3JhdGluZ19sYWJlbFwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL2F2ZXJhZ2U6XFxzKihbMC05XFwuXSspL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XHJcblx0cmV0dXJuIChOdW1iZXIuaXNOYU4odmFsdWUpID8gbnVsbCA6IHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmF2b3JpdGVDb3VudChodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNmYXZjb3VudFwiKTtcclxuXHRpZiAobm9kZSA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBwYXR0ZXJuID0gL1xccyooWzAtOV0rfG9uY2UpL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG1hdGNoMSA9IG1hdGNoWzFdO1xyXG5cdHJldHVybiAobWF0Y2gxLnRvTG93ZXJDYXNlKCkgPT09IFwib25jZVwiID8gMSA6IHBhcnNlSW50KG1hdGNoMSwgMTApKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RmF2b3JpdGVDYXRlZ29yeShodG1sKSB7XHJcblx0Y29uc3Qgbm9kZSA9IGh0bWwucXVlcnlTZWxlY3RvcihcIiNmYXY+ZGl2LmlcIik7XHJcblx0aWYgKG5vZGUgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgdGl0bGUgPSBub2RlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpIHx8IFwiXCI7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9iYWNrZ3JvdW5kLXBvc2l0aW9uXFxzKjpcXHMqXFxkKyg/OnB4KT9cXHMrKC0/XFxkKykoPzpweCkvO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIik7XHJcblx0Y29uc3QgaW5kZXggPSAobWF0Y2ggIT09IG51bGwpID9cclxuXHRcdE1hdGguZmxvb3IoKE1hdGguYWJzKHBhcnNlSW50KG1hdGNoWzFdLCAxMCkpIC0gMikgLyAxOSkgOlxyXG5cdFx0LTE7XHJcblxyXG5cdHJldHVybiB7IGluZGV4LCB0aXRsZSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUaHVtYm5haWxTaXplKGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZG80Pi5ub3NlbFwiKTtcclxuXHRpZiAobm9kZXMubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxyXG5cdHJldHVybiAobm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhzXCIpID8gXCJub3JtYWxcIiA6IFwibGFyZ2VcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRodW1ibmFpbFJvd3MoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkbzI+Lm5vc2VsXCIpO1xyXG5cdGlmIChub2Rlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXHMqKFswLTldKykvO1xyXG5cdGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xyXG5cdFx0aWYgKG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGhzXCIpKSB7XHJcblx0XHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0XHRpZiAobWF0Y2ggIT09IG51bGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhZ3MoaHRtbCkge1xyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKC4rKTovO1xyXG5cdGNvbnN0IGdyb3VwcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiN0YWdsaXN0IHRyXCIpO1xyXG5cdGNvbnN0IHRhZ3MgPSB7fTtcclxuXHJcblx0Zm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcclxuXHRcdGNvbnN0IHRkcyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZFwiKTtcclxuXHRcdGlmICh0ZHMubGVuZ3RoID09PSAwKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGRzWzBdLnRleHRDb250ZW50KTtcclxuXHRcdGNvbnN0IG5hbWVzcGFjZSA9IChtYXRjaCAhPT0gbnVsbCA/IG1hdGNoWzFdLnRyaW0oKSA6IFwiXCIpO1xyXG5cclxuXHRcdGxldCBuYW1lc3BhY2VUYWdzO1xyXG5cdFx0aWYgKHRhZ3MuaGFzT3duUHJvcGVydHkobmFtZXNwYWNlKSkge1xyXG5cdFx0XHRuYW1lc3BhY2VUYWdzID0gdGFnc1tuYW1lc3BhY2VdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bmFtZXNwYWNlVGFncyA9IFtdO1xyXG5cdFx0XHR0YWdzW25hbWVzcGFjZV0gPSBuYW1lc3BhY2VUYWdzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHRhZ0RpdnMgPSB0ZHNbdGRzLmxlbmd0aCAtIDFdLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XHJcblx0XHRmb3IgKGNvbnN0IGRpdiBvZiB0YWdEaXZzKSB7XHJcblx0XHRcdGNvbnN0IGxpbmsgPSBkaXYucXVlcnlTZWxlY3RvcihcImFcIik7XHJcblx0XHRcdGlmIChsaW5rID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0XHRjb25zdCB0YWcgPSBsaW5rLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHRcdFx0bmFtZXNwYWNlVGFncy5wdXNoKHRhZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGFncztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGV0YWlsc05vZGVzKGh0bWwpIHtcclxuXHRyZXR1cm4gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkZCB0clwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0ZVVwbG9hZGVkKGRldGFpbHNOb2Rlcykge1xyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoIDw9IDApIHsgcmV0dXJuIG51bGw7IH1cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzBdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRyZXR1cm4gKG5vZGUgIT09IG51bGwgPyBnZXRUaW1lc3RhbXAobm9kZS50ZXh0Q29udGVudCkgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmlzaWJsZUluZm8oZGV0YWlsc05vZGVzKSB7XHJcblx0bGV0IHZpc2libGUgPSB0cnVlO1xyXG5cdGxldCB2aXNpYmxlUmVhc29uID0gbnVsbDtcclxuXHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPiAyKSB7XHJcblx0XHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzJdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0MlwiKTtcclxuXHRcdGlmIChub2RlICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IHBhdHRlcm4gPSAvbm9cXHMrXFwoKC4rPylcXCkvaTtcclxuXHRcdFx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0XHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0XHR2aXNpYmxlUmVhc29uID0gbWF0Y2hbMV0udHJpbSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyB2aXNpYmxlLCB2aXNpYmxlUmVhc29uIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExhbmd1YWdlSW5mbyhkZXRhaWxzTm9kZXMpIHtcclxuXHRsZXQgbGFuZ3VhZ2UgPSBudWxsO1xyXG5cdGxldCB0cmFuc2xhdGVkID0gZmFsc2U7XHJcblxyXG5cdGlmIChkZXRhaWxzTm9kZXMubGVuZ3RoID4gMykge1xyXG5cdFx0Y29uc3Qgbm9kZSA9IGRldGFpbHNOb2Rlc1szXS5xdWVyeVNlbGVjdG9yKFwiLmdkdDJcIik7XHJcblx0XHRpZiAobm9kZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCB0ZXh0Tm9kZSA9IG5vZGUuZmlyc3RDaGlsZDtcclxuXHRcdFx0aWYgKHRleHROb2RlICE9PSBudWxsICYmIHRleHROb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xyXG5cdFx0XHRcdGxhbmd1YWdlID0gdGV4dE5vZGUubm9kZVZhbHVlLnRyaW0oKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y29uc3QgdHJOb2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKFwiLmhhbHBcIik7XHJcblx0XHRcdHRyYW5zbGF0ZWQgPSAodHJOb2RlICE9PSBudWxsICYmIHRyTm9kZS50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gXCJ0clwiKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IGxhbmd1YWdlLCB0cmFuc2xhdGVkIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwcHJveGltYXRlVG90YWxGaWxlU2l6ZShkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSA0KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbNF0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKFswLTlcXC5dKylcXHMqKFxcdyspL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IHV0aWxzLmdldEJ5dGVzU2l6ZUZyb21MYWJlbChtYXRjaFsxXSwgbWF0Y2hbMl0pIDogbnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpbGVDb3VudChkZXRhaWxzTm9kZXMpIHtcclxuXHRpZiAoZGV0YWlsc05vZGVzLmxlbmd0aCA8PSA1KSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IG5vZGUgPSBkZXRhaWxzTm9kZXNbNV0ucXVlcnlTZWxlY3RvcihcIi5nZHQyXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHBhdHRlcm4gPSAvKFswLTksXSspXFxzKnBhZ2VzL2k7XHJcblx0Y29uc3QgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobm9kZS50ZXh0Q29udGVudCk7XHJcblx0cmV0dXJuIChtYXRjaCAhPT0gbnVsbCA/IHBhcnNlSW50KG1hdGNoWzFdLnJlcGxhY2UoLywvZywgXCJcIiksIDEwKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnQoZGV0YWlsc05vZGVzKSB7XHJcblx0aWYgKGRldGFpbHNOb2Rlcy5sZW5ndGggPD0gMSkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBub2RlID0gZGV0YWlsc05vZGVzWzFdLnF1ZXJ5U2VsZWN0b3IoXCIuZ2R0Mj5hXCIpO1xyXG5cdGlmIChub2RlID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGluZm8gPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRyZXR1cm4gKGluZm8gIT09IG51bGwgPyBpbmZvLmlkZW50aWZpZXIgOiBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TmV3ZXJWZXJzaW9ucyhodG1sKSB7XHJcblx0Y29uc3QgcmVzdWx0cyA9IFtdO1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2duZD5hXCIpO1xyXG5cclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IGluZm8gPSB1dGlscy5nZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSB8fCBcIlwiKTtcclxuXHRcdGlmIChpbmZvID09PSBudWxsKSB7IGNvbnRpbnVlOyB9XHJcblxyXG5cdFx0Y29uc3QgZ2FsbGVyeUluZm8gPSB7XHJcblx0XHRcdGlkZW50aWZpZXI6IGluZm8uaWRlbnRpZmllcixcclxuXHRcdFx0bmFtZTogbm9kZS50ZXh0Q29udGVudC50cmltKCksXHJcblx0XHRcdGRhdGVVcGxvYWRlZDogbnVsbFxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAobm9kZS5uZXh0U2libGluZyAhPT0gbnVsbCkge1xyXG5cdFx0XHRnYWxsZXJ5SW5mby5kYXRlVXBsb2FkZWQgPSBnZXRUaW1lc3RhbXAobm9kZS5uZXh0U2libGluZy50ZXh0Q29udGVudCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVzdWx0cy5wdXNoKGdhbGxlcnlJbmZvKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb3JyZW50Q291bnQoaHRtbCkge1xyXG5cdGNvbnN0IG5vZGVzID0gaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI2dkNSAuZzI+YVwiKTtcclxuXHRjb25zdCBwYXR0ZXJuID0gL1xcYnRvcnJlbnRcXHMrZG93bmxvYWRcXHMqXFwoXFxzKihcXGQrKVxccypcXCkvaTtcclxuXHRmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcclxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKG5vZGUudGV4dENvbnRlbnQpO1xyXG5cdFx0aWYgKG1hdGNoICE9PSBudWxsKSB7XHJcblx0XHRcdHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFyY2hpdmVyS2V5KGh0bWwpIHtcclxuXHRjb25zdCBub2RlcyA9IGh0bWwucXVlcnlTZWxlY3RvckFsbChcIiNnZDUgLmcyPmFcIik7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9cXGJhcmNoaXZlXFxzK2Rvd25sb2FkXFxiL2k7XHJcblx0Zm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhub2RlLnRleHRDb250ZW50KTtcclxuXHRcdGlmIChtYXRjaCAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBwYXR0ZXJuMiA9IC8mb3I9KFteJ1wiXSopWydcIl0vO1xyXG5cdFx0XHRjb25zdCBtYXRjaDIgPSBwYXR0ZXJuMi5leGVjKG5vZGUuZ2V0QXR0cmlidXRlKFwib25jbGlja1wiKSB8fCBcIlwiKTtcclxuXHRcdFx0cmV0dXJuIChtYXRjaDIgIT09IG51bGwgPyBtYXRjaDJbMV0gOiBudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUdhbGxlcnlJbmZvRnJvbUh0bWwoaW5mbywgaHRtbCkge1xyXG5cdC8vIEdlbmVyYWxcclxuXHRpbmZvLnRpdGxlID0gZ2V0VGl0bGUoaHRtbCk7XHJcblx0aW5mby50aXRsZU9yaWdpbmFsID0gZ2V0VGl0bGVPcmlnaW5hbChodG1sKTtcclxuXHRpbmZvLm1haW5UaHVtYm5haWxVcmwgPSBnZXRNYWluVGh1bWJuYWlsVXJsKGh0bWwpO1xyXG5cdGluZm8uY2F0ZWdvcnkgPSBnZXRDYXRlZ29yeShodG1sKTtcclxuXHRpbmZvLnVwbG9hZGVyID0gZ2V0VXBsb2FkZXIoaHRtbCk7XHJcblxyXG5cdGluZm8ucmF0aW5nQ291bnQgPSBnZXRSYXRpbmdDb3VudChodG1sKTtcclxuXHRpbmZvLnJhdGluZ0F2ZXJhZ2UgPSBnZXRSYXRpbmdBdmVyYWdlKGh0bWwpO1xyXG5cclxuXHRpbmZvLmZhdm9yaXRlQ291bnQgPSBnZXRGYXZvcml0ZUNvdW50KGh0bWwpO1xyXG5cdGluZm8uZmF2b3JpdGVDYXRlZ29yeSA9IGdldEZhdm9yaXRlQ2F0ZWdvcnkoaHRtbCk7XHJcblxyXG5cdGluZm8udGh1bWJuYWlsU2l6ZSA9IGdldFRodW1ibmFpbFNpemUoaHRtbCk7XHJcblx0aW5mby50aHVtYm5haWxSb3dzID0gZ2V0VGh1bWJuYWlsUm93cyhodG1sKTtcclxuXHJcblx0aW5mby5uZXdlclZlcnNpb25zID0gZ2V0TmV3ZXJWZXJzaW9ucyhodG1sKTtcclxuXHJcblx0aW5mby50b3JyZW50Q291bnQgPSBnZXRUb3JyZW50Q291bnQoaHRtbCk7XHJcblx0aW5mby5hcmNoaXZlcktleSA9IGdldEFyY2hpdmVyS2V5KGh0bWwpO1xyXG5cclxuXHQvLyBEZXRhaWxzXHJcblx0Y29uc3QgZGV0YWlsc05vZGVzID0gZ2V0RGV0YWlsc05vZGVzKGh0bWwpO1xyXG5cclxuXHRpbmZvLmRhdGVVcGxvYWRlZCA9IGdldERhdGVVcGxvYWRlZChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRpbmZvLnBhcmVudCA9IGdldFBhcmVudChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRjb25zdCB2aXNpYmxlSW5mbyA9IGdldFZpc2libGVJbmZvKGRldGFpbHNOb2Rlcyk7XHJcblx0aW5mby52aXNpYmxlID0gdmlzaWJsZUluZm8udmlzaWJsZTtcclxuXHRpbmZvLnZpc2libGVSZWFzb24gPSB2aXNpYmxlSW5mby52aXNpYmxlUmVhc29uO1xyXG5cclxuXHRjb25zdCBsYW5ndWFnZUluZm8gPSBnZXRMYW5ndWFnZUluZm8oZGV0YWlsc05vZGVzKTtcclxuXHRpbmZvLmxhbmd1YWdlID0gbGFuZ3VhZ2VJbmZvLmxhbmd1YWdlO1xyXG5cdGluZm8udHJhbnNsYXRlZCA9IGxhbmd1YWdlSW5mby50cmFuc2xhdGVkO1xyXG5cclxuXHRpbmZvLmFwcHJveGltYXRlVG90YWxGaWxlU2l6ZSA9IGdldEFwcHJveGltYXRlVG90YWxGaWxlU2l6ZShkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHRpbmZvLmZpbGVDb3VudCA9IGdldEZpbGVDb3VudChkZXRhaWxzTm9kZXMpO1xyXG5cclxuXHQvLyBUYWdzXHJcblx0aW5mby50YWdzID0gZ2V0VGFncyhodG1sKTtcclxuXHRpbmZvLnRhZ3NIYXZlTmFtZXNwYWNlID0gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RnJvbUh0bWwoaHRtbCwgdXJsKSB7XHJcblx0Y29uc3QgbGluayA9IGh0bWwucXVlcnlTZWxlY3RvcihcIi5wdHQgdGQucHRkcz5hW2hyZWZdLC5wdHQgdGQucHRkZD5hW2hyZWZdXCIpO1xyXG5cdGlmIChsaW5rID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGlkUGFnZSA9IHV0aWxzLmdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwobGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpIHx8IFwiXCIpO1xyXG5cdGlmIChpZFBhZ2UgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgaW5mbyA9IG5ldyB0eXBlcy5HYWxsZXJ5SW5mbygpO1xyXG5cdGluZm8uaWRlbnRpZmllciA9IGlkUGFnZS5pZGVudGlmaWVyO1xyXG5cdGluZm8uY3VycmVudFBhZ2UgPSBpZFBhZ2UucGFnZTtcclxuXHRpbmZvLnNvdXJjZSA9IFwiaHRtbFwiO1xyXG5cdHBvcHVsYXRlR2FsbGVyeUluZm9Gcm9tSHRtbChpbmZvLCBodG1sKTtcclxuXHRpbmZvLnNvdXJjZVNpdGUgPSB1dGlscy5nZXRTb3VyY2VTaXRlRnJvbVVybCh1cmwpO1xyXG5cdGluZm8uZGF0ZUdlbmVyYXRlZCA9IERhdGUubm93KCk7XHJcblx0cmV0dXJuIGluZm87XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdldEZyb21IdG1sO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IEdhbGxlcnlJZGVudGlmaWVyID0gcmVxdWlyZShcIi4uL2dhbGxlcnktaWRlbnRpZmllclwiKS5HYWxsZXJ5SWRlbnRpZmllcjtcclxuXHJcblxyXG5jbGFzcyBHYWxsZXJ5SW5mbyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmlkZW50aWZpZXIgPSBudWxsO1xyXG5cdFx0dGhpcy50aXRsZSA9IG51bGw7XHJcblx0XHR0aGlzLnRpdGxlT3JpZ2luYWwgPSBudWxsO1xyXG5cdFx0dGhpcy5kYXRlVXBsb2FkZWQgPSBudWxsO1xyXG5cdFx0dGhpcy5jYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLnVwbG9hZGVyID0gbnVsbDtcclxuXHRcdHRoaXMucmF0aW5nQXZlcmFnZSA9IG51bGw7XHJcblx0XHR0aGlzLnJhdGluZ0NvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMuZmF2b3JpdGVDYXRlZ29yeSA9IG51bGw7XHJcblx0XHR0aGlzLmZhdm9yaXRlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5tYWluVGh1bWJuYWlsVXJsID0gbnVsbDtcclxuXHRcdHRoaXMudGh1bWJuYWlsU2l6ZSA9IG51bGw7XHJcblx0XHR0aGlzLnRodW1ibmFpbFJvd3MgPSBudWxsO1xyXG5cdFx0dGhpcy5maWxlQ291bnQgPSBudWxsO1xyXG5cdFx0dGhpcy5hcHByb3hpbWF0ZVRvdGFsRmlsZVNpemUgPSBudWxsO1xyXG5cdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdHRoaXMudmlzaWJsZVJlYXNvbiA9IG51bGw7XHJcblx0XHR0aGlzLmxhbmd1YWdlID0gbnVsbDtcclxuXHRcdHRoaXMudHJhbnNsYXRlZCA9IG51bGw7XHJcblx0XHR0aGlzLmFyY2hpdmVyS2V5ID0gbnVsbDtcclxuXHRcdHRoaXMudG9ycmVudENvdW50ID0gbnVsbDtcclxuXHRcdHRoaXMudGFncyA9IG51bGw7XHJcblx0XHR0aGlzLnRhZ3NIYXZlTmFtZXNwYWNlID0gbnVsbDtcclxuXHRcdHRoaXMuY3VycmVudFBhZ2UgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5uZXdlclZlcnNpb25zID0gbnVsbDtcclxuXHRcdHRoaXMuc291cmNlID0gbnVsbDtcclxuXHRcdHRoaXMuc291cmNlU2l0ZSA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGVHZW5lcmF0ZWQgPSBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEdhbGxlcnlJZGVudGlmaWVyLFxyXG5cdEdhbGxlcnlJbmZvXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcclxuXHJcbmNvbnN0IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcyA9IFsgXCJiXCIsIFwia2JcIiwgXCJtYlwiLCBcImdiXCIgXTtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5UGFnZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgbWF0Y2ggPSAvXFw/KD86KHxbXFx3XFxXXSo/JilwPShbXFwrXFwtXT9cXGQrKSk/Ly5leGVjKHVybCk7XHJcblx0aWYgKG1hdGNoICE9PSBudWxsICYmIG1hdGNoWzFdKSB7XHJcblx0XHRjb25zdCBwYWdlID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcclxuXHRcdGlmICghTnVtYmVyLmlzTmFOKHBhZ2UpKSB7IHJldHVybiBwYWdlOyB9XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHYWxsZXJ5SWRlbnRpZmllckFuZFBhZ2VGcm9tVXJsKHVybCkge1xyXG5cdGNvbnN0IGlkZW50aWZpZXIgPSB0eXBlcy5HYWxsZXJ5SWRlbnRpZmllci5jcmVhdGVGcm9tVXJsKHVybCk7XHJcblx0aWYgKGlkZW50aWZpZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgcGFnZSA9IGdldEdhbGxlcnlQYWdlRnJvbVVybCh1cmwpO1xyXG5cdHJldHVybiB7IGlkZW50aWZpZXIsIHBhZ2UgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Qnl0ZXNTaXplRnJvbUxhYmVsKG51bWJlciwgbGFiZWwpIHtcclxuXHRsZXQgaSA9IHNpemVMYWJlbFRvQnl0ZXNQcmVmaXhlcy5pbmRleE9mKGxhYmVsLnRvTG93ZXJDYXNlKCkpO1xyXG5cdGlmIChpIDwgMCkgeyBpID0gMDsgfVxyXG5cdHJldHVybiBNYXRoLmZsb29yKHBhcnNlRmxvYXQobnVtYmVyKSAqIE1hdGgucG93KDEwMjQsIGkpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U291cmNlU2l0ZUZyb21VcmwodXJsKSB7XHJcblx0Y29uc3QgcGF0dGVybiA9IC9eKD86KD86W2Etel1bYS16MC05XFwrXFwtXFwuXSo6XFwvKnxcXC97Mix9KShbXlxcL10qKSk/KFxcLz9bXFx3XFxXXSopJC9pO1xyXG5cdGNvbnN0IG1hdGNoID0gcGF0dGVybi5leGVjKHVybCk7XHJcblxyXG5cdGlmIChtYXRjaCAhPT0gbnVsbCAmJiBtYXRjaFsxXSkge1xyXG5cdFx0Y29uc3QgaG9zdCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZXhoZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJleGhlbnRhaVwiOyB9XHJcblx0XHRpZiAoaG9zdC5pbmRleE9mKFwiZS1oZW50YWlcIikgPj0gMCkgeyByZXR1cm4gXCJlLWhlbnRhaVwiOyB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGdldEdhbGxlcnlJZGVudGlmaWVyQW5kUGFnZUZyb21VcmwsXHJcblx0Z2V0Qnl0ZXNTaXplRnJvbUxhYmVsLFxyXG5cdGdldFNvdXJjZVNpdGVGcm9tVXJsXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExpbmsobGFiZWwsIHVybCwgb3JkZXIpIHtcclxuXHRjb25zdCBuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYlwiKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuXHRhLmhyZWYgPSB1cmw7XHJcblx0YS50ZXh0Q29udGVudCA9IGxhYmVsO1xyXG5cdGlmICh0eXBlb2Yob3JkZXIpID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRkaXYuc3R5bGUub3JkZXIgPSBgJHtvcmRlcn1gO1xyXG5cdH1cclxuXHRkaXYuYXBwZW5kQ2hpbGQoYSk7XHJcblx0bi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHRyZXR1cm4gZGl2O1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0YWRkTGlua1xyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG92ZXJyaWRlQXR0cmlidXRlTmFtZSA9IFwiZGF0YS14LW92ZXJyaWRlLXBhZ2UtdHlwZVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldE92ZXJyaWRlKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZSgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHRyZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChkb2MsIGxvY2F0aW9uKSB7XHJcblx0Y29uc3Qgb3ZlcnJpZGVUeXBlID0gZ2V0T3ZlcnJpZGUoKTtcclxuXHRpZiAob3ZlcnJpZGVUeXBlICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gb3ZlcnJpZGVUeXBlO1xyXG5cdH1cclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9ZmF2Y2F0XVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZmF2b3JpdGVzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiLmdtIGgxI2duXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5XCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX291dGVyXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZXR0aW5nc1wiO1xyXG5cdH1cclxuXHRpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjdG9ycmVudGluZm9cIikgIT09IG51bGwpIHtcclxuXHRcdHJldHVybiBcInRvcnJlbnRJbmZvXCI7XHJcblx0fVxyXG5cclxuXHRsZXQgbiA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiYm9keT4uZD5wXCIpO1xyXG5cdGlmIChcclxuXHRcdChuICE9PSBudWxsICYmIC9nYWxsZXJ5XFxzK2hhc1xccytiZWVuXFxzK3JlbW92ZWQvaS50ZXN0KG4udGV4dENvbnRlbnQpKSB8fFxyXG5cdFx0ZG9jLnF1ZXJ5U2VsZWN0b3IoXCIuZXplX2RnYWxsZXJ5X3RhYmxlXCIpICE9PSBudWxsKSB7IC8vIGV6ZSByZXN1cnJlY3Rpb25cclxuXHRcdHJldHVybiBcImRlbGV0ZWRHYWxsZXJ5XCI7XHJcblx0fVxyXG5cclxuXHRuID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJpbWdbc3JjXVwiKTtcclxuXHRpZiAobiAhPT0gbnVsbCAmJiBsb2NhdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgcCA9IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHRuLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PT0gbG9jYXRpb24uaHJlZiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCAzKSAhPT0gXCIvdC9cIiAmJlxyXG5cdFx0XHRwLnN1YnN0cigwLCA1KSAhPT0gXCIvaW1nL1wiKSB7XHJcblx0XHRcdHJldHVybiBcInBhbmRhXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBVbmtub3duXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRnZXQsXHJcblx0Z2V0T3ZlcnJpZGUsXHJcblx0c2V0T3ZlcnJpZGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuXHJcblxyXG5jbGFzcyBQb3B1cE1lbnUge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5tZW51Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHR0aGlzLm1lbnVOb2RlLmNsYXNzTmFtZSA9IFwieC1wb3B1cC1tZW51XCI7XHJcblxyXG5cdFx0dGhpcy5fb25Eb2N1bWVudENsaWNrSG9va0VsZW1lbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5fb25Eb2N1bWVudENsaWNrID0gKGUpID0+IG9uRG9jdW1lbnRDbGlja1RvQ2xvc2UoZSwgdGhpcyk7XHJcblx0fVxyXG5cclxuXHRzaG93KG5vZGUsIGZpeGVkLCBhbmNob3IpIHtcclxuXHRcdC8qIGdsb2JhbHMgRE9NUmVjdCAqL1xyXG5cdFx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cclxuXHRcdGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmJvZHk7XHJcblx0XHRpZiAodGhpcy5tZW51Tm9kZS5wYXJlbnROb2RlICE9PSBwYXJlbnQpIHtcclxuXHRcdFx0cGFyZW50LmFwcGVuZENoaWxkKHRoaXMubWVudU5vZGUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5tZW51Tm9kZS5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcblx0XHR0aGlzLm1lbnVOb2RlLnN0eWxlLnRvcCA9IFwiMFwiO1xyXG5cdFx0dGhpcy5tZW51Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKFwieC1wb3B1cC1tZW51LWZpeGVkXCIsIGZpeGVkKTtcclxuXHJcblx0XHRjb25zdCBodG1sUmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGNvbnN0IG5vZGVSZWN0ID0gKG5vZGUgaW5zdGFuY2VvZiBET01SZWN0KSA/IG5vZGUgOiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0Y29uc3QgbWVudVJlY3QgPSB0aGlzLm1lbnVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwO1xyXG5cdFx0Y29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IDA7XHJcblxyXG5cdFx0bGV0IHhBbmNob3IgPSBudWxsO1xyXG5cdFx0bGV0IHlBbmNob3IgPSBudWxsO1xyXG5cdFx0aWYgKGlzT2JqZWN0KGFuY2hvcikpIHtcclxuXHRcdFx0bGV0IHYgPSBhbmNob3IueDtcclxuXHRcdFx0aWYgKHR5cGVvZih2KSA9PT0gXCJudW1iZXJcIiAmJiAhTnVtYmVyLmlzTmFOKHYpKSB7IHhBbmNob3IgPSAodiA+IDAuNSA/IDEuMCA6IDAuMCk7IH1cclxuXHRcdFx0diA9IGFuY2hvci55O1xyXG5cdFx0XHRpZiAodHlwZW9mKHYpID09PSBcIm51bWJlclwiICYmICFOdW1iZXIuaXNOYU4odikpIHsgeUFuY2hvciA9ICh2ID4gMC41ID8gMS4wIDogMC4wKTsgfVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh4QW5jaG9yID09PSBudWxsKSB7XHJcblx0XHRcdHhBbmNob3IgPSAobm9kZVJlY3QueCArIG1lbnVSZWN0LndpZHRoID49IHdpbmRvd1dpZHRoKSA/IDEuMCA6IDAuMDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoeUFuY2hvciA9PT0gbnVsbCkge1xyXG5cdFx0XHR5QW5jaG9yID0gKG5vZGVSZWN0LnkgKyBub2RlUmVjdC5oZWlnaHQgKyBtZW51UmVjdC5oZWlnaHQgPj0gd2luZG93SGVpZ2h0KSA/IDAuMCA6IDEuMDtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgeCA9IG5vZGVSZWN0LnggKyB4QW5jaG9yICogKG5vZGVSZWN0LndpZHRoIC0gbWVudVJlY3Qud2lkdGgpO1xyXG5cdFx0bGV0IHkgPSBub2RlUmVjdC55ICsgeUFuY2hvciAqIG5vZGVSZWN0LmhlaWdodCAtIG1lbnVSZWN0LmhlaWdodCAqICgxLjAgLSB5QW5jaG9yKTtcclxuXHJcblx0XHR4ID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbih3aW5kb3dXaWR0aCAtIG1lbnVSZWN0LndpZHRoLCB4KSk7XHJcblx0XHR5ID0gTWF0aC5tYXgoMC4wLCBNYXRoLm1pbih3aW5kb3dIZWlnaHQgLSBtZW51UmVjdC5oZWlnaHQsIHkpKTtcclxuXHJcblx0XHRpZiAoIWZpeGVkKSB7XHJcblx0XHRcdHggLT0gaHRtbFJlY3QueDtcclxuXHRcdFx0eSAtPSBodG1sUmVjdC55O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubWVudU5vZGUuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xyXG5cdFx0dGhpcy5tZW51Tm9kZS5zdHlsZS50b3AgPSBgJHt5fXB4YDtcclxuXHJcblx0XHRpZiAodGhpcy5fb25Eb2N1bWVudENsaWNrSG9va0VsZW1lbnQgPT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5fb25Eb2N1bWVudENsaWNrSG9va0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblx0XHRcdHRoaXMuX29uRG9jdW1lbnRDbGlja0hvb2tFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9vbkRvY3VtZW50Q2xpY2ssIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhpZGUoKSB7XHJcblx0XHRpZiAodGhpcy5tZW51Tm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcblx0XHRcdHRoaXMubWVudU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm1lbnVOb2RlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5fb25Eb2N1bWVudENsaWNrSG9va0VsZW1lbnQgIT09IG51bGwpIHtcclxuXHRcdFx0dGhpcy5fb25Eb2N1bWVudENsaWNrSG9va0VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX29uRG9jdW1lbnRDbGljaywgZmFsc2UpO1xyXG5cdFx0XHR0aGlzLl9vbkRvY3VtZW50Q2xpY2tIb29rRWxlbWVudCA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhZGRPcHRpb24ob3B0aW9ucykge1xyXG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdFx0bm9kZS5jbGFzc05hbWUgPSBcIngtcG9wdXAtbWVudS1vcHRpb25cIjtcclxuXHRcdG5vZGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwibm9yZWZlcnJlclwiKTtcclxuXHJcblx0XHRsZXQgY2xvc2VPbkNsaWNrID0gdHJ1ZTtcclxuXHRcdGlmIChpc09iamVjdChvcHRpb25zKSkge1xyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMudGl0bGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0bm9kZS50ZXh0Q29udGVudCA9IG9wdGlvbnMudGl0bGU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLnVybCkgPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRub2RlLmhyZWYgPSBvcHRpb25zLnVybDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnMudGFyZ2V0KSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdG5vZGUudGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQ7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm9yZGVyKSA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRcdG5vZGUuc3R5bGUub3JkZXIgPSBgJHtvcHRpb25zLm9yZGVyfWA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLmNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3B0aW9ucy5jYWxsYmFjaywgZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNsb3NlT25DbGljayA9ICh0eXBlb2Yob3B0aW9ucy5jbG9zZSkgIT09IFwiYm9vbGVhblwiIHx8IG9wdGlvbnMuY2xvc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChjbG9zZU9uQ2xpY2spIHtcclxuXHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IG9uTWVudUl0ZW1DbGlja1RvQ2xvc2UoZSwgdGhpcyksIGZhbHNlKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm1lbnVOb2RlLmFwcGVuZENoaWxkKG5vZGUpO1xyXG5cdFx0cmV0dXJuIG5vZGU7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVPcHRpb24obm9kZSkge1xyXG5cdFx0aWYgKG5vZGUucGFyZW50Tm9kZSA9PT0gdGhpcy5tZW51Tm9kZSkge1xyXG5cdFx0XHRub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25Eb2N1bWVudENsaWNrVG9DbG9zZShlLCBtZW51KSB7XHJcblx0aWYgKCFtZW51Lm1lbnVOb2RlLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG5cdFx0bWVudS5oaWRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1lbnVJdGVtQ2xpY2tUb0Nsb3NlKGUsIG1lbnUpIHtcclxuXHRtZW51LmhpZGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3Qodikge1xyXG5cdHJldHVybiB2ICE9PSBudWxsICYmIHR5cGVvZih2KSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IFwieC1wb3B1cC1tZW51XCI7XHJcblx0aWYgKHN0eWxlLmhhc1N0eWxlc2hlZXQoaWQpKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb25zdCBzcmMgPSByZXF1aXJlKFwiLi9zdHlsZS9wb3B1cC1tZW51LmNzc1wiKTtcclxuXHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0UG9wdXBNZW51XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZShcIi4uL3N0eWxlXCIpO1xyXG5jb25zdCB1cmxGcmFnbWVudCA9IHJlcXVpcmUoXCIuLi91cmwtZnJhZ21lbnRcIik7XHJcblxyXG5cclxuY29uc3Qgc2V0dGluZ3NDb250YWluZXJDbGFzcyA9IFwieC1zZXR0aW5ncy1jb250YWluZXJcIjtcclxuY29uc3Qgc2V0dGluZ3NDb250YWluZXJIaWRkZW5DbGFzcyA9IFwieC1zZXR0aW5ncy1jb250YWluZXItaGlkZGVuXCI7XHJcbmNvbnN0IGRlZmF1bHRTZXR0aW5nc0hpZGRlbkNsYXNzID0gXCJ4LXNldHRpbmdzLWhpZGRlblwiO1xyXG5cclxubGV0IHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPSBudWxsO1xyXG5sZXQgc2V0dGluZ3NDb250YWluZXIgPSBudWxsO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZExpbmsoKSB7XHJcblx0Y29uc3QgaWQgPSBcIngtbmF2LXNldHRpbmdzLWxpbmtcIjtcclxuXHJcblx0bGV0IG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0aWYgKG4gIT09IG51bGwpIHsgcmV0dXJuIG47IH1cclxuXHJcblx0Y29uc3QgbmF2QmFyID0gcmVxdWlyZShcIi4vbmF2aWdhdGlvbi1iYXJcIik7XHJcblx0biA9IG5hdkJhci5hZGRMaW5rKFwieFwiLCBgL3Vjb25maWcucGhwJHt1cmxGcmFnbWVudC5jcmVhdGUoXCJzZXR0aW5nc1wiKX1gLCAxKTtcclxuXHRpZiAobiA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cclxuXHRuLmlkID0gaWQ7XHJcblx0cmV0dXJuIG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0c2V0dGluZ3NDb250YWluZXJPdXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0ZXIuc3R1ZmZib3hcIik7XHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyT3V0ZXIgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdHNldHRpbmdzQ29udGFpbmVyID0gc2V0dGluZ3NDb250YWluZXJPdXRlci5xdWVyeVNlbGVjdG9yKGAuJHtzZXR0aW5nc0NvbnRhaW5lckNsYXNzfWApO1xyXG5cdGlmIChzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkge1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gYCR7c2V0dGluZ3NDb250YWluZXJDbGFzc30gJHtzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzfWA7XHJcblx0XHRzZXR0aW5nc0NvbnRhaW5lck91dGVyLmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGlkID0gXCJ4LXNldHRpbmdzXCI7XHJcblx0aWYgKCFzdHlsZS5oYXNTdHlsZXNoZWV0KGlkKSkge1xyXG5cdFx0Y29uc3Qgc3JjID0gcmVxdWlyZShcIi4vc3R5bGUvc2V0dGluZ3MuY3NzXCIpO1xyXG5cdFx0c3R5bGUuYWRkU3R5bGVzaGVldChzcmMsIGlkKTtcclxuXHR9XHJcblxyXG5cdHVybEZyYWdtZW50LmFkZFJvdXRlKC9eXFwvc2V0dGluZ3MoXFwvW1xcd1xcV10qKT8kLywgb25TZXR0aW5nc1BhZ2VDaGFuZ2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25TZXR0aW5nc1BhZ2VDaGFuZ2VkKG1hdGNoKSB7XHJcblx0c2V0U2V0dGluZ3NWaXNpYmxlKG1hdGNoICE9PSBudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2V0dGluZ3NWaXNpYmxlKHZpc2libGUpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXJPdXRlciA9PT0gbnVsbCB8fCBzZXR0aW5nc0NvbnRhaW5lciA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0aWYgKHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhzZXR0aW5nc0NvbnRhaW5lckhpZGRlbkNsYXNzKSAhPT0gdmlzaWJsZSkge1xyXG5cdFx0Ly8gTm8gY2hhbmdlXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKHNldHRpbmdzQ29udGFpbmVySGlkZGVuQ2xhc3MsICF2aXNpYmxlKTtcclxuXHJcblx0Zm9yIChjb25zdCBjaGlsZCBvZiBzZXR0aW5nc0NvbnRhaW5lck91dGVyLmNoaWxkcmVuKSB7XHJcblx0XHRpZiAoY2hpbGQgPT09IHNldHRpbmdzQ29udGFpbmVyKSB7IGNvbnRpbnVlOyB9XHJcblx0XHRjaGlsZC5jbGFzc0xpc3QudG9nZ2xlKGRlZmF1bHRTZXR0aW5nc0hpZGRlbkNsYXNzLCB2aXNpYmxlKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFNlY3Rpb24oaGVhZGVyLCBpZCwgb3JkZXIpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250YWluZXIgPT09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Y29uc3QgZnVsbElkID0gYHgtc2V0dGluZ3Mtc2VjdGlvbi0ke2lkfWA7XHJcblxyXG5cdGxldCBzZWN0aW9uID0gc2V0dGluZ3NDb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7ZnVsbElkfWApO1xyXG5cdGlmIChzZWN0aW9uID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdHNlY3Rpb24uaWQgPSBmdWxsSWQ7XHJcblx0XHRzZWN0aW9uLmNsYXNzTmFtZSA9IFwieC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRhaW5lclwiO1xyXG5cdFx0aWYgKHR5cGVvZihvcmRlcikgPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0c2VjdGlvbi5zdHlsZS5vcmRlciA9IGAke29yZGVyfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcblx0fVxyXG5cclxuXHRsZXQgY2xzID0gXCJ4LXNldHRpbmdzLXNlY3Rpb24taGVhZGVyXCI7XHJcblx0bGV0IHNlY3Rpb25IZWFkZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoYC4ke2Nsc31gKTtcclxuXHRpZiAoc2VjdGlvbkhlYWRlciA9PT0gbnVsbCkge1xyXG5cdFx0c2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHRcdHNlY3Rpb25IZWFkZXIuY2xhc3NOYW1lID0gY2xzO1xyXG5cdFx0c2VjdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlcjtcclxuXHRcdGNvbnN0IHJlbGF0aXZlID0gc2VjdGlvbi5maXJzdENoaWxkO1xyXG5cdFx0aWYgKHJlbGF0aXZlICE9PSBudWxsKSB7XHJcblx0XHRcdHNlY3Rpb24uaW5zZXJ0QmVmb3JlKHJlbGF0aXZlLCBzZWN0aW9uSGVhZGVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VjdGlvbkhlYWRlcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjbHMgPSBcIngtc2V0dGluZ3Mtc2VjdGlvbi1jb250ZW50XCI7XHJcblx0bGV0IHNlY3Rpb25Db250ZW50ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKGAuJHtjbHN9YCk7XHJcblx0aWYgKHNlY3Rpb25Db250ZW50ID09PSBudWxsKSB7XHJcblx0XHRzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRzZWN0aW9uQ29udGVudC5jbGFzc05hbWUgPSBjbHM7XHJcblx0XHRzZWN0aW9uLmFwcGVuZENoaWxkKHNlY3Rpb25Db250ZW50KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzZWN0aW9uQ29udGVudDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmssXHJcblx0aW5pdGlhbGl6ZSxcclxuXHRhZGRTZWN0aW9uXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gaXNEYXJrKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZihcImV4aGVudGFpXCIpID49IDAgfHxcclxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4LWZvcmNlLWRhcmtcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREb2N1bWVudERhcmtGbGFnKCkge1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwieC1pcy1kYXJrXCIsIGlzRGFyaygpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXJyb3dJY29uVXJsKCkge1xyXG5cdHJldHVybiAoaXNEYXJrKCkgPyBcImh0dHBzOi8vZXhoZW50YWkub3JnL2ltZy9tci5naWZcIiA6IFwiaHR0cHM6Ly9laGd0Lm9yZy9nL21yLmdpZlwiKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGlzRGFyayxcclxuXHRzZXREb2N1bWVudERhcmtGbGFnLFxyXG5cdGdldEFycm93SWNvblVybFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLngtZ2FsbGVyeS1kZXRhaWxze2ZvbnQtc2l6ZToxMHB0O2JvcmRlcjpub25lO3BhZGRpbmc6LjVlbSAwIDAgMDttYXJnaW46LTNweCAtNXB4fS54LWdhbGxlcnktZGV0YWlscy1jb250ZW50OmJlZm9yZSwueC1nYWxsZXJ5LWRldGFpbHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTpibG9jazttYXJnaW46MCAuNWVtO2JvcmRlci10b3A6MXB4IHNvbGlkICMwMDB9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LWdhbGxlcnktZGV0YWlscy1jb250ZW50OmJlZm9yZSw6cm9vdDpub3QoLngtaXMtZGFyaykgLngtZ2FsbGVyeS1kZXRhaWxzOmJlZm9yZXtib3JkZXItdG9wLWNvbG9yOiM1YzBkMTJ9LngtZ2FsbGVyeS1kZXRhaWxzLWlubmVye2JvcmRlcjpub25lO21hcmdpbjowfS54LWdhbGxlcnktZGV0YWlscy1saW5rc3tkaXNwbGF5OmZsZXg7ZmxleC1mbG93OnJvdyB3cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQ7cGFkZGluZzouNWVtO21hcmdpbi1sZWZ0Oi0xZW19LngtZ2FsbGVyeS1kZXRhaWxzLWxpbmstY29udGFpbmVye2ZsZXg6MCAxIGF1dG87bWFyZ2luLWxlZnQ6MWVtfS54LWdhbGxlcnktZGV0YWlscy1saW5re2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyfS54LWdhbGxlcnktZGV0YWlscy1jb250ZW50LWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtmbGV4LWZsb3c6Y29sdW1uIHdyYXA7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydDthbGlnbi1jb250ZW50OmZsZXgtc3RhcnR9LngtZ2FsbGVyeS1kZXRhaWxzLWNvbnRlbnR7ZmxleDowIDEgYXV0bzt3aWR0aDoxMDAlfVwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIueC1wb3B1cC1tZW51e3Bvc2l0aW9uOmFic29sdXRlO2ZvbnQtc2l6ZToxMHB0O2JvcmRlcjoxcHggc29saWQgIzAwMDtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt6LWluZGV4OjIxMDt0ZXh0LWFsaWduOmxlZnQ7Ym94LXNoYWRvdzouMjVlbSAuMjVlbSAwIDAgcmdiYSgwLDAsMCwuNSl9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXBvcHVwLW1lbnV7Ym9yZGVyLWNvbG9yOiM1YzBkMTI7YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxO2JveC1zaGFkb3c6LjI1ZW0gLjI1ZW0gMCAwIHJnYmEoOTIsMTMsMTgsLjUpfS54LXBvcHVwLW1lbnUueC1wb3B1cC1tZW51LWZpeGVke3Bvc2l0aW9uOmZpeGVkfS54LXBvcHVwLW1lbnUtb3B0aW9ue3BhZGRpbmc6LjI1ZW0gMWVtO2xpbmUtaGVpZ2h0OjEuMzc1ZW07dGV4dC1kZWNvcmF0aW9uOm5vbmV9LngtcG9wdXAtbWVudS1vcHRpb246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzQzNTNifTpyb290Om5vdCgueC1pcy1kYXJrKSAueC1wb3B1cC1tZW51LW9wdGlvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlZGViZGZ9XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi54LXNldHRpbmdzLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbi10b3A6LTFlbX0ueC1zZXR0aW5ncy1jb250YWluZXIueC1zZXR0aW5ncy1jb250YWluZXItaGlkZGVue2Rpc3BsYXk6bm9uZX0ueC1zZXR0aW5ncy1oaWRkZW57ZGlzcGxheTpub25lIWltcG9ydGFudH0ueC1zZXR0aW5ncy1vcHRpb24gc2VsZWN0e21hcmdpbi1yaWdodDouNWVtfS54LXNldHRpbmdzLXNlY3Rpb24tY29udGFpbmVye2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJTttYXJnaW4tdG9wOjFlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWNvbnRlbnR7bWFyZ2luOjhweCBhdXRvIDEwcHggMTBweDtjbGVhcjpib3RofS54LXNldHRpbmdzLXNlY3Rpb24taGVhZGVye2ZvbnQtc2l6ZToxLjI1ZW07bGluZS1oZWlnaHQ6MS41ZW07bWFyZ2luOi4yNWVtIDB9Lngtc2V0dGluZ3Mtc2VjdGlvbntkaXNwbGF5OmZsZXg7ZmxleC1mbG93OnJvdyB3cmFwO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1jb250ZW50OmZsZXgtc3RhcnQ7ZmxleC13cmFwOm5vd3JhcDt3aWR0aDoxMDAlO3BhZGRpbmc6LjVlbSAwfS54LXNldHRpbmdzLXNlY3Rpb24rLngtc2V0dGluZ3Mtc2VjdGlvbntib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsMCwwLC4yNSl9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXNldHRpbmdzLXNlY3Rpb24rLngtc2V0dGluZ3Mtc2VjdGlvbntib3JkZXItdG9wLWNvbG9yOnJnYmEoOTIsMTMsMTgsLjI1KX0ueC1zZXR0aW5ncy1zZWN0aW9uLWxlZnR7ZmxleDoxIDEgYXV0bztwYWRkaW5nLXJpZ2h0Oi41ZW19Lngtc2V0dGluZ3Mtc2VjdGlvbi1yaWdodHtmbGV4OjAgMCBhdXRvO21pbi13aWR0aDozMCU7dGV4dC1hbGlnbjpyaWdodH0ueC1zZXR0aW5ncy1zZWN0aW9uLXRpdGxle2ZvbnQtd2VpZ2h0OjcwMDtsaW5lLWhlaWdodDoxLjVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9ue2xpbmUtaGVpZ2h0OjEuMzVlbX0ueC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uKy54LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb257bWFyZ2luLXRvcDouMjVlbX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdLGlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRde2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MDttYXJnaW46MDtwYWRkaW5nOi4yNWVtIC41ZW07bGluZS1oZWlnaHQ6MS4zNzVlbTtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290Om5vdCgueC1pcy1kYXJrKSBpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJdLDpyb290Om5vdCgueC1pcy1kYXJrKSBpbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT10ZXh0XXtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDF9aW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9dGV4dF17d2lkdGg6MjBlbX1pbnB1dC54LXNldHRpbmdzLXNlY3Rpb24taW5wdXRbdHlwZT1udW1iZXJde3dpZHRoOjVlbTstbW96LWFwcGVhcmFuY2U6dGV4dGZpZWxkfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24saW5wdXQueC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTttYXJnaW46MH10ZXh0YXJlYS54LXNldHRpbmdzLXNlY3Rpb24tdGV4dGFyZWF7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czowO21hcmdpbjowO3BhZGRpbmc6LjI1ZW0gLjVlbTtsaW5lLWhlaWdodDoxLjM3NWVtO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtyZXNpemU6dmVydGljYWw7Zm9udC1zaXplOmluaGVyaXQ7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjEuODc1ZW07aGVpZ2h0OjQuNjI1ZW07Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtZmFtaWx5OlxcXCJDb3VyaWVyIE5ld1xcXCIsQ291cmllcixtb25vc3BhY2V9OnJvb3Q6bm90KC54LWlzLWRhcmspIHRleHRhcmVhLngtc2V0dGluZ3Mtc2VjdGlvbi10ZXh0YXJlYXtiYWNrZ3JvdW5kLWNvbG9yOiNlM2UwZDF9Lngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyIC5sY3tkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tcmlnaHQ6LTZweH0ueC1zZXR0aW5ncy1jb250YWluZXIgY29kZXtmb250LWZhbWlseTonQ291cmllciBOZXcnLENvdXJpZXIsbW9ub3NwYWNlO2JhY2tncm91bmQtY29sb3I6IzQzNDY0ZTtmb250LXdlaWdodDo3MDB9OnJvb3Q6bm90KC54LWlzLWRhcmspIC54LXNldHRpbmdzLWNvbnRhaW5lciBjb2Rle2JhY2tncm91bmQtY29sb3I6I2UzZTBkMX0ueC1zZXR0aW5ncy1saWdodC10ZXh0e2ZvbnQtd2VpZ2h0OjQwMDtvcGFjaXR5Oi43NX0ueC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpsZWZ0fS54LXNldHRpbmdzLWlucHV0LXRhYmxle2Rpc3BsYXk6dGFibGV9Lngtc2V0dGluZ3MtaW5wdXQtcm93e2Rpc3BsYXk6dGFibGUtcm93fS54LXNldHRpbmdzLWlucHV0LXJvdy54LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3d7Zm9udC1zaXplOi44ZW07bGluZS1oZWlnaHQ6MWVtO29wYWNpdHk6Ljc1fS54LXNldHRpbmdzLWlucHV0LWNlbGx7ZGlzcGxheTp0YWJsZS1jZWxsfS54LXNldHRpbmdzLWlucHV0LWNlbGwrLngtc2V0dGluZ3MtaW5wdXQtY2VsbHtwYWRkaW5nLWxlZnQ6LjI1ZW19Lngtc2V0dGluZ3MtaW5wdXQtcm93Om5vdCgueC1zZXR0aW5ncy1pbnB1dC1oZWFkZXItcm93KSsueC1zZXR0aW5ncy1pbnB1dC1yb3c+Lngtc2V0dGluZ3MtaW5wdXQtY2VsbHtwYWRkaW5nLXRvcDouMjVlbX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsLngtc2V0dGluZ3MtaW5wdXQtY2VsbC1taWRkbGV7dmVydGljYWwtYWxpZ246bWlkZGxlfS54LXNldHRpbmdzLWlucHV0LWNlbGwueC1zZXR0aW5ncy1pbnB1dC1jZWxsLWZpbGx7d2lkdGg6MTAwJX0ueC1zZXR0aW5ncy1pbnB1dC1jZWxsLngtc2V0dGluZ3MtaW5wdXQtY2VsbC1ub3dyYXB7d2hpdGUtc3BhY2U6bm93cmFwfS54LXNldHRpbmdzLWlucHV0LWxhYmVse2N1cnNvcjpwb2ludGVyO21hcmdpbjowIDAgMCAxZW19Lngtc2V0dGluZ3MtaW5wdXQtY2hlY2tib3gtcHJlZml4e3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nLXJpZ2h0Oi41ZW19XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBnbSA9IHJlcXVpcmUoXCIuL2dtXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpIHtcclxuXHRsZXQgY29uZmlnID0gbnVsbDtcclxuXHRsZXQgY29uZmlnR2V0UHJvbWlzZSA9IG51bGw7XHJcblxyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBsb2FkQ29uZmlnKCkge1xyXG5cdFx0Y29uc3QgY29uZmlnU3RyaW5nID0gYXdhaXQgZ20uZ2V0VmFsdWUoY29uZmlnS2V5LCBudWxsKTtcclxuXHRcdGlmICh0eXBlb2YoY29uZmlnU3RyaW5nKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IGMgPSBKU09OLnBhcnNlKGNvbmZpZ1N0cmluZyk7XHJcblx0XHRcdFx0aWYgKGMgIT09IG51bGwgJiYgdHlwZW9mKGMpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGMpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnRGVmYXVsdCwgYyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ0RlZmF1bHQpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0aWYgKGNvbmZpZyAhPT0gbnVsbCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7IH1cclxuXHJcblx0XHRpZiAoY29uZmlnR2V0UHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRjb25maWdHZXRQcm9taXNlID0gbG9hZENvbmZpZygpLnRoZW4oKHYpID0+IGNvbmZpZyA9IHYpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjb25maWdHZXRQcm9taXNlO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gc2F2ZSgpIHtcclxuXHRcdGlmIChjb25maWcgIT09IG51bGwpIHtcclxuXHRcdFx0YXdhaXQgZ20uc2V0VmFsdWUoY29uZmlnS2V5LCBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIFwiXCIpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGJpbmRJbnB1dChub2RlLCBzZXR0aW5nTmFtZSwgb3B0aW9ucywgdmFsdWVOYW1lKSB7XHJcblx0XHRjb25zdCBjID0gYXdhaXQgZ2V0KCk7XHJcblxyXG5cdFx0aWYgKHR5cGVvZih2YWx1ZU5hbWUpID09PSBcInVuZGVmaW5lZFwiKSB7XHJcblx0XHRcdHZhbHVlTmFtZSA9IGdldERlZmF1bHRWYWx1ZU5hbWUobm9kZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlSW5wdXQgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHt2YWx1ZSwgdmFsaWR9ID0gY29udmVydFRvVHlwZShjW3NldHRpbmdOYW1lXSwgb3B0aW9ucywgdHJ1ZSk7XHJcblx0XHRcdGlmICh2YWxpZCkgeyBub2RlW3ZhbHVlTmFtZV0gPSB2YWx1ZTsgfVxyXG5cdFx0fTtcclxuXHJcblx0XHR1cGRhdGVJbnB1dCgpO1xyXG5cclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHt2YWx1ZSwgdmFsaWR9ID0gY29udmVydFRvVHlwZShub2RlW3ZhbHVlTmFtZV0sIG9wdGlvbnMsIGZhbHNlKTtcclxuXHRcdFx0aWYgKHZhbGlkKSB7XHJcblx0XHRcdFx0Y1tzZXR0aW5nTmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRzYXZlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHVwZGF0ZUlucHV0KCk7XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdldCxcclxuXHRcdHNhdmUsXHJcblx0XHRiaW5kSW5wdXRcclxuXHR9O1xyXG59XHJcblxyXG5cclxuY29uc3QgZGVmYXVsdFR5cGVDb252ZXJ0T3B0aW9ucyA9IHt9O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZU5hbWUobm9kZSkge1xyXG5cdHN3aXRjaCAobm9kZS50YWdOYW1lKSB7XHJcblx0XHRjYXNlIFwiSU5QVVRcIjpcclxuXHRcdFx0aWYgKG5vZGUudHlwZSA9PT0gXCJjaGVja2JveFwiKSB7IHJldHVybiBcImNoZWNrZWRcIjsgfVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdHJldHVybiBcInZhbHVlXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb1R5cGUodmFsdWUsIG9wdGlvbnMsIHRvSW5wdXQpIHtcclxuXHRpZiAodHlwZW9mKG9wdGlvbnMpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIG9wdGlvbnMsIGRlZmF1bHRUeXBlQ29udmVydE9wdGlvbnMsIHRvSW5wdXQpO1xyXG5cdH0gaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgdHlwZW9mKG9wdGlvbnMpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZihvcHRpb25zLnR5cGUpID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRyZXR1cm4gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIG9wdGlvbnMudHlwZSwgb3B0aW9ucywgdG9JbnB1dCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiB7IHZhbHVlLCB2YWxpZDogdHJ1ZSB9O1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvVHlwZU5vcm1hbGl6ZWQodmFsdWUsIHR5cGVOYW1lLCBvcHRpb25zLCB0b0lucHV0KSB7XHJcblx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcblx0Ly8gQ29udmVydFxyXG5cdHN3aXRjaCAodHlwZU5hbWUpIHtcclxuXHRcdGNhc2UgXCJib29sZWFuXCI6XHJcblx0XHRcdHZhbHVlID0gISF2YWx1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiaW50ZWdlclwiOlxyXG5cdFx0Y2FzZSBcIm51bWJlclwiOlxyXG5cdFx0XHR2YWx1ZSA9ICh0eXBlTmFtZSA9PT0gXCJudW1iZXJcIiA/IHBhcnNlRmxvYXQoYCR7dmFsdWV9YCkgOiBwYXJzZUludChgJHt2YWx1ZX1gLCAxMCkpO1xyXG5cdFx0XHRpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IDA7XHJcblx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdC8vIFRyYW5zZm9ybVxyXG5cdGlmICghdG9JbnB1dCAmJiB0eXBlb2Yob3B0aW9ucy5pbnB1dFRvVmFsdWUpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHZhbHVlID0gb3B0aW9ucy5pbnB1dFRvVmFsdWUodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gTGltaXRzXHJcblx0c3dpdGNoICh0eXBlTmFtZSkge1xyXG5cdFx0Y2FzZSBcImludGVnZXJcIjpcclxuXHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1pbikgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUgPCBvcHRpb25zLm1pbikgeyB2YWx1ZSA9IG9wdGlvbnMubWluOyB9XHJcblx0XHRcdGlmICh0eXBlb2Yob3B0aW9ucy5tYXgpID09PSBcIm51bWJlclwiICYmIHZhbHVlID4gb3B0aW9ucy5tYXgpIHsgdmFsdWUgPSBvcHRpb25zLm1heDsgfVxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJzdHJpbmdcIjpcclxuXHRcdFx0aWYgKHR5cGVvZihvcHRpb25zLm1heExlbmd0aCkgPT09IFwibnVtYmVyXCIgJiYgdmFsdWUubGVuZ3RoID4gb3B0aW9ucy5tYXhMZW5ndGgpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBvcHRpb25zLm1heExlbmd0aCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHQvLyBUcmFuc2Zvcm1cclxuXHRpZiAodG9JbnB1dCAmJiB0eXBlb2Yob3B0aW9ucy52YWx1ZVRvSW5wdXQpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdHZhbHVlID0gb3B0aW9ucy52YWx1ZVRvSW5wdXQodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgdmFsdWUsIHZhbGlkIH07XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjcmVhdGVcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiB0b1Byb21pc2UoZm4sIHNlbGYpIHtcclxuXHRyZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0cmVzb2x2ZShmbi5hcHBseShzZWxmLCBhcmdzKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRyZWplY3QoZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IGdtID0gKChvYmplY3RzKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHYgPSBHTTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXHJcblx0XHRpZiAodiAhPT0gbnVsbCAmJiB0eXBlb2YodikgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdFx0cmV0dXJuIHY7XHJcblx0XHR9XHJcblx0fVxyXG5cdGNhdGNoIChlKSB7IH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGZvciAoY29uc3Qgb2JqIG9mIG9iamVjdHMpIHtcclxuXHRcdFx0aWYgKG9iai5HTSAhPT0gbnVsbCAmJiB0eXBlb2Yob2JqLkdNKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0XHRcdHJldHVybiBvYmouR007XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Y2F0Y2ggKGUpIHsgfVxyXG5cclxuXHRjb25zdCBtYXBwaW5nID0gW1xyXG5cdFx0WyBcImdldFZhbHVlXCIsIFwiR01fZ2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcInNldFZhbHVlXCIsIFwiR01fc2V0VmFsdWVcIiBdLFxyXG5cdFx0WyBcImRlbGV0ZVZhbHVlXCIsIFwiR01fZGVsZXRlVmFsdWVcIiBdLFxyXG5cdFx0WyBcInhtbEh0dHBSZXF1ZXN0XCIsIFwiR01feG1saHR0cFJlcXVlc3RcIiBdXHJcblx0XTtcclxuXHJcblx0Y29uc3QgcmVzdWx0ID0ge307XHJcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgbWFwcGluZykge1xyXG5cdFx0bGV0IHByb21pc2UgPSBudWxsO1xyXG5cdFx0Zm9yIChjb25zdCBvYmogb2Ygb2JqZWN0cykge1xyXG5cdFx0XHRjb25zdCBmbiA9IG9ialt2YWx1ZV07XHJcblx0XHRcdGlmICh0eXBlb2YoZm4pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0XHRwcm9taXNlID0gdG9Qcm9taXNlKGZuLCBvYmopO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAocHJvbWlzZSA9PT0gbnVsbCkge1xyXG5cdFx0XHRwcm9taXNlID0gKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgTm90IHN1cHBvcnRlZCAoJHtrZXl9KWApKSk7XHJcblx0XHR9XHJcblx0XHRyZXN1bHRba2V5XSA9IHByb21pc2U7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn0pLmNhbGwodGhpcywgW3RoaXMsIHdpbmRvd10pOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdtO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBpc1JlYWR5VmFsdWUgPSBmYWxzZTtcclxubGV0IGNhbGxiYWNrcyA9IG51bGw7XHJcbmxldCBjaGVja0ludGVydmFsSWQgPSBudWxsO1xyXG5jb25zdCBjaGVja0ludGVydmFsUmF0ZSA9IDI1MDtcclxuXHJcblxyXG5mdW5jdGlvbiBpc0hvb2tlZCgpIHtcclxuXHRyZXR1cm4gY2FsbGJhY2tzICE9PSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBob29rKCkge1xyXG5cdGNhbGxiYWNrcyA9IFtdO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoY2hlY2tJZlJlYWR5LCBjaGVja0ludGVydmFsUmF0ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuaG9vaygpIHtcclxuXHRjb25zdCBjYnMgPSBjYWxsYmFja3M7XHJcblxyXG5cdGNhbGxiYWNrcyA9IG51bGw7XHJcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHRjbGVhckludGVydmFsKGNoZWNrSW50ZXJ2YWxJZCk7XHJcblx0Y2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuXHJcblx0aW52b2tlKGNicyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludm9rZShjYWxsYmFja3MpIHtcclxuXHRmb3IgKGxldCBjYiBvZiBjYWxsYmFja3MpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNiKCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWFkeSgpIHtcclxuXHRpZiAoaXNSZWFkeVZhbHVlKSB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcblx0XHRpZiAoaXNIb29rZWQoKSkgeyB1bmhvb2soKTsgfVxyXG5cdFx0aXNSZWFkeVZhbHVlID0gdHJ1ZTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSWZSZWFkeSgpIHtcclxuXHRpc1JlYWR5KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvblJlYWR5KGNhbGxiYWNrKSB7XHJcblx0aWYgKGlzUmVhZHkoKSkge1xyXG5cdFx0Y2FsbGJhY2soKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghaXNIb29rZWQoKSkgeyBob29rKCk7IH1cclxuXHJcblx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0b25SZWFkeTogb25SZWFkeSxcclxuXHRnZXQgaXNSZWFkeSgpIHsgcmV0dXJuIGlzUmVhZHkoKTsgfVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ0tleSA9IFwieC1zZWFyY2gtbGlua3MtY29uZmlnXCI7XHJcbmNvbnN0IHNlYXJjaFRhcmdldHNEZWZhdWx0ID0gW1xyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlNlYXJjaCBieSBOYW1lXCIsXHJcblx0XHR1cmw6IFwiLz9mX2NhdHM9MCZmX3NuYW1lPTEmZl9zZWFyY2g9XFxcIntzaG9ydC1uYW1lfVxcXCJcIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlNlYXJjaCBieSBGdWxsIE5hbWVcIixcclxuXHRcdHVybDogXCIvP2ZfY2F0cz0wJmZfc25hbWU9MSZmX3NlYXJjaD1cXFwie2Z1bGwtbmFtZX1cXFwiXCIsXHJcblx0XHRlbmFibGVkOiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJTZWFyY2ggYnkgTmFtZSAobmhlbnRhaS5uZXQpXCIsXHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9uaGVudGFpLm5ldC9zZWFyY2gvP3E9XFxcIntzaG9ydC1uYW1lfVxcXCJcIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlNlYXJjaCBieSBGdWxsIE5hbWUgKG5oZW50YWkubmV0KVwiLFxyXG5cdFx0dXJsOiBcImh0dHBzOi8vbmhlbnRhaS5uZXQvc2VhcmNoLz9xPVxcXCJ7ZnVsbC1uYW1lfVxcXCJcIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9LFxyXG5cdHtcclxuXHRcdHRpdGxlOiBcIlNlYXJjaCBieSBOYW1lIChoaXRvbWkubGEpXCIsXHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9oaXRvbWkubGEvc2VhcmNoLmh0bWw/e3Nob3J0LW5hbWV9XCIsXHJcblx0XHRlbmFibGVkOiB0cnVlXHJcblx0fSxcclxuXHR7XHJcblx0XHR0aXRsZTogXCJTZWFyY2ggYnkgRnVsbCBOYW1lIChjaGFpa2EpXCIsXHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9wYW5kYS5jaGFpa2EubW9lL3NlYXJjaC8/cXNlYXJjaD17ZnVsbC1uYW1lfVwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IE5hbWUgKGNoYWlrYSlcIixcclxuXHRcdHVybDogXCJodHRwczovL3BhbmRhLmNoYWlrYS5tb2Uvc2VhcmNoLz9xc2VhcmNoPXtzaG9ydC1uYW1lfVwiLFxyXG5cdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0dGl0bGU6IFwiU2VhcmNoIGJ5IFVSTCAoY2hhaWthKVwiLFxyXG5cdFx0dXJsOiBcImh0dHBzOi8vcGFuZGEuY2hhaWthLm1vZS9zZWFyY2gvP3FzZWFyY2g9e3VybH1cIixcclxuXHRcdGVuYWJsZWQ6IHRydWVcclxuXHR9XHJcbl07XHJcbmNvbnN0IGNvbmZpZ0RlZmF1bHQgPSB7XHJcblx0c2VhcmNoVGFyZ2V0czogZ2V0RGVmYXVsdFNlYXJjaFRhcmdldHMoKVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdFNlYXJjaFRhcmdldHMoKSB7XHJcblx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2VhcmNoVGFyZ2V0c0RlZmF1bHQsIG51bGwsIFwiXCIpKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpLmNyZWF0ZShjb25maWdLZXksIGNvbmZpZ0RlZmF1bHQpO1xyXG5tb2R1bGUuZXhwb3J0cy5nZXREZWZhdWx0U2VhcmNoVGFyZ2V0cyA9IGdldERlZmF1bHRTZWFyY2hUYXJnZXRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IHJlYWR5ID0gcmVxdWlyZShcIi4uL3JlYWR5XCIpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoXCIuLi9zdHlsZVwiKTtcclxuY29uc3QgcGFnZVR5cGUgPSByZXF1aXJlKFwiLi4vYXBpL3BhZ2UtdHlwZVwiKTtcclxuY29uc3QgZ2FsbGVyeURldGFpbHMgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktZGV0YWlsc1wiKTtcclxuY29uc3QgUG9wdXBNZW51ID0gcmVxdWlyZShcIi4uL2FwaS9wb3B1cC1tZW51XCIpLlBvcHVwTWVudTtcclxuY29uc3Qgc2V0dGluZ3MgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcclxuXHJcbmxldCBtZW51ID0gbnVsbDtcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXR1cEdhbGxlcnlQYWdlKGdkKSB7XHJcblx0Y29uc3QgY29uZmlnID0gYXdhaXQgcmVxdWlyZShcIi4vY29uZmlnXCIpLmdldCgpO1xyXG5cdGNvbnN0IHNlYXJjaFRhcmdldHMgPSBjb25maWcuc2VhcmNoVGFyZ2V0cztcclxuXHRpZiAoIUFycmF5LmlzQXJyYXkoc2VhcmNoVGFyZ2V0cykgfHwgc2VhcmNoVGFyZ2V0cy5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IGxpbmsgPSBnZC5hZGRMaW5rKFwiQ3VzdG9tIFNlYXJjaFwiLCAwKTtcclxuXHRpZiAobGluayA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IG9uTWVudUxpbmtDbGljayhlLCBsaW5rLCBzZWFyY2hUYXJnZXRzKSwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1lbnVMaW5rQ2xpY2soZSwgbm9kZSwgc2VhcmNoVGFyZ2V0cykge1xyXG5cdGlmIChtZW51ID09PSBudWxsKSB7XHJcblx0XHRtZW51ID0gY3JlYXRlTWVudShzZWFyY2hUYXJnZXRzKTtcclxuXHR9XHJcblxyXG5cdGlmIChtZW51ICE9PSBudWxsKSB7XHJcblx0XHRtZW51LnNob3cobm9kZSwgZmFsc2UsIG51bGwpO1xyXG5cdH1cclxuXHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KHNlYXJjaFRhcmdldHMpIHtcclxuXHRjb25zdCBvcHRpb25zID0gW107XHJcblx0Zm9yIChjb25zdCBzZWFyY2hUYXJnZXQgb2Ygc2VhcmNoVGFyZ2V0cykge1xyXG5cdFx0aWYgKHNlYXJjaFRhcmdldC5lbmFibGVkID09PSBmYWxzZSkgeyBjb250aW51ZTsgfVxyXG5cdFx0b3B0aW9ucy5wdXNoKHtcclxuXHRcdFx0dGl0bGU6IHNlYXJjaFRhcmdldC50aXRsZSxcclxuXHRcdFx0dXJsOiBzZWFyY2hUYXJnZXQudXJsLFxyXG5cdFx0XHR0YXJnZXQ6IFwiX2JsYW5rXCJcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aWYgKG9wdGlvbnMubGVuZ3RoID09PSAwKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IGdldEdhbGxlcnlJbmZvRnJvbUh0bWwgPSByZXF1aXJlKFwiLi4vYXBpL2dhbGxlcnktaW5mby9nZXQtZnJvbS1odG1sXCIpO1xyXG5cdGNvbnN0IGluZm8gPSBnZXRHYWxsZXJ5SW5mb0Zyb21IdG1sKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cdGlmIChpbmZvID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdGNvbnN0IHJlcGxhY2VtZW50cyA9IGdldEdhbGxlcnlJbmZvUmVwbGFjZW1lbnRzKGluZm8pO1xyXG5cclxuXHRjb25zdCBtZW51ID0gbmV3IFBvcHVwTWVudSgpO1xyXG5cdGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcclxuXHRcdG9wdGlvbi51cmwgPSBmb3JtYXRVcmwob3B0aW9uLnVybCwgcmVwbGFjZW1lbnRzKTtcclxuXHRcdG1lbnUuYWRkT3B0aW9uKG9wdGlvbik7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbWVudTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybCwgcmVwbGFjZW1lbnRzKSB7XHJcblx0cmV0dXJuIHVybC5yZXBsYWNlKC9cXHsoW15cXH1dKilcXH0vZywgKG0wLCBtMSkgPT4ge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXBsYWNlbWVudHMsIG0xKSA/IHJlcGxhY2VtZW50c1ttMV0gOiBtMDtcclxuXHR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeUluZm9SZXBsYWNlbWVudHMoZ2FsbGVyeUluZm8pIHtcclxuXHRjb25zdCBzaG9ydFRpdGxlID0gZ2V0U2hvcnRUaXRsZShnYWxsZXJ5SW5mby50aXRsZSk7XHJcblx0Y29uc3Qgc2hvcnRUaXRsZUpQID0gZ2V0U2hvcnRUaXRsZShnYWxsZXJ5SW5mby50aXRsZU9yaWdpbmFsKTtcclxuXHJcblx0Y29uc3QgbSA9IC9eKFtcXHdcXFddKilcXHwoW1xcd1xcV10qKSQvLmV4ZWMoc2hvcnRUaXRsZSk7XHJcblx0cmV0dXJuIHtcclxuXHRcdFwic2hvcnQtbmFtZS1qcFwiOiBlbmNvZGVVUklDb21wb25lbnQoc2hvcnRUaXRsZUpQKSxcclxuXHRcdFwic2hvcnQtbmFtZVwiOiBlbmNvZGVVUklDb21wb25lbnQoc2hvcnRUaXRsZSksXHJcblx0XHRcInNob3J0LW5hbWUxXCI6IGVuY29kZVVSSUNvbXBvbmVudChtICE9PSBudWxsID8gbVsxXSA6IHNob3J0VGl0bGUpLFxyXG5cdFx0XCJzaG9ydC1uYW1lMlwiOiBlbmNvZGVVUklDb21wb25lbnQobSAhPT0gbnVsbCA/IG1bMl0gOiBzaG9ydFRpdGxlKSxcclxuXHRcdFwiZnVsbC1uYW1lXCI6IGVuY29kZVVSSUNvbXBvbmVudChnYWxsZXJ5SW5mby50aXRsZSksXHJcblx0XHRcImZ1bGwtbmFtZS1qcFwiOiBlbmNvZGVVUklDb21wb25lbnQoZ2FsbGVyeUluZm8udGl0bGVPcmlnaW5hbCksXHJcblx0XHRcInVybFwiOiBlbmNvZGVVUklDb21wb25lbnQoZ2V0R2FsbGVyeVVybChnYWxsZXJ5SW5mby5pZGVudGlmaWVyKSlcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTaG9ydFRpdGxlKHRpdGxlKSB7XHJcblx0Y29uc3QgcHJlZml4VGFncyA9IC9eXFxzKihcXCgoW15cXCldKj8pXFwpfFxcWyhbXlxcXV0qPylcXF18XFx7KFteXFx9XSo/KVxcfSlcXHMqL2k7XHJcblx0Y29uc3Qgc3VmZml4VGFncyA9IC9cXHMqKFxcKChbXlxcKV0qPykoPzpcXCl8JCl8XFxbKFteXFxdXSo/KSg/OlxcXXwkKXxcXHsoW15cXH1dKj8pKD86XFx9fCQpKVxccyokL2k7XHJcblxyXG5cdGxldCBtO1xyXG5cdHdoaWxlICgobSA9IHByZWZpeFRhZ3MuZXhlYyh0aXRsZSkpKSB7XHJcblx0XHR0aXRsZSA9IHRpdGxlLnN1YnN0cihtLmluZGV4ICsgbVswXS5sZW5ndGgpO1xyXG5cdH1cclxuXHR3aGlsZSAoKG0gPSBzdWZmaXhUYWdzLmV4ZWModGl0bGUpKSkge1xyXG5cdFx0dGl0bGUgPSB0aXRsZS5zdWJzdHIoMCwgbS5pbmRleCk7XHJcblx0fVxyXG5cdHJldHVybiB0aXRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0R2FsbGVyeVVybChpZCkge1xyXG5cdGNvbnN0IGxvYyA9IHdpbmRvdy5sb2NhdGlvbjtcclxuXHRyZXR1cm4gYCR7bG9jLnByb3RvY29sfS8vJHtsb2MuaG9zdH0vZy8ke2lkLmlkfS8ke2lkLnRva2VufS9gO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVzaGVldCgpIHtcclxuXHRjb25zdCBpZCA9IFwieC1zZWFyY2gtbGlua3NcIjtcclxuXHRpZiAoc3R5bGUuaGFzU3R5bGVzaGVldChpZCkpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHNyYyA9IHJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcclxuXHRzdHlsZS5hZGRTdHlsZXNoZWV0KHNyYywgaWQpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuXHRzZXR0aW5ncy5hZGRMaW5rKCk7XHJcblxyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdGlmIChjdXJyZW50UGFnZVR5cGUgPT09IFwic2V0dGluZ3NcIikge1xyXG5cdFx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cdFx0c2V0dGluZ3MuaW5pdGlhbGl6ZSgpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0KGFzeW5jICgpID0+IHtcclxuXHRcdGNvbnN0IGdkID0gYXdhaXQgZ2FsbGVyeURldGFpbHMud2FpdEZvcigpO1xyXG5cdFx0aW5zZXJ0U3R5bGVzaGVldCgpO1xyXG5cdFx0c2V0dXBHYWxsZXJ5UGFnZShnZCk7XHJcblx0fSkoKTtcclxufVxyXG5cclxuXHJcbnJlYWR5Lm9uUmVhZHkobWFpbik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb25cXFwiPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3Mtc2VjdGlvbi1sZWZ0XFxcIj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tdGl0bGVcXFwiPlNlYXJjaCBUYXJnZXRzPC9kaXY+XFxyXFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWRlc2NyaXB0aW9uXFxcIj5cXHJcXG5cXHRcXHRcXHRMaXN0IG9mIHNlYXJjaCBzZWFyY2ggdGFyZ2V0cy5cXHJcXG5cXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24tZGVzY3JpcHRpb25cXFwiPlxcclxcblxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGUtY29udGFpbmVyIHgtc2VhcmNoLWxpbmtzLXNlYXJjaC10YXJnZXQtY29udGFpbmVyXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXRhYmxlXFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXJvdyB4LXNldHRpbmdzLWlucHV0LWhlYWRlci1yb3dcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+T3JkZXI8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPlRpdGxlPC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC1jZWxsXFxcIj5VUkw8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGxcXFwiPkVuYWJsZWQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LXJvdyB4LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWVudHJ5XFxcIj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGwgeC1zZXR0aW5ncy1pbnB1dC1jZWxsLW5vd3JhcFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b24geC1zZWFyY2gtbGlua3MtcmVtb3ZlLWJ1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiJiN4MjcxNjtcXFwiIC8+PGlucHV0IGNsYXNzPVxcXCJ4LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b24geC1zZWFyY2gtbGlua3MtbW92ZS11cC1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIiYjeDI1QjI7XFxcIiAvPjxpbnB1dCBjbGFzcz1cXFwieC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uIHgtc2VhcmNoLWxpbmtzLW1vdmUtZG93bi1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdmFsdWU9XFxcIiYjeDI1QkM7XFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXQgeC1zZWFyY2gtbGlua3MtdGl0bGUtaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBkYXRhLXgtc2V0dGluZ3Mtb3B0aW9uPVxcXCJ0aXRsZVxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGwgeC1zZXR0aW5ncy1pbnB1dC1jZWxsLWZpbGxcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBjbGFzcz1cXFwieC1zZXR0aW5ncy1zZWN0aW9uLWlucHV0IHgtc2VhcmNoLWxpbmtzLXVybC1pbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiIGRhdGEteC1zZXR0aW5ncy1vcHRpb249XFxcInVybFxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGwgeC1zZXR0aW5ncy1pbnB1dC1jZWxsLW1pZGRsZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGxhYmVsPjxzcGFuIGNsYXNzPVxcXCJsY1xcXCI+PGlucHV0IGNsYXNzPVxcXCJ4LXNldHRpbmdzLXNlY3Rpb24taW5wdXQgeC1zZWFyY2gtbGlua3MtZW5hYmxlZC1pbnB1dFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEteC1zZXR0aW5ncy1mb3I9XFxcImVuYWJsZWRcXFwiIC8+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwieC1zZXR0aW5ncy1pbnB1dC10YWJsZS1jb250YWluZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtdGFibGVcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtcm93IHgtc2VhcmNoLWxpbmtzLXNlYXJjaC10YXJnZXQtZW50cnlcXFwiPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcIngtc2V0dGluZ3MtaW5wdXQtY2VsbFxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IGNsYXNzPVxcXCJ4LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b24geC1zZWFyY2gtbGlua3MtYWRkLWJ1dHRvblxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB2YWx1ZT1cXFwiJiN4Mjc5NTsmI3hGRTBFO1xcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ4LXNldHRpbmdzLWlucHV0LWNlbGwgeC1zZXR0aW5ncy1pbnB1dC1jZWxsLW1pZGRsZVxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PGEgY2xhc3M9XFxcIngtc2VhcmNoLWxpbmtzLXJlc2V0LWxpbmtcXFwiPlJlc2V0IHRvIGRlZmF1bHQ8L2E+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9kaXY+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCI7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHJlcXVpcmUoXCIuLi9hcGkvc2V0dGluZ3NcIik7XHJcblxyXG5sZXQgc2V0dGluZ3NDb250cm9sbGVyID0gbnVsbDtcclxuXHJcblxyXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZywgY29uZmlnVmFsdWUsIHRlbXBsYXRlLCBzZWFyY2hUYXJnZXRQYXJlbnQsIGFkZEJ1dHRvbiwgcmVzZXRCdXR0b24sIGhpZGVJZkVtcHR5Tm9kZSkge1xyXG5cdFx0dGhpcy5jb25maWcgPSBjb25maWc7XHJcblx0XHR0aGlzLmNvbmZpZ1ZhbHVlID0gY29uZmlnVmFsdWU7XHJcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldFBhcmVudCA9IHNlYXJjaFRhcmdldFBhcmVudDtcclxuXHRcdHRoaXMuYWRkQnV0dG9uID0gYWRkQnV0dG9uO1xyXG5cdFx0dGhpcy5yZXNldEJ1dHRvbiA9IHJlc2V0QnV0dG9uO1xyXG5cdFx0dGhpcy5oaWRlSWZFbXB0eU5vZGUgPSBoaWRlSWZFbXB0eU5vZGU7XHJcblxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzID0gW107XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzID0gW107XHJcblx0XHR0aGlzLnNldHVwU2VhcmNoVGFyZ2V0cygpO1xyXG5cclxuXHRcdHRoaXMuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmFkZFNlYXJjaFRhcmdldCgpLCBmYWxzZSk7XHJcblx0XHR0aGlzLnJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnJlc2V0U2VhcmNoVGFyZ2V0cygpLCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyBhZGRTZWFyY2hUYXJnZXQoKSB7XHJcblx0XHRjb25zdCBzZWFyY2hUYXJnZXQgPSB7IHRpdGxlOiBcIlwiLCB1cmw6IFwiXCIsIGVuYWJsZWQ6IHRydWUgfTtcclxuXHRcdGNvbnN0IGluZGV4ID0gdGhpcy5zZWFyY2hUYXJnZXRzLmxlbmd0aDtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0cy5wdXNoKHNlYXJjaFRhcmdldCk7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnB1c2gobmV3IFNldHRpbmdzU2VhcmNoVGFyZ2V0Q29udHJvbGxlcih0aGlzLCBzZWFyY2hUYXJnZXQsIGluZGV4KSk7XHJcblx0XHRpZiAoaW5kZXggPiAwKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzW2luZGV4IC0gMV07XHJcblx0XHRcdGlmIChjICE9PSBudWxsKSB7IGMudXBkYXRlSW5kZXgoYy5pbmRleCk7IH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnVwZGF0ZVNlYXJjaFRhcmdldENvdW50KCk7XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5zYXZlQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZXNldFNlYXJjaFRhcmdldHMoKSB7XHJcblx0XHR0aGlzLmNsZWFudXBTZWFyY2hUYXJnZXRzKCk7XHJcblxyXG5cdFx0dGhpcy5jb25maWdWYWx1ZS5zZWFyY2hUYXJnZXRzID0gdGhpcy5jb25maWcuZ2V0RGVmYXVsdFNlYXJjaFRhcmdldHMoKTtcclxuXHRcdGF3YWl0IHRoaXMuc2F2ZUNvbmZpZygpO1xyXG5cclxuXHRcdHRoaXMuc2V0dXBTZWFyY2hUYXJnZXRzKCk7XHJcblx0fVxyXG5cclxuXHRjbGVhbnVwU2VhcmNoVGFyZ2V0cygpIHtcclxuXHRcdGZvciAoY29uc3Qgc2VhcmNoVGFyZ2V0Q29udHJvbGxlciBvZiB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzKSB7XHJcblx0XHRcdHNlYXJjaFRhcmdldENvbnRyb2xsZXIuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycyA9IFtdO1xyXG5cdH1cclxuXHJcblx0c2V0dXBTZWFyY2hUYXJnZXRzKCkge1xyXG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KHRoaXMuY29uZmlnVmFsdWUuc2VhcmNoVGFyZ2V0cykpIHtcclxuXHRcdFx0dGhpcy5jb25maWdWYWx1ZS5zZWFyY2hUYXJnZXRzID0gW107XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzID0gdGhpcy5jb25maWdWYWx1ZS5zZWFyY2hUYXJnZXRzO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycyA9IFtdO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwLCBpaSA9IHRoaXMuc2VhcmNoVGFyZ2V0cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRcdGNvbnN0IHNlYXJjaFRhcmdldCA9IHRoaXMuc2VhcmNoVGFyZ2V0c1tpXTtcclxuXHRcdFx0Y29uc3QgY29udHJvbGxlciA9IGlzT2JqZWN0KHNlYXJjaFRhcmdldCkgPyBuZXcgU2V0dGluZ3NTZWFyY2hUYXJnZXRDb250cm9sbGVyKHRoaXMsIHNlYXJjaFRhcmdldCwgaSkgOiBudWxsO1xyXG5cdFx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcik7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTZWFyY2hUYXJnZXRDb3VudCgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgbW92ZShjb250cm9sbGVyLCBvZmZzZXQpIHtcclxuXHRcdGNvbnN0IGluZGV4T2xkID0gY29udHJvbGxlci5pbmRleDtcclxuXHRcdGNvbnN0IGluZGV4TmV3ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5sZW5ndGggLSAxLCBpbmRleE9sZCArIG9mZnNldCkpO1xyXG5cdFx0aWYgKGluZGV4TmV3ID09PSBpbmRleE9sZCkgeyByZXR1cm47IH1cclxuXHJcblx0XHRjb25zdCBzZWFyY2hUYXJnZXQgPSB0aGlzLnNlYXJjaFRhcmdldHNbaW5kZXhPbGRdO1xyXG5cclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0cy5zcGxpY2UoaW5kZXhPbGQsIDEpO1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzLnNwbGljZShpbmRleE5ldywgMCwgc2VhcmNoVGFyZ2V0KTtcclxuXHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnNwbGljZShpbmRleE9sZCwgMSk7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnNwbGljZShpbmRleE5ldywgMCwgY29udHJvbGxlcik7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IE1hdGgubWluKGluZGV4T2xkLCBpbmRleE5ldyksIGlpID0gTWF0aC5tYXgoaW5kZXhPbGQsIGluZGV4TmV3KSArIDE7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzW2ldO1xyXG5cdFx0XHRpZiAoYyAhPT0gbnVsbCkgeyBjLnVwZGF0ZUluZGV4KGkpOyB9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG5leHQgPSBudWxsO1xyXG5cdFx0Zm9yIChsZXQgaSA9IGluZGV4TmV3ICsgMSwgaWkgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcclxuXHRcdFx0Y29uc3QgYyA9IHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnNbaV07XHJcblx0XHRcdGlmIChjICE9PSBudWxsKSB7XHJcblx0XHRcdFx0bmV4dCA9IGM7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobmV4dCAhPT0gbnVsbCAmJiBuZXh0LnJvdy5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcblx0XHRcdG5leHQucm93LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRyb2xsZXIucm93LCBuZXh0LnJvdyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNlYXJjaFRhcmdldFBhcmVudC5hcHBlbmRDaGlsZChjb250cm9sbGVyLnJvdyk7XHJcblx0XHR9XHJcblxyXG5cdFx0YXdhaXQgdGhpcy5zYXZlQ29uZmlnKCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyByZW1vdmUoY29udHJvbGxlcikge1xyXG5cdFx0Y29uc3QgaW5kZXggPSBjb250cm9sbGVyLmluZGV4O1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXRzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG5cdFx0Y29udHJvbGxlci5kZXN0cm95KCk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IE1hdGgubWF4KDAsIGluZGV4IC0gMSksIGlpID0gdGhpcy5zZWFyY2hUYXJnZXRDb250cm9sbGVycy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XHJcblx0XHRcdGNvbnN0IGMgPSB0aGlzLnNlYXJjaFRhcmdldENvbnRyb2xsZXJzW2ldO1xyXG5cdFx0XHRpZiAoYyAhPT0gbnVsbCkgeyBjLnVwZGF0ZUluZGV4KGkpOyB9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVTZWFyY2hUYXJnZXRDb3VudCgpO1xyXG5cclxuXHRcdGF3YWl0IHRoaXMuc2F2ZUNvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2VhcmNoVGFyZ2V0Q291bnQoKSB7XHJcblx0XHRpZiAodGhpcy5oaWRlSWZFbXB0eU5vZGUgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLmhpZGVJZkVtcHR5Tm9kZS5zdHlsZS5kaXNwbGF5ID0gKHRoaXMuc2VhcmNoVGFyZ2V0Q29udHJvbGxlcnMubGVuZ3RoID4gMCA/IFwiXCIgOiBcIm5vbmVcIik7XHJcblx0fVxyXG5cclxuXHRhc3luYyBzYXZlQ29uZmlnKCkge1xyXG5cdFx0dGhpcy5jb25maWcuc2F2ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU2V0dGluZ3NTZWFyY2hUYXJnZXRDb250cm9sbGVyIHtcclxuXHRjb25zdHJ1Y3RvcihwYXJlbnQsIHNlYXJjaFRhcmdldCwgaW5kZXgpIHtcclxuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXQgPSBzZWFyY2hUYXJnZXQ7XHJcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XHJcblxyXG5cdFx0dGhpcy5ob29rZWRFdmVudHMgPSBbXTtcclxuXHRcdHRoaXMucm93ID0gdGhpcy5wYXJlbnQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0dGhpcy5wYXJlbnQuc2VhcmNoVGFyZ2V0UGFyZW50LmFwcGVuZENoaWxkKHRoaXMucm93KTtcclxuXHJcblx0XHR0aGlzLnJlbW92ZUJ1dHRvbiA9IHRoaXMucm93LnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtcmVtb3ZlLWJ1dHRvblwiKTtcclxuXHRcdHRoaXMubW92ZVVwQnV0dG9uID0gdGhpcy5yb3cucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1tb3ZlLXVwLWJ1dHRvblwiKTtcclxuXHRcdHRoaXMubW92ZURvd25CdXR0b24gPSB0aGlzLnJvdy5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLW1vdmUtZG93bi1idXR0b25cIik7XHJcblx0XHR0aGlzLnRpdGxlRmllbGQgPSB0aGlzLnJvdy5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLXRpdGxlLWlucHV0XCIpO1xyXG5cdFx0dGhpcy51cmxGaWVsZCA9IHRoaXMucm93LnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtdXJsLWlucHV0XCIpO1xyXG5cdFx0dGhpcy5lbmFibGVkQ2hlY2tib3ggPSB0aGlzLnJvdy5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLWVuYWJsZWQtaW5wdXRcIik7XHJcblxyXG5cdFx0dGhpcy50aXRsZUZpZWxkLnZhbHVlID0gKHR5cGVvZihzZWFyY2hUYXJnZXQudGl0bGUpID09PSBcInN0cmluZ1wiID8gc2VhcmNoVGFyZ2V0LnRpdGxlIDogXCJcIik7XHJcblx0XHR0aGlzLnVybEZpZWxkLnZhbHVlID0gKHR5cGVvZihzZWFyY2hUYXJnZXQudXJsKSA9PT0gXCJzdHJpbmdcIiA/IHNlYXJjaFRhcmdldC51cmwgOiBcIlwiKTtcclxuXHRcdHRoaXMuZW5hYmxlZENoZWNrYm94LmNoZWNrZWQgPSAhIXNlYXJjaFRhcmdldC5lbmFibGVkO1xyXG5cclxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5faG9vayh0aGlzLnJlbW92ZUJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLnJlbW92ZSgpKTtcclxuXHRcdHRoaXMuX2hvb2sodGhpcy5tb3ZlVXBCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5tb3ZlVXAoKSk7XHJcblx0XHR0aGlzLl9ob29rKHRoaXMubW92ZURvd25CdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5tb3ZlRG93bigpKTtcclxuXHRcdHRoaXMuX2hvb2sodGhpcy50aXRsZUZpZWxkLCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7IHNlbGYuc2V0VGl0bGUodGhpcy52YWx1ZSk7IH0pO1xyXG5cdFx0dGhpcy5faG9vayh0aGlzLnVybEZpZWxkLCBcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7IHNlbGYuc2V0VXJsKHRoaXMudmFsdWUpOyB9KTtcclxuXHRcdHRoaXMuX2hvb2sodGhpcy5lbmFibGVkQ2hlY2tib3gsIFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHsgc2VsZi5zZXRFbmFibGVkKHRoaXMuY2hlY2tlZCk7IH0pO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlSW5kZXgoaW5kZXgpO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLnJvdyA9PT0gbnVsbCkgeyByZXR1cm47IH1cclxuXHJcblx0XHRmb3IgKGNvbnN0IGluZm8gb2YgdGhpcy5ob29rZWRFdmVudHMpIHtcclxuXHRcdFx0aW5mby5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoaW5mby5ldmVudCwgaW5mby5jYWxsYmFjaywgZmFsc2UpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ob29rZWRFdmVudHMgPSBbXTtcclxuXHJcblx0XHR0aGlzLnJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucm93KTtcclxuXHRcdHRoaXMucm93ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHJlbW92ZSgpIHtcclxuXHRcdHRoaXMucGFyZW50LnJlbW92ZSh0aGlzKTtcclxuXHR9XHJcblxyXG5cdG1vdmVVcCgpIHtcclxuXHRcdHRoaXMucGFyZW50Lm1vdmUodGhpcywgLTEpO1xyXG5cdH1cclxuXHJcblx0bW92ZURvd24oKSB7XHJcblx0XHR0aGlzLnBhcmVudC5tb3ZlKHRoaXMsIDEpO1xyXG5cdH1cclxuXHJcblx0c2V0VGl0bGUodmFsdWUpIHtcclxuXHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSBcInN0cmluZ1wiKSB7IHJldHVybjsgfVxyXG5cdFx0dGhpcy5zZWFyY2hUYXJnZXQudGl0bGUgPSB2YWx1ZTtcclxuXHRcdHRoaXMucGFyZW50LnNhdmVDb25maWcoKTtcclxuXHR9XHJcblxyXG5cdHNldFVybCh2YWx1ZSkge1xyXG5cdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09IFwic3RyaW5nXCIpIHsgcmV0dXJuOyB9XHJcblx0XHR0aGlzLnNlYXJjaFRhcmdldC51cmwgPSB2YWx1ZTtcclxuXHRcdHRoaXMucGFyZW50LnNhdmVDb25maWcoKTtcclxuXHR9XHJcblxyXG5cdHNldEVuYWJsZWQodmFsdWUpIHtcclxuXHRcdHRoaXMuc2VhcmNoVGFyZ2V0LmVuYWJsZWQgPSAhIXZhbHVlO1xyXG5cdFx0dGhpcy5wYXJlbnQuc2F2ZUNvbmZpZygpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlSW5kZXgoaW5kZXgpIHtcclxuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHRcdHRoaXMubW92ZVVwQnV0dG9uLmRpc2FibGVkID0gKGluZGV4IDw9IDApO1xyXG5cdFx0dGhpcy5tb3ZlRG93bkJ1dHRvbi5kaXNhYmxlZCA9IChpbmRleCA+PSB0aGlzLnBhcmVudC5zZWFyY2hUYXJnZXRzLmxlbmd0aCAtIDEpO1xyXG5cdH1cclxuXHJcblx0X2hvb2sobm9kZSwgZXZlbnQsIGNhbGxiYWNrKSB7XHJcblx0XHR0aGlzLmhvb2tlZEV2ZW50cy5wdXNoKHsgbm9kZSwgZXZlbnQsIGNhbGxiYWNrIH0pO1xyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgZmFsc2UpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHYpIHtcclxuXHRyZXR1cm4gKHYgIT09IG51bGwgJiYgdHlwZW9mKHYpID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHYpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGluaygpIHtcclxuXHRzZXR0aW5ncy5hZGRMaW5rKCk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0c2V0dGluZ3MuaW5pdGlhbGl6ZSgpO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uID0gc2V0dGluZ3MuYWRkU2VjdGlvbihcIlNlYXJjaCBMaW5rc1wiLCBcInNlYXJjaC1saW5rc1wiLCAzKTtcclxuXHRpZiAoc2VjdGlvbiAhPT0gbnVsbCkge1xyXG5cdFx0Y29uc3QgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xyXG5cdFx0Y29uc3QgY29uZmlnVmFsdWUgPSBhd2FpdCBjb25maWcuZ2V0KCk7XHJcblx0XHRzZXR1cFNldHRpbmdzKGNvbmZpZywgY29uZmlnVmFsdWUsIHNlY3Rpb24pO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBTZXR0aW5ncyhjb25maWcsIGNvbmZpZ1ZhbHVlLCBjb250YWluZXIpIHtcclxuXHRpZiAoc2V0dGluZ3NDb250cm9sbGVyICE9PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRjb250YWluZXIuaW5uZXJIVE1MID0gcmVxdWlyZShcIi4vc2V0dGluZ3MuaHRtbFwiKTtcclxuXHJcblx0Y29uc3QgdGVtcGxhdGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWVudHJ5XCIpO1xyXG5cdGNvbnN0IHBhcmVudCA9IHRlbXBsYXRlLnBhcmVudE5vZGU7XHJcblx0Y29uc3QgYWRkQnV0dG9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIueC1zZWFyY2gtbGlua3MtYWRkLWJ1dHRvblwiKTtcclxuXHRjb25zdCByZXNldEJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLngtc2VhcmNoLWxpbmtzLXJlc2V0LWxpbmtcIik7XHJcblx0Y29uc3QgaGlkZU5vZGUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi54LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWNvbnRhaW5lclwiKTtcclxuXHRwYXJlbnQucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xyXG5cclxuXHRzZXR0aW5nc0NvbnRyb2xsZXIgPSBuZXcgU2V0dGluZ3NDb250cm9sbGVyKGNvbmZpZywgY29uZmlnVmFsdWUsIHRlbXBsYXRlLCBwYXJlbnQsIGFkZEJ1dHRvbiwgcmVzZXRCdXR0b24sIGhpZGVOb2RlKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGFkZExpbmssXHJcblx0aW5pdGlhbGl6ZVxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW5wdXQueC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uW3R5cGU9YnV0dG9uXXtkaXNwbGF5OmlubGluZS1ibG9jaztib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7bWFyZ2luOjA7cGFkZGluZzowO2xpbmUtaGVpZ2h0OjEuODc1ZW07Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtc2l6ZTppbmhlcml0O2ZvbnQtd2VpZ2h0OjcwMDt3aWR0aDoxLjg3NWVtO2hlaWdodDoxLjg3NWVtO21pbi1oZWlnaHQ6MDtiYWNrZ3JvdW5kLWNvbG9yOiM0MzQ2NGU7dGV4dC1hbGlnbjpjZW50ZXI7Y3Vyc29yOnBvaW50ZXJ9OnJvb3QueC1pcy1kYXJrIGlucHV0Lngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvblt0eXBlPWJ1dHRvbl06ZGlzYWJsZWR7Y29sb3I6cmdiYSgyNDEsMjQxLDI0MSwuNSk7LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6cmdiYSgyNDEsMjQxLDI0MSwuNSl9OnJvb3Q6bm90KC54LWlzLWRhcmspIGlucHV0Lngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvblt0eXBlPWJ1dHRvbl17YmFja2dyb3VuZC1jb2xvcjojZTNlMGQxfWlucHV0Lngtc2VhcmNoLWxpbmtzLXNldHRpbmdzLWJ1dHRvblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9aW5wdXQueC1zZWFyY2gtbGlua3Mtc2V0dGluZ3MtYnV0dG9uW3R5cGU9YnV0dG9uXStpbnB1dC54LXNlYXJjaC1saW5rcy1zZXR0aW5ncy1idXR0b25bdHlwZT1idXR0b25de21hcmdpbi1sZWZ0Oi4yNWVtfWlucHV0Lngtc2V0dGluZ3Mtc2VjdGlvbi1pbnB1dFt0eXBlPXRleHRdLngtc2VhcmNoLWxpbmtzLXVybC1pbnB1dHt3aWR0aDoxMDAlfS54LXNlYXJjaC1saW5rcy1zZWFyY2gtdGFyZ2V0LWNvbnRhaW5lcnt3aWR0aDoxMDAlfS54LXNlYXJjaC1saW5rcy1yZXNldC1saW5re3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7Y3Vyc29yOnBvaW50ZXJ9Lngtc2VhcmNoLWxpbmtzLXJlc2V0LWxpbms6bm90KDpob3Zlcil7b3BhY2l0eTouNX1cIjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBhcGlTdHlsZSA9IG51bGw7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0SWQoaWQpIHtcclxuXHRyZXR1cm4gYCR7aWR9LXN0eWxlc2hlZXRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdHlsZXNoZWV0KGlkKSB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElkKGlkKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1N0eWxlc2hlZXQoaWQpIHtcclxuXHRyZXR1cm4gISFnZXRTdHlsZXNoZWV0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkU3R5bGVzaGVldChzb3VyY2UsIGlkKSB7XHJcblx0aWYgKGFwaVN0eWxlID09PSBudWxsKSB7IGFwaVN0eWxlID0gcmVxdWlyZShcIi4vYXBpL3N0eWxlXCIpOyB9XHJcblx0YXBpU3R5bGUuc2V0RG9jdW1lbnREYXJrRmxhZygpO1xyXG5cclxuXHRjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZS50ZXh0Q29udGVudCA9IHNvdXJjZTtcclxuXHRpZiAodHlwZW9mKGlkKSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0c3R5bGUuaWQgPSBnZXRJZChpZCk7XHJcblx0fVxyXG5cdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG5cdHJldHVybiBzdHlsZTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGhhc1N0eWxlc2hlZXQsXHJcblx0Z2V0U3R5bGVzaGVldCxcclxuXHRhZGRTdHlsZXNoZWV0XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbmNvbnN0IHhQcmVmaXggPSBcIiMheFwiO1xyXG5jb25zdCBzZXBhcmF0b3IgPSBcIi9cIjtcclxuY29uc3Qgcm91dGVzID0gW107XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXIoYWRkSGlzdG9yeSkge1xyXG5cdGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0aWYgKGFkZEhpc3RvcnkpIHtcclxuXHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBcIlwiLCB1cmwpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZShwYXRoKSB7XHJcblx0cmV0dXJuIHBhdGggPyBgJHt4UHJlZml4fSR7c2VwYXJhdG9yfSR7cGF0aH1gIDogeFByZWZpeDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUm91dGUobWF0Y2gsIGNhbGxiYWNrKSB7XHJcblx0Y29uc3Qgcm91dGUgPSB7IG1hdGNoLCBjYWxsYmFjayB9O1xyXG5cdHJvdXRlcy5wdXNoKHJvdXRlKTtcclxuXHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBvblVybEZyYWdtZW50Q2hhbmdlZCwgZmFsc2UpO1xyXG5cdH1cclxuXHR0ZXN0Um91dGVzKFtyb3V0ZV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVSb3V0ZShtYXRjaCwgY2FsbGJhY2spIHtcclxuXHRmb3IgKGxldCBpID0gMCwgaWkgPSByb3V0ZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xyXG5cdFx0Y29uc3Qgcm91dGUgPSByb3V0ZXNbaV07XHJcblx0XHRpZiAocm91dGUubWF0Y2ggPT09IG1hdGNoICYmIHJvdXRlLmNhbGxiYWNrID09PSBjYWxsYmFjaykge1xyXG5cdFx0XHRyb3V0ZXMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRpZiAocm91dGVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgb25VcmxGcmFnbWVudENoYW5nZWQsIGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRYRnJhZ21lbnQoKSB7XHJcblx0Y29uc3QgZnJhZ21lbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuXHRyZXR1cm4gKFxyXG5cdFx0IWZyYWdtZW50IHx8XHJcblx0XHRmcmFnbWVudC5sZW5ndGggPCB4UHJlZml4Lmxlbmd0aCB8fFxyXG5cdFx0ZnJhZ21lbnQuc3Vic3RyKDAsIHhQcmVmaXgubGVuZ3RoKSAhPT0geFByZWZpeCB8fFxyXG5cdFx0KGZyYWdtZW50Lmxlbmd0aCA+IHhQcmVmaXgubGVuZ3RoICYmIGZyYWdtZW50W3hQcmVmaXgubGVuZ3RoXSAhPT0gc2VwYXJhdG9yKSkgP1xyXG5cdFx0bnVsbCA6XHJcblx0XHRmcmFnbWVudC5zdWJzdHIoeFByZWZpeC5sZW5ndGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0Um91dGVzKHJvdXRlcykge1xyXG5cdGNvbnN0IGZyYWdtZW50ID0gZ2V0WEZyYWdtZW50KCk7XHJcblx0aWYgKGZyYWdtZW50ID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xyXG5cdFx0Y29uc3QgbWF0Y2ggPSByb3V0ZS5tYXRjaC5leGVjKGZyYWdtZW50KTtcclxuXHRcdHJvdXRlLmNhbGxiYWNrKG1hdGNoLCBmcmFnbWVudCk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblVybEZyYWdtZW50Q2hhbmdlZCgpIHtcclxuXHR0ZXN0Um91dGVzKHJvdXRlcyk7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjbGVhcjogY2xlYXIsXHJcblx0Y3JlYXRlOiBjcmVhdGUsXHJcblx0YWRkUm91dGU6IGFkZFJvdXRlLFxyXG5cdHJlbW92ZVJvdXRlOiByZW1vdmVSb3V0ZVxyXG59O1xyXG4iXX0=
