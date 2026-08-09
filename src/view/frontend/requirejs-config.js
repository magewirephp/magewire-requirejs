var config = {
    paths: {
        Livewire: 'Magewirephp_Magewire/js/livewire'
    },
    deps: [
        'Magewirephp_MagewireRequireJs/js/magewire/plugin/intersect',
        'Magewirephp_MagewireRequireJs/js/magewire-init',
        'Magewirephp_MagewireRequireJs/js/magewire-message',
        'Magewirephp_MagewireRequireJs/js/magewire-loader',
        'Magewirephp_MagewireRequireJs/js/magewire-loader/loader-listener'
    ],
    map: {
        '*': {
            magewire: 'Magewirephp_MagewireRequireJs/js/magewire',
            magewireEvent: 'Magewirephp_MagewireRequireJs/js/magewire-event'
        }
    }
}
