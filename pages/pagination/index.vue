<template lang="pug">
  .container
    AppHeader
    .pages
      .pages__body(:class="{'pages__fullwidth':rankingPosts.length === 0}")
        h1.pages__title LATEST NEWS
        CardItemInline(v-for="post in paginationPosts" :key="post.id" :post="post")
      RankingItems(:posts="rankingPosts" v-if="rankingPosts.length !== 0")
    AppFooter
</template>

<script>
export default {
  mounted() {
    console.log('hi')
    console.log(this.$route.query.page)
  }
}
</script>

<style lang="scss" scoped></style>
