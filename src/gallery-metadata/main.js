"use strict";

const ready = require("../ready");
const pageType = require("../api/page-type");

let downloadDataUrl = null;


function setupDownloadLink() {
	const isDark = require("../style").isDark();

	const parent = document.querySelector("#gd5");
	if (parent === null) { return; }

	const linkP = document.createElement("p");
	linkP.className = "g2 gsp";

	const img = document.createElement("img");
	img.src = (isDark ? "https://exhentai.org/img/mr.gif" : "https://ehgt.org/g/mr.gif");
	linkP.appendChild(img);

	linkP.appendChild(document.createTextNode(" "));

	const link = document.createElement("a");
	link.href = "#"
	link.textContent = "Metadata JSON";
	link.setAttribute("download", "info.json");
	linkP.appendChild(link);

	link.addEventListener("click", onDownloadLinkClicked, false);
	link.addEventListener("auxclick", onDownloadLinkClicked, false);

	parent.appendChild(linkP);
}

function createDownloadDataUrl(link) {
	const getGalleryInfo = require("../api/gallery-info/get-from-html");
	let info = null;
	try {
		info = getGalleryInfo(document);
	} catch (e) {
		console.error(e);
	}
	if (info === null) { return null; }

	const infoString = JSON.stringify(info.toCommonJson(), null, "  ");
	const blob = new Blob([ infoString ], { type: "application/json" });
	const url = URL.createObjectURL(blob);

	link.setAttribute("href", url);

	return url;
}

function onDownloadLinkClicked(e) {
	if (downloadDataUrl === null) {
		downloadDataUrl = createDownloadDataUrl(this);
		if (downloadDataUrl === null) {
			console.error("Failed to create download data");
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
	}
}


function main() {
	const currentPageType = pageType.get(document, location);
	if (currentPageType !== "gallery") { return; }

	setupDownloadLink();
}


ready.onReady(main);
