<template lang="pug">
// Posts page
client-only
  .container
    AppHeader
    .pages
      .pages__body
        h1.pages__title {{$route.params.title}}
        CardItemInline(v-for="post in searchItem" :key="post.id" :post="post")
      RankingItems(:posts="rankingPosts")
    AppFooter
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
