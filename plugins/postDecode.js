import Vue from 'vue'

Vue.mixin({
  methods: {
    getTitle(post) {
      return post.title.rendered
    },
    getCategory(post) {
      // console.log(post)
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
      if (post._embedded['wp:featuredmedia'][0].source_url !== undefined) {
        return post._embedded['wp:featuredmedia'][0].source_url
      } else {
        return 'not thumbnail'
      }
    },
    getLink(post) {
      const getLink = `/news/${post.id}`
      if (getLink !== undefined) {
        return `/news/${post.id}`
      } else {
        return ''
      }
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
