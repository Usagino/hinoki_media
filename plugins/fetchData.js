import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      posts: ''
    }
  },
  async asyncData({ app }) {
    const apiURL =
      'https://admin.frontartgraph.com/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1'
    const response = await app.$axios.$get(apiURL)
    return { posts: response }
  },
  methods: {
    getPosts() {
      return this.posts
    }
  }
})
