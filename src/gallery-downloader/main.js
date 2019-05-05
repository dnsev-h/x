"use strict";

const ready = require("../ready");


function main() {
	const pageType = require("../api/page-type");
	if (pageType.get(document, location) !== "gallery") { return; }

	const galleryDetails = require("../api/gallery-details");
	const details = galleryDetails.get(true);
	if (details === null) { return; }

	const link = details.addLink("Download Gallery");
	if (link === null) { return; }

	let galleryDownloader = null;
	link.addEventListener("click", (e) => {
		if (galleryDownloader === null) {
			galleryDownloader = require("./gallery-downloader");
		}
		galleryDownloader.toggleVisibility();

		e.preventDefault();
		e.stopPropagation();
		return false;
	}, false);
	link.addEventListener("mousedown", (e) => {
		e.preventDefault();
		return false;
	}, false);
}


ready.onReady(main);
