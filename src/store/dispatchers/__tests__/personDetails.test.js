import {
  FETCH_PERSON_DETAILS,
  GET_PERSON_DETAILS,
  SELECT_PERSON_ID,
} from "store/constants";
import {
  selectPersonId,
  requestPersonDetails,
  receivePersonDetails,
  returnPersonDetailsNotFound,
} from "../personDetails";

describe("Dispatchers:: PersonDetails test cases", () => {
  const storeName = "test-store";
  it("selectPersonId() should return correct data with movieId", () => {
    const dispatchResult = {
      type: SELECT_PERSON_ID,
      storeName,
    };
    expect(selectPersonId(storeName)).toEqual(dispatchResult);
  });

  it("requestPersonDetails() should return correct data with movieId", () => {
    const dispatchResult = {
      type: FETCH_PERSON_DETAILS,
      storeName,
    };
    expect(requestPersonDetails(storeName)).toEqual(dispatchResult);
  });

  it("receivePersonDetails() should return correct data with movieId", () => {
    const dispatchResult = {
      type: GET_PERSON_DETAILS,
      storeName,
      name: "test-name",
    };

    const data = {
      name: "test-name",
    };
    expect(receivePersonDetails(data, storeName)).toEqual(dispatchResult);
  });

  it("returnPersonDetailsNotFound() should return correct data with movieId", () => {
    const dispatchResult = {
      type: GET_PERSON_DETAILS,
      storeName,
      isEmpty: true,
    };
    expect(returnPersonDetailsNotFound(storeName)).toEqual(dispatchResult);
  });
});
