<template>
  <div class="main__inner-wrapper">
    <div class="g-bodyArea g-inner">
      <div class="g-main">
        <div class="g-layout_lead"></div>
        <div class="g-layout-narrow">
          <div class="g-layout_head">
            <h1>変更項目選択</h1>
            <p class="g-lead">
              メールアドレス、またはメールアドレス以外のご登録情報から変更したい項目を、以下から選択してください。
            </p>
          </div>
          <div class="g-layout_body g-layout_body-narrow">
            <section class="g-block">
              <div class="g-foot-v g-mt-0">
                <p class="g-align-tc">
                  <router-link
                    class="g-btn g-btn-cv g-btn-w-md"
                    to="/userInfo/changeMaillAdress1"
                  >
                    <span>メールアドレスの変更</span>
                  </router-link>
                </p>
              </div>
            </section>
            <section class="g-block">
              <div class="g-foot-v g-mt-0">
                <p class="g-align-tc">
                  <router-link
                    class="g-btn g-btn-cv g-btn-w-md"
                    to="/changeMaillAdress2"
                    ><span>メールアドレス以外の変更</span></router-link
                  >
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  name: "userInfo2",
  components: {},
  setup() {
    return {};
  },
});
</script>
<style scoped>
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
.g-layout_lead:empty {
  height: 40px;
}

.g-layout_lead {
  margin-bottom: calc(40px - 0.75rem);
}
.g-layout-full,
.g-layout-narrow {
  display: grid;

  grid-template-rows: auto auto auto auto;

  grid-template-columns: 100%;
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
h1 + .g-lead,
h1 + .g-lg-lead {
  margin-top: 13.33333px;
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
.g-layout-narrow .g-layout_body-narrow {
  width: 100%;
  max-width: 620px;
  margin: auto;
}
.g-layout-full .g-layout_body,
.g-layout-narrow .g-layout_body {
  grid-row: 3;

  grid-column: 1;
}
.g-block,
.g-lg-block {
  margin-top: 40px;
}
.g-mt-0,
.g-lg-mt-0 {
  margin-top: 0px !important;
}
.g-foot-v,
.g-lg-foot-v {
  display: flex;
  flex-direction: column;
}
.g-align-tc,
.g-lg-align-tc {
  text-align: center !important;
}
.g-btn-w-md,
.g-lg-btn-w-md {
  width: auto;
  min-width: 320px;
}

.g-btn,
.g-lg-btn {
  font-size: 1.6rem;
  line-height: 1.5;
}
.g-btn-cv,
.g-lg-btn-cv {
  border-color: #eb6157;
  background-color: #eb6157;
}
.g-btn-brand,
.g-btn-cv,
.g-btn-cancel,
.g-lg-btn-brand,
.g-lg-btn-cv,
.g-lg-btn-cancel {
  color: #fff;
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

  appearance: none;
}
.g-btn > span:only-child,
.g-lg-btn > span:only-child {
  padding: 5px 10px;
  transform: none;
}

.g-btn > span,
.g-lg-btn > span {
  min-height: 48px;
}

.g-btn > span,
.g-lg-btn > span {
  display: flex;

  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.g-block,
.g-lg-block {
  margin-top: 40px;
}
.g-btn,
.g-lg-btn {
  font-size: 1.2rem;
  line-height: 1.5;
}
</style>
