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

var adapters = {
    vanilla: require('./vanilla/')
};

module.exports = function instantiate (type) {
    var service = adapters.vanilla(type);

    mandatory(service).is('object', 'Please provide a proper service type.');

    return service;
};
