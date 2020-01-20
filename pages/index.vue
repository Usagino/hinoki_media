<template lang="pug">
  .container
    AppHeader
    .latest-news
      CardItem(
        v-for="post in this.latestPosts"
        key="post.id"
        :title="post.title.rendered"
        :thumbnail="post._embedded['wp:featuredmedia'][0].source_url"
        )
    AppFooter
</template>

<script>
import AppHeader from '@/components/organisms/AppHeader.vue'
import AppFooter from '@/components/organisms/AppFooter.vue'
import CardItem from '@/components/organisms/CardItem.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    CardItem
  },
  mounted() {
    console.log(1, this.latestPosts)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 84px;
  .latest-news {
    padding: 16px 0;
    margin: auto;
    display: grid;
    width: 1080px;
    grid-gap: 48px;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr 1fr 1fr;
  }
}
</style>
