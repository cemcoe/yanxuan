import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/rem'
import './assets/reset.css'

Vue.config.productionTip = false

import { Button, Col, Row, Icon, Field,  Tab, Tabs, Swipe, SwipeItem, Grid, GridItem} from 'vant';
Vue.use(Button).use(Col).use(Row).use(Icon).use(Field).use(Tab).use(Tabs).use(Swipe).use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);

import { CountDown } from 'vant';
Vue.use(CountDown);

import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
