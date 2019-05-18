"use strict";

const types = require("./types");

const sizeLabelToBytesPrefixes = [ "b", "kb", "mb", "gb" ];


function getGalleryIdentifierAndPageFromUrl(url) {
	const match = /^.*?\/\/.+?\/(.*?)(\?.*?)?(#.*?)?$/.exec(url);
	if (match === null) { return null; }

	const path = match[1].replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/").split("/");
	if (path[0] !== "g" || path.length < 3) { return null; }

	const identifier = new types.GalleryIdentifier(parseInt(path[1], 10), path[2]);
	if (Number.isNaN(identifier.id)) { return null; }

	let page = null;
	if (match[2]) {
		const match2 = /[\?\&]p=([\+\-]?\d+)/.exec(match[2]);
		if (match2 !== null) {
			page = parseInt(match2[1], 10);
			if (Number.isNaN(page)) { page = null; }
		}
	}

	return { identifier, page };
}

function getBytesSizeFromLabel(number, label) {
	let i = sizeLabelToBytesPrefixes.indexOf(label.toLowerCase());
	if (i < 0) { i = 0; }
	return Math.floor(parseFloat(number) * Math.pow(1024, i));
};


module.exports = {
	getGalleryIdentifierAndPageFromUrl,
	getBytesSizeFromLabel
};
