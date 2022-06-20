<template>
  <div class="main__inner-wrapper">
    <div class="g-bodyArea g-inner">
      <div class="g-main">
        <div class="g-layout-narrow">
          <div class="g-layout_lead">
            <div class="g-sm-full g-breadcrumb">
              <div class="swiper-container">
                <ol
                  class="swiper-wrapper"
                  itemtype="http://schema.org/BreadcrumbList"
                >
                  <router-link to="myAccount">
                    <li
                      class="swiper-slide"
                      itemprop="itemListElement"
                      itemtype="http://schema.org/ListItem"
                    >
                      <span itemprop="name">マイページ</span>

                      <meta itemprop="position" content="2" />
                    </li>
                  </router-link>
                </ol>
              </div>
            </div>
          </div>
          <div class="g-layout_head">
            <div class="g-lg-butterfly g-align-gt">
              <div class="gtm-add-wrap">
                <h1>注文履歴</h1>
                <ul class="g-list g-list-note g-unit-sm">
                  <li class="g-font-lg g-color-alert">
                    リコール該当商品は「注文詳細」画面よりご確認下さい。
                  </li>
                </ul>
              </div>
              <div class="g-sm-unit-lg">
                <p>
                  <a class="g-btn g-btn-sm g-btn-em" href="#"
                    ><span id="ajax">店舗購入履歴を取得する</span></a
                  >
                </p>
                <ul class="g-list g-list-note g-unit-sm">
                  <li>上記ボタンで最新の「店舗」購入履歴を取得できます。</li>
                  <li>約15分程度で履歴が反映されます。※メンテナンス時を除く</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="g-layout_body">
            <form
              id="myAccountOrdersForm"
              name="myAccountOrdersForm"
              data-validation="data-validation"
              action="/ec/my-account/orders"
              method="get"
              novalidate="true"
            >
              <dl class="p-historyMenu">
                <dt>
                  <label for="p-period">注文時期を選択</label>
                </dt>
                <dd>
                  <div class="g-select g-select-sm">
                    <i class="g-i g-i-dropdown" aria-hidden="true"></i>
                    <select
                      id="orderTime"
                      name="orderTime"
                      onchange="submit(this.form)"
                    >
                      <option value="00" selected="selected">
                        過去半年分の注文
                      </option>
                      <option value="10">2022年分の注文</option>
                      <option value="11">2021年分の注文</option>
                      <option value="12">2020年分の注文</option>
                      <option value="13">2019年分の注文</option>
                      <option value="14">2018年分の注文</option>
                    </select>
                  </div>
                </dd>
                <dt>
                  <label for="p-status">注文状況を選択</label>
                </dt>
                <dd>
                  <div class="g-select g-select-sm">
                    <i class="g-i g-i-dropdown" aria-hidden="true"></i>
                    <select
                      id="orderStatus"
                      name="orderStatus"
                      onchange="submit(this.form)"
                    >
                      <option value="ALL" selected="selected">すべて</option>
                      <option value="ORDERS">受注済</option>
                      <option value="READY">出荷・お渡し準備中</option>
                      <option value="SHIPPED">出荷・配送・お渡し済</option>
                      <option value="CANCELLED">キャンセル済</option>
                    </select>
                  </div>
                </dd>
              </dl>
              <input
                id="cancelOrderCode"
                name="cancelOrderCode"
                type="hidden"
                value=""
              />
            </form>
            <div class="g-block-xs">
              <p>注文履歴がありません。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "order",
  components: {},
  setup() {
    return {};
  },
});
</script>
<style scoped>
* {
  box-sizing: border-box;
}
@media (min-width: 721px) {
  .g-block-xs,
  .g-lg-block-xs {
    margin-top: 30px;
  }
  .p-historyMenu dd + dt {
    margin-left: 40px;
  }
  .p-historyMenu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .g-layout-narrow .g-layout_head,
  .g-layout-narrow .g-layout_body {
    width: 100%;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
  }

  .g-list > li:nth-child(n + 2),
  .g-lg-list > li:nth-child(n + 2) {
    margin-top: 0.5em;
  }

  .g-list-note > li,
  .g-lg-list-note > li {
    margin-left: 1em;
  }
  g-unit-sm,
  .g-lg-unit-sm {
    margin-top: 10px !important;
  }

  .g-list-note,
  .g-lg-list-note {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .g-list-note,
  .g-lg-list-note {
    text-indent: -1em;
    color: #808080;
  }
  .g-btn > span,
  .g-lg-btn > span {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .g-btn > span:only-child,
  .g-lg-btn > span:only-child {
    padding: 5px 10px;
    transform: none;
  }
  .g-btn-sm > span,
  .g-lg-btn-sm > span {
    min-height: 34px;
  }
  .g-btn-em,
  .g-lg-btn-em {
    color: #009e96;
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
    background-color: #fff;
    appearance: none;
  }
  .g-btn-sm,
  .g-lg-btn-sm {
    font-size: 1.4rem;
    line-height: 1.42857;
  }
  .g-list-note > li,
  .g-lg-list-note > li {
    margin-left: 1em;
  }

  .g-font-lg,
  .g-lg-font-lg {
    font-size: 1.6rem !important;
    line-height: 1.5 !important;
  }

  .g-color-alert,
  .g-lg-color-alert {
    color: #eb6157 !important;
  }
  .g-unit-sm,
  .g-lg-unit-sm {
    margin-top: 10px !important;
  }

  .g-list-note,
  .g-lg-list-note {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .g-list-note,
  .g-lg-list-note {
    text-indent: -1em;
    color: #808080;
  }
  h1 {
    font-size: 3rem;
  }
  .g-butterfly,
  .g-lg-butterfly {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .g-align-gt,
  .g-lg-align-gt {
    align-items: start !important;
  }
  .g-layout-narrow .g-layout_head,
  .g-layout-narrow .g-layout_body {
    width: 100%;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
  }
  .g-layout-full .g-layout_head,
  .g-layout-narrow .g-layout_head {
    grid-row: 2;
    grid-column: 1;
  }
  .g-layout_head {
    margin-bottom: 35px;
  }
  .g-breadcrumb {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-top: 10px;
  }
  .g-layout-full .g-layout_lead,
  .g-layout-narrow .g-layout_lead {
    grid-row: 1;

    grid-column: 1;
  }

  .g-layout_lead {
    margin-bottom: calc(40px - 0.75rem);
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
}
body {
  font-size: 1.4rem;
  line-height: 1.42857;
}
.g-bodyArea {
  flex-grow: 1;
  flex-shrink: 0;
}
.g-layout-full,
.g-layout-narrow {
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 100%;
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
  transition-property: transform, -webkit-transform;
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
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.g-layout-full .g-layout_body,
.g-layout-narrow .g-layout_body {
  grid-row: 3;

  grid-column: 1;
}
.p-historyMenu dt {
  font-weight: bold;
  margin-right: 1em;
}
</style>
