<template lang="pug">
  a.pages__link(:href="getLink(post)" :class="addClass")
    img.pages__link--image(:src="getThumbnail(post)" decoding="async")
    .pages__link__textbox
      a.pages__link--category(:href="getCategoryLink(post)") {{ getCategory(post) }}
      h2.pages__link--title {{ getTitle(post) }}
      .pages__link__tags
        p.pages__link--careated {{ getCreatedAt(post) }}
        p.pages__link--author Written by {{getAuthor(post)}}
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {
        return []
      }
    },
    addClass: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
      postTime: '',
      category: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.black {
  .pages__link__textbox {
    a,
    p {
      color: $color-textsecondary;
    }
    h2 {
      color: $color-textcolorwhite;
    }
  }
}
.pages__link {
  display: flex;
  @include mq(sm) {
    height: 100px;
  }
  &--image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    margin-right: 30px;
    @include mq(sm) {
      height: 100px;
      width: 130px;
      margin-right: 0px;
    }
  }
  &--category {
    color: $color-textsecondary;
  }
  &__textbox {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 8px;
    width: 100%;
    @include mq(sm) {
      padding: 0px;
      padding-left: 16px;
    }
  }
  &--title {
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    @include font-cardtitle;
    @include mq(sm) {
      @include font-textbold;
      -webkit-line-clamp: 2;
    }
  }
  &--author {
    @include mq(sm) {
      display: none;
    }
  }
  &__tags {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
    width: 100%;
    p,
    a {
      color: $color-textsecondary;
    }
  }
}
</style>
