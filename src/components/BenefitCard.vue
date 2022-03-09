<template>
  <div class="col-md-3">
    <div class="ft-item">
      <div class="ft-icon"><i
        :class="`icofont-${ item.DISPLAY_PROPERTIES.ICON.DISPLAY_VALUE }`"></i>
      </div>
      <div class="ft-title"><h3 v-html="item.NAME"></h3></div>
      <div class="ft-text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BenefitCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  mounted() {
  },
};
</script>

<style scoped>

</style>
