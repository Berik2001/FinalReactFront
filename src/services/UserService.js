import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/api/auth/";
class UserService {
  loginUser() {
    return axios.get(USER_API_BASE_URL + `/login`);
  }
  registerUser(data){
    return axios.post(USER_API_BASE_URL + `/register`);
  }
}
export default new UserService();