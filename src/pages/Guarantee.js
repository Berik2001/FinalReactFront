import React from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import MainGuarantee from "../components/Guarantee/MainGuarantee.js";
import GuaranteeInfo from "../components/Guarantee/GuaranteeInfo.js";
function Guarantee(props) {
    return (
        <div>
            <Header/>
           <MainGuarantee/>
           <GuaranteeInfo/>
            <Footer/>
        </div>
    );
}

export default Guarantee;