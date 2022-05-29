import axios from "axios";
const REVIEW_API_BASE_URL = "http://localhost:8080/api/v1/questions";
class QuestionService {
  getAllReview() {
    return axios.get(REVIEW_API_BASE_URL + `/read`);
  }
  createReview(data){
    return axios.post(REVIEW_API_BASE_URL + `/create`,data);
  }
}
export default new QuestionService();