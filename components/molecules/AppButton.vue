<template lang="pug">
.appbutton
  a.text(v-if="to !== undefined" :href="to" :class="{circle:text.length === 1}") {{text}}
  p.text(v-else :class="{circle:text.length === 1}") {{text}}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'TEXT'
    },
    to: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.appbutton {
  display: inline-flex;
  .text {
    background: $color-textcolorblack;
    display: inline-flex;
    align-items: center;
    padding: 6px 16px;
    cursor: pointer;
    border-radius: 2.5px;
    margin: auto;
    @include font-pagebutton;
    color: $color-textcolorwhite;
  }
}
.circle {
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 0px !important;
  width: 42px;
  height: 42px;
}
.currentLink {
  .text {
    background: $color-textcolorwhite;
    color: $color-textcolorblack !important;
  }
}
</style>
