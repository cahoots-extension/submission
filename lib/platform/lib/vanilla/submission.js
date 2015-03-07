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
var VError = require('verror');
var debug = require('debug')('cahoots:submission:submissionservice');

var BaseService = require('./base');

module.exports = function instantiate () {
    var service = new SubmissionService();

    return {
        insert: service.insert.bind(service)
    };
};

function SubmissionService () {
    BaseService.call(this);
}

util.inherits(SubmissionService, BaseService);

SubmissionService.prototype.insert = function insert (submission, callback) {

    var params = {};

    mandatory(submission).is('object', 'Please provide a proper submission object.');
    mandatory(callback).is('function', 'Please provide a proper callback function.');

    function onPost (err, body) {
        var url = '';

        if (err) {
            return callback(new VError(err, 'failed to insert the new submission'));
        }

        url += body.Discussion.Url;

        debug('Posted a new submission to the platform: %s', url);

        callback(null, url);
    }

    params.body = {
        Name: 'Test von der Submission-Plattform ' + Date.now(),
        Body: 'Lorem ipsum dolor sit amet',
        CategoryID: 1
    };

    this.$firePOST('/discussions', params, onPost);
};
