(function (window) {

'use strict';

var defaultRepo = window.env.site.repository || window.location.hostname,
	defaultUser = window.env.site.user || defaultRepo.split('.')[0],
	defaultPath = window.env.page.path || '/';

var $ = window.jQuery,
	site, page, github;

function _repos(options) {
	var user = (options && options.user) || defaultUser,
		repo = (options && options.repo) || defaultRepo;
	return 'repos/' + user + '/' + repo;
}

github = window.github = function (path, callback) {
	$.ajax('https://api.github.com/' + path).done(callback);
};

site = github.site = function (options, callback) {
	if (!callback) {
		callback = options;
		options = {};
	}
	github(_repos(options), callback);
};

site.commits = function (options, callback) {
	if (!callback) {
		callback = options;
		options = {};
	}
	var path = options && options.path,
		qstr = path ? '?path=' + path : '';
	github(_repos(options) + '/commits' + qstr, callback);
};

page = github.page = function (options, callback) {
	if (!callback) {
		callback = options;
		options = {};
	}
	var path = (options && options.path) || defaultPath;
	github(_repos(options) + '/contents/' + path, callback);
};

page.commits = function (options, callback) {
	if (!callback) {
		callback = options;
		options = {};
	}
	var path = (options && options.path) || defaultPath;
	github(_repos(options) + '/commits?path=' + path, callback);
};

page.historyPageURL = function (options) {
	var user = (options && options.user) || defaultUser,
		repo = (options && options.repo) || defaultRepo,
		path = (options && options.path) || defaultPath;
	return 'https://github.com/' + user + '/' + repo + '/commits/master/' + path;
};

})(this);
