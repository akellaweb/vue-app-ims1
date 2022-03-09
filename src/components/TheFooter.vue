<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12" v-html="'&copy; ' + year + ' ' + copyright"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TheFooter',
  setup() {
    const year = ref(new Date().getFullYear());
    const copyright = ref('&laquo;ИМС&raquo; Интернет-магазин медицинских товаров.');

    return {
      year,
      copyright,
    };
  },
};
</script>

<style scoped>

</style>
