import { api } from '@/api';

export const actions = {
  async fetchCatalog({ commit }) {
    const arResult = await api.fetchDBCatalog();

    return new Promise((resolve) => {
      commit('SET_RESULT', arResult);
      commit('SET_ITEMS', arResult.ITEMS);
      resolve(arResult);
    });
  },
  setActive({ commit }, element) {
    commit('SET_ACTIVE', element);
  },
};

export default actions;
