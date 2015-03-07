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

var expect = require('expect.js');

var platform = require('../');

describe('The platform\'s submission service', function suite () {

    it('should be able to insert a new submission', function test (done) {
        var service = platform('submission');

        function onInsert (err) {
            expect(err).to.be(null);

            done();
        }

        service.insert({}, onInsert);
    });

});