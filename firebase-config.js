// Firebase Configuration - Compat SDK Version
// This uses the compat library which works with CDN script tags

const firebaseConfig = {
  apiKey: "AIzaSyDhbJYG6LOy4bNuHF_D45pTSFn6RWR602I",
  authDomain: "chemstudy-e4e97.firebaseapp.com",
  projectId: "chemstudy-e4e97",
  storageBucket: "chemstudy-e4e97.firebasestorage.app",
  messagingSenderId: "868671953285",
  appId: "1:868671953285:web:46d0ffc5604530456dccec",
  measurementId: "G-QG1YVV6SE7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

console.log('Firebase initialized successfully');