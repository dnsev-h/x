"use strict";


const xPrefix = "#!x";
const separator = "/";
const routes = [];


function clear(addHistory) {
	const url = window.location.pathname + window.location.search;
	if (addHistory) {
		window.history.pushState(null, "", url);
	} else {
		window.history.replaceState(null, "", url);
	}
}

function create(path) {
	return path ? `${xPrefix}${separator}${path}` : xPrefix;
}

function addRoute(match, callback) {
	const route = { match, callback };
	routes.push(route);
	if (routes.length === 1) {
		window.addEventListener("popstate", onUrlFragmentChanged, false);
	}
	testRoutes([route]);
}

function removeRoute(match, callback) {
	for (let i = 0, ii = routes.length; i < ii; ++i) {
		const route = routes[i];
		if (route.match === match && route.callback === callback) {
			routes.splice(i, 1);
			if (routes.length === 0) {
				window.removeEventListener("popstate", onUrlFragmentChanged, false);
			}
			return true;
		}
	}
	return false;
}

function getXFragment() {
	const fragment = window.location.hash;
	return (
		!fragment ||
		fragment.length < xPrefix.length ||
		fragment.substr(0, xPrefix.length) !== xPrefix ||
		(fragment.length > xPrefix.length && fragment[xPrefix.length] !== separator)) ?
		null :
		fragment.substr(xPrefix.length);
}

function testRoutes(routes) {
	const fragment = getXFragment();
	if (fragment === null) { return; }

	for (const route of routes) {
		const match = route.match.exec(fragment);
		if (match !== null) {
			route.callback(match, fragment);
		}
	}
}

function onUrlFragmentChanged() {
	testRoutes(routes);
}


module.exports = {
	clear: clear,
	create: create,
	addRoute: addRoute,
	removeRoute: removeRoute
};
