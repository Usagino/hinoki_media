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
      canDisplayPage: 0
    }
  },
  async asyncData({ app, error }) {
    try {
      const endpoint = 'https://admin.frontartgraph.com/'
      const Posts = await app.$axios.$get(`${endpoint}wp-json/wp/v2/posts`)
      const postsLength = Posts.length
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
      const getPostNum = 10
      let paginationItems = []
      if (!(pagination === undefined)) {
        paginationItems = await app.$axios.$get(
          `${endpoint}wp-json/wp/v2/posts?per_page=${getPostNum}&page=${pagination}&_embed=1`
        )
      }
      fetch('https://admin.frontartgraph.com/wp-json/wp/v2/posts').then(
        (response) => {
          // 総ページ数をコンソールに出力

          return response.headers.get('X-WP-Total')
        }
      )

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
        Math.floor(Number(headers['x-wp-total'])) / getPostNum + count

      return {
        latestPosts: latestItems,
        featurePosts: featureItems,
        rankingPosts: rankingItems,
        Article: ArticleItem,
        paginationPosts: paginationItems,
        postNum: postsLength,
        whatPageNum: Number(pagination),
        getTotalArticle: Number(headers['x-wp-total']),
        displayPostNum: getPostNum,
        canDisplayPage: canDisplayPageNum
      }
    } catch (err) {
      console.log(err)
    }
  }
})
// curl -s -D - https://admin.frontartgraph.com/path/to/wordpress/wp-json/posts -o /dev/null
