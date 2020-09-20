import { shouldFetchMovies } from "../movies";

describe("Actions:: MovieDetails test cases", () => {
  it("shouldFetchMovies should return false if store is present", () => {
    const state = {
      moviesReducer: {
        testState: [
          {
            id: 1,
            data: "test",
          },
        ],
      },
    };
    const stateName = "testState";
    const result = shouldFetchMovies(state, stateName);

    expect(result).toBeFalsy();
  });

  it("shouldFetchMovies should return true if store is not present", () => {
    const state = {
      moviesReducer: {
        notTestState: [
          {
            id: 1,
            data: "test",
          },
        ],
      },
    };
    const stateName = "testState";
    const result = shouldFetchMovies(state, stateName);

    expect(result).toBeTruthy();
  });

  it("shouldFetchMovies should return true if store is present, but empty", () => {
    const state = {
      moviesReducer: {
        testState: [],
      },
    };
    const stateName = "testState";
    const result = shouldFetchMovies(state, stateName);

    expect(result).toBeTruthy();
  });
});
