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

var crypto = require('crypto');

var VError = require('verror');
var superagent = require('superagent');
var alphanumeric = require('alphanumeric-sort').compare;
var debug = require('debug')('cahoots:submission:base');

module.exports = BaseService;

const ENDPOINT = process.env.ENDPOINT || 'https://forum.cahoots.pw/api';
const EMAIL = process.env.PLATFORM_EMAIL || '';
const SECRET = process.env.PLATFORM_SECRET || '';

function BaseService () {}

BaseService.prototype.$sign = function $sign (query) {
    var params = Object.keys(query).map(function onMap (key) {
        return query[key];
    });
    var stringified = '';

    // We need an alphanumeric sort algorithm because vanilla utilizes php's `ksort` internally.
    params.sort(alphanumeric);

    stringified += params.join('-');

    return crypto.createHmac('sha256', SECRET).update(stringified.toLowerCase()).digest('hex');
};

BaseService.prototype.$request = function $request (verb, resource, params, callback) {
    var uri = ENDPOINT + resource;

    function onResponse (err, res) {
        if (err) {
            debug('Request failed: %s', err.toString());

            return callback(new VError(err, 'failed to communicate with the cahoots API.'));
        }

        if (res.status < 200 || res.status >= 300) {
            debug('API sent an error response: %d', res.status);

            return callback(new VError('API sent an error response: %s', res.text));
        }

        try {
            return callback(null, JSON.parse(res.text));
        } catch (err) {
            debug('API response was not parsable: %s', err.toString());

            return callback(new VError(err, 'Unable to parse API response.'));
        }
    }

    if (typeof params === 'function') {
        callback = params;
        params = {};
    }

    params.query = params.query || {};

    //
    // Authentication
    //
    params.query.email = EMAIL;
    params.query.timestamp = Math.floor(Date.now() / 1000);
    params.query.token = this.$sign(params.query);

    superagent[verb.toLowerCase()](uri)
        .query(params.query)
        .send(params.body)
        .end(onResponse);
};

BaseService.prototype.$firePOST = function $firePOST (resource, params, callback) {
    function onResponse (err, body) {
        if (err) {
            return callback(new VError(err, 'failed to perform HTTP POST request'));
        }

        callback(null, body);
    }

    if (typeof params === 'function') {
        callback = params;
        params = {};
    }

    this.$request('POST', resource, params, onResponse);
};
