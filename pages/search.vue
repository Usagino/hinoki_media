<template lang="pug">
// Posts page
.container
  AppHeader
  .pages
    .pages__body
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
  async asyncData({ app, error }) {
    try {
      const query = app.context.query
      const endpoint = process.env.ENDPOINT
      const seatchLink = `${endpoint}/wp-json/wp/v2/posts/?search=${query.title}&_embed=1`
      const item = await app.$axios.$get(encodeURI(seatchLink))
      return { searchNews: item }
    } catch (e) {
      console.log(e)
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
