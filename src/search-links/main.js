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
	const m = /^([\w\W]*)\|([\w\W]*)$/.exec(shortTitle);
	return {
		"short-name": encodeURIComponent(shortTitle),
		"short-name1": encodeURIComponent(m !== null ? m[1] : shortTitle),
		"short-name2": encodeURIComponent(m !== null ? m[2] : shortTitle),
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
