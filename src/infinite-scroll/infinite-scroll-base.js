"use strict";

class InfiniteScrollBase {
	constructor() {
		this.pageViewPercentRequired = 0.5; // 50% of page must be viewed before loading the next
		this.pageNode = null;
		this.containerNode = window;

		this._isActive = false;
		this._scrollY = 0;
		this._onScroll = () => onScrollChanged.call(this, false);
	}

	loadNextPage() {}

	isActive() {
		return this._isActive;
	}
	setActive(value) {
		if (value) {
			if (this._isActive) { return; }
			this._isActive = true;
			this._scrollY = getPageScrollY();
			this.containerNode.addEventListener("scroll", this._onScroll, false);
		} else {
			if (!this._isActive) { return; }
			this._isActive = false;
			this.containerNode.removeEventListener("scroll", this._onScroll, false);
		}
	}

	updateCheck() {
		onScrollChanged.call(this, true);
	}
}


function onScrollChanged(force) {
	/* jshint -W040 */
	const scrollYNew = getPageScrollY();
	const scrollYPre = this._scrollY;
	this._scrollY = scrollYNew;

	// Must have valid target
	if (this.pageNode === null) { return; }

	// Don't load if already loading, if not scrolled at all, or if scrolling up
	if (force !== true) {
		if (scrollYNew < 1 || scrollYNew <= scrollYPre) { return; }
	}

	// Don't load if the current page is entirely off-screen
	const rect = this.pageNode.getBoundingClientRect();
	if (rect.y + rect.height < 0) { return; }

	// Don't load if not enough of the page has been viewed
	const height = getWindowHeight();
	if (rect.y + rect.height * this.pageViewPercentRequired >= height) { return; }

	// Load
	this.loadNextPage();
	/* jshint +W040 */
}

function getWindowHeight() {
	return window.innerHeight || 0;
}

function getPageScrollY() {
	const doc = document.documentElement;
	return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}


module.exports = {
	InfiniteScrollBase
};
