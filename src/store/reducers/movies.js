import { FETCH_MOVIES, GET_MOVIES } from "../constants";

const initialState = {
  isFetching: true,
  movies: [],
  page: 1,
  total_pages: 1,
  total_results: 1
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        isFetching: true,
      };
    case GET_MOVIES:
      return {
        ...state,
        ...action,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default moviesReducer;
