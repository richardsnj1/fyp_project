<template lang="pug">
.container-xl.gaptop
	.row
		.col-md.gapbot.gapbot
			.card.w-75.mx-auto
				img.card-img-top(src="../../assets/kore.png" alt="Card image cap")
				.card-body 
					p.card-title The Korean Look 
					p.card-text Commonly, it includes a relaxed, youthful style blended with hip hop and rock aesthetics. it is versatile, elegant, and comfortable unisex clothing that attracts youth worldwide.
					a.stretched-link(href="#")
		.col-md.gapbot
			.card.w-75.mx-auto
				img.card-img-top(src="../../assets/par.jpg" alt="Card image cap")
				.card-body 
					p.card-title The Parisian Look 
					p.card-text The Parisian fashion style is all about being très chic while embracing minimalism. Effortlessly cool, classic, lighthearted aesthetic that gives off subtle hints of sophistication
					a.stretched-link(href="#")
		.col-md.gapbot
			.card.w-75.mx-auto
				img.card-img-top(src="../../assets/buscas.jpg" alt="Card image cap")
				.card-body 
					p.card-title The Business-Casual Look 
					p.card-text The perfect blend of traditional business wear with more relaxed pieces that are suitable for the office yet not overly formal or polished
					a.stretched-link(href="#")
</template>

<script>
export default {
  setup() {

	},
};
</script>

<style scoped>
.gaptop {
  margin-top: 2rem;
}

.gapbot {
  margin-bottom: 2rem;
}

.card {
  /* padding-left: 20px;
  padding-right: 20px; */
  border-radius: 15px;
  background-color: #f3efe0;
	cursor: pointer;
	font-family: Plus Jakarta Sans;
}

.card:hover{
	transform: scale(1.1);
	transition: .3s ease-out;
}

.card-img-top {
  border-radius: 15px 15px 0 0;
}

.card-title{
	font-weight: bold;
	text-decoration: underline;
	font-size: large;
}
</style>
