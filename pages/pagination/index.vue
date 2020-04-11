<template lang="pug">
  .container
    AppHeader
    AppBreadcrumbs
    .pages
      .pages__body(:class="{'pages__fullwidth':rankingPosts.length === 0}")
        h1.pages__title LATEST NEWS
        CardItemInline(v-for="post in paginationPosts" :key="post.id" :post="post")
      RankingItems(:posts="rankingPosts" v-if="rankingPosts.length !== 0")
    AppFooter
</template>

<script>
export default {
  data() {
    return {
      paginationPosts: []
    }
  },
  async asyncData({ app, error }) {
    try {
      const pagination = app.context.query.page
      const endpoint = process.env.endpoint
      const paginationItems = await app.$axios.$get(
        `${endpoint}/wp-json/wp/v2/posts?per_page=10&page=${pagination}&_embed=1`
      )
      console.log(paginationItems)
      return {
        paginationPosts: paginationItems
      }
    } catch (err) {
      console.log(err)
    }
  },
  mounted() {
    console.log(this.$route.query.page)
  }
}
</script>

<style lang="scss" scoped></style>
