import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import axios from "axios";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
import url from "./config"

console.log(url)

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get(`${url}/items`)
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = item => (dispatch, getState) => {
  axios
    .post(`${url}/items`, item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`${url}/items/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
