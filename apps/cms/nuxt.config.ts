// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
        'common-packages'
    ],
    srcDir: 'src/',
    plugins: [
        '~/plugins/vee-validate.js'
    ]
})
