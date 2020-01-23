<template lang="pug">
  .container
    AppHeader
    Carousel.carousel(:per-page="1" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="3000" :loop="true")
      Slide.carousel__slide(
        v-for="post in rankingPosts"
        :key="post.id"
        :style="{ backgroundImage: 'url(' + getThumbnail(post) + ')' }")
        .carousel__cover
        nuxt-link.carousel__text.item(:to="'news/'+post.id")
          p.category {{ getCategory(post) }}
          h2.carousel__text__title {{ getTitle(post) }}
          .carousel__info
            p {{ getCreatedAt(post) }}
            p Written by {{getAuthor(post)}}
    .latest-news
      .latest-news__items
        CardItem(
          v-for="post in this.latestPosts"
          :key="post.id"
          :post ="post"
          )
        span
        span
      AppButton(text="NEXT" to="/")
    .feature
      FeatureItem(
        v-for="post in this.featurePosts"
        :key="post.id"
        :post="post" )
    AppFooter
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  .carousel {
    padding-top: 40px;
    margin: auto;
    width: $default-size;
    @include mq(sm) {
      width: $default-size-sp;
    }
    height: 500px;
    &__slide {
      width: $default-size;
      cursor: grab;
      &:active {
        cursor: grabbing;
      }
      @include mq(sm) {
        width: $default-size-sp;
      }
      height: 500px;
      background-size: cover;
      background-position: center;
      position: relative;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      box-sizing: border-box;
    }
    &__cover {
      @include full-size;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(13, 13, 13, 0.47) 84.5%
      );
    }
    &__text {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 24px;
      z-index: 2;
      @include gap-bottom(8px);
      @include mq(sm) {
        width: $default-size-sp;
        box-sizing: border-box;
      }
      & > * {
        color: $color-textcolorwhite;
      }
      &__title {
        @include font-title;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: $default-size - 48px;
        color: $color-textcolorwhite;
        @include mq(sm) {
          width: $default-size-sp;
        }
      }
    }
    &__info {
      display: flex;
      justify-content: flex-start;
      @include gap-right(12px);
      p {
        color: $color-textcolorwhite;
      }
    }
  }
  .latest-news {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 48px 0;
    &__items {
      padding: 16px 0;
      margin: auto;
      width: $default-size;
      @include mq(sm) {
        width: $default-size-sp;
      }
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      & > * {
        margin-bottom: 36px;
      }
      span {
        width: 340px;
        margin-bottom: 0px;
      }
    }
  }
}
</style>
