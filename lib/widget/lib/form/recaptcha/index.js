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

var template = require('mini.template');

module.exports = function instantiate (key, form) {
    var recaptcha = new Recaptcha(key, form);

    return {
        install: recaptcha.install.bind(recaptcha)
    };
};

function Recaptcha (key, form) {
    this.$url = 'https://www.google.com/recaptcha/api.js';
    this.$node = form.querySelectorAll('.cahoots-submission-widget--captcha')[0];
    this.$template = '<div class="g-recaptcha" data-sitekey="{key}"></div>';

    if (!this.$node) {
        throw new Error('failed to initialize the reCAPTCHA button. Missing specific element with class "cahoots-submission-widget--captcha"');
    }

    this.$key = this.$node.dataset.key;
}

Recaptcha.prototype.$installScript = function $installScript () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.$url;

    document.body.appendChild(script);
};

Recaptcha.prototype.install = function install () {
    this.$node.innerHTML = template(this.$template, {key: this.$key});

    this.$installScript();
};
