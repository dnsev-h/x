"use strict";

const configKey = "x-full-title-config";
const configDefault = {
	displayMode: "hover" // "none", "hover", "always"
};

module.exports = require("../config").create(configKey, configDefault);
