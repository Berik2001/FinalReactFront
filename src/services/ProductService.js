import axios from 'axios';

const PRODUCT_API_BASE_URL = 'http://localhost:8080/api/v1/products';
class ProductService {
  getProductByCategoryId(id) {
    return axios.get(PRODUCT_API_BASE_URL + `/${Number(id)}`);
  }

  getAllProduct(id) {
    return axios.get(PRODUCT_API_BASE_URL);
  }

  updateProduct(product) {
    return axios.put(PRODUCT_API_BASE_URL, product);
  }
  deleteProduct(id) {
    return axios.delete(PRODUCT_API_BASE_URL, `delete//${id}`);
  }
  createProduct(product) {
    debugger;
    return axios.post(PRODUCT_API_BASE_URL, product);
  }
}
export default new ProductService();
