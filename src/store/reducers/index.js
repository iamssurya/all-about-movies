import { combineReducers } from "redux";
import moviesReducer, { selectedMovieList } from "./movies";
import movieDetailsReducer, { selectedMovieId } from "./movieDetails";
import personDetailsReducer, { selectedPersonId } from "./personDetails";

const rootReducer = combineReducers({
  moviesReducer,
  selectedMovieList,
  movieDetailsReducer,
  selectedMovieId,
  personDetailsReducer,
  selectedPersonId,
});

export default rootReducer;
