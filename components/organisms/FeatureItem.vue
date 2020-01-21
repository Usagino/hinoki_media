<template lang="pug">
.feature-item
  .feature-item__text
    h3 FEATURE
    h2 アメリカン・ギャングスターズの知られざる“黒い雑学”まとめ
    .feature-item__text__info
      p 2020.01.01
      p written by hayato
  img.feature-item__thumbnail(src="https://admin.frontartgraph.com/wp-content/uploads/2020/01/E964CD4B-FEEF-4A74-BA03-BF1CF0FEFE29-scaled.jpg")
  h3.feature-item__sp-title FEATURE
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.feature-item {
  width: $default-size;
  height: 200px;
  margin: 0 auto 40px;
  background: $color-textcolorwhite;
  display: flex;
  justify-content: space-between;
  @include mq(sm) {
    width: 340px;
    flex-direction: column-reverse;
    height: auto;
  }
  &__text {
    padding: 24px 100px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @include mq(sm) {
      padding: 12px;
      @include gap-bottom(8px);
    }
    h2,
    h3 {
      text-align: center;
      @include font-cardtitle;
    }
    h2 {
      @include mq(sm) {
        text-align: left;
      }
    }
    h3 {
      @include mq(sm) {
        display: none;
      }
    }
    &__info {
      display: flex;
      justify-content: space-between;
      * {
        color: $color-textsecondary;
        @include font-textbold;
      }
    }
  }
  &__thumbnail {
    width: 50%;
    height: 100%;
    object-fit: cover;
    @include mq(sm) {
      width: 100%;
      height: 50%;
    }
  }
  &__sp-title {
    display: none;
    @include font-cardtitle;
    color: $color-textsecondary;
    padding: 12px 0;
    @include mq(sm) {
      display: block;
      text-align: center;
    }
  }
}
</style>
