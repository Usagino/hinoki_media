<template lang="pug">
  .container
    AppHeader
    Carousel.carousel(:per-page="1" :paginationEnabled="false" :autoplay="true" :autoplayTimeout="3000" :loop="true" v-if="rankingPosts.length !== 0")
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
      h2 LATEST
      .latest-news__items(v-if="$ua.deviceType() === 'pc'")
        CardItem(
          v-for="item in this.latestPosts"
          :key="item.id"
          :post ="item"
          )
      .latest-news__items(v-else)
        CardItemInline(
          v-for="item in this.latestPosts"
          :key="item.id"
          :post ="item"
          )
      AppButton.nextbutton(text="NEXT" to="/page/1")
    AppFeature(:posts="featurePosts" v-if="featurePosts.length !== 0")
    AppFooter
</template>

<script>
export default {
  head() {
    return {
      title: 'TOP'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  @include mq(sm) {
    background: $color-textcolorwhite;
  }
  .carousel {
    width: 100vw;
    @include mq(sm) {
      margin-bottom: 0px;
      width: $default-size-sp;
      padding: 0px;
      height: 240px;
    }
    height: 500px;
    &__slide {
      cursor: grab;
      &:active {
        cursor: grabbing;
      }
      @include mq(sm) {
        width: $default-size-sp;
        height: 240px;
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
      padding-bottom: 24px;
      padding-top: 24px;
      @include defaultPCwidth;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
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
        width: $default-size;
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
    h2 {
      margin: 28px 0 20px;
      @include font-title;
      text-align: center;
      @include mq(sm) {
        margin: 20px 0 14px;
        @include font-cardtitle;
      }
    }
    @include mq(sm) {
      padding: 0px;
    }
    &__items {
      @include defaultPCwidth;
      @include baseGrid;
      @include mq(sm) {
        padding: 0px 8px 0px;
        width: $default-size-sp;
        box-sizing: border-box;
        grid-auto-rows: 100px;
        grid-gap: 10px 10px;
      }
    }
  }
}
</style>
