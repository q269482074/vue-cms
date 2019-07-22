<template>
    <div id="imgInfoContriner">
        <h2>图片详情</h2>
        <p class="time_click">
            <span>发表时间 : {{potoInfo.add_time}}</span>
            <span>点击 : {{potoInfo.click}}次</span>
        </p>
        
        <div class="hr"></div>

        <!-- 缩略图区域 -->

        <!-- 图片内容介绍 -->   
        <div v-html="potoInfo.content" class="content">

        </div>
        <!-- 评论 -->
    </div>
</template>

<script>

export default {
    name : 'ImgInfo',
    data() {
        return {
            id : this.$route.params.imgId,
            potoInfo : [],
            status : false,
        }
    },
    mounted() {
        this.axios.get('/index/api/getImgInfo?imgId='+this.id).then((res)=>{
            if(res.data.status == 0){
                this.potoInfo = res.data.info;
            }
        });
    },
    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
 *{
    margin: 0;
    padding: 0;  
}
#imgInfoContriner{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background: #ffffff;
    z-index: 30;
    padding: 0 5px;
    h2{
        color: aqua;
        text-align: center;
        font-size: 22px;
        margin: 8px 0;
    }
    .hr{
        border: 2px solid #ccc;
        margin: 5px 0;
    }
    .time_click{
        display: flex;
        justify-content: space-between;
    }
    .content{
        line-height: 30px;
    }
}
</style>
