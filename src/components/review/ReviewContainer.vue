<template>
  <div class="g-bodyArea g-inner">
    <div class="g-main">
      <div class="g-layout-detail">
        <complex></complex>
        <send-info-cart></send-info-cart>
        <!-- <ReviewQA></ReviewQA>
        <review-total></review-total>
        <review-list></review-list> -->
      </div>
    </div>
  </div>
</template>

<script>
import complex from "./exhibit/complex.vue";
import ReviewList from "./ReviewList.vue";
import ReviewTotal from "./ReviewTotal.vue";
import { useRoute } from "vue-router";
import ReviewQA from "./ReviewQA.vue";
import { defineComponent } from "vue";
import sendInfoCart from "../cart/sendInfoCart.vue";

export default defineComponent({
  // 已启用类型推断
  components: {
    complex,
    ReviewList,
    ReviewTotal,
    ReviewQA,
    sendInfoCart,
  },
  setup() {
    const route = useRoute();
    const goodsId = route.params.goodsId;
    return {
      goodsId,
    };
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}
.g-inner,
.g-lg-inner {
  width: 100%;
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
}
.g-bodyArea {
  flex-grow: 1;
  flex-shrink: 0;
}

.g-layout-detail {
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: 1fr 330px;
}
a {
  text-decoration: none;
  color: #333;
}
.g-layout-sidebar,
.g-layout-detail,
.g-layout-category,
.g-layout-cart,
.g-layout-purchase,
.g-layout-easyorder {
  display: grid;
}
</style>
