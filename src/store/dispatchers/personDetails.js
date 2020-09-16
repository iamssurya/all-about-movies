import {
  FETCH_PERSON_DETAILS,
  GET_PERSON_DETAILS,
  SELECT_PERSON_ID,
} from "store/constants";

export const selectPersonId = (storeName) => ({
  type: SELECT_PERSON_ID,
  storeName,
});

export const requestPersonDetails = (storeName) => ({
  type: FETCH_PERSON_DETAILS,
  storeName,
});

export const receivePersonDetails = (data, storeName) => ({
  type: GET_PERSON_DETAILS,
  storeName,
  ...data,
});

export const returnPersonDetailsNotFound = (storeName) => ({
  type: GET_PERSON_DETAILS,
  storeName,
  isEmpty: true,
});
