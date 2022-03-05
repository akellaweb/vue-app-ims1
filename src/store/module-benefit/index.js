import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

export const benefit = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default benefit;
