<template lang="pug">
//- the-schedule
link(href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet")
header#header.fixed-top(:class="{active: isActive}")
  .container.d-flex.align-items-center
    a.burger-toggle(href="#" :class="{activated: isActive}" @click="activate")
      span.bar1 
      span.bar2
      span.bar3
    //- a(class="pos" href="#")
    //-   img(class="image" src="../assets/logo_top.png")
    nav.navi.d-lg-flex
      router-link.pos(v-if="!isLoggedIn" to="/home")
        img.image(@click="activate2" :class="{active: isActive}" src="../../assets/logo_top3.png")
      router-link.pos(v-else :to="userLink")
        img.image(@click="activate2" :class="{active: isActive}" src="../../assets/logo_top3.png")
      
      
      .nav-menu(:class="{active: isActive}")
        ul
          li(@click="setActive(0)" :class="{activated: isActiveArr[0]}")
            router-link(v-if="!isLoggedIn" to="/home") Home 
            router-link(v-else :to="userLink") Home 
          li(@click="setActive(1)" :class="{activated: isActiveArr[1]}")
            router-link(v-if="!isLoggedIn" to="/schedule") Schedule
            router-link(v-else to="/scheduled") Schedule
          li(@click="setActive(2)" :class="{activated: isActiveArr[2]}") 
            router-link(v-if="!isLoggedIn" to="/recommendations") Recommendations
            router-link(v-else to="/recommend") Recommendations
          li(@click="setActive(3)" :class="{activated: isActiveArr[3]}") 
            router-link(v-if="!isLoggedIn" to="/wardrobe") Wardrobe
            router-link(v-else to="/wardrobes") Wardrobe
          li(@click="setActive(4)" :class="{activated: isActiveArr[4]}") 
            router-link(to="/aboutus") About Us 
          li(@click="setActive(5)" :class="{activated: isActiveArr[5]}") 
            router-link(to="/contact") Contact 
      router-link.signup.scrollto(v-if="!isLoggedIn" @click="deactivate" :class="{active: isActive}" to="/signin" ) Sign up/Login
      router-link.signup.scrollto(v-else @click="logout" :class="{active: isActive}" to="/signin" ) Sign Out
</template>

<script>
import TheSchedule from '../Interface/TheSchedule.vue';

export default {
  components:{
    TheSchedule,
  },
  data() {
    return {
      isActiveArr: [true, false, false, false, false, false],
      isActive: false,
      width: 0,
      // currentPage: window.location.pathname,
    };
  },
  computed:{
    isLoggedIn(){
      return this.$store.getters.isAuthenticated;
    },
    userLink(){
      const userId = this.$store.getters.userId;
      return "/users/" + userId;
    }
  },
  methods: {
    logout(){
      this.$store.dispatch('logout');
      this.$router.replace('/signin');
      this.isActiveArr = [false, false, false, false, false, false];
      this.isActive = false;
    },
    setActive(index) {
      this.isActiveArr = [false, false, false, false, false, false];
      this.isActiveArr[index] = true;
      this.isActive = false;
      this.$emit('transitionChecker', this.isActiveArr);
      // console.log(this.isActiveArr);
      // console.log(index);
      // console.log(this.isActiveArr[index]);
    },
    activate() {
      this.isActive = !this.isActive;
    },
    deactivate() {
      this.isActiveArr = [false, false, false, false, false, false];
      this.isActive = false;
    },
    resizes() {
      this.width = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.resizes);
    this.resizes();
    if (window.location.pathname === "/home") {
      this.isActiveArr = [true, false, false, false, false, false];
    } 
    else if (window.location.pathname === "/schedule" || window.location.pathname === "/scheduled") {
      this.isActiveArr = [false, true, false, false, false, false];
    }
    else if (window.location.pathname === "/recommendations" || window.location.pathname === "/recommend") {
      this.isActiveArr = [false, false, true, false, false, false];
    }
    else if (window.location.pathname === "/wardrobe" || window.location.pathname === "/wardrobes") {
      this.isActiveArr = [false, false, false, true, false, false];
    }
    else if (window.location.pathname === "/aboutus") {
      this.isActiveArr = [false, false, false, false, true, false];
    }
    else if (window.location.pathname === "/contact"){
      this.isActiveArr = [false, false, false, false, false, true];
    }
    else if (window.location.pathname === "/signin"){
      // console.log(this.currentPage);
      this.isActiveArr = [false, false, false, false, false, false];
    }else if (window.location.pathname === "/signup"){
      // console.log(this.currentPage);
      this.isActiveArr = [false, false, false, false, false, false];
    }
    // console.log(this.$route.path);
  },
  unmounted() {
    window.removeEventListener("resize", this.resizes);
  },
  watch: {
    width(value) {
      if (value > 992) {
        this.isActive = false;
      }
    }
  },
};
</script>

<style scoped>
.hidden{
  display: none;
}

#header {
  width: 100%;
  background-color: #13181b;
  display: flex;
  box-shadow: 0px 2px 3px #484848;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  transition: all 0.5s ease-in-out;
}

#header.active {
  height: 100%;
  /* transition: all 0.5s ease-in-out; */
}

* {
  font-family: poppins;
  box-sizing: border-box;
}

.image {
  width: 90%;
  height: 100%;
}
a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: white;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: poppins;
}
.nav-menu ul {
  list-style: none;
  font-family: poppins;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-menu > ul {
  display: flex;
}

.nav-menu > ul > li {
  position: relative;
  white-space: nowrap;
  padding: 15px 0 15px 22px;
}

.nav-menu > ul > li a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1.5px;
  bottom: -6px;
  left: 0;
  background-color: rgb(163, 159, 159);
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out;
}

.nav-menu a:hover::before,
.nav-menu li:hover > a::before,
.nav-menu .activated > a::before {
  visibility: visible;
  width: 100%;
}

.nav-menu a:hover,
.nav-menu .activated > a,
.nav-menu li:hover > a {
  color: #fff;
}

.nav-menu a {
  display: flex;
  position: relative;
  color: #fff;
  transition: 0.3s;
  font-size: 14px;
  font-weight: 500;
  padding: 0 4px;
}

.signup {
  margin-left: 25px;
  color: #fff;
  border-radius: 4px;
  padding: 6px 25px 8px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  justify-content: center;
  display: inline-block;
  font-weight: 400;
  border: 2px solid #211e1c;
  height: 50%;
  margin-top: 5px;
}

.signup:hover {
  background: #e50914;
  color: #fff;
}

.burger-toggle:hover .bar1 {
  transform: translateY(-3px);
}

.burger-toggle:hover .bar3 {
  transform: translateY(3px);
}

@media (max-width: 394px) {
  .image.active {
    width: 160px;
    height: 65px;
    position: absolute;
    top: 0;
    left: 20px;
    justify-content: left;
    margin-right: 30px;
  }

  .signup {
    margin-top: 1rem;
    margin-left: 33px;
    display: none;
  }

  .signup.active {
    display: flex;
  }
  .burger-toggle {
    display: flex;
  }

  .image {
    width: 30%;
    min-width: 140px;
    float: left;
    margin-top: 0.5rem;
  }
  .navi {
    /* display: none; */
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
  }

  .nav-menu ul {
    flex-direction: column;
    width: 100%;
  }

  .nav-menu {
    display: none;
  }
  .nav-menu li {
    margin: auto;
  }

  .nav-menu li a {
    padding: 0.5rem 1rem;
  }

  .nav-menu.active {
    display: flex;
  }
}

@media (min-width: 394px) and (max-width: 768px) {
  .image.active {
    width: 160px;
    height: 65px;
    position: absolute;
    top: 0;
    left: 20px;
    justify-content: left;
    margin-right: 30px;
  }

  .signup {
    margin-top: 1rem;
    margin-left: 33px;
  }
  .burger-toggle {
    display: flex;
  }

  .image {
    margin-top: 0.5rem;
    width: 30%;
    min-width: 140px;
    float: left;
  }
  .navi {
    /* display: none; */
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
  }

  .nav-menu ul {
    flex-direction: column;
    width: 100%;
  }

  .nav-menu {
    display: none;
  }
  .nav-menu li {
    margin: auto;
  }

  .nav-menu li a {
    padding: 0.5rem 1rem;
  }

  .nav-menu.active {
    display: flex;
    transition: .5s ease-in;
  }
}

@media (min-width: 769px) and (max-width: 993px) {
  .image.active {
    width: 160px;
    height: 65px;
    /* min-width: 14%;
    min-height: 9%; */
    position: absolute;
    top: 0;
    left: 20px;
    justify-content: left;
    margin-right: 30px;
  }

  .image {
    margin-top: 0.5rem;
    width: 30%;
    float: left;
  }
  .signup {
    margin-top: 1rem;
    margin-left: 33px;
  }

  .signup.active {
    transition: all 0.3s;
    transform: translateY(15px);
  }
  .burger-toggle {
    display: flex;
  }

  .navi {
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
  }

  .nav-menu ul {
    flex-direction: column;
    width: 100%;
  }

  .nav-menu li {
    margin: auto;
  }

  .nav-menu li a {
    padding: 0.5rem 1rem;
  }

  .nav-menu {
    display: none;
  }
  .nav-menu.active {
    display: flex;
  }
}

@media (min-width: 993px){
  .burger-toggle {
    display: none;
  }
}

@media (min-width: 1200px) {
  .image {
    width: 50%;
    float: right;
    margin-right: 30px;
  }
  .burger-toggle {
    display: none;
    /* visibility: hidden; */
  }
}

.burger-toggle {
  position: fixed;
  top: 26px;
  right: 15px;
  z-index: 9998;
  border: 0;
  background: none;
  font-size: 24px;
  transition: all 0.5s ease-in-out;
  outline: none !important;
  line-height: 1;
  cursor: pointer;
  text-align: right;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.bar1,
.bar2,
.bar3 {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.burger-toggle.activated .bar2 {
  transform: translateX(50px);
  background: transparent;
  box-shadow: none;
}

.burger-toggle.activated .bar1 {
  transform: rotate(45deg) translate(-2.5px, 15px);
}

.burger-toggle.activated .bar3 {
  transform: rotate(-45deg) translate(-2.5px, -15px);
}

/* li{
  font-size: 16px;
  cursor: pointer;
  position: relative;
  top: 0.7rem;
  margin-right: 5vw;
} */
</style>
