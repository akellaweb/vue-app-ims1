<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-xs-4">
          <TheLogo />
        </div>
        <div class="col-md-6 hidden-xs menu-mb">
          <TheMenu />
        </div>
        <div class="col-md-3 hidden-xs">
          <div class="order-call">
            <a @click="showPopup" class="btn-site order-call">Заказать звонок</a>
          </div>
        </div>
        <div class="col-md-3 hidden-md hidden-lg hidden-sm visible-xs">
          <div class="toggle-nav">
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-nav">
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TheLogo from '@/components/TheLogo.vue';
import TheMenu from './TheMenu.vue';

export default {
  name: 'TheHeader',
  components: {
    TheLogo,
    TheMenu,
  },
  methods: {
    showPopup() {
      this.setVisibility(true);
    },
    ...mapActions({
      setVisibility: 'popup/setVisible',
    }),
  },
  computed: {
    ...mapGetters({
      status: 'popup/visibility',
    }),
  },
};
</script>

<style scoped>

</style>
