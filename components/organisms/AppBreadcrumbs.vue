<template lang="pug">
  ul.breadcrumbs
    li
      a(href="/") TOP
    li(v-for="item in breadcrumbs" :key="item.index")
      a(:href="item.link") {{item.name}}
</template>

<script>
export default {
  props: {
    thirdTitle: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      breadcrumbs: []
    }
  },
  mounted() {
    console.log(this.$route)
    const route = this.$route.path
    const resBreadcrumbs = route.split('/')
    if (resBreadcrumbs[1] !== undefined) {
      const secondRoute = resBreadcrumbs[1].toUpperCase()
      this.breadcrumbs.push({
        name: '/',
        link: '/'
      })
      this.breadcrumbs.push({
        name: secondRoute,
        link: `/${resBreadcrumbs[1]}`
      })
    }
    if (resBreadcrumbs[2] !== undefined) {
      const thirdRoute = resBreadcrumbs[2]
      this.breadcrumbs.push({
        name: '/',
        link: '/'
      })
      this.breadcrumbs.push({
        name: this.thirdTitle,
        link: `/${resBreadcrumbs[1]}/${thirdRoute}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  @include defaultPCwidth;
  padding-top: 20px;
  padding-bottom: 20px;
  @include gap-right(8px);
  overflow: hidden;
  text-overflow: ellipsis;
  li {
    display: inline;
  }
  a,
  span {
    white-space: nowrap;
    color: $color-textsecondary;
  }
}
</style>
