
import * as bootstrap from 'bootstrap';
import App from './App.vue' ;
import router from './router.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import { BIconBatteryFull, BIconArrow90degDown, BIconBookmark } from 'bootstrap-icons-vue';
import { defineComponent } from 'vue';
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
// import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue'
import store from './store/index.js';
import BaseCard from './components/Base/BaseCard.vue';
import BaseButton from './components/Base/BaseButton.vue';
// import BaseBadge from './components/Base/BaseBadge.vue';
import BaseSpinner from './components/Base/BaseSpinner.vue';
import BaseDialog from './components/Base/BaseDialog.vue';

{/* <script type="module">
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
</script> */}
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyArE0p4I2D7oDrG2Oe-ZVudjtgHVvhpF-Y",
//   authDomain: "fyp1-45429.firebaseapp.com",
//   databaseURL: "https://fyp1-45429-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "fyp1-45429",
//   storageBucket: "fyp1-45429.appspot.com",
//   messagingSenderId: "1003183301564",
//   appId: "1:1003183301564:web:e096ae645d8184a1a381b9",
//   measurementId: "G-Q752MS3QEK"
// };

// // Initialize Firebase
// const appl = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appl);

const app = createApp(App);
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter,faFacebook,faUserSecret)
// app.use(library);
app.use(defineComponent);
app.use(router);
app.use(store);
// app.use(analytics);
app.mount('#app');
app.use(bootstrap);
app.use(BootstrapIconsPlugin);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('BIconBatteryFull', BIconBatteryFull);
app.component('BIconArrow90degDown', BIconArrow90degDown);
app.component('BIconBookmark', BIconBookmark);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
// app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);

