import { createStore } from 'vuex';

import { menu } from './module-menu';
import { benefit } from './module-benefit';
import { catalog } from './module-catalog';
import { payment } from './module-payment';
import { shipment } from './module-shipment';
import { partner } from './module-partner';
import { contact } from './module-contact';
import { popup } from './module-popup';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu,
    benefit,
    catalog,
    payment,
    shipment,
    partner,
    contact,
    popup,
  },
});
