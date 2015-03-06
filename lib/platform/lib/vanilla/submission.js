/*
 * cahoots-submission-platform
 *
 * Copyright Cahoots.pw
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var util = require('util');

var mandatory = require('mandatory');

var BaseService = require('./base');

module.exports = function instantiate (endpoint) {
    var service = new SubmissionService(endpoint);

    return {
        save: service.save.bind(service)
    };
};

function SubmissionService (endpoint) {
    BaseService.call(this, endpoint);
}

util.inherits(SubmissionService, BaseService);

SubmissionService.prototype.save = function save (submission, callback) {

    mandatory(submission).is('object', 'Please provide a proper submission object.');
    mandatory(callback).is('function', 'Please provide a proper callback function.');

};
