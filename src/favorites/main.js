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
