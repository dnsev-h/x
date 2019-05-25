"use strict";

const ready = require("../ready");
const style = require("../style");
const config = require("./config");
const pageType = require("../api/page-type");
const settings = require("../api/settings");


async function initializeSettings() {
	settings.initialize();

	const section = settings.addSection("Full Title", "full-title", 0);
	if (section !== null) {
		await setupSettings(section);
	}
}

async function setupSettings(container) {
	container.innerHTML = require("./settings.html");
	bindInput(container, "displayMode", "string");
}

function bindInput(container, settingName, options) {
	const n = container.querySelector(`[data-x-settings-for=${settingName}]`);
	if (n === null) { return null; }

	config.bindInput(container.querySelector(`[data-x-settings-for=${settingName}]`), settingName, options);
}

async function initializeMode() {
	const c = await config.get();
	document.documentElement.setAttribute("data-x-option-full-title-display-mode", c.displayMode);
}


function main() {
	settings.addLink();

	const currentPageType = pageType.get(document, location);
	if (currentPageType === "settings") {
		initializeSettings();
	}

	const id = "x-full-title";
	if (!style.hasStylesheet(id)) {
		const src = require("./style.css");
		style.addStylesheet(src, id);
	}

	initializeMode();
}


ready.onReady(main);
