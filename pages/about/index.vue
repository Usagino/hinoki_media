<template lang="pug">
.container
  AppHeader
  AppFooter
</template>

<script>
export default {
  mounted() {
    console.log('gi')
    console.log('featurePosts', this.featurePosts)
  }
}
</script>

<style lang="css" scoped></style>
