<template lang="pug">
nuxt-link.tag-button(:to="'/tag/'+tag.name")
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
  },
  mounted() {
    console.log(this.tag.name)
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
