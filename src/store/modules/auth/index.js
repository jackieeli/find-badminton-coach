import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  state() {
    return {
      userID: '',
      token: '',
      username: '',
      didAutoLogout: false,
      authUrl: 'http://localhost:3000', // the server should be run first
      API_KEY: 'Jackie-loves-Candy', // for the auth
    };
  },
  mutations,
  getters,
  actions,
};
