<template lang="pug">
.container
  AppHeader
  .error
    img(src="/image/error_logo.svg")
    h1 PAGE NOT FOUND
  AppFooter
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  @include flex-middle;
  flex-direction: column;
}
.error {
  display: inline-block;
  margin: 120px auto;
  padding: 40px;
  background: $color-textcolorwhite;
  img {
    width: 280px;
    height: auto;
    margin-bottom: 32px;
  }
  h1 {
    @include font-title;
  }
}
</style>
