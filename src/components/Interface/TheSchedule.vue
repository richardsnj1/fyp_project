<template lang="pug">
div
  transition(:name="image" appear)
    img.image1(v-if ="image === 'imageEnter'" src="../../assets/out/girl1.jpg")
  transition(:name="image" appear)    
    img.image2(v-if ="image === 'imageEnter'" src="../../assets/out/wardrobe1.jpg")
  transition(:name="pageTransition" appear)
    div(v-if ="pageTransition === 'pageEnter'")
      .numbering 02
      .title SCHEDULE YOUR FIT
      .title2 DAILY SCHEDULING
      <p class="text1">By inputting your clothes into Stylr,
        <br/>you will have your own Virtual
        <br/>wardrobe in which Stylr will
        <br/>use to give you ideas on what 
        <br/>to wear every
        <br/>day!
      </p>
      router-link.button(to="/signin") SIGN UP TO SEE MORE!
      router-link.circle(to="/home")
      router-link.arrow(to="/home") &#8592;
      .line

</template>

<script>
// import TheNavbar from "./nav/TheNavbar.vue";

export default {
  // props: ['array'],
  components: {
    // TheNavbar,
  },
  data() {
    return {
      // isReloaded: false,
      pageTransition: "pageEnter",
      image: "imageEnter",
      // show: true,
    };
  },
  beforeRouteEnter(from) {
    console.log(from.fullPath);
    if (from.fullPath === "/recommendations") {
      // this.pageTransition = "pageEnter2";
      // console.log(this.pageTransition);
    }
  },
  beforeRouteLeave(to, from, next) {
    // console.log(this.isActiveArray);
    if (to.fullPath == "/signin" || to.fullPath == "/signup") {
      next();
    } else if (to.fullPath != "/home") {
      this.pageTransition = "pageLeave";
      this.image = "imageLeave";
      setTimeout(() => {
        next();
        console.log(to.fullPath);
      }, 1000);
    } else {
      next();
    }
  },
  beforeCreate() {
    // console.log(this.isActiveArray);
    // console.log(this.array.target[0]);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Amaranth&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

.container1 {
  position: relative;
}
.image1 {
  vertical-align: bottom;
  position: fixed;
  /* top: 325px; */
  bottom: -50px;
  left: -125px;
  /* width: 500px; */
  width: 35%;
  height: auto;
}

.image2 {
  position: fixed;
  bottom: -70px;
  right: -370px;
  /* width: 20%; */
  width: 55.5%;
  /* width: 850px; */
  height: auto;
  /* height: 929px; */
}

.title {
  color: #f2f2f2;
  font-family: Amaranth;
  font-weight: bold;
  position: fixed;
  top: 25vh;
  left: 22vw;
  font-size: 6.5rem;
  z-index: 999;
}

.title2 {
  color: transparent;
  font-family: Lexend;
  font-weight: bold;
  position: fixed;
  top: 48vh;
  left: 29.5vw;
  font-size: 4rem;
  z-index: 999;
  -webkit-text-stroke: 1px #e50914;
}

.numbering {
  color: transparent;
  font-family: Lexend;
  font-weight: bold;
  position: fixed;
  top: 13vh;
  left: 29.5vw;
  font-size: 4rem;
  z-index: 999;
  -webkit-text-stroke: 1px #f94f4f;
}

.text1 {
  color: #f2f2f2;
  font-family: Lexend;
  position: fixed;
  top: 65vh;
  left: 29.5vw;
  font-size: 1.1rem;
  z-index: 999;
  /* font-weight: lighter; */
}

a.button {
  text-decoration: none;
  color: #f3c5c5;
  position: fixed;
  top: 92vh;
  left: 29.5vw;
  font-family: Raleway;
  font-weight: bold;
}

a.button:hover {
  color: #f2f2f2;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

a.button:hover::before,
a.button::before {
  visibility: visible;
  width: 100%;
}

a.button::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -6px;
  left: 0;
  background-color: #f94f4f;
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out;
}

.circle {
  position: fixed;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  top: 35vh;
  left: 3vw;
  border: 2px solid #d2d2d2;
}

.circle:hover {
  transform: translateX(-20px);
  transition: 0.3s ease-in-out;
}

.arrow:hover .circle {
  transform: translateX(-20px);
  transition: 0.3s ease-in-out;
}
.arrow {
  position: fixed;
  font-size: 50px;
  top: 45vh;
  left: 10vh;
  color: #f94f4f;
}

.line {
  position: fixed;
  border: 1px solid #f94f4f;
  transform: rotate(-30deg);
  width: 10%;
  top: 20vh;
  right: 35vw;
}

@media (min-height: 300px) and (max-height: 715px) {
  .title2 {
    top: 50vh !important;
  }

  .text1 {
    top: 65vh !important;
  }

  a.button {
    top: 95vh !important;
  }
}

@media (min-height: 900px) {
  .image2 {
    height: 90%;
  }
}

@media (min-width: 1600px) {
  .image2 {
    height: 90%;
  }
}

@media (max-width: 1500px) and (min-width: 1440px) {
  .image2 {
    width: 58%;
  }

  .line {
    top: 23vh;
  }
}

@media (max-width: 1440px) and (min-width: 1320px) {
  .title {
    font-size: 5.5rem;
  }
  .title2 {
    font-size: 3.5rem;
  }
  .numbering {
    font-size: 3.5rem;
  }

  .image2 {
    width: 63%;
  }
}

@media (max-width: 1320px) and (min-width: 1220px) {
  .title {
    font-size: 4.5rem;
    left: 24vw;
    top: 27vh;
  }
  .title2 {
    font-size: 3rem;
    left: 31vw;
    top: 45vh;
  }
  .numbering {
    font-size: 3rem;
    left: 31vw;
    top: 15vh;
  }

  .text1 {
    font-size: 1rem;
    left: 31vw;
    top: 61vh;
  }

  a.button {
    left: 31vw;
    top: 88vh;
  }

  .image2 {
    width: 67%;
  }
  .image1 {
    width: 38%;
  }

  .line {
    top: 23vh;
  }
}

@media (max-width: 1220px) and (min-width: 1120px) {
  .title {
    font-size: 4rem;
    left: 27vw;
    top: 27vh;
  }
  .title2 {
    font-size: 2.7rem;
    left: 34vw;
    top: 45vh;
  }
  .numbering {
    font-size: 3rem;
    left: 34vw;
    top: 15vh;
  }

  .text1 {
    font-size: 1rem;
    left: 34vw;
    top: 61vh;
  }

  a.button {
    left: 34vw;
    top: 88vh;
  }

  .image2 {
    width: 75%;
    right: -470px;
  }
  .image1 {
    width: 41%;
  }

  .line {
    top: 25vh;
    width: 7%;
    right: 37vw;
  }
}

@media (max-width: 1120px) and (min-width: 950px) {
  .image2 {
    width: 120%;
    right: -800px;
  }

  .circle,
  .arrow {
    display: none;
  }

  .image1 {
    display: none;
  }

  .numbering {
    left: 10vw;
  }

  .title {
    left: 5vw;
    font-size: 4.5rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 40vh;
    left: 10vw;
  }

  .text1 {
    left: 10vw;
    top: 60vh;
  }

  a.button {
    left: 10vw;
    top: 85vh;
  }

  .line {
    left: 40vw;
  }
}

@media (max-width: 950px) and (min-width: 810px) {
  .image2 {
    width: 130%;
    right: -800px;
  }

  .circle,
  .arrow {
    display: none;
  }

  .image1 {
    display: none;
  }

  .numbering {
    left: 10vw;
  }

  .title {
    left: 5vw;
    font-size: 4.5rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 40vh;
    left: 10vw;
  }

  .text1 {
    left: 10vw;
    top: 60vh;
  }

  a.button {
    left: 10vw;
    top: 85vh;
  }

  .line {
    left: 40vw;
  }
}

@media (max-width: 810px) and (min-width: 600px) {
  .image2 {
    width: 120%;
    right: -800px;
  }

  .circle,
  .arrow {
    display: none;
  }

  .image1 {
    display: none;
  }

  .numbering {
    left: 10vw;
  }

  .title {
    left: 5vw;
    font-size: 4.5rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 40vh;
    left: 10vw;
  }

  .text1 {
    left: 10vw;
    top: 60vh;
  }

  a.button {
    left: 10vw;
    top: 85vh;
  }

  .line {
    left: 40vw;
  }
}

@media (max-width: 810px) and (min-width: 725px) {
  .image2 {
    width: 150%;
    right: -800px;
  }

  .circle,
  .arrow {
    display: none;
  }

  .image1 {
    display: none;
  }

  .numbering {
    left: 10vw;
  }

  .title {
    left: 5vw;
    font-size: 4.5rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 40vh;
    left: 10vw;
  }

  .text1 {
    left: 10vw;
    top: 60vh;
  }

  a.button {
    left: 10vw;
    top: 85vh;
  }

  .line {
    left: 40vw;
  }
}

@media (max-width: 725px) and (min-width: 640px) {
  .image2 {
    width: 170%;
    right: -800px;
  }

  .circle,
  .arrow {
    display: none;
  }

  .image1 {
    display: none;
  }

  .numbering {
    left: 10vw;
    font-size: 3rem;
  }

  .title {
    left: 5vw;
    font-size: 4rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 40vh;
    left: 10vw;
    font-size: 3rem;
  }

  .text1 {
    left: 10vw;
    top: 55vh;
  }

  a.button {
    left: 10vw;
    top: 80vh;
  }

  .line {
    left: 40vw;
  }
}

@media (max-width: 640px) and (min-width: 580px) {
  .image2 {
    display: none;
  }

  .circle,
  .arrow {
    display: none;
  }

  .image1 {
    display: none;
  }

  .numbering {
    left: 10vw;
    font-size: 3rem;
  }

  .title {
    left: 5vw;
    font-size: 4rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 40vh;
    left: 10vw;
    font-size: 3rem;
  }

  .text1 {
    left: 10vw;
    top: 55vh;
  }

  a.button {
    left: 10vw;
    top: 80vh;
  }

  .line {
    left: 40vw;
  }
}

@media (max-width: 580px) and (min-width: 290px) {
  .image2 {
    display: none;
  }

  .circle,
  .arrow {
    display: none;
  }

  .image1 {
    display: none;
  }

  .numbering {
    left: 10vw;
    font-size: 3rem;
  }

  .title {
    left: 5vw;
    font-size: 3.5rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 45vh;
    left: 10vw;
    font-size: 2.5rem;
  }

  .text1 {
    left: 10vw;
    top: 60vh;
  }

  a.button {
    left: 10vw;
    top: 85vh;
  }

  .line {
    left: 40vw;
  }
}

@media (max-width: 290px) {
  .image2 {
    display: none;
  }

  .circle,
  .arrow {
    display: none;
  }

  .image1 {
    display: none;
  }

  .numbering {
    left: 10vw;
    font-size: 3rem;
  }

  .title {
    left: 5vw;
    font-size: 3.5rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 45vh;
    left: 10vw;
    font-size: 2.5rem;
  }

  .text1 {
    left: 10vw;
    top: 60vh;
  }

  a.button {
    left: 10vw;
    top: 90vh;
  }

  .line {
    left: 40vw;
  }
}
</style>
