import { FETCH_MOVIES, GET_MOVIES, SELECT_MOVIE_LIST } from "../constants";

export const selectMovieStore = (storeName) => ({
  type: SELECT_MOVIE_LIST,
  storeName,
});

export const requestMovies = (storeName) => ({
  type: FETCH_MOVIES,
  storeName,
});

export const receiveMovies = (data, storeName) => ({
  type: GET_MOVIES,
  storeName,
  ...data,
});

export const returnMoviesNotFound = (storeName) => ({
  type: GET_MOVIES,
  storeName,
  isEmpty: true,
});
