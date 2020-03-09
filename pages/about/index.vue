<template lang="pug">
.container
  AppHeader
  .about__first
    img.about__first--image(src="/image/about_logo.svg")
    .about__first__text
      h1 Hello, We are creative media
      p HINOKIは、ビギナーのデザイナー視点でデザインを中心とした<br>クリエイティブに関わる、モノ、コトなどを紹介するメディアです。
  .about__second
  .about__third
    .about__third__socials
      h2 FOLLOW US
      svg(width="34" height="34")
        line(x1="17" y1="0" x2="17" y2="34" stroke="#000000")
      .about__third__socials--icons
        a(href="/")
          feather-facebook
        a(href="/")
          feather-twitter
        a(href="/")
          feather-instagram
    .about__third__members
      h2 MEMBER
      ul.member__list
        li.member--item
          h3 YUKI ITO
          svg(width="56" height="1")
            line(x1="0" y1="1" x2="56" y2="1" stroke="#000000")
          p Web Developer
        li.member--item
          h3 HAYATO KATO
          svg(width="56" height="1")
            line(x1="0" y1="1" x2="56" y2="1" stroke="#000000")
          p Web Designer
        li.member--item
          h3 KOYA MATSUBA
          svg(width="56" height="1")
            line(x1="0" y1="1" x2="56" y2="1" stroke="#000000")
          p Visual Designer
  AppFooter
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  &__first {
    padding: 96px 0;
    background: $color-textcolorwhite;
    @include flex-middle;
    flex-direction: column;
    &--image {
      height: 336px;
      width: auto;
      margin-bottom: 40px;
    }
    &__text {
      h1 {
        @include font-title;
        text-align: center;
        margin-bottom: 12px;
      }
      p {
        @include font-cardtitle;
        text-align: center;
      }
    }
  }
  &__second {
    width: 100vw;
    height: 640px;
    background-image: url('/image/about_back.svg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
  &__third {
    background: $color-textcolorwhite;
    padding: 96px 0;
    border-bottom: 1px solid rgba($color-textsecondary, 0.2);
    &__socials {
      @include flex-middle;
      flex-direction: column;
      @include gap-bottom(8px);
      margin-bottom: 96px;
      &--icons {
        @include gap-right(32px);
      }
    }
    &__members {
      @include flex-middle;
      h2 {
        writing-mode: vertical-lr;
        margin-right: 120px;
      }
    }
    .member {
      &__list {
        @include gap-bottom(32px);
      }
      &--item {
        display: grid;
        grid-template-columns: 120px min-content 1fr;
        grid-template-rows: 1fr;
        grid-gap: 40px;
        align-items: center;
        p {
          @include font-text;
        }
      }
    }
  }
}
</style>
