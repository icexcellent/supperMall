<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="orange" defaultColor="#333">
        <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt />
        <img slot="item-active-icon" src="../../assets/img/tabbar/home_se.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/sort" activeColor="orange" defaultColor="#333">
        <img slot="item-icon" src="../../assets/img/tabbar/sort.svg" alt />
        <img slot="item-active-icon" src="../../assets/img/tabbar/sort_se.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="orange" defaultColor="#333">
        <img slot="item-icon" src="../../assets/img/tabbar/shopping.svg" alt />
        <img slot="item-active-icon" src="../../assets/img/tabbar/shopping_se.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="orange" defaultColor="#333">
        <img slot="item-icon" src="../../assets/img/tabbar/my.svg" alt />
        <img slot="item-active-icon" src="../../assets/img/tabbar/my_se.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "TabBarView",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>