import {
  FETCH_MOVIE_DETAILS,
  GET_MOVIE_DETAILS,
  SELECT_MOVIE_ID,
} from "store/constants";
import movieDetailsReducer, { selectedMovieId } from "../movieDetails";

describe("Reducers:: MovieDetails test cases", () => {
  const storeName = "test-movie";
  it("selectedMovieId() should select movie Id with correct type", () => {
    const movieId = "test-movie";
    expect(selectedMovieId(movieId, SELECT_MOVIE_ID)).toEqual(movieId);
  });

  it("movieDetailsReducer() : Fetch should return isFetching true & isError false", () => {
    const action = {
      type: FETCH_MOVIE_DETAILS,
      storeName,
    };
    const expectedResult = {
      [storeName]: {
        isFetching: true,
        isEmpty: false,
      },
    };
    expect(movieDetailsReducer({}, action)).toEqual(expectedResult);
  });

  it("movieDetailsReducer() : Fetch should return isFetching false with data", () => {
    const action = {
      type: GET_MOVIE_DETAILS,
      storeName,
      name: "Ben",
      age: 32,
    };
    const expectedResult = {
      [storeName]: {
        ...action,
        isFetching: false,
        isEmpty: false,
      },
    };
    expect(movieDetailsReducer({}, action)).toEqual(expectedResult);
  });

  it("movieDetailsReducer() : should return default state {} for different action", () => {
    const action = {
      type: "test-action",
      storeName,
      name: "Ben",
      age: 32,
    };

    expect(movieDetailsReducer({}, action)).toEqual({});
  });
});
