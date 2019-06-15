"use strict";

const configKey = "x-search-links-config";
const searchTargetsDefault = [
	{
		title: "Search by Name",
		url: "/?f_cats=0&f_sname=1&f_search=\"{short-name}\"",
		enabled: true
	},
	{
		title: "Search by Full Name",
		url: "/?f_cats=0&f_sname=1&f_search=\"{full-name}\"",
		enabled: true
	},
	{
		title: "Search by Name (nhentai.net)",
		url: "https://nhentai.net/search/?q=\"{short-name}\"",
		enabled: true
	},
	{
		title: "Search by Full Name (nhentai.net)",
		url: "https://nhentai.net/search/?q=\"{full-name}\"",
		enabled: true
	},
	{
		title: "Search by Name (hitomi.la)",
		url: "https://hitomi.la/search.html?{short-name}",
		enabled: true
	},
	{
		title: "Search by Full Name (chaika)",
		url: "https://panda.chaika.moe/search/?qsearch={full-name}",
		enabled: true
	},
	{
		title: "Search by Name (chaika)",
		url: "https://panda.chaika.moe/search/?qsearch={short-name}",
		enabled: true
	},
	{
		title: "Search by URL (chaika)",
		url: "https://panda.chaika.moe/search/?qsearch={url}",
		enabled: true
	}
];
const configDefault = {
	searchTargets: getDefaultSearchTargets()
};

function getDefaultSearchTargets() {
	return JSON.parse(JSON.stringify(searchTargetsDefault, null, ""));
}

module.exports = require("../config").create(configKey, configDefault);
module.exports.getDefaultSearchTargets = getDefaultSearchTargets;
