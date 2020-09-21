import { getMovieDetail } from "api";
import {
  requestMovieDetails,
  receiveMovieDetails,
  returnMovieDetailsNotFound,
} from "../dispatchers";

/**
 * Fetch movie details with storename
 * 
 * @param {String} storeName 
 */
const fetchMovieDetails = (storeName) => (dispatch) => {
  dispatch(requestMovieDetails(storeName));

  return getMovieDetail(storeName).then((response) => {
    let [generalDetails, castAndCrewDetails] = response;
    if (generalDetails && castAndCrewDetails) {
      generalDetails = generalDetails.data;
      castAndCrewDetails = castAndCrewDetails.data;
      dispatch(
        receiveMovieDetails({ generalDetails, castAndCrewDetails }, storeName)
      );
    } else {
      dispatch(returnMovieDetailsNotFound(storeName));
    }
  });
};

/**
 * Check if data exists in store
 * 
 * @param {*} state 
 * @param {String} storeName 
 */
export const shouldFetchMovieDetails = (state, storeName) => {
  const { movieDetailsReducer } = state;
  const details = movieDetailsReducer[storeName];

  if (Array.isArray(details) && !details.length) {
    return true;
  }

  return !details || Object.keys(details).length < 1;
};

/**
 * Peek for movie details
 * 
 * @param {String} storeName 
 */
export const peekMovieDetails = (storeName) => (dispatch, getState) => {
  if (shouldFetchMovieDetails(getState(), storeName)) {
    return dispatch(fetchMovieDetails(storeName));
  }
};
