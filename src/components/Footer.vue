<template>
  <div class="footerDiv">
    <van-tabbar v-model="active" active-color="#f00" @change="onChange">
      <van-tabbar-item icon="search" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/cartlist">分类</van-tabbar-item>
      <van-tabbar-item icon="search">值得买</van-tabbar-item>
      <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="login">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import "@/assets/resetvant.css";
export default {
  name: "Footer",
  data() {
    return {
      active: 0
      // 页面跳转，active重置为0
    };
  },
  methods: {
    onChange(index) {}
  }
};
</script>

<style scoped>
</style>