<template lang="pug">
.appbutton
  p.text {{text}}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'TEXT'
    }
  }
}
</script>

<style lang="scss" scoped>
.appbutton {
  background: $color-textcolorblack;
  display: inline-block;
  padding: 4px 36px;
  cursor: pointer;
  border-radius: 100vh;
  margin: auto;
  .text {
    @include font-cardtitle;
    color: $color-textcolorwhite;
  }
}
</style>
