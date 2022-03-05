<template>
  <ThePreloader :loaded="loaded" />
  <TheHeader />
  <slot name="default"></slot>
  <TheFooter />
</template>

<script>
import ThePreloader from '@/components/ThePreloader.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'LayoutDefault',
  components: {
    TheHeader,
    ThePreloader,
    TheFooter,
  },
  setup() {
    const loaded = ref(false);

    onMounted(() => {
      setTimeout(() => {
        loaded.value = true;
      }, 1000);
    });

    return {
      loaded,
    };
  },
};
</script>

<style scoped>

</style>
