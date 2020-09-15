import * as axios from "axios";
import { CONFIG } from "../site-config";

axios.defaults.baseURL = CONFIG;
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
    }
    return Promise.reject(error.response);
  }
);

export const catchError = (error) => console.log(error);

export default axios;
