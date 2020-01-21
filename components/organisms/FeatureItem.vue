<template lang="pug">
.feature-item
  .feature-item__text
    h3 FEATURE
    h2 アメリカン・ギャングスターズの知られざる“黒い雑学”まとめ
    .feature-item__text__info
      p 2020.01.01
      p written by hayato
  img.feature-item__thumbnail(src="https://admin.frontartgraph.com/wp-content/uploads/2020/01/E964CD4B-FEEF-4A74-BA03-BF1CF0FEFE29-scaled.jpg")
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
  &__text {
    padding: 24px 100px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h2,
    h3 {
      text-align: center;
      @include font-cardtitle;
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
  }
}
</style>
