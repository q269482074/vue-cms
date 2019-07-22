import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Member from './member'
import Search from './search'
import ShopCart from './shopCart'
// import ImgInfo from '../components/ImgInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    Home,
    Member,
    Search,
    ShopCart,
    // {
    //   path : '/home/imgInfo/:imgId',
    //   component : ImgInfo
    // },
    {
      path : '/*',
      redirect : '/home'
    }
  ],
})
