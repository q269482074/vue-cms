<template>
    <div class="comments">
        <h2>发表评论</h2>
        <hr>
        <textarea placeholder="请输入要bb的内容(最多120个字)" maxlength="120" v-model="content"></textarea>
        <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="item in comments" :key="item.id">
                <div class="cmt-title">
                    第{{item.id}}楼&nbsp;&nbsp;用户 : {{item.username}}&nbsp;&nbsp;发表时间 : {{item.add_time}}
                </div>
                <div class="cmt-content">
                    {{item.content}}
                </div>
            </div>
        </div>
        <!-- <mt-button type="danger" class="loading" size="large" plain @click="getpage">加载更多</mt-button> -->
    </div>
</template>

<script>
export default {
    name : 'Comments',
    data() {
        return {
            comments : [],
            page : this.pageNum,
            id : 0,
            status : true,
            content : ''
        }
    },
    mounted() {
        this.axios.get('/index/api/getcomment?page=1').then((res)=>{
            if(res.data.status == 0){
                this.comments = res.data.comments;
            }
        });
    },
    props : {
        pageNum: {}
    },
    methods: {
        postComments(){
            //对数据进行整理
            let postData = this.qs.stringify({
                    content: this.content,
                    username : '匿名用户'
                });

            this.axios({
                method: 'post',
                url: '/index/api/setcomment',
                data: postData
            }).then((res)=>{
                let cmt = {
                    username : res.data.comments.username,
                    add_time : res.data.comments.add_time,
                    content : res.data.comments.content
                }
                //把评论加入到第一条
                this.comments.unshift(cmt);
                //清空评论
                this.content = '';
            });
        }
    },
    watch: {
        pageNum(newVal){
            this.page = newVal;
            setTimeout(() => {
                this.axios.get('/index/api/getcomment?page=' + this.page).then((res)=>{
                    if(res.data.status == 0){
                        this.comments = this.comments.concat(res.data.comments);
                        if(res.data.comments == '')
                        {
                            this.$emit("func",this.status);
                        }
                    }
                });
            }, 1400);
        }
    },
}
</script>

<style lang="scss">
.comments{

    h2{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            .cmt-title{
                background-color: rgba(233, 227, 227, 0.993);
                font-size: 13px;
                padding: 5px 0;
            }
            .cmt-content{
                font-size: 13px;
                text-indent: 2em;
                padding: 5px 0;
                line-height: 31px;
            }
        }
    }
}
</style>
