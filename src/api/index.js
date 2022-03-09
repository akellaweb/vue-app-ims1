// import { inject } from 'vue';
import { fetchDBBenefits } from './module-benefit';
import { fetchDBCatalog } from './module-catalog';
import { fetchDBPartners } from './module-partner';
import { fetchDBShipment } from './module-shipment';
import { fetchDBPayment } from './module-payment';
import { fetchDBContact } from './module-contact';

export const api = {
  fetchDBBenefits,
  fetchDBCatalog,
  fetchDBPartners,
  fetchDBShipment,
  fetchDBPayment,
  fetchDBContacts: fetchDBContact,
};

export default api;
