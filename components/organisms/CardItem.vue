<template lang="pug">
//nuxt-link.carditem.item(:to="'news/'+post.id")
nuxt-link.carditem.item(:to="getLink(post)")
  .carditem__wrap
    p.carditem__category {{ getCategory(post) }}
    img.carditem__thumbnail(:src="getThumbnail(post)" decoding="async")
    h2.carditem__title {{ getTitle(post) }}
  .carditem__info
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
$card-width: 300px;
.carditem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $color-textcolorwhite;
  padding: 16px 20px;
  min-height: 360px;
  @include mq(sm) {
    margin: auto;
  }
  &__wrap {
    @include gap-bottom(12px);
    margin-bottom: 12px;
  }
  &__category {
    color: $color-textsecondary;
  }
  &__thumbnail {
    width: $card-width;
    height: 200px;
    object-fit: cover;
  }
  &__title {
    max-width: $card-width;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    @include font-cardtitle;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    * {
      color: $color-textsecondary;
    }
  }
}
</style>
