/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHRUtEtaeh3xjoEoIC362JrILMQR0RErM",
  authDomain: "friendlychat-ccf3f.firebaseapp.com",
  projectId: "friendlychat-ccf3f",
  storageBucket: "friendlychat-ccf3f.appspot.com",
  messagingSenderId: "391838046192",
  appId: "1:391838046192:web:0ce1320172f319c26d6f35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
