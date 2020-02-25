<template lang="pug">
  .container
    AppHeader
    Carousel.carousel(:per-page="1" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="3000" :loop="true")
      Slide.carousel__slide(
        v-for="post in rankingPosts"
        :key="post.id"
        :style="{ backgroundImage: 'url(' + getThumbnail(post) + ')' }")
        .carousel__cover
        a.carousel__text.item(:href="'news/'+post.id")
          a.category(:href="getCategoryLink(post)") {{ getCategory(post) }}
          h2.carousel__text__title {{ getTitle(post) }}
          .carousel__info
            p {{ getCreatedAt(post) }}
            p Written by {{getAuthor(post)}}
    .latest-news
      .latest-news__items
        CardItem(
          v-for="item in this.latestPosts"
          :key="item.id"
          :post ="item"
          )
        span
        span
      AppButton(text="NEXT" to="/page/1")
    .feature-blocks
      h2 FEATURE
      .feature-blocks__items
        CardItem(
          v-for="item in this.featurePosts"
          :key="item.id"
          :post="item"
          addClass="black"
           )
    AppFooter
</template>

<script>
export default {
  head() {
    return {
      title: 'TOP'
    }
  },
  mounted() {
    console.log(process.env.ENDPOINT)
  }
}
</script>

<style lang="scss" scoped>
.container {
  .carousel {
    @include defaultPCwidth;
    padding-top: 40px;
    @include mq(sm) {
      width: $default-size-sp;
    }
    height: 500px;
    &__slide {
      width: 100%;
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
      width: fit-content;
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
      @include defaultPCwidth;
      padding-top: 16px;
      padding-bottom: 16px;
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
