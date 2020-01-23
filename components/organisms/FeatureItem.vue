<template lang="pug">
nuxt-link.feature-item.item(:to="getLink(post)")
  .feature-item__text
    h3.category FEATURE
    h2.title {{ getTitle(post) }}
    .feature-item__text__info
      p {{ getCreatedAt(post) }}
      p Written by {{getAuthor(post)}}
  img.feature-item__thumbnail(:src="getThumbnail(post)")
  h3.feature-item__sp-title FEATURE
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-item {
  width: $default-size;
  height: 200px;
  margin: 0 auto 40px;
  background: rgba($color-textcolorblack, 0.9);
  display: flex;
  justify-content: space-between;
  @include mq(sm) {
    width: $default-size-sp;
    flex-direction: column-reverse;
    height: auto;
    margin: 0 auto;
    padding: 16px;
    box-sizing: border-box;
    &:last-child {
      margin-bottom: 40px;
      .feature-item__sp-title {
        display: none;
      }
    }
  }
  &__text {
    padding: 24px 100px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @include mq(sm) {
      padding: 16px;
      @include gap-bottom(8px);
    }
    h2,
    h3 {
      text-align: center;
      @include font-cardtitle;
      color: $color-textcolorwhite;
    }
    h2 {
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      @include mq(sm) {
        text-align: left;
      }
    }
    h3 {
      @include mq(sm) {
        display: none;
      }
    }
    &__info {
      display: flex;
      justify-content: space-between;
      * {
        @include font-textbold;
        color: $color-textcolorwhite;
      }
    }
  }
  &__thumbnail {
    width: 50%;
    height: 100%;
    object-fit: cover;
    @include mq(sm) {
      width: 100%;
      height: 50%;
    }
  }
  &__sp-title {
    display: none;
    @include font-cardtitle;
    color: $color-textcolorwhite;
    padding: 12px 0;
    @include mq(sm) {
      padding-top: 0px;
      padding-bottom: 16px;
      display: block;
      text-align: center;
    }
  }
}
</style>
