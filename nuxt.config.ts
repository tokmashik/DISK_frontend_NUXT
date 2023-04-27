import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],    
    build: {
        transpile: ['primevue']
    }
})

/*buildModules: [
    'nuxt-vite'
  ],*/