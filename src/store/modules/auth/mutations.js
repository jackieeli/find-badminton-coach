export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userID = payload.userID;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
