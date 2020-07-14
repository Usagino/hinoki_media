import axios from 'axios'
import metaData from './assets/json/metadata.json'
require('dotenv').config()
const endpoint = process.env.ENDPOINT
const gaid = process.env.GAID
const { ENDPOINT } = process.env.ENDPOINT
export default {
  mode: 'universal',
  target: 'static',
  head: {
    titleTemplate: '%s | ヒノキメディア',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      ...metaData
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [
    '~/assets/stylesheets/reset.css',
    { src: '~/assets/stylesheets/style.scss', lang: 'scss' },
    'swiper/dist/css/swiper.css'
  ],
  plugins: [
    { src: '~/plugins/feather.js' },
    { src: '~plugins/day.js' },
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/carousel.js', ssr: false },
    { src: '~/plugins/fetchData.js', ssr: true },
    { src: '~/plugins/gaRanking.js', ssr: true },
    { src: '~/plugins/axios', ssr: false }
  ],
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/components'],
  modules: [
    'nuxt-user-agent',
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-adsense',
      {
        id: 'ca-pub-9783845179819441'
      }
    ]
  ],
  styleResources: {
    scss: ['~/assets/stylesheets/style.scss']
  },
  axios: {
    proxy: true,
    baseURL: '/.netlify/functions'
  },
  proxy: {
    '/api': {
      target: endpoint,
      pathRewrite: { '^/api': '/' }
    },
    '/.netlify/functions/connpass': {
      target: endpoint
    }
  },
  env: {
    endpoint: process.env.ENDPOINT || 'http://localhost:3000',
    ENDPOINT
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:400,700', 'Open+Sans']
    }
  },
  googleAnalytics: {
    id: gaid
  },
  build: {
    // hardSource: true,
    analyse: true,
    vendor: ['vue-awesome-swiper'],
    terser: {
      terserOptions: {
        compress: { drop_console: false }
      }
    },
    extend(config, ctx) {
      // 以下を追記
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        googleapis: 'empty',
        child_process: 'empty'
      }
    }
  },
  components: ['~/components'],
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://hinoki.media',
    routes() {
      return Promise.all([
        axios.get(
          `${endpoint}/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1`
        )
      ]).then(([posts]) => {
        const postMap = posts.data.map((post) => '/news/' + post.id)
        return postMap
      })
    }
  }
}
