import { api } from '@/api';

export const actions = {
  async fetchPartners({ commit }) {
    const arResult = await api.fetchDBPartners();

    return new Promise((resolve) => {
      commit('SET_RESULT', arResult);
      commit('SET_ITEMS', arResult.ITEMS);
      resolve(arResult);
    });
  },
};

export default actions;
