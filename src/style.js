"use strict";

function getId(id) {
	return `${id}-stylesheet`;
}

function isDark() {
	return (window.location.hostname.indexOf("exhentai") >= 0);
}

function getStylesheet(id) {
	return document.getElementById(getId(id));
}

function hasStylesheet(id) {
	return !!getStylesheet(id);
}

function addStylesheet(source, id) {
	document.documentElement.classList.toggle("x-is-dark", isDark());

	const style = document.createElement("style");
	style.textContent = source;
	if (typeof(id) === "string") {
		style.id = getId(id);
	}
	document.head.appendChild(style);
	return style;
}


module.exports = {
	isDark,
	hasStylesheet,
	getStylesheet,
	addStylesheet
};
