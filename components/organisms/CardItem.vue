<template lang="pug">
a.carditem.item(:href="getLink(post)" :class="addClass")
  .carditem__wrap
    img.carditem__thumbnail(:src="getThumbnail(post)" decoding="async")
  .carditem__texts
    h2.carditem__title {{ getTitle(post) }}
    .carditem__info
      a(:href="getCategoryLink(post)") {{ getCategory(post) }}
      p {{ getCreatedAt(post) }}
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
$card-width: 300px;
.black {
  background: $color-textsecondary;
  .carditem__wrap {
    a,
    h2 {
      color: $color-textcolorwhite;
    }
  }
  .carditem__info {
    p {
      color: $color-textcolorwhite;
    }
  }
}
.white {
  background: $color-textcolorwhite;
}
.carditem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  @include mq(sm) {
    margin: auto;
  }
  &__texts {
    padding: 12px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  &__wrap {
    @include gap-bottom(12px);
    display: flex;
    flex-direction: column;
  }
  &__category {
    color: $color-textsecondary;
  }
  &__thumbnail {
    width: 100%;
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
    a,
    p {
      @include font-textbold;
      color: $color-textsecondary;
    }
  }
}
</style>
