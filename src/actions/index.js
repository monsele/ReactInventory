import {
  FETCH_ALL_CATEGORIES,
  FETCH_CATEGORY_BYID,
  CREATE_CATEGORY,
  FETCH_ALL_PRODUCTS,
} from "../constants/action-types";
import api from "./api";
import product  from "./Productapi";
//   DELETE_CATEGORY,
//   CREATE_CATEGORY,
//   UPDATE_CATEGORY,

export const GetCategories = (cates) => ({
  type: FETCH_ALL_CATEGORIES,
  payload: cates,
});
export const fetchAllCategories = () => (dispatch) => {
  api
    .apiCategory()
    .fetchAll()
    .then((res) => {
      dispatch(GetCategories(res.data));
    });
};

export const GetCategory = (some) => ({
  type: FETCH_CATEGORY_BYID,
  payload: some,
});
export const fetchCategory = (id) => (dispatch) => {
  api
    .apiCategory()
    .fetchById(id)
    .then((res) => {
      console.log(res.data["data"]);
      dispatch(GetCategory(res.data.data));
    });
};

export const CreateCategory = (data) => ({
  type: CREATE_CATEGORY,
  payload: data,
});
export const fetchCreateCategory = (data) => (dispatch) => {
  api
    .apiCategory()
    .create(data)
    .then((res) => {
      console.log(data);
      dispatch(CreateCategory(data));
    })
    .catch((err) => console.log(err));
};

export const CategoryProducts = (data) => ({
  type: FETCH_ALL_PRODUCTS,
  payload: data,
});
export const fetchCategoryProducts = (id) => (dispatch) => {
  product
  .apiCategoryProducts()
  .fetchCategoryProductsById(id)
  .then((res) => {
    console.log(res.data);
    dispatch(CategoryProducts(res.data));
  });
};
