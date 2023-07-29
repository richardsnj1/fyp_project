<template lang="pug">
.mtop 
  base-dialog(:show="!!error" title="An error occurred!" @close="handleError")
    p {{ error }}
  section
    header
      h2.d-flex.justify-content-center.title Recommendations
    .container-xl
      base-spinner(v-if="isLoading")
      div(v-else-if="hasItems && !isLoading").row.d-flex.justify-content-center
        section
          paper-doll
          //- test-drag
        base-card 
            //- form.filtering(@submit.prevent="changeFilter")
            h2.white2 Filter your needs
            .row.mb-4 
              .col-md-6 
                label(for="outfit") Outfit Type
                v-select.white(id="outfit" :clearable="false" :options="Choice" :required="!outfit" v-model.trim="outfit")
              .col-md-6 
                label(for="color") Color
                v-select.white(id="color" :clearable="false" :options="Colors" :required="!title" v-model.trim="title")
        section
          h1 {{ outfit }}
          .row.d-flex.justify-content-left(v-if="hasOutfit")
            all-shirt.col-sm-2(v-for="item in currentItem" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
          h2(v-else) No item inside
        section
          h1.d-flex.justify-content-center.title.mb-4 Outfit Recommendations
          .row.d-flex.justify-content-left(v-if="hasOutfit && this.outfit !== 'Shirt'") 
            h1 Shirt
            all-shirt.col-sm-2(v-for="item in RecommendItem('Shirt')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
          h2(v-else)
        section
          div(v-if="this.outfit === 'Shorts'")            
          .row.d-flex.justify-content-left(v-else-if="hasOutfit && this.outfit !== 'Jeans'")
            h1 Shorts
            all-shirt.col-sm-2(v-for="item in RecommendItem('Shorts')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
          h2(v-else)
        section
          div(v-if="this.outfit === 'Shorts'")            
          .row.d-flex.justify-content-left(v-else-if="hasOutfit && this.outfit !== 'Jeans'")
            h1 Jeans
            all-shirt.col-sm-2(v-for="item in RecommendItem('Jeans')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
          h2(v-else)
        section
          .row.d-flex.justify-content-left(v-if="hasOutfit && this.outfit !== 'Sneakers'")
            h1 Sneakers
            all-shirt.col-sm-2(v-for="item in RecommendItem('Sneakers')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
          h2(v-else)
        section
          .row.d-flex.justify-content-left(v-if="hasOutfit && this.outfit !== 'Hat'")
            h1 Hat
            all-shirt.col-sm-2(v-for="item in RecommendItem('Hat')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
          h2(v-else)
        section
          .row.d-flex.justify-content-left(v-if="hasOutfit && this.outfit !== 'Jacket'")
            h1 Jacket
            all-shirt.col-sm-2(v-for="item in RecommendItem('Jacket')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
          h2(v-else)
        section
          .row.d-flex.justify-content-left(v-if="hasOutfit && this.outfit !== 'Handbag'")
            h1 Handbag
            all-shirt.col-sm-2(v-for="item in RecommendItem('Handbag')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
          h2(v-else)
      h3(v-else).title.d-flex.justify-content-center You don't have any items inside your wardrobe yet!

</template>

<script>
import AllShirt from "../../Recommendations/AllShirt.vue";
import PaperDoll from "../../Recommendations/PaperDoll.vue";
import TestDrag from "../../Recommendations/TestDrag.vue";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";

export default {
  props: ["id"],
  components: {
    AllShirt,
    vSelect,
    PaperDoll,
    TestDrag
  },
  data() {
    return {
      outfit: "Shirt",
      title: "White",
      isLoading: false,
      error: null,
      // selectedUser: null,
      active: true,

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
    };
  },
  computed: {
    ColorPalette() {
      const colorPalette = {
        White: [
          "Black",
          "Red",
          "Yellow",
          "Green",
          "Purple",
          "Pink",
          "Gray",
          "Blue",
        ],
        Black: [
          "White",
          "Black",
          "Red",
          "Green",
          "Purple",
          "Pink",
          "Gray",
          "Blue",
        ],
        Red: [
          "Black", "White", "Blue", "Gray", "Yellow", "Green"
        ],
        Yellow: ["Black", "White", "Blue", "Gray", "Purple", "Green"],
        Green: ["Black", "White", "Blue", "Purple", "Yellow"],
        Purple: ["Black", "White", "Yellow", "Green"],
        Pink: ["Black", "White", "Blue", "Gray", "Green", "Yellow", "Red"],
        Gray: ["Black", "Red", "Pink", "Yellow", "Green", "Gray"],
        Blue: ["Black", "White", "Blue", "Gray", "Red", "Yellow", "Green"],
      };
      return colorPalette[this.title] || "Item not found";
    },
    receivedItems() {
      return this.$store.getters["wardrobe/items"];
    },
    hasItems() {
      return this.$store.getters["wardrobe/hasItems"];
    },
    currentItem() {
      return this.$store.getters["wardrobe/items"].filter(
        (item) => item.userOutfit === this.outfit && item.title === this.title
      );
    },
    hasOutfit() {
      const currentItem = this.$store.getters["wardrobe/items"].filter(
        (item) => item.userOutfit === this.outfit && item.title === this.title
      );
      if (currentItem.length === 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  created() {
    this.loadItems();
  },
  methods: {
    async loadItems() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("wardrobe/fetchItems");
      } catch (error) {
        this.error = error.message || "An error happened!";
      }
      this.isLoading = false;
    },
    RecommendItem(outfitType) {
      return this.$store.getters["wardrobe/items"].filter(
        (item) =>
          item.userOutfit === outfitType &&
          this.ColorPalette.includes(item.title)
      );
    },
    handleError() {
      this.error = null;
    },
    isActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
.mtop {
  margin-top: 85px;
}
.add {
  color: #f2f2f2;
}

.title {
  font-family: Lexend;
  color: #f2f2f2;
  margin: auto;
}

label {
  color: #f2f2f2;
}

.white {
  background-color: #f2f2f2 !important;
  border-radius: 5px;
}

.white2 {
  color: #f2f2f2;
}
</style>
