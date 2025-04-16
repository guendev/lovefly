// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {
        enabled: true
    },
    routeRules: {
        '/auth/google/apple-callback': {
            headers: {
                'Cache-Control': 'no-cache'
            },
            redirect: 'stunow://auth/google/callback'
        }
    }
})