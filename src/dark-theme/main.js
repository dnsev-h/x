"use strict";

const ready = require("../ready");
const style = require("../style");


function removeLightTheme() {
	const nodes = document.querySelectorAll("link[rel=stylesheet][href$=\"/g.css\"]");
	for (const node of nodes) {
		node.setAttribute("rel", "alternate stylesheet");
		node.setAttribute("title", "Default");
	}

	// Per-page style
	const nodes2 = document.querySelectorAll("style[type=\"text/css\"]");
	for (const node of nodes2) {
		if (/^\s*(div\.fp\{|div#db\{)/.test(node.textContent) && node.parentNode) {
			node.parentNode.removeChild(node);
		}
	}
}


function insertStylesheet() {
	const id = "x-dark-theme";
	if (style.hasStylesheet(id)) { return; }

	const src = require("./style.css");
	const n = style.addStylesheet(src, id);
	if (n !== null) { n.setAttribute("title", "Dark"); }
}

function main() {
	insertStylesheet();
	removeLightTheme();
}


document.documentElement.classList.add("x-is-dark", "x-force-dark", "xport_ex");

ready.onReady(main);
