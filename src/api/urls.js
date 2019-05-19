"use strict";

function uploader(usernName) {
	return `/uploader/${usernName}`;
}

function category(category) {
	return `/${category}`;
}

function favoritesPopup(id, token) {
	return `/gallerypopups.php?gid=${id}&t=${token}&act=addfav`;
}


module.exports = {
	uploader,
	category,
	favoritesPopup
};
