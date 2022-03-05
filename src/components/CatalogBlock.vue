<template>
  <div class="product" id="product" v-if="items">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-head">
            <h2 class="section-title" v-text="arResult.NAME"></h2>
            <div v-if="arResult.DESCRIPTION" class="section-subtitle"
                 v-html="arResult.DESCRIPTION"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="items.length">
      <div class="row">
        <div class="col-md-12">
          <div class="tabs-wrapper">
            <div class="tabs-link">
              <CatalogCard
                v-for="(item, idx) of items"
                :item="item"
                :key="idx"
                :active="item.ID === activeItem.ID"
              />
            </div>
            <ProductCard
              v-if="activeItem"
              :item="activeItem"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CatalogCard from './CatalogCard.vue';
import ProductCard from './ProductCard.vue';

export default {
  name: 'CatalogBlock',
  components: {
    CatalogCard,
    ProductCard,
  },
  data: () => ({
    ready: false,
  }),
  methods: {
    ...mapActions({
      fetchItems: 'catalog/fetchCatalog',
      setActive: 'catalog/setActive',
    }),
  },
  computed: {
    ...mapGetters({
      items: 'catalog/items',
      arResult: 'catalog/arResult',
      activeItem: 'catalog/activeItem',
    }),
  },
  mounted() {
    this.ready = false;
    this.fetchItems()
      .then((result) => {
        const items = Array.from(result.ITEMS);
        const first = items.slice(0, 1);
        this.setActive(first[0]);
        this.ready = true;
      });
  },
};
</script>
