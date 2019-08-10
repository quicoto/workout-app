import Vue from 'vue';
import { rtdbPlugin } from 'vuefire';

// Register global Bootstrap VUE components
import {
  BAlert,
  BContainer,
  BRow,
  BCol,
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BNavbarNav,
  BNavItem,
  BNavForm,
  BButton,
  BFormInput,
  BNavItemDropdown,
  BDropdownItem,
  BCollapse,
  BCard,
  BCardText,
  BCardImg,
  BBadge,
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
Vue.component('b-navbar', BNavbar);
Vue.component('b-navbar-brand', BNavbarBrand);
Vue.component('b-navbar-toggle', BNavbarToggle);
Vue.component('b-navbar-nav', BNavbarNav);
Vue.component('b-nav-item', BNavItem);
Vue.component('b-nav-form', BNavForm);
Vue.component('b-button', BButton);
Vue.component('b-form-input', BFormInput);
Vue.component('b-nav-item-dropdown', BNavItemDropdown);
Vue.component('b-dropdown-item', BDropdownItem);
Vue.component('b-collapse', BCollapse);
Vue.component('b-card', BCard);
Vue.component('b-card-text', BCardText);
Vue.component('b-card-img', BCardImg);
Vue.component('b-badge', BBadge);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
