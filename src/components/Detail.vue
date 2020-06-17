<template>
  <div>
    <!-- 导航栏 -->
    <div class="navBarClass">
      <van-nav-bar title="标题">
        <template #left>
          <van-icon name="wap-home-o" size="78" @click="gotoHome" />
        </template>

        <template #right>
          <van-icon name="shopping-cart-o" size="78" />
        </template>
      </van-nav-bar>
    </div>

    <div class="goods_detail">
      <img :src="goods_img" alt />
      <p>{{goods_name}}</p>
      <b>{{goods_price}}</b>
    </div>

    <div class="goodsActionClass">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="立即购买" @click="onClickButton" />
        <van-goods-action-button type="danger" text="加入购物车" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      goods_name: "",
      goods_img: "",
      goods_price: 0,
    };
  },
  created() {
    let _n = this.$route.params.goods_info;
    this.goods_name = _n.goods_name;
    this.goods_img = _n.goods_img;
    this.goods_price = _n.goods_price;
  },
  methods: {
    onClickIcon() {
      console.log("点击图标");
    },
    onClickButton() {
      console.log("点击按钮");
    },
    gotoHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>