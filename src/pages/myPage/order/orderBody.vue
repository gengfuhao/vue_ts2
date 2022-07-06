<template>
  <h1>111</h1>
  <div class="order-top">
    <p>注文番号：{{ props.orderId }}</p>
    <button>
      <router-link
        :to="{ path: '/orderDetail', query: { orderId: props.orderId } }"
      >
        注文詳細</router-link
      >
    </button>
  </div>
  <div class="date-store">
    <p style="font-weight: bold; width: 100px">注文日</p>
    <p>
      <span class="material-symbols-outlined green-icon"> calendar_month </span
      >&nbsp;
      <span>{{ props.orderDate }}</span>
    </p>
  </div>
  <div class="date-store" style="border-top: 1px dashed #e6e6e6">
    <p style="font-weight: bold; width: 100px">購入店舗</p>
    <p>
      <span class="material-symbols-outlined green-icon"> dvr </span>&nbsp;
      <span>{{ props.store }}</span>
    </p>
  </div>
  <div id="p-specMore" v-for="(detail, index) in orderDetail" :key="index">
    <ul class="g-flow-lg"></ul>
    <table class="g-table-a">
      <tbody>
        <tr>
          <td class="bold">現在の状況</td>
          <td>{{ detail.deliveryStatus }}</td>
        </tr>
        <tr>
          <td class="bold" style="border-top: 1px dashed #e6e6e6">納品種別</td>
          <td style="border-top: 1px dashed #e6e6e6">
            {{ detail.deliverytype }}
          </td>
        </tr>
        <tr>
          <td class="bold" style="border-top: 1px dashed #e6e6e6">
            配送予定日
          </td>
          <td style="border-top: 1px dashed #e6e6e6">
            {{ detail.deliverDate }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { defineProps, toRefs } from "vue";
const props = defineProps<{
  orderId: string;
  orderDate: string;
  store: string;
  orderDetail: [
    {
      deliveryStatus: string;
      deliverytype: string;
      deliverDate: string;
      goodsId: number;
      quantity: number;
    }
  ];
}>();
const { orderDetail } = toRefs(props);
</script>

<style scoped>
p {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
button {
  border: #dbdbdb solid 1px;
  color: #009e96;
  margin-right: 20px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: white;
}
.order-top {
  margin-top: 30px;
  display: flex;
  background-color: #e7f8f7;
  justify-content: space-between;
  align-items: center;
}
.date-store {
  margin-left: 20px;
  display: flex;
  justify-content: start;
  justify-content: flex-start;
  align-items: center;
}
.order-top p {
  font-size: 1.1rem;
  font-weight: bold;
  margin-left: 20px;
}
.bold {
  font-weight: bold;
  width: 25%;
}
table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border: #dbdbdb solid 1px;
  width: 800px;
}
tr {
  text-align: left;
  border-bottom: 1px solid #dbdbdb;
}
td {
  padding: 25px 50px;
}

a {
  text-decoration: none;
  color: #009e96;
}
</style>
