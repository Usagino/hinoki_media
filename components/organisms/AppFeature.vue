<template lang="pug">
.feature-blocks
  h2 FEATURE
  .feature-blocks__items(v-if="$ua.deviceType() === 'pc'")
    CardItem(
      v-for="item in posts"
      :key="item.id"
      :post="item"
      addClass="black")
  .feature-blocks__items(v-else)
    CardItemInline(
      v-for="item in posts"
      :key="item.id"
      :post="item"
      addClass="black")
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-blocks {
  background: $color-textcolorblack;
  padding: 40px 0;
  & > h2 {
    text-align: center;
    color: $color-textcolorwhite;
  }
  &__items {
    @include defaultPCwidth;
    padding-top: 16px;
    padding-bottom: 16px;
    display: -webkit-box;
    @include baseGrid;
    @include mq(sm) {
      padding: 32px 8px;
      box-sizing: border-box;
      grid-auto-rows: 100px;
      grid-gap: 10px 10px;
    }
  }
}
</style>
