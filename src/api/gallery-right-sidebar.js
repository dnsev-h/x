"use strict";

const apiStyle = require("./style");
const style = require("../style");


function insertStylesheet() {
	const id = "x-gallery-links-right-sidebar";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style/gallery-right-sidebar.css");
	style.addStylesheet(src, id);
}

function getGroupContainer(parent) {
	const id = "x-gallery-links-right-sidebar-container";
	let node = parent.querySelector(`.${id}`);
	if (node === null) {
		node = document.createElement("div");
		node.className = `g2 gsp ${id}`;
		parent.appendChild(node);

		const p = parent.parentNode;
		if (p !== null) {
			p.classList.add("x-gallery-links-right-sidebar-contains-container");
		}
	}
	return node;
}

function createLink(label, order) {
	const parent = document.querySelector("#gd5");
	if (parent === null) {
		return { link: null, linkContainer: null };
	}

	// Style
	insertStylesheet();

	// Container
	const linkGroup = getGroupContainer(parent);
	const linkContainer = document.createElement("div");
	linkContainer.className = "x-gallery-links-right-sidebar-entry";
	if (typeof(order) === "number" && !Number.isNaN(order)) {
		linkContainer.style.order = `${order}`;
	}

	const img = document.createElement("img");
	img.src = apiStyle.getArrowIconUrl();
	linkContainer.appendChild(img);

	linkContainer.appendChild(document.createTextNode(" "));

	const link = document.createElement("a");
	link.textContent = label;
	linkContainer.appendChild(link);

	linkGroup.appendChild(linkContainer);

	return { link, linkContainer };
}


module.exports = {
	createLink
};
