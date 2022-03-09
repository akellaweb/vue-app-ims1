import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'LayoutDefault',
      title: 'Индексэ',
    },
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/Product.vue'),
    meta: {
      title: 'Продукция',
    },
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import('@/views/Payment.vue'),
    meta: {
      title: 'Доставка и оплата',
    },
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import('@/views/Partners.vue'),
    meta: {
      title: 'Партнеры',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: 'Контакты',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
