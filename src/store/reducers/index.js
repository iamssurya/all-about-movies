import { combineReducers } from "redux";
import moviesReducer, { selectedMovieList } from "./movies";
import movieDetailsReducer, { selectedMovieId } from "./movieDetails";

const rootReducer = combineReducers({
  moviesReducer,
  selectedMovieList,
  movieDetailsReducer,
  selectedMovieId,
});

export default rootReducer;
