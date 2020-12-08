import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
  /*
    API KEYS
  */
});

export default firebaseApp.database();
