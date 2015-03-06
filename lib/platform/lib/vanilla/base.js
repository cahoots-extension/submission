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

var VError = require('verror');
var superagent = require('superagent');

module.exports = BaseService;

function BaseService (endpoint) {
    this.$endpoint = endpoint;
}

BaseService.prototype.$request = function $request (verb, resource, params, callback) {
    var uri = this.$endpoint + resource;

    function onResponse (err, res) {
        if (err) {
            return callback(new VError(err, 'failed to communicate with the cahoots API.'));
        }

        if (res.status < 200 || res.status >= 300) {
            return callback(new VError('API sent an error response.'));
        }

        try {
            return callback(null, JSON.parse(res.text));
        } catch (err) {
            return callback(new VError(err, 'Unable to parse API response.'));
        }
    }

    if (typeof params === 'function') {
        callback = params;
        params = {};
    }

    superagent[verb.toLowerCase()](uri)
        .set(this.$headers)
        .query(params.query)
        .send(params.body)
        .end(onResponse);
};

BaseService.prototype.$firePOST = function $firePOST (resource, params, callback) {
    function onResponse (err, body) {
        var error = null;

        if (err) {
            error = new VError(err, 'failed to perform HTTP POST request');
            error.name = err.name;

            return callback(error);
        }

        callback(null, body);
    }

    if (typeof params === 'function') {
        callback = params;
        params = {};
    }

    this.$request('POST', resource, params, onResponse);
};
