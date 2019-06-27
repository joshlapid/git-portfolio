import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBl1_CJFvYheZL3F4CWFGEggPIHSQDAOHg",
    authDomain: "portfolio-maker-236f6.firebaseapp.com",
    databaseURL: "https://portfolio-maker-236f6.firebaseio.com",
    projectId: "portfolio-maker-236f6",
    storageBucket: "portfolio-maker-236f6.appspot.com",
    messagingSenderId: "594782394153",
    appId: "1:594782394153:web:572732853594b7a1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'josh lapid'
});