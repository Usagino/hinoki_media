import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      latestPosts: [],
      categories: []
    }
  },
  async asyncData({ app }) {
    const latestItems = await app.$axios.$get(
      'https://admin.frontartgraph.com/wp-json/wp/v2/posts?per_page=12&page=1&_embed=1'
    )
    const categorieItem = await app.$axios.$get(
      'https://admin.frontartgraph.com/wp-json/wp/v2/categories'
    )
    return {
      latestPosts: latestItems,
      categories: categorieItem
    }
  },
  methods: {
    getCategories(id) {
      console.log(this.categories, id)
      const categories = this.categories.find((el) => el.id === id)
      console.log(categories.name)
      return categories.name
    }
  }
})
