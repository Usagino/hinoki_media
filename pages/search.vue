<template lang="pug">
// Posts page
.container
  AppHeader
  .pages
    .pages__body(v-if="searchNews.length === 0")
      h1.pages__title {{$route.query.title}}
      h2 読み込み中...
    .pages__body(v-else)
      h1.pages__title {{$route.query.title}}
      CardItemInline(v-for="post in searchNews" :key="post.id" :post="post")
  AppFooter
</template>

<script>
export default {
  data() {
    return {
      searchNews: []
    }
  },
  mounted() {
    // console.log('data: ', this.searchData())
    this.searchData().then((res) => {
      this.searchNews = res
    })
  },
  methods: {
    async searchData() {
      const query = this.$route.query
      const endpoint = 'https://dashboard.hinoki.media'
      const seatchLink = encodeURI(
        `${endpoint}/wp-json/wp/v2/posts/?search=${query.title}&_embed=1`
      )
      const item = await this.$axios.$get(seatchLink).catch((err) => {
        return err.response
      })
      return item
    }
  }
}
</script>

<style lang="scss" scoped>
.pages {
  &__body {
    width: 100%;
  }
}
</style>
