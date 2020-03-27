<template lang="pug">
.container
  AppHeader
  AppBreadcrumbs(:thirdTitle='getTitle(this.Article)' )
  .article
    .article__body(:class="{'article__fullwidth':rankingPosts.length === 0}")
      .article__body__title
        .article__body__info
          p {{ getCategory(this.Article) }}
          p {{ getCreatedAt(this.Article) }}
        .article__body__info
          h1 {{ getTitle(this.Article) }}

      img.article__body__thumbnail(:src="getThumbnail(this.Article)" decoding="async")
      .article__body__text(v-html="this.Article.content.rendered")
      p.article__body__auther Written by {{getAuthor(this.Article)}}
      .article__social-btns
        .article__social-btns__fb.article__social-btns__button
          a(href="https://www.facebook.com/hinoki.media/" target="_brank")
            feather-facebook
        .article__social-btns__tw.article__social-btns__button
          a(href="https://twitter.com/hinoki_media" target="_brank")
            feather-twitter
        .article__social-btns__url.article__social-btns__button
          a(href="" target="_brank")
            feather-external-link
    RankingItems(:posts="rankingPosts" v-if="rankingPosts.length !== 0")
  AppFeature(:posts="featurePosts" v-if="featurePosts.length !== 0")
  AppFooter
</template>

<script>
export default {
  head() {
    return {
      title: this.getTitle(this.Article)
    }
  },
  middleware: 'aboutpage_redirect'
}
</script>

<style lang="scss">
.article {
  width: $default-size;
  padding: 0px 0 48px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @include mq(sm) {
    width: $default-size-sp;
    flex-direction: column;
  }
  &__fullwidth {
    width: 100% !important;
  }
  &__body {
    background: $color-textcolorwhite;
    width: 775px;
    @include mq(sm) {
      width: $default-size-sp;
    }
    &__title {
      padding: 20px;
      @include mq(sm) {
        padding: 12px;
      }
    }
    &__info {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      h1 {
        @include font-title;
        margin-bottom: 8px;
      }
      p,
      a {
        @include font-infomationtext;
        color: $color-textsecondary;
      }
      @include mq(sm) {
        &:last-child {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
    &__thumbnail {
      width: 100%;
      height: 400px;
      object-fit: cover;
      margin-bottom: 20px;
    }
    &__text {
      @include mq(sm) {
        padding: 12px;
      }
      * {
        margin-bottom: 32px;
        &:last-child {
          margin-bottom: 0px;
        }
        @include mq(sm) {
          margin-bottom: 16px;
        }
      }
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul {
        margin-left: 32px;
        margin-right: 32px;
        @include mq(sm) {
          margin-left: 0px;
          margin-right: 0px;
        }
        color: $color-textcolorblack;
      }
      li {
        list-style: auto;
      }
      img {
        width: 100%;
        height: auto;
      }
      p {
        @include font-text;
      }
      h2 {
        @include font-textbold;
      }
    }
    &__tags {
      padding: 32px;
      @include mq(sm) {
        padding: 0px 12px 24px;
      }
    }
    &__auther {
      padding: 20px;
      text-align: right;
      @include font-infomationtext;
    }
  }
  &__social-btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 64px;
    &__button {
      width: calc(100% / 3);
      @include flex-middle;
      svg,
      path {
        stroke: $color-textcolorwhite !important;
      }
    }
    &__fb {
      background: #3b5998;
    }
    &__tw {
      background: #1da1f2;
    }
    &__url {
      background: $color-textcolorblack;
    }
  }
}
</style>
