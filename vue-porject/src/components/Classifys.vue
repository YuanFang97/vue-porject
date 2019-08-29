<template>
  <div>
    <van-swipe :autoplay="2000" indicator-color="white" class="swipe" touchable>
      <van-swipe-item
        ><img
          src="http://s1.hgcang.com/bsimg/ec/public/images/6b/13/6b13fe91df1be087bdcff2f52ce99579.jpg?x-oss-process=style/high"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="http://s2.hgcang.com/bsimg/ec/public/images/b9/93/b993931520c90ea420dd6e4a6235e194.jpg?x-oss-process=style/high"
          alt=""
      /></van-swipe-item>
    </van-swipe>
    <van-row class="iconsize">
      <van-col span="8">
        <van-icon
          color="red"
          size="14px"
          name="flower-o"
        />名创优品自营</van-col
      >
      <van-col span="8">
        <van-icon
          color="red"
          size="14px"
          name="flower-o"
        />30天无忧退货</van-col
      >
      <van-col span="8">
        <van-icon
          color="red"
          size="14px"
          name="flower-o"
        />2个工作日退款</van-col
      >
    </van-row>
    <div class="box"></div>
    <div class="brand">
      <p>品牌甄选</p>
      <van-grid :border="false" :column-num="2">
        <van-grid-item>
          1
        </van-grid-item>
        <van-grid-item>
          2
        </van-grid-item>
        <van-grid-item>
          3
        </van-grid-item>
        <van-grid-item>
          4
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Row, Col, Icon, Grid, GridItem } from "vant";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Row)
  .use(Col)
  .use(Icon)
  .use(Grid)
  .use(GridItem);
export default {
  props: ["classify"]
};
</script>

<style lang="scss" scoped>
.swipe img {
  height: 210px;
}
.iconsize {
  font-size: 12px;
  text-align: center;
  height: 30px;
  line-height: 25px;
  div {
    position: relative;
    i {
      border: 1px solid red;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      line-height: 20px;
    }
  }
}
.box {
  height: 10px;
  background-color: rgb(240, 239, 239);
}
.brand {
  border: 1px solid red;
  p {
    margin: 0;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #333;
  }
}
</style>