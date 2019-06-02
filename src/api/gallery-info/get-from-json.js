"use strict";

const types = require("./types");
const utils = require("./utils");
const htmlUtils = require("../../html-utils");

const defaultNamespace = "misc";


function getJsonNumber(value) {
	if (typeof(value) !== "number") {
		if (typeof(value) !== "string") { return null; }
		value = parseFloat(value);
	}
	return (Number.isNaN(value) ? null : value);
}

function getJsonString(value) {
	if (typeof(value) === "string") { return value; }
	if (typeof(value) === "undefined" || value === null) { return value; }
	return `${value}`;
}

function getTagAndNamespace(tag) {
	const pattern = /^(?:([^:]*):)?([\w\W]*)$/;
	const match = pattern.exec(tag);
	return (match !== null) ?
		({ tag: match[2], namespace: match[1] || defaultNamespace }) :
		({ tag: tag, namespace: defaultNamespace });
}

function toProperCase(text) {
	return text.replace(/(^|\W)(\w)/g, (m0, m1, m2) => `${m1}${m2.toUpperCase()}`);
}

function populateGalleryInfoFromJson(info, json) {
	info.title = htmlUtils.getStringFromHtmlEscapedString(getJsonString(json.title));
	info.titleOriginal = htmlUtils.getStringFromHtmlEscapedString(getJsonString(json.title_jpn));
	info.mainThumbnailUrl = getJsonString(json.thumb);
	const category = getJsonString(json.category);
	info.category = (category !== null ? category.toLowerCase() : null);
	info.uploader = getJsonString(json.uploader);

	info.ratingAverage = getJsonNumber(json.rating);

	const dateUploaded = getJsonNumber(json.posted);
	info.dateUploaded = (dateUploaded !== null ? new Date(dateUploaded * 1000).getTime() : null);

	info.visible = !json.expunged;

	info.approximateTotalFileSize = getJsonNumber(json.filesize);

	info.fileCount = getJsonNumber(json.filecount);

	info.archiverKey = getJsonString(json.archiver_key);
	info.torrentCount = getJsonNumber(json.torrentcount);

	const tags = {};
	if (Array.isArray(json.tags)) {
		for (const jsonTag of json.tags) {
			const stringTag = getJsonString(jsonTag);
			if (stringTag === null) { continue; }

			const {tag, namespace} = getTagAndNamespace(stringTag);

			let namespaceTags;
			if (tags.hasOwnProperty(namespace)) {
				namespaceTags = tags[namespace];
			} else {
				namespaceTags = [];
				tags[namespace] = namespaceTags;
			}

			namespaceTags.push(tag);
		}
	}

	info.tags = tags;
	info.tagsHaveNamespace = true;

	// Tag-based info
	if (tags.hasOwnProperty("language")) {
		const languageTags = tags.language;
		const translatedIndex = languageTags.indexOf("translated");
		info.translated = (translatedIndex >= 0);
		if (translatedIndex !== 0) {
			info.language = toProperCase(languageTags[0]);
		}
	} else {
		info.language = "Japanese";
		info.translated = false;
	}
}

function getFromJson(json, url) {
	if (json === null || typeof(json) !== "object") { return null; }

	const id = getJsonNumber(json.gid);
	const token = getJsonString(json.token);
	if (id === null || token === null) { return null; }

	const info = new types.GalleryInfo();
	info.identifier = new types.GalleryIdentifier(id, token);
	info.currentPage = null;
	info.source = "json";
	populateGalleryInfoFromJson(info, json);
	info.sourceSite = utils.getSourceSiteFromUrl(url);
	info.dateGenerated = Date.now();
	return info;
}


module.exports = getFromJson;
