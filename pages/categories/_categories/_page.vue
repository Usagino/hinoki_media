<template lang="pug">
.container
  AppHeader
  .pages
    .pages__body
      h1.pages__title {{getPageName()}}
      CardItemInline(v-for="post in categoryPosts" :key="post.id" :post="post")
    RankingItems(:posts="rankingPosts")
  AppPagination(:data="categoriesPaginationData")
  AppFooter
</template>

<script>
export default {
  methods: {
    getPageName() {
      return this.$route.params.categories.toUpperCase()
    }
  }
}
</script>

<style lang="css" scoped></style>
