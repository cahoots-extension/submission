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

var fs = require('fs');
var path = require('path');

var mandatory = require('mandatory');
var renderer = require('lodash.template');

var html = fs.readFileSync(path.join(__dirname, 'submission.html'));

module.exports = function instantiate () {
    var template = new SubmissionTemplate();

    return {
        serialize: template.serialize.bind(template)
    };
};

function SubmissionTemplate () {}

SubmissionTemplate.prototype.serialize = function serialize (submission) {
    var serialized = {};

    mandatory(submission).is('object', 'Please provide a proper submission object for the serialization.');

    serialized.title = submission.authorName + ' - ' + submission.organizationName;
    serialized.body = renderer(html)(submission);

    return serialized;
};
