import React from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import MainDelivery from "../components/Delivery/MainDelivery.js";
import UrgentDelivery from "../components/Delivery/UrgentDelivery.js";
function Delivery(props) {
    return (
        <div>
            <Header/>
<MainDelivery/>
            <UrgentDelivery/>
<Footer/>
        </div>
    );
}

export default Delivery;