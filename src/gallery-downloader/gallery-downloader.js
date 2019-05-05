"use strict";

const fetch = require("../fetch");
const galleryDetails = require("../api/gallery-details");
const stylesheetId = "x-gallery-downloader-style";


function createStylesheet() {
	const id = stylesheetId;
	const style = require("../style");
	if (!style.hasStylesheet(id)) {
		const src = require("./style/gallery-downloader.css");
		style.addStylesheet(src, id);
	}
}

function createGalleryDownloaderUI(container) {
	createStylesheet();
	container.innerHTML = require("./html/gallery-downloader.html");
}


function toggleVisibility() {
	const details = galleryDetails.get(false);
	if (details === null) { return; }

	const containerName = "gallery-downloader";
	let container = details.getContentContainer(containerName);
	let visible;
	if (container === null) {
		container = details.addContentContainer("gallery-downloader");
		if (container === null) { return; }
		createGalleryDownloaderUI(container);
		visible = true;
	} else {
		visible = (container.style.display === "none");
	}

	container.style.display = (visible ? "" : "none");
}


module.exports = {
	toggleVisibility
};
