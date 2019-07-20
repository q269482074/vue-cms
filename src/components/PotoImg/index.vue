<template>
    <div id="potoImgContriner">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <!-- <swiper-slide>I'm Slide 1</swiper-slide> -->
            <!-- <div class="swipre-slider">I'm Slide 1</div>
            <div class="swipre-slider">I'm Slide 1</div>
            <div class="swipre-slider">I'm Slide 1</div>
            <div class="swipre-slider">I'm Slide 1</div>
            <div class="swipre-slider">I'm Slide 1</div>
            <div class="swipre-slider">I'm Slide 1</div>
            <div class="swipre-slider">I'm Slide 1</div>
            <div class="swipre-slider">I'm Slide 1</div>
            <div class="swipre-slider">I'm Slide 1</div> -->
            <swiper-slide ref="btnClass" class="current btnClass">动漫</swiper-slide>
            <swiper-slide ref="btnClass" class="btnClass">星空</swiper-slide>
            <swiper-slide ref="btnClass" class="btnClass">风景</swiper-slide>
            <swiper-slide ref="btnClass" class="btnClass">幽静</swiper-slide>
            <swiper-slide ref="btnClass" class="btnClass">娱乐</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
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
                let i = swiper.clickedIndex;    
                for(let j=0;j< this.$refs.mySwiper.$children.length; j++){
                     this.$refs.mySwiper.$children[j].$el.classList.remove('current');
                }
                this.$refs.mySwiper.$children[i].$el.classList.add('current');
            }        
		}    
       // more Swiper configs and callbacks...
       // ...
     }
   }
 },components: {
 swiper,
 swiperSlide
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
//    console.log('this is current swiper instance object', this.swiper)
//    this.swiper.slideTo(3, 1000, false)
 },
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
}
</style>
