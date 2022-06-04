import axios from 'axios';
const ORDER_API_BASE_URL = 'http://localhost:8080/api/v1/order';
class QuestionService {
  getAllOrder() {
    return axios.get(ORDER_API_BASE_URL);
  }
  createOrder(data) {
    return axios.post(ORDER_API_BASE_URL+"/create", data);
  }
  updateOrder(data) {
    return axios.put(ORDER_API_BASE_URL, data);
  }

  deleteOrder(id) {
    return axios.delete(ORDER_API_BASE_URL + '/delete/' + id);
  }
}
export default new QuestionService();
