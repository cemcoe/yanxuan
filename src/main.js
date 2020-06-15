import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/rem'
import './assets/reset.css'

Vue.config.productionTip = false

import { Button, Col, Row, Icon } from 'vant';
Vue.use(Button).use(Col).use(Row).use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
