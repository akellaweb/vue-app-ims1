<template>
  <div class="tabs-content">
    <div class="tab-content">
      <div class="row">
        <div class="col-md-6  col-xs-12">
          <div class="tab-img">
            <img v-if="item.PREVIEW_PICTURE" :src="`http://i-ms.ru/${item.PREVIEW_PICTURE.SRC}`" alt="" />
          </div>
        </div>
        <div class="col-md-6  col-xs-12">
          <div class="tab-content-inner">
            <div class="ttitle">
              <h3 v-html="item.NAME"></h3>
            </div>
            <div class="tlist" v-html="item.PREVIEW_TEXT"></div>
            <div class="tmore" v-if="hasLink">
              <a
                 :href="link"
                 target="_blank" class="btn-site">Посмотреть весь каталог</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    item: {
      type: Object,
    },
  },
  mounted() {
  },
  computed: {
    hasLink() {
      return this.item.PROPERTIES && this.item.PROPERTIES.LINK;
    },
    link() {
      return this.item.PROPERTIES.LINK.VALUE;
    },
  },
};
</script>
