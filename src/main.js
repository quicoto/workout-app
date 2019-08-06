import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { rtdbPlugin } from 'vuefire';

// Register global Bootstrap VUE components
import {
  BAlert,
  BContainer,
  BRow,
  BCol,
} from 'bootstrap-vue';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

// Firebase
Vue.use(rtdbPlugin);

// Init the Bootstrap Components previously imported
Vue.component('b-alert', BAlert);
Vue.component('b-container', BContainer);
Vue.component('b-row', BRow);
Vue.component('b-col', BCol);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
