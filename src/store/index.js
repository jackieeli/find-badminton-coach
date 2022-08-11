import { createStore } from 'vuex';
import coaches from './modules/coaches';
import requests from './modules/requests';
import auth from './modules/auth';

const store = createStore({
  modules: {
    coaches,
    requests,
    auth,
  },
  state() {
    return {
      databaseUrl:
        'https://find-badminton-coach-default-rtdb.asia-southeast1.firebasedatabase.app', // waiting for the real url...
    };
  },
  mutations: {},
  getters: {
    databaseUrl(state) {
      return state.databaseUrl;
    },
  },
});

export default store;
