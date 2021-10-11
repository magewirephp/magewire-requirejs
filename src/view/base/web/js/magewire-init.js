define([
    'magewire',
    'magewireEvent'
], function (mw, mwe) {
    'use strict';

    // Bind 'magewire' events onto it 'livewire' predecessor
    const magewireEvents = ['load', 'available', 'update'].forEach((target, index) => {
        document.addEventListener('livewire:' + target, () => {
            mwe.dispatchMagewireEvent(target)
        })
    })

    if (window.magewire) {
        window.magewire.start();
    }
});
