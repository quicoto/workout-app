import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDrVA6EHDFZEEWS-V1LrWwdIkFV-Vk6Z3A',
  authDomain: 'workout-app-6ffb8.firebaseapp.com',
  databaseURL: 'https://workout-app-6ffb8.firebaseio.com',
  projectId: 'workout-app-6ffb8',
  storageBucket: '',
  messagingSenderId: '730908948143',
  appId: '1:730908948143:web:5225955573c5db34',
});

export default firebaseApp.database();
