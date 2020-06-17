<template>
  <div style="position: relative; padding-left: 2.16rem">
    <div class="sidebarClass">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item 
        v-for="(item, index) in sidebar_arr" 
        :key="index"  
        :title="item.txt" />
        
      </van-sidebar>
    </div>

    <div class="sidebarGoods">
      <div class="goodsItem" 
      v-for="(item, index) in goodsListObj"
      :key="index">
        <img :src="item.goods_img" alt="">
        <p>{{item.goods_name}}</p>
        <b>{{item.goods_price}}</b>

      </div>

    </div>

    <m-footer />
  </div>
</template>

<script>
import mFooter from "@/components/Footer.vue";

import axios from 'axios'

export default {
  name: "CartList",
  components: {
    mFooter
  },
  data() {
    return {
      activeKey: 0,
      sidebar_arr: [
        {
          txt: "推荐专区"
        },
        {
          txt: "爆品专区"
        },
        {
          txt: "新品专区"
        },
        // {
        //   txt: "居家生活"
        // },
        // {
        //   txt: "服饰鞋包"
        // },
        // {
        //   txt: "美食酒水"
        // },
        // {
        //   txt: "个护清洁"
        // },
        // {
        //   txt: "母婴亲子"
        // },
        // {
        //   txt: "运动旅行"
        // },
        // {
        //   txt: "数码家电"
        // },
        // {
        //   txt: "严选全球"
        // }
      ],
      goodsListObj: null
    };
  },
  created() {
    axios.get('http://localhost:3344/cate_goods_list_0')
      .then(_d => this.goodsListObj = _d.data)
  },
  methods: {
    onChange( _inx ) {
      // console.log( _inx )
      axios.get('http://localhost:3344/cate_goods_list_' + _inx)
      .then(_d => this.goodsListObj = _d.data)
    },
  }
};
</script>

<style scoped>
.sidebarClass {
  position: fixed;
  left: 0;

}
.goodsItem {
  float: left;
  width: 44%;
  margin: 0rem 0.2rem 0.44rem 0.2rem;
  font-size: .37333rem;
  overflow: hidden;
}
.goodsItem img {
  height: 4.6rem;
}
</style>