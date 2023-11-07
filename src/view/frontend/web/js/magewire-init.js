define([
    'require',
    'magewire',
    'magewireEvent'
], function (requirejs, mw, mwe) {
    'use strict';

    // Bind 'magewire' events onto it 'livewire' predecessor.
    const magewireEvents = ['load', 'update'].forEach((target, index) => {
        document.addEventListener('livewire:' + target, () => {
            mwe.dispatchMagewireEvent(target)
        })
    })

    if (window.magewire) {
        if (requirejs.defined('Livewire')) {
            mwe.dispatchMagewireEvent('available')
        }

        window.magewire.start();
    }
});
