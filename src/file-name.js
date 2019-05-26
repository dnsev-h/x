"use strict";

const replaceCharDefault = "-";
const replaceMap = {
	"<": "\uFF1C",
	">": "\uFF1E",
	":": "\uFF1A",
	"\"": "\uFF02",
	"/": "\uFF0F",
	"\\": "\uFF0F",
	"|": "\uFF5C",
	"?": "\uFF1F",
	"*": "\uFF0A"
};


function replaceRestrictedCharacters(fileName, replaceWith) {
	return fileName.replace(/[<>:"\|\?\*\/\\\x00-\x1f]/g, (m) => {
		if (typeof(replaceWith) === "string") { return replaceWith; }
		return replaceMap.hasOwnProperty(m) ? replaceMap[m] : replaceCharDefault;
	});
}


module.exports = {
	replaceRestrictedCharacters
};
