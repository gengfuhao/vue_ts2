<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header" height="80px">
        <el-row :gutter="20">
          <el-col :span="4"
            ><img
              class="logo"
              src="../../../../public/assets/images/logo.webp"
              alt="img"
          /></el-col>
          <el-col :span="16"><h2>表单</h2> </el-col>
          <el-col :span="4"
            ><el-button class="btn-text" type="success"
              >other</el-button
            ></el-col
          >
        </el-row>
      </el-header>

      <el-main>
        <el-form
          :rules="rules"
          :model="getForm"
          label-width="120px"
          ref="ruleFormRef"
        >
          <el-form-item label="メールマガジン">
            <el-checkbox
              v-model="getForm.Notice"
              label="配信を希望する"
              name="type"
            />
          </el-form-item>
          <!--名前-->
          <el-form-item
            label="氏名"
            prop="firstName"
            :rules="[{ required: true, message: 'name is required' }]"
          >
            <el-col :span="4">
              <el-input
                label-width="auto"
                id="firstName"
                label="Last Name"
                v-model="getForm.firstName"
                placeholder="first Name"
                @keyup="toKaTa"
              />
            </el-col>
            <div id="g-input">{{ getForm.lastName }}</div>
          </el-form-item>
          <!--名前-->
          <el-form-item label="氏名（カナ）" prop="JfirstName">
            <el-col :span="4">
              <el-input
                label-width="auto"
                id="JfirstName"
                label="Last Name"
                v-model="getForm.JfirstName"
                placeholder="last Name"
              />
            </el-col>

            <div id="g-input">{{ getForm.JlastName }}</div>
          </el-form-item>

          <el-form-item label="メールアドレス:">
            {{ getForm.mail }}</el-form-item
          >
          <!--电话号码1-->
          <el-form-item label="電話番号1" prop="number1">
            <el-col :span="10">
              <el-input label-width="auto" v-model="getForm.number1" />
            </el-col>
          </el-form-item>
          <!--电话号码2-->
          <el-form-item label="電話番号2">
            <el-col :span="10">
              <el-input
                label-width="auto"
                v-model="getForm.number2"
                placeholder="电话号码"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="getForm.sex">
              <el-radio label="男" />
              <el-radio label="女" />
            </el-radio-group>
          </el-form-item>

          <el-form-item label="生年月日:">
            {{ getForm.year }}年 {{ getForm.month }}月
            {{ getForm.day }}日</el-form-item
          >
          <!--郵便番号-->
          <div class="flexbox">
            <el-form-item label="郵便番号" prop="zipCode">
              <el-input
                label-width="auto"
                v-model="getForm.zipCode"
                placeholder="zipCode"
                oninput="value=value.replace(/\D/g, '')"
              />
            </el-form-item>
            <el-button
              :plain="true"
              @click="searchAddress"
              style="margin-bottom: 18px; margin-left: 10px"
              >住所検索</el-button
            >
            <div class="flex justify-space-between mb-4 flex-wrap gap-4"></div>
            <p style="margin-bottom: 18px; margin-left: 10px">
              <el-link
                href="http://www.post.japanpost.jp/zipcode"
                target="_blank"
                >郵便番号を調べる</el-link
              >
            </p>
          </div>

          <el-form-item label="都道府県">
            <el-col :span="4">
              <el-input
                disabled
                label-width="auto"
                v-model="getForm.Prefectures"
                placeholder="Prefectures"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="市区町村">
            <el-col :span="4">
              <el-input
                disabled
                label-width="auto"
                v-model="getForm.municipalities"
                placeholder="municipalities"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="町名">
            <el-col :span="4">
              <el-input
                label-width="auto"
                v-model="getForm.townname"
                placeholder="townname"
              />
            </el-col>
          </el-form-item>

          <el-form-item label="丁目番地">
            <el-col :span="2">
              <el-input
                label-width="auto"
                v-model="getForm.chomeaddress1"
                placeholder="00"
              /> </el-col
            >--
            <el-col :span="2">
              <el-input
                label-width="auto"
                v-model="getForm.chomeaddress2"
                placeholder="00"
              /> </el-col
            >--
            <el-col :span="2">
              <el-input
                label-width="auto"
                v-model="getForm.chomeaddress3"
                placeholder="00"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="建物名称（マンション・団地名など）">
            <el-col :span="4">
              <el-input
                label-width="auto"
                v-model="getForm.apartment"
                placeholder="apartment"
              />
            </el-col>
          </el-form-item>

          <el-form-item label="部屋番号">
            <el-col :span="4">
              <el-input
                label-width="auto"
                v-model="getForm.housenumber"
                placeholder="housenumber"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="建物種別">
            <el-radio-group v-model="getForm.build">
              <el-radio label="戸建て" />
              <el-radio label="集合住宅" />
            </el-radio-group>
          </el-form-item>

          <el-form-item label="エレベータ">
            <el-radio-group v-model="getForm.elevator">
              <el-radio label="なし" />
              <el-radio label="あり" />
            </el-radio-group>
          </el-form-item>
          <div id="password">パスワード変更</div>
          <el-form-item label="新しいパスワード" prop="password1">
            <el-col :span="6">
              <el-input
                v-model="getForm.password1"
                type="password"
                placeholder="Please input password"
                show-password
              />
            </el-col>
          </el-form-item>
          <el-form-item label="新しいパスワード（確認用)" prop="password2">
            <el-col :span="6">
              <el-input
                v-model="getForm.password2"
                type="password"
                placeholder="Please input password"
                show-password
                autocomplete="off"
              />
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-checkbox
              v-model="getForm.changePassWord"
              label="パスワードを変更する"
              name="type"
            />
          </el-form-item>

          <el-form-item>
            <el-button @click="back">戻る</el-button>
            <el-button type="primary" @click="onSubmit(ruleFormRef)"
              >更新</el-button
            >
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  computed,
  ref,
  h,
  nextTick,
} from "vue";
import type { FormInstance } from "element-plus";
import { useStore } from "../../../store/index";
import * as AutoKana from "vanilla-autokana";
import { useRouter } from "vue-router";
import { ElMessage, ElMessageBox } from "element-plus";
const ruleFormRef = ref<FormInstance>();
const router = useRouter();
const store = useStore();
let autokana;
onMounted(async () => {
  store.dispatch("getForm", 123);
  await nextTick();
  autokana = AutoKana.bind("#firstName");
  console.log("onmounted");
});
console.log("setup");
/** 文字列内のひらがなをカタカナに変換します。 */
function hiraToKata(str) {
  return str.replace(/[\u3041-\u3096]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}
// 全角カナの判定.
// function isZenkakuKana(s) {
//   return !!s.match(/^[ァ-ヶー　]*$/); // 「　」は全角スペースです.
// }
// function isHiragana(str) {
//   // str = str == null ? "" : str;
//   if (str.match(/^[ぁ-んー　]*$/)) {
//     //"ー"の後ろの文字は全角スペースです。
//     return true;
//   } else {
//     return false;
//   }
// }
// // 半角カナのチェック.
// function isHankakuKana(s) {
//   return !!s.match(/^[ｦ-ﾟ]*$/);
// }

//新密码
const validatePass = (rule: any, value: any, callback: any) => {
  let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/;
  if (value === "") {
    callback(new Error("Please input the password"));
  } else if (!reg.test(value)) {
    callback(new Error("密码必须是由4-20位字母+数字组合"));
  } else {
    if (getForm.value.password2 !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("password2", () => null);
    }
    callback();
  }
};
//确认密码
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== getForm.value.password1) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};
//手机号码验证
const numberPhone = (rule: any, value: any, callback: any) => {
  if (!value) {
    return new Error("请输入电话号码");
  } else {
    const reg = /^0[34578]\d{9}$/;
    const isPhone = reg.test(value);
    value = Number(value); //转换为数字
    if (typeof value === "number" && !isNaN(value)) {
      //判断是否为数字
      value = value.toString(); //转换成字符串
      if (value.length < 0 || value.length > 12 || !isPhone) {
        //判断是否为11位手机号
        callback(new Error("手机号码格式如:080xxxx8754"));
      } else {
        callback();
      }
    } else {
      callback(new Error("请不要输入非数字字符"));
    }
  }
};
//名字验证
const validateName = (rule: any, value: any, callback: any) => {
  //氏名（カナ） カタカタ入力チェック と 半角 → 全角の変換
  function isKataKana(s) {
    return !!s.match(/^[ァ-ヶー ｦ-ﾟ]*$/); // 「 」は全角スペースです.
  }
  //          半角 → 全角（カタカナ） 対応表（マッピング）
  function hankana2Zenkana(str) {
    const kanaMap = {
      ｶﾞ: "ガ",
      ｷﾞ: "ギ",
      ｸﾞ: "グ",
      ｹﾞ: "ゲ",
      ｺﾞ: "ゴ",
      ｻﾞ: "ザ",
      ｼﾞ: "ジ",
      ｽﾞ: "ズ",
      ｾﾞ: "ゼ",
      ｿﾞ: "ゾ",
      ﾀﾞ: "ダ",
      ﾁﾞ: "ヂ",
      ﾂﾞ: "ヅ",
      ﾃﾞ: "デ",
      ﾄﾞ: "ド",
      ﾊﾞ: "バ",
      ﾋﾞ: "ビ",
      ﾌﾞ: "ブ",
      ﾍﾞ: "ベ",
      ﾎﾞ: "ボ",
      ﾊﾟ: "パ",
      ﾋﾟ: "ピ",
      ﾌﾟ: "プ",
      ﾍﾟ: "ペ",
      ﾎﾟ: "ポ",
      ｳﾞ: "ヴ",
      ﾜﾞ: "ヷ",
      ｦﾞ: "ヺ",
      ｱ: "ア",
      ｲ: "イ",
      ｳ: "ウ",
      ｴ: "エ",
      ｵ: "オ",
      ｶ: "カ",
      ｷ: "キ",
      ｸ: "ク",
      ｹ: "ケ",
      ｺ: "コ",
      ｻ: "サ",
      ｼ: "シ",
      ｽ: "ス",
      ｾ: "セ",
      ｿ: "ソ",
      ﾀ: "タ",
      ﾁ: "チ",
      ﾂ: "ツ",
      ﾃ: "テ",
      ﾄ: "ト",
      ﾅ: "ナ",
      ﾆ: "ニ",
      ﾇ: "ヌ",
      ﾈ: "ネ",
      ﾉ: "ノ",
      ﾊ: "ハ",
      ﾋ: "ヒ",
      ﾌ: "フ",
      ﾍ: "ヘ",
      ﾎ: "ホ",
      ﾏ: "マ",
      ﾐ: "ミ",
      ﾑ: "ム",
      ﾒ: "メ",
      ﾓ: "モ",
      ﾔ: "ヤ",
      ﾕ: "ユ",
      ﾖ: "ヨ",
      ﾗ: "ラ",
      ﾘ: "リ",
      ﾙ: "ル",
      ﾚ: "レ",
      ﾛ: "ロ",
      ﾜ: "ワ",
      ｦ: "ヲ",
      ﾝ: "ン",
      ｧ: "ァ",
      ｨ: "ィ",
      ｩ: "ゥ",
      ｪ: "ェ",
      ｫ: "ォ",
      ｯ: "ッ",
      ｬ: "ャ",
      ｭ: "ュ",
      ｮ: "ョ",
      "｡": "。",
      "､": "、",
      ｰ: "ー",
      "｢": "「",
      "｣": "」",
      "･": "・",
    };
    let reg = new RegExp("(" + Object.keys(kanaMap).join("|") + ")", "g");
    return str
      .replace(reg, function (match) {
        return kanaMap[match];
      })
      .replace(/ﾞ/g, "゛")
      .replace(/ﾟ/g, "゜");
  }
  value = hankana2Zenkana(value);

  if (value === "") {
    callback(new Error("Please input the name"));
  } else if (!isKataKana(value)) {
    callback(new Error("请输入katakana"));
  } else {
    callback();
  }
};

const rules = {
  //名字确认
  JfirstName: [{ validator: validateName, trigger: "blur" }],
  //密码
  password1: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { validator: validatePass, trigger: "blur" },
  ],
  //确认密码
  password2: [{ validator: validatePass2, trigger: "blur" }],
  //电话号码
  number1: [
    {
      required: true,
      message: "请输入手机号码",
      trigger: "blur",
    },
    {
      validator: numberPhone,
      trigger: "blur",
    },
  ],
  zipCode: [
    {
      required: true,
      message: "入力必須項目です。",
      trigger: "blur",
    },
    {
      min: 7,
      max: 7,
      message: "郵便番号は7数宇で入力。",
      trigger: "blur",
    },
  ],
};

//电话号码分割
// const numberSplit = (number: String) => {
//   console.log(number, "分割qian的数据");
//   // let temp: any[] = number.split("-");
//   // data.number1 = temp[0];
//   // data.number2 = temp[1];
//   // data.number3 = temp[2];
//   console.log(data.number1, data.number2, data.number3, "分割后的数据");
// };

//获取 oldfrom表单数据的http
const getForm = computed(() => {
  // numberSplit(store.getters.getForm.number1);
  return store.getters.getForm;
});

const toKaTa = () => {
  getForm.value.JfirstName = autokana.getFurigana(); //ふりがなを自動入力
  getForm.value.JfirstName = hiraToKata(getForm.value.JfirstName);
};
const headers = { Accept: "application/json" };
const searchAddress = async () => {
  let api = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";
  let url = api + getForm.value.zipCode;
  const info = await fetch(url, { headers });
  const data = await info.json();
  console.log(data, "data");

  //   const data = j.results;
  if (data.status === 400) {
    //エラー時
    const error = data.message;
    ElMessage(error);
  } else if (data.results === null) {
    // error.value = "郵便番号から住所が見つかりませんでした。";
    ElMessage("郵便番号から住所が見つかりませんでした。");
  } else {
    getForm.value.Prefectures = data.results[0].address1;
    getForm.value.municipalities = data.results[0].address2;
    getForm.value.townname = data.results[0].address3;
  }
};

const onSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      const password = getForm.value.password1;
      getForm.value.password1 = "";
      getForm.value.password2 = "";
      store.dispatch("setForm", getForm.value);
      store.dispatch("setPassWord", { password1: password });

      ElMessageBox({
        title: "会員情報変更完了",
        message: h("p", null, [
          h("span", null, "会員情報の変更が完了しました。 "),
        ]),
        showCancelButton: true,
        confirmButtonText: "ニトリネットにログイン",
        cancelButtonText: "Cancel",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "Loading...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        ElMessage({
          type: "info",
          message: `action: ${action}`,
        });
      });
    } else {
      ElMessage("请检查表单");
      return false;
    }
  });
};

const back = () => {
  console.log(router);
  router.back();
};
</script>

<style scoped>
.flexbox {
  display: flex;
  align-items: center;
}
#g-input {
  margin-left: 8px;
}
#password {
  margin: 40px 10px;
}
.el-header {
  background-color: rgba(49, 50, 50, 0.507);
}
.logo {
  height: 80px;
}
h2 {
  text-align: center;
  color: rgb(130, 166, 140);
  height: 80px;
  line-height: 80px;
  font-size: 40px;
}
.btn-text {
  text-align: right;
  height: 80px;
}
</style>
