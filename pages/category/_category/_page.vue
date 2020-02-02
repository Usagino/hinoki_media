<template lang="pug">
.container
  AppHeader
  .pages
    .pages__body
      h1.pages__title LATEST NEWS
    RankingItems(:posts="rankingPosts")
  AppPagination
  AppFooter
</template>

<script>
export default {}
</script>

<style lang="css" scoped></style>
