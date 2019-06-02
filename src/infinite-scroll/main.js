"use strict";

const ready = require("../ready");
const fetch = require("../fetch"); // jshint ignore:line
const style = require("../style");
const pageType = require("../api/page-type");
const pagination = require("../api/pagination");
const settings = require("../api/settings");
const InfiniteScrollBase = require("./infinite-scroll-base").InfiniteScrollBase;

let currentPageType = null;
let scroller = null;


class InfiniteScroll extends InfiniteScrollBase {
	constructor(config, pageType, pageNode, pagesInfo) {
		super();

		this.pageViewPercentRequired = config.pageViewPercentRequired;
		this.config = config;
		this.pageType = pageType;
		this.pageNode = pageNode;
		this.pagesInfo = pagesInfo;
		this.contentContainer = null;

		this._delayPromise = null;
		this._isLoading = false;
		this._isEnabled = false;
		this._isEnabledCheckbox = null;
		this._pageWrapperTemplate = null;

		this.initializeContentContainer();
	}


	getPageMode(pageType) {
		switch (pageType) {
			case "gallery":
				return "image-list";
			case "search":
			case "favorites":
				return "gallery-list";
			default:
				return null;
		}
	}

	initializeContentContainer() {
		this.contentContainer = this.createContentContainer();
		this.pageNode.parentNode.insertBefore(this.contentContainer, this.pageNode);

		this.pageNode = this.createWrappedPage(this.pageNode, this.pagesInfo.pageCurrent);
		this.contentContainer.appendChild(this.pageNode);
	}

	createContentContainer() {
		const html = require("./container.html");
		const doc = new DOMParser().parseFromString(html, "text/html");
		const container = doc.querySelector(".x-infinite-scroll-container");

		const mode = this.getPageMode(this.pageType);
		if (mode !== null) {
			container.setAttribute("data-x-infinite-scroll-mode", mode);
		}

		const top = container.querySelector(".x-infinite-scroll-header-top-link");
		top.addEventListener("click", (e) => {
			document.documentElement.scrollTop = document.body.scrollTop = 0;
			e.preventDefault();
			e.stopPropagation();
			return false;
		}, false);

		this._isEnabledCheckbox = container.querySelector(".x-infinite-scroll-enabled-checkbox");
		this._isEnabledCheckbox.addEventListener("change", () => {
			this.setEnabled(this._isEnabledCheckbox.checked);
			if (this.isEnabled()) { this.updateCheck(); }
		}, false);

		return container;
	}

	createWrappedPage(content, pageIndex) {
		if (this._pageWrapperTemplate === null) {
			const html = require("./page.html");
			const doc = new DOMParser().parseFromString(html, "text/html");
			this._pageWrapperTemplate = doc.querySelector(".x-infinite-scroll-page");
		}

		const wrapper = this._pageWrapperTemplate.cloneNode(true);
		const link = wrapper.querySelector(".x-infinite-scroll-page-link");
		link.setAttribute("href", this.pagesInfo.createPageUrl(pageIndex));
		link.textContent = `Page ${pageIndex + 1}`;
		wrapper.appendChild(content);
		return wrapper;
	}


	isEnabled() {
		return this._isEnabled;
	}

	setEnabled(value) {
		const isComplete = this.isComplete();
		this._isEnabled = !!value && !isComplete;

		if (!this._isLoading) {
			this.setActive(this._isEnabled);
		}

		this._isEnabledCheckbox.checked = this._isEnabled || isComplete;
	}

	isComplete() {
		return (this.pagesInfo.pageCurrent + 1 >= this.pagesInfo.pageCount);
	}

	getNextPageUrl() {
		return this.pagesInfo.createPageUrl(this.pagesInfo.pageCurrent + 1);
	}

	getPageDataFromHtml(html) {
		const content = getDefaultPageContent(html, this.pageType); // html.querySelector("#gdt");
		if (content === null) { return null; }

		content.removeAttribute("id");

		let className = content.getAttribute("class") || "";
		if (className) { className += " "; }
		className += "x-infinite-scroll";
		content.setAttribute("class", className);

		return { content };
	}

	async loadNextPage() {
		if (!isWindowVisible()) { return; }
		this.setActive(false);
		if (this._isLoading) { return; }
		if (this.isComplete()) {
			this.pageNode = null;
			return;
		}

		// Load data
		const url = this.getNextPageUrl();
		let pageData;
		try {
			this._isLoading = true;
			pageData = await this.fetchPageData(url, this.config.loadAttempts, this.config.delay);
		}
		finally {
			this._isLoading = false;
		}
		if (pageData === null) { return; }

		// Update page
		++this.pagesInfo.pageCurrent;

		// Create node
		const newPageNode = this.createWrappedPage(pageData.content, this.pagesInfo.pageCurrent);
		this.contentContainer.appendChild(newPageNode);

		// Done?
		if (this.isComplete()) {
			this.pageNode = null;
			this.setEnabled(false);
		} else {
			this.pageNode = newPageNode;
			this.setActive(true);
		}
	}

	async fetchPageData(url, loadAttempts, delay) {
		for (let i = 0; i < loadAttempts; ++i) {
			await this.waitForDelay();
			try {
				const result = await fetch.get({ url: url });
				const doc = new DOMParser().parseFromString(result.responseText, "text/html");
				const data = this.getPageDataFromHtml(doc);
				if (data !== null) { return data; }
			}
			catch (e) {
			}
			finally {
				this.setDelay(delay);
			}
		}
		return null;
	}


	setDelay(time) {
		this._delayPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				this._delayPromise = null;
				resolve();
			}, time * 1000);
		});
	}

	async waitForDelay() {
		if (this._delayPromise !== null) {
			await this._delayPromise;
		}
	}
}


function setupPageFocus() {
	document.addEventListener("visibilitychange", onVisibilityStateChanged, false);
	onVisibilityStateChanged();
}

function isWindowVisible() {
	return (
		typeof (document.visibilityState) !== "string" ||
		document.visibilityState === "visible");
}

function onVisibilityStateChanged() {
	if (!isWindowVisible()) { return; }
	document.removeEventListener("visibilitychange", onVisibilityStateChanged, false);
	initialize(currentPageType);
}


function getDefaultPageContent(html, pageType) {
	let n;
	switch (pageType) {
		case "gallery":
			n = html.querySelector("#gdt");
			if (n !== null) { return n; }
			n = html.querySelector(".eze_gallery_page_container");
			if (n !== null) { return n; }
			break;
		case "search":
		case "favorites":
			n = html.querySelector(".itg");
			if (n !== null) { return n; }
			break;
	}

	return null;
}

function isEnabledByDefault(pageType, config) {
	switch (pageType) {
		case "gallery":
			return config.enabledByDefaultForGalleryImages;
		case "search":
		case "favorites":
			return config.enabledByDefaultForGalleryLists;
		default:
			return false;
	}
}

function isAllowed(pageType, config) {
	switch (pageType) {
		case "gallery":
			return config.allowForGalleryImages;
		case "search":
		case "favorites":
			return config.allowForGalleryLists;
		default:
			return false;
	}
}

function insertStylesheet() {
	const id = "x-infinite-scroll";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style.css");
	style.addStylesheet(src, id);
}

async function initialize(pageType) {
	if (scroller !== null) { return; }

	const pagesInfo = pagination.getInfo(document);
	if (pagesInfo === null) { return; }

	const pageNode = getDefaultPageContent(document, pageType);
	if (pageNode === null) { return; }

	const config = await require("./config").get();

	if (!isAllowed(pageType, config)) { return; }

	insertStylesheet();

	scroller = new InfiniteScroll(config, pageType, pageNode, pagesInfo);
	scroller.setEnabled(isEnabledByDefault(pageType, config));
}



async function initializeSettings() {
	settings.initialize();

	const section = settings.addSection("Infinite Scroll", "infinite-scroll", 1);
	if (section !== null) {
		await setupSettings(section);
	}
}

async function setupSettings(container) {
	const config = await require("./config");

	container.innerHTML = require("./settings.html");
	bindInput(config, container, "enabledByDefaultForGalleryImages", "boolean");
	bindInput(config, container, "enabledByDefaultForGalleryLists", "boolean");
	bindInput(config, container, "allowForGalleryImages", "boolean");
	bindInput(config, container, "allowForGalleryLists", "boolean");
	bindInput(config, container, "delay", {
		type: "number",
		min: 0
	});
	bindInput(config, container, "loadAttempts", {
		type: "integer",
		min: 0
	});
	bindInput(config, container, "pageViewPercentRequired", {
		type: "number",
		min: 0,
		max: 1,
		valueToInput: (v) => v * 100,
		inputToValue: (v) => v / 100
	});
}

function bindInput(config, container, settingName, options) {
	const n = container.querySelector(`[data-x-settings-for=${settingName}]`);
	if (n === null) { return null; }

	config.bindInput(container.querySelector(`[data-x-settings-for=${settingName}]`), settingName, options);
}



function main() {
	settings.addLink();

	currentPageType = pageType.get(document, location);
	switch (currentPageType) {
		case "gallery":
		case "search":
		case "favorites":
			setupPageFocus();
			break;
		case "settings":
			initializeSettings();
			break;
	}
}


ready.onReady(main);
