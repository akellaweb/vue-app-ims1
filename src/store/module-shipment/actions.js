import { api } from '@/api';

export const actions = {
  async fetchShipments({ commit }) {
    const arResult = await api.fetchDBShipment();

    return new Promise((resolve) => {
      commit('SET_RESULT', arResult);
      commit('SET_ITEMS', arResult.ITEMS);
      resolve(arResult);
    });
  },
};

export default actions;
