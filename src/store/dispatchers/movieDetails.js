import {
  FETCH_MOVIE_DETAILS,
  GET_MOVIE_DETAILS,
  SELECT_MOVIE_ID,
} from "store/constants";

export const selectMovieId = (storeName) => ({
  type: SELECT_MOVIE_ID,
  storeName,
});

export const requestMovieDetails = (storeName) => ({
  type: FETCH_MOVIE_DETAILS,
  storeName,
});

export const receiveMovieDetails = (data, storeName) => ({
  type: GET_MOVIE_DETAILS,
  storeName,
  ...data,
});

export const returnMovieDetailsNotFound = (storeName) => ({
  type: GET_MOVIE_DETAILS,
  storeName,
  isEmpty: true,
});
