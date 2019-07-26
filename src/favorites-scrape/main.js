"use strict";

const ready = require("../ready");
const fetch = require("../fetch"); // jshint ignore:line
const pageType = require("../api/page-type");
const pagination = require("../api/pagination");
const toCommonJson = require("../api/gallery-info/common-json").toCommonJson;
const gUtils = require("../api/gallery-info/utils");
const gFetch = require("../api/gallery-info/fetch");


let delayPromise = null;
const delayTime = 1.0;

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


function formatTorrentLink(format, vars) {
	return format.replace(/\{(\w+)\}/g, (m0, m1) => {
		return Object.prototype.hasOwnProperty.call(vars, m1) ? vars[m1] : m0;
	});
}


async function fetchMetadata(status, textarea) {
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

async function fetchTorrentLinks(status, textarea, torrentLinkFormat) {
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
				src2 = await fetch.get({ url: `/gallerytorrents.php?gid=${id.id}&t=${id.token}`, gm: true });
			} catch (e) {
				continue;
			} finally {
				setDelay(delayTime);
			}

			const doc2 = new DOMParser().parseFromString(src2.responseText, "text/html");
			const links = doc2.documentElement.querySelectorAll("form a[href][onclick]");
			for (let k = 0; k < links.length; ++k) {
				const link = links[k];
				results += formatTorrentLink(torrentLinkFormat.value, {
					url: link.getAttribute("href"),
					id: id.id,
					token: id.token,
					index: k
				}) + "\n";
				textarea.value = results;
			}
		}
	}

	status.textContent = "Done";
}


let previousDownloadUrl = null;
function download(downloadLink, textarea) {
	const blob = new Blob([ textarea.value ], { type: "text/plain" });
	const url = URL.createObjectURL(blob);

	if (previousDownloadUrl !== null) {
		URL.revokeObjectURL(previousDownloadUrl);
		previousDownloadUrl = null;
	}

	previousDownloadUrl = url;
	downloadLink.setAttribute("href", url);
}


function main() {
	const currentPageType = pageType.get(document, location);
	if (currentPageType !== "favorites") { return; }

	const container = document.createElement("div");
	container.innerHTML = require("./content.html");

	const par = document.body;
	if (par.firstElementChild !== null) {
		par.insertBefore(container, par.firstElementChild);
	}

	const textarea = container.querySelector("#x-favorites-scrape-textarea");
	const status = container.querySelector("#x-favorites-scrape-status");
	const torrentLinkFormat = container.querySelector("#x-favorites-scrape-torrent-link-format");

	container.querySelector("#x-favorites-scrape-fetch-metadata").addEventListener("click", () => fetchMetadata(status, textarea), false);
	container.querySelector("#x-favorites-scrape-fetch-torrent-links").addEventListener("click", () => fetchTorrentLinks(status, textarea, torrentLinkFormat), false);
	const downloadLink = container.querySelector("#x-favorites-scrape-option-download");
	downloadLink.addEventListener("mousedown", () => download(downloadLink, textarea), false);
}


ready.onReady(main);
