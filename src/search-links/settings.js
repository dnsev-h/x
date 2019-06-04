"use strict";

const settings = require("../api/settings");

let settingsController = null;


class SettingsController {
	constructor(config, configValue, template, searchTargetParent, addButton, resetButton, hideIfEmptyNode) {
		this.config = config;
		this.configValue = configValue;
		this.template = template;
		this.searchTargetParent = searchTargetParent;
		this.addButton = addButton;
		this.resetButton = resetButton;
		this.hideIfEmptyNode = hideIfEmptyNode;

		this.searchTargets = [];
		this.searchTargetControllers = [];
		this.setupSearchTargets();

		this.addButton.addEventListener("click", () => this.addSearchTarget(), false);
		this.resetButton.addEventListener("click", () => this.resetSearchTargets(), false);
	}

	async addSearchTarget() {
		const searchTarget = { title: "", url: "", enabled: true };
		const index = this.searchTargets.length;
		this.searchTargets.push(searchTarget);
		this.searchTargetControllers.push(new SettingsSearchTargetController(this, searchTarget, index));
		if (index > 0) {
			const c = this.searchTargetControllers[index - 1];
			if (c !== null) { c.updateIndex(c.index); }
		}

		this.updateSearchTargetCount();

		await this.saveConfig();
	}

	async resetSearchTargets() {
		this.cleanupSearchTargets();

		this.configValue.searchTargets = this.config.getDefaultSearchTargets();
		await this.saveConfig();

		this.setupSearchTargets();
	}

	cleanupSearchTargets() {
		for (const searchTargetController of this.searchTargetControllers) {
			searchTargetController.destroy();
		}
		this.searchTargetControllers = [];
	}

	setupSearchTargets() {
		if (!Array.isArray(this.configValue.searchTargets)) {
			this.configValue.searchTargets = [];
		}

		this.searchTargets = this.configValue.searchTargets;
		this.searchTargetControllers = [];

		for (let i = 0, ii = this.searchTargets.length; i < ii; ++i) {
			const searchTarget = this.searchTargets[i];
			const controller = isObject(searchTarget) ? new SettingsSearchTargetController(this, searchTarget, i) : null;
			this.searchTargetControllers.push(controller);
		}

		this.updateSearchTargetCount();
	}

	async move(controller, offset) {
		const indexOld = controller.index;
		const indexNew = Math.max(0, Math.min(this.searchTargetControllers.length - 1, indexOld + offset));
		if (indexNew === indexOld) { return; }

		const searchTarget = this.searchTargets[indexOld];

		this.searchTargets.splice(indexOld, 1);
		this.searchTargets.splice(indexNew, 0, searchTarget);

		this.searchTargetControllers.splice(indexOld, 1);
		this.searchTargetControllers.splice(indexNew, 0, controller);

		for (let i = Math.min(indexOld, indexNew), ii = Math.max(indexOld, indexNew) + 1; i < ii; ++i) {
			const c = this.searchTargetControllers[i];
			if (c !== null) { c.updateIndex(i); }
		}

		let next = null;
		for (let i = indexNew + 1, ii = this.searchTargetControllers.length; i < ii; ++i) {
			const c = this.searchTargetControllers[i];
			if (c !== null) {
				next = c;
				break;
			}
		}

		if (next !== null && next.row.parentNode !== null) {
			next.row.parentNode.insertBefore(controller.row, next.row);
		} else {
			this.searchTargetParent.appendChild(controller.row);
		}

		await this.saveConfig();
	}

	async remove(controller) {
		const index = controller.index;
		this.searchTargets.splice(index, 1);
		this.searchTargetControllers.splice(index, 1);

		controller.destroy();

		for (let i = Math.max(0, index - 1), ii = this.searchTargetControllers.length; i < ii; ++i) {
			const c = this.searchTargetControllers[i];
			if (c !== null) { c.updateIndex(i); }
		}

		this.updateSearchTargetCount();

		await this.saveConfig();
	}

	updateSearchTargetCount() {
		if (this.hideIfEmptyNode === null) { return; }
		this.hideIfEmptyNode.style.display = (this.searchTargetControllers.length > 0 ? "" : "none");
	}

	async saveConfig() {
		this.config.save();
	}
}

class SettingsSearchTargetController {
	constructor(parent, searchTarget, index) {
		this.parent = parent;
		this.searchTarget = searchTarget;
		this.index = index;

		this.hookedEvents = [];
		this.row = this.parent.template.cloneNode(true);
		this.parent.searchTargetParent.appendChild(this.row);

		this.removeButton = this.row.querySelector(".x-search-links-remove-button");
		this.moveUpButton = this.row.querySelector(".x-search-links-move-up-button");
		this.moveDownButton = this.row.querySelector(".x-search-links-move-down-button");
		this.titleField = this.row.querySelector(".x-search-links-title-input");
		this.urlField = this.row.querySelector(".x-search-links-url-input");
		this.enabledCheckbox = this.row.querySelector(".x-search-links-enabled-input");

		this.titleField.value = (typeof(searchTarget.title) === "string" ? searchTarget.title : "");
		this.urlField.value = (typeof(searchTarget.url) === "string" ? searchTarget.url : "");
		this.enabledCheckbox.checked = !!searchTarget.enabled;

		const self = this;
		this._hook(this.removeButton, "click", () => this.remove());
		this._hook(this.moveUpButton, "click", () => this.moveUp());
		this._hook(this.moveDownButton, "click", () => this.moveDown());
		this._hook(this.titleField, "change", function () { self.setTitle(this.value); });
		this._hook(this.urlField, "change", function () { self.setUrl(this.value); });
		this._hook(this.enabledCheckbox, "change", function () { self.setEnabled(this.checked); });

		this.updateIndex(index);
	}

	destroy() {
		if (this.row === null) { return; }

		for (const info of this.hookedEvents) {
			info.node.removeEventListener(info.event, info.callback, false);
		}
		this.hookedEvents = [];

		this.row.parentNode.removeChild(this.row);
		this.row = null;
	}

	remove() {
		this.parent.remove(this);
	}

	moveUp() {
		this.parent.move(this, -1);
	}

	moveDown() {
		this.parent.move(this, 1);
	}

	setTitle(value) {
		if (typeof(value) !== "string") { return; }
		this.searchTarget.title = value;
		this.parent.saveConfig();
	}

	setUrl(value) {
		if (typeof(value) !== "string") { return; }
		this.searchTarget.url = value;
		this.parent.saveConfig();
	}

	setEnabled(value) {
		this.searchTarget.enabled = !!value;
		this.parent.saveConfig();
	}

	updateIndex(index) {
		this.index = index;
		this.moveUpButton.disabled = (index <= 0);
		this.moveDownButton.disabled = (index >= this.parent.searchTargets.length - 1);
	}

	_hook(node, event, callback) {
		this.hookedEvents.push({ node, event, callback });
		node.addEventListener(event, callback, false);
	}
}


function isObject(v) {
	return (v !== null && typeof(v) === "object" && !Array.isArray(v));
}

function addLink() {
	settings.addLink();
}

async function initialize() {
	settings.initialize();

	const section = settings.addSection("Search Links", "search-links", 3);
	if (section !== null) {
		const config = require("./config");
		const configValue = await config.get();
		setupSettings(config, configValue, section);
	}
}

function setupSettings(config, configValue, container) {
	if (settingsController !== null) { return; }

	container.innerHTML = require("./settings.html");

	const template = container.querySelector(".x-search-links-search-target-entry");
	const parent = template.parentNode;
	const addButton = container.querySelector(".x-search-links-add-button");
	const resetButton = container.querySelector(".x-search-links-reset-link");
	const hideNode = container.querySelector(".x-search-links-search-target-container");
	parent.removeChild(template);

	settingsController = new SettingsController(config, configValue, template, parent, addButton, resetButton, hideNode);
}


module.exports = {
	addLink,
	initialize
};
