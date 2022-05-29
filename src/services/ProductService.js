import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/products";
class ProductService {
  getProductByCategoryId({ id }) {
    return  axios.get(PRODUCT_API_BASE_URL + `/${id}`);
  }
 
}
export default new ProductService();
