export default {
  userID(state) {
    return state.userID;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  authUrl(state) {
    return state.authUrl;
  },
  apiKey(state) {
    return state.API_KEY;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};
