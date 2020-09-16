import { getMovieDetail } from "api/";
import {
  requestMovieDetails,
  receiveMovieDetails,
  returnMovieDetailsNotFound,
} from "../dispatchers";

const fetchMovieDetails = (storeName) => (dispatch) => {
  dispatch(requestMovieDetails(storeName));

  return getMovieDetail(storeName).then((response) => {
    const [generalDetails, crewDetails] = response;
    if (generalDetails && crewDetails) {
      dispatch(receiveMovieDetails({ generalDetails, crewDetails }, storeName));
    } else {
      dispatch(returnMovieDetailsNotFound(storeName));
    }
  });
};

const shouldFetchMovieDetails = (state, storeName) => {
  const { movieDetailsReducer } = state;
  const details = movieDetailsReducer[storeName];

  return !details || Object.keys(details).length > 1;
};

export const peekMovieDetails = (storeName) => (dispatch, getState) => {
  if (shouldFetchMovieDetails(getState(), storeName)) {
    return dispatch(fetchMovieDetails(storeName));
  }
};
