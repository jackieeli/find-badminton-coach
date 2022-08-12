export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userID = payload.userID;
    state.username = payload.username;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
