const axios = require("axios");
const headers = { Accept: "application/json" };
type formState = {
  form: formType;
};

type formType = {
  Notice: true;
  firstName: String;
  lastName: String;
  JfirstName: String;
  JlastName: String;
  mail: String;
  number1: String;
  number2: String;
  number3: String;
  number11: String;
  number22: String;
  number33: String;
  sex: String;
  year: Number;
  month: Number;
  day: Number;
  zipCode: Number;
  Prefectures: String;
  municipalities: String;
  townname: String;
  chomeaddress1: Number;
  chomeaddress2: Number;
  chomeaddress3: Number;
  apartment: String;
  housenumber: Number;
  build: String;
  elevator: String;
  password1: String;
  password2: String;
  changePassWord: boolean;
};

export default {
  state: {
    form: {},
  },
  mutations: {
    getForm(state: formState, form: formType) {
      state.form = form;
    },
  },
  actions: {
    //加入newform
    async setForm({ commit }: { commit: Function }, form: {}) {
      console.log("111@", { ...form });

      // axios
      //   .put("http://localhost:3000/userFrom/" + 1, { ...form }, { headers })
      //   .then(function (response) {
      //     console.log(response);
      //   });
    },
    //password
    async setPassWord({ commit }: { commit: Function }, form: {}) {
      console.log("111@", form);

      axios
        .put(
          "http://localhost:3000/userPassWord/" + 1,
          { ...form },
          { headers }
        )
        .then(function (response) {
          console.log(response);
        });
    },
    //加载form数据
    async getForm({ commit }: { commit: Function }, userId: Number) {
      const userForm0 = await fetch(
        "http://localhost:3000/user/from/" + userId,
        { headers }
      );
      const userForm = await userForm0.json();
      commit("getForm", userForm[0]);
    },
  },
  getters: {
    getForm: (state: formState) => {
      return state.form;
    },
  },
};
