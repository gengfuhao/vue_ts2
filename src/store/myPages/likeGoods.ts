const axios = require("axios");
const url = "http://localhost:3000/info/cart/";
const headers = { Accept: "application/json" };

interface listNameType {
  storeName: String;
  id: Number;
}
interface listListType {
  amount: Number;
  color: String;
  delivery: String;
  deliveryMethod: String;
  freeFreight: Number;
  freight: Number;
  goodsNumber: String;
  id: Number;
  photo: String;
  price: String;
  product: String;
  sizeName: String;
  storeName: String;
  sum: Number;
  userId: String;
}
type infoCartState = {
  setLikeList: listListType;

  setListName: listNameType;
};
export default {
  state: {
    setLikeList: [],
    setListName: [],
  },
  mutations: {
    setLikeList(state: infoCartState, list: listListType) {
      state.setLikeList = list;
    },
    setListName(state: infoCartState, list: listNameType) {
      state.setListName = list;
    },
  },
  actions: {
    //加入中意的商品
    async addLikeGoods({ commit }: { commit: Function }, article: {}) {
      axios
        .post("http://localhost:3000/likeGoodsList", article, { headers })
        .then(function (response) {
          console.log(response);
        });
    },
    //重新加载listname数据
    async setListName({ commit }: { commit: Function }) {
      const List2 = await fetch("http://localhost:3000/listName", {
        headers,
      });
      const listName = await List2.json();
      commit("setListName", listName);
    },
    //重新加载商品数据
    async setLikeList({ commit }: { commit: Function }, result: string) {
      const List = await fetch("http://localhost:3000/likeGoodsList", {
        headers,
      });
      const likeList = await List.json();
      const li = likeList.filter((order) => order.storeName == result);

      commit("setLikeList", li);
    },

    //加载 商品 和商品名字
    async getLikeList({ commit }: { commit: Function }, result: string) {
      //获取中意商品list
      const List2 = await fetch("http://localhost:3000/listName", { headers });
      const listName = await List2.json();

      const List = await fetch("http://localhost:3000/likeGoodsList", {
        headers,
      });
      const likeList = await List.json();
      const li = likeList.filter((order) => order.storeName == result);
      //获取中意商品listName
      commit("setLikeList", li);
      commit("setListName", listName);
    },

    //修改名字
    async changeListName({ commit }: { commit: Function }, payload: any) {
      const { newData, oldData } = payload;
      //获取listName
      const reviewName = await fetch("http://localhost:3000/listName", {
        headers,
      });
      const nameList = await reviewName.json();
      const name = nameList.filter((order) => newData === order.storeName);

      if (newData == "" || newData.length >= 4) {
        alert("请输入名字||输入名字请小于 4");
      } else if (name[0]) {
        alert("重复--加入失败");
      } else {
        const nameList22 = nameList.filter(
          (order) => oldData === order.storeName
        );
        console.log("newDATA!!!", newData);

        nameList22[0].storeName = newData;
        axios.put(
          "http://localhost:3000/listName/" + nameList22[0].id,
          nameList22[0]
        );

        //修改数据中的名字
        const reviewData = await fetch("http://localhost:3000/likeGoodsList", {
          headers,
        });
        const dataList = await reviewData.json();
        const dataList22 = dataList.filter(
          (order) => oldData === order.storeName
        );
        if (dataList22.length > 0) {
          dataList22[0].storeName = payload.newData;
          axios.put(
            "http://localhost:3000/likeGoodsList/" + dataList22[0].id,
            dataList22[0]
          );
          alert("修改成功 多多购物");
        }
      }
    },

    //删除名字
    async deleteListName({ commit }: { commit: Function }, deleteName: string) {
      const reviewRating = await fetch("http://localhost:3000/listName", {
        headers,
      });
      const nameList = await reviewRating.json();
      const nameList11 = nameList.filter(
        (order) => deleteName === order.storeName
      );
      console.log("jjjj0!!!!!", nameList11);
      await fetch("http://localhost:3000/listName/" + nameList11[0].id, {
        method: "DELETE",
      });

      //删除名字对应的数据

      const reviewRating11 = await fetch(
        "http://localhost:3000/likeGoodsList",
        {
          headers,
        }
      );
      const dataList = await reviewRating11.json();
      const dataList11 = dataList.filter(
        (order) => deleteName === order.storeName
      );
      if (dataList11.length > 0) {
        await fetch("http://localhost:3000/likeGoodsList/" + dataList11[0].id, {
          method: "DELETE",
        });
      }
    },
  },
  getters: {
    getLikeList: (state: infoCartState) => {
      console.log("setLikeList!121232435!!!!!!!", state.setLikeList);
      return state.setLikeList;
    },
    getListName: (state: infoCartState) => {
      console.log("setListName!121232435!!!!!!!", state.setListName);
      return state.setListName;
    },
  },
};
