<template lang="pug">
div
  transition(:name="image2" appear)
    img.image1(v-if ="image2 === 'imageEnter2'" src="../../assets/out/guy1.jpg")
  transition(:name="image" appear)    
    img.image2(v-if ="image === 'imageEnter'" src="../../assets/out/skaty1.jpg")
  transition(:name="pageTransition" appear)
    div(v-if ="pageTransition === 'pageEnter'")
      .numbering 04
      .title VIRTUAL WARDROBE
      .title2 STYLE WHEREVER
      <p class="text1">Digitalize your closet with a virtual wardrobe, 
        <br/>conveniently storing and organizing your 
        <br/>clothing items online for easy access 
        <br/>and outfit planning anywhere and 
        <br/>everywhere.
      </p>
      router-link.button(to="/signin") SIGN UP TO SEE MORE!
      .line
      .box
  </template>

<script>
import TheNavbar from "../nav/TheNavbar.vue";

export default {
  // props: ['array'],
  components: {
    TheNavbar,
  },
  data() {
    return {
      // isReloaded: false,
      pageTransition: "pageEnter",
      image: "imageEnter",
      image2: "imageEnter2",
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
    if (to.fullPath === "/schedule" || to.fullPath === "/recommendations") {
      // console.log("hahalo")
      this.pageTransition = "pageLeave2";
      this.image = "imageLeave2";
      this.image2 = "imageLeave2";
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
      to.fullPath != "/recommendations"
    ) {
      this.pageTransition = "pageLeave";
      this.image = "imageLeave";
      this.image2 = "imageLeave";
      // console.log("hahalo")
      setTimeout(() => {
        next();
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

.box {
  position: fixed;
  width: 220px;
  height: 220px;
  /* border-radius: 50%; */
  top: 35vh;
  left: 3vw;
  border: 2px solid #d2d2d2;
  transform: rotate(-30deg);
  transition: 0.3s ease-in;
}
.image1 {
  vertical-align: bottom;
  position: fixed;
  /* top: 325px; */
  bottom: -200px;
  left: -380px;
  /* width: 500px; */
  width: 50%;
  height: auto;
}

.image2 {
  position: fixed;
  bottom: -70px;
  right: -570px;
  /* width: 20%; */
  width: 70%;
  /* width: 850px; */
  height: auto;
}

.title {
  color: #f2f2f2;
  font-family: Amaranth;
  font-weight: bold;
  position: fixed;
  top: 25vh;
  left: 20vw;
  font-size: 6.5rem;
  z-index: 999;
}

.title2 {
  color: transparent;
  font-family: Lexend;
  font-weight: bold;
  position: fixed;
  top: 48vh;
  left: 32vw;
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
  left: 32vw;
  font-size: 4rem;
  z-index: 999;
  -webkit-text-stroke: 1px #f94f4f;
}

.text1 {
  color: #f2f2f2;
  font-family: Lexend;
  position: fixed;
  top: 65vh;
  left: 32vw;
  font-size: 1.1rem;
  z-index: 999;
  /* font-weight: lighter; */
}

a.button {
  text-decoration: none;
  color: #f3c5c5;
  position: fixed;
  top: 92vh;
  left: 32vw;
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

.line {
  position: fixed;
  border: 1px solid #f94f4f;
  transform: rotate(30deg);
  width: 10%;
  top: 65vh;
  right: 30vw;
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

@media (max-width: 1900px) and (min-width: 1500px) {
}

@media (max-width: 1500px) and (min-width: 1440px) {
  .image2 {
    width: 73%;
    height: 88%;
  }

  .image1 {
    width: 57%;
  }
}

@media (max-width: 1440px) and (min-width: 1320px) {
  .image1 {
    width: 57%;
  }
  .image2 {
    width: 75%;
  }
}

@media (max-width: 1320px) and (min-width: 1220px) {
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
    width: 76%;
    height: 83%;
  }
  .image1 {
    width: 57%;
  }
}

@media (max-width: 1220px) and (min-width: 1120px) {
  .title {
    font-size: 5.5rem;
    left: 25vw;
  }
  .title2 {
    font-size: 3.5rem;
    left: 34vw;
  }
  .numbering {
    font-size: 3.5rem;
    left: 34vw;
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
    width: 80%;
    height: 83%;
    /* right: -470px; */
  }
  .image1 {
    width: 62%;
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
    left: 12vw;
  }

  .title {
    left: 5vw;
    font-size: 5.5rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 40vh;
    left: 12vw;
  }

  .text1 {
    left: 12vw;
    top: 60vh;
  }

  a.button {
    left: 12vw;
    top: 85vh;
  }

  .line {
    left: 45vw;
  }

  .box {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 950px) and (min-width: 810px) {
  .box {
    width: 120px;
    height: 120px;
  }
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
    left: 12vw;
  }

  .title {
    left: 5vw;
    font-size: 5.5rem;
    color: #d2d2d2;
  }

  .title2 {
    top: 40vh;
    left: 12vw;
  }

  .text1 {
    left: 12vw;
    top: 60vh;
  }

  a.button {
    left: 12vw;
    top: 85vh;
  }

  .line {
    left: 50vw;
  }
}

@media (max-width: 810px) and (min-width: 725px) {
  .box {
    width: 120px;
    height: 120px;
  }
  .image2 {
    width: 150%;
    right: -800px;
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
    font-size: 3.5rem;
    top: 40vh;
    left: 10vw;
  }

  .text1 {
    left: 10vw;
    top: 60vh;
    font-size: 0.9rem;
  }

  a.button {
    left: 10vw;
    top: 85vh;
  }

  .line {
    left: 50vw;
  }
}

/* @media (max-width: 810px) and (min-width: 725px) {
  .image2 {
    width: 150%;
    right: -800px;
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
    left: 45vw;
  } 
}*/

@media (max-width: 725px) and (min-width: 640px) {
  .box {
    width: 120px;
    height: 120px;
  }
  .image2 {
    width: 170%;
    height: 100%;
    right: -900px;
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
    font-size: 0.9rem;
  }

  a.button {
    left: 10vw;
    top: 80vh;
  }

  .line {
    left: 55vw;
  }
}

@media (max-width: 640px) and (min-width: 590px) {
  .box {
    width: 120px;
    height: 120px;
  }
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
    left: 65vw;
  }
}

@media (max-width: 590px) and (min-width: 520px) {
  .box {
    display: none;
  }
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
    top: 30vh;
  }

  .title2 {
    left: 10vw;
    font-size: 3rem;
  }

  .text1 {
    left: 10vw;
  }

  a.button {
    left: 10vw;
  }

  .line {
    left: 70vw;
  }
}

@media (max-width: 520px) and (min-width: 390px) {
  .box {
    display: none;
  }
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
    left: 15vw;
    font-size: 2.5rem;
    top: 20vh;
  }

  .title {
    left: 5vw;
    font-size: 2.5rem;
    color: #d2d2d2;
    top: 30vh;
  }

  .title2 {
    left: 15vw;
    font-size: 2.5rem;
    top: 40vh;
  }

  .text1 {
    left: 15vw;
    font-size: 0.8rem;
    top: 55vh;
  }

  a.button {
    left: 15vw;
    top: 75vh;
  }

  .line {
    left: 70vw;
  }
}

@media (max-width: 390px) and (min-width: 370px) {
  .box {
    display: none;
  }
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
    font-size: 2.5rem;
    top: 20vh;
  }

  .title {
    left: 5vw;
    font-size: 2.5rem;
    color: #d2d2d2;
    top: 30vh;
  }

  .title2 {
    left: 10vw;
    font-size: 2rem;
    top: 40vh;
  }

  .text1 {
    left: 10vw;
    font-size: 0.8rem;
    top: 55vh;
  }

  a.button {
    left: 10vw;
    top: 75vh;
  }

  .line {
    left: 70vw;
  }
}

@media (max-width: 370px) {
  .box {
    display: none;
  }
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
    font-size: 2rem;
    top: 20vh;
  }

  .title {
    left: 5vw;
    font-size: 2rem;
    color: #d2d2d2;
    top: 30vh;
  }

  .title2 {
    top: 45vh;
    left: 10vw;
    font-size: 1.5rem;
    top: 40vh;
  }

  .text1 {
    left: 10vw;
    font-size: 0.8rem;
    top: 50vh;
  }

  a.button {
    left: 10vw;
    top: 70vh;
  }

  .line {
    display: none;
  }
}
</style>
