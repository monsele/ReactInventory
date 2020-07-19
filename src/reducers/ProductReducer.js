import {
  FETCH_ALL_PRODUCTS,
  FETCH_PRODUCT_BYID,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/action-types";

const initialState = {
  list: [],
  choice: {},
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return {
        ...state,
        list: action.payload,
      };
    case FETCH_PRODUCT_BYID:
      return {
        ...state,
        choice: action.payload,
      };

    default:
      return state;
  }
};
export default ProductReducer;
