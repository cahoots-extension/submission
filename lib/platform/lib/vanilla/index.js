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

var services = {
    submission: require('./submission')
};

module.exports = function instantiate (type) {
    var service = services[type];

    mandatory(service).is('function', 'Please provide a proper service type.');

    // Instantiate the service and return it.
    return service();
};
