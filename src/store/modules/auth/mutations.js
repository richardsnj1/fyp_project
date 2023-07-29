export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
    // state.tokenExpiration = payload.tokenExpiration;
  },
  signUser(state,payload){
    state.token = null;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  setAutoLogout(state){
    state.didAutoLogout = true;
  }
};
