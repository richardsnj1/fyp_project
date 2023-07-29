<template lang="pug">
div

</template>

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
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
    appId: "1:1003183301564:web:dcf0e74059563072a381b9",
    measurementId: "G-KYRTCS6LCY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import{getStorage} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
  const storage = getStorage(app);

  export {storage};
</script>