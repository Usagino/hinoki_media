import Vue from 'vue'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import AppHeader from '@/components/organisms/AppHeader.vue'
import AppFooter from '@/components/organisms/AppFooter.vue'
import CardItem from '@/components/organisms/CardItem.vue'
import AppButton from '@/components/molecules/AppButton.vue'

Vue.component('AppHeader', AppHeader)
Vue.component('AppFooter', AppFooter)
Vue.component('CardItem', CardItem)
Vue.component('AppButton', AppButton)
// Vue carousel
Vue.component('Carousel', Carousel)
Vue.component('Slide', Slide)
