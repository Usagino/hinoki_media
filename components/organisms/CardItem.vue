<template lang="pug">
.carditem
  .carditem__wrap
    p.carditem__category DESIGN
    img.carditem__thumbnail(:src="thumbnail")
    h2.carditem__title {{title}}
  .carditem__info
    p 2020.1.12
    p written by hayato
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
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
  min-height: 380px;
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
    -webkit-line-clamp: 3;
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
