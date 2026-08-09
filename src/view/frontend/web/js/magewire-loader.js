define([
    'magewire',
    'magewireEvent',
    'domReady!',
], function (magewire, magewireEvent) {
    'use strict';

    let hasEmits = false

    const canShowLoader = (message, component) => {
        if (Array.isArray(component.effects.loader)) {
            for (const item of message.updateQueue) {
                if (item.type !== 'callMethod') {
                    continue
                }

                return component.effects.loader.includes(item.method)
            }
        }

        return 'loader' in component.effects || hasEmits
    }

    Magewire.hook('message.sent', (message, component) => {
        if (canShowLoader(message, component)) {
            hasEmits = false

            magewireEvent.dispatchMagewireEvent('loader:start', {
                message: message, component: component
            })
        }
    })
    Magewire.hook('message.processed', (message, component) => {
        hasEmits = 'loader' in component.effects && 'emits' in message.response.effects

        magewireEvent.dispatchMagewireEvent('loader:stop', {
            message: message, component: component
        })
    })
    Magewire.hook('message.failed', (message, component) => {
        magewireEvent.dispatchMagewireEvent('loader:stop', {
            message: message, component: component
        })
    })
});
