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

describe('The platform\'s factory method', function suite () {

    it('should be able to return a specific platform service', function test (done) {
        var service = platform('submission');

        expect(service).not.to.be(undefined);
        expect(service.save).not.to.be(undefined);

        done();
    });

});
