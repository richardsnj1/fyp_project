<template lang="pug">
div.mt
  section
    base-card.white
      h2 Page not found 
      p This page could not be found, maybe check our information on 
        router-link(to="/aboutus") About Us
</template>

<style scoped>
.white{
  color: #f2f2f2;
  /* background-color: #f2f2f2; */
}
.mt{
  margin-top: 85px;
}
</style>