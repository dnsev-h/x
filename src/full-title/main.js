"use strict";

const ready = require("../ready");
const style = require("../style");


function main() {
	const id = "x-full-title";
	if (!style.hasStylesheet(id)) {
		const src = require("./style.css");
		style.addStylesheet(src, id);
	}
}


ready.onReady(main);
