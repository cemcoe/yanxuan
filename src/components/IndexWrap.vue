<template>
  <div class="title_div">
    <!-- 两端对齐 -->
    <van-row type="flex" justify="space-between">
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
  </div>
</template>

<script>
export default {
  name: "IndexWrap",
  data() {
    return {};
  },
  methods: {
    searchBtnFn() {
      console.log('ddd')
      this.$router.push('/searchpage')
    }
  }
};
</script>

<style scoped>
.title_div {
  padding: .21333rem .4rem;
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
  border-radius: .10667rem;
  height: .74667rem;
  font-size: 0.3733rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>