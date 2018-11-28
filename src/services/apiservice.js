import axios from 'axios';
import config from '../config';

async function callAPI(options, token = null) {
  try {
    axios.defaults.baseURL = config.BASE_URL;
    axios.defaults.headers.common['Authorization'] = token
      ? `Bearer ${token}`
      : '';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Accept'] = 'application/json';
    const res = await axios(options);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error(`Could not connect to server`);
    } else {
      // Something happened - triggered an Error
      throw new Error(error);
    }
  }
}

export default {
  callAPI,
};
