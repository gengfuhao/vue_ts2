<template>
  <div class="main__inner-wrapper" v-show="exhibit">
    <div class="g-bodyArea g-inner">
      <div class="g-main">
        <div class="g-layout-sidebar">
          <!-- <div class="g-layout_lead">
            <div class="yCmsComponent">
              <div class="g-sm-full g-breadcrumb">
                <div class="swiper-container">
                  <ol
                    class="swiper-wrapper"
                    itemscope=""
                    itemtype="http://schema.org/BreadcrumbList"
                  >
                    <li
                      class="swiper-slide"
                      itemprop="itemListElement"
                      itemscope=""
                      itemtype="http://schema.org/ListItem"
                    >
                      <a href="/ec" itemprop="item"
                        ><span id="myPageBreadCrumb1" itemprop="name"
                          >ホーム</span
                        ></a
                      >
                      <meta itemprop="position" content="1" />
                    </li>
                    <li
                      class="swiper-slide"
                      itemprop="itemListElement"
                      itemscope=""
                      itemtype="http://schema.org/ListItem"
                    >
                      <span itemprop="item" aria-current="page"
                        ><span id="myPageBreadCrumb2" itemprop="name"
                          >マイページ</span
                        ></span
                      >
                      <meta itemprop="position" content="2" />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div> -->
          <div class="g-layout_head"></div>
          <div class="g-layout_sidebar g-sm-mb-20">
            <div class="p-welcome">
              <div class="g-butterfly g-myPageCorpKbnSpaceBottom">
                <h1>
                  <span class="g-myPageMembersCardCorpKbnNotCorporate"
                    >ニトリメンバーズ　ネット会員</span
                  >
                </h1>
                <p><a class="g-link-t" href="/ec/logout">ログアウト</a></p>
              </div>
              <ul class="g-list-note g-unit-xs">
                <li>
                  <a href="/ec/userguide/nitorinet/#member"
                    ><span class="g-list-note">会員種別について</span
                    ><i
                      class="g-i g-i-info about-corpkbn"
                      aria-hidden="true"
                    ></i
                  ></a>
                </li>
              </ul>
              <div class="g-butterfly">
                <h1><span>耿富浩</span>さんの会員証</h1>
              </div>
              <div class="p-barcode">
                <img
                  id="js-bar-code"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyAQAAAAAxKqlMAAAAL0lEQVR42mP4Oa+iTnIe+/wZdXWVM+exVf5IfPhw/rP6mfMZRmVGZUZlRmVGnAwAyeO857mPrf4AAAAASUVORK5CYII="
                />
                <p id="memberCardNumber">2200758582133</p>
              </div>
              <dl class="p-pointInfo">
                <dt>現在のポイント</dt>
                <dd class="g-digit p-pointInfo_available">0<span>pt</span></dd>
                <dt>今年失効するポイント</dt>
                <dd class="g-digit p-pointInfo_lapse">0<span>pt</span></dd>
              </dl>
              <ul class="g-list-note g-unit-xs">
                <li>毎日午前9時以降に順次更新されます</li>
              </ul>
            </div>
          </div>
          <div class="g-layout_body">
            <ul class="g-sm-lineGrid-1 g-sm-lineGrid-rc g-lg-grid-3">
              <li
                class="g-lineGrid_item g-grid_item"
                @click="isClick"
                v-for="li in list"
                :key="li.path"
              >
                <router-link :to="li.path">
                  <a
                    class="g-lg-pane g-lg-pane-border g-lg-pane-thick p-mypagePane g-lg-fh g-hover"
                  >
                    <div
                      class="g-sm-btn g-sm-btn-item g-lg-card g-lg-align-tc p-iconText"
                    >
                      <div class="g-card_head">
                        <span
                          class="material-symbols-outlined g-s g-s-shop g-hover_img"
                        >
                          event
                        </span>
                      </div>
                      <span class="g-card_body">{{ li.meta.title }}</span
                      ><i
                        class="g-i g-i-arrow-r g-only-sm"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "myAccount",
  components: {},
  setup() {
    const router = useRouter();
    const list = router.getRoutes().filter((x) => x.meta.isShow);

    const data = reactive({
      exhibit: true,
    });
    const isClick = () => {
      data.exhibit = false;
    };
    return { list, isClick, ...toRefs(data) };
  },
});
</script>
<style scoped>
@media (min-width: 721px) {
  .p-iconText .g-s-history {
    font-size: 10rem;
  }
  .g-hover img,
  .g-hover .g-hover_img,
  .g-lg-hover img,
  .g-lg-hover .g-hover_img {
    font-size: 5rem;
    color: rgb(197, 214, 213);
    background-color: #009e96;
    transition: opacity 0.2s;

    backface-visibility: hidden;
  }
  .p-mypagePane {
    padding: 15px;
  }
  .g-butterfly,
  .g-lg-butterfly {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .g-butterfly,
  .g-lg-butterfly {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .g-layout-sidebar .g-layout_sidebar {
    grid-row: 3/5;
    grid-column: 1;
    margin-right: 40px;
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
  .g-layout-sidebar {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 270px 1fr;
  }
  .g-layout_head {
    margin-bottom: 35px;
  }
  .g-layout-sidebar .g-layout_head {
    grid-row: 2;
    grid-column: 1/3;
  }
  .p-welcome h1 span {
    font-size: 1.8rem;
    line-height: 1.5;
  }
  .g-link-t,
  .g-lg-link-t {
    color: #009e96;
  }
  .g-unit-xs,
  .g-lg-unit-xs {
    margin-top: 5px !important;
  }
  .g-list-note,
  .g-lg-list-note {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  .g-list-note,
  .g-lg-list-note {
    text-indent: -1em;
    color: #808080;
  }
  .g-list-note > li,
  .g-lg-list-note > li {
    margin-left: 1em;
  }
  .p-welcome h1 span {
    font-size: 1.8rem;
    line-height: 1.5;
  }
  .p-barcode {
    font-size: 1.6rem;
    line-height: 1.5;
  }
  .p-barcode {
    font-weight: bold;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 5px;
    text-align: center;
  }
  .p-barcode img {
    height: 45px;
  }

  .g-unit-xs,
  .g-lg-unit-xs {
    margin-top: 5px !important;
  }

  .g-list-note,
  .g-lg-list-note {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  .g-list-note,
  .g-lg-list-note {
    text-indent: -1em;
    color: #808080;
  }
  .g-layout-sidebar .g-layout_body {
    grid-row: 3;

    grid-column: 2;
  }
  .g-lg-grid-1,
  .g-lg-grid-2,
  .g-lg-grid-3,
  .g-lg-grid-4,
  .g-lg-grid-5,
  .g-lg-grid-6 {
    display: flex;
    flex-wrap: wrap;
  }
  .g-lg-grid-1 > .g-grid_item:nth-child(-n + 1),
  .g-lg-grid-2 > .g-grid_item:nth-child(-n + 2),
  .g-lg-grid-3 > .g-grid_item:nth-child(-n + 3),
  .g-lg-grid-4 > .g-grid_item:nth-child(-n + 4),
  .g-lg-grid-5 > .g-grid_item:nth-child(-n + 5),
  .g-lg-grid-6 > .g-grid_item:nth-child(-n + 6) {
    padding-top: 0;
  }
  .g-lg-grid-1 > .g-grid_item:nth-child(-n + 1),
  .g-lg-grid-2 > .g-grid_item:nth-child(-n + 2),
  .g-lg-grid-3 > .g-grid_item:nth-child(-n + 3),
  .g-lg-grid-4 > .g-grid_item:nth-child(-n + 4),
  .g-lg-grid-5 > .g-grid_item:nth-child(-n + 5),
  .g-lg-grid-6 > .g-grid_item:nth-child(-n + 6) {
    padding-top: 0;
  }

  .g-lg-grid-1 > .g-grid_item:nth-child(1n + 1),
  .g-lg-grid-2 > .g-grid_item:nth-child(2n + 1),
  .g-lg-grid-3 > .g-grid_item:nth-child(3n + 1),
  .g-lg-grid-4 > .g-grid_item:nth-child(4n + 1),
  .g-lg-grid-5 > .g-grid_item:nth-child(5n + 1),
  .g-lg-grid-6 > .g-grid_item:nth-child(6n + 1) {
    padding-left: 0;
  }
  .g-lg-grid-1 > .g-grid_item:nth-child(1n),
  .g-lg-grid-2 > .g-grid_item:nth-child(2n),
  .g-lg-grid-3 > .g-grid_item:nth-child(3n),
  .g-lg-grid-4 > .g-grid_item:nth-child(4n),
  .g-lg-grid-5 > .g-grid_item:nth-child(5n),
  .g-lg-grid-6 > .g-grid_item:nth-child(6n) {
    padding-right: 0;
  }

  .g-grid-3 > .g-grid_item,
  .g-grid-3 > .g-grid_item,
  .g-lg-grid-3 > .g-grid_item,
  .g-lg-grid-3 > .g-grid_item {
    width: calc((100% - 50px) / 3 - 0.1px);
    padding: 12.5px 12.5px;
  }
  .g-lg-grid-1 > .g-grid_item:nth-last-child(-n + 1):nth-child(1n + 1),
  .g-lg-grid-2 > .g-grid_item:nth-last-child(-n + 2):nth-child(2n + 1),
  .g-lg-grid-3 > .g-grid_item:nth-last-child(-n + 3):nth-child(3n + 1),
  .g-lg-grid-4 > .g-grid_item:nth-last-child(-n + 4):nth-child(4n + 1),
  .g-lg-grid-5 > .g-grid_item:nth-last-child(-n + 5):nth-child(5n + 1),
  .g-lg-grid-6 > .g-grid_item:nth-last-child(-n + 6):nth-child(6n + 1),
  .g-lg-grid-1 > .g-grid_item:nth-last-child(-n + 1):nth-child(1n + 1) ~ *,
  .g-lg-grid-2 > .g-grid_item:nth-last-child(-n + 2):nth-child(2n + 1) ~ *,
  .g-lg-grid-3 > .g-grid_item:nth-last-child(-n + 3):nth-child(3n + 1) ~ *,
  .g-lg-grid-4 > .g-grid_item:nth-last-child(-n + 4):nth-child(4n + 1) ~ *,
  .g-lg-grid-5 > .g-grid_item:nth-last-child(-n + 5):nth-child(5n + 1) ~ *,
  .g-lg-grid-6 > .g-grid_item:nth-last-child(-n + 6):nth-child(6n + 1) ~ * {
    padding-bottom: 0;
  }
  .g-lg-grid-1 > .g-grid_item,
  .g-lg-grid-2 > .g-grid_item,
  .g-lg-grid-3 > .g-grid_item,
  .g-lg-grid-4 > .g-grid_item,
  .g-lg-grid-5 > .g-grid_item,
  .g-lg-grid-6 > .g-grid_item {
    box-sizing: content-box;
  }

  .g-pane-thick,
  .g-lg-pane-thick {
    border-width: 2px;
    border-radius: 8px;
  }

  .g-pane-border,
  .g-lg-pane-border {
    overflow: hidden;
    border: 1px solid #dbdbdb;

    background-color: #fff;
  }

  .g-pane,
  .g-lg-pane {
    display: block;
  }

  .g-fh,
  .g-lg-fh {
    height: 100%;
  }

  .g-card,
  .g-lg-card {
    display: grid;

    grid-template-rows: auto 1fr auto;

    grid-template-columns: 100%;
  }

  .g-align-tc,
  .g-lg-align-tc {
    text-align: center !important;
  }

  .g-card .g-card_head,
  .g-lg-card .g-card_head {
    display: block;
    margin-bottom: 10px;
    grid-row: 1;
    grid-column: 1;
  }
  .g-only-sm {
    display: none !important;
  }
  .g-card .g-card_body,
  .g-lg-card .g-card_body {
    grid-row: 2;

    grid-column: 1;
    display: block;
  }
}
.g-s {
  flex-shrink: 0;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  background-size: 79em 79em;
  line-height: 1;
  letter-spacing: 0;
  pointer-events: none;
  speak: none;
}
.g-s-history {
  background-position: -29em -29em;
}
body {
  font-size: 1.4rem;
  line-height: 1.42857;
}
.p-pointInfo span {
  font-size: 1.6rem;
  margin-left: 0.2em;
}
.p-pointInfo dt:nth-of-type(n + 2),
.p-pointInfo dd:nth-of-type(n + 2) {
  margin-top: 7px;
}
.p-pointInfo dd {
  line-height: 1;
  width: 40%;
  text-align: right;
}
.p-pointInfo_lapse {
  font-size: 2rem;
}
.g-digit {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.p-pointInfo dt:nth-of-type(n + 2),
.p-pointInfo dd:nth-of-type(n + 2) {
  margin-top: 7px;
}
.p-pointInfo dt {
  width: 60%;
}
.p-pointInfo span {
  font-size: 1.6rem;
  margin-left: 0.2em;
}
.p-pointInfo_available {
  font-size: 2.6rem;
  color: #eb6157;
}
.g-digit {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: bold;
}
.p-pointInfo dd {
  line-height: 1;
  width: 40%;
  text-align: right;
}
.p-pointInfo dt {
  width: 60%;
}
.p-pointInfo {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.p-barcode img {
  display: block;
  margin: 0 auto 5px;
}
img {
  max-width: 100%;
  vertical-align: bottom;
  border: 0;
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
.g-i-info,
.g-i-blank,
.g-i-plus {
  color: #009e96;
}
.about-corpkbn {
  margin-left: 2px;
  text-indent: 0em;
}
a {
  text-decoration: none;
  color: #333;
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
.g-myPageMembersCardCorpKbnNotCorporate {
  padding: 1px 12px 1px 12px;
  background-color: #009e96;
  color: #ffffff;
}
.p-welcome h1 span {
  font-weight: bold;
  margin-right: 5px;
}
.p-welcome h1 {
  font-size: inherit;
  font-weight: normal;
}
.g-myPageCorpKbnSpaceBottom {
  padding-bottom: 5px;
}
.g-bodyArea {
  flex-grow: 1;
  flex-shrink: 0;
}
.g-layout-sidebar,
.g-layout-detail,
.g-layout-category,
.g-layout-cart,
.g-layout-purchase,
.g-layout-easyorder {
  display: grid;
}
</style>
