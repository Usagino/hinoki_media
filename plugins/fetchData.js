import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      latestPosts: [],
      featurePosts: [],
      rankingPosts: [],
      Article: {}
    }
  },
  async asyncData({ app }) {
    const endpoint = 'https://admin.frontartgraph.com/'
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
    return {
      latestPosts: latestItems,
      featurePosts: featureItems,
      rankingPosts: rankingItems,
      Article: ArticleItem
    }
  }
})
