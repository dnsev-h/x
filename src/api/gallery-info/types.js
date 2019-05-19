"use strict";

const GalleryIdentifier = require("../gallery-identifier").GalleryIdentifier;


class GalleryInfo {
	constructor() {
		this.identifier = null;
		this.title = null;
		this.titleOriginal = null;
		this.dateUploaded = null;
		this.category = null;
		this.uploader = null;
		this.ratingAverage = null;
		this.ratingCount = null;
		this.favoriteCategory = null;
		this.favoriteCount = null;
		this.mainThumbnailUrl = null
		this.thumbnailSize = null;
		this.thumbnailRows = null;
		this.fileCount = null;
		this.approximateTotalFileSize = null;
		this.visible = true;
		this.visibleReason = null;
		this.language = null;
		this.translated = null;
		this.archiverKey = null;
		this.torrentCount = null;
		this.tags = null;
		this.tagsHaveNamespace = null;
		this.currentPage = null;
		this.parent = null;
		this.newerVersions = null;
		this.source = null;
		this.dateGenerated = null;
	}

	toCommonJson() {
		return {
			gallery: (
				galleryIdentifiertoCommonJson(this.identifier, null) ||
				galleryIdentifiertoCommonJson(new GalleryIdentifier(0, ""), null)),
			title: toStringOrDefault(this.title, ""),
			title_original: toStringOrDefault(this.titleOriginal, ""),
			date_uploaded: toStringOrDefault(this.dateUploaded, ""),
			category: toStringOrDefault(this.category, ""),
			uploader: toStringOrDefault(this.uploader, ""),
			rating: {
				average: toNumberOrDefault(this.ratingAverage, 0),
				count: toNumberOrDefault(this.ratingCount, 0),
			},
			favorites: {
				category: (this.favoriteCategory !== null ? toNumberOrDefault(this.favoriteCategory.index, -1) : -1),
				category_title: (this.favoriteCategory !== null ? toStringOrDefault(this.favoriteCategory.title, "") : ""),
				count: toNumberOrDefault(this.favoriteCount, 0)
			},
			parent: galleryIdentifiertoCommonJson(this.parent, null),
			newer_versions: newerVersionsToCommonJson(this.newerVersions),
			thumbnail: toStringOrDefault(this.mainThumbnailUrl, ""),
			thumbnail_size: toStringOrDefault(this.thumbnailSize, ""),
			thumbnail_rows: toNumberOrDefault(this.thumbnailRows, 0),
			image_count: toNumberOrDefault(this.fileCount, 0),
			images_resized: false,
			total_file_size_approx: toNumberOrDefault(this.approximateTotalFileSize, 0),
			visible: (this.visible === true),
			visible_reason: toStringOrDefault(this.visibleReason, ""),
			language: toStringOrDefault(this.language, ""),
			translated: (this.translated === true),
			tags: tagsToCommonJson(this.tags),
			// New
			tags_have_namespace: (this.tagsHaveNamespace === true),
			torrent_count: toNumberOrDefault(this.torrentCount, 0),
			archiver_key: toStringOrDefault(this.archiverKey, null),
			source: toStringOrDefault(this.source, null),
			date_generated: toNumberOrDefault(this.dateGenerated, 0)
		};
	}
}


function toStringOrDefault(value, defaultValue) {
	return typeof(value) === "string" ? value : defaultValue;
}

function toNumberOrDefault(value, defaultValue) {
	return Number.isNaN(value) ? defaultValue : value;
}

function galleryIdentifiertoCommonJson(identifier, defaultValue) {
	if (identifier === null || typeof(identifier) !== "object") {
		return defaultValue;
	}

	return {
		gid: identifier.id,
		token: identifier.token
	};
}

function newerVersionsToCommonJson(newerVersions) {
	const result = [];
	if (Array.isArray(newerVersions)) {
		for (const newerVersion of newerVersions) {
			result.push({
				gallery: (
					galleryIdentifiertoCommonJson(newerVersion.identifier, null) ||
					galleryIdentifiertoCommonJson(new GalleryIdentifier(0, ""), null)),
				name: toStringOrDefault(newerVersion.name),
				date_uploaded: toNumberOrDefault(newerVersion.dateUploaded)
			});
		}
	}
	return result;
}

function tagsToCommonJson(tags) {
	const result = {};
	if (tags !== null && typeof(tags) === "object") {
		for (const namespace in tags) {
			const tagList = tags[namespace];
			result[namespace] = [...tagList];
		}
	}
	return result;
}


module.exports = {
	GalleryIdentifier,
	GalleryInfo
};
