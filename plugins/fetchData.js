import Vue from 'vue'

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
      searchItem: []
    }
  },
  async asyncData({ app, error }) {
    try {
      const params = app.context.params
      // const query = app.context.query
      // const endpoint = `/api/`
      const endpoint = process.env.ENDPOINT
      const getPostNum = 10
      const {
        headers
      } = await app.$axios(
        'https://admin.frontartgraph.com/wp-json/wp/v2/posts',
        { 'Access-Control-Expose-Headers': 'x-wp-total' }
      )
      const allgetPostNum = Number(headers['x-wp-total'])

      const pageCount = allgetPostNum % getPostNum ? 1 : 0
      const canDisplayPageNum =
        Math.floor(Number(headers['x-wp-total']) / getPostNum) + pageCount

      const latestItems = await app.$axios.$get(
        `${endpoint}wp-json/wp/v2/posts?per_page=12&page=1&_embed=1`
      )
      const categorieItem = await app.$axios.$get(
        `${endpoint}wp-json/wp/v2/categories`
      )
      const featureData = categorieItem.find((el) => el.slug === 'feature')
      const featureItems = await app.$axios.$get(
        `${endpoint}wp-json/wp/v2/posts?categories=${featureData.id}&_embed=1`
      )
      const rankingID = categorieItem.find((el) => el.name === 'RANKING')
      const rankingItems = await app.$axios.$get(
        `${endpoint}wp-json/wp/v2/posts?categories=${rankingID.id}&_embed=1`
      )

      const id = params.id
      let ArticleItem = []
      if (!(id === undefined)) {
        ArticleItem = await app.$axios.$get(
          `${endpoint}wp-json/wp/v2/posts/${id}?_embed`
        )
      }

      const pagination = params.page
      const checkPagination = !(pagination === undefined)
      const paginationItems = checkPagination
        ? await app.$axios.$get(
            `${endpoint}wp-json/wp/v2/posts?per_page=${getPostNum}&page=${pagination}&_embed=1`
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
          `${endpoint}wp-json/wp/v2/posts?per_page=${getPostNum}&categories=${category.id}&_embed=1`
        )
        cgMaxGetArticles = await app.$axios.$get(
          `${endpoint}wp-json/wp/v2/posts?per_page=100&categories=${category.id}&_embed=1`
        )
      }
      const cgAllgetPostNum = cgMaxGetArticles.length
      const cgCount = cgAllgetPostNum % getPostNum ? 1 : 0
      const cgCanDisplayPageNum = checkCategoryName
        ? Math.floor(cgAllgetPostNum / getPostNum + cgCount)
        : 0

      // ------------------------------------------------------------------
      const categoriesList = await app.$axios.$get(
        `${endpoint}wp-json/wp/v2/categories`
      )
      // -----------------------------------------
      let seatchItems = []
      if (!(params.title === undefined)) {
        const seatchLink = `${endpoint}wp-json/wp/v2/posts/?search=${params.title}&_embed=1`
        seatchItems = await app.$axios.$get(encodeURI(seatchLink))
      }

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
  }
})
// curl -s -D - https://admin.frontartgraph.com/path/to/wordpress/wp-json/posts -o /dev/null
