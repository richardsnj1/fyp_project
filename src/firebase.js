// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArE0p4I2D7oDrG2Oe-ZVudjtgHVvhpF-Y",
  authDomain: "fyp1-45429.firebaseapp.com",
  databaseURL: "https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fyp1-45429",
  storageBucket: "fyp1-45429.appspot.com",
  messagingSenderId: "1003183301564",
  appId: "1:1003183301564:web:e096ae645d8184a1a381b9",
  measurementId: "G-Q752MS3QEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
import { getStorage } from "firebase/storage";
const storage = getStorage(app);
console.log(storage);

export { storage }