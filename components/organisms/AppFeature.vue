<template lang="pug">
.feature-blocks
  h2 FEATURE
  swiper.feature-blocks__carousel(:options="swiperOption")
    swiper-slide.feature-blocks__slide(v-for="post in posts"
      :key="post.id"
      :post="post")
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
        slidesPerView: this.uaSlider(),
        centeredSlides: true,
        spaceBetween: 40,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  },
  mounted() {
    console.log(this.swiperOption.slidesPerView)
  },
  methods: {
    uaSlider() {
      if (this.$ua.deviceType() === 'pc') {
        return 4
      } else {
        return 2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-blocks {
  background: $color-textcolorblack;
  padding: 28px 0;
  & > h2 {
    margin-bottom: 28px;
    @include font-title;
    text-align: center;
    color: $color-textcolorwhite;
  }
  &__carousel {
    width: 100%;
  }
  &__slide {
    width: auto;
    height: auto;
    img {
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
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
