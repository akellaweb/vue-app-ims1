<template>
  <div class="col-md-3">
    <div class="con-item">
      <div class="con-title"><i
        :class="`icofont-${item.DISPLAY_PROPERTIES.ICON.DISPLAY_VALUE}`"></i> {{ item.NAME }}</div>
      <div class="con-text" v-html="item.PREVIEW_TEXT"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  props: {
    item: Object,
    required: () => true,
  },
};
</script>

<style scoped>

</style>
