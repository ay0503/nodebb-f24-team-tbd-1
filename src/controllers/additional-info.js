'use strict';

const nconf = require('nconf');
const helpers = require('./helpers');

const additionalInfoController = module.exports;

additionalInfoController.get = async function (req, res, next) {
    // You can customize the data being sent to the template
    const data = {
        title: 'Additional Information',
        breadcrumbs: helpers.buildBreadcrumbs([{ text: 'Additional Information' }]),
    };

    // Render the additional-info template without the 'templates/' prefix
    res.render('additional-info', data);
};