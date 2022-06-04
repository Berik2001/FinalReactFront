import axios from 'axios';
const CATEGORY_API_BASE_URL = 'http://localhost:8080/api/v1/category';
class CategoryService {
  getCategories() {
    return axios.get(CATEGORY_API_BASE_URL + `/categories`);
  }
  updateCategory(category) {
    return axios.put(CATEGORY_API_BASE_URL + `/categories`, category);
  }
  deleteCategory(id) {
    return axios.delete(CATEGORY_API_BASE_URL + `/categories/${id}`);
  }
  createCategory(category) {
    return axios.post(CATEGORY_API_BASE_URL + `/categories`, category);
  }
}
export default new CategoryService();
