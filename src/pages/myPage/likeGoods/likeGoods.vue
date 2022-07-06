<template>
  <div class="g-wrapper" id="g-wrapper">
    <main data-currency-iso-code="JPY">
      <div class="g-bodyArea g-inner">
        <div class="g-bodyArea g-inner">
          <div class="g-main">
            <div class="g-layout-narrow">
              <!--顶部导航-->
              <div class="g-layout_lead">
                <div class="g-sm-full g-breadcrumb">
                  <div class="swiper-container">
                    <ol
                      class="swiper-wrapper"
                      itemtype="http://schema.org/BreadcrumbList"
                    >
                      <li
                        class="swiper-slide"
                        itemprop="itemListElement"
                        itemtype="http://schema.org/ListItem"
                      >
                        <a href="/ec" itemprop="item"
                          ><span id="favoriteProductBreadCrumb1" itemprop="name"
                            >ホーム</span
                          ></a
                        >
                        <meta itemprop="position" content="1" />
                      </li>
                      <li
                        class="swiper-slide"
                        itemprop="itemListElement"
                        itemtype="http://schema.org/ListItem"
                      >
                        <a href="/ec/my-account/" itemprop="item"
                          ><span id="favoriteProductBreadCrumb2" itemprop="name"
                            >マイページ</span
                          ></a
                        >
                        <meta itemprop="position" content="2" />
                      </li>
                      <li
                        class="swiper-slide"
                        itemprop="itemListElement"
                        itemtype="http://schema.org/ListItem"
                      >
                        <span itemprop="item" aria-current="page"
                          ><span id="favoriteProductBreadCrumb3" itemprop="name"
                            >お気に入り商品</span
                          ></span
                        >
                        <meta itemprop="position" content="3" />
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div class="g-layout_head">
                <h1>お気に入り商品</h1>
              </div>

              <div class="g-layout_body">
                <!--加入新list-->
                <div class="g-lg-inputGroup p-createList">
                  <div>
                    <input
                      class="g-input g-input-sm"
                      id="createWishlistName"
                      type="text"
                      name="wishlistName"
                      size="30"
                      placeholder="新規リスト名を入力"
                      aria-describedby="p-list-new_alert"
                      data-validation-rules='[{"rule":"length","max":20}]'
                      v-model="createListName"
                    />
                    <p
                      class="g-formGrid_error-alone g-sm-align-tl"
                      id="p-list-new_alert"
                      role="alert"
                    ></p>
                  </div>
                  <el-button
                    @click="clickcreate"
                    :plain="true"
                    class="g-btn g-btn-brand g-sm-btn-func g-lg-btn-sm"
                    >リストを作成</el-button
                  >
                </div>

                <section class="g-block-sm">
                  <h2 class="g-h-2">
                    <span id="wishlistHeadLabel">{{ showListName }}</span>
                  </h2>
                  <!--更改名字和删除名字---->
                  <div class="g-lg-inputGroup p-favoriteList">
                    <div class="g-select g-select-sm">
                      <i class="g-i g-i-dropdown" aria-hidden="true"></i>
                      <select
                        id="wishlistDropDown"
                        name=""
                        aria-label="お気に入り商品リストの選択"
                        v-model="showListName"
                      >
                        <option
                          :value="list.storeName"
                          defaultwishlist="true"
                          v-for="(list, index) in getListName"
                          :key="list.id"
                        >
                          {{ list.storeName }}
                        </option>
                      </select>
                    </div>
                    <p
                      class="g-inputGroup_static wishlist-controls"
                      :style="{ display: isShow }"
                    >
                      <el-button
                        @click="changeListName"
                        :plain="true"
                        class="g-btn g-btn-em g-btn-sm g-lg-fh"
                        id="changepopupbutton"
                        >リスト名を変更</el-button
                      >
                    </p>
                    <p
                      class="g-inputGroup_static wishlist-controls"
                      :style="{ display: isShow }"
                    >
                      <el-popconfirm
                        confirm-button-text="OK"
                        cancel-button-text="No, Thanks"
                        title="Are you sure to delete this?"
                        @confirm="deleteListName"
                      >
                        <template #reference>
                          <el-button
                            class="g-btn g-btn-em g-btn-sm g-lg-fh"
                            id="changepopupbutton"
                            >リストを削除</el-button
                          >
                        </template>
                      </el-popconfirm>
                    </p>
                  </div>

                  <div id="entryList">
                    <div id="wishlistEntryList" class="g-block-sm">
                      <div class="p-listControl">
                        <label class="g-checkable">
                          <input
                            type="checkbox"
                            data-checkall="favorite"
                            v-model="allSelected"
                            @change="selectAll"
                          /><span class="g-checkable_label">すべて選択</span>
                        </label>
                        <div class="p-listControl_edit">
                          <div>チェックしたものを</div>
                          <ul class="g-linkList g-linkList-lg">
                            <li
                              class="wishlist-move-controls"
                              style="display: list-item"
                            >
                              <a
                                class="g-link g-link-gray"
                                id="moveWishlistEntries"
                                @click="clickMoveentry"
                                aria-expanded="false"
                                aria-controls="p-moveModal"
                                ><i class="g-i g-i-sort" aria-hidden="true"></i
                                ><span>移動</span></a
                              >
                            </li>
                            <li>
                              <a
                                style="cursor: pointer"
                                class="g-link g-link-gray"
                                role="button"
                                @click="deleteData"
                              >
                                <i class="g-i g-i-close" aria-hidden="true"></i>
                                <span>削除</span></a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>点击选择框，收到的id: {{ checkboxList }}</div>
                      <ul
                        id="p-ProductList"
                        class="g-itemList g-itemList-border g-mt-20 g-mb-20"
                      >
                        <li
                          class="g-itemList_item"
                          v-for="(list, index) in getLikeList"
                          :key="index"
                        >
                          <div
                            class="g-media g-media-lg g-media-lead g-media-tail p-favoriteItem"
                          >
                            <div class="g-media_lead g-align-im">
                              <div class="g-checkable">
                                <input
                                  number
                                  type="checkbox"
                                  name="productCheckBox"
                                  :value="list.id"
                                  v-model="checkboxList"
                                  data-checkall-children="favorite"
                                /><span
                                  ><i
                                    class="g-s g-s-checkbox-on g-checkable_on"
                                    aria-hidden="true"
                                  ></i
                                  ><i
                                    class="g-s g-s-checkbox-off g-checkable_off"
                                    aria-hidden="true"
                                  ></i
                                ></span>
                              </div>
                            </div>
                            <div class="g-media_head">
                              <a class="g-hover" href="/ec/product/7565623">
                                <img class="g-fw g-rc" :src="list.photo" alt=""
                              /></a>
                            </div>
                            <div
                              class="g-media_body g-sm-units-xs g-lg-units-sm"
                            >
                              <p class="g-media_h">
                                <a href="/ec/product/7565623">{{
                                  list.product
                                }}</a>
                              </p>
                              <p class="g-price">
                                {{ list.price }}<span>円（税込）</span>
                              </p>
                              <dl class="g-flow g-align-gm">
                                <dt>数量</dt>
                                <dd>
                                  <input
                                    class="g-input g-input-sm addToCartQty7565623"
                                    type="text"
                                    name="quantity"
                                    v-model="list.amount"
                                    size="5"
                                    maxlength="3"
                                    id="p-pieces"
                                  />
                                </dd>
                              </dl>
                            </div>
                            <div class="g-media_tail g-units g-sm-align-tc">
                              <div class="g-position-r">
                                <div class="cartBtnArea">
                                  <button
                                    class="g-btn g-btn-cv g-btn-c g-sm-fw g-lg-btn-func addToCartBtn p-addItem"
                                    id="p-addItem7565623"
                                    type="button"
                                    data-sku-code="7565623"
                                    data-price-without-tax="1810.0"
                                    data-category="敷きパッド"
                                    data-category-id="11060"
                                    data-product-id="7565623s"
                                    data-bundle="false"
                                    @click="toCart(list.id)"
                                  >
                                    <i
                                      class="g-i g-i-add-cart"
                                      aria-hidden="true"
                                    ></i>
                                    <span>カートに入れる</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!--点击移动-->
  <div
    :style="{ display: moveModal }"
    class="g-modal"
    id="p-moveModal"
    role="dialog"
    aria-hidden="false"
    aria-modal="true"
    aria-labelledby="p-moveModal_h"
  >
    <div class="g-modal_backdrop">
      <div class="g-modal_spacer"></div>
      <div class="g-modal_el">
        <header class="g-modal_head">
          <p class="g-modal_h" id="p-moveModal_h">商品を別のリストへ移動</p>
          <button
            class="g-modal_close"
            type="button"
            aria-label="閉じる"
            aria-expanded="true"
            aria-controls="p-moveModal"
            @click="closeMoveentry"
          >
            <i class="g-i g-i-close" aria-hidden="true"
              ><span class="material-symbols-outlined"> close </span></i
            >
          </button>
        </header>
        <div class="g-modal_body">
          <div class="g-error" :style="{ display: errorMove }">
            <p class="g-error_h error-msg">{{ errorImage }}</p>
          </div>
          <p>商品を移動させるリストを選択してください。</p>
          <div class="g-lg-flow-sm g-lg-align-fc g-block-xs">
            <div class="g-inputGroup">
              <div class="g-select">
                <i class="g-i g-i-dropdown" aria-hidden="true"></i>
                <div id="moveDrop">
                  <select
                    id="wishlistDropDownMove"
                    aria-label="お気に入り商品リストの選択"
                    v-model="toName"
                  >
                    <option
                      :vaule="li"
                      defaultwishlist="false"
                      v-for="(li, index) in moveNameList"
                      :key="index"
                    >
                      {{ li }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="g-sm-foot-v g-sm-foot-lg">
              <button
                class="g-btn g-btn-brand g-btn-w-sm"
                type="button"
                @click="clickEntry"
              >
                <span>移動する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="g-modal_spacer"></div>
    </div>
  </div>

  <div
    style="display: none"
    class="g-modal"
    id="p-createCompleteModal"
    role="dialog"
    aria-hidden="false"
    aria-modal="true"
    aria-labelledby="p-createCompleteModal_h"
  >
    <div class="g-modal_backdrop">
      <div class="g-modal_spacer"></div>
      <div class="g-modal_el">
        <header class="g-modal_head">
          <p class="g-modal_h" id="p-createCompleteModal_h">リストを作成</p>
          <button
            class="g-modal_close"
            type="button"
            aria-label="閉じる"
            aria-expanded="true"
            aria-controls="p-createCompleteModal"
          >
            <i class="g-i g-i-close" aria-hidden="true"></i>
          </button>
        </header>
        <div class="g-modal_body">
          <div class="g-error" aria-hidden="true" style="display: block">
            <p class="g-error_h error-msg">
              お気に入り商品リストの名前を入力してください。
            </p>
          </div>
        </div>
      </div>
      <div class="g-modal_spacer"></div>
    </div>
  </div>
  <!--显示更改名字画面-->
  <div
    :style="{ display: changeListName1 }"
    class="g-modal"
    role="dialog"
    aria-hidden="false"
    aria-labelledby="p-changeModal_h"
  >
    <div class="g-modal_backdrop">
      <div class="g-modal_spacer"></div>
      <div class="g-modal_el">
        <header class="g-modal_head">
          <p class="g-modal_h" id="p-changeModal_h">リスト名を変更</p>
          <button
            class="g-modal_close"
            type="button"
            aria-label="閉じる"
            aria-expanded="true"
            aria-controls="p-changeModal"
            @click="changeListName2"
          >
            <i class="g-i g-i-close" aria-hidden="true"
              ><span class="material-symbols-outlined"> close </span></i
            >
          </button>
        </header>

        <div class="g-modal_body">
          <div
            class="g-error"
            aria-hidden="true"
            :style="{ display: errorDisplay }"
          >
            <p class="g-error_h error-msg">
              {{ errorImage }}
            </p>
          </div>
          <p>リスト名を変更してください。</p>
          <div class="g-lg-flow-sm g-lg-align-fc g-block-xs">
            <div class="g-sm-inputGroup">
              <input
                id="changeWishListName"
                class="g-input"
                type="text"
                ref="myRef"
                size="30"
                v-model="wishListName"
                aria-required="true"
                aria-describedby="p-favorites2_alert"
                data-validation-rules='[{"rule":"length","max":20}]'
              />
              <div
                class="g-formGrid_error-alone"
                id="p-favorites2_alert"
                role="alert"
              ></div>
            </div>
            <div class="g-sm-foot-v g-sm-foot-lg">
              <button
                class="g-btn g-btn-brand g-btn-w-sm"
                type="button"
                @click="clickwishlist"
                aria-expanded="false"
              >
                <span>変更する</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="g-modal_spacer"></div>
    </div>
  </div>
</template>

<script lang="ts">
const axios = require("axios");
import { log } from "console";
import { ElMessage } from "element-plus";
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  ref,
  computed,
  watchEffect,
  onMounted,
} from "vue";
import { useStore } from "../../../store/index";
export default defineComponent({
  name: "likeGoods",
  components: {},
  //这里 我想通过href来跳转
  // methods:{
  //     change(){
  //       document.querySelector("#header").scrollIntoView(rue);
  //     }
  // }

  setup() {
    // const axios = require("axios");
    const headers = { Accept: "application/json" };
    const store = useStore();

    const data = reactive({
      createListName: "", //增加的listname
      showListName: "中意的商品", //显示的listname
      wishListName: "中意的商品", //增加的listname
      changeListName1: "none", //改变名字的显示和隐藏
      moveModal: "none", //移动的显示和隐藏
      moveNameList: [],
      checkboxList: [], //勾选的id
      allSelected: false, //全选框是否选中
      toName: "", //转移的对象名字
      errorImage: "", //显示错误信息
      errorDisplay: "none", //控制显示错误信息
      errorMove: "none", //控制显示错误信息
    });
    const myRef = ref(null);
    onMounted(() => {
      store.dispatch("getLikeList", data.showListName);
      console.dir("myref", myRef.value);
    });
    //获取likeliest和likelistname
    const getLikeList = computed(() => {
      return store.getters.getLikeList;
    });
    const getListName = computed(() => {
      console.log("删除之后的name", getListName);

      return store.getters.getListName;
    });

    //获取新list的名字
    async function clickcreate() {
      const name = data.createListName;

      const reviewRating = await fetch("http://localhost:3000/listName", {
        headers,
      });
      const j = await reviewRating.json();
      const jj = j.filter((order) => order.storeName == name);

      if (!name) {
        ElMessage({
          showClose: true,
          message: "请输入  不能为空",
          type: "error",
        });
      } else if (jj.length !== 0) {
        ElMessage({
          showClose: true,
          message: "输入重复名字",
          type: "error",
        });
      } else {
        axios
          .post(
            "http://localhost:3000/listName",
            { storeName: name },
            { headers }
          )
          .then(function (response) {
            ElMessage({
              showClose: true,
              message: "成功加入",
              type: "success",
            });
            data.createListName = "";
          });

        //重新加载listname数据
        store.dispatch("setListName");
      }
    }
    //是否展示 更改名字和删除名字
    const isShow = computed(() => {
      if (data.showListName == "中意的商品") {
        return "none";
      } else {
        return "block";
      }
    });
    //更改名字wwwwww
    async function clickwishlist() {
      const newData = data.wishListName;
      const oldData = data.showListName;
      data.errorDisplay = "block";
      //获取listName 进行判断
      const reviewName = await fetch("http://localhost:3000/listName", {
        headers,
      });
      const nameList = await reviewName.json();
      const name = nameList.filter((order) => newData === order.storeName);

      if (newData == "") {
        data.errorImage = "输入不能为空，请输入list名字";
      } else if (newData.length >= 4) {
        data.errorImage = "输入名字太长，请输入字符长度小于四的";
      } else if (name.length !== 0) {
        data.errorImage = "名字已经存在了，请换一个";
      } else {
        const nameList22 = nameList.filter(
          (order) => oldData === order.storeName
        );

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
        //改名
        if (dataList22.length > 0) {
          dataList22.filter((order) => {
            order.storeName = newData;

            axios.put("http://localhost:3000/likeGoodsList/" + order.id, order);
          });
        }
        data.errorImage = "更改成功！！";
        data.changeListName1 = "none";
        data.showListName = "中意的商品";
        store.dispatch("getLikeList", data.showListName);
      }
    }
    //跳到更改名字处
    function changeListName() {
      data.changeListName1 = "block";
      data.errorDisplay = "none";
      data.wishListName = data.showListName;
    }
    //返回页面
    function changeListName2() {
      data.changeListName1 = "none";
      data.showListName = "中意的商品";
    }
    //删除名字
    function deleteListName() {
      store.dispatch("deleteListName", data.showListName);
      //删除名字之后 重新获取数据
      data.showListName = "中意的商品";
      store.dispatch("getLikeList", data.showListName);
    }

    //全选
    //在input checkbox中  没有设置value时 v-model 为true或者false 设置value时 钩上 v-model的值为value
    function selectAll() {
      if (data.allSelected) {
        data.checkboxList = getLikeList.value.map((u) => u.id);
      } else {
        data.checkboxList = [];
      }
    }

    watchEffect(
      (onInvalidate) => {
        //使用这个函数的时候会执行一次里边的代码,因为这里打印了message.value message是ref响应式变量 所以后续检测到message值的变化，就会再次执行effect里边的代码
        store.dispatch("setLikeList", data.showListName);
        console.log("showListName 被修改了", data.showListName);
        // if (getLikeList)
        //如果是下边这种情况，没有message.value 那么只会在注册effect的时候执行一次，后续不再执行
        // console.log("这次没有message被修改了")
        onInvalidate(() => {
          //当组件失效，watchEffect被主动停止或者副作用即将重新执行时，这个函数会执行
        });
      },
      {
        flush: "post", //在组件更新后触发，这样你就可以访问更新的 DOM。
        // flush: 'pre',//默认值，在组件更新前触发
        // flush: 'sync',//同步触发，低效
      }
    );
    // const stop = watchEffect();
    //stop() 可以停止监听

    //监视checkboxList
    watchEffect(
      (onInvalidate) => {
        console.log("####", data.toName);

        const all = getLikeList.value.map((u) => u.id);
        if (all.length == 0 || data.checkboxList.length == 0) {
          data.allSelected = false;
        }

        //判断两个数组是否相等，这两个数组不能有重复
        else if (all.length == data.checkboxList.length) {
          let i = 0;
          all.forEach((item) => {
            data.checkboxList.forEach((item2) => {
              if (item == item2) {
                i++;
              }
            });
          });
          if (i == all.length) {
            data.allSelected = true;
          } else {
            data.allSelected = false;
          }
        } else {
          data.allSelected = false;
        }

        onInvalidate(() => {
          //当组件失效，watchEffect被主动停止或者副作用即将重新执行时，这个函数会执行
        });
      },
      {
        flush: "post", //在组件更新后触发，这样你就可以访问更新的 DOM。
        // flush: 'pre',//默认值，在组件更新前触发
        // flush: 'sync',//同步触发，低效
      }
    );
    //打开移动页面
    function clickMoveentry() {
      data.errorMove = "none";
      data.moveModal = "block";
      data.toName = data.moveNameList[0];
      const arr = getListName.value.map((ss) => ss.storeName);
      arr.map((val: string, i: number) => {
        if (val === data.showListName) {
          arr.splice(i, 1);
        }
      });
      data.toName = arr[0];
      data.moveNameList = arr;
    }
    //关闭 移动画面
    function closeMoveentry() {
      data.moveModal = "none";
    }
    //移动数据
    async function clickEntry() {
      data.errorMove = "block";

      if (data.checkboxList.length > 0) {
        const reviewRating = await fetch(
          "http://localhost:3000/likeGoodsList",
          {
            headers,
          }
        );
        const likeGoodsList = await reviewRating.json();

        likeGoodsList.forEach((element) => {
          data.checkboxList.forEach((element2) => {
            if (element2 === element.id) {
              element.storeName = data.toName;
              axios.put(
                "http://localhost:3000/likeGoodsList/" + element.id,
                element
              );
              data.errorImage = "数据成功移到" + data.toName + "中";

              data.moveModal = "none";
            }
          });
        });
        //取消更新后的勾选
        data.checkboxList = [];
        store.dispatch("setLikeList", data.showListName);
        console.log("更新数据显示", data.showListName);
      } else {
        data.errorImage = "请至少选择一个商品";
      }
    }
    //删除数据
    async function deleteData() {
      data.checkboxList;
      console.log("1111@", data.checkboxList);

      if (data.checkboxList.length > 0) {
        for (let i = 0; i < data.checkboxList.length; i++) {
          await fetch(
            "http://localhost:3000/likeGoodsList/" + data.checkboxList[i],
            {
              method: "DELETE",
            }
          );
        }
        store.dispatch("getLikeList", data.showListName);
      } else {
        alert("请至少选择一个商品");
      }
    }
    //送到cart里
    async function toCart(id) {
      const likeGoodsList1 = getLikeList.value.filter(
        (order) => (order.id = id)
      );
      const likeGoodsList = likeGoodsList1[0];
      console.log("cart=========", getLikeList.value[0]);

      delete likeGoodsList.id;

      const headers2 = {
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      };
      axios
        .post("http://localhost:3000/user", likeGoodsList, { headers2 })
        .then(function (response) {
          console.log(response);
        });
      await fetch("http://localhost:3000/likeGoodsList/" + id, {
        method: "DELETE",
      });
      store.dispatch("getLikeList", data.showListName);

      console.log("要返回的数据", likeGoodsList);
    }

    return {
      ...toRefs(data),
      clickcreate,
      getLikeList,
      getListName,
      isShow,
      clickwishlist,
      myRef,
      changeListName,
      changeListName2,
      deleteListName,
      selectAll,
      clickMoveentry,
      closeMoveentry,
      clickEntry,
      deleteData,
      toCart,
    };
  },
});
</script>
<style scoped>
.g-layout-full,
.g-layout-narrow {
  display: grid;

  grid-template-rows: auto auto auto auto;

  grid-template-columns: 100%;
}
.g-inner,
.g-lg-inner {
  width: 100%;
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
}
.g-bodyArea {
  flex-grow: 1;
  flex-shrink: 0;
}
.g-layout-full .g-layout_lead,
.g-layout-narrow .g-layout_lead {
  grid-row: 1;

  grid-column: 1;
}

.g-layout_lead {
  margin-bottom: calc(40px - 0.75rem);
}
.g-breadcrumb {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 10px;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.g-breadcrumb .swiper-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0, 0, 0);
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;

  transition-property: transform, -webkit-transform;

  box-sizing: content-box;
}
ul,
ol {
  padding: 0;
  list-style: none;
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
.g-breadcrumb .swiper-slide {
  width: auto;
}
.g-breadcrumb a {
  color: #009e96;
}
a {
  text-decoration: none;
}

.g-layout-narrow .g-layout_head,
.g-layout-narrow .g-layout_body {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.g-layout-full .g-layout_head,
.g-layout-narrow .g-layout_head {
  grid-row: 2;

  grid-column: 1;
}

.g-layout_head {
  margin-bottom: 35px;
}
h1 {
  font-size: 3rem;
}
.g-layout-narrow .g-layout_head,
.g-layout-narrow .g-layout_body {
  width: 100%;
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
}
.g-layout-full .g-layout_body,
.g-layout-narrow .g-layout_body {
  grid-row: 3;

  grid-column: 1;
}
.g-inputGroup,
.g-lg-inputGroup {
  flex-direction: row;
}

.g-inputGroup,
.g-lg-inputGroup {
  display: flex;
}
* {
  box-sizing: border-box;
}
.g-input[size="30"] {
  max-width: calc(0.65em * 30 + 30px);
}
.g-input[size] {
  width: 100%;
}

.g-input-sm {
  padding: 8px 11px 7px;
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
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
.g-inputGroup > *:nth-child(n + 2),
.g-lg-inputGroup > *:nth-child(n + 2) {
  margin-left: 10px;
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
.p-createList .g-btn {
  height: 36px;
}

.g-btn-sm,
.g-lg-btn-sm {
  font-size: 1.4rem;
  line-height: 1.42857;
}
.g-btn-brand,
.g-lg-btn-brand {
  border-color: #009e96;
  background-color: #009e96;
}
.g-btn-brand,
.g-btn-cv,
.g-btn-cancel,
.g-lg-btn-brand,
.g-lg-btn-cv,
.g-lg-btn-cancel {
  color: #fff;
}
.g-btn,
.g-lg-btn {
  font-weight: normal;
  display: inline-flex;
  padding: 0;
  transition: background-color 0.2s;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;

  appearance: none;
}
.g-btn > span:only-child,
.g-lg-btn > span:only-child {
  padding: 5px 10px;
  transform: none;
}

.g-inputGroup .g-btn > span,
.g-lg-inputGroup .g-btn > span {
  min-height: 0;
}
.g-btn > span,
.g-lg-btn > span {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.g-block-sm,
.g-lg-block-sm {
  margin-top: 40px;
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
.g-h-2,
.g-lg-h-2 {
  font-size: 2.4rem;
  margin-bottom: calc(30px - 0.6rem);
}

.g-h-1,
.g-lg-h-1,
.g-h-2,
.g-lg-h-2,
.g-h-3,
.g-lg-h-3,
.g-h-4,
.g-lg-h-4,
.g-h-5,
.g-lg-h-5,
.g-h-6,
.g-lg-h-6 {
  font-weight: bold;
}
.g-inputGroup,
.g-lg-inputGroup {
  flex-direction: row;
}

.g-inputGroup,
.g-lg-inputGroup {
  display: flex;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-select-sm .g-i {
  right: 7px;
}

.g-select .g-i {
  font-size: 1.8rem;
}
.g-select .g-i {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;

  color: #009e96;
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-family: "icon";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;
  speak: none;
  -webkit-font-smoothing: antialiased;
}
.g-select-sm select {
  height: 34px;
  padding-right: 33px;
}
.g-select select {
  width: 100%;

  padding: 0 39px 0 14px;
  vertical-align: bottom;
  border-width: 0;
  background-color: transparent;

  appearance: none;
}
input,
textarea,
select,
optgroup,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
.g-block-sm,
.g-lg-block-sm {
  margin-top: 40px;
}
.p-listControl {
  display: flex;
}
.g-checkable,
.g-lg-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

button,
input[type="radio"],
input[type="checkbox"] {
  cursor: pointer;
}
input,
textarea,
select,
optgroup,
button {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
}
.g-checkable > span,
.g-lg-checkable > span {
  line-height: normal;
  display: inline-flex;
  vertical-align: bottom;
  align-items: center;
}
.g-inputGroup > *:nth-child(n + 2),
.g-lg-inputGroup > *:nth-child(n + 2) {
  margin-left: 10px;
}
[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled="true"]) {
  cursor: pointer;
}
.g-fh,
.g-lg-fh {
  height: 100%;
}

.g-btn-sm,
.g-lg-btn-sm {
  font-size: 1.4rem;
  line-height: 1.42857;
}
.g-btn-em,
.g-lg-btn-em {
  color: #009e96;
}
.g-inputGroup .g-inputGroup_static,
.g-lg-inputGroup .g-inputGroup_static {
  align-self: center;
  flex-shrink: 0;
}
.g-block-sm,
.g-lg-block-sm {
  margin-top: 40px;
}
[aria-hidden="true"]:not([data-breakpoints]):not([data-accordion-more]):not(.g-i):not(.g-s) {
  display: block;
}
.p-listControl_edit {
  margin-left: 25px;
}
.p-listControl_edit {
  line-height: 1;
  display: flex;
  align-items: center;
}
.p-listControl_edit > div {
  margin-right: 20px;
}
.g-linkList,
.g-lg-linkList {
  display: inline-flex;
  flex-wrap: wrap;
}
.g-link,
.g-lg-link {
  display: inline-flex;
  align-items: center;
}
.g-mt-20,
.g-lg-mt-20 {
  margin-top: 20px !important;
}

.g-mb-20,
.g-lg-mb-20 {
  margin-bottom: 20px !important;
}

.g-itemList-border,
.g-lg-itemList-border {
  padding-top: 20px;
  padding-bottom: 20px;
}
.g-itemList-border,
.g-lg-itemList-border {
  border: 0 solid #dbdbdb;
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.g-media-lg.g-media-lead.g-media-tail,
.g-media-lg.g-media-lead.g-lg-media-tail,
.g-media-lg.g-lg-media-lead.g-media-tail,
.g-media-lg.g-lg-media-lead.g-lg-media-tail,
.g-lg-media-lg.g-media-lead.g-media-tail,
.g-lg-media-lg.g-media-lead.g-lg-media-tail,
.g-lg-media-lg.g-lg-media-lead.g-media-tail,
.g-lg-media-lg.g-lg-media-lead.g-lg-media-tail {
  grid-template-columns: auto minmax(160px, 13.33333%) 1fr auto;
}
.g-media-tail.g-media-lead .g-media_lead,
.g-media-tail.g-lg-media-lead .g-media_lead,
.g-lg-media-tail.g-media-lead .g-media_lead,
.g-lg-media-tail.g-lg-media-lead .g-media_lead {
  grid-row: 1;

  grid-column: 1;
}
.g-media .g-media_lead,
.g-lg-media .g-media_lead {
  display: block;
  margin-right: 10px;
}
.g-align-im,
.g-lg-align-im {
  align-self: center !important;
}
.g-checkable,
.g-lg-checkable {
  line-height: 1;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.g-media-tail.g-media-lead .g-media_head,
.g-media-tail.g-lg-media-lead .g-media_head,
.g-lg-media-tail.g-media-lead .g-media_head,
.g-lg-media-tail.g-lg-media-lead .g-media_head {
  grid-row: 1;

  grid-column: 2;
}
.g-media-lg .g-media_head,
.g-lg-media-lg .g-media_head {
  margin-right: 12.5%;
}
.g-media-tail.g-media-lead .g-media_body,
.g-media-tail.g-lg-media-lead .g-media_body,
.g-lg-media-tail.g-media-lead .g-media_body,
.g-lg-media-tail.g-lg-media-lead .g-media_body {
  grid-row: 1;

  grid-column: 3;
}
.g-media .g-media_h,
.g-lg-media .g-media_h {
  font-size: 1rem;
  line-height: 1.5;
}

.g-units-sm > *:nth-child(n + 2):not(.g-units_ignore),
.g-lg-units-sm > *:nth-child(n + 2):not(.g-units_ignore) {
  margin-top: 10px;
}

.g-browser-helvetica .g-price,
.g-browser-helvetica .g-lg-price {
  letter-spacing: 0.03em;
}

.g-price,
.g-lg-price {
  font-size: 1.5rem;
}
.g-price,
.g-lg-price {
  font-family: "Helvetica Neue", Arial, sans-serif;

  font-weight: bold;
  color: #000;
}
.g-flow,
.g-lg-flow {
  margin-bottom: -15px;
  margin-left: -15px;
}
.g-flow,
.g-lg-flow,
.g-flow-0,
.g-lg-flow-0,
.g-flow-xs,
.g-lg-flow-xs,
.g-flow-sm,
.g-lg-flow-sm,
.g-flow-lg,
.g-lg-flow-lg,
.g-flow-xl,
.g-lg-flow-xl {
  display: flex;
  flex-wrap: wrap;
}
.g-align-gm,
.g-lg-align-gm {
  align-items: center !important;
}
.g-media-tail.g-media-lead .g-media_tail,
.g-media-tail.g-lg-media-lead .g-media_tail,
.g-lg-media-tail.g-media-lead .g-media_tail,
.g-lg-media-tail.g-lg-media-lead .g-media_tail {
  grid-row: 2;
}
.p-favoriteItem .g-media_tail {
  grid-column: 1/4 !important;
}
.g-media .g-media_tail,
.g-sm-media .g-media_tail {
  display: block;
  margin-top: 10px;
}
.g-align-tc,
.g-sm-align-tc {
  text-align: center !important;
}
.g-position-r,
.g-sm-position-r {
  position: relative;
}
.cartBtnArea {
  position: relative;
}
.g-fw,
.g-sm-fw {
  width: 100% !important;
}
.g-itemList .g-itemList_item:nth-child(n + 2),
.g-sm-itemList .g-itemList_item:nth-child(n + 2) {
  margin-top: 15px;
  padding-top: 15px;
}
.g-itemList .g-itemList_item:nth-child(n + 2),
.g-sm-itemList .g-itemList_item:nth-child(n + 2) {
  border: 0 solid #dbdbdb;
  border-top-width: 1px;
}
.g-modal .g-modal_backdrop,
.g-lg-modal .g-modal_backdrop {
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  background-color: rgba(204, 204, 204, 0.9);
  align-items: center;
}
.g-modal .g-modal_spacer,
.g-lg-modal .g-modal_spacer {
  flex: 1 1;
  min-height: 20px;
}
.g-modal .g-modal_el,
.g-lg-modal .g-modal_el {
  width: 100%;
  max-width: 740px;
  flex-shrink: 0;
}
.g-modal .g-modal_head,
.g-lg-modal .g-modal_head {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.g-modal .g-modal_head,
.g-lg-modal .g-modal_head {
  position: sticky;
  z-index: 12;
  top: 0;
  display: flex;
  background-color: #009e96;
  justify-content: space-between;
}
.g-modal .g-modal_h,
.g-lg-modal .g-modal_h {
  font-size: 1.8rem;
  line-height: 1.5;
  padding: 20px;
  color: #fff;
}
.g-modal .g-modal_close,
.g-lg-modal .g-modal_close {
  font-size: 1.4rem;
  padding: 20px;
}
.g-modal .g-modal_close,
.g-lg-modal .g-modal_close {
  line-height: 1;
  color: #fff;
  border-width: 0;
  background-color: transparent;

  appearance: none;
}
.g-i {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  font-family: "icon";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  letter-spacing: 0;
  text-transform: none;
  pointer-events: none;
  speak: none;
  -webkit-font-smoothing: antialiased;
}
.g-modal .g-modal_body,
.g-lg-modal .g-modal_body {
  padding: 30px 30px 40px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #fff;
}
.g-error:first-child {
  margin-top: 0;
  margin-bottom: 20px;
}
.g-error {
  padding: 20px px;
}
.g-error {
  border-radius: 5px;
  background-color: #fcf0f1;
}
.g-error_h:last-child {
  margin-bottom: 0;
}
.g-error_h {
  font-weight: bold;
  margin-bottom: 10px;
  color: #eb6157;
}
.g-flow-sm,
.g-lg-flow-sm {
  margin-bottom: -10px;
  margin-left: -10px;
}
.g-block-xs,
.g-lg-block-xs {
  margin-top: 30px;
}

.g-align-fc,
.g-lg-align-fc {
  justify-content: center !important;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
.g-input[size="30"] {
  max-width: calc(0.65em * 30 + 30px);
}
.g-formGrid_error-alone:empty,
.g-lg-formGrid_error-alone:empty {
  display: none;
}

.g-formGrid_error-alone,
.g-lg-formGrid_error-alone {
  font-size: 1.2rem;
  line-height: 1.5;
}

.g-formGrid_error-alone,
.g-lg-formGrid_error-alone {
  margin-top: 7px;
  color: #eb6157;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
.g-btn-w-sm,
.g-lg-btn-w-sm {
  width: auto;
  min-width: 106px;
}
.g-modal .g-modal_backdrop,
.g-lg-modal .g-modal_backdrop {
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  background-color: rgba(204, 204, 204, 0.9);
  align-items: center;
}
.g-modal .g-modal_spacer,
.g-lg-modal .g-modal_spacer {
  flex: 1 1;
  min-height: 20px;
}
.g-modal .g-modal_el,
.g-lg-modal .g-modal_el {
  width: 100%;
  max-width: 740px;
  flex-shrink: 0;
}
.g-modal .g-modal_head,
.g-lg-modal .g-modal_head {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.g-modal .g-modal_head,
.g-lg-modal .g-modal_head {
  position: sticky;
  z-index: 12;
  top: 0;
  display: flex;
  background-color: #009e96;
  justify-content: space-between;
}
.g-modal .g-modal_h,
.g-lg-modal .g-modal_h {
  font-size: 1.8rem;
  line-height: 1.5;
  padding: 20px;
  color: #fff;
}

[aria-expanded][aria-controls]:not([data-breakpoints]):not([disabled]):not([aria-disabled="true"]) {
  cursor: pointer;
}

.g-modal .g-modal_close,
.g-lg-modal .g-modal_close {
  font-size: 1.4rem;
  padding: 20px;
}

.g-modal .g-modal_close,
.g-lg-modal .g-modal_close {
  line-height: 1;
  color: #fff;
  border-width: 0;
  background-color: transparent;

  appearance: none;
}
.g-modal .g-modal_body,
.g-lg-modal .g-modal_body {
  padding: 30px 30px 40px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #fff;
}
.g-flow-sm,
.g-lg-flow-sm {
  margin-bottom: -10px;
  margin-left: -10px;
}

.g-flow,
.g-lg-flow,
.g-flow-0,
.g-lg-flow-0,
.g-flow-xs,
.g-lg-flow-xs,
.g-flow-sm,
.g-lg-flow-sm,
.g-flow-lg,
.g-lg-flow-lg,
.g-flow-xl,
.g-lg-flow-xl {
  display: flex;
  flex-wrap: wrap;
}

.g-block-xs,
.g-lg-block-xs {
  margin-top: 30px;
}

.g-align-fc,
.g-lg-align-fc {
  justify-content: center !important;
}
.g-inputGroup,
.g-lg-inputGroup {
  display: flex;
}
.g-select {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  background-color: #fff;
}
.g-select .g-i {
  font-size: 1.8rem;
  right: 16px;
}
.g-select .g-i {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;

  color: #009e96;
}
.g-select select {
  height: 48px;
  padding-right: 49px;
}
.g-select select {
  width: 100%;

  padding: 0 39px 0 14px;
  vertical-align: bottom;
  border-width: 0;
  background-color: transparent;

  appearance: none;
}
.g-flow-sm > *,
.g-lg-flow-sm > * {
  margin-bottom: 10px;
  margin-left: 10px;
}
.g-btn-w-sm,
.g-lg-btn-w-sm {
  width: auto;
  min-width: 106px;
}
.g-btn,
.g-lg-btn {
  font-size: 1rem;
  line-height: 1.5;
}
.g-btn-brand,
.g-lg-btn-brand {
  border-color: #009e96;
  background-color: #009e96;
}

.g-btn-brand,
.g-btn-cv,
.g-btn-cancel,
.g-lg-btn-brand,
.g-lg-btn-cv,
.g-lg-btn-cancel {
  color: #fff;
}
</style>
