<template lang="pug">
.header
  .header__wrap
    a.header__logo(href="/")
      img(src="/image/logo_inline.svg")
    ul.header__menu
      li
        a(href="/news/1") NEWS
      li
        a(href="/contact") CONTACT
      li
        a(href="/about") ABOUT
      li
        button(@click="searchToggle = true")
          feather-search

  transition
    form.header__search(v-if="searchToggle" @submit="searchMethods()")
      .header__wrap
        input(type="text" placeholder="ここにテキストを入力して検索" v-model="searchText")
        a(@click="searchMethods()")
          feather-search
  transition
    .header__cover(v-if="searchToggle" @click="searchToggle = false")
  transition
    .header__sp-menu(v-if="spMenuToggle")
      button.header__sp-menu__close(@click="spMenuToggle=false")
  button.header__menu-button(@click="spMenuToggle=!spMenuToggle")
</template>

<script>
export default {
  data() {
    return {
      searchToggle: false,
      spMenuToggle: false,
      searchText: ''
    }
  },
  methods: {
    searchMethods() {
      console.log(this.searchText)
      if (!(this.searchText === '')) {
        this.$router.push(`/search?title=${this.searchText}`)
      }
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
  border-bottom: 1px solid rgba($color-textsecondary, 0.2);
  &__wrap {
    @include defaultPCwidth;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span {
      cursor: pointer;
    }
    @include mq(sm) {
      width: $default-size-sp;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
  &__logo {
    img {
      height: 40px;
    }
  }
  &__menu {
    @include repeat-rows(32px);
    @include mq(sm) {
      display: none;
    }
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
    padding: 19px 0;
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
  &__menu-button {
    display: none;
    height: 44px;
    width: 44px;
    background: red;
    height: 44px;
    width: 44px;
    background: red;
    position: fixed;
    top: 20px;
    right: 20px;
    background: red;
    z-index: 1001;
    @include mq(sm) {
      display: block;
    }
  }
  &__sp-menu {
    @include full-screen;
    background: $color-textcolorblack;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
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
