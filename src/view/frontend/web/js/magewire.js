define([
    'jquery',
    'mage/cookies',
    'Livewire',
], function ($, MageCookies, Livewire) {
    'use strict';

    if (window.livewire) {
        console.warn('Magewire: It looks like Magewire\'s JavaScript assets have already been loaded. Make sure you aren\'t loading them twice.')
    }

    window.magewire = new Livewire

    window.Livewire = window.magewire
    window.Magewire = window.magewire

    window.livewire_token = $.mage.cookies.get('form_key')

    // In the backend we need another variable to get the form key
    if (typeof FORM_KEY !== 'undefined') {
        window.livewire_token = FORM_KEY
    }

    return function (config) {
        window.magewire.devTools(config.app_debug ?? false)
        window.livewire_app_url = config.app_url ?? '/magewire/post'
    }
});
