// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',

    css: ['@unocss/reset/tailwind-compat.css'],

    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },

    routeRules: {
        '/auth/google/apple-callback': {
            headers: {
                'Cache-Control': 'no-cache'
            },
            redirect: 'stunow://auth/google/callback'
        }
    },

    imports: {
        imports: [
            { from: 'tailwind-merge', name: 'twMerge' }
        ]
    },
    modules: [
        '@nuxt/image',
        '@unocss/nuxt',
        '@vueuse/nuxt',
        'motion-v/nuxt',
        '@nuxt/icon'
    ]
})