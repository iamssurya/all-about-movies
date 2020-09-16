import {
  FETCH_MOVIE_DETAILS,
  GET_MOVIE_DETAILS,
  SELECT_MOVIE_ID,
} from "store/constants";

const initialMovieListState = {
  isFetching: true,
  isEmpty: false,
};

export const selectedMovieId = (state = "", action) => {
  switch (action.type) {
    case SELECT_MOVIE_ID:
      return action.storeName;
    default:
      return state;
  }
};

const movieInfoReducer = (state = initialMovieListState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        isFetching: false,
        ...action,
      };
    default:
      return state;
  }
};

const movieDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS:
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        [action.storeName]: movieInfoReducer(state[action.storeName], action),
      };
    default:
      return state;
  }
};

export default movieDetailsReducer;
