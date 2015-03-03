/*
 * cahoots-submission-widget
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

var form = require('./form/');

module.exports = function main () {
    var widget = new Widget();

    return {
        boot: widget.boot.bind(widget)
    };
};

function Widget () {
    this.$node = document.querySelectorAll('.cahoots-submission-widget')[0];

    // Will be set while booting
    this.$form = form(this.$node);
}

Widget.prototype.boot = function boot () {
    this.$form.takeover();
};
