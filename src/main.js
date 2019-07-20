import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

//配置axios
import axios from 'axios';
Vue.prototype.axios = axios;
//配置qs
import qs from 'qs';
Vue.prototype.qs = qs;
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//全局轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//全局loading加载组件
import Loading from '@/components/Loading';
Vue.component('Loading',Loading);
//全局swipre组件挂载
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);



Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
