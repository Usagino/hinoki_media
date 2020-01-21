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
        button(@click="searchToggle = true")
          feather-search
  transition
    form.header__search(v-if="searchToggle")
      .header__wrap
        input(type="text" placeholder="ここにテキストを入力して検索")
        button
          feather-search
  transition
    .header__cover(v-if="searchToggle" @click="searchToggle = false")
</template>

<script>
export default {
  data() {
    return {
      searchToggle: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: $color-textcolorwhite;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 20px 0;
  z-index: 100;
  &__wrap {
    width: $default-size;
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
  &__search {
    // display: none;
    background: $color-textcolorwhite;
    width: 100vw;
    position: absolute;
    top: -100%;
    top: 0%;
    left: 0;
    z-index: 900;
    padding: 20px 0;
    input {
      height: 42px;
      @include font-textbold;
      width: $default-size - 32px;
    }
  }
  &__cover {
    @include full-screen;
    background: rgba(77, 76, 76, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
