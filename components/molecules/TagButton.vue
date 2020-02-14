<template lang="pug">
  a.tag-button(:href="'/tag/' +tag.name + '/1'")
    | # {{tag.name}}
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-button {
  padding: 2px 16px;
  border-radius: 100px;
  border: 1px solid $color-textsecondary;
  display: inline;
  line-height: 1 !important;
  color: $color-textsecondary;
  @include font-text;
  margin-right: 12px;
}
</style>
