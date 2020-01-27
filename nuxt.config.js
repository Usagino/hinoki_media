import axios from 'axios'
const apiUrl = 'https://admin.frontartgraph.com'
export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s | HINOKI',
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
  css: [
    '~/assets/stylesheets/reset.css',
    { src: '~/assets/stylesheets/style.scss', lang: 'scss' }
  ],
  loading: {
    color: '#333333',
    height: '5px',
    continuous: true,
    duration: 4000
  },
  plugins: [
    '~plugins/fetchData.js',
    '~plugins/components.js',
    '~plugins/postDecode.js',
    { src: '~/plugins/feather.js' },
    { src: '~/plugins/carousel.js', ssr: false }
  ],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa'
  ],
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
    extend(config, ctx) {},
    terser: {
      terserOptions: {
        compress: { drop_console: true }
      }
    }
  },
  generate: {
    interval: 2000,
    routes() {
      return Promise.all([
        axios.get(`${apiUrl}/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1`)
      ]).then((data) => {
        const posts = data[0]
        return posts.data.map((post) => {
          return {
            route: '/news/' + post.id,
            payload: post
          }
        })
      })
    }
  }
}
