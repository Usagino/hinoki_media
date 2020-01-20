<template lang="pug">
.header
  .header__wrap
    a.header__logo
      img(src="/image/logo_inline.svg")
    ul.header__menu
      li
        nuxt-link(to="/news") NEWS
      li
        nuxt-link(to="/news") CONTACT
      li
        nuxt-link(to="/news") ABOUT
      li
        button
          feather-search
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  background: $color-textcolorwhite;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 20px 0;
  &__wrap {
    width: 1080px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    img {
      height: 40px;
    }
  }
  &__menu {
    @include repeat-rows(32px);
    a {
      @include font-tagtitle;
    }
  }
}
</style>
