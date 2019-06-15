"use strict";


const galleryDetailsStylesheetId = "x-gallery-details-style";
const galleryDetailsContainerId = "x-gallery-details";
const galleryDetailsLinksContainerClassName = "x-gallery-details-links";
const galleryDetailsContentContainerClassName = "x-gallery-details-content-container";

let galleryDetailsInstance = null;
let waitForGalleryDetailsPromise = null;


class GalleryDetails {
	constructor(containerNode) {
		this.containerNode = containerNode;
		this.linksContainer = containerNode.querySelector(`.${galleryDetailsLinksContainerClassName}`);
		this.contentContainer = containerNode.querySelector(`.${galleryDetailsContentContainerClassName}`);
	}

	addLink(title, order) {
		if (this.linksContainer === null) { return null; }

		const n0 = document.createElement("span");
		n0.className = "x-gallery-details-link-container";
		if (typeof(order) === "number") {
			n0.style.order = `${Math.round(order)}`;
		}

		const n1 = document.createElement("a");
		n1.className = "x-gallery-details-link";
		n1.textContent = title;

		n0.appendChild(n1);

		this.linksContainer.appendChild(n0);
		return n1;
	}

	addContentContainer(name, order) {
		if (this.contentContainer === null) { return null; }

		const n0 = document.createElement("div");
		n0.className = "x-gallery-details-content";
		if (typeof(name) === "string") {
			n0.setAttribute("data-x-content-name", name);
		}
		if (typeof(order) === "number") {
			n0.style.order = `${Math.round(order)}`;
		}

		this.contentContainer.appendChild(n0);
		return n0;
	}

	getContentContainer(name) {
		return this.contentContainer !== null ? this.contentContainer.querySelector(`[data-x-content-name="${name}"]`) : null;
	}
}


function findParentWithClass(node, className) {
	if (node !== null) {
		while ((node = node.parentNode) !== null) {
			if (node.classList.contains(className)) {
				return node;
			}
		}
	}
	return null;
}

function getGalleryInfoContainer() {
	return findParentWithClass(document.querySelector(".gm h1#gn"), "gm");
}

function createGalleryDetailsStylesheet() {
	const id = galleryDetailsStylesheetId;
	const style = require("../style");
	if (!style.hasStylesheet(id)) {
		const src = require("./style/gallery-details.css");
		style.addStylesheet(src, id);
	}
}

function createGalleryDetailsHtml() {
	const n0 = document.createElement("div");
	n0.id = galleryDetailsContainerId;
	n0.className = "x-gallery-details";

	const n1 = document.createElement("div");
	n1.className = "x-gallery-details-inner";

	let n2 = document.createElement("div");
	n2.className = galleryDetailsLinksContainerClassName;
	n1.appendChild(n2);

	n2 = document.createElement("div");
	n2.className = galleryDetailsContentContainerClassName;
	n1.appendChild(n2);

	n0.appendChild(n1);

	return n0;
}

function getGalleryDetails(allowCreate) {
	let n = document.getElementById(galleryDetailsContainerId);
	if (n !== null) {
		if (galleryDetailsInstance === null || galleryDetailsInstance.containerNode !== n) {
			galleryDetailsInstance = new GalleryDetails(n);
		}
		return galleryDetailsInstance;
	}

	if (!allowCreate) { return null; }

	const galleryInfoContainer = getGalleryInfoContainer();
	if (galleryInfoContainer === null) { return null; }

	createGalleryDetailsStylesheet();
	n = createGalleryDetailsHtml();

	galleryInfoContainer.appendChild(n);

	galleryDetailsInstance = new GalleryDetails(n);
	return galleryDetailsInstance;
}

function waitForGalleryDetails() {
	const gd = getGalleryDetails(true);
	if (gd !== null) { return Promise.resolve(gd); }

	if (waitForGalleryDetailsPromise === null) {
		waitForGalleryDetailsPromise = createWaitForGalleryDetailsPromise();
	}

	return waitForGalleryDetailsPromise;
}

function createWaitForGalleryDetailsPromise() {
	return new Promise((resolve) => {
		const mo = new MutationObserver(() => {
			const gd = getGalleryDetails(true);
			if (gd === null) { return; }

			mo.disconnect();
			waitForGalleryDetailsPromise = null;
			resolve(gd);
		});
		mo.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}


module.exports = {
	get: getGalleryDetails,
	waitFor: waitForGalleryDetails
};
