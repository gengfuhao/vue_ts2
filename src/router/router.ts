import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import GoodsDetail from "../pages/GoodsDetail.vue";
import infoCart from "../pages/infoCart.vue";
import myAccount from "../pages/myAccount.vue";
import order from "../pages/myPage/order.vue";
import likeGoods from "../pages/myPage/likeGoods.vue";
import shopLike from "../pages/myPage/shopLike.vue";
import userInfo from "../pages/myPage/userInfo.vue";
import address from "../pages/myPage/address.vue";
import userPay from "../pages/myPage/userPay.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
      alias: "/home",
    },
    {
      path: "/goods/detail/:goodsId",
      component: GoodsDetail,
      props: true,
    },
    {
      path: "/info/cart",
      component: infoCart,
      props: true,
    },
    {
      path: "/myAccount",
      component: myAccount,
      props: true,
    },
    {
      path: "/order",
      component: order,
      props: true,
      meta: {
        isShow: true,
        title: "注文履歴",
      },
    },
    {
      path: "/shopLike",
      component: shopLike,
      props: true,
      meta: {
        isShow: true,
        title: "お気に入り店舗",
      },
    },
    {
      path: "/likeGoods",
      component: likeGoods,
      props: true,
      meta: {
        isShow: true,
        title: "お気に入り商品",
      },
    },
    {
      path: "/userInfo",
      component: userInfo,
      props: true,
      meta: {
        isShow: true,
        title: "お客様情報の確認・変更",
      },
    },
    {
      path: "/address",
      component: address,
      props: true,
      meta: {
        isShow: true,
        title: "配送先住所の変更・登録",
      },
    },
    {
      path: "/userPay",
      component: userPay,
      props: true,
      meta: {
        isShow: true,
        title: "クレジットカードの変更・登録",
      },
    },
  ],
});
