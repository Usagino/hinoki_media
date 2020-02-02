<template lang="pug">
.footer
  .footer__guide
    a(href="/")
      img.footer__guide__logo(src="/image/logo_inline.svg" decoding="async")
    ul.footer__guide__menu
      li
        a(href="/category/design") DESIGN
      li
        a(href="/category/technology") TECHNOLOGY
      li
        a(href="/category/culture") CULTURE
      li
        a(href="/category/gadgetm ") GADGET
    .footer__guide__sns
      a(href="/")
        feather-facebook
      a(href="/")
        feather-twitter
      a(href="/")
        feather-instagram
  .footer__info
    ul.footer__info__menu
      li
        a(href="/news") ABOUT
      li
        a(href="/news") CONTACT
    p ©HINOKI, All RIGHTS RESERVED.
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background: $color-textcolorwhite;
  padding: 40px 0;
  &__guide {
    width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    @include repeat-columns(24px);
    @include mq(sm) {
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
    width: $default-size;
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
