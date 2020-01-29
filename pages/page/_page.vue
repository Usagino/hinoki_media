<template lang="pug">
  .container
    AppHeader
    .pages
      .pages__body
        h1.pages__title LATEST NEWS
        CardItemInline(v-for="post in paginationPosts" :key="post.id" :post="post")
      RankingItems(:posts="rankingPosts")
    .pagination
      AppButton.prevButton(text="PREV" :to="prevLink().link" v-if='prevLink().toggle')
      .pagination--more(v-if="prevLink(true).toggle") ……
      AppButton.one(:text="String(whatPageNum - 2)" :to="'/page/'+String(whatPageNum - 2)" v-if='whatPageNum === displayPostNum')
      AppButton.two(:text="String(whatPageNum - 1)" :to="'/page/'+String(whatPageNum - 1)" v-if='this.whatPageNum - 1 > 0')
      AppButton.three.currentLink(:text="String(whatPageNum)" to="")
      AppButton.four(:text="String(whatPageNum + 1)" :to="'/page/'+String(whatPageNum + 1)" v-if="nextLink().toggle && !canDisplayPage < whatPageNum")
      AppButton.five(:text="String(whatPageNum + 2)" :to="'/page/'+String(whatPageNum + 2)" v-if="!(prevLink().toggle) && !(canDisplayPage < whatPageNum + 2)")
      .pagination--more(v-if="!(prevLink().toggle) && !(canDisplayPage < whatPageNum + 2)") ……
      AppButton.nextButton(text="NEXT" :to="nextLink().link" v-if="nextLink().toggle")
    AppFooter
</template>

<script>
export default {
  mounted() {
    console.log('現在のページ', this.whatPageNum)
    console.log('表示する記事数', this.displayPostNum)
    console.log('取得した記事の総数', this.getTotalArticle)
    console.log('表示できるページ数', this.canDisplayPage)
  },
  methods: {
    prevLink(boolean) {
      const pageNum = this.whatPageNum - 1
      if (boolean) {
        return {
          toggle: this.whatPageNum > 2,
          link: '/page/' + String(pageNum)
        }
      } else {
        return {
          toggle: this.whatPageNum > 1,
          link: '/page/' + String(pageNum)
        }
      }
    },
    nextLink(boolean) {
      const pageNum = Number(this.whatPageNum) + 1
      if (boolean) {
        console.log(this.displayPostNum > this.whatPageNum)
        return {
          link: '/page/' + String(pageNum),
          toggle: this.displayPostNum >= this.whatPageNum + 2
        }
      } else {
        return {
          link: '/page/' + String(pageNum),
          toggle: this.displayPostNum >= this.whatPageNum + 1
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pages {
  width: $default-size;
  padding: 16px 0 48px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  @include mq(sm) {
    width: $default-size-sp;
    flex-direction: column;
  }
  &__title {
    text-align: center;
    @include font-title;
  }
  &__body {
    background: $color-textcolorwhite;
    width: 775px;
    box-sizing: border-box;
    padding: 30px;
    @include gap-bottom(30px);
    @include mq(sm) {
      width: $default-size-sp;
    }
  }
  &__link {
    display: flex;
    &--image {
      width: 300px;
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
}
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  @include gap-right(16px);
  &--more {
    align-self: center;
    @include font-cardtitle;
    color: $color-textsecondary;
  }
}
</style>
