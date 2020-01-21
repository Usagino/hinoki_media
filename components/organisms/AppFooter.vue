<template lang="pug">
.footer
  .footer__guide
    nuxt-link(to="/")
      img.footer__guide__logo(src="/image/logo_inline.svg")
    ul.footer__guide__menu
      li
        nuxt-link(to="/news") DESIGN
      li
        nuxt-link(to="/news") TECHNOLOGY
      li
        nuxt-link(to="/news") CULTURE
      li
        nuxt-link(to="/news") GADGET
    .footer__guide__sns
      nuxt-link(to="/")
        feather-facebook
      nuxt-link(to="/")
        feather-twitter
      nuxt-link(to="/")
        feather-instagram
  .footer__info
    ul.footer__info__menu
      li
        nuxt-link(to="/news") ABOUT
      li
        nuxt-link(to="/news") CONTACT
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
    &__logo {
      height: 60px;
      width: auto;
      display: block;
      margin: auto;
    }
    &__menu {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      a {
        @include font-tagtitle;
      }
    }
    &__sns {
      display: flex;
      justify-content: center;
      @include gap-right(12px);
    }
  }
  &__info {
    width: $default-size;
    margin: auto;
    display: flex;
    justify-content: space-between;
    &__menu {
      display: flex;
      @include gap-right(12px);
    }
  }
}
</style>
