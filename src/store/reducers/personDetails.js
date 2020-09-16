import {
  FETCH_PERSON_DETAILS,
  GET_PERSON_DETAILS,
  SELECT_PERSON_ID,
} from "store/constants";

const initialPersonState = {
  isFetching: true,
  isEmpty: false,
};

export const selectedPersonId = (state = "", action) => {
  switch (action.type) {
    case SELECT_PERSON_ID:
      return action.storeName;
    default:
      return state;
  }
};

const personInfoReducer = (state = initialPersonState, action) => {
  switch (action.type) {
    case FETCH_PERSON_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PERSON_DETAILS:
      return {
        ...state,
        isFetching: false,
        ...action,
      };
    default:
      return state;
  }
};

const personDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PERSON_DETAILS:
    case GET_PERSON_DETAILS:
      return {
        ...state,
        [action.storeName]: personInfoReducer(state[action.storeName], action),
      };
    default:
      return state;
  }
};

export default personDetailsReducer;
