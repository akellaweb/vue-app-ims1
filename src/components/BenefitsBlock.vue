<template>
  <div class="features" id="features" v-if="items.length">
    <div class="container">
      <div class="row">
        <BenefitCard v-for="(item, idx) of items"
             :key="idx"
             :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BenefitCard from './BenefitCard.vue';

export default {
  name: 'BenefitsBlock',
  components: {
    BenefitCard,
  },
  methods: {
    ...mapActions({
      fetchItems: 'benefit/fetchBenefits',
    }),
  },
  computed: {
    ...mapGetters({
      benefits: 'benefit/benefits',
      items: 'benefit/items',
    }),
  },
  mounted() {
    this.fetchItems();
  },
};
</script>
