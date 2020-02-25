<template lang="pug">
  .featureBlock
    h2 FEATURE

    CardItem(
      v-for="item in this.featurePosts"
      :key="item.id"
      :post="item" )
</template>

<script>
export default {
  mounted() {
    console.log(this.featurePosts)
  }
}
</script>

<style lang="scss" scoped>
.featureBlock {
  background: $color-textcolorblack;
  h2 {
    text-align: center;
    color: $color-textcolorwhite;
  }
}
</style>
