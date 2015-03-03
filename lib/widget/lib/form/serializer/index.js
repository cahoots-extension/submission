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

module.exports = function instantiate (form) {
    var serializer = new Serializer(form);

    return {
        toJSON: serializer.toJSON.bind(serializer)
    };
};

function Serializer (form) {
    this.$form = form;
}

Serializer.prototype.toJSON = function toJSON () {
    var inputs = this.$form.querySelectorAll('input[type=text]');
    var result = {};

    [].forEach.call(inputs, function onEach (input) {
        result[input.getAttribute('name')] = input.value;
    });

    return result;
};
