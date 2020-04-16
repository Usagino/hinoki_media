import axios from 'axios'
require('dotenv').config()
const endpoint = process.env.ENDPOINT
const gaid = process.env.GAID
const { ENDPOINT } = process.env.ENDPOINT
export default {
  mode: 'universal',
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
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'ヒノキメディア'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://hinoki.media' },
      { hid: 'og:title', property: 'og:title', content: 'ヒノキメディア' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'HINOKIは、ビギナーのデザイナー視点でデザインを中心としたクリエイティブに関わる、モノ、コトなどを紹介するメディアです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://dashboard.hinoki.media/wp-content/uploads/2020/03/Frame_47.png'
      },
      { name: 'twitter:title', content: 'ヒノキメディア' },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:creator',
        content: '@hinoki_media'
      },
      {
        name: 'twitter:description',
        content:
          'HINOKIは、ビギナーのデザイナー視点でデザインを中心としたクリエイティブに関わる、モノ、コトなどを紹介するメディアです。'
      },
      { name: 'twitter:site', content: '@hinoki_media' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [
    '~/assets/stylesheets/reset.css',
    { src: '~/assets/stylesheets/style.scss', lang: 'scss' },
    'swiper/dist/css/swiper.css'
  ],
  plugins: [
    '~plugins/components.js',
    { src: '~/plugins/feather.js' },
    { src: '~plugins/day.js' },
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/carousel.js', ssr: false },
    { src: '~/plugins/fetchData.js', ssr: true },
    { src: '~/plugins/gaRanking.js', ssr: true },
    { src: '~/plugins/axios', ssr: false }
  ],
  buildModules: ['@nuxtjs/eslint-module'],
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
        googleapis: 'empty',
        child_process: 'empty'
      }
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://hinoki.media',
    routes() {
      return Promise.all([
        axios.get(
          `${endpoint}/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1`
        )
      ]).then(([posts]) => {
        console.log('site map table')
        const postMap = posts.data.map((post) => '/news/' + post.id)
        console.table(postMap)
        return postMap
      })
    }
  },
  generate: {
    interval: 2000,
    fallback: true,
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
      const { headers } = await axios(`${endpoint}/wp-json/wp/v2/posts`, {
        'Access-Control-Expose-Headers': 'x-wp-total'
      })
      const getPostNum = 10
      const totalPostNum = Number(headers['x-wp-total'])
      const canDisplayPageNum = Math.ceil(totalPostNum / getPostNum)
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
        `${endpoint}/wp-json/wp/v2/categories`
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
