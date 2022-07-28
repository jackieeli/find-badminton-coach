import axios from 'axios';

let timer;

export default {
  auth(context, payload) {
    const apikey = context.getters.apiKey;
    const mode = payload.mode;

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    if (mode === 'signup') {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    }
  }
}