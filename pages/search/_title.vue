<template lang="pug">
// Posts page
client-only
  .container
    AppHeader
    .pages
      .pages__body
        h1.pages__title {{$route.params.title}}
        CardItemInline(v-for="post in seachItem" :key="post.id" :post="post")
    AppFooter
</template>

<script>
export default {
  data() {
    return {
      seachItem: []
    }
  },
  async asyncData({ app, error }) {
    try {
      const params = app.context.params
      const endpoint = process.env.ENDPOINT
      const seatchLink = `${endpoint}wp-json/wp/v2/posts/?search=${params.title}&_embed=1`
      const seatchItems = await app.$axios.$get(encodeURI(seatchLink))
      return {
        seachItem: seatchItems
      }
    } catch (e) {
      console.log(e)
    }
  },
  mounted() {
    console.log(this.$route.params.title)
    console.log(this.searchItem)
  }
}
</script>

<style lang="scss" scoped></style>
