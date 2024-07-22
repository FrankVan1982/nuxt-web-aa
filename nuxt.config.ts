// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
	  charset: 'utf-8',
	  viewport: 'width=device-width, initial-scale=1',
	}
},
  meta: {
    title: 'Azienda Agricola Nuda Terra',
  },
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts'],
  compatibilityDate: '2024-07-20',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
