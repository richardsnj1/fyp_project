import { createStore } from "vuex";

import authModule from "./modules/auth/index.js";
import wardrobeModule from "./modules/wardrobe/index.js";
import userModule from "./modules/user/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    wardrobe: wardrobeModule,
    users: userModule,
  }
});

export default store;
