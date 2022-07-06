<template>
  <el-form :rules="rules" :model="data" label-width="120px" ref="ruleFormRef">
    <!--名前-->
    <el-form-item
      label="氏名"
      prop="firstName"
      :rules="[{ required: true, message: 'name is required' }]"
    >
      <el-input
        label-width="auto"
        id="first"
        label="Last Name"
        v-model="data.firstName"
        placeholder="first Name"
        @keyup="toKaTa"
      />
    </el-form-item>
    <!--名前-->
    <el-form-item label="氏名（カナ）" prop="JfirstName">
      <el-input
        label-width="auto"
        id="JfirstName"
        label="Last Name"
        v-model="data.JfirstName"
        placeholder="last Name"
      />
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from "vue";
import type { FormInstance } from "element-plus";
import * as AutoKana from "vanilla-autokana";

const ruleFormRef = ref<FormInstance>();
let autokana;
onMounted(async () => {
  await nextTick();
  autokana = AutoKana.bind("#first");
});

const data = reactive({
  firstName: "",
  JfirstName: "",
});

/** 文字列内のひらがなをカタカナに変換します。 */
function hiraToKata(str) {
  return str.replace(/[\u3041-\u3096]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

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
};
const toKaTa = () => {
  data.JfirstName = autokana.getFurigana(); //ふりがなを自動入力
  data.JfirstName = hiraToKata(data.JfirstName);
};
</script>
