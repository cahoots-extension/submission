/*
 * cahoots-submission-recaptcha
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

process.env.RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET || '';

module.exports = require('./lib/');
