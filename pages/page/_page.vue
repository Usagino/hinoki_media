<template lang="pug">
  // Posts page
  .container
    AppHeader
    AppBreadcrumbs
    .pages
      .pages__body(:class="{'pages__fullwidth':rankingPosts.length === 0}")
        h1.pages__title LATEST NEWS
        CardItemInline(v-for="post in paginationPosts" :key="post.id" :post="post")
      RankingItems(:posts="rankingPosts" v-if="rankingPosts.length !== 0")
    AppPagination(:data="paginationData")
    AppFooter
</template>

<script>
export default {
  mounted() {
    const hoge = Math.ceil(200 / 10)
    console.log(hoge)
  }
}
</script>

<style lang="scss" scoped></style>
