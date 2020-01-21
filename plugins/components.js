import Vue from 'vue'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
// molecules
import AppButton from '@/components/molecules/AppButton.vue'
// organisms
import AppHeader from '@/components/organisms/AppHeader.vue'
import AppFooter from '@/components/organisms/AppFooter.vue'
import CardItem from '@/components/organisms/CardItem.vue'
import FeatureItem from '@/components/organisms/FeatureItem.vue'

// Vue original component
Vue.component('AppHeader', AppHeader)
Vue.component('AppFooter', AppFooter)
Vue.component('CardItem', CardItem)
Vue.component('AppButton', AppButton)
Vue.component('FeatureItem', FeatureItem)

// Vue carousel
Vue.component('Carousel', Carousel)
Vue.component('Slide', Slide)
