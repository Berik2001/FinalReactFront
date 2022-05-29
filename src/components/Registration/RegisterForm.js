import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';

import '../../styles/Auth.css';
const RegisterForm = () => {
  const nav = useNavigate();
  const [userData, setUserData] = useState({
    username: null,
    email: null,
    password: null,
  });

  const setData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = () => {
    AuthService.register(userData).then((response) => {
      return response.status == '200' ? nav('/login') : alert('Ошибка при регистрации');
    });
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <Container>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="divider d-flex align-items-center my-4"></div>

                <div className="form-outline mb-4">
                  <input
                    name="username"
                    value={userData.username}
                    onChange={setData}
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter your Username"
                  />
                  <label className="form-label" for="form3Example3">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    name="email"
                    value={userData.email}
                    onChange={setData}
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" for="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    name="password"
                    value={userData.password}
                    onChange={setData}
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={signUp}
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Do you have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegisterForm;
