import { API_KEY, API_URL } from "../site-config";
import API from "../Utils/apiHelper";

const personBasePath = "person";
const apiKey = `api_key=${API_KEY}`;

/**
 * GET PERSON DETAIL
 */

const getPersonDetail = (personId) => {
  return API.get(`${API_URL}${personBasePath}/${personId}?${apiKey}`);
};

export { getPersonDetail };
