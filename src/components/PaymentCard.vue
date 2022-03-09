<template>
  <div class="pa-row">
    <i :class="`icofont-${ item.DISPLAY_PROPERTIES.ICON.DISPLAY_VALUE }`"></i>
    <div class="pa-title">{{ item.NAME }}</div>
    <div class="pa-text" v-html="item.PREVIEW_TEXT"></div>
  </div>
</template>

<script>
export default {
  name: 'PaymentCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
