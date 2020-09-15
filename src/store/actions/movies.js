import { getPopularMoviesList } from "../../Api";
import { FETCH_MOVIES, GET_MOVIES } from "../constants";

export const requestMovies = () => ({
  type: FETCH_MOVIES,
});

export const receiveMovies = (data) => ({
  type: GET_MOVIES,
  movies: data.results,
  page: data.page,
  total_pages: data.total_pages,
  total_results: data.total_results,
  receivedAt: Date.now(),
});

const fetchMovies = () => (dispatch) => {
  dispatch(requestMovies());

  return getPopularMoviesList().then((response) => {
    dispatch(receiveMovies(response.data));
  });
};

const shouldFetchMovies = (state) => {
  const { moviesReducer } = state;
  const { movies } = moviesReducer;

  return movies && movies.length < 1;
};

export const peekMovies = () => (dispatch, getState) => {
  if (shouldFetchMovies(getState())) {
    return dispatch(fetchMovies());
  }
};
