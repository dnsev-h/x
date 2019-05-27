"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const browserify = require("browserify");
const userscript = require("./userscript");


function padNumber(number, length) {
	return String(number).padStart(length, "0");
}

function formatDate(date) {
	return `${date.getUTCFullYear()}-${padNumber(date.getUTCMonth() + 1, 2)}-${padNumber(date.getUTCDate(), 2)}`;
}


function build(target, date) {
	const directory = path.dirname(target);
	const json = JSON.parse(fs.readFileSync(target), { encoding: "utf8", flag: "r" });

	const headerInfo = {
		directory,
		date: formatDate(date)
	};

	const newline = os.EOL;
	const output = typeof(json.target) === "string" ? path.resolve(directory, json.target) : null;
	const outputMeta = typeof(json.targetMeta) === "string" ? path.resolve(directory, json.targetMeta) : null;

	const baseOptions = json.options || {};
	const b = browserify(baseOptions);

	b.transform("browserify-css", {
		minify: true,
		autoInject: false,
		minifyOptions: {}
	});

	b.transform("html2js-browserify", {
		minify: false,
		collapseWhitespace: false
	});

	for (let fileInfo of json.files) {
		const options = Object.assign({}, fileInfo.options || {});
		b.add(path.resolve(directory, fileInfo.file), options);
	}

	b.bundle((err, buf) => {
		if (err) {
			console.log(err);
			return;
		}

		if (outputMeta !== null) {
			const s = fs.createWriteStream(outputMeta);
			userscript.writeHeader(s, json.header, headerInfo, newline);
			s.end();
		}

		if (output !== null) {
			const buf2 = Buffer.from(buf.toString("utf8").replace(/\r?\n|\r/g, newline), "utf8");
			const s = fs.createWriteStream(output);
			userscript.writeHeader(s, json.header, headerInfo, newline);
			s.write(buf2);
			s.end();
		}
	});
}


function main() {
	const date = new Date();

	let targets = process.argv.slice(2);
	if (targets.length === 0) {
		let dir = path.join(__dirname, "../targets");
		targets = fs.readdirSync(dir)
			.map((v) => path.resolve(dir, v))
			.filter((v) => path.extname(v).toLowerCase() === ".json");
	}
	else {
		targets = targets.map((v) => path.resolve(v));
	}


	for (let target of targets) {
		build(target, date);
	}
}


main();
