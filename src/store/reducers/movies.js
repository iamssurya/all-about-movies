import { SELECT_MOVIE_LIST, FETCH_MOVIES, GET_MOVIES } from "../constants";

const initialMovieListState = {
  isFetching: true,
};

export const selectedMovieList = (state = "popular", action) => {
  switch (action.type) {
    case SELECT_MOVIE_LIST:
      return action.storeName;
    default:
      return state;
  }
};

const moviesListReducer = (state = initialMovieListState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MOVIES:
      return {
        ...state,
        isFetching: false,
        ...action,
      };
    default:
      return state;
  }
};

const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
    case GET_MOVIES:
      return {
        ...state,
        [action.storeName]: moviesListReducer(state[action.storeName], action),
      };
    default:
      return state;
  }
};

export default moviesReducer;
