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

var expect = require('expect.js');

var recaptcha = require('../');

describe('The reCAPTCHA module', function suite () {

    it('should be able to handle a wrong reCAPTCHA challenge', function test (done) {
        var captcha = recaptcha();

        function onVerify (err, success) {
            expect(err).to.be(null);

            expect(success).to.be(false);

            done();
        }

        captcha.verify('127.0.0.1', 'testing', onVerify);
    });

});
