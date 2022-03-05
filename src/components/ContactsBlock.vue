<template>
  <div class="contact" id="contact" v-if="items.length">
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
        <ContactCard v-for="(item, idx) of items"
             :key="idx"
             :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ContactCard from './ContactCard.vue';

export default {
  name: 'PartnersBlock',
  components: {
    ContactCard,
  },
  methods: {
    ...mapActions({
      fetchItems: 'contact/fetchContacts',
    }),
  },
  computed: {
    ...mapGetters({
      items: 'contact/items',
      arResult: 'contact/arResult',
    }),
  },
  mounted() {
    this.fetchItems();
  },
};
</script>
