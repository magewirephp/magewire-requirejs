define([
    'domReady!'
], function () {
    'use strict';

    return {
        dispatchMagewireEvent: function (name, data = null) {
            let event = document.createEvent('Events')

            event.initEvent('magewire:' + name, true, true)
            event.detail = data

            document.dispatchEvent(event)
        }
    }
});
