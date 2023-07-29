<template lang="pug">
div.marg
  base-dialog(:show="!!error" title="An error occurred" @close="close")
    p {{ error }}
  section
    base-card
      .controls
        div(v-if="isLoading")
          base-spinner
        ul(v-else-if="hasUsers")
          //- <testing-details></testing-details>
          //- user-details
          user-details(v-for="user in filteredUsers" :key="user.id" :id="user.id" :username="user.username" :email="user.email")
          //- li(v-for="user in filteredUsers" :key="user.id") {{ user.username }}
        h3(v-else) No user found
</template>

<script>
// import TheSchedule from "./TheSchedule.vue";
import UserDetails from "./Loginned/UserDetails.vue";
// import TestingDetails from "./Loginned/TestingDetails.vue";
// import TheSocial from "../nav/TheSocial.vue";

export default {
  components: {
    UserDetails,
    // TestingDetails,
    // TheSchedule,
    // TheSocial,
  },
  data(){
    return{
      isLoading: false,
      error: null
    }
  },
  computed: {
    filteredUsers() {
      return this.$store.getters["users/users"];
    },
    hasUsers() {
      // const userId = this.$store.state.users.filter(users => users.email === 'testing@gmail.com').id
      // console.log(userId);
      // console.log(this.$store.state.users);
      return !this.isLoading && this.$store.getters["users/hasUsers"];
      // return false;
    },
    isUser(){
      return !this.isLoading && this.$store.getters['users/isUser'];
    },
  },
  created(){
    this.loadUsers();
    // console.log(this.$store.getters['users/currentUser']); //get current user id form the user store
    // console.log(this.$store.getters['users/currentUsername']); //get current user id form the user store
  },
  methods:{
    async loadUsers(){
      this.isLoading = true;
      try{
        await this.$store.dispatch("users/loadUsers");
      }catch(error){
        this.error = error.message || "something went wrong!";
      }
      this.isLoading = false;
    },
    close(){
      this.error = null;
    }
  }
};
</script>

<style scoped>
.marg {
  margin-bottom: 85px;
}
</style>
