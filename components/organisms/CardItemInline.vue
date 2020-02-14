<template lang="pug">
  a.pages__link(:href="getLink(post)")
    img.pages__link--image(:src="getThumbnail(post)" decoding="async")
    .pages__link__textbox
      a.pages__link--category(:href="getCategoryLink(post)") {{ getCategory(post) }}
      h2.pages__link--title {{ getTitle(post) }}
      .pages__link__tags
        p {{ getCreatedAt(post) }}
        p Written by {{getAuthor(post)}}
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
.pages__link {
  display: flex;
  &--image {
    min-width: 300px;
    max-width: 300px;
    height: 200px;
    object-fit: cover;
    margin-right: 30px;
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
  }
  &--title {
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    @include font-cardtitle;
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
