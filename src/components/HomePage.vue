<template lang="pug">
div
	HomeCarousel
	h1.title Find Your Style
	HomeCard
	.bg-image.home1.gaptop
	.bg-image.home2
	.bg-image.home3

</template>

<script>
// import HomeCarouselVue from './Base/HomeCarousel.vue'
// import { defineComponent } from '@vue/composition-api'
// import TheNavbar from './nav/TheNavbar.vue';
import HomeCarousel from './Base/HomeCarousel.vue';
import HomeCard from './Base/HomeCard.vue';
import TheSocial from './nav/TheSocial.vue';

export default {
    components: {
        // TheNavbar
				HomeCarousel,
				HomeCard,
				TheSocial
    },
		mounted(){
    const isReloaded = sessionStorage.getItem('isReloaded');
    if (!isReloaded) {
      sessionStorage.setItem('isReloaded', true);
      window.location.reload();
    } else {
      sessionStorage.removeItem('isReloaded');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400&display=swap');

.title{
	text-align: center;
	color: #fff;
	font-family: Plus Jakarta Sans;
}

.gaptop{
	margin-top: 2rem;
}


.pinkbox{
	width: 100%;
	height: 135vh;
	background-color: #F5E1E1;
}
/* .pinkbox{
	width: 100%;
	background-size: 100% 100%;
	/* min-height: 55vh; */
	/* height: 135vh; */
	/* background-color: #F5E1E1; */
	/* background-repeat: no-repeat; */
	/* background-attachment: fixed;   */
	/* background-image: url('../assets/pinkbox/pinkbox.png'); */
/* } */ 

.home1{
	/* width: 100%;
	background-size: 100% 100%; */
	height: 1200px;
	/* background-repeat: no-repeat; */
	background-image: url('../assets/Homey1.png');
}

.home2{
	height: 1800px;
	background-image: url('../assets/Homey2.png');
}

.home3{
	height: 1200px;
	background-image: url('../assets/Homey3.png');
}

.imgsize{
	width: 100%;
}

.word{
	text-align: center;
	color: #171717;
	font-family: Plus Jakarta Sans;
	font-weight: bold;
}

.word2{
	text-align: center;
	color: #FBFBFB;
	font-family: Plus Jakarta Sans;
	font-weight: bold;
}

@media (max-width: 1700px) and (min-width: 1360px) {
	.home2{
		height: 1500px;
		transition: 0.3s ease-out;
	}
}
@media (max-width: 1640px) and (min-width: 1360px) {
	.home1{
	height: 1000px;
	transition: 0.3s ease-out;
}

.home3{
	height: 1000px;
	transition: 0.3s ease-out;
}
}

/* @media (max-width: 1499px) and (min-width: 1300px) {
	.home1{
	height: 85vh;
	transition: 0.3s ease-out;
}
} */

@media (max-width: 1360px) and (min-width: 1050px) {
	.home1{
	height: 800px;
	transition: 0.3s ease-out;
}
.home2{
		height: 1300px;
		transition: 0.3s ease-out;
	}

	.home3{
	height: 800px;
	transition: 0.3s ease-out;
}
}

@media (max-width: 1050px) and (min-width: 875px) {
	.home1{
	height: 650px;
	transition: 0.3s ease-out;
}

.home2{
		height: 1100px;
		transition: 0.3s ease-out;
	}

	.home3{
	height: 650px;
	transition: 0.3s ease-out;
}
}

@media (max-width: 875px) and (min-width: 615px) {
	.home1{
	height: 450px;
	transition: 0.3s ease-out;
}
.home2{
		height: 800px;
		transition: 0.3s ease-out;
	}

	.home3{
	height: 450px;
	transition: 0.3s ease-out;
}
}

@media (max-width: 615px) and (min-width: 500px) {
	.home1{
	height: 370px;
	transition: 0.3s ease-out;
}

	.home2{
		height: 550px;
		transition: 0.3s ease-out;
	}

	.home3{
	height: 370px;
	transition: 0.3s ease-out;
}
}

@media (max-width: 500px) and (min-width: 410px){
	.home1{
	height: 300px;
	transition: 0.3s ease-out;
	}

.home2{
		height: 450px;
		transition: 0.3s ease-out;
	}

	.home3{
	height: 300px;
	transition: 0.3s ease-out;
	}
}

@media (max-width: 409px){
	.home1{
	height: 250px;
	transition: 0.3s ease-out;
}

.home2{
		height: 350px;
		transition: 0.3s ease-out;
	}
	.home3{
	height: 250px;
	transition: 0.3s ease-out;
}
}
</style>