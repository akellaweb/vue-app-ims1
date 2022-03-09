import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import LayoutDefault from './layout/LayoutDefault.vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

import store from './store';
import './assets/css/bootstrap.min.css';
import './assets/css/icofont.min.css';
import './assets/css/style.css';

const app = createApp(App);
app.use(VueAxios, axios);
app.component('LayoutDefault', LayoutDefault);
app.use(store).use(router).mount('#app');
