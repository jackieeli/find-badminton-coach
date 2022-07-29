import axios from 'axios';

let timer;

export default {
  async auth(context, payload) {
    const apiKey = context.getters.apiKey;
    const mode = payload.mode;

    let url = `https://identitytoolkit.googleapis.com/
      v1/accounts:signInWithPassword?key=${apiKey}`;
    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/
        v1/accounts:signUp?key=${apiKey}`;
    }

    try {
      const { data: responseData } = await axios.post(url, {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      });

      const expiresIn = +responseData.expiresIn * 1000;
      const expirationDate = Date.now() + expiresIn;

      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userID', responseData.localId);
      localStorage.setItem('tokenExpiration', expirationDate);

      timer = setTimeout(() => {
        context.dispatch('autoLogout');
      }, expiresIn);

      context.commit('setUser', {
        token: responseData.idToken,
        userID: responseData.localId,
      });
    } catch (err) {
      const error = new Error(
        err.response.data.error.message || 'Failed to authenticate'
      );
      throw error;
    }
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userID');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
  },
};
