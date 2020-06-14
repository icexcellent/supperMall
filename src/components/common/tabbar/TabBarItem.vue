<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"> <slot name="item-icon"></slot></div>
        <div v-else><slot name="item-active-icon"></slot></div>
        <div :style="isActiveColor"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:"TabBarItem",
    data(){
        return{
            
        }
    },
    props:{
        path:String,
        activeColor:{
            type:String,
            default:"red"
        },
        defaultColor:{
            type:String,
            default:"#333"
        }
        },
    computed:{
        isActive(){
            return !this.$route.path.indexOf(this.path)
        },
        isActiveColor(){
            return {color:this.isActive?this.activeColor:this.defaultColor}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>
<style>
.tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
    /*去除图片下面默认的三个像素 */
      vertical-align: middle;
      /**增加两个像素的距离 */
      margin-bottom: 2px;
  }
</style>