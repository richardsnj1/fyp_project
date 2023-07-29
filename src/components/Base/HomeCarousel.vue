<template lang="pug">
div
  .carousel 
      ul.slides 
          input#img-1(type="radio" name="rad-buttons" checked)
          li.slide-container
              .slide-image 
                  img(src="../../assets/kdrama-styles-feature-edit.jpg")
              .carousel-controls 
                  label.prev-slide(for="img-3")
                      span &lsaquo;
                  label.next-slide(for="img-2")
                      span &rsaquo;
          input#img-2(type="radio" name="rad-buttons")
          li.slide-container
              .slide-image 
                  img(src="../../assets/fas2.jpg")
              .carousel-controls 
                  label.prev-slide(for="img-1")
                      span &lsaquo;
                  label.next-slide(for="img-3")
                      span &rsaquo;
          input#img-3(type="radio" name="rad-buttons")
          li.slide-container
              .slide-image 
                  img(src="../../assets/fas.jpg")
              .carousel-controls 
                  label.prev-slide(for="img-2")
                      span &lsaquo;
                  label.next-slide(for="img-1")
                      span &rsaquo;
          .carousel-dots 
              label.carousel-dot#img-dot-1(for="img-1")
              label.carousel-dot#img-dot-2(for="img-2")
              label.carousel-dot#img-dot-3(for="img-3")




</template>

<script>
// import TheNavbar from './nav/TheNavbar.vue';
// import { Carousel } from 'bootstrap';

export default {
  components: {},
  // data() {
  //   return {
  //     width: 0,
  //   };
  // },
  // methods: {
  //   winwidth(){
  //     this.width = window.innerWidth;
  // 	},
  // },
};
</script>

<style scoped>
.carousel {
  margin: auto;
  margin-bottom: 2rem;
}

ul.slides {
  display: block;
  position: relative;
  height: 1000px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
}

.slides * {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

ul.slides input {
  display: none;
}

.slide-container {
  display: block;
}

.slide-image {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.slide-image img {
  width: 100%;
  min-height: 100%;
}

.carousel-controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  font-size: 100px;
  line-height: 1000px;
  color: #fff;
}

.carousel-controls label {
  display: none;
  position: absolute;
  padding: 0 20px;
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;
}

.slide-image:hover + .carousel-controls label {
  opacity: 0.5;
}

.carousel-controls label:hover {
  opacity: 1;
}

.carousel-controls .prev-slide {
  width: 40%;
  text-align: left;
  left: 0;
}

.carousel-controls .next-slide {
  width: 40%;
  text-align: right;
  right: 0;
}

.carousel-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  z-index: 999;
  text-align: center;
}

.carousel-dots .carousel-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  margin: 10px;
}

input:checked + .slide-container .slide-image {
  opacity: 1;
  transform: scale(1);
  transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .carousel-controls label {
  display: block;
}

input#img-1:checked ~ .carousel-dots label#img-dot-1,
input#img-2:checked ~ .carousel-dots label#img-dot-2,
input#img-3:checked ~ .carousel-dots label#img-dot-3,
input#img-4:checked ~ .carousel-dots label#img-dot-4,
input#img-5:checked ~ .carousel-dots label#img-dot-5,
input#img-6:checked ~ .carousel-dots label#img-dot-6 {
  opacity: 1;
}

@media (max-width: 1250px) and (min-width: 1100px) {
  ul.slides {
    height: 900px;
    transition: 0.3s ease-out;
  }

  .carousel-controls {
  line-height: 900px;
}
}

@media (max-width: 1099px) and (min-width: 900px) {
  ul.slides {
    height: 700px;
    transition: 0.3s ease-out;
  }

  .carousel-controls {
  line-height: 700px;
}
}

@media (max-width: 900px) and (min-width: 710px) {
  ul.slides {
    height: 550px;
    transition: 0.3s ease-out;
  }

  .carousel-controls {
  line-height: 550px;
}
}

@media (max-width: 710px) and (min-width: 550px) {
  ul.slides {
    height: 450px;
    transition: 0.3s ease-out;
  }

  .carousel-controls {
  line-height: 450px;
}
}

@media (max-width: 549px) and (min-width: 400px) {
  ul.slides {
    height: 350px;
    transition: 0.3s ease-out;
  }

  .carousel-controls {
  line-height: 350px;
}
}

@media (max-width: 400px) {
  ul.slides {
    height: 270px;
    transition: 0.3s ease-out;
  }

  .carousel-controls {
  line-height: 270px;
}
}

</style>
