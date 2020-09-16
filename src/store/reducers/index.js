import { combineReducers } from "redux";
import moviesReducer, { selectedMovieList } from "./movies";

const rootReducer = combineReducers({
  moviesReducer,
  selectedMovieList,
});

export default rootReducer;
