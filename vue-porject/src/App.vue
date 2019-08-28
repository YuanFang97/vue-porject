<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar
      v-model="active"
      active-color="#D9232E"
      inactive-color="#7F7F7F"
      route
      fixed
      class="tabbar"
    >
      <van-tabbar-item
        :icon="item.icon"
        :to="item.path"
        v-for="item in meun"
        :key="item.name"
        class="botton"
        >{{ item.text }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";

import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

import ElementUI from "element-ui";
Vue.use(ElementUI);
import "element-ui/lib/theme-chalk/index.css";

import NutUI from "@nutui/nutui";
Vue.use(NutUI);
import "@nutui/nutui/dist/nutui.css";

import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  data() {
    return {
      active: 0,
      meun: [
        {
          name: "home",
          text: "首页",
          path: "/home",
          icon: "wap-home"
        },
        {
          name: "special",
          text: "主题",
          path: "/special",
          icon: "medel-o"
        },
        {
          name: "classify",
          text: "分类",
          path: "/classify",
          icon: "qr"
        },
        {
          name: "cart",
          text: "购物车",
          path: "/cart",
          icon: "shopping-cart-o"
        },
        {
          name: "my",
          text: "我的",
          path: "/my",
          icon: "contact"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.tabbar {
  height: 54px;
  .botton {
    font-size: 13px;
    background: #fafafa;
  }
}
</style>
