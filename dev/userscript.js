"use strict";

const fs = require("fs");
const path = require("path");


const extensionToContentTypeMapping = {
	".png": "image/png"
};


function toDataUrl(url, info) {
	if (info !== null && typeof(info) === "object" && typeof(info.directory) === "string") {
		const fileName = path.resolve(info.directory, url);
		const content = fs.readFileSync(fileName, { encoding: null });
		const ext = path.extname(fileName).toLowerCase();
		const contentType = extensionToContentTypeMapping[ext] || "text/plain";
		return `data:${contentType};base64,${content.toString("base64")}`;
	}

	return "";
}

function getInfo(value, info) {
	return Object.prototype.hasOwnProperty.call(info, value) ? info[value] : "";
}


const transforms = {
	toDataUrl,
	info: getInfo
};
const defaultNewline = "\n";


function writeHeaderValue(stream, key, value, keyLength, info, newline) {
	if (typeof(value) === "string") {
		stream.write("// @");
		stream.write(key.padEnd(keyLength, " "));
		stream.write(value);
		stream.write(newline);
	}
	else if (typeof(value) === "function") {
		let v = value(info);
		writeHeaderValue(stream, key, v, keyLength, info, newline);
	}
	else if (typeof(value) === "boolean") {
		if (value === true) {
			stream.write("// @");
			stream.write(key);
			stream.write(newline);
		}
	}
	else if (value !== null && typeof(value) === "object") {
		if (Array.isArray(value)) {
			for (let v of value) {
				writeHeaderValue(stream, key, v, keyLength, info, newline);
			}
		}
		else {
			let v = value.value;
			let t = value.transform;
			if (typeof(t) === "string" && Object.prototype.hasOwnProperty.call(transforms, t)) {
				v = transforms[t](v, info);
			}
			writeHeaderValue(stream, key, v, keyLength, info, newline);
		}
	}
}


function writeHeader(stream, descriptor, info, newline) {
	if (typeof(newline) !== "string") { newline = defaultNewline; }

	let maxKeyLength = 0;
	for (let k in descriptor) {
		if (k.length > maxKeyLength) { maxKeyLength = k.length; }
	}
	++maxKeyLength;

	stream.write("// ==UserScript==");
	stream.write(newline);

	for (let k in descriptor) {
		writeHeaderValue(stream, k, descriptor[k], maxKeyLength, info, newline);
	}

	stream.write("// ==/UserScript==");
	stream.write(newline);
}


module.exports = {
	writeHeader
};
