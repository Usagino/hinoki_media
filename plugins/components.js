import Vue from 'vue'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
// molecules
import VuePaginate from 'vue-paginate'
import AppButton from '@/components/molecules/AppButton.vue'
import TagButton from '@/components/molecules/TagButton.vue'

// organisms
import AppHeader from '@/components/organisms/AppHeader.vue'
import AppFooter from '@/components/organisms/AppFooter.vue'
import CardItem from '@/components/organisms/CardItem.vue'
import CardItemInline from '@/components/organisms/CardItemInline.vue'
import FeatureItem from '@/components/organisms/FeatureItem.vue'
import RankingItems from '@/components/organisms/RankingItems.vue'
import AppPagination from '@/components/organisms/AppPagination.vue'
import AppFeature from '@/components/organisms/AppFeature.vue'
import AppBreadcrumbs from '@/components/organisms/AppBreadcrumbs.vue'

// Vue original component
Vue.component('AppHeader', AppHeader)
Vue.component('AppFooter', AppFooter)
Vue.component('CardItem', CardItem)
Vue.component('CardItemInline', CardItemInline)
Vue.component('AppButton', AppButton)
Vue.component('FeatureItem', FeatureItem)
Vue.component('TagButton', TagButton)
Vue.component('RankingItems', RankingItems)
Vue.component('AppPagination', AppPagination)
Vue.component('AppFeature', AppFeature)
Vue.component('AppBreadcrumbs', AppBreadcrumbs)

// Vue carousel
Vue.component('Carousel', Carousel)
Vue.component('Slide', Slide)

// library
Vue.use(VuePaginate)
