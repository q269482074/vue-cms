<template>
    <div id="main">
        <Header />
            <div id="content">
                <!-- 轮播图 -->
                <mt-swipe :auto="4000">
                    <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                        <img :src="item.img" alt="">
                    </mt-swipe-item>
                </mt-swipe>
                <!-- 6宫格 -->
                <ul class="mui-table-view mui-grid-view mui-grid-9 ul">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <img src="../../../public/images/menu1.png" alt="">
                            <div class="mui-media-body">新闻资讯</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <img src="../../../public/images/menu2.png" alt="">
                            <div class="mui-media-body">图片分享</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <img src="../../../public/images/menu3.png" alt="">
                            <div class="mui-media-body">商品购买</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <img src="../../../public/images/menu4.png" alt="">
                            <div class="mui-media-body">留言反馈</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <img src="../../../public/images/menu5.png" alt="">
                            <div class="mui-media-body">视频专区</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <img src="../../../public/images/menu6.png" alt="">
                            <div class="mui-media-body">联系我们</div>
                        </a>
                    </li>
                </ul> 
                <div>123123</div>
            </div>
        <Bottom />
    </div>
</template>

<script>

import Header from '@/components/Header';
import Bottom from '@/components/Bottom';
import {Toast} from 'mint-ui';


export default {
    name : 'Home',
    data(){
        return {
            lunbotuList : []
        }
    },
    components : {
        Header,
        Bottom
    },
    mounted() {
        this.axios.get('/index/api/getlunbo').then((res)=>{
            console.log(res);
            if(res.data.status === 0){
                this.lunbotuList = res.data.imgList;
            }else{
                Toast('加载轮播图失败!');
            }
        });
    },
}
</script>



<style scpoed>
.mint-swipe{
    height: 200px;
}
.mint-swipe .mint-swipe-item img{
        width: 100%;
        height: 100%;
 }
 .mint-swipe-indicators .mint-swipe-indicator{
     opacity: 0.5;
 }

.mui-grid-view.mui-grid-9{
    background-color: #ffffff;
    border: none;
}
.mui-grid-view.mui-grid-9 img{
    width:60px;
    height: 60px;
    margin: auto;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell .mui-media-body{
    font-size: 13px;
}


</style>
