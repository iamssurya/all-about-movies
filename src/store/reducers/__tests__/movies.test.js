import { SELECT_MOVIE_LIST, FETCH_MOVIES, GET_MOVIES } from "store/constants";
import moviesReducer, { selectedMovieList } from "../movies";

describe("Reducers:: Movies test cases", () => {
  const storeName = "test-movie";
  it("selectedMovieList() should select movie list with correct type", () => {
    const movieId = "kingkong";
    expect(selectedMovieList(movieId, SELECT_MOVIE_LIST)).toEqual(movieId);
  });

  it("moviesReducer() : Fetch should return isFetching true & isError false", () => {
    const action = {
      type: FETCH_MOVIES,
      storeName,
    };
    const expectedResult = {
      [storeName]: {
        isFetching: true,
        isEmpty: false,
        page: 0,
        total_pages: 0,
        total_results: 0,
        results: [],
      },
    };
    expect(moviesReducer({}, action)).toEqual(expectedResult);
  });

  it("moviesReducer() : Fetch should return isFetching false with data", () => {
    const action = {
      type: GET_MOVIES,
      storeName,
      page: 1,
      total_pages: 10,
      total_results: 1000,
      results: [
        {
          id: 1,
        },
      ],
    };
    const expectedResult = {
      [storeName]: {
        ...action,
        isFetching: false,
        isEmpty: false,
      },
    };
    expect(moviesReducer({}, action)).toEqual(expectedResult);
  });

  it("moviesReducer() : should return default state {} for different action", () => {
    const action = {
      type: "test-action",
      storeName,
      page: 1,
      total_pages: 10,
      total_results: 1000,
      results: [
        {
          id: 1,
        },
      ],
    };

    expect(moviesReducer({}, action)).toEqual({});
  });
});
