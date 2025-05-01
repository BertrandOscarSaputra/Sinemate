import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCgv_BWfG7iEvSsRpgJUwHBTuyBuD-l6jQ',
  authDomain: 'sinemate-f57f8.firebaseapp.com',
  projectId: 'sinemate-f57f8',
  storageBucket: 'sinemate-f57f8.firebasestorage.app',
  messagingSenderId: '674940671467',
  appId: '1:674940671467:web:acac85feb4ffbc3acfb5ae',
  databaseURL: 'https://sinemate-f57f8-default-rtdb.firebaseio.com/',
};

// Prevent re-initialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export {firebase, auth};
