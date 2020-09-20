import { shouldFetchMovieDetails } from "../movieDetails";

describe("Actions:: MovieDetails test cases", () => {
  it("shouldFetchMovieDetails should return false if store is present and data is array", () => {
    const state = {
      movieDetailsReducer: {
        testState: [
          {
            id: 1,
            data: "test",
          },
        ],
      },
    };
    const stateName = "testState";
    const result = shouldFetchMovieDetails(state, stateName);

    expect(result).toBeFalsy();
  });

  it("shouldFetchMovieDetails should return false if store is present and data is object", () => {
    const state = {
      movieDetailsReducer: {
        testState: {
          id: 1,
          data: "test",
        },
      },
    };
    const stateName = "testState";
    const result = shouldFetchMovieDetails(state, stateName);

    expect(result).toBeFalsy();
  });

  it("shouldFetchMovieDetails should return true if store is not present", () => {
    const state = {
      movieDetailsReducer: {
        notTestState: [
          {
            id: 1,
            data: "test",
          },
        ],
      },
    };
    const stateName = "testState";
    const result = shouldFetchMovieDetails(state, stateName);

    expect(result).toBeTruthy();
  });

  it("shouldFetchMovieDetails should return true if store is present, but empty", () => {
    const state = {
      movieDetailsReducer: {
        testState: [],
      },
    };
    const stateName = "testState";
    const result = shouldFetchMovieDetails(state, stateName);

    expect(result).toBeTruthy();
  });
});
