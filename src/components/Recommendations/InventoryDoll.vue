<template lang="pug">
//- .col-sm-3
.card(style="width: 10rem;")
  .card-body
    img.card-img(:src="url" style="width: 5rem;")
    //- h3.card-title {{ outfit }}
    //- p.card-text Outift Color : {{ name }}
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

  },
}
</script>

<style scoped>
.mright{
  margin-right: 10px;
  margin-bottom: 30px;
  margin-left: 10px;
}

.card{
  background: transparent;
  /* border: 1px solid #f2f2f2; */
}
</style>