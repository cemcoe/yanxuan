<template>
  <div class="titleDiv">
    <!-- 两端对齐 -->
    <van-row type="flex" justify="space-between">
      <van-col span="20">
        <van-field
          class="searchDiv"
          v-model="input_v"
          @input="inputValFn"
          placeholder="好货内部价"
          @keyup.enter="submitFn"
        >
          <template v-slot:left-icon>
            <van-icon name="search" class="searchIconLeft" />
          </template>

          <!-- 清空搜索框 -->
          <template #button>
            <van-icon v-show="isCloseShow" @click="clear_search_inputFn" name="close" />
          </template>
        </van-field>
      </van-col>
      <van-col span="3">
        <van-button class="cancelBtn" type="primary" size="mini">取消</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchPage",
  data() {
    return {
      input_v: "",
      isCloseShow: false
    };
  },
  created() {
    console.log("create");
  },
  watch: {
    // input_v() {
    //   this.isCloseShow = true
    //   console.log('watch')
    // }
  },
  methods: {
    inputValFn() {
      // console.log(this.input_v)
      this.isCloseShow = true;
    },
    // 清空搜索框
    clear_search_inputFn() {
      this.input_v = "";
      this.isCloseShow = false;
      // console.log('clear')
    },
    // enter 事件响应
    submitFn() {
      console.log(this.input_v);
      axios.get("http://45.32.105.216:3344/search", {
        params: {
          search_key: this.input_v
        }
      }).then(_d => {
        console.log(_d.data);
      });
    }
  }
};
</script>

<style scoped>
.titleDiv {
  padding: 0.2rem 0.4rem;
}
.cancelBtn {
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
.searchDiv {
  padding-top: 0;
  padding-left: 0.26667rem;
  padding-bottom: 0;
  border: 0;
  background-color: #f4f4f4;
  height: 0.74667rem;
  line-height: 0.74667rem;
  border-radius: 4px;
  font-size: 0.37333rem;
}
.searchIconLeft {
  font-size: 0.5rem;
}
</style>