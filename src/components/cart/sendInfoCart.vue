<template>
  <div class="g-layout_sidebar">
    <div class="g-sm-full p-sm-full-cls">
      <div class="g-lg-sticky">
        <div class="g-pane g-pane-gray">
          <moveInfoCartVue v-bind="display"></moveInfoCartVue>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "../../store/index";
// import { useRoute } from "vue-router";
import moveInfoCartVue from "./moveInfoCart.vue";
// const route = useRoute();
// const goodsId = route.params.goodsId;
const store = useStore();
// onMounted(() => {
//   store.dispatch("setDisplay", goodsId);
// });
//引入数据
const display = computed(() => {
  return store.getters.getDisplay[0];
});
</script>

<style>
.g-layout-detail .g-layout_sidebar {
  grid-row: 2/5;

  grid-column: 2;
  margin-left: 40px;
}
.p-sm-full-cls {
  position: sticky;
  top: 40px;
}
.g-pane,
.g-lg-pane {
  padding: 30px;
}
.g-pane-gray,
.g-lg-pane-gray {
  background-color: #f7f7f7;
}
.g-pane,
.g-lg-pane {
  display: block;
}
</style>
