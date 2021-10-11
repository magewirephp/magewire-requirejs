define([
    'Magento_Customer/js/customer-data'
], function (customerData) {
    'use strict';

    window.addEventListener('messages-loaded', event => {
        let customerMessages = customerData.get('messages')() || {},
            existingMessages = customerMessages.messages || []

        Object.keys(event.detail.messages).forEach(function (key) {
            existingMessages.push(event.detail.messages[key])
        });

        customerMessages.messages = existingMessages
        customerData.set('messages', customerMessages)
    })
})
