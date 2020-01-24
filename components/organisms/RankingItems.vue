<template lang="pug">
  .ranking-items
    h2.ranking-items__title WEEKLY RANKING TOP3
    nuxt-link.ranking-items__item(
      v-for="(post,index) in posts"
      :key="post.id"
      :to="getLink(post)"
      )
      .ranking-items__item__text
        p.ranking-items__item--ranking TOP {{index + 1}}
        h3 {{getTitle(post)}}
      img.ranking-items__item__image(:src="getThumbnail(post)" decoding="async")
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
    height: 90px;
    display: grid;
    grid-template-columns: auto 90px;
    grid-template-rows: 100%;
    grid-gap: 8px;
    &--ranking {
      opacity: 0.3;
    }
    &__text {
      p {
        @include font-tagtitle;
        color: $color-textcolorblack;
      }
      h3 {
        @include font-minifytextbold;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    &__image {
      height: 90px;
      width: 90px;
      object-fit: cover;
    }
  }
}
</style>
