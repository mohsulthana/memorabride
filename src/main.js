import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router'
import store from './store/store'
import uploader from 'vue-simple-uploader'
import './assets/scss/style.scss'
import Vuelidate from 'vuelidate'
import DateFilter from './filters/date'
import { library } from '@fortawesome/fontawesome-svg-core'
// internal icons
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebook,
  faTwitter,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter, faPinterest, faShoppingCart, faSearch)
Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(uploader)

Vue.filter('date', DateFilter)

Vue.use(Vuelidate)
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fab'
})

Vue.config.productionTip = false

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
