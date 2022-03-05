<template>
  <div class="partners" id="partners" v-if="items.length">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-head">
            <h2 class="section-title" v-text="arResult.NAME"></h2>
            <div class="section-subtitle" v-html="arResult.DESCRIPTION"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mgrow">
        <PartnerCard v-for="(item, idx) of items"
             :key="idx"
             :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PartnerCard from './PartnerCard.vue';

export default {
  name: 'PartnersBlock',
  components: {
    PartnerCard,
  },
  methods: {
    ...mapActions({
      fetchItems: 'partner/fetchPartners',
    }),
  },
  computed: {
    ...mapGetters({
      items: 'partner/items',
      arResult: 'partner/arResult',
    }),
  },
  mounted() {
    this.fetchItems();
  },
};
</script>
