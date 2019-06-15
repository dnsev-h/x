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
