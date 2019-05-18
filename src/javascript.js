"use strict";


function inject(func, args) {
	const parent = document.body || document.documentElement.querySelector("head") || document.documentElement || null;
	if (!parent) { return false; }

	const scriptNode = document.createElement("script");
	const argStr = (Array.isArray(args) && args.length > 0) ?
		`...${JSON.stringify(args, null, "")}` :
		"";
	scriptNode.textContent = `(${func.toString()})(${argStr});`;

	parent.appendChild(scriptNode);
	parent.removeChild(scriptNode);

	return true;
}


module.exports = {
	inject
};
