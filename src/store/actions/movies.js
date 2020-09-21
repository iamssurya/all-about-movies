import { getPopularMoviesList, searchMovie } from "api/";
import {
  receiveMovies,
  requestMovies,
  returnMoviesNotFound,
} from "../dispatchers";

/**
 * Fetch movie details
 * 
 * @param {String} storeName
 */
const fetchMovies = (storeName) => (dispatch) => {
  dispatch(requestMovies(storeName));

  return getPopularMoviesList().then((response) => {
    dispatch(receiveMovies(response.data, storeName));
  });
};

/**
 * Search for movie
 * 
 * @param {string} storeName
 */
const searchMovies = (storeName) => (dispatch) => {
  dispatch(requestMovies(storeName));

  return searchMovie(storeName).then((response) => {
    if (response && response.data && response.data.results.length > 0) {
      dispatch(receiveMovies(response.data, storeName));
    } else {
      dispatch(returnMoviesNotFound(storeName));
    }
  });
};

/**
 * Check if data is present in store
 * 
 * @param {*} state
 * @param {String} storeName
 */
export const shouldFetchMovies = (state, storeName) => {
  const { moviesReducer } = state;
  const details = moviesReducer[storeName];

  if (Array.isArray(details) && !details.length) {
    return true;
  }

  return !details || Object.keys(details).length < 1;
};

/**
 * Peek Movie data
 * 
 * @param {String} storeName
 */
export const peekMovies = (storeName) => (dispatch, getState) => {
  if (shouldFetchMovies(getState(), storeName)) {
    return dispatch(fetchMovies(storeName));
  }
};

/**
 * Peek and Search for Movie
 * 
 * @param {String} storeName
 */
export const peekSearchMovies = (storeName) => (dispatch, getState) => {
  if (shouldFetchMovies(getState(), storeName)) {
    return dispatch(searchMovies(storeName));
  }
};
