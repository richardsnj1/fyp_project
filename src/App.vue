<template lang="pug">
div
  the-navbar
  router-view 
  //- router-view(v-slot="{Component, route}")
  //-   transition(:name="route.meta.transition")
  //-     component(:is="Component")   
    
  //- router-view(v-slot="slotProps")
  //-   transition(name="route" mode="out-in")
  //-     component(:is="slotProps.Component")   
</template>

<script>
// import HomePage from './components/HomePage.vue';
import TheNavbar from "./components/nav/TheNavbar.vue";

export default {
  components: {
    // HomePage,
    TheNavbar,
  },
  data() {
    return {};
  },
  computed:{
    didAutoLogout(){
      return this.$store.getters.didAutoLogout;
    }
  },
  methods: {},
  created(){
    this.$store.dispatch("tryLogin")
  },
  watch:{
    didAutoLogout(cur, old){
      if (cur && cur !== old){
        this.$router.replace("/signin")
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400&display=swap");

@keyframes pageEnter {
  0% {
    opacity: 0;
    transform: translateX(500px);
  }
  50% {
    opacity: 1;
    transform: translateX(-100px);
  }
  100% {
    /* opacity: 1; */
    transform: translateX(0px);
  }
}

@keyframes pageEnter2 {
  0% {
    opacity: 0;
    transform: translateY(500px);
  }
  50% {
    opacity: 1;
    transform: translateX(-100px);
  }
  100% {
    /* opacity: 1; */
    transform: translateX(0px);
  }
}



@keyframes pageLeave {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  50% {
    /* opacity: 1; */
    transform: translateX(100px);
  }
  100% {
    opacity: 0;
    transform: translateX(-500px);
  }
}

@keyframes pageLeave2 {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  50% {
    opacity: 1;
    transform: translateX(-100px);
  }
  100% {
    opacity: 0;
    transform: translateX(500px);
  }
}

@keyframes imgLeave {
  0% {
    /* opacity: 1; */
    transform: translateX(0px);
  }
  50% {
    opacity: 1;
    transform: translateX(100px);
  }
  100% {
    opacity: 0;
    transform: translateX(-1550px);
  }
}

@keyframes imgEnter {
  0% {
    opacity: 0;
    transform: translateX(1500px);
  }
  50% {
    opacity: 1;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

@keyframes imgEnter2 {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  50% {
    opacity: .8;
  }
  100% {
    opacity: 1;
  }
}

.pageEnter-enter-active {
  animation: pageEnter 2s;
}

.pageLeave-leave-active {
  animation: pageLeave 1s;
}

.pageLeave2-leave-active {
  animation: pageLeave2 1s;
}

.imageEnter-enter-active {
  animation: imgEnter 2s;
}

.imageEnter2-enter-active {
  animation: imgEnter2 2s;
}

.imageLeave-leave-active {
  animation: imgLeave 1s;
}

.imageLeave2-leave-active {
  animation: imgEnter 1s reverse;
}
</style>
