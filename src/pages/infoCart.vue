<template>
  <div class="main__inner-wrapper">
    <div class="g-bodyArea g-inner">
      <div class="g-main">
        <div class="g-layout-cart">
          <div class="g-layout_lead">
            <div class="g-sm-full g-breadcrumb">
              <div class="swiper-container">
                <ol class="swiper-wrapper">
                  <li class="swiper-slide">
                    <a href="/ec/"><span itemprop="name">ホーム</span></a>
                  </li>
                  <span class="material-symbols-outlined"> chevron_right </span>
                  <li class="swiper-slide">
                    <span itemprop="name"> カート</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="g-layout_head">
            <h1>カート</h1>
          </div>
          <div class="g-layout_body">
            <ul class="g-itemList" v-for="userInfo1 in userInfo">
              <li class="g-itemList_item g-media g-media-lg p-cartItem">
                <p class="g-media_head">
                  <a class="g-hover" href="/ec/product/7508281/"
                    ><img
                      class="g-fw g-rc"
                      :src="userInfo1.photo"
                      alt="枕カバー(パレット3GY)"
                  /></a>
                </p>
                <div class="g-media_body g-units-sm">
                  <p class="g-media_h">
                    <a href="/ec/product/7508281/">{{ userInfo1.product }}</a>
                  </p>
                  <p class="g-font-sm">
                    商品コード　{{ userInfo1.goodsNumber }}
                  </p>
                  <ul class="g-font-sm">
                    <li>カラー：{{ userInfo1.color }}</li>
                    <li>サイズ：{{ userInfo1.size }}</li>
                    <li></li>
                  </ul>
                  <p class="g-price">
                    {{ userInfo1.price }}<span>円 （税込）</span>
                  </p>
                  <div class="g-butterfly g-font-sm">
                    <p>{{ userInfo1.delivery }}</p>
                  </div>
                </div>
                <div class="g-media_foot">
                  <div class="g-hr-sm g-hr-dark g-only-sm"></div>
                  <div class="p-cartItem_controls">
                    <form
                      id="uniAddLaterListEntryForm0"
                      name="uniAddLaterListEntryForm0"
                      action="/ec/cart/add/laterListEntry"
                      method="post"
                    >
                      <input
                        id="pk"
                        name="pk"
                        value="{{ userInfo1.price }}"
                        type="hidden"
                      />
                      <div>
                        <input
                          type="hidden"
                          name="CSRFToken"
                          value="0fa7f376-d5ac-4c67-8dfb-9e989f2836c9"
                        />
                      </div>
                    </form>
                    <form
                      id="uniDeleteCartEntryForm0"
                      name="uniDeleteCartEntryForm0"
                      action="/ec/cart/delete/cartEntry"
                      method="post"
                    >
                      <input
                        id="pk"
                        name="pk"
                        value="12606018682924"
                        type="hidden"
                      />
                      <div>
                        <input
                          type="hidden"
                          name="CSRFToken"
                          value="0fa7f376-d5ac-4c67-8dfb-9e989f2836c9"
                        />
                      </div>
                    </form>
                    <div class="p-cartItem_pcs">
                      <form
                        id="uniUpdateQuantityForm0"
                        name="uniUpdateQuantityForm0"
                        action="/ec/cart/update/quantity"
                        method="post"
                      >
                        <input
                          class="g-input g-input-sm g-fw"
                          type="text"
                          name="quantity"
                          @change="updateAmount($event, userInfo1.id)"
                          v-model="userInfo1.amount"
                          aria-label="個数"
                          aria-describedby="p-cartItem_pcs0_alert"
                          data-validation-rules='[{"action":"hankaku"},{"rule":"number"}]'
                          maxlength="3"
                        />
                        <div
                          class="g-formGrid_error-alone"
                          id="p-cartItem_pcs0_alert"
                          role="alert"
                        ></div>
                        <div>
                          <input
                            type="hidden"
                            name="CSRFToken"
                            value="0fa7f376-d5ac-4c67-8dfb-9e989f2836c9"
                          />
                        </div>
                      </form>
                    </div>
                    <p
                      class="p-cartItem_btn"
                      @click="afterCartInfo(userInfo1.id)"
                    >
                      <a
                        class="g-btn g-btn-sm g-btn-em g-fw g-sm-font-md"
                        href="javascript:chgItem('uniAddLaterListEntryForm','0',false)"
                        data-once=""
                        ><span>あとで買う</span></a
                      >
                    </p>
                    <p
                      class="p-cartItem_del"
                      @click="deleteInfo(userInfo1.id)"
                      style="cursor: pointer"
                    >
                      <a class="g-link g-link-gray"
                        ><i class="g-i g-i-close" aria-hidden="true"
                          ><span class="material-symbols-outlined">
                            close
                          </span></i
                        ><span>削除</span></a
                      >
                    </p>
                    <div class="p-cartItem_sum">
                      <p class="g-price">
                        <span>個別送料</span>0<span>円</span>
                      </p>
                      <p class="g-price g-lg-price-lg">
                        <span>小計</span>{{ userInfo1.amount * userInfo1.price
                        }}<span>円 （税込）</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-cartItem_addon g-sm-units-sm g-lg-units-lg">
                  <ul class="g-flow-xs g-item_label">
                    <li class="g-label-brand">店舗受取可能商品</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <go-pay></go-pay>

          <div class="g-layout_foot">
            <div class="g-hr g-only-lg"></div>
            <section class="g-lg-block">
              <h2 class="g-h-2">「あとで買う」に入っている商品</h2>
              <ul
                class="g-itemList"
                v-for="afterCart1 in afterCart"
                :key="afterCart.id"
              >
                <li class="g-itemList_item g-media g-media-lg p-cartItem">
                  <p class="g-media_head">
                    <a class="g-hover" href="/ec/product/7508281/"
                      ><img
                        class="g-fw g-rc"
                        :src="afterCart1.photo"
                        alt="枕カバー(パレット3GY)"
                    /></a>
                  </p>
                  <div class="g-media_body g-units-sm">
                    <p class="g-media_h">
                      <a href="/ec/product/7508281/">{{
                        afterCart1.product
                      }}</a>
                    </p>
                    <p class="g-font-sm">
                      商品コード　{{ afterCart1.goodsNumber }}
                    </p>
                    <ul class="g-font-sm">
                      <li>カラー：{{ afterCart1.color }}</li>
                      <li>サイズ：{{ afterCart1.size }}</li>
                      <li></li>
                    </ul>
                    <p class="g-price">
                      {{ afterCart1.price }}<span>円 （税込）</span>
                    </p>
                    <div class="g-butterfly g-font-sm">
                      <p>{{ afterCart1.delivery }}</p>
                    </div>
                  </div>
                  <div class="g-media_foot">
                    <div class="g-hr-sm g-hr-dark g-only-sm"></div>
                    <div class="p-cartItem_controls">
                      <form
                        id="uniAddLaterListEntryForm0"
                        name="uniAddLaterListEntryForm0"
                        action="/ec/cart/add/laterListEntry"
                        method="post"
                      >
                        <input
                          id="pk"
                          name="pk"
                          value="{{ afterCart1.price }}"
                          type="hidden"
                        />
                        <div>
                          <input
                            type="hidden"
                            name="CSRFToken"
                            value="0fa7f376-d5ac-4c67-8dfb-9e989f2836c9"
                          />
                        </div>
                      </form>
                      <form
                        id="uniDeleteCartEntryForm0"
                        name="uniDeleteCartEntryForm0"
                        action="/ec/cart/delete/cartEntry"
                        method="post"
                      >
                        <input
                          id="pk"
                          name="pk"
                          value="12606018682924"
                          type="hidden"
                        />
                        <div>
                          <input
                            type="hidden"
                            name="CSRFToken"
                            value="0fa7f376-d5ac-4c67-8dfb-9e989f2836c9"
                          />
                        </div>
                      </form>
                      <div class="p-cartItem_pcs"></div>
                      <p class="p-cartItem_btn" @click="toCart(afterCart1.id)">
                        <a
                          class="g-btn g-btn-sm g-btn-em g-fw g-sm-font-md"
                          href="javascript:chgItem('uniAddLaterListEntryForm','0',false)"
                          data-once=""
                          ><span>カートに戻す</span></a
                        >
                      </p>
                      <p
                        class="p-cartItem_del"
                        @click="deleteAfterInfo(afterCart1.id)"
                        style="cursor: pointer"
                      >
                        <a class="g-link g-link-gray"
                          ><i class="g-i g-i-close" aria-hidden="true"
                            ><span class="material-symbols-outlined">
                              close
                            </span></i
                          ><span>削除</span></a
                        >
                      </p>
                    </div>
                  </div>
                  <div class="p-cartItem_addon g-sm-units-sm g-lg-units-lg">
                    <ul class="g-flow-xs g-item_label">
                      <li class="g-label-brand">店舗受取可能商品</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import goPay from "../components/cart/goPay.vue";
import { computed, onMounted } from "vue";
import { useStore } from "../store/index";
// import { defineComponent } from "vue";

export default {
  components: {
    goPay,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("setUseCart");
      store.dispatch("setAfterCart");
    });
    let userInfo = computed(() => store.getters.getUseCart);
    let afterCart = computed(() => store.getters.getAfterCart);
    console.log("123userInfo", userInfo);
    //更新amount数据
    function updateAmount($event, id) {
      console.log("onchang事件取值", $event.target.value, id);
      let target = $event.target.value;
      store.dispatch("upDataUseCart", { id, target });
      store.dispatch("setUseCart");
    }
    //删除数据
    function deleteInfo(id) {
      console.log("user!!!Info", userInfo);
      store.dispatch("deleteUseCart", id);
      store.dispatch("setUseCart");
    }
    //删除之后获取
    function deleteAfterInfo(id) {
      store.dispatch("deleteAfter", id);
      store.dispatch("setAfterCart");
    }

    function afterCartInfo(id) {
      store.dispatch("afterCart", id);
    }
    //再入购物车
    function toCart(id) {
      store.dispatch("toCart", id);
    }
    return {
      userInfo,
      deleteInfo,
      updateAmount,
      afterCart,
      afterCartInfo,
      deleteAfterInfo,
      toCart,
    };
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
@media (min-width: 721px) {
  .g-hr,
  .g-lg-hr {
    margin: 40px 0;
  }
  .g-hr,
  .g-hr-0,
  .g-hr-xs,
  .g-hr-sm,
  .g-lg-hr,
  .g-lg-hr-0,
  .g-lg-hr-xs,
  .g-lg-hr-sm {
    border: 0 solid #f7f7f7;
    border-bottom-width: 1px;
  }
  .g-hr + .g-block,
  .g-hr + .g-lg-block {
    margin-top: -15px;
  }
  .g-h-1,
  .g-lg-h-1,
  .g-h-2,
  .g-lg-h-2,
  .g-h-3,
  .g-lg-h-3,
  .g-h-4,
  .g-lg-h-4,
  .g-h-5,
  .g-lg-h-5,
  .g-h-6,
  .g-lg-h-6 {
    font-weight: bold;
  }
  .g-h-2,
  .g-lg-h-2 {
    font-size: 2.4rem;
    margin-bottom: calc(30px - 0.6rem);
  }
  .g-layout-cart .g-layout_foot {
    grid-row: 4;

    grid-column: 1;
  }
  .g-flow,
  .g-lg-flow,
  .g-flow-0,
  .g-lg-flow-0,
  .g-flow-xs,
  .g-lg-flow-xs,
  .g-flow-sm,
  .g-lg-flow-sm,
  .g-flow-lg,
  .g-lg-flow-lg,
  .g-flow-xl,
  .g-lg-flow-xl {
    display: flex;
    flex-wrap: wrap;
  }
  .g-flow-xs,
  .g-lg-flow-xs {
    margin-bottom: -5px;
    margin-left: -5px;
  }
  .p-cartItem_addon {
    grid-row: 2;
    grid-column: 2/4;
    margin-top: 10px;
  }
  .g-price span,
  .g-lg-price span {
    font-weight: normal;
    margin-right: 0.2em;
    margin-left: 0.2em;
    font-feature-settings: "palt";
  }
  .p-cartItem_sum span {
    font-size: 0.7rem;
  }
  .g-price-lg,
  .g-lg-price-lg {
    font-size: 2.6rem;
  }
  .g-price,
  .g-lg-price {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
    color: #000;
  }
  .g-price,
  .g-lg-price {
    font-size: 2rem;
  }
  .g-browser-helvetica .g-price,
  .g-browser-helvetica .g-lg-price {
    letter-spacing: 0.03em;
  }
  .p-cartItem_sum {
    width: 205px;
    margin: 6px 0 0 10px;

    grid-row: 1/4;

    grid-column: 2;
  }
  .g-link-gray .g-i,
  .g-link-gray .g-s,
  .g-lg-link-gray .g-i,
  .g-lg-link-gray .g-s {
    font-size: 1rem;
    margin-top: -0.2em;
    color: #b3b3b3;
  }
  .g-link .g-i:first-child,
  .g-link .g-s:first-child,
  .g-lg-link .g-i:first-child,
  .g-lg-link .g-s:first-child,
  .g-link-u-kiyaku .g-i:first-child {
    margin-right: 0.35em;
  }
  .g-link,
  .g-lg-link {
    display: inline-flex;
    align-items: center;
  }
  .p-cartItem_del {
    margin-top: 10px;
    grid-row: 4;
    grid-column: 1;
  }
  .g-btn > span,
  .g-lg-btn > span {
    display: flex;
    padding: 5px 18px 5px 14px;
    transform: translateX(5px);
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .g-btn-sm > span,
  .g-lg-btn-sm > span {
    min-height: 34px;
  }
  .g-btn,
  .g-lg-btn {
    font-weight: normal;
    display: inline-flex;
    padding: 0;
    transition: background-color 0.2s;
    vertical-align: middle;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    /* background-color: #fff; */
    appearance: none;
  }
  .g-btn-em,
  .g-lg-btn-em {
    color: #009e96;
  }
  .g-btn-sm,
  .g-lg-btn-sm {
    font-size: 0.8rem;
    line-height: 1.42857;
  }
  .g-fw,
  .g-lg-fw {
    width: 100% !important;
  }
  .p-cartItem_btn {
    margin-top: 10px;
    grid-row: 3;
    grid-column: 1;
  }
  .g-input-sm {
    padding: 8px 11px 7px;
  }
  .g-fw,
  .g-lg-fw {
    width: 100% !important;
  }
  .p-cartItem_pcs {
    grid-row: 1;
    grid-column: 1;
    max-width: 92px;
  }
  .p-cartItem_controls {
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto;
  }
  .g-hr,
  .g-hr-0,
  .g-hr-xs,
  .g-hr-sm,
  .g-lg-hr,
  .g-lg-hr-0,
  .g-lg-hr-xs,
  .g-lg-hr-sm {
    border: 0 solid #f7f7f7;
    border-bottom-width: 1px;
  }
  .g-hr-sm,
  .g-lg-hr-sm {
    margin: 20px 0;
  }
  .g-hr-dark,
  .g-lg-hr-dark {
    border-color: #dbdbdb;
  }
  .g-only-sm {
    display: none !important;
  }
  .g-media .g-media_foot,
  .g-lg-media .g-media_foot {
    display: block;
    grid-row: 1;
    grid-column: 3;
  }
  .p-cartItem .g-media_foot {
    margin-left: 20px;
  }
  .g-butterfly,
  .g-lg-butterfly {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .g-price span,
  .g-lg-price span {
    font-weight: normal;
    margin-right: 0.2em;
    margin-left: 0.2em;
    font-feature-settings: "palt";
  }
  .g-price span,
  .g-lg-price span {
    font-size: 1.2rem;
  }
  .g-price,
  .g-lg-price {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-weight: bold;
    color: #000;
  }
  .g-browser-helvetica .g-price,
  .g-browser-helvetica .g-lg-price {
    letter-spacing: 0.03em;
  }
  .g-price,
  .g-lg-price {
    font-size: 2rem;
  }
  .g-font-sm,
  .g-lg-font-sm {
    font-size: 1.2rem !important;
    line-height: 1.5 !important;
  }
  .g-units-sm > *:nth-child(n + 2):not(.g-units_ignore),
  .g-lg-units-sm > *:nth-child(n + 2):not(.g-units_ignore) {
    margin-top: 10px;
  }
  .g-media .g-media_h,
  .g-lg-media .g-media_h {
    font-size: 1.6rem;
    line-height: 1.5;
  }
  .g-media .g-media_body,
  .g-lg-media .g-media_body {
    grid-row: 1;
    grid-column: 2;
    display: block;
  }
  .g-media .g-media_head,
  .g-lg-media .g-media_head {
    grid-row: 1;
    grid-column: 1;
    display: block;
  }
  .g-media-lg .g-media_head,
  .g-lg-media-lg .g-media_head {
    margin-right: 12.5%;
  }
  .p-cartItem {
    grid-template-rows: auto auto;
  }
  .g-media,
  .g-lg-media {
    display: grid;
  }
  .g-media-lg,
  .g-lg-media-lg {
    grid-template-columns: minmax(160px, 13.33333%) 1fr auto;
  }

  .g-layout-cart .g-layout_body {
    grid-row: 3;
    grid-column: 1;
  }
  .g-layout_head {
    margin-bottom: 35px;
  }
  .g-layout-cart .g-layout_head {
    grid-row: 2;
    grid-column: 1/3;
  }
  .g-breadcrumb {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-top: 10px;
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
  .g-layout_lead {
    margin-bottom: calc(40px - 0.75rem);
  }
  .g-layout-cart .g-layout_lead {
    grid-row: 1;
    grid-column: 1/3;
  }
  .g-layout-cart,
  .g-layout-purchase {
    grid-template-rows: auto auto auto auto;

    grid-template-columns: 1fr 400px;
  }
}

@media (min-width: 721px) and (max-width: 949px), (max-width: 369px) {
  .g-browser-helvetica .g-price,
  .g-browser-helvetica .g-lg-price {
    letter-spacing: 0.03em;
  }
  .p-cartItem_sum {
    width: auto;
    margin: 0;
    grid-row: 1/2;
    grid-column: 1;
  }

  .p-cartItem_pcs {
    max-width: 92px;
    margin-top: 10px;
    grid-row: 2;
    grid-column: 1;
  }

  .p-cartItem_controls {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: auto;
  }

  .p-cartItem .g-media_h {
    font-size: 1.2rem;
    line-height: 1.42857;
  }
  .p-cartItem {
    grid-template-columns: minmax(100px, 13.33333%) 1fr auto;
  }
}

@media (min-width: 721px) and (max-width: 949px) {
  .g-layout-purchase,
  .g-layout-cart {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr 300px;
  }
}

@media (max-width: 720px) {
  .g-h-1,
  .g-sm-h-1,
  .g-h-2,
  .g-sm-h-2,
  .g-h-3,
  .g-sm-h-3,
  .g-h-4,
  .g-sm-h-4,
  .g-h-5,
  .g-sm-h-5,
  .g-h-6,
  .g-sm-h-6 {
    font-weight: bold;
  }
  .g-h-2,
  .g-sm-h-2 {
    font-size: 1.8rem;
    margin-bottom: calc(20px - 0.45rem);
  }
  .g-hr,
  .g-sm-hr {
    margin: 30px 0;
  }
  .g-hr,
  .g-hr-0,
  .g-hr-xs,
  .g-hr-sm,
  .g-sm-hr,
  .g-sm-hr-0,
  .g-sm-hr-xs,
  .g-sm-hr-sm {
    border: 0 solid #f7f7f7;
    border-bottom-width: 1px;
  }
  .g-only-lg {
    display: none !important;
  }
  .g-layout-cart .g-layout_foot {
    grid-row: 5;

    grid-column: 1;
  }
  .g-itemList .g-itemList_item:nth-child(n + 2),
  .g-sm-itemList .g-itemList_item:nth-child(n + 2) {
    margin-top: 30px;
    padding-top: 30px;
  }
  .g-flow,
  .g-sm-flow,
  .g-flow-0,
  .g-sm-flow-0,
  .g-flow-xs,
  .g-sm-flow-xs,
  .g-flow-sm,
  .g-sm-flow-sm,
  .g-flow-lg,
  .g-sm-flow-lg,
  .g-flow-xl,
  .g-sm-flow-xl {
    display: flex;
    flex-wrap: wrap;
  }
  .g-flow-xs,
  .g-sm-flow-xs {
    margin-bottom: -1%;
    margin-left: -1%;
  }

  .p-cartItem_addon {
    grid-row: 3;

    grid-column: 2;
    margin-top: 10px;
  }
  .g-price span,
  .g-sm-price span {
    font-size: 1.1rem;
    font-weight: normal;
    margin-right: 0.2em;
    margin-left: 0.2em;
    font-feature-settings: "palt";
  }
  .p-cartItem_del {
    grid-row: 2;

    grid-column: 2;
  }
  .g-price,
  .g-sm-price {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: #000;
  }
  .g-browser-helvetica .g-price,
  .g-browser-helvetica .g-sm-price {
    letter-spacing: 0.03em;
  }
  .p-cartItem_del,
  .p-cartItem_sum {
    margin-left: 15px;
  }
  .g-link-gray .g-i,
  .g-link-gray .g-s,
  .g-sm-link-gray .g-i,
  .g-sm-link-gray .g-s {
    font-size: 1rem;
    margin-top: -0.2em;
    color: #b3b3b3;
  }
  .g-link .g-i:first-child,
  .g-link .g-s:first-child,
  .g-sm-link .g-i:first-child,
  .g-sm-link .g-s:first-child {
    margin-right: 0.35em;
  }
  .g-link,
  .g-sm-link {
    display: inline-flex;
    align-items: center;
  }
  .p-cartItem_del,
  .p-cartItem_sum {
    margin-left: 15px;
  }
  .g-btn > span,
  .g-sm-btn > span {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
  }
  .g-btn-sm > span,
  .g-sm-btn-sm > span {
    min-height: 38px;
  }
  .g-btn > span:only-child,
  .g-sm-btn > span:only-child {
    padding: 5px 10px;
    transform: none;
  }
  .g-btn,
  .g-sm-btn {
    font-weight: normal;
    display: inline-flex;
    padding: 0;
    transition: background-color 0.2s;
    vertical-align: middle;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    /* background-color: #fff; */
    appearance: none;
  }
  .g-btn-em,
  .g-sm-btn-em {
    color: #009e96;
  }
  .g-font-md,
  .g-sm-font-md {
    font-size: 0.8rem !important;
    line-height: 1.5 !important;
  }
  .g-fw,
  .g-sm-fw {
    width: 100% !important;
  }
  .p-cartItem_btn {
    grid-column: 1;
  }
  .p-cartItem_btn,
  .p-cartItem_del {
    margin-top: 10px;
  }
  .g-fw,
  .g-sm-fw {
    width: 100% !important;
  }
  select,
  input[type="text"],
  input[type="password"],
  textarea {
    font-size: 1.6rem;
  }
  .p-cartItem_pcs {
    max-width: 92px;
  }
  .p-cartItem_controls {
    align-items: center;
    justify-content: flex-start;
  }
  .g-hr,
  .g-hr-0,
  .g-hr-xs,
  .g-hr-sm,
  .g-sm-hr,
  .g-sm-hr-0,
  .g-sm-hr-xs,
  .g-sm-hr-sm {
    border: 0 solid #f7f7f7;
    border-bottom-width: 1px;
  }
  .g-hr-sm,
  .g-sm-hr-sm {
    margin: 15px 0;
  }
  .g-hr-dark,
  .g-sm-hr-dark {
    border-color: #dbdbdb;
  }
  .g-media .g-media_foot,
  .g-sm-media .g-media_foot {
    display: block;
  }
  .p-cartItem .g-media_foot {
    grid-row: 2;
    grid-column: 2;
    margin-left: 0;
  }
  .g-butterfly,
  .g-sm-butterfly {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .g-price span,
  .g-sm-price span {
    font-size: 0.8rem;
    font-weight: normal;
    margin-right: 0.2em;
    margin-left: 0.2em;
    font-feature-settings: "palt";
  }
  .g-price,
  .g-sm-price {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: #000;
  }
  .g-browser-helvetica .g-price,
  .g-browser-helvetica .g-sm-price {
    letter-spacing: 0.03em;
  }
  .g-font-sm,
  .g-sm-font-sm {
    font-size: 1.2rem !important;
    line-height: 1.58333 !important;
  }
  .g-units-sm > *:nth-child(n + 2):not(.g-units_ignore),
  .g-sm-units-sm > *:nth-child(n + 2):not(.g-units_ignore) {
    margin-top: 10px;
  }
  .g-media .g-media_h,
  .g-sm-media .g-media_h {
    font-size: 1.1rem;
    line-height: 1.5;
  }
  .g-media .g-media_body,
  .g-sm-media .g-media_body {
    display: block;
  }
  .p-cartItem .g-media_body {
    grid-row: 1;
    grid-column: 2;
  }
  .g-fw,
  .g-sm-fw {
    width: 100% !important;
  }
  .g-rc,
  .g-sm-rc {
    overflow: hidden;
    border-radius: 4px;
  }
  .g-hover img,
  .g-hover .g-hover_img,
  .g-sm-hover img,
  .g-sm-hover .g-hover_img {
    transition: opacity 0.2s;
    backface-visibility: hidden;
  }
  .g-fw,
  .g-lg-fw {
    width: 100% !important;
  }
  .g-rc,
  .g-lg-rc {
    overflow: hidden;
    border-radius: 4px;
  }

  .g-media .g-media_head,
  .g-sm-media .g-media_head {
    display: block;
  }
  .g-media-lg .g-media_head,
  .g-sm-media-lg .g-media_head {
    margin-right: 16.66667%;
  }
  .p-cartItem .g-media_head {
    grid-row: 1/4;
    grid-column: 1;
  }
  .g-media-lg,
  .g-sm-media-lg {
    grid-template-columns: minmax(96px, 27.82609%) 1fr auto;
  }
  .p-cartItem {
    grid-template-rows: auto auto auto;
  }
  .g-layout-cart .g-layout_body {
    grid-row: 3;
    grid-column: 1;
    margin-bottom: 40px;
  }
  .g-layout-cart .g-layout_head {
    grid-row: 2;
    grid-column: 1;
  }
  .g-breadcrumb .swiper-wrapper {
    padding: 7px 0;
    white-space: nowrap;
    flex-wrap: nowrap;
  }
  .g-breadcrumb .swiper-container:not(.swiper-container-horizontal) {
    margin-left: 15px;
  }
  .g-breadcrumb {
    background-color: #f7f7f7;
  }
  .g-full,
  .g-sm-full {
    position: relative;
    right: 50%;
    left: 50%;
  }
  .g-full,
  .g-sm-full {
    width: calc(100vw - 15px);
    margin-right: calc(-50vw + 7.5px);
    margin-left: calc(-50vw + 7.5px);
  }
  .g-layout-cart .g-layout_lead {
    grid-row: 1;
    grid-column: 1;
  }
  .g-inner,
  .g-sm-inner {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  .g-layout-cart,
  .g-layout-purchase {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 100%;
  }
  .g-media,
  .g-sm-media {
    display: grid;
  }
}
.g-label-brand,
.g-label-price,
.g-label-maker,
.g-label-required {
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1;
  display: inline-block;
  padding: 3px 5px;
  vertical-align: middle;
  white-space: nowrap;
  /* background-color: #fff; */
}
.g-label-brand {
  color: #009e96;
  border: 1px solid #009e96;
}
.p-cartItem_sum {
  white-space: nowrap;
}

.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-family: "icon";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;
  speak: none;
  -webkit-font-smoothing: antialiased;
}

.g-input {
  min-width: 0;
  padding: 11px 14px;
  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  -webkit-appearance: none;

  appearance: none;
}
.g-input-sm {
  padding: 7px 11px;
}
.p-cartItem_pcs .g-input {
  text-align: right;
}
input,
textarea,
select,
optgroup,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
.p-cartItem_pcs {
  grid-row: 2;
  grid-column: 1;
}
.p-cartItem_controls {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
}
.g-bodyArea {
  flex-grow: 1;
  flex-shrink: 0;
}
.g-layout-sidebar,
.g-layout-detail,
.g-layout-category,
.g-layout-cart,
.g-layout-purchase,
.g-layout-easyorder {
  display: grid;
}
.g-layout_lead {
  margin-bottom: calc(30px - 0.6rem);
}
.g-breadcrumb {
  font-size: 1.2rem;
  line-height: 1.58333;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.g-breadcrumb .swiper-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0, 0, 0);
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  box-sizing: content-box;
}
.g-breadcrumb .swiper-slide {
  width: auto;
}
.swiper-slide {
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform, -webkit-transform;
}
.g-breadcrumb a {
  color: #009e96;
}
a {
  text-decoration: none;
}
.swiper-slide {
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform, -webkit-transform;
}
.g-layout_head {
  margin-bottom: 25px;
}
h1 {
  font-size: 2.4rem;
}
p,
form,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
dd,
input,
textarea,
select,
button {
  margin: 0;
}
ul,
ol {
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
</style>
