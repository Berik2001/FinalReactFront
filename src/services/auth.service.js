import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login({ username, password }) {
    debugger;
    return axios
      .post(API_URL + 'login', {
        username,
        password,
      })
      .then((response) => {
        if (response.data.authenticationToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      })
      .catch((e) => {
        return e;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register({ username, email, password }) {
    debugger;
    return axios.post(API_URL + 'signup', {
      username: username,
      email: email,
      password: password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }
}

export default new AuthService();
