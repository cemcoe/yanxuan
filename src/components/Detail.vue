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

    <div class="skuClass">
      <van-sku 
      v-model="show" 
      :sku="sku" 
      :goods="goods" 
      goods-id="goodsId" 
      @buy-clicked="onBuyClicked">

      <template slot="sku-actions-top">
					<van-uploader 
						v-model="fileList"
						:after-read="afterRead"></van-uploader>
				</template>
      </van-sku>
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
      // 图片预览
			fileList:[],
			// 保存上传的图片信息
			uploader_img_arr:[],
      show: false,
      goods: {
        // 默认商品 sku 缩略图
        picture: ""
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://img.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },
      

    };
  },
  created() {
    let _n = this.$route.params.goods_info;
    this.goods_name = _n.goods_name;
    this.goods_img = _n.goods_img;
    this.goods_price = _n.goods_price;
    // sku商品图
    this.goods.picture = _n.goods_img
  },
  methods: {
    onClickIcon() {
      console.log("点击图标");
    },
    onClickButton() {
      // console.log("点击按钮");
      this.show = true;
    },
    gotoHome() {
      this.$router.push("/");
    },
    onBuyClicked(_skuData) {
      console.log(_skuData)
    },
    // 图片上传
		afterRead( _file ) {
			// 此时可以自行将文件上传至服务器
			// console.log( _file );
			this.uploader_img_arr.push( _file );
		},
  }
};
</script>

<style scoped>
</style>