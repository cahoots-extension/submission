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

var expect = require('expect.js');

var platform = require('../');

describe('The platform\'s factory method', function suite () {

    it('should be able to return a specific platform service', function test (done) {
        var service = platform('submission');

        expect(service).not.to.be(undefined);
        expect(service.insert).not.to.be(undefined);

        done();
    });

});
