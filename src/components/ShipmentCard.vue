<template>
  <div class="pa-row">
    <i class="icofont-truck-alt"></i>
    <div class="pa-title">{{ item.NAME }}</div>
    <div class="pa-text" v-html="item.PREVIEW_TEXT"></div>
  </div>
</template>

<script>
export default {
  name: 'ShipmentCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
