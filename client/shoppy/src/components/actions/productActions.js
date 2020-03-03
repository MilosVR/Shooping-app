import axios from "axios";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const PRODUCT_BY_ID = "PRODUCT_BY_ID";
export const ADD_TO_BAG = "ADD_TO_BAG";
export const REMOVE_FROM_BAG = "REMOVE_FROM_BAG";

export const fetchProducts = param => dispatch => {
  axios
    .get(`http://localhost:5000/api/products/filter/${param}`)
    .then(res => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export const productById = (e, id) => dispatch => {
  axios
    .get(`http://localhost:5000/api/products/${id}`)
    .then(res => {
      dispatch({
        type: PRODUCT_BY_ID,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addToBag = (e, id) => dispatch => {
  axios
    .get(`http://localhost:5000/api/products/add_to_cart/${id}`)
    .then(res => {
      dispatch({
        type: PRODUCT_BY_ID,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
export const removeFromBag = (e, id) => dispatch => {
  axios
    .get(`http://localhost:5000/api/products/remove_from_cart/${id}`)
    .then(res => {
      dispatch({
        type: PRODUCT_BY_ID,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
