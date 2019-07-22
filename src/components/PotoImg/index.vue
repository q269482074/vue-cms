<template>
    <div id="potoImgContriner">
      <Loading v-if="isLoading" />
      <div v-else>
        <div v-show="show">
        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange"
            :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore"
        >
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <!-- <swiper-slide>I'm Slide 1</swiper-slide> -->
            <swiper-slide v-for="item in imgTypeList" :key="item.id" ref="btnClass" :class="[item.id == 1 ? 'current' : '']">
              {{item.name}}
            </swiper-slide>
            
            <!-- Optional controls -->
            <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
        <div class="show_img">
          <ul>
            <li v-for="item in imgList" :key="item.id" @tap="changeImgInfo(item.id)">
              <img v-lazy="item.url">
              <div class="img_info">
                <h1 class="img_info_header">标题asdasdasdasd</h1>
                <div class="img_info_content">
                  阿萨德进口货阿是考虑到就暗卢克输弹击啊去外地das阿萨德进口货阿是考虑到就暗卢克输弹击啊去外地uasdas阿萨德进口货阿是考虑到就暗卢克输弹击啊去外地阿萨德进口货阿是考虑到就暗卢克输弹击啊去外地das阿萨德进口货阿是考虑到就暗卢克输弹击啊去外地uasdas阿萨德进口货阿是考虑到就暗卢克输弹击啊去外地阿萨德进口货阿是考虑到就暗卢克输弹击啊去外地das阿萨德进口货阿是考虑到就暗卢克输弹击啊去外地uasdas阿萨德进口货阿是考虑到就暗卢克输弹击啊去外地das阿萨德进口货das阿萨德进口货das阿萨德进口货
                </div>
                <div></div>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="status" style="text-align:center;">加载完毕。。。</div>
      </mt-loadmore>
      </div>
      </div>
      <router-view name="imgInfo"></router-view>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name : 'PotoImg',
    data() {
   return {
     swiperOption: {
       // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
       notNextTick: true,
       // swiper configs 所有的配置同swiper官方api配置
       autoplay: 3000,
       // direction : 'vertical',
        //ffect:"coverflow",
        // freeMode : true,
       slidesPerView : 3,
       centeredSlides : false,
       spaceBetween : -70,
       grabCursor : true,
       setWrapperSize :true,
       slidesOffsetBefore : 20,
       preventClicksPropagation : true,
       // autoHeight: true,
       // paginationType:"bullets",
       pagination : '.swiper-pagination',
    //    paginationClickable :true,
       prevButton:'.swiper-button-prev',
       nextButton:'.swiper-button-next',
       // scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
       // if you need use plugins in the swiper, you can config in here like this
       // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
       // debugger: true,
       // swiper callbacks
       // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
       // onTransitionStart(swiper){
       //   console.log(swiper)
       // },
      on:{          
            // 使用es6的箭头函数，使this指向vue对象          
            tap: ()=>{            
            // 通过$refs获取对应的swiper对象            
                let swiper = this.$refs.mySwiper.swiper;            
                this.typeId = swiper.clickedIndex;
                if(this.typeClick == this.typeId)
                  return;
                for(let j=0;j< this.$refs.mySwiper.$children.length; j++){
                     this.$refs.mySwiper.$children[j].$el.classList.remove('current');
                }
                this.typeClick = this.typeId;
                this.pageNum = 1;
                this.status = false;
                this.$refs.mySwiper.$children[this.typeId].$el.classList.add('current');
                this.axios.get('/index/api/getImgList?typeId='+this.typeId+'&page=1').then((res)=>{
                  if(res.data.status == 0){
                    this.imgList = res.data.img;
                  }
                });
            }        
		}    
       // more Swiper configs and callbacks...
       // ...
     },
     examplename: 'Loadmore',
     pageNum: 1,//页码
     InitialLoading: true,//初始加载
     // list: 0,//数据
     allLoaded: false,//数据是否加载完毕
     bottomStatus: '',//底部上拉加载状态
     wrapperHeight: 0,//容器高度
     topStatus: '',//顶部下拉加载状态
     isLoading : true,
     imgTypeList : [],
     imgList : [],
     typeId : 0,
     status : false,
     typeClick : 10086,
     show : true,
     scroll : 0
   }
 },components: {
 swiper,
 swiperSlide,
},
 // you can find current swiper instance object like this, while the notNextTick property value must be true
 // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
 computed: {
   swiper() {
     return console.log(this.$refs.mySwiper.swiper);
   }
 },
 mounted() {
  // you can use current swiper instance object to do something(swiper methods)
  // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  //console.log('this is current swiper instance object', this.swiper)
  //this.swiper.slideTo(3, 1000, false)
    
       this.axios.get('/index/api/getimgtype').then((res)=>{
        if(res.data.status == 0){
          this.imgTypeList = res.data.imgType;
          this.isLoading = false;
        }
      });
      this.axios.get('/index/api/getImgList?typeId=0').then((res)=>{
        if(res.data.status == 0){
          this.imgList = res.data.img;
        }
      });
      
    // this.getImgList(0)
 },
 activated() {
   this.show = true;
   console.log(345435345345);
 },
 deactivated() {
   console.log(123123123);
 },
//  destroyed: function () {
//            console.log("我已经离开了！");
//  },
methods: {
        //上拉加载
        handleBottomChange(status) {
                this.bottomStatus = status;
            },
        loadBottom() {
            this.handleBottomChange("loading");//上拉时 改变状态码
            this.pageNum += 1;
           setTimeout(() => {
              this.axios.get('/index/api/getImgList?typeId='+this.typeId+'&page='+this.pageNum).then((res)=>{
                if(res.data.status == 0){
                    this.imgList = this.imgList.concat(res.data.img);
                    if(res.data.img == ''){
                      this.status = true;
                      this.allLoaded = true;
                    }
                  }
                });
                this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
                this.$refs.loadmore.onBottomLoaded()
            }, 1500);
        },
        //下拉刷新
        handleTopChange(status) {
            this.topStatus = status;
        },
        loadTop() {//下拉刷新 模拟数据请求这里为了方便使用一次性定时器
            this.handleTopChange("loading");//下拉时 改变状态码
            this.allLoaded = false;//下拉刷新时解除上拉加载的禁用
            setTimeout(() => {
                // this.list = 12;//下拉刷新 数据初始化
                this.handleTopChange("loadingEnd")//数据加载完毕 修改状态码
                this.$refs.loadmore.onTopLoaded();
            }, 1500);
        },
        changeImgInfo(imgId){
          var top = Math.floor(document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset)
          console.log(top)
          this.$router.push('/home/potoImg/imgInfo/'+imgId);
          this.show = false;
        },
    },
    // watch: {
    //   pageNum(newVal){
    //           setTimeout(() => {
    //           this.axios.get('/index/api/getImgList?typeId='+this.typeId+'&page='+this.pageNum).then((res)=>{
    //             if(res.data.status == 0){
    //                 this.imgList = this.imgList.concat(res.data.img);
    //                 if(res.data.img == ''){
    //                   this.status = true;
    //                 }
    //               }
    //             });
    //             this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
    //             this.$refs.loadmore.onBottomLoaded()
    //         }, 1500);
    //     }
    // },
}
</script>

<style lang="scss" scoped>
#potoImgContriner{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    width: 100%;
    min-height: 100%;
    background: #ffffff;
    padding: 0 3px;
    .swiper-container{
        height: 40px;
        .swiper-slide{
            line-height: 40px;
        }
        .current{
            color:rgb(187, 114, 30);
        }
    }
    .show_img{
      li{
        background-color: #ccc;
        width: 95%;
        height: 300px;
        margin: 10px auto;
        padding: 0 1px;
        box-shadow: 0 0 9px #999;
        position: relative;
        overflow: hidden;
        img[lazy="loaded"] {
          width: 100%;
          height: 100%;
        }
        .img_info{
          position: absolute;
          bottom: 0;
          width: 100%;
          max-height: 80px;
          background-color: rgba(0, 0, 0,0.4);
          h1{
            font-size: 20px;
            margin: 0;
            color: #ffffff;
          }
          .img_info_content{
            color: #ffffff;
            font-size: 14px;
            max-height: 60px;
          }
        }
      }
    }
}
</style>
