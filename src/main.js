// https://github.com/FortAwesome/vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFrown } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import firebase from 'firebase/app';

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
  BForm,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
  BFormValidFeedback,
  BNavItemDropdown,
  BDropdownItem,
  BCollapse,
  BCard,
  BCardText,
  BCardImg,
  BImg,
  BBadge,
} from 'bootstrap-vue';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// Font Awesome configuration
library.add(faFrown);
library.add(faSignOutAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
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
Vue.component('b-form', BForm);
Vue.component('b-form-group', BFormGroup);
Vue.component('b-form-input', BFormInput);
Vue.component('b-nav-item-dropdown', BNavItemDropdown);
Vue.component('b-dropdown-item', BDropdownItem);
Vue.component('b-collapse', BCollapse);
Vue.component('b-card', BCard);
Vue.component('b-card-text', BCardText);
Vue.component('b-card-img', BCardImg);
Vue.component('b-img', BImg);
Vue.component('b-form-invalid-feedback', BFormInvalidFeedback);
Vue.component('b-form-valid-feedback', BFormValidFeedback);
Vue.component('b-badge', BBadge);

let app = '';

// Make sure Firebase has finished its calls before initiating our app
// Otherwise we have an incomplete authentication check.
// It is fine if the user is not authenticated, the app will init in any case.
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
