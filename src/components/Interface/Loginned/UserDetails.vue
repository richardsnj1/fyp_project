<template lang="pug">
//- <li>
    //- <!-- <h3>{{ clientid }}</h3> -->
    <h3>{{ username }}</h3>
    <h4>{{ email }}</h4>
  //-  li
  //-    h3 {{ username }}
  //-    h4 {{ email }}
  //-    .actions
      <base-button link :to="userAddLink">Add Wardrobe</base-button>
      <base-button link :to="userDetailsLink">View Details</base-button>
  //- </li>
div
  li
    h3 {{ username }}
    h4 {{ email }}
    .actions
      base-button(link :to="userAddLink") Add Wardrobe
      base-button(link :to="userDetailsLink") View Details
</template>

<script>
export default {
  props: ['id', 'username', 'email'],
  data(){
    return{
      clientid: this.id,
    }
  },
  computed:{
    userAddLink() {
      return "wardrobes" + '/' + this.id + '/additem'; // /wardrobes/u1/additem
    },
    userDetailsLink() {
      return '/users/' + this.id; // /user/u1
    },
  },
  created(){
    // console.log(this.clientid);
  }
}
</script>


<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
  font-family: Lexend;
  color: #f2f2f2;
}

div {
  margin: 0.5rem 0;
}



.actions {
  display: flex;
  justify-content: flex-end;
}
</style>