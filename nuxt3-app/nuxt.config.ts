// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  vite: {
    server: {
      proxy: {
        '/api/': {
          target: 'http://127.0.0.1:8015/',
        }
      }
    }
  }
})
