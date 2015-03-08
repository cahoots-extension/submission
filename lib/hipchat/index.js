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

process.env.HIPCHAT_ROOM = process.env.HIPCHAT_ROOM || '';
process.env.HIPCHAT_TOKEN = process.env.HIPCHAT_TOKEN || '';

module.exports = require('./lib/');
