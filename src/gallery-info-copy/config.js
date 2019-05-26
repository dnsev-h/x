"use strict";

const configKey = "x-gallery-info-copy-config";
const configDefault = {
	replaceRestrictedFileNameCharacters: true // boolean
};

module.exports = require("../config").create(configKey, configDefault);
