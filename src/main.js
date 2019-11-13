// https://github.com/FortAwesome/vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFrown,
  faImage,
  faTrashAlt,
  faEdit,
  faGrinStars,
  faThumbsDown,
} from '@fortawesome/free-regular-svg-icons';
import {
  faSignOutAlt,
  faVideo,
  faExclamationTriangle,
  faSearch,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
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
  BFormTextarea,
  BFormInvalidFeedback,
  BFormValidFeedback,
  BCollapse,
  BCard,
  BCardText,
  BCardImg,
  BImg,
  BBadge,
  BTab,
  BTabs,
  BTable,
  BFormCheckbox,
  BFormCheckboxGroup,
  VBTooltip,
  ToastPlugin,
  BFormSelect,
  BProgress,
} from 'bootstrap-vue';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';

// Font Awesome configuration
library.add(faFrown);
library.add(faSignOutAlt);
library.add(faVideo);
library.add(faImage);
library.add(faTrashAlt);
library.add(faEdit);
library.add(faExclamationTriangle);
library.add(faSearch);
library.add(faPlus);
library.add(faMinus);
library.add(faMinus);
library.add(faGrinStars);
library.add(faThumbsDown);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = true;

// Firebase
Vue.use(rtdbPlugin);

// VUE Bootrap Toast
Vue.use(ToastPlugin);

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
Vue.component('b-form-textarea', BFormTextarea);
Vue.component('b-form-checkbox', BFormCheckbox);
Vue.component('b-form-checkbox-group', BFormCheckboxGroup);
Vue.component('b-collapse', BCollapse);
Vue.component('b-card', BCard);
Vue.component('b-card-text', BCardText);
Vue.component('b-card-img', BCardImg);
Vue.component('b-img', BImg);
Vue.component('b-form-invalid-feedback', BFormInvalidFeedback);
Vue.component('b-form-valid-feedback', BFormValidFeedback);
Vue.component('b-badge', BBadge);
Vue.component('b-tab', BTab);
Vue.component('b-tabs', BTabs);
Vue.component('b-table', BTable);
Vue.component('b-form-select', BFormSelect);
Vue.component('b-progress', BProgress);

Vue.directive('b-tooltip', VBTooltip);

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
