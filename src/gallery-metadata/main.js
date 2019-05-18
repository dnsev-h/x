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
		this.setAttribute("href", downloadDataUrl);
	}
}


function main() {
	const currentPageType = pageType.get(document, location);
	if (currentPageType !== "gallery") { return; }

	setupDownloadLink();
}


ready.onReady(main);
