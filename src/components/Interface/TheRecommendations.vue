<template lang="pug">
div
  transition(:name="image2" appear)
    img.image1(v-if ="image2 === 'imageEnter2'" src="../../assets/out/wardrobe1.jpg")
  transition(:name="image" appear)
    img.image2(v-if ="image === 'imageEnter'" src="../../assets/out/guy1.jpg")
  transition(:name="pageTransition" appear)
    div(v-if ="pageTransition === 'pageEnter'")
      .numbering 03
      .title CREATE OUTFIT
      .title2 WE RECOMMEND YOUR FIT
      p.text1 Our outfit recommendation system suggests 
        <br/>fit for you to make it easier
        <br/>for you to create fashionable 
        <br/>looks effortlessly.
      router-link.button(to="/signin") SIGN UP TO SEE MORE!
      .line
</template>

<script>
import TheNavbar from "../nav/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
  data() {
    return {
      pageTransition: "pageEnter",
      image: "imageEnter",
      image2: "imageEnter2",
    };
  },
  beforeRouteUpdate(to, from) {
    console.log(from.fullPath);
    if (from.fullPath === "/schedule") {
      // this.pageTransition
      console.log("haloo");
    }
    console.log(to.fullPath);
    // console.log(next);
  },
  beforeRouteLeave(to, from, next) {
    // console.log(this.isActiveArray);
    if (to.fullPath === "/schedule") {
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
    } else if (to.fullPath != "/schedule") {
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
};
</script>

<style scoped>
.line {
  position: fixed;
  border: 1px solid #f94f4f;
  transform: rotate(-35deg);
  width: 10%;
  top: 53vh;
  right: 60vw;
}
.container {
  padding: 20px;
}
.numbering {
  color: transparent;
  font-family: Lexend;
  font-weight: bold;
  position: fixed;
  top: 15vh;
  left: 35vw;
  font-size: 4rem;
  z-index: 999;
  -webkit-text-stroke: 1px #f94f4f;
}
.title {
  color: #8a1a1f;
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
  top: 45vh;
  left: 35vw;
  font-size: 4rem;
  z-index: 999;
  -webkit-text-stroke: 1px #f2f2f2;
}

.image1 {
  position: fixed;
  bottom: -70px;
  left: -370px;
  /* width: 20%; */
  /* width: 55.5%; */
  width: 55.5%;
  /* width: 850px; */
  height: auto;
  /* height: 929px; */
}

/* .image1 {
  height: auto;
} */

.image2 {
  vertical-align: bottom;
  position: fixed;
  /* top: 325px; */
  bottom: -200px;
  right: -390px;
  /* width: 500px; */
  width: 50%;
  height: auto;
}

.text1 {
  color: #f2f2f2;
  font-family: Lexend;
  position: fixed;
  top: 65vh;
  left: 35vw;
  font-size: 1.1rem;
  z-index: 999;
  /* font-weight: lighter; */
}

a.button {
  text-decoration: none;
  color: #f3c5c5;
  position: fixed;
  top: 92vh;
  left: 35vw;
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

@media (min-height: 900px) {
  .image1 {
    height: 90%;
  }
}

@media (min-width: 1600px) {
  .image1 {
    height: 90%;
  }

  .title {
    left: 30vw;
  }

  .title2 {
    /* font-size: 3.6rem; */
    left: 40vw;
  }
  .numbering {
    /* font-size: 3.5rem; */
    left: 40vw;
  }

  .text1 {
    left: 40vw;
  }

  a.button {
    left: 40vw;
  }
}
@media (max-width: 1500px) and (min-width: 1440px) {
  .image1 {
    width: 58%;
  }
}

@media (max-width: 1440px) and (min-width: 1320px) {
  .title {
    /* font-size: 5.5rem; */
    left: 30vw;
  }
  .title2 {
    font-size: 3.6rem;
    left: 40vw;
  }
  .numbering {
    /* font-size: 3.5rem; */
    left: 40vw;
  }

  .text1 {
    left: 40vw;
  }

  a.button {
    left: 40vw;
  }

  .image1 {
    width: 63%;
  }

  .image2 {
    width: 55%;
  }
}

@media (min-height: 300px) and (max-height: 715px) {
  .title2 {
    top: 40vh !important;
  }

  .text1 {
    top: 65vh !important;
  }

  a.button {
    top: 95vh !important;
  }
}

@media (max-width: 1320px) and (min-width: 1220px) {
  .title {
    font-size: 5.5rem;
    left: 30vw;
    /* top: 27vh; */
  }
  .title2 {
    font-size: 3.3rem;
    left: 40vw;
    /* top: 45vh; */
  }
  .numbering {
    font-size: 3.5rem;
    left: 40vw;
    /* top: 15vh; */
  }

  .text1 {
    font-size: 1rem;
    left: 40vw;
    top: 61vh;
  }

  a.button {
    left: 40vw;
    top: 88vh;
  }

  .image1 {
    width: 67%;
  }
  .image2 {
    width: 60%;
  }

  .line {
    top: 50vh;
    left: 35vw;
  }
}

@media (max-width: 1220px) and (min-width: 1120px) {
  .title {
    font-size: 5.5rem;
    left: 37vw;
    /* top: 27vh; */
  }
  .title2 {
    font-size: 2.7rem;
    left: 47vw;
    /* top: 45vh; */
  }
  .numbering {
    font-size: 3.5rem;
    left: 47vw;
    /* top: 15vh; */
  }

  .text1 {
    font-size: 1rem;
    left: 47vw;
    top: 61vh;
  }

  a.button {
    left: 47vw;
    top: 88vh;
  }
  .image1 {
    width: 75%;
    right: -470px;
  }
  .image2 {
    display: none;
  }

  .line {
    top: 50vh;
    left: 43vw;
  }
}

@media (max-width: 1120px) and (min-width: 950px) {
  .image1 {
    width: 120%;
    left: -800px;
  }
  .image2 {
    display: none;
  }

  .numbering {
    left: 50vw;
  }

  .title {
    left: 36vw;
    font-size: 4.5rem;
    top: 30vh;
  }

  .title2 {
    font-size: 2.5rem;
    /* top: 40vh; */
    left: 50vw;
  }

  .text1 {
    left: 50vw;
    /* top: 60vh; */
  }

  a.button {
    left: 50vw;
    /* top: 85vh; */
  }

  .line {
    top: 50vh;
    left: 43vw;
  }
}

@media (max-width: 950px) and (min-width: 860px) {
  .image1 {
    width: 130%;
    left: -800px;
  }

  .image2 {
    display: none;
  }

  .numbering {
    left: 50vw;
  }

  .title {
    left: 36vw;
    font-size: 4.5rem;
    top: 30vh;
  }

  .title2 {
    font-size: 2.5rem;
    /* top: 40vh; */
    left: 50vw;
  }

  .text1 {
    left: 50vw;
    /* top: 60vh; */
  }

  a.button {
    left: 50vw;
    /* top: 85vh; */
  }

  .line {
    top: 50vh;
    left: 43vw;
  }
}

@media (max-width: 860px) and (min-width: 810px) {
  .image1 {
    width: 140%;
    left: -800px;
  }

  .image2 {
    display: none;
  }

  .numbering {
    left: 50vw;
  }

  .title {
    left: 36vw;
    font-size: 4.5rem;
    top: 30vh;
  }

  .title2 {
    font-size: 2.5rem;
    /* top: 40vh; */
    left: 50vw;
  }

  .text1 {
    left: 50vw;
    /* top: 60vh; */
  }

  a.button {
    left: 50vw;
    /* top: 85vh; */
  }

  .line {
    top: 50vh;
    left: 43vw;
  }
}

@media (max-width: 810px) and (min-width: 725px) {
  .image1 {
    width: 150%;
    left: -800px;
  }

  .image2 {
    display: none;
  }

  .numbering {
    left: 52vw;
  }

  .title {
    left: 38vw;
    font-size: 4.35rem;
    top: 30vh;
  }

  .title2 {
    font-size: 2.5rem;
    /* top: 40vh; */
    left: 52vw;
  }

  .text1 {
    left: 52vw;
    font-size: 0.9rem;
    /* top: 60vh; */
  }

  a.button {
    left: 52vw;
    /* top: 85vh; */
  }

  .line {
    top: 50vh;
    left: 45vw;
  }
}

@media (max-width: 725px) and (min-width: 640px) {
  .image1 {
    width: 170%;
    left: -800px;
  }

  .image2 {
    display: none;
  }

  .numbering {
    left: 59vw;
  }

  .title {
    left: 38vw;
    font-size: 3.7rem;
    top: 30vh;
  }

  .title2 {
    font-size: 2.1rem;
    /* top: 40vh; */
    left: 59vw;
  }

  .text1 {
    left: 59vw;
    font-size: 0.7rem;
    top: 70vh;
  }

  a.button {
    left: 59vw;
    /* top: 85vh; */
  }

  .line {
    top: 48vh;
    left: 53vw;
  }
}

@media (max-width: 640px) and (min-width: 580px) {
  .image1 {
    display: none;
  }

  .circle,
  .arrow {
    display: none;
  }

  .image2 {
    display: none;
  }

  .numbering {
    left: 10vw;
    font-size: 3rem;
  }

  .title {
    left: 5vw;
    font-size: 4rem;
  }

  .title2 {
    top: 40vh;
    left: 10vw;
    font-size: 2.5rem;
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
    left: 5vw;
    top: 43vh;
  }
}

@media (max-width: 580px) and (min-width: 450px) {
  .image1 {
    display: none;
  }

  .image2 {
    display: none;
  }

  .numbering {
    left: 10vw;
    font-size: 3rem;
  }

  .title {
    left: 5vw;
    font-size: 4rem;
  }

  .title2 {
    top: 45vh;
    left: 10vw;
    font-size: 2.5rem;
    top: 40vh;
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
    left: 5vw;
    top: 43vh;
  }
}

@media (max-width: 450px) and (min-width: 330px) {
  .image1 {
    display: none;
  }

  .image2 {
    display: none;
  }

  .numbering {
    left: 10vw;
    font-size: 2.5rem;
  }

  .title {
    left: 5vw;
    font-size: 3rem;
  }

  .title2 {
    top: 45vh;
    left: 10vw;
    font-size: 2rem;
    top: 40vh;
  }

  .text1 {
    left: 10vw;
    top: 60vh;
    font-size: 0.7rem;
  }

  a.button {
    left: 10vw;
    top: 85vh;
  }

  .line {
    left: 5vw;
    top: 43vh;
  }
}

@media (max-width: 330px) {
  .image1 {
    display: none;
  }

  .image2 {
    display: none;
  }

  .numbering {
    left: 10vw;
    font-size: 2.5rem;
  }

  .title {
    left: 5vw;
    font-size: 2.5rem;
  }

  .title2 {
    top: 45vh;
    left: 10vw;
    font-size: 2rem;
    top: 40vh;
  }

  .text1 {
    left: 10vw;
    top: 60vh;
    font-size: 0.7rem;
  }

  a.button {
    left: 10vw;
    top: 85vh;
  }

  .line {
    left: 5vw;
    top: 43vh;
  }
}
</style>
