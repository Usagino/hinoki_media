import Vue from 'vue'
// import dayjs from 'dayjs'
import credential from '~/assets/hinoki-media-0b3a76f77d5a.json'

Vue.mixin({
  data() {
    return {
      latestPosts: [],
      featurePosts: [],
      rankingPosts: [],
      paginationPosts: [],
      Article: {},
      postNum: 0,
      whatPageNum: 0,
      totalArticleNum: 0,
      categoriesItem: [],
      paginationData: {},
      categoriesPaginationData: {},
      searchItem: [],
      rankingArr: []
    }
  },
  async asyncData({ app, error, context }) {
    try {
      const params = app.context.params
      const query = app.context.query
      // const endpoint = `/api/`
      const endpoint = process.env.endpoint
      const getPostNum = 10
      const {
        headers
      } = await app.$axios(
        'https://dashboard.hinoki.media/wp-json/wp/v2/posts',
        { 'Access-Control-Expose-Headers': 'x-wp-total' }
      )
      const allgetPostNum = Number(headers['x-wp-total'])

      const pageCount = allgetPostNum % getPostNum ? 1 : 0
      const canDisplayPageNum =
        Math.floor(Number(headers['x-wp-total']) / getPostNum) + pageCount

      const latestItems = await app.$axios.$get(
        `${endpoint}/wp-json/wp/v2/posts?per_page=12&page=1&_embed=1`
      )
      const categorieItem = await app.$axios.$get(
        `${endpoint}/wp-json/wp/v2/categories`
      )
      const featureData = categorieItem.find((el) => el.slug === 'feature')
      const featureItems = await app.$axios.$get(
        `${endpoint}/wp-json/wp/v2/posts?categories=${featureData.id}&_embed=1`
      )
      const rankingID = categorieItem.find((el) => el.name === 'RANKING')
      const rankingItems = await app.$axios.$get(
        `${endpoint}/wp-json/wp/v2/posts?categories=${rankingID.id}&_embed=1`
      )

      const id = params.id
      let ArticleItem = []
      if (!(id === undefined)) {
        ArticleItem = await app.$axios.$get(
          `${endpoint}/wp-json/wp/v2/posts/${id}?_embed`
        )
      }

      const pagination = params.page
      const checkPagination = !(pagination === undefined)
      const paginationItems = checkPagination
        ? await app.$axios.$get(
            `${endpoint}/wp-json/wp/v2/posts?per_page=${getPostNum}&page=${pagination}&_embed=1`
          )
        : []

      // get category functions---------------------------------

      const categoryName = params.categories
      const checkCategoryName = !(categoryName === undefined)
      let categoryItem = []
      let cgMaxGetArticles = []
      if (checkCategoryName) {
        const category = categorieItem.find((el) => el.slug === categoryName)
        categoryItem = await app.$axios.$get(
          `${endpoint}/wp-json/wp/v2/posts?per_page=${getPostNum}&categories=${category.id}&_embed=1`
        )
        cgMaxGetArticles = await app.$axios.$get(
          `${endpoint}/wp-json/wp/v2/posts?per_page=100&categories=${category.id}&_embed=1`
        )
      }
      const cgAllgetPostNum = cgMaxGetArticles.length
      const cgCount = cgAllgetPostNum % getPostNum ? 1 : 0
      const cgCanDisplayPageNum = checkCategoryName
        ? Math.floor(cgAllgetPostNum / getPostNum + cgCount)
        : 0

      // ------------------------------------------------------------------
      const categoriesList = await app.$axios.$get(
        `${endpoint}/wp-json/wp/v2/categories`
      )
      // -----------------------------------------
      let seatchItems = []
      if (!(query.title === undefined)) {
        const seatchLink = `${endpoint}/wp-json/wp/v2/posts/?search=${query.title}&_embed=1`
        seatchItems = await app.$axios.$get(encodeURI(seatchLink))
      }

      // ranking v2 -------------------

      const { GoogleApis } = require('googleapis')
      const google = new GoogleApis()
      const analytics = google.analyticsreporting('v4')
      const viewId = '214175838' // GoogleAnalyticsのビューidを指定
      const jwtClient = new google.auth.JWT(
        credential.client_email,
        null,
        credential.private_key,
        ['https://www.googleapis.com/auth/analytics.readonly'],
        null
      )
      const gapiSet = {
        resource: {
          reportRequests: [
            {
              dateRanges: [
                {
                  startDate: '14daysAgo',
                  endDate: 'today'
                }
              ],
              viewId,
              dimensions: [
                {
                  name: 'ga:pagePath'
                }
              ],
              metrics: [
                {
                  expression: 'ga:pageviews'
                }
              ]
            }
          ]
        },
        auth: jwtClient
      }
      jwtClient.authorize((error, tokens) => {
        if (error) {
          console.log(error)
          return
        }
        analytics.reports.batchGet(gapiSet, (error, response) => {
          if (error) {
            console.log(error)
            return
          }
          const responseRows = response.data.reports[0].data.rows
          const newsRows = []
          responseRows.forEach((row) => {
            if (row.dimensions[0].includes('/news/')) {
              let id = row.dimensions[0].replace(/\u002F/g, '')
              id = id.replace(/news/g, '')
              const rowData = {
                newsID: id,
                pv: Number(row.metrics[0].values[0])
              }
              if (newsRows.length < 5) {
                newsRows.push(rowData)
              }
            }
          })
          newsRows.sort((highData, rowData) => {
            if (highData.pv > rowData.pv) return -1
            if (highData.pv < rowData.pv) return 1
            return 0
          })
          console.table(newsRows)
        })
      })
      // const getIdByPost = await app.$axios.$get(
      //   `${endpoint}/wp-json/wp/v2/posts/${99}/?_embed`
      // )
      // returns
      return {
        latestPosts: latestItems,
        featurePosts: featureItems,
        rankingPosts: rankingItems,
        Article: ArticleItem,
        paginationPosts: paginationItems,
        whatPageNum: Number(pagination),
        categoryPosts: categoryItem,
        paginationData: {
          canDisplayPage: canDisplayPageNum, // 表示できるページ数
          getTotalArticle: allgetPostNum, // 全ての投稿件数
          displayPostNum: getPostNum // １ページあたりに表示する投稿件数
        },
        categoriesPaginationData: {
          canDisplayPage: cgCanDisplayPageNum, // 表示できるページ数
          getTotalArticle: cgAllgetPostNum, // 全ての投稿件数
          displayPostNum: getPostNum
        },
        categoriesItem: categoriesList,
        searchItem: seatchItems
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    getTitle: (post) => {
      return post.title.rendered
    },
    getCategory: (post) => {
      const category = post._embedded['wp:term'][0][0].name

      if (!(category === undefined)) {
        if (category === 'RANKING' || category === 'FEATURE') {
          return post._embedded['wp:term'][0][1].name
        } else {
          return post._embedded['wp:term'][0][0].name
        }
      } else {
        return 'not category'
      }
    },
    getTags: (post) => {
      return post._embedded['wp:term'][1]
    },
    getCreatedAt: (post) => {
      const getTime = new Date(post.date)
      return `${getTime.getFullYear()}.${getTime.getMonth()}.${getTime.getDate()}`
    },
    getAuthor: (post) => {
      return post._embedded.author[0].name
    },
    getThumbnail: (post) => {
      const thumbnailExit =
        post?._embedded['wp:featuredmedia']?.[0]['source_url']
      if (thumbnailExit !== undefined) {
        return post._embedded['wp:featuredmedia'][0].source_url
      } else {
        return 'https://images.unsplash.com/photo-1576526164505-9a2540866186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80'
      }
    },
    getLink: (post) => {
      const getLink = `/news/${post.id}`
      if (getLink !== undefined) {
        return `/news/${post.id}`
      } else {
        return ''
      }
    },
    getArticle: (id) => {
      return id
    },
    getCategoryLink: (post) => {
      const category = post._embedded['wp:term'][0][0].name

      if (!(category === undefined)) {
        if (category === 'RANKING' || category === 'FEATURE') {
          const link = post._embedded['wp:term'][0][1].name
          return `/categories/${link.toLowerCase()}/1`
        } else {
          const link = post._embedded['wp:term'][0][0].name
          return `/categories/${link.toLowerCase()}/1`
        }
      } else {
        return '/'
      }
    },
    goNewsPage: (key) => {
      this.$router.push({
        path: '/news',
        query: { post: key }
      })
    }
  }
})
// curl -s -D - https://admin.frontartgraph.com/path/to/wordpress//wp-json/posts -o /dev/null
