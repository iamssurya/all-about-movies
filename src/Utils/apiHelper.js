import * as axios from "axios";
import { API_URL } from "../site-config";

axios.defaults.baseURL = API_URL;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        break;
      case 404:
      case 403:
        window.location.href = "/error";
        break;
      default:
        return;
    }
    return Promise.reject(error.response);
  }
);

export default axios;
