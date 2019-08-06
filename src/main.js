import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { rtdbPlugin } from 'vuefire';

// Register global Bootstrap VUE components
import {
  BAlert,
} from 'bootstrap-vue';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

// Firebase
Vue.use(rtdbPlugin);

// Init the Bootstrap Components previously imported
Vue.component('b-alert', BAlert);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
