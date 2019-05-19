// ==UserScript==
// @name        x/favorites
// @version     1.0.0
// @author      dnsev-h
// @namespace   dnsev-h
// @description Improvements to adding favorites
// @run-at      document-start
// @include     https://exhentai.org/*
// @include     https://e-hentai.org/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABoVBMVEUAAAA0NTs3Nzc0NDsxMUE0NTs0NTszNDs0Njs0NTs0NDw0NTszNTszNTs1NTs0Njs1NTwzMzk0NDszNTszNDo0NDszNTszNDo0NDszNDs0NDsxNDo0NTs0NTszNDs0NTs0NDszNTs0NTs1NTwzMzo0NTszNTs1NTs1NTozNTo0NjrmXu////80NTvjXutAN0iBR4n3y/o5NkD//P/+9f70t/ijT6w8N0L2wfnwnvXvl/XqefLoavDmYO/UWdzMWNTCVstdPmT98f775fz40/v2x/n2xfntivTpc/DcW+XaW+LXWuDWWt+/VcenT7BNO1RKOlH87f376P364fz4zvrzsPfyqPbwo/XnY/DnZ+/gaOneXOjAVci1U72tUbaGSI59RYR5RIFvQ3dsQnRjP2tUPVtQO1dEOEz52fv1vvn0u/jztPjwm/Xsg/Prh/LobvDpju/kguzhcOnRWdm7VMSyUrqcTaWZTKGWTJ6US5ySSpqNSZV0Q3toQW9SPFn63PzulPTrgfPuqvLkd+viderlpeniiujhk+bGV8+OSpZWPV6jFuz0AAAAK3RSTlMA/AO/B/LXg2NGPfXfamZfJhCnpJmId3BYSyIU7OfQy7mvlBkLxI1QNDKds9RbVAAAAxJJREFUSMeNlmdb4lAQhYksUkTE3vuurnsyCYKCHey9997L2nvX7fVXbxJyI1Hv6vuN5zmHmbkzc28sz5PscngczmTLK8kqJA3hg/c18twi+ntx2tfT178YEuxxL+pL3aEgdLqXqOilvJzxcgTYrx5rq6mdAoJ+65v/ybMLaXAOx6OiRksnsECpfHlcCd0HJRxXiYwd4IIyuQYH3UgAPokPVAMrCTk8Q8o6FL6IseyiT7byDKlDUJgwGaqmEaQkjqGclsPAV9FEDdDs5p1UokA+/DQbAvU45deda13HjGimErjLf8tz2P2zGH3kqMcceXiG9xTE5NMQzfEWHvGr+BUjHu7oqFJCDJCLZyhYwY+Rj7p8pA7AwXA7pM0UboRbHEzVRfVj01DZFbvgS+CV/a4ZQAfrgEaDMiARbvOSyDcLSc2pvQs6gapGbBRxD1bYbEKtqLCHKI0B8RA3AneTSkISahS98rdRupRo6Kdys+xhWgrXgFbt+HUmFbMkySUxam+KjfIzdKfwRylToZZlpLq/YzWmd9kJsu9yhdK1Hzk0gE7V0MUCRN1XgpGE19bcA8AnaN10Uj/G1aZBZyu6eQvkNRZN7oWCNBSfnlaWZqU+tCmSbdaFgGpoR4SyWbkJi9CYXxsckjcHN4AWRbKPKHXRpqOXEnVDBZ3BzIw6ddCp1Axt6DEMTorAzKGWNMtIH/EmchjD0AQzE9rWRKllm31CWWyRqRtmttUUGJ9bVcM45sjJLncKg2Gk3QmDKXV263BOpUYN/U8Mo9Bhrf6GZeMCLBUuYaY6sIdYxsUWwOe3uR52xsw0q9hoxQ6A3g12ZXroqheYbQpHJDzLREsDFBZt7JZPJR2OYesIKrduC6PCk5GR6Sj241k6j9AdBgb86RYzZTKeZQYn9xQK0ZPHy86JgAE5L9Fuz376AD2eETbEZM3h3KsLeET3mW+Q3J44zptoW0YM4eDSOpGtOIv/tqf7f0OjZ/76TibKK85wKWo+ue7Q0vm1b3WISChIS/K+4jMjLY+E/ILUTNdby2tJZjlw+AeRxP9HDmKpUQAAAABJRU5ErkJggg==
// @icon64      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABnlBMVEUAAAA0NTs0NDs0NDs0NTs1NTs0NTozMzlLS0s0NTs0NDszNTs2NjsAAAA0NTs0NTs0NTs0NTs0NTszNTszNTo0NTs0NTwyNjwwMD80NTs0NTs0NTs0NTs0NDs0NTs0NTo0Njs1NTozNTozNTszNjsxNTkzNTs0NTo0NTo0NTs0NDsyNjszNTzmXu////80NTs+N0X87P3lXu7+9f6pULI5NkA1NTz//P/++f774/zrfvLnYu+6VMPzrvfulPTqd/LiXerCVsqfTadoQXBWPV5FOUz41Pv3yvrpb/HnZfDfXOnUWd3NWNWNSZV9RoR2RH5xQnhdPmVSO1k2NT386f363vz1v/nyqvfwoPbpcvHoavDoZ/DbW+TQWdnGV8+2U76xUrqUS5yER4xJOlFCOEn87/3xpvbuj/TshfP40Pr2xfn0uPjzsvfwmvXdXOa+VMeiTqqcTaWZTKGHSI+ARohtQnVjQGpOO1b98P352PvtivPsgvPpePHpg/DnfO/iaOrXW+DDVsyjT6yWS5/98P752fv0uvjrj/HlhezJWNI3l8R2AAAALXRSTlMAu5FYyidEBwP7wC0hAvXv66V/dG1gURcL592ujNi1meCEZ0wzENDOn5VJPzn5BnicAAAEYElEQVRYw73X51sTQRAG8IQEJPQiKM3e9d03JCSABAgkkd5Bkd5UpCioiL3X/9rbC3fZJAcrfvD3DR5m7nZmZ57DpXGq8NKlwlOuf3Oiuq6Mptqcwn+Iv1hLMhGPj8XXSJYXHffxZ8l49wCkwMKKn6VVx4o/XUB/dwC2TyNkTv4x4t1cXYDh/nrHm05ITSGWF/9teGUNV+eBmfZJIb1qnwHw1M/rfxdeUUq+HAR+BoXlW0cywwWXXm6tER4B0CFUm/IU4ZJCffVrOdZlnr5FpNkAsEKvtpAXOBaFtCEy/AD691mpS5DDHUh9LSLTIyASLsnVJKjnV0jrIktjHzDMAk2Cao7PQSmhagt4kuCNoxPkX+Xa8FPgl0OCll5gl95izQC7SUbwUTi4C0RXWa29CW52A40OCZo7gS9s0LbyJF8Ad4WDHiCwr3+Fm4yrbVDdBrq1jXDll4UHlTOoHgP9fhbqb9NKdoLm1tZm8xVWeFaXwMMRBISYVMJbt/uA3juyCvMTJZc1CSr5HIHG6V47PDgN02yj6ARi1K2381wG2vDOvsSdOPBQ3oUmFmj7OAxDuxV/H5ZOEewzyhgu0lwl+iMAPkxZ8SnNYhoYYaW2DaEVOVN35Pk3t5ESFK3AIq9oEhRX+DgO4IGQ3sDWZnTyHQJrLNJf5z3gfnII26DUQIh78gwndQnO8pm1FO4gZdr4eUr24Ux24TxVN5Uxa+ACsCmke0h5LQwz+BQuzRjJvKs0nMuzlzP9AWDKGiDLW2s5jmfMQwWZGB2O05dnN3LcrJjhFVJahdQui1CVXrHQsyiAIdYcfEzcYMx63gZst+2tsMx6Jb7IN7EEKRDjdWWnPBRSB0zK1ZwClliXVvEXSBoMhRu8XrfbWyOb0GNO8QxsU8L0APhMr3JrSsPzODA0wQNLwGRGE63pDAIDPJdKUMhx2KLzC12Gz4NR9AlpW70ESS3AE5ap62MUTt6bfzwL2/eMBOr6cGLWsCftGts1mFMTnOdXOLmb0YMte70B82xQZ7cbTh7LXdCm3ALjF9ZwdNGrJtiFk1ZrDlIpzJuY3Grl6RvQSdBo2CzS9PUcTNcQK9SPkmE4aZG3PkPbZHKYYvQok8gxOGkUD2adWtM8i4CfvtQ0nfaF+uFgK7iOLLfNGgaWRiaUd3Af0oY2ZOuVJ5C+KH2oZmIQGqk3eA1TlKUuWx1D8b3R0djY+Kp/B0dqD/bCNMca5esyp4SWJqiyu/AeSd3pezU/N89wKdfNRRzl3gdgINKPQJOfF10O3IzgCDMfgYUEJxIhKjtNdUbzBoDx6HMlDF/xOH/tlWtqMLBHXjvhunzCdYgKDuFwg8Mhlnk0X7oxHOL37ssJ+spPab5T6Y8iS39kObZGsiRH/89fAXcyTr30fCxEQ+01z2mX3kWuDlixc4vLowkZ6/PmVFnP1il2c21osSvSNDS6H5bBNXWVt5Sa612uo6W0oN5T5Dq+W/VnCtzlFZ7cYtd/8Adr2MpDGqTx0AAAAABJRU5ErkJggg==
// @homepage    https://dnsev-h.github.io/x/
// @supportURL  https://github.com/dnsev-h/x/issues
// @updateURL   https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-favorites.meta.js
// @downloadURL https://raw.githubusercontent.com/dnsev-h/x/master/builds/x-favorites.user.js
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

},{}],3:[function(require,module,exports){
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

},{"../javascript":6}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

const ready = require("../ready");
const pageType = require("../api/page-type");


function addTextToNode(parentNode, text) {
	const lastChild = parentNode.lastChild;
	if (lastChild !== null && lastChild.nodeType === Node.TEXT_NODE) {
		lastChild.nodeValue += text;
	} else {
		parentNode.appendChild(document.createTextNode(text));
	}
}

function addFavoriteLink(identifier) {
	const parent = document.querySelector("body>p.ip");
	if (parent === null) { return; }

	const urls = require("../api/urls");
	const popups = require("../api/popups");

	addTextToNode(parent, " [");

	const linkId = "x-favorites-link";
	const favoriteUrl = urls.favoritesPopup(identifier.id, identifier.token);
	const link = document.createElement("a");
	link.id = linkId;
	link.textContent = "Favorite";
	link.setAttribute("href", favoriteUrl);
	parent.appendChild(link);
	popups.showOnClick(`#${linkId}`, favoriteUrl, popups.sizes.favorites);

	addTextToNode(parent, "]");
}


function main() {
	const currentPageType = pageType.get(document, location);
	if (currentPageType !== "image") { return; }

	const link = document.querySelector("#i5>.sb>a");
	if (link === null) { return; }

	const GalleryIdentifier = require("../api/gallery-identifier").GalleryIdentifier;
	const identifier = GalleryIdentifier.createFromUrl(link.href || "");
	if (identifier === null) { return; }

	addFavoriteLink(identifier);
}


ready.onReady(main);

},{"../api/gallery-identifier":1,"../api/page-type":2,"../api/popups":3,"../api/urls":4,"../ready":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBpL2dhbGxlcnktaWRlbnRpZmllci5qcyIsInNyYy9hcGkvcGFnZS10eXBlLmpzIiwic3JjL2FwaS9wb3B1cHMuanMiLCJzcmMvYXBpL3VybHMuanMiLCJzcmMvZmF2b3JpdGVzL21haW4uanMiLCJzcmMvamF2YXNjcmlwdC5qcyIsInNyYy9yZWFkeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY2xhc3MgR2FsbGVyeUlkZW50aWZpZXIge1xyXG5cdGNvbnN0cnVjdG9yKGlkLCB0b2tlbikge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy50b2tlbiA9IHRva2VuO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZUZyb21VcmwodXJsKSB7XHJcblx0XHRjb25zdCBtYXRjaCA9IC9eLio/XFwvXFwvLis/XFwvKC4qPykoXFw/Lio/KT8oIy4qPyk/JC8uZXhlYyh1cmwpO1xyXG5cdFx0aWYgKG1hdGNoID09PSBudWxsKSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdFx0Y29uc3QgcGF0aCA9IG1hdGNoWzFdLnJlcGxhY2UoL15cXC8rfFxcLyskL2csIFwiXCIpLnJlcGxhY2UoL1xcL3syLH0vZywgXCIvXCIpLnNwbGl0KFwiL1wiKTtcclxuXHRcdGlmIChwYXRoWzBdICE9PSBcImdcIiB8fCBwYXRoLmxlbmd0aCA8IDMpIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0XHRjb25zdCBpZCA9IHBhcnNlSW50KHBhdGhbMV0sIDEwKTtcclxuXHRcdHJldHVybiAoTnVtYmVyLmlzTmFOKGlkKSA/IG51bGwgOiBuZXcgR2FsbGVyeUlkZW50aWZpZXIoaWQsIHBhdGhbMl0pKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRHYWxsZXJ5SWRlbnRpZmllclxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNvbnN0IG92ZXJyaWRlQXR0cmlidXRlTmFtZSA9IFwiZGF0YS14LW92ZXJyaWRlLXBhZ2UtdHlwZVwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNldE92ZXJyaWRlKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSwgdmFsdWUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG92ZXJyaWRlQXR0cmlidXRlTmFtZSk7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPdmVycmlkZSgpIHtcclxuXHRjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUob3ZlcnJpZGVBdHRyaWJ1dGVOYW1lKTtcclxuXHRyZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldChkb2MsIGxvY2F0aW9uKSB7XHJcblx0Y29uc3Qgb3ZlcnJpZGVUeXBlID0gZ2V0T3ZlcnJpZGUoKTtcclxuXHRpZiAob3ZlcnJpZGVUeXBlICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gb3ZlcnJpZGVUeXBlO1xyXG5cdH1cclxuXHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaGJveFwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwic2VhcmNoXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9ZmF2Y2F0XVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiZmF2b3JpdGVzXCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNpMT5oMVwiKSAhPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuIFwiaW1hZ2VcIjtcclxuXHR9XHJcblx0aWYgKGRvYy5xdWVyeVNlbGVjdG9yKFwiLmdtIGgxI2duXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJnYWxsZXJ5XCI7XHJcblx0fVxyXG5cdGlmIChkb2MucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlX291dGVyXCIpICE9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gXCJzZXR0aW5nc1wiO1xyXG5cdH1cclxuXHJcblx0bGV0IG4gPSBkb2MucXVlcnlTZWxlY3RvcihcImJvZHk+LmQ+cFwiKTtcclxuXHRpZiAoXHJcblx0XHQobiAhPT0gbnVsbCAmJiAvZ2FsbGVyeVxccytoYXNcXHMrYmVlblxccytyZW1vdmVkL2kudGVzdChuLnRleHRDb250ZW50KSkgfHxcclxuXHRcdGRvYy5xdWVyeVNlbGVjdG9yKFwiLmV6ZV9kZ2FsbGVyeV90YWJsZVwiKSAhPT0gbnVsbCkgeyAvLyBlemUgcmVzdXJyZWN0aW9uXHJcblx0XHRyZXR1cm4gXCJkZWxldGVkR2FsbGVyeVwiO1xyXG5cdH1cclxuXHJcblx0biA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiaW1nW3NyY11cIik7XHJcblx0aWYgKG4gIT09IG51bGwgJiYgbG9jYXRpb24gIT09IG51bGwpIHtcclxuXHRcdGNvbnN0IHAgPSBsb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdGlmIChcclxuXHRcdFx0bi5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT09IGxvY2F0aW9uLmhyZWYgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgMykgIT09IFwiL3QvXCIgJiZcclxuXHRcdFx0cC5zdWJzdHIoMCwgNSkgIT09IFwiL2ltZy9cIikge1xyXG5cdFx0XHRyZXR1cm4gXCJwYW5kYVwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gVW5rbm93blxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Z2V0LFxyXG5cdGdldE92ZXJyaWRlLFxyXG5cdHNldE92ZXJyaWRlXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZnVuY3Rpb24gc2hvd09uQ2xpY2soc2VsZWN0b3IsIHVybCwgc2l6ZSkge1xyXG5cdGxldCB3aWR0aCA9IDY3NTtcclxuXHRsZXQgaGVpZ2h0ID0gNDE1O1xyXG5cdGlmIChzaXplICE9PSBudWxsICYmIHR5cGVvZihzaXplKSA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0KHt3aWR0aCwgaGVpZ2h0fSA9IHNpemUpO1xyXG5cdH1cclxuXHJcblx0cmVxdWlyZShcIi4uL2phdmFzY3JpcHRcIikuaW5qZWN0KChzZWxlY3RvciwgdXJsLCB3aWR0aCwgaGVpZ2h0KSA9PiB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBwb3BVcCh1cmwsIHdpZHRoLCBoZWlnaHQpO1xyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LCBmYWxzZSk7XHJcblx0fSwgWyBzZWxlY3RvciwgdXJsLCB3aWR0aCwgaGVpZ2h0IF0pO1xyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0c2hvd09uQ2xpY2ssXHJcblx0c2l6ZXM6IHtcclxuXHRcdGZhdm9yaXRlczogeyB3aWR0aDogNjc1LCBoZWlnaHQ6IDQxNSB9XHJcblx0fVxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVwbG9hZGVyKHVzZXJuTmFtZSkge1xyXG5cdHJldHVybiBgL3VwbG9hZGVyLyR7dXNlcm5OYW1lfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhdGVnb3J5KGNhdGVnb3J5KSB7XHJcblx0cmV0dXJuIGAvJHtjYXRlZ29yeX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmYXZvcml0ZXNQb3B1cChpZCwgdG9rZW4pIHtcclxuXHRyZXR1cm4gYC9nYWxsZXJ5cG9wdXBzLnBocD9naWQ9JHtpZH0mdD0ke3Rva2VufSZhY3Q9YWRkZmF2YDtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdHVwbG9hZGVyLFxyXG5cdGNhdGVnb3J5LFxyXG5cdGZhdm9yaXRlc1BvcHVwXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuY29uc3QgcmVhZHkgPSByZXF1aXJlKFwiLi4vcmVhZHlcIik7XHJcbmNvbnN0IHBhZ2VUeXBlID0gcmVxdWlyZShcIi4uL2FwaS9wYWdlLXR5cGVcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkVGV4dFRvTm9kZShwYXJlbnROb2RlLCB0ZXh0KSB7XHJcblx0Y29uc3QgbGFzdENoaWxkID0gcGFyZW50Tm9kZS5sYXN0Q2hpbGQ7XHJcblx0aWYgKGxhc3RDaGlsZCAhPT0gbnVsbCAmJiBsYXN0Q2hpbGQubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XHJcblx0XHRsYXN0Q2hpbGQubm9kZVZhbHVlICs9IHRleHQ7XHJcblx0fSBlbHNlIHtcclxuXHRcdHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRmF2b3JpdGVMaW5rKGlkZW50aWZpZXIpIHtcclxuXHRjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keT5wLmlwXCIpO1xyXG5cdGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IHVybHMgPSByZXF1aXJlKFwiLi4vYXBpL3VybHNcIik7XHJcblx0Y29uc3QgcG9wdXBzID0gcmVxdWlyZShcIi4uL2FwaS9wb3B1cHNcIik7XHJcblxyXG5cdGFkZFRleHRUb05vZGUocGFyZW50LCBcIiBbXCIpO1xyXG5cclxuXHRjb25zdCBsaW5rSWQgPSBcIngtZmF2b3JpdGVzLWxpbmtcIjtcclxuXHRjb25zdCBmYXZvcml0ZVVybCA9IHVybHMuZmF2b3JpdGVzUG9wdXAoaWRlbnRpZmllci5pZCwgaWRlbnRpZmllci50b2tlbik7XHJcblx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG5cdGxpbmsuaWQgPSBsaW5rSWQ7XHJcblx0bGluay50ZXh0Q29udGVudCA9IFwiRmF2b3JpdGVcIjtcclxuXHRsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgZmF2b3JpdGVVcmwpO1xyXG5cdHBhcmVudC5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHRwb3B1cHMuc2hvd09uQ2xpY2soYCMke2xpbmtJZH1gLCBmYXZvcml0ZVVybCwgcG9wdXBzLnNpemVzLmZhdm9yaXRlcyk7XHJcblxyXG5cdGFkZFRleHRUb05vZGUocGFyZW50LCBcIl1cIik7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG5cdGNvbnN0IGN1cnJlbnRQYWdlVHlwZSA9IHBhZ2VUeXBlLmdldChkb2N1bWVudCwgbG9jYXRpb24pO1xyXG5cdGlmIChjdXJyZW50UGFnZVR5cGUgIT09IFwiaW1hZ2VcIikgeyByZXR1cm47IH1cclxuXHJcblx0Y29uc3QgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaTU+LnNiPmFcIik7XHJcblx0aWYgKGxpbmsgPT09IG51bGwpIHsgcmV0dXJuOyB9XHJcblxyXG5cdGNvbnN0IEdhbGxlcnlJZGVudGlmaWVyID0gcmVxdWlyZShcIi4uL2FwaS9nYWxsZXJ5LWlkZW50aWZpZXJcIikuR2FsbGVyeUlkZW50aWZpZXI7XHJcblx0Y29uc3QgaWRlbnRpZmllciA9IEdhbGxlcnlJZGVudGlmaWVyLmNyZWF0ZUZyb21VcmwobGluay5ocmVmIHx8IFwiXCIpO1xyXG5cdGlmIChpZGVudGlmaWVyID09PSBudWxsKSB7IHJldHVybjsgfVxyXG5cclxuXHRhZGRGYXZvcml0ZUxpbmsoaWRlbnRpZmllcik7XHJcbn1cclxuXHJcblxyXG5yZWFkeS5vblJlYWR5KG1haW4pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBpbmplY3QoZnVuYywgYXJncykge1xyXG5cdGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBudWxsO1xyXG5cdGlmICghcGFyZW50KSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHRjb25zdCBzY3JpcHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHRjb25zdCBhcmdTdHIgPSAoQXJyYXkuaXNBcnJheShhcmdzKSAmJiBhcmdzLmxlbmd0aCA+IDApID9cclxuXHRcdGAuLi4ke0pTT04uc3RyaW5naWZ5KGFyZ3MsIG51bGwsIFwiXCIpfWAgOlxyXG5cdFx0XCJcIjtcclxuXHRzY3JpcHROb2RlLnRleHRDb250ZW50ID0gYCgke2Z1bmMudG9TdHJpbmcoKX0pKCR7YXJnU3RyfSk7YDtcclxuXHJcblx0cGFyZW50LmFwcGVuZENoaWxkKHNjcmlwdE5vZGUpO1xyXG5cdHBhcmVudC5yZW1vdmVDaGlsZChzY3JpcHROb2RlKTtcclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRpbmplY3RcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5sZXQgaXNSZWFkeVZhbHVlID0gZmFsc2U7XHJcbmxldCBjYWxsYmFja3MgPSBudWxsO1xyXG5sZXQgY2hlY2tJbnRlcnZhbElkID0gbnVsbDtcclxuY29uc3QgY2hlY2tJbnRlcnZhbFJhdGUgPSAyNTA7XHJcblxyXG5cclxuZnVuY3Rpb24gaXNIb29rZWQoKSB7XHJcblx0cmV0dXJuIGNhbGxiYWNrcyAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaG9vaygpIHtcclxuXHRjYWxsYmFja3MgPSBbXTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGNoZWNrSWZSZWFkeSwgZmFsc2UpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGNoZWNrSWZSZWFkeSwgY2hlY2tJbnRlcnZhbFJhdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bmhvb2soKSB7XHJcblx0Y29uc3QgY2JzID0gY2FsbGJhY2tzO1xyXG5cclxuXHRjYWxsYmFja3MgPSBudWxsO1xyXG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjaGVja0lmUmVhZHksIGZhbHNlKTtcclxuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgY2hlY2tJZlJlYWR5LCBmYWxzZSk7XHJcblx0Y2xlYXJJbnRlcnZhbChjaGVja0ludGVydmFsSWQpO1xyXG5cdGNoZWNrSW50ZXJ2YWxJZCA9IG51bGw7XHJcblxyXG5cdGludm9rZShjYnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tzKSB7XHJcblx0Zm9yIChsZXQgY2Igb2YgY2FsbGJhY2tzKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2ggKGUpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVhZHkoKSB7XHJcblx0aWYgKGlzUmVhZHlWYWx1ZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG5cdFx0aWYgKGlzSG9va2VkKCkpIHsgdW5ob29rKCk7IH1cclxuXHRcdGlzUmVhZHlWYWx1ZSA9IHRydWU7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmUmVhZHkoKSB7XHJcblx0aXNSZWFkeSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25SZWFkeShjYWxsYmFjaykge1xyXG5cdGlmIChpc1JlYWR5KCkpIHtcclxuXHRcdGNhbGxiYWNrKCk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIWlzSG9va2VkKCkpIHsgaG9vaygpOyB9XHJcblxyXG5cdGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdG9uUmVhZHk6IG9uUmVhZHksXHJcblx0Z2V0IGlzUmVhZHkoKSB7IHJldHVybiBpc1JlYWR5KCk7IH1cclxufTtcclxuIl19
