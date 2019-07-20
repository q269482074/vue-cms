<template>
    <div id="newsListContriner" class="slider-enter-active">
         <Loading v-if="isLoading" />
        <ul v-else class="mui-table-view">  
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id" @tap="handleToNewsInfo(item.id)">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>发表时间 : {{item.add_time}} <span>点击 : {{item.click}}次</span></p>
                    </div>
                </a>
            </li>
        <router-view name="newsInfo"></router-view>
        </ul>
    </div>
</template>

<script>

export default {
    name : 'NewsList',
    data(){
        return {
            newsList : [],
            isLoading : true
        }
    },
    mounted() {
        this.axios.get('/index/api/getnews').then((res)=>{
            if(res.data.status == 0){
                this.isLoading = false;
                this.newsList = res.data.newsList;
            }
        });
    },
    methods: {
        handleToNewsInfo(newsId){
            this.$router.push('/home/newsList/newsInfo/'+ newsId);
        }
    },
}
</script>

<style scpoed>
#newsListContriner{position: absolute; left: 0; top: 0; z-index: 10; width: 100%; min-height: 100%; background: #ffffff;}
/* #newsListContriner.slider-enter-active{animation: 0.3s sliderHome;}
@keyframes sliderHome {
    0%{transform: translateX(100%)}
    100%{transform: translatex(0%)}
} */

.mui-table-view .mui-table-view-cell .mui-media-body .mui-ellipsis{
    color: #5B9AFA;
    display: flex;
    justify-content: space-between;
}
</style>
