import { getMovieDetail } from "api/";
import {
  requestMovieDetails,
  receiveMovieDetails,
  returnMovieDetailsNotFound,
} from "../dispatchers";

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

export const shouldFetchMovieDetails = (state, storeName) => {
  const { movieDetailsReducer } = state;
  const details = movieDetailsReducer[storeName];

  if (Array.isArray(details) && !details.length) {
    return true;
  }

  return !details || Object.keys(details).length < 1;
};

export const peekMovieDetails = (storeName) => (dispatch, getState) => {
  if (shouldFetchMovieDetails(getState(), storeName)) {
    return dispatch(fetchMovieDetails(storeName));
  }
};
