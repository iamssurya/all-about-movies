import { shouldFetchPersonDetails } from "../personDetails";

describe("Actions:: MovieDetails test cases", () => {
  it("shouldFetchPersonDetails should return false if store is present and data is array", () => {
    const state = {
      personDetailsReducer: {
        testState: [
          {
            id: 1,
            data: "test",
          },
        ],
      },
    };
    const stateName = "testState";
    const result = shouldFetchPersonDetails(state, stateName);

    expect(result).toBeFalsy();
  });

  it("shouldFetchPersonDetails should return false if store is present and data is object", () => {
    const state = {
      personDetailsReducer: {
        testState: {
          id: 1,
          data: "test",
        },
      },
    };
    const stateName = "testState";
    const result = shouldFetchPersonDetails(state, stateName);

    expect(result).toBeFalsy();
  });

  it("shouldFetchPersonDetails should return true if store is not present", () => {
    const state = {
      personDetailsReducer: {
        notTestState: [
          {
            id: 1,
            data: "test",
          },
        ],
      },
    };
    const stateName = "testState";
    const result = shouldFetchPersonDetails(state, stateName);

    expect(result).toBeTruthy();
  });

  it("shouldFetchPersonDetails should return true if store is present, but empty", () => {
    const state = {
      personDetailsReducer: {
        testState: [],
      },
    };
    const stateName = "testState";
    const result = shouldFetchPersonDetails(state, stateName);

    expect(result).toBeTruthy();
  });
});
