<template>
  <!-- BEGIN Preloader -->
  <div class="preloader"
       :style="{display: loaded ? 'none' : 'block'}"
  >
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThePreloader',
  props: {
    loaded: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>

<style scoped>

</style>
