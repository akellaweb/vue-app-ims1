<template>
  <div class="col-md-3  col-xs-6">
    <div class="pr-item">
      <img :src="`https://i-ms.ru${item.PREVIEW_PICTURE.SRC}`"
           :alt="item.PREVIEW_PICTURE.ALT" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerCard',
  props: {
    item: {
      type: Object,
    },
  },
  mounted() {
  },
};
</script>

<style scoped>
.pr-item {
  margin-bottom: 30px;
}
</style>
