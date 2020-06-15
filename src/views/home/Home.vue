<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="navbar-center">购物街</div>
    </nav-bar>
    <swriper-view></swriper-view>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/Navbar";
import SwriperView from "./homechildren/SwiperView";
import { getHomeMultidata } from "network/homerequest";
export default {
  name: "Home",
  components: {
    NavBar,
    SwriperView
  },
  data() {
    return {};
  },
  // 生命周期函数，组件在创建时执行
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
    });
  },
  methods: {}
};
</script>
<style scoped>
.home-nav-bar {
  background-color: red;
  color: #fff;
}
</style>