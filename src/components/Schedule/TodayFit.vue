<template lang="pug">
div(v-if="RecommendShirt.length === 0")
  p Please add more item inside your wardrobe
div(v-else)
  section
    h2 Top
    all-shirt.col-sm-3(v-for="item in RecommendShirt" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
  section
    h2 Shorts/Jeans
    .row
      all-shirt.col-sm-3(v-if="RecommendItem('Shorts').length !== 0" v-for="item in RecommendItem('Shorts')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
      all-shirt.col-sm-3(v-if="RecommendItem('Jeans').length !== 0" v-for="item in RecommendItem('Jeans')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
  section
    h2 Sneakers
    all-shirt.col-sm-3(v-if="RecommendItem('Sneakers').length !== 0" v-for="item in RecommendItem('Sneakers')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
    p(v-else) Please add more item to the Sneakers section
  h1 Optionals 
  section
    h2 Hat
    all-shirt.col-sm-3(v-if="RecommendItem('Hat').length !== 0" v-for="item in RecommendItem('Hat')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
    p(v-else) Please add more item to the Hat section
  section
    h2 Jacket
    all-shirt.col-sm-3(v-if="RecommendItem('Jacket').length !== 0" v-for="item in RecommendItem('Jacket')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
    p(v-else) Please add more item to the Jacket section
  section
    h2 Handbag
    all-shirt.col-sm-3(v-if="RecommendItem('Handbag').length !== 0" v-for="item in RecommendItem('Handbag')" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
    p(v-else) Please add more item to the Handbag section

</template>

<script>
import AllShirt from "../Recommendations/AllShirt.vue";

export default {
  components: {
    AllShirt,
  },
  data() {
    return {
      // currentDate: new Date().toString,
      myArray: ["item 1", "item 2", "item 3", "item 4", "item 5"],
      randomItem: "",
      randomColor: "",
      outfit: "Shirt",
      title: "White",
      isLoading: false,
      error: null,
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
      // days: [true, true, true, true, true, true, true],
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
        Red: ["Black", "White", "Blue", "Gray", "Yellow", "Green"],
        Yellow: ["Black", "White", "Blue", "Gray", "Purple", "Green"],
        Green: ["Black", "White", "Blue", "Purple", "Yellow"],
        Purple: ["Black", "White", "Yellow", "Green"],
        Pink: ["Black", "White", "Blue", "Gray", "Green", "Yellow", "Red"],
        Gray: ["Black", "Red", "Pink", "Yellow", "Green", "Gray"],
        Blue: ["Black", "White", "Blue", "Gray", "Red", "Yellow", "Green"],
      };
      return colorPalette[this.title] || "Item not found";
    },
    hasItems() {
      return this.$store.getters["wardrobe/hasItems"];
    },
    RecommendShirt() {
      // const items = "";

      const dummyArray = [];
      // console.log(this.randomColor);
      const randomShirt = this.$store.getters["wardrobe/items"].filter(
        (item) => item.userOutfit === "Shirt" && item.title === this.randomColor
      );
      // console.log(randomShirt);
      if (randomShirt.length === 0) {
        console.log(typeof randomShirt);
        return randomShirt;
      } else {
        const randomIndex = Math.floor(Math.random() * randomShirt.length);
        dummyArray.push(randomShirt[randomIndex]);
        console.log(dummyArray);
        return dummyArray;
      }
    },
  },
  created() {
    this.loadItems();
    const randomIndex = Math.floor(Math.random() * this.Colors.length);
    this.randomColor = this.Colors[randomIndex];
  },
  methods: {
    RecommendItem(outfitType) {
      const dummyArray = [];
      const randomFits = this.$store.getters["wardrobe/items"].filter(
        (item) =>
          item.userOutfit === outfitType &&
          this.ColorPalette.includes(item.title)
      );
      // console.log(randomFits);
      if (randomFits.length === 0) {
        return randomFits;
      } else {
        const randomIndex = Math.floor(Math.random() * randomFits.length);
        dummyArray.push(randomFits[randomIndex]);
        return dummyArray;
      }
    },
    dayChange(index) {
      this.days[index] = !this.days[index];
      // console.log(this.days);
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
    testing() {
      const randomIndex = Math.floor(Math.random() * this.myArray);
      this.randomItem = this.myArray[randomIndex];
      console.log(this.randomItem);
    },
  },
};
</script>
