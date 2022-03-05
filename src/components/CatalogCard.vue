<template>
  <div class="tab-link">
    <a
      href="javascript: void(0)"
      @click="setActiveElement"
      :class="{
        selected: active
      }"
    >
      <span class="t-icon"><i
        :class="`icofont-${item.DISPLAY_PROPERTIES.ICON.DISPLAY_VALUE}`"></i></span>
      <br>
      <span class="t-name">{{ item.NAME }}</span>
    </a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CatalogCard',
  props: {
    item: {
      type: Object,
    },
    active: {
      type: Boolean,
    },
  },
  methods: {
    setActiveElement() {
      this.setActive(this.item);
    },
    ...mapActions({
      setActive: 'catalog/setActive',
    }),
  },
  mounted() {
  },
  computed: {
    isActive: () => false,
    ...mapGetters({
      activeItem: 'catalog/activeItem',
    }),
  },
};
</script>

<style scoped>

</style>
