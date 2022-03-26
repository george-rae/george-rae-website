import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  routes: {
    "/": { prerender: true, static: true }
  },
  ssr: false,
  target: "static",
  static: true,
  meta: {
    title: "George MF Rae | Web Developer",
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,700;1,400;1,700&display=swap'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [

    ],
  },
  css: [
    // SCSS file in the project
    '~/assets/styles/main.scss',
  ],
})
