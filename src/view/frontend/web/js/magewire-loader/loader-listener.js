define([
    'jquery',
    'loader',
    'domReady!',
], function ($, loader) {
    'use strict';

    document.addEventListener('magewire:loader:start', (event) => {
        $('#html-body').trigger('processStart')
    })
    document.addEventListener('magewire:loader:stop', (event) => {
        $('#html-body').trigger('processStop')
    })
});
