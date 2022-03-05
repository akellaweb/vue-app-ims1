<template>
  <div class="payment" id="payment">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-head">
            <h2 class="section-title" v-html="arResult.PAGER_TITLE"></h2>
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
              v-for="(item, idx) of payments"
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
import ShipmentCard from './ShipmentCard.vue';

export default {
  name: 'PaymentBlock',
  components: {
    PaymentCard,
    ShipmentCard,
  },
  methods: {
    ...mapActions({
      fetchPayments: 'payment/fetchPayments',
      fetchShipments: 'shipment/fetchShipments',
    }),
  },
  computed: {
    ...mapGetters({
      payments: 'payment/items',
      shipments: 'shipment/items',
      arResult: 'payment/arResult',
    }),
  },
  mounted() {
    this.fetchShipments();
    this.fetchPayments();
  },
};
</script>
