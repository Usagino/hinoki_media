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
      getTotalArticle: 0,
      totalArticleNum: 0,
      displayPostNum: 0,
      canDisplayPage: 0,
      paginationData: {}
    }
  },
  async asyncData({ app, error }) {
    try {
      const endpoint = 'https://admin.frontartgraph.com/'
      // const Posts = await app.$axios.$get(`${endpoint}wp-json/wp/v2/posts`)
      const latestItems = await app.$axios.$get(
        endpoint + 'wp-json/wp/v2/posts?per_page=12&page=1&_embed=1'
      )

      const categorieItem = await app.$axios.$get(
        endpoint + 'wp-json/wp/v2/categories'
      )
      const featureID = categorieItem.find((el) => el.name === 'FEATURE')
      const featureItems = await app.$axios.$get(
        `${endpoint}wp-json/wp/v2/posts?categories=${featureID.id}&_embed=1`
      )
      const rankingID = categorieItem.find((el) => el.name === 'RANKING')
      const rankingItems = await app.$axios.$get(
        `${endpoint}wp-json/wp/v2/posts?categories=${rankingID.id}&_embed=1`
      )
      const id = app.context.params.id
      let ArticleItem = []
      if (!(id === undefined)) {
        ArticleItem = await app.$axios.$get(
          `${endpoint}wp-json/wp/v2/posts/${id}?_embed`
        )
      }
      const pagination = app.context.params.page
      const getPostNum = 3
      let paginationItems = []
      if (!(pagination === undefined)) {
        paginationItems = await app.$axios.$get(
          `${endpoint}wp-json/wp/v2/posts?per_page=${getPostNum}&page=${pagination}&_embed=1`
        )
      }

      const {
        headers
      } = await app.$axios(
        'https://admin.frontartgraph.com/wp-json/wp/v2/posts',
        { 'Access-Control-Expose-Headers': 'x-wp-total' }
      )

      let count = 0
      if (Number(headers['x-wp-total']) % getPostNum) {
        count = 1
      }
      const canDisplayPageNum =
        Math.floor(Number(headers['x-wp-total']) / getPostNum) + count

      return {
        latestPosts: latestItems,
        featurePosts: featureItems,
        rankingPosts: rankingItems,
        Article: ArticleItem,
        paginationPosts: paginationItems,
        whatPageNum: Number(pagination),
        paginationData: {
          canDisplayPage: canDisplayPageNum,
          getTotalArticle: Number(headers['x-wp-total']),
          displayPostNum: getPostNum
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
})
// curl -s -D - https://admin.frontartgraph.com/path/to/wordpress/wp-json/posts -o /dev/null
