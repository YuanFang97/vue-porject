<template>
  <div class="search">
    <van-row>
      <van-col span="5">
        <router-link to="/home"
          ><img
            class="img"
            src="../../images/db4828be9abfbb1ef95e8b9e7028aa30.png"
        /></router-link>
      </van-col>
      <van-col span="18">
        <van-search
          placeholder="请输入搜索关键词"
          shape="round"
          input-align="center"
        />
      </van-col>
    </van-row>
    <van-tabs>
      <van-tab
        v-for="(item, idx) in navlist"
        :title="item.title"
        :key="idx"
        @click="onClick"
      >
      </van-tab>
      5
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Search, Row, Col, Tab, Tabs } from "vant";

Vue.use(Search)
  .use(Row)
  .use(Col)
  .use(Tab)
  .use(Tabs);
export default {
  data() {
    return {
      navlist: [
        {
          title: "首页",
          to: "/home"
        },
        {
          title: "新品",
          to: "/home"
        },
        {
          title: "居家",
          to: "/home"
        },
        {
          title: "餐厨",
          to: "/home"
        },
        {
          title: "服装",
          to: "/home"
        },
        {
          title: "美护",
          to: "/home"
        },
        {
          title: "出行",
          to: "/home"
        },
        {
          title: "杂货",
          to: "/home"
        },
        {
          title: "系列",
          to: "/home"
        }
      ]
    };
  },
  methods: {
    onClick(name, title) {
        console.log(5);
        
      console.log(this.$toast);
      this.$toast(title);
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  height: 38px;
  .nav_mine {
    display: flex;
    overflow-y: hidden;
    justify-content: center;
  }
  .nav_mine .nav_item {
    height: 30px;
    margin-right: 22px;
    white-space: nowrap;
  }
  .img {
    height: 32px;
    text-align: center;
    margin: 10px;
  }
}
</style>