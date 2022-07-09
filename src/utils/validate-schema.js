export default {
  // 校验用户名
  account(value) {
    if (!value) return "请输入用户名";
    return true;
  },
  // 校验密码
  password(value) {
    if (!value) return "请输入密码";
    if (!/^\w{6,24}$/.test(value)) return "密码是6-24个字符";
    return true;
  },
  // 校验手机号
  mobile(value) {
    if (!value) return "请输入手机号";
    if (!/^1[3-9]\d{9}$/.test(value)) return "手机号格式错误";
    return true;
  },
  // 校验验证码
  code(value) {
    if (!value) return "请输入验证码";
    if (!/^\d{6}$/.test(value)) return "验证码是6个数字";
    return true;
  },
  // 校验勾选同意用户协议
  isAgree(value) {
    if (!value) return "请勾选同意用户协议";
    return true;
  },
  // 校验email
  email(value) {
    const reg =
      /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if (!value) {
      return "入力必須項目です。";
    } else if (!reg.test(value)) {
      return "メールアドレスの形式が正しくありません。";
    } else {
      return true;
    }
  },
  // 校验checkEmail
  checkEmail(value, arr) {
    const reg =
      /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if (!value) {
      return " 入力必須項目です。";
    } else if (!reg.test(value)) {
      return "メールアドレスの形式が正しくありません。";
    } else if (value !== arr.form.email) {
      return "入力されたメールアドレスが一致していません。 ";
    } else {
      return true;
    }
  },
};
