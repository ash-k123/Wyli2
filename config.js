import * as firebase from 'firebase'

require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDOpnfQnGztI9eV1e4ZdbsT8fRBjyfFbwA",
  authDomain: "wyli1-84684.firebaseapp.com",
  databaseURL:"https://wyli1-84684.firebaseio.com",
  projectId: "wyli1-84684",
  storageBucket: "wyli1-84684.appspot.com",
  messagingSenderId: "491542396349",
  appId: "1:491542396349:web:8a4506bb6176505c00a6d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()