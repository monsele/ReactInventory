import axios from "axios";
const CategoryProduct = "https://localhost:44314/api/CategoryProduct/";
//const ProductApi = "https://localhost:44314/api/Product/";
export default {
  apiCategoryProducts(url = CategoryProduct) {
    return {
      fetchCategoryProductsById: (id) => axios.get(url + id),
    };
  },
};


// export const apiProduct=(url=ProductApi)=>({
//     CreateProduct:(data)=>axios.post(url,data),
//     DeleteProduct:id=>axios.delete(url+id)
// })