export default {
  users(state) {
    return state.users;
  },
  hasUsers(state) {
    return state.users && state.users.length > 0;
  },
  isUser(_, getters, _2, rootGetters) {
    const users = getters.users;
    const userId = rootGetters.userId;
    return users.some((user) => user.id === userId);
  },
  currentUser(_, _2, _3, rootGetters) {
    return rootGetters.userId; //get current user id
    // return clientId;
    // console.log(state.users);
    // return state.users.filter(user => user.userId === clientId);
  },
  currentUsername(_, getters, _2, rootGetters) {
    const users = getters.users;
    const userId = rootGetters.userId;
    const currentUser = users.find((user) => user.id === userId);
    if(currentUser === undefined){
      return null;
    }
    return currentUser.username;
  },
  currentEmail(_, getters, _2, rootGetters) {
    const users = getters.users;
    const userId = rootGetters.userId;
    const currentUser = users.find((user) => user.id === userId);
    if(currentUser === undefined){
      return null;
    }
    return currentUser.email;
  },
};
