import { useRouter } from 'vue-router';

export const actions = {
  setMenu({ commit }) {
    const router = useRouter();
    return new Promise((resolve) => {
      const menu = [
        {
          title: 'Продукция',
          url: router.resolve({ name: 'product' }).hash,
        },
        {
          title: 'Доставка и оплата',
          url: router.resolve({ name: 'payment' }).hash,
        },
        {
          title: 'Партнеры',
          url: router.resolve({ name: 'partners' }).hash,
        },
        {
          title: 'Контакты',
          url: router.resolve({ name: 'contact' }).hash,
        },
      ];
      commit('SET_MENU', menu);
      resolve(menu);
    });
  },
};

export default actions;
