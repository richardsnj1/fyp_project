<template lang="pug">
div
	.container.gaptop.gapbot.d-flex.justify-content-center.align-items-center
		a(href="#")
			.section.facebook(tooltip="FACEBOOK")
				.icon
					.bi.bi-facebook
		a(href="#")
			.section.instagram(tooltip="INSTAGRAM")
				.icon
					.bi.bi-instagram
		a(href="#")
			.section.youtube(tooltip="YOUTUBE")
				.icon
					.bi.bi-youtube
		a(href="#")
			.section.twitter(tooltip="TWITTER")
				.icon
					.bi.bi-twitter
		a(href="#")
			.section.github(tooltip="GITHUB")
				.icon
					.bi.bi-github
</template>

<script>
export default {};
</script>

<style scoped>
body{
	/* font-family: sans-serif; */
}
.container {
  
	margin-bottom: 2rem;
  /* position: absolute; */
  /* inset: 0; */
}

.section {
  background-color: #e2e2e2;
  color: #000;
  height: 36px;
  width: 36px;
  margin: 0px 7px 0px;
  padding: 5px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 9);
  transition: width .3s ease-in-out 0s, 
		background-color .3s linear .2s;
}

.icon{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 36px;
	width: 27px;
	aspect-ratio: 1/1;
}

a{
	text-decoration: none;
	font-size: 14px;
}

.section:hover{
	width: 140px;
	transition: width 300ms ease-in-out 0s,
	background-color 100ms linear 0s;
}

.section:after{
	content: attr(tooltip);
	margin-left: 10px;
}

/* .container{ */
/* position: absolute; */
/* inset: 0; */
/* } */

/* .row{ */
/* height: 36px; */
/* width: 36px; */
/* margin: 0px 7px 0px; */
/* padding: 5px; */
/* display: inline-flex; */
/* align-items: center; */
/* white-space: nowrap; */
/* overflow: hidden; */
/* } */
/* .fab{
	display: flex;
	justify-content: center;
	height: 36px;
	aspect-ratio: 1/1;
} */


.facebook{
	background-color: #4267B2;
	color: #f2f2f2;
	/* font-family: sans-serif; */
	font-size: 14px;
}
.instagram{
	background-color: #f2f2f2;
	color: #E1306C;
}

.twitter{
	background-color: #1DA1F2;
	color: #f2f2f2;
}

.youtube{
	background-color: #FF0000;
	color: #f2f2f2;
	/* font-family: sans-serif; */
}

.github{
	background-color: #333;
	color: #c6c6c6;
} 

.gaptop {
  margin-top: 2rem;
}

.gapright{
	margin-left: 11px;
}
</style>
