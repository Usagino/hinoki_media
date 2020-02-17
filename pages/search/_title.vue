<template lang="pug">
// Posts page
.container
  AppHeader
  .pages
    .pages__body
      h1.pages__title {{this.$route.params.title}}
      CardItemInline(v-for="post in searchItem" :key="post.id" :post="post")
    RankingItems(:posts="rankingPosts")
  AppFooter
</template>

<script>
export default {
  mounted() {
    console.log('hii')
    console.log(this.$route.params.title)
    console.log(this.searchItem)
  }
}
</script>

<style lang="scss" scoped></style>
