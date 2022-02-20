import { GET_ERROR, CLEAR_ERROR } from "./types";
import { dispatch } from "rxjs/internal/observable/pairs";

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
  return { type: GET_ERROR, payload: { msg, status, id } };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERROR
  };
};
