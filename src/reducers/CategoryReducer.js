import {
  FETCH_ALL_CATEGORIES,
  FETCH_CATEGORY_BYID,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_ALL_PRODUCTS,
} from "../constants/action-types";

const initialState = {
  list:[],
  choice:{},
  productList:[]
};
const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES:
      return {
        ...state,
        list: action.payload,
      };
    case FETCH_CATEGORY_BYID:
      return {
        ...state,
        choice: action.payload,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        list: state.list.map((x) =>
          x.id == action.payload.id ? action.payload : x
        ),
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        list: state.list.filter((x) => x.id != action.payload),
      };
    // case FETCH_ALL_PRODUCTS:
    //   return {
    //     ...state,
    //     productList: action.payload,
    //   };
    default:
      return state;
  }
};
export default CategoryReducer;
