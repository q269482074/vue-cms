<template>
     <footer id="footer">
        <ul>
            <router-link tag="li" to="/home">
                <i class="mui-icon mui-icon-home-filled"></i>
                <p>首页</p>
            </router-link>
            <router-link class="" tag="li" to="/member">
                <i class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></i>
                <p>会员</p>
            </router-link>
            <router-link tag="li" to="/shopCart">
                <i class="mui-icon mui-icon-extra mui-icon-extra-cart"></i>
                <p>购物车</p>
            </router-link>
			<router-link tag="li" to="/search">
                <i class="mui-icon mui-icon-search"></i>
                <p>搜索</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name : 'Bottom'
}
</script>

<style scpoed>
#footer{ width:100%; height:50px; background: white; border-top:2px #ebe8e3 solid; position: fixed; left: 0; bottom:0;}
#footer ul{ display: flex; text-align: center; height:50px; align-items:center;}
#footer ul li{ flex:1; height:40px;}
#footer ul li.active{ color: #f03d37;}
#footer ul li.router-link-active{ color:#26a2ff;}
#footer ul i{ font-size: 20px;}
#footer ul p{ font-size: 12px; line-height: 18px;}
</style>
