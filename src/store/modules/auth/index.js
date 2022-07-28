import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  state() {
    return {
      userID: '',
      token: '',
      didAutoLogout: false,
      API_KEY: 'xxx-xxx', // waiting for the real value.
    };
  },
  mutations,
  getters,
  actions,
};
