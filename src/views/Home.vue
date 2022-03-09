<template>
  <TheBanner />
  <BenefitsBlock />
  <CatalogBlock />
  <PaymentShipmentBlock />
  <PartnersBlock />
  <ContactsBlock />
  <PopupWindow />
</template>

<script>
// @ is an alias to /src
import TheBanner from '../components/TheBanner.vue';
import BenefitsBlock from '../components/BenefitsBlock.vue';
import CatalogBlock from '../components/CatalogBlock.vue';
import PaymentShipmentBlock from '../components/PaymentShipmentBlock.vue';
import PartnersBlock from '../components/PartnersBlock.vue';
import ContactsBlock from '../components/ContactsBlock.vue';
import PopupWindow from '../components/PopupWindow.vue';

export default {
  name: 'Home',
  components: {
    CatalogBlock,
    BenefitsBlock,
    TheBanner,
    PaymentShipmentBlock,
    PartnersBlock,
    ContactsBlock,
    PopupWindow,
  },
};
</script>
