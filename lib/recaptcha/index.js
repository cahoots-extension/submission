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

process.env.RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET || '';

module.exports = require('./lib/');
