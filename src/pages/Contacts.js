import React from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Location from "../components/Contacts/Location";
import ContactsInfo from "../components/Contacts/ContactsInfo";
import Question from "../components/Contacts/Question";
function Contacts(props) {
    return (
        <div>
           <Header/> 
           <Location/>
           <ContactsInfo/>
           <Question/>
           <Footer/>

        </div>
    );
}

export default Contacts;