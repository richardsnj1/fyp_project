<template lang="pug">
.card.mright
  .card-body
    img.card-img(:src="url")
    h3.card-title {{ outfit }}
    p.card-text Outift Color : {{ name }}
    .dropdown
      .float-right.bi.bi-three-dots(type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false")
      .dropdown-menu(aria-labelledby="dropdownMenuButton")
        button.dropdown-item.bi.bi-trash(@click="deleteItem") &nbsp;Delete
        router-link(:to="selectedItem")
          button.dropdown-item.bi.bi-pen() &nbsp;Edit
  //- <div class="dropdown">
  //-   <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  //-      b     Dropdown button
  //-   </button>
  //-   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  //-     <li><a class="dropdown-item" href="#">Action</a></li>
  //-     <li><a class="dropdown-item" href="#">Another action</a></li>
  //-     <li><a class="dropdown-item" href="#">Something else here</a></li>
  //-   </ul>
  //- </div>


</template>

<script>
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import vSelect from "vue-select";

export default {
  props: ["id", "outfit", "name", "image"],
  components:{
    vSelect,
  },
  data() {
    return {
      url: "",
    };
  },
  created() {
    // this.loadItems();
  },
  mounted() {
    getDownloadURL(ref(storage, this.image)).then(
      (download_url) => (this.url = download_url)
    );
    // console.log( getDownloadURL(ref(storage, this.image)).then(
    //   (download_url) => (this.url = download_url)
    // ));
    // console.log(this.url);
    // console.log(getDownloadURL());
  },
  computed:{
    selectedItem(){
      return 'edit/' + this.id;
    }
  },
  methods: {
    deleteItem() {
      // const selectedItem = this.$store.getters["wardrobe/allItems"].find(
      //   (item) => item.id === this.id
      // );
      // console.log(selectedItem);
      // console.log(selectedItem.id);
      // console.log("deleted");
      const selectedId = this.id;
      console.log(selectedId);
      this.$store.dispatch("wardrobe/deleteItem", selectedId);
      // console.log(this.id);
    },
    // async loadItems() {
    //   this.isLoading = true;
    //   try {
    //     await this.$store.dispatch('wardrobe/fetchItems');
    //   } catch (error) {
    //     this.error = error.message || 'An error happened!';
    //   }
    //   this.isLoading = false;
    // },
  },
  // mounted() {

  // }
};
</script>

<style scoped>
.mright {
  margin-right: 10px;
  margin-bottom: 30px;
  margin-left: 10px;
}
</style>
