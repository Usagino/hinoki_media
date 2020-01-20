export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: [
    '~/assets/stylesheets/reset.css',
    { src: '~/assets/stylesheets/style.scss', lang: 'scss' }
  ],

  plugins: ['~plugins/fetchData.js', { src: '~/plugins/feather.js' }],

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', ['nuxt-webfontloader'], '@nuxtjs/style-resources'],

  styleResources: {
    scss: ['~/assets/stylesheets/style.scss']
  },

  axios: {},

  webfontloader: {
    google: {
      families: ['Noto+Sans+JP', 'Open+Sans']
    }
  },

  build: {
    extend(config, ctx) {}
  }
}
