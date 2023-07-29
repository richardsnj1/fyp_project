import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import TheSchedule from "./components/Interface/TheSchedule";
import TheRecommendations from "./components/Interface/TheRecommendations.vue";
import TheWardrobe from "./components/Interface/TheWardrobe.vue";
import AboutUs from "./components/Interface/AboutUs.vue";
import TheContact from "./components/Interface/TheContact.vue";
import SignIn from "./components/Interface/SignIn.vue";
import SignUp from "./components/Interface/SignUp.vue";
import UserList from "./components/Interface/UserList.vue";
import UserWardrobe from "./components/Interface/Loginned/UserWardrobe.vue";
import UserRecommendations from "./components/Interface/Loginned/UserRecommendations.vue";
import UserSchedule from "./components/Interface/Loginned/UserSchedule.vue";
// import UserDetails from "./components/Interface/Loginned/UserDetails.vue";
import SelfInfo from "./components/Interface/Loginned/SelfInfo.vue";
import AddItem from "./components/Wardrobe/AddItem.vue";
import WardrobeDetail from "./components/Wardrobe/WardrobeDetail.vue";
import NotFound from "./NotFound.vue";
import store from "./store/index.js";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" , meta:{requiresUnauth: true} },
    { path: "/home", component: HomePage },
    { path: "/schedule", component: TheSchedule, meta:{requiresUnauth: true}  },
    { path: "/scheduled", component: UserSchedule, meta:{requiresAuth: true}  },
    { path: "/recommendations", component: TheRecommendations, meta:{requiresUnauth: true} },
    { path: "/recommend", component: UserRecommendations, meta:{requiresAuth: true} },
    { path: "/wardrobe", component: TheWardrobe, meta:{requiresUnauth: true}  },
    { path: "/wardrobes", component: UserWardrobe , meta:{requiresAuth: true}},
    { path: "/users", component: UserList }, //jangan lupa ntar matiin/ilangin
    // { path: "/wardrobes", component: UserWardrobe,},
    { path: "/wardrobes/:id", component: UserWardrobe,
    props: true,   
    children:[
      {path: "additem", component: AddItem}
    ] },
    { path: "/edit/:id", component: WardrobeDetail,},
    { path: "/aboutus", component: AboutUs },
    { path: "/contact", component: TheContact },
    { path: "/signin", component: SignIn, meta:{requiresUnauth: true} },
    { path: "/users/:id", component: SelfInfo},
    // { path: "/:id", component: SelfInfo,
    // props: true,   
    // children:[
    //   {path: "additem", component: AddItem}
    // ] },
    { path: "/signup", component: SignUp, meta:{requiresUnauth: true} },
    { path: '/:notFound(.*)*', component: NotFound },
  ],
});

router.beforeEach(function(to,from,next){
  // console.log(store.getters.isAuthenticated);
  if(to.meta.requiresAuth && !store.getters.isAuthenticated){
    next("/signin");
  }else if (to.meta.requiresUnauth && store.getters.isAuthenticated){
    console.log("halo");
    next("/wardrobes");
  }else{
    next();
  }
});

export default router;
