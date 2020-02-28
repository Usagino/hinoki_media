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
    const query = app.context.query
    const endpoint = process.env.ENDPOINT
    const seatchLink = encodeURI(
      `${endpoint}/wp-json/wp/v2/posts/?search=${query.title}&_embed=1`
    )

    const item = await app.$axios
      .$get(seatchLink, {
        headers: { 'Access-Control-Allow-Origin': '*' },
        data: {}
      })
      .catch((err) => {
        return err.response
      })

    return { searchNews: item }
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
