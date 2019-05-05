"use strict";

const config = {
	archiveFileName: "{gallery_long_name}.zip", // gallery_long_name, gallery_short_name
	archiveFileNameMaxLength: 200,
	imageFileName: "{gallery_short_name} - {image_number}.{ext}", // gallery_long_name, gallery_short_name, image_name, image_number, number
	imageFileNameMaxLength: 200,
	jsonInfoFileName: "info.json",
	preferOriginalImageSize: true,
	hathImageDownloadTimeout: 30, // seconds
	hathImageDownloadMaxAttemps: 2,
	originalImageDownloadTimeout: 30, // seconds
	originalImageDownloadMaxAttemps: 2,
	imageLimitIndicatorUpdateRate: 2, // per # of images
	maxConcurrentImageDownloads: 2
};


module.exports = config;

