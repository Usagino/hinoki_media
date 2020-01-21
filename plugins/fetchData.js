import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      latestPosts: ''
    }
  },
  async asyncData({ app }) {
    const latestItems = await app.$axios.$get(
      'https://admin.frontartgraph.com/wp-json/wp/v2/posts?per_page=12&page=1&_embed=1'
    )
    return { latestPosts: latestItems }
  }
})
