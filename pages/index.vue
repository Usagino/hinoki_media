<template lang="pug">
  .container
    AppHeader
    Carousel.carousel(:per-page="1" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="4000" :loop="true")
      Slide.carousel__slide(
        v-for="post in this.latestPosts"
        :key="post.id"
        :style="{ backgroundImage: 'url(' + post._embedded['wp:featuredmedia'][0].source_url + ')' }")
        .carousel__cover
        .carousel__text
          p DESIGN
          h2.carousel__text__title {{ post.title.rendered }}
          .carousel__info
            p 2020.01.01
            p written by hayato
    .latest-news
      .latest-news__items
        CardItem(
          v-for="post in this.latestPosts"
          :key="post.id"
          :title="post.title.rendered"
          :thumbnail="post._embedded['wp:featuredmedia'][0].source_url"
          :time="post.date"
          :categoryId='post.categories[0]'
          )
        span
        span
      AppButton(text="NEXT" to="/")
    .feature
      FeatureItem
      FeatureItem
    AppFooter
</template>

<script>
export default {
  mounted() {
    console.log(1, this.latestPosts)
    console.log('Category:　', this.categories)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 84px;
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
        @include mq(sm) {
          width: $default-size-sp;
        }
      }
    }
    &__info {
      display: flex;
      justify-content: flex-start;
      @include gap-right(12px);
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
