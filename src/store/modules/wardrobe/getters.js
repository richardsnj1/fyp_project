export default {
  items(state, _, _2, rootGetters) {
    const clientId = rootGetters.userId;
    return state.items.filter((item) => item.userId === clientId);
  },
  allItems(state) {
    return state.items;
  },
  hasItems(_, getters) {
    return getters.items && getters.items.length > 0;
  },
  allShirt(_, getters){
    const Items = getters.items;
    const Shirts = Items.filter((item) => item.userOutfit === "Shirt");
    console.log(Shirts);
    return Shirts;
  },
  // currentOutfit(state, getters){
  //   const items = getters.items;
  //   console.log(state.id);
  //   const itemId = state.id;
  //   console.log(itemId);
  //   const currentOutfit = items.find((item) => item.id === itemId);
  //   return currentOutfit;
  // }
};
