import { API_KEY, API_URL } from "../site-config";
import API from "../utils/apiHelper";

const personBasePath = "person";
const apiKey = `api_key=${API_KEY}`;

/**
 * Get person & credits detail
 * 
 * @param {String} personId 
 */
const getPersonDetail = (personId) => {
  const personDetail = API.get(
    `${API_URL}${personBasePath}/${personId}?${apiKey}`
  );
  const personCredits = API.get(
    `${API_URL}${personBasePath}/${personId}/credits?${apiKey}`
  );
  return Promise.all([personDetail, personCredits]);
};

export { getPersonDetail };
