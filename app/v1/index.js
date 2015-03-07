/*
 * cahoots-submission
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

var resources = {
    submissions: require('./submissions')
};

module.exports = function instantiate () {
    var all = [];

    for (let resource in resources) {
        let routes = resources[resource]();

        Array.prototype.push.apply(all, routes);
    }

    return all;
};
