import {
  selectMovieId,
  requestMovieDetails,
  receiveMovieDetails,
  returnMovieDetailsNotFound,
} from "../movieDetails";
import {
  SELECT_MOVIE_ID,
  FETCH_MOVIE_DETAILS,
  GET_MOVIE_DETAILS,
} from "store/constants";

describe("Dispatchers:: MovieDetails test cases", () => {
  const storeName = "test-store";
  it("selectMovieId() should return correct data with movieId", () => {
    const dispatchResult = {
      type: SELECT_MOVIE_ID,
      storeName,
    };
    expect(selectMovieId(storeName)).toEqual(dispatchResult);
  });

  it("requestMovieDetails() should return data", () => {
    const dispatchResult = {
      type: FETCH_MOVIE_DETAILS,
      storeName,
    };
    expect(requestMovieDetails(storeName)).toEqual(dispatchResult);
  });

  it("receiveMovieDetails() should return data", () => {
    const dispatchResult = {
      type: GET_MOVIE_DETAILS,
      storeName,
      name: "test-name",
    };

    const data = {
      name: "test-name",
    };
    expect(receiveMovieDetails(data, storeName)).toEqual(dispatchResult);
  });

  it("returnMovieDetailsNotFound() should return data", () => {
    const dispatchResult = {
      type: GET_MOVIE_DETAILS,
      storeName,
      isEmpty: true,
    };

    expect(returnMovieDetailsNotFound(storeName)).toEqual(dispatchResult);
  });
});
