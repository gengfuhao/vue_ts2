<template>
  <div class="main__inner-wrapper">
    <div class="g-bodyArea g-inner">
      <div class="g-main">
        <Form
          ref="formCom"
          id="app"
          class="g-layout-narrow demo-ruleForm"
          :validation-schema="mySchema"
          v-slot="{ errors }"
          autocomplete="off"
        >
          <div class="g-layout_lead"></div>
          <div class="g-layout_head">
            <h1>変更後メールアドレス入力</h1>
            <p class="g-lead">
              変更したいメールアドレスを入力のうえ、送信してください。
            </p>
            <p class="g-lead">
              ご入力いただいたメールアドレス宛にニトリネットから送信される確認メールをご確認ください。
            </p>

            <div
              class="g-error g-error_efo"
              :style="{ display: date.errorIsShow }"
            >
              <p class="g-error_h">
                <b>请修改下列错误:</b>
              </p>
            </div>
          </div>

          <div class="g-layout_body">
            <dl class="g-sm-formGrid-v g-lg-formGrid-h g-block-xs">
              <dt>
                <label for="mail"
                  >メールアドレス<span class="g-label-required"
                    >必須</span
                  ></label
                >
              </dt>
              <dd>
                <Field
                  id="mail"
                  class="g-input g-input-sm g-fw"
                  v-model="date.email"
                  type="email"
                  name="email"
                  placeholder="email"
                  :class="{ error: errors.email }"
                />

                <div
                  class="g-formGrid_error"
                  id="p-mail_alert"
                  v-if="errors.email"
                >
                  <i class="iconfont icon-warning" />{{ errors.email }}
                </div>
              </dd>
              <dt>
                <label for="chEmail"
                  ><span>メールアドレス<small>（確認用）</small></span
                  ><span class="g-label-required">必須</span></label
                >
              </dt>

              <dd>
                <p class="g-formGrid_note">
                  コピー・貼り付けはせずに入力してください。
                </p>

                <Field
                  id="chEmail"
                  class="g-input g-input-sm g-fw"
                  v-model="date.checkEmail"
                  name="checkEmail"
                  type="email"
                  placeholder="checkEmail"
                  autocomplete="off"
                  :class="{ error: errors.checkEmail }"
                />

                <div
                  class="g-formGrid_error"
                  id="p-mail_alert"
                  v-if="errors.checkEmail"
                >
                  <i class="iconfont icon-warning" />{{ errors.checkEmail }}
                </div>
              </dd>
            </dl>

            <section class="g-block">
              <ul class="g-list g-list-note g-unit">
                <li>
                  ご利用キャリアのメールソフトによっては、ニトリネットからのメール（info@mail.nitori-net.jp)が、迷惑メールへ分類されている可能性や、受信拒否設定がされている可能性があります。メールが届かない場合は、以下のページの手順にて迷惑メールフォルダおよび設定をご確認ください。<br />メールが受信できない場合：<a
                    class="g-link-u"
                    href="https://www.nitori.co.jp/customersupport/faq/351/"
                    target="_blank"
                    >https://www.nitori.co.jp/customersupport/faq/351/</a
                  >
                </li>
              </ul>
            </section>
          </div>
          <div class="g-layout_foot">
            <div class="g-sm-foot-v g-lg-foot-h g-foot-lg">
              <div>
                <button
                  @click="submits()"
                  id="formSubmitBtn"
                  class="g-btn g-btn-cv g-btn-w-md"
                  value="Submit"
                  type="submit"
                >
                  <span>送信する</span>
                </button>
              </div>
              <p>
                <router-link class="g-btn g-btn-w-md" to="/userInfo"
                  ><i class="g-i g-i-arrow-l" aria-hidden="true"></i
                  ><span>戻る</span></router-link
                >
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup type="ts">
import { Form, Field } from "vee-validate";
import { reactive,ref } from "vue";
import schema from "../../../utils/validate-schema"

const date = reactive({
email:null,
checkEmail:null,
errorIsShow:'none'
});
const mySchema = {
  email: schema.email,
  checkEmail: schema.checkEmail,
};


const formCom = ref(null)

async function submits(){
formCom.value?.validate().then(item => {

  if (item.valid) {
    console.log('校验通过')
    date.errorIsShow='none'
  } else {
    console.log("校验不通过");
    date.errorIsShow='block'
  }

})


}
</script>

<style scoped>
.g-input[aria-invalid="true"] {
  background-color: #fcf0f1;
}
@media (max-width: 820px) {
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
    background-color: #eb6157;
  }
  .g-btn-w-md,
  .g-sm-btn-w-md {
    width: 100%;
  }
  .g-foot-v,
  .g-sm-foot-v {
    display: flex;
    flex-direction: column;
  }
  .g-foot-lg,
  .g-sm-foot-lg {
    margin-top: 30px;
  }
  .g-unit,
  .g-sm-unit {
    margin-top: 15px !important;
  }
  .g-list-note > li,
  .g-sm-list-note > li {
    margin-left: 1em;
  }
  .g-list-note,
  .g-sm-list-note {
    font-size: 0.5rem;
    line-height: 1.58333;

    color: #808080;
  }
  .g-block,
  .g-sm-block {
    margin-top: 40px;
  }
  .g-formGrid-h .g-formGrid_note,
  .g-formGrid-tr .g-formGrid_note,
  .g-formGrid-v .g-formGrid_note,
  .g-sm-formGrid-h .g-formGrid_note,
  .g-sm-formGrid-tr .g-formGrid_note,
  .g-sm-formGrid-v .g-formGrid_note {
    margin-bottom: 10px;
    color: #808080;
  }
  .g-formGrid-v > dd + dt,
  .g-sm-formGrid-v > dd + dt {
    margin-top: 25px;
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

  .g-sm-formGrid-v .g-label-required {
    margin-left: 10px;
  }
  .g-formGrid-v > dt,
  .g-sm-formGrid-v > dt {
    font-weight: bold;
  }
  .g-formGrid-v > dt,
  .g-sm-formGrid-v > dt {
    margin-bottom: 8px;
  }
  .g-block-xs,
  .g-sm-block-xs {
    margin-top: 30px;
  }
  .g-error {
    padding: 10px;
  }
  .g-layout-full .g-layout_lead,
  .g-layout-narrow .g-layout_lead {
    grid-row: 1;

    grid-column: 1;
  }
  .g-layout_lead:empty {
    height: 20px;
  }
  .g-inner,
  .g-sm-inner {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
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
.g-layout_lead {
  margin-bottom: calc(30px - 0.6rem);
}
.g-layout-full .g-layout_head,
.g-layout-narrow .g-layout_head {
  grid-row: 2;

  grid-column: 1;
}
.g-layout_head {
  margin-bottom: 25px;
}
* {
  box-sizing: border-box;
}
h1 {
  font-size: 1.8rem;
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
.g-error {
  margin-top: 20px;
  border-radius: 5px;
  background-color: #fcf0f1;
}
.g-error_h:last-child {
  margin-bottom: 0;
}
.g-error_h {
  font-weight: bold;

  color: #eb6157;
}
.g-layout-full .g-layout_body,
.g-layout-narrow .g-layout_body {
  grid-row: 3;

  grid-column: 1;
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
  background-color: #fff;
}
.g-input-sm {
  padding: 7px 11px;
}
.g-input {
  min-width: 0;

  text-align: left;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
}
input,
textarea,
select,
optgroup,
button {
  font-family: inherit;

  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
.g-formGrid-h .g-formGrid_error,
.g-formGrid-tr .g-formGrid_error,
.g-formGrid-v .g-formGrid_error,
.g-sm-formGrid-h .g-formGrid_error,
.g-sm-formGrid-tr .g-formGrid_error,
.g-sm-formGrid-v .g-formGrid_error {
  margin-top: 7px;
  color: #eb6157;
}
.g-layout-full .g-layout_foot,
.g-layout-narrow .g-layout_foot {
  grid-row: 4;

  grid-column: 1;
}

@media (min-width: 821px) {
  .g-inner,
  .g-lg-inner {
    width: 100%;
    max-width: 1240px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
  }
  .g-layout-narrow .g-layout_head,
  .g-layout-narrow .g-layout_body {
    width: 100%;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
  }
  .g-layout_head {
    margin-bottom: 35px;
  }
  h1 {
    font-size: 2rem;
  }
  h1 + .g-lead,
  h1 + .g-lg-lead {
    margin-top: 13.33333px;
  }
  .g-layout-narrow .g-layout_head,
  .g-layout-narrow .g-layout_body {
    width: 100%;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
  }
  .g-formGrid-h,
  .g-formGrid-tr,
  .g-lg-formGrid-h,
  .g-lg-formGrid-tr {
    display: flex;
    flex-wrap: wrap;
  }
  .g-block-xs,
  .g-lg-block-xs {
    margin-top: 30px;
  }
  .g-formGrid-h > dt,
  .g-lg-formGrid-h > dt {
    padding-right: 25px;
    padding-left: 20px;
  }

  .g-formGrid-h > dt,
  .g-formGrid-tr > dt,
  .g-lg-formGrid-h > dt,
  .g-lg-formGrid-tr > dt {
    font-weight: bold;
    display: flex;
    width: 34%;
    align-items: center;
  }

  .g-formGrid-h > *,
  .g-lg-formGrid-h > * {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .g-formGrid-h .g-label-required,
  .g-formGrid-tr .g-label-required,
  .g-formGrid-v .g-label-required,
  .g-lg-formGrid-h .g-label-required,
  .g-lg-formGrid-tr .g-label-required,
  .g-lg-formGrid-v .g-label-required {
    margin-left: 10px;
  }
  .g-label-brand,
  .g-label-price,
  .g-label-maker,
  .g-label-required {
    font-weight: normal;
    line-height: 1;
    display: inline-block;
    padding: 3px 5px;
    vertical-align: middle;
    white-space: nowrap;
    background-color: #fff;
  }
  .g-label-brand,
  .g-label-price,
  .g-label-maker,
  .g-label-required {
    font-size: 0.8rem;
  }
  .g-formGrid-h > dd,
  .g-formGrid-tr > dd,
  .g-lg-formGrid-h > dd,
  .g-lg-formGrid-tr > dd {
    width: 66%;
  }
  .g-formGrid-h > *,
  .g-lg-formGrid-h > * {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .g-fw,
  .g-lg-fw {
    width: 100% !important;
  }

  .g-input-sm {
    padding: 8px 11px 7px;
  }
  .g-lg-formGrid-h .g-formGrid_error {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .g-lg-formGrid-h .g-formGrid_error {
    margin-top: 7px;
    color: #eb6157;
  }
  .g-formGrid-h > *:nth-of-type(n + 2),
  .g-lg-formGrid-h > *:nth-of-type(n + 2) {
    border-top: 1px dashed #e6e6e6;
  }
  .g-formGrid-h > dt,
  .g-lg-formGrid-h > dt {
    padding-right: 25px;
    padding-left: 20px;
  }

  .g-formGrid-h > dt,
  .g-formGrid-tr > dt,
  .g-lg-formGrid-h > dt,
  .g-lg-formGrid-tr > dt {
    font-weight: bold;
    display: flex;
    width: 34%;
    align-items: center;
  }
  .g-formGrid-h > dd,
  .g-formGrid-tr > dd,
  .g-lg-formGrid-h > dd,
  .g-lg-formGrid-tr > dd {
    width: 66%;
  }
  .g-lg-formGrid-h .g-formGrid_note {
    font-size: 0.8rem;
    line-height: 1.5;
  }
  .g-lg-formGrid-h .g-formGrid_note {
    margin-bottom: 10px;
    color: #808080;
  }
  .g-block,
  .g-lg-block {
    margin-top: 40px;
  }
  .g-unit,
  .g-lg-unit {
    margin-top: 15px !important;
  }

  .g-list-note,
  .g-lg-list-note {
    line-height: 1.5;
  }
  .g-list-note,
  .g-lg-list-note {
    color: #808080;
  }
  .g-foot-lg,
  .g-lg-foot-lg {
    margin-top: 40px;
  }
  .g-foot-h,
  .g-lg-foot-h {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
  .g-foot-h > *,
  .g-lg-foot-h > * {
    margin-right: 10px;
    margin-left: 10px;
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
}
.g-label-required {
  color: #eb6157;
  border: 1px solid #eb6157;
}
</style>
