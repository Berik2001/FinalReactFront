import React from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import RegisterForm from "../components/Registration/RegisterForm.js";
function Register(props) {
    return (
        <div>
            <Header/>
            <RegisterForm/>
            <Footer/>
        </div>
    );
}

export default Register;