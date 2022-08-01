export default {
  requests(state, getters, rootState, rootGetters) {
    const coachID = rootGetters.userID;
    return state.requests.filter(req => req.coachID === coachID);
  },
  hasRequests(state, getters) {
    return getters.requestshetters.requests.length > 0;
  },
};
