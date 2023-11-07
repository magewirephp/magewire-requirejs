define([
    'magewire'
], function () {
    'use strict';

    let intersectRegistry = []

    Magewire.directive('intersect', (element, directive, component) => {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!intersectRegistry.includes(component.fingerprint.id) && entry.isIntersecting) {
                    component.call(directive.value ? directive.method : '$refresh', ...directive.params)
                    intersectRegistry.push(component.fingerprint.id)
                    observer.disconnect()
                }
            })
        })

        observer.observe(element)
    })
});
