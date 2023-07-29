<template lang="pug">
.mtop(@onload="updateId")
  div(v-if="isLoading")
      base-spinner
  div(v-else)
    section.white
      h2 Outfit : {{ currOutfit }}
      h2 Color : {{ currColor }}
  base-card
    form(@submit.prevent="submitForm")
      input.white(type="file" ref="myfile" accept=".jpg, .png, .jpeg" @change.trim="handleFileChange")
      .form-control
        label(for="outfit") Outfit Type
        v-select(id="outfit" :options="Choice" :required="!outfit" v-model.trim="outfit")
      .form-control
        label(for="title") Outfit Color
        v-select(id="title" :options="Colors" :required="!title" v-model.trim="title")
      p.errors(v-if="!formIsValid") Please enter a valid data and check your image.
      .actions 
        base-button Edit Outfit
        base-button(link to="/wardrobes") Back


</template>

<script>
import { storage } from "../../firebase.js";
import { ref, uploadBytes } from "firebase/storage";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

export default {
  components: { vSelect },
  data() {
    return {
      isLoading: false,
      error: null,
      formIsValid: true,
      outfit: "",
      title: "",
      selectedFile: "",
      Choice: [
        "Shirt",
        "Shorts",
        "Jeans",
        "Sneakers",
        "Handbag",
        "Hat",
        "Jacket",
      ],
      Colors: [
        "White",
        "Black",
        "Red",
        "Yellow",
        "Green",
        "Purple",
        "Pink",
        "Gray",
        "Blue",
      ],
      userId: ""
    };
  },
  created() {
    this.loadItems();
  },
  mounted(){

  },
  computed: {
    currOutfit() {
      const currOutfit = this.$store.getters["wardrobe/items"].find(
        (item) => item.id === this.$route.params.id
      );
      console.log(currOutfit);
      if (currOutfit === undefined) {
        return null;
      } else {
        return currOutfit.userOutfit;
      }
    },
    currColor() {
      const currOutfit = this.$store.getters["wardrobe/items"].find(
        (item) => item.id === this.$route.params.id
      );
      console.log(currOutfit);
      if (currOutfit === undefined) {
        return null;
      } else {
        return currOutfit.title;
      }
    },
  },
  methods: {
    updateId(){

    },
    handleFileChange(event) {
      const file = event.target.files[0];
      // Perform any necessary logic with the selected file
      this.selectedFile = file;
      console.log(this.selectedFile.name.replace(/\s/g, ""));
      console.log(typeof this.selectedFile.name);
      console.log(event);
    },
    async loadItems() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("wardrobe/fetchItems");
      } catch (error) {
        this.error = error.message || "An error happened!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    isActive() {
      this.active = !this.active;
    },
    async submitForm() {
      const currOutfit = this.$store.getters["wardrobe/items"].find(
        (item) => item.id === this.$route.params.id
      );

      this.userId = currOutfit.userId;
      // console.log("HAHHAAHAHAH");
      // console.log(this.userId);

      this.formIsValid = true;
      if (
        this.outfit === "" ||
        // !this.outfit.includes('@') ||
        this.title === "" ||
        this.selectedFile === undefined ||
        this.selectedFile === null ||
        this.selectedFile === ""
      ) {
        this.formIsValid = false;
        return;
      }
      // console.log(this.outfit);
      // console.log(this.title);
      // console.log(this.$route.params.id)
      // const storageRef = ref(storage, this.selectedFile.name);
      // this.handleFileChange();
      const storageRef = ref(
        storage,
        this.userId + "/" + this.selectedFile.name.replace(/\s/g, "")
      );
      await uploadBytes(storageRef, this.$refs.myfile.files[0]).then((snapshot) => {
        console.log("uploaded");
        console.log(snapshot);
        console.log(this.selectedFile);
      });
      const data = {
        id: this.$route.params.id,
        image: this.userId + "/" + this.selectedFile.name.replace(/\s/g, ""),
        userOutfit: this.outfit,
        title: this.title,
        userId: this.userId,
      };
      // console.log(this.$store.dispatch("wardrobe"))
      await this.$store.dispatch("wardrobe/editOutfit", data);
      this.$router.replace("/wardrobes");
    },
  },
};
</script>

<style scoped>
.mtop {
  margin-top: 85px;
}

form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}

.white {
  color: #f2f2f2;
}
</style>
