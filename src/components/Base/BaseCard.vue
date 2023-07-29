<template lang="pug">
.card
  slot
</template>

<style scoped>
.card {
  background: transparent;
  border-radius: 12px;
  border: 1px solid #f2f2f2;
  /* box-shadow: 0 2px 8px #f2f2f2; */
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>