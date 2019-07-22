<template>
    <div id="newsInfostContriner" class="slider-enter-active">
        <Loading v-if="isLoading" />
        <div v-else>
            <!-- <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange"
            :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore"
            > -->
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore"
            >
            <div class="header">
                <h2 class="title">{{newsInfo.title}}</h2>
                <p class="postTime">发表时间 : {{newsInfo.add_time}} <span>点击 : {{newsInfo.click}}次</span></p>
            </div>
            <div class="content" v-html="newsInfo.info">
                
            </div>
            <Comments :pageNum="pageNum" @func="show" />
            </mt-loadmore>
            <div v-if="allLoaded" style="text-align: center;">加载完毕。。。。</div>
        </div>
    </div>
</template>

<script>

import Comments from '@/components/Comments';

export default {
    name : 'NewsInfo',
    data() {
        return {
            newsInfo : [],
            examplename: 'Loadmore',
            pageNum: 1,//页码
            InitialLoading: true,//初始加载
            // list: 0,//数据
            allLoaded: false,//数据是否加载完毕
            bottomStatus: '',//底部上拉加载状态
            wrapperHeight: 0,//容器高度
            topStatus: '',//顶部下拉加载状态
            isLoading : true,
        }
    },
    created() {
        //获取上个路由传来的值
        this.newsId = this.$route.params.newsId;
        this.axios.get('/index/api/getnewsinfo?newsId=' + this.newsId).then((res)=>{
            if(res.data.status == 0){
                this.isLoading = false;
                this.newsInfo = res.data.newsList;
            }
        });
    },
    components : {
        Comments
    },
    methods: {
        //上拉加载
        handleBottomChange(status) {
                this.bottomStatus = status;
            },
        loadBottom() {
            this.handleBottomChange("loading");//上拉时 改变状态码
            this.pageNum += 1;
            setTimeout(() => {
                this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
                this.$refs.loadmore.onBottomLoaded()
            }, 1500);
        },
        //下拉刷新
        // handleTopChange(status) {
        //     this.topStatus = status;
        // },
        // loadTop() {//下拉刷新 模拟数据请求这里为了方便使用一次性定时器
        //     this.handleTopChange("loading");//下拉时 改变状态码
        //     this.allLoaded = false;//下拉刷新时解除上拉加载的禁用
        //     setTimeout(() => {
        //         // this.list = 12;//下拉刷新 数据初始化
        //         this.handleTopChange("loadingEnd")//数据加载完毕 修改状态码
        //         this.$refs.loadmore.onTopLoaded();
        //     }, 1500);
        // },
        show(data){
            this.allLoaded = data;
        }
    },
}
</script>

<style lang="scss">
#newsInfostContriner{
    position: absolute; 
    left: 0;
    top: 0; 
    width: 100%;
    min-height: 100%;
    background: #ffffff;
    padding: 0 2px;

    .content{
        color: #000000;
        p{
            color: #000000;
        }
        img{
            width: 100%;
        }
    }

    .header{
         .title{
            color: red;
            font-size: 18px;
            text-align: center;
        }
        .postTime{
            color: rgb(17, 129, 163);
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid rgb(168, 167, 167);
        }
    }
   

}
#newsInfostContriner.slider-enter-active{animation: 0.3s sliderNews}
@keyframes sliderNews {
    0%{transform: translateX(100%)}
    100%{transform: translateX(0%)}
}
</style>
