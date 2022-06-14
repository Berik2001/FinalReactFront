import React from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import LoginForm from "../components/Login/LoginForm.js";
function Login(props) {
    return (
        <div>
            <Header/>
            <LoginForm/>
            <Footer/>
        </div>
    );
}

export default Login;