<template lang="pug">
.feature-blocks
  h2 FEATURE
  swiper.feature-blocks__carousel(:options="swiperOption")
    swiper-slide.feature-blocks__slide(v-for="post in posts"
      :key="post.id"
      :post="post")
      a.feature-blocks__slide__link(:href="getLink(post)")
        img(:src="getThumbnail(post)")
        h2 {{ getTitle(post) }}
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
      swiperOption: {
        loop: true,
        slidesPerView: this.uaSlider().slidesPerView,
        centeredSlides: true,
        spaceBetween: this.uaSlider().spaceBetween,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  },
  methods: {
    uaSlider() {
      if (this.$ua.deviceType() === 'pc') {
        return {
          slidesPerView: 4,
          spaceBetween: 40
        }
      } else {
        return {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-blocks {
  background: $color-black;
  padding: 28px 0;
  & > h2 {
    margin-bottom: 20px;
    @include font-title;
    text-align: center;
    color: $color-textcolorwhite;
    @include mq(sm) {
      margin-bottom: 14px;
    }
  }
  @include mq(sm) {
    padding: 20px 0;
  }
  &__carousel {
    width: 100%;
  }
  &__slide {
    width: auto;
    height: auto;
    &__link {
      height: 100%;
      width: 100%;
      display: block;
    }
    img {
      @include mq(sm) {
        height: 100px;
      }
      width: 100%;
      height: 180px;
      margin-bottom: 8px;
      object-fit: cover;
    }
    h2 {
      @include font-cardtitle;
      color: $color-textcolorwhite;
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      text-overflow: ellipsis;
      @include mq(sm) {
        @include font-textbold;
        color: $color-textcolorwhite;
      }
    }
  }
}
</style>
