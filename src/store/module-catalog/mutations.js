export const mutations = {
  SET_RESULT(state, result) {
    state.arResult = result;
  },
  SET_ITEMS(state, items) {
    state.items = items;
  },
  SET_ACTIVE(state, item) {
    state.activeItem = item;
  },
};

export default mutations;
