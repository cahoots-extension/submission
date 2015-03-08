/*
 * cahoots-submission-hipchat
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

var superagent = require('superagent');
var mandatory = require('mandatory');
var VError = require('verror');
var debug = require('debug')('cahoots:submission:hipchat');

module.exports = function instantiate () {

    var hipchat = new HipChat();

    return {
        notify: hipchat.notify.bind(hipchat)
    };

};

function HipChat () {
    this.$endpoint = 'https://api.hipchat.com/v1';
    this.$room = process.env.HIPCHAT_ROOM;
    this.$token = process.env.HIPCHAT_TOKEN;
}

HipChat.prototype.notify = function notify (author, message, callback) {
    var query = {};

    mandatory(author).is('string', 'Please provide a proper author name.');
    mandatory(message).is('string', 'Please provide a proper notification message.');

    callback = callback || function noop () {};

    function onRequest (err, res) {
        if (err) {
            debug('failed to send the message "%s" to the room', message);

            return callback(new VError(err, 'failed send a notification to the HipChat room.'));
        }

        if (res.status !== 200) {
            return callback(new VError('Received unusual response status from the HipChat API: %d', res.status));
        }

        debug('Sent notification to HipChat.');

        callback(null);
    }

    query.auth_token = this.$token;
    query.room_id = this.$room;
    query.from = author;
    query.color = 'green';
    query.message_format = 'html';
    query.message = message;
    query.notify = 1;

    superagent.post(this.$endpoint + '/rooms/message')
        .query(query)
        .end(onRequest);

};
