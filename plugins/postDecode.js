import Vue from 'vue'

Vue.mixin({
  methods: {
    getTitle(post) {
      return post.title.rendered
    },
    getCategory(post) {
      const category = post._embedded['wp:term'][0][0].name
      if (category === 'RANKING') {
        return post._embedded['wp:term'][0][1].name
      } else {
        return post._embedded['wp:term'][0][0].name
      }
    },
    getTags(post) {
      return post._embedded['wp:term'][1]
    },
    getCreatedAt(post) {
      const getTime = new Date(post.date)
      return `${getTime.getFullYear()}.${getTime.getMonth()}.${getTime.getDate()}`
    },
    getAuthor(post) {
      return post._embedded.author[0].name
    },
    getThumbnail(post) {
      return post._embedded['wp:featuredmedia'][0].source_url
    },
    getLink(post) {
      return `/news/${post.id}`
    },
    getArticle(id) {
      return id
    },
    getCategoryLink(post) {
      return `/categories/${this.getCategory(post).toLowerCase()}/1`
    },
    goNewsPage(key) {
      this.$router.push({
        path: '/news',
        query: { post: key }
      })
    }
  }
})
