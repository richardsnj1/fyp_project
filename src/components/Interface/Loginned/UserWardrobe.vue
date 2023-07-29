<template lang="pug">
.mtop
  base-dialog(:show="!!error" title="An error occurred!" @close="handleError")
    p {{ error }}
  section
    header
      h2.d-flex.justify-content-center.title.mb-5 Wardrobe
    base-card
      header
        h2.add Add Outfit
        base-button(link :to="currentUserLink" @click="isActive") Add
        //- base-button(v-else link to="/wardrobes" @click="isActive") Cancel
        router-view
  section
    .container-xl
      base-spinner(v-if="isLoading")
      .row.d-flex.justify-content-center(v-else-if="hasItems && !isLoading")
        wardrobe-item.col-sm-3(v-for="item in receivedItems" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
      h3(v-else).title.d-flex.justify-content-center You don't have any items inside your wardrobe yet!
  
</template>

<script>
import WardrobeItem from "../../Wardrobe/WardrobeItem.vue";
// import AddItem from "../../Wardrobe/AddItem.vue";
// import { useStore, mapGetters } from 'vuex';

export default {
  props: ['id'],
  components: {
    WardrobeItem,
    // AddItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      // selectedUser: null,
      active: true,
      currentPage: '',
    };
  },
  computed: {
    currentLink(){
      console.log(window.location.pathname);
      return window.location.pathname;
    },
    currentUserLink(){
      return 'wardrobes/' + this.$store.getters['users/currentUser'] + '/additem';
      // return this.$store.getters['users/currentUser'] + '/additem';
    },
    // AddLink() {
    //   return this.currentUser + '/additem';
    // },
    receivedItems() {
      return this.$store.getters['wardrobe/items'];
    },
    hasItems() {
      return this.$store.getters['wardrobe/hasItems'];
    },
  },
  created() {
    this.loadItems();
    if(window.location.pathname === 'wardrobes'){
        this.active = true;
    }
    // this.selectedUser = this.$store.getters['users/users'].find(
    //   (user) => user.id === this.id
    // );
  },
  methods: {
    async loadItems() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('wardrobe/fetchItems');
      } catch (error) {
        this.error = error.message || 'An error happened!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    isActive(){
      console.log(this.active);
      this.active = !this.active;
    }
  },
  watch: {
    active(){
      if(window.location.pathname === 'wardrobes'){
        this.active = true;
      }
    }
  },
};
</script>

<style scoped>
.mtop{
  margin-top: 85px;
}

.add{
  color: #f2f2f2;
}

.title{
  font-family: Lexend;
  color: #f2f2f2;
  margin: auto;
}

</style>
