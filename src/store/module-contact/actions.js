import { api } from '@/api';

export const actions = {
  async fetchContacts({ commit }) {
    const arResult = await api.fetchDBContacts();

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
