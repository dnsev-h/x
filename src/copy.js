"use strict";

let copyTextArea = null;


function createHiddenTextarea() {
	const n = document.createElement("textarea");
	n.style.setProperty("pointer-events", "none", "important");
	n.style.setProperty("opacity", "0", "important");
	n.style.setProperty("position", "fixed", "important");
	n.style.setProperty("left", "0", "important");
	n.style.setProperty("top", "0", "important");
	return n;
}

function toClipboard(text) {
	if (copyTextArea === null) {
		copyTextArea = createHiddenTextarea();
	}

	const parent = document.body;
	if (copyTextArea.parentNode !== parent) {
		parent.appendChild(copyTextArea);
	}

	copyTextArea.style.setProperty("display", "block", "important");
	try {
		copyTextArea.value = text;
		copyTextArea.focus();
		copyTextArea.select();
		document.execCommand("copy");
		copyTextArea.blur();
	}
	catch (e)
	{}
	copyTextArea.value = "";
	copyTextArea.style.setProperty("display", "none", "important");

	if (copyTextArea.parentNode !== null) {
		copyTextArea.parentNode.removeChild(copyTextArea);
	}
}


module.exports = {
	toClipboard
};
