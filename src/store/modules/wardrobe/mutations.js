// import getters from "./getters";

export default {
  addOutfit(state, payload) {
    console.log(payload.id)
    console.log(state)
    console.log(state.items)
    state.items.push(payload);
  },
  setItems(state, payload) {
    state.items = payload;
  },
  deleteOutfit(state, payload) {
    state.items.splice(payload);
  },
  editOutfit(state, payload){
    // console.log(payload.id);
    // console.log(payload);
    // console.log(state.items);
    // console.log(payload.userId);
    // const itemArr = []
    // itemArr.push(payload)
    // state.items = itemArr;
    // state.items = payload;
    // state.items.find(item => {
    //   item.id === payload.id;
    // }) = payload;
    state.items[state.items.findIndex(item => item.id === payload.id)] = payload;
    // console.log(state.items);
  }
};