<template lang="pug">
div
  transition(:name="pageTransition" appear)
    div(v-if ="pageTransition === 'pageEnter'")
      .container-fluid.justify-content-center
        .title.text-center CONTACT US
        .title2.text-center ASK US ANYTHING
        .text1.text-center Below are our social media 
          TheSocial
    //- .fab.fa-twitter
    //- .bi.bi-facebook
    //- <font-awesome-icon icon="fa-solid fa-user-secret" />
</template>

<script>
import TheSocial from "../nav/TheSocial.vue";

export default {
  components: {
    TheSocial,
  },
  data() {
    return {
      pageTransition: "pageEnter",
    };
  },
  beforeRouteLeave(to, from, next) {
    // console.log(this.isActiveArray);
    if (
      to.fullPath === "/schedule" ||
      to.fullPath === "/recommendations" ||
      to.fullPath === "/wardrobe" ||
      to.fullPath === "/aboutus"
    ) {
      // console.log("hahalo")
      this.pageTransition = "pageLeave2";
      setTimeout(() => {
        next();
      }, 1000);
    } else if (
      to.fullPath === "/home" ||
      to.fullPath === "/signin" ||
      to.fullPath === "/signup"
    ) {
      next();
    } else if (
      to.fullPath != "/schedule" ||
      to.fullPath != "/recommendations" ||
      to.fullPath != "/wardrobe" ||
      to.fullPath != "/aboutus"
    ) {
      this.pageTransition = "pageLeave";
      // console.log("hahalo")
      setTimeout(() => {
        next();
      }, 1000);
    } else {
      next();
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amaranth&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

.container-fluid {
  position: fixed;
  top: 30vh;
  margin: auto;
}

.title {
  color: #f2f2f2;
  font-family: Amaranth;
  font-weight: bold;
  /* top: 80vh; */
  font-size: 6.5rem;
  z-index: 999;
}

.title2 {
  color: transparent;
  font-family: Lexend;
  font-weight: bold;
  font-size: 4rem;
  z-index: 999;
  -webkit-text-stroke: 1px #e50914;
}

.text1 {
  color: #f2f2f2;
  font-family: Lexend;
  font-size: 1.1rem;
  z-index: 999;
  /* font-weight: lighter; */
}

@media (max-height: 680px) {
  .container-fluid {
    top: 10vh !important;
  }
}

@media (max-width: 575px) {
  .title {
    font-size: 5rem;
  }
  .title2 {
    font-size: 3rem;
  }
}
</style>
