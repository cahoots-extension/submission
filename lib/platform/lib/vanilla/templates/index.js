/*
 * cahoots-submission-platform
 *
 * Copyright Cahoots.pw
 * MIT Licensed
 *
 */

/**
 * @author André König <andre@cahoots.ninja>
 *
 */

'use strict';

var mandatory = require('mandatory');

var templates = {
    submission: require('./submission')
};

module.exports = function instantiate (type) {
    var template = templates[type];

    mandatory(template).is('function', 'Please provide a proper template type.');

    // Create an instance of the requested template.
    return template();
};
