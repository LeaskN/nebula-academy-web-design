import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBf6CDmVrN6Svo_QyQbPcesVNdThuGJkNk",
    authDomain: "nebula-data-5be57.firebaseapp.com",
    databaseURL: "https://nebula-data-5be57.firebaseio.com",
    projectId: "nebula-data-5be57",
    storageBucket: "nebula-data-5be57.appspot.com",
    messagingSenderId: "316193928693",
    appId: "1:316193928693:web:c3451536714401bf0e9cbc"
};
    // Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;
