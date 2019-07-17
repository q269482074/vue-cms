import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//配置axios
import axios from 'axios';
Vue.prototype.axios = axios;
//引入mint-ui
Vue.use(MintUI)
//全局轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
