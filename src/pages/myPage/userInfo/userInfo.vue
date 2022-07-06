<template>
  <div class="g-wrapper" id="g-wrapper">
    <main data-currency-iso-code="JPY">
      <div class="yCmsContentSlot">
        <header class="g-header g-header-plain">
          <div class="g-header_outer">
            <div class="g-header_inner">
              <h1 class="g-header_logo">
                <a href="/ec"
                  ><img
                    class="g-fw"
                    src="../../../../public/assets/images/logo.webp"
                    alt="ニトリ"
                /></a>
              </h1>
              <p class="g-header_name">
                <a href="/ec"><span>ニトリ公式通販</span>ニトリネット</a>
              </p>
              <ul class="g-header_buttons" style="flex: 1 1">
                <li>
                  <a href="/ec/support/"
                    ><span class="material-symbols-outlined">
                      support_agent </span
                    >サポート</a
                  >
                </li>
                <li class="g-header_cart">
                  <a href="/ec/cart"
                    ><b>13</b
                    ><span class="material-symbols-outlined">
                      shopping_cart_checkout </span
                    >カート</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
      <a id="skip-to-content"></a>

      <userInfo2 v-show="userInfo2IsShow"></userInfo2>
      <router-view></router-view>
      <div class="g-footArea g-inner">
        <footer class="g-footer g-full">
          <div class="g-footer_inner">
            <div class="g-align-tc g-font-sm">
              <ul class="g-linkList g-align-fc">
                <li>
                  <a href="/ec/userguide/law/">特定商取引法に基づく表記</a>
                </li>
                <li>
                  <a href="/ec/userguide/security/">情報セキュリティ基本方針</a>
                </li>
                <li>
                  <a
                    class="g-link"
                    href="https://www.nitori.co.jp/ir/governance/pip.html"
                    target="_blank"
                    >個人情報保護方針<i
                      class="g-i g-i-blank"
                      aria-label="新しいウィンドウで開きます"
                    ></i
                  ></a>
                </li>
                <li><a href="/ec/userguide/contract/">ご利用規約</a></li>
              </ul>
              <p class="g-mt-5">
                <a
                  class="g-link"
                  href="https://www.nitori.co.jp"
                  target="_blank"
                  >企業サイト<i
                    class="g-i g-i-blank"
                    aria-label="新しいウィンドウで開きます"
                  ></i
                ></a>
              </p>
              <div class="g-footer_copyright">
                <p>
                  当ホームページに掲載されているあらゆる内容の無許可転載・転用を禁止します。
                </p>
                <p>
                  すべての内容は日本の著作権法及び国際条約によって保護を受けています。
                </p>
                <p>Copyright NITORI All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { defineComponent, ref, watch } from "vue";
import userInfo2 from "./userInfo2.vue";
export default defineComponent({
  name: "userInfo",
  components: { userInfo2 },
  setup() {
    const route = useRoute();
    const userInfo2IsShow = ref(true);
    console.log("route", route);

    watch(
      () => route,
      (newValue, oldValue) => {
        console.log(newValue.path, "newValue");
        newValue.path === "/userInfo/changeMaillAdress1"
          ? (userInfo2IsShow.value = false)
          : (userInfo2IsShow.value = true);

        console.log("11123");
      },
      { deep: true, immediate: true }
    );

    return { userInfo2IsShow };
  },
});
</script>
<style scoped>
.g-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
.g-header {
  font-size: 1.4rem;
  line-height: 1.5;
}
.g-header {
  box-shadow: 0 1px 0 0 #e6e6e6;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
.g-header_outer {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.g-header-plain .g-header_inner {
  justify-content: space-between;
}

.g-header_inner {
  flex-wrap: wrap;
}
.g-header_inner {
  display: flex;
  padding: 10px 0;
  align-items: center;
}
.g-header_logo {
  font-size: 1rem;
  width: 58px;
  margin-right: 12px;
}
a {
  text-decoration: none;
  color: #333;
}
.g-fw,
.g-lg-fw {
  width: 100% !important;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
  height: auto;
}
.g-header_name {
  font-weight: bold;
  line-height: 1.4;
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
.g-header_name span {
  font-size: 1.2rem;
  line-height: 1.58333;
  font-weight: normal;
  display: block;
}
.g-header_buttons {
  font-size: 0.8rem;

  justify-content: flex-end;
  display: flex;
  align-items: flex-end;
}
.g-header_buttons a {
  display: inline-block;
  text-align: center;
  color: #808080;
}
.g-headArea .g-header_buttons .g-i,
.g-header_buttons .g-s {
  font-size: 2.1rem;
}
.g-header_buttons .g-i,
.g-header_buttons .g-s {
  display: block;
  margin: 0 auto 4px;
  color: #808080;
}
.g-s-faq-g {
  background-position: -22em -22em;
}
.material-symbols-outlined {
  display: block;
  margin: 0 auto 4px;
  color: #808080;
  background-position: -22em -22em;
  font-size: 2.1rem;
}
.g-header_buttons li:nth-child(n + 2) {
  margin-left: 15px;
}
.g-header_favorite,
.g-header_cart {
  position: relative;
}
.g-header_buttons a {
  display: inline-block;
  text-align: center;
  color: #808080;
}
.g-header_favorite b,
.g-header_cart b {
  font-size: 0.9rem;
  line-height: 1;
  position: absolute;
  top: 3px;
  right: 0;
  left: 4px;
  color: #eb6157;
  text-shadow: 0 0 2px #fff;
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
.g-full,
.g-lg-full {
  width: calc(100vw - 15px);
  margin-right: calc(-50vw + 7.5px);
  margin-left: calc(-50vw + 7.5px);
}

.g-footer {
  font-size: 1.4rem;
  line-height: 1.5;
  margin-top: 40px;
}
.g-footer {
  padding: 15px 0 20px;
  border-top: 4px solid #009e96;
  background-color: #f7f7f7;
}

.g-full,
.g-lg-full {
  position: relative;
  right: 50%;
  left: 50%;
}
.g-footer_inner {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.g-font-sm,
.g-lg-font-sm {
  font-size: 1.2rem !important;
  line-height: 1.5 !important;
}

.g-align-tc,
.g-lg-align-tc {
  text-align: center !important;
}
.g-linkList,
.g-lg-linkList {
  display: inline-flex;
  flex-wrap: wrap;
}

.g-align-fc,
.g-lg-align-fc {
  justify-content: center !important;
}
.g-mt-5,
.g-lg-mt-5 {
  margin-top: 5px !important;
}
.g-link,
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
.g-footer_copyright {
  margin-top: 15px;
  color: #808080;
}
</style>
