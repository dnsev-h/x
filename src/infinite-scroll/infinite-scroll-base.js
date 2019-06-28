"use strict";

class InfiniteScrollBase {
	constructor() {
		this.pageViewPercentRequired = 0.5; // 50% of page must be viewed before loading the next
		this.pageNode = null;
		this.containerNode = window;

		this._isActive = false;
		this._scrollY = 0;
		this._onScrollChangedCallback = () => this._onScrollChanged(false);
		this._onWheelCallback = () => this._onWheel();
		this._wheelDelay = 0.1 * 1000; // milliseconds
		this._wheelTimeout = null;
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
			this.containerNode.addEventListener("scroll", this._onScrollChangedCallback, false);
			document.addEventListener("wheel", this._onWheelCallback, false);
		} else {
			if (!this._isActive) { return; }
			this._isActive = false;
			this.containerNode.removeEventListener("scroll", this._onScrollChangedCallback, false);
			document.removeEventListener("wheel", this._onWheelCallback, false);
			this._clearWheelTimeout();
		}
	}

	updateCheck() {
		this._onScrollChanged(true);
	}

	_onScrollChanged(force) {
		const scrollYNew = getPageScrollY();
		const scrollYPre = this._scrollY;
		this._scrollY = scrollYNew;

		this._clearWheelTimeout();

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
	}

	_onWheel() {
		this._clearWheelTimeout();
		this._wheelTimeout = setTimeout(() => this._onWheelTimeout(), this._wheelDelay);
	}

	_onWheelTimeout() {
		this._wheelTimeout = null;
		this._onScrollChanged(true);
	}

	_clearWheelTimeout() {
		if (this._wheelTimeout !== null) {
			clearTimeout(this._wheelTimeout);
			this._wheelTimeout = null;
		}
	}
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
