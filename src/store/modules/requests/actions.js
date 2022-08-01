import axios from 'axios';
import { FileWatcherEventKind } from 'typescript';

export default {
  async contactCoach(context, payload) {
    const newRequests = {
      userEmail: payload.email,
      message: payload.message,
      timestamp: payload.timestamp,
    };

    const databaseUrl = context.rootGetters.databaseUrl;

    try {
      const { data: responseData } = await axios.post(
        `${databaseUrl}/requests/${payload.coachID}.json`,
        newRequests
      );

      // firebase generates id on name property
      newRequests.id = responseData.name;
      // add it to local data but not to the server, bcs the key of it is coachID.
      newRequests.coachID = payload.coachID;

      context.commit('addRequest', newRequests);
    } catch (err) {
      const error = new Error(err.message || 'Failed to send request.');
      throw error;
    }
  },
  async fetchRequests(context) {
    const coachID = context.rootGetters.userID;
    const databaseUrl = context.rootGetters.databaseUrl;

    const token = context.rootGetters.token;
    const options = {};

    if (token) {
      options.params = {
        auth: token,
      };
    }

    try {
      const { data: responseData } = await axios.get(
        `${databaseUrl}/requests/${coachID}.json`,
        options
      );

      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          coachID,
          userEmail: responseData[key].userEmail,
          message: responseData[key].message,
          timestamp: responseData[key].timestamp,
        };
        requests.push(request);
      }

      context.commit('setRequests', requests);
    } catch (err) {
      const error = new Error(
        err.response.data.error || 'Failed to fetch request.'
      );
      throw error;
    }
  },
};
