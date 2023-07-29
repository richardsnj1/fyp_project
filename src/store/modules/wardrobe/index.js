import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      items: [
        {
          id: "o1",
          userOutfit: "bbbb",
          title: "ccccc",
        },
        {
          id: "o2",
          userOutfit: "dddd",
          title: "eeee",
        },
      ],
      // outfit: [
      //   {
      //     id: "u1",
      //     userOutfit: "aaaa",
      //     item: "vvvv",
      //   },
      // ],
    };
  },
  mutations,
  actions,
  getters,
};
