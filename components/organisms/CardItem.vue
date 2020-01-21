<template lang="pug">
.carditem
  .carditem__wrap
    p.carditem__category {{category}}
    img.carditem__thumbnail(:src="thumbnail")
    h2.carditem__title {{title}}
  .carditem__info
    p {{getTime(time)}}
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
    },
    time: {
      type: String,
      default: ''
    },
    categoryId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      postTime: '',
      category: ''
    }
  },
  mounted() {},
  methods: {
    getTime(time) {
      const getTime = new Date(time)
      return `${getTime.getFullYear()}.${getTime.getMonth()}.${getTime.getDate()}`
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
