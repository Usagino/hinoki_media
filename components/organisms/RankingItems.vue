<template lang="pug">
  .ranking-items
    h2.ranking-items__title WEEKLY RANKING TOP3
    a.ranking-items__item(
      v-for="(post,index) in posts"
      :key="post.id"
      :href="getLink(post)"
      )
      p.ranking-items__item--ranking {{index + 1}}
      .ranking-items__blocks
        h3 {{getTitle(post)}}
        .ranking-items__blocks--info
          p {{getCategory(post)}}
          p {{getCreatedAt(post)}}
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      rankingPosts: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.ranking-items {
  width: 280px;
  display: inline;
  background: $color-textcolorwhite;
  padding: 20px;
  box-sizing: border-box;
  @include gap-bottom(20px);
  height: 0%;
  @include mq(sm) {
    width: $default-size-sp;
    margin: 16px 0;
  }
  &__title {
    text-align: center;
    display: block;
  }
  &__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &--ranking {
      margin-right: 20px;
      @include font-cardtitle;
    }

    &__image {
      height: 90px;
      width: 90px;
      object-fit: cover;
    }
  }
  &__blocks {
    h3 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      height: 40px;
    }
    &--info {
      display: flex;
      justify-content: space-between;

      p {
        @include font-infomationtext;
      }
    }
  }
}
</style>
