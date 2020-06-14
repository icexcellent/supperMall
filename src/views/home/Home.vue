<template>
    <div>
        <h2>首页</h2>
        账号：<input type="text" v-model="account" @input="changeValue">
        账号：<input type="password" v-model="password" @input="changepwd">
       <input type="submit" value="登录" @click="login">
    </div>
</template>
<script>

    export default{
        name:"Home",
        data(){
            return{
                account:'',
                password:''
            }
        },
    methods:{
        changeValue(){
            console.log(this.account)
        },
        changepwd(){
            console.log(this.account)
        },
        login(){
            if(this.account=='zhangsan'&&this.password=='abc')
            this.$router.push('/profile?name=zhangsan')
        }
    }
       
    }
</script>
<style scoped>

</style>