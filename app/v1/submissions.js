/*
 * cahoots-submission
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

var http = require('http');

var platform = require('cahoots-submission-platform');
var recaptcha = require('cahoots-submission-recaptcha');

var debug = require('debug')('cahoots:submission:SubmissionsResource');

module.exports = function instantiate () {
    var resource = new SubmissionsResource();

    return [
        {
            method: 'POST',
            path: '/submissions',
            handler: resource.insert.bind(resource)
        }
    ];
};

/**
 * The /submissions resource.
 *
 */
function SubmissionsResource () {
    this.$service = platform('submission');
}

/**
 * POST /submissions
 *
 * Posts a new submission to the platform.
 *
 */
SubmissionsResource.prototype.insert = function insert (req, res) {
    var self = this;
    var submission = req.body;
    var ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    function onRecaptchaVerify (err, ok) {
        if (err) {
            debug('Error while validating the reCAPTCHA: %s', err.toString());

            return res.status(200).send(http.STATUS_CODES[500]);
        }

        if (!ok) {
            debug(' Google says that the reCAPTCHA challenge is not valid!');

            return res.status(400).send(http.STATUS_CODES[400]);
        }

        self.$service.insert(submission, onInsert);
    }

    function onInsert (err, url) {
        if (err) {
            debug('Failed to post the submission on the platform: %s', err.toString());

            return res.status(200).send(http.STATUS_CODES[500]);
        }

        res.status(201).json({
            url: url
        });
    }

    // TODO: Refactor use JSON schema
    if (!submission.authorName ||
        !submission.organizationName ||
        !submission.organizationInfo ||
        !submission.cahootsSource ||
        !submission.recaptcha) {

        debug('Someone sent an invalid response!');

        return res.status(400).send(http.STATUS_CODES[400]);
    }

    debug('Received submission: %j', submission);

    recaptcha().verify(ipaddress, submission.recaptcha, onRecaptchaVerify);
};
