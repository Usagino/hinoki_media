<template lang="pug">
.container
  AppHeader
  .about__first
    img.about__first--image(src="/image/about_logo.svg")
    .about__first__text
      h1 Hello, We are creative media
      p 私たち「HINOKI」 は、デザインの学校を卒業したメンバーで結成したチームです。<br>デザインやWEBを中心とした、クリエイティブに関わるモノ・コトを紹介していきます。
      p 私たちがこのメディアを始めた理由は、デザインやWEBを勉強するにあたり、とても悩んだ経験があるからです。領域が広く、常にアップデートされていく業界なので、何を勉強するべきなのか、何を求められているのかなど、分からないことが多くありました。<br>そんな方々のために、デザイナーとして働く私たちが、日々感じていることや、体験したことなど。学生時代に読みたかったと思えるような記事を私たちの視点で書いていきます。
      p これからデザインやWEBを勉強したいと思っている方や、お仕事をされている方々の参考になればと思っています。<br>よろしければ、TwitterやInstagram、Facebookも始めましたので、登録してみて下さい。<br>これから「HINOKI」をどうぞよろしくお願いいたします。
  .about__second
  .about__third
    .about__third__socials
      h2 FOLLOW US
      svg(width="34" height="34")
        line(x1="17" y1="0" x2="17" y2="34" stroke="#000000")
      .about__third__socials--icons
        a(href="https://www.facebook.com/hinoki.media/")
          feather-facebook
        a(href="https://twitter.com/hinoki_media")
          feather-twitter
        a(href="https://www.instagram.com/hinoki_media/")
          feather-instagram
    .about__third__members
      h2 MEMBER
      ul.member__list
        li.member--item
          h3 YUKI ITO
          svg(width="56" height="1")
            line(x1="0" y1="1" x2="56" y2="1" stroke="#000000")
          p Web Developer
        li.member--item
          h3 HAYATO KATO
          svg(width="56" height="1")
            line(x1="0" y1="1" x2="56" y2="1" stroke="#000000")
          p Web Designer
        li.member--item
          h3 KOYA MATSUBA
          svg(width="56" height="1")
            line(x1="0" y1="1" x2="56" y2="1" stroke="#000000")
          p Visual Designer
  AppFooter
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  &__first {
    padding: 96px 0;
    background: $color-textcolorwhite;
    @include flex-middle;
    flex-direction: column;
    &--image {
      height: 336px;
      width: auto;
      margin-bottom: 40px;
      @include mq(sm) {
        width: 164px;
        height: auto;
      }
    }
    &__text {
      @include mq(sm) {
        padding: 40px;
      }
      h1 {
        @include font-title;
        text-align: center;

        @include mq(sm) {
          @include font-cardtitle;
        }
      }
      p {
        @include font-text;
        text-align: left;
        width: 740px;
        margin-top: 12px;
        @include mq(sm) {
          text-align: left;
          @include font-text;
        }
      }
    }
  }
  &__second {
    width: 100vw;
    height: 640px;
    background-image: url('/image/about_back.svg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    @include mq(sm) {
      height: 200px;
    }
  }
  &__third {
    background: $color-textcolorwhite;
    padding: 96px 0;
    border-bottom: 1px solid rgba($color-textsecondary, 0.2);
    &__socials {
      @include flex-middle;
      flex-direction: column;
      @include gap-bottom(8px);
      margin-bottom: 96px;
      &--icons {
        @include gap-right(32px);
      }
    }
    &__members {
      @include flex-middle;
      h2 {
        writing-mode: vertical-lr;
        margin-right: 120px;
        @include mq(sm) {
          margin-right: 20px;
        }
      }
    }
    .member {
      &__list {
        @include gap-bottom(32px);
      }
      &--item {
        display: grid;
        grid-template-columns: 120px min-content 1fr;
        grid-template-rows: 1fr;
        grid-gap: 40px;
        align-items: center;
        @include mq(sm) {
          grid-gap: 16px;
          grid-template-columns: 90px min-content 1fr;
        }
        h3 {
          white-space: nowrap;
          @include mq(sm) {
            @include font-minifytextbold;
          }
        }
        p {
          @include font-text;
          @include mq(sm) {
            @include font-minifytextbold;
          }
        }
        svg {
          @include mq(sm) {
            width: 27px;
          }
        }
      }
    }
  }
}
</style>
