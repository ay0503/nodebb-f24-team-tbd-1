'use strict';

const nconf = require('nconf');
const validator = require('validator');

const helpers = require('./helpers');
const recentController = require('./recent');

const additionalInfoController = module.exports;

additionalInfoController.get = async function (req, res, next) {
	const data = await recentController.getData(req, 'additional-info', 'posts');
	if (!data) {
		return next();
	}
	const term = helpers.terms[req.query.term] || 'alltime';
	if (req.originalUrl.startsWith(`${nconf.get('relative_path')}/api/additional-info`) || req.originalUrl.startsWith(`${nconf.get('relative_path')}/additional-info`)) {
		data.title = `[[pages:additional-info-${term}]]`;
		const breadcrumbs = [{ text: '[[global:header.additional-info]]' }];
		data.breadcrumbs = helpers.buildBreadcrumbs(breadcrumbs);
	}

	if (!data['feeds:disableRSS'] && data.rssFeedUrl) {
		const feedQs = data.rssFeedUrl.split('?')[1];
		data.rssFeedUrl = `${nconf.get('relative_path')}/additional-info/${validator.escape(String(req.query.term || 'alltime'))}.rss`;
		if (req.loggedIn) {
			data.rssFeedUrl += `?${feedQs}`;
		}
	}
	res.render('additional-info', data);
};






