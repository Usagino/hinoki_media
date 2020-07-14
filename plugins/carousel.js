import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import VuePaginate from 'vue-paginate'

Vue.use(VueCarousel)
Vue.component('Carousel', Carousel)
Vue.component('Slide', Slide)

// library
Vue.use(VuePaginate)
