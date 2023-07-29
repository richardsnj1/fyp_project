<template lang="pug">
.mtop 
  base-dialog(:show="!!error" title="An error occurred!" @close="handleError")
    p {{ error }}
  section
    header
      h2.d-flex.justify-content-center.title.white2(style="") Schedule
    .container-xl
      base-spinner(v-if="isLoading")
      .justify-content-center(v-else-if="hasItems && !isLoading")
        base-card.white2.d-flex
          h2 Filter the days 
          span.filter-option
            input(type="checkbox" id="Monday" checked @change="dayChange(0)")
            label(for="Monday") Monday
          span.filter-option
            input(type="checkbox" id="Tuesday" checked @change="dayChange(1)")
            label(for="Tuesday") Tuesday
          span.filter-option
            input(type="checkbox" id="Wednesday" checked @change="dayChange(2)")
            label(for="Wednesday") Wednesday
          span.filter-option
            input(type="checkbox" id="Thursday" checked @change="dayChange(3)")
            label(for="Thursday") Thursday
          span.filter-option
            input(type="checkbox" id="Friday" checked @change="dayChange(4)")
            label(for="Friday") Friday
          span.filter-option
            input(type="checkbox" id="Saturday" checked @change="dayChange(5)")
            label(for="Saturday") Saturday
          span.filter-option
            input(type="checkbox" id="Sunday" checked @change="dayChange(6)")
            label(for="Sunday") Sunday        
        section.col-sm(v-if="days[0]")
          base-card
            div(style="color: white;")
              h1 Monday
              today-fit
        section.col-sm(v-if="days[1]")
          base-card
            div(style="color: white;")
              h1 Tuesday
              today-fit
        section.col-sm(v-if="days[2]")
          base-card
            div(style="color: white;")
              h1 Wednesday
              today-fit
        section.col-sm(v-if="days[3]")
          base-card
            div(style="color: white;")
              h1 Thursday
              today-fit
        section.col-sm(v-if="days[4]")
          base-card
            div(style="color: white;")
              h1 Friday
              today-fit
        section.col-sm(v-if="days[5]")
          base-card
            div(style="color: white;")
              h1 Saturday
              today-fit
        section.col-sm(v-if="days[6]")
          base-card
            div(style="color: white;")
              h1 Sunday
              today-fit


      h3(v-else).title.d-flex.justify-content-center You don't have any items inside your wardrobe yet!
      
  //- h2 {{ RecommendItem2 }}
</template>

<script>
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
// import DayFilter from "../Schedule/DayFilter.vue";
import TodayFit from "../../Schedule/TodayFit.vue";
import AllShirt from "../../Recommendations/AllShirt.vue";
// import AllShirt from "../../Recommendations/AllShirt.vue";

export default {
  components: {
    // DayFilter,
    vSelect,
    AllShirt,
    TodayFit
  },
  data() {
    return {
      // currentDate: new Date().toString,
      outfit: "Shirt",
      title: "White",
      isLoading: false,
      error: null,
      days: [true, true, true, true, true, true, true],
    };
  },
  computed: {
    hasItems() {
      return this.$store.getters["wardrobe/hasItems"];
    },
    // RecommendItem2() {
    //   const randomShirt = this.$store.getters["wardrobe/items"].filter(
    //     (item) => item.userOutfit === "Shirt"
    //   );

    //   return randomShirt.find((item) => item.title === this.randomColor);
    //   // ret
    // },
    // changeValue(){

    // }
  },
  created() {
    this.loadItems();
  },
  methods: {
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
  },
};
</script>

<style scoped>
.mtop {
  margin-top: 85px;
}

.white {
  background-color: #f2f2f2 !important;
  border-radius: 5px;
}

.white2 {
  color: #f2f2f2;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}
.title{
  font-family: Lexend;
  color: #f2f2f2;
  margin: auto;
}
.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
