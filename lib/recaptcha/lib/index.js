/*
 * cahoots-submission-recaptcha
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

var mandatory = require('mandatory');
var VError = require('verror');
var superagent = require('superagent');
var debug = require('debug')('cahoots:submission:recaptcha');

const SECRET = process.env.RECAPTCHA_SECRET;

module.exports = function instantiate () {
    var recaptcha = new Recaptcha();

    return {
        verify: recaptcha.verify.bind(recaptcha)
    };
};

function Recaptcha () {
    this.$endpoint = 'https://www.google.com/recaptcha/api/siteverify';
}

Recaptcha.prototype.verify = function verify (ipAddress, recaptchaResponse, callback) {

    mandatory(ipAddress).is('string', 'Please provide the ip address of the user whose reCAPTCHA should be checked.');
    mandatory(recaptchaResponse).is('string', 'Please provide the reCAPTCHA response.');
    mandatory(callback).is('function', 'Please provide a proper callback function.');

    function onResponse (err, res) {
        var body = '';

        if (err) {
            debug('Request failed: %s', err.toString());

            return callback(new VError(err, 'failed to communicate with Google reCAPTCHA API.'));
        }

        try {
            body = JSON.parse(res.text);
        } catch (err) {
            return callback(new VError(err, 'failed to parse the response from the Google reCAPTCHA API.'));
        }

        if (!body.success) {
            debug('Google says that the reCAPTCHA validation was not successful. Code: %j', body['error-codes']);

            return callback(null, false);
        }

        callback(null, true);
    }

    superagent.post(this.$endpoint)
        .query({
            secret: SECRET,
            response: recaptchaResponse,
            remoteip: ipAddress
        })
        .end(onResponse);

};
