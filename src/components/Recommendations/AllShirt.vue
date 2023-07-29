<template lang="pug">
.card.mright
  .card-body
    img.card-img(:src="url")
    h3.card-title {{ outfit }}
    p.card-text Outift Color : {{ name }}
</template>

<script>
import { storage } from '../../firebase';
import { ref, getDownloadURL } from 'firebase/storage';

export default {
  props: ['id', 'outfit', 'name', 'image'],
  data(){
    return{
      url: "",
      shirts: this.outfit,
      // shirtcolor: {
      //   color: ""
      // },
      shirtcolor: "",
    }
  },
  created() {
    // this.loadItems();
  },
  mounted() {
    getDownloadURL(ref(storage,this.image)).then(
      (download_url) => (this.url = download_url)
    );
    // console.log(download_url);
    // console.log(getDownloadURL());
  },
  computed:{

    // allShirts(){

    // }
    
  },
  methods:{
    deleteItem(){
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
}
</script>

<style scoped>
.mright{
  margin-right: 10px;
  margin-bottom: 30px;
  margin-left: 10px;
}
</style>