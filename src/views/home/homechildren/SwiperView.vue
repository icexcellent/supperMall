<template>
  <swiper class="swiper-wrap">
    <swiper-item v-for="(item,index) in swiperList" :key="index">
      <a :href="item.link">
        <img :src="item.imgSrc" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "SwriperView",
  data() {
    return {
      swiperList: [
        {
          link: "http://www.baidu.com",
          imgSrc:
            "https://photo.mac69.com/2020/05/21/JPG-200521_75/ATJh4cUsj1_small.jpg"
        },
        {
          link: "https://photo.mac69.com",
          imgSrc:
            "https://photo.mac69.com/2020/05/21/JPG-200521_20/5H2ivElLf1_small.jpg"
        },
        {
          link: "#",
          imgSrc:
            "https://photo.mac69.com/2020/05/21/JPG-200521_20/WynSJ3GlVH_small.jpg"
        },
        {
          link: "#",
          imgSrc:
            "https://photo.mac69.com/2020/05/21/JPG-200521_20/WynSJ3GlVH_small.jpg"
        }
      ]
    };
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style>
.swiper-wrap {
  height: 220px;
}
</style>