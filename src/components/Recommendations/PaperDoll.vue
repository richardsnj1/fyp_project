<template lang="pug">
.row
  .container-md.col-md-6
    img(draggable="false" src="../../assets/humane1bg.png" style="margin: auto;")
        //- draggable(:list="RecommendItem('Jeans')" :group="{ name: 'inventory' }" data-list="list4" :move="handleMoveItem" @end="handleDragEndItem" )
    //-   inventory-doll.col.white2(v-for="item in RecommendItem('Jeans')" :key="item.title" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
    //- inventory-doll.col.white2(v-for="(item, index) in RecommendItem" :key="item.title" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
    div(v-if="list1.length !== 0" )
      draggable.col-2.shirt(v-if="list1.length !== 0" :list="list1" :group="{ name: 'inventory' }" data-list="list1" :move="handleMoveItem" @end="handleDragEndItem" )
        inventory-doll.col.white2(v-for="(item, index) in list1" :key="item.title" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")   
      draggable.col-2.short(v-if="list3.length !== 0" :list="list3" :group="{ name: 'inventory' }" data-list="list3" :move="handleMoveItem" @end="handleDragEndItem" )
        inventory-doll.col.white2(v-for="item in list3" :key="item.title" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
      //- draggable.col-2.jeans(v-if="list4.length !== 0" :list="list4" :group="{ name: 'inventory' }" data-list="list4" :move="handleMoveItem" @end="handleDragEndItem" )
      //-   inventory-doll.col.white2(v-for="item in list4" :key="item.title" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
      draggable.col-2.sneakers(v-if="list5.length !== 0" :list="list5" :group="{ name: 'inventory' }" data-list="list5" :move="handleMoveItem" @end="handleDragEndItem" )
        inventory-doll.col.white2(v-for="item in list5" :key="item.title" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
      draggable.col-2.handbag(v-if="list6.length !== 0" :list="list6" :group="{ name: 'inventory' }" data-list="list6" :move="handleMoveItem" @end="handleDragEndItem" )
        inventory-doll.col.white2(v-for="item in list6" :key="item.title" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
      draggable.col-2.hat(v-if="list7.length !== 0" :list="list7" :group="{ name: 'inventory' }" data-list="list7" :move="handleMoveItem" @end="handleDragEndItem" )
        inventory-doll.col.white2(v-for="item in list7" :key="item.title" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
      draggable.col-2.jacket(v-if="list8.length !== 0" :list="list8" :group="{ name: 'inventory' }" data-list="list8" :move="handleMoveItem" @end="handleDragEndItem" )
        inventory-doll.col.white2(v-for="item in list8" :key="item.title" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")
  .col-md-6  
    base-card.title
      h2 Wardrobe
      draggable.row(:list="list2" :group="{ name: 'inventory'}" @change="log" data-list="list2"  :move="handleMoveItem" @end="handleDragEndItem")
        //- .row
        inventory-doll.col-sm-2.white2(v-for="item in list2" :key="item.id" :id="item.id" :image="item.image" :outfit="item.userOutfit" :name="item.title")

</template>

<script>
import "vue-select/dist/vue-select.css";
// import vSelect from "vue-select";
import InventoryDoll from "./InventoryDoll.vue";
// import draggablenow from 'vuedraggable';
import { VueDraggableNext } from "vue-draggable-next";

export default {
  props: ["id"],
  components: {
    // AllShirt,
    // vSelect,
    // PaperDoll,
    InventoryDoll,
    // draggablenow
    draggable: VueDraggableNext,
  },
  data() {
    return {
      outfit: "Shirt",
      title: "White",
      randomItem: "",
      randomColor: "",
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
      list1: [
      ],
      // list2: [
      //   { name: "Juan", id: 5 },
      //   { name: "Edgard", id: 6 },
      //   { name: "Johnson", id: 7 },
      // ],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      list7: [],
      list8: [],
      list9: [],
      dummyArray: [],
      dragging: false,
    };
  },
  computed: {
    ColorPalette() {
      const colorPalette = {
        White: [
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
    const bottom = ["Shorts", "Jeans"];
    const randomIndex2 = Math.floor(Math.random() * bottom.length);
    this.randomColor = this.Colors[randomIndex];
    const randomBottom = bottom[randomIndex2];
    const randomShirt = this.$store.getters["wardrobe/items"].filter((item) => item.userOutfit === "Shirt" && item.title === this.randomColor);
    const randomShorts = this.$store.getters["wardrobe/items"].filter((item) => item.userOutfit === randomBottom && this.ColorPalette.includes(item.title));
    // const randomJeans = this.$store.getters["wardrobe/items"].filter((item) => item.userOutfit === "Jeans" && this.ColorPalette.includes(item.title));
    const randomSneakers = this.$store.getters["wardrobe/items"].filter((item) => item.userOutfit === "Sneakers" && this.ColorPalette.includes(item.title));
    const randomHandbag = this.$store.getters["wardrobe/items"].filter((item) => item.userOutfit === "Handbag" && this.ColorPalette.includes(item.title));
    const randomHat = this.$store.getters["wardrobe/items"].filter((item) => item.userOutfit === "Hat" && this.ColorPalette.includes(item.title));
    const randomJacket = this.$store.getters["wardrobe/items"].filter((item) => item.userOutfit === "Jacket" && this.ColorPalette.includes(item.title));
    if (randomShorts.length === 0) {
      console.log(randomShorts);
      this.list3 = [];
    } else {
      console.log(randomShorts);
      const randomIndex = Math.floor(Math.random() * randomShorts.length);
      this.list3.push(randomShorts[randomIndex]);
    }

    // if (randomJeans.length === 0) {
    //   console.log(randomJeans);
    //   this.list4 = [];
    // } else {
    //   console.log(randomJeans);
    //   const randomIndex = Math.floor(Math.random() * randomJeans.length);
    //   this.list4.push(randomJeans[randomIndex]);
    // }

    if (randomSneakers.length === 0) {
      console.log(randomSneakers);
      this.list5 = [];
      this.list9 = [{image:"../../assets/outfits/empty-pants.png"}];
    } else {
      console.log(randomSneakers);
      const randomIndex = Math.floor(Math.random() * randomSneakers.length);
      this.list5.push(randomSneakers[randomIndex]);
    }

    if (randomHandbag.length === 0) {
      console.log(randomHandbag);
      this.list6 = [];
      this.list9 = [{image:"../../assets/outfits/empty-pants.png"}];
    } else {
      console.log(randomHandbag);
      const randomIndex = Math.floor(Math.random() * randomHandbag.length);
      this.list6.push(randomHandbag[randomIndex]);
    }

    if (randomHat.length === 0) {
      console.log(randomHat);
      this.list7 = [];
      this.list9 = [{image:"../../assets/outfits/empty-pants.png"}];
    } else {
      console.log(randomHat);
      const randomIndex = Math.floor(Math.random() * randomHat.length);
      this.list7.push(randomHat[randomIndex]);
    }

    if (randomJacket.length === 0) {
      console.log(randomJacket);
      this.list8 = [];
      this.list9 = [{image:"../../assets/outfits/empty-pants.png"}];
    } else {
      console.log(randomJacket);
      const randomIndex = Math.floor(Math.random() * randomJacket.length);
      this.list8.push(randomJacket[randomIndex]);
    }

    if(randomShirt.length === 0){
      const whiteShirt = this.$store.getters["wardrobe/items"].filter((item) => item.userOutfit === "Shirt" && item.title === "White");
      this.list1 = whiteShirt
    }else{
      this.list1 = randomShirt
    }

    this.list2 = this.$store.getters["wardrobe/items"];
    // console.log(this.list2);
    // RecommendItem(outfitType) {
    //   const randomFits =  this.$store.getters["wardrobe/items"].filter(
    //     (item) =>
    //       item.userOutfit === outfitType &&
    //       item.title === "Red"
    //       // this.ColorPalette.includes(item.title)
    //   );

    //   if (randomFits.length === 0) {
    //     console.log(randomFits);
    //     return randomFits;
    //   } else {
    //     console.log(randomFits);
    //     const randomIndex = Math.floor(Math.random() * randomFits.length);
    //     this.dummyArray.push(randomFits[randomIndex]);
    //     return this.dummyArray;
    //   }
    // },
    
  },
  methods: {
    testing() {
      this.list2 = this.$store.getters["wardrobe/items"];
      console.log(this.list2);
    },
    handleClone(listKey, event) {
      const clonedItem = { ...event.item };
      const originalList = this[listKey];
      const targetList = listKey === "list1" ? "list2" : "list1";
      // const targetList2 = listKey === "list1" ? "list3" : "list1";
      // const targetList3 = listKey === "list1" ? "list4" : "list1";
      // const targetList4 = listKey === "list1" ? "list5" : "list1";
      // const targetList5 = listKey === "list1" ? "list6" : "list1";
      // const targetList6 = listKey === "list1" ? "list7" : "list1";
      // const targetList7 = listKey === "list1" ? "list8" : "list1";

      console.log(targetList);
      // console.log(targetList2);
      originalList.splice(event.cloneIndex, 1);
      this[targetList].splice(event.cloneIndex, 0, clonedItem);
      // this[targetList2].splice(event.cloneIndex, 0, clonedItem);
      // this[targetList3].splice(event.cloneIndex, 0, clonedItem);
      // this[targetList4].splice(event.cloneIndex, 0, clonedItem);
      // this[targetList5].splice(event.cloneIndex, 0, clonedItem);
      // this[targetList6].splice(event.cloneIndex, 0, clonedItem);
      // this[targetList7].splice(event.cloneIndex, 0, clonedItem);
    },
    handleDragEndItem() {
      if (this.originalList === this.futureList) {
        this.movingItem = this[this.futureList][this.originalIndex];
        this.futureItem = this[this.futureList][this.futureIndex];
        // console.log("hi1");

        if (this.movingItem && this.futureItem) {
          let _list = Object.assign([], this[this.futureList]);
          _list[this.futureIndex] = this.movingItem;
          _list[this.originalIndex] = this.futureItem;
          this[this.futureList] = _list;
          // console.log("hi2");
        }
      } else {
        this.movingItem = this[this.originalList][this.originalIndex];
        this.futureItem = this[this.futureList][this.futureIndex];
        // console.log("hi3");

        if (this.movingItem && this.futureItem) {
          let _listFrom = Object.assign([], this[this.originalList]);
          let _listTo = Object.assign([], this[this.futureList]);
          _listTo[this.futureIndex] = this.movingItem;
          _listFrom[this.originalIndex] = this.futureItem;
          this[this.originalList] = _listFrom;
          this[this.futureList] = _listTo;
          // console.log("hi4");
        }
      }
      document
        .querySelectorAll(".white2")
        .forEach((el) => (el.style.border = "none"));
      // this.$toast.show("dragEnd");
    },
    handleMoveItem(event) {
      document
        .querySelectorAll(".white2")
        .forEach((el) => (el.style.border = "none"));
      const { index, futureIndex } = event.draggedContext;
      this.originalIndex = index;
      this.futureIndex = futureIndex;
      this.originalList = event.from.getAttribute("data-list");
      this.futureList = event.to.getAttribute("data-list");
      if (this[this.futureList][this.futureIndex]) {
        event.to.children[this.futureIndex].style.border = "2px solid orange";
      }
      return false; // disable sort
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
    RecommendItem(outfitType) {
      const randomFits =  this.$store.getters["wardrobe/items"].filter(
        (item) =>
          item.userOutfit === outfitType &&
          item.title === "Red"
          // this.ColorPalette.includes(item.title)
      );

      if (randomFits.length === 0) {
        console.log(randomFits);
        return randomFits;
      } else {
        console.log(randomFits);
        const randomIndex = Math.floor(Math.random() * randomFits.length);
        this.dummyArray.push(randomFits[randomIndex]);
        return this.dummyArray;
      }
    },
    handleError() {
      this.error = null;
    },
    isActive() {
      this.active = !this.active;
    },
    handleDragStart(event) {
      const itemId = event.target.id;
      event.dataTransfer.setData("text/plain", itemId);
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
  /* margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px; */
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  grid-gap: 0.2em;
}

.cell {
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.shirt{
  position: absolute;
  top: 200px;
  left: 260px;
  /* left: 150px; */
  /* width: 200px; */
}

.short{
  position: absolute;
  top: 350px;
  left: 260px;
  /* top: -470px; */
  /* left: 150px; */
}

.handbag{
  position: absolute;
  top: 350px;
  /* top: -710px; */
  /* right: 150px; */
}

.sneakers{
  position: absolute;
  top: 600px;
  left: 260px;
  /* top: -400px; */
  /* left: 150px; */
  /*right: 165px; */
}

.hat{
  position: absolute;
  /* top: -1130px; */
  top: 90px;
  left: 250px;
  /*right: 380px; */
}

.jacket{
  position: absolute;
  /* top: -1080px; */
  top: 280px;
  left: 260px;
}
</style>
