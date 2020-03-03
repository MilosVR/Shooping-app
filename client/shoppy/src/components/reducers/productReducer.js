import { FETCH_PRODUCTS, PRODUCT_BY_ID } from "../actions/productActions";

const initialState = {
  products: [],
  product: null,
  loading: true,
  shoppingItems: []
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload,
        loading: false,
        shoppingItems: [...state.shoppingItems, action.payload]
      };
    default:
      return state;
  }
};
export default productReducer;
