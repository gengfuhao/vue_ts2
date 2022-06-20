const axios = require("axios");
const url = "http://localhost:3000/info/cart/";
const headers = { Accept: "application/json" };

type infoCartState = {
  infoCart: {};
  useCart: any[];
  userPay: {};
  afterCart: [];
};
type infoCartPayload = [
  {
    goodsId: Number;
    link: String;
    img: String;
    deliveryMethod: String;
    exchange: String;
    postage: String;
    amount: Number;
    delivery: String;
  }
];
type userPayload = [
  {
    amount: Number;
    photo: String;
    price: String;
    goodsNumber: String;
    color: String;
    size: String;
    delivery: String;
    id: Number;
    userId: Number;
    product: String;
    deliveryMethod: String;
  }
];
export default {
  state: {
    infoCart: {},
    useCart: [],
    userPay: {},
    afterCart: [],
  },
  mutations: {
    setInfoCart(state: infoCartState, payload: infoCartPayload) {
      state.infoCart = payload[0];
    },
    setAfterCart(state: infoCartState, payload: any) {
      state.afterCart = payload;
    },
    setUseCart(state: infoCartState, payload: any) {
      state.useCart = payload;
      let count = 0;
      payload.map((x) => (count += parseInt(x.amount) * parseInt(x.price)));
      let freeFreight = payload[0].freeFreight; //设定的邮费
      let freight = payload[0].freight; //邮费500
      if (count >= freeFreight) {
        let freight = 0;
        freeFreight = "本次邮费不要钱";
        let countAddFreight = count + freight;
        state.userPay = { freight, freeFreight, count, countAddFreight };
      } else {
        freeFreight = "还差" + (freeFreight - count) + "就可以免邮费";
        let countAddFreight = count + freight;
        state.userPay = { freight, freeFreight, count, countAddFreight };
      }
    },
  },
  actions: {
    //放置
    async upDataUseCart(
      { commit }: { commit: Function },
      { id, target }: { id: number; target: number }
    ) {
      // PUT request using fetch with async/await
      console.log("upDataUseCart更新数据", target, id);
      const info = await fetch("http://localhost:3000/user", { headers });
      const j = await info.json();
      j.map((x) => {
        if (x.id === id) {
          x.amount = target;

          axios.put("http://localhost:3000/user/" + id, x);
        }
      });
    },

    //再入购物车
    //之后再买
    async toCart({ commit }: { commit: Function }, id: number) {
      const info = await fetch("http://localhost:3000/afterCart/" + id, {
        headers,
      });
      const j = await info.json();
      delete j.id;
      console.log("j", j);
      await fetch("http://localhost:3000/afterCart/" + id, {
        method: "DELETE",
      });
      const headers2 = {
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      };
      axios
        .post("http://localhost:3000/user", j, { headers2 })
        .then(function (response) {
          console.log(response);
        });
      const info3 = await fetch("http://localhost:3000/afterCart", { headers });
      const j3 = await info3.json();
      commit("setAfterCart", j3);
      const info2 = await fetch("http://localhost:3000/user", { headers });
      const j2 = await info2.json();
      commit("setUseCart", j2);
    },
    //之后再买
    async afterCart({ commit }: { commit: Function }, id: number) {
      const info = await fetch("http://localhost:3000/user/" + id, { headers });
      const j = await info.json();
      delete j.id;
      console.log("j", j);
      await fetch("http://localhost:3000/user/" + id, { method: "DELETE" });
      const headers2 = {
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      };
      axios
        .post("http://localhost:3000/afterCart", j, { headers2 })
        .then(function (response) {
          console.log(response);
        });
      const info2 = await fetch("http://localhost:3000/user", { headers });
      const j2 = await info2.json();
      commit("setUseCart", j2);

      const info3 = await fetch("http://localhost:3000/afterCart", { headers });
      const j3 = await info3.json();
      commit("setAfterCart", j3);
    },
    //获取之后再买
    async setAfterCart({ commit }: { commit: Function }) {
      const info = await fetch("http://localhost:3000/afterCart", { headers });
      const j = await info.json();
      commit("setAfterCart", j);
    },
    //删除
    async deleteUseCart({ commit }: { commit: Function }, id: number) {
      // DELETE request using fetch with async/await
      await fetch("http://localhost:3000/user/" + id, { method: "DELETE" });
    },
    async deleteAfter({ commit }: { commit: Function }, id: number) {
      // DELETE request using fetch with async/await
      await fetch("http://localhost:3000/afterCart/" + id, {
        method: "DELETE",
      });
    },

    async addUseCart({ commit }: { commit: Function }, article: {}) {
      const headers = {
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      };
      axios
        .post("http://localhost:3000/user", article, { headers })
        .then(function (response) {
          console.log(response);
        });
    },
    async setUseCart({ commit }: { commit: Function }) {
      const info = await fetch("http://localhost:3000/user", { headers });
      const j = await info.json();
      commit("setUseCart", j);
    },

    async setInfoCart({ commit }: { commit: Function }, payload: number) {
      const reviewRating = await fetch(url + payload, { headers });
      const j = await reviewRating.json();
      commit("setInfoCart", j);
    },
  },
  getters: {
    getAfterCart: (state: infoCartState) => {
      console.log("getAfterCart!121232435!!!!!!!", state.afterCart);
      return state.afterCart;
    },
    getInfoCart: (state: infoCartState) => {
      console.log("getInfoCart!121232435!!!!!!!", state.infoCart);
      return state.infoCart;
    },
    getUseCart: (state: infoCartState) => {
      console.log("getUseCart!121232435!!!!!!!", state.useCart);
      return state.useCart;
    },
    getUserPay: (state: infoCartState) => {
      console.log("getUserPay!121232435!!!!!!!", state.userPay);
      return state.userPay;
    },
  },
};
