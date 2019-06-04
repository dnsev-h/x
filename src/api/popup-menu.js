"use strict";

const style = require("../style");


class PopupMenu {
	constructor() {
		this.menuNode = document.createElement("div");
		this.menuNode.className = "x-popup-menu";

		this._onDocumentClickHookElement = null;
		this._onDocumentClick = (e) => onDocumentClickToClose(e, this);
	}

	show(node, fixed, anchor) {
		/* globals DOMRect */
		insertStylesheet();

		const parent = document.body;
		if (this.menuNode.parentNode !== parent) {
			parent.appendChild(this.menuNode);
		}
		this.menuNode.style.left = "0";
		this.menuNode.style.top = "0";
		this.menuNode.classList.toggle("x-popup-menu-fixed", fixed);

		const htmlRect = document.documentElement.getBoundingClientRect();
		const nodeRect = (node instanceof DOMRect) ? node : node.getBoundingClientRect();
		const menuRect = this.menuNode.getBoundingClientRect();
		const windowWidth = window.innerWidth || 0;
		const windowHeight = window.innerHeight || 0;

		let xAnchor = null;
		let yAnchor = null;
		if (isObject(anchor)) {
			let v = anchor.x;
			if (typeof(v) === "number" && !Number.isNaN(v)) { xAnchor = (v > 0.5 ? 1.0 : 0.0); }
			v = anchor.y;
			if (typeof(v) === "number" && !Number.isNaN(v)) { yAnchor = (v > 0.5 ? 1.0 : 0.0); }
		}

		if (xAnchor === null) {
			xAnchor = (nodeRect.x + menuRect.width >= windowWidth) ? 1.0 : 0.0;
		}

		if (yAnchor === null) {
			yAnchor = (nodeRect.y + nodeRect.height + menuRect.height >= windowHeight) ? 0.0 : 1.0;
		}

		let x = nodeRect.x + xAnchor * (nodeRect.width - menuRect.width);
		let y = nodeRect.y + yAnchor * nodeRect.height - menuRect.height * (1.0 - yAnchor);

		x = Math.max(0.0, Math.min(windowWidth - menuRect.width, x));
		y = Math.max(0.0, Math.min(windowHeight - menuRect.height, y));

		if (!fixed) {
			x -= htmlRect.x;
			y -= htmlRect.y;
		}

		this.menuNode.style.left = `${x}px`;
		this.menuNode.style.top = `${y}px`;

		if (this._onDocumentClickHookElement === null) {
			this._onDocumentClickHookElement = document.documentElement;
			this._onDocumentClickHookElement.addEventListener("click", this._onDocumentClick, false);
		}
	}

	hide() {
		if (this.menuNode.parentNode !== null) {
			this.menuNode.parentNode.removeChild(this.menuNode);
		}

		if (this._onDocumentClickHookElement !== null) {
			this._onDocumentClickHookElement.removeEventListener("click", this._onDocumentClick, false);
			this._onDocumentClickHookElement = null;
		}
	}

	addOption(options) {
		const node = document.createElement("a");
		node.className = "x-popup-menu-option";
		node.setAttribute("rel", "noreferrer");

		let closeOnClick = true;
		if (isObject(options)) {
			if (typeof(options.title) === "string") {
				node.textContent = options.title;
			}
			if (typeof(options.url) === "string") {
				node.href = options.url;
			}
			if (typeof(options.target) === "string") {
				node.target = options.target;
			}
			if (typeof(options.order) === "number") {
				node.style.order = `${options.order}`;
			}
			if (typeof(options.callback) === "function") {
				node.addEventListener("click", options.callback, false);
			}
			closeOnClick = (typeof(options.close) !== "boolean" || options.close);
		}

		if (closeOnClick) {
			node.addEventListener("click", (e) => onMenuItemClickToClose(e, this), false);
		}

		this.menuNode.appendChild(node);
		return node;
	}

	removeOption(node) {
		if (node.parentNode === this.menuNode) {
			node.parentNode.removeChild(node);
		}
	}
}


function onDocumentClickToClose(e, menu) {
	if (!menu.menuNode.contains(e.target)) {
		menu.hide();
	}
}

function onMenuItemClickToClose(e, menu) {
	menu.hide();
}

function isObject(v) {
	return v !== null && typeof(v) === "object" && !Array.isArray(v);
}

function insertStylesheet() {
	const id = "x-popup-menu";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style/popup-menu.css");
	style.addStylesheet(src, id);
}


module.exports = {
	PopupMenu
};
