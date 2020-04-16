<template lang="pug">
.pagination(v-if="this.data.canDisplayPage < 10")
  AppButton.prevButton(text="PREV" :to="`/page/${Number(currentPageNum()) -  1}`" v-if='currentPageNum() > 1')
  .pagination--more(v-if="currentPageNum() >= 3") ……
  AppButton(:text="String(currentPageNum() - 2)" :to="`${routeString()}${Number(currentPageNum()) -  2}`" v-if="this.data.canDisplayPage === this.currentPageNum() && this.data.canDisplayPage > 2")
  AppButton(:text="String(currentPageNum() - 1)" :to="`${routeString()}${Number(currentPageNum()) -  1}`" v-if='currentPageNum() > 1')
  AppButton.currentLink(:text="String(currentPageNum())" to="")
  AppButton(:text="String(currentPageNum() + 1)" :to="`${routeString()}${Number(currentPageNum()) +  1}`" v-if="!(this.data.canDisplayPage === this.currentPageNum())")
  AppButton(:text="String(currentPageNum() + 2)" :to="`${routeString()}${Number(currentPageNum()) +  2}`" v-if="currentPageNum() === 1 && this.data.canDisplayPage > 2")
  .pagination--more(v-if="!(this.data.canDisplayPage === this.currentPageNum())") ……
  AppButton.nextButton(text="NEXT" :to="`/page/${Number(currentPageNum()) +  1}`" v-if="!(this.data.canDisplayPage === this.currentPageNum())")
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({ count: 0 })
    }
  },
  mounted() {
    this.routeString()
  },
  methods: {
    routeString() {
      const params = this.$route.params
      if (!(params.categories === undefined)) {
        return `/categories/${params.categories}/`
      } else {
        return '/page/'
      }
    },
    currentPageNum() {
      return Number(this.$route.params.page)
    },
    prevLink(boolean) {
      const pageNum = this.whatPageNum - 1
      if (boolean) {
        return {
          toggle: this.whatPageNum > 2,
          link: this.routeString() + String(pageNum)
        }
      } else {
        return {
          toggle: this.currentPageNum > 1,
          link: this.routeString() + String(pageNum)
        }
      }
    },
    nextLink(boolean) {
      const pageNum = Number(this.whatPageNum) + 1
      if (boolean) {
        console.log(this.displayPostNum > this.whatPageNum)
        return {
          link: '/page/' + String(pageNum),
          toggle:
            this.displayPostNum >= this.whatPageNum + 2 &&
            this.canDisplayPage >= pageNum
        }
      } else {
        return {
          link: '/page/' + String(pageNum),
          toggle:
            this.displayPostNum >= this.whatPageNum + 1 &&
            this.canDisplayPage >= pageNum
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  @include gap-right(16px);
  &--more {
    align-self: center;
    @include font-cardtitle;
    color: $color-textsecondary;
  }
}
</style>
