<template>
    <div id="newsInfostContriner" class="slider-enter-active">
        <div class="header">
            <h2 class="title">{{newsInfo.title}}</h2>
            <p class="postTime">发表时间 : {{newsInfo.add_time}} <span>点击 : {{newsInfo.click}}次</span></p>
        </div>
        <div class="content" v-html="newsInfo.info">
            
        </div>
        <Comments />
    </div>
</template>

<script>

import Comments from '@/components/Comments';

export default {
    name : 'NewsInfo',
    data() {
        return {
            newsInfo : []
        }
    },
    mounted() {
        console.log(this.newsList);
        
        for(let i=0; i<this.newsList.length; i++){
            if(this.$route.params.newsId == i){
                this.newsInfo = this.newsList[i-1];
            }
        }
    },
    props : ['newsList'],
    components : {
        Comments
    }
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
