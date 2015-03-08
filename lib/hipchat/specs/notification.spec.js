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

var expect = require('expect.js');

var hipchat = require('..');

describe('The HipChat module', function suite () {
    it('should be able to send a notification', function test (done) {
        var service = hipchat();

        function onNotify (err) {
            expect(err).to.be(null);

            done();
        }

        service.notify('edeltraud', 'Hello World', onNotify);
    });
});
