<template>
        <mt-header fixed title="vue 练习项目">
            <router-link to="/" slot="left">
                <mt-button icon="back" @click="back"></mt-button>
            </router-link>
        </mt-header>
</template>

<script>
export default {
    name : 'Hedaer',
    methods: {
        back(){
            this.$router.back();
        }
    },
}
</script>

<style>
.mint-header.is-fixed{position: static;}
</style>
