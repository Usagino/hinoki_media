import axios from 'axios'
require('dotenv').config()
const endpoint = process.env.ENDPOINT
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
  plugins: [
    '~plugins/components.js',
    '~plugins/postDecode.js',
    { src: '~/plugins/feather.js' },
    { src: '~/plugins/carousel.js', ssr: false },
    { src: '~/plugins/fetchData.js', ssr: true },
    { src: '~/plugins/axios', ssr: false }
  ],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  styleResources: {
    scss: ['~/assets/stylesheets/style.scss']
  },
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: endpoint, pathRewrite: { '^/api/': '/' } }
  },
  env: {
    ENDPOINT: process.env.ENDPOINT
  },
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP:400,700', 'Open+Sans']
    }
  },
  build: {
    // hardSource: true,
    extend(config, ctx) {},
    terser: {
      terserOptions: {
        compress: { drop_console: true }
      }
    }
  },
  generate: {
    interval: 2000,
    async routes() {
      // news
      const paginate = await axios.get(
        `${endpoint}/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1`
      )
      const newsRes = paginate.data.map((paginate) => {
        return {
          route: '/news/' + paginate.id,
          payload: { paginate }
        }
      })
      // pagination
      const { headers } = await axios(`${endpoint}wp-json/wp/v2/posts`, {
        'Access-Control-Expose-Headers': 'x-wp-total'
      })
      const getPostNum = 10
      let count = 0
      if (Number(headers['x-wp-total']) % getPostNum) {
        count = 1
      }
      const canDisplayPageNum =
        Math.floor(Number(headers['x-wp-total']) / getPostNum) + count
      const paginationRes = []
      for (let i = 1; i < canDisplayPageNum + 1; i++) {
        paginationRes.push({
          route: '/page/' + i,
          payload: { i }
        })
      }
      // categories
      const categoriesRes = []
      const categoriesList = await axios.get(
        `${endpoint}wp-json/wp/v2/categories`
      )

      for (let i = 0; i < categoriesList.data.length; i++) {
        categoriesRes.push({
          route: `/categories/${categoriesList.data[i].slug}/1`,
          payload: { i }
        })
      }
      console.log(endpoint)
      console.table(newsRes)
      console.table(paginationRes)
      console.table(categoriesRes)
      return Promise.all([newsRes, paginationRes, categoriesRes]).then(
        (values) => {
          return [...values[0], ...values[1], ...values[2]]
        }
      )
    }
  }
}
