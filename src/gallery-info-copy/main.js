"use strict";

const ready = require("../ready");
const style = require("../style");
const copy = require("../copy");
const fileName = require("../file-name");
const pageType = require("../api/page-type");
const settings = require("../api/settings");
const config = require("./config");

const copyLinks = [];


class CopyLink {
	constructor(node, config) {
		this.node = node;
		this.config = config;

		this.span = document.createElement("span");
		this.span.className = "x-full-title-copy-link-container";

		this.link = document.createElement("a");
		this.link.className = "x-full-title-copy-link";

		this.span.appendChild(this.link);
		this.node.appendChild(this.span);
		this.node.classList.add(CopyLink.nodeClass);

		this.link.addEventListener("click", (e) => this.onLinkClicked(e), false);

		this.mutationObserver = new MutationObserver((records) => this.onNodeMutation(records));
		this.mutationObserver.observe(this.node, {
			childList: true,
			subtree: false,
			characterData: false
		});
	}

	onNodeMutation(records) {
		if (this.span.classList.contains(CopyLink.removedClass)) {
			this.mutationObserver.disconnect();
			return;
		}

		let isRemoved = false;
		let leaveRemoved = false;
		for (const record of records) {
			if (
				record.type !== "childList" ||
				record.target !== this.node ||
				!nodeListContains(record.removedNodes, this.span)) {
				continue;
			}

			isRemoved = true;
			leaveRemoved = (record.addedNodes.length === 0);
		}

		if (isRemoved) {
			if (!leaveRemoved && this.span.parentNode === null && this.span.parentNode !== this.node) {
				this.node.appendChild(this.span);
			} else {
				this.span.classList.add(CopyLink.removedClass);
				this.mutationObserver.disconnect();
			}
		}
	}

	onLinkClicked(e) {
		const text = this.transformText(this.node.textContent);
		copy.toClipboard(text);

		e.preventDefault();
		e.stopPropagation();
		return false;
	}

	transformText(text) {
		return this.config.replaceRestrictedFileNameCharacters ? fileName.replaceRestrictedCharacters(text) : text;
	}

	static isSetup(node) {
		return node.classList.contains(CopyLink.nodeClass);
	}
}

CopyLink.nodeClass = "x-full-title-copy-node";
CopyLink.removedClass = "x-full-title-copy-removed";


async function initialize() {
	const id = "x-gallery-info-copy";
	if (!style.hasStylesheet(id)) {
		const src = require("./style.css");
		style.addStylesheet(src, id);
	}

	const c = await config.get();

	checkForCopyTargets(document.documentElement, c);

	const mo = new MutationObserver((records) => onDocumentBodyMutation(records, c));
	mo.observe(document.body, {
		childList: true,
		subtree: true,
		characterData: false
	});
}

function checkForCopyTargets(html, config) {
	const selectors = [ "#gn", "#gj"];
	for (const selector of selectors) {
		let node = html.querySelector(selector);
		if (node === null && html.matches(selector)) {
			node = html;
		}
		if (node !== null) {
			createCopyLink(node, config);
		}
	}
}

function createCopyLink(node, config) {
	if (!CopyLink.isSetup(node)) {
		const copyLink = new CopyLink(node, config);
		copyLinks.push(copyLink);
	}
}

function onDocumentBodyMutation(records, config) {
	for (const record of records) {
		if (
			record.type !== "childList" ||
			record.addedNodes.length === 0) {
			continue;
		}
		for (const addedNode of record.addedNodes) {
			if (addedNode.nodeType !== Node.ELEMENT_NODE) { continue; }
			checkForCopyTargets(addedNode, config);
		}
	}
}

function nodeListContains(nodeList, node) {
	for (let n of nodeList) {
		if (node === n) { return true; }
	}
	return false;
}


async function initializeSettings() {
	settings.initialize();

	const section = settings.addSection("Gallery Title-Copy", "gallery-info-copy", 2);
	if (section !== null) {
		await setupSettings(section);
	}
}

async function setupSettings(container) {
	container.innerHTML = require("./settings.html");
	bindInput(container, "replaceRestrictedFileNameCharacters", "boolean");
}

function bindInput(container, settingName, options) {
	const n = container.querySelector(`[data-x-settings-for=${settingName}]`);
	if (n === null) { return null; }

	config.bindInput(container.querySelector(`[data-x-settings-for=${settingName}]`), settingName, options);
}


function main() {
	settings.addLink();

	const currentPageType = pageType.get(document, location);
	switch (currentPageType) {
		case "settings":
			initializeSettings();
			break;
	}

	initialize();
}


ready.onReady(main);
