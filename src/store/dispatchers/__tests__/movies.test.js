import { FETCH_MOVIES, GET_MOVIES, SELECT_MOVIE_LIST } from "store/constants";
import {
  selectMovieStore,
  requestMovies,
  receiveMovies,
  returnMoviesNotFound,
} from "../movies";

describe("Dispatchers:: Movies test cases", () => {
  const storeName = "test-store";
  it("selectMovieStore() should return correct data with movieId", () => {
    const dispatchResult = {
      type: SELECT_MOVIE_LIST,
      storeName,
    };
    expect(selectMovieStore(storeName)).toEqual(dispatchResult);
  });

  it("requestMovies() should return correct data with movieId", () => {
    const dispatchResult = {
      type: FETCH_MOVIES,
      storeName,
    };
    expect(requestMovies(storeName)).toEqual(dispatchResult);
  });

  it("receiveMovies() should return correct data with movieId", () => {
    const dispatchResult = {
      type: GET_MOVIES,
      storeName,
      name: "test-name",
    };

    const data = {
      name: "test-name",
    };
    expect(receiveMovies(data, storeName)).toEqual(dispatchResult);
  });

  it("returnMoviesNotFound() should return correct data with movieId", () => {
    const dispatchResult = {
      type: GET_MOVIES,
      storeName,
      isEmpty: true,
    };
    expect(returnMoviesNotFound(storeName)).toEqual(dispatchResult);
  });
});
