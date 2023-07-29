import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      // userRegistered: false,
      users: [
        // {
        //   id: "u1",
        //   email: "testing@gmail.com",
        //   username: "aaaa",
        // },
        // {
        //   id: "u2",
        //   email: "testing2@gmail.com",
        //   username: "zzzz",
        // },
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
