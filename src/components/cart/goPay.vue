<template>
  <div class="g-layout_sidebar">
    <div data-attr='{"lg":{"data-sticky":true}}' data-sticky="false">
      <section class="g-pane g-pane-gray g-units-lg g-lg-sticky">
        <div class="p-payment">
          <dl class="p-payment_total">
            <dt class="p-paymentAmountLabel">お支払金額</dt>
            <dd class="g-price g-price-lg">
              {{ userPay.countAddFreight }}<span>円</span>
            </dd>
          </dl>
          <div class="p-payment_body g-units-lg">
            <dl class="p-payment_itemized p-shorten-dl" id="p-payment_itemized">
              <dt></dt>
              <dd style="margin-top: 3px"></dd>

              <dt class="p-payment_sum p-paymentSumShorten">商品金額合計</dt>
              <dd>{{ userPay.count }}<span>円</span></dd>
              <dt>送料</dt>
              <dd>{{ userPay.freight }}<span>円</span></dd>
            </dl>
            <ul class="g-list g-list-note">
              <li>
                送料および手数料はまだ確定しておりません。一部地域へのご配達は、別途料金がかかる場合がございます。(沖縄本島以外の離島の中継料は、別途ご案内いたします)
              </li>
              <li>未ログインまたは非会員の方はポイントが付与されません。</li>
            </ul>
          </div>
        </div>
        <form
          id="checkoutFlowModeForm"
          action="/ec/cart/checkout"
          method="POST"
        >
          <ul class="g-list">
            <li>
              <label class="g-checkable">
                <input
                  type="radio"
                  name="checkoutFlowMode"
                  value="DELIVERY"
                /><span
                  ><i
                    class="g-s g-s-radio-on g-checkable_on"
                    aria-hidden="true"
                  ></i
                  ><i
                    class="g-s g-s-radio-off g-checkable_off"
                    aria-hidden="true"
                  ></i
                  ><span class="g-checkable_label"
                    >ご指定の場所に配送する</span
                  ></span
                >
              </label>
            </li>
            <li class="g-mt-10">
              <label class="g-checkable">
                <input
                  type="radio"
                  name="checkoutFlowMode"
                  value="PICKUP"
                /><span
                  ><i
                    class="g-s g-s-radio-on g-checkable_on"
                    aria-hidden="true"
                  ></i
                  ><i
                    class="g-s g-s-radio-off g-checkable_off"
                    aria-hidden="true"
                  ></i
                  ><span class="g-checkable_label"
                    ><span class="g-align-vm g-mr-10"
                      >店舗/配送センターで受け取る</span
                    ><span class="g-label-price">送料無料</span></span
                  ></span
                >
              </label>
            </li>
          </ul>
          <div>
            <input
              type="hidden"
              name="CSRFToken"
              value="f75dac93-f199-4c75-8520-d579f28f2dc4"
            />
          </div>
        </form>
        <div>
          <p class="g-price p-calcShipping">
            <b class="g-color-strong">{{ userPay.freeFreight }}</b>
          </p>
          <ul class="g-list g-list-note g-unit-xs">
            <li>大型家具除く</li>
          </ul>
        </div>

        <div class="g-foot-v">
          <p>
            <button class="g-btn g-btn-cv g-fw">
              <span>レジへ進む</span>
            </button>
          </p>
          <p>
            <a class="g-btn g-fw" href="/ec/"
              ><span>ショッピングを続ける</span
              ><i class="g-i g-i-arrow-r" aria-hidden="true"></i
            ></a>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";

export default {
  setup() {
    // onMounted(() => {
    //   store.dispatch("setUseCart");
    // });
    const store = useStore();
    const userPay = computed(() => store.getters.getUserPay);
    console.log("userPay", userPay.count);
    return {
      userPay,
    };
  },
};
</script>
<style>
.p-calcShipping {
  color: #eb6157;
}
@media (min-width: 721px) and (max-width: 949px) {
  .g-foot-v > *:nth-child(n + 2),
  .g-sm-foot-v > *:nth-child(n + 2) {
    margin-top: 10px;
  }
  .g-btn,
  .g-sm-btn {
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: normal;
    display: inline-flex;
    padding: 0;
    transition: background-color 0.2s;
    vertical-align: middle;
    border: 1px solid #dbdbdb;
    border-radius: 4px;

    appearance: none;
  }
  .g-btn > span,
  .g-sm-btn > span {
    display: flex;
    min-height: 46px;

    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
  }
  .g-btn,
  .g-sm-btn {
    font-size: 1.6rem;
    line-height: 1.5;

    display: inline-flex;
    padding: 0;
    transition: background-color 0.2s;
    vertical-align: middle;
    border: 1px solid #dbdbdb;
    border-radius: 4px;

    appearance: none;
  }
  .g-btn-brand,
  .g-btn-cv,
  .g-btn-cancel,
  .g-sm-btn-brand,
  .g-sm-btn-cv,
  .g-sm-btn-cancel {
    color: #fff;
  }
  .g-btn-cv,
  .g-sm-btn-cv {
    border-color: #eb6157;
  }
  .g-btn-cv,
  .g-sm-btn-cv {
    font-weight: bold;
  }
  .g-fw,
  .g-sm-fw {
    width: 100% !important;
  }
  .g-foot-v,
  .g-sm-foot-v {
    display: flex;
    flex-direction: column;
  }
  .g-units-lg > *:nth-child(n + 2):not(.g-units_ignore),
  .g-sm-units-lg > *:nth-child(n + 2):not(.g-units_ignore) {
    margin-top: 20px;
  }
  .p-calcShipping {
    color: #eb6157 !important;
  }
  .g-color-strong,
  .g-sm-color-strong {
    color: #eb6157 !important;
  }
  .g-list-note,
  .g-sm-list-note {
    font-size: 0.7rem;
    line-height: 1.58333;
    text-indent: -1em;
    color: #808080;
  }

  .g-layout-cart .g-layout_sidebar {
    grid-row: 3/5;

    grid-column: 2;
  }

  .g-layout-cart .g-layout_sidebar,
  .g-layout-purchase .g-layout_sidebar {
    margin-left: 40px;
  }

  .g-pane,
  .g-sm-pane {
    display: block;
  }

  .g-pane-gray,
  .g-sm-pane-gray {
    background-color: #f7f7f7;
  }

  .g-pane,
  .g-lg-pane {
    padding: 30px;
  }
  .g-layout_sidebar[data-sticky="true"],
  .g-layout_sidebar [data-sticky="true"] {
    position: sticky;
    top: 40px;
  }

  .g-layout-purchase .g-layout_sidebar,
  .g-layout-cart .g-layout_sidebar {
    margin-left: 30px;
  }
}

@media (max-width: 720px) {
  .g-foot-v > *:nth-child(n + 2),
  .g-sm-foot-v > *:nth-child(n + 2) {
    margin-top: 10px;
  }
  .g-btn,
  .g-sm-btn {
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: normal;
    display: inline-flex;
    padding: 0;
    transition: background-color 0.2s;
    vertical-align: middle;
    border: 1px solid #dbdbdb;
    border-radius: 4px;

    appearance: none;
  }
  .g-btn > span,
  .g-sm-btn > span {
    display: flex;
    min-height: 46px;

    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
  }
  .g-btn,
  .g-sm-btn {
    font-size: 1.6rem;
    line-height: 1.5;

    display: inline-flex;
    padding: 0;
    transition: background-color 0.2s;
    vertical-align: middle;
    border: 1px solid #dbdbdb;
    border-radius: 4px;

    appearance: none;
  }
  .g-btn-brand,
  .g-btn-cv,
  .g-btn-cancel,
  .g-sm-btn-brand,
  .g-sm-btn-cv,
  .g-sm-btn-cancel {
    color: #fff;
  }
  .g-btn-cv,
  .g-sm-btn-cv {
    border-color: #eb6157;
  }
  .g-btn-cv,
  .g-sm-btn-cv {
    font-weight: bold;
  }
  .g-fw,
  .g-sm-fw {
    width: 100% !important;
  }
  .g-foot-v,
  .g-sm-foot-v {
    display: flex;
    flex-direction: column;
  }
  .g-units-lg > *:nth-child(n + 2):not(.g-units_ignore),
  .g-sm-units-lg > *:nth-child(n + 2):not(.g-units_ignore) {
    margin-top: 20px;
  }
  .p-calcShipping {
    color: #eb6157 !important;
  }
  .g-color-strong,
  .g-sm-color-strong {
    color: #eb6157 !important;
  }
  .g-list-note,
  .g-sm-list-note {
    font-size: 0.7rem;
    line-height: 1.58333;
    text-indent: -1em;
    color: #808080;
  }
  .g-units-lg > *:nth-child(n + 2):not(.g-units_ignore),
  .g-sm-units-lg > *:nth-child(n + 2):not(.g-units_ignore) {
    margin-top: 20px;
  }
  .g-list-note > li,
  .g-sm-list-note > li {
    margin-left: 1em;
  }
  .g-list > li:nth-child(n + 2),
  .g-sm-list > li:nth-child(n + 2) {
    margin-top: 0.5em;
  }
  .g-list-note > li,
  .g-sm-list-note > li {
    margin-left: 1em;
  }
  .g-browser-helvetica .g-price,
  .g-browser-helvetica .g-sm-price {
    letter-spacing: 0.03em;
  }
  .g-layout-cart .g-layout_sidebar {
    grid-row: 4;

    grid-column: 1;
    margin-bottom: 40px;
  }
  .g-pane,
  .g-sm-pane {
    padding: 20px 15px;
  }
  .g-pane-gray,
  .g-sm-pane-gray {
    background-color: #f7f7f7;
  }
  .g-pane,
  .g-sm-pane {
    display: block;
  }
}

.p-calcShipping {
  color: #eb6157;
}
.p-payment_total {
  font-weight: bold;
  color: #eb6157;
}
.p-payment_total dt {
  margin-top: 3px;
}

.p-payment dt {
  float: left;
  clear: left;
  font-feature-settings: "palt";
}
.p-paymentAmountLabel {
  font-size: 1.6rem !important;
}
.p-payment_total dd {
  color: #eb6157;
}
.p-payment dd {
  overflow: hidden;
  text-align: right;
}
.g-price-lg,
.g-sm-price-lg {
  font-size: 2.4rem;
}
.g-price,
.g-sm-price {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
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
.p-payment_itemized dt:nth-of-type(1),
.p-payment_itemized dd:nth-of-type(1) {
  border-top-width: 0;
}
.p-shorten-dl dt,
.p-shorten-dl dd {
  padding: 4px 0px !important;
}
.p-payment_itemized dt,
.p-payment_itemized dd {
  padding: 9px 0 6px 0;
  border-top: 1px solid #dbdbdb;
}
.p-payment dd {
  overflow: hidden;
  text-align: right;
}
.p-payment dt {
  float: left;
  clear: left;
  font-feature-settings: "palt";
}
.p-payment_sum,
.p-payment_sum + dd {
  border-top: 2px solid #b3b3b3 !important;
}
.p-payment_itemized dt,
.p-payment_itemized dd {
  border-top: 1px solid #dbdbdb;
}
.p-shorten-dl dt,
.p-shorten-dl dd {
  padding: 4px 0px !important;
}
</style>
