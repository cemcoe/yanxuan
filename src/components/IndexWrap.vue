<template>
  <div class="title_div">
    <!-- 两端对齐 -->
    <van-row type="flex" justify="space-between" style="padding:0 .2rem;">
      <van-col span="5">
        <img class="logo" src="~@/assets/logo-img.png" alt />
      </van-col>
      <van-col @click="searchBtnFn" span="15" class="search_div">
        <van-icon name="search" size="0.5rem" />
        <span>搜索商品，共32822款好物</span>
      </van-col>
      <van-col span="3">
        <van-button class="loginBtn" type="primary" size="mini">登录</van-button>
      </van-col>
    </van-row>

    <van-tabs v-model="active" swipeable class="tabBtnWrap">
      <van-tab v-for="item in tabBtnArr" :title="item" :key="item"></van-tab>
    </van-tabs>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipe_imgArr">
        <img :src="item" alt />
      </van-swipe-item>
    </van-swipe>

    <div class="indexServicePolicy">
      <ul>
         <li><i style="background-image:url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"></i>网易自营品牌</li>
        <li><i style="background-image:url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"></i>30天无忧退货</li>
        <li><i style="background-image:url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"></i>48小时快速退款</li>
      </ul>
    </div>
  </div>
</template>

<script>
import "@/assets/resetvant.css";
import axios from "axios";

export default {
  name: "IndexWrap",
  data() {
    return {
      active: "",
      tabBtnArr: [],
      swipe_imgArr: []
    };
  },
  created() {
    axios
      .get("http://localhost:3344/get_tabBtn_list")
      .then(_d => (this.tabBtnArr = _d.data));
    // 轮播图
    axios
      .get("http://localhost:3344/get_swipe_img")
      .then(_d => (this.swipe_imgArr = _d.data));
  },
  methods: {
    searchBtnFn() {
      console.log("ddd");
      this.$router.push("/searchpage");
    }
  }
};
</script>

<style scoped>
.title_div {
  padding: 0.21333rem 0 0.4rem 0;
}
.logo {
  width: 1.84rem;
  height: 0.53333rem;
  display: inline-block;
  margin-right: 0.26667rem;
  margin-top: 0.1rem;
}
.loginBtn {
  width: 0.98667rem;
  height: 0.53333rem;
  line-height: 0.53333rem;
  text-align: center;
  color: #dd1a21;
  border: 1px solid #dd1a21;
  border-radius: 0.10667rem;
  margin-left: 0.21333rem;
  font-size: 0.32rem;
  background-color: #fff;
  margin-top: 0.1rem;
}
.search_div {
  background-color: #ededed;
  border-radius: 0.10667rem;
  height: 0.74667rem;
  font-size: 0.3733rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabBtnWrap {
  font-size: 0.4rem;
  padding: 0 0.2rem;
}

.my-swipe .van-swipe-item {
  height: 4rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.indexServicePolicy{
  width: 100%;
}
.indexServicePolicy ul{
  height: .96rem;
  padding: 0 .4rem;
  display: flex;
  align-items: center;
}
.indexServicePolicy ul li{
  flex: 1;
  font-size: .32rem;
  color: #333;
  margin-left: .10667rem;
  line-height: .42667rem;
  display: inline-block;
  vertical-align: middle;
}
.indexServicePolicy ul li i{
  width: .42667rem;
  height: .42667rem;
  display: inline-block;
  vertical-align: middle;
  font-size: .32rem;
  color: #333;
  margin-left: .10667rem;
  line-height: .42667rem;
  display: inline-block;
  vertical-align: middle;
  background-size: 100% 100%;
}


</style>