import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage' // <- add

var config = {
  apiKey: "AIzaSyA7vvKHXintDSw8bXnAe6Tg3EDlgb_c6xA",
  authDomain: "ametsakweb.firebaseapp.com",
  databaseURL: "https://ametsakweb.firebaseio.com",
  projectId: "ametsakweb",
  storageBucket: "ametsakweb.appspot.com",
  messagingSenderId: "408534259144"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export const store = firebase.storage();
export default firebase