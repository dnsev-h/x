"use strict";

const ready = require("../ready");
const fetch = require("../fetch");
const pageType = require("../api/page-type");
const pagination = require("../api/pagination");
const toCommonJson = require("../api/gallery-info/common-json").toCommonJson;
const gUtils = require("../api/gallery-info/utils");
const gFetch = require("../api/gallery-info/fetch");


let delayPromise = null;
let delayTime = 1;

async function waitDelay() {
	if (delayPromise !== null) {
		await delayPromise;
	}
}

function setDelay(time) {
	delayPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			delayPromise = null;
			resolve();
		}, time * 1000);
	});
}


async function start(status, textarea) {
	let results = "";
	const p = pagination.getInfo(document.documentElement);
	for (let i = 0; i < p.pageCount; ++i) {
		await waitDelay();

		const pageUrl = p.createPageUrl(i);
		status.textContent = `Page ${i} of ${p.pageCount}`;

		let src;
		try {
			src = await fetch.get({ url: pageUrl, gm: true });
		} catch (e) {
			console.log(e);
			--i;
			continue;
		} finally {
			setDelay(delayTime);
		}

		const doc = new DOMParser().parseFromString(src.responseText, "text/html");
		const infos = pagination.getGalleryUrls(doc.documentElement).map((v) => gUtils.getGalleryIdentifierAndPageFromUrl(v));

		const countPerPage = 20;
		for (let j = 0; j < infos.length; j += countPerPage) {
			status.textContent = `Page ${i} of ${p.pageCount} (${j} of ${infos.length})`;
			await waitDelay();
			let galleryInfos;
			try {
				galleryInfos = await gFetch.get(infos.slice(j, j + countPerPage).map((v) => v.identifier));
			} catch (e) {
				continue;
			} finally {
				setDelay(delayTime);
			}

			for (const g of galleryInfos) {
				if (g !== null) {
					results += JSON.stringify(toCommonJson(g), null, "") + "\n";
				}
			}
			textarea.value = results;
		}
	}
	status.textContent = "Done";
}

async function startTorrent(status, textarea) {
	let results = "";
	const p = pagination.getInfo(document.documentElement);
	for (let i = 0; i < p.pageCount; ++i) {
		await waitDelay();

		const pageUrl = p.createPageUrl(i);
		status.textContent = `Page ${i} of ${p.pageCount}`;

		let src;
		try {
			src = await fetch.get({ url: pageUrl, gm: true });
		} catch (e) {
			console.log(e);
			--i;
			continue;
		} finally {
			setDelay(delayTime);
		}

		const doc = new DOMParser().parseFromString(src.responseText, "text/html");
		const infos = pagination.getGalleryUrls(doc.documentElement).map((v) => gUtils.getGalleryIdentifierAndPageFromUrl(v));

		const countPerPage = 1;
		for (let j = 0; j < infos.length; j += countPerPage) {
			status.textContent = `Page ${i} of ${p.pageCount} (${j} of ${infos.length})`;
			await waitDelay();
			const id = infos[j].identifier;
			let src2;
			try {
				src2 = await fetch.get({ url: `https://exhentai.org/gallerytorrents.php?gid=${id.id}&t=${id.token}`, gm: true });
			} catch (e) {
				continue;
			} finally {
				setDelay(delayTime);
			}

			const doc2 = new DOMParser().parseFromString(src2.responseText, "text/html");
			const links = doc2.documentElement.querySelectorAll("form a[href][onclick]");
			for (let k = 0; k < links.length; ++k) {
				const link = links[k];
				results += "curl " + link.getAttribute("href") + " --output " + id.id + "_" + id.token + "_" + k + ".torrent\n";
				textarea.value = results;
			}
		}
	}
	status.textContent = "Done";
}

// https://exhentai.org/gallerytorrents.php?gid=1182580&t=d1f08c9a6d

function main() {
	const currentPageType = pageType.get(document, location);
	if (currentPageType !== "favorites") { return; }

	const n = document.createElement("textarea");
	n.wrap = "hard";
	n.style.whiteSpace = "pre";
	n.spellcheck = false;
	document.body.insertBefore(n, document.body.firstChild);

	const s = document.createElement("div");
	document.body.insertBefore(s, document.body.firstChild);

	let b = document.createElement("button");
	b.textContent = "Fetch Metadata";
	b.addEventListener("click", () => start(s, n), false);
	document.body.insertBefore(b, document.body.firstChild);

	b = document.createElement("button");
	b.textContent = "Fetch Torrent Links";
	b.addEventListener("click", () => startTorrent(s, n), false);
	document.body.insertBefore(b, document.body.firstChild);
}


ready.onReady(main);
