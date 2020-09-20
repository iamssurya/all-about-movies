import { getPersonDetail } from "api/";
import {
  requestPersonDetails,
  receivePersonDetails,
  returnPersonDetailsNotFound,
} from "../dispatchers";

/**
 * Fetch person details
 * 
 * @param {String} storeName 
 */
const fetchPersonDetails = (storeName) => (dispatch) => {
  dispatch(requestPersonDetails(storeName));

  return getPersonDetail(storeName).then((response) => {
    let [generalDetails, personCredits] = response;
    if (generalDetails && personCredits) {
      generalDetails = generalDetails.data;
      personCredits = personCredits.data;
      dispatch(
        receivePersonDetails({ generalDetails, personCredits }, storeName)
      );
    } else {
      dispatch(returnPersonDetailsNotFound(storeName));
    }
  });
};

/**
 * Check the store if data is present
 * 
 * @param {*} state 
 * @param {String} storeName 
 */
export const shouldFetchPersonDetails = (state, storeName) => {
  const { personDetailsReducer } = state;
  const details = personDetailsReducer[storeName];

  if (Array.isArray(details) && !details.length) {
    return true;
  }

  return !details || Object.keys(details).length < 1;
};

/**
 * Peek for person details
 * 
 * @param {String} storeName 
 */
export const peekPersonDetails = (storeName) => (dispatch, getState) => {
  if (shouldFetchPersonDetails(getState(), storeName)) {
    return dispatch(fetchPersonDetails(storeName));
  }
};
