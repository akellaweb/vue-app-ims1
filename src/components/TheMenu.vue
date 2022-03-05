<template>
  <div class="main-menu">
    <ul>
      <li>
        <a href="#product">Продукция</a>
      </li>
      <li>
        <a href="#payment">Доставка и оплата</a>
      </li>
      <li>
        <a href="#partners">Партнеры</a>
      </li>
      <li>
        <a href="#contact">Контакты</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'TheMenu',
  setup() {
    const store = useStore();

    const menu = computed(() => store.getters['menu/menu']);

    const setMenu = () => { store.dispatch('menu/setMenu'); };

    onMounted(() => {
      setMenu();
    });

    return {
      menu,
    };
  },
};
</script>
