<template lang="pug">
.footer
  .footer__guide
    a(href="/")
      img.footer__guide__logo(src="/image/logo_inline.svg" decoding="async")
    ul.footer__guide__menu
      li
        a(href="/categories/design/1") DESIGN
      li
        a(href="/categories/technology/1") TECHNOLOGY
      li
        a(href="/categories/culture/1") CULTURE
      li
        a(href="/categories/gadget/1") GADGET
    .footer__guide__sns
      a(href="https://www.facebook.com/hinoki.media/")
        feather-facebook
      a(href="https://twitter.com/hinoki_media")
        feather-twitter
      a(href="https://www.instagram.com/hinoki_media/")
        feather-instagram
  .footer__info
    ul.footer__info__menu
      li
        a(href="/about") ABOUT
      li
        a(href="https://yuki275480.typeform.com/to/LX69Al" target="_brank") CONTACT
    p ©HINOKI, All RIGHTS RESERVED.
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background: $color-textcolorwhite;
  padding: 40px 24px;
  width: 100vw;
  @include mq(sm) {
    padding: 40px 0px;
  }
  &__guide {
    width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    @include repeat-columns(24px);
    @include mq(sm) {
      width: 100%;
      & > a {
        display: inline;
        margin: auto;
      }
    }
    &__logo {
      height: 60px;
      width: auto;
      display: block;
      margin: auto;
      @include mq(sm) {
        display: inline;
      }
    }
    &__menu {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      @include mq(sm) {
        flex-direction: column;
        justify-content: center;
        @include gap-bottom(12px);
        li {
          display: flex;
        }
        li > a {
          @include flex-middle;
          display: inline-flex;
          margin: auto;
        }
      }
      a {
        @include font-tagtitle;
      }
    }
    &__sns {
      display: flex;
      justify-content: center;
      @include gap-right(12px);
      @include mq(sm) {
        margin-bottom: 12px;
      }
    }
  }
  &__info {
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
    max-width: $default-size;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @include mq(sm) {
      width: $default-size-sp;
      flex-direction: column;
      @include gap-bottom(12px);
    }
    p {
      @include mq(sm) {
        text-align: center;
      }
    }
    &__menu {
      display: flex;

      @include gap-right(12px);
      @include mq(sm) {
        justify-content: center;
      }
    }
  }
}
</style>
