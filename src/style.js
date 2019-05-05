"use strict";

function hasStylesheet(id) {
	return document.getElementById(id);
}

function addStylesheet(source, id) {
	document.documentElement.classList.toggle("x-is-dark", window.location.hostname.indexOf("exhentai") >= 0);

	const style = document.createElement("style");
	style.textContent = source;
	if (typeof(id) === "string") {
		style.id = id;
	}
	document.head.appendChild(style);
	return style;
}


module.exports = {
	hasStylesheet,
	addStylesheet
};
