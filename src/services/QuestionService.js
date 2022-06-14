import axios from 'axios';
const REVIEW_API_BASE_URL = 'http://localhost:8080/api/v1/questions';
class QuestionService {
  getAllQuestion() {
    return axios.get(REVIEW_API_BASE_URL);
  }
  createQuestion(data) {
    return axios.post(REVIEW_API_BASE_URL + `/create`, data);
  }
  updateQuestion(data) {
    return axios.put(REVIEW_API_BASE_URL, data);
  }

  deleteQuestion(id) {
    return axios.delete(REVIEW_API_BASE_URL + '/delete/' + id);
  }
}
export default new QuestionService();
