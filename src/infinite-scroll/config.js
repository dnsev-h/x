"use strict";

const configKey = "x-infinite-scroll-config";
const configDefault = {
	delay: 1, // float [0-inf]; seconds before loading a new page
	loadAttempts: 1, // integer [0-inf]; number of attempts for loading new pages
	pageViewPercentRequired: 0.5, // float [0-1]; 50% of page must be viewed before loading the next
	allowForGalleryImages: true, // boolean
	allowForGalleryLists: true, // boolean
	enabledByDefaultForGalleryImages: true, // boolean
	enabledByDefaultForGalleryLists: true // boolean
};

module.exports = require("../config").create(configKey, configDefault);
