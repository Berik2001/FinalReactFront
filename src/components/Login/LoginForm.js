import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../../styles/Auth.css';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const LoginForm = () => {
  const nav = useNavigate();
  const [user, setUsers] = useState({
    username: '',
    password: '',
  });
  const { username, password } = user;
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => {
    setState({ open: true, ...newState });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const login = async (e) => {
    AuthService.login(user).then((response) => {
      debugger;
      !!response.authenticationToken
        ? nav('/')
        : handleClick({
            vertical: 'top',
            horizontal: 'center',
          });
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
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid username"
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                  <label className="form-label" for="form3Example3">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                  />
                  <label className="form-label" for="form3Example4">
                    Password
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    onClick={login}
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={handleClose}
                  message="I love snacks"
                  key={vertical + horizontal}>
                  <Alert severity="error" onClose={handleClose} sx={{ width: '100%' }}>
                    Такой логин или пароль не существует!!!
                  </Alert>
                </Snackbar>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginForm;
