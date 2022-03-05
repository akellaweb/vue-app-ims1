<template>
  <div class="payment" id="payment">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-head">
            <h2 class="section-title" v-html="arResult.NAME"></h2>
            <div class="section-subtitle" v-html="arResult.DESCRIPTION"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="pa-item">
            <PaymentCard
              v-for="(item, idx) of shipments"
              :key="idx"
              :item="item"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="pa-item">
            <ShipmentCard
              v-for="(item, idx) of shipments"
              :key="idx"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PaymentCard from './PaymentCard.vue';

export default {
  name: 'PaymentBlock',
  components: {
    PaymentCard,
  },
  methods: {
    ...mapActions({
      fetchPayments: 'payment/fetchPayments',
    }),
  },
  computed: {
    ...mapGetters({
      items: 'payment/items',
      arResult: 'payment/arResult',
    }),
  },
};
</script>
