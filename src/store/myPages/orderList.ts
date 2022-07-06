const url = "http://localhost:3000/userInfo/";
const headers = { Accept: "application/json" };
export type newGoodsesState = {
  userInfo: Order[];
  newUserInfo: Order[];

  detailList: Order11;
};

type Order11 = {
  orderId: string;
  orderDate: Date;
  store: string;
  payment: string;
  usePoint: number;
  userName: string;
  postCode: number;
  address: string;
  email: string;
  phoneNum: string;
  deliverAddress: string;
  receipt: string;
  orderDetail: [
    {
      deliveryStatus: string;
      statusValue: string;
      deliverytype: string;
      deliverNum: string;
      deliverDate: Date;
      goodsId: number;
      photo: string;
      size: string;
      sku: string;
      color: string;
      title: string;
      quantity: number;
      price: number;
    }
  ];
};
type Order = {
  orderId: string;
  orderDate: Date;
  store: string;
  orderDetail: {
    deliveryStatus: string;
    deliverytype: string;
    deliverDate: Date;
    goodsId: number;
    quantity: number;
    statusValue: string;
  };
};
export default {
  state: {
    userInfo: [],
    newUserInfo: [],

    detailList: {},
  },
  mutations: {
    setUserInfo(state: any, result: any) {
      //   console.log("order_JJJJJJJJJJJ", GetDateStr);
      function GetDateStr(AddDayCount: any) {
        const dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        const y = dd.getFullYear();
        const m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
        const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + "-" + m + "-" + d;
      }
      state.userInfo = result;

      state.newUserInfo = result.filter(
        (order: any) =>
          new Date(order.orderDate).getTime() >
          new Date(GetDateStr(-180)).getTime()
      );
    },

    changeUserInfo(state: newGoodsesState, { newCount, newCount2 }) {
      //    获取半年前的日期
      function GetDateStr(AddDayCount) {
        const dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        const y = dd.getFullYear();
        const m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
        const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return y + "-" + m + "-" + d;
      }
      console.log(
        "newCount === GetDateStr(-180)",
        newCount,
        GetDateStr(-180),
        state.userInfo
      );
      if (newCount === GetDateStr(-180)) {
        state.newUserInfo = state.userInfo.filter(
          (order) =>
            new Date(order.orderDate).getTime() > new Date(newCount).getTime()
        );
      } else {
        state.newUserInfo = state.userInfo.filter(
          (order) => new Date(order.orderDate).getFullYear() === newCount
        );
      }
      console.log("userInfo userInfo userInfo", state.userInfo);

      if (newCount2 !== "ALL") {
        state.newUserInfo = state.newUserInfo.filter(
          (order) => order.orderDetail[0].statusValue === newCount2
        );
      }

      state.newUserInfo.sort(
        (a, b) => +new Date(b.orderDate) - +new Date(a.orderDate)
      );
    },
    //orderDetaill获取数据
    setOrderDetail(state: newGoodsesState, j: Order11) {
      state.detailList = j;
    },
  },
  actions: {
    async setUserInfo({ commit }: { commit: Function }) {
      const goodses = await fetch(url + 888, { headers });
      const j = await goodses.json();

      commit("setUserInfo", j[0].orderList);
    },

    async setOrderDetail({ commit }: { commit: Function }, payload: string) {
      const reviewRating = await fetch(
        "http://localhost:3000/orderDetail/" + payload,
        { headers }
      );
      const j = await reviewRating.json();
      commit("setOrderDetail", j[0]);
    },
  },
  getters: {
    getUserInfo: (state: newGoodsesState) => {
      return state.userInfo;
    },
    getNewUserInfo: (state: newGoodsesState) => {
      return state.newUserInfo;
    },
    getDetailList: (state: newGoodsesState) => {
      return state.detailList;
    },
    getOrderDetail: (state: newGoodsesState) => {
      return state.detailList.orderDetail;
    },
  },
};
