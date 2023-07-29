<template lang="pug">
.mtop
  div(v-if="isLoading")
    base-spinner
  div(v-else)
    section
      h2 Hello {{ username }}
      h2 Email : {{ email }}
        //- h3 {{ curUsername }}
    //- section
    //-   base-card
    //-     header
    //-       h2 Add Outfit
    //-       base-button(v-if="active" link :to="AddLink" @click="isActive") Add
    //-       router-view
</template>

<script>
export default {
  props: ["clientid"],
  data() {
    return {
      isLoading: false,
      error: null,
      // active: true,
    };
  },
  computed: {
    AddLink() {
      return "wardrobes/" + this.$route.params.id + "/additem";
    },
    username() {
      const currentUsername = this.$store.getters["users/currentUsername"];
      // console.log(currentUsername)
      if (currentUsername === undefined || currentUsername === null) {
        return null;
      } else {
        return currentUsername;
      }
    },
    email() {
      // const selectedUser = this.$store.getters["users/users"].find(
      //   (user) => user.id === this.$route.params.id
      // );
      // if (selectedUser === undefined) {
      //   return null;
      // } else {
        // return selectedUser.email;
      // }

      const currentEmail = this.$store.getters["users/currentEmail"];
      if (currentEmail === undefined || currentEmail === null) {
        return null;
      } else {
        return currentEmail;
      }
    }
  },
  created() {
    this.loadUsers();
  },
  methods: {
    // isActive() {
    //   this.active = !this.active;
    // },
    async loadUsers() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("users/loadUsers");
      } catch (error) {
        this.error = error.message || "something went wrong!";
      }
      this.isLoading = false;
    },
    close() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
.mtop {
  margin-top: 85px;
}
</style>
