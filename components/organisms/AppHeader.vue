<template lang="pug">
.header
  .header__wrap
    a.header__logo(href="/")
      img(src="/image/logo_inline.svg")
    ul.header__menu
      li
        a(href="/page/1") NEWS
      li
        a(href="https://yuki275480.typeform.com/to/LX69Al" target="_brank") CONTACT
      li
        a(href="/about") ABOUT
      li
        button(@click="searchToggle = true")
          feather-search

  transition
    form.header__search(v-if="searchToggle" v-on:submit.prevent="searchMethods()")
      .header__wrap
        input(type="text" placeholder="ここにテキストを入力して検索" v-model="searchText")
        a(@click="searchMethods()")
          feather-search
  transition
    .header__cover(v-if="searchToggle" @click="searchToggle = false")
  transition
    .header__sp-menu(v-if="spMenuToggle")
      .header__sp-menu__wrap
        img(src="/image/logo_inline_white.svg")
      .header__sp-menu__search
        input(type="text" placeholder="ここにテキストを入力して検索" v-model="searchText")
        a(@click="searchMethods()")
          feather-search.header__sp-menu__search--icon
      ul.header__sp-menu__menu
        li.header__sp-menu--item
          a(href="/about") ABOUT<span> | 私たちについて</span>
        li.header__sp-menu--item
          a(href="/page/1") NEWS<span> | 記事一覧</span>
        li.header__sp-menu--item
          a(href="https://yuki275480.typeform.com/to/LX69Al" target="_brank") CONTACT<span> | お問い合わせ</span>
      ul.header__sp-menu__category
        li.header__sp-menu--item
          a(href="/design/1") DESIGN
        li.header__sp-menu--item
          a(href="/technology/1") TECHNOLOGY
        li.header__sp-menu--item
          a(href="/culture/1") CULTURE
        li.header__sp-menu--item
          a(href="/gadget/1") GADGET
      ul.header__sp-menu__social
        li.header__sp-menu--item.back-twitter
          img(src="/twitter_white.svg")
        li.header__sp-menu--item.back-instagram
          feather-instagram.social-icon
        li.header__sp-menu--item.back-facebook
          feather-facebook.social-icon
        li.header__sp-menu--item
      p.header__sp-menu__legal ©HINOKI, All RIGHTS RESERVED.

  button.header__menu-button(@click="spMenuToggle=!spMenuToggle" :class="{'open-menu':spMenuToggle}")
    span.bar
    span.bar
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
        window.location.href = `/search?title=${this.searchText}`
        // this.$router.push(`/search/${this.searchText}`)
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
  @include mq(sm) {
    padding: 8px 0px;
  }
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
    position: fixed;
    top: 8px;
    right: 20px;
    z-index: 1001;
    .bar {
      position: absolute;
      display: block;
      content: '';
      width: 32px;
      height: 3px;
      background: $color-black;
      transition: all 300ms ease;
      left: 0px;
      right: 0px;
      margin: auto;
      &:first-child {
        top: 16px;
      }
      &:last-child {
        bottom: 16px;
      }
    }
    @include mq(sm) {
      display: block;
    }
  }
  .open-menu {
    .bar {
      background: $color-textcolorwhite;
      &:first-child {
        top: auto;
        transform: rotate(45deg);
      }
      &:last-child {
        bottom: auto;
        transform: rotate(-45deg);
      }
    }
  }
  &__sp-menu {
    padding: 8px 0px;
    @include full-screen;
    background: $color-black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-sizing: border-box;
    &__search {
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;

      input {
        background: transparent;
        width: 100%;
        color: $color-textcolorwhite;
      }
      &--icon {
        stroke: $color-textcolorwhite;
      }
    }
    &__category {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 60px);
      *:nth-child(even) {
        border-left: 1px solid $color-textcolorwhite;
      }
    }
    &__social {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 60px);
      *:nth-child(even) {
        border-left: 1px solid $color-textcolorwhite;
      }
      .social-icon {
        stroke: $color-textcolorwhite;
        path {
          stroke: $color-textcolorwhite !important;
        }
      }
      .back-twitter {
        background: $color-sns-twitter;
      }
      .back-instagram {
        background: $color-sns-instagram;
      }
      .back-facebook {
        background: $color-sns-facebook;
      }
    }
    &__menu {
      display: grid;
      grid-template-columns: repeat(1, 100%);
      grid-template-rows: repeat(3, 60px);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      border-top: 1px solid $color-textcolorwhite;
    }
    &--item {
      border-bottom: 1px solid $color-textcolorwhite;
      @include flex-middle;

      a {
        @include font-cardtitle;
        color: $color-textcolorwhite;
        span {
          @include font-textbold;
          color: $color-textcolorwhite;
        }
      }
    }
    &__wrap {
      padding: 0px 20px;
    }
    &__legal {
      position: absolute;
      text-align: center;
      bottom: 20px;
      width: 100%;
      color: $color-textcolorwhite;
    }
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
