<template lang="pug">
  // Posts page
  .container
    AppHeader
    .pages
      .pages__body
        h1.pages__title LATEST NEWS
        CardItemInline(v-for="post in paginationPosts" :key="post.id" :post="post")
      RankingItems(:posts="rankingPosts")
    AppPagination(:data="paginationData")
    AppFooter
</template>

<script>
export default {
  mounted() {}
}
</script>

<style lang="scss" scoped></style>
