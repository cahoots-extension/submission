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

var recaptcha = require('./recaptcha/');
var serializer = require('./serializer/');

module.exports = function instantiate (node) {

    var form = new Form(node);

    return {
        takeover: form.takeover.bind(form),
        on: form.on.bind(form)
    };
};

function Form (node) {
    this.$node = node.querySelectorAll('form')[0];

    if (!this.$node) {
        throw new Error('no submission form found.');
    }

    this.$url = this.$node.getAttribute('action') || 'http://submission.cahoots.pw';
    this.$events = {};
    this.$events.send = [];
}

Form.prototype.$emit = function $emit (type, data) {
    var subscribers = this.$events[type];

    if (subscribers) {
        subscribers.forEach(function onEach (subscriber) {
            subscriber(data);
        });
    }
};

Form.prototype.$submit = function $submit (e) {
    e.preventDefault();

    console.log(serializer(this.$node).toJSON());

    this.$emit('send');
};

Form.prototype.takeover = function takeover () {
    recaptcha(this.$captchaKey, this.$node).install();

    this.$node.addEventListener('submit', this.$submit.bind(this));
};

Form.prototype.on = function on (type, fn) {
    var has = this.$events[type];

    if (has) {
        this.$events[type].push(fn);
    }
};
