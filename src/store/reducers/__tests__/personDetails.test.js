import {
  FETCH_PERSON_DETAILS,
  GET_PERSON_DETAILS,
  SELECT_PERSON_ID,
} from "store/constants";
import personDetailsReducer, { selectedPersonId } from "../personDetails";

describe("Reducers:: PersonDetails test cases", () => {
  const storeName = "test-person";
  it("selectedPersonId() should select person Id with correct type", () => {
    const personId = "test-person";
    expect(selectedPersonId(personId, SELECT_PERSON_ID)).toEqual(personId);
  });

  it("personDetailsReducer() : Fetch should return isFetching true & isError false", () => {
    const action = {
      type: FETCH_PERSON_DETAILS,
      storeName,
    };
    const expectedResult = {
      [storeName]: {
        isFetching: true,
        isEmpty: false,
      },
    };
    expect(personDetailsReducer({}, action)).toEqual(expectedResult);
  });

  it("personDetailsReducer() : Fetch should return isFetching false with data", () => {
    const action = {
      type: GET_PERSON_DETAILS,
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
    expect(personDetailsReducer({}, action)).toEqual(expectedResult);
  });

  it("personDetailsReducer() : should return default state {} for different action", () => {
    const action = {
      type: "test-action",
      storeName,
      name: "Ben",
      age: 32,
    };

    expect(personDetailsReducer({}, action)).toEqual({});
  });
});
